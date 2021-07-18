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

export namespace testing_v1 {
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
   * Cloud Testing API
   *
   * Allows developers to run automated tests for their mobile applications on Google infrastructure.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const testing = google.testing('v1');
   * ```
   */
  export class Testing {
    context: APIRequestContext;
    applicationDetailService: Resource$Applicationdetailservice;
    projects: Resource$Projects;
    testEnvironmentCatalog: Resource$Testenvironmentcatalog;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.applicationDetailService = new Resource$Applicationdetailservice(
        this.context
      );
      this.projects = new Resource$Projects(this.context);
      this.testEnvironmentCatalog = new Resource$Testenvironmentcatalog(
        this.context
      );
    }
  }

  /**
   * Identifies an account and how to log into it.
   */
  export interface Schema$Account {
    /**
     * An automatic google login account.
     */
    googleAuto?: Schema$GoogleAuto;
  }
  /**
   * A single Android device.
   */
  export interface Schema$AndroidDevice {
    /**
     * Required. The id of the Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    androidModelId?: string | null;
    /**
     * Required. The id of the Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    androidVersionId?: string | null;
    /**
     * Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    locale?: string | null;
    /**
     * Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    orientation?: string | null;
  }
  /**
   * The currently supported Android devices.
   */
  export interface Schema$AndroidDeviceCatalog {
    /**
     * The set of supported Android device models.
     */
    models?: Schema$AndroidModel[];
    /**
     * The set of supported runtime configurations.
     */
    runtimeConfiguration?: Schema$AndroidRuntimeConfiguration;
    /**
     * The set of supported Android OS versions.
     */
    versions?: Schema$AndroidVersion[];
  }
  /**
   * A list of Android device configurations in which the test is to be executed.
   */
  export interface Schema$AndroidDeviceList {
    /**
     * Required. A list of Android devices.
     */
    androidDevices?: Schema$AndroidDevice[];
  }
  /**
   * A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.
   */
  export interface Schema$AndroidInstrumentationTest {
    /**
     * The APK for the application under test.
     */
    appApk?: Schema$FileReference;
    /**
     * A multi-apk app bundle for the application under test.
     */
    appBundle?: Schema$AppBundle;
    /**
     * The java package for the application under test. The default value is determined by examining the application's manifest.
     */
    appPackageId?: string | null;
    /**
     * The option of whether running each test within its own invocation of instrumentation with Android Test Orchestrator or not. ** Orchestrator is only compatible with AndroidJUnitRunner version 1.0 or higher! ** Orchestrator offers the following benefits: - No shared state - Crashes are isolated - Logs are scoped per test See for more information about Android Test Orchestrator. If not set, the test will be run without the orchestrator.
     */
    orchestratorOption?: string | null;
    /**
     * The option to run tests in multiple shards in parallel.
     */
    shardingOption?: Schema$ShardingOption;
    /**
     * Required. The APK containing the test code to be executed.
     */
    testApk?: Schema$FileReference;
    /**
     * The java package for the test to be executed. The default value is determined by examining the application's manifest.
     */
    testPackageId?: string | null;
    /**
     * The InstrumentationTestRunner class. The default value is determined by examining the application's manifest.
     */
    testRunnerClass?: string | null;
    /**
     * Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run.
     */
    testTargets?: string[] | null;
  }
  /**
   * A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.
   */
  export interface Schema$AndroidMatrix {
    /**
     * Required. The ids of the set of Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    androidModelIds?: string[] | null;
    /**
     * Required. The ids of the set of Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    androidVersionIds?: string[] | null;
    /**
     * Required. The set of locales the test device will enable for testing. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    locales?: string[] | null;
    /**
     * Required. The set of orientations to test with. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    orientations?: string[] | null;
  }
  /**
   * A description of an Android device tests may be run on.
   */
  export interface Schema$AndroidModel {
    /**
     * The company that this device is branded with. Example: "Google", "Samsung".
     */
    brand?: string | null;
    /**
     * The name of the industrial design. This corresponds to android.os.Build.DEVICE.
     */
    codename?: string | null;
    /**
     * Whether this device is virtual or physical.
     */
    form?: string | null;
    /**
     * Whether this device is a phone, tablet, wearable, etc.
     */
    formFactor?: string | null;
    /**
     * The unique opaque id for this model. Use this for invoking the TestExecutionService.
     */
    id?: string | null;
    /**
     * True if and only if tests with this model are recorded by stitching together screenshots. See use_low_spec_video_recording in device config.
     */
    lowFpsVideoRecording?: boolean | null;
    /**
     * The manufacturer of this device.
     */
    manufacturer?: string | null;
    /**
     * The human-readable marketing name for this device model. Examples: "Nexus 5", "Galaxy S5".
     */
    name?: string | null;
    /**
     * Screen density in DPI. This corresponds to ro.sf.lcd_density
     */
    screenDensity?: number | null;
    /**
     * Screen size in the horizontal (X) dimension measured in pixels.
     */
    screenX?: number | null;
    /**
     * Screen size in the vertical (Y) dimension measured in pixels.
     */
    screenY?: number | null;
    /**
     * The list of supported ABIs for this device. This corresponds to either android.os.Build.SUPPORTED_ABIS (for API level 21 and above) or android.os.Build.CPU_ABI/CPU_ABI2. The most preferred ABI is the first element in the list. Elements are optionally prefixed by "version_id:" (where version_id is the id of an AndroidVersion), denoting an ABI that is supported only on a particular version.
     */
    supportedAbis?: string[] | null;
    /**
     * The set of Android versions this device supports.
     */
    supportedVersionIds?: string[] | null;
    /**
     * Tags for this dimension. Examples: "default", "preview", "deprecated".
     */
    tags?: string[] | null;
    /**
     * URL of a thumbnail image (photo) of the device. e.g. https://lh3.googleusercontent.com/90WcauuJiCYABEl8U0lcZeuS5STUbf2yW...
     */
    thumbnailUrl?: string | null;
  }
  /**
   * A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes. Next tag: 30
   */
  export interface Schema$AndroidRoboTest {
    /**
     * The APK for the application under test.
     */
    appApk?: Schema$FileReference;
    /**
     * A multi-apk app bundle for the application under test.
     */
    appBundle?: Schema$AppBundle;
    /**
     * The initial activity that should be used to start the app.
     */
    appInitialActivity?: string | null;
    /**
     * The java package for the application under test. The default value is determined by examining the application's manifest.
     */
    appPackageId?: string | null;
    /**
     * The max depth of the traversal stack Robo can explore. Needs to be at least 2 to make Robo explore the app beyond the first activity. Default is 50.
     */
    maxDepth?: number | null;
    /**
     * The max number of steps Robo can execute. Default is no limit.
     */
    maxSteps?: number | null;
    /**
     * A set of directives Robo should apply during the crawl. This allows users to customize the crawl. For example, the username and password for a test account can be provided.
     */
    roboDirectives?: Schema$RoboDirective[];
    /**
     * The mode in which Robo should run. Most clients should allow the server to populate this field automatically.
     */
    roboMode?: string | null;
    /**
     * A JSON file with a sequence of actions Robo should perform as a prologue for the crawl.
     */
    roboScript?: Schema$FileReference;
    /**
     * The intents used to launch the app for the crawl. If none are provided, then the main launcher activity is launched. If some are provided, then only those provided are launched (the main launcher activity must be provided explicitly).
     */
    startingIntents?: Schema$RoboStartingIntent[];
  }
  /**
   * Android configuration that can be selected at the time a test is run.
   */
  export interface Schema$AndroidRuntimeConfiguration {
    /**
     * The set of available locales.
     */
    locales?: Schema$Locale[];
    /**
     * The set of available orientations.
     */
    orientations?: Schema$Orientation[];
  }
  /**
   * A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being.
   */
  export interface Schema$AndroidTestLoop {
    /**
     * The APK for the application under test.
     */
    appApk?: Schema$FileReference;
    /**
     * A multi-apk app bundle for the application under test.
     */
    appBundle?: Schema$AppBundle;
    /**
     * The java package for the application under test. The default is determined by examining the application's manifest.
     */
    appPackageId?: string | null;
    /**
     * The list of scenario labels that should be run during the test. The scenario labels should map to labels defined in the application's manifest. For example, player_experience and com.google.test.loops.player_experience add all of the loops labeled in the manifest with the com.google.test.loops.player_experience name to the execution. Scenarios can also be specified in the scenarios field.
     */
    scenarioLabels?: string[] | null;
    /**
     * The list of scenarios that should be run during the test. The default is all test loops, derived from the application's manifest.
     */
    scenarios?: number[] | null;
  }
  /**
   * A version of the Android OS.
   */
  export interface Schema$AndroidVersion {
    /**
     * The API level for this Android version. Examples: 18, 19.
     */
    apiLevel?: number | null;
    /**
     * The code name for this Android version. Examples: "JellyBean", "KitKat".
     */
    codeName?: string | null;
    /**
     * Market share for this version.
     */
    distribution?: Schema$Distribution;
    /**
     * An opaque id for this Android version. Use this id to invoke the TestExecutionService.
     */
    id?: string | null;
    /**
     * The date this Android version became available in the market.
     */
    releaseDate?: Schema$Date;
    /**
     * Tags for this dimension. Examples: "default", "preview", "deprecated".
     */
    tags?: string[] | null;
    /**
     * A string representing this version of the Android OS. Examples: "4.3", "4.4".
     */
    versionString?: string | null;
  }
  /**
   * An Android package file to install.
   */
  export interface Schema$Apk {
    /**
     * The path to an APK to be installed on the device before the test begins.
     */
    location?: Schema$FileReference;
    /**
     * The java package for the APK to be installed. Value is determined by examining the application's manifest.
     */
    packageName?: string | null;
  }
  /**
   * Android application details based on application manifest and apk archive contents.
   */
  export interface Schema$ApkDetail {
    apkManifest?: Schema$ApkManifest;
  }
  /**
   * An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html
   */
  export interface Schema$ApkManifest {
    /**
     * User-readable name for the application.
     */
    applicationLabel?: string | null;
    intentFilters?: Schema$IntentFilter[];
    /**
     * Maximum API level on which the application is designed to run.
     */
    maxSdkVersion?: number | null;
    /**
     * Minimum API level required for the application to run.
     */
    minSdkVersion?: number | null;
    /**
     * Full Java-style package name for this application, e.g. "com.example.foo".
     */
    packageName?: string | null;
    /**
     * Specifies the API Level on which the application is designed to run.
     */
    targetSdkVersion?: number | null;
    /**
     * Permissions declared to be used by the application
     */
    usesPermission?: string[] | null;
  }
  /**
   * An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles.
   */
  export interface Schema$AppBundle {
    /**
     * .aab file representing the app bundle under test.
     */
    bundleLocation?: Schema$FileReference;
  }
  /**
   * Response containing the current state of the specified test matrix.
   */
  export interface Schema$CancelTestMatrixResponse {
    /**
     * The current rolled-up state of the test matrix. If this state is already final, then the cancelation request will have no effect.
     */
    testState?: string | null;
  }
  /**
   * Information about the client which invoked the test.
   */
  export interface Schema$ClientInfo {
    /**
     * The list of detailed information about client.
     */
    clientInfoDetails?: Schema$ClientInfoDetail[];
    /**
     * Required. Client name, such as gcloud.
     */
    name?: string | null;
  }
  /**
   * Key-value pair of detailed information about the client which invoked the test. Examples: {'Version', '1.0'\}, {'Release Track', 'BETA'\}.
   */
  export interface Schema$ClientInfoDetail {
    /**
     * Required. The key of detailed client information.
     */
    key?: string | null;
    /**
     * Required. The value of detailed client information.
     */
    value?: string | null;
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
   * A single device file description.
   */
  export interface Schema$DeviceFile {
    /**
     * A reference to an opaque binary blob file.
     */
    obbFile?: Schema$ObbFile;
    /**
     * A reference to a regular file.
     */
    regularFile?: Schema$RegularFile;
  }
  /**
   * A single device IP block
   */
  export interface Schema$DeviceIpBlock {
    /**
     * The date this block was added to Firebase Test Lab
     */
    addedDate?: Schema$Date;
    /**
     * An IP address block in CIDR notation eg: 34.68.194.64/29
     */
    block?: string | null;
    /**
     * Whether this block is used by physical or virtual devices
     */
    form?: string | null;
  }
  /**
   * List of IP blocks used by the Firebase Test Lab
   */
  export interface Schema$DeviceIpBlockCatalog {
    /**
     * The device IP blocks used by Firebase Test Lab
     */
    ipBlocks?: Schema$DeviceIpBlock[];
  }
  /**
   * Data about the relative number of devices running a given configuration of the Android platform.
   */
  export interface Schema$Distribution {
    /**
     * Output only. The estimated fraction (0-1) of the total market with this configuration.
     */
    marketShare?: number | null;
    /**
     * Output only. The time this distribution was measured.
     */
    measurementTime?: string | null;
  }
  /**
   * The environment in which the test is run.
   */
  export interface Schema$Environment {
    /**
     * An Android device which must be used with an Android test.
     */
    androidDevice?: Schema$AndroidDevice;
    /**
     * An iOS device which must be used with an iOS test.
     */
    iosDevice?: Schema$IosDevice;
  }
  /**
   * The matrix of environments in which the test is to be executed.
   */
  export interface Schema$EnvironmentMatrix {
    /**
     * A list of Android devices; the test will be run only on the specified devices.
     */
    androidDeviceList?: Schema$AndroidDeviceList;
    /**
     * A matrix of Android devices.
     */
    androidMatrix?: Schema$AndroidMatrix;
    /**
     * A list of iOS devices.
     */
    iosDeviceList?: Schema$IosDeviceList;
  }
  /**
   * A key-value pair passed as an environment variable to the test.
   */
  export interface Schema$EnvironmentVariable {
    /**
     * Key for the environment variable.
     */
    key?: string | null;
    /**
     * Value for the environment variable.
     */
    value?: string | null;
  }
  /**
   * A reference to a file, used for user inputs.
   */
  export interface Schema$FileReference {
    /**
     * A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding)
     */
    gcsPath?: string | null;
  }
  /**
   * Response containing the details of the specified Android application APK.
   */
  export interface Schema$GetApkDetailsResponse {
    /**
     * Details of the Android APK.
     */
    apkDetail?: Schema$ApkDetail;
  }
  /**
   * Enables automatic Google account login. If set, the service automatically generates a Google test account and adds it to the device, before executing the test. Note that test accounts might be reused. Many applications show their full set of functionalities when an account is present on the device. Logging into the device with these generated accounts allows testing more functionalities.
   */
  export interface Schema$GoogleAuto {}
  /**
   * A storage location within Google cloud storage (GCS).
   */
  export interface Schema$GoogleCloudStorage {
    /**
     * Required. The path to a directory in GCS that will eventually contain the results for this test. The requesting user must have write access on the bucket in the supplied path.
     */
    gcsPath?: string | null;
  }
  /**
   * The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html
   */
  export interface Schema$IntentFilter {
    /**
     * The android:name value of the tag.
     */
    actionNames?: string[] | null;
    /**
     * The android:name value of the tag.
     */
    categoryNames?: string[] | null;
    /**
     * The android:mimeType value of the tag.
     */
    mimeType?: string | null;
  }
  /**
   * A single iOS device.
   */
  export interface Schema$IosDevice {
    /**
     * Required. The id of the iOS device to be used. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    iosModelId?: string | null;
    /**
     * Required. The id of the iOS major software version to be used. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    iosVersionId?: string | null;
    /**
     * Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    locale?: string | null;
    /**
     * Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options.
     */
    orientation?: string | null;
  }
  /**
   * The currently supported iOS devices.
   */
  export interface Schema$IosDeviceCatalog {
    /**
     * The set of supported iOS device models.
     */
    models?: Schema$IosModel[];
    /**
     * The set of supported runtime configurations.
     */
    runtimeConfiguration?: Schema$IosRuntimeConfiguration;
    /**
     * The set of supported iOS software versions.
     */
    versions?: Schema$IosVersion[];
    /**
     * The set of supported Xcode versions.
     */
    xcodeVersions?: Schema$XcodeVersion[];
  }
  /**
   * A file or directory to install on the device before the test starts.
   */
  export interface Schema$IosDeviceFile {
    /**
     * The bundle id of the app where this file lives. iOS apps sandbox their own filesystem, so app files must specify which app installed on the device.
     */
    bundleId?: string | null;
    /**
     * The source file
     */
    content?: Schema$FileReference;
    /**
     * Location of the file on the device, inside the app's sandboxed filesystem
     */
    devicePath?: string | null;
  }
  /**
   * A list of iOS device configurations in which the test is to be executed.
   */
  export interface Schema$IosDeviceList {
    /**
     * Required. A list of iOS devices.
     */
    iosDevices?: Schema$IosDevice[];
  }
  /**
   * A description of an iOS device tests may be run on.
   */
  export interface Schema$IosModel {
    /**
     * Device capabilities. Copied from https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/DeviceCompatibilityMatrix/DeviceCompatibilityMatrix.html
     */
    deviceCapabilities?: string[] | null;
    /**
     * Whether this device is a phone, tablet, wearable, etc.
     */
    formFactor?: string | null;
    /**
     * The unique opaque id for this model. Use this for invoking the TestExecutionService.
     */
    id?: string | null;
    /**
     * The human-readable name for this device model. Examples: "iPhone 4s", "iPad Mini 2".
     */
    name?: string | null;
    /**
     * Screen density in DPI.
     */
    screenDensity?: number | null;
    /**
     * Screen size in the horizontal (X) dimension measured in pixels.
     */
    screenX?: number | null;
    /**
     * Screen size in the vertical (Y) dimension measured in pixels.
     */
    screenY?: number | null;
    /**
     * The set of iOS major software versions this device supports.
     */
    supportedVersionIds?: string[] | null;
    /**
     * Tags for this dimension. Examples: "default", "preview", "deprecated".
     */
    tags?: string[] | null;
  }
  /**
   * iOS configuration that can be selected at the time a test is run.
   */
  export interface Schema$IosRuntimeConfiguration {
    /**
     * The set of available locales.
     */
    locales?: Schema$Locale[];
    /**
     * The set of available orientations.
     */
    orientations?: Schema$Orientation[];
  }
  /**
   * A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially.
   */
  export interface Schema$IosTestLoop {
    /**
     * Output only. The bundle id for the application under test.
     */
    appBundleId?: string | null;
    /**
     * Required. The .ipa of the application to test.
     */
    appIpa?: Schema$FileReference;
    /**
     * The list of scenarios that should be run during the test. Defaults to the single scenario 0 if unspecified.
     */
    scenarios?: number[] | null;
  }
  /**
   * A description of how to set up an iOS device prior to running the test.
   */
  export interface Schema$IosTestSetup {
    /**
     * iOS apps to install in addition to those being directly tested.
     */
    additionalIpas?: Schema$FileReference[];
    /**
     * The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.
     */
    networkProfile?: string | null;
    /**
     * List of directories on the device to upload to Cloud Storage at the end of the test. Directories should either be in a shared directory (e.g. /private/var/mobile/Media) or within an accessible directory inside the app's filesystem (e.g. /Documents) by specifying the bundle id.
     */
    pullDirectories?: Schema$IosDeviceFile[];
    /**
     * List of files to push to the device before starting the test.
     */
    pushFiles?: Schema$IosDeviceFile[];
  }
  /**
   * An iOS version.
   */
  export interface Schema$IosVersion {
    /**
     * An opaque id for this iOS version. Use this id to invoke the TestExecutionService.
     */
    id?: string | null;
    /**
     * An integer representing the major iOS version. Examples: "8", "9".
     */
    majorVersion?: number | null;
    /**
     * An integer representing the minor iOS version. Examples: "1", "2".
     */
    minorVersion?: number | null;
    /**
     * The available Xcode versions for this version.
     */
    supportedXcodeVersionIds?: string[] | null;
    /**
     * Tags for this dimension. Examples: "default", "preview", "deprecated".
     */
    tags?: string[] | null;
  }
  /**
   * A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests.
   */
  export interface Schema$IosXcTest {
    /**
     * Output only. The bundle id for the application under test.
     */
    appBundleId?: string | null;
    /**
     * The option to test special app entitlements. Setting this would re-sign the app having special entitlements with an explicit application-identifier. Currently supports testing aps-environment entitlement.
     */
    testSpecialEntitlements?: boolean | null;
    /**
     * Required. The .zip containing the .xctestrun file and the contents of the DerivedData/Build/Products directory. The .xctestrun file in this zip is ignored if the xctestrun field is specified.
     */
    testsZip?: Schema$FileReference;
    /**
     * The Xcode version that should be used for the test. Use the TestEnvironmentDiscoveryService to get supported options. Defaults to the latest Xcode version Firebase Test Lab supports.
     */
    xcodeVersion?: string | null;
    /**
     * An .xctestrun file that will override the .xctestrun file in the tests zip. Because the .xctestrun file contains environment variables along with test methods to run and/or ignore, this can be useful for sharding tests. Default is taken from the tests zip.
     */
    xctestrun?: Schema$FileReference;
  }
  /**
   * Specifies an intent that starts the main launcher activity.
   */
  export interface Schema$LauncherActivityIntent {}
  /**
   * A location/region designation for language.
   */
  export interface Schema$Locale {
    /**
     * The id for this locale. Example: "en_US".
     */
    id?: string | null;
    /**
     * A human-friendly name for this language/locale. Example: "English".
     */
    name?: string | null;
    /**
     * A human-friendly string representing the region for this locale. Example: "United States". Not present for every locale.
     */
    region?: string | null;
    /**
     * Tags for this dimension. Example: "default".
     */
    tags?: string[] | null;
  }
  /**
   * Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid.
   */
  export interface Schema$ManualSharding {
    /**
     * Required. Group of packages, classes, and/or test methods to be run for each shard. When any physical devices are selected, the number of test_targets_for_shard must be \>= 1 and <= 50. When no physical devices are selected, the number must be \>= 1 and <= 500.
     */
    testTargetsForShard?: Schema$TestTargetsForShard[];
  }
  export interface Schema$NetworkConfiguration {
    /**
     * The emulation rule applying to the download traffic.
     */
    downRule?: Schema$TrafficRule;
    /**
     * The unique opaque id for this network traffic configuration.
     */
    id?: string | null;
    /**
     * The emulation rule applying to the upload traffic.
     */
    upRule?: Schema$TrafficRule;
  }
  export interface Schema$NetworkConfigurationCatalog {
    configurations?: Schema$NetworkConfiguration[];
  }
  /**
   * An opaque binary blob file to install on the device before the test starts.
   */
  export interface Schema$ObbFile {
    /**
     * Required. Opaque Binary Blob (OBB) file(s) to install on the device.
     */
    obb?: Schema$FileReference;
    /**
     * Required. OBB file name which must conform to the format as specified by Android e.g. [main|patch].0300110.com.example.android.obb which will be installed into \/Android/obb/\/ on the device.
     */
    obbFileName?: string | null;
  }
  /**
   * Screen orientation of the device.
   */
  export interface Schema$Orientation {
    /**
     * The id for this orientation. Example: "portrait".
     */
    id?: string | null;
    /**
     * A human-friendly name for this orientation. Example: "portrait".
     */
    name?: string | null;
    /**
     * Tags for this dimension. Example: "default".
     */
    tags?: string[] | null;
  }
  /**
   * The currently provided software environment on the devices under test.
   */
  export interface Schema$ProvidedSoftwareCatalog {
    /**
     * A string representing the current version of AndroidX Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#androidx.test:orchestrator.
     */
    androidxOrchestratorVersion?: string | null;
    /**
     * A string representing the current version of Android Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#com.android.support.test:orchestrator.
     */
    orchestratorVersion?: string | null;
  }
  /**
   * A file or directory to install on the device before the test starts.
   */
  export interface Schema$RegularFile {
    /**
     * Required. The source file.
     */
    content?: Schema$FileReference;
    /**
     * Required. Where to put the content on the device. Must be an absolute, allowlisted path. If the file exists, it will be replaced. The following device-side directories and any of their subdirectories are allowlisted: ${EXTERNAL_STORAGE\}, /sdcard, or /storage ${ANDROID_DATA\}/local/tmp, or /data/local/tmp Specifying a path outside of these directory trees is invalid. The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device and copy the file there. It is strongly advised to use the Environment API in app and test code to access files on the device in a portable way.
     */
    devicePath?: string | null;
  }
  /**
   * Locations where the results of running the test are stored.
   */
  export interface Schema$ResultStorage {
    /**
     * Required.
     */
    googleCloudStorage?: Schema$GoogleCloudStorage;
    /**
     * Output only. URL to the results in the Firebase Web Console.
     */
    resultsUrl?: string | null;
    /**
     * Output only. The tool results execution that results are written to.
     */
    toolResultsExecution?: Schema$ToolResultsExecution;
    /**
     * The tool results history that contains the tool results execution that results are written to. If not provided, the service will choose an appropriate value.
     */
    toolResultsHistory?: Schema$ToolResultsHistory;
  }
  /**
   * Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click.
   */
  export interface Schema$RoboDirective {
    /**
     * Required. The type of action that Robo should perform on the specified element.
     */
    actionType?: string | null;
    /**
     * The text that Robo is directed to set. If left empty, the directive will be treated as a CLICK on the element matching the resource_name.
     */
    inputText?: string | null;
    /**
     * Required. The android resource name of the target UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html
     */
    resourceName?: string | null;
  }
  /**
   * Message for specifying the start activities to crawl.
   */
  export interface Schema$RoboStartingIntent {
    /**
     * An intent that starts the main launcher activity.
     */
    launcherActivity?: Schema$LauncherActivityIntent;
    /**
     * An intent that starts an activity with specific details.
     */
    startActivity?: Schema$StartActivityIntent;
    /**
     * Timeout in seconds for each intent.
     */
    timeout?: string | null;
  }
  /**
   * Output only. Details about the shard.
   */
  export interface Schema$Shard {
    /**
     * Output only. The total number of shards.
     */
    numShards?: number | null;
    /**
     * Output only. The index of the shard among all the shards.
     */
    shardIndex?: number | null;
    /**
     * Output only. Test targets for each shard.
     */
    testTargetsForShard?: Schema$TestTargetsForShard;
  }
  /**
   * Options for enabling sharding.
   */
  export interface Schema$ShardingOption {
    /**
     * Shards test cases into the specified groups of packages, classes, and/or methods.
     */
    manualSharding?: Schema$ManualSharding;
    /**
     * Uniformly shards test cases given a total number of shards.
     */
    uniformSharding?: Schema$UniformSharding;
  }
  /**
   * A starting intent specified by an action, uri, and categories.
   */
  export interface Schema$StartActivityIntent {
    /**
     * Action name. Required for START_ACTIVITY.
     */
    action?: string | null;
    /**
     * Intent categories to set on the intent.
     */
    categories?: string[] | null;
    /**
     * URI for the action.
     */
    uri?: string | null;
  }
  export interface Schema$SystraceSetup {
    /**
     * Systrace duration in seconds. Should be between 1 and 30 seconds. 0 disables systrace.
     */
    durationSeconds?: number | null;
  }
  /**
   * Additional details about the progress of the running test.
   */
  export interface Schema$TestDetails {
    /**
     * Output only. If the TestState is ERROR, then this string will contain human-readable details about the error.
     */
    errorMessage?: string | null;
    /**
     * Output only. Human-readable, detailed descriptions of the test's progress. For example: "Provisioning a device", "Starting Test". During the course of execution new data may be appended to the end of progress_messages.
     */
    progressMessages?: string[] | null;
  }
  /**
   * A description of a test environment.
   */
  export interface Schema$TestEnvironmentCatalog {
    /**
     * Supported Android devices.
     */
    androidDeviceCatalog?: Schema$AndroidDeviceCatalog;
    /**
     * The IP blocks used by devices in the test environment.
     */
    deviceIpBlockCatalog?: Schema$DeviceIpBlockCatalog;
    /**
     * Supported iOS devices.
     */
    iosDeviceCatalog?: Schema$IosDeviceCatalog;
    /**
     * Supported network configurations.
     */
    networkConfigurationCatalog?: Schema$NetworkConfigurationCatalog;
    /**
     * The software test environment provided by TestExecutionService.
     */
    softwareCatalog?: Schema$ProvidedSoftwareCatalog;
  }
  /**
   * A single test executed in a single environment.
   */
  export interface Schema$TestExecution {
    /**
     * Output only. How the host machine(s) are configured.
     */
    environment?: Schema$Environment;
    /**
     * Output only. Unique id set by the service.
     */
    id?: string | null;
    /**
     * Output only. Id of the containing TestMatrix.
     */
    matrixId?: string | null;
    /**
     * Output only. The cloud project that owns the test execution.
     */
    projectId?: string | null;
    /**
     * Output only. Details about the shard.
     */
    shard?: Schema$Shard;
    /**
     * Output only. Indicates the current progress of the test execution (e.g., FINISHED).
     */
    state?: string | null;
    /**
     * Output only. Additional details about the running test.
     */
    testDetails?: Schema$TestDetails;
    /**
     * Output only. How to run the test.
     */
    testSpecification?: Schema$TestSpecification;
    /**
     * Output only. The time this test execution was initially created.
     */
    timestamp?: string | null;
    /**
     * Output only. Where the results for this execution are written.
     */
    toolResultsStep?: Schema$ToolResultsStep;
  }
  /**
   * TestMatrix captures all details about a test. It contains the environment configuration, test specification, test executions and overall state and outcome.
   */
  export interface Schema$TestMatrix {
    /**
     * Information about the client which invoked the test.
     */
    clientInfo?: Schema$ClientInfo;
    /**
     * Required. The devices the tests are being executed on.
     */
    environmentMatrix?: Schema$EnvironmentMatrix;
    /**
     * If true, only a single attempt at most will be made to run each execution/shard in the matrix. Flaky test attempts are not affected. Normally, 2 or more attempts are made if a potential infrastructure issue is detected. This feature is for latency sensitive workloads. The incidence of execution failures may be significantly greater for fail-fast matrices and support is more limited because of that expectation.
     */
    failFast?: boolean | null;
    /**
     * The number of times a TestExecution should be re-attempted if one or more of its test cases fail for any reason. The maximum number of reruns allowed is 10. Default is 0, which implies no reruns.
     */
    flakyTestAttempts?: number | null;
    /**
     * Output only. Describes why the matrix is considered invalid. Only useful for matrices in the INVALID state.
     */
    invalidMatrixDetails?: string | null;
    /**
     * Output Only. The overall outcome of the test. Only set when the test matrix state is FINISHED.
     */
    outcomeSummary?: string | null;
    /**
     * The cloud project that owns the test matrix.
     */
    projectId?: string | null;
    /**
     * Required. Where the results for the matrix are written.
     */
    resultStorage?: Schema$ResultStorage;
    /**
     * Output only. Indicates the current progress of the test matrix.
     */
    state?: string | null;
    /**
     * Output only. The list of test executions that the service creates for this matrix.
     */
    testExecutions?: Schema$TestExecution[];
    /**
     * Output only. Unique id set by the service.
     */
    testMatrixId?: string | null;
    /**
     * Required. How to run the test.
     */
    testSpecification?: Schema$TestSpecification;
    /**
     * Output only. The time this test matrix was initially created.
     */
    timestamp?: string | null;
  }
  /**
   * A description of how to set up the Android device prior to running the test.
   */
  export interface Schema$TestSetup {
    /**
     * The device will be logged in on this account for the duration of the test.
     */
    account?: Schema$Account;
    /**
     * APKs to install in addition to those being directly tested. Currently capped at 100.
     */
    additionalApks?: Schema$Apk[];
    /**
     * List of directories on the device to upload to GCS at the end of the test; they must be absolute paths under /sdcard, /storage or /data/local/tmp. Path names are restricted to characters a-z A-Z 0-9 _ - . + and / Note: The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device.
     */
    directoriesToPull?: string[] | null;
    /**
     * Whether to prevent all runtime permissions to be granted at app install
     */
    dontAutograntPermissions?: boolean | null;
    /**
     * Environment variables to set for the test (only applicable for instrumentation tests).
     */
    environmentVariables?: Schema$EnvironmentVariable[];
    /**
     * List of files to push to the device before starting the test.
     */
    filesToPush?: Schema$DeviceFile[];
    /**
     * The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.
     */
    networkProfile?: string | null;
    /**
     * Deprecated: Systrace uses Python 2 which has been sunset 2020-01-01. Support of Systrace may stop at any time, at which point no Systrace file will be provided in the results. Systrace configuration for the run. If set a systrace will be taken, starting on test start and lasting for the configured duration. The systrace file thus obtained is put in the results bucket together with the other artifacts from the run.
     */
    systrace?: Schema$SystraceSetup;
  }
  /**
   * A description of how to run the test.
   */
  export interface Schema$TestSpecification {
    /**
     * An Android instrumentation test.
     */
    androidInstrumentationTest?: Schema$AndroidInstrumentationTest;
    /**
     * An Android robo test.
     */
    androidRoboTest?: Schema$AndroidRoboTest;
    /**
     * An Android Application with a Test Loop.
     */
    androidTestLoop?: Schema$AndroidTestLoop;
    /**
     * Disables performance metrics recording. May reduce test latency.
     */
    disablePerformanceMetrics?: boolean | null;
    /**
     * Disables video recording. May reduce test latency.
     */
    disableVideoRecording?: boolean | null;
    /**
     * An iOS application with a test loop.
     */
    iosTestLoop?: Schema$IosTestLoop;
    /**
     * Test setup requirements for iOS.
     */
    iosTestSetup?: Schema$IosTestSetup;
    /**
     * An iOS XCTest, via an .xctestrun file.
     */
    iosXcTest?: Schema$IosXcTest;
    /**
     * Test setup requirements for Android e.g. files to install, bootstrap scripts.
     */
    testSetup?: Schema$TestSetup;
    /**
     * Max time a test execution is allowed to run before it is automatically cancelled. The default value is 5 min.
     */
    testTimeout?: string | null;
  }
  /**
   * Test targets for a shard.
   */
  export interface Schema$TestTargetsForShard {
    /**
     * Group of packages, classes, and/or test methods to be run for each shard. The targets need to be specified in AndroidJUnitRunner argument format. For example, "package com.my.packages" "class com.my.package.MyClass". The number of shard_test_targets must be greater than 0.
     */
    testTargets?: string[] | null;
  }
  /**
   * Represents a tool results execution resource. This has the results of a TestMatrix.
   */
  export interface Schema$ToolResultsExecution {
    /**
     * Output only. A tool results execution ID.
     */
    executionId?: string | null;
    /**
     * Output only. A tool results history ID.
     */
    historyId?: string | null;
    /**
     * Output only. The cloud project that owns the tool results execution.
     */
    projectId?: string | null;
  }
  /**
   * Represents a tool results history resource.
   */
  export interface Schema$ToolResultsHistory {
    /**
     * Required. A tool results history ID.
     */
    historyId?: string | null;
    /**
     * Required. The cloud project that owns the tool results history.
     */
    projectId?: string | null;
  }
  /**
   * Represents a tool results step resource. This has the results of a TestExecution.
   */
  export interface Schema$ToolResultsStep {
    /**
     * Output only. A tool results execution ID.
     */
    executionId?: string | null;
    /**
     * Output only. A tool results history ID.
     */
    historyId?: string | null;
    /**
     * Output only. The cloud project that owns the tool results step.
     */
    projectId?: string | null;
    /**
     * Output only. A tool results step ID.
     */
    stepId?: string | null;
  }
  /**
   * Network emulation parameters.
   */
  export interface Schema$TrafficRule {
    /**
     * Bandwidth in kbits/second.
     */
    bandwidth?: number | null;
    /**
     * Burst size in kbits.
     */
    burst?: number | null;
    /**
     * Packet delay, must be \>= 0.
     */
    delay?: string | null;
    /**
     * Packet duplication ratio (0.0 - 1.0).
     */
    packetDuplicationRatio?: number | null;
    /**
     * Packet loss ratio (0.0 - 1.0).
     */
    packetLossRatio?: number | null;
  }
  /**
   * Uniformly shards test cases given a total number of shards. For Instrumentation test, it will be translated to "-e numShard" "-e shardIndex" AndroidJUnitRunner arguments. With uniform sharding enabled, specifying these sharding arguments via environment_variables is invalid.
   */
  export interface Schema$UniformSharding {
    /**
     * Required. Total number of shards. When any physical devices are selected, the number must be \>= 1 and <= 50. When no physical devices are selected, the number must be \>= 1 and <= 500.
     */
    numShards?: number | null;
  }
  /**
   * An Xcode version that an iOS version is compatible with.
   */
  export interface Schema$XcodeVersion {
    /**
     * Tags for this Xcode version. Example: "default".
     */
    tags?: string[] | null;
    /**
     * The id for this version. Example: "9.2".
     */
    version?: string | null;
  }

  export class Resource$Applicationdetailservice {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the details of an Android application APK.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/testing.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const testing = google.testing('v1');
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
     *   const res = await testing.applicationDetailService.getApkDetails({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "gcsPath": "my_gcsPath"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apkDetail": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getApkDetails(
      params: Params$Resource$Applicationdetailservice$Getapkdetails,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getApkDetails(
      params?: Params$Resource$Applicationdetailservice$Getapkdetails,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetApkDetailsResponse>;
    getApkDetails(
      params: Params$Resource$Applicationdetailservice$Getapkdetails,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getApkDetails(
      params: Params$Resource$Applicationdetailservice$Getapkdetails,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetApkDetailsResponse>,
      callback: BodyResponseCallback<Schema$GetApkDetailsResponse>
    ): void;
    getApkDetails(
      params: Params$Resource$Applicationdetailservice$Getapkdetails,
      callback: BodyResponseCallback<Schema$GetApkDetailsResponse>
    ): void;
    getApkDetails(
      callback: BodyResponseCallback<Schema$GetApkDetailsResponse>
    ): void;
    getApkDetails(
      paramsOrCallback?:
        | Params$Resource$Applicationdetailservice$Getapkdetails
        | BodyResponseCallback<Schema$GetApkDetailsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetApkDetailsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetApkDetailsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetApkDetailsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Applicationdetailservice$Getapkdetails;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Applicationdetailservice$Getapkdetails;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/applicationDetailService/getApkDetails'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GetApkDetailsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetApkDetailsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Applicationdetailservice$Getapkdetails
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$FileReference;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    testMatrices: Resource$Projects$Testmatrices;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.testMatrices = new Resource$Projects$Testmatrices(this.context);
    }
  }

  export class Resource$Projects$Testmatrices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/testing.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const testing = google.testing('v1');
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
     *   const res = await testing.projects.testMatrices.cancel({
     *     // Cloud project that owns the test.
     *     projectId: 'placeholder-value',
     *     // Test matrix that will be canceled.
     *     testMatrixId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "testState": "my_testState"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Testmatrices$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Testmatrices$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CancelTestMatrixResponse>;
    cancel(
      params: Params$Resource$Projects$Testmatrices$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Testmatrices$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CancelTestMatrixResponse>,
      callback: BodyResponseCallback<Schema$CancelTestMatrixResponse>
    ): void;
    cancel(
      params: Params$Resource$Projects$Testmatrices$Cancel,
      callback: BodyResponseCallback<Schema$CancelTestMatrixResponse>
    ): void;
    cancel(
      callback: BodyResponseCallback<Schema$CancelTestMatrixResponse>
    ): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Testmatrices$Cancel
        | BodyResponseCallback<Schema$CancelTestMatrixResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CancelTestMatrixResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CancelTestMatrixResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CancelTestMatrixResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Testmatrices$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Testmatrices$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/projects/{projectId}/testMatrices/{testMatrixId}:cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'testMatrixId'],
        pathParams: ['projectId', 'testMatrixId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CancelTestMatrixResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CancelTestMatrixResponse>(parameters);
      }
    }

    /**
     * Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/testing.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const testing = google.testing('v1');
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
     *   const res = await testing.projects.testMatrices.create({
     *     // The GCE project under which this job will run.
     *     projectId: 'placeholder-value',
     *     // A string id used to detect duplicated requests. Ids are automatically scoped to a project, so users should ensure the ID is unique per-project. A UUID is recommended. Optional, but strongly recommended.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clientInfo": {},
     *       //   "environmentMatrix": {},
     *       //   "failFast": false,
     *       //   "flakyTestAttempts": 0,
     *       //   "invalidMatrixDetails": "my_invalidMatrixDetails",
     *       //   "outcomeSummary": "my_outcomeSummary",
     *       //   "projectId": "my_projectId",
     *       //   "resultStorage": {},
     *       //   "state": "my_state",
     *       //   "testExecutions": [],
     *       //   "testMatrixId": "my_testMatrixId",
     *       //   "testSpecification": {},
     *       //   "timestamp": "my_timestamp"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientInfo": {},
     *   //   "environmentMatrix": {},
     *   //   "failFast": false,
     *   //   "flakyTestAttempts": 0,
     *   //   "invalidMatrixDetails": "my_invalidMatrixDetails",
     *   //   "outcomeSummary": "my_outcomeSummary",
     *   //   "projectId": "my_projectId",
     *   //   "resultStorage": {},
     *   //   "state": "my_state",
     *   //   "testExecutions": [],
     *   //   "testMatrixId": "my_testMatrixId",
     *   //   "testSpecification": {},
     *   //   "timestamp": "my_timestamp"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Testmatrices$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Testmatrices$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestMatrix>;
    create(
      params: Params$Resource$Projects$Testmatrices$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Testmatrices$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TestMatrix>,
      callback: BodyResponseCallback<Schema$TestMatrix>
    ): void;
    create(
      params: Params$Resource$Projects$Testmatrices$Create,
      callback: BodyResponseCallback<Schema$TestMatrix>
    ): void;
    create(callback: BodyResponseCallback<Schema$TestMatrix>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Testmatrices$Create
        | BodyResponseCallback<Schema$TestMatrix>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestMatrix>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestMatrix>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TestMatrix> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Testmatrices$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Testmatrices$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{projectId}/testMatrices').replace(
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
        createAPIRequest<Schema$TestMatrix>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestMatrix>(parameters);
      }
    }

    /**
     * Checks the status of a test matrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/testing.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const testing = google.testing('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await testing.projects.testMatrices.get({
     *     // Cloud project that owns the test matrix.
     *     projectId: 'placeholder-value',
     *     // Unique test matrix id which was assigned by the service.
     *     testMatrixId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientInfo": {},
     *   //   "environmentMatrix": {},
     *   //   "failFast": false,
     *   //   "flakyTestAttempts": 0,
     *   //   "invalidMatrixDetails": "my_invalidMatrixDetails",
     *   //   "outcomeSummary": "my_outcomeSummary",
     *   //   "projectId": "my_projectId",
     *   //   "resultStorage": {},
     *   //   "state": "my_state",
     *   //   "testExecutions": [],
     *   //   "testMatrixId": "my_testMatrixId",
     *   //   "testSpecification": {},
     *   //   "timestamp": "my_timestamp"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Testmatrices$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Testmatrices$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestMatrix>;
    get(
      params: Params$Resource$Projects$Testmatrices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Testmatrices$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TestMatrix>,
      callback: BodyResponseCallback<Schema$TestMatrix>
    ): void;
    get(
      params: Params$Resource$Projects$Testmatrices$Get,
      callback: BodyResponseCallback<Schema$TestMatrix>
    ): void;
    get(callback: BodyResponseCallback<Schema$TestMatrix>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Testmatrices$Get
        | BodyResponseCallback<Schema$TestMatrix>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestMatrix>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestMatrix>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TestMatrix> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Testmatrices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Testmatrices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/projects/{projectId}/testMatrices/{testMatrixId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'testMatrixId'],
        pathParams: ['projectId', 'testMatrixId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestMatrix>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestMatrix>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Testmatrices$Cancel
    extends StandardParameters {
    /**
     * Cloud project that owns the test.
     */
    projectId?: string;
    /**
     * Test matrix that will be canceled.
     */
    testMatrixId?: string;
  }
  export interface Params$Resource$Projects$Testmatrices$Create
    extends StandardParameters {
    /**
     * The GCE project under which this job will run.
     */
    projectId?: string;
    /**
     * A string id used to detect duplicated requests. Ids are automatically scoped to a project, so users should ensure the ID is unique per-project. A UUID is recommended. Optional, but strongly recommended.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestMatrix;
  }
  export interface Params$Resource$Projects$Testmatrices$Get
    extends StandardParameters {
    /**
     * Cloud project that owns the test matrix.
     */
    projectId?: string;
    /**
     * Unique test matrix id which was assigned by the service.
     */
    testMatrixId?: string;
  }

  export class Resource$Testenvironmentcatalog {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/testing.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const testing = google.testing('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await testing.testEnvironmentCatalog.get({
     *     // Required. The type of environment that should be listed.
     *     environmentType: 'placeholder-value',
     *     // For authorization, the cloud project requesting the TestEnvironmentCatalog.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidDeviceCatalog": {},
     *   //   "deviceIpBlockCatalog": {},
     *   //   "iosDeviceCatalog": {},
     *   //   "networkConfigurationCatalog": {},
     *   //   "softwareCatalog": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Testenvironmentcatalog$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Testenvironmentcatalog$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestEnvironmentCatalog>;
    get(
      params: Params$Resource$Testenvironmentcatalog$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Testenvironmentcatalog$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestEnvironmentCatalog>,
      callback: BodyResponseCallback<Schema$TestEnvironmentCatalog>
    ): void;
    get(
      params: Params$Resource$Testenvironmentcatalog$Get,
      callback: BodyResponseCallback<Schema$TestEnvironmentCatalog>
    ): void;
    get(callback: BodyResponseCallback<Schema$TestEnvironmentCatalog>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Testenvironmentcatalog$Get
        | BodyResponseCallback<Schema$TestEnvironmentCatalog>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestEnvironmentCatalog>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestEnvironmentCatalog>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestEnvironmentCatalog>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Testenvironmentcatalog$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Testenvironmentcatalog$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/testEnvironmentCatalog/{environmentType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['environmentType'],
        pathParams: ['environmentType'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestEnvironmentCatalog>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestEnvironmentCatalog>(parameters);
      }
    }
  }

  export interface Params$Resource$Testenvironmentcatalog$Get
    extends StandardParameters {
    /**
     * Required. The type of environment that should be listed.
     */
    environmentType?: string;
    /**
     * For authorization, the cloud project requesting the TestEnvironmentCatalog.
     */
    projectId?: string;
  }
}
