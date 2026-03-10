# tareqanambd.github.io

Personal resume and portfolio website for **Tareq Anam** — Associate Manager & Sr Software Developer at The City Bank PLC.

🌐 **Live site:** [https://tareqanambd.github.io](https://tareqanambd.github.io)

---

## Stack

- **React 18** + **TypeScript**
- **Vite 6** — build tool
- **Tailwind CSS v4** — styling
- **shadcn/ui** + **Radix UI** — UI components
- **Motion (Framer Motion)** — animations
- **GitHub Actions** — CI/CD auto-deploy to GitHub Pages

---

## Local Development

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
```

---

## Updating Content

All resume content lives in `src/app/components/`. Edit the relevant file and push — the site deploys automatically in ~2 minutes.

| Section | File |
|---|---|
| Name, title, tagline | `src/app/components/Hero.tsx` |
| About / summary | `src/app/components/About.tsx` |
| Skills | `src/app/components/Skills.tsx` |
| Work experience | `src/app/components/Experience.tsx` |
| Key projects | `src/app/components/Projects.tsx` |
| Beyond the Day Job | `src/app/components/Freelance.tsx` |
| Education & certifications | `src/app/components/Education.tsx` |
| Awards & publications | `src/app/components/Awards.tsx` |
| Contact info | `src/app/components/Contact.tsx` |
| Colors / theme | `src/styles/theme.css` |

---

## Deployment

Every push to `main` triggers GitHub Actions → builds → deploys to GitHub Pages automatically.

No manual steps required.
