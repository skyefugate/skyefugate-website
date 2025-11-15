import type { SiteConfig } from '$src/types/Config';

const config: SiteConfig = {
  title: 'Skye Fugate',
  author: 'Skye Fugate',
  description: 'The personal website of Skye Fugate',
  source: 'https://github.com/skyefugate/skyefugate-website',
  baseUrl: 'https://fugate.dev',
  initialFeeds: [],
  additionalFeeds: [],

  routeLinks: [
    { label: 'Home', route: '/', color: 'var(--accent-1, #ff0099)' },
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
    {
      label: 'Blog',
      route: '/blog',
      color: 'var(--accent-2, #b45eff)',
      description: 'Published articles, notes, tutorials and updates',
    },
  ],
  footerInfo: {
    author: '',
    authorSite: '',
    license: '',
    licenseLink: '',
    copyright: false,
  },
  defaultTheme: 'callisto',
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
      companyLogo: '/images/logos/netsmart-logo.jpeg',
      jobTitle: 'Technology Architect - Plexus Enterprise Architecture',
      datesWorked: 'June 2025 - Present',
      responsibilities: 'Drive cloud strategy and infrastructure modernization across AWS, private cloud, and emerging platforms like Azure and GCP. Design and review infrastructure for scalability, cost efficiency, and operational excellence. Support enterprise migrations, resilience planning, and architecture validation.',
      technologies: ['AWS', 'Azure', 'GCP', 'Infrastructure Architecture', 'Cloud Migration', 'DevOps'],
    },
    {
      company: 'Netsmart',
      companyUrl: 'https://ntst.com/',
      companyLogo: '/images/logos/netsmart-logo.jpeg',
      jobTitle: 'Team Lead, Network and Infrastructure - Plexus Platforms',
      datesWorked: 'March 2024 - June 2025',
      responsibilities: 'Led a team of skilled professionals ensuring security, reliability, and efficiency of hosting infrastructure. Led Network Major Incident Response team, accelerating issue identification and resolution by over 80%. Implemented NetSecDevOps practices leveraging AI/ML and code-first approaches.',
      technologies: ['Network Security', 'Infrastructure Management', 'Incident Response', 'Team Leadership', 'DevOps'],
    },
    {
      company: 'Netsmart',
      companyUrl: 'https://ntst.com/',
      companyLogo: '/images/logos/netsmart-logo.jpeg',
      jobTitle: 'Network Security Engineer - Enterprise Cloud Technologies',
      datesWorked: 'June 2022 - March 2024',
      responsibilities: 'Specialized in managing firewalls and serving as point of escalation for datacenter issues. SME for firewalls and security technologies in both private and public cloud. Member of Security Incident Response and Major Incident Response teams.',
      technologies: ['Firewalls', 'Cloud Security', 'Private Cloud', 'Public Cloud', 'Incident Response'],
    },
    {
      company: 'Onsite Logic',
      companyUrl: 'https://onsitelogic.com/',
      companyLogo: '/images/misc/onsite-logic.jpeg',
      jobTitle: 'Lead Security Engineer',
      datesWorked: 'September 2021 - June 2022',
      responsibilities: 'Engineered and implemented IT infrastructure and security policies for clients. Led a team of five on implementing security controls across various client industries. Committee Chair for Security Management.',
      technologies: ['Security Engineering', 'Infrastructure', 'Team Leadership', 'Client Management'],
    },
    {
      company: 'Cenetric Network Services',
      companyUrl: 'https://cenetric.com/',
      companyLogo: '/images/logos/cenetric-logo.jpeg',
      jobTitle: 'Security Analyst',
      datesWorked: 'May 2019 - August 2021',
      responsibilities: 'Performed in-house, on-site, and remote computer services as lead engineer on assigned projects. Worked on advanced Network, Security, and IAM rollouts for mid to large scale clients.',
      technologies: ['Network Security', 'IAM', 'Client Services', 'Security Analysis'],
    },
    {
      company: 'Micro Center',
      companyUrl: 'https://microcenter.com/',
      companyLogo: '/images/logos/micro-center-logo.jpeg',
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
      organizationLogo: '/images/misc/seckc-party-star.jpg',
      role: 'Director of Stuff & Things',
      datesWorked: 'August 2016 - Present',
      responsibilities: 'Plan and schedule InfoSec events with a monthly attendance of 200+ through collaboration with various teams. Ensure that live production for events at various venues meets quality standards. Manage a team of 50+ volunteers to ensure events are executed to attendees satisfaction.',
      achievements: ['11 Time Speaker', 'Monthly events with 200+ attendance', 'Manage 50+ volunteers'],
      technologies: ['Event Management', 'Team Leadership', 'Public Speaking', 'InfoSec Community'],
    },
    {
      organization: 'ITDRC',
      organizationUrl: 'https://www.itdrc.org/',
      organizationLogo: '/images/logos/ITDRC_logo.png',
      role: 'Volunteer',
      datesWorked: '2020 - Present',
      responsibilities: 'Support IT disaster recovery operations and emergency communications infrastructure. Assist with technology deployment and coordination during disaster response scenarios.',
      achievements: ['Emergency Communications', 'Disaster Response Support', 'Technology Deployment'],
      technologies: ['Emergency Communications', 'Disaster Recovery', 'IT Infrastructure', 'Crisis Management'],
    },
    {
      organization: 'DEF CON',
      organizationUrl: 'https://defcon.org/',
      organizationLogo: 'https://media.defcon.org/DEF%20CON%2032/DEF%20CON%2032%20logos/defcon-32-logo-red-black.png',
      role: 'Volunteer',
      datesWorked: '2019 - Present',
      responsibilities: 'Support conference operations at the world\'s largest hacker convention. Assist with event logistics, attendee support, and maintaining the unique DEF CON culture and experience.',
      achievements: ['Multi-year Volunteer', 'Conference Operations', 'Community Support'],
      technologies: ['Event Operations', 'Community Management', 'Hacker Culture', 'Conference Logistics'],
    },
  ],
  projectComplimentaryData: [],
  postComplimentaryData: [],
  contact: {
    name: 'Skye Fugate',
    email: 'skye@fugate.dev',
    website: 'https://skyefugate.com',
    socials: {
      Twitter: 'CodexMafia',
      GitHub: 'skyefugate',
      'Dev.to': 'skyefugate',
      Mastodon: 'skyefugate',
      LinkedIn: 'in/skye-f',
      Instagram: '',
      YouTube: 'CodexMafia',
      Reddit: '',
      StackOverflow: 'skyefugate',
      KeyBase: 's',
      Facebook: '',
      PeerList: 'skyefugate',
      CodersRank: 'skyefugate',
      'OMG.lol': '',
    },
    socialButtonLimit: 6,
    mailerConfig: {
      service_id: 'gmail',
      template_id: 'website-contact-form',
      user_id: 'user_K6F041q1dQvz8SJLSOZCR',
      template_params: {},
    },
    pgpKeyLink: '',
    pgpPublicKey: '',
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
        language: 'Python',
        projects: ['portainer-templates', 'gh-trending-no-cors', 'automation-scripts'],
      },
      {
        language: 'Go',
        projects: ['who-dat', 'go-apod', 'infrastructure-tools'],
      },
      {
        language: 'Node',
        projects: ['monitoring-dashboards', 'api-integrations'],
      },
      {
        language: 'Bash',
        projects: ['deployment-scripts', 'system-automation'],
      },
      {
        language: 'PowerShell',
        projects: ['windows-automation', 'ad-management'],
      },
    ],
    frontend: [
      {
        language: 'Svelte',
        projects: ['skyefugate-website', 'dashboard-interfaces'],
      },
      {
        language: 'React',
        projects: ['monitoring-ui', 'admin-panels'],
      },
      {
        language: 'Vue',
        projects: ['configuration-portals', 'status-dashboards'],
      },
      {
        language: 'HTML/CSS',
        projects: ['documentation-sites', 'landing-pages'],
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
        language: 'iOS/macOS',
        projects: ['device-management', 'enterprise-apps'],
      },
      {
        language: 'Android',
        projects: ['security-tools', 'monitoring-apps'],
      },
    ],
    other: [
      {
        language: 'Bash',
        projects: ['automation-scripts', 'deployment-tools'],
      },
      {
        language: 'PowerShell',
        projects: ['windows-automation', 'ad-scripts'],
      },
      {
        language: 'Docker',
        projects: ['containerization', 'microservices'],
      },
      {
        language: 'Terraform',
        projects: ['infrastructure-as-code', 'cloud-provisioning'],
      },
      {
        language: 'YAML/JSON',
        projects: ['configuration-management', 'ci-cd-pipelines'],
      },
    ],
  },
  techStackExtras: {
    devOps: [
      'Ansible', 'Terraform', 'Kubernetes', 'Docker', 'GitHubActions', 'Jenkins',
    ],
    cloud: [
      'AWS', 'Azure', 'GCP', 'Cloudflare', 'VMware', 'Hyper-V',
    ],
    databases: [
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite',
    ],
    networking: [
      'Cisco', 'Juniper', 'pfSense', 'VPN', 'Load Balancers', 'DNS',
    ],
    security: [
      'Firewalls', 'SIEM', 'Vulnerability Scanning', 'Incident Response', 'Network Security',
    ],
    monitoring: [
      'Prometheus', 'Grafana', 'Datadog', 'Splunk', 'ELK Stack',
    ],
  },
};

export default config;
