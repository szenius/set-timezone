import { platform, stdout } from 'process';
import { getInput, setFailed } from  '@actions/core';
import { execa } from 'execa';

const execCommand = async (file, args) => execa(file, args).stdout.pipe(stdout);

const setTimezone = async () => {
  try {
    switch (platform) {
      case "linux":
        const linuxTimezone = getInput("timezoneLinux");
        await execCommand("sudo", ["timedatectl", "set-timezone", linuxTimezone]);
        break;
      case "darwin":
        const darwinTimezone = getInput("timezoneMacos");
        await execCommand("sudo", ["systemsetup", "-settimezone", darwinTimezone]);
        break;
      case "win32":
        const win32Timezone = getInput("timezoneWindows");
        await execCommand("tzutil", ["/s", win32Timezone]);
        break;
      default:
        setFailed(
          `Platform ${platform} not supported; Only linux, darwin or win32 are supported now`
        );
    }
  } catch (error) {
    setFailed(error.message);
  }
};

setTimezone();
