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

export namespace memcache_v1 {
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
   * Cloud Memorystore for Memcached API
   *
   * Google Cloud Memorystore for Memcached API is used for creating and managing Memcached instances in GCP.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const memcache = google.memcache('v1');
   * ```
   */
  export class Memcache {
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
   * Request for ApplyParameters.
   */
  export interface Schema$ApplyParametersRequest {
    /**
     * Whether to apply instance-level parameter group to all nodes. If set to true, users are restricted from specifying individual nodes, and `ApplyParameters` updates all nodes within the instance.
     */
    applyAll?: boolean | null;
    /**
     * Nodes to which the instance-level parameter group is applied.
     */
    nodeIds?: string[] | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Time window specified for daily operations.
   */
  export interface Schema$DailyCycle {
    /**
     * Output only. Duration of the time window, set by service producer.
     */
    duration?: string | null;
    /**
     * Time within the day to start the operations.
     */
    startTime?: Schema$TimeOfDay;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
   */
  export interface Schema$Date {
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
  /**
   * DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date.
   */
  export interface Schema$DenyMaintenancePeriod {
    /**
     * Deny period end date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be before the end.
     */
    endDate?: Schema$Date;
    /**
     * Deny period start date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be the same or after the start.
     */
    startDate?: Schema$Date;
    /**
     * Time in UTC when the Blackout period starts on start_date and ends on end_date. This can be: * Full time. * All zeros for 00:00:00 UTC
     */
    time?: Schema$TimeOfDay;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * Metadata for the given google.cloud.location.Location.
   */
  export interface Schema$GoogleCloudMemcacheV1LocationMetadata {
    /**
     * Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in the `zones` field when creating a Memcached instance.
     */
    availableZones?: {
      [key: string]: Schema$GoogleCloudMemcacheV1ZoneMetadata;
    } | null;
  }
  /**
   * Represents the metadata of a long-running operation.
   */
  export interface Schema$GoogleCloudMemcacheV1OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    cancelRequested?: boolean | null;
    /**
     * Output only. Time when the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. Time when the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusDetail?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  export interface Schema$GoogleCloudMemcacheV1ZoneMetadata {}
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1Instance {
    /**
     * consumer_defined_name is the name that is set by the consumer. On the other hand Name field represents system-assigned id of an instance so consumers are not necessarily aware of it. consumer_defined_name is used for notification/UI purposes for consumer to recognize their instances.
     */
    consumerDefinedName?: string | null;
    /**
     * Output only. Timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Deprecated. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For complete details of MaintenancePolicy, please refer to go/cloud-saas-mw-ug.
     */
    maintenancePolicyNames?: {[key: string]: string} | null;
    /**
     * The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions.
     */
    maintenanceSchedules?: {
      [
        key: string
      ]: Schema$GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule;
    } | null;
    /**
     * Optional. The MaintenanceSettings associated with instance.
     */
    maintenanceSettings?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings;
    /**
     * Unique name of the resource. It uses the form: `projects/{project_id|project_number\}/locations/{location_id\}/instances/{instance_id\}` Note: Either project_id or project_number can be used, but keep it consistent with other APIs (e.g. RescheduleUpdate)
     */
    name?: string | null;
    /**
     * Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata.
     */
    producerMetadata?: {[key: string]: string} | null;
    /**
     * Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata.
     */
    provisionedResources?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource[];
    /**
     * Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions.
     */
    slmInstanceTemplate?: string | null;
    /**
     * Output only. SLO metadata for instance classification in the Standardized dataplane SLO platform. See go/cloud-ssa-standard-slo for feature description.
     */
    sloMetadata?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata;
    /**
     * Software versions that are used to deploy this instance. This can be mutated by rollout services.
     */
    softwareVersions?: {[key: string]: string} | null;
    /**
     * Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use).
     */
    state?: string | null;
    /**
     * Output only. ID of the associated GCP tenant project. See go/get-instance-metadata.
     */
    tenantProjectId?: string | null;
    /**
     * Output only. Timestamp when the resource was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule {
    /**
     * This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers.
     */
    canReschedule?: boolean | null;
    /**
     * The scheduled end time for the maintenance.
     */
    endTime?: string | null;
    /**
     * The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy.
     */
    rolloutManagementPolicy?: string | null;
    /**
     * schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline.
     */
    scheduleDeadlineTime?: string | null;
    /**
     * The scheduled start time for the maintenance.
     */
    startTime?: string | null;
  }
  /**
   * Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings {
    /**
     * Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted.
     */
    exclude?: boolean | null;
    /**
     * Optional. If the update call is triggered from rollback, set the value as true.
     */
    isRollback?: boolean | null;
    /**
     * Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For complete details of MaintenancePolicy, please refer to go/cloud-saas-mw-ug. If only the name is needed (like in the deprecated Instance.maintenance_policy_names field) then only populate MaintenancePolicy.name.
     */
    maintenancePolicies?: {[key: string]: Schema$MaintenancePolicy} | null;
  }
  /**
   * Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata {
    /**
     * By default node is eligible if instance is eligible. But individual node might be excluded from SLO by adding entry here. For semantic see SloMetadata.exclusions. If both instance and node level exclusions are present for time period, the node level's reason will be reported by Eligibility Exporter.
     */
    exclusions?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion[];
    /**
     * The location of the node, if different from instance location.
     */
    location?: string | null;
    /**
     * The id of the node. This should be equal to SaasInstanceNode.node_id.
     */
    nodeId?: string | null;
    /**
     * If present, this will override eligibility for the node coming from instance or exclusions for specified SLIs.
     */
    perSliEligibility?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility;
  }
  /**
   * PerSliSloEligibility is a mapping from an SLI name to eligibility.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility {
    /**
     * An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted.
     */
    eligibilities?: {
      [
        key: string
      ]: Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility;
    } | null;
  }
  /**
   * Describes provisioned dataplane resources.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource {
    /**
     * Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'.
     */
    resourceType?: string | null;
    /**
     * URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)".
     */
    resourceUrl?: string | null;
  }
  /**
   * SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility {
    /**
     * Whether an instance is eligible or ineligible.
     */
    eligible?: boolean | null;
    /**
     * User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed.
     */
    reason?: string | null;
  }
  /**
   * SloExclusion represents an exclusion in SLI calculation applies to all SLOs.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion {
    /**
     * Exclusion duration. No restrictions on the possible values. When an ongoing operation is taking longer than initially expected, an existing entry in the exclusion list can be updated by extending the duration. This is supported by the subsystem exporting eligibility data as long as such extension is committed at least 10 minutes before the original exclusion expiration - otherwise it is possible that there will be "gaps" in the exclusion application in the exported timeseries.
     */
    duration?: string | null;
    /**
     * Human-readable reason for the exclusion. This should be a static string (e.g. "Disruptive update in progress") and should not contain dynamically generated data (e.g. instance name). Can be left empty.
     */
    reason?: string | null;
    /**
     * Name of an SLI that this exclusion applies to. Can be left empty, signaling that the instance should be excluded from all SLIs.
     */
    sliName?: string | null;
    /**
     * Start time of the exclusion. No alignment (e.g. to a full minute) needed.
     */
    startTime?: string | null;
  }
  /**
   * SloMetadata contains resources required for proper SLO classification of the instance.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata {
    /**
     * List of SLO exclusion windows. When multiple entries in the list match (matching the exclusion time-window against current time point) the exclusion reason used in the first matching entry will be published. It is not needed to include expired exclusion in this list, as only the currently applicable exclusions are taken into account by the eligibility exporting subsystem (the historical state of exclusions will be reflected in the historically produced timeseries regardless of the current state). This field can be used to mark the instance as temporary ineligible for the purpose of SLO calculation. For permanent instance SLO exclusion, use of custom instance eligibility is recommended. See 'eligibility' field below.
     */
    exclusions?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion[];
    /**
     * Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch.
     */
    nodes?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata[];
    /**
     * Optional. Multiple per-instance SLI eligibilities which apply for individual SLIs.
     */
    perSliEligibility?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility;
    /**
     * Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty.
     */
    tier?: string | null;
  }
  /**
   * A Memorystore for Memcached instance
   */
  export interface Schema$Instance {
    /**
     * The full name of the Google Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. If left unspecified, the `default` network will be used.
     */
    authorizedNetwork?: string | null;
    /**
     * Output only. The time the instance was created.
     */
    createTime?: string | null;
    /**
     * Output only. Endpoint for the Discovery API.
     */
    discoveryEndpoint?: string | null;
    /**
     * User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.
     */
    displayName?: string | null;
    /**
     * List of messages that describe the current state of the Memcached instance.
     */
    instanceMessages?: Schema$InstanceMessage[];
    /**
     * Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The full version of memcached server running on this instance. System automatically determines the full memcached version for an instance based on the input MemcacheVersion. The full version format will be "memcached-1.5.16".
     */
    memcacheFullVersion?: string | null;
    /**
     * Output only. List of Memcached nodes. Refer to Node message for more details.
     */
    memcacheNodes?: Schema$Node[];
    /**
     * The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version.
     */
    memcacheVersion?: string | null;
    /**
     * Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id\}/locations/{location_id\}/instances/{instance_id\}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.
     */
    name?: string | null;
    /**
     * Required. Configuration for Memcached nodes.
     */
    nodeConfig?: Schema$NodeConfig;
    /**
     * Required. Number of nodes in the Memcached instance.
     */
    nodeCount?: number | null;
    /**
     * Optional: User defined parameters to apply to the memcached process on each node.
     */
    parameters?: Schema$MemcacheParameters;
    /**
     * Output only. The state of this Memcached instance.
     */
    state?: string | null;
    /**
     * Output only. The time the instance was updated.
     */
    updateTime?: string | null;
    /**
     * Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.
     */
    zones?: string[] | null;
  }
  export interface Schema$InstanceMessage {
    /**
     * A code that correspond to one type of user-facing message.
     */
    code?: string | null;
    /**
     * Message on memcached instance which will be exposed to users.
     */
    message?: string | null;
  }
  /**
   * Response for ListInstances.
   */
  export interface Schema$ListInstancesResponse {
    /**
     * A list of Memcached instances in the project in the specified location, or across all locations. If the `location_id` in the parent field of the request is "-", all regions available to the project are queried, and the results aggregated.
     */
    instances?: Schema$Instance[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
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
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * Metadata for the given google.cloud.location.Location.
   */
  export interface Schema$LocationMetadata {
    /**
     * Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in the `zones` field when creating a Memcached instance.
     */
    availableZones?: {[key: string]: Schema$ZoneMetadata} | null;
  }
  /**
   * Defines policies to service maintenance events.
   */
  export interface Schema$MaintenancePolicy {
    /**
     * Output only. The time when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.
     */
    description?: string | null;
    /**
     * Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. MaintenancePolicy name using the form: `projects/{project_id\}/locations/{location_id\}/maintenancePolicies/{maintenance_policy_id\}` where {project_id\} refers to a GCP consumer project ID, {location_id\} refers to a GCP region/zone, {maintenance_policy_id\} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`.
     */
    name?: string | null;
    /**
     * Optional. The state of the policy.
     */
    state?: string | null;
    /**
     * Maintenance policy applicable to instance update.
     */
    updatePolicy?: Schema$UpdatePolicy;
    /**
     * Output only. The time when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * MaintenanceWindow definition.
   */
  export interface Schema$MaintenanceWindow {
    /**
     * Daily cycle.
     */
    dailyCycle?: Schema$DailyCycle;
    /**
     * Weekly cycle.
     */
    weeklyCycle?: Schema$WeeklyCycle;
  }
  /**
   * The unique ID associated with this set of parameters. Users can use this id to determine if the parameters associated with the instance differ from the parameters associated with the nodes. A discrepancy between parameter ids can inform users that they may need to take action to apply parameters on nodes.
   */
  export interface Schema$MemcacheParameters {
    /**
     * Output only.
     */
    id?: string | null;
    /**
     * User defined set of parameters to use in the memcached process.
     */
    params?: {[key: string]: string} | null;
  }
  export interface Schema$Node {
    /**
     * Output only. Hostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node.
     */
    host?: string | null;
    /**
     * Output only. Identifier of the Memcached node. The node id does not include project or location like the Memcached instance name.
     */
    nodeId?: string | null;
    /**
     * User defined parameters currently applied to the node.
     */
    parameters?: Schema$MemcacheParameters;
    /**
     * Output only. The port number of the Memcached server on this node.
     */
    port?: number | null;
    /**
     * Output only. Current state of the Memcached node.
     */
    state?: string | null;
    /**
     * Output only. Location (GCP Zone) for the Memcached node.
     */
    zone?: string | null;
  }
  /**
   * Configuration for a Memcached Node.
   */
  export interface Schema$NodeConfig {
    /**
     * Required. Number of cpus per Memcached node.
     */
    cpuCount?: number | null;
    /**
     * Required. Memory size in MiB for each Memcached node.
     */
    memorySizeMb?: number | null;
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
   * Represents the metadata of a long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    cancelRequested?: boolean | null;
    /**
     * Output only. Time when the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. Time when the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusDetail?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * Configure the schedule.
   */
  export interface Schema$Schedule {
    /**
     * Allows to define schedule that runs specified day of the week.
     */
    day?: string | null;
    /**
     * Output only. Duration of the time window, set by service producer.
     */
    duration?: string | null;
    /**
     * Time within the window to start the operations.
     */
    startTime?: Schema$TimeOfDay;
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
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }
  /**
   * Request for UpdateParameters.
   */
  export interface Schema$UpdateParametersRequest {
    /**
     * The parameters to apply to the instance.
     */
    parameters?: Schema$MemcacheParameters;
    /**
     * Required. Mask of fields to update.
     */
    updateMask?: string | null;
  }
  /**
   * Maintenance policy applicable to instance updates.
   */
  export interface Schema$UpdatePolicy {
    /**
     * Optional. Relative scheduling channel applied to resource.
     */
    channel?: string | null;
    /**
     * Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. User can specify zero or more non-overlapping deny periods. For V1, Maximum number of deny_maintenance_periods is expected to be one.
     */
    denyMaintenancePeriods?: Schema$DenyMaintenancePeriod[];
    /**
     * Optional. Maintenance window that is applied to resources covered by this policy.
     */
    window?: Schema$MaintenanceWindow;
  }
  /**
   * Time window specified for weekly operations.
   */
  export interface Schema$WeeklyCycle {
    /**
     * User can specify multiple windows in a week. Minimum of 1 window.
     */
    schedule?: Schema$Schedule[];
  }
  export interface Schema$ZoneMetadata {}

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    instances: Resource$Projects$Locations$Instances;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instances = new Resource$Projects$Locations$Instances(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
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
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Location> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.list({
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
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
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Instances {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.instances.applyParameters({
     *     // Required. Resource name of the Memcached instance for which parameter group updates should be applied.
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "applyAll": false,
     *       //   "nodeIds": []
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
    applyParameters(
      params: Params$Resource$Projects$Locations$Instances$Applyparameters,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    applyParameters(
      params?: Params$Resource$Projects$Locations$Instances$Applyparameters,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    applyParameters(
      params: Params$Resource$Projects$Locations$Instances$Applyparameters,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    applyParameters(
      params: Params$Resource$Projects$Locations$Instances$Applyparameters,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    applyParameters(
      params: Params$Resource$Projects$Locations$Instances$Applyparameters,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    applyParameters(callback: BodyResponseCallback<Schema$Operation>): void;
    applyParameters(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Applyparameters
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
        {}) as Params$Resource$Projects$Locations$Instances$Applyparameters;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Applyparameters;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:applyParameters').replace(
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
     * Creates a new Instance in a given location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.instances.create({
     *     // Required. The logical name of the Memcached instance in the user project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the user project / location. If any of the above are not met, the API raises an invalid argument error.
     *     instanceId: 'placeholder-value',
     *     // Required. The resource name of the instance location using the form: `projects/{project_id\}/locations/{location_id\}` where `location_id` refers to a GCP region
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authorizedNetwork": "my_authorizedNetwork",
     *       //   "createTime": "my_createTime",
     *       //   "discoveryEndpoint": "my_discoveryEndpoint",
     *       //   "displayName": "my_displayName",
     *       //   "instanceMessages": [],
     *       //   "labels": {},
     *       //   "memcacheFullVersion": "my_memcacheFullVersion",
     *       //   "memcacheNodes": [],
     *       //   "memcacheVersion": "my_memcacheVersion",
     *       //   "name": "my_name",
     *       //   "nodeConfig": {},
     *       //   "nodeCount": 0,
     *       //   "parameters": {},
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime",
     *       //   "zones": []
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
      params: Params$Resource$Projects$Locations$Instances$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Instances$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Instances$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Instances$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Instances$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Create
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
        {}) as Params$Resource$Projects$Locations$Instances$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instances').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single Instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.instances.delete({
     *     // Required. Memcached instance resource name in the format: `projects/{project_id\}/locations/{location_id\}/instances/{instance_id\}` where `location_id` refers to a GCP region
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
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
      params: Params$Resource$Projects$Locations$Instances$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Instances$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Instances$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Instances$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Instances$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Delete
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
        {}) as Params$Resource$Projects$Locations$Instances$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets details of a single Instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.instances.get({
     *     // Required. Memcached instance resource name in the format: `projects/{project_id\}/locations/{location_id\}/instances/{instance_id\}` where `location_id` refers to a GCP region
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authorizedNetwork": "my_authorizedNetwork",
     *   //   "createTime": "my_createTime",
     *   //   "discoveryEndpoint": "my_discoveryEndpoint",
     *   //   "displayName": "my_displayName",
     *   //   "instanceMessages": [],
     *   //   "labels": {},
     *   //   "memcacheFullVersion": "my_memcacheFullVersion",
     *   //   "memcacheNodes": [],
     *   //   "memcacheVersion": "my_memcacheVersion",
     *   //   "name": "my_name",
     *   //   "nodeConfig": {},
     *   //   "nodeCount": 0,
     *   //   "parameters": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "zones": []
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
      params: Params$Resource$Projects$Locations$Instances$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Instances$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Instance>;
    get(
      params: Params$Resource$Projects$Locations$Instances$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Instance>,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Get,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    get(callback: BodyResponseCallback<Schema$Instance>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Get
        | BodyResponseCallback<Schema$Instance>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Instance>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Instance>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Instance> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
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
        createAPIRequest<Schema$Instance>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Instance>(parameters);
      }
    }

    /**
     * Lists Instances in a given location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.instances.list({
     *     // List filter. For example, exclude all Memcached instances with name as my-instance by specifying `"name != my-instance"`.
     *     filter: 'placeholder-value',
     *     // Sort results. Supported values are "name", "name desc" or "" (unsorted).
     *     orderBy: 'placeholder-value',
     *     // The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the `page_size` value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more instances left to be queried.
     *     pageSize: 'placeholder-value',
     *     // The `next_page_token` value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the instance location using the form: `projects/{project_id\}/locations/{location_id\}` where `location_id` refers to a GCP region
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "instances": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
      params: Params$Resource$Projects$Locations$Instances$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Instances$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListInstancesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Instances$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      callback: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$List,
      callback: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$List
        | BodyResponseCallback<Schema$ListInstancesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListInstancesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListInstancesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListInstancesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instances').replace(
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
        createAPIRequest<Schema$ListInstancesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListInstancesResponse>(parameters);
      }
    }

    /**
     * Updates an existing Instance in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.instances.patch({
     *     // Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id\}/locations/{location_id\}/instances/{instance_id\}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *     // Required. Mask of fields to update. * `displayName`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authorizedNetwork": "my_authorizedNetwork",
     *       //   "createTime": "my_createTime",
     *       //   "discoveryEndpoint": "my_discoveryEndpoint",
     *       //   "displayName": "my_displayName",
     *       //   "instanceMessages": [],
     *       //   "labels": {},
     *       //   "memcacheFullVersion": "my_memcacheFullVersion",
     *       //   "memcacheNodes": [],
     *       //   "memcacheVersion": "my_memcacheVersion",
     *       //   "name": "my_name",
     *       //   "nodeConfig": {},
     *       //   "nodeCount": 0,
     *       //   "parameters": {},
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime",
     *       //   "zones": []
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
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Instances$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Patch
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
        {}) as Params$Resource$Projects$Locations$Instances$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.instances.updateParameters({
     *     // Required. Resource name of the Memcached instance for which the parameters should be updated.
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "parameters": {},
     *       //   "updateMask": "my_updateMask"
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
    updateParameters(
      params: Params$Resource$Projects$Locations$Instances$Updateparameters,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateParameters(
      params?: Params$Resource$Projects$Locations$Instances$Updateparameters,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateParameters(
      params: Params$Resource$Projects$Locations$Instances$Updateparameters,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateParameters(
      params: Params$Resource$Projects$Locations$Instances$Updateparameters,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateParameters(
      params: Params$Resource$Projects$Locations$Instances$Updateparameters,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateParameters(callback: BodyResponseCallback<Schema$Operation>): void;
    updateParameters(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Updateparameters
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
        {}) as Params$Resource$Projects$Locations$Instances$Updateparameters;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Updateparameters;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:updateParameters').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Instances$Applyparameters
    extends StandardParameters {
    /**
     * Required. Resource name of the Memcached instance for which parameter group updates should be applied.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApplyParametersRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Create
    extends StandardParameters {
    /**
     * Required. The logical name of the Memcached instance in the user project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the user project / location. If any of the above are not met, the API raises an invalid argument error.
     */
    instanceId?: string;
    /**
     * Required. The resource name of the instance location using the form: `projects/{project_id\}/locations/{location_id\}` where `location_id` refers to a GCP region
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }
  export interface Params$Resource$Projects$Locations$Instances$Delete
    extends StandardParameters {
    /**
     * Required. Memcached instance resource name in the format: `projects/{project_id\}/locations/{location_id\}/instances/{instance_id\}` where `location_id` refers to a GCP region
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Get
    extends StandardParameters {
    /**
     * Required. Memcached instance resource name in the format: `projects/{project_id\}/locations/{location_id\}/instances/{instance_id\}` where `location_id` refers to a GCP region
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$List
    extends StandardParameters {
    /**
     * List filter. For example, exclude all Memcached instances with name as my-instance by specifying `"name != my-instance"`.
     */
    filter?: string;
    /**
     * Sort results. Supported values are "name", "name desc" or "" (unsorted).
     */
    orderBy?: string;
    /**
     * The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the `page_size` value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more instances left to be queried.
     */
    pageSize?: number;
    /**
     * The `next_page_token` value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the instance location using the form: `projects/{project_id\}/locations/{location_id\}` where `location_id` refers to a GCP region
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Patch
    extends StandardParameters {
    /**
     * Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id\}/locations/{location_id\}/instances/{instance_id\}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.
     */
    name?: string;
    /**
     * Required. Mask of fields to update. * `displayName`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }
  export interface Params$Resource$Projects$Locations$Instances$Updateparameters
    extends StandardParameters {
    /**
     * Required. Resource name of the Memcached instance for which the parameters should be updated.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateParametersRequest;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
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

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/memcache.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const memcache = google.memcache('v1');
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
     *   const res = await memcache.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
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
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://memcache.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
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
}
