const { exec } = require('child_process');

const arg = (key) => {
    const keyValue = process.argv.find(x => x.startsWith(key));
    if (!keyValue) return undefined;

    const parts = keyValue.split('=');
    if (parts.length < 2) return true;
    return parts[1];
}
(async function run() {

    const appName = arg('appName');
    const retries = arg('retries') || 60;
    const interval = arg('retryInterval') || 10000;
    const password = arg('password');
    const url = arg('url') || 'https://captain.caprover.vormadal.com';
    const cwd = arg('cwd') || './';
    if (!appName) {
        console.log('appName is not specified');
        return;
    }

    if (!password) {
        console.log('password is not specified');
        return;
    }
    console.log('cwd', cwd);
    const check = (retryCount) => {
        exec(
            `caprover api --caproverUrl ${url} ` +
            `--caproverPassword ${password} ` +
            "--path /user/apps/appDefinitions --method GET --data \"{}\"",
            {
                env: {
                    "PATH": process.env.PATH + ':' + cwd
                }
            },
            (error, stdout, stderr) => {
                if (error) {
                    console.log(`error. message is not shown to avoid showing passwords etc`);
                    throw new Error("could not verify app " + appName);
                }

                if (stderr) {
                    console.log(`error. message is not shown to avoid showing passwords etc`);
                    throw new Error("could not verify app " + appName);
                }

                console.log('running...');
                try {
                    const content = stdout.toString().trim();
                    const response = JSON.parse(content.substring(content.indexOf("{")).trim());
                    const appDef = response.appDefinitions.find(x => x.appName === appName);

                    if (!appDef) {
                        console.log('cannot find app with name ' + appName);
                        return;
                    }

                    const currentVersion = appDef.deployedVersion;
                    const latestVersion = appDef.versions[appDef.versions.length - 1].version;

                    if (currentVersion === latestVersion) {
                        console.log('deploy was successful.');
                        return;
                    }

                    if (retryCount >= retries) {
                        throw new Error(`timeout... current version is ${currentVersion} and latest version is ${latestVersion}`);
                    }

                    if(!appDef.isAppBuilding) {
                        throw new Error('Deployment failed. see captain logs for more info');
                    }
                    if (currentVersion !== latestVersion) {
                        console.log('version do not match', currentVersion, latestVersion);
                        setTimeout(() => check(retryCount + 1), interval);
                    }

                } catch (e) {
                    console.error(e.message);
                    throw new Error("could not verify app " + appName);
                }
            }
        )
    }

    check(0);

})();


