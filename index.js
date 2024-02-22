import { platform, stdout } from 'process';
import { getInput, setFailed } from '@actions/core';
import { execa } from 'execa';

const execCommand = async (file, args) => execa(file, args).stdout.pipe(stdout);

const setTimezone = async () => {
  try {
    switch (platform) {
      case 'linux':
        await execCommand('sudo', [
          'timedatectl',
          'set-timezone',
          getInput('timezoneLinux'),
        ]);
        break;
      case 'darwin':
        await execCommand('sudo', [
          'systemsetup',
          '-settimezone',
          getInput('timezoneMacos'),
        ]);
        break;
      case 'win32':
        await execCommand('tzutil', ['/s', getInput('timezoneWindows')]);
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
