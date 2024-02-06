# Set Timezone Action

![Test Action](https://github.com/szenius/set-timezone/workflows/.github/workflows/test_run_action.yml/badge.svg)

This action sets timezone in your runner's locale based on its OS.

## Inputs

| Input name      | Description                                                   | Required ? | Default value |
| --------------- | ------------------------------------------------------------- | ---------- | ------------- |
| timezoneLinux   | Timezone you want to set if your runner is running on Linux   | false      | `UTC`         |
| timezoneWindows | Timezone you want to set if your runner is running on Windows | false      | `UTC`         |
| timezoneMacos   | Timezone you want to set if your runner is running on MacOS   | false      | `GMT`         |

## Example usage

```yaml
uses: szenius/set-timezone@v2
with:
  timezoneLinux: "Asia/Singapore"
  timezoneMacos: "Asia/Singapore"
  timezoneWindows: "Singapore Standard Time"
```
