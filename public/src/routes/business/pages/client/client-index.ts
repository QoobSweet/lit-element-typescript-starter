import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { style } from './client-index-css';
import '../../../../components/header-bar/header-bar';
import '../../../../components/content-item/content-item';
import './client-list/client-list';
import './client-display/client-display';

export interface Client {
  id: String;
  name: String;
  email: String;
  phone: String | undefined;
  inquiries: String[];
}


@customElement('clients-index')
export class ClientsIndex extends LitElement {
  @property({ type: Object }) serverApi = null;
  @property({ type: Array }) clients = null;
  @state() selectedId = null;

  static styles = style;

  createClient = (e) => {
    let newClient = 
    this.serverApi.createDoc('clients', )
    console.log('testing');
  }

  handleClientSelectionEvent = (e) => {
    this.selectedId = e.detail.data;
  }


  render() {
    console.log(this.selectedId);
    console.log(this.clients);
    console.log(this.clients.filter(client => client.id == this.selectedId)[0]);

    if (this.serverApi) {
      return html`
        <content-item>
          ${this.selectedId 
          ? html`
            <header-bar slot="header-bar" label="Client"></header-bar>
            <client-display slot="content"
              .client="${this.clients.filter(client => client.id == this.selectedId)[0]}"
            ></client-display>
          `
          : html `
            <header-bar slot="header-bar" label="Clients"></header-bar>
            <client-list slot="content"
              @select-client = "${this.handleClientSelectionEvent}"
              .clients="${this.clients}"
            ></client-list>
          `}
        </content-item>
      `;
    } else {
      return html`loading...`;
    }
  }
}