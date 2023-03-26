// Не хочет тут импортироваться
// import {ui as ShakaUI} from './shaka-player/dist/shaka-player.ui.js'

export class AccessButton extends ShakaUI.Element {
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
        return new myapp.AccessButton(rootElement, controls);
    }
};

ui.Controls.registerElement( 'accessibility', new AccessButton.Factory());

