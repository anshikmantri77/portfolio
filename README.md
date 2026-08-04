

Modern personal portfolio showcasing cloud security engineering work, AI security projects, technical articles, certifications, and professional experience.


## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Static export for S3 + CloudFront (Terraform + GitHub Actions)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (Static Export)

```bash
npm run build
```

Output is generated in the `out/` directory, ready for S3/CloudFront deployment.

## Project Structure

```
src/
├── app/              # Layout, page, globals
├── components/       # Section components + UI primitives
├── data/             # Content (experience, projects, articles, etc.)
└── lib/              # Utilities
```

## Content Updates

All content is hardcoded in TypeScript files under `src/data/`:

- `experience.ts` — Work history
- `projects.ts` — Project details
- `articles.ts` — Medium articles
- `certifications.ts` — Credly links
- `skills.ts` — Tech stack by category
- `education.ts` — Education history

### Making it premium

- **Certification badges:** In `certifications.ts`, add `badgeImageUrl` to each cert. On [Credly](https://www.credly.com), open your badge → Share → copy the image URL (or right‑click the badge image → Copy image address).
- **Article covers:** In `articles.ts`, add `coverImageUrl` with the cover image URL from each Medium post (e.g. from the post’s og:image or Medium’s image URL).
