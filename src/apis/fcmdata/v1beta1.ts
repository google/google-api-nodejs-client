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

export namespace fcmdata_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Firebase Cloud Messaging Data API
   *
   * Provides additional information about Firebase Cloud Messaging (FCM) message sends and deliveries.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const fcmdata = google.fcmdata('v1beta1');
   * ```
   */
  export class Fcmdata {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Message delivery data for a given date, app, and analytics label combination.
   */
  export interface Schema$GoogleFirebaseFcmDataV1beta1AndroidDeliveryData {
    /**
     * The analytics label associated with the messages sent. All messages sent without an analytics label will be grouped together in a single entry.
     */
    analyticsLabel?: string | null;
    /**
     * The app ID to which the messages were sent.
     */
    appId?: string | null;
    /**
     * The data for the specified appId, date, and analyticsLabel.
     */
    data?: Schema$GoogleFirebaseFcmDataV1beta1Data;
    /**
     * The date represented by this entry.
     */
    date?: Schema$GoogleTypeDate;
  }
  /**
   * Data detailing messaging delivery
   */
  export interface Schema$GoogleFirebaseFcmDataV1beta1Data {
    /**
     * Count of messages accepted by FCM intended to Android devices. The targeted device must have opted in to the collection of usage and diagnostic information.
     */
    countMessagesAccepted?: string | null;
    /**
     * Additional information about delivery performance for messages that were successfully delivered.
     */
    deliveryPerformancePercents?: Schema$GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents;
    /**
     * Additional general insights about message delivery.
     */
    messageInsightPercents?: Schema$GoogleFirebaseFcmDataV1beta1MessageInsightPercents;
    /**
     * Mutually exclusive breakdown of message delivery outcomes.
     */
    messageOutcomePercents?: Schema$GoogleFirebaseFcmDataV1beta1MessageOutcomePercents;
  }
  /**
   * Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons.
   */
  export interface Schema$GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents {
    /**
     * The percentage of accepted messages that were delayed because the device was in doze mode. Only [normal priority messages](https://firebase.google.com/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message) should be delayed due to doze mode.
     */
    delayedDeviceDoze?: number | null;
    /**
     * The percentage of accepted messages that were delayed because the target device was not connected at the time of sending. These messages were eventually delivered when the device reconnected.
     */
    delayedDeviceOffline?: number | null;
    /**
     * The percentage of accepted messages that were delayed due to message throttling, such as [collapsible message throttling](https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_throttling) or [maximum message rate throttling](https://firebase.google.com/docs/cloud-messaging/concept-options#device_throttling).
     */
    delayedMessageThrottled?: number | null;
    /**
     * The percentage of accepted messages that were delayed because the intended device user-profile was [stopped](https://firebase.google.com/docs/cloud-messaging/android/receive#handling_messages) on the target device at the time of the send. The messages were eventually delivered when the user-profile was started again.
     */
    delayedUserStopped?: number | null;
    /**
     * The percentage of accepted messages that were delivered to the device without delay from the FCM system.
     */
    deliveredNoDelay?: number | null;
  }
  /**
   * Response message for ListAndroidDeliveryData.
   */
  export interface Schema$GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse {
    /**
     * The delivery data for the provided app. There will be one entry per combination of app, date, and analytics label.
     */
    androidDeliveryData?: Schema$GoogleFirebaseFcmDataV1beta1AndroidDeliveryData[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator.
   */
  export interface Schema$GoogleFirebaseFcmDataV1beta1MessageInsightPercents {
    /**
     * The percentage of accepted messages that had their priority lowered from high to normal due to [app standby buckets](https://firebase.google.com/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message).
     */
    priorityLowered?: number | null;
  }
  /**
   * Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes.
   */
  export interface Schema$GoogleFirebaseFcmDataV1beta1MessageOutcomePercents {
    /**
     * The percentage of all accepted messages that were successfully delivered to the device.
     */
    delivered?: number | null;
    /**
     * The percentage of accepted messages that were dropped because the application was force stopped on the device at the time of delivery and retries were unsuccessful.
     */
    droppedAppForceStopped?: number | null;
    /**
     * The percentage of accepted messages that were dropped because the target device is inactive. FCM will drop messages if the target device is deemed inactive by our servers. If a device does reconnect, we call [OnDeletedMessages()](https://firebase.google.com/docs/cloud-messaging/android/receive#override-ondeletedmessages) in our SDK instead of delivering the messages.
     */
    droppedDeviceInactive?: number | null;
    /**
     * The percentage of accepted messages that were dropped due to [too many undelivered non-collapsible messages](https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_and_non-collapsible_messages). Specifically, each app instance can only have 100 pending messages stored on our servers for a device which is disconnected. When that device reconnects, those messages are delivered. When there are more than the maximum pending messages, we call [OnDeletedMessages()](https://firebase.google.com/docs/cloud-messaging/android/receive#override-ondeletedmessages) in our SDK instead of delivering the messages.
     */
    droppedTooManyPendingMessages?: number | null;
    /**
     * The percentage of messages accepted on this day that were not dropped and not delivered, due to the device being disconnected (as of the end of the America/Los_Angeles day when the message was sent to FCM). A portion of these messages will be delivered the next day when the device connects but others may be destined to devices that ultimately never reconnect.
     */
    pending?: number | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
   */
  export interface Schema$GoogleTypeDate {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    androidApps: Resource$Projects$Androidapps;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.androidApps = new Resource$Projects$Androidapps(this.context);
    }
  }

  export class Resource$Projects$Androidapps {
    context: APIRequestContext;
    deliveryData: Resource$Projects$Androidapps$Deliverydata;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.deliveryData = new Resource$Projects$Androidapps$Deliverydata(
        this.context
      );
    }
  }

  export class Resource$Projects$Androidapps$Deliverydata {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List aggregate delivery data for the given Android application.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fcmdata.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const fcmdata = google.fcmdata('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fcmdata.projects.androidApps.deliveryData.list({
     *     // The maximum number of entries to return. The service may return fewer than this value. If unspecified, at most 1,000 entries will be returned. The maximum value is 10,000; values above 10,000 will be capped to 10,000. This default may change over time.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAndroidDeliveryDataRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAndroidDeliveryDataRequest` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The application for which to list delivery data. Format: `projects/{project_id\}/androidApps/{app_id\}`
     *     parent: 'projects/my-project/androidApps/my-androidApp',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidDeliveryData": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Projects$Androidapps$Deliverydata$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Androidapps$Deliverydata$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse>;
    list(
      params: Params$Resource$Projects$Androidapps$Deliverydata$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Androidapps$Deliverydata$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Androidapps$Deliverydata$List,
      callback: BodyResponseCallback<Schema$GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Androidapps$Deliverydata$List
        | BodyResponseCallback<Schema$GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Androidapps$Deliverydata$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Androidapps$Deliverydata$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fcmdata.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/deliveryData').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Androidapps$Deliverydata$List
    extends StandardParameters {
    /**
     * The maximum number of entries to return. The service may return fewer than this value. If unspecified, at most 1,000 entries will be returned. The maximum value is 10,000; values above 10,000 will be capped to 10,000. This default may change over time.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAndroidDeliveryDataRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAndroidDeliveryDataRequest` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The application for which to list delivery data. Format: `projects/{project_id\}/androidApps/{app_id\}`
     */
    parent?: string;
  }
}
