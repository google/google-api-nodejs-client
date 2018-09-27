/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace cloudprofiler_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

  /**
   * Stackdriver Profiler API
   *
   * Manages continuous profiling information.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudprofiler = google.cloudprofiler('v2');
   *
   * @namespace cloudprofiler
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Cloudprofiler
   */
  export class Cloudprofiler {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.projects = new Resource$Projects(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * CreateProfileRequest describes a profile resource online creation request.
   * The deployment field must be populated. The profile_type specifies the list
   * of profile types supported by the agent. The creation call will hang until
   * a profile of one of these types needs to be collected.
   */
  export interface Schema$CreateProfileRequest {
    /**
     * Deployment details.
     */
    deployment?: Schema$Deployment;
    /**
     * One or more profile types that the agent is capable of providing.
     */
    profileType?: string[];
  }
  /**
   * Deployment contains the deployment identification information.
   */
  export interface Schema$Deployment {
    /**
     * Labels identify the deployment within the user universe and same target.
     * Validation regex for label names: `^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$`.
     * Value for an individual label must be &lt;= 512 bytes, the total size of
     * all label names and values must be &lt;= 1024 bytes.  Label named
     * &quot;language&quot; can be used to record the programming language of
     * the profiled deployment. The standard choices for the value include
     * &quot;java&quot;, &quot;go&quot;, &quot;python&quot;, &quot;ruby&quot;,
     * &quot;nodejs&quot;, &quot;php&quot;, &quot;dotnet&quot;.  For deployments
     * running on Google Cloud Platform, &quot;zone&quot; or &quot;region&quot;
     * label should be present describing the deployment location. An example of
     * a zone is &quot;us-central1-a&quot;, an example of a region is
     * &quot;us-central1&quot; or &quot;us-central&quot;.
     */
    labels?: any;
    /**
     * Project ID is the ID of a cloud project. Validation regex:
     * `^a-z{4,61}[a-z0-9]$`.
     */
    projectId?: string;
    /**
     * Target is the service name used to group related deployments: * Service
     * name for GAE Flex / Standard. * Cluster and container name for GKE. *
     * User-specified string for direct GCE profiling (e.g. Java). * Job name
     * for Dataflow. Validation regex: `^[a-z]([-a-z0-9_.]{0,253}[a-z0-9])?$`.
     */
    target?: string;
  }
  /**
   * Profile resource.
   */
  export interface Schema$Profile {
    /**
     * Deployment this profile corresponds to.
     */
    deployment?: Schema$Deployment;
    /**
     * Duration of the profiling session. Input (for the offline mode) or output
     * (for the online mode). The field represents requested profiling duration.
     * It may slightly differ from the effective profiling duration, which is
     * recorded in the profile data, in case the profiling can&#39;t be stopped
     * immediately (e.g. in case stopping the profiling is handled
     * asynchronously).
     */
    duration?: string;
    /**
     * Input only. Labels associated to this specific profile. These labels will
     * get merged with the deployment labels for the final data set.  See
     * documentation on deployment labels for validation rules and limits.
     */
    labels?: any;
    /**
     * Output only. Opaque, server-assigned, unique ID for this profile.
     */
    name?: string;
    /**
     * Input only. Profile bytes, as a gzip compressed serialized proto, the
     * format is
     * https://github.com/google/pprof/blob/master/proto/profile.proto.
     */
    profileBytes?: string;
    /**
     * Type of profile. For offline mode, this must be specified when creating
     * the profile. For online mode it is assigned and returned by the server.
     */
    profileType?: string;
  }


  export class Resource$Projects {
    root: Cloudprofiler;
    profiles: Resource$Projects$Profiles;
    constructor(root: Cloudprofiler) {
      this.root = root;
      this.getRoot.bind(this);
      this.profiles = new Resource$Projects$Profiles(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Profiles {
    root: Cloudprofiler;
    constructor(root: Cloudprofiler) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * cloudprofiler.projects.profiles.create
     * @desc CreateProfile creates a new profile resource in the online mode.
     * The server ensures that the new profiles are created at a constant rate
     * per deployment, so the creation request may hang for some time until the
     * next profile session is available.  The request may fail with ABORTED
     * error if the creation is not available within ~1m, the response will
     * indicate the duration of the backoff the client should take before
     * attempting creating a profile again. The backoff duration is returned in
     * google.rpc.RetryInfo extension on the response status. To a gRPC client,
     * the extension will be return as a binary-serialized proto in the trailing
     * metadata item named "google.rpc.retryinfo-bin".
     * @alias cloudprofiler.projects.profiles.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Parent project to create the profile in.
     * @param {().CreateProfileRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Profiles$Create,
        options?: MethodOptions): AxiosPromise<Schema$Profile>;
    create(
        params: Params$Resource$Projects$Profiles$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Profile>,
        callback: BodyResponseCallback<Schema$Profile>): void;
    create(
        params: Params$Resource$Projects$Profiles$Create,
        callback: BodyResponseCallback<Schema$Profile>): void;
    create(callback: BodyResponseCallback<Schema$Profile>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Profiles$Create|
        BodyResponseCallback<Schema$Profile>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Profile>,
        callback?: BodyResponseCallback<Schema$Profile>):
        void|AxiosPromise<Schema$Profile> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Profiles$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Profiles$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudprofiler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/{+parent}/profiles')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Profile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }


    /**
     * cloudprofiler.projects.profiles.createOffline
     * @desc CreateOfflineProfile creates a new profile resource in the offline
     * mode. The client provides the profile to create along with the profile
     * bytes, the server records it.
     * @alias cloudprofiler.projects.profiles.createOffline
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Parent project to create the profile in.
     * @param {().Profile} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createOffline(
        params?: Params$Resource$Projects$Profiles$Createoffline,
        options?: MethodOptions): AxiosPromise<Schema$Profile>;
    createOffline(
        params: Params$Resource$Projects$Profiles$Createoffline,
        options: MethodOptions|BodyResponseCallback<Schema$Profile>,
        callback: BodyResponseCallback<Schema$Profile>): void;
    createOffline(
        params: Params$Resource$Projects$Profiles$Createoffline,
        callback: BodyResponseCallback<Schema$Profile>): void;
    createOffline(callback: BodyResponseCallback<Schema$Profile>): void;
    createOffline(
        paramsOrCallback?: Params$Resource$Projects$Profiles$Createoffline|
        BodyResponseCallback<Schema$Profile>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Profile>,
        callback?: BodyResponseCallback<Schema$Profile>):
        void|AxiosPromise<Schema$Profile> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Profiles$Createoffline;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Profiles$Createoffline;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudprofiler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/{+parent}/profiles:createOffline')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Profile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }


    /**
     * cloudprofiler.projects.profiles.patch
     * @desc UpdateProfile updates the profile bytes and labels on the profile
     * resource created in the online mode. Updating the bytes for profiles
     * created in the offline mode is currently not supported: the profile
     * content must be provided at the time of the profile creation.
     * @alias cloudprofiler.projects.profiles.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Opaque, server-assigned, unique ID for this profile.
     * @param {string=} params.updateMask Field mask used to specify the fields to be overwritten. Currently only profile_bytes and labels fields are supported by UpdateProfile, so only those fields can be specified in the mask. When no mask is provided, all fields are overwritten.
     * @param {().Profile} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Profiles$Patch,
        options?: MethodOptions): AxiosPromise<Schema$Profile>;
    patch(
        params: Params$Resource$Projects$Profiles$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Profile>,
        callback: BodyResponseCallback<Schema$Profile>): void;
    patch(
        params: Params$Resource$Projects$Profiles$Patch,
        callback: BodyResponseCallback<Schema$Profile>): void;
    patch(callback: BodyResponseCallback<Schema$Profile>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Profiles$Patch|
        BodyResponseCallback<Schema$Profile>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Profile>,
        callback?: BodyResponseCallback<Schema$Profile>):
        void|AxiosPromise<Schema$Profile> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Profiles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Profiles$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudprofiler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Profile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Profiles$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Parent project to create the profile in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateProfileRequest;
  }
  export interface Params$Resource$Projects$Profiles$Createoffline {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Parent project to create the profile in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Profile;
  }
  export interface Params$Resource$Projects$Profiles$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Output only. Opaque, server-assigned, unique ID for this profile.
     */
    name?: string;
    /**
     * Field mask used to specify the fields to be overwritten. Currently only
     * profile_bytes and labels fields are supported by UpdateProfile, so only
     * those fields can be specified in the mask. When no mask is provided, all
     * fields are overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Profile;
  }
}
