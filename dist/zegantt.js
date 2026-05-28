import { jsx as a, jsxs as g, Fragment as ze } from "react/jsx-runtime";
import * as xt from "react";
import { createContext as Dn, useContext as Cn, useMemo as ae, useCallback as Z, useRef as be, useEffect as le, useState as G } from "react";
import { Flag as Ke, Clock as Ze, MessageCircle as hn, Plus as Rt, ChevronDown as Dt, ChevronRight as Nt, Paperclip as lt, AlertTriangle as An, Calendar as Ct, Info as Ln, Eye as Fn, Edit2 as Bn, Trash2 as Wn, RotateCcw as $n, X as gn, Upload as Pn, Link2 as On, Loader2 as jn } from "lucide-react";
import { flushSync as Nn } from "react-dom";
const pn = Dn(void 0);
function Yn({ children: e, value: t }) {
  return /* @__PURE__ */ a(pn.Provider, { value: t, children: e });
}
function Pe() {
  const e = Cn(pn);
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
}, de = 50, st = 32, Xn = st * 2, Yt = 460, me = 26, Ve = 28, At = 120, at = 40, fn = 3.5, pe = [
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
], Xt = {
  step: "Steps",
  milestone: "Milestones",
  event: "Events",
  note: "Notes"
};
function _n() {
  const {
    props: e,
    t,
    viewMode: o,
    setViewMode: r,
    isInfiniteCanvas: i,
    zoomPercent: s,
    zoomIn: l,
    zoomOut: d,
    fitToScreen: c,
    visibleTypes: m,
    setVisibleTypes: v,
    newActionOpen: z,
    setNewActionOpen: S,
    newActionRef: P
  } = Pe(), { projectName: N, onAddNewStage: M, onAddMilestone: F, onAddEvent: k, onAddNote: u } = e, I = (y) => {
    v((D) => {
      const E = new Set(D);
      return E.has(y) ? E.delete(y) : E.add(y), E;
    });
  };
  return /* @__PURE__ */ g(
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
        /* @__PURE__ */ g("div", { className: "zg-header-brand", style: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ g("div", { children: [
            /* @__PURE__ */ a("h3", { style: { margin: 0, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: n.textTitle, fontFamily: "var(--zg-font-accent)" }, children: t("planning.gantt", "Project Planning") }),
            /* @__PURE__ */ a("div", { style: { height: 2.5, width: 64, marginTop: 6, borderRadius: 9999, background: n.group } })
          ] }),
          N && /* @__PURE__ */ a(
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
              children: N
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { className: "zg-header-controls", style: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "flex-end", flex: "1 1 560px" }, children: [
          i ? /* @__PURE__ */ g("div", { className: "zg-control-group", style: { display: "flex", alignItems: "center", gap: 6, padding: 4, borderRadius: 10, background: n.groupSoftStrong, border: `1px solid ${n.borderLight}` }, children: [
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
            /* @__PURE__ */ g("span", { style: { minWidth: 58, textAlign: "center", fontSize: 11, fontWeight: 700, color: n.textSecondary }, children: [
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
                onClick: c,
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
          ] }) : /* @__PURE__ */ a("div", { className: "zg-control-group", style: { display: "flex", padding: 4, borderRadius: 10, background: n.groupSoftStrong, border: `1px solid ${n.borderLight}` }, children: ["day", "month"].map((y) => /* @__PURE__ */ a(
            "button",
            {
              className: `zg-segment-btn ${o === y ? "is-active" : "is-inactive"}`,
              onClick: () => r(y),
              style: {
                padding: "6px 20px",
                fontSize: 12,
                fontWeight: 600,
                borderRadius: 6,
                transition: "all 0.2s",
                border: "none",
                cursor: "pointer",
                ...o === y ? { background: n.surface, color: n.group, boxShadow: n.shadowTiny } : { background: "transparent", color: n.textSecondary }
              },
              children: y === "day" ? t("charts.gantt.month", "Month") : t("charts.gantt.year", "Year")
            },
            y
          )) }),
          /* @__PURE__ */ a("div", { className: "zg-control-group zg-control-group--filters", style: { display: "flex", padding: 4, borderRadius: 10, gap: 2, background: n.groupSoftStrong, border: `1px solid ${n.borderLight}`, flexWrap: "wrap" }, children: [
            { type: "step", label: t("gantt.filter.steps", "Steps"), icon: /* @__PURE__ */ a("div", { style: { width: 10, height: 10, borderRadius: 2, background: pe[0].bar, border: `1px solid ${pe[0].barBorder}` } }) },
            { type: "milestone", label: t("gantt.filter.milestones", "Milestones"), icon: /* @__PURE__ */ a(Ke, { size: 11, style: { color: n.milestone } }) },
            { type: "event", label: t("gantt.filter.events", "Events"), icon: /* @__PURE__ */ a(Ze, { size: 11, style: { color: n.event } }) },
            { type: "note", label: t("gantt.filter.notes", "Notes"), icon: /* @__PURE__ */ a(hn, { size: 11, style: { color: n.note } }) }
          ].map((y) => {
            const D = m.has(y.type);
            return /* @__PURE__ */ g(
              "button",
              {
                className: `zg-segment-btn ${D ? "is-active" : "is-inactive"}`,
                onClick: () => I(y.type),
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
                  ...D ? { background: n.surface, color: n.group, boxShadow: n.shadowTiny } : { background: "transparent", color: n.textSecondary, opacity: 0.58 }
                },
                children: [
                  y.icon,
                  /* @__PURE__ */ a("span", { children: y.label })
                ]
              },
              y.type
            );
          }) }),
          M && /* @__PURE__ */ g("div", { ref: P, style: { position: "relative" }, children: [
            /* @__PURE__ */ g(
              "button",
              {
                className: "zg-new-action-btn",
                onClick: () => S((y) => !y),
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
                  /* @__PURE__ */ a(Rt, { size: 16 }),
                  /* @__PURE__ */ a("span", { children: t("charts.gantt.newAction", "New Action") }),
                  /* @__PURE__ */ a(Dt, { size: 14, style: { opacity: 0.7, transform: z ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
                ]
              }
            ),
            z && /* @__PURE__ */ a(
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
                onClick: (y) => y.stopPropagation(),
                children: [
                  {
                    label: t("gantt.newAction.step", "Step"),
                    icon: /* @__PURE__ */ a("div", { style: { width: 14, height: 14, borderRadius: 3, background: pe[0].bar, border: `1.5px solid ${pe[0].barBorder}`, flexShrink: 0 } }),
                    action: () => {
                      M(), S(!1);
                    }
                  },
                  {
                    label: t("gantt.newAction.milestone", "Milestone"),
                    icon: /* @__PURE__ */ a("div", { style: { width: 22, height: 22, borderRadius: "50%", background: n.milestoneRingSoft, border: `1.5px solid ${n.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Ke, { size: 11, style: { color: n.milestone } }) }),
                    action: () => {
                      F?.(), S(!1);
                    }
                  },
                  {
                    label: t("gantt.newAction.event", "Event"),
                    icon: /* @__PURE__ */ a("div", { style: { width: 22, height: 22, borderRadius: "50%", background: n.eventSoft, border: `1.5px solid ${n.eventBorderSoft}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Ze, { size: 11, style: { color: n.event } }) }),
                    action: () => {
                      k?.(), S(!1);
                    }
                  },
                  {
                    label: t("gantt.newAction.note", "Note"),
                    icon: /* @__PURE__ */ a("div", { style: { width: 16, height: 20, background: n.note, borderRadius: 2, boxShadow: n.shadowTiny, position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ a("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: n.stickyTape, borderRadius: 1 } }) }),
                    action: () => {
                      u?.(), S(!1);
                    }
                  }
                ].map((y) => /* @__PURE__ */ g(
                  "button",
                  {
                    onClick: y.action,
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
                      y.icon,
                      y.label
                    ]
                  },
                  y.label
                ))
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Ge(e, t, o) {
  let r = o.initialDeps ?? [], i, s = !0;
  function l() {
    var d, c, m;
    let v;
    o.key && ((d = o.debug) != null && d.call(o)) && (v = Date.now());
    const z = e();
    if (!(z.length !== r.length || z.some((N, M) => r[M] !== N)))
      return i;
    r = z;
    let P;
    if (o.key && ((c = o.debug) != null && c.call(o)) && (P = Date.now()), i = t(...z), o.key && ((m = o.debug) != null && m.call(o))) {
      const N = Math.round((Date.now() - v) * 100) / 100, M = Math.round((Date.now() - P) * 100) / 100, F = M / 16, k = (u, I) => {
        for (u = String(u); u.length < I; )
          u = " " + u;
        return u;
      };
      console.info(
        `%c⏱ ${k(M, 5)} /${k(N, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * F, 120)
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
function _t(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Hn = (e, t) => Math.abs(e - t) < 1.01, Vn = (e, t, o) => {
  let r;
  return function(...i) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, i), o);
  };
}, Ht = (e) => {
  const { offsetWidth: t, offsetHeight: o } = e;
  return { width: t, height: o };
}, Gn = (e) => e, Un = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), o = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let i = t; i <= o; i++)
    r.push(i);
  return r;
}, qn = (e, t) => {
  const o = e.scrollElement;
  if (!o)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const i = (l) => {
    const { width: d, height: c } = l;
    t({ width: Math.round(d), height: Math.round(c) });
  };
  if (i(Ht(o)), !r.ResizeObserver)
    return () => {
    };
  const s = new r.ResizeObserver((l) => {
    const d = () => {
      const c = l[0];
      if (c?.borderBoxSize) {
        const m = c.borderBoxSize[0];
        if (m) {
          i({ width: m.inlineSize, height: m.blockSize });
          return;
        }
      }
      i(Ht(o));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(d) : d();
  });
  return s.observe(o, { box: "border-box" }), () => {
    s.unobserve(o);
  };
}, Vt = {
  passive: !0
}, Gt = typeof window > "u" ? !0 : "onscrollend" in window, Kn = (e, t) => {
  const o = e.scrollElement;
  if (!o)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let i = 0;
  const s = e.options.useScrollendEvent && Gt ? () => {
  } : Vn(
    r,
    () => {
      t(i, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (v) => () => {
    const { horizontal: z, isRtl: S } = e.options;
    i = z ? o.scrollLeft * (S && -1 || 1) : o.scrollTop, s(), t(i, v);
  }, d = l(!0), c = l(!1);
  o.addEventListener("scroll", d, Vt);
  const m = e.options.useScrollendEvent && Gt;
  return m && o.addEventListener("scrollend", c, Vt), () => {
    o.removeEventListener("scroll", d), m && o.removeEventListener("scrollend", c);
  };
}, Zn = (e, t, o) => {
  if (t?.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[o.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[o.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Jn = (e, {
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
class Qn {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var o, r, i;
      return ((i = (r = (o = this.targetWindow) == null ? void 0 : o.performance) == null ? void 0 : r.now) == null ? void 0 : i.call(r)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let o = null;
      const r = () => o || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : o = new this.targetWindow.ResizeObserver((i) => {
        i.forEach((s) => {
          const l = () => {
            const d = s.target, c = this.indexFromElement(d);
            if (!d.isConnected) {
              this.observer.unobserve(d);
              return;
            }
            this.shouldMeasureDuringScroll(c) && this.resizeItem(
              c,
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
        getItemKey: Gn,
        rangeExtractor: Un,
        onChange: () => {
        },
        measureElement: Zn,
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
    }, this.maybeNotify = Ge(
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
        const c = s.get(
          d.lane
        );
        if (c == null || d.end > c.end ? s.set(d.lane, d) : d.end < c.end && i.set(d.lane, !0), i.size === this.options.lanes)
          break;
      }
      return s.size === this.options.lanes ? Array.from(s.values()).sort((l, d) => l.end === d.end ? l.index - d.index : l.end - d.end)[0] : void 0;
    }, this.getMeasurementOptions = Ge(
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
    ), this.getMeasurements = Ge(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: o, paddingStart: r, scrollMargin: i, getItemKey: s, enabled: l, lanes: d }, c) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > o)
          for (const S of this.laneAssignments.keys())
            S >= o && this.laneAssignments.delete(S);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((S) => {
          this.itemSizeCache.set(S.key, S.size);
        }));
        const m = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === o && (this.lanesSettling = !1);
        const v = this.measurementsCache.slice(0, m), z = new Array(d).fill(
          void 0
        );
        for (let S = 0; S < m; S++) {
          const P = v[S];
          P && (z[P.lane] = S);
        }
        for (let S = m; S < o; S++) {
          const P = s(S), N = this.laneAssignments.get(S);
          let M, F;
          if (N !== void 0 && this.options.lanes > 1) {
            M = N;
            const y = z[M], D = y !== void 0 ? v[y] : void 0;
            F = D ? D.end + this.options.gap : r + i;
          } else {
            const y = this.options.lanes === 1 ? v[S - 1] : this.getFurthestMeasurement(v, S);
            F = y ? y.end + this.options.gap : r + i, M = y ? y.lane : S % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(S, M);
          }
          const k = c.get(P), u = typeof k == "number" ? k : this.options.estimateSize(S), I = F + u;
          v[S] = {
            index: S,
            start: F,
            size: u,
            end: I,
            key: P,
            lane: M
          }, z[M] = S;
        }
        return this.measurementsCache = v, v;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ge(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (o, r, i, s) => this.range = o.length > 0 && r > 0 ? eo({
        measurements: o,
        outerSize: r,
        scrollOffset: i,
        lanes: s
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ge(
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
    }, this.getVirtualItems = Ge(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (o, r) => {
        const i = [];
        for (let s = 0, l = o.length; s < l; s++) {
          const d = o[s], c = r[d];
          i.push(c);
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
        return _t(
          r[mn(
            0,
            r.length - 1,
            (i) => _t(r[i]).start,
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
      const [l, d] = s, c = this.now();
      this.scrollState = {
        index: o,
        align: d,
        behavior: i,
        startedAt: c,
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
    if (!l && Hn(i, this.getScrollOffset())) {
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
function eo({
  measurements: e,
  outerSize: t,
  scrollOffset: o,
  lanes: r
}) {
  const i = e.length - 1, s = (c) => e[c].start;
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
    const c = Array(r).fill(0);
    for (; d < i && c.some((v) => v < o + t); ) {
      const v = e[d];
      c[v.lane] = v.end, d++;
    }
    const m = Array(r).fill(o + t);
    for (; l >= 0 && m.some((v) => v >= o); ) {
      const v = e[l];
      m[v.lane] = v.start, l--;
    }
    l = Math.max(0, l - l % r), d = Math.min(i, d + (r - 1 - d % r));
  }
  return { startIndex: l, endIndex: d };
}
const Ut = typeof document < "u" ? xt.useLayoutEffect : xt.useEffect;
function to({
  useFlushSync: e = !0,
  ...t
}) {
  const o = xt.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (s, l) => {
      var d;
      e && l ? Nn(o) : o(), (d = t.onChange) == null || d.call(t, s, l);
    }
  }, [i] = xt.useState(
    () => new Qn(r)
  );
  return i.setOptions(r), Ut(() => i._didMount(), []), Ut(() => i._willUpdate()), i;
}
function Lt(e) {
  return to({
    observeElementRect: qn,
    observeElementOffset: Kn,
    scrollToFn: Jn,
    ...e
  });
}
const yn = 864e5, ye = (e, t) => new Date(e.getTime() + t * yn), Fe = (e, t) => Math.round((t.getTime() - e.getTime()) / yn), qt = (e) => new Date(e.getFullYear(), e.getMonth(), 1), Et = (e) => new Date(e.getFullYear(), e.getMonth() + 1, 0), bn = (e) => {
  if (!e) return "en-US";
  try {
    return new Intl.DateTimeFormat(e).resolvedOptions().locale;
  } catch {
    return "en-US";
  }
}, ge = (e, t = "en-US") => new Intl.DateTimeFormat(bn(t), {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
}).format(e), Kt = (e, t = "en") => new Intl.DateTimeFormat(bn(t), { month: "long" }).format(e).toUpperCase();
function no() {
  const {
    props: e,
    t,
    displayRows: o,
    leftBodyRef: r,
    handleLeftScroll: i,
    toggleProject: s,
    toggleGroup: l,
    hoveredTaskId: d,
    setHoveredTaskId: c,
    selectedTaskId: m,
    setSelectedTaskId: v,
    delayedIds: z,
    criticalIds: S,
    relatedIds: P,
    setActivePinboardTask: N,
    groupProgress: M,
    sidebarW: F
  } = Pe(), k = (R) => ({
    id: R.id,
    name: R.name,
    start: R.start,
    end: R.end,
    type: R.originalType === "step" ? "task" : "milestone",
    progress: R.progress
  }), u = Lt({
    count: o.length,
    getScrollElement: () => r.current,
    estimateSize: () => de,
    overscan: 12
  }), I = u.getVirtualItems(), y = Math.max(u.getTotalSize(), 400) + 80, D = ae(
    () => o.filter((R) => R.kind === "task").map((R) => R.task.id),
    [o]
  ), E = Z((R, A) => {
    const _ = D.indexOf(R);
    if (_ < 0) return;
    const b = Math.min(Math.max(0, _ + A), D.length - 1), W = D[b];
    W && v(W);
  }, [D, v]);
  return /* @__PURE__ */ g("div", { style: { width: F, flexShrink: 0, borderRight: `1px solid ${n.border}`, display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ g(
      "div",
      {
        style: {
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          height: Xn,
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
        children: /* @__PURE__ */ a("div", { style: { height: y, position: "relative" }, children: I.map((R) => {
          const A = o[R.index];
          if (!A) return null;
          const _ = {
            position: "absolute",
            top: R.start,
            left: 0,
            width: "100%",
            height: de
          };
          if (A.kind === "projectHeader")
            return /* @__PURE__ */ a(
              "div",
              {
                style: {
                  ..._,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  borderBottom: `1.5px solid ${n.groupBorderWeak}`,
                  background: n.groupSoft
                },
                onClick: () => s(A.projectId),
                onKeyDown: (ee) => {
                  (ee.key === "Enter" || ee.key === " ") && (ee.preventDefault(), s(A.projectId));
                },
                role: "button",
                tabIndex: 0,
                "aria-label": `Toggle project ${A.projectTitle}`,
                "aria-expanded": !A.collapsed,
                children: /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  A.collapsed ? /* @__PURE__ */ a(Nt, { size: 15, style: { color: n.group, flexShrink: 0 } }) : /* @__PURE__ */ a(Dt, { size: 15, style: { color: n.group, flexShrink: 0 } }),
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
                  }, children: A.projectTitle }),
                  M.byProject.has(A.projectId) && /* @__PURE__ */ g(ze, { children: [
                    /* @__PURE__ */ a("div", { style: { flex: 1, height: 4, background: "rgba(26,60,48,0.2)", borderRadius: 2, overflow: "hidden", minWidth: 40 }, children: /* @__PURE__ */ a("div", { style: {
                      width: `${M.byProject.get(A.projectId)}%`,
                      height: "100%",
                      background: n.group,
                      borderRadius: 2
                    } }) }),
                    /* @__PURE__ */ g("span", { style: { fontSize: 10, fontWeight: 700, color: n.group, flexShrink: 0, marginRight: 4 }, children: [
                      M.byProject.get(A.projectId),
                      "%"
                    ] })
                  ] })
                ] })
              },
              `ph-${A.projectId}`
            );
          if (A.kind === "group") {
            const ee = A.projectId ? `${A.projectId}-${A.groupType}` : A.groupType;
            return /* @__PURE__ */ a(
              "div",
              {
                style: {
                  ..._,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  borderBottom: `1px solid ${n.border}`,
                  background: n.headerBg
                },
                onClick: () => l(ee),
                onKeyDown: (ne) => {
                  (ne.key === "Enter" || ne.key === " ") && (ne.preventDefault(), l(ee));
                },
                role: "button",
                tabIndex: 0,
                "aria-label": `Toggle group ${A.label}`,
                "aria-expanded": !A.collapsed,
                children: /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  A.collapsed ? /* @__PURE__ */ a(Nt, { size: 14, style: { color: n.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ a(Dt, { size: 14, style: { color: n.textSecondary, flexShrink: 0 } }),
                  /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: n.textTitle, flexShrink: 0 }, children: t(`gantt.group.${A.groupType}`, A.label) }),
                  /* @__PURE__ */ a("span", { style: { fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 9999, background: n.groupSoftStrong, color: n.textSecondary, flexShrink: 0 }, children: A.count }),
                  A.groupType === "step" && M.byType.has("step") && /* @__PURE__ */ g(ze, { children: [
                    /* @__PURE__ */ a("div", { style: { flex: 1, height: 4, background: n.borderLight, borderRadius: 2, overflow: "hidden", minWidth: 40 }, children: /* @__PURE__ */ a("div", { style: {
                      width: `${M.byType.get("step")}%`,
                      height: "100%",
                      background: n.group,
                      borderRadius: 2,
                      transition: "width 0.3s"
                    } }) }),
                    /* @__PURE__ */ g("span", { style: { fontSize: 10, fontWeight: 700, color: n.textSecondary, flexShrink: 0 }, children: [
                      M.byType.get("step"),
                      "%"
                    ] })
                  ] })
                ] })
              },
              `g-${ee}`
            );
          }
          const b = A.task, W = m === b.id, x = d === b.id, f = b.originalType !== "step", $ = z.has(b.id), U = S.has(b.id), te = m !== null && b.id !== m && !P.has(b.id), Q = m !== null && P.has(b.id), K = $ ? n.dangerBgSoft : W ? n.groupLight : Q ? n.groupLightStrong : x ? n.pageBg : n.surface;
          return /* @__PURE__ */ g(
            "div",
            {
              style: {
                ..._,
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                cursor: "pointer",
                transition: "opacity 0.18s, background 0.15s",
                borderBottom: `1px solid ${n.borderLight}`,
                background: K,
                borderLeft: W ? `3px solid ${n.group}` : Q ? `3px solid ${n.groupGlow}` : U ? `3px solid ${n.today}` : void 0,
                opacity: te ? 0.3 : 1
              },
              onClick: (ee) => {
                ee.stopPropagation(), v((ne) => ne === b.id ? null : b.id);
              },
              onDoubleClick: () => e.onTaskClick?.(k(b)),
              onMouseEnter: () => c(b.id),
              onMouseLeave: () => c(null),
              onKeyDown: (ee) => {
                if (ee.key === "Enter") {
                  ee.preventDefault(), e.onTaskClick?.(k(b));
                  return;
                }
                if (ee.key === " ") {
                  ee.preventDefault(), v((ne) => ne === b.id ? null : b.id);
                  return;
                }
                if (ee.key === "ArrowDown") {
                  ee.preventDefault(), E(b.id, 1);
                  return;
                }
                ee.key === "ArrowUp" && (ee.preventDefault(), E(b.id, -1));
              },
              role: "button",
              tabIndex: 0,
              "aria-selected": W,
              "aria-label": `Task ${b.name}`,
              children: [
                /* @__PURE__ */ g("div", { style: { flex: 1, display: "flex", alignItems: "center", gap: 8, minWidth: 0, paddingRight: 8 }, children: [
                  b.originalType === "step" && /* @__PURE__ */ a("div", { style: { flexShrink: 0, borderRadius: 4, width: 14, height: 14, background: pe[b.colorIdx ?? 0].bar, border: `1.5px solid ${pe[b.colorIdx ?? 0].barBorder}` } }),
                  b.originalType === "milestone" && /* @__PURE__ */ a("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: n.milestoneRingSoft, border: `1.5px solid ${n.milestoneRing}` }, children: /* @__PURE__ */ a(Ke, { size: 11, style: { color: n.milestone } }) }),
                  b.originalType === "event" && /* @__PURE__ */ a("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: n.eventSoft, border: `1.5px solid ${n.eventBorderSoft}` }, children: /* @__PURE__ */ a(Ze, { size: 11, style: { color: n.event } }) }),
                  b.originalType === "note" && /* @__PURE__ */ a("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4, width: 22, height: 22, background: "rgba(254,240,138,0.4)", border: "1.5px solid rgba(250,204,21,0.5)" }, children: /* @__PURE__ */ a(hn, { size: 11, style: { color: n.note } }) }),
                  /* @__PURE__ */ a("div", { style: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }, children: /* @__PURE__ */ a(
                    "span",
                    {
                      style: {
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.25,
                        color: W ? n.group : $ ? n.today : n.textPrimary,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: b.name
                    }
                  ) }),
                  (b.attachedNotes?.length || 0) > 0 && /* @__PURE__ */ g(
                    "button",
                    {
                      className: "zg-note-badge-btn",
                      "aria-label": `Open ${b.attachedNotes?.length} linked notes`,
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
                      onClick: (ee) => {
                        ee.stopPropagation(), N(b);
                      },
                      children: [
                        /* @__PURE__ */ a(lt, { size: 12 }),
                        b.attachedNotes?.length
                      ]
                    }
                  ),
                  $ && /* @__PURE__ */ a(An, { size: 12, style: { flexShrink: 0, color: n.today } })
                ] }),
                /* @__PURE__ */ a("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: $ ? n.today : n.textMuted }, children: ge(b.start, e.locale) }),
                /* @__PURE__ */ a("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: $ ? n.today : n.textMuted }, children: f ? "—" : ge(b.end, e.locale) })
              ]
            },
            b.id
          );
        }) })
      }
    )
  ] });
}
function oo(e, t, o = "en", r) {
  const i = r ?? (t === "day" ? at : fn), s = (F, k) => {
    const u = [], I = (/* @__PURE__ */ new Date()).toDateString();
    let y = -1;
    for (let D = 0; D < k; D++) {
      const E = ye(F, D), R = E.toDateString() === I;
      R && (y = D), u.push({
        date: E,
        isToday: R,
        isWeekend: E.getDay() === 0 || E.getDay() === 6
      });
    }
    return { daysArr: u, todayIndex: y };
  };
  if (e.length === 0) {
    const F = /* @__PURE__ */ new Date(), k = qt(F), u = Et(F), I = Fe(k, u) + 1, { daysArr: y, todayIndex: D } = s(k, I);
    return {
      start: k,
      end: u,
      totalDays: I,
      dayWidth: i,
      totalWidth: I * i,
      months: [{ date: k, label: `${Kt(k, o)} ${k.getFullYear()}`, startDay: 0, days: I, width: I * i }],
      years: [{ label: k.getFullYear().toString(), width: I * i }],
      days: y,
      todayIndex: D
    };
  }
  let l = new Date(e[0].start), d = new Date(e[0].end);
  e.forEach((F) => {
    F.start < l && (l = new Date(F.start)), F.end > d && (d = new Date(F.end));
  });
  const c = qt(ye(l, -14)), m = Et(ye(d, 14)), v = Fe(c, m) + 1, z = [];
  let S = new Date(c);
  for (; S <= m; ) {
    const F = Et(S), k = F > m ? m : F, u = Fe(c, S), I = Fe(S, k) + 1;
    z.push({
      date: new Date(S),
      label: `${Kt(S, o)} ${S.getFullYear()}`,
      startDay: u,
      days: I,
      width: I * i
    }), S = new Date(S.getFullYear(), S.getMonth() + 1, 1);
  }
  const { daysArr: P, todayIndex: N } = s(c, v), M = [];
  if (t === "month") {
    let F = "", k = 0;
    for (const u of z) {
      const I = u.date.getFullYear().toString();
      I !== F ? (F && M.push({ label: F, width: k * i }), F = I, k = u.days) : k += u.days;
    }
    F && M.push({ label: F, width: k * i });
  }
  return { start: c, end: m, totalDays: v, dayWidth: i, totalWidth: v * i, months: z, years: M, days: P, todayIndex: N };
}
function Me(e, t) {
  return Fe(t.start, e) * t.dayWidth;
}
function ro({
  task: e,
  x: t,
  y: o,
  w: r,
  progW: i,
  isHov: s,
  isDrag: l,
  isResize: d,
  isCritical: c,
  isDelayed: m,
  isConnectTarget: v,
  showDots: z,
  isBarDimmed: S,
  isBarHighlighted: P,
  commonEvents: N,
  handleResizeMouseDown: M,
  handleResizeTouchStart: F,
  handleConnectDotMouseDown: k,
  handleConnectDotTouchStart: u
}) {
  const { timeline: I, viewMode: y, props: D } = Pe();
  if (e.originalType === "step") {
    const E = pe[e.colorIdx ?? 0], R = o + (de - me) / 2, A = e.barColor || E.bar, _ = e.progressColor || E.progress, b = e.borderColor || E.barBorder, x = D.showLabelOutside !== !1 && r < 55, f = c || m ? n.today : n.textPrimary, $ = !!(e.previsionStart && e.previsionEnd), U = $ ? Me(e.previsionStart, I) : 0, te = $ ? Math.max(Me(e.previsionEnd, I) - U, y === "month" ? I.dayWidth : 6) : 0, Q = R + me + 3;
    return /* @__PURE__ */ g(ze, { children: [
      $ && /* @__PURE__ */ a(
        "div",
        {
          title: `Previsto: ${ge(e.previsionStart, D.locale)} → ${ge(e.previsionEnd, D.locale)}`,
          style: {
            position: "absolute",
            left: U,
            top: Q,
            width: te,
            height: 5,
            borderRadius: 3,
            background: `color-mix(in srgb, ${_}, transparent 80%)`,
            border: `1.5px solid color-mix(in srgb, ${_}, transparent 60%)`,
            boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${_}, transparent 85%)`,
            pointerEvents: "none",
            zIndex: 5
          }
        }
      ),
      /* @__PURE__ */ g(
        "div",
        {
          "data-task-id": e.id,
          ...N,
          role: "button",
          tabIndex: 0,
          "aria-label": `Task bar ${e.name}`,
          style: {
            position: "absolute",
            left: t,
            top: R,
            width: r,
            height: me,
            borderRadius: me / 2,
            background: m ? n.delayedTaskBg : A,
            border: c ? `2px solid ${n.today}` : m ? `1.5px solid ${n.todayStrong}` : `1.5px solid ${b}`,
            cursor: l || d ? "grabbing" : "grab",
            zIndex: s || v ? 20 : 10,
            boxShadow: v ? `0 0 0 2px ${n.group}, 0 4px 16px ${n.groupGlowSoft}` : c ? `0 0 0 1px ${n.todayMid}, 0 3px 12px ${n.todaySoft}` : P && !s ? `0 0 0 2px ${n.groupGlowStrong}, 0 3px 14px ${n.groupGlowSoft}` : s ? `0 3px 12px color-mix(in srgb, ${_}, transparent 85%)` : "none",
            transform: s ? "scaleY(1.06)" : "scaleY(1)",
            opacity: S ? 0.15 : 1,
            transition: l || d ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
            overflow: "visible"
          },
          children: [
            /* @__PURE__ */ g("div", { style: { position: "absolute", left: 0, top: 0, width: r, height: "100%", borderRadius: me / 2, overflow: "hidden", pointerEvents: "none" }, children: [
              /* @__PURE__ */ a("div", { style: {
                position: "absolute",
                left: 0,
                top: 0,
                width: i,
                height: "100%",
                background: m ? n.today : _,
                borderRadius: `${me / 2}px 0 0 ${me / 2}px`,
                transition: l || d ? "none" : "width 0.3s"
              } }),
              r > 50 && /* @__PURE__ */ g("span", { style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: e.progress > 50 ? n.white : m ? n.today : _,
                zIndex: 1,
                pointerEvents: "none"
              }, children: [
                Math.round(e.progress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ a("div", { onMouseDown: (K) => M(K, e, "left"), onTouchStart: (K) => F(K, e, "left"), style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${me / 2}px 0 0 ${me / 2}px` } }),
            /* @__PURE__ */ a("div", { onMouseDown: (K) => M(K, e, "right"), onTouchStart: (K) => F(K, e, "right"), style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${me / 2}px ${me / 2}px 0` } }),
            z && /* @__PURE__ */ g(ze, { children: [
              /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (K) => k(K, e, "left"), onTouchStart: (K) => u(K, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
              /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (K) => k(K, e, "right"), onTouchStart: (K) => u(K, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } })
            ] })
          ]
        }
      ),
      x && /* @__PURE__ */ a(
        "span",
        {
          style: {
            position: "absolute",
            left: t + r + 6,
            top: R,
            height: me,
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
            opacity: S ? 0.15 : 1,
            transition: "opacity 0.18s"
          },
          title: e.name,
          children: e.name
        }
      )
    ] });
  }
  if (e.originalType === "milestone") {
    const E = o + (de - Ve) / 2;
    return /* @__PURE__ */ g(
      "div",
      {
        "data-task-id": e.id,
        ...N,
        role: "button",
        tabIndex: 0,
        "aria-label": `Milestone ${e.name}`,
        style: {
          position: "absolute",
          left: t - 6,
          top: E,
          height: Ve,
          minWidth: At,
          borderRadius: Ve / 2,
          background: c ? n.criticalPillBg : n.milestonePillBg,
          border: v ? `2px solid ${n.group}` : c ? `2px solid ${n.today}` : `1.5px solid ${n.milestoneRing}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: l ? "grabbing" : "grab",
          zIndex: s || v ? 20 : 10,
          boxShadow: v ? `0 0 0 2px ${n.group}, 0 4px 16px ${n.groupGlowSoft}` : c ? `0 0 0 1px ${n.todayMid}, 0 3px 12px ${n.todaySoft}` : P && !s ? `0 0 0 2px ${n.groupGlowStrong}, 0 3px 14px ${n.groupGlowSoft}` : s ? `0 3px 12px ${n.milestoneRingSoft}` : n.shadowSoft,
          opacity: S ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: s ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ a("div", { style: { width: 20, height: 20, borderRadius: "50%", background: c ? n.today : n.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Ke, { size: 11, color: n.white, strokeWidth: 2.5 }) }),
          /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: c ? n.today : n.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: e.name }),
          e.progress >= 100 && /* @__PURE__ */ a("span", { style: { fontSize: 9, fontWeight: 700, color: n.white, background: n.milestoneRing, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          z && /* @__PURE__ */ g(ze, { children: [
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (R) => k(R, e, "left"), onTouchStart: (R) => u(R, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (R) => k(R, e, "right"), onTouchStart: (R) => u(R, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (e.originalType === "event") {
    const E = o + (de - Ve) / 2;
    return /* @__PURE__ */ g(
      "div",
      {
        "data-task-id": e.id,
        ...N,
        role: "button",
        tabIndex: 0,
        "aria-label": `Event ${e.name}`,
        style: {
          position: "absolute",
          left: t - 6,
          top: E,
          height: Ve,
          minWidth: At,
          borderRadius: Ve / 2,
          background: c ? n.criticalPillBg : n.eventPillBg,
          border: v ? `2px solid ${n.group}` : c ? `2px solid ${n.today}` : `1.5px solid ${n.event}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: l ? "grabbing" : "grab",
          zIndex: s || v ? 20 : 10,
          boxShadow: v ? `0 0 0 2px ${n.group}, 0 4px 16px ${n.groupGlowSoft}` : c ? `0 0 0 1px ${n.todayMid}, 0 3px 12px ${n.todaySoft}` : P && !s ? `0 0 0 2px ${n.groupGlowStrong}, 0 3px 14px ${n.groupGlowSoft}` : s ? `0 3px 12px ${n.eventBorderSoft}` : n.shadowSoft,
          opacity: S ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: s ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ a("div", { style: { width: 20, height: 20, borderRadius: "50%", background: c ? n.today : n.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Ze, { size: 11, color: n.white, strokeWidth: 2.5 }) }),
          /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: c ? n.today : n.event, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: e.name }),
          e.progress >= 100 && /* @__PURE__ */ a("span", { style: { fontSize: 9, fontWeight: 700, color: n.white, background: n.event, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          z && /* @__PURE__ */ g(ze, { children: [
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (R) => k(R, e, "left"), onTouchStart: (R) => u(R, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (R) => k(R, e, "right"), onTouchStart: (R) => u(R, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (e.originalType === "note") {
    const R = o + 4, A = e.noteColor || n.noteDefaultBg, _ = e.filesCount || 0;
    return /* @__PURE__ */ g(
      "div",
      {
        "data-task-id": e.id,
        ...N,
        role: "button",
        tabIndex: 0,
        "aria-label": `Note ${e.name}`,
        style: {
          position: "absolute",
          left: t,
          top: R,
          width: 148,
          minHeight: 72,
          background: A,
          borderRadius: 3,
          cursor: l ? "grabbing" : "grab",
          zIndex: s || v ? 20 : 10,
          boxShadow: v ? `0 0 0 2px ${n.group}, ${n.shadowStickyStrong}` : P && !s ? `0 0 0 2px ${n.groupGlowStrong}, ${n.shadowStickyHover}` : s ? n.shadowStickyHover : n.shadowSticky,
          opacity: S ? 0.2 : 1,
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
          /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 2 }, children: [
            /* @__PURE__ */ a("span", { style: { fontSize: 9, fontWeight: 500, color: n.inkSoft4 }, children: ge(e.start, D.locale) }),
            _ > 0 && /* @__PURE__ */ g("span", { style: {
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 9,
              color: n.inkSoft4
            }, children: [
              /* @__PURE__ */ a(lt, { size: 8 }),
              " ",
              _
            ] })
          ] }),
          z && /* @__PURE__ */ g(ze, { children: [
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (b) => k(b, e, "left"), onTouchStart: (b) => u(b, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ a("div", { "data-task-id": e.id, onMouseDown: (b) => k(b, e, "right"), onTouchStart: (b) => u(b, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: n.group, border: `2.5px solid ${n.connectorDotBorder}`, boxShadow: n.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  return null;
}
function io({ arrows: e }) {
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
  return /* @__PURE__ */ a(ze, { children: s.map((d, c) => {
    const m = o === d.predId || o === d.succId, v = !r || d.predId === r || d.succId === r || i.has(d.predId) || i.has(d.succId), z = r !== null && v, S = l[d.depType] ?? n.arrow, P = m ? n.arrowHover : z ? S : n.arrow;
    return /* @__PURE__ */ g("g", { style: { opacity: v ? z ? 1 : void 0 : 0.08, transition: "opacity 0.18s" }, children: [
      /* @__PURE__ */ a(
        "path",
        {
          d: d.path,
          fill: "none",
          stroke: P,
          strokeWidth: z ? 2.5 : m ? 2 : 1.5,
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
      d.lag !== 0 && /* @__PURE__ */ g("g", { children: [
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
    ] }, c);
  }) });
}
const Zt = (e, t) => Math.round((t.getTime() - e.getTime()) / 864e5) + 1;
function so({ task: e, x: t, y: o }) {
  const { props: r, t: i } = Pe(), s = () => {
    switch (e.originalType) {
      case "step":
        return /* @__PURE__ */ a("div", { style: {
          width: 14,
          height: 14,
          borderRadius: 3,
          background: pe[e.colorIdx ?? 0].bar,
          border: `1.5px solid ${pe[e.colorIdx ?? 0].barBorder}`,
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
        }, children: /* @__PURE__ */ a(Ze, { size: 10, color: n.white, strokeWidth: 2.5 }) });
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
        return /* @__PURE__ */ a(Ln, { size: 14 });
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
  }, children: /* @__PURE__ */ g(
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
        /* @__PURE__ */ g("div", { style: {
          padding: "12px 16px",
          borderBottom: "1px solid var(--zg-border-light)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(255,255,255,0.4)"
        }, children: [
          s(),
          /* @__PURE__ */ g("div", { style: { display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }, children: [
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
        /* @__PURE__ */ g("div", { style: { padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 }, children: [
          e.projectTitle && /* @__PURE__ */ g("div", { style: {
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
          e.originalType === "step" ? /* @__PURE__ */ g("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
            e.previsionStart && e.previsionEnd && /* @__PURE__ */ g("div", { style: { background: n.headerBg, borderRadius: 8, padding: "8px 10px", border: `1px solid ${n.borderLight}` }, children: [
              /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }, children: [
                /* @__PURE__ */ a(Ct, { size: 12, style: { color: n.textSecondary } }),
                /* @__PURE__ */ a("span", { style: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: n.textSecondary }, children: i("gantt.tooltip.planned", "Planned") })
              ] }),
              /* @__PURE__ */ g("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11 }, children: [
                /* @__PURE__ */ g("span", { style: { color: n.textSecondary }, children: [
                  ge(e.previsionStart, r.locale),
                  " → ",
                  ge(e.previsionEnd, r.locale)
                ] }),
                /* @__PURE__ */ g("span", { style: { fontWeight: 700, color: n.textPrimary }, children: [
                  Zt(e.previsionStart, e.previsionEnd),
                  "d"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ g("div", { style: {
              background: e.hasActualDates ? "color-mix(in srgb, var(--zg-group-light), transparent 90%)" : "transparent",
              borderRadius: 8,
              padding: e.hasActualDates ? "8px 10px" : "0",
              border: e.hasActualDates ? "1px solid color-mix(in srgb, var(--zg-group-light), transparent 70%)" : "none"
            }, children: [
              !e.hasActualDates && /* @__PURE__ */ a("div", { style: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: n.textMuted, marginBottom: 4 }, children: i("gantt.tooltip.plannedInUse", "Planned (in use)") }),
              /* @__PURE__ */ g("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
                /* @__PURE__ */ g("span", { style: { fontWeight: 600, color: n.textPrimary }, children: [
                  ge(e.start, r.locale),
                  " → ",
                  ge(e.end, r.locale)
                ] }),
                /* @__PURE__ */ g("span", { style: { fontWeight: 700, color: n.group }, children: [
                  Zt(e.start, e.end),
                  "d"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ g("div", { style: { marginTop: 4 }, children: [
              /* @__PURE__ */ g("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }, children: [
                /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: n.textSecondary }, children: i("charts.gantt.progress", "Progress") }),
                /* @__PURE__ */ g("span", { style: { fontSize: 12, fontWeight: 800, color: n.group }, children: [
                  Math.round(e.progress),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ a("div", { style: { width: "100%", height: 6, background: n.borderLight, borderRadius: 3, overflow: "hidden" }, children: /* @__PURE__ */ a("div", { style: {
                width: `${e.progress}%`,
                height: "100%",
                background: pe[e.colorIdx ?? 0].progress,
                borderRadius: 3
              } }) })
            ] })
          ] }) : /* @__PURE__ */ g("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
            /* @__PURE__ */ g("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
                /* @__PURE__ */ a(Ct, { size: 14, style: { color: n.textMuted } }),
                /* @__PURE__ */ a("span", { style: { fontSize: 12, fontWeight: 600, color: n.textPrimary }, children: ge(e.start, r.locale) })
              ] }),
              e.originalType === "note" && (e.filesCount || 0) > 0 && /* @__PURE__ */ g("div", { style: {
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
                /* @__PURE__ */ a(lt, { size: 10 }),
                e.filesCount,
                " ",
                i("gantt.tooltip.attachments", "Attachments")
              ] })
            ] }),
            e.attachedNotes && e.attachedNotes.length > 0 && /* @__PURE__ */ g("div", { style: {
              marginTop: 4,
              padding: "8px 10px",
              background: n.noteBadgeBg,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
              border: `1px solid color-mix(in srgb, ${n.noteBadgeBg}, black 10%)`
            }, children: [
              /* @__PURE__ */ a(lt, { size: 12, style: { color: n.noteBadgeText } }),
              /* @__PURE__ */ g("span", { style: { fontSize: 11, fontWeight: 700, color: n.noteBadgeText }, children: [
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
const ft = (e) => ({
  id: e.id,
  name: e.name,
  start: e.start,
  end: e.end,
  type: e.originalType === "step" ? "task" : e.originalType,
  progress: e.progress
}), mt = (e, t) => {
  switch (e) {
    case "step":
      return /* @__PURE__ */ a("div", { style: { width: 12, height: 12, borderRadius: 2, background: pe[t ?? 0].bar, border: `1.5px solid ${pe[t ?? 0].barBorder}`, flexShrink: 0 } });
    case "milestone":
      return /* @__PURE__ */ a("div", { style: { width: 16, height: 16, borderRadius: "50%", background: n.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Ke, { size: 8, color: n.white }) });
    case "event":
      return /* @__PURE__ */ a("div", { style: { width: 16, height: 16, borderRadius: "50%", background: n.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ a(Ze, { size: 8, color: n.white }) });
    case "note":
      return /* @__PURE__ */ a("div", { style: { width: 12, height: 14, background: n.note, borderRadius: 2, boxShadow: n.shadowSmall, flexShrink: 0 } });
    default:
      return null;
  }
};
function ao() {
  const {
    props: e,
    t,
    viewMode: o,
    isInfiniteCanvas: r,
    timeline: i,
    displayRows: s,
    dragState: l,
    resizeState: d,
    connectState: c,
    pendingConnection: m,
    setPendingConnection: v,
    depModalType: z,
    setDepModalType: S,
    depModalLag: P,
    setDepModalLag: N,
    depCreating: M,
    deletingDepId: F,
    setDeletingDepId: k,
    chartMenu: u,
    setChartMenu: I,
    rightBodyRef: y,
    timeHeaderRef: D,
    handleChartMouseDown: E,
    handleChartTouchStart: R,
    handleChartWheel: A,
    openChartMenu: _,
    handleRightScroll: b,
    hoveredTaskId: W,
    setHoveredTaskId: x,
    selectedTaskId: f,
    setSelectedTaskId: $,
    tooltip: U,
    setTooltip: te,
    popupState: Q,
    setPopupState: K,
    handleBarClick: ee,
    arrows: ne,
    criticalIds: ce,
    delayedIds: we,
    relatedIds: se,
    handleBarMouseDown: Ie,
    handleBarTouchStart: Je,
    handleResizeMouseDown: kt,
    handleResizeTouchStart: Oe,
    handleConnectDotMouseDown: je,
    handleConnectDotTouchStart: dt,
    handleCreateDependency: ct
  } = Pe(), {
    onViewStage: Qe,
    onEditStage: zt,
    onDeleteStage: It,
    onDeleteDependency: Ne,
    onAddNewStage: ut,
    onAddMilestone: et,
    onAddEvent: ht,
    onAddNote: tt
  } = e, nt = Lt({
    count: s.length,
    getScrollElement: () => y.current,
    estimateSize: () => de,
    overscan: 12
  }), We = nt.getVirtualItems(), Ye = Lt({
    horizontal: !0,
    count: i.days.length,
    getScrollElement: () => y.current,
    estimateSize: () => i.dayWidth,
    overscan: 10
  }).getVirtualItems(), Se = Math.max(nt.getTotalSize(), 400) + 80, Xe = ae(() => {
    const T = /* @__PURE__ */ new Set();
    for (const V of We) {
      const H = s[V.index];
      H?.kind === "task" && T.add(H.task.id);
    }
    return T;
  }, [We, s]), X = ae(
    () => ne.filter((T) => Xe.has(T.predId) || Xe.has(T.succId)),
    [ne, Xe]
  ), L = () => K({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  return /* @__PURE__ */ g("div", { style: { flex: 1, width: "100%", background: "var(--zg-surface-alt)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", borderLeft: e.hideSidebar ? "none" : `1px solid ${n.borderLight}` }, children: [
    /* @__PURE__ */ a(
      "div",
      {
        ref: D,
        style: {
          boxSizing: "border-box",
          height: st * 2,
          background: n.headerBg,
          borderBottom: `1px solid ${n.borderLight}`,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          boxShadow: n.shadowTiny
        },
        onWheel: A,
        children: /* @__PURE__ */ g("div", { style: { width: i.totalWidth, height: "100%", position: "relative" }, children: [
          /* @__PURE__ */ g("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: st, display: "flex" }, children: [
            o === "day" && i.months.map((T, V) => /* @__PURE__ */ a("div", { style: { width: T.width, position: "relative", height: "100%", borderRight: `1px solid ${n.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ a("span", { style: { fontSize: 13, fontWeight: 700, color: n.textTitle, letterSpacing: "0.02em" }, children: T.label }) }, V)),
            o === "month" && i.years?.map((T, V) => /* @__PURE__ */ a("div", { style: { width: T.width, position: "relative", height: "100%", borderRight: `1px solid ${n.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ a("span", { style: { fontSize: 13, fontWeight: 700, color: n.textTitle, letterSpacing: "0.02em" }, children: T.label }) }, V))
          ] }),
          /* @__PURE__ */ g("div", { style: { position: "absolute", top: st, left: 0, right: 0, height: st, display: "flex" }, children: [
            o === "day" && /* @__PURE__ */ a("div", { style: { width: i.totalWidth, height: "100%", position: "relative" }, children: Ye.map((T) => {
              const V = i.days[T.index];
              if (!V) return null;
              const H = V.isToday;
              return /* @__PURE__ */ a(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: T.start,
                    width: T.size,
                    height: "100%",
                    borderRight: `1px solid ${n.borderLight}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: H ? 800 : 500, color: H ? n.today : n.textSecondary, letterSpacing: "-0.03em" }, children: V.date.getDate().toString().padStart(2, "0") })
                },
                `day-${T.index}`
              );
            }) }),
            o === "month" && i.months.map((T, V) => /* @__PURE__ */ a("div", { style: { width: T.width, position: "relative", height: "100%", borderRight: `1px solid ${n.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ a("span", { style: { fontSize: 11, fontWeight: 600, color: n.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em" }, children: T.label.substring(0, 3) }) }, V))
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        ref: y,
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
        onScroll: b,
        onMouseDown: E,
        onTouchStart: R,
        onWheel: A,
        onContextMenu: _,
        onClick: () => {
          $(null), K({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
        },
        children: /* @__PURE__ */ g("div", { style: { width: i.totalWidth, height: Se, position: "relative" }, children: [
          /* @__PURE__ */ g("svg", { width: i.totalWidth, height: Se, style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" }, children: [
            /* @__PURE__ */ g("defs", { children: [
              /* @__PURE__ */ a("pattern", { id: "gantt-y-lines", x: "0", y: "0", width: i.dayWidth, height: de, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ a("line", { x1: i.dayWidth, y1: "0", x2: i.dayWidth, y2: de, stroke: n.border, strokeWidth: "1", strokeDasharray: "4 4", opacity: "0.4" }) }),
              /* @__PURE__ */ a("pattern", { id: "gantt-x-lines", x: "0", y: "0", width: i.dayWidth, height: de, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ a("line", { x1: "0", y1: de, x2: i.dayWidth, y2: de, stroke: n.borderLight, strokeWidth: "1" }) })
            ] }),
            /* @__PURE__ */ a("rect", { width: "100%", height: "100%", fill: "url(#gantt-x-lines)" }),
            /* @__PURE__ */ a("rect", { width: "100%", height: "100%", fill: "url(#gantt-y-lines)" }),
            o === "day" && Ye.map((T) => i.days[T.index]?.isWeekend ? /* @__PURE__ */ a("rect", { x: T.start, y: 0, width: T.size, height: Se, fill: n.weekendBg, opacity: 0.6 }, `we-${T.index}`) : null),
            o === "month" && Ye.map((T) => i.days[T.index]?.isWeekend ? /* @__PURE__ */ a("rect", { x: T.start, y: 0, width: T.size, height: Se, fill: n.weekendBg, opacity: 0.3 }, `wem-${T.index}`) : null),
            i.todayIndex >= 0 && /* @__PURE__ */ g("g", { children: [
              /* @__PURE__ */ a("rect", { x: i.todayIndex * i.dayWidth, y: 0, width: i.dayWidth, height: Se, fill: n.todayBg }),
              /* @__PURE__ */ a("line", { x1: (i.todayIndex + 0.5) * i.dayWidth, y1: 0, x2: (i.todayIndex + 0.5) * i.dayWidth, y2: Se, stroke: n.today, strokeWidth: 2, strokeDasharray: "4 4", opacity: 0.3 })
            ] })
          ] }),
          We.map((T) => {
            const V = s[T.index];
            return V && (V.kind === "group" || V.kind === "projectHeader") ? /* @__PURE__ */ a("div", { style: {
              boxSizing: "border-box",
              position: "absolute",
              left: 0,
              top: T.start,
              width: "100%",
              height: de,
              background: V.kind === "projectHeader" ? n.headerBg : n.groupLightSoft,
              borderBottom: `1px solid ${n.borderLight}`,
              pointerEvents: "none"
            } }, `bg-${T.index}`) : null;
          }),
          /* @__PURE__ */ g("div", { style: { position: "absolute", inset: 0 }, children: [
            We.map((T) => {
              const V = s[T.index];
              if (!V || V.kind !== "task") return null;
              const H = V.task, xe = l?.task.id === H.id, Re = d?.task.id === H.id, De = xe || Re && d.edge === "left" ? ye(H.start, xe ? l.offsetDays : d.offsetDays) : H.start, _e = xe || Re && d.edge === "right" ? ye(H.end, xe ? l.offsetDays : d.offsetDays) : H.end, re = H.originalType !== "step", Ce = Me(De, i);
              let Te = 0, ve = 0;
              re || (Te = Math.max(Me(_e, i) - Ce, i.dayWidth), ve = Te * (H.progress / 100));
              const ot = W === H.id, He = f === H.id, gt = we.has(H.id), pt = ce.has(H.id), rt = !!f && !He && !se.has(H.id), it = He || !!f && se.has(H.id), fe = c?.hoverTargetId === H.id, Ae = ot || He, Le = T.start;
              return /* @__PURE__ */ a(
                ro,
                {
                  task: H,
                  x: Ce,
                  y: Le,
                  w: Te,
                  progW: ve,
                  isHov: ot,
                  isDrag: xe,
                  isResize: Re,
                  isCritical: pt,
                  isDelayed: gt,
                  isConnectTarget: fe,
                  showDots: Ae,
                  isBarDimmed: rt,
                  isBarHighlighted: it,
                  commonEvents: {
                    onMouseEnter: (oe) => {
                      x(H.id), !l && !d && te({ task: H, x: oe.clientX, y: oe.clientY });
                    },
                    onMouseMove: (oe) => {
                      W === H.id && !l && !d && te({ task: H, x: oe.clientX, y: oe.clientY });
                    },
                    onMouseLeave: () => {
                      x(null), te(null);
                    },
                    onClick: (oe) => ee(oe, H),
                    onDoubleClick: (oe) => {
                      oe.stopPropagation(), Qe?.(ft(H));
                    },
                    onMouseDown: (oe) => Ie(oe, H),
                    onTouchStart: (oe) => Je(oe, H),
                    onKeyDown: (oe) => {
                      if (oe.key === "Enter") {
                        oe.preventDefault(), Qe?.(ft(H));
                        return;
                      }
                      oe.key === " " && (oe.preventDefault(), $(H.id));
                    }
                  },
                  handleResizeMouseDown: kt,
                  handleResizeTouchStart: Oe,
                  handleConnectDotMouseDown: je,
                  handleConnectDotTouchStart: dt
                },
                H.id
              );
            }),
            /* @__PURE__ */ a("svg", { width: i.totalWidth, height: Se, style: { position: "absolute", inset: 0, pointerEvents: "none" }, children: /* @__PURE__ */ a(io, { arrows: X }) }),
            U && !l && !Q.isOpen && /* @__PURE__ */ a(so, { task: U.task, x: U.x, y: U.y })
          ] })
        ] })
      }
    ),
    Q.task && Q.isOpen && (() => {
      const T = Q.task, V = (e.dependencies || []).filter((re) => re.predecessorId === T.id || re.successorId === T.id), H = { FS: t("gantt.depType.fs", "Finish to Start"), SS: t("gantt.depType.ss", "Start to Start"), FF: t("gantt.depType.ff", "Finish to Finish"), SF: t("gantt.depType.sf", "Start to Finish") }, xe = V.length > 0 ? 300 : 220, Re = 200 + V.length * 68, De = Math.min(Q.position.x, window.innerWidth - xe - 16), _e = Math.min(Math.max(8, Q.position.y + 8), window.innerHeight - Re - 16);
      return /* @__PURE__ */ g(
        "div",
        {
          "data-popup": "gantt-action",
          style: { position: "fixed", left: De, top: _e, zIndex: 9999, background: "var(--zg-surface)", borderRadius: 4, boxShadow: "var(--zg-shadow-popover)", border: `1.5px solid ${n.borderLight}`, width: xe, overflow: "hidden" },
          onMouseDown: (re) => re.stopPropagation(),
          children: [
            /* @__PURE__ */ a("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${n.borderLight}` }, children: /* @__PURE__ */ a("p", { style: { fontSize: 13, fontWeight: 700, color: n.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: T.name, children: T.name }) }),
            /* @__PURE__ */ g("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" }, children: [
              /* @__PURE__ */ g("button", { onClick: () => {
                Qe?.(ft(T)), L();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: n.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ a(Fn, { size: 15 }),
                " ",
                /* @__PURE__ */ a("span", { style: { flex: 1, textAlign: "left" }, children: t("gantt.popup.viewDetails", "View details") })
              ] }),
              /* @__PURE__ */ g("button", { onClick: () => {
                zt?.(ft(T)), L();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: n.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ a(Bn, { size: 15 }),
                " ",
                /* @__PURE__ */ a("span", { style: { flex: 1, textAlign: "left" }, children: t("gantt.popup.edit", "Edit") })
              ] }),
              /* @__PURE__ */ g("button", { onClick: () => {
                It?.(T.id), L();
              }, className: "zg-popup-btn zg-popup-btn-danger", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: n.dangerText, textAlign: "left" }, children: [
                /* @__PURE__ */ a(Wn, { size: 15 }),
                " ",
                /* @__PURE__ */ a("span", { style: { flex: 1, textAlign: "left" }, children: t("gantt.popup.delete", "Delete") })
              ] })
            ] }),
            V.length > 0 && /* @__PURE__ */ g("div", { style: { borderTop: `1px solid ${n.borderLight}`, padding: "10px 14px 12px" }, children: [
              /* @__PURE__ */ g("div", { style: { fontSize: 10, fontWeight: 700, color: n.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }, children: [
                t("gantt.popup.relations", "Relations"),
                " (",
                V.length,
                ")"
              ] }),
              /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: V.map((re) => {
                const Ce = re.predecessorId === T.id, Te = Ce ? re.successorName : re.predecessorName, ve = F === re.id;
                return /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderRadius: 8, background: "var(--zg-surface-alt)", border: `1px solid ${n.borderLight}` }, children: [
                  /* @__PURE__ */ g("div", { style: { flex: 1, minWidth: 0 }, children: [
                    /* @__PURE__ */ g("div", { style: { fontSize: 10, fontWeight: 700, color: n.group, marginBottom: 2 }, children: [
                      /* @__PURE__ */ a("span", { style: { background: n.groupSoftStrong, borderRadius: 4, padding: "1px 5px" }, children: re.type }),
                      " ",
                      /* @__PURE__ */ a("span", { style: { color: n.textSecondary, fontWeight: 500 }, children: Ce ? "→ " : "← " }),
                      /* @__PURE__ */ a("span", { style: { color: n.textMuted, fontWeight: 400, fontSize: 9 }, children: H[re.type] ?? re.type })
                    ] }),
                    /* @__PURE__ */ a("div", { style: { fontSize: 11, color: n.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: Te, children: Te })
                  ] }),
                  Ne && /* @__PURE__ */ a(
                    "button",
                    {
                      disabled: !!ve,
                      onClick: async () => {
                        k(re.id);
                        try {
                          await Ne(re.id);
                        } finally {
                          k(null);
                        }
                      },
                      style: { flexShrink: 0, padding: "4px 6px", borderRadius: 6, border: "none", background: ve ? n.dangerBgSoft : "transparent", cursor: ve ? "wait" : "pointer", color: n.dangerText, fontSize: 14, opacity: ve ? 0.5 : 1, transition: "background 0.12s" },
                      children: ve ? "⟳" : "🗑"
                    }
                  )
                ] }, re.id);
              }) })
            ] })
          ]
        }
      );
    })(),
    u && /* @__PURE__ */ g(
      "div",
      {
        "data-menu": "chart-create",
        style: {
          position: "fixed",
          left: Math.min(u.x, window.innerWidth - 220),
          top: Math.min(u.y, window.innerHeight - 220),
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
          /* @__PURE__ */ a("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${n.borderLight}`, background: n.headerBg }, children: /* @__PURE__ */ g("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: n.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" }, children: [
            t("gantt.chart.addOn", "Add on"),
            " ",
            ge(u.date, e.locale)
          ] }) }),
          /* @__PURE__ */ a("div", { style: { padding: "5px 5px" }, children: [
            { label: t("gantt.newAction.step", "Step"), icon: mt("step", 0), action: () => {
              ut?.(u.date, u.projectId), I(null);
            } },
            { label: t("gantt.newAction.milestone", "Milestone"), icon: mt("milestone"), action: () => {
              et?.(u.date, u.projectId), I(null);
            } },
            { label: t("gantt.newAction.event", "Event"), icon: mt("event"), action: () => {
              ht?.(u.date, u.projectId), I(null);
            } },
            { label: t("gantt.newAction.note", "Note"), icon: mt("note"), action: () => {
              tt?.(u.date, u.projectId), I(null);
            } }
          ].map((T) => /* @__PURE__ */ g(
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
    c && /* @__PURE__ */ g("svg", { style: { position: "fixed", inset: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 99999 }, children: [
      /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ a("path", { d: "M0,0 L0,6 L6,3 z", fill: n.group }) }) }),
      /* @__PURE__ */ a("line", { x1: c.fromScreenX, y1: c.fromScreenY, x2: c.currentScreenX, y2: c.currentScreenY, stroke: n.group, strokeWidth: 2.5, strokeDasharray: "8 5", markerEnd: "url(#connect-arrow)", opacity: 0.85, style: { animation: "zg-dash 0.5s linear infinite" } })
    ] }),
    m && /* @__PURE__ */ a("div", { style: { position: "fixed", inset: 0, background: n.overlayMedium, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99998 }, onClick: () => v(null), children: /* @__PURE__ */ g("div", { style: { background: "var(--zg-surface)", borderRadius: 20, padding: "32px 36px", width: 420, boxShadow: "var(--zg-shadow-popover)" }, onClick: (T) => T.stopPropagation(), children: [
      /* @__PURE__ */ g("div", { style: { marginBottom: 20 }, children: [
        /* @__PURE__ */ a("h3", { style: { fontSize: 18, fontWeight: 700, color: n.textTitle, marginBottom: 4 }, children: t("gantt.depModal.title", "Relation Type") }),
        /* @__PURE__ */ a("p", { style: { fontSize: 13, color: n.textSecondary }, children: t("gantt.depModal.subtitle", "Choose how the two tasks relate") })
      ] }),
      /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }, children: [
        { type: "FS", label: t("gantt.depModal.fs", "Finish to Start"), desc: t("gantt.depModal.fsDesc", "B starts when A finishes") },
        { type: "SS", label: t("gantt.depModal.ss", "Start to Start"), desc: t("gantt.depModal.ssDesc", "A and B start together") },
        { type: "FF", label: t("gantt.depModal.ff", "Finish to Finish"), desc: t("gantt.depModal.ffDesc", "A and B finish together") },
        { type: "SF", label: t("gantt.depModal.sf", "Start to Finish"), desc: t("gantt.depModal.sfDesc", "B finishes when A starts") }
      ].map((T) => /* @__PURE__ */ g("button", { onClick: () => S(T.type), style: { border: z === T.type ? `2px solid ${n.group}` : `1.5px solid ${n.borderLight}`, borderRadius: 12, padding: "12px 14px", textAlign: "left", cursor: "pointer", background: z === T.type ? n.groupSoft : "var(--zg-surface-alt)" }, children: [
        /* @__PURE__ */ a("div", { style: { fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: n.group, marginBottom: 4, background: z === T.type ? n.groupSoftStrong : n.groupSoft, borderRadius: 6, padding: "2px 6px", display: "inline-block" }, children: T.type }),
        /* @__PURE__ */ a("div", { style: { fontSize: 13, fontWeight: 600, color: n.textTitle, marginBottom: 2 }, children: T.label }),
        /* @__PURE__ */ a("div", { style: { fontSize: 11, color: n.textSecondary }, children: T.desc })
      ] }, T.type)) }),
      /* @__PURE__ */ g("div", { style: { marginBottom: 24 }, children: [
        /* @__PURE__ */ a("label", { style: { display: "block", fontSize: 13, fontWeight: 600, color: n.textTitle, marginBottom: 6 }, children: t("gantt.depModal.lagLabel", "Lag (days)") }),
        /* @__PURE__ */ a("input", { type: "number", value: P, onChange: (T) => N(parseInt(T.target.value) || 0), style: { width: "100%", padding: "10px 12px", border: `1.5px solid ${n.borderLight}`, borderRadius: 8, fontSize: 14 } })
      ] }),
      /* @__PURE__ */ g("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12 }, children: [
        /* @__PURE__ */ a("button", { onClick: () => v(null), style: { padding: "10px 16px", borderRadius: 8, border: `1px solid ${n.borderLight}`, background: "var(--zg-surface)", cursor: "pointer", fontWeight: 600 }, children: t("gantt.depModal.cancel", "Cancel") }),
        /* @__PURE__ */ a("button", { onClick: ct, disabled: M, style: { padding: "10px 16px", borderRadius: 8, border: "none", background: n.group, color: n.white, cursor: M ? "wait" : "pointer", fontWeight: 600 }, children: M ? t("gantt.depModal.saving", "Saving...") : t("gantt.depModal.create", "Create Dependency") })
      ] })
    ] }) })
  ] });
}
function lo(e) {
  const t = be(null), o = be(null), r = be(null), i = be(!1), s = Z(() => {
    if (i.current) return;
    i.current = !0;
    const m = o.current;
    m && t.current && (t.current.scrollTop = m.scrollTop), m && r.current && (r.current.scrollLeft = m.scrollLeft), i.current = !1;
  }, []), l = Z(() => {
    i.current || (i.current = !0, t.current && o.current && (o.current.scrollTop = t.current.scrollTop), i.current = !1);
  }, []), d = be(!1);
  le(() => {
    if (d.current || !e.totalWidth) return;
    const m = o.current;
    if (!m) return;
    const v = Me(/* @__PURE__ */ new Date(), e);
    if (v >= 0 && v <= e.totalWidth) {
      const z = v - m.clientWidth / 2;
      m.scrollLeft = Math.max(0, z), r.current && (r.current.scrollLeft = m.scrollLeft), d.current = !0;
    }
  }, [e]);
  const c = Z((m) => {
    const v = o.current;
    if (v)
      if (m.preventDefault(), m.shiftKey || Math.abs(m.deltaX) > Math.abs(m.deltaY)) {
        const z = m.shiftKey ? m.deltaY : m.deltaX;
        v.scrollLeft += z, r.current && (r.current.scrollLeft = v.scrollLeft);
      } else
        v.scrollTop += m.deltaY, t.current && (t.current.scrollTop = v.scrollTop);
  }, []);
  return {
    leftBodyRef: t,
    rightBodyRef: o,
    timeHeaderRef: r,
    handleRightScroll: s,
    handleLeftScroll: l,
    handleChartWheel: c
  };
}
function co(e, t, o, r) {
  const i = /* @__PURE__ */ new Map();
  return e.forEach((s) => i.set(s.id, s)), t.map((s) => {
    const l = i.get(s.predecessorId), d = i.get(s.successorId);
    if (!l || !d) return null;
    const c = r.get(l.id), m = r.get(d.id);
    if (c == null || m == null) return null;
    const v = l.originalType !== "step", z = d.originalType !== "step", S = v ? Me(l.start, o) + At : Me(l.end, o), P = c * de + de / 2, N = z ? Me(d.start, o) - 10 : Me(d.start, o), M = m * de + de / 2, F = 14, k = Math.max(S + F, N - F), u = P === M ? `M${S},${P} L${N - 6},${M}` : `M${S},${P} L${k},${P} L${k},${M} L${N - 6},${M}`;
    return { predId: l.id, succId: d.id, path: u, headX: N - 6, headY: M, depType: s.type, lag: s.lag };
  }).filter(Boolean);
}
function uo(e, t, o) {
  if (t === o) return !0;
  const r = /* @__PURE__ */ new Map();
  for (const d of e) {
    const c = r.get(d.predecessorId) || [];
    c.push(d.successorId), r.set(d.predecessorId, c);
  }
  const i = r.get(t) || [];
  i.push(o), r.set(t, i);
  const s = [o], l = /* @__PURE__ */ new Set();
  for (; s.length > 0; ) {
    const d = s.pop();
    if (d === t) return !0;
    if (l.has(d)) continue;
    l.add(d);
    const c = r.get(d) || [];
    for (const m of c)
      l.has(m) || s.push(m);
  }
  return !1;
}
function ho(e, t) {
  if (e.length === 0 || t.length === 0) return /* @__PURE__ */ new Set();
  const o = /* @__PURE__ */ new Map();
  e.forEach((u) => o.set(u.id, u));
  const r = new Set(e.map((u) => u.id)), i = t.filter((u) => r.has(u.predecessorId) && r.has(u.successorId));
  if (i.length === 0) return /* @__PURE__ */ new Set();
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  i.forEach((u) => {
    s.has(u.predecessorId) || s.set(u.predecessorId, []), s.get(u.predecessorId).push(u.successorId), l.has(u.successorId) || l.set(u.successorId, []), l.get(u.successorId).push(u.predecessorId);
  });
  const d = (u) => Math.max(1, Fe(u.start, u.end)), c = /* @__PURE__ */ new Set(), m = [];
  function v(u) {
    c.has(u) || (c.add(u), (s.get(u) || []).forEach(v), m.unshift(u));
  }
  e.forEach((u) => v(u.id));
  const z = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
  for (const u of m) {
    const I = o.get(u), y = l.get(u) || [];
    let D = 0;
    for (const R of y) D = Math.max(D, S.get(R) || 0);
    const E = y.length > 0 ? D : 0;
    z.set(u, E), S.set(u, E + d(I));
  }
  let P = 0;
  S.forEach((u) => {
    u > P && (P = u);
  });
  const N = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
  for (let u = m.length - 1; u >= 0; u--) {
    const I = m[u], y = o.get(I), D = s.get(I) || [];
    let E = P;
    for (const R of D) E = Math.min(E, N.get(R) ?? P);
    M.set(I, D.length > 0 ? E : P), N.set(I, (M.get(I) || 0) - d(y));
  }
  const F = /* @__PURE__ */ new Set();
  i.forEach((u) => {
    F.add(u.predecessorId), F.add(u.successorId);
  });
  const k = /* @__PURE__ */ new Set();
  for (const u of m) {
    if (!F.has(u)) continue;
    const I = (N.get(u) || 0) - (z.get(u) || 0);
    Math.abs(I) < 0.5 && k.add(u);
  }
  return k;
}
function go({
  steps: e,
  milestones: t,
  events: o,
  notes: r,
  dependencies: i,
  viewMode: s,
  dayWidth: l,
  locale: d,
  groupByProject: c,
  visibleTypes: m,
  collapsedGroups: v,
  collapsedProjects: z,
  selectedTaskId: S,
  nonWorkingDays: P,
  searchQuery: N
}) {
  const M = ae(() => {
    const b = [], W = /* @__PURE__ */ new Map();
    r?.forEach((f) => {
      let $ = f.targetId || f.predecessorId;
      if (!$ && i) {
        const te = i.find((Q) => Q.successorId === f.id);
        te && ($ = te.predecessorId);
      }
      if (!$) return;
      const U = W.get($) || [];
      W.set($, [...U, f]);
    });
    let x = 0;
    return e.forEach((f) => {
      const $ = !!(f.startDate && f.finishDate), U = f.startDate || f.previsionStartDate, te = f.finishDate || f.previsionFinishDate;
      if (!U || !te) return;
      const Q = new Date(U), K = new Date(te);
      if (isNaN(Q.getTime()) || isNaN(K.getTime())) return;
      K <= Q && K.setDate(K.getDate() + 1);
      let ee, ne;
      if (f.previsionStartDate && f.previsionFinishDate) {
        const se = new Date(f.previsionStartDate), Ie = new Date(f.previsionFinishDate);
        !isNaN(se.getTime()) && !isNaN(Ie.getTime()) && (ee = se, ne = Ie <= se ? ye(se, 1) : Ie);
      }
      const ce = i?.filter((se) => se.successorId === f.id).map((se) => se.predecessorId) || [], we = f.conclusionPercent != null ? Number(f.conclusionPercent) : 0;
      b.push({
        id: f.id,
        name: f.name,
        start: Q,
        end: K,
        progress: we > 1 ? Math.min(we, 100) : we * 100,
        originalType: "step",
        deps: ce,
        colorIdx: x % pe.length,
        barColor: f.barColor,
        progressColor: f.progressColor,
        borderColor: f.borderColor,
        previsionStart: ee,
        previsionEnd: ne,
        hasActualDates: $,
        projectId: f.projectId || void 0,
        projectTitle: f.projectTitle || void 0,
        attachedNotes: W.get(f.id)
      }), x++;
    }), t?.forEach((f) => {
      if (!f.date) return;
      const $ = new Date(f.date);
      if (isNaN($.getTime())) return;
      const U = i?.filter((te) => te.successorId === f.id).map((te) => te.predecessorId) || [];
      b.push({
        id: f.id,
        name: f.name,
        start: $,
        end: $,
        progress: f.finished ? 100 : 0,
        originalType: "milestone",
        deps: U,
        projectId: f.projectId || void 0,
        projectTitle: f.projectTitle || void 0,
        attachedNotes: W.get(f.id)
      });
    }), o?.forEach((f) => {
      if (!f.date) return;
      const $ = new Date(f.date);
      if (isNaN($.getTime())) return;
      const U = i?.filter((te) => te.successorId === f.id).map((te) => te.predecessorId) || [];
      b.push({
        id: f.id,
        name: f.title,
        start: $,
        end: $,
        progress: f.finished ? 100 : 0,
        originalType: "event",
        deps: U,
        projectId: f.projectId || void 0,
        projectTitle: f.projectTitle || void 0,
        attachedNotes: W.get(f.id)
      });
    }), b;
  }, [e, t, o, r, i]), F = ae(() => oo(M, s, d, l), [M, s, d, l]), k = ae(() => {
    const b = [], W = ["step", "milestone", "event"];
    if (c) {
      const x = /* @__PURE__ */ new Map();
      M.forEach((f) => {
        f.projectId && !x.has(f.projectId) && x.set(f.projectId, f.projectTitle || f.projectId);
      });
      for (const [f, $] of Array.from(x.entries())) {
        const U = z.has(f);
        if (b.push({ kind: "projectHeader", projectId: f, projectTitle: $, collapsed: U }), !U) {
          const te = M.filter((Q) => Q.projectId === f);
          for (const Q of W) {
            if (!m.has(Q)) continue;
            const K = te.filter((ce) => ce.originalType === Q);
            if (K.length === 0) continue;
            const ee = `${f}-${Q}`, ne = v.has(ee);
            b.push({ kind: "group", groupType: Q, label: Xt[Q], count: K.length, collapsed: ne, projectId: f }), ne || K.forEach((ce) => b.push({ kind: "task", task: ce }));
          }
        }
      }
    } else
      for (const x of W) {
        if (!m.has(x)) continue;
        const f = M.filter((U) => U.originalType === x);
        if (f.length === 0) continue;
        const $ = v.has(x);
        b.push({ kind: "group", groupType: x, label: Xt[x], count: f.length, collapsed: $ }), $ || f.forEach((U) => b.push({ kind: "task", task: U }));
      }
    return b;
  }, [M, m, v, z, c]), u = ae(() => {
    const b = /* @__PURE__ */ new Map();
    return k.forEach((W, x) => {
      W.kind === "task" && b.set(W.task.id, x);
    }), b;
  }, [k]), I = ae(
    () => co(M, i || [], F, u),
    [M, i, F, u]
  ), y = ae(() => ho(M, i || []), [M, i]), D = ae(() => {
    const b = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Date();
    return M.forEach((x) => {
      x.originalType === "step" && x.end < W && x.progress < 100 && b.add(x.id);
    }), b;
  }, [M]), E = ae(() => {
    if (!S || !i?.length) return /* @__PURE__ */ new Set();
    const b = /* @__PURE__ */ new Set(), W = [S];
    for (; W.length; ) {
      const x = W.shift();
      for (const f of i)
        f.predecessorId === x && !b.has(f.successorId) && (b.add(f.successorId), W.push(f.successorId)), f.successorId === x && !b.has(f.predecessorId) && (b.add(f.predecessorId), W.push(f.predecessorId));
    }
    return b;
  }, [S, i]), R = ae(() => {
    const b = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
    for (const f of M) {
      if (f.originalType !== "step") continue;
      const $ = b.get("step") || { sum: 0, count: 0 };
      if ($.sum += f.progress, $.count += 1, b.set("step", $), f.projectId) {
        const U = W.get(f.projectId) || { sum: 0, count: 0 };
        U.sum += f.progress, U.count += 1, W.set(f.projectId, U);
      }
    }
    const x = (f) => f && f.count > 0 ? Math.round(f.sum / f.count) : null;
    return {
      byType: new Map([...b.entries()].map(([f, $]) => [f, x($)])),
      byProject: new Map([...W.entries()].map(([f, $]) => [f, x($)]))
    };
  }, [M]), A = ae(() => {
    const b = /* @__PURE__ */ new Set();
    for (const W of P ?? []) {
      const x = W.date instanceof Date ? W.date : new Date(W.date);
      isNaN(x.getTime()) || b.add(`${x.getFullYear()}-${x.getMonth()}-${x.getDate()}`);
    }
    return b;
  }, [P]), _ = ae(() => {
    const b = (N || "").toLowerCase().trim();
    return b ? k.filter((W) => W.kind !== "task" ? !0 : W.task.name.toLowerCase().includes(b)) : k;
  }, [k, N]);
  return {
    tasks: M,
    timeline: F,
    displayRows: _,
    taskRowIndex: u,
    arrows: I,
    criticalIds: y,
    delayedIds: D,
    relatedIds: E,
    groupProgress: R,
    nonWorkingDaySet: A
  };
}
function po(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const o = document.implementation.createHTMLDocument(), r = o.createElement("base"), i = o.createElement("a");
  return o.head.appendChild(r), o.body.appendChild(i), t && (r.href = t), i.href = e, i.href;
}
const fo = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function Be(e) {
  const t = [];
  for (let o = 0, r = e.length; o < r; o++)
    t.push(e[o]);
  return t;
}
let Ue = null;
function xn(e = {}) {
  return Ue || (e.includeStyleProperties ? (Ue = e.includeStyleProperties, Ue) : (Ue = Be(window.getComputedStyle(document.documentElement)), Ue));
}
function vt(e, t) {
  const r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function mo(e) {
  const t = vt(e, "border-left-width"), o = vt(e, "border-right-width");
  return e.clientWidth + t + o;
}
function yo(e) {
  const t = vt(e, "border-top-width"), o = vt(e, "border-bottom-width");
  return e.clientHeight + t + o;
}
function vn(e, t = {}) {
  const o = t.width || mo(e), r = t.height || yo(e);
  return { width: o, height: r };
}
function bo() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const o = t && t.env ? t.env.devicePixelRatio : null;
  return o && (e = parseInt(o, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const he = 16384;
function xo(e) {
  (e.width > he || e.height > he) && (e.width > he && e.height > he ? e.width > e.height ? (e.height *= he / e.width, e.width = he) : (e.width *= he / e.height, e.height = he) : e.width > he ? (e.height *= he / e.width, e.width = he) : (e.width *= he / e.height, e.height = he));
}
function wt(e) {
  return new Promise((t, o) => {
    const r = new Image();
    r.onload = () => {
      r.decode().then(() => {
        requestAnimationFrame(() => t(r));
      });
    }, r.onerror = o, r.crossOrigin = "anonymous", r.decoding = "async", r.src = e;
  });
}
async function vo(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function wo(e, t, o) {
  const r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg"), s = document.createElementNS(r, "foreignObject");
  return i.setAttribute("width", `${t}`), i.setAttribute("height", `${o}`), i.setAttribute("viewBox", `0 0 ${t} ${o}`), s.setAttribute("width", "100%"), s.setAttribute("height", "100%"), s.setAttribute("x", "0"), s.setAttribute("y", "0"), s.setAttribute("externalResourcesRequired", "true"), i.appendChild(s), s.appendChild(e), vo(i);
}
const ue = (e, t) => {
  if (e instanceof t)
    return !0;
  const o = Object.getPrototypeOf(e);
  return o === null ? !1 : o.constructor.name === t.name || ue(o, t);
};
function So(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function ko(e, t) {
  return xn(t).map((o) => {
    const r = e.getPropertyValue(o), i = e.getPropertyPriority(o);
    return `${o}: ${r}${i ? " !important" : ""};`;
  }).join(" ");
}
function zo(e, t, o, r) {
  const i = `.${e}:${t}`, s = o.cssText ? So(o) : ko(o, r);
  return document.createTextNode(`${i}{${s}}`);
}
function Jt(e, t, o, r) {
  const i = window.getComputedStyle(e, o), s = i.getPropertyValue("content");
  if (s === "" || s === "none")
    return;
  const l = fo();
  try {
    t.className = `${t.className} ${l}`;
  } catch {
    return;
  }
  const d = document.createElement("style");
  d.appendChild(zo(l, o, i, r)), t.appendChild(d);
}
function Io(e, t, o) {
  Jt(e, t, ":before", o), Jt(e, t, ":after", o);
}
const Qt = "application/font-woff", en = "image/jpeg", To = {
  woff: Qt,
  woff2: Qt,
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
function Eo(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function Bt(e) {
  const t = Eo(e).toLowerCase();
  return To[t] || "";
}
function Mo(e) {
  return e.split(/,/)[1];
}
function Ft(e) {
  return e.search(/^(data:)/) !== -1;
}
function Ro(e, t) {
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
      } catch (c) {
        l(c);
      }
    }, d.readAsDataURL(i);
  });
}
const Mt = {};
function Do(e, t, o) {
  let r = e.replace(/\?.*/, "");
  return o && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r;
}
async function Wt(e, t, o) {
  const r = Do(e, t, o.includeQueryParams);
  if (Mt[r] != null)
    return Mt[r];
  o.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i;
  try {
    const s = await wn(e, o.fetchRequestInit, ({ res: l, result: d }) => (t || (t = l.headers.get("Content-Type") || ""), Mo(d)));
    i = Ro(s, t);
  } catch (s) {
    i = o.imagePlaceholder || "";
    let l = `Failed to fetch resource: ${e}`;
    s && (l = typeof s == "string" ? s : s.message), l && console.warn(l);
  }
  return Mt[r] = i, i;
}
async function Co(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : wt(t);
}
async function Ao(e, t) {
  if (e.currentSrc) {
    const s = document.createElement("canvas"), l = s.getContext("2d");
    s.width = e.clientWidth, s.height = e.clientHeight, l?.drawImage(e, 0, 0, s.width, s.height);
    const d = s.toDataURL();
    return wt(d);
  }
  const o = e.poster, r = Bt(o), i = await Wt(o, r, t);
  return wt(i);
}
async function Lo(e, t) {
  var o;
  try {
    if (!((o = e?.contentDocument) === null || o === void 0) && o.body)
      return await St(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function Fo(e, t) {
  return ue(e, HTMLCanvasElement) ? Co(e) : ue(e, HTMLVideoElement) ? Ao(e, t) : ue(e, HTMLIFrameElement) ? Lo(e, t) : e.cloneNode(Sn(e));
}
const Bo = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Sn = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function Wo(e, t, o) {
  var r, i;
  if (Sn(t))
    return t;
  let s = [];
  return Bo(e) && e.assignedNodes ? s = Be(e.assignedNodes()) : ue(e, HTMLIFrameElement) && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? s = Be(e.contentDocument.body.childNodes) : s = Be(((i = e.shadowRoot) !== null && i !== void 0 ? i : e).childNodes), s.length === 0 || ue(e, HTMLVideoElement) || await s.reduce((l, d) => l.then(() => St(d, o)).then((c) => {
    c && t.appendChild(c);
  }), Promise.resolve()), t;
}
function $o(e, t, o) {
  const r = t.style;
  if (!r)
    return;
  const i = window.getComputedStyle(e);
  i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : xn(o).forEach((s) => {
    let l = i.getPropertyValue(s);
    s === "font-size" && l.endsWith("px") && (l = `${Math.floor(parseFloat(l.substring(0, l.length - 2))) - 0.1}px`), ue(e, HTMLIFrameElement) && s === "display" && l === "inline" && (l = "block"), s === "d" && t.getAttribute("d") && (l = `path(${t.getAttribute("d")})`), r.setProperty(s, l, i.getPropertyPriority(s));
  });
}
function Po(e, t) {
  ue(e, HTMLTextAreaElement) && (t.innerHTML = e.value), ue(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function Oo(e, t) {
  if (ue(e, HTMLSelectElement)) {
    const r = Array.from(t.children).find((i) => e.value === i.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function jo(e, t, o) {
  return ue(t, Element) && ($o(e, t, o), Io(e, t, o), Po(e, t), Oo(e, t)), t;
}
async function No(e, t) {
  const o = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (o.length === 0)
    return e;
  const r = {};
  for (let s = 0; s < o.length; s++) {
    const d = o[s].getAttribute("xlink:href");
    if (d) {
      const c = e.querySelector(d), m = document.querySelector(d);
      !c && m && !r[d] && (r[d] = await St(m, t, !0));
    }
  }
  const i = Object.values(r);
  if (i.length) {
    const s = "http://www.w3.org/1999/xhtml", l = document.createElementNS(s, "svg");
    l.setAttribute("xmlns", s), l.style.position = "absolute", l.style.width = "0", l.style.height = "0", l.style.overflow = "hidden", l.style.display = "none";
    const d = document.createElementNS(s, "defs");
    l.appendChild(d);
    for (let c = 0; c < i.length; c++)
      d.appendChild(i[c]);
    e.appendChild(l);
  }
  return e;
}
async function St(e, t, o) {
  return !o && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((r) => Fo(r, t)).then((r) => Wo(e, r, t)).then((r) => jo(e, r, t)).then((r) => No(r, t));
}
const kn = /url\((['"]?)([^'"]+?)\1\)/g, Yo = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Xo = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function _o(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function Ho(e) {
  const t = [];
  return e.replace(kn, (o, r, i) => (t.push(i), o)), t.filter((o) => !Ft(o));
}
async function Vo(e, t, o, r, i) {
  try {
    const s = o ? po(t, o) : t, l = Bt(t);
    let d;
    return i || (d = await Wt(s, l, r)), e.replace(_o(t), `$1${d}$3`);
  } catch {
  }
  return e;
}
function Go(e, { preferredFontFormat: t }) {
  return t ? e.replace(Xo, (o) => {
    for (; ; ) {
      const [r, , i] = Yo.exec(o) || [];
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
  const r = Go(e, o);
  return Ho(r).reduce((s, l) => s.then((d) => Vo(d, l, t, o)), Promise.resolve(r));
}
async function qe(e, t, o) {
  var r;
  const i = (r = t.style) === null || r === void 0 ? void 0 : r.getPropertyValue(e);
  if (i) {
    const s = await In(i, null, o);
    return t.style.setProperty(e, s, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function Uo(e, t) {
  await qe("background", e, t) || await qe("background-image", e, t), await qe("mask", e, t) || await qe("-webkit-mask", e, t) || await qe("mask-image", e, t) || await qe("-webkit-mask-image", e, t);
}
async function qo(e, t) {
  const o = ue(e, HTMLImageElement);
  if (!(o && !Ft(e.src)) && !(ue(e, SVGImageElement) && !Ft(e.href.baseVal)))
    return;
  const r = o ? e.src : e.href.baseVal, i = await Wt(r, Bt(r), t);
  await new Promise((s, l) => {
    e.onload = s, e.onerror = t.onImageErrorHandler ? (...c) => {
      try {
        s(t.onImageErrorHandler(...c));
      } catch (m) {
        l(m);
      }
    } : l;
    const d = e;
    d.decode && (d.decode = s), d.loading === "lazy" && (d.loading = "eager"), o ? (e.srcset = "", e.src = i) : e.href.baseVal = i;
  });
}
async function Ko(e, t) {
  const r = Be(e.childNodes).map((i) => Tn(i, t));
  await Promise.all(r).then(() => e);
}
async function Tn(e, t) {
  ue(e, Element) && (await Uo(e, t), await qo(e, t), await Ko(e, t));
}
function Zo(e, t) {
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
    return d.startsWith("https://") || (d = new URL(d, e.url).href), wn(d, t.fetchRequestInit, ({ result: c }) => (o = o.replace(l, `url(${c})`), [l, c]));
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
    const c = i.exec(r);
    if (c === null)
      break;
    t.push(c[0]);
  }
  r = r.replace(i, "");
  const s = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, l = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", d = new RegExp(l, "gi");
  for (; ; ) {
    let c = s.exec(r);
    if (c === null) {
      if (c = d.exec(r), c === null)
        break;
      s.lastIndex = d.lastIndex;
    } else
      d.lastIndex = s.lastIndex;
    t.push(c[0]);
  }
  return t;
}
async function Jo(e, t) {
  const o = [], r = [];
  return e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Be(i.cssRules || []).forEach((s, l) => {
          if (s.type === CSSRule.IMPORT_RULE) {
            let d = l + 1;
            const c = s.href, m = nn(c).then((v) => on(v, t)).then((v) => rn(v).forEach((z) => {
              try {
                i.insertRule(z, z.startsWith("@import") ? d += 1 : i.cssRules.length);
              } catch (S) {
                console.error("Error inserting rule from remote css", {
                  rule: z,
                  error: S
                });
              }
            })).catch((v) => {
              console.error("Error loading remote css", v.toString());
            });
            r.push(m);
          }
        });
      } catch (s) {
        const l = e.find((d) => d.href == null) || document.styleSheets[0];
        i.href != null && r.push(nn(i.href).then((d) => on(d, t)).then((d) => rn(d).forEach((c) => {
          l.insertRule(c, l.cssRules.length);
        })).catch((d) => {
          console.error("Error loading remote stylesheet", d);
        })), console.error("Error inlining remote css file", s);
      }
  }), Promise.all(r).then(() => (e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Be(i.cssRules || []).forEach((s) => {
          o.push(s);
        });
      } catch (s) {
        console.error(`Error while reading CSS rules from ${i.href}`, s);
      }
  }), o));
}
function Qo(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => zn(t.style.getPropertyValue("src")));
}
async function er(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const o = Be(e.ownerDocument.styleSheets), r = await Jo(o, t);
  return Qo(r);
}
function En(e) {
  return e.trim().replace(/["']/g, "");
}
function tr(e) {
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
async function nr(e, t) {
  const o = await er(e, t), r = tr(e);
  return (await Promise.all(o.filter((s) => r.has(En(s.style.fontFamily))).map((s) => {
    const l = s.parentStyleSheet ? s.parentStyleSheet.href : null;
    return In(s.cssText, l, t);
  }))).join(`
`);
}
async function or(e, t) {
  const o = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await nr(e, t);
  if (o) {
    const r = document.createElement("style"), i = document.createTextNode(o);
    r.appendChild(i), e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r);
  }
}
async function rr(e, t = {}) {
  const { width: o, height: r } = vn(e, t), i = await St(e, t, !0);
  return await or(i, t), await Tn(i, t), Zo(i, t), await wo(i, o, r);
}
async function ir(e, t = {}) {
  const { width: o, height: r } = vn(e, t), i = await rr(e, t), s = await wt(i), l = document.createElement("canvas"), d = l.getContext("2d"), c = t.pixelRatio || bo(), m = t.canvasWidth || o, v = t.canvasHeight || r;
  return l.width = m * c, l.height = v * c, t.skipAutoScale || xo(l), l.style.width = `${m}`, l.style.height = `${v}`, t.backgroundColor && (d.fillStyle = t.backgroundColor, d.fillRect(0, 0, l.width, l.height)), d.drawImage(s, 0, 0, l.width, l.height), l;
}
async function sr(e, t = {}) {
  return (await ir(e, t)).toDataURL();
}
function ar() {
  const e = be(null), t = Z(async (o = {}) => {
    const r = e.current;
    if (!r) return;
    const { filename: i = "gantt-chart", scale: s = 2 } = o, l = r.querySelectorAll(".zg-header-controls, [data-popup], [data-menu]");
    l.forEach((d) => {
      d.dataset.exportHidden = d.style.visibility, d.style.visibility = "hidden";
    });
    try {
      const d = await sr(r, { pixelRatio: s, cacheBust: !0 }), c = document.createElement("a");
      c.download = `${i}.png`, c.href = d, c.click();
    } finally {
      l.forEach((d) => {
        d.style.visibility = d.dataset.exportHidden ?? "", delete d.dataset.exportHidden;
      });
    }
  }, []);
  return { exportRef: e, exportPng: t };
}
const yt = 260, bt = 170, ke = 20;
function lr() {
  const { props: e, activePinboardTask: t, setActivePinboardTask: o, t: r } = Pe(), i = !!t, s = be(null), [l, d] = G({}), [c, m] = G(null), v = () => o(null), z = t?.id || null, S = t?.attachedNotes || [], P = ae(() => z ? l[z] || {} : {}, [z, l]), N = Z((k, u) => {
    d((I) => {
      const y = I[k] || {};
      if (Object.keys(y).length >= u) return I;
      const D = { ...y };
      return { ...I, [k]: D };
    });
  }, []), M = Z(() => {
    if (!t) return;
    const { id: k } = t, u = {};
    S.forEach((I, y) => {
      const D = y % 4, E = Math.floor(y / 4), R = ke + D * (yt + 18), A = ke + E * (bt + 18), _ = (y % 5 - 2) * 0.8;
      u[I.id] = { x: R, y: A, z: y + 1, rotate: _ };
    }), d((I) => ({ ...I, [k]: u }));
  }, [t, S]);
  le(() => {
    t && (N(t.id, S.length), (!l[t.id] || Object.keys(l[t.id]).length === 0) && M());
  }, [t, N, l, S.length, M]), le(() => {
    if (!i) return;
    const k = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = k;
    };
  }, [i]), le(() => {
    if (!c || !z) return;
    const k = (I) => {
      if (I.pointerId !== c.pointerId) return;
      const y = s.current;
      if (!y) return;
      const D = y.getBoundingClientRect(), E = Math.max(ke, D.width - yt - ke), R = Math.max(ke, D.height - bt - ke), A = Math.max(ke, Math.min(E, I.clientX - D.left - c.offsetX)), _ = Math.max(ke, Math.min(R, I.clientY - D.top - c.offsetY));
      d((b) => {
        const W = b[z] || {}, x = W[c.noteId];
        return x ? {
          ...b,
          [z]: {
            ...W,
            [c.noteId]: { ...x, x: A, y: _ }
          }
        } : b;
      });
    }, u = (I) => {
      I.pointerId === c.pointerId && m(null);
    };
    return document.addEventListener("pointermove", k), document.addEventListener("pointerup", u), document.addEventListener("pointercancel", u), () => {
      document.removeEventListener("pointermove", k), document.removeEventListener("pointerup", u), document.removeEventListener("pointercancel", u);
    };
  }, [z, c]);
  const F = Z((k, u) => {
    if (!z) return;
    const I = s.current;
    if (!I) return;
    const y = l[z]?.[u];
    if (!y) return;
    const D = Object.values(l[z] || {}).reduce((R, A) => Math.max(R, A.z), 0);
    d((R) => {
      const A = R[z] || {}, _ = A[u];
      return _ ? {
        ...R,
        [z]: {
          ...A,
          [u]: { ..._, z: D + 1 }
        }
      } : R;
    });
    const E = I.getBoundingClientRect();
    m({
      pointerId: k.pointerId,
      taskId: z,
      noteId: u,
      offsetX: k.clientX - E.left - y.x,
      offsetY: k.clientY - E.top - y.y
    });
  }, [z, l]);
  return /* @__PURE__ */ g(ze, { children: [
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
    i && /* @__PURE__ */ g(
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
          /* @__PURE__ */ g("div", { style: {
            padding: "16px 18px",
            backgroundColor: n.headerBg,
            borderBottom: `1px solid ${n.borderLight}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }, children: [
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
              /* @__PURE__ */ g("span", { style: { fontSize: 12, color: n.textSecondary, display: "flex", alignItems: "center", gap: 4 }, children: [
                /* @__PURE__ */ a(Ct, { size: 12 }),
                t && ge(t.start, e.locale),
                t?.originalType === "step" && ` - ${ge(t.end, e.locale)}`
              ] })
            ] }),
            /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ g(
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
                    /* @__PURE__ */ a($n, { size: 14 }),
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
                  children: /* @__PURE__ */ a(gn, { size: 18 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ g(
            "div",
            {
              ref: s,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden",
                background: n.surface,
                cursor: c ? "grabbing" : "default"
              },
              children: [
                /* @__PURE__ */ a("p", { style: { margin: 0, position: "absolute", left: 20, top: 14, fontSize: 12, color: n.textSecondary }, children: r("pinboard.dragHint", "Drag the notes to organize your board freely.") }),
                S.map((k, u) => {
                  const I = {
                    x: ke + u % 4 * (yt + 18),
                    y: ke + Math.floor(u / 4) * (bt + 18),
                    z: u + 1,
                    rotate: (u % 5 - 2) * 0.8
                  }, y = P[k.id] || I, D = c?.noteId === k.id;
                  return /* @__PURE__ */ g(
                    "div",
                    {
                      onPointerDown: (E) => F(E, k.id),
                      style: {
                        position: "absolute",
                        left: y.x,
                        top: y.y,
                        width: yt,
                        minHeight: bt,
                        padding: "18px 14px 14px",
                        borderRadius: 6,
                        border: `1px solid ${n.groupSoftStrong}`,
                        background: k.color || n.note,
                        boxShadow: D ? n.shadowStickyHover : n.shadowSticky,
                        transform: `rotate(${y.rotate}deg)`,
                        userSelect: "none",
                        touchAction: "none",
                        cursor: D ? "grabbing" : "grab",
                        zIndex: y.z,
                        transition: D ? "none" : "box-shadow 0.2s ease"
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
                        /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 8 }, children: [
                          /* @__PURE__ */ a("h3", { style: { margin: 0, fontSize: 14, fontWeight: 700, color: n.inkSoft, lineHeight: 1.3 }, children: k.title }),
                          /* @__PURE__ */ a("span", { style: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, color: n.inkSoft4 }, children: r("pinboard.noteBadge", "NOTA") })
                        ] }),
                        /* @__PURE__ */ a("p", { style: { margin: 0, fontSize: 12, lineHeight: 1.5, color: n.inkSoft2, whiteSpace: "pre-wrap" }, children: k.description || "" }),
                        k.author && /* @__PURE__ */ g("div", { style: { marginTop: 12, fontSize: 11, fontWeight: 600, color: n.inkSoft4, textAlign: "right" }, children: [
                          "- ",
                          k.author
                        ] })
                      ]
                    },
                    k.id
                  );
                }),
                S.length === 0 && /* @__PURE__ */ g("div", { style: {
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
                  /* @__PURE__ */ a("div", { style: { width: 60, height: 60, borderRadius: "50%", background: n.headerBg, display: "grid", placeItems: "center" }, children: /* @__PURE__ */ a(Rt, { size: 30 }) }),
                  /* @__PURE__ */ a("p", { style: { margin: 0, fontSize: 14 }, children: r("pinboard.empty", "Nenhuma nota vinculada") })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ a("div", { style: { padding: "14px 18px", borderTop: `1px solid ${n.borderLight}`, background: n.surface }, children: /* @__PURE__ */ g(
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
                /* @__PURE__ */ a(Rt, { size: 18 }),
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
const wr = {
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
}, dr = {
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
  const r = dr[t] || o || t;
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
const cr = 1.6, ur = 200, hr = 700, ln = "zg-sidebar-w", gr = 140, Mn = 1.2, pr = 1 / Mn, Ee = (e) => {
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
}, fr = (e) => Math.min(gr, Math.max(cr, e));
function Sr(e) {
  const {
    onTaskChange: t,
    onCreateDependency: o,
    onDependencyError: r,
    dependencies: i,
    translations: s
  } = e, l = !!e.infiniteCanvas, [d, c] = G("day"), [m, v] = G(at), z = be(m), [S, P] = G(null), [N, M] = G(null), [F, k] = G(null), [u, I] = G({
    isOpen: !1,
    position: { x: 0, y: 0 },
    task: null
  }), [y, D] = G(null), [E, R] = G(null), [A, _] = G(null), [b, W] = G(null), [x, f] = G("FS"), [$, U] = G(0), [te, Q] = G(!1), [K, ee] = G(null), [ne, ce] = G(null), [we, se] = G(!1), Ie = be(null), [Je, kt] = G(null), Oe = be(!1), [je, dt] = G(() => {
    if (e.sidebarWidth) return e.sidebarWidth;
    try {
      const h = localStorage.getItem(ln);
      return h ? Number(h) : Yt;
    } catch {
      return Yt;
    }
  });
  le(() => {
    e.sidebarWidth !== void 0 && dt(e.sidebarWidth);
  }, [e.sidebarWidth]);
  const [ct, Qe] = G(""), { exportRef: zt, exportPng: It } = ar(), [Ne, ut] = G(/* @__PURE__ */ new Set(["step", "milestone", "event", "note"])), [et, ht] = G(/* @__PURE__ */ new Set()), [tt, nt] = G(/* @__PURE__ */ new Set());
  le(() => {
    z.current = m;
  }, [m]);
  const We = Z((h, p) => l ? p === "day" && h <= 7 ? "month" : p === "month" && h >= 10 ? "day" : p : p, [l]), $t = Z((h) => {
    c(h), l || v(h === "day" ? at : fn);
  }, [l]), Ye = Z((h) => {
    ut((p) => {
      const w = new Set(p);
      return w.has(h) ? w.delete(h) : w.add(h), w;
    });
  }, []), Se = Z((h) => {
    ht((p) => {
      const w = new Set(p);
      return w.has(h) ? w.delete(h) : w.add(h), w;
    });
  }, []), Xe = Z((h) => {
    nt((p) => {
      const w = new Set(p);
      return w.has(h) ? w.delete(h) : w.add(h), w;
    });
  }, []), X = go({
    steps: e.steps,
    milestones: e.milestones,
    events: e.events,
    notes: e.notes,
    dependencies: e.dependencies,
    viewMode: d,
    dayWidth: m,
    locale: e.locale,
    visibleTypes: Ne,
    collapsedGroups: et,
    collapsedProjects: tt,
    groupByProject: e.groupByProject,
    selectedTaskId: N || null,
    nonWorkingDays: e.nonWorkingDays,
    searchQuery: ct
  }), L = lo(X.timeline), T = Z((h) => {
    const p = fr(h);
    return v(p), l && c((w) => We(p, w)), p;
  }, [We, l]), V = Z((h, p) => {
    const w = L.rightBodyRef.current;
    if (!w) {
      T(p);
      return;
    }
    const C = w.getBoundingClientRect(), O = h - C.left, j = Number.isFinite(O) ? O : w.clientWidth / 2, B = z.current || at, Y = w.scrollLeft + j, J = T(p) / B;
    requestAnimationFrame(() => {
      const ie = L.rightBodyRef.current;
      ie && (ie.scrollLeft = Math.max(0, Y * J - j), L.timeHeaderRef.current && (L.timeHeaderRef.current.scrollLeft = ie.scrollLeft));
    });
  }, [L.rightBodyRef, L.timeHeaderRef, T]), H = Z((h, p) => {
    const w = L.rightBodyRef.current, C = p ?? (w ? w.getBoundingClientRect().left + w.clientWidth / 2 : 0);
    V(C, z.current * h);
  }, [V, L.rightBodyRef]), xe = Z(() => {
    H(Mn);
  }, [H]), Re = Z(() => {
    H(pr);
  }, [H]), De = Z(() => {
    const h = L.rightBodyRef.current;
    if (!h || X.tasks.length === 0) return;
    let p = X.tasks[0].start, w = X.tasks[0].end;
    for (const Y of X.tasks)
      Y.start < p && (p = Y.start), Y.end > w && (w = Y.end);
    const C = Math.max(1, Fe(p, w) + 1), O = 40, j = Math.max(80, h.clientWidth - O * 2), B = T(j / C);
    requestAnimationFrame(() => {
      const Y = L.rightBodyRef.current;
      if (!Y) return;
      const q = Fe(X.timeline.start, p);
      Y.scrollLeft = Math.max(0, q * B - O), Y.scrollTop = 0, L.leftBodyRef.current && (L.leftBodyRef.current.scrollTop = Y.scrollTop), L.timeHeaderRef.current && (L.timeHeaderRef.current.scrollLeft = Y.scrollLeft);
    });
  }, [X.tasks, X.timeline.start, L.rightBodyRef, L.leftBodyRef, L.timeHeaderRef, T]), _e = be(!1);
  le(() => {
    if (!l || !e.initialFitToScreen || _e.current || X.tasks.length === 0) return;
    const h = L.rightBodyRef.current;
    !h || h.clientWidth <= 0 || (De(), _e.current = !0);
  }, [l, e.initialFitToScreen, X.tasks.length, De, L.rightBodyRef]);
  const re = Z((h, p) => {
    h.preventDefault(), h.stopPropagation(), D({ task: p, startMouseX: h.clientX, originalStart: new Date(p.start), originalEnd: new Date(p.end), offsetDays: 0 });
  }, []), Ce = Z((h, p) => {
    h.preventDefault(), h.stopPropagation();
    const w = Ee(h);
    D({ task: p, startMouseX: w.clientX, originalStart: new Date(p.start), originalEnd: new Date(p.end), offsetDays: 0 });
  }, []), Te = Z((h, p, w) => {
    h.preventDefault(), h.stopPropagation(), R({ task: p, edge: w, startMouseX: h.clientX, originalStart: new Date(p.start), originalEnd: new Date(p.end), offsetDays: 0 });
  }, []), ve = Z((h, p, w) => {
    h.preventDefault(), h.stopPropagation();
    const C = Ee(h);
    R({ task: p, edge: w, startMouseX: C.clientX, originalStart: new Date(p.start), originalEnd: new Date(p.end), offsetDays: 0 });
  }, []), ot = Z((h, p, w) => {
    h.preventDefault(), h.stopPropagation(), _({ fromTaskId: p.id, fromEdge: w, fromScreenX: h.clientX, fromScreenY: h.clientY, currentScreenX: h.clientX, currentScreenY: h.clientY, hoverTargetId: null });
  }, []), He = Z((h, p, w) => {
    h.preventDefault(), h.stopPropagation();
    const C = Ee(h);
    _({
      fromTaskId: p.id,
      fromEdge: w,
      fromScreenX: C.clientX,
      fromScreenY: C.clientY,
      currentScreenX: C.clientX,
      currentScreenY: C.clientY,
      hoverTargetId: null
    });
  }, []), gt = Z((h, p) => {
    if (Oe.current) return;
    h.stopPropagation();
    const w = N === p.id;
    M(w ? null : p.id), I((C) => {
      const O = C.isOpen && C.task?.id === p.id;
      return w || O ? { isOpen: !1, position: { x: 0, y: 0 }, task: null } : { isOpen: !0, position: { x: h.clientX, y: h.clientY }, task: p };
    });
  }, [N]), pt = Z(async () => {
    if (!b || !o) return;
    const h = new Map(X.tasks.map((B) => [B.id, B])), p = h.get(b.fromTaskId), w = h.get(b.toTaskId);
    if (!p || !w) return;
    const C = (B) => B.originalType === "step" ? "STEP" : "MILESTONE", O = b.fromEdge === "right" ? p : w, j = b.fromEdge === "right" ? w : p;
    if (uo(i || [], O.id, j.id)) {
      const B = sn(
        s,
        "gantt.error.circularDependency",
        "Circular dependency is not allowed."
      );
      r?.({
        code: "CYCLIC_DEPENDENCY",
        message: B,
        predecessorId: O.id,
        successorId: j.id
      }), r || window.alert(B), W(null);
      return;
    }
    Q(!0);
    try {
      await o({ predecessorId: O.id, predecessorType: C(O), successorId: j.id, successorType: C(j), type: x, lag: $ }), W(null);
    } finally {
      Q(!1);
    }
  }, [b, X.tasks, o, i, s, r, x, $]);
  le(() => {
    if (!y) return;
    const h = { passive: !1 }, p = (j) => {
      const B = j.clientX - y.startMouseX, Y = Math.round(B / X.timeline.dayWidth);
      Y !== y.offsetDays && (Y !== 0 && (Oe.current = !0), D((q) => q ? { ...q, offsetDays: Y } : null));
    }, w = (j) => {
      j.cancelable && j.preventDefault();
      const Y = Ee(j).clientX - y.startMouseX, q = Math.round(Y / X.timeline.dayWidth);
      q !== y.offsetDays && (q !== 0 && (Oe.current = !0), D((J) => J ? { ...J, offsetDays: q } : null));
    }, C = () => {
      y.offsetDays !== 0 && t && t({
        id: y.task.id,
        name: y.task.name,
        start: ye(y.originalStart, y.offsetDays),
        end: ye(y.originalEnd, y.offsetDays),
        type: y.task.originalType === "step" ? "task" : "milestone",
        progress: y.task.progress
      }), D(null), requestAnimationFrame(() => {
        Oe.current = !1;
      });
    }, O = () => C();
    return document.addEventListener("mousemove", p), document.addEventListener("mouseup", C), document.addEventListener("touchmove", w, h), document.addEventListener("touchend", O), () => {
      document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", C), document.removeEventListener("touchmove", w), document.removeEventListener("touchend", O);
    };
  }, [y, X.timeline.dayWidth, t]), le(() => {
    if (!E) return;
    const h = { passive: !1 }, p = (j) => {
      const B = j.clientX - E.startMouseX, Y = Math.round(B / X.timeline.dayWidth);
      Y !== E.offsetDays && R((q) => q ? { ...q, offsetDays: Y } : null);
    }, w = (j) => {
      j.cancelable && j.preventDefault();
      const Y = Ee(j).clientX - E.startMouseX, q = Math.round(Y / X.timeline.dayWidth);
      q !== E.offsetDays && R((J) => J ? { ...J, offsetDays: q } : null);
    }, C = () => {
      if (E.offsetDays !== 0 && t) {
        const j = E.edge === "left" ? ye(E.originalStart, E.offsetDays) : E.originalStart, B = E.edge === "right" ? ye(E.originalEnd, E.offsetDays) : E.originalEnd;
        B > j && t({ id: E.task.id, name: E.task.name, start: j, end: B, type: "task", progress: E.task.progress });
      }
      R(null);
    }, O = () => C();
    return document.addEventListener("mousemove", p), document.addEventListener("mouseup", C), document.addEventListener("touchmove", w, h), document.addEventListener("touchend", O), () => {
      document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", C), document.removeEventListener("touchmove", w), document.removeEventListener("touchend", O);
    };
  }, [E, X.timeline.dayWidth, t]);
  const rt = A?.fromTaskId, it = A?.fromEdge;
  le(() => {
    if (!rt || !it) return;
    const h = { passive: !1 }, p = rt, w = it, C = (Y) => {
      let q = null;
      for (const J of document.elementsFromPoint(Y.clientX, Y.clientY)) {
        const ie = J.dataset?.taskId;
        if (ie && ie !== p) {
          q = ie;
          break;
        }
      }
      _((J) => J ? { ...J, currentScreenX: Y.clientX, currentScreenY: Y.clientY, hoverTargetId: q } : null);
    }, O = (Y) => {
      Y.cancelable && Y.preventDefault();
      const q = Ee(Y);
      let J = null;
      for (const ie of document.elementsFromPoint(q.clientX, q.clientY)) {
        const $e = ie.dataset?.taskId;
        if ($e && $e !== p) {
          J = $e;
          break;
        }
      }
      _((ie) => ie ? { ...ie, currentScreenX: q.clientX, currentScreenY: q.clientY, hoverTargetId: J } : null);
    }, j = (Y) => {
      let q = null;
      for (const J of document.elementsFromPoint(Y.clientX, Y.clientY)) {
        const ie = J.dataset?.taskId;
        if (ie && ie !== p) {
          q = ie;
          break;
        }
      }
      q && o && (W({ fromTaskId: p, fromEdge: w, toTaskId: q }), f("FS"), U(0)), _(null);
    }, B = (Y) => {
      const q = Ee(Y);
      let J = null;
      for (const ie of document.elementsFromPoint(q.clientX, q.clientY)) {
        const $e = ie.dataset?.taskId;
        if ($e && $e !== p) {
          J = $e;
          break;
        }
      }
      J && o && (W({ fromTaskId: p, fromEdge: w, toTaskId: J }), f("FS"), U(0)), _(null);
    };
    return document.addEventListener("mousemove", C), document.addEventListener("mouseup", j), document.addEventListener("touchmove", O, h), document.addEventListener("touchend", B), () => {
      document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", j), document.removeEventListener("touchmove", O), document.removeEventListener("touchend", B);
    };
  }, [rt, it, o]);
  const [fe, Ae] = G(null), [Le, Tt] = G(null), oe = Z((h) => {
    if (E || y || h.button === 2) return;
    const p = L.rightBodyRef.current;
    p && (h.preventDefault(), Ae({ startX: h.clientX, startY: h.clientY, scrollLeft: p.scrollLeft, scrollTop: p.scrollTop }));
  }, [E, y, L.rightBodyRef]), Pt = Z((h) => {
    if (E || y || A) return;
    const p = L.rightBodyRef.current;
    if (!p) return;
    if (l && h.touches.length >= 2) {
      h.cancelable && h.preventDefault(), Ae(null);
      const C = dn(h.touches), O = cn(h.touches);
      Tt({
        startDistance: Math.max(1, C),
        startDayWidth: z.current,
        centerClientY: O.clientY,
        startScrollTop: p.scrollTop
      });
      return;
    }
    const w = Ee(h);
    Ae({ startX: w.clientX, startY: w.clientY, scrollLeft: p.scrollLeft, scrollTop: p.scrollTop });
  }, [E, y, A, L.rightBodyRef, l]), Ot = Z((h) => {
    if (!l) {
      L.handleChartWheel(h);
      return;
    }
    if (!L.rightBodyRef.current) return;
    h.preventDefault();
    const w = Math.abs(h.deltaY) > 0 ? h.deltaY : h.deltaX, C = Math.exp(-w * 15e-4);
    V(h.clientX, z.current * C);
  }, [l, L, V]);
  le(() => {
    if (!fe) return;
    const h = { passive: !1 }, p = (j) => {
      const B = L.rightBodyRef.current;
      B && (B.scrollLeft = fe.scrollLeft - (j.clientX - fe.startX), B.scrollTop = fe.scrollTop - (j.clientY - fe.startY), L.leftBodyRef.current && (L.leftBodyRef.current.scrollTop = B.scrollTop), L.timeHeaderRef.current && (L.timeHeaderRef.current.scrollLeft = B.scrollLeft));
    }, w = (j) => {
      j.cancelable && j.preventDefault();
      const B = L.rightBodyRef.current;
      if (!B) return;
      const Y = Ee(j);
      B.scrollLeft = fe.scrollLeft - (Y.clientX - fe.startX), B.scrollTop = fe.scrollTop - (Y.clientY - fe.startY), L.leftBodyRef.current && (L.leftBodyRef.current.scrollTop = B.scrollTop), L.timeHeaderRef.current && (L.timeHeaderRef.current.scrollLeft = B.scrollLeft);
    }, C = () => Ae(null), O = () => Ae(null);
    return document.addEventListener("mousemove", p), document.addEventListener("mouseup", C), document.addEventListener("touchmove", w, h), document.addEventListener("touchend", O), () => {
      document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", C), document.removeEventListener("touchmove", w), document.removeEventListener("touchend", O);
    };
  }, [fe, L.rightBodyRef, L.leftBodyRef, L.timeHeaderRef]), le(() => {
    if (!Le || !l) return;
    const h = { passive: !1 }, p = (C) => {
      if (C.touches.length < 2) return;
      C.cancelable && C.preventDefault();
      const O = L.rightBodyRef.current;
      if (!O) return;
      const j = dn(C.touches), B = cn(C.touches), Y = Math.max(0.1, j / Le.startDistance);
      V(B.clientX, Le.startDayWidth * Y), O.scrollTop = Le.startScrollTop - (B.clientY - Le.centerClientY), L.leftBodyRef.current && (L.leftBodyRef.current.scrollTop = O.scrollTop);
    }, w = (C) => {
      C.touches.length < 2 && Tt(null);
    };
    return document.addEventListener("touchmove", p, h), document.addEventListener("touchend", w), document.addEventListener("touchcancel", w), () => {
      document.removeEventListener("touchmove", p), document.removeEventListener("touchend", w), document.removeEventListener("touchcancel", w);
    };
  }, [Le, l, L.rightBodyRef, L.leftBodyRef, V]);
  const jt = Z((h) => {
    h.preventDefault(), h.stopPropagation(), I({ isOpen: !1, position: { x: 0, y: 0 }, task: null }), se(!1);
    const p = (C) => {
      const O = L.rightBodyRef.current;
      if (!O) return /* @__PURE__ */ new Date();
      const j = O.getBoundingClientRect(), B = C - j.left + O.scrollLeft;
      return ye(X.timeline.start, Math.max(0, Math.floor(B / X.timeline.dayWidth)));
    }, w = (C) => {
      if (!e.groupByProject) return;
      const O = L.leftBodyRef.current;
      if (!O) return;
      const j = O.getBoundingClientRect(), B = C - j.top + O.scrollTop, Y = Math.max(0, Math.floor(B / 50));
      for (let q = Math.min(Y, X.displayRows.length - 1); q >= 0; q--) {
        const J = X.displayRows[q];
        if (J.kind === "projectHeader") return J.projectId;
        if (J.kind === "task" && J.task.projectId) return J.task.projectId;
        if (J.kind === "group" && J.projectId) return J.projectId;
      }
    };
    ce({ x: h.clientX, y: h.clientY, date: p(h.clientX), projectId: w(h.clientY) }), Ae(null);
  }, [X.timeline, X.displayRows, e.groupByProject, L.rightBodyRef, L.leftBodyRef]);
  le(() => {
    if (!ne) return;
    const h = (O) => {
      O.key === "Escape" && ce(null);
    }, p = (O) => {
      O.target.closest('[data-menu="chart-create"]') || ce(null);
    }, w = (O) => {
      O.target.closest('[data-menu="chart-create"]') || ce(null);
    }, C = () => ce(null);
    return document.addEventListener("keydown", h), document.addEventListener("click", p), document.addEventListener("touchstart", w), window.addEventListener("scroll", C, !0), () => {
      document.removeEventListener("keydown", h), document.removeEventListener("click", p), document.removeEventListener("touchstart", w), window.removeEventListener("scroll", C, !0);
    };
  }, [ne]), le(() => {
    if (!u.isOpen) return;
    const h = (w) => {
      w.target.closest('[data-popup="gantt-action"]') || I({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
    }, p = (w) => {
      w.key === "Escape" && I({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
    };
    return document.addEventListener("mousedown", h), document.addEventListener("keydown", p), () => {
      document.removeEventListener("mousedown", h), document.removeEventListener("keydown", p);
    };
  }, [u.isOpen]), le(() => {
    if (!we) return;
    const h = (w) => {
      Ie.current && !Ie.current.contains(w.target) && se(!1);
    }, p = (w) => {
      w.key === "Escape" && se(!1);
    };
    return document.addEventListener("mousedown", h), document.addEventListener("keydown", p), () => {
      document.removeEventListener("mousedown", h), document.removeEventListener("keydown", p);
    };
  }, [we]);
  const Rn = ae(() => ({
    props: e,
    t: (h, p) => sn(e.translations, h, p),
    viewMode: d,
    setViewMode: $t,
    isInfiniteCanvas: l,
    dayWidth: m,
    zoomPercent: Math.round(m / at * 100),
    zoomIn: xe,
    zoomOut: Re,
    fitToScreen: De,
    hoveredTaskId: S,
    setHoveredTaskId: P,
    selectedTaskId: N,
    setSelectedTaskId: M,
    tooltip: F,
    setTooltip: k,
    popupState: u,
    setPopupState: I,
    dragState: y,
    setDragState: D,
    resizeState: E,
    setResizeState: R,
    connectState: A,
    setConnectState: _,
    visibleTypes: Ne,
    setVisibleTypes: ut,
    toggleVisibility: Ye,
    collapsedGroups: et,
    setCollapsedGroups: ht,
    toggleGroup: Se,
    collapsedProjects: tt,
    setCollapsedProjects: nt,
    toggleProject: Xe,
    pendingConnection: b,
    setPendingConnection: W,
    depModalType: x,
    setDepModalType: f,
    depModalLag: $,
    setDepModalLag: U,
    depCreating: te,
    setDepCreating: Q,
    deletingDepId: K,
    setDeletingDepId: ee,
    chartMenu: ne,
    setChartMenu: ce,
    newActionOpen: we,
    setNewActionOpen: se,
    activePinboardTask: Je,
    setActivePinboardTask: kt,
    searchQuery: ct,
    setSearchQuery: Qe,
    nonWorkingDaySet: X.nonWorkingDaySet,
    exportPng: It,
    tasks: X.tasks,
    timeline: X.timeline,
    displayRows: X.displayRows,
    taskRowIndex: X.taskRowIndex || /* @__PURE__ */ new Map(),
    arrows: X.arrows,
    criticalIds: X.criticalIds,
    delayedIds: X.delayedIds,
    relatedIds: X.relatedIds,
    groupProgress: X.groupProgress,
    sidebarW: je,
    ...L,
    newActionRef: Ie,
    screenXToDate: (h) => {
      const p = L.rightBodyRef.current;
      if (!p) return /* @__PURE__ */ new Date();
      const w = p.getBoundingClientRect(), C = h - w.left + p.scrollLeft;
      return ye(X.timeline.start, Math.max(0, Math.floor(C / X.timeline.dayWidth)));
    },
    screenYToProjectId: (h) => {
      if (!e.groupByProject) return;
      const p = L.leftBodyRef.current;
      if (!p) return;
      const w = p.getBoundingClientRect(), C = h - w.top + p.scrollTop, O = Math.max(0, Math.floor(C / 50));
      for (let j = Math.min(O, X.displayRows.length - 1); j >= 0; j--) {
        const B = X.displayRows[j];
        if (B.kind === "projectHeader") return B.projectId;
        if (B.kind === "task" && B.task.projectId) return B.task.projectId;
        if (B.kind === "group" && B.projectId) return B.projectId;
      }
    },
    handleChartMouseDown: oe,
    handleChartTouchStart: Pt,
    handleChartWheel: Ot,
    openChartMenu: jt,
    handleBarClick: gt,
    handleBarMouseDown: re,
    handleBarTouchStart: Ce,
    handleResizeMouseDown: Te,
    handleResizeTouchStart: ve,
    handleConnectDotMouseDown: ot,
    handleConnectDotTouchStart: He,
    handleCreateDependency: pt
  }), [
    e,
    d,
    l,
    m,
    xe,
    Re,
    De,
    S,
    N,
    F,
    u,
    y,
    E,
    A,
    Ne,
    et,
    tt,
    b,
    x,
    $,
    te,
    K,
    ne,
    we,
    Je,
    X,
    L,
    je,
    Ye,
    Se,
    Xe,
    oe,
    Pt,
    Ot,
    jt,
    gt,
    re,
    Ce,
    Te,
    ve,
    ot,
    He,
    pt
  ]);
  return e.loading ? /* @__PURE__ */ g(
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
        /* @__PURE__ */ g("div", { style: { padding: "14px 18px", borderBottom: "1px solid var(--zg-border, #D9D9D9)", background: "var(--zg-header-bg, #F2F5F3)", display: "flex", gap: 12, alignItems: "center" }, children: [
          /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 140, height: 20 } }),
          /* @__PURE__ */ a("div", { style: { flex: 1 } }),
          /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 80, height: 30, borderRadius: 8 } }),
          /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 200, height: 30, borderRadius: 8 } }),
          /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 120, height: 36, borderRadius: 8 } })
        ] }),
        /* @__PURE__ */ g("div", { style: { display: "flex", flex: 1, overflow: "hidden" }, children: [
          /* @__PURE__ */ g("div", { style: { width: 460, flexShrink: 0, borderRight: "1px solid var(--zg-border, #D9D9D9)", padding: "0 16px" }, children: [
            /* @__PURE__ */ g("div", { style: { height: 64, display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid var(--zg-border, #D9D9D9)" }, children: [
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { flex: 1, height: 12 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 60, height: 12 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 60, height: 12 } })
            ] }),
            Array.from({ length: 8 }, (h, p) => /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 10, height: 50, borderBottom: "1px solid var(--zg-border-light, #ECECEC)" }, children: [
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 14, height: 14, borderRadius: 3, flexShrink: 0 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: `${45 + p % 4 * 10}%`, height: 12 } }),
              /* @__PURE__ */ a("div", { style: { flex: 1 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 50, height: 11 } }),
              /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { width: 50, height: 11 } })
            ] }, p))
          ] }),
          /* @__PURE__ */ g("div", { style: { flex: 1, padding: 16, display: "flex", flexDirection: "column", gap: 8 }, children: [
            /* @__PURE__ */ a("div", { style: { display: "flex", gap: 4, marginBottom: 8 }, children: Array.from({ length: 8 }, (h, p) => /* @__PURE__ */ a("div", { className: "zg-skeleton", style: { flex: 1, height: 30, borderRadius: 4 } }, p)) }),
            Array.from({ length: 8 }, (h, p) => /* @__PURE__ */ a("div", { style: { height: 50, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ a(
              "div",
              {
                className: "zg-skeleton",
                style: {
                  marginLeft: `${p * 17 % 35}%`,
                  width: `${20 + p % 5 * 8}%`,
                  height: 26,
                  borderRadius: 13
                }
              }
            ) }, p))
          ] })
        ] })
      ]
    }
  ) : /* @__PURE__ */ a(Yn, { value: Rn, children: /* @__PURE__ */ g(
    "div",
    {
      ref: zt,
      className: `zg-root ${l ? "zg-root--infinite" : "zg-root--framed"} ${Je ? "zg-root--muted" : ""}`,
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
        /* @__PURE__ */ a(_n, {}),
        /* @__PURE__ */ g("div", { style: { display: "flex", flex: 1, overflow: "hidden", position: "relative", background: n.surfaceAlt }, children: [
          !e.hideSidebar && /* @__PURE__ */ g(ze, { children: [
            /* @__PURE__ */ a("div", { style: { width: je, flexShrink: 0 }, children: /* @__PURE__ */ a(no, {}) }),
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
                onMouseEnter: (h) => {
                  h.currentTarget.style.background = n.groupGlowSoft;
                },
                onMouseLeave: (h) => {
                  h.currentTarget.style.background = "transparent";
                },
                onMouseDown: (h) => {
                  h.preventDefault();
                  const p = h.clientX, w = je, C = (j) => {
                    const B = Math.min(hr, Math.max(ur, w + j.clientX - p));
                    dt(B);
                    try {
                      localStorage.setItem(ln, String(B));
                    } catch {
                    }
                  }, O = () => {
                    document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", O);
                  };
                  document.addEventListener("mousemove", C), document.addEventListener("mouseup", O);
                }
              }
            )
          ] }),
          /* @__PURE__ */ a(ao, {})
        ] }),
        /* @__PURE__ */ a(lr, {})
      ]
    }
  ) });
}
const mr = [
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
function kr({
  isOpen: e,
  onClose: t,
  availableMilestones: o = [],
  initialDate: r,
  translations: i,
  onSaveNote: s
}) {
  const l = (x, f) => i ? typeof i == "function" ? i(x, f) : i[x] || f : f, [d, c] = G(""), [m, v] = G(""), [z, S] = G("#FEF08A"), [P, N] = G(""), [M, F] = G(""), [k, u] = G("FS"), [I, y] = G(!1), [D, E] = G([]), [R, A] = G(""), _ = be(null);
  le(() => {
    e && (c(""), v(""), S("#FEF08A"), N(r ?? (/* @__PURE__ */ new Date()).toISOString().split("T")[0]), F(""), u("FS"), E([]), A(""));
  }, [e, r]);
  const b = [
    ...o.map((x) => ({ id: x.id, name: x.name, type: "MILESTONE" }))
  ], W = async () => {
    if (!d.trim() && !m.trim()) {
      A(l("noteModal.errorEmpty", "Please provide a title or content for the note."));
      return;
    }
    A("");
    try {
      y(!0), await s({
        title: d || l("noteModal.untitled", "Untitled"),
        description: m,
        color: z,
        date: P ? `${P}T00:00:00` : (/* @__PURE__ */ new Date()).toISOString(),
        predecessorId: M,
        dependencyType: k,
        files: D
      }), t();
    } catch (x) {
      console.error(x), A(l("noteModal.errorSave", "Error creating note."));
    } finally {
      y(!1);
    }
  };
  return e ? /* @__PURE__ */ a("div", { style: { position: "fixed", inset: 0, background: n.overlaySoft, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 16 }, onClick: t, children: /* @__PURE__ */ g("div", { onClick: (x) => x.stopPropagation(), style: {
    width: 400,
    maxHeight: "90vh",
    background: z || n.noteDefaultBg,
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
        onMouseEnter: (x) => x.currentTarget.style.background = n.groupBorderWeak,
        onMouseLeave: (x) => x.currentTarget.style.background = n.groupSoftStrong,
        children: "✕"
      }
    ),
    /* @__PURE__ */ g("div", { style: { padding: "28px 24px 20px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }, children: [
      R && /* @__PURE__ */ a("div", { style: { background: n.todaySoft, color: n.dangerText, padding: "8px 12px", borderRadius: 6, fontSize: 12, marginBottom: 12, border: `1px solid ${n.todayMid}` }, children: R }),
      /* @__PURE__ */ a(
        "input",
        {
          type: "text",
          value: d,
          onChange: (x) => c(x.target.value),
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
          value: m,
          onChange: (x) => v(x.target.value),
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
      /* @__PURE__ */ g("div", { style: { marginTop: 14, paddingTop: 10, borderTop: `1px solid ${n.groupSoftStrong}` }, children: [
        /* @__PURE__ */ a(
          "input",
          {
            ref: _,
            type: "file",
            multiple: !0,
            onChange: (x) => {
              const f = x.target.files ? Array.from(x.target.files) : [];
              f.length > 0 && E(($) => [...$, ...f]), _.current && (_.current.value = "");
            },
            style: { display: "none" }
          }
        ),
        /* @__PURE__ */ g(
          "button",
          {
            type: "button",
            onClick: () => _.current?.click(),
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
            onMouseEnter: (x) => x.currentTarget.style.background = n.groupSoftStrong,
            onMouseLeave: (x) => x.currentTarget.style.background = n.groupSoft,
            children: [
              /* @__PURE__ */ a(Pn, { size: 13 }),
              l("noteModal.attachFiles", "Attach files")
            ]
          }
        ),
        D.length > 0 && /* @__PURE__ */ a("div", { style: { marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }, children: D.map((x, f) => /* @__PURE__ */ g("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 8px",
          borderRadius: 4,
          background: n.surfaceFrost,
          fontSize: 11,
          color: n.inkMedium
        }, children: [
          /* @__PURE__ */ a(lt, { size: 10, style: { flexShrink: 0 } }),
          /* @__PURE__ */ a("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: x.name }),
          /* @__PURE__ */ g("span", { style: { fontSize: 9, color: n.inkSoft4, flexShrink: 0 }, children: [
            (x.size / 1024).toFixed(0),
            "KB"
          ] }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              onClick: () => E(($) => $.filter((U, te) => te !== f)),
              style: { background: "none", border: "none", cursor: "pointer", padding: 2, display: "flex", color: n.dangerText },
              title: l("noteModal.removeFile", "Remove"),
              children: /* @__PURE__ */ a(gn, { size: 12 })
            }
          )
        ] }, `file-${f}`)) })
      ] }),
      /* @__PURE__ */ g("div", { style: { marginTop: 16, paddingTop: 12, borderTop: `1px solid ${n.groupSoftStrong}`, display: "flex", alignItems: "center", justifyItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
        /* @__PURE__ */ a(
          "input",
          {
            type: "date",
            value: P,
            onChange: (x) => N(x.target.value),
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
        /* @__PURE__ */ a("div", { style: { display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }, children: mr.map((x) => /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => S(x.value),
            style: {
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: z === x.value ? `2px solid ${n.group}` : `1.5px solid ${n.groupSoftStrong}`,
              backgroundColor: x.value,
              cursor: "pointer",
              padding: 0,
              transform: z === x.value ? "scale(1.15)" : "scale(1)",
              transition: "all 0.15s",
              boxShadow: z === x.value ? n.shadowSmall : "none"
            },
            title: x.label
          },
          x.value
        )) })
      ] }),
      b.length > 0 && /* @__PURE__ */ g("div", { style: { marginTop: 12, paddingTop: 12, borderTop: `1px solid ${n.groupSoftStrong}` }, children: [
        /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }, children: [
          /* @__PURE__ */ a(On, { size: 14, style: { color: n.inkSoft3 } }),
          /* @__PURE__ */ a("span", { style: { fontSize: 11, color: n.inkSoft3, fontWeight: 600 }, children: l("noteModal.dependency", "Dependency") })
        ] }),
        /* @__PURE__ */ g(
          "select",
          {
            value: M,
            onChange: (x) => F(x.target.value),
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
              o.length > 0 && /* @__PURE__ */ a("optgroup", { label: l("noteModal.milestones", "Milestones"), children: o.map((x) => /* @__PURE__ */ a("option", { value: x.id, children: x.name }, x.id)) })
            ]
          }
        ),
        M && /* @__PURE__ */ a(
          "select",
          {
            value: k,
            onChange: (x) => u(x.target.value),
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
            children: Object.keys(un).map((x) => /* @__PURE__ */ a("option", { value: x, children: un[x] }, x))
          }
        )
      ] }),
      /* @__PURE__ */ g("div", { style: { display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 16, marginTop: 12, borderTop: `1px solid ${n.groupSoftStrong}` }, children: [
        /* @__PURE__ */ a(
          "button",
          {
            onClick: t,
            style: { padding: "8px 16px", fontSize: 13, color: n.inkMedium, background: n.surfaceFrost, border: `1px solid ${n.groupSoftStrong}`, borderRadius: 8, cursor: "pointer" },
            children: l("noteModal.cancel", "Cancel")
          }
        ),
        /* @__PURE__ */ g(
          "button",
          {
            onClick: W,
            disabled: I,
            style: { padding: "8px 20px", fontSize: 13, color: n.white, background: n.group, border: "none", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, opacity: I ? 0.5 : 1 },
            children: [
              I && /* @__PURE__ */ a(jn, { size: 16, style: { animation: "zg-spin 1s linear infinite" } }),
              l("noteModal.create", "Create Note")
            ]
          }
        )
      ] })
    ] })
  ] }) }) : null;
}
export {
  kr as NoteModal,
  Sr as ProjectGantt,
  dr as enUS,
  an as generateGanttTheme,
  wr as ptBR
};
