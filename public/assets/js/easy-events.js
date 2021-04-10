var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement } from 'lit-element';
import { style } from './easy-events-css';
import './components/navigation-panel/navigation-pane';
import './components/page-display/page-display';
let EasyEvents = class EasyEvents extends LitElement {
    render() {
        return html `
    <navigation-pane
      id="navigation-pane"
    >
    </navigation-pane>
    <page-display></page-display>
    `;
    }
};
EasyEvents.styles = style;
EasyEvents = __decorate([
    customElement('easy-events')
], EasyEvents);
export { EasyEvents };
//# sourceMappingURL=easy-events.js.map