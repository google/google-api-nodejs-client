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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Enterprise Apps Reseller API
 *
 * Creates and manages your customers and their subscriptions.
 *
 * @example
 * const google = require('googleapis');
 * const reseller = google.reseller('v1');
 *
 * @namespace reseller
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Reseller
 */
export class Reseller {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  customers: Resource$Customers;
  resellernotify: Resource$Resellernotify;
  subscriptions: Resource$Subscriptions;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.customers = new Resource$Customers(this);
    this.resellernotify = new Resource$Resellernotify(this);
    this.subscriptions = new Resource$Subscriptions(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * JSON template for address of a customer.
 */
export interface Schema$Address {
  /**
   * A customer&#39;s physical address. An address can be composed of one to
   * three lines. The addressline2 and addressLine3 are optional.
   */
  addressLine1: string;
  /**
   * Line 2 of the address.
   */
  addressLine2: string;
  /**
   * Line 3 of the address.
   */
  addressLine3: string;
  /**
   * The customer contact&#39;s name. This is required.
   */
  contactName: string;
  /**
   * For countryCode information, see the ISO 3166 country code elements. Verify
   * that country is approved for resale of Google products. This property is
   * required when creating a new customer.
   */
  countryCode: string;
  /**
   * Identifies the resource as a customer address. Value: customers#address
   */
  kind: string;
  /**
   * An example of a locality value is the city of San Francisco.
   */
  locality: string;
  /**
   * The company or company division name. This is required.
   */
  organizationName: string;
  /**
   * A postalCode example is a postal zip code such as 94043. This property is
   * required when creating a new customer.
   */
  postalCode: string;
  /**
   * An example of a region value is CA for the state of California.
   */
  region: string;
}
/**
 * JSON template for the ChangePlan rpc request.
 */
export interface Schema$ChangePlanRequest {
  /**
   * Google-issued code (100 char max) for discounted pricing on subscription
   * plans. Deal code must be included in changePlan request in order to receive
   * discounted rate. This property is optional. If a deal code has already been
   * added to a subscription, this property may be left empty and the existing
   * discounted rate will still apply (if not empty, only provide the deal code
   * that is already present on the subscription). If a deal code has never been
   * added to a subscription and this property is left blank, regular pricing
   * will apply.
   */
  dealCode: string;
  /**
   * Identifies the resource as a subscription change plan request. Value:
   * subscriptions#changePlanRequest
   */
  kind: string;
  /**
   * The planName property is required. This is the name of the
   * subscription&#39;s payment plan. For more information about the Google
   * payment plans, see API concepts.  Possible values are:   -
   * ANNUAL_MONTHLY_PAY - The annual commitment plan with monthly payments   -
   * ANNUAL_YEARLY_PAY - The annual commitment plan with yearly payments   -
   * FLEXIBLE - The flexible plan   - TRIAL - The 30-day free trial plan
   */
  planName: string;
  /**
   * This is an optional property. This purchase order (PO) information is for
   * resellers to use for their company tracking usage. If a purchaseOrderId
   * value is given it appears in the API responses and shows up in the invoice.
   * The property accepts up to 80 plain text characters.
   */
  purchaseOrderId: string;
  /**
   * This is a required property. The seats property is the number of user seat
   * licenses.
   */
  seats: Schema$Seats;
}
/**
 * JSON template for a customer.
 */
export interface Schema$Customer {
  /**
   * Like the &quot;Customer email&quot; in the reseller tools, this email is
   * the secondary contact used if something happens to the customer&#39;s
   * service such as service outage or a security issue. This property is
   * required when creating a new customer and should not use the same domain as
   * customerDomain.
   */
  alternateEmail: string;
  /**
   * The customer&#39;s primary domain name string. customerDomain is required
   * when creating a new customer. Do not include the www prefix in the domain
   * when adding a customer.
   */
  customerDomain: string;
  /**
   * Whether the customer&#39;s primary domain has been verified.
   */
  customerDomainVerified: boolean;
  /**
   * This property will always be returned in a response as the unique
   * identifier generated by Google. In a request, this property can be either
   * the primary domain or the unique identifier generated by Google.
   */
  customerId: string;
  /**
   * Identifies the resource as a customer. Value: reseller#customer
   */
  kind: string;
  /**
   * Customer contact phone number. This can be continuous numbers, with spaces,
   * etc. But it must be a real phone number and not, for example,
   * &quot;123&quot;. See phone  local format conventions.
   */
  phoneNumber: string;
  /**
   * A customer&#39;s address information. Each field has a limit of 255
   * charcters.
   */
  postalAddress: Schema$Address;
  /**
   * URL to customer&#39;s Admin console dashboard. The read-only URL is
   * generated by the API service. This is used if your client application
   * requires the customer to complete a task in the Admin console.
   */
  resourceUiUrl: string;
}
/**
 * JSON template for a subscription renewal settings.
 */
export interface Schema$RenewalSettings {
  /**
   * Identifies the resource as a subscription renewal setting. Value:
   * subscriptions#renewalSettings
   */
  kind: string;
  /**
   * Renewal settings for the annual commitment plan. For more detailed
   * information, see renewal options in the administrator help center. When
   * renewing a subscription, the renewalType is a required property.
   */
  renewalType: string;
}
/**
 * JSON template for resellernotify getwatchdetails response.
 */
export interface Schema$ResellernotifyGetwatchdetailsResponse {
  /**
   * List of registered service accounts.
   */
  serviceAccountEmailAddresses: string[];
  /**
   * Topic name of the PubSub
   */
  topicName: string;
}
/**
 * JSON template for resellernotify response.
 */
export interface Schema$ResellernotifyResource {
  /**
   * Topic name of the PubSub
   */
  topicName: string;
}
/**
 * JSON template for subscription seats.
 */
export interface Schema$Seats {
  /**
   * Identifies the resource as a subscription change plan request. Value:
   * subscriptions#seats
   */
  kind: string;
  /**
   * Read-only field containing the current number of licensed seats for
   * FLEXIBLE Google-Apps subscriptions and secondary subscriptions such as
   * Google-Vault and Drive-storage.
   */
  licensedNumberOfSeats: number;
  /**
   * The maximumNumberOfSeats property is the maximum number of licenses that
   * the customer can purchase. This property applies to plans other than the
   * annual commitment plan. How a user&#39;s licenses are managed depends on
   * the subscription&#39;s payment plan:   - annual commitment plan (with
   * monthly or yearly payments) — For this plan, a reseller is invoiced on the
   * number of user licenses in the numberOfSeats property. The
   * maximumNumberOfSeats property is a read-only property in the API&#39;s
   * response.   - flexible plan — For this plan, a reseller is invoiced on the
   * actual number of users which is capped by the maximumNumberOfSeats. This is
   * the maximum number of user licenses a customer has for user license
   * provisioning. This quantity can be increased up to the maximum limit
   * defined in the reseller&#39;s contract. And the minimum quantity is the
   * current number of users in the customer account.   - 30-day free trial plan
   * — A subscription in a 30-day free trial is restricted to maximum 10 seats.
   */
  maximumNumberOfSeats: number;
  /**
   * The numberOfSeats property holds the customer&#39;s number of user
   * licenses. How a user&#39;s licenses are managed depends on the
   * subscription&#39;s plan:   - annual commitment plan (with monthly or yearly
   * pay) — For this plan, a reseller is invoiced on the number of user licenses
   * in the numberOfSeats property. This is the maximum number of user licenses
   * that a reseller&#39;s customer can create. The reseller can add more
   * licenses, but once set, the numberOfSeats can not be reduced until renewal.
   * The reseller is invoiced based on the numberOfSeats value regardless of how
   * many of these user licenses are provisioned users.   - flexible plan — For
   * this plan, a reseller is invoiced on the actual number of users which is
   * capped by the maximumNumberOfSeats. The numberOfSeats property is not used
   * in the request or response for flexible plan customers.   - 30-day free
   * trial plan — The numberOfSeats property is not used in the request or
   * response for an account in a 30-day trial.
   */
  numberOfSeats: number;
}
/**
 * JSON template for a subscription.
 */
export interface Schema$Subscription {
  /**
   * Read-only field that returns the current billing method for a subscription.
   */
  billingMethod: string;
  /**
   * The creationTime property is the date when subscription was created. It is
   * in milliseconds using the Epoch format. See an example Epoch converter.
   */
  creationTime: string;
  /**
   * Primary domain name of the customer
   */
  customerDomain: string;
  /**
   * This property will always be returned in a response as the unique
   * identifier generated by Google. In a request, this property can be either
   * the primary domain or the unique identifier generated by Google.
   */
  customerId: string;
  /**
   * Google-issued code (100 char max) for discounted pricing on subscription
   * plans. Deal code must be included in insert requests in order to receive
   * discounted rate. This property is optional, regular pricing applies if left
   * empty.
   */
  dealCode: string;
  /**
   * Identifies the resource as a Subscription. Value: reseller#subscription
   */
  kind: string;
  /**
   * The plan property is required. In this version of the API, the G Suite
   * plans are the flexible plan, annual commitment plan, and the 30-day free
   * trial plan. For more information about the API&quot;s payment plans, see
   * the API concepts.
   */
  plan: any;
  /**
   * This is an optional property. This purchase order (PO) information is for
   * resellers to use for their company tracking usage. If a purchaseOrderId
   * value is given it appears in the API responses and shows up in the invoice.
   * The property accepts up to 80 plain text characters.
   */
  purchaseOrderId: string;
  /**
   * Renewal settings for the annual commitment plan. For more detailed
   * information, see renewal options in the administrator help center.
   */
  renewalSettings: Schema$RenewalSettings;
  /**
   * URL to customer&#39;s Subscriptions page in the Admin console. The
   * read-only URL is generated by the API service. This is used if your client
   * application requires the customer to complete a task using the
   * Subscriptions page in the Admin console.
   */
  resourceUiUrl: string;
  /**
   * This is a required property. The number and limit of user seat licenses in
   * the plan.
   */
  seats: Schema$Seats;
  /**
   * A required property. The skuId is a unique system identifier for a
   * product&#39;s SKU assigned to a customer in the subscription. For products
   * and SKUs available in this version of the API, see  Product and SKU IDs.
   */
  skuId: string;
  /**
   * Read-only external display name for a product&#39;s SKU assigned to a
   * customer in the subscription. SKU names are subject to change at
   * Google&#39;s discretion. For products and SKUs available in this version of
   * the API, see  Product and SKU IDs.
   */
  skuName: string;
  /**
   * This is an optional property.
   */
  status: string;
  /**
   * The subscriptionId is the subscription identifier and is unique for each
   * customer. This is a required property. Since a subscriptionId changes when
   * a subscription is updated, we recommend not using this ID as a key for
   * persistent data. Use the subscriptionId as described in retrieve all
   * reseller subscriptions.
   */
  subscriptionId: string;
  /**
   * Read-only field containing an enumerable of all the current suspension
   * reasons for a subscription. It is possible for a subscription to have many
   * concurrent, overlapping suspension reasons. A subscription&#39;s STATUS is
   * SUSPENDED until all pending suspensions are removed.  Possible options
   * include:   - PENDING_TOS_ACCEPTANCE - The customer has not logged in and
   * accepted the G Suite Resold Terms of Services.   - RENEWAL_WITH_TYPE_CANCEL
   * - The customer&#39;s commitment ended and their service was cancelled at
   * the end of their term.   - RESELLER_INITIATED - A manual suspension invoked
   * by a Reseller.   - TRIAL_ENDED - The customer&#39;s trial expired without a
   * plan selected.   - OTHER - The customer is suspended for an internal Google
   * reason (e.g. abuse or otherwise).
   */
  suspensionReasons: string[];
  /**
   * Read-only transfer related information for the subscription. For more
   * information, see retrieve transferable subscriptions for a customer.
   */
  transferInfo: any;
  /**
   * The G Suite annual commitment and flexible payment plans can be in a 30-day
   * free trial. For more information, see the API concepts.
   */
  trialSettings: any;
}
/**
 * JSON template for a subscription list.
 */
export interface Schema$Subscriptions {
  /**
   * Identifies the resource as a collection of subscriptions. Value:
   * reseller#subscriptions
   */
  kind: string;
  /**
   * The continuation token, used to page through large result sets. Provide
   * this value in a subsequent request to return the next page of results.
   */
  nextPageToken: string;
  /**
   * The subscriptions in this page of results.
   */
  subscriptions: Schema$Subscription[];
}

export class Resource$Customers {
  root: Reseller;
  constructor(root: Reseller) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * reseller.customers.get
   * @desc Get a customer account.
   * @alias reseller.customers.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Customer>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>):
      void|AxiosPromise<Schema$Customer> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/apps/reseller/v1/customers/{customerId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customerId'],
      pathParams: ['customerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Customer>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Customer>(parameters);
    }
  }


  /**
   * reseller.customers.insert
   * @desc Order a new customer's account.
   * @alias reseller.customers.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
   * @param {().Customer} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Customer>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>):
      void|AxiosPromise<Schema$Customer> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/apps/reseller/v1/customers')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Customer>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Customer>(parameters);
    }
  }


  /**
   * reseller.customers.patch
   * @desc Update a customer account's settings. This method supports patch
   * semantics.
   * @alias reseller.customers.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {().Customer} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Customer>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>):
      void|AxiosPromise<Schema$Customer> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/apps/reseller/v1/customers/{customerId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['customerId'],
      pathParams: ['customerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Customer>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Customer>(parameters);
    }
  }


  /**
   * reseller.customers.update
   * @desc Update a customer account's settings.
   * @alias reseller.customers.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {().Customer} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Customer>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Customer>,
      callback?: BodyResponseCallback<Schema$Customer>):
      void|AxiosPromise<Schema$Customer> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/apps/reseller/v1/customers/{customerId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['customerId'],
      pathParams: ['customerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Customer>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Customer>(parameters);
    }
  }
}

export class Resource$Resellernotify {
  root: Reseller;
  constructor(root: Reseller) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * reseller.resellernotify.getwatchdetails
   * @desc Returns all the details of the watch corresponding to the reseller.
   * @alias reseller.resellernotify.getwatchdetails
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getwatchdetails(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ResellernotifyGetwatchdetailsResponse>;
  getwatchdetails(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ResellernotifyGetwatchdetailsResponse>,
      callback?:
          BodyResponseCallback<Schema$ResellernotifyGetwatchdetailsResponse>):
      void;
  getwatchdetails(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ResellernotifyGetwatchdetailsResponse>,
      callback?:
          BodyResponseCallback<Schema$ResellernotifyGetwatchdetailsResponse>):
      void|AxiosPromise<Schema$ResellernotifyGetwatchdetailsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/apps/reseller/v1/resellernotify/getwatchdetails')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ResellernotifyGetwatchdetailsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ResellernotifyGetwatchdetailsResponse>(
          parameters);
    }
  }


  /**
   * reseller.resellernotify.register
   * @desc Registers a Reseller for receiving notifications.
   * @alias reseller.resellernotify.register
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.serviceAccountEmailAddress The service account which will own the created Cloud-PubSub topic.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  register(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ResellernotifyResource>;
  register(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ResellernotifyResource>,
      callback?: BodyResponseCallback<Schema$ResellernotifyResource>): void;
  register(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ResellernotifyResource>,
      callback?: BodyResponseCallback<Schema$ResellernotifyResource>):
      void|AxiosPromise<Schema$ResellernotifyResource> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/apps/reseller/v1/resellernotify/register')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ResellernotifyResource>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ResellernotifyResource>(parameters);
    }
  }


  /**
   * reseller.resellernotify.unregister
   * @desc Unregisters a Reseller for receiving notifications.
   * @alias reseller.resellernotify.unregister
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.serviceAccountEmailAddress The service account which owns the Cloud-PubSub topic.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  unregister(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ResellernotifyResource>;
  unregister(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ResellernotifyResource>,
      callback?: BodyResponseCallback<Schema$ResellernotifyResource>): void;
  unregister(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ResellernotifyResource>,
      callback?: BodyResponseCallback<Schema$ResellernotifyResource>):
      void|AxiosPromise<Schema$ResellernotifyResource> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/apps/reseller/v1/resellernotify/unregister')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ResellernotifyResource>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ResellernotifyResource>(parameters);
    }
  }
}

export class Resource$Subscriptions {
  root: Reseller;
  constructor(root: Reseller) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * reseller.subscriptions.activate
   * @desc Activates a subscription previously suspended by the reseller
   * @alias reseller.subscriptions.activate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  activate(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Subscription>;
  activate(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>): void;
  activate(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>):
      void|AxiosPromise<Schema$Subscription> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/activate')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customerId', 'subscriptionId'],
      pathParams: ['customerId', 'subscriptionId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscription>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscription>(parameters);
    }
  }


  /**
   * reseller.subscriptions.changePlan
   * @desc Update a subscription plan. Use this method to update a plan for a
   * 30-day trial or a flexible plan subscription to an annual commitment plan
   * with monthly or yearly payments.
   * @alias reseller.subscriptions.changePlan
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
   * @param {().ChangePlanRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  changePlan(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Subscription>;
  changePlan(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>): void;
  changePlan(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>):
      void|AxiosPromise<Schema$Subscription> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changePlan')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customerId', 'subscriptionId'],
      pathParams: ['customerId', 'subscriptionId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscription>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscription>(parameters);
    }
  }


  /**
   * reseller.subscriptions.changeRenewalSettings
   * @desc Update a user license's renewal settings. This is applicable for
   * accounts with annual commitment plans only.
   * @alias reseller.subscriptions.changeRenewalSettings
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
   * @param {().RenewalSettings} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  changeRenewalSettings(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Subscription>;
  changeRenewalSettings(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>): void;
  changeRenewalSettings(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>):
      void|AxiosPromise<Schema$Subscription> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeRenewalSettings')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customerId', 'subscriptionId'],
      pathParams: ['customerId', 'subscriptionId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscription>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscription>(parameters);
    }
  }


  /**
   * reseller.subscriptions.changeSeats
   * @desc Update a subscription's user license settings.
   * @alias reseller.subscriptions.changeSeats
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
   * @param {().Seats} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  changeSeats(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Subscription>;
  changeSeats(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>): void;
  changeSeats(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>):
      void|AxiosPromise<Schema$Subscription> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeSeats')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customerId', 'subscriptionId'],
      pathParams: ['customerId', 'subscriptionId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscription>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscription>(parameters);
    }
  }


  /**
   * reseller.subscriptions.delete
   * @desc Cancel, suspend or transfer a subscription to direct.
   * @alias reseller.subscriptions.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {string} params.deletionType The deletionType query string enables the cancellation, downgrade, or suspension of a subscription.
   * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['customerId', 'subscriptionId', 'deletionType'],
      pathParams: ['customerId', 'subscriptionId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * reseller.subscriptions.get
   * @desc Get a specific subscription.
   * @alias reseller.subscriptions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Subscription>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>):
      void|AxiosPromise<Schema$Subscription> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['customerId', 'subscriptionId'],
      pathParams: ['customerId', 'subscriptionId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscription>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscription>(parameters);
    }
  }


  /**
   * reseller.subscriptions.insert
   * @desc Create or transfer a subscription.
   * @alias reseller.subscriptions.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
   * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {().Subscription} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Subscription>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>):
      void|AxiosPromise<Schema$Subscription> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/apps/reseller/v1/customers/{customerId}/subscriptions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customerId'],
      pathParams: ['customerId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscription>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscription>(parameters);
    }
  }


  /**
   * reseller.subscriptions.list
   * @desc List of subscriptions managed by the reseller. The list can be all
   * subscriptions, all of a customer's subscriptions, or all of a customer's
   * transferable subscriptions.
   * @alias reseller.subscriptions.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
   * @param {string=} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {string=} params.customerNamePrefix When retrieving all of your subscriptions and filtering for specific customers, you can enter a prefix for a customer name. Using an example customer group that includes exam.com, example20.com and example.com:   - exa -- Returns all customer names that start with 'exa' which could include exam.com, example20.com, and example.com. A name prefix is similar to using a regular expression's asterisk, exa*.  - example -- Returns example20.com and example.com.
   * @param {integer=} params.maxResults When retrieving a large list, the maxResults is the maximum number of results per page. The nextPageToken value takes you to the next page. The default is 20.
   * @param {string=} params.pageToken Token to specify next page in the list
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Subscriptions>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscriptions>,
      callback?: BodyResponseCallback<Schema$Subscriptions>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscriptions>,
      callback?: BodyResponseCallback<Schema$Subscriptions>):
      void|AxiosPromise<Schema$Subscriptions> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/apps/reseller/v1/subscriptions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscriptions>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscriptions>(parameters);
    }
  }


  /**
   * reseller.subscriptions.startPaidService
   * @desc Immediately move a 30-day free trial subscription to a paid service
   * subscription.
   * @alias reseller.subscriptions.startPaidService
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  startPaidService(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Subscription>;
  startPaidService(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>): void;
  startPaidService(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>):
      void|AxiosPromise<Schema$Subscription> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/startPaidService')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customerId', 'subscriptionId'],
      pathParams: ['customerId', 'subscriptionId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscription>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscription>(parameters);
    }
  }


  /**
   * reseller.subscriptions.suspend
   * @desc Suspends an active subscription.
   * @alias reseller.subscriptions.suspend
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
   * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  suspend(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Subscription>;
  suspend(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>): void;
  suspend(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>):
      void|AxiosPromise<Schema$Subscription> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/suspend')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['customerId', 'subscriptionId'],
      pathParams: ['customerId', 'subscriptionId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscription>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscription>(parameters);
    }
  }
}
