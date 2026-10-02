import { defineI18nUI } from 'fumadocs-ui/i18n';

export const i18n = defineI18nUI(
  {
    defaultLanguage: 'en',
    languages: ['en', 'pt-BR'],
    hideLocale: 'default-locale',
    parser: 'dir',
  },
  {
    en: { displayName: 'English' },
    'pt-BR': {
      displayName: 'Português (BR)',
      'Search(search trigger)': 'Buscar',
      'Search(search dialog)': 'Buscar',
      'No results found(search dialog)': 'Nenhum resultado encontrado',
      'On this page(table of contents)': 'Nesta página',
      'No Headings(table of contents)': 'Sem títulos',
      'Table of Contents(inline table of contents)': 'Sumário',
      'Next Page(pagination)': 'Próxima página',
      'Previous Page(pagination)': 'Página anterior',
      'Last updated on(page footer)': 'Atualizado em',
      'Edit on GitHub(edit page)': 'Editar no GitHub',
      'Choose a language(language switcher)': 'Escolha o idioma',
      'Page Not Found(404 page)': 'Página não encontrada',
      'Back to Home(404 page)': 'Voltar ao início',
      'Show Sidebar(sidebar)': 'Mostrar barra lateral',
      'Hide Sidebar(sidebar)': 'Ocultar barra lateral',
      'Copy Markdown(page actions)': 'Copiar Markdown',
      'Copied Markdown(page actions)': 'Markdown copiado',
      'Open(page actions)': 'Abrir',
    },
  },
);
