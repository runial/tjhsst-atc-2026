export type Link = {
    linkText: string;
    linkUrl: string;
};

/* Navbar */
export const NAVBAR_CLUB_NAME = 'TJ ATC';
export const NAVBAR_HOMEPAGE_LINK = '/';
export const NAVBAR_LINKS: Link[] = [
    {
        linkText: 'About',
        linkUrl: '/about_us',
    },
    {
        linkText: 'Games',
        linkUrl: '/games',
    },
    {
        linkText: 'ATConnect',
        linkUrl: '/at_connect',
    },
] as const;

/* Footer */
export const FOOTER_LEFTHAND_TEXT = '© TJATC 2025';
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
        linkUrl: 'mailto:info@tjatc.org',
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
    HERO: 'Join the TJ Assistive Tech Club to help design, build, and implement assistive technology. Whether it\'s through hosting ATConnect, crafting projects, or making games, we\'re dedicated to making a real difference in our community.',
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

/* About */
export const ABOUT_SECTION_HEADERS = {
    HERO: 'Powered by love',
    STATS: 'Stats',
    ACTIVITIES: 'Activities',
    RECRUITING: 'Join us!',
} as const;

export const ABOUT_SECTION_DESCRIPTIONS = {
    HERO: 'We are Thomas Jefferson High School\'s Assistive Technology Club (TJ ATC). A club that works with elementary students with verbal and motor disabilities in Fairfax County Public Schools. In the midst of a competition focused world, we hope to provide connection between us and other students.',
    RECRUITING: 'Interested in joining our club? We meet every Wednesday during 8A at TJ. If you don\'t go to TJ but are interested in expanding ATC to other schools, please contact us at info@tjatc.org',
} as const;

export type Stat = {
    name: string;
    value: string;
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
    name: string;
    description: string;
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