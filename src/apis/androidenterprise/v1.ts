/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Google Play EMM API
 *
 * Manages the deployment of apps to Android for Work users.
 *
 * @example
 * const google = require('googleapis');
 * const androidenterprise = google.androidenterprise('v1');
 *
 * @namespace androidenterprise
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Androidenterprise
 */
export class Androidenterprise {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  devices: Resource$Devices;
  enterprises: Resource$Enterprises;
  entitlements: Resource$Entitlements;
  grouplicenses: Resource$Grouplicenses;
  grouplicenseusers: Resource$Grouplicenseusers;
  installs: Resource$Installs;
  managedconfigurationsfordevice: Resource$Managedconfigurationsfordevice;
  managedconfigurationsforuser: Resource$Managedconfigurationsforuser;
  managedconfigurationssettings: Resource$Managedconfigurationssettings;
  permissions: Resource$Permissions;
  products: Resource$Products;
  serviceaccountkeys: Resource$Serviceaccountkeys;
  storelayoutclusters: Resource$Storelayoutclusters;
  storelayoutpages: Resource$Storelayoutpages;
  users: Resource$Users;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.devices = new Resource$Devices(this);
    this.enterprises = new Resource$Enterprises(this);
    this.entitlements = new Resource$Entitlements(this);
    this.grouplicenses = new Resource$Grouplicenses(this);
    this.grouplicenseusers = new Resource$Grouplicenseusers(this);
    this.installs = new Resource$Installs(this);
    this.managedconfigurationsfordevice =
        new Resource$Managedconfigurationsfordevice(this);
    this.managedconfigurationsforuser =
        new Resource$Managedconfigurationsforuser(this);
    this.managedconfigurationssettings =
        new Resource$Managedconfigurationssettings(this);
    this.permissions = new Resource$Permissions(this);
    this.products = new Resource$Products(this);
    this.serviceaccountkeys = new Resource$Serviceaccountkeys(this);
    this.storelayoutclusters = new Resource$Storelayoutclusters(this);
    this.storelayoutpages = new Resource$Storelayoutpages(this);
    this.users = new Resource$Users(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * This represents an enterprise admin who can manage the enterprise in the
 * managed Google Play store.
 */
export interface Schema$Administrator {
  /**
   * The admin&#39;s email address.
   */
  email: string;
}
/**
 * A token authorizing an admin to access an iframe.
 */
export interface Schema$AdministratorWebToken {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#administratorWebToken&quot;.
   */
  kind: string;
  /**
   * An opaque token to be passed to the Play front-end to generate an iframe.
   */
  token: string;
}
/**
 * Specification for a token used to generate iframes. The token specifies what
 * data the admin is allowed to modify and the URI the iframe is allowed to
 * communiate with.
 */
export interface Schema$AdministratorWebTokenSpec {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#administratorWebTokenSpec&quot;.
   */
  kind: string;
  /**
   * The URI of the parent frame hosting the iframe. To prevent XSS, the iframe
   * may not be hosted at other URIs. This URI must be https.
   */
  parent: string;
  /**
   * The list of permissions the admin is granted within the iframe. The admin
   * will only be allowed to view an iframe if they have all of the permissions
   * associated with it. The only valid value is &quot;approveApps&quot; that
   * will allow the admin to access the iframe in &quot;approve&quot; mode.
   */
  permission: string[];
}
/**
 * The Android Device Policy configuration of an enterprise.
 */
export interface Schema$AndroidDevicePolicyConfig {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#androidDevicePolicyConfig&quot;.
   */
  kind: string;
  /**
   * The state of Android Device Policy. &quot;enabled&quot; indicates that
   * Android Device Policy is enabled for the enterprise and the EMM is allowed
   * to manage devices with Android Device Policy, while &quot;disabled&quot;
   * means that it cannot.
   */
  state: string;
}
/**
 * Represents the list of app restrictions available to be pre-configured for
 * the product.
 */
export interface Schema$AppRestrictionsSchema {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#appRestrictionsSchema&quot;.
   */
  kind: string;
  /**
   * The set of restrictions that make up this schema.
   */
  restrictions: Schema$AppRestrictionsSchemaRestriction[];
}
/**
 * An event generated when a new app version is uploaded to Google Play and its
 * app restrictions schema changed. To fetch the app restrictions schema for an
 * app, use Products.getAppRestrictionsSchema on the EMM API.
 */
export interface Schema$AppRestrictionsSchemaChangeEvent {
  /**
   * The id of the product (e.g. &quot;app:com.google.android.gm&quot;) for
   * which the app restriction schema changed. This field will always be
   * present.
   */
  productId: string;
}
/**
 * A restriction in the App Restriction Schema represents a piece of
 * configuration that may be pre-applied.
 */
export interface Schema$AppRestrictionsSchemaRestriction {
  /**
   * The default value of the restriction. bundle and bundleArray restrictions
   * never have a default value.
   */
  defaultValue: Schema$AppRestrictionsSchemaRestrictionRestrictionValue;
  /**
   * A longer description of the restriction, giving more detail of what it
   * affects.
   */
  description: string;
  /**
   * For choice or multiselect restrictions, the list of possible entries&#39;
   * human-readable names.
   */
  entry: string[];
  /**
   * For choice or multiselect restrictions, the list of possible entries&#39;
   * machine-readable values. These values should be used in the configuration,
   * either as a single string value for a choice restriction or in a
   * stringArray for a multiselect restriction.
   */
  entryValue: string[];
  /**
   * The unique key that the product uses to identify the restriction, e.g.
   * &quot;com.google.android.gm.fieldname&quot;.
   */
  key: string;
  /**
   * For bundle or bundleArray restrictions, the list of nested restrictions. A
   * bundle restriction is always nested within a bundleArray restriction, and a
   * bundleArray restriction is at most two levels deep.
   */
  nestedRestriction: Schema$AppRestrictionsSchemaRestriction[];
  /**
   * The type of the restriction.
   */
  restrictionType: string;
  /**
   * The name of the restriction.
   */
  title: string;
}
/**
 * A typed value for the restriction.
 */
export interface Schema$AppRestrictionsSchemaRestrictionRestrictionValue {
  /**
   * The type of the value being provided.
   */
  type: string;
  /**
   * The boolean value - this will only be present if type is bool.
   */
  valueBool: boolean;
  /**
   * The integer value - this will only be present if type is integer.
   */
  valueInteger: number;
  /**
   * The list of string values - this will only be present if type is
   * multiselect.
   */
  valueMultiselect: string[];
  /**
   * The string value - this will be present for types string, choice and
   * hidden.
   */
  valueString: string;
}
/**
 * Information on an approval URL.
 */
export interface Schema$ApprovalUrlInfo {
  /**
   * A URL that displays a product&#39;s permissions and that can also be used
   * to approve the product with the Products.approve call.
   */
  approvalUrl: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#approvalUrlInfo&quot;.
   */
  kind: string;
}
/**
 * An event generated when a new version of an app is uploaded to Google Play.
 * Notifications are sent for new public versions only: alpha, beta, or canary
 * versions do not generate this event. To fetch up-to-date version history for
 * an app, use Products.Get on the EMM API.
 */
export interface Schema$AppUpdateEvent {
  /**
   * The id of the product (e.g. &quot;app:com.google.android.gm&quot;) that was
   * updated. This field will always be present.
   */
  productId: string;
}
/**
 * This represents a single version of the app.
 */
export interface Schema$AppVersion {
  /**
   * The track that this app was published in. For example if track is
   * &quot;alpha&quot;, this is an alpha version of the app.
   */
  track: string;
  /**
   * Unique increasing identifier for the app version.
   */
  versionCode: number;
  /**
   * The string used in the Play store by the app developer to identify the
   * version. The string is not necessarily unique or localized (for example,
   * the string could be &quot;1.4&quot;).
   */
  versionString: string;
}
/**
 * An AuthenticationToken is used by the EMM&#39;s device policy client on a
 * device to provision the given EMM-managed user on that device.
 */
export interface Schema$AuthenticationToken {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#authenticationToken&quot;.
   */
  kind: string;
  /**
   * The authentication token to be passed to the device policy client on the
   * device where it can be used to provision the account for which this token
   * was generated.
   */
  token: string;
}
/**
 * A configuration variables resource contains the managed configuration
 * settings ID to be applied to a single user, as well as the variable set that
 * is attributed to the user. The variable set will be used to replace
 * placeholders in the managed configuration settings.
 */
export interface Schema$ConfigurationVariables {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#configurationVariables&quot;.
   */
  kind: string;
  /**
   * The ID of the managed configurations settings.
   */
  mcmId: string;
  /**
   * The variable set that is attributed to the user.
   */
  variableSet: Schema$VariableSet[];
}
/**
 * A Devices resource represents a mobile device managed by the EMM and
 * belonging to a specific enterprise user.
 */
export interface Schema$Device {
  /**
   * The Google Play Services Android ID for the device encoded as a lowercase
   * hex string. For example, &quot;123456789abcdef0&quot;.
   */
  androidId: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#device&quot;.
   */
  kind: string;
  /**
   * Identifies the extent to which the device is controlled by a managed Google
   * Play EMM in various deployment configurations.  Possible values include:  -
   * &quot;managedDevice&quot;, a device that has the EMM&#39;s device policy
   * controller (DPC) as the device owner.  - &quot;managedProfile&quot;, a
   * device that has a profile managed by the DPC (DPC is profile owner) in
   * addition to a separate, personal profile that is unavailable to the DPC.  -
   * &quot;containerApp&quot;, no longer used (deprecated).  -
   * &quot;unmanagedProfile&quot;, a device that has been allowed (by the
   * domain&#39;s admin, using the Admin Console to enable the privilege) to use
   * managed Google Play, but the profile is itself not owned by a DPC.
   */
  managementType: string;
  /**
   * The policy enforced on the device.
   */
  policy: Schema$Policy;
}
/**
 * The device resources for the user.
 */
export interface Schema$DevicesListResponse {
  /**
   * A managed device.
   */
  device: Schema$Device[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#devicesListResponse&quot;.
   */
  kind: string;
}
/**
 * The state of a user&#39;s device, as accessed by the getState and setState
 * methods on device resources.
 */
export interface Schema$DeviceState {
  /**
   * The state of the Google account on the device. &quot;enabled&quot;
   * indicates that the Google account on the device can be used to access
   * Google services (including Google Play), while &quot;disabled&quot; means
   * that it cannot. A new device is initially in the &quot;disabled&quot;
   * state.
   */
  accountState: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#deviceState&quot;.
   */
  kind: string;
}
/**
 * An Enterprises resource represents the binding between an EMM and a specific
 * organization. That binding can be instantiated in one of two different ways
 * using this API as follows:  - For Google managed domain customers, the
 * process involves using Enterprises.enroll and Enterprises.setAccount (in
 * conjunction with artifacts obtained from the Admin console and the Google API
 * Console) and submitted to the EMM through a more-or-less manual process.  -
 * For managed Google Play Accounts customers, the process involves using
 * Enterprises.generateSignupUrl and Enterprises.completeSignup in conjunction
 * with the managed Google Play sign-up UI (Google-provided mechanism) to create
 * the binding without manual steps. As an EMM, you can support either or both
 * approaches in your EMM console. See Create an Enterprise for details.
 */
export interface Schema$Enterprise {
  /**
   * Admins of the enterprise. This is only supported for enterprises created
   * via the EMM-initiated flow.
   */
  administrator: Schema$Administrator[];
  /**
   * The unique ID for the enterprise.
   */
  id: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#enterprise&quot;.
   */
  kind: string;
  /**
   * The name of the enterprise, for example, &quot;Example, Inc&quot;.
   */
  name: string;
  /**
   * The enterprise&#39;s primary domain, such as &quot;example.com&quot;.
   */
  primaryDomain: string;
}
/**
 * A service account that can be used to authenticate as the enterprise to API
 * calls that require such authentication.
 */
export interface Schema$EnterpriseAccount {
  /**
   * The email address of the service account.
   */
  accountEmail: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#enterpriseAccount&quot;.
   */
  kind: string;
}
/**
 * The matching enterprise resources.
 */
export interface Schema$EnterprisesListResponse {
  /**
   * An enterprise.
   */
  enterprise: Schema$Enterprise[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#enterprisesListResponse&quot;.
   */
  kind: string;
}
export interface Schema$EnterprisesSendTestPushNotificationResponse {
  /**
   * The message ID of the test push notification that was sent.
   */
  messageId: string;
  /**
   * The name of the Cloud Pub/Sub topic to which notifications for this
   * enterprise&#39;s enrolled account will be sent.
   */
  topicName: string;
}
/**
 * The presence of an Entitlements resource indicates that a user has the right
 * to use a particular app. Entitlements are user specific, not device specific.
 * This allows a user with an entitlement to an app to install the app on all
 * their devices. It&#39;s also possible for a user to hold an entitlement to an
 * app without installing the app on any device.  The API can be used to create
 * an entitlement. As an option, you can also use the API to trigger the
 * installation of an app on all a user&#39;s managed devices at the same time
 * the entitlement is created.  If the app is free, creating the entitlement
 * also creates a group license for that app. For paid apps, creating the
 * entitlement consumes one license, and that license remains consumed until the
 * entitlement is removed. If the enterprise hasn&#39;t purchased enough
 * licenses, then no entitlement is created and the installation fails. An
 * entitlement is also not created for an app if the app requires permissions
 * that the enterprise hasn&#39;t accepted.  If an entitlement is deleted, the
 * app may be uninstalled from a user&#39;s device. As a best practice,
 * uninstall the app by calling  Installs.delete() before deleting the
 * entitlement.  Entitlements for apps that a user pays for on an unmanaged
 * profile have &quot;userPurchase&quot; as the entitlement reason. These
 * entitlements cannot be removed via the API.
 */
export interface Schema$Entitlement {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#entitlement&quot;.
   */
  kind: string;
  /**
   * The ID of the product that the entitlement is for. For example,
   * &quot;app:com.google.android.gm&quot;.
   */
  productId: string;
  /**
   * The reason for the entitlement. For example, &quot;free&quot; for free
   * apps. This property is temporary: it will be replaced by the acquisition
   * kind field of group licenses.
   */
  reason: string;
}
/**
 * The entitlement resources for the user.
 */
export interface Schema$EntitlementsListResponse {
  /**
   * An entitlement of a user to a product (e.g. an app). For example, a free
   * app that they have installed, or a paid app that they have been allocated a
   * license to.
   */
  entitlement: Schema$Entitlement[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#entitlementsListResponse&quot;.
   */
  kind: string;
}
/**
 * Group license objects allow you to keep track of licenses (called
 * entitlements) for both free and paid apps. For a free app, a group license is
 * created when an enterprise admin first approves the product in Google Play or
 * when the first entitlement for the product is created for a user via the API.
 * For a paid app, a group license object is only created when an enterprise
 * admin purchases the product in Google Play for the first time.  Use the API
 * to query group licenses. A Grouplicenses resource includes the total number
 * of licenses purchased (paid apps only) and the total number of licenses
 * currently in use. In other words, the total number of Entitlements that exist
 * for the product.  Only one group license object is created per product and
 * group license objects are never deleted. If a product is unapproved, its
 * group license remains. This allows enterprise admins to keep track of any
 * remaining entitlements for the product.
 */
export interface Schema$GroupLicense {
  /**
   * How this group license was acquired. &quot;bulkPurchase&quot; means that
   * this Grouplicenses resource was created because the enterprise purchased
   * licenses for this product; otherwise, the value is &quot;free&quot; (for
   * free products).
   */
  acquisitionKind: string;
  /**
   * Whether the product to which this group license relates is currently
   * approved by the enterprise. Products are approved when a group license is
   * first created, but this approval may be revoked by an enterprise admin via
   * Google Play. Unapproved products will not be visible to end users in
   * collections, and new entitlements to them should not normally be created.
   */
  approval: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#groupLicense&quot;.
   */
  kind: string;
  /**
   * The total number of provisioned licenses for this product. Returned by read
   * operations, but ignored in write operations.
   */
  numProvisioned: number;
  /**
   * The number of purchased licenses (possibly in multiple purchases). If this
   * field is omitted, then there is no limit on the number of licenses that can
   * be provisioned (for example, if the acquisition kind is &quot;free&quot;).
   */
  numPurchased: number;
  /**
   * The permission approval status of the product. This field is only set if
   * the product is approved. Possible states are:  -
   * &quot;currentApproved&quot;, the current set of permissions is approved,
   * but additional permissions will require the administrator to reapprove the
   * product (If the product was approved without specifying the approved
   * permissions setting, then this is the default behavior.),  -
   * &quot;needsReapproval&quot;, the product has unapproved permissions. No
   * additional product licenses can be assigned until the product is
   * reapproved,  - &quot;allCurrentAndFutureApproved&quot;, the current
   * permissions are approved and any future permission updates will be
   * automatically approved without administrator review.
   */
  permissions: string;
  /**
   * The ID of the product that the license is for. For example,
   * &quot;app:com.google.android.gm&quot;.
   */
  productId: string;
}
/**
 * The grouplicense resources for the enterprise.
 */
export interface Schema$GroupLicensesListResponse {
  /**
   * A group license for a product approved for use in the enterprise.
   */
  groupLicense: Schema$GroupLicense[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#groupLicensesListResponse&quot;.
   */
  kind: string;
}
/**
 * The user resources for the group license.
 */
export interface Schema$GroupLicenseUsersListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#groupLicenseUsersListResponse&quot;.
   */
  kind: string;
  /**
   * A user of an enterprise.
   */
  user: Schema$User[];
}
/**
 * The existence of an Installs resource indicates that an app is installed on a
 * particular device (or that an install is pending).  The API can be used to
 * create an install resource using the update method. This triggers the actual
 * install of the app on the device. If the user does not already have an
 * entitlement for the app, then an attempt is made to create one. If this fails
 * (for example, because the app is not free and there is no available license),
 * then the creation of the install fails.  The API can also be used to update
 * an installed app. If the update method is used on an existing install, then
 * the app will be updated to the latest available version.  Note that it is not
 * possible to force the installation of a specific version of an app: the
 * version code is read-only.  If a user installs an app themselves (as
 * permitted by the enterprise), then again an install resource and possibly an
 * entitlement resource are automatically created.  The API can also be used to
 * delete an install resource, which triggers the removal of the app from the
 * device. Note that deleting an install does not automatically remove the
 * corresponding entitlement, even if there are no remaining installs. The
 * install resource will also be deleted if the user uninstalls the app
 * themselves.
 */
export interface Schema$Install {
  /**
   * Install state. The state &quot;installPending&quot; means that an install
   * request has recently been made and download to the device is in progress.
   * The state &quot;installed&quot; means that the app has been installed. This
   * field is read-only.
   */
  installState: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#install&quot;.
   */
  kind: string;
  /**
   * The ID of the product that the install is for. For example,
   * &quot;app:com.google.android.gm&quot;.
   */
  productId: string;
  /**
   * The version of the installed product. Guaranteed to be set only if the
   * install state is &quot;installed&quot;.
   */
  versionCode: number;
}
/**
 * An event generated when an app installation failed on a device
 */
export interface Schema$InstallFailureEvent {
  /**
   * The Android ID of the device. This field will always be present.
   */
  deviceId: string;
  /**
   * Additional details on the failure if applicable.
   */
  failureDetails: string;
  /**
   * The reason for the installation failure. This field will always be present.
   */
  failureReason: string;
  /**
   * The id of the product (e.g. &quot;app:com.google.android.gm&quot;) for
   * which the install failure event occured. This field will always be present.
   */
  productId: string;
  /**
   * The ID of the user. This field will always be present.
   */
  userId: string;
}
/**
 * The install resources for the device.
 */
export interface Schema$InstallsListResponse {
  /**
   * An installation of an app for a user on a specific device. The existence of
   * an install implies that the user must have an entitlement to the app.
   */
  install: Schema$Install[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#installsListResponse&quot;.
   */
  kind: string;
}
/**
 * A localized string with its locale.
 */
export interface Schema$LocalizedText {
  /**
   * The BCP47 tag for a locale. (e.g. &quot;en-US&quot;, &quot;de&quot;).
   */
  locale: string;
  /**
   * The text localized in the associated locale.
   */
  text: string;
}
/**
 * Maintenance window for managed Google Play Accounts. This allows Play store
 * to update the apps on the foreground in the designated window.
 */
export interface Schema$MaintenanceWindow {
  /**
   * Duration of the maintenance window, in milliseconds. The duration must be
   * between 30 minutes and 24 hours (inclusive).
   */
  durationMs: string;
  /**
   * Start time of the maintenance window, in milliseconds after midnight on the
   * device. Windows can span midnight.
   */
  startTimeAfterMidnightMs: string;
}
/**
 * A managed configuration resource contains the set of managed properties
 * defined by the app developer in the app&#39;s managed configurations schema,
 * as well as any configuration variables defined for the user.
 */
export interface Schema$ManagedConfiguration {
  /**
   * Contains the ID of the managed configuration profile and the set of
   * configuration variables (if any) defined for the user.
   */
  configurationVariables: Schema$ConfigurationVariables;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#managedConfiguration&quot;.
   */
  kind: string;
  /**
   * The set of managed properties for this configuration.
   */
  managedProperty: Schema$ManagedProperty[];
  /**
   * The ID of the product that the managed configuration is for, e.g.
   * &quot;app:com.google.android.gm&quot;.
   */
  productId: string;
}
/**
 * The managed configuration resources for the device.
 */
export interface Schema$ManagedConfigurationsForDeviceListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#managedConfigurationsForDeviceListResponse&quot;.
   */
  kind: string;
  /**
   * A managed configuration for an app on a specific device.
   */
  managedConfigurationForDevice: Schema$ManagedConfiguration[];
}
/**
 * The managed configuration resources for the user.
 */
export interface Schema$ManagedConfigurationsForUserListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#managedConfigurationsForUserListResponse&quot;.
   */
  kind: string;
  /**
   * A managed configuration for an app for a specific user.
   */
  managedConfigurationForUser: Schema$ManagedConfiguration[];
}
/**
 * A managed configurations settings resource contains the set of managed
 * properties that have been configured for an Android app to be applied to a
 * set of users. The app&#39;s developer would have defined configurable
 * properties in the managed configurations schema.
 */
export interface Schema$ManagedConfigurationsSettings {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#managedConfigurationsSettings&quot;.
   */
  kind: string;
  /**
   * The last updated time of the managed configuration settings in milliseconds
   * since 1970-01-01T00:00:00Z.
   */
  lastUpdatedTimestampMillis: string;
  /**
   * The set of managed properties for this configuration.
   */
  managedProperty: Schema$ManagedProperty[];
  /**
   * The ID of the managed configurations settings.
   */
  mcmId: string;
  /**
   * The name of the managed configurations settings.
   */
  name: string;
}
/**
 * The managed configurations settings for a product.
 */
export interface Schema$ManagedConfigurationsSettingsListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#managedConfigurationsSettingsListResponse&quot;.
   */
  kind: string;
  /**
   * A managed configurations settings for an app that may be assigned to a
   * group of users in an enterprise.
   */
  managedConfigurationsSettings: Schema$ManagedConfigurationsSettings[];
}
/**
 * A managed property of a managed configuration. The property must match one of
 * the properties in the app restrictions schema of the product. Exactly one of
 * the value fields must be populated, and it must match the property&#39;s type
 * in the app restrictions schema.
 */
export interface Schema$ManagedProperty {
  /**
   * The unique key that identifies the property.
   */
  key: string;
  /**
   * The boolean value - this will only be present if type of the property is
   * bool.
   */
  valueBool: boolean;
  /**
   * The bundle of managed properties - this will only be present if type of the
   * property is bundle.
   */
  valueBundle: Schema$ManagedPropertyBundle;
  /**
   * The list of bundles of properties - this will only be present if type of
   * the property is bundle_array.
   */
  valueBundleArray: Schema$ManagedPropertyBundle[];
  /**
   * The integer value - this will only be present if type of the property is
   * integer.
   */
  valueInteger: number;
  /**
   * The string value - this will only be present if type of the property is
   * string, choice or hidden.
   */
  valueString: string;
  /**
   * The list of string values - this will only be present if type of the
   * property is multiselect.
   */
  valueStringArray: string[];
}
/**
 * A bundle of managed properties.
 */
export interface Schema$ManagedPropertyBundle {
  /**
   * The list of managed properties.
   */
  managedProperty: Schema$ManagedProperty[];
}
/**
 * An event generated when a new device is ready to be managed.
 */
export interface Schema$NewDeviceEvent {
  /**
   * The Android ID of the device. This field will always be present.
   */
  deviceId: string;
  /**
   * Policy app on the device.
   */
  dpcPackageName: string;
  /**
   * Identifies the extent to which the device is controlled by an Android EMM
   * in various deployment configurations.  Possible values include:  -
   * &quot;managedDevice&quot;, a device where the DPC is set as device owner,
   * - &quot;managedProfile&quot;, a device where the DPC is set as profile
   * owner.
   */
  managementType: string;
  /**
   * The ID of the user. This field will always be present.
   */
  userId: string;
}
/**
 * An event generated when new permissions are added to an app.
 */
export interface Schema$NewPermissionsEvent {
  /**
   * The set of permissions that the enterprise admin has already approved for
   * this application. Use Permissions.Get on the EMM API to retrieve details
   * about these permissions.
   */
  approvedPermissions: string[];
  /**
   * The id of the product (e.g. &quot;app:com.google.android.gm&quot;) for
   * which new permissions were added. This field will always be present.
   */
  productId: string;
  /**
   * The set of permissions that the app is currently requesting. Use
   * Permissions.Get on the EMM API to retrieve details about these permissions.
   */
  requestedPermissions: string[];
}
/**
 * A notification of one event relating to an enterprise.
 */
export interface Schema$Notification {
  /**
   * Notifications about new app restrictions schema changes.
   */
  appRestrictionsSchemaChangeEvent: Schema$AppRestrictionsSchemaChangeEvent;
  /**
   * Notifications about app updates.
   */
  appUpdateEvent: Schema$AppUpdateEvent;
  /**
   * The ID of the enterprise for which the notification is sent. This will
   * always be present.
   */
  enterpriseId: string;
  /**
   * Notifications about an app installation failure.
   */
  installFailureEvent: Schema$InstallFailureEvent;
  /**
   * Notifications about new devices.
   */
  newDeviceEvent: Schema$NewDeviceEvent;
  /**
   * Notifications about new app permissions.
   */
  newPermissionsEvent: Schema$NewPermissionsEvent;
  /**
   * Type of the notification.
   */
  notificationType: string;
  /**
   * Notifications about changes to a product&#39;s approval status.
   */
  productApprovalEvent: Schema$ProductApprovalEvent;
  /**
   * Notifications about product availability changes.
   */
  productAvailabilityChangeEvent: Schema$ProductAvailabilityChangeEvent;
  /**
   * The time when the notification was published in milliseconds since
   * 1970-01-01T00:00:00Z. This will always be present.
   */
  timestampMillis: string;
}
/**
 * A resource returned by the PullNotificationSet API, which contains a
 * collection of notifications for enterprises associated with the service
 * account authenticated for the request.
 */
export interface Schema$NotificationSet {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#notificationSet&quot;.
   */
  kind: string;
  /**
   * The notifications received, or empty if no notifications are present.
   */
  notification: Schema$Notification[];
  /**
   * The notification set ID, required to mark the notification as received with
   * the Enterprises.AcknowledgeNotification API. This will be omitted if no
   * notifications are present.
   */
  notificationSetId: string;
}
export interface Schema$PageInfo {
  resultPerPage: number;
  startIndex: number;
  totalResults: number;
}
/**
 * A Permissions resource represents some extra capability, to be granted to an
 * Android app, which requires explicit consent. An enterprise admin must
 * consent to these permissions on behalf of their users before an entitlement
 * for the app can be created.  The permissions collection is read-only. The
 * information provided for each permission (localized name and description) is
 * intended to be used in the MDM user interface when obtaining consent from the
 * enterprise.
 */
export interface Schema$Permission {
  /**
   * A longer description of the Permissions resource, giving more details of
   * what it affects.
   */
  description: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#permission&quot;.
   */
  kind: string;
  /**
   * The name of the permission.
   */
  name: string;
  /**
   * An opaque string uniquely identifying the permission.
   */
  permissionId: string;
}
/**
 * The device policy for a given managed device.
 */
export interface Schema$Policy {
  /**
   * The auto-update policy for apps installed on the device.
   * &quot;choiceToTheUser&quot; allows the device&#39;s user to configure the
   * app update policy. &quot;always&quot; enables auto updates.
   * &quot;never&quot; disables auto updates. &quot;wifiOnly&quot; enables auto
   * updates only when the device is connected to wifi.
   */
  autoUpdatePolicy: string;
  /**
   * The maintenance window defining when apps running in the foreground should
   * be updated.
   */
  maintenanceWindow: Schema$MaintenanceWindow;
  /**
   * The availability granted to the device for the specified products.
   * &quot;all&quot; gives the device access to all products, regardless of
   * approval status. &quot;allApproved&quot; entitles the device to access all
   * products that are approved for the enterprise. &quot;allApproved&quot; and
   * &quot;all&quot; do not enable automatic visibility of &quot;alpha&quot; or
   * &quot;beta&quot; tracks. &quot;whitelist&quot; grants the device access the
   * products specified in productPolicy[]. Only products that are approved or
   * products that were previously approved (products with revoked approval) by
   * the enterprise can be whitelisted. If no value is provided, the
   * availability set at the user level is applied by default.
   */
  productAvailabilityPolicy: string;
  /**
   * The list of product policies.
   */
  productPolicy: Schema$ProductPolicy[];
}
/**
 * A Products resource represents an app in the Google Play store that is
 * available to at least some users in the enterprise. (Some apps are restricted
 * to a single enterprise, and no information about them is made available
 * outside that enterprise.)  The information provided for each product
 * (localized name, icon, link to the full Google Play details page) is intended
 * to allow a basic representation of the product within an EMM user interface.
 */
export interface Schema$Product {
  /**
   * App versions currently available for this product.
   */
  appVersion: Schema$AppVersion[];
  /**
   * The name of the author of the product (for example, the app developer).
   */
  authorName: string;
  /**
   * The countries which this app is available in.
   */
  availableCountries: string[];
  /**
   * The tracks that are visible to the enterprise.
   */
  availableTracks: string[];
  /**
   * The app category (e.g. RACING, SOCIAL, etc.)
   */
  category: string;
  /**
   * The content rating for this app.
   */
  contentRating: string;
  /**
   * The localized promotional description, if available.
   */
  description: string;
  /**
   * A link to the (consumer) Google Play details page for the product.
   */
  detailsUrl: string;
  /**
   * How and to whom the package is made available. The value publicGoogleHosted
   * means that the package is available through the Play store and not
   * restricted to a specific enterprise. The value privateGoogleHosted means
   * that the package is a private app (restricted to an enterprise) but hosted
   * by Google. The value privateSelfHosted means that the package is a private
   * app (restricted to an enterprise) and is privately hosted.
   */
  distributionChannel: string;
  /**
   * A link to an image that can be used as an icon for the product. This image
   * is suitable for use at up to 512px x 512px.
   */
  iconUrl: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#product&quot;.
   */
  kind: string;
  /**
   * The approximate time (within 7 days) the app was last published, expressed
   * in milliseconds since epoch.
   */
  lastUpdatedTimestampMillis: string;
  /**
   * The minimum Android SDK necessary to run the app.
   */
  minAndroidSdkVersion: number;
  /**
   * A list of permissions required by the app.
   */
  permissions: Schema$ProductPermission[];
  /**
   * A string of the form app:&lt;package name&gt;. For example,
   * app:com.google.android.gm represents the Gmail app.
   */
  productId: string;
  /**
   * Whether this product is free, free with in-app purchases, or paid. If the
   * pricing is unknown, this means the product is not generally available
   * anymore (even though it might still be available to people who own it).
   */
  productPricing: string;
  /**
   * A description of the recent changes made to the app.
   */
  recentChanges: string;
  /**
   * Deprecated.
   */
  requiresContainerApp: boolean;
  /**
   * A list of screenshot links representing the app.
   */
  screenshotUrls: string[];
  /**
   * The certificate used to sign this product.
   */
  signingCertificate: Schema$ProductSigningCertificate;
  /**
   * A link to a smaller image that can be used as an icon for the product. This
   * image is suitable for use at up to 128px x 128px.
   */
  smallIconUrl: string;
  /**
   * The name of the product.
   */
  title: string;
  /**
   * A link to the managed Google Play details page for the product, for use by
   * an Enterprise admin.
   */
  workDetailsUrl: string;
}
/**
 * An event generated when a product&#39;s approval status is changed.
 */
export interface Schema$ProductApprovalEvent {
  /**
   * Whether the product was approved or unapproved. This field will always be
   * present.
   */
  approved: string;
  /**
   * The id of the product (e.g. &quot;app:com.google.android.gm&quot;) for
   * which the approval status has changed. This field will always be present.
   */
  productId: string;
}
/**
 * An event generated whenever a product&#39;s availability changes.
 */
export interface Schema$ProductAvailabilityChangeEvent {
  /**
   * The new state of the product. This field will always be present.
   */
  availabilityStatus: string;
  /**
   * The id of the product (e.g. &quot;app:com.google.android.gm&quot;) for
   * which the product availability changed. This field will always be present.
   */
  productId: string;
}
/**
 * A product permissions resource represents the set of permissions required by
 * a specific app and whether or not they have been accepted by an enterprise
 * admin.  The API can be used to read the set of permissions, and also to
 * update the set to indicate that permissions have been accepted.
 */
export interface Schema$ProductPermission {
  /**
   * An opaque string uniquely identifying the permission.
   */
  permissionId: string;
  /**
   * Whether the permission has been accepted or not.
   */
  state: string;
}
/**
 * Information about the permissions required by a specific app and whether they
 * have been accepted by the enterprise.
 */
export interface Schema$ProductPermissions {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#productPermissions&quot;.
   */
  kind: string;
  /**
   * The permissions required by the app.
   */
  permission: Schema$ProductPermission[];
  /**
   * The ID of the app that the permissions relate to, e.g.
   * &quot;app:com.google.android.gm&quot;.
   */
  productId: string;
}
/**
 * The policy for a product.
 */
export interface Schema$ProductPolicy {
  /**
   * The ID of the product. For example, &quot;app:com.google.android.gm&quot;.
   */
  productId: string;
  /**
   * Grants visibility to the specified track(s) of the product to the device.
   * The track available to the device is based on the following order of
   * preference: alpha, beta, production. For example, if an app has a prod
   * version, a beta version and an alpha version and the enterprise has been
   * granted visibility to both the alpha and beta tracks, if tracks is
   * {&quot;beta&quot;, &quot;production&quot;} then the beta version of the app
   * is made available to the device. If there are no app versions in the
   * specified track adding the &quot;alpha&quot; and &quot;beta&quot; values to
   * the list of tracks will have no effect. Note that the enterprise requires
   * access to alpha and/or beta tracks before users can be granted visibility
   * to apps in those tracks.  The allowed sets are: {} (considered equivalent
   * to {&quot;production&quot;}) {&quot;production&quot;} {&quot;beta&quot;,
   * &quot;production&quot;} {&quot;alpha&quot;, &quot;beta&quot;,
   * &quot;production&quot;} The order of elements is not relevant. Any other
   * set of tracks will be rejected with an error.
   */
  tracks: string[];
}
export interface Schema$ProductsApproveRequest {
  /**
   * The approval URL that was shown to the user. Only the permissions shown to
   * the user with that URL will be accepted, which may not be the product&#39;s
   * entire set of permissions. For example, the URL may only display new
   * permissions from an update after the product was approved, or not include
   * new permissions if the product was updated since the URL was generated.
   */
  approvalUrlInfo: Schema$ApprovalUrlInfo;
  /**
   * Sets how new permission requests for the product are handled.
   * &quot;allPermissions&quot; automatically approves all current and future
   * permissions for the product. &quot;currentPermissionsOnly&quot; approves
   * the current set of permissions for the product, but any future permissions
   * added through updates will require manual reapproval. If not specified,
   * only the current set of permissions will be approved.
   */
  approvedPermissions: string;
}
/**
 * A set of products.
 */
export interface Schema$ProductSet {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#productSet&quot;.
   */
  kind: string;
  /**
   * The list of product IDs making up the set of products.
   */
  productId: string[];
  /**
   * The interpretation of this product set. &quot;unknown&quot; should never be
   * sent and is ignored if received. &quot;whitelist&quot; means that the user
   * is entitled to access the product set. &quot;includeAll&quot; means that
   * all products are accessible, including products that are approved, products
   * with revoked approval, and products that have never been approved.
   * &quot;allApproved&quot; means that the user is entitled to access all
   * products that are approved for the enterprise. If the value is
   * &quot;allApproved&quot; or &quot;includeAll&quot;, the productId field is
   * ignored. If no value is provided, it is interpreted as
   * &quot;whitelist&quot; for backwards compatibility. Further
   * &quot;allApproved&quot; or &quot;includeAll&quot; does not enable automatic
   * visibility of &quot;alpha&quot; or &quot;beta&quot; tracks for Android app.
   * Use ProductVisibility to enable &quot;alpha&quot; or &quot;beta&quot;
   * tracks per user.
   */
  productSetBehavior: string;
  /**
   * Additional list of product IDs making up the product set. Unlike the
   * productID array, in this list It&#39;s possible to specify which tracks
   * (alpha, beta, production) of a product are visible to the user. See
   * ProductVisibility and its fields for more information. Specifying the same
   * product ID both here and in the productId array is not allowed and it will
   * result in an error.
   */
  productVisibility: Schema$ProductVisibility[];
}
export interface Schema$ProductsGenerateApprovalUrlResponse {
  /**
   * A URL that can be rendered in an iframe to display the permissions (if any)
   * of a product. This URL can be used to approve the product only once and
   * only within 24 hours of being generated, using the Products.approve call.
   * If the product is currently unapproved and has no permissions, this URL
   * will point to an empty page. If the product is currently approved, a URL
   * will only be generated if that product has added permissions since it was
   * last approved, and the URL will only display those new permissions that
   * have not yet been accepted.
   */
  url: string;
}
export interface Schema$ProductSigningCertificate {
  /**
   * The base64 urlsafe encoded SHA1 hash of the certificate. (This field is
   * deprecated in favor of SHA2-256. It should not be used and may be removed
   * at any time.)
   */
  certificateHashSha1: string;
  /**
   * The base64 urlsafe encoded SHA2-256 hash of the certificate.
   */
  certificateHashSha256: string;
}
/**
 * The matching products.
 */
export interface Schema$ProductsListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#productsListResponse&quot;.
   */
  kind: string;
  /**
   * General pagination information.
   */
  pageInfo: Schema$PageInfo;
  /**
   * Information about a product (e.g. an app) in the Google Play store, for
   * display to an enterprise admin.
   */
  product: Schema$Product[];
  /**
   * Pagination information for token pagination.
   */
  tokenPagination: Schema$TokenPagination;
}
/**
 * A product to be made visible to a user.
 */
export interface Schema$ProductVisibility {
  /**
   * The product ID to make visible to the user. Required for each item in the
   * productVisibility list.
   */
  productId: string;
  /**
   * Grants visibility to the specified track(s) of the product to the user. The
   * track available to the user is based on the following order of preference:
   * alpha, beta, production. For example, if an app has a prod version, a beta
   * version and an alpha version and the enterprise has been granted visibility
   * to both the alpha and beta tracks, if tracks is {&quot;beta&quot;,
   * &quot;production&quot;} the user will be able to install the app and they
   * will get the beta version of the app. If there are no app versions in the
   * specified track adding the &quot;alpha&quot; and &quot;beta&quot; values to
   * the list of tracks will have no effect. Note that the enterprise requires
   * access to alpha and/or beta tracks before users can be granted visibility
   * to apps in those tracks.  The allowed sets are: {} (considered equivalent
   * to {&quot;production&quot;}) {&quot;production&quot;} {&quot;beta&quot;,
   * &quot;production&quot;} {&quot;alpha&quot;, &quot;beta&quot;,
   * &quot;production&quot;} The order of elements is not relevant. Any other
   * set of tracks will be rejected with an error.
   */
  tracks: string[];
}
/**
 * A service account identity, including the name and credentials that can be
 * used to authenticate as the service account.
 */
export interface Schema$ServiceAccount {
  /**
   * Credentials that can be used to authenticate as this ServiceAccount.
   */
  key: Schema$ServiceAccountKey;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#serviceAccount&quot;.
   */
  kind: string;
  /**
   * The account name of the service account, in the form of an email address.
   * Assigned by the server.
   */
  name: string;
}
/**
 * Credentials that can be used to authenticate as a service account.
 */
export interface Schema$ServiceAccountKey {
  /**
   * The body of the private key credentials file, in string format. This is
   * only populated when the ServiceAccountKey is created, and is not stored by
   * Google.
   */
  data: string;
  /**
   * An opaque, unique identifier for this ServiceAccountKey. Assigned by the
   * server.
   */
  id: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#serviceAccountKey&quot;.
   */
  kind: string;
  /**
   * Public key data for the credentials file. This is an X.509 cert. If you are
   * using the googleCredentials key type, this is identical to the cert that
   * can be retrieved by using the X.509 cert url inside of the credentials
   * file.
   */
  publicData: string;
  /**
   * The file format of the generated key data.
   */
  type: string;
}
export interface Schema$ServiceAccountKeysListResponse {
  /**
   * The service account credentials.
   */
  serviceAccountKey: Schema$ServiceAccountKey[];
}
/**
 * A resource returned by the GenerateSignupUrl API, which contains the Signup
 * URL and Completion Token.
 */
export interface Schema$SignupInfo {
  /**
   * An opaque token that will be required, along with the Enterprise Token, for
   * obtaining the enterprise resource from CompleteSignup.
   */
  completionToken: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#signupInfo&quot;.
   */
  kind: string;
  /**
   * A URL under which the Admin can sign up for an enterprise. The page pointed
   * to cannot be rendered in an iframe.
   */
  url: string;
}
/**
 * Definition of a managed Google Play store cluster, a list of products
 * displayed as part of a store page.
 */
export interface Schema$StoreCluster {
  /**
   * Unique ID of this cluster. Assigned by the server. Immutable once assigned.
   */
  id: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#storeCluster&quot;.
   */
  kind: string;
  /**
   * Ordered list of localized strings giving the name of this page. The text
   * displayed is the one that best matches the user locale, or the first entry
   * if there is no good match. There needs to be at least one entry.
   */
  name: Schema$LocalizedText[];
  /**
   * String (US-ASCII only) used to determine order of this cluster within the
   * parent page&#39;s elements. Page elements are sorted in lexicographic order
   * of this field. Duplicated values are allowed, but ordering between elements
   * with duplicate order is undefined.  The value of this field is never
   * visible to a user, it is used solely for the purpose of defining an
   * ordering. Maximum length is 256 characters.
   */
  orderInPage: string;
  /**
   * List of products in the order they are displayed in the cluster. There
   * should not be duplicates within a cluster.
   */
  productId: string[];
}
/**
 * General setting for the managed Google Play store layout, currently only
 * specifying the page to display the first time the store is opened.
 */
export interface Schema$StoreLayout {
  /**
   * The ID of the store page to be used as the homepage. The homepage is the
   * first page shown in the managed Google Play Store.  Not specifying a
   * homepage is equivalent to setting the store layout type to
   * &quot;basic&quot;.
   */
  homepageId: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#storeLayout&quot;.
   */
  kind: string;
  /**
   * The store layout type. By default, this value is set to &quot;basic&quot;
   * if the homepageId field is not set, and to &quot;custom&quot; otherwise. If
   * set to &quot;basic&quot;, the layout will consist of all approved apps that
   * have been whitelisted for the user.
   */
  storeLayoutType: string;
}
/**
 * The store page resources for the enterprise.
 */
export interface Schema$StoreLayoutClustersListResponse {
  /**
   * A store cluster of an enterprise.
   */
  cluster: Schema$StoreCluster[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#storeLayoutClustersListResponse&quot;.
   */
  kind: string;
}
/**
 * The store page resources for the enterprise.
 */
export interface Schema$StoreLayoutPagesListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#storeLayoutPagesListResponse&quot;.
   */
  kind: string;
  /**
   * A store page of an enterprise.
   */
  page: Schema$StorePage[];
}
/**
 * Definition of a managed Google Play store page, made of a localized name and
 * links to other pages. A page also contains clusters defined as a
 * subcollection.
 */
export interface Schema$StorePage {
  /**
   * Unique ID of this page. Assigned by the server. Immutable once assigned.
   */
  id: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#storePage&quot;.
   */
  kind: string;
  /**
   * Ordered list of pages a user should be able to reach from this page. The
   * pages must exist, must not be this page, and once a link is created the
   * page linked to cannot be deleted until all links to it are removed. It is
   * recommended that the basic pages are created first, before adding the links
   * between pages.  No attempt is made to verify that all pages are reachable
   * from the homepage.
   */
  link: string[];
  /**
   * Ordered list of localized strings giving the name of this page. The text
   * displayed is the one that best matches the user locale, or the first entry
   * if there is no good match. There needs to be at least one entry.
   */
  name: Schema$LocalizedText[];
}
export interface Schema$TokenPagination {
  nextPageToken: string;
  previousPageToken: string;
}
/**
 * A Users resource represents an account associated with an enterprise. The
 * account may be specific to a device or to an individual user (who can then
 * use the account across multiple devices). The account may provide access to
 * managed Google Play only, or to other Google services, depending on the
 * identity model:  - The Google managed domain identity model requires
 * synchronization to Google account sources (via primaryEmail).  - The managed
 * Google Play Accounts identity model provides a dynamic means for enterprises
 * to create user or device accounts as needed. These accounts provide access to
 * managed Google Play.
 */
export interface Schema$User {
  /**
   * A unique identifier you create for this user, such as &quot;user342&quot;
   * or &quot;asset#44418&quot;. Do not use personally identifiable information
   * (PII) for this property. Must always be set for EMM-managed users. Not set
   * for Google-managed users.
   */
  accountIdentifier: string;
  /**
   * The type of account that this user represents. A userAccount can be
   * installed on multiple devices, but a deviceAccount is specific to a single
   * device. An EMM-managed user (emmManaged) can be either type (userAccount,
   * deviceAccount), but a Google-managed user (googleManaged) is always a
   * userAccount.
   */
  accountType: string;
  /**
   * The name that will appear in user interfaces. Setting this property is
   * optional when creating EMM-managed users. If you do set this property, use
   * something generic about the organization (such as &quot;Example,
   * Inc.&quot;) or your name (as EMM). Not used for Google-managed user
   * accounts.
   */
  displayName: string;
  /**
   * The unique ID for the user.
   */
  id: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#user&quot;.
   */
  kind: string;
  /**
   * The entity that manages the user. With googleManaged users, the source of
   * truth is Google so EMMs have to make sure a Google Account exists for the
   * user. With emmManaged users, the EMM is in charge.
   */
  managementType: string;
  /**
   * The user&#39;s primary email address, for example,
   * &quot;jsmith@example.com&quot;. Will always be set for Google managed users
   * and not set for EMM managed users.
   */
  primaryEmail: string;
}
/**
 * The matching user resources.
 */
export interface Schema$UsersListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#usersListResponse&quot;.
   */
  kind: string;
  /**
   * A user of an enterprise.
   */
  user: Schema$User[];
}
/**
 * A UserToken is used by a user when setting up a managed device or profile
 * with their managed Google Play account on a device. When the user enters
 * their email address and token (activation code) the appropriate EMM app can
 * be automatically downloaded.
 */
export interface Schema$UserToken {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#userToken&quot;.
   */
  kind: string;
  /**
   * The token (activation code) to be entered by the user. This consists of a
   * sequence of decimal digits. Note that the leading digit may be 0.
   */
  token: string;
  /**
   * The unique ID for the user.
   */
  userId: string;
}
/**
 * A variable set is a key-value pair of EMM-provided placeholders and its
 * corresponding value, which is attributed to a user. For example, $FIRSTNAME
 * could be a placeholder, and its value could be Alice. Placeholders should
 * start with a &#39;$&#39; sign and should be alphanumeric only.
 */
export interface Schema$VariableSet {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;androidenterprise#variableSet&quot;.
   */
  kind: string;
  /**
   * The placeholder string; defined by EMM.
   */
  placeholder: string;
  /**
   * The value of the placeholder, specific to the user.
   */
  userValue: string;
}

export class Resource$Devices {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.devices.get
   * @desc Retrieves the details of a device.
   * @alias androidenterprise.devices.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Device>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Device>,
      callback?: BodyResponseCallback<Schema$Device>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Device>,
      callback?: BodyResponseCallback<Schema$Device>):
      void|AxiosPromise<Schema$Device> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'deviceId'],
      pathParams: ['deviceId', 'enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Device>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Device>(parameters);
    }
  }


  /**
   * androidenterprise.devices.getState
   * @desc Retrieves whether a device's access to Google services is enabled or
   * disabled. The device state takes effect only if enforcing EMM policies on
   * Android devices is enabled in the Google Admin Console. Otherwise, the
   * device state is ignored and all devices are allowed access to Google
   * services. This is only supported for Google-managed users.
   * @alias androidenterprise.devices.getState
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getState(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DeviceState>;
  getState(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DeviceState>,
      callback?: BodyResponseCallback<Schema$DeviceState>): void;
  getState(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DeviceState>,
      callback?: BodyResponseCallback<Schema$DeviceState>):
      void|AxiosPromise<Schema$DeviceState> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'deviceId'],
      pathParams: ['deviceId', 'enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DeviceState>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DeviceState>(parameters);
    }
  }


  /**
   * androidenterprise.devices.list
   * @desc Retrieves the IDs of all of a user's devices.
   * @alias androidenterprise.devices.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DevicesListResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DevicesListResponse>,
      callback?: BodyResponseCallback<Schema$DevicesListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DevicesListResponse>,
      callback?: BodyResponseCallback<Schema$DevicesListResponse>):
      void|AxiosPromise<Schema$DevicesListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DevicesListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DevicesListResponse>(parameters);
    }
  }


  /**
   * androidenterprise.devices.patch
   * @desc Updates the device policy. This method supports patch semantics.
   * @alias androidenterprise.devices.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string=} params.updateMask Mask that identifies which fields to update. If not set, all modifiable fields will be modified.  When set in a query parameter, this field should be specified as updateMask=<field1>,<field2>,...
   * @param {string} params.userId The ID of the user.
   * @param {().Device} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Device>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Device>,
      callback?: BodyResponseCallback<Schema$Device>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Device>,
      callback?: BodyResponseCallback<Schema$Device>):
      void|AxiosPromise<Schema$Device> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'deviceId'],
      pathParams: ['deviceId', 'enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Device>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Device>(parameters);
    }
  }


  /**
   * androidenterprise.devices.setState
   * @desc Sets whether a device's access to Google services is enabled or
   * disabled. The device state takes effect only if enforcing EMM policies on
   * Android devices is enabled in the Google Admin Console. Otherwise, the
   * device state is ignored and all devices are allowed access to Google
   * services. This is only supported for Google-managed users.
   * @alias androidenterprise.devices.setState
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {().DeviceState} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setState(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DeviceState>;
  setState(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DeviceState>,
      callback?: BodyResponseCallback<Schema$DeviceState>): void;
  setState(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DeviceState>,
      callback?: BodyResponseCallback<Schema$DeviceState>):
      void|AxiosPromise<Schema$DeviceState> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'deviceId'],
      pathParams: ['deviceId', 'enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DeviceState>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DeviceState>(parameters);
    }
  }


  /**
   * androidenterprise.devices.update
   * @desc Updates the device policy
   * @alias androidenterprise.devices.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string=} params.updateMask Mask that identifies which fields to update. If not set, all modifiable fields will be modified.  When set in a query parameter, this field should be specified as updateMask=<field1>,<field2>,...
   * @param {string} params.userId The ID of the user.
   * @param {().Device} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Device>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Device>,
      callback?: BodyResponseCallback<Schema$Device>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Device>,
      callback?: BodyResponseCallback<Schema$Device>):
      void|AxiosPromise<Schema$Device> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'deviceId'],
      pathParams: ['deviceId', 'enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Device>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Device>(parameters);
    }
  }
}

export class Resource$Enterprises {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.enterprises.acknowledgeNotificationSet
   * @desc Acknowledges notifications that were received from
   * Enterprises.PullNotificationSet to prevent subsequent calls from returning
   * the same notifications.
   * @alias androidenterprise.enterprises.acknowledgeNotificationSet
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.notificationSetId The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  acknowledgeNotificationSet(params?: any, options?: MethodOptions):
      AxiosPromise<void>;
  acknowledgeNotificationSet(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  acknowledgeNotificationSet(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/acknowledgeNotificationSet')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.completeSignup
   * @desc Completes the signup flow, by specifying the Completion token and
   * Enterprise token. This request must not be called multiple times for a
   * given Enterprise Token.
   * @alias androidenterprise.enterprises.completeSignup
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.completionToken The Completion token initially returned by GenerateSignupUrl.
   * @param {string=} params.enterpriseToken The Enterprise token appended to the Callback URL.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  completeSignup(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Enterprise>;
  completeSignup(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Enterprise>,
      callback?: BodyResponseCallback<Schema$Enterprise>): void;
  completeSignup(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Enterprise>,
      callback?: BodyResponseCallback<Schema$Enterprise>):
      void|AxiosPromise<Schema$Enterprise> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/androidenterprise/v1/enterprises/completeSignup')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Enterprise>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Enterprise>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.createWebToken
   * @desc Returns a unique token to access an embeddable UI. To generate a web
   * UI, pass the generated token into the managed Google Play javascript API.
   * Each token may only be used to start one UI session. See the javascript API
   * documentation for further information.
   * @alias androidenterprise.enterprises.createWebToken
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {().AdministratorWebTokenSpec} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  createWebToken(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AdministratorWebToken>;
  createWebToken(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AdministratorWebToken>,
      callback?: BodyResponseCallback<Schema$AdministratorWebToken>): void;
  createWebToken(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AdministratorWebToken>,
      callback?: BodyResponseCallback<Schema$AdministratorWebToken>):
      void|AxiosPromise<Schema$AdministratorWebToken> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/createWebToken')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AdministratorWebToken>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AdministratorWebToken>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.delete
   * @desc Deletes the binding between the EMM and enterprise. This is now
   * deprecated. Use this method only to unenroll customers that were previously
   * enrolled with the insert call, then enroll them again with the enroll call.
   * @alias androidenterprise.enterprises.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/androidenterprise/v1/enterprises/{enterpriseId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.enroll
   * @desc Enrolls an enterprise with the calling EMM.
   * @alias androidenterprise.enterprises.enroll
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.token The token provided by the enterprise to register the EMM.
   * @param {().Enterprise} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  enroll(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Enterprise>;
  enroll(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Enterprise>,
      callback?: BodyResponseCallback<Schema$Enterprise>): void;
  enroll(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Enterprise>,
      callback?: BodyResponseCallback<Schema$Enterprise>):
      void|AxiosPromise<Schema$Enterprise> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/androidenterprise/v1/enterprises/enroll')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['token'],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Enterprise>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Enterprise>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.generateSignupUrl
   * @desc Generates a sign-up URL.
   * @alias androidenterprise.enterprises.generateSignupUrl
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.callbackUrl The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request. Beware that this means that the URL will be parsed, the parameter added and then a new URL formatted, i.e. there may be some minor formatting changes and, more importantly, the URL must be well-formed so that it can be parsed.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  generateSignupUrl(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$SignupInfo>;
  generateSignupUrl(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SignupInfo>,
      callback?: BodyResponseCallback<Schema$SignupInfo>): void;
  generateSignupUrl(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SignupInfo>,
      callback?: BodyResponseCallback<Schema$SignupInfo>):
      void|AxiosPromise<Schema$SignupInfo> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/androidenterprise/v1/enterprises/signupUrl')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SignupInfo>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SignupInfo>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.get
   * @desc Retrieves the name and domain of an enterprise.
   * @alias androidenterprise.enterprises.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Enterprise>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Enterprise>,
      callback?: BodyResponseCallback<Schema$Enterprise>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Enterprise>,
      callback?: BodyResponseCallback<Schema$Enterprise>):
      void|AxiosPromise<Schema$Enterprise> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/androidenterprise/v1/enterprises/{enterpriseId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Enterprise>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Enterprise>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.getAndroidDevicePolicyConfig
   * @desc Returns the Android Device Policy config resource.
   * @alias androidenterprise.enterprises.getAndroidDevicePolicyConfig
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getAndroidDevicePolicyConfig(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AndroidDevicePolicyConfig>;
  getAndroidDevicePolicyConfig(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AndroidDevicePolicyConfig>,
      callback?: BodyResponseCallback<Schema$AndroidDevicePolicyConfig>): void;
  getAndroidDevicePolicyConfig(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AndroidDevicePolicyConfig>,
      callback?: BodyResponseCallback<Schema$AndroidDevicePolicyConfig>):
      void|AxiosPromise<Schema$AndroidDevicePolicyConfig> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/androidDevicePolicyConfig')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AndroidDevicePolicyConfig>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AndroidDevicePolicyConfig>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.getServiceAccount
   * @desc Returns a service account and credentials. The service account can be
   * bound to the enterprise by calling setAccount. The service account is
   * unique to this enterprise and EMM, and will be deleted if the enterprise is
   * unbound. The credentials contain private key data and are not stored
   * server-side.  This method can only be called after calling
   * Enterprises.Enroll or Enterprises.CompleteSignup, and before
   * Enterprises.SetAccount; at other times it will return an error.  Subsequent
   * calls after the first will generate a new, unique set of credentials, and
   * invalidate the previously generated credentials.  Once the service account
   * is bound to the enterprise, it can be managed using the serviceAccountKeys
   * resource.
   * @alias androidenterprise.enterprises.getServiceAccount
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string=} params.keyType The type of credential to return with the service account. Required.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getServiceAccount(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ServiceAccount>;
  getServiceAccount(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccount>,
      callback?: BodyResponseCallback<Schema$ServiceAccount>): void;
  getServiceAccount(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccount>,
      callback?: BodyResponseCallback<Schema$ServiceAccount>):
      void|AxiosPromise<Schema$ServiceAccount> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccount')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ServiceAccount>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ServiceAccount>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.getStoreLayout
   * @desc Returns the store layout for the enterprise. If the store layout has
   * not been set, returns "basic" as the store layout type and no homepage.
   * @alias androidenterprise.enterprises.getStoreLayout
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getStoreLayout(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$StoreLayout>;
  getStoreLayout(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StoreLayout>,
      callback?: BodyResponseCallback<Schema$StoreLayout>): void;
  getStoreLayout(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StoreLayout>,
      callback?: BodyResponseCallback<Schema$StoreLayout>):
      void|AxiosPromise<Schema$StoreLayout> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StoreLayout>(parameters, callback);
    } else {
      return createAPIRequest<Schema$StoreLayout>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.insert
   * @desc Establishes the binding between the EMM and an enterprise. This is
   * now deprecated; use enroll instead.
   * @alias androidenterprise.enterprises.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.token The token provided by the enterprise to register the EMM.
   * @param {().Enterprise} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Enterprise>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Enterprise>,
      callback?: BodyResponseCallback<Schema$Enterprise>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Enterprise>,
      callback?: BodyResponseCallback<Schema$Enterprise>):
      void|AxiosPromise<Schema$Enterprise> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/androidenterprise/v1/enterprises')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['token'],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Enterprise>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Enterprise>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.list
   * @desc Looks up an enterprise by domain name. This is only supported for
   * enterprises created via the Google-initiated creation flow. Lookup of the
   * id is not needed for enterprises created via the EMM-initiated flow since
   * the EMM learns the enterprise ID in the callback specified in the
   * Enterprises.generateSignupUrl call.
   * @alias androidenterprise.enterprises.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.domain The exact primary domain name of the enterprise to look up.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EnterprisesListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$EnterprisesListResponse>,
      callback?: BodyResponseCallback<Schema$EnterprisesListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$EnterprisesListResponse>,
      callback?: BodyResponseCallback<Schema$EnterprisesListResponse>):
      void|AxiosPromise<Schema$EnterprisesListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/androidenterprise/v1/enterprises')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['domain'],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EnterprisesListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EnterprisesListResponse>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.pullNotificationSet
   * @desc Pulls and returns a notification set for the enterprises associated
   * with the service account authenticated for the request. The notification
   * set may be empty if no notification are pending. A notification set
   * returned needs to be acknowledged within 20 seconds by calling
   * Enterprises.AcknowledgeNotificationSet, unless the notification set is
   * empty. Notifications that are not acknowledged within the 20 seconds will
   * eventually be included again in the response to another PullNotificationSet
   * request, and those that are never acknowledged will ultimately be deleted
   * according to the Google Cloud Platform Pub/Sub system policy. Multiple
   * requests might be performed concurrently to retrieve notifications, in
   * which case the pending notifications (if any) will be split among each
   * caller, if any are pending. If no notifications are present, an empty
   * notification list is returned. Subsequent requests may return more
   * notifications once they become available.
   * @alias androidenterprise.enterprises.pullNotificationSet
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.requestMode The request mode for pulling notifications. Specifying waitForNotifications will cause the request to block and wait until one or more notifications are present, or return an empty notification list if no notifications are present after some time. Speciying returnImmediately will cause the request to immediately return the pending notifications, or an empty list if no notifications are present. If omitted, defaults to waitForNotifications.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  pullNotificationSet(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$NotificationSet>;
  pullNotificationSet(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$NotificationSet>,
      callback?: BodyResponseCallback<Schema$NotificationSet>): void;
  pullNotificationSet(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$NotificationSet>,
      callback?: BodyResponseCallback<Schema$NotificationSet>):
      void|AxiosPromise<Schema$NotificationSet> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/androidenterprise/v1/enterprises/pullNotificationSet')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$NotificationSet>(parameters, callback);
    } else {
      return createAPIRequest<Schema$NotificationSet>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.sendTestPushNotification
   * @desc Sends a test notification to validate the EMM integration with the
   * Google Cloud Pub/Sub service for this enterprise.
   * @alias androidenterprise.enterprises.sendTestPushNotification
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  sendTestPushNotification(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EnterprisesSendTestPushNotificationResponse>;
  sendTestPushNotification(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$EnterprisesSendTestPushNotificationResponse>,
      callback?: BodyResponseCallback<
          Schema$EnterprisesSendTestPushNotificationResponse>): void;
  sendTestPushNotification(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$EnterprisesSendTestPushNotificationResponse>,
      callback?: BodyResponseCallback<
          Schema$EnterprisesSendTestPushNotificationResponse>):
      void|AxiosPromise<Schema$EnterprisesSendTestPushNotificationResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/sendTestPushNotification')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EnterprisesSendTestPushNotificationResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$EnterprisesSendTestPushNotificationResponse>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.setAccount
   * @desc Sets the account that will be used to authenticate to the API as the
   * enterprise.
   * @alias androidenterprise.enterprises.setAccount
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {().EnterpriseAccount} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setAccount(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EnterpriseAccount>;
  setAccount(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EnterpriseAccount>,
      callback?: BodyResponseCallback<Schema$EnterpriseAccount>): void;
  setAccount(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EnterpriseAccount>,
      callback?: BodyResponseCallback<Schema$EnterpriseAccount>):
      void|AxiosPromise<Schema$EnterpriseAccount> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/androidenterprise/v1/enterprises/{enterpriseId}/account')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EnterpriseAccount>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EnterpriseAccount>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.setAndroidDevicePolicyConfig
   * @desc Sets the Android Device Policy config resource. EMM may use this
   * method to enable or disable Android Device Policy support for the specified
   * enterprise. To learn more about managing devices and apps with Android
   * Device Policy, see the Android Management API.
   * @alias androidenterprise.enterprises.setAndroidDevicePolicyConfig
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {().AndroidDevicePolicyConfig} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setAndroidDevicePolicyConfig(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AndroidDevicePolicyConfig>;
  setAndroidDevicePolicyConfig(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AndroidDevicePolicyConfig>,
      callback?: BodyResponseCallback<Schema$AndroidDevicePolicyConfig>): void;
  setAndroidDevicePolicyConfig(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AndroidDevicePolicyConfig>,
      callback?: BodyResponseCallback<Schema$AndroidDevicePolicyConfig>):
      void|AxiosPromise<Schema$AndroidDevicePolicyConfig> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/androidDevicePolicyConfig')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AndroidDevicePolicyConfig>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AndroidDevicePolicyConfig>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.setStoreLayout
   * @desc Sets the store layout for the enterprise. By default, storeLayoutType
   * is set to "basic" and the basic store layout is enabled. The basic layout
   * only contains apps approved by the admin, and that have been added to the
   * available product set for a user (using the  setAvailableProductSet call).
   * Apps on the page are sorted in order of their product ID value. If you
   * create a custom store layout (by setting storeLayoutType = "custom" and
   * setting a homepage), the basic store layout is disabled.
   * @alias androidenterprise.enterprises.setStoreLayout
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {().StoreLayout} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setStoreLayout(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$StoreLayout>;
  setStoreLayout(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StoreLayout>,
      callback?: BodyResponseCallback<Schema$StoreLayout>): void;
  setStoreLayout(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StoreLayout>,
      callback?: BodyResponseCallback<Schema$StoreLayout>):
      void|AxiosPromise<Schema$StoreLayout> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StoreLayout>(parameters, callback);
    } else {
      return createAPIRequest<Schema$StoreLayout>(parameters);
    }
  }


  /**
   * androidenterprise.enterprises.unenroll
   * @desc Unenrolls an enterprise from the calling EMM.
   * @alias androidenterprise.enterprises.unenroll
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  unenroll(params?: any, options?: MethodOptions): AxiosPromise<void>;
  unenroll(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  unenroll(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/androidenterprise/v1/enterprises/{enterpriseId}/unenroll')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}

export class Resource$Entitlements {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.entitlements.delete
   * @desc Removes an entitlement to an app for a user.
   * @alias androidenterprise.entitlements.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.entitlementId The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
      pathParams: ['enterpriseId', 'entitlementId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.entitlements.get
   * @desc Retrieves details of an entitlement.
   * @alias androidenterprise.entitlements.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.entitlementId The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Entitlement>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Entitlement>,
      callback?: BodyResponseCallback<Schema$Entitlement>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Entitlement>,
      callback?: BodyResponseCallback<Schema$Entitlement>):
      void|AxiosPromise<Schema$Entitlement> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
      pathParams: ['enterpriseId', 'entitlementId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Entitlement>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Entitlement>(parameters);
    }
  }


  /**
   * androidenterprise.entitlements.list
   * @desc Lists all entitlements for the specified user. Only the ID is set.
   * @alias androidenterprise.entitlements.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntitlementsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$EntitlementsListResponse>,
      callback?: BodyResponseCallback<Schema$EntitlementsListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$EntitlementsListResponse>,
      callback?: BodyResponseCallback<Schema$EntitlementsListResponse>):
      void|AxiosPromise<Schema$EntitlementsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntitlementsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntitlementsListResponse>(parameters);
    }
  }


  /**
   * androidenterprise.entitlements.patch
   * @desc Adds or updates an entitlement to an app for a user. This method
   * supports patch semantics.
   * @alias androidenterprise.entitlements.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.entitlementId The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
   * @param {boolean=} params.install Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
   * @param {string} params.userId The ID of the user.
   * @param {().Entitlement} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Entitlement>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Entitlement>,
      callback?: BodyResponseCallback<Schema$Entitlement>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Entitlement>,
      callback?: BodyResponseCallback<Schema$Entitlement>):
      void|AxiosPromise<Schema$Entitlement> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
      pathParams: ['enterpriseId', 'entitlementId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Entitlement>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Entitlement>(parameters);
    }
  }


  /**
   * androidenterprise.entitlements.update
   * @desc Adds or updates an entitlement to an app for a user.
   * @alias androidenterprise.entitlements.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.entitlementId The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
   * @param {boolean=} params.install Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
   * @param {string} params.userId The ID of the user.
   * @param {().Entitlement} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Entitlement>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Entitlement>,
      callback?: BodyResponseCallback<Schema$Entitlement>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Entitlement>,
      callback?: BodyResponseCallback<Schema$Entitlement>):
      void|AxiosPromise<Schema$Entitlement> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
      pathParams: ['enterpriseId', 'entitlementId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Entitlement>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Entitlement>(parameters);
    }
  }
}

export class Resource$Grouplicenses {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.grouplicenses.get
   * @desc Retrieves details of an enterprise's group license for a product.
   * @alias androidenterprise.grouplicenses.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.groupLicenseId The ID of the product the group license is for, e.g. "app:com.google.android.gm".
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$GroupLicense>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GroupLicense>,
      callback?: BodyResponseCallback<Schema$GroupLicense>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$GroupLicense>,
      callback?: BodyResponseCallback<Schema$GroupLicense>):
      void|AxiosPromise<Schema$GroupLicense> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'groupLicenseId'],
      pathParams: ['enterpriseId', 'groupLicenseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GroupLicense>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GroupLicense>(parameters);
    }
  }


  /**
   * androidenterprise.grouplicenses.list
   * @desc Retrieves IDs of all products for which the enterprise has a group
   * license.
   * @alias androidenterprise.grouplicenses.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GroupLicensesListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GroupLicensesListResponse>,
      callback?: BodyResponseCallback<Schema$GroupLicensesListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GroupLicensesListResponse>,
      callback?: BodyResponseCallback<Schema$GroupLicensesListResponse>):
      void|AxiosPromise<Schema$GroupLicensesListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GroupLicensesListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GroupLicensesListResponse>(parameters);
    }
  }
}

export class Resource$Grouplicenseusers {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.grouplicenseusers.list
   * @desc Retrieves the IDs of the users who have been granted entitlements
   * under the license.
   * @alias androidenterprise.grouplicenseusers.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.groupLicenseId The ID of the product the group license is for, e.g. "app:com.google.android.gm".
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GroupLicenseUsersListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GroupLicenseUsersListResponse>,
      callback?: BodyResponseCallback<Schema$GroupLicenseUsersListResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GroupLicenseUsersListResponse>,
      callback?: BodyResponseCallback<Schema$GroupLicenseUsersListResponse>):
      void|AxiosPromise<Schema$GroupLicenseUsersListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}/users')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'groupLicenseId'],
      pathParams: ['enterpriseId', 'groupLicenseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GroupLicenseUsersListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GroupLicenseUsersListResponse>(parameters);
    }
  }
}

export class Resource$Installs {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.installs.delete
   * @desc Requests to remove an app from a device. A call to get or list will
   * still show the app as installed on the device until it is actually removed.
   * @alias androidenterprise.installs.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The Android ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.installId The ID of the product represented by the install, e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
      pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.installs.get
   * @desc Retrieves details of an installation of an app on a device.
   * @alias androidenterprise.installs.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The Android ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.installId The ID of the product represented by the install, e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Install>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Install>,
      callback?: BodyResponseCallback<Schema$Install>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Install>,
      callback?: BodyResponseCallback<Schema$Install>):
      void|AxiosPromise<Schema$Install> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
      pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Install>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Install>(parameters);
    }
  }


  /**
   * androidenterprise.installs.list
   * @desc Retrieves the details of all apps installed on the specified device.
   * @alias androidenterprise.installs.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The Android ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$InstallsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$InstallsListResponse>,
      callback?: BodyResponseCallback<Schema$InstallsListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$InstallsListResponse>,
      callback?: BodyResponseCallback<Schema$InstallsListResponse>):
      void|AxiosPromise<Schema$InstallsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'deviceId'],
      pathParams: ['deviceId', 'enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$InstallsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$InstallsListResponse>(parameters);
    }
  }


  /**
   * androidenterprise.installs.patch
   * @desc Requests to install the latest version of an app to a device. If the
   * app is already installed, then it is updated to the latest version if
   * necessary. This method supports patch semantics.
   * @alias androidenterprise.installs.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The Android ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.installId The ID of the product represented by the install, e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {().Install} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Install>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Install>,
      callback?: BodyResponseCallback<Schema$Install>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Install>,
      callback?: BodyResponseCallback<Schema$Install>):
      void|AxiosPromise<Schema$Install> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
      pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Install>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Install>(parameters);
    }
  }


  /**
   * androidenterprise.installs.update
   * @desc Requests to install the latest version of an app to a device. If the
   * app is already installed, then it is updated to the latest version if
   * necessary.
   * @alias androidenterprise.installs.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The Android ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.installId The ID of the product represented by the install, e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {().Install} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Install>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Install>,
      callback?: BodyResponseCallback<Schema$Install>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Install>,
      callback?: BodyResponseCallback<Schema$Install>):
      void|AxiosPromise<Schema$Install> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
      pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Install>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Install>(parameters);
    }
  }
}

export class Resource$Managedconfigurationsfordevice {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.managedconfigurationsfordevice.delete
   * @desc Removes a per-device managed configuration for an app for the
   * specified device.
   * @alias androidenterprise.managedconfigurationsfordevice.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The Android ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.managedConfigurationForDeviceId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: [
        'enterpriseId', 'userId', 'deviceId', 'managedConfigurationForDeviceId'
      ],
      pathParams: [
        'deviceId', 'enterpriseId', 'managedConfigurationForDeviceId', 'userId'
      ],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.managedconfigurationsfordevice.get
   * @desc Retrieves details of a per-device managed configuration.
   * @alias androidenterprise.managedconfigurationsfordevice.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The Android ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.managedConfigurationForDeviceId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ManagedConfiguration>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedConfiguration>,
      callback?: BodyResponseCallback<Schema$ManagedConfiguration>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedConfiguration>,
      callback?: BodyResponseCallback<Schema$ManagedConfiguration>):
      void|AxiosPromise<Schema$ManagedConfiguration> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [
        'enterpriseId', 'userId', 'deviceId', 'managedConfigurationForDeviceId'
      ],
      pathParams: [
        'deviceId', 'enterpriseId', 'managedConfigurationForDeviceId', 'userId'
      ],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedConfiguration>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ManagedConfiguration>(parameters);
    }
  }


  /**
   * androidenterprise.managedconfigurationsfordevice.list
   * @desc Lists all the per-device managed configurations for the specified
   * device. Only the ID is set.
   * @alias androidenterprise.managedconfigurationsfordevice.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The Android ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ManagedConfigurationsForDeviceListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ManagedConfigurationsForDeviceListResponse>,
      callback?: BodyResponseCallback<
          Schema$ManagedConfigurationsForDeviceListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ManagedConfigurationsForDeviceListResponse>,
      callback?: BodyResponseCallback<
          Schema$ManagedConfigurationsForDeviceListResponse>):
      void|AxiosPromise<Schema$ManagedConfigurationsForDeviceListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId', 'deviceId'],
      pathParams: ['deviceId', 'enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedConfigurationsForDeviceListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<
          Schema$ManagedConfigurationsForDeviceListResponse>(parameters);
    }
  }


  /**
   * androidenterprise.managedconfigurationsfordevice.patch
   * @desc Adds or updates a per-device managed configuration for an app for the
   * specified device. This method supports patch semantics.
   * @alias androidenterprise.managedconfigurationsfordevice.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The Android ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.managedConfigurationForDeviceId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {().ManagedConfiguration} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ManagedConfiguration>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedConfiguration>,
      callback?: BodyResponseCallback<Schema$ManagedConfiguration>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedConfiguration>,
      callback?: BodyResponseCallback<Schema$ManagedConfiguration>):
      void|AxiosPromise<Schema$ManagedConfiguration> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: [
        'enterpriseId', 'userId', 'deviceId', 'managedConfigurationForDeviceId'
      ],
      pathParams: [
        'deviceId', 'enterpriseId', 'managedConfigurationForDeviceId', 'userId'
      ],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedConfiguration>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ManagedConfiguration>(parameters);
    }
  }


  /**
   * androidenterprise.managedconfigurationsfordevice.update
   * @desc Adds or updates a per-device managed configuration for an app for the
   * specified device.
   * @alias androidenterprise.managedconfigurationsfordevice.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.deviceId The Android ID of the device.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.managedConfigurationForDeviceId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {().ManagedConfiguration} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ManagedConfiguration>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedConfiguration>,
      callback?: BodyResponseCallback<Schema$ManagedConfiguration>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedConfiguration>,
      callback?: BodyResponseCallback<Schema$ManagedConfiguration>):
      void|AxiosPromise<Schema$ManagedConfiguration> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: [
        'enterpriseId', 'userId', 'deviceId', 'managedConfigurationForDeviceId'
      ],
      pathParams: [
        'deviceId', 'enterpriseId', 'managedConfigurationForDeviceId', 'userId'
      ],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedConfiguration>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ManagedConfiguration>(parameters);
    }
  }
}

export class Resource$Managedconfigurationsforuser {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.managedconfigurationsforuser.delete
   * @desc Removes a per-user managed configuration for an app for the specified
   * user.
   * @alias androidenterprise.managedconfigurationsforuser.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.managedConfigurationForUserId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams:
          ['enterpriseId', 'userId', 'managedConfigurationForUserId'],
      pathParams: ['enterpriseId', 'managedConfigurationForUserId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.managedconfigurationsforuser.get
   * @desc Retrieves details of a per-user managed configuration for an app for
   * the specified user.
   * @alias androidenterprise.managedconfigurationsforuser.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.managedConfigurationForUserId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ManagedConfiguration>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedConfiguration>,
      callback?: BodyResponseCallback<Schema$ManagedConfiguration>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedConfiguration>,
      callback?: BodyResponseCallback<Schema$ManagedConfiguration>):
      void|AxiosPromise<Schema$ManagedConfiguration> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams:
          ['enterpriseId', 'userId', 'managedConfigurationForUserId'],
      pathParams: ['enterpriseId', 'managedConfigurationForUserId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedConfiguration>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ManagedConfiguration>(parameters);
    }
  }


  /**
   * androidenterprise.managedconfigurationsforuser.list
   * @desc Lists all the per-user managed configurations for the specified user.
   * Only the ID is set.
   * @alias androidenterprise.managedconfigurationsforuser.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ManagedConfigurationsForUserListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ManagedConfigurationsForUserListResponse>,
      callback?: BodyResponseCallback<
          Schema$ManagedConfigurationsForUserListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ManagedConfigurationsForUserListResponse>,
      callback?: BodyResponseCallback<
          Schema$ManagedConfigurationsForUserListResponse>):
      void|AxiosPromise<Schema$ManagedConfigurationsForUserListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedConfigurationsForUserListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ManagedConfigurationsForUserListResponse>(
          parameters);
    }
  }


  /**
   * androidenterprise.managedconfigurationsforuser.patch
   * @desc Adds or updates the managed configuration settings for an app for the
   * specified user. If you support the Managed configurations iframe, you can
   * apply managed configurations to a user by specifying an mcmId and its
   * associated configuration variables (if any) in the request. Alternatively,
   * all EMMs can apply managed configurations by passing a list of managed
   * properties. This method supports patch semantics.
   * @alias androidenterprise.managedconfigurationsforuser.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.managedConfigurationForUserId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {().ManagedConfiguration} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ManagedConfiguration>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedConfiguration>,
      callback?: BodyResponseCallback<Schema$ManagedConfiguration>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedConfiguration>,
      callback?: BodyResponseCallback<Schema$ManagedConfiguration>):
      void|AxiosPromise<Schema$ManagedConfiguration> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams:
          ['enterpriseId', 'userId', 'managedConfigurationForUserId'],
      pathParams: ['enterpriseId', 'managedConfigurationForUserId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedConfiguration>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ManagedConfiguration>(parameters);
    }
  }


  /**
   * androidenterprise.managedconfigurationsforuser.update
   * @desc Adds or updates the managed configuration settings for an app for the
   * specified user. If you support the Managed configurations iframe, you can
   * apply managed configurations to a user by specifying an mcmId and its
   * associated configuration variables (if any) in the request. Alternatively,
   * all EMMs can apply managed configurations by passing a list of managed
   * properties.
   * @alias androidenterprise.managedconfigurationsforuser.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.managedConfigurationForUserId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
   * @param {string} params.userId The ID of the user.
   * @param {().ManagedConfiguration} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ManagedConfiguration>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedConfiguration>,
      callback?: BodyResponseCallback<Schema$ManagedConfiguration>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ManagedConfiguration>,
      callback?: BodyResponseCallback<Schema$ManagedConfiguration>):
      void|AxiosPromise<Schema$ManagedConfiguration> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams:
          ['enterpriseId', 'userId', 'managedConfigurationForUserId'],
      pathParams: ['enterpriseId', 'managedConfigurationForUserId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedConfiguration>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ManagedConfiguration>(parameters);
    }
  }
}

export class Resource$Managedconfigurationssettings {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.managedconfigurationssettings.list
   * @desc Lists all the managed configurations settings for the specified app.
   * Only the ID and the name is set.
   * @alias androidenterprise.managedconfigurationssettings.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.productId The ID of the product for which the managed configurations settings applies to.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ManagedConfigurationsSettingsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ManagedConfigurationsSettingsListResponse>,
      callback?: BodyResponseCallback<
          Schema$ManagedConfigurationsSettingsListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ManagedConfigurationsSettingsListResponse>,
      callback?: BodyResponseCallback<
          Schema$ManagedConfigurationsSettingsListResponse>):
      void|AxiosPromise<Schema$ManagedConfigurationsSettingsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/managedConfigurationsSettings')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'productId'],
      pathParams: ['enterpriseId', 'productId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ManagedConfigurationsSettingsListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ManagedConfigurationsSettingsListResponse>(
          parameters);
    }
  }
}

export class Resource$Permissions {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.permissions.get
   * @desc Retrieves details of an Android app permission for display to an
   * enterprise admin.
   * @alias androidenterprise.permissions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.language The BCP47 tag for the user's preferred language (e.g. "en-US", "de")
   * @param {string} params.permissionId The ID of the permission.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Permission>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Permission>,
      callback?: BodyResponseCallback<Schema$Permission>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Permission>,
      callback?: BodyResponseCallback<Schema$Permission>):
      void|AxiosPromise<Schema$Permission> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/androidenterprise/v1/permissions/{permissionId}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['permissionId'],
      pathParams: ['permissionId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Permission>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Permission>(parameters);
    }
  }
}

export class Resource$Products {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.products.approve
   * @desc Approves the specified product and the relevant app permissions, if
   * any. The maximum number of products that you can approve per enterprise
   * customer is 1,000.  To learn how to use managed Google Play to design and
   * create a store layout to display approved products to your users, see Store
   * Layout Design.
   * @alias androidenterprise.products.approve
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.productId The ID of the product.
   * @param {().ProductsApproveRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  approve(params?: any, options?: MethodOptions): AxiosPromise<void>;
  approve(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  approve(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/approve')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'productId'],
      pathParams: ['enterpriseId', 'productId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.products.generateApprovalUrl
   * @desc Generates a URL that can be rendered in an iframe to display the
   * permissions (if any) of a product. An enterprise admin must view these
   * permissions and accept them on behalf of their organization in order to
   * approve that product.  Admins should accept the displayed permissions by
   * interacting with a separate UI element in the EMM console, which in turn
   * should trigger the use of this URL as the approvalUrlInfo.approvalUrl
   * property in a Products.approve call to approve the product. This URL can
   * only be used to display permissions for up to 1 day.
   * @alias androidenterprise.products.generateApprovalUrl
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string=} params.languageCode The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US".
   * @param {string} params.productId The ID of the product.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  generateApprovalUrl(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProductsGenerateApprovalUrlResponse>;
  generateApprovalUrl(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ProductsGenerateApprovalUrlResponse>,
      callback?:
          BodyResponseCallback<Schema$ProductsGenerateApprovalUrlResponse>):
      void;
  generateApprovalUrl(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ProductsGenerateApprovalUrlResponse>,
      callback?:
          BodyResponseCallback<Schema$ProductsGenerateApprovalUrlResponse>):
      void|AxiosPromise<Schema$ProductsGenerateApprovalUrlResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/generateApprovalUrl')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'productId'],
      pathParams: ['enterpriseId', 'productId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProductsGenerateApprovalUrlResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ProductsGenerateApprovalUrlResponse>(
          parameters);
    }
  }


  /**
   * androidenterprise.products.get
   * @desc Retrieves details of a product for display to an enterprise admin.
   * @alias androidenterprise.products.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string=} params.language The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
   * @param {string} params.productId The ID of the product, e.g. "app:com.google.android.gm".
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Product>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>):
      void|AxiosPromise<Schema$Product> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'productId'],
      pathParams: ['enterpriseId', 'productId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Product>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Product>(parameters);
    }
  }


  /**
   * androidenterprise.products.getAppRestrictionsSchema
   * @desc Retrieves the schema that defines the configurable properties for
   * this product. All products have a schema, but this schema may be empty if
   * no managed configurations have been defined. This schema can be used to
   * populate a UI that allows an admin to configure the product. To apply a
   * managed configuration based on the schema obtained using this API, see
   * Managed Configurations through Play.
   * @alias androidenterprise.products.getAppRestrictionsSchema
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string=} params.language The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
   * @param {string} params.productId The ID of the product.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getAppRestrictionsSchema(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AppRestrictionsSchema>;
  getAppRestrictionsSchema(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AppRestrictionsSchema>,
      callback?: BodyResponseCallback<Schema$AppRestrictionsSchema>): void;
  getAppRestrictionsSchema(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AppRestrictionsSchema>,
      callback?: BodyResponseCallback<Schema$AppRestrictionsSchema>):
      void|AxiosPromise<Schema$AppRestrictionsSchema> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'productId'],
      pathParams: ['enterpriseId', 'productId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AppRestrictionsSchema>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AppRestrictionsSchema>(parameters);
    }
  }


  /**
   * androidenterprise.products.getPermissions
   * @desc Retrieves the Android app permissions required by this app.
   * @alias androidenterprise.products.getPermissions
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.productId The ID of the product.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProductPermissions>;
  getPermissions(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductPermissions>,
      callback?: BodyResponseCallback<Schema$ProductPermissions>): void;
  getPermissions(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductPermissions>,
      callback?: BodyResponseCallback<Schema$ProductPermissions>):
      void|AxiosPromise<Schema$ProductPermissions> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'productId'],
      pathParams: ['enterpriseId', 'productId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProductPermissions>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProductPermissions>(parameters);
    }
  }


  /**
   * androidenterprise.products.list
   * @desc Finds approved products that match a query, or all approved products
   * if there is no query.
   * @alias androidenterprise.products.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.approved Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string=} params.language The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language.
   * @param {integer=} params.maxResults Specifies the maximum number of products that can be returned per request. If not specified, uses a default value of 100, which is also the maximum retrievable within a single response.
   * @param {string=} params.query The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps).
   * @param {string=} params.token A pagination token is contained in a request''s response when there are more products. The token can be used in a subsequent request to obtain more products, and so forth. This parameter cannot be used in the initial request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProductsListResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductsListResponse>,
      callback?: BodyResponseCallback<Schema$ProductsListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductsListResponse>,
      callback?: BodyResponseCallback<Schema$ProductsListResponse>):
      void|AxiosPromise<Schema$ProductsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/androidenterprise/v1/enterprises/{enterpriseId}/products')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProductsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProductsListResponse>(parameters);
    }
  }


  /**
   * androidenterprise.products.unapprove
   * @desc Unapproves the specified product (and the relevant app permissions,
   * if any)
   * @alias androidenterprise.products.unapprove
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.productId The ID of the product.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  unapprove(params?: any, options?: MethodOptions): AxiosPromise<void>;
  unapprove(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  unapprove(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/unapprove')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'productId'],
      pathParams: ['enterpriseId', 'productId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}

export class Resource$Serviceaccountkeys {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.serviceaccountkeys.delete
   * @desc Removes and invalidates the specified credentials for the service
   * account associated with this enterprise. The calling service account must
   * have been retrieved by calling Enterprises.GetServiceAccount and must have
   * been set as the enterprise service account by calling
   * Enterprises.SetAccount.
   * @alias androidenterprise.serviceaccountkeys.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.keyId The ID of the key.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys/{keyId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'keyId'],
      pathParams: ['enterpriseId', 'keyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.serviceaccountkeys.insert
   * @desc Generates new credentials for the service account associated with
   * this enterprise. The calling service account must have been retrieved by
   * calling Enterprises.GetServiceAccount and must have been set as the
   * enterprise service account by calling Enterprises.SetAccount.  Only the
   * type of the key should be populated in the resource to be inserted.
   * @alias androidenterprise.serviceaccountkeys.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {().ServiceAccountKey} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ServiceAccountKey>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccountKey>,
      callback?: BodyResponseCallback<Schema$ServiceAccountKey>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccountKey>,
      callback?: BodyResponseCallback<Schema$ServiceAccountKey>):
      void|AxiosPromise<Schema$ServiceAccountKey> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ServiceAccountKey>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ServiceAccountKey>(parameters);
    }
  }


  /**
   * androidenterprise.serviceaccountkeys.list
   * @desc Lists all active credentials for the service account associated with
   * this enterprise. Only the ID and key type are returned. The calling service
   * account must have been retrieved by calling Enterprises.GetServiceAccount
   * and must have been set as the enterprise service account by calling
   * Enterprises.SetAccount.
   * @alias androidenterprise.serviceaccountkeys.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ServiceAccountKeysListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ServiceAccountKeysListResponse>,
      callback?: BodyResponseCallback<Schema$ServiceAccountKeysListResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ServiceAccountKeysListResponse>,
      callback?: BodyResponseCallback<Schema$ServiceAccountKeysListResponse>):
      void|AxiosPromise<Schema$ServiceAccountKeysListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ServiceAccountKeysListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ServiceAccountKeysListResponse>(
          parameters);
    }
  }
}

export class Resource$Storelayoutclusters {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.storelayoutclusters.delete
   * @desc Deletes a cluster.
   * @alias androidenterprise.storelayoutclusters.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.clusterId The ID of the cluster.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.pageId The ID of the page.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'pageId', 'clusterId'],
      pathParams: ['clusterId', 'enterpriseId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.storelayoutclusters.get
   * @desc Retrieves details of a cluster.
   * @alias androidenterprise.storelayoutclusters.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.clusterId The ID of the cluster.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.pageId The ID of the page.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$StoreCluster>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StoreCluster>,
      callback?: BodyResponseCallback<Schema$StoreCluster>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StoreCluster>,
      callback?: BodyResponseCallback<Schema$StoreCluster>):
      void|AxiosPromise<Schema$StoreCluster> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'pageId', 'clusterId'],
      pathParams: ['clusterId', 'enterpriseId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StoreCluster>(parameters, callback);
    } else {
      return createAPIRequest<Schema$StoreCluster>(parameters);
    }
  }


  /**
   * androidenterprise.storelayoutclusters.insert
   * @desc Inserts a new cluster in a page.
   * @alias androidenterprise.storelayoutclusters.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.pageId The ID of the page.
   * @param {().StoreCluster} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$StoreCluster>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StoreCluster>,
      callback?: BodyResponseCallback<Schema$StoreCluster>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StoreCluster>,
      callback?: BodyResponseCallback<Schema$StoreCluster>):
      void|AxiosPromise<Schema$StoreCluster> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'pageId'],
      pathParams: ['enterpriseId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StoreCluster>(parameters, callback);
    } else {
      return createAPIRequest<Schema$StoreCluster>(parameters);
    }
  }


  /**
   * androidenterprise.storelayoutclusters.list
   * @desc Retrieves the details of all clusters on the specified page.
   * @alias androidenterprise.storelayoutclusters.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.pageId The ID of the page.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$StoreLayoutClustersListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$StoreLayoutClustersListResponse>,
      callback?: BodyResponseCallback<Schema$StoreLayoutClustersListResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$StoreLayoutClustersListResponse>,
      callback?: BodyResponseCallback<Schema$StoreLayoutClustersListResponse>):
      void|AxiosPromise<Schema$StoreLayoutClustersListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'pageId'],
      pathParams: ['enterpriseId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StoreLayoutClustersListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$StoreLayoutClustersListResponse>(
          parameters);
    }
  }


  /**
   * androidenterprise.storelayoutclusters.patch
   * @desc Updates a cluster. This method supports patch semantics.
   * @alias androidenterprise.storelayoutclusters.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.clusterId The ID of the cluster.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.pageId The ID of the page.
   * @param {().StoreCluster} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$StoreCluster>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StoreCluster>,
      callback?: BodyResponseCallback<Schema$StoreCluster>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StoreCluster>,
      callback?: BodyResponseCallback<Schema$StoreCluster>):
      void|AxiosPromise<Schema$StoreCluster> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'pageId', 'clusterId'],
      pathParams: ['clusterId', 'enterpriseId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StoreCluster>(parameters, callback);
    } else {
      return createAPIRequest<Schema$StoreCluster>(parameters);
    }
  }


  /**
   * androidenterprise.storelayoutclusters.update
   * @desc Updates a cluster.
   * @alias androidenterprise.storelayoutclusters.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.clusterId The ID of the cluster.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.pageId The ID of the page.
   * @param {().StoreCluster} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$StoreCluster>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StoreCluster>,
      callback?: BodyResponseCallback<Schema$StoreCluster>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StoreCluster>,
      callback?: BodyResponseCallback<Schema$StoreCluster>):
      void|AxiosPromise<Schema$StoreCluster> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'pageId', 'clusterId'],
      pathParams: ['clusterId', 'enterpriseId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StoreCluster>(parameters, callback);
    } else {
      return createAPIRequest<Schema$StoreCluster>(parameters);
    }
  }
}

export class Resource$Storelayoutpages {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.storelayoutpages.delete
   * @desc Deletes a store page.
   * @alias androidenterprise.storelayoutpages.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.pageId The ID of the page.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'pageId'],
      pathParams: ['enterpriseId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.storelayoutpages.get
   * @desc Retrieves details of a store page.
   * @alias androidenterprise.storelayoutpages.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.pageId The ID of the page.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$StorePage>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StorePage>,
      callback?: BodyResponseCallback<Schema$StorePage>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StorePage>,
      callback?: BodyResponseCallback<Schema$StorePage>):
      void|AxiosPromise<Schema$StorePage> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'pageId'],
      pathParams: ['enterpriseId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StorePage>(parameters, callback);
    } else {
      return createAPIRequest<Schema$StorePage>(parameters);
    }
  }


  /**
   * androidenterprise.storelayoutpages.insert
   * @desc Inserts a new store page.
   * @alias androidenterprise.storelayoutpages.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {().StorePage} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$StorePage>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StorePage>,
      callback?: BodyResponseCallback<Schema$StorePage>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StorePage>,
      callback?: BodyResponseCallback<Schema$StorePage>):
      void|AxiosPromise<Schema$StorePage> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StorePage>(parameters, callback);
    } else {
      return createAPIRequest<Schema$StorePage>(parameters);
    }
  }


  /**
   * androidenterprise.storelayoutpages.list
   * @desc Retrieves the details of all pages in the store.
   * @alias androidenterprise.storelayoutpages.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$StoreLayoutPagesListResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$StoreLayoutPagesListResponse>,
      callback?: BodyResponseCallback<Schema$StoreLayoutPagesListResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$StoreLayoutPagesListResponse>,
      callback?: BodyResponseCallback<Schema$StoreLayoutPagesListResponse>):
      void|AxiosPromise<Schema$StoreLayoutPagesListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StoreLayoutPagesListResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$StoreLayoutPagesListResponse>(parameters);
    }
  }


  /**
   * androidenterprise.storelayoutpages.patch
   * @desc Updates the content of a store page. This method supports patch
   * semantics.
   * @alias androidenterprise.storelayoutpages.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.pageId The ID of the page.
   * @param {().StorePage} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$StorePage>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StorePage>,
      callback?: BodyResponseCallback<Schema$StorePage>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StorePage>,
      callback?: BodyResponseCallback<Schema$StorePage>):
      void|AxiosPromise<Schema$StorePage> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'pageId'],
      pathParams: ['enterpriseId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StorePage>(parameters, callback);
    } else {
      return createAPIRequest<Schema$StorePage>(parameters);
    }
  }


  /**
   * androidenterprise.storelayoutpages.update
   * @desc Updates the content of a store page.
   * @alias androidenterprise.storelayoutpages.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.pageId The ID of the page.
   * @param {().StorePage} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$StorePage>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StorePage>,
      callback?: BodyResponseCallback<Schema$StorePage>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$StorePage>,
      callback?: BodyResponseCallback<Schema$StorePage>):
      void|AxiosPromise<Schema$StorePage> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'pageId'],
      pathParams: ['enterpriseId', 'pageId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StorePage>(parameters, callback);
    } else {
      return createAPIRequest<Schema$StorePage>(parameters);
    }
  }
}

export class Resource$Users {
  root: Androidenterprise;
  constructor(root: Androidenterprise) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * androidenterprise.users.delete
   * @desc Deleted an EMM-managed user.
   * @alias androidenterprise.users.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.users.generateAuthenticationToken
   * @desc Generates an authentication token which the device policy client can
   * use to provision the given EMM-managed user account on a device. The
   * generated token is single-use and expires after a few minutes.  This call
   * only works with EMM-managed accounts.
   * @alias androidenterprise.users.generateAuthenticationToken
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  generateAuthenticationToken(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AuthenticationToken>;
  generateAuthenticationToken(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AuthenticationToken>,
      callback?: BodyResponseCallback<Schema$AuthenticationToken>): void;
  generateAuthenticationToken(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AuthenticationToken>,
      callback?: BodyResponseCallback<Schema$AuthenticationToken>):
      void|AxiosPromise<Schema$AuthenticationToken> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/authenticationToken')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AuthenticationToken>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AuthenticationToken>(parameters);
    }
  }


  /**
   * androidenterprise.users.generateToken
   * @desc Generates a token (activation code) to allow this user to configure
   * their managed account in the Android Setup Wizard. Revokes any previously
   * generated token.  This call only works with Google managed accounts.
   * @alias androidenterprise.users.generateToken
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  generateToken(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$UserToken>;
  generateToken(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserToken>,
      callback?: BodyResponseCallback<Schema$UserToken>): void;
  generateToken(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UserToken>,
      callback?: BodyResponseCallback<Schema$UserToken>):
      void|AxiosPromise<Schema$UserToken> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/token')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UserToken>(parameters, callback);
    } else {
      return createAPIRequest<Schema$UserToken>(parameters);
    }
  }


  /**
   * androidenterprise.users.get
   * @desc Retrieves a user's details.
   * @alias androidenterprise.users.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$User>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>):
      void|AxiosPromise<Schema$User> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$User>(parameters, callback);
    } else {
      return createAPIRequest<Schema$User>(parameters);
    }
  }


  /**
   * androidenterprise.users.getAvailableProductSet
   * @desc Retrieves the set of products a user is entitled to access.
   * @alias androidenterprise.users.getAvailableProductSet
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getAvailableProductSet(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProductSet>;
  getAvailableProductSet(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductSet>,
      callback?: BodyResponseCallback<Schema$ProductSet>): void;
  getAvailableProductSet(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductSet>,
      callback?: BodyResponseCallback<Schema$ProductSet>):
      void|AxiosPromise<Schema$ProductSet> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProductSet>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProductSet>(parameters);
    }
  }


  /**
   * androidenterprise.users.insert
   * @desc Creates a new EMM-managed user.  The Users resource passed in the
   * body of the request should include an accountIdentifier and an accountType.
   * If a corresponding user already exists with the same account identifier,
   * the user will be updated with the resource. In this case only the
   * displayName field can be changed.
   * @alias androidenterprise.users.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {().User} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$User>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>):
      void|AxiosPromise<Schema$User> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/androidenterprise/v1/enterprises/{enterpriseId}/users')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['enterpriseId'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$User>(parameters, callback);
    } else {
      return createAPIRequest<Schema$User>(parameters);
    }
  }


  /**
   * androidenterprise.users.list
   * @desc Looks up a user by primary email address. This is only supported for
   * Google-managed users. Lookup of the id is not needed for EMM-managed users
   * because the id is already returned in the result of the Users.insert call.
   * @alias androidenterprise.users.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.email The exact primary email address of the user to look up.
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$UsersListResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UsersListResponse>,
      callback?: BodyResponseCallback<Schema$UsersListResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UsersListResponse>,
      callback?: BodyResponseCallback<Schema$UsersListResponse>):
      void|AxiosPromise<Schema$UsersListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/androidenterprise/v1/enterprises/{enterpriseId}/users')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'email'],
      pathParams: ['enterpriseId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UsersListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$UsersListResponse>(parameters);
    }
  }


  /**
   * androidenterprise.users.patch
   * @desc Updates the details of an EMM-managed user.  Can be used with
   * EMM-managed users only (not Google managed users). Pass the new details in
   * the Users resource in the request body. Only the displayName field can be
   * changed. Other fields must either be unset or have the currently active
   * value. This method supports patch semantics.
   * @alias androidenterprise.users.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {().User} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$User>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>):
      void|AxiosPromise<Schema$User> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$User>(parameters, callback);
    } else {
      return createAPIRequest<Schema$User>(parameters);
    }
  }


  /**
   * androidenterprise.users.revokeDeviceAccess
   * @desc Revokes access to all devices currently provisioned to the user. The
   * user will no longer be able to use the managed Play store on any of their
   * managed devices.  This call only works with EMM-managed accounts.
   * @alias androidenterprise.users.revokeDeviceAccess
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  revokeDeviceAccess(params?: any, options?: MethodOptions): AxiosPromise<void>;
  revokeDeviceAccess(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  revokeDeviceAccess(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/deviceAccess')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.users.revokeToken
   * @desc Revokes a previously generated token (activation code) for the user.
   * @alias androidenterprise.users.revokeToken
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  revokeToken(params?: any, options?: MethodOptions): AxiosPromise<void>;
  revokeToken(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  revokeToken(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/token')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * androidenterprise.users.setAvailableProductSet
   * @desc Modifies the set of products that a user is entitled to access
   * (referred to as whitelisted products). Only products that are approved or
   * products that were previously approved (products with revoked approval) can
   * be whitelisted.
   * @alias androidenterprise.users.setAvailableProductSet
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {().ProductSet} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setAvailableProductSet(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProductSet>;
  setAvailableProductSet(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductSet>,
      callback?: BodyResponseCallback<Schema$ProductSet>): void;
  setAvailableProductSet(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProductSet>,
      callback?: BodyResponseCallback<Schema$ProductSet>):
      void|AxiosPromise<Schema$ProductSet> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProductSet>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProductSet>(parameters);
    }
  }


  /**
   * androidenterprise.users.update
   * @desc Updates the details of an EMM-managed user.  Can be used with
   * EMM-managed users only (not Google managed users). Pass the new details in
   * the Users resource in the request body. Only the displayName field can be
   * changed. Other fields must either be unset or have the currently active
   * value.
   * @alias androidenterprise.users.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.enterpriseId The ID of the enterprise.
   * @param {string} params.userId The ID of the user.
   * @param {().User} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$User>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$User>,
      callback?: BodyResponseCallback<Schema$User>):
      void|AxiosPromise<Schema$User> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['enterpriseId', 'userId'],
      pathParams: ['enterpriseId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$User>(parameters, callback);
    } else {
      return createAPIRequest<Schema$User>(parameters);
    }
  }
}
