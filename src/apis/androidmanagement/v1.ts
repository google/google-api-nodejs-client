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

export namespace androidmanagement_v1 {
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
   * Android Management API
   *
   * The Android Management API provides remote enterprise management of Android devices and apps.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const androidmanagement = google.androidmanagement('v1');
   * ```
   */
  export class Androidmanagement {
    context: APIRequestContext;
    enterprises: Resource$Enterprises;
    signupUrls: Resource$Signupurls;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.enterprises = new Resource$Enterprises(this.context);
      this.signupUrls = new Resource$Signupurls(this.context);
    }
  }

  /**
   * Security policies set to the most secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values.
   */
  export interface Schema$AdvancedSecurityOverrides {
    /**
     * Controls Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC). Enabling Common Criteria Mode increases certain security components on a device, including AES-GCM encryption of Bluetooth Long Term Keys, and Wi-Fi configuration stores.Warning: Common Criteria Mode enforces a strict security model typically only required for IT products used in national security systems and other highly sensitive organizations. Standard device use may be affected. Only enabled if required.
     */
    commonCriteriaMode?: string | null;
    /**
     * Controls access to developer settings: developer options and safe boot. Replaces safeBootDisabled (deprecated) and debuggingFeaturesAllowed (deprecated).
     */
    developerSettings?: string | null;
    /**
     * Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced. Replaces ensureVerifyAppsEnabled (deprecated).
     */
    googlePlayProtectVerifyApps?: string | null;
    /**
     * The policy for untrusted apps (apps from unknown sources) enforced on the device. Replaces install_unknown_sources_allowed (deprecated).
     */
    untrustedAppsPolicy?: string | null;
  }
  /**
   * Configuration for an always-on VPN connection.
   */
  export interface Schema$AlwaysOnVpnPackage {
    /**
     * Disallows networking when the VPN is not connected.
     */
    lockdownEnabled?: boolean | null;
    /**
     * The package name of the VPN app.
     */
    packageName?: string | null;
  }
  /**
   * A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy.
   */
  export interface Schema$ApiLevelCondition {
    /**
     * The minimum desired Android Framework API level. If the device doesn't meet the minimum requirement, this condition is satisfied. Must be greater than zero.
     */
    minApiLevel?: number | null;
  }
  /**
   * Information about an app.
   */
  export interface Schema$Application {
    /**
     * Application tracks visible to the enterprise.
     */
    appTracks?: Schema$AppTrackInfo[];
    /**
     * The set of managed properties available to be pre-configured for the app.
     */
    managedProperties?: Schema$ManagedProperty[];
    /**
     * The name of the app in the form enterprises/{enterpriseId\}/applications/{package_name\}.
     */
    name?: string | null;
    /**
     * The permissions required by the app.
     */
    permissions?: Schema$ApplicationPermission[];
    /**
     * The title of the app. Localized.
     */
    title?: string | null;
  }
  /**
   * An app-related event.
   */
  export interface Schema$ApplicationEvent {
    /**
     * The creation time of the event.
     */
    createTime?: string | null;
    /**
     * App event type.
     */
    eventType?: string | null;
  }
  /**
   * A permission required by the app.
   */
  export interface Schema$ApplicationPermission {
    /**
     * A longer description of the permission, providing more detail on what it affects. Localized.
     */
    description?: string | null;
    /**
     * The name of the permission. Localized.
     */
    name?: string | null;
    /**
     * An opaque string uniquely identifying the permission. Not localized.
     */
    permissionId?: string | null;
  }
  /**
   * Policy for an individual app.
   */
  export interface Schema$ApplicationPolicy {
    /**
     * List of the app’s track IDs that a device belonging to the enterprise can access. If the list contains multiple track IDs, devices receive the latest version among all accessible tracks. If the list contains no track IDs, devices only have access to the app’s production track. More details about each track are available in AppTrackInfo.
     */
    accessibleTrackIds?: string[] | null;
    /**
     * Controls the auto-update mode for the app.
     */
    autoUpdateMode?: string | null;
    /**
     * Controls whether the app can communicate with itself across a device’s work and personal profiles, subject to user consent.
     */
    connectedWorkAndPersonalApp?: string | null;
    /**
     * The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps. It does not override the permission_grants which applies to all apps.
     */
    defaultPermissionPolicy?: string | null;
    /**
     * The scopes delegated to the app from Android Device Policy.
     */
    delegatedScopes?: string[] | null;
    /**
     * Whether the app is disabled. When disabled, the app data is still preserved.
     */
    disabled?: boolean | null;
    /**
     * The type of installation to perform.
     */
    installType?: string | null;
    /**
     * Whether the app is allowed to lock itself in full-screen mode. DEPRECATED. Use InstallType KIOSK or kioskCustomLauncherEnabled to to configure a dedicated device.
     */
    lockTaskAllowed?: boolean | null;
    /**
     * Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: *type* *JSON value* BOOL true or false STRING string INTEGER number CHOICE string MULTISELECT array of strings HIDDEN string BUNDLE_ARRAY array of objects
     */
    managedConfiguration?: {[key: string]: any} | null;
    /**
     * The managed configurations template for the app, saved from the managed configurations iframe. This field is ignored if managed_configuration is set.
     */
    managedConfigurationTemplate?: Schema$ManagedConfigurationTemplate;
    /**
     * The minimum version of the app that runs on the device. If set, the device attempts to update the app to at least this version code. If the app is not up-to-date, the device will contain a NonComplianceDetail with non_compliance_reason set to APP_NOT_UPDATED. The app must already be published to Google Play with a version code greater than or equal to this value. At most 20 apps may specify a minimum version code per policy.
     */
    minimumVersionCode?: number | null;
    /**
     * The package name of the app. For example, com.google.android.youtube for the YouTube app.
     */
    packageName?: string | null;
    /**
     * Explicit permission grants or denials for the app. These values override the default_permission_policy and permission_grants which apply to all apps.
     */
    permissionGrants?: Schema$PermissionGrant[];
  }
  /**
   * Information reported about an installed app.
   */
  export interface Schema$ApplicationReport {
    /**
     * The source of the package.
     */
    applicationSource?: string | null;
    /**
     * The display name of the app.
     */
    displayName?: string | null;
    /**
     * List of app events. The most recent 20 events are stored in the list.
     */
    events?: Schema$ApplicationEvent[];
    /**
     * The package name of the app that installed this app.
     */
    installerPackageName?: string | null;
    /**
     * List of keyed app states reported by the app.
     */
    keyedAppStates?: Schema$KeyedAppState[];
    /**
     * Package name of the app.
     */
    packageName?: string | null;
    /**
     * The SHA-256 hash of the app's APK file, which can be used to verify the app hasn't been modified. Each byte of the hash value is represented as a two-digit hexadecimal number.
     */
    packageSha256Hash?: string | null;
    /**
     * The SHA-1 hash of each android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the app package. Each byte of each hash value is represented as a two-digit hexadecimal number.
     */
    signingKeyCertFingerprints?: string[] | null;
    /**
     * Application state.
     */
    state?: string | null;
    /**
     * The app version code, which can be used to determine whether one version is more recent than another.
     */
    versionCode?: number | null;
    /**
     * The app version as displayed to the user.
     */
    versionName?: string | null;
  }
  /**
   * Settings controlling the behavior of application reports.
   */
  export interface Schema$ApplicationReportingSettings {
    /**
     * Whether removed apps are included in application reports.
     */
    includeRemovedApps?: boolean | null;
  }
  /**
   * Id to name association of a app track.
   */
  export interface Schema$AppTrackInfo {
    /**
     * The track name associated with the trackId, set in the Play Console. The name is modifiable from Play Console.
     */
    trackAlias?: string | null;
    /**
     * The unmodifiable unique track identifier, taken from the releaseTrackId in the URL of the Play Console page that displays the app’s track information.
     */
    trackId?: string | null;
  }
  /**
   * An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.
   */
  export interface Schema$BlockAction {
    /**
     * Number of days the policy is non-compliant before the device or work profile is blocked. To block access immediately, set to 0. blockAfterDays must be less than wipeAfterDays.
     */
    blockAfterDays?: number | null;
    /**
     * Specifies the scope of this BlockAction. Only applicable to devices that are company-owned.
     */
    blockScope?: string | null;
  }
  /**
   * Controls apps' access to private keys. The rule determines which private key, if any, Android Device Policy grants to the specified app. Access is granted either when the app calls KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) (or any overloads) to request a private key alias for a given URL, or for rules that are not URL-specific (that is, if urlPattern is not set, or set to the empty string or .*) on Android 11 and above, directly so that the app can call KeyChain.getPrivateKey (https://developer.android.com/reference/android/security/KeyChain#getPrivateKey%28android.content.Context,%20java.lang.String%29), without first having to call KeyChain.choosePrivateKeyAlias.When an app calls KeyChain.choosePrivateKeyAlias if more than one choosePrivateKeyRules matches, the last matching rule defines which key alias to return.
   */
  export interface Schema$ChoosePrivateKeyRule {
    /**
     * The package names to which this rule applies. The hash of the signing certificate for each app is verified against the hash provided by Play. If no package names are specified, then the alias is provided to all apps that call KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) or any overloads (but not without calling KeyChain.choosePrivateKeyAlias, even on Android 11 and above). Any app with the same Android UID as a package specified here will have access when they call KeyChain.choosePrivateKeyAlias.
     */
    packageNames?: string[] | null;
    /**
     * The alias of the private key to be used.
     */
    privateKeyAlias?: string | null;
    /**
     * The URL pattern to match against the URL of the request. If not set or empty, it matches all URLs. This uses the regular expression syntax of java.util.regex.Pattern.
     */
    urlPattern?: string | null;
  }
  /**
   * A command.
   */
  export interface Schema$Command {
    /**
     * The timestamp at which the command was created. The timestamp is automatically generated by the server.
     */
    createTime?: string | null;
    /**
     * The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration.
     */
    duration?: string | null;
    /**
     * If the command failed, an error code explaining the failure. This is not set when the command is cancelled by the caller.
     */
    errorCode?: string | null;
    /**
     * For commands of type RESET_PASSWORD, optionally specifies the new password.
     */
    newPassword?: string | null;
    /**
     * For commands of type RESET_PASSWORD, optionally specifies flags.
     */
    resetPasswordFlags?: string[] | null;
    /**
     * The type of the command.
     */
    type?: string | null;
    /**
     * The resource name of the user that owns the device in the form enterprises/{enterpriseId\}/users/{userId\}. This is automatically generated by the server based on the device the command is sent to.
     */
    userName?: string | null;
  }
  /**
   * Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.
   */
  export interface Schema$CommonCriteriaModeInfo {
    /**
     * Whether Common Criteria Mode is enabled.
     */
    commonCriteriaModeStatus?: string | null;
  }
  /**
   * A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule.
   */
  export interface Schema$ComplianceRule {
    /**
     * A condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement.
     */
    apiLevelCondition?: Schema$ApiLevelCondition;
    /**
     * If set to true, the rule includes a mitigating action to disable apps so that the device is effectively disabled, but app data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed.
     */
    disableApps?: boolean | null;
    /**
     * A condition which is satisfied if there exists any matching NonComplianceDetail for the device.
     */
    nonComplianceDetailCondition?: Schema$NonComplianceDetailCondition;
    /**
     * If set, the rule includes a mitigating action to disable apps specified in the list, but app data is preserved.
     */
    packageNamesToDisable?: string[] | null;
  }
  /**
   * Contact details for LaForge enterprises.
   */
  export interface Schema$ContactInfo {
    /**
     * Email address for a point of contact, which will be used to send important announcements related to managed Google Play.
     */
    contactEmail?: string | null;
    /**
     * The email of the data protection officer. The email is validated but not verified.
     */
    dataProtectionOfficerEmail?: string | null;
    /**
     * The name of the data protection officer.
     */
    dataProtectionOfficerName?: string | null;
    /**
     * The phone number of the data protection officer The phone number is validated but not verified.
     */
    dataProtectionOfficerPhone?: string | null;
    /**
     * The email of the EU representative. The email is validated but not verified.
     */
    euRepresentativeEmail?: string | null;
    /**
     * The name of the EU representative.
     */
    euRepresentativeName?: string | null;
    /**
     * The phone number of the EU representative. The phone number is validated but not verified.
     */
    euRepresentativePhone?: string | null;
  }
  /**
   * This feature is not generally available.
   */
  export interface Schema$ContentProviderEndpoint {
    /**
     * This feature is not generally available.
     */
    packageName?: string | null;
    /**
     * Required. This feature is not generally available.
     */
    signingCertsSha256?: string[] | null;
    /**
     * This feature is not generally available.
     */
    uri?: string | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: A full date, with non-zero year, month, and day values A month and day value, with a zero year, such as an anniversary A year on its own, with zero month and day values A year and month value, with a zero day, such as a credit card expiration dateRelated types are google.type.TimeOfDay and google.protobuf.Timestamp.
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
   * A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch.
   */
  export interface Schema$Device {
    /**
     * The API level of the Android platform version running on the device.
     */
    apiLevel?: number | null;
    /**
     * Reports for apps installed on the device. This information is only available when application_reports_enabled is true in the device's policy.
     */
    applicationReports?: Schema$ApplicationReport[];
    /**
     * The password requirements currently applied to the device. The applied requirements may be slightly different from those specified in passwordPolicies in some cases. fieldPath is set based on passwordPolicies.
     */
    appliedPasswordPolicies?: Schema$PasswordRequirements[];
    /**
     * The name of the policy currently applied to the device.
     */
    appliedPolicyName?: string | null;
    /**
     * The version of the policy currently applied to the device.
     */
    appliedPolicyVersion?: string | null;
    /**
     * The state currently applied to the device.
     */
    appliedState?: string | null;
    /**
     * Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.
     */
    commonCriteriaModeInfo?: Schema$CommonCriteriaModeInfo;
    /**
     * Device settings information. This information is only available if deviceSettingsEnabled is true in the device's policy.
     */
    deviceSettings?: Schema$DeviceSettings;
    /**
     * If the device state is DISABLED, an optional message that is displayed on the device indicating the reason the device is disabled. This field can be modified by a patch request.
     */
    disabledReason?: Schema$UserFacingMessage;
    /**
     * Detailed information about displays on the device. This information is only available if displayInfoEnabled is true in the device's policy.
     */
    displays?: Schema$Display[];
    /**
     * The time of device enrollment.
     */
    enrollmentTime?: string | null;
    /**
     * If the device was enrolled with an enrollment token with additional data provided, this field contains that data.
     */
    enrollmentTokenData?: string | null;
    /**
     * If the device was enrolled with an enrollment token, this field contains the name of the token.
     */
    enrollmentTokenName?: string | null;
    /**
     * Detailed information about the device hardware.
     */
    hardwareInfo?: Schema$HardwareInfo;
    /**
     * Hardware status samples in chronological order. This information is only available if hardwareStatusEnabled is true in the device's policy.
     */
    hardwareStatusSamples?: Schema$HardwareStatus[];
    /**
     * Deprecated.
     */
    lastPolicyComplianceReportTime?: string | null;
    /**
     * The last time the device fetched its policy.
     */
    lastPolicySyncTime?: string | null;
    /**
     * The last time the device sent a status report.
     */
    lastStatusReportTime?: string | null;
    /**
     * The type of management mode Android Device Policy takes on the device. This influences which policy settings are supported.
     */
    managementMode?: string | null;
    /**
     * Events related to memory and storage measurements in chronological order. This information is only available if memoryInfoEnabled is true in the device's policy.
     */
    memoryEvents?: Schema$MemoryEvent[];
    /**
     * Memory information. This information is only available if memoryInfoEnabled is true in the device's policy.
     */
    memoryInfo?: Schema$MemoryInfo;
    /**
     * The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     */
    name?: string | null;
    /**
     * Device network information. This information is only available if networkInfoEnabled is true in the device's policy.
     */
    networkInfo?: Schema$NetworkInfo;
    /**
     * Details about policy settings that the device is not compliant with.
     */
    nonComplianceDetails?: Schema$NonComplianceDetail[];
    /**
     * Ownership of the managed device.
     */
    ownership?: string | null;
    /**
     * Whether the device is compliant with its policy.
     */
    policyCompliant?: boolean | null;
    /**
     * The name of the policy applied to the device, in the form enterprises/{enterpriseId\}/policies/{policyId\}. If not specified, the policy_name for the device's user is applied. This field can be modified by a patch request. You can specify only the policyId when calling enterprises.devices.patch, as long as the policyId doesn’t contain any slashes. The rest of the policy name is inferred.
     */
    policyName?: string | null;
    /**
     * Power management events on the device in chronological order. This information is only available if powerManagementEventsEnabled is true in the device's policy.
     */
    powerManagementEvents?: Schema$PowerManagementEvent[];
    /**
     * If the same physical device has been enrolled multiple times, this field contains its previous device names. The serial number is used as the unique identifier to determine if the same physical device has enrolled previously. The names are in chronological order.
     */
    previousDeviceNames?: string[] | null;
    /**
     * Device's security posture value that reflects how secure the device is.
     */
    securityPosture?: Schema$SecurityPosture;
    /**
     * Detailed information about the device software. This information is only available if softwareInfoEnabled is true in the device's policy.
     */
    softwareInfo?: Schema$SoftwareInfo;
    /**
     * The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete.
     */
    state?: string | null;
    /**
     * Map of selected system properties name and value related to the device. This information is only available if systemPropertiesEnabled is true in the device's policy.
     */
    systemProperties?: {[key: string]: string} | null;
    /**
     * The user who owns the device.
     */
    user?: Schema$User;
    /**
     * The resource name of the user that owns this device in the form enterprises/{enterpriseId\}/users/{userId\}.
     */
    userName?: string | null;
  }
  /**
   * Information about security related device settings on device.
   */
  export interface Schema$DeviceSettings {
    /**
     * Whether ADB (https://developer.android.com/studio/command-line/adb.html) is enabled on the device.
     */
    adbEnabled?: boolean | null;
    /**
     * Whether developer mode is enabled on the device.
     */
    developmentSettingsEnabled?: boolean | null;
    /**
     * Encryption status from DevicePolicyManager.
     */
    encryptionStatus?: string | null;
    /**
     * Whether the device is secured with PIN/password.
     */
    isDeviceSecure?: boolean | null;
    /**
     * Whether the storage encryption is enabled.
     */
    isEncrypted?: boolean | null;
    /**
     * Whether installing apps from unknown sources is enabled.
     */
    unknownSourcesEnabled?: boolean | null;
    /**
     * Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced on the device.
     */
    verifyAppsEnabled?: boolean | null;
  }
  /**
   * Device display information.
   */
  export interface Schema$Display {
    /**
     * Display density expressed as dots-per-inch.
     */
    density?: number | null;
    /**
     * Unique display id.
     */
    displayId?: number | null;
    /**
     * Display height in pixels.
     */
    height?: number | null;
    /**
     * Name of the display.
     */
    name?: string | null;
    /**
     * Refresh rate of the display in frames per second.
     */
    refreshRate?: number | null;
    /**
     * State of the display.
     */
    state?: string | null;
    /**
     * Display width in pixels.
     */
    width?: number | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for Empty is empty JSON object {\}.
   */
  export interface Schema$Empty {}
  /**
   * An enrollment token.
   */
  export interface Schema$EnrollmentToken {
    /**
     * Optional, arbitrary data associated with the enrollment token. This could contain, for example, the ID of an org unit the device is assigned to after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail.
     */
    additionalData?: string | null;
    /**
     * Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device.
     */
    allowPersonalUsage?: string | null;
    /**
     * The length of time the enrollment token is valid, ranging from 1 minute to 90 days. If not specified, the default duration is 1 hour.
     */
    duration?: string | null;
    /**
     * The expiration time of the token. This is a read-only field generated by the server.
     */
    expirationTimestamp?: string | null;
    /**
     * The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId\}/enrollmentTokens/{enrollmentTokenId\}.
     */
    name?: string | null;
    /**
     * Whether the enrollment token is for one time use only. If the flag is set to true, only one device can use it for registration.
     */
    oneTimeOnly?: boolean | null;
    /**
     * The name of the policy initially applied to the enrolled device, in the form enterprises/{enterpriseId\}/policies/{policyId\}. If not specified, the policy_name for the device’s user is applied. If user_name is also not specified, enterprises/{enterpriseId\}/policies/default is applied by default. When updating this field, you can specify only the policyId as long as the policyId doesn’t contain any slashes. The rest of the policy name will be inferred.
     */
    policyName?: string | null;
    /**
     * A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON.
     */
    qrCode?: string | null;
    /**
     * The user associated with this enrollment token. If it's specified when the enrollment token is created and the user does not exist, the user will be created. This field must not contain personally identifiable information. Only the account_identifier field needs to be set.
     */
    user?: Schema$User;
    /**
     * The token value that's passed to the device and authorizes the device to enroll. This is a read-only field generated by the server.
     */
    value?: string | null;
  }
  /**
   * The configuration applied to an enterprise.
   */
  export interface Schema$Enterprise {
    /**
     * Deprecated and unused.
     */
    appAutoApprovalEnabled?: boolean | null;
    /**
     * The enterprise contact info of an EMM-managed enterprise.
     */
    contactInfo?: Schema$ContactInfo;
    /**
     * The types of Google Pub/Sub notifications enabled for the enterprise.
     */
    enabledNotificationTypes?: string[] | null;
    /**
     * The name of the enterprise displayed to users.
     */
    enterpriseDisplayName?: string | null;
    /**
     * An image displayed as a logo during device provisioning. Supported types are: image/bmp, image/gif, image/x-ico, image/jpeg, image/png, image/webp, image/vnd.wap.wbmp, image/x-adobe-dng.
     */
    logo?: Schema$ExternalData;
    /**
     * The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId\}.
     */
    name?: string | null;
    /**
     * A color in RGB format that indicates the predominant color to display in the device management app UI. The color components are stored as follows: (red << 16) | (green << 8) | blue, where the value of each component is between 0 and 255, inclusive.
     */
    primaryColor?: number | null;
    /**
     * The topic that Cloud Pub/Sub notifications are published to, in the form projects/{project\}/topics/{topic\}. This field is only required if Pub/Sub notifications are enabled.
     */
    pubsubTopic?: string | null;
    /**
     * Sign-in details of the enterprise.
     */
    signinDetails?: Schema$SigninDetail[];
    /**
     * Terms and conditions that must be accepted when provisioning a device for this enterprise. A page of terms is generated for each value in this list.
     */
    termsAndConditions?: Schema$TermsAndConditions[];
  }
  /**
   * Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash.
   */
  export interface Schema$ExternalData {
    /**
     * The base-64 encoded SHA-256 hash of the content hosted at url. If the content doesn't match this hash, Android Device Policy won't use the data.
     */
    sha256Hash?: string | null;
    /**
     * The absolute URL to the data, which must use either the http or https scheme. Android Device Policy doesn't provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL.
     */
    url?: string | null;
  }
  /**
   * A system freeze period. When a device’s clock is within the freeze period, all incoming system updates (including security patches) are blocked and won’t be installed. When a device is outside the freeze period, normal update behavior applies. Leap years are ignored in freeze period calculations, in particular: * If Feb. 29th is set as the start or end date of a freeze period, the freeze period will start or end on Feb. 28th instead. * When a device’s system clock reads Feb. 29th, it’s treated as Feb. 28th. * When calculating the number of days in a freeze period or the time between two freeze periods, Feb. 29th is ignored and not counted as a day.
   */
  export interface Schema$FreezePeriod {
    /**
     * The end date (inclusive) of the freeze period. Must be no later than 90 days from the start date. If the end date is earlier than the start date, the freeze period is considered wrapping year-end. Note: year must not be set. For example, {"month": 1,"date": 30\}.
     */
    endDate?: Schema$Date;
    /**
     * The start date (inclusive) of the freeze period. Note: year must not be set. For example, {"month": 1,"date": 30\}.
     */
    startDate?: Schema$Date;
  }
  /**
   * Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.
   */
  export interface Schema$HardwareInfo {
    /**
     * Battery shutdown temperature thresholds in Celsius for each battery on the device.
     */
    batteryShutdownTemperatures?: number[] | null;
    /**
     * Battery throttling temperature thresholds in Celsius for each battery on the device.
     */
    batteryThrottlingTemperatures?: number[] | null;
    /**
     * Brand of the device. For example, Google.
     */
    brand?: string | null;
    /**
     * CPU shutdown temperature thresholds in Celsius for each CPU on the device.
     */
    cpuShutdownTemperatures?: number[] | null;
    /**
     * CPU throttling temperature thresholds in Celsius for each CPU on the device.
     */
    cpuThrottlingTemperatures?: number[] | null;
    /**
     * Baseband version. For example, MDM9625_104662.22.05.34p.
     */
    deviceBasebandVersion?: string | null;
    /**
     * GPU shutdown temperature thresholds in Celsius for each GPU on the device.
     */
    gpuShutdownTemperatures?: number[] | null;
    /**
     * GPU throttling temperature thresholds in Celsius for each GPU on the device.
     */
    gpuThrottlingTemperatures?: number[] | null;
    /**
     * Name of the hardware. For example, Angler.
     */
    hardware?: string | null;
    /**
     * Manufacturer. For example, Motorola.
     */
    manufacturer?: string | null;
    /**
     * The model of the device. For example, Asus Nexus 7.
     */
    model?: string | null;
    /**
     * The device serial number.
     */
    serialNumber?: string | null;
    /**
     * Device skin shutdown temperature thresholds in Celsius.
     */
    skinShutdownTemperatures?: number[] | null;
    /**
     * Device skin throttling temperature thresholds in Celsius.
     */
    skinThrottlingTemperatures?: number[] | null;
  }
  /**
   * Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health.
   */
  export interface Schema$HardwareStatus {
    /**
     * Current battery temperatures in Celsius for each battery on the device.
     */
    batteryTemperatures?: number[] | null;
    /**
     * Current CPU temperatures in Celsius for each CPU on the device.
     */
    cpuTemperatures?: number[] | null;
    /**
     * CPU usages in percentage for each core available on the device. Usage is 0 for each unplugged core. Empty array implies that CPU usage is not supported in the system.
     */
    cpuUsages?: number[] | null;
    /**
     * The time the measurements were taken.
     */
    createTime?: string | null;
    /**
     * Fan speeds in RPM for each fan on the device. Empty array means that there are no fans or fan speed is not supported on the system.
     */
    fanSpeeds?: number[] | null;
    /**
     * Current GPU temperatures in Celsius for each GPU on the device.
     */
    gpuTemperatures?: number[] | null;
    /**
     * Current device skin temperatures in Celsius.
     */
    skinTemperatures?: number[] | null;
  }
  /**
   * Response on issuing a command. This is currently empty as a placeholder.
   */
  export interface Schema$IssueCommandResponse {}
  /**
   * Keyed app state reported by the app.
   */
  export interface Schema$KeyedAppState {
    /**
     * The creation time of the app state on the device.
     */
    createTime?: string | null;
    /**
     * Optionally, a machine-readable value to be read by the EMM. For example, setting values that the admin can choose to query against in the EMM console (e.g. “notify me if the battery_warning data < 10”).
     */
    data?: string | null;
    /**
     * The key for the app state. Acts as a point of reference for what the app is providing state for. For example, when providing managed configuration feedback, this key could be the managed configuration key.
     */
    key?: string | null;
    /**
     * The time the app state was most recently updated.
     */
    lastUpdateTime?: string | null;
    /**
     * Optionally, a free-form message string to explain the app state. If the state was triggered by a particular value (e.g. a managed configuration value), it should be included in the message.
     */
    message?: string | null;
    /**
     * The severity of the app state.
     */
    severity?: string | null;
  }
  /**
   * Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.
   */
  export interface Schema$KioskCustomization {
    /**
     * Specifies whether the Settings app is allowed in kiosk mode.
     */
    deviceSettings?: string | null;
    /**
     * Sets the behavior of a device in kiosk mode when a user presses and holds (long-presses) the Power button.
     */
    powerButtonActions?: string | null;
    /**
     * Specifies whether system info and notifications are disabled in kiosk mode.
     */
    statusBar?: string | null;
    /**
     * Specifies whether system error dialogs for crashed or unresponsive apps are blocked in kiosk mode. When blocked, the system will force-stop the app as if the user chooses the "close app" option on the UI.
     */
    systemErrorWarnings?: string | null;
    /**
     * Specifies which navigation features are enabled (e.g. Home, Overview buttons) in kiosk mode.
     */
    systemNavigation?: string | null;
  }
  /**
   * An action to launch an app.
   */
  export interface Schema$LaunchAppAction {
    /**
     * Package name of app to be launched
     */
    packageName?: string | null;
  }
  /**
   * Response to a request to list devices for a given enterprise.
   */
  export interface Schema$ListDevicesResponse {
    /**
     * The list of devices.
     */
    devices?: Schema$Device[];
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response to a request to list enterprises.
   */
  export interface Schema$ListEnterprisesResponse {
    /**
     * The list of enterprises.
     */
    enterprises?: Schema$Enterprise[];
    /**
     * If there are more results, a token to retrieve next page of results.
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
   * Response to a request to list policies for a given enterprise.
   */
  export interface Schema$ListPoliciesResponse {
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of policies.
     */
    policies?: Schema$Policy[];
  }
  /**
   * Response to a request to list web apps for a given enterprise.
   */
  export interface Schema$ListWebAppsResponse {
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of web apps.
     */
    webApps?: Schema$WebApp[];
  }
  /**
   * The managed configurations template for the app, saved from the managed configurations iframe.
   */
  export interface Schema$ManagedConfigurationTemplate {
    /**
     * Optional, a map containing configuration variables defined for the configuration.
     */
    configurationVariables?: {[key: string]: string} | null;
    /**
     * The ID of the managed configurations template.
     */
    templateId?: string | null;
  }
  /**
   * Managed property.
   */
  export interface Schema$ManagedProperty {
    /**
     * The default value of the property. BUNDLE_ARRAY properties don't have a default value.
     */
    defaultValue?: any | null;
    /**
     * A longer description of the property, providing more detail of what it affects. Localized.
     */
    description?: string | null;
    /**
     * For CHOICE or MULTISELECT properties, the list of possible entries.
     */
    entries?: Schema$ManagedPropertyEntry[];
    /**
     * The unique key that the app uses to identify the property, e.g. "com.google.android.gm.fieldname".
     */
    key?: string | null;
    /**
     * For BUNDLE_ARRAY properties, the list of nested properties. A BUNDLE_ARRAY property is at most two levels deep.
     */
    nestedProperties?: Schema$ManagedProperty[];
    /**
     * The name of the property. Localized.
     */
    title?: string | null;
    /**
     * The type of the property.
     */
    type?: string | null;
  }
  /**
   * An entry of a managed property.
   */
  export interface Schema$ManagedPropertyEntry {
    /**
     * The human-readable name of the value. Localized.
     */
    name?: string | null;
    /**
     * The machine-readable value of the entry, which should be used in the configuration. Not localized.
     */
    value?: string | null;
  }
  /**
   * An event related to memory and storage measurements.
   */
  export interface Schema$MemoryEvent {
    /**
     * The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium.
     */
    byteCount?: string | null;
    /**
     * The creation time of the event.
     */
    createTime?: string | null;
    /**
     * Event type.
     */
    eventType?: string | null;
  }
  /**
   * Information about device memory and storage.
   */
  export interface Schema$MemoryInfo {
    /**
     * Total internal storage on device in bytes.
     */
    totalInternalStorage?: string | null;
    /**
     * Total RAM on device in bytes.
     */
    totalRam?: string | null;
  }
  /**
   * Device network info.
   */
  export interface Schema$NetworkInfo {
    /**
     * IMEI number of the GSM device. For example, A1000031212.
     */
    imei?: string | null;
    /**
     * MEID number of the CDMA device. For example, A00000292788E1.
     */
    meid?: string | null;
    /**
     * Alphabetic name of current registered operator. For example, Vodafone.
     */
    networkOperatorName?: string | null;
    /**
     * Provides telephony information associated with each SIM card on the device. Only supported on fully managed devices starting from Android API level 23.
     */
    telephonyInfos?: Schema$TelephonyInfo[];
    /**
     * Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11.
     */
    wifiMacAddress?: string | null;
  }
  /**
   * Provides detail about non-compliance with a policy setting.
   */
  export interface Schema$NonComplianceDetail {
    /**
     * If the policy setting could not be applied, the current value of the setting on the device.
     */
    currentValue?: any | null;
    /**
     * For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a subfield name. 2) For array-typed fields, the field name is followed by the array index enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url
     */
    fieldPath?: string | null;
    /**
     * If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can't be installed or updated.
     */
    installationFailureReason?: string | null;
    /**
     * The reason the device is not in compliance with the setting.
     */
    nonComplianceReason?: string | null;
    /**
     * The package name indicating which app is out of compliance, if applicable.
     */
    packageName?: string | null;
    /**
     * The name of the policy setting. This is the JSON field name of a top-level Policy field.
     */
    settingName?: string | null;
  }
  /**
   * A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields.
   */
  export interface Schema$NonComplianceDetailCondition {
    /**
     * The reason the device is not in compliance with the setting. If not set, then this condition matches any reason.
     */
    nonComplianceReason?: string | null;
    /**
     * The package name of the app that's out of compliance. If not set, then this condition matches any package name.
     */
    packageName?: string | null;
    /**
     * The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name.
     */
    settingName?: string | null;
  }
  /**
   * This feature is not generally available.
   */
  export interface Schema$OncCertificateProvider {
    /**
     * This feature is not generally available.
     */
    certificateReferences?: string[] | null;
    /**
     * This feature is not generally available.
     */
    contentProviderEndpoint?: Schema$ContentProviderEndpoint;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
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
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id\}.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A list of package names.
   */
  export interface Schema$PackageNameList {
    /**
     * A list of package names.
     */
    packageNames?: string[] | null;
  }
  /**
   * Requirements for the password used to unlock a device.
   */
  export interface Schema$PasswordRequirements {
    /**
     * Number of incorrect device-unlock passwords that can be entered before a device is wiped. A value of 0 means there is no restriction.
     */
    maximumFailedPasswordsForWipe?: number | null;
    /**
     * Password expiration timeout.
     */
    passwordExpirationTimeout?: string | null;
    /**
     * The length of the password history. After setting this field, the user won't be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction.
     */
    passwordHistoryLength?: number | null;
    /**
     * The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX.
     */
    passwordMinimumLength?: number | null;
    /**
     * Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumLetters?: number | null;
    /**
     * Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumLowerCase?: number | null;
    /**
     * Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumNonLetter?: number | null;
    /**
     * Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumNumeric?: number | null;
    /**
     * Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumSymbols?: number | null;
    /**
     * Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumUpperCase?: number | null;
    /**
     * The required password quality.
     */
    passwordQuality?: string | null;
    /**
     * The scope that the password requirement applies to.
     */
    passwordScope?: string | null;
    /**
     * The length of time after a device or work profile is unlocked using a strong form of authentication (password, PIN, pattern) that it can be unlocked using any other authentication method (e.g. fingerprint, trust agents, face). After the specified time period elapses, only strong forms of authentication can be used to unlock the device or work profile.
     */
    requirePasswordUnlock?: string | null;
  }
  /**
   * Configuration for an Android permission and its grant state.
   */
  export interface Schema$PermissionGrant {
    /**
     * The Android permission or group, e.g. android.permission.READ_CALENDAR or android.permission_group.CALENDAR.
     */
    permission?: string | null;
    /**
     * The policy for granting the permission.
     */
    policy?: string | null;
  }
  /**
   * A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities.
   */
  export interface Schema$PersistentPreferredActivity {
    /**
     * The intent actions to match in the filter. If any actions are included in the filter, then an intent's action must be one of those values for it to match. If no actions are included, the intent action is ignored.
     */
    actions?: string[] | null;
    /**
     * The intent categories to match in the filter. An intent includes the categories that it requires, all of which must be included in the filter in order to match. In other words, adding a category to the filter has no impact on matching unless that category is specified in the intent.
     */
    categories?: string[] | null;
    /**
     * The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent.
     */
    receiverActivity?: string | null;
  }
  /**
   * Policies for apps in the personal profile of a company-owned device with a work profile.
   */
  export interface Schema$PersonalApplicationPolicy {
    /**
     * The type of installation to perform.
     */
    installType?: string | null;
    /**
     * The package name of the application.
     */
    packageName?: string | null;
  }
  /**
   * Policies controlling personal usage on a company-owned device with a work profile.
   */
  export interface Schema$PersonalUsagePolicies {
    /**
     * Account types that can't be managed by the user.
     */
    accountTypesWithManagementDisabled?: string[] | null;
    /**
     * Whether camera is disabled.
     */
    cameraDisabled?: boolean | null;
    /**
     * Controls how long the work profile can stay off. The duration must be at least 3 days.
     */
    maxDaysWithWorkOff?: number | null;
    /**
     * Policy applied to applications in the personal profile.
     */
    personalApplications?: Schema$PersonalApplicationPolicy[];
    /**
     * Used together with personalApplications to control how apps in the personal profile are allowed or blocked.
     */
    personalPlayStoreMode?: string | null;
    /**
     * Whether screen capture is disabled.
     */
    screenCaptureDisabled?: boolean | null;
  }
  /**
   * A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it.
   */
  export interface Schema$Policy {
    /**
     * Account types that can't be managed by the user.
     */
    accountTypesWithManagementDisabled?: string[] | null;
    /**
     * Whether adding new users and profiles is disabled.
     */
    addUserDisabled?: boolean | null;
    /**
     * Whether adjusting the master volume is disabled. Also mutes the device.
     */
    adjustVolumeDisabled?: boolean | null;
    /**
     * Security policies set to the most secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values.
     */
    advancedSecurityOverrides?: Schema$AdvancedSecurityOverrides;
    /**
     * Configuration for an always-on VPN connection. Use with vpn_config_disabled to prevent modification of this setting.
     */
    alwaysOnVpnPackage?: Schema$AlwaysOnVpnPackage;
    /**
     * The app tracks for Android Device Policy the device can access. The device receives the latest version among all accessible tracks. If no tracks are specified, then the device only uses the production track.
     */
    androidDevicePolicyTracks?: string[] | null;
    /**
     * Deprecated. Use autoUpdateMode instead.When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect.The app auto update policy, which controls when automatic app updates can be applied.
     */
    appAutoUpdatePolicy?: string | null;
    /**
     * Policy applied to apps.
     */
    applications?: Schema$ApplicationPolicy[];
    /**
     * Whether auto date, time, and time zone are enabled on a company-owned device. If this is set, then autoTimeRequired is ignored.
     */
    autoDateAndTimeZone?: string | null;
    /**
     * Whether auto time is required, which prevents the user from manually setting the date and time. If autoDateAndTimeZone is set, this field is ignored.
     */
    autoTimeRequired?: boolean | null;
    /**
     * Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled.
     */
    blockApplicationsEnabled?: boolean | null;
    /**
     * Whether configuring bluetooth is disabled.
     */
    bluetoothConfigDisabled?: boolean | null;
    /**
     * Whether bluetooth contact sharing is disabled.
     */
    bluetoothContactSharingDisabled?: boolean | null;
    /**
     * Whether bluetooth is disabled. Prefer this setting over bluetooth_config_disabled because bluetooth_config_disabled can be bypassed by the user.
     */
    bluetoothDisabled?: boolean | null;
    /**
     * Whether all cameras on the device are disabled.
     */
    cameraDisabled?: boolean | null;
    /**
     * Whether configuring cell broadcast is disabled.
     */
    cellBroadcastsConfigDisabled?: boolean | null;
    /**
     * Rules for determining apps' access to private keys. See ChoosePrivateKeyRule for details.
     */
    choosePrivateKeyRules?: Schema$ChoosePrivateKeyRule[];
    /**
     * Rules declaring which mitigating actions to take when a device is not compliant with its policy. When the conditions for multiple rules are satisfied, all of the mitigating actions for the rules are taken. There is a maximum limit of 100 rules. Use policy enforcement rules instead.
     */
    complianceRules?: Schema$ComplianceRule[];
    /**
     * Whether creating windows besides app windows is disabled.
     */
    createWindowsDisabled?: boolean | null;
    /**
     * Whether configuring user credentials is disabled.
     */
    credentialsConfigDisabled?: boolean | null;
    /**
     * Whether roaming data services are disabled.
     */
    dataRoamingDisabled?: boolean | null;
    /**
     * Whether the user is allowed to enable debugging features.
     */
    debuggingFeaturesAllowed?: boolean | null;
    /**
     * The default permission policy for runtime permission requests.
     */
    defaultPermissionPolicy?: string | null;
    /**
     * The device owner information to be shown on the lock screen.
     */
    deviceOwnerLockScreenInfo?: Schema$UserFacingMessage;
    /**
     * Whether encryption is enabled
     */
    encryptionPolicy?: string | null;
    /**
     * Whether app verification is force-enabled.
     */
    ensureVerifyAppsEnabled?: boolean | null;
    /**
     * Whether factory resetting from settings is disabled.
     */
    factoryResetDisabled?: boolean | null;
    /**
     * Email addresses of device administrators for factory reset protection. When the device is factory reset, it will require one of these admins to log in with the Google account email and password to unlock the device. If no admins are specified, the device won't provide factory reset protection.
     */
    frpAdminEmails?: string[] | null;
    /**
     * Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled.
     */
    funDisabled?: boolean | null;
    /**
     * Whether user installation of apps is disabled.
     */
    installAppsDisabled?: boolean | null;
    /**
     * This field has no effect.
     */
    installUnknownSourcesAllowed?: boolean | null;
    /**
     * Whether the keyguard is disabled.
     */
    keyguardDisabled?: boolean | null;
    /**
     * Disabled keyguard customizations, such as widgets.
     */
    keyguardDisabledFeatures?: string[] | null;
    /**
     * Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.
     */
    kioskCustomization?: Schema$KioskCustomization;
    /**
     * Whether the kiosk custom launcher is enabled. This replaces the home screen with a launcher that locks down the device to the apps installed via the applications setting. Apps appear on a single page in alphabetical order. Use kioskCustomization to further configure the kiosk device behavior.
     */
    kioskCustomLauncherEnabled?: boolean | null;
    /**
     * The degree of location detection enabled.
     */
    locationMode?: string | null;
    /**
     * A message displayed to the user in the device administators settings screen.
     */
    longSupportMessage?: Schema$UserFacingMessage;
    /**
     * Maximum time in milliseconds for user activity until the device locks. A value of 0 means there is no restriction.
     */
    maximumTimeToLock?: string | null;
    /**
     * The minimum allowed Android API level.
     */
    minimumApiLevel?: number | null;
    /**
     * Whether configuring mobile networks is disabled.
     */
    mobileNetworksConfigDisabled?: boolean | null;
    /**
     * Whether adding or removing accounts is disabled.
     */
    modifyAccountsDisabled?: boolean | null;
    /**
     * Whether the user mounting physical external media is disabled.
     */
    mountPhysicalMediaDisabled?: boolean | null;
    /**
     * The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     */
    name?: string | null;
    /**
     * Whether the network escape hatch is enabled. If a network connection can't be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings.Note: Setting wifiConfigDisabled to true will override this setting under specific circumstances. Please see wifiConfigDisabled for further details.
     */
    networkEscapeHatchEnabled?: boolean | null;
    /**
     * Whether resetting network settings is disabled.
     */
    networkResetDisabled?: boolean | null;
    /**
     * This feature is not generally available.
     */
    oncCertificateProviders?: Schema$OncCertificateProvider[];
    /**
     * Network configuration for the device. See configure networks for more information.
     */
    openNetworkConfiguration?: {[key: string]: any} | null;
    /**
     * Whether using NFC to beam data from apps is disabled.
     */
    outgoingBeamDisabled?: boolean | null;
    /**
     * Whether outgoing calls are disabled.
     */
    outgoingCallsDisabled?: boolean | null;
    /**
     * Password requirement policies. Different policies can be set for work profile or fully managed devices by setting the password_scope field in the policy.
     */
    passwordPolicies?: Schema$PasswordRequirements[];
    /**
     * Password requirements. The field password_requirements.require_password_unlock must not be set. DEPRECATED - Use password_policies.Note:Complexity-based values of PasswordQuality, that is, COMPLEXITY_LOW, COMPLEXITY_MEDIUM, and COMPLEXITY_HIGH, cannot be used here.
     */
    passwordRequirements?: Schema$PasswordRequirements;
    /**
     * Explicit permission or group grants or denials for all apps. These values override the default_permission_policy.
     */
    permissionGrants?: Schema$PermissionGrant[];
    /**
     * Specifies permitted accessibility services. If the field is not set, any accessibility service can be used. If the field is set, only the accessibility services in this list and the system's built-in accessibility service can be used. In particular, if the field is set to empty, only the system's built-in accessibility servicess can be used.
     */
    permittedAccessibilityServices?: Schema$PackageNameList;
    /**
     * If present, only the input methods provided by packages in this list are permitted. If this field is present, but the list is empty, then only system input methods are permitted.
     */
    permittedInputMethods?: Schema$PackageNameList;
    /**
     * Default intent handler activities.
     */
    persistentPreferredActivities?: Schema$PersistentPreferredActivity[];
    /**
     * Policies managing personal usage on a company-owned device.
     */
    personalUsagePolicies?: Schema$PersonalUsagePolicies;
    /**
     * This mode controls which apps are available to the user in the Play Store and the behavior on the device when apps are removed from the policy.
     */
    playStoreMode?: string | null;
    /**
     * Rules that define the behavior when a particular policy can not be applied on device
     */
    policyEnforcementRules?: Schema$PolicyEnforcementRule[];
    /**
     * Allows showing UI on a device for a user to choose a private key alias if there are no matching rules in ChoosePrivateKeyRules. For devices below Android P, setting this may leave enterprise keys vulnerable.
     */
    privateKeySelectionEnabled?: boolean | null;
    /**
     * The network-independent global HTTP proxy. Typically proxies should be configured per-network in open_network_configuration. However for unusual configurations like general internal filtering a global HTTP proxy may be useful. If the proxy is not accessible, network access may break. The global proxy is only a recommendation and some apps may ignore it.
     */
    recommendedGlobalProxy?: Schema$ProxyInfo;
    /**
     * Whether removing other users is disabled.
     */
    removeUserDisabled?: boolean | null;
    /**
     * Whether rebooting the device into safe boot is disabled.
     */
    safeBootDisabled?: boolean | null;
    /**
     * Whether screen capture is disabled.
     */
    screenCaptureDisabled?: boolean | null;
    /**
     * Actions to take during the setup process.
     */
    setupActions?: Schema$SetupAction[];
    /**
     * Whether changing the user icon is disabled.
     */
    setUserIconDisabled?: boolean | null;
    /**
     * Whether changing the wallpaper is disabled.
     */
    setWallpaperDisabled?: boolean | null;
    /**
     * Whether location sharing is disabled.
     */
    shareLocationDisabled?: boolean | null;
    /**
     * A message displayed to the user in the settings screen wherever functionality has been disabled by the admin. If the message is longer than 200 characters it may be truncated.
     */
    shortSupportMessage?: Schema$UserFacingMessage;
    /**
     * Flag to skip hints on the first use. Enterprise admin can enable the system recommendation for apps to skip their user tutorial and other introductory hints on first start-up.
     */
    skipFirstUseHintsEnabled?: boolean | null;
    /**
     * Whether sending and receiving SMS messages is disabled.
     */
    smsDisabled?: boolean | null;
    /**
     * Whether the status bar is disabled. This disables notifications, quick settings, and other screen overlays that allow escape from full-screen mode. DEPRECATED. To disable the status bar on a kiosk device, use InstallType KIOSK or kioskCustomLauncherEnabled.
     */
    statusBarDisabled?: boolean | null;
    /**
     * Status reporting settings
     */
    statusReportingSettings?: Schema$StatusReportingSettings;
    /**
     * The battery plugged in modes for which the device stays on. When using this setting, it is recommended to clear maximum_time_to_lock so that the device doesn't lock itself while it stays on.
     */
    stayOnPluggedModes?: string[] | null;
    /**
     * The system update policy, which controls how OS updates are applied. If the update type is WINDOWED, the update window will automatically apply to Play app updates as well.
     */
    systemUpdate?: Schema$SystemUpdate;
    /**
     * Whether configuring tethering and portable hotspots is disabled.
     */
    tetheringConfigDisabled?: boolean | null;
    /**
     * Whether user uninstallation of applications is disabled.
     */
    uninstallAppsDisabled?: boolean | null;
    /**
     * Whether the microphone is muted and adjusting microphone volume is disabled.
     */
    unmuteMicrophoneDisabled?: boolean | null;
    /**
     * Whether transferring files over USB is disabled.
     */
    usbFileTransferDisabled?: boolean | null;
    /**
     * Whether USB storage is enabled. Deprecated.
     */
    usbMassStorageEnabled?: boolean | null;
    /**
     * The version of the policy. This is a read-only field. The version is incremented each time the policy is updated.
     */
    version?: string | null;
    /**
     * Whether configuring VPN is disabled.
     */
    vpnConfigDisabled?: boolean | null;
    /**
     * Whether configuring Wi-Fi access points is disabled.Note: If a network connection can't be made at boot time and configuring Wi-Fi is disabled then network escape hatch will be shown in order to refresh the device policy (see networkEscapeHatchEnabled).
     */
    wifiConfigDisabled?: boolean | null;
    /**
     * DEPRECATED - Use wifi_config_disabled.
     */
    wifiConfigsLockdownEnabled?: boolean | null;
  }
  /**
   * A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName.
   */
  export interface Schema$PolicyEnforcementRule {
    /**
     * An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.
     */
    blockAction?: Schema$BlockAction;
    /**
     * The top-level policy to enforce. For example, applications or passwordPolicies.
     */
    settingName?: string | null;
    /**
     * An action to reset a fully managed device or delete a work profile. Note: blockAction must also be specified.
     */
    wipeAction?: Schema$WipeAction;
  }
  /**
   * Additional details regarding the security posture of the device.
   */
  export interface Schema$PostureDetail {
    /**
     * Corresponding admin-facing advice to mitigate this security risk and improve the security posture of the device.
     */
    advice?: Schema$UserFacingMessage[];
    /**
     * A specific security risk that negatively affects the security posture of the device.
     */
    securityRisk?: string | null;
  }
  /**
   * A power management event.
   */
  export interface Schema$PowerManagementEvent {
    /**
     * For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage.
     */
    batteryLevel?: number | null;
    /**
     * The creation time of the event.
     */
    createTime?: string | null;
    /**
     * Event type.
     */
    eventType?: string | null;
  }
  /**
   * Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.
   */
  export interface Schema$ProxyInfo {
    /**
     * For a direct proxy, the hosts for which the proxy is bypassed. The host names may contain wildcards such as *.example.com.
     */
    excludedHosts?: string[] | null;
    /**
     * The host of the direct proxy.
     */
    host?: string | null;
    /**
     * The URI of the PAC script used to configure the proxy.
     */
    pacUri?: string | null;
    /**
     * The port of the direct proxy.
     */
    port?: number | null;
  }
  /**
   * The security posture of the device, as determined by the current device state and the policies applied.
   */
  export interface Schema$SecurityPosture {
    /**
     * Device's security posture value.
     */
    devicePosture?: string | null;
    /**
     * Additional details regarding the security posture of the device.
     */
    postureDetails?: Schema$PostureDetail[];
  }
  /**
   * An action executed during setup.
   */
  export interface Schema$SetupAction {
    /**
     * Description of this action.
     */
    description?: Schema$UserFacingMessage;
    /**
     * An action to launch an app.
     */
    launchApp?: Schema$LaunchAppAction;
    /**
     * Title of this action.
     */
    title?: Schema$UserFacingMessage;
  }
  /**
   * A resource containing sign in details for an enterprise.
   */
  export interface Schema$SigninDetail {
    /**
     * Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device.
     */
    allowPersonalUsage?: string | null;
    /**
     * A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. This is a read-only field generated by the server.
     */
    qrCode?: string | null;
    /**
     * An enterprise wide enrollment token used to trigger custom sign-in flow. This is a read-only field generated by the server.
     */
    signinEnrollmentToken?: string | null;
    /**
     * Sign-in URL for authentication when device is provisioned with a sign-in enrollment token. The sign-in endpoint should finish authentication flow with a URL in the form of https://enterprise.google.com/android/enroll?et= for a successful login, or https://enterprise.google.com/android/enroll/invalid for a failed login.
     */
    signinUrl?: string | null;
  }
  /**
   * An enterprise signup URL.
   */
  export interface Schema$SignupUrl {
    /**
     * The name of the resource. Use this value in the signupUrl field when calling enterprises.create to complete the enterprise signup flow.
     */
    name?: string | null;
    /**
     * A URL where an enterprise admin can register their enterprise. The page can't be rendered in an iframe.
     */
    url?: string | null;
  }
  /**
   * Information about device software.
   */
  export interface Schema$SoftwareInfo {
    /**
     * Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys.
     */
    androidBuildNumber?: string | null;
    /**
     * Build time.
     */
    androidBuildTime?: string | null;
    /**
     * The Android Device Policy app version code.
     */
    androidDevicePolicyVersionCode?: number | null;
    /**
     * The Android Device Policy app version as displayed to the user.
     */
    androidDevicePolicyVersionName?: string | null;
    /**
     * The user-visible Android version string. For example, 6.0.1.
     */
    androidVersion?: string | null;
    /**
     * The system bootloader version number, e.g. 0.6.7.
     */
    bootloaderVersion?: string | null;
    /**
     * SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn't been modified.
     */
    deviceBuildSignature?: string | null;
    /**
     * Kernel version, for example, 2.6.32.9-g103d848.
     */
    deviceKernelVersion?: string | null;
    /**
     * An IETF BCP 47 language code for the primary locale on the device.
     */
    primaryLanguageCode?: string | null;
    /**
     * Security patch level, e.g. 2016-05-01.
     */
    securityPatchLevel?: string | null;
    /**
     * Information about a potential pending system update.
     */
    systemUpdateInfo?: Schema$SystemUpdateInfo;
  }
  /**
   * The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).
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
   * Settings controlling the behavior of status reports.
   */
  export interface Schema$StatusReportingSettings {
    /**
     * Application reporting settings. Only applicable if application_reports_enabled is true.
     */
    applicationReportingSettings?: Schema$ApplicationReportingSettings;
    /**
     * Whether app reports are enabled.
     */
    applicationReportsEnabled?: boolean | null;
    /**
     * Whether Common Criteria Mode reporting is enabled.
     */
    commonCriteriaModeEnabled?: boolean | null;
    /**
     * Whether device settings reporting is enabled.
     */
    deviceSettingsEnabled?: boolean | null;
    /**
     * Whether displays reporting is enabled. Report data is not available for personally owned devices with work profiles.
     */
    displayInfoEnabled?: boolean | null;
    /**
     * Whether hardware status reporting is enabled. Report data is not available for personally owned devices with work profiles.
     */
    hardwareStatusEnabled?: boolean | null;
    /**
     * Whether memory reporting is enabled.
     */
    memoryInfoEnabled?: boolean | null;
    /**
     * Whether network info reporting is enabled.
     */
    networkInfoEnabled?: boolean | null;
    /**
     * Whether power management event reporting is enabled. Report data is not available for personally owned devices with work profiles.
     */
    powerManagementEventsEnabled?: boolean | null;
    /**
     * Whether software info reporting is enabled.
     */
    softwareInfoEnabled?: boolean | null;
    /**
     * Whether system properties reporting is enabled.
     */
    systemPropertiesEnabled?: boolean | null;
  }
  /**
   * Configuration for managing system updates
   */
  export interface Schema$SystemUpdate {
    /**
     * If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device's local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time.
     */
    endMinutes?: number | null;
    /**
     * An annually repeating time period in which over-the-air (OTA) system updates are postponed to freeze the OS version running on a device. To prevent freezing the device indefinitely, each freeze period must be separated by at least 60 days.
     */
    freezePeriods?: Schema$FreezePeriod[];
    /**
     * If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in the device's local time. This value must be between 0 and 1439, inclusive.
     */
    startMinutes?: number | null;
    /**
     * The type of system update to configure.
     */
    type?: string | null;
  }
  /**
   * Information about a potential pending system update.
   */
  export interface Schema$SystemUpdateInfo {
    /**
     * The time when the update was first available. A zero value indicates that this field is not set. This field is set only if an update is available (that is, updateStatus is neither UPDATE_STATUS_UNKNOWN nor UP_TO_DATE).
     */
    updateReceivedTime?: string | null;
    /**
     * The status of an update: whether an update exists and what type it is.
     */
    updateStatus?: string | null;
  }
  /**
   * Telephony information associated with a given SIM card on the device. Only supported on fully managed devices starting from Android API level 23.
   */
  export interface Schema$TelephonyInfo {
    /**
     * The carrier name associated with this SIM card.
     */
    carrierName?: string | null;
    /**
     * The phone number associated with this SIM card.
     */
    phoneNumber?: string | null;
  }
  /**
   * A terms and conditions page to be accepted during provisioning.
   */
  export interface Schema$TermsAndConditions {
    /**
     * A well-formatted HTML string. It will be parsed on the client with android.text.Html#fromHtml.
     */
    content?: Schema$UserFacingMessage;
    /**
     * A short header which appears above the HTML content.
     */
    header?: Schema$UserFacingMessage;
  }
  /**
   * A user belonging to an enterprise.
   */
  export interface Schema$User {
    /**
     * A unique identifier you create for this user, such as user342 or asset#44418. This field must be set when the user is created and can't be updated. This field must not contain personally identifiable information (PII). This identifier must be 1024 characters or less; otherwise, the update policy request will fail.
     */
    accountIdentifier?: string | null;
  }
  /**
   * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
   */
  export interface Schema$UserFacingMessage {
    /**
     * The default message displayed if no localized message is specified or the user's locale doesn't match with any of the localized messages. A default message must be provided if any localized messages are provided.
     */
    defaultMessage?: string | null;
    /**
     * A map containing pairs, where locale is a well-formed BCP 47 language (https://www.w3.org/International/articles/language-tags/) code, such as en-US, es-ES, or fr.
     */
    localizedMessages?: {[key: string]: string} | null;
  }
  /**
   * A web app.
   */
  export interface Schema$WebApp {
    /**
     * The display mode of the web app.
     */
    displayMode?: string | null;
    /**
     * A list of icons for the web app. Must have at least one element.
     */
    icons?: Schema$WebAppIcon[];
    /**
     * The name of the web app, which is generated by the server during creation in the form enterprises/{enterpriseId\}/webApps/{packageName\}.
     */
    name?: string | null;
    /**
     * The start URL, i.e. the URL that should load when the user opens the application.
     */
    startUrl?: string | null;
    /**
     * The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon).
     */
    title?: string | null;
    /**
     * The current version of the app.Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.
     */
    versionCode?: string | null;
  }
  /**
   * An icon for a web app. Supported formats are: png, jpg and webp.
   */
  export interface Schema$WebAppIcon {
    /**
     * The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet"). - The image type can be png or jpg. - The image should ideally be square. - The image should ideally have a size of 512x512.
     */
    imageData?: string | null;
  }
  /**
   * A web token used to access the managed Google Play iframe.
   */
  export interface Schema$WebToken {
    /**
     * The features to enable. Use this if you want to control exactly which feature(s) will be activated; leave empty to allow all features.Restrictions / things to note: - If no features are listed here, all features are enabled — this is the default behavior where you give access to all features to your admins. - This must not contain any FEATURE_UNSPECIFIED values. - Repeated values are ignored
     */
    enabledFeatures?: string[] | null;
    /**
     * The name of the web token, which is generated by the server during creation in the form enterprises/{enterpriseId\}/webTokens/{webTokenId\}.
     */
    name?: string | null;
    /**
     * The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme.
     */
    parentFrameUrl?: string | null;
    /**
     * Permissions available to an admin in the embedded UI. An admin must have all of these permissions in order to view the UI. This field is deprecated.
     */
    permissions?: string[] | null;
    /**
     * The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server.
     */
    value?: string | null;
  }
  /**
   * An action to reset a fully managed device or delete a work profile. Note: blockAction must also be specified.
   */
  export interface Schema$WipeAction {
    /**
     * Whether the factory-reset protection data is preserved on the device. This setting doesn’t apply to work profiles.
     */
    preserveFrp?: boolean | null;
    /**
     * Number of days the policy is non-compliant before the device or work profile is wiped. wipeAfterDays must be greater than blockAfterDays.
     */
    wipeAfterDays?: number | null;
  }

  export class Resource$Enterprises {
    context: APIRequestContext;
    applications: Resource$Enterprises$Applications;
    devices: Resource$Enterprises$Devices;
    enrollmentTokens: Resource$Enterprises$Enrollmenttokens;
    policies: Resource$Enterprises$Policies;
    webApps: Resource$Enterprises$Webapps;
    webTokens: Resource$Enterprises$Webtokens;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.applications = new Resource$Enterprises$Applications(this.context);
      this.devices = new Resource$Enterprises$Devices(this.context);
      this.enrollmentTokens = new Resource$Enterprises$Enrollmenttokens(
        this.context
      );
      this.policies = new Resource$Enterprises$Policies(this.context);
      this.webApps = new Resource$Enterprises$Webapps(this.context);
      this.webTokens = new Resource$Enterprises$Webtokens(this.context);
    }

    /**
     * Creates an enterprise. This is the last step in the enterprise signup flow.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.create({
     *     // Whether the enterprise admin has seen and agreed to the managed Google Play Agreement (https://www.android.com/enterprise/terms/). Always set this to true when creating an EMM-managed enterprise. Do not create the enterprise until the admin has viewed and accepted the agreement.
     *     agreementAccepted: 'placeholder-value',
     *     // The enterprise token appended to the callback URL. Only set this when creating a customer-managed enterprise.
     *     enterpriseToken: 'placeholder-value',
     *     // The ID of the Google Cloud Platform project which will own the enterprise.
     *     projectId: 'placeholder-value',
     *     // The name of the SignupUrl used to sign up for the enterprise. Only set this when creating a customer-managed enterprise.
     *     signupUrlName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appAutoApprovalEnabled": false,
     *       //   "contactInfo": {},
     *       //   "enabledNotificationTypes": [],
     *       //   "enterpriseDisplayName": "my_enterpriseDisplayName",
     *       //   "logo": {},
     *       //   "name": "my_name",
     *       //   "primaryColor": 0,
     *       //   "pubsubTopic": "my_pubsubTopic",
     *       //   "signinDetails": [],
     *       //   "termsAndConditions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appAutoApprovalEnabled": false,
     *   //   "contactInfo": {},
     *   //   "enabledNotificationTypes": [],
     *   //   "enterpriseDisplayName": "my_enterpriseDisplayName",
     *   //   "logo": {},
     *   //   "name": "my_name",
     *   //   "primaryColor": 0,
     *   //   "pubsubTopic": "my_pubsubTopic",
     *   //   "signinDetails": [],
     *   //   "termsAndConditions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Enterprises$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Enterprise>;
    create(
      params: Params$Resource$Enterprises$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Enterprises$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Enterprise>,
      callback: BodyResponseCallback<Schema$Enterprise>
    ): void;
    create(
      params: Params$Resource$Enterprises$Create,
      callback: BodyResponseCallback<Schema$Enterprise>
    ): void;
    create(callback: BodyResponseCallback<Schema$Enterprise>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Create
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Enterprise> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/enterprises').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Enterprise>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Enterprise>(parameters);
      }
    }

    /**
     * Deletes an enterprise. Only available for EMM-managed enterprises.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.delete({
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     name: 'enterprises/my-enterprise',
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
      params: Params$Resource$Enterprises$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Enterprises$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Enterprises$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Delete
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
        {}) as Params$Resource$Enterprises$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * Gets an enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.get({
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     name: 'enterprises/my-enterprise',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appAutoApprovalEnabled": false,
     *   //   "contactInfo": {},
     *   //   "enabledNotificationTypes": [],
     *   //   "enterpriseDisplayName": "my_enterpriseDisplayName",
     *   //   "logo": {},
     *   //   "name": "my_name",
     *   //   "primaryColor": 0,
     *   //   "pubsubTopic": "my_pubsubTopic",
     *   //   "signinDetails": [],
     *   //   "termsAndConditions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Enterprises$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Enterprise>;
    get(
      params: Params$Resource$Enterprises$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Enterprise>,
      callback: BodyResponseCallback<Schema$Enterprise>
    ): void;
    get(
      params: Params$Resource$Enterprises$Get,
      callback: BodyResponseCallback<Schema$Enterprise>
    ): void;
    get(callback: BodyResponseCallback<Schema$Enterprise>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Get
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Enterprise> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Enterprises$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Enterprise>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Enterprise>(parameters);
      }
    }

    /**
     * Lists EMM-managed enterprises. Only BASIC fields are returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.list({
     *     // The requested page size. The actual page size may be fixed to a min or max value.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results returned by the server.
     *     pageToken: 'placeholder-value',
     *     // Required. The Cloud project ID of the EMM managing the enterprises.
     *     projectId: 'placeholder-value',
     *     // Specifies which Enterprise fields to return. This method only supports BASIC.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enterprises": [],
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
      params: Params$Resource$Enterprises$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Enterprises$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEnterprisesResponse>;
    list(
      params: Params$Resource$Enterprises$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEnterprisesResponse>,
      callback: BodyResponseCallback<Schema$ListEnterprisesResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$List,
      callback: BodyResponseCallback<Schema$ListEnterprisesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEnterprisesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$List
        | BodyResponseCallback<Schema$ListEnterprisesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEnterprisesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEnterprisesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListEnterprisesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Enterprises$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/enterprises').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListEnterprisesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEnterprisesResponse>(parameters);
      }
    }

    /**
     * Updates an enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.patch({
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     name: 'enterprises/my-enterprise',
     *     // The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appAutoApprovalEnabled": false,
     *       //   "contactInfo": {},
     *       //   "enabledNotificationTypes": [],
     *       //   "enterpriseDisplayName": "my_enterpriseDisplayName",
     *       //   "logo": {},
     *       //   "name": "my_name",
     *       //   "primaryColor": 0,
     *       //   "pubsubTopic": "my_pubsubTopic",
     *       //   "signinDetails": [],
     *       //   "termsAndConditions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appAutoApprovalEnabled": false,
     *   //   "contactInfo": {},
     *   //   "enabledNotificationTypes": [],
     *   //   "enterpriseDisplayName": "my_enterpriseDisplayName",
     *   //   "logo": {},
     *   //   "name": "my_name",
     *   //   "primaryColor": 0,
     *   //   "pubsubTopic": "my_pubsubTopic",
     *   //   "signinDetails": [],
     *   //   "termsAndConditions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Enterprises$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Enterprise>;
    patch(
      params: Params$Resource$Enterprises$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Enterprise>,
      callback: BodyResponseCallback<Schema$Enterprise>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Patch,
      callback: BodyResponseCallback<Schema$Enterprise>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Enterprise>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Patch
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Enterprise> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Enterprise>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Enterprise>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Create
    extends StandardParameters {
    /**
     * Whether the enterprise admin has seen and agreed to the managed Google Play Agreement (https://www.android.com/enterprise/terms/). Always set this to true when creating an EMM-managed enterprise. Do not create the enterprise until the admin has viewed and accepted the agreement.
     */
    agreementAccepted?: boolean;
    /**
     * The enterprise token appended to the callback URL. Only set this when creating a customer-managed enterprise.
     */
    enterpriseToken?: string;
    /**
     * The ID of the Google Cloud Platform project which will own the enterprise.
     */
    projectId?: string;
    /**
     * The name of the SignupUrl used to sign up for the enterprise. Only set this when creating a customer-managed enterprise.
     */
    signupUrlName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Enterprise;
  }
  export interface Params$Resource$Enterprises$Delete
    extends StandardParameters {
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Get extends StandardParameters {
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$List extends StandardParameters {
    /**
     * The requested page size. The actual page size may be fixed to a min or max value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * Required. The Cloud project ID of the EMM managing the enterprises.
     */
    projectId?: string;
    /**
     * Specifies which Enterprise fields to return. This method only supports BASIC.
     */
    view?: string;
  }
  export interface Params$Resource$Enterprises$Patch
    extends StandardParameters {
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    name?: string;
    /**
     * The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Enterprise;
  }

  export class Resource$Enterprises$Applications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets info about an application.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.applications.get({
     *     // The preferred language for localized application info, as a BCP47 tag (e.g. "en-US", "de"). If not specified the default language of the application will be used.
     *     languageCode: 'placeholder-value',
     *     // The name of the application in the form enterprises/{enterpriseId\}/applications/{package_name\}.
     *     name: 'enterprises/my-enterprise/applications/my-application',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appTracks": [],
     *   //   "managedProperties": [],
     *   //   "name": "my_name",
     *   //   "permissions": [],
     *   //   "title": "my_title"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Applications$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Enterprises$Applications$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Application>;
    get(
      params: Params$Resource$Enterprises$Applications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Applications$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Application>,
      callback: BodyResponseCallback<Schema$Application>
    ): void;
    get(
      params: Params$Resource$Enterprises$Applications$Get,
      callback: BodyResponseCallback<Schema$Application>
    ): void;
    get(callback: BodyResponseCallback<Schema$Application>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Applications$Get
        | BodyResponseCallback<Schema$Application>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Application>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Application>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Application> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Applications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Applications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Application>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Application>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Applications$Get
    extends StandardParameters {
    /**
     * The preferred language for localized application info, as a BCP47 tag (e.g. "en-US", "de"). If not specified the default language of the application will be used.
     */
    languageCode?: string;
    /**
     * The name of the application in the form enterprises/{enterpriseId\}/applications/{package_name\}.
     */
    name?: string;
  }

  export class Resource$Enterprises$Devices {
    context: APIRequestContext;
    operations: Resource$Enterprises$Devices$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Enterprises$Devices$Operations(
        this.context
      );
    }

    /**
     * Deletes a device. This operation wipes the device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.delete({
     *     // The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     *     name: 'enterprises/my-enterprise/devices/my-device',
     *     // Optional flags that control the device wiping behavior.
     *     wipeDataFlags: 'placeholder-value',
     *     // Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters.
     *     wipeReasonMessage: 'placeholder-value',
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
      params: Params$Resource$Enterprises$Devices$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Enterprises$Devices$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Enterprises$Devices$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Devices$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Devices$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Delete
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
        {}) as Params$Resource$Enterprises$Devices$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * Gets a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.get({
     *     // The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     *     name: 'enterprises/my-enterprise/devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiLevel": 0,
     *   //   "applicationReports": [],
     *   //   "appliedPasswordPolicies": [],
     *   //   "appliedPolicyName": "my_appliedPolicyName",
     *   //   "appliedPolicyVersion": "my_appliedPolicyVersion",
     *   //   "appliedState": "my_appliedState",
     *   //   "commonCriteriaModeInfo": {},
     *   //   "deviceSettings": {},
     *   //   "disabledReason": {},
     *   //   "displays": [],
     *   //   "enrollmentTime": "my_enrollmentTime",
     *   //   "enrollmentTokenData": "my_enrollmentTokenData",
     *   //   "enrollmentTokenName": "my_enrollmentTokenName",
     *   //   "hardwareInfo": {},
     *   //   "hardwareStatusSamples": [],
     *   //   "lastPolicyComplianceReportTime": "my_lastPolicyComplianceReportTime",
     *   //   "lastPolicySyncTime": "my_lastPolicySyncTime",
     *   //   "lastStatusReportTime": "my_lastStatusReportTime",
     *   //   "managementMode": "my_managementMode",
     *   //   "memoryEvents": [],
     *   //   "memoryInfo": {},
     *   //   "name": "my_name",
     *   //   "networkInfo": {},
     *   //   "nonComplianceDetails": [],
     *   //   "ownership": "my_ownership",
     *   //   "policyCompliant": false,
     *   //   "policyName": "my_policyName",
     *   //   "powerManagementEvents": [],
     *   //   "previousDeviceNames": [],
     *   //   "securityPosture": {},
     *   //   "softwareInfo": {},
     *   //   "state": "my_state",
     *   //   "systemProperties": {},
     *   //   "user": {},
     *   //   "userName": "my_userName"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Devices$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Enterprises$Devices$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Device>;
    get(
      params: Params$Resource$Enterprises$Devices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Devices$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Device>,
      callback: BodyResponseCallback<Schema$Device>
    ): void;
    get(
      params: Params$Resource$Enterprises$Devices$Get,
      callback: BodyResponseCallback<Schema$Device>
    ): void;
    get(callback: BodyResponseCallback<Schema$Device>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Get
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Device> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Device>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Device>(parameters);
      }
    }

    /**
     * Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.issueCommand({
     *     // The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     *     name: 'enterprises/my-enterprise/devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "duration": "my_duration",
     *       //   "errorCode": "my_errorCode",
     *       //   "newPassword": "my_newPassword",
     *       //   "resetPasswordFlags": [],
     *       //   "type": "my_type",
     *       //   "userName": "my_userName"
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
    issueCommand(
      params: Params$Resource$Enterprises$Devices$Issuecommand,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    issueCommand(
      params?: Params$Resource$Enterprises$Devices$Issuecommand,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    issueCommand(
      params: Params$Resource$Enterprises$Devices$Issuecommand,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    issueCommand(
      params: Params$Resource$Enterprises$Devices$Issuecommand,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    issueCommand(
      params: Params$Resource$Enterprises$Devices$Issuecommand,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    issueCommand(callback: BodyResponseCallback<Schema$Operation>): void;
    issueCommand(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Issuecommand
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
        {}) as Params$Resource$Enterprises$Devices$Issuecommand;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Issuecommand;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:issueCommand').replace(
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
     * Lists devices for a given enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.list({
     *     // The requested page size. The actual page size may be fixed to a min or max value.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results returned by the server.
     *     pageToken: 'placeholder-value',
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
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
      params: Params$Resource$Enterprises$Devices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Enterprises$Devices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDevicesResponse>;
    list(
      params: Params$Resource$Enterprises$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Devices$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDevicesResponse>,
      callback: BodyResponseCallback<Schema$ListDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Devices$List,
      callback: BodyResponseCallback<Schema$ListDevicesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDevicesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$List
        | BodyResponseCallback<Schema$ListDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDevicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/devices').replace(
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
        createAPIRequest<Schema$ListDevicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDevicesResponse>(parameters);
      }
    }

    /**
     * Updates a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.patch({
     *     // The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     *     name: 'enterprises/my-enterprise/devices/my-device',
     *     // The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiLevel": 0,
     *       //   "applicationReports": [],
     *       //   "appliedPasswordPolicies": [],
     *       //   "appliedPolicyName": "my_appliedPolicyName",
     *       //   "appliedPolicyVersion": "my_appliedPolicyVersion",
     *       //   "appliedState": "my_appliedState",
     *       //   "commonCriteriaModeInfo": {},
     *       //   "deviceSettings": {},
     *       //   "disabledReason": {},
     *       //   "displays": [],
     *       //   "enrollmentTime": "my_enrollmentTime",
     *       //   "enrollmentTokenData": "my_enrollmentTokenData",
     *       //   "enrollmentTokenName": "my_enrollmentTokenName",
     *       //   "hardwareInfo": {},
     *       //   "hardwareStatusSamples": [],
     *       //   "lastPolicyComplianceReportTime": "my_lastPolicyComplianceReportTime",
     *       //   "lastPolicySyncTime": "my_lastPolicySyncTime",
     *       //   "lastStatusReportTime": "my_lastStatusReportTime",
     *       //   "managementMode": "my_managementMode",
     *       //   "memoryEvents": [],
     *       //   "memoryInfo": {},
     *       //   "name": "my_name",
     *       //   "networkInfo": {},
     *       //   "nonComplianceDetails": [],
     *       //   "ownership": "my_ownership",
     *       //   "policyCompliant": false,
     *       //   "policyName": "my_policyName",
     *       //   "powerManagementEvents": [],
     *       //   "previousDeviceNames": [],
     *       //   "securityPosture": {},
     *       //   "softwareInfo": {},
     *       //   "state": "my_state",
     *       //   "systemProperties": {},
     *       //   "user": {},
     *       //   "userName": "my_userName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiLevel": 0,
     *   //   "applicationReports": [],
     *   //   "appliedPasswordPolicies": [],
     *   //   "appliedPolicyName": "my_appliedPolicyName",
     *   //   "appliedPolicyVersion": "my_appliedPolicyVersion",
     *   //   "appliedState": "my_appliedState",
     *   //   "commonCriteriaModeInfo": {},
     *   //   "deviceSettings": {},
     *   //   "disabledReason": {},
     *   //   "displays": [],
     *   //   "enrollmentTime": "my_enrollmentTime",
     *   //   "enrollmentTokenData": "my_enrollmentTokenData",
     *   //   "enrollmentTokenName": "my_enrollmentTokenName",
     *   //   "hardwareInfo": {},
     *   //   "hardwareStatusSamples": [],
     *   //   "lastPolicyComplianceReportTime": "my_lastPolicyComplianceReportTime",
     *   //   "lastPolicySyncTime": "my_lastPolicySyncTime",
     *   //   "lastStatusReportTime": "my_lastStatusReportTime",
     *   //   "managementMode": "my_managementMode",
     *   //   "memoryEvents": [],
     *   //   "memoryInfo": {},
     *   //   "name": "my_name",
     *   //   "networkInfo": {},
     *   //   "nonComplianceDetails": [],
     *   //   "ownership": "my_ownership",
     *   //   "policyCompliant": false,
     *   //   "policyName": "my_policyName",
     *   //   "powerManagementEvents": [],
     *   //   "previousDeviceNames": [],
     *   //   "securityPosture": {},
     *   //   "softwareInfo": {},
     *   //   "state": "my_state",
     *   //   "systemProperties": {},
     *   //   "user": {},
     *   //   "userName": "my_userName"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Devices$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Enterprises$Devices$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Device>;
    patch(
      params: Params$Resource$Enterprises$Devices$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Devices$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Device>,
      callback: BodyResponseCallback<Schema$Device>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Devices$Patch,
      callback: BodyResponseCallback<Schema$Device>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Device>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Patch
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Device> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Devices$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Device>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Device>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Devices$Delete
    extends StandardParameters {
    /**
     * The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     */
    name?: string;
    /**
     * Optional flags that control the device wiping behavior.
     */
    wipeDataFlags?: string[];
    /**
     * Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters.
     */
    wipeReasonMessage?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Get
    extends StandardParameters {
    /**
     * The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Issuecommand
    extends StandardParameters {
    /**
     * The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Command;
  }
  export interface Params$Resource$Enterprises$Devices$List
    extends StandardParameters {
    /**
     * The requested page size. The actual page size may be fixed to a min or max value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Patch
    extends StandardParameters {
    /**
     * The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     */
    name?: string;
    /**
     * The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Device;
  }

  export class Resource$Enterprises$Devices$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'enterprises/my-enterprise/devices/my-device/operations/my-operation',
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
      params: Params$Resource$Enterprises$Devices$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Enterprises$Devices$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Enterprises$Devices$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Enterprises$Devices$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Enterprises$Devices$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Operations$Cancel
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
        {}) as Params$Resource$Enterprises$Devices$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'enterprises/my-enterprise/devices/my-device/operations/my-operation',
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
      params: Params$Resource$Enterprises$Devices$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Enterprises$Devices$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Enterprises$Devices$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Devices$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Devices$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Operations$Delete
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
        {}) as Params$Resource$Enterprises$Devices$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.operations.get({
     *     // The name of the operation resource.
     *     name: 'enterprises/my-enterprise/devices/my-device/operations/my-operation',
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
      params: Params$Resource$Enterprises$Devices$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Enterprises$Devices$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Enterprises$Devices$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Devices$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Enterprises$Devices$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Operations$Get
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
        {}) as Params$Resource$Enterprises$Devices$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/x/operations. To override the binding, API services can add a binding such as "/v1/{name=users/x\}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'enterprises/my-enterprise/devices/my-device/operations',
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
      params: Params$Resource$Enterprises$Devices$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Enterprises$Devices$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Enterprises$Devices$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Devices$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Devices$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Operations$List
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
        {}) as Params$Resource$Enterprises$Devices$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Devices$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Operations$List
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

  export class Resource$Enterprises$Enrollmenttokens {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an enrollment token for a given enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.enrollmentTokens.create({
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "additionalData": "my_additionalData",
     *       //   "allowPersonalUsage": "my_allowPersonalUsage",
     *       //   "duration": "my_duration",
     *       //   "expirationTimestamp": "my_expirationTimestamp",
     *       //   "name": "my_name",
     *       //   "oneTimeOnly": false,
     *       //   "policyName": "my_policyName",
     *       //   "qrCode": "my_qrCode",
     *       //   "user": {},
     *       //   "value": "my_value"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalData": "my_additionalData",
     *   //   "allowPersonalUsage": "my_allowPersonalUsage",
     *   //   "duration": "my_duration",
     *   //   "expirationTimestamp": "my_expirationTimestamp",
     *   //   "name": "my_name",
     *   //   "oneTimeOnly": false,
     *   //   "policyName": "my_policyName",
     *   //   "qrCode": "my_qrCode",
     *   //   "user": {},
     *   //   "value": "my_value"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Enrollmenttokens$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Enterprises$Enrollmenttokens$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EnrollmentToken>;
    create(
      params: Params$Resource$Enterprises$Enrollmenttokens$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Enterprises$Enrollmenttokens$Create,
      options: MethodOptions | BodyResponseCallback<Schema$EnrollmentToken>,
      callback: BodyResponseCallback<Schema$EnrollmentToken>
    ): void;
    create(
      params: Params$Resource$Enterprises$Enrollmenttokens$Create,
      callback: BodyResponseCallback<Schema$EnrollmentToken>
    ): void;
    create(callback: BodyResponseCallback<Schema$EnrollmentToken>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Enrollmenttokens$Create
        | BodyResponseCallback<Schema$EnrollmentToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EnrollmentToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EnrollmentToken>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EnrollmentToken> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Enrollmenttokens$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Enrollmenttokens$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/enrollmentTokens').replace(
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
        createAPIRequest<Schema$EnrollmentToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EnrollmentToken>(parameters);
      }
    }

    /**
     * Deletes an enrollment token. This operation invalidates the token, preventing its future use.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.enrollmentTokens.delete({
     *     // The name of the enrollment token in the form enterprises/{enterpriseId\}/enrollmentTokens/{enrollmentTokenId\}.
     *     name: 'enterprises/my-enterprise/enrollmentTokens/my-enrollmentToken',
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
      params: Params$Resource$Enterprises$Enrollmenttokens$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Enterprises$Enrollmenttokens$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Enterprises$Enrollmenttokens$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Enrollmenttokens$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Enrollmenttokens$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Enrollmenttokens$Delete
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
        {}) as Params$Resource$Enterprises$Enrollmenttokens$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Enrollmenttokens$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
  }

  export interface Params$Resource$Enterprises$Enrollmenttokens$Create
    extends StandardParameters {
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnrollmentToken;
  }
  export interface Params$Resource$Enterprises$Enrollmenttokens$Delete
    extends StandardParameters {
    /**
     * The name of the enrollment token in the form enterprises/{enterpriseId\}/enrollmentTokens/{enrollmentTokenId\}.
     */
    name?: string;
  }

  export class Resource$Enterprises$Policies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a policy. This operation is only permitted if no devices are currently referencing the policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.policies.delete({
     *     // The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     *     name: 'enterprises/my-enterprise/policies/my-policie',
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
      params: Params$Resource$Enterprises$Policies$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Enterprises$Policies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Enterprises$Policies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Policies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Policies$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Policies$Delete
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
        {}) as Params$Resource$Enterprises$Policies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Policies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * Gets a policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.policies.get({
     *     // The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     *     name: 'enterprises/my-enterprise/policies/my-policie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountTypesWithManagementDisabled": [],
     *   //   "addUserDisabled": false,
     *   //   "adjustVolumeDisabled": false,
     *   //   "advancedSecurityOverrides": {},
     *   //   "alwaysOnVpnPackage": {},
     *   //   "androidDevicePolicyTracks": [],
     *   //   "appAutoUpdatePolicy": "my_appAutoUpdatePolicy",
     *   //   "applications": [],
     *   //   "autoDateAndTimeZone": "my_autoDateAndTimeZone",
     *   //   "autoTimeRequired": false,
     *   //   "blockApplicationsEnabled": false,
     *   //   "bluetoothConfigDisabled": false,
     *   //   "bluetoothContactSharingDisabled": false,
     *   //   "bluetoothDisabled": false,
     *   //   "cameraDisabled": false,
     *   //   "cellBroadcastsConfigDisabled": false,
     *   //   "choosePrivateKeyRules": [],
     *   //   "complianceRules": [],
     *   //   "createWindowsDisabled": false,
     *   //   "credentialsConfigDisabled": false,
     *   //   "dataRoamingDisabled": false,
     *   //   "debuggingFeaturesAllowed": false,
     *   //   "defaultPermissionPolicy": "my_defaultPermissionPolicy",
     *   //   "deviceOwnerLockScreenInfo": {},
     *   //   "encryptionPolicy": "my_encryptionPolicy",
     *   //   "ensureVerifyAppsEnabled": false,
     *   //   "factoryResetDisabled": false,
     *   //   "frpAdminEmails": [],
     *   //   "funDisabled": false,
     *   //   "installAppsDisabled": false,
     *   //   "installUnknownSourcesAllowed": false,
     *   //   "keyguardDisabled": false,
     *   //   "keyguardDisabledFeatures": [],
     *   //   "kioskCustomLauncherEnabled": false,
     *   //   "kioskCustomization": {},
     *   //   "locationMode": "my_locationMode",
     *   //   "longSupportMessage": {},
     *   //   "maximumTimeToLock": "my_maximumTimeToLock",
     *   //   "minimumApiLevel": 0,
     *   //   "mobileNetworksConfigDisabled": false,
     *   //   "modifyAccountsDisabled": false,
     *   //   "mountPhysicalMediaDisabled": false,
     *   //   "name": "my_name",
     *   //   "networkEscapeHatchEnabled": false,
     *   //   "networkResetDisabled": false,
     *   //   "oncCertificateProviders": [],
     *   //   "openNetworkConfiguration": {},
     *   //   "outgoingBeamDisabled": false,
     *   //   "outgoingCallsDisabled": false,
     *   //   "passwordPolicies": [],
     *   //   "passwordRequirements": {},
     *   //   "permissionGrants": [],
     *   //   "permittedAccessibilityServices": {},
     *   //   "permittedInputMethods": {},
     *   //   "persistentPreferredActivities": [],
     *   //   "personalUsagePolicies": {},
     *   //   "playStoreMode": "my_playStoreMode",
     *   //   "policyEnforcementRules": [],
     *   //   "privateKeySelectionEnabled": false,
     *   //   "recommendedGlobalProxy": {},
     *   //   "removeUserDisabled": false,
     *   //   "safeBootDisabled": false,
     *   //   "screenCaptureDisabled": false,
     *   //   "setUserIconDisabled": false,
     *   //   "setWallpaperDisabled": false,
     *   //   "setupActions": [],
     *   //   "shareLocationDisabled": false,
     *   //   "shortSupportMessage": {},
     *   //   "skipFirstUseHintsEnabled": false,
     *   //   "smsDisabled": false,
     *   //   "statusBarDisabled": false,
     *   //   "statusReportingSettings": {},
     *   //   "stayOnPluggedModes": [],
     *   //   "systemUpdate": {},
     *   //   "tetheringConfigDisabled": false,
     *   //   "uninstallAppsDisabled": false,
     *   //   "unmuteMicrophoneDisabled": false,
     *   //   "usbFileTransferDisabled": false,
     *   //   "usbMassStorageEnabled": false,
     *   //   "version": "my_version",
     *   //   "vpnConfigDisabled": false,
     *   //   "wifiConfigDisabled": false,
     *   //   "wifiConfigsLockdownEnabled": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Policies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Enterprises$Policies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    get(
      params: Params$Resource$Enterprises$Policies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Policies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    get(
      params: Params$Resource$Enterprises$Policies$Get,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    get(callback: BodyResponseCallback<Schema$Policy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Policies$Get
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
        {}) as Params$Resource$Enterprises$Policies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Policies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists policies for a given enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.policies.list({
     *     // The requested page size. The actual page size may be fixed to a min or max value.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results returned by the server.
     *     pageToken: 'placeholder-value',
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "policies": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Policies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Enterprises$Policies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPoliciesResponse>;
    list(
      params: Params$Resource$Enterprises$Policies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Policies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Policies$List,
      callback: BodyResponseCallback<Schema$ListPoliciesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPoliciesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Policies$List
        | BodyResponseCallback<Schema$ListPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPoliciesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Policies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Policies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/policies').replace(
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
        createAPIRequest<Schema$ListPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPoliciesResponse>(parameters);
      }
    }

    /**
     * Updates or creates a policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.policies.patch({
     *     // The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     *     name: 'enterprises/my-enterprise/policies/my-policie',
     *     // The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountTypesWithManagementDisabled": [],
     *       //   "addUserDisabled": false,
     *       //   "adjustVolumeDisabled": false,
     *       //   "advancedSecurityOverrides": {},
     *       //   "alwaysOnVpnPackage": {},
     *       //   "androidDevicePolicyTracks": [],
     *       //   "appAutoUpdatePolicy": "my_appAutoUpdatePolicy",
     *       //   "applications": [],
     *       //   "autoDateAndTimeZone": "my_autoDateAndTimeZone",
     *       //   "autoTimeRequired": false,
     *       //   "blockApplicationsEnabled": false,
     *       //   "bluetoothConfigDisabled": false,
     *       //   "bluetoothContactSharingDisabled": false,
     *       //   "bluetoothDisabled": false,
     *       //   "cameraDisabled": false,
     *       //   "cellBroadcastsConfigDisabled": false,
     *       //   "choosePrivateKeyRules": [],
     *       //   "complianceRules": [],
     *       //   "createWindowsDisabled": false,
     *       //   "credentialsConfigDisabled": false,
     *       //   "dataRoamingDisabled": false,
     *       //   "debuggingFeaturesAllowed": false,
     *       //   "defaultPermissionPolicy": "my_defaultPermissionPolicy",
     *       //   "deviceOwnerLockScreenInfo": {},
     *       //   "encryptionPolicy": "my_encryptionPolicy",
     *       //   "ensureVerifyAppsEnabled": false,
     *       //   "factoryResetDisabled": false,
     *       //   "frpAdminEmails": [],
     *       //   "funDisabled": false,
     *       //   "installAppsDisabled": false,
     *       //   "installUnknownSourcesAllowed": false,
     *       //   "keyguardDisabled": false,
     *       //   "keyguardDisabledFeatures": [],
     *       //   "kioskCustomLauncherEnabled": false,
     *       //   "kioskCustomization": {},
     *       //   "locationMode": "my_locationMode",
     *       //   "longSupportMessage": {},
     *       //   "maximumTimeToLock": "my_maximumTimeToLock",
     *       //   "minimumApiLevel": 0,
     *       //   "mobileNetworksConfigDisabled": false,
     *       //   "modifyAccountsDisabled": false,
     *       //   "mountPhysicalMediaDisabled": false,
     *       //   "name": "my_name",
     *       //   "networkEscapeHatchEnabled": false,
     *       //   "networkResetDisabled": false,
     *       //   "oncCertificateProviders": [],
     *       //   "openNetworkConfiguration": {},
     *       //   "outgoingBeamDisabled": false,
     *       //   "outgoingCallsDisabled": false,
     *       //   "passwordPolicies": [],
     *       //   "passwordRequirements": {},
     *       //   "permissionGrants": [],
     *       //   "permittedAccessibilityServices": {},
     *       //   "permittedInputMethods": {},
     *       //   "persistentPreferredActivities": [],
     *       //   "personalUsagePolicies": {},
     *       //   "playStoreMode": "my_playStoreMode",
     *       //   "policyEnforcementRules": [],
     *       //   "privateKeySelectionEnabled": false,
     *       //   "recommendedGlobalProxy": {},
     *       //   "removeUserDisabled": false,
     *       //   "safeBootDisabled": false,
     *       //   "screenCaptureDisabled": false,
     *       //   "setUserIconDisabled": false,
     *       //   "setWallpaperDisabled": false,
     *       //   "setupActions": [],
     *       //   "shareLocationDisabled": false,
     *       //   "shortSupportMessage": {},
     *       //   "skipFirstUseHintsEnabled": false,
     *       //   "smsDisabled": false,
     *       //   "statusBarDisabled": false,
     *       //   "statusReportingSettings": {},
     *       //   "stayOnPluggedModes": [],
     *       //   "systemUpdate": {},
     *       //   "tetheringConfigDisabled": false,
     *       //   "uninstallAppsDisabled": false,
     *       //   "unmuteMicrophoneDisabled": false,
     *       //   "usbFileTransferDisabled": false,
     *       //   "usbMassStorageEnabled": false,
     *       //   "version": "my_version",
     *       //   "vpnConfigDisabled": false,
     *       //   "wifiConfigDisabled": false,
     *       //   "wifiConfigsLockdownEnabled": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountTypesWithManagementDisabled": [],
     *   //   "addUserDisabled": false,
     *   //   "adjustVolumeDisabled": false,
     *   //   "advancedSecurityOverrides": {},
     *   //   "alwaysOnVpnPackage": {},
     *   //   "androidDevicePolicyTracks": [],
     *   //   "appAutoUpdatePolicy": "my_appAutoUpdatePolicy",
     *   //   "applications": [],
     *   //   "autoDateAndTimeZone": "my_autoDateAndTimeZone",
     *   //   "autoTimeRequired": false,
     *   //   "blockApplicationsEnabled": false,
     *   //   "bluetoothConfigDisabled": false,
     *   //   "bluetoothContactSharingDisabled": false,
     *   //   "bluetoothDisabled": false,
     *   //   "cameraDisabled": false,
     *   //   "cellBroadcastsConfigDisabled": false,
     *   //   "choosePrivateKeyRules": [],
     *   //   "complianceRules": [],
     *   //   "createWindowsDisabled": false,
     *   //   "credentialsConfigDisabled": false,
     *   //   "dataRoamingDisabled": false,
     *   //   "debuggingFeaturesAllowed": false,
     *   //   "defaultPermissionPolicy": "my_defaultPermissionPolicy",
     *   //   "deviceOwnerLockScreenInfo": {},
     *   //   "encryptionPolicy": "my_encryptionPolicy",
     *   //   "ensureVerifyAppsEnabled": false,
     *   //   "factoryResetDisabled": false,
     *   //   "frpAdminEmails": [],
     *   //   "funDisabled": false,
     *   //   "installAppsDisabled": false,
     *   //   "installUnknownSourcesAllowed": false,
     *   //   "keyguardDisabled": false,
     *   //   "keyguardDisabledFeatures": [],
     *   //   "kioskCustomLauncherEnabled": false,
     *   //   "kioskCustomization": {},
     *   //   "locationMode": "my_locationMode",
     *   //   "longSupportMessage": {},
     *   //   "maximumTimeToLock": "my_maximumTimeToLock",
     *   //   "minimumApiLevel": 0,
     *   //   "mobileNetworksConfigDisabled": false,
     *   //   "modifyAccountsDisabled": false,
     *   //   "mountPhysicalMediaDisabled": false,
     *   //   "name": "my_name",
     *   //   "networkEscapeHatchEnabled": false,
     *   //   "networkResetDisabled": false,
     *   //   "oncCertificateProviders": [],
     *   //   "openNetworkConfiguration": {},
     *   //   "outgoingBeamDisabled": false,
     *   //   "outgoingCallsDisabled": false,
     *   //   "passwordPolicies": [],
     *   //   "passwordRequirements": {},
     *   //   "permissionGrants": [],
     *   //   "permittedAccessibilityServices": {},
     *   //   "permittedInputMethods": {},
     *   //   "persistentPreferredActivities": [],
     *   //   "personalUsagePolicies": {},
     *   //   "playStoreMode": "my_playStoreMode",
     *   //   "policyEnforcementRules": [],
     *   //   "privateKeySelectionEnabled": false,
     *   //   "recommendedGlobalProxy": {},
     *   //   "removeUserDisabled": false,
     *   //   "safeBootDisabled": false,
     *   //   "screenCaptureDisabled": false,
     *   //   "setUserIconDisabled": false,
     *   //   "setWallpaperDisabled": false,
     *   //   "setupActions": [],
     *   //   "shareLocationDisabled": false,
     *   //   "shortSupportMessage": {},
     *   //   "skipFirstUseHintsEnabled": false,
     *   //   "smsDisabled": false,
     *   //   "statusBarDisabled": false,
     *   //   "statusReportingSettings": {},
     *   //   "stayOnPluggedModes": [],
     *   //   "systemUpdate": {},
     *   //   "tetheringConfigDisabled": false,
     *   //   "uninstallAppsDisabled": false,
     *   //   "unmuteMicrophoneDisabled": false,
     *   //   "usbFileTransferDisabled": false,
     *   //   "usbMassStorageEnabled": false,
     *   //   "version": "my_version",
     *   //   "vpnConfigDisabled": false,
     *   //   "wifiConfigDisabled": false,
     *   //   "wifiConfigsLockdownEnabled": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Policies$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Enterprises$Policies$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    patch(
      params: Params$Resource$Enterprises$Policies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Policies$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Policies$Patch,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Policy>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Policies$Patch
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
        {}) as Params$Resource$Enterprises$Policies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Policies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Policies$Delete
    extends StandardParameters {
    /**
     * The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Policies$Get
    extends StandardParameters {
    /**
     * The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Policies$List
    extends StandardParameters {
    /**
     * The requested page size. The actual page size may be fixed to a min or max value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Enterprises$Policies$Patch
    extends StandardParameters {
    /**
     * The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     */
    name?: string;
    /**
     * The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }

  export class Resource$Enterprises$Webapps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a web app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.webApps.create({
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayMode": "my_displayMode",
     *       //   "icons": [],
     *       //   "name": "my_name",
     *       //   "startUrl": "my_startUrl",
     *       //   "title": "my_title",
     *       //   "versionCode": "my_versionCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayMode": "my_displayMode",
     *   //   "icons": [],
     *   //   "name": "my_name",
     *   //   "startUrl": "my_startUrl",
     *   //   "title": "my_title",
     *   //   "versionCode": "my_versionCode"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Webapps$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Enterprises$Webapps$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebApp>;
    create(
      params: Params$Resource$Enterprises$Webapps$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Enterprises$Webapps$Create,
      options: MethodOptions | BodyResponseCallback<Schema$WebApp>,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    create(
      params: Params$Resource$Enterprises$Webapps$Create,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    create(callback: BodyResponseCallback<Schema$WebApp>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Webapps$Create
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WebApp> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Webapps$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webapps$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/webApps').replace(
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
        createAPIRequest<Schema$WebApp>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebApp>(parameters);
      }
    }

    /**
     * Deletes a web app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.webApps.delete({
     *     // The name of the web app in the form enterprises/{enterpriseId\}/webApps/{packageName\}.
     *     name: 'enterprises/my-enterprise/webApps/my-webApp',
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
      params: Params$Resource$Enterprises$Webapps$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Enterprises$Webapps$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Enterprises$Webapps$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Webapps$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Webapps$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Webapps$Delete
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
        {}) as Params$Resource$Enterprises$Webapps$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webapps$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * Gets a web app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.webApps.get({
     *     // The name of the web app in the form enterprises/{enterpriseId\}/webApp/{packageName\}.
     *     name: 'enterprises/my-enterprise/webApps/my-webApp',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayMode": "my_displayMode",
     *   //   "icons": [],
     *   //   "name": "my_name",
     *   //   "startUrl": "my_startUrl",
     *   //   "title": "my_title",
     *   //   "versionCode": "my_versionCode"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Webapps$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Enterprises$Webapps$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebApp>;
    get(
      params: Params$Resource$Enterprises$Webapps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Webapps$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WebApp>,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    get(
      params: Params$Resource$Enterprises$Webapps$Get,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    get(callback: BodyResponseCallback<Schema$WebApp>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Webapps$Get
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WebApp> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Webapps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webapps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$WebApp>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebApp>(parameters);
      }
    }

    /**
     * Lists web apps for a given enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.webApps.list({
     *     // The requested page size. The actual page size may be fixed to a min or max value.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results returned by the server.
     *     pageToken: 'placeholder-value',
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "webApps": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Webapps$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Enterprises$Webapps$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListWebAppsResponse>;
    list(
      params: Params$Resource$Enterprises$Webapps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Webapps$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListWebAppsResponse>,
      callback: BodyResponseCallback<Schema$ListWebAppsResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Webapps$List,
      callback: BodyResponseCallback<Schema$ListWebAppsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListWebAppsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Webapps$List
        | BodyResponseCallback<Schema$ListWebAppsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWebAppsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWebAppsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListWebAppsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Webapps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webapps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/webApps').replace(
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
        createAPIRequest<Schema$ListWebAppsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWebAppsResponse>(parameters);
      }
    }

    /**
     * Updates a web app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.webApps.patch({
     *     // The name of the web app in the form enterprises/{enterpriseId\}/webApps/{packageName\}.
     *     name: 'enterprises/my-enterprise/webApps/my-webApp',
     *     // The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayMode": "my_displayMode",
     *       //   "icons": [],
     *       //   "name": "my_name",
     *       //   "startUrl": "my_startUrl",
     *       //   "title": "my_title",
     *       //   "versionCode": "my_versionCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayMode": "my_displayMode",
     *   //   "icons": [],
     *   //   "name": "my_name",
     *   //   "startUrl": "my_startUrl",
     *   //   "title": "my_title",
     *   //   "versionCode": "my_versionCode"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Webapps$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Enterprises$Webapps$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebApp>;
    patch(
      params: Params$Resource$Enterprises$Webapps$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Webapps$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$WebApp>,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Webapps$Patch,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    patch(callback: BodyResponseCallback<Schema$WebApp>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Webapps$Patch
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WebApp> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Webapps$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webapps$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$WebApp>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebApp>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Webapps$Create
    extends StandardParameters {
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WebApp;
  }
  export interface Params$Resource$Enterprises$Webapps$Delete
    extends StandardParameters {
    /**
     * The name of the web app in the form enterprises/{enterpriseId\}/webApps/{packageName\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Webapps$Get
    extends StandardParameters {
    /**
     * The name of the web app in the form enterprises/{enterpriseId\}/webApp/{packageName\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Webapps$List
    extends StandardParameters {
    /**
     * The requested page size. The actual page size may be fixed to a min or max value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Enterprises$Webapps$Patch
    extends StandardParameters {
    /**
     * The name of the web app in the form enterprises/{enterpriseId\}/webApps/{packageName\}.
     */
    name?: string;
    /**
     * The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WebApp;
  }

  export class Resource$Enterprises$Webtokens {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.webTokens.create({
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "enabledFeatures": [],
     *       //   "name": "my_name",
     *       //   "parentFrameUrl": "my_parentFrameUrl",
     *       //   "permissions": [],
     *       //   "value": "my_value"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enabledFeatures": [],
     *   //   "name": "my_name",
     *   //   "parentFrameUrl": "my_parentFrameUrl",
     *   //   "permissions": [],
     *   //   "value": "my_value"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Enterprises$Webtokens$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Enterprises$Webtokens$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebToken>;
    create(
      params: Params$Resource$Enterprises$Webtokens$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Enterprises$Webtokens$Create,
      options: MethodOptions | BodyResponseCallback<Schema$WebToken>,
      callback: BodyResponseCallback<Schema$WebToken>
    ): void;
    create(
      params: Params$Resource$Enterprises$Webtokens$Create,
      callback: BodyResponseCallback<Schema$WebToken>
    ): void;
    create(callback: BodyResponseCallback<Schema$WebToken>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Webtokens$Create
        | BodyResponseCallback<Schema$WebToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebToken>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WebToken> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Webtokens$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webtokens$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/webTokens').replace(
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
        createAPIRequest<Schema$WebToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebToken>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Webtokens$Create
    extends StandardParameters {
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WebToken;
  }

  export class Resource$Signupurls {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an enterprise signup URL.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.signupUrls.create({
     *     // The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.
     *     callbackUrl: 'placeholder-value',
     *     // The ID of the Google Cloud Platform project which will own the enterprise.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "url": "my_url"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Signupurls$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Signupurls$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SignupUrl>;
    create(
      params: Params$Resource$Signupurls$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Signupurls$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SignupUrl>,
      callback: BodyResponseCallback<Schema$SignupUrl>
    ): void;
    create(
      params: Params$Resource$Signupurls$Create,
      callback: BodyResponseCallback<Schema$SignupUrl>
    ): void;
    create(callback: BodyResponseCallback<Schema$SignupUrl>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Signupurls$Create
        | BodyResponseCallback<Schema$SignupUrl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SignupUrl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SignupUrl>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SignupUrl> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Signupurls$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Signupurls$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/signupUrls').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SignupUrl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SignupUrl>(parameters);
      }
    }
  }

  export interface Params$Resource$Signupurls$Create
    extends StandardParameters {
    /**
     * The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.
     */
    callbackUrl?: string;
    /**
     * The ID of the Google Cloud Platform project which will own the enterprise.
     */
    projectId?: string;
  }
}
