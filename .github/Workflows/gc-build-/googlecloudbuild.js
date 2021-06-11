Unsupported architecture provided: 
bash: return: can only `return' from a function or sourced script
mbg198618@cloudshell:~$ 
mbg198618@cloudshell:~$ HOST_OS="linux"
mbg198618@cloudshell:~$ HOST_ARCH="x86_64"
mbg198618@cloudshell:~$ export CC_host=$(command -v gcc)
mbg198618@cloudshell:~$ export CXX_host=$(command -v g++)
mbg198618@cloudshell:~$ 
mbg198618@cloudshell:~$ host_gcc_version=$($CC_host --version | grep gcc | awk '{print $NF}')
mbg198618@cloudshell:~$ major=$(echo $host_gcc_version | awk -F . '{print $1}')
mbg198618@cloudshell:~$ minor=$(echo $host_gcc_version | awk -F . '{print $2}')
mbg198618@cloudshell:~$ if [ -z $major ] || [ -z $minor ] || [ $major -lt 6 ] || [ $major -eq 6 -a $minor -lt 3 ]; then
>   echo "host gcc $host_gcc_version is too old, need gcc 6.3.0"
>   return 1
> fi
mbg198618@cloudshell:~$ 
mbg198618@cloudshell:~$ SUFFIX="$TOOLCHAIN_NAME$ANDROID_SDK_VERSION"
mbg198618@cloudshell:~$ TOOLCHAIN=$NDK_PATH/toolchains/llvm/prebuilt/$HOST_OS-$HOST_ARCH
mbg198618@cloudshell:~$ 
mbg198618@cloudshell:~$ export PATH=$TOOLCHAIN/bin:$PATH
mbg198618@cloudshell:~$ export CC=$TOOLCHAIN/bin/$SUFFIX-clang
mbg198618@cloudshell:~$ export CXX=$TOOLCHAIN/bin/$SUFFIX-clang++
mbg198618@cloudshell:~$ 
mbg198618@cloudshell:~$ 
mbg198618@cloudshell:~$ GYP_DEFINES="target_arch=$ARCH"
mbg198618@cloudshell:~$ GYP_DEFINES+=" v8_target_arch=$ARCH"
mbg198618@cloudshell:~$ GYP_DEFINES+=" android_target_arch=$ARCH"
mbg198618@cloudshell:~$ GYP_DEFINES+=" host_os=$HOST_OS OS=android"
mbg198618@cloudshell:~$ export GYP_DEFINES
mbg198618@cloudshell:~$ 
mbg198618@cloudshell:~$ if [ -f "configure" ]; then
>     ./configure \
>         --dest-cpu=$DEST_CPU \
>         --dest-os=android \
>         --without-snapshot \
>         --openssl-no-asm \
>         --cross-compiling
> fi
mbg198618@cloudshell:~$ # pmake might add -J (private)
mbg198618@cloudshell:~$ FLAGS=${.MAKEFLAGS:C/\-J ([0-9]+,?)+//W}
bash: ${.MAKEFLAGS:C/\-J ([0-9]+,?)+//W}: bad substitution
mbg198618@cloudshell:~$ 
mbg198618@cloudshell:~$ all: .DEFAULT
bash: all:: command not found
mbg198618@cloudshell:~$ .DEFAULT:
bash: .DEFAULT:: command not found
mbg198618@cloudshell:~$ @command -v gmake > /dev/null 2>&1 ||\
> 
Display all 2306 possibilities? (y or n)
!
./
:
[
[[
]]
{
}
2to3-2.7
aa-enabled
aa-exec
aa-remove-unknown
aa-status
aa-teardown
accessdb
aclocal
aclocal-1.16
acyclic
add-apt-repository
addgnupghome
addgroup
addpart
addr2line
add-shell
adduser
aebundler
aedeploy
aefix
agetty
alias
_allowed_groups
_allowed_users
anthoscli
apparmor_parser
apparmor_status
appcfg.py
appletviewer
applygnupgdefaults
appres
apropos
apt
apt-add-repository
apt-cache
apt-cdrom
apt-config
apt-get
apt-key
apt-mark
ar
arch
arp
arpd
arptables
arptables-nft
arptables-nft-restore
arptables-nft-save
arptables-restore
arptables-save
as
ast-to-pattern
> uired for node.js to build.\
> 
.bash_history
.bash_logout
.bashrc
.cache/
.cloudcode/
.config/
.docker/
.profile
README-cloudshell.txt
.theia/
.yarn/
> 
.bash_history
.bash_logout
.bashrc
.cache/
.cloudcode/
.config/
.docker/
.profile
README-cloudshell.txt
.theia/
.yarn/
> Install and try again" && exit 1)
> @gmake ${.FLAGS} ${.TARGETS}
> 
> .PHONY: test
> # TODO(bcoe): re-enable coverage report comments, once we can figure out
> # how to make them more accurate for the Node.js project,
> # See: https://github.com/nodejs/node/issues/35759
> comment: false
> #  # Only show diff and files changed:
> #  layout: "diff, files"
> #  # Don't post if no changes in coverage:
> #  require_changes: true
> 
> codecov:
>   notify:
>     # Wait for all coverage builds:
>     after_n_builds: 2
> ~#gcloud config
> #!/bin/sh
bash: !/bin/sh: event not found
> 
> # Locate an acceptable Python interpreter and then re-execute the script.
> # Note that the mix of single and double quotes is intentional,
> # as is the fact that the ] goes on a new line.
> _=[ 'exec' '/bin/sh' '-c' '''
> command -v python3.9 >/dev/null && exec python3.9 "$0" "$@"
> command -v python3.8 >/dev/null && exec python3.8 "$0" "$@"
> command -v python3.7 >/dev/null && exec python3.7 "$0" "$@"
> command -v python3.6 >/dev/null && exec python3.6 "$0" "$@"
> command -v python3 >/dev/null && exec python3 "$0" "$@"
> exec python "$0" "$@"
> ''' "$0" "$@"
> ]
> del _
> 
> import sys
> try:
>   from shutil import which
> except ImportError:
>   from distutils.spawn import find_executable as which
> 
> print('Node.js configure: Found Python {}.{}.{}...'.format(*sys.version_info))
> acceptable_pythons = ((3, 9), (3, 8), (3, 7), (3, 6))
> if sys.version_info[:2] in acceptable_pythons:
>   import configure
> else:
>   python_cmds = ['python{}.{}'.format(*vers) for vers in acceptable_pythons]
>   sys.stderr.write('Please use {}.\n'.format(' or '.join(python_cmds)))
>   for python_cmd in python_cmds:
>       python_cmd_path = which(python_cmd)
>       if python_cmd_path and 'pyenv/shims' not in python_cmd_path:
>         sys.stderr.write('\t{} {}\n'.format(python_cmd_path, ' '.join(sys.argv[:1])))
>   sys.exit(1)
> ~# 'use strict';
const fs = require('fs');
const path = require('path');
const common = require('../common.js');

const tmpdir = require('../../test/common/tmpdir');
const benchmarkDirectory =
  path.resolve(tmpdir.path, 'benchmark-module-circular');

const bench = common.createBenchmark(main, {
  n: [1e4]
});

function main({ n }) {
  tmpdir.refresh();

  const aDotJS = path.join(benchmarkDirectory, 'a.js');
  const bDotJS = path.join(benchmarkDirectory, 'b.js');

  fs.mkdirSync(benchmarkDirectory);
  fs.writeFileSync(aDotJS, 'require("./b.js");');
  fs.writeFileSync(bDotJS, 'require("./a.js");');

  bench.start();
  for (let i = 0; i < n; i++) {
    require(aDotJS);
    require(bDotJS);
    delete require.cache[aDotJS];
    delete require.cache[bDotJS];
  }
  bench.end(n);

  tmpdir.refresh();
}
> ~#'use strict';
const fs = require('fs');
const path = require('path');
const common = require('../common.js');

const tmpdir = require('../../test/common/tmpdir');
const benchmarkDirectory =
  path.resolve(tmpdir.path, 'benchmark-module-circular');

const bench = common.createBenchmark(main, {
  n: [1e4]
});

function main({ n }) {
  tmpdir.refresh();

  const aDotJS = path.join(benchmarkDirectory, 'a.js');
  const bDotJS = path.join(benchmarkDirectory, 'b.js');

  fs.mkdirSync(benchmarkDirectory);
  fs.writeFileSync(aDotJS, 'require("./b.js");');
  fs.writeFileSync(bDotJS, 'require("./a.js");');

  bench.start();
  for (let i = 0; i < n; i++) {
    require(aDotJS);
    require(bDotJS);
    delete require.cache[aDotJS];
    delete require.cache[bDotJS];
  }
  bench.end(n);

  tmpdir.refresh();
}
> ~# $'use strict';
const fs = require('fs');
const path = require('path');
const common = require('../common.js');

const tmpdir = require('../../test/common/tmpdir');
const benchmarkDirectory = path.join(tmpdir.path, 'nodejs-benchmark-module');

const bench = common.createBenchmark(main, {
  ext: ['', '.js'],
  files: [1e3],
  cache: ['true', 'false']
});

function main({ ext, cache, files }) {
  tmpdir.refresh();
  fs.mkdirSync(benchmarkDirectory);
  fs.writeFileSync(
    `${benchmarkDirectory}/a.js`,
    'module.exports = {};'
  );
  for (let i = 0; i <= files; i++) {
    fs.mkdirSync(`${benchmarkDirectory}/${i}`);
    fs.writeFileSync(
      `${benchmarkDirectory}/${i}/package.json`,
      '{"main": "index.js"}'
    );
    fs.writeFileSync(
      `${benchmarkDirectory}/${i}/index.js`,
      `require('../a${ext}');`
    );
  }

  measureDir(cache === 'true', files);

  tmpdir.refresh();
}

function measureDir(cache, files) {
  if (cache) {
    for (let i = 0; i <= files; i++) {
      require(`${benchmarkDirectory}/${i}`);
    }
  }
  bench.start();
  for (let i = 0; i <= files; i++) {
    require(`${benchmarkDirectory}/${i}`);
  }
  bench.end(files);
}
>~#$'use strict';

const fs = require('fs');
const path = require('path');
const common = require('../common.js');
const tmpdir = require('../../test/common/tmpdir');
const benchmarkDirectory = path.join(tmpdir.path, 'nodejs-benchmark-module');

const bench = common.createBenchmark(main, {
  type: ['.js', '.json', 'dir'],
  n: [1e4],
});

function main({ type, n }) {
  tmpdir.refresh();
  createEntryPoint(n);

  switch (type) {
    case '.js':
      measureJSFile(n);
      break;
    case '.json':
      measureJSONFile(n);
      break;
    case 'dir':
      measureDir(n);
  }

  tmpdir.refresh();
}

function measureJSFile(n) {
  bench.start();
  for (let i = 0; i < n; i++) {
    require(`${benchmarkDirectory}/${i}`);
  }
  bench.end(n);
}

function measureJSONFile(n) {
  bench.start();
  for (let i = 0; i < n; i++) {
    require(`${benchmarkDirectory}/json_${i}.json`);
  }
  bench.end(n);
}

function measureDir(n) {
  bench.start();
  for (let i = 0; i < n; i++) {
    require(`${benchmarkDirectory}${i}`);
  }
  bench.end(n);
}

function createEntryPoint(n) {
  fs.mkdirSync(benchmarkDirectory);

  const JSFileContent = 'module.exports = [];';
  const JSONFileContent = '[]';

  for (let i = 0; i < n; i++) {
    // JS file.
    fs.writeFileSync(`${benchmarkDirectory}/${i}.js`, JSFileContent);

    // JSON file.
    fs.writeFileSync(`${benchmarkDirectory}/json_${i}.json`, JSONFileContent);

    // Dir.
    fs.mkdirSync(`${benchmarkDirectory}${i}`);
    fs.writeFileSync(
      `${benchmarkDirectory}${i}/package.json`,
      '{"main": "index.js"}'
    );
    fs.writeFileSync(
      `${benchmarkDirectory}${i}/index.js`,
      JSFileContent
    );
  }
}>~#$
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
module.exports =
AddUser

>~#$const envPath = require('./utils/path.js')
const BaseCommand = require('./base-command.js')

class Bin extends BaseCommand {
  static get description () {
    return 'Display npm bin folder'
  }

  static get name () {
    return 'bin'
  }

  static get params () {
    return ['global']
  }

  exec (args, cb) {
    this.bin(args).then(() => cb()).catch(cb)
  }

  async bin (args) {
    const b = this.npm.bin
    this.npm.output(b)
    if (this.npm.config.get('global') && !envPath.includes(b))
      console.error('(not in PATH env variable)')
  }
}
module.exports = Bin
