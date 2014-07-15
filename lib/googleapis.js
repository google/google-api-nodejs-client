/**
 * Copyright 2012 Google Inc. All Rights Reserved.
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

var DefaultTransporter = require('./transporters.js');

/**
 * Load the apis from apis index file
 * This file holds all version information
 */
var apis = require('../apis');

/**
 * @constructor
 * @param {object} options Options to be passed in
 * GoogleApis constructor.
 */
function GoogleApis(options) {
  this.options(options);
  this.addAPIs(apis);
}

/**
 * Set options
 * @param  {Object} opts Options to set
 */
GoogleApis.prototype.options = function(opts) {
  opts = opts || {};
  this.transporter = opts.transporter || this.transporter || new DefaultTransporter();
  delete opts.transporter;

  this._options = opts;
};

/**
 * Add APIs endpoints to googleapis object
 * E.g. googleapis.drive and googleapis.datastore
 *
 * @param {Array} apis Apis to be added
 */
GoogleApis.prototype.addAPIs = function(apis) {
  Object.keys(apis).forEach(function(key) {
    Object.defineProperty(this, key, {
      value: apis[key],
      enumerable: true
    });
  }.bind(this));
};

var googleapis = new GoogleApis();

/**
 * Shortcut to GoogleApis.
 */
googleapis.GoogleApis = GoogleApis;

/**
 * Shortcut to OAuth2Client.
 */
googleapis.OAuth2Client = require('./auth/oauth2client.js');

/**
 * Shortcut to Auth.
 */
googleapis.auth = {
  Compute: require('./auth/computeclient.js'),
  JWT: require('./auth/jwtclient.js'),
  OAuth2: googleapis.OAuth2Client
};

/**
 * Exports googleapis.
 */
module.exports = googleapis;
