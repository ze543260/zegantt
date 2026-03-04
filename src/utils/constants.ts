export const tw = {
    white: '#FFFFFF',
    dark_gray: '#4F4F4F',
    gray: '#7B7B7B',
    light_gray: '#D9D9D9',
    dark_green: '#1A3C30',
    water_green: '#7ab7a3',
    light_yellow: '#D1D8A0',
    light_green: '#A0D8A8',
    orange: '#CD6200',
    yellow: '#FFBB1C',
    red: '#FF0000',
};

export const C = {
    pageBg: '#F8FAFB',
    surface: tw.white,         // #FFFFFF
    surfaceAlt: '#F7FAF8',        // subtle alternating row
    headerBg: '#F2F5F3',        // soft green-tinted header
    textTitle: tw.dark_green,    // #1A3C30
    textPrimary: tw.dark_gray,     // #4F4F4F
    textSecondary: tw.gray,          // #7B7B7B
    textMuted: tw.light_gray,    // #D9D9D9

    group: tw.dark_green,    // #1A3C30
    groupLight: tw.water_green,   // #4AAE8B78
    task: tw.dark_green,    // #1A3C30 (progress)
    taskLight: tw.light_yellow,  // #D1D8A0 (bar bg)
    taskMuted: tw.light_green,   // #A0D8A8 (bar border)
    milestone: tw.dark_green,    // #1A3C30
    milestoneRing: tw.light_green,   // #A0D8A8
    event: tw.orange,        // #CD6200
    eventLight: `${tw.yellow}33`, // yellow translucent
    note: tw.yellow,        // #FFBB1C

    border: tw.light_gray,    // #D9D9D9
    borderLight: '#ECECEC',
    weekendBg: '#F4F6F5',

    today: tw.red,           // #FF0000
    todayBg: '#FF000008',      // today column tint
    arrow: tw.gray,          // #7B7B7B
    arrowHover: tw.dark_green,    // #1A3C30
} as const;

export const ROW_H = 50;
export const HEADER_ROW_H = 32;
export const HEADER_H = HEADER_ROW_H * 2;
export const LEFT_W = 460;
export const BAR_H = 26;
export const PILL_H = 28;
export const PILL_MIN_W = 120;
export const POSTIT_W = 90;
export const POSTIT_H = 44;
export const DAY_W_MONTH = 40;
export const DAY_W_YEAR = 3.5;

export const STEP_PALETTE: { bar: string; barBorder: string; progress: string }[] = [
    { bar: '#D1D8A0', barBorder: '#A0D8A8', progress: '#1A3C30' },   // sistema (light_yellow)
    { bar: '#A0D8C8', barBorder: '#6BBFA8', progress: '#14534A' },   // teal
    { bar: '#B8C9E8', barBorder: '#8AAAD6', progress: '#2C4A70' },   // blue
    { bar: '#E8C9A0', barBorder: '#D6AA7A', progress: '#6B4510' },   // amber
    { bar: '#D8A0C8', barBorder: '#C47AAE', progress: '#6B2058' },   // pink
    { bar: '#A0C8D8', barBorder: '#74ACBF', progress: '#1A4F60' },   // sky
    { bar: '#C8D8A0', barBorder: '#A8BF74', progress: '#3F5014' },   // lime
    { bar: '#D8B0A0', barBorder: '#C4907A', progress: '#6B3020' },   // coral
    { bar: '#B0A0D8', barBorder: '#937ACE', progress: '#3A2070' },   // violet
    { bar: '#A0D8B0', barBorder: '#70C888', progress: '#1A5030' },   // mint
];

export const GROUP_LABELS: Record<string, string> = {
    step: 'Steps',
    milestone: 'Milestones',
    event: 'Events',
    note: 'Notes'
};
