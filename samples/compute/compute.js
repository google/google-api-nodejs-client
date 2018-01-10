// Copyright 2013-2016, Google, Inc.
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

const request = require('request');
const google = require('../../');
const compute = google.compute('v1');
const uri = 'http://metadata/computeMetadata/v1/project/project-id';
const headers = { 'Metadata-Flavor': 'Google' };

// This example can be run from a GCE VM in your project.  The example fetches
// your project ID from the VM's metadata server, and then uses the Compute API
// to fetch the list of GCE zones in your project.
//
// See the defaultauth.js sample for an alternate way of fetching compute credentials.
//
google.options({ auth: new google.auth.Compute() });
request.get({ uri, headers }, (err, res, project) => {
  if (err) {
    throw err;
  }
  if (res.statusCode !== 200) {
    throw new Error(`Response failed with status ${res.statusCode}`)
  }
  compute.zones.list({ project }, (err, result) => {
    console.log(err, result);
  });
});
