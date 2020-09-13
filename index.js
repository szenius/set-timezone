const core = require("@actions/core");
const execa = require("execa");

try {
  const timezoneWindows = core.getInput("timezoneWindows");
  const timezoneLinux = core.getInput("timezoneLinux");
  const timezoneMacos = core.getInput("timezoneMacos");

  const platform = process.platform;

  switch (platform) {
    case "linux":
      execa("sudo", ["timedatectl", "set-timezone", timezoneLinux]).stdout.pipe(
        process.stdout
      );
      break;
    case "darwin":
      execa("sudo", ["systemsetup", "-settimezone", timezoneMacos]).stdout.pipe(
        process.stdout
      );
      break;
    case "win32":
      execa("tzutil", ["/s", timezoneWindows]).stdout.pipe(process.stdout);
      break;
    default:
      core.setFailed(
        `Platform ${platform} not supported; Only linux, darwin or win32 are supported now`
      );
  }
} catch (error) {
  core.setFailed(error.message);
}
