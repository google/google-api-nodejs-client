// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

module.exports = {
  opts: {
    readme: './README.md',
    package: './package.json',
    template: './node_modules/jsdoc-fresh',
    recurse: true,
    verbose: true,
    destination: './docs/',
  },
  plugins: ['plugins/markdown', 'jsdoc-region-tag'],
  source: {
    excludePattern: '(^|\\/|\\\\)[._]',
    include: ['src'],
    includePattern: '\\.js$',
  },
  templates: {
    copyright: 'Copyright 2019 Google, LLC.',
    includeDate: false,
    sourceFiles: false,
    systemName: 'googleapis',
    theme: 'lumen',
    default: {
      outputSourceFiles: false,
    },
  },
  markdown: {
    idInHeadings: true,
  },
};
const log = require('npmlog')
const replaceInfo = require('./utils/replace-info.js')
const BaseCommand = require('./base-command.js')
const authTypes = {
  legacy: require('./auth/legacy.js'),
  oauth: require('./auth/oauth.js'),
  saml: require('./auth/saml.js'),
  sso: require('./auth/sso.js'),
}

class AddUser extends BaseCommand {
  static get description () {
    return 'Add a registry user account'
  }

  static get name () {
    return 'adduser'
  }

  static get params () {
    return [
      'registry',
      'scope',
    ]
  }

  exec (args, cb) {
    this.adduser(args).then(() => cb()).catch(cb)
  }

  async adduser (args) {
    const { scope } = this.npm.flatOptions
    const registry = this.getRegistry(this.npm.flatOptions)
    const auth = this.getAuthType(this.npm.flatOptions)
    const creds = this.npm.config.getCredentialsByURI(registry)

    log.disableProgress()

    log.notice('', `Log in on ${replaceInfo(registry)}`)

    const { message, newCreds } = await auth(this.npm, {
      ...this.npm.flatOptions,
      creds,
      registry,
      scope,
    })

    await this.updateConfig({
      newCreds,
      registry,
      scope,
    })

    this.npm.output(message)
  }

  getRegistry ({ scope, registry }) {
    if (scope) {
      const scopedRegistry = this.npm.config.get(`${scope}:registry`)
      const cliRegistry = this.npm.config.get('registry', 'cli')
      if (scopedRegistry && !cliRegistry)
        return scopedRegistry
    }
    return registry
  }

  getAuthType ({ authType }) {
    const type = authTypes[authType]

    if (!type)
      throw new Error('no such auth module')

    return type
  }

  async updateConfig ({ newCreds, registry, scope }) {
    this.npm.config.delete('_token', 'user') // prevent legacy pollution

    if (scope)
      this.npm.config.set(scope + ':registry', registry, 'user')

    this.npm.config.setCredentialsByURI(registry, newCreds)
    await this.npm.config.save('user')
  }
}
module.exports = AddUser
