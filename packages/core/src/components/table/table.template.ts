import { Table } from '@dso-toolkit/sources';

import { html } from 'lit-html';

export function tableTemplate(
  {
    responsive,
  }: Table
) {
  return html`
    <dso-table
      ?responsive=${responsive}
    >
      <table class="table">
        <caption>Overzicht van gebruikersnamen</caption>
        <thead>
          <tr>
            <th scope="col">Nummer</th>
            <th scope="col">Voornaam</th>
            <th scope="col">Achternaam</th>
            <th scope="col">GitHub gebruikersnaam</th>
            <th scope="col">Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><a href="#fabien">Fabien</a></td>
            <td>Potencier</td>
            <td>fabpot</td>
            <td>
              <code>tr</code>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><a href="#andrew">Andrew</a></td>
            <td>Nesbitt</td>
            <td>andrew</td>
            <td>
              <code>tr</code>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td><a href="#taylor">Taylor</a></td>
            <td>Otwell</td>
            <td>taylorotwell</td>
            <td>
              <code>tr</code>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td><a href="#kitty">Kitty</a></td>
            <td>Giraudel</td>
            <td>KittyGiraudel</td>
            <td>
              <code>tr</code>
            </td>
          </tr>
        </tbody>
      </table>
    </dso-table>
  `;
}
