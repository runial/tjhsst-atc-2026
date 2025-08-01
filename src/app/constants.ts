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
        linkUrl: 'mailto:info@tjatc.org',
        linkText: 'info@tjatc.org',
    },
} as const;

/* Navbar */
export const NAVBAR_CLUB_NAME = 'TJ ATC';
export const NAVBAR_HOMEPAGE_LINK = SITE_LINKS.HOME;
export const NAVBAR_LINKS: Link[] = [
    SITE_LINKS.ABOUT,
    SITE_LINKS.GAMES,
    SITE_LINKS.ATCONNECT,
] as const;

/* Footer */
export const FOOTER_LEFTHAND_TEXT = `© TJATC ${(new Date()).getFullYear()}`;
export const FOOTER_AUTHOR_INFO = 'By Richard Tang';
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
    ATCONNECT: 'This year, we hosted our first-ever ATConnect! This student-run event at TJHSST connected educators and students from across the county through assistive tech. We had so many cool tech demos and student-led projects. Stay tuned for ATConnect 2026!'
} as const;
export const HOME_SECTION_MORE_TEXT = {
    ABOUT: 'Learn more →',
    PROJECTS: 'View more →',
    ATCONNECT: 'Learn more →',
} as const;
export const HOME_ATCONNECT_IMAGES = [
    '/atconnect2025/atconnect2025_1.webp',
    '/atconnect2025/atconnect2025_2.webp',
    '/atconnect2025/atconnect2025_3.webp',
    '/atconnect2025/atconnect2025_4.webp',
    '/atconnect2025/atconnect2025_5.webp',
    '/atconnect2025/atconnect2025_6.webp',
    '/atconnect2025/atconnect2025_7.webp',
    '/atconnect2025/atconnect2025_8.webp',
    '/atconnect2025/atconnect2025_9.webp',
    '/atconnect2025/atconnect2025_10.webp',
    '/atconnect2025/atconnect2025_11.webp',
    '/atconnect2025/atconnect2025_12.webp',
    '/atconnect2025/atconnect2025_13.webp',
    '/atconnect2025/atconnect2025_14.webp',
    '/atconnect2025/atconnect2025_15.webp',
    '/atconnect2025/atconnect2025_16.webp',
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
    HERO: 'We are the Assistive Technology Club at TJHSST (TJ ATC), a top STEM high school in Alexanrdia, Virginia. Since our founding, we\'ve been dedicated to helping others however we can, whether it\'s through tailored assistive tech solutions, hosting events, or field trips. We hope you\'ll join us in supporting our mission.',
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
export const ATCONNECT_TAGLINE = "Stay tuned for ATConnect '26!";
export const ATCONNECT_DESCRIPTION = `This year, we hosted our first-ever ATConnect! We were thrilled to have students, parents, teachers, and companies alike come together to share and learn about assistive technology. ATConnect '26 is currently a work in progress. If you would like to sponsor us or have any inquiries, please let us know at ${SITE_LINKS.EMAIL.linkText}.`;
export const ATCONNECT_ITERATIONS_DESCRIPTION = "View past iterations of ATConnect: ";
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
export const ATCONNECT_BANNER_TEXT = "ATConnect '26 is coming soon! Stay tuned for updates.";
export const ATCONNECT_BANNER_LINK: Link = {
    linkUrl: SITE_LINKS.ATCONNECT.linkUrl,
    linkText: 'Learn more\u00A0→',
    isExternal: false,
};