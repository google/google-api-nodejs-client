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

export namespace analyticsadmin_v1alpha {
  export interface Options extends GlobalOptions {
    version: 'v1alpha';
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
   * Google Analytics Admin API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const analyticsadmin = google.analyticsadmin('v1alpha');
   * ```
   */
  export class Analyticsadmin {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    accountSummaries: Resource$Accountsummaries;
    properties: Resource$Properties;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.accountSummaries = new Resource$Accountsummaries(this.context);
      this.properties = new Resource$Properties(this.context);
    }
  }

  /**
   * A resource message representing a Google Analytics account.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccount {
    /**
     * Output only. Time when this account was originally created.
     */
    createTime?: string | null;
    /**
     * Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List results unless specifically requested.
     */
    deleted?: boolean | null;
    /**
     * Required. Human-readable display name for this account.
     */
    displayName?: string | null;
    /**
     * Output only. Resource name of this account. Format: accounts/{account\} Example: "accounts/100"
     */
    name?: string | null;
    /**
     * Country of business. Must be a Unicode CLDR region code.
     */
    regionCode?: string | null;
    /**
     * Output only. Time when account payload fields were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A virtual resource representing an overview of an account and all its child GA4 properties.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccountSummary {
    /**
     * Resource name of account referred to by this account summary Format: accounts/{account_id\} Example: "accounts/1000"
     */
    account?: string | null;
    /**
     * Display name for the account referred to in this account summary.
     */
    displayName?: string | null;
    /**
     * Resource name for this account summary. Format: accountSummaries/{account_id\} Example: "accountSummaries/1000"
     */
    name?: string | null;
    /**
     * List of summaries for child accounts of this account.
     */
    propertySummaries?: Schema$GoogleAnalyticsAdminV1alphaPropertySummary[];
  }
  /**
   * A resource message representing a Google Analytics Android app stream.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream {
    /**
     * Output only. Time when this stream was originally created.
     */
    createTime?: string | null;
    /**
     * Human-readable display name for the Data Stream. The max allowed display name length is 255 UTF-16 code units.
     */
    displayName?: string | null;
    /**
     * Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated.
     */
    firebaseAppId?: string | null;
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id\}/androidAppDataStreams/{stream_id\} Example: "properties/1000/androidAppDataStreams/2000"
     */
    name?: string | null;
    /**
     * Immutable. The package name for the app being measured. Example: "com.example.myandroidapp"
     */
    packageName?: string | null;
    /**
     * Output only. Time when stream payload fields were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for ApproveDisplayVideo360AdvertiserLinkProposal RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalRequest {}
  /**
   * Response message for ApproveDisplayVideo360AdvertiserLinkProposal RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse {
    /**
     * The DisplayVideo360AdvertiserLink created as a result of approving the proposal.
     */
    displayVideo360AdvertiserLink?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;
  }
  /**
   * Request message for ArchiveCustomDimension RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaArchiveCustomDimensionRequest {}
  /**
   * Request message for ArchiveCustomMetric RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaArchiveCustomMetricRequest {}
  /**
   * Read-only resource used to summarize a principal's effective roles.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAuditUserLink {
    /**
     * Roles directly assigned to this user for this entity. Format: predefinedRoles/read Excludes roles that are inherited from an account (if this is for a property), group, or organization admin role.
     */
    directRoles?: string[] | null;
    /**
     * Union of all permissions a user has at this account or property (includes direct permissions, group-inherited permissions, etc.). Format: predefinedRoles/read
     */
    effectiveRoles?: string[] | null;
    /**
     * Email address of the linked user
     */
    emailAddress?: string | null;
    /**
     * Example format: properties/1234/userLinks/5678
     */
    name?: string | null;
  }
  /**
   * Request message for AuditUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksRequest {
    /**
     * The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 1000 user links will be returned. The maximum value is 5000; values above 5000 will be coerced to 5000.
     */
    pageSize?: number | null;
    /**
     * A page token, received from a previous `AuditUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `AuditUserLinks` must match the call that provided the page token.
     */
    pageToken?: string | null;
  }
  /**
   * Response message for AuditUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of AuditUserLinks. These will be ordered stably, but in an arbitrary order.
     */
    userLinks?: Schema$GoogleAnalyticsAdminV1alphaAuditUserLink[];
  }
  /**
   * Request message for BatchCreateUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest {
    /**
     * Optional. If set, then email the new users notifying them that they've been granted permissions to the resource. Regardless of whether this is set or not, notify_new_user field inside each individual request is ignored.
     */
    notifyNewUsers?: boolean | null;
    /**
     * Required. The requests specifying the user links to create. A maximum of 1000 user links can be created in a batch.
     */
    requests?: Schema$GoogleAnalyticsAdminV1alphaCreateUserLinkRequest[];
  }
  /**
   * Response message for BatchCreateUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse {
    /**
     * The user links created.
     */
    userLinks?: Schema$GoogleAnalyticsAdminV1alphaUserLink[];
  }
  /**
   * Request message for BatchDeleteUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest {
    /**
     * Required. The requests specifying the user links to update. A maximum of 1000 user links can be updated in a batch.
     */
    requests?: Schema$GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest[];
  }
  /**
   * Response message for BatchGetUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse {
    /**
     * The requested user links.
     */
    userLinks?: Schema$GoogleAnalyticsAdminV1alphaUserLink[];
  }
  /**
   * Request message for BatchUpdateUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest {
    /**
     * Required. The requests specifying the user links to update. A maximum of 1000 user links can be updated in a batch.
     */
    requests?: Schema$GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest[];
  }
  /**
   * Response message for BatchUpdateUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse {
    /**
     * The user links updated.
     */
    userLinks?: Schema$GoogleAnalyticsAdminV1alphaUserLink[];
  }
  /**
   * Request message for CancelDisplayVideo360AdvertiserLinkProposal RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaCancelDisplayVideo360AdvertiserLinkProposalRequest {}
  /**
   * A description of a change to a single Google Analytics resource.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaChangeHistoryChange {
    /**
     * The type of action that changed this resource.
     */
    action?: string | null;
    /**
     * Resource name of the resource whose changes are described by this entry.
     */
    resource?: string | null;
    /**
     * Resource contents from after the change was made. If this resource was deleted in this change, this field will be missing.
     */
    resourceAfterChange?: Schema$GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;
    /**
     * Resource contents from before the change was made. If this resource was created in this change, this field will be missing.
     */
    resourceBeforeChange?: Schema$GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;
  }
  /**
   * A snapshot of a resource as before or after the result of a change in change history.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource {
    /**
     * A snapshot of an Account resource in change history.
     */
    account?: Schema$GoogleAnalyticsAdminV1alphaAccount;
    /**
     * A snapshot of an AndroidAppDataStream resource in change history.
     */
    androidAppDataStream?: Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream;
    /**
     * A snapshot of a ConversionEvent resource in change history.
     */
    conversionEvent?: Schema$GoogleAnalyticsAdminV1alphaConversionEvent;
    /**
     * A snapshot of a CustomDimension resource in change history.
     */
    customDimension?: Schema$GoogleAnalyticsAdminV1alphaCustomDimension;
    /**
     * A snapshot of a CustomMetric resource in change history.
     */
    customMetric?: Schema$GoogleAnalyticsAdminV1alphaCustomMetric;
    /**
     * A snapshot of a DisplayVideo360AdvertiserLink resource in change history.
     */
    displayVideo360AdvertiserLink?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;
    /**
     * A snapshot of a DisplayVideo360AdvertiserLinkProposal resource in change history.
     */
    displayVideo360AdvertiserLinkProposal?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal;
    /**
     * A snapshot of a FirebaseLink resource in change history.
     */
    firebaseLink?: Schema$GoogleAnalyticsAdminV1alphaFirebaseLink;
    /**
     * A snapshot of a GoogleAdsLink resource in change history.
     */
    googleAdsLink?: Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink;
    /**
     * A snapshot of a GoogleSignalsSettings resource in change history.
     */
    googleSignalsSettings?: Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings;
    /**
     * A snapshot of an IosAppDataStream resource in change history.
     */
    iosAppDataStream?: Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream;
    /**
     * A snapshot of a MeasurementProtocolSecret resource in change history.
     */
    measurementProtocolSecret?: Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;
    /**
     * A snapshot of a Property resource in change history.
     */
    property?: Schema$GoogleAnalyticsAdminV1alphaProperty;
    /**
     * A snapshot of a WebDataStream resource in change history.
     */
    webDataStream?: Schema$GoogleAnalyticsAdminV1alphaWebDataStream;
  }
  /**
   * A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaChangeHistoryEvent {
    /**
     * The type of actor that made this change.
     */
    actorType?: string | null;
    /**
     * A list of changes made in this change history event that fit the filters specified in SearchChangeHistoryEventsRequest.
     */
    changes?: Schema$GoogleAnalyticsAdminV1alphaChangeHistoryChange[];
    /**
     * If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event.
     */
    changesFiltered?: boolean | null;
    /**
     * Time when change was made.
     */
    changeTime?: string | null;
    /**
     * ID of this change history event. This ID is unique across Google Analytics.
     */
    id?: string | null;
    /**
     * Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error.
     */
    userActorEmail?: string | null;
  }
  /**
   * A conversion event in a Google Analytics property.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaConversionEvent {
    /**
     * Output only. Time when this conversion event was created in the property.
     */
    createTime?: string | null;
    /**
     * Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom conversion events that may be created per property.
     */
    custom?: boolean | null;
    /**
     * Output only. If set, this event can currently be deleted via DeleteConversionEvent.
     */
    deletable?: boolean | null;
    /**
     * Immutable. The event name for this conversion event. Examples: 'click', 'purchase'
     */
    eventName?: string | null;
    /**
     * Output only. Resource name of this conversion event. Format: properties/{property\}/conversionEvents/{conversion_event\}
     */
    name?: string | null;
  }
  /**
   * Request message for CreateUserLink RPC. Users can have multiple email addresses associated with their Google account, and one of these email addresses is the "primary" email address. Any of the email addresses associated with a Google account may be used for a new UserLink, but the returned UserLink will always contain the "primary" email address. As a result, the input and output email address for this request may differ.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaCreateUserLinkRequest {
    /**
     * Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
     */
    notifyNewUser?: boolean | null;
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string | null;
    /**
     * Required. The user link to create.
     */
    userLink?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }
  /**
   * A definition for a CustomDimension.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaCustomDimension {
    /**
     * Optional. Description for this custom dimension. Max length of 150 characters.
     */
    description?: string | null;
    /**
     * Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently only supported by user-scoped custom dimensions.
     */
    disallowAdsPersonalization?: boolean | null;
    /**
     * Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.
     */
    displayName?: string | null;
    /**
     * Output only. Resource name for this CustomDimension resource. Format: properties/{property\}/customDimensions/{customDimension\}
     */
    name?: string | null;
    /**
     * Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. May only contain alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40 characters for event-scoped dimensions.
     */
    parameterName?: string | null;
    /**
     * Required. Immutable. The scope of this dimension.
     */
    scope?: string | null;
  }
  /**
   * A definition for a custom metric.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaCustomMetric {
    /**
     * Optional. Description for this custom dimension. Max length of 150 characters.
     */
    description?: string | null;
    /**
     * Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.
     */
    displayName?: string | null;
    /**
     * Required. Immutable. The type for the custom metric's value.
     */
    measurementUnit?: string | null;
    /**
     * Output only. Resource name for this CustomMetric resource. Format: properties/{property\}/customMetrics/{customMetric\}
     */
    name?: string | null;
    /**
     * Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics.
     */
    parameterName?: string | null;
    /**
     * Required. Immutable. The scope of this custom metric.
     */
    scope?: string | null;
  }
  /**
   * A resource message representing data sharing settings of a Google Analytics account.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings {
    /**
     * Output only. Resource name. Format: accounts/{account\}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
     */
    name?: string | null;
    /**
     * Allows any of Google sales to access the data in order to suggest configuration changes to improve results.
     */
    sharingWithGoogleAnySalesEnabled?: boolean | null;
    /**
     * Allows Google sales teams that are assigned to the customer to access the data in order to suggest configuration changes to improve results. Sales team restrictions still apply when enabled.
     */
    sharingWithGoogleAssignedSalesEnabled?: boolean | null;
    /**
     * Allows Google to use the data to improve other Google products or services.
     */
    sharingWithGoogleProductsEnabled?: boolean | null;
    /**
     * Allows Google support to access the data in order to help troubleshoot issues.
     */
    sharingWithGoogleSupportEnabled?: boolean | null;
    /**
     * Allows Google to share the data anonymously in aggregate form with others.
     */
    sharingWithOthersEnabled?: boolean | null;
  }
  /**
   * Request message for DeleteUserLink RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest {
    /**
     * Required. Example format: accounts/1234/userLinks/5678
     */
    name?: string | null;
  }
  /**
   * A link between a GA4 property and a Display & Video 360 advertiser.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink {
    /**
     * Enables personalized advertising features with this integration. If this field is not set on create/update, it will be defaulted to true.
     */
    adsPersonalizationEnabled?: boolean | null;
    /**
     * Output only. The display name of the Display & Video 360 Advertiser.
     */
    advertiserDisplayName?: string | null;
    /**
     * Immutable. The Display & Video 360 Advertiser's advertiser ID.
     */
    advertiserId?: string | null;
    /**
     * Immutable. Enables the import of campaign data from Display & Video 360 into the GA4 property. After link creation, this can only be updated from the Display & Video 360 product. If this field is not set on create, it will be defaulted to true.
     */
    campaignDataSharingEnabled?: boolean | null;
    /**
     * Immutable. Enables the import of cost data from Display & Video 360 into the GA4 property. This can only be enabled if campaign_data_import_enabled is enabled. After link creation, this can only be updated from the Display & Video 360 product. If this field is not set on create, it will be defaulted to true.
     */
    costDataSharingEnabled?: boolean | null;
    /**
     * Output only. The resource name for this DisplayVideo360AdvertiserLink resource. Format: properties/{propertyId\}/displayVideo360AdvertiserLinks/{linkId\} Note: linkId is not the Display & Video 360 Advertiser ID
     */
    name?: string | null;
  }
  /**
   * A proposal for a link between an GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal {
    /**
     * Immutable. Enables personalized advertising features with this integration. If this field is not set on create, it will be defaulted to true.
     */
    adsPersonalizationEnabled?: boolean | null;
    /**
     * Output only. The display name of the Display & Video Advertiser. Only populated for proposals that originated from Display & Video 360.
     */
    advertiserDisplayName?: string | null;
    /**
     * Immutable. The Display & Video 360 Advertiser's advertiser ID.
     */
    advertiserId?: string | null;
    /**
     * Immutable. Enables the import of campaign data from Display & Video 360. If this field is not set on create, it will be defaulted to true.
     */
    campaignDataSharingEnabled?: boolean | null;
    /**
     * Immutable. Enables the import of cost data from Display & Video 360. This can only be enabled if campaign_data_import_enabled is enabled. If this field is not set on create, it will be defaulted to true.
     */
    costDataSharingEnabled?: boolean | null;
    /**
     * Output only. The status information for this link proposal.
     */
    linkProposalStatusDetails?: Schema$GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails;
    /**
     * Output only. The resource name for this DisplayVideo360AdvertiserLinkProposal resource. Format: properties/{propertyId\}/displayVideo360AdvertiserLinkProposals/{proposalId\} Note: proposalId is not the Display & Video 360 Advertiser ID
     */
    name?: string | null;
    /**
     * Input only. On a proposal being sent to Display & Video 360, this field must be set to the email address of an admin on the target advertiser. This is used to verify that the Google Analytics admin is aware of at least one admin on the Display & Video 360 Advertiser. This does not restrict approval of the proposal to a single user. Any admin on the Display & Video 360 Advertiser may approve the proposal.
     */
    validationEmail?: string | null;
  }
  /**
   * Singleton resource under a WebDataStream, configuring measurement of additional site interactions and content.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings {
    /**
     * If enabled, capture a file download event each time a link is clicked with a common document, compressed file, application, video, or audio extension.
     */
    fileDownloadsEnabled?: boolean | null;
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id\}/webDataStreams/{stream_id\}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
     */
    name?: string | null;
    /**
     * If enabled, capture an outbound click event each time a visitor clicks a link that leads them away from your domain.
     */
    outboundClicksEnabled?: boolean | null;
    /**
     * If enabled, capture a page view event each time the website changes the browser history state.
     */
    pageChangesEnabled?: boolean | null;
    /**
     * Output only. If enabled, capture a page view event each time a page loads.
     */
    pageLoadsEnabled?: boolean | null;
    /**
     * Output only. If enabled, capture a page view event each time a page loads or the website changes the browser history state.
     */
    pageViewsEnabled?: boolean | null;
    /**
     * If enabled, capture scroll events each time a visitor gets to the bottom of a page.
     */
    scrollsEnabled?: boolean | null;
    /**
     * Required. URL query parameters to interpret as site search parameters. Max length is 1024 characters. Must not be empty.
     */
    searchQueryParameter?: string | null;
    /**
     * If enabled, capture a view search results event each time a visitor performs a search on your site (based on a query parameter).
     */
    siteSearchEnabled?: boolean | null;
    /**
     * Indicates whether Enhanced Measurement Settings will be used to automatically measure interactions and content on this web stream. Changing this value does not affect the settings themselves, but determines whether they are respected.
     */
    streamEnabled?: boolean | null;
    /**
     * Additional URL query parameters. Max length is 1024 characters.
     */
    uriQueryParameter?: string | null;
    /**
     * If enabled, capture video play, progress, and complete events as visitors view embedded videos on your site.
     */
    videoEngagementEnabled?: boolean | null;
  }
  /**
   * A link between an GA4 property and a Firebase project.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaFirebaseLink {
    /**
     * Output only. Time when this FirebaseLink was originally created.
     */
    createTime?: string | null;
    /**
     * Output only. Example format: properties/1234/firebaseLinks/5678
     */
    name?: string | null;
    /**
     * Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number\}' Example: 'projects/1234'
     */
    project?: string | null;
  }
  /**
   * Read-only resource with the tag for sending data from a website to a WebDataStream.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag {
    /**
     * Output only. Resource name for this GlobalSiteTag resource. Format: properties/{propertyId\}/globalSiteTag
     */
    name?: string | null;
    /**
     * Immutable. JavaScript code snippet to be pasted as the first item into the head tag of every webpage to measure.
     */
    snippet?: string | null;
  }
  /**
   * A link between an GA4 property and a Google Ads account.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink {
    /**
     * Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true.
     */
    adsPersonalizationEnabled?: boolean | null;
    /**
     * Output only. If true, this link is for a Google Ads manager account.
     */
    canManageClients?: boolean | null;
    /**
     * Output only. Time when this link was originally created.
     */
    createTime?: string | null;
    /**
     * Output only. Email address of the user that created the link. An empty string will be returned if the email address can't be retrieved.
     */
    creatorEmailAddress?: string | null;
    /**
     * Immutable. Google Ads customer ID.
     */
    customerId?: string | null;
    /**
     * Output only. Format: properties/{propertyId\}/googleAdsLinks/{googleAdsLinkId\} Note: googleAdsLinkId is not the Google Ads customer ID.
     */
    name?: string | null;
    /**
     * Output only. Time when this link was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Settings values for Google Signals. This is a singleton resource.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings {
    /**
     * Output only. Terms of Service acceptance.
     */
    consent?: string | null;
    /**
     * Output only. Resource name of this setting. Format: properties/{property_id\}/googleSignalsSettings Example: "properties/1000/googleSignalsSettings"
     */
    name?: string | null;
    /**
     * Status of this setting.
     */
    state?: string | null;
  }
  /**
   * A resource message representing a Google Analytics IOS app stream.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream {
    /**
     * Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp"
     */
    bundleId?: string | null;
    /**
     * Output only. Time when this stream was originally created.
     */
    createTime?: string | null;
    /**
     * Human-readable display name for the Data Stream. The max allowed display name length is 255 UTF-16 code units.
     */
    displayName?: string | null;
    /**
     * Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated.
     */
    firebaseAppId?: string | null;
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id\}/iosAppDataStreams/{stream_id\} Example: "properties/1000/iosAppDataStreams/2000"
     */
    name?: string | null;
    /**
     * Output only. Time when stream payload fields were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Status information for a link proposal.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails {
    /**
     * Output only. The source of this proposal.
     */
    linkProposalInitiatingProduct?: string | null;
    /**
     * Output only. The state of this proposal.
     */
    linkProposalState?: string | null;
    /**
     * Output only. The email address of the user that proposed this linkage.
     */
    requestorEmail?: string | null;
  }
  /**
   * Request message for ListAccounts RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse {
    /**
     * Results that were accessible to the caller.
     */
    accounts?: Schema$GoogleAnalyticsAdminV1alphaAccount[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListAccountSummaries RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse {
    /**
     * Account summaries of all accounts the caller has access to.
     */
    accountSummaries?: Schema$GoogleAnalyticsAdminV1alphaAccountSummary[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request message for ListAndroidDataStreams RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse {
    /**
     * Results that matched the filter criteria and were accessible to the caller.
     */
    androidAppDataStreams?: Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListConversionEvents RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse {
    /**
     * The requested conversion events
     */
    conversionEvents?: Schema$GoogleAnalyticsAdminV1alphaConversionEvent[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListCustomDimensions RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse {
    /**
     * List of CustomDimensions.
     */
    customDimensions?: Schema$GoogleAnalyticsAdminV1alphaCustomDimension[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListCustomMetrics RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse {
    /**
     * List of CustomMetrics.
     */
    customMetrics?: Schema$GoogleAnalyticsAdminV1alphaCustomMetric[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListDisplayVideo360AdvertiserLinkProposals RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse {
    /**
     * List of DisplayVideo360AdvertiserLinkProposals.
     */
    displayVideo360AdvertiserLinkProposals?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListDisplayVideo360AdvertiserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse {
    /**
     * List of DisplayVideo360AdvertiserLinks.
     */
    displayVideo360AdvertiserLinks?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListFirebaseLinks RPC
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse {
    /**
     * List of FirebaseLinks. This will have at most one value.
     */
    firebaseLinks?: Schema$GoogleAnalyticsAdminV1alphaFirebaseLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListGoogleAdsLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse {
    /**
     * List of GoogleAdsLinks.
     */
    googleAdsLinks?: Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request message for ListIosAppDataStreams RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse {
    /**
     * Results that matched the filter criteria and were accessible to the caller.
     */
    iosAppDataStreams?: Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListMeasurementProtocolSecret RPC
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse {
    /**
     * A list of secrets for the parent stream specified in the request.
     */
    measurementProtocolSecrets?: Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListProperties RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Results that matched the filter criteria and were accessible to the caller.
     */
    properties?: Schema$GoogleAnalyticsAdminV1alphaProperty[];
  }
  /**
   * Response message for ListUserLinks RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of UserLinks. These will be ordered stably, but in an arbitrary order.
     */
    userLinks?: Schema$GoogleAnalyticsAdminV1alphaUserLink[];
  }
  /**
   * Request message for ListWebDataStreams RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Results that matched the filter criteria and were accessible to the caller.
     */
    webDataStreams?: Schema$GoogleAnalyticsAdminV1alphaWebDataStream[];
  }
  /**
   * A secret value used for sending hits to Measurement Protocol.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret {
    /**
     * Required. Human-readable display name for this secret.
     */
    displayName?: string | null;
    /**
     * Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     */
    name?: string | null;
    /**
     * Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement Protocol API when sending hits to this secret's parent property.
     */
    secretValue?: string | null;
  }
  /**
   * A resource message representing a Google Analytics GA4 property.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaProperty {
    /**
     * Output only. Time when the entity was originally created.
     */
    createTime?: string | null;
    /**
     * The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY"
     */
    currencyCode?: string | null;
    /**
     * Output only. If set, the time at which this property was trashed. If not set, then this property is not currently in the trash can.
     */
    deleteTime?: string | null;
    /**
     * Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units.
     */
    displayName?: string | null;
    /**
     * Output only. If set, the time at which this trashed property will be permanently deleted. If not set, then this property is not currently in the trash can and is not slated to be deleted.
     */
    expireTime?: string | null;
    /**
     * Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK
     */
    industryCategory?: string | null;
    /**
     * Output only. Resource name of this property. Format: properties/{property_id\} Example: "properties/1000"
     */
    name?: string | null;
    /**
     * Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account\} Example: "accounts/100"
     */
    parent?: string | null;
    /**
     * Output only. The Google Analytics service level that applies to this property.
     */
    serviceLevel?: string | null;
    /**
     * Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles"
     */
    timeZone?: string | null;
    /**
     * Output only. Time when entity payload fields were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A virtual resource representing metadata for an GA4 property.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaPropertySummary {
    /**
     * Display name for the property referred to in this account summary.
     */
    displayName?: string | null;
    /**
     * Resource name of property referred to by this property summary Format: properties/{property_id\} Example: "properties/1000"
     */
    property?: string | null;
  }
  /**
   * Request message for ProvisionAccountTicket RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest {
    /**
     * The account to create.
     */
    account?: Schema$GoogleAnalyticsAdminV1alphaAccount;
    /**
     * Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Developers Console as a Redirect URI
     */
    redirectUri?: string | null;
  }
  /**
   * Response message for ProvisionAccountTicket RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse {
    /**
     * The param to be passed in the ToS link.
     */
    accountTicketId?: string | null;
  }
  /**
   * Request message for SearchChangeHistoryEvents RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest {
    /**
     * Optional. If set, only return changes that match one or more of these types of actions.
     */
    action?: string[] | null;
    /**
     * Optional. If set, only return changes if they are made by a user in this list.
     */
    actorEmail?: string[] | null;
    /**
     * Optional. If set, only return changes made after this time (inclusive).
     */
    earliestChangeTime?: string | null;
    /**
     * Optional. If set, only return changes made before this time (inclusive).
     */
    latestChangeTime?: string | null;
    /**
     * Optional. The maximum number of ChangeHistoryEvent items to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number | null;
    /**
     * Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchChangeHistoryEvents` must match the call that provided the page token.
     */
    pageToken?: string | null;
    /**
     * Optional. Resource name for a child property. If set, only return changes made to this property or its child resources.
     */
    property?: string | null;
    /**
     * Optional. If set, only return changes if they are for a resource that matches at least one of these types.
     */
    resourceType?: string[] | null;
  }
  /**
   * Response message for SearchAccounts RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse {
    /**
     * Results that were accessible to the caller.
     */
    changeHistoryEvents?: Schema$GoogleAnalyticsAdminV1alphaChangeHistoryEvent[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request message for UpdateUserLink RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest {
    /**
     * Required. The user link to update.
     */
    userLink?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }
  /**
   * A resource message representing a user's permissions on an Account or Property resource.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaUserLink {
    /**
     * Roles directly assigned to this user for this account or property. Valid values: predefinedRoles/read predefinedRoles/collaborate predefinedRoles/edit predefinedRoles/manage-users Excludes roles that are inherited from a higher-level entity, group, or organization admin role. A UserLink that is updated to have an empty list of direct_roles will be deleted.
     */
    directRoles?: string[] | null;
    /**
     * Immutable. Email address of the user to link
     */
    emailAddress?: string | null;
    /**
     * Output only. Example format: properties/1234/userLinks/5678
     */
    name?: string | null;
  }
  /**
   * A resource message representing a Google Analytics web stream.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaWebDataStream {
    /**
     * Output only. Time when this stream was originally created.
     */
    createTime?: string | null;
    /**
     * Immutable. Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com"
     */
    defaultUri?: string | null;
    /**
     * Required. Human-readable display name for the Data Stream. The max allowed display name length is 100 UTF-16 code units.
     */
    displayName?: string | null;
    /**
     * Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated.
     */
    firebaseAppId?: string | null;
    /**
     * Output only. Analytics "Measurement ID", without the "G-" prefix. Example: "G-1A2BCD345E" would just be "1A2BCD345E"
     */
    measurementId?: string | null;
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id\}/webDataStreams/{stream_id\} Example: "properties/1000/webDataStreams/2000"
     */
    name?: string | null;
    /**
     * Output only. Time when stream payload fields were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$GoogleProtobufEmpty {}

  export class Resource$Accounts {
    context: APIRequestContext;
    userLinks: Resource$Accounts$Userlinks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.userLinks = new Resource$Accounts$Userlinks(this.context);
    }

    /**
     * Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks, Streams, UserLinks) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.delete({
     *     // Required. The name of the Account to soft-delete. Format: accounts/{account\} Example: "accounts/100"
     *     name: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Accounts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Accounts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single Account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.get({
     *     // Required. The name of the account to lookup. Format: accounts/{account\} Example: "accounts/100"
     *     name: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "deleted": false,
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "regionCode": "my_regionCode",
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccount>;
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccount>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccount>(
          parameters
        );
      }
    }

    /**
     * Get data sharing settings on an account. Data sharing settings are singletons.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.getDataSharingSettings({
     *     // Required. The name of the settings to lookup. Format: accounts/{account\}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
     *     name: 'accounts/my-account/dataSharingSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "sharingWithGoogleAnySalesEnabled": false,
     *   //   "sharingWithGoogleAssignedSalesEnabled": false,
     *   //   "sharingWithGoogleProductsEnabled": false,
     *   //   "sharingWithGoogleSupportEnabled": false,
     *   //   "sharingWithOthersEnabled": false
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
    getDataSharingSettings(
      params: Params$Resource$Accounts$Getdatasharingsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getDataSharingSettings(
      params?: Params$Resource$Accounts$Getdatasharingsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>;
    getDataSharingSettings(
      params: Params$Resource$Accounts$Getdatasharingsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDataSharingSettings(
      params: Params$Resource$Accounts$Getdatasharingsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
    ): void;
    getDataSharingSettings(
      params: Params$Resource$Accounts$Getdatasharingsettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
    ): void;
    getDataSharingSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
    ): void;
    getDataSharingSettings(
      paramsOrCallback?:
        | Params$Resource$Accounts$Getdatasharingsettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Getdatasharingsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Getdatasharingsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings>(
          parameters
        );
      }
    }

    /**
     * Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.list({
     *     // The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
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
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>;
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/accounts').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.patch({
     *     // Output only. Resource name of this account. Format: accounts/{account\} Example: "accounts/100"
     *     name: 'accounts/my-account',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "deleted": false,
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "regionCode": "my_regionCode",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "deleted": false,
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "regionCode": "my_regionCode",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Accounts$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccount>;
    patch(
      params: Params$Resource$Accounts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
    ): void;
    patch(
      params: Params$Resource$Accounts$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAccount>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAccount>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccount>(
          parameters
        );
      }
    }

    /**
     * Requests a ticket for creating an account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.provisionAccountTicket({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "account": {},
     *       //   "redirectUri": "my_redirectUri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountTicketId": "my_accountTicketId"
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
    provisionAccountTicket(
      params: Params$Resource$Accounts$Provisionaccountticket,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    provisionAccountTicket(
      params?: Params$Resource$Accounts$Provisionaccountticket,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>;
    provisionAccountTicket(
      params: Params$Resource$Accounts$Provisionaccountticket,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    provisionAccountTicket(
      params: Params$Resource$Accounts$Provisionaccountticket,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
    ): void;
    provisionAccountTicket(
      params: Params$Resource$Accounts$Provisionaccountticket,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
    ): void;
    provisionAccountTicket(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
    ): void;
    provisionAccountTicket(
      paramsOrCallback?:
        | Params$Resource$Accounts$Provisionaccountticket
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Provisionaccountticket;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Provisionaccountticket;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/accounts:provisionAccountTicket').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>(
          parameters
        );
      }
    }

    /**
     * Searches through all changes to an account or its children given the specified set of filters.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.searchChangeHistoryEvents({
     *     // Required. The account resource for which to return change history resources.
     *     account: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": [],
     *       //   "actorEmail": [],
     *       //   "earliestChangeTime": "my_earliestChangeTime",
     *       //   "latestChangeTime": "my_latestChangeTime",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "property": "my_property",
     *       //   "resourceType": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "changeHistoryEvents": [],
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
    searchChangeHistoryEvents(
      params: Params$Resource$Accounts$Searchchangehistoryevents,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchChangeHistoryEvents(
      params?: Params$Resource$Accounts$Searchchangehistoryevents,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>;
    searchChangeHistoryEvents(
      params: Params$Resource$Accounts$Searchchangehistoryevents,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchChangeHistoryEvents(
      params: Params$Resource$Accounts$Searchchangehistoryevents,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
    ): void;
    searchChangeHistoryEvents(
      params: Params$Resource$Accounts$Searchchangehistoryevents,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
    ): void;
    searchChangeHistoryEvents(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
    ): void;
    searchChangeHistoryEvents(
      paramsOrCallback?:
        | Params$Resource$Accounts$Searchchangehistoryevents
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Searchchangehistoryevents;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Searchchangehistoryevents;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+account}:searchChangeHistoryEvents'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['account'],
        pathParams: ['account'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Delete extends StandardParameters {
    /**
     * Required. The name of the Account to soft-delete. Format: accounts/{account\} Example: "accounts/100"
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Required. The name of the account to lookup. Format: accounts/{account\} Example: "accounts/100"
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Getdatasharingsettings
    extends StandardParameters {
    /**
     * Required. The name of the settings to lookup. Format: accounts/{account\}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Accounts$Patch extends StandardParameters {
    /**
     * Output only. Resource name of this account. Format: accounts/{account\} Example: "accounts/100"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAccount;
  }
  export interface Params$Resource$Accounts$Provisionaccountticket
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest;
  }
  export interface Params$Resource$Accounts$Searchchangehistoryevents
    extends StandardParameters {
    /**
     * Required. The account resource for which to return change history resources.
     */
    account?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest;
  }

  export class Resource$Accounts$Userlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.audit({
     *     // Required. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userLinks": []
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
    audit(
      params: Params$Resource$Accounts$Userlinks$Audit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    audit(
      params?: Params$Resource$Accounts$Userlinks$Audit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>;
    audit(
      params: Params$Resource$Accounts$Userlinks$Audit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    audit(
      params: Params$Resource$Accounts$Userlinks$Audit,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
    ): void;
    audit(
      params: Params$Resource$Accounts$Userlinks$Audit,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
    ): void;
    audit(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
    ): void;
    audit(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Audit
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Audit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Audit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:audit').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.batchCreate({
     *     // Required. The account or property that all user links in the request are for. This field is required. The parent field in the CreateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "notifyNewUsers": false,
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "userLinks": []
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
    batchCreate(
      params: Params$Resource$Accounts$Userlinks$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Accounts$Userlinks$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>;
    batchCreate(
      params: Params$Resource$Accounts$Userlinks$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Accounts$Userlinks$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Accounts$Userlinks$Batchcreate,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Batchcreate
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchCreate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.batchDelete({
     *     // Required. The account or property that all user links in the request are for. The parent of all values for user link names to delete must match this field. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    batchDelete(
      params: Params$Resource$Accounts$Userlinks$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Accounts$Userlinks$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    batchDelete(
      params: Params$Resource$Accounts$Userlinks$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Accounts$Userlinks$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      params: Params$Resource$Accounts$Userlinks$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Batchdelete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchDelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.batchGet({
     *     // Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId\}/userLinks/{userLinkId\}
     *     names: 'placeholder-value',
     *     // Required. The account or property that all user links in the request are for. The parent of all provided values for the 'names' field must match this field. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "userLinks": []
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
    batchGet(
      params: Params$Resource$Accounts$Userlinks$Batchget,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchGet(
      params?: Params$Resource$Accounts$Userlinks$Batchget,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>;
    batchGet(
      params: Params$Resource$Accounts$Userlinks$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Accounts$Userlinks$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
    ): void;
    batchGet(
      params: Params$Resource$Accounts$Userlinks$Batchget,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Batchget
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchGet').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.batchUpdate({
     *     // Required. The account or property that all user links in the request are for. The parent field in the UpdateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "userLinks": []
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
    batchUpdate(
      params: Params$Resource$Accounts$Userlinks$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Accounts$Userlinks$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>;
    batchUpdate(
      params: Params$Resource$Accounts$Userlinks$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Accounts$Userlinks$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Accounts$Userlinks$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Batchupdate
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.create({
     *     // Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
     *     notifyNewUser: 'placeholder-value',
     *     // Required. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "directRoles": [],
     *       //   "emailAddress": "my_emailAddress",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directRoles": [],
     *   //   "emailAddress": "my_emailAddress",
     *   //   "name": "my_name"
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
    create(
      params: Params$Resource$Accounts$Userlinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Userlinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>;
    create(
      params: Params$Resource$Accounts$Userlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Userlinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    create(
      params: Params$Resource$Accounts$Userlinks$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }

    /**
     * Deletes a user link on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.delete({
     *     // Required. Example format: accounts/1234/userLinks/5678
     *     name: 'accounts/my-account/userLinks/my-userLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Accounts$Userlinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Userlinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Accounts$Userlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Userlinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Userlinks$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets information about a user's link to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.get({
     *     // Required. Example format: accounts/1234/userLinks/5678
     *     name: 'accounts/my-account/userLinks/my-userLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directRoles": [],
     *   //   "emailAddress": "my_emailAddress",
     *   //   "name": "my_name"
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
    get(
      params: Params$Resource$Accounts$Userlinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Userlinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>;
    get(
      params: Params$Resource$Accounts$Userlinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Userlinks$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    get(
      params: Params$Resource$Accounts$Userlinks$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }

    /**
     * Lists all user links on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.list({
     *     // The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 200 user links will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLinks` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: accounts/1234
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userLinks": []
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
      params: Params$Resource$Accounts$Userlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Userlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>;
    list(
      params: Params$Resource$Accounts$Userlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Userlinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Userlinks$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a user link on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.patch({
     *     // Output only. Example format: properties/1234/userLinks/5678
     *     name: 'accounts/my-account/userLinks/my-userLink',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "directRoles": [],
     *       //   "emailAddress": "my_emailAddress",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directRoles": [],
     *   //   "emailAddress": "my_emailAddress",
     *   //   "name": "my_name"
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
    patch(
      params: Params$Resource$Accounts$Userlinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Userlinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>;
    patch(
      params: Params$Resource$Accounts$Userlinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Userlinks$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    patch(
      params: Params$Resource$Accounts$Userlinks$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Userlinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Userlinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Userlinks$Audit
    extends StandardParameters {
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksRequest;
  }
  export interface Params$Resource$Accounts$Userlinks$Batchcreate
    extends StandardParameters {
    /**
     * Required. The account or property that all user links in the request are for. This field is required. The parent field in the CreateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest;
  }
  export interface Params$Resource$Accounts$Userlinks$Batchdelete
    extends StandardParameters {
    /**
     * Required. The account or property that all user links in the request are for. The parent of all values for user link names to delete must match this field. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest;
  }
  export interface Params$Resource$Accounts$Userlinks$Batchget
    extends StandardParameters {
    /**
     * Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId\}/userLinks/{userLinkId\}
     */
    names?: string[];
    /**
     * Required. The account or property that all user links in the request are for. The parent of all provided values for the 'names' field must match this field. Example format: accounts/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Userlinks$Batchupdate
    extends StandardParameters {
    /**
     * Required. The account or property that all user links in the request are for. The parent field in the UpdateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest;
  }
  export interface Params$Resource$Accounts$Userlinks$Create
    extends StandardParameters {
    /**
     * Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
     */
    notifyNewUser?: boolean;
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }
  export interface Params$Resource$Accounts$Userlinks$Delete
    extends StandardParameters {
    /**
     * Required. Example format: accounts/1234/userLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Userlinks$Get
    extends StandardParameters {
    /**
     * Required. Example format: accounts/1234/userLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Userlinks$List
    extends StandardParameters {
    /**
     * The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 200 user links will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Userlinks$Patch
    extends StandardParameters {
    /**
     * Output only. Example format: properties/1234/userLinks/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }

  export class Resource$Accountsummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns summaries of all accounts accessible by the caller.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accountSummaries.list({
     *     // The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountSummaries": [],
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
      params: Params$Resource$Accountsummaries$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accountsummaries$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>;
    list(
      params: Params$Resource$Accountsummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accountsummaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
    ): void;
    list(
      params: Params$Resource$Accountsummaries$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accountsummaries$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountsummaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountsummaries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/accountSummaries').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accountsummaries$List
    extends StandardParameters {
    /**
     * The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
     */
    pageToken?: string;
  }

  export class Resource$Properties {
    context: APIRequestContext;
    androidAppDataStreams: Resource$Properties$Androidappdatastreams;
    conversionEvents: Resource$Properties$Conversionevents;
    customDimensions: Resource$Properties$Customdimensions;
    customMetrics: Resource$Properties$Custommetrics;
    displayVideo360AdvertiserLinkProposals: Resource$Properties$Displayvideo360advertiserlinkproposals;
    displayVideo360AdvertiserLinks: Resource$Properties$Displayvideo360advertiserlinks;
    firebaseLinks: Resource$Properties$Firebaselinks;
    googleAdsLinks: Resource$Properties$Googleadslinks;
    iosAppDataStreams: Resource$Properties$Iosappdatastreams;
    userLinks: Resource$Properties$Userlinks;
    webDataStreams: Resource$Properties$Webdatastreams;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.androidAppDataStreams =
        new Resource$Properties$Androidappdatastreams(this.context);
      this.conversionEvents = new Resource$Properties$Conversionevents(
        this.context
      );
      this.customDimensions = new Resource$Properties$Customdimensions(
        this.context
      );
      this.customMetrics = new Resource$Properties$Custommetrics(this.context);
      this.displayVideo360AdvertiserLinkProposals =
        new Resource$Properties$Displayvideo360advertiserlinkproposals(
          this.context
        );
      this.displayVideo360AdvertiserLinks =
        new Resource$Properties$Displayvideo360advertiserlinks(this.context);
      this.firebaseLinks = new Resource$Properties$Firebaselinks(this.context);
      this.googleAdsLinks = new Resource$Properties$Googleadslinks(
        this.context
      );
      this.iosAppDataStreams = new Resource$Properties$Iosappdatastreams(
        this.context
      );
      this.userLinks = new Resource$Properties$Userlinks(this.context);
      this.webDataStreams = new Resource$Properties$Webdatastreams(
        this.context
      );
    }

    /**
     * Creates an "GA4" property with the specified location and attributes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "currencyCode": "my_currencyCode",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "displayName": "my_displayName",
     *       //   "expireTime": "my_expireTime",
     *       //   "industryCategory": "my_industryCategory",
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
     *       //   "serviceLevel": "my_serviceLevel",
     *       //   "timeZone": "my_timeZone",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "currencyCode": "my_currencyCode",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "expireTime": "my_expireTime",
     *   //   "industryCategory": "my_industryCategory",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "serviceLevel": "my_serviceLevel",
     *   //   "timeZone": "my_timeZone",
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Properties$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>;
    create(
      params: Params$Resource$Properties$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    create(
      params: Params$Resource$Properties$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/properties').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters
        );
      }
    }

    /**
     * Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams, UserLinks) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found, or is not an GA4 Property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.delete({
     *     // Required. The name of the Property to soft-delete. Format: properties/{property_id\} Example: "properties/1000"
     *     name: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "currencyCode": "my_currencyCode",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "expireTime": "my_expireTime",
     *   //   "industryCategory": "my_industryCategory",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "serviceLevel": "my_serviceLevel",
     *   //   "timeZone": "my_timeZone",
     *   //   "updateTime": "my_updateTime"
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
    delete(
      params: Params$Resource$Properties$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>;
    delete(
      params: Params$Resource$Properties$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    delete(
      params: Params$Resource$Properties$Delete,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Delete
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters
        );
      }
    }

    /**
     * Lookup for a single "GA4" Property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.get({
     *     // Required. The name of the property to lookup. Format: properties/{property_id\} Example: "properties/1000"
     *     name: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "currencyCode": "my_currencyCode",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "expireTime": "my_expireTime",
     *   //   "industryCategory": "my_industryCategory",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "serviceLevel": "my_serviceLevel",
     *   //   "timeZone": "my_timeZone",
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Properties$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>;
    get(
      params: Params$Resource$Properties$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    get(
      params: Params$Resource$Properties$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Properties$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters
        );
      }
    }

    /**
     * Lookup for Google Signals settings for a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.getGoogleSignalsSettings({
     *     // Required. The name of the google signals settings to retrieve. Format: properties/{property\}/googleSignalsSettings
     *     name: 'properties/my-propertie/googleSignalsSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "consent": "my_consent",
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
    getGoogleSignalsSettings(
      params: Params$Resource$Properties$Getgooglesignalssettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getGoogleSignalsSettings(
      params?: Params$Resource$Properties$Getgooglesignalssettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>;
    getGoogleSignalsSettings(
      params: Params$Resource$Properties$Getgooglesignalssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getGoogleSignalsSettings(
      params: Params$Resource$Properties$Getgooglesignalssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
    ): void;
    getGoogleSignalsSettings(
      params: Params$Resource$Properties$Getgooglesignalssettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
    ): void;
    getGoogleSignalsSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
    ): void;
    getGoogleSignalsSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Getgooglesignalssettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Getgooglesignalssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Getgooglesignalssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>(
          parameters
        );
      }
    }

    /**
     * Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.list({
     *     // Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```
     *     filter: 'placeholder-value',
     *     // The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "properties": []
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
      params: Params$Resource$Properties$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>;
    list(
      params: Params$Resource$Properties$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
    ): void;
    list(
      params: Params$Resource$Properties$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Properties$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/properties').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.patch({
     *     // Output only. Resource name of this property. Format: properties/{property_id\} Example: "properties/1000"
     *     name: 'properties/my-propertie',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "currencyCode": "my_currencyCode",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "displayName": "my_displayName",
     *       //   "expireTime": "my_expireTime",
     *       //   "industryCategory": "my_industryCategory",
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
     *       //   "serviceLevel": "my_serviceLevel",
     *       //   "timeZone": "my_timeZone",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "currencyCode": "my_currencyCode",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "expireTime": "my_expireTime",
     *   //   "industryCategory": "my_industryCategory",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "serviceLevel": "my_serviceLevel",
     *   //   "timeZone": "my_timeZone",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Properties$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>;
    patch(
      params: Params$Resource$Properties$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    patch(
      params: Params$Resource$Properties$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaProperty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaProperty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Properties$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters
        );
      }
    }

    /**
     * Updates Google Signals settings for a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.updateGoogleSignalsSettings({
     *     // Output only. Resource name of this setting. Format: properties/{property_id\}/googleSignalsSettings Example: "properties/1000/googleSignalsSettings"
     *     name: 'properties/my-propertie/googleSignalsSettings',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "consent": "my_consent",
     *       //   "name": "my_name",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "consent": "my_consent",
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
    updateGoogleSignalsSettings(
      params: Params$Resource$Properties$Updategooglesignalssettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateGoogleSignalsSettings(
      params?: Params$Resource$Properties$Updategooglesignalssettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>;
    updateGoogleSignalsSettings(
      params: Params$Resource$Properties$Updategooglesignalssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateGoogleSignalsSettings(
      params: Params$Resource$Properties$Updategooglesignalssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
    ): void;
    updateGoogleSignalsSettings(
      params: Params$Resource$Properties$Updategooglesignalssettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
    ): void;
    updateGoogleSignalsSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
    ): void;
    updateGoogleSignalsSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Updategooglesignalssettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Updategooglesignalssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Updategooglesignalssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaProperty;
  }
  export interface Params$Resource$Properties$Delete
    extends StandardParameters {
    /**
     * Required. The name of the Property to soft-delete. Format: properties/{property_id\} Example: "properties/1000"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Get extends StandardParameters {
    /**
     * Required. The name of the property to lookup. Format: properties/{property_id\} Example: "properties/1000"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Getgooglesignalssettings
    extends StandardParameters {
    /**
     * Required. The name of the google signals settings to retrieve. Format: properties/{property\}/googleSignalsSettings
     */
    name?: string;
  }
  export interface Params$Resource$Properties$List extends StandardParameters {
    /**
     * Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```
     */
    filter?: string;
    /**
     * The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Properties$Patch extends StandardParameters {
    /**
     * Output only. Resource name of this property. Format: properties/{property_id\} Example: "properties/1000"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaProperty;
  }
  export interface Params$Resource$Properties$Updategooglesignalssettings
    extends StandardParameters {
    /**
     * Output only. Resource name of this setting. Format: properties/{property_id\}/googleSignalsSettings Example: "properties/1000/googleSignalsSettings"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaGoogleSignalsSettings;
  }

  export class Resource$Properties$Androidappdatastreams {
    context: APIRequestContext;
    measurementProtocolSecrets: Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.measurementProtocolSecrets =
        new Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets(
          this.context
        );
    }

    /**
     * Deletes an android app stream on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.androidAppDataStreams.delete({
     *     // Required. The name of the android app data stream to delete. Format: properties/{property_id\}/androidAppDataStreams/{stream_id\} Example: "properties/123/androidAppDataStreams/456"
     *     name: 'properties/my-propertie/androidAppDataStreams/my-androidAppDataStream',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Properties$Androidappdatastreams$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Androidappdatastreams$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Androidappdatastreams$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Androidappdatastreams$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Androidappdatastreams$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Androidappdatastreams$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Androidappdatastreams$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single AndroidAppDataStream
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.androidAppDataStreams.get({
     *     // Required. The name of the android app data stream to lookup. Format: properties/{property_id\}/androidAppDataStreams/{stream_id\} Example: "properties/123/androidAppDataStreams/456"
     *     name: 'properties/my-propertie/androidAppDataStreams/my-androidAppDataStream',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "firebaseAppId": "my_firebaseAppId",
     *   //   "name": "my_name",
     *   //   "packageName": "my_packageName",
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Properties$Androidappdatastreams$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Androidappdatastreams$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>;
    get(
      params: Params$Resource$Properties$Androidappdatastreams$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Androidappdatastreams$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
    ): void;
    get(
      params: Params$Resource$Properties$Androidappdatastreams$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Androidappdatastreams$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Androidappdatastreams$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>(
          parameters
        );
      }
    }

    /**
     * Returns child android app streams under the specified parent property. Android app streams will be excluded if the caller does not have access. Returns an empty list if no relevant android app streams are found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.androidAppDataStreams.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAndroidAppDataStreams` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent property. For example, to limit results to app streams under the property with Id 123: "properties/123"
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidAppDataStreams": [],
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
      params: Params$Resource$Properties$Androidappdatastreams$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Androidappdatastreams$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse>;
    list(
      params: Params$Resource$Properties$Androidappdatastreams$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Androidappdatastreams$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Androidappdatastreams$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Androidappdatastreams$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Androidappdatastreams$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/androidAppDataStreams').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an android app stream on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.androidAppDataStreams.patch({
     *     // Output only. Resource name of this Data Stream. Format: properties/{property_id\}/androidAppDataStreams/{stream_id\} Example: "properties/1000/androidAppDataStreams/2000"
     *     name: 'properties/my-propertie/androidAppDataStreams/my-androidAppDataStream',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "firebaseAppId": "my_firebaseAppId",
     *       //   "name": "my_name",
     *       //   "packageName": "my_packageName",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "firebaseAppId": "my_firebaseAppId",
     *   //   "name": "my_name",
     *   //   "packageName": "my_packageName",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Properties$Androidappdatastreams$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Androidappdatastreams$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>;
    patch(
      params: Params$Resource$Properties$Androidappdatastreams$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Androidappdatastreams$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
    ): void;
    patch(
      params: Params$Resource$Properties$Androidappdatastreams$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Androidappdatastreams$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Androidappdatastreams$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Androidappdatastreams$Delete
    extends StandardParameters {
    /**
     * Required. The name of the android app data stream to delete. Format: properties/{property_id\}/androidAppDataStreams/{stream_id\} Example: "properties/123/androidAppDataStreams/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Androidappdatastreams$Get
    extends StandardParameters {
    /**
     * Required. The name of the android app data stream to lookup. Format: properties/{property_id\}/androidAppDataStreams/{stream_id\} Example: "properties/123/androidAppDataStreams/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Androidappdatastreams$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAndroidAppDataStreams` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent property. For example, to limit results to app streams under the property with Id 123: "properties/123"
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Androidappdatastreams$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id\}/androidAppDataStreams/{stream_id\} Example: "properties/1000/androidAppDataStreams/2000"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream;
  }

  export class Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a measurement protocol secret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.androidAppDataStreams.measurementProtocolSecrets.create(
     *       {
     *         // Required. The parent resource where this secret will be created. Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent. Format: properties/{property\}/webDataStreams/{webDataStream\}
     *         parent:
     *           'properties/my-propertie/androidAppDataStreams/my-androidAppDataStream',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "displayName": "my_displayName",
     *           //   "name": "my_name",
     *           //   "secretValue": "my_secretValue"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "secretValue": "my_secretValue"
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
    create(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;
    create(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    create(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/measurementProtocolSecrets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters
        );
      }
    }

    /**
     * Deletes target MeasurementProtocolSecret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.androidAppDataStreams.measurementProtocolSecrets.delete(
     *       {
     *         // Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\} Note: Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent.
     *         name: 'properties/my-propertie/androidAppDataStreams/my-androidAppDataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single "GA4" MeasurementProtocolSecret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.androidAppDataStreams.measurementProtocolSecrets.get(
     *       {
     *         // Required. The name of the measurement protocol secret to lookup. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\} Note: Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent.
     *         name: 'properties/my-propertie/androidAppDataStreams/my-androidAppDataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "secretValue": "my_secretValue"
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
    get(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;
    get(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    get(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters
        );
      }
    }

    /**
     * Returns child MeasurementProtocolSecrets under the specified parent Property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.androidAppDataStreams.measurementProtocolSecrets.list(
     *       {
     *         // The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
     *         pageSize: 'placeholder-value',
     *         // A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. The resource name of the parent stream. Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets
     *         parent:
     *           'properties/my-propertie/androidAppDataStreams/my-androidAppDataStream',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "measurementProtocolSecrets": [],
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
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>;
    list(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/measurementProtocolSecrets'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a measurement protocol secret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.androidAppDataStreams.measurementProtocolSecrets.patch(
     *       {
     *         // Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     *         name: 'properties/my-propertie/androidAppDataStreams/my-androidAppDataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
     *         // The list of fields to be updated. Omitted fields will not be updated.
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "displayName": "my_displayName",
     *           //   "name": "my_name",
     *           //   "secretValue": "my_secretValue"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "secretValue": "my_secretValue"
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
    patch(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;
    patch(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    patch(
      params: Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this secret will be created. Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent. Format: properties/{property\}/webDataStreams/{webDataStream\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;
  }
  export interface Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Delete
    extends StandardParameters {
    /**
     * Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\} Note: Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent.
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Get
    extends StandardParameters {
    /**
     * Required. The name of the measurement protocol secret to lookup. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\} Note: Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent.
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent stream. Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Androidappdatastreams$Measurementprotocolsecrets$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     */
    name?: string;
    /**
     * The list of fields to be updated. Omitted fields will not be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;
  }

  export class Resource$Properties$Conversionevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a conversion event with the specified attributes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.conversionEvents.create({
     *     // Required. The resource name of the parent property where this conversion event will be created. Format: properties/123
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "custom": false,
     *       //   "deletable": false,
     *       //   "eventName": "my_eventName",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "custom": false,
     *   //   "deletable": false,
     *   //   "eventName": "my_eventName",
     *   //   "name": "my_name"
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
    create(
      params: Params$Resource$Properties$Conversionevents$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Conversionevents$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>;
    create(
      params: Params$Resource$Properties$Conversionevents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Conversionevents$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
    ): void;
    create(
      params: Params$Resource$Properties$Conversionevents$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Conversionevents$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Conversionevents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Conversionevents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/conversionEvents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>(
          parameters
        );
      }
    }

    /**
     * Deletes a conversion event in a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.conversionEvents.delete({
     *     // Required. The resource name of the conversion event to delete. Format: properties/{property\}/conversionEvents/{conversion_event\} Example: "properties/123/conversionEvents/456"
     *     name: 'properties/my-propertie/conversionEvents/my-conversionEvent',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Properties$Conversionevents$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Conversionevents$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Conversionevents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Conversionevents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Conversionevents$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Conversionevents$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Conversionevents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Conversionevents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Retrieve a single conversion event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.conversionEvents.get({
     *     // Required. The resource name of the conversion event to retrieve. Format: properties/{property\}/conversionEvents/{conversion_event\} Example: "properties/123/conversionEvents/456"
     *     name: 'properties/my-propertie/conversionEvents/my-conversionEvent',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "custom": false,
     *   //   "deletable": false,
     *   //   "eventName": "my_eventName",
     *   //   "name": "my_name"
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
    get(
      params: Params$Resource$Properties$Conversionevents$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Conversionevents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>;
    get(
      params: Params$Resource$Properties$Conversionevents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Conversionevents$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
    ): void;
    get(
      params: Params$Resource$Properties$Conversionevents$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Conversionevents$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Conversionevents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Conversionevents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaConversionEvent>(
          parameters
        );
      }
    }

    /**
     * Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.conversionEvents.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent property. Example: 'properties/123'
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "conversionEvents": [],
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
      params: Params$Resource$Properties$Conversionevents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Conversionevents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>;
    list(
      params: Params$Resource$Properties$Conversionevents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Conversionevents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Conversionevents$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Conversionevents$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Conversionevents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Conversionevents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/conversionEvents').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListConversionEventsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Conversionevents$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the parent property where this conversion event will be created. Format: properties/123
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaConversionEvent;
  }
  export interface Params$Resource$Properties$Conversionevents$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the conversion event to delete. Format: properties/{property\}/conversionEvents/{conversion_event\} Example: "properties/123/conversionEvents/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Conversionevents$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the conversion event to retrieve. Format: properties/{property\}/conversionEvents/{conversion_event\} Example: "properties/123/conversionEvents/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Conversionevents$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent property. Example: 'properties/123'
     */
    parent?: string;
  }

  export class Resource$Properties$Customdimensions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Archives a CustomDimension on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customDimensions.archive({
     *     // Required. The name of the CustomDimension to archive. Example format: properties/1234/customDimensions/5678
     *     name: 'properties/my-propertie/customDimensions/my-customDimension',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    archive(
      params: Params$Resource$Properties$Customdimensions$Archive,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    archive(
      params?: Params$Resource$Properties$Customdimensions$Archive,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    archive(
      params: Params$Resource$Properties$Customdimensions$Archive,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    archive(
      params: Params$Resource$Properties$Customdimensions$Archive,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    archive(
      params: Params$Resource$Properties$Customdimensions$Archive,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    archive(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    archive(
      paramsOrCallback?:
        | Params$Resource$Properties$Customdimensions$Archive
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Customdimensions$Archive;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Customdimensions$Archive;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:archive').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Creates a CustomDimension.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customDimensions.create({
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "disallowAdsPersonalization": false,
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "parameterName": "my_parameterName",
     *       //   "scope": "my_scope"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "disallowAdsPersonalization": false,
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "parameterName": "my_parameterName",
     *   //   "scope": "my_scope"
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
    create(
      params: Params$Resource$Properties$Customdimensions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Customdimensions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>;
    create(
      params: Params$Resource$Properties$Customdimensions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Customdimensions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    create(
      params: Params$Resource$Properties$Customdimensions$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Customdimensions$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Customdimensions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Customdimensions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/customDimensions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>(
          parameters
        );
      }
    }

    /**
     * Lookup for a single CustomDimension.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customDimensions.get({
     *     // Required. The name of the CustomDimension to get. Example format: properties/1234/customDimensions/5678
     *     name: 'properties/my-propertie/customDimensions/my-customDimension',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "disallowAdsPersonalization": false,
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "parameterName": "my_parameterName",
     *   //   "scope": "my_scope"
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
    get(
      params: Params$Resource$Properties$Customdimensions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Customdimensions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>;
    get(
      params: Params$Resource$Properties$Customdimensions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Customdimensions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    get(
      params: Params$Resource$Properties$Customdimensions$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Customdimensions$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Customdimensions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Customdimensions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>(
          parameters
        );
      }
    }

    /**
     * Lists CustomDimensions on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customDimensions.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customDimensions": [],
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
      params: Params$Resource$Properties$Customdimensions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Customdimensions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>;
    list(
      params: Params$Resource$Properties$Customdimensions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Customdimensions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Customdimensions$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Customdimensions$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Customdimensions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Customdimensions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/customDimensions').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a CustomDimension on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customDimensions.patch({
     *     // Output only. Resource name for this CustomDimension resource. Format: properties/{property\}/customDimensions/{customDimension\}
     *     name: 'properties/my-propertie/customDimensions/my-customDimension',
     *     // Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "disallowAdsPersonalization": false,
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "parameterName": "my_parameterName",
     *       //   "scope": "my_scope"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "disallowAdsPersonalization": false,
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "parameterName": "my_parameterName",
     *   //   "scope": "my_scope"
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
    patch(
      params: Params$Resource$Properties$Customdimensions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Customdimensions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>;
    patch(
      params: Params$Resource$Properties$Customdimensions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Customdimensions$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    patch(
      params: Params$Resource$Properties$Customdimensions$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Customdimensions$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Customdimensions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Customdimensions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomDimension>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Customdimensions$Archive
    extends StandardParameters {
    /**
     * Required. The name of the CustomDimension to archive. Example format: properties/1234/customDimensions/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaArchiveCustomDimensionRequest;
  }
  export interface Params$Resource$Properties$Customdimensions$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaCustomDimension;
  }
  export interface Params$Resource$Properties$Customdimensions$Get
    extends StandardParameters {
    /**
     * Required. The name of the CustomDimension to get. Example format: properties/1234/customDimensions/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Customdimensions$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Customdimensions$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name for this CustomDimension resource. Format: properties/{property\}/customDimensions/{customDimension\}
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaCustomDimension;
  }

  export class Resource$Properties$Custommetrics {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Archives a CustomMetric on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customMetrics.archive({
     *     // Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678
     *     name: 'properties/my-propertie/customMetrics/my-customMetric',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    archive(
      params: Params$Resource$Properties$Custommetrics$Archive,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    archive(
      params?: Params$Resource$Properties$Custommetrics$Archive,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    archive(
      params: Params$Resource$Properties$Custommetrics$Archive,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    archive(
      params: Params$Resource$Properties$Custommetrics$Archive,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    archive(
      params: Params$Resource$Properties$Custommetrics$Archive,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    archive(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    archive(
      paramsOrCallback?:
        | Params$Resource$Properties$Custommetrics$Archive
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Custommetrics$Archive;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Custommetrics$Archive;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:archive').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Creates a CustomMetric.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customMetrics.create({
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "measurementUnit": "my_measurementUnit",
     *       //   "name": "my_name",
     *       //   "parameterName": "my_parameterName",
     *       //   "scope": "my_scope"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "measurementUnit": "my_measurementUnit",
     *   //   "name": "my_name",
     *   //   "parameterName": "my_parameterName",
     *   //   "scope": "my_scope"
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
    create(
      params: Params$Resource$Properties$Custommetrics$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Custommetrics$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>;
    create(
      params: Params$Resource$Properties$Custommetrics$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Custommetrics$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    create(
      params: Params$Resource$Properties$Custommetrics$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Custommetrics$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Custommetrics$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Custommetrics$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/customMetrics').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>(
          parameters
        );
      }
    }

    /**
     * Lookup for a single CustomMetric.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customMetrics.get({
     *     // Required. The name of the CustomMetric to get. Example format: properties/1234/customMetrics/5678
     *     name: 'properties/my-propertie/customMetrics/my-customMetric',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "measurementUnit": "my_measurementUnit",
     *   //   "name": "my_name",
     *   //   "parameterName": "my_parameterName",
     *   //   "scope": "my_scope"
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
    get(
      params: Params$Resource$Properties$Custommetrics$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Custommetrics$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>;
    get(
      params: Params$Resource$Properties$Custommetrics$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Custommetrics$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    get(
      params: Params$Resource$Properties$Custommetrics$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Custommetrics$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Custommetrics$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Custommetrics$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>(
          parameters
        );
      }
    }

    /**
     * Lists CustomMetrics on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customMetrics.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customMetrics": [],
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
      params: Params$Resource$Properties$Custommetrics$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Custommetrics$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>;
    list(
      params: Params$Resource$Properties$Custommetrics$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Custommetrics$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Custommetrics$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Custommetrics$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Custommetrics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Custommetrics$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/customMetrics').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a CustomMetric on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.customMetrics.patch({
     *     // Output only. Resource name for this CustomMetric resource. Format: properties/{property\}/customMetrics/{customMetric\}
     *     name: 'properties/my-propertie/customMetrics/my-customMetric',
     *     // Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "measurementUnit": "my_measurementUnit",
     *       //   "name": "my_name",
     *       //   "parameterName": "my_parameterName",
     *       //   "scope": "my_scope"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "measurementUnit": "my_measurementUnit",
     *   //   "name": "my_name",
     *   //   "parameterName": "my_parameterName",
     *   //   "scope": "my_scope"
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
    patch(
      params: Params$Resource$Properties$Custommetrics$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Custommetrics$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>;
    patch(
      params: Params$Resource$Properties$Custommetrics$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Custommetrics$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    patch(
      params: Params$Resource$Properties$Custommetrics$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Custommetrics$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Custommetrics$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Custommetrics$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaCustomMetric>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Custommetrics$Archive
    extends StandardParameters {
    /**
     * Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaArchiveCustomMetricRequest;
  }
  export interface Params$Resource$Properties$Custommetrics$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaCustomMetric;
  }
  export interface Params$Resource$Properties$Custommetrics$Get
    extends StandardParameters {
    /**
     * Required. The name of the CustomMetric to get. Example format: properties/1234/customMetrics/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Custommetrics$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Custommetrics$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name for this CustomMetric resource. Format: properties/{property\}/customMetrics/{customMetric\}
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaCustomMetric;
  }

  export class Resource$Properties$Displayvideo360advertiserlinkproposals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinkProposals.approve(
     *       {
     *         // Required. The name of the DisplayVideo360AdvertiserLinkProposal to approve. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     *         name: 'properties/my-propertie/displayVideo360AdvertiserLinkProposals/my-displayVideo360AdvertiserLinkProposal',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayVideo360AdvertiserLink": {}
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
    approve(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    approve(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>;
    approve(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    approve(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
    ): void;
    approve(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
    ): void;
    approve(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
    ): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:approve').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>(
          parameters
        );
      }
    }

    /**
     * Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinkProposals.cancel(
     *       {
     *         // Required. The name of the DisplayVideo360AdvertiserLinkProposal to cancel. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     *         name: 'properties/my-propertie/displayVideo360AdvertiserLinkProposals/my-displayVideo360AdvertiserLinkProposal',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
     *   //   "linkProposalStatusDetails": {},
     *   //   "name": "my_name",
     *   //   "validationEmail": "my_validationEmail"
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
    cancel(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>;
    cancel(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    cancel(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    cancel(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:cancel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(
          parameters
        );
      }
    }

    /**
     * Creates a DisplayVideo360AdvertiserLinkProposal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinkProposals.create(
     *       {
     *         // Required. Example format: properties/1234
     *         parent: 'properties/my-propertie',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "adsPersonalizationEnabled": false,
     *           //   "advertiserDisplayName": "my_advertiserDisplayName",
     *           //   "advertiserId": "my_advertiserId",
     *           //   "campaignDataSharingEnabled": false,
     *           //   "costDataSharingEnabled": false,
     *           //   "linkProposalStatusDetails": {},
     *           //   "name": "my_name",
     *           //   "validationEmail": "my_validationEmail"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
     *   //   "linkProposalStatusDetails": {},
     *   //   "name": "my_name",
     *   //   "validationEmail": "my_validationEmail"
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
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>;
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha/{+parent}/displayVideo360AdvertiserLinkProposals'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(
          parameters
        );
      }
    }

    /**
     * Deletes a DisplayVideo360AdvertiserLinkProposal on a property. This can only be used on cancelled proposals.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinkProposals.delete(
     *       {
     *         // Required. The name of the DisplayVideo360AdvertiserLinkProposal to delete. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     *         name: 'properties/my-propertie/displayVideo360AdvertiserLinkProposals/my-displayVideo360AdvertiserLinkProposal',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single DisplayVideo360AdvertiserLinkProposal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinkProposals.get({
     *       // Required. The name of the DisplayVideo360AdvertiserLinkProposal to get. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     *       name: 'properties/my-propertie/displayVideo360AdvertiserLinkProposals/my-displayVideo360AdvertiserLinkProposal',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
     *   //   "linkProposalStatusDetails": {},
     *   //   "name": "my_name",
     *   //   "validationEmail": "my_validationEmail"
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
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>;
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(
          parameters
        );
      }
    }

    /**
     * Lists DisplayVideo360AdvertiserLinkProposals on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinkProposals.list(
     *       {
     *         // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *         pageSize: 'placeholder-value',
     *         // A page token, received from a previous `ListDisplayVideo360AdvertiserLinkProposals` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinkProposals` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. Example format: properties/1234
     *         parent: 'properties/my-propertie',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayVideo360AdvertiserLinkProposals": [],
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
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>;
    list(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha/{+parent}/displayVideo360AdvertiserLinkProposals'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Approve
    extends StandardParameters {
    /**
     * Required. The name of the DisplayVideo360AdvertiserLinkProposal to approve. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalRequest;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Cancel
    extends StandardParameters {
    /**
     * Required. The name of the DisplayVideo360AdvertiserLinkProposal to cancel. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaCancelDisplayVideo360AdvertiserLinkProposalRequest;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Delete
    extends StandardParameters {
    /**
     * Required. The name of the DisplayVideo360AdvertiserLinkProposal to delete. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinkproposals$Get
    extends StandardParameters {
    /**
     * Required. The name of the DisplayVideo360AdvertiserLinkProposal to get. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinkproposals$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListDisplayVideo360AdvertiserLinkProposals` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinkProposals` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }

  export class Resource$Properties$Displayvideo360advertiserlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinks.create({
     *       // Required. Example format: properties/1234
     *       parent: 'properties/my-propertie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "adsPersonalizationEnabled": false,
     *         //   "advertiserDisplayName": "my_advertiserDisplayName",
     *         //   "advertiserId": "my_advertiserId",
     *         //   "campaignDataSharingEnabled": false,
     *         //   "costDataSharingEnabled": false,
     *         //   "name": "my_name"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
     *   //   "name": "my_name"
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
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>;
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    create(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinks$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/displayVideo360AdvertiserLinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(
          parameters
        );
      }
    }

    /**
     * Deletes a DisplayVideo360AdvertiserLink on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinks.delete({
     *       // Required. The name of the DisplayVideo360AdvertiserLink to delete. Example format: properties/1234/displayVideo360AdvertiserLinks/5678
     *       name: 'properties/my-propertie/displayVideo360AdvertiserLinks/my-displayVideo360AdvertiserLink',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinks$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Look up a single DisplayVideo360AdvertiserLink
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinks.get({
     *       // Required. The name of the DisplayVideo360AdvertiserLink to get. Example format: properties/1234/displayVideo360AdvertiserLink/5678
     *       name: 'properties/my-propertie/displayVideo360AdvertiserLinks/my-displayVideo360AdvertiserLink',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
     *   //   "name": "my_name"
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
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>;
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    get(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinks$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(
          parameters
        );
      }
    }

    /**
     * Lists all DisplayVideo360AdvertiserLinks on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinks.list({
     *       // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListDisplayVideo360AdvertiserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinks` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. Example format: properties/1234
     *       parent: 'properties/my-propertie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayVideo360AdvertiserLinks": [],
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
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>;
    list(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinks$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/displayVideo360AdvertiserLinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a DisplayVideo360AdvertiserLink on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.displayVideo360AdvertiserLinks.patch({
     *       // Output only. The resource name for this DisplayVideo360AdvertiserLink resource. Format: properties/{propertyId\}/displayVideo360AdvertiserLinks/{linkId\} Note: linkId is not the Display & Video 360 Advertiser ID
     *       name: 'properties/my-propertie/displayVideo360AdvertiserLinks/my-displayVideo360AdvertiserLink',
     *       // Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "adsPersonalizationEnabled": false,
     *         //   "advertiserDisplayName": "my_advertiserDisplayName",
     *         //   "advertiserId": "my_advertiserId",
     *         //   "campaignDataSharingEnabled": false,
     *         //   "costDataSharingEnabled": false,
     *         //   "name": "my_name"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "advertiserDisplayName": "my_advertiserDisplayName",
     *   //   "advertiserId": "my_advertiserId",
     *   //   "campaignDataSharingEnabled": false,
     *   //   "costDataSharingEnabled": false,
     *   //   "name": "my_name"
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
    patch(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Displayvideo360advertiserlinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>;
    patch(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    patch(
      params: Params$Resource$Properties$Displayvideo360advertiserlinks$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Displayvideo360advertiserlinks$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Displayvideo360advertiserlinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Displayvideo360advertiserlinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Displayvideo360advertiserlinks$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinks$Delete
    extends StandardParameters {
    /**
     * Required. The name of the DisplayVideo360AdvertiserLink to delete. Example format: properties/1234/displayVideo360AdvertiserLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinks$Get
    extends StandardParameters {
    /**
     * Required. The name of the DisplayVideo360AdvertiserLink to get. Example format: properties/1234/displayVideo360AdvertiserLink/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinks$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListDisplayVideo360AdvertiserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Displayvideo360advertiserlinks$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name for this DisplayVideo360AdvertiserLink resource. Format: properties/{propertyId\}/displayVideo360AdvertiserLinks/{linkId\} Note: linkId is not the Display & Video 360 Advertiser ID
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;
  }

  export class Resource$Properties$Firebaselinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a FirebaseLink. Properties can have at most one FirebaseLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.firebaseLinks.create({
     *     // Required. Format: properties/{property_id\} Example: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "name": "my_name",
     *       //   "project": "my_project"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "project": "my_project"
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
    create(
      params: Params$Resource$Properties$Firebaselinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Firebaselinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>;
    create(
      params: Params$Resource$Properties$Firebaselinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Firebaselinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
    ): void;
    create(
      params: Params$Resource$Properties$Firebaselinks$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Firebaselinks$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Firebaselinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Firebaselinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/firebaseLinks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>(
          parameters
        );
      }
    }

    /**
     * Deletes a FirebaseLink on a property
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.firebaseLinks.delete({
     *     // Required. Format: properties/{property_id\}/firebaseLinks/{firebase_link_id\} Example: properties/1234/firebaseLinks/5678
     *     name: 'properties/my-propertie/firebaseLinks/my-firebaseLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Properties$Firebaselinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Firebaselinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Firebaselinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Firebaselinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Firebaselinks$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Firebaselinks$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Firebaselinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Firebaselinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.firebaseLinks.list({
     *     // The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Format: properties/{property_id\} Example: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "firebaseLinks": [],
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
      params: Params$Resource$Properties$Firebaselinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Firebaselinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>;
    list(
      params: Params$Resource$Properties$Firebaselinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Firebaselinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Firebaselinks$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Firebaselinks$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Firebaselinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Firebaselinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/firebaseLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Firebaselinks$Create
    extends StandardParameters {
    /**
     * Required. Format: properties/{property_id\} Example: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaFirebaseLink;
  }
  export interface Params$Resource$Properties$Firebaselinks$Delete
    extends StandardParameters {
    /**
     * Required. Format: properties/{property_id\}/firebaseLinks/{firebase_link_id\} Example: properties/1234/firebaseLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Firebaselinks$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Format: properties/{property_id\} Example: properties/1234
     */
    parent?: string;
  }

  export class Resource$Properties$Googleadslinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a GoogleAdsLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.googleAdsLinks.create({
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adsPersonalizationEnabled": false,
     *       //   "canManageClients": false,
     *       //   "createTime": "my_createTime",
     *       //   "creatorEmailAddress": "my_creatorEmailAddress",
     *       //   "customerId": "my_customerId",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "canManageClients": false,
     *   //   "createTime": "my_createTime",
     *   //   "creatorEmailAddress": "my_creatorEmailAddress",
     *   //   "customerId": "my_customerId",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Properties$Googleadslinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Googleadslinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>;
    create(
      params: Params$Resource$Properties$Googleadslinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Googleadslinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
    ): void;
    create(
      params: Params$Resource$Properties$Googleadslinks$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Googleadslinks$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Googleadslinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Googleadslinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/googleAdsLinks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>(
          parameters
        );
      }
    }

    /**
     * Deletes a GoogleAdsLink on a property
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.googleAdsLinks.delete({
     *     // Required. Example format: properties/1234/googleAdsLinks/5678
     *     name: 'properties/my-propertie/googleAdsLinks/my-googleAdsLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Properties$Googleadslinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Googleadslinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Googleadslinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Googleadslinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Googleadslinks$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Googleadslinks$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Googleadslinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Googleadslinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lists GoogleAdsLinks on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.googleAdsLinks.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "googleAdsLinks": [],
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
      params: Params$Resource$Properties$Googleadslinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Googleadslinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>;
    list(
      params: Params$Resource$Properties$Googleadslinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Googleadslinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Googleadslinks$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Googleadslinks$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Googleadslinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Googleadslinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/googleAdsLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a GoogleAdsLink on a property
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.googleAdsLinks.patch({
     *     // Output only. Format: properties/{propertyId\}/googleAdsLinks/{googleAdsLinkId\} Note: googleAdsLinkId is not the Google Ads customer ID.
     *     name: 'properties/my-propertie/googleAdsLinks/my-googleAdsLink',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adsPersonalizationEnabled": false,
     *       //   "canManageClients": false,
     *       //   "createTime": "my_createTime",
     *       //   "creatorEmailAddress": "my_creatorEmailAddress",
     *       //   "customerId": "my_customerId",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adsPersonalizationEnabled": false,
     *   //   "canManageClients": false,
     *   //   "createTime": "my_createTime",
     *   //   "creatorEmailAddress": "my_creatorEmailAddress",
     *   //   "customerId": "my_customerId",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Properties$Googleadslinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Googleadslinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>;
    patch(
      params: Params$Resource$Properties$Googleadslinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Googleadslinks$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
    ): void;
    patch(
      params: Params$Resource$Properties$Googleadslinks$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Googleadslinks$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Googleadslinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Googleadslinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Googleadslinks$Create
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink;
  }
  export interface Params$Resource$Properties$Googleadslinks$Delete
    extends StandardParameters {
    /**
     * Required. Example format: properties/1234/googleAdsLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Googleadslinks$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Googleadslinks$Patch
    extends StandardParameters {
    /**
     * Output only. Format: properties/{propertyId\}/googleAdsLinks/{googleAdsLinkId\} Note: googleAdsLinkId is not the Google Ads customer ID.
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink;
  }

  export class Resource$Properties$Iosappdatastreams {
    context: APIRequestContext;
    measurementProtocolSecrets: Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.measurementProtocolSecrets =
        new Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets(
          this.context
        );
    }

    /**
     * Deletes an iOS app stream on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.iosAppDataStreams.delete({
     *     // Required. The name of the iOS app data stream to delete. Format: properties/{property_id\}/iosAppDataStreams/{stream_id\} Example: "properties/123/iosAppDataStreams/456"
     *     name: 'properties/my-propertie/iosAppDataStreams/my-iosAppDataStream',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Properties$Iosappdatastreams$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Iosappdatastreams$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Iosappdatastreams$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Iosappdatastreams$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Iosappdatastreams$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Iosappdatastreams$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Iosappdatastreams$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single IosAppDataStream
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.iosAppDataStreams.get({
     *     // Required. The name of the iOS app data stream to lookup. Format: properties/{property_id\}/iosAppDataStreams/{stream_id\} Example: "properties/123/iosAppDataStreams/456"
     *     name: 'properties/my-propertie/iosAppDataStreams/my-iosAppDataStream',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bundleId": "my_bundleId",
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "firebaseAppId": "my_firebaseAppId",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Properties$Iosappdatastreams$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Iosappdatastreams$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>;
    get(
      params: Params$Resource$Properties$Iosappdatastreams$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Iosappdatastreams$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
    ): void;
    get(
      params: Params$Resource$Properties$Iosappdatastreams$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Iosappdatastreams$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Iosappdatastreams$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>(
          parameters
        );
      }
    }

    /**
     * Returns child iOS app data streams under the specified parent property. iOS app data streams will be excluded if the caller does not have access. Returns an empty list if no relevant iOS app data streams are found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.iosAppDataStreams.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListIosAppDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIosAppDataStreams` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent property. For example, to list results of app streams under the property with Id 123: "properties/123"
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "iosAppDataStreams": [],
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
      params: Params$Resource$Properties$Iosappdatastreams$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Iosappdatastreams$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse>;
    list(
      params: Params$Resource$Properties$Iosappdatastreams$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Iosappdatastreams$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Iosappdatastreams$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Iosappdatastreams$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Iosappdatastreams$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/iosAppDataStreams').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an iOS app stream on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.iosAppDataStreams.patch({
     *     // Output only. Resource name of this Data Stream. Format: properties/{property_id\}/iosAppDataStreams/{stream_id\} Example: "properties/1000/iosAppDataStreams/2000"
     *     name: 'properties/my-propertie/iosAppDataStreams/my-iosAppDataStream',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bundleId": "my_bundleId",
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "firebaseAppId": "my_firebaseAppId",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bundleId": "my_bundleId",
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "firebaseAppId": "my_firebaseAppId",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Properties$Iosappdatastreams$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Iosappdatastreams$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>;
    patch(
      params: Params$Resource$Properties$Iosappdatastreams$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Iosappdatastreams$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
    ): void;
    patch(
      params: Params$Resource$Properties$Iosappdatastreams$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Iosappdatastreams$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Iosappdatastreams$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Iosappdatastreams$Delete
    extends StandardParameters {
    /**
     * Required. The name of the iOS app data stream to delete. Format: properties/{property_id\}/iosAppDataStreams/{stream_id\} Example: "properties/123/iosAppDataStreams/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Iosappdatastreams$Get
    extends StandardParameters {
    /**
     * Required. The name of the iOS app data stream to lookup. Format: properties/{property_id\}/iosAppDataStreams/{stream_id\} Example: "properties/123/iosAppDataStreams/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Iosappdatastreams$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListIosAppDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIosAppDataStreams` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent property. For example, to list results of app streams under the property with Id 123: "properties/123"
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Iosappdatastreams$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id\}/iosAppDataStreams/{stream_id\} Example: "properties/1000/iosAppDataStreams/2000"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream;
  }

  export class Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a measurement protocol secret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.iosAppDataStreams.measurementProtocolSecrets.create(
     *       {
     *         // Required. The parent resource where this secret will be created. Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent. Format: properties/{property\}/webDataStreams/{webDataStream\}
     *         parent: 'properties/my-propertie/iosAppDataStreams/my-iosAppDataStream',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "displayName": "my_displayName",
     *           //   "name": "my_name",
     *           //   "secretValue": "my_secretValue"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "secretValue": "my_secretValue"
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
    create(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;
    create(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    create(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/measurementProtocolSecrets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters
        );
      }
    }

    /**
     * Deletes target MeasurementProtocolSecret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.iosAppDataStreams.measurementProtocolSecrets.delete(
     *       {
     *         // Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\} Note: Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent.
     *         name: 'properties/my-propertie/iosAppDataStreams/my-iosAppDataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single "GA4" MeasurementProtocolSecret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.iosAppDataStreams.measurementProtocolSecrets.get(
     *       {
     *         // Required. The name of the measurement protocol secret to lookup. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\} Note: Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent.
     *         name: 'properties/my-propertie/iosAppDataStreams/my-iosAppDataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "secretValue": "my_secretValue"
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
    get(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;
    get(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    get(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters
        );
      }
    }

    /**
     * Returns child MeasurementProtocolSecrets under the specified parent Property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.iosAppDataStreams.measurementProtocolSecrets.list(
     *       {
     *         // The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
     *         pageSize: 'placeholder-value',
     *         // A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. The resource name of the parent stream. Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets
     *         parent: 'properties/my-propertie/iosAppDataStreams/my-iosAppDataStream',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "measurementProtocolSecrets": [],
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
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>;
    list(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/measurementProtocolSecrets'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a measurement protocol secret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.iosAppDataStreams.measurementProtocolSecrets.patch(
     *       {
     *         // Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     *         name: 'properties/my-propertie/iosAppDataStreams/my-iosAppDataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
     *         // The list of fields to be updated. Omitted fields will not be updated.
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "displayName": "my_displayName",
     *           //   "name": "my_name",
     *           //   "secretValue": "my_secretValue"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "secretValue": "my_secretValue"
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
    patch(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;
    patch(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    patch(
      params: Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this secret will be created. Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent. Format: properties/{property\}/webDataStreams/{webDataStream\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;
  }
  export interface Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Delete
    extends StandardParameters {
    /**
     * Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\} Note: Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent.
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Get
    extends StandardParameters {
    /**
     * Required. The name of the measurement protocol secret to lookup. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\} Note: Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent.
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent stream. Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Iosappdatastreams$Measurementprotocolsecrets$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     */
    name?: string;
    /**
     * The list of fields to be updated. Omitted fields will not be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;
  }

  export class Resource$Properties$Userlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.audit({
     *     // Required. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userLinks": []
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
    audit(
      params: Params$Resource$Properties$Userlinks$Audit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    audit(
      params?: Params$Resource$Properties$Userlinks$Audit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>;
    audit(
      params: Params$Resource$Properties$Userlinks$Audit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    audit(
      params: Params$Resource$Properties$Userlinks$Audit,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
    ): void;
    audit(
      params: Params$Resource$Properties$Userlinks$Audit,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
    ): void;
    audit(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
    ): void;
    audit(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Audit
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Audit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Audit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:audit').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.batchCreate({
     *     // Required. The account or property that all user links in the request are for. This field is required. The parent field in the CreateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "notifyNewUsers": false,
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "userLinks": []
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
    batchCreate(
      params: Params$Resource$Properties$Userlinks$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Properties$Userlinks$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>;
    batchCreate(
      params: Params$Resource$Properties$Userlinks$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Properties$Userlinks$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Properties$Userlinks$Batchcreate,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Batchcreate
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchCreate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.batchDelete({
     *     // Required. The account or property that all user links in the request are for. The parent of all values for user link names to delete must match this field. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    batchDelete(
      params: Params$Resource$Properties$Userlinks$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Properties$Userlinks$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    batchDelete(
      params: Params$Resource$Properties$Userlinks$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Properties$Userlinks$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      params: Params$Resource$Properties$Userlinks$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Batchdelete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchDelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.batchGet({
     *     // Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId\}/userLinks/{userLinkId\}
     *     names: 'placeholder-value',
     *     // Required. The account or property that all user links in the request are for. The parent of all provided values for the 'names' field must match this field. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "userLinks": []
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
    batchGet(
      params: Params$Resource$Properties$Userlinks$Batchget,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchGet(
      params?: Params$Resource$Properties$Userlinks$Batchget,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>;
    batchGet(
      params: Params$Resource$Properties$Userlinks$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Properties$Userlinks$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
    ): void;
    batchGet(
      params: Params$Resource$Properties$Userlinks$Batchget,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Batchget
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchGet').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates information about multiple users' links to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.batchUpdate({
     *     // Required. The account or property that all user links in the request are for. The parent field in the UpdateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "userLinks": []
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
    batchUpdate(
      params: Params$Resource$Properties$Userlinks$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Properties$Userlinks$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>;
    batchUpdate(
      params: Params$Resource$Properties$Userlinks$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Properties$Userlinks$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Properties$Userlinks$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Batchupdate
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.create({
     *     // Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
     *     notifyNewUser: 'placeholder-value',
     *     // Required. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "directRoles": [],
     *       //   "emailAddress": "my_emailAddress",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directRoles": [],
     *   //   "emailAddress": "my_emailAddress",
     *   //   "name": "my_name"
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
    create(
      params: Params$Resource$Properties$Userlinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Userlinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>;
    create(
      params: Params$Resource$Properties$Userlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Userlinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    create(
      params: Params$Resource$Properties$Userlinks$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }

    /**
     * Deletes a user link on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.delete({
     *     // Required. Example format: accounts/1234/userLinks/5678
     *     name: 'properties/my-propertie/userLinks/my-userLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Properties$Userlinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Userlinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Userlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Userlinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Userlinks$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets information about a user's link to an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.get({
     *     // Required. Example format: accounts/1234/userLinks/5678
     *     name: 'properties/my-propertie/userLinks/my-userLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directRoles": [],
     *   //   "emailAddress": "my_emailAddress",
     *   //   "name": "my_name"
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
    get(
      params: Params$Resource$Properties$Userlinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Userlinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>;
    get(
      params: Params$Resource$Properties$Userlinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Userlinks$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    get(
      params: Params$Resource$Properties$Userlinks$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }

    /**
     * Lists all user links on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.list({
     *     // The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 200 user links will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLinks` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Example format: accounts/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userLinks": []
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
      params: Params$Resource$Properties$Userlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Userlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>;
    list(
      params: Params$Resource$Properties$Userlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Userlinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Userlinks$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/userLinks').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a user link on an account or property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.patch({
     *     // Output only. Example format: properties/1234/userLinks/5678
     *     name: 'properties/my-propertie/userLinks/my-userLink',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "directRoles": [],
     *       //   "emailAddress": "my_emailAddress",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "directRoles": [],
     *   //   "emailAddress": "my_emailAddress",
     *   //   "name": "my_name"
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
    patch(
      params: Params$Resource$Properties$Userlinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Userlinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>;
    patch(
      params: Params$Resource$Properties$Userlinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Userlinks$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    patch(
      params: Params$Resource$Properties$Userlinks$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaUserLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaUserLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Userlinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Userlinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Userlinks$Audit
    extends StandardParameters {
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksRequest;
  }
  export interface Params$Resource$Properties$Userlinks$Batchcreate
    extends StandardParameters {
    /**
     * Required. The account or property that all user links in the request are for. This field is required. The parent field in the CreateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest;
  }
  export interface Params$Resource$Properties$Userlinks$Batchdelete
    extends StandardParameters {
    /**
     * Required. The account or property that all user links in the request are for. The parent of all values for user link names to delete must match this field. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest;
  }
  export interface Params$Resource$Properties$Userlinks$Batchget
    extends StandardParameters {
    /**
     * Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId\}/userLinks/{userLinkId\}
     */
    names?: string[];
    /**
     * Required. The account or property that all user links in the request are for. The parent of all provided values for the 'names' field must match this field. Example format: accounts/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Userlinks$Batchupdate
    extends StandardParameters {
    /**
     * Required. The account or property that all user links in the request are for. The parent field in the UpdateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest;
  }
  export interface Params$Resource$Properties$Userlinks$Create
    extends StandardParameters {
    /**
     * Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
     */
    notifyNewUser?: boolean;
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }
  export interface Params$Resource$Properties$Userlinks$Delete
    extends StandardParameters {
    /**
     * Required. Example format: accounts/1234/userLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Userlinks$Get
    extends StandardParameters {
    /**
     * Required. Example format: accounts/1234/userLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Userlinks$List
    extends StandardParameters {
    /**
     * The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 200 user links will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Userlinks$Patch
    extends StandardParameters {
    /**
     * Output only. Example format: properties/1234/userLinks/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }

  export class Resource$Properties$Webdatastreams {
    context: APIRequestContext;
    measurementProtocolSecrets: Resource$Properties$Webdatastreams$Measurementprotocolsecrets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.measurementProtocolSecrets =
        new Resource$Properties$Webdatastreams$Measurementprotocolsecrets(
          this.context
        );
    }

    /**
     * Creates a web stream with the specified location and attributes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.webDataStreams.create({
     *     // Required. The parent resource where this web data stream will be created. Format: properties/123
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "defaultUri": "my_defaultUri",
     *       //   "displayName": "my_displayName",
     *       //   "firebaseAppId": "my_firebaseAppId",
     *       //   "measurementId": "my_measurementId",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "defaultUri": "my_defaultUri",
     *   //   "displayName": "my_displayName",
     *   //   "firebaseAppId": "my_firebaseAppId",
     *   //   "measurementId": "my_measurementId",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Properties$Webdatastreams$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Webdatastreams$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>;
    create(
      params: Params$Resource$Properties$Webdatastreams$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Webdatastreams$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
    ): void;
    create(
      params: Params$Resource$Properties$Webdatastreams$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Webdatastreams$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/webDataStreams').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>(
          parameters
        );
      }
    }

    /**
     * Deletes a web stream on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.webDataStreams.delete({
     *     // Required. The name of the web data stream to delete. Format: properties/{property_id\}/webDataStreams/{stream_id\} Example: "properties/123/webDataStreams/456"
     *     name: 'properties/my-propertie/webDataStreams/my-webDataStream',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Properties$Webdatastreams$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Webdatastreams$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Webdatastreams$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Webdatastreams$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Webdatastreams$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Webdatastreams$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single WebDataStream
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.webDataStreams.get({
     *     // Required. The name of the web data stream to lookup. Format: properties/{property_id\}/webDataStreams/{stream_id\} Example: "properties/123/webDataStreams/456"
     *     name: 'properties/my-propertie/webDataStreams/my-webDataStream',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "defaultUri": "my_defaultUri",
     *   //   "displayName": "my_displayName",
     *   //   "firebaseAppId": "my_firebaseAppId",
     *   //   "measurementId": "my_measurementId",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    get(
      params: Params$Resource$Properties$Webdatastreams$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Webdatastreams$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>;
    get(
      params: Params$Resource$Properties$Webdatastreams$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Webdatastreams$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
    ): void;
    get(
      params: Params$Resource$Properties$Webdatastreams$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Webdatastreams$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>(
          parameters
        );
      }
    }

    /**
     * Returns the singleton enhanced measurement settings for this web stream. Note that the stream must enable enhanced measurement for these settings to take effect.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.webDataStreams.getEnhancedMeasurementSettings(
     *       {
     *         // Required. The name of the settings to lookup. Format: properties/{property_id\}/webDataStreams/{stream_id\}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
     *         name: 'properties/my-propertie/webDataStreams/my-webDataStream/enhancedMeasurementSettings',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fileDownloadsEnabled": false,
     *   //   "name": "my_name",
     *   //   "outboundClicksEnabled": false,
     *   //   "pageChangesEnabled": false,
     *   //   "pageLoadsEnabled": false,
     *   //   "pageViewsEnabled": false,
     *   //   "scrollsEnabled": false,
     *   //   "searchQueryParameter": "my_searchQueryParameter",
     *   //   "siteSearchEnabled": false,
     *   //   "streamEnabled": false,
     *   //   "uriQueryParameter": "my_uriQueryParameter",
     *   //   "videoEngagementEnabled": false
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
    getEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getEnhancedMeasurementSettings(
      params?: Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>;
    getEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
    ): void;
    getEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
    ): void;
    getEnhancedMeasurementSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
    ): void;
    getEnhancedMeasurementSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>(
          parameters
        );
      }
    }

    /**
     * Returns the Site Tag for the specified web stream. Site Tags are immutable singletons.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.webDataStreams.getGlobalSiteTag({
     *     // Required. The name of the site tag to lookup. Note that site tags are singletons and do not have unique IDs. Format: properties/{property_id\}/webDataStreams/{stream_id\}/globalSiteTag Example: "properties/123/webDataStreams/456/globalSiteTag"
     *     name: 'properties/my-propertie/webDataStreams/my-webDataStream/globalSiteTag',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "snippet": "my_snippet"
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
    getGlobalSiteTag(
      params: Params$Resource$Properties$Webdatastreams$Getglobalsitetag,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getGlobalSiteTag(
      params?: Params$Resource$Properties$Webdatastreams$Getglobalsitetag,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>;
    getGlobalSiteTag(
      params: Params$Resource$Properties$Webdatastreams$Getglobalsitetag,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getGlobalSiteTag(
      params: Params$Resource$Properties$Webdatastreams$Getglobalsitetag,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
    ): void;
    getGlobalSiteTag(
      params: Params$Resource$Properties$Webdatastreams$Getglobalsitetag,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
    ): void;
    getGlobalSiteTag(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
    ): void;
    getGlobalSiteTag(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Getglobalsitetag
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Getglobalsitetag;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Webdatastreams$Getglobalsitetag;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag>(
          parameters
        );
      }
    }

    /**
     * Returns child web data streams under the specified parent property. Web data streams will be excluded if the caller does not have access. Returns an empty list if no relevant web data streams are found.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.webDataStreams.list({
     *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListWebDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWebDataStreams` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent property. For example, to list results of web streams under the property with Id 123: "properties/123"
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "webDataStreams": []
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
      params: Params$Resource$Properties$Webdatastreams$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Webdatastreams$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse>;
    list(
      params: Params$Resource$Properties$Webdatastreams$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Webdatastreams$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Webdatastreams$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Webdatastreams$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/webDataStreams').replace(
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a web stream on a property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.webDataStreams.patch({
     *     // Output only. Resource name of this Data Stream. Format: properties/{property_id\}/webDataStreams/{stream_id\} Example: "properties/1000/webDataStreams/2000"
     *     name: 'properties/my-propertie/webDataStreams/my-webDataStream',
     *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "defaultUri": "my_defaultUri",
     *       //   "displayName": "my_displayName",
     *       //   "firebaseAppId": "my_firebaseAppId",
     *       //   "measurementId": "my_measurementId",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "defaultUri": "my_defaultUri",
     *   //   "displayName": "my_displayName",
     *   //   "firebaseAppId": "my_firebaseAppId",
     *   //   "measurementId": "my_measurementId",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Properties$Webdatastreams$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Webdatastreams$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>;
    patch(
      params: Params$Resource$Properties$Webdatastreams$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Webdatastreams$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
    ): void;
    patch(
      params: Params$Resource$Properties$Webdatastreams$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Webdatastreams$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaWebDataStream>(
          parameters
        );
      }
    }

    /**
     * Updates the singleton enhanced measurement settings for this web stream. Note that the stream must enable enhanced measurement for these settings to take effect.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.webDataStreams.updateEnhancedMeasurementSettings(
     *       {
     *         // Output only. Resource name of this Data Stream. Format: properties/{property_id\}/webDataStreams/{stream_id\}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
     *         name: 'properties/my-propertie/webDataStreams/my-webDataStream/enhancedMeasurementSettings',
     *         // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "fileDownloadsEnabled": false,
     *           //   "name": "my_name",
     *           //   "outboundClicksEnabled": false,
     *           //   "pageChangesEnabled": false,
     *           //   "pageLoadsEnabled": false,
     *           //   "pageViewsEnabled": false,
     *           //   "scrollsEnabled": false,
     *           //   "searchQueryParameter": "my_searchQueryParameter",
     *           //   "siteSearchEnabled": false,
     *           //   "streamEnabled": false,
     *           //   "uriQueryParameter": "my_uriQueryParameter",
     *           //   "videoEngagementEnabled": false
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fileDownloadsEnabled": false,
     *   //   "name": "my_name",
     *   //   "outboundClicksEnabled": false,
     *   //   "pageChangesEnabled": false,
     *   //   "pageLoadsEnabled": false,
     *   //   "pageViewsEnabled": false,
     *   //   "scrollsEnabled": false,
     *   //   "searchQueryParameter": "my_searchQueryParameter",
     *   //   "siteSearchEnabled": false,
     *   //   "streamEnabled": false,
     *   //   "uriQueryParameter": "my_uriQueryParameter",
     *   //   "videoEngagementEnabled": false
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
    updateEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateEnhancedMeasurementSettings(
      params?: Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>;
    updateEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
    ): void;
    updateEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
    ): void;
    updateEnhancedMeasurementSettings(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
    ): void;
    updateEnhancedMeasurementSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Webdatastreams$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this web data stream will be created. Format: properties/123
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaWebDataStream;
  }
  export interface Params$Resource$Properties$Webdatastreams$Delete
    extends StandardParameters {
    /**
     * Required. The name of the web data stream to delete. Format: properties/{property_id\}/webDataStreams/{stream_id\} Example: "properties/123/webDataStreams/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Webdatastreams$Get
    extends StandardParameters {
    /**
     * Required. The name of the web data stream to lookup. Format: properties/{property_id\}/webDataStreams/{stream_id\} Example: "properties/123/webDataStreams/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings
    extends StandardParameters {
    /**
     * Required. The name of the settings to lookup. Format: properties/{property_id\}/webDataStreams/{stream_id\}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Webdatastreams$Getglobalsitetag
    extends StandardParameters {
    /**
     * Required. The name of the site tag to lookup. Note that site tags are singletons and do not have unique IDs. Format: properties/{property_id\}/webDataStreams/{stream_id\}/globalSiteTag Example: "properties/123/webDataStreams/456/globalSiteTag"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Webdatastreams$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListWebDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWebDataStreams` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent property. For example, to list results of web streams under the property with Id 123: "properties/123"
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Webdatastreams$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id\}/webDataStreams/{stream_id\} Example: "properties/1000/webDataStreams/2000"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaWebDataStream;
  }
  export interface Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings
    extends StandardParameters {
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id\}/webDataStreams/{stream_id\}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings;
  }

  export class Resource$Properties$Webdatastreams$Measurementprotocolsecrets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a measurement protocol secret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.webDataStreams.measurementProtocolSecrets.create(
     *       {
     *         // Required. The parent resource where this secret will be created. Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent. Format: properties/{property\}/webDataStreams/{webDataStream\}
     *         parent: 'properties/my-propertie/webDataStreams/my-webDataStream',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "displayName": "my_displayName",
     *           //   "name": "my_name",
     *           //   "secretValue": "my_secretValue"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "secretValue": "my_secretValue"
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
    create(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;
    create(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    create(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Create,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Create
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/measurementProtocolSecrets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters
        );
      }
    }

    /**
     * Deletes target MeasurementProtocolSecret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.webDataStreams.measurementProtocolSecrets.delete(
     *       {
     *         // Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\} Note: Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent.
     *         name: 'properties/my-propertie/webDataStreams/my-webDataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Lookup for a single "GA4" MeasurementProtocolSecret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.webDataStreams.measurementProtocolSecrets.get(
     *       {
     *         // Required. The name of the measurement protocol secret to lookup. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\} Note: Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent.
     *         name: 'properties/my-propertie/webDataStreams/my-webDataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "secretValue": "my_secretValue"
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
    get(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;
    get(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    get(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Get,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Get
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters
        );
      }
    }

    /**
     * Returns child MeasurementProtocolSecrets under the specified parent Property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.webDataStreams.measurementProtocolSecrets.list(
     *       {
     *         // The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
     *         pageSize: 'placeholder-value',
     *         // A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. The resource name of the parent stream. Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets
     *         parent: 'properties/my-propertie/webDataStreams/my-webDataStream',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "measurementProtocolSecrets": [],
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
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>;
    list(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$List,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$List
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/measurementProtocolSecrets'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a measurement protocol secret.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticsadmin.properties.webDataStreams.measurementProtocolSecrets.patch(
     *       {
     *         // Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     *         name: 'properties/my-propertie/webDataStreams/my-webDataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
     *         // The list of fields to be updated. Omitted fields will not be updated.
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "displayName": "my_displayName",
     *           //   "name": "my_name",
     *           //   "secretValue": "my_secretValue"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "secretValue": "my_secretValue"
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
    patch(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;
    patch(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    patch(
      params: Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Patch,
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Patch
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsadmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this secret will be created. Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent. Format: properties/{property\}/webDataStreams/{webDataStream\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;
  }
  export interface Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Delete
    extends StandardParameters {
    /**
     * Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\} Note: Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent.
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Get
    extends StandardParameters {
    /**
     * Required. The name of the measurement protocol secret to lookup. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\} Note: Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent.
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$List
    extends StandardParameters {
    /**
     * The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent stream. Any type of stream (WebDataStream, IosAppDataStream, AndroidAppDataStream) may be a parent. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Webdatastreams$Measurementprotocolsecrets$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/webDataStreams/{webDataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
     */
    name?: string;
    /**
     * The list of fields to be updated. Omitted fields will not be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;
  }
}
