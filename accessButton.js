// Не хочет тут импортироваться

export class AccessButton extends shaka.ui.Element{
    constructor(parent, controls) {
        super(parent, controls);


        this.button_ = document.createElement('button');
        this.button_textContent = 'Enable accessibility';
        this.button_.setAttribute('aria-label', 'Accessibility');
        this.parent.appendChild(this.button_);

    }

};

AccessButton.Factory = class {
    create(rootElement, controls) {
        return new AccessButton(rootElement, controls);
    }
};
shaka.ui.Controls.registerElement('accessibility', new AccessButton.Factory());


