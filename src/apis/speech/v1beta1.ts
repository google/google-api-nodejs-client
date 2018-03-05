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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Google Cloud Speech API
 *
 * Converts audio to text by applying powerful neural network models.
 *
 * @example
 * const google = require('googleapis');
 * const speech = google.speech('v1beta1');
 *
 * @namespace speech
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Speech
 */
function Speech(options) {
  const self = this;
  self._options = options || {};
  self.operations = {
    /**
     * speech.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias speech.operations.get
     * @memberOf! speech(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/operations/{name}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.speech = {
    /**
     * speech.speech.asyncrecognize
     * @desc Performs asynchronous speech recognition: receive results via the
     * [google.longrunning.Operations]
     * (/speech/reference/rest/v1beta1/operations#Operation) interface. Returns
     * either an `Operation.error` or an `Operation.response` which contains an
     * `AsyncRecognizeResponse` message.
     * @alias speech.speech.asyncrecognize
     * @memberOf! speech(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {speech(v1beta1).AsyncRecognizeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    asyncrecognize(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/speech:asyncrecognize')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * speech.speech.syncrecognize
        * @desc Performs synchronous speech recognition: receive results after
        * all audio has been sent and processed.
        * @alias speech.speech.syncrecognize
        * @memberOf! speech(v1beta1)
        *
        * @param {object} params Parameters for request
        * @param {speech(v1beta1).SyncRecognizeRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    syncrecognize(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/speech:syncrecognize')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
}
/**
 * @typedef AsyncRecognizeRequest
 * @memberOf! speech(v1beta1)
 * @type object
 * @property {speech(v1beta1).RecognitionAudio} audio *Required* The audio data to be recognized.
 * @property {speech(v1beta1).RecognitionConfig} config *Required* Provides information to the recognizer that specifies how to process the request.
 */
/**
 * @typedef Operation
 * @memberOf! speech(v1beta1)
 * @type object
 * @property {boolean} done If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
 * @property {speech(v1beta1).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `operations/some/unique/name`.
 * @property {object} response The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
 */
/**
 * @typedef RecognitionAudio
 * @memberOf! speech(v1beta1)
 * @type object
 * @property {string} content The audio data bytes encoded as specified in `RecognitionConfig`. Note: as with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
 * @property {string} uri URI that points to a file that contains audio data bytes as specified in `RecognitionConfig`. Currently, only Google Cloud Storage URIs are supported, which must be specified in the following format: `gs://bucket_name/object_name` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
 */
/**
 * @typedef RecognitionConfig
 * @memberOf! speech(v1beta1)
 * @type object
 * @property {string} encoding *Required* Encoding of audio data sent in all `RecognitionAudio` messages.
 * @property {string} languageCode *Optional* The language of the supplied audio as a BCP-47 language tag. Example: &quot;en-GB&quot;  https://www.rfc-editor.org/rfc/bcp/bcp47.txt If omitted, defaults to &quot;en-US&quot;. See [Language Support](https://cloud.google.com/speech/docs/languages) for a list of the currently supported language codes.
 * @property {integer} maxAlternatives *Optional* Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of `SpeechRecognitionAlternative` messages within each `SpeechRecognitionResult`. The server may return fewer than `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of one. If omitted, will return a maximum of one.
 * @property {boolean} profanityFilter *Optional* If set to `true`, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. &quot;f***&quot;. If set to `false` or omitted, profanities won&#39;t be filtered out.
 * @property {integer} sampleRate *Required* Sample rate in Hertz of the audio data sent in all `RecognitionAudio` messages. Valid values are: 8000-48000. 16000 is optimal. For best results, set the sampling rate of the audio source to 16000 Hz. If that&#39;s not possible, use the native sample rate of the audio source (instead of re-sampling).
 * @property {speech(v1beta1).SpeechContext} speechContext *Optional* A means to provide context to assist the speech recognition.
 */
/**
 * @typedef SpeechContext
 * @memberOf! speech(v1beta1)
 * @type object
 * @property {string[]} phrases *Optional* A list of strings containing words and phrases &quot;hints&quot; so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech/limits#content).
 */
/**
 * @typedef SpeechRecognitionAlternative
 * @memberOf! speech(v1beta1)
 * @type object
 * @property {number} confidence *Output-only* The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is typically provided only for the top hypothesis, and only for `is_final=true` results. Clients should not rely on the `confidence` field as it is not guaranteed to be accurate, or even set, in any of the results. The default of 0.0 is a sentinel value indicating `confidence` was not set.
 * @property {string} transcript *Output-only* Transcript text representing the words that the user spoke.
 */
/**
 * @typedef SpeechRecognitionResult
 * @memberOf! speech(v1beta1)
 * @type object
 * @property {speech(v1beta1).SpeechRecognitionAlternative[]} alternatives *Output-only* May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`).
 */
/**
 * @typedef Status
 * @memberOf! speech(v1beta1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details.  There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */
/**
 * @typedef SyncRecognizeRequest
 * @memberOf! speech(v1beta1)
 * @type object
 * @property {speech(v1beta1).RecognitionAudio} audio *Required* The audio data to be recognized.
 * @property {speech(v1beta1).RecognitionConfig} config *Required* Provides information to the recognizer that specifies how to process the request.
 */
/**
 * @typedef SyncRecognizeResponse
 * @memberOf! speech(v1beta1)
 * @type object
 * @property {speech(v1beta1).SpeechRecognitionResult[]} results *Output-only* Sequential list of transcription results corresponding to sequential portions of audio.
 */

export = Speech;
