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
