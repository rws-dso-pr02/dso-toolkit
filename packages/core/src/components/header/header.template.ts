import { Header } from "@dso-toolkit/sources";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";

export function headerTemplate({
  logo,
  subLogo,
  mainMenu,
  useDropDownMenu,
  authStatus,
  loginUrl,
  logoutUrl,
  userProfileUrl,
  userProfileName,
  userHomeUrl,
  onHeaderClick,
}: Header) {
  return html`<dso-header
    .mainMenu=${mainMenu}
    use-drop-down-menu=${ifDefined(useDropDownMenu)}
    auth-status=${ifDefined(authStatus)}
    login-url=${ifDefined(loginUrl)}
    logout-url=${ifDefined(logoutUrl)}
    user-profile-url=${ifDefined(userProfileUrl)}
    user-profile-name=${ifDefined(userProfileName)}
    user-home-url=${ifDefined(userHomeUrl)}
    @headerClick=${onHeaderClick}
  >
    <div slot="logo"><img height="40" alt="Omgevingsloket" src="${logo}" /></div>
    ${subLogo ? html`<div slot="sub-logo"><img alt="Regels op de kaart" src="${subLogo}" /></div>` : undefined}
  </dso-header>`;
}
