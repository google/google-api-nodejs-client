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

export namespace ondemandscanning_v1 {
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
   * On-Demand Scanning API
   *
   * A service to scan container images for vulnerabilities.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const ondemandscanning = google.ondemandscanning('v1');
   * ```
   */
  export class Ondemandscanning {
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
   * An alias to a repo revision.
   */
  export interface Schema$AliasContext {
    /**
     * The alias kind.
     */
    kind?: string | null;
    /**
     * The alias name.
     */
    name?: string | null;
  }
  /**
   * AnalyzePackagesMetadata contains metadata for an active scan of a container image.
   */
  export interface Schema$AnalyzePackagesMetadata {
    /**
     * When the scan was created.
     */
    createTime?: string | null;
    /**
     * The resource URI of the container image being scanned.
     */
    resourceUri?: string | null;
  }
  /**
   * AnalyzePackagesMetadata contains metadata for an active scan of a container image.
   */
  export interface Schema$AnalyzePackagesMetadataV1 {
    /**
     * When the scan was created.
     */
    createTime?: string | null;
    /**
     * The resource URI of the container image being scanned.
     */
    resourceUri?: string | null;
  }
  /**
   * AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
   */
  export interface Schema$AnalyzePackagesRequestV1 {
    /**
     * The packages to analyze.
     */
    packages?: Schema$PackageData[];
    /**
     * Required. The resource URI of the container image being scanned.
     */
    resourceUri?: string | null;
  }
  /**
   * AnalyzePackagesResponse contains the information necessary to find results for the given scan.
   */
  export interface Schema$AnalyzePackagesResponse {
    /**
     * The name of the scan resource created by this successful scan.
     */
    scan?: string | null;
  }
  /**
   * AnalyzePackagesResponse contains the information necessary to find results for the given scan.
   */
  export interface Schema$AnalyzePackagesResponseV1 {
    /**
     * The name of the scan resource created by this successful scan.
     */
    scan?: string | null;
  }
  /**
   * Artifact describes a build product.
   */
  export interface Schema$Artifact {
    /**
     * Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container.
     */
    checksum?: string | null;
    /**
     * Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`.
     */
    id?: string | null;
    /**
     * Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image.
     */
    names?: string[] | null;
  }
  /**
   * Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.
   */
  export interface Schema$AttestationOccurrence {
    /**
     * One or more JWTs encoding a self-contained attestation. Each JWT encodes the payload that it verifies within the JWT itself. Verifier implementation SHOULD ignore the `serialized_payload` field when verifying these JWTs. If only JWTs are present on this AttestationOccurrence, then the `serialized_payload` SHOULD be left empty. Each JWT SHOULD encode a claim specific to the `resource_uri` of this Occurrence, but this is not validated by Grafeas metadata API implementations. The JWT itself is opaque to Grafeas.
     */
    jwts?: Schema$Jwt[];
    /**
     * Required. The serialized payload that is verified by one or more `signatures`.
     */
    serializedPayload?: string | null;
    /**
     * One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification.
     */
    signatures?: Schema$Signature[];
  }
  /**
   * Details of a build occurrence.
   */
  export interface Schema$BuildOccurrence {
    /**
     * Required. The actual provenance for the build.
     */
    provenance?: Schema$BuildProvenance;
    /**
     * Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes.
     */
    provenanceBytes?: string | null;
  }
  /**
   * Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
   */
  export interface Schema$BuildProvenance {
    /**
     * Version string of the builder at the time this build was executed.
     */
    builderVersion?: string | null;
    /**
     * Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.
     */
    buildOptions?: {[key: string]: string} | null;
    /**
     * Output of the build.
     */
    builtArtifacts?: Schema$Artifact[];
    /**
     * Commands requested by the build.
     */
    commands?: Schema$Command[];
    /**
     * Time at which the build was created.
     */
    createTime?: string | null;
    /**
     * E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.
     */
    creator?: string | null;
    /**
     * Time at which execution of the build was finished.
     */
    endTime?: string | null;
    /**
     * Required. Unique identifier of the build.
     */
    id?: string | null;
    /**
     * URI where any logs for this provenance were written.
     */
    logsUri?: string | null;
    /**
     * ID of the project.
     */
    projectId?: string | null;
    /**
     * Details of the Source input to the build.
     */
    sourceProvenance?: Schema$Source;
    /**
     * Time at which execution of the build was started.
     */
    startTime?: string | null;
    /**
     * Trigger identifier if the build was triggered automatically; empty if not.
     */
    triggerId?: string | null;
  }
  /**
   * The category to which the update belongs.
   */
  export interface Schema$Category {
    /**
     * The identifier of the category.
     */
    categoryId?: string | null;
    /**
     * The localized name of the category.
     */
    name?: string | null;
  }
  /**
   * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
   */
  export interface Schema$CloudRepoSourceContext {
    /**
     * An alias, which may be a branch or tag.
     */
    aliasContext?: Schema$AliasContext;
    /**
     * The ID of the repo.
     */
    repoId?: Schema$RepoId;
    /**
     * A revision ID.
     */
    revisionId?: string | null;
  }
  /**
   * Command describes a step performed as part of the build pipeline.
   */
  export interface Schema$Command {
    /**
     * Command-line arguments used when executing this command.
     */
    args?: string[] | null;
    /**
     * Working directory (relative to project source root) used when running this command.
     */
    dir?: string | null;
    /**
     * Environment variables set before running this command.
     */
    env?: string[] | null;
    /**
     * Optional unique identifier for this command, used in wait_for to reference this command as a dependency.
     */
    id?: string | null;
    /**
     * Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`.
     */
    name?: string | null;
    /**
     * The ID(s) of the command(s) that this command depends on.
     */
    waitFor?: string[] | null;
  }
  /**
   * An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.
   */
  export interface Schema$ComplianceOccurrence {
    nonComplianceReason?: string | null;
    nonCompliantFiles?: Schema$NonCompliantFile[];
  }
  /**
   * The period during which some deployable was active in a runtime.
   */
  export interface Schema$DeploymentOccurrence {
    /**
     * Address of the runtime element hosting this deployment.
     */
    address?: string | null;
    /**
     * Configuration used to create this deployment.
     */
    config?: string | null;
    /**
     * Required. Beginning of the lifetime of this deployment.
     */
    deployTime?: string | null;
    /**
     * Platform hosting this deployment.
     */
    platform?: string | null;
    /**
     * Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name.
     */
    resourceUri?: string[] | null;
    /**
     * End of the lifetime of this deployment.
     */
    undeployTime?: string | null;
    /**
     * Identity of the user that triggered this deployment.
     */
    userEmail?: string | null;
  }
  /**
   * Provides information about the analysis status of a discovered resource.
   */
  export interface Schema$DiscoveryOccurrence {
    /**
     * The status of discovery for the resource.
     */
    analysisStatus?: string | null;
    /**
     * When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage is output only and populated by the API.
     */
    analysisStatusError?: Schema$Status;
    /**
     * Whether the resource is continuously analyzed.
     */
    continuousAnalysis?: string | null;
    /**
     * The CPE of the resource being scanned.
     */
    cpe?: string | null;
    /**
     * The last time this resource was scanned.
     */
    lastScanTime?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build.
   */
  export interface Schema$FileHashes {
    /**
     * Required. Collection of file hashes.
     */
    fileHash?: Schema$Hash[];
  }
  /**
   * A set of properties that uniquely identify a given Docker image.
   */
  export interface Schema$Fingerprint {
    /**
     * Required. The layer ID of the final layer in the Docker image's v1 representation.
     */
    v1Name?: string | null;
    /**
     * Required. The ordered list of v2 blobs that represent a given image.
     */
    v2Blob?: string[] | null;
    /**
     * Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept.
     */
    v2Name?: string | null;
  }
  /**
   * A SourceContext referring to a Gerrit project.
   */
  export interface Schema$GerritSourceContext {
    /**
     * An alias, which may be a branch or tag.
     */
    aliasContext?: Schema$AliasContext;
    /**
     * The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project.
     */
    gerritProject?: string | null;
    /**
     * The URI of a running Gerrit instance.
     */
    hostUri?: string | null;
    /**
     * A revision (commit) ID.
     */
    revisionId?: string | null;
  }
  /**
   * A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).
   */
  export interface Schema$GitSourceContext {
    /**
     * Git commit hash.
     */
    revisionId?: string | null;
    /**
     * Git repository URL.
     */
    url?: string | null;
  }
  /**
   * Container message for hash values.
   */
  export interface Schema$Hash {
    /**
     * Required. The type of hash that was performed, e.g. "SHA-256".
     */
    type?: string | null;
    /**
     * Required. The hash value.
     */
    value?: string | null;
  }
  /**
   * The unique identifier of the update.
   */
  export interface Schema$Identity {
    /**
     * The revision number of the update.
     */
    revision?: number | null;
    /**
     * The revision independent identifier of the update.
     */
    updateId?: string | null;
  }
  /**
   * Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
   */
  export interface Schema$ImageOccurrence {
    /**
     * Output only. This contains the base image URL for the derived image occurrence.
     */
    baseResourceUrl?: string | null;
    /**
     * Output only. The number of layers by which this image differs from the associated image basis.
     */
    distance?: number | null;
    /**
     * Required. The fingerprint of the derived image.
     */
    fingerprint?: Schema$Fingerprint;
    /**
     * This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer.
     */
    layerInfo?: Schema$Layer[];
  }
  export interface Schema$Jwt {
    /**
     * The compact encoding of a JWS, which is always three base64 encoded strings joined by periods. For details, see: https://tools.ietf.org/html/rfc7515.html#section-3.1
     */
    compactJwt?: string | null;
  }
  /**
   * Layer holds metadata specific to a layer of a Docker image.
   */
  export interface Schema$Layer {
    /**
     * The recovered arguments to the Dockerfile directive.
     */
    arguments?: string | null;
    /**
     * Required. The recovered Dockerfile directive used to construct this layer. See https://docs.docker.com/engine/reference/builder/ for more information.
     */
    directive?: string | null;
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
   * ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.
   */
  export interface Schema$ListVulnerabilitiesResponseV1 {
    /**
     * A page token that can be used in a subsequent call to ListVulnerabilities to continue retrieving results.
     */
    nextPageToken?: string | null;
    /**
     * The list of Vulnerability Occurrences resulting from a scan.
     */
    occurrences?: Schema$Occurrence[];
  }
  /**
   * An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`.
   */
  export interface Schema$Location {
    /**
     * Required. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.
     */
    cpeUri?: string | null;
    /**
     * The path from which we gathered that this package/version is installed.
     */
    path?: string | null;
    /**
     * The version installed at this location.
     */
    version?: Schema$Version;
  }
  /**
   * Details about files that caused a compliance check to fail.
   */
  export interface Schema$NonCompliantFile {
    /**
     * Command to display the non-compliant files.
     */
    displayCommand?: string | null;
    /**
     * display_command is a single command that can be used to display a list of non compliant files. When there is no such command, we can also iterate a list of non compliant file using 'path'. Empty if `display_command` is set.
     */
    path?: string | null;
    /**
     * Explains why a file is non compliant for a CIS check.
     */
    reason?: string | null;
  }
  /**
   * An instance of an analysis type that has been found on a resource.
   */
  export interface Schema$Occurrence {
    /**
     * Describes an attestation of an artifact.
     */
    attestation?: Schema$AttestationOccurrence;
    /**
     * Describes a verifiable build.
     */
    build?: Schema$BuildOccurrence;
    /**
     * Describes a compliance violation on a linked resource.
     */
    compliance?: Schema$ComplianceOccurrence;
    /**
     * Output only. The time this occurrence was created.
     */
    createTime?: string | null;
    /**
     * Describes the deployment of an artifact on a runtime.
     */
    deployment?: Schema$DeploymentOccurrence;
    /**
     * Describes when a resource was discovered.
     */
    discovery?: Schema$DiscoveryOccurrence;
    /**
     * Describes how this resource derives from the basis in the associated note.
     */
    image?: Schema$ImageOccurrence;
    /**
     * Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.
     */
    kind?: string | null;
    /**
     * Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string | null;
    /**
     * Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.
     */
    noteName?: string | null;
    /**
     * Describes the installation of a package on the linked resource.
     */
    package?: Schema$PackageOccurrence;
    /**
     * A description of actions that can be taken to remedy the note.
     */
    remediation?: string | null;
    /**
     * Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image.
     */
    resourceUri?: string | null;
    /**
     * Output only. The time this occurrence was last updated.
     */
    updateTime?: string | null;
    /**
     * Describes an available package upgrade on the linked resource.
     */
    upgrade?: Schema$UpgradeOccurrence;
    /**
     * Describes a security vulnerability.
     */
    vulnerability?: Schema$VulnerabilityOccurrence;
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
  export interface Schema$PackageData {
    /**
     * The cpe_uri in [cpe format] (https://cpe.mitre.org/specification/) in which the vulnerability may manifest. Examples include distro or storage location for vulnerable jar.
     */
    cpeUri?: string | null;
    /**
     * The OS affected by a vulnerability This field is deprecated and the information is in cpe_uri
     */
    os?: string | null;
    /**
     * The version of the OS This field is deprecated and the information is in cpe_uri
     */
    osVersion?: string | null;
    /**
     * The package being analysed for vulnerabilities
     */
    package?: string | null;
    /**
     * The type of package: os, maven, go, etc.
     */
    packageType?: string | null;
    unused?: string | null;
    /**
     * The version of the package being analysed
     */
    version?: string | null;
  }
  /**
   * A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
   */
  export interface Schema$PackageIssue {
    /**
     * Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in.
     */
    affectedCpeUri?: string | null;
    /**
     * Required. The package this vulnerability was found in.
     */
    affectedPackage?: string | null;
    /**
     * Required. The version of the package that is installed on the resource affected by this vulnerability.
     */
    affectedVersion?: Schema$Version;
    /**
     * Output only. Whether a fix is available for this package.
     */
    fixAvailable?: boolean | null;
    /**
     * The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected_cpe_uri.
     */
    fixedCpeUri?: string | null;
    /**
     * The package this vulnerability was fixed in. It is possible for this to be different from the affected_package.
     */
    fixedPackage?: string | null;
    /**
     * Required. The version of the package this vulnerability was fixed in. Setting this to VersionKind.MAXIMUM means no fix is yet available.
     */
    fixedVersion?: Schema$Version;
  }
  /**
   * Details on how a particular software package was installed on a system.
   */
  export interface Schema$PackageOccurrence {
    /**
     * Required. All of the places within the filesystem versions of this package have been found.
     */
    location?: Schema$Location[];
    /**
     * Output only. The name of the installed package.
     */
    name?: string | null;
  }
  /**
   * Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.
   */
  export interface Schema$ProjectRepoId {
    /**
     * The ID of the project.
     */
    projectId?: string | null;
    /**
     * The name of the repo. Leave empty for the default repo.
     */
    repoName?: string | null;
  }
  /**
   * Metadata for any related URL information.
   */
  export interface Schema$RelatedUrl {
    /**
     * Label to describe usage of the URL.
     */
    label?: string | null;
    /**
     * Specific URL associated with the resource.
     */
    url?: string | null;
  }
  /**
   * A unique identifier for a Cloud Repo.
   */
  export interface Schema$RepoId {
    /**
     * A combination of a project ID and a repo name.
     */
    projectRepoId?: Schema$ProjectRepoId;
    /**
     * A server-assigned, globally unique identifier.
     */
    uid?: string | null;
  }
  /**
   * Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm). In particular, verification implementations MUST NOT treat the signature `public_key_id` as anything more than a key lookup hint. The `public_key_id` DOES NOT validate or authenticate a public key; it only provides a mechanism for quickly selecting a public key ALREADY CONFIGURED on the verifier through a trusted channel. Verification implementations MUST reject signatures in any of the following circumstances: * The `public_key_id` is not recognized by the verifier. * The public key that `public_key_id` refers to does not verify the signature with respect to the payload. The `signature` contents SHOULD NOT be "attached" (where the payload is included with the serialized `signature` bytes). Verifiers MUST ignore any "attached" payload and only verify signatures with respect to explicitly provided payload (e.g. a `payload` field on the proto message that holds this Signature, or the canonical serialization of the proto message that holds this signature).
   */
  export interface Schema$Signature {
    /**
     * The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5"
     */
    publicKeyId?: string | null;
    /**
     * The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload.
     */
    signature?: string | null;
  }
  /**
   * Source describes the location of the source used for the build.
   */
  export interface Schema$Source {
    /**
     * If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.
     */
    additionalContexts?: Schema$SourceContext[];
    /**
     * If provided, the input binary artifacts for the build came from this location.
     */
    artifactStorageSourceUri?: string | null;
    /**
     * If provided, the source code used for the build came from this location.
     */
    context?: Schema$SourceContext;
    /**
     * Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.
     */
    fileHashes?: {[key: string]: Schema$FileHashes} | null;
  }
  /**
   * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
   */
  export interface Schema$SourceContext {
    /**
     * A SourceContext referring to a revision in a Google Cloud Source Repo.
     */
    cloudRepo?: Schema$CloudRepoSourceContext;
    /**
     * A SourceContext referring to a Gerrit project.
     */
    gerrit?: Schema$GerritSourceContext;
    /**
     * A SourceContext referring to any third party Git repo (e.g., GitHub).
     */
    git?: Schema$GitSourceContext;
    /**
     * Labels with user defined metadata.
     */
    labels?: {[key: string]: string} | null;
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
   * The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.
   */
  export interface Schema$UpgradeDistribution {
    /**
     * The operating system classification of this Upgrade, as specified by the upstream operating system upgrade feed. For Windows the classification is one of the category_ids listed at https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ff357803(v=vs.85)
     */
    classification?: string | null;
    /**
     * Required - The specific operating system this metadata applies to. See https://cpe.mitre.org/specification/.
     */
    cpeUri?: string | null;
    /**
     * The cve tied to this Upgrade.
     */
    cve?: string[] | null;
    /**
     * The severity as specified by the upstream operating system.
     */
    severity?: string | null;
  }
  /**
   * An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.
   */
  export interface Schema$UpgradeOccurrence {
    /**
     * Metadata about the upgrade for available for the specific operating system for the resource_url. This allows efficient filtering, as well as making it easier to use the occurrence.
     */
    distribution?: Schema$UpgradeDistribution;
    /**
     * Required for non-Windows OS. The package this Upgrade is for.
     */
    package?: string | null;
    /**
     * Required for non-Windows OS. The version of the package in a machine + human readable form.
     */
    parsedVersion?: Schema$Version;
    /**
     * Required for Windows OS. Represents the metadata about the Windows update.
     */
    windowsUpdate?: Schema$WindowsUpdate;
  }
  /**
   * Version contains structured information about the version of a package.
   */
  export interface Schema$Version {
    /**
     * Used to correct mistakes in the version numbering scheme.
     */
    epoch?: number | null;
    /**
     * Human readable version string. This string is of the form :- and is only set when kind is NORMAL.
     */
    fullName?: string | null;
    /**
     * Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range.
     */
    inclusive?: boolean | null;
    /**
     * Required. Distinguishes between sentinel MIN/MAX versions and normal versions.
     */
    kind?: string | null;
    /**
     * Required only when version kind is NORMAL. The main part of the version name.
     */
    name?: string | null;
    /**
     * The iteration of the package build from the above version.
     */
    revision?: string | null;
  }
  /**
   * An occurrence of a severity vulnerability on a resource.
   */
  export interface Schema$VulnerabilityOccurrence {
    /**
     * Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity.
     */
    cvssScore?: number | null;
    /**
     * The distro assigned severity for this vulnerability when it is available, otherwise this is the note provider assigned severity.
     */
    effectiveSeverity?: string | null;
    /**
     * Output only. Whether at least one of the affected packages has a fix available.
     */
    fixAvailable?: boolean | null;
    /**
     * Output only. A detailed description of this vulnerability.
     */
    longDescription?: string | null;
    /**
     * Required. The set of affected locations and their fixes (if available) within the associated resource.
     */
    packageIssue?: Schema$PackageIssue[];
    /**
     * Output only. URLs related to this vulnerability.
     */
    relatedUrls?: Schema$RelatedUrl[];
    /**
     * Output only. The note provider assigned severity of this vulnerability.
     */
    severity?: string | null;
    /**
     * Output only. A one sentence description of this vulnerability.
     */
    shortDescription?: string | null;
    /**
     * The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).
     */
    type?: string | null;
  }
  /**
   * Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.
   */
  export interface Schema$WindowsUpdate {
    /**
     * The list of categories to which the update belongs.
     */
    categories?: Schema$Category[];
    /**
     * The localized description of the update.
     */
    description?: string | null;
    /**
     * Required - The unique identifier for the update.
     */
    identity?: Schema$Identity;
    /**
     * The Microsoft Knowledge Base article IDs that are associated with the update.
     */
    kbArticleIds?: string[] | null;
    /**
     * The last published timestamp of the update.
     */
    lastPublishedTimestamp?: string | null;
    /**
     * The hyperlink to the support information for the update.
     */
    supportUrl?: string | null;
    /**
     * The localized title of the update.
     */
    title?: string | null;
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
    operations: Resource$Projects$Locations$Operations;
    scans: Resource$Projects$Locations$Scans;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.scans = new Resource$Projects$Locations$Scans(this.context);
    }
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
     * //   https://console.developers.google.com/apis/api/ondemandscanning.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ondemandscanning = google.ondemandscanning('v1');
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
     *   const res = await ondemandscanning.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
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

      const rootUrl =
        options.rootUrl || 'https://ondemandscanning.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/ondemandscanning.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ondemandscanning = google.ondemandscanning('v1');
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
     *   const res = await ondemandscanning.projects.locations.operations.delete({
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

      const rootUrl =
        options.rootUrl || 'https://ondemandscanning.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/ondemandscanning.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ondemandscanning = google.ondemandscanning('v1');
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
     *   const res = await ondemandscanning.projects.locations.operations.get({
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

      const rootUrl =
        options.rootUrl || 'https://ondemandscanning.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/ondemandscanning.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ondemandscanning = google.ondemandscanning('v1');
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
     *   const res = await ondemandscanning.projects.locations.operations.list({
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

      const rootUrl =
        options.rootUrl || 'https://ondemandscanning.googleapis.com/';
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

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ondemandscanning.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ondemandscanning = google.ondemandscanning('v1');
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
     *   const res = await ondemandscanning.projects.locations.operations.wait({
     *     // The name of the operation resource to wait on.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *     // The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     *     timeout: 'placeholder-value',
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
    wait(
      params: Params$Resource$Projects$Locations$Operations$Wait,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    wait(
      params?: Params$Resource$Projects$Locations$Operations$Wait,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    wait(
      params: Params$Resource$Projects$Locations$Operations$Wait,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    wait(
      params: Params$Resource$Projects$Locations$Operations$Wait,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wait(
      params: Params$Resource$Projects$Locations$Operations$Wait,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wait(callback: BodyResponseCallback<Schema$Operation>): void;
    wait(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Wait
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
        {}) as Params$Resource$Projects$Locations$Operations$Wait;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Wait;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://ondemandscanning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:wait').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
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
  export interface Params$Resource$Projects$Locations$Operations$Wait
    extends StandardParameters {
    /**
     * The name of the operation resource to wait on.
     */
    name?: string;
    /**
     * The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     */
    timeout?: string;
  }

  export class Resource$Projects$Locations$Scans {
    context: APIRequestContext;
    vulnerabilities: Resource$Projects$Locations$Scans$Vulnerabilities;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.vulnerabilities =
        new Resource$Projects$Locations$Scans$Vulnerabilities(this.context);
    }

    /**
     * Initiates an analysis of the provided packages.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ondemandscanning.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ondemandscanning = google.ondemandscanning('v1');
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
     *   const res = await ondemandscanning.projects.locations.scans.analyzePackages({
     *     // Required. The parent of the resource for which analysis is requested. Format: projects/[project_name]/locations/[location]
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "packages": [],
     *       //   "resourceUri": "my_resourceUri"
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
    analyzePackages(
      params: Params$Resource$Projects$Locations$Scans$Analyzepackages,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    analyzePackages(
      params?: Params$Resource$Projects$Locations$Scans$Analyzepackages,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    analyzePackages(
      params: Params$Resource$Projects$Locations$Scans$Analyzepackages,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzePackages(
      params: Params$Resource$Projects$Locations$Scans$Analyzepackages,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    analyzePackages(
      params: Params$Resource$Projects$Locations$Scans$Analyzepackages,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    analyzePackages(callback: BodyResponseCallback<Schema$Operation>): void;
    analyzePackages(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scans$Analyzepackages
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
        {}) as Params$Resource$Projects$Locations$Scans$Analyzepackages;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Scans$Analyzepackages;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://ondemandscanning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/scans:analyzePackages').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Scans$Analyzepackages
    extends StandardParameters {
    /**
     * Required. The parent of the resource for which analysis is requested. Format: projects/[project_name]/locations/[location]
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzePackagesRequestV1;
  }

  export class Resource$Projects$Locations$Scans$Vulnerabilities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists vulnerabilities resulting from a successfully completed scan.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ondemandscanning.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ondemandscanning = google.ondemandscanning('v1');
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
     *     await ondemandscanning.projects.locations.scans.vulnerabilities.list({
     *       // The number of vulnerabilities to retrieve.
     *       pageSize: 'placeholder-value',
     *       // The page token, resulting from a previous call to ListVulnerabilities.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent of the collection of Vulnerabilities being requested. Format: projects/[project_name]/locations/[location]/scans/[scan_id]
     *       parent: 'projects/my-project/locations/my-location/scans/my-scan',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "occurrences": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Scans$Vulnerabilities$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Scans$Vulnerabilities$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVulnerabilitiesResponseV1>;
    list(
      params: Params$Resource$Projects$Locations$Scans$Vulnerabilities$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Scans$Vulnerabilities$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVulnerabilitiesResponseV1>,
      callback: BodyResponseCallback<Schema$ListVulnerabilitiesResponseV1>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Scans$Vulnerabilities$List,
      callback: BodyResponseCallback<Schema$ListVulnerabilitiesResponseV1>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListVulnerabilitiesResponseV1>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scans$Vulnerabilities$List
        | BodyResponseCallback<Schema$ListVulnerabilitiesResponseV1>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVulnerabilitiesResponseV1>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVulnerabilitiesResponseV1>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVulnerabilitiesResponseV1>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scans$Vulnerabilities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Scans$Vulnerabilities$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://ondemandscanning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vulnerabilities').replace(
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
        createAPIRequest<Schema$ListVulnerabilitiesResponseV1>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVulnerabilitiesResponseV1>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Scans$Vulnerabilities$List
    extends StandardParameters {
    /**
     * The number of vulnerabilities to retrieve.
     */
    pageSize?: number;
    /**
     * The page token, resulting from a previous call to ListVulnerabilities.
     */
    pageToken?: string;
    /**
     * Required. The parent of the collection of Vulnerabilities being requested. Format: projects/[project_name]/locations/[location]/scans/[scan_id]
     */
    parent?: string;
  }
}
