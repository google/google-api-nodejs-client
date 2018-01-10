// Copyright 2012-2016, Google, Inc.
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

const google = require('../../');
const config = require('../config');
const urlshortener = google.urlshortener('v1', config.api_key);

urlshortener.url.get({
  shortUrl: 'http://goo.gl/DdUKX',
}, (err, result) => {
  if (err) {
    throw err;
  }
  console.log(result);
});

urlshortener.url.insert({
  resource: {
    longUrl: 'http://somelongurl.com'
  }
}, (err, result) => {
  if (err) {
    throw err;
  }
  console.log(result);
});
