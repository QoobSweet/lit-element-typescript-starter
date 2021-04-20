import { LitElement, html, customElement, property, css} from 'lit-element';
import { type } from 'os';
import '../../controllers/auth/auth-controller';
import '../../controllers/business/business-controller';
import '../../controllers/client/client-controller';

//elements

@customElement('state-controller')
export class StateController extends LitElement {
  @property({ type: Boolean }) isLoggedIn;
  @property({ type: Object }) user;
  @property({ type: Object }) serverApi;
  
  render() {
    if (this.isLoggedIn === true ) {
      return html`
        <business-controller
          .serverApi = "${this.serverApi}"
        >
        </business-controller>
      `;
    } else {
      return html`
        <auth-controller
          .serverApi = "${this.serverApi}"
        ></auth-controller>
      `;
    }
  }
}