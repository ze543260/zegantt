import { jsx as a, jsxs as u, Fragment as Me } from "react/jsx-runtime";
import * as zt from "react";
import { createContext as An, useContext as Ln, useRef as he, useEffect as de, useMemo as ce, useCallback as Z, useState as V } from "react";
import { Flag as Qe, Clock as Je, MessageCircle as pn, Search as Bn, X as jt, Download as Fn, Plus as Bt, ChevronDown as Ft, ChevronRight as Ht, Paperclip as ct, AlertTriangle as Wn, Calendar as Wt, Info as $n, Eye as Pn, Edit2 as On, Trash2 as jn, RotateCcw as Nn, Upload as Yn, Link2 as Xn, Loader2 as _n } from "lucide-react";
import { flushSync as Hn } from "react-dom";
const fn = An(void 0);
function Un({ children: e, value: t }) {
  return /* @__PURE__ */ a(fn.Provider, { value: t, children: e });
}
function Pe() {
  const e = Ln(fn);
  if (!e)
    throw new Error("useGanttContext must be used within a GanttProvider");
  return e;
}
const n = {
  pageBg: "var(--zg-page-bg, #F8FAFB)",
  surface: "var(--zg-surface, #FFFFFF)",
  surfaceAlt: "var(--zg-surface-alt, #F7FAF8)",
  surfaceFrost: "var(--zg-surface-frost, rgba(255,255,255,0.96))",
  headerBg: "var(--zg-header-bg, #F2F5F3)",
  textTitle: "var(--zg-primary-color, #1A3C30)",
  textPrimary: "var(--zg-text-primary, #4F4F4F)",
  textSecondary: "var(--zg-text-secondary, #7B7B7B)",
  textMuted: "var(--zg-text-muted, #D9D9D9)",
  group: "var(--zg-group, #1A3C30)",
  groupSoft: "var(--zg-group-soft, rgba(26,60,48,0.05))",
  groupSoftStrong: "var(--zg-group-soft-strong, rgba(26,60,48,0.12))",
  groupBorderWeak: "var(--zg-group-border-weak, rgba(26,60,48,0.27))",
  groupGlowSoft: "var(--zg-group-glow-soft, rgba(26,60,48,0.2))",
  groupGlow: "var(--zg-group-glow, rgba(26,60,48,0.4))",
  groupGlowStrong: "var(--zg-group-glow-strong, rgba(26,60,48,0.6))",
  groupLight: "var(--zg-group-light, #7AB7A3)",
  groupLightSoft: "var(--zg-group-light-soft, rgba(122,183,163,0.13))",
  groupLightStrong: "var(--zg-group-light-strong, rgba(122,183,163,0.6))",
  milestone: "var(--zg-milestone, #1A3C30)",
  milestoneRing: "var(--zg-milestone-ring, #A0D8A8)",
  milestoneRingSoft: "var(--zg-milestone-ring-soft, rgba(160,216,168,0.19))",
  milestonePillBg: "var(--zg-milestone-pill-bg, #edf8f2)",
  criticalPillBg: "var(--zg-critical-pill-bg, #ffeaed)",
  event: "var(--zg-event, #CD6200)",
  eventSoft: "var(--zg-event-soft, rgba(205,98,0,0.09))",
  eventBorderSoft: "var(--zg-event-border-soft, rgba(205,98,0,0.33))",
  eventPillBg: "var(--zg-event-pill-bg, #fff4e6)",
  note: "var(--zg-note-color, #FFBB1C)",
  noteDefaultBg: "var(--zg-note-default-bg, #FEF08A)",
  noteBadgeBg: "var(--zg-note-badge-bg, #FACC15)",
  noteBadgeText: "var(--zg-note-badge-text, #1A3C30)",
  delayedTaskBg: "var(--zg-delayed-task-bg, #ffe8ee)",
  border: "var(--zg-border, #D9D9D9)",
  borderLight: "var(--zg-border-light, #ECECEC)",
  weekendBg: "var(--zg-weekend-bg, #F4F6F5)",
  today: "var(--zg-danger-color, #FF0000)",
  todaySoft: "var(--zg-danger-soft, rgba(255,0,0,0.13))",
  todayMid: "var(--zg-danger-mid, rgba(255,0,0,0.27))",
  todayStrong: "var(--zg-danger-strong, rgba(255,0,0,0.53))",
  todayBg: "var(--zg-today-bg, #FF000008)",
  arrow: "var(--zg-arrow, #7B7B7B)",
  arrowHover: "var(--zg-arrow-hover, #1A3C30)",
  overlaySoft: "var(--zg-overlay-soft, rgba(0,0,0,0.2))",
  overlayMedium: "var(--zg-overlay-medium, rgba(0,0,0,0.35))",
  white: "var(--zg-contrast-high, #FFFFFF)",
  inkStrong: "var(--zg-ink-strong, #1A1A1A)",
  inkMedium: "var(--zg-ink-medium, #3A3A3A)",
  inkSoft: "var(--zg-ink-soft, rgba(0,0,0,0.7))",
  inkSoft2: "var(--zg-ink-soft-2, rgba(0,0,0,0.6))",
  inkSoft3: "var(--zg-ink-soft-3, rgba(0,0,0,0.55))",
  inkSoft4: "var(--zg-ink-soft-4, rgba(0,0,0,0.45))",
  dangerText: "var(--zg-danger-text, #EF4444)",
  dangerBgSoft: "var(--zg-danger-bg-soft, #FEE2E2)",
  shadowTiny: "var(--zg-shadow-tiny, 0 1px 3px rgba(0,0,0,0.08))",
  shadowSmall: "var(--zg-shadow-small, 0 1px 3px rgba(0,0,0,0.1))",
  shadowSoft: "var(--zg-shadow-soft, 0 1px 3px rgba(0,0,0,0.06))",
  shadowLarge: "var(--zg-shadow-large, 0 4px 12px rgba(0,0,0,0.08))",
  shadowSticky: "var(--zg-shadow-sticky, 2px 3px 8px rgba(0,0,0,0.13))",
  shadowStickyHover: "var(--zg-shadow-sticky-hover, 4px 6px 18px rgba(0,0,0,0.22))",
  shadowStickyStrong: "var(--zg-shadow-sticky-strong, 4px 6px 16px rgba(0,0,0,0.22))",
  stickyTape: "var(--zg-sticky-tape, rgba(255,255,255,0.55))",
  connectorDotBorder: "var(--zg-connector-dot-border, #FFFFFF)"
}, ge = 50, lt = 32, Vn = lt * 2, Ie = 26, Ge = 28, $t = 120, dt = 40, mn = 18, yn = 3.5, we = [
  { bar: "var(--zg-step-1-bar, #D1D8A0)", barBorder: "var(--zg-step-1-border, #A0D8A8)", progress: "var(--zg-step-1-progress, #1A3C30)" },
  { bar: "var(--zg-step-2-bar, #A0D8C8)", barBorder: "var(--zg-step-2-border, #6BBFA8)", progress: "var(--zg-step-2-progress, #14534A)" },
  { bar: "var(--zg-step-3-bar, #B8C9E8)", barBorder: "var(--zg-step-3-border, #8AAAD6)", progress: "var(--zg-step-3-progress, #2C4A70)" },
  { bar: "var(--zg-step-4-bar, #E8C9A0)", barBorder: "var(--zg-step-4-border, #D6AA7A)", progress: "var(--zg-step-4-progress, #6B4510)" },
  { bar: "var(--zg-step-5-bar, #D8A0C8)", barBorder: "var(--zg-step-5-border, #C47AAE)", progress: "var(--zg-step-5-progress, #6B2058)" },
  { bar: "var(--zg-step-6-bar, #A0C8D8)", barBorder: "var(--zg-step-6-border, #74ACBF)", progress: "var(--zg-step-6-progress, #1A4F60)" },
  { bar: "var(--zg-step-7-bar, #C8D8A0)", barBorder: "var(--zg-step-7-border, #A8BF74)", progress: "var(--zg-step-7-progress, #3F5014)" },
  { bar: "var(--zg-step-8-bar, #D8B0A0)", barBorder: "var(--zg-step-8-border, #C4907A)", progress: "var(--zg-step-8-progress, #6B3020)" },
  { bar: "var(--zg-step-9-bar, #B0A0D8)", barBorder: "var(--zg-step-9-border, #937ACE)", progress: "var(--zg-step-9-progress, #3A2070)" },
  { bar: "var(--zg-step-10-bar, #A0D8B0)", barBorder: "var(--zg-step-10-border, #70C888)", progress: "var(--zg-step-10-progress, #1A5030)" }
], Ut = {
  step: "Steps",
  milestone: "Milestones",
  event: "Events",
  note: "Notes"
};
function Gn() {
  const {
    props: e,
    t,
    viewMode: o,
    setViewMode: r,
    isInfiniteCanvas: i,
    zoomPercent: s,
    zoomIn: l,
    zoomOut: d,
    fitToScreen: g,
    visibleTypes: y,
    setVisibleTypes: x,
    newActionOpen: I,
    setNewActionOpen: w,
    newActionRef: O,
    scrollToToday: X,
    isTodayVisible: M,
    searchQuery: _,
    setSearchQuery: D,
    exportPng: p,
    canUndo: E,
    canRedo: R,
    undo: k,
    redo: B
  } = Pe(), v = he(null);
  de(() => {
    const z = ($) => {
      (navigator.platform.toUpperCase().includes("MAC") ? $.metaKey : $.ctrlKey) && $.key === "f" && ($.preventDefault(), v.current?.focus());
    };
    return document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z);
  }, []);
  const { projectName: C, onAddNewStage: W, onAddMilestone: m, onAddEvent: L, onAddNote: b } = e, f = (z) => {
    x(($) => {
      const K = new Set($);
      return K.has(z) ? K.delete(z) : K.add(z), K;
    });
  };
  return /* @__PURE__ */ u(
    "div",
    {
      className: "zg-header",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 14,
        flexWrap: "wrap",
        padding: "14px 18px",
        borderBottom: `1px solid ${n.border}`,
        background: n.headerBg
      },
      children: [
        /* @__PURE__ */ u("div", { className: "zg-header-brand", style: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ u("div", { children: [
            /* @__PURE__ */ a("h3", { style: { margin: 0, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: n.textTitle, fontFamily: "var(--zg-font-accent)" }, children: t("planning.gantt", "Project Planning") }),
            /* @__PURE__ */ a("div", { style: { height: 2.5, width: 64, marginTop: 6, borderRadius: 9999, background: n.group } })
          ] }),
          C && /* @__PURE__ */ a(
            "span",
            {
              style: {
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "6px 12px",
                borderRadius: 9999,
                color: n.textSecondary,
                background: n.surface,
                border: `1px solid ${n.border}`,
                boxShadow: n.shadowTiny
              },
              children: C
            }
          )
        ] }),
        /* @__PURE__ */ u("div", { className: "zg-header-controls", style: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "flex-end", flex: "1 1 560px" }, children: [
          i ? /* @__PURE__ */ u("div", { className: "zg-control-group", style: { display: "flex", alignItems: "center", gap: 6, padding: 4, borderRadius: 10, background: n.groupSoftStrong, border: `1px solid ${n.borderLight}` }, children: [
            /* @__PURE__ */ a(
              "button",
              {
                className: "zg-control-btn zg-control-btn--icon",
                onClick: d,
                style: {
                  width: 30,
                  height: 30,
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: 700,
                  color: n.group,
                  background: n.surface,
                  boxShadow: n.shadowTiny
                },
                "aria-label": t("gantt.viewport.zoomOut", "Zoom out"),
                title: t("gantt.viewport.zoomOut", "Zoom out"),
                children: "-"
              }
            ),
            /* @__PURE__ */ u("span", { style: { minWidth: 58, textAlign: "center", fontSize: 11, fontWeight: 700, color: n.textSecondary }, children: [
              s,
              "%"
            ] }),
            /* @__PURE__ */ a(
              "button",
              {
                className: "zg-control-btn zg-control-btn--icon",
                onClick: l,
                style: {
                  width: 30,
                  height: 30,
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: 700,
                  color: n.group,
                  background: n.surface,
                  boxShadow: n.shadowTiny
                },
                "aria-label": t("gantt.viewport.zoomIn", "Zoom in"),
                title: t("gantt.viewport.zoomIn", "Zoom in"),
                children: "+"
              }
            ),
            /* @__PURE__ */ a(
              "button",
              {
                className: "zg-control-btn zg-control-btn--fit",
                onClick: g,
                style: {
                  padding: "0 12px",
                  height: 30,
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  color: n.group,
                  background: n.surface,
                  boxShadow: n.shadowTiny,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em"
                },
                title: t("gantt.viewport.fit", "Fit to screen"),
                children: t("gantt.viewport.fit", "Fit")
              }
            )
          ] }) : /* @__PURE__ */ u(Me, { children: [
            M && /* @__PURE__ */ u(
              "button",
              {
                onClick: X,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: `1.5px solid ${n.group}`,
                  background: "transparent",
                  color: n.group,
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 700,
                  transition: "all 0.18s"
                },
                title: t("gantt.viewport.today", "Scroll to today"),
                children: [
                  "📍 ",
                  t("gantt.viewport.today", "Hoje")
                ]
              }
            ),
            /* @__PURE__ */ a("div", { className: "zg-control-group", style: { display: "flex", padding: 4, borderRadius: 10, background: n.groupSoftStrong, border: `1px solid ${n.borderLight}` }, children: ["day", "week", "month"].map((z) => /* @__PURE__ */ a(
              "button",
              {
                className: `zg-segment-btn ${o === z ? "is-active" : "is-inactive"}`,
                onClick: () => r(z),
                style: {
                  padding: "6px 16px",
                  fontSize: 12,
                  fontWeight: 600,
                  borderRadius: 6,
                  transition: "all 0.2s",
                  border: "none",
                  cursor: "pointer",
                  ...o === z ? { background: n.surface, color: n.group, boxShadow: n.shadowTiny } : { background: "transparent", color: n.textSecondary }
                },
                children: z === "day" ? t("charts.gantt.month", "Mês") : z === "week" ? t("charts.gantt.week", "Semana") : t("charts.gantt.year", "Ano")
              },
              z
            )) })
          ] }),
          !i && /* @__PURE__ */ u("div", { style: { display: "flex", gap: 4 }, children: [
            /* @__PURE__ */ a(
              "button",
              {
                onClick: k,
                disabled: !E,
                title: "Desfazer (Ctrl+Z)",
                style: {
                  width: 30,
                  height: 30,
                  borderRadius: 6,
                  border: `1px solid ${n.borderLight}`,
                  background: n.surface,
                  cursor: E ? "pointer" : "default",
                  opacity: E ? 1 : 0.35,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 14,
                  color: n.textPrimary,
                  transition: "opacity 0.15s"
                },
                "aria-label": "Undo",
                children: "↩"
              }
            ),
            /* @__PURE__ */ a(
              "button",
              {
                onClick: B,
                disabled: !R,
                title: "Refazer (Ctrl+Shift+Z)",
                style: {
                  width: 30,
                  height: 30,
                  borderRadius: 6,
                  border: `1px solid ${n.borderLight}`,
                  background: n.surface,
                  cursor: R ? "pointer" : "default",
                  opacity: R ? 1 : 0.35,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 14,
                  color: n.textPrimary,
                  transition: "opacity 0.15s"
                },
                "aria-label": "Redo",
                children: "↪"
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "zg-control-group zg-control-group--filters", style: { display: "flex", padding: 4, borderRadius: 10, gap: 2, background: n.groupSoftStrong, border: `1px solid ${n.borderLight}`, flexWrap: "wrap" }, children: [
            { type: "step", label: t("gantt.filter.steps", "Steps"), icon: /* @__PURE__ */ a("div", { style: { width: 10, height: 10, borderRadius: 2, background: we[0].bar, border: `1px solid ${we[0].barBorder}` } }) },
            { type: "milestone", label: t("gantt.filter.milestones", "Milestones"), icon: /* @__PURE__ */ a(Qe, { size: 11, style: { color: n.milestone } }) },
            { type: "event", label: t("gantt.filter.events", "Events"), icon: /* @__PURE__ */ a(Je, { size: 11, style: { color: n.event } }) },
            { type: "note", label: t("gantt.filter.notes", "Notes"), icon: /* @__PURE__ */ a(pn, { size: 11, style: { color: n.note } }) }
          ].map((z) => {
            const $ = y.has(z.type);
            return /* @__PURE__ */ u(
              "button",
              {
                className: `zg-segment-btn ${$ ? "is-active" : "is-inactive"}`,
                onClick: () => f(z.type),
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 12px",
                  fontSize: 11,
                  fontWeight: 600,
                  borderRadius: 6,
                  transition: "all 0.2s",
                  border: "none",
                  cursor: "pointer",
                  ...$ ? { background: n.surface, color: n.group, boxShadow: n.shadowTiny } : { background: "transparent", color: n.textSecondary, opacity: 0.58 }
                },
                children: [
                  z.icon,
                  /* @__PURE__ */ a("span", { children: z.label })
                ]
              },
              z.type
            );
          }) }),
          /* @__PURE__ */ u("div", { style: { position: "relative", display: "flex", alignItems: "center" }, children: [
            /* @__PURE__ */ a(
              Bn,
              {
                size: 13,
                style: { position: "absolute", left: 10, color: n.textSecondary, pointerEvents: "none" }
              }
            ),
            /* @__PURE__ */ a(
              "input",
              {
                ref: v,
                type: "text",
                value: _,
                onChange: (z) => D(z.target.value),
                placeholder: t("gantt.search.placeholder", "Buscar..."),
                style: {
                  paddingLeft: 30,
                  paddingRight: _ ? 28 : 10,
                  paddingTop: 7,
                  paddingBottom: 7,
                  border: `1.5px solid ${_ ? n.group : n.borderLight}`,
                  borderRadius: 8,
                  fontSize: 12,
                  outline: "none",
                  background: n.surface,
                  color: n.textPrimary,
                  width: 160,
                  transition: "border-color 0.18s, width 0.2s"
                },
                onFocus: (z) => {
                  z.currentTarget.style.width = "220px";
                },
                onBlur: (z) => {
                  _ || (z.currentTarget.style.width = "160px");
                }
              }
            ),
            _ && /* @__PURE__ */ a(
              "button",
              {
                onClick: () => D(""),
                style: {
                  position: "absolute",
                  right: 6,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: n.textSecondary,
                  display: "grid",
                  placeItems: "center",
                  padding: 2
                },
                children: /* @__PURE__ */ a(jt, { size: 12 })
              }
            )
          ] }),
          /* @__PURE__ */ u(
            "button",
            {
              onClick: () => p({ filename: e.projectName || "gantt" }),
              title: t("gantt.export.png", "Export PNG"),
              style: {
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 12px",
                borderRadius: 8,
                border: `1.5px solid ${n.borderLight}`,
                background: n.surface,
                color: n.textPrimary,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 600,
                transition: "all 0.18s"
              },
              children: [
                /* @__PURE__ */ a(Fn, { size: 14 }),
                "PNG"
              ]
            }
          ),
          W && /* @__PURE__ */ u("div", { ref: O, style: { position: "relative" }, children: [
            /* @__PURE__ */ u(
              "button",
              {
                className: "zg-new-action-btn",
                onClick: () => w((z) => !z),
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: n.white,
                  border: "none",
                  cursor: "pointer",
                  background: n.group,
                  transition: "all 0.2s"
                },
                children: [
                  /* @__PURE__ */ a(Bt, { size: 16 }),
                  /* @__PURE__ */ a("span", { children: t("charts.gantt.newAction", "New Action") }),
                  /* @__PURE__ */ a(Ft, { size: 14, style: { opacity: 0.7, transform: I ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
                ]
              }
            ),
            I && /* @__PURE__ */ a(
              "div",
              {
                className: "zg-new-action-menu",
                style: {
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  right: 0,
                  zIndex: 99999,
                  background: n.surface,
                  borderRadius: 10,
                  boxShadow: "var(--zg-shadow-popover)",
                  border: `1.5px solid ${n.borderLight}`,
                  width: 200,
                  overflow: "hidden",
                  padding: "5px 5px"
                },
                onClick: (z) => z.stopPropagation(),
                children: [
                  {
                    label: t("gantt.newAction.step", "Step"),
                    icon: /* @__PURE__ */ a("div", { style: { width: 14, height: 14, borderRadius: 3, background: we[0].bar, border: `1.5px solid ${we[0].barBorder}`, flexShrink: 0 } }),
                    action: () => {
                      W(), w(!1);
                    }
                  },
                  {
                    label: t("gantt.newAction.milestone", "Milestone"),
                    icon: /* @__PURE__ */ a("div", { style: { width: 22, height: 22, borderRadius: "50%", background: n.milestoneRingSoft, border: `1.5px solid ${n.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Qe, { size: 11, style: { color: n.milestone } }) }),
                    action: () => {
                      m?.(), w(!1);
                    }
                  },
                  {
                    label: t("gantt.newAction.event", "Event"),
                    icon: /* @__PURE__ */ a("div", { style: { width: 22, height: 22, borderRadius: "50%", background: n.eventSoft, border: `1.5px solid ${n.eventBorderSoft}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Je, { size: 11, style: { color: n.event } }) }),
                    action: () => {
                      L?.(), w(!1);
                    }
                  },
                  {
                    label: t("gantt.newAction.note", "Note"),
                    icon: /* @__PURE__ */ a("div", { style: { width: 16, height: 20, background: n.note, borderRadius: 2, boxShadow: n.shadowTiny, position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ a("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: n.stickyTape, borderRadius: 1 } }) }),
                    action: () => {
                      b?.(), w(!1);
                    }
                  }
                ].map((z) => /* @__PURE__ */ u(
                  "button",
                  {
                    onClick: z.action,
                    className: "zg-popup-btn",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      width: "100%",
                      padding: "8px 10px",
                      borderRadius: 7,
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: 500,
                      color: n.textPrimary,
                      textAlign: "left"
                    },
                    children: [
                      z.icon,
                      z.label
                    ]
                  },
                  z.label
                ))
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Ke(e, t, o) {
  let r = o.initialDeps ?? [], i, s = !0;
  function l() {
    var d, g, y;
    let x;
    o.key && ((d = o.debug) != null && d.call(o)) && (x = Date.now());
    const I = e();
    if (!(I.length !== r.length || I.some((X, M) => r[M] !== X)))
      return i;
    r = I;
    let O;
    if (o.key && ((g = o.debug) != null && g.call(o)) && (O = Date.now()), i = t(...I), o.key && ((y = o.debug) != null && y.call(o))) {
      const X = Math.round((Date.now() - x) * 100) / 100, M = Math.round((Date.now() - O) * 100) / 100, _ = M / 16, D = (p, E) => {
        for (p = String(p); p.length < E; )
          p = " " + p;
        return p;
      };
      console.info(
        `%c⏱ ${D(M, 5)} /${D(X, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * _, 120)
        )}deg 100% 31%);`,
        o?.key
      );
    }
    return o?.onChange && !(s && o.skipInitialOnChange) && o.onChange(i), s = !1, i;
  }
  return l.updateDeps = (d) => {
    r = d;
  }, l;
}
function Vt(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Kn = (e, t) => Math.abs(e - t) < 1.01, qn = (e, t, o) => {
  let r;
  return function(...i) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, i), o);
  };
}, Gt = (e) => {
  const { offsetWidth: t, offsetHeight: o } = e;
  return { width: t, height: o };
}, Zn = (e) => e, Qn = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), o = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let i = t; i <= o; i++)
    r.push(i);
  return r;
}, Jn = (e, t) => {
  const o = e.scrollElement;
  if (!o)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const i = (l) => {
    const { width: d, height: g } = l;
    t({ width: Math.round(d), height: Math.round(g) });
  };
  if (i(Gt(o)), !r.ResizeObserver)
    return () => {
    };
  const s = new r.ResizeObserver((l) => {
    const d = () => {
      const g = l[0];
      if (g?.borderBoxSize) {
        const y = g.borderBoxSize[0];
        if (y) {
          i({ width: y.inlineSize, height: y.blockSize });
          return;
        }
      }
      i(Gt(o));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(d) : d();
  });
  return s.observe(o, { box: "border-box" }), () => {
    s.unobserve(o);
  };
}, Kt = {
  passive: !0
}, qt = typeof window > "u" ? !0 : "onscrollend" in window, eo = (e, t) => {
  const o = e.scrollElement;
  if (!o)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let i = 0;
  const s = e.options.useScrollendEvent && qt ? () => {
  } : qn(
    r,
    () => {
      t(i, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (x) => () => {
    const { horizontal: I, isRtl: w } = e.options;
    i = I ? o.scrollLeft * (w && -1 || 1) : o.scrollTop, s(), t(i, x);
  }, d = l(!0), g = l(!1);
  o.addEventListener("scroll", d, Kt);
  const y = e.options.useScrollendEvent && qt;
  return y && o.addEventListener("scrollend", g, Kt), () => {
    o.removeEventListener("scroll", d), y && o.removeEventListener("scrollend", g);
  };
}, to = (e, t, o) => {
  if (t?.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[o.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[o.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, no = (e, {
  adjustments: t = 0,
  behavior: o
}, r) => {
  var i, s;
  const l = e + t;
  (s = (i = r.scrollElement) == null ? void 0 : i.scrollTo) == null || s.call(i, {
    [r.options.horizontal ? "left" : "top"]: l,
    behavior: o
  });
};
class oo {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var o, r, i;
      return ((i = (r = (o = this.targetWindow) == null ? void 0 : o.performance) == null ? void 0 : r.now) == null ? void 0 : i.call(r)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let o = null;
      const r = () => o || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : o = new this.targetWindow.ResizeObserver((i) => {
        i.forEach((s) => {
          const l = () => {
            const d = s.target, g = this.indexFromElement(d);
            if (!d.isConnected) {
              this.observer.unobserve(d);
              return;
            }
            this.shouldMeasureDuringScroll(g) && this.resizeItem(
              g,
              this.options.measureElement(d, s, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
        });
      }));
      return {
        disconnect: () => {
          var i;
          (i = r()) == null || i.disconnect(), o = null;
        },
        observe: (i) => {
          var s;
          return (s = r()) == null ? void 0 : s.observe(i, { box: "border-box" });
        },
        unobserve: (i) => {
          var s;
          return (s = r()) == null ? void 0 : s.unobserve(i);
        }
      };
    })(), this.range = null, this.setOptions = (o) => {
      Object.entries(o).forEach(([r, i]) => {
        typeof i > "u" && delete o[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Zn,
        rangeExtractor: Qn,
        onChange: () => {
        },
        measureElement: to,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...o
      };
    }, this.notify = (o) => {
      var r, i;
      (i = (r = this.options).onChange) == null || i.call(r, this, o);
    }, this.maybeNotify = Ke(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (o) => {
        this.notify(o);
      },
      {
        key: process.env.NODE_ENV !== "production" && "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((o) => o()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var o;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((o = this.scrollElement) == null ? void 0 : o.window) ?? null, this.elementsCache.forEach((i) => {
          this.observer.observe(i);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (i) => {
            this.scrollRect = i, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (i, s) => {
            this.scrollAdjustments = 0, this.scrollDirection = s ? this.getScrollOffset() < i ? "forward" : "backward" : null, this.scrollOffset = i, this.isScrolling = s, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (o, r) => {
      const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
      for (let l = r - 1; l >= 0; l--) {
        const d = o[l];
        if (i.has(d.lane))
          continue;
        const g = s.get(
          d.lane
        );
        if (g == null || d.end > g.end ? s.set(d.lane, d) : d.end < g.end && i.set(d.lane, !0), i.size === this.options.lanes)
          break;
      }
      return s.size === this.options.lanes ? Array.from(s.values()).sort((l, d) => l.end === d.end ? l.index - d.index : l.end - d.end)[0] : void 0;
    }, this.getMeasurementOptions = Ke(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (o, r, i, s, l, d) => (this.prevLanes !== void 0 && this.prevLanes !== d && (this.lanesChangedFlag = !0), this.prevLanes = d, this.pendingMeasuredCacheIndexes = [], {
        count: o,
        paddingStart: r,
        scrollMargin: i,
        getItemKey: s,
        enabled: l,
        lanes: d
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ke(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: o, paddingStart: r, scrollMargin: i, getItemKey: s, enabled: l, lanes: d }, g) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > o)
          for (const w of this.laneAssignments.keys())
            w >= o && this.laneAssignments.delete(w);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((w) => {
          this.itemSizeCache.set(w.key, w.size);
        }));
        const y = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === o && (this.lanesSettling = !1);
        const x = this.measurementsCache.slice(0, y), I = new Array(d).fill(
          void 0
        );
        for (let w = 0; w < y; w++) {
          const O = x[w];
          O && (I[O.lane] = w);
        }
        for (let w = y; w < o; w++) {
          const O = s(w), X = this.laneAssignments.get(w);
          let M, _;
          if (X !== void 0 && this.options.lanes > 1) {
            M = X;
            const R = I[M], k = R !== void 0 ? x[R] : void 0;
            _ = k ? k.end + this.options.gap : r + i;
          } else {
            const R = this.options.lanes === 1 ? x[w - 1] : this.getFurthestMeasurement(x, w);
            _ = R ? R.end + this.options.gap : r + i, M = R ? R.lane : w % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(w, M);
          }
          const D = g.get(O), p = typeof D == "number" ? D : this.options.estimateSize(w), E = _ + p;
          x[w] = {
            index: w,
            start: _,
            size: p,
            end: E,
            key: O,
            lane: M
          }, I[M] = w;
        }
        return this.measurementsCache = x, x;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ke(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (o, r, i, s) => this.range = o.length > 0 && r > 0 ? ro({
        measurements: o,
        outerSize: r,
        scrollOffset: i,
        lanes: s
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ke(
      () => {
        let o = null, r = null;
        const i = this.calculateRange();
        return i && (o = i.startIndex, r = i.endIndex), this.maybeNotify.updateDeps([this.isScrolling, o, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          o,
          r
        ];
      },
      (o, r, i, s, l) => s === null || l === null ? [] : o({
        startIndex: s,
        endIndex: l,
        overscan: r,
        count: i
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (o) => {
      const r = this.options.indexAttribute, i = o.getAttribute(r);
      return i ? parseInt(i, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (o) => {
      var r;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const i = this.scrollState.index ?? ((r = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : r.index);
      if (i !== void 0 && this.range) {
        const s = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), l = Math.max(0, i - s), d = Math.min(
          this.options.count - 1,
          i + s
        );
        return o >= l && o <= d;
      }
      return !0;
    }, this.measureElement = (o) => {
      if (!o) {
        this.elementsCache.forEach((l, d) => {
          l.isConnected || (this.observer.unobserve(l), this.elementsCache.delete(d));
        });
        return;
      }
      const r = this.indexFromElement(o), i = this.options.getItemKey(r), s = this.elementsCache.get(i);
      s !== o && (s && this.observer.unobserve(s), this.observer.observe(o), this.elementsCache.set(i, o)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(r) && this.resizeItem(r, this.options.measureElement(o, void 0, this));
    }, this.resizeItem = (o, r) => {
      var i;
      const s = this.measurementsCache[o];
      if (!s) return;
      const l = this.itemSizeCache.get(s.key) ?? s.size, d = r - l;
      d !== 0 && (((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(s, d, this) : s.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", d), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += d,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(s.index), this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, r)), this.notify(!1));
    }, this.getVirtualItems = Ke(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (o, r) => {
        const i = [];
        for (let s = 0, l = o.length; s < l; s++) {
          const d = o[s], g = r[d];
          i.push(g);
        }
        return i;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (o) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Vt(
          r[bn(
            0,
            r.length - 1,
            (i) => Vt(r[i]).start,
            o
          )]
        );
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const o = this.scrollElement.document.documentElement;
        return this.options.horizontal ? o.scrollWidth - this.scrollElement.innerWidth : o.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getOffsetForAlignment = (o, r, i = 0) => {
      if (!this.scrollElement) return 0;
      const s = this.getSize(), l = this.getScrollOffset();
      r === "auto" && (r = o >= l + s ? "end" : "start"), r === "center" ? o += (i - s) / 2 : r === "end" && (o -= s);
      const d = this.getMaxScrollOffset();
      return Math.max(Math.min(d, o), 0);
    }, this.getOffsetForIndex = (o, r = "auto") => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      const i = this.getSize(), s = this.getScrollOffset(), l = this.measurementsCache[o];
      if (!l) return;
      if (r === "auto")
        if (l.end >= s + i - this.options.scrollPaddingEnd)
          r = "end";
        else if (l.start <= s + this.options.scrollPaddingStart)
          r = "start";
        else
          return [s, r];
      if (r === "end" && o === this.options.count - 1)
        return [this.getMaxScrollOffset(), r];
      const d = r === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(d, r, l.size),
        r
      ];
    }, this.scrollToOffset = (o, { align: r = "start", behavior: i = "auto" } = {}) => {
      const s = this.getOffsetForAlignment(o, r), l = this.now();
      this.scrollState = {
        index: null,
        align: r,
        behavior: i,
        startedAt: l,
        lastTargetOffset: s,
        stableFrames: 0
      }, this._scrollToOffset(s, { adjustments: void 0, behavior: i }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (o, {
      align: r = "auto",
      behavior: i = "auto"
    } = {}) => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      const s = this.getOffsetForIndex(o, r);
      if (!s)
        return;
      const [l, d] = s, g = this.now();
      this.scrollState = {
        index: o,
        align: d,
        behavior: i,
        startedAt: g,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: i }), this.scheduleScrollReconcile();
    }, this.scrollBy = (o, { behavior: r = "auto" } = {}) => {
      const i = this.getScrollOffset() + o, s = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: r,
        startedAt: s,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: r }), this.scheduleScrollReconcile();
    }, this.getTotalSize = () => {
      var o;
      const r = this.getMeasurements();
      let i;
      if (r.length === 0)
        i = this.options.paddingStart;
      else if (this.options.lanes === 1)
        i = ((o = r[r.length - 1]) == null ? void 0 : o.end) ?? 0;
      else {
        const s = Array(this.options.lanes).fill(null);
        let l = r.length - 1;
        for (; l >= 0 && s.some((d) => d === null); ) {
          const d = r[l];
          s[d.lane] === null && (s[d.lane] = d.end), l--;
        }
        i = Math.max(...s.filter((d) => d !== null));
      }
      return Math.max(
        i - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (o, {
      adjustments: r,
      behavior: i
    }) => {
      this.options.scrollToFn(o, { behavior: i, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    const r = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, i = r ? r[0] : this.scrollState.lastTargetOffset, s = 1, l = i !== this.scrollState.lastTargetOffset;
    if (!l && Kn(i, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= s) {
        this.scrollState = null;
        return;
      }
    } else
      this.scrollState.stableFrames = 0, l && (this.scrollState.lastTargetOffset = i, this.scrollState.behavior = "auto", this._scrollToOffset(i, {
        adjustments: void 0,
        behavior: "auto"
      }));
    this.scheduleScrollReconcile();
  }
}
const bn = (e, t, o, r) => {
  for (; e <= t; ) {
    const i = (e + t) / 2 | 0, s = o(i);
    if (s < r)
      e = i + 1;
    else if (s > r)
      t = i - 1;
    else
      return i;
  }
  return e > 0 ? e - 1 : 0;
};
function ro({
  measurements: e,
  outerSize: t,
  scrollOffset: o,
  lanes: r
}) {
  const i = e.length - 1, s = (g) => e[g].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: i
    };
  let l = bn(
    0,
    i,
    s,
    o
  ), d = l;
  if (r === 1)
    for (; d < i && e[d].end < o + t; )
      d++;
  else if (r > 1) {
    const g = Array(r).fill(0);
    for (; d < i && g.some((x) => x < o + t); ) {
      const x = e[d];
      g[x.lane] = x.end, d++;
    }
    const y = Array(r).fill(o + t);
    for (; l >= 0 && y.some((x) => x >= o); ) {
      const x = e[l];
      y[x.lane] = x.start, l--;
    }
    l = Math.max(0, l - l % r), d = Math.min(i, d + (r - 1 - d % r));
  }
  return { startIndex: l, endIndex: d };
}
const Zt = typeof document < "u" ? zt.useLayoutEffect : zt.useEffect;
function io({
  useFlushSync: e = !0,
  ...t
}) {
  const o = zt.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (s, l) => {
      var d;
      e && l ? Hn(o) : o(), (d = t.onChange) == null || d.call(t, s, l);
    }
  }, [i] = zt.useState(
    () => new oo(r)
  );
  return i.setOptions(r), Zt(() => i._didMount(), []), Zt(() => i._willUpdate()), i;
}
function Pt(e) {
  return io({
    observeElementRect: Jn,
    observeElementOffset: eo,
    scrollToFn: no,
    ...e
  });
}
const xn = 864e5, ue = (e, t) => new Date(e.getTime() + t * xn), Ee = (e, t) => Math.round((t.getTime() - e.getTime()) / xn), Qt = (e) => new Date(e.getFullYear(), e.getMonth(), 1), xt = (e) => new Date(e.getFullYear(), e.getMonth() + 1, 0), vn = (e) => {
  if (!e) return "en-US";
  try {
    return new Intl.DateTimeFormat(e).resolvedOptions().locale;
  } catch {
    return "en-US";
  }
}, ve = (e, t = "en-US") => new Intl.DateTimeFormat(vn(t), {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
}).format(e), At = (e, t = "en") => new Intl.DateTimeFormat(vn(t), { month: "long" }).format(e).toUpperCase(), so = (e) => {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()));
  t.setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7));
  const o = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t.getTime() - o.getTime()) / 864e5 + 1) / 7);
};
function ao() {
  const {
    props: e,
    t,
    displayRows: o,
    leftBodyRef: r,
    handleLeftScroll: i,
    toggleProject: s,
    toggleGroup: l,
    hoveredTaskId: d,
    setHoveredTaskId: g,
    selectedTaskIds: y,
    setSelectedTaskIds: x,
    delayedIds: I,
    criticalIds: w,
    relatedIds: O,
    setActivePinboardTask: X,
    groupProgress: M,
    sidebarW: _
  } = Pe(), D = (v) => ({
    id: v.id,
    name: v.name,
    start: v.start,
    end: v.end,
    type: v.originalType === "step" ? "task" : "milestone",
    progress: v.progress
  }), p = Pt({
    count: o.length,
    getScrollElement: () => r.current,
    estimateSize: () => ge,
    overscan: 12
  }), E = p.getVirtualItems(), R = Math.max(p.getTotalSize(), 400) + 80, k = ce(
    () => o.filter((v) => v.kind === "task").map((v) => v.task.id),
    [o]
  ), B = Z((v, C) => {
    const W = k.indexOf(v);
    if (W < 0) return;
    const m = Math.min(Math.max(0, W + C), k.length - 1), L = k[m];
    L && x(/* @__PURE__ */ new Set([L]));
  }, [k, x]);
  return /* @__PURE__ */ u("div", { style: { width: _, flexShrink: 0, borderRight: `1px solid ${n.border}`, display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ u(
      "div",
      {
        style: {
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          height: Vn,
          background: n.headerBg,
          borderBottom: `1px solid ${n.border}`
        },
        children: [
          /* @__PURE__ */ a("div", { style: { flex: 1, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: n.textSecondary }, children: t("charts.gantt.stepName", "STEP NAME") }),
          /* @__PURE__ */ a("div", { style: { width: 80, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", color: n.textSecondary }, children: t("charts.gantt.start", "START") }),
          /* @__PURE__ */ a("div", { style: { width: 80, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", color: n.textSecondary }, children: t("charts.gantt.end", "END") })
        ]
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        ref: r,
        onScroll: i,
        onClick: () => x(/* @__PURE__ */ new Set()),
        className: "zg-no-scrollbar",
        style: { overflowY: "auto", overflowX: "hidden", flex: 1 },
        role: "grid",
        "aria-rowcount": o.length,
        children: /* @__PURE__ */ a("div", { style: { height: R, position: "relative" }, children: E.map((v) => {
          const C = o[v.index];
          if (!C) return null;
          const W = {
            position: "absolute",
            top: v.start,
            left: 0,
            width: "100%",
            height: ge
          };
          if (C.kind === "projectHeader")
            return /* @__PURE__ */ a(
              "div",
              {
                style: {
                  ...W,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  borderBottom: `1.5px solid ${n.groupBorderWeak}`,
                  background: n.groupSoft
                },
                onClick: () => s(C.projectId),
                onKeyDown: (Q) => {
                  (Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), s(C.projectId));
                },
                role: "button",
                tabIndex: 0,
                "aria-label": `Toggle project ${C.projectTitle}`,
                "aria-expanded": !C.collapsed,
                children: /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  C.collapsed ? /* @__PURE__ */ a(Ht, { size: 15, style: { color: n.group, flexShrink: 0 } }) : /* @__PURE__ */ a(Ft, { size: 15, style: { color: n.group, flexShrink: 0 } }),
                  /* @__PURE__ */ a("span", { style: {
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: n.group,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    flexShrink: 1
                  }, children: C.projectTitle }),
                  M.byProject.has(C.projectId) && /* @__PURE__ */ u(Me, { children: [
                    /* @__PURE__ */ a("div", { style: { flex: 1, height: 4, background: "rgba(26,60,48,0.2)", borderRadius: 2, overflow: "hidden", minWidth: 40 }, children: /* @__PURE__ */ a("div", { style: {
                      width: `${M.byProject.get(C.projectId)}%`,
                      height: "100%",
                      background: n.group,
                      borderRadius: 2
                    } }) }),
                    /* @__PURE__ */ u("span", { style: { fontSize: 10, fontWeight: 700, color: n.group, flexShrink: 0, marginRight: 4 }, children: [
                      M.byProject.get(C.projectId),
                      "%"
                    ] })
                  ] })
                ] })
              },
              `ph-${C.projectId}`
            );
          if (C.kind === "group") {
            const Q = C.projectId ? `${C.projectId}-${C.groupType}` : C.groupType;
            return /* @__PURE__ */ a(
              "div",
              {
                style: {
                  ...W,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  borderBottom: `1px solid ${n.border}`,
                  background: n.headerBg
                },
                onClick: () => l(Q),
                onKeyDown: (ne) => {
                  (ne.key === "Enter" || ne.key === " ") && (ne.preventDefault(), l(Q));
                },
                role: "button",
                tabIndex: 0,
                "aria-label": `Toggle group ${C.label}`,
                "aria-expanded": !C.collapsed,
                children: /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  C.collapsed ? /* @__PURE__ */ a(Ht, { size: 14, style: { color: n.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ a(Ft, { size: 14, style: { color: n.textSecondary, flexShrink: 0 } }),
                  /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: n.textTitle, flexShrink: 0 }, children: t(`gantt.group.${C.groupType}`, C.label) }),
                  /* @__PURE__ */ a("span", { style: { fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 9999, background: n.groupSoftStrong, color: n.textSecondary, flexShrink: 0 }, children: C.count }),
                  C.groupType === "step" && M.byType.has("step") && /* @__PURE__ */ u(Me, { children: [
                    /* @__PURE__ */ a("div", { style: { flex: 1, height: 4, background: n.borderLight, borderRadius: 2, overflow: "hidden", minWidth: 40 }, children: /* @__PURE__ */ a("div", { style: {
                      width: `${M.byType.get("step")}%`,
                      height: "100%",
                      background: n.group,
                      borderRadius: 2,
                      transition: "width 0.3s"
                    } }) }),
                    /* @__PURE__ */ u("span", { style: { fontSize: 10, fontWeight: 700, color: n.textSecondary, flexShrink: 0 }, children: [
                      M.byType.get("step"),
                      "%"
                    ] })
                  ] })
                ] })
              },
              `g-${Q}`
            );
          }
          const m = C.task, L = y.has(m.id), b = d === m.id, f = m.originalType !== "step", z = I.has(m.id), $ = w.has(m.id), K = y.size > 0 && !L && !O.has(m.id), ee = y.size > 0 && !L && O.has(m.id), q = z ? n.dangerBgSoft : L ? n.groupLight : ee ? n.groupLightStrong : b ? n.pageBg : n.surface;
          return /* @__PURE__ */ u(
            "div",
            {
              style: {
                ...W,
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                cursor: "pointer",
                transition: "opacity 0.18s, background 0.15s",
                borderBottom: `1px solid ${n.borderLight}`,
                background: q,
                borderLeft: L ? `3px solid ${n.group}` : ee ? `3px solid ${n.groupGlow}` : $ ? `3px solid ${n.today}` : void 0,
                opacity: K ? 0.3 : 1
              },
              onClick: (Q) => {
                Q.stopPropagation();
                const ne = m.id;
                if (Q.ctrlKey || Q.metaKey)
                  x((re) => {
                    const ie = new Set(re);
                    return ie.has(ne) ? ie.delete(ne) : ie.add(ne), ie;
                  });
                else if (Q.shiftKey && y.size > 0) {
                  const re = [...y].at(-1);
                  if (!re) {
                    x(/* @__PURE__ */ new Set([ne]));
                    return;
                  }
                  const ie = k.indexOf(re), se = k.indexOf(ne);
                  if (ie < 0 || se < 0) {
                    x(/* @__PURE__ */ new Set([ne]));
                    return;
                  }
                  const [Se, Oe] = ie < se ? [ie, se] : [se, ie];
                  x(new Set(k.slice(Se, Oe + 1)));
                } else
                  x((re) => re.size === 1 && re.has(ne) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([ne]));
              },
              onDoubleClick: () => e.onTaskClick?.(D(m)),
              onMouseEnter: () => g(m.id),
              onMouseLeave: () => g(null),
              onKeyDown: (Q) => {
                if (Q.key === "Enter") {
                  Q.preventDefault(), e.onTaskClick?.(D(m));
                  return;
                }
                if (Q.key === " ") {
                  Q.preventDefault(), x((ne) => {
                    const re = new Set(ne);
                    return re.has(m.id) ? re.delete(m.id) : re.add(m.id), re;
                  });
                  return;
                }
                if (Q.key === "ArrowDown") {
                  Q.preventDefault(), B(m.id, 1);
                  return;
                }
                Q.key === "ArrowUp" && (Q.preventDefault(), B(m.id, -1));
              },
              role: "button",
              tabIndex: 0,
              "aria-selected": L,
              "aria-label": `Task ${m.name}`,
              children: [
                /* @__PURE__ */ u("div", { style: { flex: 1, display: "flex", alignItems: "center", gap: 8, minWidth: 0, paddingRight: 8 }, children: [
                  m.originalType === "step" && /* @__PURE__ */ a("div", { style: { flexShrink: 0, borderRadius: 4, width: 14, height: 14, background: we[m.colorIdx ?? 0].bar, border: `1.5px solid ${we[m.colorIdx ?? 0].barBorder}` } }),
                  m.originalType === "milestone" && /* @__PURE__ */ a("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: n.milestoneRingSoft, border: `1.5px solid ${n.milestoneRing}` }, children: /* @__PURE__ */ a(Qe, { size: 11, style: { color: n.milestone } }) }),
                  m.originalType === "event" && /* @__PURE__ */ a("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: n.eventSoft, border: `1.5px solid ${n.eventBorderSoft}` }, children: /* @__PURE__ */ a(Je, { size: 11, style: { color: n.event } }) }),
                  m.originalType === "note" && /* @__PURE__ */ a("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4, width: 22, height: 22, background: "rgba(254,240,138,0.4)", border: "1.5px solid rgba(250,204,21,0.5)" }, children: /* @__PURE__ */ a(pn, { size: 11, style: { color: n.note } }) }),
                  /* @__PURE__ */ a("div", { style: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }, children: /* @__PURE__ */ a(
                    "span",
                    {
                      style: {
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.25,
                        color: L ? n.group : z ? n.today : n.textPrimary,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: m.name
                    }
                  ) }),
                  (m.attachedNotes?.length || 0) > 0 && /* @__PURE__ */ u(
                    "button",
                    {
                      className: "zg-note-badge-btn",
                      "aria-label": `Open ${m.attachedNotes?.length} linked notes`,
                      style: {
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 11,
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: 6,
                        color: n.noteBadgeText,
                        background: n.noteBadgeBg,
                        border: "none",
                        cursor: "pointer",
                        boxShadow: n.shadowSmall,
                        transition: "transform 0.12s ease"
                      },
                      onClick: (Q) => {
                        Q.stopPropagation(), X(m);
                      },
                      children: [
                        /* @__PURE__ */ a(ct, { size: 12 }),
                        m.attachedNotes?.length
                      ]
                    }
                  ),
                  z && /* @__PURE__ */ a(Wn, { size: 12, style: { flexShrink: 0, color: n.today } })
                ] }),
                /* @__PURE__ */ a("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: z ? n.today : n.textMuted }, children: ve(m.start, e.locale) }),
                /* @__PURE__ */ a("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: z ? n.today : n.textMuted }, children: f ? "—" : ve(m.end, e.locale) })
              ]
            },
            m.id
          );
        }) })
      }
    )
  ] });
}
function lo(e, t, o = "en", r) {
  const s = r ?? (t === "day" ? dt : t === "week" ? mn : yn), l = (E, R) => {
    const k = [], B = (/* @__PURE__ */ new Date()).toDateString();
    let v = -1;
    for (let C = 0; C < R; C++) {
      const W = ue(E, C), m = W.toDateString() === B;
      m && (v = C), k.push({
        date: W,
        isToday: m,
        isWeekend: W.getDay() === 0 || W.getDay() === 6
      });
    }
    return { daysArr: k, todayIndex: v };
  };
  if (e.length === 0) {
    const E = /* @__PURE__ */ new Date();
    if (t === "week") {
      const W = ue(E, -45), m = ue(E, 45), L = Ee(W, m) + 1, { daysArr: b, todayIndex: f } = l(W, L), z = [];
      let $ = new Date(W.getFullYear(), W.getMonth(), 1);
      for (; $ <= m; ) {
        const K = xt($), ee = K > m ? m : K, q = $ < W ? W : $, Q = Ee(W, q), ne = Ee(q, ee) + 1;
        z.push({
          date: new Date($),
          label: `${At($, o)} ${$.getFullYear()}`,
          startDay: Q,
          days: ne,
          width: ne * s
        }), $ = new Date($.getFullYear(), $.getMonth() + 1, 1);
      }
      return {
        start: W,
        end: m,
        totalDays: L,
        dayWidth: s,
        totalWidth: L * s,
        months: z,
        years: [],
        days: b,
        todayIndex: f
      };
    }
    const R = Qt(E), k = xt(E), B = Ee(R, k) + 1, { daysArr: v, todayIndex: C } = l(R, B);
    return {
      start: R,
      end: k,
      totalDays: B,
      dayWidth: s,
      totalWidth: B * s,
      months: [{ date: R, label: `${At(R, o)} ${R.getFullYear()}`, startDay: 0, days: B, width: B * s }],
      years: [{ label: R.getFullYear().toString(), width: B * s }],
      days: v,
      todayIndex: C
    };
  }
  let d = new Date(e[0].start), g = new Date(e[0].end);
  e.forEach((E) => {
    E.start < d && (d = new Date(E.start)), E.end > g && (g = new Date(E.end));
  });
  const y = t === "month" ? 180 : t === "week" ? 45 : 30, x = t === "month" ? 180 : t === "week" ? 45 : 30, I = Qt(ue(d, -y)), w = xt(ue(g, x)), O = Ee(I, w) + 1, X = [];
  let M = new Date(I);
  for (; M <= w; ) {
    const E = xt(M), R = E > w ? w : E, k = Ee(I, M), B = Ee(M, R) + 1;
    X.push({
      date: new Date(M),
      label: `${At(M, o)} ${M.getFullYear()}`,
      startDay: k,
      days: B,
      width: B * s
    }), M = new Date(M.getFullYear(), M.getMonth() + 1, 1);
  }
  const { daysArr: _, todayIndex: D } = l(I, O), p = [];
  if (t === "month") {
    let E = "", R = 0;
    for (const k of X) {
      const B = k.date.getFullYear().toString();
      B !== E ? (E && p.push({ label: E, width: R * s }), E = B, R = k.days) : R += k.days;
    }
    E && p.push({ label: E, width: R * s });
  }
  return { start: I, end: w, totalDays: O, dayWidth: s, totalWidth: O * s, months: X, years: p, days: _, todayIndex: D };
}
function Be(e, t) {
  return Ee(t.start, e) * t.dayWidth;
}
function co({
  task: e,
  x: t,
  y: o,
  w: r,
  progW: i,
  isHov: s,
  isDrag: l,
  isResize: d,
  isCritical: g,
  isDelayed: y,
  isConnectTarget: x,
  showDots: I,
  isBarDimmed: w,
  isBarHighlighted: O,
  commonEvents: X,
  handleResizeMouseDown: M,
  handleResizeTouchStart: _,
  handleConnectDotMouseDown: D,
  handleConnectDotTouchStart: p
}) {
  const { timeline: E, viewMode: R, props: k } = Pe();
  if (e.originalType === "step") {
    const B = we[e.colorIdx ?? 0], v = o + (ge - Ie) / 2, C = e.barColor || B.bar, W = e.progressColor || B.progress, m = e.borderColor || B.barBorder, b = k.showLabelOutside !== !1 && r < 55, f = g || y ? n.today : n.textPrimary, z = !!(e.previsionStart && e.previsionEnd), $ = z ? Be(e.previsionStart, E) : 0, K = z ? Math.max(Be(e.previsionEnd, E) - $, R === "month" ? E.dayWidth : 6) : 0, ee = v + Ie + 3;
    return /* @__PURE__ */ u(Me, { children: [
      z && /* @__PURE__ */ a(
        "div",
        {
          title: `Previsto: ${ve(e.previsionStart, k.locale)} → ${ve(e.previsionEnd, k.locale)}`,
          style: {
            position: "absolute",
            left: $,
            top: ee,
            width: K,
            height: 5,
            borderRadius: 3,
            background: `color-mix(in srgb, ${W}, transparent 80%)`,
            border: `1.5px solid color-mix(in srgb, ${W}, transparent 60%)`,
            boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${W}, transparent 85%)`,
            pointerEvents: "none",
            zIndex: 5
          }
        }
      ),
      /* @__PURE__ */ u(
        "div",
        {
          "data-task-id": e.id,
          ...X,
          role: "button",
          tabIndex: 0,
          "aria-label": `Task bar ${e.name}`,
          style: {
            position: "absolute",
            left: t,
            top: v,
            width: r,
            height: Ie,
            borderRadius: Ie / 2,
            background: y ? n.delayedTaskBg : C,
            border: g ? `2px solid ${n.today}` : y ? `1.5px solid ${n.todayStrong}` : `1.5px solid ${m}`,
            cursor: l || d ? "grabbing" : "grab",
            zIndex: s || x ? 20 : 10,
            boxShadow: x ? `0 0 0 2px ${n.group}, 0 4px 16px ${n.groupGlowSoft}` : g ? `0 0 0 1px ${n.todayMid}, 0 3px 12px ${n.todaySoft}` : O && !s ? `0 0 0 2px ${n.groupGlowStrong}, 0 3px 14px ${n.groupGlowSoft}` : s ? `0 3px 12px color-mix(in srgb, ${W}, transparent 85%)` : "none",
            transform: s ? "scaleY(1.06)" : "scaleY(1)",
            opacity: w ? 0.15 : 1,
            transition: l || d ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
            overflow: "visible"
          },
          children: [
            /* @__PURE__ */ u("div", { style: { position: "absolute", left: 0, top: 0, width: r, height: "100%", borderRadius: Ie / 2, overflow: "hidden", pointerEvents: "none" }, children: [
              /* @__PURE__ */ a("div", { style: {
                position: "absolute",
                left: 0,
                top: 0,
                width: i,
                height: "100%",
                background: y ? n.today : W,
                borderRadius: `${Ie / 2}px 0 0 ${Ie / 2}px`,
                transition: l || d ? "none" : "width 0.3s"
              } }),
              r > 50 && /* @__PURE__ */ u("span", { style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: e.progress > 50 ? n.white : y ? n.today : W,
                zIndex: 1,
                pointerEvents: "none"
              }, children: [
                Math.round(e.progress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ a("div", { onMouseDown: (q) => M(q, e, "left"), onTouchStart: (q) => _(q, e, "left"), style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${Ie / 2}px 0 0 ${Ie / 2}px` } }),
            /* @__PURE__ */ a("div", { onMouseDown: (q) => M(q, e, "right"), onTouchStart: (q) => _(q, e, "right"), style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${Ie / 2}px ${Ie / 2}px 0` } }),
            I && /* @__PURE__ */ u(Me, { children: [
              /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (q) => D(q, e, "left"), onTouchStart: (q) => p(q, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
              /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (q) => D(q, e, "right"), onTouchStart: (q) => p(q, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } })
            ] })
          ]
        }
      ),
      b && /* @__PURE__ */ a(
        "span",
        {
          style: {
            position: "absolute",
            left: t + r + 6,
            top: v,
            height: Ie,
            display: "flex",
            alignItems: "center",
            fontSize: 11,
            fontWeight: 600,
            color: f,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            maxWidth: 120,
            overflow: "hidden",
            textOverflow: "ellipsis",
            opacity: w ? 0.15 : 1,
            transition: "opacity 0.18s"
          },
          title: e.name,
          children: e.name
        }
      )
    ] });
  }
  if (e.originalType === "milestone") {
    const B = o + (ge - Ge) / 2;
    return /* @__PURE__ */ u(
      "div",
      {
        "data-task-id": e.id,
        ...X,
        role: "button",
        tabIndex: 0,
        "aria-label": `Milestone ${e.name}`,
        style: {
          position: "absolute",
          left: t - 6,
          top: B,
          height: Ge,
          minWidth: $t,
          borderRadius: Ge / 2,
          background: g ? n.criticalPillBg : n.milestonePillBg,
          border: x ? `2px solid ${n.group}` : g ? `2px solid ${n.today}` : `1.5px solid ${n.milestoneRing}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: l ? "grabbing" : "grab",
          zIndex: s || x ? 20 : 10,
          boxShadow: x ? `0 0 0 2px ${n.group}, 0 4px 16px ${n.groupGlowSoft}` : g ? `0 0 0 1px ${n.todayMid}, 0 3px 12px ${n.todaySoft}` : O && !s ? `0 0 0 2px ${n.groupGlowStrong}, 0 3px 14px ${n.groupGlowSoft}` : s ? `0 3px 12px ${n.milestoneRingSoft}` : n.shadowSoft,
          opacity: w ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: s ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ a("div", { style: { width: 20, height: 20, borderRadius: "50%", background: g ? n.today : n.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Qe, { size: 11, color: n.white, strokeWidth: 2.5 }) }),
          /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: g ? n.today : n.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: e.name }),
          e.progress >= 100 && /* @__PURE__ */ a("span", { style: { fontSize: 9, fontWeight: 700, color: n.white, background: n.milestoneRing, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          I && /* @__PURE__ */ u(Me, { children: [
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (v) => D(v, e, "left"), onTouchStart: (v) => p(v, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (v) => D(v, e, "right"), onTouchStart: (v) => p(v, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (e.originalType === "event") {
    const B = o + (ge - Ge) / 2;
    return /* @__PURE__ */ u(
      "div",
      {
        "data-task-id": e.id,
        ...X,
        role: "button",
        tabIndex: 0,
        "aria-label": `Event ${e.name}`,
        style: {
          position: "absolute",
          left: t - 6,
          top: B,
          height: Ge,
          minWidth: $t,
          borderRadius: Ge / 2,
          background: g ? n.criticalPillBg : n.eventPillBg,
          border: x ? `2px solid ${n.group}` : g ? `2px solid ${n.today}` : `1.5px solid ${n.event}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: l ? "grabbing" : "grab",
          zIndex: s || x ? 20 : 10,
          boxShadow: x ? `0 0 0 2px ${n.group}, 0 4px 16px ${n.groupGlowSoft}` : g ? `0 0 0 1px ${n.todayMid}, 0 3px 12px ${n.todaySoft}` : O && !s ? `0 0 0 2px ${n.groupGlowStrong}, 0 3px 14px ${n.groupGlowSoft}` : s ? `0 3px 12px ${n.eventBorderSoft}` : n.shadowSoft,
          opacity: w ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: s ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ a("div", { style: { width: 20, height: 20, borderRadius: "50%", background: g ? n.today : n.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Je, { size: 11, color: n.white, strokeWidth: 2.5 }) }),
          /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: g ? n.today : n.event, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: e.name }),
          e.progress >= 100 && /* @__PURE__ */ a("span", { style: { fontSize: 9, fontWeight: 700, color: n.white, background: n.event, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          I && /* @__PURE__ */ u(Me, { children: [
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (v) => D(v, e, "left"), onTouchStart: (v) => p(v, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (v) => D(v, e, "right"), onTouchStart: (v) => p(v, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (e.originalType === "note") {
    const v = o + 4, C = e.noteColor || n.noteDefaultBg, W = e.filesCount || 0;
    return /* @__PURE__ */ u(
      "div",
      {
        "data-task-id": e.id,
        ...X,
        role: "button",
        tabIndex: 0,
        "aria-label": `Note ${e.name}`,
        style: {
          position: "absolute",
          left: t,
          top: v,
          width: 148,
          minHeight: 72,
          background: C,
          borderRadius: 3,
          cursor: l ? "grabbing" : "grab",
          zIndex: s || x ? 20 : 10,
          boxShadow: x ? `0 0 0 2px ${n.group}, ${n.shadowStickyStrong}` : O && !s ? `0 0 0 2px ${n.groupGlowStrong}, ${n.shadowStickyHover}` : s ? n.shadowStickyHover : n.shadowSticky,
          opacity: w ? 0.2 : 1,
          transition: l ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: s ? "rotate(-1.5deg) scale(1.03) translateY(-2px)" : "rotate(0deg)",
          border: `1px solid ${n.groupSoftStrong}`,
          padding: "12px 10px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          userSelect: "none"
        },
        children: [
          /* @__PURE__ */ a("div", { style: {
            position: "absolute",
            top: -6,
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 11,
            background: n.stickyTape,
            borderRadius: 2,
            boxShadow: n.shadowTiny
          } }),
          /* @__PURE__ */ a("span", { style: {
            fontSize: 13,
            fontWeight: 700,
            color: n.inkStrong,
            lineHeight: "1.3",
            wordBreak: "break-word",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }, children: e.name }),
          e.projectTitle && /* @__PURE__ */ a("span", { style: {
            fontSize: 10,
            fontWeight: 400,
            color: n.inkSoft3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: e.projectTitle }),
          /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 2 }, children: [
            /* @__PURE__ */ a("span", { style: { fontSize: 9, fontWeight: 500, color: n.inkSoft4 }, children: ve(e.start, k.locale) }),
            W > 0 && /* @__PURE__ */ u("span", { style: {
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 9,
              color: n.inkSoft4
            }, children: [
              /* @__PURE__ */ a(ct, { size: 8 }),
              " ",
              W
            ] })
          ] }),
          I && /* @__PURE__ */ u(Me, { children: [
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (m) => D(m, e, "left"), onTouchStart: (m) => p(m, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (m) => D(m, e, "right"), onTouchStart: (m) => p(m, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  return null;
}
function uo({ arrows: e }) {
  const {
    arrows: t,
    hoveredTaskId: o,
    selectedTaskId: r,
    relatedIds: i
  } = Pe(), s = e || t, l = {
    FS: n.group,
    SS: n.event,
    FF: "var(--zg-dep-ff, #7c3aed)",
    SF: "var(--zg-dep-sf, #0369a1)"
  };
  return /* @__PURE__ */ a(Me, { children: s.map((d, g) => {
    const y = o === d.predId || o === d.succId, x = !r || d.predId === r || d.succId === r || i.has(d.predId) || i.has(d.succId), I = r !== null && x, w = l[d.depType] ?? n.arrow, O = y ? n.arrowHover : I ? w : n.arrow;
    return /* @__PURE__ */ u("g", { style: { opacity: x ? I ? 1 : void 0 : 0.08, transition: "opacity 0.18s" }, children: [
      /* @__PURE__ */ a(
        "path",
        {
          d: d.path,
          fill: "none",
          stroke: O,
          strokeWidth: I ? 2.5 : y ? 2 : 1.5,
          style: { transition: "stroke 0.2s, stroke-width 0.2s" }
        }
      ),
      /* @__PURE__ */ a(
        "polygon",
        {
          points: `${d.headX},${d.headY} ${d.headX - 6},${d.headY - 4} ${d.headX - 6},${d.headY + 4}`,
          fill: O,
          style: { transition: "fill 0.2s" }
        }
      ),
      d.lag !== 0 && /* @__PURE__ */ u("g", { children: [
        /* @__PURE__ */ a(
          "rect",
          {
            x: d.headX - 40,
            y: d.headY - 10,
            width: 32,
            height: 14,
            rx: 4,
            fill: "var(--zg-surface, #fff)",
            stroke: O,
            strokeWidth: 0.8,
            opacity: x ? 1 : 0
          }
        ),
        /* @__PURE__ */ a(
          "text",
          {
            x: d.headX - 24,
            y: d.headY + 1,
            fontSize: 8,
            fontWeight: 700,
            fill: O,
            textAnchor: "middle",
            opacity: x ? 1 : 0,
            style: { pointerEvents: "none", userSelect: "none" },
            children: d.lag > 0 ? `+${d.lag}d` : `${d.lag}d`
          }
        )
      ] })
    ] }, g);
  }) });
}
const Jt = (e, t) => Math.round((t.getTime() - e.getTime()) / 864e5) + 1;
function go({ task: e, x: t, y: o }) {
  const { props: r, t: i } = Pe(), s = () => {
    switch (e.originalType) {
      case "step":
        return /* @__PURE__ */ a("div", { style: {
          width: 14,
          height: 14,
          borderRadius: 3,
          background: we[e.colorIdx ?? 0].bar,
          border: `1.5px solid ${we[e.colorIdx ?? 0].barBorder}`,
          flexShrink: 0
        } });
      case "milestone":
        return /* @__PURE__ */ a("div", { style: {
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: n.milestone,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }, children: /* @__PURE__ */ a(Qe, { size: 10, color: n.white, strokeWidth: 2.5 }) });
      case "event":
        return /* @__PURE__ */ a("div", { style: {
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: n.event,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }, children: /* @__PURE__ */ a(Je, { size: 10, color: n.white, strokeWidth: 2.5 }) });
      case "note":
        return /* @__PURE__ */ a("div", { style: {
          width: 14,
          height: 16,
          background: e.noteColor || n.note,
          borderRadius: 2,
          boxShadow: n.shadowTiny,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: /* @__PURE__ */ a("div", { style: { width: 8, height: 2, background: "rgba(0,0,0,0.2)", borderRadius: 1 } }) });
      default:
        return /* @__PURE__ */ a($n, { size: 14 });
    }
  }, l = () => {
    switch (e.originalType) {
      case "step":
        return i("gantt.newAction.step", "Step");
      case "milestone":
        return i("gantt.newAction.milestone", "Milestone");
      case "event":
        return i("gantt.newAction.event", "Event");
      case "note":
        return i("gantt.newAction.note", "Note");
      default:
        return "";
    }
  };
  return /* @__PURE__ */ a("div", { style: {
    position: "fixed",
    left: t + 20,
    top: o - 10,
    zIndex: 99999,
    pointerEvents: "none",
    transform: "translate3d(0,0,0)"
  }, children: /* @__PURE__ */ u(
    "div",
    {
      style: {
        borderRadius: 12,
        background: "var(--zg-surface-frost)",
        backdropFilter: "blur(12px)",
        border: "1px solid var(--zg-border-light)",
        boxShadow: "var(--zg-shadow-large)",
        minWidth: 260,
        maxWidth: 360,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ u("div", { style: {
          padding: "12px 16px",
          borderBottom: "1px solid var(--zg-border-light)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(255,255,255,0.4)"
        }, children: [
          s(),
          /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }, children: [
            /* @__PURE__ */ a("span", { style: {
              fontSize: 10,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: n.textMuted,
              lineHeight: 1
            }, children: l() }),
            /* @__PURE__ */ a("h4", { style: {
              margin: "4px 0 0 0",
              fontSize: 14,
              fontWeight: 700,
              color: n.textTitle,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              lineHeight: 1.2
            }, children: e.name })
          ] })
        ] }),
        /* @__PURE__ */ u("div", { style: { padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 }, children: [
          e.projectTitle && /* @__PURE__ */ u("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 8px",
            borderRadius: 8,
            background: n.pageBg,
            border: `1px solid ${n.borderLight}`
          }, children: [
            /* @__PURE__ */ a("div", { style: { width: 6, height: 6, borderRadius: "50%", background: n.group } }),
            /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: n.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: e.projectTitle })
          ] }),
          e.originalType === "step" ? /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
            e.previsionStart && e.previsionEnd && /* @__PURE__ */ u("div", { style: { background: n.headerBg, borderRadius: 8, padding: "8px 10px", border: `1px solid ${n.borderLight}` }, children: [
              /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }, children: [
                /* @__PURE__ */ a(Wt, { size: 12, style: { color: n.textSecondary } }),
                /* @__PURE__ */ a("span", { style: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: n.textSecondary }, children: i("gantt.tooltip.planned", "Planned") })
              ] }),
              /* @__PURE__ */ u("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11 }, children: [
                /* @__PURE__ */ u("span", { style: { color: n.textSecondary }, children: [
                  ve(e.previsionStart, r.locale),
                  " → ",
                  ve(e.previsionEnd, r.locale)
                ] }),
                /* @__PURE__ */ u("span", { style: { fontWeight: 700, color: n.textPrimary }, children: [
                  Jt(e.previsionStart, e.previsionEnd),
                  "d"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ u("div", { style: {
              background: e.hasActualDates ? "color-mix(in srgb, var(--zg-group-light), transparent 90%)" : "transparent",
              borderRadius: 8,
              padding: e.hasActualDates ? "8px 10px" : "0",
              border: e.hasActualDates ? "1px solid color-mix(in srgb, var(--zg-group-light), transparent 70%)" : "none"
            }, children: [
              !e.hasActualDates && /* @__PURE__ */ a("div", { style: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: n.textMuted, marginBottom: 4 }, children: i("gantt.tooltip.plannedInUse", "Planned (in use)") }),
              /* @__PURE__ */ u("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
                /* @__PURE__ */ u("span", { style: { fontWeight: 600, color: n.textPrimary }, children: [
                  ve(e.start, r.locale),
                  " → ",
                  ve(e.end, r.locale)
                ] }),
                /* @__PURE__ */ u("span", { style: { fontWeight: 700, color: n.group }, children: [
                  Jt(e.start, e.end),
                  "d"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ u("div", { style: { marginTop: 4 }, children: [
              /* @__PURE__ */ u("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }, children: [
                /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: n.textSecondary }, children: i("charts.gantt.progress", "Progress") }),
                /* @__PURE__ */ u("span", { style: { fontSize: 12, fontWeight: 800, color: n.group }, children: [
                  Math.round(e.progress),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ a("div", { style: { width: "100%", height: 6, background: n.borderLight, borderRadius: 3, overflow: "hidden" }, children: /* @__PURE__ */ a("div", { style: {
                width: `${e.progress}%`,
                height: "100%",
                background: we[e.colorIdx ?? 0].progress,
                borderRadius: 3
              } }) })
            ] })
          ] }) : /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
            /* @__PURE__ */ u("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
                /* @__PURE__ */ a(Wt, { size: 14, style: { color: n.textMuted } }),
                /* @__PURE__ */ a("span", { style: { fontSize: 12, fontWeight: 600, color: n.textPrimary }, children: ve(e.start, r.locale) })
              ] }),
              e.originalType === "note" && (e.filesCount || 0) > 0 && /* @__PURE__ */ u("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "2px 8px",
                background: n.headerBg,
                borderRadius: 6,
                fontSize: 10,
                fontWeight: 700,
                color: n.textSecondary
              }, children: [
                /* @__PURE__ */ a(ct, { size: 10 }),
                e.filesCount,
                " ",
                i("gantt.tooltip.attachments", "Attachments")
              ] })
            ] }),
            e.attachedNotes && e.attachedNotes.length > 0 && /* @__PURE__ */ u("div", { style: {
              marginTop: 4,
              padding: "8px 10px",
              background: n.noteBadgeBg,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
              border: `1px solid color-mix(in srgb, ${n.noteBadgeBg}, black 10%)`
            }, children: [
              /* @__PURE__ */ a(ct, { size: 12, style: { color: n.noteBadgeText } }),
              /* @__PURE__ */ u("span", { style: { fontSize: 11, fontWeight: 700, color: n.noteBadgeText }, children: [
                e.attachedNotes.length,
                " ",
                i("gantt.filter.notes", "Notes")
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a("div", { style: {
          padding: "8px 16px",
          background: "rgba(0,0,0,0.02)",
          borderTop: `1px solid ${n.borderLight}`,
          fontSize: 9,
          fontWeight: 600,
          color: n.textMuted,
          textAlign: "center",
          letterSpacing: "0.02em"
        }, children: i("gantt.tooltip.hint", "CLICK TO SEE DETAILS") })
      ]
    }
  ) });
}
const vt = (e) => ({
  id: e.id,
  name: e.name,
  start: e.start,
  end: e.end,
  type: e.originalType === "step" ? "task" : e.originalType,
  progress: e.progress
}), wt = (e, t) => {
  switch (e) {
    case "step":
      return /* @__PURE__ */ a("div", { style: { width: 12, height: 12, borderRadius: 2, background: we[t ?? 0].bar, border: `1.5px solid ${we[t ?? 0].barBorder}`, flexShrink: 0 } });
    case "milestone":
      return /* @__PURE__ */ a("div", { style: { width: 16, height: 16, borderRadius: "50%", background: n.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Qe, { size: 8, color: n.white }) });
    case "event":
      return /* @__PURE__ */ a("div", { style: { width: 16, height: 16, borderRadius: "50%", background: n.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Je, { size: 8, color: n.white }) });
    case "note":
      return /* @__PURE__ */ a("div", { style: { width: 12, height: 14, background: n.note, borderRadius: 2, boxShadow: n.shadowSmall, flexShrink: 0 } });
    default:
      return null;
  }
};
function ho() {
  const {
    props: e,
    t,
    viewMode: o,
    isInfiniteCanvas: r,
    timeline: i,
    displayRows: s,
    dragState: l,
    resizeState: d,
    connectState: g,
    pendingConnection: y,
    setPendingConnection: x,
    depModalType: I,
    setDepModalType: w,
    depModalLag: O,
    setDepModalLag: X,
    depCreating: M,
    deletingDepId: _,
    setDeletingDepId: D,
    chartMenu: p,
    setChartMenu: E,
    rightBodyRef: R,
    timeHeaderRef: k,
    handleChartMouseDown: B,
    handleChartTouchStart: v,
    handleChartWheel: C,
    openChartMenu: W,
    handleRightScroll: m,
    hoveredTaskId: L,
    setHoveredTaskId: b,
    setSelectedTaskId: f,
    selectedTaskIds: z,
    tooltip: $,
    setTooltip: K,
    popupState: ee,
    setPopupState: q,
    handleBarClick: Q,
    arrows: ne,
    criticalIds: re,
    delayedIds: ie,
    relatedIds: se,
    handleBarMouseDown: Se,
    handleBarTouchStart: Oe,
    handleResizeMouseDown: et,
    handleResizeTouchStart: Mt,
    handleConnectDotMouseDown: Xe,
    handleConnectDotTouchStart: _e,
    handleCreateDependency: ut,
    nonWorkingDaySet: He
  } = Pe(), {
    onViewStage: tt,
    onEditStage: Rt,
    onDeleteStage: gt,
    onDeleteDependency: Ue,
    onAddNewStage: ht,
    onAddMilestone: nt,
    onAddEvent: pt,
    onAddNote: ot
  } = e, [ft, rt] = V(null), mt = Pt({
    count: s.length,
    getScrollElement: () => R.current,
    estimateSize: () => ge,
    overscan: 12
  }), je = mt.getVirtualItems(), Ne = Pt({
    horizontal: !0,
    count: i.days.length,
    getScrollElement: () => R.current,
    estimateSize: () => i.dayWidth,
    overscan: 10
  }).getVirtualItems(), j = Math.max(mt.getTotalSize(), 400) + 80, F = ce(() => {
    const T = /* @__PURE__ */ new Set();
    for (const U of je) {
      const G = s[U.index];
      G?.kind === "task" && T.add(G.task.id);
    }
    return T;
  }, [je, s]), pe = ce(
    () => ne.filter((T) => F.has(T.predId) || F.has(T.succId)),
    [ne, F]
  ), De = () => q({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  return /* @__PURE__ */ u("div", { style: { flex: 1, width: "100%", background: "var(--zg-surface-alt)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", borderLeft: e.hideSidebar ? "none" : `1px solid ${n.borderLight}` }, children: [
    /* @__PURE__ */ a(
      "div",
      {
        ref: k,
        style: {
          boxSizing: "border-box",
          height: lt * 2,
          background: n.headerBg,
          borderBottom: `1px solid ${n.borderLight}`,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          boxShadow: n.shadowTiny
        },
        onWheel: C,
        children: /* @__PURE__ */ u("div", { style: { width: i.totalWidth, height: "100%", position: "relative" }, children: [
          /* @__PURE__ */ u("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: lt, display: "flex" }, children: [
            (o === "day" || o === "week") && i.months.map((T, U) => /* @__PURE__ */ a("div", { style: { width: T.width, position: "relative", height: "100%", borderRight: `1px solid ${n.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ a("span", { style: { fontSize: 13, fontWeight: 700, color: n.textTitle, letterSpacing: "0.02em" }, children: T.label }) }, U)),
            o === "month" && i.years?.map((T, U) => /* @__PURE__ */ a("div", { style: { width: T.width, position: "relative", height: "100%", borderRight: `1px solid ${n.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ a("span", { style: { fontSize: 13, fontWeight: 700, color: n.textTitle, letterSpacing: "0.02em" }, children: T.label }) }, U))
          ] }),
          /* @__PURE__ */ u("div", { style: { position: "absolute", top: lt, left: 0, right: 0, height: lt, display: "flex" }, children: [
            (o === "day" || o === "week") && /* @__PURE__ */ a("div", { style: { width: i.totalWidth, height: "100%", position: "relative" }, children: Ne.map((T) => {
              const U = i.days[T.index];
              if (!U) return null;
              const G = U.isToday, ye = U.date.getDay() === 1 && e.showWeekNumbers ? so(U.date) : null, Ce = `${U.date.getFullYear()}-${U.date.getMonth()}-${U.date.getDate()}`, Ae = He.has(Ce), oe = Ae ? e.nonWorkingDays?.find((fe) => {
                const be = fe.date instanceof Date ? fe.date : new Date(fe.date);
                return `${be.getFullYear()}-${be.getMonth()}-${be.getDate()}` === Ce;
              })?.label ?? "Holiday" : void 0;
              return /* @__PURE__ */ u(
                "div",
                {
                  title: oe,
                  style: {
                    position: "absolute",
                    left: T.start,
                    width: T.size,
                    height: "100%",
                    borderRight: `1px solid ${n.borderLight}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: Ae ? "rgba(205,98,0,0.08)" : void 0
                  },
                  children: [
                    ye !== null && /* @__PURE__ */ u("span", { style: {
                      fontSize: 8,
                      fontWeight: 800,
                      color: n.group,
                      background: "rgba(26,60,48,0.1)",
                      borderRadius: 3,
                      padding: "0 3px",
                      marginBottom: 1,
                      letterSpacing: "0.02em"
                    }, children: [
                      "W",
                      String(ye).padStart(2, "0")
                    ] }),
                    /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: G ? 800 : 500, color: G ? n.today : n.textSecondary, letterSpacing: "-0.03em" }, children: U.date.getDate().toString().padStart(2, "0") })
                  ]
                },
                `day-${T.index}`
              );
            }) }),
            o === "month" && i.months.map((T, U) => /* @__PURE__ */ a("div", { style: { width: T.width, position: "relative", height: "100%", borderRight: `1px solid ${n.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: n.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em" }, children: T.label.substring(0, 3) }) }, U))
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        ref: R,
        className: "zg-no-scrollbar",
        style: {
          flex: 1,
          overflow: "auto",
          background: "var(--zg-surface)",
          position: "relative",
          cursor: r ? "grab" : "default",
          transform: "translate3d(0,0,0)",
          willChange: "scroll-position"
        },
        onScroll: m,
        onMouseDown: B,
        onTouchStart: v,
        onWheel: C,
        onContextMenu: W,
        onClick: () => {
          f(null), q({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
        },
        children: /* @__PURE__ */ u("div", { style: { width: i.totalWidth, height: j, position: "relative" }, children: [
          /* @__PURE__ */ u("svg", { width: i.totalWidth, height: j, style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" }, children: [
            /* @__PURE__ */ u("defs", { children: [
              /* @__PURE__ */ a("pattern", { id: "gantt-y-lines", x: "0", y: "0", width: i.dayWidth, height: ge, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ a("line", { x1: i.dayWidth, y1: "0", x2: i.dayWidth, y2: ge, stroke: n.border, strokeWidth: "1", strokeDasharray: "4 4", opacity: "0.4" }) }),
              /* @__PURE__ */ a("pattern", { id: "gantt-x-lines", x: "0", y: "0", width: i.dayWidth, height: ge, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ a("line", { x1: "0", y1: ge, x2: i.dayWidth, y2: ge, stroke: n.borderLight, strokeWidth: "1" }) })
            ] }),
            /* @__PURE__ */ a("rect", { width: "100%", height: "100%", fill: "url(#gantt-x-lines)" }),
            /* @__PURE__ */ a("rect", { width: "100%", height: "100%", fill: "url(#gantt-y-lines)" }),
            (o === "day" || o === "week") && Ne.map((T) => i.days[T.index]?.isWeekend ? /* @__PURE__ */ a("rect", { x: T.start, y: 0, width: T.size, height: j, fill: n.weekendBg, opacity: 0.6 }, `we-${T.index}`) : null),
            o === "month" && Ne.map((T) => i.days[T.index]?.isWeekend ? /* @__PURE__ */ a("rect", { x: T.start, y: 0, width: T.size, height: j, fill: n.weekendBg, opacity: 0.3 }, `wem-${T.index}`) : null),
            o === "day" && Ne.map((T) => {
              const U = i.days[T.index];
              if (!U) return null;
              const G = `${U.date.getFullYear()}-${U.date.getMonth()}-${U.date.getDate()}`;
              return He.has(G) ? /* @__PURE__ */ a(
                "rect",
                {
                  x: T.start,
                  y: 0,
                  width: T.size,
                  height: j,
                  fill: "rgba(205,98,0,0.12)"
                },
                `hol-${T.index}`
              ) : null;
            }),
            i.todayIndex >= 0 && /* @__PURE__ */ u("g", { children: [
              /* @__PURE__ */ a("rect", { x: i.todayIndex * i.dayWidth, y: 0, width: i.dayWidth, height: j, fill: n.todayBg }),
              /* @__PURE__ */ a("line", { x1: (i.todayIndex + 0.5) * i.dayWidth, y1: 0, x2: (i.todayIndex + 0.5) * i.dayWidth, y2: j, stroke: n.today, strokeWidth: 2, strokeDasharray: "4 4", opacity: 0.3 })
            ] })
          ] }),
          je.map((T) => {
            const U = s[T.index];
            return U && (U.kind === "group" || U.kind === "projectHeader") ? /* @__PURE__ */ a("div", { style: {
              boxSizing: "border-box",
              position: "absolute",
              left: 0,
              top: T.start,
              width: "100%",
              height: ge,
              background: U.kind === "projectHeader" ? n.headerBg : n.groupLightSoft,
              borderBottom: `1px solid ${n.borderLight}`,
              pointerEvents: "none"
            } }, `bg-${T.index}`) : null;
          }),
          /* @__PURE__ */ u("div", { style: { position: "absolute", inset: 0 }, children: [
            je.map((T) => {
              const U = s[T.index];
              if (!U || U.kind !== "task") return null;
              const G = U.task, ke = l?.task.id === G.id, ye = d?.task.id === G.id, Ce = ke || ye && d.edge === "left" ? ue(G.start, ke ? l.offsetDays : d.offsetDays) : G.start, Ae = ke || ye && d.edge === "right" ? ue(G.end, ke ? l.offsetDays : d.offsetDays) : G.end, oe = G.originalType !== "step", fe = Be(Ce, i);
              let be = 0, Te = 0;
              oe || (be = Math.max(Be(Ae, i) - fe, i.dayWidth), Te = be * (G.progress / 100));
              const it = L === G.id, Ve = z.has(G.id), yt = ie.has(G.id), st = re.has(G.id), at = z.size > 0 && !Ve && !se.has(G.id), ze = Ve || z.size > 0 && se.has(G.id), Fe = g?.hoverTargetId === G.id, We = it || Ve, bt = T.start;
              return /* @__PURE__ */ a(
                co,
                {
                  task: G,
                  x: fe,
                  y: bt,
                  w: be,
                  progW: Te,
                  isHov: it,
                  isDrag: ke,
                  isResize: ye,
                  isCritical: st,
                  isDelayed: yt,
                  isConnectTarget: Fe,
                  showDots: We,
                  isBarDimmed: at,
                  isBarHighlighted: ze,
                  commonEvents: {
                    onMouseEnter: (ae) => {
                      b(G.id), !l && !d && K({ task: G, x: ae.clientX, y: ae.clientY });
                    },
                    onMouseMove: (ae) => {
                      L === G.id && !l && !d && K({ task: G, x: ae.clientX, y: ae.clientY });
                    },
                    onMouseLeave: () => {
                      b(null), K(null);
                    },
                    onClick: (ae) => Q(ae, G),
                    onDoubleClick: (ae) => {
                      ae.stopPropagation(), tt?.(vt(G));
                    },
                    onMouseDown: (ae) => Se(ae, G),
                    onTouchStart: (ae) => Oe(ae, G),
                    onKeyDown: (ae) => {
                      if (ae.key === "Enter") {
                        ae.preventDefault(), tt?.(vt(G));
                        return;
                      }
                      ae.key === " " && (ae.preventDefault(), f(G.id));
                    }
                  },
                  handleResizeMouseDown: et,
                  handleResizeTouchStart: Mt,
                  handleConnectDotMouseDown: Xe,
                  handleConnectDotTouchStart: _e
                },
                G.id
              );
            }),
            /* @__PURE__ */ a("svg", { width: i.totalWidth, height: j, style: { position: "absolute", inset: 0, pointerEvents: "none" }, children: /* @__PURE__ */ a(uo, { arrows: pe }) }),
            $ && !l && !ee.isOpen && /* @__PURE__ */ a(go, { task: $.task, x: $.x, y: $.y })
          ] })
        ] })
      }
    ),
    ee.task && ee.isOpen && (() => {
      const T = ee.task, U = (e.dependencies || []).filter((oe) => oe.predecessorId === T.id || oe.successorId === T.id), G = { FS: t("gantt.depType.fs", "Finish to Start"), SS: t("gantt.depType.ss", "Start to Start"), FF: t("gantt.depType.ff", "Finish to Finish"), SF: t("gantt.depType.sf", "Start to Finish") }, ke = U.length > 0 ? 300 : 220, ye = 200 + U.length * 68, Ce = Math.min(ee.position.x, window.innerWidth - ke - 16), Ae = Math.min(Math.max(8, ee.position.y + 8), window.innerHeight - ye - 16);
      return /* @__PURE__ */ u(
        "div",
        {
          "data-popup": "gantt-action",
          style: { position: "fixed", left: Ce, top: Ae, zIndex: 9999, background: "var(--zg-surface)", borderRadius: 4, boxShadow: "var(--zg-shadow-popover)", border: `1.5px solid ${n.borderLight}`, width: ke, overflow: "hidden" },
          onMouseDown: (oe) => oe.stopPropagation(),
          children: [
            /* @__PURE__ */ a("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${n.borderLight}` }, children: /* @__PURE__ */ a("p", { style: { fontSize: 13, fontWeight: 700, color: n.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: T.name, children: T.name }) }),
            /* @__PURE__ */ u("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" }, children: [
              /* @__PURE__ */ u("button", { onClick: () => {
                tt?.(vt(T)), De();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: n.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ a(Pn, { size: 15 }),
                " ",
                /* @__PURE__ */ a("span", { style: { flex: 1, textAlign: "left" }, children: t("gantt.popup.viewDetails", "View details") })
              ] }),
              /* @__PURE__ */ u("button", { onClick: () => {
                Rt?.(vt(T)), De();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: n.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ a(On, { size: 15 }),
                " ",
                /* @__PURE__ */ a("span", { style: { flex: 1, textAlign: "left" }, children: t("gantt.popup.edit", "Edit") })
              ] }),
              /* @__PURE__ */ u("button", { onClick: () => {
                gt?.(T.id), De();
              }, className: "zg-popup-btn zg-popup-btn-danger", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: n.dangerText, textAlign: "left" }, children: [
                /* @__PURE__ */ a(jn, { size: 15 }),
                " ",
                /* @__PURE__ */ a("span", { style: { flex: 1, textAlign: "left" }, children: t("gantt.popup.delete", "Delete") })
              ] })
            ] }),
            T.originalType === "step" && e.onProgressChange && /* @__PURE__ */ u("div", { style: { padding: "10px 14px", borderTop: `1px solid ${n.borderLight}` }, children: [
              /* @__PURE__ */ u("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: [
                /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 700, color: n.textTitle }, children: t("charts.gantt.progress", "Progress") }),
                /* @__PURE__ */ u("span", { style: { fontSize: 13, fontWeight: 800, color: n.group }, children: [
                  ft ?? Math.round(T.progress),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ a(
                "input",
                {
                  type: "range",
                  min: 0,
                  max: 100,
                  step: 1,
                  defaultValue: Math.round(T.progress),
                  onChange: (oe) => rt(Number(oe.target.value)),
                  onMouseUp: (oe) => {
                    const fe = Number(oe.target.value);
                    e.onProgressChange?.(T.id, fe), rt(null), q({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
                  },
                  style: {
                    width: "100%",
                    accentColor: n.group,
                    cursor: "pointer"
                  }
                }
              ),
              /* @__PURE__ */ u("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 9, color: n.textMuted, marginTop: 2 }, children: [
                /* @__PURE__ */ a("span", { children: "0%" }),
                /* @__PURE__ */ a("span", { children: "100%" })
              ] })
            ] }),
            U.length > 0 && /* @__PURE__ */ u("div", { style: { borderTop: `1px solid ${n.borderLight}`, padding: "10px 14px 12px" }, children: [
              /* @__PURE__ */ u("div", { style: { fontSize: 10, fontWeight: 700, color: n.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }, children: [
                t("gantt.popup.relations", "Relations"),
                " (",
                U.length,
                ")"
              ] }),
              /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: U.map((oe) => {
                const fe = oe.predecessorId === T.id, be = fe ? oe.successorName : oe.predecessorName, Te = _ === oe.id;
                return /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderRadius: 8, background: "var(--zg-surface-alt)", border: `1px solid ${n.borderLight}` }, children: [
                  /* @__PURE__ */ u("div", { style: { flex: 1, minWidth: 0 }, children: [
                    /* @__PURE__ */ u("div", { style: { fontSize: 10, fontWeight: 700, color: n.group, marginBottom: 2 }, children: [
                      /* @__PURE__ */ a("span", { style: { background: n.groupSoftStrong, borderRadius: 4, padding: "1px 5px" }, children: oe.type }),
                      " ",
                      /* @__PURE__ */ a("span", { style: { color: n.textSecondary, fontWeight: 500 }, children: fe ? "→ " : "← " }),
                      /* @__PURE__ */ a("span", { style: { color: n.textMuted, fontWeight: 400, fontSize: 9 }, children: G[oe.type] ?? oe.type })
                    ] }),
                    /* @__PURE__ */ a("div", { style: { fontSize: 11, color: n.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: be, children: be })
                  ] }),
                  Ue && /* @__PURE__ */ a(
                    "button",
                    {
                      disabled: !!Te,
                      onClick: async () => {
                        D(oe.id);
                        try {
                          await Ue(oe.id);
                        } finally {
                          D(null);
                        }
                      },
                      style: { flexShrink: 0, padding: "4px 6px", borderRadius: 6, border: "none", background: Te ? n.dangerBgSoft : "transparent", cursor: Te ? "wait" : "pointer", color: n.dangerText, fontSize: 14, opacity: Te ? 0.5 : 1, transition: "background 0.12s" },
                      children: Te ? "⟳" : "🗑"
                    }
                  )
                ] }, oe.id);
              }) })
            ] })
          ]
        }
      );
    })(),
    p && /* @__PURE__ */ u(
      "div",
      {
        "data-menu": "chart-create",
        style: {
          position: "fixed",
          left: Math.min(p.x, window.innerWidth - 220),
          top: Math.min(p.y, window.innerHeight - 220),
          zIndex: 99999,
          background: "var(--zg-surface)",
          borderRadius: 10,
          boxShadow: "var(--zg-shadow-popover)",
          border: `1.5px solid ${n.borderLight}`,
          width: 200,
          overflow: "hidden"
        },
        onClick: (T) => T.stopPropagation(),
        children: [
          /* @__PURE__ */ a("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${n.borderLight}`, background: n.headerBg }, children: /* @__PURE__ */ u("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: n.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" }, children: [
            t("gantt.chart.addOn", "Add on"),
            " ",
            ve(p.date, e.locale)
          ] }) }),
          /* @__PURE__ */ a("div", { style: { padding: "5px 5px" }, children: [
            { label: t("gantt.newAction.step", "Step"), icon: wt("step", 0), action: () => {
              ht?.(p.date, p.projectId), E(null);
            } },
            { label: t("gantt.newAction.milestone", "Milestone"), icon: wt("milestone"), action: () => {
              nt?.(p.date, p.projectId), E(null);
            } },
            { label: t("gantt.newAction.event", "Event"), icon: wt("event"), action: () => {
              pt?.(p.date, p.projectId), E(null);
            } },
            { label: t("gantt.newAction.note", "Note"), icon: wt("note"), action: () => {
              ot?.(p.date, p.projectId), E(null);
            } }
          ].map((T) => /* @__PURE__ */ u(
            "button",
            {
              onClick: T.action,
              className: "zg-popup-btn",
              style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: n.textPrimary, textAlign: "left", transition: "background 0.12s" },
              children: [
                T.icon,
                " ",
                T.label
              ]
            },
            T.label
          )) })
        ]
      }
    ),
    g && /* @__PURE__ */ u("svg", { style: { position: "fixed", inset: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 99999 }, children: [
      /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ a("path", { d: "M0,0 L0,6 L6,3 z", fill: n.group }) }) }),
      /* @__PURE__ */ a("line", { x1: g.fromScreenX, y1: g.fromScreenY, x2: g.currentScreenX, y2: g.currentScreenY, stroke: n.group, strokeWidth: 2.5, strokeDasharray: "8 5", markerEnd: "url(#connect-arrow)", opacity: 0.85, style: { animation: "zg-dash 0.5s linear infinite" } })
    ] }),
    y && /* @__PURE__ */ a("div", { style: { position: "fixed", inset: 0, background: n.overlayMedium, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99998 }, onClick: () => x(null), children: /* @__PURE__ */ u("div", { style: { background: "var(--zg-surface)", borderRadius: 20, padding: "32px 36px", width: 420, boxShadow: "var(--zg-shadow-popover)" }, onClick: (T) => T.stopPropagation(), children: [
      /* @__PURE__ */ u("div", { style: { marginBottom: 20 }, children: [
        /* @__PURE__ */ a("h3", { style: { fontSize: 18, fontWeight: 700, color: n.textTitle, marginBottom: 4 }, children: t("gantt.depModal.title", "Relation Type") }),
        /* @__PURE__ */ a("p", { style: { fontSize: 13, color: n.textSecondary }, children: t("gantt.depModal.subtitle", "Choose how the two tasks relate") })
      ] }),
      /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }, children: [
        { type: "FS", label: t("gantt.depModal.fs", "Finish to Start"), desc: t("gantt.depModal.fsDesc", "B starts when A finishes") },
        { type: "SS", label: t("gantt.depModal.ss", "Start to Start"), desc: t("gantt.depModal.ssDesc", "A and B start together") },
        { type: "FF", label: t("gantt.depModal.ff", "Finish to Finish"), desc: t("gantt.depModal.ffDesc", "A and B finish together") },
        { type: "SF", label: t("gantt.depModal.sf", "Start to Finish"), desc: t("gantt.depModal.sfDesc", "B finishes when A starts") }
      ].map((T) => /* @__PURE__ */ u("button", { onClick: () => w(T.type), style: { border: I === T.type ? `2px solid ${n.group}` : `1.5px solid ${n.borderLight}`, borderRadius: 12, padding: "12px 14px", textAlign: "left", cursor: "pointer", background: I === T.type ? n.groupSoft : "var(--zg-surface-alt)" }, children: [
        /* @__PURE__ */ a("div", { style: { fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: n.group, marginBottom: 4, background: I === T.type ? n.groupSoftStrong : n.groupSoft, borderRadius: 6, padding: "2px 6px", display: "inline-block" }, children: T.type }),
        /* @__PURE__ */ a("div", { style: { fontSize: 13, fontWeight: 600, color: n.textTitle, marginBottom: 2 }, children: T.label }),
        /* @__PURE__ */ a("div", { style: { fontSize: 11, color: n.textSecondary }, children: T.desc })
      ] }, T.type)) }),
      /* @__PURE__ */ u("div", { style: { marginBottom: 24 }, children: [
        /* @__PURE__ */ a("label", { style: { display: "block", fontSize: 13, fontWeight: 600, color: n.textTitle, marginBottom: 6 }, children: t("gantt.depModal.lagLabel", "Lag (days)") }),
        /* @__PURE__ */ a("input", { type: "number", value: O, onChange: (T) => X(parseInt(T.target.value) || 0), style: { width: "100%", padding: "10px 12px", border: `1.5px solid ${n.borderLight}`, borderRadius: 8, fontSize: 14 } })
      ] }),
      /* @__PURE__ */ u("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12 }, children: [
        /* @__PURE__ */ a("button", { onClick: () => x(null), style: { padding: "10px 16px", borderRadius: 8, border: `1px solid ${n.borderLight}`, background: "var(--zg-surface)", cursor: "pointer", fontWeight: 600 }, children: t("gantt.depModal.cancel", "Cancel") }),
        /* @__PURE__ */ a("button", { onClick: ut, disabled: M, style: { padding: "10px 16px", borderRadius: 8, border: "none", background: n.group, color: n.white, cursor: M ? "wait" : "pointer", fontWeight: 600 }, children: M ? t("gantt.depModal.saving", "Saving...") : t("gantt.depModal.create", "Create Dependency") })
      ] })
    ] }) })
  ] });
}
function po(e) {
  const t = he(null), o = he(null), r = he(null), i = he(!1), s = Z(() => {
    if (i.current) return;
    i.current = !0;
    const y = o.current;
    y && t.current && (t.current.scrollTop = y.scrollTop), y && r.current && (r.current.scrollLeft = y.scrollLeft), i.current = !1;
  }, []), l = Z(() => {
    i.current || (i.current = !0, t.current && o.current && (o.current.scrollTop = t.current.scrollTop), i.current = !1);
  }, []), d = he(!1);
  de(() => {
    if (d.current || !e.totalWidth) return;
    const y = o.current;
    if (!y) return;
    const x = Be(/* @__PURE__ */ new Date(), e);
    if (x >= 0 && x <= e.totalWidth) {
      const I = x - y.clientWidth / 2;
      y.scrollLeft = Math.max(0, I), r.current && (r.current.scrollLeft = y.scrollLeft), d.current = !0;
    }
  }, [e]);
  const g = Z((y) => {
    const x = o.current;
    if (x)
      if (y.preventDefault(), y.shiftKey || Math.abs(y.deltaX) > Math.abs(y.deltaY)) {
        const I = y.shiftKey ? y.deltaY : y.deltaX;
        x.scrollLeft += I, r.current && (r.current.scrollLeft = x.scrollLeft);
      } else
        x.scrollTop += y.deltaY, t.current && (t.current.scrollTop = x.scrollTop);
  }, []);
  return {
    leftBodyRef: t,
    rightBodyRef: o,
    timeHeaderRef: r,
    handleRightScroll: s,
    handleLeftScroll: l,
    handleChartWheel: g
  };
}
function fo(e, t, o, r) {
  const i = /* @__PURE__ */ new Map();
  return e.forEach((s) => i.set(s.id, s)), t.map((s) => {
    const l = i.get(s.predecessorId), d = i.get(s.successorId);
    if (!l || !d) return null;
    const g = r.get(l.id), y = r.get(d.id);
    if (g == null || y == null) return null;
    const x = l.originalType !== "step", I = d.originalType !== "step", w = x ? Be(l.start, o) + $t : Be(l.end, o), O = g * ge + ge / 2, X = I ? Be(d.start, o) - 10 : Be(d.start, o), M = y * ge + ge / 2, _ = 14, D = Math.max(w + _, X - _), p = O === M ? `M${w},${O} L${X - 6},${M}` : `M${w},${O} L${D},${O} L${D},${M} L${X - 6},${M}`;
    return { predId: l.id, succId: d.id, path: p, headX: X - 6, headY: M, depType: s.type, lag: s.lag };
  }).filter(Boolean);
}
function mo(e, t, o) {
  if (t === o) return !0;
  const r = /* @__PURE__ */ new Map();
  for (const d of e) {
    const g = r.get(d.predecessorId) || [];
    g.push(d.successorId), r.set(d.predecessorId, g);
  }
  const i = r.get(t) || [];
  i.push(o), r.set(t, i);
  const s = [o], l = /* @__PURE__ */ new Set();
  for (; s.length > 0; ) {
    const d = s.pop();
    if (d === t) return !0;
    if (l.has(d)) continue;
    l.add(d);
    const g = r.get(d) || [];
    for (const y of g)
      l.has(y) || s.push(y);
  }
  return !1;
}
function yo(e, t) {
  if (e.length === 0 || t.length === 0) return /* @__PURE__ */ new Set();
  const o = /* @__PURE__ */ new Map();
  e.forEach((p) => o.set(p.id, p));
  const r = new Set(e.map((p) => p.id)), i = t.filter((p) => r.has(p.predecessorId) && r.has(p.successorId));
  if (i.length === 0) return /* @__PURE__ */ new Set();
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  i.forEach((p) => {
    s.has(p.predecessorId) || s.set(p.predecessorId, []), s.get(p.predecessorId).push(p.successorId), l.has(p.successorId) || l.set(p.successorId, []), l.get(p.successorId).push(p.predecessorId);
  });
  const d = (p) => Math.max(1, Ee(p.start, p.end)), g = /* @__PURE__ */ new Set(), y = [];
  function x(p) {
    g.has(p) || (g.add(p), (s.get(p) || []).forEach(x), y.unshift(p));
  }
  e.forEach((p) => x(p.id));
  const I = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (const p of y) {
    const E = o.get(p), R = l.get(p) || [];
    let k = 0;
    for (const v of R) k = Math.max(k, w.get(v) || 0);
    const B = R.length > 0 ? k : 0;
    I.set(p, B), w.set(p, B + d(E));
  }
  let O = 0;
  w.forEach((p) => {
    p > O && (O = p);
  });
  const X = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
  for (let p = y.length - 1; p >= 0; p--) {
    const E = y[p], R = o.get(E), k = s.get(E) || [];
    let B = O;
    for (const v of k) B = Math.min(B, X.get(v) ?? O);
    M.set(E, k.length > 0 ? B : O), X.set(E, (M.get(E) || 0) - d(R));
  }
  const _ = /* @__PURE__ */ new Set();
  i.forEach((p) => {
    _.add(p.predecessorId), _.add(p.successorId);
  });
  const D = /* @__PURE__ */ new Set();
  for (const p of y) {
    if (!_.has(p)) continue;
    const E = (X.get(p) || 0) - (I.get(p) || 0);
    Math.abs(E) < 0.5 && D.add(p);
  }
  return D;
}
function bo({
  steps: e,
  milestones: t,
  events: o,
  notes: r,
  dependencies: i,
  viewMode: s,
  dayWidth: l,
  locale: d,
  groupByProject: g,
  visibleTypes: y,
  collapsedGroups: x,
  collapsedProjects: I,
  selectedTaskId: w,
  nonWorkingDays: O,
  searchQuery: X
}) {
  const M = ce(() => {
    const m = [], L = /* @__PURE__ */ new Map();
    r?.forEach((f) => {
      let z = f.targetId || f.predecessorId;
      if (!z && i) {
        const K = i.find((ee) => ee.successorId === f.id);
        K && (z = K.predecessorId);
      }
      if (!z) return;
      const $ = L.get(z) || [];
      L.set(z, [...$, f]);
    });
    let b = 0;
    return e.forEach((f) => {
      const z = !!(f.startDate && f.finishDate), $ = f.startDate || f.previsionStartDate, K = f.finishDate || f.previsionFinishDate;
      if (!$ || !K) return;
      const ee = new Date($), q = new Date(K);
      if (isNaN(ee.getTime()) || isNaN(q.getTime())) return;
      q <= ee && q.setDate(q.getDate() + 1);
      let Q, ne;
      if (f.previsionStartDate && f.previsionFinishDate) {
        const se = new Date(f.previsionStartDate), Se = new Date(f.previsionFinishDate);
        !isNaN(se.getTime()) && !isNaN(Se.getTime()) && (Q = se, ne = Se <= se ? ue(se, 1) : Se);
      }
      const re = i?.filter((se) => se.successorId === f.id).map((se) => se.predecessorId) || [], ie = f.conclusionPercent != null ? Number(f.conclusionPercent) : 0;
      m.push({
        id: f.id,
        name: f.name,
        start: ee,
        end: q,
        progress: ie > 1 ? Math.min(ie, 100) : ie * 100,
        originalType: "step",
        deps: re,
        colorIdx: b % we.length,
        barColor: f.barColor,
        progressColor: f.progressColor,
        borderColor: f.borderColor,
        previsionStart: Q,
        previsionEnd: ne,
        hasActualDates: z,
        projectId: f.projectId || void 0,
        projectTitle: f.projectTitle || void 0,
        attachedNotes: L.get(f.id)
      }), b++;
    }), t?.forEach((f) => {
      if (!f.date) return;
      const z = new Date(f.date);
      if (isNaN(z.getTime())) return;
      const $ = i?.filter((K) => K.successorId === f.id).map((K) => K.predecessorId) || [];
      m.push({
        id: f.id,
        name: f.name,
        start: z,
        end: z,
        progress: f.finished ? 100 : 0,
        originalType: "milestone",
        deps: $,
        projectId: f.projectId || void 0,
        projectTitle: f.projectTitle || void 0,
        attachedNotes: L.get(f.id)
      });
    }), o?.forEach((f) => {
      if (!f.date) return;
      const z = new Date(f.date);
      if (isNaN(z.getTime())) return;
      const $ = i?.filter((K) => K.successorId === f.id).map((K) => K.predecessorId) || [];
      m.push({
        id: f.id,
        name: f.title,
        start: z,
        end: z,
        progress: f.finished ? 100 : 0,
        originalType: "event",
        deps: $,
        projectId: f.projectId || void 0,
        projectTitle: f.projectTitle || void 0,
        attachedNotes: L.get(f.id)
      });
    }), m;
  }, [e, t, o, r, i]), _ = ce(() => lo(M, s, d, l), [M, s, d, l]), D = ce(() => {
    const m = [], L = ["step", "milestone", "event"];
    if (g) {
      const b = /* @__PURE__ */ new Map();
      M.forEach((f) => {
        f.projectId && !b.has(f.projectId) && b.set(f.projectId, f.projectTitle || f.projectId);
      });
      for (const [f, z] of Array.from(b.entries())) {
        const $ = I.has(f);
        if (m.push({ kind: "projectHeader", projectId: f, projectTitle: z, collapsed: $ }), !$) {
          const K = M.filter((ee) => ee.projectId === f);
          for (const ee of L) {
            if (!y.has(ee)) continue;
            const q = K.filter((re) => re.originalType === ee);
            if (q.length === 0) continue;
            const Q = `${f}-${ee}`, ne = x.has(Q);
            m.push({ kind: "group", groupType: ee, label: Ut[ee], count: q.length, collapsed: ne, projectId: f }), ne || q.forEach((re) => m.push({ kind: "task", task: re }));
          }
        }
      }
    } else
      for (const b of L) {
        if (!y.has(b)) continue;
        const f = M.filter(($) => $.originalType === b);
        if (f.length === 0) continue;
        const z = x.has(b);
        m.push({ kind: "group", groupType: b, label: Ut[b], count: f.length, collapsed: z }), z || f.forEach(($) => m.push({ kind: "task", task: $ }));
      }
    return m;
  }, [M, y, x, I, g]), p = ce(() => {
    const m = /* @__PURE__ */ new Map();
    return D.forEach((L, b) => {
      L.kind === "task" && m.set(L.task.id, b);
    }), m;
  }, [D]), E = ce(
    () => fo(M, i || [], _, p),
    [M, i, _, p]
  ), R = ce(() => yo(M, i || []), [M, i]), k = ce(() => {
    const m = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Date();
    return M.forEach((b) => {
      b.originalType === "step" && b.end < L && b.progress < 100 && m.add(b.id);
    }), m;
  }, [M]), B = ce(() => {
    if (!w || !i?.length) return /* @__PURE__ */ new Set();
    const m = /* @__PURE__ */ new Set(), L = [w];
    for (; L.length; ) {
      const b = L.shift();
      for (const f of i)
        f.predecessorId === b && !m.has(f.successorId) && (m.add(f.successorId), L.push(f.successorId)), f.successorId === b && !m.has(f.predecessorId) && (m.add(f.predecessorId), L.push(f.predecessorId));
    }
    return m;
  }, [w, i]), v = ce(() => {
    const m = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
    for (const f of M) {
      if (f.originalType !== "step") continue;
      const z = m.get("step") || { sum: 0, count: 0 };
      if (z.sum += f.progress, z.count += 1, m.set("step", z), f.projectId) {
        const $ = L.get(f.projectId) || { sum: 0, count: 0 };
        $.sum += f.progress, $.count += 1, L.set(f.projectId, $);
      }
    }
    const b = (f) => f && f.count > 0 ? Math.round(f.sum / f.count) : null;
    return {
      byType: new Map([...m.entries()].map(([f, z]) => [f, b(z)])),
      byProject: new Map([...L.entries()].map(([f, z]) => [f, b(z)]))
    };
  }, [M]), C = ce(() => {
    const m = /* @__PURE__ */ new Set();
    for (const L of O ?? []) {
      const b = L.date instanceof Date ? L.date : new Date(L.date);
      isNaN(b.getTime()) || m.add(`${b.getFullYear()}-${b.getMonth()}-${b.getDate()}`);
    }
    return m;
  }, [O]), W = ce(() => {
    const m = (X || "").toLowerCase().trim();
    return m ? D.filter((L) => L.kind !== "task" ? !0 : L.task.name.toLowerCase().includes(m)) : D;
  }, [D, X]);
  return {
    tasks: M,
    timeline: _,
    displayRows: W,
    taskRowIndex: p,
    arrows: E,
    criticalIds: R,
    delayedIds: k,
    relatedIds: B,
    groupProgress: v,
    nonWorkingDaySet: C
  };
}
function xo(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const o = document.implementation.createHTMLDocument(), r = o.createElement("base"), i = o.createElement("a");
  return o.head.appendChild(r), o.body.appendChild(i), t && (r.href = t), i.href = e, i.href;
}
const vo = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function $e(e) {
  const t = [];
  for (let o = 0, r = e.length; o < r; o++)
    t.push(e[o]);
  return t;
}
let qe = null;
function wn(e = {}) {
  return qe || (e.includeStyleProperties ? (qe = e.includeStyleProperties, qe) : (qe = $e(window.getComputedStyle(document.documentElement)), qe));
}
function It(e, t) {
  const r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function wo(e) {
  const t = It(e, "border-left-width"), o = It(e, "border-right-width");
  return e.clientWidth + t + o;
}
function So(e) {
  const t = It(e, "border-top-width"), o = It(e, "border-bottom-width");
  return e.clientHeight + t + o;
}
function Sn(e, t = {}) {
  const o = t.width || wo(e), r = t.height || So(e);
  return { width: o, height: r };
}
function ko() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const o = t && t.env ? t.env.devicePixelRatio : null;
  return o && (e = parseInt(o, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const xe = 16384;
function zo(e) {
  (e.width > xe || e.height > xe) && (e.width > xe && e.height > xe ? e.width > e.height ? (e.height *= xe / e.width, e.width = xe) : (e.width *= xe / e.height, e.height = xe) : e.width > xe ? (e.height *= xe / e.width, e.width = xe) : (e.width *= xe / e.height, e.height = xe));
}
function Tt(e) {
  return new Promise((t, o) => {
    const r = new Image();
    r.onload = () => {
      r.decode().then(() => {
        requestAnimationFrame(() => t(r));
      });
    }, r.onerror = o, r.crossOrigin = "anonymous", r.decoding = "async", r.src = e;
  });
}
async function Io(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function To(e, t, o) {
  const r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg"), s = document.createElementNS(r, "foreignObject");
  return i.setAttribute("width", `${t}`), i.setAttribute("height", `${o}`), i.setAttribute("viewBox", `0 0 ${t} ${o}`), s.setAttribute("width", "100%"), s.setAttribute("height", "100%"), s.setAttribute("x", "0"), s.setAttribute("y", "0"), s.setAttribute("externalResourcesRequired", "true"), i.appendChild(s), s.appendChild(e), Io(i);
}
const me = (e, t) => {
  if (e instanceof t)
    return !0;
  const o = Object.getPrototypeOf(e);
  return o === null ? !1 : o.constructor.name === t.name || me(o, t);
};
function Eo(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function Mo(e, t) {
  return wn(t).map((o) => {
    const r = e.getPropertyValue(o), i = e.getPropertyPriority(o);
    return `${o}: ${r}${i ? " !important" : ""};`;
  }).join(" ");
}
function Ro(e, t, o, r) {
  const i = `.${e}:${t}`, s = o.cssText ? Eo(o) : Mo(o, r);
  return document.createTextNode(`${i}{${s}}`);
}
function en(e, t, o, r) {
  const i = window.getComputedStyle(e, o), s = i.getPropertyValue("content");
  if (s === "" || s === "none")
    return;
  const l = vo();
  try {
    t.className = `${t.className} ${l}`;
  } catch {
    return;
  }
  const d = document.createElement("style");
  d.appendChild(Ro(l, o, i, r)), t.appendChild(d);
}
function Do(e, t, o) {
  en(e, t, ":before", o), en(e, t, ":after", o);
}
const tn = "application/font-woff", nn = "image/jpeg", Co = {
  woff: tn,
  woff2: tn,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: nn,
  jpeg: nn,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Ao(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function Nt(e) {
  const t = Ao(e).toLowerCase();
  return Co[t] || "";
}
function Lo(e) {
  return e.split(/,/)[1];
}
function Ot(e) {
  return e.search(/^(data:)/) !== -1;
}
function Bo(e, t) {
  return `data:${t};base64,${e}`;
}
async function kn(e, t, o) {
  const r = await fetch(e, t);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const i = await r.blob();
  return new Promise((s, l) => {
    const d = new FileReader();
    d.onerror = l, d.onloadend = () => {
      try {
        s(o({ res: r, result: d.result }));
      } catch (g) {
        l(g);
      }
    }, d.readAsDataURL(i);
  });
}
const Lt = {};
function Fo(e, t, o) {
  let r = e.replace(/\?.*/, "");
  return o && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r;
}
async function Yt(e, t, o) {
  const r = Fo(e, t, o.includeQueryParams);
  if (Lt[r] != null)
    return Lt[r];
  o.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i;
  try {
    const s = await kn(e, o.fetchRequestInit, ({ res: l, result: d }) => (t || (t = l.headers.get("Content-Type") || ""), Lo(d)));
    i = Bo(s, t);
  } catch (s) {
    i = o.imagePlaceholder || "";
    let l = `Failed to fetch resource: ${e}`;
    s && (l = typeof s == "string" ? s : s.message), l && console.warn(l);
  }
  return Lt[r] = i, i;
}
async function Wo(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : Tt(t);
}
async function $o(e, t) {
  if (e.currentSrc) {
    const s = document.createElement("canvas"), l = s.getContext("2d");
    s.width = e.clientWidth, s.height = e.clientHeight, l?.drawImage(e, 0, 0, s.width, s.height);
    const d = s.toDataURL();
    return Tt(d);
  }
  const o = e.poster, r = Nt(o), i = await Yt(o, r, t);
  return Tt(i);
}
async function Po(e, t) {
  var o;
  try {
    if (!((o = e?.contentDocument) === null || o === void 0) && o.body)
      return await Et(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function Oo(e, t) {
  return me(e, HTMLCanvasElement) ? Wo(e) : me(e, HTMLVideoElement) ? $o(e, t) : me(e, HTMLIFrameElement) ? Po(e, t) : e.cloneNode(zn(e));
}
const jo = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", zn = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function No(e, t, o) {
  var r, i;
  if (zn(t))
    return t;
  let s = [];
  return jo(e) && e.assignedNodes ? s = $e(e.assignedNodes()) : me(e, HTMLIFrameElement) && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? s = $e(e.contentDocument.body.childNodes) : s = $e(((i = e.shadowRoot) !== null && i !== void 0 ? i : e).childNodes), s.length === 0 || me(e, HTMLVideoElement) || await s.reduce((l, d) => l.then(() => Et(d, o)).then((g) => {
    g && t.appendChild(g);
  }), Promise.resolve()), t;
}
function Yo(e, t, o) {
  const r = t.style;
  if (!r)
    return;
  const i = window.getComputedStyle(e);
  i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : wn(o).forEach((s) => {
    let l = i.getPropertyValue(s);
    s === "font-size" && l.endsWith("px") && (l = `${Math.floor(parseFloat(l.substring(0, l.length - 2))) - 0.1}px`), me(e, HTMLIFrameElement) && s === "display" && l === "inline" && (l = "block"), s === "d" && t.getAttribute("d") && (l = `path(${t.getAttribute("d")})`), r.setProperty(s, l, i.getPropertyPriority(s));
  });
}
function Xo(e, t) {
  me(e, HTMLTextAreaElement) && (t.innerHTML = e.value), me(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function _o(e, t) {
  if (me(e, HTMLSelectElement)) {
    const r = Array.from(t.children).find((i) => e.value === i.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function Ho(e, t, o) {
  return me(t, Element) && (Yo(e, t, o), Do(e, t, o), Xo(e, t), _o(e, t)), t;
}
async function Uo(e, t) {
  const o = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (o.length === 0)
    return e;
  const r = {};
  for (let s = 0; s < o.length; s++) {
    const d = o[s].getAttribute("xlink:href");
    if (d) {
      const g = e.querySelector(d), y = document.querySelector(d);
      !g && y && !r[d] && (r[d] = await Et(y, t, !0));
    }
  }
  const i = Object.values(r);
  if (i.length) {
    const s = "http://www.w3.org/1999/xhtml", l = document.createElementNS(s, "svg");
    l.setAttribute("xmlns", s), l.style.position = "absolute", l.style.width = "0", l.style.height = "0", l.style.overflow = "hidden", l.style.display = "none";
    const d = document.createElementNS(s, "defs");
    l.appendChild(d);
    for (let g = 0; g < i.length; g++)
      d.appendChild(i[g]);
    e.appendChild(l);
  }
  return e;
}
async function Et(e, t, o) {
  return !o && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((r) => Oo(r, t)).then((r) => No(e, r, t)).then((r) => Ho(e, r, t)).then((r) => Uo(r, t));
}
const In = /url\((['"]?)([^'"]+?)\1\)/g, Vo = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Go = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Ko(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function qo(e) {
  const t = [];
  return e.replace(In, (o, r, i) => (t.push(i), o)), t.filter((o) => !Ot(o));
}
async function Zo(e, t, o, r, i) {
  try {
    const s = o ? xo(t, o) : t, l = Nt(t);
    let d;
    return i || (d = await Yt(s, l, r)), e.replace(Ko(t), `$1${d}$3`);
  } catch {
  }
  return e;
}
function Qo(e, { preferredFontFormat: t }) {
  return t ? e.replace(Go, (o) => {
    for (; ; ) {
      const [r, , i] = Vo.exec(o) || [];
      if (!i)
        return "";
      if (i === t)
        return `src: ${r};`;
    }
  }) : e;
}
function Tn(e) {
  return e.search(In) !== -1;
}
async function En(e, t, o) {
  if (!Tn(e))
    return e;
  const r = Qo(e, o);
  return qo(r).reduce((s, l) => s.then((d) => Zo(d, l, t, o)), Promise.resolve(r));
}
async function Ze(e, t, o) {
  var r;
  const i = (r = t.style) === null || r === void 0 ? void 0 : r.getPropertyValue(e);
  if (i) {
    const s = await En(i, null, o);
    return t.style.setProperty(e, s, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function Jo(e, t) {
  await Ze("background", e, t) || await Ze("background-image", e, t), await Ze("mask", e, t) || await Ze("-webkit-mask", e, t) || await Ze("mask-image", e, t) || await Ze("-webkit-mask-image", e, t);
}
async function er(e, t) {
  const o = me(e, HTMLImageElement);
  if (!(o && !Ot(e.src)) && !(me(e, SVGImageElement) && !Ot(e.href.baseVal)))
    return;
  const r = o ? e.src : e.href.baseVal, i = await Yt(r, Nt(r), t);
  await new Promise((s, l) => {
    e.onload = s, e.onerror = t.onImageErrorHandler ? (...g) => {
      try {
        s(t.onImageErrorHandler(...g));
      } catch (y) {
        l(y);
      }
    } : l;
    const d = e;
    d.decode && (d.decode = s), d.loading === "lazy" && (d.loading = "eager"), o ? (e.srcset = "", e.src = i) : e.href.baseVal = i;
  });
}
async function tr(e, t) {
  const r = $e(e.childNodes).map((i) => Mn(i, t));
  await Promise.all(r).then(() => e);
}
async function Mn(e, t) {
  me(e, Element) && (await Jo(e, t), await er(e, t), await tr(e, t));
}
function nr(e, t) {
  const { style: o } = e;
  t.backgroundColor && (o.backgroundColor = t.backgroundColor), t.width && (o.width = `${t.width}px`), t.height && (o.height = `${t.height}px`);
  const r = t.style;
  return r != null && Object.keys(r).forEach((i) => {
    o[i] = r[i];
  }), e;
}
const on = {};
async function rn(e) {
  let t = on[e];
  if (t != null)
    return t;
  const r = await (await fetch(e)).text();
  return t = { url: e, cssText: r }, on[e] = t, t;
}
async function sn(e, t) {
  let o = e.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, s = (o.match(/url\([^)]+\)/g) || []).map(async (l) => {
    let d = l.replace(r, "$1");
    return d.startsWith("https://") || (d = new URL(d, e.url).href), kn(d, t.fetchRequestInit, ({ result: g }) => (o = o.replace(l, `url(${g})`), [l, g]));
  });
  return Promise.all(s).then(() => o);
}
function an(e) {
  if (e == null)
    return [];
  const t = [], o = /(\/\*[\s\S]*?\*\/)/gi;
  let r = e.replace(o, "");
  const i = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const g = i.exec(r);
    if (g === null)
      break;
    t.push(g[0]);
  }
  r = r.replace(i, "");
  const s = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, l = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", d = new RegExp(l, "gi");
  for (; ; ) {
    let g = s.exec(r);
    if (g === null) {
      if (g = d.exec(r), g === null)
        break;
      s.lastIndex = d.lastIndex;
    } else
      d.lastIndex = s.lastIndex;
    t.push(g[0]);
  }
  return t;
}
async function or(e, t) {
  const o = [], r = [];
  return e.forEach((i) => {
    if ("cssRules" in i)
      try {
        $e(i.cssRules || []).forEach((s, l) => {
          if (s.type === CSSRule.IMPORT_RULE) {
            let d = l + 1;
            const g = s.href, y = rn(g).then((x) => sn(x, t)).then((x) => an(x).forEach((I) => {
              try {
                i.insertRule(I, I.startsWith("@import") ? d += 1 : i.cssRules.length);
              } catch (w) {
                console.error("Error inserting rule from remote css", {
                  rule: I,
                  error: w
                });
              }
            })).catch((x) => {
              console.error("Error loading remote css", x.toString());
            });
            r.push(y);
          }
        });
      } catch (s) {
        const l = e.find((d) => d.href == null) || document.styleSheets[0];
        i.href != null && r.push(rn(i.href).then((d) => sn(d, t)).then((d) => an(d).forEach((g) => {
          l.insertRule(g, l.cssRules.length);
        })).catch((d) => {
          console.error("Error loading remote stylesheet", d);
        })), console.error("Error inlining remote css file", s);
      }
  }), Promise.all(r).then(() => (e.forEach((i) => {
    if ("cssRules" in i)
      try {
        $e(i.cssRules || []).forEach((s) => {
          o.push(s);
        });
      } catch (s) {
        console.error(`Error while reading CSS rules from ${i.href}`, s);
      }
  }), o));
}
function rr(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => Tn(t.style.getPropertyValue("src")));
}
async function ir(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const o = $e(e.ownerDocument.styleSheets), r = await or(o, t);
  return rr(r);
}
function Rn(e) {
  return e.trim().replace(/["']/g, "");
}
function sr(e) {
  const t = /* @__PURE__ */ new Set();
  function o(r) {
    (r.style.fontFamily || getComputedStyle(r).fontFamily).split(",").forEach((s) => {
      t.add(Rn(s));
    }), Array.from(r.children).forEach((s) => {
      s instanceof HTMLElement && o(s);
    });
  }
  return o(e), t;
}
async function ar(e, t) {
  const o = await ir(e, t), r = sr(e);
  return (await Promise.all(o.filter((s) => r.has(Rn(s.style.fontFamily))).map((s) => {
    const l = s.parentStyleSheet ? s.parentStyleSheet.href : null;
    return En(s.cssText, l, t);
  }))).join(`
`);
}
async function lr(e, t) {
  const o = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await ar(e, t);
  if (o) {
    const r = document.createElement("style"), i = document.createTextNode(o);
    r.appendChild(i), e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r);
  }
}
async function dr(e, t = {}) {
  const { width: o, height: r } = Sn(e, t), i = await Et(e, t, !0);
  return await lr(i, t), await Mn(i, t), nr(i, t), await To(i, o, r);
}
async function cr(e, t = {}) {
  const { width: o, height: r } = Sn(e, t), i = await dr(e, t), s = await Tt(i), l = document.createElement("canvas"), d = l.getContext("2d"), g = t.pixelRatio || ko(), y = t.canvasWidth || o, x = t.canvasHeight || r;
  return l.width = y * g, l.height = x * g, t.skipAutoScale || zo(l), l.style.width = `${y}`, l.style.height = `${x}`, t.backgroundColor && (d.fillStyle = t.backgroundColor, d.fillRect(0, 0, l.width, l.height)), d.drawImage(s, 0, 0, l.width, l.height), l;
}
async function ur(e, t = {}) {
  return (await cr(e, t)).toDataURL();
}
function gr() {
  const e = he(null), t = Z(async (o = {}) => {
    const r = e.current;
    if (!r) return;
    const { filename: i = "gantt-chart", scale: s = 2 } = o, l = r.querySelectorAll(".zg-header-controls, [data-popup], [data-menu]");
    l.forEach((d) => {
      d.dataset.exportHidden = d.style.visibility, d.style.visibility = "hidden";
    });
    try {
      const d = await ur(r, { pixelRatio: s, cacheBust: !0 }), g = document.createElement("a");
      g.download = `${i}.png`, g.href = d, g.click();
    } finally {
      l.forEach((d) => {
        d.style.visibility = d.dataset.exportHidden ?? "", delete d.dataset.exportHidden;
      });
    }
  }, []);
  return { exportRef: e, exportPng: t };
}
const hr = 20;
function pr(e) {
  const [t, o] = V(!1), [r, i] = V(!1), s = he([]), l = he([]), d = Z(() => {
    o(s.current.length > 0), i(l.current.length > 0);
  }, []), g = Z((w) => {
    s.current.push(w), s.current.length > hr && s.current.shift(), l.current = [], d();
  }, [d]), y = Z(() => {
    const w = s.current.pop();
    w && (l.current.push(w), e?.(w.taskId, w.prevStart, w.prevEnd), d());
  }, [e, d]), x = Z(() => {
    const w = l.current.pop();
    w && (s.current.push(w), e?.(w.taskId, w.nextStart, w.nextEnd), d());
  }, [e, d]), I = Z(() => {
    s.current = [], l.current = [], d();
  }, [d]);
  return { push: g, undo: y, redo: x, clear: I, canUndo: t, canRedo: r };
}
const St = 260, kt = 170, Re = 20;
function fr() {
  const { props: e, activePinboardTask: t, setActivePinboardTask: o, t: r } = Pe(), i = !!t, s = he(null), [l, d] = V({}), [g, y] = V(null), x = () => o(null), I = t?.id || null, w = t?.attachedNotes || [], O = ce(() => I ? l[I] || {} : {}, [I, l]), X = Z((D, p) => {
    d((E) => {
      const R = E[D] || {};
      if (Object.keys(R).length >= p) return E;
      const k = { ...R };
      return { ...E, [D]: k };
    });
  }, []), M = Z(() => {
    if (!t) return;
    const { id: D } = t, p = {};
    w.forEach((E, R) => {
      const k = R % 4, B = Math.floor(R / 4), v = Re + k * (St + 18), C = Re + B * (kt + 18), W = (R % 5 - 2) * 0.8;
      p[E.id] = { x: v, y: C, z: R + 1, rotate: W };
    }), d((E) => ({ ...E, [D]: p }));
  }, [t, w]);
  de(() => {
    t && (X(t.id, w.length), (!l[t.id] || Object.keys(l[t.id]).length === 0) && M());
  }, [t, X, l, w.length, M]), de(() => {
    if (!i) return;
    const D = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = D;
    };
  }, [i]), de(() => {
    if (!g || !I) return;
    const D = (E) => {
      if (E.pointerId !== g.pointerId) return;
      const R = s.current;
      if (!R) return;
      const k = R.getBoundingClientRect(), B = Math.max(Re, k.width - St - Re), v = Math.max(Re, k.height - kt - Re), C = Math.max(Re, Math.min(B, E.clientX - k.left - g.offsetX)), W = Math.max(Re, Math.min(v, E.clientY - k.top - g.offsetY));
      d((m) => {
        const L = m[I] || {}, b = L[g.noteId];
        return b ? {
          ...m,
          [I]: {
            ...L,
            [g.noteId]: { ...b, x: C, y: W }
          }
        } : m;
      });
    }, p = (E) => {
      E.pointerId === g.pointerId && y(null);
    };
    return document.addEventListener("pointermove", D), document.addEventListener("pointerup", p), document.addEventListener("pointercancel", p), () => {
      document.removeEventListener("pointermove", D), document.removeEventListener("pointerup", p), document.removeEventListener("pointercancel", p);
    };
  }, [I, g]);
  const _ = Z((D, p) => {
    if (!I) return;
    const E = s.current;
    if (!E) return;
    const R = l[I]?.[p];
    if (!R) return;
    const k = Object.values(l[I] || {}).reduce((v, C) => Math.max(v, C.z), 0);
    d((v) => {
      const C = v[I] || {}, W = C[p];
      return W ? {
        ...v,
        [I]: {
          ...C,
          [p]: { ...W, z: k + 1 }
        }
      } : v;
    });
    const B = E.getBoundingClientRect();
    y({
      pointerId: D.pointerId,
      taskId: I,
      noteId: p,
      offsetX: D.clientX - B.left - R.x,
      offsetY: D.clientY - B.top - R.y
    });
  }, [I, l]);
  return /* @__PURE__ */ u(Me, { children: [
    i && /* @__PURE__ */ a(
      "div",
      {
        onClick: x,
        style: {
          position: "fixed",
          inset: 0,
          backgroundColor: n.overlaySoft,
          zIndex: 999,
          transition: "opacity 0.3s ease"
        }
      }
    ),
    i && /* @__PURE__ */ u(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": r("pinboard.modalTitle", "Pinboard"),
        style: {
          position: "fixed",
          inset: 14,
          backgroundColor: n.surface,
          border: `1px solid ${n.border}`,
          borderRadius: 18,
          boxShadow: "var(--zg-shadow-panel)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          zIndex: 1e3
        },
        children: [
          /* @__PURE__ */ u("div", { style: {
            padding: "16px 18px",
            backgroundColor: n.headerBg,
            borderBottom: `1px solid ${n.borderLight}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }, children: [
              /* @__PURE__ */ a("span", { style: {
                fontSize: 10,
                fontWeight: 700,
                backgroundColor: n.milestoneRing,
                color: n.group,
                padding: "3px 8px",
                borderRadius: 999,
                letterSpacing: "0.06em",
                textTransform: "uppercase"
              }, children: t?.originalType || "" }),
              /* @__PURE__ */ a("h2", { style: { margin: 0, fontSize: 18, fontWeight: 700, color: n.textTitle }, children: t?.name || "" }),
              /* @__PURE__ */ u("span", { style: { fontSize: 12, color: n.textSecondary, display: "flex", alignItems: "center", gap: 4 }, children: [
                /* @__PURE__ */ a(Wt, { size: 12 }),
                t && ve(t.start, e.locale),
                t?.originalType === "step" && ` - ${ve(t.end, e.locale)}`
              ] })
            ] }),
            /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ u(
                "button",
                {
                  onClick: M,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: n.surface,
                    border: `1px solid ${n.border}`,
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    color: n.textPrimary,
                    padding: "8px 10px",
                    cursor: "pointer"
                  },
                  children: [
                    /* @__PURE__ */ a(Nn, { size: 14 }),
                    r("pinboard.reset", "Reset layout")
                  ]
                }
              ),
              /* @__PURE__ */ a(
                "button",
                {
                  onClick: x,
                  style: {
                    background: n.surface,
                    border: `1px solid ${n.border}`,
                    borderRadius: 8,
                    cursor: "pointer",
                    width: 34,
                    height: 34,
                    display: "grid",
                    placeItems: "center"
                  },
                  children: /* @__PURE__ */ a(jt, { size: 18 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u(
            "div",
            {
              ref: s,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden",
                background: n.surface,
                cursor: g ? "grabbing" : "default"
              },
              children: [
                /* @__PURE__ */ a("p", { style: { margin: 0, position: "absolute", left: 20, top: 14, fontSize: 12, color: n.textSecondary }, children: r("pinboard.dragHint", "Drag the notes to organize your board freely.") }),
                w.map((D, p) => {
                  const E = {
                    x: Re + p % 4 * (St + 18),
                    y: Re + Math.floor(p / 4) * (kt + 18),
                    z: p + 1,
                    rotate: (p % 5 - 2) * 0.8
                  }, R = O[D.id] || E, k = g?.noteId === D.id;
                  return /* @__PURE__ */ u(
                    "div",
                    {
                      onPointerDown: (B) => _(B, D.id),
                      style: {
                        position: "absolute",
                        left: R.x,
                        top: R.y,
                        width: St,
                        minHeight: kt,
                        padding: "18px 14px 14px",
                        borderRadius: 6,
                        border: `1px solid ${n.groupSoftStrong}`,
                        background: D.color || n.note,
                        boxShadow: k ? n.shadowStickyHover : n.shadowSticky,
                        transform: `rotate(${R.rotate}deg)`,
                        userSelect: "none",
                        touchAction: "none",
                        cursor: k ? "grabbing" : "grab",
                        zIndex: R.z,
                        transition: k ? "none" : "box-shadow 0.2s ease"
                      },
                      children: [
                        /* @__PURE__ */ a("div", { style: {
                          position: "absolute",
                          top: -6,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 40,
                          height: 10,
                          background: n.stickyTape,
                          borderRadius: 2,
                          boxShadow: n.shadowTiny
                        } }),
                        /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 8 }, children: [
                          /* @__PURE__ */ a("h3", { style: { margin: 0, fontSize: 14, fontWeight: 700, color: n.inkSoft, lineHeight: 1.3 }, children: D.title }),
                          /* @__PURE__ */ a("span", { style: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, color: n.inkSoft4 }, children: r("pinboard.noteBadge", "NOTA") })
                        ] }),
                        /* @__PURE__ */ a("p", { style: { margin: 0, fontSize: 12, lineHeight: 1.5, color: n.inkSoft2, whiteSpace: "pre-wrap" }, children: D.description || "" }),
                        D.author && /* @__PURE__ */ u("div", { style: { marginTop: 12, fontSize: 11, fontWeight: 600, color: n.inkSoft4, textAlign: "right" }, children: [
                          "- ",
                          D.author
                        ] })
                      ]
                    },
                    D.id
                  );
                }),
                w.length === 0 && /* @__PURE__ */ u("div", { style: {
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: n.textMuted,
                  textAlign: "center",
                  gap: 12,
                  opacity: 0.7
                }, children: [
                  /* @__PURE__ */ a("div", { style: { width: 60, height: 60, borderRadius: "50%", background: n.headerBg, display: "grid", placeItems: "center" }, children: /* @__PURE__ */ a(Bt, { size: 30 }) }),
                  /* @__PURE__ */ a("p", { style: { margin: 0, fontSize: 14 }, children: r("pinboard.empty", "Nenhuma nota vinculada") })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ a("div", { style: { padding: "14px 18px", borderTop: `1px solid ${n.borderLight}`, background: n.surface }, children: /* @__PURE__ */ u(
            "button",
            {
              onClick: () => {
                t && e.onAddNote?.(t.start, t.projectId);
              },
              style: {
                width: "100%",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                backgroundColor: n.group,
                color: n.white,
                border: "none",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer"
              },
              children: [
                /* @__PURE__ */ a(Bt, { size: 18 }),
                " ",
                r("pinboard.newBtn", "Nova Nota nesta Etapa")
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function mr() {
  const { props: e, selectedTaskIds: t, setSelectedTaskIds: o, t: r } = Pe(), [i, s] = V(null), [l, d] = V(!1), [g, y] = V(!1);
  if (t.size < 2) return null;
  const x = t.size, I = [...t], w = async () => {
    if (e.onBulkDelete) {
      d(!0);
      try {
        await e.onBulkDelete(I), o(/* @__PURE__ */ new Set());
      } finally {
        d(!1);
      }
    }
  }, O = async () => {
    if (!(!e.onBulkProgressChange || i === null)) {
      y(!0);
      try {
        await e.onBulkProgressChange(I, i), s(null), o(/* @__PURE__ */ new Set());
      } finally {
        y(!1);
      }
    }
  };
  return /* @__PURE__ */ u("div", { style: {
    position: "sticky",
    bottom: 0,
    zIndex: 50,
    background: n.group,
    color: n.white,
    padding: "10px 18px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
    boxShadow: "0 -4px 16px rgba(0,0,0,0.15)"
  }, children: [
    /* @__PURE__ */ u("span", { style: { fontSize: 13, fontWeight: 700 }, children: [
      x,
      " ",
      r("gantt.bulk.selected", "selecionadas")
    ] }),
    /* @__PURE__ */ a(
      "button",
      {
        onClick: () => o(/* @__PURE__ */ new Set()),
        style: {
          background: "rgba(255,255,255,0.15)",
          border: "none",
          color: n.white,
          padding: "6px 12px",
          borderRadius: 6,
          fontSize: 12,
          fontWeight: 600,
          cursor: "pointer"
        },
        children: r("gantt.bulk.clear", "Limpar seleção")
      }
    ),
    e.onBulkProgressChange && /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ a(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          step: 1,
          value: i ?? 0,
          onChange: (X) => s(Number(X.target.value)),
          style: { width: 80, accentColor: "#fff" }
        }
      ),
      /* @__PURE__ */ u("span", { style: { fontSize: 12, minWidth: 30 }, children: [
        i ?? "—",
        "%"
      ] }),
      /* @__PURE__ */ a(
        "button",
        {
          onClick: O,
          disabled: i === null || g,
          style: {
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: n.white,
            padding: "6px 12px",
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
            cursor: i !== null ? "pointer" : "default",
            opacity: i !== null ? 1 : 0.5
          },
          children: g ? "..." : r("gantt.bulk.applyProgress", "Aplicar %")
        }
      )
    ] }),
    e.onBulkDelete && /* @__PURE__ */ a(
      "button",
      {
        onClick: w,
        disabled: l,
        style: {
          marginLeft: "auto",
          background: "rgba(239,68,68,0.8)",
          border: "none",
          color: "#fff",
          padding: "6px 14px",
          borderRadius: 6,
          fontSize: 12,
          fontWeight: 700,
          cursor: l ? "wait" : "pointer"
        },
        children: l ? "..." : r("gantt.bulk.delete", "Deletar selecionadas")
      }
    )
  ] });
}
const Rr = {
  // GanttHeader
  "planning.gantt": "PLANEJAMENTO DA OBRA",
  "charts.gantt.month": "Mês",
  "charts.gantt.year": "Ano",
  "charts.gantt.stepName": "NOME DA ETAPA",
  "charts.gantt.start": "INÍCIO",
  "charts.gantt.end": "FIM",
  "charts.gantt.newAction": "Nova Ação",
  "charts.gantt.progress": "Progresso",
  "gantt.filter.steps": "Etapas",
  "gantt.filter.milestones": "Marcos",
  "gantt.filter.events": "Eventos",
  "gantt.filter.notes": "Notas",
  "gantt.newAction.step": "Etapa",
  "gantt.newAction.milestone": "Marco",
  "gantt.newAction.event": "Evento",
  "gantt.newAction.note": "Nota",
  // GanttGrid group labels
  "gantt.group.step": "Etapas",
  "gantt.group.milestone": "Marcos",
  "gantt.group.event": "Eventos",
  "gantt.group.note": "Notas",
  // GanttChart tooltips
  "gantt.tooltip.planned": "Previsto",
  "gantt.tooltip.actual": "Real",
  "gantt.tooltip.plannedInUse": "Previsto (em uso)",
  "gantt.tooltip.start": "Início",
  "gantt.tooltip.end": "Fim",
  "gantt.tooltip.duration": "Duração",
  "gantt.tooltip.progress": "Progresso",
  "gantt.tooltip.date": "Data",
  "gantt.tooltip.attachments": "Anexos",
  // GanttChart popup actions
  "gantt.popup.viewDetails": "Ver detalhes",
  "gantt.popup.edit": "Editar",
  "gantt.popup.delete": "Excluir",
  "gantt.popup.relations": "Relações",
  "gantt.chart.addOn": "Adicionar em",
  // GanttChart dependency type labels (popup)
  "gantt.depType.fs": "Início após Fim",
  "gantt.depType.ss": "Inícios simultâneos",
  "gantt.depType.ff": "Fins simultâneos",
  "gantt.depType.sf": "Fim após Início",
  // Dependency modal
  "gantt.depModal.title": "Tipo de Relação",
  "gantt.depModal.subtitle": "Escolha como as duas tarefas se relacionam",
  "gantt.depModal.fs": "Início após Fim",
  "gantt.depModal.fsDesc": "B começa quando A termina",
  "gantt.depModal.ss": "Inícios simultâneos",
  "gantt.depModal.ssDesc": "A e B começam juntos",
  "gantt.depModal.ff": "Fins simultâneos",
  "gantt.depModal.ffDesc": "A e B terminam juntos",
  "gantt.depModal.sf": "Fim após Início",
  "gantt.depModal.sfDesc": "B termina quando A começa",
  "gantt.depModal.lagLabel": "Atraso (Lag) em dias",
  "gantt.depModal.cancel": "Cancelar",
  "gantt.depModal.create": "Criar Dependência",
  "gantt.depModal.saving": "Salvando...",
  // NoteModal
  "noteModal.titlePlaceholder": "Título da nota...",
  "noteModal.contentPlaceholder": "Escreva sua nota aqui...",
  "noteModal.attachFiles": "Anexar arquivos",
  "noteModal.removeFile": "Remover",
  "noteModal.dependency": "Dependência",
  "noteModal.none": "Nenhuma",
  "noteModal.milestones": "Marcos",
  "noteModal.cancel": "Cancelar",
  "noteModal.create": "Criar Nota",
  "noteModal.errorEmpty": "Informe o título ou conteúdo da nota.",
  "noteModal.errorSave": "Erro ao criar nota.",
  "noteModal.untitled": "Sem título"
}, yr = {
  // GanttHeader
  "planning.gantt": "PROJECT PLANNING",
  "charts.gantt.month": "Month",
  "charts.gantt.year": "Year",
  "charts.gantt.stepName": "STEP NAME",
  "charts.gantt.start": "START",
  "charts.gantt.end": "END",
  "charts.gantt.newAction": "New Action",
  "charts.gantt.progress": "Progress",
  "gantt.filter.steps": "Steps",
  "gantt.filter.milestones": "Milestones",
  "gantt.filter.events": "Events",
  "gantt.filter.notes": "Notes",
  "gantt.newAction.step": "Step",
  "gantt.newAction.milestone": "Milestone",
  "gantt.newAction.event": "Event",
  "gantt.newAction.note": "Note",
  // GanttGrid group labels
  "gantt.group.step": "Steps",
  "gantt.group.milestone": "Milestones",
  "gantt.group.event": "Events",
  "gantt.group.note": "Notes",
  // GanttChart tooltips
  "gantt.tooltip.planned": "Planned",
  "gantt.tooltip.actual": "Actual",
  "gantt.tooltip.plannedInUse": "Planned (in use)",
  "gantt.tooltip.start": "Start",
  "gantt.tooltip.end": "End",
  "gantt.tooltip.duration": "Duration",
  "gantt.tooltip.progress": "Progress",
  "gantt.tooltip.date": "Date",
  "gantt.tooltip.attachments": "Attachments",
  // GanttChart popup actions
  "gantt.popup.viewDetails": "View details",
  "gantt.popup.edit": "Edit",
  "gantt.popup.delete": "Delete",
  "gantt.popup.relations": "Relations",
  "gantt.chart.addOn": "Add on",
  // GanttChart dependency type labels
  "gantt.depType.fs": "Finish to Start",
  "gantt.depType.ss": "Start to Start",
  "gantt.depType.ff": "Finish to Finish",
  "gantt.depType.sf": "Start to Finish",
  // Dependency modal
  "gantt.depModal.title": "Relation Type",
  "gantt.depModal.subtitle": "Choose how the two tasks relate",
  "gantt.depModal.fs": "Finish to Start",
  "gantt.depModal.fsDesc": "B starts when A finishes",
  "gantt.depModal.ss": "Start to Start",
  "gantt.depModal.ssDesc": "A and B start together",
  "gantt.depModal.ff": "Finish to Finish",
  "gantt.depModal.ffDesc": "A and B finish together",
  "gantt.depModal.sf": "Start to Finish",
  "gantt.depModal.sfDesc": "B finishes when A starts",
  "gantt.depModal.lagLabel": "Lag (days)",
  "gantt.depModal.cancel": "Cancel",
  "gantt.depModal.create": "Create Dependency",
  "gantt.depModal.saving": "Saving...",
  // NoteModal
  "noteModal.titlePlaceholder": "Note title...",
  "noteModal.contentPlaceholder": "Write your note here...",
  "noteModal.attachFiles": "Attach files",
  "noteModal.removeFile": "Remove",
  "noteModal.dependency": "Dependency",
  "noteModal.none": "None",
  "noteModal.milestones": "Milestones",
  "noteModal.cancel": "Cancel",
  "noteModal.create": "Create Note",
  "noteModal.errorEmpty": "Please provide a title or content for the note.",
  "noteModal.errorSave": "Error creating note.",
  "noteModal.untitled": "Untitled",
  // Pinboard
  "pinboard.description": "Board with notes and files linked to this task.",
  "pinboard.empty": "No linked notes",
  "pinboard.newBtn": "New note for this task",
  // Dependency business rules
  "gantt.error.circularDependency": "Circular dependency is not allowed."
};
function ln(e, t, o) {
  const r = yr[t] || o || t;
  return e ? typeof e == "function" ? e(t, r) || r : e[t] || r : r;
}
function dn(e) {
  if (!e) return {};
  const t = {};
  return e.primary && (t["--zg-primary-color"] = e.primary, t["--zg-group"] = e.primary), e.primaryContrast && (t["--zg-contrast-high"] = e.primaryContrast), e.surface && (t["--zg-surface"] = e.surface), e.surfaceAlt && (t["--zg-surface-alt"] = e.surfaceAlt), e.headerBg && (t["--zg-header-bg"] = e.headerBg), e.border && (t["--zg-border"] = e.border), e.borderLight && (t["--zg-border-light"] = e.borderLight), e.textPrimary && (t["--zg-text-primary"] = e.textPrimary), e.textSecondary && (t["--zg-text-secondary"] = e.textSecondary), e.textMuted && (t["--zg-text-muted"] = e.textMuted), e.milestone && (t["--zg-milestone"] = e.milestone), e.event && (t["--zg-event"] = e.event), e.note && (t["--zg-note-color"] = e.note), e.today && (t["--zg-danger-color"] = e.today), e.weekendBg && (t["--zg-weekend-bg"] = e.weekendBg), e.customVariables && Object.entries(e.customVariables).forEach(([o, r]) => {
    const i = o.startsWith("--") ? o : `--${o}`;
    t[i] = r;
  }), t;
}
const Dr = {
  primary: "#4ade80",
  primaryContrast: "#0a0a0a",
  surface: "#1a1a2e",
  surfaceAlt: "#16213e",
  headerBg: "#0f3460",
  border: "#2d2d4a",
  borderLight: "#252545",
  textPrimary: "#e2e8f0",
  textSecondary: "#94a3b8",
  textMuted: "#475569",
  milestone: "#4ade80",
  event: "#fb923c",
  note: "#fbbf24",
  today: "#f87171",
  weekendBg: "#1e1e38",
  customVariables: {
    "--zg-group": "#4ade80",
    "--zg-group-soft": "rgba(74,222,128,0.08)",
    "--zg-group-soft-strong": "rgba(74,222,128,0.15)",
    "--zg-group-light": "#166534",
    "--zg-page-bg": "#0d0d1a",
    "--zg-surface-frost": "rgba(26,26,46,0.96)",
    "--zg-ink-strong": "#f1f5f9",
    "--zg-note-default-bg": "#92400e",
    "--zg-milestone-ring": "#166534",
    "--zg-milestone-ring-soft": "rgba(22,101,52,0.2)",
    "--zg-milestone-pill-bg": "#14532d",
    "--zg-event-soft": "rgba(251,146,60,0.1)",
    "--zg-event-border-soft": "rgba(251,146,60,0.3)",
    "--zg-event-pill-bg": "#7c2d12",
    "--zg-shadow-panel": "0 10px 40px rgba(0,0,0,0.5)",
    "--zg-shadow-popover": "0 8px 30px rgba(0,0,0,0.6)",
    "--zg-sticky-tape": "rgba(255,255,255,0.15)"
  }
}, br = 1.6, xr = 200, vr = 700, cn = "zg-sidebar-w", wr = 140, Dn = 1.2, Sr = 1 / Dn, Le = (e) => {
  const t = e.touches[0] || e.changedTouches[0];
  return t ? { clientX: t.clientX, clientY: t.clientY } : { clientX: 0, clientY: 0 };
}, un = (e) => {
  if (e.length < 2) return 0;
  const t = e[0], o = e[1];
  return Math.hypot(o.clientX - t.clientX, o.clientY - t.clientY);
}, gn = (e) => {
  if (e.length < 2)
    return e.length === 1 ? { clientX: e[0].clientX, clientY: e[0].clientY } : { clientX: 0, clientY: 0 };
  const t = e[0], o = e[1];
  return {
    clientX: (t.clientX + o.clientX) / 2,
    clientY: (t.clientY + o.clientY) / 2
  };
}, kr = (e) => Math.min(wr, Math.max(br, e));
function Cr(e) {
  const {
    onTaskChange: t,
    onCreateDependency: o,
    onDependencyError: r,
    dependencies: i,
    translations: s
  } = e, l = !!e.infiniteCanvas, [d, g] = V("day"), [y, x] = V(dt), I = he(y), [w, O] = V(null), [X, M] = V(/* @__PURE__ */ new Set()), _ = X.size > 0 ? [...X].at(-1) ?? null : null, [D, p] = V(null), [E, R] = V({
    isOpen: !1,
    position: { x: 0, y: 0 },
    task: null
  }), [k, B] = V(null), [v, C] = V(null), [W, m] = V(null), [L, b] = V(null), [f, z] = V("FS"), [$, K] = V(0), [ee, q] = V(!1), [Q, ne] = V(null), [re, ie] = V(null), [se, Se] = V(!1), Oe = he(null), [et, Mt] = V(null), Xe = he(!1), [_e, ut] = V(() => {
    if (e.sidebarWidth) return e.sidebarWidth;
    try {
      const c = localStorage.getItem(cn);
      return c ? Number(c) : 460;
    } catch {
      return 460;
    }
  });
  de(() => {
    e.sidebarWidth !== void 0 && ut(e.sidebarWidth);
  }, [e.sidebarWidth]);
  const [He, tt] = V(""), { exportRef: Rt, exportPng: gt } = gr(), [Ue, ht] = V(/* @__PURE__ */ new Set(["step", "milestone", "event", "note"])), [nt, pt] = V(/* @__PURE__ */ new Set()), [ot, ft] = V(/* @__PURE__ */ new Set());
  de(() => {
    I.current = y;
  }, [y]);
  const rt = Z((c, h) => l ? h === "day" && c <= 7 ? "month" : h === "month" && c >= 10 ? "day" : h : h, [l]), mt = Z((c) => {
    g(c), l || x({
      day: dt,
      week: mn,
      month: yn
    }[c]);
  }, [l]), je = Z((c) => {
    ht((h) => {
      const S = new Set(h);
      return S.has(c) ? S.delete(c) : S.add(c), S;
    });
  }, []), Dt = Z((c) => {
    pt((h) => {
      const S = new Set(h);
      return S.has(c) ? S.delete(c) : S.add(c), S;
    });
  }, []), Ne = Z((c) => {
    ft((h) => {
      const S = new Set(h);
      return S.has(c) ? S.delete(c) : S.add(c), S;
    });
  }, []), j = bo({
    steps: e.steps,
    milestones: e.milestones,
    events: e.events,
    notes: e.notes,
    dependencies: e.dependencies,
    viewMode: d,
    dayWidth: y,
    locale: e.locale,
    visibleTypes: Ue,
    collapsedGroups: nt,
    collapsedProjects: ot,
    groupByProject: e.groupByProject,
    selectedTaskId: _ || null,
    nonWorkingDays: e.nonWorkingDays,
    searchQuery: He
  }), F = po(j.timeline), pe = pr((c, h, S) => {
    const A = j.tasks.find((N) => N.id === c);
    A && e.onTaskChange?.({
      id: c,
      name: A.name,
      start: h,
      end: S,
      type: A.originalType === "step" ? "task" : "milestone",
      progress: A.progress
    });
  }), De = Z((c) => {
    const h = kr(c);
    return x(h), l && g((S) => rt(h, S)), h;
  }, [rt, l]), T = Z((c, h) => {
    const S = F.rightBodyRef.current;
    if (!S) {
      De(h);
      return;
    }
    const A = S.getBoundingClientRect(), N = c - A.left, Y = Number.isFinite(N) ? N : S.clientWidth / 2, P = I.current || dt, H = S.scrollLeft + Y, te = De(h) / P;
    requestAnimationFrame(() => {
      const le = F.rightBodyRef.current;
      le && (le.scrollLeft = Math.max(0, H * te - Y), F.timeHeaderRef.current && (F.timeHeaderRef.current.scrollLeft = le.scrollLeft));
    });
  }, [F.rightBodyRef, F.timeHeaderRef, De]), U = Z((c, h) => {
    const S = F.rightBodyRef.current, A = h ?? (S ? S.getBoundingClientRect().left + S.clientWidth / 2 : 0);
    T(A, I.current * c);
  }, [T, F.rightBodyRef]), G = Z(() => {
    U(Dn);
  }, [U]), ke = Z(() => {
    U(Sr);
  }, [U]), ye = Z(() => {
    const c = F.rightBodyRef.current;
    if (!c || j.tasks.length === 0) return;
    let h = j.tasks[0].start, S = j.tasks[0].end;
    for (const H of j.tasks)
      H.start < h && (h = H.start), H.end > S && (S = H.end);
    const A = Math.max(1, Ee(h, S) + 1), N = 40, Y = Math.max(80, c.clientWidth - N * 2), P = De(Y / A);
    requestAnimationFrame(() => {
      const H = F.rightBodyRef.current;
      if (!H) return;
      const J = Ee(j.timeline.start, h);
      H.scrollLeft = Math.max(0, J * P - N), H.scrollTop = 0, F.leftBodyRef.current && (F.leftBodyRef.current.scrollTop = H.scrollTop), F.timeHeaderRef.current && (F.timeHeaderRef.current.scrollLeft = H.scrollLeft);
    });
  }, [j.tasks, j.timeline.start, F.rightBodyRef, F.leftBodyRef, F.timeHeaderRef, De]), Ce = he(!1);
  de(() => {
    if (!l || !e.initialFitToScreen || Ce.current || j.tasks.length === 0) return;
    const c = F.rightBodyRef.current;
    !c || c.clientWidth <= 0 || (ye(), Ce.current = !0);
  }, [l, e.initialFitToScreen, j.tasks.length, ye, F.rightBodyRef]);
  const Ae = Z((c, h) => {
    c.preventDefault(), c.stopPropagation(), B({ task: h, startMouseX: c.clientX, originalStart: new Date(h.start), originalEnd: new Date(h.end), offsetDays: 0 });
  }, []), oe = Z((c, h) => {
    c.preventDefault(), c.stopPropagation();
    const S = Le(c);
    B({ task: h, startMouseX: S.clientX, originalStart: new Date(h.start), originalEnd: new Date(h.end), offsetDays: 0 });
  }, []), fe = Z((c, h, S) => {
    c.preventDefault(), c.stopPropagation(), C({ task: h, edge: S, startMouseX: c.clientX, originalStart: new Date(h.start), originalEnd: new Date(h.end), offsetDays: 0 });
  }, []), be = Z((c, h, S) => {
    c.preventDefault(), c.stopPropagation();
    const A = Le(c);
    C({ task: h, edge: S, startMouseX: A.clientX, originalStart: new Date(h.start), originalEnd: new Date(h.end), offsetDays: 0 });
  }, []), Te = Z((c, h, S) => {
    c.preventDefault(), c.stopPropagation(), m({ fromTaskId: h.id, fromEdge: S, fromScreenX: c.clientX, fromScreenY: c.clientY, currentScreenX: c.clientX, currentScreenY: c.clientY, hoverTargetId: null });
  }, []), it = Z((c, h, S) => {
    c.preventDefault(), c.stopPropagation();
    const A = Le(c);
    m({
      fromTaskId: h.id,
      fromEdge: S,
      fromScreenX: A.clientX,
      fromScreenY: A.clientY,
      currentScreenX: A.clientX,
      currentScreenY: A.clientY,
      hoverTargetId: null
    });
  }, []), Ve = Z((c, h) => {
    if (Xe.current) return;
    c.stopPropagation();
    const S = _ === h.id;
    M(S ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([h.id])), R((A) => {
      const N = A.isOpen && A.task?.id === h.id;
      return S || N ? { isOpen: !1, position: { x: 0, y: 0 }, task: null } : { isOpen: !0, position: { x: c.clientX, y: c.clientY }, task: h };
    });
  }, [_, M]), yt = Z(async () => {
    if (!L || !o) return;
    const c = new Map(j.tasks.map((P) => [P.id, P])), h = c.get(L.fromTaskId), S = c.get(L.toTaskId);
    if (!h || !S) return;
    const A = (P) => P.originalType === "step" ? "STEP" : "MILESTONE", N = L.fromEdge === "right" ? h : S, Y = L.fromEdge === "right" ? S : h;
    if (mo(i || [], N.id, Y.id)) {
      const P = ln(
        s,
        "gantt.error.circularDependency",
        "Circular dependency is not allowed."
      );
      r?.({
        code: "CYCLIC_DEPENDENCY",
        message: P,
        predecessorId: N.id,
        successorId: Y.id
      }), r || window.alert(P), b(null);
      return;
    }
    q(!0);
    try {
      await o({ predecessorId: N.id, predecessorType: A(N), successorId: Y.id, successorType: A(Y), type: f, lag: $ }), b(null);
    } finally {
      q(!1);
    }
  }, [L, j.tasks, o, i, s, r, f, $]);
  de(() => {
    if (!k) return;
    const c = { passive: !1 }, h = (Y) => {
      const P = Y.clientX - k.startMouseX, H = Math.round(P / j.timeline.dayWidth);
      H !== k.offsetDays && (H !== 0 && (Xe.current = !0), B((J) => J ? { ...J, offsetDays: H } : null));
    }, S = (Y) => {
      Y.cancelable && Y.preventDefault();
      const H = Le(Y).clientX - k.startMouseX, J = Math.round(H / j.timeline.dayWidth);
      J !== k.offsetDays && (J !== 0 && (Xe.current = !0), B((te) => te ? { ...te, offsetDays: J } : null));
    }, A = () => {
      k.offsetDays !== 0 && t && (t({
        id: k.task.id,
        name: k.task.name,
        start: ue(k.originalStart, k.offsetDays),
        end: ue(k.originalEnd, k.offsetDays),
        type: k.task.originalType === "step" ? "task" : "milestone",
        progress: k.task.progress
      }), pe.push({
        taskId: k.task.id,
        prevStart: k.originalStart,
        prevEnd: k.originalEnd,
        nextStart: ue(k.originalStart, k.offsetDays),
        nextEnd: ue(k.originalEnd, k.offsetDays)
      })), B(null), requestAnimationFrame(() => {
        Xe.current = !1;
      });
    }, N = () => A();
    return document.addEventListener("mousemove", h), document.addEventListener("mouseup", A), document.addEventListener("touchmove", S, c), document.addEventListener("touchend", N), () => {
      document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", A), document.removeEventListener("touchmove", S), document.removeEventListener("touchend", N);
    };
  }, [k, j.timeline.dayWidth, t, pe]), de(() => {
    if (!v) return;
    const c = { passive: !1 }, h = (Y) => {
      const P = Y.clientX - v.startMouseX, H = Math.round(P / j.timeline.dayWidth);
      H !== v.offsetDays && C((J) => J ? { ...J, offsetDays: H } : null);
    }, S = (Y) => {
      Y.cancelable && Y.preventDefault();
      const H = Le(Y).clientX - v.startMouseX, J = Math.round(H / j.timeline.dayWidth);
      J !== v.offsetDays && C((te) => te ? { ...te, offsetDays: J } : null);
    }, A = () => {
      if (v.offsetDays !== 0 && t) {
        const Y = v.edge === "left" ? ue(v.originalStart, v.offsetDays) : v.originalStart, P = v.edge === "right" ? ue(v.originalEnd, v.offsetDays) : v.originalEnd;
        P > Y && (t({ id: v.task.id, name: v.task.name, start: Y, end: P, type: "task", progress: v.task.progress }), pe.push({
          taskId: v.task.id,
          prevStart: v.originalStart,
          prevEnd: v.originalEnd,
          nextStart: Y,
          nextEnd: P
        }));
      }
      C(null);
    }, N = () => A();
    return document.addEventListener("mousemove", h), document.addEventListener("mouseup", A), document.addEventListener("touchmove", S, c), document.addEventListener("touchend", N), () => {
      document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", A), document.removeEventListener("touchmove", S), document.removeEventListener("touchend", N);
    };
  }, [v, j.timeline.dayWidth, t, pe]);
  const st = W?.fromTaskId, at = W?.fromEdge;
  de(() => {
    if (!st || !at) return;
    const c = { passive: !1 }, h = st, S = at, A = (H) => {
      let J = null;
      for (const te of document.elementsFromPoint(H.clientX, H.clientY)) {
        const le = te.dataset?.taskId;
        if (le && le !== h) {
          J = le;
          break;
        }
      }
      m((te) => te ? { ...te, currentScreenX: H.clientX, currentScreenY: H.clientY, hoverTargetId: J } : null);
    }, N = (H) => {
      H.cancelable && H.preventDefault();
      const J = Le(H);
      let te = null;
      for (const le of document.elementsFromPoint(J.clientX, J.clientY)) {
        const Ye = le.dataset?.taskId;
        if (Ye && Ye !== h) {
          te = Ye;
          break;
        }
      }
      m((le) => le ? { ...le, currentScreenX: J.clientX, currentScreenY: J.clientY, hoverTargetId: te } : null);
    }, Y = (H) => {
      let J = null;
      for (const te of document.elementsFromPoint(H.clientX, H.clientY)) {
        const le = te.dataset?.taskId;
        if (le && le !== h) {
          J = le;
          break;
        }
      }
      J && o && (b({ fromTaskId: h, fromEdge: S, toTaskId: J }), z("FS"), K(0)), m(null);
    }, P = (H) => {
      const J = Le(H);
      let te = null;
      for (const le of document.elementsFromPoint(J.clientX, J.clientY)) {
        const Ye = le.dataset?.taskId;
        if (Ye && Ye !== h) {
          te = Ye;
          break;
        }
      }
      te && o && (b({ fromTaskId: h, fromEdge: S, toTaskId: te }), z("FS"), K(0)), m(null);
    };
    return document.addEventListener("mousemove", A), document.addEventListener("mouseup", Y), document.addEventListener("touchmove", N, c), document.addEventListener("touchend", P), () => {
      document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", Y), document.removeEventListener("touchmove", N), document.removeEventListener("touchend", P);
    };
  }, [st, at, o]);
  const [ze, Fe] = V(null), [We, bt] = V(null), Ct = Z((c) => {
    if (v || k || c.button === 2) return;
    const h = F.rightBodyRef.current;
    h && (c.preventDefault(), Fe({ startX: c.clientX, startY: c.clientY, scrollLeft: h.scrollLeft, scrollTop: h.scrollTop }));
  }, [v, k, F.rightBodyRef]), ae = Z((c) => {
    if (v || k || W) return;
    const h = F.rightBodyRef.current;
    if (!h) return;
    if (l && c.touches.length >= 2) {
      c.cancelable && c.preventDefault(), Fe(null);
      const A = un(c.touches), N = gn(c.touches);
      bt({
        startDistance: Math.max(1, A),
        startDayWidth: I.current,
        centerClientY: N.clientY,
        startScrollTop: h.scrollTop
      });
      return;
    }
    const S = Le(c);
    Fe({ startX: S.clientX, startY: S.clientY, scrollLeft: h.scrollLeft, scrollTop: h.scrollTop });
  }, [v, k, W, F.rightBodyRef, l]), Xt = Z((c) => {
    if (!l) {
      F.handleChartWheel(c);
      return;
    }
    if (!F.rightBodyRef.current) return;
    c.preventDefault();
    const S = Math.abs(c.deltaY) > 0 ? c.deltaY : c.deltaX, A = Math.exp(-S * 15e-4);
    T(c.clientX, I.current * A);
  }, [l, F, T]);
  de(() => {
    if (!ze) return;
    const c = { passive: !1 }, h = (Y) => {
      const P = F.rightBodyRef.current;
      P && (P.scrollLeft = ze.scrollLeft - (Y.clientX - ze.startX), P.scrollTop = ze.scrollTop - (Y.clientY - ze.startY), F.leftBodyRef.current && (F.leftBodyRef.current.scrollTop = P.scrollTop), F.timeHeaderRef.current && (F.timeHeaderRef.current.scrollLeft = P.scrollLeft));
    }, S = (Y) => {
      Y.cancelable && Y.preventDefault();
      const P = F.rightBodyRef.current;
      if (!P) return;
      const H = Le(Y);
      P.scrollLeft = ze.scrollLeft - (H.clientX - ze.startX), P.scrollTop = ze.scrollTop - (H.clientY - ze.startY), F.leftBodyRef.current && (F.leftBodyRef.current.scrollTop = P.scrollTop), F.timeHeaderRef.current && (F.timeHeaderRef.current.scrollLeft = P.scrollLeft);
    }, A = () => Fe(null), N = () => Fe(null);
    return document.addEventListener("mousemove", h), document.addEventListener("mouseup", A), document.addEventListener("touchmove", S, c), document.addEventListener("touchend", N), () => {
      document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", A), document.removeEventListener("touchmove", S), document.removeEventListener("touchend", N);
    };
  }, [ze, F.rightBodyRef, F.leftBodyRef, F.timeHeaderRef]), de(() => {
    if (!We || !l) return;
    const c = { passive: !1 }, h = (A) => {
      if (A.touches.length < 2) return;
      A.cancelable && A.preventDefault();
      const N = F.rightBodyRef.current;
      if (!N) return;
      const Y = un(A.touches), P = gn(A.touches), H = Math.max(0.1, Y / We.startDistance);
      T(P.clientX, We.startDayWidth * H), N.scrollTop = We.startScrollTop - (P.clientY - We.centerClientY), F.leftBodyRef.current && (F.leftBodyRef.current.scrollTop = N.scrollTop);
    }, S = (A) => {
      A.touches.length < 2 && bt(null);
    };
    return document.addEventListener("touchmove", h, c), document.addEventListener("touchend", S), document.addEventListener("touchcancel", S), () => {
      document.removeEventListener("touchmove", h), document.removeEventListener("touchend", S), document.removeEventListener("touchcancel", S);
    };
  }, [We, l, F.rightBodyRef, F.leftBodyRef, T]);
  const _t = Z((c) => {
    c.preventDefault(), c.stopPropagation(), R({ isOpen: !1, position: { x: 0, y: 0 }, task: null }), Se(!1);
    const h = (A) => {
      const N = F.rightBodyRef.current;
      if (!N) return /* @__PURE__ */ new Date();
      const Y = N.getBoundingClientRect(), P = A - Y.left + N.scrollLeft;
      return ue(j.timeline.start, Math.max(0, Math.floor(P / j.timeline.dayWidth)));
    }, S = (A) => {
      if (!e.groupByProject) return;
      const N = F.leftBodyRef.current;
      if (!N) return;
      const Y = N.getBoundingClientRect(), P = A - Y.top + N.scrollTop, H = Math.max(0, Math.floor(P / 50));
      for (let J = Math.min(H, j.displayRows.length - 1); J >= 0; J--) {
        const te = j.displayRows[J];
        if (te.kind === "projectHeader") return te.projectId;
        if (te.kind === "task" && te.task.projectId) return te.task.projectId;
        if (te.kind === "group" && te.projectId) return te.projectId;
      }
    };
    ie({ x: c.clientX, y: c.clientY, date: h(c.clientX), projectId: S(c.clientY) }), Fe(null);
  }, [j.timeline, j.displayRows, e.groupByProject, F.rightBodyRef, F.leftBodyRef]);
  de(() => {
    if (!re) return;
    const c = (N) => {
      N.key === "Escape" && ie(null);
    }, h = (N) => {
      N.target.closest('[data-menu="chart-create"]') || ie(null);
    }, S = (N) => {
      N.target.closest('[data-menu="chart-create"]') || ie(null);
    }, A = () => ie(null);
    return document.addEventListener("keydown", c), document.addEventListener("click", h), document.addEventListener("touchstart", S), window.addEventListener("scroll", A, !0), () => {
      document.removeEventListener("keydown", c), document.removeEventListener("click", h), document.removeEventListener("touchstart", S), window.removeEventListener("scroll", A, !0);
    };
  }, [re]), de(() => {
    if (!E.isOpen) return;
    const c = (S) => {
      S.target.closest('[data-popup="gantt-action"]') || R({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
    }, h = (S) => {
      S.key === "Escape" && R({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
    };
    return document.addEventListener("mousedown", c), document.addEventListener("keydown", h), () => {
      document.removeEventListener("mousedown", c), document.removeEventListener("keydown", h);
    };
  }, [E.isOpen]), de(() => {
    const c = (h) => {
      (navigator.platform.toUpperCase().includes("MAC") ? h.metaKey : h.ctrlKey) && (h.key === "z" && !h.shiftKey && (h.preventDefault(), pe.undo()), (h.key === "z" && h.shiftKey || h.key === "y") && (h.preventDefault(), pe.redo()));
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [pe]), de(() => {
    if (!se) return;
    const c = (S) => {
      Oe.current && !Oe.current.contains(S.target) && Se(!1);
    }, h = (S) => {
      S.key === "Escape" && Se(!1);
    };
    return document.addEventListener("mousedown", c), document.addEventListener("keydown", h), () => {
      document.removeEventListener("mousedown", c), document.removeEventListener("keydown", h);
    };
  }, [se]);
  const Cn = ce(() => ({
    props: e,
    t: (c, h) => ln(e.translations, c, h),
    viewMode: d,
    setViewMode: mt,
    isInfiniteCanvas: l,
    dayWidth: y,
    zoomPercent: Math.round(y / dt * 100),
    zoomIn: G,
    zoomOut: ke,
    fitToScreen: ye,
    hoveredTaskId: w,
    setHoveredTaskId: O,
    selectedTaskIds: X,
    setSelectedTaskIds: M,
    selectedTaskId: _,
    // computed above — keep for compat
    setSelectedTaskId: (c) => {
      const h = typeof c == "function" ? c(_) : c;
      M(h ? /* @__PURE__ */ new Set([h]) : /* @__PURE__ */ new Set());
    },
    tooltip: D,
    setTooltip: p,
    popupState: E,
    setPopupState: R,
    dragState: k,
    setDragState: B,
    resizeState: v,
    setResizeState: C,
    connectState: W,
    setConnectState: m,
    visibleTypes: Ue,
    setVisibleTypes: ht,
    toggleVisibility: je,
    collapsedGroups: nt,
    setCollapsedGroups: pt,
    toggleGroup: Dt,
    collapsedProjects: ot,
    setCollapsedProjects: ft,
    toggleProject: Ne,
    pendingConnection: L,
    setPendingConnection: b,
    depModalType: f,
    setDepModalType: z,
    depModalLag: $,
    setDepModalLag: K,
    depCreating: ee,
    setDepCreating: q,
    deletingDepId: Q,
    setDeletingDepId: ne,
    chartMenu: re,
    setChartMenu: ie,
    newActionOpen: se,
    setNewActionOpen: Se,
    activePinboardTask: et,
    setActivePinboardTask: Mt,
    searchQuery: He,
    setSearchQuery: tt,
    nonWorkingDaySet: j.nonWorkingDaySet,
    exportPng: gt,
    tasks: j.tasks,
    timeline: j.timeline,
    displayRows: j.displayRows,
    taskRowIndex: j.taskRowIndex || /* @__PURE__ */ new Map(),
    arrows: j.arrows,
    criticalIds: j.criticalIds,
    delayedIds: j.delayedIds,
    relatedIds: j.relatedIds,
    groupProgress: j.groupProgress,
    sidebarW: _e,
    ...F,
    newActionRef: Oe,
    screenXToDate: (c) => {
      const h = F.rightBodyRef.current;
      if (!h) return /* @__PURE__ */ new Date();
      const S = h.getBoundingClientRect(), A = c - S.left + h.scrollLeft;
      return ue(j.timeline.start, Math.max(0, Math.floor(A / j.timeline.dayWidth)));
    },
    screenYToProjectId: (c) => {
      if (!e.groupByProject) return;
      const h = F.leftBodyRef.current;
      if (!h) return;
      const S = h.getBoundingClientRect(), A = c - S.top + h.scrollTop, N = Math.max(0, Math.floor(A / 50));
      for (let Y = Math.min(N, j.displayRows.length - 1); Y >= 0; Y--) {
        const P = j.displayRows[Y];
        if (P.kind === "projectHeader") return P.projectId;
        if (P.kind === "task" && P.task.projectId) return P.task.projectId;
        if (P.kind === "group" && P.projectId) return P.projectId;
      }
    },
    handleChartMouseDown: Ct,
    handleChartTouchStart: ae,
    handleChartWheel: Xt,
    openChartMenu: _t,
    handleBarClick: Ve,
    handleBarMouseDown: Ae,
    handleBarTouchStart: oe,
    handleResizeMouseDown: fe,
    handleResizeTouchStart: be,
    handleConnectDotMouseDown: Te,
    handleConnectDotTouchStart: it,
    handleCreateDependency: yt,
    scrollToToday: () => {
      const c = F.rightBodyRef.current, h = F.timeHeaderRef.current;
      if (!c || j.timeline.todayIndex < 0) return;
      const S = Math.max(0, j.timeline.todayIndex * j.timeline.dayWidth - c.clientWidth / 2);
      c.scrollTo({ left: S, behavior: "smooth" }), h && (h.scrollLeft = S);
    },
    isTodayVisible: j.timeline.todayIndex >= 0,
    canUndo: pe.canUndo,
    canRedo: pe.canRedo,
    undo: pe.undo,
    redo: pe.redo
  }), [
    e,
    d,
    l,
    y,
    G,
    ke,
    ye,
    w,
    _,
    X,
    D,
    E,
    k,
    v,
    W,
    Ue,
    nt,
    ot,
    L,
    f,
    $,
    ee,
    Q,
    re,
    se,
    et,
    j,
    F,
    _e,
    je,
    Dt,
    Ne,
    He,
    gt,
    Ct,
    ae,
    Xt,
    _t,
    Ve,
    Ae,
    oe,
    fe,
    be,
    Te,
    it,
    yt,
    pe
  ]);
  return e.loading ? /* @__PURE__ */ u(
    "div",
    {
      role: "status",
      "aria-label": "Loading Gantt chart",
      "aria-live": "polite",
      style: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: "var(--zg-surface, #fff)",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "var(--zg-shadow-panel)",
        border: "1px solid var(--zg-border-light, #ECECEC)",
        height: "calc(100vh - 48px)",
        minHeight: 600,
        ...dn(e.theme)
      },
      children: [
        /* @__PURE__ */ u("div", { style: { padding: "14px 18px", borderBottom: "1px solid var(--zg-border, #D9D9D9)", background: "var(--zg-header-bg, #F2F5F3)", display: "flex", gap: 12, alignItems: "center" }, children: [
          /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 140, height: 20 } }),
          /* @__PURE__ */ a("div", { style: { flex: 1 } }),
          /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 80, height: 30, borderRadius: 8 } }),
          /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 200, height: 30, borderRadius: 8 } }),
          /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 120, height: 36, borderRadius: 8 } })
        ] }),
        /* @__PURE__ */ u("div", { style: { display: "flex", flex: 1, overflow: "hidden" }, children: [
          /* @__PURE__ */ u("div", { style: { width: 460, flexShrink: 0, borderRight: "1px solid var(--zg-border, #D9D9D9)", padding: "0 16px" }, children: [
            /* @__PURE__ */ u("div", { style: { height: 64, display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid var(--zg-border, #D9D9D9)" }, children: [
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { flex: 1, height: 12 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 60, height: 12 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 60, height: 12 } })
            ] }),
            Array.from({ length: 8 }, (c, h) => /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 10, height: 50, borderBottom: "1px solid var(--zg-border-light, #ECECEC)" }, children: [
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 14, height: 14, borderRadius: 3, flexShrink: 0 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: `${45 + h % 4 * 10}%`, height: 12 } }),
              /* @__PURE__ */ a("div", { style: { flex: 1 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 50, height: 11 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 50, height: 11 } })
            ] }, h))
          ] }),
          /* @__PURE__ */ u("div", { style: { flex: 1, padding: 16, display: "flex", flexDirection: "column", gap: 8 }, children: [
            /* @__PURE__ */ a("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: Array.from({ length: 8 }, (c, h) => /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { flex: 1, height: 30, borderRadius: 4 } }, h)) }),
            Array.from({ length: 8 }, (c, h) => /* @__PURE__ */ a("div", { style: { height: 50, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ a(
              "div",
              {
                className: "zg-skeleton",
                style: {
                  marginLeft: `${h * 17 % 35}%`,
                  width: `${20 + h % 5 * 8}%`,
                  height: 26,
                  borderRadius: 13
                }
              }
            ) }, h))
          ] })
        ] })
      ]
    }
  ) : /* @__PURE__ */ a(Un, { value: Cn, children: /* @__PURE__ */ u(
    "div",
    {
      ref: Rt,
      className: `zg-root ${l ? "zg-root--infinite" : "zg-root--framed"} ${et ? "zg-root--muted" : ""}`,
      style: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
        background: l ? "transparent" : "var(--zg-surface)",
        borderRadius: l ? 0 : 12,
        boxShadow: l ? "none" : "var(--zg-shadow-panel)",
        overflow: "hidden",
        height: l ? "100%" : "calc(100vh - 48px)",
        minHeight: l ? 0 : 600,
        border: l ? "none" : `1px solid ${n.borderLight}`,
        opacity: 1,
        transition: "opacity 0.3s ease",
        ...dn(e.theme)
      },
      children: [
        /* @__PURE__ */ a(Gn, {}),
        /* @__PURE__ */ u("div", { style: { display: "flex", flex: 1, overflow: "hidden", position: "relative", background: n.surfaceAlt }, children: [
          !e.hideSidebar && /* @__PURE__ */ u(Me, { children: [
            /* @__PURE__ */ a("div", { style: { width: _e, flexShrink: 0 }, children: /* @__PURE__ */ a(ao, {}) }),
            /* @__PURE__ */ a(
              "div",
              {
                style: {
                  width: 5,
                  flexShrink: 0,
                  background: "transparent",
                  cursor: "col-resize",
                  position: "relative",
                  zIndex: 10,
                  transition: "background 0.15s"
                },
                onMouseEnter: (c) => {
                  c.currentTarget.style.background = n.groupGlowSoft;
                },
                onMouseLeave: (c) => {
                  c.currentTarget.style.background = "transparent";
                },
                onMouseDown: (c) => {
                  c.preventDefault();
                  const h = c.clientX, S = _e, A = (Y) => {
                    const P = Math.min(vr, Math.max(xr, S + Y.clientX - h));
                    ut(P);
                    try {
                      localStorage.setItem(cn, String(P));
                    } catch {
                    }
                  }, N = () => {
                    document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", N);
                  };
                  document.addEventListener("mousemove", A), document.addEventListener("mouseup", N);
                }
              }
            )
          ] }),
          /* @__PURE__ */ a(ho, {})
        ] }),
        /* @__PURE__ */ a(mr, {}),
        /* @__PURE__ */ a(fr, {})
      ]
    }
  ) });
}
const zr = [
  { label: "Yellow", value: "#FEF08A" },
  { label: "Green", value: "#BBF7D0" },
  { label: "Blue", value: "#BFDBFE" },
  { label: "Pink", value: "#FBCFE8" },
  { label: "Purple", value: "#E9D5FF" },
  { label: "Orange", value: "#FED7AA" },
  { label: "White", value: "#FFFFFF" }
], hn = {
  FS: "Finish → Start (FS)",
  SS: "Start → Start (SS)",
  FF: "Finish → Finish (FF)",
  SF: "Start → Finish (SF)"
};
function Ar({
  isOpen: e,
  onClose: t,
  availableMilestones: o = [],
  initialDate: r,
  translations: i,
  onSaveNote: s
}) {
  const l = (b, f) => i ? typeof i == "function" ? i(b, f) : i[b] || f : f, [d, g] = V(""), [y, x] = V(""), [I, w] = V("#FEF08A"), [O, X] = V(""), [M, _] = V(""), [D, p] = V("FS"), [E, R] = V(!1), [k, B] = V([]), [v, C] = V(""), W = he(null);
  de(() => {
    e && (g(""), x(""), w("#FEF08A"), X(r ?? (/* @__PURE__ */ new Date()).toISOString().split("T")[0]), _(""), p("FS"), B([]), C(""));
  }, [e, r]);
  const m = [
    ...o.map((b) => ({ id: b.id, name: b.name, type: "MILESTONE" }))
  ], L = async () => {
    if (!d.trim() && !y.trim()) {
      C(l("noteModal.errorEmpty", "Please provide a title or content for the note."));
      return;
    }
    C("");
    try {
      R(!0), await s({
        title: d || l("noteModal.untitled", "Untitled"),
        description: y,
        color: I,
        date: O ? `${O}T00:00:00` : (/* @__PURE__ */ new Date()).toISOString(),
        predecessorId: M,
        dependencyType: D,
        files: k
      }), t();
    } catch (b) {
      console.error(b), C(l("noteModal.errorSave", "Error creating note."));
    } finally {
      R(!1);
    }
  };
  return e ? /* @__PURE__ */ a("div", { style: { position: "fixed", inset: 0, background: n.overlaySoft, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 16 }, onClick: t, children: /* @__PURE__ */ u("div", { onClick: (b) => b.stopPropagation(), style: {
    width: 400,
    maxHeight: "90vh",
    background: I || n.noteDefaultBg,
    borderRadius: 4,
    boxShadow: "var(--zg-shadow-popover)",
    transform: "rotate(-1deg)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Inter', sans-serif",
    overflow: "hidden",
    transition: "background 0.3s"
  }, children: [
    /* @__PURE__ */ a("div", { style: { position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)", width: 64, height: 16, background: n.stickyTape, borderRadius: 2, boxShadow: n.shadowTiny } }),
    /* @__PURE__ */ a(
      "button",
      {
        onClick: t,
        style: { position: "absolute", top: 10, right: 10, width: 24, height: 24, borderRadius: "50%", background: n.groupSoftStrong, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14, color: n.inkMedium },
        onMouseEnter: (b) => b.currentTarget.style.background = n.groupBorderWeak,
        onMouseLeave: (b) => b.currentTarget.style.background = n.groupSoftStrong,
        children: "✕"
      }
    ),
    /* @__PURE__ */ u("div", { style: { padding: "28px 24px 20px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }, children: [
      v && /* @__PURE__ */ a("div", { style: { background: n.todaySoft, color: n.dangerText, padding: "8px 12px", borderRadius: 6, fontSize: 12, marginBottom: 12, border: `1px solid ${n.todayMid}` }, children: v }),
      /* @__PURE__ */ a(
        "input",
        {
          type: "text",
          value: d,
          onChange: (b) => g(b.target.value),
          placeholder: l("noteModal.titlePlaceholder", "Note title..."),
          style: {
            width: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            fontSize: 20,
            fontWeight: 800,
            color: n.inkStrong,
            lineHeight: "1.3",
            padding: 0,
            margin: 0,
            marginBottom: 14,
            fontFamily: "inherit"
          }
        }
      ),
      /* @__PURE__ */ a("div", { style: { width: "100%", height: 1, background: n.groupSoftStrong, marginBottom: 14 } }),
      /* @__PURE__ */ a(
        "textarea",
        {
          value: y,
          onChange: (b) => x(b.target.value),
          rows: 6,
          placeholder: l("noteModal.contentPlaceholder", "Write your note here..."),
          style: {
            width: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            fontSize: 14,
            color: n.inkMedium,
            lineHeight: "1.6",
            resize: "vertical",
            padding: 0,
            margin: 0,
            fontFamily: "inherit",
            flex: 1,
            minHeight: 100
          }
        }
      ),
      /* @__PURE__ */ u("div", { style: { marginTop: 14, paddingTop: 10, borderTop: `1px solid ${n.groupSoftStrong}` }, children: [
        /* @__PURE__ */ a(
          "input",
          {
            ref: W,
            type: "file",
            multiple: !0,
            onChange: (b) => {
              const f = b.target.files ? Array.from(b.target.files) : [];
              f.length > 0 && B((z) => [...z, ...f]), W.current && (W.current.value = "");
            },
            style: { display: "none" }
          }
        ),
        /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            onClick: () => W.current?.click(),
            style: {
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 12px",
              borderRadius: 6,
              background: n.groupSoft,
              border: `1px dashed ${n.groupBorderWeak}`,
              cursor: "pointer",
              fontSize: 12,
              color: n.inkMedium,
              fontWeight: 500,
              transition: "background 0.15s",
              width: "100%",
              justifyContent: "center"
            },
            onMouseEnter: (b) => b.currentTarget.style.background = n.groupSoftStrong,
            onMouseLeave: (b) => b.currentTarget.style.background = n.groupSoft,
            children: [
              /* @__PURE__ */ a(Yn, { size: 13 }),
              l("noteModal.attachFiles", "Attach files")
            ]
          }
        ),
        k.length > 0 && /* @__PURE__ */ a("div", { style: { marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }, children: k.map((b, f) => /* @__PURE__ */ u("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 8px",
          borderRadius: 4,
          background: n.surfaceFrost,
          fontSize: 11,
          color: n.inkMedium
        }, children: [
          /* @__PURE__ */ a(ct, { size: 10, style: { flexShrink: 0 } }),
          /* @__PURE__ */ a("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: b.name }),
          /* @__PURE__ */ u("span", { style: { fontSize: 9, color: n.inkSoft4, flexShrink: 0 }, children: [
            (b.size / 1024).toFixed(0),
            "KB"
          ] }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              onClick: () => B((z) => z.filter(($, K) => K !== f)),
              style: { background: "none", border: "none", cursor: "pointer", padding: 2, display: "flex", color: n.dangerText },
              title: l("noteModal.removeFile", "Remove"),
              children: /* @__PURE__ */ a(jt, { size: 12 })
            }
          )
        ] }, `file-${f}`)) })
      ] }),
      /* @__PURE__ */ u("div", { style: { marginTop: 16, paddingTop: 12, borderTop: `1px solid ${n.groupSoftStrong}`, display: "flex", alignItems: "center", justifyItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
        /* @__PURE__ */ a(
          "input",
          {
            type: "date",
            value: O,
            onChange: (b) => X(b.target.value),
            style: {
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: 12,
              color: n.inkSoft3,
              fontWeight: 500,
              fontFamily: "inherit",
              padding: 0,
              cursor: "pointer",
              width: "auto"
            }
          }
        ),
        /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }, children: zr.map((b) => /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => w(b.value),
            style: {
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: I === b.value ? `2px solid ${n.group}` : `1.5px solid ${n.groupSoftStrong}`,
              backgroundColor: b.value,
              cursor: "pointer",
              padding: 0,
              transform: I === b.value ? "scale(1.15)" : "scale(1)",
              transition: "all 0.15s",
              boxShadow: I === b.value ? n.shadowSmall : "none"
            },
            title: b.label
          },
          b.value
        )) })
      ] }),
      m.length > 0 && /* @__PURE__ */ u("div", { style: { marginTop: 12, paddingTop: 12, borderTop: `1px solid ${n.groupSoftStrong}` }, children: [
        /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }, children: [
          /* @__PURE__ */ a(Xn, { size: 14, style: { color: n.inkSoft3 } }),
          /* @__PURE__ */ a("span", { style: { fontSize: 11, color: n.inkSoft3, fontWeight: 600 }, children: l("noteModal.dependency", "Dependency") })
        ] }),
        /* @__PURE__ */ u(
          "select",
          {
            value: M,
            onChange: (b) => _(b.target.value),
            style: {
              width: "100%",
              background: n.surfaceFrost,
              border: `1px solid ${n.groupSoftStrong}`,
              borderRadius: 6,
              fontSize: 12,
              color: n.inkMedium,
              padding: "6px 8px",
              outline: "none",
              fontFamily: "inherit",
              cursor: "pointer"
            },
            children: [
              /* @__PURE__ */ a("option", { value: "", children: l("noteModal.none", "None") }),
              o.length > 0 && /* @__PURE__ */ a("optgroup", { label: l("noteModal.milestones", "Milestones"), children: o.map((b) => /* @__PURE__ */ a("option", { value: b.id, children: b.name }, b.id)) })
            ]
          }
        ),
        M && /* @__PURE__ */ a(
          "select",
          {
            value: D,
            onChange: (b) => p(b.target.value),
            style: {
              width: "100%",
              background: n.surfaceFrost,
              border: `1px solid ${n.groupSoftStrong}`,
              borderRadius: 6,
              fontSize: 12,
              color: n.inkMedium,
              padding: "6px 8px",
              outline: "none",
              fontFamily: "inherit",
              cursor: "pointer",
              marginTop: 6
            },
            children: Object.keys(hn).map((b) => /* @__PURE__ */ a("option", { value: b, children: hn[b] }, b))
          }
        )
      ] }),
      /* @__PURE__ */ u("div", { style: { display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 16, marginTop: 12, borderTop: `1px solid ${n.groupSoftStrong}` }, children: [
        /* @__PURE__ */ a(
          "button",
          {
            onClick: t,
            style: { padding: "8px 16px", fontSize: 13, color: n.inkMedium, background: n.surfaceFrost, border: `1px solid ${n.groupSoftStrong}`, borderRadius: 8, cursor: "pointer" },
            children: l("noteModal.cancel", "Cancel")
          }
        ),
        /* @__PURE__ */ u(
          "button",
          {
            onClick: L,
            disabled: E,
            style: { padding: "8px 20px", fontSize: 13, color: n.white, background: n.group, border: "none", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, opacity: E ? 0.5 : 1 },
            children: [
              E && /* @__PURE__ */ a(_n, { size: 16, style: { animation: "zg-spin 1s linear infinite" } }),
              l("noteModal.create", "Create Note")
            ]
          }
        )
      ] })
    ] })
  ] }) }) : null;
}
export {
  Ar as NoteModal,
  Cr as ProjectGantt,
  Dr as darkTheme,
  yr as enUS,
  dn as generateGanttTheme,
  Rr as ptBR,
  gr as useGanttExport
};
