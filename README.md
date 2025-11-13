<h1 align="center">✨ Skye Fugate's Website</h1>
<p align="center">
  <i>Personal portfolio and professional website for a Technology Architect</i><br>
  <b><a href="https://fugate.dev/">fugate.dev</a></b>
</p>
<p align="center">
  <a href="https://fugate.dev">
    <img width="700" src="https://raw.githubusercontent.com/skyefugate/skyefugate-website/master/static/screenshot.png" />
  </a>
</p>

**Contents**
- [About This Site](#about-this-site)
- [Original Template Credit](#original-template-credit)
- [Site Features](#site-features)
- [Site Map](#site-map)
- [Development](#development)
- [License](#license)

---

## About This Site

This is my personal website, built using the amazing **Devolio** template created by [Alicia Sykes](https://aliciasykes.com).

**What it showcases:**
- Professional work experience and career progression
- Personal projects and open source contributions  
- Volunteer work and community involvement (SecKC leadership)
- Technical skills and expertise
- Contact information and social profiles

**Built with:**<br>
SvelteKit + TypeScript, prioritizing SEO, performance, accessibility, and compatibility.<br>
Data is fetched from external sources (GitHub, RSS, social platforms), so no CMS needed.

---

## Original Template Credit

This website is built on the incredible **[Devolio](https://github.com/Lissy93/devolio)** template by **[Alicia Sykes](https://aliciasykes.com)**.

Alicia created this masterpiece as a configurable, self-hosted developer portfolio that aggregates data from multiple sources. The template is open source and available for anyone to use - I highly recommend checking out her work!

- **Original Repository:** [Lissy93/devolio](https://github.com/Lissy93/devolio)
- **Creator:** [Alicia Sykes](https://aliciasykes.com)
- **License:** MIT

All credit for the core functionality, design patterns, and architecture goes to Alicia. I've simply customized it with my own content and made minor modifications to suit my needs.

<sub>A tutorial for building something similar is available on **[DEV.to](https://dev.to/lissy93/sveltekit-10-build-an-blog-fetching-posts-from-your-dev-profile-29f)**</sub>

---

## Site Features

This website includes:

- **Professional Experience** - Complete work history from Micro Center to current Technology Architect role at Netsmart
- **Volunteer Leadership** - Detailed section on SecKC community involvement and InfoSec event management  
- **Project Portfolio** - GitHub integration showing personal and open source projects
- **Contact Information** - Professional contact details and social media links
- **Responsive Design** - Works great on desktop, tablet, and mobile
- **Fast Performance** - Optimized for speed with server-side rendering

**Tech Stack:**<br>
Built with Svelte, using SvelteKit and written in TypeScript. The build system is Vite/Rollup, with dependencies managed with PNPM. Standards implemented with ESLint and Prettier, with testing done using Vitest and Playwright. Styles are composed in SCSS with CSS variables for theming.

---

## Site Map

All accessible pages on the website:

### **Main Navigation Pages**
- **[Home](https://fugate.dev/)** (`/`) - Landing page with animated intro and navigation
- **[Projects](https://fugate.dev/projects)** (`/projects`) - GitHub-integrated project portfolio with filtering
- **[Contact](https://fugate.dev/contact)** (`/contact`) - Contact form, social links, and GPG keys
- **[About](https://fugate.dev/about)** (`/about`) - Bio, work experience, tech stack, and resume

### **Sub-Navigation Pages**
- **[Volunteering](https://fugate.dev/volunteering)** (`/volunteering`) - Community involvement overview
- **[SecKC Details](https://fugate.dev/volunteering/seckc)** (`/volunteering/seckc`) - Detailed SecKC volunteer work

### **Hidden/Accessible Pages**
- **[Blog](https://fugate.dev/blog)** (`/blog`) - RSS feed aggregation (currently disabled in nav)
- **[Blog Posts](https://fugate.dev/blog/[slug])** (`/blog/[slug]`) - Individual blog post pages

### **System Pages**
- **Error Page** (`/error`) - Custom 500/404 error handling

**Note:** The blog functionality exists but is currently commented out of the main navigation. All pages follow the same terminal-inspired design aesthetic with proper responsive layouts.

---

## Development

If you want to use the original template:

```bash
# 1. Clone the original Devolio template
git clone git@github.com:Lissy93/devolio.git && cd devolio

# 2. Install dependencies  
pnpm install

# 3. Start the development server
pnpm run dev -- --open
```

For the original template documentation, deployment guides, and configuration options, visit the **[Devolio repository](https://github.com/Lissy93/devolio)**.

---

## License

This site is built on the **[Devolio](https://github.com/Lissy93/devolio)** template by **[Alicia Sykes](https://aliciasykes.com)**, which is licensed under MIT.

See the [LICENSE](LICENSE) file for full details.

---

<!-- License + Copyright -->
<p align="center">
  <i>Built with ❤️ using <a href="https://github.com/Lissy93/devolio">Devolio</a> by <a href="https://aliciasykes.com">Alicia Sykes</a></i><br>
  <i>© <a href="https://aliciasykes.com">Alicia Sykes</a> 2025 (original template) • © <a href="https://fugate.dev">Skye Fugate</a> 2025 (customizations)</i><br>
  <a href="https://github.com/skyefugate"><img src="https://i.ibb.co/4KtpYxb/octocat-clean-mini.png" /></a><br>
  <sup>Thanks for visiting :)</sup>
</p>

<!-- Dinosaur -->
<!--
                        . - ~ ~ ~ - .
      ..     _      .-~               ~-.
     //|     \ `..~                      `.
    || |      }  }              /       \  \
(\   \\ \~^..'                 |         }  \
 \`.-~  o      /       }       |        /    \
 (__          |       /        |       /      `.
  `- - ~ ~ -._|      /_ - ~ ~ ^|      /- _      `.
              |     /          |     /     ~-.     ~- _
              |_____|          |_____|         ~ - . _ _~_-_
-->
