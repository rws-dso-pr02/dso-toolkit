import { Selectable } from '@dso-toolkit/sources';
import { html, nothing, TemplateResult } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

import { infoButtonTemplate } from '../info-button/info-button.template';
import { infoTemplate } from '../info/info.template';

export function selectableTemplate({
  type,
  id,
  name,
  label,
  value,
  required,
  invalid,
  describedById,
  checked,
  disabled,
  onChange,
  info
}: Selectable<TemplateResult>) {
  return html`
    <div class="dso-selectable">
      <input
        type=${type}
        id=${id}
        value=${value}
        name=${ifDefined(name)}
        aria-invalid=${ifDefined(invalid)}
        aria-describedby=${ifDefined(describedById)}
        @change=${(e: Event) => onChange(e)}
        ?disabled=${disabled}
        ?required=${required}
        ?checked=${checked}
      >
      <label for=${id}>
        ${label}
      </label>
      ${info
        ? html`
          ${!info.fixed ? infoButtonTemplate({ active: info.active, onClick: info.onClose }) : nothing}
          ${info.active || info.fixed
            ? infoTemplate(info)
            : nothing
          }
        `
        : nothing
      }
    </div>
  `;
}
