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

export namespace cloudbuild_v1 {
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
   * Cloud Build API
   *
   * Creates and manages builds on Google Cloud Platform.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudbuild = google.cloudbuild('v1');
   * ```
   */
  export class Cloudbuild {
    context: APIRequestContext;
    operations: Resource$Operations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.operations = new Resource$Operations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.
   */
  export interface Schema$ArtifactObjects {
    /**
     * Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix.
     */
    location?: string | null;
    /**
     * Path globs used to match files in the build's workspace.
     */
    paths?: string[] | null;
    /**
     * Output only. Stores timing information for pushing all artifact objects.
     */
    timing?: Schema$TimeSpan;
  }
  /**
   * An artifact that was uploaded during a build. This is a single record in the artifact manifest JSON file.
   */
  export interface Schema$ArtifactResult {
    /**
     * The file hash of the artifact.
     */
    fileHash?: Schema$FileHashes[];
    /**
     * The path of an artifact in a Google Cloud Storage bucket, with the generation number. For example, `gs://mybucket/path/to/output.jar#generation`.
     */
    location?: string | null;
  }
  /**
   * Artifacts produced by a build that should be uploaded upon successful completion of all build steps.
   */
  export interface Schema$Artifacts {
    /**
     * A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE.
     */
    images?: string[] | null;
    /**
     * A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE.
     */
    objects?: Schema$ArtifactObjects;
  }
  /**
   * A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
   */
  export interface Schema$Build {
    /**
     * Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
     */
    artifacts?: Schema$Artifacts;
    /**
     * Secrets and secret environment variables.
     */
    availableSecrets?: Schema$Secrets;
    /**
     * Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically.
     */
    buildTriggerId?: string | null;
    /**
     * Output only. Time at which the request to create the build was received.
     */
    createTime?: string | null;
    /**
     * Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution.
     */
    finishTime?: string | null;
    /**
     * Output only. Unique identifier of the build.
     */
    id?: string | null;
    /**
     * A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`.
     */
    images?: string[] | null;
    /**
     * Google Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket\}/log-${build_id\}.txt`.
     */
    logsBucket?: string | null;
    /**
     * Output only. URL to logs for this build in Google Cloud Console.
     */
    logUrl?: string | null;
    /**
     * Output only. The 'Build' name with format: `projects/{project\}/locations/{location\}/builds/{build\}`, where {build\} is a unique identifier generated by the service.
     */
    name?: string | null;
    /**
     * Special options for this build.
     */
    options?: Schema$BuildOptions;
    /**
     * Output only. ID of the project.
     */
    projectId?: string | null;
    /**
     * TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time.
     */
    queueTtl?: string | null;
    /**
     * Output only. Results of the build.
     */
    results?: Schema$Results;
    /**
     * Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets
     */
    secrets?: Schema$Secret[];
    /**
     * IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID\}/serviceAccounts/{ACCOUNT\}`. ACCOUNT can be email address or uniqueId of the service account.
     */
    serviceAccount?: string | null;
    /**
     * The location of the source files to build.
     */
    source?: Schema$Source;
    /**
     * Output only. A permanent fixed identifier for source.
     */
    sourceProvenance?: Schema$SourceProvenance;
    /**
     * Output only. Time at which execution of the build was started.
     */
    startTime?: string | null;
    /**
     * Output only. Status of the build.
     */
    status?: string | null;
    /**
     * Output only. Customer-readable message about the current status.
     */
    statusDetail?: string | null;
    /**
     * Required. The operations to be performed on the workspace.
     */
    steps?: Schema$BuildStep[];
    /**
     * Substitutions data for `Build` resource.
     */
    substitutions?: {[key: string]: string} | null;
    /**
     * Tags for annotation of a `Build`. These are not docker tags.
     */
    tags?: string[] | null;
    /**
     * Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is ten minutes.
     */
    timeout?: string | null;
    /**
     * Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps * PUSH: time to push all specified images. * FETCHSOURCE: time to fetch source. If the build does not specify source or images, these keys will not be included.
     */
    timing?: {[key: string]: Schema$TimeSpan} | null;
    /**
     * Output only. Non-fatal problems encountered during the execution of the build.
     */
    warnings?: Schema$Warning[];
  }
  /**
   * Metadata for build operations.
   */
  export interface Schema$BuildOperationMetadata {
    /**
     * The build that the operation is tracking.
     */
    build?: Schema$Build;
  }
  /**
   * Optional arguments to enable specific features of builds.
   */
  export interface Schema$BuildOptions {
    /**
     * Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 1000GB; builds that request more than the maximum are rejected with an error.
     */
    diskSizeGb?: string | null;
    /**
     * Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file.
     */
    dynamicSubstitutions?: boolean | null;
    /**
     * A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
     */
    env?: string[] | null;
    /**
     * Option to specify the logging mode, which determines if and where build logs are stored.
     */
    logging?: string | null;
    /**
     * Option to define build log streaming behavior to Google Cloud Storage.
     */
    logStreamingOption?: string | null;
    /**
     * Compute Engine machine type on which to run the build.
     */
    machineType?: string | null;
    /**
     * Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.
     */
    pool?: Schema$PoolOption;
    /**
     * Requested verifiability options.
     */
    requestedVerifyOption?: string | null;
    /**
     * A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build.
     */
    secretEnv?: string[] | null;
    /**
     * Requested hash for SourceProvenance.
     */
    sourceProvenanceHash?: string[] | null;
    /**
     * Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file.
     */
    substitutionOption?: string | null;
    /**
     * Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration.
     */
    volumes?: Schema$Volume[];
    /**
     * This field deprecated; please use `pool.name` instead.
     */
    workerPool?: string | null;
  }
  /**
   * A step in the build pipeline.
   */
  export interface Schema$BuildStep {
    /**
     * A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.
     */
    args?: string[] | null;
    /**
     * Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution.
     */
    dir?: string | null;
    /**
     * Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.
     */
    entrypoint?: string | null;
    /**
     * A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
     */
    env?: string[] | null;
    /**
     * Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.
     */
    id?: string | null;
    /**
     * Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.
     */
    name?: string | null;
    /**
     * Output only. Stores timing information for pulling this build step's builder image only.
     */
    pullTiming?: Schema$TimeSpan;
    /**
     * A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`.
     */
    secretEnv?: string[] | null;
    /**
     * Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses.
     */
    status?: string | null;
    /**
     * Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.
     */
    timeout?: string | null;
    /**
     * Output only. Stores timing information for executing this build step.
     */
    timing?: Schema$TimeSpan;
    /**
     * List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.
     */
    volumes?: Schema$Volume[];
    /**
     * The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully.
     */
    waitFor?: string[] | null;
  }
  /**
   * Configuration for an automated build in response to source repository changes.
   */
  export interface Schema$BuildTrigger {
    /**
     * Autodetect build configuration. The following precedence is used (case insensitive): 1. cloudbuild.yaml 2. cloudbuild.yml 3. cloudbuild.json 4. Dockerfile Currently only available for GitHub App Triggers.
     */
    autodetect?: boolean | null;
    /**
     * Contents of the build template.
     */
    build?: Schema$Build;
    /**
     * Output only. Time when the trigger was created.
     */
    createTime?: string | null;
    /**
     * Human-readable description of this trigger.
     */
    description?: string | null;
    /**
     * If true, the trigger will never automatically execute a build.
     */
    disabled?: boolean | null;
    /**
     * Path, from the source root, to the build configuration file (i.e. cloudbuild.yaml).
     */
    filename?: string | null;
    /**
     * Optional. A Common Expression Language string.
     */
    filter?: string | null;
    /**
     * GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received. Mutually exclusive with `trigger_template`.
     */
    github?: Schema$GitHubEventsConfig;
    /**
     * Output only. Unique identifier of the trigger.
     */
    id?: string | null;
    /**
     * ignored_files and included_files are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for "**". If ignored_files and changed files are both empty, then they are not used to determine whether or not to trigger a build. If ignored_files is not empty, then we ignore any files that match any of the ignored_file globs. If the change has no files that are outside of the ignored_files globs, then we do not trigger a build.
     */
    ignoredFiles?: string[] | null;
    /**
     * If any of the files altered in the commit pass the ignored_files filter and included_files is empty, then as far as this filter is concerned, we should trigger the build. If any of the files altered in the commit pass the ignored_files filter and included_files is not empty, then we make sure that at least one of those files matches a included_files glob. If not, then we do not trigger a build.
     */
    includedFiles?: string[] | null;
    /**
     * User-assigned name of the trigger. Must be unique within the project. Trigger names must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character.
     */
    name?: string | null;
    /**
     * PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
     */
    pubsubConfig?: Schema$PubsubConfig;
    /**
     * The `Trigger` name with format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`, where {trigger\} is a unique identifier generated by the service.
     */
    resourceName?: string | null;
    /**
     * Substitutions for Build resource. The keys must match the following regular expression: `^_[A-Z0-9_]+$`.
     */
    substitutions?: {[key: string]: string} | null;
    /**
     * Tags for annotation of a `BuildTrigger`
     */
    tags?: string[] | null;
    /**
     * Template describing the types of source changes to trigger a build. Branch and tag names in trigger templates are interpreted as regular expressions. Any branch or tag change that matches that regular expression will trigger a build. Mutually exclusive with `github`.
     */
    triggerTemplate?: Schema$RepoSource;
    /**
     * WebhookConfig describes the configuration of a trigger that creates a build whenever a webhook is sent to a trigger's webhook URL.
     */
    webhookConfig?: Schema$WebhookConfig;
  }
  /**
   * An image built by the pipeline.
   */
  export interface Schema$BuiltImage {
    /**
     * Docker Registry 2.0 digest.
     */
    digest?: string | null;
    /**
     * Name used to push the container image to Google Container Registry, as presented to `docker push`.
     */
    name?: string | null;
    /**
     * Output only. Stores timing information for pushing the specified image.
     */
    pushTiming?: Schema$TimeSpan;
  }
  /**
   * Request to cancel an ongoing build.
   */
  export interface Schema$CancelBuildRequest {
    /**
     * Required. ID of the build.
     */
    id?: string | null;
    /**
     * The name of the `Build` to cancel. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     */
    name?: string | null;
    /**
     * Required. ID of the project.
     */
    projectId?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Metadata for the `CreateWorkerPool` operation.
   */
  export interface Schema$CreateWorkerPoolOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the `WorkerPool` to create. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`.
     */
    workerPool?: string | null;
  }
  /**
   * Metadata for the `DeleteWorkerPool` operation.
   */
  export interface Schema$DeleteWorkerPoolOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the `WorkerPool` being deleted. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`.
     */
    workerPool?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.
   */
  export interface Schema$FileHashes {
    /**
     * Collection of file hashes.
     */
    fileHash?: Schema$Hash[];
  }
  /**
   * GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received. This message is experimental.
   */
  export interface Schema$GitHubEventsConfig {
    /**
     * The installationID that emits the GitHub event.
     */
    installationId?: string | null;
    /**
     * Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".
     */
    name?: string | null;
    /**
     * Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".
     */
    owner?: string | null;
    /**
     * filter to match changes in pull requests.
     */
    pullRequest?: Schema$PullRequestFilter;
    /**
     * filter to match changes in refs like branches, tags.
     */
    push?: Schema$PushFilter;
  }
  /**
   * Container message for hash values.
   */
  export interface Schema$Hash {
    /**
     * The type of hash that was performed.
     */
    type?: string | null;
    /**
     * The hash value.
     */
    value?: string | null;
  }
  /**
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$HttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string | null;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string | null;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}> | null;
  }
  /**
   * HTTPDelivery is the delivery configuration for an HTTP notification.
   */
  export interface Schema$HTTPDelivery {
    /**
     * The URI to which JSON-containing HTTP POST requests should be sent.
     */
    uri?: string | null;
  }
  /**
   * Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.
   */
  export interface Schema$InlineSecret {
    /**
     * Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.
     */
    envMap?: {[key: string]: string} | null;
    /**
     * Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/x/locations/x/keyRings/x/cryptoKeys/x
     */
    kmsKeyName?: string | null;
  }
  /**
   * Response including listed builds.
   */
  export interface Schema$ListBuildsResponse {
    /**
     * Builds will be sorted by `create_time`, descending.
     */
    builds?: Schema$Build[];
    /**
     * Token to receive the next page of results. This will be absent if the end of the response list has been reached.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response containing existing `BuildTriggers`.
   */
  export interface Schema$ListBuildTriggersResponse {
    /**
     * Token to receive the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * `BuildTriggers` for the project, sorted by `create_time` descending.
     */
    triggers?: Schema$BuildTrigger[];
  }
  /**
   * Response containing existing `WorkerPools`.
   */
  export interface Schema$ListWorkerPoolsResponse {
    /**
     * Continuation token used to page through large result sets. Provide this value in a subsequent ListWorkerPoolsRequest to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * `WorkerPools` for the specified project.
     */
    workerPools?: Schema$WorkerPool[];
  }
  /**
   * Defines the network configuration for the pool.
   */
  export interface Schema$NetworkConfig {
    /**
     * Option to configure network egress for the workers.
     */
    egressOption?: string | null;
    /**
     * Required. Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to `WorkerPool.project_id` on the service producer network. Must be in the format `projects/{project\}/global/networks/{network\}`, where `{project\}` is a project number, such as `12345`, and `{network\}` is the name of a VPC network in the project. See [Understanding network configuration options](https://cloud.google.com/build/docs/private-pools/set-up-private-pool-environment)
     */
    peeredNetwork?: string | null;
  }
  /**
   * Notification is the container which holds the data that is relevant to this particular notification.
   */
  export interface Schema$Notification {
    /**
     * The filter string to use for notification filtering. Currently, this is assumed to be a CEL program. See https://opensource.google/projects/cel for more.
     */
    filter?: string | null;
    /**
     * Configuration for HTTP delivery.
     */
    httpDelivery?: Schema$HTTPDelivery;
    /**
     * Configuration for Slack delivery.
     */
    slackDelivery?: Schema$SlackDelivery;
    /**
     * Configuration for SMTP (email) delivery.
     */
    smtpDelivery?: Schema$SMTPDelivery;
    /**
     * Escape hatch for users to supply custom delivery configs.
     */
    structDelivery?: {[key: string]: any} | null;
  }
  /**
   * NotifierConfig is the top-level configuration message.
   */
  export interface Schema$NotifierConfig {
    /**
     * The API version of this configuration format.
     */
    apiVersion?: string | null;
    /**
     * The type of notifier to use (e.g. SMTPNotifier).
     */
    kind?: string | null;
    /**
     * Metadata for referring to/handling/deploying this notifier.
     */
    metadata?: Schema$NotifierMetadata;
    /**
     * The actual configuration for this notifier.
     */
    spec?: Schema$NotifierSpec;
  }
  /**
   * NotifierMetadata contains the data which can be used to reference or describe this notifier.
   */
  export interface Schema$NotifierMetadata {
    /**
     * The human-readable and user-given name for the notifier. For example: "repo-merge-email-notifier".
     */
    name?: string | null;
    /**
     * The string representing the name and version of notifier to deploy. Expected to be of the form of "/:". For example: "gcr.io/my-project/notifiers/smtp:1.2.34".
     */
    notifier?: string | null;
  }
  /**
   * NotifierSecret is the container that maps a secret name (reference) to its Google Cloud Secret Manager resource path.
   */
  export interface Schema$NotifierSecret {
    /**
     * Name is the local name of the secret, such as the verbatim string "my-smtp-password".
     */
    name?: string | null;
    /**
     * Value is interpreted to be a resource path for fetching the actual (versioned) secret data for this secret. For example, this would be a Google Cloud Secret Manager secret version resource path like: "projects/my-project/secrets/my-secret/versions/latest".
     */
    value?: string | null;
  }
  /**
   * NotifierSecretRef contains the reference to a secret stored in the corresponding NotifierSpec.
   */
  export interface Schema$NotifierSecretRef {
    /**
     * The value of `secret_ref` should be a `name` that is registered in a `Secret` in the `secrets` list of the `Spec`.
     */
    secretRef?: string | null;
  }
  /**
   * NotifierSpec is the configuration container for notifications.
   */
  export interface Schema$NotifierSpec {
    /**
     * The configuration of this particular notifier.
     */
    notification?: Schema$Notification;
    /**
     * Configurations for secret resources used by this particular notifier.
     */
    secrets?: Schema$NotifierSecret[];
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
   * Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.
   */
  export interface Schema$PoolOption {
    /**
     * The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project\}/locations/{location\}/workerPools/{workerPoolId\}
     */
    name?: string | null;
  }
  /**
   * Configuration for a V1 `PrivatePool`.
   */
  export interface Schema$PrivatePoolV1Config {
    /**
     * Network configuration for the pool.
     */
    networkConfig?: Schema$NetworkConfig;
    /**
     * Machine configuration for the workers in the pool.
     */
    workerConfig?: Schema$WorkerConfig;
  }
  /**
   * PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
   */
  export interface Schema$PubsubConfig {
    /**
     * Service account that will make the push request.
     */
    serviceAccountEmail?: string | null;
    /**
     * Potential issues with the underlying Pub/Sub subscription configuration. Only populated on get requests.
     */
    state?: string | null;
    /**
     * Output only. Name of the subscription. Format is `projects/{project\}/subscriptions/{subscription\}`.
     */
    subscription?: string | null;
    /**
     * The name of the topic from which this subscription is receiving messages. Format is `projects/{project\}/topics/{topic\}`.
     */
    topic?: string | null;
  }
  /**
   * PullRequestFilter contains filter properties for matching GitHub Pull Requests.
   */
  export interface Schema$PullRequestFilter {
    /**
     * Regex of branches to match. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    branch?: string | null;
    /**
     * Configure builds to run whether a repository owner or collaborator need to comment `/gcbrun`.
     */
    commentControl?: string | null;
    /**
     * If true, branches that do NOT match the git_ref will trigger a build.
     */
    invertRegex?: boolean | null;
  }
  /**
   * Push contains filter properties for matching GitHub git pushes.
   */
  export interface Schema$PushFilter {
    /**
     * Regexes matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    branch?: string | null;
    /**
     * When true, only trigger a build if the revision regex does NOT match the git_ref regex.
     */
    invertRegex?: boolean | null;
    /**
     * Regexes matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    tag?: string | null;
  }
  /**
   * ReceiveTriggerWebhookResponse [Experimental] is the response object for the ReceiveTriggerWebhook method.
   */
  export interface Schema$ReceiveTriggerWebhookResponse {}
  /**
   * Location of the source in a Google Cloud Source Repository.
   */
  export interface Schema$RepoSource {
    /**
     * Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    branchName?: string | null;
    /**
     * Explicit commit SHA to build.
     */
    commitSha?: string | null;
    /**
     * Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.
     */
    dir?: string | null;
    /**
     * Only trigger a build if the revision regex does NOT match the revision regex.
     */
    invertRegex?: boolean | null;
    /**
     * ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.
     */
    projectId?: string | null;
    /**
     * Name of the Cloud Source Repository.
     */
    repoName?: string | null;
    /**
     * Substitutions to use in a triggered build. Should only be used with RunBuildTrigger
     */
    substitutions?: {[key: string]: string} | null;
    /**
     * Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    tagName?: string | null;
  }
  /**
   * Artifacts created by the build pipeline.
   */
  export interface Schema$Results {
    /**
     * Path to the artifact manifest. Only populated when artifacts are uploaded.
     */
    artifactManifest?: string | null;
    /**
     * Time to push all non-container artifacts.
     */
    artifactTiming?: Schema$TimeSpan;
    /**
     * List of build step digests, in the order corresponding to build step indices.
     */
    buildStepImages?: string[] | null;
    /**
     * List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 4KB of data is stored.
     */
    buildStepOutputs?: string[] | null;
    /**
     * Container images that were built as a part of the build.
     */
    images?: Schema$BuiltImage[];
    /**
     * Number of artifacts uploaded. Only populated when artifacts are uploaded.
     */
    numArtifacts?: string | null;
  }
  /**
   * Specifies a build to retry.
   */
  export interface Schema$RetryBuildRequest {
    /**
     * Required. Build ID of the original build.
     */
    id?: string | null;
    /**
     * The name of the `Build` to retry. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     */
    name?: string | null;
    /**
     * Required. ID of the project.
     */
    projectId?: string | null;
  }
  /**
   * Specifies a build trigger to run and the source to use.
   */
  export interface Schema$RunBuildTriggerRequest {
    /**
     * Required. ID of the project.
     */
    projectId?: string | null;
    /**
     * Source to build against this trigger.
     */
    source?: Schema$RepoSource;
    /**
     * Required. ID of the trigger.
     */
    triggerId?: string | null;
  }
  /**
   * Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials.
   */
  export interface Schema$Secret {
    /**
     * Cloud KMS key name to use to decrypt these envs.
     */
    kmsKeyName?: string | null;
    /**
     * Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.
     */
    secretEnv?: {[key: string]: string} | null;
  }
  /**
   * Pairs a secret environment variable with a SecretVersion in Secret Manager.
   */
  export interface Schema$SecretManagerSecret {
    /**
     * Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step.
     */
    env?: string | null;
    /**
     * Resource name of the SecretVersion. In format: projects/x/secrets/x/versions/x
     */
    versionName?: string | null;
  }
  /**
   * Secrets and secret environment variables.
   */
  export interface Schema$Secrets {
    /**
     * Secrets encrypted with KMS key and the associated secret environment variable.
     */
    inline?: Schema$InlineSecret[];
    /**
     * Secrets in Secret Manager and associated secret environment variable.
     */
    secretManager?: Schema$SecretManagerSecret[];
  }
  /**
   * SlackDelivery is the delivery configuration for delivering Slack messages via webhooks. See Slack webhook documentation at: https://api.slack.com/messaging/webhooks.
   */
  export interface Schema$SlackDelivery {
    /**
     * The secret reference for the Slack webhook URI for sending messages to a channel.
     */
    webhookUri?: Schema$NotifierSecretRef;
  }
  /**
   * SMTPDelivery is the delivery configuration for an SMTP (email) notification.
   */
  export interface Schema$SMTPDelivery {
    /**
     * This is the SMTP account/email that appears in the `From:` of the email. If empty, it is assumed to be sender.
     */
    fromAddress?: string | null;
    /**
     * The SMTP sender's password.
     */
    password?: Schema$NotifierSecretRef;
    /**
     * The SMTP port of the server.
     */
    port?: string | null;
    /**
     * This is the list of addresses to which we send the email (i.e. in the `To:` of the email).
     */
    recipientAddresses?: string[] | null;
    /**
     * This is the SMTP account/email that is used to send the message.
     */
    senderAddress?: string | null;
    /**
     * The address of the SMTP server.
     */
    server?: string | null;
  }
  /**
   * Location of the source in a supported storage service.
   */
  export interface Schema$Source {
    /**
     * If provided, get the source from this location in a Cloud Source Repository.
     */
    repoSource?: Schema$RepoSource;
    /**
     * If provided, get the source from this location in Google Cloud Storage.
     */
    storageSource?: Schema$StorageSource;
    /**
     * If provided, get the source from this manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).
     */
    storageSourceManifest?: Schema$StorageSourceManifest;
  }
  /**
   * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
   */
  export interface Schema$SourceProvenance {
    /**
     * Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file.
     */
    fileHashes?: {[key: string]: Schema$FileHashes} | null;
    /**
     * A copy of the build's `source.repo_source`, if exists, with any revisions resolved.
     */
    resolvedRepoSource?: Schema$RepoSource;
    /**
     * A copy of the build's `source.storage_source`, if exists, with any generations resolved.
     */
    resolvedStorageSource?: Schema$StorageSource;
    /**
     * A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview.
     */
    resolvedStorageSourceManifest?: Schema$StorageSourceManifest;
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
   * Location of the source in an archive file in Google Cloud Storage.
   */
  export interface Schema$StorageSource {
    /**
     * Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     */
    bucket?: string | null;
    /**
     * Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.
     */
    generation?: string | null;
    /**
     * Google Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build.
     */
    object?: string | null;
  }
  /**
   * Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).
   */
  export interface Schema$StorageSourceManifest {
    /**
     * Google Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     */
    bucket?: string | null;
    /**
     * Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.
     */
    generation?: string | null;
    /**
     * Google Cloud Storage object containing the source manifest. This object must be a JSON file.
     */
    object?: string | null;
  }
  /**
   * Start and end times for a build execution phase.
   */
  export interface Schema$TimeSpan {
    /**
     * End of time span.
     */
    endTime?: string | null;
    /**
     * Start of time span.
     */
    startTime?: string | null;
  }
  /**
   * Metadata for the `UpdateWorkerPool` operation.
   */
  export interface Schema$UpdateWorkerPoolOperationMetadata {
    /**
     * Time the operation was completed.
     */
    completeTime?: string | null;
    /**
     * Time the operation was created.
     */
    createTime?: string | null;
    /**
     * The resource name of the `WorkerPool` being updated. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`.
     */
    workerPool?: string | null;
  }
  /**
   * Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.
   */
  export interface Schema$Volume {
    /**
     * Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.
     */
    name?: string | null;
    /**
     * Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.
     */
    path?: string | null;
  }
  /**
   * A non-fatal problem encountered during the execution of the build.
   */
  export interface Schema$Warning {
    /**
     * The priority for this warning.
     */
    priority?: string | null;
    /**
     * Explanation of the warning generated.
     */
    text?: string | null;
  }
  /**
   * WebhookConfig describes the configuration of a trigger that creates a build whenever a webhook is sent to a trigger's webhook URL.
   */
  export interface Schema$WebhookConfig {
    /**
     * Required. Resource name for the secret required as a URL parameter.
     */
    secret?: string | null;
    /**
     * Potential issues with the underlying Pub/Sub subscription configuration. Only populated on get requests.
     */
    state?: string | null;
  }
  /**
   * Defines the configuration to be used for creating workers in the pool.
   */
  export interface Schema$WorkerConfig {
    /**
     * Size of the disk attached to the worker, in GB. See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). Specify a value of up to 1000. If `0` is specified, Cloud Build will use a standard disk size.
     */
    diskSizeGb?: string | null;
    /**
     * Machine type of a worker, such as `e2-medium`. See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). If left blank, Cloud Build will use a sensible default.
     */
    machineType?: string | null;
  }
  /**
   * Configuration for a `WorkerPool`. Cloud Build owns and maintains a pool of workers for general use and have no access to a project's private network. By default, builds submitted to Cloud Build will use a worker from this pool. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Private `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of private pools, see [Private pools overview](https://cloud.google.com/build/docs/private-pools/private-pools-overview).
   */
  export interface Schema$WorkerPool {
    /**
     * User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Time at which the request to create the `WorkerPool` was received.
     */
    createTime?: string | null;
    /**
     * Output only. Time at which the request to delete the `WorkerPool` was received.
     */
    deleteTime?: string | null;
    /**
     * A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.
     */
    displayName?: string | null;
    /**
     * Output only. Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Output only. The resource name of the `WorkerPool`, with format `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`. The value of `{worker_pool\}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location\}` is determined by the endpoint accessed.
     */
    name?: string | null;
    /**
     * Private Pool using a v1 configuration.
     */
    privatePoolV1Config?: Schema$PrivatePoolV1Config;
    /**
     * Output only. `WorkerPool` state.
     */
    state?: string | null;
    /**
     * Output only. A unique identifier for the `WorkerPool`.
     */
    uid?: string | null;
    /**
     * Output only. Time at which the request to update the `WorkerPool` was received.
     */
    updateTime?: string | null;
  }

  export class Resource$Operations {
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
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'operations/.*',
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
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Operations$Cancel
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
        {}) as Params$Resource$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.operations.get({
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

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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

  export interface Params$Resource$Operations$Cancel
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
  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    builds: Resource$Projects$Builds;
    locations: Resource$Projects$Locations;
    triggers: Resource$Projects$Triggers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.builds = new Resource$Projects$Builds(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.triggers = new Resource$Projects$Triggers(this.context);
    }
  }

  export class Resource$Projects$Builds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancels a build in progress.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.builds.cancel({
     *     // Required. ID of the build.
     *     id: 'placeholder-value',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "artifacts": {},
     *   //   "availableSecrets": {},
     *   //   "buildTriggerId": "my_buildTriggerId",
     *   //   "createTime": "my_createTime",
     *   //   "finishTime": "my_finishTime",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "logUrl": "my_logUrl",
     *   //   "logsBucket": "my_logsBucket",
     *   //   "name": "my_name",
     *   //   "options": {},
     *   //   "projectId": "my_projectId",
     *   //   "queueTtl": "my_queueTtl",
     *   //   "results": {},
     *   //   "secrets": [],
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "source": {},
     *   //   "sourceProvenance": {},
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusDetail": "my_statusDetail",
     *   //   "steps": [],
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "timeout": "my_timeout",
     *   //   "timing": {},
     *   //   "warnings": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Builds$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Builds$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Build>;
    cancel(
      params: Params$Resource$Projects$Builds$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Builds$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Build>,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    cancel(
      params: Params$Resource$Projects$Builds$Cancel,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Build>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Builds$Cancel
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Build> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Builds$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Builds$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/builds/{id}:cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'id'],
        pathParams: ['id', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Build>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Build>(parameters);
      }
    }

    /**
     * Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.builds.create({
     *     // The parent resource where this build will be created. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'placeholder-value',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "artifacts": {},
     *       //   "availableSecrets": {},
     *       //   "buildTriggerId": "my_buildTriggerId",
     *       //   "createTime": "my_createTime",
     *       //   "finishTime": "my_finishTime",
     *       //   "id": "my_id",
     *       //   "images": [],
     *       //   "logUrl": "my_logUrl",
     *       //   "logsBucket": "my_logsBucket",
     *       //   "name": "my_name",
     *       //   "options": {},
     *       //   "projectId": "my_projectId",
     *       //   "queueTtl": "my_queueTtl",
     *       //   "results": {},
     *       //   "secrets": [],
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "source": {},
     *       //   "sourceProvenance": {},
     *       //   "startTime": "my_startTime",
     *       //   "status": "my_status",
     *       //   "statusDetail": "my_statusDetail",
     *       //   "steps": [],
     *       //   "substitutions": {},
     *       //   "tags": [],
     *       //   "timeout": "my_timeout",
     *       //   "timing": {},
     *       //   "warnings": []
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
      params: Params$Resource$Projects$Builds$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Builds$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Builds$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Builds$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Builds$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Builds$Create
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
        {}) as Params$Resource$Projects$Builds$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Builds$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/builds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
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
     * Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.builds.get({
     *     // Required. ID of the build.
     *     id: 'placeholder-value',
     *     // The name of the `Build` to retrieve. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     *     name: 'placeholder-value',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "artifacts": {},
     *   //   "availableSecrets": {},
     *   //   "buildTriggerId": "my_buildTriggerId",
     *   //   "createTime": "my_createTime",
     *   //   "finishTime": "my_finishTime",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "logUrl": "my_logUrl",
     *   //   "logsBucket": "my_logsBucket",
     *   //   "name": "my_name",
     *   //   "options": {},
     *   //   "projectId": "my_projectId",
     *   //   "queueTtl": "my_queueTtl",
     *   //   "results": {},
     *   //   "secrets": [],
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "source": {},
     *   //   "sourceProvenance": {},
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusDetail": "my_statusDetail",
     *   //   "steps": [],
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "timeout": "my_timeout",
     *   //   "timing": {},
     *   //   "warnings": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Builds$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Builds$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Build>;
    get(
      params: Params$Resource$Projects$Builds$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Builds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Build>,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    get(
      params: Params$Resource$Projects$Builds$Get,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    get(callback: BodyResponseCallback<Schema$Build>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Builds$Get
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Build> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Builds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Builds$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/builds/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'id'],
        pathParams: ['id', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Build>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Build>(parameters);
      }
    }

    /**
     * Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.builds.list({
     *     // The raw filter text to constrain the results.
     *     filter: 'placeholder-value',
     *     // Number of results to return in the list.
     *     pageSize: 'placeholder-value',
     *     // The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
     *     pageToken: 'placeholder-value',
     *     // The parent of the collection of `Builds`. Format: `projects/{project\}/locations/location`
     *     parent: 'placeholder-value',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "builds": [],
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
      params: Params$Resource$Projects$Builds$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Builds$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBuildsResponse>;
    list(
      params: Params$Resource$Projects$Builds$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Builds$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListBuildsResponse>,
      callback: BodyResponseCallback<Schema$ListBuildsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Builds$List,
      callback: BodyResponseCallback<Schema$ListBuildsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListBuildsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Builds$List
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBuildsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Builds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Builds$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/builds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListBuildsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBuildsResponse>(parameters);
      }
    }

    /**
     * Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.builds.retry({
     *     // Required. Build ID of the original build.
     *     id: 'placeholder-value',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId"
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
    retry(
      params: Params$Resource$Projects$Builds$Retry,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retry(
      params?: Params$Resource$Projects$Builds$Retry,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    retry(
      params: Params$Resource$Projects$Builds$Retry,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retry(
      params: Params$Resource$Projects$Builds$Retry,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    retry(
      params: Params$Resource$Projects$Builds$Retry,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    retry(callback: BodyResponseCallback<Schema$Operation>): void;
    retry(
      paramsOrCallback?:
        | Params$Resource$Projects$Builds$Retry
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
        {}) as Params$Resource$Projects$Builds$Retry;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Builds$Retry;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/builds/{id}:retry'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'id'],
        pathParams: ['id', 'projectId'],
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

  export interface Params$Resource$Projects$Builds$Cancel
    extends StandardParameters {
    /**
     * Required. ID of the build.
     */
    id?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelBuildRequest;
  }
  export interface Params$Resource$Projects$Builds$Create
    extends StandardParameters {
    /**
     * The parent resource where this build will be created. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Build;
  }
  export interface Params$Resource$Projects$Builds$Get
    extends StandardParameters {
    /**
     * Required. ID of the build.
     */
    id?: string;
    /**
     * The name of the `Build` to retrieve. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     */
    name?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Builds$List
    extends StandardParameters {
    /**
     * The raw filter text to constrain the results.
     */
    filter?: string;
    /**
     * Number of results to return in the list.
     */
    pageSize?: number;
    /**
     * The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
     */
    pageToken?: string;
    /**
     * The parent of the collection of `Builds`. Format: `projects/{project\}/locations/location`
     */
    parent?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Builds$Retry
    extends StandardParameters {
    /**
     * Required. Build ID of the original build.
     */
    id?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RetryBuildRequest;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    builds: Resource$Projects$Locations$Builds;
    operations: Resource$Projects$Locations$Operations;
    triggers: Resource$Projects$Locations$Triggers;
    workerPools: Resource$Projects$Locations$Workerpools;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.builds = new Resource$Projects$Locations$Builds(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.triggers = new Resource$Projects$Locations$Triggers(this.context);
      this.workerPools = new Resource$Projects$Locations$Workerpools(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Builds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancels a build in progress.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.builds.cancel({
     *     // The name of the `Build` to cancel. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     *     name: 'projects/my-project/locations/my-location/builds/my-build',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "artifacts": {},
     *   //   "availableSecrets": {},
     *   //   "buildTriggerId": "my_buildTriggerId",
     *   //   "createTime": "my_createTime",
     *   //   "finishTime": "my_finishTime",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "logUrl": "my_logUrl",
     *   //   "logsBucket": "my_logsBucket",
     *   //   "name": "my_name",
     *   //   "options": {},
     *   //   "projectId": "my_projectId",
     *   //   "queueTtl": "my_queueTtl",
     *   //   "results": {},
     *   //   "secrets": [],
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "source": {},
     *   //   "sourceProvenance": {},
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusDetail": "my_statusDetail",
     *   //   "steps": [],
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "timeout": "my_timeout",
     *   //   "timing": {},
     *   //   "warnings": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Builds$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Builds$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Build>;
    cancel(
      params: Params$Resource$Projects$Locations$Builds$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Builds$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Build>,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Builds$Cancel,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Build>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Builds$Cancel
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Build> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Builds$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Builds$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
        createAPIRequest<Schema$Build>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Build>(parameters);
      }
    }

    /**
     * Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.builds.create({
     *     // The parent resource where this build will be created. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "artifacts": {},
     *       //   "availableSecrets": {},
     *       //   "buildTriggerId": "my_buildTriggerId",
     *       //   "createTime": "my_createTime",
     *       //   "finishTime": "my_finishTime",
     *       //   "id": "my_id",
     *       //   "images": [],
     *       //   "logUrl": "my_logUrl",
     *       //   "logsBucket": "my_logsBucket",
     *       //   "name": "my_name",
     *       //   "options": {},
     *       //   "projectId": "my_projectId",
     *       //   "queueTtl": "my_queueTtl",
     *       //   "results": {},
     *       //   "secrets": [],
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "source": {},
     *       //   "sourceProvenance": {},
     *       //   "startTime": "my_startTime",
     *       //   "status": "my_status",
     *       //   "statusDetail": "my_statusDetail",
     *       //   "steps": [],
     *       //   "substitutions": {},
     *       //   "tags": [],
     *       //   "timeout": "my_timeout",
     *       //   "timing": {},
     *       //   "warnings": []
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
      params: Params$Resource$Projects$Locations$Builds$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Builds$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Builds$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Builds$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Builds$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Builds$Create
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
        {}) as Params$Resource$Projects$Locations$Builds$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Builds$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/builds').replace(
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
     * Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.builds.get({
     *     // Required. ID of the build.
     *     id: 'placeholder-value',
     *     // The name of the `Build` to retrieve. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     *     name: 'projects/my-project/locations/my-location/builds/my-build',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "artifacts": {},
     *   //   "availableSecrets": {},
     *   //   "buildTriggerId": "my_buildTriggerId",
     *   //   "createTime": "my_createTime",
     *   //   "finishTime": "my_finishTime",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "logUrl": "my_logUrl",
     *   //   "logsBucket": "my_logsBucket",
     *   //   "name": "my_name",
     *   //   "options": {},
     *   //   "projectId": "my_projectId",
     *   //   "queueTtl": "my_queueTtl",
     *   //   "results": {},
     *   //   "secrets": [],
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "source": {},
     *   //   "sourceProvenance": {},
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "statusDetail": "my_statusDetail",
     *   //   "steps": [],
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "timeout": "my_timeout",
     *   //   "timing": {},
     *   //   "warnings": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Builds$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Builds$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Build>;
    get(
      params: Params$Resource$Projects$Locations$Builds$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Builds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Build>,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Builds$Get,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    get(callback: BodyResponseCallback<Schema$Build>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Builds$Get
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Build> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Builds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Builds$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
        createAPIRequest<Schema$Build>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Build>(parameters);
      }
    }

    /**
     * Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.builds.list({
     *     // The raw filter text to constrain the results.
     *     filter: 'placeholder-value',
     *     // Number of results to return in the list.
     *     pageSize: 'placeholder-value',
     *     // The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
     *     pageToken: 'placeholder-value',
     *     // The parent of the collection of `Builds`. Format: `projects/{project\}/locations/location`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "builds": [],
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
      params: Params$Resource$Projects$Locations$Builds$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Builds$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBuildsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Builds$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Builds$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListBuildsResponse>,
      callback: BodyResponseCallback<Schema$ListBuildsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Builds$List,
      callback: BodyResponseCallback<Schema$ListBuildsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListBuildsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Builds$List
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBuildsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Builds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Builds$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/builds').replace(
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
        createAPIRequest<Schema$ListBuildsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBuildsResponse>(parameters);
      }
    }

    /**
     * Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.builds.retry({
     *     // The name of the `Build` to retry. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     *     name: 'projects/my-project/locations/my-location/builds/my-build',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "projectId": "my_projectId"
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
    retry(
      params: Params$Resource$Projects$Locations$Builds$Retry,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retry(
      params?: Params$Resource$Projects$Locations$Builds$Retry,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    retry(
      params: Params$Resource$Projects$Locations$Builds$Retry,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retry(
      params: Params$Resource$Projects$Locations$Builds$Retry,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    retry(
      params: Params$Resource$Projects$Locations$Builds$Retry,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    retry(callback: BodyResponseCallback<Schema$Operation>): void;
    retry(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Builds$Retry
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
        {}) as Params$Resource$Projects$Locations$Builds$Retry;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Builds$Retry;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:retry').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Builds$Cancel
    extends StandardParameters {
    /**
     * The name of the `Build` to cancel. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelBuildRequest;
  }
  export interface Params$Resource$Projects$Locations$Builds$Create
    extends StandardParameters {
    /**
     * The parent resource where this build will be created. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Build;
  }
  export interface Params$Resource$Projects$Locations$Builds$Get
    extends StandardParameters {
    /**
     * Required. ID of the build.
     */
    id?: string;
    /**
     * The name of the `Build` to retrieve. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     */
    name?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Locations$Builds$List
    extends StandardParameters {
    /**
     * The raw filter text to constrain the results.
     */
    filter?: string;
    /**
     * Number of results to return in the list.
     */
    pageSize?: number;
    /**
     * The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
     */
    pageToken?: string;
    /**
     * The parent of the collection of `Builds`. Format: `projects/{project\}/locations/location`
     */
    parent?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Locations$Builds$Retry
    extends StandardParameters {
    /**
     * The name of the `Build` to retry. Format: `projects/{project\}/locations/{location\}/builds/{build\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RetryBuildRequest;
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
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.operations.cancel({
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

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.operations.get({
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

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Triggers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new `BuildTrigger`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.create({
     *     // The parent resource where this trigger will be created. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. ID of the project for which to configure automatic builds.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autodetect": false,
     *       //   "build": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "disabled": false,
     *       //   "filename": "my_filename",
     *       //   "filter": "my_filter",
     *       //   "github": {},
     *       //   "id": "my_id",
     *       //   "ignoredFiles": [],
     *       //   "includedFiles": [],
     *       //   "name": "my_name",
     *       //   "pubsubConfig": {},
     *       //   "resourceName": "my_resourceName",
     *       //   "substitutions": {},
     *       //   "tags": [],
     *       //   "triggerTemplate": {},
     *       //   "webhookConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autodetect": false,
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "filename": "my_filename",
     *   //   "filter": "my_filter",
     *   //   "github": {},
     *   //   "id": "my_id",
     *   //   "ignoredFiles": [],
     *   //   "includedFiles": [],
     *   //   "name": "my_name",
     *   //   "pubsubConfig": {},
     *   //   "resourceName": "my_resourceName",
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "triggerTemplate": {},
     *   //   "webhookConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Triggers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Triggers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    create(
      params: Params$Resource$Projects$Locations$Triggers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Triggers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$BuildTrigger>,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Triggers$Create,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    create(callback: BodyResponseCallback<Schema$BuildTrigger>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$Create
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BuildTrigger> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Triggers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/triggers').replace(
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
        createAPIRequest<Schema$BuildTrigger>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * Deletes a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.delete({
     *     // The name of the `Trigger` to delete. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'projects/my-project/locations/my-location/triggers/my-trigger',
     *     // Required. ID of the project that owns the trigger.
     *     projectId: 'placeholder-value',
     *     // Required. ID of the `BuildTrigger` to delete.
     *     triggerId: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Triggers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Triggers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Triggers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Triggers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Triggers$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$Delete
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
        {}) as Params$Resource$Projects$Locations$Triggers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
     * Returns information about a `BuildTrigger`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.get({
     *     // The name of the `Trigger` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'projects/my-project/locations/my-location/triggers/my-trigger',
     *     // Required. ID of the project that owns the trigger.
     *     projectId: 'placeholder-value',
     *     // Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
     *     triggerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autodetect": false,
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "filename": "my_filename",
     *   //   "filter": "my_filter",
     *   //   "github": {},
     *   //   "id": "my_id",
     *   //   "ignoredFiles": [],
     *   //   "includedFiles": [],
     *   //   "name": "my_name",
     *   //   "pubsubConfig": {},
     *   //   "resourceName": "my_resourceName",
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "triggerTemplate": {},
     *   //   "webhookConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Triggers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Triggers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    get(
      params: Params$Resource$Projects$Locations$Triggers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Triggers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$BuildTrigger>,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Triggers$Get,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    get(callback: BodyResponseCallback<Schema$BuildTrigger>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$Get
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BuildTrigger> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Triggers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
        createAPIRequest<Schema$BuildTrigger>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * Lists existing `BuildTrigger`s. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.list({
     *     // Number of results to return in the list.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *     // The parent of the collection of `Triggers`. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. ID of the project for which to list BuildTriggers.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "triggers": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Triggers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Triggers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBuildTriggersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Triggers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Triggers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>,
      callback: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Triggers$List,
      callback: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$List
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBuildTriggersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Triggers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/triggers').replace(
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
        createAPIRequest<Schema$ListBuildTriggersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBuildTriggersResponse>(parameters);
      }
    }

    /**
     * Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.patch({
     *     // Required. ID of the project that owns the trigger.
     *     projectId: 'placeholder-value',
     *     // The `Trigger` name with format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`, where {trigger\} is a unique identifier generated by the service.
     *     resourceName:
     *       'projects/my-project/locations/my-location/triggers/my-trigger',
     *     // Required. ID of the `BuildTrigger` to update.
     *     triggerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autodetect": false,
     *       //   "build": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "disabled": false,
     *       //   "filename": "my_filename",
     *       //   "filter": "my_filter",
     *       //   "github": {},
     *       //   "id": "my_id",
     *       //   "ignoredFiles": [],
     *       //   "includedFiles": [],
     *       //   "name": "my_name",
     *       //   "pubsubConfig": {},
     *       //   "resourceName": "my_resourceName",
     *       //   "substitutions": {},
     *       //   "tags": [],
     *       //   "triggerTemplate": {},
     *       //   "webhookConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autodetect": false,
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "filename": "my_filename",
     *   //   "filter": "my_filter",
     *   //   "github": {},
     *   //   "id": "my_id",
     *   //   "ignoredFiles": [],
     *   //   "includedFiles": [],
     *   //   "name": "my_name",
     *   //   "pubsubConfig": {},
     *   //   "resourceName": "my_resourceName",
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "triggerTemplate": {},
     *   //   "webhookConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Triggers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Triggers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    patch(
      params: Params$Resource$Projects$Locations$Triggers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Triggers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$BuildTrigger>,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Triggers$Patch,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    patch(callback: BodyResponseCallback<Schema$BuildTrigger>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$Patch
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BuildTrigger> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Triggers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resourceName}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BuildTrigger>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * Runs a `BuildTrigger` at a particular source revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.run({
     *     // The name of the `Trigger` to run. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'projects/my-project/locations/my-location/triggers/my-trigger',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "projectId": "my_projectId",
     *       //   "source": {},
     *       //   "triggerId": "my_triggerId"
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
    run(
      params: Params$Resource$Projects$Locations$Triggers$Run,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    run(
      params?: Params$Resource$Projects$Locations$Triggers$Run,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    run(
      params: Params$Resource$Projects$Locations$Triggers$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Triggers$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Triggers$Run,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$Run
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
        {}) as Params$Resource$Projects$Locations$Triggers$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:run').replace(/([^:]\/)\/+/g, '$1'),
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
     * ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.triggers.webhook({
     *     // The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'projects/my-project/locations/my-location/triggers/my-trigger',
     *     // Project in which the specified trigger lives
     *     projectId: 'placeholder-value',
     *     // Secret token used for authorization if an OAuth token isn't provided.
     *     secret: 'placeholder-value',
     *     // Name of the trigger to run the payload against
     *     trigger: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentType": "my_contentType",
     *       //   "data": "my_data",
     *       //   "extensions": []
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
    webhook(
      params: Params$Resource$Projects$Locations$Triggers$Webhook,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    webhook(
      params?: Params$Resource$Projects$Locations$Triggers$Webhook,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReceiveTriggerWebhookResponse>;
    webhook(
      params: Params$Resource$Projects$Locations$Triggers$Webhook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    webhook(
      params: Params$Resource$Projects$Locations$Triggers$Webhook,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>,
      callback: BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
    ): void;
    webhook(
      params: Params$Resource$Projects$Locations$Triggers$Webhook,
      callback: BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
    ): void;
    webhook(
      callback: BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
    ): void;
    webhook(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Triggers$Webhook
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReceiveTriggerWebhookResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Triggers$Webhook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Triggers$Webhook;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:webhook').replace(
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
        createAPIRequest<Schema$ReceiveTriggerWebhookResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReceiveTriggerWebhookResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Triggers$Create
    extends StandardParameters {
    /**
     * The parent resource where this trigger will be created. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project for which to configure automatic builds.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildTrigger;
  }
  export interface Params$Resource$Projects$Locations$Triggers$Delete
    extends StandardParameters {
    /**
     * The name of the `Trigger` to delete. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Required. ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * Required. ID of the `BuildTrigger` to delete.
     */
    triggerId?: string;
  }
  export interface Params$Resource$Projects$Locations$Triggers$Get
    extends StandardParameters {
    /**
     * The name of the `Trigger` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Required. ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
     */
    triggerId?: string;
  }
  export interface Params$Resource$Projects$Locations$Triggers$List
    extends StandardParameters {
    /**
     * Number of results to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * The parent of the collection of `Triggers`. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project for which to list BuildTriggers.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Locations$Triggers$Patch
    extends StandardParameters {
    /**
     * Required. ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * The `Trigger` name with format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`, where {trigger\} is a unique identifier generated by the service.
     */
    resourceName?: string;
    /**
     * Required. ID of the `BuildTrigger` to update.
     */
    triggerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildTrigger;
  }
  export interface Params$Resource$Projects$Locations$Triggers$Run
    extends StandardParameters {
    /**
     * The name of the `Trigger` to run. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunBuildTriggerRequest;
  }
  export interface Params$Resource$Projects$Locations$Triggers$Webhook
    extends StandardParameters {
    /**
     * The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Project in which the specified trigger lives
     */
    projectId?: string;
    /**
     * Secret token used for authorization if an OAuth token isn't provided.
     */
    secret?: string;
    /**
     * Name of the trigger to run the payload against
     */
    trigger?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }

  export class Resource$Projects$Locations$Workerpools {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a `WorkerPool`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.workerPools.create({
     *     // Required. The parent resource where this worker pool will be created. Format: `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // If set, validate the request and preview the response, but do not actually post it.
     *     validateOnly: 'placeholder-value',
     *     // Required. Immutable. The ID to use for the `WorkerPool`, which will become the final component of the resource name. This value should be 1-63 characters, and valid characters are /a-z-/.
     *     workerPoolId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "privatePoolV1Config": {},
     *       //   "state": "my_state",
     *       //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Workerpools$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Workerpools$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Workerpools$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workerpools$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workerpools$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Create
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
        {}) as Params$Resource$Projects$Locations$Workerpools$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/workerPools').replace(
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
     * Deletes a `WorkerPool`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.workerPools.delete({
     *     // If set to true, and the `WorkerPool` is not found, the request will succeed but no action will be taken on the server.
     *     allowMissing: 'placeholder-value',
     *     // Optional. If this is provided, it must match the server's etag on the workerpool for the request to be processed.
     *     etag: 'placeholder-value',
     *     // Required. The name of the `WorkerPool` to delete. Format: `projects/{project\}/locations/{workerPool\}/workerPools/{workerPool\}`.
     *     name: 'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *     // If set, validate the request and preview the response, but do not actually post it.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Workerpools$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Workerpools$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Workerpools$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workerpools$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workerpools$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Delete
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
        {}) as Params$Resource$Projects$Locations$Workerpools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
     * Returns details of a `WorkerPool`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.workerPools.get({
     *     // Required. The name of the `WorkerPool` to retrieve. Format: `projects/{project\}/locations/{location\}/workerPools/{workerPool\}`.
     *     name: 'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "privatePoolV1Config": {},
     *   //   "state": "my_state",
     *   //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Workerpools$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Workerpools$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WorkerPool>;
    get(
      params: Params$Resource$Projects$Locations$Workerpools$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workerpools$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WorkerPool>,
      callback: BodyResponseCallback<Schema$WorkerPool>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workerpools$Get,
      callback: BodyResponseCallback<Schema$WorkerPool>
    ): void;
    get(callback: BodyResponseCallback<Schema$WorkerPool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Get
        | BodyResponseCallback<Schema$WorkerPool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkerPool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkerPool>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WorkerPool> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
        createAPIRequest<Schema$WorkerPool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkerPool>(parameters);
      }
    }

    /**
     * Lists `WorkerPool`s.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.workerPools.list({
     *     // The maximum number of `WorkerPool`s to return. The service may return fewer than this value. If omitted, the server will use a sensible default.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListWorkerPools` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent of the collection of `WorkerPools`. Format: `projects/{project\}/locations/location`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "workerPools": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Workerpools$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Workerpools$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWorkerPoolsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Workerpools$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workerpools$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWorkerPoolsResponse>,
      callback: BodyResponseCallback<Schema$ListWorkerPoolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workerpools$List,
      callback: BodyResponseCallback<Schema$ListWorkerPoolsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListWorkerPoolsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$List
        | BodyResponseCallback<Schema$ListWorkerPoolsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWorkerPoolsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWorkerPoolsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWorkerPoolsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/workerPools').replace(
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
        createAPIRequest<Schema$ListWorkerPoolsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWorkerPoolsResponse>(parameters);
      }
    }

    /**
     * Updates a `WorkerPool`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.locations.workerPools.patch({
     *     // Output only. The resource name of the `WorkerPool`, with format `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`. The value of `{worker_pool\}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location\}` is determined by the endpoint accessed.
     *     name: 'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *     // A mask specifying which fields in `worker_pool` to update.
     *     updateMask: 'placeholder-value',
     *     // If set, validate the request and preview the response, but do not actually post it.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "privatePoolV1Config": {},
     *       //   "state": "my_state",
     *       //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Workerpools$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Workerpools$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Workerpools$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workerpools$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workerpools$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Patch
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
        {}) as Params$Resource$Projects$Locations$Workerpools$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
  }

  export interface Params$Resource$Projects$Locations$Workerpools$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this worker pool will be created. Format: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * If set, validate the request and preview the response, but do not actually post it.
     */
    validateOnly?: boolean;
    /**
     * Required. Immutable. The ID to use for the `WorkerPool`, which will become the final component of the resource name. This value should be 1-63 characters, and valid characters are /a-z-/.
     */
    workerPoolId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkerPool;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Delete
    extends StandardParameters {
    /**
     * If set to true, and the `WorkerPool` is not found, the request will succeed but no action will be taken on the server.
     */
    allowMissing?: boolean;
    /**
     * Optional. If this is provided, it must match the server's etag on the workerpool for the request to be processed.
     */
    etag?: string;
    /**
     * Required. The name of the `WorkerPool` to delete. Format: `projects/{project\}/locations/{workerPool\}/workerPools/{workerPool\}`.
     */
    name?: string;
    /**
     * If set, validate the request and preview the response, but do not actually post it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Get
    extends StandardParameters {
    /**
     * Required. The name of the `WorkerPool` to retrieve. Format: `projects/{project\}/locations/{location\}/workerPools/{workerPool\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$List
    extends StandardParameters {
    /**
     * The maximum number of `WorkerPool`s to return. The service may return fewer than this value. If omitted, the server will use a sensible default.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListWorkerPools` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent of the collection of `WorkerPools`. Format: `projects/{project\}/locations/location`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the `WorkerPool`, with format `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`. The value of `{worker_pool\}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location\}` is determined by the endpoint accessed.
     */
    name?: string;
    /**
     * A mask specifying which fields in `worker_pool` to update.
     */
    updateMask?: string;
    /**
     * If set, validate the request and preview the response, but do not actually post it.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WorkerPool;
  }

  export class Resource$Projects$Triggers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new `BuildTrigger`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.create({
     *     // The parent resource where this trigger will be created. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'placeholder-value',
     *     // Required. ID of the project for which to configure automatic builds.
     *     projectId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autodetect": false,
     *       //   "build": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "disabled": false,
     *       //   "filename": "my_filename",
     *       //   "filter": "my_filter",
     *       //   "github": {},
     *       //   "id": "my_id",
     *       //   "ignoredFiles": [],
     *       //   "includedFiles": [],
     *       //   "name": "my_name",
     *       //   "pubsubConfig": {},
     *       //   "resourceName": "my_resourceName",
     *       //   "substitutions": {},
     *       //   "tags": [],
     *       //   "triggerTemplate": {},
     *       //   "webhookConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autodetect": false,
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "filename": "my_filename",
     *   //   "filter": "my_filter",
     *   //   "github": {},
     *   //   "id": "my_id",
     *   //   "ignoredFiles": [],
     *   //   "includedFiles": [],
     *   //   "name": "my_name",
     *   //   "pubsubConfig": {},
     *   //   "resourceName": "my_resourceName",
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "triggerTemplate": {},
     *   //   "webhookConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Triggers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Triggers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    create(
      params: Params$Resource$Projects$Triggers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Triggers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$BuildTrigger>,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    create(
      params: Params$Resource$Projects$Triggers$Create,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    create(callback: BodyResponseCallback<Schema$BuildTrigger>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$Create
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BuildTrigger> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Triggers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/triggers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BuildTrigger>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * Deletes a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.delete({
     *     // The name of the `Trigger` to delete. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'placeholder-value',
     *     // Required. ID of the project that owns the trigger.
     *     projectId: 'placeholder-value',
     *     // Required. ID of the `BuildTrigger` to delete.
     *     triggerId: 'placeholder-value',
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
      params: Params$Resource$Projects$Triggers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Triggers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Triggers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Triggers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Triggers$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$Delete
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
        {}) as Params$Resource$Projects$Triggers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'triggerId'],
        pathParams: ['projectId', 'triggerId'],
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
     * Returns information about a `BuildTrigger`. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.get({
     *     // The name of the `Trigger` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'placeholder-value',
     *     // Required. ID of the project that owns the trigger.
     *     projectId: 'placeholder-value',
     *     // Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
     *     triggerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autodetect": false,
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "filename": "my_filename",
     *   //   "filter": "my_filter",
     *   //   "github": {},
     *   //   "id": "my_id",
     *   //   "ignoredFiles": [],
     *   //   "includedFiles": [],
     *   //   "name": "my_name",
     *   //   "pubsubConfig": {},
     *   //   "resourceName": "my_resourceName",
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "triggerTemplate": {},
     *   //   "webhookConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Triggers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Triggers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    get(
      params: Params$Resource$Projects$Triggers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Triggers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$BuildTrigger>,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    get(
      params: Params$Resource$Projects$Triggers$Get,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    get(callback: BodyResponseCallback<Schema$BuildTrigger>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$Get
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BuildTrigger> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Triggers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'triggerId'],
        pathParams: ['projectId', 'triggerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BuildTrigger>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * Lists existing `BuildTrigger`s. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.list({
     *     // Number of results to return in the list.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *     // The parent of the collection of `Triggers`. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'placeholder-value',
     *     // Required. ID of the project for which to list BuildTriggers.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "triggers": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Triggers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Triggers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListBuildTriggersResponse>;
    list(
      params: Params$Resource$Projects$Triggers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Triggers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>,
      callback: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Triggers$List,
      callback: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBuildTriggersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$List
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBuildTriggersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListBuildTriggersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Triggers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/triggers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListBuildTriggersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBuildTriggersResponse>(parameters);
      }
    }

    /**
     * Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.patch({
     *     // Required. ID of the project that owns the trigger.
     *     projectId: 'placeholder-value',
     *     // Required. ID of the `BuildTrigger` to update.
     *     triggerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autodetect": false,
     *       //   "build": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "disabled": false,
     *       //   "filename": "my_filename",
     *       //   "filter": "my_filter",
     *       //   "github": {},
     *       //   "id": "my_id",
     *       //   "ignoredFiles": [],
     *       //   "includedFiles": [],
     *       //   "name": "my_name",
     *       //   "pubsubConfig": {},
     *       //   "resourceName": "my_resourceName",
     *       //   "substitutions": {},
     *       //   "tags": [],
     *       //   "triggerTemplate": {},
     *       //   "webhookConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autodetect": false,
     *   //   "build": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "disabled": false,
     *   //   "filename": "my_filename",
     *   //   "filter": "my_filter",
     *   //   "github": {},
     *   //   "id": "my_id",
     *   //   "ignoredFiles": [],
     *   //   "includedFiles": [],
     *   //   "name": "my_name",
     *   //   "pubsubConfig": {},
     *   //   "resourceName": "my_resourceName",
     *   //   "substitutions": {},
     *   //   "tags": [],
     *   //   "triggerTemplate": {},
     *   //   "webhookConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Triggers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Triggers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildTrigger>;
    patch(
      params: Params$Resource$Projects$Triggers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Triggers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$BuildTrigger>,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    patch(
      params: Params$Resource$Projects$Triggers$Patch,
      callback: BodyResponseCallback<Schema$BuildTrigger>
    ): void;
    patch(callback: BodyResponseCallback<Schema$BuildTrigger>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$Patch
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BuildTrigger>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BuildTrigger> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Triggers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'triggerId'],
        pathParams: ['projectId', 'triggerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BuildTrigger>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BuildTrigger>(parameters);
      }
    }

    /**
     * Runs a `BuildTrigger` at a particular source revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.run({
     *     // The name of the `Trigger` to run. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'placeholder-value',
     *     // Required. ID of the project.
     *     projectId: 'placeholder-value',
     *     // Required. ID of the trigger.
     *     triggerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "branchName": "my_branchName",
     *       //   "commitSha": "my_commitSha",
     *       //   "dir": "my_dir",
     *       //   "invertRegex": false,
     *       //   "projectId": "my_projectId",
     *       //   "repoName": "my_repoName",
     *       //   "substitutions": {},
     *       //   "tagName": "my_tagName"
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
    run(
      params: Params$Resource$Projects$Triggers$Run,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    run(
      params?: Params$Resource$Projects$Triggers$Run,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    run(
      params: Params$Resource$Projects$Triggers$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Projects$Triggers$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(
      params: Params$Resource$Projects$Triggers$Run,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$Run
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
        {}) as Params$Resource$Projects$Triggers$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}:run'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'triggerId'],
        pathParams: ['projectId', 'triggerId'],
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
     * ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v1');
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
     *   const res = await cloudbuild.projects.triggers.webhook({
     *     // The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     *     name: 'placeholder-value',
     *     // Project in which the specified trigger lives
     *     projectId: 'placeholder-value',
     *     // Secret token used for authorization if an OAuth token isn't provided.
     *     secret: 'placeholder-value',
     *     // Name of the trigger to run the payload against
     *     trigger: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentType": "my_contentType",
     *       //   "data": "my_data",
     *       //   "extensions": []
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
    webhook(
      params: Params$Resource$Projects$Triggers$Webhook,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    webhook(
      params?: Params$Resource$Projects$Triggers$Webhook,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReceiveTriggerWebhookResponse>;
    webhook(
      params: Params$Resource$Projects$Triggers$Webhook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    webhook(
      params: Params$Resource$Projects$Triggers$Webhook,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>,
      callback: BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
    ): void;
    webhook(
      params: Params$Resource$Projects$Triggers$Webhook,
      callback: BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
    ): void;
    webhook(
      callback: BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
    ): void;
    webhook(
      paramsOrCallback?:
        | Params$Resource$Projects$Triggers$Webhook
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReceiveTriggerWebhookResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReceiveTriggerWebhookResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Triggers$Webhook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Triggers$Webhook;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/triggers/{trigger}:webhook'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'trigger'],
        pathParams: ['projectId', 'trigger'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReceiveTriggerWebhookResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReceiveTriggerWebhookResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Triggers$Create
    extends StandardParameters {
    /**
     * The parent resource where this trigger will be created. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project for which to configure automatic builds.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildTrigger;
  }
  export interface Params$Resource$Projects$Triggers$Delete
    extends StandardParameters {
    /**
     * The name of the `Trigger` to delete. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Required. ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * Required. ID of the `BuildTrigger` to delete.
     */
    triggerId?: string;
  }
  export interface Params$Resource$Projects$Triggers$Get
    extends StandardParameters {
    /**
     * The name of the `Trigger` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Required. ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
     */
    triggerId?: string;
  }
  export interface Params$Resource$Projects$Triggers$List
    extends StandardParameters {
    /**
     * Number of results to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * The parent of the collection of `Triggers`. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Required. ID of the project for which to list BuildTriggers.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Triggers$Patch
    extends StandardParameters {
    /**
     * Required. ID of the project that owns the trigger.
     */
    projectId?: string;
    /**
     * Required. ID of the `BuildTrigger` to update.
     */
    triggerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildTrigger;
  }
  export interface Params$Resource$Projects$Triggers$Run
    extends StandardParameters {
    /**
     * The name of the `Trigger` to run. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Required. ID of the project.
     */
    projectId?: string;
    /**
     * Required. ID of the trigger.
     */
    triggerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RepoSource;
  }
  export interface Params$Resource$Projects$Triggers$Webhook
    extends StandardParameters {
    /**
     * The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project\}/locations/{location\}/triggers/{trigger\}`
     */
    name?: string;
    /**
     * Project in which the specified trigger lives
     */
    projectId?: string;
    /**
     * Secret token used for authorization if an OAuth token isn't provided.
     */
    secret?: string;
    /**
     * Name of the trigger to run the payload against
     */
    trigger?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
}
