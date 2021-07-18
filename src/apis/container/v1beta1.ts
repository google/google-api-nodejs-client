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

export namespace container_v1beta1 {
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
   * Kubernetes Engine API
   *
   * Builds and manages container-based applications, powered by the open source Kubernetes technology.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const container = google.container('v1beta1');
   * ```
   */
  export class Container {
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
   * AcceleratorConfig represents a Hardware Accelerator request.
   */
  export interface Schema$AcceleratorConfig {
    /**
     * The number of the accelerator cards exposed to an instance.
     */
    acceleratorCount?: string | null;
    /**
     * The accelerator type resource name. List of supported accelerators [here](https://cloud.google.com/compute/docs/gpus)
     */
    acceleratorType?: string | null;
    /**
     * Size of partitions to create on the GPU. Valid values are described in the NVIDIA [mig user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
     */
    gpuPartitionSize?: string | null;
  }
  /**
   * Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
   */
  export interface Schema$AddonsConfig {
    /**
     * Configuration for the Cloud Run addon. The `IstioConfig` addon must be enabled in order to enable Cloud Run addon. This option can only be enabled at cluster creation time.
     */
    cloudRunConfig?: Schema$CloudRunConfig;
    /**
     * Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted GCP services through the Kubernetes API
     */
    configConnectorConfig?: Schema$ConfigConnectorConfig;
    /**
     * Configuration for NodeLocalDNS, a dns cache running on cluster nodes
     */
    dnsCacheConfig?: Schema$DnsCacheConfig;
    /**
     * Configuration for the Compute Engine Persistent Disk CSI driver.
     */
    gcePersistentDiskCsiDriverConfig?: Schema$GcePersistentDiskCsiDriverConfig;
    /**
     * Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.
     */
    horizontalPodAutoscaling?: Schema$HorizontalPodAutoscaling;
    /**
     * Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.
     */
    httpLoadBalancing?: Schema$HttpLoadBalancing;
    /**
     * Configuration for Istio, an open platform to connect, manage, and secure microservices.
     */
    istioConfig?: Schema$IstioConfig;
    /**
     * Configuration for the KALM addon, which manages the lifecycle of k8s applications.
     */
    kalmConfig?: Schema$KalmConfig;
    /**
     * Configuration for the Kubernetes Dashboard. This addon is deprecated, and will be disabled in 1.15. It is recommended to use the Cloud Console to manage and monitor your Kubernetes clusters, workloads and applications. For more information, see: https://cloud.google.com/kubernetes-engine/docs/concepts/dashboards
     */
    kubernetesDashboard?: Schema$KubernetesDashboard;
    /**
     * Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.
     */
    networkPolicyConfig?: Schema$NetworkPolicyConfig;
  }
  /**
   * Configuration for returning group information from authenticators.
   */
  export interface Schema$AuthenticatorGroupsConfig {
    /**
     * Whether this cluster should return group membership lookups during authentication using a group of security groups.
     */
    enabled?: boolean | null;
    /**
     * The name of the security group-of-groups to be used. Only relevant if enabled = true.
     */
    securityGroup?: string | null;
  }
  /**
   * Autopilot is the configuration for Autopilot settings on the cluster.
   */
  export interface Schema$Autopilot {
    /**
     * Enable Autopilot
     */
    enabled?: boolean | null;
  }
  /**
   * AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.
   */
  export interface Schema$AutoprovisioningNodePoolDefaults {
    /**
     *  The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption
     */
    bootDiskKmsKey?: string | null;
    /**
     * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB.
     */
    diskSizeGb?: number | null;
    /**
     * Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard'
     */
    diskType?: string | null;
    /**
     * The image type to use for NAP created node.
     */
    imageType?: string | null;
    /**
     * NodeManagement configuration for this NodePool.
     */
    management?: Schema$NodeManagement;
    /**
     * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: "Intel Haswell"` or `minCpuPlatform: "Intel Sandy Bridge"`. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) To unset the min cpu platform field pass "automatic" as field value.
     */
    minCpuPlatform?: string | null;
    /**
     * The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.
     */
    oauthScopes?: string[] | null;
    /**
     * The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used.
     */
    serviceAccount?: string | null;
    /**
     * Shielded Instance options.
     */
    shieldedInstanceConfig?: Schema$ShieldedInstanceConfig;
    /**
     * Upgrade settings control disruption and speed of the upgrade.
     */
    upgradeSettings?: Schema$UpgradeSettings;
  }
  /**
   * AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed.
   */
  export interface Schema$AutoUpgradeOptions {
    /**
     * [Output only] This field is set when upgrades are about to commence with the approximate start time for the upgrades, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    autoUpgradeStartTime?: string | null;
    /**
     * [Output only] This field is set when upgrades are about to commence with the description of the upgrade.
     */
    description?: string | null;
  }
  /**
   * Deprecated.
   */
  export interface Schema$AvailableVersion {
    /**
     * Reason for availability.
     */
    reason?: string | null;
    /**
     * Kubernetes version.
     */
    version?: string | null;
  }
  /**
   * Parameters for using BigQuery as the destination of resource usage export.
   */
  export interface Schema$BigQueryDestination {
    /**
     * The ID of a BigQuery Dataset.
     */
    datasetId?: string | null;
  }
  /**
   * Configuration for Binary Authorization.
   */
  export interface Schema$BinaryAuthorization {
    /**
     * Enable Binary Authorization for this cluster. If enabled, all container images will be validated by Google Binauthz.
     */
    enabled?: boolean | null;
  }
  /**
   * CancelOperationRequest cancels a single operation.
   */
  export interface Schema$CancelOperationRequest {
    /**
     * The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/x/locations/x/operations/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     */
    operationId?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * CidrBlock contains an optional name and one CIDR block.
   */
  export interface Schema$CidrBlock {
    /**
     * cidr_block must be specified in CIDR notation.
     */
    cidrBlock?: string | null;
    /**
     * display_name is an optional field for users to identify CIDR blocks.
     */
    displayName?: string | null;
  }
  /**
   * Configuration for client certificates on the cluster.
   */
  export interface Schema$ClientCertificateConfig {
    /**
     * Issue a client certificate.
     */
    issueClientCertificate?: boolean | null;
  }
  /**
   * Configuration options for the Cloud Run feature.
   */
  export interface Schema$CloudRunConfig {
    /**
     * Whether Cloud Run addon is enabled for this cluster.
     */
    disabled?: boolean | null;
    /**
     * Which load balancer type is installed for Cloud Run.
     */
    loadBalancerType?: string | null;
  }
  /**
   * A Google Kubernetes Engine cluster.
   */
  export interface Schema$Cluster {
    /**
     * Configurations for the various addons available to run in the cluster.
     */
    addonsConfig?: Schema$AddonsConfig;
    /**
     * Configuration controlling RBAC group membership information.
     */
    authenticatorGroupsConfig?: Schema$AuthenticatorGroupsConfig;
    /**
     * Autopilot configuration for the cluster.
     */
    autopilot?: Schema$Autopilot;
    /**
     * Cluster-level autoscaling configuration.
     */
    autoscaling?: Schema$ClusterAutoscaling;
    /**
     * Configuration for Binary Authorization.
     */
    binaryAuthorization?: Schema$BinaryAuthorization;
    /**
     * The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
     */
    clusterIpv4Cidr?: string | null;
    /**
     * Telemetry integration for the cluster.
     */
    clusterTelemetry?: Schema$ClusterTelemetry;
    /**
     * Which conditions caused the current cluster state.
     */
    conditions?: Schema$StatusCondition[];
    /**
     * Configuration of Confidential Nodes
     */
    confidentialNodes?: Schema$ConfidentialNodes;
    /**
     * [Output only] The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createTime?: string | null;
    /**
     * [Output only] The current software version of the master endpoint.
     */
    currentMasterVersion?: string | null;
    /**
     * [Output only] The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.
     */
    currentNodeCount?: number | null;
    /**
     * [Output only] Deprecated, use [NodePool.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.
     */
    currentNodeVersion?: string | null;
    /**
     * Configuration of etcd encryption.
     */
    databaseEncryption?: Schema$DatabaseEncryption;
    /**
     * The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support.
     */
    defaultMaxPodsConstraint?: Schema$MaxPodsConstraint;
    /**
     * An optional description of this cluster.
     */
    description?: string | null;
    /**
     * Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1beta1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.
     */
    enableKubernetesAlpha?: boolean | null;
    /**
     * Enable the ability to use Cloud TPUs in this cluster. This field is deprecated, use tpu_config.enabled instead.
     */
    enableTpu?: boolean | null;
    /**
     * [Output only] The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.
     */
    endpoint?: string | null;
    /**
     * [Output only] The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    expireTime?: string | null;
    /**
     * Output only. Unique id for the cluster.
     */
    id?: string | null;
    /**
     * The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version
     */
    initialClusterVersion?: string | null;
    /**
     * The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.
     */
    initialNodeCount?: number | null;
    /**
     * Deprecated. Use node_pools.instance_group_urls.
     */
    instanceGroupUrls?: string[] | null;
    /**
     * Configuration for cluster IP allocation.
     */
    ipAllocationPolicy?: Schema$IPAllocationPolicy;
    /**
     * The fingerprint of the set of labels for this cluster.
     */
    labelFingerprint?: string | null;
    /**
     * Configuration for the legacy ABAC authorization mode.
     */
    legacyAbac?: Schema$LegacyAbac;
    /**
     * [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.
     */
    location?: string | null;
    /**
     * The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.
     */
    locations?: string[] | null;
    /**
     * The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
     */
    loggingService?: string | null;
    /**
     * Configure the maintenance policy for this cluster.
     */
    maintenancePolicy?: Schema$MaintenancePolicy;
    /**
     * Configuration for master components.
     */
    master?: Schema$Master;
    /**
     * The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to "admin", a random password will be generated, and a client certificate will be issued.
     */
    masterAuth?: Schema$MasterAuth;
    /**
     * The configuration options for master authorized networks feature.
     */
    masterAuthorizedNetworksConfig?: Schema$MasterAuthorizedNetworksConfig;
    /**
     * The IP prefix in CIDR notation to use for the hosted master network. This prefix will be used for assigning private IP addresses to the master or set of masters, as well as the ILB VIP. This field is deprecated, use private_cluster_config.master_ipv4_cidr_block instead.
     */
    masterIpv4CidrBlock?: string | null;
    /**
     * The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
     */
    monitoringService?: string | null;
    /**
     * The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.
     */
    name?: string | null;
    /**
     * The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used. On output this shows the network ID instead of the name.
     */
    network?: string | null;
    /**
     * Configuration for cluster networking.
     */
    networkConfig?: Schema$NetworkConfig;
    /**
     * Configuration options for the NetworkPolicy feature.
     */
    networkPolicy?: Schema$NetworkPolicy;
    /**
     * Parameters used in creating the cluster's nodes. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "initial_node_count") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`) If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead.
     */
    nodeConfig?: Schema$NodeConfig;
    /**
     * [Output only] The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.
     */
    nodeIpv4CidrSize?: number | null;
    /**
     * Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object.
     */
    nodePoolDefaults?: Schema$NodePoolDefaults;
    /**
     * The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.
     */
    nodePools?: Schema$NodePool[];
    /**
     * Notification configuration of the cluster.
     */
    notificationConfig?: Schema$NotificationConfig;
    /**
     * Configuration for the PodSecurityPolicy feature.
     */
    podSecurityPolicyConfig?: Schema$PodSecurityPolicyConfig;
    /**
     * If this is a private cluster setup. Private clusters are clusters that, by default have no external IP addresses on the nodes and where nodes and the master communicate over private IP addresses. This field is deprecated, use private_cluster_config.enable_private_nodes instead.
     */
    privateCluster?: boolean | null;
    /**
     * Configuration for private cluster.
     */
    privateClusterConfig?: Schema$PrivateClusterConfig;
    /**
     * Release channel configuration.
     */
    releaseChannel?: Schema$ReleaseChannel;
    /**
     * The resource labels for the cluster to use to annotate any related Google Compute Engine resources.
     */
    resourceLabels?: {[key: string]: string} | null;
    /**
     * Configuration for exporting resource usages. Resource usage export is disabled when this config unspecified.
     */
    resourceUsageExportConfig?: Schema$ResourceUsageExportConfig;
    /**
     * [Output only] Server-defined URL for the resource.
     */
    selfLink?: string | null;
    /**
     * [Output only] The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.
     */
    servicesIpv4Cidr?: string | null;
    /**
     * Shielded Nodes configuration.
     */
    shieldedNodes?: Schema$ShieldedNodes;
    /**
     * [Output only] The current status of this cluster.
     */
    status?: string | null;
    /**
     * [Output only] Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.
     */
    statusMessage?: string | null;
    /**
     * The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected. On output this shows the subnetwork ID instead of the name.
     */
    subnetwork?: string | null;
    /**
     * Configuration for Cloud TPU support;
     */
    tpuConfig?: Schema$TpuConfig;
    /**
     * [Output only] The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`).
     */
    tpuIpv4CidrBlock?: string | null;
    /**
     * Cluster-level Vertical Pod Autoscaling configuration.
     */
    verticalPodAutoscaling?: Schema$VerticalPodAutoscaling;
    /**
     * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
     */
    workloadCertificates?: Schema$WorkloadCertificates;
    /**
     * Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
     */
    workloadIdentityConfig?: Schema$WorkloadIdentityConfig;
    /**
     * [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.
     */
    zone?: string | null;
  }
  /**
   * ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.
   */
  export interface Schema$ClusterAutoscaling {
    /**
     * The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes can be created by NAP.
     */
    autoprovisioningLocations?: string[] | null;
    /**
     * AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.
     */
    autoprovisioningNodePoolDefaults?: Schema$AutoprovisioningNodePoolDefaults;
    /**
     * Defines autoscaling behaviour.
     */
    autoscalingProfile?: string | null;
    /**
     * Enables automatic node pool creation and deletion.
     */
    enableNodeAutoprovisioning?: boolean | null;
    /**
     * Contains global constraints regarding minimum and maximum amount of resources in the cluster.
     */
    resourceLimits?: Schema$ResourceLimit[];
  }
  /**
   * Telemetry integration for the cluster.
   */
  export interface Schema$ClusterTelemetry {
    /**
     * Type of the integration.
     */
    type?: string | null;
  }
  /**
   * ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.
   */
  export interface Schema$ClusterUpdate {
    /**
     * Configurations for the various addons available to run in the cluster.
     */
    desiredAddonsConfig?: Schema$AddonsConfig;
    /**
     * AuthenticatorGroupsConfig specifies the config for the cluster security groups settings.
     */
    desiredAuthenticatorGroupsConfig?: Schema$AuthenticatorGroupsConfig;
    /**
     * The desired Autopilot configuration for the cluster.
     */
    desiredAutopilot?: Schema$Autopilot;
    /**
     * The desired configuration options for the Binary Authorization feature.
     */
    desiredBinaryAuthorization?: Schema$BinaryAuthorization;
    /**
     * Cluster-level autoscaling configuration.
     */
    desiredClusterAutoscaling?: Schema$ClusterAutoscaling;
    /**
     * The desired telemetry integration for the cluster.
     */
    desiredClusterTelemetry?: Schema$ClusterTelemetry;
    /**
     * Configuration of etcd encryption.
     */
    desiredDatabaseEncryption?: Schema$DatabaseEncryption;
    /**
     * The desired datapath provider for the cluster.
     */
    desiredDatapathProvider?: string | null;
    /**
     * The desired status of whether to disable default sNAT for this cluster.
     */
    desiredDefaultSnatStatus?: Schema$DefaultSnatStatus;
    /**
     * DNSConfig contains clusterDNS config for this cluster.
     */
    desiredDnsConfig?: Schema$DNSConfig;
    /**
     * The desired image type for the node pool. NOTE: Set the "desired_node_pool" field as well.
     */
    desiredImageType?: string | null;
    /**
     * The desired config of Intra-node visibility.
     */
    desiredIntraNodeVisibilityConfig?: Schema$IntraNodeVisibilityConfig;
    /**
     * The desired L4 Internal Load Balancer Subsetting configuration.
     */
    desiredL4ilbSubsettingConfig?: Schema$ILBSubsettingConfig;
    /**
     * The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This list must always include the cluster's primary zone. Warning: changing cluster locations will update the locations of all node pools and will result in nodes being added and/or removed.
     */
    desiredLocations?: string[] | null;
    /**
     * The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
     */
    desiredLoggingService?: string | null;
    /**
     * Configuration for master components.
     */
    desiredMaster?: Schema$Master;
    /**
     * The desired configuration options for master authorized networks feature.
     */
    desiredMasterAuthorizedNetworksConfig?: Schema$MasterAuthorizedNetworksConfig;
    /**
     * The Kubernetes version to change the master to. The only valid value is the latest supported version. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version
     */
    desiredMasterVersion?: string | null;
    /**
     * The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
     */
    desiredMonitoringService?: string | null;
    /**
     * Autoscaler configuration for the node pool specified in desired_node_pool_id. If there is only one pool in the cluster and desired_node_pool_id is not provided then the change applies to that single node pool.
     */
    desiredNodePoolAutoscaling?: Schema$NodePoolAutoscaling;
    /**
     * The node pool to be upgraded. This field is mandatory if "desired_node_version", "desired_image_family", "desired_node_pool_autoscaling", or "desired_workload_metadata_config" is specified and there is more than one node pool on the cluster.
     */
    desiredNodePoolId?: string | null;
    /**
     * The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version
     */
    desiredNodeVersion?: string | null;
    /**
     * The desired notification configuration.
     */
    desiredNotificationConfig?: Schema$NotificationConfig;
    /**
     * The desired configuration options for the PodSecurityPolicy feature.
     */
    desiredPodSecurityPolicyConfig?: Schema$PodSecurityPolicyConfig;
    /**
     * The desired private cluster configuration.
     */
    desiredPrivateClusterConfig?: Schema$PrivateClusterConfig;
    /**
     * The desired state of IPv6 connectivity to Google Services.
     */
    desiredPrivateIpv6GoogleAccess?: string | null;
    /**
     * The desired release channel configuration.
     */
    desiredReleaseChannel?: Schema$ReleaseChannel;
    /**
     * The desired configuration for exporting resource usage.
     */
    desiredResourceUsageExportConfig?: Schema$ResourceUsageExportConfig;
    /**
     * ServiceExternalIPsConfig specifies the config for the use of Services with ExternalIPs field.
     */
    desiredServiceExternalIpsConfig?: Schema$ServiceExternalIPsConfig;
    /**
     * Configuration for Shielded Nodes.
     */
    desiredShieldedNodes?: Schema$ShieldedNodes;
    /**
     * The desired Cloud TPU configuration.
     */
    desiredTpuConfig?: Schema$TpuConfig;
    /**
     * Cluster-level Vertical Pod Autoscaling configuration.
     */
    desiredVerticalPodAutoscaling?: Schema$VerticalPodAutoscaling;
    /**
     * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
     */
    desiredWorkloadCertificates?: Schema$WorkloadCertificates;
    /**
     * Configuration for Workload Identity.
     */
    desiredWorkloadIdentityConfig?: Schema$WorkloadIdentityConfig;
  }
  /**
   * CompleteIPRotationRequest moves the cluster master back into single-IP mode.
   */
  export interface Schema$CompleteIPRotationRequest {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster id) of the cluster to complete IP rotation. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
   */
  export interface Schema$ConfidentialNodes {
    /**
     * Whether Confidential Nodes feature is enabled for all nodes in this cluster.
     */
    enabled?: boolean | null;
  }
  /**
   * Configuration options for the Config Connector add-on.
   */
  export interface Schema$ConfigConnectorConfig {
    /**
     * Whether Cloud Connector is enabled for this cluster.
     */
    enabled?: boolean | null;
  }
  /**
   * Parameters for controlling consumption metering.
   */
  export interface Schema$ConsumptionMeteringConfig {
    /**
     * Whether to enable consumption metering for this cluster. If enabled, a second BigQuery table will be created to hold resource consumption records.
     */
    enabled?: boolean | null;
  }
  /**
   * CreateClusterRequest creates a cluster.
   */
  export interface Schema$CreateClusterRequest {
    /**
     * Required. A [cluster resource](https://cloud.google.com/container-engine/reference/rest/v1beta1/projects.locations.clusters)
     */
    cluster?: Schema$Cluster;
    /**
     * The parent (project and location) where the cluster will be created. Specified in the format `projects/x/locations/x`.
     */
    parent?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string | null;
  }
  /**
   * CreateNodePoolRequest creates a node pool for a cluster.
   */
  export interface Schema$CreateNodePoolRequest {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     */
    clusterId?: string | null;
    /**
     * Required. The node pool to create.
     */
    nodePool?: Schema$NodePool;
    /**
     * The parent (project, location, cluster id) where the node pool will be created. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    parent?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string | null;
  }
  /**
   * Time window specified for daily maintenance operations.
   */
  export interface Schema$DailyMaintenanceWindow {
    /**
     * [Output only] Duration of the time window, automatically chosen to be smallest possible in the given scenario.
     */
    duration?: string | null;
    /**
     * Time within the maintenance window to start the maintenance operations. It must be in format "HH:MM", where HH : [00-23] and MM : [00-59] GMT.
     */
    startTime?: string | null;
  }
  /**
   * Configuration of etcd encryption.
   */
  export interface Schema$DatabaseEncryption {
    /**
     * Name of CloudKMS key to use for the encryption of secrets in etcd. Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key
     */
    keyName?: string | null;
    /**
     * Denotes the state of etcd encryption.
     */
    state?: string | null;
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
   * DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster.
   */
  export interface Schema$DefaultSnatStatus {
    /**
     * Disables cluster default sNAT rules.
     */
    disabled?: boolean | null;
  }
  /**
   * Configuration for NodeLocal DNSCache
   */
  export interface Schema$DnsCacheConfig {
    /**
     * Whether NodeLocal DNSCache is enabled for this cluster.
     */
    enabled?: boolean | null;
  }
  /**
   * DNSConfig contains the desired set of options for configuring clusterDNS.
   */
  export interface Schema$DNSConfig {
    /**
     * cluster_dns indicates which in-cluster DNS provider should be used.
     */
    clusterDns?: string | null;
    /**
     * cluster_dns_domain is the suffix used for all cluster service records.
     */
    clusterDnsDomain?: string | null;
    /**
     * cluster_dns_scope indicates the scope of access to cluster DNS records.
     */
    clusterDnsScope?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * EphemeralStorageConfig contains configuration for the ephemeral storage filesystem.
   */
  export interface Schema$EphemeralStorageConfig {
    /**
     * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD is 375 GB in size. If zero, it means to disable using local SSDs as ephemeral storage.
     */
    localSsdCount?: number | null;
  }
  /**
   * Configuration for the Compute Engine PD CSI driver.
   */
  export interface Schema$GcePersistentDiskCsiDriverConfig {
    /**
     * Whether the Compute Engine PD CSI driver is enabled for this cluster.
     */
    enabled?: boolean | null;
  }
  /**
   * GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517
   */
  export interface Schema$GetJSONWebKeysResponse {
    /**
     * OnePlatform automatically extracts this field and uses it to set the HTTP Cache-Control header.
     */
    cacheHeader?: Schema$HttpCacheControlResponseHeader;
    /**
     * The public component of the keys used by the cluster to sign token requests.
     */
    keys?: Schema$Jwk[];
  }
  /**
   * GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.
   */
  export interface Schema$GetOpenIDConfigResponse {
    /**
     * OnePlatform automatically extracts this field and uses it to set the HTTP Cache-Control header.
     */
    cacheHeader?: Schema$HttpCacheControlResponseHeader;
    /**
     * Supported claims.
     */
    claims_supported?: string[] | null;
    /**
     * Supported grant types.
     */
    grant_types?: string[] | null;
    /**
     * supported ID Token signing Algorithms.
     */
    id_token_signing_alg_values_supported?: string[] | null;
    /**
     * OIDC Issuer.
     */
    issuer?: string | null;
    /**
     * JSON Web Key uri.
     */
    jwks_uri?: string | null;
    /**
     * Supported response types.
     */
    response_types_supported?: string[] | null;
    /**
     * Supported subject types.
     */
    subject_types_supported?: string[] | null;
  }
  /**
   * Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.
   */
  export interface Schema$HorizontalPodAutoscaling {
    /**
     * Whether the Horizontal Pod Autoscaling feature is enabled in the cluster. When enabled, it ensures that metrics are collected into Stackdriver Monitoring.
     */
    disabled?: boolean | null;
  }
  /**
   * RFC-2616: cache control support
   */
  export interface Schema$HttpCacheControlResponseHeader {
    /**
     * 14.6 response cache age, in seconds since the response is generated
     */
    age?: string | null;
    /**
     * 14.9 request and response directives
     */
    directive?: string | null;
    /**
     * 14.21 response cache expires, in RFC 1123 date format
     */
    expires?: string | null;
  }
  /**
   * Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.
   */
  export interface Schema$HttpLoadBalancing {
    /**
     * Whether the HTTP Load Balancing controller is enabled in the cluster. When enabled, it runs a small pod in the cluster that manages the load balancers.
     */
    disabled?: boolean | null;
  }
  /**
   * ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster.
   */
  export interface Schema$ILBSubsettingConfig {
    /**
     * Enables l4 ILB subsetting for this cluster
     */
    enabled?: boolean | null;
  }
  /**
   * IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster.
   */
  export interface Schema$IntraNodeVisibilityConfig {
    /**
     * Enables intra node visibility for this cluster.
     */
    enabled?: boolean | null;
  }
  /**
   * Configuration for controlling how IPs are allocated in the cluster.
   */
  export interface Schema$IPAllocationPolicy {
    /**
     * If true, allow allocation of cluster CIDR ranges that overlap with certain kinds of network routes. By default we do not allow cluster CIDR ranges to intersect with any user declared routes. With allow_route_overlap == true, we allow overlapping with CIDR ranges that are larger than the cluster CIDR range. If this field is set to true, then cluster and services CIDRs must be fully-specified (e.g. `10.96.0.0/14`, but not `/14`), which means: 1) When `use_ip_aliases` is true, `cluster_ipv4_cidr_block` and `services_ipv4_cidr_block` must be fully-specified. 2) When `use_ip_aliases` is false, `cluster.cluster_ipv4_cidr` muse be fully-specified.
     */
    allowRouteOverlap?: boolean | null;
    /**
     * This field is deprecated, use cluster_ipv4_cidr_block.
     */
    clusterIpv4Cidr?: string | null;
    /**
     * The IP address range for the cluster pod IPs. If this field is set, then `cluster.cluster_ipv4_cidr` must be left blank. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
     */
    clusterIpv4CidrBlock?: string | null;
    /**
     * The name of the secondary range to be used for the cluster CIDR block. The secondary range will be used for pod IP addresses. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false.
     */
    clusterSecondaryRangeName?: string | null;
    /**
     * Whether a new subnetwork will be created automatically for the cluster. This field is only applicable when `use_ip_aliases` is true.
     */
    createSubnetwork?: boolean | null;
    /**
     * This field is deprecated, use node_ipv4_cidr_block.
     */
    nodeIpv4Cidr?: string | null;
    /**
     * The IP address range of the instance IPs in this cluster. This is applicable only if `create_subnetwork` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
     */
    nodeIpv4CidrBlock?: string | null;
    /**
     * This field is deprecated, use services_ipv4_cidr_block.
     */
    servicesIpv4Cidr?: string | null;
    /**
     * The IP address range of the services IPs in this cluster. If blank, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
     */
    servicesIpv4CidrBlock?: string | null;
    /**
     * The name of the secondary range to be used as for the services CIDR block. The secondary range will be used for service ClusterIPs. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false.
     */
    servicesSecondaryRangeName?: string | null;
    /**
     * A custom subnetwork name to be used if `create_subnetwork` is true. If this field is empty, then an automatic name will be chosen for the new subnetwork.
     */
    subnetworkName?: string | null;
    /**
     * The IP address range of the Cloud TPUs in this cluster. If unspecified, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. If unspecified, the range will use the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. This field is deprecated, use cluster.tpu_config.ipv4_cidr_block instead.
     */
    tpuIpv4CidrBlock?: string | null;
    /**
     * Whether alias IPs will be used for pod IPs in the cluster. This is used in conjunction with use_routes. It cannot be true if use_routes is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode
     */
    useIpAliases?: boolean | null;
    /**
     * Whether routes will be used for pod IPs in the cluster. This is used in conjunction with use_ip_aliases. It cannot be true if use_ip_aliases is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode
     */
    useRoutes?: boolean | null;
  }
  /**
   * Configuration options for Istio addon.
   */
  export interface Schema$IstioConfig {
    /**
     * The specified Istio auth mode, either none, or mutual TLS.
     */
    auth?: string | null;
    /**
     * Whether Istio is enabled for this cluster.
     */
    disabled?: boolean | null;
  }
  /**
   * Jwk is a JSON Web Key as specified in RFC 7517
   */
  export interface Schema$Jwk {
    /**
     * Algorithm.
     */
    alg?: string | null;
    /**
     * Used for ECDSA keys.
     */
    crv?: string | null;
    /**
     * Used for RSA keys.
     */
    e?: string | null;
    /**
     * Key ID.
     */
    kid?: string | null;
    /**
     * Key Type.
     */
    kty?: string | null;
    /**
     * Used for RSA keys.
     */
    n?: string | null;
    /**
     * Permitted uses for the public keys.
     */
    use?: string | null;
    /**
     * Used for ECDSA keys.
     */
    x?: string | null;
    /**
     * Used for ECDSA keys.
     */
    y?: string | null;
  }
  /**
   * Configuration options for the KALM addon.
   */
  export interface Schema$KalmConfig {
    /**
     * Whether KALM is enabled for this cluster.
     */
    enabled?: boolean | null;
  }
  /**
   * Configuration for the Kubernetes Dashboard.
   */
  export interface Schema$KubernetesDashboard {
    /**
     * Whether the Kubernetes Dashboard is enabled for this cluster.
     */
    disabled?: boolean | null;
  }
  /**
   * Configuration for the legacy Attribute Based Access Control authorization mode.
   */
  export interface Schema$LegacyAbac {
    /**
     * Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM.
     */
    enabled?: boolean | null;
  }
  /**
   * Parameters that can be configured on Linux nodes.
   */
  export interface Schema$LinuxNodeConfig {
    /**
     * The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. The following parameters are supported. net.core.netdev_max_backlog net.core.rmem_max net.core.wmem_default net.core.wmem_max net.core.optmem_max net.core.somaxconn net.ipv4.tcp_rmem net.ipv4.tcp_wmem net.ipv4.tcp_tw_reuse
     */
    sysctls?: {[key: string]: string} | null;
  }
  /**
   * ListClustersResponse is the result of ListClustersRequest.
   */
  export interface Schema$ListClustersResponse {
    /**
     * A list of clusters in the project in the specified zone, or across all ones.
     */
    clusters?: Schema$Cluster[];
    /**
     * If any zones are listed here, the list of clusters returned may be missing those zones.
     */
    missingZones?: string[] | null;
  }
  /**
   * ListLocationsResponse returns the list of all GKE locations and their recommendation state.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A full list of GKE locations.
     */
    locations?: Schema$Location[];
    /**
     * Only return ListLocationsResponse that occur after the page_token. This value should be populated from the ListLocationsResponse.next_page_token if that response token was set (which happens when listing more Locations than fit in a single ListLocationsResponse).
     */
    nextPageToken?: string | null;
  }
  /**
   * ListNodePoolsResponse is the result of ListNodePoolsRequest.
   */
  export interface Schema$ListNodePoolsResponse {
    /**
     * A list of node pools for a cluster.
     */
    nodePools?: Schema$NodePool[];
  }
  /**
   * ListOperationsResponse is the result of ListOperationsRequest.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * If any zones are listed here, the list of operations returned may be missing the operations from those zones.
     */
    missingZones?: string[] | null;
    /**
     * A list of operations in the project in the specified zone.
     */
    operations?: Schema$Operation[];
  }
  /**
   * ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest.
   */
  export interface Schema$ListUsableSubnetworksResponse {
    /**
     * This token allows you to get the next page of results for list requests. If the number of results is larger than `page_size`, use the `next_page_token` as a value for the query parameter `page_token` in the next request. The value will become empty when there are no more pages.
     */
    nextPageToken?: string | null;
    /**
     * A list of usable subnetworks in the specified network project.
     */
    subnetworks?: Schema$UsableSubnetwork[];
  }
  /**
   * Location returns the location name, and if the location is recommended for GKE cluster scheduling.
   */
  export interface Schema$Location {
    /**
     * Contains the name of the resource requested. Specified in the format `projects/x/locations/x`.
     */
    name?: string | null;
    /**
     * Whether the location is recomended for GKE cluster scheduling.
     */
    recommended?: boolean | null;
    /**
     * Contains the type of location this Location is for. Regional or Zonal.
     */
    type?: string | null;
  }
  /**
   * MaintenancePolicy defines the maintenance policy to be used for the cluster.
   */
  export interface Schema$MaintenancePolicy {
    /**
     * A hash identifying the version of this policy, so that updates to fields of the policy won't accidentally undo intermediate changes (and so that users of the API unaware of some fields won't accidentally remove other fields). Make a `get()` request to the cluster to get the current resource version and include it with requests to set the policy.
     */
    resourceVersion?: string | null;
    /**
     * Specifies the maintenance window in which maintenance may be performed.
     */
    window?: Schema$MaintenanceWindow;
  }
  /**
   * MaintenanceWindow defines the maintenance window to be used for the cluster.
   */
  export interface Schema$MaintenanceWindow {
    /**
     * DailyMaintenanceWindow specifies a daily maintenance operation window.
     */
    dailyMaintenanceWindow?: Schema$DailyMaintenanceWindow;
    /**
     * Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows.
     */
    maintenanceExclusions?: {[key: string]: Schema$TimeWindow} | null;
    /**
     * RecurringWindow specifies some number of recurring time periods for maintenance to occur. The time windows may be overlapping. If no maintenance windows are set, maintenance can occur at any time.
     */
    recurringWindow?: Schema$RecurringTimeWindow;
  }
  /**
   * Master is the configuration for components on master.
   */
  export interface Schema$Master {}
  /**
   * The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.
   */
  export interface Schema$MasterAuth {
    /**
     * [Output only] Base64-encoded public certificate used by clients to authenticate to the cluster endpoint.
     */
    clientCertificate?: string | null;
    /**
     * Configuration for client certificate authentication on the cluster. For clusters before v1.12, if no configuration is specified, a client certificate is issued.
     */
    clientCertificateConfig?: Schema$ClientCertificateConfig;
    /**
     * [Output only] Base64-encoded private key used by clients to authenticate to the cluster endpoint.
     */
    clientKey?: string | null;
    clusterCaCertificate?: string | null;
    /**
     * The password to use for HTTP basic authentication to the master endpoint. Because the master endpoint is open to the Internet, you should create a strong password. If a password is provided for cluster creation, username must be non-empty. Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication
     */
    password?: string | null;
    /**
     * The username to use for HTTP basic authentication to the master endpoint. For clusters v1.6.0 and later, basic authentication can be disabled by leaving username unspecified (or setting it to the empty string). Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication
     */
    username?: string | null;
  }
  /**
   * Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
   */
  export interface Schema$MasterAuthorizedNetworksConfig {
    /**
     * cidr_blocks define up to 10 external networks that could access Kubernetes master through HTTPS.
     */
    cidrBlocks?: Schema$CidrBlock[];
    /**
     * Whether or not master authorized networks is enabled.
     */
    enabled?: boolean | null;
  }
  /**
   * Constraints applied to pods.
   */
  export interface Schema$MaxPodsConstraint {
    /**
     * Constraint enforced on the max num of pods per node.
     */
    maxPodsPerNode?: string | null;
  }
  /**
   * Progress metric is (string, int|float|string) pair.
   */
  export interface Schema$Metric {
    /**
     * For metrics with floating point value.
     */
    doubleValue?: number | null;
    /**
     * For metrics with integer value.
     */
    intValue?: string | null;
    /**
     * Required. Metric name, e.g., "nodes total", "percent done".
     */
    name?: string | null;
    /**
     * For metrics with custom values (ratios, visual progress, etc.).
     */
    stringValue?: string | null;
  }
  /**
   * NetworkConfig reports the relative names of network & subnetwork.
   */
  export interface Schema$NetworkConfig {
    /**
     * The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.
     */
    datapathProvider?: string | null;
    /**
     * Whether the cluster disables default in-node sNAT rules. In-node sNAT rules will be disabled when default_snat_status is disabled. When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic.
     */
    defaultSnatStatus?: Schema$DefaultSnatStatus;
    /**
     * DNSConfig contains clusterDNS config for this cluster.
     */
    dnsConfig?: Schema$DNSConfig;
    /**
     * Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
     */
    enableIntraNodeVisibility?: boolean | null;
    /**
     * Whether L4ILB Subsetting is enabled for this cluster.
     */
    enableL4ilbSubsetting?: boolean | null;
    /**
     * Output only. The relative name of the Google Compute Engine network(https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. Example: projects/my-project/global/networks/my-network
     */
    network?: string | null;
    /**
     * The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4)
     */
    privateIpv6GoogleAccess?: string | null;
    /**
     * ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not.
     */
    serviceExternalIpsConfig?: Schema$ServiceExternalIPsConfig;
    /**
     * Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet
     */
    subnetwork?: string | null;
  }
  /**
   * Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
   */
  export interface Schema$NetworkPolicy {
    /**
     * Whether network policy is enabled on the cluster.
     */
    enabled?: boolean | null;
    /**
     * The selected network policy provider.
     */
    provider?: string | null;
  }
  /**
   * Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.
   */
  export interface Schema$NetworkPolicyConfig {
    /**
     * Whether NetworkPolicy is enabled for this cluster.
     */
    disabled?: boolean | null;
  }
  /**
   * Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig)).
   */
  export interface Schema$NetworkTags {
    /**
     * List of network tags.
     */
    tags?: string[] | null;
  }
  /**
   * Parameters that describe the nodes in a cluster.
   */
  export interface Schema$NodeConfig {
    /**
     * A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs.
     */
    accelerators?: Schema$AcceleratorConfig[];
    /**
     *  The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption
     */
    bootDiskKmsKey?: string | null;
    /**
     * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB.
     */
    diskSizeGb?: number | null;
    /**
     * Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard'
     */
    diskType?: string | null;
    /**
     * Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
     */
    ephemeralStorageConfig?: Schema$EphemeralStorageConfig;
    /**
     * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
     */
    imageType?: string | null;
    /**
     * Node kubelet configs.
     */
    kubeletConfig?: Schema$NodeKubeletConfig;
    /**
     * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
     */
    labels?: {[key: string]: string} | null;
    /**
     * Parameters that can be configured on Linux nodes.
     */
    linuxNodeConfig?: Schema$LinuxNodeConfig;
    /**
     * The number of local SSD disks to be attached to the node. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information.
     */
    localSsdCount?: number | null;
    /**
     * The name of a Google Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types). If unspecified, the default machine type is `e2-medium`.
     */
    machineType?: string | null;
    /**
     * The metadata key/value pairs assigned to instances in the cluster. Keys must conform to the regexp `[a-zA-Z0-9-_]+` and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: - "cluster-location" - "cluster-name" - "cluster-uid" - "configure-sh" - "containerd-configure-sh" - "enable-oslogin" - "gci-ensure-gke-docker" - "gci-metrics-enabled" - "gci-update-strategy" - "instance-template" - "kube-env" - "startup-script" - "user-data" - "disable-address-manager" - "windows-startup-script-ps1" - "common-psm1" - "k8s-node-setup-psm1" - "install-ssh-psm1" - "user-profile-psm1" The following keys are reserved for Windows nodes: - "serial-port-logging-enable" Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value's size must be less than or equal to 32 KB. The total size of all keys and values must be less than 512 KB.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: "Intel Haswell"` or `minCpuPlatform: "Intel Sandy Bridge"`. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
     */
    minCpuPlatform?: string | null;
    /**
     * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes).
     */
    nodeGroup?: string | null;
    /**
     * The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.
     */
    oauthScopes?: string[] | null;
    /**
     * Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more inforamtion about preemptible VM instances.
     */
    preemptible?: boolean | null;
    /**
     * The optional reservation affinity. Setting this field will apply the specified [Zonal Compute Reservation](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) to this node pool.
     */
    reservationAffinity?: Schema$ReservationAffinity;
    /**
     * Sandbox configuration for this node.
     */
    sandboxConfig?: Schema$SandboxConfig;
    /**
     * The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used.
     */
    serviceAccount?: string | null;
    /**
     * Shielded Instance options.
     */
    shieldedInstanceConfig?: Schema$ShieldedInstanceConfig;
    /**
     * The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation. Each tag within the list must comply with RFC1035.
     */
    tags?: string[] | null;
    /**
     * List of kubernetes taints to be applied to each node. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
     */
    taints?: Schema$NodeTaint[];
    /**
     * The workload metadata configuration for this node.
     */
    workloadMetadataConfig?: Schema$WorkloadMetadataConfig;
  }
  /**
   * Subset of NodeConfig message that has defaults.
   */
  export interface Schema$NodeConfigDefaults {}
  /**
   * Node kubelet configs.
   */
  export interface Schema$NodeKubeletConfig {
    /**
     * Enable CPU CFS quota enforcement for containers that specify CPU limits. This option is enabled by default which makes kubelet use CFS quota (https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt) to enforce container CPU limits. Otherwise, CPU limits will not be enforced at all. Disable this option to mitigate CPU throttling problems while still having your pods to be in Guaranteed QoS class by specifying the CPU limits. The default value is 'true' if unspecified.
     */
    cpuCfsQuota?: boolean | null;
    /**
     * Set the CPU CFS quota period value 'cpu.cfs_period_us'. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration.
     */
    cpuCfsQuotaPeriod?: string | null;
    /**
     * Control the CPU management policy on the node. See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. - "none": the default, which represents the existing scheduling behavior. - "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node. The default value is 'none' if unspecified.
     */
    cpuManagerPolicy?: string | null;
  }
  /**
   * Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels).
   */
  export interface Schema$NodeLabels {
    /**
     * Map of node label keys and node label values.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * NodeManagement defines the set of node management services turned on for the node pool.
   */
  export interface Schema$NodeManagement {
    /**
     * Whether the nodes will be automatically repaired.
     */
    autoRepair?: boolean | null;
    /**
     * Whether the nodes will be automatically upgraded.
     */
    autoUpgrade?: boolean | null;
    /**
     * Specifies the Auto Upgrade knobs for the node pool.
     */
    upgradeOptions?: Schema$AutoUpgradeOptions;
  }
  /**
   * Parameters for node pool-level network config. Only applicable if `ip_allocation_policy.use_ip_aliases` is true.
   */
  export interface Schema$NodeNetworkConfig {
    /**
     * Input only. Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified. If neither `create_pod_range` or `pod_range` are specified, the cluster-level default (`ip_allocation_policy.cluster_ipv4_cidr_block`) is used.
     */
    createPodRange?: boolean | null;
    /**
     * The IP address range for pod IPs in this node pool. Only applicable if `create_pod_range` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) to pick a specific range to use.
     */
    podIpv4CidrBlock?: string | null;
    /**
     * The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID.
     */
    podRange?: string | null;
  }
  /**
   * NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload. These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available.
   */
  export interface Schema$NodePool {
    /**
     * Autoscaler configuration for this NodePool. Autoscaler is enabled only if a valid configuration is present.
     */
    autoscaling?: Schema$NodePoolAutoscaling;
    /**
     * Which conditions caused the current node pool state.
     */
    conditions?: Schema$StatusCondition[];
    /**
     * The node configuration of the pool.
     */
    config?: Schema$NodeConfig;
    /**
     * The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota.
     */
    initialNodeCount?: number | null;
    /**
     * [Output only] The resource URLs of the [managed instance groups](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool.
     */
    instanceGroupUrls?: string[] | null;
    /**
     * The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed.
     */
    locations?: string[] | null;
    /**
     * NodeManagement configuration for this NodePool.
     */
    management?: Schema$NodeManagement;
    /**
     * The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
     */
    maxPodsConstraint?: Schema$MaxPodsConstraint;
    /**
     * The name of the node pool.
     */
    name?: string | null;
    /**
     * Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults.
     */
    networkConfig?: Schema$NodeNetworkConfig;
    /**
     * [Output only] The pod CIDR block size per node in this node pool.
     */
    podIpv4CidrSize?: number | null;
    /**
     * [Output only] Server-defined URL for the resource.
     */
    selfLink?: string | null;
    /**
     * [Output only] The status of the nodes in this pool instance.
     */
    status?: string | null;
    /**
     * [Output only] Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available.
     */
    statusMessage?: string | null;
    /**
     * Upgrade settings control disruption and speed of the upgrade.
     */
    upgradeSettings?: Schema$UpgradeSettings;
    /**
     * The version of the Kubernetes of this node.
     */
    version?: string | null;
  }
  /**
   * NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
   */
  export interface Schema$NodePoolAutoscaling {
    /**
     * Can this node pool be deleted automatically.
     */
    autoprovisioned?: boolean | null;
    /**
     * Is autoscaling enabled for this node pool.
     */
    enabled?: boolean | null;
    /**
     * Maximum number of nodes in the NodePool. Must be \>= min_node_count. There has to enough quota to scale up the cluster.
     */
    maxNodeCount?: number | null;
    /**
     * Minimum number of nodes in the NodePool. Must be \>= 1 and <= max_node_count.
     */
    minNodeCount?: number | null;
  }
  /**
   * Subset of Nodepool message that has defaults.
   */
  export interface Schema$NodePoolDefaults {
    /**
     * Subset of NodeConfig message that has defaults.
     */
    nodeConfigDefaults?: Schema$NodeConfigDefaults;
  }
  /**
   * Kubernetes taint is comprised of three fields: key, value, and effect. Effect can only be one of three types: NoSchedule, PreferNoSchedule or NoExecute. See [here](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration) for more information, including usage and the valid values.
   */
  export interface Schema$NodeTaint {
    /**
     * Effect for taint.
     */
    effect?: string | null;
    /**
     * Key for taint.
     */
    key?: string | null;
    /**
     * Value for taint.
     */
    value?: string | null;
  }
  /**
   * Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration).
   */
  export interface Schema$NodeTaints {
    /**
     * List of node taints.
     */
    taints?: Schema$NodeTaint[];
  }
  /**
   * NotificationConfig is the configuration of notifications.
   */
  export interface Schema$NotificationConfig {
    /**
     * Notification config for Pub/Sub.
     */
    pubsub?: Schema$PubSub;
  }
  /**
   * This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.
   */
  export interface Schema$Operation {
    /**
     * Which conditions caused the current cluster state. Deprecated. Use field error instead.
     */
    clusterConditions?: Schema$StatusCondition[];
    /**
     * Detailed operation progress, if available.
     */
    detail?: string | null;
    /**
     * [Output only] The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    endTime?: string | null;
    /**
     * The error result of the operation in case of failure.
     */
    error?: Schema$Status;
    /**
     * [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.
     */
    location?: string | null;
    /**
     * The server-assigned ID for the operation.
     */
    name?: string | null;
    /**
     * Which conditions caused the current node pool state. Deprecated. Use field error instead.
     */
    nodepoolConditions?: Schema$StatusCondition[];
    /**
     * The operation type.
     */
    operationType?: string | null;
    /**
     * Output only. [Output only] Progress information for an operation.
     */
    progress?: Schema$OperationProgress;
    /**
     * Server-defined URL for the resource.
     */
    selfLink?: string | null;
    /**
     * [Output only] The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    startTime?: string | null;
    /**
     * The current status of the operation.
     */
    status?: string | null;
    /**
     * Output only. If an error has occurred, a textual description of the error. Deprecated. Use field error instead.
     */
    statusMessage?: string | null;
    /**
     * Server-defined URL for the target of the operation.
     */
    targetLink?: string | null;
    /**
     * The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation is taking place. This field is deprecated, use location instead.
     */
    zone?: string | null;
  }
  /**
   * Information about operation (or operation stage) progress.
   */
  export interface Schema$OperationProgress {
    /**
     * Progress metric bundle, for example: metrics: [{name: "nodes done", int_value: 15\}, {name: "nodes total", int_value: 32\}] or metrics: [{name: "progress", double_value: 0.56\}, {name: "progress scale", double_value: 1.0\}]
     */
    metrics?: Schema$Metric[];
    /**
     * A non-parameterized string describing an operation stage. Unset for single-stage operations.
     */
    name?: string | null;
    /**
     * Substages of an operation or a stage.
     */
    stages?: Schema$OperationProgress[];
    /**
     * Status of an operation stage. Unset for single-stage operations.
     */
    status?: string | null;
  }
  /**
   * Configuration for the PodSecurityPolicy feature.
   */
  export interface Schema$PodSecurityPolicyConfig {
    /**
     * Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created.
     */
    enabled?: boolean | null;
  }
  /**
   * Configuration options for private clusters.
   */
  export interface Schema$PrivateClusterConfig {
    /**
     * Whether the master's internal IP address is used as the cluster endpoint.
     */
    enablePrivateEndpoint?: boolean | null;
    /**
     * Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.
     */
    enablePrivateNodes?: boolean | null;
    /**
     * Controls master global access settings.
     */
    masterGlobalAccessConfig?: Schema$PrivateClusterMasterGlobalAccessConfig;
    /**
     * The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network.
     */
    masterIpv4CidrBlock?: string | null;
    /**
     * Output only. The peering name in the customer VPC used by this cluster.
     */
    peeringName?: string | null;
    /**
     * Output only. The internal IP address of this cluster's master endpoint.
     */
    privateEndpoint?: string | null;
    /**
     * Output only. The external IP address of this cluster's master endpoint.
     */
    publicEndpoint?: string | null;
  }
  /**
   * Configuration for controlling master global access settings.
   */
  export interface Schema$PrivateClusterMasterGlobalAccessConfig {
    /**
     * Whenever master is accessible globally or not.
     */
    enabled?: boolean | null;
  }
  /**
   * Pub/Sub specific notification config.
   */
  export interface Schema$PubSub {
    /**
     * Enable notifications for Pub/Sub.
     */
    enabled?: boolean | null;
    /**
     * The desired Pub/Sub topic to which notifications will be sent by GKE. Format is `projects/{project\}/topics/{topic\}`.
     */
    topic?: string | null;
  }
  /**
   * Represents an arbitrary window of time that recurs.
   */
  export interface Schema$RecurringTimeWindow {
    /**
     * An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window reccurs. They go on for the span of time between the start and end time. For example, to have something repeat every weekday, you'd use: `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` To repeat some window daily (equivalent to the DailyMaintenanceWindow): `FREQ=DAILY` For the first weekend of every month: `FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU` This specifies how frequently the window starts. Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you'd use something like: ``` start time = 2019-01-01T09:00:00-0400 end time = 2019-01-01T17:00:00-0400 recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR ``` Windows can span multiple days. Eg, to make the window encompass every weekend from midnight Saturday till the last minute of Sunday UTC: ``` start time = 2019-01-05T00:00:00Z end time = 2019-01-07T23:59:00Z recurrence = FREQ=WEEKLY;BYDAY=SA ``` Note the start and end time's specific dates are largely arbitrary except to specify duration of the window and when it first starts. The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported.
     */
    recurrence?: string | null;
    /**
     * The window of the first recurrence.
     */
    window?: Schema$TimeWindow;
  }
  /**
   * ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled.
   */
  export interface Schema$ReleaseChannel {
    /**
     * channel specifies which release channel the cluster is subscribed to.
     */
    channel?: string | null;
  }
  /**
   * ReleaseChannelConfig exposes configuration for a release channel.
   */
  export interface Schema$ReleaseChannelConfig {
    /**
     * Deprecated. This field has been deprecated and replaced with the valid_versions field.
     */
    availableVersions?: Schema$AvailableVersion[];
    /**
     * The release channel this configuration applies to.
     */
    channel?: string | null;
    /**
     * The default version for newly created clusters on the channel.
     */
    defaultVersion?: string | null;
    /**
     * List of valid versions for the channel.
     */
    validVersions?: string[] | null;
  }
  /**
   * [ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from.
   */
  export interface Schema$ReservationAffinity {
    /**
     * Corresponds to the type of reservation consumption.
     */
    consumeReservationType?: string | null;
    /**
     * Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify "googleapis.com/reservation-name" as the key and specify the name of your reservation as its value.
     */
    key?: string | null;
    /**
     * Corresponds to the label value(s) of reservation resource(s).
     */
    values?: string[] | null;
  }
  /**
   * Contains information about amount of some resource in the cluster. For memory, value should be in GB.
   */
  export interface Schema$ResourceLimit {
    /**
     * Maximum amount of the resource in the cluster.
     */
    maximum?: string | null;
    /**
     * Minimum amount of the resource in the cluster.
     */
    minimum?: string | null;
    /**
     * Resource name "cpu", "memory" or gpu-specific string.
     */
    resourceType?: string | null;
  }
  /**
   * Configuration for exporting cluster resource usages.
   */
  export interface Schema$ResourceUsageExportConfig {
    /**
     * Configuration to use BigQuery as usage export destination.
     */
    bigqueryDestination?: Schema$BigQueryDestination;
    /**
     * Configuration to enable resource consumption metering.
     */
    consumptionMeteringConfig?: Schema$ConsumptionMeteringConfig;
    /**
     * Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.
     */
    enableNetworkEgressMetering?: boolean | null;
  }
  /**
   * RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
   */
  export interface Schema$RollbackNodePoolUpgradeRequest {
    /**
     * Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SandboxConfig contains configurations of the sandbox to use for the node.
   */
  export interface Schema$SandboxConfig {
    /**
     * Type of the sandbox to use for the node (e.g. 'gvisor')
     */
    sandboxType?: string | null;
    /**
     * Type of the sandbox to use for the node.
     */
    type?: string | null;
  }
  /**
   * Kubernetes Engine service configuration.
   */
  export interface Schema$ServerConfig {
    /**
     * List of release channel configurations.
     */
    channels?: Schema$ReleaseChannelConfig[];
    /**
     * Version of Kubernetes the service deploys by default.
     */
    defaultClusterVersion?: string | null;
    /**
     * Default image type.
     */
    defaultImageType?: string | null;
    /**
     * List of valid image types.
     */
    validImageTypes?: string[] | null;
    /**
     * List of valid master versions, in descending order.
     */
    validMasterVersions?: string[] | null;
    /**
     * List of valid node upgrade target versions, in descending order.
     */
    validNodeVersions?: string[] | null;
    /**
     * Maps of Kubernetes version and supported Windows server versions.
     */
    windowsVersionMaps?: {[key: string]: Schema$WindowsVersions} | null;
  }
  /**
   * Config to block services with externalIPs field.
   */
  export interface Schema$ServiceExternalIPsConfig {
    /**
     * Whether Services with ExternalIPs field are allowed or not.
     */
    enabled?: boolean | null;
  }
  /**
   * SetAddonsRequest sets the addons associated with the cluster.
   */
  export interface Schema$SetAddonsConfigRequest {
    /**
     * Required. The desired configurations for the various addons available to run in the cluster.
     */
    addonsConfig?: Schema$AddonsConfig;
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster
   */
  export interface Schema$SetLabelsRequest {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * Required. The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Kubernetes Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a `get()` request to the resource to get the latest fingerprint.
     */
    labelFingerprint?: string | null;
    /**
     * The name (project, location, cluster id) of the cluster to set labels. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. The labels to set for that cluster.
     */
    resourceLabels?: {[key: string]: string} | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster.
   */
  export interface Schema$SetLegacyAbacRequest {
    /**
     * Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * Required. Whether ABAC authorization will be enabled in the cluster.
     */
    enabled?: boolean | null;
    /**
     * The name (project, location, cluster id) of the cluster to set legacy abac. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetLocationsRequest sets the locations of the cluster.
   */
  export interface Schema$SetLocationsRequest {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * Required. The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed. This list must always include the cluster's primary zone.
     */
    locations?: string[] | null;
    /**
     * The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetLoggingServiceRequest sets the logging service of a cluster.
   */
  export interface Schema$SetLoggingServiceRequest {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * Required. The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
     */
    loggingService?: string | null;
    /**
     * The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
   */
  export interface Schema$SetMaintenancePolicyRequest {
    /**
     * Required. The name of the cluster to update.
     */
    clusterId?: string | null;
    /**
     * Required. The maintenance policy to be set for the cluster. An empty field clears the existing maintenance policy.
     */
    maintenancePolicy?: Schema$MaintenancePolicy;
    /**
     * The name (project, location, cluster id) of the cluster to set maintenance policy. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
     */
    projectId?: string | null;
    /**
     * Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.
     */
    zone?: string | null;
  }
  /**
   * SetMasterAuthRequest updates the admin password of a cluster.
   */
  export interface Schema$SetMasterAuthRequest {
    /**
     * Required. The exact form of action to be taken on the master auth.
     */
    action?: string | null;
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. A description of the update.
     */
    update?: Schema$MasterAuth;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetMonitoringServiceRequest sets the monitoring service of a cluster.
   */
  export interface Schema$SetMonitoringServiceRequest {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * Required. The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
     */
    monitoringService?: string | null;
    /**
     * The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetNetworkPolicyRequest enables/disables network policy for a cluster.
   */
  export interface Schema$SetNetworkPolicyRequest {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster id) of the cluster to set networking policy. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. Configuration options for the NetworkPolicy feature.
     */
    networkPolicy?: Schema$NetworkPolicy;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
   */
  export interface Schema$SetNodePoolAutoscalingRequest {
    /**
     * Required. Autoscaling configuration for the node pool.
     */
    autoscaling?: Schema$NodePoolAutoscaling;
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetNodePoolManagementRequest sets the node management properties of a node pool.
   */
  export interface Schema$SetNodePoolManagementRequest {
    /**
     * Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * Required. NodeManagement configuration for the node pool.
     */
    management?: Schema$NodeManagement;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetNodePoolSizeRequest sets the size of a node pool.
   */
  export interface Schema$SetNodePoolSizeRequest {
    /**
     * Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string | null;
    /**
     * Required. The desired node count for the pool.
     */
    nodeCount?: number | null;
    /**
     * Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * A set of Shielded Instance options.
   */
  export interface Schema$ShieldedInstanceConfig {
    /**
     * Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created.
     */
    enableIntegrityMonitoring?: boolean | null;
    /**
     * Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails.
     */
    enableSecureBoot?: boolean | null;
  }
  /**
   * Configuration of Shielded Nodes feature.
   */
  export interface Schema$ShieldedNodes {
    /**
     * Whether Shielded Nodes features are enabled on all nodes in this cluster.
     */
    enabled?: boolean | null;
  }
  /**
   * StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP.
   */
  export interface Schema$StartIPRotationRequest {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster id) of the cluster to start IP rotation. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Whether to rotate credentials during IP rotation.
     */
    rotateCredentials?: boolean | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
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
   * StatusCondition describes why a cluster or a node pool has a certain status (e.g., ERROR or DEGRADED).
   */
  export interface Schema$StatusCondition {
    /**
     * Canonical code of the condition.
     */
    canonicalCode?: string | null;
    /**
     * Machine-friendly representation of the condition Deprecated. Use canonical_code instead.
     */
    code?: string | null;
    /**
     * Human-friendly representation of the condition
     */
    message?: string | null;
  }
  /**
   * Represents an arbitrary window of time.
   */
  export interface Schema$TimeWindow {
    /**
     * The time that the window ends. The end time should take place after the start time.
     */
    endTime?: string | null;
    /**
     * The time that the window first starts.
     */
    startTime?: string | null;
  }
  /**
   * Configuration for Cloud TPU.
   */
  export interface Schema$TpuConfig {
    /**
     * Whether Cloud TPU integration is enabled or not.
     */
    enabled?: boolean | null;
    /**
     * IPv4 CIDR block reserved for Cloud TPU in the VPC.
     */
    ipv4CidrBlock?: string | null;
    /**
     * Whether to use service networking for Cloud TPU or not.
     */
    useServiceNetworking?: boolean | null;
  }
  /**
   * UpdateClusterRequest updates the settings of a cluster.
   */
  export interface Schema$UpdateClusterRequest {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * The name (project, location, cluster) of the cluster to update. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. A description of the update.
     */
    update?: Schema$ClusterUpdate;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * UpdateMasterRequest updates the master of the cluster.
   */
  export interface Schema$UpdateMasterRequest {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * Required. The Kubernetes version to change the master to. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version
     */
    masterVersion?: string | null;
    /**
     * The name (project, location, cluster) of the cluster to update. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * SetNodePoolVersionRequest updates the version of a node pool.
   */
  export interface Schema$UpdateNodePoolRequest {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string | null;
    /**
     * Required. The desired image type for the node pool.
     */
    imageType?: string | null;
    /**
     * Node kubelet configs.
     */
    kubeletConfig?: Schema$NodeKubeletConfig;
    /**
     * The desired node labels to be applied to all nodes in the node pool. If this field is not present, the labels will not be changed. Otherwise, the existing node labels will be *replaced* with the provided labels.
     */
    labels?: Schema$NodeLabels;
    /**
     * Parameters that can be configured on Linux nodes.
     */
    linuxNodeConfig?: Schema$LinuxNodeConfig;
    /**
     * The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the node pool's nodes should be located. Changing the locations for a node pool will result in nodes being either created or removed from the node pool, depending on whether locations are being added or removed.
     */
    locations?: string[] | null;
    /**
     * The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string | null;
    /**
     * Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string | null;
    /**
     * Required. The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version
     */
    nodeVersion?: string | null;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string | null;
    /**
     * The desired network tags to be applied to all nodes in the node pool. If this field is not present, the tags will not be changed. Otherwise, the existing network tags will be *replaced* with the provided tags.
     */
    tags?: Schema$NetworkTags;
    /**
     * The desired node taints to be applied to all nodes in the node pool. If this field is not present, the taints will not be changed. Otherwise, the existing node taints will be *replaced* with the provided taints.
     */
    taints?: Schema$NodeTaints;
    /**
     * Upgrade settings control disruption and speed of the upgrade.
     */
    upgradeSettings?: Schema$UpgradeSettings;
    /**
     * The desired workload metadata config for the node pool.
     */
    workloadMetadataConfig?: Schema$WorkloadMetadataConfig;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string | null;
  }
  /**
   * UpgradeAvailableEvent is a notification sent to customers when a new available version is released.
   */
  export interface Schema$UpgradeAvailableEvent {
    /**
     * The release channel of the version. If empty, it means a non-channel release.
     */
    releaseChannel?: Schema$ReleaseChannel;
    /**
     * Optional relative path to the resource. For example, the relative path of the node pool.
     */
    resource?: string | null;
    /**
     * The resource type of the release version.
     */
    resourceType?: string | null;
    /**
     * The release version available for upgrade.
     */
    version?: string | null;
  }
  /**
   * UpgradeEvent is a notification sent to customers by the cluster server when a resource is upgrading.
   */
  export interface Schema$UpgradeEvent {
    /**
     * The current version before the upgrade.
     */
    currentVersion?: string | null;
    /**
     * The operation associated with this upgrade.
     */
    operation?: string | null;
    /**
     * The time when the operation was started.
     */
    operationStartTime?: string | null;
    /**
     * Optional relative path to the resource. For example in node pool upgrades, the relative path of the node pool.
     */
    resource?: string | null;
    /**
     * The resource type that is upgrading.
     */
    resourceType?: string | null;
    /**
     * The target version for the upgrade.
     */
    targetVersion?: string | null;
  }
  export interface Schema$UpgradeSettings {
    /**
     * The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.
     */
    maxSurge?: number | null;
    /**
     * The maximum number of nodes that can be simultaneously unavailable during the upgrade process. A node is considered available if its status is Ready.
     */
    maxUnavailable?: number | null;
  }
  /**
   * UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range.
   */
  export interface Schema$UsableSubnetwork {
    /**
     * The range of internal addresses that are owned by this subnetwork.
     */
    ipCidrRange?: string | null;
    /**
     * Network Name. Example: projects/my-project/global/networks/my-network
     */
    network?: string | null;
    /**
     * Secondary IP ranges.
     */
    secondaryIpRanges?: Schema$UsableSubnetworkSecondaryRange[];
    /**
     * A human readable status message representing the reasons for cases where the caller cannot use the secondary ranges under the subnet. For example if the secondary_ip_ranges is empty due to a permission issue, an insufficient permission message will be given by status_message.
     */
    statusMessage?: string | null;
    /**
     * Subnetwork Name. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet
     */
    subnetwork?: string | null;
  }
  /**
   * Secondary IP range of a usable subnetwork.
   */
  export interface Schema$UsableSubnetworkSecondaryRange {
    /**
     * The range of IP addresses belonging to this subnetwork secondary range.
     */
    ipCidrRange?: string | null;
    /**
     * The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance.
     */
    rangeName?: string | null;
    /**
     * This field is to determine the status of the secondary range programmably.
     */
    status?: string | null;
  }
  /**
   * VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it.
   */
  export interface Schema$VerticalPodAutoscaling {
    /**
     * Enables vertical pod autoscaling.
     */
    enabled?: boolean | null;
  }
  /**
   * Windows server version.
   */
  export interface Schema$WindowsVersion {
    /**
     * Windows server image type
     */
    imageType?: string | null;
    /**
     * Windows server build number
     */
    osVersion?: string | null;
    /**
     * Mainstream support end date
     */
    supportEndDate?: Schema$Date;
  }
  /**
   * Windows server versions.
   */
  export interface Schema$WindowsVersions {
    /**
     * List of Windows server versions.
     */
    windowsVersions?: Schema$WindowsVersion[];
  }
  /**
   * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
   */
  export interface Schema$WorkloadCertificates {
    /**
     * enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty).
     */
    enableCertificates?: boolean | null;
  }
  /**
   * Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
   */
  export interface Schema$WorkloadIdentityConfig {
    /**
     * IAM Identity Namespace to attach all Kubernetes Service Accounts to.
     */
    identityNamespace?: string | null;
    /**
     * identity provider is the third party identity provider.
     */
    identityProvider?: string | null;
    /**
     * The workload pool to attach all Kubernetes service accounts to.
     */
    workloadPool?: string | null;
  }
  /**
   * WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.
   */
  export interface Schema$WorkloadMetadataConfig {
    /**
     * Mode is the configuration for how to expose metadata to workloads running on the node pool.
     */
    mode?: string | null;
    /**
     * NodeMetadata is the configuration for how to expose metadata to the workloads running on the node.
     */
    nodeMetadata?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    aggregated: Resource$Projects$Aggregated;
    locations: Resource$Projects$Locations;
    zones: Resource$Projects$Zones;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.aggregated = new Resource$Projects$Aggregated(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.zones = new Resource$Projects$Zones(this.context);
    }
  }

  export class Resource$Projects$Aggregated {
    context: APIRequestContext;
    usableSubnetworks: Resource$Projects$Aggregated$Usablesubnetworks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.usableSubnetworks =
        new Resource$Projects$Aggregated$Usablesubnetworks(this.context);
    }
  }

  export class Resource$Projects$Aggregated$Usablesubnetworks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists subnetworks that can be used for creating clusters in a project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.aggregated.usableSubnetworks.list({
     *     // Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID.
     *     filter: 'placeholder-value',
     *     // The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     *     pageSize: 'placeholder-value',
     *     // Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent project where subnetworks are usable. Specified in the format `projects/x`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "subnetworks": []
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
      params: Params$Resource$Projects$Aggregated$Usablesubnetworks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Aggregated$Usablesubnetworks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUsableSubnetworksResponse>;
    list(
      params: Params$Resource$Projects$Aggregated$Usablesubnetworks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Aggregated$Usablesubnetworks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUsableSubnetworksResponse>,
      callback: BodyResponseCallback<Schema$ListUsableSubnetworksResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Aggregated$Usablesubnetworks$List,
      callback: BodyResponseCallback<Schema$ListUsableSubnetworksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUsableSubnetworksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Aggregated$Usablesubnetworks$List
        | BodyResponseCallback<Schema$ListUsableSubnetworksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUsableSubnetworksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUsableSubnetworksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListUsableSubnetworksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Aggregated$Usablesubnetworks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Aggregated$Usablesubnetworks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/aggregated/usableSubnetworks'
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
        createAPIRequest<Schema$ListUsableSubnetworksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUsableSubnetworksResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Aggregated$Usablesubnetworks$List
    extends StandardParameters {
    /**
     * Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID.
     */
    filter?: string;
    /**
     * The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     */
    pageSize?: number;
    /**
     * Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The parent project where subnetworks are usable. Specified in the format `projects/x`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    clusters: Resource$Projects$Locations$Clusters;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clusters = new Resource$Projects$Locations$Clusters(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * Returns configuration info about the Google Kubernetes Engine service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.getServerConfig({
     *     // The name (project and location) of the server config to get, specified in the format `projects/x/locations/x`.
     *     name: 'projects/my-project/locations/my-location',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "channels": [],
     *   //   "defaultClusterVersion": "my_defaultClusterVersion",
     *   //   "defaultImageType": "my_defaultImageType",
     *   //   "validImageTypes": [],
     *   //   "validMasterVersions": [],
     *   //   "validNodeVersions": [],
     *   //   "windowsVersionMaps": {}
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
    getServerConfig(
      params: Params$Resource$Projects$Locations$Getserverconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getServerConfig(
      params?: Params$Resource$Projects$Locations$Getserverconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ServerConfig>;
    getServerConfig(
      params: Params$Resource$Projects$Locations$Getserverconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getServerConfig(
      params: Params$Resource$Projects$Locations$Getserverconfig,
      options: MethodOptions | BodyResponseCallback<Schema$ServerConfig>,
      callback: BodyResponseCallback<Schema$ServerConfig>
    ): void;
    getServerConfig(
      params: Params$Resource$Projects$Locations$Getserverconfig,
      callback: BodyResponseCallback<Schema$ServerConfig>
    ): void;
    getServerConfig(callback: BodyResponseCallback<Schema$ServerConfig>): void;
    getServerConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Getserverconfig
        | BodyResponseCallback<Schema$ServerConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServerConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServerConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ServerConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Getserverconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Getserverconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/serverConfig').replace(
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
        createAPIRequest<Schema$ServerConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServerConfig>(parameters);
      }
    }

    /**
     * Fetches locations that offer Google Kubernetes Engine.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.list({
     *     // Required. Contains the name of the resource requested. Specified in the format `projects/x`.
     *     parent: 'projects/my-project',
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

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Getserverconfig
    extends StandardParameters {
    /**
     * The name (project and location) of the server config to get, specified in the format `projects/x/locations/x`.
     */
    name?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Required. Contains the name of the resource requested. Specified in the format `projects/x`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Clusters {
    context: APIRequestContext;
    nodePools: Resource$Projects$Locations$Clusters$Nodepools;
    wellKnown: Resource$Projects$Locations$Clusters$WellKnown;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.nodePools = new Resource$Projects$Locations$Clusters$Nodepools(
        this.context
      );
      this.wellKnown = new Resource$Projects$Locations$Clusters$WellKnown(
        this.context
      );
    }

    /**
     * Completes master IP rotation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.completeIpRotation({
     *     // The name (project, location, cluster id) of the cluster to complete IP rotation. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    completeIpRotation(
      params: Params$Resource$Projects$Locations$Clusters$Completeiprotation,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    completeIpRotation(
      params?: Params$Resource$Projects$Locations$Clusters$Completeiprotation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    completeIpRotation(
      params: Params$Resource$Projects$Locations$Clusters$Completeiprotation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    completeIpRotation(
      params: Params$Resource$Projects$Locations$Clusters$Completeiprotation,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    completeIpRotation(
      params: Params$Resource$Projects$Locations$Clusters$Completeiprotation,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    completeIpRotation(callback: BodyResponseCallback<Schema$Operation>): void;
    completeIpRotation(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Completeiprotation
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
        {}) as Params$Resource$Projects$Locations$Clusters$Completeiprotation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Completeiprotation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:completeIpRotation').replace(
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
     * Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.create({
     *     // The parent (project and location) where the cluster will be created. Specified in the format `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cluster": {},
     *       //   "parent": "my_parent",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Locations$Clusters$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Clusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Create
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
        {}) as Params$Resource$Projects$Locations$Clusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/clusters').replace(
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
     * Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.delete({
     *     // Required. Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Locations$Clusters$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Clusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Delete
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
        {}) as Params$Resource$Projects$Locations$Clusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets the details for a specific cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.get({
     *     // Required. Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "addonsConfig": {},
     *   //   "authenticatorGroupsConfig": {},
     *   //   "autopilot": {},
     *   //   "autoscaling": {},
     *   //   "binaryAuthorization": {},
     *   //   "clusterIpv4Cidr": "my_clusterIpv4Cidr",
     *   //   "clusterTelemetry": {},
     *   //   "conditions": [],
     *   //   "confidentialNodes": {},
     *   //   "createTime": "my_createTime",
     *   //   "currentMasterVersion": "my_currentMasterVersion",
     *   //   "currentNodeCount": 0,
     *   //   "currentNodeVersion": "my_currentNodeVersion",
     *   //   "databaseEncryption": {},
     *   //   "defaultMaxPodsConstraint": {},
     *   //   "description": "my_description",
     *   //   "enableKubernetesAlpha": false,
     *   //   "enableTpu": false,
     *   //   "endpoint": "my_endpoint",
     *   //   "expireTime": "my_expireTime",
     *   //   "id": "my_id",
     *   //   "initialClusterVersion": "my_initialClusterVersion",
     *   //   "initialNodeCount": 0,
     *   //   "instanceGroupUrls": [],
     *   //   "ipAllocationPolicy": {},
     *   //   "labelFingerprint": "my_labelFingerprint",
     *   //   "legacyAbac": {},
     *   //   "location": "my_location",
     *   //   "locations": [],
     *   //   "loggingService": "my_loggingService",
     *   //   "maintenancePolicy": {},
     *   //   "master": {},
     *   //   "masterAuth": {},
     *   //   "masterAuthorizedNetworksConfig": {},
     *   //   "masterIpv4CidrBlock": "my_masterIpv4CidrBlock",
     *   //   "monitoringService": "my_monitoringService",
     *   //   "name": "my_name",
     *   //   "network": "my_network",
     *   //   "networkConfig": {},
     *   //   "networkPolicy": {},
     *   //   "nodeConfig": {},
     *   //   "nodeIpv4CidrSize": 0,
     *   //   "nodePoolDefaults": {},
     *   //   "nodePools": [],
     *   //   "notificationConfig": {},
     *   //   "podSecurityPolicyConfig": {},
     *   //   "privateCluster": false,
     *   //   "privateClusterConfig": {},
     *   //   "releaseChannel": {},
     *   //   "resourceLabels": {},
     *   //   "resourceUsageExportConfig": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "servicesIpv4Cidr": "my_servicesIpv4Cidr",
     *   //   "shieldedNodes": {},
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "subnetwork": "my_subnetwork",
     *   //   "tpuConfig": {},
     *   //   "tpuIpv4CidrBlock": "my_tpuIpv4CidrBlock",
     *   //   "verticalPodAutoscaling": {},
     *   //   "workloadCertificates": {},
     *   //   "workloadIdentityConfig": {},
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Locations$Clusters$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Clusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Cluster>;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Cluster>,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Get,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$Cluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Get
        | BodyResponseCallback<Schema$Cluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Cluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Cluster>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Cluster> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
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
        createAPIRequest<Schema$Cluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Cluster>(parameters);
      }
    }

    /**
     * Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.getJwks({
     *     // The cluster (project, location, cluster id) to get keys for. Specified in the format `projects/x/locations/x/clusters/x`.
     *     parent: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cacheHeader": {},
     *   //   "keys": []
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
    getJwks(
      params: Params$Resource$Projects$Locations$Clusters$Getjwks,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getJwks(
      params?: Params$Resource$Projects$Locations$Clusters$Getjwks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetJSONWebKeysResponse>;
    getJwks(
      params: Params$Resource$Projects$Locations$Clusters$Getjwks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getJwks(
      params: Params$Resource$Projects$Locations$Clusters$Getjwks,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetJSONWebKeysResponse>,
      callback: BodyResponseCallback<Schema$GetJSONWebKeysResponse>
    ): void;
    getJwks(
      params: Params$Resource$Projects$Locations$Clusters$Getjwks,
      callback: BodyResponseCallback<Schema$GetJSONWebKeysResponse>
    ): void;
    getJwks(
      callback: BodyResponseCallback<Schema$GetJSONWebKeysResponse>
    ): void;
    getJwks(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Getjwks
        | BodyResponseCallback<Schema$GetJSONWebKeysResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetJSONWebKeysResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetJSONWebKeysResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetJSONWebKeysResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Getjwks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Getjwks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/jwks').replace(
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
        createAPIRequest<Schema$GetJSONWebKeysResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetJSONWebKeysResponse>(parameters);
      }
    }

    /**
     * Lists all clusters owned by a project in either the specified zone or all zones.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.list({
     *     // The parent (project and location) where the clusters will be listed. Specified in the format `projects/x/locations/x`. Location "-" matches all zones and all regions.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusters": [],
     *   //   "missingZones": []
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
      params: Params$Resource$Projects$Locations$Clusters$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Clusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListClustersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Clusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$List,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListClustersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$List
        | BodyResponseCallback<Schema$ListClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListClustersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/clusters').replace(
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
        createAPIRequest<Schema$ListClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListClustersResponse>(parameters);
      }
    }

    /**
     * Sets the addons for a specific cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.setAddons({
     *     // The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addonsConfig": {},
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setAddons(
      params: Params$Resource$Projects$Locations$Clusters$Setaddons,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setAddons(
      params?: Params$Resource$Projects$Locations$Clusters$Setaddons,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setAddons(
      params: Params$Resource$Projects$Locations$Clusters$Setaddons,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setAddons(
      params: Params$Resource$Projects$Locations$Clusters$Setaddons,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setAddons(
      params: Params$Resource$Projects$Locations$Clusters$Setaddons,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setAddons(callback: BodyResponseCallback<Schema$Operation>): void;
    setAddons(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setaddons
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
        {}) as Params$Resource$Projects$Locations$Clusters$Setaddons;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Setaddons;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setAddons').replace(
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
     * Enables or disables the ABAC authorization mechanism on a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.setLegacyAbac({
     *     // The name (project, location, cluster id) of the cluster to set legacy abac. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "enabled": false,
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setLegacyAbac(
      params: Params$Resource$Projects$Locations$Clusters$Setlegacyabac,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setLegacyAbac(
      params?: Params$Resource$Projects$Locations$Clusters$Setlegacyabac,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setLegacyAbac(
      params: Params$Resource$Projects$Locations$Clusters$Setlegacyabac,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setLegacyAbac(
      params: Params$Resource$Projects$Locations$Clusters$Setlegacyabac,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLegacyAbac(
      params: Params$Resource$Projects$Locations$Clusters$Setlegacyabac,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLegacyAbac(callback: BodyResponseCallback<Schema$Operation>): void;
    setLegacyAbac(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setlegacyabac
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
        {}) as Params$Resource$Projects$Locations$Clusters$Setlegacyabac;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Setlegacyabac;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setLegacyAbac').replace(
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
     * Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.setLocations({
     *     // The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "locations": [],
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setLocations(
      params: Params$Resource$Projects$Locations$Clusters$Setlocations,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setLocations(
      params?: Params$Resource$Projects$Locations$Clusters$Setlocations,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setLocations(
      params: Params$Resource$Projects$Locations$Clusters$Setlocations,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setLocations(
      params: Params$Resource$Projects$Locations$Clusters$Setlocations,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLocations(
      params: Params$Resource$Projects$Locations$Clusters$Setlocations,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLocations(callback: BodyResponseCallback<Schema$Operation>): void;
    setLocations(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setlocations
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
        {}) as Params$Resource$Projects$Locations$Clusters$Setlocations;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Setlocations;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setLocations').replace(
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
     * Sets the logging service for a specific cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.setLogging({
     *     // The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "loggingService": "my_loggingService",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setLogging(
      params: Params$Resource$Projects$Locations$Clusters$Setlogging,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setLogging(
      params?: Params$Resource$Projects$Locations$Clusters$Setlogging,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setLogging(
      params: Params$Resource$Projects$Locations$Clusters$Setlogging,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setLogging(
      params: Params$Resource$Projects$Locations$Clusters$Setlogging,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLogging(
      params: Params$Resource$Projects$Locations$Clusters$Setlogging,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLogging(callback: BodyResponseCallback<Schema$Operation>): void;
    setLogging(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setlogging
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
        {}) as Params$Resource$Projects$Locations$Clusters$Setlogging;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Setlogging;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setLogging').replace(
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
     * Sets the maintenance policy for a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.setMaintenancePolicy({
     *     // The name (project, location, cluster id) of the cluster to set maintenance policy. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "maintenancePolicy": {},
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setMaintenancePolicy(
      params: Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setMaintenancePolicy(
      params?: Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setMaintenancePolicy(
      params: Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setMaintenancePolicy(
      params: Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMaintenancePolicy(
      params: Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMaintenancePolicy(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMaintenancePolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy
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
        {}) as Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setMaintenancePolicy').replace(
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
     * Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.setMasterAuth({
     *     // The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": "my_action",
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "update": {},
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setMasterAuth(
      params: Params$Resource$Projects$Locations$Clusters$Setmasterauth,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setMasterAuth(
      params?: Params$Resource$Projects$Locations$Clusters$Setmasterauth,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setMasterAuth(
      params: Params$Resource$Projects$Locations$Clusters$Setmasterauth,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setMasterAuth(
      params: Params$Resource$Projects$Locations$Clusters$Setmasterauth,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMasterAuth(
      params: Params$Resource$Projects$Locations$Clusters$Setmasterauth,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMasterAuth(callback: BodyResponseCallback<Schema$Operation>): void;
    setMasterAuth(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setmasterauth
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
        {}) as Params$Resource$Projects$Locations$Clusters$Setmasterauth;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Setmasterauth;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setMasterAuth').replace(
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
     * Sets the monitoring service for a specific cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.setMonitoring({
     *     // The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "monitoringService": "my_monitoringService",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setMonitoring(
      params: Params$Resource$Projects$Locations$Clusters$Setmonitoring,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setMonitoring(
      params?: Params$Resource$Projects$Locations$Clusters$Setmonitoring,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setMonitoring(
      params: Params$Resource$Projects$Locations$Clusters$Setmonitoring,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setMonitoring(
      params: Params$Resource$Projects$Locations$Clusters$Setmonitoring,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMonitoring(
      params: Params$Resource$Projects$Locations$Clusters$Setmonitoring,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMonitoring(callback: BodyResponseCallback<Schema$Operation>): void;
    setMonitoring(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setmonitoring
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
        {}) as Params$Resource$Projects$Locations$Clusters$Setmonitoring;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Setmonitoring;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setMonitoring').replace(
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
     * Enables or disables Network Policy for a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.setNetworkPolicy({
     *     // The name (project, location, cluster id) of the cluster to set networking policy. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "networkPolicy": {},
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setNetworkPolicy(
      params: Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setNetworkPolicy(
      params?: Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setNetworkPolicy(
      params: Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setNetworkPolicy(
      params: Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setNetworkPolicy(
      params: Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setNetworkPolicy(callback: BodyResponseCallback<Schema$Operation>): void;
    setNetworkPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy
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
        {}) as Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setNetworkPolicy').replace(
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
     * Sets labels on a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.setResourceLabels({
     *     // The name (project, location, cluster id) of the cluster to set labels. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "labelFingerprint": "my_labelFingerprint",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "resourceLabels": {},
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setResourceLabels(
      params: Params$Resource$Projects$Locations$Clusters$Setresourcelabels,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setResourceLabels(
      params?: Params$Resource$Projects$Locations$Clusters$Setresourcelabels,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setResourceLabels(
      params: Params$Resource$Projects$Locations$Clusters$Setresourcelabels,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setResourceLabels(
      params: Params$Resource$Projects$Locations$Clusters$Setresourcelabels,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setResourceLabels(
      params: Params$Resource$Projects$Locations$Clusters$Setresourcelabels,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setResourceLabels(callback: BodyResponseCallback<Schema$Operation>): void;
    setResourceLabels(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Setresourcelabels
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
        {}) as Params$Resource$Projects$Locations$Clusters$Setresourcelabels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Setresourcelabels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setResourceLabels').replace(
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
     * Starts master IP rotation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.startIpRotation({
     *     // The name (project, location, cluster id) of the cluster to start IP rotation. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "rotateCredentials": false,
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    startIpRotation(
      params: Params$Resource$Projects$Locations$Clusters$Startiprotation,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    startIpRotation(
      params?: Params$Resource$Projects$Locations$Clusters$Startiprotation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    startIpRotation(
      params: Params$Resource$Projects$Locations$Clusters$Startiprotation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    startIpRotation(
      params: Params$Resource$Projects$Locations$Clusters$Startiprotation,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startIpRotation(
      params: Params$Resource$Projects$Locations$Clusters$Startiprotation,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startIpRotation(callback: BodyResponseCallback<Schema$Operation>): void;
    startIpRotation(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Startiprotation
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
        {}) as Params$Resource$Projects$Locations$Clusters$Startiprotation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Startiprotation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:startIpRotation').replace(
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
     * Updates the settings for a specific cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.update({
     *     // The name (project, location, cluster) of the cluster to update. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "update": {},
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Locations$Clusters$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Projects$Locations$Clusters$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Projects$Locations$Clusters$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Clusters$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Clusters$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Update
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
        {}) as Params$Resource$Projects$Locations$Clusters$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

    /**
     * Updates the master for a specific cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.updateMaster({
     *     // The name (project, location, cluster) of the cluster to update. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "masterVersion": "my_masterVersion",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    updateMaster(
      params: Params$Resource$Projects$Locations$Clusters$Updatemaster,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateMaster(
      params?: Params$Resource$Projects$Locations$Clusters$Updatemaster,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateMaster(
      params: Params$Resource$Projects$Locations$Clusters$Updatemaster,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateMaster(
      params: Params$Resource$Projects$Locations$Clusters$Updatemaster,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateMaster(
      params: Params$Resource$Projects$Locations$Clusters$Updatemaster,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateMaster(callback: BodyResponseCallback<Schema$Operation>): void;
    updateMaster(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Updatemaster
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
        {}) as Params$Resource$Projects$Locations$Clusters$Updatemaster;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Updatemaster;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:updateMaster').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Clusters$Completeiprotation
    extends StandardParameters {
    /**
     * The name (project, location, cluster id) of the cluster to complete IP rotation. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CompleteIPRotationRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Create
    extends StandardParameters {
    /**
     * The parent (project and location) where the cluster will be created. Specified in the format `projects/x/locations/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateClusterRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Delete
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Get
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Getjwks
    extends StandardParameters {
    /**
     * The cluster (project, location, cluster id) to get keys for. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$List
    extends StandardParameters {
    /**
     * The parent (project and location) where the clusters will be listed. Specified in the format `projects/x/locations/x`. Location "-" matches all zones and all regions.
     */
    parent?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setaddons
    extends StandardParameters {
    /**
     * The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetAddonsConfigRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setlegacyabac
    extends StandardParameters {
    /**
     * The name (project, location, cluster id) of the cluster to set legacy abac. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLegacyAbacRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setlocations
    extends StandardParameters {
    /**
     * The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLocationsRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setlogging
    extends StandardParameters {
    /**
     * The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLoggingServiceRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setmaintenancepolicy
    extends StandardParameters {
    /**
     * The name (project, location, cluster id) of the cluster to set maintenance policy. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMaintenancePolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setmasterauth
    extends StandardParameters {
    /**
     * The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMasterAuthRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setmonitoring
    extends StandardParameters {
    /**
     * The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMonitoringServiceRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setnetworkpolicy
    extends StandardParameters {
    /**
     * The name (project, location, cluster id) of the cluster to set networking policy. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNetworkPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Setresourcelabels
    extends StandardParameters {
    /**
     * The name (project, location, cluster id) of the cluster to set labels. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLabelsRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Startiprotation
    extends StandardParameters {
    /**
     * The name (project, location, cluster id) of the cluster to start IP rotation. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartIPRotationRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Update
    extends StandardParameters {
    /**
     * The name (project, location, cluster) of the cluster to update. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateClusterRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Updatemaster
    extends StandardParameters {
    /**
     * The name (project, location, cluster) of the cluster to update. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateMasterRequest;
  }

  export class Resource$Projects$Locations$Clusters$Nodepools {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a node pool for a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.nodePools.create({
     *     // The parent (project, location, cluster id) where the node pool will be created. Specified in the format `projects/x/locations/x/clusters/x`.
     *     parent: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "nodePool": {},
     *       //   "parent": "my_parent",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Create
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
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/nodePools').replace(
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
     * Deletes a node pool from a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.nodePools.delete({
     *     // Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster/nodePools/my-nodePool',
     *     // Required. Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
     *     nodePoolId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Delete
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
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieves the requested node pool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.nodePools.get({
     *     // Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster/nodePools/my-nodePool',
     *     // Required. Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
     *     nodePoolId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoscaling": {},
     *   //   "conditions": [],
     *   //   "config": {},
     *   //   "initialNodeCount": 0,
     *   //   "instanceGroupUrls": [],
     *   //   "locations": [],
     *   //   "management": {},
     *   //   "maxPodsConstraint": {},
     *   //   "name": "my_name",
     *   //   "networkConfig": {},
     *   //   "podIpv4CidrSize": 0,
     *   //   "selfLink": "my_selfLink",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "upgradeSettings": {},
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
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NodePool>;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NodePool>,
      callback: BodyResponseCallback<Schema$NodePool>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Get,
      callback: BodyResponseCallback<Schema$NodePool>
    ): void;
    get(callback: BodyResponseCallback<Schema$NodePool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Get
        | BodyResponseCallback<Schema$NodePool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NodePool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NodePool>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$NodePool> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
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
        createAPIRequest<Schema$NodePool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NodePool>(parameters);
      }
    }

    /**
     * Lists the node pools for a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.nodePools.list({
     *     // Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     *     clusterId: 'placeholder-value',
     *     // The parent (project, location, cluster id) where the node pools will be listed. Specified in the format `projects/x/locations/x/clusters/x`.
     *     parent: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nodePools": []
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
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNodePoolsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNodePoolsResponse>,
      callback: BodyResponseCallback<Schema$ListNodePoolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$List,
      callback: BodyResponseCallback<Schema$ListNodePoolsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNodePoolsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$List
        | BodyResponseCallback<Schema$ListNodePoolsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNodePoolsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNodePoolsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNodePoolsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Nodepools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/nodePools').replace(
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
        createAPIRequest<Schema$ListNodePoolsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNodePoolsResponse>(parameters);
      }
    }

    /**
     * Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.nodePools.rollback({
     *     // The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster/nodePools/my-nodePool',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "nodePoolId": "my_nodePoolId",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    rollback(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rollback(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    rollback(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rollback(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(callback: BodyResponseCallback<Schema$Operation>): void;
    rollback(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback
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
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:rollback').replace(
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
     * Sets the autoscaling settings of a specific node pool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *     await container.projects.locations.clusters.nodePools.setAutoscaling({
     *       // The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     *       name: 'projects/my-project/locations/my-location/clusters/my-cluster/nodePools/my-nodePool',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "autoscaling": {},
     *         //   "clusterId": "my_clusterId",
     *         //   "name": "my_name",
     *         //   "nodePoolId": "my_nodePoolId",
     *         //   "projectId": "my_projectId",
     *         //   "zone": "my_zone"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setAutoscaling(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setAutoscaling(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setAutoscaling(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setAutoscaling(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setAutoscaling(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setAutoscaling(callback: BodyResponseCallback<Schema$Operation>): void;
    setAutoscaling(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling
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
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setAutoscaling').replace(
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
     * Sets the NodeManagement options for a node pool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *     await container.projects.locations.clusters.nodePools.setManagement({
     *       // The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     *       name: 'projects/my-project/locations/my-location/clusters/my-cluster/nodePools/my-nodePool',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "clusterId": "my_clusterId",
     *         //   "management": {},
     *         //   "name": "my_name",
     *         //   "nodePoolId": "my_nodePoolId",
     *         //   "projectId": "my_projectId",
     *         //   "zone": "my_zone"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setManagement(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setManagement(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setManagement(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setManagement(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setManagement(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setManagement(callback: BodyResponseCallback<Schema$Operation>): void;
    setManagement(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement
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
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setManagement').replace(
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
     * SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.nodePools.setSize({
     *     // The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster/nodePools/my-nodePool',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "nodeCount": 0,
     *       //   "nodePoolId": "my_nodePoolId",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setSize(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setSize(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setSize(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setSize(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setSize(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setSize(callback: BodyResponseCallback<Schema$Operation>): void;
    setSize(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize
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
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setSize').replace(
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
     * Updates the version and/or image type of a specific node pool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.clusters.nodePools.update({
     *     // The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster/nodePools/my-nodePool',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "imageType": "my_imageType",
     *       //   "kubeletConfig": {},
     *       //   "labels": {},
     *       //   "linuxNodeConfig": {},
     *       //   "locations": [],
     *       //   "name": "my_name",
     *       //   "nodePoolId": "my_nodePoolId",
     *       //   "nodeVersion": "my_nodeVersion",
     *       //   "projectId": "my_projectId",
     *       //   "tags": {},
     *       //   "taints": {},
     *       //   "upgradeSettings": {},
     *       //   "workloadMetadataConfig": {},
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Projects$Locations$Clusters$Nodepools$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Clusters$Nodepools$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Nodepools$Update
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
        {}) as Params$Resource$Projects$Locations$Clusters$Nodepools$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Nodepools$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Create
    extends StandardParameters {
    /**
     * The parent (project, location, cluster id) where the node pool will be created. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateNodePoolRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Delete
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string;
    /**
     * Required. Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Get
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string;
    /**
     * Required. Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$List
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     */
    clusterId?: string;
    /**
     * The parent (project, location, cluster id) where the node pools will be listed. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    parent?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Rollback
    extends StandardParameters {
    /**
     * The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackNodePoolUpgradeRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Setautoscaling
    extends StandardParameters {
    /**
     * The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNodePoolAutoscalingRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Setmanagement
    extends StandardParameters {
    /**
     * The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNodePoolManagementRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Setsize
    extends StandardParameters {
    /**
     * The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNodePoolSizeRequest;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Nodepools$Update
    extends StandardParameters {
    /**
     * The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateNodePoolRequest;
  }

  export class Resource$Projects$Locations$Clusters$WellKnown {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res =
     *     (await container.projects.locations.clusters.well) -
     *     known.getOpenid -
     *     configuration({
     *       // The cluster (project, location, cluster id) to get the discovery document for. Specified in the format `projects/x/locations/x/clusters/x`.
     *       parent: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cacheHeader": {},
     *   //   "claims_supported": [],
     *   //   "grant_types": [],
     *   //   "id_token_signing_alg_values_supported": [],
     *   //   "issuer": "my_issuer",
     *   //   "jwks_uri": "my_jwks_uri",
     *   //   "response_types_supported": [],
     *   //   "subject_types_supported": []
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
    getOpenidConfiguration(
      params: Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getOpenidConfiguration(
      params?: Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetOpenIDConfigResponse>;
    getOpenidConfiguration(
      params: Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getOpenidConfiguration(
      params: Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetOpenIDConfigResponse>,
      callback: BodyResponseCallback<Schema$GetOpenIDConfigResponse>
    ): void;
    getOpenidConfiguration(
      params: Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration,
      callback: BodyResponseCallback<Schema$GetOpenIDConfigResponse>
    ): void;
    getOpenidConfiguration(
      callback: BodyResponseCallback<Schema$GetOpenIDConfigResponse>
    ): void;
    getOpenidConfiguration(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration
        | BodyResponseCallback<Schema$GetOpenIDConfigResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetOpenIDConfigResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetOpenIDConfigResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetOpenIDConfigResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/.well-known/openid-configuration'
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
        createAPIRequest<Schema$GetOpenIDConfigResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetOpenIDConfigResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Clusters$WellKnown$Getopenidconfiguration
    extends StandardParameters {
    /**
     * The cluster (project, location, cluster id) to get the discovery document for. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancels the specified operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.operations.cancel({
     *     // The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/x/locations/x/operations/x`.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "operationId": "my_operationId",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
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

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:cancel').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the specified operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.operations.get({
     *     // The name (project, location, operation id) of the operation to get. Specified in the format `projects/x/locations/x/operations/x`.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *     // Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     *     operationId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists all operations in a project in the specified zone or all zones.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.locations.operations.list({
     *     // The parent (project and location) where the operations will be listed. Specified in the format `projects/x/locations/x`. Location "-" matches all zones and all regions.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "missingZones": [],
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

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/operations').replace(
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
     * The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/x/locations/x/operations/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name (project, location, operation id) of the operation to get. Specified in the format `projects/x/locations/x/operations/x`.
     */
    name?: string;
    /**
     * Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     */
    operationId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * The parent (project and location) where the operations will be listed. Specified in the format `projects/x/locations/x`. Location "-" matches all zones and all regions.
     */
    parent?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
  }

  export class Resource$Projects$Zones {
    context: APIRequestContext;
    clusters: Resource$Projects$Zones$Clusters;
    operations: Resource$Projects$Zones$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clusters = new Resource$Projects$Zones$Clusters(this.context);
      this.operations = new Resource$Projects$Zones$Operations(this.context);
    }

    /**
     * Returns configuration info about the Google Kubernetes Engine service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.getServerconfig({
     *     // The name (project and location) of the server config to get, specified in the format `projects/x/locations/x`.
     *     name: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "channels": [],
     *   //   "defaultClusterVersion": "my_defaultClusterVersion",
     *   //   "defaultImageType": "my_defaultImageType",
     *   //   "validImageTypes": [],
     *   //   "validMasterVersions": [],
     *   //   "validNodeVersions": [],
     *   //   "windowsVersionMaps": {}
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
    getServerconfig(
      params: Params$Resource$Projects$Zones$Getserverconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getServerconfig(
      params?: Params$Resource$Projects$Zones$Getserverconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ServerConfig>;
    getServerconfig(
      params: Params$Resource$Projects$Zones$Getserverconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getServerconfig(
      params: Params$Resource$Projects$Zones$Getserverconfig,
      options: MethodOptions | BodyResponseCallback<Schema$ServerConfig>,
      callback: BodyResponseCallback<Schema$ServerConfig>
    ): void;
    getServerconfig(
      params: Params$Resource$Projects$Zones$Getserverconfig,
      callback: BodyResponseCallback<Schema$ServerConfig>
    ): void;
    getServerconfig(callback: BodyResponseCallback<Schema$ServerConfig>): void;
    getServerconfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Getserverconfig
        | BodyResponseCallback<Schema$ServerConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServerConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServerConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ServerConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Getserverconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Getserverconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/serverconfig'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone'],
        pathParams: ['projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ServerConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServerConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Zones$Getserverconfig
    extends StandardParameters {
    /**
     * The name (project and location) of the server config to get, specified in the format `projects/x/locations/x`.
     */
    name?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }

  export class Resource$Projects$Zones$Clusters {
    context: APIRequestContext;
    nodePools: Resource$Projects$Zones$Clusters$Nodepools;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.nodePools = new Resource$Projects$Zones$Clusters$Nodepools(
        this.context
      );
    }

    /**
     * Sets the addons for a specific cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.addons({
     *     // Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addonsConfig": {},
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    addons(
      params: Params$Resource$Projects$Zones$Clusters$Addons,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addons(
      params?: Params$Resource$Projects$Zones$Clusters$Addons,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    addons(
      params: Params$Resource$Projects$Zones$Clusters$Addons,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addons(
      params: Params$Resource$Projects$Zones$Clusters$Addons,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addons(
      params: Params$Resource$Projects$Zones$Clusters$Addons,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addons(callback: BodyResponseCallback<Schema$Operation>): void;
    addons(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Addons
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
        {}) as Params$Resource$Projects$Zones$Clusters$Addons;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Addons;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Completes master IP rotation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.completeIpRotation({
     *     // Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    completeIpRotation(
      params: Params$Resource$Projects$Zones$Clusters$Completeiprotation,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    completeIpRotation(
      params?: Params$Resource$Projects$Zones$Clusters$Completeiprotation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    completeIpRotation(
      params: Params$Resource$Projects$Zones$Clusters$Completeiprotation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    completeIpRotation(
      params: Params$Resource$Projects$Zones$Clusters$Completeiprotation,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    completeIpRotation(
      params: Params$Resource$Projects$Zones$Clusters$Completeiprotation,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    completeIpRotation(callback: BodyResponseCallback<Schema$Operation>): void;
    completeIpRotation(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Completeiprotation
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
        {}) as Params$Resource$Projects$Zones$Clusters$Completeiprotation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Zones$Clusters$Completeiprotation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.create({
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cluster": {},
     *       //   "parent": "my_parent",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Zones$Clusters$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Zones$Clusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Zones$Clusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Zones$Clusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Zones$Clusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Create
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
        {}) as Params$Resource$Projects$Zones$Clusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone'],
        pathParams: ['projectId', 'zone'],
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
     * Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.delete({
     *     // Required. Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Zones$Clusters$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Zones$Clusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Zones$Clusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Zones$Clusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Zones$Clusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Delete
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
        {}) as Params$Resource$Projects$Zones$Clusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Gets the details for a specific cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.get({
     *     // Required. Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/x/locations/x/clusters/x`.
     *     name: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "addonsConfig": {},
     *   //   "authenticatorGroupsConfig": {},
     *   //   "autopilot": {},
     *   //   "autoscaling": {},
     *   //   "binaryAuthorization": {},
     *   //   "clusterIpv4Cidr": "my_clusterIpv4Cidr",
     *   //   "clusterTelemetry": {},
     *   //   "conditions": [],
     *   //   "confidentialNodes": {},
     *   //   "createTime": "my_createTime",
     *   //   "currentMasterVersion": "my_currentMasterVersion",
     *   //   "currentNodeCount": 0,
     *   //   "currentNodeVersion": "my_currentNodeVersion",
     *   //   "databaseEncryption": {},
     *   //   "defaultMaxPodsConstraint": {},
     *   //   "description": "my_description",
     *   //   "enableKubernetesAlpha": false,
     *   //   "enableTpu": false,
     *   //   "endpoint": "my_endpoint",
     *   //   "expireTime": "my_expireTime",
     *   //   "id": "my_id",
     *   //   "initialClusterVersion": "my_initialClusterVersion",
     *   //   "initialNodeCount": 0,
     *   //   "instanceGroupUrls": [],
     *   //   "ipAllocationPolicy": {},
     *   //   "labelFingerprint": "my_labelFingerprint",
     *   //   "legacyAbac": {},
     *   //   "location": "my_location",
     *   //   "locations": [],
     *   //   "loggingService": "my_loggingService",
     *   //   "maintenancePolicy": {},
     *   //   "master": {},
     *   //   "masterAuth": {},
     *   //   "masterAuthorizedNetworksConfig": {},
     *   //   "masterIpv4CidrBlock": "my_masterIpv4CidrBlock",
     *   //   "monitoringService": "my_monitoringService",
     *   //   "name": "my_name",
     *   //   "network": "my_network",
     *   //   "networkConfig": {},
     *   //   "networkPolicy": {},
     *   //   "nodeConfig": {},
     *   //   "nodeIpv4CidrSize": 0,
     *   //   "nodePoolDefaults": {},
     *   //   "nodePools": [],
     *   //   "notificationConfig": {},
     *   //   "podSecurityPolicyConfig": {},
     *   //   "privateCluster": false,
     *   //   "privateClusterConfig": {},
     *   //   "releaseChannel": {},
     *   //   "resourceLabels": {},
     *   //   "resourceUsageExportConfig": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "servicesIpv4Cidr": "my_servicesIpv4Cidr",
     *   //   "shieldedNodes": {},
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "subnetwork": "my_subnetwork",
     *   //   "tpuConfig": {},
     *   //   "tpuIpv4CidrBlock": "my_tpuIpv4CidrBlock",
     *   //   "verticalPodAutoscaling": {},
     *   //   "workloadCertificates": {},
     *   //   "workloadIdentityConfig": {},
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Zones$Clusters$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Zones$Clusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Cluster>;
    get(
      params: Params$Resource$Projects$Zones$Clusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Zones$Clusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Cluster>,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(
      params: Params$Resource$Projects$Zones$Clusters$Get,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$Cluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Get
        | BodyResponseCallback<Schema$Cluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Cluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Cluster>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Cluster> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Cluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Cluster>(parameters);
      }
    }

    /**
     * Enables or disables the ABAC authorization mechanism on a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.legacyAbac({
     *     // Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "enabled": false,
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    legacyAbac(
      params: Params$Resource$Projects$Zones$Clusters$Legacyabac,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    legacyAbac(
      params?: Params$Resource$Projects$Zones$Clusters$Legacyabac,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    legacyAbac(
      params: Params$Resource$Projects$Zones$Clusters$Legacyabac,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    legacyAbac(
      params: Params$Resource$Projects$Zones$Clusters$Legacyabac,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    legacyAbac(
      params: Params$Resource$Projects$Zones$Clusters$Legacyabac,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    legacyAbac(callback: BodyResponseCallback<Schema$Operation>): void;
    legacyAbac(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Legacyabac
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
        {}) as Params$Resource$Projects$Zones$Clusters$Legacyabac;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Legacyabac;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Lists all clusters owned by a project in either the specified zone or all zones.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.list({
     *     // The parent (project and location) where the clusters will be listed. Specified in the format `projects/x/locations/x`. Location "-" matches all zones and all regions.
     *     parent: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusters": [],
     *   //   "missingZones": []
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
      params: Params$Resource$Projects$Zones$Clusters$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Zones$Clusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListClustersResponse>;
    list(
      params: Params$Resource$Projects$Zones$Clusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Zones$Clusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Zones$Clusters$List,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListClustersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$List
        | BodyResponseCallback<Schema$ListClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListClustersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone'],
        pathParams: ['projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListClustersResponse>(parameters);
      }
    }

    /**
     * Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.locations({
     *     // Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "locations": [],
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    locations(
      params: Params$Resource$Projects$Zones$Clusters$Locations,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    locations(
      params?: Params$Resource$Projects$Zones$Clusters$Locations,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    locations(
      params: Params$Resource$Projects$Zones$Clusters$Locations,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    locations(
      params: Params$Resource$Projects$Zones$Clusters$Locations,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    locations(
      params: Params$Resource$Projects$Zones$Clusters$Locations,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    locations(callback: BodyResponseCallback<Schema$Operation>): void;
    locations(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Locations
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
        {}) as Params$Resource$Projects$Zones$Clusters$Locations;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Locations;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Sets the logging service for a specific cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.logging({
     *     // Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "loggingService": "my_loggingService",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    logging(
      params: Params$Resource$Projects$Zones$Clusters$Logging,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    logging(
      params?: Params$Resource$Projects$Zones$Clusters$Logging,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    logging(
      params: Params$Resource$Projects$Zones$Clusters$Logging,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    logging(
      params: Params$Resource$Projects$Zones$Clusters$Logging,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    logging(
      params: Params$Resource$Projects$Zones$Clusters$Logging,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    logging(callback: BodyResponseCallback<Schema$Operation>): void;
    logging(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Logging
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
        {}) as Params$Resource$Projects$Zones$Clusters$Logging;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Logging;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Updates the master for a specific cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.master({
     *     // Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "masterVersion": "my_masterVersion",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    master(
      params: Params$Resource$Projects$Zones$Clusters$Master,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    master(
      params?: Params$Resource$Projects$Zones$Clusters$Master,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    master(
      params: Params$Resource$Projects$Zones$Clusters$Master,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    master(
      params: Params$Resource$Projects$Zones$Clusters$Master,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    master(
      params: Params$Resource$Projects$Zones$Clusters$Master,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    master(callback: BodyResponseCallback<Schema$Operation>): void;
    master(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Master
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
        {}) as Params$Resource$Projects$Zones$Clusters$Master;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Master;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Sets the monitoring service for a specific cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.monitoring({
     *     // Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "monitoringService": "my_monitoringService",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    monitoring(
      params: Params$Resource$Projects$Zones$Clusters$Monitoring,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    monitoring(
      params?: Params$Resource$Projects$Zones$Clusters$Monitoring,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    monitoring(
      params: Params$Resource$Projects$Zones$Clusters$Monitoring,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    monitoring(
      params: Params$Resource$Projects$Zones$Clusters$Monitoring,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    monitoring(
      params: Params$Resource$Projects$Zones$Clusters$Monitoring,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    monitoring(callback: BodyResponseCallback<Schema$Operation>): void;
    monitoring(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Monitoring
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
        {}) as Params$Resource$Projects$Zones$Clusters$Monitoring;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Monitoring;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Sets labels on a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.resourceLabels({
     *     // Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "labelFingerprint": "my_labelFingerprint",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "resourceLabels": {},
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    resourceLabels(
      params: Params$Resource$Projects$Zones$Clusters$Resourcelabels,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resourceLabels(
      params?: Params$Resource$Projects$Zones$Clusters$Resourcelabels,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    resourceLabels(
      params: Params$Resource$Projects$Zones$Clusters$Resourcelabels,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resourceLabels(
      params: Params$Resource$Projects$Zones$Clusters$Resourcelabels,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resourceLabels(
      params: Params$Resource$Projects$Zones$Clusters$Resourcelabels,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resourceLabels(callback: BodyResponseCallback<Schema$Operation>): void;
    resourceLabels(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Resourcelabels
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
        {}) as Params$Resource$Projects$Zones$Clusters$Resourcelabels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Resourcelabels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Sets the maintenance policy for a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.setMaintenancePolicy({
     *     // Required. The name of the cluster to update.
     *     clusterId: 'placeholder-value',
     *     // Required. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
     *     projectId: 'placeholder-value',
     *     // Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "maintenancePolicy": {},
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setMaintenancePolicy(
      params: Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setMaintenancePolicy(
      params?: Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setMaintenancePolicy(
      params: Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setMaintenancePolicy(
      params: Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMaintenancePolicy(
      params: Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMaintenancePolicy(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMaintenancePolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy
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
        {}) as Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.setMasterAuth({
     *     // Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": "my_action",
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "update": {},
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setMasterAuth(
      params: Params$Resource$Projects$Zones$Clusters$Setmasterauth,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setMasterAuth(
      params?: Params$Resource$Projects$Zones$Clusters$Setmasterauth,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setMasterAuth(
      params: Params$Resource$Projects$Zones$Clusters$Setmasterauth,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setMasterAuth(
      params: Params$Resource$Projects$Zones$Clusters$Setmasterauth,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMasterAuth(
      params: Params$Resource$Projects$Zones$Clusters$Setmasterauth,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMasterAuth(callback: BodyResponseCallback<Schema$Operation>): void;
    setMasterAuth(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Setmasterauth
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
        {}) as Params$Resource$Projects$Zones$Clusters$Setmasterauth;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Setmasterauth;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Enables or disables Network Policy for a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.setNetworkPolicy({
     *     // Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "networkPolicy": {},
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setNetworkPolicy(
      params: Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setNetworkPolicy(
      params?: Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setNetworkPolicy(
      params: Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setNetworkPolicy(
      params: Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setNetworkPolicy(
      params: Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setNetworkPolicy(callback: BodyResponseCallback<Schema$Operation>): void;
    setNetworkPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy
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
        {}) as Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Starts master IP rotation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.startIpRotation({
     *     // Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "rotateCredentials": false,
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    startIpRotation(
      params: Params$Resource$Projects$Zones$Clusters$Startiprotation,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    startIpRotation(
      params?: Params$Resource$Projects$Zones$Clusters$Startiprotation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    startIpRotation(
      params: Params$Resource$Projects$Zones$Clusters$Startiprotation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    startIpRotation(
      params: Params$Resource$Projects$Zones$Clusters$Startiprotation,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startIpRotation(
      params: Params$Resource$Projects$Zones$Clusters$Startiprotation,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startIpRotation(callback: BodyResponseCallback<Schema$Operation>): void;
    startIpRotation(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Startiprotation
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
        {}) as Params$Resource$Projects$Zones$Clusters$Startiprotation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Startiprotation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Updates the settings for a specific cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.update({
     *     // Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId",
     *       //   "update": {},
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Zones$Clusters$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Projects$Zones$Clusters$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Projects$Zones$Clusters$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Zones$Clusters$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Projects$Zones$Clusters$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Update
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
        {}) as Params$Resource$Projects$Zones$Clusters$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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

  export interface Params$Resource$Projects$Zones$Clusters$Addons
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetAddonsConfigRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Completeiprotation
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CompleteIPRotationRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Create
    extends StandardParameters {
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateClusterRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Delete
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Get
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    name?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Legacyabac
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLegacyAbacRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$List
    extends StandardParameters {
    /**
     * The parent (project and location) where the clusters will be listed. Specified in the format `projects/x/locations/x`. Location "-" matches all zones and all regions.
     */
    parent?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Locations
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLocationsRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Logging
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLoggingServiceRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Master
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateMasterRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Monitoring
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMonitoringServiceRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Resourcelabels
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetLabelsRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Setmaintenancepolicy
    extends StandardParameters {
    /**
     * Required. The name of the cluster to update.
     */
    clusterId?: string;
    /**
     * Required. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
     */
    projectId?: string;
    /**
     * Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMaintenancePolicyRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Setmasterauth
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetMasterAuthRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Setnetworkpolicy
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNetworkPolicyRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Startiprotation
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartIPRotationRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Update
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateClusterRequest;
  }

  export class Resource$Projects$Zones$Clusters$Nodepools {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Sets the autoscaling settings of a specific node pool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.nodePools.autoscaling({
     *     // Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     *     nodePoolId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autoscaling": {},
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "nodePoolId": "my_nodePoolId",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    autoscaling(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    autoscaling(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    autoscaling(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    autoscaling(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    autoscaling(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    autoscaling(callback: BodyResponseCallback<Schema$Operation>): void;
    autoscaling(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling
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
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
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
     * Creates a node pool for a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.nodePools.create({
     *     // Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "nodePool": {},
     *       //   "parent": "my_parent",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Create
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
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
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
     * Deletes a node pool from a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.nodePools.delete({
     *     // Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     *     name: 'placeholder-value',
     *     // Required. Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
     *     nodePoolId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Delete
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
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
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
     * Retrieves the requested node pool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.nodePools.get({
     *     // Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     *     name: 'placeholder-value',
     *     // Required. Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
     *     nodePoolId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoscaling": {},
     *   //   "conditions": [],
     *   //   "config": {},
     *   //   "initialNodeCount": 0,
     *   //   "instanceGroupUrls": [],
     *   //   "locations": [],
     *   //   "management": {},
     *   //   "maxPodsConstraint": {},
     *   //   "name": "my_name",
     *   //   "networkConfig": {},
     *   //   "podIpv4CidrSize": 0,
     *   //   "selfLink": "my_selfLink",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "upgradeSettings": {},
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
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NodePool>;
    get(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NodePool>,
      callback: BodyResponseCallback<Schema$NodePool>
    ): void;
    get(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Get,
      callback: BodyResponseCallback<Schema$NodePool>
    ): void;
    get(callback: BodyResponseCallback<Schema$NodePool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Get
        | BodyResponseCallback<Schema$NodePool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NodePool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NodePool>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$NodePool> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$NodePool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NodePool>(parameters);
      }
    }

    /**
     * Lists the node pools for a cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.nodePools.list({
     *     // Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     *     clusterId: 'placeholder-value',
     *     // The parent (project, location, cluster id) where the node pools will be listed. Specified in the format `projects/x/locations/x/clusters/x`.
     *     parent: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nodePools": []
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
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNodePoolsResponse>;
    list(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNodePoolsResponse>,
      callback: BodyResponseCallback<Schema$ListNodePoolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$List,
      callback: BodyResponseCallback<Schema$ListNodePoolsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNodePoolsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$List
        | BodyResponseCallback<Schema$ListNodePoolsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNodePoolsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNodePoolsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNodePoolsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId'],
        pathParams: ['clusterId', 'projectId', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListNodePoolsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNodePoolsResponse>(parameters);
      }
    }

    /**
     * Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.nodePools.rollback({
     *     // Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.
     *     nodePoolId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "nodePoolId": "my_nodePoolId",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    rollback(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rollback(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    rollback(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rollback(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(callback: BodyResponseCallback<Schema$Operation>): void;
    rollback(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback
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
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
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
     * Sets the NodeManagement options for a node pool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.nodePools.setManagement({
     *     // Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     *     nodePoolId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "management": {},
     *       //   "name": "my_name",
     *       //   "nodePoolId": "my_nodePoolId",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setManagement(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setManagement(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setManagement(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setManagement(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setManagement(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setManagement(callback: BodyResponseCallback<Schema$Operation>): void;
    setManagement(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement
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
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
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
     * SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.nodePools.setSize({
     *     // Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     *     nodePoolId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "name": "my_name",
     *       //   "nodeCount": 0,
     *       //   "nodePoolId": "my_nodePoolId",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
    setSize(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setSize(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setSize(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setSize(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setSize(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setSize(callback: BodyResponseCallback<Schema$Operation>): void;
    setSize(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize
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
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
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
     * Updates the version and/or image type of a specific node pool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.clusters.nodePools.update({
     *     // Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     *     clusterId: 'placeholder-value',
     *     // Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     *     nodePoolId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clusterId": "my_clusterId",
     *       //   "imageType": "my_imageType",
     *       //   "kubeletConfig": {},
     *       //   "labels": {},
     *       //   "linuxNodeConfig": {},
     *       //   "locations": [],
     *       //   "name": "my_name",
     *       //   "nodePoolId": "my_nodePoolId",
     *       //   "nodeVersion": "my_nodeVersion",
     *       //   "projectId": "my_projectId",
     *       //   "tags": {},
     *       //   "taints": {},
     *       //   "upgradeSettings": {},
     *       //   "workloadMetadataConfig": {},
     *       //   "zone": "my_zone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Projects$Zones$Clusters$Nodepools$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Projects$Zones$Clusters$Nodepools$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Clusters$Nodepools$Update
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
        {}) as Params$Resource$Projects$Zones$Clusters$Nodepools$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Clusters$Nodepools$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
        pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
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

  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Autoscaling
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNodePoolAutoscalingRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Create
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateNodePoolRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Delete
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string;
    /**
     * Required. Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Get
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/x/locations/x/clusters/x/nodePools/x`.
     */
    name?: string;
    /**
     * Required. Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$List
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     */
    clusterId?: string;
    /**
     * The parent (project, location, cluster id) where the node pools will be listed. Specified in the format `projects/x/locations/x/clusters/x`.
     */
    parent?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Rollback
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackNodePoolUpgradeRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Setmanagement
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNodePoolManagementRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Setsize
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetNodePoolSizeRequest;
  }
  export interface Params$Resource$Projects$Zones$Clusters$Nodepools$Update
    extends StandardParameters {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateNodePoolRequest;
  }

  export class Resource$Projects$Zones$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancels the specified operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.operations.cancel({
     *     // Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     *     operationId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "operationId": "my_operationId",
     *       //   "projectId": "my_projectId",
     *       //   "zone": "my_zone"
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
    cancel(
      params: Params$Resource$Projects$Zones$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Zones$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Zones$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Zones$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Zones$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Operations$Cancel
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
        {}) as Params$Resource$Projects$Zones$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'operationId'],
        pathParams: ['operationId', 'projectId', 'zone'],
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
     * Gets the specified operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.operations.get({
     *     // The name (project, location, operation id) of the operation to get. Specified in the format `projects/x/locations/x/operations/x`.
     *     name: 'placeholder-value',
     *     // Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     *     operationId: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusterConditions": [],
     *   //   "detail": "my_detail",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "nodepoolConditions": [],
     *   //   "operationType": "my_operationType",
     *   //   "progress": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "targetLink": "my_targetLink",
     *   //   "zone": "my_zone"
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
      params: Params$Resource$Projects$Zones$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Zones$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Zones$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Zones$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Zones$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Operations$Get
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
        {}) as Params$Resource$Projects$Zones$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone', 'operationId'],
        pathParams: ['operationId', 'projectId', 'zone'],
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
     * Lists all operations in a project in the specified zone or all zones.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/container.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const container = google.container('v1beta1');
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
     *   const res = await container.projects.zones.operations.list({
     *     // The parent (project and location) where the operations will be listed. Specified in the format `projects/x/locations/x`. Location "-" matches all zones and all regions.
     *     parent: 'placeholder-value',
     *     // Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     *     projectId: 'placeholder-value',
     *     // Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
     *     zone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "missingZones": [],
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
      params: Params$Resource$Projects$Zones$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Zones$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Zones$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Zones$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Zones$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Operations$List
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
        {}) as Params$Resource$Projects$Zones$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Zones$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/operations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'zone'],
        pathParams: ['projectId', 'zone'],
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

  export interface Params$Resource$Projects$Zones$Operations$Cancel
    extends StandardParameters {
    /**
     * Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     */
    operationId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Zones$Operations$Get
    extends StandardParameters {
    /**
     * The name (project, location, operation id) of the operation to get. Specified in the format `projects/x/locations/x/operations/x`.
     */
    name?: string;
    /**
     * Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     */
    operationId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
  }
  export interface Params$Resource$Projects$Zones$Operations$List
    extends StandardParameters {
    /**
     * The parent (project and location) where the operations will be listed. Specified in the format `projects/x/locations/x`. Location "-" matches all zones and all regions.
     */
    parent?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
  }
}
