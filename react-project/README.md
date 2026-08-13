# Gokulkrishna Raju — Portfolio

React + Vite rebuild of the static portfolio page. **All content lives in one file:**
[src/data/portfolio.json](src/data/portfolio.json). The components read that file and
render the UI from it — no JSX edits needed to change, add, or remove content.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build
```

## Structure

```
src/
├── data/portfolio.json     ← the only file you edit for content
├── App.jsx                 ← composes the sections
├── styles.css              ← design tokens + all styling
├── components/
│   ├── Reveal.jsx          ← scroll-in animation wrapper (shared IntersectionObserver)
│   ├── RichText.jsx        ← renders **bold** and *italic* inside JSON strings
│   ├── SectionHead.jsx     ← the mono uppercase heading + meta rule
│   └── Link.jsx            ← anchor with optional external target
└── sections/
    ├── Hero.jsx            ← name, role, intro, stats, links
    ├── Research.jsx        ← dark band, publication cards
    ├── Experience.jsx      ← timeline entries
    ├── Projects.jsx        ← timeline entries
    ├── Activities.jsx      ← speaking & activities grid
    ├── Closing.jsx         ← skills + education, two columns
    └── Footer.jsx          ← statement + contact bar
```

Every section renders `null` when its array in the JSON is empty, so removing content
never leaves an empty heading behind.

## Inline formatting

Any description or bullet string supports two markers, handled by `RichText`:

- `**text**` → bold (`<strong>`)
- `*text*` → italic serif (`<em>`)

Example: `"achieving a **10× performance improvement**"`

## Adding a new experience

Add an object to `experience.items` in
[src/data/portfolio.json](src/data/portfolio.json). Newest goes first — the list renders
top to bottom in array order.

```json
{
  "periodLines": ["Jan '27 —", "Now"],
  "role": "Senior Engineer",
  "company": "Company · Team",
  "bullets": [
    "First achievement, with a **highlighted metric**.",
    "Second achievement."
  ]
}
```

`bullets` and `description` are interchangeable — use `bullets` for a list, or
`description` for a single paragraph (the two intern roles use `description`). You can
also use both; bullets render first.

`periodLines` is an array so the date stacks on two lines like the original. A single
string in `period` works too if you want one line.

## Adding to the other sections

| Section | JSON key | Item shape |
| --- | --- | --- |
| Research | `research.items` | `meta`, `title`, `description`, `tags[]`, `link: { label, href }` |
| Projects | `projects.items` | `period`, `title`, `description` |
| Speaking & Activities | `activities.items` | `title`, `description` |
| Skills | `skills.groups` | `label`, `value` |
| Education | `education.items` | `degree`, `meta` |
| Hero stats | `hero.stats` | `value`, `label` |
| Hero / footer links | `hero.links`, `footer.links` | `label`, `href`, `external` |

Section headings themselves are data too — change `experience.title` or
`research.meta` to relabel a section.

## Styling

All colours, fonts and the max width are CSS custom properties at the top of
[src/styles.css](src/styles.css). The dark bands (Research, Footer) use the
`.surface-dark` class, which overrides link, rule and text colours for that surface.
