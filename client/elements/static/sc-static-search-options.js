import { html, css } from 'lit';
import { SCStaticPage } from '../addons/sc-static-page';
import '@material/web/checkbox/checkbox';

import { typographyCommonStyles } from '../styles/sc-typography-common-styles';
import { store } from '../../redux-store';
import { API_ROOT } from '../../constants';
import { reduxActions } from '../addons/sc-redux-actions';

export class SCStaticSearchOptions extends SCStaticPage {
  static properties = {
    displayedLanguages: { type: Array },
  };

  static styles = [
    typographyCommonStyles,
    css`
      md-checkbox {
        --md-sys-color-primary: var(--sc-primary-accent-color);
        --md-sys-color-on-primary: white;
      }

      fieldset {
        font-family: var(--sc-sans-font);

        display: flex;
        flex-direction: row;

        margin-top: 24px;
        padding: 1em;

        color: var(--sc-on-primary-primary-text-color);
        border-color: var(--sc-border-color);

        gap: 2em;
      }

      @media (max-width: 680px) {
        fieldset {
          flex-direction: column;
          margin: 24px 1em 1em 1em;
        }

        section b {
          padding-left: 0;
        }

        .single-column {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        .five-column {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }

      legend {
        padding: 0 1em;

        color: var(--sc-on-primary-secondary-text-color);
        border-radius: 0.8em;
        background-color: var(--sc-border-color);

        font-variant-caps: all-small-caps;
      }

      section {
        margin-top: 12px;
        padding: 0;
      }

      .single-column {
        display: grid;

        margin: 1em 1em 1em 0;

        grid-template-columns: repeat(1, 1fr);
        gap: 1em;
        grid-auto-rows: minmax(auto);
      }

      .five-column {
        display: grid;

        margin: 1em 1em 1em 0;

        grid-template-columns: repeat(4, 1fr);
        gap: 1em;
        grid-auto-rows: minmax(auto);
      }

      section b {
        display: block;
      }

      fieldset div,
      input,
      label {
        cursor: pointer;
      }
    `,
  ];

  get actions() {
    return {
      changeDisplaySettingMenuState(display) {
        store.dispatch({
          type: 'CHANGE_DISPLAY_SETTING_MENU_STATE',
          displaySettingMenu: display,
        });
      },
    };
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/search';
    this.displayedLanguages = store.getState().searchOptions.displayedLanguages;
    this.initDisplayedLanguages();
    this.rootLanguageList = this.displayedLanguages.filter(item => item.is_root);
    this.translationLanguageList = this.displayedLanguages.filter(item => item.is_root === false);
    const autoCompleteList = document
        .querySelector('sc-navigation-linden-leaves')
        .shadowRoot.querySelector('sc-action-items-universal')
        .shadowRoot.querySelector('sc-auto-complete-list');
      autoCompleteList?.hide?.();
  }

  async initDisplayedLanguages() {
    if (!this.displayedLanguages || this.displayedLanguages.length === 0) {
      await this.#fetchLanguageList();
      this.displayedLanguages = store.getState().searchOptions.displayedLanguages;
      this.rootLanguageList = this.displayedLanguages.filter(item => item.is_root);
      this.translationLanguageList = this.displayedLanguages.filter(item => item.is_root === false);
    }
  }

  stateChanged(state) {
    super.stateChanged(state);
  }

  async #fetchLanguageList() {
    this.languageList = await (await fetch(`${API_ROOT}/languages?all=true`)).json();
    this.languageList.forEach(item => {
      item.checked = !!(item.uid === store.getState().siteLanguage || item.is_root);
    });
    reduxActions.setSearchDisplayLanguage(this.languageList);
  }

  #rootLanguagesListTemplate() {
    return this.rootLanguageList
      ? html`
          <section>
            <b>root languages</b>
            <section class="single-column">
              ${this.rootLanguageList.map(
                lang => html`
                  <label>
                    <md-checkbox
                      name=${lang.name}
                      value=${lang.uid}
                      data-type=${lang.name}
                      ?checked=${lang.checked}
                      @change=${this.#onLanguageCheckboxChange}
                    ></md-checkbox>
                    ${lang.name}
                  </label>
                `
              )}
            </section>
          </section>
        `
      : '';
  }

  #translationLanguagesListTemplate() {
    return this.translationLanguageList
      ? html`
          <section>
            <b>translation languages</b>
            <section class="five-column">
              ${this.translationLanguageList.map(
                lang => html`
                  <label>
                    <md-checkbox
                      name=${lang.uid}
                      value=${lang.uid}
                      data-type=${lang.name}
                      ?checked=${lang.checked}
                      @change=${this.#onLanguageCheckboxChange}
                    ></md-checkbox>
                    ${lang.name}
                  </label>
                `
              )}
            </section>
          </section>
        `
      : '';
  }

  #onLanguageCheckboxChange({ target: { checked, value: selectedLanguage } }) {
    this.displayedLanguages = store.getState().searchOptions.displayedLanguages;
    this.displayedLanguages.forEach(item => {
      if (item.uid === selectedLanguage) {
        item.checked = checked;
      }
    });
    reduxActions.setSearchDisplayLanguage(this.displayedLanguages);
  }

  render() {
    return html`
      <main>
        <fieldset>
          <legend>Language options for search</legend>
          ${this.#rootLanguagesListTemplate()} ${this.#translationLanguagesListTemplate()}
        </fieldset>
      </main>
    `;
  }

  #createMetaData() {
    const pageTitle = `${this.localize('search:searchOptions')}`;

    document.dispatchEvent(
      new CustomEvent('metadata', {
        detail: {
          pageTitle,
          title: pageTitle,
          description: pageTitle,
          bubbles: true,
          composed: true,
        },
      })
    );
    reduxActions.changeToolbarTitle(pageTitle);
  }

  firstUpdated() {
    this.#createMetaData();
  }
}

customElements.define('sc-static-search-options', SCStaticSearchOptions);