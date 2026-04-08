import { jsx as r, jsxs as p, Fragment as ve } from "react/jsx-runtime";
import * as dt from "react";
import { createContext as Yt, useContext as Xt, useMemo as se, useCallback as Z, useRef as fe, useEffect as ae, useState as G } from "react";
import { Flag as Ke, Clock as qe, MessageCircle as _t, Plus as yt, ChevronDown as bt, ChevronRight as St, Paperclip as ct, AlertTriangle as Ht, Eye as Vt, Edit2 as Gt, Trash2 as Ut, Calendar as Kt, RotateCcw as qt, X as Bt, Grip as Zt, Loader2 as Lt, Upload as Jt, Link2 as Qt } from "lucide-react";
import { flushSync as en } from "react-dom";
const Wt = Yt(void 0);
function tn({ children: t, value: i }) {
  return /* @__PURE__ */ r(Wt.Provider, { value: i, children: t });
}
function Oe() {
  const t = Xt(Wt);
  if (!t)
    throw new Error("useGanttContext must be used within a GanttProvider");
  return t;
}
const e = {
  pageBg: "var(--zg-page-bg, #F8FAFB)",
  surface: "var(--zg-surface, #FFFFFF)",
  surfaceAlt: "var(--zg-surface-alt, #F7FAF8)",
  surfaceFrost: "var(--zg-surface-frost, rgba(255,255,255,0.96))",
  headerBg: "var(--zg-header-bg, #F2F5F3)",
  textTitle: "var(--zg-primary-color, #1A3C30)",
  textPrimary: "var(--zg-text-primary, #4F4F4F)",
  textSecondary: "var(--zg-text-secondary, #7B7B7B)",
  textSecondarySoft: "var(--zg-text-secondary-soft, rgba(123,123,123,0.27))",
  textSecondaryMid: "var(--zg-text-secondary-mid, rgba(123,123,123,0.4))",
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
  // #A0D8A8 (bar border)
  milestone: "var(--zg-milestone, #1A3C30)",
  milestoneRing: "var(--zg-milestone-ring, #A0D8A8)",
  milestoneRingSoft: "var(--zg-milestone-ring-soft, rgba(160,216,168,0.19))",
  milestonePillBg: "var(--zg-milestone-pill-bg, linear-gradient(135deg, #e8f5ee, #f0f8f4))",
  criticalPillBg: "var(--zg-critical-pill-bg, linear-gradient(135deg, #fee, #fff5f5))",
  event: "var(--zg-event, #CD6200)",
  eventSoft: "var(--zg-event-soft, rgba(205,98,0,0.09))",
  eventBorderSoft: "var(--zg-event-border-soft, rgba(205,98,0,0.33))",
  eventPillBg: "var(--zg-event-pill-bg, linear-gradient(135deg, #fff7ed, #ffedd5))",
  note: "var(--zg-note-color, #FFBB1C)",
  noteDefaultBg: "var(--zg-note-default-bg, #FEF08A)",
  noteBadgeBg: "var(--zg-note-badge-bg, #FACC15)",
  noteBadgeText: "var(--zg-note-badge-text, #1A3C30)",
  delayedTaskBg: "var(--zg-delayed-task-bg, linear-gradient(135deg, #fdd, #fee))",
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
}, re = 50, Ge = 32, nn = Ge * 2, on = 460, ce = 26, $e = 28, xt = 120, Ue = 40, $t = 3.5, he = [
  { bar: "#D1D8A0", barBorder: "#A0D8A8", progress: "#1A3C30" },
  // sistema (light_yellow)
  { bar: "#A0D8C8", barBorder: "#6BBFA8", progress: "#14534A" },
  // teal
  { bar: "#B8C9E8", barBorder: "#8AAAD6", progress: "#2C4A70" },
  // blue
  { bar: "#E8C9A0", barBorder: "#D6AA7A", progress: "#6B4510" },
  // amber
  { bar: "#D8A0C8", barBorder: "#C47AAE", progress: "#6B2058" },
  // pink
  { bar: "#A0C8D8", barBorder: "#74ACBF", progress: "#1A4F60" },
  // sky
  { bar: "#C8D8A0", barBorder: "#A8BF74", progress: "#3F5014" },
  // lime
  { bar: "#D8B0A0", barBorder: "#C4907A", progress: "#6B3020" },
  // coral
  { bar: "#B0A0D8", barBorder: "#937ACE", progress: "#3A2070" },
  // violet
  { bar: "#A0D8B0", barBorder: "#70C888", progress: "#1A5030" }
  // mint
], wt = {
  step: "Steps",
  milestone: "Milestones",
  event: "Events",
  note: "Notes"
};
function rn() {
  const {
    props: t,
    t: i,
    viewMode: o,
    setViewMode: s,
    isInfiniteCanvas: n,
    zoomPercent: l,
    zoomIn: a,
    zoomOut: d,
    fitToScreen: m,
    visibleTypes: v,
    setVisibleTypes: S,
    newActionOpen: E,
    setNewActionOpen: k,
    newActionRef: C
  } = Oe(), { projectName: N, onAddNewStage: B, onAddMilestone: A, onAddEvent: I, onAddNote: h } = t, M = (f) => {
    S((x) => {
      const g = new Set(x);
      return g.has(f) ? g.delete(f) : g.add(f), g;
    });
  };
  return /* @__PURE__ */ p(
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
        borderBottom: `1px solid ${e.border}`,
        background: `linear-gradient(180deg, ${e.headerBg} 0%, ${e.surface} 100%)`
      },
      children: [
        /* @__PURE__ */ p("div", { className: "zg-header-brand", style: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ p("div", { children: [
            /* @__PURE__ */ r("h3", { style: { margin: 0, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: e.textTitle, fontFamily: "var(--zg-font-accent)" }, children: i("planning.gantt", "Project Planning") }),
            /* @__PURE__ */ r("div", { style: { height: 2.5, width: 64, marginTop: 6, borderRadius: 9999, background: `linear-gradient(90deg, ${e.group}, ${e.milestoneRing})` } })
          ] }),
          N && /* @__PURE__ */ r(
            "span",
            {
              style: {
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "6px 12px",
                borderRadius: 9999,
                color: e.textSecondary,
                background: e.surface,
                border: `1px solid ${e.border}`,
                boxShadow: e.shadowTiny
              },
              children: N
            }
          )
        ] }),
        /* @__PURE__ */ p("div", { className: "zg-header-controls", style: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "flex-end", flex: "1 1 560px" }, children: [
          n ? /* @__PURE__ */ p("div", { className: "zg-control-group", style: { display: "flex", alignItems: "center", gap: 6, padding: 4, borderRadius: 10, background: e.groupSoftStrong, border: `1px solid ${e.borderLight}` }, children: [
            /* @__PURE__ */ r(
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
                  color: e.group,
                  background: e.surface,
                  boxShadow: e.shadowTiny
                },
                "aria-label": i("gantt.viewport.zoomOut", "Zoom out"),
                title: i("gantt.viewport.zoomOut", "Zoom out"),
                children: "-"
              }
            ),
            /* @__PURE__ */ p("span", { style: { minWidth: 58, textAlign: "center", fontSize: 11, fontWeight: 700, color: e.textSecondary }, children: [
              l,
              "%"
            ] }),
            /* @__PURE__ */ r(
              "button",
              {
                className: "zg-control-btn zg-control-btn--icon",
                onClick: a,
                style: {
                  width: 30,
                  height: 30,
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: 700,
                  color: e.group,
                  background: e.surface,
                  boxShadow: e.shadowTiny
                },
                "aria-label": i("gantt.viewport.zoomIn", "Zoom in"),
                title: i("gantt.viewport.zoomIn", "Zoom in"),
                children: "+"
              }
            ),
            /* @__PURE__ */ r(
              "button",
              {
                className: "zg-control-btn zg-control-btn--fit",
                onClick: m,
                style: {
                  padding: "0 12px",
                  height: 30,
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  color: e.group,
                  background: e.surface,
                  boxShadow: e.shadowTiny,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em"
                },
                title: i("gantt.viewport.fit", "Fit to screen"),
                children: i("gantt.viewport.fit", "Fit")
              }
            )
          ] }) : /* @__PURE__ */ r("div", { className: "zg-control-group", style: { display: "flex", padding: 4, borderRadius: 10, background: e.groupSoftStrong, border: `1px solid ${e.borderLight}` }, children: ["day", "month"].map((f) => /* @__PURE__ */ r(
            "button",
            {
              className: `zg-segment-btn ${o === f ? "is-active" : "is-inactive"}`,
              onClick: () => s(f),
              style: {
                padding: "6px 20px",
                fontSize: 12,
                fontWeight: 600,
                borderRadius: 6,
                transition: "all 0.2s",
                border: "none",
                cursor: "pointer",
                ...o === f ? { background: e.surface, color: e.group, boxShadow: e.shadowTiny } : { background: "transparent", color: e.textSecondary }
              },
              children: f === "day" ? i("charts.gantt.month", "Month") : i("charts.gantt.year", "Year")
            },
            f
          )) }),
          /* @__PURE__ */ r("div", { className: "zg-control-group zg-control-group--filters", style: { display: "flex", padding: 4, borderRadius: 10, gap: 2, background: e.groupSoftStrong, border: `1px solid ${e.borderLight}`, flexWrap: "wrap" }, children: [
            { type: "step", label: i("gantt.filter.steps", "Steps"), icon: /* @__PURE__ */ r("div", { style: { width: 10, height: 10, borderRadius: 2, background: he[0].bar, border: `1px solid ${he[0].barBorder}` } }) },
            { type: "milestone", label: i("gantt.filter.milestones", "Milestones"), icon: /* @__PURE__ */ r(Ke, { size: 11, style: { color: e.milestone } }) },
            { type: "event", label: i("gantt.filter.events", "Events"), icon: /* @__PURE__ */ r(qe, { size: 11, style: { color: e.event } }) },
            { type: "note", label: i("gantt.filter.notes", "Notes"), icon: /* @__PURE__ */ r(_t, { size: 11, style: { color: e.note } }) }
          ].map((f) => {
            const x = v.has(f.type);
            return /* @__PURE__ */ p(
              "button",
              {
                className: `zg-segment-btn ${x ? "is-active" : "is-inactive"}`,
                onClick: () => M(f.type),
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
                  ...x ? { background: e.surface, color: e.group, boxShadow: e.shadowTiny } : { background: "transparent", color: e.textSecondary, opacity: 0.58 }
                },
                children: [
                  f.icon,
                  /* @__PURE__ */ r("span", { children: f.label })
                ]
              },
              f.type
            );
          }) }),
          B && /* @__PURE__ */ p("div", { ref: C, style: { position: "relative" }, children: [
            /* @__PURE__ */ p(
              "button",
              {
                className: "zg-new-action-btn",
                onClick: () => k((f) => !f),
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: e.white,
                  border: "none",
                  cursor: "pointer",
                  background: `linear-gradient(135deg, ${e.group}, ${e.groupGlowStrong})`,
                  transition: "all 0.2s"
                },
                children: [
                  /* @__PURE__ */ r(yt, { size: 16 }),
                  /* @__PURE__ */ r("span", { children: i("charts.gantt.newAction", "New Action") }),
                  /* @__PURE__ */ r(bt, { size: 14, style: { opacity: 0.7, transform: E ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
                ]
              }
            ),
            E && /* @__PURE__ */ r(
              "div",
              {
                className: "zg-new-action-menu",
                style: {
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  right: 0,
                  zIndex: 99999,
                  background: e.surface,
                  borderRadius: 10,
                  boxShadow: "var(--zg-shadow-popover)",
                  border: `1.5px solid ${e.borderLight}`,
                  width: 200,
                  overflow: "hidden",
                  padding: "5px 5px"
                },
                onClick: (f) => f.stopPropagation(),
                children: [
                  {
                    label: i("gantt.newAction.step", "Step"),
                    icon: /* @__PURE__ */ r("div", { style: { width: 14, height: 14, borderRadius: 3, background: he[0].bar, border: `1.5px solid ${he[0].barBorder}`, flexShrink: 0 } }),
                    action: () => {
                      B(), k(!1);
                    }
                  },
                  {
                    label: i("gantt.newAction.milestone", "Milestone"),
                    icon: /* @__PURE__ */ r("div", { style: { width: 22, height: 22, borderRadius: "50%", background: e.milestoneRingSoft, border: `1.5px solid ${e.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(Ke, { size: 11, style: { color: e.milestone } }) }),
                    action: () => {
                      A?.(), k(!1);
                    }
                  },
                  {
                    label: i("gantt.newAction.event", "Event"),
                    icon: /* @__PURE__ */ r("div", { style: { width: 22, height: 22, borderRadius: "50%", background: e.eventSoft, border: `1.5px solid ${e.eventBorderSoft}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(qe, { size: 11, style: { color: e.event } }) }),
                    action: () => {
                      I?.(), k(!1);
                    }
                  },
                  {
                    label: i("gantt.newAction.note", "Note"),
                    icon: /* @__PURE__ */ r("div", { style: { width: 16, height: 20, background: e.note, borderRadius: 2, boxShadow: e.shadowTiny, position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ r("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: e.stickyTape, borderRadius: 1 } }) }),
                    action: () => {
                      h?.(), k(!1);
                    }
                  }
                ].map((f) => /* @__PURE__ */ p(
                  "button",
                  {
                    onClick: f.action,
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
                      color: e.textPrimary,
                      textAlign: "left"
                    },
                    children: [
                      f.icon,
                      f.label
                    ]
                  },
                  f.label
                ))
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Pe(t, i, o) {
  let s = o.initialDeps ?? [], n, l = !0;
  function a() {
    var d, m, v;
    let S;
    o.key && ((d = o.debug) != null && d.call(o)) && (S = Date.now());
    const E = t();
    if (!(E.length !== s.length || E.some((N, B) => s[B] !== N)))
      return n;
    s = E;
    let C;
    if (o.key && ((m = o.debug) != null && m.call(o)) && (C = Date.now()), n = i(...E), o.key && ((v = o.debug) != null && v.call(o))) {
      const N = Math.round((Date.now() - S) * 100) / 100, B = Math.round((Date.now() - C) * 100) / 100, A = B / 16, I = (h, M) => {
        for (h = String(h); h.length < M; )
          h = " " + h;
        return h;
      };
      console.info(
        `%c⏱ ${I(B, 5)} /${I(N, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * A, 120)
        )}deg 100% 31%);`,
        o?.key
      );
    }
    return o?.onChange && !(l && o.skipInitialOnChange) && o.onChange(n), l = !1, n;
  }
  return a.updateDeps = (d) => {
    s = d;
  }, a;
}
function kt(t, i) {
  if (t === void 0)
    throw new Error("Unexpected undefined");
  return t;
}
const sn = (t, i) => Math.abs(t - i) < 1.01, an = (t, i, o) => {
  let s;
  return function(...n) {
    t.clearTimeout(s), s = t.setTimeout(() => i.apply(this, n), o);
  };
}, It = (t) => {
  const { offsetWidth: i, offsetHeight: o } = t;
  return { width: i, height: o };
}, ln = (t) => t, dn = (t) => {
  const i = Math.max(t.startIndex - t.overscan, 0), o = Math.min(t.endIndex + t.overscan, t.count - 1), s = [];
  for (let n = i; n <= o; n++)
    s.push(n);
  return s;
}, cn = (t, i) => {
  const o = t.scrollElement;
  if (!o)
    return;
  const s = t.targetWindow;
  if (!s)
    return;
  const n = (a) => {
    const { width: d, height: m } = a;
    i({ width: Math.round(d), height: Math.round(m) });
  };
  if (n(It(o)), !s.ResizeObserver)
    return () => {
    };
  const l = new s.ResizeObserver((a) => {
    const d = () => {
      const m = a[0];
      if (m?.borderBoxSize) {
        const v = m.borderBoxSize[0];
        if (v) {
          n({ width: v.inlineSize, height: v.blockSize });
          return;
        }
      }
      n(It(o));
    };
    t.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(d) : d();
  });
  return l.observe(o, { box: "border-box" }), () => {
    l.unobserve(o);
  };
}, zt = {
  passive: !0
}, Tt = typeof window > "u" ? !0 : "onscrollend" in window, hn = (t, i) => {
  const o = t.scrollElement;
  if (!o)
    return;
  const s = t.targetWindow;
  if (!s)
    return;
  let n = 0;
  const l = t.options.useScrollendEvent && Tt ? () => {
  } : an(
    s,
    () => {
      i(n, !1);
    },
    t.options.isScrollingResetDelay
  ), a = (S) => () => {
    const { horizontal: E, isRtl: k } = t.options;
    n = E ? o.scrollLeft * (k && -1 || 1) : o.scrollTop, l(), i(n, S);
  }, d = a(!0), m = a(!1);
  o.addEventListener("scroll", d, zt);
  const v = t.options.useScrollendEvent && Tt;
  return v && o.addEventListener("scrollend", m, zt), () => {
    o.removeEventListener("scroll", d), v && o.removeEventListener("scrollend", m);
  };
}, pn = (t, i, o) => {
  if (i?.borderBoxSize) {
    const s = i.borderBoxSize[0];
    if (s)
      return Math.round(
        s[o.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return t[o.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, gn = (t, {
  adjustments: i = 0,
  behavior: o
}, s) => {
  var n, l;
  const a = t + i;
  (l = (n = s.scrollElement) == null ? void 0 : n.scrollTo) == null || l.call(n, {
    [s.options.horizontal ? "left" : "top"]: a,
    behavior: o
  });
};
class un {
  constructor(i) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var o, s, n;
      return ((n = (s = (o = this.targetWindow) == null ? void 0 : o.performance) == null ? void 0 : s.now) == null ? void 0 : n.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let o = null;
      const s = () => o || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : o = new this.targetWindow.ResizeObserver((n) => {
        n.forEach((l) => {
          const a = () => {
            const d = l.target, m = this.indexFromElement(d);
            if (!d.isConnected) {
              this.observer.unobserve(d);
              return;
            }
            this.shouldMeasureDuringScroll(m) && this.resizeItem(
              m,
              this.options.measureElement(d, l, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
        });
      }));
      return {
        disconnect: () => {
          var n;
          (n = s()) == null || n.disconnect(), o = null;
        },
        observe: (n) => {
          var l;
          return (l = s()) == null ? void 0 : l.observe(n, { box: "border-box" });
        },
        unobserve: (n) => {
          var l;
          return (l = s()) == null ? void 0 : l.unobserve(n);
        }
      };
    })(), this.range = null, this.setOptions = (o) => {
      Object.entries(o).forEach(([s, n]) => {
        typeof n > "u" && delete o[s];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: ln,
        rangeExtractor: dn,
        onChange: () => {
        },
        measureElement: pn,
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
      var s, n;
      (n = (s = this.options).onChange) == null || n.call(s, this, o);
    }, this.maybeNotify = Pe(
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
      const s = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== s) {
        if (this.cleanup(), !s) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = s, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((o = this.scrollElement) == null ? void 0 : o.window) ?? null, this.elementsCache.forEach((n) => {
          this.observer.observe(n);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (n) => {
            this.scrollRect = n, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (n, l) => {
            this.scrollAdjustments = 0, this.scrollDirection = l ? this.getScrollOffset() < n ? "forward" : "backward" : null, this.scrollOffset = n, this.isScrolling = l, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (o, s) => {
      const n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
      for (let a = s - 1; a >= 0; a--) {
        const d = o[a];
        if (n.has(d.lane))
          continue;
        const m = l.get(
          d.lane
        );
        if (m == null || d.end > m.end ? l.set(d.lane, d) : d.end < m.end && n.set(d.lane, !0), n.size === this.options.lanes)
          break;
      }
      return l.size === this.options.lanes ? Array.from(l.values()).sort((a, d) => a.end === d.end ? a.index - d.index : a.end - d.end)[0] : void 0;
    }, this.getMeasurementOptions = Pe(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (o, s, n, l, a, d) => (this.prevLanes !== void 0 && this.prevLanes !== d && (this.lanesChangedFlag = !0), this.prevLanes = d, this.pendingMeasuredCacheIndexes = [], {
        count: o,
        paddingStart: s,
        scrollMargin: n,
        getItemKey: l,
        enabled: a,
        lanes: d
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Pe(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: o, paddingStart: s, scrollMargin: n, getItemKey: l, enabled: a, lanes: d }, m) => {
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > o)
          for (const k of this.laneAssignments.keys())
            k >= o && this.laneAssignments.delete(k);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((k) => {
          this.itemSizeCache.set(k.key, k.size);
        }));
        const v = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === o && (this.lanesSettling = !1);
        const S = this.measurementsCache.slice(0, v), E = new Array(d).fill(
          void 0
        );
        for (let k = 0; k < v; k++) {
          const C = S[k];
          C && (E[C.lane] = k);
        }
        for (let k = v; k < o; k++) {
          const C = l(k), N = this.laneAssignments.get(k);
          let B, A;
          if (N !== void 0 && this.options.lanes > 1) {
            B = N;
            const f = E[B], x = f !== void 0 ? S[f] : void 0;
            A = x ? x.end + this.options.gap : s + n;
          } else {
            const f = this.options.lanes === 1 ? S[k - 1] : this.getFurthestMeasurement(S, k);
            A = f ? f.end + this.options.gap : s + n, B = f ? f.lane : k % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(k, B);
          }
          const I = m.get(C), h = typeof I == "number" ? I : this.options.estimateSize(k), M = A + h;
          S[k] = {
            index: k,
            start: A,
            size: h,
            end: M,
            key: C,
            lane: B
          }, E[B] = k;
        }
        return this.measurementsCache = S, S;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Pe(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (o, s, n, l) => this.range = o.length > 0 && s > 0 ? fn({
        measurements: o,
        outerSize: s,
        scrollOffset: n,
        lanes: l
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Pe(
      () => {
        let o = null, s = null;
        const n = this.calculateRange();
        return n && (o = n.startIndex, s = n.endIndex), this.maybeNotify.updateDeps([this.isScrolling, o, s]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          o,
          s
        ];
      },
      (o, s, n, l, a) => l === null || a === null ? [] : o({
        startIndex: l,
        endIndex: a,
        overscan: s,
        count: n
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (o) => {
      const s = this.options.indexAttribute, n = o.getAttribute(s);
      return n ? parseInt(n, 10) : (console.warn(
        `Missing attribute name '${s}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (o) => {
      var s;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const n = this.scrollState.index ?? ((s = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : s.index);
      if (n !== void 0 && this.range) {
        const l = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), a = Math.max(0, n - l), d = Math.min(
          this.options.count - 1,
          n + l
        );
        return o >= a && o <= d;
      }
      return !0;
    }, this.measureElement = (o) => {
      if (!o) {
        this.elementsCache.forEach((a, d) => {
          a.isConnected || (this.observer.unobserve(a), this.elementsCache.delete(d));
        });
        return;
      }
      const s = this.indexFromElement(o), n = this.options.getItemKey(s), l = this.elementsCache.get(n);
      l !== o && (l && this.observer.unobserve(l), this.observer.observe(o), this.elementsCache.set(n, o)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(o, void 0, this));
    }, this.resizeItem = (o, s) => {
      var n;
      const l = this.measurementsCache[o];
      if (!l) return;
      const a = this.itemSizeCache.get(l.key) ?? l.size, d = s - a;
      d !== 0 && (((n = this.scrollState) == null ? void 0 : n.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(l, d, this) : l.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", d), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += d,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(l.index), this.itemSizeCache = new Map(this.itemSizeCache.set(l.key, s)), this.notify(!1));
    }, this.getVirtualItems = Pe(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (o, s) => {
        const n = [];
        for (let l = 0, a = o.length; l < a; l++) {
          const d = o[l], m = s[d];
          n.push(m);
        }
        return n;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (o) => {
      const s = this.getMeasurements();
      if (s.length !== 0)
        return kt(
          s[Pt(
            0,
            s.length - 1,
            (n) => kt(s[n]).start,
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
    }, this.getOffsetForAlignment = (o, s, n = 0) => {
      if (!this.scrollElement) return 0;
      const l = this.getSize(), a = this.getScrollOffset();
      s === "auto" && (s = o >= a + l ? "end" : "start"), s === "center" ? o += (n - l) / 2 : s === "end" && (o -= l);
      const d = this.getMaxScrollOffset();
      return Math.max(Math.min(d, o), 0);
    }, this.getOffsetForIndex = (o, s = "auto") => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      const n = this.getSize(), l = this.getScrollOffset(), a = this.measurementsCache[o];
      if (!a) return;
      if (s === "auto")
        if (a.end >= l + n - this.options.scrollPaddingEnd)
          s = "end";
        else if (a.start <= l + this.options.scrollPaddingStart)
          s = "start";
        else
          return [l, s];
      if (s === "end" && o === this.options.count - 1)
        return [this.getMaxScrollOffset(), s];
      const d = s === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(d, s, a.size),
        s
      ];
    }, this.scrollToOffset = (o, { align: s = "start", behavior: n = "auto" } = {}) => {
      const l = this.getOffsetForAlignment(o, s), a = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: n,
        startedAt: a,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: n }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (o, {
      align: s = "auto",
      behavior: n = "auto"
    } = {}) => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      const l = this.getOffsetForIndex(o, s);
      if (!l)
        return;
      const [a, d] = l, m = this.now();
      this.scrollState = {
        index: o,
        align: d,
        behavior: n,
        startedAt: m,
        lastTargetOffset: a,
        stableFrames: 0
      }, this._scrollToOffset(a, { adjustments: void 0, behavior: n }), this.scheduleScrollReconcile();
    }, this.scrollBy = (o, { behavior: s = "auto" } = {}) => {
      const n = this.getScrollOffset() + o, l = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: s,
        startedAt: l,
        lastTargetOffset: n,
        stableFrames: 0
      }, this._scrollToOffset(n, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.getTotalSize = () => {
      var o;
      const s = this.getMeasurements();
      let n;
      if (s.length === 0)
        n = this.options.paddingStart;
      else if (this.options.lanes === 1)
        n = ((o = s[s.length - 1]) == null ? void 0 : o.end) ?? 0;
      else {
        const l = Array(this.options.lanes).fill(null);
        let a = s.length - 1;
        for (; a >= 0 && l.some((d) => d === null); ) {
          const d = s[a];
          l[d.lane] === null && (l[d.lane] = d.end), a--;
        }
        n = Math.max(...l.filter((d) => d !== null));
      }
      return Math.max(
        n - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (o, {
      adjustments: s,
      behavior: n
    }) => {
      this.options.scrollToFn(o, { behavior: n, adjustments: s }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(i);
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
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, n = s ? s[0] : this.scrollState.lastTargetOffset, l = 1, a = n !== this.scrollState.lastTargetOffset;
    if (!a && sn(n, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= l) {
        this.scrollState = null;
        return;
      }
    } else
      this.scrollState.stableFrames = 0, a && (this.scrollState.lastTargetOffset = n, this.scrollState.behavior = "auto", this._scrollToOffset(n, {
        adjustments: void 0,
        behavior: "auto"
      }));
    this.scheduleScrollReconcile();
  }
}
const Pt = (t, i, o, s) => {
  for (; t <= i; ) {
    const n = (t + i) / 2 | 0, l = o(n);
    if (l < s)
      t = n + 1;
    else if (l > s)
      i = n - 1;
    else
      return n;
  }
  return t > 0 ? t - 1 : 0;
};
function fn({
  measurements: t,
  outerSize: i,
  scrollOffset: o,
  lanes: s
}) {
  const n = t.length - 1, l = (m) => t[m].start;
  if (t.length <= s)
    return {
      startIndex: 0,
      endIndex: n
    };
  let a = Pt(
    0,
    n,
    l,
    o
  ), d = a;
  if (s === 1)
    for (; d < n && t[d].end < o + i; )
      d++;
  else if (s > 1) {
    const m = Array(s).fill(0);
    for (; d < n && m.some((S) => S < o + i); ) {
      const S = t[d];
      m[S.lane] = S.end, d++;
    }
    const v = Array(s).fill(o + i);
    for (; a >= 0 && v.some((S) => S >= o); ) {
      const S = t[a];
      v[S.lane] = S.start, a--;
    }
    a = Math.max(0, a - a % s), d = Math.min(n, d + (s - 1 - d % s));
  }
  return { startIndex: a, endIndex: d };
}
const Mt = typeof document < "u" ? dt.useLayoutEffect : dt.useEffect;
function mn({
  useFlushSync: t = !0,
  ...i
}) {
  const o = dt.useReducer(() => ({}), {})[1], s = {
    ...i,
    onChange: (l, a) => {
      var d;
      t && a ? en(o) : o(), (d = i.onChange) == null || d.call(i, l, a);
    }
  }, [n] = dt.useState(
    () => new un(s)
  );
  return n.setOptions(s), Mt(() => n._didMount(), []), Mt(() => n._willUpdate()), n;
}
function vt(t) {
  return mn({
    observeElementRect: cn,
    observeElementOffset: hn,
    scrollToFn: gn,
    ...t
  });
}
const Ot = 864e5, le = (t, i) => new Date(t.getTime() + i * Ot), Me = (t, i) => Math.round((i.getTime() - t.getTime()) / Ot), Et = (t) => new Date(t.getFullYear(), t.getMonth(), 1), mt = (t) => new Date(t.getFullYear(), t.getMonth() + 1, 0), Nt = (t) => {
  if (!t) return "en-US";
  try {
    return new Intl.DateTimeFormat(t).resolvedOptions().locale;
  } catch {
    return "en-US";
  }
}, ie = (t, i = "en-US") => new Intl.DateTimeFormat(Nt(i), {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
}).format(t), Dt = (t, i = "en") => new Intl.DateTimeFormat(Nt(i), { month: "long" }).format(t).toUpperCase();
function yn() {
  const {
    props: t,
    t: i,
    displayRows: o,
    leftBodyRef: s,
    handleLeftScroll: n,
    toggleProject: l,
    toggleGroup: a,
    hoveredTaskId: d,
    setHoveredTaskId: m,
    selectedTaskId: v,
    setSelectedTaskId: S,
    delayedIds: E,
    criticalIds: k,
    relatedIds: C,
    setActivePinboardTask: N
  } = Oe(), B = (x) => ({
    id: x.id,
    name: x.name,
    start: x.start,
    end: x.end,
    type: x.originalType === "step" ? "task" : "milestone",
    progress: x.progress
  }), A = vt({
    count: o.length,
    getScrollElement: () => s.current,
    estimateSize: () => re,
    overscan: 12
  }), I = A.getVirtualItems(), h = Math.max(A.getTotalSize(), 400) + 80, M = se(
    () => o.filter((x) => x.kind === "task").map((x) => x.task.id),
    [o]
  ), f = Z((x, g) => {
    const w = M.indexOf(x);
    if (w < 0) return;
    const c = Math.min(Math.max(0, w + g), M.length - 1), R = M[c];
    R && S(R);
  }, [M, S]);
  return /* @__PURE__ */ p("div", { style: { width: on, flexShrink: 0, borderRight: `1px solid ${e.border}`, display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ p(
      "div",
      {
        style: {
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          height: nn,
          background: e.headerBg,
          borderBottom: `1px solid ${e.border}`
        },
        children: [
          /* @__PURE__ */ r("div", { style: { flex: 1, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: e.textSecondary }, children: i("charts.gantt.stepName", "STEP NAME") }),
          /* @__PURE__ */ r("div", { style: { width: 80, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", color: e.textSecondary }, children: i("charts.gantt.start", "START") }),
          /* @__PURE__ */ r("div", { style: { width: 80, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", color: e.textSecondary }, children: i("charts.gantt.end", "END") })
        ]
      }
    ),
    /* @__PURE__ */ r(
      "div",
      {
        ref: s,
        onScroll: n,
        className: "zg-no-scrollbar",
        style: { overflowY: "auto", overflowX: "hidden", flex: 1 },
        role: "grid",
        "aria-rowcount": o.length,
        children: /* @__PURE__ */ r("div", { style: { height: h, position: "relative" }, children: I.map((x) => {
          const g = o[x.index];
          if (!g) return null;
          const w = {
            position: "absolute",
            top: x.start,
            left: 0,
            width: "100%",
            height: re
          };
          if (g.kind === "projectHeader")
            return /* @__PURE__ */ r(
              "div",
              {
                style: {
                  ...w,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  borderBottom: `1.5px solid ${e.groupBorderWeak}`,
                  background: e.groupSoft
                },
                onClick: () => l(g.projectId),
                onKeyDown: (_) => {
                  (_.key === "Enter" || _.key === " ") && (_.preventDefault(), l(g.projectId));
                },
                role: "button",
                tabIndex: 0,
                "aria-label": `Toggle project ${g.projectTitle}`,
                "aria-expanded": !g.collapsed,
                children: /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  g.collapsed ? /* @__PURE__ */ r(St, { size: 15, style: { color: e.group, flexShrink: 0 } }) : /* @__PURE__ */ r(bt, { size: 15, style: { color: e.group, flexShrink: 0 } }),
                  /* @__PURE__ */ r("span", { style: {
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: e.group,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }, children: g.projectTitle })
                ] })
              },
              `ph-${g.projectId}`
            );
          if (g.kind === "group") {
            const _ = g.projectId ? `${g.projectId}-${g.groupType}` : g.groupType;
            return /* @__PURE__ */ r(
              "div",
              {
                style: {
                  ...w,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  borderBottom: `1px solid ${e.border}`,
                  background: e.headerBg
                },
                onClick: () => a(_),
                onKeyDown: (J) => {
                  (J.key === "Enter" || J.key === " ") && (J.preventDefault(), a(_));
                },
                role: "button",
                tabIndex: 0,
                "aria-label": `Toggle group ${g.label}`,
                "aria-expanded": !g.collapsed,
                children: /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  g.collapsed ? /* @__PURE__ */ r(St, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ r(bt, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }),
                  /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: e.textTitle }, children: i(`gantt.group.${g.groupType}`, g.label) }),
                  /* @__PURE__ */ r("span", { style: { fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 9999, background: e.groupSoftStrong, color: e.textSecondary }, children: g.count })
                ] })
              },
              `g-${_}`
            );
          }
          const c = g.task, R = v === c.id, W = d === c.id, H = c.originalType !== "step", y = E.has(c.id), q = k.has(c.id), te = v !== null && c.id !== v && !C.has(c.id), $ = v !== null && C.has(c.id), oe = y ? e.dangerBgSoft : R ? e.groupLight : $ ? e.groupLightStrong : W ? e.pageBg : e.surface;
          return /* @__PURE__ */ p(
            "div",
            {
              style: {
                ...w,
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                cursor: "pointer",
                transition: "opacity 0.18s, background 0.15s",
                borderBottom: `1px solid ${e.borderLight}`,
                background: oe,
                borderLeft: R ? `3px solid ${e.group}` : $ ? `3px solid ${e.groupGlow}` : q ? `3px solid ${e.today}` : void 0,
                opacity: te ? 0.3 : 1
              },
              onClick: () => S((_) => _ === c.id ? null : c.id),
              onDoubleClick: () => t.onTaskClick?.(B(c)),
              onMouseEnter: () => m(c.id),
              onMouseLeave: () => m(null),
              onKeyDown: (_) => {
                if (_.key === "Enter") {
                  _.preventDefault(), t.onTaskClick?.(B(c));
                  return;
                }
                if (_.key === " ") {
                  _.preventDefault(), S((J) => J === c.id ? null : c.id);
                  return;
                }
                if (_.key === "ArrowDown") {
                  _.preventDefault(), f(c.id, 1);
                  return;
                }
                _.key === "ArrowUp" && (_.preventDefault(), f(c.id, -1));
              },
              role: "button",
              tabIndex: 0,
              "aria-selected": R,
              "aria-label": `Task ${c.name}`,
              children: [
                /* @__PURE__ */ p("div", { style: { flex: 1, display: "flex", alignItems: "center", gap: 8, minWidth: 0, paddingRight: 8 }, children: [
                  c.originalType === "step" && /* @__PURE__ */ r("div", { style: { flexShrink: 0, borderRadius: 4, width: 14, height: 14, background: he[c.colorIdx ?? 0].bar, border: `1.5px solid ${he[c.colorIdx ?? 0].barBorder}` } }),
                  c.originalType === "milestone" && /* @__PURE__ */ r("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: e.milestoneRingSoft, border: `1.5px solid ${e.milestoneRing}` }, children: /* @__PURE__ */ r(Ke, { size: 11, style: { color: e.milestone } }) }),
                  c.originalType === "event" && /* @__PURE__ */ r("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: e.eventSoft, border: `1.5px solid ${e.eventBorderSoft}` }, children: /* @__PURE__ */ r(qe, { size: 11, style: { color: e.event } }) }),
                  /* @__PURE__ */ r("div", { style: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }, children: /* @__PURE__ */ r(
                    "span",
                    {
                      style: {
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.25,
                        color: R ? e.group : y ? e.today : e.textPrimary,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: c.name
                    }
                  ) }),
                  (c.attachedNotes?.length || 0) > 0 && /* @__PURE__ */ p(
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
                        color: e.noteBadgeText,
                        background: e.noteBadgeBg,
                        border: "none",
                        cursor: "pointer",
                        boxShadow: e.shadowSmall,
                        transition: "transform 0.12s ease"
                      },
                      onClick: (_) => {
                        _.stopPropagation(), N(c);
                      },
                      children: [
                        /* @__PURE__ */ r(ct, { size: 12 }),
                        c.attachedNotes?.length
                      ]
                    }
                  ),
                  y && /* @__PURE__ */ r(Ht, { size: 12, style: { flexShrink: 0, color: e.today } })
                ] }),
                /* @__PURE__ */ r("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: y ? e.today : e.textMuted }, children: ie(c.start, t.locale) }),
                /* @__PURE__ */ r("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: y ? e.today : e.textMuted }, children: H ? "—" : ie(c.end, t.locale) })
              ]
            },
            c.id
          );
        }) })
      }
    )
  ] });
}
function bn(t, i, o = "en", s) {
  const n = s ?? (i === "day" ? Ue : $t), l = (A, I) => {
    const h = [], M = (/* @__PURE__ */ new Date()).toDateString();
    let f = -1;
    for (let x = 0; x < I; x++) {
      const g = le(A, x), w = g.toDateString() === M;
      w && (f = x), h.push({
        date: g,
        isToday: w,
        isWeekend: g.getDay() === 0 || g.getDay() === 6
      });
    }
    return { daysArr: h, todayIndex: f };
  };
  if (t.length === 0) {
    const A = /* @__PURE__ */ new Date(), I = Et(A), h = mt(A), M = Me(I, h) + 1, { daysArr: f, todayIndex: x } = l(I, M);
    return {
      start: I,
      end: h,
      totalDays: M,
      dayWidth: n,
      totalWidth: M * n,
      months: [{ date: I, label: `${Dt(I, o)} ${I.getFullYear()}`, startDay: 0, days: M, width: M * n }],
      years: [{ label: I.getFullYear().toString(), width: M * n }],
      days: f,
      todayIndex: x
    };
  }
  let a = new Date(t[0].start), d = new Date(t[0].end);
  t.forEach((A) => {
    A.start < a && (a = new Date(A.start)), A.end > d && (d = new Date(A.end));
  });
  const m = Et(le(a, -14)), v = mt(le(d, 14)), S = Me(m, v) + 1, E = [];
  let k = new Date(m);
  for (; k <= v; ) {
    const A = mt(k), I = A > v ? v : A, h = Me(m, k), M = Me(k, I) + 1;
    E.push({
      date: new Date(k),
      label: `${Dt(k, o)} ${k.getFullYear()}`,
      startDay: h,
      days: M,
      width: M * n
    }), k = new Date(k.getFullYear(), k.getMonth() + 1, 1);
  }
  const { daysArr: C, todayIndex: N } = l(m, S), B = [];
  if (i === "month") {
    let A = "", I = 0;
    for (const h of E) {
      const M = h.date.getFullYear().toString();
      M !== A ? (A && B.push({ label: A, width: I * n }), A = M, I = h.days) : I += h.days;
    }
    A && B.push({ label: A, width: I * n });
  }
  return { start: m, end: v, totalDays: S, dayWidth: n, totalWidth: S * n, months: E, years: B, days: C, todayIndex: N };
}
function Se(t, i) {
  return Me(i.start, t) * i.dayWidth;
}
function xn({
  task: t,
  x: i,
  y: o,
  w: s,
  progW: n,
  isHov: l,
  isDrag: a,
  isResize: d,
  isCritical: m,
  isDelayed: v,
  isConnectTarget: S,
  showDots: E,
  isBarDimmed: k,
  isBarHighlighted: C,
  commonEvents: N,
  handleResizeMouseDown: B,
  handleResizeTouchStart: A,
  handleConnectDotMouseDown: I,
  handleConnectDotTouchStart: h
}) {
  const { timeline: M, viewMode: f, props: x } = Oe();
  if (t.originalType === "step") {
    const g = he[t.colorIdx ?? 0], w = o + (re - ce) / 2, c = !!(t.previsionStart && t.previsionEnd), R = c ? Se(t.previsionStart, M) : 0, W = c ? Math.max(Se(t.previsionEnd, M) - R, f === "month" ? M.dayWidth : 6) : 0, H = w + ce + 3;
    return /* @__PURE__ */ p(ve, { children: [
      c && /* @__PURE__ */ r(
        "div",
        {
          title: `Previsto: ${ie(t.previsionStart, x.locale)} → ${ie(t.previsionEnd, x.locale)}`,
          style: {
            position: "absolute",
            left: R,
            top: H,
            width: W,
            height: 5,
            borderRadius: 3,
            background: `${g.progress}33`,
            border: `1.5px solid ${g.progress}66`,
            boxShadow: `inset 0 0 0 1px ${g.progress}22`,
            pointerEvents: "none",
            zIndex: 5
          }
        }
      ),
      /* @__PURE__ */ p(
        "div",
        {
          "data-task-id": t.id,
          ...N,
          role: "button",
          tabIndex: 0,
          "aria-label": `Task bar ${t.name}`,
          style: {
            position: "absolute",
            left: i,
            top: w,
            width: s,
            height: ce,
            borderRadius: ce / 2,
            background: v ? e.delayedTaskBg : g.bar,
            border: m ? `2px solid ${e.today}` : v ? `1.5px solid ${e.todayStrong}` : `1.5px solid ${g.barBorder}`,
            cursor: a || d ? "grabbing" : "grab",
            zIndex: l || S ? 20 : 10,
            boxShadow: S ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.groupGlowSoft}` : m ? `0 0 0 1px ${e.todayMid}, 0 3px 12px ${e.todaySoft}` : C && !l ? `0 0 0 2px ${e.groupGlowStrong}, 0 3px 14px ${e.groupGlowSoft}` : l ? `0 3px 12px ${g.progress}22` : "none",
            transform: l ? "scaleY(1.06)" : "scaleY(1)",
            opacity: k ? 0.15 : 1,
            transition: a || d ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
            overflow: "visible"
          },
          children: [
            /* @__PURE__ */ p("div", { style: { position: "absolute", left: 0, top: 0, width: s, height: "100%", borderRadius: ce / 2, overflow: "hidden", pointerEvents: "none" }, children: [
              /* @__PURE__ */ r("div", { style: {
                position: "absolute",
                left: 0,
                top: 0,
                width: n,
                height: "100%",
                background: v ? `linear-gradient(90deg, ${e.today}, ${e.todayStrong})` : `linear-gradient(90deg, ${g.progress}, ${g.progress}cc)`,
                borderRadius: `${ce / 2}px 0 0 ${ce / 2}px`,
                transition: a || d ? "none" : "width 0.3s"
              } }),
              s > 50 && /* @__PURE__ */ p("span", { style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: t.progress > 50 ? e.white : v ? e.today : g.progress,
                zIndex: 1,
                pointerEvents: "none"
              }, children: [
                Math.round(t.progress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { onMouseDown: (y) => B(y, t, "left"), onTouchStart: (y) => A(y, t, "left"), style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${ce / 2}px 0 0 ${ce / 2}px` } }),
            /* @__PURE__ */ r("div", { onMouseDown: (y) => B(y, t, "right"), onTouchStart: (y) => A(y, t, "right"), style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${ce / 2}px ${ce / 2}px 0` } }),
            E && /* @__PURE__ */ p(ve, { children: [
              /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (y) => I(y, t, "left"), onTouchStart: (y) => h(y, t, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
              /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (y) => I(y, t, "right"), onTouchStart: (y) => h(y, t, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } })
            ] })
          ]
        }
      )
    ] });
  }
  if (t.originalType === "milestone") {
    const g = o + (re - $e) / 2;
    return /* @__PURE__ */ p(
      "div",
      {
        "data-task-id": t.id,
        ...N,
        role: "button",
        tabIndex: 0,
        "aria-label": `Milestone ${t.name}`,
        style: {
          position: "absolute",
          left: i - 6,
          top: g,
          height: $e,
          minWidth: xt,
          borderRadius: $e / 2,
          background: m ? e.criticalPillBg : e.milestonePillBg,
          border: S ? `2px solid ${e.group}` : m ? `2px solid ${e.today}` : `1.5px solid ${e.milestoneRing}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: a ? "grabbing" : "grab",
          zIndex: l || S ? 20 : 10,
          boxShadow: S ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.groupGlowSoft}` : m ? `0 0 0 1px ${e.todayMid}, 0 3px 12px ${e.todaySoft}` : C && !l ? `0 0 0 2px ${e.groupGlowStrong}, 0 3px 14px ${e.groupGlowSoft}` : l ? `0 3px 12px ${e.milestoneRingSoft}` : e.shadowSoft,
          opacity: k ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: l ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ r("div", { style: { width: 20, height: 20, borderRadius: "50%", background: m ? e.today : e.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(Ke, { size: 11, color: e.white, strokeWidth: 2.5 }) }),
          /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: 600, color: m ? e.today : e.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: t.name }),
          t.progress >= 100 && /* @__PURE__ */ r("span", { style: { fontSize: 9, fontWeight: 700, color: e.white, background: e.milestoneRing, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          E && /* @__PURE__ */ p(ve, { children: [
            /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (w) => I(w, t, "left"), onTouchStart: (w) => h(w, t, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (w) => I(w, t, "right"), onTouchStart: (w) => h(w, t, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (t.originalType === "event") {
    const g = o + (re - $e) / 2;
    return /* @__PURE__ */ p(
      "div",
      {
        "data-task-id": t.id,
        ...N,
        role: "button",
        tabIndex: 0,
        "aria-label": `Event ${t.name}`,
        style: {
          position: "absolute",
          left: i - 6,
          top: g,
          height: $e,
          minWidth: xt,
          borderRadius: $e / 2,
          background: m ? e.criticalPillBg : e.eventPillBg,
          border: S ? `2px solid ${e.group}` : m ? `2px solid ${e.today}` : `1.5px solid ${e.event}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: a ? "grabbing" : "grab",
          zIndex: l || S ? 20 : 10,
          boxShadow: S ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.groupGlowSoft}` : m ? `0 0 0 1px ${e.todayMid}, 0 3px 12px ${e.todaySoft}` : C && !l ? `0 0 0 2px ${e.groupGlowStrong}, 0 3px 14px ${e.groupGlowSoft}` : l ? `0 3px 12px ${e.eventBorderSoft}` : e.shadowSoft,
          opacity: k ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: l ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ r("div", { style: { width: 20, height: 20, borderRadius: "50%", background: m ? e.today : e.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(qe, { size: 11, color: e.white, strokeWidth: 2.5 }) }),
          /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: 600, color: m ? e.today : e.event, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: t.name }),
          t.progress >= 100 && /* @__PURE__ */ r("span", { style: { fontSize: 9, fontWeight: 700, color: e.white, background: e.event, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          E && /* @__PURE__ */ p(ve, { children: [
            /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (w) => I(w, t, "left"), onTouchStart: (w) => h(w, t, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (w) => I(w, t, "right"), onTouchStart: (w) => h(w, t, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (t.originalType === "note") {
    const w = o + 4, c = t.noteColor || e.noteDefaultBg, R = t.filesCount || 0;
    return /* @__PURE__ */ p(
      "div",
      {
        "data-task-id": t.id,
        ...N,
        role: "button",
        tabIndex: 0,
        "aria-label": `Note ${t.name}`,
        style: {
          position: "absolute",
          left: i,
          top: w,
          width: 148,
          minHeight: 72,
          background: c,
          borderRadius: 3,
          cursor: a ? "grabbing" : "grab",
          zIndex: l || S ? 20 : 10,
          boxShadow: S ? `0 0 0 2px ${e.group}, ${e.shadowStickyStrong}` : C && !l ? `0 0 0 2px ${e.groupGlowStrong}, ${e.shadowStickyHover}` : l ? e.shadowStickyHover : e.shadowSticky,
          opacity: k ? 0.2 : 1,
          transition: a ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: l ? "rotate(-1.5deg) scale(1.03) translateY(-2px)" : "rotate(0deg)",
          border: `1px solid ${e.groupSoftStrong}`,
          padding: "12px 10px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          userSelect: "none"
        },
        children: [
          /* @__PURE__ */ r("div", { style: {
            position: "absolute",
            top: -6,
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 11,
            background: e.stickyTape,
            borderRadius: 2,
            boxShadow: e.shadowTiny
          } }),
          /* @__PURE__ */ r("span", { style: {
            fontSize: 13,
            fontWeight: 700,
            color: e.inkStrong,
            lineHeight: "1.3",
            wordBreak: "break-word",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }, children: t.name }),
          t.projectTitle && /* @__PURE__ */ r("span", { style: {
            fontSize: 10,
            fontWeight: 400,
            color: e.inkSoft3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: t.projectTitle }),
          /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 2 }, children: [
            /* @__PURE__ */ r("span", { style: { fontSize: 9, fontWeight: 500, color: e.inkSoft4 }, children: ie(t.start, x.locale) }),
            R > 0 && /* @__PURE__ */ p("span", { style: {
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 9,
              color: e.inkSoft4
            }, children: [
              /* @__PURE__ */ r(ct, { size: 8 }),
              " ",
              R
            ] })
          ] }),
          E && /* @__PURE__ */ p(ve, { children: [
            /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (W) => I(W, t, "left"), onTouchStart: (W) => h(W, t, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (W) => I(W, t, "right"), onTouchStart: (W) => h(W, t, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  return null;
}
function vn({ arrows: t }) {
  const {
    arrows: i,
    hoveredTaskId: o,
    selectedTaskId: s,
    relatedIds: n
  } = Oe();
  return /* @__PURE__ */ r(ve, { children: (t || i).map((a, d) => {
    const m = o === a.predId || o === a.succId, v = !s || a.predId === s || a.succId === s || n.has(a.predId) || n.has(a.succId), S = s !== null && v, E = m ? e.arrowHover : S ? e.group : e.arrow;
    return /* @__PURE__ */ p("g", { style: { opacity: v ? S ? 1 : void 0 : 0.08, transition: "opacity 0.18s" }, children: [
      /* @__PURE__ */ r(
        "path",
        {
          d: a.path,
          fill: "none",
          stroke: E,
          strokeWidth: S ? 2.5 : m ? 2 : 1.5,
          style: { transition: "stroke 0.2s, stroke-width 0.2s" }
        }
      ),
      /* @__PURE__ */ r(
        "polygon",
        {
          points: `${a.headX},${a.headY} ${a.headX - 6},${a.headY - 4} ${a.headX - 6},${a.headY + 4}`,
          fill: E,
          style: { transition: "fill 0.2s" }
        }
      )
    ] }, d);
  }) });
}
const st = (t) => ({
  id: t.id,
  name: t.name,
  start: t.start,
  end: t.end,
  type: t.originalType === "step" ? "task" : t.originalType,
  progress: t.progress
}), Ve = (t, i) => {
  switch (t) {
    case "step":
      return /* @__PURE__ */ r("div", { style: { width: 12, height: 12, borderRadius: 2, background: he[i ?? 0].bar, border: `1.5px solid ${he[i ?? 0].barBorder}`, flexShrink: 0 } });
    case "milestone":
      return /* @__PURE__ */ r("div", { style: { width: 16, height: 16, borderRadius: "50%", background: e.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(Ke, { size: 8, color: e.white }) });
    case "event":
      return /* @__PURE__ */ r("div", { style: { width: 16, height: 16, borderRadius: "50%", background: e.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(qe, { size: 8, color: e.white }) });
    case "note":
      return /* @__PURE__ */ r("div", { style: { width: 12, height: 14, background: e.note, borderRadius: 2, boxShadow: e.shadowSmall, flexShrink: 0 } });
    default:
      return null;
  }
};
function Sn() {
  const {
    props: t,
    t: i,
    viewMode: o,
    isInfiniteCanvas: s,
    timeline: n,
    displayRows: l,
    dragState: a,
    resizeState: d,
    connectState: m,
    pendingConnection: v,
    setPendingConnection: S,
    depModalType: E,
    setDepModalType: k,
    depModalLag: C,
    setDepModalLag: N,
    depCreating: B,
    deletingDepId: A,
    setDeletingDepId: I,
    chartMenu: h,
    setChartMenu: M,
    rightBodyRef: f,
    timeHeaderRef: x,
    handleChartMouseDown: g,
    handleChartTouchStart: w,
    handleChartWheel: c,
    openChartMenu: R,
    handleRightScroll: W,
    hoveredTaskId: H,
    setHoveredTaskId: y,
    selectedTaskId: q,
    setSelectedTaskId: te,
    tooltip: $,
    setTooltip: oe,
    popupState: _,
    setPopupState: J,
    arrows: we,
    criticalIds: Re,
    delayedIds: ke,
    relatedIds: Ne,
    handleBarMouseDown: ht,
    handleBarTouchStart: pt,
    handleResizeMouseDown: je,
    handleResizeTouchStart: gt,
    handleConnectDotMouseDown: Ye,
    handleConnectDotTouchStart: Ze,
    handleCreateDependency: Xe
  } = Oe(), {
    onViewStage: Ce,
    onEditStage: _e,
    onDeleteStage: Je,
    onDeleteDependency: He,
    onAddNewStage: ut,
    onAddMilestone: Qe,
    onAddEvent: et,
    onAddNote: tt
  } = t, Y = (D, U) => Math.round((U.getTime() - D.getTime()) / 864e5) + 1, F = vt({
    count: l.length,
    getScrollElement: () => f.current,
    estimateSize: () => re,
    overscan: 12
  }), pe = F.getVirtualItems(), Ie = vt({
    horizontal: !0,
    count: n.days.length,
    getScrollElement: () => f.current,
    estimateSize: () => n.dayWidth,
    overscan: 10
  }).getVirtualItems(), ge = Math.max(F.getTotalSize(), 400) + 80, Ae = se(() => {
    const D = /* @__PURE__ */ new Set();
    for (const U of pe) {
      const X = l[U.index];
      X?.kind === "task" && D.add(X.task.id);
    }
    return D;
  }, [pe, l]), Fe = se(
    () => we.filter((D) => Ae.has(D.predId) || Ae.has(D.succId)),
    [we, Ae]
  ), Be = () => J({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  return /* @__PURE__ */ p("div", { style: { flex: 1, width: "100%", background: "var(--zg-surface-alt)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", borderLeft: t.hideSidebar ? "none" : `1px solid ${e.borderLight}` }, children: [
    /* @__PURE__ */ r(
      "div",
      {
        ref: x,
        style: {
          boxSizing: "border-box",
          height: Ge * 2,
          background: e.headerBg,
          borderBottom: `1px solid ${e.borderLight}`,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          boxShadow: e.shadowTiny
        },
        onWheel: c,
        children: /* @__PURE__ */ p("div", { style: { width: n.totalWidth, height: "100%", position: "relative" }, children: [
          /* @__PURE__ */ p("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: Ge, display: "flex" }, children: [
            o === "day" && n.months.map((D, U) => /* @__PURE__ */ r("div", { style: { width: D.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ r("span", { style: { fontSize: 13, fontWeight: 700, color: e.textTitle, letterSpacing: "0.02em" }, children: D.label }) }, U)),
            o === "month" && n.years?.map((D, U) => /* @__PURE__ */ r("div", { style: { width: D.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ r("span", { style: { fontSize: 13, fontWeight: 700, color: e.textTitle, letterSpacing: "0.02em" }, children: D.label }) }, U))
          ] }),
          /* @__PURE__ */ p("div", { style: { position: "absolute", top: Ge, left: 0, right: 0, height: Ge, display: "flex" }, children: [
            o === "day" && /* @__PURE__ */ r("div", { style: { width: n.totalWidth, height: "100%", position: "relative" }, children: Ie.map((D) => {
              const U = n.days[D.index];
              if (!U) return null;
              const X = U.isToday;
              return /* @__PURE__ */ r(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: D.start,
                    width: D.size,
                    height: "100%",
                    borderRight: `1px solid ${e.borderLight}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: X ? 800 : 500, color: X ? e.today : e.textSecondary, letterSpacing: "-0.03em" }, children: U.date.getDate().toString().padStart(2, "0") })
                },
                `day-${D.index}`
              );
            }) }),
            o === "month" && n.months.map((D, U) => /* @__PURE__ */ r("div", { style: { width: D.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: 600, color: e.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em" }, children: D.label.substring(0, 3) }) }, U))
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ r(
      "div",
      {
        ref: f,
        className: "zg-no-scrollbar",
        style: {
          flex: 1,
          overflow: "auto",
          background: "var(--zg-surface)",
          position: "relative",
          cursor: s ? "grab" : "default",
          transform: "translate3d(0,0,0)",
          willChange: "scroll-position"
        },
        onScroll: W,
        onMouseDown: g,
        onTouchStart: w,
        onWheel: c,
        onContextMenu: R,
        children: /* @__PURE__ */ p("div", { style: { width: n.totalWidth, height: ge, position: "relative" }, children: [
          /* @__PURE__ */ p("svg", { width: n.totalWidth, height: ge, style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" }, children: [
            /* @__PURE__ */ p("defs", { children: [
              /* @__PURE__ */ r("pattern", { id: "gantt-y-lines", x: "0", y: "0", width: n.dayWidth, height: re, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ r("line", { x1: n.dayWidth, y1: "0", x2: n.dayWidth, y2: re, stroke: e.border, strokeWidth: "1", strokeDasharray: "4 4", opacity: "0.4" }) }),
              /* @__PURE__ */ r("pattern", { id: "gantt-x-lines", x: "0", y: "0", width: n.dayWidth, height: re, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ r("line", { x1: "0", y1: re, x2: n.dayWidth, y2: re, stroke: e.borderLight, strokeWidth: "1" }) })
            ] }),
            /* @__PURE__ */ r("rect", { width: "100%", height: "100%", fill: "url(#gantt-x-lines)" }),
            /* @__PURE__ */ r("rect", { width: "100%", height: "100%", fill: "url(#gantt-y-lines)" }),
            o === "day" && Ie.map((D) => n.days[D.index]?.isWeekend ? /* @__PURE__ */ r("rect", { x: D.start, y: 0, width: D.size, height: ge, fill: e.weekendBg, opacity: 0.6 }, `we-${D.index}`) : null),
            o === "month" && Ie.map((D) => n.days[D.index]?.isWeekend ? /* @__PURE__ */ r("rect", { x: D.start, y: 0, width: D.size, height: ge, fill: e.weekendBg, opacity: 0.3 }, `wem-${D.index}`) : null),
            n.todayIndex >= 0 && /* @__PURE__ */ p("g", { children: [
              /* @__PURE__ */ r("rect", { x: n.todayIndex * n.dayWidth, y: 0, width: n.dayWidth, height: ge, fill: e.todayBg }),
              /* @__PURE__ */ r("line", { x1: (n.todayIndex + 0.5) * n.dayWidth, y1: 0, x2: (n.todayIndex + 0.5) * n.dayWidth, y2: ge, stroke: e.today, strokeWidth: 2, strokeDasharray: "4 4", opacity: 0.3 })
            ] })
          ] }),
          pe.map((D) => {
            const U = l[D.index];
            return U && (U.kind === "group" || U.kind === "projectHeader") ? /* @__PURE__ */ r("div", { style: {
              boxSizing: "border-box",
              position: "absolute",
              left: 0,
              top: D.start,
              width: "100%",
              height: re,
              background: U.kind === "projectHeader" ? e.headerBg : e.groupLightSoft,
              borderBottom: `1px solid ${e.borderLight}`,
              pointerEvents: "none"
            } }, `bg-${D.index}`) : null;
          }),
          /* @__PURE__ */ p("div", { style: { position: "absolute", inset: 0 }, children: [
            pe.map((D) => {
              const U = l[D.index];
              if (!U || U.kind !== "task") return null;
              const X = U.task, de = a?.task.id === X.id, ze = d?.task.id === X.id, Le = de || ze && d.edge === "left" ? le(X.start, de ? a.offsetDays : d.offsetDays) : X.start, Q = de || ze && d.edge === "right" ? le(X.end, de ? a.offsetDays : d.offsetDays) : X.end, Te = X.originalType !== "step", me = Se(Le, n);
              let ee = 0, ye = 0;
              Te || (ee = Math.max(Se(Q, n) - me, n.dayWidth), ye = ee * (X.progress / 100));
              const be = H === X.id, We = q === X.id, nt = ke.has(X.id), ot = Re.has(X.id), rt = !!q && !We && !Ne.has(X.id), it = We || !!q && Ne.has(X.id), ft = m?.hoverTargetId === X.id, u = be || We, b = D.start;
              return /* @__PURE__ */ r(
                xn,
                {
                  task: X,
                  x: me,
                  y: b,
                  w: ee,
                  progW: ye,
                  isHov: be,
                  isDrag: de,
                  isResize: ze,
                  isCritical: ot,
                  isDelayed: nt,
                  isConnectTarget: ft,
                  showDots: u,
                  isBarDimmed: rt,
                  isBarHighlighted: it,
                  commonEvents: {
                    onMouseEnter: (T) => {
                      y(X.id), !a && !d && oe({ task: X, x: T.clientX, y: T.clientY });
                    },
                    onMouseMove: (T) => {
                      H === X.id && !a && !d && oe({ task: X, x: T.clientX, y: T.clientY });
                    },
                    onMouseLeave: () => {
                      y(null), oe(null);
                    },
                    onClick: (T) => {
                      T.stopPropagation(), te(X.id), T.detail === 2 && Ce?.(st(X)), J(!_.isOpen || _.task?.id !== X.id ? {
                        isOpen: !0,
                        position: { x: T.clientX, y: T.clientY },
                        task: X
                      } : { isOpen: !1, position: { x: 0, y: 0 }, task: null });
                    },
                    onMouseDown: (T) => ht(T, X),
                    onTouchStart: (T) => pt(T, X),
                    onKeyDown: (T) => {
                      if (T.key === "Enter") {
                        T.preventDefault(), Ce?.(st(X));
                        return;
                      }
                      T.key === " " && (T.preventDefault(), te(X.id));
                    }
                  },
                  handleResizeMouseDown: je,
                  handleResizeTouchStart: gt,
                  handleConnectDotMouseDown: Ye,
                  handleConnectDotTouchStart: Ze
                },
                X.id
              );
            }),
            /* @__PURE__ */ r("svg", { width: n.totalWidth, height: ge, style: { position: "absolute", inset: 0, pointerEvents: "none" }, children: /* @__PURE__ */ r(vn, { arrows: Fe }) }),
            $ && !a && /* @__PURE__ */ r("div", { style: { position: "fixed", left: $.x + 16, top: $.y - 10, zIndex: 9999, pointerEvents: "none" }, children: /* @__PURE__ */ p(
              "div",
              {
                style: {
                  borderRadius: 12,
                  padding: "12px 16px",
                  minWidth: 220,
                  maxWidth: 340,
                  background: e.surfaceFrost,
                  border: `1px solid ${e.borderLight}`,
                  boxShadow: "var(--zg-shadow-popover)"
                },
                children: [
                  /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }, children: [
                    Ve($.task.originalType, $.task.colorIdx),
                    /* @__PURE__ */ r("span", { style: { fontSize: 12, fontWeight: 700, color: e.textTitle, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: $.task.name })
                  ] }),
                  /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 4, fontSize: 11, color: e.textSecondary }, children: $.task.originalType === "step" ? /* @__PURE__ */ p(ve, { children: [
                    $.task.previsionStart && $.task.previsionEnd && /* @__PURE__ */ p("div", { style: { background: `${e.headerBg}`, borderRadius: 6, padding: "4px 6px", marginBottom: 2 }, children: [
                      /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }, children: [
                        /* @__PURE__ */ r("div", { style: { width: 20, height: 4, borderRadius: 2, background: e.textSecondarySoft, border: `1.5px solid ${e.textSecondaryMid}` } }),
                        /* @__PURE__ */ r("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: e.textSecondary }, children: i("gantt.tooltip.planned", "Planned") })
                      ] }),
                      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ p("span", { children: [
                          i("gantt.tooltip.start", "Start"),
                          ":"
                        ] }),
                        /* @__PURE__ */ r("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: ie($.task.previsionStart, t.locale) })
                      ] }),
                      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ p("span", { children: [
                          i("gantt.tooltip.end", "End"),
                          ":"
                        ] }),
                        /* @__PURE__ */ r("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: ie($.task.previsionEnd, t.locale) })
                      ] }),
                      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ p("span", { children: [
                          i("gantt.tooltip.duration", "Duration"),
                          ":"
                        ] }),
                        /* @__PURE__ */ p("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: [
                          Y($.task.previsionStart, $.task.previsionEnd),
                          "d"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ p("div", { style: { background: $.task.hasActualDates ? e.groupLightSoft : "transparent", borderRadius: 6, padding: "4px 6px" }, children: [
                      /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }, children: [
                        /* @__PURE__ */ r("div", { style: { width: 20, height: 4, borderRadius: 2, background: he[$.task.colorIdx ?? 0].progress } }),
                        /* @__PURE__ */ r("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: $.task.hasActualDates ? e.group : e.textSecondary }, children: $.task.hasActualDates ? i("gantt.tooltip.actual", "Actual") : i("gantt.tooltip.plannedInUse", "Planned (in use)") })
                      ] }),
                      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ p("span", { children: [
                          i("gantt.tooltip.start", "Start"),
                          ":"
                        ] }),
                        /* @__PURE__ */ r("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: ie($.task.start, t.locale) })
                      ] }),
                      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ p("span", { children: [
                          i("gantt.tooltip.end", "End"),
                          ":"
                        ] }),
                        /* @__PURE__ */ r("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: ie($.task.end, t.locale) })
                      ] }),
                      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ p("span", { children: [
                          i("gantt.tooltip.duration", "Duration"),
                          ":"
                        ] }),
                        /* @__PURE__ */ p("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: [
                          Y($.task.start, $.task.end),
                          "d"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16, paddingTop: 4, marginTop: 4, borderTop: `1px solid ${e.borderLight}` }, children: [
                      /* @__PURE__ */ p("span", { children: [
                        i("charts.gantt.progress", "Progress"),
                        ":"
                      ] }),
                      /* @__PURE__ */ p("span", { style: { fontWeight: 700, color: e.group }, children: [
                        Math.round($.task.progress),
                        "%"
                      ] })
                    ] })
                  ] }) : $.task.originalType === "note" ? /* @__PURE__ */ p(ve, { children: [
                    $.task.noteProjectTitle && /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }, children: [
                      /* @__PURE__ */ r("div", { style: { width: 8, height: 8, borderRadius: 2, background: $.task.noteColor || e.note, flexShrink: 0 } }),
                      /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: 600, color: e.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: $.task.noteProjectTitle })
                    ] }),
                    /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                      /* @__PURE__ */ p("span", { children: [
                        i("gantt.tooltip.date", "Date"),
                        ":"
                      ] }),
                      /* @__PURE__ */ r("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: ie($.task.start, t.locale) })
                    ] }),
                    ($.task.filesCount || 0) > 0 && /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                      /* @__PURE__ */ p("span", { children: [
                        i("gantt.tooltip.attachments", "Attachments"),
                        ":"
                      ] }),
                      /* @__PURE__ */ p("span", { style: { fontWeight: 600, display: "flex", alignItems: "center", gap: 4, color: e.textPrimary }, children: [
                        /* @__PURE__ */ r(ct, { size: 10 }),
                        $.task.filesCount
                      ] })
                    ] })
                  ] }) : /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                    /* @__PURE__ */ p("span", { children: [
                      i("charts.gantt.start", "Start"),
                      ":"
                    ] }),
                    /* @__PURE__ */ r("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: ie($.task.start, t.locale) })
                  ] }) })
                ]
              }
            ) })
          ] })
        ] })
      }
    ),
    _.task && _.isOpen && (() => {
      const D = _.task, U = (t.dependencies || []).filter((Q) => Q.predecessorId === D.id || Q.successorId === D.id), X = { FS: i("gantt.depType.fs", "Finish to Start"), SS: i("gantt.depType.ss", "Start to Start"), FF: i("gantt.depType.ff", "Finish to Finish"), SF: i("gantt.depType.sf", "Start to Finish") }, de = U.length > 0 ? 300 : 220, ze = Math.min(_.position.x, window.innerWidth - de - 16), Le = _.position.y + 8;
      return /* @__PURE__ */ p(
        "div",
        {
          "data-popup": "gantt-action",
          style: { position: "fixed", left: ze, top: Le, zIndex: 9999, background: "var(--zg-surface)", borderRadius: 4, boxShadow: "var(--zg-shadow-popover)", border: `1.5px solid ${e.borderLight}`, width: de, overflow: "hidden" },
          onMouseDown: (Q) => Q.stopPropagation(),
          children: [
            /* @__PURE__ */ r("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${e.borderLight}` }, children: /* @__PURE__ */ r("p", { style: { fontSize: 13, fontWeight: 700, color: e.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: D.name, children: D.name }) }),
            /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" }, children: [
              /* @__PURE__ */ p("button", { onClick: () => {
                Ce?.(st(D)), Be();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ r(Vt, { size: 15 }),
                " ",
                /* @__PURE__ */ r("span", { style: { flex: 1, textAlign: "left" }, children: i("gantt.popup.viewDetails", "View details") })
              ] }),
              /* @__PURE__ */ p("button", { onClick: () => {
                _e?.(st(D)), Be();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ r(Gt, { size: 15 }),
                " ",
                /* @__PURE__ */ r("span", { style: { flex: 1, textAlign: "left" }, children: i("gantt.popup.edit", "Edit") })
              ] }),
              /* @__PURE__ */ p("button", { onClick: () => {
                Je?.(D.id), Be();
              }, className: "zg-popup-btn zg-popup-btn-danger", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.dangerText, textAlign: "left" }, children: [
                /* @__PURE__ */ r(Ut, { size: 15 }),
                " ",
                /* @__PURE__ */ r("span", { style: { flex: 1, textAlign: "left" }, children: i("gantt.popup.delete", "Delete") })
              ] })
            ] }),
            U.length > 0 && /* @__PURE__ */ p("div", { style: { borderTop: `1px solid ${e.borderLight}`, padding: "10px 14px 12px" }, children: [
              /* @__PURE__ */ p("div", { style: { fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }, children: [
                i("gantt.popup.relations", "Relations"),
                " (",
                U.length,
                ")"
              ] }),
              /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: U.map((Q) => {
                const Te = Q.predecessorId === D.id, me = Te ? Q.successorName : Q.predecessorName, ee = A === Q.id;
                return /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderRadius: 8, background: "var(--zg-surface-alt)", border: `1px solid ${e.borderLight}` }, children: [
                  /* @__PURE__ */ p("div", { style: { flex: 1, minWidth: 0 }, children: [
                    /* @__PURE__ */ p("div", { style: { fontSize: 10, fontWeight: 700, color: e.group, marginBottom: 2 }, children: [
                      /* @__PURE__ */ r("span", { style: { background: e.groupSoftStrong, borderRadius: 4, padding: "1px 5px" }, children: Q.type }),
                      " ",
                      /* @__PURE__ */ r("span", { style: { color: e.textSecondary, fontWeight: 500 }, children: Te ? "→ " : "← " }),
                      /* @__PURE__ */ r("span", { style: { color: e.textMuted, fontWeight: 400, fontSize: 9 }, children: X[Q.type] ?? Q.type })
                    ] }),
                    /* @__PURE__ */ r("div", { style: { fontSize: 11, color: e.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: me, children: me })
                  ] }),
                  He && /* @__PURE__ */ r(
                    "button",
                    {
                      disabled: !!ee,
                      onClick: async () => {
                        I(Q.id);
                        try {
                          await He(Q.id);
                        } finally {
                          I(null);
                        }
                      },
                      style: { flexShrink: 0, padding: "4px 6px", borderRadius: 6, border: "none", background: ee ? e.dangerBgSoft : "transparent", cursor: ee ? "wait" : "pointer", color: e.dangerText, fontSize: 14, opacity: ee ? 0.5 : 1, transition: "background 0.12s" },
                      children: ee ? "⟳" : "🗑"
                    }
                  )
                ] }, Q.id);
              }) })
            ] })
          ]
        }
      );
    })(),
    h && /* @__PURE__ */ p(
      "div",
      {
        "data-menu": "chart-create",
        style: {
          position: "fixed",
          left: Math.min(h.x, window.innerWidth - 220),
          top: Math.min(h.y, window.innerHeight - 220),
          zIndex: 99999,
          background: "var(--zg-surface)",
          borderRadius: 10,
          boxShadow: "var(--zg-shadow-popover)",
          border: `1.5px solid ${e.borderLight}`,
          width: 200,
          overflow: "hidden"
        },
        onClick: (D) => D.stopPropagation(),
        children: [
          /* @__PURE__ */ r("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${e.borderLight}`, background: e.headerBg }, children: /* @__PURE__ */ p("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" }, children: [
            i("gantt.chart.addOn", "Add on"),
            " ",
            ie(h.date, t.locale)
          ] }) }),
          /* @__PURE__ */ r("div", { style: { padding: "5px 5px" }, children: [
            { label: i("gantt.newAction.step", "Step"), icon: Ve("step", 0), action: () => {
              ut?.(h.date, h.projectId), M(null);
            } },
            { label: i("gantt.newAction.milestone", "Milestone"), icon: Ve("milestone"), action: () => {
              Qe?.(h.date, h.projectId), M(null);
            } },
            { label: i("gantt.newAction.event", "Event"), icon: Ve("event"), action: () => {
              et?.(h.date, h.projectId), M(null);
            } },
            { label: i("gantt.newAction.note", "Note"), icon: Ve("note"), action: () => {
              tt?.(h.date, h.projectId), M(null);
            } }
          ].map((D) => /* @__PURE__ */ p(
            "button",
            {
              onClick: D.action,
              className: "zg-popup-btn",
              style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.textPrimary, textAlign: "left", transition: "background 0.12s" },
              children: [
                D.icon,
                " ",
                D.label
              ]
            },
            D.label
          )) })
        ]
      }
    ),
    m && /* @__PURE__ */ p("svg", { style: { position: "fixed", inset: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 99999 }, children: [
      /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ r("path", { d: "M0,0 L0,6 L6,3 z", fill: e.group }) }) }),
      /* @__PURE__ */ r("line", { x1: m.fromScreenX, y1: m.fromScreenY, x2: m.currentScreenX, y2: m.currentScreenY, stroke: e.group, strokeWidth: 2.5, strokeDasharray: "8 5", markerEnd: "url(#connect-arrow)", opacity: 0.85, style: { animation: "zg-dash 0.5s linear infinite" } })
    ] }),
    v && /* @__PURE__ */ r("div", { style: { position: "fixed", inset: 0, background: e.overlayMedium, backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99998 }, onClick: () => S(null), children: /* @__PURE__ */ p("div", { style: { background: "var(--zg-surface)", borderRadius: 20, padding: "32px 36px", width: 420, boxShadow: "var(--zg-shadow-popover)" }, onClick: (D) => D.stopPropagation(), children: [
      /* @__PURE__ */ p("div", { style: { marginBottom: 20 }, children: [
        /* @__PURE__ */ r("h3", { style: { fontSize: 18, fontWeight: 700, color: e.textTitle, marginBottom: 4 }, children: i("gantt.depModal.title", "Relation Type") }),
        /* @__PURE__ */ r("p", { style: { fontSize: 13, color: e.textSecondary }, children: i("gantt.depModal.subtitle", "Choose how the two tasks relate") })
      ] }),
      /* @__PURE__ */ r("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }, children: [
        { type: "FS", label: i("gantt.depModal.fs", "Finish to Start"), desc: i("gantt.depModal.fsDesc", "B starts when A finishes") },
        { type: "SS", label: i("gantt.depModal.ss", "Start to Start"), desc: i("gantt.depModal.ssDesc", "A and B start together") },
        { type: "FF", label: i("gantt.depModal.ff", "Finish to Finish"), desc: i("gantt.depModal.ffDesc", "A and B finish together") },
        { type: "SF", label: i("gantt.depModal.sf", "Start to Finish"), desc: i("gantt.depModal.sfDesc", "B finishes when A starts") }
      ].map((D) => /* @__PURE__ */ p("button", { onClick: () => k(D.type), style: { border: E === D.type ? `2px solid ${e.group}` : `1.5px solid ${e.borderLight}`, borderRadius: 12, padding: "12px 14px", textAlign: "left", cursor: "pointer", background: E === D.type ? e.groupSoft : "var(--zg-surface-alt)" }, children: [
        /* @__PURE__ */ r("div", { style: { fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: e.group, marginBottom: 4, background: E === D.type ? e.groupSoftStrong : e.groupSoft, borderRadius: 6, padding: "2px 6px", display: "inline-block" }, children: D.type }),
        /* @__PURE__ */ r("div", { style: { fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 2 }, children: D.label }),
        /* @__PURE__ */ r("div", { style: { fontSize: 11, color: e.textSecondary }, children: D.desc })
      ] }, D.type)) }),
      /* @__PURE__ */ p("div", { style: { marginBottom: 24 }, children: [
        /* @__PURE__ */ r("label", { style: { display: "block", fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 6 }, children: i("gantt.depModal.lagLabel", "Lag (days)") }),
        /* @__PURE__ */ r("input", { type: "number", value: C, onChange: (D) => N(parseInt(D.target.value) || 0), style: { width: "100%", padding: "10px 12px", border: `1.5px solid ${e.borderLight}`, borderRadius: 8, fontSize: 14 } })
      ] }),
      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12 }, children: [
        /* @__PURE__ */ r("button", { onClick: () => S(null), style: { padding: "10px 16px", borderRadius: 8, border: `1px solid ${e.borderLight}`, background: "var(--zg-surface)", cursor: "pointer", fontWeight: 600 }, children: i("gantt.depModal.cancel", "Cancel") }),
        /* @__PURE__ */ r("button", { onClick: Xe, disabled: B, style: { padding: "10px 16px", borderRadius: 8, border: "none", background: e.group, color: e.white, cursor: B ? "wait" : "pointer", fontWeight: 600 }, children: B ? i("gantt.depModal.saving", "Saving...") : i("gantt.depModal.create", "Create Dependency") })
      ] })
    ] }) })
  ] });
}
function wn(t) {
  const i = fe(null), o = fe(null), s = fe(null), n = fe(!1), l = Z(() => {
    if (n.current) return;
    n.current = !0;
    const v = o.current;
    v && i.current && (i.current.scrollTop = v.scrollTop), v && s.current && (s.current.scrollLeft = v.scrollLeft), n.current = !1;
  }, []), a = Z(() => {
    n.current || (n.current = !0, i.current && o.current && (o.current.scrollTop = i.current.scrollTop), n.current = !1);
  }, []), d = fe(!1);
  ae(() => {
    if (d.current || !t.totalWidth) return;
    const v = o.current;
    if (!v) return;
    const S = Se(/* @__PURE__ */ new Date(), t);
    if (S >= 0 && S <= t.totalWidth) {
      const E = S - v.clientWidth / 2;
      v.scrollLeft = Math.max(0, E), s.current && (s.current.scrollLeft = v.scrollLeft), d.current = !0;
    }
  }, [t]);
  const m = Z((v) => {
    const S = o.current;
    if (S)
      if (v.preventDefault(), v.shiftKey || Math.abs(v.deltaX) > Math.abs(v.deltaY)) {
        const E = v.shiftKey ? v.deltaY : v.deltaX;
        S.scrollLeft += E, s.current && (s.current.scrollLeft = S.scrollLeft);
      } else
        S.scrollTop += v.deltaY, i.current && (i.current.scrollTop = S.scrollTop);
  }, []);
  return {
    leftBodyRef: i,
    rightBodyRef: o,
    timeHeaderRef: s,
    handleRightScroll: l,
    handleLeftScroll: a,
    handleChartWheel: m
  };
}
function kn(t, i, o, s) {
  const n = /* @__PURE__ */ new Map();
  return t.forEach((l) => n.set(l.id, l)), i.map((l) => {
    const a = n.get(l.predecessorId), d = n.get(l.successorId);
    if (!a || !d) return null;
    const m = s.get(a.id), v = s.get(d.id);
    if (m == null || v == null) return null;
    const S = a.originalType !== "step", E = d.originalType !== "step", k = S ? Se(a.start, o) + xt : Se(a.end, o), C = m * re + re / 2, N = E ? Se(d.start, o) - 10 : Se(d.start, o), B = v * re + re / 2, A = 14, I = Math.max(k + A, N - A), h = C === B ? `M${k},${C} L${N - 6},${B}` : `M${k},${C} L${I},${C} L${I},${B} L${N - 6},${B}`;
    return { predId: a.id, succId: d.id, path: h, headX: N - 6, headY: B };
  }).filter(Boolean);
}
function In(t, i, o) {
  if (i === o) return !0;
  const s = /* @__PURE__ */ new Map();
  for (const d of t) {
    const m = s.get(d.predecessorId) || [];
    m.push(d.successorId), s.set(d.predecessorId, m);
  }
  const n = s.get(i) || [];
  n.push(o), s.set(i, n);
  const l = [o], a = /* @__PURE__ */ new Set();
  for (; l.length > 0; ) {
    const d = l.pop();
    if (d === i) return !0;
    if (a.has(d)) continue;
    a.add(d);
    const m = s.get(d) || [];
    for (const v of m)
      a.has(v) || l.push(v);
  }
  return !1;
}
function zn(t, i) {
  if (t.length === 0 || i.length === 0) return /* @__PURE__ */ new Set();
  const o = /* @__PURE__ */ new Map();
  t.forEach((h) => o.set(h.id, h));
  const s = new Set(t.map((h) => h.id)), n = i.filter((h) => s.has(h.predecessorId) && s.has(h.successorId));
  if (n.length === 0) return /* @__PURE__ */ new Set();
  const l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  n.forEach((h) => {
    l.has(h.predecessorId) || l.set(h.predecessorId, []), l.get(h.predecessorId).push(h.successorId), a.has(h.successorId) || a.set(h.successorId, []), a.get(h.successorId).push(h.predecessorId);
  });
  const d = (h) => Math.max(1, Me(h.start, h.end)), m = /* @__PURE__ */ new Set(), v = [];
  function S(h) {
    m.has(h) || (m.add(h), (l.get(h) || []).forEach(S), v.unshift(h));
  }
  t.forEach((h) => S(h.id));
  const E = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  for (const h of v) {
    const M = o.get(h), f = a.get(h) || [];
    let x = 0;
    for (const w of f) x = Math.max(x, k.get(w) || 0);
    const g = f.length > 0 ? x : 0;
    E.set(h, g), k.set(h, g + d(M));
  }
  let C = 0;
  k.forEach((h) => {
    h > C && (C = h);
  });
  const N = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map();
  for (let h = v.length - 1; h >= 0; h--) {
    const M = v[h], f = o.get(M), x = l.get(M) || [];
    let g = C;
    for (const w of x) g = Math.min(g, N.get(w) ?? C);
    B.set(M, x.length > 0 ? g : C), N.set(M, (B.get(M) || 0) - d(f));
  }
  const A = /* @__PURE__ */ new Set();
  n.forEach((h) => {
    A.add(h.predecessorId), A.add(h.successorId);
  });
  const I = /* @__PURE__ */ new Set();
  for (const h of v) {
    if (!A.has(h)) continue;
    const M = (N.get(h) || 0) - (E.get(h) || 0);
    Math.abs(M) < 0.5 && I.add(h);
  }
  return I;
}
function Tn({
  steps: t,
  milestones: i,
  events: o,
  notes: s,
  dependencies: n,
  viewMode: l,
  dayWidth: a,
  locale: d,
  groupByProject: m,
  visibleTypes: v,
  collapsedGroups: S,
  collapsedProjects: E,
  selectedTaskId: k
}) {
  const C = se(() => {
    const x = [], g = /* @__PURE__ */ new Map();
    s?.forEach((c) => {
      let R = c.targetId || c.predecessorId;
      if (!R && n) {
        const H = n.find((y) => y.successorId === c.id);
        H && (R = H.predecessorId);
      }
      if (!R) return;
      const W = g.get(R) || [];
      g.set(R, [...W, c]);
    });
    let w = 0;
    return t.forEach((c) => {
      const R = !!(c.startDate && c.finishDate), W = c.startDate || c.previsionStartDate, H = c.finishDate || c.previsionFinishDate;
      if (!W || !H) return;
      const y = new Date(W), q = new Date(H);
      if (isNaN(y.getTime()) || isNaN(q.getTime())) return;
      q <= y && q.setDate(q.getDate() + 1);
      let te, $;
      if (c.previsionStartDate && c.previsionFinishDate) {
        const J = new Date(c.previsionStartDate), we = new Date(c.previsionFinishDate);
        !isNaN(J.getTime()) && !isNaN(we.getTime()) && (te = J, $ = we <= J ? le(J, 1) : we);
      }
      const oe = n?.filter((J) => J.successorId === c.id).map((J) => J.predecessorId) || [], _ = c.conclusionPercent != null ? Number(c.conclusionPercent) : 0;
      x.push({
        id: c.id,
        name: c.name,
        start: y,
        end: q,
        progress: _ > 1 ? Math.min(_, 100) : _ * 100,
        originalType: "step",
        deps: oe,
        colorIdx: w % he.length,
        previsionStart: te,
        previsionEnd: $,
        hasActualDates: R,
        projectId: c.projectId || void 0,
        projectTitle: c.projectTitle || void 0,
        attachedNotes: g.get(c.id)
      }), w++;
    }), i?.forEach((c) => {
      if (!c.date) return;
      const R = new Date(c.date);
      if (isNaN(R.getTime())) return;
      const W = n?.filter((H) => H.successorId === c.id).map((H) => H.predecessorId) || [];
      x.push({
        id: c.id,
        name: c.name,
        start: R,
        end: R,
        progress: c.finished ? 100 : 0,
        originalType: "milestone",
        deps: W,
        projectId: c.projectId || void 0,
        projectTitle: c.projectTitle || void 0,
        attachedNotes: g.get(c.id)
      });
    }), o?.forEach((c) => {
      if (!c.date) return;
      const R = new Date(c.date);
      if (isNaN(R.getTime())) return;
      const W = n?.filter((H) => H.successorId === c.id).map((H) => H.predecessorId) || [];
      x.push({
        id: c.id,
        name: c.title,
        start: R,
        end: R,
        progress: c.finished ? 100 : 0,
        originalType: "event",
        deps: W,
        projectId: c.projectId || void 0,
        projectTitle: c.projectTitle || void 0,
        attachedNotes: g.get(c.id)
      });
    }), x;
  }, [t, i, o, s, n]), N = se(() => bn(C, l, d, a), [C, l, d, a]), B = se(() => {
    const x = [], g = ["step", "milestone", "event"];
    if (m) {
      const w = /* @__PURE__ */ new Map();
      C.forEach((c) => {
        c.projectId && !w.has(c.projectId) && w.set(c.projectId, c.projectTitle || c.projectId);
      });
      for (const [c, R] of Array.from(w.entries())) {
        const W = E.has(c);
        if (x.push({ kind: "projectHeader", projectId: c, projectTitle: R, collapsed: W }), !W) {
          const H = C.filter((y) => y.projectId === c);
          for (const y of g) {
            if (!v.has(y)) continue;
            const q = H.filter((oe) => oe.originalType === y);
            if (q.length === 0) continue;
            const te = `${c}-${y}`, $ = S.has(te);
            x.push({ kind: "group", groupType: y, label: wt[y], count: q.length, collapsed: $, projectId: c }), $ || q.forEach((oe) => x.push({ kind: "task", task: oe }));
          }
        }
      }
    } else
      for (const w of g) {
        if (!v.has(w)) continue;
        const c = C.filter((W) => W.originalType === w);
        if (c.length === 0) continue;
        const R = S.has(w);
        x.push({ kind: "group", groupType: w, label: wt[w], count: c.length, collapsed: R }), R || c.forEach((W) => x.push({ kind: "task", task: W }));
      }
    return x;
  }, [C, v, S, E, m]), A = se(() => {
    const x = /* @__PURE__ */ new Map();
    return B.forEach((g, w) => {
      g.kind === "task" && x.set(g.task.id, w);
    }), x;
  }, [B]), I = se(
    () => kn(C, n || [], N, A),
    [C, n, N, A]
  ), h = se(() => zn(C, n || []), [C, n]), M = se(() => {
    const x = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Date();
    return C.forEach((w) => {
      w.originalType === "step" && w.end < g && w.progress < 100 && x.add(w.id);
    }), x;
  }, [C]), f = se(() => {
    if (!k || !n?.length) return /* @__PURE__ */ new Set();
    const x = /* @__PURE__ */ new Set(), g = [k];
    for (; g.length; ) {
      const w = g.shift();
      for (const c of n)
        c.predecessorId === w && !x.has(c.successorId) && (x.add(c.successorId), g.push(c.successorId)), c.successorId === w && !x.has(c.predecessorId) && (x.add(c.predecessorId), g.push(c.predecessorId));
    }
    return x;
  }, [k, n]);
  return {
    tasks: C,
    timeline: N,
    displayRows: B,
    taskRowIndex: A,
    arrows: I,
    criticalIds: h,
    delayedIds: M,
    relatedIds: f
  };
}
const at = 260, lt = 170, ue = 20;
function Mn() {
  const { props: t, activePinboardTask: i, setActivePinboardTask: o, t: s } = Oe(), n = !!i, l = fe(null), [a, d] = G({}), [m, v] = G(null), S = () => o(null), E = i?.id || null, k = i?.attachedNotes || [], C = se(() => E ? a[E] || {} : {}, [E, a]), N = Z((I, h) => {
    d((M) => {
      const f = M[I] || {};
      if (Object.keys(f).length >= h) return M;
      const x = { ...f };
      return { ...M, [I]: x };
    });
  }, []), B = Z(() => {
    if (!i) return;
    const { id: I } = i, h = {};
    k.forEach((M, f) => {
      const x = f % 4, g = Math.floor(f / 4), w = ue + x * (at + 18), c = ue + g * (lt + 18), R = (f % 5 - 2) * 0.8;
      h[M.id] = { x: w, y: c, z: f + 1, rotate: R };
    }), d((M) => ({ ...M, [I]: h }));
  }, [i, k]);
  ae(() => {
    i && (N(i.id, k.length), (!a[i.id] || Object.keys(a[i.id]).length === 0) && B());
  }, [i, N, a, k.length, B]), ae(() => {
    if (!n) return;
    const I = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = I;
    };
  }, [n]), ae(() => {
    if (!m || !E) return;
    const I = (M) => {
      if (M.pointerId !== m.pointerId) return;
      const f = l.current;
      if (!f) return;
      const x = f.getBoundingClientRect(), g = Math.max(ue, x.width - at - ue), w = Math.max(ue, x.height - lt - ue), c = Math.max(ue, Math.min(g, M.clientX - x.left - m.offsetX)), R = Math.max(ue, Math.min(w, M.clientY - x.top - m.offsetY));
      d((W) => {
        const H = W[E] || {}, y = H[m.noteId];
        return y ? {
          ...W,
          [E]: {
            ...H,
            [m.noteId]: { ...y, x: c, y: R }
          }
        } : W;
      });
    }, h = (M) => {
      M.pointerId === m.pointerId && v(null);
    };
    return document.addEventListener("pointermove", I), document.addEventListener("pointerup", h), document.addEventListener("pointercancel", h), () => {
      document.removeEventListener("pointermove", I), document.removeEventListener("pointerup", h), document.removeEventListener("pointercancel", h);
    };
  }, [E, m]);
  const A = Z((I, h) => {
    if (!E) return;
    const M = l.current;
    if (!M) return;
    const f = a[E]?.[h];
    if (!f) return;
    const x = Object.values(a[E] || {}).reduce((w, c) => Math.max(w, c.z), 0);
    d((w) => {
      const c = w[E] || {}, R = c[h];
      return R ? {
        ...w,
        [E]: {
          ...c,
          [h]: { ...R, z: x + 1 }
        }
      } : w;
    });
    const g = M.getBoundingClientRect();
    v({
      pointerId: I.pointerId,
      taskId: E,
      noteId: h,
      offsetX: I.clientX - g.left - f.x,
      offsetY: I.clientY - g.top - f.y
    });
  }, [E, a]);
  return /* @__PURE__ */ p(ve, { children: [
    n && /* @__PURE__ */ r(
      "div",
      {
        onClick: S,
        style: {
          position: "fixed",
          inset: 0,
          backgroundColor: e.overlaySoft,
          zIndex: 999,
          backdropFilter: "blur(5px)",
          transition: "opacity 0.3s ease"
        }
      }
    ),
    n && /* @__PURE__ */ p(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": s("pinboard.modalTitle", "Pinboard"),
        style: {
          position: "fixed",
          inset: 14,
          backgroundColor: e.surface,
          border: `1px solid ${e.border}`,
          borderRadius: 18,
          boxShadow: "var(--zg-shadow-panel)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          zIndex: 1e3
        },
        children: [
          /* @__PURE__ */ p("div", { style: {
            padding: "16px 18px",
            backgroundColor: e.headerBg,
            borderBottom: `1px solid ${e.borderLight}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }, children: [
              /* @__PURE__ */ r("span", { style: {
                fontSize: 10,
                fontWeight: 700,
                backgroundColor: e.milestoneRing,
                color: e.group,
                padding: "3px 8px",
                borderRadius: 999,
                letterSpacing: "0.06em",
                textTransform: "uppercase"
              }, children: i?.originalType || "" }),
              /* @__PURE__ */ r("h2", { style: { margin: 0, fontSize: 18, fontWeight: 700, color: e.textTitle }, children: i?.name || "" }),
              /* @__PURE__ */ p("span", { style: { fontSize: 12, color: e.textSecondary, display: "flex", alignItems: "center", gap: 4 }, children: [
                /* @__PURE__ */ r(Kt, { size: 12 }),
                i && ie(i.start, t.locale),
                i?.originalType === "step" && ` - ${ie(i.end, t.locale)}`
              ] })
            ] }),
            /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ p(
                "button",
                {
                  onClick: B,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: e.surface,
                    border: `1px solid ${e.border}`,
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    color: e.textPrimary,
                    padding: "8px 10px",
                    cursor: "pointer"
                  },
                  children: [
                    /* @__PURE__ */ r(qt, { size: 14 }),
                    s("pinboard.reset", "Reset layout")
                  ]
                }
              ),
              /* @__PURE__ */ r(
                "button",
                {
                  onClick: S,
                  style: {
                    background: e.surface,
                    border: `1px solid ${e.border}`,
                    borderRadius: 8,
                    cursor: "pointer",
                    width: 34,
                    height: 34,
                    display: "grid",
                    placeItems: "center"
                  },
                  children: /* @__PURE__ */ r(Bt, { size: 18 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ p(
            "div",
            {
              ref: l,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden",
                background: `linear-gradient(180deg, ${e.surfaceAlt} 0%, ${e.surface} 100%)`,
                backgroundImage: `
                              linear-gradient(${e.borderLight} 1px, transparent 1px),
                              linear-gradient(90deg, ${e.borderLight} 1px, transparent 1px)
                            `,
                backgroundSize: "28px 28px",
                cursor: m ? "grabbing" : "default"
              },
              children: [
                /* @__PURE__ */ r("p", { style: { margin: 0, position: "absolute", left: 20, top: 14, fontSize: 12, color: e.textSecondary }, children: s("pinboard.dragHint", "Drag the notes to organize your board freely.") }),
                k.map((I, h) => {
                  const M = {
                    x: ue + h % 4 * (at + 18),
                    y: ue + Math.floor(h / 4) * (lt + 18),
                    z: h + 1,
                    rotate: (h % 5 - 2) * 0.8
                  }, f = C[I.id] || M, x = m?.noteId === I.id;
                  return /* @__PURE__ */ p(
                    "div",
                    {
                      onPointerDown: (g) => A(g, I.id),
                      style: {
                        position: "absolute",
                        left: f.x,
                        top: f.y,
                        width: at,
                        minHeight: lt,
                        padding: "18px 14px 14px",
                        borderRadius: 6,
                        border: `1px solid ${e.groupSoftStrong}`,
                        background: I.color || e.note,
                        boxShadow: x ? e.shadowStickyHover : e.shadowSticky,
                        transform: `rotate(${f.rotate}deg)`,
                        userSelect: "none",
                        touchAction: "none",
                        cursor: x ? "grabbing" : "grab",
                        zIndex: f.z,
                        transition: x ? "none" : "box-shadow 0.2s ease"
                      },
                      children: [
                        /* @__PURE__ */ r("div", { style: {
                          position: "absolute",
                          top: -6,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 40,
                          height: 10,
                          background: e.stickyTape,
                          borderRadius: 2,
                          boxShadow: e.shadowTiny
                        } }),
                        /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 8 }, children: [
                          /* @__PURE__ */ r("h3", { style: { margin: 0, fontSize: 14, fontWeight: 700, color: e.inkSoft, lineHeight: 1.3 }, children: I.title }),
                          /* @__PURE__ */ p("span", { style: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, color: e.inkSoft4 }, children: [
                            /* @__PURE__ */ r(Zt, { size: 12 }),
                            s("pinboard.drag", "Drag")
                          ] })
                        ] }),
                        /* @__PURE__ */ r("p", { style: { margin: 0, fontSize: 13, color: e.inkSoft2, lineHeight: 1.4 }, children: I.description || "" }),
                        I.author && /* @__PURE__ */ p("div", { style: { marginTop: 12, fontSize: 11, fontWeight: 600, color: e.inkSoft4, textAlign: "right" }, children: [
                          "- ",
                          I.author
                        ] })
                      ]
                    },
                    I.id
                  );
                }),
                k.length === 0 && /* @__PURE__ */ p("div", { style: {
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: e.textMuted,
                  textAlign: "center",
                  gap: 12,
                  opacity: 0.7
                }, children: [
                  /* @__PURE__ */ r("div", { style: { width: 60, height: 60, borderRadius: "50%", background: e.headerBg, display: "grid", placeItems: "center" }, children: /* @__PURE__ */ r(yt, { size: 30 }) }),
                  /* @__PURE__ */ r("p", { style: { margin: 0, fontSize: 14 }, children: s("pinboard.empty", "Nenhuma nota vinculada") })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ r("div", { style: { padding: "14px 18px", borderTop: `1px solid ${e.borderLight}`, background: e.surface }, children: /* @__PURE__ */ p(
            "button",
            {
              onClick: () => {
                i && t.onAddNote?.(i.start, i.projectId);
              },
              style: {
                width: "100%",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                backgroundColor: e.group,
                color: e.white,
                border: "none",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer"
              },
              children: [
                /* @__PURE__ */ r(yt, { size: 18 }),
                " ",
                s("pinboard.newBtn", "Nova Nota nesta Etapa")
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
const Pn = {
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
}, En = {
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
function Rt(t, i, o) {
  const s = En[i] || o || i;
  return t ? typeof t == "function" ? t(i, s) || s : t[i] || s : s;
}
const Dn = 1.6, Rn = 140, jt = 1.2, Cn = 1 / jt, xe = (t) => {
  const i = t.touches[0] || t.changedTouches[0];
  return i ? { clientX: i.clientX, clientY: i.clientY } : { clientX: 0, clientY: 0 };
}, Ct = (t) => {
  if (t.length < 2) return 0;
  const i = t[0], o = t[1];
  return Math.hypot(o.clientX - i.clientX, o.clientY - i.clientY);
}, At = (t) => {
  if (t.length < 2)
    return t.length === 1 ? { clientX: t[0].clientX, clientY: t[0].clientY } : { clientX: 0, clientY: 0 };
  const i = t[0], o = t[1];
  return {
    clientX: (i.clientX + o.clientX) / 2,
    clientY: (i.clientY + o.clientY) / 2
  };
}, An = (t) => Math.min(Rn, Math.max(Dn, t));
function On(t) {
  const {
    onTaskChange: i,
    onCreateDependency: o,
    onDependencyError: s,
    dependencies: n,
    translations: l
  } = t, a = !!t.infiniteCanvas, [d, m] = G("day"), [v, S] = G(Ue), E = fe(v), [k, C] = G(null), [N, B] = G(null), [A, I] = G(null), [h, M] = G({
    isOpen: !1,
    position: { x: 0, y: 0 },
    task: null
  }), [f, x] = G(null), [g, w] = G(null), [c, R] = G(null), [W, H] = G(null), [y, q] = G("FS"), [te, $] = G(0), [oe, _] = G(!1), [J, we] = G(null), [Re, ke] = G(null), [Ne, ht] = G(!1), pt = fe(null), [je, gt] = G(null), [Ye, Ze] = G(/* @__PURE__ */ new Set(["step", "milestone", "event", "note"])), [Xe, Ce] = G(/* @__PURE__ */ new Set()), [_e, Je] = G(/* @__PURE__ */ new Set());
  ae(() => {
    E.current = v;
  }, [v]);
  const He = Z((u, b) => a ? b === "day" && u <= 7 ? "month" : b === "month" && u >= 10 ? "day" : b : b, [a]), ut = Z((u) => {
    m(u), a || S(u === "day" ? Ue : $t);
  }, [a]), Qe = Z((u) => {
    Ze((b) => {
      const z = new Set(b);
      return z.has(u) ? z.delete(u) : z.add(u), z;
    });
  }, []), et = Z((u) => {
    Ce((b) => {
      const z = new Set(b);
      return z.has(u) ? z.delete(u) : z.add(u), z;
    });
  }, []), tt = Z((u) => {
    Je((b) => {
      const z = new Set(b);
      return z.has(u) ? z.delete(u) : z.add(u), z;
    });
  }, []), Y = Tn({
    steps: t.steps,
    milestones: t.milestones,
    events: t.events,
    notes: t.notes,
    dependencies: t.dependencies,
    viewMode: d,
    dayWidth: v,
    locale: t.locale,
    visibleTypes: Ye,
    collapsedGroups: Xe,
    collapsedProjects: _e,
    groupByProject: t.groupByProject,
    selectedTaskId: N || null
  }), F = wn(Y.timeline), pe = Z((u) => {
    const b = An(u);
    return S(b), a && m((z) => He(b, z)), b;
  }, [He, a]), Ee = Z((u, b) => {
    const z = F.rightBodyRef.current;
    if (!z) {
      pe(b);
      return;
    }
    const T = z.getBoundingClientRect(), P = u - T.left, O = Number.isFinite(P) ? P : z.clientWidth / 2, L = E.current || Ue, j = z.scrollLeft + O, K = pe(b) / L;
    requestAnimationFrame(() => {
      const ne = F.rightBodyRef.current;
      ne && (ne.scrollLeft = Math.max(0, j * K - O), F.timeHeaderRef.current && (F.timeHeaderRef.current.scrollLeft = ne.scrollLeft));
    });
  }, [F.rightBodyRef, F.timeHeaderRef, pe]), Ie = Z((u, b) => {
    const z = F.rightBodyRef.current, T = b ?? (z ? z.getBoundingClientRect().left + z.clientWidth / 2 : 0);
    Ee(T, E.current * u);
  }, [Ee, F.rightBodyRef]), ge = Z(() => {
    Ie(jt);
  }, [Ie]), Ae = Z(() => {
    Ie(Cn);
  }, [Ie]), Fe = Z(() => {
    const u = F.rightBodyRef.current;
    if (!u || Y.tasks.length === 0) return;
    let b = Y.tasks[0].start, z = Y.tasks[0].end;
    for (const j of Y.tasks)
      j.start < b && (b = j.start), j.end > z && (z = j.end);
    const T = Math.max(1, Me(b, z) + 1), P = 40, O = Math.max(80, u.clientWidth - P * 2), L = pe(O / T);
    requestAnimationFrame(() => {
      const j = F.rightBodyRef.current;
      if (!j) return;
      const V = Me(Y.timeline.start, b);
      j.scrollLeft = Math.max(0, V * L - P), j.scrollTop = 0, F.leftBodyRef.current && (F.leftBodyRef.current.scrollTop = j.scrollTop), F.timeHeaderRef.current && (F.timeHeaderRef.current.scrollLeft = j.scrollLeft);
    });
  }, [Y.tasks, Y.timeline.start, F.rightBodyRef, F.leftBodyRef, F.timeHeaderRef, pe]), Be = fe(!1);
  ae(() => {
    if (!a || !t.initialFitToScreen || Be.current || Y.tasks.length === 0) return;
    const u = F.rightBodyRef.current;
    !u || u.clientWidth <= 0 || (Fe(), Be.current = !0);
  }, [a, t.initialFitToScreen, Y.tasks.length, Fe, F.rightBodyRef]);
  const D = Z((u, b) => {
    u.preventDefault(), u.stopPropagation(), x({ task: b, startMouseX: u.clientX, originalStart: new Date(b.start), originalEnd: new Date(b.end), offsetDays: 0 });
  }, []), U = Z((u, b) => {
    u.preventDefault(), u.stopPropagation();
    const z = xe(u);
    x({ task: b, startMouseX: z.clientX, originalStart: new Date(b.start), originalEnd: new Date(b.end), offsetDays: 0 });
  }, []), X = Z((u, b, z) => {
    u.preventDefault(), u.stopPropagation(), w({ task: b, edge: z, startMouseX: u.clientX, originalStart: new Date(b.start), originalEnd: new Date(b.end), offsetDays: 0 });
  }, []), de = Z((u, b, z) => {
    u.preventDefault(), u.stopPropagation();
    const T = xe(u);
    w({ task: b, edge: z, startMouseX: T.clientX, originalStart: new Date(b.start), originalEnd: new Date(b.end), offsetDays: 0 });
  }, []), ze = Z((u, b, z) => {
    u.preventDefault(), u.stopPropagation(), R({ fromTaskId: b.id, fromEdge: z, fromScreenX: u.clientX, fromScreenY: u.clientY, currentScreenX: u.clientX, currentScreenY: u.clientY, hoverTargetId: null });
  }, []), Le = Z((u, b, z) => {
    u.preventDefault(), u.stopPropagation();
    const T = xe(u);
    R({
      fromTaskId: b.id,
      fromEdge: z,
      fromScreenX: T.clientX,
      fromScreenY: T.clientY,
      currentScreenX: T.clientX,
      currentScreenY: T.clientY,
      hoverTargetId: null
    });
  }, []), Q = Z(async () => {
    if (!W || !o) return;
    const u = new Map(Y.tasks.map((L) => [L.id, L])), b = u.get(W.fromTaskId), z = u.get(W.toTaskId);
    if (!b || !z) return;
    const T = (L) => L.originalType === "step" ? "STEP" : "MILESTONE", P = W.fromEdge === "right" ? b : z, O = W.fromEdge === "right" ? z : b;
    if (In(n || [], P.id, O.id)) {
      const L = Rt(
        l,
        "gantt.error.circularDependency",
        "Circular dependency is not allowed."
      );
      s?.({
        code: "CYCLIC_DEPENDENCY",
        message: L,
        predecessorId: P.id,
        successorId: O.id
      }), s || window.alert(L), H(null);
      return;
    }
    _(!0);
    try {
      await o({ predecessorId: P.id, predecessorType: T(P), successorId: O.id, successorType: T(O), type: y, lag: te }), H(null);
    } finally {
      _(!1);
    }
  }, [W, Y.tasks, o, n, l, s, y, te]);
  ae(() => {
    if (!f) return;
    const u = { passive: !1 }, b = (O) => {
      const L = O.clientX - f.startMouseX, j = Math.round(L / Y.timeline.dayWidth);
      j !== f.offsetDays && x((V) => V ? { ...V, offsetDays: j } : null);
    }, z = (O) => {
      O.cancelable && O.preventDefault();
      const j = xe(O).clientX - f.startMouseX, V = Math.round(j / Y.timeline.dayWidth);
      V !== f.offsetDays && x((K) => K ? { ...K, offsetDays: V } : null);
    }, T = () => {
      f.offsetDays !== 0 && i && i({
        id: f.task.id,
        name: f.task.name,
        start: le(f.originalStart, f.offsetDays),
        end: le(f.originalEnd, f.offsetDays),
        type: f.task.originalType === "step" ? "task" : "milestone",
        progress: f.task.progress
      }), x(null);
    }, P = () => T();
    return document.addEventListener("mousemove", b), document.addEventListener("mouseup", T), document.addEventListener("touchmove", z, u), document.addEventListener("touchend", P), () => {
      document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", T), document.removeEventListener("touchmove", z), document.removeEventListener("touchend", P);
    };
  }, [f, Y.timeline.dayWidth, i]), ae(() => {
    if (!g) return;
    const u = { passive: !1 }, b = (O) => {
      const L = O.clientX - g.startMouseX, j = Math.round(L / Y.timeline.dayWidth);
      j !== g.offsetDays && w((V) => V ? { ...V, offsetDays: j } : null);
    }, z = (O) => {
      O.cancelable && O.preventDefault();
      const j = xe(O).clientX - g.startMouseX, V = Math.round(j / Y.timeline.dayWidth);
      V !== g.offsetDays && w((K) => K ? { ...K, offsetDays: V } : null);
    }, T = () => {
      if (g.offsetDays !== 0 && i) {
        const O = g.edge === "left" ? le(g.originalStart, g.offsetDays) : g.originalStart, L = g.edge === "right" ? le(g.originalEnd, g.offsetDays) : g.originalEnd;
        L > O && i({ id: g.task.id, name: g.task.name, start: O, end: L, type: "task", progress: g.task.progress });
      }
      w(null);
    }, P = () => T();
    return document.addEventListener("mousemove", b), document.addEventListener("mouseup", T), document.addEventListener("touchmove", z, u), document.addEventListener("touchend", P), () => {
      document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", T), document.removeEventListener("touchmove", z), document.removeEventListener("touchend", P);
    };
  }, [g, Y.timeline.dayWidth, i]);
  const Te = c?.fromTaskId, me = c?.fromEdge;
  ae(() => {
    if (!Te || !me) return;
    const u = { passive: !1 }, b = Te, z = me, T = (j) => {
      let V = null;
      for (const K of document.elementsFromPoint(j.clientX, j.clientY)) {
        const ne = K.dataset?.taskId;
        if (ne && ne !== b) {
          V = ne;
          break;
        }
      }
      R((K) => K ? { ...K, currentScreenX: j.clientX, currentScreenY: j.clientY, hoverTargetId: V } : null);
    }, P = (j) => {
      j.cancelable && j.preventDefault();
      const V = xe(j);
      let K = null;
      for (const ne of document.elementsFromPoint(V.clientX, V.clientY)) {
        const De = ne.dataset?.taskId;
        if (De && De !== b) {
          K = De;
          break;
        }
      }
      R((ne) => ne ? { ...ne, currentScreenX: V.clientX, currentScreenY: V.clientY, hoverTargetId: K } : null);
    }, O = (j) => {
      let V = null;
      for (const K of document.elementsFromPoint(j.clientX, j.clientY)) {
        const ne = K.dataset?.taskId;
        if (ne && ne !== b) {
          V = ne;
          break;
        }
      }
      V && o && (H({ fromTaskId: b, fromEdge: z, toTaskId: V }), q("FS"), $(0)), R(null);
    }, L = (j) => {
      const V = xe(j);
      let K = null;
      for (const ne of document.elementsFromPoint(V.clientX, V.clientY)) {
        const De = ne.dataset?.taskId;
        if (De && De !== b) {
          K = De;
          break;
        }
      }
      K && o && (H({ fromTaskId: b, fromEdge: z, toTaskId: K }), q("FS"), $(0)), R(null);
    };
    return document.addEventListener("mousemove", T), document.addEventListener("mouseup", O), document.addEventListener("touchmove", P, u), document.addEventListener("touchend", L), () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", O), document.removeEventListener("touchmove", P), document.removeEventListener("touchend", L);
    };
  }, [Te, me, o]);
  const [ee, ye] = G(null), [be, We] = G(null), nt = Z((u) => {
    if (g || f || u.button === 2) return;
    const b = F.rightBodyRef.current;
    b && (u.preventDefault(), ye({ startX: u.clientX, startY: u.clientY, scrollLeft: b.scrollLeft, scrollTop: b.scrollTop }));
  }, [g, f, F.rightBodyRef]), ot = Z((u) => {
    if (g || f || c) return;
    const b = F.rightBodyRef.current;
    if (!b) return;
    if (a && u.touches.length >= 2) {
      u.cancelable && u.preventDefault(), ye(null);
      const T = Ct(u.touches), P = At(u.touches);
      We({
        startDistance: Math.max(1, T),
        startDayWidth: E.current,
        centerClientY: P.clientY,
        startScrollTop: b.scrollTop
      });
      return;
    }
    const z = xe(u);
    ye({ startX: z.clientX, startY: z.clientY, scrollLeft: b.scrollLeft, scrollTop: b.scrollTop });
  }, [g, f, c, F.rightBodyRef, a]), rt = Z((u) => {
    if (!a) {
      F.handleChartWheel(u);
      return;
    }
    if (!F.rightBodyRef.current) return;
    u.preventDefault();
    const z = Math.abs(u.deltaY) > 0 ? u.deltaY : u.deltaX, T = Math.exp(-z * 15e-4);
    Ee(u.clientX, E.current * T);
  }, [a, F, Ee]);
  ae(() => {
    if (!ee) return;
    const u = { passive: !1 }, b = (O) => {
      const L = F.rightBodyRef.current;
      L && (L.scrollLeft = ee.scrollLeft - (O.clientX - ee.startX), L.scrollTop = ee.scrollTop - (O.clientY - ee.startY), F.leftBodyRef.current && (F.leftBodyRef.current.scrollTop = L.scrollTop), F.timeHeaderRef.current && (F.timeHeaderRef.current.scrollLeft = L.scrollLeft));
    }, z = (O) => {
      O.cancelable && O.preventDefault();
      const L = F.rightBodyRef.current;
      if (!L) return;
      const j = xe(O);
      L.scrollLeft = ee.scrollLeft - (j.clientX - ee.startX), L.scrollTop = ee.scrollTop - (j.clientY - ee.startY), F.leftBodyRef.current && (F.leftBodyRef.current.scrollTop = L.scrollTop), F.timeHeaderRef.current && (F.timeHeaderRef.current.scrollLeft = L.scrollLeft);
    }, T = () => ye(null), P = () => ye(null);
    return document.addEventListener("mousemove", b), document.addEventListener("mouseup", T), document.addEventListener("touchmove", z, u), document.addEventListener("touchend", P), () => {
      document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", T), document.removeEventListener("touchmove", z), document.removeEventListener("touchend", P);
    };
  }, [ee, F.rightBodyRef, F.leftBodyRef, F.timeHeaderRef]), ae(() => {
    if (!be || !a) return;
    const u = { passive: !1 }, b = (T) => {
      if (T.touches.length < 2) return;
      T.cancelable && T.preventDefault();
      const P = F.rightBodyRef.current;
      if (!P) return;
      const O = Ct(T.touches), L = At(T.touches), j = Math.max(0.1, O / be.startDistance);
      Ee(L.clientX, be.startDayWidth * j), P.scrollTop = be.startScrollTop - (L.clientY - be.centerClientY), F.leftBodyRef.current && (F.leftBodyRef.current.scrollTop = P.scrollTop);
    }, z = (T) => {
      T.touches.length < 2 && We(null);
    };
    return document.addEventListener("touchmove", b, u), document.addEventListener("touchend", z), document.addEventListener("touchcancel", z), () => {
      document.removeEventListener("touchmove", b), document.removeEventListener("touchend", z), document.removeEventListener("touchcancel", z);
    };
  }, [be, a, F.rightBodyRef, F.leftBodyRef, Ee]);
  const it = Z((u) => {
    u.preventDefault(), u.stopPropagation();
    const b = (T) => {
      const P = F.rightBodyRef.current;
      if (!P) return /* @__PURE__ */ new Date();
      const O = P.getBoundingClientRect(), L = T - O.left + P.scrollLeft;
      return le(Y.timeline.start, Math.max(0, Math.floor(L / Y.timeline.dayWidth)));
    }, z = (T) => {
      if (!t.groupByProject) return;
      const P = F.leftBodyRef.current;
      if (!P) return;
      const O = P.getBoundingClientRect(), L = T - O.top + P.scrollTop, j = Math.max(0, Math.floor(L / 50));
      for (let V = Math.min(j, Y.displayRows.length - 1); V >= 0; V--) {
        const K = Y.displayRows[V];
        if (K.kind === "projectHeader") return K.projectId;
        if (K.kind === "task" && K.task.projectId) return K.task.projectId;
        if (K.kind === "group" && K.projectId) return K.projectId;
      }
    };
    ke({ x: u.clientX, y: u.clientY, date: b(u.clientX), projectId: z(u.clientY) }), ye(null);
  }, [Y.timeline, Y.displayRows, t.groupByProject, F.rightBodyRef, F.leftBodyRef]);
  ae(() => {
    if (!Re) return;
    const u = (P) => {
      P.key === "Escape" && ke(null);
    }, b = (P) => {
      P.target.closest('[data-menu="chart-create"]') || ke(null);
    }, z = (P) => {
      P.target.closest('[data-menu="chart-create"]') || ke(null);
    }, T = () => ke(null);
    return document.addEventListener("keydown", u), document.addEventListener("click", b), document.addEventListener("touchstart", z), window.addEventListener("scroll", T, !0), () => {
      document.removeEventListener("keydown", u), document.removeEventListener("click", b), document.removeEventListener("touchstart", z), window.removeEventListener("scroll", T, !0);
    };
  }, [Re]);
  const ft = se(() => ({
    props: t,
    t: (u, b) => Rt(t.translations, u, b),
    viewMode: d,
    setViewMode: ut,
    isInfiniteCanvas: a,
    dayWidth: v,
    zoomPercent: Math.round(v / Ue * 100),
    zoomIn: ge,
    zoomOut: Ae,
    fitToScreen: Fe,
    hoveredTaskId: k,
    setHoveredTaskId: C,
    selectedTaskId: N,
    setSelectedTaskId: B,
    tooltip: A,
    setTooltip: I,
    popupState: h,
    setPopupState: M,
    dragState: f,
    setDragState: x,
    resizeState: g,
    setResizeState: w,
    connectState: c,
    setConnectState: R,
    visibleTypes: Ye,
    setVisibleTypes: Ze,
    toggleVisibility: Qe,
    collapsedGroups: Xe,
    setCollapsedGroups: Ce,
    toggleGroup: et,
    collapsedProjects: _e,
    setCollapsedProjects: Je,
    toggleProject: tt,
    pendingConnection: W,
    setPendingConnection: H,
    depModalType: y,
    setDepModalType: q,
    depModalLag: te,
    setDepModalLag: $,
    depCreating: oe,
    setDepCreating: _,
    deletingDepId: J,
    setDeletingDepId: we,
    chartMenu: Re,
    setChartMenu: ke,
    newActionOpen: Ne,
    setNewActionOpen: ht,
    activePinboardTask: je,
    setActivePinboardTask: gt,
    tasks: Y.tasks,
    timeline: Y.timeline,
    displayRows: Y.displayRows,
    taskRowIndex: Y.taskRowIndex || /* @__PURE__ */ new Map(),
    arrows: Y.arrows,
    criticalIds: Y.criticalIds,
    delayedIds: Y.delayedIds,
    relatedIds: Y.relatedIds,
    ...F,
    newActionRef: pt,
    screenXToDate: (u) => {
      const b = F.rightBodyRef.current;
      if (!b) return /* @__PURE__ */ new Date();
      const z = b.getBoundingClientRect(), T = u - z.left + b.scrollLeft;
      return le(Y.timeline.start, Math.max(0, Math.floor(T / Y.timeline.dayWidth)));
    },
    screenYToProjectId: (u) => {
      if (!t.groupByProject) return;
      const b = F.leftBodyRef.current;
      if (!b) return;
      const z = b.getBoundingClientRect(), T = u - z.top + b.scrollTop, P = Math.max(0, Math.floor(T / 50));
      for (let O = Math.min(P, Y.displayRows.length - 1); O >= 0; O--) {
        const L = Y.displayRows[O];
        if (L.kind === "projectHeader") return L.projectId;
        if (L.kind === "task" && L.task.projectId) return L.task.projectId;
        if (L.kind === "group" && L.projectId) return L.projectId;
      }
    },
    handleChartMouseDown: nt,
    handleChartTouchStart: ot,
    handleChartWheel: rt,
    openChartMenu: it,
    handleBarMouseDown: D,
    handleBarTouchStart: U,
    handleResizeMouseDown: X,
    handleResizeTouchStart: de,
    handleConnectDotMouseDown: ze,
    handleConnectDotTouchStart: Le,
    handleCreateDependency: Q
  }), [
    t,
    d,
    a,
    v,
    ge,
    Ae,
    Fe,
    k,
    N,
    A,
    h,
    f,
    g,
    c,
    Ye,
    Xe,
    _e,
    W,
    y,
    te,
    oe,
    J,
    Re,
    Ne,
    je,
    Y,
    F,
    Qe,
    et,
    tt,
    nt,
    ot,
    rt,
    it,
    D,
    U,
    X,
    de,
    ze,
    Le,
    Q
  ]);
  return t.loading ? /* @__PURE__ */ r("div", { role: "status", "aria-live": "polite", style: { padding: 48, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: e.textSecondary }, children: /* @__PURE__ */ r(Lt, { size: 32, style: { animation: "zg-spin 1.5s linear infinite", color: e.group } }) }) : /* @__PURE__ */ r(tn, { value: ft, children: /* @__PURE__ */ p(
    "div",
    {
      className: `zg-root ${a ? "zg-root--infinite" : "zg-root--framed"} ${je ? "zg-root--muted" : ""}`,
      style: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
        background: a ? "transparent" : "var(--zg-surface)",
        borderRadius: a ? 0 : 12,
        boxShadow: a ? "none" : "var(--zg-shadow-panel)",
        overflow: "hidden",
        height: a ? "100%" : "calc(100vh - 48px)",
        minHeight: a ? 0 : 600,
        border: a ? "none" : `1px solid ${e.borderLight}`,
        opacity: 1,
        transition: "opacity 0.3s ease"
      },
      children: [
        /* @__PURE__ */ r(rn, {}),
        /* @__PURE__ */ p("div", { style: { display: "flex", flex: 1, overflow: "hidden", position: "relative", background: e.surfaceAlt }, children: [
          !t.hideSidebar && /* @__PURE__ */ r(yn, {}),
          /* @__PURE__ */ r(Sn, {})
        ] }),
        /* @__PURE__ */ r(Mn, {})
      ]
    }
  ) });
}
const Fn = [
  { label: "Yellow", value: "#FEF08A" },
  { label: "Green", value: "#BBF7D0" },
  { label: "Blue", value: "#BFDBFE" },
  { label: "Pink", value: "#FBCFE8" },
  { label: "Purple", value: "#E9D5FF" },
  { label: "Orange", value: "#FED7AA" },
  { label: "White", value: "#FFFFFF" }
], Ft = {
  FS: "Finish → Start (FS)",
  SS: "Start → Start (SS)",
  FF: "Finish → Finish (FF)",
  SF: "Start → Finish (SF)"
};
function Nn({
  isOpen: t,
  onClose: i,
  availableMilestones: o = [],
  initialDate: s,
  translations: n,
  onSaveNote: l
}) {
  const a = (y, q) => n ? typeof n == "function" ? n(y, q) : n[y] || q : q, [d, m] = G(""), [v, S] = G(""), [E, k] = G("#FEF08A"), [C, N] = G(""), [B, A] = G(""), [I, h] = G("FS"), [M, f] = G(!1), [x, g] = G([]), [w, c] = G(""), R = fe(null);
  ae(() => {
    t && (m(""), S(""), k("#FEF08A"), N(s ?? (/* @__PURE__ */ new Date()).toISOString().split("T")[0]), A(""), h("FS"), g([]), c(""));
  }, [t, s]);
  const W = [
    ...o.map((y) => ({ id: y.id, name: y.name, type: "MILESTONE" }))
  ], H = async () => {
    if (!d.trim() && !v.trim()) {
      c(a("noteModal.errorEmpty", "Please provide a title or content for the note."));
      return;
    }
    c("");
    try {
      f(!0), await l({
        title: d || a("noteModal.untitled", "Untitled"),
        description: v,
        color: E,
        date: C ? `${C}T00:00:00` : (/* @__PURE__ */ new Date()).toISOString(),
        predecessorId: B,
        dependencyType: I,
        files: x
      }), i();
    } catch (y) {
      console.error(y), c(a("noteModal.errorSave", "Error creating note."));
    } finally {
      f(!1);
    }
  };
  return t ? /* @__PURE__ */ r("div", { style: { position: "fixed", inset: 0, background: e.overlaySoft, backdropFilter: "blur(2px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 16 }, onClick: i, children: /* @__PURE__ */ p("div", { onClick: (y) => y.stopPropagation(), style: {
    width: 400,
    maxHeight: "90vh",
    background: E || e.noteDefaultBg,
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
    /* @__PURE__ */ r("div", { style: { position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)", width: 64, height: 16, background: e.stickyTape, borderRadius: 2, boxShadow: e.shadowTiny } }),
    /* @__PURE__ */ r(
      "button",
      {
        onClick: i,
        style: { position: "absolute", top: 10, right: 10, width: 24, height: 24, borderRadius: "50%", background: e.groupSoftStrong, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14, color: e.inkMedium },
        onMouseEnter: (y) => y.currentTarget.style.background = e.groupBorderWeak,
        onMouseLeave: (y) => y.currentTarget.style.background = e.groupSoftStrong,
        children: "✕"
      }
    ),
    /* @__PURE__ */ p("div", { style: { padding: "28px 24px 20px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }, children: [
      w && /* @__PURE__ */ r("div", { style: { background: e.todaySoft, color: e.dangerText, padding: "8px 12px", borderRadius: 6, fontSize: 12, marginBottom: 12, border: `1px solid ${e.todayMid}` }, children: w }),
      /* @__PURE__ */ r(
        "input",
        {
          type: "text",
          value: d,
          onChange: (y) => m(y.target.value),
          placeholder: a("noteModal.titlePlaceholder", "Note title..."),
          style: {
            width: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            fontSize: 20,
            fontWeight: 800,
            color: e.inkStrong,
            lineHeight: "1.3",
            padding: 0,
            margin: 0,
            marginBottom: 14,
            fontFamily: "inherit"
          }
        }
      ),
      /* @__PURE__ */ r("div", { style: { width: "100%", height: 1, background: e.groupSoftStrong, marginBottom: 14 } }),
      /* @__PURE__ */ r(
        "textarea",
        {
          value: v,
          onChange: (y) => S(y.target.value),
          rows: 6,
          placeholder: a("noteModal.contentPlaceholder", "Write your note here..."),
          style: {
            width: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            fontSize: 14,
            color: e.inkMedium,
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
      /* @__PURE__ */ p("div", { style: { marginTop: 14, paddingTop: 10, borderTop: `1px solid ${e.groupSoftStrong}` }, children: [
        /* @__PURE__ */ r(
          "input",
          {
            ref: R,
            type: "file",
            multiple: !0,
            onChange: (y) => {
              const q = y.target.files ? Array.from(y.target.files) : [];
              q.length > 0 && g((te) => [...te, ...q]), R.current && (R.current.value = "");
            },
            style: { display: "none" }
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            onClick: () => R.current?.click(),
            style: {
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 12px",
              borderRadius: 6,
              background: e.groupSoft,
              border: `1px dashed ${e.groupBorderWeak}`,
              cursor: "pointer",
              fontSize: 12,
              color: e.inkMedium,
              fontWeight: 500,
              transition: "background 0.15s",
              width: "100%",
              justifyContent: "center"
            },
            onMouseEnter: (y) => y.currentTarget.style.background = e.groupSoftStrong,
            onMouseLeave: (y) => y.currentTarget.style.background = e.groupSoft,
            children: [
              /* @__PURE__ */ r(Jt, { size: 13 }),
              a("noteModal.attachFiles", "Attach files")
            ]
          }
        ),
        x.length > 0 && /* @__PURE__ */ r("div", { style: { marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }, children: x.map((y, q) => /* @__PURE__ */ p("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 8px",
          borderRadius: 4,
          background: e.surfaceFrost,
          fontSize: 11,
          color: e.inkMedium
        }, children: [
          /* @__PURE__ */ r(ct, { size: 10, style: { flexShrink: 0 } }),
          /* @__PURE__ */ r("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: y.name }),
          /* @__PURE__ */ p("span", { style: { fontSize: 9, color: e.inkSoft4, flexShrink: 0 }, children: [
            (y.size / 1024).toFixed(0),
            "KB"
          ] }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => g((te) => te.filter(($, oe) => oe !== q)),
              style: { background: "none", border: "none", cursor: "pointer", padding: 2, display: "flex", color: e.dangerText },
              title: a("noteModal.removeFile", "Remove"),
              children: /* @__PURE__ */ r(Bt, { size: 12 })
            }
          )
        ] }, `file-${q}`)) })
      ] }),
      /* @__PURE__ */ p("div", { style: { marginTop: 16, paddingTop: 12, borderTop: `1px solid ${e.groupSoftStrong}`, display: "flex", alignItems: "center", justifyItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
        /* @__PURE__ */ r(
          "input",
          {
            type: "date",
            value: C,
            onChange: (y) => N(y.target.value),
            style: {
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: 12,
              color: e.inkSoft3,
              fontWeight: 500,
              fontFamily: "inherit",
              padding: 0,
              cursor: "pointer",
              width: "auto"
            }
          }
        ),
        /* @__PURE__ */ r("div", { style: { display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }, children: Fn.map((y) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: () => k(y.value),
            style: {
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: E === y.value ? `2px solid ${e.group}` : `1.5px solid ${e.groupSoftStrong}`,
              backgroundColor: y.value,
              cursor: "pointer",
              padding: 0,
              transform: E === y.value ? "scale(1.15)" : "scale(1)",
              transition: "all 0.15s",
              boxShadow: E === y.value ? e.shadowSmall : "none"
            },
            title: y.label
          },
          y.value
        )) })
      ] }),
      W.length > 0 && /* @__PURE__ */ p("div", { style: { marginTop: 12, paddingTop: 12, borderTop: `1px solid ${e.groupSoftStrong}` }, children: [
        /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }, children: [
          /* @__PURE__ */ r(Qt, { size: 14, style: { color: e.inkSoft3 } }),
          /* @__PURE__ */ r("span", { style: { fontSize: 11, color: e.inkSoft3, fontWeight: 600 }, children: a("noteModal.dependency", "Dependency") })
        ] }),
        /* @__PURE__ */ p(
          "select",
          {
            value: B,
            onChange: (y) => A(y.target.value),
            style: {
              width: "100%",
              background: e.surfaceFrost,
              border: `1px solid ${e.groupSoftStrong}`,
              borderRadius: 6,
              fontSize: 12,
              color: e.inkMedium,
              padding: "6px 8px",
              outline: "none",
              fontFamily: "inherit",
              cursor: "pointer"
            },
            children: [
              /* @__PURE__ */ r("option", { value: "", children: a("noteModal.none", "None") }),
              o.length > 0 && /* @__PURE__ */ r("optgroup", { label: a("noteModal.milestones", "Milestones"), children: o.map((y) => /* @__PURE__ */ r("option", { value: y.id, children: y.name }, y.id)) })
            ]
          }
        ),
        B && /* @__PURE__ */ r(
          "select",
          {
            value: I,
            onChange: (y) => h(y.target.value),
            style: {
              width: "100%",
              background: e.surfaceFrost,
              border: `1px solid ${e.groupSoftStrong}`,
              borderRadius: 6,
              fontSize: 12,
              color: e.inkMedium,
              padding: "6px 8px",
              outline: "none",
              fontFamily: "inherit",
              cursor: "pointer",
              marginTop: 6
            },
            children: Object.keys(Ft).map((y) => /* @__PURE__ */ r("option", { value: y, children: Ft[y] }, y))
          }
        )
      ] }),
      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 16, marginTop: 12, borderTop: `1px solid ${e.groupSoftStrong}` }, children: [
        /* @__PURE__ */ r(
          "button",
          {
            onClick: i,
            style: { padding: "8px 16px", fontSize: 13, color: e.inkMedium, background: e.surfaceFrost, border: `1px solid ${e.groupSoftStrong}`, borderRadius: 8, cursor: "pointer" },
            children: a("noteModal.cancel", "Cancel")
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            onClick: H,
            disabled: M,
            style: { padding: "8px 20px", fontSize: 13, color: e.white, background: e.group, border: "none", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, opacity: M ? 0.5 : 1 },
            children: [
              M && /* @__PURE__ */ r(Lt, { size: 16, style: { animation: "zg-spin 1s linear infinite" } }),
              a("noteModal.create", "Create Note")
            ]
          }
        )
      ] })
    ] })
  ] }) }) : null;
}
export {
  Nn as NoteModal,
  On as ProjectGantt,
  En as enUS,
  Pn as ptBR
};
