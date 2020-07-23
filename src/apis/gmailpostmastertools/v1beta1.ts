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

export namespace gmailpostmastertools_v1beta1 {
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
   * Gmail Postmaster Tools API
   *
   * The Gmail Postmaster API is a RESTful API that provides programmatic access to email traffic metrics (like spam reports, delivery errors etc) otherwise available through the Gmail Postmaster Tools UI currently.
   *
   * @example
   * const {google} = require('googleapis');
   * const gmailpostmastertools = google.gmailpostmastertools('v1beta1');
   *
   * @namespace gmailpostmastertools
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Gmailpostmastertools
   */
  export class Gmailpostmastertools {
    context: APIRequestContext;
    domains: Resource$Domains;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.domains = new Resource$Domains(this.context);
    }
  }

  /**
   * Metric on a particular delivery error type.
   */
  export interface Schema$DeliveryError {
    /**
     * The class of delivery error.
     */
    errorClass?: string | null;
    /**
     * The ratio of messages where the error occurred vs all authenticated traffic.
     */
    errorRatio?: number | null;
    /**
     * The type of delivery error.
     */
    errorType?: string | null;
  }
  /**
   * A registered domain resource in the Postmaster API.
   */
  export interface Schema$Domain {
    /**
     * Timestamp when the user registered this domain. Assigned by the server.
     */
    createTime?: string | null;
    /**
     * The resource name of the Domain. Domain names have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name (i.e.,  mymail.mydomain.com).
     */
    name?: string | null;
    /**
     * User’s permission for this domain. Assigned by the server.
     */
    permission?: string | null;
  }
  /**
   * [Feedback loop](https://support.google.com/mail/answer/6254652) identifier information.
   */
  export interface Schema$FeedbackLoop {
    /**
     * Feedback loop identifier that uniquely identifies individual campaigns.
     */
    id?: string | null;
    /**
     * The ratio of user marked spam messages with the identifier vs the total number of inboxed messages with that identifier.
     */
    spamRatio?: number | null;
  }
  /**
   * IP Reputation information for a set of IPs in a specific reputation category.
   */
  export interface Schema$IpReputation {
    /**
     * Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).
     */
    numIps?: string | null;
    /**
     * The reputation category this IP reputation represents.
     */
    reputation?: string | null;
    /**
     * A sample of IPs in this reputation category.
     */
    sampleIps?: string[] | null;
  }
  /**
   * Response message for ListDomains.
   */
  export interface Schema$ListDomainsResponse {
    /**
     * The list of domains.
     */
    domains?: Schema$Domain[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListTrafficStats.
   */
  export interface Schema$ListTrafficStatsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The list of TrafficStats.
     */
    trafficStats?: Schema$TrafficStats[];
  }
  /**
   * Email traffic statistics pertaining to a specific date.
   */
  export interface Schema$TrafficStats {
    /**
     * Delivery errors for the domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).
     */
    deliveryErrors?: Schema$DeliveryError[];
    /**
     * The ratio of mail that successfully authenticated with DKIM vs. all mail that attempted to authenticate with [DKIM](http://www.dkim.org/). Spoofed mail is excluded.
     */
    dkimSuccessRatio?: number | null;
    /**
     * The ratio of mail that passed [DMARC](https://dmarc.org/) alignment checks vs all mail received from the domain that successfully authenticated with either of [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).
     */
    dmarcSuccessRatio?: number | null;
    /**
     * Reputation of the domain.
     */
    domainReputation?: string | null;
    /**
     * The ratio of incoming mail (to Gmail), that passed secure transport (TLS) vs all mail received from that domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).
     */
    inboundEncryptionRatio?: number | null;
    /**
     * Reputation information pertaining to the IP addresses of the email servers for the domain. There is exactly one entry for each reputation category except REPUTATION_CATEGORY_UNSPECIFIED.
     */
    ipReputations?: Schema$IpReputation[];
    /**
     * The resource name of the traffic statistics. Traffic statistic names have the form `domains/{domain}/trafficStats/{date}`, where domain_name is the fully qualified domain name (i.e.,  mymail.mydomain.com) of the domain this traffic statistics pertains to and date is the date in yyyymmdd format that these statistics corresponds to. For example: domains/mymail.mydomain.com/trafficStats/20160807
     */
    name?: string | null;
    /**
     * The ratio of outgoing mail (from Gmail) that was accepted over secure transport (TLS).
     */
    outboundEncryptionRatio?: number | null;
    /**
     * Spammy [Feedback loop identifiers] (https://support.google.com/mail/answer/6254652) with their individual spam rates. This metric only pertains to traffic that is authenticated by [DKIM](http://www.dkim.org/).
     */
    spammyFeedbackLoops?: Schema$FeedbackLoop[];
    /**
     * The ratio of mail that successfully authenticated with SPF vs. all mail that attempted to authenticate with [SPF](http://www.openspf.org/). Spoofed mail is excluded.
     */
    spfSuccessRatio?: number | null;
    /**
     * The ratio of user-report spam vs. email that was sent to the inbox. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/).
     */
    userReportedSpamRatio?: number | null;
  }

  export class Resource$Domains {
    context: APIRequestContext;
    trafficStats: Resource$Domains$Trafficstats;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.trafficStats = new Resource$Domains$Trafficstats(this.context);
    }

    /**
     * gmailpostmastertools.domains.get
     * @desc Gets a specific domain registered by the client. Returns NOT_FOUND if the domain does not exist.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmailpostmastertools.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmailpostmastertools = google.gmailpostmastertools('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/postmaster.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmailpostmastertools.domains.get({
     *     // The resource name of the domain. It should have the form
     *     // `domains/{domain_name}`, where domain_name is the fully qualified
     *     // domain name.
     *     name: 'domains/my-domain',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "permission": "my_permission"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias gmailpostmastertools.domains.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the domain. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Domains$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Domains$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domain>;
    get(
      params: Params$Resource$Domains$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Domains$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(
      params: Params$Resource$Domains$Get,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(callback: BodyResponseCallback<Schema$Domain>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Domains$Get
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Domain> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Domains$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domains$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://gmailpostmastertools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * gmailpostmastertools.domains.list
     * @desc Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmailpostmastertools.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmailpostmastertools = google.gmailpostmastertools('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/postmaster.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmailpostmastertools.domains.list({
     *     // Requested page size. Server may return fewer domains than requested.
     *     // If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     // This is the value of
     *     // ListDomainsResponse.next_page_token
     *     // returned from the previous call to `ListDomains` method.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias gmailpostmastertools.domains.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Requested page size. Server may return fewer domains than requested. If unspecified, server will pick an appropriate default.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any. This is the value of ListDomainsResponse.next_page_token returned from the previous call to `ListDomains` method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Domains$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Domains$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDomainsResponse>;
    list(
      params: Params$Resource$Domains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Domains$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Domains$List,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDomainsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Domains$List
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDomainsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Domains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://gmailpostmastertools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/domains').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListDomainsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Domains$Get extends StandardParameters {
    /**
     * The resource name of the domain. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name.
     */
    name?: string;
  }
  export interface Params$Resource$Domains$List extends StandardParameters {
    /**
     * Requested page size. Server may return fewer domains than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any. This is the value of ListDomainsResponse.next_page_token returned from the previous call to `ListDomains` method.
     */
    pageToken?: string;
  }

  export class Resource$Domains$Trafficstats {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gmailpostmastertools.domains.trafficStats.get
     * @desc Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmailpostmastertools.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmailpostmastertools = google.gmailpostmastertools('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/postmaster.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmailpostmastertools.domains.trafficStats.get({
     *     // The resource name of the traffic statistics to get.
     *     // E.g., domains/mymail.mydomain.com/trafficStats/20160807.
     *     name: 'domains/my-domain/trafficStats/my-trafficStat',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deliveryErrors": [],
     *   //   "dkimSuccessRatio": {},
     *   //   "dmarcSuccessRatio": {},
     *   //   "domainReputation": "my_domainReputation",
     *   //   "inboundEncryptionRatio": {},
     *   //   "ipReputations": [],
     *   //   "name": "my_name",
     *   //   "outboundEncryptionRatio": {},
     *   //   "spammyFeedbackLoops": [],
     *   //   "spfSuccessRatio": {},
     *   //   "userReportedSpamRatio": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias gmailpostmastertools.domains.trafficStats.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the traffic statistics to get. E.g., domains/mymail.mydomain.com/trafficStats/20160807.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Domains$Trafficstats$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Domains$Trafficstats$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TrafficStats>;
    get(
      params: Params$Resource$Domains$Trafficstats$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Domains$Trafficstats$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TrafficStats>,
      callback: BodyResponseCallback<Schema$TrafficStats>
    ): void;
    get(
      params: Params$Resource$Domains$Trafficstats$Get,
      callback: BodyResponseCallback<Schema$TrafficStats>
    ): void;
    get(callback: BodyResponseCallback<Schema$TrafficStats>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Domains$Trafficstats$Get
        | BodyResponseCallback<Schema$TrafficStats>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TrafficStats>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TrafficStats>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TrafficStats> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Domains$Trafficstats$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domains$Trafficstats$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://gmailpostmastertools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$TrafficStats>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TrafficStats>(parameters);
      }
    }

    /**
     * gmailpostmastertools.domains.trafficStats.list
     * @desc List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmailpostmastertools.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmailpostmastertools = google.gmailpostmastertools('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/postmaster.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmailpostmastertools.domains.trafficStats.list({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month, or 0
     *     // if specifying a year by itself or a year and month where the day is not
     *     // significant.
     *     'endDate.day': 'placeholder-value',
     *     // Month of year. Must be from 1 to 12, or 0 if specifying a year without a
     *     // month and day.
     *     'endDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999, or 0 if specifying a date without
     *     // a year.
     *     'endDate.year': 'placeholder-value',
     *     // Requested page size. Server may return fewer TrafficStats than
     *     // requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     // This is the value of
     *     // ListTrafficStatsResponse.next_page_token
     *     // returned from the previous call to `ListTrafficStats` method.
     *     pageToken: 'placeholder-value',
     *     // The resource name of the domain whose traffic statistics we'd like to list.
     *     // It should have the form `domains/{domain_name}`, where domain_name is
     *     // the fully qualified domain name.
     *     parent: 'domains/my-domain',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month, or 0
     *     // if specifying a year by itself or a year and month where the day is not
     *     // significant.
     *     'startDate.day': 'placeholder-value',
     *     // Month of year. Must be from 1 to 12, or 0 if specifying a year without a
     *     // month and day.
     *     'startDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999, or 0 if specifying a date without
     *     // a year.
     *     'startDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "trafficStats": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias gmailpostmastertools.domains.trafficStats.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.endDate.day Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year by itself or a year and month where the day is not significant.
     * @param {integer=} params.endDate.month Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.
     * @param {integer=} params.endDate.year Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.
     * @param {integer=} params.pageSize Requested page size. Server may return fewer TrafficStats than requested. If unspecified, server will pick an appropriate default.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any. This is the value of ListTrafficStatsResponse.next_page_token returned from the previous call to `ListTrafficStats` method.
     * @param {string} params.parent The resource name of the domain whose traffic statistics we'd like to list. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name.
     * @param {integer=} params.startDate.day Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year by itself or a year and month where the day is not significant.
     * @param {integer=} params.startDate.month Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.
     * @param {integer=} params.startDate.year Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Domains$Trafficstats$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Domains$Trafficstats$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTrafficStatsResponse>;
    list(
      params: Params$Resource$Domains$Trafficstats$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Domains$Trafficstats$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTrafficStatsResponse>,
      callback: BodyResponseCallback<Schema$ListTrafficStatsResponse>
    ): void;
    list(
      params: Params$Resource$Domains$Trafficstats$List,
      callback: BodyResponseCallback<Schema$ListTrafficStatsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTrafficStatsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Domains$Trafficstats$List
        | BodyResponseCallback<Schema$ListTrafficStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTrafficStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTrafficStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTrafficStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Domains$Trafficstats$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domains$Trafficstats$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://gmailpostmastertools.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/trafficStats').replace(
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
        createAPIRequest<Schema$ListTrafficStatsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListTrafficStatsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Domains$Trafficstats$Get
    extends StandardParameters {
    /**
     * The resource name of the traffic statistics to get. E.g., domains/mymail.mydomain.com/trafficStats/20160807.
     */
    name?: string;
  }
  export interface Params$Resource$Domains$Trafficstats$List
    extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year by itself or a year and month where the day is not significant.
     */
    'endDate.day'?: number;
    /**
     * Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.
     */
    'endDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.
     */
    'endDate.year'?: number;
    /**
     * Requested page size. Server may return fewer TrafficStats than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any. This is the value of ListTrafficStatsResponse.next_page_token returned from the previous call to `ListTrafficStats` method.
     */
    pageToken?: string;
    /**
     * The resource name of the domain whose traffic statistics we'd like to list. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name.
     */
    parent?: string;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year by itself or a year and month where the day is not significant.
     */
    'startDate.day'?: number;
    /**
     * Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.
     */
    'startDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.
     */
    'startDate.year'?: number;
  }
}
