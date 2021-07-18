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

export namespace notebooks_v1 {
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
   * Notebooks API
   *
   * Notebooks API is used to manage notebook resources in Google Cloud.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const notebooks = google.notebooks('v1');
   * ```
   */
  export class Notebooks {
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
   * Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported.
   */
  export interface Schema$AcceleratorConfig {
    /**
     * Count of cores of this accelerator.
     */
    coreCount?: string | null;
    /**
     * Type of this accelerator.
     */
    type?: string | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
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
   * Definition of a container image for starting a notebook instance with the environment installed in a container.
   */
  export interface Schema$ContainerImage {
    /**
     * Required. The path to the container image repository. For example: `gcr.io/{project_id\}/{image_name\}`
     */
    repository?: string | null;
    /**
     * The tag of the container image. If not specified, this defaults to the latest tag.
     */
    tag?: string | null;
  }
  /**
   * An instance-attached disk resource.
   */
  export interface Schema$Disk {
    /**
     * Indicates whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
     */
    autoDelete?: boolean | null;
    /**
     * Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.
     */
    boot?: boolean | null;
    /**
     * Indicates a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine.This field is only applicable for persistent disks.
     */
    deviceName?: string | null;
    /**
     * Indicates the size of the disk in base-2 GB.
     */
    diskSizeGb?: string | null;
    /**
     * Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.
     */
    guestOsFeatures?: Schema$GuestOsFeature[];
    /**
     * A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number.
     */
    index?: string | null;
    /**
     * Indicates the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values: NVME SCSI
     */
    interface?: string | null;
    /**
     * Type of the resource. Always compute#attachedDisk for attached disks.
     */
    kind?: string | null;
    /**
     * A list of publicly visible licenses. Reserved for Google's use. A License represents billing and aggregate usage data for public and marketplace images.
     */
    licenses?: string[] | null;
    /**
     * The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode. Valid values: READ_ONLY READ_WRITE
     */
    mode?: string | null;
    /**
     * Indicates a valid partial or full URL to an existing Persistent Disk resource.
     */
    source?: string | null;
    /**
     * Indicates the type of the disk, either SCRATCH or PERSISTENT. Valid values: PERSISTENT SCRATCH
     */
    type?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * Represents a custom encryption key configuration that can be applied to a resource. This will encrypt all disks in Virtual Machine.
   */
  export interface Schema$EncryptionConfig {
    /**
     * The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks. It has the following format: `projects/{PROJECT_ID\}/locations/{REGION\}/keyRings/{KEY_RING_NAME\}/cryptoKeys/{KEY_NAME\}`
     */
    kmsKey?: string | null;
  }
  /**
   * Definition of a software environment that is used to start a notebook instance.
   */
  export interface Schema$Environment {
    /**
     * Use a container image to start the notebook instance.
     */
    containerImage?: Schema$ContainerImage;
    /**
     * Output only. The time at which this environment was created.
     */
    createTime?: string | null;
    /**
     * A brief description of this environment.
     */
    description?: string | null;
    /**
     * Display name of this environment for the UI.
     */
    displayName?: string | null;
    /**
     * Output only. Name of this environment. Format: `projects/{project_id\}/locations/{location\}/environments/{environment_id\}`
     */
    name?: string | null;
    /**
     * Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path. Example: `"gs://path-to-file/file-name"`
     */
    postStartupScript?: string | null;
    /**
     * Use a Compute Engine VM image to start the notebook instance.
     */
    vmImage?: Schema$VmImage;
  }
  /**
   * The definition of an Event for a managed / semi-managed notebook instance.
   */
  export interface Schema$Event {
    /**
     * Event report time.
     */
    reportTime?: string | null;
    /**
     * Event type.
     */
    type?: string | null;
  }
  /**
   * The definition of a single executed notebook.
   */
  export interface Schema$Execution {
    /**
     * Output only. Time the Execution was instantiated.
     */
    createTime?: string | null;
    /**
     * A brief description of this execution.
     */
    description?: string | null;
    /**
     * Output only. Name used for UI purposes. Name can only contain alphanumeric characters and underscores '_'.
     */
    displayName?: string | null;
    /**
     * execute metadata including name, hardware spec, region, labels, etc.
     */
    executionTemplate?: Schema$ExecutionTemplate;
    /**
     * Output only. The URI of the external job used to execute the notebook.
     */
    jobUri?: string | null;
    /**
     * Output only. The resource name of the execute. Format: `projects/{project_id\}/locations/{location\}/execution/{execution_id\}
     */
    name?: string | null;
    /**
     * Output notebook file generated by this execution
     */
    outputNotebookFile?: string | null;
    /**
     * Output only. State of the underlying AI Platform job.
     */
    state?: string | null;
    /**
     * Output only. Time the Execution was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The description a notebook execution workload.
   */
  export interface Schema$ExecutionTemplate {
    /**
     * Configuration (count and accelerator type) for hardware running notebook execution.
     */
    acceleratorConfig?: Schema$SchedulerAcceleratorConfig;
    /**
     * Container Image URI to a DLVM Example: 'gcr.io/deeplearning-platform-release/base-cu100' More examples can be found at: https://cloud.google.com/ai-platform/deep-learning-containers/docs/choosing-container
     */
    containerImageUri?: string | null;
    /**
     * Path to the notebook file to execute. Must be in a Google Cloud Storage bucket. Format: gs://{project_id\}/{folder\}/{notebook_file_name\} Ex: gs://notebook_user/scheduled_notebooks/sentiment_notebook.ipynb
     */
    inputNotebookFile?: string | null;
    /**
     * Labels for execution. If execution is scheduled, a field included will be 'nbs-scheduled'. Otherwise, it is an immediate execution, and an included field will be 'nbs-immediate'. Use fields to efficiently index between various types of executions.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Specifies the type of virtual machine to use for your training job's master worker. You must specify this field when `scaleTier` is set to `CUSTOM`. You can use certain Compute Engine machine types directly in this field. The following types are supported: - `n1-standard-4` - `n1-standard-8` - `n1-standard-16` - `n1-standard-32` - `n1-standard-64` - `n1-standard-96` - `n1-highmem-2` - `n1-highmem-4` - `n1-highmem-8` - `n1-highmem-16` - `n1-highmem-32` - `n1-highmem-64` - `n1-highmem-96` - `n1-highcpu-16` - `n1-highcpu-32` - `n1-highcpu-64` - `n1-highcpu-96` Alternatively, you can use the following legacy machine types: - `standard` - `large_model` - `complex_model_s` - `complex_model_m` - `complex_model_l` - `standard_gpu` - `complex_model_m_gpu` - `complex_model_l_gpu` - `standard_p100` - `complex_model_m_p100` - `standard_v100` - `large_model_v100` - `complex_model_m_v100` - `complex_model_l_v100` Finally, if you want to use a TPU for training, specify `cloud_tpu` in this field. Learn more about the [special configuration options for training with TPU.
     */
    masterType?: string | null;
    /**
     * Path to the notebook folder to write to. Must be in a Google Cloud Storage bucket path. Format: gs://{project_id\}/{folder\} Ex: gs://notebook_user/scheduled_notebooks
     */
    outputNotebookFolder?: string | null;
    /**
     * Parameters used within the 'input_notebook_file' notebook.
     */
    parameters?: string | null;
    /**
     * Parameters to be overridden in the notebook during execution. Ref https://papermill.readthedocs.io/en/latest/usage-parameterize.html on how to specifying parameters in the input notebook and pass them here in an YAML file. Ex: gs://notebook_user/scheduled_notebooks/sentiment_notebook_params.yaml
     */
    paramsYamlFile?: string | null;
    /**
     * Required. Scale tier of the hardware used for notebook execution. DEPRECATED Will be discontinued. As right now only CUSTOM is supported.
     */
    scaleTier?: string | null;
    /**
     * The email address of a service account to use when running the execution. You must have the `iam.serviceAccounts.actAs` permission for the specified service account.
     */
    serviceAccount?: string | null;
  }
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
   * Response for checking if a notebook instance is healthy.
   */
  export interface Schema$GetInstanceHealthResponse {
    /**
     * Output only. Additional information about instance health. Example: healthInfo": { "docker_proxy_agent_status": "1", "docker_status": "1", "jupyterlab_api_status": "-1", "jupyterlab_status": "-1", "updated": "2020-10-18 09:40:03.573409" \}
     */
    healthInfo?: {[key: string]: string} | null;
    /**
     * Output only. Runtime health_state.
     */
    healthState?: string | null;
  }
  /**
   * Guest OS features for boot disk.
   */
  export interface Schema$GuestOsFeature {
    /**
     * The ID of a supported feature. Read Enabling guest operating system features to see a list of available options. Valid values: FEATURE_TYPE_UNSPECIFIED MULTI_IP_SUBNET SECURE_BOOT UEFI_COMPATIBLE VIRTIO_SCSI_MULTIQUEUE WINDOWS
     */
    type?: string | null;
  }
  /**
   * The definition of a notebook instance.
   */
  export interface Schema$Instance {
    /**
     * The hardware accelerator used on this instance. If you use accelerators, make sure that your configuration has [enough vCPUs and memory to support the `machine_type` you have selected](/compute/docs/gpus/#gpus-list).
     */
    acceleratorConfig?: Schema$AcceleratorConfig;
    /**
     * Input only. The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. If not specified, this defaults to 100.
     */
    bootDiskSizeGb?: string | null;
    /**
     * Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`).
     */
    bootDiskType?: string | null;
    /**
     * Use a container image to start the notebook instance.
     */
    containerImage?: Schema$ContainerImage;
    /**
     * Output only. Instance creation time.
     */
    createTime?: string | null;
    /**
     * Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers.
     */
    customGpuDriverPath?: string | null;
    /**
     * Input only. The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). You can choose the size of the data disk based on how big your notebooks and data are. If not specified, this defaults to 100.
     */
    dataDiskSizeGb?: string | null;
    /**
     * Input only. The type of the data disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`).
     */
    dataDiskType?: string | null;
    /**
     * Input only. Disk encryption method used on the boot and data disks, defaults to GMEK.
     */
    diskEncryption?: string | null;
    /**
     * Output only. Attached disks to notebook instance.
     */
    disks?: Schema$Disk[];
    /**
     * Whether the end user authorizes Google Cloud to install GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs.
     */
    installGpuDriver?: boolean | null;
    /**
     * Input only. The owner of this instance after creation. Format: `alias@example.com` Currently supports one owner only. If not specified, all of the service account users of your VM instance's service account can use the instance.
     */
    instanceOwners?: string[] | null;
    /**
     * Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: `projects/{project_id\}/locations/{location\}/keyRings/{key_ring_id\}/cryptoKeys/{key_id\}` Learn more about [using your own encryption keys](/kms/docs/quickstart).
     */
    kmsKey?: string | null;
    /**
     * Labels to apply to this instance. These can be later modified by the setLabels method.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The [Compute Engine machine type](/compute/docs/machine-types) of this instance.
     */
    machineType?: string | null;
    /**
     * Custom metadata to apply to this instance.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Output only. The name of this notebook instance. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string | null;
    /**
     * The name of the VPC that this instance is in. Format: `projects/{project_id\}/global/networks/{network_id\}`
     */
    network?: string | null;
    /**
     * Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet.
     */
    nicType?: string | null;
    /**
     * If true, the notebook instance will not register with the proxy.
     */
    noProxyAccess?: boolean | null;
    /**
     * If true, no public IP will be assigned to this instance.
     */
    noPublicIp?: boolean | null;
    /**
     * Input only. If true, the data disk will not be auto deleted when deleting the instance.
     */
    noRemoveDataDisk?: boolean | null;
    /**
     * Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (gs://path-to-file/file-name).
     */
    postStartupScript?: string | null;
    /**
     * Output only. The proxy endpoint that is used to access the Jupyter notebook.
     */
    proxyUri?: string | null;
    /**
     * Optional. The optional reservation affinity. Setting this field will apply the specified [Zonal Compute Reservation](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) to this notebook instance.
     */
    reservationAffinity?: Schema$ReservationAffinity;
    /**
     * The service account on this instance, giving access to other Google Cloud services. You can use any service account within the same project, but you must have the service account user permission to use the instance. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
     */
    serviceAccount?: string | null;
    /**
     * Optional. The URIs of service account scopes to be included in Compute Engine instances. If not specified, the following [scopes](https://cloud.google.com/compute/docs/access/service-accounts#accesscopesiam) are defined: - https://www.googleapis.com/auth/cloud-platform - https://www.googleapis.com/auth/userinfo.email If not using default scopes, you need at least: https://www.googleapis.com/auth/compute
     */
    serviceAccountScopes?: string[] | null;
    /**
     * Optional. Shielded VM configuration. [Images using supported Shielded VM features] (https://cloud.google.com/compute/docs/instances/modifying-shielded-vm).
     */
    shieldedInstanceConfig?: Schema$ShieldedInstanceConfig;
    /**
     * Output only. The state of this instance.
     */
    state?: string | null;
    /**
     * The name of the subnet that this instance is in. Format: `projects/{project_id\}/regions/{region\}/subnetworks/{subnetwork_id\}`
     */
    subnet?: string | null;
    /**
     * Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
     */
    tags?: string[] | null;
    /**
     * Output only. Instance update time.
     */
    updateTime?: string | null;
    /**
     * The upgrade history of this instance.
     */
    upgradeHistory?: Schema$UpgradeHistoryEntry[];
    /**
     * Use a Compute Engine VM image to start the notebook instance.
     */
    vmImage?: Schema$VmImage;
  }
  /**
   * Notebook instance configurations that can be updated.
   */
  export interface Schema$InstanceConfig {
    /**
     * Verifies core internal services are running. More info: go/notebooks-health
     */
    enableHealthMonitoring?: boolean | null;
    /**
     * Cron expression in UTC timezone, used to schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).
     */
    notebookUpgradeSchedule?: string | null;
  }
  /**
   * Response for checking if a notebook instance is upgradeable.
   */
  export interface Schema$IsInstanceUpgradeableResponse {
    /**
     * If an instance is upgradeable.
     */
    upgradeable?: boolean | null;
    /**
     * The new image self link this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true.
     */
    upgradeImage?: string | null;
    /**
     * Additional information about upgrade.
     */
    upgradeInfo?: string | null;
    /**
     * The version this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true.
     */
    upgradeVersion?: string | null;
  }
  /**
   * Response for listing environments.
   */
  export interface Schema$ListEnvironmentsResponse {
    /**
     * A list of returned environments.
     */
    environments?: Schema$Environment[];
    /**
     * A page token that can be used to continue listing from the last result in the next list call.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response for listing scheduled notebook executions
   */
  export interface Schema$ListExecutionsResponse {
    /**
     * A list of returned instances.
     */
    executions?: Schema$Execution[];
    /**
     * Page token that can be used to continue listing from the last result in the next list call.
     */
    nextPageToken?: string | null;
    /**
     * Executions IDs that could not be reached. For example, ['projects/{project_id\}/location/{location\}/executions/imagenet_test1', 'projects/{project_id\}/location/{location\}/executions/classifier_train1'].
     */
    unreachable?: string[] | null;
  }
  /**
   * Response for listing notebook instances.
   */
  export interface Schema$ListInstancesResponse {
    /**
     * A list of returned instances.
     */
    instances?: Schema$Instance[];
    /**
     * Page token that can be used to continue listing from the last result in the next list call.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached. For example, ['us-west1-a', 'us-central1-b']. A ListInstancesResponse will only contain either instances or unreachables,
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
   * Response for listing Managed Notebook Runtimes.
   */
  export interface Schema$ListRuntimesResponse {
    /**
     * Page token that can be used to continue listing from the last result in the next list call.
     */
    nextPageToken?: string | null;
    /**
     * A list of returned Runtimes.
     */
    runtimes?: Schema$Runtime[];
    /**
     * Locations that could not be reached. For example, ['us-west1', 'us-central1']. A ListRuntimesResponse will only contain either runtimes or unreachables,
     */
    unreachable?: string[] | null;
  }
  /**
   * Response for listing scheduled notebook job.
   */
  export interface Schema$ListSchedulesResponse {
    /**
     * Page token that can be used to continue listing from the last result in the next list call.
     */
    nextPageToken?: string | null;
    /**
     * A list of returned instances.
     */
    schedules?: Schema$Schedule[];
    /**
     * Schedules that could not be reached. For example, ['projects/{project_id\}/location/{location\}/schedules/monthly_digest', 'projects/{project_id\}/location/{location\}/schedules/weekly_sentiment'].
     */
    unreachable?: string[] | null;
  }
  /**
   * An Local attached disk resource.
   */
  export interface Schema$LocalDisk {
    /**
     * Output only. Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
     */
    autoDelete?: boolean | null;
    /**
     * Output only. Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.
     */
    boot?: boolean | null;
    /**
     * Output only. Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks.
     */
    deviceName?: string | null;
    /**
     * Output only. Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.
     */
    guestOsFeatures?: Schema$RuntimeGuestOsFeature[];
    /**
     * Output only. [Output Only] A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number.
     */
    index?: number | null;
    /**
     * Input only. [Input Only] Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new instance. This property is mutually exclusive with the source property; you can only define one or the other, but not both.
     */
    initializeParams?: Schema$LocalDiskInitializeParams;
    /**
     * Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values: NVME SCSI
     */
    interface?: string | null;
    /**
     * Output only. Type of the resource. Always compute#attachedDisk for attached disks.
     */
    kind?: string | null;
    /**
     * Output only. [Output Only] Any valid publicly visible licenses.
     */
    licenses?: string[] | null;
    /**
     * The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode. Valid values: READ_ONLY READ_WRITE
     */
    mode?: string | null;
    /**
     * Specifies a valid partial or full URL to an existing Persistent Disk resource.
     */
    source?: string | null;
    /**
     * Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT. Valid values: PERSISTENT SCRATCH
     */
    type?: string | null;
  }
  /**
   * [Input Only] Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new runtime. This property is mutually exclusive with the source property; you can only define one or the other, but not both.
   */
  export interface Schema$LocalDiskInitializeParams {
    /**
     * Optional. Provide this property when creating the disk.
     */
    description?: string | null;
    /**
     * Optional. Specifies the disk name. If not specified, the default is to use the name of the instance. If the disk with the instance name exists already in the given zone/region, a new name will be automatically generated.
     */
    diskName?: string | null;
    /**
     * Optional. Specifies the size of the disk in base-2 GB. If not specified, the disk will be the same size as the image (usually 10GB). If specified, the size must be equal to or larger than 10GB. Default 100 GB.
     */
    diskSizeGb?: string | null;
    /**
     * Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`).
     */
    diskType?: string | null;
    /**
     * Optional. Labels to apply to this disk. These can be later modified by the disks.setLabels method. This field is only applicable for persistent disks.
     */
    labels?: {[key: string]: string} | null;
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
     * API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * The time the operation was created.
     */
    createTime?: string | null;
    /**
     * API endpoint name of this operation.
     */
    endpoint?: string | null;
    /**
     * The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
    /**
     * Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * Request for registering a notebook instance.
   */
  export interface Schema$RegisterInstanceRequest {
    /**
     * Required. User defined unique ID of this instance. The `instance_id` must be 1 to 63 characters long and contain only lowercase letters, numeric characters, and dashes. The first character must be a lowercase letter and the last character cannot be a dash.
     */
    instanceId?: string | null;
  }
  /**
   * Request for notebook instances to report information to Notebooks API.
   */
  export interface Schema$ReportInstanceInfoRequest {
    /**
     * The metadata reported to Notebooks API. This will be merged to the instance metadata store
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
     */
    vmId?: string | null;
  }
  /**
   * Request for reporting a Managed Notebook Event.
   */
  export interface Schema$ReportRuntimeEventRequest {
    /**
     * Required. The Event to be reported.
     */
    event?: Schema$Event;
    /**
     * Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
     */
    vmId?: string | null;
  }
  /**
   * Reservation Affinity for consuming Zonal reservation.
   */
  export interface Schema$ReservationAffinity {
    /**
     * Optional. Type of reservation to consume
     */
    consumeReservationType?: string | null;
    /**
     * Optional. Corresponds to the label key of reservation resource.
     */
    key?: string | null;
    /**
     * Optional. Corresponds to the label values of reservation resource.
     */
    values?: string[] | null;
  }
  /**
   * Request for reseting a notebook instance
   */
  export interface Schema$ResetInstanceRequest {}
  /**
   * Request for reseting a Managed Notebook Runtime.
   */
  export interface Schema$ResetRuntimeRequest {}
  /**
   * Request for rollbacking a notebook instance
   */
  export interface Schema$RollbackInstanceRequest {
    /**
     * Required. The snapshot for rollback. Example: "projects/test-project/global/snapshots/krwlzipynril".
     */
    targetSnapshot?: string | null;
  }
  /**
   * The definition of a Runtime for a managed notebook instance.
   */
  export interface Schema$Runtime {
    /**
     * The config settings for accessing runtime.
     */
    accessConfig?: Schema$RuntimeAccessConfig;
    /**
     * Output only. Runtime creation time.
     */
    createTime?: string | null;
    /**
     * Output only. Runtime health_state.
     */
    healthState?: string | null;
    /**
     * Output only. Contains Runtime daemon metrics such as Service status and JupyterLab stats.
     */
    metrics?: Schema$RuntimeMetrics;
    /**
     * Output only. The resource name of the runtime. Format: `projects/{project\}/locations/{location\}/runtimes/{runtime\}`
     */
    name?: string | null;
    /**
     * The config settings for software inside the runtime.
     */
    softwareConfig?: Schema$RuntimeSoftwareConfig;
    /**
     * Output only. Runtime state.
     */
    state?: string | null;
    /**
     * Output only. Runtime update time.
     */
    updateTime?: string | null;
    /**
     * Use a Compute Engine VM image to start the managed notebook instance.
     */
    virtualMachine?: Schema$VirtualMachine;
  }
  /**
   * Definition of the types of hardware accelerators that can be used. Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100`
   */
  export interface Schema$RuntimeAcceleratorConfig {
    /**
     * Count of cores of this accelerator.
     */
    coreCount?: string | null;
    /**
     * Accelerator model.
     */
    type?: string | null;
  }
  /**
   * Specifies the login configuration for Runtime
   */
  export interface Schema$RuntimeAccessConfig {
    /**
     * The type of access mode this instance.
     */
    accessType?: string | null;
    /**
     * Output only. The proxy endpoint that is used to access the runtime.
     */
    proxyUri?: string | null;
    /**
     * The owner of this runtime after creation. Format: `alias@example.com` Currently supports one owner only.
     */
    runtimeOwner?: string | null;
  }
  /**
   * A list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options. Guest OS features for boot disk.
   */
  export interface Schema$RuntimeGuestOsFeature {
    /**
     * The ID of a supported feature. Read Enabling guest operating system features to see a list of available options. Valid values: FEATURE_TYPE_UNSPECIFIED MULTI_IP_SUBNET SECURE_BOOT UEFI_COMPATIBLE VIRTIO_SCSI_MULTIQUEUE WINDOWS
     */
    type?: string | null;
  }
  /**
   * Contains runtime daemon metrics, such as OS and kernels and sessions stats.
   */
  export interface Schema$RuntimeMetrics {
    /**
     * Output only. The system metrics.
     */
    systemMetrics?: {[key: string]: string} | null;
  }
  /**
   * A set of Shielded Instance options. Check [Images using supported Shielded VM features] Not all combinations are valid.
   */
  export interface Schema$RuntimeShieldedInstanceConfig {
    /**
     * Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default.
     */
    enableIntegrityMonitoring?: boolean | null;
    /**
     * Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.
     */
    enableSecureBoot?: boolean | null;
    /**
     * Defines whether the instance has the vTPM enabled. Enabled by default.
     */
    enableVtpm?: boolean | null;
  }
  /**
   * Specifies the selection and config of software inside the runtime. / The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * idle_shutdown: idle_shutdown=true * idle_shutdown_timeout: idle_shutdown_timeout=180 * report-system-health: report-system-health=true
   */
  export interface Schema$RuntimeSoftwareConfig {
    /**
     * Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers.
     */
    customGpuDriverPath?: string | null;
    /**
     * Verifies core internal services are running. Default: True
     */
    enableHealthMonitoring?: boolean | null;
    /**
     * Runtime will automatically shutdown after idle_shutdown_time. Default: True
     */
    idleShutdown?: boolean | null;
    /**
     * Time in minutes to wait before shuting down runtime. Default: 180 minutes
     */
    idleShutdownTimeout?: number | null;
    /**
     * Install Nvidia Driver automatically.
     */
    installGpuDriver?: boolean | null;
    /**
     * Cron expression in UTC timezone, used to schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).
     */
    notebookUpgradeSchedule?: string | null;
    /**
     * Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (gs://path-to-file/file-name).
     */
    postStartupScript?: string | null;
  }
  /**
   * The definition of a schedule.
   */
  export interface Schema$Schedule {
    /**
     * Output only. Time the schedule was created.
     */
    createTime?: string | null;
    /**
     * Cron-tab formatted schedule by which the job will execute Format: minute, hour, day of month, month, day of week e.g. 0 0 * * WED = every Wednesday More examples: https://crontab.guru/examples.html
     */
    cronSchedule?: string | null;
    /**
     * A brief description of this environment.
     */
    description?: string | null;
    /**
     * Output only. Display name used for UI purposes. Name can only contain alphanumeric characters, hyphens '-', and underscores '_'.
     */
    displayName?: string | null;
    /**
     * Notebook Execution Template corresponding to this schedule.
     */
    executionTemplate?: Schema$ExecutionTemplate;
    /**
     * Output only. The name of this schedule. Format: `projects/{project_id\}/locations/{location\}/schedules/{schedule_id\}`
     */
    name?: string | null;
    /**
     * Output only. The most recent execution names triggered from this schedule and their corresponding states.
     */
    recentExecutions?: Schema$Execution[];
    state?: string | null;
    /**
     * Timezone on which the cron_schedule. The value of this field must be a time zone name from the tz database. TZ Database: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string "utc". If a time zone is not specified, the default will be in UTC (also known as GMT).
     */
    timeZone?: string | null;
    /**
     * Output only. Time the schedule was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check GPUs on Compute Engine to find a valid combination. TPUs are not supported.
   */
  export interface Schema$SchedulerAcceleratorConfig {
    /**
     * Count of cores of this accelerator.
     */
    coreCount?: string | null;
    /**
     * Type of this accelerator.
     */
    type?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
  }
  /**
   * Request for setting instance accelerator.
   */
  export interface Schema$SetInstanceAcceleratorRequest {
    /**
     * Required. Count of cores of this accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported.
     */
    coreCount?: string | null;
    /**
     * Required. Type of this accelerator.
     */
    type?: string | null;
  }
  /**
   * Request for setting instance labels.
   */
  export interface Schema$SetInstanceLabelsRequest {
    /**
     * Labels to apply to this instance. These can be later modified by the setLabels method
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * Request for setting instance machine type.
   */
  export interface Schema$SetInstanceMachineTypeRequest {
    /**
     * Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-types).
     */
    machineType?: string | null;
  }
  /**
   * A set of Shielded Instance options. Check [Images using supported Shielded VM features] Not all combinations are valid.
   */
  export interface Schema$ShieldedInstanceConfig {
    /**
     * Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default.
     */
    enableIntegrityMonitoring?: boolean | null;
    /**
     * Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.
     */
    enableSecureBoot?: boolean | null;
    /**
     * Defines whether the instance has the vTPM enabled. Enabled by default.
     */
    enableVtpm?: boolean | null;
  }
  /**
   * Request for starting a notebook instance
   */
  export interface Schema$StartInstanceRequest {}
  /**
   * Request for starting a Managed Notebook Runtime.
   */
  export interface Schema$StartRuntimeRequest {}
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
   * Request for stopping a notebook instance
   */
  export interface Schema$StopInstanceRequest {}
  /**
   * Request for stopping a Managed Notebook Runtime.
   */
  export interface Schema$StopRuntimeRequest {}
  /**
   * Request for switching a Managed Notebook Runtime.
   */
  export interface Schema$SwitchRuntimeRequest {
    /**
     * accelerator config.
     */
    acceleratorConfig?: Schema$RuntimeAcceleratorConfig;
    /**
     * machine type.
     */
    machineType?: string | null;
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
  /**
   * Request for created scheduled notebooks
   */
  export interface Schema$TriggerScheduleRequest {}
  /**
   * Request for updating instance configurations.
   */
  export interface Schema$UpdateInstanceConfigRequest {
    /**
     * The instance configurations to be updated.
     */
    config?: Schema$InstanceConfig;
  }
  /**
   * Request for updating the Shielded Instance config for a notebook instance. You can only use this method on a stopped instance
   */
  export interface Schema$UpdateShieldedInstanceConfigRequest {
    /**
     * ShieldedInstance configuration to be updated.
     */
    shieldedInstanceConfig?: Schema$ShieldedInstanceConfig;
  }
  /**
   * The entry of VM image upgrade history.
   */
  export interface Schema$UpgradeHistoryEntry {
    /**
     * Action. Rolloback or Upgrade.
     */
    action?: string | null;
    /**
     * The container image before this instance upgrade.
     */
    containerImage?: string | null;
    /**
     * The time that this instance upgrade history entry is created.
     */
    createTime?: string | null;
    /**
     * The framework of this notebook instance.
     */
    framework?: string | null;
    /**
     * The snapshot of the boot disk of this notebook instance before upgrade.
     */
    snapshot?: string | null;
    /**
     * The state of this instance upgrade history entry.
     */
    state?: string | null;
    /**
     * Target VM Image. Format: ainotebooks-vm/project/image-name/name.
     */
    targetImage?: string | null;
    /**
     * Target VM Version, like m63.
     */
    targetVersion?: string | null;
    /**
     * The version of the notebook instance before this upgrade.
     */
    version?: string | null;
    /**
     * The VM image before this instance upgrade.
     */
    vmImage?: string | null;
  }
  /**
   * Request for upgrading a notebook instance from within the VM
   */
  export interface Schema$UpgradeInstanceInternalRequest {
    /**
     * Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
     */
    vmId?: string | null;
  }
  /**
   * Request for upgrading a notebook instance
   */
  export interface Schema$UpgradeInstanceRequest {}
  /**
   * Runtime using Virtual Machine for computing.
   */
  export interface Schema$VirtualMachine {
    /**
     * Output only. The unique identifier of the Managed Compute Engine instance.
     */
    instanceId?: string | null;
    /**
     * Output only. The user-friendly name of the Managed Compute Engine instance.
     */
    instanceName?: string | null;
    /**
     * Virtual Machine configuration settings.
     */
    virtualMachineConfig?: Schema$VirtualMachineConfig;
  }
  /**
   * The config settings for virtual machine.
   */
  export interface Schema$VirtualMachineConfig {
    /**
     * Optional. The Compute Engine accelerator configuration for this runtime.
     */
    acceleratorConfig?: Schema$RuntimeAcceleratorConfig;
    /**
     * Optional. Use a list of container images to start the notebook instance.
     */
    containerImages?: Schema$ContainerImage[];
    /**
     * Required. Data disk option configuration settings.
     */
    dataDisk?: Schema$LocalDisk;
    /**
     * Optional. Encryption settings for virtual machine data disk.
     */
    encryptionConfig?: Schema$EncryptionConfig;
    /**
     * Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)).
     */
    guestAttributes?: {[key: string]: string} | null;
    /**
     * Optional. If true, runtime will only have internal IP addresses. By default, runtimes are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each vm. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all dependencies must be configured to be accessible without external IP addresses.
     */
    internalIpOnly?: boolean | null;
    /**
     * Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The Compute Engine machine type used for runtimes. Short name is valid. Examples: * `n1-standard-2` * `e2-standard-8`
     */
    machineType?: string | null;
    /**
     * Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork. If neither `network` nor `subnet` is specified, the "default" network of the project is used, if it exists. A full URL or partial URI. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default` * `projects/[project_id]/regions/global/default` Runtimes are managed resources inside Google Infrastructure. Runtimes support the following network configurations: * Google Managed Network (Network & subnet are empty) * Consumer Project VPC (network & subnet are required). Requires configuring Private Service Access. * Shared VPC (network & subnet are required). Requires configuring Private Service Access.
     */
    network?: string | null;
    /**
     * Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet.
     */
    nicType?: string | null;
    /**
     * Optional. Shielded VM Instance configuration settings.
     */
    shieldedInstanceConfig?: Schema$RuntimeShieldedInstanceConfig;
    /**
     * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network. A full URL or partial URI are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` * `projects/[project_id]/regions/us-east1/subnetworks/sub0`
     */
    subnet?: string | null;
    /**
     * Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
     */
    tags?: string[] | null;
    /**
     * Output only. The zone where the virtual machine is located. If using regional request, the notebooks service will pick a location in the corresponding runtime region. On a get request, zone will always be present. Example: * `us-central1-b`
     */
    zone?: string | null;
  }
  /**
   * Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.
   */
  export interface Schema$VmImage {
    /**
     * Use this VM image family to find the image; the newest image in this family will be used.
     */
    imageFamily?: string | null;
    /**
     * Use VM image name to find the image.
     */
    imageName?: string | null;
    /**
     * Required. The name of the Google Cloud project that this VM image belongs to. Format: `projects/{project_id\}`
     */
    project?: string | null;
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
    environments: Resource$Projects$Locations$Environments;
    executions: Resource$Projects$Locations$Executions;
    instances: Resource$Projects$Locations$Instances;
    operations: Resource$Projects$Locations$Operations;
    runtimes: Resource$Projects$Locations$Runtimes;
    schedules: Resource$Projects$Locations$Schedules;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.environments = new Resource$Projects$Locations$Environments(
        this.context
      );
      this.executions = new Resource$Projects$Locations$Executions(
        this.context
      );
      this.instances = new Resource$Projects$Locations$Instances(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.runtimes = new Resource$Projects$Locations$Runtimes(this.context);
      this.schedules = new Resource$Projects$Locations$Schedules(this.context);
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.get({
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

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.list({
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

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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

  export class Resource$Projects$Locations$Environments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Environment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.environments.create({
     *     // Required. User-defined unique ID of this environment. The `environment_id` must be 1 to 63 characters long and contain only lowercase letters, numeric characters, and dashes. The first character must be a lowercase letter and the last character cannot be a dash.
     *     environmentId: 'placeholder-value',
     *     // Required. Format: `projects/{project_id\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "containerImage": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "postStartupScript": "my_postStartupScript",
     *       //   "vmImage": {}
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
      params: Params$Resource$Projects$Locations$Environments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Environments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Environments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Environments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Environments$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Create
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
        {}) as Params$Resource$Projects$Locations$Environments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/environments').replace(
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
     * Deletes a single Environment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.environments.delete({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/environments/{environment_id\}`
     *     name: 'projects/my-project/locations/my-location/environments/my-environment',
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
      params: Params$Resource$Projects$Locations$Environments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Environments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Environments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Environments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Environments$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Delete
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
        {}) as Params$Resource$Projects$Locations$Environments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * Gets details of a single Environment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.environments.get({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/environments/{environment_id\}`
     *     name: 'projects/my-project/locations/my-location/environments/my-environment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "containerImage": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "postStartupScript": "my_postStartupScript",
     *   //   "vmImage": {}
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
      params: Params$Resource$Projects$Locations$Environments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Environments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Environment>;
    get(
      params: Params$Resource$Projects$Locations$Environments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Environments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Environment>,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Environments$Get,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Environment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$Get
        | BodyResponseCallback<Schema$Environment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Environment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Environment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Environment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Environments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
        createAPIRequest<Schema$Environment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Environment>(parameters);
      }
    }

    /**
     * Lists environments in a project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.environments.list({
     *     // Maximum return size of the list call.
     *     pageSize: 'placeholder-value',
     *     // A previous returned page token that can be used to continue listing from the last result.
     *     pageToken: 'placeholder-value',
     *     // Required. Format: `projects/{project_id\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "environments": [],
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
      params: Params$Resource$Projects$Locations$Environments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Environments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEnvironmentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Environments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Environments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>,
      callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Environments$List,
      callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Environments$List
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListEnvironmentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Environments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/environments').replace(
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
        createAPIRequest<Schema$ListEnvironmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEnvironmentsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Environments$Create
    extends StandardParameters {
    /**
     * Required. User-defined unique ID of this environment. The `environment_id` must be 1 to 63 characters long and contain only lowercase letters, numeric characters, and dashes. The first character must be a lowercase letter and the last character cannot be a dash.
     */
    environmentId?: string;
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Environment;
  }
  export interface Params$Resource$Projects$Locations$Environments$Delete
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/environments/{environment_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Environments$Get
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/environments/{environment_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Environments$List
    extends StandardParameters {
    /**
     * Maximum return size of the list call.
     */
    pageSize?: number;
    /**
     * A previous returned page token that can be used to continue listing from the last result.
     */
    pageToken?: string;
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Executions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Scheduled Notebook in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.executions.create({
     *     // Required. User-defined unique ID of this execution.
     *     executionId: 'placeholder-value',
     *     // Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "executionTemplate": {},
     *       //   "jobUri": "my_jobUri",
     *       //   "name": "my_name",
     *       //   "outputNotebookFile": "my_outputNotebookFile",
     *       //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Executions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Executions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Executions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Executions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Executions$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Executions$Create
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
        {}) as Params$Resource$Projects$Locations$Executions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Executions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/executions').replace(
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
     * Deletes execution
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.executions.delete({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/executions/{execution_id\}`
     *     name: 'projects/my-project/locations/my-location/executions/my-execution',
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
      params: Params$Resource$Projects$Locations$Executions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Executions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Executions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Executions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Executions$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Executions$Delete
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
        {}) as Params$Resource$Projects$Locations$Executions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Executions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * Gets details of executions
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.executions.get({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/schedules/{execution_id\}`
     *     name: 'projects/my-project/locations/my-location/executions/my-execution',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "executionTemplate": {},
     *   //   "jobUri": "my_jobUri",
     *   //   "name": "my_name",
     *   //   "outputNotebookFile": "my_outputNotebookFile",
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Executions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Executions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Execution>;
    get(
      params: Params$Resource$Projects$Locations$Executions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Executions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Executions$Get,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    get(callback: BodyResponseCallback<Schema$Execution>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Executions$Get
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Execution> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Executions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Executions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }

    /**
     * Lists executions in a given project and location
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.executions.list({
     *     // Filter applied to resulting executions. Currently only supports filtering executions by a specified schedule_id. Format: "schedule_id="
     *     filter: 'placeholder-value',
     *     // Sort by field.
     *     orderBy: 'placeholder-value',
     *     // Maximum return size of the list call.
     *     pageSize: 'placeholder-value',
     *     // A previous returned page token that can be used to continue listing from the last result.
     *     pageToken: 'placeholder-value',
     *     // Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executions": [],
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
      params: Params$Resource$Projects$Locations$Executions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Executions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListExecutionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Executions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Executions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExecutionsResponse>,
      callback: BodyResponseCallback<Schema$ListExecutionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Executions$List,
      callback: BodyResponseCallback<Schema$ListExecutionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Executions$List
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListExecutionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Executions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Executions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/executions').replace(
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
        createAPIRequest<Schema$ListExecutionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExecutionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Executions$Create
    extends StandardParameters {
    /**
     * Required. User-defined unique ID of this execution.
     */
    executionId?: string;
    /**
     * Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Execution;
  }
  export interface Params$Resource$Projects$Locations$Executions$Delete
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/executions/{execution_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Executions$Get
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/schedules/{execution_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Executions$List
    extends StandardParameters {
    /**
     * Filter applied to resulting executions. Currently only supports filtering executions by a specified schedule_id. Format: "schedule_id="
     */
    filter?: string;
    /**
     * Sort by field.
     */
    orderBy?: string;
    /**
     * Maximum return size of the list call.
     */
    pageSize?: number;
    /**
     * A previous returned page token that can be used to continue listing from the last result.
     */
    pageToken?: string;
    /**
     * Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Instances {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Instance in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.create({
     *     // Required. User-defined unique ID of this instance.
     *     instanceId: 'placeholder-value',
     *     // Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "acceleratorConfig": {},
     *       //   "bootDiskSizeGb": "my_bootDiskSizeGb",
     *       //   "bootDiskType": "my_bootDiskType",
     *       //   "containerImage": {},
     *       //   "createTime": "my_createTime",
     *       //   "customGpuDriverPath": "my_customGpuDriverPath",
     *       //   "dataDiskSizeGb": "my_dataDiskSizeGb",
     *       //   "dataDiskType": "my_dataDiskType",
     *       //   "diskEncryption": "my_diskEncryption",
     *       //   "disks": [],
     *       //   "installGpuDriver": false,
     *       //   "instanceOwners": [],
     *       //   "kmsKey": "my_kmsKey",
     *       //   "labels": {},
     *       //   "machineType": "my_machineType",
     *       //   "metadata": {},
     *       //   "name": "my_name",
     *       //   "network": "my_network",
     *       //   "nicType": "my_nicType",
     *       //   "noProxyAccess": false,
     *       //   "noPublicIp": false,
     *       //   "noRemoveDataDisk": false,
     *       //   "postStartupScript": "my_postStartupScript",
     *       //   "proxyUri": "my_proxyUri",
     *       //   "reservationAffinity": {},
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "serviceAccountScopes": [],
     *       //   "shieldedInstanceConfig": {},
     *       //   "state": "my_state",
     *       //   "subnet": "my_subnet",
     *       //   "tags": [],
     *       //   "updateTime": "my_updateTime",
     *       //   "upgradeHistory": [],
     *       //   "vmImage": {}
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

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.delete({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
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

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.get({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acceleratorConfig": {},
     *   //   "bootDiskSizeGb": "my_bootDiskSizeGb",
     *   //   "bootDiskType": "my_bootDiskType",
     *   //   "containerImage": {},
     *   //   "createTime": "my_createTime",
     *   //   "customGpuDriverPath": "my_customGpuDriverPath",
     *   //   "dataDiskSizeGb": "my_dataDiskSizeGb",
     *   //   "dataDiskType": "my_dataDiskType",
     *   //   "diskEncryption": "my_diskEncryption",
     *   //   "disks": [],
     *   //   "installGpuDriver": false,
     *   //   "instanceOwners": [],
     *   //   "kmsKey": "my_kmsKey",
     *   //   "labels": {},
     *   //   "machineType": "my_machineType",
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "network": "my_network",
     *   //   "nicType": "my_nicType",
     *   //   "noProxyAccess": false,
     *   //   "noPublicIp": false,
     *   //   "noRemoveDataDisk": false,
     *   //   "postStartupScript": "my_postStartupScript",
     *   //   "proxyUri": "my_proxyUri",
     *   //   "reservationAffinity": {},
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceAccountScopes": [],
     *   //   "shieldedInstanceConfig": {},
     *   //   "state": "my_state",
     *   //   "subnet": "my_subnet",
     *   //   "tags": [],
     *   //   "updateTime": "my_updateTime",
     *   //   "upgradeHistory": [],
     *   //   "vmImage": {}
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

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.getIamPolicy({
     *     // Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/instances/my-instance',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
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
      params: Params$Resource$Projects$Locations$Instances$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Instances$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Instances$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Instances$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Instances$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Instances$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * Check if a notebook instance is healthy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.getInstanceHealth({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "healthInfo": {},
     *   //   "healthState": "my_healthState"
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
    getInstanceHealth(
      params: Params$Resource$Projects$Locations$Instances$Getinstancehealth,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getInstanceHealth(
      params?: Params$Resource$Projects$Locations$Instances$Getinstancehealth,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetInstanceHealthResponse>;
    getInstanceHealth(
      params: Params$Resource$Projects$Locations$Instances$Getinstancehealth,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getInstanceHealth(
      params: Params$Resource$Projects$Locations$Instances$Getinstancehealth,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetInstanceHealthResponse>,
      callback: BodyResponseCallback<Schema$GetInstanceHealthResponse>
    ): void;
    getInstanceHealth(
      params: Params$Resource$Projects$Locations$Instances$Getinstancehealth,
      callback: BodyResponseCallback<Schema$GetInstanceHealthResponse>
    ): void;
    getInstanceHealth(
      callback: BodyResponseCallback<Schema$GetInstanceHealthResponse>
    ): void;
    getInstanceHealth(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Getinstancehealth
        | BodyResponseCallback<Schema$GetInstanceHealthResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetInstanceHealthResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetInstanceHealthResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetInstanceHealthResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Getinstancehealth;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Getinstancehealth;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getInstanceHealth').replace(
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
        createAPIRequest<Schema$GetInstanceHealthResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetInstanceHealthResponse>(parameters);
      }
    }

    /**
     * Check if a notebook instance is upgradable.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.isUpgradeable({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     notebookInstance:
     *       'projects/my-project/locations/my-location/instances/my-instance',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "upgradeImage": "my_upgradeImage",
     *   //   "upgradeInfo": "my_upgradeInfo",
     *   //   "upgradeVersion": "my_upgradeVersion",
     *   //   "upgradeable": false
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
    isUpgradeable(
      params: Params$Resource$Projects$Locations$Instances$Isupgradeable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    isUpgradeable(
      params?: Params$Resource$Projects$Locations$Instances$Isupgradeable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IsInstanceUpgradeableResponse>;
    isUpgradeable(
      params: Params$Resource$Projects$Locations$Instances$Isupgradeable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    isUpgradeable(
      params: Params$Resource$Projects$Locations$Instances$Isupgradeable,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IsInstanceUpgradeableResponse>,
      callback: BodyResponseCallback<Schema$IsInstanceUpgradeableResponse>
    ): void;
    isUpgradeable(
      params: Params$Resource$Projects$Locations$Instances$Isupgradeable,
      callback: BodyResponseCallback<Schema$IsInstanceUpgradeableResponse>
    ): void;
    isUpgradeable(
      callback: BodyResponseCallback<Schema$IsInstanceUpgradeableResponse>
    ): void;
    isUpgradeable(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Isupgradeable
        | BodyResponseCallback<Schema$IsInstanceUpgradeableResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IsInstanceUpgradeableResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IsInstanceUpgradeableResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$IsInstanceUpgradeableResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Isupgradeable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Isupgradeable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+notebookInstance}:isUpgradeable').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['notebookInstance'],
        pathParams: ['notebookInstance'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$IsInstanceUpgradeableResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IsInstanceUpgradeableResponse>(
          parameters
        );
      }
    }

    /**
     * Lists instances in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.list({
     *     // Maximum return size of the list call.
     *     pageSize: 'placeholder-value',
     *     // A previous returned page token that can be used to continue listing from the last result.
     *     pageToken: 'placeholder-value',
     *     // Required. Format: `parent=projects/{project_id\}/locations/{location\}`
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

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.register({
     *     // Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "instanceId": "my_instanceId"
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
    register(
      params: Params$Resource$Projects$Locations$Instances$Register,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    register(
      params?: Params$Resource$Projects$Locations$Instances$Register,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    register(
      params: Params$Resource$Projects$Locations$Instances$Register,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    register(
      params: Params$Resource$Projects$Locations$Instances$Register,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    register(
      params: Params$Resource$Projects$Locations$Instances$Register,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    register(callback: BodyResponseCallback<Schema$Operation>): void;
    register(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Register
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
        {}) as Params$Resource$Projects$Locations$Instances$Register;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Register;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instances:register').replace(
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
     * Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.report({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "metadata": {},
     *       //   "vmId": "my_vmId"
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
    report(
      params: Params$Resource$Projects$Locations$Instances$Report,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    report(
      params?: Params$Resource$Projects$Locations$Instances$Report,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    report(
      params: Params$Resource$Projects$Locations$Instances$Report,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    report(
      params: Params$Resource$Projects$Locations$Instances$Report,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    report(
      params: Params$Resource$Projects$Locations$Instances$Report,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    report(callback: BodyResponseCallback<Schema$Operation>): void;
    report(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Report
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
        {}) as Params$Resource$Projects$Locations$Instances$Report;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Report;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:report').replace(/([^:]\/)\/+/g, '$1'),
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
     * Resets a notebook instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.reset({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
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
      params: Params$Resource$Projects$Locations$Instances$Reset,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reset(
      params?: Params$Resource$Projects$Locations$Instances$Reset,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    reset(
      params: Params$Resource$Projects$Locations$Instances$Reset,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reset(
      params: Params$Resource$Projects$Locations$Instances$Reset,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reset(
      params: Params$Resource$Projects$Locations$Instances$Reset,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reset(callback: BodyResponseCallback<Schema$Operation>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Reset
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
        {}) as Params$Resource$Projects$Locations$Instances$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Reset;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:reset').replace(/([^:]\/)\/+/g, '$1'),
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
     * Rollbacks a notebook instance to the previous version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.rollback({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "targetSnapshot": "my_targetSnapshot"
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
    rollback(
      params: Params$Resource$Projects$Locations$Instances$Rollback,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rollback(
      params?: Params$Resource$Projects$Locations$Instances$Rollback,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    rollback(
      params: Params$Resource$Projects$Locations$Instances$Rollback,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rollback(
      params: Params$Resource$Projects$Locations$Instances$Rollback,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(
      params: Params$Resource$Projects$Locations$Instances$Rollback,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(callback: BodyResponseCallback<Schema$Operation>): void;
    rollback(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Rollback
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
        {}) as Params$Resource$Projects$Locations$Instances$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:rollback').replace(
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
     * Updates the guest accelerators of a single Instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.setAccelerator({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "coreCount": "my_coreCount",
     *       //   "type": "my_type"
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
    setAccelerator(
      params: Params$Resource$Projects$Locations$Instances$Setaccelerator,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setAccelerator(
      params?: Params$Resource$Projects$Locations$Instances$Setaccelerator,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setAccelerator(
      params: Params$Resource$Projects$Locations$Instances$Setaccelerator,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setAccelerator(
      params: Params$Resource$Projects$Locations$Instances$Setaccelerator,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setAccelerator(
      params: Params$Resource$Projects$Locations$Instances$Setaccelerator,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setAccelerator(callback: BodyResponseCallback<Schema$Operation>): void;
    setAccelerator(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Setaccelerator
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
        {}) as Params$Resource$Projects$Locations$Instances$Setaccelerator;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Setaccelerator;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:setAccelerator').replace(
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

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/instances/my-instance',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
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
      params: Params$Resource$Projects$Locations$Instances$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Instances$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Instances$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Instances$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Instances$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Instances$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * Replaces all the labels of an Instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.setLabels({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "labels": {}
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
    setLabels(
      params: Params$Resource$Projects$Locations$Instances$Setlabels,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setLabels(
      params?: Params$Resource$Projects$Locations$Instances$Setlabels,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setLabels(
      params: Params$Resource$Projects$Locations$Instances$Setlabels,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setLabels(
      params: Params$Resource$Projects$Locations$Instances$Setlabels,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLabels(
      params: Params$Resource$Projects$Locations$Instances$Setlabels,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setLabels(callback: BodyResponseCallback<Schema$Operation>): void;
    setLabels(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Setlabels
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
        {}) as Params$Resource$Projects$Locations$Instances$Setlabels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Setlabels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:setLabels').replace(
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

    /**
     * Updates the machine type of a single Instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.setMachineType({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "machineType": "my_machineType"
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
    setMachineType(
      params: Params$Resource$Projects$Locations$Instances$Setmachinetype,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setMachineType(
      params?: Params$Resource$Projects$Locations$Instances$Setmachinetype,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    setMachineType(
      params: Params$Resource$Projects$Locations$Instances$Setmachinetype,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setMachineType(
      params: Params$Resource$Projects$Locations$Instances$Setmachinetype,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMachineType(
      params: Params$Resource$Projects$Locations$Instances$Setmachinetype,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    setMachineType(callback: BodyResponseCallback<Schema$Operation>): void;
    setMachineType(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Setmachinetype
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
        {}) as Params$Resource$Projects$Locations$Instances$Setmachinetype;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Setmachinetype;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:setMachineType').replace(
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

    /**
     * Starts a notebook instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.start({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
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
    start(
      params: Params$Resource$Projects$Locations$Instances$Start,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    start(
      params?: Params$Resource$Projects$Locations$Instances$Start,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    start(
      params: Params$Resource$Projects$Locations$Instances$Start,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Instances$Start,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Instances$Start,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(callback: BodyResponseCallback<Schema$Operation>): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Start
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
        {}) as Params$Resource$Projects$Locations$Instances$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Start;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:start').replace(/([^:]\/)\/+/g, '$1'),
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
     * Stops a notebook instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.stop({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
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
    stop(
      params: Params$Resource$Projects$Locations$Instances$Stop,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    stop(
      params?: Params$Resource$Projects$Locations$Instances$Stop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    stop(
      params: Params$Resource$Projects$Locations$Instances$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Instances$Stop,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Instances$Stop,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(callback: BodyResponseCallback<Schema$Operation>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Stop
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
        {}) as Params$Resource$Projects$Locations$Instances$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:stop').replace(/([^:]\/)\/+/g, '$1'),
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
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/instances/my-instance',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
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
      params: Params$Resource$Projects$Locations$Instances$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Instances$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Instances$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Instances$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Instances$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Instances$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * Update Notebook Instance configurations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.updateConfig({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "config": {}
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
    updateConfig(
      params: Params$Resource$Projects$Locations$Instances$Updateconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateConfig(
      params?: Params$Resource$Projects$Locations$Instances$Updateconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateConfig(
      params: Params$Resource$Projects$Locations$Instances$Updateconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateConfig(
      params: Params$Resource$Projects$Locations$Instances$Updateconfig,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateConfig(
      params: Params$Resource$Projects$Locations$Instances$Updateconfig,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateConfig(callback: BodyResponseCallback<Schema$Operation>): void;
    updateConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Updateconfig
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
        {}) as Params$Resource$Projects$Locations$Instances$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:updateConfig').replace(
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

    /**
     * Updates the Shielded instance configuration of a single Instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *     await notebooks.projects.locations.instances.updateShieldedInstanceConfig({
     *       // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *       name: 'projects/my-project/locations/my-location/instances/my-instance',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "shieldedInstanceConfig": {}
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
    updateShieldedInstanceConfig(
      params: Params$Resource$Projects$Locations$Instances$Updateshieldedinstanceconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateShieldedInstanceConfig(
      params?: Params$Resource$Projects$Locations$Instances$Updateshieldedinstanceconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateShieldedInstanceConfig(
      params: Params$Resource$Projects$Locations$Instances$Updateshieldedinstanceconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateShieldedInstanceConfig(
      params: Params$Resource$Projects$Locations$Instances$Updateshieldedinstanceconfig,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateShieldedInstanceConfig(
      params: Params$Resource$Projects$Locations$Instances$Updateshieldedinstanceconfig,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateShieldedInstanceConfig(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateShieldedInstanceConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Updateshieldedinstanceconfig
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
        {}) as Params$Resource$Projects$Locations$Instances$Updateshieldedinstanceconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Updateshieldedinstanceconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:updateShieldedInstanceConfig').replace(
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

    /**
     * Upgrades a notebook instance to the latest version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.upgrade({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
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
    upgrade(
      params: Params$Resource$Projects$Locations$Instances$Upgrade,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upgrade(
      params?: Params$Resource$Projects$Locations$Instances$Upgrade,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    upgrade(
      params: Params$Resource$Projects$Locations$Instances$Upgrade,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upgrade(
      params: Params$Resource$Projects$Locations$Instances$Upgrade,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    upgrade(
      params: Params$Resource$Projects$Locations$Instances$Upgrade,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    upgrade(callback: BodyResponseCallback<Schema$Operation>): void;
    upgrade(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Upgrade
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
        {}) as Params$Resource$Projects$Locations$Instances$Upgrade;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Upgrade;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:upgrade').replace(
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
     * Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.instances.upgradeInternal({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "vmId": "my_vmId"
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
    upgradeInternal(
      params: Params$Resource$Projects$Locations$Instances$Upgradeinternal,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upgradeInternal(
      params?: Params$Resource$Projects$Locations$Instances$Upgradeinternal,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    upgradeInternal(
      params: Params$Resource$Projects$Locations$Instances$Upgradeinternal,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upgradeInternal(
      params: Params$Resource$Projects$Locations$Instances$Upgradeinternal,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    upgradeInternal(
      params: Params$Resource$Projects$Locations$Instances$Upgradeinternal,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    upgradeInternal(callback: BodyResponseCallback<Schema$Operation>): void;
    upgradeInternal(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Upgradeinternal
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
        {}) as Params$Resource$Projects$Locations$Instances$Upgradeinternal;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Upgradeinternal;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:upgradeInternal').replace(
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

  export interface Params$Resource$Projects$Locations$Instances$Create
    extends StandardParameters {
    /**
     * Required. User-defined unique ID of this instance.
     */
    instanceId?: string;
    /**
     * Required. Format: `parent=projects/{project_id\}/locations/{location\}`
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
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Get
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Instances$Getinstancehealth
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Isupgradeable
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    notebookInstance?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$List
    extends StandardParameters {
    /**
     * Maximum return size of the list call.
     */
    pageSize?: number;
    /**
     * A previous returned page token that can be used to continue listing from the last result.
     */
    pageToken?: string;
    /**
     * Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Register
    extends StandardParameters {
    /**
     * Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RegisterInstanceRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Report
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReportInstanceInfoRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Reset
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetInstanceRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Rollback
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackInstanceRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Setaccelerator
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetInstanceAcceleratorRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Instances$Setlabels
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetInstanceLabelsRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Setmachinetype
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetInstanceMachineTypeRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Start
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartInstanceRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Stop
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StopInstanceRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Testiampermissions
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
  export interface Params$Resource$Projects$Locations$Instances$Updateconfig
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateInstanceConfigRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Updateshieldedinstanceconfig
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateShieldedInstanceConfigRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Upgrade
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpgradeInstanceRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Upgradeinternal
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/instances/{instance_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpgradeInstanceInternalRequest;
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
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.operations.cancel({
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

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.operations.delete({
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

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.operations.get({
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

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.operations.list({
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

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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

  export class Resource$Projects$Locations$Runtimes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Runtime in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.runtimes.create({
     *     // Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. User-defined unique ID of this Runtime.
     *     runtimeId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessConfig": {},
     *       //   "createTime": "my_createTime",
     *       //   "healthState": "my_healthState",
     *       //   "metrics": {},
     *       //   "name": "my_name",
     *       //   "softwareConfig": {},
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime",
     *       //   "virtualMachine": {}
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
      params: Params$Resource$Projects$Locations$Runtimes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Runtimes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Runtimes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Runtimes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Runtimes$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Runtimes$Create
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
        {}) as Params$Resource$Projects$Locations$Runtimes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Runtimes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/runtimes').replace(
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
     * Deletes a single Runtime.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.runtimes.delete({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     *     name: 'projects/my-project/locations/my-location/runtimes/my-runtime',
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
      params: Params$Resource$Projects$Locations$Runtimes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Runtimes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Runtimes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Runtimes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Runtimes$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Runtimes$Delete
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
        {}) as Params$Resource$Projects$Locations$Runtimes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Runtimes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * Gets details of a single Runtime. The location must be a regional endpoint rather than zonal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.runtimes.get({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     *     name: 'projects/my-project/locations/my-location/runtimes/my-runtime',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessConfig": {},
     *   //   "createTime": "my_createTime",
     *   //   "healthState": "my_healthState",
     *   //   "metrics": {},
     *   //   "name": "my_name",
     *   //   "softwareConfig": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "virtualMachine": {}
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
      params: Params$Resource$Projects$Locations$Runtimes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Runtimes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Runtime>;
    get(
      params: Params$Resource$Projects$Locations$Runtimes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Runtimes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Runtime>,
      callback: BodyResponseCallback<Schema$Runtime>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Runtimes$Get,
      callback: BodyResponseCallback<Schema$Runtime>
    ): void;
    get(callback: BodyResponseCallback<Schema$Runtime>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Runtimes$Get
        | BodyResponseCallback<Schema$Runtime>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Runtime>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Runtime>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Runtime> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Runtimes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Runtimes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
        createAPIRequest<Schema$Runtime>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Runtime>(parameters);
      }
    }

    /**
     * Lists Runtimes in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.runtimes.list({
     *     // Maximum return size of the list call.
     *     pageSize: 'placeholder-value',
     *     // A previous returned page token that can be used to continue listing from the last result.
     *     pageToken: 'placeholder-value',
     *     // Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "runtimes": [],
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
      params: Params$Resource$Projects$Locations$Runtimes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Runtimes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRuntimesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Runtimes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Runtimes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRuntimesResponse>,
      callback: BodyResponseCallback<Schema$ListRuntimesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Runtimes$List,
      callback: BodyResponseCallback<Schema$ListRuntimesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRuntimesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Runtimes$List
        | BodyResponseCallback<Schema$ListRuntimesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRuntimesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRuntimesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRuntimesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Runtimes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Runtimes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/runtimes').replace(
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
        createAPIRequest<Schema$ListRuntimesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRuntimesResponse>(parameters);
      }
    }

    /**
     * Report and process a runtime event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.runtimes.reportEvent({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     *     name: 'projects/my-project/locations/my-location/runtimes/my-runtime',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "event": {},
     *       //   "vmId": "my_vmId"
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
    reportEvent(
      params: Params$Resource$Projects$Locations$Runtimes$Reportevent,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reportEvent(
      params?: Params$Resource$Projects$Locations$Runtimes$Reportevent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    reportEvent(
      params: Params$Resource$Projects$Locations$Runtimes$Reportevent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reportEvent(
      params: Params$Resource$Projects$Locations$Runtimes$Reportevent,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reportEvent(
      params: Params$Resource$Projects$Locations$Runtimes$Reportevent,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reportEvent(callback: BodyResponseCallback<Schema$Operation>): void;
    reportEvent(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Runtimes$Reportevent
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
        {}) as Params$Resource$Projects$Locations$Runtimes$Reportevent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Runtimes$Reportevent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:reportEvent').replace(
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
     * Resets a Managed Notebook Runtime.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.runtimes.reset({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     *     name: 'projects/my-project/locations/my-location/runtimes/my-runtime',
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
      params: Params$Resource$Projects$Locations$Runtimes$Reset,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reset(
      params?: Params$Resource$Projects$Locations$Runtimes$Reset,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    reset(
      params: Params$Resource$Projects$Locations$Runtimes$Reset,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reset(
      params: Params$Resource$Projects$Locations$Runtimes$Reset,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reset(
      params: Params$Resource$Projects$Locations$Runtimes$Reset,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reset(callback: BodyResponseCallback<Schema$Operation>): void;
    reset(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Runtimes$Reset
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
        {}) as Params$Resource$Projects$Locations$Runtimes$Reset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Runtimes$Reset;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:reset').replace(/([^:]\/)\/+/g, '$1'),
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
     * Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.runtimes.start({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     *     name: 'projects/my-project/locations/my-location/runtimes/my-runtime',
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
    start(
      params: Params$Resource$Projects$Locations$Runtimes$Start,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    start(
      params?: Params$Resource$Projects$Locations$Runtimes$Start,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    start(
      params: Params$Resource$Projects$Locations$Runtimes$Start,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Runtimes$Start,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Runtimes$Start,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(callback: BodyResponseCallback<Schema$Operation>): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Runtimes$Start
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
        {}) as Params$Resource$Projects$Locations$Runtimes$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Runtimes$Start;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:start').replace(/([^:]\/)\/+/g, '$1'),
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
     * Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.runtimes.stop({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     *     name: 'projects/my-project/locations/my-location/runtimes/my-runtime',
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
    stop(
      params: Params$Resource$Projects$Locations$Runtimes$Stop,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    stop(
      params?: Params$Resource$Projects$Locations$Runtimes$Stop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    stop(
      params: Params$Resource$Projects$Locations$Runtimes$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Runtimes$Stop,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Runtimes$Stop,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(callback: BodyResponseCallback<Schema$Operation>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Runtimes$Stop
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
        {}) as Params$Resource$Projects$Locations$Runtimes$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Runtimes$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:stop').replace(/([^:]\/)\/+/g, '$1'),
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
     * Switch a Managed Notebook Runtime.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.runtimes.switch({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     *     name: 'projects/my-project/locations/my-location/runtimes/my-runtime',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "acceleratorConfig": {},
     *       //   "machineType": "my_machineType"
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
    switch(
      params: Params$Resource$Projects$Locations$Runtimes$Switch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    switch(
      params?: Params$Resource$Projects$Locations$Runtimes$Switch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    switch(
      params: Params$Resource$Projects$Locations$Runtimes$Switch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    switch(
      params: Params$Resource$Projects$Locations$Runtimes$Switch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    switch(
      params: Params$Resource$Projects$Locations$Runtimes$Switch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    switch(callback: BodyResponseCallback<Schema$Operation>): void;
    switch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Runtimes$Switch
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
        {}) as Params$Resource$Projects$Locations$Runtimes$Switch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Runtimes$Switch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:switch').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Runtimes$Create
    extends StandardParameters {
    /**
     * Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. User-defined unique ID of this Runtime.
     */
    runtimeId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Runtime;
  }
  export interface Params$Resource$Projects$Locations$Runtimes$Delete
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Runtimes$Get
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Runtimes$List
    extends StandardParameters {
    /**
     * Maximum return size of the list call.
     */
    pageSize?: number;
    /**
     * A previous returned page token that can be used to continue listing from the last result.
     */
    pageToken?: string;
    /**
     * Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Runtimes$Reportevent
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReportRuntimeEventRequest;
  }
  export interface Params$Resource$Projects$Locations$Runtimes$Reset
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResetRuntimeRequest;
  }
  export interface Params$Resource$Projects$Locations$Runtimes$Start
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartRuntimeRequest;
  }
  export interface Params$Resource$Projects$Locations$Runtimes$Stop
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StopRuntimeRequest;
  }
  export interface Params$Resource$Projects$Locations$Runtimes$Switch
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/runtimes/{runtime_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SwitchRuntimeRequest;
  }

  export class Resource$Projects$Locations$Schedules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Scheduled Notebook in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.schedules.create({
     *     // Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. User-defined unique ID of this schedule.
     *     scheduleId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "cronSchedule": "my_cronSchedule",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "executionTemplate": {},
     *       //   "name": "my_name",
     *       //   "recentExecutions": [],
     *       //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Schedules$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Schedules$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Schedules$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Schedules$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Schedules$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schedules$Create
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
        {}) as Params$Resource$Projects$Locations$Schedules$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Schedules$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/schedules').replace(
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
     * Deletes schedule and all underlying jobs
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.schedules.delete({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/schedules/{schedule_id\}`
     *     name: 'projects/my-project/locations/my-location/schedules/my-schedule',
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
      params: Params$Resource$Projects$Locations$Schedules$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Schedules$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Schedules$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schedules$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schedules$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schedules$Delete
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
        {}) as Params$Resource$Projects$Locations$Schedules$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Schedules$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
     * Gets details of schedule
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.schedules.get({
     *     // Required. Format: `projects/{project_id\}/locations/{location\}/schedules/{schedule_id\}`
     *     name: 'projects/my-project/locations/my-location/schedules/my-schedule',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "cronSchedule": "my_cronSchedule",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "executionTemplate": {},
     *   //   "name": "my_name",
     *   //   "recentExecutions": [],
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Schedules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Schedules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Schedule>;
    get(
      params: Params$Resource$Projects$Locations$Schedules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schedules$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Schedule>,
      callback: BodyResponseCallback<Schema$Schedule>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schedules$Get,
      callback: BodyResponseCallback<Schema$Schedule>
    ): void;
    get(callback: BodyResponseCallback<Schema$Schedule>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schedules$Get
        | BodyResponseCallback<Schema$Schedule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Schedule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Schedule>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Schedule> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schedules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Schedules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
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
        createAPIRequest<Schema$Schedule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Schedule>(parameters);
      }
    }

    /**
     * Lists schedules in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.schedules.list({
     *     // Filter applied to resulting schedules.
     *     filter: 'placeholder-value',
     *     // Field to order results by.
     *     orderBy: 'placeholder-value',
     *     // Maximum return size of the list call.
     *     pageSize: 'placeholder-value',
     *     // A previous returned page token that can be used to continue listing from the last result.
     *     pageToken: 'placeholder-value',
     *     // Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "schedules": [],
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
      params: Params$Resource$Projects$Locations$Schedules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Schedules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSchedulesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Schedules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schedules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSchedulesResponse>,
      callback: BodyResponseCallback<Schema$ListSchedulesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schedules$List,
      callback: BodyResponseCallback<Schema$ListSchedulesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSchedulesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schedules$List
        | BodyResponseCallback<Schema$ListSchedulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSchedulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSchedulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSchedulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schedules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Schedules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/schedules').replace(
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
        createAPIRequest<Schema$ListSchedulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSchedulesResponse>(parameters);
      }
    }

    /**
     * Triggers execution of an existing schedule.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/notebooks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const notebooks = google.notebooks('v1');
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
     *   const res = await notebooks.projects.locations.schedules.trigger({
     *     // Required. Format: `parent=projects/{project_id\}/locations/{location\}/schedules/{schedule_id\}`
     *     name: 'projects/my-project/locations/my-location/schedules/my-schedule',
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
    trigger(
      params: Params$Resource$Projects$Locations$Schedules$Trigger,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    trigger(
      params?: Params$Resource$Projects$Locations$Schedules$Trigger,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    trigger(
      params: Params$Resource$Projects$Locations$Schedules$Trigger,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    trigger(
      params: Params$Resource$Projects$Locations$Schedules$Trigger,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    trigger(
      params: Params$Resource$Projects$Locations$Schedules$Trigger,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    trigger(callback: BodyResponseCallback<Schema$Operation>): void;
    trigger(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schedules$Trigger
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
        {}) as Params$Resource$Projects$Locations$Schedules$Trigger;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Schedules$Trigger;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://notebooks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:trigger').replace(
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

  export interface Params$Resource$Projects$Locations$Schedules$Create
    extends StandardParameters {
    /**
     * Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. User-defined unique ID of this schedule.
     */
    scheduleId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Schedule;
  }
  export interface Params$Resource$Projects$Locations$Schedules$Delete
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/schedules/{schedule_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schedules$Get
    extends StandardParameters {
    /**
     * Required. Format: `projects/{project_id\}/locations/{location\}/schedules/{schedule_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schedules$List
    extends StandardParameters {
    /**
     * Filter applied to resulting schedules.
     */
    filter?: string;
    /**
     * Field to order results by.
     */
    orderBy?: string;
    /**
     * Maximum return size of the list call.
     */
    pageSize?: number;
    /**
     * A previous returned page token that can be used to continue listing from the last result.
     */
    pageToken?: string;
    /**
     * Required. Format: `parent=projects/{project_id\}/locations/{location\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Schedules$Trigger
    extends StandardParameters {
    /**
     * Required. Format: `parent=projects/{project_id\}/locations/{location\}/schedules/{schedule_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TriggerScheduleRequest;
  }
}
