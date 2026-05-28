import { jsx as a, jsxs as h, Fragment as Te } from "react/jsx-runtime";
import * as kt from "react";
import { createContext as Rn, useContext as Cn, useRef as me, useEffect as se, useMemo as le, useCallback as ee, useState as K } from "react";
import { Flag as Ke, Clock as qe, MessageCircle as gn, Search as An, X as Pt, Download as Ln, Plus as At, ChevronDown as Lt, ChevronRight as Xt, Paperclip as ct, AlertTriangle as Fn, Calendar as Ft, Info as Bn, Eye as Wn, Edit2 as $n, Trash2 as Pn, RotateCcw as On, Upload as jn, Link2 as Nn, Loader2 as Yn } from "lucide-react";
import { flushSync as Xn } from "react-dom";
const hn = Rn(void 0);
function _n({ children: e, value: t }) {
  return /* @__PURE__ */ a(hn.Provider, { value: t, children: e });
}
function je() {
  const e = Cn(hn);
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
}, de = 50, lt = 32, Hn = lt * 2, Se = 26, He = 28, Bt = 120, dt = 40, pn = 18, fn = 3.5, be = [
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
], _t = {
  step: "Steps",
  milestone: "Milestones",
  event: "Events",
  note: "Notes"
};
function Vn() {
  const {
    props: e,
    t,
    viewMode: o,
    setViewMode: r,
    isInfiniteCanvas: i,
    zoomPercent: s,
    zoomIn: l,
    zoomOut: d,
    fitToScreen: u,
    visibleTypes: b,
    setVisibleTypes: v,
    newActionOpen: k,
    setNewActionOpen: z,
    newActionRef: P,
    scrollToToday: Y,
    isTodayVisible: E,
    searchQuery: V,
    setSearchQuery: D,
    exportPng: p
  } = je(), S = me(null);
  se(() => {
    const c = (C) => {
      (navigator.platform.toUpperCase().includes("MAC") ? C.metaKey : C.ctrlKey) && C.key === "f" && (C.preventDefault(), S.current?.focus());
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, []);
  const { projectName: w, onAddNewStage: A, onAddMilestone: I, onAddEvent: M, onAddNote: R } = e, F = (c) => {
    v((C) => {
      const y = new Set(C);
      return y.has(c) ? y.delete(c) : y.add(c), y;
    });
  };
  return /* @__PURE__ */ h(
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
        /* @__PURE__ */ h("div", { className: "zg-header-brand", style: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ h("div", { children: [
            /* @__PURE__ */ a("h3", { style: { margin: 0, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: n.textTitle, fontFamily: "var(--zg-font-accent)" }, children: t("planning.gantt", "Project Planning") }),
            /* @__PURE__ */ a("div", { style: { height: 2.5, width: 64, marginTop: 6, borderRadius: 9999, background: n.group } })
          ] }),
          w && /* @__PURE__ */ a(
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
              children: w
            }
          )
        ] }),
        /* @__PURE__ */ h("div", { className: "zg-header-controls", style: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "flex-end", flex: "1 1 560px" }, children: [
          i ? /* @__PURE__ */ h("div", { className: "zg-control-group", style: { display: "flex", alignItems: "center", gap: 6, padding: 4, borderRadius: 10, background: n.groupSoftStrong, border: `1px solid ${n.borderLight}` }, children: [
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
            /* @__PURE__ */ h("span", { style: { minWidth: 58, textAlign: "center", fontSize: 11, fontWeight: 700, color: n.textSecondary }, children: [
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
                onClick: u,
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
          ] }) : /* @__PURE__ */ h(Te, { children: [
            E && /* @__PURE__ */ h(
              "button",
              {
                onClick: Y,
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
            /* @__PURE__ */ a("div", { className: "zg-control-group", style: { display: "flex", padding: 4, borderRadius: 10, background: n.groupSoftStrong, border: `1px solid ${n.borderLight}` }, children: ["day", "week", "month"].map((c) => /* @__PURE__ */ a(
              "button",
              {
                className: `zg-segment-btn ${o === c ? "is-active" : "is-inactive"}`,
                onClick: () => r(c),
                style: {
                  padding: "6px 16px",
                  fontSize: 12,
                  fontWeight: 600,
                  borderRadius: 6,
                  transition: "all 0.2s",
                  border: "none",
                  cursor: "pointer",
                  ...o === c ? { background: n.surface, color: n.group, boxShadow: n.shadowTiny } : { background: "transparent", color: n.textSecondary }
                },
                children: c === "day" ? t("charts.gantt.month", "Mês") : c === "week" ? t("charts.gantt.week", "Semana") : t("charts.gantt.year", "Ano")
              },
              c
            )) })
          ] }),
          /* @__PURE__ */ a("div", { className: "zg-control-group zg-control-group--filters", style: { display: "flex", padding: 4, borderRadius: 10, gap: 2, background: n.groupSoftStrong, border: `1px solid ${n.borderLight}`, flexWrap: "wrap" }, children: [
            { type: "step", label: t("gantt.filter.steps", "Steps"), icon: /* @__PURE__ */ a("div", { style: { width: 10, height: 10, borderRadius: 2, background: be[0].bar, border: `1px solid ${be[0].barBorder}` } }) },
            { type: "milestone", label: t("gantt.filter.milestones", "Milestones"), icon: /* @__PURE__ */ a(Ke, { size: 11, style: { color: n.milestone } }) },
            { type: "event", label: t("gantt.filter.events", "Events"), icon: /* @__PURE__ */ a(qe, { size: 11, style: { color: n.event } }) },
            { type: "note", label: t("gantt.filter.notes", "Notes"), icon: /* @__PURE__ */ a(gn, { size: 11, style: { color: n.note } }) }
          ].map((c) => {
            const C = b.has(c.type);
            return /* @__PURE__ */ h(
              "button",
              {
                className: `zg-segment-btn ${C ? "is-active" : "is-inactive"}`,
                onClick: () => F(c.type),
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
                  ...C ? { background: n.surface, color: n.group, boxShadow: n.shadowTiny } : { background: "transparent", color: n.textSecondary, opacity: 0.58 }
                },
                children: [
                  c.icon,
                  /* @__PURE__ */ a("span", { children: c.label })
                ]
              },
              c.type
            );
          }) }),
          /* @__PURE__ */ h("div", { style: { position: "relative", display: "flex", alignItems: "center" }, children: [
            /* @__PURE__ */ a(
              An,
              {
                size: 13,
                style: { position: "absolute", left: 10, color: n.textSecondary, pointerEvents: "none" }
              }
            ),
            /* @__PURE__ */ a(
              "input",
              {
                ref: S,
                type: "text",
                value: V,
                onChange: (c) => D(c.target.value),
                placeholder: t("gantt.search.placeholder", "Buscar..."),
                style: {
                  paddingLeft: 30,
                  paddingRight: V ? 28 : 10,
                  paddingTop: 7,
                  paddingBottom: 7,
                  border: `1.5px solid ${V ? n.group : n.borderLight}`,
                  borderRadius: 8,
                  fontSize: 12,
                  outline: "none",
                  background: n.surface,
                  color: n.textPrimary,
                  width: 160,
                  transition: "border-color 0.18s, width 0.2s"
                },
                onFocus: (c) => {
                  c.currentTarget.style.width = "220px";
                },
                onBlur: (c) => {
                  V || (c.currentTarget.style.width = "160px");
                }
              }
            ),
            V && /* @__PURE__ */ a(
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
                children: /* @__PURE__ */ a(Pt, { size: 12 })
              }
            )
          ] }),
          /* @__PURE__ */ h(
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
                /* @__PURE__ */ a(Ln, { size: 14 }),
                "PNG"
              ]
            }
          ),
          A && /* @__PURE__ */ h("div", { ref: P, style: { position: "relative" }, children: [
            /* @__PURE__ */ h(
              "button",
              {
                className: "zg-new-action-btn",
                onClick: () => z((c) => !c),
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
                  /* @__PURE__ */ a(At, { size: 16 }),
                  /* @__PURE__ */ a("span", { children: t("charts.gantt.newAction", "New Action") }),
                  /* @__PURE__ */ a(Lt, { size: 14, style: { opacity: 0.7, transform: k ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
                ]
              }
            ),
            k && /* @__PURE__ */ a(
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
                onClick: (c) => c.stopPropagation(),
                children: [
                  {
                    label: t("gantt.newAction.step", "Step"),
                    icon: /* @__PURE__ */ a("div", { style: { width: 14, height: 14, borderRadius: 3, background: be[0].bar, border: `1.5px solid ${be[0].barBorder}`, flexShrink: 0 } }),
                    action: () => {
                      A(), z(!1);
                    }
                  },
                  {
                    label: t("gantt.newAction.milestone", "Milestone"),
                    icon: /* @__PURE__ */ a("div", { style: { width: 22, height: 22, borderRadius: "50%", background: n.milestoneRingSoft, border: `1.5px solid ${n.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Ke, { size: 11, style: { color: n.milestone } }) }),
                    action: () => {
                      I?.(), z(!1);
                    }
                  },
                  {
                    label: t("gantt.newAction.event", "Event"),
                    icon: /* @__PURE__ */ a("div", { style: { width: 22, height: 22, borderRadius: "50%", background: n.eventSoft, border: `1.5px solid ${n.eventBorderSoft}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(qe, { size: 11, style: { color: n.event } }) }),
                    action: () => {
                      M?.(), z(!1);
                    }
                  },
                  {
                    label: t("gantt.newAction.note", "Note"),
                    icon: /* @__PURE__ */ a("div", { style: { width: 16, height: 20, background: n.note, borderRadius: 2, boxShadow: n.shadowTiny, position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ a("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: n.stickyTape, borderRadius: 1 } }) }),
                    action: () => {
                      R?.(), z(!1);
                    }
                  }
                ].map((c) => /* @__PURE__ */ h(
                  "button",
                  {
                    onClick: c.action,
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
                      c.icon,
                      c.label
                    ]
                  },
                  c.label
                ))
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Ve(e, t, o) {
  let r = o.initialDeps ?? [], i, s = !0;
  function l() {
    var d, u, b;
    let v;
    o.key && ((d = o.debug) != null && d.call(o)) && (v = Date.now());
    const k = e();
    if (!(k.length !== r.length || k.some((Y, E) => r[E] !== Y)))
      return i;
    r = k;
    let P;
    if (o.key && ((u = o.debug) != null && u.call(o)) && (P = Date.now()), i = t(...k), o.key && ((b = o.debug) != null && b.call(o))) {
      const Y = Math.round((Date.now() - v) * 100) / 100, E = Math.round((Date.now() - P) * 100) / 100, V = E / 16, D = (p, S) => {
        for (p = String(p); p.length < S; )
          p = " " + p;
        return p;
      };
      console.info(
        `%c⏱ ${D(E, 5)} /${D(Y, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * V, 120)
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
function Ht(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Un = (e, t) => Math.abs(e - t) < 1.01, Gn = (e, t, o) => {
  let r;
  return function(...i) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, i), o);
  };
}, Vt = (e) => {
  const { offsetWidth: t, offsetHeight: o } = e;
  return { width: t, height: o };
}, Kn = (e) => e, qn = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), o = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let i = t; i <= o; i++)
    r.push(i);
  return r;
}, Zn = (e, t) => {
  const o = e.scrollElement;
  if (!o)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const i = (l) => {
    const { width: d, height: u } = l;
    t({ width: Math.round(d), height: Math.round(u) });
  };
  if (i(Vt(o)), !r.ResizeObserver)
    return () => {
    };
  const s = new r.ResizeObserver((l) => {
    const d = () => {
      const u = l[0];
      if (u?.borderBoxSize) {
        const b = u.borderBoxSize[0];
        if (b) {
          i({ width: b.inlineSize, height: b.blockSize });
          return;
        }
      }
      i(Vt(o));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(d) : d();
  });
  return s.observe(o, { box: "border-box" }), () => {
    s.unobserve(o);
  };
}, Ut = {
  passive: !0
}, Gt = typeof window > "u" ? !0 : "onscrollend" in window, Qn = (e, t) => {
  const o = e.scrollElement;
  if (!o)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let i = 0;
  const s = e.options.useScrollendEvent && Gt ? () => {
  } : Gn(
    r,
    () => {
      t(i, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (v) => () => {
    const { horizontal: k, isRtl: z } = e.options;
    i = k ? o.scrollLeft * (z && -1 || 1) : o.scrollTop, s(), t(i, v);
  }, d = l(!0), u = l(!1);
  o.addEventListener("scroll", d, Ut);
  const b = e.options.useScrollendEvent && Gt;
  return b && o.addEventListener("scrollend", u, Ut), () => {
    o.removeEventListener("scroll", d), b && o.removeEventListener("scrollend", u);
  };
}, Jn = (e, t, o) => {
  if (t?.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[o.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[o.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, eo = (e, {
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
class to {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var o, r, i;
      return ((i = (r = (o = this.targetWindow) == null ? void 0 : o.performance) == null ? void 0 : r.now) == null ? void 0 : i.call(r)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let o = null;
      const r = () => o || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : o = new this.targetWindow.ResizeObserver((i) => {
        i.forEach((s) => {
          const l = () => {
            const d = s.target, u = this.indexFromElement(d);
            if (!d.isConnected) {
              this.observer.unobserve(d);
              return;
            }
            this.shouldMeasureDuringScroll(u) && this.resizeItem(
              u,
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
        getItemKey: Kn,
        rangeExtractor: qn,
        onChange: () => {
        },
        measureElement: Jn,
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
    }, this.maybeNotify = Ve(
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
        const u = s.get(
          d.lane
        );
        if (u == null || d.end > u.end ? s.set(d.lane, d) : d.end < u.end && i.set(d.lane, !0), i.size === this.options.lanes)
          break;
      }
      return s.size === this.options.lanes ? Array.from(s.values()).sort((l, d) => l.end === d.end ? l.index - d.index : l.end - d.end)[0] : void 0;
    }, this.getMeasurementOptions = Ve(
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
    ), this.getMeasurements = Ve(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: o, paddingStart: r, scrollMargin: i, getItemKey: s, enabled: l, lanes: d }, u) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > o)
          for (const z of this.laneAssignments.keys())
            z >= o && this.laneAssignments.delete(z);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((z) => {
          this.itemSizeCache.set(z.key, z.size);
        }));
        const b = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === o && (this.lanesSettling = !1);
        const v = this.measurementsCache.slice(0, b), k = new Array(d).fill(
          void 0
        );
        for (let z = 0; z < b; z++) {
          const P = v[z];
          P && (k[P.lane] = z);
        }
        for (let z = b; z < o; z++) {
          const P = s(z), Y = this.laneAssignments.get(z);
          let E, V;
          if (Y !== void 0 && this.options.lanes > 1) {
            E = Y;
            const w = k[E], A = w !== void 0 ? v[w] : void 0;
            V = A ? A.end + this.options.gap : r + i;
          } else {
            const w = this.options.lanes === 1 ? v[z - 1] : this.getFurthestMeasurement(v, z);
            V = w ? w.end + this.options.gap : r + i, E = w ? w.lane : z % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(z, E);
          }
          const D = u.get(P), p = typeof D == "number" ? D : this.options.estimateSize(z), S = V + p;
          v[z] = {
            index: z,
            start: V,
            size: p,
            end: S,
            key: P,
            lane: E
          }, k[E] = z;
        }
        return this.measurementsCache = v, v;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ve(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (o, r, i, s) => this.range = o.length > 0 && r > 0 ? no({
        measurements: o,
        outerSize: r,
        scrollOffset: i,
        lanes: s
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ve(
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
    }, this.getVirtualItems = Ve(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (o, r) => {
        const i = [];
        for (let s = 0, l = o.length; s < l; s++) {
          const d = o[s], u = r[d];
          i.push(u);
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
        return Ht(
          r[mn(
            0,
            r.length - 1,
            (i) => Ht(r[i]).start,
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
      const [l, d] = s, u = this.now();
      this.scrollState = {
        index: o,
        align: d,
        behavior: i,
        startedAt: u,
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
    if (!l && Un(i, this.getScrollOffset())) {
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
const mn = (e, t, o, r) => {
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
function no({
  measurements: e,
  outerSize: t,
  scrollOffset: o,
  lanes: r
}) {
  const i = e.length - 1, s = (u) => e[u].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: i
    };
  let l = mn(
    0,
    i,
    s,
    o
  ), d = l;
  if (r === 1)
    for (; d < i && e[d].end < o + t; )
      d++;
  else if (r > 1) {
    const u = Array(r).fill(0);
    for (; d < i && u.some((v) => v < o + t); ) {
      const v = e[d];
      u[v.lane] = v.end, d++;
    }
    const b = Array(r).fill(o + t);
    for (; l >= 0 && b.some((v) => v >= o); ) {
      const v = e[l];
      b[v.lane] = v.start, l--;
    }
    l = Math.max(0, l - l % r), d = Math.min(i, d + (r - 1 - d % r));
  }
  return { startIndex: l, endIndex: d };
}
const Kt = typeof document < "u" ? kt.useLayoutEffect : kt.useEffect;
function oo({
  useFlushSync: e = !0,
  ...t
}) {
  const o = kt.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (s, l) => {
      var d;
      e && l ? Xn(o) : o(), (d = t.onChange) == null || d.call(t, s, l);
    }
  }, [i] = kt.useState(
    () => new to(r)
  );
  return i.setOptions(r), Kt(() => i._didMount(), []), Kt(() => i._willUpdate()), i;
}
function Wt(e) {
  return oo({
    observeElementRect: Zn,
    observeElementOffset: Qn,
    scrollToFn: eo,
    ...e
  });
}
const yn = 864e5, ue = (e, t) => new Date(e.getTime() + t * yn), Ie = (e, t) => Math.round((t.getTime() - e.getTime()) / yn), qt = (e) => new Date(e.getFullYear(), e.getMonth(), 1), bt = (e) => new Date(e.getFullYear(), e.getMonth() + 1, 0), bn = (e) => {
  if (!e) return "en-US";
  try {
    return new Intl.DateTimeFormat(e).resolvedOptions().locale;
  } catch {
    return "en-US";
  }
}, ye = (e, t = "en-US") => new Intl.DateTimeFormat(bn(t), {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
}).format(e), Rt = (e, t = "en") => new Intl.DateTimeFormat(bn(t), { month: "long" }).format(e).toUpperCase(), ro = (e) => {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()));
  t.setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7));
  const o = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t.getTime() - o.getTime()) / 864e5 + 1) / 7);
};
function io() {
  const {
    props: e,
    t,
    displayRows: o,
    leftBodyRef: r,
    handleLeftScroll: i,
    toggleProject: s,
    toggleGroup: l,
    hoveredTaskId: d,
    setHoveredTaskId: u,
    selectedTaskId: b,
    setSelectedTaskId: v,
    delayedIds: k,
    criticalIds: z,
    relatedIds: P,
    setActivePinboardTask: Y,
    groupProgress: E,
    sidebarW: V
  } = je(), D = (M) => ({
    id: M.id,
    name: M.name,
    start: M.start,
    end: M.end,
    type: M.originalType === "step" ? "task" : "milestone",
    progress: M.progress
  }), p = Wt({
    count: o.length,
    getScrollElement: () => r.current,
    estimateSize: () => de,
    overscan: 12
  }), S = p.getVirtualItems(), w = Math.max(p.getTotalSize(), 400) + 80, A = le(
    () => o.filter((M) => M.kind === "task").map((M) => M.task.id),
    [o]
  ), I = ee((M, R) => {
    const F = A.indexOf(M);
    if (F < 0) return;
    const c = Math.min(Math.max(0, F + R), A.length - 1), C = A[c];
    C && v(C);
  }, [A, v]);
  return /* @__PURE__ */ h("div", { style: { width: V, flexShrink: 0, borderRight: `1px solid ${n.border}`, display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ h(
      "div",
      {
        style: {
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          height: Hn,
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
        onClick: () => v(null),
        className: "zg-no-scrollbar",
        style: { overflowY: "auto", overflowX: "hidden", flex: 1 },
        role: "grid",
        "aria-rowcount": o.length,
        children: /* @__PURE__ */ a("div", { style: { height: w, position: "relative" }, children: S.map((M) => {
          const R = o[M.index];
          if (!R) return null;
          const F = {
            position: "absolute",
            top: M.start,
            left: 0,
            width: "100%",
            height: de
          };
          if (R.kind === "projectHeader")
            return /* @__PURE__ */ a(
              "div",
              {
                style: {
                  ...F,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  borderBottom: `1.5px solid ${n.groupBorderWeak}`,
                  background: n.groupSoft
                },
                onClick: () => s(R.projectId),
                onKeyDown: (J) => {
                  (J.key === "Enter" || J.key === " ") && (J.preventDefault(), s(R.projectId));
                },
                role: "button",
                tabIndex: 0,
                "aria-label": `Toggle project ${R.projectTitle}`,
                "aria-expanded": !R.collapsed,
                children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  R.collapsed ? /* @__PURE__ */ a(Xt, { size: 15, style: { color: n.group, flexShrink: 0 } }) : /* @__PURE__ */ a(Lt, { size: 15, style: { color: n.group, flexShrink: 0 } }),
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
                  }, children: R.projectTitle }),
                  E.byProject.has(R.projectId) && /* @__PURE__ */ h(Te, { children: [
                    /* @__PURE__ */ a("div", { style: { flex: 1, height: 4, background: "rgba(26,60,48,0.2)", borderRadius: 2, overflow: "hidden", minWidth: 40 }, children: /* @__PURE__ */ a("div", { style: {
                      width: `${E.byProject.get(R.projectId)}%`,
                      height: "100%",
                      background: n.group,
                      borderRadius: 2
                    } }) }),
                    /* @__PURE__ */ h("span", { style: { fontSize: 10, fontWeight: 700, color: n.group, flexShrink: 0, marginRight: 4 }, children: [
                      E.byProject.get(R.projectId),
                      "%"
                    ] })
                  ] })
                ] })
              },
              `ph-${R.projectId}`
            );
          if (R.kind === "group") {
            const J = R.projectId ? `${R.projectId}-${R.groupType}` : R.groupType;
            return /* @__PURE__ */ a(
              "div",
              {
                style: {
                  ...F,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  borderBottom: `1px solid ${n.border}`,
                  background: n.headerBg
                },
                onClick: () => l(J),
                onKeyDown: (ne) => {
                  (ne.key === "Enter" || ne.key === " ") && (ne.preventDefault(), l(J));
                },
                role: "button",
                tabIndex: 0,
                "aria-label": `Toggle group ${R.label}`,
                "aria-expanded": !R.collapsed,
                children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  R.collapsed ? /* @__PURE__ */ a(Xt, { size: 14, style: { color: n.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ a(Lt, { size: 14, style: { color: n.textSecondary, flexShrink: 0 } }),
                  /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: n.textTitle, flexShrink: 0 }, children: t(`gantt.group.${R.groupType}`, R.label) }),
                  /* @__PURE__ */ a("span", { style: { fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 9999, background: n.groupSoftStrong, color: n.textSecondary, flexShrink: 0 }, children: R.count }),
                  R.groupType === "step" && E.byType.has("step") && /* @__PURE__ */ h(Te, { children: [
                    /* @__PURE__ */ a("div", { style: { flex: 1, height: 4, background: n.borderLight, borderRadius: 2, overflow: "hidden", minWidth: 40 }, children: /* @__PURE__ */ a("div", { style: {
                      width: `${E.byType.get("step")}%`,
                      height: "100%",
                      background: n.group,
                      borderRadius: 2,
                      transition: "width 0.3s"
                    } }) }),
                    /* @__PURE__ */ h("span", { style: { fontSize: 10, fontWeight: 700, color: n.textSecondary, flexShrink: 0 }, children: [
                      E.byType.get("step"),
                      "%"
                    ] })
                  ] })
                ] })
              },
              `g-${J}`
            );
          }
          const c = R.task, C = b === c.id, y = d === c.id, m = c.originalType !== "step", $ = k.has(c.id), X = z.has(c.id), Z = b !== null && c.id !== b && !P.has(c.id), Q = b !== null && P.has(c.id), G = $ ? n.dangerBgSoft : C ? n.groupLight : Q ? n.groupLightStrong : y ? n.pageBg : n.surface;
          return /* @__PURE__ */ h(
            "div",
            {
              style: {
                ...F,
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                cursor: "pointer",
                transition: "opacity 0.18s, background 0.15s",
                borderBottom: `1px solid ${n.borderLight}`,
                background: G,
                borderLeft: C ? `3px solid ${n.group}` : Q ? `3px solid ${n.groupGlow}` : X ? `3px solid ${n.today}` : void 0,
                opacity: Z ? 0.3 : 1
              },
              onClick: (J) => {
                J.stopPropagation(), v((ne) => ne === c.id ? null : c.id);
              },
              onDoubleClick: () => e.onTaskClick?.(D(c)),
              onMouseEnter: () => u(c.id),
              onMouseLeave: () => u(null),
              onKeyDown: (J) => {
                if (J.key === "Enter") {
                  J.preventDefault(), e.onTaskClick?.(D(c));
                  return;
                }
                if (J.key === " ") {
                  J.preventDefault(), v((ne) => ne === c.id ? null : c.id);
                  return;
                }
                if (J.key === "ArrowDown") {
                  J.preventDefault(), I(c.id, 1);
                  return;
                }
                J.key === "ArrowUp" && (J.preventDefault(), I(c.id, -1));
              },
              role: "button",
              tabIndex: 0,
              "aria-selected": C,
              "aria-label": `Task ${c.name}`,
              children: [
                /* @__PURE__ */ h("div", { style: { flex: 1, display: "flex", alignItems: "center", gap: 8, minWidth: 0, paddingRight: 8 }, children: [
                  c.originalType === "step" && /* @__PURE__ */ a("div", { style: { flexShrink: 0, borderRadius: 4, width: 14, height: 14, background: be[c.colorIdx ?? 0].bar, border: `1.5px solid ${be[c.colorIdx ?? 0].barBorder}` } }),
                  c.originalType === "milestone" && /* @__PURE__ */ a("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: n.milestoneRingSoft, border: `1.5px solid ${n.milestoneRing}` }, children: /* @__PURE__ */ a(Ke, { size: 11, style: { color: n.milestone } }) }),
                  c.originalType === "event" && /* @__PURE__ */ a("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: n.eventSoft, border: `1.5px solid ${n.eventBorderSoft}` }, children: /* @__PURE__ */ a(qe, { size: 11, style: { color: n.event } }) }),
                  c.originalType === "note" && /* @__PURE__ */ a("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4, width: 22, height: 22, background: "rgba(254,240,138,0.4)", border: "1.5px solid rgba(250,204,21,0.5)" }, children: /* @__PURE__ */ a(gn, { size: 11, style: { color: n.note } }) }),
                  /* @__PURE__ */ a("div", { style: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }, children: /* @__PURE__ */ a(
                    "span",
                    {
                      style: {
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.25,
                        color: C ? n.group : $ ? n.today : n.textPrimary,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: c.name
                    }
                  ) }),
                  (c.attachedNotes?.length || 0) > 0 && /* @__PURE__ */ h(
                    "button",
                    {
                      className: "zg-note-badge-btn",
                      "aria-label": `Open ${c.attachedNotes?.length} linked notes`,
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
                      onClick: (J) => {
                        J.stopPropagation(), Y(c);
                      },
                      children: [
                        /* @__PURE__ */ a(ct, { size: 12 }),
                        c.attachedNotes?.length
                      ]
                    }
                  ),
                  $ && /* @__PURE__ */ a(Fn, { size: 12, style: { flexShrink: 0, color: n.today } })
                ] }),
                /* @__PURE__ */ a("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: $ ? n.today : n.textMuted }, children: ye(c.start, e.locale) }),
                /* @__PURE__ */ a("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: $ ? n.today : n.textMuted }, children: m ? "—" : ye(c.end, e.locale) })
              ]
            },
            c.id
          );
        }) })
      }
    )
  ] });
}
function so(e, t, o = "en", r) {
  const s = r ?? (t === "day" ? dt : t === "week" ? pn : fn), l = (S, w) => {
    const A = [], I = (/* @__PURE__ */ new Date()).toDateString();
    let M = -1;
    for (let R = 0; R < w; R++) {
      const F = ue(S, R), c = F.toDateString() === I;
      c && (M = R), A.push({
        date: F,
        isToday: c,
        isWeekend: F.getDay() === 0 || F.getDay() === 6
      });
    }
    return { daysArr: A, todayIndex: M };
  };
  if (e.length === 0) {
    const S = /* @__PURE__ */ new Date();
    if (t === "week") {
      const F = ue(S, -45), c = ue(S, 45), C = Ie(F, c) + 1, { daysArr: y, todayIndex: m } = l(F, C), $ = [];
      let X = new Date(F.getFullYear(), F.getMonth(), 1);
      for (; X <= c; ) {
        const Z = bt(X), Q = Z > c ? c : Z, G = X < F ? F : X, J = Ie(F, G), ne = Ie(G, Q) + 1;
        $.push({
          date: new Date(X),
          label: `${Rt(X, o)} ${X.getFullYear()}`,
          startDay: J,
          days: ne,
          width: ne * s
        }), X = new Date(X.getFullYear(), X.getMonth() + 1, 1);
      }
      return {
        start: F,
        end: c,
        totalDays: C,
        dayWidth: s,
        totalWidth: C * s,
        months: $,
        years: [],
        days: y,
        todayIndex: m
      };
    }
    const w = qt(S), A = bt(S), I = Ie(w, A) + 1, { daysArr: M, todayIndex: R } = l(w, I);
    return {
      start: w,
      end: A,
      totalDays: I,
      dayWidth: s,
      totalWidth: I * s,
      months: [{ date: w, label: `${Rt(w, o)} ${w.getFullYear()}`, startDay: 0, days: I, width: I * s }],
      years: [{ label: w.getFullYear().toString(), width: I * s }],
      days: M,
      todayIndex: R
    };
  }
  let d = new Date(e[0].start), u = new Date(e[0].end);
  e.forEach((S) => {
    S.start < d && (d = new Date(S.start)), S.end > u && (u = new Date(S.end));
  });
  const b = t === "month" ? 180 : t === "week" ? 45 : 30, v = t === "month" ? 180 : t === "week" ? 45 : 30, k = qt(ue(d, -b)), z = bt(ue(u, v)), P = Ie(k, z) + 1, Y = [];
  let E = new Date(k);
  for (; E <= z; ) {
    const S = bt(E), w = S > z ? z : S, A = Ie(k, E), I = Ie(E, w) + 1;
    Y.push({
      date: new Date(E),
      label: `${Rt(E, o)} ${E.getFullYear()}`,
      startDay: A,
      days: I,
      width: I * s
    }), E = new Date(E.getFullYear(), E.getMonth() + 1, 1);
  }
  const { daysArr: V, todayIndex: D } = l(k, P), p = [];
  if (t === "month") {
    let S = "", w = 0;
    for (const A of Y) {
      const I = A.date.getFullYear().toString();
      I !== S ? (S && p.push({ label: S, width: w * s }), S = I, w = A.days) : w += A.days;
    }
    S && p.push({ label: S, width: w * s });
  }
  return { start: k, end: z, totalDays: P, dayWidth: s, totalWidth: P * s, months: Y, years: p, days: V, todayIndex: D };
}
function Fe(e, t) {
  return Ie(t.start, e) * t.dayWidth;
}
function ao({
  task: e,
  x: t,
  y: o,
  w: r,
  progW: i,
  isHov: s,
  isDrag: l,
  isResize: d,
  isCritical: u,
  isDelayed: b,
  isConnectTarget: v,
  showDots: k,
  isBarDimmed: z,
  isBarHighlighted: P,
  commonEvents: Y,
  handleResizeMouseDown: E,
  handleResizeTouchStart: V,
  handleConnectDotMouseDown: D,
  handleConnectDotTouchStart: p
}) {
  const { timeline: S, viewMode: w, props: A } = je();
  if (e.originalType === "step") {
    const I = be[e.colorIdx ?? 0], M = o + (de - Se) / 2, R = e.barColor || I.bar, F = e.progressColor || I.progress, c = e.borderColor || I.barBorder, y = A.showLabelOutside !== !1 && r < 55, m = u || b ? n.today : n.textPrimary, $ = !!(e.previsionStart && e.previsionEnd), X = $ ? Fe(e.previsionStart, S) : 0, Z = $ ? Math.max(Fe(e.previsionEnd, S) - X, w === "month" ? S.dayWidth : 6) : 0, Q = M + Se + 3;
    return /* @__PURE__ */ h(Te, { children: [
      $ && /* @__PURE__ */ a(
        "div",
        {
          title: `Previsto: ${ye(e.previsionStart, A.locale)} → ${ye(e.previsionEnd, A.locale)}`,
          style: {
            position: "absolute",
            left: X,
            top: Q,
            width: Z,
            height: 5,
            borderRadius: 3,
            background: `color-mix(in srgb, ${F}, transparent 80%)`,
            border: `1.5px solid color-mix(in srgb, ${F}, transparent 60%)`,
            boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${F}, transparent 85%)`,
            pointerEvents: "none",
            zIndex: 5
          }
        }
      ),
      /* @__PURE__ */ h(
        "div",
        {
          "data-task-id": e.id,
          ...Y,
          role: "button",
          tabIndex: 0,
          "aria-label": `Task bar ${e.name}`,
          style: {
            position: "absolute",
            left: t,
            top: M,
            width: r,
            height: Se,
            borderRadius: Se / 2,
            background: b ? n.delayedTaskBg : R,
            border: u ? `2px solid ${n.today}` : b ? `1.5px solid ${n.todayStrong}` : `1.5px solid ${c}`,
            cursor: l || d ? "grabbing" : "grab",
            zIndex: s || v ? 20 : 10,
            boxShadow: v ? `0 0 0 2px ${n.group}, 0 4px 16px ${n.groupGlowSoft}` : u ? `0 0 0 1px ${n.todayMid}, 0 3px 12px ${n.todaySoft}` : P && !s ? `0 0 0 2px ${n.groupGlowStrong}, 0 3px 14px ${n.groupGlowSoft}` : s ? `0 3px 12px color-mix(in srgb, ${F}, transparent 85%)` : "none",
            transform: s ? "scaleY(1.06)" : "scaleY(1)",
            opacity: z ? 0.15 : 1,
            transition: l || d ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
            overflow: "visible"
          },
          children: [
            /* @__PURE__ */ h("div", { style: { position: "absolute", left: 0, top: 0, width: r, height: "100%", borderRadius: Se / 2, overflow: "hidden", pointerEvents: "none" }, children: [
              /* @__PURE__ */ a("div", { style: {
                position: "absolute",
                left: 0,
                top: 0,
                width: i,
                height: "100%",
                background: b ? n.today : F,
                borderRadius: `${Se / 2}px 0 0 ${Se / 2}px`,
                transition: l || d ? "none" : "width 0.3s"
              } }),
              r > 50 && /* @__PURE__ */ h("span", { style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: e.progress > 50 ? n.white : b ? n.today : F,
                zIndex: 1,
                pointerEvents: "none"
              }, children: [
                Math.round(e.progress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ a("div", { onMouseDown: (G) => E(G, e, "left"), onTouchStart: (G) => V(G, e, "left"), style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${Se / 2}px 0 0 ${Se / 2}px` } }),
            /* @__PURE__ */ a("div", { onMouseDown: (G) => E(G, e, "right"), onTouchStart: (G) => V(G, e, "right"), style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${Se / 2}px ${Se / 2}px 0` } }),
            k && /* @__PURE__ */ h(Te, { children: [
              /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (G) => D(G, e, "left"), onTouchStart: (G) => p(G, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
              /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (G) => D(G, e, "right"), onTouchStart: (G) => p(G, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } })
            ] })
          ]
        }
      ),
      y && /* @__PURE__ */ a(
        "span",
        {
          style: {
            position: "absolute",
            left: t + r + 6,
            top: M,
            height: Se,
            display: "flex",
            alignItems: "center",
            fontSize: 11,
            fontWeight: 600,
            color: m,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            maxWidth: 120,
            overflow: "hidden",
            textOverflow: "ellipsis",
            opacity: z ? 0.15 : 1,
            transition: "opacity 0.18s"
          },
          title: e.name,
          children: e.name
        }
      )
    ] });
  }
  if (e.originalType === "milestone") {
    const I = o + (de - He) / 2;
    return /* @__PURE__ */ h(
      "div",
      {
        "data-task-id": e.id,
        ...Y,
        role: "button",
        tabIndex: 0,
        "aria-label": `Milestone ${e.name}`,
        style: {
          position: "absolute",
          left: t - 6,
          top: I,
          height: He,
          minWidth: Bt,
          borderRadius: He / 2,
          background: u ? n.criticalPillBg : n.milestonePillBg,
          border: v ? `2px solid ${n.group}` : u ? `2px solid ${n.today}` : `1.5px solid ${n.milestoneRing}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: l ? "grabbing" : "grab",
          zIndex: s || v ? 20 : 10,
          boxShadow: v ? `0 0 0 2px ${n.group}, 0 4px 16px ${n.groupGlowSoft}` : u ? `0 0 0 1px ${n.todayMid}, 0 3px 12px ${n.todaySoft}` : P && !s ? `0 0 0 2px ${n.groupGlowStrong}, 0 3px 14px ${n.groupGlowSoft}` : s ? `0 3px 12px ${n.milestoneRingSoft}` : n.shadowSoft,
          opacity: z ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: s ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ a("div", { style: { width: 20, height: 20, borderRadius: "50%", background: u ? n.today : n.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Ke, { size: 11, color: n.white, strokeWidth: 2.5 }) }),
          /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: u ? n.today : n.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: e.name }),
          e.progress >= 100 && /* @__PURE__ */ a("span", { style: { fontSize: 9, fontWeight: 700, color: n.white, background: n.milestoneRing, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          k && /* @__PURE__ */ h(Te, { children: [
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (M) => D(M, e, "left"), onTouchStart: (M) => p(M, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (M) => D(M, e, "right"), onTouchStart: (M) => p(M, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (e.originalType === "event") {
    const I = o + (de - He) / 2;
    return /* @__PURE__ */ h(
      "div",
      {
        "data-task-id": e.id,
        ...Y,
        role: "button",
        tabIndex: 0,
        "aria-label": `Event ${e.name}`,
        style: {
          position: "absolute",
          left: t - 6,
          top: I,
          height: He,
          minWidth: Bt,
          borderRadius: He / 2,
          background: u ? n.criticalPillBg : n.eventPillBg,
          border: v ? `2px solid ${n.group}` : u ? `2px solid ${n.today}` : `1.5px solid ${n.event}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: l ? "grabbing" : "grab",
          zIndex: s || v ? 20 : 10,
          boxShadow: v ? `0 0 0 2px ${n.group}, 0 4px 16px ${n.groupGlowSoft}` : u ? `0 0 0 1px ${n.todayMid}, 0 3px 12px ${n.todaySoft}` : P && !s ? `0 0 0 2px ${n.groupGlowStrong}, 0 3px 14px ${n.groupGlowSoft}` : s ? `0 3px 12px ${n.eventBorderSoft}` : n.shadowSoft,
          opacity: z ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: s ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ a("div", { style: { width: 20, height: 20, borderRadius: "50%", background: u ? n.today : n.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(qe, { size: 11, color: n.white, strokeWidth: 2.5 }) }),
          /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: u ? n.today : n.event, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: e.name }),
          e.progress >= 100 && /* @__PURE__ */ a("span", { style: { fontSize: 9, fontWeight: 700, color: n.white, background: n.event, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          k && /* @__PURE__ */ h(Te, { children: [
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (M) => D(M, e, "left"), onTouchStart: (M) => p(M, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (M) => D(M, e, "right"), onTouchStart: (M) => p(M, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (e.originalType === "note") {
    const M = o + 4, R = e.noteColor || n.noteDefaultBg, F = e.filesCount || 0;
    return /* @__PURE__ */ h(
      "div",
      {
        "data-task-id": e.id,
        ...Y,
        role: "button",
        tabIndex: 0,
        "aria-label": `Note ${e.name}`,
        style: {
          position: "absolute",
          left: t,
          top: M,
          width: 148,
          minHeight: 72,
          background: R,
          borderRadius: 3,
          cursor: l ? "grabbing" : "grab",
          zIndex: s || v ? 20 : 10,
          boxShadow: v ? `0 0 0 2px ${n.group}, ${n.shadowStickyStrong}` : P && !s ? `0 0 0 2px ${n.groupGlowStrong}, ${n.shadowStickyHover}` : s ? n.shadowStickyHover : n.shadowSticky,
          opacity: z ? 0.2 : 1,
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
          /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 2 }, children: [
            /* @__PURE__ */ a("span", { style: { fontSize: 9, fontWeight: 500, color: n.inkSoft4 }, children: ye(e.start, A.locale) }),
            F > 0 && /* @__PURE__ */ h("span", { style: {
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 9,
              color: n.inkSoft4
            }, children: [
              /* @__PURE__ */ a(ct, { size: 8 }),
              " ",
              F
            ] })
          ] }),
          k && /* @__PURE__ */ h(Te, { children: [
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (c) => D(c, e, "left"), onTouchStart: (c) => p(c, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (c) => D(c, e, "right"), onTouchStart: (c) => p(c, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  return null;
}
function lo({ arrows: e }) {
  const {
    arrows: t,
    hoveredTaskId: o,
    selectedTaskId: r,
    relatedIds: i
  } = je(), s = e || t, l = {
    FS: n.group,
    SS: n.event,
    FF: "var(--zg-dep-ff, #7c3aed)",
    SF: "var(--zg-dep-sf, #0369a1)"
  };
  return /* @__PURE__ */ a(Te, { children: s.map((d, u) => {
    const b = o === d.predId || o === d.succId, v = !r || d.predId === r || d.succId === r || i.has(d.predId) || i.has(d.succId), k = r !== null && v, z = l[d.depType] ?? n.arrow, P = b ? n.arrowHover : k ? z : n.arrow;
    return /* @__PURE__ */ h("g", { style: { opacity: v ? k ? 1 : void 0 : 0.08, transition: "opacity 0.18s" }, children: [
      /* @__PURE__ */ a(
        "path",
        {
          d: d.path,
          fill: "none",
          stroke: P,
          strokeWidth: k ? 2.5 : b ? 2 : 1.5,
          style: { transition: "stroke 0.2s, stroke-width 0.2s" }
        }
      ),
      /* @__PURE__ */ a(
        "polygon",
        {
          points: `${d.headX},${d.headY} ${d.headX - 6},${d.headY - 4} ${d.headX - 6},${d.headY + 4}`,
          fill: P,
          style: { transition: "fill 0.2s" }
        }
      ),
      d.lag !== 0 && /* @__PURE__ */ h("g", { children: [
        /* @__PURE__ */ a(
          "rect",
          {
            x: d.headX - 40,
            y: d.headY - 10,
            width: 32,
            height: 14,
            rx: 4,
            fill: "var(--zg-surface, #fff)",
            stroke: P,
            strokeWidth: 0.8,
            opacity: v ? 1 : 0
          }
        ),
        /* @__PURE__ */ a(
          "text",
          {
            x: d.headX - 24,
            y: d.headY + 1,
            fontSize: 8,
            fontWeight: 700,
            fill: P,
            textAnchor: "middle",
            opacity: v ? 1 : 0,
            style: { pointerEvents: "none", userSelect: "none" },
            children: d.lag > 0 ? `+${d.lag}d` : `${d.lag}d`
          }
        )
      ] })
    ] }, u);
  }) });
}
const Zt = (e, t) => Math.round((t.getTime() - e.getTime()) / 864e5) + 1;
function co({ task: e, x: t, y: o }) {
  const { props: r, t: i } = je(), s = () => {
    switch (e.originalType) {
      case "step":
        return /* @__PURE__ */ a("div", { style: {
          width: 14,
          height: 14,
          borderRadius: 3,
          background: be[e.colorIdx ?? 0].bar,
          border: `1.5px solid ${be[e.colorIdx ?? 0].barBorder}`,
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
        }, children: /* @__PURE__ */ a(Ke, { size: 10, color: n.white, strokeWidth: 2.5 }) });
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
        }, children: /* @__PURE__ */ a(qe, { size: 10, color: n.white, strokeWidth: 2.5 }) });
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
        return /* @__PURE__ */ a(Bn, { size: 14 });
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
  }, children: /* @__PURE__ */ h(
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
        /* @__PURE__ */ h("div", { style: {
          padding: "12px 16px",
          borderBottom: "1px solid var(--zg-border-light)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(255,255,255,0.4)"
        }, children: [
          s(),
          /* @__PURE__ */ h("div", { style: { display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }, children: [
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
        /* @__PURE__ */ h("div", { style: { padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 }, children: [
          e.projectTitle && /* @__PURE__ */ h("div", { style: {
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
          e.originalType === "step" ? /* @__PURE__ */ h("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
            e.previsionStart && e.previsionEnd && /* @__PURE__ */ h("div", { style: { background: n.headerBg, borderRadius: 8, padding: "8px 10px", border: `1px solid ${n.borderLight}` }, children: [
              /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }, children: [
                /* @__PURE__ */ a(Ft, { size: 12, style: { color: n.textSecondary } }),
                /* @__PURE__ */ a("span", { style: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: n.textSecondary }, children: i("gantt.tooltip.planned", "Planned") })
              ] }),
              /* @__PURE__ */ h("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11 }, children: [
                /* @__PURE__ */ h("span", { style: { color: n.textSecondary }, children: [
                  ye(e.previsionStart, r.locale),
                  " → ",
                  ye(e.previsionEnd, r.locale)
                ] }),
                /* @__PURE__ */ h("span", { style: { fontWeight: 700, color: n.textPrimary }, children: [
                  Zt(e.previsionStart, e.previsionEnd),
                  "d"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ h("div", { style: {
              background: e.hasActualDates ? "color-mix(in srgb, var(--zg-group-light), transparent 90%)" : "transparent",
              borderRadius: 8,
              padding: e.hasActualDates ? "8px 10px" : "0",
              border: e.hasActualDates ? "1px solid color-mix(in srgb, var(--zg-group-light), transparent 70%)" : "none"
            }, children: [
              !e.hasActualDates && /* @__PURE__ */ a("div", { style: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: n.textMuted, marginBottom: 4 }, children: i("gantt.tooltip.plannedInUse", "Planned (in use)") }),
              /* @__PURE__ */ h("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
                /* @__PURE__ */ h("span", { style: { fontWeight: 600, color: n.textPrimary }, children: [
                  ye(e.start, r.locale),
                  " → ",
                  ye(e.end, r.locale)
                ] }),
                /* @__PURE__ */ h("span", { style: { fontWeight: 700, color: n.group }, children: [
                  Zt(e.start, e.end),
                  "d"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ h("div", { style: { marginTop: 4 }, children: [
              /* @__PURE__ */ h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }, children: [
                /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: n.textSecondary }, children: i("charts.gantt.progress", "Progress") }),
                /* @__PURE__ */ h("span", { style: { fontSize: 12, fontWeight: 800, color: n.group }, children: [
                  Math.round(e.progress),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ a("div", { style: { width: "100%", height: 6, background: n.borderLight, borderRadius: 3, overflow: "hidden" }, children: /* @__PURE__ */ a("div", { style: {
                width: `${e.progress}%`,
                height: "100%",
                background: be[e.colorIdx ?? 0].progress,
                borderRadius: 3
              } }) })
            ] })
          ] }) : /* @__PURE__ */ h("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
            /* @__PURE__ */ h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
                /* @__PURE__ */ a(Ft, { size: 14, style: { color: n.textMuted } }),
                /* @__PURE__ */ a("span", { style: { fontSize: 12, fontWeight: 600, color: n.textPrimary }, children: ye(e.start, r.locale) })
              ] }),
              e.originalType === "note" && (e.filesCount || 0) > 0 && /* @__PURE__ */ h("div", { style: {
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
            e.attachedNotes && e.attachedNotes.length > 0 && /* @__PURE__ */ h("div", { style: {
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
              /* @__PURE__ */ h("span", { style: { fontSize: 11, fontWeight: 700, color: n.noteBadgeText }, children: [
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
const xt = (e) => ({
  id: e.id,
  name: e.name,
  start: e.start,
  end: e.end,
  type: e.originalType === "step" ? "task" : e.originalType,
  progress: e.progress
}), vt = (e, t) => {
  switch (e) {
    case "step":
      return /* @__PURE__ */ a("div", { style: { width: 12, height: 12, borderRadius: 2, background: be[t ?? 0].bar, border: `1.5px solid ${be[t ?? 0].barBorder}`, flexShrink: 0 } });
    case "milestone":
      return /* @__PURE__ */ a("div", { style: { width: 16, height: 16, borderRadius: "50%", background: n.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Ke, { size: 8, color: n.white }) });
    case "event":
      return /* @__PURE__ */ a("div", { style: { width: 16, height: 16, borderRadius: "50%", background: n.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(qe, { size: 8, color: n.white }) });
    case "note":
      return /* @__PURE__ */ a("div", { style: { width: 12, height: 14, background: n.note, borderRadius: 2, boxShadow: n.shadowSmall, flexShrink: 0 } });
    default:
      return null;
  }
};
function uo() {
  const {
    props: e,
    t,
    viewMode: o,
    isInfiniteCanvas: r,
    timeline: i,
    displayRows: s,
    dragState: l,
    resizeState: d,
    connectState: u,
    pendingConnection: b,
    setPendingConnection: v,
    depModalType: k,
    setDepModalType: z,
    depModalLag: P,
    setDepModalLag: Y,
    depCreating: E,
    deletingDepId: V,
    setDeletingDepId: D,
    chartMenu: p,
    setChartMenu: S,
    rightBodyRef: w,
    timeHeaderRef: A,
    handleChartMouseDown: I,
    handleChartTouchStart: M,
    handleChartWheel: R,
    openChartMenu: F,
    handleRightScroll: c,
    hoveredTaskId: C,
    setHoveredTaskId: y,
    selectedTaskId: m,
    setSelectedTaskId: $,
    tooltip: X,
    setTooltip: Z,
    popupState: Q,
    setPopupState: G,
    handleBarClick: J,
    arrows: ne,
    criticalIds: ce,
    delayedIds: Ee,
    relatedIds: ae,
    handleBarMouseDown: De,
    handleBarTouchStart: Ze,
    handleResizeMouseDown: Et,
    handleResizeTouchStart: Ne,
    handleConnectDotMouseDown: Ye,
    handleConnectDotTouchStart: ut,
    handleCreateDependency: Qe,
    nonWorkingDaySet: gt
  } = je(), {
    onViewStage: Je,
    onEditStage: ht,
    onDeleteStage: et,
    onDeleteDependency: tt,
    onAddNewStage: nt,
    onAddMilestone: pt,
    onAddEvent: ot,
    onAddNote: ft
  } = e, rt = Wt({
    count: s.length,
    getScrollElement: () => w.current,
    estimateSize: () => de,
    overscan: 12
  }), Xe = rt.getVirtualItems(), Pe = Wt({
    horizontal: !0,
    count: i.days.length,
    getScrollElement: () => w.current,
    estimateSize: () => i.dayWidth,
    overscan: 10
  }).getVirtualItems(), ke = Math.max(rt.getTotalSize(), 400) + 80, j = le(() => {
    const T = /* @__PURE__ */ new Set();
    for (const H of Xe) {
      const U = s[H.index];
      U?.kind === "task" && T.add(U.task.id);
    }
    return T;
  }, [Xe, s]), B = le(
    () => ne.filter((T) => j.has(T.predId) || j.has(T.succId)),
    [ne, j]
  ), Re = () => G({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  return /* @__PURE__ */ h("div", { style: { flex: 1, width: "100%", background: "var(--zg-surface-alt)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", borderLeft: e.hideSidebar ? "none" : `1px solid ${n.borderLight}` }, children: [
    /* @__PURE__ */ a(
      "div",
      {
        ref: A,
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
        onWheel: R,
        children: /* @__PURE__ */ h("div", { style: { width: i.totalWidth, height: "100%", position: "relative" }, children: [
          /* @__PURE__ */ h("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: lt, display: "flex" }, children: [
            (o === "day" || o === "week") && i.months.map((T, H) => /* @__PURE__ */ a("div", { style: { width: T.width, position: "relative", height: "100%", borderRight: `1px solid ${n.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ a("span", { style: { fontSize: 13, fontWeight: 700, color: n.textTitle, letterSpacing: "0.02em" }, children: T.label }) }, H)),
            o === "month" && i.years?.map((T, H) => /* @__PURE__ */ a("div", { style: { width: T.width, position: "relative", height: "100%", borderRight: `1px solid ${n.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ a("span", { style: { fontSize: 13, fontWeight: 700, color: n.textTitle, letterSpacing: "0.02em" }, children: T.label }) }, H))
          ] }),
          /* @__PURE__ */ h("div", { style: { position: "absolute", top: lt, left: 0, right: 0, height: lt, display: "flex" }, children: [
            (o === "day" || o === "week") && /* @__PURE__ */ a("div", { style: { width: i.totalWidth, height: "100%", position: "relative" }, children: Pe.map((T) => {
              const H = i.days[T.index];
              if (!H) return null;
              const U = H.isToday, he = H.date.getDay() === 1 && e.showWeekNumbers ? ro(H.date) : null, Ce = `${H.date.getFullYear()}-${H.date.getMonth()}-${H.date.getDate()}`, Ae = gt.has(Ce), oe = Ae ? e.nonWorkingDays?.find((ve) => {
                const pe = ve.date instanceof Date ? ve.date : new Date(ve.date);
                return `${pe.getFullYear()}-${pe.getMonth()}-${pe.getDate()}` === Ce;
              })?.label ?? "Holiday" : void 0;
              return /* @__PURE__ */ h(
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
                    he !== null && /* @__PURE__ */ h("span", { style: {
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
                      String(he).padStart(2, "0")
                    ] }),
                    /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: U ? 800 : 500, color: U ? n.today : n.textSecondary, letterSpacing: "-0.03em" }, children: H.date.getDate().toString().padStart(2, "0") })
                  ]
                },
                `day-${T.index}`
              );
            }) }),
            o === "month" && i.months.map((T, H) => /* @__PURE__ */ a("div", { style: { width: T.width, position: "relative", height: "100%", borderRight: `1px solid ${n.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: n.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em" }, children: T.label.substring(0, 3) }) }, H))
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        ref: w,
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
        onScroll: c,
        onMouseDown: I,
        onTouchStart: M,
        onWheel: R,
        onContextMenu: F,
        onClick: () => {
          $(null), G({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
        },
        children: /* @__PURE__ */ h("div", { style: { width: i.totalWidth, height: ke, position: "relative" }, children: [
          /* @__PURE__ */ h("svg", { width: i.totalWidth, height: ke, style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" }, children: [
            /* @__PURE__ */ h("defs", { children: [
              /* @__PURE__ */ a("pattern", { id: "gantt-y-lines", x: "0", y: "0", width: i.dayWidth, height: de, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ a("line", { x1: i.dayWidth, y1: "0", x2: i.dayWidth, y2: de, stroke: n.border, strokeWidth: "1", strokeDasharray: "4 4", opacity: "0.4" }) }),
              /* @__PURE__ */ a("pattern", { id: "gantt-x-lines", x: "0", y: "0", width: i.dayWidth, height: de, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ a("line", { x1: "0", y1: de, x2: i.dayWidth, y2: de, stroke: n.borderLight, strokeWidth: "1" }) })
            ] }),
            /* @__PURE__ */ a("rect", { width: "100%", height: "100%", fill: "url(#gantt-x-lines)" }),
            /* @__PURE__ */ a("rect", { width: "100%", height: "100%", fill: "url(#gantt-y-lines)" }),
            (o === "day" || o === "week") && Pe.map((T) => i.days[T.index]?.isWeekend ? /* @__PURE__ */ a("rect", { x: T.start, y: 0, width: T.size, height: ke, fill: n.weekendBg, opacity: 0.6 }, `we-${T.index}`) : null),
            o === "month" && Pe.map((T) => i.days[T.index]?.isWeekend ? /* @__PURE__ */ a("rect", { x: T.start, y: 0, width: T.size, height: ke, fill: n.weekendBg, opacity: 0.3 }, `wem-${T.index}`) : null),
            o === "day" && Pe.map((T) => {
              const H = i.days[T.index];
              if (!H) return null;
              const U = `${H.date.getFullYear()}-${H.date.getMonth()}-${H.date.getDate()}`;
              return gt.has(U) ? /* @__PURE__ */ a(
                "rect",
                {
                  x: T.start,
                  y: 0,
                  width: T.size,
                  height: ke,
                  fill: "rgba(205,98,0,0.12)"
                },
                `hol-${T.index}`
              ) : null;
            }),
            i.todayIndex >= 0 && /* @__PURE__ */ h("g", { children: [
              /* @__PURE__ */ a("rect", { x: i.todayIndex * i.dayWidth, y: 0, width: i.dayWidth, height: ke, fill: n.todayBg }),
              /* @__PURE__ */ a("line", { x1: (i.todayIndex + 0.5) * i.dayWidth, y1: 0, x2: (i.todayIndex + 0.5) * i.dayWidth, y2: ke, stroke: n.today, strokeWidth: 2, strokeDasharray: "4 4", opacity: 0.3 })
            ] })
          ] }),
          Xe.map((T) => {
            const H = s[T.index];
            return H && (H.kind === "group" || H.kind === "projectHeader") ? /* @__PURE__ */ a("div", { style: {
              boxSizing: "border-box",
              position: "absolute",
              left: 0,
              top: T.start,
              width: "100%",
              height: de,
              background: H.kind === "projectHeader" ? n.headerBg : n.groupLightSoft,
              borderBottom: `1px solid ${n.borderLight}`,
              pointerEvents: "none"
            } }, `bg-${T.index}`) : null;
          }),
          /* @__PURE__ */ h("div", { style: { position: "absolute", inset: 0 }, children: [
            Xe.map((T) => {
              const H = s[T.index];
              if (!H || H.kind !== "task") return null;
              const U = H.task, xe = l?.task.id === U.id, he = d?.task.id === U.id, Ce = xe || he && d.edge === "left" ? ue(U.start, xe ? l.offsetDays : d.offsetDays) : U.start, Ae = xe || he && d.edge === "right" ? ue(U.end, xe ? l.offsetDays : d.offsetDays) : U.end, oe = U.originalType !== "step", ve = Fe(Ce, i);
              let pe = 0, ze = 0;
              oe || (pe = Math.max(Fe(Ae, i) - ve, i.dayWidth), ze = pe * (U.progress / 100));
              const it = C === U.id, _e = m === U.id, mt = Ee.has(U.id), st = ce.has(U.id), at = !!m && !_e && !ae.has(U.id), we = _e || !!m && ae.has(U.id), Be = u?.hoverTargetId === U.id, We = it || _e, yt = T.start;
              return /* @__PURE__ */ a(
                ao,
                {
                  task: U,
                  x: ve,
                  y: yt,
                  w: pe,
                  progW: ze,
                  isHov: it,
                  isDrag: xe,
                  isResize: he,
                  isCritical: st,
                  isDelayed: mt,
                  isConnectTarget: Be,
                  showDots: We,
                  isBarDimmed: at,
                  isBarHighlighted: we,
                  commonEvents: {
                    onMouseEnter: (re) => {
                      y(U.id), !l && !d && Z({ task: U, x: re.clientX, y: re.clientY });
                    },
                    onMouseMove: (re) => {
                      C === U.id && !l && !d && Z({ task: U, x: re.clientX, y: re.clientY });
                    },
                    onMouseLeave: () => {
                      y(null), Z(null);
                    },
                    onClick: (re) => J(re, U),
                    onDoubleClick: (re) => {
                      re.stopPropagation(), Je?.(xt(U));
                    },
                    onMouseDown: (re) => De(re, U),
                    onTouchStart: (re) => Ze(re, U),
                    onKeyDown: (re) => {
                      if (re.key === "Enter") {
                        re.preventDefault(), Je?.(xt(U));
                        return;
                      }
                      re.key === " " && (re.preventDefault(), $(U.id));
                    }
                  },
                  handleResizeMouseDown: Et,
                  handleResizeTouchStart: Ne,
                  handleConnectDotMouseDown: Ye,
                  handleConnectDotTouchStart: ut
                },
                U.id
              );
            }),
            /* @__PURE__ */ a("svg", { width: i.totalWidth, height: ke, style: { position: "absolute", inset: 0, pointerEvents: "none" }, children: /* @__PURE__ */ a(lo, { arrows: B }) }),
            X && !l && !Q.isOpen && /* @__PURE__ */ a(co, { task: X.task, x: X.x, y: X.y })
          ] })
        ] })
      }
    ),
    Q.task && Q.isOpen && (() => {
      const T = Q.task, H = (e.dependencies || []).filter((oe) => oe.predecessorId === T.id || oe.successorId === T.id), U = { FS: t("gantt.depType.fs", "Finish to Start"), SS: t("gantt.depType.ss", "Start to Start"), FF: t("gantt.depType.ff", "Finish to Finish"), SF: t("gantt.depType.sf", "Start to Finish") }, xe = H.length > 0 ? 300 : 220, he = 200 + H.length * 68, Ce = Math.min(Q.position.x, window.innerWidth - xe - 16), Ae = Math.min(Math.max(8, Q.position.y + 8), window.innerHeight - he - 16);
      return /* @__PURE__ */ h(
        "div",
        {
          "data-popup": "gantt-action",
          style: { position: "fixed", left: Ce, top: Ae, zIndex: 9999, background: "var(--zg-surface)", borderRadius: 4, boxShadow: "var(--zg-shadow-popover)", border: `1.5px solid ${n.borderLight}`, width: xe, overflow: "hidden" },
          onMouseDown: (oe) => oe.stopPropagation(),
          children: [
            /* @__PURE__ */ a("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${n.borderLight}` }, children: /* @__PURE__ */ a("p", { style: { fontSize: 13, fontWeight: 700, color: n.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: T.name, children: T.name }) }),
            /* @__PURE__ */ h("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" }, children: [
              /* @__PURE__ */ h("button", { onClick: () => {
                Je?.(xt(T)), Re();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: n.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ a(Wn, { size: 15 }),
                " ",
                /* @__PURE__ */ a("span", { style: { flex: 1, textAlign: "left" }, children: t("gantt.popup.viewDetails", "View details") })
              ] }),
              /* @__PURE__ */ h("button", { onClick: () => {
                ht?.(xt(T)), Re();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: n.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ a($n, { size: 15 }),
                " ",
                /* @__PURE__ */ a("span", { style: { flex: 1, textAlign: "left" }, children: t("gantt.popup.edit", "Edit") })
              ] }),
              /* @__PURE__ */ h("button", { onClick: () => {
                et?.(T.id), Re();
              }, className: "zg-popup-btn zg-popup-btn-danger", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: n.dangerText, textAlign: "left" }, children: [
                /* @__PURE__ */ a(Pn, { size: 15 }),
                " ",
                /* @__PURE__ */ a("span", { style: { flex: 1, textAlign: "left" }, children: t("gantt.popup.delete", "Delete") })
              ] })
            ] }),
            H.length > 0 && /* @__PURE__ */ h("div", { style: { borderTop: `1px solid ${n.borderLight}`, padding: "10px 14px 12px" }, children: [
              /* @__PURE__ */ h("div", { style: { fontSize: 10, fontWeight: 700, color: n.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }, children: [
                t("gantt.popup.relations", "Relations"),
                " (",
                H.length,
                ")"
              ] }),
              /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: H.map((oe) => {
                const ve = oe.predecessorId === T.id, pe = ve ? oe.successorName : oe.predecessorName, ze = V === oe.id;
                return /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderRadius: 8, background: "var(--zg-surface-alt)", border: `1px solid ${n.borderLight}` }, children: [
                  /* @__PURE__ */ h("div", { style: { flex: 1, minWidth: 0 }, children: [
                    /* @__PURE__ */ h("div", { style: { fontSize: 10, fontWeight: 700, color: n.group, marginBottom: 2 }, children: [
                      /* @__PURE__ */ a("span", { style: { background: n.groupSoftStrong, borderRadius: 4, padding: "1px 5px" }, children: oe.type }),
                      " ",
                      /* @__PURE__ */ a("span", { style: { color: n.textSecondary, fontWeight: 500 }, children: ve ? "→ " : "← " }),
                      /* @__PURE__ */ a("span", { style: { color: n.textMuted, fontWeight: 400, fontSize: 9 }, children: U[oe.type] ?? oe.type })
                    ] }),
                    /* @__PURE__ */ a("div", { style: { fontSize: 11, color: n.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: pe, children: pe })
                  ] }),
                  tt && /* @__PURE__ */ a(
                    "button",
                    {
                      disabled: !!ze,
                      onClick: async () => {
                        D(oe.id);
                        try {
                          await tt(oe.id);
                        } finally {
                          D(null);
                        }
                      },
                      style: { flexShrink: 0, padding: "4px 6px", borderRadius: 6, border: "none", background: ze ? n.dangerBgSoft : "transparent", cursor: ze ? "wait" : "pointer", color: n.dangerText, fontSize: 14, opacity: ze ? 0.5 : 1, transition: "background 0.12s" },
                      children: ze ? "⟳" : "🗑"
                    }
                  )
                ] }, oe.id);
              }) })
            ] })
          ]
        }
      );
    })(),
    p && /* @__PURE__ */ h(
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
          /* @__PURE__ */ a("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${n.borderLight}`, background: n.headerBg }, children: /* @__PURE__ */ h("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: n.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" }, children: [
            t("gantt.chart.addOn", "Add on"),
            " ",
            ye(p.date, e.locale)
          ] }) }),
          /* @__PURE__ */ a("div", { style: { padding: "5px 5px" }, children: [
            { label: t("gantt.newAction.step", "Step"), icon: vt("step", 0), action: () => {
              nt?.(p.date, p.projectId), S(null);
            } },
            { label: t("gantt.newAction.milestone", "Milestone"), icon: vt("milestone"), action: () => {
              pt?.(p.date, p.projectId), S(null);
            } },
            { label: t("gantt.newAction.event", "Event"), icon: vt("event"), action: () => {
              ot?.(p.date, p.projectId), S(null);
            } },
            { label: t("gantt.newAction.note", "Note"), icon: vt("note"), action: () => {
              ft?.(p.date, p.projectId), S(null);
            } }
          ].map((T) => /* @__PURE__ */ h(
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
    u && /* @__PURE__ */ h("svg", { style: { position: "fixed", inset: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 99999 }, children: [
      /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ a("path", { d: "M0,0 L0,6 L6,3 z", fill: n.group }) }) }),
      /* @__PURE__ */ a("line", { x1: u.fromScreenX, y1: u.fromScreenY, x2: u.currentScreenX, y2: u.currentScreenY, stroke: n.group, strokeWidth: 2.5, strokeDasharray: "8 5", markerEnd: "url(#connect-arrow)", opacity: 0.85, style: { animation: "zg-dash 0.5s linear infinite" } })
    ] }),
    b && /* @__PURE__ */ a("div", { style: { position: "fixed", inset: 0, background: n.overlayMedium, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99998 }, onClick: () => v(null), children: /* @__PURE__ */ h("div", { style: { background: "var(--zg-surface)", borderRadius: 20, padding: "32px 36px", width: 420, boxShadow: "var(--zg-shadow-popover)" }, onClick: (T) => T.stopPropagation(), children: [
      /* @__PURE__ */ h("div", { style: { marginBottom: 20 }, children: [
        /* @__PURE__ */ a("h3", { style: { fontSize: 18, fontWeight: 700, color: n.textTitle, marginBottom: 4 }, children: t("gantt.depModal.title", "Relation Type") }),
        /* @__PURE__ */ a("p", { style: { fontSize: 13, color: n.textSecondary }, children: t("gantt.depModal.subtitle", "Choose how the two tasks relate") })
      ] }),
      /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }, children: [
        { type: "FS", label: t("gantt.depModal.fs", "Finish to Start"), desc: t("gantt.depModal.fsDesc", "B starts when A finishes") },
        { type: "SS", label: t("gantt.depModal.ss", "Start to Start"), desc: t("gantt.depModal.ssDesc", "A and B start together") },
        { type: "FF", label: t("gantt.depModal.ff", "Finish to Finish"), desc: t("gantt.depModal.ffDesc", "A and B finish together") },
        { type: "SF", label: t("gantt.depModal.sf", "Start to Finish"), desc: t("gantt.depModal.sfDesc", "B finishes when A starts") }
      ].map((T) => /* @__PURE__ */ h("button", { onClick: () => z(T.type), style: { border: k === T.type ? `2px solid ${n.group}` : `1.5px solid ${n.borderLight}`, borderRadius: 12, padding: "12px 14px", textAlign: "left", cursor: "pointer", background: k === T.type ? n.groupSoft : "var(--zg-surface-alt)" }, children: [
        /* @__PURE__ */ a("div", { style: { fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: n.group, marginBottom: 4, background: k === T.type ? n.groupSoftStrong : n.groupSoft, borderRadius: 6, padding: "2px 6px", display: "inline-block" }, children: T.type }),
        /* @__PURE__ */ a("div", { style: { fontSize: 13, fontWeight: 600, color: n.textTitle, marginBottom: 2 }, children: T.label }),
        /* @__PURE__ */ a("div", { style: { fontSize: 11, color: n.textSecondary }, children: T.desc })
      ] }, T.type)) }),
      /* @__PURE__ */ h("div", { style: { marginBottom: 24 }, children: [
        /* @__PURE__ */ a("label", { style: { display: "block", fontSize: 13, fontWeight: 600, color: n.textTitle, marginBottom: 6 }, children: t("gantt.depModal.lagLabel", "Lag (days)") }),
        /* @__PURE__ */ a("input", { type: "number", value: P, onChange: (T) => Y(parseInt(T.target.value) || 0), style: { width: "100%", padding: "10px 12px", border: `1.5px solid ${n.borderLight}`, borderRadius: 8, fontSize: 14 } })
      ] }),
      /* @__PURE__ */ h("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12 }, children: [
        /* @__PURE__ */ a("button", { onClick: () => v(null), style: { padding: "10px 16px", borderRadius: 8, border: `1px solid ${n.borderLight}`, background: "var(--zg-surface)", cursor: "pointer", fontWeight: 600 }, children: t("gantt.depModal.cancel", "Cancel") }),
        /* @__PURE__ */ a("button", { onClick: Qe, disabled: E, style: { padding: "10px 16px", borderRadius: 8, border: "none", background: n.group, color: n.white, cursor: E ? "wait" : "pointer", fontWeight: 600 }, children: E ? t("gantt.depModal.saving", "Saving...") : t("gantt.depModal.create", "Create Dependency") })
      ] })
    ] }) })
  ] });
}
function go(e) {
  const t = me(null), o = me(null), r = me(null), i = me(!1), s = ee(() => {
    if (i.current) return;
    i.current = !0;
    const b = o.current;
    b && t.current && (t.current.scrollTop = b.scrollTop), b && r.current && (r.current.scrollLeft = b.scrollLeft), i.current = !1;
  }, []), l = ee(() => {
    i.current || (i.current = !0, t.current && o.current && (o.current.scrollTop = t.current.scrollTop), i.current = !1);
  }, []), d = me(!1);
  se(() => {
    if (d.current || !e.totalWidth) return;
    const b = o.current;
    if (!b) return;
    const v = Fe(/* @__PURE__ */ new Date(), e);
    if (v >= 0 && v <= e.totalWidth) {
      const k = v - b.clientWidth / 2;
      b.scrollLeft = Math.max(0, k), r.current && (r.current.scrollLeft = b.scrollLeft), d.current = !0;
    }
  }, [e]);
  const u = ee((b) => {
    const v = o.current;
    if (v)
      if (b.preventDefault(), b.shiftKey || Math.abs(b.deltaX) > Math.abs(b.deltaY)) {
        const k = b.shiftKey ? b.deltaY : b.deltaX;
        v.scrollLeft += k, r.current && (r.current.scrollLeft = v.scrollLeft);
      } else
        v.scrollTop += b.deltaY, t.current && (t.current.scrollTop = v.scrollTop);
  }, []);
  return {
    leftBodyRef: t,
    rightBodyRef: o,
    timeHeaderRef: r,
    handleRightScroll: s,
    handleLeftScroll: l,
    handleChartWheel: u
  };
}
function ho(e, t, o, r) {
  const i = /* @__PURE__ */ new Map();
  return e.forEach((s) => i.set(s.id, s)), t.map((s) => {
    const l = i.get(s.predecessorId), d = i.get(s.successorId);
    if (!l || !d) return null;
    const u = r.get(l.id), b = r.get(d.id);
    if (u == null || b == null) return null;
    const v = l.originalType !== "step", k = d.originalType !== "step", z = v ? Fe(l.start, o) + Bt : Fe(l.end, o), P = u * de + de / 2, Y = k ? Fe(d.start, o) - 10 : Fe(d.start, o), E = b * de + de / 2, V = 14, D = Math.max(z + V, Y - V), p = P === E ? `M${z},${P} L${Y - 6},${E}` : `M${z},${P} L${D},${P} L${D},${E} L${Y - 6},${E}`;
    return { predId: l.id, succId: d.id, path: p, headX: Y - 6, headY: E, depType: s.type, lag: s.lag };
  }).filter(Boolean);
}
function po(e, t, o) {
  if (t === o) return !0;
  const r = /* @__PURE__ */ new Map();
  for (const d of e) {
    const u = r.get(d.predecessorId) || [];
    u.push(d.successorId), r.set(d.predecessorId, u);
  }
  const i = r.get(t) || [];
  i.push(o), r.set(t, i);
  const s = [o], l = /* @__PURE__ */ new Set();
  for (; s.length > 0; ) {
    const d = s.pop();
    if (d === t) return !0;
    if (l.has(d)) continue;
    l.add(d);
    const u = r.get(d) || [];
    for (const b of u)
      l.has(b) || s.push(b);
  }
  return !1;
}
function fo(e, t) {
  if (e.length === 0 || t.length === 0) return /* @__PURE__ */ new Set();
  const o = /* @__PURE__ */ new Map();
  e.forEach((p) => o.set(p.id, p));
  const r = new Set(e.map((p) => p.id)), i = t.filter((p) => r.has(p.predecessorId) && r.has(p.successorId));
  if (i.length === 0) return /* @__PURE__ */ new Set();
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  i.forEach((p) => {
    s.has(p.predecessorId) || s.set(p.predecessorId, []), s.get(p.predecessorId).push(p.successorId), l.has(p.successorId) || l.set(p.successorId, []), l.get(p.successorId).push(p.predecessorId);
  });
  const d = (p) => Math.max(1, Ie(p.start, p.end)), u = /* @__PURE__ */ new Set(), b = [];
  function v(p) {
    u.has(p) || (u.add(p), (s.get(p) || []).forEach(v), b.unshift(p));
  }
  e.forEach((p) => v(p.id));
  const k = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
  for (const p of b) {
    const S = o.get(p), w = l.get(p) || [];
    let A = 0;
    for (const M of w) A = Math.max(A, z.get(M) || 0);
    const I = w.length > 0 ? A : 0;
    k.set(p, I), z.set(p, I + d(S));
  }
  let P = 0;
  z.forEach((p) => {
    p > P && (P = p);
  });
  const Y = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
  for (let p = b.length - 1; p >= 0; p--) {
    const S = b[p], w = o.get(S), A = s.get(S) || [];
    let I = P;
    for (const M of A) I = Math.min(I, Y.get(M) ?? P);
    E.set(S, A.length > 0 ? I : P), Y.set(S, (E.get(S) || 0) - d(w));
  }
  const V = /* @__PURE__ */ new Set();
  i.forEach((p) => {
    V.add(p.predecessorId), V.add(p.successorId);
  });
  const D = /* @__PURE__ */ new Set();
  for (const p of b) {
    if (!V.has(p)) continue;
    const S = (Y.get(p) || 0) - (k.get(p) || 0);
    Math.abs(S) < 0.5 && D.add(p);
  }
  return D;
}
function mo({
  steps: e,
  milestones: t,
  events: o,
  notes: r,
  dependencies: i,
  viewMode: s,
  dayWidth: l,
  locale: d,
  groupByProject: u,
  visibleTypes: b,
  collapsedGroups: v,
  collapsedProjects: k,
  selectedTaskId: z,
  nonWorkingDays: P,
  searchQuery: Y
}) {
  const E = le(() => {
    const c = [], C = /* @__PURE__ */ new Map();
    r?.forEach((m) => {
      let $ = m.targetId || m.predecessorId;
      if (!$ && i) {
        const Z = i.find((Q) => Q.successorId === m.id);
        Z && ($ = Z.predecessorId);
      }
      if (!$) return;
      const X = C.get($) || [];
      C.set($, [...X, m]);
    });
    let y = 0;
    return e.forEach((m) => {
      const $ = !!(m.startDate && m.finishDate), X = m.startDate || m.previsionStartDate, Z = m.finishDate || m.previsionFinishDate;
      if (!X || !Z) return;
      const Q = new Date(X), G = new Date(Z);
      if (isNaN(Q.getTime()) || isNaN(G.getTime())) return;
      G <= Q && G.setDate(G.getDate() + 1);
      let J, ne;
      if (m.previsionStartDate && m.previsionFinishDate) {
        const ae = new Date(m.previsionStartDate), De = new Date(m.previsionFinishDate);
        !isNaN(ae.getTime()) && !isNaN(De.getTime()) && (J = ae, ne = De <= ae ? ue(ae, 1) : De);
      }
      const ce = i?.filter((ae) => ae.successorId === m.id).map((ae) => ae.predecessorId) || [], Ee = m.conclusionPercent != null ? Number(m.conclusionPercent) : 0;
      c.push({
        id: m.id,
        name: m.name,
        start: Q,
        end: G,
        progress: Ee > 1 ? Math.min(Ee, 100) : Ee * 100,
        originalType: "step",
        deps: ce,
        colorIdx: y % be.length,
        barColor: m.barColor,
        progressColor: m.progressColor,
        borderColor: m.borderColor,
        previsionStart: J,
        previsionEnd: ne,
        hasActualDates: $,
        projectId: m.projectId || void 0,
        projectTitle: m.projectTitle || void 0,
        attachedNotes: C.get(m.id)
      }), y++;
    }), t?.forEach((m) => {
      if (!m.date) return;
      const $ = new Date(m.date);
      if (isNaN($.getTime())) return;
      const X = i?.filter((Z) => Z.successorId === m.id).map((Z) => Z.predecessorId) || [];
      c.push({
        id: m.id,
        name: m.name,
        start: $,
        end: $,
        progress: m.finished ? 100 : 0,
        originalType: "milestone",
        deps: X,
        projectId: m.projectId || void 0,
        projectTitle: m.projectTitle || void 0,
        attachedNotes: C.get(m.id)
      });
    }), o?.forEach((m) => {
      if (!m.date) return;
      const $ = new Date(m.date);
      if (isNaN($.getTime())) return;
      const X = i?.filter((Z) => Z.successorId === m.id).map((Z) => Z.predecessorId) || [];
      c.push({
        id: m.id,
        name: m.title,
        start: $,
        end: $,
        progress: m.finished ? 100 : 0,
        originalType: "event",
        deps: X,
        projectId: m.projectId || void 0,
        projectTitle: m.projectTitle || void 0,
        attachedNotes: C.get(m.id)
      });
    }), c;
  }, [e, t, o, r, i]), V = le(() => so(E, s, d, l), [E, s, d, l]), D = le(() => {
    const c = [], C = ["step", "milestone", "event"];
    if (u) {
      const y = /* @__PURE__ */ new Map();
      E.forEach((m) => {
        m.projectId && !y.has(m.projectId) && y.set(m.projectId, m.projectTitle || m.projectId);
      });
      for (const [m, $] of Array.from(y.entries())) {
        const X = k.has(m);
        if (c.push({ kind: "projectHeader", projectId: m, projectTitle: $, collapsed: X }), !X) {
          const Z = E.filter((Q) => Q.projectId === m);
          for (const Q of C) {
            if (!b.has(Q)) continue;
            const G = Z.filter((ce) => ce.originalType === Q);
            if (G.length === 0) continue;
            const J = `${m}-${Q}`, ne = v.has(J);
            c.push({ kind: "group", groupType: Q, label: _t[Q], count: G.length, collapsed: ne, projectId: m }), ne || G.forEach((ce) => c.push({ kind: "task", task: ce }));
          }
        }
      }
    } else
      for (const y of C) {
        if (!b.has(y)) continue;
        const m = E.filter((X) => X.originalType === y);
        if (m.length === 0) continue;
        const $ = v.has(y);
        c.push({ kind: "group", groupType: y, label: _t[y], count: m.length, collapsed: $ }), $ || m.forEach((X) => c.push({ kind: "task", task: X }));
      }
    return c;
  }, [E, b, v, k, u]), p = le(() => {
    const c = /* @__PURE__ */ new Map();
    return D.forEach((C, y) => {
      C.kind === "task" && c.set(C.task.id, y);
    }), c;
  }, [D]), S = le(
    () => ho(E, i || [], V, p),
    [E, i, V, p]
  ), w = le(() => fo(E, i || []), [E, i]), A = le(() => {
    const c = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Date();
    return E.forEach((y) => {
      y.originalType === "step" && y.end < C && y.progress < 100 && c.add(y.id);
    }), c;
  }, [E]), I = le(() => {
    if (!z || !i?.length) return /* @__PURE__ */ new Set();
    const c = /* @__PURE__ */ new Set(), C = [z];
    for (; C.length; ) {
      const y = C.shift();
      for (const m of i)
        m.predecessorId === y && !c.has(m.successorId) && (c.add(m.successorId), C.push(m.successorId)), m.successorId === y && !c.has(m.predecessorId) && (c.add(m.predecessorId), C.push(m.predecessorId));
    }
    return c;
  }, [z, i]), M = le(() => {
    const c = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
    for (const m of E) {
      if (m.originalType !== "step") continue;
      const $ = c.get("step") || { sum: 0, count: 0 };
      if ($.sum += m.progress, $.count += 1, c.set("step", $), m.projectId) {
        const X = C.get(m.projectId) || { sum: 0, count: 0 };
        X.sum += m.progress, X.count += 1, C.set(m.projectId, X);
      }
    }
    const y = (m) => m && m.count > 0 ? Math.round(m.sum / m.count) : null;
    return {
      byType: new Map([...c.entries()].map(([m, $]) => [m, y($)])),
      byProject: new Map([...C.entries()].map(([m, $]) => [m, y($)]))
    };
  }, [E]), R = le(() => {
    const c = /* @__PURE__ */ new Set();
    for (const C of P ?? []) {
      const y = C.date instanceof Date ? C.date : new Date(C.date);
      isNaN(y.getTime()) || c.add(`${y.getFullYear()}-${y.getMonth()}-${y.getDate()}`);
    }
    return c;
  }, [P]), F = le(() => {
    const c = (Y || "").toLowerCase().trim();
    return c ? D.filter((C) => C.kind !== "task" ? !0 : C.task.name.toLowerCase().includes(c)) : D;
  }, [D, Y]);
  return {
    tasks: E,
    timeline: V,
    displayRows: F,
    taskRowIndex: p,
    arrows: S,
    criticalIds: w,
    delayedIds: A,
    relatedIds: I,
    groupProgress: M,
    nonWorkingDaySet: R
  };
}
function yo(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const o = document.implementation.createHTMLDocument(), r = o.createElement("base"), i = o.createElement("a");
  return o.head.appendChild(r), o.body.appendChild(i), t && (r.href = t), i.href = e, i.href;
}
const bo = /* @__PURE__ */ (() => {
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
let Ue = null;
function xn(e = {}) {
  return Ue || (e.includeStyleProperties ? (Ue = e.includeStyleProperties, Ue) : (Ue = $e(window.getComputedStyle(document.documentElement)), Ue));
}
function zt(e, t) {
  const r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function xo(e) {
  const t = zt(e, "border-left-width"), o = zt(e, "border-right-width");
  return e.clientWidth + t + o;
}
function vo(e) {
  const t = zt(e, "border-top-width"), o = zt(e, "border-bottom-width");
  return e.clientHeight + t + o;
}
function vn(e, t = {}) {
  const o = t.width || xo(e), r = t.height || vo(e);
  return { width: o, height: r };
}
function wo() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const o = t && t.env ? t.env.devicePixelRatio : null;
  return o && (e = parseInt(o, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const fe = 16384;
function So(e) {
  (e.width > fe || e.height > fe) && (e.width > fe && e.height > fe ? e.width > e.height ? (e.height *= fe / e.width, e.width = fe) : (e.width *= fe / e.height, e.height = fe) : e.width > fe ? (e.height *= fe / e.width, e.width = fe) : (e.width *= fe / e.height, e.height = fe));
}
function It(e) {
  return new Promise((t, o) => {
    const r = new Image();
    r.onload = () => {
      r.decode().then(() => {
        requestAnimationFrame(() => t(r));
      });
    }, r.onerror = o, r.crossOrigin = "anonymous", r.decoding = "async", r.src = e;
  });
}
async function ko(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function zo(e, t, o) {
  const r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg"), s = document.createElementNS(r, "foreignObject");
  return i.setAttribute("width", `${t}`), i.setAttribute("height", `${o}`), i.setAttribute("viewBox", `0 0 ${t} ${o}`), s.setAttribute("width", "100%"), s.setAttribute("height", "100%"), s.setAttribute("x", "0"), s.setAttribute("y", "0"), s.setAttribute("externalResourcesRequired", "true"), i.appendChild(s), s.appendChild(e), ko(i);
}
const ge = (e, t) => {
  if (e instanceof t)
    return !0;
  const o = Object.getPrototypeOf(e);
  return o === null ? !1 : o.constructor.name === t.name || ge(o, t);
};
function Io(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function To(e, t) {
  return xn(t).map((o) => {
    const r = e.getPropertyValue(o), i = e.getPropertyPriority(o);
    return `${o}: ${r}${i ? " !important" : ""};`;
  }).join(" ");
}
function Eo(e, t, o, r) {
  const i = `.${e}:${t}`, s = o.cssText ? Io(o) : To(o, r);
  return document.createTextNode(`${i}{${s}}`);
}
function Qt(e, t, o, r) {
  const i = window.getComputedStyle(e, o), s = i.getPropertyValue("content");
  if (s === "" || s === "none")
    return;
  const l = bo();
  try {
    t.className = `${t.className} ${l}`;
  } catch {
    return;
  }
  const d = document.createElement("style");
  d.appendChild(Eo(l, o, i, r)), t.appendChild(d);
}
function Mo(e, t, o) {
  Qt(e, t, ":before", o), Qt(e, t, ":after", o);
}
const Jt = "application/font-woff", en = "image/jpeg", Do = {
  woff: Jt,
  woff2: Jt,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: en,
  jpeg: en,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Ro(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function Ot(e) {
  const t = Ro(e).toLowerCase();
  return Do[t] || "";
}
function Co(e) {
  return e.split(/,/)[1];
}
function $t(e) {
  return e.search(/^(data:)/) !== -1;
}
function Ao(e, t) {
  return `data:${t};base64,${e}`;
}
async function wn(e, t, o) {
  const r = await fetch(e, t);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const i = await r.blob();
  return new Promise((s, l) => {
    const d = new FileReader();
    d.onerror = l, d.onloadend = () => {
      try {
        s(o({ res: r, result: d.result }));
      } catch (u) {
        l(u);
      }
    }, d.readAsDataURL(i);
  });
}
const Ct = {};
function Lo(e, t, o) {
  let r = e.replace(/\?.*/, "");
  return o && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r;
}
async function jt(e, t, o) {
  const r = Lo(e, t, o.includeQueryParams);
  if (Ct[r] != null)
    return Ct[r];
  o.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i;
  try {
    const s = await wn(e, o.fetchRequestInit, ({ res: l, result: d }) => (t || (t = l.headers.get("Content-Type") || ""), Co(d)));
    i = Ao(s, t);
  } catch (s) {
    i = o.imagePlaceholder || "";
    let l = `Failed to fetch resource: ${e}`;
    s && (l = typeof s == "string" ? s : s.message), l && console.warn(l);
  }
  return Ct[r] = i, i;
}
async function Fo(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : It(t);
}
async function Bo(e, t) {
  if (e.currentSrc) {
    const s = document.createElement("canvas"), l = s.getContext("2d");
    s.width = e.clientWidth, s.height = e.clientHeight, l?.drawImage(e, 0, 0, s.width, s.height);
    const d = s.toDataURL();
    return It(d);
  }
  const o = e.poster, r = Ot(o), i = await jt(o, r, t);
  return It(i);
}
async function Wo(e, t) {
  var o;
  try {
    if (!((o = e?.contentDocument) === null || o === void 0) && o.body)
      return await Tt(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function $o(e, t) {
  return ge(e, HTMLCanvasElement) ? Fo(e) : ge(e, HTMLVideoElement) ? Bo(e, t) : ge(e, HTMLIFrameElement) ? Wo(e, t) : e.cloneNode(Sn(e));
}
const Po = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Sn = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function Oo(e, t, o) {
  var r, i;
  if (Sn(t))
    return t;
  let s = [];
  return Po(e) && e.assignedNodes ? s = $e(e.assignedNodes()) : ge(e, HTMLIFrameElement) && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? s = $e(e.contentDocument.body.childNodes) : s = $e(((i = e.shadowRoot) !== null && i !== void 0 ? i : e).childNodes), s.length === 0 || ge(e, HTMLVideoElement) || await s.reduce((l, d) => l.then(() => Tt(d, o)).then((u) => {
    u && t.appendChild(u);
  }), Promise.resolve()), t;
}
function jo(e, t, o) {
  const r = t.style;
  if (!r)
    return;
  const i = window.getComputedStyle(e);
  i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : xn(o).forEach((s) => {
    let l = i.getPropertyValue(s);
    s === "font-size" && l.endsWith("px") && (l = `${Math.floor(parseFloat(l.substring(0, l.length - 2))) - 0.1}px`), ge(e, HTMLIFrameElement) && s === "display" && l === "inline" && (l = "block"), s === "d" && t.getAttribute("d") && (l = `path(${t.getAttribute("d")})`), r.setProperty(s, l, i.getPropertyPriority(s));
  });
}
function No(e, t) {
  ge(e, HTMLTextAreaElement) && (t.innerHTML = e.value), ge(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function Yo(e, t) {
  if (ge(e, HTMLSelectElement)) {
    const r = Array.from(t.children).find((i) => e.value === i.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function Xo(e, t, o) {
  return ge(t, Element) && (jo(e, t, o), Mo(e, t, o), No(e, t), Yo(e, t)), t;
}
async function _o(e, t) {
  const o = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (o.length === 0)
    return e;
  const r = {};
  for (let s = 0; s < o.length; s++) {
    const d = o[s].getAttribute("xlink:href");
    if (d) {
      const u = e.querySelector(d), b = document.querySelector(d);
      !u && b && !r[d] && (r[d] = await Tt(b, t, !0));
    }
  }
  const i = Object.values(r);
  if (i.length) {
    const s = "http://www.w3.org/1999/xhtml", l = document.createElementNS(s, "svg");
    l.setAttribute("xmlns", s), l.style.position = "absolute", l.style.width = "0", l.style.height = "0", l.style.overflow = "hidden", l.style.display = "none";
    const d = document.createElementNS(s, "defs");
    l.appendChild(d);
    for (let u = 0; u < i.length; u++)
      d.appendChild(i[u]);
    e.appendChild(l);
  }
  return e;
}
async function Tt(e, t, o) {
  return !o && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((r) => $o(r, t)).then((r) => Oo(e, r, t)).then((r) => Xo(e, r, t)).then((r) => _o(r, t));
}
const kn = /url\((['"]?)([^'"]+?)\1\)/g, Ho = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Vo = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Uo(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function Go(e) {
  const t = [];
  return e.replace(kn, (o, r, i) => (t.push(i), o)), t.filter((o) => !$t(o));
}
async function Ko(e, t, o, r, i) {
  try {
    const s = o ? yo(t, o) : t, l = Ot(t);
    let d;
    return i || (d = await jt(s, l, r)), e.replace(Uo(t), `$1${d}$3`);
  } catch {
  }
  return e;
}
function qo(e, { preferredFontFormat: t }) {
  return t ? e.replace(Vo, (o) => {
    for (; ; ) {
      const [r, , i] = Ho.exec(o) || [];
      if (!i)
        return "";
      if (i === t)
        return `src: ${r};`;
    }
  }) : e;
}
function zn(e) {
  return e.search(kn) !== -1;
}
async function In(e, t, o) {
  if (!zn(e))
    return e;
  const r = qo(e, o);
  return Go(r).reduce((s, l) => s.then((d) => Ko(d, l, t, o)), Promise.resolve(r));
}
async function Ge(e, t, o) {
  var r;
  const i = (r = t.style) === null || r === void 0 ? void 0 : r.getPropertyValue(e);
  if (i) {
    const s = await In(i, null, o);
    return t.style.setProperty(e, s, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function Zo(e, t) {
  await Ge("background", e, t) || await Ge("background-image", e, t), await Ge("mask", e, t) || await Ge("-webkit-mask", e, t) || await Ge("mask-image", e, t) || await Ge("-webkit-mask-image", e, t);
}
async function Qo(e, t) {
  const o = ge(e, HTMLImageElement);
  if (!(o && !$t(e.src)) && !(ge(e, SVGImageElement) && !$t(e.href.baseVal)))
    return;
  const r = o ? e.src : e.href.baseVal, i = await jt(r, Ot(r), t);
  await new Promise((s, l) => {
    e.onload = s, e.onerror = t.onImageErrorHandler ? (...u) => {
      try {
        s(t.onImageErrorHandler(...u));
      } catch (b) {
        l(b);
      }
    } : l;
    const d = e;
    d.decode && (d.decode = s), d.loading === "lazy" && (d.loading = "eager"), o ? (e.srcset = "", e.src = i) : e.href.baseVal = i;
  });
}
async function Jo(e, t) {
  const r = $e(e.childNodes).map((i) => Tn(i, t));
  await Promise.all(r).then(() => e);
}
async function Tn(e, t) {
  ge(e, Element) && (await Zo(e, t), await Qo(e, t), await Jo(e, t));
}
function er(e, t) {
  const { style: o } = e;
  t.backgroundColor && (o.backgroundColor = t.backgroundColor), t.width && (o.width = `${t.width}px`), t.height && (o.height = `${t.height}px`);
  const r = t.style;
  return r != null && Object.keys(r).forEach((i) => {
    o[i] = r[i];
  }), e;
}
const tn = {};
async function nn(e) {
  let t = tn[e];
  if (t != null)
    return t;
  const r = await (await fetch(e)).text();
  return t = { url: e, cssText: r }, tn[e] = t, t;
}
async function on(e, t) {
  let o = e.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, s = (o.match(/url\([^)]+\)/g) || []).map(async (l) => {
    let d = l.replace(r, "$1");
    return d.startsWith("https://") || (d = new URL(d, e.url).href), wn(d, t.fetchRequestInit, ({ result: u }) => (o = o.replace(l, `url(${u})`), [l, u]));
  });
  return Promise.all(s).then(() => o);
}
function rn(e) {
  if (e == null)
    return [];
  const t = [], o = /(\/\*[\s\S]*?\*\/)/gi;
  let r = e.replace(o, "");
  const i = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const u = i.exec(r);
    if (u === null)
      break;
    t.push(u[0]);
  }
  r = r.replace(i, "");
  const s = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, l = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", d = new RegExp(l, "gi");
  for (; ; ) {
    let u = s.exec(r);
    if (u === null) {
      if (u = d.exec(r), u === null)
        break;
      s.lastIndex = d.lastIndex;
    } else
      d.lastIndex = s.lastIndex;
    t.push(u[0]);
  }
  return t;
}
async function tr(e, t) {
  const o = [], r = [];
  return e.forEach((i) => {
    if ("cssRules" in i)
      try {
        $e(i.cssRules || []).forEach((s, l) => {
          if (s.type === CSSRule.IMPORT_RULE) {
            let d = l + 1;
            const u = s.href, b = nn(u).then((v) => on(v, t)).then((v) => rn(v).forEach((k) => {
              try {
                i.insertRule(k, k.startsWith("@import") ? d += 1 : i.cssRules.length);
              } catch (z) {
                console.error("Error inserting rule from remote css", {
                  rule: k,
                  error: z
                });
              }
            })).catch((v) => {
              console.error("Error loading remote css", v.toString());
            });
            r.push(b);
          }
        });
      } catch (s) {
        const l = e.find((d) => d.href == null) || document.styleSheets[0];
        i.href != null && r.push(nn(i.href).then((d) => on(d, t)).then((d) => rn(d).forEach((u) => {
          l.insertRule(u, l.cssRules.length);
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
function nr(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => zn(t.style.getPropertyValue("src")));
}
async function or(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const o = $e(e.ownerDocument.styleSheets), r = await tr(o, t);
  return nr(r);
}
function En(e) {
  return e.trim().replace(/["']/g, "");
}
function rr(e) {
  const t = /* @__PURE__ */ new Set();
  function o(r) {
    (r.style.fontFamily || getComputedStyle(r).fontFamily).split(",").forEach((s) => {
      t.add(En(s));
    }), Array.from(r.children).forEach((s) => {
      s instanceof HTMLElement && o(s);
    });
  }
  return o(e), t;
}
async function ir(e, t) {
  const o = await or(e, t), r = rr(e);
  return (await Promise.all(o.filter((s) => r.has(En(s.style.fontFamily))).map((s) => {
    const l = s.parentStyleSheet ? s.parentStyleSheet.href : null;
    return In(s.cssText, l, t);
  }))).join(`
`);
}
async function sr(e, t) {
  const o = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await ir(e, t);
  if (o) {
    const r = document.createElement("style"), i = document.createTextNode(o);
    r.appendChild(i), e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r);
  }
}
async function ar(e, t = {}) {
  const { width: o, height: r } = vn(e, t), i = await Tt(e, t, !0);
  return await sr(i, t), await Tn(i, t), er(i, t), await zo(i, o, r);
}
async function lr(e, t = {}) {
  const { width: o, height: r } = vn(e, t), i = await ar(e, t), s = await It(i), l = document.createElement("canvas"), d = l.getContext("2d"), u = t.pixelRatio || wo(), b = t.canvasWidth || o, v = t.canvasHeight || r;
  return l.width = b * u, l.height = v * u, t.skipAutoScale || So(l), l.style.width = `${b}`, l.style.height = `${v}`, t.backgroundColor && (d.fillStyle = t.backgroundColor, d.fillRect(0, 0, l.width, l.height)), d.drawImage(s, 0, 0, l.width, l.height), l;
}
async function dr(e, t = {}) {
  return (await lr(e, t)).toDataURL();
}
function cr() {
  const e = me(null), t = ee(async (o = {}) => {
    const r = e.current;
    if (!r) return;
    const { filename: i = "gantt-chart", scale: s = 2 } = o, l = r.querySelectorAll(".zg-header-controls, [data-popup], [data-menu]");
    l.forEach((d) => {
      d.dataset.exportHidden = d.style.visibility, d.style.visibility = "hidden";
    });
    try {
      const d = await dr(r, { pixelRatio: s, cacheBust: !0 }), u = document.createElement("a");
      u.download = `${i}.png`, u.href = d, u.click();
    } finally {
      l.forEach((d) => {
        d.style.visibility = d.dataset.exportHidden ?? "", delete d.dataset.exportHidden;
      });
    }
  }, []);
  return { exportRef: e, exportPng: t };
}
const wt = 260, St = 170, Me = 20;
function ur() {
  const { props: e, activePinboardTask: t, setActivePinboardTask: o, t: r } = je(), i = !!t, s = me(null), [l, d] = K({}), [u, b] = K(null), v = () => o(null), k = t?.id || null, z = t?.attachedNotes || [], P = le(() => k ? l[k] || {} : {}, [k, l]), Y = ee((D, p) => {
    d((S) => {
      const w = S[D] || {};
      if (Object.keys(w).length >= p) return S;
      const A = { ...w };
      return { ...S, [D]: A };
    });
  }, []), E = ee(() => {
    if (!t) return;
    const { id: D } = t, p = {};
    z.forEach((S, w) => {
      const A = w % 4, I = Math.floor(w / 4), M = Me + A * (wt + 18), R = Me + I * (St + 18), F = (w % 5 - 2) * 0.8;
      p[S.id] = { x: M, y: R, z: w + 1, rotate: F };
    }), d((S) => ({ ...S, [D]: p }));
  }, [t, z]);
  se(() => {
    t && (Y(t.id, z.length), (!l[t.id] || Object.keys(l[t.id]).length === 0) && E());
  }, [t, Y, l, z.length, E]), se(() => {
    if (!i) return;
    const D = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = D;
    };
  }, [i]), se(() => {
    if (!u || !k) return;
    const D = (S) => {
      if (S.pointerId !== u.pointerId) return;
      const w = s.current;
      if (!w) return;
      const A = w.getBoundingClientRect(), I = Math.max(Me, A.width - wt - Me), M = Math.max(Me, A.height - St - Me), R = Math.max(Me, Math.min(I, S.clientX - A.left - u.offsetX)), F = Math.max(Me, Math.min(M, S.clientY - A.top - u.offsetY));
      d((c) => {
        const C = c[k] || {}, y = C[u.noteId];
        return y ? {
          ...c,
          [k]: {
            ...C,
            [u.noteId]: { ...y, x: R, y: F }
          }
        } : c;
      });
    }, p = (S) => {
      S.pointerId === u.pointerId && b(null);
    };
    return document.addEventListener("pointermove", D), document.addEventListener("pointerup", p), document.addEventListener("pointercancel", p), () => {
      document.removeEventListener("pointermove", D), document.removeEventListener("pointerup", p), document.removeEventListener("pointercancel", p);
    };
  }, [k, u]);
  const V = ee((D, p) => {
    if (!k) return;
    const S = s.current;
    if (!S) return;
    const w = l[k]?.[p];
    if (!w) return;
    const A = Object.values(l[k] || {}).reduce((M, R) => Math.max(M, R.z), 0);
    d((M) => {
      const R = M[k] || {}, F = R[p];
      return F ? {
        ...M,
        [k]: {
          ...R,
          [p]: { ...F, z: A + 1 }
        }
      } : M;
    });
    const I = S.getBoundingClientRect();
    b({
      pointerId: D.pointerId,
      taskId: k,
      noteId: p,
      offsetX: D.clientX - I.left - w.x,
      offsetY: D.clientY - I.top - w.y
    });
  }, [k, l]);
  return /* @__PURE__ */ h(Te, { children: [
    i && /* @__PURE__ */ a(
      "div",
      {
        onClick: v,
        style: {
          position: "fixed",
          inset: 0,
          backgroundColor: n.overlaySoft,
          zIndex: 999,
          transition: "opacity 0.3s ease"
        }
      }
    ),
    i && /* @__PURE__ */ h(
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
          /* @__PURE__ */ h("div", { style: {
            padding: "16px 18px",
            backgroundColor: n.headerBg,
            borderBottom: `1px solid ${n.borderLight}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }, children: [
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
              /* @__PURE__ */ h("span", { style: { fontSize: 12, color: n.textSecondary, display: "flex", alignItems: "center", gap: 4 }, children: [
                /* @__PURE__ */ a(Ft, { size: 12 }),
                t && ye(t.start, e.locale),
                t?.originalType === "step" && ` - ${ye(t.end, e.locale)}`
              ] })
            ] }),
            /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ h(
                "button",
                {
                  onClick: E,
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
                    /* @__PURE__ */ a(On, { size: 14 }),
                    r("pinboard.reset", "Reset layout")
                  ]
                }
              ),
              /* @__PURE__ */ a(
                "button",
                {
                  onClick: v,
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
                  children: /* @__PURE__ */ a(Pt, { size: 18 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ h(
            "div",
            {
              ref: s,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden",
                background: n.surface,
                cursor: u ? "grabbing" : "default"
              },
              children: [
                /* @__PURE__ */ a("p", { style: { margin: 0, position: "absolute", left: 20, top: 14, fontSize: 12, color: n.textSecondary }, children: r("pinboard.dragHint", "Drag the notes to organize your board freely.") }),
                z.map((D, p) => {
                  const S = {
                    x: Me + p % 4 * (wt + 18),
                    y: Me + Math.floor(p / 4) * (St + 18),
                    z: p + 1,
                    rotate: (p % 5 - 2) * 0.8
                  }, w = P[D.id] || S, A = u?.noteId === D.id;
                  return /* @__PURE__ */ h(
                    "div",
                    {
                      onPointerDown: (I) => V(I, D.id),
                      style: {
                        position: "absolute",
                        left: w.x,
                        top: w.y,
                        width: wt,
                        minHeight: St,
                        padding: "18px 14px 14px",
                        borderRadius: 6,
                        border: `1px solid ${n.groupSoftStrong}`,
                        background: D.color || n.note,
                        boxShadow: A ? n.shadowStickyHover : n.shadowSticky,
                        transform: `rotate(${w.rotate}deg)`,
                        userSelect: "none",
                        touchAction: "none",
                        cursor: A ? "grabbing" : "grab",
                        zIndex: w.z,
                        transition: A ? "none" : "box-shadow 0.2s ease"
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
                        /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 8 }, children: [
                          /* @__PURE__ */ a("h3", { style: { margin: 0, fontSize: 14, fontWeight: 700, color: n.inkSoft, lineHeight: 1.3 }, children: D.title }),
                          /* @__PURE__ */ a("span", { style: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, color: n.inkSoft4 }, children: r("pinboard.noteBadge", "NOTA") })
                        ] }),
                        /* @__PURE__ */ a("p", { style: { margin: 0, fontSize: 12, lineHeight: 1.5, color: n.inkSoft2, whiteSpace: "pre-wrap" }, children: D.description || "" }),
                        D.author && /* @__PURE__ */ h("div", { style: { marginTop: 12, fontSize: 11, fontWeight: 600, color: n.inkSoft4, textAlign: "right" }, children: [
                          "- ",
                          D.author
                        ] })
                      ]
                    },
                    D.id
                  );
                }),
                z.length === 0 && /* @__PURE__ */ h("div", { style: {
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
                  /* @__PURE__ */ a("div", { style: { width: 60, height: 60, borderRadius: "50%", background: n.headerBg, display: "grid", placeItems: "center" }, children: /* @__PURE__ */ a(At, { size: 30 }) }),
                  /* @__PURE__ */ a("p", { style: { margin: 0, fontSize: 14 }, children: r("pinboard.empty", "Nenhuma nota vinculada") })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ a("div", { style: { padding: "14px 18px", borderTop: `1px solid ${n.borderLight}`, background: n.surface }, children: /* @__PURE__ */ h(
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
                /* @__PURE__ */ a(At, { size: 18 }),
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
const zr = {
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
}, gr = {
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
function sn(e, t, o) {
  const r = gr[t] || o || t;
  return e ? typeof e == "function" ? e(t, r) || r : e[t] || r : r;
}
function an(e) {
  if (!e) return {};
  const t = {};
  return e.primary && (t["--zg-primary-color"] = e.primary, t["--zg-group"] = e.primary), e.primaryContrast && (t["--zg-contrast-high"] = e.primaryContrast), e.surface && (t["--zg-surface"] = e.surface), e.surfaceAlt && (t["--zg-surface-alt"] = e.surfaceAlt), e.headerBg && (t["--zg-header-bg"] = e.headerBg), e.border && (t["--zg-border"] = e.border), e.borderLight && (t["--zg-border-light"] = e.borderLight), e.textPrimary && (t["--zg-text-primary"] = e.textPrimary), e.textSecondary && (t["--zg-text-secondary"] = e.textSecondary), e.textMuted && (t["--zg-text-muted"] = e.textMuted), e.milestone && (t["--zg-milestone"] = e.milestone), e.event && (t["--zg-event"] = e.event), e.note && (t["--zg-note-color"] = e.note), e.today && (t["--zg-danger-color"] = e.today), e.weekendBg && (t["--zg-weekend-bg"] = e.weekendBg), e.customVariables && Object.entries(e.customVariables).forEach(([o, r]) => {
    const i = o.startsWith("--") ? o : `--${o}`;
    t[i] = r;
  }), t;
}
const Ir = {
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
}, hr = 1.6, pr = 200, fr = 700, ln = "zg-sidebar-w", mr = 140, Mn = 1.2, yr = 1 / Mn, Le = (e) => {
  const t = e.touches[0] || e.changedTouches[0];
  return t ? { clientX: t.clientX, clientY: t.clientY } : { clientX: 0, clientY: 0 };
}, dn = (e) => {
  if (e.length < 2) return 0;
  const t = e[0], o = e[1];
  return Math.hypot(o.clientX - t.clientX, o.clientY - t.clientY);
}, cn = (e) => {
  if (e.length < 2)
    return e.length === 1 ? { clientX: e[0].clientX, clientY: e[0].clientY } : { clientX: 0, clientY: 0 };
  const t = e[0], o = e[1];
  return {
    clientX: (t.clientX + o.clientX) / 2,
    clientY: (t.clientY + o.clientY) / 2
  };
}, br = (e) => Math.min(mr, Math.max(hr, e));
function Tr(e) {
  const {
    onTaskChange: t,
    onCreateDependency: o,
    onDependencyError: r,
    dependencies: i,
    translations: s
  } = e, l = !!e.infiniteCanvas, [d, u] = K("day"), [b, v] = K(dt), k = me(b), [z, P] = K(null), [Y, E] = K(null), [V, D] = K(null), [p, S] = K({
    isOpen: !1,
    position: { x: 0, y: 0 },
    task: null
  }), [w, A] = K(null), [I, M] = K(null), [R, F] = K(null), [c, C] = K(null), [y, m] = K("FS"), [$, X] = K(0), [Z, Q] = K(!1), [G, J] = K(null), [ne, ce] = K(null), [Ee, ae] = K(!1), De = me(null), [Ze, Et] = K(null), Ne = me(!1), [Ye, ut] = K(() => {
    if (e.sidebarWidth) return e.sidebarWidth;
    try {
      const g = localStorage.getItem(ln);
      return g ? Number(g) : 460;
    } catch {
      return 460;
    }
  });
  se(() => {
    e.sidebarWidth !== void 0 && ut(e.sidebarWidth);
  }, [e.sidebarWidth]);
  const [Qe, gt] = K(""), { exportRef: Je, exportPng: ht } = cr(), [et, tt] = K(/* @__PURE__ */ new Set(["step", "milestone", "event", "note"])), [nt, pt] = K(/* @__PURE__ */ new Set()), [ot, ft] = K(/* @__PURE__ */ new Set());
  se(() => {
    k.current = b;
  }, [b]);
  const rt = ee((g, f) => l ? f === "day" && g <= 7 ? "month" : f === "month" && g >= 10 ? "day" : f : f, [l]), Xe = ee((g) => {
    u(g), l || v({
      day: dt,
      week: pn,
      month: fn
    }[g]);
  }, [l]), Mt = ee((g) => {
    tt((f) => {
      const x = new Set(f);
      return x.has(g) ? x.delete(g) : x.add(g), x;
    });
  }, []), Pe = ee((g) => {
    pt((f) => {
      const x = new Set(f);
      return x.has(g) ? x.delete(g) : x.add(g), x;
    });
  }, []), ke = ee((g) => {
    ft((f) => {
      const x = new Set(f);
      return x.has(g) ? x.delete(g) : x.add(g), x;
    });
  }, []), j = mo({
    steps: e.steps,
    milestones: e.milestones,
    events: e.events,
    notes: e.notes,
    dependencies: e.dependencies,
    viewMode: d,
    dayWidth: b,
    locale: e.locale,
    visibleTypes: et,
    collapsedGroups: nt,
    collapsedProjects: ot,
    groupByProject: e.groupByProject,
    selectedTaskId: Y || null,
    nonWorkingDays: e.nonWorkingDays,
    searchQuery: Qe
  }), B = go(j.timeline), Re = ee((g) => {
    const f = br(g);
    return v(f), l && u((x) => rt(f, x)), f;
  }, [rt, l]), T = ee((g, f) => {
    const x = B.rightBodyRef.current;
    if (!x) {
      Re(f);
      return;
    }
    const L = x.getBoundingClientRect(), O = g - L.left, N = Number.isFinite(O) ? O : x.clientWidth / 2, W = k.current || dt, _ = x.scrollLeft + N, te = Re(f) / W;
    requestAnimationFrame(() => {
      const ie = B.rightBodyRef.current;
      ie && (ie.scrollLeft = Math.max(0, _ * te - N), B.timeHeaderRef.current && (B.timeHeaderRef.current.scrollLeft = ie.scrollLeft));
    });
  }, [B.rightBodyRef, B.timeHeaderRef, Re]), H = ee((g, f) => {
    const x = B.rightBodyRef.current, L = f ?? (x ? x.getBoundingClientRect().left + x.clientWidth / 2 : 0);
    T(L, k.current * g);
  }, [T, B.rightBodyRef]), U = ee(() => {
    H(Mn);
  }, [H]), xe = ee(() => {
    H(yr);
  }, [H]), he = ee(() => {
    const g = B.rightBodyRef.current;
    if (!g || j.tasks.length === 0) return;
    let f = j.tasks[0].start, x = j.tasks[0].end;
    for (const _ of j.tasks)
      _.start < f && (f = _.start), _.end > x && (x = _.end);
    const L = Math.max(1, Ie(f, x) + 1), O = 40, N = Math.max(80, g.clientWidth - O * 2), W = Re(N / L);
    requestAnimationFrame(() => {
      const _ = B.rightBodyRef.current;
      if (!_) return;
      const q = Ie(j.timeline.start, f);
      _.scrollLeft = Math.max(0, q * W - O), _.scrollTop = 0, B.leftBodyRef.current && (B.leftBodyRef.current.scrollTop = _.scrollTop), B.timeHeaderRef.current && (B.timeHeaderRef.current.scrollLeft = _.scrollLeft);
    });
  }, [j.tasks, j.timeline.start, B.rightBodyRef, B.leftBodyRef, B.timeHeaderRef, Re]), Ce = me(!1);
  se(() => {
    if (!l || !e.initialFitToScreen || Ce.current || j.tasks.length === 0) return;
    const g = B.rightBodyRef.current;
    !g || g.clientWidth <= 0 || (he(), Ce.current = !0);
  }, [l, e.initialFitToScreen, j.tasks.length, he, B.rightBodyRef]);
  const Ae = ee((g, f) => {
    g.preventDefault(), g.stopPropagation(), A({ task: f, startMouseX: g.clientX, originalStart: new Date(f.start), originalEnd: new Date(f.end), offsetDays: 0 });
  }, []), oe = ee((g, f) => {
    g.preventDefault(), g.stopPropagation();
    const x = Le(g);
    A({ task: f, startMouseX: x.clientX, originalStart: new Date(f.start), originalEnd: new Date(f.end), offsetDays: 0 });
  }, []), ve = ee((g, f, x) => {
    g.preventDefault(), g.stopPropagation(), M({ task: f, edge: x, startMouseX: g.clientX, originalStart: new Date(f.start), originalEnd: new Date(f.end), offsetDays: 0 });
  }, []), pe = ee((g, f, x) => {
    g.preventDefault(), g.stopPropagation();
    const L = Le(g);
    M({ task: f, edge: x, startMouseX: L.clientX, originalStart: new Date(f.start), originalEnd: new Date(f.end), offsetDays: 0 });
  }, []), ze = ee((g, f, x) => {
    g.preventDefault(), g.stopPropagation(), F({ fromTaskId: f.id, fromEdge: x, fromScreenX: g.clientX, fromScreenY: g.clientY, currentScreenX: g.clientX, currentScreenY: g.clientY, hoverTargetId: null });
  }, []), it = ee((g, f, x) => {
    g.preventDefault(), g.stopPropagation();
    const L = Le(g);
    F({
      fromTaskId: f.id,
      fromEdge: x,
      fromScreenX: L.clientX,
      fromScreenY: L.clientY,
      currentScreenX: L.clientX,
      currentScreenY: L.clientY,
      hoverTargetId: null
    });
  }, []), _e = ee((g, f) => {
    if (Ne.current) return;
    g.stopPropagation();
    const x = Y === f.id;
    E(x ? null : f.id), S((L) => {
      const O = L.isOpen && L.task?.id === f.id;
      return x || O ? { isOpen: !1, position: { x: 0, y: 0 }, task: null } : { isOpen: !0, position: { x: g.clientX, y: g.clientY }, task: f };
    });
  }, [Y]), mt = ee(async () => {
    if (!c || !o) return;
    const g = new Map(j.tasks.map((W) => [W.id, W])), f = g.get(c.fromTaskId), x = g.get(c.toTaskId);
    if (!f || !x) return;
    const L = (W) => W.originalType === "step" ? "STEP" : "MILESTONE", O = c.fromEdge === "right" ? f : x, N = c.fromEdge === "right" ? x : f;
    if (po(i || [], O.id, N.id)) {
      const W = sn(
        s,
        "gantt.error.circularDependency",
        "Circular dependency is not allowed."
      );
      r?.({
        code: "CYCLIC_DEPENDENCY",
        message: W,
        predecessorId: O.id,
        successorId: N.id
      }), r || window.alert(W), C(null);
      return;
    }
    Q(!0);
    try {
      await o({ predecessorId: O.id, predecessorType: L(O), successorId: N.id, successorType: L(N), type: y, lag: $ }), C(null);
    } finally {
      Q(!1);
    }
  }, [c, j.tasks, o, i, s, r, y, $]);
  se(() => {
    if (!w) return;
    const g = { passive: !1 }, f = (N) => {
      const W = N.clientX - w.startMouseX, _ = Math.round(W / j.timeline.dayWidth);
      _ !== w.offsetDays && (_ !== 0 && (Ne.current = !0), A((q) => q ? { ...q, offsetDays: _ } : null));
    }, x = (N) => {
      N.cancelable && N.preventDefault();
      const _ = Le(N).clientX - w.startMouseX, q = Math.round(_ / j.timeline.dayWidth);
      q !== w.offsetDays && (q !== 0 && (Ne.current = !0), A((te) => te ? { ...te, offsetDays: q } : null));
    }, L = () => {
      w.offsetDays !== 0 && t && t({
        id: w.task.id,
        name: w.task.name,
        start: ue(w.originalStart, w.offsetDays),
        end: ue(w.originalEnd, w.offsetDays),
        type: w.task.originalType === "step" ? "task" : "milestone",
        progress: w.task.progress
      }), A(null), requestAnimationFrame(() => {
        Ne.current = !1;
      });
    }, O = () => L();
    return document.addEventListener("mousemove", f), document.addEventListener("mouseup", L), document.addEventListener("touchmove", x, g), document.addEventListener("touchend", O), () => {
      document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", L), document.removeEventListener("touchmove", x), document.removeEventListener("touchend", O);
    };
  }, [w, j.timeline.dayWidth, t]), se(() => {
    if (!I) return;
    const g = { passive: !1 }, f = (N) => {
      const W = N.clientX - I.startMouseX, _ = Math.round(W / j.timeline.dayWidth);
      _ !== I.offsetDays && M((q) => q ? { ...q, offsetDays: _ } : null);
    }, x = (N) => {
      N.cancelable && N.preventDefault();
      const _ = Le(N).clientX - I.startMouseX, q = Math.round(_ / j.timeline.dayWidth);
      q !== I.offsetDays && M((te) => te ? { ...te, offsetDays: q } : null);
    }, L = () => {
      if (I.offsetDays !== 0 && t) {
        const N = I.edge === "left" ? ue(I.originalStart, I.offsetDays) : I.originalStart, W = I.edge === "right" ? ue(I.originalEnd, I.offsetDays) : I.originalEnd;
        W > N && t({ id: I.task.id, name: I.task.name, start: N, end: W, type: "task", progress: I.task.progress });
      }
      M(null);
    }, O = () => L();
    return document.addEventListener("mousemove", f), document.addEventListener("mouseup", L), document.addEventListener("touchmove", x, g), document.addEventListener("touchend", O), () => {
      document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", L), document.removeEventListener("touchmove", x), document.removeEventListener("touchend", O);
    };
  }, [I, j.timeline.dayWidth, t]);
  const st = R?.fromTaskId, at = R?.fromEdge;
  se(() => {
    if (!st || !at) return;
    const g = { passive: !1 }, f = st, x = at, L = (_) => {
      let q = null;
      for (const te of document.elementsFromPoint(_.clientX, _.clientY)) {
        const ie = te.dataset?.taskId;
        if (ie && ie !== f) {
          q = ie;
          break;
        }
      }
      F((te) => te ? { ...te, currentScreenX: _.clientX, currentScreenY: _.clientY, hoverTargetId: q } : null);
    }, O = (_) => {
      _.cancelable && _.preventDefault();
      const q = Le(_);
      let te = null;
      for (const ie of document.elementsFromPoint(q.clientX, q.clientY)) {
        const Oe = ie.dataset?.taskId;
        if (Oe && Oe !== f) {
          te = Oe;
          break;
        }
      }
      F((ie) => ie ? { ...ie, currentScreenX: q.clientX, currentScreenY: q.clientY, hoverTargetId: te } : null);
    }, N = (_) => {
      let q = null;
      for (const te of document.elementsFromPoint(_.clientX, _.clientY)) {
        const ie = te.dataset?.taskId;
        if (ie && ie !== f) {
          q = ie;
          break;
        }
      }
      q && o && (C({ fromTaskId: f, fromEdge: x, toTaskId: q }), m("FS"), X(0)), F(null);
    }, W = (_) => {
      const q = Le(_);
      let te = null;
      for (const ie of document.elementsFromPoint(q.clientX, q.clientY)) {
        const Oe = ie.dataset?.taskId;
        if (Oe && Oe !== f) {
          te = Oe;
          break;
        }
      }
      te && o && (C({ fromTaskId: f, fromEdge: x, toTaskId: te }), m("FS"), X(0)), F(null);
    };
    return document.addEventListener("mousemove", L), document.addEventListener("mouseup", N), document.addEventListener("touchmove", O, g), document.addEventListener("touchend", W), () => {
      document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", N), document.removeEventListener("touchmove", O), document.removeEventListener("touchend", W);
    };
  }, [st, at, o]);
  const [we, Be] = K(null), [We, yt] = K(null), Dt = ee((g) => {
    if (I || w || g.button === 2) return;
    const f = B.rightBodyRef.current;
    f && (g.preventDefault(), Be({ startX: g.clientX, startY: g.clientY, scrollLeft: f.scrollLeft, scrollTop: f.scrollTop }));
  }, [I, w, B.rightBodyRef]), re = ee((g) => {
    if (I || w || R) return;
    const f = B.rightBodyRef.current;
    if (!f) return;
    if (l && g.touches.length >= 2) {
      g.cancelable && g.preventDefault(), Be(null);
      const L = dn(g.touches), O = cn(g.touches);
      yt({
        startDistance: Math.max(1, L),
        startDayWidth: k.current,
        centerClientY: O.clientY,
        startScrollTop: f.scrollTop
      });
      return;
    }
    const x = Le(g);
    Be({ startX: x.clientX, startY: x.clientY, scrollLeft: f.scrollLeft, scrollTop: f.scrollTop });
  }, [I, w, R, B.rightBodyRef, l]), Nt = ee((g) => {
    if (!l) {
      B.handleChartWheel(g);
      return;
    }
    if (!B.rightBodyRef.current) return;
    g.preventDefault();
    const x = Math.abs(g.deltaY) > 0 ? g.deltaY : g.deltaX, L = Math.exp(-x * 15e-4);
    T(g.clientX, k.current * L);
  }, [l, B, T]);
  se(() => {
    if (!we) return;
    const g = { passive: !1 }, f = (N) => {
      const W = B.rightBodyRef.current;
      W && (W.scrollLeft = we.scrollLeft - (N.clientX - we.startX), W.scrollTop = we.scrollTop - (N.clientY - we.startY), B.leftBodyRef.current && (B.leftBodyRef.current.scrollTop = W.scrollTop), B.timeHeaderRef.current && (B.timeHeaderRef.current.scrollLeft = W.scrollLeft));
    }, x = (N) => {
      N.cancelable && N.preventDefault();
      const W = B.rightBodyRef.current;
      if (!W) return;
      const _ = Le(N);
      W.scrollLeft = we.scrollLeft - (_.clientX - we.startX), W.scrollTop = we.scrollTop - (_.clientY - we.startY), B.leftBodyRef.current && (B.leftBodyRef.current.scrollTop = W.scrollTop), B.timeHeaderRef.current && (B.timeHeaderRef.current.scrollLeft = W.scrollLeft);
    }, L = () => Be(null), O = () => Be(null);
    return document.addEventListener("mousemove", f), document.addEventListener("mouseup", L), document.addEventListener("touchmove", x, g), document.addEventListener("touchend", O), () => {
      document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", L), document.removeEventListener("touchmove", x), document.removeEventListener("touchend", O);
    };
  }, [we, B.rightBodyRef, B.leftBodyRef, B.timeHeaderRef]), se(() => {
    if (!We || !l) return;
    const g = { passive: !1 }, f = (L) => {
      if (L.touches.length < 2) return;
      L.cancelable && L.preventDefault();
      const O = B.rightBodyRef.current;
      if (!O) return;
      const N = dn(L.touches), W = cn(L.touches), _ = Math.max(0.1, N / We.startDistance);
      T(W.clientX, We.startDayWidth * _), O.scrollTop = We.startScrollTop - (W.clientY - We.centerClientY), B.leftBodyRef.current && (B.leftBodyRef.current.scrollTop = O.scrollTop);
    }, x = (L) => {
      L.touches.length < 2 && yt(null);
    };
    return document.addEventListener("touchmove", f, g), document.addEventListener("touchend", x), document.addEventListener("touchcancel", x), () => {
      document.removeEventListener("touchmove", f), document.removeEventListener("touchend", x), document.removeEventListener("touchcancel", x);
    };
  }, [We, l, B.rightBodyRef, B.leftBodyRef, T]);
  const Yt = ee((g) => {
    g.preventDefault(), g.stopPropagation(), S({ isOpen: !1, position: { x: 0, y: 0 }, task: null }), ae(!1);
    const f = (L) => {
      const O = B.rightBodyRef.current;
      if (!O) return /* @__PURE__ */ new Date();
      const N = O.getBoundingClientRect(), W = L - N.left + O.scrollLeft;
      return ue(j.timeline.start, Math.max(0, Math.floor(W / j.timeline.dayWidth)));
    }, x = (L) => {
      if (!e.groupByProject) return;
      const O = B.leftBodyRef.current;
      if (!O) return;
      const N = O.getBoundingClientRect(), W = L - N.top + O.scrollTop, _ = Math.max(0, Math.floor(W / 50));
      for (let q = Math.min(_, j.displayRows.length - 1); q >= 0; q--) {
        const te = j.displayRows[q];
        if (te.kind === "projectHeader") return te.projectId;
        if (te.kind === "task" && te.task.projectId) return te.task.projectId;
        if (te.kind === "group" && te.projectId) return te.projectId;
      }
    };
    ce({ x: g.clientX, y: g.clientY, date: f(g.clientX), projectId: x(g.clientY) }), Be(null);
  }, [j.timeline, j.displayRows, e.groupByProject, B.rightBodyRef, B.leftBodyRef]);
  se(() => {
    if (!ne) return;
    const g = (O) => {
      O.key === "Escape" && ce(null);
    }, f = (O) => {
      O.target.closest('[data-menu="chart-create"]') || ce(null);
    }, x = (O) => {
      O.target.closest('[data-menu="chart-create"]') || ce(null);
    }, L = () => ce(null);
    return document.addEventListener("keydown", g), document.addEventListener("click", f), document.addEventListener("touchstart", x), window.addEventListener("scroll", L, !0), () => {
      document.removeEventListener("keydown", g), document.removeEventListener("click", f), document.removeEventListener("touchstart", x), window.removeEventListener("scroll", L, !0);
    };
  }, [ne]), se(() => {
    if (!p.isOpen) return;
    const g = (x) => {
      x.target.closest('[data-popup="gantt-action"]') || S({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
    }, f = (x) => {
      x.key === "Escape" && S({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
    };
    return document.addEventListener("mousedown", g), document.addEventListener("keydown", f), () => {
      document.removeEventListener("mousedown", g), document.removeEventListener("keydown", f);
    };
  }, [p.isOpen]), se(() => {
    if (!Ee) return;
    const g = (x) => {
      De.current && !De.current.contains(x.target) && ae(!1);
    }, f = (x) => {
      x.key === "Escape" && ae(!1);
    };
    return document.addEventListener("mousedown", g), document.addEventListener("keydown", f), () => {
      document.removeEventListener("mousedown", g), document.removeEventListener("keydown", f);
    };
  }, [Ee]);
  const Dn = le(() => ({
    props: e,
    t: (g, f) => sn(e.translations, g, f),
    viewMode: d,
    setViewMode: Xe,
    isInfiniteCanvas: l,
    dayWidth: b,
    zoomPercent: Math.round(b / dt * 100),
    zoomIn: U,
    zoomOut: xe,
    fitToScreen: he,
    hoveredTaskId: z,
    setHoveredTaskId: P,
    selectedTaskId: Y,
    setSelectedTaskId: E,
    tooltip: V,
    setTooltip: D,
    popupState: p,
    setPopupState: S,
    dragState: w,
    setDragState: A,
    resizeState: I,
    setResizeState: M,
    connectState: R,
    setConnectState: F,
    visibleTypes: et,
    setVisibleTypes: tt,
    toggleVisibility: Mt,
    collapsedGroups: nt,
    setCollapsedGroups: pt,
    toggleGroup: Pe,
    collapsedProjects: ot,
    setCollapsedProjects: ft,
    toggleProject: ke,
    pendingConnection: c,
    setPendingConnection: C,
    depModalType: y,
    setDepModalType: m,
    depModalLag: $,
    setDepModalLag: X,
    depCreating: Z,
    setDepCreating: Q,
    deletingDepId: G,
    setDeletingDepId: J,
    chartMenu: ne,
    setChartMenu: ce,
    newActionOpen: Ee,
    setNewActionOpen: ae,
    activePinboardTask: Ze,
    setActivePinboardTask: Et,
    searchQuery: Qe,
    setSearchQuery: gt,
    nonWorkingDaySet: j.nonWorkingDaySet,
    exportPng: ht,
    tasks: j.tasks,
    timeline: j.timeline,
    displayRows: j.displayRows,
    taskRowIndex: j.taskRowIndex || /* @__PURE__ */ new Map(),
    arrows: j.arrows,
    criticalIds: j.criticalIds,
    delayedIds: j.delayedIds,
    relatedIds: j.relatedIds,
    groupProgress: j.groupProgress,
    sidebarW: Ye,
    ...B,
    newActionRef: De,
    screenXToDate: (g) => {
      const f = B.rightBodyRef.current;
      if (!f) return /* @__PURE__ */ new Date();
      const x = f.getBoundingClientRect(), L = g - x.left + f.scrollLeft;
      return ue(j.timeline.start, Math.max(0, Math.floor(L / j.timeline.dayWidth)));
    },
    screenYToProjectId: (g) => {
      if (!e.groupByProject) return;
      const f = B.leftBodyRef.current;
      if (!f) return;
      const x = f.getBoundingClientRect(), L = g - x.top + f.scrollTop, O = Math.max(0, Math.floor(L / 50));
      for (let N = Math.min(O, j.displayRows.length - 1); N >= 0; N--) {
        const W = j.displayRows[N];
        if (W.kind === "projectHeader") return W.projectId;
        if (W.kind === "task" && W.task.projectId) return W.task.projectId;
        if (W.kind === "group" && W.projectId) return W.projectId;
      }
    },
    handleChartMouseDown: Dt,
    handleChartTouchStart: re,
    handleChartWheel: Nt,
    openChartMenu: Yt,
    handleBarClick: _e,
    handleBarMouseDown: Ae,
    handleBarTouchStart: oe,
    handleResizeMouseDown: ve,
    handleResizeTouchStart: pe,
    handleConnectDotMouseDown: ze,
    handleConnectDotTouchStart: it,
    handleCreateDependency: mt,
    scrollToToday: () => {
      const g = B.rightBodyRef.current, f = B.timeHeaderRef.current;
      if (!g || j.timeline.todayIndex < 0) return;
      const x = Math.max(0, j.timeline.todayIndex * j.timeline.dayWidth - g.clientWidth / 2);
      g.scrollTo({ left: x, behavior: "smooth" }), f && (f.scrollLeft = x);
    },
    isTodayVisible: j.timeline.todayIndex >= 0
  }), [
    e,
    d,
    l,
    b,
    U,
    xe,
    he,
    z,
    Y,
    V,
    p,
    w,
    I,
    R,
    et,
    nt,
    ot,
    c,
    y,
    $,
    Z,
    G,
    ne,
    Ee,
    Ze,
    j,
    B,
    Ye,
    Mt,
    Pe,
    ke,
    Qe,
    ht,
    Dt,
    re,
    Nt,
    Yt,
    _e,
    Ae,
    oe,
    ve,
    pe,
    ze,
    it,
    mt
  ]);
  return e.loading ? /* @__PURE__ */ h(
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
        ...an(e.theme)
      },
      children: [
        /* @__PURE__ */ h("div", { style: { padding: "14px 18px", borderBottom: "1px solid var(--zg-border, #D9D9D9)", background: "var(--zg-header-bg, #F2F5F3)", display: "flex", gap: 12, alignItems: "center" }, children: [
          /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 140, height: 20 } }),
          /* @__PURE__ */ a("div", { style: { flex: 1 } }),
          /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 80, height: 30, borderRadius: 8 } }),
          /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 200, height: 30, borderRadius: 8 } }),
          /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 120, height: 36, borderRadius: 8 } })
        ] }),
        /* @__PURE__ */ h("div", { style: { display: "flex", flex: 1, overflow: "hidden" }, children: [
          /* @__PURE__ */ h("div", { style: { width: 460, flexShrink: 0, borderRight: "1px solid var(--zg-border, #D9D9D9)", padding: "0 16px" }, children: [
            /* @__PURE__ */ h("div", { style: { height: 64, display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid var(--zg-border, #D9D9D9)" }, children: [
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { flex: 1, height: 12 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 60, height: 12 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 60, height: 12 } })
            ] }),
            Array.from({ length: 8 }, (g, f) => /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: 10, height: 50, borderBottom: "1px solid var(--zg-border-light, #ECECEC)" }, children: [
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 14, height: 14, borderRadius: 3, flexShrink: 0 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: `${45 + f % 4 * 10}%`, height: 12 } }),
              /* @__PURE__ */ a("div", { style: { flex: 1 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 50, height: 11 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 50, height: 11 } })
            ] }, f))
          ] }),
          /* @__PURE__ */ h("div", { style: { flex: 1, padding: 16, display: "flex", flexDirection: "column", gap: 8 }, children: [
            /* @__PURE__ */ a("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: Array.from({ length: 8 }, (g, f) => /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { flex: 1, height: 30, borderRadius: 4 } }, f)) }),
            Array.from({ length: 8 }, (g, f) => /* @__PURE__ */ a("div", { style: { height: 50, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ a(
              "div",
              {
                className: "zg-skeleton",
                style: {
                  marginLeft: `${f * 17 % 35}%`,
                  width: `${20 + f % 5 * 8}%`,
                  height: 26,
                  borderRadius: 13
                }
              }
            ) }, f))
          ] })
        ] })
      ]
    }
  ) : /* @__PURE__ */ a(_n, { value: Dn, children: /* @__PURE__ */ h(
    "div",
    {
      ref: Je,
      className: `zg-root ${l ? "zg-root--infinite" : "zg-root--framed"} ${Ze ? "zg-root--muted" : ""}`,
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
        ...an(e.theme)
      },
      children: [
        /* @__PURE__ */ a(Vn, {}),
        /* @__PURE__ */ h("div", { style: { display: "flex", flex: 1, overflow: "hidden", position: "relative", background: n.surfaceAlt }, children: [
          !e.hideSidebar && /* @__PURE__ */ h(Te, { children: [
            /* @__PURE__ */ a("div", { style: { width: Ye, flexShrink: 0 }, children: /* @__PURE__ */ a(io, {}) }),
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
                onMouseEnter: (g) => {
                  g.currentTarget.style.background = n.groupGlowSoft;
                },
                onMouseLeave: (g) => {
                  g.currentTarget.style.background = "transparent";
                },
                onMouseDown: (g) => {
                  g.preventDefault();
                  const f = g.clientX, x = Ye, L = (N) => {
                    const W = Math.min(fr, Math.max(pr, x + N.clientX - f));
                    ut(W);
                    try {
                      localStorage.setItem(ln, String(W));
                    } catch {
                    }
                  }, O = () => {
                    document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", O);
                  };
                  document.addEventListener("mousemove", L), document.addEventListener("mouseup", O);
                }
              }
            )
          ] }),
          /* @__PURE__ */ a(uo, {})
        ] }),
        /* @__PURE__ */ a(ur, {})
      ]
    }
  ) });
}
const xr = [
  { label: "Yellow", value: "#FEF08A" },
  { label: "Green", value: "#BBF7D0" },
  { label: "Blue", value: "#BFDBFE" },
  { label: "Pink", value: "#FBCFE8" },
  { label: "Purple", value: "#E9D5FF" },
  { label: "Orange", value: "#FED7AA" },
  { label: "White", value: "#FFFFFF" }
], un = {
  FS: "Finish → Start (FS)",
  SS: "Start → Start (SS)",
  FF: "Finish → Finish (FF)",
  SF: "Start → Finish (SF)"
};
function Er({
  isOpen: e,
  onClose: t,
  availableMilestones: o = [],
  initialDate: r,
  translations: i,
  onSaveNote: s
}) {
  const l = (y, m) => i ? typeof i == "function" ? i(y, m) : i[y] || m : m, [d, u] = K(""), [b, v] = K(""), [k, z] = K("#FEF08A"), [P, Y] = K(""), [E, V] = K(""), [D, p] = K("FS"), [S, w] = K(!1), [A, I] = K([]), [M, R] = K(""), F = me(null);
  se(() => {
    e && (u(""), v(""), z("#FEF08A"), Y(r ?? (/* @__PURE__ */ new Date()).toISOString().split("T")[0]), V(""), p("FS"), I([]), R(""));
  }, [e, r]);
  const c = [
    ...o.map((y) => ({ id: y.id, name: y.name, type: "MILESTONE" }))
  ], C = async () => {
    if (!d.trim() && !b.trim()) {
      R(l("noteModal.errorEmpty", "Please provide a title or content for the note."));
      return;
    }
    R("");
    try {
      w(!0), await s({
        title: d || l("noteModal.untitled", "Untitled"),
        description: b,
        color: k,
        date: P ? `${P}T00:00:00` : (/* @__PURE__ */ new Date()).toISOString(),
        predecessorId: E,
        dependencyType: D,
        files: A
      }), t();
    } catch (y) {
      console.error(y), R(l("noteModal.errorSave", "Error creating note."));
    } finally {
      w(!1);
    }
  };
  return e ? /* @__PURE__ */ a("div", { style: { position: "fixed", inset: 0, background: n.overlaySoft, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 16 }, onClick: t, children: /* @__PURE__ */ h("div", { onClick: (y) => y.stopPropagation(), style: {
    width: 400,
    maxHeight: "90vh",
    background: k || n.noteDefaultBg,
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
        onMouseEnter: (y) => y.currentTarget.style.background = n.groupBorderWeak,
        onMouseLeave: (y) => y.currentTarget.style.background = n.groupSoftStrong,
        children: "✕"
      }
    ),
    /* @__PURE__ */ h("div", { style: { padding: "28px 24px 20px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }, children: [
      M && /* @__PURE__ */ a("div", { style: { background: n.todaySoft, color: n.dangerText, padding: "8px 12px", borderRadius: 6, fontSize: 12, marginBottom: 12, border: `1px solid ${n.todayMid}` }, children: M }),
      /* @__PURE__ */ a(
        "input",
        {
          type: "text",
          value: d,
          onChange: (y) => u(y.target.value),
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
          value: b,
          onChange: (y) => v(y.target.value),
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
      /* @__PURE__ */ h("div", { style: { marginTop: 14, paddingTop: 10, borderTop: `1px solid ${n.groupSoftStrong}` }, children: [
        /* @__PURE__ */ a(
          "input",
          {
            ref: F,
            type: "file",
            multiple: !0,
            onChange: (y) => {
              const m = y.target.files ? Array.from(y.target.files) : [];
              m.length > 0 && I(($) => [...$, ...m]), F.current && (F.current.value = "");
            },
            style: { display: "none" }
          }
        ),
        /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            onClick: () => F.current?.click(),
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
            onMouseEnter: (y) => y.currentTarget.style.background = n.groupSoftStrong,
            onMouseLeave: (y) => y.currentTarget.style.background = n.groupSoft,
            children: [
              /* @__PURE__ */ a(jn, { size: 13 }),
              l("noteModal.attachFiles", "Attach files")
            ]
          }
        ),
        A.length > 0 && /* @__PURE__ */ a("div", { style: { marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }, children: A.map((y, m) => /* @__PURE__ */ h("div", { style: {
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
          /* @__PURE__ */ a("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: y.name }),
          /* @__PURE__ */ h("span", { style: { fontSize: 9, color: n.inkSoft4, flexShrink: 0 }, children: [
            (y.size / 1024).toFixed(0),
            "KB"
          ] }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              onClick: () => I(($) => $.filter((X, Z) => Z !== m)),
              style: { background: "none", border: "none", cursor: "pointer", padding: 2, display: "flex", color: n.dangerText },
              title: l("noteModal.removeFile", "Remove"),
              children: /* @__PURE__ */ a(Pt, { size: 12 })
            }
          )
        ] }, `file-${m}`)) })
      ] }),
      /* @__PURE__ */ h("div", { style: { marginTop: 16, paddingTop: 12, borderTop: `1px solid ${n.groupSoftStrong}`, display: "flex", alignItems: "center", justifyItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
        /* @__PURE__ */ a(
          "input",
          {
            type: "date",
            value: P,
            onChange: (y) => Y(y.target.value),
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
        /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }, children: xr.map((y) => /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => z(y.value),
            style: {
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: k === y.value ? `2px solid ${n.group}` : `1.5px solid ${n.groupSoftStrong}`,
              backgroundColor: y.value,
              cursor: "pointer",
              padding: 0,
              transform: k === y.value ? "scale(1.15)" : "scale(1)",
              transition: "all 0.15s",
              boxShadow: k === y.value ? n.shadowSmall : "none"
            },
            title: y.label
          },
          y.value
        )) })
      ] }),
      c.length > 0 && /* @__PURE__ */ h("div", { style: { marginTop: 12, paddingTop: 12, borderTop: `1px solid ${n.groupSoftStrong}` }, children: [
        /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }, children: [
          /* @__PURE__ */ a(Nn, { size: 14, style: { color: n.inkSoft3 } }),
          /* @__PURE__ */ a("span", { style: { fontSize: 11, color: n.inkSoft3, fontWeight: 600 }, children: l("noteModal.dependency", "Dependency") })
        ] }),
        /* @__PURE__ */ h(
          "select",
          {
            value: E,
            onChange: (y) => V(y.target.value),
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
              o.length > 0 && /* @__PURE__ */ a("optgroup", { label: l("noteModal.milestones", "Milestones"), children: o.map((y) => /* @__PURE__ */ a("option", { value: y.id, children: y.name }, y.id)) })
            ]
          }
        ),
        E && /* @__PURE__ */ a(
          "select",
          {
            value: D,
            onChange: (y) => p(y.target.value),
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
            children: Object.keys(un).map((y) => /* @__PURE__ */ a("option", { value: y, children: un[y] }, y))
          }
        )
      ] }),
      /* @__PURE__ */ h("div", { style: { display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 16, marginTop: 12, borderTop: `1px solid ${n.groupSoftStrong}` }, children: [
        /* @__PURE__ */ a(
          "button",
          {
            onClick: t,
            style: { padding: "8px 16px", fontSize: 13, color: n.inkMedium, background: n.surfaceFrost, border: `1px solid ${n.groupSoftStrong}`, borderRadius: 8, cursor: "pointer" },
            children: l("noteModal.cancel", "Cancel")
          }
        ),
        /* @__PURE__ */ h(
          "button",
          {
            onClick: C,
            disabled: S,
            style: { padding: "8px 20px", fontSize: 13, color: n.white, background: n.group, border: "none", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, opacity: S ? 0.5 : 1 },
            children: [
              S && /* @__PURE__ */ a(Yn, { size: 16, style: { animation: "zg-spin 1s linear infinite" } }),
              l("noteModal.create", "Create Note")
            ]
          }
        )
      ] })
    ] })
  ] }) }) : null;
}
export {
  Er as NoteModal,
  Tr as ProjectGantt,
  Ir as darkTheme,
  gr as enUS,
  an as generateGanttTheme,
  zr as ptBR,
  cr as useGanttExport
};
