'
' /**
'<?php
'{% set lb = "{" %}
'{% set rb = "}" %}
'{%- set pathParams = m.parameters|getPathParams|sort -%}
'/**
' * {{ m.id }}
' *
' * {% if m.description %}@desc {{ m.description|oneLine|cleanComments|safe }}{% endif %}
' *
'{% if m.fragment -%}
' * @example
' {{ m.fragment|safe }}
' *
'{% endif -%}
' * @alias {{ m.id }}
' * @memberOf! {{ name }}({{ version }})
' *
' * @param {object{% if !m.parameterOrder && !m.request %}={% endif %}} params Parameters for request
' {% for pname in m.parameters|sort -%}
' {% set p = m.parameters[pname] -%}
' * @param {{ lb }}{{ p.type }}{% if ! p.required %}={% endif %}{{ rb }} params.{{ pname|getSafeParamName }} {{ p.description|oneLine|cleanComments|safe }}
' {% endfor -%}
'{% if m.supportsMediaUpload -%}
'{% if m.request -%}
' * @param  {object} params.resource Media resource metadata
'{% endif -%}
' * @param {object} params.media Media object
' * @param {string} params.media.mimeType Media mime-type
' * @param {string|object} params.media.body Media body contents
'{% elif m.request -%}
'{% if m.request.$ref -%}
' * @param {{ lb }}{{ name }}({{ version }}).{{ m.request.$ref }}{{ rb }} params.resource Request body data
'{% else -%}
' * @param {object} params.resource Request body data
'{% endif -%}
'{% endif -%}
' * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
' * @param {callback} callback The callback that handles the response.
' * @return {object} Request object
' */
'{% if globalmethods %}this.{{ mname }} ={% else %}{{ mname }}:{% endif %} function (params, options, callback) {
'  if (typeof options === 'function') {
'    callback = options;
'    options = {};
'  }
 ' options || (options = {});
'
'  const rootUrl = options.rootUrl || {{ rootUrl|buildurl }};
'
'  const parameters = {
'    options: Object.assign({
'      url: (rootUrl + {{ ('/' + servicePath + m.path)|buildurl }}).replace(/([^:]\/)\/+/g, '$1'),
'      method: '{{ m.httpMethod }}'
'    }, options),
'    params: params,
'    {%- if m.mediaUpload.protocols.simple.path -%}mediaUrl: (rootUrl + {{ ('/' + m.mediaUpload.protocols.simple.path)|buildurl }}).replace(/([^:]\/)\/+/g, '$1'),{%- endif -%}
'    requiredParams: [{%- if m.parameterOrder.length -%}'{{ m.parameterOrder|join("', '")|safe }}'{%- endif -%}],
'    pathParams: [{%- if pathParams.length -%}'{{ pathParams|join("', '")|safe }}'{%- endif -%}],
'    context: self
'  };
'
'  return createAPIRequest(parameters, callback);
'}{%- if globalmethods -%};{%- elif not loop.last -%},
'{%- endif -%}
'Google Tag Manager/0.donapp4:
 -
  **
' <?php
' - npm install -g yarn:js,
'  -  
' -  < npm install babel-runtime@6.23.0 /home/scrutinizer/build/node_modules/babel-runtime
' -  /home/scrutinizer/.nvm/versions/node/v6.2.0/bin/yarn -> /home/scrutinizer/.nvm/version
' -  s/node/v6.2.0/lib/node_modules/yarn/bin/yarn.js
' -  /home/scrutinizer/.nvm/versions/node/v6.2.0/bin/yarnpkg -> /home/scrutinizer/.nvm/vers
' -  ions/node/v6.2.0/lib/node_modules/yarn/bin/yarn.js
' -  /home/scrutinizer/.nvm/versions/node/v6.2.0/lib
' -  //  npm install yarn.js@0.27.5 /home/scrutinizer/build/node_modules/yarn.js
'  -  npm install core-js@2.4.1 /home/scrutinizer/build/node_modules/core-js   >
   -  ?>
   -  */
 '  @0072016
 '  https://developer.firebase.google.com
 '  https://developer.android.com/sdkmanager
 '  *
   -  **/*
     /**
 '  - <?php
 '   New App: Payments (QBMS) App:
 '  Created: 2017-07-08 03:43:35 am
  ' Modified: 2017-07-17 06:18:28 am
  '  App ID: '193514556042759'
  '  Type: QuickBooks Merchant Services (Hosted)
  '  App Login: b7sqbfi6d6.QuickBooks.Intuit
  '  Environment: Production
  '  Application Name: Payments QBMS App
  '  Subscription URL: https://quickbooks.api.intuit.com/v3
  '  Change URL: https://sandbox-quickbooks.api.intuit.com/v3
  '  Login URL: developer.intuit.com
  '  Marketing URL: https://appstore.intuit.com
  '  "account Id":"1613204775",
  '  "customer Id":"7231249",
  '  "type":"Payments QBMS App",
  '  }
  '  {
  '  "APP_VERSION_CODE",
  '  "App Version Code",
  ' ?>
  ' */
  @0072016
  
  '
  
  
  
  
 
 
 
 
 
 
' 2017-07-19T04:31:29
 ' 
 '  2017-07-19T05:21:09
 '  







