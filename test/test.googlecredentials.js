/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var assert = require('assert');
var googleapis = require('../lib/googleapis.js');
var googleCredentials = require('../lib/auth/googlecredentials.js');
var nock = require('nock');
var fs = require('fs');

nock.disableNetConnect();

function createJSON() {
  return {
    "private_key_id": "key123",
    "private_key": "privatekey",
    "client_email": "hello@youarecool.com",
    "client_id": "client123",
    "type": "service_account"
  };
}

function stringEndsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

describe('googleCredentials', function() {
  describe('.fromJson', function () {

    it('should error on null json', function () {
      googleapis.credentials.fromJSON(null, function(err, result) {
        assert.equal(true, err instanceof Error);
      });
    });

    it('should error on empty json', function () {
      googleapis.credentials.fromJSON({}, function(err, result) {
        assert.equal(true, err instanceof Error);
      });
    });

    it('should error on missing client_email', function () {
      var json = createJSON();
      delete json.client_email;

      googleapis.credentials.fromJSON(json, function(err, result) {
        assert.equal(true, err instanceof Error);
      });
    });

    it('should error on missing private_key', function () {
      var json = createJSON();
      delete json.private_key;

      googleapis.credentials.fromJSON(json, function(err, result) {
        assert.equal(true, err instanceof Error);
      });
    });

    it('should create JWT with client_email', function () {
      var json = createJSON();
      googleapis.credentials.fromJSON(json, function(err, result) {
        assert.equal(null, err);
        assert.equal(json.client_email, result.email);
      });
    });

    it('should create JWT with private_key', function () {
      var json = createJSON();
      googleapis.credentials.fromJSON(json, function(err, result) {
        assert.equal(null, err);
        assert.equal(json.private_key, result.key);
      });
    });

    it('should create JWT with null scopes', function () {
      var json = createJSON();
      googleapis.credentials.fromJSON(json, function(err, result) {
        assert.equal(null, err);
        assert.equal(null, result.scopes);
      });
    });

    it('should create JWT with null subject', function () {
      var json = createJSON();
      googleapis.credentials.fromJSON(json, function(err, result) {
        assert.equal(null, err);
        assert.equal(null, result.subject);
      });
    });

    it('should create JWT with null keyFile', function () {
      var json = createJSON();
      googleapis.credentials.fromJSON(json, function(err, result) {
        assert.equal(null, err);
        assert.equal(null, result.keyFile);
      });
    });
  });

  describe('.fromStream', function () {

    it('should error on null stream', function (done) {
      googleapis.credentials.fromStream(null, function(err, result) {
        assert.equal(true, err instanceof Error);
        done();
      });
    });

    it('should read the stream and create a jwt', function (done) {
      // Read the contents of the file into a json object.
      var fileContents = fs.readFileSync('./test/fixtures/private.json', 'utf-8');
      var json = JSON.parse(fileContents);

      // Now open a stream on the same file.
      var stream = fs.createReadStream('./test/fixtures/private.json');

      // And pass it into the fromStream method.
      googleapis.credentials.fromStream(stream, function(err, result) {
        assert.equal(null, err);

        // Ensure that the correct bits were pulled from the stream.
        assert.equal(json.private_key, result.key);
        assert.equal(json.client_email, result.email);
        assert.equal(null, result.keyFile);
        assert.equal(null, result.subject);
        assert.equal(null, result.scope);

        done();
      });
    });
  });

  describe('._getApplicationCredentialsFromFilePath', function () {

    it('should error on null file path', function (done) {
      googleapis.credentials._getApplicationCredentialsFromFilePath(null, function (err, result) {
        assert.equal(true, err instanceof Error);
        done();
      });
    });

    it('should error on empty file path', function (done) {
      googleapis.credentials._getApplicationCredentialsFromFilePath('', function (err, result) {
        assert.equal(true, err instanceof Error);
        done();
      });
    });

    it('should error on non-string file path', function (done) {
      googleapis.credentials._getApplicationCredentialsFromFilePath(2, function (err, result) {
        assert.equal(true, err instanceof Error);
        done();
      });
    });

    it('should error on invalid file path', function (done) {
      googleapis.credentials._getApplicationCredentialsFromFilePath('./nonexistantfile.json', function (err, result) {
        assert.equal(true, err instanceof Error);
        done();
      });
    });

    it('should error on directory', function (done) {
      // Make sure that the following path actually does point to a directory.
      var directory = './test/fixtures';
      assert.equal(true, fs.lstatSync(directory).isDirectory());

      googleapis.credentials._getApplicationCredentialsFromFilePath(directory, function (err, result) {
        assert.equal(true, err instanceof Error);
        done();
      });
    });

    it('should handle errors thrown from createReadStream', function (done) {
      var gc = new googleCredentials();
      gc.internals.createReadStream = function(filePath) {
        throw new Error('Hans and Chewbacca');
      }

      gc._getApplicationCredentialsFromFilePath('./test/fixtures/private.json', function (err, result) {
        assert.equal(true, stringEndsWith(err.message, 'Hans and Chewbacca'));
        done();
      });
    });

    it('should handle errors thrown from fromStream', function (done) {
      var gc = new googleCredentials();
      gc.fromStream = function(stream, callback) {
        throw new Error('Darth Maul');
      }

      gc._getApplicationCredentialsFromFilePath('./test/fixtures/private.json', function (err, result) {
        assert.equal(true, stringEndsWith(err.message, 'Darth Maul'));
        done();
      });
    });

    it('should handle errors passed from fromStream', function (done) {
      var gc = new googleCredentials();
      gc.fromStream = function(stream, callback) {
        callback(new Error('Princess Leia'));
      }

      gc._getApplicationCredentialsFromFilePath('./test/fixtures/private.json', function (err, result) {
        assert.equal(true, stringEndsWith(err.message, 'Princess Leia'));
        done();
      });
    });

    it('should correctly read the file and create a valid JWT', function (done) {
      // Read the contents of the file into a json object.
      var fileContents = fs.readFileSync('./test/fixtures/private.json', 'utf-8');
      var json = JSON.parse(fileContents);

      // Now pass the same path to the credentials loader.
      googleapis.credentials._getApplicationCredentialsFromFilePath('./test/fixtures/private.json', function (err, result) {
        assert.equal(null, err);
        assert.equal(json.private_key, result.key);
        assert.equal(json.client_email, result.email);
        assert.equal(null, result.keyFile);
        assert.equal(null, result.subject);
        assert.equal(null, result.scope);
        done();
      });
    });
  });
});