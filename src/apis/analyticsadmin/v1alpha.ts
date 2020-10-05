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
   * const {google} = require('googleapis');
   * const analyticsadmin = google.analyticsadmin('v1alpha');
   *
   * @namespace analyticsadmin
   * @type {Function}
   * @version v1alpha
   * @variation v1alpha
   * @param {object=} options Options for Analyticsadmin
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
     * Country of business. Must be a non-deprecated code for a UN M.49 region. https://unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html
     */
    countryCode?: string | null;
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
     * Output only. Resource name of this account. Format: accounts/{account} Example: &quot;accounts/100&quot;
     */
    name?: string | null;
    /**
     * Output only. Time when account payload fields were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A virtual resource representing an overview of an account and all its child App+Web properties.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaAccountSummary {
    /**
     * Resource name of account referred to by this account summary Format: accounts/{account_id} Example: &quot;accounts/1000&quot;
     */
    account?: string | null;
    /**
     * Display name for the account referred to in this account summary.
     */
    displayName?: string | null;
    /**
     * Resource name for this account summary. Format: accountSummaries/{account_id} Example: &quot;accountSummaries/1000&quot;
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
     * Output only. Resource name of this Data Stream. Format: properties/{property_id}/androidAppDataStreams/{stream_id} Example: &quot;properties/1000/androidAppDataStreams/2000&quot;
     */
    name?: string | null;
    /**
     * Immutable. The package name for the app being measured. Example: &quot;com.example.myandroidapp&quot;
     */
    packageName?: string | null;
    /**
     * Output only. Time when stream payload fields were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Read-only resource used to summarize a principal&#39;s effective roles.
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
     * Optional. If notify_new_users is set, then email new users that they&#39;ve been given permissions on the resource.
     */
    notifyNewUsers?: boolean | null;
    /**
     * The requests specifying the user links to create. A maximum of 1000 user links can be created in a batch.
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
     * The requests specifying the user links to update. A maximum of 1000 user links can be updated in a batch.
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
     * The requests specifying the user links to update. A maximum of 1000 user links can be updated in a batch.
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
   * Request message for CreateUserLink RPC. Users can have multiple email addresses associated with their Google account, and one of these email addresses is the &quot;primary&quot; email address. Any of the email addresses associated with a Google account may be used for a new UserLink, but the returned UserLink will always contain the &quot;primary&quot; email address. As a result, the input and output email address for this request may differ.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaCreateUserLinkRequest {
    /**
     * Optional. If notify_new_user is set, then email new user that they&#39;ve been given permissions on the resource.
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
   * A resource message representing data sharing settings of a Google Analytics account.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings {
    /**
     * Output only. Resource name. Format: accounts/{account}/dataSharingSettings Example: &quot;accounts/1000/dataSharingSettings&quot;
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
   * Singleton resource under a WebDataStream, configuring measurement of additional site interactions and content.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings {
    /**
     * Capture events when your visitors view content on your site that has articles or blog posts.
     */
    articlesAndBlogsEnabled?: boolean | null;
    /**
     * Capture events when your visitors view content on your site that has structured data (eg, articles, blog posts, product details screens, etc.).
     */
    contentViewsEnabled?: boolean | null;
    /**
     * If enabled, capture a click event each time a visitor clicks a link or element that has data attributes beginning with &quot;data-ga&quot;.
     */
    dataTaggedElementClicksEnabled?: boolean | null;
    /**
     * Domains to exclude from measurement. Max length is 1024 characters.
     */
    excludedDomains?: string | null;
    /**
     * If enabled, capture a file download event each time a link is clicked with a common document, compressed file, application, video, or audio extension.
     */
    fileDownloadsEnabled?: boolean | null;
    /**
     * If enabled, capture a view search results event each time a visitor interacts with a form on your site.
     */
    formInteractionsEnabled?: boolean | null;
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id}/webDataStreams/{stream_id}/enhancedMeasurementSettings Example: &quot;properties/1000/webDataStreams/2000/enhancedMeasurementSettings&quot;
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
     * If enabled, capture a page view event each time a page loads.
     */
    pageLoadsEnabled?: boolean | null;
    /**
     * Output only. If enabled, capture a page view event each time a page loads or the website changes the browser history state.
     */
    pageViewsEnabled?: boolean | null;
    /**
     * Capture events when your visitors view content on your site that has product details screens, etc.
     */
    productsAndEcommerceEnabled?: boolean | null;
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
    urlQueryParameter?: string | null;
    /**
     * If enabled, capture video play, progress, and complete events as visitors view embedded videos on your site.
     */
    videoEngagementEnabled?: boolean | null;
  }
  /**
   * A link between an App+Web property and a Firebase project.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaFirebaseLink {
    /**
     * Output only. Time when this FirebaseLink was originally created.
     */
    createTime?: string | null;
    /**
     * Maximum user access to the App + Web property allowed to admins of the linked Firebase project.
     */
    maximumUserAccess?: string | null;
    /**
     * Output only. Example format: properties/1234/firebaseLinks/5678
     */
    name?: string | null;
    /**
     * Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: &#39;projects/{project number}&#39; Example: &#39;projects/1234&#39;
     */
    project?: string | null;
  }
  /**
   * Read-only resource with the tag for sending data from a website to a WebDataStream.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag {
    /**
     * Immutable. JavaScript code snippet to be pasted as the first item into the head tag of every webpage to measure.
     */
    snippet?: string | null;
  }
  /**
   * A link between an App+Web property and a Google Ads account.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink {
    /**
     * Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update it will be defaulted to true.
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
     * Immutable. Google Ads customer ID.
     */
    customerId?: string | null;
    /**
     * Output only. Email address of the user that created the link. An empty string will be returned if the email address can&#39;t be retrieved.
     */
    emailAddress?: string | null;
    /**
     * Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.
     */
    name?: string | null;
    /**
     * Immutable. Format: properties/{propertyId}
     */
    parent?: string | null;
    /**
     * Output only. Time when this link was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A resource message representing a Google Analytics IOS app stream.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream {
    /**
     * Required. Immutable. The Apple App Store Bundle ID for the app Example: &quot;com.example.myiosapp&quot;
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
     * Output only. Resource name of this Data Stream. Format: properties/{property_id}/iosAppDataStreams/{stream_id} Example: &quot;properties/1000/iosAppDataStreams/2000&quot;
     */
    name?: string | null;
    /**
     * Output only. Time when stream payload fields were last updated.
     */
    updateTime?: string | null;
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
   * Response message for ListFirebaseLinks RPC
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse {
    /**
     * List of FirebaseLinks. This will have at most one value.
     */
    firebaseLinks?: Schema$GoogleAnalyticsAdminV1alphaFirebaseLink[];
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
   * A resource message representing a Google Analytics App+Web property.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaProperty {
    /**
     * Output only. Time when the entity was originally created.
     */
    createTime?: string | null;
    /**
     * The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: &quot;USD&quot;, &quot;EUR&quot;, &quot;JPY&quot;
     */
    currencyCode?: string | null;
    /**
     * Output only. Indicates whether this Property is soft-deleted or not. Deleted properties are excluded from List results unless specifically requested.
     */
    deleted?: boolean | null;
    /**
     * Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units.
     */
    displayName?: string | null;
    /**
     * Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK
     */
    industryCategory?: string | null;
    /**
     * Output only. Resource name of this property. Format: properties/{property_id} Example: &quot;properties/1000&quot;
     */
    name?: string | null;
    /**
     * Immutable. Resource name of this property&#39;s logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account} Example: &quot;accounts/100&quot;
     */
    parent?: string | null;
    /**
     * Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: &quot;America/Los_Angeles&quot;
     */
    timeZone?: string | null;
    /**
     * Output only. Time when entity payload fields were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A virtual resource representing metadata for an App+Web property.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaPropertySummary {
    /**
     * Display name for the property referred to in this account summary.
     */
    displayName?: string | null;
    /**
     * Resource name of property referred to by this property summary Format: properties/{property_id} Example: &quot;properties/1000&quot;
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
   * Request message for UpdateUserLink RPC.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest {
    /**
     * Required. The user link to update.
     */
    userLink?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }
  /**
   * A resource message representing a user&#39;s permissions on an Account or Property resource.
   */
  export interface Schema$GoogleAnalyticsAdminV1alphaUserLink {
    /**
     * Roles directly assigned to this user for this account or property. Valid values: predefinedRoles/read predefinedRoles/collaborate predefinedRoles/edit predefinedRoles/manage-users Excludes roles that are inherited from a higher-level entity, group, or organization admin role. A UserLink that is updated to have an empty list of direct_roles will be deleted.
     */
    directRoles?: string[] | null;
    /**
     * Email address of the user to link
     */
    emailAddress?: string | null;
    /**
     * Example format: properties/1234/userLinks/5678
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
     * Immutable. Domain name of the web app being measured, or empty. Example: &quot;http://www.google.com&quot;, &quot;https://www.google.com&quot;
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
     * Output only. Analytics &quot;Measurement ID&quot;, without the &quot;G-&quot; prefix. Example: &quot;G-1A2BCD345E&quot; would just be &quot;1A2BCD345E&quot;
     */
    measurementId?: string | null;
    /**
     * Output only. Resource name of this Data Stream. Format: properties/{property_id}/webDataStreams/{stream_id} Example: &quot;properties/1000/webDataStreams/2000&quot;
     */
    name?: string | null;
    /**
     * Output only. Time when stream payload fields were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.
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
     * analyticsadmin.accounts.delete
     * @desc Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks, Streams, UserLinks) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.
     * @example
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
     *     // Required. The name of the Account to soft-delete. Format: accounts/{account} Example: "accounts/100"
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
     * @alias analyticsadmin.accounts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Account to soft-delete. Format: accounts/{account} Example: "accounts/100"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * analyticsadmin.accounts.get
     * @desc Lookup for a single Account. Throws "Target not found" if no such account found, or if caller does not have permissions to access it.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.get({
     *     // Required. The name of the account to lookup. Format: accounts/{account} Example: "accounts/100"
     *     name: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "countryCode": "my_countryCode",
     *   //   "createTime": "my_createTime",
     *   //   "deleted": false,
     *   //   "displayName": "my_displayName",
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
     * @alias analyticsadmin.accounts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the account to lookup. Format: accounts/{account} Example: "accounts/100"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccount>(
          parameters
        );
      }
    }

    /**
     * analyticsadmin.accounts.getDataSharingSettings
     * @desc Get data sharing settings on an account. Data sharing settings are singletons.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.getDataSharingSettings({
     *     // Required. The name of the settings to lookup. Format: accounts/{account}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
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
     * @alias analyticsadmin.accounts.getDataSharingSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the settings to lookup. Format: accounts/{account}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings
      >
    ): void;
    getDataSharingSettings(
      params: Params$Resource$Accounts$Getdatasharingsettings,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings
      >
    ): void;
    getDataSharingSettings(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings
      >
    ): void;
    getDataSharingSettings(
      paramsOrCallback?:
        | Params$Resource$Accounts$Getdatasharingsettings
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings
          >
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaDataSharingSettings
        >(parameters);
      }
    }

    /**
     * analyticsadmin.accounts.list
     * @desc Returns all accounts accessible by the caller. Note that these accounts might not currently have App+Web properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
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
     * @alias analyticsadmin.accounts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string=} params.pageToken A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     * @param {boolean=} params.showDeleted Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse
      >
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse
          >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListAccountsResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.accounts.patch
     * @desc Updates an account.
     * @example
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
     *     // Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100"
     *     name: 'accounts/my-account',
     *     // The list of fields to be updated. Omitted fields will not be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "countryCode": "my_countryCode",
     *       //   "createTime": "my_createTime",
     *       //   "deleted": false,
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "countryCode": "my_countryCode",
     *   //   "createTime": "my_createTime",
     *   //   "deleted": false,
     *   //   "displayName": "my_displayName",
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
     * @alias analyticsadmin.accounts.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100"
     * @param {string=} params.updateMask The list of fields to be updated. Omitted fields will not be updated.
     * @param {().GoogleAnalyticsAdminV1alphaAccount} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaAccount>(
          parameters
        );
      }
    }

    /**
     * analyticsadmin.accounts.provisionAccountTicket
     * @desc Requests a ticket for creating an account.
     * @example
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
     * @alias analyticsadmin.accounts.provisionAccountTicket
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    provisionAccountTicket(
      params: Params$Resource$Accounts$Provisionaccountticket,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    provisionAccountTicket(
      params?: Params$Resource$Accounts$Provisionaccountticket,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
    >;
    provisionAccountTicket(
      params: Params$Resource$Accounts$Provisionaccountticket,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    provisionAccountTicket(
      params: Params$Resource$Accounts$Provisionaccountticket,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
      >
    ): void;
    provisionAccountTicket(
      params: Params$Resource$Accounts$Provisionaccountticket,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
      >
    ): void;
    provisionAccountTicket(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
      >
    ): void;
    provisionAccountTicket(
      paramsOrCallback?:
        | Params$Resource$Accounts$Provisionaccountticket
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Delete extends StandardParameters {
    /**
     * Required. The name of the Account to soft-delete. Format: accounts/{account} Example: "accounts/100"
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Required. The name of the account to lookup. Format: accounts/{account} Example: "accounts/100"
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Getdatasharingsettings
    extends StandardParameters {
    /**
     * Required. The name of the settings to lookup. Format: accounts/{account}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
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
     * Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100"
     */
    name?: string;
    /**
     * The list of fields to be updated. Omitted fields will not be updated.
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

  export class Resource$Accounts$Userlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analyticsadmin.accounts.userLinks.audit
     * @desc Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
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
     * @alias analyticsadmin.accounts.userLinks.audit
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Example format: accounts/1234
     * @param {().GoogleAnalyticsAdminV1alphaAuditUserLinksRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
      >
    ): void;
    audit(
      params: Params$Resource$Accounts$Userlinks$Audit,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
      >
    ): void;
    audit(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
      >
    ): void;
    audit(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Audit
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
          >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.accounts.userLinks.batchCreate
     * @desc Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
     * @example
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
     * @alias analyticsadmin.accounts.userLinks.batchCreate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The account or property that all user links in the request are for. This field is required. The parent field in the CreateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     * @param {().GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchCreate(
      params: Params$Resource$Accounts$Userlinks$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Accounts$Userlinks$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
    >;
    batchCreate(
      params: Params$Resource$Accounts$Userlinks$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Accounts$Userlinks$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
      >
    ): void;
    batchCreate(
      params: Params$Resource$Accounts$Userlinks$Batchcreate,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
      >
    ): void;
    batchCreate(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
      >
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Batchcreate
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.accounts.userLinks.batchDelete
     * @desc Deletes information about multiple users' links to an account or property.
     * @example
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
     * @alias analyticsadmin.accounts.userLinks.batchDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The account or property that all user links in the request are for. The parent of all values for user link names to delete must match this field. Example format: accounts/1234
     * @param {().GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * analyticsadmin.accounts.userLinks.batchGet
     * @desc Gets information about multiple users' links to an account or property.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.accounts.userLinks.batchGet({
     *     // Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId}/userLinks/{userLinkId}
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
     * @alias analyticsadmin.accounts.userLinks.batchGet
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.names Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId}/userLinks/{userLinkId}
     * @param {string} params.parent Required. The account or property that all user links in the request are for. The parent of all provided values for the 'names' field must match this field. Example format: accounts/1234
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGet(
      params: Params$Resource$Accounts$Userlinks$Batchget,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchGet(
      params?: Params$Resource$Accounts$Userlinks$Batchget,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
    >;
    batchGet(
      params: Params$Resource$Accounts$Userlinks$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Accounts$Userlinks$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
      >
    ): void;
    batchGet(
      params: Params$Resource$Accounts$Userlinks$Batchget,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
      >
    ): void;
    batchGet(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
      >
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Batchget
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.accounts.userLinks.batchUpdate
     * @desc Updates information about multiple users' links to an account or property.
     * @example
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
     * @alias analyticsadmin.accounts.userLinks.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The account or property that all user links in the request are for. The parent field in the UpdateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     * @param {().GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
      params: Params$Resource$Accounts$Userlinks$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Accounts$Userlinks$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
    >;
    batchUpdate(
      params: Params$Resource$Accounts$Userlinks$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Accounts$Userlinks$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
      >
    ): void;
    batchUpdate(
      params: Params$Resource$Accounts$Userlinks$Batchupdate,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
      >
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
      >
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$Batchupdate
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.accounts.userLinks.create
     * @desc Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
     * @example
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
     *     // Optional. If notify_new_user is set, then email new user that they've been given permissions on the resource.
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
     * @alias analyticsadmin.accounts.userLinks.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.notifyNewUser Optional. If notify_new_user is set, then email new user that they've been given permissions on the resource.
     * @param {string} params.parent Required. Example format: accounts/1234
     * @param {().GoogleAnalyticsAdminV1alphaUserLink} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }

    /**
     * analyticsadmin.accounts.userLinks.delete
     * @desc Deletes a user link on an account or property.
     * @example
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
     * @alias analyticsadmin.accounts.userLinks.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Example format: accounts/1234/userLinks/5678
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * analyticsadmin.accounts.userLinks.get
     * @desc Gets information about a user's link to an account or property.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
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
     * @alias analyticsadmin.accounts.userLinks.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Example format: accounts/1234/userLinks/5678
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }

    /**
     * analyticsadmin.accounts.userLinks.list
     * @desc Lists all user links on an account or property.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
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
     * @alias analyticsadmin.accounts.userLinks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 200 user links will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     * @param {string=} params.pageToken A page token, received from a previous `ListUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLinks` must match the call that provided the page token.
     * @param {string} params.parent Required. Example format: accounts/1234
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
      >
    ): void;
    list(
      params: Params$Resource$Accounts$Userlinks$List,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Userlinks$List
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
          >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.accounts.userLinks.patch
     * @desc Updates a user link on an account or property.
     * @example
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
     *     // Example format: properties/1234/userLinks/5678
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
     * @alias analyticsadmin.accounts.userLinks.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Example format: properties/1234/userLinks/5678
     * @param {().GoogleAnalyticsAdminV1alphaUserLink} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
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
     * Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId}/userLinks/{userLinkId}
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
     * Optional. If notify_new_user is set, then email new user that they've been given permissions on the resource.
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
     * Example format: properties/1234/userLinks/5678
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
     * analyticsadmin.accountSummaries.list
     * @desc Returns summaries of all accounts accessible by the caller.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
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
     * @alias analyticsadmin.accountSummaries.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string=} params.pageToken A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Accountsummaries$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accountsummaries$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
    >;
    list(
      params: Params$Resource$Accountsummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accountsummaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
      >
    ): void;
    list(
      params: Params$Resource$Accountsummaries$List,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accountsummaries$List
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
        >(parameters);
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
    firebaseLinks: Resource$Properties$Firebaselinks;
    googleAdsLinks: Resource$Properties$Googleadslinks;
    iosAppDataStreams: Resource$Properties$Iosappdatastreams;
    userLinks: Resource$Properties$Userlinks;
    webDataStreams: Resource$Properties$Webdatastreams;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.androidAppDataStreams = new Resource$Properties$Androidappdatastreams(
        this.context
      );
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
     * analyticsadmin.properties.create
     * @desc Creates an "App+Web" property with the specified location and attributes.
     * @example
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
     *       //   "deleted": false,
     *       //   "displayName": "my_displayName",
     *       //   "industryCategory": "my_industryCategory",
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
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
     *   //   "deleted": false,
     *   //   "displayName": "my_displayName",
     *   //   "industryCategory": "my_industryCategory",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
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
     * @alias analyticsadmin.properties.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GoogleAnalyticsAdminV1alphaProperty} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters
        );
      }
    }

    /**
     * analyticsadmin.properties.delete
     * @desc Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams, UserLinks) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found, or is not an App+Web Property.
     * @example
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
     *     // Required. The name of the Property to soft-delete. Format: properties/{property_id} Example: "properties/1000"
     *     name: 'properties/my-propertie',
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
     * @alias analyticsadmin.properties.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Property to soft-delete. Format: properties/{property_id} Example: "properties/1000"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Properties$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Properties$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Properties$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Properties$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Properties$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Properties$Delete
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * analyticsadmin.properties.get
     * @desc Lookup for a single "App+Web" Property. Throws "Target not found" if no such property found, if property is not of the type "App+Web", or if caller does not have permissions to access it.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.get({
     *     // Required. The name of the property to lookup. Format: properties/{property_id} Example: "properties/1000"
     *     name: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "currencyCode": "my_currencyCode",
     *   //   "deleted": false,
     *   //   "displayName": "my_displayName",
     *   //   "industryCategory": "my_industryCategory",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
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
     * @alias analyticsadmin.properties.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the property to lookup. Format: properties/{property_id} Example: "properties/1000"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
          parameters
        );
      }
    }

    /**
     * analyticsadmin.properties.list
     * @desc Returns child Properties under the specified parent Account. Only "App+Web" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.list({
     *     // Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. |
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
     * @alias analyticsadmin.properties.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. |
     * @param {integer=} params.pageSize The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string=} params.pageToken A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
     * @param {boolean=} params.showDeleted Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse
      >
    ): void;
    list(
      params: Params$Resource$Properties$List,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$List
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse
          >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListPropertiesResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.patch
     * @desc Updates a property.
     * @example
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
     *     // Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000"
     *     name: 'properties/my-propertie',
     *     // The list of fields to be updated. Omitted fields will not be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "currencyCode": "my_currencyCode",
     *       //   "deleted": false,
     *       //   "displayName": "my_displayName",
     *       //   "industryCategory": "my_industryCategory",
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
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
     *   //   "deleted": false,
     *   //   "displayName": "my_displayName",
     *   //   "industryCategory": "my_industryCategory",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
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
     * @alias analyticsadmin.properties.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000"
     * @param {string=} params.updateMask The list of fields to be updated. Omitted fields will not be updated.
     * @param {().GoogleAnalyticsAdminV1alphaProperty} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaProperty>(
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
     * Required. The name of the Property to soft-delete. Format: properties/{property_id} Example: "properties/1000"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Get extends StandardParameters {
    /**
     * Required. The name of the property to lookup. Format: properties/{property_id} Example: "properties/1000"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$List extends StandardParameters {
    /**
     * Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. |
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
     * Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000"
     */
    name?: string;
    /**
     * The list of fields to be updated. Omitted fields will not be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaProperty;
  }

  export class Resource$Properties$Androidappdatastreams {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analyticsadmin.properties.androidAppDataStreams.create
     * @desc Creates an android app stream with the specified location and attributes.
     * @example
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
     *   const res = await analyticsadmin.properties.androidAppDataStreams.create({
     *     // Required. The parent resource where this android app data stream will be created. Format: properties/123
     *     parent: 'properties/my-propertie',
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
     * @alias analyticsadmin.properties.androidAppDataStreams.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource where this android app data stream will be created. Format: properties/123
     * @param {().GoogleAnalyticsAdminV1alphaAndroidAppDataStream} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Properties$Androidappdatastreams$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Androidappdatastreams$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>;
    create(
      params: Params$Resource$Properties$Androidappdatastreams$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Androidappdatastreams$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
      >
    ): void;
    create(
      params: Params$Resource$Properties$Androidappdatastreams$Create,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$Create
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Androidappdatastreams$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Androidappdatastreams$Create;
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.androidAppDataStreams.delete
     * @desc Deletes an android app stream on a property.
     * @example
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
     *     // Required. The name of the android app data stream to delete. Format: properties/{property_id}/androidAppDataStreams/{stream_id} Example: "properties/123/androidAppDataStreams/456"
     *     name:
     *       'properties/my-propertie/androidAppDataStreams/my-androidAppDataStream',
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
     * @alias analyticsadmin.properties.androidAppDataStreams.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the android app data stream to delete. Format: properties/{property_id}/androidAppDataStreams/{stream_id} Example: "properties/123/androidAppDataStreams/456"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * analyticsadmin.properties.androidAppDataStreams.get
     * @desc Lookup for a single AndroidAppDataStream Throws "Target not found" if no such android app data stream found, or if the caller does not have permissions to access it.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.androidAppDataStreams.get({
     *     // Required. The name of the android app data stream to lookup. Format: properties/{property_id}/androidAppDataStreams/{stream_id} Example: "properties/123/androidAppDataStreams/456"
     *     name:
     *       'properties/my-propertie/androidAppDataStreams/my-androidAppDataStream',
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
     * @alias analyticsadmin.properties.androidAppDataStreams.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the android app data stream to lookup. Format: properties/{property_id}/androidAppDataStreams/{stream_id} Example: "properties/123/androidAppDataStreams/456"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
      >
    ): void;
    get(
      params: Params$Resource$Properties$Androidappdatastreams$Get,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$Get
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
          >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.androidAppDataStreams.list
     * @desc Returns child android app streams under the specified parent property. Android app streams will be excluded if the caller does not have access. Returns an empty list if no relevant android app streams are found.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
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
     * @alias analyticsadmin.properties.androidAppDataStreams.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string=} params.pageToken A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAndroidAppDataStreams` must match the call that provided the page token.
     * @param {string} params.parent Required. The name of the parent property. For example, to limit results to app streams under the property with Id 123: "properties/123"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Properties$Androidappdatastreams$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Androidappdatastreams$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse
    >;
    list(
      params: Params$Resource$Properties$Androidappdatastreams$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Androidappdatastreams$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse
      >
    ): void;
    list(
      params: Params$Resource$Properties$Androidappdatastreams$List,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$List
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.androidAppDataStreams.patch
     * @desc Updates an android app stream on a property.
     * @example
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
     *     // Output only. Resource name of this Data Stream. Format: properties/{property_id}/androidAppDataStreams/{stream_id} Example: "properties/1000/androidAppDataStreams/2000"
     *     name:
     *       'properties/my-propertie/androidAppDataStreams/my-androidAppDataStream',
     *     // The list of fields to be updated. Omitted fields will not be updated.
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
     * @alias analyticsadmin.properties.androidAppDataStreams.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of this Data Stream. Format: properties/{property_id}/androidAppDataStreams/{stream_id} Example: "properties/1000/androidAppDataStreams/2000"
     * @param {string=} params.updateMask The list of fields to be updated. Omitted fields will not be updated.
     * @param {().GoogleAnalyticsAdminV1alphaAndroidAppDataStream} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
      >
    ): void;
    patch(
      params: Params$Resource$Properties$Androidappdatastreams$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Androidappdatastreams$Patch
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
          >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Properties$Androidappdatastreams$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this android app data stream will be created. Format: properties/123
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream;
  }
  export interface Params$Resource$Properties$Androidappdatastreams$Delete
    extends StandardParameters {
    /**
     * Required. The name of the android app data stream to delete. Format: properties/{property_id}/androidAppDataStreams/{stream_id} Example: "properties/123/androidAppDataStreams/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Androidappdatastreams$Get
    extends StandardParameters {
    /**
     * Required. The name of the android app data stream to lookup. Format: properties/{property_id}/androidAppDataStreams/{stream_id} Example: "properties/123/androidAppDataStreams/456"
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
     * Output only. Resource name of this Data Stream. Format: properties/{property_id}/androidAppDataStreams/{stream_id} Example: "properties/1000/androidAppDataStreams/2000"
     */
    name?: string;
    /**
     * The list of fields to be updated. Omitted fields will not be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaAndroidAppDataStream;
  }

  export class Resource$Properties$Firebaselinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analyticsadmin.properties.firebaseLinks.create
     * @desc Creates a FirebaseLink. Properties can have at most one FirebaseLink.
     * @example
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
     *     // Required. Format: properties/{property_id} Example: properties/1234
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "maximumUserAccess": "my_maximumUserAccess",
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
     *   //   "maximumUserAccess": "my_maximumUserAccess",
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
     * @alias analyticsadmin.properties.firebaseLinks.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Format: properties/{property_id} Example: properties/1234
     * @param {().GoogleAnalyticsAdminV1alphaFirebaseLink} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaFirebaseLink
      >
    ): void;
    create(
      params: Params$Resource$Properties$Firebaselinks$Create,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaFirebaseLink
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaFirebaseLink
      >
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>(
          parameters
        );
      }
    }

    /**
     * analyticsadmin.properties.firebaseLinks.delete
     * @desc Deletes a FirebaseLink on a property
     * @example
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
     *     // Required. Format: properties/{property_id}/firebaseLinks/{firebase_link_id} Example: properties/1234/firebaseLinks/5678
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
     * @alias analyticsadmin.properties.firebaseLinks.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Format: properties/{property_id}/firebaseLinks/{firebase_link_id} Example: properties/1234/firebaseLinks/5678
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * analyticsadmin.properties.firebaseLinks.list
     * @desc Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.firebaseLinks.list({
     *     // Required. Format: properties/{property_id} Example: properties/1234
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "firebaseLinks": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias analyticsadmin.properties.firebaseLinks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Format: properties/{property_id} Example: properties/1234
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Properties$Firebaselinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Firebaselinks$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
    >;
    list(
      params: Params$Resource$Properties$Firebaselinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Firebaselinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
      >
    ): void;
    list(
      params: Params$Resource$Properties$Firebaselinks$List,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Firebaselinks$List
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.firebaseLinks.patch
     * @desc Updates a FirebaseLink on a property
     * @example
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
     *   const res = await analyticsadmin.properties.firebaseLinks.patch({
     *     // Output only. Example format: properties/1234/firebaseLinks/5678
     *     name: 'properties/my-propertie/firebaseLinks/my-firebaseLink',
     *     // The list of fields to be updated. Omitted fields will not be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "maximumUserAccess": "my_maximumUserAccess",
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
     *   //   "maximumUserAccess": "my_maximumUserAccess",
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
     * @alias analyticsadmin.properties.firebaseLinks.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Example format: properties/1234/firebaseLinks/5678
     * @param {string=} params.updateMask The list of fields to be updated. Omitted fields will not be updated.
     * @param {().GoogleAnalyticsAdminV1alphaFirebaseLink} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Properties$Firebaselinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Properties$Firebaselinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>;
    patch(
      params: Params$Resource$Properties$Firebaselinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Properties$Firebaselinks$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaFirebaseLink
      >
    ): void;
    patch(
      params: Params$Resource$Properties$Firebaselinks$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaFirebaseLink
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaFirebaseLink
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Firebaselinks$Patch
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
        {}) as Params$Resource$Properties$Firebaselinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Firebaselinks$Patch;
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaFirebaseLink>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Properties$Firebaselinks$Create
    extends StandardParameters {
    /**
     * Required. Format: properties/{property_id} Example: properties/1234
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
     * Required. Format: properties/{property_id}/firebaseLinks/{firebase_link_id} Example: properties/1234/firebaseLinks/5678
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Firebaselinks$List
    extends StandardParameters {
    /**
     * Required. Format: properties/{property_id} Example: properties/1234
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Firebaselinks$Patch
    extends StandardParameters {
    /**
     * Output only. Example format: properties/1234/firebaseLinks/5678
     */
    name?: string;
    /**
     * The list of fields to be updated. Omitted fields will not be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaFirebaseLink;
  }

  export class Resource$Properties$Googleadslinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analyticsadmin.properties.googleAdsLinks.create
     * @desc Creates a GoogleAdsLink.
     * @example
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
     *       //   "customerId": "my_customerId",
     *       //   "emailAddress": "my_emailAddress",
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
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
     *   //   "customerId": "my_customerId",
     *   //   "emailAddress": "my_emailAddress",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias analyticsadmin.properties.googleAdsLinks.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Example format: properties/1234
     * @param {().GoogleAnalyticsAdminV1alphaGoogleAdsLink} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink
      >
    ): void;
    create(
      params: Params$Resource$Properties$Googleadslinks$Create,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink
      >
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.googleAdsLinks.delete
     * @desc Deletes a GoogleAdsLink on a property
     * @example
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
     * @alias analyticsadmin.properties.googleAdsLinks.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Example format: properties/1234/googleAdsLinks/5678
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * analyticsadmin.properties.googleAdsLinks.list
     * @desc Lists GoogleAdsLinks on a property.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
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
     * @alias analyticsadmin.properties.googleAdsLinks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string=} params.pageToken A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
     * @param {string} params.parent Required. Example format: properties/1234
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Properties$Googleadslinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Googleadslinks$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
    >;
    list(
      params: Params$Resource$Properties$Googleadslinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Googleadslinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
      >
    ): void;
    list(
      params: Params$Resource$Properties$Googleadslinks$List,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Googleadslinks$List
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.googleAdsLinks.patch
     * @desc Updates a GoogleAdsLink on a property
     * @example
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
     *     // Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.
     *     name: 'properties/my-propertie/googleAdsLinks/my-googleAdsLink',
     *     // The list of fields to be updated. Omitted fields will not be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adsPersonalizationEnabled": false,
     *       //   "canManageClients": false,
     *       //   "createTime": "my_createTime",
     *       //   "customerId": "my_customerId",
     *       //   "emailAddress": "my_emailAddress",
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
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
     *   //   "customerId": "my_customerId",
     *   //   "emailAddress": "my_emailAddress",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias analyticsadmin.properties.googleAdsLinks.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.
     * @param {string=} params.updateMask The list of fields to be updated. Omitted fields will not be updated.
     * @param {().GoogleAnalyticsAdminV1alphaGoogleAdsLink} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink
      >
    ): void;
    patch(
      params: Params$Resource$Properties$Googleadslinks$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink
      >
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink
        >(parameters);
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
     * Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.
     */
    name?: string;
    /**
     * The list of fields to be updated. Omitted fields will not be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaGoogleAdsLink;
  }

  export class Resource$Properties$Iosappdatastreams {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analyticsadmin.properties.iosAppDataStreams.create
     * @desc Creates an iOS app data stream with the specified location and attributes.
     * @example
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
     *   const res = await analyticsadmin.properties.iosAppDataStreams.create({
     *     // Required. The parent resource where this ios app data stream will be created. Format: properties/123
     *     parent: 'properties/my-propertie',
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
     * @alias analyticsadmin.properties.iosAppDataStreams.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource where this ios app data stream will be created. Format: properties/123
     * @param {().GoogleAnalyticsAdminV1alphaIosAppDataStream} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Properties$Iosappdatastreams$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Properties$Iosappdatastreams$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>;
    create(
      params: Params$Resource$Properties$Iosappdatastreams$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Iosappdatastreams$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
      >
    ): void;
    create(
      params: Params$Resource$Properties$Iosappdatastreams$Create,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$Create
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Iosappdatastreams$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Iosappdatastreams$Create;
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
        createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.iosAppDataStreams.delete
     * @desc Deletes an iOS app stream on a property.
     * @example
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
     *     // Required. The name of the iOS app data stream to delete. Format: properties/{property_id}/iosAppDataStreams/{stream_id} Example: "properties/123/iosAppDataStreams/456"
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
     * @alias analyticsadmin.properties.iosAppDataStreams.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the iOS app data stream to delete. Format: properties/{property_id}/iosAppDataStreams/{stream_id} Example: "properties/123/iosAppDataStreams/456"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * analyticsadmin.properties.iosAppDataStreams.get
     * @desc Lookup for a single IosAppDataStream Throws "Target not found" if no such iOS app data stream found, or if the caller does not have permissions to access it.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.iosAppDataStreams.get({
     *     // Required. The name of the iOS app data stream to lookup. Format: properties/{property_id}/iosAppDataStreams/{stream_id} Example: "properties/123/iosAppDataStreams/456"
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
     * @alias analyticsadmin.properties.iosAppDataStreams.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the iOS app data stream to lookup. Format: properties/{property_id}/iosAppDataStreams/{stream_id} Example: "properties/123/iosAppDataStreams/456"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
      >
    ): void;
    get(
      params: Params$Resource$Properties$Iosappdatastreams$Get,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$Get
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
          >
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.iosAppDataStreams.list
     * @desc Returns child iOS app data streams under the specified parent property. iOS app data streams will be excluded if the caller does not have access. Returns an empty list if no relevant iOS app data streams are found.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
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
     * @alias analyticsadmin.properties.iosAppDataStreams.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string=} params.pageToken A page token, received from a previous `ListIosAppDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIosAppDataStreams` must match the call that provided the page token.
     * @param {string} params.parent Required. The name of the parent property. For example, to list results of app streams under the property with Id 123: "properties/123"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Properties$Iosappdatastreams$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Iosappdatastreams$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse
    >;
    list(
      params: Params$Resource$Properties$Iosappdatastreams$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Iosappdatastreams$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse
      >
    ): void;
    list(
      params: Params$Resource$Properties$Iosappdatastreams$List,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$List
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.iosAppDataStreams.patch
     * @desc Updates an iOS app stream on a property.
     * @example
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
     *     // Output only. Resource name of this Data Stream. Format: properties/{property_id}/iosAppDataStreams/{stream_id} Example: "properties/1000/iosAppDataStreams/2000"
     *     name: 'properties/my-propertie/iosAppDataStreams/my-iosAppDataStream',
     *     // The list of fields to be updated. Omitted fields will not be updated.
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
     * @alias analyticsadmin.properties.iosAppDataStreams.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of this Data Stream. Format: properties/{property_id}/iosAppDataStreams/{stream_id} Example: "properties/1000/iosAppDataStreams/2000"
     * @param {string=} params.updateMask The list of fields to be updated. Omitted fields will not be updated.
     * @param {().GoogleAnalyticsAdminV1alphaIosAppDataStream} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
      >
    ): void;
    patch(
      params: Params$Resource$Properties$Iosappdatastreams$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Properties$Iosappdatastreams$Patch
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
          >
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Properties$Iosappdatastreams$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this ios app data stream will be created. Format: properties/123
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream;
  }
  export interface Params$Resource$Properties$Iosappdatastreams$Delete
    extends StandardParameters {
    /**
     * Required. The name of the iOS app data stream to delete. Format: properties/{property_id}/iosAppDataStreams/{stream_id} Example: "properties/123/iosAppDataStreams/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Iosappdatastreams$Get
    extends StandardParameters {
    /**
     * Required. The name of the iOS app data stream to lookup. Format: properties/{property_id}/iosAppDataStreams/{stream_id} Example: "properties/123/iosAppDataStreams/456"
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
     * Output only. Resource name of this Data Stream. Format: properties/{property_id}/iosAppDataStreams/{stream_id} Example: "properties/1000/iosAppDataStreams/2000"
     */
    name?: string;
    /**
     * The list of fields to be updated. Omitted fields will not be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaIosAppDataStream;
  }

  export class Resource$Properties$Userlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analyticsadmin.properties.userLinks.audit
     * @desc Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
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
     * @alias analyticsadmin.properties.userLinks.audit
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Example format: accounts/1234
     * @param {().GoogleAnalyticsAdminV1alphaAuditUserLinksRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
      >
    ): void;
    audit(
      params: Params$Resource$Properties$Userlinks$Audit,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
      >
    ): void;
    audit(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
      >
    ): void;
    audit(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Audit
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
          >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.userLinks.batchCreate
     * @desc Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
     * @example
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
     * @alias analyticsadmin.properties.userLinks.batchCreate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The account or property that all user links in the request are for. This field is required. The parent field in the CreateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     * @param {().GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchCreate(
      params: Params$Resource$Properties$Userlinks$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Properties$Userlinks$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
    >;
    batchCreate(
      params: Params$Resource$Properties$Userlinks$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Properties$Userlinks$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
      >
    ): void;
    batchCreate(
      params: Params$Resource$Properties$Userlinks$Batchcreate,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
      >
    ): void;
    batchCreate(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
      >
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Batchcreate
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.userLinks.batchDelete
     * @desc Deletes information about multiple users' links to an account or property.
     * @example
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
     * @alias analyticsadmin.properties.userLinks.batchDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The account or property that all user links in the request are for. The parent of all values for user link names to delete must match this field. Example format: accounts/1234
     * @param {().GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * analyticsadmin.properties.userLinks.batchGet
     * @desc Gets information about multiple users' links to an account or property.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.userLinks.batchGet({
     *     // Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId}/userLinks/{userLinkId}
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
     * @alias analyticsadmin.properties.userLinks.batchGet
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.names Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId}/userLinks/{userLinkId}
     * @param {string} params.parent Required. The account or property that all user links in the request are for. The parent of all provided values for the 'names' field must match this field. Example format: accounts/1234
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGet(
      params: Params$Resource$Properties$Userlinks$Batchget,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchGet(
      params?: Params$Resource$Properties$Userlinks$Batchget,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
    >;
    batchGet(
      params: Params$Resource$Properties$Userlinks$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Properties$Userlinks$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
      >
    ): void;
    batchGet(
      params: Params$Resource$Properties$Userlinks$Batchget,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
      >
    ): void;
    batchGet(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
      >
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Batchget
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.userLinks.batchUpdate
     * @desc Updates information about multiple users' links to an account or property.
     * @example
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
     * @alias analyticsadmin.properties.userLinks.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The account or property that all user links in the request are for. The parent field in the UpdateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
     * @param {().GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
      params: Params$Resource$Properties$Userlinks$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Properties$Userlinks$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
    >;
    batchUpdate(
      params: Params$Resource$Properties$Userlinks$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Properties$Userlinks$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
      >
    ): void;
    batchUpdate(
      params: Params$Resource$Properties$Userlinks$Batchupdate,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
      >
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
      >
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$Batchupdate
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.userLinks.create
     * @desc Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
     * @example
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
     *     // Optional. If notify_new_user is set, then email new user that they've been given permissions on the resource.
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
     * @alias analyticsadmin.properties.userLinks.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.notifyNewUser Optional. If notify_new_user is set, then email new user that they've been given permissions on the resource.
     * @param {string} params.parent Required. Example format: accounts/1234
     * @param {().GoogleAnalyticsAdminV1alphaUserLink} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }

    /**
     * analyticsadmin.properties.userLinks.delete
     * @desc Deletes a user link on an account or property.
     * @example
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
     * @alias analyticsadmin.properties.userLinks.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Example format: accounts/1234/userLinks/5678
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * analyticsadmin.properties.userLinks.get
     * @desc Gets information about a user's link to an account or property.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
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
     * @alias analyticsadmin.properties.userLinks.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Example format: accounts/1234/userLinks/5678
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleAnalyticsAdminV1alphaUserLink>(
          parameters
        );
      }
    }

    /**
     * analyticsadmin.properties.userLinks.list
     * @desc Lists all user links on an account or property.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
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
     * @alias analyticsadmin.properties.userLinks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 200 user links will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     * @param {string=} params.pageToken A page token, received from a previous `ListUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLinks` must match the call that provided the page token.
     * @param {string} params.parent Required. Example format: accounts/1234
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
      >
    ): void;
    list(
      params: Params$Resource$Properties$Userlinks$List,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Userlinks$List
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
          >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListUserLinksResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.userLinks.patch
     * @desc Updates a user link on an account or property.
     * @example
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
     *     // Example format: properties/1234/userLinks/5678
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
     * @alias analyticsadmin.properties.userLinks.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Example format: properties/1234/userLinks/5678
     * @param {().GoogleAnalyticsAdminV1alphaUserLink} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
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
     * Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId}/userLinks/{userLinkId}
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
     * Optional. If notify_new_user is set, then email new user that they've been given permissions on the resource.
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
     * Example format: properties/1234/userLinks/5678
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaUserLink;
  }

  export class Resource$Properties$Webdatastreams {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analyticsadmin.properties.webDataStreams.create
     * @desc Creates a web stream with the specified location and attributes.
     * @example
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
     * @alias analyticsadmin.properties.webDataStreams.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource where this web data stream will be created. Format: properties/123
     * @param {().GoogleAnalyticsAdminV1alphaWebDataStream} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaWebDataStream
      >
    ): void;
    create(
      params: Params$Resource$Properties$Webdatastreams$Create,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaWebDataStream
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaWebDataStream
      >
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaWebDataStream
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.webDataStreams.delete
     * @desc Deletes a web stream on a property.
     * @example
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
     *     // Required. The name of the web data stream to delete. Format: properties/{property_id}/webDataStreams/{stream_id} Example: "properties/123/webDataStreams/456"
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
     * @alias analyticsadmin.properties.webDataStreams.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the web data stream to delete. Format: properties/{property_id}/webDataStreams/{stream_id} Example: "properties/123/webDataStreams/456"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * analyticsadmin.properties.webDataStreams.get
     * @desc Lookup for a single WebDataStream Throws "Target not found" if no such web data stream found, or if the caller does not have permissions to access it.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.webDataStreams.get({
     *     // Required. The name of the web data stream to lookup. Format: properties/{property_id}/webDataStreams/{stream_id} Example: "properties/123/webDataStreams/456"
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
     * @alias analyticsadmin.properties.webDataStreams.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the web data stream to lookup. Format: properties/{property_id}/webDataStreams/{stream_id} Example: "properties/123/webDataStreams/456"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaWebDataStream
      >
    ): void;
    get(
      params: Params$Resource$Properties$Webdatastreams$Get,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaWebDataStream
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaWebDataStream
      >
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaWebDataStream
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.webDataStreams.getEnhancedMeasurementSettings
     * @desc Returns the singleton enhanced measurement settings for this web stream. Note that the stream must enable enhanced measurement for these settings to take effect.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.webDataStreams.getEnhancedMeasurementSettings(
     *     {
     *       // Required. The name of the settings to lookup. Format: properties/{property_id}/webDataStreams/{stream_id}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
     *       name:
     *         'properties/my-propertie/webDataStreams/my-webDataStream/enhancedMeasurementSettings',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "articlesAndBlogsEnabled": false,
     *   //   "contentViewsEnabled": false,
     *   //   "dataTaggedElementClicksEnabled": false,
     *   //   "excludedDomains": "my_excludedDomains",
     *   //   "fileDownloadsEnabled": false,
     *   //   "formInteractionsEnabled": false,
     *   //   "name": "my_name",
     *   //   "outboundClicksEnabled": false,
     *   //   "pageChangesEnabled": false,
     *   //   "pageLoadsEnabled": false,
     *   //   "pageViewsEnabled": false,
     *   //   "productsAndEcommerceEnabled": false,
     *   //   "scrollsEnabled": false,
     *   //   "searchQueryParameter": "my_searchQueryParameter",
     *   //   "siteSearchEnabled": false,
     *   //   "streamEnabled": false,
     *   //   "urlQueryParameter": "my_urlQueryParameter",
     *   //   "videoEngagementEnabled": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias analyticsadmin.properties.webDataStreams.getEnhancedMeasurementSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the settings to lookup. Format: properties/{property_id}/webDataStreams/{stream_id}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getEnhancedMeasurementSettings(
      params?: Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
    >;
    getEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
      >
    ): void;
    getEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
      >
    ): void;
    getEnhancedMeasurementSettings(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
      >
    ): void;
    getEnhancedMeasurementSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
        >
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings;
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.webDataStreams.getGlobalSiteTag
     * @desc Returns the Site Tag for the specified web stream. Site Tags are immutable singletons.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsadmin.properties.webDataStreams.getGlobalSiteTag({
     *     // Required. The name of the site tag to lookup. Note that site tags are singletons and do not have unique IDs. Format: properties/{property_id}/webDataStreams/{stream_id}/globalSiteTag Example: "properties/123/webDataStreams/456/globalSiteTag"
     *     name:
     *       'properties/my-propertie/webDataStreams/my-webDataStream/globalSiteTag',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "snippet": "my_snippet"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias analyticsadmin.properties.webDataStreams.getGlobalSiteTag
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the site tag to lookup. Note that site tags are singletons and do not have unique IDs. Format: properties/{property_id}/webDataStreams/{stream_id}/globalSiteTag Example: "properties/123/webDataStreams/456/globalSiteTag"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag
      >
    ): void;
    getGlobalSiteTag(
      params: Params$Resource$Properties$Webdatastreams$Getglobalsitetag,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag
      >
    ): void;
    getGlobalSiteTag(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag
      >
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
        params = {} as Params$Resource$Properties$Webdatastreams$Getglobalsitetag;
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaGlobalSiteTag
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.webDataStreams.list
     * @desc Returns child web data streams under the specified parent property. Web data streams will be excluded if the caller does not have access. Returns an empty list if no relevant web data streams are found.
     * @example
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
     *     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
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
     * @alias analyticsadmin.properties.webDataStreams.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string=} params.pageToken A page token, received from a previous `ListWebDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWebDataStreams` must match the call that provided the page token.
     * @param {string} params.parent Required. The name of the parent property. For example, to list results of web streams under the property with Id 123: "properties/123"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Properties$Webdatastreams$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Properties$Webdatastreams$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse
    >;
    list(
      params: Params$Resource$Properties$Webdatastreams$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Webdatastreams$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse
      >
    ): void;
    list(
      params: Params$Resource$Properties$Webdatastreams$List,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$List
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse
        >
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.webDataStreams.patch
     * @desc Updates a web stream on a property.
     * @example
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
     *     // Output only. Resource name of this Data Stream. Format: properties/{property_id}/webDataStreams/{stream_id} Example: "properties/1000/webDataStreams/2000"
     *     name: 'properties/my-propertie/webDataStreams/my-webDataStream',
     *     // The list of fields to be updated. Omitted fields will not be updated.
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
     * @alias analyticsadmin.properties.webDataStreams.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of this Data Stream. Format: properties/{property_id}/webDataStreams/{stream_id} Example: "properties/1000/webDataStreams/2000"
     * @param {string=} params.updateMask The list of fields to be updated. Omitted fields will not be updated.
     * @param {().GoogleAnalyticsAdminV1alphaWebDataStream} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
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
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaWebDataStream
      >
    ): void;
    patch(
      params: Params$Resource$Properties$Webdatastreams$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaWebDataStream
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaWebDataStream
      >
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaWebDataStream
        >(parameters);
      }
    }

    /**
     * analyticsadmin.properties.webDataStreams.updateEnhancedMeasurementSettings
     * @desc Updates the singleton enhanced measurement settings for this web stream. Note that the stream must enable enhanced measurement for these settings to take effect.
     * @example
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
     *   const res = await analyticsadmin.properties.webDataStreams.updateEnhancedMeasurementSettings(
     *     {
     *       // Output only. Resource name of this Data Stream. Format: properties/{property_id}/webDataStreams/{stream_id}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
     *       name:
     *         'properties/my-propertie/webDataStreams/my-webDataStream/enhancedMeasurementSettings',
     *       // The list of fields to be updated. Omitted fields will not be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "articlesAndBlogsEnabled": false,
     *         //   "contentViewsEnabled": false,
     *         //   "dataTaggedElementClicksEnabled": false,
     *         //   "excludedDomains": "my_excludedDomains",
     *         //   "fileDownloadsEnabled": false,
     *         //   "formInteractionsEnabled": false,
     *         //   "name": "my_name",
     *         //   "outboundClicksEnabled": false,
     *         //   "pageChangesEnabled": false,
     *         //   "pageLoadsEnabled": false,
     *         //   "pageViewsEnabled": false,
     *         //   "productsAndEcommerceEnabled": false,
     *         //   "scrollsEnabled": false,
     *         //   "searchQueryParameter": "my_searchQueryParameter",
     *         //   "siteSearchEnabled": false,
     *         //   "streamEnabled": false,
     *         //   "urlQueryParameter": "my_urlQueryParameter",
     *         //   "videoEngagementEnabled": false
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "articlesAndBlogsEnabled": false,
     *   //   "contentViewsEnabled": false,
     *   //   "dataTaggedElementClicksEnabled": false,
     *   //   "excludedDomains": "my_excludedDomains",
     *   //   "fileDownloadsEnabled": false,
     *   //   "formInteractionsEnabled": false,
     *   //   "name": "my_name",
     *   //   "outboundClicksEnabled": false,
     *   //   "pageChangesEnabled": false,
     *   //   "pageLoadsEnabled": false,
     *   //   "pageViewsEnabled": false,
     *   //   "productsAndEcommerceEnabled": false,
     *   //   "scrollsEnabled": false,
     *   //   "searchQueryParameter": "my_searchQueryParameter",
     *   //   "siteSearchEnabled": false,
     *   //   "streamEnabled": false,
     *   //   "urlQueryParameter": "my_urlQueryParameter",
     *   //   "videoEngagementEnabled": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias analyticsadmin.properties.webDataStreams.updateEnhancedMeasurementSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of this Data Stream. Format: properties/{property_id}/webDataStreams/{stream_id}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
     * @param {string=} params.updateMask The list of fields to be updated. Omitted fields will not be updated.
     * @param {().GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateEnhancedMeasurementSettings(
      params?: Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
    >;
    updateEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
          >,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
      >
    ): void;
    updateEnhancedMeasurementSettings(
      params: Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings,
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
      >
    ): void;
    updateEnhancedMeasurementSettings(
      callback: BodyResponseCallback<
        Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
      >
    ): void;
    updateEnhancedMeasurementSettings(
      paramsOrCallback?:
        | Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
          >
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
          >
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<
            Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
          >
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<
          Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
        >
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Webdatastreams$Updateenhancedmeasurementsettings;
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
        createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
        >(parameters, callback as BodyResponseCallback<{} | void>);
      } else {
        return createAPIRequest<
          Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
        >(parameters);
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
     * Required. The name of the web data stream to delete. Format: properties/{property_id}/webDataStreams/{stream_id} Example: "properties/123/webDataStreams/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Webdatastreams$Get
    extends StandardParameters {
    /**
     * Required. The name of the web data stream to lookup. Format: properties/{property_id}/webDataStreams/{stream_id} Example: "properties/123/webDataStreams/456"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Webdatastreams$Getenhancedmeasurementsettings
    extends StandardParameters {
    /**
     * Required. The name of the settings to lookup. Format: properties/{property_id}/webDataStreams/{stream_id}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Webdatastreams$Getglobalsitetag
    extends StandardParameters {
    /**
     * Required. The name of the site tag to lookup. Note that site tags are singletons and do not have unique IDs. Format: properties/{property_id}/webDataStreams/{stream_id}/globalSiteTag Example: "properties/123/webDataStreams/456/globalSiteTag"
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
     * Output only. Resource name of this Data Stream. Format: properties/{property_id}/webDataStreams/{stream_id} Example: "properties/1000/webDataStreams/2000"
     */
    name?: string;
    /**
     * The list of fields to be updated. Omitted fields will not be updated.
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
     * Output only. Resource name of this Data Stream. Format: properties/{property_id}/webDataStreams/{stream_id}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
     */
    name?: string;
    /**
     * The list of fields to be updated. Omitted fields will not be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings;
  }
}
