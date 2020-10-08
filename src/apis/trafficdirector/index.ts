// Copyright 2020 Google LLC
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

/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {trafficdirector_v2} from './v2';

export const VERSIONS = {
  v2: trafficdirector_v2.Trafficdirector,
};

export function trafficdirector(
  version: 'v2'
): trafficdirector_v2.Trafficdirector;
export function trafficdirector(
  options: trafficdirector_v2.Options
): trafficdirector_v2.Trafficdirector;
export function trafficdirector<T = trafficdirector_v2.Trafficdirector>(
  this: GoogleConfigurable,
  versionOrOptions: 'v2' | trafficdirector_v2.Options
) {
  return getAPI<T>('trafficdirector', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
