var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import firebase from 'firebase';
import '../../components/page-display/page-display';
import '../../components/content-wrapper/content-wrapper';
import { style } from './auth-index-css';
//elements
let AuthIndex = class AuthIndex extends LitElement {
    constructor() {
        super(...arguments);
        this.loggedIn = (state) => {
            let event = new CustomEvent('login-change', {
                detail: {
                    data: state,
                    message: 'Something important happened'
                },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(event);
        };
        this.handleGoogleLogin = () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
                .setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(() => {
                firebase.auth()
                    .signInWithPopup(provider)
                    .then(result => {
                    this.serverApi.setUserId(result.user.uid);
                    this.user = result.user;
                    this.loggedIn(true);
                })
                    .catch(e => console.log(e));
            });
        };
    }
    render() {
        //Page Display is the framework that renders the app. everything nested should use slots provided by page-display
        return html `
    <page-display>
        <content-item slot="content">
          <div class="block-wrap">
              <a class="btn-google" @click='${this.handleGoogleLogin}'>
                <div class="google-content">
                  <div class="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
                    <defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
                  </svg>
                  </div>
                  <div class="label">
                    <p>Sign in with Google</p>
                  </div>
                </div>
              </a>
          </div>
        </content-item>
    </page-display>
    `;
    }
};
AuthIndex.styles = style;
__decorate([
    property()
], AuthIndex.prototype, "serverApi", void 0);
__decorate([
    state()
], AuthIndex.prototype, "user", void 0);
AuthIndex = __decorate([
    customElement('auth-index')
], AuthIndex);
export { AuthIndex };
