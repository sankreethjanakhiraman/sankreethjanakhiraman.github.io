// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'sankreethjanakhiraman',
  },

  avatar: {
  src: 'Iam.jpeg',
  alt: 'Sankreeth Janakhiraman',
},

  base: '/',

  projects: {
    github: {
      display: false,
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Footstep Power Generation System',
          description:
            'Designed and implemented a PCB-based piezoelectric energy harvesting system generating 5–12V per step using Arduino. Conducted 20+ controlled trials and published results in IJCRT (Apr 2024).',
          imageUrl:
            'https://img.freepik.com/free-vector/electric-energy-concept-illustration_114360-1809.jpg',
          link: 'https://drive.google.com/drive/folders/1tYW2LdSSsAfkuKCOqxOVxYnVV31EMePX?usp=share_link',
        },
        {
          title: 'Wireless Surveillance Robot',
          description:
            'ESP32-based night vision surveillance robot enabling real-time video transmission (25–30 FPS) with 30–50m wireless range for remote hazardous monitoring.',
          imageUrl:
            'https://img.freepik.com/free-vector/robotics-concept-illustration_114360-8230.jpg',
          link: 'https://drive.google.com/drive/folders/1TXNG9Lc3gQaBKz6br0V2KrJvJ6el7xkb?usp=share_link',
        },
        {
          title: 'Pulse Rate Detector',
          description:
            'Arduino-based wearable heart rate monitoring system achieving ±3–5 BPM accuracy with improved signal stability using noise filtering techniques.',
          imageUrl:
            'https://img.freepik.com/free-vector/heartbeat-concept-illustration_114360-1617.jpg',
          link: '',
        },
      ],
    },
  },

  seo: {
  title: 'Sankreeth Janakhiraman | Electrical & Computer Engineer',
  description:
    'Graduate student at IIT Chicago with experience in hardware-software integration, sensing systems, and real-world engineering prototypes.',
  bio: 'Electrical & Computer Engineering Graduate Student at IIT Chicago with hands-on experience in system design, prototyping, and applied engineering development.',
  imageURL: '',
},

  social: {
    linkedin: 'www.linkedin.com/in/sankreeth-janakhiraman',
    github: 'sankreethjanakhiraman',
    email: 'sankreeth24@gmail.com',
  },

  resume: {
    fileUrl: 'resume updated.pdf',
  },

  skills: [
  'Arduino IDE',
  'Automation',
  'STM32CubeIDE',
  'MATLAB',
  'LTSpice',
  'Altium Designer',
  'Multisim',
  'Oscilloscope',
  'Logic Analyzer',
  'Breadboarding',
  'Linux',
  'Java',
  'C Programming',
  'Python',
  'Go',
  'Conflict Resolution',
  'Strategic Planning',
  'Cross-functional Collaboration',
  'Delegation',
  'Presentation',
],

  experiences: [
    {
      company: 'Indian Student Association, IIT Chicago',
      position: 'Head of Photography',
      from: 'Dec 2025',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Indian Student Association, IIT Chicago',
      position: 'Member',
      from: 'Jan 2025',
      to: 'Dec 2025',
      companyLink: '',
    },
    {
      company: 'NSIC, Chennai',
      position: 'Technical Service Intern',
      from: 'Sep 2022',
      to: 'Oct 2022',
      companyLink: '',
    },
  ],

  educations: [
  {
    institution: 'Illinois Institute of Technology, Chicago',
    degree: 'MS in Electrical and Computer Engineering (GPA: 3.5 / 4.0)',
    from: '2025',
    to: '2027',
  },
  {
    institution: 'Rajalakshmi Engineering College, Chennai',
    degree: 'BE in Electronics and Communication Engineering (GPA: 3.12 / 4.0)',
    from: '2020',
    to: '2024',
  },
],

  publications: [
    {
      title:
        'Footstep Power Generation Using Piezoelectric Sensor',
      journalName: 'IJCRT',
      authors: 'Sankreeth Janakhiraman et al.',
      link: '',
      description:
        'Published research on PCB-based piezoelectric energy harvesting system with experimental validation across multiple load conditions.',
    },
  ],

  blog: {
    source: 'dev',
    username: '',
    limit: 0,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: { id: '', snippetVersion: 6 },

  themeConfig: {
    defaultTheme: 'business',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'business',
      'night',
      'dracula',
      'luxury',
      'corporate',
      'forest',
      'coffee',
    ],
  },

  footer: `© 2026 Sankreeth Janakhiraman`,

  enablePWA: true,
};

export default CONFIG;
