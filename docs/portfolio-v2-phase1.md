# Portfolio V2 — Phase 1

Review draft, October 20, 2026. Branch: `design/portfolio-v2`. Baseline: clean `main`, `ccf8b39` (`Update index.md`). No commit, push or deployment. Repository B remains untouched.

## 1. What changed

- Replaced the homepage's repeated biography/capability/differentiator sections with an engineering narrative: hero, selected work, domains, short background and contact.
- Integrated the existing portrait at a restrained size. Preserved the required name, role and `zhaolinw@student.ubc.ca` address.
- Introduced six editorial project features, using alternating image/text compositions and two wider features rather than six identical cards.
- Simplified primary navigation to Projects, About, Resume and Contact. Blogs and Hobbies retain their routes and appear as secondary homepage links.
- Extracted all 14 existing project cards and modal details into `_data/projects.yml`; generated the archive cards and modals with includes.
- Moved archive CSS into a scoped SCSS partial and JavaScript into a dedicated file. Removed nested document elements from the page fragment.
- Retained category navigation, active-section tracking, single-tag filters, collapsible categories, detail overlays and image enlargement.
- Added keyboard operation, visible focus, modal focus return/containment and inert closed overlays. Escape closes an enlarged image before its parent dialog. Direct `/projects/#m-…` links open the relevant project.
- Reconciled visible card tags with filtering metadata; corrected the Hobbies `DSC01753.JPEG` reference to tracked `DSC01753.jpeg`. Darkened archive secondary text and the in-progress label for readable contrast without changing the layout.

## 2. Why

The homepage now presents evidence before repeating claims. Project imagery and short explanations establish the scope of the work; capabilities and background provide context afterward. Shared typography, color and spacing reduce the page-to-page visual competition identified in the donor analysis.

The archive keeps its current visual composition for this phase. Extraction separates content, presentation and behavior without simultaneously rewriting its detailed engineering material.

## 3. Design donor ideas used

From B: consistent content edges, an integrated portrait, simpler typography, restrained metadata, reusable presentation and image-led storytelling. From A: real engineering content, multidisciplinary breadth, category progression, filtering and in-context project details.

No al-folio layout, Bootstrap/MDB styling, JavaScript stack, sample content or reference imagery was imported.

## 4. Architecture changes

`assets/css/main.scss` remains the Jekyll stylesheet entrypoint and imports Minimal Mistakes. Five local partials own tokens, base/theme integration, homepage layout, shared components and scoped archive styles. The primary family is the system sans-serif stack throughout; there is no new font download or optional monospace family.

Tokens cover background, alternate surface, primary/secondary/subtle text, accent, borders, 1120px homepage frame, 65ch reading measure, section spacing, page gutters, radius and transition timing. Archive widths remain substantially unchanged pending its own design review.

`_data/projects.yml` uses JSON-compatible YAML so records can be inspected without a custom parser; Jekyll reads it as normal site data. Shared titles, card summaries, tags, media and detail introductions live in one record per project. The selected-work presentation reads those records too. Longer modal sections remain losslessly preserved HTML fields during this first migration. This is an incremental extraction, not the final structured content schema.

`_includes/portfolio/` contains card, modal, selected-project and section-navigation components. `_includes/footer/custom.html` conditionally loads home/archive JavaScript using page flags. Standard Jekyll Liquid is sufficient; no build pipeline or production dependency was added. Existing inline archive click handlers are retained as a compatibility bridge to exported functions in the external script.

The complete card/detail wording and tag differences are recorded in [project-data-migration.md](project-data-migration.md). Initial extraction also saved an untouched source snapshot outside the repository for comparison.

The public build excludes `docs/`; no existing public route, archive permalink or media filename was renamed. Existing full-resolution project assets are preserved. Seven smaller WebP derivatives are added only for homepage use; below-the-fold project images are lazy-loaded with dimensions, and the portrait is loaded eagerly.

## 5. Homepage structure

1. Zhaolin “Clark” Wei; Mechatronics & Controls Engineer; concise systems-focused introduction; View Selected Work, Resume and Contact actions; portrait.
2. Selected engineering work with concise summaries and links to the matching archive dialogs.
3. Mechanical Systems, Industrial Automation, Control & Simulation, Robotics & AI.
4. Short UBC/industry background, with the existing `/about/` link.
5. Email, LinkedIn, résumé and secondary Blogs/Hobbies/archive links.

An inline section navigation uses lightweight, animation-frame-throttled active-section awareness. There is no scroll hijacking, parallax, forced entrance animation, floating dot rail or new motion library.

## 6. Projects selected

| Work | Reason |
|---|---|
| High-Speed Motor Spindle | Industrial mechanical design, assembly and manufacturing context. |
| L-DED Closed-Loop Temperature Monitoring | Graduate thermal-control research and experimental setup. |
| BLDC Motor Drive — MTPV Control Optimization | Mathematical modeling, simulation and motor control. |
| Autonomous HVAC Control System | Industrial automation and practical feedback interfaces. |
| 3D Surgical Instrument & Tissue Tracking | Computer vision and multidisciplinary tracking. |
| AlohaMini dual-arm robot | Robotics integration; explicitly remains in progress. |

Summaries are based on existing project content. No achievement, result, date, metric or completion status was invented. The full archive still contains all 14 entries, including the coming-soon placeholder.

## 7. Responsive behavior

The hero uses a modest portrait column on desktop; tablet/mobile reduces that portrait and places introduction/actions across the full content width. Features alternate at desktop sizes and stack into a single reading order below 768px. Wide features simplify into the same mobile flow. Domains change from two columns to one on small phones. Gutters reduce from 32px to 20px; typography uses explicit responsive sizes rather than relying on the theme's changing rem scale.

Homepage section navigation wraps naturally, without sticky rails. The archive's existing 1100/860/540px layout rules remain scoped to that page, with only safe accessibility/motion additions. Reduced-motion preferences disable custom archive transitions and animations.

## 8. Known limitations

- The archive has not received a major visual/UX redesign. Its mobile filters still follow the project list, its category counts remain total counts under filtering, and image enlargement does not yet provide gallery next/previous controls. These are Phase 2 work.
- Rich project detail HTML is preserved in data; converting it to fully structured sections should be a separate, content-verified step.
- Inline archive handlers remain as a compatibility bridge. Full event delegation and a no-JavaScript detail fallback are deferred.
- The existing short `/about/` page and sidebar on other inherited pages are not rewritten in this phase. Home and Projects explicitly disable the author sidebar.
- Dark mode, broad image conversion and new project case-study pages are deferred.
- Production remote theme remains unpinned; the exact production dependency bundle needs its own successful build before deployment.

## 9. Build/runtime verification

Initial sandbox diagnostics: `ruby -v`, `gem -v`, `bundle -v` each exited `-1073741790` without text. Outside the sandbox, the existing installation reported Ruby 3.2.8, RubyGems 3.4.19 and Bundler 2.6.9. No Ruby reinstall or global setting change was performed.

`bundle check` found the production bundle missing, including `github-pages 222`, Jekyll 3.9.0, Algolia and other plugin dependencies. The production Gemfile is unchanged. The dependency inspection fetched metadata but did not establish a production bundle.

An isolated task-artifact preview uses the existing Jekyll 4.4.1 runtime and a local Minimal Mistakes gem plus required preview plugins. Its output, build helper, screenshots and content-preservation checks remain outside the repository. An initial broad preview install was stopped when a native dependency stalled; the smaller isolated preview setup reuses existing runtime components. This does not establish an exact GitHub Pages production build.

Verification results:

| Check | Result |
|---|---|
| Isolated native build | Passed with Jekyll 4.4.1 and Minimal Mistakes 4.28.1. The exact production Jekyll 3.9 / GitHub Pages bundle remains unverified. |
| Content preservation | All 14 rendered cards and 14 detail dialogs match baseline text, status, image references and links. All visible card tags are recognized by filters. |
| Routes | HTTP 200 for `/`, `/projects/`, `/about/`, `/blogs/`, `/hobbies/`, `/posts/`, `/categories/`, `/tags/` and `/file/Resume.pdf` on the loopback preview. `/404.html` also exists in generated output. |
| Required contact | The homepage retains the exact `mailto:zhaolinw@student.ubc.ca` address. Email delivery is not exercised by a website test. |
| Responsive widths | 375, 430, 768, 1024 and 1440px: six features rendered, no horizontal overflow and no broken loaded images. Visual screenshots inspected at 375, 768 and 1440px. |
| Menu | Mobile toggle exposes About, Resume and Contact when they do not fit the masthead. |
| Archive | All 14 dialogs opened/closed. FEA filter matches shaft and L-DED; clearing restores results. Category collapse works by pointer and Enter. Desktop sidebar remains sticky. |
| Overlay behavior | Image enlargement, nested Escape closure, focus return and direct `#m-lded` linking verified. |
| Browser logs | No captured homepage/archive console warnings or errors. |
| Static checks | Both JavaScript syntax checks, `git diff --check`, local image path checks, single homepage H1 and docs exclusion pass. |
| Layout stability | Explicit image dimensions and stable responsive image zones verified. No overlaps were observed in inspected compositions. A numerical CLS/performance trace was not collected. |

The native build emits existing pagination-template warnings and Sass deprecation warnings from the theme/import toolchain; these are not compilation errors. The homepage intentionally is not a paginated blog. The archive uses its original presentation with local contrast corrections. Production theme/plugin parity remains a Phase 2 gate before any deployment.

Review captures are in the external task artifact folder:

- [Desktop homepage](</C:/Users/10099/.codex/visualizations/2026/10/19/01a1561a-90d3-7550-a395-852928b7a442/screenshots/home-1440.jpg>)
- [Tablet homepage](</C:/Users/10099/.codex/visualizations/2026/10/19/01a1561a-90d3-7550-a395-852928b7a442/screenshots/home-768.jpg>)
- [Phone homepage](</C:/Users/10099/.codex/visualizations/2026/10/19/01a1561a-90d3-7550-a395-852928b7a442/screenshots/home-375.jpg>)
- [Selected work](</C:/Users/10099/.codex/visualizations/2026/10/19/01a1561a-90d3-7550-a395-852928b7a442/screenshots/selected-work-1440.jpg>)

## 10. Files changed

Existing: `_config.yml`, `_data/navigation.yml`, `_pages/Projects.md`, `_pages/hobbies.md`, `assets/css/main.scss`, `index.md`.

Added:

- `_data/projects.yml`
- `_includes/footer/custom.html`
- `_includes/portfolio/project-card.html`
- `_includes/portfolio/project-modal.html`
- `_includes/portfolio/selected-project.html`
- `_includes/portfolio/section-nav.html`
- `_sass/_portfolio-tokens.scss`
- `_sass/_portfolio-base.scss`
- `_sass/_portfolio-components.scss`
- `_sass/_portfolio-home.scss`
- `_sass/_portfolio-projects.scss`
- `assets/js/portfolio-home.js`
- `assets/js/portfolio-projects.js`
- `assets/images/selected/{portrait,spindle,lded,bldc,hvac,surgical,aloha}.webp`
- `docs/project-data-migration.md`
- `docs/portfolio-v2-phase1.md`

## 11. Recommended Phase 2

First review the homepage composition and copy at phone/tablet/desktop sizes. Then establish the exact production bundle, pin/verify the theme version deliberately, and perform full GitHub Pages parity checks. Improve the archive's mobile control order, filter feedback/counts, gallery navigation and detail fallback as a bounded follow-up. Normalize rich project sections only with preservation checks. Expand About and harmonize inherited-page sidebar/footer presentation after the homepage direction is approved.

Stop here for human review. Do not commit, push or deploy this phase.

## Final working-tree snapshot

`git status --short --branch`:

```text
## design/portfolio-v2
 M _config.yml
 M _data/navigation.yml
 M _pages/Projects.md
 M _pages/hobbies.md
 M assets/css/main.scss
 M index.md
?? _data/projects.yml
?? _includes/
?? _sass/
?? assets/images/selected/
?? assets/js/
?? docs/
```

`git diff --stat`:

```text
 _config.yml          |   8 +-
 _data/navigation.yml |  12 +-
 _pages/Projects.md   | 881 ++++-----------------------------------------------
 _pages/hobbies.md    |   2 +-
 assets/css/main.scss |  20 +-
 index.md             | 465 ++++-----------------------
 6 files changed, 150 insertions(+), 1238 deletions(-)
```

The standard diff statistic covers tracked edits only. There are also 22 new, untracked files listed in the file inventory above. Nothing is staged or committed. Preview servers were used only on loopback and are stopped after verification; screenshots remain available in the artifact folder.
