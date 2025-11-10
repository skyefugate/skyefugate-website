import type { SiteConfig } from '$src/types/Config';

const config: SiteConfig = {
  title: 'Skye Fugate',
  author: 'Skye Fugate',
  description: 'The personal website of Skye Fugate',
  source: 'https://github.com/skyefugate/skyefugate-website',
  baseUrl: 'https://skyefugate.com',
  initialFeeds: [{ label: 'Notes', url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/blog.atom' }],
  additionalFeeds: [
    { label: 'Notes', url: 'https://notes.aliciasykes.com/feed' },
    {
      label: 'Dev.to',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/dev-to.atom',
    },
    {
      label: 'BlogSpot',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/blogger.atom',
    },
    {
      label: 'GitHub',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/github.atom',
    },
    {
      label: 'StackOverflow',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/stackoverflow.atom',
    },
    // { label: 'Twitter', url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/twitter.atom' },
    {
      label: 'Reddit',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/reddit.atom',
    },
    {
      label: 'Mastodon',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/mastodon.atom',
    },
    {
      label: 'YouTube',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/youtube.atom',
    },
  ],

  routeLinks: [
    { label: 'Home', route: '/', color: 'var(--accent-1, #ff0099)' },
    // {
    //   label: 'Blog',
    //   route: '/blog',
    //   color: 'var(--accent-2, #b45eff)',
    //   description: 'Published articles, notes, tutorials and updates',
    // },
    {
      label: 'Projects',
      route: '/projects',
      color: 'var(--accent-3, #01c0f0)',
      description: 'Personal projects and open source work',
    },
    {
      label: 'Contact',
      route: '/contact',
      color: 'var(--accent-1, #ff0099)',
      description: 'Social profile links, GPG keys and contact form',
    },
    {
      label: 'About',
      route: '/about',
      color: 'var(--accent-4, #1de691)',
      description: 'Bio and professional experience',
      subPages: [
        {
          label: 'Volunteering',
          route: '/volunteering',
          color: 'var(--accent-4, #1de691)',
          description: 'Community involvement and volunteer leadership',
        },
      ],
    },
  ],
  footerInfo: {
    author: 'Alicia Sykes',
    authorSite: 'https://github.com/lissy93',
    license: 'MIT',
    licenseLink: '',
    copyright: true,
  },
  githubUser: 'skyefugate',
  defaultTheme: 'callisto',
  defaultLanguage: 'en',
  colorSchemes: {
    dark: {
      // background: '#101010',
      // foreground: '#fafafa',
      // 'dimmed-text': '#808080',
      // 'card-background': '#1b1b1b',
      // 'card-border': '1px solid #2a2a2a',
      // 'code-background': '#333',
      // accent: '#01c0f0',
      // 'accent-1': '#ff0099',
      // 'accent-2': '#b45eff',
      // 'accent-3': '#01c0f0',
      // 'accent-4': '#1de691',
      // 'home-accent-background': '#2a3367',
      // 'home-accent-foreground': 'var(--foreground)',
    },
    light: {
      // background: '#ededed',
      // foreground: '#2a3367',
      // 'card-background': '#F8F8FF',
      // 'card-border': '1px solid #0000001a',
      // 'home-accent-background': '#2a3367',
      // 'home-accent-foreground': 'var(--foreground)',
      
      // 'home-animated-gradient-outer': '#ffe7f500',
      // 'home-animated-gradient-inner': '#ff8ed05c',
    },
    callisto: {
      // background: '#020617',
      // foreground: '#dcdcdc',
      // 'dimmed-text': '#8892b0',
      // 'card-background': '#0b1021',
      // 'card-border': '1px solid #ffffff1a',
      // 'accent-1': '#00ccb4',
      // 'accent-2': '#00ccb4',
      // 'accent-3': '#00ccb4',
      // 'accent-4': '#00ccb4',
      // 'voronoi-background': '#0a192f',

      // 'home-accent-background': '#fff',
      // 'home-tile-background': '#0B1021',
      // 'home-animated-gradient-outer': '#0361f700',
      // 'home-animated-gradient-inner': '#2e2d40',
    },
  },
  workExperience: [
    {
      company: 'Netsmart',
      companyUrl: 'https://ntst.com/',
      companyLogo: '/netsmart-logo.jpeg',
      jobTitle: 'Technology Architect - Plexus Enterprise Architecture',
      datesWorked: 'June 2025 - Present',
      responsibilities: 'Drive cloud strategy and infrastructure modernization across AWS, private cloud, and emerging platforms like Azure and GCP. Design and review infrastructure for scalability, cost efficiency, and operational excellence. Support enterprise migrations, resilience planning, and architecture validation.',
      technologies: ['AWS', 'Azure', 'GCP', 'Infrastructure Architecture', 'Cloud Migration', 'DevOps'],
    },
    {
      company: 'Netsmart',
      companyUrl: 'https://ntst.com/',
      companyLogo: '/netsmart-logo.jpeg',
      jobTitle: 'Team Lead, Network and Infrastructure - Plexus Platforms',
      datesWorked: 'March 2024 - June 2025',
      responsibilities: 'Led a team of skilled professionals ensuring security, reliability, and efficiency of hosting infrastructure. Led Network Major Incident Response team, accelerating issue identification and resolution by over 80%. Implemented NetSecDevOps practices leveraging AI/ML and code-first approaches.',
      technologies: ['Network Security', 'Infrastructure Management', 'Incident Response', 'Team Leadership', 'DevOps'],
    },
    {
      company: 'Netsmart',
      companyUrl: 'https://ntst.com/',
      companyLogo: '/netsmart-logo.jpeg',
      jobTitle: 'Network Security Engineer - Enterprise Cloud Technologies',
      datesWorked: 'June 2022 - March 2024',
      responsibilities: 'Specialized in managing firewalls and serving as point of escalation for datacenter issues. SME for firewalls and security technologies in both private and public cloud. Member of Security Incident Response and Major Incident Response teams.',
      technologies: ['Firewalls', 'Cloud Security', 'Private Cloud', 'Public Cloud', 'Incident Response'],
    },
    {
      company: 'Onsite Logic',
      companyUrl: 'https://onsitelogic.com/',
      companyLogo: '/onsite-logic.jpeg',
      jobTitle: 'Lead Security Engineer',
      datesWorked: 'September 2021 - June 2022',
      responsibilities: 'Engineered and implemented IT infrastructure and security policies for clients. Led a team of five on implementing security controls across various client industries. Committee Chair for Security Management.',
      technologies: ['Security Engineering', 'Infrastructure', 'Team Leadership', 'Client Management'],
    },
    {
      company: 'Cenetric Network Services',
      companyUrl: 'https://cenetric.com/',
      companyLogo: '/cenetric-logo.jpeg',
      jobTitle: 'Security Analyst',
      datesWorked: 'May 2019 - August 2021',
      responsibilities: 'Performed in-house, on-site, and remote computer services as lead engineer on assigned projects. Worked on advanced Network, Security, and IAM rollouts for mid to large scale clients.',
      technologies: ['Network Security', 'IAM', 'Client Services', 'Security Analysis'],
    },
    {
      company: 'Micro Center',
      companyUrl: 'https://microcenter.com/',
      companyLogo: '/micro-center-logo.jpeg',
      jobTitle: 'Apple/Service Engineering Leader',
      datesWorked: 'May 2018 - May 2019',
      responsibilities: 'Diagnosed and repaired macOS, iOS, and Windows devices. Ensured KPIs including Customer Satisfaction, Profit and Loss, and Authorized Service Provider Metrics were met through collaboration with a team of 20+. iOS Repair Deployment Lead and Supervising/Training Technician.',
      technologies: ['macOS', 'iOS', 'Windows', 'Device Repair', 'Team Leadership', 'Training'],
    },
  ],
  volunteerExperience: [
    {
      organization: 'SecKC',
      organizationUrl: 'https://seckc.org/',
      organizationLogo: '',
      role: 'Director of Stuff & Things',
      datesWorked: 'August 2016 - Present',
      responsibilities: 'Plan and schedule InfoSec events with a monthly attendance of 200+ through collaboration with various teams. Ensure that live production for events at various venues meets quality standards. Manage a team of 50+ volunteers to ensure events are executed to attendees satisfaction.',
      achievements: ['11 Time Speaker', 'Monthly events with 200+ attendance', 'Manage 50+ volunteers'],
      technologies: ['Event Management', 'Team Leadership', 'Public Speaking', 'InfoSec Community'],
    },
  ],
  projectComplimentaryData: [
    {
      name: 'AdGuardian-Term',
      thumbnail: 'https://i.ibb.co/wgJDXs2/adguardian-banner-2.png',
    },
    {
      name: 'aliciasykes.com',
      thumbnail: 'https://repository-images.githubusercontent.com/165275206/a5fc1f00-f206-11e9-9f21-6e5f696368e7',
    },
    {
      name: 'all-the-countries',
      thumbnail: 'https://repository-images.githubusercontent.com/331389984/ab3f8a8b-a3bc-493c-9f0c-b119ec1575af',
    },
    {
      name: 'anti-theft-charge',
      thumbnail: 'https://i.ibb.co/LZfDXR9/Screenshot-from-2023-10-29-23-51-27.png',
    },
    {
      name: 'awesome-privacy',
      language: 'astro',
      thumbnail: 'https://repository-images.githubusercontent.com/512269935/6b38d78e-6e4d-484e-bbc8-e0dd81c97e0a',
    },
    {
      name: 'brewfile',
      thumbnail: 'https://i.ibb.co/N9c30xT/lissy93-brewfile-banner.png',
    },
    {
      name: 'bug-bounties',
      thumbnail: 'https://raw.githubusercontent.com/Lissy93/bug-bounties/main/web/public/banner.png',
    },
    {
      name: 'cheat-code',
      thumbnail: 'https://i.ibb.co/3BJNCpg/cheatcode.png',
    },
    {
      name: 'cso',
      thumbnail: 'https://github.com/Lissy93/cso/blob/HEAD/public/banner.png?raw=true',
      language: 'Solid',
    },
    {
      name: 'dashy',
      featured: true,
      thumbnail: 'https://repository-images.githubusercontent.com/343078060/82f850a2-b1af-4e9f-9245-c92700d74856',
    },
    {
      name: 'docker-tcpdump',
      thumbnail: 'https://i.ibb.co/RQyX8kL/docker-tcp-dump.png',
    },
    {
      name: 'dotfiles',
      thumbnail: 'https://i.ibb.co/YyrcjsH/Screenshot-from-2023-12-10-18-19-26.png',
    },
    {
      name: 'email-comparison',
      language: 'lit',
      thumbnail: 'https://i.ibb.co/f8ZfxmW/email-comparison-screenshot.png',
    },
    {
      name: 'espanso-config',
      thumbnail: 'https://repository-images.githubusercontent.com/362820466/b1ef9380-a909-11eb-9d34-2aaf94ed5d95',
    },
    {
      name: 'git-into-open-source',
      thumbnail: 'https://i.ibb.co/Jm8gpBN/git-into-opensource-banner.png',
    },
    {
      name: 'happy-app',
      thumbnail: 'https://repository-images.githubusercontent.com/94193652/5880b180-f208-11e9-9ab5-9f4b86f46017',
    },
    {
      name: 'hasami-shogi',
      thumbnail: 'https://i.ibb.co/vvpw9Yg/upscaled-hasami.jpg',
    },
    {
      name: 'lissy93',
      language: 'markdown',
      thumbnail: 'https://i.ibb.co/TkqZmZ9/Screenshot-from-2023-10-29-23-48-30.png',
    },
    {
      name: 'minesweper',
      thumbnail: 'https://repository-images.githubusercontent.com/19034001/6fff26ca-21ea-4381-bf66-8ceb67bd047a',
    },
    {
      name: 'minimal-terminal-prompt',
      thumbnail: 'https://i.ibb.co/hMMPqPr/minimal-terminal-prompt.png',
    },
    {
      name: 'my-website',
      thumbnail: 'https://i.ibb.co/ZhMTxmR/my-website-banner-image.png',
    },
    {
      name: 'OLD_AdGuardian-Term',
      thumbnail: 'https://i.ibb.co/BykbdjF/Screenshot-from-2023-06-03-22-57-07.png',
    },
    {
      name: 'personal-security-checklist',
      language: 'qwik',
      thumbnail: 'https://i.ibb.co/mTvmYGJ/personal-security-checklist.png',
    },
    {
      name: 'portainer-templates',
      thumbnail: 'https://i.ibb.co/J2g5Czy/portainer-templates-banner.png',
    },
    {
      name: 'revision-quizzes',
      thumbnail: 'https://i.ibb.co/JvCGbYf/revision-quizzes-screenshot.png',
    },
    {
      name: 'sentiment-analysis',
      thumbnail: 'https://i.ibb.co/ysLpBCn/sentiment-analysis-png.png',
    },
    {
      name: 'twitter-sentiment-visualisation',
      thumbnail: 'https://i.ibb.co/W0f10Vv/sentiment-sweep-grid.png',
    },
    {
      name: 'usermonkey',
      thumbnail: 'https://i.ibb.co/hLj9HfR/user-monkey.png',
    },
    {
      name: 'web-check',
      language: 'react',
      thumbnail: 'https://i.ibb.co/mSz2H3n/web-check-banner.png',
    },
    {
      name: 'who-dat',
      thumbnail: 'https://github.com/Lissy93/who-dat/blob/main/public/who-dat.png?raw=true',
    },
  ],
  postComplimentaryData: [
    {
      postRef: '50 ways to bring in extra cash as a developer',
      thumbnail: 'https://i.ibb.co/DDQBHvL/developer-side-hustles.png',
    },
    {
      postRef: 'CLI tools you cant live without',
      thumbnail: 'https://i.ibb.co/F4THZ2T/cli-tools-banner.png',
    },
    {
      postRef: '20 git commands',
      thumbnail: 'https://i.ibb.co/yqtrTTS/git-commands-banner.png',
    },
    {
      postRef: 'useful css resources',
      thumbnail: 'https://i.ibb.co/CMxy3tz/css-resources-2.png',
    },
    {
      postRef: 'my top 50 windows apps',
      thumbnail: 'https://i.ibb.co/nmPRGgp/open-source-windows-apps.png',
    },
    {
      postRef: 'my top 50 android apps',
      thumbnail: 'https://i.ibb.co/cc8WP4K/App-icons-banner-medium.png',
    },
    {
      postRef: 'pimping up your duckduckgo',
      thumbnail: 'https://i.ibb.co/6XYydtq/Duck-Duck-Go-Themes.png',
    },
    {
      postRef: 'custom styling for listed',
      thumbnail: 'https://i.ibb.co/dMh1y13/listed-dark.png',
    },
    {
      postRef: 'fun with realtime data',
      thumbnail: 'https://i.ibb.co/HqJ77Mf/Fun-with-live-data-banner.png',
    },
    {
      postRef: 'fave youtube chanels',
      thumbnail: 'https://i.ibb.co/185MLZq/youtube-channels-banner.png',
    },
    {
      postRef: 'top 25 raspberry pi projects',
      thumbnail: 'https://i.ibb.co/LP1wZtc/Top-Raspberry-Pi-Projects.png',
    },
    {
      postRef: 'using espanso to boost efficiency',
      thumbnail: 'https://i.ibb.co/6W1Bqyz/espanso-config-banner.png',
    },
    {
      postRef: 'hello world',
      thumbnail: 'https://i.ibb.co/0rfWV1f/DSCN0566-1.jpg',
    },
    {
      postRef: 'dashy a selfhosted homelab dashboard',
      thumbnail: 'https://i.ibb.co/c6kTRch/dashy-theme.png',
    },
    { postRef: '', thumbnail: '' },
  ],
  contact: {
    name: 'Skye Fugate',
    email: 'skye@fugate.dev',
    website: 'https://skyefugate.com',
    socials: {
      Twitter: '',
      GitHub: 'skyefugate',
      'Dev.to': '',
      Mastodon: '',
      LinkedIn: 'in/skye-f',
      Instagram: '',
      YouTube: '',
      Reddit: '',
      StackOverflow: '',
      KeyBase: '',
      Facebook: '',
      PeerList: '',
      CodersRank: '',
      'OMG.lol': '',
    },
    socialButtonLimit: 6,
    mailerConfig: {
      service_id: 'gmail',
      template_id: 'website-contact-form',
      user_id: 'user_K6F041q1dQvz8SJLSOZCR',
      template_params: {},
    },
    pgpKeyLink: 'https://keybase.io/skyefugate/pgp_keys.asc',
    pgpPublicKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----
      mQENBFqbwpsBCACxoSZKSkr6zPUSVijbeFV9c7KphqXJxzJqKlWQbMOFL+rj52+Q
      F/wy16+Jze4seOGUNA9OiOcpM/YhSQoeFOBPdj5hOc9IXOTx86bhYi3+84D9o1cW
      Qq80sOeRNwOzjH7539tttQmBPpFTBAIJYa1l/UP2CWBm2cUk7/f/g/pEaCvdqayp
      0uAl3EfNbYkjqw+0GawIjY34Xqza+MONooqDXDJC//xnWDb6UTzTPy3LVX8PMmiw
      Gkt6+3Xlfro+h2Y4AlzvVMjvkBWqJwHa6K4YOUsw6gtxZ/W3UIx6ECM5COa/apX/
      o3F47k+SVduHb0vfNuHQva+k3Rk7WQlSCCGZABEBAAG0OWFsaWNpYS5zeWtlc0Bw
      cm90b25tYWlsLmNvbSA8YWxpY2lhLnN5a2VzQHByb3Rvbm1haWwuY29tPokBPwQQ
      AQgAKQUCWpvCnAYLCQcIAwIJEP7baPVcAoOnBBUICgIDFgIBAhkBAhsDAh4BAAoJ
      EP7baPVcAoOnRbIH/jMstIMLFSwWhTclFr8idbjMMmmcxOoZ7UtwNOKf3kAbSsZ8
      qpQgBYIuN2im3W+WcgM4uqgu4daAXagl6Z0+MsRyPm0ULKVPAmQZuiaxhoXrDsK8
      I/7on5JuU9100pav2GSpDGvWlJj4S91kDYSKA3BqzCwNws5taKYrYfO/2ZgFwx2L
      LG0Zf/V5afBc3wAZUKTqy+4elT9O3XutURdYBatJtgrqlx5p4vFv7neIlaTo1i9m
      BdlsupJDzqUoog6W/vTbLVbgVIBYgYiI1rV9UOD3Ds2y5RMRvKGUheKpc8dATCxD
      W8aHT+I89GhLg9qj6rGDfUYwXmTo/ZD0lo8xH8a0KkFsaWNpYSBTeWtlcyA8YWxp
      Y2lhLnN5a2VzQHByb3Rvbm1haWwuY29tPokBTgQTAQgAOBYhBAaI+NNFh9lU6eUf
      uP7baPVcAoOnBQJe5omDAhsDBQsJCAcCBhUKCQgLAgQWAgMBAh4BAheAAAoJEP7b
      aPVcAoOnI0QIAKmELC7E3d4qvL9pK9mc/GKag9NGZApvQwuTvdoTHq2ggF7YCVZT
      atdPlwKbpYbOfyg5XG+Q2L9oZ6cieilxBSzurK35hZG5vj5s02SNnRb4PAZXiZje
      Z7B6zxzGmxVelsnRQVVIE+dfGvaX8MbXCNJliL2lvu4oE+W3pBZfiMe1ahL3TLGo
      hiCgx1f7Yvrx9NXlouFdZAFnUWrwG9Uk7R6ZYrjvSM+zhNWjZQRroNIem1Fsn5fX
      EcStRazzbLvIib4x0+0M+D4yRBEX0MGRF4VMDksW4rV9QiMnRoe5QZbITtTFuT4r
      cn1ZH6iQviJuAsfCb/PqKjkUP21b0BJkcZa5AQ0EWpvCmwEIANo4THKI5PMzSzsR
      I+uf9Lj2nFj0R/Vw7FtWNVzvQ/G2yH/GRc39n3GUWFkW93N+Sqep70aRWwCod2pN
      tQSYG7qBOk1uL3HRbCUIIf4scb+qjuDMdJPxJPxqEGQaDIAYm8dH5uDq9BQm6xqX
      0jDgjGWqNprnSYBOU0+29G/jjRmZC3IFmQNByXT4kdkduLOAOws2wMGMAf9XV/eE
      ED4ZF4s0Syg1MJgx82OcTEA7dzSImBArXgdlc9/MTEoX7D7JtG30r/Q7vU7oj7pa
      pKfjng2BEw98+jc7qARKz2SMORkmLLAS0mxsCe6QH7cx71cd7ptEHV18iFTNBCoq
      c1JqTPcAEQEAAYkBKQQYAQgAEwUCWpvCnQkQ/tto9VwCg6cCGwwACgkQ/tto9VwC
      g6fLWQf+K2HgzOxsKx5CWICoDjqk2zqOT1I7nf5nD7CqQIwP3tUsl+RZu85EyEHY
      XE30sOx0ZdGoU1fCCsA785gSPG2NObIeVQMOLBMftSv/IO2qZJvl3lfEDfurPZ4K
      Ywl5lyDR6iF7D96IYrYHInDA53mKDvrSVBF8w1tt2CUS1o2YZUST9061gX7KSEn1
      FstAf/0TpFnXDbdM/O0gLAkPPCcynWZzX+Ujwsca0xZF3lcRR5xtjCTTdvhbI3PP
      q7lzS3Uq09Iz0Vb+RtP5TzTlllbhWEREorY5nVRu89rt+zv8SbkqyOmKR0/e7UDj
      mFFVmpQe2X/qgZBVVYC+LjpxNEMt6w==
      =dpLK
      -----END PGP PUBLIC KEY BLOCK-----
`,
  },
  about: {
    intro: 'Enterprise Technology Architect & InfoSec Community Builder',
    bio: [
      "Hey, I'm Skye.",

      "I build, break, rebuild, and secure stuff that keeps technology running — currently an Enterprise Technology Architect at Netsmart.",

      "I'm deep into cloud architecture, automation, and technology classes on Udemy at 2am.",

      "Outside the day job, I help run InfoSec events like SecKC, BSidesKC, and DEF CON — wrangling volunteers, planning chaos, and making sure the community stays fun, inclusive, and just the right amount of weird.",

      "I really enjoy sharing knowledge — mentoring, giving talks, and showing people that cybersecurity isn't a dark art. It's just puzzles, teamwork, and persistence — with the occasional caffeine fueled incident call.",

      "In short: I architect secure systems, love a good hackathon, and believe community is where the real innovation happens."
    ],
    picture: '/headshot.jpg',
  },
  techStack: {
    backend: [
      {
        language: 'Rust',
        projects: ['AdGuardian-Term'],
      },
      {
        language: 'Go',
        projects: ['who-dat', 'go-apod', 'OLD_AdGuardian-Term'],
      },
      {
        language: 'Node',
        projects: ['twitter-sentiment-visualisation', 'quick-example-of-testing-in-nodejs'],
      },
      {
        language: 'Python',
        projects: ['portainer-templates', 'gh-trending-no-cors', 'tfl-lift-availability-dash', 'pax'],
      },
      {
        language: 'Java',
        projects: ['Minesweper', 'AlternativeVoteSystem', 'TuneSender', 'TreasureHunt'],
      },
      {
        language: 'PHP',
        projects: [ 'revision-quizzes', 'intern-magnet', 'usermonkey' ],
      },
    ],
    frontend: [
      {
        language: 'Vue',
        projects: ['dashy', 'all-the-countries', 'alicia-sykes-website', 'tfl-lift-availability-dash'],
      },
      {
        language: 'Svelte',
        projects: ['my-website', 'cheat-code'],
      },
      {
        language: 'React',
        projects: ['web-check'],
      },
      {
        language: 'Solid',
        projects: ['cso'],
      },
      {
        language: 'Angular',
        projects: ['happy-app', 'realtime-speech-analytics'],
      },
      {
        language: 'Astro',
        projects: ['git-into-open-source'],
      },
      {
        language: 'D3',
        projects: ['twitter-sentiment-visualisation', 'happy-app', 'realtime-speech-analytics'],
      },
      {
        language: 'Alpine',
        projects: ['who-dat'],
      },
      {
        language: 'CoffeeScript',
        projects: ['sentiment-analysis'],
      },
      {
        language: 'HTML',
        projects: ['repo-badge-maker ', 'bullet-convertor', 'md-toc-generator', 'email-extractor', 'cyber-defence-presentation', 'web-dev-school', 'md-cv-maker'],
      },
    ],
    mobile: [
      {
        language: 'Swift',
        projects: ['hasami-shogi', 'Spotter'],
      },
      {
        language: 'Kotlin',
        projects: ['anti-theft-charge'],
      },
      {
        language: 'Flutter',
        projects: ['nfu'],
      },
      {
        language: 'Android',
        projects: ['Minesweper', 'anti-theft-charge', 'TuneSender', 'TreasureHunt', 'got-home-safe', 'Study-Time'],
      },
      // {
      //   language: 'React Native',
      //   projects: [''],
      // },
    ],
    other: [
      {
        language: 'Bash',
        projects: ['minimal-terminal-prompt'],
      },
      {
        language: 'Docker',
        projects: ['docker-tcpdump', 'dashy'],
      },
      {
        language: 'Config',
        projects: ['dotfiles', 'espanso-config', 'conky-system-stats-widget', 'Brewfile'],
      },
      {
        language: 'Markdown',
        projects: ['personal-security-checklist', 'awesome-privacy'],
      },
    ],
  },
  techStackExtras: {
    devOps: [
      'Ansible', 'Kubernetes', 'Prometheus', 'GitHubActions', 'Grafana',
    ],
    cloud: [
      'Netlify', 'Vercel', 'Cloudflare', 'Azure', 'AWS', 'GCP',
    ],
    databases: [
      'PostgreSQL', 'SQLite', 'Redis','MySQL', 'MongoDB',
    ],
    testing: [
      'Jest', 'Puppeteer', 'Enzyme', 'Cypress',
    ],
    security: [
      'Nmap', 'OWASPZAP', 'BurpSuite', 'Wireshark',
    ],
  },
};

export default config;
