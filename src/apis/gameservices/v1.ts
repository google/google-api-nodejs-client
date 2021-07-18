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

export namespace gameservices_v1 {
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
   * Game Services API
   *
   * Deploy and manage infrastructure for global multiplayer gaming experiences.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const gameservices = google.gameservices('v1');
   * ```
   */
  export class Gameservices {
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
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    exemptedMembers?: string[] | null;
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    ignoreChildExemptions?: boolean | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Authorization-related information used by Cloud Audit Logging.
   */
  export interface Schema$AuthorizationLoggingOptions {
    /**
     * The type of the permission that was checked.
     */
    permissionType?: string | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    bindingId?: string | null;
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the members in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Write a Cloud Audit log
   */
  export interface Schema$CloudAuditOptions {
    /**
     * Information used by the Cloud Audit Logging pipeline.
     */
    authorizationLoggingOptions?: Schema$AuthorizationLoggingOptions;
    /**
     * The log_name to populate in the Cloud Audit Record.
     */
    logName?: string | null;
  }
  /**
   * A condition to be met.
   */
  export interface Schema$Condition {
    /**
     * Trusted attributes supplied by the IAM system.
     */
    iam?: string | null;
    /**
     * An operator to apply the subject with.
     */
    op?: string | null;
    /**
     * Trusted attributes discharged by the service.
     */
    svc?: string | null;
    /**
     * Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
     */
    sys?: string | null;
    /**
     * The objects of the condition.
     */
    values?: string[] | null;
  }
  /**
   * Increment a streamz counter with the specified metric and field names. Metric names should start with a '/', generally be lowercase-only, and end in "_count". Field names should not contain an initial slash. The actual exported metric names will have "/iam/policy" prepended. Field names correspond to IAM request parameters and field values are their respective values. Supported field names: - "authority", which is "[token]" if IAMContext.token is present, otherwise the value of IAMContext.authority_selector if present, and otherwise a representation of IAMContext.principal; or - "iam_principal", a representation of IAMContext.principal even if a token or authority selector is present; or - "" (empty string), resulting in a counter with no fields. Examples: counter { metric: "/debug_access_count" field: "iam_principal" \} ==\> increment counter /iam/policy/debug_access_count {iam_principal=[value of IAMContext.principal]\}
   */
  export interface Schema$CounterOptions {
    /**
     * Custom fields.
     */
    customFields?: Schema$CustomField[];
    /**
     * The field value to attribute.
     */
    field?: string | null;
    /**
     * The metric to update.
     */
    metric?: string | null;
  }
  /**
   * Custom fields. These can be used to create a counter with arbitrary field/value pairs. See: go/rpcsp-custom-fields.
   */
  export interface Schema$CustomField {
    /**
     * Name is the field name.
     */
    name?: string | null;
    /**
     * Value is the field value. It is important that in contrast to the CounterOptions.field, the value here is a constant that is not derived from the IAMContext.
     */
    value?: string | null;
  }
  /**
   * Write a Data Access (Gin) log
   */
  export interface Schema$DataAccessOptions {
    logMode?: string | null;
  }
  /**
   * The game server cluster changes made by the game server deployment.
   */
  export interface Schema$DeployedClusterState {
    /**
     * The name of the cluster.
     */
    cluster?: string | null;
    /**
     * The details about the Agones fleets and autoscalers created in the game server cluster.
     */
    fleetDetails?: Schema$DeployedFleetDetails[];
  }
  /**
   * Agones fleet specification and details.
   */
  export interface Schema$DeployedFleet {
    /**
     * The name of the Agones fleet.
     */
    fleet?: string | null;
    /**
     * The fleet spec retrieved from the Agones fleet.
     */
    fleetSpec?: string | null;
    /**
     * The source spec that is used to create the Agones fleet. The GameServerConfig resource may no longer exist in the system.
     */
    specSource?: Schema$SpecSource;
    /**
     * The current status of the Agones fleet. Includes count of game servers in various states.
     */
    status?: Schema$DeployedFleetStatus;
  }
  /**
   * Details about the Agones autoscaler.
   */
  export interface Schema$DeployedFleetAutoscaler {
    /**
     * The name of the Agones autoscaler.
     */
    autoscaler?: string | null;
    /**
     * The autoscaler spec retrieved from Agones.
     */
    fleetAutoscalerSpec?: string | null;
    /**
     * The source spec that is used to create the autoscaler. The GameServerConfig resource may no longer exist in the system.
     */
    specSource?: Schema$SpecSource;
  }
  /**
   * Details of the deployed Agones fleet.
   */
  export interface Schema$DeployedFleetDetails {
    /**
     * Information about the Agones autoscaler for that fleet.
     */
    deployedAutoscaler?: Schema$DeployedFleetAutoscaler;
    /**
     * Information about the Agones fleet.
     */
    deployedFleet?: Schema$DeployedFleet;
  }
  /**
   * DeployedFleetStatus has details about the Agones fleets such as how many are running, how many allocated, and so on.
   */
  export interface Schema$DeployedFleetStatus {
    /**
     * The number of GameServer replicas in the ALLOCATED state in this fleet.
     */
    allocatedReplicas?: string | null;
    /**
     * The number of GameServer replicas in the READY state in this fleet.
     */
    readyReplicas?: string | null;
    /**
     * The total number of current GameServer replicas in this fleet.
     */
    replicas?: string | null;
    /**
     * The number of GameServer replicas in the RESERVED state in this fleet. Reserved instances won't be deleted on scale down, but won't cause an autoscaler to scale up.
     */
    reservedReplicas?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$Expr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * Request message for GameServerDeploymentsService.FetchDeploymentState.
   */
  export interface Schema$FetchDeploymentStateRequest {}
  /**
   * Response message for GameServerDeploymentsService.FetchDeploymentState.
   */
  export interface Schema$FetchDeploymentStateResponse {
    /**
     * The state of the game server deployment in each game server cluster.
     */
    clusterState?: Schema$DeployedClusterState[];
    /**
     * List of locations that could not be reached.
     */
    unavailable?: string[] | null;
  }
  /**
   * Fleet configs for Agones.
   */
  export interface Schema$FleetConfig {
    /**
     * Agones fleet spec. Example spec: `https://agones.dev/site/docs/reference/fleet/`.
     */
    fleetSpec?: string | null;
    /**
     * The name of the FleetConfig.
     */
    name?: string | null;
  }
  /**
   * A game server cluster resource.
   */
  export interface Schema$GameServerCluster {
    /**
     * Output only. The state of the Kubernetes cluster, this will be available if 'view' is set to `FULL` in the relevant List/Get/Preview request.
     */
    clusterState?: Schema$KubernetesClusterState;
    /**
     * The game server cluster connection information. This information is used to manage game server clusters.
     */
    connectionInfo?: Schema$GameServerClusterConnectionInfo;
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * Human readable description of the cluster.
     */
    description?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The labels associated with this game server cluster. Each label is a key-value pair.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The resource name of the game server cluster, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}/gameServerClusters/{cluster\}`. For example, `projects/my-project/locations/{location\}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
     */
    name?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * The game server cluster connection information.
   */
  export interface Schema$GameServerClusterConnectionInfo {
    /**
     * Reference to the GKE cluster where the game servers are installed.
     */
    gkeClusterReference?: Schema$GkeClusterReference;
    /**
     * Namespace designated on the game server cluster where the Agones game server instances will be created. Existence of the namespace will be validated during creation.
     */
    namespace?: string | null;
  }
  /**
   * A game server config resource.
   */
  export interface Schema$GameServerConfig {
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * The description of the game server config.
     */
    description?: string | null;
    /**
     * FleetConfig contains a list of Agones fleet specs. Only one FleetConfig is allowed.
     */
    fleetConfigs?: Schema$FleetConfig[];
    /**
     * The labels associated with this game server config. Each label is a key-value pair.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The resource name of the game server config, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/configs/{config\}`. For example, `projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config`.
     */
    name?: string | null;
    /**
     * The autoscaling settings.
     */
    scalingConfigs?: Schema$ScalingConfig[];
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * A game server config override.
   */
  export interface Schema$GameServerConfigOverride {
    /**
     * The game server config for this override.
     */
    configVersion?: string | null;
    /**
     * Selector for choosing applicable realms.
     */
    realmsSelector?: Schema$RealmSelector;
  }
  /**
   * A game server deployment resource.
   */
  export interface Schema$GameServerDeployment {
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * Human readable description of the game server delpoyment.
     */
    description?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The labels associated with this game server deployment. Each label is a key-value pair.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The resource name of the game server deployment, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}`. For example, `projects/my-project/locations/global/gameServerDeployments/my-deployment`.
     */
    name?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * The game server deployment rollout which represents the desired rollout state.
   */
  export interface Schema$GameServerDeploymentRollout {
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * The default game server config is applied to all realms unless overridden in the rollout. For example, `projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config`.
     */
    defaultGameServerConfig?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Contains the game server config rollout overrides. Overrides are processed in the order they are listed. Once a match is found for a realm, the rest of the list is not processed.
     */
    gameServerConfigOverrides?: Schema$GameServerConfigOverride[];
    /**
     * The resource name of the game server deployment rollout, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/rollout`. For example, `projects/my-project/locations/global/gameServerDeployments/my-deployment/rollout`.
     */
    name?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * A reference to a GKE cluster.
   */
  export interface Schema$GkeClusterReference {
    /**
     * The full or partial name of a GKE cluster, using one of the following forms: * `projects/{project\}/locations/{location\}/clusters/{cluster\}` * `locations/{location\}/clusters/{cluster\}` * `{cluster\}` If project and location are not specified, the project and location of the GameServerCluster resource are used to generate the full name of the GKE cluster.
     */
    cluster?: string | null;
  }
  /**
   * The state of the Kubernetes cluster.
   */
  export interface Schema$KubernetesClusterState {
    /**
     * Output only. The version of Agones currently installed in the registered Kubernetes cluster.
     */
    agonesVersionInstalled?: string | null;
    /**
     * Output only. The version of Agones that is targeted to be installed in the cluster.
     */
    agonesVersionTargeted?: string | null;
    /**
     * Output only. The state for the installed versions of Agones/Kubernetes.
     */
    installationState?: string | null;
    /**
     * Output only. The version of Kubernetes that is currently used in the registered Kubernetes cluster (as detected by the Cloud Game Servers service).
     */
    kubernetesVersionInstalled?: string | null;
    /**
     * Output only. The cloud provider type reported by the first node's providerID in the list of nodes on the Kubernetes endpoint. On Kubernetes platforms that support zero-node clusters (like GKE-on-GCP), the provider type will be empty.
     */
    provider?: string | null;
    /**
     * Output only. The detailed error message for the installed versions of Agones/Kubernetes.
     */
    versionInstalledErrorMessage?: string | null;
  }
  /**
   * The label selector, used to group labels on the resources.
   */
  export interface Schema$LabelSelector {
    /**
     * Resource labels for this selector.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * Response message for GameServerClustersService.ListGameServerClusters.
   */
  export interface Schema$ListGameServerClustersResponse {
    /**
     * The list of game server clusters.
     */
    gameServerClusters?: Schema$GameServerCluster[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for GameServerConfigsService.ListGameServerConfigs.
   */
  export interface Schema$ListGameServerConfigsResponse {
    /**
     * The list of game server configs.
     */
    gameServerConfigs?: Schema$GameServerConfig[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for GameServerDeploymentsService.ListGameServerDeployments.
   */
  export interface Schema$ListGameServerDeploymentsResponse {
    /**
     * The list of game server deployments.
     */
    gameServerDeployments?: Schema$GameServerDeployment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of locations that could not be reached.
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
   * Response message for RealmsService.ListRealms.
   */
  export interface Schema$ListRealmsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The list of realms.
     */
    realms?: Schema$Realm[];
    /**
     * List of locations that could not be reached.
     */
    unreachable?: string[] | null;
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
   * Specifies what kind of log the caller must write
   */
  export interface Schema$LogConfig {
    /**
     * Cloud audit options.
     */
    cloudAudit?: Schema$CloudAuditOptions;
    /**
     * Counter options.
     */
    counter?: Schema$CounterOptions;
    /**
     * Data access options.
     */
    dataAccess?: Schema$DataAccessOptions;
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Operation status for Game Services API operations. Operation status is in the form of key-value pairs where keys are resource IDs and the values show the status of the operation. In case of failures, the value includes an error code and error message.
     */
    operationStatus?: {[key: string]: Schema$OperationStatus} | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. List of Locations that could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  export interface Schema$OperationStatus {
    /**
     * Output only. Whether the operation is done or still in progress.
     */
    done?: boolean | null;
    /**
     * The error code in case of failures.
     */
    errorCode?: string | null;
    /**
     * The human-readable error message.
     */
    errorMessage?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    iamOwned?: boolean | null;
    /**
     * If more than one rule is specified, the rules are applied in the following manner: - All matching LOG rules are always applied. - If any DENY/DENY_WITH_LOG rule matches, permission is denied. Logging will be applied if one or more matching rule requires logging. - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is granted. Logging will be applied if one or more matching rule requires logging. - Otherwise, if no rule applies, permission is denied.
     */
    rules?: Schema$Rule[];
    /**
     * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * Response message for GameServerClustersService.PreviewCreateGameServerCluster.
   */
  export interface Schema$PreviewCreateGameServerClusterResponse {
    /**
     * Output only. The state of the Kubernetes cluster in preview, this will be available if 'view' is set to `FULL` in the relevant List/Get/Preview request.
     */
    clusterState?: Schema$KubernetesClusterState;
    /**
     * The ETag of the game server cluster.
     */
    etag?: string | null;
    /**
     * The target state.
     */
    targetState?: Schema$TargetState;
  }
  /**
   * Response message for GameServerClustersService.PreviewDeleteGameServerCluster.
   */
  export interface Schema$PreviewDeleteGameServerClusterResponse {
    /**
     * The ETag of the game server cluster.
     */
    etag?: string | null;
    /**
     * The target state.
     */
    targetState?: Schema$TargetState;
  }
  /**
   * Response message for PreviewGameServerDeploymentRollout. This has details about the Agones fleet and autoscaler to be actuated.
   */
  export interface Schema$PreviewGameServerDeploymentRolloutResponse {
    /**
     * ETag of the game server deployment.
     */
    etag?: string | null;
    /**
     * The target state.
     */
    targetState?: Schema$TargetState;
    /**
     * Locations that could not be reached on this request.
     */
    unavailable?: string[] | null;
  }
  /**
   * Response message for RealmsService.PreviewRealmUpdate.
   */
  export interface Schema$PreviewRealmUpdateResponse {
    /**
     * ETag of the realm.
     */
    etag?: string | null;
    /**
     * The target state.
     */
    targetState?: Schema$TargetState;
  }
  /**
   * Response message for GameServerClustersService.PreviewUpdateGameServerCluster
   */
  export interface Schema$PreviewUpdateGameServerClusterResponse {
    /**
     * The ETag of the game server cluster.
     */
    etag?: string | null;
    /**
     * The target state.
     */
    targetState?: Schema$TargetState;
  }
  /**
   * A realm resource.
   */
  export interface Schema$Realm {
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * Human readable description of the realm.
     */
    description?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The labels associated with this realm. Each label is a key-value pair.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The resource name of the realm, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}`. For example, `projects/my-project/locations/{location\}/realms/my-realm`.
     */
    name?: string | null;
    /**
     * Required. Time zone where all policies targeting this realm are evaluated. The value of this field must be from the IANA time zone database: https://www.iana.org/time-zones.
     */
    timeZone?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * The realm selector, used to match realm resources.
   */
  export interface Schema$RealmSelector {
    /**
     * List of realms to match.
     */
    realms?: string[] | null;
  }
  /**
   * A rule to be applied in a Policy.
   */
  export interface Schema$Rule {
    /**
     * Required
     */
    action?: string | null;
    /**
     * Additional restrictions that must be met. All conditions must pass for the rule to match.
     */
    conditions?: Schema$Condition[];
    /**
     * Human-readable description of the rule.
     */
    description?: string | null;
    /**
     * If one or more 'in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
     */
    in?: string[] | null;
    /**
     * The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
     */
    logConfig?: Schema$LogConfig[];
    /**
     * If one or more 'not_in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries. The format for in and not_in entries can be found at in the Local IAM documentation (see go/local-iam#features).
     */
    notIn?: string[] | null;
    /**
     * A permission is a string of form '..' (e.g., 'storage.buckets.list'). A value of '*' matches all permissions, and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs.
     */
    permissions?: string[] | null;
  }
  /**
   * Autoscaling config for an Agones fleet.
   */
  export interface Schema$ScalingConfig {
    /**
     * Required. Agones fleet autoscaler spec. Example spec: https://agones.dev/site/docs/reference/fleetautoscaler/
     */
    fleetAutoscalerSpec?: string | null;
    /**
     * Required. The name of the Scaling Config
     */
    name?: string | null;
    /**
     * The schedules to which this Scaling Config applies.
     */
    schedules?: Schema$Schedule[];
    /**
     * Labels used to identify the game server clusters to which this Agones scaling config applies. A game server cluster is subject to this Agones scaling config if its labels match any of the selector entries.
     */
    selectors?: Schema$LabelSelector[];
  }
  /**
   * The schedule of a recurring or one time event. The event's time span is specified by start_time and end_time. If the scheduled event's timespan is larger than the cron_spec + cron_job_duration, the event will be recurring. If only cron_spec + cron_job_duration are specified, the event is effective starting at the local time specified by cron_spec, and is recurring. start_time|-------[cron job]-------[cron job]-------[cron job]---|end_time cron job: cron spec start time + duration
   */
  export interface Schema$Schedule {
    /**
     * The duration for the cron job event. The duration of the event is effective after the cron job's start time.
     */
    cronJobDuration?: string | null;
    /**
     * The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm.
     */
    cronSpec?: string | null;
    /**
     * The end time of the event.
     */
    endTime?: string | null;
    /**
     * The start time of the event.
     */
    startTime?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * Encapsulates Agones fleet spec and Agones autoscaler spec sources.
   */
  export interface Schema$SpecSource {
    /**
     * The game server config resource. Uses the form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment_id\}/configs/{config_id\}`.
     */
    gameServerConfigName?: string | null;
    /**
     * The name of the Agones leet config or Agones scaling config used to derive the Agones fleet or Agones autoscaler spec.
     */
    name?: string | null;
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
   * Details about the Agones resources.
   */
  export interface Schema$TargetDetails {
    /**
     * Agones fleet details for game server clusters and game server deployments.
     */
    fleetDetails?: Schema$TargetFleetDetails[];
    /**
     * The game server cluster name. Uses the form: `projects/{project\}/locations/{location\}/realms/{realm\}/gameServerClusters/{cluster\}`.
     */
    gameServerClusterName?: string | null;
    /**
     * The game server deployment name. Uses the form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment_id\}`.
     */
    gameServerDeploymentName?: string | null;
  }
  /**
   * Target Agones fleet specification.
   */
  export interface Schema$TargetFleet {
    /**
     * The name of the Agones fleet.
     */
    name?: string | null;
    /**
     * Encapsulates the source of the Agones fleet spec. The Agones fleet spec source.
     */
    specSource?: Schema$SpecSource;
  }
  /**
   * Target Agones autoscaler policy reference.
   */
  export interface Schema$TargetFleetAutoscaler {
    /**
     * The name of the Agones autoscaler.
     */
    name?: string | null;
    /**
     * Encapsulates the source of the Agones fleet spec. Details about the Agones autoscaler spec.
     */
    specSource?: Schema$SpecSource;
  }
  /**
   * Details of the target Agones fleet.
   */
  export interface Schema$TargetFleetDetails {
    /**
     * Reference to target Agones fleet autoscaling policy.
     */
    autoscaler?: Schema$TargetFleetAutoscaler;
    /**
     * Reference to target Agones fleet.
     */
    fleet?: Schema$TargetFleet;
  }
  /**
   * Encapsulates the Target state.
   */
  export interface Schema$TargetState {
    /**
     * Details about Agones fleets.
     */
    details?: Schema$TargetDetails[];
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }

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
    gameServerDeployments: Resource$Projects$Locations$Gameserverdeployments;
    operations: Resource$Projects$Locations$Operations;
    realms: Resource$Projects$Locations$Realms;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.gameServerDeployments =
        new Resource$Projects$Locations$Gameserverdeployments(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.realms = new Resource$Projects$Locations$Realms(this.context);
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.get({
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

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.list({
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // If true, the returned list will include locations which are not yet revealed.
     *     includeUnrevealedLocations: 'placeholder-value',
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

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
     * If true, the returned list will include locations which are not yet revealed.
     */
    includeUnrevealedLocations?: boolean;
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

  export class Resource$Projects$Locations$Gameserverdeployments {
    context: APIRequestContext;
    configs: Resource$Projects$Locations$Gameserverdeployments$Configs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.configs =
        new Resource$Projects$Locations$Gameserverdeployments$Configs(
          this.context
        );
    }

    /**
     * Creates a new game server deployment in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.create({
     *       // Required. The ID of the game server delpoyment resource to be created.
     *       deploymentId: 'placeholder-value',
     *       // Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}`.
     *       parent: 'projects/my-project/locations/my-location',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
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
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Create
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
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/gameServerDeployments').replace(
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
     * Deletes a single game server deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.delete({
     *       // Required. The name of the game server delpoyment to delete, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}`.
     *       name: 'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment',
     *     });
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
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Delete
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
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
     * Retrieves information about the current state of the game server deployment. Gathers all the Agones fleets and Agones autoscalers, including fleets running an older version of the game server deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.fetchDeploymentState(
     *       {
     *         // Required. The name of the game server delpoyment, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}`.
     *         name: 'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment',
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
     *   //   "clusterState": [],
     *   //   "unavailable": []
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
    fetchDeploymentState(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchDeploymentState(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchDeploymentStateResponse>;
    fetchDeploymentState(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchDeploymentState(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchDeploymentStateResponse>,
      callback: BodyResponseCallback<Schema$FetchDeploymentStateResponse>
    ): void;
    fetchDeploymentState(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate,
      callback: BodyResponseCallback<Schema$FetchDeploymentStateResponse>
    ): void;
    fetchDeploymentState(
      callback: BodyResponseCallback<Schema$FetchDeploymentStateResponse>
    ): void;
    fetchDeploymentState(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate
        | BodyResponseCallback<Schema$FetchDeploymentStateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchDeploymentStateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchDeploymentStateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchDeploymentStateResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:fetchDeploymentState').replace(
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
        createAPIRequest<Schema$FetchDeploymentStateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchDeploymentStateResponse>(
          parameters
        );
      }
    }

    /**
     * Gets details of a single game server deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.gameServerDeployments.get({
     *     // Required. The name of the game server delpoyment to retrieve, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}`.
     *     name: 'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
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
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GameServerDeployment>;
    get(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GameServerDeployment>,
      callback: BodyResponseCallback<Schema$GameServerDeployment>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Get,
      callback: BodyResponseCallback<Schema$GameServerDeployment>
    ): void;
    get(callback: BodyResponseCallback<Schema$GameServerDeployment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Get
        | BodyResponseCallback<Schema$GameServerDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GameServerDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GameServerDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GameServerDeployment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
        createAPIRequest<Schema$GameServerDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GameServerDeployment>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.getIamPolicy({
     *       // Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "iamOwned": false,
     *   //   "rules": [],
     *   //   "version": 0
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
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Gets details a single game server deployment rollout.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.getRollout({
     *       // Required. The name of the game server delpoyment to retrieve, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/rollout`.
     *       name: 'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "defaultGameServerConfig": "my_defaultGameServerConfig",
     *   //   "etag": "my_etag",
     *   //   "gameServerConfigOverrides": [],
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
    getRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getRollout(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GameServerDeploymentRollout>;
    getRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GameServerDeploymentRollout>,
      callback: BodyResponseCallback<Schema$GameServerDeploymentRollout>
    ): void;
    getRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout,
      callback: BodyResponseCallback<Schema$GameServerDeploymentRollout>
    ): void;
    getRollout(
      callback: BodyResponseCallback<Schema$GameServerDeploymentRollout>
    ): void;
    getRollout(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout
        | BodyResponseCallback<Schema$GameServerDeploymentRollout>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GameServerDeploymentRollout>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GameServerDeploymentRollout>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GameServerDeploymentRollout>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/rollout').replace(
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
        createAPIRequest<Schema$GameServerDeploymentRollout>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GameServerDeploymentRollout>(parameters);
      }
    }

    /**
     * Lists game server deployments in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.gameServerDeployments.list({
     *     // Optional. The filter to apply to list results.
     *     filter: 'placeholder-value',
     *     // Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of items to return. If unspecified, the server will pick an appropriate default. The server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerDeployments left to be queried.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gameServerDeployments": [],
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
      params: Params$Resource$Projects$Locations$Gameserverdeployments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGameServerDeploymentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>,
      callback: BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$List,
      callback: BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$List
        | BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGameServerDeploymentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/gameServerDeployments').replace(
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
        createAPIRequest<Schema$ListGameServerDeploymentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGameServerDeploymentsResponse>(
          parameters
        );
      }
    }

    /**
     * Patches a game server deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.gameServerDeployments.patch(
     *     {
     *       // The resource name of the game server deployment, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}`. For example, `projects/my-project/locations/global/gameServerDeployments/my-deployment`.
     *       name: 'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment',
     *       // Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     }
     *   );
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
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Patch
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
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
     * Previews the game server deployment rollout. This API does not mutate the rollout resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.previewRollout({
     *       // The resource name of the game server deployment rollout, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/rollout`. For example, `projects/my-project/locations/global/gameServerDeployments/my-deployment/rollout`.
     *       name: 'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment',
     *       // Optional. The target timestamp to compute the preview. Defaults to the immediately after the proposed rollout completes.
     *       previewTime: 'placeholder-value',
     *       // Optional. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "defaultGameServerConfig": "my_defaultGameServerConfig",
     *         //   "etag": "my_etag",
     *         //   "gameServerConfigOverrides": [],
     *         //   "name": "my_name",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "targetState": {},
     *   //   "unavailable": []
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
    previewRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    previewRollout(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PreviewGameServerDeploymentRolloutResponse>;
    previewRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    previewRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewGameServerDeploymentRolloutResponse>,
      callback: BodyResponseCallback<Schema$PreviewGameServerDeploymentRolloutResponse>
    ): void;
    previewRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout,
      callback: BodyResponseCallback<Schema$PreviewGameServerDeploymentRolloutResponse>
    ): void;
    previewRollout(
      callback: BodyResponseCallback<Schema$PreviewGameServerDeploymentRolloutResponse>
    ): void;
    previewRollout(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout
        | BodyResponseCallback<Schema$PreviewGameServerDeploymentRolloutResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PreviewGameServerDeploymentRolloutResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PreviewGameServerDeploymentRolloutResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PreviewGameServerDeploymentRolloutResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/rollout:preview').replace(
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
        createAPIRequest<Schema$PreviewGameServerDeploymentRolloutResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PreviewGameServerDeploymentRolloutResponse>(
          parameters
        );
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.setIamPolicy({
     *       // REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "iamOwned": false,
     *   //   "rules": [],
     *   //   "version": 0
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
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.testIamPermissions(
     *       {
     *         // REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "permissions": []
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
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
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }

    /**
     * Patches a single game server deployment rollout. The method will not return an error if the update does not affect any existing realms. For example - if the default_game_server_config is changed but all existing realms use the override, that is valid. Similarly, if a non existing realm is explicitly called out in game_server_config_overrides field, that will also not result in an error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.updateRollout({
     *       // The resource name of the game server deployment rollout, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/rollout`. For example, `projects/my-project/locations/global/gameServerDeployments/my-deployment/rollout`.
     *       name: 'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment',
     *       // Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "defaultGameServerConfig": "my_defaultGameServerConfig",
     *         //   "etag": "my_etag",
     *         //   "gameServerConfigOverrides": [],
     *         //   "name": "my_name",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
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
    updateRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateRollout(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateRollout(callback: BodyResponseCallback<Schema$Operation>): void;
    updateRollout(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout
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
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/rollout').replace(
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

  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Create
    extends StandardParameters {
    /**
     * Required. The ID of the game server delpoyment resource to be created.
     */
    deploymentId?: string;
    /**
     * Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerDeployment;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Delete
    extends StandardParameters {
    /**
     * Required. The name of the game server delpoyment to delete, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate
    extends StandardParameters {
    /**
     * Required. The name of the game server delpoyment, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FetchDeploymentStateRequest;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Get
    extends StandardParameters {
    /**
     * Required. The name of the game server delpoyment to retrieve, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout
    extends StandardParameters {
    /**
     * Required. The name of the game server delpoyment to retrieve, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/rollout`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$List
    extends StandardParameters {
    /**
     * Optional. The filter to apply to list results.
     */
    filter?: string;
    /**
     * Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, the server will pick an appropriate default. The server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerDeployments left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Patch
    extends StandardParameters {
    /**
     * The resource name of the game server deployment, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}`. For example, `projects/my-project/locations/global/gameServerDeployments/my-deployment`.
     */
    name?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerDeployment;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout
    extends StandardParameters {
    /**
     * The resource name of the game server deployment rollout, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/rollout`. For example, `projects/my-project/locations/global/gameServerDeployments/my-deployment/rollout`.
     */
    name?: string;
    /**
     * Optional. The target timestamp to compute the preview. Defaults to the immediately after the proposed rollout completes.
     */
    previewTime?: string;
    /**
     * Optional. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerDeploymentRollout;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout
    extends StandardParameters {
    /**
     * The resource name of the game server deployment rollout, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/rollout`. For example, `projects/my-project/locations/global/gameServerDeployments/my-deployment/rollout`.
     */
    name?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerDeploymentRollout;
  }

  export class Resource$Projects$Locations$Gameserverdeployments$Configs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new game server config in a given project, location, and game server deployment. Game server configs are immutable, and are not applied until referenced in the game server deployment rollout resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.configs.create({
     *       // Required. The ID of the game server config resource to be created.
     *       configId: 'placeholder-value',
     *       // Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/`.
     *       parent:
     *         'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "fleetConfigs": [],
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "scalingConfigs": [],
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
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
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create
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
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/configs').replace(
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
     * Deletes a single game server config. The deletion will fail if the game server config is referenced in a game server deployment rollout.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.configs.delete({
     *       // Required. The name of the game server config to delete, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/configs/{config\}`.
     *       name: 'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment/configs/my-config',
     *     });
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
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete
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
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
     * Gets details of a single game server config.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.configs.get({
     *       // Required. The name of the game server config to retrieve, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/configs/{config\}`.
     *       name: 'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment/configs/my-config',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "fleetConfigs": [],
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "scalingConfigs": [],
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
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GameServerConfig>;
    get(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GameServerConfig>,
      callback: BodyResponseCallback<Schema$GameServerConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get,
      callback: BodyResponseCallback<Schema$GameServerConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$GameServerConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get
        | BodyResponseCallback<Schema$GameServerConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GameServerConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GameServerConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GameServerConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
        createAPIRequest<Schema$GameServerConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GameServerConfig>(parameters);
      }
    }

    /**
     * Lists game server configs in a given project, location, and game server deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.gameServerDeployments.configs.list({
     *       // Optional. The filter to apply to list results.
     *       filter: 'placeholder-value',
     *       // Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of items to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerConfigs left to be queried.
     *       pageSize: 'placeholder-value',
     *       // Optional. The next_page_token value returned from a previous list request, if any.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/configs/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/gameServerDeployments/my-gameServerDeployment',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gameServerConfigs": [],
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
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGameServerConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGameServerConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListGameServerConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List,
      callback: BodyResponseCallback<Schema$ListGameServerConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGameServerConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List
        | BodyResponseCallback<Schema$ListGameServerConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGameServerConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGameServerConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGameServerConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/configs').replace(
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
        createAPIRequest<Schema$ListGameServerConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGameServerConfigsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create
    extends StandardParameters {
    /**
     * Required. The ID of the game server config resource to be created.
     */
    configId?: string;
    /**
     * Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerConfig;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete
    extends StandardParameters {
    /**
     * Required. The name of the game server config to delete, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/configs/{config\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get
    extends StandardParameters {
    /**
     * Required. The name of the game server config to retrieve, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/configs/{config\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List
    extends StandardParameters {
    /**
     * Optional. The filter to apply to list results.
     */
    filter?: string;
    /**
     * Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerConfigs left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}/gameServerDeployments/{deployment\}/configs/x`.
     */
    parent?: string;
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
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.operations.cancel({
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

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.operations.delete({
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

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.operations.get({
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

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.operations.list({
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

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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

  export class Resource$Projects$Locations$Realms {
    context: APIRequestContext;
    gameServerClusters: Resource$Projects$Locations$Realms$Gameserverclusters;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.gameServerClusters =
        new Resource$Projects$Locations$Realms$Gameserverclusters(this.context);
    }

    /**
     * Creates a new realm in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.realms.create({
     *     // Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. The ID of the realm resource to be created.
     *     realmId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "timeZone": "my_timeZone",
     *       //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Realms$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Realms$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Realms$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Realms$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Realms$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Create
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
        {}) as Params$Resource$Projects$Locations$Realms$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/realms').replace(
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
     * Deletes a single realm.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.realms.delete({
     *     // Required. The name of the realm to delete, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}`.
     *     name: 'projects/my-project/locations/my-location/realms/my-realm',
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
      params: Params$Resource$Projects$Locations$Realms$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Realms$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Realms$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Realms$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Realms$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Delete
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
        {}) as Params$Resource$Projects$Locations$Realms$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
     * Gets details of a single realm.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.realms.get({
     *     // Required. The name of the realm to retrieve, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}`.
     *     name: 'projects/my-project/locations/my-location/realms/my-realm',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
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
      params: Params$Resource$Projects$Locations$Realms$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Realms$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Realm>;
    get(
      params: Params$Resource$Projects$Locations$Realms$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Realms$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Realm>,
      callback: BodyResponseCallback<Schema$Realm>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Realms$Get,
      callback: BodyResponseCallback<Schema$Realm>
    ): void;
    get(callback: BodyResponseCallback<Schema$Realm>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Get
        | BodyResponseCallback<Schema$Realm>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Realm>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Realm>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Realm> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
        createAPIRequest<Schema$Realm>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Realm>(parameters);
      }
    }

    /**
     * Lists realms in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.realms.list({
     *     // Optional. The filter to apply to list results.
     *     filter: 'placeholder-value',
     *     // Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of items to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more realms left to be queried.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "realms": [],
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
      params: Params$Resource$Projects$Locations$Realms$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Realms$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRealmsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Realms$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Realms$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRealmsResponse>,
      callback: BodyResponseCallback<Schema$ListRealmsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Realms$List,
      callback: BodyResponseCallback<Schema$ListRealmsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRealmsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$List
        | BodyResponseCallback<Schema$ListRealmsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRealmsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRealmsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRealmsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/realms').replace(
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
        createAPIRequest<Schema$ListRealmsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRealmsResponse>(parameters);
      }
    }

    /**
     * Patches a single realm.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.realms.patch({
     *     // The resource name of the realm, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}`. For example, `projects/my-project/locations/{location\}/realms/my-realm`.
     *     name: 'projects/my-project/locations/my-location/realms/my-realm',
     *     // Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "timeZone": "my_timeZone",
     *       //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Realms$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Realms$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Realms$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Realms$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Realms$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Patch
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
        {}) as Params$Resource$Projects$Locations$Realms$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
     * Previews patches to a single realm.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res = await gameservices.projects.locations.realms.previewUpdate({
     *     // The resource name of the realm, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}`. For example, `projects/my-project/locations/{location\}/realms/my-realm`.
     *     name: 'projects/my-project/locations/my-location/realms/my-realm',
     *     // Optional. The target timestamp to compute the preview.
     *     previewTime: 'placeholder-value',
     *     // Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "timeZone": "my_timeZone",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "targetState": {}
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
    previewUpdate(
      params: Params$Resource$Projects$Locations$Realms$Previewupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    previewUpdate(
      params?: Params$Resource$Projects$Locations$Realms$Previewupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PreviewRealmUpdateResponse>;
    previewUpdate(
      params: Params$Resource$Projects$Locations$Realms$Previewupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    previewUpdate(
      params: Params$Resource$Projects$Locations$Realms$Previewupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewRealmUpdateResponse>,
      callback: BodyResponseCallback<Schema$PreviewRealmUpdateResponse>
    ): void;
    previewUpdate(
      params: Params$Resource$Projects$Locations$Realms$Previewupdate,
      callback: BodyResponseCallback<Schema$PreviewRealmUpdateResponse>
    ): void;
    previewUpdate(
      callback: BodyResponseCallback<Schema$PreviewRealmUpdateResponse>
    ): void;
    previewUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Previewupdate
        | BodyResponseCallback<Schema$PreviewRealmUpdateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PreviewRealmUpdateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PreviewRealmUpdateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PreviewRealmUpdateResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Previewupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Previewupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:previewUpdate').replace(
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
        createAPIRequest<Schema$PreviewRealmUpdateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PreviewRealmUpdateResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Realms$Create
    extends StandardParameters {
    /**
     * Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * Required. The ID of the realm resource to be created.
     */
    realmId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Realm;
  }
  export interface Params$Resource$Projects$Locations$Realms$Delete
    extends StandardParameters {
    /**
     * Required. The name of the realm to delete, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$Get
    extends StandardParameters {
    /**
     * Required. The name of the realm to retrieve, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$List
    extends StandardParameters {
    /**
     * Optional. The filter to apply to list results.
     */
    filter?: string;
    /**
     * Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more realms left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$Patch
    extends StandardParameters {
    /**
     * The resource name of the realm, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}`. For example, `projects/my-project/locations/{location\}/realms/my-realm`.
     */
    name?: string;
    /**
     * Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Realm;
  }
  export interface Params$Resource$Projects$Locations$Realms$Previewupdate
    extends StandardParameters {
    /**
     * The resource name of the realm, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}`. For example, `projects/my-project/locations/{location\}/realms/my-realm`.
     */
    name?: string;
    /**
     * Optional. The target timestamp to compute the preview.
     */
    previewTime?: string;
    /**
     * Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Realm;
  }

  export class Resource$Projects$Locations$Realms$Gameserverclusters {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new game server cluster in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.realms.gameServerClusters.create({
     *       // Required. The ID of the game server cluster resource to be created.
     *       gameServerClusterId: 'placeholder-value',
     *       // Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}/realms/{realm-id\}`.
     *       parent: 'projects/my-project/locations/my-location/realms/my-realm',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "clusterState": {},
     *         //   "connectionInfo": {},
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
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
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create
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
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/gameServerClusters').replace(
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
     * Deletes a single game server cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.realms.gameServerClusters.delete({
     *       // Required. The name of the game server cluster to delete, in the following form: `projects/{project\}/locations/{location\}/gameServerClusters/{cluster\}`.
     *       name: 'projects/my-project/locations/my-location/realms/my-realm/gameServerClusters/my-gameServerCluster',
     *     });
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
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete
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
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
     * Gets details of a single game server cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.realms.gameServerClusters.get({
     *       // Required. The name of the game server cluster to retrieve, in the following form: `projects/{project\}/locations/{location\}/realms/{realm-id\}/gameServerClusters/{cluster\}`.
     *       name: 'projects/my-project/locations/my-location/realms/my-realm/gameServerClusters/my-gameServerCluster',
     *       // Optional. View for the returned GameServerCluster objects. When `FULL` is specified, the `cluster_state` field is also returned in the GameServerCluster object, which includes the state of the referenced Kubernetes cluster such as versions and provider info. The default/unset value is GAME_SERVER_CLUSTER_VIEW_UNSPECIFIED, same as BASIC, which does not return the `cluster_state` field.
     *       view: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterState": {},
     *   //   "connectionInfo": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
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
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GameServerCluster>;
    get(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GameServerCluster>,
      callback: BodyResponseCallback<Schema$GameServerCluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get,
      callback: BodyResponseCallback<Schema$GameServerCluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$GameServerCluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get
        | BodyResponseCallback<Schema$GameServerCluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GameServerCluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GameServerCluster>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GameServerCluster>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
        createAPIRequest<Schema$GameServerCluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GameServerCluster>(parameters);
      }
    }

    /**
     * Lists game server clusters in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.realms.gameServerClusters.list({
     *       // Optional. The filter to apply to list results.
     *       filter: 'placeholder-value',
     *       // Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of items to return. If unspecified, the server will pick an appropriate default. The server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerClusters left to be queried.
     *       pageSize: 'placeholder-value',
     *       // Optional. The next_page_token value returned from a previous List request, if any.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent resource name, in the following form: "projects/{project\}/locations/{location\}/realms/{realm\}".
     *       parent: 'projects/my-project/locations/my-location/realms/my-realm',
     *       // Optional. View for the returned GameServerCluster objects. When `FULL` is specified, the `cluster_state` field is also returned in the GameServerCluster object, which includes the state of the referenced Kubernetes cluster such as versions and provider info. The default/unset value is GAME_SERVER_CLUSTER_VIEW_UNSPECIFIED, same as BASIC, which does not return the `cluster_state` field.
     *       view: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gameServerClusters": [],
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
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGameServerClustersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGameServerClustersResponse>,
      callback: BodyResponseCallback<Schema$ListGameServerClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$List,
      callback: BodyResponseCallback<Schema$ListGameServerClustersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGameServerClustersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$List
        | BodyResponseCallback<Schema$ListGameServerClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGameServerClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGameServerClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGameServerClustersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/gameServerClusters').replace(
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
        createAPIRequest<Schema$ListGameServerClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGameServerClustersResponse>(
          parameters
        );
      }
    }

    /**
     * Patches a single game server cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.realms.gameServerClusters.patch({
     *       // Required. The resource name of the game server cluster, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}/gameServerClusters/{cluster\}`. For example, `projects/my-project/locations/{location\}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
     *       name: 'projects/my-project/locations/my-location/realms/my-realm/gameServerClusters/my-gameServerCluster',
     *       // Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "clusterState": {},
     *         //   "connectionInfo": {},
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
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
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch
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
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
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
     * Previews creation of a new game server cluster in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.realms.gameServerClusters.previewCreate(
     *       {
     *         // Required. The ID of the game server cluster resource to be created.
     *         gameServerClusterId: 'placeholder-value',
     *         // Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}`.
     *         parent: 'projects/my-project/locations/my-location/realms/my-realm',
     *         // Optional. The target timestamp to compute the preview.
     *         previewTime: 'placeholder-value',
     *         // Optional. This field is deprecated, preview will always return KubernetesClusterState.
     *         view: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "clusterState": {},
     *           //   "connectionInfo": {},
     *           //   "createTime": "my_createTime",
     *           //   "description": "my_description",
     *           //   "etag": "my_etag",
     *           //   "labels": {},
     *           //   "name": "my_name",
     *           //   "updateTime": "my_updateTime"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterState": {},
     *   //   "etag": "my_etag",
     *   //   "targetState": {}
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
    previewCreate(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    previewCreate(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PreviewCreateGameServerClusterResponse>;
    previewCreate(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    previewCreate(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewCreateGameServerClusterResponse>,
      callback: BodyResponseCallback<Schema$PreviewCreateGameServerClusterResponse>
    ): void;
    previewCreate(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate,
      callback: BodyResponseCallback<Schema$PreviewCreateGameServerClusterResponse>
    ): void;
    previewCreate(
      callback: BodyResponseCallback<Schema$PreviewCreateGameServerClusterResponse>
    ): void;
    previewCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate
        | BodyResponseCallback<Schema$PreviewCreateGameServerClusterResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PreviewCreateGameServerClusterResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PreviewCreateGameServerClusterResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PreviewCreateGameServerClusterResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/gameServerClusters:previewCreate'
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
        createAPIRequest<Schema$PreviewCreateGameServerClusterResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PreviewCreateGameServerClusterResponse>(
          parameters
        );
      }
    }

    /**
     * Previews deletion of a single game server cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.realms.gameServerClusters.previewDelete(
     *       {
     *         // Required. The name of the game server cluster to delete, in the following form: `projects/{project\}/locations/{location\}/gameServerClusters/{cluster\}`.
     *         name: 'projects/my-project/locations/my-location/realms/my-realm/gameServerClusters/my-gameServerCluster',
     *         // Optional. The target timestamp to compute the preview.
     *         previewTime: 'placeholder-value',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "targetState": {}
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
    previewDelete(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    previewDelete(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PreviewDeleteGameServerClusterResponse>;
    previewDelete(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    previewDelete(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewDeleteGameServerClusterResponse>,
      callback: BodyResponseCallback<Schema$PreviewDeleteGameServerClusterResponse>
    ): void;
    previewDelete(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete,
      callback: BodyResponseCallback<Schema$PreviewDeleteGameServerClusterResponse>
    ): void;
    previewDelete(
      callback: BodyResponseCallback<Schema$PreviewDeleteGameServerClusterResponse>
    ): void;
    previewDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete
        | BodyResponseCallback<Schema$PreviewDeleteGameServerClusterResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PreviewDeleteGameServerClusterResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PreviewDeleteGameServerClusterResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PreviewDeleteGameServerClusterResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:previewDelete').replace(
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
        createAPIRequest<Schema$PreviewDeleteGameServerClusterResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PreviewDeleteGameServerClusterResponse>(
          parameters
        );
      }
    }

    /**
     * Previews updating a GameServerCluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gameservices.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
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
     *   const res =
     *     await gameservices.projects.locations.realms.gameServerClusters.previewUpdate(
     *       {
     *         // Required. The resource name of the game server cluster, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}/gameServerClusters/{cluster\}`. For example, `projects/my-project/locations/{location\}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
     *         name: 'projects/my-project/locations/my-location/realms/my-realm/gameServerClusters/my-gameServerCluster',
     *         // Optional. The target timestamp to compute the preview.
     *         previewTime: 'placeholder-value',
     *         // Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "clusterState": {},
     *           //   "connectionInfo": {},
     *           //   "createTime": "my_createTime",
     *           //   "description": "my_description",
     *           //   "etag": "my_etag",
     *           //   "labels": {},
     *           //   "name": "my_name",
     *           //   "updateTime": "my_updateTime"
     *           // }
     *         },
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "targetState": {}
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
    previewUpdate(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    previewUpdate(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PreviewUpdateGameServerClusterResponse>;
    previewUpdate(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    previewUpdate(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewUpdateGameServerClusterResponse>,
      callback: BodyResponseCallback<Schema$PreviewUpdateGameServerClusterResponse>
    ): void;
    previewUpdate(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate,
      callback: BodyResponseCallback<Schema$PreviewUpdateGameServerClusterResponse>
    ): void;
    previewUpdate(
      callback: BodyResponseCallback<Schema$PreviewUpdateGameServerClusterResponse>
    ): void;
    previewUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate
        | BodyResponseCallback<Schema$PreviewUpdateGameServerClusterResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PreviewUpdateGameServerClusterResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PreviewUpdateGameServerClusterResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PreviewUpdateGameServerClusterResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:previewUpdate').replace(
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
        createAPIRequest<Schema$PreviewUpdateGameServerClusterResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PreviewUpdateGameServerClusterResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create
    extends StandardParameters {
    /**
     * Required. The ID of the game server cluster resource to be created.
     */
    gameServerClusterId?: string;
    /**
     * Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}/realms/{realm-id\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerCluster;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete
    extends StandardParameters {
    /**
     * Required. The name of the game server cluster to delete, in the following form: `projects/{project\}/locations/{location\}/gameServerClusters/{cluster\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get
    extends StandardParameters {
    /**
     * Required. The name of the game server cluster to retrieve, in the following form: `projects/{project\}/locations/{location\}/realms/{realm-id\}/gameServerClusters/{cluster\}`.
     */
    name?: string;
    /**
     * Optional. View for the returned GameServerCluster objects. When `FULL` is specified, the `cluster_state` field is also returned in the GameServerCluster object, which includes the state of the referenced Kubernetes cluster such as versions and provider info. The default/unset value is GAME_SERVER_CLUSTER_VIEW_UNSPECIFIED, same as BASIC, which does not return the `cluster_state` field.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$List
    extends StandardParameters {
    /**
     * Optional. The filter to apply to list results.
     */
    filter?: string;
    /**
     * Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, the server will pick an appropriate default. The server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerClusters left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, in the following form: "projects/{project\}/locations/{location\}/realms/{realm\}".
     */
    parent?: string;
    /**
     * Optional. View for the returned GameServerCluster objects. When `FULL` is specified, the `cluster_state` field is also returned in the GameServerCluster object, which includes the state of the referenced Kubernetes cluster such as versions and provider info. The default/unset value is GAME_SERVER_CLUSTER_VIEW_UNSPECIFIED, same as BASIC, which does not return the `cluster_state` field.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch
    extends StandardParameters {
    /**
     * Required. The resource name of the game server cluster, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}/gameServerClusters/{cluster\}`. For example, `projects/my-project/locations/{location\}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
     */
    name?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerCluster;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate
    extends StandardParameters {
    /**
     * Required. The ID of the game server cluster resource to be created.
     */
    gameServerClusterId?: string;
    /**
     * Required. The parent resource name, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}`.
     */
    parent?: string;
    /**
     * Optional. The target timestamp to compute the preview.
     */
    previewTime?: string;
    /**
     * Optional. This field is deprecated, preview will always return KubernetesClusterState.
     */
    view?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerCluster;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete
    extends StandardParameters {
    /**
     * Required. The name of the game server cluster to delete, in the following form: `projects/{project\}/locations/{location\}/gameServerClusters/{cluster\}`.
     */
    name?: string;
    /**
     * Optional. The target timestamp to compute the preview.
     */
    previewTime?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate
    extends StandardParameters {
    /**
     * Required. The resource name of the game server cluster, in the following form: `projects/{project\}/locations/{location\}/realms/{realm\}/gameServerClusters/{cluster\}`. For example, `projects/my-project/locations/{location\}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
     */
    name?: string;
    /**
     * Optional. The target timestamp to compute the preview.
     */
    previewTime?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerCluster;
  }
}
