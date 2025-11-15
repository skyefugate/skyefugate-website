# Customization Guide

This site is designed to be easily customizable. Almost everything can be changed by editing a single file: `src/helpers/config.ts`

## Quick Start

1. Edit `src/helpers/config.ts`
2. Update the values to match your information
3. Deploy!

## What You Can Customize

### Basic Info
```typescript
title: 'Your Name'
author: 'Your Name'
description: 'Your site description'
baseUrl: 'https://yoursite.com'
source: 'https://github.com/yourusername/yoursite'
```

### Homepage Hero Text
```typescript
homepage: {
  heroLines: [
    'Hello 👋',
    '\n',
    `I'm Your Name`,
    'Your tagline here',
    // ... more lines
  ]
}
```

### Navigation Links
```typescript
routeLinks: [
  { 
    label: 'Home', 
    route: '/', 
    color: 'var(--accent-1)',
    description: 'Optional description'
  },
  // ... more links
]
```

### Work Experience
```typescript
workExperience: [
  {
    company: 'Company Name',
    companyUrl: 'https://company.com',
    companyLogo: '/images/logos/company.png',
    jobTitle: 'Your Title',
    datesWorked: 'Jan 2020 - Present',
    responsibilities: 'What you did...',
    technologies: ['Tech1', 'Tech2'],
  }
]
```

### Volunteer Experience
```typescript
volunteerExperience: [
  {
    organization: 'Org Name',
    organizationUrl: 'https://org.com',
    role: 'Your Role',
    // ... similar to work experience
  }
]
```

### Contact Info
```typescript
contact: {
  name: 'Your Name',
  email: 'you@email.com',
  socials: {
    GitHub: 'yourusername',
    Twitter: 'yourusername',
    LinkedIn: 'in/yourprofile',
    // ... more socials
  }
}
```

### About Section
```typescript
about: {
  intro: 'Your one-line intro',
  bio: [
    'Paragraph 1',
    'Paragraph 2',
    // ... more paragraphs
  ],
  picture: '/path/to/your/photo.jpg'
}
```

### Tech Stack
```typescript
techStack: {
  backend: [
    { language: 'Python', projects: ['project1', 'project2'] },
    // ... more
  ],
  frontend: [
    { language: 'React', projects: ['project1'] },
    // ... more
  ]
}

techStackExtras: {
  devOps: ['Docker', 'Kubernetes'],
  cloud: ['AWS', 'Azure'],
  // ... more categories
}
```

### Theme Colors
```typescript
colorSchemes: {
  dark: {
    background: '#101010',
    foreground: '#fafafa',
    accent: '#01c0f0',
    // ... more colors
  }
}
```

## What's NOT in Config

Some things require editing specific files:

- **Blog posts**: Add markdown files to `src/routes/blog/posts/`
- **Images**: Add to `/static/images/`
- **Fonts**: Defined in `src/styles/typography.scss`
- **Layout structure**: Component files in `src/components/` and `src/routes/`

## Tips

1. **Start small**: Change basic info first, test, then move to more complex sections
2. **Keep backups**: Commit to git before making major changes
3. **Test locally**: Run `npm run dev` to preview changes before deploying
4. **Empty arrays are OK**: If you don't have projects/experience yet, use `[]`
5. **Colors**: Use CSS variables like `var(--accent)` or hex codes like `#ff0099`

## Need Help?

- Check the TypeScript types in `src/types/Config.ts` for all available options
- Look at the existing config for examples
- The site will show TypeScript errors if something is wrong
