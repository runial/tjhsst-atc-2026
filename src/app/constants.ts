type Brand<a, b> = a & { __brand: b };
export type MarkdownString = Brand<string, 'MarkdownString'>;

/* Links */
export type Link = {
    readonly linkText: string;
    readonly linkUrl: string;
    readonly isExternal?: boolean;
};

export const SITE_LINKS: Record<string, Link> = {
    HOME: {
        linkUrl: '/',
        linkText: 'Home',
    },
    ABOUT: {
        linkUrl: '/about',
        linkText: 'About',
    },
    GAMES: {
        linkUrl: '/games',
        linkText: 'Games',
    },
    ATCONNECT: {
        linkUrl: '/atconnect',
        linkText: 'ATConnect',
    },
    ATCONNECT25: {
        linkUrl: '/atconnect25',
        linkText: 'ATConnect 2025'
    },
    EMAIL: {
        linkUrl: 'mailto:richard.tang@tjatc.org',
        linkText: 'richard.tang@tjatc.org',
    },
    OPENHOUSE25: {
        linkUrl: 'https://tinyurl.com/ATConnectOpenHouse26',
        linkText: 'Open House Registration',
    },
    INTERESTFORM26: {
        linkUrl: 'https://tinyurl.com/atconnect26',
        linkText: 'ATConnect 2026 Sign-Up Form',
    }
} as const;

/* Navbar */
export const NAVBAR_CLUB_NAME = 'TJ Assistive Technology';
export const NAVBAR_HOMEPAGE_LINK = SITE_LINKS.HOME;
export const NAVBAR_LINKS: Link[] = [
    SITE_LINKS.ABOUT,
    SITE_LINKS.GAMES,
    SITE_LINKS.ATCONNECT,
] as const;

/* Footer */
export const FOOTER_LEFTHAND_TEXT = `© TJATC ${(new Date()).getFullYear()}`;
export const FOOTER_AUTHOR_INFO = 'By Uzair Nasir';
export const FOOTER_LINKS: Link[] = [
    {
        linkText: 'GitHub',
        linkUrl: 'https://github.com/runial/tjhsst-atc',
    },
    {
        linkText: 'Facebook',
        linkUrl: 'https://www.facebook.com/groups/1041458340943652',
    },
    {
        linkText: 'Instagram',
        linkUrl: 'https://instagram.com/tjassistivetech',
    },
    {
        linkText: 'Email',
        linkUrl: SITE_LINKS.EMAIL.linkUrl,
    }
] as const;

/* Home page */
export const HOME_SECTION_HEADERS = {
    HERO: 'We are TJ\'s Assistive Technology Club.',
    ABOUT: 'We help kids.',
    PROJECTS: 'We build games.',
    ATCONNECT: 'ATConnect',
    LEADERS: 'Leadership',
} as const;
export const HOME_SECTION_DESCRIPTIONS = {
    HERO: 'Join the Assistive Tech Club at TJHSST to help design, build, and implement assistive technology. Whether it\'s through hosting ATConnect, crafting projects, or making games, we\'re dedicated to making a real difference in our community.',
    ABOUT: 'Since our club\'s founding over a decade ago, we\'ve changed a lot. But one thing has remained clear: our unwavering dedication to help others through assistive tech.  We hope you’ll join us in using your STEM skills for good. Everyone is welcome!',
  ATCONNECT:
`This year, we hosted our **second ATConnect** at TJHSST! The student-run event brought together educators, students, and community members from across the county to explore assistive technology.

We had **over 100 participants** attend, along with many exciting tech demos, hands-on activities, and student-led projects. It was a great opportunity to share ideas, showcase innovation, and connect people who are passionate about making technology more accessible.

**We’re excited to continue growing ATConnect in the future!** Thank you to everyone who helped make this year’s event successful.` as MarkdownString,
} as const;
export const HOME_SECTION_MORE_TEXT = {
    ABOUT: 'Learn more →',
    PROJECTS: 'View more →',
    ATCONNECT: 'Learn more →',
} as const;
export const HOME_ATCONNECT_IMAGES = [
      '/atconnect2026/picture1.webp',
    '/atconnect2026/picture2.webp',
    '/atconnect2026/picture3.webp',
    '/atconnect2026/picture4.webp',
    '/atconnect2026/picture5.webp',
    '/atconnect2026/picture6.webp',
    '/atconnect2026/picture7.webp',
    '/atconnect2026/picture8.webp',
    '/atconnect2026/picture9.webp',
    '/atconnect2026/picture10.webp',
    '/atconnect2026/picture11.webp',
] as const;
export const HOME_EMAIL_BUTTON_LINK = SITE_LINKS.EMAIL.linkUrl;
export const HOME_EMAIL_BUTTON_TEXT = 'Contact us\u00A0→';
export const HOME_PROMO_BUTTON_LINK = SITE_LINKS.ATCONNECT.linkUrl;
export const HOME_PROMO_BUTTON_TEXT = 'ATConnect\u00A0→';

/* About */
export const ABOUT_SECTION_HEADERS = {
    HERO: 'Powered by love',
    STATS: 'Stats',
    ACTIVITIES: 'Activities',
    RECRUITING: 'Join us!',
} as const;

export const ABOUT_SECTION_DESCRIPTIONS = {
    HERO: 'We are the Assistive Technology Club at TJHSST (TJ ATC), a top STEM high school in Alexandria, Virginia. Since our founding, we\'ve been dedicated to helping others however we can, whether it\'s through tailored assistive tech solutions, hosting events, or field trips. We hope you\'ll join us in supporting our mission! Anyone is welcome.',
    RECRUITING: `Interested in joining our club? We meet every Wednesday during 8A at TJ. If you don't go to TJ but are interested in expanding ATC to other schools, please contact us at ${SITE_LINKS.EMAIL.linkText}.`,
} as const;

export type Stat = {
    readonly name: string;
    readonly value: string;
};
export const ABOUT_STATS: Stat[] = [
    {
        value: '10+',
        name: 'years since founding',
    },
    {
        value: '250+',
        name: 'club meetings'
    },
    {
        value: '30+',
        name: 'club members',
    }
] as const;

export type AboutActivity = {
    readonly name: string;
    readonly description: string;
};
export const ABOUT_ACTIVITIES: AboutActivity[] = [
    {
        name: 'MIT CRE[AT]E',
        description: 'Every year, we split up into teams and participate in the MIT CRE[AT]E challenge. Throughout this challenge, we work collaboratively to develop assistive technology, gaining valuable collaboration and technical skills.',
    },
    {
        name: 'Making games',
        description: 'During the school year, we meet every weekend to make all sorts of games for special needs students, ranging from would you rather games to spinner games and more.',
    },
    {
        name: 'Meeting with students',
        description: 'We meet with special needs students from across Fairfax County every meeting, working with them to develop crucial vocabulary skills.',
    },
    {
        name: 'Outreach',
        description: 'Whether it\'s through hosting ATConnect or hosting booths at Techstrav, we\'re commited to spreading our mission as far as possible.',
    },
];

/* Games/Projects */
export const GAMES_HEADER = "Games";

/* ATConnect */
export const ATCONNECT_TAGLINE = "ATConnect 2026 Recap";

export const ATCONNECT_MAIN_DESCRIPTION: MarkdownString = `
Thank you for helping make **ATConnect 2026** a success! This year, our student-led assistive technology fair brought together **140+ participants** and helped raise **$2.5k+** to support our mission.

ATConnect connected students, educators, families, sponsors, and community members through assistive technology demos, student-led projects, networking, and hands-on activities. We were honored to host everyone who attended, volunteered, presented, sponsored, or supported the event.

Please stay tuned for next year! We are always open to new sponsors, booth holders, attendees, and students interested in assistive technology. If you have any questions, please contact us at [${SITE_LINKS.EMAIL.linkText}](${SITE_LINKS.EMAIL.linkUrl}).` as MarkdownString;

export const ATCONNECT_OPEN_HOUSE_DESCRIPTION: MarkdownString = `
ATConnect is our student-led assistive technology fair at TJHSST. The event is designed to bring together students, educators, families, organizations, and community members who care about accessibility and inclusive technology.

This year’s event featured student-led projects, assistive technology demonstrations, community booths, networking opportunities, food, and presentations. Thank you to everyone who helped make **ATConnect 2026** possible.` as MarkdownString;

export const ATCONNECT_ITERATIONS_DESCRIPTION = "Past years: ";
export type ATConnectIteration = {
    readonly year: number;
    readonly link: string;
};
export const ATCONNECT_ITERATIONS: ATConnectIteration[] = [
    {
        year: 2025,
        link: SITE_LINKS.ATCONNECT25.linkUrl,
    }
] as const;

/* ATConnect Banner */
export const ATCONNECT_BANNER_TEXT = "ATConnect, our student-led assistive tech fair, is on April 25, 2026 from 11 AM to 3 PM @ TJHSST in Alexandria, Virginia! Join us for an exciting day of innovation, networking opportunities, and a chance to showcase your assistive tech project.";
export const ATCONNECT_BANNER_LINK: Link = {
    linkUrl: SITE_LINKS.INTERESTFORM26.linkUrl,
    linkText: 'Sign\u00A0up\u00A0→',
    isExternal: true,
};
