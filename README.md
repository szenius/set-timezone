# Set Timezone Action

Maintained fork from https://github.com/szenius/set-timezone (Abandoned project)

[![Test all Platforms](https://github.com/MathRobin/timezone-action/actions/workflows/test_run_action.yml/badge.svg)](https://github.com/MathRobin/timezone-action/actions/workflows/test_run_action.yml)

This action sets timezone in your runner's locale based on its OS.

## Inputs

| Input name      | Description                                                   | Required ? | Default value |
| --------------- | ------------------------------------------------------------- | ---------- | ------------- |
| timezoneLinux   | Timezone you want to set if your runner is running on Linux   | false      | `UTC`         |
| timezoneWindows | Timezone you want to set if your runner is running on Windows | false      | `UTC`         |
| timezoneMacos   | Timezone you want to set if your runner is running on MacOS   | false      | `GMT`         |

## Example usage

```yaml
uses: MathRobin/timezone-action@v1.1
with:
  timezoneLinux: 'Asia/Singapore'
  timezoneMacos: 'Europe/Paris'
  timezoneWindows: 'W. Central Africa Standard Time'
```
