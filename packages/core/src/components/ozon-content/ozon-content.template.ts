import { html, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { OzonContent } from '@dso-toolkit/sources';

export function ozonContentTemplate({ content, inline, interactive, deleted, prefix, suffix, onAnchorClick, onClick }: OzonContent) {
  return html`
    <dso-ozon-content
      interactive=${ifDefined(interactive || undefined)}
      .content=${content}
      ?inline=${inline}
      ?deleted=${deleted}
      @anchorClick=${onAnchorClick}
      @dsoClick=${ifDefined(interactive ? onClick : undefined)}
    >${prefix ? html`<span slot="prefix">${prefix}</span>` : nothing}${suffix ? html`<span slot="suffix">${suffix}</span>` : nothing}</dso-ozon-content>
  `;
}
