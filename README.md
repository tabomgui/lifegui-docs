# lifegui docs

Source of the documentation site for [lifegui](https://github.com/tabomgui/lifegui), published at **https://docs.lifegui.hengen.com.br**.

Built with [Fumadocs](https://fumadocs.dev) on Next.js. The site is available in English and Brazilian Portuguese.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Writing docs

Pages are MDX files in `content/docs/<locale>/`, where the locale is `en` or `pt-BR`. Both locales use the same file names and the same section structure. When you add or change a page, update both languages.

- `meta.json` in each folder sets the sidebar title and page order.
- Each page needs `title` and `description` in its frontmatter.
- Images go in `public/` and are referenced from the root, e.g. `/screenshots/tasks.png`.
- Components available in MDX without imports: `Callout`, `Cards`, `Card`, `Steps`, `Step`, `Tabs`, `Tab`.
- No emoji in the docs. Keep app UI labels in their original Portuguese form.

## Deploy

The site runs as a standalone Next.js server in Docker:

```bash
docker compose up -d --build
```

It listens on port `8081` by default (`DOCS_PORT` changes it). Put a TLS-terminating proxy or tunnel in front of it.

## License

[AGPL-3.0](https://github.com/tabomgui/lifegui/blob/main/LICENSE), the same as lifegui.
