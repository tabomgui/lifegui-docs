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

`next build` needs more than 1 GB of RAM. On a small host, build the image on another machine and copy it over instead of building in place:

```bash
docker build --platform linux/amd64 -t lifegui-docs-docs:latest .
docker save lifegui-docs-docs:latest | gzip | ssh <host> 'gunzip | docker load'
ssh <host> 'cd ~/lifegui-docs && git pull && docker compose up -d --no-build'
```

## License

[AGPL-3.0](https://github.com/tabomgui/lifegui/blob/main/LICENSE), the same as lifegui.
