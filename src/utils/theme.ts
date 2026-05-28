import type { CSSProperties } from 'react';

/**
 * High-level theme definition for ZeGantt.
 * Any property provided here will override the default CSS variables.
 */
export interface GanttTheme {
    primary?: string;
    primaryContrast?: string;
    surface?: string;
    surfaceAlt?: string;
    headerBg?: string;
    border?: string;
    borderLight?: string;
    textPrimary?: string;
    textSecondary?: string;
    textMuted?: string;
    
    // Feature specific
    milestone?: string;
    event?: string;
    note?: string;
    today?: string;
    weekendBg?: string;

    // Advanced: direct variable overrides
    customVariables?: Record<string, string>;
}

/**
 * Converts a GanttTheme object into a React CSSProperties object 
 * containing the corresponding --zg-* CSS variables.
 */
export function generateGanttTheme(theme?: GanttTheme): CSSProperties {
    if (!theme) return {};

    const vars: Record<string, string> = {};

    if (theme.primary) {
        vars['--zg-primary-color'] = theme.primary;
        vars['--zg-group'] = theme.primary;
    }
    if (theme.primaryContrast) vars['--zg-contrast-high'] = theme.primaryContrast;
    if (theme.surface) vars['--zg-surface'] = theme.surface;
    if (theme.surfaceAlt) vars['--zg-surface-alt'] = theme.surfaceAlt;
    if (theme.headerBg) vars['--zg-header-bg'] = theme.headerBg;
    if (theme.border) vars['--zg-border'] = theme.border;
    if (theme.borderLight) vars['--zg-border-light'] = theme.borderLight;
    if (theme.textPrimary) vars['--zg-text-primary'] = theme.textPrimary;
    if (theme.textSecondary) vars['--zg-text-secondary'] = theme.textSecondary;
    if (theme.textMuted) vars['--zg-text-muted'] = theme.textMuted;

    if (theme.milestone) vars['--zg-milestone'] = theme.milestone;
    if (theme.event) vars['--zg-event'] = theme.event;
    if (theme.note) vars['--zg-note-color'] = theme.note;
    if (theme.today) vars['--zg-danger-color'] = theme.today;
    if (theme.weekendBg) vars['--zg-weekend-bg'] = theme.weekendBg;

    if (theme.customVariables) {
        Object.entries(theme.customVariables).forEach(([key, val]) => {
            const varName = key.startsWith('--') ? key : `--${key}`;
            vars[varName] = val;
        });
    }

    return vars as CSSProperties;
}

export const darkTheme: GanttTheme = {
    primary: '#4ade80',
    primaryContrast: '#0a0a0a',
    surface: '#1a1a2e',
    surfaceAlt: '#16213e',
    headerBg: '#0f3460',
    border: '#2d2d4a',
    borderLight: '#252545',
    textPrimary: '#e2e8f0',
    textSecondary: '#94a3b8',
    textMuted: '#475569',
    milestone: '#4ade80',
    event: '#fb923c',
    note: '#fbbf24',
    today: '#f87171',
    weekendBg: '#1e1e38',
    customVariables: {
        '--zg-group': '#4ade80',
        '--zg-group-soft': 'rgba(74,222,128,0.08)',
        '--zg-group-soft-strong': 'rgba(74,222,128,0.15)',
        '--zg-group-light': '#166534',
        '--zg-page-bg': '#0d0d1a',
        '--zg-surface-frost': 'rgba(26,26,46,0.96)',
        '--zg-ink-strong': '#f1f5f9',
        '--zg-note-default-bg': '#92400e',
        '--zg-milestone-ring': '#166534',
        '--zg-milestone-ring-soft': 'rgba(22,101,52,0.2)',
        '--zg-milestone-pill-bg': '#14532d',
        '--zg-event-soft': 'rgba(251,146,60,0.1)',
        '--zg-event-border-soft': 'rgba(251,146,60,0.3)',
        '--zg-event-pill-bg': '#7c2d12',
        '--zg-shadow-panel': '0 10px 40px rgba(0,0,0,0.5)',
        '--zg-shadow-popover': '0 8px 30px rgba(0,0,0,0.6)',
        '--zg-sticky-tape': 'rgba(255,255,255,0.15)',
    },
};
