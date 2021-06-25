const core = require("@actions/core");
const execa = require("execa");

const execCommand = async (file, args) => {
  await execa(file, args).stdout.pipe(process.stdout);
};

const setTimezone = async () => {
  try {
    const platform = process.platform;

    switch (platform) {
      case "linux":
        const timezone = core.getInput("timezoneLinux");
        await execCommand("sudo", ["timedatectl", "set-timezone", timezone, "--adjust-system-clock --no-ask-password"]);
        break;
      case "darwin":
        const timezone = core.getInput("timezoneMacos");
        await execCommand("sudo", ["systemsetup", "-settimezone", timezone]);
        break;
      case "win32":
        const timezone = core.getInput("timezoneWindows");
        await execCommand("tzutil", ["/s", timezone]);
        break;
      default:
        core.setFailed(
          `Platform ${platform} not supported; Only linux, darwin or win32 are supported now`
        );
    }
  } catch (error) {
    core.setFailed(error.message);
  }
};

setTimezone();

