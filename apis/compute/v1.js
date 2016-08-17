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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Compute Engine API
 *
 * Creates and runs virtual machines on Google Cloud Platform.
 *
 * @example
 * var google = require('googleapis');
 * var compute = google.compute('v1');
 *
 * @namespace compute
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Compute
 */
function Compute(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.addresses = {

    /**
     * compute.addresses.aggregatedList
     *
     * @desc Retrieves an aggregated list of addresses.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.addresses.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.addresses.aggregatedList(request, recur);
     * });
     *
     * @alias compute.addresses.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/addresses',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.addresses.delete
     *
     * @desc Deletes the specified address resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the address resource to delete.
     *     address: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.addresses.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.addresses.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.address Name of the address resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/addresses/{address}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'address'],
        pathParams: ['address', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.addresses.get
     *
     * @desc Returns the specified address resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the address resource to return.
     *     address: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.addresses.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.addresses.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.address Name of the address resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/addresses/{address}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'address'],
        pathParams: ['address', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.addresses.insert
     *
     * @desc Creates an address resource in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.addresses.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.addresses.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {compute(v1).Address} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/addresses',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.addresses.list
     *
     * @desc Retrieves a list of addresses contained within the specified region.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.addresses.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.addresses.list(request, recur);
     * });
     *
     * @alias compute.addresses.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/addresses',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.autoscalers = {

    /**
     * compute.autoscalers.aggregatedList
     *
     * @desc Retrieves an aggregated list of autoscalers.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.autoscalers.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.autoscalers.aggregatedList(request, recur);
     * });
     *
     * @alias compute.autoscalers.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/autoscalers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.autoscalers.delete
     *
     * @desc Deletes the specified autoscaler.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the autoscaler to delete.
     *     autoscaler: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.autoscalers.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.autoscalers.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.autoscaler Name of the autoscaler to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/autoscalers/{autoscaler}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'autoscaler'],
        pathParams: ['autoscaler', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.autoscalers.get
     *
     * @desc Returns the specified autoscaler resource. Get a list of available autoscalers by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the autoscaler to return.
     *     autoscaler: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.autoscalers.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.autoscalers.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.autoscaler Name of the autoscaler to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/autoscalers/{autoscaler}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'autoscaler'],
        pathParams: ['autoscaler', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.autoscalers.insert
     *
     * @desc Creates an autoscaler in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone for this request.
     *     zone: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.autoscalers.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.autoscalers.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {compute(v1).Autoscaler} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/autoscalers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.autoscalers.list
     *
     * @desc Retrieves a list of autoscalers contained within the specified zone.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone for this request.
     *     zone: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.autoscalers.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.autoscalers.list(request, recur);
     * });
     *
     * @alias compute.autoscalers.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/autoscalers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.autoscalers.patch
     *
     * @desc Updates an autoscaler in the specified project using the data included in the request. This method supports patch semantics.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'patch' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the autoscaler to update.
     *     autoscaler: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.autoscalers.patch(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.autoscalers.patch
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.autoscaler Name of the autoscaler to update.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {compute(v1).Autoscaler} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/autoscalers',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'zone', 'autoscaler'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.autoscalers.update
     *
     * @desc Updates an autoscaler in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'update' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone for this request.
     *     zone: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.autoscalers.update(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.autoscalers.update
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.autoscaler Name of the autoscaler to update.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {compute(v1).Autoscaler} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/autoscalers',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.backendServices = {

    /**
     * compute.backendServices.delete
     *
     * @desc Deletes the specified BackendService resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the BackendService resource to delete.
     *     backendService: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.backendServices.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.backendServices.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.backendService Name of the BackendService resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.backendServices.get
     *
     * @desc Returns the specified BackendService resource. Get a list of available backend services by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the BackendService resource to return.
     *     backendService: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.backendServices.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.backendServices.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.backendService Name of the BackendService resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.backendServices.getHealth
     *
     * @desc Gets the most recent health check results for this BackendService.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'getHealth' method:
     *
     *
     *     project: "",
     *
     *     // * Name of the BackendService resource to which the queried instance belongs.
     *     backendService: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.backendServices.getHealth(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.backendServices.getHealth
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.backendService Name of the BackendService resource to which the queried instance belongs.
     * @param {string} params.project 
     * @param {compute(v1).ResourceGroupReference} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getHealth: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}/getHealth',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.backendServices.insert
     *
     * @desc Creates a BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a backend service. Read  Restrictions and Guidelines for more information.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.backendServices.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.backendServices.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).BackendService} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.backendServices.list
     *
     * @desc Retrieves the list of BackendService resources available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.backendServices.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.backendServices.list(request, recur);
     * });
     *
     * @alias compute.backendServices.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.backendServices.patch
     *
     * @desc Updates the entire content of the BackendService resource. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports patch semantics.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'patch' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the BackendService resource to update.
     *     backendService: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.backendServices.patch(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.backendServices.patch
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.backendService Name of the BackendService resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).BackendService} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.backendServices.update
     *
     * @desc Updates the entire content of the BackendService resource. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'update' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the BackendService resource to update.
     *     backendService: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.backendServices.update(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.backendServices.update
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.backendService Name of the BackendService resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).BackendService} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.diskTypes = {

    /**
     * compute.diskTypes.aggregatedList
     *
     * @desc Retrieves an aggregated list of disk types.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.diskTypes.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.diskTypes.aggregatedList(request, recur);
     * });
     *
     * @alias compute.diskTypes.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/diskTypes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.diskTypes.get
     *
     * @desc Returns the specified disk type. Get a list of available disk types by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the disk type to return.
     *     diskType: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.diskTypes.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.diskTypes.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.diskType Name of the disk type to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/diskTypes/{diskType}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'diskType'],
        pathParams: ['diskType', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.diskTypes.list
     *
     * @desc Retrieves a list of disk types available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.diskTypes.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.diskTypes.list(request, recur);
     * });
     *
     * @alias compute.diskTypes.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/diskTypes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.disks = {

    /**
     * compute.disks.aggregatedList
     *
     * @desc Retrieves an aggregated list of persistent disks.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.disks.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.disks.aggregatedList(request, recur);
     * });
     *
     * @alias compute.disks.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/disks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.createSnapshot
     *
     * @desc Creates a snapshot of a specified persistent disk.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'createSnapshot' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the persistent disk to snapshot.
     *     disk: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.disks.createSnapshot(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.disks.createSnapshot
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.disk Name of the persistent disk to snapshot.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {compute(v1).Snapshot} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createSnapshot: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}/createSnapshot',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'disk'],
        pathParams: ['disk', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.delete
     *
     * @desc Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the persistent disk to delete.
     *     disk: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.disks.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.disks.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.disk Name of the persistent disk to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'disk'],
        pathParams: ['disk', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.get
     *
     * @desc Returns a specified persistent disk. Get a list of available persistent disks by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the persistent disk to return.
     *     disk: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.disks.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.disks.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.disk Name of the persistent disk to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'disk'],
        pathParams: ['disk', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.insert
     *
     * @desc Creates a persistent disk in the specified project using the data in the request. You can create a disk with a sourceImage, a sourceSnapshot, or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.disks.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.disks.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string=} params.sourceImage Optional. Source image to restore onto a disk.
     * @param {string} params.zone The name of the zone for this request.
     * @param {compute(v1).Disk} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.list
     *
     * @desc Retrieves a list of persistent disks contained within the specified zone.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.disks.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.disks.list(request, recur);
     * });
     *
     * @alias compute.disks.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.resize
     *
     * @desc Resizes the specified persistent disk.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'resize' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * The name of the persistent disk.
     *     disk: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.disks.resize(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.disks.resize
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.disk The name of the persistent disk.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {compute(v1).DisksResizeRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resize: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}/resize',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'disk'],
        pathParams: ['disk', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.firewalls = {

    /**
     * compute.firewalls.delete
     *
     * @desc Deletes the specified firewall.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the firewall rule to delete.
     *     firewall: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.firewalls.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.firewalls.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.firewall Name of the firewall rule to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/firewalls/{firewall}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'firewall'],
        pathParams: ['firewall', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.firewalls.get
     *
     * @desc Returns the specified firewall.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the firewall rule to return.
     *     firewall: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.firewalls.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.firewalls.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.firewall Name of the firewall rule to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/firewalls/{firewall}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'firewall'],
        pathParams: ['firewall', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.firewalls.insert
     *
     * @desc Creates a firewall rule in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.firewalls.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.firewalls.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).Firewall} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/firewalls',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.firewalls.list
     *
     * @desc Retrieves the list of firewall rules available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.firewalls.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.firewalls.list(request, recur);
     * });
     *
     * @alias compute.firewalls.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/firewalls',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.firewalls.patch
     *
     * @desc Updates the specified firewall rule with the data included in the request. This method supports patch semantics.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'patch' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the firewall rule to update.
     *     firewall: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.firewalls.patch(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.firewalls.patch
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.firewall Name of the firewall rule to update.
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).Firewall} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/firewalls/{firewall}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'firewall'],
        pathParams: ['firewall', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.firewalls.update
     *
     * @desc Updates the specified firewall rule with the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'update' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the firewall rule to update.
     *     firewall: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.firewalls.update(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.firewalls.update
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.firewall Name of the firewall rule to update.
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).Firewall} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/firewalls/{firewall}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'firewall'],
        pathParams: ['firewall', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.forwardingRules = {

    /**
     * compute.forwardingRules.aggregatedList
     *
     * @desc Retrieves an aggregated list of forwarding rules.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.forwardingRules.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.forwardingRules.aggregatedList(request, recur);
     * });
     *
     * @alias compute.forwardingRules.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/forwardingRules',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.forwardingRules.delete
     *
     * @desc Deletes the specified ForwardingRule resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // * Name of the ForwardingRule resource to delete.
     *     forwardingRule: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.forwardingRules.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.forwardingRules.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingRule Name of the ForwardingRule resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.forwardingRules.get
     *
     * @desc Returns the specified ForwardingRule resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // * Name of the ForwardingRule resource to return.
     *     forwardingRule: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.forwardingRules.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.forwardingRules.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingRule Name of the ForwardingRule resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.forwardingRules.insert
     *
     * @desc Creates a ForwardingRule resource in the specified project and region using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.forwardingRules.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.forwardingRules.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {compute(v1).ForwardingRule} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/forwardingRules',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.forwardingRules.list
     *
     * @desc Retrieves a list of ForwardingRule resources available to the specified project and region.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.forwardingRules.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.forwardingRules.list(request, recur);
     * });
     *
     * @alias compute.forwardingRules.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/forwardingRules',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.forwardingRules.setTarget
     *
     * @desc Changes target URL for forwarding rule. The new target should be of the same type as the old target.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setTarget' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // * Name of the ForwardingRule resource in which target is to be set.
     *     forwardingRule: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.forwardingRules.setTarget(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.forwardingRules.setTarget
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingRule Name of the ForwardingRule resource in which target is to be set.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {compute(v1).TargetReference} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setTarget: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}/setTarget',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.globalAddresses = {

    /**
     * compute.globalAddresses.delete
     *
     * @desc Deletes the specified address resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the address resource to delete.
     *     address: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.globalAddresses.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.globalAddresses.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.address Name of the address resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/addresses/{address}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'address'],
        pathParams: ['address', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalAddresses.get
     *
     * @desc Returns the specified address resource. Get a list of available addresses by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the address resource to return.
     *     address: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.globalAddresses.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.globalAddresses.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.address Name of the address resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/addresses/{address}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'address'],
        pathParams: ['address', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalAddresses.insert
     *
     * @desc Creates an address resource in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.globalAddresses.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.globalAddresses.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).Address} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/addresses',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalAddresses.list
     *
     * @desc Retrieves a list of global addresses.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.globalAddresses.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.globalAddresses.list(request, recur);
     * });
     *
     * @alias compute.globalAddresses.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/addresses',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.globalForwardingRules = {

    /**
     * compute.globalForwardingRules.delete
     *
     * @desc Deletes the specified ForwardingRule resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the ForwardingRule resource to delete.
     *     forwardingRule: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.globalForwardingRules.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.globalForwardingRules.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingRule Name of the ForwardingRule resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/forwardingRules/{forwardingRule}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalForwardingRules.get
     *
     * @desc Returns the specified ForwardingRule resource. Get a list of available forwarding rules by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the ForwardingRule resource to return.
     *     forwardingRule: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.globalForwardingRules.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.globalForwardingRules.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingRule Name of the ForwardingRule resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/forwardingRules/{forwardingRule}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalForwardingRules.insert
     *
     * @desc Creates a ForwardingRule resource in the specified project and region using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.globalForwardingRules.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.globalForwardingRules.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).ForwardingRule} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/forwardingRules',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalForwardingRules.list
     *
     * @desc Retrieves a list of ForwardingRule resources available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.globalForwardingRules.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.globalForwardingRules.list(request, recur);
     * });
     *
     * @alias compute.globalForwardingRules.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/forwardingRules',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalForwardingRules.setTarget
     *
     * @desc Changes target URL for forwarding rule. The new target should be of the same type as the old target.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setTarget' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the ForwardingRule resource in which target is to be set.
     *     forwardingRule: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.globalForwardingRules.setTarget(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.globalForwardingRules.setTarget
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingRule Name of the ForwardingRule resource in which target is to be set.
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).TargetReference} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setTarget: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/forwardingRules/{forwardingRule}/setTarget',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.globalOperations = {

    /**
     * compute.globalOperations.aggregatedList
     *
     * @desc Retrieves an aggregated list of all operations.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.globalOperations.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.globalOperations.aggregatedList(request, recur);
     * });
     *
     * @alias compute.globalOperations.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/operations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalOperations.delete
     *
     * @desc Deletes the specified Operations resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the Operations resource to delete.
     *     operation: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.globalOperations.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.globalOperations.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the Operations resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/operations/{operation}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalOperations.get
     *
     * @desc Retrieves the specified Operations resource. Get a list of operations by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the Operations resource to return.
     *     operation: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.globalOperations.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.globalOperations.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the Operations resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/operations/{operation}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalOperations.list
     *
     * @desc Retrieves a list of Operation resources contained within the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.globalOperations.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.globalOperations.list(request, recur);
     * });
     *
     * @alias compute.globalOperations.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/operations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.httpHealthChecks = {

    /**
     * compute.httpHealthChecks.delete
     *
     * @desc Deletes the specified HttpHealthCheck resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the HttpHealthCheck resource to delete.
     *     httpHealthCheck: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.httpHealthChecks.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.httpHealthChecks.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpHealthCheck Name of the HttpHealthCheck resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/httpHealthChecks/{httpHealthCheck}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'httpHealthCheck'],
        pathParams: ['httpHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpHealthChecks.get
     *
     * @desc Returns the specified HttpHealthCheck resource. Get a list of available HTTP health checks by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the HttpHealthCheck resource to return.
     *     httpHealthCheck: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.httpHealthChecks.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.httpHealthChecks.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpHealthCheck Name of the HttpHealthCheck resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/httpHealthChecks/{httpHealthCheck}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'httpHealthCheck'],
        pathParams: ['httpHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpHealthChecks.insert
     *
     * @desc Creates a HttpHealthCheck resource in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.httpHealthChecks.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.httpHealthChecks.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).HttpHealthCheck} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/httpHealthChecks',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpHealthChecks.list
     *
     * @desc Retrieves the list of HttpHealthCheck resources available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.httpHealthChecks.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.httpHealthChecks.list(request, recur);
     * });
     *
     * @alias compute.httpHealthChecks.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/httpHealthChecks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpHealthChecks.patch
     *
     * @desc Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'patch' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the HttpHealthCheck resource to update.
     *     httpHealthCheck: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.httpHealthChecks.patch(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.httpHealthChecks.patch
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpHealthCheck Name of the HttpHealthCheck resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).HttpHealthCheck} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/httpHealthChecks/{httpHealthCheck}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'httpHealthCheck'],
        pathParams: ['httpHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpHealthChecks.update
     *
     * @desc Updates a HttpHealthCheck resource in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'update' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the HttpHealthCheck resource to update.
     *     httpHealthCheck: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.httpHealthChecks.update(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.httpHealthChecks.update
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpHealthCheck Name of the HttpHealthCheck resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).HttpHealthCheck} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/httpHealthChecks/{httpHealthCheck}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'httpHealthCheck'],
        pathParams: ['httpHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.httpsHealthChecks = {

    /**
     * compute.httpsHealthChecks.delete
     *
     * @desc Deletes the specified HttpsHealthCheck resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the HttpsHealthCheck resource to delete.
     *     httpsHealthCheck: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.httpsHealthChecks.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.httpsHealthChecks.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpsHealthCheck Name of the HttpsHealthCheck resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'httpsHealthCheck'],
        pathParams: ['httpsHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpsHealthChecks.get
     *
     * @desc Returns the specified HttpsHealthCheck resource. Get a list of available HTTPS health checks by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the HttpsHealthCheck resource to return.
     *     httpsHealthCheck: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.httpsHealthChecks.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.httpsHealthChecks.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpsHealthCheck Name of the HttpsHealthCheck resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'httpsHealthCheck'],
        pathParams: ['httpsHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpsHealthChecks.insert
     *
     * @desc Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.httpsHealthChecks.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.httpsHealthChecks.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).HttpsHealthCheck} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/httpsHealthChecks',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpsHealthChecks.list
     *
     * @desc Retrieves the list of HttpsHealthCheck resources available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.httpsHealthChecks.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.httpsHealthChecks.list(request, recur);
     * });
     *
     * @alias compute.httpsHealthChecks.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/httpsHealthChecks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpsHealthChecks.patch
     *
     * @desc Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'patch' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the HttpsHealthCheck resource to update.
     *     httpsHealthCheck: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.httpsHealthChecks.patch(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.httpsHealthChecks.patch
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpsHealthCheck Name of the HttpsHealthCheck resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).HttpsHealthCheck} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'httpsHealthCheck'],
        pathParams: ['httpsHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpsHealthChecks.update
     *
     * @desc Updates a HttpsHealthCheck resource in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'update' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the HttpsHealthCheck resource to update.
     *     httpsHealthCheck: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.httpsHealthChecks.update(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.httpsHealthChecks.update
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpsHealthCheck Name of the HttpsHealthCheck resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).HttpsHealthCheck} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'httpsHealthCheck'],
        pathParams: ['httpsHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.images = {

    /**
     * compute.images.delete
     *
     * @desc Deletes the specified image.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the image resource to delete.
     *     image: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.images.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.images.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.image Name of the image resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/images/{image}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'image'],
        pathParams: ['image', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.images.deprecate
     *
     * @desc Sets the deprecation status of an image.  If an empty request body is given, clears the deprecation status instead.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'deprecate' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Image name.
     *     image: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.images.deprecate(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.images.deprecate
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.image Image name.
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).DeprecationStatus} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deprecate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/images/{image}/deprecate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'image'],
        pathParams: ['image', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.images.get
     *
     * @desc Returns the specified image. Get a list of available images by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the image resource to return.
     *     image: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.images.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.images.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.image Name of the image resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/images/{image}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'image'],
        pathParams: ['image', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.images.getFromFamily
     *
     * @desc Returns the latest image that is part of an image family and is not deprecated.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'getFromFamily' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the image family to search for.
     *     family: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.images.getFromFamily(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.images.getFromFamily
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.family Name of the image family to search for.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getFromFamily: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/images/family/{family}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'family'],
        pathParams: ['family', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.images.insert
     *
     * @desc Creates an image in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.images.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.images.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).Image} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/images',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.images.list
     *
     * @desc Retrieves the list of private images available to the specified project. Private images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.images.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.images.list(request, recur);
     * });
     *
     * @alias compute.images.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/images',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.instanceGroupManagers = {

    /**
     * compute.instanceGroupManagers.abandonInstances
     *
     * @desc Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'abandonInstances' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the managed instance group is located.
     *     zone: "",
     *
     *     // * The name of the managed instance group.
     *     instanceGroupManager: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroupManagers.abandonInstances(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroupManagers.abandonInstances
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {compute(v1).InstanceGroupManagersAbandonInstancesRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    abandonInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/abandonInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.aggregatedList
     *
     * @desc Retrieves the list of managed instance groups and groups them by zone.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.instanceGroupManagers.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.instanceGroupManagers.aggregatedList(request, recur);
     * });
     *
     * @alias compute.instanceGroupManagers.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/instanceGroupManagers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.delete
     *
     * @desc Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read  Deleting an instance group for more information.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the managed instance group is located.
     *     zone: "",
     *
     *     // * The name of the managed instance group to delete.
     *     instanceGroupManager: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroupManagers.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroupManagers.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.deleteInstances
     *
     * @desc Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'deleteInstances' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the managed instance group is located.
     *     zone: "",
     *
     *     // * The name of the managed instance group.
     *     instanceGroupManager: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroupManagers.deleteInstances(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroupManagers.deleteInstances
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {compute(v1).InstanceGroupManagersDeleteInstancesRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deleteInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.get
     *
     * @desc Returns all of the details about the specified managed instance group. Get a list of available managed instance groups by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the managed instance group is located.
     *     zone: "",
     *
     *     // * The name of the managed instance group.
     *     instanceGroupManager: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroupManagers.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroupManagers.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.insert
     *
     * @desc Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where you want to create the managed instance group.
     *     zone: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroupManagers.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroupManagers.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where you want to create the managed instance group.
     * @param {compute(v1).InstanceGroupManager} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.list
     *
     * @desc Retrieves a list of managed instance groups that are contained within the specified project and zone.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the managed instance group is located.
     *     zone: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.instanceGroupManagers.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.instanceGroupManagers.list(request, recur);
     * });
     *
     * @alias compute.instanceGroupManagers.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.listManagedInstances
     *
     * @desc Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'listManagedInstances' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the managed instance group is located.
     *     zone: "",
     *
     *     // * The name of the managed instance group.
     *     instanceGroupManager: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroupManagers.listManagedInstances(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroupManagers.listManagedInstances
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listManagedInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.recreateInstances
     *
     * @desc Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'recreateInstances' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the managed instance group is located.
     *     zone: "",
     *
     *     // * The name of the managed instance group.
     *     instanceGroupManager: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroupManagers.recreateInstances(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroupManagers.recreateInstances
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {compute(v1).InstanceGroupManagersRecreateInstancesRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    recreateInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/recreateInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.resize
     *
     * @desc Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'resize' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the managed instance group is located.
     *     zone: "",
     *
     *     // * The name of the managed instance group.
     *     instanceGroupManager: "",
     *
     *     // * The number of running instances that the managed instance group should maintain at any given time.
     *     //   The group automatically adds or removes instances to maintain the number of instances specified by
     *     //   this parameter.
     *     size: 0,
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroupManagers.resize(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroupManagers.resize
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {integer} params.size The number of running instances that the managed instance group should maintain at any given time. The group automatically adds or removes instances to maintain the number of instances specified by this parameter.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resize: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resize',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager', 'size'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.setInstanceTemplate
     *
     * @desc Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you recreate them.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setInstanceTemplate' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the managed instance group is located.
     *     zone: "",
     *
     *     // * The name of the managed instance group.
     *     instanceGroupManager: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroupManagers.setInstanceTemplate(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroupManagers.setInstanceTemplate
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {compute(v1).InstanceGroupManagersSetInstanceTemplateRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setInstanceTemplate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.setTargetPools
     *
     * @desc Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setTargetPools' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the managed instance group is located.
     *     zone: "",
     *
     *     // * The name of the managed instance group.
     *     instanceGroupManager: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroupManagers.setTargetPools(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroupManagers.setTargetPools
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {compute(v1).InstanceGroupManagersSetTargetPoolsRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setTargetPools: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setTargetPools',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.instanceGroups = {

    /**
     * compute.instanceGroups.addInstances
     *
     * @desc Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read  Adding instances for more information.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'addInstances' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the instance group is located.
     *     zone: "",
     *
     *     // * The name of the instance group where you are adding instances.
     *     instanceGroup: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroups.addInstances(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroups.addInstances
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroup The name of the instance group where you are adding instances.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {compute(v1).InstanceGroupsAddInstancesRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/addInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.aggregatedList
     *
     * @desc Retrieves the list of instance groups and sorts them by zone.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.instanceGroups.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.instanceGroups.aggregatedList(request, recur);
     * });
     *
     * @alias compute.instanceGroups.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/instanceGroups',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.delete
     *
     * @desc Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read  Deleting an instance group for more information.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the instance group is located.
     *     zone: "",
     *
     *     // * The name of the instance group to delete.
     *     instanceGroup: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroups.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroups.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroup The name of the instance group to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.get
     *
     * @desc Returns the specified instance group. Get a list of available instance groups by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the instance group is located.
     *     zone: "",
     *
     *     // * The name of the instance group.
     *     instanceGroup: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroups.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroups.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroup The name of the instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.insert
     *
     * @desc Creates an instance group in the specified project using the parameters that are included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where you want to create the instance group.
     *     zone: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroups.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroups.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where you want to create the instance group.
     * @param {compute(v1).InstanceGroup} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroups',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.list
     *
     * @desc Retrieves the list of instance groups that are located in the specified project and zone.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the instance group is located.
     *     zone: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.instanceGroups.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.instanceGroups.list(request, recur);
     * });
     *
     * @alias compute.instanceGroups.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroups',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.listInstances
     *
     * @desc Lists the instances in the specified instance group.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'listInstances' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the instance group is located.
     *     zone: "",
     *
     *     // * The name of the instance group from which you want to generate a list of included instances.
     *     instanceGroup: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.instanceGroups.listInstances(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.instanceGroups.listInstances(request, recur);
     * });
     *
     * @alias compute.instanceGroups.listInstances
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {string} params.instanceGroup The name of the instance group from which you want to generate a list of included instances.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {compute(v1).InstanceGroupsListInstancesRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/listInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.removeInstances
     *
     * @desc Removes one or more instances from the specified instance group, but does not delete those instances.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'removeInstances' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the instance group is located.
     *     zone: "",
     *
     *     // * The name of the instance group where the specified instances will be removed.
     *     instanceGroup: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroups.removeInstances(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroups.removeInstances
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroup The name of the instance group where the specified instances will be removed.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {compute(v1).InstanceGroupsRemoveInstancesRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/removeInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.setNamedPorts
     *
     * @desc Sets the named ports for the specified instance group.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setNamedPorts' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone where the instance group is located.
     *     zone: "",
     *
     *     // * The name of the instance group where the named ports are updated.
     *     instanceGroup: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceGroups.setNamedPorts(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceGroups.setNamedPorts
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroup The name of the instance group where the named ports are updated.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {compute(v1).InstanceGroupsSetNamedPortsRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setNamedPorts: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/setNamedPorts',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.instanceTemplates = {

    /**
     * compute.instanceTemplates.delete
     *
     * @desc Deletes the specified instance template. If you delete an instance template that is being referenced from another instance group, the instance group will not be able to create or recreate virtual machine instances. Deleting an instance template is permanent and cannot be undone.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the instance template to delete.
     *     instanceTemplate: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceTemplates.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceTemplates.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceTemplate The name of the instance template to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/instanceTemplates/{instanceTemplate}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'instanceTemplate'],
        pathParams: ['instanceTemplate', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceTemplates.get
     *
     * @desc Returns the specified instance template. Get a list of available instance templates by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the instance template.
     *     instanceTemplate: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceTemplates.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceTemplates.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceTemplate The name of the instance template.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/instanceTemplates/{instanceTemplate}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'instanceTemplate'],
        pathParams: ['instanceTemplate', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceTemplates.insert
     *
     * @desc Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instanceTemplates.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instanceTemplates.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).InstanceTemplate} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/instanceTemplates',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceTemplates.list
     *
     * @desc Retrieves a list of instance templates that are contained within the specified project and zone.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.instanceTemplates.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.instanceTemplates.list(request, recur);
     * });
     *
     * @alias compute.instanceTemplates.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/instanceTemplates',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.instances = {

    /**
     * compute.instances.addAccessConfig
     *
     * @desc Adds an access config to an instance's network interface.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'addAccessConfig' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * The instance name for this request.
     *     instance: "",
     *
     *     // * The name of the network interface to add to this instance.
     *     networkInterface: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.addAccessConfig(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.addAccessConfig
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance The instance name for this request.
     * @param {string} params.networkInterface The name of the network interface to add to this instance.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {compute(v1).AccessConfig} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addAccessConfig: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/addAccessConfig',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance', 'networkInterface'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.aggregatedList
     *
     * @desc Retrieves aggregated list of instances.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.instances.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.instances.aggregatedList(request, recur);
     * });
     *
     * @alias compute.instances.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/instances',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.attachDisk
     *
     * @desc Attaches a Disk resource to an instance.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'attachDisk' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * The instance name for this request.
     *     instance: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.attachDisk(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.attachDisk
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance The instance name for this request.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {compute(v1).AttachedDisk} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    attachDisk: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/attachDisk',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.delete
     *
     * @desc Deletes the specified Instance resource. For more information, see Stopping or Deleting an Instance.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the instance resource to delete.
     *     instance: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.deleteAccessConfig
     *
     * @desc Deletes an access config from an instance's network interface.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'deleteAccessConfig' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * The instance name for this request.
     *     instance: "",
     *
     *     // * The name of the access config to delete.
     *     accessConfig: "",
     *
     *     // * The name of the network interface.
     *     networkInterface: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.deleteAccessConfig(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.deleteAccessConfig
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.accessConfig The name of the access config to delete.
     * @param {string} params.instance The instance name for this request.
     * @param {string} params.networkInterface The name of the network interface.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteAccessConfig: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/deleteAccessConfig',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance', 'accessConfig', 'networkInterface'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.detachDisk
     *
     * @desc Detaches a disk from an instance.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'detachDisk' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Instance name.
     *     instance: "",
     *
     *     // * Disk device name to detach.
     *     deviceName: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.detachDisk(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.detachDisk
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deviceName Disk device name to detach.
     * @param {string} params.instance Instance name.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    detachDisk: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/detachDisk',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance', 'deviceName'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.get
     *
     * @desc Returns the specified Instance resource. Get a list of available instances by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the instance resource to return.
     *     instance: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.getSerialPortOutput
     *
     * @desc Returns the specified instance's serial port output.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'getSerialPortOutput' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the instance scoping this request.
     *     instance: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.getSerialPortOutput(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.getSerialPortOutput
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance scoping this request.
     * @param {integer=} params.port Specifies which COM or serial port to retrieve data from.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getSerialPortOutput: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/serialPort',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.insert
     *
     * @desc Creates an instance resource in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {compute(v1).Instance} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.list
     *
     * @desc Retrieves the list of instances contained within the specified zone.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.instances.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.instances.list(request, recur);
     * });
     *
     * @alias compute.instances.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.reset
     *
     * @desc Performs a hard reset on the instance.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'reset' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the instance scoping this request.
     *     instance: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.reset(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.reset
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance scoping this request.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reset: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/reset',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.setDiskAutoDelete
     *
     * @desc Sets the auto-delete flag for a disk attached to an instance.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setDiskAutoDelete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * The instance name.
     *     instance: "",
     *
     *     // * Whether to auto-delete the disk when the instance is deleted.
     *     autoDelete: false,
     *
     *     // * The device name of the disk to modify.
     *     deviceName: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.setDiskAutoDelete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.setDiskAutoDelete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {boolean} params.autoDelete Whether to auto-delete the disk when the instance is deleted.
     * @param {string} params.deviceName The device name of the disk to modify.
     * @param {string} params.instance The instance name.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setDiskAutoDelete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setDiskAutoDelete',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance', 'autoDelete', 'deviceName'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.setMachineType
     *
     * @desc Changes the machine type for a stopped instance to the machine type specified in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setMachineType' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the instance scoping this request.
     *     instance: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.setMachineType(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.setMachineType
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance scoping this request.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {compute(v1).InstancesSetMachineTypeRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setMachineType: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setMachineType',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.setMetadata
     *
     * @desc Sets metadata for the specified instance to the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setMetadata' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the instance scoping this request.
     *     instance: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.setMetadata(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.setMetadata
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance scoping this request.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {compute(v1).Metadata} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setMetadata: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setMetadata',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.setScheduling
     *
     * @desc Sets an instance's scheduling options.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setScheduling' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Instance name.
     *     instance: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.setScheduling(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.setScheduling
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Instance name.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {compute(v1).Scheduling} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setScheduling: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setScheduling',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.setTags
     *
     * @desc Sets tags for the specified instance to the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setTags' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the instance scoping this request.
     *     instance: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.setTags(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.setTags
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance scoping this request.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {compute(v1).Tags} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setTags: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setTags',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.start
     *
     * @desc Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'start' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the instance resource to start.
     *     instance: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.start(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.start
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance resource to start.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    start: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/start',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.startWithEncryptionKey
     *
     * @desc Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'startWithEncryptionKey' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the instance resource to start.
     *     instance: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.startWithEncryptionKey(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.startWithEncryptionKey
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance resource to start.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {compute(v1).InstancesStartWithEncryptionKeyRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    startWithEncryptionKey: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/startWithEncryptionKey',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.stop
     *
     * @desc Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur per-minute, virtual machine usage charges while they are stopped, but any resources that the virtual machine is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'stop' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the instance resource to stop.
     *     instance: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.instances.stop(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.instances.stop
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance resource to stop.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/instances/{instance}/stop',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.licenses = {

    /**
     * compute.licenses.get
     *
     * @desc Returns the specified License resource. Get a list of available licenses by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the License resource to return.
     *     license: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.licenses.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.licenses.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.license Name of the License resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/licenses/{license}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'license'],
        pathParams: ['license', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.machineTypes = {

    /**
     * compute.machineTypes.aggregatedList
     *
     * @desc Retrieves an aggregated list of machine types.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.machineTypes.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.machineTypes.aggregatedList(request, recur);
     * });
     *
     * @alias compute.machineTypes.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/machineTypes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.machineTypes.get
     *
     * @desc Returns the specified machine type. Get a list of available machine types by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the machine type to return.
     *     machineType: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.machineTypes.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.machineTypes.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.machineType Name of the machine type to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/machineTypes/{machineType}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'machineType'],
        pathParams: ['machineType', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.machineTypes.list
     *
     * @desc Retrieves a list of machine types available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * The name of the zone for this request.
     *     zone: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.machineTypes.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.machineTypes.list(request, recur);
     * });
     *
     * @alias compute.machineTypes.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/machineTypes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.networks = {

    /**
     * compute.networks.delete
     *
     * @desc Deletes the specified network.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the network to delete.
     *     network: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.networks.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.networks.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.network Name of the network to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'network'],
        pathParams: ['network', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.networks.get
     *
     * @desc Returns the specified network. Get a list of available networks by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the network to return.
     *     network: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.networks.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.networks.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.network Name of the network to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'network'],
        pathParams: ['network', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.networks.insert
     *
     * @desc Creates a network in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.networks.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.networks.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).Network} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.networks.list
     *
     * @desc Retrieves the list of networks available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.networks.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.networks.list(request, recur);
     * });
     *
     * @alias compute.networks.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.projects = {

    /**
     * compute.projects.get
     *
     * @desc Returns the specified Project resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.projects.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.projects.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.projects.moveDisk
     *
     * @desc Moves a persistent disk from one zone to another.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'moveDisk' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.projects.moveDisk(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.projects.moveDisk
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).DiskMoveRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    moveDisk: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/moveDisk',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.projects.moveInstance
     *
     * @desc Moves an instance and its attached persistent disks from one zone to another.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'moveInstance' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.projects.moveInstance(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.projects.moveInstance
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).InstanceMoveRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    moveInstance: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/moveInstance',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.projects.setCommonInstanceMetadata
     *
     * @desc Sets metadata common to all instances within the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setCommonInstanceMetadata' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.projects.setCommonInstanceMetadata(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.projects.setCommonInstanceMetadata
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).Metadata} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setCommonInstanceMetadata: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/setCommonInstanceMetadata',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.projects.setUsageExportBucket
     *
     * @desc Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setUsageExportBucket' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.projects.setUsageExportBucket(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.projects.setUsageExportBucket
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).UsageExportLocation} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setUsageExportBucket: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/setUsageExportBucket',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.regionOperations = {

    /**
     * compute.regionOperations.delete
     *
     * @desc Deletes the specified region-specific Operations resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the Operations resource to delete.
     *     operation: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.regionOperations.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.regionOperations.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the Operations resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/operations/{operation}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'operation'],
        pathParams: ['operation', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionOperations.get
     *
     * @desc Retrieves the specified region-specific Operations resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the Operations resource to return.
     *     operation: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.regionOperations.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.regionOperations.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the Operations resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/operations/{operation}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'operation'],
        pathParams: ['operation', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionOperations.list
     *
     * @desc Retrieves a list of Operation resources contained within the specified region.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.regionOperations.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.regionOperations.list(request, recur);
     * });
     *
     * @alias compute.regionOperations.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/operations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.regions = {

    /**
     * compute.regions.get
     *
     * @desc Returns the specified Region resource. Get a list of available regions by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region resource to return.
     *     region: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.regions.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.regions.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regions.list
     *
     * @desc Retrieves the list of region resources available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.regions.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.regions.list(request, recur);
     * });
     *
     * @alias compute.regions.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.routers = {

    /**
     * compute.routers.aggregatedList
     *
     * @desc Retrieves an aggregated list of routers.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.routers.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.routers.aggregatedList(request, recur);
     * });
     *
     * @alias compute.routers.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/routers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.delete
     *
     * @desc Deletes the specified Router resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the Router resource to delete.
     *     router: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.routers.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.routers.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.router Name of the Router resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/routers/{router}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'router'],
        pathParams: ['project', 'region', 'router'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.get
     *
     * @desc Returns the specified Router resource. Get a list of available routers by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the Router resource to return.
     *     router: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.routers.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.routers.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.router Name of the Router resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/routers/{router}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'router'],
        pathParams: ['project', 'region', 'router'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.getRouterStatus
     *
     * @desc Retrieves runtime information of the specified router.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'getRouterStatus' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the Router resource to query.
     *     router: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.routers.getRouterStatus(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.routers.getRouterStatus
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.router Name of the Router resource to query.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRouterStatus: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/routers/{router}/getRouterStatus',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'router'],
        pathParams: ['project', 'region', 'router'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.insert
     *
     * @desc Creates a Router resource in the specified project and region using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.routers.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.routers.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {compute(v1).Router} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/routers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.list
     *
     * @desc Retrieves a list of Router resources available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.routers.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.routers.list(request, recur);
     * });
     *
     * @alias compute.routers.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/routers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.patch
     *
     * @desc Updates the entire content of the Router resource. This method supports patch semantics.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'patch' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the Router resource to update.
     *     router: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.routers.patch(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.routers.patch
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.router Name of the Router resource to update.
     * @param {compute(v1).Router} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/routers/{router}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'region', 'router'],
        pathParams: ['project', 'region', 'router'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.preview
     *
     * @desc Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'preview' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the Router resource to query.
     *     router: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.routers.preview(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.routers.preview
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.router Name of the Router resource to query.
     * @param {compute(v1).Router} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    preview: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/routers/{router}/preview',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'router'],
        pathParams: ['project', 'region', 'router'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.update
     *
     * @desc Updates the entire content of the Router resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'update' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the Router resource to update.
     *     router: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.routers.update(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.routers.update
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.router Name of the Router resource to update.
     * @param {compute(v1).Router} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/routers/{router}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'region', 'router'],
        pathParams: ['project', 'region', 'router'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.routes = {

    /**
     * compute.routes.delete
     *
     * @desc Deletes the specified Route resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the Route resource to delete.
     *     route: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.routes.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.routes.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.route Name of the Route resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/routes/{route}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'route'],
        pathParams: ['project', 'route'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routes.get
     *
     * @desc Returns the specified Route resource. Get a list of available routes by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the Route resource to return.
     *     route: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.routes.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.routes.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.route Name of the Route resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/routes/{route}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'route'],
        pathParams: ['project', 'route'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routes.insert
     *
     * @desc Creates a Route resource in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.routes.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.routes.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).Route} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/routes',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routes.list
     *
     * @desc Retrieves the list of Route resources available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.routes.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.routes.list(request, recur);
     * });
     *
     * @alias compute.routes.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/routes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.snapshots = {

    /**
     * compute.snapshots.delete
     *
     * @desc Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot.  For more information, see Deleting snaphots.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the Snapshot resource to delete.
     *     snapshot: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.snapshots.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.snapshots.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.snapshot Name of the Snapshot resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/snapshots/{snapshot}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'snapshot'],
        pathParams: ['project', 'snapshot'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.snapshots.get
     *
     * @desc Returns the specified Snapshot resource. Get a list of available snapshots by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the Snapshot resource to return.
     *     snapshot: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.snapshots.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.snapshots.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.snapshot Name of the Snapshot resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/snapshots/{snapshot}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'snapshot'],
        pathParams: ['project', 'snapshot'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.snapshots.list
     *
     * @desc Retrieves the list of Snapshot resources contained within the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.snapshots.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.snapshots.list(request, recur);
     * });
     *
     * @alias compute.snapshots.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/snapshots',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.sslCertificates = {

    /**
     * compute.sslCertificates.delete
     *
     * @desc Deletes the specified SslCertificate resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the SslCertificate resource to delete.
     *     sslCertificate: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.sslCertificates.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.sslCertificates.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.sslCertificate Name of the SslCertificate resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/sslCertificates/{sslCertificate}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'sslCertificate'],
        pathParams: ['project', 'sslCertificate'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.sslCertificates.get
     *
     * @desc Returns the specified SslCertificate resource. Get a list of available SSL certificates by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the SslCertificate resource to return.
     *     sslCertificate: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.sslCertificates.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.sslCertificates.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.sslCertificate Name of the SslCertificate resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/sslCertificates/{sslCertificate}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'sslCertificate'],
        pathParams: ['project', 'sslCertificate'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.sslCertificates.insert
     *
     * @desc Creates a SslCertificate resource in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.sslCertificates.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.sslCertificates.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).SslCertificate} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/sslCertificates',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.sslCertificates.list
     *
     * @desc Retrieves the list of SslCertificate resources available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.sslCertificates.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.sslCertificates.list(request, recur);
     * });
     *
     * @alias compute.sslCertificates.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/sslCertificates',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.subnetworks = {

    /**
     * compute.subnetworks.aggregatedList
     *
     * @desc Retrieves an aggregated list of subnetworks.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.subnetworks.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.subnetworks.aggregatedList(request, recur);
     * });
     *
     * @alias compute.subnetworks.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/subnetworks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.subnetworks.delete
     *
     * @desc Deletes the specified subnetwork.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // * Name of the Subnetwork resource to delete.
     *     subnetwork: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.subnetworks.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.subnetworks.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.subnetwork Name of the Subnetwork resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'subnetwork'],
        pathParams: ['project', 'region', 'subnetwork'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.subnetworks.get
     *
     * @desc Returns the specified subnetwork. Get a list of available subnetworks list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // * Name of the Subnetwork resource to return.
     *     subnetwork: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.subnetworks.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.subnetworks.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.subnetwork Name of the Subnetwork resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'subnetwork'],
        pathParams: ['project', 'region', 'subnetwork'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.subnetworks.insert
     *
     * @desc Creates a subnetwork in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.subnetworks.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.subnetworks.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {compute(v1).Subnetwork} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.subnetworks.list
     *
     * @desc Retrieves a list of subnetworks available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.subnetworks.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.subnetworks.list(request, recur);
     * });
     *
     * @alias compute.subnetworks.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.targetHttpProxies = {

    /**
     * compute.targetHttpProxies.delete
     *
     * @desc Deletes the specified TargetHttpProxy resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the TargetHttpProxy resource to delete.
     *     targetHttpProxy: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetHttpProxies.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetHttpProxies.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpProxy Name of the TargetHttpProxy resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/targetHttpProxies/{targetHttpProxy}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'targetHttpProxy'],
        pathParams: ['project', 'targetHttpProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpProxies.get
     *
     * @desc Returns the specified TargetHttpProxy resource. Get a list of available target HTTP proxies by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the TargetHttpProxy resource to return.
     *     targetHttpProxy: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetHttpProxies.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetHttpProxies.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpProxy Name of the TargetHttpProxy resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/targetHttpProxies/{targetHttpProxy}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'targetHttpProxy'],
        pathParams: ['project', 'targetHttpProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpProxies.insert
     *
     * @desc Creates a TargetHttpProxy resource in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetHttpProxies.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetHttpProxies.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).TargetHttpProxy} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/targetHttpProxies',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpProxies.list
     *
     * @desc Retrieves the list of TargetHttpProxy resources available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.targetHttpProxies.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.targetHttpProxies.list(request, recur);
     * });
     *
     * @alias compute.targetHttpProxies.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/targetHttpProxies',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpProxies.setUrlMap
     *
     * @desc Changes the URL map for TargetHttpProxy.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setUrlMap' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the TargetHttpProxy to set a URL map for.
     *     targetHttpProxy: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetHttpProxies.setUrlMap(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetHttpProxies.setUrlMap
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpProxy Name of the TargetHttpProxy to set a URL map for.
     * @param {compute(v1).UrlMapReference} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setUrlMap: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/targetHttpProxies/{targetHttpProxy}/setUrlMap',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'targetHttpProxy'],
        pathParams: ['project', 'targetHttpProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.targetHttpsProxies = {

    /**
     * compute.targetHttpsProxies.delete
     *
     * @desc Deletes the specified TargetHttpsProxy resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the TargetHttpsProxy resource to delete.
     *     targetHttpsProxy: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetHttpsProxies.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetHttpsProxies.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpsProxy Name of the TargetHttpsProxy resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'targetHttpsProxy'],
        pathParams: ['project', 'targetHttpsProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpsProxies.get
     *
     * @desc Returns the specified TargetHttpsProxy resource. Get a list of available target HTTPS proxies by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the TargetHttpsProxy resource to return.
     *     targetHttpsProxy: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetHttpsProxies.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetHttpsProxies.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpsProxy Name of the TargetHttpsProxy resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'targetHttpsProxy'],
        pathParams: ['project', 'targetHttpsProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpsProxies.insert
     *
     * @desc Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetHttpsProxies.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetHttpsProxies.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).TargetHttpsProxy} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/targetHttpsProxies',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpsProxies.list
     *
     * @desc Retrieves the list of TargetHttpsProxy resources available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.targetHttpsProxies.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.targetHttpsProxies.list(request, recur);
     * });
     *
     * @alias compute.targetHttpsProxies.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/targetHttpsProxies',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpsProxies.setSslCertificates
     *
     * @desc Replaces SslCertificates for TargetHttpsProxy.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setSslCertificates' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the TargetHttpsProxy resource to set an SslCertificates resource for.
     *     targetHttpsProxy: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetHttpsProxies.setSslCertificates(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetHttpsProxies.setSslCertificates
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpsProxy Name of the TargetHttpsProxy resource to set an SslCertificates resource for.
     * @param {compute(v1).TargetHttpsProxiesSetSslCertificatesRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setSslCertificates: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setSslCertificates',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'targetHttpsProxy'],
        pathParams: ['project', 'targetHttpsProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpsProxies.setUrlMap
     *
     * @desc Changes the URL map for TargetHttpsProxy.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setUrlMap' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the TargetHttpsProxy resource whose URL map is to be set.
     *     targetHttpsProxy: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetHttpsProxies.setUrlMap(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetHttpsProxies.setUrlMap
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpsProxy Name of the TargetHttpsProxy resource whose URL map is to be set.
     * @param {compute(v1).UrlMapReference} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setUrlMap: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setUrlMap',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'targetHttpsProxy'],
        pathParams: ['project', 'targetHttpsProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.targetInstances = {

    /**
     * compute.targetInstances.aggregatedList
     *
     * @desc Retrieves an aggregated list of target instances.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.targetInstances.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.targetInstances.aggregatedList(request, recur);
     * });
     *
     * @alias compute.targetInstances.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/targetInstances',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetInstances.delete
     *
     * @desc Deletes the specified TargetInstance resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone scoping this request.
     *     zone: "",
     *
     *     // * Name of the TargetInstance resource to delete.
     *     targetInstance: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetInstances.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetInstances.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetInstance Name of the TargetInstance resource to delete.
     * @param {string} params.zone Name of the zone scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/targetInstances/{targetInstance}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'targetInstance'],
        pathParams: ['project', 'targetInstance', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetInstances.get
     *
     * @desc Returns the specified TargetInstance resource. Get a list of available target instances by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone scoping this request.
     *     zone: "",
     *
     *     // * Name of the TargetInstance resource to return.
     *     targetInstance: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetInstances.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetInstances.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetInstance Name of the TargetInstance resource to return.
     * @param {string} params.zone Name of the zone scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/targetInstances/{targetInstance}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'targetInstance'],
        pathParams: ['project', 'targetInstance', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetInstances.insert
     *
     * @desc Creates a TargetInstance resource in the specified project and zone using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone scoping this request.
     *     zone: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetInstances.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetInstances.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone scoping this request.
     * @param {compute(v1).TargetInstance} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/targetInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetInstances.list
     *
     * @desc Retrieves a list of TargetInstance resources available to the specified project and zone.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone scoping this request.
     *     zone: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.targetInstances.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.targetInstances.list(request, recur);
     * });
     *
     * @alias compute.targetInstances.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/targetInstances',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.targetPools = {

    /**
     * compute.targetPools.addHealthCheck
     *
     * @desc Adds health check URLs to a target pool.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'addHealthCheck' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // * Name of the target pool to add a health check to.
     *     targetPool: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetPools.addHealthCheck(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetPools.addHealthCheck
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the target pool to add a health check to.
     * @param {compute(v1).TargetPoolsAddHealthCheckRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addHealthCheck: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/addHealthCheck',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.addInstance
     *
     * @desc Adds an instance to a target pool.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'addInstance' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // * Name of the TargetPool resource to add instances to.
     *     targetPool: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetPools.addInstance(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetPools.addInstance
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the TargetPool resource to add instances to.
     * @param {compute(v1).TargetPoolsAddInstanceRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addInstance: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/addInstance',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.aggregatedList
     *
     * @desc Retrieves an aggregated list of target pools.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.targetPools.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.targetPools.aggregatedList(request, recur);
     * });
     *
     * @alias compute.targetPools.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/targetPools',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.delete
     *
     * @desc Deletes the specified target pool.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // * Name of the TargetPool resource to delete.
     *     targetPool: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetPools.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetPools.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the TargetPool resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.get
     *
     * @desc Returns the specified target pool. Get a list of available target pools by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // * Name of the TargetPool resource to return.
     *     targetPool: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetPools.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetPools.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the TargetPool resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.getHealth
     *
     * @desc Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'getHealth' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // * Name of the TargetPool resource to which the queried instance belongs.
     *     targetPool: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetPools.getHealth(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetPools.getHealth
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the TargetPool resource to which the queried instance belongs.
     * @param {compute(v1).InstanceReference} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getHealth: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/getHealth',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.insert
     *
     * @desc Creates a target pool in the specified project and region using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetPools.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetPools.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {compute(v1).TargetPool} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetPools',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.list
     *
     * @desc Retrieves a list of target pools available to the specified project and region.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.targetPools.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.targetPools.list(request, recur);
     * });
     *
     * @alias compute.targetPools.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetPools',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.removeHealthCheck
     *
     * @desc Removes health check URL from a target pool.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'removeHealthCheck' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the target pool to remove health checks from.
     *     targetPool: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetPools.removeHealthCheck(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetPools.removeHealthCheck
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.targetPool Name of the target pool to remove health checks from.
     * @param {compute(v1).TargetPoolsRemoveHealthCheckRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeHealthCheck: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/removeHealthCheck',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.removeInstance
     *
     * @desc Removes instance URL from a target pool.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'removeInstance' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // * Name of the TargetPool resource to remove instances from.
     *     targetPool: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetPools.removeInstance(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetPools.removeInstance
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the TargetPool resource to remove instances from.
     * @param {compute(v1).TargetPoolsRemoveInstanceRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeInstance: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/removeInstance',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.setBackup
     *
     * @desc Changes a backup target pool's configurations.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'setBackup' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region scoping this request.
     *     region: "",
     *
     *     // * Name of the TargetPool resource to set a backup pool for.
     *     targetPool: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetPools.setBackup(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetPools.setBackup
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {number=} params.failoverRatio New failoverRatio value for the target pool.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the TargetPool resource to set a backup pool for.
     * @param {compute(v1).TargetReference} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setBackup: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/setBackup',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.targetVpnGateways = {

    /**
     * compute.targetVpnGateways.aggregatedList
     *
     * @desc Retrieves an aggregated list of target VPN gateways.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.targetVpnGateways.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.targetVpnGateways.aggregatedList(request, recur);
     * });
     *
     * @alias compute.targetVpnGateways.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/targetVpnGateways',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetVpnGateways.delete
     *
     * @desc Deletes the specified target VPN gateway.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the target VPN gateway to delete.
     *     targetVpnGateway: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetVpnGateways.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetVpnGateways.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.targetVpnGateway Name of the target VPN gateway to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetVpnGateway'],
        pathParams: ['project', 'region', 'targetVpnGateway'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetVpnGateways.get
     *
     * @desc Returns the specified target VPN gateway. Get a list of available target VPN gateways by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the target VPN gateway to return.
     *     targetVpnGateway: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetVpnGateways.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetVpnGateways.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.targetVpnGateway Name of the target VPN gateway to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetVpnGateway'],
        pathParams: ['project', 'region', 'targetVpnGateway'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetVpnGateways.insert
     *
     * @desc Creates a target VPN gateway in the specified project and region using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.targetVpnGateways.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.targetVpnGateways.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {compute(v1).TargetVpnGateway} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetVpnGateways',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetVpnGateways.list
     *
     * @desc Retrieves a list of target VPN gateways available to the specified project and region.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.targetVpnGateways.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.targetVpnGateways.list(request, recur);
     * });
     *
     * @alias compute.targetVpnGateways.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/targetVpnGateways',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.urlMaps = {

    /**
     * compute.urlMaps.delete
     *
     * @desc Deletes the specified UrlMap resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the UrlMap resource to delete.
     *     urlMap: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.urlMaps.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.urlMaps.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.urlMap Name of the UrlMap resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/urlMaps/{urlMap}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.get
     *
     * @desc Returns the specified UrlMap resource. Get a list of available URL maps by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the UrlMap resource to return.
     *     urlMap: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.urlMaps.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.urlMaps.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.urlMap Name of the UrlMap resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/urlMaps/{urlMap}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.insert
     *
     * @desc Creates a UrlMap resource in the specified project using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.urlMaps.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.urlMaps.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {compute(v1).UrlMap} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/urlMaps',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.invalidateCache
     *
     * @desc Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'invalidateCache' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the UrlMap scoping this request.
     *     urlMap: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.urlMaps.invalidateCache(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.urlMaps.invalidateCache
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.urlMap Name of the UrlMap scoping this request.
     * @param {compute(v1).CacheInvalidationRule} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    invalidateCache: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/urlMaps/{urlMap}/invalidateCache',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.list
     *
     * @desc Retrieves the list of UrlMap resources available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.urlMaps.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.urlMaps.list(request, recur);
     * });
     *
     * @alias compute.urlMaps.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/urlMaps',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.patch
     *
     * @desc Updates the entire content of the UrlMap resource. This method supports patch semantics.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'patch' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the UrlMap resource to update.
     *     urlMap: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.urlMaps.patch(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.urlMaps.patch
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.urlMap Name of the UrlMap resource to update.
     * @param {compute(v1).UrlMap} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/urlMaps/{urlMap}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.update
     *
     * @desc Updates the entire content of the UrlMap resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'update' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the UrlMap resource to update.
     *     urlMap: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.urlMaps.update(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.urlMaps.update
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.urlMap Name of the UrlMap resource to update.
     * @param {compute(v1).UrlMap} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/urlMaps/{urlMap}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.validate
     *
     * @desc Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'validate' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the UrlMap resource to be validated as.
     *     urlMap: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.urlMaps.validate(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.urlMaps.validate
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.urlMap Name of the UrlMap resource to be validated as.
     * @param {compute(v1).UrlMapsValidateRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    validate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/global/urlMaps/{urlMap}/validate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.vpnTunnels = {

    /**
     * compute.vpnTunnels.aggregatedList
     *
     * @desc Retrieves an aggregated list of VPN tunnels.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'aggregatedList' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.vpnTunnels.aggregatedList(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.vpnTunnels.aggregatedList(request, recur);
     * });
     *
     * @alias compute.vpnTunnels.aggregatedList
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/aggregated/vpnTunnels',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.vpnTunnels.delete
     *
     * @desc Deletes the specified VpnTunnel resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the VpnTunnel resource to delete.
     *     vpnTunnel: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.vpnTunnels.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.vpnTunnels.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.vpnTunnel Name of the VpnTunnel resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'vpnTunnel'],
        pathParams: ['project', 'region', 'vpnTunnel'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.vpnTunnels.get
     *
     * @desc Returns the specified VpnTunnel resource. Get a list of available VPN tunnels by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // * Name of the VpnTunnel resource to return.
     *     vpnTunnel: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.vpnTunnels.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.vpnTunnels.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.vpnTunnel Name of the VpnTunnel resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'vpnTunnel'],
        pathParams: ['project', 'region', 'vpnTunnel'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.vpnTunnels.insert
     *
     * @desc Creates a VpnTunnel resource in the specified project and region using the data included in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     resource: {},
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.vpnTunnels.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.vpnTunnels.insert
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {compute(v1).VpnTunnel} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/vpnTunnels',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.vpnTunnels.list
     *
     * @desc Retrieves a list of VpnTunnel resources contained in the specified project and region.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the region for this request.
     *     region: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.vpnTunnels.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.vpnTunnels.list(request, recur);
     * });
     *
     * @alias compute.vpnTunnels.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/vpnTunnels',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.zoneOperations = {

    /**
     * compute.zoneOperations.delete
     *
     * @desc Deletes the specified zone-specific Operations resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the Operations resource to delete.
     *     operation: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.zoneOperations.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.zoneOperations.delete
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the Operations resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/operations/{operation}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'operation'],
        pathParams: ['operation', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.zoneOperations.get
     *
     * @desc Retrieves the specified zone-specific Operations resource.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone for this request.
     *     zone: "",
     *
     *     // * Name of the Operations resource to return.
     *     operation: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.zoneOperations.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.zoneOperations.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the Operations resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/operations/{operation}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'operation'],
        pathParams: ['operation', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.zoneOperations.list
     *
     * @desc Retrieves a list of Operation resources contained within the specified zone.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone for request.
     *     zone: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.zoneOperations.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.zoneOperations.list(request, recur);
     * });
     *
     * @alias compute.zoneOperations.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/operations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.zones = {

    /**
     * compute.zones.get
     *
     * @desc Returns the specified Zone resource. Get a list of available zones by making a list() request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // * Name of the zone resource to return.
     *     zone: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   compute.zones.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias compute.zones.get
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.zones.list
     *
     * @desc Retrieves the list of Zone resources available to the specified project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Compute Engine API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/compute
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run
     * //    'gcloud auth application-default login'
     * // 3. Install the Node.js client library and Application Default Credentials
     * //    library by running 'npm install googleapis --save'
     * var google = require('googleapis');
     * var compute = google.compute('v1');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // * Project ID for this request.
     *     project: "",
     *
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         compute.zones.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   compute.zones.list(request, recur);
     * });
     *
     * @alias compute.zones.list
     * @memberOf! compute(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/v1/projects/{project}/zones',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef AccessConfig
 * @memberOf! compute(v1)
 * @type object
 * @property {string} kind [Output Only] Type of the resource. Always compute#accessConfig for access configs.
 * @property {string} name Name of this access configuration.
 * @property {string} natIP An external IP address associated with this instance. Specify an unused static external IP address available to the project or leave this field undefined to use an IP from a shared ephemeral IP address pool. If you specify a static external IP address, it must live in the same region as the zone of the instance.
 * @property {string} type The type of configuration. The default and only option is ONE_TO_ONE_NAT.
 */
/**
 * @typedef Address
 * @memberOf! compute(v1)
 * @type object
 * @property {string} address The static external IP address represented by this resource.
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} kind [Output Only] Type of the resource. Always compute#address for addresses.
 * @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 * @property {string} region [Output Only] URL of the region where the regional address resides. This field is not applicable to global addresses.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {string} status [Output Only] The status of the address, which can be either IN_USE or RESERVED. An address that is RESERVED is currently reserved and available to use. An IN_USE address is currently being used by another resource and is not available.
 * @property {string[]} users [Output Only] The URLs of the resources that are using this address.
 */
/**
 * @typedef AddressAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] Unique identifier for the resource; defined by the server.
 * @property {object} items [Output Only] A map of scoped address lists.
 * @property {string} kind [Output Only] Type of resource. Always compute#addressAggregatedList for aggregated lists of addresses.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef AddressList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).Address[]} items [Output Only] A list of addresses.
 * @property {string} kind [Output Only] Type of resource. Always compute#addressList for lists of addresses.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 */
/**
 * @typedef AddressesScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).Address[]} addresses [Output Only] List of addresses contained in this scope.
 * @property {object} warning [Output Only] Informational warning which replaces the list of addresses when the list is empty.
 */
/**
 * @typedef AttachedDisk
 * @memberOf! compute(v1)
 * @type object
* @property {boolean} autoDelete Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
* @property {boolean} boot Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.
* @property {string} deviceName Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance.

If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disks-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks.
* @property {compute(v1).CustomerEncryptionKey} diskEncryptionKey Encrypts or decrypts a disk using a customer-supplied encryption key.

If you are creating a new disk, this field encrypts the new disk using an encryption key that you provide. If you are attaching an existing disk that is already encrypted, this field decrypts the disk using the customer-supplied encryption key.

If you encrypt a disk using a customer-supplied key, you must provide the same key again when you attempt to use this resource at a later time. For example, you must provide the key when you create a snapshot or an image from the disk or when you attach the disk to a virtual machine instance.

If you do not provide an encryption key, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the disk later.

Instance templates do not store customer-supplied encryption keys, so you cannot use your own keys to encrypt disks in a managed instance group.
* @property {integer} index Assigns a zero-based index to this disk, where 0 is reserved for the boot disk. For example, if you have many disks attached to an instance, each disk would have a unique index number. If not specified, the server will choose an appropriate value.
* @property {compute(v1).AttachedDiskInitializeParams} initializeParams [Input Only] Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new instance.

This property is mutually exclusive with the source property; you can only define one or the other, but not both.
* @property {string} interface Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance.
* @property {string} kind [Output Only] Type of the resource. Always compute#attachedDisk for attached disks.
* @property {string[]} licenses [Output Only] Any valid publicly visible licenses.
* @property {string} mode The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode.
* @property {string} source Specifies a valid partial or full URL to an existing Persistent Disk resource. This field is only applicable for persistent disks. Note that for InstanceTemplate, it is just disk name, not URL for the disk.
* @property {string} type Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.
*/
/**
 * @typedef AttachedDiskInitializeParams
 * @memberOf! compute(v1)
 * @type object
* @property {string} diskName Specifies the disk name. If not specified, the default is to use the name of the instance.
* @property {string} diskSizeGb Specifies the size of the disk in base-2 GB.
* @property {string} diskType Specifies the disk type to use to create the instance. If not specified, the default is pd-standard, specified using the full URL. For example:

https://www.googleapis.com/compute/v1/projects/project/zones/zone/diskTypes/pd-standard 

Other values include pd-ssd and local-ssd. If you define this field, you can provide either the full or partial URL. For example, the following are valid values:  
- https://www.googleapis.com/compute/v1/projects/project/zones/zone/diskTypes/diskType 
- projects/project/zones/zone/diskTypes/diskType 
- zones/zone/diskTypes/diskType  Note that for InstanceTemplate, this is the name of the disk type, not URL.
* @property {string} sourceImage The source image used to create this disk. If the source image is deleted, this field will not be set.

To create a disk with one of the public operating system images, specify the image by its family name. For example, specify family/debian-8 to use the latest Debian 8 image:

projects/debian-cloud/global/images/family/debian-8 

Alternatively, use a specific version of a public operating system image:

projects/debian-cloud/global/images/debian-8-jessie-vYYYYMMDD 

To create a disk with a private image that you created, specify the image name in the following format:

global/images/my-private-image 

You can also specify a private image by its image family, which returns the latest version of the image in that family. Replace the image name with family/family-name:

global/images/family/my-private-family
* @property {compute(v1).CustomerEncryptionKey} sourceImageEncryptionKey The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key.

Instance templates do not store customer-supplied encryption keys, so you cannot create disks for instances in a managed instance group if the source images are encrypted with your own keys.
*/
/**
 * @typedef Autoscaler
 * @memberOf! compute(v1)
 * @type object
* @property {compute(v1).AutoscalingPolicy} autoscalingPolicy The configuration parameters for the autoscaling algorithm. You can define one or more of the policies for an autoscaler: cpuUtilization, customMetricUtilizations, and loadBalancingUtilization.

If none of these are specified, the default will be to autoscale based on cpuUtilization to 0.6 or 60%.
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {string} kind [Output Only] Type of the resource. Always compute#autoscaler for autoscalers.
* @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {string} selfLink [Output Only] Server-defined URL for the resource.
* @property {string} target URL of the managed instance group that this autoscaler will scale.
* @property {string} zone [Output Only] URL of the zone where the instance group resides (for autoscalers living in zonal scope).
*/
/**
 * @typedef AutoscalerAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {object} items A map of scoped autoscaler lists.
 * @property {string} kind [Output Only] Type of resource. Always compute#autoscalerAggregatedList for aggregated lists of autoscalers.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef AutoscalerList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).Autoscaler[]} items A list of Autoscaler resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#autoscalerList for lists of autoscalers.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef AutoscalersScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).Autoscaler[]} autoscalers [Output Only] List of autoscalers contained in this scope.
 * @property {object} warning [Output Only] Informational warning which replaces the list of autoscalers when the list is empty.
 */
/**
 * @typedef AutoscalingPolicy
 * @memberOf! compute(v1)
 * @type object
* @property {integer} coolDownPeriodSec The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. This prevents the autoscaler from collecting information when the instance is initializing, during which the collected usage would not be reliable. The default time autoscaler waits is 60 seconds.

Virtual machine initialization times might vary because of numerous factors. We recommend that you test how long an instance may take to initialize. To do this, create an instance and time the startup process.
* @property {compute(v1).AutoscalingPolicyCpuUtilization} cpuUtilization Defines the CPU utilization policy that allows the autoscaler to scale based on the average CPU utilization of a managed instance group.
* @property {compute(v1).AutoscalingPolicyCustomMetricUtilization[]} customMetricUtilizations Configuration parameters of autoscaling based on a custom metric.
* @property {compute(v1).AutoscalingPolicyLoadBalancingUtilization} loadBalancingUtilization Configuration parameters of autoscaling based on load balancer.
* @property {integer} maxNumReplicas The maximum number of instances that the autoscaler can scale up to. This is required when creating or updating an autoscaler. The maximum number of replicas should not be lower than minimal number of replicas.
* @property {integer} minNumReplicas The minimum number of replicas that the autoscaler can scale down to. This cannot be less than 0. If not provided, autoscaler will choose a default value depending on maximum number of instances allowed.
*/
/**
 * @typedef AutoscalingPolicyCpuUtilization
 * @memberOf! compute(v1)
 * @type object
* @property {number} utilizationTarget The target CPU utilization that the autoscaler should maintain. Must be a float value in the range (0, 1]. If not specified, the default is 0.6.

If the CPU level is below the target utilization, the autoscaler scales down the number of instances until it reaches the minimum number of instances you specified or until the average CPU of your instances reaches the target utilization.

If the average CPU is above the target utilization, the autoscaler scales up until it reaches the maximum number of instances you specified or until the average utilization reaches the target utilization.
*/
/**
 * @typedef AutoscalingPolicyCustomMetricUtilization
 * @memberOf! compute(v1)
 * @type object
* @property {string} metric The identifier of the Cloud Monitoring metric. The metric cannot have negative values and should be a utilization metric, which means that the number of virtual machines handling requests should increase or decrease proportionally to the metric. The metric must also have a label of compute.googleapis.com/resource_id with the value of the instance&#39;s unique ID, although this alone does not guarantee that the metric is valid.

For example, the following is a valid metric:
compute.googleapis.com/instance/network/received_bytes_count


The following is not a valid metric because it does not increase or decrease based on usage:
compute.googleapis.com/instance/cpu/reserved_cores
* @property {number} utilizationTarget Target value of the metric which autoscaler should maintain. Must be a positive value.
* @property {string} utilizationTargetType Defines how target utilization value is expressed for a Cloud Monitoring metric. Either GAUGE, DELTA_PER_SECOND, or DELTA_PER_MINUTE. If not specified, the default is GAUGE.
*/
/**
 * @typedef AutoscalingPolicyLoadBalancingUtilization
 * @memberOf! compute(v1)
 * @type object
 * @property {number} utilizationTarget Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. Must be a positive float value. If not defined, the default is 0.8.
 */
/**
 * @typedef Backend
 * @memberOf! compute(v1)
 * @type object
* @property {string} balancingMode Specifies the balancing mode for this backend. For global HTTP(S) load balancing, the default is UTILIZATION. Valid values are UTILIZATION and RATE.

This cannot be used for internal load balancing.
* @property {number} capacityScaler A multiplier applied to the group&#39;s maximum servicing capacity (either UTILIZATION or RATE). Default value is 1, which means the group will serve up to 100% of its configured CPU or RPS (depending on balancingMode). A setting of 0 means the group is completely drained, offering 0% of its available CPU or RPS. Valid range is [0.0,1.0].

This cannot be used for internal load balancing.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {string} group The fully-qualified URL of a zonal Instance Group resource. This instance group defines the list of instances that serve traffic. Member virtual machine instances from each instance group must live in the same zone as the instance group itself. No two backends in a backend service are allowed to use same Instance Group resource.

Note that you must specify an Instance Group resource using the fully-qualified URL, rather than a partial URL.

When the BackendService has load balancing scheme INTERNAL, the instance group must be in a zone within the same region as the BackendService.
* @property {integer} maxRate The max requests per second (RPS) of the group. Can be used with either RATE or UTILIZATION balancing modes, but required if RATE mode. For RATE mode, either maxRate or maxRatePerInstance must be set.

This cannot be used for internal load balancing.
* @property {number} maxRatePerInstance The max requests per second (RPS) that a single backend instance can handle.This is used to calculate the capacity of the group. Can be used in either balancing mode. For RATE mode, either maxRate or maxRatePerInstance must be set.

This cannot be used for internal load balancing.
* @property {number} maxUtilization Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. The default is 0.8. Valid range is [0.0, 1.0].

This cannot be used for internal load balancing.
*/
/**
 * @typedef BackendService
 * @memberOf! compute(v1)
 * @type object
* @property {integer} affinityCookieTtlSec Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts only until the end of the browser session (or equivalent). The maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.
* @property {compute(v1).Backend[]} backends The list of backends that serve this BackendService.
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {boolean} enableCDN If true, enable Cloud CDN for this BackendService.

When the load balancing scheme is INTERNAL, this field is not used.
* @property {string} fingerprint Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a BackendService. An up-to-date fingerprint must be provided in order to update the BackendService.
* @property {string[]} healthChecks The list of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. Currently at most one health check can be specified, and a health check is required.

For internal load balancing, a URL to a HealthCheck resource must be specified instead.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {string} kind [Output Only] Type of resource. Always compute#backendService for backend services.
* @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {integer} port Deprecated in favor of portName. The TCP port to connect on the backend. The default value is 80.

This cannot be used for internal load balancing.
* @property {string} portName Name of backend port. The same name should appear in the instance groups referenced by this service. Required when the load balancing scheme is EXTERNAL.

When the load balancing scheme is INTERNAL, this field is not used.
* @property {string} protocol The protocol this BackendService uses to communicate with backends.

Possible values are HTTP, HTTPS, HTTP2, TCP and SSL. The default is HTTP.

For internal load balancing, the possible values are TCP and UDP, and the default is TCP.
* @property {string} region [Output Only] URL of the region where the regional backend service resides. This field is not applicable to global backend services.
* @property {string} selfLink [Output Only] Server-defined URL for the resource.
* @property {string} sessionAffinity Type of session affinity to use. The default is NONE.

When the load balancing scheme is EXTERNAL, can be NONE, CLIENT_IP, or GENERATED_COOKIE.

When the load balancing scheme is INTERNAL, can be NONE, CLIENT_IP, CLIENT_IP_PROTO, or CLIENT_IP_PORT_PROTO.

When the protocol is UDP, this field is not used.
* @property {integer} timeoutSec How many seconds to wait for the backend before considering it a failed request. Default is 30 seconds.
*/
/**
 * @typedef BackendServiceGroupHealth
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).HealthStatus[]} healthStatus 
 * @property {string} kind [Output Only] Type of resource. Always compute#backendServiceGroupHealth for the health of backend services.
 */
/**
 * @typedef BackendServiceList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] Unique identifier for the resource; defined by the server.
 * @property {compute(v1).BackendService[]} items A list of BackendService resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#backendServiceList for lists of backend services.
 * @property {string} nextPageToken [Output Only] A token used to continue a truncated list request.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef CacheInvalidationRule
 * @memberOf! compute(v1)
 * @type object
 * @property {string} path 
 */
/**
 * @typedef CustomerEncryptionKey
 * @memberOf! compute(v1)
 * @type object
 * @property {string} rawKey Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.
 * @property {string} sha256 [Output only] The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
 */
/**
 * @typedef CustomerEncryptionKeyProtectedDisk
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).CustomerEncryptionKey} diskEncryptionKey Decrypts data associated with the disk with a customer-supplied encryption key.
 * @property {string} source Specifies a valid partial or full URL to an existing Persistent Disk resource. This field is only applicable for persistent disks.
 */
/**
 * @typedef DeprecationStatus
 * @memberOf! compute(v1)
 * @type object
 * @property {string} deleted An optional RFC3339 timestamp on or after which the deprecation state of this resource will be changed to DELETED.
 * @property {string} deprecated An optional RFC3339 timestamp on or after which the deprecation state of this resource will be changed to DEPRECATED.
 * @property {string} obsolete An optional RFC3339 timestamp on or after which the deprecation state of this resource will be changed to OBSOLETE.
 * @property {string} replacement The URL of the suggested replacement for a deprecated resource. The suggested replacement resource must be the same kind of resource as the deprecated resource.
 * @property {string} state The deprecation state of this resource. This can be DEPRECATED, OBSOLETE, or DELETED. Operations which create a new resource using a DEPRECATED resource will return successfully, but with a warning indicating the deprecated resource and recommending its replacement. Operations which use OBSOLETE or DELETED resources will be rejected and result in an error.
 */
/**
 * @typedef Disk
 * @memberOf! compute(v1)
 * @type object
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {compute(v1).CustomerEncryptionKey} diskEncryptionKey Encrypts the disk using a customer-supplied encryption key.

After you encrypt a disk with a customer-supplied key, you must provide the same key if you use the disk later (e.g. to create a disk snapshot or an image, or to attach the disk to a virtual machine).

Customer-supplied encryption keys do not protect access to metadata of the disk.

If you do not provide an encryption key when creating the disk, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the disk later.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {string} kind [Output Only] Type of the resource. Always compute#disk for disks.
* @property {string} lastAttachTimestamp [Output Only] Last attach timestamp in RFC3339 text format.
* @property {string} lastDetachTimestamp [Output Only] Last detach timestamp in RFC3339 text format.
* @property {string[]} licenses Any applicable publicly visible licenses.
* @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {string} options Internal use only.
* @property {string} selfLink [Output Only] Server-defined fully-qualified URL for this resource.
* @property {string} sizeGb Size of the persistent disk, specified in GB. You can specify this field when creating a persistent disk using the sourceImage or sourceSnapshot parameter, or specify it alone to create an empty persistent disk.

If you specify this field along with sourceImage or sourceSnapshot, the value of sizeGb must not be less than the size of the sourceImage or the size of the snapshot.
* @property {string} sourceImage The source image used to create this disk. If the source image is deleted, this field will not be set.

To create a disk with one of the public operating system images, specify the image by its family name. For example, specify family/debian-8 to use the latest Debian 8 image:

projects/debian-cloud/global/images/family/debian-8 

Alternatively, use a specific version of a public operating system image:

projects/debian-cloud/global/images/debian-8-jessie-vYYYYMMDD 

To create a disk with a private image that you created, specify the image name in the following format:

global/images/my-private-image 

You can also specify a private image by its image family, which returns the latest version of the image in that family. Replace the image name with family/family-name:

global/images/family/my-private-family
* @property {compute(v1).CustomerEncryptionKey} sourceImageEncryptionKey The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key.
* @property {string} sourceImageId [Output Only] The ID value of the image used to create this disk. This value identifies the exact image that was used to create this persistent disk. For example, if you created the persistent disk from an image that was later deleted and recreated under the same name, the source image ID would identify the exact version of the image that was used.
* @property {string} sourceSnapshot The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values:  
- https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot 
- projects/project/global/snapshots/snapshot 
- global/snapshots/snapshot
* @property {compute(v1).CustomerEncryptionKey} sourceSnapshotEncryptionKey The customer-supplied encryption key of the source snapshot. Required if the source snapshot is protected by a customer-supplied encryption key.
* @property {string} sourceSnapshotId [Output Only] The unique ID of the snapshot used to create this disk. This value identifies the exact snapshot that was used to create this persistent disk. For example, if you created the persistent disk from a snapshot that was later deleted and recreated under the same name, the source snapshot ID would identify the exact version of the snapshot that was used.
* @property {string} status [Output Only] The status of disk creation. Applicable statuses includes: CREATING, FAILED, READY, RESTORING.
* @property {string} type URL of the disk type resource describing which disk type to use to create the disk. Provide this when creating the disk.
* @property {string[]} users [Output Only] Links to the users of the disk (attached instances) in form: project/zones/zone/instances/instance
* @property {string} zone [Output Only] URL of the zone where the disk resides.
*/
/**
 * @typedef DiskAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {object} items [Output Only] A map of scoped disk lists.
 * @property {string} kind [Output Only] Type of resource. Always compute#diskAggregatedList for aggregated lists of persistent disks.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef DiskList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).Disk[]} items [Output Only] A list of persistent disks.
 * @property {string} kind [Output Only] Type of resource. Always compute#diskList for lists of disks.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef DiskMoveRequest
 * @memberOf! compute(v1)
 * @type object
* @property {string} destinationZone The URL of the destination zone to move the disk. This can be a full or partial URL. For example, the following are all valid URLs to a zone:  
- https://www.googleapis.com/compute/v1/projects/project/zones/zone 
- projects/project/zones/zone 
- zones/zone
* @property {string} targetDisk The URL of the target disk to move. This can be a full or partial URL. For example, the following are all valid URLs to a disk:  
- https://www.googleapis.com/compute/v1/projects/project/zones/zone/disks/disk 
- projects/project/zones/zone/disks/disk 
- zones/zone/disks/disk
*/
/**
 * @typedef DiskType
 * @memberOf! compute(v1)
 * @type object
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} defaultDiskSizeGb [Output Only] Server-defined default disk size in GB.
 * @property {compute(v1).DeprecationStatus} deprecated [Output Only] The deprecation status associated with this disk type.
 * @property {string} description [Output Only] An optional description of this resource.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} kind [Output Only] Type of the resource. Always compute#diskType for disk types.
 * @property {string} name [Output Only] Name of the resource.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {string} validDiskSize [Output Only] An optional textual description of the valid disk size, such as &quot;10GB-10TB&quot;.
 * @property {string} zone [Output Only] URL of the zone where the disk type resides.
 */
/**
 * @typedef DiskTypeAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {object} items [Output Only] A map of scoped disk type lists.
 * @property {string} kind [Output Only] Type of resource. Always compute#diskTypeAggregatedList.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef DiskTypeList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).DiskType[]} items [Output Only] A list of Disk Type resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#diskTypeList for disk types.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef DiskTypesScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).DiskType[]} diskTypes [Output Only] List of disk types contained in this scope.
 * @property {object} warning [Output Only] Informational warning which replaces the list of disk types when the list is empty.
 */
/**
 * @typedef DisksResizeRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {string} sizeGb The new size of the persistent disk, which is specified in GB.
 */
/**
 * @typedef DisksScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).Disk[]} disks [Output Only] List of disks contained in this scope.
 * @property {object} warning [Output Only] Informational warning which replaces the list of disks when the list is empty.
 */
/**
 * @typedef Firewall
 * @memberOf! compute(v1)
 * @type object
* @property {object[]} allowed The list of ALLOW rules specified by this firewall. Each rule specifies a protocol and port-range tuple that describes a permitted connection.
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {string} kind [Output Ony] Type of the resource. Always compute#firewall for firewall rules.
* @property {string} name Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {string} network URL of the network resource for this firewall rule. If not specified when creating a firewall rule, the default network is used:
global/networks/default
If you choose to specify this property, you can specify the network as a full or partial URL. For example, the following are all valid URLs:  
- https://www.googleapis.com/compute/v1/projects/myproject/global/networks/my-network 
- projects/myproject/global/networks/my-network 
- global/networks/default
* @property {string} selfLink [Output Only] Server-defined URL for the resource.
* @property {string[]} sourceRanges If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges. These ranges must be expressed in CIDR format. One or both of sourceRanges and sourceTags may be set. If both properties are set, the firewall will apply to traffic that has source IP address within sourceRanges OR the source IP that belongs to a tag listed in the sourceTags property. The connection does not need to match both properties for the firewall to apply.
* @property {string[]} sourceTags If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags. Source tags cannot be used to control traffic to an instance&#39;s external IP address. Because tags are associated with an instance, not an IP address. One or both of sourceRanges and sourceTags may be set. If both properties are set, the firewall will apply to traffic that has source IP address within sourceRanges OR the source IP that belongs to a tag listed in the sourceTags property. The connection does not need to match both properties for the firewall to apply.
* @property {string[]} targetTags A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[]. If no targetTags are specified, the firewall rule applies to all instances on the specified network.
*/
/**
 * @typedef FirewallList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).Firewall[]} items [Output Only] A list of Firewall resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#firewallList for lists of firewalls.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef ForwardingRule
 * @memberOf! compute(v1)
 * @type object
* @property {string} IPAddress The IP address that this forwarding rule is serving on behalf of.

For global forwarding rules, the address must be a global IP; for regional forwarding rules, the address must live in the same region as the forwarding rule. By default, this field is empty and an ephemeral IP from the same scope (global or regional) will be assigned.

When the load balancing scheme is INTERNAL, this can only be an RFC 1918 IP address belonging to the network/subnetwork configured for the forwarding rule. A reserved address cannot be used. If the field is empty, the IP address will be automatically allocated from the internal IP range of the subnetwork or network configured for this forwarding rule.
* @property {string} IPProtocol The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH, SCTP or ICMP.

When the load balancing scheme is INTERNAL&lt;/code, only TCP and UDP are valid.
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {string} kind [Output Only] Type of the resource. Always compute#forwardingRule for Forwarding Rule resources.
* @property {string} name Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {string} portRange Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets addressed to ports in the specified range will be forwarded to target. Forwarding rules with the same [IPAddress, IPProtocol] pair must have disjoint port ranges.

This field is not used for internal load balancing.
* @property {string} region [Output Only] URL of the region where the regional forwarding rule resides. This field is not applicable to global forwarding rules.
* @property {string} selfLink [Output Only] Server-defined URL for the resource.
* @property {string} target The URL of the target resource to receive the matched traffic. For regional forwarding rules, this target must live in the same region as the forwarding rule. For global forwarding rules, this target must be a global TargetHttpProxy or TargetHttpsProxy resource. The forwarded traffic must be of a type appropriate to the target object. For example, TargetHttpProxy requires HTTP traffic, and TargetHttpsProxy requires HTTPS traffic.

This field is not used for internal load balancing.
*/
/**
 * @typedef ForwardingRuleAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {object} items A map of scoped forwarding rule lists.
 * @property {string} kind [Output Only] Type of resource. Always compute#forwardingRuleAggregatedList for lists of forwarding rules.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef ForwardingRuleList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] Unique identifier for the resource. Set by the server.
 * @property {compute(v1).ForwardingRule[]} items A list of ForwardingRule resources.
 * @property {string} kind Type of resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef ForwardingRulesScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).ForwardingRule[]} forwardingRules List of forwarding rules contained in this scope.
 * @property {object} warning Informational warning which replaces the list of forwarding rules when the list is empty.
 */
/**
 * @typedef HealthCheckReference
 * @memberOf! compute(v1)
 * @type object
 * @property {string} healthCheck 
 */
/**
 * @typedef HealthStatus
 * @memberOf! compute(v1)
 * @type object
 * @property {string} healthState Health state of the instance.
 * @property {string} instance URL of the instance resource.
 * @property {string} ipAddress The IP address represented by this resource.
 * @property {integer} port The port on the instance.
 */
/**
 * @typedef HostRule
 * @memberOf! compute(v1)
 * @type object
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {string[]} hosts The list of host patterns to match. They must be valid hostnames, except * will match any string of ([a-z0-9-.]*). In that case, * must be the first character and must be followed in the pattern by either - or ..
 * @property {string} pathMatcher The name of the PathMatcher to use to match the path portion of the URL if the hostRule matches the URL&#39;s host portion.
 */
/**
 * @typedef HttpHealthCheck
 * @memberOf! compute(v1)
 * @type object
 * @property {integer} checkIntervalSec How often (in seconds) to send a health check. The default value is 5 seconds.
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {integer} healthyThreshold A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
 * @property {string} host The value of the host header in the HTTP health check request. If left empty (default value), the public IP on behalf of which this health check is performed will be used.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} kind [Output Only] Type of the resource. Always compute#httpHealthCheck for HTTP health checks.
 * @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 * @property {integer} port The TCP port number for the HTTP health check request. The default value is 80.
 * @property {string} requestPath The request path of the HTTP health check request. The default value is /.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {integer} timeoutSec How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have greater value than checkIntervalSec.
 * @property {integer} unhealthyThreshold A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
 */
/**
 * @typedef HttpHealthCheckList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] Unique identifier for the resource. Defined by the server.
 * @property {compute(v1).HttpHealthCheck[]} items A list of HttpHealthCheck resources.
 * @property {string} kind Type of resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef HttpsHealthCheck
 * @memberOf! compute(v1)
 * @type object
 * @property {integer} checkIntervalSec How often (in seconds) to send a health check. The default value is 5 seconds.
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {integer} healthyThreshold A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
 * @property {string} host The value of the host header in the HTTPS health check request. If left empty (default value), the public IP on behalf of which this health check is performed will be used.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} kind Type of the resource.
 * @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 * @property {integer} port The TCP port number for the HTTPS health check request. The default value is 443.
 * @property {string} requestPath The request path of the HTTPS health check request. The default value is &quot;/&quot;.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {integer} timeoutSec How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have a greater value than checkIntervalSec.
 * @property {integer} unhealthyThreshold A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
 */
/**
 * @typedef HttpsHealthCheckList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] Unique identifier for the resource; defined by the server.
 * @property {compute(v1).HttpsHealthCheck[]} items A list of HttpsHealthCheck resources.
 * @property {string} kind Type of resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef Image
 * @memberOf! compute(v1)
 * @type object
* @property {string} archiveSizeBytes Size of the image tar.gz archive stored in Google Cloud Storage (in bytes).
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {compute(v1).DeprecationStatus} deprecated The deprecation status associated with this image.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {string} diskSizeGb Size of the image when restored onto a persistent disk (in GB).
* @property {string} family The name of the image family to which this image belongs. You can create disks by specifying an image family instead of a specific image name. The image family always returns its latest image that is not deprecated. The name of the image family must comply with RFC1035.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {compute(v1).CustomerEncryptionKey} imageEncryptionKey Encrypts the image using a customer-supplied encryption key.

After you encrypt an image with a customer-supplied key, you must provide the same key if you use the image later (e.g. to create a disk from the image).

Customer-supplied encryption keys do not protect access to metadata of the disk.

If you do not provide an encryption key when creating the image, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the image later.
* @property {string} kind [Output Only] Type of the resource. Always compute#image for images.
* @property {string[]} licenses Any applicable license URI.
* @property {string} name Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {object} rawDisk The parameters of the raw disk image.
* @property {string} selfLink [Output Only] Server-defined URL for the resource.
* @property {string} sourceDisk URL of the The source disk used to create this image. This can be a full or valid partial URL. You must provide either this property or the rawDisk.source property but not both to create an image. For example, the following are valid values:  
- https://www.googleapis.com/compute/v1/projects/project/zones/zone/disk/disk 
- projects/project/zones/zone/disk/disk 
- zones/zone/disks/disk
* @property {compute(v1).CustomerEncryptionKey} sourceDiskEncryptionKey The customer-supplied encryption key of the source disk. Required if the source disk is protected by a customer-supplied encryption key.
* @property {string} sourceDiskId The ID value of the disk used to create this image. This value may be used to determine whether the image was taken from the current or a previous instance of a given disk name.
* @property {string} sourceType The type of the image used to create this disk. The default and only value is RAW
* @property {string} status [Output Only] The status of the image. An image can be used to create other resources, such as instances, only after the image has been successfully created and the status is set to READY. Possible values are FAILED, PENDING, or READY.
*/
/**
 * @typedef ImageList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).Image[]} items [Output Only] A list of Image resources.
 * @property {string} kind Type of resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef Instance
 * @memberOf! compute(v1)
 * @type object
* @property {boolean} canIpForward Allows this instance to send and receive packets with non-matching destination or source IPs. This is required if you plan to use this instance to forward routes. For more information, see Enabling IP Forwarding.
* @property {string} cpuPlatform [Output Only] The CPU platform used by this instance.
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {compute(v1).AttachedDisk[]} disks Array of disks associated with this instance. Persistent disks must be created before you can assign them.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {string} kind [Output Only] Type of the resource. Always compute#instance for instances.
* @property {string} machineType Full or partial URL of the machine type resource to use for this instance, in the format: zones/zone/machineTypes/machine-type. This is provided by the client when the instance is created. For example, the following is a valid partial url to a predefined machine type:

zones/us-central1-f/machineTypes/n1-standard-1 

To create a custom machine type, provide a URL to a machine type in the following format, where CPUS is 1 or an even number up to 32 (2, 4, 6, ... 24, etc), and MEMORY is the total memory for this instance. Memory must be a multiple of 256 MB and must be supplied in MB (e.g. 5 GB of memory is 5120 MB):

zones/zone/machineTypes/custom-CPUS-MEMORY 

For example: zones/us-central1-f/machineTypes/custom-4-5120 

For a full list of restrictions, read the Specifications for custom machine types.
* @property {compute(v1).Metadata} metadata The metadata key/value pairs assigned to this instance. This includes custom metadata and predefined keys.
* @property {string} name The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {compute(v1).NetworkInterface[]} networkInterfaces An array of configurations for this interface. This specifies how this interface is configured to interact with other network services, such as connecting to the internet. Only one interface is supported per instance.
* @property {compute(v1).Scheduling} scheduling Scheduling options for this instance.
* @property {string} selfLink [Output Only] Server-defined URL for this resource.
* @property {compute(v1).ServiceAccount[]} serviceAccounts A list of service accounts, with their specified scopes, authorized for this instance. Service accounts generate access tokens that can be accessed through the metadata server and used to authenticate applications on the instance. See Service Accounts for more information.
* @property {string} status [Output Only] The status of the instance. One of the following values: PROVISIONING, STAGING, RUNNING, STOPPING, SUSPENDED, SUSPENDING, and TERMINATED.
* @property {string} statusMessage [Output Only] An optional, human-readable explanation of the status.
* @property {compute(v1).Tags} tags A list of tags to apply to this instance. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during instance creation. The tags can be later modified by the setTags method. Each tag within the list must comply with RFC1035.
* @property {string} zone [Output Only] URL of the zone where the instance resides.
*/
/**
 * @typedef InstanceAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {object} items [Output Only] A map of scoped instance lists.
 * @property {string} kind [Output Only] Type of resource. Always compute#instanceAggregatedList for aggregated lists of Instance resources.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef InstanceGroup
 * @memberOf! compute(v1)
 * @type object
* @property {string} creationTimestamp [Output Only] The creation timestamp for this instance group in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {string} fingerprint [Output Only] The fingerprint of the named ports. The system uses this fingerprint to detect conflicts when multiple users change the named ports concurrently.
* @property {string} id [Output Only] A unique identifier for this resource type. The server generates this identifier.
* @property {string} kind [Output Only] The resource type, which is always compute#instanceGroup for instance groups.
* @property {string} name The name of the instance group. The name must be 1-63 characters long, and comply with RFC1035.
* @property {compute(v1).NamedPort[]} namedPorts Assigns a name to a port number. For example: {name: &quot;http&quot;, port: 80}

This allows the system to reference ports by the assigned name instead of a port number. Named ports can also contain multiple ports. For example: [{name: &quot;http&quot;, port: 80},{name: &quot;http&quot;, port: 8080}] 

Named ports apply to all instances in this instance group.
* @property {string} network The URL of the network to which all instances in the instance group belong.
* @property {string} selfLink [Output Only] The URL for this instance group. The server generates this URL.
* @property {integer} size [Output Only] The total number of instances in the instance group.
* @property {string} subnetwork The URL of the subnetwork to which all instances in the instance group belong.
* @property {string} zone [Output Only] The URL of the zone where the instance group is located (for zonal resources).
*/
/**
 * @typedef InstanceGroupAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] A unique identifier for this aggregated list of instance groups. The server generates this identifier.
 * @property {object} items A map of scoped instance group lists.
 * @property {string} kind [Output Only] The resource type, which is always compute#instanceGroupAggregatedList for aggregated lists of instance groups.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] The URL for this resource type. The server generates this URL.
 */
/**
 * @typedef InstanceGroupList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] A unique identifier for this list of instance groups. The server generates this identifier.
 * @property {compute(v1).InstanceGroup[]} items A list of instance groups.
 * @property {string} kind [Output Only] The resource type, which is always compute#instanceGroupList for instance group lists.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] The URL for this resource type. The server generates this URL.
 */
/**
 * @typedef InstanceGroupManager
 * @memberOf! compute(v1)
 * @type object
 * @property {string} baseInstanceName The base instance name to use for instances in this group. The value must be 1-58 characters long. Instances are named by appending a hyphen and a random four-character string to the base instance name. The base instance name must comply with RFC1035.
 * @property {string} creationTimestamp [Output Only] The creation timestamp for this managed instance group in RFC3339 text format.
 * @property {compute(v1).InstanceGroupManagerActionsSummary} currentActions [Output Only] The list of instance actions and the number of instances in this managed instance group that are scheduled for each of those actions.
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {string} fingerprint [Output Only] The fingerprint of the resource data. You can use this optional field for optimistic locking when you update the resource.
 * @property {string} id [Output Only] A unique identifier for this resource type. The server generates this identifier.
 * @property {string} instanceGroup [Output Only] The URL of the Instance Group resource.
 * @property {string} instanceTemplate The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group.
 * @property {string} kind [Output Only] The resource type, which is always compute#instanceGroupManager for managed instance groups.
 * @property {string} name The name of the managed instance group. The name must be 1-63 characters long, and comply with RFC1035.
 * @property {compute(v1).NamedPort[]} namedPorts Named ports configured for the Instance Groups complementary to this Instance Group Manager.
 * @property {string} selfLink [Output Only] The URL for this managed instance group. The server defines this URL.
 * @property {string[]} targetPools The URLs for all TargetPool resources to which instances in the instanceGroup field are added. The target pools automatically apply to all of the instances in the managed instance group.
 * @property {integer} targetSize The target number of running instances for this managed instance group. Deleting or abandoning instances reduces this number. Resizing the group changes this number.
 * @property {string} zone [Output Only] The URL of the zone where the managed instance group is located (for zonal resources).
 */
/**
 * @typedef InstanceGroupManagerActionsSummary
 * @memberOf! compute(v1)
 * @type object
* @property {integer} abandoning [Output Only] The total number of instances in the managed instance group that are scheduled to be abandoned. Abandoning an instance removes it from the managed instance group without deleting it.
* @property {integer} creating [Output Only] The number of instances in the managed instance group that are scheduled to be created or are currently being created. If the group fails to create any of these instances, it tries again until it creates the instance successfully.

If you have disabled creation retries, this field will not be populated; instead, the creatingWithoutRetries field will be populated.
* @property {integer} creatingWithoutRetries [Output Only] The number of instances that the managed instance group will attempt to create. The group attempts to create each instance only once. If the group fails to create any of these instances, it decreases the group&#39;s target_size value accordingly.
* @property {integer} deleting [Output Only] The number of instances in the managed instance group that are scheduled to be deleted or are currently being deleted.
* @property {integer} none [Output Only] The number of instances in the managed instance group that are running and have no scheduled actions.
* @property {integer} recreating [Output Only] The number of instances in the managed instance group that are scheduled to be recreated or are currently being being recreated. Recreating an instance deletes the existing root persistent disk and creates a new disk from the image that is defined in the instance template.
* @property {integer} refreshing [Output Only] The number of instances in the managed instance group that are being reconfigured with properties that do not require a restart or a recreate action. For example, setting or removing target pools for the instance.
* @property {integer} restarting [Output Only] The number of instances in the managed instance group that are scheduled to be restarted or are currently being restarted.
*/
/**
 * @typedef InstanceGroupManagerAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] A unique identifier for this aggregated list of managed instance groups. The server generates this identifier.
 * @property {object} items [Output Only] A map of filtered managed instance group lists.
 * @property {string} kind [Output Only] The resource type, which is always compute#instanceGroupManagerAggregatedList for an aggregated list of managed instance groups.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] The URL for this resource type. The server generates this URL.
 */
/**
 * @typedef InstanceGroupManagerList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] A unique identifier for this resource type. The server generates this identifier.
 * @property {compute(v1).InstanceGroupManager[]} items [Output Only] A list of managed instance groups.
 * @property {string} kind [Output Only] The resource type, which is always compute#instanceGroupManagerList for a list of managed instance groups.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] The URL for this resource type. The server generates this URL.
 */
/**
 * @typedef InstanceGroupManagersAbandonInstancesRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {string[]} instances The URL for one or more instances to abandon from the managed instance group.
 */
/**
 * @typedef InstanceGroupManagersDeleteInstancesRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {string[]} instances The list of instances to delete from this managed instance group. Specify one or more instance URLs.
 */
/**
 * @typedef InstanceGroupManagersListManagedInstancesResponse
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).ManagedInstance[]} managedInstances [Output Only] The list of instances in the managed instance group.
 */
/**
 * @typedef InstanceGroupManagersRecreateInstancesRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {string[]} instances The URL for one or more instances to recreate.
 */
/**
 * @typedef InstanceGroupManagersScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).InstanceGroupManager[]} instanceGroupManagers [Output Only] The list of managed instance groups that are contained in the specified project and zone.
 * @property {object} warning [Output Only] The warning that replaces the list of managed instance groups when the list is empty.
 */
/**
 * @typedef InstanceGroupManagersSetInstanceTemplateRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {string} instanceTemplate The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group.
 */
/**
 * @typedef InstanceGroupManagersSetTargetPoolsRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {string} fingerprint The fingerprint of the target pools information. Use this optional property to prevent conflicts when multiple users change the target pools settings concurrently. Obtain the fingerprint with the instanceGroupManagers.get method. Then, include the fingerprint in your request to ensure that you do not overwrite changes that were applied from another concurrent request.
 * @property {string[]} targetPools The list of target pool URLs that instances in this managed instance group belong to. The managed instance group applies these target pools to all of the instances in the group. Existing instances and new instances in the group all receive these target pool settings.
 */
/**
 * @typedef InstanceGroupsAddInstancesRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).InstanceReference[]} instances The list of instances to add to the instance group.
 */
/**
 * @typedef InstanceGroupsListInstances
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] A unique identifier for this list of instances in the specified instance group. The server generates this identifier.
 * @property {compute(v1).InstanceWithNamedPorts[]} items [Output Only] A list of instances and any named ports that are assigned to those instances.
 * @property {string} kind [Output Only] The resource type, which is always compute#instanceGroupsListInstances for the list of instances in the specified instance group.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] The URL for this list of instances in the specified instance groups. The server generates this URL.
 */
/**
 * @typedef InstanceGroupsListInstancesRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {string} instanceState A filter for the state of the instances in the instance group. Valid options are ALL or RUNNING. If you do not specify this parameter the list includes all instances regardless of their state.
 */
/**
 * @typedef InstanceGroupsRemoveInstancesRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).InstanceReference[]} instances The list of instances to remove from the instance group.
 */
/**
 * @typedef InstanceGroupsScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).InstanceGroup[]} instanceGroups [Output Only] The list of instance groups that are contained in this scope.
 * @property {object} warning [Output Only] An informational warning that replaces the list of instance groups when the list is empty.
 */
/**
 * @typedef InstanceGroupsSetNamedPortsRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {string} fingerprint The fingerprint of the named ports information for this instance group. Use this optional property to prevent conflicts when multiple users change the named ports settings concurrently. Obtain the fingerprint with the instanceGroups.get method. Then, include the fingerprint in your request to ensure that you do not overwrite changes that were applied from another concurrent request.
 * @property {compute(v1).NamedPort[]} namedPorts The list of named ports to set for this instance group.
 */
/**
 * @typedef InstanceList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).Instance[]} items [Output Only] A list of instances.
 * @property {string} kind [Output Only] Type of resource. Always compute#instanceList for lists of Instance resources.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef InstanceMoveRequest
 * @memberOf! compute(v1)
 * @type object
* @property {string} destinationZone The URL of the destination zone to move the instance. This can be a full or partial URL. For example, the following are all valid URLs to a zone:  
- https://www.googleapis.com/compute/v1/projects/project/zones/zone 
- projects/project/zones/zone 
- zones/zone
* @property {string} targetInstance The URL of the target instance to move. This can be a full or partial URL. For example, the following are all valid URLs to an instance:  
- https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance 
- projects/project/zones/zone/instances/instance 
- zones/zone/instances/instance
*/
/**
 * @typedef InstanceProperties
 * @memberOf! compute(v1)
 * @type object
 * @property {boolean} canIpForward Enables instances created based on this template to send packets with source IP addresses other than their own and receive packets with destination IP addresses other than their own. If these instances will be used as an IP gateway or it will be set as the next-hop in a Route resource, specify true. If unsure, leave this set to false. See the Enable IP forwarding for instances documentation for more information.
 * @property {string} description An optional text description for the instances that are created from this instance template.
 * @property {compute(v1).AttachedDisk[]} disks An array of disks that are associated with the instances that are created from this template.
 * @property {string} machineType The machine type to use for instances that are created from this template.
 * @property {compute(v1).Metadata} metadata The metadata key/value pairs to assign to instances that are created from this template. These pairs can consist of custom metadata or predefined keys. See Project and instance metadata for more information.
 * @property {compute(v1).NetworkInterface[]} networkInterfaces An array of network access configurations for this interface.
 * @property {compute(v1).Scheduling} scheduling Specifies the scheduling options for the instances that are created from this template.
 * @property {compute(v1).ServiceAccount[]} serviceAccounts A list of service accounts with specified scopes. Access tokens for these service accounts are available to the instances that are created from this template. Use metadata queries to obtain the access tokens for these instances.
 * @property {compute(v1).Tags} tags A list of tags to apply to the instances that are created from this template. The tags identify valid sources or targets for network firewalls. The setTags method can modify this list of tags. Each tag within the list must comply with RFC1035.
 */
/**
 * @typedef InstanceReference
 * @memberOf! compute(v1)
 * @type object
 * @property {string} instance The URL for a specific instance.
 */
/**
 * @typedef InstanceTemplate
 * @memberOf! compute(v1)
 * @type object
 * @property {string} creationTimestamp [Output Only] The creation timestamp for this instance template in RFC3339 text format.
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {string} id [Output Only] A unique identifier for this instance template. The server defines this identifier.
 * @property {string} kind [Output Only] The resource type, which is always compute#instanceTemplate for instance templates.
 * @property {string} name Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 * @property {compute(v1).InstanceProperties} properties The instance properties for this instance template.
 * @property {string} selfLink [Output Only] The URL for this instance template. The server defines this URL.
 */
/**
 * @typedef InstanceTemplateList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] A unique identifier for this instance template. The server defines this identifier.
 * @property {compute(v1).InstanceTemplate[]} items [Output Only] list of InstanceTemplate resources.
 * @property {string} kind [Output Only] The resource type, which is always compute#instanceTemplatesListResponse for instance template lists.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] The URL for this instance template list. The server defines this URL.
 */
/**
 * @typedef InstanceWithNamedPorts
 * @memberOf! compute(v1)
 * @type object
 * @property {string} instance [Output Only] The URL of the instance.
 * @property {compute(v1).NamedPort[]} namedPorts [Output Only] The named ports that belong to this instance group.
 * @property {string} status [Output Only] The status of the instance.
 */
/**
 * @typedef InstancesScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).Instance[]} instances [Output Only] List of instances contained in this scope.
 * @property {object} warning [Output Only] Informational warning which replaces the list of instances when the list is empty.
 */
/**
 * @typedef InstancesSetMachineTypeRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {string} machineType Full or partial URL of the machine type resource. See Machine Types for a full list of machine types. For example: zones/us-central1-f/machineTypes/n1-standard-1
 */
/**
 * @typedef InstancesStartWithEncryptionKeyRequest
 * @memberOf! compute(v1)
 * @type object
* @property {compute(v1).CustomerEncryptionKeyProtectedDisk[]} disks Array of disks associated with this instance that are protected with a customer-supplied encryption key.

In order to start the instance, the disk url and its corresponding key must be provided.

If the disk is not protected with a customer-supplied encryption key it should not be specified.
*/
/**
 * @typedef License
 * @memberOf! compute(v1)
 * @type object
 * @property {boolean} chargesUseFee [Output Only] If true, the customer will be charged license fee for running software that contains this license on an instance.
 * @property {string} kind [Output Only] Type of resource. Always compute#license for licenses.
 * @property {string} name [Output Only] Name of the resource. The name is 1-63 characters long and complies with RFC1035.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 */
/**
 * @typedef MachineType
 * @memberOf! compute(v1)
 * @type object
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {compute(v1).DeprecationStatus} deprecated [Output Only] The deprecation status associated with this machine type.
 * @property {string} description [Output Only] An optional textual description of the resource.
 * @property {integer} guestCpus [Output Only] The number of virtual CPUs that are available to the instance.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {integer} imageSpaceGb [Deprecated] This property is deprecated and will never be populated with any relevant values.
 * @property {boolean} isSharedCpu [Output Only] Whether this machine type has a shared CPU. See Shared-core machine types for more information.
 * @property {string} kind [Output Only] The type of the resource. Always compute#machineType for machine types.
 * @property {integer} maximumPersistentDisks [Output Only] Maximum persistent disks allowed.
 * @property {string} maximumPersistentDisksSizeGb [Output Only] Maximum total persistent disks size (GB) allowed.
 * @property {integer} memoryMb [Output Only] The amount of physical memory available to the instance, defined in MB.
 * @property {string} name [Output Only] Name of the resource.
 * @property {object[]} scratchDisks [Output Only] List of extended scratch disks assigned to the instance.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {string} zone [Output Only] The name of the zone where the machine type resides, such as us-central1-a.
 */
/**
 * @typedef MachineTypeAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {object} items [Output Only] A map of scoped machine type lists.
 * @property {string} kind [Output Only] Type of resource. Always compute#machineTypeAggregatedList for aggregated lists of machine types.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef MachineTypeList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).MachineType[]} items [Output Only] A list of Machine Type resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#machineTypeList for lists of machine types.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef MachineTypesScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).MachineType[]} machineTypes [Output Only] List of machine types contained in this scope.
 * @property {object} warning [Output Only] An informational warning that appears when the machine types list is empty.
 */
/**
 * @typedef ManagedInstance
 * @memberOf! compute(v1)
 * @type object
* @property {string} currentAction [Output Only] The current action that the managed instance group has scheduled for the instance. Possible values: 
- NONE The instance is running, and the managed instance group does not have any scheduled actions for this instance. 
- CREATING The managed instance group is creating this instance. If the group fails to create this instance, it will try again until it is successful. 
- CREATING_WITHOUT_RETRIES The managed instance group is attempting to create this instance only once. If the group fails to create this instance, it does not try again and the group&#39;s targetSize value is decreased instead. 
- RECREATING The managed instance group is recreating this instance. 
- DELETING The managed instance group is permanently deleting this instance. 
- ABANDONING The managed instance group is abandoning this instance. The instance will be removed from the instance group and from any target pools that are associated with this group. 
- RESTARTING The managed instance group is restarting the instance. 
- REFRESHING The managed instance group is applying configuration changes to the instance without stopping it. For example, the group can update the target pool list for an instance without stopping that instance.
* @property {string} id [Output only] The unique identifier for this resource. This field is empty when instance does not exist.
* @property {string} instance [Output Only] The URL of the instance. The URL can exist even if the instance has not yet been created.
* @property {string} instanceStatus [Output Only] The status of the instance. This field is empty when the instance does not exist.
* @property {compute(v1).ManagedInstanceLastAttempt} lastAttempt [Output Only] Information about the last attempt to create or delete the instance.
*/
/**
 * @typedef ManagedInstanceLastAttempt
 * @memberOf! compute(v1)
 * @type object
 * @property {object} errors [Output Only] Encountered errors during the last attempt to create or delete the instance.
 */
/**
 * @typedef Metadata
 * @memberOf! compute(v1)
 * @type object
 * @property {string} fingerprint Specifies a fingerprint for this request, which is essentially a hash of the metadata&#39;s contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change metadata.
 * @property {object[]} items Array of key/value pairs. The total size of all keys and values must be less than 512 KB.
 * @property {string} kind [Output Only] Type of the resource. Always compute#metadata for metadata.
 */
/**
 * @typedef NamedPort
 * @memberOf! compute(v1)
 * @type object
 * @property {string} name The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.
 * @property {integer} port The port number, which can be a value between 1 and 65535.
 */
/**
 * @typedef Network
 * @memberOf! compute(v1)
 * @type object
* @property {string} IPv4Range The range of internal addresses that are legal on this network. This range is a CIDR specification, for example: 192.168.0.0/16. Provided by the client when the network is created.
* @property {boolean} autoCreateSubnetworks When set to true, the network is created in &quot;auto subnet mode&quot;. When set to false, the network is in &quot;custom subnet mode&quot;.

In &quot;auto subnet mode&quot;, a newly created network is assigned the default CIDR of 10.128.0.0/9 and it automatically creates one subnetwork per region.
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {string} gatewayIPv4 A gateway address for default routing to other networks. This value is read only and is selected by the Google Compute Engine, typically as the first usable address in the IPv4Range.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {string} kind [Output Only] Type of the resource. Always compute#network for networks.
* @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {string} selfLink [Output Only] Server-defined URL for the resource.
* @property {string[]} subnetworks [Output Only] Server-defined fully-qualified URLs for all subnetworks in this network.
*/
/**
 * @typedef NetworkInterface
 * @memberOf! compute(v1)
 * @type object
* @property {compute(v1).AccessConfig[]} accessConfigs An array of configurations for this interface. Currently, only one access config, ONE_TO_ONE_NAT, is supported. If there are no accessConfigs specified, then this instance will have no external internet access.
* @property {string} name [Output Only] The name of the network interface, generated by the server. For network devices, these are eth0, eth1, etc.
* @property {string} network URL of the network resource for this instance. This is required for creating an instance but optional when creating a firewall rule. If not specified when creating a firewall rule, the default network is used:

global/networks/default 

If you specify this property, you can specify the network as a full or partial URL. For example, the following are all valid URLs:  
- https://www.googleapis.com/compute/v1/projects/project/global/networks/network 
- projects/project/global/networks/network 
- global/networks/default
* @property {string} networkIP An IPv4 internal network address to assign to the instance for this network interface. If not specified by the user, an unused internal IP is assigned by the system.
* @property {string} subnetwork The URL of the Subnetwork resource for this instance. If the network resource is in legacy mode, do not provide this property. If the network is in auto subnet mode, providing the subnetwork is optional. If the network is in custom subnet mode, then this field should be specified. If you specify this property, you can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs:  
- https://www.googleapis.com/compute/v1/projects/project/regions/region/subnetworks/subnetwork 
- regions/region/subnetworks/subnetwork
*/
/**
 * @typedef NetworkList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).Network[]} items [Output Only] A list of Network resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#networkList for lists of networks.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource .
 */
/**
 * @typedef Operation
 * @memberOf! compute(v1)
 * @type object
 * @property {string} clientOperationId [Output Only] Reserved for future use.
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} description [Output Only] A textual description of the operation, which is set when the operation is created.
 * @property {string} endTime [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
 * @property {object} error [Output Only] If errors are generated during processing of the operation, this field will be populated.
 * @property {string} httpErrorMessage [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND.
 * @property {integer} httpErrorStatusCode [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not found.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} insertTime [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
 * @property {string} kind [Output Only] Type of the resource. Always compute#operation for Operation resources.
 * @property {string} name [Output Only] Name of the resource.
 * @property {string} operationType [Output Only] The type of operation, such as insert, update, or delete, and so on.
 * @property {integer} progress [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
 * @property {string} region [Output Only] The URL of the region where the operation resides. Only available when performing regional operations.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {string} startTime [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
 * @property {string} status [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE.
 * @property {string} statusMessage [Output Only] An optional textual description of the current status of the operation.
 * @property {string} targetId [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
 * @property {string} targetLink [Output Only] The URL of the resource that the operation modifies.
 * @property {string} user [Output Only] User who requested the operation, for example: user@example.com.
 * @property {object[]} warnings [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
 * @property {string} zone [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations.
 */
/**
 * @typedef OperationAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {object} items [Output Only] A map of scoped operation lists.
 * @property {string} kind [Output Only] Type of resource. Always compute#operationAggregatedList for aggregated lists of operations.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef OperationList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).Operation[]} items [Output Only] A list of Operation resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#operations for Operations resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef OperationsScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).Operation[]} operations [Output Only] List of operations contained in this scope.
 * @property {object} warning [Output Only] Informational warning which replaces the list of operations when the list is empty.
 */
/**
 * @typedef PathMatcher
 * @memberOf! compute(v1)
 * @type object
* @property {string} defaultService The full or partial URL to the BackendService resource. This will be used if none of the pathRules defined by this PathMatcher is matched by the URL&#39;s path portion. For example, the following are all valid URLs to a BackendService resource:  
- https://www.googleapis.com/compute/v1/projects/project/global/backendServices/backendService 
- compute/v1/projects/project/global/backendServices/backendService 
- global/backendServices/backendService
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {string} name The name to which this PathMatcher is referred by the HostRule.
* @property {compute(v1).PathRule[]} pathRules The list of path rules.
*/
/**
 * @typedef PathRule
 * @memberOf! compute(v1)
 * @type object
 * @property {string[]} paths The list of path patterns to match. Each must start with / and the only place a * is allowed is at the end following a /. The string fed to the path matcher does not include any text after the first ? or #, and those chars are not allowed here.
 * @property {string} service The URL of the BackendService resource if this rule is matched.
 */
/**
 * @typedef Project
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).Metadata} commonInstanceMetadata Metadata key/value pairs available to all instances contained in this project. See Custom metadata for more information.
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} defaultServiceAccount [Output Only] Default service account used by VMs running in this project.
 * @property {string} description An optional textual description of the resource.
 * @property {string[]} enabledFeatures Restricted features enabled for use on this project.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server. This is not the project ID, and is just a unique ID used by Compute Engine to identify resources.
 * @property {string} kind [Output Only] Type of the resource. Always compute#project for projects.
 * @property {string} name The project ID. For example: my-example-project. Use the project ID to make requests to Compute Engine.
 * @property {compute(v1).Quota[]} quotas [Output Only] Quotas assigned to this project.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {compute(v1).UsageExportLocation} usageExportLocation The naming prefix for daily usage reports and the Google Cloud Storage bucket where they are stored.
 */
/**
 * @typedef Quota
 * @memberOf! compute(v1)
 * @type object
 * @property {number} limit [Output Only] Quota limit for this metric.
 * @property {string} metric [Output Only] Name of the quota metric.
 * @property {number} usage [Output Only] Current usage of this metric.
 */
/**
 * @typedef Region
 * @memberOf! compute(v1)
 * @type object
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {compute(v1).DeprecationStatus} deprecated [Output Only] The deprecation status associated with this region.
 * @property {string} description [Output Only] Textual description of the resource.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} kind [Output Only] Type of the resource. Always compute#region for regions.
 * @property {string} name [Output Only] Name of the resource.
 * @property {compute(v1).Quota[]} quotas [Output Only] Quotas assigned to this region.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {string} status [Output Only] Status of the region, either UP or DOWN.
 * @property {string[]} zones [Output Only] A list of zones available in this region, in the form of resource URLs.
 */
/**
 * @typedef RegionList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).Region[]} items [Output Only] A list of Region resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#regionList for lists of regions.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef ResourceGroupReference
 * @memberOf! compute(v1)
 * @type object
 * @property {string} group A URI referencing one of the resource views listed in the backend service.
 */
/**
 * @typedef Route
 * @memberOf! compute(v1)
 * @type object
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {string} destRange The destination range of outgoing packets that this route applies to.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {string} kind [Output Only] Type of this resource. Always compute#routes for Route resources.
* @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {string} network Fully-qualified URL of the network that this route applies to.
* @property {string} nextHopGateway The URL to a gateway that should handle matching packets. You can only specify the internet gateway using a full or partial valid URL:  projects/&lt;project-id&gt;/global/gateways/default-internet-gateway
* @property {string} nextHopInstance The URL to an instance that should handle matching packets. You can specify this as a full or partial URL. For example:
https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/
* @property {string} nextHopIp The network IP address of an instance that should handle matching packets.
* @property {string} nextHopNetwork The URL of the local network if it should handle matching packets.
* @property {string} nextHopVpnTunnel The URL to a VpnTunnel that should handle matching packets.
* @property {integer} priority The priority of this route. Priority is used to break ties in cases where there is more than one matching route of equal prefix length. In the case of two routes with equal prefix length, the one with the lowest-numbered priority value wins. Default value is 1000. Valid range is 0 through 65535.
* @property {string} selfLink [Output Only] Server-defined fully-qualified URL for this resource.
* @property {string[]} tags A list of instance tags to which this route applies.
* @property {object[]} warnings [Output Only] If potential misconfigurations are detected for this route, this field will be populated with warning messages.
*/
/**
 * @typedef RouteList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] Unique identifier for the resource. Defined by the server.
 * @property {compute(v1).Route[]} items [Output Only] A list of Route resources.
 * @property {string} kind Type of resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef Router
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).RouterBgp} bgp BGP information specific to this router.
 * @property {compute(v1).RouterBgpPeer[]} bgpPeers BGP information that needs to be configured into the routing stack to establish the BGP peering. It must specify peer ASN and either interface name, IP, or peer IP. Please refer to RFC4273.
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).RouterInterface[]} interfaces Router interfaces. Each interface requires either one linked resource (e.g. linkedVpnTunnel) or IP address and IP address range (e.g. ipRange).
 * @property {string} kind [Output Only] Type of resource. Always compute#router for routers.
 * @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 * @property {string} network URI of the network to which this router belongs.
 * @property {string} region [Output Only] URI of the region where the router resides.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 */
/**
 * @typedef RouterAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {object} items A map of scoped router lists.
 * @property {string} kind Type of resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef RouterBgp
 * @memberOf! compute(v1)
 * @type object
 * @property {integer} asn Local BGP Autonomous System Number (ASN). Must be an RFC6996 private ASN, either 16-bit or 32-bit. The value will be fixed for this router resource. All VPN tunnels that link to this router will have the same local ASN.
 */
/**
 * @typedef RouterBgpPeer
 * @memberOf! compute(v1)
 * @type object
 * @property {integer} advertisedRoutePriority The priority of routes advertised to this BGP peer. In the case where there is more than one matching route of maximum length, the routes with lowest priority value win.
 * @property {string} interfaceName Name of the interface the BGP peer is associated with.
 * @property {string} ipAddress IP address of the interface inside Google Cloud Platform.
 * @property {string} name Name of this BGP peer. The name must be 1-63 characters long and comply with RFC1035.
 * @property {integer} peerAsn Peer BGP Autonomous System Number (ASN). For VPN use case, this value can be different for every tunnel.
 * @property {string} peerIpAddress IP address of the BGP interface outside Google cloud.
 */
/**
 * @typedef RouterInterface
 * @memberOf! compute(v1)
 * @type object
 * @property {string} ipRange IP address and range of the interface. The IP range must be in the RFC3927 link-local IP space. The value must be a CIDR-formatted string, for example: 169.254.0.1/30. NOTE: Do not truncate the address as it represents the IP address of the interface.
 * @property {string} linkedVpnTunnel URI of linked VPN tunnel. It must be in the same region as the router. Each interface can have at most one linked resource.
 * @property {string} name Name of this interface entry. The name must be 1-63 characters long and comply with RFC1035.
 */
/**
 * @typedef RouterList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).Router[]} items A list of Router resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#router for routers.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 */
/**
 * @typedef RouterStatus
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).Route[]} bestRoutes Best routes for this router&#39;s network.
 * @property {compute(v1).RouterStatusBgpPeerStatus[]} bgpPeerStatus 
 * @property {string} network URI of the network to which this router belongs.
 */
/**
 * @typedef RouterStatusBgpPeerStatus
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).Route[]} advertisedRoutes Routes that were advertised to the remote BGP peer
 * @property {string} ipAddress IP address of the local BGP interface.
 * @property {string} linkedVpnTunnel URL of the VPN tunnel that this BGP peer controls.
 * @property {string} name Name of this BGP peer. Unique within the Routers resource.
 * @property {integer} numLearnedRoutes Number of routes learned from the remote BGP Peer.
 * @property {string} peerIpAddress IP address of the remote BGP interface.
 * @property {string} state BGP state as specified in RFC1771.
 * @property {string} status Status of the BGP peer: {UP, DOWN}
 * @property {string} uptime Time this session has been up. Format: 14 years, 51 weeks, 6 days, 23 hours, 59 minutes, 59 seconds
 * @property {string} uptimeSeconds Time this session has been up, in seconds. Format: 145
 */
/**
 * @typedef RouterStatusResponse
 * @memberOf! compute(v1)
 * @type object
 * @property {string} kind Type of resource.
 * @property {compute(v1).RouterStatus} result 
 */
/**
 * @typedef RoutersPreviewResponse
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).Router} resource Preview of given router.
 */
/**
 * @typedef RoutersScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).Router[]} routers List of routers contained in this scope.
 * @property {object} warning Informational warning which replaces the list of routers when the list is empty.
 */
/**
 * @typedef Scheduling
 * @memberOf! compute(v1)
 * @type object
 * @property {boolean} automaticRestart Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). You can only set the automatic restart option for standard instances. Preemptible instances cannot be automatically restarted.
 * @property {string} onHostMaintenance Defines the maintenance behavior for this instance. For standard instances, the default behavior is MIGRATE. For preemptible instances, the default and only possible behavior is TERMINATE. For more information, see Setting Instance Scheduling Options.
 * @property {boolean} preemptible Whether the instance is preemptible.
 */
/**
 * @typedef SerialPortOutput
 * @memberOf! compute(v1)
 * @type object
 * @property {string} contents [Output Only] The contents of the console output.
 * @property {string} kind [Output Only] Type of the resource. Always compute#serialPortOutput for serial port output.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 */
/**
 * @typedef ServiceAccount
 * @memberOf! compute(v1)
 * @type object
 * @property {string} email Email address of the service account.
 * @property {string[]} scopes The list of scopes to be made available for this service account.
 */
/**
 * @typedef Snapshot
 * @memberOf! compute(v1)
 * @type object
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {string} diskSizeGb [Output Only] Size of the snapshot, specified in GB.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {string} kind [Output Only] Type of the resource. Always compute#snapshot for Snapshot resources.
* @property {string[]} licenses [Output Only] A list of public visible licenses that apply to this snapshot. This can be because the original image had licenses attached (such as a Windows image).
* @property {string} name Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {string} selfLink [Output Only] Server-defined URL for the resource.
* @property {compute(v1).CustomerEncryptionKey} snapshotEncryptionKey Encrypts the snapshot using a customer-supplied encryption key.

After you encrypt a snapshot using a customer-supplied key, you must provide the same key if you use the image later For example, you must provide the encryption key when you create a disk from the encrypted snapshot in a future request.

Customer-supplied encryption keys do not protect access to metadata of the disk.

If you do not provide an encryption key when creating the snapshot, then the snapshot will be encrypted using an automatically generated key and you do not need to provide a key to use the snapshot later.
* @property {string} sourceDisk [Output Only] The source disk used to create this snapshot.
* @property {compute(v1).CustomerEncryptionKey} sourceDiskEncryptionKey The customer-supplied encryption key of the source disk. Required if the source disk is protected by a customer-supplied encryption key.
* @property {string} sourceDiskId [Output Only] The ID value of the disk used to create this snapshot. This value may be used to determine whether the snapshot was taken from the current or a previous instance of a given disk name.
* @property {string} status [Output Only] The status of the snapshot. This can be CREATING, DELETING, FAILED, READY, or UPLOADING.
* @property {string} storageBytes [Output Only] A size of the the storage used by the snapshot. As snapshots share storage, this number is expected to change with snapshot creation/deletion.
* @property {string} storageBytesStatus [Output Only] An indicator whether storageBytes is in a stable state or it is being adjusted as a result of shared storage reallocation. This status can either be UPDATING, meaning the size of the snapshot is being updated, or UP_TO_DATE, meaning the size of the snapshot is up-to-date.
*/
/**
 * @typedef SnapshotList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).Snapshot[]} items [Output Only] A list of Snapshot resources.
 * @property {string} kind Type of resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef SslCertificate
 * @memberOf! compute(v1)
 * @type object
 * @property {string} certificate A local certificate file. The certificate must be in PEM format. The certificate chain must be no greater than 5 certs long. The chain must include at least one intermediate cert.
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} kind [Output Only] Type of the resource. Always compute#sslCertificate for SSL certificates.
 * @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 * @property {string} privateKey A write-only private key in PEM format. Only insert RPCs will include this field.
 * @property {string} selfLink [Output only] Server-defined URL for the resource.
 */
/**
 * @typedef SslCertificateList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] Unique identifier for the resource. Defined by the server.
 * @property {compute(v1).SslCertificate[]} items A list of SslCertificate resources.
 * @property {string} kind Type of resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef Subnetwork
 * @memberOf! compute(v1)
 * @type object
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {string} gatewayAddress [Output Only] The gateway address for default routes to reach destination addresses outside this subnetwork.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} ipCidrRange The range of internal addresses that are owned by this subnetwork. Provide this property when you create the subnetwork. For example, 10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and non-overlapping within a network.
 * @property {string} kind [Output Only] Type of the resource. Always compute#subnetwork for Subnetwork resources.
 * @property {string} name The name of the resource, provided by the client when initially creating the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 * @property {string} network The URL of the network to which this subnetwork belongs, provided by the client when initially creating the subnetwork. Only networks that are in the distributed mode can have subnetworks.
 * @property {string} region URL of the region where the Subnetwork resides.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 */
/**
 * @typedef SubnetworkAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {object} items [Output] A map of scoped Subnetwork lists.
 * @property {string} kind [Output Only] Type of resource. Always compute#subnetworkAggregatedList for aggregated lists of subnetworks.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef SubnetworkList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).Subnetwork[]} items The Subnetwork resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#subnetworkList for lists of subnetworks.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef SubnetworksScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).Subnetwork[]} subnetworks List of subnetworks contained in this scope.
 * @property {object} warning An informational warning that appears when the list of addresses is empty.
 */
/**
 * @typedef Tags
 * @memberOf! compute(v1)
 * @type object
* @property {string} fingerprint Specifies a fingerprint for this request, which is essentially a hash of the metadata&#39;s contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change metadata.

To see the latest fingerprint, make get() request to the instance.
* @property {string[]} items An array of tags. Each tag must be 1-63 characters long, and comply with RFC1035.
*/
/**
 * @typedef TargetHttpProxy
 * @memberOf! compute(v1)
 * @type object
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} kind [Output Only] Type of resource. Always compute#targetHttpProxy for target HTTP proxies.
 * @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {string} urlMap URL to the UrlMap resource that defines the mapping from URL to the BackendService.
 */
/**
 * @typedef TargetHttpProxyList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).TargetHttpProxy[]} items A list of TargetHttpProxy resources.
 * @property {string} kind Type of resource. Always compute#targetHttpProxyList for lists of target HTTP proxies.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef TargetHttpsProxiesSetSslCertificatesRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {string[]} sslCertificates New set of SslCertificate resources to associate with this TargetHttpsProxy resource. Currently exactly one SslCertificate resource must be specified.
 */
/**
 * @typedef TargetHttpsProxy
 * @memberOf! compute(v1)
 * @type object
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {string} kind [Output Only] Type of resource. Always compute#targetHttpsProxy for target HTTPS proxies.
* @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {string} selfLink [Output Only] Server-defined URL for the resource.
* @property {string[]} sslCertificates URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. Currently, exactly one SSL certificate must be specified.
* @property {string} urlMap A fully-qualified or valid partial URL to the UrlMap resource that defines the mapping from URL to the BackendService. For example, the following are all valid URLs for specifying a URL map:  
- https://www.googleapis.compute/v1/projects/project/global/urlMaps/url-map 
- projects/project/global/urlMaps/url-map 
- global/urlMaps/url-map
*/
/**
 * @typedef TargetHttpsProxyList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).TargetHttpsProxy[]} items A list of TargetHttpsProxy resources.
 * @property {string} kind Type of resource. Always compute#targetHttpsProxyList for lists of target HTTPS proxies.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef TargetInstance
 * @memberOf! compute(v1)
 * @type object
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {string} instance A URL to the virtual machine instance that handles traffic for this target instance. When creating a target instance, you can provide the fully-qualified URL or a valid partial URL to the desired virtual machine. For example, the following are all valid URLs: 
- https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance 
- projects/project/zones/zone/instances/instance 
- zones/zone/instances/instance
* @property {string} kind [Output Only] The type of the resource. Always compute#targetInstance for target instances.
* @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {string} natPolicy NAT option controlling how IPs are NAT&#39;ed to the instance. Currently only NO_NAT (default value) is supported.
* @property {string} selfLink [Output Only] Server-defined URL for the resource.
* @property {string} zone [Output Only] URL of the zone where the target instance resides.
*/
/**
 * @typedef TargetInstanceAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] Unique identifier for the resource; defined by the server.
 * @property {object} items A map of scoped target instance lists.
 * @property {string} kind Type of resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef TargetInstanceList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).TargetInstance[]} items A list of TargetInstance resources.
 * @property {string} kind Type of resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef TargetInstancesScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).TargetInstance[]} targetInstances List of target instances contained in this scope.
 * @property {object} warning Informational warning which replaces the list of addresses when the list is empty.
 */
/**
 * @typedef TargetPool
 * @memberOf! compute(v1)
 * @type object
* @property {string} backupPool This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool, and its failoverRatio field is properly set to a value between [0, 1].

backupPool and failoverRatio together define the fallback behavior of the primary target pool: if the ratio of the healthy instances in the primary pool is at or below failoverRatio, traffic arriving at the load-balanced IP will be directed to the backup pool.

In case where failoverRatio and backupPool are not set, or all the instances in the backup pool are unhealthy, the traffic will be directed back to the primary pool in the &quot;force&quot; mode, where traffic will be spread to the healthy instances with the best effort, or to all instances when no instance is healthy.
* @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
* @property {string} description An optional description of this resource. Provide this property when you create the resource.
* @property {number} failoverRatio This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool (i.e., not as a backup pool to some other target pool). The value of the field must be in [0, 1].

If set, backupPool must also be set. They together define the fallback behavior of the primary target pool: if the ratio of the healthy instances in the primary pool is at or below this number, traffic arriving at the load-balanced IP will be directed to the backup pool.

In case where failoverRatio is not set or all the instances in the backup pool are unhealthy, the traffic will be directed back to the primary pool in the &quot;force&quot; mode, where traffic will be spread to the healthy instances with the best effort, or to all instances when no instance is healthy.
* @property {string[]} healthChecks A list of URLs to the HttpHealthCheck resource. A member instance in this pool is considered healthy if and only if all specified health checks pass. An empty list means all member instances will be considered healthy at all times.
* @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
* @property {string[]} instances A list of resource URLs to the virtual machine instances serving this pool. They must live in zones contained in the same region as this pool.
* @property {string} kind [Output Only] Type of the resource. Always compute#targetPool for target pools.
* @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {string} region [Output Only] URL of the region where the target pool resides.
* @property {string} selfLink [Output Only] Server-defined URL for the resource.
* @property {string} sessionAffinity Sesssion affinity option, must be one of the following values:
NONE: Connections from the same client IP may go to any instance in the pool.
CLIENT_IP: Connections from the same client IP will go to the same instance in the pool while that instance remains healthy.
CLIENT_IP_PROTO: Connections from the same client IP with the same IP protocol will go to the same instance in the pool while that instance remains healthy.
*/
/**
 * @typedef TargetPoolAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] Unique identifier for the resource. Defined by the server.
 * @property {object} items [Output Only] A map of scoped target pool lists.
 * @property {string} kind [Output Only] Type of resource. Always compute#targetPoolAggregatedList for aggregated lists of target pools.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef TargetPoolInstanceHealth
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).HealthStatus[]} healthStatus 
 * @property {string} kind [Output Only] Type of resource. Always compute#targetPoolInstanceHealth when checking the health of an instance.
 */
/**
 * @typedef TargetPoolList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] Unique identifier for the resource. Defined by the server.
 * @property {compute(v1).TargetPool[]} items A list of TargetPool resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#targetPoolList for lists of target pools.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef TargetPoolsAddHealthCheckRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).HealthCheckReference[]} healthChecks A list of HttpHealthCheck resources to add to the target pool.
 */
/**
 * @typedef TargetPoolsAddInstanceRequest
 * @memberOf! compute(v1)
 * @type object
* @property {compute(v1).InstanceReference[]} instances A full or partial URL to an instance to add to this target pool. This can be a full or partial URL. For example, the following are valid URLs:  
- https://www.googleapis.com/compute/v1/projects/project-id/zones/zone/instances/instance-name 
- projects/project-id/zones/zone/instances/instance-name 
- zones/zone/instances/instance-name
*/
/**
 * @typedef TargetPoolsRemoveHealthCheckRequest
 * @memberOf! compute(v1)
 * @type object
* @property {compute(v1).HealthCheckReference[]} healthChecks Health check URL to be removed. This can be a full or valid partial URL. For example, the following are valid URLs:  
- https://www.googleapis.com/compute/beta/projects/project/global/httpHealthChecks/health-check 
- projects/project/global/httpHealthChecks/health-check 
- global/httpHealthChecks/health-check
*/
/**
 * @typedef TargetPoolsRemoveInstanceRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).InstanceReference[]} instances URLs of the instances to be removed from target pool.
 */
/**
 * @typedef TargetPoolsScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).TargetPool[]} targetPools List of target pools contained in this scope.
 * @property {object} warning Informational warning which replaces the list of addresses when the list is empty.
 */
/**
 * @typedef TargetReference
 * @memberOf! compute(v1)
 * @type object
 * @property {string} target 
 */
/**
 * @typedef TargetVpnGateway
 * @memberOf! compute(v1)
 * @type object
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {string[]} forwardingRules [Output Only] A list of URLs to the ForwardingRule resources. ForwardingRules are created using compute.forwardingRules.insert and associated to a VPN gateway.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} kind [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
 * @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 * @property {string} network URL of the network to which this VPN gateway is attached. Provided by the client when the VPN gateway is created.
 * @property {string} region [Output Only] URL of the region where the target VPN gateway resides.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {string} status [Output Only] The status of the VPN gateway.
 * @property {string[]} tunnels [Output Only] A list of URLs to VpnTunnel resources. VpnTunnels are created using compute.vpntunnels.insert method and associated to a VPN gateway.
 */
/**
 * @typedef TargetVpnGatewayAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {object} items A map of scoped target vpn gateway lists.
 * @property {string} kind [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 */
/**
 * @typedef TargetVpnGatewayList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).TargetVpnGateway[]} items [Output Only] A list of TargetVpnGateway resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 */
/**
 * @typedef TargetVpnGatewaysScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).TargetVpnGateway[]} targetVpnGateways [Output Only] List of target vpn gateways contained in this scope.
 * @property {object} warning [Output Only] Informational warning which replaces the list of addresses when the list is empty.
 */
/**
 * @typedef TestFailure
 * @memberOf! compute(v1)
 * @type object
 * @property {string} actualService 
 * @property {string} expectedService 
 * @property {string} host 
 * @property {string} path 
 */
/**
 * @typedef UrlMap
 * @memberOf! compute(v1)
 * @type object
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} defaultService The URL of the BackendService resource if none of the hostRules match.
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {string} fingerprint Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a UrlMap. An up-to-date fingerprint must be provided in order to update the UrlMap.
 * @property {compute(v1).HostRule[]} hostRules The list of HostRules to use against the URL.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} kind [Output Only] Type of the resource. Always compute#urlMaps for url maps.
 * @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 * @property {compute(v1).PathMatcher[]} pathMatchers The list of named PathMatchers to use against the URL.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {compute(v1).UrlMapTest[]} tests The list of expected URL mappings. Request to update this UrlMap will succeed only if all of the test cases pass.
 */
/**
 * @typedef UrlMapList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] Unique identifier for the resource. Set by the server.
 * @property {compute(v1).UrlMap[]} items A list of UrlMap resources.
 * @property {string} kind Type of resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef UrlMapReference
 * @memberOf! compute(v1)
 * @type object
 * @property {string} urlMap 
 */
/**
 * @typedef UrlMapTest
 * @memberOf! compute(v1)
 * @type object
 * @property {string} description Description of this test case.
 * @property {string} host Host portion of the URL.
 * @property {string} path Path portion of the URL.
 * @property {string} service Expected BackendService resource the given URL should be mapped to.
 */
/**
 * @typedef UrlMapValidationResult
 * @memberOf! compute(v1)
 * @type object
 * @property {string[]} loadErrors 
 * @property {boolean} loadSucceeded Whether the given UrlMap can be successfully loaded. If false, &#39;loadErrors&#39; indicates the reasons.
 * @property {compute(v1).TestFailure[]} testFailures 
 * @property {boolean} testPassed If successfully loaded, this field indicates whether the test passed. If false, &#39;testFailures&#39;s indicate the reason of failure.
 */
/**
 * @typedef UrlMapsValidateRequest
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).UrlMap} resource Content of the UrlMap to be validated.
 */
/**
 * @typedef UrlMapsValidateResponse
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).UrlMapValidationResult} result 
 */
/**
 * @typedef UsageExportLocation
 * @memberOf! compute(v1)
 * @type object
 * @property {string} bucketName The name of an existing bucket in Cloud Storage where the usage report object is stored. The Google Service Account is granted write access to this bucket. This can either be the bucket name by itself, such as example-bucket, or the bucket name with gs:// or https://storage.googleapis.com/ in front of it, such as gs://example-bucket.
 * @property {string} reportNamePrefix An optional prefix for the name of the usage report object stored in bucketName. If not supplied, defaults to usage. The report is stored as a CSV file named report_name_prefix_gce_YYYYMMDD.csv where YYYYMMDD is the day of the usage according to Pacific Time. If you supply a prefix, it should conform to Cloud Storage object naming conventions.
 */
/**
 * @typedef VpnTunnel
 * @memberOf! compute(v1)
 * @type object
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {string} description An optional description of this resource. Provide this property when you create the resource.
 * @property {string} detailedStatus [Output Only] Detailed status message for the VPN tunnel.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {integer} ikeVersion IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. Acceptable IKE versions are 1 or 2. Default version is 2.
 * @property {string} kind [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
 * @property {string[]} localTrafficSelector Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. The value should be a CIDR formatted string, for example: 192.168.0.0/16. The ranges should be disjoint.
 * @property {string} name Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 * @property {string} peerIp IP address of the peer VPN gateway.
 * @property {string} region [Output Only] URL of the region where the VPN tunnel resides.
 * @property {string[]} remoteTrafficSelector Remote traffic selectors to use when establishing the VPN tunnel with peer VPN gateway. The value should be a CIDR formatted string, for example: 192.168.0.0/16. The ranges should be disjoint.
 * @property {string} router URL of router resource to be used for dynamic routing.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {string} sharedSecret Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.
 * @property {string} sharedSecretHash Hash of the shared secret.
 * @property {string} status [Output Only] The status of the VPN tunnel.
 * @property {string} targetVpnGateway URL of the VPN gateway with which this VPN tunnel is associated. Provided by the client when the VPN tunnel is created.
 */
/**
 * @typedef VpnTunnelAggregatedList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {object} items [Output Only] A map of scoped vpn tunnel lists.
 * @property {string} kind [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
/**
 * @typedef VpnTunnelList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {compute(v1).VpnTunnel[]} items [Output Only] A list of VpnTunnel resources.
 * @property {string} kind [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 */
/**
 * @typedef VpnTunnelsScopedList
 * @memberOf! compute(v1)
 * @type object
 * @property {compute(v1).VpnTunnel[]} vpnTunnels List of vpn tunnels contained in this scope.
 * @property {object} warning Informational warning which replaces the list of addresses when the list is empty.
 */
/**
 * @typedef Zone
 * @memberOf! compute(v1)
 * @type object
 * @property {string} creationTimestamp [Output Only] Creation timestamp in RFC3339 text format.
 * @property {compute(v1).DeprecationStatus} deprecated [Output Only] The deprecation status associated with this zone.
 * @property {string} description [Output Only] Textual description of the resource.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} kind [Output Only] Type of the resource. Always compute#zone for zones.
 * @property {string} name [Output Only] Name of the resource.
 * @property {string} region [Output Only] Full URL reference to the region which hosts the zone.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {string} status [Output Only] Status of the zone, either UP or DOWN.
 */
/**
 * @typedef ZoneList
 * @memberOf! compute(v1)
 * @type object
 * @property {string} id [Output Only] Unique identifier for the resource; defined by the server.
 * @property {compute(v1).Zone[]} items [Output Only] A list of Zone resources.
 * @property {string} kind Type of resource.
 * @property {string} nextPageToken [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
 * @property {string} selfLink [Output Only] Server-defined URL for this resource.
 */
module.exports = Compute;
