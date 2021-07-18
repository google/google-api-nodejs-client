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

export namespace cloudsearch_v1 {
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
   * Cloud Search API
   *
   * Cloud Search provides cloud-based search capabilities over Google Workspace data. The Cloud Search API allows indexing of non-Google Workspace data into Cloud Search.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudsearch = google.cloudsearch('v1');
   * ```
   */
  export class Cloudsearch {
    context: APIRequestContext;
    debug: Resource$Debug;
    indexing: Resource$Indexing;
    media: Resource$Media;
    operations: Resource$Operations;
    query: Resource$Query;
    settings: Resource$Settings;
    stats: Resource$Stats;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.debug = new Resource$Debug(this.context);
      this.indexing = new Resource$Indexing(this.context);
      this.media = new Resource$Media(this.context);
      this.operations = new Resource$Operations(this.context);
      this.query = new Resource$Query(this.context);
      this.settings = new Resource$Settings(this.context);
      this.stats = new Resource$Stats(this.context);
    }
  }

  /**
   * Represents the settings for Cloud audit logging
   */
  export interface Schema$AuditLoggingSettings {
    /**
     * Indicates whether audit logging is on/off for admin activity read APIs i.e. Get/List DataSources, Get/List SearchApplications etc.
     */
    logAdminReadActions?: boolean | null;
    /**
     * Indicates whether audit logging is on/off for data access read APIs i.e. ListItems, GetItem etc.
     */
    logDataReadActions?: boolean | null;
    /**
     * Indicates whether audit logging is on/off for data access write APIs i.e. IndexItem etc.
     */
    logDataWriteActions?: boolean | null;
    /**
     * The resource name of the GCP Project to store audit logs. Cloud audit logging will be enabled after project_name has been updated through CustomerService. Format: projects/{project_id\}
     */
    project?: string | null;
  }
  /**
   * Used to provide a search operator for boolean properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$BooleanOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to isolate the boolean property. For example, if operatorName is *closed* and the property's name is *isClosed*, then queries like *closed:<value\>* show results only where the value of the property named *isClosed* matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator returns all items where *<value\>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * Options for boolean properties.
   */
  export interface Schema$BooleanPropertyOptions {
    /**
     * If set, describes how the boolean should be used as a search operator.
     */
    operatorOptions?: Schema$BooleanOperatorOptions;
  }
  export interface Schema$CheckAccessResponse {
    /**
     * Returns true if principal has access. Returns false otherwise.
     */
    hasAccess?: boolean | null;
  }
  export interface Schema$CompositeFilter {
    /**
     * The logic operator of the sub filter.
     */
    logicOperator?: string | null;
    /**
     * Sub filters.
     */
    subFilters?: Schema$Filter[];
  }
  /**
   * A named attribute associated with an item which can be used for influencing the ranking of the item based on the context in the request.
   */
  export interface Schema$ContextAttribute {
    /**
     * The name of the attribute. It should not be empty. The maximum length is 32 characters. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The name will be normalized (lower-cased) before being matched.
     */
    name?: string | null;
    /**
     * Text values of the attribute. The maximum number of elements is 10. The maximum length of an element in the array is 32 characters. The value will be normalized (lower-cased) before being matched.
     */
    values?: string[] | null;
  }
  /**
   * Aggregation of items by status code as of the specified date.
   */
  export interface Schema$CustomerIndexStats {
    /**
     * Date for which statistics were calculated.
     */
    date?: Schema$Date;
    /**
     * Number of items aggregrated by status code.
     */
    itemCountByStatus?: Schema$ItemCountByStatus[];
  }
  export interface Schema$CustomerQueryStats {
    /**
     * Date for which query stats were calculated. Stats calculated on the next day close to midnight are returned.
     */
    date?: Schema$Date;
    queryCountByStatus?: Schema$QueryCountByStatus[];
  }
  export interface Schema$CustomerSessionStats {
    /**
     * Date for which session stats were calculated. Stats calculated on the next day close to midnight are returned.
     */
    date?: Schema$Date;
    /**
     * The count of search sessions on the day
     */
    searchSessionsCount?: string | null;
  }
  /**
   * Represents settings at a customer level.
   */
  export interface Schema$CustomerSettings {
    /**
     * Audit Logging settings for the customer. If update_mask is empty then this field will be updated based on UpdateCustomerSettings request.
     */
    auditLoggingSettings?: Schema$AuditLoggingSettings;
    /**
     * VPC SC settings for the customer. If update_mask is empty then this field will be updated based on UpdateCustomerSettings request.
     */
    vpcSettings?: Schema$VPCSettings;
  }
  export interface Schema$CustomerUserStats {
    /**
     * Date for which session stats were calculated. Stats calculated on the next day close to midnight are returned.
     */
    date?: Schema$Date;
    /**
     * The count of unique active users in the past one day
     */
    oneDayActiveUsersCount?: string | null;
    /**
     * The count of unique active users in the past seven days
     */
    sevenDaysActiveUsersCount?: string | null;
    /**
     * The count of unique active users in the past thirty days
     */
    thirtyDaysActiveUsersCount?: string | null;
  }
  /**
   * Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.
   */
  export interface Schema$DataSource {
    /**
     * If true, sets the datasource to read-only mode. In read-only mode, the Indexing API rejects any requests to index or delete items in this source. Enabling read-only mode does not stop the processing of previously accepted data.
     */
    disableModifications?: boolean | null;
    /**
     * Disable serving any search or assist results.
     */
    disableServing?: boolean | null;
    /**
     * Required. Display name of the datasource The maximum length is 300 characters.
     */
    displayName?: string | null;
    /**
     * List of service accounts that have indexing access.
     */
    indexingServiceAccounts?: string[] | null;
    /**
     * This field restricts visibility to items at the datasource level. Items within the datasource are restricted to the union of users and groups included in this field. Note that, this does not ensure access to a specific item, as users need to have ACL permissions on the contained items. This ensures a high level access on the entire datasource, and that the individual items are not shared outside this visibility.
     */
    itemsVisibility?: Schema$GSuitePrincipal[];
    /**
     * Name of the datasource resource. Format: datasources/{source_id\}. The name is ignored when creating a datasource.
     */
    name?: string | null;
    /**
     * IDs of the Long Running Operations (LROs) currently running for this schema.
     */
    operationIds?: string[] | null;
    /**
     * A short name or alias for the source. This value will be used to match the 'source' operator. For example, if the short name is *<value\>* then queries like *source:<value\>* will only return results for this source. The value must be unique across all datasources. The value must only contain alphanumeric characters (a-zA-Z0-9). The value cannot start with 'google' and cannot be one of the following: mail, gmail, docs, drive, groups, sites, calendar, hangouts, gplus, keep, people, teams. Its maximum length is 32 characters.
     */
    shortName?: string | null;
  }
  /**
   * Aggregation of items by status code as of the specified date.
   */
  export interface Schema$DataSourceIndexStats {
    /**
     * Date for which index stats were calculated. If the date of request is not the current date then stats calculated on the next day are returned. Stats are calculated close to mid night in this case. If date of request is current date, then real time stats are returned.
     */
    date?: Schema$Date;
    /**
     * Number of items aggregrated by status code.
     */
    itemCountByStatus?: Schema$ItemCountByStatus[];
  }
  /**
   * Restriction on Datasource.
   */
  export interface Schema$DataSourceRestriction {
    /**
     * Filter options restricting the results. If multiple filters are present, they are grouped by object type before joining. Filters with the same object type are joined conjunctively, then the resulting expressions are joined disjunctively. The maximum number of elements is 20. NOTE: Suggest API supports only few filters at the moment: "objecttype", "type" and "mimetype". For now, schema specific filters cannot be used to filter suggestions.
     */
    filterOptions?: Schema$FilterOptions[];
    /**
     * The source of restriction.
     */
    source?: Schema$Source;
  }
  /**
   * Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999.
   */
  export interface Schema$Date {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    day?: number | null;
    /**
     * Month of date. Must be from 1 to 12.
     */
    month?: number | null;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    year?: number | null;
  }
  /**
   * Optional. Provides a search operator for date properties. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$DateOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to isolate the date property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value\>* show results only where the value of the property named *closeDate* is later than *<value\>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    greaterThanOperatorName?: string | null;
    /**
     * Indicates the operator name required in the query in order to isolate the date property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value\>* show results only where the value of the property named *closeDate* is earlier than *<value\>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    lessThanOperatorName?: string | null;
    /**
     * Indicates the actual string required in the query in order to isolate the date property. For example, suppose an issue tracking schema object has a property named *closeDate* that specifies an operator with an operatorName of *closedon*. For searches on that data, queries like *closedon:<value\>* show results only where the value of the *closeDate* property matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator returns all items where *<value\>* matches the value of any String properties or text within the content field for the indexed datasource. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * Options for date properties.
   */
  export interface Schema$DatePropertyOptions {
    /**
     * If set, describes how the date should be used as a search operator.
     */
    operatorOptions?: Schema$DateOperatorOptions;
  }
  /**
   * List of date values.
   */
  export interface Schema$DateValues {
    values?: Schema$Date[];
  }
  /**
   * Shared request debug options for all cloudsearch RPC methods.
   */
  export interface Schema$DebugOptions {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    enableDebugging?: boolean | null;
  }
  export interface Schema$DeleteQueueItemsRequest {
    /**
     * Name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string | null;
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * Name of a queue to delete items from.
     */
    queue?: string | null;
  }
  /**
   * A reference to a top-level property within the object that should be displayed in search results. The values of the chosen properties is displayed in the search results along with the display label for that property if one is specified. If a display label is not specified, only the values is shown.
   */
  export interface Schema$DisplayedProperty {
    /**
     * The name of the top-level property as defined in a property definition for the object. If the name is not a defined property in the schema, an error is given when attempting to update the schema.
     */
    propertyName?: string | null;
  }
  /**
   * Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$DoubleOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to use the double property in sorting or as a facet. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * Options for double properties.
   */
  export interface Schema$DoublePropertyOptions {
    /**
     * If set, describes how the double should be used as a search operator.
     */
    operatorOptions?: Schema$DoubleOperatorOptions;
  }
  /**
   * List of double values.
   */
  export interface Schema$DoubleValues {
    values?: number[] | null;
  }
  /**
   * Drive follow-up search restricts (e.g. "followup:suggestions").
   */
  export interface Schema$DriveFollowUpRestrict {
    type?: string | null;
  }
  /**
   * Drive location search restricts (e.g. "is:starred").
   */
  export interface Schema$DriveLocationRestrict {
    type?: string | null;
  }
  /**
   * Drive mime-type search restricts (e.g. "type:pdf").
   */
  export interface Schema$DriveMimeTypeRestrict {
    type?: string | null;
  }
  /**
   * The time span search restrict (e.g. "after:2017-09-11 before:2017-09-12").
   */
  export interface Schema$DriveTimeSpanRestrict {
    type?: string | null;
  }
  /**
   * A person's email address.
   */
  export interface Schema$EmailAddress {
    /**
     * The email address.
     */
    emailAddress?: string | null;
  }
  /**
   * Used to provide a search operator for enum properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. For example, if you provide no operator for a *priority* enum property with possible values *p0* and *p1*, a query that contains the term *p0* returns items that have *p0* as the value of the *priority* property, as well as any items that contain the string *p0* in other fields. If you provide an operator name for the enum, such as *priority*, then search users can use that operator to refine results to only items that have *p0* as this property's value, with the query *priority:p0*.
   */
  export interface Schema$EnumOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to isolate the enum property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value\>* show results only where the value of the property named *priorityVal* matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator returns all items where *<value\>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * Options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*.
   */
  export interface Schema$EnumPropertyOptions {
    /**
     * If set, describes how the enum should be used as a search operator.
     */
    operatorOptions?: Schema$EnumOperatorOptions;
    /**
     * Used to specify the ordered ranking for the enumeration that determines how the integer values provided in the possible EnumValuePairs are used to rank results. If specified, integer values must be provided for all possible EnumValuePair values given for this property. Can only be used if isRepeatable is false.
     */
    orderedRanking?: string | null;
    /**
     * The list of possible values for the enumeration property. All EnumValuePairs must provide a string value. If you specify an integer value for one EnumValuePair, then all possible EnumValuePairs must provide an integer value. Both the string value and integer value must be unique over all possible values. Once set, possible values cannot be removed or modified. If you supply an ordered ranking and think you might insert additional enum values in the future, leave gaps in the initial integer values to allow adding a value in between previously registered values. The maximum number of elements is 100.
     */
    possibleValues?: Schema$EnumValuePair[];
  }
  /**
   * The enumeration value pair defines two things: a required string value and an optional integer value. The string value defines the necessary query term required to retrieve that item, such as *p0* for a priority item. The integer value determines the ranking of that string value relative to other enumerated values for the same property. For example, you might associate *p0* with *0* and define another enum pair such as *p1* and *1*. You must use the integer value in combination with ordered ranking to set the ranking of a given value relative to other enumerated values for the same property name. Here, a ranking order of DESCENDING for *priority* properties results in a ranking boost for items indexed with a value of *p0* compared to items indexed with a value of *p1*. Without a specified ranking order, the integer value has no effect on item ranking.
   */
  export interface Schema$EnumValuePair {
    /**
     * The integer value of the EnumValuePair which must be non-negative. Optional.
     */
    integerValue?: number | null;
    /**
     * The string value of the EnumValuePair. The maximum length is 32 characters.
     */
    stringValue?: string | null;
  }
  /**
   * List of enum values.
   */
  export interface Schema$EnumValues {
    /**
     * The maximum allowable length for string values is 32 characters.
     */
    values?: string[] | null;
  }
  /**
   * Error information about the response.
   */
  export interface Schema$ErrorInfo {
    errorMessages?: Schema$ErrorMessage[];
  }
  /**
   * Error message per source response.
   */
  export interface Schema$ErrorMessage {
    errorMessage?: string | null;
    source?: Schema$Source;
  }
  /**
   * A bucket in a facet is the basic unit of operation. A bucket can comprise either a single value OR a contiguous range of values, depending on the type of the field bucketed. FacetBucket is currently used only for returning the response object.
   */
  export interface Schema$FacetBucket {
    /**
     * Number of results that match the bucket value. Counts are only returned for searches when count accuracy is ensured. Cloud Search does not guarantee facet counts for any query and facet counts might be present only intermittently, even for identical queries. Do not build dependencies on facet count existence; instead use facet ount percentages which are always returned.
     */
    count?: number | null;
    /**
     * Percent of results that match the bucket value. The returned value is between (0-100], and is rounded down to an integer if fractional. If the value is not explicitly returned, it represents a percentage value that rounds to 0. Percentages are returned for all searches, but are an estimate. Because percentages are always returned, you should render percentages instead of counts.
     */
    percentage?: number | null;
    value?: Schema$Value;
  }
  /**
   * Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination.
   */
  export interface Schema$FacetOptions {
    /**
     * Maximum number of facet buckets that should be returned for this facet. Defaults to 10. Maximum value is 100.
     */
    numFacetBuckets?: number | null;
    /**
     * If object_type is set, only those objects of that type will be used to compute facets. If empty, then all objects will be used to compute facets.
     */
    objectType?: string | null;
    /**
     * Name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions
     */
    operatorName?: string | null;
    /**
     * Source name to facet on. Format: datasources/{source_id\} If empty, all data sources will be used.
     */
    sourceName?: string | null;
  }
  /**
   * Source specific facet response
   */
  export interface Schema$FacetResult {
    /**
     * FacetBuckets for values in response containing at least a single result.
     */
    buckets?: Schema$FacetBucket[];
    /**
     * Object type for which facet results are returned. Can be empty.
     */
    objectType?: string | null;
    /**
     * Name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions
     */
    operatorName?: string | null;
    /**
     * Source name for which facet results are returned. Will not be empty.
     */
    sourceName?: string | null;
  }
  export interface Schema$FieldViolation {
    /**
     * Description of the error.
     */
    description?: string | null;
    /**
     * Path of field with violation.
     */
    field?: string | null;
  }
  /**
   * A generic way of expressing filters in a query, which supports two approaches: **1. Setting a ValueFilter.** The name must match an operator_name defined in the schema for your data source. **2. Setting a CompositeFilter.** The filters are evaluated using the logical operator. The top-level operators can only be either an AND or a NOT. AND can appear only at the top-most level. OR can appear only under a top-level AND.
   */
  export interface Schema$Filter {
    compositeFilter?: Schema$CompositeFilter;
    valueFilter?: Schema$ValueFilter;
  }
  /**
   * Filter options to be applied on query.
   */
  export interface Schema$FilterOptions {
    /**
     * Generic filter to restrict the search, such as `lang:en`, `site:xyz`.
     */
    filter?: Schema$Filter;
    /**
     * If object_type is set, only objects of that type are returned. This should correspond to the name of the object that was registered within the definition of schema. The maximum length is 256 characters.
     */
    objectType?: string | null;
  }
  /**
   * Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly.
   */
  export interface Schema$FreshnessOptions {
    /**
     * The duration after which an object should be considered stale. The default value is 180 days (in seconds).
     */
    freshnessDuration?: string | null;
    /**
     * This property indicates the freshness level of the object in the index. If set, this property must be a top-level property within the property definitions and it must be a timestamp type or date type. Otherwise, the Indexing API uses updateTime as the freshness indicator. The maximum length is 256 characters. When a property is used to calculate freshness, the value defaults to 2 years from the current time.
     */
    freshnessProperty?: string | null;
  }
  export interface Schema$GetCustomerIndexStatsResponse {
    /**
     * Summary of indexed item counts, one for each day in the requested range.
     */
    stats?: Schema$CustomerIndexStats[];
  }
  export interface Schema$GetCustomerQueryStatsResponse {
    stats?: Schema$CustomerQueryStats[];
  }
  export interface Schema$GetCustomerSessionStatsResponse {
    stats?: Schema$CustomerSessionStats[];
  }
  export interface Schema$GetCustomerUserStatsResponse {
    stats?: Schema$CustomerUserStats[];
  }
  export interface Schema$GetDataSourceIndexStatsResponse {
    /**
     * Summary of indexed item counts, one for each day in the requested range.
     */
    stats?: Schema$DataSourceIndexStats[];
  }
  export interface Schema$GetSearchApplicationQueryStatsResponse {
    stats?: Schema$SearchApplicationQueryStats[];
  }
  export interface Schema$GetSearchApplicationSessionStatsResponse {
    stats?: Schema$SearchApplicationSessionStats[];
  }
  export interface Schema$GetSearchApplicationUserStatsResponse {
    stats?: Schema$SearchApplicationUserStats[];
  }
  export interface Schema$GSuitePrincipal {
    /**
     * This principal represents all users of the G Suite domain of the customer.
     */
    gsuiteDomain?: boolean | null;
    /**
     * This principal references a G Suite group account
     */
    gsuiteGroupEmail?: string | null;
    /**
     * This principal references a G Suite user account
     */
    gsuiteUserEmail?: string | null;
  }
  /**
   * Used to provide a search operator for html properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$HtmlOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to isolate the html property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value\>* show results only where the value of the property named *subjectLine* matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator return all items where *<value\>* matches the value of any html properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * Options for html properties.
   */
  export interface Schema$HtmlPropertyOptions {
    /**
     * If set, describes how the property should be used as a search operator.
     */
    operatorOptions?: Schema$HtmlOperatorOptions;
    /**
     * Indicates the search quality importance of the tokens within the field when used for retrieval. Can only be set to DEFAULT or NONE.
     */
    retrievalImportance?: Schema$RetrievalImportance;
  }
  /**
   * List of html values.
   */
  export interface Schema$HtmlValues {
    /**
     * The maximum allowable length for html values is 2048 characters.
     */
    values?: string[] | null;
  }
  export interface Schema$IndexItemOptions {
    /**
     * Specifies if the index request should allow gsuite principals that do not exist or are deleted in the index request.
     */
    allowUnknownGsuitePrincipals?: boolean | null;
  }
  export interface Schema$IndexItemRequest {
    /**
     * Name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string | null;
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    indexItemOptions?: Schema$IndexItemOptions;
    /**
     * Name of the item. Format: datasources/{source_id\}/items/{item_id\}
     */
    item?: Schema$Item;
    /**
     * Required. The RequestMode for this request.
     */
    mode?: string | null;
  }
  /**
   * Used to provide a search operator for integer properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$IntegerOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to isolate the integer property using the greater-than operator. For example, if greaterThanOperatorName is *priorityabove* and the property's name is *priorityVal*, then queries like *priorityabove:<value\>* show results only where the value of the property named *priorityVal* is greater than *<value\>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    greaterThanOperatorName?: string | null;
    /**
     * Indicates the operator name required in the query in order to isolate the integer property using the less-than operator. For example, if lessThanOperatorName is *prioritybelow* and the property's name is *priorityVal*, then queries like *prioritybelow:<value\>* show results only where the value of the property named *priorityVal* is less than *<value\>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    lessThanOperatorName?: string | null;
    /**
     * Indicates the operator name required in the query in order to isolate the integer property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value\>* show results only where the value of the property named *priorityVal* matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator returns all items where *<value\>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * Options for integer properties.
   */
  export interface Schema$IntegerPropertyOptions {
    /**
     * The maximum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values greater than the maximum are accepted and ranked with the same weight as items indexed with the maximum value.
     */
    maximumValue?: string | null;
    /**
     * The minimum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values less than the minimum are accepted and ranked with the same weight as items indexed with the minimum value.
     */
    minimumValue?: string | null;
    /**
     * If set, describes how the integer should be used as a search operator.
     */
    operatorOptions?: Schema$IntegerOperatorOptions;
    /**
     * Used to specify the ordered ranking for the integer. Can only be used if isRepeatable is false.
     */
    orderedRanking?: string | null;
  }
  /**
   * List of integer values.
   */
  export interface Schema$IntegerValues {
    values?: string[] | null;
  }
  /**
   * Represents an interaction between a user and an item.
   */
  export interface Schema$Interaction {
    /**
     * The time when the user acted on the item. If multiple actions of the same type exist for a single user, only the most recent action is recorded.
     */
    interactionTime?: string | null;
    /**
     * The user that acted on the item.
     */
    principal?: Schema$Principal;
    type?: string | null;
  }
  /**
   * Represents a single object that is an item in the search index, such as a file, folder, or a database record.
   */
  export interface Schema$Item {
    /**
     * Access control list for this item.
     */
    acl?: Schema$ItemAcl;
    /**
     * Item content to be indexed and made text searchable.
     */
    content?: Schema$ItemContent;
    /**
     * Type for this item.
     */
    itemType?: string | null;
    /**
     * Metadata information.
     */
    metadata?: Schema$ItemMetadata;
    /**
     * Name of the Item. Format: datasources/{source_id\}/items/{item_id\} This is a required field. The maximum length is 1536 characters.
     */
    name?: string | null;
    /**
     * Additional state connector can store for this item. The maximum length is 10000 bytes.
     */
    payload?: string | null;
    /**
     * Queue this item belongs to. The maximum length is 100 characters.
     */
    queue?: string | null;
    /**
     * Status of the item. Output only field.
     */
    status?: Schema$ItemStatus;
    /**
     * The structured data for the item that should conform to a registered object definition in the schema for the data source.
     */
    structuredData?: Schema$ItemStructuredData;
    /**
     * Required. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't index or delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes.
     */
    version?: string | null;
  }
  /**
   * Access control list information for the item. For more information see [Map ACLs](/cloud-search/docs/guides/acls).
   */
  export interface Schema$ItemAcl {
    /**
     * Sets the type of access rules to apply when an item inherits its ACL from a parent. This should always be set in tandem with the inheritAclFrom field. Also, when the inheritAclFrom field is set, this field should be set to a valid AclInheritanceType.
     */
    aclInheritanceType?: string | null;
    /**
     * List of principals who are explicitly denied access to the item in search results. While principals are denied access by default, use denied readers to handle exceptions and override the list allowed readers. The maximum number of elements is 100.
     */
    deniedReaders?: Schema$Principal[];
    /**
     * Name of the item to inherit the Access Permission List (ACL) from. Note: ACL inheritance *only* provides access permissions to child items and does not define structural relationships, nor does it provide convenient ways to delete large groups of items. Deleting an ACL parent from the index only alters the access permissions of child items that reference the parent in the inheritAclFrom field. The item is still in the index, but may not visible in search results. By contrast, deletion of a container item also deletes all items that reference the container via the containerName field. The maximum length for this field is 1536 characters.
     */
    inheritAclFrom?: string | null;
    /**
     * Optional. List of owners for the item. This field has no bearing on document access permissions. It does, however, offer a slight ranking boosts items where the querying user is an owner. The maximum number of elements is 5.
     */
    owners?: Schema$Principal[];
    /**
     * List of principals who are allowed to see the item in search results. Optional if inheriting permissions from another item or if the item is not intended to be visible, such as virtual containers. The maximum number of elements is 1000.
     */
    readers?: Schema$Principal[];
  }
  /**
   * Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded.
   */
  export interface Schema$ItemContent {
    /**
     * Upload reference ID of a previously uploaded content via write method.
     */
    contentDataRef?: Schema$UploadItemRef;
    contentFormat?: string | null;
    /**
     * Hashing info calculated and provided by the API client for content. Can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.
     */
    hash?: string | null;
    /**
     * Content that is supplied inlined within the update method. The maximum length is 102400 bytes (100 KiB).
     */
    inlineContent?: string | null;
  }
  export interface Schema$ItemCountByStatus {
    /**
     * Number of items matching the status code.
     */
    count?: string | null;
    /**
     * Status of the items.
     */
    statusCode?: string | null;
  }
  /**
   * Available metadata fields for the item.
   */
  export interface Schema$ItemMetadata {
    /**
     * The name of the container for this item. Deletion of the container item leads to automatic deletion of this item. Note: ACLs are not inherited from a container item. To provide ACL inheritance for an item, use the inheritAclFrom field. The maximum length is 1536 characters.
     */
    containerName?: string | null;
    /**
     * The BCP-47 language code for the item, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. The maximum length is 32 characters.
     */
    contentLanguage?: string | null;
    /**
     * A set of named attributes associated with the item. This can be used for influencing the ranking of the item based on the context in the request. The maximum number of elements is 10.
     */
    contextAttributes?: Schema$ContextAttribute[];
    /**
     * The time when the item was created in the source repository.
     */
    createTime?: string | null;
    /**
     * Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.
     */
    hash?: string | null;
    /**
     * A list of interactions for the item. Interactions are used to improve Search quality, but are not exposed to end users. The maximum number of elements is 1000.
     */
    interactions?: Schema$Interaction[];
    /**
     * Additional keywords or phrases that should match the item. Used internally for user generated content. The maximum number of elements is 100. The maximum length is 8192 characters.
     */
    keywords?: string[] | null;
    /**
     * The original mime-type of ItemContent.content in the source repository. The maximum length is 256 characters.
     */
    mimeType?: string | null;
    /**
     * The type of the item. This should correspond to the name of an object definition in the schema registered for the data source. For example, if the schema for the data source contains an object definition with name 'document', then item indexing requests for objects of that type should set objectType to 'document'. The maximum length is 256 characters.
     */
    objectType?: string | null;
    /**
     * Additional search quality metadata of the item
     */
    searchQualityMetadata?: Schema$SearchQualityMetadata;
    /**
     * Link to the source repository serving the data. Search results apply this link to the title. Whitespace or special characters may cause Cloud Search result links to trigger a redirect notice; to avoid this, encode the URL. The maximum length is 2048 characters.
     */
    sourceRepositoryUrl?: string | null;
    /**
     * The title of the item. If given, this will be the displayed title of the Search result. The maximum length is 2048 characters.
     */
    title?: string | null;
    /**
     * The time when the item was last modified in the source repository.
     */
    updateTime?: string | null;
  }
  /**
   * This contains item's status and any errors.
   */
  export interface Schema$ItemStatus {
    /**
     * Status code.
     */
    code?: string | null;
    /**
     * Error details in case the item is in ERROR state.
     */
    processingErrors?: Schema$ProcessingError[];
    /**
     * Repository error reported by connector.
     */
    repositoryErrors?: Schema$RepositoryError[];
  }
  /**
   * Available structured data fields for the item.
   */
  export interface Schema$ItemStructuredData {
    /**
     * Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.
     */
    hash?: string | null;
    /**
     * The structured data object that should conform to a registered object definition in the schema for the data source.
     */
    object?: Schema$StructuredDataObject;
  }
  export interface Schema$ListDataSourceResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    sources?: Schema$DataSource[];
  }
  export interface Schema$ListItemNamesForUnmappedIdentityResponse {
    itemNames?: string[] | null;
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListItemsResponse {
    items?: Schema$Item[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * List sources response.
   */
  export interface Schema$ListQuerySourcesResponse {
    nextPageToken?: string | null;
    sources?: Schema$QuerySource[];
  }
  export interface Schema$ListSearchApplicationsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    searchApplications?: Schema$SearchApplication[];
  }
  export interface Schema$ListUnmappedIdentitiesResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    unmappedIdentities?: Schema$UnmappedIdentity[];
  }
  /**
   * Matched range of a snippet [start, end).
   */
  export interface Schema$MatchRange {
    /**
     * End of the match in the snippet.
     */
    end?: number | null;
    /**
     * Starting position of the match in the snippet.
     */
    start?: number | null;
  }
  /**
   * Media resource.
   */
  export interface Schema$Media {
    /**
     * Name of the media resource.
     */
    resourceName?: string | null;
  }
  /**
   * Metadata of a matched search result.
   */
  export interface Schema$Metadata {
    /**
     * The creation time for this document or object in the search result.
     */
    createTime?: string | null;
    /**
     * Options that specify how to display a structured data search result.
     */
    displayOptions?: Schema$ResultDisplayMetadata;
    /**
     * Indexed fields in structured data, returned as a generic named property.
     */
    fields?: Schema$NamedProperty[];
    /**
     * Mime type of the search result.
     */
    mimeType?: string | null;
    /**
     * Object type of the search result.
     */
    objectType?: string | null;
    /**
     * Owner (usually creator) of the document or object of the search result.
     */
    owner?: Schema$Person;
    /**
     * The named source for the result, such as Gmail.
     */
    source?: Schema$Source;
    /**
     * The last modified date for the object in the search result. If not set in the item, the value returned here is empty. When `updateTime` is used for calculating freshness and is not set, this value defaults to 2 years from the current time.
     */
    updateTime?: string | null;
  }
  /**
   * A metaline is a list of properties that are displayed along with the search result to provide context.
   */
  export interface Schema$Metaline {
    /**
     * The list of displayed properties for the metaline. The maximum number of properties is 5.
     */
    properties?: Schema$DisplayedProperty[];
  }
  /**
   * A person's name.
   */
  export interface Schema$Name {
    /**
     * The read-only display name formatted according to the locale specified by the viewer's account or the Accept-Language HTTP header.
     */
    displayName?: string | null;
  }
  /**
   * A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.
   */
  export interface Schema$NamedProperty {
    booleanValue?: boolean | null;
    dateValues?: Schema$DateValues;
    doubleValues?: Schema$DoubleValues;
    enumValues?: Schema$EnumValues;
    htmlValues?: Schema$HtmlValues;
    integerValues?: Schema$IntegerValues;
    /**
     * The name of the property. This name should correspond to the name of the property that was registered for object definition in the schema. The maximum allowable length for this property is 256 characters.
     */
    name?: string | null;
    objectValues?: Schema$ObjectValues;
    textValues?: Schema$TextValues;
    timestampValues?: Schema$TimestampValues;
  }
  /**
   * The definition for an object within a data source.
   */
  export interface Schema$ObjectDefinition {
    /**
     * Name for the object, which then defines its type. Item indexing requests should set the objectType field equal to this value. For example, if *name* is *Document*, then indexing requests for items of type Document should set objectType equal to *Document*. Each object definition must be uniquely named within a schema. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters.
     */
    name?: string | null;
    /**
     * The optional object-specific options.
     */
    options?: Schema$ObjectOptions;
    /**
     * The property definitions for the object. The maximum number of elements is 1000.
     */
    propertyDefinitions?: Schema$PropertyDefinition[];
  }
  /**
   * The display options for an object.
   */
  export interface Schema$ObjectDisplayOptions {
    /**
     * Defines the properties that are displayed in the metalines of the search results. The property values are displayed in the order given here. If a property holds multiple values, all of the values are displayed before the next properties. For this reason, it is a good practice to specify singular properties before repeated properties in this list. All of the properties must set is_returnable to true. The maximum number of metalines is 3.
     */
    metalines?: Schema$Metaline[];
    /**
     * The user friendly label to display in the search result to indicate the type of the item. This is OPTIONAL; if not provided, an object label isn't displayed on the context line of the search results. The maximum length is 64 characters.
     */
    objectDisplayLabel?: string | null;
  }
  /**
   * The options for an object.
   */
  export interface Schema$ObjectOptions {
    /**
     * Options that determine how the object is displayed in the Cloud Search results page.
     */
    displayOptions?: Schema$ObjectDisplayOptions;
    /**
     * The freshness options for an object.
     */
    freshnessOptions?: Schema$FreshnessOptions;
  }
  /**
   * Options for object properties.
   */
  export interface Schema$ObjectPropertyOptions {
    /**
     * The properties of the sub-object. These properties represent a nested object. For example, if this property represents a postal address, the subobjectProperties might be named *street*, *city*, and *state*. The maximum number of elements is 1000.
     */
    subobjectProperties?: Schema$PropertyDefinition[];
  }
  /**
   * List of object values.
   */
  export interface Schema$ObjectValues {
    values?: Schema$StructuredDataObject[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * This field contains information about the person being suggested.
   */
  export interface Schema$PeopleSuggestion {
    /**
     * Suggested person. All fields of the person object might not be populated.
     */
    person?: Schema$Person;
  }
  /**
   * Object to represent a person.
   */
  export interface Schema$Person {
    /**
     * The person's email addresses
     */
    emailAddresses?: Schema$EmailAddress[];
    /**
     * The resource name of the person to provide information about. See People.get from Google People API.
     */
    name?: string | null;
    /**
     * Obfuscated ID of a person.
     */
    obfuscatedId?: string | null;
    /**
     * The person's name
     */
    personNames?: Schema$Name[];
    /**
     * A person's read-only photo. A picture shown next to the person's name to help others recognize the person in search results.
     */
    photos?: Schema$Photo[];
  }
  /**
   * A person's photo.
   */
  export interface Schema$Photo {
    /**
     * The URL of the photo.
     */
    url?: string | null;
  }
  export interface Schema$PollItemsRequest {
    /**
     * Name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string | null;
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * Maximum number of items to return. The maximum value is 100 and the default value is 20.
     */
    limit?: number | null;
    /**
     * Queue name to fetch items from. If unspecified, PollItems will fetch from 'default' queue. The maximum length is 100 characters.
     */
    queue?: string | null;
    /**
     * Limit the items polled to the ones with these statuses.
     */
    statusCodes?: string[] | null;
  }
  export interface Schema$PollItemsResponse {
    /**
     * Set of items from the queue available for connector to process. These items have the following subset of fields populated: version metadata.hash structured_data.hash content.hash payload status queue
     */
    items?: Schema$Item[];
  }
  /**
   * Reference to a user, group, or domain.
   */
  export interface Schema$Principal {
    /**
     * This principal is a group identified using an external identity. The name field must specify the group resource name with this format: identitysources/{source_id\}/groups/{ID\}
     */
    groupResourceName?: string | null;
    /**
     * This principal is a GSuite user, group or domain.
     */
    gsuitePrincipal?: Schema$GSuitePrincipal;
    /**
     * This principal is a user identified using an external identity. The name field must specify the user resource name with this format: identitysources/{source_id\}/users/{ID\}
     */
    userResourceName?: string | null;
  }
  export interface Schema$ProcessingError {
    /**
     * Error code indicating the nature of the error.
     */
    code?: string | null;
    /**
     * Description of the error.
     */
    errorMessage?: string | null;
    /**
     * In case the item fields are invalid, this field contains the details about the validation errors.
     */
    fieldViolations?: Schema$FieldViolation[];
  }
  /**
   * The definition of a property within an object.
   */
  export interface Schema$PropertyDefinition {
    booleanPropertyOptions?: Schema$BooleanPropertyOptions;
    datePropertyOptions?: Schema$DatePropertyOptions;
    /**
     * Options that determine how the property is displayed in the Cloud Search results page if it is specified to be displayed in the object's display options .
     */
    displayOptions?: Schema$PropertyDisplayOptions;
    doublePropertyOptions?: Schema$DoublePropertyOptions;
    enumPropertyOptions?: Schema$EnumPropertyOptions;
    htmlPropertyOptions?: Schema$HtmlPropertyOptions;
    integerPropertyOptions?: Schema$IntegerPropertyOptions;
    /**
     * Indicates that the property can be used for generating facets. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for Boolean, Enum, and Text properties.
     */
    isFacetable?: boolean | null;
    /**
     * Indicates that multiple values are allowed for the property. For example, a document only has one description but can have multiple comments. Cannot be true for properties whose type is a boolean. If set to false, properties that contain more than one value cause the indexing request for that item to be rejected.
     */
    isRepeatable?: boolean | null;
    /**
     * Indicates that the property identifies data that should be returned in search results via the Query API. If set to *true*, indicates that Query API users can use matching property fields in results. However, storing fields requires more space allocation and uses more bandwidth for search queries, which impacts performance over large datasets. Set to *true* here only if the field is needed for search results. Cannot be true for properties whose type is an object.
     */
    isReturnable?: boolean | null;
    /**
     * Indicates that the property can be used for sorting. Cannot be true for properties that are repeatable. Cannot be true for properties whose type is object or user identifier. IsReturnable must be true to set this option. Only supported for Boolean, Date, Double, Integer, and Timestamp properties.
     */
    isSortable?: boolean | null;
    /**
     * Indicates that the property can be used for generating query suggestions.
     */
    isSuggestable?: boolean | null;
    /**
     * Indicates that users can perform wildcard search for this property. Only supported for Text properties. IsReturnable must be true to set this option. In a given datasource maximum of 5 properties can be marked as is_wildcard_searchable.
     */
    isWildcardSearchable?: boolean | null;
    /**
     * The name of the property. Item indexing requests sent to the Indexing API should set the property name equal to this value. For example, if name is *subject_line*, then indexing requests for document items with subject fields should set the name for that field equal to *subject_line*. Use the name as the identifier for the object property. Once registered as a property for an object, you cannot re-use this name for another property within that object. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters.
     */
    name?: string | null;
    objectPropertyOptions?: Schema$ObjectPropertyOptions;
    textPropertyOptions?: Schema$TextPropertyOptions;
    timestampPropertyOptions?: Schema$TimestampPropertyOptions;
  }
  /**
   * The display options for a property.
   */
  export interface Schema$PropertyDisplayOptions {
    /**
     * The user friendly label for the property that is used if the property is specified to be displayed in ObjectDisplayOptions. If provided, the display label is shown in front of the property values when the property is part of the object display options. For example, if the property value is '1', the value by itself may not be useful context for the user. If the display name given was 'priority', then the user sees 'priority : 1' in the search results which provides clear context to search users. This is OPTIONAL; if not given, only the property values are displayed. The maximum length is 64 characters.
     */
    displayLabel?: string | null;
  }
  /**
   * Represents an item to be pushed to the indexing queue.
   */
  export interface Schema$PushItem {
    /**
     * Content hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.
     */
    contentHash?: string | null;
    /**
     * Metadata hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.
     */
    metadataHash?: string | null;
    /**
     * Provides additional document state information for the connector, such as an alternate repository ID and other metadata. The maximum length is 8192 bytes.
     */
    payload?: string | null;
    /**
     * Queue to which this item belongs to. The default queue is chosen if this field is not specified. The maximum length is 512 characters.
     */
    queue?: string | null;
    /**
     * Populate this field to store Connector or repository error details. This information is displayed in the Admin Console. This field may only be populated when the Type is REPOSITORY_ERROR.
     */
    repositoryError?: Schema$RepositoryError;
    /**
     * Structured data hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.
     */
    structuredDataHash?: string | null;
    /**
     * The type of the push operation that defines the push behavior.
     */
    type?: string | null;
  }
  export interface Schema$PushItemRequest {
    /**
     * Name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string | null;
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * Item to push onto the queue.
     */
    item?: Schema$PushItem;
  }
  export interface Schema$QueryCountByStatus {
    count?: string | null;
    /**
     * This represents the http status code.
     */
    statusCode?: number | null;
  }
  export interface Schema$QueryInterpretation {
    interpretationType?: string | null;
    /**
     * The interpretation of the query used in search. For example, queries with natural language intent like "email from john" will be interpreted as "from:john source:mail". This field will not be filled when the reason is NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY.
     */
    interpretedQuery?: string | null;
    /**
     * The reason for interpretation of the query. This field will not be UNSPECIFIED if the interpretation type is not NONE.
     */
    reason?: string | null;
  }
  /**
   * Default options to interpret user query.
   */
  export interface Schema$QueryInterpretationConfig {
    /**
     * Set this flag to disable supplemental results retrieval, setting a flag here will not retrieve supplemental results for queries associated with a given search application. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for supplemental results.
     */
    forceDisableSupplementalResults?: boolean | null;
    /**
     * Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental results retrieval, and usage of synonyms including custom ones. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for verbatim mode.
     */
    forceVerbatimMode?: boolean | null;
  }
  /**
   * Options to interpret user query.
   */
  export interface Schema$QueryInterpretationOptions {
    /**
     * Flag to disable natural language (NL) interpretation of queries. Default is false, Set to true to disable natural language interpretation. NL interpretation only applies to predefined datasources.
     */
    disableNlInterpretation?: boolean | null;
    /**
     * Use this flag to disable supplemental results for a query. Supplemental results setting chosen at SearchApplication level will take precedence if set to True.
     */
    disableSupplementalResults?: boolean | null;
    /**
     * Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental result retrieval, and usage of synonyms including custom ones. Nl interpretation will be disabled if either one of the two flags is true.
     */
    enableVerbatimMode?: boolean | null;
  }
  /**
   * Information relevant only to a query entry.
   */
  export interface Schema$QueryItem {
    /**
     * True if the text was generated by means other than a previous user search.
     */
    isSynthetic?: boolean | null;
  }
  /**
   * The definition of a operator that can be used in a Search/Suggest request.
   */
  export interface Schema$QueryOperator {
    /**
     * Display name of the operator
     */
    displayName?: string | null;
    /**
     * Potential list of values for the opeatror field. This field is only filled when we can safely enumerate all the possible values of this operator.
     */
    enumValues?: string[] | null;
    /**
     * Indicates the operator name that can be used to isolate the property using the greater-than operator.
     */
    greaterThanOperatorName?: string | null;
    /**
     * Can this operator be used to get facets.
     */
    isFacetable?: boolean | null;
    /**
     * Indicates if multiple values can be set for this property.
     */
    isRepeatable?: boolean | null;
    /**
     * Will the property associated with this facet be returned as part of search results.
     */
    isReturnable?: boolean | null;
    /**
     * Can this operator be used to sort results.
     */
    isSortable?: boolean | null;
    /**
     * Can get suggestions for this field.
     */
    isSuggestable?: boolean | null;
    /**
     * Indicates the operator name that can be used to isolate the property using the less-than operator.
     */
    lessThanOperatorName?: string | null;
    /**
     * Name of the object corresponding to the operator. This field is only filled for schema-specific operators, and is unset for common operators.
     */
    objectType?: string | null;
    /**
     * The name of the operator.
     */
    operatorName?: string | null;
    /**
     * Type of the operator.
     */
    type?: string | null;
  }
  /**
   * List of sources that the user can search using the query API.
   */
  export interface Schema$QuerySource {
    /**
     * Display name of the data source.
     */
    displayName?: string | null;
    /**
     * List of all operators applicable for this source.
     */
    operators?: Schema$QueryOperator[];
    /**
     * A short name or alias for the source. This value can be used with the 'source' operator.
     */
    shortName?: string | null;
    /**
     * Name of the source
     */
    source?: Schema$Source;
  }
  /**
   * This field does not contain anything as of now and is just used as an indicator that the suggest result was a phrase completion.
   */
  export interface Schema$QuerySuggestion {}
  /**
   * Errors when the connector is communicating to the source repository.
   */
  export interface Schema$RepositoryError {
    /**
     * Message that describes the error. The maximum allowable length of the message is 8192 characters.
     */
    errorMessage?: string | null;
    /**
     * Error codes. Matches the definition of HTTP status codes.
     */
    httpStatusCode?: number | null;
    /**
     * Type of error.
     */
    type?: string | null;
  }
  /**
   * Shared request options for all RPC methods.
   */
  export interface Schema$RequestOptions {
    /**
     * Debug options of the request
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The suggest API does not use this parameter. Instead, suggest autocompletes only based on characters in the query.
     */
    languageCode?: string | null;
    /**
     * The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).
     */
    searchApplicationId?: string | null;
    /**
     * Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.
     */
    timeZone?: string | null;
  }
  export interface Schema$ResetSearchApplicationRequest {
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
  }
  /**
   * Debugging information about the response.
   */
  export interface Schema$ResponseDebugInfo {
    /**
     * General debug info formatted for display.
     */
    formattedDebugInfo?: string | null;
  }
  /**
   * Information relevant only to a restrict entry. NextId: 12
   */
  export interface Schema$RestrictItem {
    /**
     * LINT.ThenChange(//depot/google3/java/com/google/apps/search/quality/itemsuggest/utils/SubtypeRerankingUtils.java)
     */
    driveFollowUpRestrict?: Schema$DriveFollowUpRestrict;
    driveLocationRestrict?: Schema$DriveLocationRestrict;
    /**
     * LINT.IfChange Drive Types.
     */
    driveMimeTypeRestrict?: Schema$DriveMimeTypeRestrict;
    driveTimeSpanRestrict?: Schema$DriveTimeSpanRestrict;
    /**
     * The search restrict (e.g. "after:2017-09-11 before:2017-09-12").
     */
    searchOperator?: string | null;
  }
  /**
   * Result count information
   */
  export interface Schema$ResultCounts {
    /**
     * Result count information for each source with results.
     */
    sourceResultCounts?: Schema$SourceResultCount[];
  }
  /**
   * Debugging information about the result.
   */
  export interface Schema$ResultDebugInfo {
    /**
     * General debug info formatted for display.
     */
    formattedDebugInfo?: string | null;
  }
  /**
   * Display Fields for Search Results
   */
  export interface Schema$ResultDisplayField {
    /**
     * The display label for the property.
     */
    label?: string | null;
    /**
     * The operator name of the property.
     */
    operatorName?: string | null;
    /**
     * The name value pair for the property.
     */
    property?: Schema$NamedProperty;
  }
  /**
   * The collection of fields that make up a displayed line
   */
  export interface Schema$ResultDisplayLine {
    fields?: Schema$ResultDisplayField[];
  }
  export interface Schema$ResultDisplayMetadata {
    /**
     * The metalines content to be displayed with the result.
     */
    metalines?: Schema$ResultDisplayLine[];
    /**
     * The display label for the object.
     */
    objectTypeLabel?: string | null;
  }
  export interface Schema$RetrievalImportance {
    /**
     * Indicates the ranking importance given to property when it is matched during retrieval. Once set, the token importance of a property cannot be changed.
     */
    importance?: string | null;
  }
  /**
   * The schema definition for a data source.
   */
  export interface Schema$Schema {
    /**
     * The list of top-level objects for the data source. The maximum number of elements is 10.
     */
    objectDefinitions?: Schema$ObjectDefinition[];
    /**
     * IDs of the Long Running Operations (LROs) currently running for this schema. After modifying the schema, wait for operations to complete before indexing additional content.
     */
    operationIds?: string[] | null;
  }
  /**
   * Scoring configurations for a source while processing a Search or Suggest request.
   */
  export interface Schema$ScoringConfig {
    /**
     * Whether to use freshness as a ranking signal. By default, freshness is used as a ranking signal. Note that this setting is not available in the Admin UI.
     */
    disableFreshness?: boolean | null;
    /**
     * Whether to personalize the results. By default, personal signals will be used to boost results.
     */
    disablePersonalization?: boolean | null;
  }
  /**
   * SearchApplication
   */
  export interface Schema$SearchApplication {
    /**
     * Retrictions applied to the configurations. The maximum number of elements is 10.
     */
    dataSourceRestrictions?: Schema$DataSourceRestriction[];
    /**
     * The default fields for returning facet results. The sources specified here also have been included in data_source_restrictions above.
     */
    defaultFacetOptions?: Schema$FacetOptions[];
    /**
     * The default options for sorting the search results
     */
    defaultSortOptions?: Schema$SortOptions;
    /**
     * Display name of the Search Application. The maximum length is 300 characters.
     */
    displayName?: string | null;
    /**
     * Indicates whether audit logging is on/off for requests made for the search application in query APIs.
     */
    enableAuditLog?: boolean | null;
    /**
     * Name of the Search Application. Format: searchapplications/{application_id\}.
     */
    name?: string | null;
    /**
     * Output only. IDs of the Long Running Operations (LROs) currently running for this schema. Output only field.
     */
    operationIds?: string[] | null;
    /**
     * The default options for query interpretation
     */
    queryInterpretationConfig?: Schema$QueryInterpretationConfig;
    /**
     * Configuration for ranking results.
     */
    scoringConfig?: Schema$ScoringConfig;
    /**
     * Configuration for a sources specified in data_source_restrictions.
     */
    sourceConfig?: Schema$SourceConfig[];
  }
  export interface Schema$SearchApplicationQueryStats {
    /**
     * Date for which query stats were calculated. Stats calculated on the next day close to midnight are returned.
     */
    date?: Schema$Date;
    queryCountByStatus?: Schema$QueryCountByStatus[];
  }
  export interface Schema$SearchApplicationSessionStats {
    /**
     * Date for which session stats were calculated. Stats calculated on the next day close to midnight are returned.
     */
    date?: Schema$Date;
    /**
     * The count of search sessions on the day
     */
    searchSessionsCount?: string | null;
  }
  export interface Schema$SearchApplicationUserStats {
    /**
     * Date for which session stats were calculated. Stats calculated on the next day close to midnight are returned.
     */
    date?: Schema$Date;
    /**
     * The count of unique active users in the past one day
     */
    oneDayActiveUsersCount?: string | null;
    /**
     * The count of unique active users in the past seven days
     */
    sevenDaysActiveUsersCount?: string | null;
    /**
     * The count of unique active users in the past thirty days
     */
    thirtyDaysActiveUsersCount?: string | null;
  }
  export interface Schema$SearchItemsByViewUrlRequest {
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * The next_page_token value returned from a previous request, if any.
     */
    pageToken?: string | null;
    /**
     * Specify the full view URL to find the corresponding item. The maximum length is 2048 characters.
     */
    viewUrl?: string | null;
  }
  export interface Schema$SearchItemsByViewUrlResponse {
    items?: Schema$Item[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Additional search quality metadata of the item.
   */
  export interface Schema$SearchQualityMetadata {
    /**
     * An indication of the quality of the item, used to influence search quality. Value should be between 0.0 (lowest quality) and 1.0 (highest quality). The default value is 0.0.
     */
    quality?: number | null;
  }
  /**
   * The search API request.
   */
  export interface Schema$SearchRequest {
    /**
     * Context attributes for the request which will be used to adjust ranking of search results. The maximum number of elements is 10.
     */
    contextAttributes?: Schema$ContextAttribute[];
    /**
     * The sources to use for querying. If not specified, all data sources from the current search application are used.
     */
    dataSourceRestrictions?: Schema$DataSourceRestriction[];
    facetOptions?: Schema$FacetOptions[];
    /**
     * Maximum number of search results to return in one page. Valid values are between 1 and 100, inclusive. Default value is 10. Minimum value is 50 when results beyond 2000 are requested.
     */
    pageSize?: number | null;
    /**
     * The raw query string. See supported search operators in the [Cloud search Cheat Sheet](https://support.google.com/a/users/answer/9299929)
     */
    query?: string | null;
    /**
     * Options to interpret the user query.
     */
    queryInterpretationOptions?: Schema$QueryInterpretationOptions;
    /**
     * Request options, such as the search application and user timezone.
     */
    requestOptions?: Schema$RequestOptions;
    /**
     * The options for sorting the search results
     */
    sortOptions?: Schema$SortOptions;
    /**
     * Starting index of the results.
     */
    start?: number | null;
  }
  /**
   * The search API response.
   */
  export interface Schema$SearchResponse {
    /**
     * Debugging information about the response.
     */
    debugInfo?: Schema$ResponseDebugInfo;
    /**
     * Error information about the response.
     */
    errorInfo?: Schema$ErrorInfo;
    /**
     * Repeated facet results.
     */
    facetResults?: Schema$FacetResult[];
    /**
     * Whether there are more search results matching the query.
     */
    hasMoreResults?: boolean | null;
    /**
     * Query interpretation result for user query. Empty if query interpretation is disabled.
     */
    queryInterpretation?: Schema$QueryInterpretation;
    /**
     * The estimated result count for this query.
     */
    resultCountEstimate?: string | null;
    /**
     * The exact result count for this query.
     */
    resultCountExact?: string | null;
    /**
     * Expanded result count information.
     */
    resultCounts?: Schema$ResultCounts;
    /**
     * Results from a search query.
     */
    results?: Schema$SearchResult[];
    /**
     * Suggested spelling for the query.
     */
    spellResults?: Schema$SpellResult[];
    /**
     * Structured results for the user query. These results are not counted against the page_size.
     */
    structuredResults?: Schema$StructuredResult[];
  }
  /**
   * Results containing indexed information for a document.
   */
  export interface Schema$SearchResult {
    /**
     * If source is clustered, provide list of clustered results. There will only be one level of clustered results. If current source is not enabled for clustering, this field will be empty.
     */
    clusteredResults?: Schema$SearchResult[];
    /**
     * Debugging information about this search result.
     */
    debugInfo?: Schema$ResultDebugInfo;
    /**
     * Metadata of the search result.
     */
    metadata?: Schema$Metadata;
    /**
     * The concatenation of all snippets (summaries) available for this result.
     */
    snippet?: Schema$Snippet;
    /**
     * Title of the search result.
     */
    title?: string | null;
    /**
     * The URL of the search result. The URL contains a Google redirect to the actual item. This URL is signed and shouldn't be changed.
     */
    url?: string | null;
  }
  /**
   * Snippet of the search result, which summarizes the content of the resulting page.
   */
  export interface Schema$Snippet {
    /**
     * The matched ranges in the snippet.
     */
    matchRanges?: Schema$MatchRange[];
    /**
     * The snippet of the document. The snippet of the document. May contain escaped HTML character that should be unescaped prior to rendering.
     */
    snippet?: string | null;
  }
  export interface Schema$SortOptions {
    /**
     * Name of the operator corresponding to the field to sort on. The corresponding property must be marked as sortable.
     */
    operatorName?: string | null;
    /**
     * Ascending is the default sort order
     */
    sortOrder?: string | null;
  }
  /**
   * Defines sources for the suggest/search APIs.
   */
  export interface Schema$Source {
    /**
     * Source name for content indexed by the Indexing API.
     */
    name?: string | null;
    /**
     * Predefined content source for Google Apps.
     */
    predefinedSource?: string | null;
  }
  /**
   * Configurations for a source while processing a Search or Suggest request.
   */
  export interface Schema$SourceConfig {
    /**
     * The crowding configuration for the source.
     */
    crowdingConfig?: Schema$SourceCrowdingConfig;
    /**
     * The scoring configuration for the source.
     */
    scoringConfig?: Schema$SourceScoringConfig;
    /**
     * The source for which this configuration is to be used.
     */
    source?: Schema$Source;
  }
  /**
   * Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host "crowd out" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source.
   */
  export interface Schema$SourceCrowdingConfig {
    /**
     * Maximum number of results allowed from a source. No limits will be set on results if this value is less than or equal to 0.
     */
    numResults?: number | null;
    /**
     * Maximum number of suggestions allowed from a source. No limits will be set on results if this value is less than or equal to 0.
     */
    numSuggestions?: number | null;
  }
  /**
   * Per source result count information.
   */
  export interface Schema$SourceResultCount {
    /**
     * Whether there are more search results for this source.
     */
    hasMoreResults?: boolean | null;
    /**
     * The estimated result count for this source.
     */
    resultCountEstimate?: string | null;
    /**
     * The exact result count for this source.
     */
    resultCountExact?: string | null;
    /**
     * The source the result count information is associated with.
     */
    source?: Schema$Source;
  }
  /**
   * Set the scoring configuration. This allows modifying the ranking of results for a source.
   */
  export interface Schema$SourceScoringConfig {
    /**
     * Importance of the source.
     */
    sourceImportance?: string | null;
  }
  export interface Schema$SpellResult {
    /**
     * The suggested spelling of the query.
     */
    suggestedQuery?: string | null;
  }
  /**
   * Start upload file request.
   */
  export interface Schema$StartUploadItemRequest {
    /**
     * Name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string | null;
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * A structured data object consisting of named properties.
   */
  export interface Schema$StructuredDataObject {
    /**
     * The properties for the object. The maximum number of elements is 1000.
     */
    properties?: Schema$NamedProperty[];
  }
  /**
   * Structured results that are returned as part of search request.
   */
  export interface Schema$StructuredResult {
    /**
     * Representation of a person
     */
    person?: Schema$Person;
  }
  /**
   * Request of suggest API.
   */
  export interface Schema$SuggestRequest {
    /**
     * The sources to use for suggestions. If not specified, the data sources are taken from the current search application. NOTE: Suggestions are only supported for the following sources: * Third-party data sources * PredefinedSource.PERSON * PredefinedSource.GOOGLE_DRIVE
     */
    dataSourceRestrictions?: Schema$DataSourceRestriction[];
    /**
     * Partial query for which autocomplete suggestions will be shown. For example, if the query is "sea", then the server might return "season", "search", "seagull" and so on.
     */
    query?: string | null;
    /**
     * Request options, such as the search application and user timezone.
     */
    requestOptions?: Schema$RequestOptions;
  }
  /**
   * Response of the suggest API.
   */
  export interface Schema$SuggestResponse {
    /**
     * List of suggestions.
     */
    suggestResults?: Schema$SuggestResult[];
  }
  /**
   * One suggestion result.
   */
  export interface Schema$SuggestResult {
    /**
     * This is present when the suggestion indicates a person. It contains more information about the person - like their email ID, name etc.
     */
    peopleSuggestion?: Schema$PeopleSuggestion;
    /**
     * This field will be present if the suggested query is a word/phrase completion.
     */
    querySuggestion?: Schema$QuerySuggestion;
    /**
     * The source of the suggestion.
     */
    source?: Schema$Source;
    /**
     * The suggested query that will be used for search, when the user clicks on the suggestion
     */
    suggestedQuery?: string | null;
  }
  /**
   * Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$TextOperatorOptions {
    /**
     * If true, the text value is tokenized as one atomic value in operator searches and facet matches. For example, if the operator name is "genre" and the value is "science-fiction" the query restrictions "genre:science" and "genre:fiction" doesn't match the item; "genre:science-fiction" does. Value matching is case-sensitive and does not remove special characters. If false, the text is tokenized. For example, if the value is "science-fiction" the queries "genre:science" and "genre:fiction" matches the item.
     */
    exactMatchWithOperator?: boolean | null;
    /**
     * Indicates the operator name required in the query in order to isolate the text property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value\>* show results only where the value of the property named *subjectLine* matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator returns all items where *<value\>* matches the value of any text properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * Options for text properties.
   */
  export interface Schema$TextPropertyOptions {
    /**
     * If set, describes how the property should be used as a search operator.
     */
    operatorOptions?: Schema$TextOperatorOptions;
    /**
     * Indicates the search quality importance of the tokens within the field when used for retrieval.
     */
    retrievalImportance?: Schema$RetrievalImportance;
  }
  /**
   * List of text values.
   */
  export interface Schema$TextValues {
    /**
     * The maximum allowable length for text values is 2048 characters.
     */
    values?: string[] | null;
  }
  /**
   * Used to provide a search operator for timestamp properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
   */
  export interface Schema$TimestampOperatorOptions {
    /**
     * Indicates the operator name required in the query in order to isolate the timestamp property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value\>* show results only where the value of the property named *closeDate* is later than *<value\>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    greaterThanOperatorName?: string | null;
    /**
     * Indicates the operator name required in the query in order to isolate the timestamp property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value\>* show results only where the value of the property named *closeDate* is earlier than *<value\>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    lessThanOperatorName?: string | null;
    /**
     * Indicates the operator name required in the query in order to isolate the timestamp property. For example, if operatorName is *closedon* and the property's name is *closeDate*, then queries like *closedon:<value\>* show results only where the value of the property named *closeDate* matches *<value\>*. By contrast, a search that uses the same *<value\>* without an operator returns all items where *<value\>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
     */
    operatorName?: string | null;
  }
  /**
   * Options for timestamp properties.
   */
  export interface Schema$TimestampPropertyOptions {
    /**
     * If set, describes how the timestamp should be used as a search operator.
     */
    operatorOptions?: Schema$TimestampOperatorOptions;
  }
  /**
   * List of timestamp values.
   */
  export interface Schema$TimestampValues {
    values?: string[] | null;
  }
  export interface Schema$UnmappedIdentity {
    /**
     * The resource name for an external user.
     */
    externalIdentity?: Schema$Principal;
    /**
     * The resolution status for the external identity.
     */
    resolutionStatusCode?: string | null;
  }
  export interface Schema$UnreserveItemsRequest {
    /**
     * Name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string | null;
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * Name of a queue to unreserve items from.
     */
    queue?: string | null;
  }
  export interface Schema$UpdateDataSourceRequest {
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    source?: Schema$DataSource;
  }
  export interface Schema$UpdateSchemaRequest {
    /**
     * Common debug options.
     */
    debugOptions?: Schema$DebugOptions;
    /**
     * The new schema for the source.
     */
    schema?: Schema$Schema;
    /**
     * If true, the schema will be checked for validity, but will not be registered with the data source, even if valid.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Represents an upload session reference. This reference is created via upload method. Updating of item content may refer to this uploaded content via contentDataRef.
   */
  export interface Schema$UploadItemRef {
    /**
     * Name of the content reference. The maximum length is 2048 characters.
     */
    name?: string | null;
  }
  /**
   * Definition of a single value with generic type.
   */
  export interface Schema$Value {
    booleanValue?: boolean | null;
    dateValue?: Schema$Date;
    doubleValue?: number | null;
    integerValue?: string | null;
    stringValue?: string | null;
    timestampValue?: string | null;
  }
  export interface Schema$ValueFilter {
    /**
     * The `operator_name` applied to the query, such as *price_greater_than*. The filter can work against both types of filters defined in the schema for your data source: 1. `operator_name`, where the query filters results by the property that matches the value. 2. `greater_than_operator_name` or `less_than_operator_name` in your schema. The query filters the results for the property values that are greater than or less than the supplied value in the query.
     */
    operatorName?: string | null;
    /**
     * The value to be compared with.
     */
    value?: Schema$Value;
  }
  export interface Schema$VPCSettings {
    /**
     * The resource name of the GCP Project to be used for VPC SC policy check. VPC security settings on this project will be honored for Cloud Search APIs after project_name has been updated through CustomerService. Format: projects/{project_id\}
     */
    project?: string | null;
  }

  export class Resource$Debug {
    context: APIRequestContext;
    datasources: Resource$Debug$Datasources;
    identitysources: Resource$Debug$Identitysources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.datasources = new Resource$Debug$Datasources(this.context);
      this.identitysources = new Resource$Debug$Identitysources(this.context);
    }
  }

  export class Resource$Debug$Datasources {
    context: APIRequestContext;
    items: Resource$Debug$Datasources$Items;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.items = new Resource$Debug$Datasources$Items(this.context);
    }
  }

  export class Resource$Debug$Datasources$Items {
    context: APIRequestContext;
    unmappedids: Resource$Debug$Datasources$Items$Unmappedids;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.unmappedids = new Resource$Debug$Datasources$Items$Unmappedids(
        this.context
      );
    }

    /**
     * Checks whether an item is accessible by specified principal. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.debug.datasources.items.checkAccess({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Item name, format: datasources/{source_id\}/items/{item_id\}
     *     name: 'datasources/my-datasource/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "groupResourceName": "my_groupResourceName",
     *       //   "gsuitePrincipal": {},
     *       //   "userResourceName": "my_userResourceName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "hasAccess": false
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
    checkAccess(
      params: Params$Resource$Debug$Datasources$Items$Checkaccess,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    checkAccess(
      params?: Params$Resource$Debug$Datasources$Items$Checkaccess,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CheckAccessResponse>;
    checkAccess(
      params: Params$Resource$Debug$Datasources$Items$Checkaccess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkAccess(
      params: Params$Resource$Debug$Datasources$Items$Checkaccess,
      options: MethodOptions | BodyResponseCallback<Schema$CheckAccessResponse>,
      callback: BodyResponseCallback<Schema$CheckAccessResponse>
    ): void;
    checkAccess(
      params: Params$Resource$Debug$Datasources$Items$Checkaccess,
      callback: BodyResponseCallback<Schema$CheckAccessResponse>
    ): void;
    checkAccess(
      callback: BodyResponseCallback<Schema$CheckAccessResponse>
    ): void;
    checkAccess(
      paramsOrCallback?:
        | Params$Resource$Debug$Datasources$Items$Checkaccess
        | BodyResponseCallback<Schema$CheckAccessResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckAccessResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckAccessResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CheckAccessResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Debug$Datasources$Items$Checkaccess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Debug$Datasources$Items$Checkaccess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/debug/{+name}:checkAccess').replace(
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
        createAPIRequest<Schema$CheckAccessResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckAccessResponse>(parameters);
      }
    }

    /**
     * Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.debug.datasources.items.searchByViewUrl({
     *     // Source name, format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "debugOptions": {},
     *       //   "pageToken": "my_pageToken",
     *       //   "viewUrl": "my_viewUrl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
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
    searchByViewUrl(
      params: Params$Resource$Debug$Datasources$Items$Searchbyviewurl,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchByViewUrl(
      params?: Params$Resource$Debug$Datasources$Items$Searchbyviewurl,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchItemsByViewUrlResponse>;
    searchByViewUrl(
      params: Params$Resource$Debug$Datasources$Items$Searchbyviewurl,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchByViewUrl(
      params: Params$Resource$Debug$Datasources$Items$Searchbyviewurl,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>,
      callback: BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>
    ): void;
    searchByViewUrl(
      params: Params$Resource$Debug$Datasources$Items$Searchbyviewurl,
      callback: BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>
    ): void;
    searchByViewUrl(
      callback: BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>
    ): void;
    searchByViewUrl(
      paramsOrCallback?:
        | Params$Resource$Debug$Datasources$Items$Searchbyviewurl
        | BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchItemsByViewUrlResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchItemsByViewUrlResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Debug$Datasources$Items$Searchbyviewurl;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Debug$Datasources$Items$Searchbyviewurl;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/debug/{+name}/items:searchByViewUrl').replace(
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
        createAPIRequest<Schema$SearchItemsByViewUrlResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchItemsByViewUrlResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Debug$Datasources$Items$Checkaccess
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Item name, format: datasources/{source_id\}/items/{item_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Principal;
  }
  export interface Params$Resource$Debug$Datasources$Items$Searchbyviewurl
    extends StandardParameters {
    /**
     * Source name, format: datasources/{source_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchItemsByViewUrlRequest;
  }

  export class Resource$Debug$Datasources$Items$Unmappedids {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all unmapped identities for a specific item. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.debug.datasources.items.unmappedids.list({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Maximum number of items to fetch in a request. Defaults to 100.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // The name of the item, in the following format: datasources/{source_id\}/items/{ID\}
     *     parent: 'datasources/my-datasource/items/my-item',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unmappedIdentities": []
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
      params: Params$Resource$Debug$Datasources$Items$Unmappedids$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Debug$Datasources$Items$Unmappedids$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUnmappedIdentitiesResponse>;
    list(
      params: Params$Resource$Debug$Datasources$Items$Unmappedids$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Debug$Datasources$Items$Unmappedids$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>,
      callback: BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
    ): void;
    list(
      params: Params$Resource$Debug$Datasources$Items$Unmappedids$List,
      callback: BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Debug$Datasources$Items$Unmappedids$List
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListUnmappedIdentitiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Debug$Datasources$Items$Unmappedids$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Debug$Datasources$Items$Unmappedids$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/debug/{+parent}/unmappedids').replace(
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
        createAPIRequest<Schema$ListUnmappedIdentitiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUnmappedIdentitiesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Debug$Datasources$Items$Unmappedids$List
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Maximum number of items to fetch in a request. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The name of the item, in the following format: datasources/{source_id\}/items/{ID\}
     */
    parent?: string;
  }

  export class Resource$Debug$Identitysources {
    context: APIRequestContext;
    items: Resource$Debug$Identitysources$Items;
    unmappedids: Resource$Debug$Identitysources$Unmappedids;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.items = new Resource$Debug$Identitysources$Items(this.context);
      this.unmappedids = new Resource$Debug$Identitysources$Unmappedids(
        this.context
      );
    }
  }

  export class Resource$Debug$Identitysources$Items {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await cloudsearch.debug.identitysources.items.listForunmappedidentity({
     *       // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *       'debugOptions.enableDebugging': 'placeholder-value',
     *
     *       groupResourceName: 'placeholder-value',
     *       // Maximum number of items to fetch in a request. Defaults to 100.
     *       pageSize: 'placeholder-value',
     *       // The next_page_token value returned from a previous List request, if any.
     *       pageToken: 'placeholder-value',
     *       // The name of the identity source, in the following format: identitysources/{source_id\}\}
     *       parent: 'identitysources/my-identitysource',
     *
     *       userResourceName: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "itemNames": [],
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
    listForunmappedidentity(
      params: Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listForunmappedidentity(
      params?: Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListItemNamesForUnmappedIdentityResponse>;
    listForunmappedidentity(
      params: Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listForunmappedidentity(
      params: Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>,
      callback: BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>
    ): void;
    listForunmappedidentity(
      params: Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity,
      callback: BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>
    ): void;
    listForunmappedidentity(
      callback: BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>
    ): void;
    listForunmappedidentity(
      paramsOrCallback?:
        | Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity
        | BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListItemNamesForUnmappedIdentityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListItemNamesForUnmappedIdentityResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/debug/{+parent}/items:forunmappedidentity'
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
        createAPIRequest<Schema$ListItemNamesForUnmappedIdentityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListItemNamesForUnmappedIdentityResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Debug$Identitysources$Items$Listforunmappedidentity
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     *
     */
    groupResourceName?: string;
    /**
     * Maximum number of items to fetch in a request. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The name of the identity source, in the following format: identitysources/{source_id\}\}
     */
    parent?: string;
    /**
     *
     */
    userResourceName?: string;
  }

  export class Resource$Debug$Identitysources$Unmappedids {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.debug.identitysources.unmappedids.list({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Maximum number of items to fetch in a request. Defaults to 100.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // The name of the identity source, in the following format: identitysources/{source_id\}
     *     parent: 'identitysources/my-identitysource',
     *     // Limit users selection to this status.
     *     resolutionStatusCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unmappedIdentities": []
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
      params: Params$Resource$Debug$Identitysources$Unmappedids$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Debug$Identitysources$Unmappedids$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUnmappedIdentitiesResponse>;
    list(
      params: Params$Resource$Debug$Identitysources$Unmappedids$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Debug$Identitysources$Unmappedids$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>,
      callback: BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
    ): void;
    list(
      params: Params$Resource$Debug$Identitysources$Unmappedids$List,
      callback: BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Debug$Identitysources$Unmappedids$List
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUnmappedIdentitiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListUnmappedIdentitiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Debug$Identitysources$Unmappedids$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Debug$Identitysources$Unmappedids$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/debug/{+parent}/unmappedids').replace(
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
        createAPIRequest<Schema$ListUnmappedIdentitiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUnmappedIdentitiesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Debug$Identitysources$Unmappedids$List
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Maximum number of items to fetch in a request. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The name of the identity source, in the following format: identitysources/{source_id\}
     */
    parent?: string;
    /**
     * Limit users selection to this status.
     */
    resolutionStatusCode?: string;
  }

  export class Resource$Indexing {
    context: APIRequestContext;
    datasources: Resource$Indexing$Datasources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.datasources = new Resource$Indexing$Datasources(this.context);
    }
  }

  export class Resource$Indexing$Datasources {
    context: APIRequestContext;
    items: Resource$Indexing$Datasources$Items;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.items = new Resource$Indexing$Datasources$Items(this.context);
    }

    /**
     * Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.deleteSchema({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Name of the data source to delete Schema. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    deleteSchema(
      params: Params$Resource$Indexing$Datasources$Deleteschema,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteSchema(
      params?: Params$Resource$Indexing$Datasources$Deleteschema,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    deleteSchema(
      params: Params$Resource$Indexing$Datasources$Deleteschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteSchema(
      params: Params$Resource$Indexing$Datasources$Deleteschema,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deleteSchema(
      params: Params$Resource$Indexing$Datasources$Deleteschema,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deleteSchema(callback: BodyResponseCallback<Schema$Operation>): void;
    deleteSchema(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Deleteschema
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Deleteschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Deleteschema;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}/schema').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.getSchema({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Name of the data source to get Schema. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "objectDefinitions": [],
     *   //   "operationIds": []
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
    getSchema(
      params: Params$Resource$Indexing$Datasources$Getschema,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSchema(
      params?: Params$Resource$Indexing$Datasources$Getschema,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Schema>;
    getSchema(
      params: Params$Resource$Indexing$Datasources$Getschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSchema(
      params: Params$Resource$Indexing$Datasources$Getschema,
      options: MethodOptions | BodyResponseCallback<Schema$Schema>,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    getSchema(
      params: Params$Resource$Indexing$Datasources$Getschema,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    getSchema(callback: BodyResponseCallback<Schema$Schema>): void;
    getSchema(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Getschema
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Schema> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Getschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Getschema;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}/schema').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Schema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Schema>(parameters);
      }
    }

    /**
     * Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.updateSchema({
     *     // Name of the data source to update Schema. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "debugOptions": {},
     *       //   "schema": {},
     *       //   "validateOnly": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    updateSchema(
      params: Params$Resource$Indexing$Datasources$Updateschema,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSchema(
      params?: Params$Resource$Indexing$Datasources$Updateschema,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateSchema(
      params: Params$Resource$Indexing$Datasources$Updateschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSchema(
      params: Params$Resource$Indexing$Datasources$Updateschema,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateSchema(
      params: Params$Resource$Indexing$Datasources$Updateschema,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateSchema(callback: BodyResponseCallback<Schema$Operation>): void;
    updateSchema(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Updateschema
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Updateschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Updateschema;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}/schema').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Indexing$Datasources$Deleteschema
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Name of the data source to delete Schema. Format: datasources/{source_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Indexing$Datasources$Getschema
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Name of the data source to get Schema. Format: datasources/{source_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Indexing$Datasources$Updateschema
    extends StandardParameters {
    /**
     * Name of the data source to update Schema. Format: datasources/{source_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateSchemaRequest;
  }

  export class Resource$Indexing$Datasources$Items {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.delete({
     *     // Name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     *     connectorName: 'placeholder-value',
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Required. The RequestMode for this request.
     *     mode: 'placeholder-value',
     *     // Required. Name of the item to delete. Format: datasources/{source_id\}/items/{item_id\}
     *     name: 'datasources/my-datasource/items/my-item',
     *     // Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes.
     *     version: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Indexing$Datasources$Items$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Indexing$Datasources$Items$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Indexing$Datasources$Items$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Indexing$Datasources$Items$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Indexing$Datasources$Items$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.deleteQueueItems({
     *     // Name of the Data Source to delete items in a queue. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorName": "my_connectorName",
     *       //   "debugOptions": {},
     *       //   "queue": "my_queue"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    deleteQueueItems(
      params: Params$Resource$Indexing$Datasources$Items$Deletequeueitems,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteQueueItems(
      params?: Params$Resource$Indexing$Datasources$Items$Deletequeueitems,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    deleteQueueItems(
      params: Params$Resource$Indexing$Datasources$Items$Deletequeueitems,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteQueueItems(
      params: Params$Resource$Indexing$Datasources$Items$Deletequeueitems,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deleteQueueItems(
      params: Params$Resource$Indexing$Datasources$Items$Deletequeueitems,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deleteQueueItems(callback: BodyResponseCallback<Schema$Operation>): void;
    deleteQueueItems(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Deletequeueitems
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Deletequeueitems;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Indexing$Datasources$Items$Deletequeueitems;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/indexing/{+name}/items:deleteQueueItems'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.get({
     *     // Name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     *     connectorName: 'placeholder-value',
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Name of the item to get info. Format: datasources/{source_id\}/items/{item_id\}
     *     name: 'datasources/my-datasource/items/my-item',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acl": {},
     *   //   "content": {},
     *   //   "itemType": "my_itemType",
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "payload": "my_payload",
     *   //   "queue": "my_queue",
     *   //   "status": {},
     *   //   "structuredData": {},
     *   //   "version": "my_version"
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
      params: Params$Resource$Indexing$Datasources$Items$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Indexing$Datasources$Items$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Item>;
    get(
      params: Params$Resource$Indexing$Datasources$Items$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Indexing$Datasources$Items$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Item>,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    get(
      params: Params$Resource$Indexing$Datasources$Items$Get,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    get(callback: BodyResponseCallback<Schema$Item>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Get
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Item> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Item>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Item>(parameters);
      }
    }

    /**
     * Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.index({
     *     // Name of the Item. Format: datasources/{source_id\}/items/{item_id\} This is a required field. The maximum length is 1536 characters.
     *     name: 'datasources/my-datasource/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorName": "my_connectorName",
     *       //   "debugOptions": {},
     *       //   "indexItemOptions": {},
     *       //   "item": {},
     *       //   "mode": "my_mode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    index(
      params: Params$Resource$Indexing$Datasources$Items$Index,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    index(
      params?: Params$Resource$Indexing$Datasources$Items$Index,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    index(
      params: Params$Resource$Indexing$Datasources$Items$Index,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    index(
      params: Params$Resource$Indexing$Datasources$Items$Index,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    index(
      params: Params$Resource$Indexing$Datasources$Items$Index,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    index(callback: BodyResponseCallback<Schema$Operation>): void;
    index(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Index
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Index;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Index;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}:index').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.list({
     *     // When set to true, the indexing system only populates the following fields: name, version, queue. metadata.hash, metadata.title, metadata.sourceRepositoryURL, metadata.objectType, metadata.createTime, metadata.updateTime, metadata.contentLanguage, metadata.mimeType, structured_data.hash, content.hash, itemType, itemStatus.code, itemStatus.processingError.code, itemStatus.repositoryError.type, If this value is false, then all the fields are populated in Item.
     *     brief: 'placeholder-value',
     *     // Name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     *     connectorName: 'placeholder-value',
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Name of the Data Source to list Items. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *     // Maximum number of items to fetch in a request. The max value is 1000 when brief is true. The max value is 10 if brief is false. The default value is 10
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
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
      params: Params$Resource$Indexing$Datasources$Items$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Indexing$Datasources$Items$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListItemsResponse>;
    list(
      params: Params$Resource$Indexing$Datasources$Items$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Indexing$Datasources$Items$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListItemsResponse>,
      callback: BodyResponseCallback<Schema$ListItemsResponse>
    ): void;
    list(
      params: Params$Resource$Indexing$Datasources$Items$List,
      callback: BodyResponseCallback<Schema$ListItemsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListItemsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$List
        | BodyResponseCallback<Schema$ListItemsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListItemsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListItemsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListItemsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}/items').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ListItemsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListItemsResponse>(parameters);
      }
    }

    /**
     * Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.poll({
     *     // Name of the Data Source to poll items. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorName": "my_connectorName",
     *       //   "debugOptions": {},
     *       //   "limit": 0,
     *       //   "queue": "my_queue",
     *       //   "statusCodes": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": []
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
    poll(
      params: Params$Resource$Indexing$Datasources$Items$Poll,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    poll(
      params?: Params$Resource$Indexing$Datasources$Items$Poll,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PollItemsResponse>;
    poll(
      params: Params$Resource$Indexing$Datasources$Items$Poll,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    poll(
      params: Params$Resource$Indexing$Datasources$Items$Poll,
      options: MethodOptions | BodyResponseCallback<Schema$PollItemsResponse>,
      callback: BodyResponseCallback<Schema$PollItemsResponse>
    ): void;
    poll(
      params: Params$Resource$Indexing$Datasources$Items$Poll,
      callback: BodyResponseCallback<Schema$PollItemsResponse>
    ): void;
    poll(callback: BodyResponseCallback<Schema$PollItemsResponse>): void;
    poll(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Poll
        | BodyResponseCallback<Schema$PollItemsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PollItemsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PollItemsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PollItemsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Poll;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Poll;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}/items:poll').replace(
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
        createAPIRequest<Schema$PollItemsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PollItemsResponse>(parameters);
      }
    }

    /**
     * Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.push({
     *     // Name of the item to push into the indexing queue. Format: datasources/{source_id\}/items/{ID\} This is a required field. The maximum length is 1536 characters.
     *     name: 'datasources/my-datasource/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorName": "my_connectorName",
     *       //   "debugOptions": {},
     *       //   "item": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acl": {},
     *   //   "content": {},
     *   //   "itemType": "my_itemType",
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "payload": "my_payload",
     *   //   "queue": "my_queue",
     *   //   "status": {},
     *   //   "structuredData": {},
     *   //   "version": "my_version"
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
    push(
      params: Params$Resource$Indexing$Datasources$Items$Push,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    push(
      params?: Params$Resource$Indexing$Datasources$Items$Push,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Item>;
    push(
      params: Params$Resource$Indexing$Datasources$Items$Push,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    push(
      params: Params$Resource$Indexing$Datasources$Items$Push,
      options: MethodOptions | BodyResponseCallback<Schema$Item>,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    push(
      params: Params$Resource$Indexing$Datasources$Items$Push,
      callback: BodyResponseCallback<Schema$Item>
    ): void;
    push(callback: BodyResponseCallback<Schema$Item>): void;
    push(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Push
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Item>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Item> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Push;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Push;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}:push').replace(
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
        createAPIRequest<Schema$Item>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Item>(parameters);
      }
    }

    /**
     * Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.unreserve({
     *     // Name of the Data Source to unreserve all items. Format: datasources/{source_id\}
     *     name: 'datasources/my-datasource',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorName": "my_connectorName",
     *       //   "debugOptions": {},
     *       //   "queue": "my_queue"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    unreserve(
      params: Params$Resource$Indexing$Datasources$Items$Unreserve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unreserve(
      params?: Params$Resource$Indexing$Datasources$Items$Unreserve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    unreserve(
      params: Params$Resource$Indexing$Datasources$Items$Unreserve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unreserve(
      params: Params$Resource$Indexing$Datasources$Items$Unreserve,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unreserve(
      params: Params$Resource$Indexing$Datasources$Items$Unreserve,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unreserve(callback: BodyResponseCallback<Schema$Operation>): void;
    unreserve(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Unreserve
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Unreserve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Unreserve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}/items:unreserve').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.indexing.datasources.items.upload({
     *     // Name of the Item to start a resumable upload. Format: datasources/{source_id\}/items/{item_id\}. The maximum length is 1536 bytes.
     *     name: 'datasources/my-datasource/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectorName": "my_connectorName",
     *       //   "debugOptions": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
    upload(
      params: Params$Resource$Indexing$Datasources$Items$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Indexing$Datasources$Items$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploadItemRef>;
    upload(
      params: Params$Resource$Indexing$Datasources$Items$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Indexing$Datasources$Items$Upload,
      options: MethodOptions | BodyResponseCallback<Schema$UploadItemRef>,
      callback: BodyResponseCallback<Schema$UploadItemRef>
    ): void;
    upload(
      params: Params$Resource$Indexing$Datasources$Items$Upload,
      callback: BodyResponseCallback<Schema$UploadItemRef>
    ): void;
    upload(callback: BodyResponseCallback<Schema$UploadItemRef>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Indexing$Datasources$Items$Upload
        | BodyResponseCallback<Schema$UploadItemRef>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadItemRef>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadItemRef>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UploadItemRef> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Indexing$Datasources$Items$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Indexing$Datasources$Items$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/indexing/{+name}:upload').replace(
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
        createAPIRequest<Schema$UploadItemRef>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadItemRef>(parameters);
      }
    }
  }

  export interface Params$Resource$Indexing$Datasources$Items$Delete
    extends StandardParameters {
    /**
     * Name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string;
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Required. The RequestMode for this request.
     */
    mode?: string;
    /**
     * Required. Name of the item to delete. Format: datasources/{source_id\}/items/{item_id\}
     */
    name?: string;
    /**
     * Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes.
     */
    version?: string;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Deletequeueitems
    extends StandardParameters {
    /**
     * Name of the Data Source to delete items in a queue. Format: datasources/{source_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeleteQueueItemsRequest;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Get
    extends StandardParameters {
    /**
     * Name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string;
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Name of the item to get info. Format: datasources/{source_id\}/items/{item_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Index
    extends StandardParameters {
    /**
     * Name of the Item. Format: datasources/{source_id\}/items/{item_id\} This is a required field. The maximum length is 1536 characters.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IndexItemRequest;
  }
  export interface Params$Resource$Indexing$Datasources$Items$List
    extends StandardParameters {
    /**
     * When set to true, the indexing system only populates the following fields: name, version, queue. metadata.hash, metadata.title, metadata.sourceRepositoryURL, metadata.objectType, metadata.createTime, metadata.updateTime, metadata.contentLanguage, metadata.mimeType, structured_data.hash, content.hash, itemType, itemStatus.code, itemStatus.processingError.code, itemStatus.repositoryError.type, If this value is false, then all the fields are populated in Item.
     */
    brief?: boolean;
    /**
     * Name of connector making this call. Format: datasources/{source_id\}/connectors/{ID\}
     */
    connectorName?: string;
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Name of the Data Source to list Items. Format: datasources/{source_id\}
     */
    name?: string;
    /**
     * Maximum number of items to fetch in a request. The max value is 1000 when brief is true. The max value is 10 if brief is false. The default value is 10
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Poll
    extends StandardParameters {
    /**
     * Name of the Data Source to poll items. Format: datasources/{source_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PollItemsRequest;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Push
    extends StandardParameters {
    /**
     * Name of the item to push into the indexing queue. Format: datasources/{source_id\}/items/{ID\} This is a required field. The maximum length is 1536 characters.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PushItemRequest;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Unreserve
    extends StandardParameters {
    /**
     * Name of the Data Source to unreserve all items. Format: datasources/{source_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnreserveItemsRequest;
  }
  export interface Params$Resource$Indexing$Datasources$Items$Upload
    extends StandardParameters {
    /**
     * Name of the Item to start a resumable upload. Format: datasources/{source_id\}/items/{item_id\}. The maximum length is 1536 bytes.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartUploadItemRequest;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.media.upload({
     *     // Name of the media that is being downloaded. See ReadRequest.resource_name.
     *     resourceName: '.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "resourceName": "my_resourceName"
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "resourceName": "my_resourceName"
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
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Media$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Media>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options: MethodOptions | BodyResponseCallback<Schema$Media>,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    upload(callback: BodyResponseCallback<Schema$Media>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Media> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/media/{+resourceName}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/v1/media/{+resourceName}').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Media>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Media>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Upload extends StandardParameters {
    /**
     * Name of the media that is being downloaded. See ReadRequest.resource_name.
     */
    resourceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Media;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Operations {
    context: APIRequestContext;
    lro: Resource$Operations$Lro;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.lro = new Resource$Operations$Lro(this.context);
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.operations.get({
     *     // The name of the operation resource.
     *     name: 'operations/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Operations$Lro {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.debug',
     *       'https://www.googleapis.com/auth/cloud_search.indexing',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.operations.lro.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'operations/.*',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
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
      params: Params$Resource$Operations$Lro$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Operations$Lro$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Operations$Lro$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Operations$Lro$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Operations$Lro$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$Lro$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Lro$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Lro$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/lro').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Lro$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Query {
    context: APIRequestContext;
    sources: Resource$Query$Sources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.sources = new Resource$Query$Sources(this.context);
    }

    /**
     * The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.query.search({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contextAttributes": [],
     *       //   "dataSourceRestrictions": [],
     *       //   "facetOptions": [],
     *       //   "pageSize": 0,
     *       //   "query": "my_query",
     *       //   "queryInterpretationOptions": {},
     *       //   "requestOptions": {},
     *       //   "sortOptions": {},
     *       //   "start": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "debugInfo": {},
     *   //   "errorInfo": {},
     *   //   "facetResults": [],
     *   //   "hasMoreResults": false,
     *   //   "queryInterpretation": {},
     *   //   "resultCountEstimate": "my_resultCountEstimate",
     *   //   "resultCountExact": "my_resultCountExact",
     *   //   "resultCounts": {},
     *   //   "results": [],
     *   //   "spellResults": [],
     *   //   "structuredResults": []
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
    search(
      params: Params$Resource$Query$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Query$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchResponse>;
    search(
      params: Params$Resource$Query$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Query$Search,
      options: MethodOptions | BodyResponseCallback<Schema$SearchResponse>,
      callback: BodyResponseCallback<Schema$SearchResponse>
    ): void;
    search(
      params: Params$Resource$Query$Search,
      callback: BodyResponseCallback<Schema$SearchResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$SearchResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Query$Search
        | BodyResponseCallback<Schema$SearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SearchResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Query$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Query$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/query/search').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchResponse>(parameters);
      }
    }

    /**
     * Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.query.suggest({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceRestrictions": [],
     *       //   "query": "my_query",
     *       //   "requestOptions": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "suggestResults": []
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
    suggest(
      params: Params$Resource$Query$Suggest,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    suggest(
      params?: Params$Resource$Query$Suggest,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SuggestResponse>;
    suggest(
      params: Params$Resource$Query$Suggest,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    suggest(
      params: Params$Resource$Query$Suggest,
      options: MethodOptions | BodyResponseCallback<Schema$SuggestResponse>,
      callback: BodyResponseCallback<Schema$SuggestResponse>
    ): void;
    suggest(
      params: Params$Resource$Query$Suggest,
      callback: BodyResponseCallback<Schema$SuggestResponse>
    ): void;
    suggest(callback: BodyResponseCallback<Schema$SuggestResponse>): void;
    suggest(
      paramsOrCallback?:
        | Params$Resource$Query$Suggest
        | BodyResponseCallback<Schema$SuggestResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SuggestResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SuggestResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SuggestResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Query$Suggest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Query$Suggest;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/query/suggest').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SuggestResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SuggestResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Query$Search extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchRequest;
  }
  export interface Params$Resource$Query$Suggest extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SuggestRequest;
  }

  export class Resource$Query$Sources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.query.sources.list({
     *     // Number of sources to return in the response.
     *     pageToken: 'placeholder-value',
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'requestOptions.debugOptions.enableDebugging': 'placeholder-value',
     *     // The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The suggest API does not use this parameter. Instead, suggest autocompletes only based on characters in the query.
     *     'requestOptions.languageCode': 'placeholder-value',
     *     // The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).
     *     'requestOptions.searchApplicationId': 'placeholder-value',
     *     // Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.
     *     'requestOptions.timeZone': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sources": []
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
      params: Params$Resource$Query$Sources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Query$Sources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListQuerySourcesResponse>;
    list(
      params: Params$Resource$Query$Sources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Query$Sources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListQuerySourcesResponse>,
      callback: BodyResponseCallback<Schema$ListQuerySourcesResponse>
    ): void;
    list(
      params: Params$Resource$Query$Sources$List,
      callback: BodyResponseCallback<Schema$ListQuerySourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListQuerySourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Query$Sources$List
        | BodyResponseCallback<Schema$ListQuerySourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListQuerySourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListQuerySourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListQuerySourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Query$Sources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Query$Sources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/query/sources').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListQuerySourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListQuerySourcesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Query$Sources$List
    extends StandardParameters {
    /**
     * Number of sources to return in the response.
     */
    pageToken?: string;
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'requestOptions.debugOptions.enableDebugging'?: boolean;
    /**
     * The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The suggest API does not use this parameter. Instead, suggest autocompletes only based on characters in the query.
     */
    'requestOptions.languageCode'?: string;
    /**
     * The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).
     */
    'requestOptions.searchApplicationId'?: string;
    /**
     * Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.
     */
    'requestOptions.timeZone'?: string;
  }

  export class Resource$Settings {
    context: APIRequestContext;
    datasources: Resource$Settings$Datasources;
    searchapplications: Resource$Settings$Searchapplications;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.datasources = new Resource$Settings$Datasources(this.context);
      this.searchapplications = new Resource$Settings$Searchapplications(
        this.context
      );
    }

    /**
     * Get customer settings. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.getCustomer({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditLoggingSettings": {},
     *   //   "vpcSettings": {}
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
    getCustomer(
      params: Params$Resource$Settings$Getcustomer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getCustomer(
      params?: Params$Resource$Settings$Getcustomer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomerSettings>;
    getCustomer(
      params: Params$Resource$Settings$Getcustomer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getCustomer(
      params: Params$Resource$Settings$Getcustomer,
      options: MethodOptions | BodyResponseCallback<Schema$CustomerSettings>,
      callback: BodyResponseCallback<Schema$CustomerSettings>
    ): void;
    getCustomer(
      params: Params$Resource$Settings$Getcustomer,
      callback: BodyResponseCallback<Schema$CustomerSettings>
    ): void;
    getCustomer(callback: BodyResponseCallback<Schema$CustomerSettings>): void;
    getCustomer(
      paramsOrCallback?:
        | Params$Resource$Settings$Getcustomer
        | BodyResponseCallback<Schema$CustomerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomerSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomerSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Getcustomer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Getcustomer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/customer').replace(
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
        createAPIRequest<Schema$CustomerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomerSettings>(parameters);
      }
    }

    /**
     * Update customer settings. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.updateCustomer({
     *     // Update mask to control which fields get updated. If you specify a field in the update_mask but don't specify its value here, that field will be cleared. If the mask is not present or empty, all fields will be updated. Currently supported field paths: vpc_settings and audit_logging_settings
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "auditLoggingSettings": {},
     *       //   "vpcSettings": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    updateCustomer(
      params: Params$Resource$Settings$Updatecustomer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateCustomer(
      params?: Params$Resource$Settings$Updatecustomer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateCustomer(
      params: Params$Resource$Settings$Updatecustomer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateCustomer(
      params: Params$Resource$Settings$Updatecustomer,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateCustomer(
      params: Params$Resource$Settings$Updatecustomer,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateCustomer(callback: BodyResponseCallback<Schema$Operation>): void;
    updateCustomer(
      paramsOrCallback?:
        | Params$Resource$Settings$Updatecustomer
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Updatecustomer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Updatecustomer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/customer').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Settings$Getcustomer
    extends StandardParameters {}
  export interface Params$Resource$Settings$Updatecustomer
    extends StandardParameters {
    /**
     * Update mask to control which fields get updated. If you specify a field in the update_mask but don't specify its value here, that field will be cleared. If the mask is not present or empty, all fields will be updated. Currently supported field paths: vpc_settings and audit_logging_settings
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomerSettings;
  }

  export class Resource$Settings$Datasources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a datasource. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.datasources.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "disableModifications": false,
     *       //   "disableServing": false,
     *       //   "displayName": "my_displayName",
     *       //   "indexingServiceAccounts": [],
     *       //   "itemsVisibility": [],
     *       //   "name": "my_name",
     *       //   "operationIds": [],
     *       //   "shortName": "my_shortName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Settings$Datasources$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Settings$Datasources$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Settings$Datasources$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Settings$Datasources$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Settings$Datasources$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Settings$Datasources$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Datasources$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Datasources$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/datasources').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a datasource. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.datasources.delete({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Name of the datasource. Format: datasources/{source_id\}.
     *     name: 'datasources/my-datasource',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Settings$Datasources$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Settings$Datasources$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Settings$Datasources$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Settings$Datasources$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Settings$Datasources$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Settings$Datasources$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Datasources$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Datasources$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets a datasource. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.datasources.get({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Name of the datasource resource. Format: datasources/{source_id\}.
     *     name: 'datasources/my-datasource',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disableModifications": false,
     *   //   "disableServing": false,
     *   //   "displayName": "my_displayName",
     *   //   "indexingServiceAccounts": [],
     *   //   "itemsVisibility": [],
     *   //   "name": "my_name",
     *   //   "operationIds": [],
     *   //   "shortName": "my_shortName"
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
      params: Params$Resource$Settings$Datasources$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Settings$Datasources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataSource>;
    get(
      params: Params$Resource$Settings$Datasources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Settings$Datasources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(
      params: Params$Resource$Settings$Datasources$Get,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataSource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Settings$Datasources$Get
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DataSource> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Datasources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Datasources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$DataSource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * Lists datasources. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.datasources.list({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Maximum number of datasources to fetch in a request. The max value is 100. The default value is 10
     *     pageSize: 'placeholder-value',
     *     // Starting index of the results.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sources": []
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
      params: Params$Resource$Settings$Datasources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Settings$Datasources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDataSourceResponse>;
    list(
      params: Params$Resource$Settings$Datasources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Settings$Datasources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSourceResponse>,
      callback: BodyResponseCallback<Schema$ListDataSourceResponse>
    ): void;
    list(
      params: Params$Resource$Settings$Datasources$List,
      callback: BodyResponseCallback<Schema$ListDataSourceResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataSourceResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Settings$Datasources$List
        | BodyResponseCallback<Schema$ListDataSourceResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataSourceResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataSourceResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDataSourceResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Datasources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Datasources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/datasources').replace(
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
        createAPIRequest<Schema$ListDataSourceResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDataSourceResponse>(parameters);
      }
    }

    /**
     * Updates a datasource. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.datasources.update({
     *     // Name of the datasource resource. Format: datasources/{source_id\}. The name is ignored when creating a datasource.
     *     name: 'datasources/my-datasource',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "debugOptions": {},
     *       //   "source": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    update(
      params: Params$Resource$Settings$Datasources$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Settings$Datasources$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Settings$Datasources$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Settings$Datasources$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Settings$Datasources$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Settings$Datasources$Update
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Datasources$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Datasources$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Settings$Datasources$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSource;
  }
  export interface Params$Resource$Settings$Datasources$Delete
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Name of the datasource. Format: datasources/{source_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Settings$Datasources$Get
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Name of the datasource resource. Format: datasources/{source_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Settings$Datasources$List
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Maximum number of datasources to fetch in a request. The max value is 100. The default value is 10
     */
    pageSize?: number;
    /**
     * Starting index of the results.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Settings$Datasources$Update
    extends StandardParameters {
    /**
     * Name of the datasource resource. Format: datasources/{source_id\}. The name is ignored when creating a datasource.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateDataSourceRequest;
  }

  export class Resource$Settings$Searchapplications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a search application. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceRestrictions": [],
     *       //   "defaultFacetOptions": [],
     *       //   "defaultSortOptions": {},
     *       //   "displayName": "my_displayName",
     *       //   "enableAuditLog": false,
     *       //   "name": "my_name",
     *       //   "operationIds": [],
     *       //   "queryInterpretationConfig": {},
     *       //   "scoringConfig": {},
     *       //   "sourceConfig": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Settings$Searchapplications$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Settings$Searchapplications$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Settings$Searchapplications$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Settings$Searchapplications$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Settings$Searchapplications$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/searchapplications').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a search application. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.delete({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // The name of the search application to be deleted. Format: applications/{application_id\}.
     *     name: 'searchapplications/my-searchapplication',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Settings$Searchapplications$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Settings$Searchapplications$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Settings$Searchapplications$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Settings$Searchapplications$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Settings$Searchapplications$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the specified search application. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.get({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // Name of the search application. Format: searchapplications/{application_id\}.
     *     name: 'searchapplications/my-searchapplication',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceRestrictions": [],
     *   //   "defaultFacetOptions": [],
     *   //   "defaultSortOptions": {},
     *   //   "displayName": "my_displayName",
     *   //   "enableAuditLog": false,
     *   //   "name": "my_name",
     *   //   "operationIds": [],
     *   //   "queryInterpretationConfig": {},
     *   //   "scoringConfig": {},
     *   //   "sourceConfig": []
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
      params: Params$Resource$Settings$Searchapplications$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Settings$Searchapplications$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchApplication>;
    get(
      params: Params$Resource$Settings$Searchapplications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Settings$Searchapplications$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SearchApplication>,
      callback: BodyResponseCallback<Schema$SearchApplication>
    ): void;
    get(
      params: Params$Resource$Settings$Searchapplications$Get,
      callback: BodyResponseCallback<Schema$SearchApplication>
    ): void;
    get(callback: BodyResponseCallback<Schema$SearchApplication>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$Get
        | BodyResponseCallback<Schema$SearchApplication>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchApplication>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchApplication>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchApplication>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$SearchApplication>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchApplication>(parameters);
      }
    }

    /**
     * Lists all search applications. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.list({
     *     // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     *     'debugOptions.enableDebugging': 'placeholder-value',
     *     // The maximum number of items to return.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any. The default value is 10
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "searchApplications": []
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
      params: Params$Resource$Settings$Searchapplications$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Settings$Searchapplications$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSearchApplicationsResponse>;
    list(
      params: Params$Resource$Settings$Searchapplications$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Settings$Searchapplications$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSearchApplicationsResponse>,
      callback: BodyResponseCallback<Schema$ListSearchApplicationsResponse>
    ): void;
    list(
      params: Params$Resource$Settings$Searchapplications$List,
      callback: BodyResponseCallback<Schema$ListSearchApplicationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSearchApplicationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$List
        | BodyResponseCallback<Schema$ListSearchApplicationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSearchApplicationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSearchApplicationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSearchApplicationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/searchapplications').replace(
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
        createAPIRequest<Schema$ListSearchApplicationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSearchApplicationsResponse>(
          parameters
        );
      }
    }

    /**
     * Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.reset({
     *     // The name of the search application to be reset. Format: applications/{application_id\}.
     *     name: 'searchapplications/my-searchapplication',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "debugOptions": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    reset(
      params: Params$Resource$Settings$Searchapplications$Reset,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reset(
      params?: Params$Resource$Settings$Searchapplications$Reset,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    reset(
      params: Params$Resource$Settings$Searchapplications$Reset,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reset(
      params: Params$Resource$Settings$Searchapplications$Reset,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reset(
      params: Params$Resource$Settings$Searchapplications$Reset,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reset(callback: BodyResponseCallback<Schema$Operation>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$Reset
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$Reset;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}:reset').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Updates a search application. **Note:** This API requires an admin account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.settings',
     *       'https://www.googleapis.com/auth/cloud_search.settings.query',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.settings.searchapplications.update({
     *     // Name of the Search Application. Format: searchapplications/{application_id\}.
     *     name: 'searchapplications/my-searchapplication',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceRestrictions": [],
     *       //   "defaultFacetOptions": [],
     *       //   "defaultSortOptions": {},
     *       //   "displayName": "my_displayName",
     *       //   "enableAuditLog": false,
     *       //   "name": "my_name",
     *       //   "operationIds": [],
     *       //   "queryInterpretationConfig": {},
     *       //   "scoringConfig": {},
     *       //   "sourceConfig": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    update(
      params: Params$Resource$Settings$Searchapplications$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Settings$Searchapplications$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Settings$Searchapplications$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Settings$Searchapplications$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Settings$Searchapplications$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Settings$Searchapplications$Update
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settings$Searchapplications$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Searchapplications$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/settings/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Settings$Searchapplications$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchApplication;
  }
  export interface Params$Resource$Settings$Searchapplications$Delete
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * The name of the search application to be deleted. Format: applications/{application_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Settings$Searchapplications$Get
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * Name of the search application. Format: searchapplications/{application_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Settings$Searchapplications$List
    extends StandardParameters {
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    'debugOptions.enableDebugging'?: boolean;
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any. The default value is 10
     */
    pageToken?: string;
  }
  export interface Params$Resource$Settings$Searchapplications$Reset
    extends StandardParameters {
    /**
     * The name of the search application to be reset. Format: applications/{application_id\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetSearchApplicationRequest;
  }
  export interface Params$Resource$Settings$Searchapplications$Update
    extends StandardParameters {
    /**
     * Name of the Search Application. Format: searchapplications/{application_id\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchApplication;
  }

  export class Resource$Stats {
    context: APIRequestContext;
    index: Resource$Stats$Index;
    query: Resource$Stats$Query;
    session: Resource$Stats$Session;
    user: Resource$Stats$User;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.index = new Resource$Stats$Index(this.context);
      this.query = new Resource$Stats$Query(this.context);
      this.session = new Resource$Stats$Session(this.context);
      this.user = new Resource$Stats$User(this.context);
    }

    /**
     * Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.getIndex({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": []
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
    getIndex(
      params: Params$Resource$Stats$Getindex,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIndex(
      params?: Params$Resource$Stats$Getindex,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetCustomerIndexStatsResponse>;
    getIndex(
      params: Params$Resource$Stats$Getindex,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIndex(
      params: Params$Resource$Stats$Getindex,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>,
      callback: BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>
    ): void;
    getIndex(
      params: Params$Resource$Stats$Getindex,
      callback: BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>
    ): void;
    getIndex(
      callback: BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>
    ): void;
    getIndex(
      paramsOrCallback?:
        | Params$Resource$Stats$Getindex
        | BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetCustomerIndexStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetCustomerIndexStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Stats$Getindex;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Getindex;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/index').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GetCustomerIndexStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetCustomerIndexStatsResponse>(
          parameters
        );
      }
    }

    /**
     * Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.getQuery({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": []
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
    getQuery(
      params: Params$Resource$Stats$Getquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getQuery(
      params?: Params$Resource$Stats$Getquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetCustomerQueryStatsResponse>;
    getQuery(
      params: Params$Resource$Stats$Getquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getQuery(
      params: Params$Resource$Stats$Getquery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>,
      callback: BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>
    ): void;
    getQuery(
      params: Params$Resource$Stats$Getquery,
      callback: BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>
    ): void;
    getQuery(
      callback: BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>
    ): void;
    getQuery(
      paramsOrCallback?:
        | Params$Resource$Stats$Getquery
        | BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetCustomerQueryStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetCustomerQueryStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Stats$Getquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Getquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/query').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GetCustomerQueryStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetCustomerQueryStatsResponse>(
          parameters
        );
      }
    }

    /**
     * Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.getSession({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": []
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
    getSession(
      params: Params$Resource$Stats$Getsession,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSession(
      params?: Params$Resource$Stats$Getsession,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetCustomerSessionStatsResponse>;
    getSession(
      params: Params$Resource$Stats$Getsession,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSession(
      params: Params$Resource$Stats$Getsession,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>,
      callback: BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>
    ): void;
    getSession(
      params: Params$Resource$Stats$Getsession,
      callback: BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>
    ): void;
    getSession(
      callback: BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>
    ): void;
    getSession(
      paramsOrCallback?:
        | Params$Resource$Stats$Getsession
        | BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetCustomerSessionStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetCustomerSessionStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Stats$Getsession;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Getsession;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/session').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GetCustomerSessionStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetCustomerSessionStatsResponse>(
          parameters
        );
      }
    }

    /**
     * Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.getUser({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": []
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
    getUser(
      params: Params$Resource$Stats$Getuser,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getUser(
      params?: Params$Resource$Stats$Getuser,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetCustomerUserStatsResponse>;
    getUser(
      params: Params$Resource$Stats$Getuser,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getUser(
      params: Params$Resource$Stats$Getuser,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetCustomerUserStatsResponse>,
      callback: BodyResponseCallback<Schema$GetCustomerUserStatsResponse>
    ): void;
    getUser(
      params: Params$Resource$Stats$Getuser,
      callback: BodyResponseCallback<Schema$GetCustomerUserStatsResponse>
    ): void;
    getUser(
      callback: BodyResponseCallback<Schema$GetCustomerUserStatsResponse>
    ): void;
    getUser(
      paramsOrCallback?:
        | Params$Resource$Stats$Getuser
        | BodyResponseCallback<Schema$GetCustomerUserStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetCustomerUserStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetCustomerUserStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetCustomerUserStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Stats$Getuser;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Getuser;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/user').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GetCustomerUserStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetCustomerUserStatsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Stats$Getindex extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }
  export interface Params$Resource$Stats$Getquery extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }
  export interface Params$Resource$Stats$Getsession extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }
  export interface Params$Resource$Stats$Getuser extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }

  export class Resource$Stats$Index {
    context: APIRequestContext;
    datasources: Resource$Stats$Index$Datasources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.datasources = new Resource$Stats$Index$Datasources(this.context);
    }
  }

  export class Resource$Stats$Index$Datasources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.index.datasources.get({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // The resource id of the data source to retrieve statistics for, in the following format: "datasources/{source_id\}"
     *     name: 'datasources/my-datasource',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": []
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
      params: Params$Resource$Stats$Index$Datasources$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Stats$Index$Datasources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetDataSourceIndexStatsResponse>;
    get(
      params: Params$Resource$Stats$Index$Datasources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Stats$Index$Datasources$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>,
      callback: BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>
    ): void;
    get(
      params: Params$Resource$Stats$Index$Datasources$Get,
      callback: BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Stats$Index$Datasources$Get
        | BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetDataSourceIndexStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetDataSourceIndexStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Stats$Index$Datasources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Index$Datasources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/index/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GetDataSourceIndexStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetDataSourceIndexStatsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Stats$Index$Datasources$Get
    extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * The resource id of the data source to retrieve statistics for, in the following format: "datasources/{source_id\}"
     */
    name?: string;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }

  export class Resource$Stats$Query {
    context: APIRequestContext;
    searchapplications: Resource$Stats$Query$Searchapplications;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.searchapplications = new Resource$Stats$Query$Searchapplications(
        this.context
      );
    }
  }

  export class Resource$Stats$Query$Searchapplications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.query.searchapplications.get({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // The resource id of the search application query stats, in the following format: searchapplications/{application_id\}
     *     name: 'searchapplications/my-searchapplication',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": []
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
      params: Params$Resource$Stats$Query$Searchapplications$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Stats$Query$Searchapplications$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetSearchApplicationQueryStatsResponse>;
    get(
      params: Params$Resource$Stats$Query$Searchapplications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Stats$Query$Searchapplications$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>,
      callback: BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>
    ): void;
    get(
      params: Params$Resource$Stats$Query$Searchapplications$Get,
      callback: BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Stats$Query$Searchapplications$Get
        | BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetSearchApplicationQueryStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetSearchApplicationQueryStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Stats$Query$Searchapplications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Query$Searchapplications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/query/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GetSearchApplicationQueryStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetSearchApplicationQueryStatsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Stats$Query$Searchapplications$Get
    extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * The resource id of the search application query stats, in the following format: searchapplications/{application_id\}
     */
    name?: string;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }

  export class Resource$Stats$Session {
    context: APIRequestContext;
    searchapplications: Resource$Stats$Session$Searchapplications;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.searchapplications = new Resource$Stats$Session$Searchapplications(
        this.context
      );
    }
  }

  export class Resource$Stats$Session$Searchapplications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.session.searchapplications.get({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // The resource id of the search application session stats, in the following format: searchapplications/{application_id\}
     *     name: 'searchapplications/my-searchapplication',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": []
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
      params: Params$Resource$Stats$Session$Searchapplications$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Stats$Session$Searchapplications$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetSearchApplicationSessionStatsResponse>;
    get(
      params: Params$Resource$Stats$Session$Searchapplications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Stats$Session$Searchapplications$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>,
      callback: BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>
    ): void;
    get(
      params: Params$Resource$Stats$Session$Searchapplications$Get,
      callback: BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Stats$Session$Searchapplications$Get
        | BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetSearchApplicationSessionStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetSearchApplicationSessionStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Stats$Session$Searchapplications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$Session$Searchapplications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/session/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GetSearchApplicationSessionStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetSearchApplicationSessionStatsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Stats$Session$Searchapplications$Get
    extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * The resource id of the search application session stats, in the following format: searchapplications/{application_id\}
     */
    name?: string;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }

  export class Resource$Stats$User {
    context: APIRequestContext;
    searchapplications: Resource$Stats$User$Searchapplications;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.searchapplications = new Resource$Stats$User$Searchapplications(
        this.context
      );
    }
  }

  export class Resource$Stats$User$Searchapplications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsearch.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsearch = google.cloudsearch('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud_search',
     *       'https://www.googleapis.com/auth/cloud_search.stats',
     *       'https://www.googleapis.com/auth/cloud_search.stats.indexing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudsearch.stats.user.searchapplications.get({
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'fromDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'fromDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'fromDate.year': 'placeholder-value',
     *     // The resource id of the search application session stats, in the following format: searchapplications/{application_id\}
     *     name: 'searchapplications/my-searchapplication',
     *     // Day of month. Must be from 1 to 31 and valid for the year and month.
     *     'toDate.day': 'placeholder-value',
     *     // Month of date. Must be from 1 to 12.
     *     'toDate.month': 'placeholder-value',
     *     // Year of date. Must be from 1 to 9999.
     *     'toDate.year': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "stats": []
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
      params: Params$Resource$Stats$User$Searchapplications$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Stats$User$Searchapplications$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetSearchApplicationUserStatsResponse>;
    get(
      params: Params$Resource$Stats$User$Searchapplications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Stats$User$Searchapplications$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>,
      callback: BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>
    ): void;
    get(
      params: Params$Resource$Stats$User$Searchapplications$Get,
      callback: BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Stats$User$Searchapplications$Get
        | BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetSearchApplicationUserStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetSearchApplicationUserStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Stats$User$Searchapplications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Stats$User$Searchapplications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsearch.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/stats/user/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GetSearchApplicationUserStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetSearchApplicationUserStatsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Stats$User$Searchapplications$Get
    extends StandardParameters {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'fromDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'fromDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'fromDate.year'?: number;
    /**
     * The resource id of the search application session stats, in the following format: searchapplications/{application_id\}
     */
    name?: string;
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    'toDate.day'?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    'toDate.month'?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    'toDate.year'?: number;
  }
}
