const core = require("@actions/core");
const execa = require("execa");

const execCommand = async (file, args) => {
  await execa(file, args).stdout.pipe(process.stdout);
};

const setTimezone = async () => {
  try {
    const timezoneWindows = core.getInput("timezoneWindows");
    const timezoneLinux = core.getInput("timezoneLinux");
    const timezoneMacos = core.getInput("timezoneMacos");

    const platform = process.platform;
    console.log(`Configuring for platform ${platform}`);

    switch (platform) {
      case "linux":
        await execCommand("sudo", [
          "timedatectl",
          "set-timezone",
          timezoneLinux,
        ]);
        break;
      case "darwin":
        await execCommand("sudo", [
          "systemsetup",
          "-settimezone",
          timezoneMacos,
        ]);
        break;
      case "win32":
        await execCommand("tzutil", ["/s", timezoneWindows]);
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
