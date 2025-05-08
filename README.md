# FlowButton Lightning Web Component

<a href="https://githubsfdeploy.herokuapp.com?owner=JasonHoult1981&repo=FlowButton&ref=main">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

## Overview

`FlowButton` is a modern, configurable Lightning Web Component (LWC) designed to launch Salesforce Flows from a button. It supports launching flows inline or inside a modal, and can be configured to auto-launch on load.

## Features

- 🔘 Configurable button label and style
- 🔄 Option to launch flow on component initialization
- 🧩 Launch flows inline or in modal
- 📄 Pass `recordId` to flows automatically
- ✅ Flow status tracking via `onstatuschange`

## Installation

1. Unzip `FlowButton_LWC.zip`.
2. Use **Salesforce DX**, **Workbench**, or **VS Code with Salesforce Extensions** to deploy the contents under `force-app/main/default/lwc/flowButton`.

## Component Inputs (`@api` properties)

| Property            | Type      | Description                                    |
|---------------------|-----------|------------------------------------------------|
| `buttonLabel`       | `String`  | Label shown on the button                      |
| `variant`           | `String`  | Style variant (`brand`, `neutral`, etc.)       |
| `cssClass`          | `String`  | Wrapper div CSS class                          |
| `padding`           | `String`  | Padding around the component                   |
| `horizontalAlign`   | `String`  | Layout alignment (e.g., `center`)              |
| `buttonClass`       | `String`  | Button-specific class                          |
| `flowToLaunch`      | `String`  | Flow API name (required)                       |
| `recordId`          | `String`  | Record Id to pass as input to the flow         |
| `launchFlowOnInit`  | `Boolean` | If true, launches the flow when component loads|
| `showFlowInModal`   | `Boolean` | If true, launches the flow in a modal dialog   |

## Output Behavior

- Flow finish event hides the flow and re-shows the button
- Modal automatically closes when the flow finishes

## Example Usage (Lightning App Builder)

Drag `FlowButton` to your Lightning Record Page and configure:
- Flow API Name
- Record ID
- Choose whether to show in modal or inline
- Customize label and style

## Compatibility

- Lightning App Builder
- Flow Screens
- Record Pages, Home Pages, App Pages

## License

MIT or your internal licensing terms.
