import { ServerApi } from "../api/serverApi";
import { dbDoc } from "./dbDoc";

export default class Client extends dbDoc {
    identifierLabel = "Client";
    collectionKey = 'clients';
    id = '';
    name = 'New Client';
    email = '';
    phone = '';

    accessibleFields = (): Object => {
        return {
            //items will appear in the oder they are here
            name: this.accessField(this.name, 'text'),
            phone: this.accessField(this.phone, 'tel'),
            email: this.accessField(this.email, 'email')
        }
    }
}
