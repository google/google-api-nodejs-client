// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {google} = require('googleapis');
const fs = require('fs');
const sampleClient = require('../sampleclient');

const drive = google.drive({
  version: 'v3',
  auth: sampleClient.oAuth2Client
});

function runSample (fileName, callback) {
  const fileSize = fs.statSync(fileName).size;
  drive.files.create({
    resource: {
      // a resource element is required if you want to use multipart
    },
    media: {
      body: fs.createReadStream(fileName)
    }
  }, {
    // Use the `onUploadProgress` event from Axios to track the
    // number of bytes uploaded to this point.
    onUploadProgress: evt => {
      const progress = (evt.bytesRead / fileSize) * 100;
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(`${Math.round(progress)}% complete`);
    }
  }, (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res.data);
    callback(res.data);
  });
}

// if invoked directly (not tests), authenticate and run the samples
if (module === require.main) {
  const scopes = ['https://www.googleapis.com/auth/drive.file'];
  sampleClient.authenticate(scopes, err => {
    if (err) {
      throw err;
    }
    const fileName = process.argv[2];
    runSample(fileName, () => { /* complete */ });
  });
}

// export functions for testing purposes
module.exports = {
  runSample,
  client: sampleClient.oAuth2Client
};
