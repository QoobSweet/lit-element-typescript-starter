import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { style } from './clients-display-css';
import '../../../../components/header-bar/header-bar';
import '../../../../components/content-item/content-item';

interface Client {
  id: String;
  name: String;
  email: String;
  phone: String | undefined;
  inquiryIds: String[];
}

@customElement('clients-display')
export class ClientsDisplay  extends LitElement {
  @property({ type: Array }) clients = null;
  static styles = style;

  @state()sortOrderType: String = "name";
  @state() sortOrder: 'asc' | 'dec' = "asc";

  sortClients = (e) => {
    //if selected twice, flip sort order
    if (this.sortOrderType == e.path[0].id) {
      this.sortOrder = (this.sortOrder == 'asc') ? 'dec' : 'asc';
    } else {
      //if first time selecting, default to asc
      this.sortOrder = 'asc';
    }

    //store sort column type signature
    this.sortOrderType = e.path[0].id;

    //apply designated sorting
    switch (this.sortOrderType) {
      case "name":
        this.clients.sort((a,b) => (this.sortOrder == 'asc' ? (a.name > b.name) : (a.name < b.name)) ? 1 : -1)
        break;
      case "phone":
        this.clients.sort((a,b) => (this.sortOrder == 'asc' ? (a.phone > b.phone) : (a.phone < b.phone)) ? 1 : -1)
        break;
      case "email":
        this.clients.sort((a,b) => (this.sortOrder == 'asc' ? (a.email > b.email) : (a.email < b.email)) ? 1 : -1)
        break;
      case "inquiry-count":
        this.clients.sort((a,b) =>
          (this.sortOrder == 'asc' ?
            ((a.inquiries ? a.inquiries.length : "0") >
            (b.inquiries ? b.inquiries.length : "0"))
          : ((a.inquiries ? a.inquiries.length : "0") >
            (b.inquiries ? b.inquiries.length : "0")) )
          ? 1 : -1)
        break;
      case "inquiry-date":
        console.log("sorting for inquiry dates not implemented.");
        break;
      case "last-coorespondence":
        console.log("sorting for coorespondence dates not implemented.");
        break;
    }
    this.requestUpdate();
  }


  render() {
    return html`
      <content-item>
        <header-bar slot="header-bar" label="Clients"></header-bar>
        <table slot="content" class="tg">
          <thead>
            <tr>
              <th id="name" class="tg-0lax sort-object" @click="${this.sortClients}">Name</th>
              <th id="phone" class="tg-0lax sort-object" @click="${this.sortClients}">Phone</th>
              <th id="email" class="tg-0lax sort-object" @click="${this.sortClients}">Email</th>
              <th id="inquiry-count" class="tg-0lax sort-object" @click="${this.sortClients}">Inquiry Count</th>
              <th id="inquiry-date" class="tg-0lax sort-object" @click="${this.sortClients}">Inquiry Date</th>
              <th id="last-coorespondence" class="tg-0lax sort-object" @click="${this.sortClients}">Last Corespondence</th>
            </tr>
            ${this.clients ? this.clients.map(client => { return html`
            <tr class="client-item" data-clientIndex="${client.id}">
              <th class="tg-0lax">${client.name}</th>
              <th class="tg-0lax">${client.phone}</th>
              <th class="tg-0lax">${client.email}</th>
              <th class="tg-0lax">${client.inquiries ? client.inquiries.length : "0"}</th>
              <th class="tg-0lax">00/00/0000</th>
              <th class="tg-0lax">00/00/0000</th>
            </tr>
            `}) : html``}
          </thead>
        </table>
      </content-item>
    `;
  }
}