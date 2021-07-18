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

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace mybusinessnotifications_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * My Business Notifications API
   *
   * The My Business Notification Settings API enables managing notification settings for business accounts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const mybusinessnotifications = google.mybusinessnotifications('v1');
   * ```
   */
  export class Mybusinessnotifications {
    context: APIRequestContext;
    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
    }
  }

  /**
   * A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account.
   */
  export interface Schema$NotificationSetting {
    /**
     * Required. The resource name this setting is for. This is of the form `accounts/{account_id\}/notifications/setting`.
     */
    name?: string | null;
    /**
     * The types of notifications that will be sent to the Pub/Sub topic. To stop receiving notifications entirely, use NotificationSettings.UpdateNotificationSetting with an empty notification_types or set the pubsub_topic to an empty string.
     */
    notificationTypes?: string[] | null;
    /**
     * Optional. The Google Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Pub/Sub topic.
     */
    pubsubTopic?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the pubsub notification settings for the account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessnotifications.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessnotifications = google.mybusinessnotifications('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessnotifications.accounts.getNotificationSetting({
     *     // Required. The resource name of the notification setting we are trying to fetch.
     *     name: 'accounts/my-account/notificationSetting',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "notificationTypes": [],
     *   //   "pubsubTopic": "my_pubsubTopic"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getNotificationSetting(
      params: Params$Resource$Accounts$Getnotificationsetting,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getNotificationSetting(
      params?: Params$Resource$Accounts$Getnotificationsetting,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NotificationSetting>;
    getNotificationSetting(
      params: Params$Resource$Accounts$Getnotificationsetting,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getNotificationSetting(
      params: Params$Resource$Accounts$Getnotificationsetting,
      options: MethodOptions | BodyResponseCallback<Schema$NotificationSetting>,
      callback: BodyResponseCallback<Schema$NotificationSetting>
    ): void;
    getNotificationSetting(
      params: Params$Resource$Accounts$Getnotificationsetting,
      callback: BodyResponseCallback<Schema$NotificationSetting>
    ): void;
    getNotificationSetting(
      callback: BodyResponseCallback<Schema$NotificationSetting>
    ): void;
    getNotificationSetting(
      paramsOrCallback?:
        | Params$Resource$Accounts$Getnotificationsetting
        | BodyResponseCallback<Schema$NotificationSetting>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NotificationSetting>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NotificationSetting>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$NotificationSetting>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Getnotificationsetting;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Getnotificationsetting;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessnotifications.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$NotificationSetting>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NotificationSetting>(parameters);
      }
    }

    /**
     * Sets the pubsub notification setting for the account informing Google which topic to send pubsub notifications for. Use the notification_types field within notification_setting to manipulate the events an account wants to subscribe to. An account will only have one notification setting resource, and only one pubsub topic can be set. To delete the setting, update with an empty notification_types
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessnotifications.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const mybusinessnotifications = google.mybusinessnotifications('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await mybusinessnotifications.accounts.updateNotificationSetting({
     *     // Required. The resource name this setting is for. This is of the form `accounts/{account_id\}/notifications/setting`.
     *     name: 'accounts/my-account/notificationSetting',
     *     // Required. The specific fields that should be updated. The only editable field is notification_setting.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "notificationTypes": [],
     *       //   "pubsubTopic": "my_pubsubTopic"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "notificationTypes": [],
     *   //   "pubsubTopic": "my_pubsubTopic"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateNotificationSetting(
      params: Params$Resource$Accounts$Updatenotificationsetting,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateNotificationSetting(
      params?: Params$Resource$Accounts$Updatenotificationsetting,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NotificationSetting>;
    updateNotificationSetting(
      params: Params$Resource$Accounts$Updatenotificationsetting,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateNotificationSetting(
      params: Params$Resource$Accounts$Updatenotificationsetting,
      options: MethodOptions | BodyResponseCallback<Schema$NotificationSetting>,
      callback: BodyResponseCallback<Schema$NotificationSetting>
    ): void;
    updateNotificationSetting(
      params: Params$Resource$Accounts$Updatenotificationsetting,
      callback: BodyResponseCallback<Schema$NotificationSetting>
    ): void;
    updateNotificationSetting(
      callback: BodyResponseCallback<Schema$NotificationSetting>
    ): void;
    updateNotificationSetting(
      paramsOrCallback?:
        | Params$Resource$Accounts$Updatenotificationsetting
        | BodyResponseCallback<Schema$NotificationSetting>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NotificationSetting>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NotificationSetting>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$NotificationSetting>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Updatenotificationsetting;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Updatenotificationsetting;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessnotifications.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$NotificationSetting>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NotificationSetting>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Getnotificationsetting
    extends StandardParameters {
    /**
     * Required. The resource name of the notification setting we are trying to fetch.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Updatenotificationsetting
    extends StandardParameters {
    /**
     * Required. The resource name this setting is for. This is of the form `accounts/{account_id\}/notifications/setting`.
     */
    name?: string;
    /**
     * Required. The specific fields that should be updated. The only editable field is notification_setting.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NotificationSetting;
  }
}
