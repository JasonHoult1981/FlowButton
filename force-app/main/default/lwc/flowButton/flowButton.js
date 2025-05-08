import { LightningElement, api } from 'lwc';

export default class FlowButton extends LightningElement {
    @api buttonLabel = 'Create Contact';
    @api variant = 'brand';
    @api cssClass = 'slds-size_12-of-12';
    @api padding = '10px 10px 10px 10px';
    @api horizontalAlign = '';
    @api buttonClass = '';
    @api flowToLaunch;
    @api recordId;
    @api launchFlowOnInit = false;
    @api showFlowInModal = false;

    showButton = false;
    showFlow = false;
    modalIsOpen = false;
    flowStatus = '';
    buttonClicked = false;

    get stylePadding() {
        return `padding: ${this.padding}`;
    }

    get inputVariables() {
        return this.recordId ? [{ name: 'recordId', type: 'String', value: this.recordId }] : [];
    }

    connectedCallback() {
        if (this.launchFlowOnInit) {
            this.launchFlow();
        } else {
            this.showButton = true;
        }
    }

    handleClick() {
        this.buttonClicked = true;
        if (this.flowToLaunch) {
            this.showButton = false;
            this.launchFlow();
        }
    }

    launchFlow() {
        if (this.showFlowInModal) {
            this.modalIsOpen = true;
        } else {
            this.showFlow = true;
        }
    }

    handleFlowStatusChange(event) {
        this.flowStatus = event.detail.status;
        if (event.detail.status === 'FINISHED') {
            this.showFlow = false;
            if (this.showFlowInModal) {
                this.modalIsOpen = false;
            }
            this.showButton = true;
        }
    }

    closeModal() {
        this.modalIsOpen = false;
        this.showButton = true;
    }
}
