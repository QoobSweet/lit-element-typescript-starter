import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import firebase from 'firebase';
import { style } from './title-bar-css';
//elements

@customElement('title-bar')
export class TitleBar extends LitElement {
  @property({ type: String }) label;
  static styles = style;


  render() {
    return html`
    <h1>${this.label}</h1>
    `;
  }
}