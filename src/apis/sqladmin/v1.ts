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

export namespace sqladmin_v1 {
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
   * Cloud SQL Admin API
   *
   * API for Cloud SQL database instance management
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const sqladmin = google.sqladmin('v1');
   * ```
   */
  export class Sqladmin {
    context: APIRequestContext;
    instances: Resource$Instances;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.instances = new Resource$Instances(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * An entry for an Access Control list.
   */
  export interface Schema$AclEntry {
    /**
     * The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example **2012-11-15T16:19:00.094Z**.
     */
    expirationTime?: string | null;
    /**
     * This is always **sql#aclEntry**.
     */
    kind?: string | null;
    /**
     * Optional. A label to identify this entry.
     */
    name?: string | null;
    /**
     * The allowlisted value for the access control list.
     */
    value?: string | null;
  }
  /**
   * An Admin API warning message.
   */
  export interface Schema$ApiWarning {
    /**
     * Code to uniquely identify the warning type.
     */
    code?: string | null;
    /**
     * The warning message.
     */
    message?: string | null;
    /**
     * The region name for REGION_UNREACHABLE warning.
     */
    region?: string | null;
  }
  /**
   * Database instance backup configuration.
   */
  export interface Schema$BackupConfiguration {
    /**
     * Backup retention settings.
     */
    backupRetentionSettings?: Schema$BackupRetentionSettings;
    /**
     * (MySQL only) Whether binary log is enabled. If backup configuration is disabled, binarylog must be disabled as well.
     */
    binaryLogEnabled?: boolean | null;
    /**
     * Whether this configuration is enabled.
     */
    enabled?: boolean | null;
    /**
     * This is always **sql#backupConfiguration**.
     */
    kind?: string | null;
    /**
     * Location of the backup
     */
    location?: string | null;
    /**
     * (Postgres only) Whether point in time recovery is enabled.
     */
    pointInTimeRecoveryEnabled?: boolean | null;
    /**
     * Reserved for future use.
     */
    replicationLogArchivingEnabled?: boolean | null;
    /**
     * Start time for the daily backup configuration in UTC timezone in the 24 hour format - **HH:MM**.
     */
    startTime?: string | null;
    /**
     * The number of days of transaction logs we retain for point in time restore, from 1-7.
     */
    transactionLogRetentionDays?: number | null;
  }
  /**
   * We currently only support backup retention by specifying the number of backups we will retain.
   */
  export interface Schema$BackupRetentionSettings {
    /**
     * Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit is 'COUNT', we will retain this many backups.
     */
    retainedBackups?: number | null;
    /**
     * The unit that 'retained_backups' represents.
     */
    retentionUnit?: string | null;
  }
  /**
   * Connect settings retrieval response.
   */
  export interface Schema$ConnectSettings {
    /**
     * **SECOND_GEN**: Cloud SQL database instance. **EXTERNAL**: A database server that is not managed by Google. This property is read-only; use the **tier** property in the **settings** object to determine the database type.
     */
    backendType?: string | null;
    /**
     * The database engine type and version. The **databaseVersion** field cannot be changed after instance creation. MySQL instances: **MYSQL_8_0**, **MYSQL_5_7** (default), or **MYSQL_5_6**. PostgreSQL instances: **POSTGRES_9_6**, **POSTGRES_10**, **POSTGRES_11** or **POSTGRES_12** (default). SQL Server instances: **SQLSERVER_2017_STANDARD** (default), **SQLSERVER_2017_ENTERPRISE**, **SQLSERVER_2017_EXPRESS**, or **SQLSERVER_2017_WEB**.
     */
    databaseVersion?: string | null;
    /**
     * The assigned IP addresses for the instance.
     */
    ipAddresses?: Schema$IpMapping[];
    /**
     * This is always `sql#connectSettings`.
     */
    kind?: string | null;
    /**
     * SSL configuration.
     */
    serverCaCert?: Schema$SslCert;
  }
  /**
   * Database flags for Cloud SQL instances.
   */
  export interface Schema$DatabaseFlags {
    /**
     * The name of the flag. These flags are passed at instance startup, so include both server options and system variables for MySQL. Flags are specified with underscores, not hyphens. For more information, see [Configuring Database Flags](/sql/docs/mysql/flags) in the Cloud SQL documentation.
     */
    name?: string | null;
    /**
     * The value of the flag. Booleans are set to **on** for true and **off** for false. This field must be omitted if the flag doesn't take a value.
     */
    value?: string | null;
  }
  /**
   * A Cloud SQL instance resource.
   */
  export interface Schema$DatabaseInstance {
    /**
     *  *SECOND_GEN*: Cloud SQL database instance. *EXTERNAL*: A database server that is not managed by Google. This property is read-only; use the *tier* property in the *settings* object to determine the database type.
     */
    backendType?: string | null;
    /**
     * Connection name of the Cloud SQL instance used in connection strings.
     */
    connectionName?: string | null;
    /**
     * The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see this announcement for details.
     */
    currentDiskSize?: string | null;
    /**
     * The database engine type and version. The *databaseVersion* field cannot be changed after instance creation. MySQL instances: *MYSQL_8_0*, *MYSQL_5_7* (default), or *MYSQL_5_6*. PostgreSQL instances: *POSTGRES_9_6*, *POSTGRES_10*, *POSTGRES_11*, *POSTGRES_12*, or *POSTGRES_13* (default). SQL Server instances: *SQLSERVER_2017_STANDARD* (default), *SQLSERVER_2017_ENTERPRISE*, *SQLSERVER_2017_EXPRESS*, or *SQLSERVER_2017_WEB*.
     */
    databaseVersion?: string | null;
    /**
     * Disk encryption configuration specific to an instance. Applies only to Second Generation instances.
     */
    diskEncryptionConfiguration?: Schema$DiskEncryptionConfiguration;
    /**
     * Disk encryption status specific to an instance. Applies only to Second Generation instances.
     */
    diskEncryptionStatus?: Schema$DiskEncryptionStatus;
    /**
     * For internal usage only. The encrypted password.
     */
    encryptedRootPassword?: string | null;
    /**
     * This field is deprecated and will be removed from a future version of the API. Use the *settings.settingsVersion* field instead.
     */
    etag?: string | null;
    /**
     * The name and status of the failover replica. This property is applicable only to Second Generation instances.
     */
    failoverReplica?: {
      available?: boolean;
      failoverInstance?: Schema$InstanceReference;
      name?: string;
    } | null;
    /**
     * The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone.
     */
    gceZone?: string | null;
    /**
     * installed_version stores the current fully resolved database version including minor version such as MySQL_5.6.50
     */
    installedVersion?: string | null;
    /**
     * The instance type. This can be one of the following. *CLOUD_SQL_INSTANCE*: A Cloud SQL instance that is not replicating from a primary instance. *ON_PREMISES_INSTANCE*: An instance running on the customer's premises. *READ_REPLICA_INSTANCE*: A Cloud SQL instance configured as a read-replica.
     */
    instanceType?: string | null;
    /**
     * Uid of the Cloud SQL instance. Used by Pantheon to check instance is created
     */
    instanceUid?: string | null;
    /**
     * The assigned IP addresses for the instance.
     */
    ipAddresses?: Schema$IpMapping[];
    /**
     * The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances.
     */
    ipv6Address?: string | null;
    /**
     * This is always *sql#instance*.
     */
    kind?: string | null;
    /**
     * The reference to the instance which will act as primary in the replication setup.
     */
    masterInstance?: Schema$InstanceReference;
    /**
     * The name of the instance which will act as primary in the replication setup.
     */
    masterInstanceName?: string | null;
    /**
     * The maximum disk size of the instance in bytes.
     */
    maxDiskSize?: string | null;
    /**
     * Name of the Cloud SQL instance. This does not include the project ID.
     */
    name?: string | null;
    /**
     * Configuration specific to on-premises instances.
     */
    onPremisesConfiguration?: Schema$OnPremisesConfiguration;
    /**
     * This field represents the report generated by the proactive database wellness job for OutOfDisk issues. Writers: -- the proactive database wellness job for OOD. Readers: -- the Pantheon frontend -- the proactive database wellness job
     */
    outOfDiskReport?: Schema$SqlOutOfDiskReport;
    /**
     * The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.
     */
    project?: string | null;
    /**
     * The geographical region. Can be *us-central* (*FIRST_GEN* instances only) *us-central1* (*SECOND_GEN* instances only) *asia-east1* or *europe-west1*. Defaults to *us-central* or *us-central1* depending on the instance type. The region cannot be changed after instance creation.
     */
    region?: string | null;
    /**
     * Configuration specific to failover replicas and read replicas.
     */
    replicaConfiguration?: Schema$ReplicaConfiguration;
    /**
     * The replicas of the instance.
     */
    replicaInstances?: Schema$InstanceReference[];
    /**
     * The replicas of the instance.
     */
    replicaNames?: string[] | null;
    /**
     * Initial root password. Use only on creation.
     */
    rootPassword?: string | null;
    /**
     * The status indicating if instance satisfiesPzs. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * The start time of any upcoming scheduled maintenance for this instance.
     */
    scheduledMaintenance?: Schema$SqlScheduledMaintenance;
    /**
     * The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone. Reserved for future use.
     */
    secondaryGceZone?: string | null;
    /**
     * The URI of this resource.
     */
    selfLink?: string | null;
    /**
     * SSL configuration.
     */
    serverCaCert?: Schema$SslCert;
    /**
     * The service account email address assigned to the instance. This property is read-only.
     */
    serviceAccountEmailAddress?: string | null;
    /**
     * The user settings.
     */
    settings?: Schema$Settings;
    /**
     * The current serving state of the Cloud SQL instance. This can be one of the following. *SQL_INSTANCE_STATE_UNSPECIFIED*: The state of the instance is unknown. *RUNNABLE*: The instance is running, or has been stopped by owner. *SUSPENDED*: The instance is not available, for example due to problems with billing. *PENDING_DELETE*: The instance is being deleted. *PENDING_CREATE*: The instance is being created. *MAINTENANCE*: The instance is down for maintenance. *FAILED*: The instance creation failed.
     */
    state?: string | null;
    /**
     * If the instance state is SUSPENDED, the reason for the suspension.
     */
    suspensionReason?: string[] | null;
  }
  /**
   * Deny maintenance Periods. This specifies a date range during when all CSA rollout will be denied.
   */
  export interface Schema$DenyMaintenancePeriod {
    /**
     * "deny maintenance period" end date. If the year of the end date is empty, the year of the start date also must be empty. In this case, it means the no maintenance interval recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
     */
    endDate?: string | null;
    /**
     * "deny maintenance period" start date. If the year of the start date is empty, the year of the end date also must be empty. In this case, it means the no maintenance interval recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
     */
    startDate?: string | null;
    /**
     * Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00
     */
    time?: string | null;
  }
  /**
   * Disk encryption configuration for an instance.
   */
  export interface Schema$DiskEncryptionConfiguration {
    /**
     * This is always **sql#diskEncryptionConfiguration**.
     */
    kind?: string | null;
    /**
     * Resource name of KMS key for disk encryption
     */
    kmsKeyName?: string | null;
  }
  /**
   * Disk encryption status for an instance.
   */
  export interface Schema$DiskEncryptionStatus {
    /**
     * This is always **sql#diskEncryptionStatus**.
     */
    kind?: string | null;
    /**
     * KMS key version used to encrypt the Cloud SQL instance resource
     */
    kmsKeyVersionName?: string | null;
  }
  /**
   * Ephemeral certificate creation request.
   */
  export interface Schema$GenerateEphemeralCertRequest {
    /**
     * Optional. Access token to include in the signed certificate.
     */
    access_token?: string | null;
    /**
     * PEM encoded public key to include in the signed certificate.
     */
    public_key?: string | null;
    /**
     * Optional. Optional snapshot read timestamp to trade freshness for performance.
     */
    readTime?: string | null;
  }
  /**
   * Ephemeral certificate creation request.
   */
  export interface Schema$GenerateEphemeralCertResponse {
    /**
     * Generated cert
     */
    ephemeralCert?: Schema$SslCert;
  }
  /**
   * Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.
   */
  export interface Schema$InsightsConfig {
    /**
     * Whether Query Insights feature is enabled.
     */
    queryInsightsEnabled?: boolean | null;
    /**
     * Number of query plans generated by Insights per minute. Default is 5. Changing this will restart the database.
     */
    queryPlansPerMinute?: number | null;
    /**
     * Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database.
     */
    queryStringLength?: number | null;
    /**
     * Whether Query Insights will record application tags from query when enabled.
     */
    recordApplicationTags?: boolean | null;
    /**
     * Whether Query Insights will record client address when enabled.
     */
    recordClientAddress?: boolean | null;
  }
  /**
   * Reference to another Cloud SQL instance.
   */
  export interface Schema$InstanceReference {
    /**
     * The name of the Cloud SQL instance being referenced.
     */
    name?: string | null;
    /**
     * The region of the Cloud SQL instance being referenced.
     */
    region?: string | null;
  }
  /**
   * Database instances list response.
   */
  export interface Schema$InstancesListResponse {
    /**
     * List of database instance resources.
     */
    items?: Schema$DatabaseInstance[];
    /**
     * This is always *sql#instancesList*.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * List of warnings that occurred while handling the request.
     */
    warnings?: Schema$ApiWarning[];
  }
  /**
   * IP Management configuration.
   */
  export interface Schema$IpConfiguration {
    /**
     * The list of external networks that are allowed to connect to the instance using the IP. In 'CIDR' notation, also known as 'slash' notation (for example: **192.168.100.0/24**).
     */
    authorizedNetworks?: Schema$AclEntry[];
    /**
     * Whether the instance is assigned a public IP address or not.
     */
    ipv4Enabled?: boolean | null;
    /**
     * The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, *x/projects/myProject/global/networks/default**. This setting can be updated, but it cannot be removed after it is set.
     */
    privateNetwork?: string | null;
    /**
     * Whether SSL connections over IP are enforced or not.
     */
    requireSsl?: boolean | null;
  }
  /**
   * Database instance IP Mapping.
   */
  export interface Schema$IpMapping {
    /**
     * The IP address assigned.
     */
    ipAddress?: string | null;
    /**
     * The due time for this IP to be retired in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example **2012-11-15T16:19:00.094Z**. This field is only available when the IP is scheduled to be retired.
     */
    timeToRetire?: string | null;
    /**
     * The type of this IP address. A **PRIMARY** address is a public address that can accept incoming connections. A **PRIVATE** address is a private address that can accept incoming connections. An **OUTGOING** address is the source address of connections originating from the instance, if supported.
     */
    type?: string | null;
  }
  /**
   * Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.
   */
  export interface Schema$LocationPreference {
    /**
     * This is always **sql#locationPreference**.
     */
    kind?: string | null;
    /**
     * The preferred Compute Engine zone for the secondary/failover (for example: us-central1-a, us-central1-b, etc.). Reserved for future use.
     */
    secondaryZone?: string | null;
    /**
     * The preferred Compute Engine zone (for example: us-central1-a, us-central1-b, etc.).
     */
    zone?: string | null;
  }
  /**
   * Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.
   */
  export interface Schema$MaintenanceWindow {
    /**
     * day of week (1-7), starting on Monday.
     */
    day?: number | null;
    /**
     * hour of day - 0 to 23.
     */
    hour?: number | null;
    /**
     * This is always **sql#maintenanceWindow**.
     */
    kind?: string | null;
    /**
     * Maintenance timing setting: **canary** (Earlier) or **stable** (Later). [Learn more] (https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instance-settings#maintenance-timing-2ndgen).
     */
    updateTrack?: string | null;
  }
  /**
   * Read-replica configuration specific to MySQL databases.
   */
  export interface Schema$MySqlReplicaConfiguration {
    /**
     * PEM representation of the trusted CA's x509 certificate.
     */
    caCertificate?: string | null;
    /**
     * PEM representation of the replica's x509 certificate.
     */
    clientCertificate?: string | null;
    /**
     * PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate.
     */
    clientKey?: string | null;
    /**
     * Seconds to wait between connect retries. MySQL's default is 60 seconds.
     */
    connectRetryInterval?: number | null;
    /**
     * Path to a SQL dump file in Google Cloud Storage from which the replica instance is to be created. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported. Dumps have the binlog co-ordinates from which replication begins. This can be accomplished by setting --master-data to 1 when using mysqldump.
     */
    dumpFilePath?: string | null;
    /**
     * This is always **sql#mysqlReplicaConfiguration**.
     */
    kind?: string | null;
    /**
     * Interval in milliseconds between replication heartbeats.
     */
    masterHeartbeatPeriod?: string | null;
    /**
     * The password for the replication connection.
     */
    password?: string | null;
    /**
     * A list of permissible ciphers to use for SSL encryption.
     */
    sslCipher?: string | null;
    /**
     * The username for the replication connection.
     */
    username?: string | null;
    /**
     * Whether or not to check the primary instance's Common Name value in the certificate that it sends during the SSL handshake.
     */
    verifyServerCertificate?: boolean | null;
  }
  /**
   * On-premises instance configuration.
   */
  export interface Schema$OnPremisesConfiguration {
    /**
     * PEM representation of the trusted CA's x509 certificate.
     */
    caCertificate?: string | null;
    /**
     * PEM representation of the replica's x509 certificate.
     */
    clientCertificate?: string | null;
    /**
     * PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate.
     */
    clientKey?: string | null;
    /**
     * The dump file to create the Cloud SQL replica.
     */
    dumpFilePath?: string | null;
    /**
     * The host and port of the on-premises instance in host:port format
     */
    hostPort?: string | null;
    /**
     * This is always *sql#onPremisesConfiguration*.
     */
    kind?: string | null;
    /**
     * The password for connecting to on-premises instance.
     */
    password?: string | null;
    /**
     * The username for connecting to on-premises instance.
     */
    username?: string | null;
  }
  /**
   * Read-replica configuration for connecting to the primary instance.
   */
  export interface Schema$ReplicaConfiguration {
    /**
     * Specifies if the replica is the failover target. If the field is set to *true* the replica will be designated as a failover replica. In case the primary instance fails, the replica instance will be promoted as the new primary instance. Only one replica can be specified as failover target, and the replica has to be in different zone with the primary instance.
     */
    failoverTarget?: boolean | null;
    /**
     * This is always *sql#replicaConfiguration*.
     */
    kind?: string | null;
    /**
     * MySQL specific configuration when replicating from a MySQL on-premises primary instance. Replication configuration information such as the username, password, certificates, and keys are not stored in the instance metadata.The configuration information is used only to set up the replication connection and is stored by MySQL in a file named *master.info* in the data directory.
     */
    mysqlReplicaConfiguration?: Schema$MySqlReplicaConfiguration;
  }
  /**
   * Database instance settings.
   */
  export interface Schema$Settings {
    /**
     * The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. Valid values: **ALWAYS**: The instance is on, and remains so even in the absence of connection requests. **NEVER**: The instance is off; it is not activated, even if a connection request arrives.
     */
    activationPolicy?: string | null;
    /**
     * Active Directory configuration, relevant only for Cloud SQL for SQL Server.
     */
    activeDirectoryConfig?: Schema$SqlActiveDirectoryConfig;
    /**
     * Availability type. Potential values: **ZONAL**: The instance serves data from only one zone. Outages in that zone affect data accessibility. **REGIONAL**: The instance can serve data from more than one zone in a region (it is highly available). For more information, see [Overview of the High Availability Configuration](/sql/docs/postgres/high-availability).
     */
    availabilityType?: string | null;
    /**
     * The daily backup configuration for the instance.
     */
    backupConfiguration?: Schema$BackupConfiguration;
    /**
     * The name of server Instance collation.
     */
    collation?: string | null;
    /**
     * Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property was only applicable to First Generation instances.
     */
    crashSafeReplicationEnabled?: boolean | null;
    /**
     * The database flags passed to the instance at startup.
     */
    databaseFlags?: Schema$DatabaseFlags[];
    /**
     * Configuration specific to read replica instances. Indicates whether replication is enabled or not.
     */
    databaseReplicationEnabled?: boolean | null;
    /**
     * The size of data disk, in GB. The data disk size minimum is 10GB.
     */
    dataDiskSizeGb?: string | null;
    /**
     * The type of data disk: **PD_SSD** (default) or **PD_HDD**.
     */
    dataDiskType?: string | null;
    /**
     * Deny maintenance periods
     */
    denyMaintenancePeriods?: Schema$DenyMaintenancePeriod[];
    /**
     * Insights configuration, for now relevant only for Postgres.
     */
    insightsConfig?: Schema$InsightsConfig;
    /**
     * The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance. The IPv4 address cannot be disabled for Second Generation instances.
     */
    ipConfiguration?: Schema$IpConfiguration;
    /**
     * This is always **sql#settings**.
     */
    kind?: string | null;
    /**
     * The location preference settings. This allows the instance to be located as near as possible to Compute Engine zone for better performance.
     */
    locationPreference?: Schema$LocationPreference;
    /**
     * The maintenance window for this instance. This specifies when the instance can be restarted for maintenance purposes.
     */
    maintenanceWindow?: Schema$MaintenanceWindow;
    /**
     * The pricing plan for this instance. This can be either **PER_USE** or **PACKAGE**. Only **PER_USE** is supported for Second Generation instances.
     */
    pricingPlan?: string | null;
    /**
     * The type of replication this instance uses. This can be either **ASYNCHRONOUS** or **SYNCHRONOUS**. (Deprecated) This property was only applicable to First Generation instances.
     */
    replicationType?: string | null;
    /**
     * The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value.
     */
    settingsVersion?: string | null;
    /**
     * Configuration to increase storage size automatically. The default value is true.
     */
    storageAutoResize?: boolean | null;
    /**
     * The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
     */
    storageAutoResizeLimit?: string | null;
    /**
     * The tier (or machine type) for this instance, for example **db-custom-1-3840**.
     */
    tier?: string | null;
    /**
     * User-provided labels, represented as a dictionary where each label is a single key value pair.
     */
    userLabels?: {[key: string]: string} | null;
  }
  /**
   * Active Directory configuration, relevant only for Cloud SQL for SQL Server.
   */
  export interface Schema$SqlActiveDirectoryConfig {
    /**
     * The name of the domain (e.g., mydomain.com).
     */
    domain?: string | null;
    /**
     * This is always sql#activeDirectoryConfig.
     */
    kind?: string | null;
  }
  /**
   * This message wraps up the information written by out-of-disk detection job.
   */
  export interface Schema$SqlOutOfDiskReport {
    /**
     * The minimum recommended increase size in GigaBytes This field is consumed by the frontend Writers: -- the proactive database wellness job for OOD. Readers: -- the Pantheon frontend
     */
    sqlMinRecommendedIncreaseSizeGb?: number | null;
    /**
     * This field represents the state generated by the proactive database wellness job for OutOfDisk issues. Writers: -- the proactive database wellness job for OOD. Readers: -- the Pantheon frontend -- the proactive database wellness job
     */
    sqlOutOfDiskState?: string | null;
  }
  /**
   * Any scheduled maintenancce for this instance.
   */
  export interface Schema$SqlScheduledMaintenance {
    canDefer?: boolean | null;
    /**
     * If the scheduled maintenance can be rescheduled.
     */
    canReschedule?: boolean | null;
    /**
     * Maintenance cannot be rescheduled to start beyond this deadline.
     */
    scheduleDeadlineTime?: string | null;
    /**
     * The start time of any upcoming scheduled maintenance for this instance.
     */
    startTime?: string | null;
  }
  /**
   * SslCerts Resource
   */
  export interface Schema$SslCert {
    /**
     * PEM representation.
     */
    cert?: string | null;
    /**
     * Serial number, as extracted from the certificate.
     */
    certSerialNumber?: string | null;
    /**
     * User supplied name. Constrained to [a-zA-Z.-_ ]+.
     */
    commonName?: string | null;
    /**
     * The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example **2012-11-15T16:19:00.094Z**
     */
    createTime?: string | null;
    /**
     * The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example **2012-11-15T16:19:00.094Z**.
     */
    expirationTime?: string | null;
    /**
     * Name of the database instance.
     */
    instance?: string | null;
    /**
     * This is always sql#sslCert.
     */
    kind?: string | null;
    /**
     * Sha1 Fingerprint.
     */
    sha1Fingerprint?: string | null;
  }
  /**
   * SslCerts create ephemeral certificate request.
   */
  export interface Schema$SslCertsCreateEphemeralRequest {
    /**
     * Access token to include in the signed certificate.
     */
    access_token?: string | null;
    /**
     * PEM encoded public key to include in the signed certificate.
     */
    public_key?: string | null;
  }

  export class Resource$Instances {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists instances under a given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sqladmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const sqladmin = google.sqladmin('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sqlservice.admin',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sqladmin.instances.list({
     *     // A filter expression that filters resources listed in the response. The expression is in the form of field:value. For example, 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per their JSON representation, such as 'settings.userLabels.auto_start:true'. Multiple filter queries are space-separated. For example. 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly.
     *     filter: 'placeholder-value',
     *     // The maximum number of results to return per response.
     *     maxResults: 'placeholder-value',
     *     // A previously-returned page token representing part of the larger set of results to view.
     *     pageToken: 'placeholder-value',
     *     // Project ID of the project for which to list Cloud SQL instances.
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
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
    list(
      params: Params$Resource$Instances$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Instances$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InstancesListResponse>;
    list(
      params: Params$Resource$Instances$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Instances$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$InstancesListResponse>,
      callback: BodyResponseCallback<Schema$InstancesListResponse>
    ): void;
    list(
      params: Params$Resource$Instances$List,
      callback: BodyResponseCallback<Schema$InstancesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$InstancesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Instances$List
        | BodyResponseCallback<Schema$InstancesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InstancesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InstancesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$InstancesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Instances$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{project}/instances').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InstancesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InstancesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Instances$List extends StandardParameters {
    /**
     * A filter expression that filters resources listed in the response. The expression is in the form of field:value. For example, 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per their JSON representation, such as 'settings.userLabels.auto_start:true'. Multiple filter queries are space-separated. For example. 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly.
     */
    filter?: string;
    /**
     * The maximum number of results to return per response.
     */
    maxResults?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Project ID of the project for which to list Cloud SQL instances.
     */
    project?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    instances: Resource$Projects$Instances;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instances = new Resource$Projects$Instances(this.context);
    }
  }

  export class Resource$Projects$Instances {
    context: APIRequestContext;
    createEphemeral: Resource$Projects$Instances$Createephemeral;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.createEphemeral = new Resource$Projects$Instances$Createephemeral(
        this.context
      );
    }

    /**
     * Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sqladmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const sqladmin = google.sqladmin('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sqlservice.admin',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sqladmin.projects.instances.generateEphemeralCert({
     *     // Cloud SQL instance ID. This does not include the project ID.
     *     instance: 'placeholder-value',
     *     // Project ID of the project that contains the instance.
     *     project: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "access_token": "my_access_token",
     *       //   "public_key": "my_public_key",
     *       //   "readTime": "my_readTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "ephemeralCert": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generateEphemeralCert(
      params: Params$Resource$Projects$Instances$Generateephemeralcert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generateEphemeralCert(
      params?: Params$Resource$Projects$Instances$Generateephemeralcert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenerateEphemeralCertResponse>;
    generateEphemeralCert(
      params: Params$Resource$Projects$Instances$Generateephemeralcert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateEphemeralCert(
      params: Params$Resource$Projects$Instances$Generateephemeralcert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateEphemeralCertResponse>,
      callback: BodyResponseCallback<Schema$GenerateEphemeralCertResponse>
    ): void;
    generateEphemeralCert(
      params: Params$Resource$Projects$Instances$Generateephemeralcert,
      callback: BodyResponseCallback<Schema$GenerateEphemeralCertResponse>
    ): void;
    generateEphemeralCert(
      callback: BodyResponseCallback<Schema$GenerateEphemeralCertResponse>
    ): void;
    generateEphemeralCert(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Generateephemeralcert
        | BodyResponseCallback<Schema$GenerateEphemeralCertResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateEphemeralCertResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateEphemeralCertResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenerateEphemeralCertResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Generateephemeralcert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Generateephemeralcert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/projects/{project}/instances/{instance}:generateEphemeralCert'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenerateEphemeralCertResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateEphemeralCertResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves a resource containing information about a Cloud SQL instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sqladmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const sqladmin = google.sqladmin('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sqlservice.admin',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sqladmin.projects.instances.get({
     *     // Database instance ID. This does not include the project ID.
     *     instance: 'placeholder-value',
     *     // Project ID of the project that contains the instance.
     *     project: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backendType": "my_backendType",
     *   //   "connectionName": "my_connectionName",
     *   //   "currentDiskSize": "my_currentDiskSize",
     *   //   "databaseVersion": "my_databaseVersion",
     *   //   "diskEncryptionConfiguration": {},
     *   //   "diskEncryptionStatus": {},
     *   //   "encryptedRootPassword": "my_encryptedRootPassword",
     *   //   "etag": "my_etag",
     *   //   "failoverReplica": {},
     *   //   "gceZone": "my_gceZone",
     *   //   "installedVersion": "my_installedVersion",
     *   //   "instanceType": "my_instanceType",
     *   //   "instanceUid": "my_instanceUid",
     *   //   "ipAddresses": [],
     *   //   "ipv6Address": "my_ipv6Address",
     *   //   "kind": "my_kind",
     *   //   "masterInstance": {},
     *   //   "masterInstanceName": "my_masterInstanceName",
     *   //   "maxDiskSize": "my_maxDiskSize",
     *   //   "name": "my_name",
     *   //   "onPremisesConfiguration": {},
     *   //   "outOfDiskReport": {},
     *   //   "project": "my_project",
     *   //   "region": "my_region",
     *   //   "replicaConfiguration": {},
     *   //   "replicaInstances": [],
     *   //   "replicaNames": [],
     *   //   "rootPassword": "my_rootPassword",
     *   //   "satisfiesPzs": false,
     *   //   "scheduledMaintenance": {},
     *   //   "secondaryGceZone": "my_secondaryGceZone",
     *   //   "selfLink": "my_selfLink",
     *   //   "serverCaCert": {},
     *   //   "serviceAccountEmailAddress": "my_serviceAccountEmailAddress",
     *   //   "settings": {},
     *   //   "state": "my_state",
     *   //   "suspensionReason": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Instances$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Instances$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatabaseInstance>;
    get(
      params: Params$Resource$Projects$Instances$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Instances$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DatabaseInstance>,
      callback: BodyResponseCallback<Schema$DatabaseInstance>
    ): void;
    get(
      params: Params$Resource$Projects$Instances$Get,
      callback: BodyResponseCallback<Schema$DatabaseInstance>
    ): void;
    get(callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Get
        | BodyResponseCallback<Schema$DatabaseInstance>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatabaseInstance>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatabaseInstance>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DatabaseInstance> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{project}/instances/{instance}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatabaseInstance>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DatabaseInstance>(parameters);
      }
    }

    /**
     * Retrieves connect settings about a Cloud SQL instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sqladmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const sqladmin = google.sqladmin('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sqlservice.admin',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sqladmin.projects.instances.getConnectSettings({
     *     // Cloud SQL instance ID. This does not include the project ID.
     *     instance: 'placeholder-value',
     *     // Project ID of the project that contains the instance.
     *     project: 'placeholder-value',
     *     // Optional. Optional snapshot read timestamp to trade freshness for performance.
     *     readTime: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backendType": "my_backendType",
     *   //   "databaseVersion": "my_databaseVersion",
     *   //   "ipAddresses": [],
     *   //   "kind": "my_kind",
     *   //   "serverCaCert": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getConnectSettings(
      params: Params$Resource$Projects$Instances$Getconnectsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getConnectSettings(
      params?: Params$Resource$Projects$Instances$Getconnectsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConnectSettings>;
    getConnectSettings(
      params: Params$Resource$Projects$Instances$Getconnectsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConnectSettings(
      params: Params$Resource$Projects$Instances$Getconnectsettings,
      options: MethodOptions | BodyResponseCallback<Schema$ConnectSettings>,
      callback: BodyResponseCallback<Schema$ConnectSettings>
    ): void;
    getConnectSettings(
      params: Params$Resource$Projects$Instances$Getconnectsettings,
      callback: BodyResponseCallback<Schema$ConnectSettings>
    ): void;
    getConnectSettings(
      callback: BodyResponseCallback<Schema$ConnectSettings>
    ): void;
    getConnectSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Getconnectsettings
        | BodyResponseCallback<Schema$ConnectSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConnectSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConnectSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ConnectSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Getconnectsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Getconnectsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/projects/{project}/instances/{instance}/connectSettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ConnectSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConnectSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Instances$Generateephemeralcert
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateEphemeralCertRequest;
  }
  export interface Params$Resource$Projects$Instances$Get
    extends StandardParameters {
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Projects$Instances$Getconnectsettings
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
    /**
     * Optional. Optional snapshot read timestamp to trade freshness for performance.
     */
    readTime?: string;
  }

  export class Resource$Projects$Instances$Createephemeral {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sqladmin.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const sqladmin = google.sqladmin('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/sqlservice.admin',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sqladmin.projects.instances.createEphemeral.create({
     *     // Cloud SQL instance ID. This does not include the project ID.
     *     instance: 'placeholder-value',
     *     // Project ID of the Cloud SQL project.
     *     project: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "access_token": "my_access_token",
     *       //   "public_key": "my_public_key"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cert": "my_cert",
     *   //   "certSerialNumber": "my_certSerialNumber",
     *   //   "commonName": "my_commonName",
     *   //   "createTime": "my_createTime",
     *   //   "expirationTime": "my_expirationTime",
     *   //   "instance": "my_instance",
     *   //   "kind": "my_kind",
     *   //   "sha1Fingerprint": "my_sha1Fingerprint"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Instances$Createephemeral$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Instances$Createephemeral$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SslCert>;
    create(
      params: Params$Resource$Projects$Instances$Createephemeral$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Instances$Createephemeral$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SslCert>,
      callback: BodyResponseCallback<Schema$SslCert>
    ): void;
    create(
      params: Params$Resource$Projects$Instances$Createephemeral$Create,
      callback: BodyResponseCallback<Schema$SslCert>
    ): void;
    create(callback: BodyResponseCallback<Schema$SslCert>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Createephemeral$Create
        | BodyResponseCallback<Schema$SslCert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SslCert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SslCert>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SslCert> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Createephemeral$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Instances$Createephemeral$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/projects/{project}/instances/{instance}/createEphemeral'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SslCert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SslCert>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Instances$Createephemeral$Create
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the Cloud SQL project.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SslCertsCreateEphemeralRequest;
  }
}
