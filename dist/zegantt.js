import { jsx as r, jsxs as p, Fragment as ge } from "react/jsx-runtime";
import * as Ve from "react";
import { createContext as It, useContext as Mt, useMemo as se, useCallback as Z, useRef as xe, useEffect as ve, useState as G } from "react";
import { Flag as Be, Clock as Le, MessageCircle as Tt, Plus as Qe, ChevronDown as Ze, ChevronRight as nt, Paperclip as He, AlertTriangle as zt, Eye as Et, Edit2 as Dt, Trash2 as Ct, Calendar as Rt, X as gt, Loader2 as ut, Upload as At, Link2 as Ft } from "lucide-react";
import { flushSync as Bt } from "react-dom";
const ft = It(void 0);
function Lt({ children: t, value: s }) {
  return /* @__PURE__ */ r(ft.Provider, { value: s, children: t });
}
function Te() {
  const t = Mt(ft);
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
}, te = 50, Fe = 32, Wt = Fe * 2, $t = 460, de = 26, ke = 28, et = 120, Pt = 40, Ot = 3.5, ce = [
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
], ot = {
  step: "Steps",
  milestone: "Milestones",
  event: "Events",
  note: "Notes"
};
function Nt() {
  const {
    props: t,
    t: s,
    viewMode: o,
    setViewMode: n,
    visibleTypes: i,
    setVisibleTypes: l,
    newActionOpen: a,
    setNewActionOpen: d,
    newActionRef: f
  } = Te(), { projectName: b, onAddNewStage: x, onAddMilestone: E, onAddEvent: I, onAddNote: B } = t, W = (m) => {
    l((v) => {
      const T = new Set(v);
      return T.has(m) ? T.delete(m) : T.add(m), T;
    });
  };
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 24px",
        borderBottom: `1px solid ${e.border}`,
        background: `linear-gradient(180deg, ${e.headerBg} 0%, ${e.surface} 100%)`
      },
      children: [
        /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
          /* @__PURE__ */ p("div", { children: [
            /* @__PURE__ */ r("h3", { style: { margin: 0, fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: e.textTitle }, children: s("planning.gantt", "Project Planning") }),
            /* @__PURE__ */ r("div", { style: { height: 2.5, width: 64, marginTop: 6, borderRadius: 9999, background: `linear-gradient(90deg, ${e.group}, ${e.milestoneRing})` } })
          ] }),
          b && /* @__PURE__ */ r(
            "span",
            {
              style: {
                fontSize: 12,
                fontWeight: 500,
                padding: "4px 12px",
                borderRadius: 9999,
                color: e.textSecondary,
                background: e.surface,
                border: `1px solid ${e.border}`
              },
              children: b
            }
          )
        ] }),
        /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ r("div", { style: { display: "flex", padding: 4, borderRadius: 8, background: e.groupSoftStrong, border: `1px solid ${e.borderLight}` }, children: ["day", "month"].map((m) => /* @__PURE__ */ r(
            "button",
            {
              onClick: () => n(m),
              style: {
                padding: "6px 20px",
                fontSize: 12,
                fontWeight: 600,
                borderRadius: 6,
                transition: "all 0.2s",
                border: "none",
                cursor: "pointer",
                ...o === m ? { background: e.surface, color: e.group, boxShadow: e.shadowTiny } : { background: "transparent", color: e.textSecondary }
              },
              children: m === "day" ? s("charts.gantt.month", "Month") : s("charts.gantt.year", "Year")
            },
            m
          )) }),
          /* @__PURE__ */ r("div", { style: { display: "flex", padding: 4, borderRadius: 8, gap: 2, background: e.groupSoftStrong, border: `1px solid ${e.borderLight}` }, children: [
            { type: "step", label: s("gantt.filter.steps", "Steps"), icon: /* @__PURE__ */ r("div", { style: { width: 10, height: 10, borderRadius: 2, background: ce[0].bar, border: `1px solid ${ce[0].barBorder}` } }) },
            { type: "milestone", label: s("gantt.filter.milestones", "Milestones"), icon: /* @__PURE__ */ r(Be, { size: 11, style: { color: e.milestone } }) },
            { type: "event", label: s("gantt.filter.events", "Events"), icon: /* @__PURE__ */ r(Le, { size: 11, style: { color: e.event } }) },
            { type: "note", label: s("gantt.filter.notes", "Notes"), icon: /* @__PURE__ */ r(Tt, { size: 11, style: { color: e.note } }) }
          ].map((m) => {
            const v = i.has(m.type);
            return /* @__PURE__ */ p(
              "button",
              {
                onClick: () => W(m.type),
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
                  ...v ? { background: e.surface, color: e.group, boxShadow: e.shadowTiny } : { background: "transparent", color: e.textMuted, opacity: 0.5 }
                },
                children: [
                  m.icon,
                  /* @__PURE__ */ r("span", { children: m.label })
                ]
              },
              m.type
            );
          }) }),
          x && /* @__PURE__ */ p("div", { ref: f, style: { position: "relative" }, children: [
            /* @__PURE__ */ p(
              "button",
              {
                onClick: () => d((m) => !m),
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
                  /* @__PURE__ */ r(Qe, { size: 16 }),
                  /* @__PURE__ */ r("span", { children: s("charts.gantt.newAction", "New Action") }),
                  /* @__PURE__ */ r(Ze, { size: 14, style: { opacity: 0.7, transform: a ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
                ]
              }
            ),
            a && /* @__PURE__ */ r(
              "div",
              {
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
                onClick: (m) => m.stopPropagation(),
                children: [
                  {
                    label: s("gantt.newAction.step", "Step"),
                    icon: /* @__PURE__ */ r("div", { style: { width: 14, height: 14, borderRadius: 3, background: ce[0].bar, border: `1.5px solid ${ce[0].barBorder}`, flexShrink: 0 } }),
                    action: () => {
                      x(), d(!1);
                    }
                  },
                  {
                    label: s("gantt.newAction.milestone", "Milestone"),
                    icon: /* @__PURE__ */ r("div", { style: { width: 22, height: 22, borderRadius: "50%", background: e.milestoneRingSoft, border: `1.5px solid ${e.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(Be, { size: 11, style: { color: e.milestone } }) }),
                    action: () => {
                      E?.(), d(!1);
                    }
                  },
                  {
                    label: s("gantt.newAction.event", "Event"),
                    icon: /* @__PURE__ */ r("div", { style: { width: 22, height: 22, borderRadius: "50%", background: e.eventSoft, border: `1.5px solid ${e.eventBorderSoft}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(Le, { size: 11, style: { color: e.event } }) }),
                    action: () => {
                      I?.(), d(!1);
                    }
                  },
                  {
                    label: s("gantt.newAction.note", "Note"),
                    icon: /* @__PURE__ */ r("div", { style: { width: 16, height: 20, background: e.note, borderRadius: 2, boxShadow: e.shadowTiny, position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ r("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: e.stickyTape, borderRadius: 1 } }) }),
                    action: () => {
                      B?.(), d(!1);
                    }
                  }
                ].map((m) => /* @__PURE__ */ p(
                  "button",
                  {
                    onClick: m.action,
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
                      textAlign: "left",
                      transition: "background 0.12s"
                    },
                    onMouseEnter: (v) => {
                      v.currentTarget.style.background = e.headerBg;
                    },
                    onMouseLeave: (v) => {
                      v.currentTarget.style.background = "transparent";
                    },
                    children: [
                      m.icon,
                      m.label
                    ]
                  },
                  m.label
                ))
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Ie(t, s, o) {
  let n = o.initialDeps ?? [], i, l = !0;
  function a() {
    var d, f, b;
    let x;
    o.key && ((d = o.debug) != null && d.call(o)) && (x = Date.now());
    const E = t();
    if (!(E.length !== n.length || E.some((W, m) => n[m] !== W)))
      return i;
    n = E;
    let B;
    if (o.key && ((f = o.debug) != null && f.call(o)) && (B = Date.now()), i = s(...E), o.key && ((b = o.debug) != null && b.call(o))) {
      const W = Math.round((Date.now() - x) * 100) / 100, m = Math.round((Date.now() - B) * 100) / 100, v = m / 16, T = (c, F) => {
        for (c = String(c); c.length < F; )
          c = " " + c;
        return c;
      };
      console.info(
        `%c⏱ ${T(m, 5)} /${T(W, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * v, 120)
        )}deg 100% 31%);`,
        o?.key
      );
    }
    return o?.onChange && !(l && o.skipInitialOnChange) && o.onChange(i), l = !1, i;
  }
  return a.updateDeps = (d) => {
    n = d;
  }, a;
}
function rt(t, s) {
  if (t === void 0)
    throw new Error("Unexpected undefined");
  return t;
}
const jt = (t, s) => Math.abs(t - s) < 1.01, Yt = (t, s, o) => {
  let n;
  return function(...i) {
    t.clearTimeout(n), n = t.setTimeout(() => s.apply(this, i), o);
  };
}, it = (t) => {
  const { offsetWidth: s, offsetHeight: o } = t;
  return { width: s, height: o };
}, Xt = (t) => t, _t = (t) => {
  const s = Math.max(t.startIndex - t.overscan, 0), o = Math.min(t.endIndex + t.overscan, t.count - 1), n = [];
  for (let i = s; i <= o; i++)
    n.push(i);
  return n;
}, Vt = (t, s) => {
  const o = t.scrollElement;
  if (!o)
    return;
  const n = t.targetWindow;
  if (!n)
    return;
  const i = (a) => {
    const { width: d, height: f } = a;
    s({ width: Math.round(d), height: Math.round(f) });
  };
  if (i(it(o)), !n.ResizeObserver)
    return () => {
    };
  const l = new n.ResizeObserver((a) => {
    const d = () => {
      const f = a[0];
      if (f?.borderBoxSize) {
        const b = f.borderBoxSize[0];
        if (b) {
          i({ width: b.inlineSize, height: b.blockSize });
          return;
        }
      }
      i(it(o));
    };
    t.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(d) : d();
  });
  return l.observe(o, { box: "border-box" }), () => {
    l.unobserve(o);
  };
}, st = {
  passive: !0
}, at = typeof window > "u" ? !0 : "onscrollend" in window, Ht = (t, s) => {
  const o = t.scrollElement;
  if (!o)
    return;
  const n = t.targetWindow;
  if (!n)
    return;
  let i = 0;
  const l = t.options.useScrollendEvent && at ? () => {
  } : Yt(
    n,
    () => {
      s(i, !1);
    },
    t.options.isScrollingResetDelay
  ), a = (x) => () => {
    const { horizontal: E, isRtl: I } = t.options;
    i = E ? o.scrollLeft * (I && -1 || 1) : o.scrollTop, l(), s(i, x);
  }, d = a(!0), f = a(!1);
  o.addEventListener("scroll", d, st);
  const b = t.options.useScrollendEvent && at;
  return b && o.addEventListener("scrollend", f, st), () => {
    o.removeEventListener("scroll", d), b && o.removeEventListener("scrollend", f);
  };
}, Gt = (t, s, o) => {
  if (s?.borderBoxSize) {
    const n = s.borderBoxSize[0];
    if (n)
      return Math.round(
        n[o.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return t[o.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Ut = (t, {
  adjustments: s = 0,
  behavior: o
}, n) => {
  var i, l;
  const a = t + s;
  (l = (i = n.scrollElement) == null ? void 0 : i.scrollTo) == null || l.call(i, {
    [n.options.horizontal ? "left" : "top"]: a,
    behavior: o
  });
};
class Kt {
  constructor(s) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var o, n, i;
      return ((i = (n = (o = this.targetWindow) == null ? void 0 : o.performance) == null ? void 0 : n.now) == null ? void 0 : i.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let o = null;
      const n = () => o || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : o = new this.targetWindow.ResizeObserver((i) => {
        i.forEach((l) => {
          const a = () => {
            const d = l.target, f = this.indexFromElement(d);
            if (!d.isConnected) {
              this.observer.unobserve(d);
              return;
            }
            this.shouldMeasureDuringScroll(f) && this.resizeItem(
              f,
              this.options.measureElement(d, l, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
        });
      }));
      return {
        disconnect: () => {
          var i;
          (i = n()) == null || i.disconnect(), o = null;
        },
        observe: (i) => {
          var l;
          return (l = n()) == null ? void 0 : l.observe(i, { box: "border-box" });
        },
        unobserve: (i) => {
          var l;
          return (l = n()) == null ? void 0 : l.unobserve(i);
        }
      };
    })(), this.range = null, this.setOptions = (o) => {
      Object.entries(o).forEach(([n, i]) => {
        typeof i > "u" && delete o[n];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Xt,
        rangeExtractor: _t,
        onChange: () => {
        },
        measureElement: Gt,
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
      var n, i;
      (i = (n = this.options).onChange) == null || i.call(n, this, o);
    }, this.maybeNotify = Ie(
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
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((o = this.scrollElement) == null ? void 0 : o.window) ?? null, this.elementsCache.forEach((i) => {
          this.observer.observe(i);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (i) => {
            this.scrollRect = i, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (i, l) => {
            this.scrollAdjustments = 0, this.scrollDirection = l ? this.getScrollOffset() < i ? "forward" : "backward" : null, this.scrollOffset = i, this.isScrolling = l, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (o, n) => {
      const i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
      for (let a = n - 1; a >= 0; a--) {
        const d = o[a];
        if (i.has(d.lane))
          continue;
        const f = l.get(
          d.lane
        );
        if (f == null || d.end > f.end ? l.set(d.lane, d) : d.end < f.end && i.set(d.lane, !0), i.size === this.options.lanes)
          break;
      }
      return l.size === this.options.lanes ? Array.from(l.values()).sort((a, d) => a.end === d.end ? a.index - d.index : a.end - d.end)[0] : void 0;
    }, this.getMeasurementOptions = Ie(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (o, n, i, l, a, d) => (this.prevLanes !== void 0 && this.prevLanes !== d && (this.lanesChangedFlag = !0), this.prevLanes = d, this.pendingMeasuredCacheIndexes = [], {
        count: o,
        paddingStart: n,
        scrollMargin: i,
        getItemKey: l,
        enabled: a,
        lanes: d
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ie(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: o, paddingStart: n, scrollMargin: i, getItemKey: l, enabled: a, lanes: d }, f) => {
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > o)
          for (const I of this.laneAssignments.keys())
            I >= o && this.laneAssignments.delete(I);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((I) => {
          this.itemSizeCache.set(I.key, I.size);
        }));
        const b = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === o && (this.lanesSettling = !1);
        const x = this.measurementsCache.slice(0, b), E = new Array(d).fill(
          void 0
        );
        for (let I = 0; I < b; I++) {
          const B = x[I];
          B && (E[B.lane] = I);
        }
        for (let I = b; I < o; I++) {
          const B = l(I), W = this.laneAssignments.get(I);
          let m, v;
          if (W !== void 0 && this.options.lanes > 1) {
            m = W;
            const z = E[m], M = z !== void 0 ? x[z] : void 0;
            v = M ? M.end + this.options.gap : n + i;
          } else {
            const z = this.options.lanes === 1 ? x[I - 1] : this.getFurthestMeasurement(x, I);
            v = z ? z.end + this.options.gap : n + i, m = z ? z.lane : I % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(I, m);
          }
          const T = f.get(B), c = typeof T == "number" ? T : this.options.estimateSize(I), F = v + c;
          x[I] = {
            index: I,
            start: v,
            size: c,
            end: F,
            key: B,
            lane: m
          }, E[m] = I;
        }
        return this.measurementsCache = x, x;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ie(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (o, n, i, l) => this.range = o.length > 0 && n > 0 ? qt({
        measurements: o,
        outerSize: n,
        scrollOffset: i,
        lanes: l
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ie(
      () => {
        let o = null, n = null;
        const i = this.calculateRange();
        return i && (o = i.startIndex, n = i.endIndex), this.maybeNotify.updateDeps([this.isScrolling, o, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          o,
          n
        ];
      },
      (o, n, i, l, a) => l === null || a === null ? [] : o({
        startIndex: l,
        endIndex: a,
        overscan: n,
        count: i
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (o) => {
      const n = this.options.indexAttribute, i = o.getAttribute(n);
      return i ? parseInt(i, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (o) => {
      var n;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const i = this.scrollState.index ?? ((n = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : n.index);
      if (i !== void 0 && this.range) {
        const l = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), a = Math.max(0, i - l), d = Math.min(
          this.options.count - 1,
          i + l
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
      const n = this.indexFromElement(o), i = this.options.getItemKey(n), l = this.elementsCache.get(i);
      l !== o && (l && this.observer.unobserve(l), this.observer.observe(o), this.elementsCache.set(i, o)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(o, void 0, this));
    }, this.resizeItem = (o, n) => {
      var i;
      const l = this.measurementsCache[o];
      if (!l) return;
      const a = this.itemSizeCache.get(l.key) ?? l.size, d = n - a;
      d !== 0 && (((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(l, d, this) : l.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", d), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += d,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(l.index), this.itemSizeCache = new Map(this.itemSizeCache.set(l.key, n)), this.notify(!1));
    }, this.getVirtualItems = Ie(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (o, n) => {
        const i = [];
        for (let l = 0, a = o.length; l < a; l++) {
          const d = o[l], f = n[d];
          i.push(f);
        }
        return i;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (o) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return rt(
          n[mt(
            0,
            n.length - 1,
            (i) => rt(n[i]).start,
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
    }, this.getOffsetForAlignment = (o, n, i = 0) => {
      if (!this.scrollElement) return 0;
      const l = this.getSize(), a = this.getScrollOffset();
      n === "auto" && (n = o >= a + l ? "end" : "start"), n === "center" ? o += (i - l) / 2 : n === "end" && (o -= l);
      const d = this.getMaxScrollOffset();
      return Math.max(Math.min(d, o), 0);
    }, this.getOffsetForIndex = (o, n = "auto") => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      const i = this.getSize(), l = this.getScrollOffset(), a = this.measurementsCache[o];
      if (!a) return;
      if (n === "auto")
        if (a.end >= l + i - this.options.scrollPaddingEnd)
          n = "end";
        else if (a.start <= l + this.options.scrollPaddingStart)
          n = "start";
        else
          return [l, n];
      if (n === "end" && o === this.options.count - 1)
        return [this.getMaxScrollOffset(), n];
      const d = n === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(d, n, a.size),
        n
      ];
    }, this.scrollToOffset = (o, { align: n = "start", behavior: i = "auto" } = {}) => {
      const l = this.getOffsetForAlignment(o, n), a = this.now();
      this.scrollState = {
        index: null,
        align: n,
        behavior: i,
        startedAt: a,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: i }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (o, {
      align: n = "auto",
      behavior: i = "auto"
    } = {}) => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      const l = this.getOffsetForIndex(o, n);
      if (!l)
        return;
      const [a, d] = l, f = this.now();
      this.scrollState = {
        index: o,
        align: d,
        behavior: i,
        startedAt: f,
        lastTargetOffset: a,
        stableFrames: 0
      }, this._scrollToOffset(a, { adjustments: void 0, behavior: i }), this.scheduleScrollReconcile();
    }, this.scrollBy = (o, { behavior: n = "auto" } = {}) => {
      const i = this.getScrollOffset() + o, l = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: n,
        startedAt: l,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: n }), this.scheduleScrollReconcile();
    }, this.getTotalSize = () => {
      var o;
      const n = this.getMeasurements();
      let i;
      if (n.length === 0)
        i = this.options.paddingStart;
      else if (this.options.lanes === 1)
        i = ((o = n[n.length - 1]) == null ? void 0 : o.end) ?? 0;
      else {
        const l = Array(this.options.lanes).fill(null);
        let a = n.length - 1;
        for (; a >= 0 && l.some((d) => d === null); ) {
          const d = n[a];
          l[d.lane] === null && (l[d.lane] = d.end), a--;
        }
        i = Math.max(...l.filter((d) => d !== null));
      }
      return Math.max(
        i - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (o, {
      adjustments: n,
      behavior: i
    }) => {
      this.options.scrollToFn(o, { behavior: i, adjustments: n }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(s);
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
    const n = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, i = n ? n[0] : this.scrollState.lastTargetOffset, l = 1, a = i !== this.scrollState.lastTargetOffset;
    if (!a && jt(i, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= l) {
        this.scrollState = null;
        return;
      }
    } else
      this.scrollState.stableFrames = 0, a && (this.scrollState.lastTargetOffset = i, this.scrollState.behavior = "auto", this._scrollToOffset(i, {
        adjustments: void 0,
        behavior: "auto"
      }));
    this.scheduleScrollReconcile();
  }
}
const mt = (t, s, o, n) => {
  for (; t <= s; ) {
    const i = (t + s) / 2 | 0, l = o(i);
    if (l < n)
      t = i + 1;
    else if (l > n)
      s = i - 1;
    else
      return i;
  }
  return t > 0 ? t - 1 : 0;
};
function qt({
  measurements: t,
  outerSize: s,
  scrollOffset: o,
  lanes: n
}) {
  const i = t.length - 1, l = (f) => t[f].start;
  if (t.length <= n)
    return {
      startIndex: 0,
      endIndex: i
    };
  let a = mt(
    0,
    i,
    l,
    o
  ), d = a;
  if (n === 1)
    for (; d < i && t[d].end < o + s; )
      d++;
  else if (n > 1) {
    const f = Array(n).fill(0);
    for (; d < i && f.some((x) => x < o + s); ) {
      const x = t[d];
      f[x.lane] = x.end, d++;
    }
    const b = Array(n).fill(o + s);
    for (; a >= 0 && b.some((x) => x >= o); ) {
      const x = t[a];
      b[x.lane] = x.start, a--;
    }
    a = Math.max(0, a - a % n), d = Math.min(i, d + (n - 1 - d % n));
  }
  return { startIndex: a, endIndex: d };
}
const lt = typeof document < "u" ? Ve.useLayoutEffect : Ve.useEffect;
function Jt({
  useFlushSync: t = !0,
  ...s
}) {
  const o = Ve.useReducer(() => ({}), {})[1], n = {
    ...s,
    onChange: (l, a) => {
      var d;
      t && a ? Bt(o) : o(), (d = s.onChange) == null || d.call(s, l, a);
    }
  }, [i] = Ve.useState(
    () => new Kt(n)
  );
  return i.setOptions(n), lt(() => i._didMount(), []), lt(() => i._willUpdate()), i;
}
function tt(t) {
  return Jt({
    observeElementRect: Vt,
    observeElementOffset: Ht,
    scrollToFn: Ut,
    ...t
  });
}
const yt = 864e5, ae = (t, s) => new Date(t.getTime() + s * yt), Me = (t, s) => Math.round((s.getTime() - t.getTime()) / yt), dt = (t) => new Date(t.getFullYear(), t.getMonth(), 1), Je = (t) => new Date(t.getFullYear(), t.getMonth() + 1, 0), bt = (t) => {
  if (!t) return "en-US";
  try {
    return new Intl.DateTimeFormat(t).resolvedOptions().locale;
  } catch {
    return "en-US";
  }
}, ie = (t, s = "en-US") => new Intl.DateTimeFormat(bt(s), {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
}).format(t), ct = (t, s = "en") => new Intl.DateTimeFormat(bt(s), { month: "long" }).format(t).toUpperCase();
function Qt() {
  const {
    props: t,
    t: s,
    displayRows: o,
    leftBodyRef: n,
    handleLeftScroll: i,
    toggleProject: l,
    toggleGroup: a,
    hoveredTaskId: d,
    setHoveredTaskId: f,
    selectedTaskId: b,
    setSelectedTaskId: x,
    delayedIds: E,
    criticalIds: I,
    relatedIds: B,
    setActivePinboardTask: W
  } = Te(), m = (M) => ({
    id: M.id,
    name: M.name,
    start: M.start,
    end: M.end,
    type: M.originalType === "step" ? "task" : "milestone",
    progress: M.progress
  }), v = tt({
    count: o.length,
    getScrollElement: () => n.current,
    estimateSize: () => te,
    overscan: 12
  }), T = v.getVirtualItems(), c = Math.max(v.getTotalSize(), 400) + 80, F = se(
    () => o.filter((M) => M.kind === "task").map((M) => M.task.id),
    [o]
  ), z = Z((M, u) => {
    const h = F.indexOf(M);
    if (h < 0) return;
    const w = Math.min(Math.max(0, h + u), F.length - 1), $ = F[w];
    $ && x($);
  }, [F, x]);
  return /* @__PURE__ */ p("div", { style: { width: $t, flexShrink: 0, borderRight: `1px solid ${e.border}`, display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ p(
      "div",
      {
        style: {
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          height: Wt,
          background: e.headerBg,
          borderBottom: `1px solid ${e.border}`
        },
        children: [
          /* @__PURE__ */ r("div", { style: { flex: 1, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: e.textSecondary }, children: s("charts.gantt.stepName", "STEP NAME") }),
          /* @__PURE__ */ r("div", { style: { width: 80, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", color: e.textSecondary }, children: s("charts.gantt.start", "START") }),
          /* @__PURE__ */ r("div", { style: { width: 80, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", color: e.textSecondary }, children: s("charts.gantt.end", "END") })
        ]
      }
    ),
    /* @__PURE__ */ r(
      "div",
      {
        ref: n,
        onScroll: i,
        className: "zg-no-scrollbar",
        style: { overflowY: "auto", overflowX: "hidden", flex: 1 },
        role: "grid",
        "aria-rowcount": o.length,
        children: /* @__PURE__ */ r("div", { style: { height: c, position: "relative" }, children: T.map((M) => {
          const u = o[M.index];
          if (!u) return null;
          const h = {
            position: "absolute",
            top: M.start,
            left: 0,
            width: "100%",
            height: te
          };
          if (u.kind === "projectHeader")
            return /* @__PURE__ */ r(
              "div",
              {
                style: {
                  ...h,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  borderBottom: `1.5px solid ${e.groupBorderWeak}`,
                  background: e.groupSoft
                },
                onClick: () => l(u.projectId),
                onKeyDown: (P) => {
                  (P.key === "Enter" || P.key === " ") && (P.preventDefault(), l(u.projectId));
                },
                role: "button",
                tabIndex: 0,
                "aria-label": `Toggle project ${u.projectTitle}`,
                "aria-expanded": !u.collapsed,
                children: /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  u.collapsed ? /* @__PURE__ */ r(nt, { size: 15, style: { color: e.group, flexShrink: 0 } }) : /* @__PURE__ */ r(Ze, { size: 15, style: { color: e.group, flexShrink: 0 } }),
                  /* @__PURE__ */ r("span", { style: {
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: e.group,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }, children: u.projectTitle })
                ] })
              },
              `ph-${u.projectId}`
            );
          if (u.kind === "group") {
            const P = u.projectId ? `${u.projectId}-${u.groupType}` : u.groupType;
            return /* @__PURE__ */ r(
              "div",
              {
                style: {
                  ...h,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  borderBottom: `1px solid ${e.border}`,
                  background: e.headerBg
                },
                onClick: () => a(P),
                onKeyDown: (oe) => {
                  (oe.key === "Enter" || oe.key === " ") && (oe.preventDefault(), a(P));
                },
                role: "button",
                tabIndex: 0,
                "aria-label": `Toggle group ${u.label}`,
                "aria-expanded": !u.collapsed,
                children: /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  u.collapsed ? /* @__PURE__ */ r(nt, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ r(Ze, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }),
                  /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: e.textTitle }, children: s(`gantt.group.${u.groupType}`, u.label) }),
                  /* @__PURE__ */ r("span", { style: { fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 9999, background: e.groupSoftStrong, color: e.textSecondary }, children: u.count })
                ] })
              },
              `g-${P}`
            );
          }
          const w = u.task, $ = b === w.id, N = d === w.id, K = w.originalType !== "step", g = E.has(w.id), q = I.has(w.id), A = b !== null && w.id !== b && !B.has(w.id), ne = b !== null && B.has(w.id), J = g ? e.dangerBgSoft : $ ? e.groupLight : ne ? e.groupLightStrong : N ? e.pageBg : e.surface;
          return /* @__PURE__ */ p(
            "div",
            {
              style: {
                ...h,
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                cursor: "pointer",
                transition: "opacity 0.18s, background 0.15s",
                borderBottom: `1px solid ${e.borderLight}`,
                background: J,
                borderLeft: $ ? `3px solid ${e.group}` : ne ? `3px solid ${e.groupGlow}` : q ? `3px solid ${e.today}` : void 0,
                opacity: A ? 0.3 : 1
              },
              onClick: () => x((P) => P === w.id ? null : w.id),
              onDoubleClick: () => t.onTaskClick?.(m(w)),
              onMouseEnter: () => f(w.id),
              onMouseLeave: () => f(null),
              onKeyDown: (P) => {
                if (P.key === "Enter") {
                  P.preventDefault(), t.onTaskClick?.(m(w));
                  return;
                }
                if (P.key === " ") {
                  P.preventDefault(), x((oe) => oe === w.id ? null : w.id);
                  return;
                }
                if (P.key === "ArrowDown") {
                  P.preventDefault(), z(w.id, 1);
                  return;
                }
                P.key === "ArrowUp" && (P.preventDefault(), z(w.id, -1));
              },
              role: "button",
              tabIndex: 0,
              "aria-selected": $,
              "aria-label": `Task ${w.name}`,
              children: [
                /* @__PURE__ */ p("div", { style: { flex: 1, display: "flex", alignItems: "center", gap: 8, minWidth: 0, paddingRight: 8 }, children: [
                  w.originalType === "step" && /* @__PURE__ */ r("div", { style: { flexShrink: 0, borderRadius: 4, width: 14, height: 14, background: ce[w.colorIdx ?? 0].bar, border: `1.5px solid ${ce[w.colorIdx ?? 0].barBorder}` } }),
                  w.originalType === "milestone" && /* @__PURE__ */ r("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: e.milestoneRingSoft, border: `1.5px solid ${e.milestoneRing}` }, children: /* @__PURE__ */ r(Be, { size: 11, style: { color: e.milestone } }) }),
                  w.originalType === "event" && /* @__PURE__ */ r("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: e.eventSoft, border: `1.5px solid ${e.eventBorderSoft}` }, children: /* @__PURE__ */ r(Le, { size: 11, style: { color: e.event } }) }),
                  /* @__PURE__ */ r("div", { style: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }, children: /* @__PURE__ */ r(
                    "span",
                    {
                      style: {
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.25,
                        color: $ ? e.group : g ? e.today : e.textPrimary,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: w.name
                    }
                  ) }),
                  (w.attachedNotes?.length || 0) > 0 && /* @__PURE__ */ p(
                    "button",
                    {
                      className: "zg-note-badge-btn",
                      "aria-label": `Open ${w.attachedNotes?.length} linked notes`,
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
                      onClick: (P) => {
                        P.stopPropagation(), W(w);
                      },
                      children: [
                        /* @__PURE__ */ r(He, { size: 12 }),
                        w.attachedNotes?.length
                      ]
                    }
                  ),
                  g && /* @__PURE__ */ r(zt, { size: 12, style: { flexShrink: 0, color: e.today } })
                ] }),
                /* @__PURE__ */ r("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: g ? e.today : e.textMuted }, children: ie(w.start, t.locale) }),
                /* @__PURE__ */ r("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: g ? e.today : e.textMuted }, children: K ? "—" : ie(w.end, t.locale) })
              ]
            },
            w.id
          );
        }) })
      }
    )
  ] });
}
function Zt(t, s, o = "en") {
  const n = s === "day" ? Pt : Ot, i = (m, v) => {
    const T = [], c = (/* @__PURE__ */ new Date()).toDateString();
    let F = -1;
    for (let z = 0; z < v; z++) {
      const M = ae(m, z), u = M.toDateString() === c;
      u && (F = z), T.push({
        date: M,
        isToday: u,
        isWeekend: M.getDay() === 0 || M.getDay() === 6
      });
    }
    return { daysArr: T, todayIndex: F };
  };
  if (t.length === 0) {
    const m = /* @__PURE__ */ new Date(), v = dt(m), T = Je(m), c = Me(v, T) + 1, { daysArr: F, todayIndex: z } = i(v, c);
    return {
      start: v,
      end: T,
      totalDays: c,
      dayWidth: n,
      totalWidth: c * n,
      months: [{ date: v, label: `${ct(v, o)} ${v.getFullYear()}`, startDay: 0, days: c, width: c * n }],
      years: [{ label: v.getFullYear().toString(), width: c * n }],
      days: F,
      todayIndex: z
    };
  }
  let l = new Date(t[0].start), a = new Date(t[0].end);
  t.forEach((m) => {
    m.start < l && (l = new Date(m.start)), m.end > a && (a = new Date(m.end));
  });
  const d = dt(ae(l, -14)), f = Je(ae(a, 14)), b = Me(d, f) + 1, x = [];
  let E = new Date(d);
  for (; E <= f; ) {
    const m = Je(E), v = m > f ? f : m, T = Me(d, E), c = Me(E, v) + 1;
    x.push({
      date: new Date(E),
      label: `${ct(E, o)} ${E.getFullYear()}`,
      startDay: T,
      days: c,
      width: c * n
    }), E = new Date(E.getFullYear(), E.getMonth() + 1, 1);
  }
  const { daysArr: I, todayIndex: B } = i(d, b), W = [];
  if (s === "month") {
    let m = "", v = 0;
    for (const T of x) {
      const c = T.date.getFullYear().toString();
      c !== m ? (m && W.push({ label: m, width: v * n }), m = c, v = T.days) : v += T.days;
    }
    m && W.push({ label: m, width: v * n });
  }
  return { start: d, end: f, totalDays: b, dayWidth: n, totalWidth: b * n, months: x, years: W, days: I, todayIndex: B };
}
function ue(t, s) {
  return Me(s.start, t) * s.dayWidth;
}
function en({
  task: t,
  x: s,
  y: o,
  w: n,
  progW: i,
  isHov: l,
  isDrag: a,
  isResize: d,
  isCritical: f,
  isDelayed: b,
  isConnectTarget: x,
  showDots: E,
  isBarDimmed: I,
  isBarHighlighted: B,
  commonEvents: W,
  handleResizeMouseDown: m,
  handleResizeTouchStart: v,
  handleConnectDotMouseDown: T,
  handleConnectDotTouchStart: c
}) {
  const { timeline: F, viewMode: z, props: M } = Te();
  if (t.originalType === "step") {
    const u = ce[t.colorIdx ?? 0], h = o + (te - de) / 2, w = !!(t.previsionStart && t.previsionEnd), $ = w ? ue(t.previsionStart, F) : 0, N = w ? Math.max(ue(t.previsionEnd, F) - $, z === "month" ? F.dayWidth : 6) : 0, K = h + de + 3;
    return /* @__PURE__ */ p(ge, { children: [
      w && /* @__PURE__ */ r(
        "div",
        {
          title: `Previsto: ${ie(t.previsionStart, M.locale)} → ${ie(t.previsionEnd, M.locale)}`,
          style: {
            position: "absolute",
            left: $,
            top: K,
            width: N,
            height: 5,
            borderRadius: 3,
            background: `${u.progress}33`,
            border: `1.5px solid ${u.progress}66`,
            boxShadow: `inset 0 0 0 1px ${u.progress}22`,
            pointerEvents: "none",
            zIndex: 5
          }
        }
      ),
      /* @__PURE__ */ p(
        "div",
        {
          "data-task-id": t.id,
          ...W,
          role: "button",
          tabIndex: 0,
          "aria-label": `Task bar ${t.name}`,
          style: {
            position: "absolute",
            left: s,
            top: h,
            width: n,
            height: de,
            borderRadius: de / 2,
            background: b ? e.delayedTaskBg : u.bar,
            border: f ? `2px solid ${e.today}` : b ? `1.5px solid ${e.todayStrong}` : `1.5px solid ${u.barBorder}`,
            cursor: a || d ? "grabbing" : "grab",
            zIndex: l || x ? 20 : 10,
            boxShadow: x ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.groupGlowSoft}` : f ? `0 0 0 1px ${e.todayMid}, 0 3px 12px ${e.todaySoft}` : B && !l ? `0 0 0 2px ${e.groupGlowStrong}, 0 3px 14px ${e.groupGlowSoft}` : l ? `0 3px 12px ${u.progress}22` : "none",
            transform: l ? "scaleY(1.06)" : "scaleY(1)",
            opacity: I ? 0.15 : 1,
            transition: a || d ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
            overflow: "visible"
          },
          children: [
            /* @__PURE__ */ p("div", { style: { position: "absolute", left: 0, top: 0, width: n, height: "100%", borderRadius: de / 2, overflow: "hidden", pointerEvents: "none" }, children: [
              /* @__PURE__ */ r("div", { style: {
                position: "absolute",
                left: 0,
                top: 0,
                width: i,
                height: "100%",
                background: b ? `linear-gradient(90deg, ${e.today}, ${e.todayStrong})` : `linear-gradient(90deg, ${u.progress}, ${u.progress}cc)`,
                borderRadius: `${de / 2}px 0 0 ${de / 2}px`,
                transition: a || d ? "none" : "width 0.3s"
              } }),
              n > 50 && /* @__PURE__ */ p("span", { style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: t.progress > 50 ? e.white : b ? e.today : u.progress,
                zIndex: 1,
                pointerEvents: "none"
              }, children: [
                Math.round(t.progress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { onMouseDown: (g) => m(g, t, "left"), onTouchStart: (g) => v(g, t, "left"), style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${de / 2}px 0 0 ${de / 2}px` } }),
            /* @__PURE__ */ r("div", { onMouseDown: (g) => m(g, t, "right"), onTouchStart: (g) => v(g, t, "right"), style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${de / 2}px ${de / 2}px 0` } }),
            E && /* @__PURE__ */ p(ge, { children: [
              /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (g) => T(g, t, "left"), onTouchStart: (g) => c(g, t, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
              /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (g) => T(g, t, "right"), onTouchStart: (g) => c(g, t, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } })
            ] })
          ]
        }
      )
    ] });
  }
  if (t.originalType === "milestone") {
    const u = o + (te - ke) / 2;
    return /* @__PURE__ */ p(
      "div",
      {
        "data-task-id": t.id,
        ...W,
        role: "button",
        tabIndex: 0,
        "aria-label": `Milestone ${t.name}`,
        style: {
          position: "absolute",
          left: s - 6,
          top: u,
          height: ke,
          minWidth: et,
          borderRadius: ke / 2,
          background: f ? e.criticalPillBg : e.milestonePillBg,
          border: x ? `2px solid ${e.group}` : f ? `2px solid ${e.today}` : `1.5px solid ${e.milestoneRing}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: a ? "grabbing" : "grab",
          zIndex: l || x ? 20 : 10,
          boxShadow: x ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.groupGlowSoft}` : f ? `0 0 0 1px ${e.todayMid}, 0 3px 12px ${e.todaySoft}` : B && !l ? `0 0 0 2px ${e.groupGlowStrong}, 0 3px 14px ${e.groupGlowSoft}` : l ? `0 3px 12px ${e.milestoneRingSoft}` : e.shadowSoft,
          opacity: I ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: l ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ r("div", { style: { width: 20, height: 20, borderRadius: "50%", background: f ? e.today : e.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(Be, { size: 11, color: e.white, strokeWidth: 2.5 }) }),
          /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: 600, color: f ? e.today : e.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: t.name }),
          t.progress >= 100 && /* @__PURE__ */ r("span", { style: { fontSize: 9, fontWeight: 700, color: e.white, background: e.milestoneRing, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          E && /* @__PURE__ */ p(ge, { children: [
            /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (h) => T(h, t, "left"), onTouchStart: (h) => c(h, t, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (h) => T(h, t, "right"), onTouchStart: (h) => c(h, t, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (t.originalType === "event") {
    const u = o + (te - ke) / 2;
    return /* @__PURE__ */ p(
      "div",
      {
        "data-task-id": t.id,
        ...W,
        role: "button",
        tabIndex: 0,
        "aria-label": `Event ${t.name}`,
        style: {
          position: "absolute",
          left: s - 6,
          top: u,
          height: ke,
          minWidth: et,
          borderRadius: ke / 2,
          background: f ? e.criticalPillBg : e.eventPillBg,
          border: x ? `2px solid ${e.group}` : f ? `2px solid ${e.today}` : `1.5px solid ${e.event}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: a ? "grabbing" : "grab",
          zIndex: l || x ? 20 : 10,
          boxShadow: x ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.groupGlowSoft}` : f ? `0 0 0 1px ${e.todayMid}, 0 3px 12px ${e.todaySoft}` : B && !l ? `0 0 0 2px ${e.groupGlowStrong}, 0 3px 14px ${e.groupGlowSoft}` : l ? `0 3px 12px ${e.eventBorderSoft}` : e.shadowSoft,
          opacity: I ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: l ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ r("div", { style: { width: 20, height: 20, borderRadius: "50%", background: f ? e.today : e.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(Le, { size: 11, color: e.white, strokeWidth: 2.5 }) }),
          /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: 600, color: f ? e.today : e.event, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: t.name }),
          t.progress >= 100 && /* @__PURE__ */ r("span", { style: { fontSize: 9, fontWeight: 700, color: e.white, background: e.event, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          E && /* @__PURE__ */ p(ge, { children: [
            /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (h) => T(h, t, "left"), onTouchStart: (h) => c(h, t, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (h) => T(h, t, "right"), onTouchStart: (h) => c(h, t, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (t.originalType === "note") {
    const h = o + 4, w = t.noteColor || e.noteDefaultBg, $ = t.filesCount || 0;
    return /* @__PURE__ */ p(
      "div",
      {
        "data-task-id": t.id,
        ...W,
        role: "button",
        tabIndex: 0,
        "aria-label": `Note ${t.name}`,
        style: {
          position: "absolute",
          left: s,
          top: h,
          width: 148,
          minHeight: 72,
          background: w,
          borderRadius: 3,
          cursor: a ? "grabbing" : "grab",
          zIndex: l || x ? 20 : 10,
          boxShadow: x ? `0 0 0 2px ${e.group}, ${e.shadowStickyStrong}` : B && !l ? `0 0 0 2px ${e.groupGlowStrong}, ${e.shadowStickyHover}` : l ? e.shadowStickyHover : e.shadowSticky,
          opacity: I ? 0.2 : 1,
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
            /* @__PURE__ */ r("span", { style: { fontSize: 9, fontWeight: 500, color: e.inkSoft4 }, children: ie(t.start, M.locale) }),
            $ > 0 && /* @__PURE__ */ p("span", { style: {
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 9,
              color: e.inkSoft4
            }, children: [
              /* @__PURE__ */ r(He, { size: 8 }),
              " ",
              $
            ] })
          ] }),
          E && /* @__PURE__ */ p(ge, { children: [
            /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (N) => T(N, t, "left"), onTouchStart: (N) => c(N, t, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ r("div", { "data-task-id": t.id, onMouseDown: (N) => T(N, t, "right"), onTouchStart: (N) => c(N, t, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: `2.5px solid ${e.connectorDotBorder}`, boxShadow: e.shadowLarge, cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  return null;
}
function tn({ arrows: t }) {
  const {
    arrows: s,
    hoveredTaskId: o,
    selectedTaskId: n,
    relatedIds: i
  } = Te();
  return /* @__PURE__ */ r(ge, { children: (t || s).map((a, d) => {
    const f = o === a.predId || o === a.succId, b = !n || a.predId === n || a.succId === n || i.has(a.predId) || i.has(a.succId), x = n !== null && b, E = f ? e.arrowHover : x ? e.group : e.arrow;
    return /* @__PURE__ */ p("g", { style: { opacity: b ? x ? 1 : void 0 : 0.08, transition: "opacity 0.18s" }, children: [
      /* @__PURE__ */ r(
        "path",
        {
          d: a.path,
          fill: "none",
          stroke: E,
          strokeWidth: x ? 2.5 : f ? 2 : 1.5,
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
const _e = (t) => ({
  id: t.id,
  name: t.name,
  start: t.start,
  end: t.end,
  type: t.originalType === "step" ? "task" : t.originalType,
  progress: t.progress
}), Ae = (t, s) => {
  switch (t) {
    case "step":
      return /* @__PURE__ */ r("div", { style: { width: 12, height: 12, borderRadius: 2, background: ce[s ?? 0].bar, border: `1.5px solid ${ce[s ?? 0].barBorder}`, flexShrink: 0 } });
    case "milestone":
      return /* @__PURE__ */ r("div", { style: { width: 16, height: 16, borderRadius: "50%", background: e.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(Be, { size: 8, color: e.white }) });
    case "event":
      return /* @__PURE__ */ r("div", { style: { width: 16, height: 16, borderRadius: "50%", background: e.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(Le, { size: 8, color: e.white }) });
    case "note":
      return /* @__PURE__ */ r("div", { style: { width: 12, height: 14, background: e.note, borderRadius: 2, boxShadow: e.shadowSmall, flexShrink: 0 } });
    default:
      return null;
  }
};
function nn() {
  const {
    props: t,
    t: s,
    viewMode: o,
    timeline: n,
    displayRows: i,
    dragState: l,
    resizeState: a,
    connectState: d,
    pendingConnection: f,
    setPendingConnection: b,
    depModalType: x,
    setDepModalType: E,
    depModalLag: I,
    setDepModalLag: B,
    depCreating: W,
    deletingDepId: m,
    setDeletingDepId: v,
    chartMenu: T,
    setChartMenu: c,
    rightBodyRef: F,
    timeHeaderRef: z,
    handleChartMouseDown: M,
    handleChartTouchStart: u,
    handleChartWheel: h,
    openChartMenu: w,
    handleRightScroll: $,
    hoveredTaskId: N,
    setHoveredTaskId: K,
    selectedTaskId: g,
    setSelectedTaskId: q,
    tooltip: A,
    setTooltip: ne,
    popupState: J,
    setPopupState: P,
    arrows: oe,
    criticalIds: Ge,
    delayedIds: Ue,
    relatedIds: fe,
    handleBarMouseDown: Ke,
    handleBarTouchStart: ze,
    handleResizeMouseDown: We,
    handleResizeTouchStart: Ee,
    handleConnectDotMouseDown: $e,
    handleConnectDotTouchStart: De,
    handleCreateDependency: Pe
  } = Te(), {
    onViewStage: Se,
    onEditStage: Oe,
    onDeleteStage: Ne,
    onDeleteDependency: V,
    onAddNewStage: U,
    onAddMilestone: je,
    onAddEvent: Ye,
    onAddNote: Xe
  } = t, Ce = (k, X) => Math.round((X.getTime() - k.getTime()) / 864e5) + 1, Re = tt({
    count: i.length,
    getScrollElement: () => F.current,
    estimateSize: () => te,
    overscan: 12
  }), me = Re.getVirtualItems(), ye = tt({
    horizontal: !0,
    count: n.days.length,
    getScrollElement: () => F.current,
    estimateSize: () => n.dayWidth,
    overscan: 10
  }).getVirtualItems(), le = Math.max(Re.getTotalSize(), 400) + 80, re = se(() => {
    const k = /* @__PURE__ */ new Set();
    for (const X of me) {
      const O = i[X.index];
      O?.kind === "task" && k.add(O.task.id);
    }
    return k;
  }, [me, i]), be = se(
    () => oe.filter((k) => re.has(k.predId) || re.has(k.succId)),
    [oe, re]
  ), we = () => P({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  return /* @__PURE__ */ p("div", { style: { flex: 1, width: "100%", background: "var(--zg-surface-alt)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", borderLeft: `1px solid ${e.borderLight}` }, children: [
    /* @__PURE__ */ r(
      "div",
      {
        ref: z,
        style: {
          boxSizing: "border-box",
          height: Fe * 2,
          background: e.headerBg,
          borderBottom: `1px solid ${e.borderLight}`,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          boxShadow: e.shadowTiny
        },
        onWheel: h,
        children: /* @__PURE__ */ p("div", { style: { width: n.totalWidth, height: "100%", position: "relative" }, children: [
          /* @__PURE__ */ p("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: Fe, display: "flex" }, children: [
            o === "day" && n.months.map((k, X) => /* @__PURE__ */ r("div", { style: { width: k.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ r("span", { style: { fontSize: 13, fontWeight: 700, color: e.textTitle, letterSpacing: "0.02em" }, children: k.label }) }, X)),
            o === "month" && n.years?.map((k, X) => /* @__PURE__ */ r("div", { style: { width: k.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ r("span", { style: { fontSize: 13, fontWeight: 700, color: e.textTitle, letterSpacing: "0.02em" }, children: k.label }) }, X))
          ] }),
          /* @__PURE__ */ p("div", { style: { position: "absolute", top: Fe, left: 0, right: 0, height: Fe, display: "flex" }, children: [
            o === "day" && /* @__PURE__ */ r("div", { style: { width: n.totalWidth, height: "100%", position: "relative" }, children: ye.map((k) => {
              const X = n.days[k.index];
              if (!X) return null;
              const O = X.isToday;
              return /* @__PURE__ */ r(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: k.start,
                    width: k.size,
                    height: "100%",
                    borderRight: `1px solid ${e.borderLight}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: O ? 800 : 500, color: O ? e.today : e.textSecondary, letterSpacing: "-0.03em" }, children: X.date.getDate().toString().padStart(2, "0") })
                },
                `day-${k.index}`
              );
            }) }),
            o === "month" && n.months.map((k, X) => /* @__PURE__ */ r("div", { style: { width: k.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: 600, color: e.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em" }, children: k.label.substring(0, 3) }) }, X))
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ r(
      "div",
      {
        ref: F,
        className: "zg-no-scrollbar",
        style: { flex: 1, overflow: "auto", background: "var(--zg-surface)", position: "relative" },
        onScroll: $,
        onMouseDown: M,
        onTouchStart: u,
        onWheel: h,
        onContextMenu: w,
        children: /* @__PURE__ */ p("div", { style: { width: n.totalWidth, height: le, position: "relative" }, children: [
          /* @__PURE__ */ p("svg", { width: n.totalWidth, height: le, style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" }, children: [
            /* @__PURE__ */ p("defs", { children: [
              /* @__PURE__ */ r("pattern", { id: "gantt-y-lines", x: "0", y: "0", width: n.dayWidth, height: te, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ r("line", { x1: n.dayWidth, y1: "0", x2: n.dayWidth, y2: te, stroke: e.border, strokeWidth: "1", strokeDasharray: "4 4", opacity: "0.4" }) }),
              /* @__PURE__ */ r("pattern", { id: "gantt-x-lines", x: "0", y: "0", width: n.dayWidth, height: te, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ r("line", { x1: "0", y1: te, x2: n.dayWidth, y2: te, stroke: e.borderLight, strokeWidth: "1" }) })
            ] }),
            /* @__PURE__ */ r("rect", { width: "100%", height: "100%", fill: "url(#gantt-x-lines)" }),
            /* @__PURE__ */ r("rect", { width: "100%", height: "100%", fill: "url(#gantt-y-lines)" }),
            o === "day" && ye.map((k) => n.days[k.index]?.isWeekend ? /* @__PURE__ */ r("rect", { x: k.start, y: 0, width: k.size, height: le, fill: e.weekendBg, opacity: 0.6 }, `we-${k.index}`) : null),
            o === "month" && ye.map((k) => n.days[k.index]?.isWeekend ? /* @__PURE__ */ r("rect", { x: k.start, y: 0, width: k.size, height: le, fill: e.weekendBg, opacity: 0.3 }, `wem-${k.index}`) : null),
            n.todayIndex >= 0 && /* @__PURE__ */ p("g", { children: [
              /* @__PURE__ */ r("rect", { x: n.todayIndex * n.dayWidth, y: 0, width: n.dayWidth, height: le, fill: e.todayBg }),
              /* @__PURE__ */ r("line", { x1: (n.todayIndex + 0.5) * n.dayWidth, y1: 0, x2: (n.todayIndex + 0.5) * n.dayWidth, y2: le, stroke: e.today, strokeWidth: 2, strokeDasharray: "4 4", opacity: 0.3 })
            ] })
          ] }),
          me.map((k) => {
            const X = i[k.index];
            return X && (X.kind === "group" || X.kind === "projectHeader") ? /* @__PURE__ */ r("div", { style: {
              boxSizing: "border-box",
              position: "absolute",
              left: 0,
              top: k.start,
              width: "100%",
              height: te,
              background: X.kind === "projectHeader" ? e.headerBg : e.groupLightSoft,
              borderBottom: `1px solid ${e.borderLight}`,
              pointerEvents: "none"
            } }, `bg-${k.index}`) : null;
          }),
          /* @__PURE__ */ p("div", { style: { position: "absolute", inset: 0 }, children: [
            me.map((k) => {
              const X = i[k.index];
              if (!X || X.kind !== "task") return null;
              const O = X.task, y = l?.task.id === O.id, S = a?.task.id === O.id, D = y || S && a.edge === "left" ? ae(O.start, y ? l.offsetDays : a.offsetDays) : O.start, R = y || S && a.edge === "right" ? ae(O.end, y ? l.offsetDays : a.offsetDays) : O.end, j = O.originalType !== "step", L = ue(D, n);
              let C = 0, H = 0;
              j || (C = Math.max(ue(R, n) - L, n.dayWidth), H = C * (O.progress / 100));
              const Y = N === O.id, _ = g === O.id, ee = Ue.has(O.id), pe = Ge.has(O.id), xt = !!g && !_ && !fe.has(O.id), vt = _ || !!g && fe.has(O.id), St = d?.hoverTargetId === O.id, wt = Y || _, kt = k.start;
              return /* @__PURE__ */ r(
                en,
                {
                  task: O,
                  x: L,
                  y: kt,
                  w: C,
                  progW: H,
                  isHov: Y,
                  isDrag: y,
                  isResize: S,
                  isCritical: pe,
                  isDelayed: ee,
                  isConnectTarget: St,
                  showDots: wt,
                  isBarDimmed: xt,
                  isBarHighlighted: vt,
                  commonEvents: {
                    onMouseEnter: (Q) => {
                      K(O.id), !l && !a && ne({ task: O, x: Q.clientX, y: Q.clientY });
                    },
                    onMouseMove: (Q) => {
                      N === O.id && !l && !a && ne({ task: O, x: Q.clientX, y: Q.clientY });
                    },
                    onMouseLeave: () => {
                      K(null), ne(null);
                    },
                    onClick: (Q) => {
                      Q.stopPropagation(), q(O.id), Q.detail === 2 && Se?.(_e(O)), P(!J.isOpen || J.task?.id !== O.id ? {
                        isOpen: !0,
                        position: { x: Q.clientX, y: Q.clientY },
                        task: O
                      } : { isOpen: !1, position: { x: 0, y: 0 }, task: null });
                    },
                    onMouseDown: (Q) => Ke(Q, O),
                    onTouchStart: (Q) => ze(Q, O),
                    onKeyDown: (Q) => {
                      if (Q.key === "Enter") {
                        Q.preventDefault(), Se?.(_e(O));
                        return;
                      }
                      Q.key === " " && (Q.preventDefault(), q(O.id));
                    }
                  },
                  handleResizeMouseDown: We,
                  handleResizeTouchStart: Ee,
                  handleConnectDotMouseDown: $e,
                  handleConnectDotTouchStart: De
                },
                O.id
              );
            }),
            /* @__PURE__ */ r("svg", { width: n.totalWidth, height: le, style: { position: "absolute", inset: 0, pointerEvents: "none" }, children: /* @__PURE__ */ r(tn, { arrows: be }) }),
            A && !l && /* @__PURE__ */ r("div", { style: { position: "fixed", left: A.x + 16, top: A.y - 10, zIndex: 9999, pointerEvents: "none" }, children: /* @__PURE__ */ p(
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
                    Ae(A.task.originalType, A.task.colorIdx),
                    /* @__PURE__ */ r("span", { style: { fontSize: 12, fontWeight: 700, color: e.textTitle, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: A.task.name })
                  ] }),
                  /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 4, fontSize: 11, color: e.textSecondary }, children: A.task.originalType === "step" ? /* @__PURE__ */ p(ge, { children: [
                    A.task.previsionStart && A.task.previsionEnd && /* @__PURE__ */ p("div", { style: { background: `${e.headerBg}`, borderRadius: 6, padding: "4px 6px", marginBottom: 2 }, children: [
                      /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }, children: [
                        /* @__PURE__ */ r("div", { style: { width: 20, height: 4, borderRadius: 2, background: e.textSecondarySoft, border: `1.5px solid ${e.textSecondaryMid}` } }),
                        /* @__PURE__ */ r("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: e.textSecondary }, children: s("gantt.tooltip.planned", "Planned") })
                      ] }),
                      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ p("span", { children: [
                          s("gantt.tooltip.start", "Start"),
                          ":"
                        ] }),
                        /* @__PURE__ */ r("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: ie(A.task.previsionStart, t.locale) })
                      ] }),
                      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ p("span", { children: [
                          s("gantt.tooltip.end", "End"),
                          ":"
                        ] }),
                        /* @__PURE__ */ r("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: ie(A.task.previsionEnd, t.locale) })
                      ] }),
                      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ p("span", { children: [
                          s("gantt.tooltip.duration", "Duration"),
                          ":"
                        ] }),
                        /* @__PURE__ */ p("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: [
                          Ce(A.task.previsionStart, A.task.previsionEnd),
                          "d"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ p("div", { style: { background: A.task.hasActualDates ? e.groupLightSoft : "transparent", borderRadius: 6, padding: "4px 6px" }, children: [
                      /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }, children: [
                        /* @__PURE__ */ r("div", { style: { width: 20, height: 4, borderRadius: 2, background: ce[A.task.colorIdx ?? 0].progress } }),
                        /* @__PURE__ */ r("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: A.task.hasActualDates ? e.group : e.textSecondary }, children: A.task.hasActualDates ? s("gantt.tooltip.actual", "Actual") : s("gantt.tooltip.plannedInUse", "Planned (in use)") })
                      ] }),
                      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ p("span", { children: [
                          s("gantt.tooltip.start", "Start"),
                          ":"
                        ] }),
                        /* @__PURE__ */ r("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: ie(A.task.start, t.locale) })
                      ] }),
                      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ p("span", { children: [
                          s("gantt.tooltip.end", "End"),
                          ":"
                        ] }),
                        /* @__PURE__ */ r("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: ie(A.task.end, t.locale) })
                      ] }),
                      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ p("span", { children: [
                          s("gantt.tooltip.duration", "Duration"),
                          ":"
                        ] }),
                        /* @__PURE__ */ p("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: [
                          Ce(A.task.start, A.task.end),
                          "d"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16, paddingTop: 4, marginTop: 4, borderTop: `1px solid ${e.borderLight}` }, children: [
                      /* @__PURE__ */ p("span", { children: [
                        s("charts.gantt.progress", "Progress"),
                        ":"
                      ] }),
                      /* @__PURE__ */ p("span", { style: { fontWeight: 700, color: e.group }, children: [
                        Math.round(A.task.progress),
                        "%"
                      ] })
                    ] })
                  ] }) : A.task.originalType === "note" ? /* @__PURE__ */ p(ge, { children: [
                    A.task.noteProjectTitle && /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }, children: [
                      /* @__PURE__ */ r("div", { style: { width: 8, height: 8, borderRadius: 2, background: A.task.noteColor || e.note, flexShrink: 0 } }),
                      /* @__PURE__ */ r("span", { style: { fontSize: 11, fontWeight: 600, color: e.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: A.task.noteProjectTitle })
                    ] }),
                    /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                      /* @__PURE__ */ p("span", { children: [
                        s("gantt.tooltip.date", "Date"),
                        ":"
                      ] }),
                      /* @__PURE__ */ r("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: ie(A.task.start, t.locale) })
                    ] }),
                    (A.task.filesCount || 0) > 0 && /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                      /* @__PURE__ */ p("span", { children: [
                        s("gantt.tooltip.attachments", "Attachments"),
                        ":"
                      ] }),
                      /* @__PURE__ */ p("span", { style: { fontWeight: 600, display: "flex", alignItems: "center", gap: 4, color: e.textPrimary }, children: [
                        /* @__PURE__ */ r(He, { size: 10 }),
                        A.task.filesCount
                      ] })
                    ] })
                  ] }) : /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                    /* @__PURE__ */ p("span", { children: [
                      s("charts.gantt.start", "Start"),
                      ":"
                    ] }),
                    /* @__PURE__ */ r("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: ie(A.task.start, t.locale) })
                  ] }) })
                ]
              }
            ) })
          ] })
        ] })
      }
    ),
    J.task && J.isOpen && (() => {
      const k = J.task, X = (t.dependencies || []).filter((R) => R.predecessorId === k.id || R.successorId === k.id), O = { FS: s("gantt.depType.fs", "Finish to Start"), SS: s("gantt.depType.ss", "Start to Start"), FF: s("gantt.depType.ff", "Finish to Finish"), SF: s("gantt.depType.sf", "Start to Finish") }, y = X.length > 0 ? 300 : 220, S = Math.min(J.position.x, window.innerWidth - y - 16), D = J.position.y + 8;
      return /* @__PURE__ */ p(
        "div",
        {
          "data-popup": "gantt-action",
          style: { position: "fixed", left: S, top: D, zIndex: 9999, background: "var(--zg-surface)", borderRadius: 4, boxShadow: "var(--zg-shadow-popover)", border: `1.5px solid ${e.borderLight}`, width: y, overflow: "hidden" },
          onMouseDown: (R) => R.stopPropagation(),
          children: [
            /* @__PURE__ */ r("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${e.borderLight}` }, children: /* @__PURE__ */ r("p", { style: { fontSize: 13, fontWeight: 700, color: e.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: k.name, children: k.name }) }),
            /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" }, children: [
              /* @__PURE__ */ p("button", { onClick: () => {
                Se?.(_e(k)), we();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ r(Et, { size: 15 }),
                " ",
                /* @__PURE__ */ r("span", { style: { flex: 1, textAlign: "left" }, children: s("gantt.popup.viewDetails", "View details") })
              ] }),
              /* @__PURE__ */ p("button", { onClick: () => {
                Oe?.(_e(k)), we();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ r(Dt, { size: 15 }),
                " ",
                /* @__PURE__ */ r("span", { style: { flex: 1, textAlign: "left" }, children: s("gantt.popup.edit", "Edit") })
              ] }),
              /* @__PURE__ */ p("button", { onClick: () => {
                Ne?.(k.id), we();
              }, className: "zg-popup-btn zg-popup-btn-danger", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.dangerText, textAlign: "left" }, children: [
                /* @__PURE__ */ r(Ct, { size: 15 }),
                " ",
                /* @__PURE__ */ r("span", { style: { flex: 1, textAlign: "left" }, children: s("gantt.popup.delete", "Delete") })
              ] })
            ] }),
            X.length > 0 && /* @__PURE__ */ p("div", { style: { borderTop: `1px solid ${e.borderLight}`, padding: "10px 14px 12px" }, children: [
              /* @__PURE__ */ p("div", { style: { fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }, children: [
                s("gantt.popup.relations", "Relations"),
                " (",
                X.length,
                ")"
              ] }),
              /* @__PURE__ */ r("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: X.map((R) => {
                const j = R.predecessorId === k.id, L = j ? R.successorName : R.predecessorName, C = m === R.id;
                return /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderRadius: 8, background: "var(--zg-surface-alt)", border: `1px solid ${e.borderLight}` }, children: [
                  /* @__PURE__ */ p("div", { style: { flex: 1, minWidth: 0 }, children: [
                    /* @__PURE__ */ p("div", { style: { fontSize: 10, fontWeight: 700, color: e.group, marginBottom: 2 }, children: [
                      /* @__PURE__ */ r("span", { style: { background: e.groupSoftStrong, borderRadius: 4, padding: "1px 5px" }, children: R.type }),
                      " ",
                      /* @__PURE__ */ r("span", { style: { color: e.textSecondary, fontWeight: 500 }, children: j ? "→ " : "← " }),
                      /* @__PURE__ */ r("span", { style: { color: e.textMuted, fontWeight: 400, fontSize: 9 }, children: O[R.type] ?? R.type })
                    ] }),
                    /* @__PURE__ */ r("div", { style: { fontSize: 11, color: e.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: L, children: L })
                  ] }),
                  V && /* @__PURE__ */ r(
                    "button",
                    {
                      disabled: !!C,
                      onClick: async () => {
                        v(R.id);
                        try {
                          await V(R.id);
                        } finally {
                          v(null);
                        }
                      },
                      style: { flexShrink: 0, padding: "4px 6px", borderRadius: 6, border: "none", background: C ? e.dangerBgSoft : "transparent", cursor: C ? "wait" : "pointer", color: e.dangerText, fontSize: 14, opacity: C ? 0.5 : 1, transition: "background 0.12s" },
                      children: C ? "⟳" : "🗑"
                    }
                  )
                ] }, R.id);
              }) })
            ] })
          ]
        }
      );
    })(),
    T && /* @__PURE__ */ p(
      "div",
      {
        "data-menu": "chart-create",
        style: {
          position: "fixed",
          left: Math.min(T.x, window.innerWidth - 220),
          top: Math.min(T.y, window.innerHeight - 220),
          zIndex: 99999,
          background: "var(--zg-surface)",
          borderRadius: 10,
          boxShadow: "var(--zg-shadow-popover)",
          border: `1.5px solid ${e.borderLight}`,
          width: 200,
          overflow: "hidden"
        },
        onClick: (k) => k.stopPropagation(),
        children: [
          /* @__PURE__ */ r("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${e.borderLight}`, background: e.headerBg }, children: /* @__PURE__ */ p("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" }, children: [
            s("gantt.chart.addOn", "Add on"),
            " ",
            ie(T.date, t.locale)
          ] }) }),
          /* @__PURE__ */ r("div", { style: { padding: "5px 5px" }, children: [
            { label: s("gantt.newAction.step", "Step"), icon: Ae("step", 0), action: () => {
              U?.(T.date, T.projectId), c(null);
            } },
            { label: s("gantt.newAction.milestone", "Milestone"), icon: Ae("milestone"), action: () => {
              je?.(T.date, T.projectId), c(null);
            } },
            { label: s("gantt.newAction.event", "Event"), icon: Ae("event"), action: () => {
              Ye?.(T.date, T.projectId), c(null);
            } },
            { label: s("gantt.newAction.note", "Note"), icon: Ae("note"), action: () => {
              Xe?.(T.date, T.projectId), c(null);
            } }
          ].map((k) => /* @__PURE__ */ p(
            "button",
            {
              onClick: k.action,
              className: "zg-popup-btn",
              style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.textPrimary, textAlign: "left", transition: "background 0.12s" },
              children: [
                k.icon,
                " ",
                k.label
              ]
            },
            k.label
          )) })
        ]
      }
    ),
    d && /* @__PURE__ */ p("svg", { style: { position: "fixed", inset: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 99999 }, children: [
      /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ r("path", { d: "M0,0 L0,6 L6,3 z", fill: e.group }) }) }),
      /* @__PURE__ */ r("line", { x1: d.fromScreenX, y1: d.fromScreenY, x2: d.currentScreenX, y2: d.currentScreenY, stroke: e.group, strokeWidth: 2.5, strokeDasharray: "8 5", markerEnd: "url(#connect-arrow)", opacity: 0.85, style: { animation: "zg-dash 0.5s linear infinite" } })
    ] }),
    f && /* @__PURE__ */ r("div", { style: { position: "fixed", inset: 0, background: e.overlayMedium, backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99998 }, onClick: () => b(null), children: /* @__PURE__ */ p("div", { style: { background: "var(--zg-surface)", borderRadius: 20, padding: "32px 36px", width: 420, boxShadow: "var(--zg-shadow-popover)" }, onClick: (k) => k.stopPropagation(), children: [
      /* @__PURE__ */ p("div", { style: { marginBottom: 20 }, children: [
        /* @__PURE__ */ r("h3", { style: { fontSize: 18, fontWeight: 700, color: e.textTitle, marginBottom: 4 }, children: s("gantt.depModal.title", "Relation Type") }),
        /* @__PURE__ */ r("p", { style: { fontSize: 13, color: e.textSecondary }, children: s("gantt.depModal.subtitle", "Choose how the two tasks relate") })
      ] }),
      /* @__PURE__ */ r("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }, children: [
        { type: "FS", label: s("gantt.depModal.fs", "Finish to Start"), desc: s("gantt.depModal.fsDesc", "B starts when A finishes") },
        { type: "SS", label: s("gantt.depModal.ss", "Start to Start"), desc: s("gantt.depModal.ssDesc", "A and B start together") },
        { type: "FF", label: s("gantt.depModal.ff", "Finish to Finish"), desc: s("gantt.depModal.ffDesc", "A and B finish together") },
        { type: "SF", label: s("gantt.depModal.sf", "Start to Finish"), desc: s("gantt.depModal.sfDesc", "B finishes when A starts") }
      ].map((k) => /* @__PURE__ */ p("button", { onClick: () => E(k.type), style: { border: x === k.type ? `2px solid ${e.group}` : `1.5px solid ${e.borderLight}`, borderRadius: 12, padding: "12px 14px", textAlign: "left", cursor: "pointer", background: x === k.type ? e.groupSoft : "var(--zg-surface-alt)" }, children: [
        /* @__PURE__ */ r("div", { style: { fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: e.group, marginBottom: 4, background: x === k.type ? e.groupSoftStrong : e.groupSoft, borderRadius: 6, padding: "2px 6px", display: "inline-block" }, children: k.type }),
        /* @__PURE__ */ r("div", { style: { fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 2 }, children: k.label }),
        /* @__PURE__ */ r("div", { style: { fontSize: 11, color: e.textSecondary }, children: k.desc })
      ] }, k.type)) }),
      /* @__PURE__ */ p("div", { style: { marginBottom: 24 }, children: [
        /* @__PURE__ */ r("label", { style: { display: "block", fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 6 }, children: s("gantt.depModal.lagLabel", "Lag (days)") }),
        /* @__PURE__ */ r("input", { type: "number", value: I, onChange: (k) => B(parseInt(k.target.value) || 0), style: { width: "100%", padding: "10px 12px", border: `1.5px solid ${e.borderLight}`, borderRadius: 8, fontSize: 14 } })
      ] }),
      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12 }, children: [
        /* @__PURE__ */ r("button", { onClick: () => b(null), style: { padding: "10px 16px", borderRadius: 8, border: `1px solid ${e.borderLight}`, background: "var(--zg-surface)", cursor: "pointer", fontWeight: 600 }, children: s("gantt.depModal.cancel", "Cancel") }),
        /* @__PURE__ */ r("button", { onClick: Pe, disabled: W, style: { padding: "10px 16px", borderRadius: 8, border: "none", background: e.group, color: e.white, cursor: W ? "wait" : "pointer", fontWeight: 600 }, children: W ? s("gantt.depModal.saving", "Saving...") : s("gantt.depModal.create", "Create Dependency") })
      ] })
    ] }) })
  ] });
}
function on(t) {
  const s = xe(null), o = xe(null), n = xe(null), i = xe(!1), l = Z(() => {
    if (i.current) return;
    i.current = !0;
    const b = o.current;
    b && s.current && (s.current.scrollTop = b.scrollTop), b && n.current && (n.current.scrollLeft = b.scrollLeft), i.current = !1;
  }, []), a = Z(() => {
    i.current || (i.current = !0, s.current && o.current && (o.current.scrollTop = s.current.scrollTop), i.current = !1);
  }, []), d = xe(!1);
  ve(() => {
    if (d.current || !t.totalWidth) return;
    const b = o.current;
    if (!b) return;
    const x = ue(/* @__PURE__ */ new Date(), t);
    if (x >= 0 && x <= t.totalWidth) {
      const E = x - b.clientWidth / 2;
      b.scrollLeft = Math.max(0, E), n.current && (n.current.scrollLeft = b.scrollLeft), d.current = !0;
    }
  }, [t]);
  const f = Z((b) => {
    const x = o.current;
    if (x)
      if (b.preventDefault(), b.shiftKey || Math.abs(b.deltaX) > Math.abs(b.deltaY)) {
        const E = b.shiftKey ? b.deltaY : b.deltaX;
        x.scrollLeft += E, n.current && (n.current.scrollLeft = x.scrollLeft);
      } else
        x.scrollTop += b.deltaY, s.current && (s.current.scrollTop = x.scrollTop);
  }, []);
  return {
    leftBodyRef: s,
    rightBodyRef: o,
    timeHeaderRef: n,
    handleRightScroll: l,
    handleLeftScroll: a,
    handleChartWheel: f
  };
}
function rn(t, s, o, n) {
  const i = /* @__PURE__ */ new Map();
  return t.forEach((l) => i.set(l.id, l)), s.map((l) => {
    const a = i.get(l.predecessorId), d = i.get(l.successorId);
    if (!a || !d) return null;
    const f = n.get(a.id), b = n.get(d.id);
    if (f == null || b == null) return null;
    const x = a.originalType !== "step", E = d.originalType !== "step", I = x ? ue(a.start, o) + et : ue(a.end, o), B = f * te + te / 2, W = E ? ue(d.start, o) - 10 : ue(d.start, o), m = b * te + te / 2, v = 14, T = Math.max(I + v, W - v), c = B === m ? `M${I},${B} L${W - 6},${m}` : `M${I},${B} L${T},${B} L${T},${m} L${W - 6},${m}`;
    return { predId: a.id, succId: d.id, path: c, headX: W - 6, headY: m };
  }).filter(Boolean);
}
function sn(t, s, o) {
  if (s === o) return !0;
  const n = /* @__PURE__ */ new Map();
  for (const d of t) {
    const f = n.get(d.predecessorId) || [];
    f.push(d.successorId), n.set(d.predecessorId, f);
  }
  const i = n.get(s) || [];
  i.push(o), n.set(s, i);
  const l = [o], a = /* @__PURE__ */ new Set();
  for (; l.length > 0; ) {
    const d = l.pop();
    if (d === s) return !0;
    if (a.has(d)) continue;
    a.add(d);
    const f = n.get(d) || [];
    for (const b of f)
      a.has(b) || l.push(b);
  }
  return !1;
}
function an(t, s) {
  if (t.length === 0 || s.length === 0) return /* @__PURE__ */ new Set();
  const o = /* @__PURE__ */ new Map();
  t.forEach((c) => o.set(c.id, c));
  const n = new Set(t.map((c) => c.id)), i = s.filter((c) => n.has(c.predecessorId) && n.has(c.successorId));
  if (i.length === 0) return /* @__PURE__ */ new Set();
  const l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  i.forEach((c) => {
    l.has(c.predecessorId) || l.set(c.predecessorId, []), l.get(c.predecessorId).push(c.successorId), a.has(c.successorId) || a.set(c.successorId, []), a.get(c.successorId).push(c.predecessorId);
  });
  const d = (c) => Math.max(1, Me(c.start, c.end)), f = /* @__PURE__ */ new Set(), b = [];
  function x(c) {
    f.has(c) || (f.add(c), (l.get(c) || []).forEach(x), b.unshift(c));
  }
  t.forEach((c) => x(c.id));
  const E = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map();
  for (const c of b) {
    const F = o.get(c), z = a.get(c) || [];
    let M = 0;
    for (const h of z) M = Math.max(M, I.get(h) || 0);
    const u = z.length > 0 ? M : 0;
    E.set(c, u), I.set(c, u + d(F));
  }
  let B = 0;
  I.forEach((c) => {
    c > B && (B = c);
  });
  const W = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
  for (let c = b.length - 1; c >= 0; c--) {
    const F = b[c], z = o.get(F), M = l.get(F) || [];
    let u = B;
    for (const h of M) u = Math.min(u, W.get(h) ?? B);
    m.set(F, M.length > 0 ? u : B), W.set(F, (m.get(F) || 0) - d(z));
  }
  const v = /* @__PURE__ */ new Set();
  i.forEach((c) => {
    v.add(c.predecessorId), v.add(c.successorId);
  });
  const T = /* @__PURE__ */ new Set();
  for (const c of b) {
    if (!v.has(c)) continue;
    const F = (W.get(c) || 0) - (E.get(c) || 0);
    Math.abs(F) < 0.5 && T.add(c);
  }
  return T;
}
function ln({
  steps: t,
  milestones: s,
  events: o,
  notes: n,
  dependencies: i,
  viewMode: l,
  locale: a,
  groupByProject: d,
  visibleTypes: f,
  collapsedGroups: b,
  collapsedProjects: x,
  selectedTaskId: E
}) {
  const I = se(() => {
    const z = [], M = /* @__PURE__ */ new Map();
    n?.forEach((h) => {
      let w = h.targetId || h.predecessorId;
      if (!w && i) {
        const N = i.find((K) => K.successorId === h.id);
        N && (w = N.predecessorId);
      }
      if (!w) return;
      const $ = M.get(w) || [];
      M.set(w, [...$, h]);
    });
    let u = 0;
    return t.forEach((h) => {
      const w = !!(h.startDate && h.finishDate), $ = h.startDate || h.previsionStartDate, N = h.finishDate || h.previsionFinishDate;
      if (!$ || !N) return;
      const K = new Date($), g = new Date(N);
      if (isNaN(K.getTime()) || isNaN(g.getTime())) return;
      g <= K && g.setDate(g.getDate() + 1);
      let q, A;
      if (h.previsionStartDate && h.previsionFinishDate) {
        const P = new Date(h.previsionStartDate), oe = new Date(h.previsionFinishDate);
        !isNaN(P.getTime()) && !isNaN(oe.getTime()) && (q = P, A = oe <= P ? ae(P, 1) : oe);
      }
      const ne = i?.filter((P) => P.successorId === h.id).map((P) => P.predecessorId) || [], J = h.conclusionPercent != null ? Number(h.conclusionPercent) : 0;
      z.push({
        id: h.id,
        name: h.name,
        start: K,
        end: g,
        progress: J > 1 ? Math.min(J, 100) : J * 100,
        originalType: "step",
        deps: ne,
        colorIdx: u % ce.length,
        previsionStart: q,
        previsionEnd: A,
        hasActualDates: w,
        projectId: h.projectId || void 0,
        projectTitle: h.projectTitle || void 0,
        attachedNotes: M.get(h.id)
      }), u++;
    }), s?.forEach((h) => {
      if (!h.date) return;
      const w = new Date(h.date);
      if (isNaN(w.getTime())) return;
      const $ = i?.filter((N) => N.successorId === h.id).map((N) => N.predecessorId) || [];
      z.push({
        id: h.id,
        name: h.name,
        start: w,
        end: w,
        progress: h.finished ? 100 : 0,
        originalType: "milestone",
        deps: $,
        projectId: h.projectId || void 0,
        projectTitle: h.projectTitle || void 0,
        attachedNotes: M.get(h.id)
      });
    }), o?.forEach((h) => {
      if (!h.date) return;
      const w = new Date(h.date);
      if (isNaN(w.getTime())) return;
      const $ = i?.filter((N) => N.successorId === h.id).map((N) => N.predecessorId) || [];
      z.push({
        id: h.id,
        name: h.title,
        start: w,
        end: w,
        progress: h.finished ? 100 : 0,
        originalType: "event",
        deps: $,
        projectId: h.projectId || void 0,
        projectTitle: h.projectTitle || void 0,
        attachedNotes: M.get(h.id)
      });
    }), z;
  }, [t, s, o, n, i]), B = se(() => Zt(I, l, a), [I, l, a]), W = se(() => {
    const z = [], M = ["step", "milestone", "event"];
    if (d) {
      const u = /* @__PURE__ */ new Map();
      I.forEach((h) => {
        h.projectId && !u.has(h.projectId) && u.set(h.projectId, h.projectTitle || h.projectId);
      });
      for (const [h, w] of Array.from(u.entries())) {
        const $ = x.has(h);
        if (z.push({ kind: "projectHeader", projectId: h, projectTitle: w, collapsed: $ }), !$) {
          const N = I.filter((K) => K.projectId === h);
          for (const K of M) {
            if (!f.has(K)) continue;
            const g = N.filter((ne) => ne.originalType === K);
            if (g.length === 0) continue;
            const q = `${h}-${K}`, A = b.has(q);
            z.push({ kind: "group", groupType: K, label: ot[K], count: g.length, collapsed: A, projectId: h }), A || g.forEach((ne) => z.push({ kind: "task", task: ne }));
          }
        }
      }
    } else
      for (const u of M) {
        if (!f.has(u)) continue;
        const h = I.filter(($) => $.originalType === u);
        if (h.length === 0) continue;
        const w = b.has(u);
        z.push({ kind: "group", groupType: u, label: ot[u], count: h.length, collapsed: w }), w || h.forEach(($) => z.push({ kind: "task", task: $ }));
      }
    return z;
  }, [I, f, b, x, d]), m = se(() => {
    const z = /* @__PURE__ */ new Map();
    return W.forEach((M, u) => {
      M.kind === "task" && z.set(M.task.id, u);
    }), z;
  }, [W]), v = se(
    () => rn(I, i || [], B, m),
    [I, i, B, m]
  ), T = se(() => an(I, i || []), [I, i]), c = se(() => {
    const z = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Date();
    return I.forEach((u) => {
      u.originalType === "step" && u.end < M && u.progress < 100 && z.add(u.id);
    }), z;
  }, [I]), F = se(() => {
    if (!E || !i?.length) return /* @__PURE__ */ new Set();
    const z = /* @__PURE__ */ new Set(), M = [E];
    for (; M.length; ) {
      const u = M.shift();
      for (const h of i)
        h.predecessorId === u && !z.has(h.successorId) && (z.add(h.successorId), M.push(h.successorId)), h.successorId === u && !z.has(h.predecessorId) && (z.add(h.predecessorId), M.push(h.predecessorId));
    }
    return z;
  }, [E, i]);
  return {
    tasks: I,
    timeline: B,
    displayRows: W,
    taskRowIndex: m,
    arrows: v,
    criticalIds: T,
    delayedIds: c,
    relatedIds: F
  };
}
function dn() {
  const { props: t, activePinboardTask: s, setActivePinboardTask: o, t: n } = Te(), i = !!s, l = () => o(null);
  return /* @__PURE__ */ p(ge, { children: [
    i && /* @__PURE__ */ r(
      "div",
      {
        onClick: l,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: e.overlaySoft,
          zIndex: 99,
          backdropFilter: "blur(2px)",
          transition: "opacity 0.3s ease"
        }
      }
    ),
    /* @__PURE__ */ p("div", { style: {
      position: "fixed",
      top: 0,
      right: i ? 0 : -450,
      width: 400,
      height: "100vh",
      backgroundColor: e.surface,
      boxShadow: "var(--zg-shadow-drawer, var(--zg-shadow-large))",
      borderLeft: `1px solid ${e.border}`,
      transition: "right 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      display: "flex",
      flexDirection: "column",
      zIndex: 100
    }, children: [
      /* @__PURE__ */ p("div", { style: {
        padding: "20px 24px",
        backgroundColor: e.headerBg,
        borderBottom: `1px solid ${e.borderLight}`,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }, children: [
        /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
          /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ r("span", { style: {
              fontSize: 10,
              fontWeight: 700,
              backgroundColor: e.milestoneRing,
              color: e.group,
              padding: "2px 6px",
              borderRadius: 4,
              letterSpacing: "0.5px"
            }, children: s?.originalType?.toUpperCase() || "" }),
            /* @__PURE__ */ p("span", { style: { fontSize: 12, color: e.textSecondary, display: "flex", alignItems: "center", gap: 4 }, children: [
              /* @__PURE__ */ r(Rt, { size: 12 }),
              s && ie(s.start, t.locale),
              s?.originalType === "step" && ` - ${ie(s.end, t.locale)}`
            ] })
          ] }),
          /* @__PURE__ */ r(
            "button",
            {
              onClick: l,
              style: { background: "transparent", border: "none", cursor: "pointer", padding: 4, borderRadius: 4 },
              children: /* @__PURE__ */ r(gt, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ r("h2", { style: { margin: 0, fontSize: 18, fontWeight: 700, color: e.textTitle }, children: s?.name || "" }),
        /* @__PURE__ */ r("p", { style: { margin: 0, fontSize: 13, color: e.textSecondary }, children: n("pinboard.description", "Quadro de anotações e arquivos vinculados a esta etapa.") })
      ] }),
      /* @__PURE__ */ p("div", { style: {
        flex: 1,
        overflowY: "auto",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        backgroundColor: e.surfaceAlt
      }, children: [
        s?.attachedNotes?.map((a, d) => /* @__PURE__ */ p(
          "div",
          {
            style: {
              background: a.color || e.note,
              padding: "16px",
              borderRadius: "2px",
              boxShadow: e.shadowLarge,
              transform: `rotate(${d % 2 === 0 ? "-1deg" : "1deg"})`,
              position: "relative"
            },
            children: [
              /* @__PURE__ */ r("div", { style: {
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "40px",
                height: "12px",
                background: e.stickyTape,
                borderRadius: "0 0 4px 4px"
              } }),
              /* @__PURE__ */ r("h3", { style: { margin: "0 0 8px 0", fontSize: 14, fontWeight: 700, color: e.inkSoft }, children: a.title }),
              /* @__PURE__ */ r("p", { style: { margin: 0, fontSize: 13, color: e.inkSoft2, lineHeight: 1.4 }, children: a.description || "" }),
              a.author && /* @__PURE__ */ p("div", { style: { marginTop: 12, fontSize: 11, fontWeight: 600, color: e.inkSoft4, textAlign: "right" }, children: [
                "— ",
                a.author
              ] })
            ]
          },
          a.id
        )),
        (!s?.attachedNotes || s.attachedNotes.length === 0) && /* @__PURE__ */ p("div", { style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: e.textMuted,
          textAlign: "center",
          gap: 12,
          opacity: 0.6
        }, children: [
          /* @__PURE__ */ r("div", { style: { width: 60, height: 60, borderRadius: "50%", background: e.headerBg, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ r(Qe, { size: 32 }) }),
          /* @__PURE__ */ r("p", { style: { margin: 0, fontSize: 14 }, children: n("pinboard.empty", "Nenhuma nota vinculada") })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { style: { padding: "16px 24px", backgroundColor: e.surface, borderTop: `1px solid ${e.borderLight}` }, children: /* @__PURE__ */ p("button", { style: {
        width: "100%",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: e.group,
        color: e.white,
        border: "none",
        borderRadius: 8,
        fontSize: 14,
        fontWeight: 600,
        cursor: "pointer"
      }, children: [
        /* @__PURE__ */ r(Qe, { size: 18 }),
        " ",
        n("pinboard.newBtn", "Nova Nota nesta Etapa")
      ] }) })
    ] })
  ] });
}
const yn = {
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
}, cn = {
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
function pt(t, s, o) {
  const n = cn[s] || o || s;
  return t ? typeof t == "function" ? t(s, n) || n : t[s] || n : n;
}
const he = (t) => {
  const s = t.touches[0] || t.changedTouches[0];
  return s ? { clientX: s.clientX, clientY: s.clientY } : { clientX: 0, clientY: 0 };
};
function bn(t) {
  const {
    onTaskChange: s,
    onCreateDependency: o,
    onDependencyError: n,
    dependencies: i,
    translations: l
  } = t, [a, d] = G("day"), [f, b] = G(null), [x, E] = G(null), [I, B] = G(null), [W, m] = G({
    isOpen: !1,
    position: { x: 0, y: 0 },
    task: null
  }), [v, T] = G(null), [c, F] = G(null), [z, M] = G(null), [u, h] = G(null), [w, $] = G("FS"), [N, K] = G(0), [g, q] = G(!1), [A, ne] = G(null), [J, P] = G(null), [oe, Ge] = G(!1), Ue = xe(null), [fe, Ke] = G(null), [ze, We] = G(/* @__PURE__ */ new Set(["step", "milestone", "event", "note"])), [Ee, $e] = G(/* @__PURE__ */ new Set()), [De, Pe] = G(/* @__PURE__ */ new Set()), Se = Z((y) => {
    We((S) => {
      const D = new Set(S);
      return D.has(y) ? D.delete(y) : D.add(y), D;
    });
  }, []), Oe = Z((y) => {
    $e((S) => {
      const D = new Set(S);
      return D.has(y) ? D.delete(y) : D.add(y), D;
    });
  }, []), Ne = Z((y) => {
    Pe((S) => {
      const D = new Set(S);
      return D.has(y) ? D.delete(y) : D.add(y), D;
    });
  }, []), V = ln({
    steps: t.steps,
    milestones: t.milestones,
    events: t.events,
    notes: t.notes,
    dependencies: t.dependencies,
    viewMode: a,
    locale: t.locale,
    visibleTypes: ze,
    collapsedGroups: Ee,
    collapsedProjects: De,
    groupByProject: t.groupByProject,
    selectedTaskId: x || null
  }), U = on(V.timeline), je = Z((y, S) => {
    y.preventDefault(), y.stopPropagation(), T({ task: S, startMouseX: y.clientX, originalStart: new Date(S.start), originalEnd: new Date(S.end), offsetDays: 0 });
  }, []), Ye = Z((y, S) => {
    y.preventDefault(), y.stopPropagation();
    const D = he(y);
    T({ task: S, startMouseX: D.clientX, originalStart: new Date(S.start), originalEnd: new Date(S.end), offsetDays: 0 });
  }, []), Xe = Z((y, S, D) => {
    y.preventDefault(), y.stopPropagation(), F({ task: S, edge: D, startMouseX: y.clientX, originalStart: new Date(S.start), originalEnd: new Date(S.end), offsetDays: 0 });
  }, []), Ce = Z((y, S, D) => {
    y.preventDefault(), y.stopPropagation();
    const R = he(y);
    F({ task: S, edge: D, startMouseX: R.clientX, originalStart: new Date(S.start), originalEnd: new Date(S.end), offsetDays: 0 });
  }, []), Re = Z((y, S, D) => {
    y.preventDefault(), y.stopPropagation(), M({ fromTaskId: S.id, fromEdge: D, fromScreenX: y.clientX, fromScreenY: y.clientY, currentScreenX: y.clientX, currentScreenY: y.clientY, hoverTargetId: null });
  }, []), me = Z((y, S, D) => {
    y.preventDefault(), y.stopPropagation();
    const R = he(y);
    M({
      fromTaskId: S.id,
      fromEdge: D,
      fromScreenX: R.clientX,
      fromScreenY: R.clientY,
      currentScreenX: R.clientX,
      currentScreenY: R.clientY,
      hoverTargetId: null
    });
  }, []), qe = Z(async () => {
    if (!u || !o) return;
    const y = new Map(V.tasks.map((C) => [C.id, C])), S = y.get(u.fromTaskId), D = y.get(u.toTaskId);
    if (!S || !D) return;
    const R = (C) => C.originalType === "step" ? "STEP" : "MILESTONE", j = u.fromEdge === "right" ? S : D, L = u.fromEdge === "right" ? D : S;
    if (sn(i || [], j.id, L.id)) {
      const C = pt(
        l,
        "gantt.error.circularDependency",
        "Circular dependency is not allowed."
      );
      n?.({
        code: "CYCLIC_DEPENDENCY",
        message: C,
        predecessorId: j.id,
        successorId: L.id
      }), n || window.alert(C), h(null);
      return;
    }
    q(!0);
    try {
      await o({ predecessorId: j.id, predecessorType: R(j), successorId: L.id, successorType: R(L), type: w, lag: N }), h(null);
    } finally {
      q(!1);
    }
  }, [u, V.tasks, o, i, l, n, w, N]);
  ve(() => {
    if (!v) return;
    const y = { passive: !1 }, S = (L) => {
      const C = L.clientX - v.startMouseX, H = Math.round(C / V.timeline.dayWidth);
      H !== v.offsetDays && T((Y) => Y ? { ...Y, offsetDays: H } : null);
    }, D = (L) => {
      L.cancelable && L.preventDefault();
      const H = he(L).clientX - v.startMouseX, Y = Math.round(H / V.timeline.dayWidth);
      Y !== v.offsetDays && T((_) => _ ? { ..._, offsetDays: Y } : null);
    }, R = () => {
      v.offsetDays !== 0 && s && s({
        id: v.task.id,
        name: v.task.name,
        start: ae(v.originalStart, v.offsetDays),
        end: ae(v.originalEnd, v.offsetDays),
        type: v.task.originalType === "step" ? "task" : "milestone",
        progress: v.task.progress
      }), T(null);
    }, j = () => R();
    return document.addEventListener("mousemove", S), document.addEventListener("mouseup", R), document.addEventListener("touchmove", D, y), document.addEventListener("touchend", j), () => {
      document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", R), document.removeEventListener("touchmove", D), document.removeEventListener("touchend", j);
    };
  }, [v, V.timeline.dayWidth, s]), ve(() => {
    if (!c) return;
    const y = { passive: !1 }, S = (L) => {
      const C = L.clientX - c.startMouseX, H = Math.round(C / V.timeline.dayWidth);
      H !== c.offsetDays && F((Y) => Y ? { ...Y, offsetDays: H } : null);
    }, D = (L) => {
      L.cancelable && L.preventDefault();
      const H = he(L).clientX - c.startMouseX, Y = Math.round(H / V.timeline.dayWidth);
      Y !== c.offsetDays && F((_) => _ ? { ..._, offsetDays: Y } : null);
    }, R = () => {
      if (c.offsetDays !== 0 && s) {
        const L = c.edge === "left" ? ae(c.originalStart, c.offsetDays) : c.originalStart, C = c.edge === "right" ? ae(c.originalEnd, c.offsetDays) : c.originalEnd;
        C > L && s({ id: c.task.id, name: c.task.name, start: L, end: C, type: "task", progress: c.task.progress });
      }
      F(null);
    }, j = () => R();
    return document.addEventListener("mousemove", S), document.addEventListener("mouseup", R), document.addEventListener("touchmove", D, y), document.addEventListener("touchend", j), () => {
      document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", R), document.removeEventListener("touchmove", D), document.removeEventListener("touchend", j);
    };
  }, [c, V.timeline.dayWidth, s]);
  const ye = z?.fromTaskId, le = z?.fromEdge;
  ve(() => {
    if (!ye || !le) return;
    const y = { passive: !1 }, S = ye, D = le, R = (H) => {
      let Y = null;
      for (const _ of document.elementsFromPoint(H.clientX, H.clientY)) {
        const ee = _.dataset?.taskId;
        if (ee && ee !== S) {
          Y = ee;
          break;
        }
      }
      M((_) => _ ? { ..._, currentScreenX: H.clientX, currentScreenY: H.clientY, hoverTargetId: Y } : null);
    }, j = (H) => {
      H.cancelable && H.preventDefault();
      const Y = he(H);
      let _ = null;
      for (const ee of document.elementsFromPoint(Y.clientX, Y.clientY)) {
        const pe = ee.dataset?.taskId;
        if (pe && pe !== S) {
          _ = pe;
          break;
        }
      }
      M((ee) => ee ? { ...ee, currentScreenX: Y.clientX, currentScreenY: Y.clientY, hoverTargetId: _ } : null);
    }, L = (H) => {
      let Y = null;
      for (const _ of document.elementsFromPoint(H.clientX, H.clientY)) {
        const ee = _.dataset?.taskId;
        if (ee && ee !== S) {
          Y = ee;
          break;
        }
      }
      Y && o && (h({ fromTaskId: S, fromEdge: D, toTaskId: Y }), $("FS"), K(0)), M(null);
    }, C = (H) => {
      const Y = he(H);
      let _ = null;
      for (const ee of document.elementsFromPoint(Y.clientX, Y.clientY)) {
        const pe = ee.dataset?.taskId;
        if (pe && pe !== S) {
          _ = pe;
          break;
        }
      }
      _ && o && (h({ fromTaskId: S, fromEdge: D, toTaskId: _ }), $("FS"), K(0)), M(null);
    };
    return document.addEventListener("mousemove", R), document.addEventListener("mouseup", L), document.addEventListener("touchmove", j, y), document.addEventListener("touchend", C), () => {
      document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", L), document.removeEventListener("touchmove", j), document.removeEventListener("touchend", C);
    };
  }, [ye, le, o]);
  const [re, be] = G(null), we = Z((y) => {
    if (c || v || y.button === 2) return;
    const S = U.rightBodyRef.current;
    S && (y.preventDefault(), be({ startX: y.clientX, startY: y.clientY, scrollLeft: S.scrollLeft, scrollTop: S.scrollTop }));
  }, [c, v, U.rightBodyRef]), k = Z((y) => {
    if (c || v || z) return;
    const S = U.rightBodyRef.current;
    if (!S) return;
    const D = he(y);
    be({ startX: D.clientX, startY: D.clientY, scrollLeft: S.scrollLeft, scrollTop: S.scrollTop });
  }, [c, v, z, U.rightBodyRef]);
  ve(() => {
    if (!re) return;
    const y = { passive: !1 }, S = (L) => {
      const C = U.rightBodyRef.current;
      C && (C.scrollLeft = re.scrollLeft - (L.clientX - re.startX), C.scrollTop = re.scrollTop - (L.clientY - re.startY), U.leftBodyRef.current && (U.leftBodyRef.current.scrollTop = C.scrollTop), U.timeHeaderRef.current && (U.timeHeaderRef.current.scrollLeft = C.scrollLeft));
    }, D = (L) => {
      L.cancelable && L.preventDefault();
      const C = U.rightBodyRef.current;
      if (!C) return;
      const H = he(L);
      C.scrollLeft = re.scrollLeft - (H.clientX - re.startX), C.scrollTop = re.scrollTop - (H.clientY - re.startY), U.leftBodyRef.current && (U.leftBodyRef.current.scrollTop = C.scrollTop), U.timeHeaderRef.current && (U.timeHeaderRef.current.scrollLeft = C.scrollLeft);
    }, R = () => be(null), j = () => be(null);
    return document.addEventListener("mousemove", S), document.addEventListener("mouseup", R), document.addEventListener("touchmove", D, y), document.addEventListener("touchend", j), () => {
      document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", R), document.removeEventListener("touchmove", D), document.removeEventListener("touchend", j);
    };
  }, [re, U.rightBodyRef, U.leftBodyRef, U.timeHeaderRef]);
  const X = Z((y) => {
    y.preventDefault(), y.stopPropagation();
    const S = (R) => {
      const j = U.rightBodyRef.current;
      if (!j) return /* @__PURE__ */ new Date();
      const L = j.getBoundingClientRect(), C = R - L.left + j.scrollLeft;
      return ae(V.timeline.start, Math.max(0, Math.floor(C / V.timeline.dayWidth)));
    }, D = (R) => {
      if (!t.groupByProject) return;
      const j = U.leftBodyRef.current;
      if (!j) return;
      const L = j.getBoundingClientRect(), C = R - L.top + j.scrollTop, H = Math.max(0, Math.floor(C / 50));
      for (let Y = Math.min(H, V.displayRows.length - 1); Y >= 0; Y--) {
        const _ = V.displayRows[Y];
        if (_.kind === "projectHeader") return _.projectId;
        if (_.kind === "task" && _.task.projectId) return _.task.projectId;
        if (_.kind === "group" && _.projectId) return _.projectId;
      }
    };
    P({ x: y.clientX, y: y.clientY, date: S(y.clientX), projectId: D(y.clientY) }), be(null);
  }, [V.timeline, V.displayRows, t.groupByProject, U.rightBodyRef, U.leftBodyRef]);
  ve(() => {
    if (!J) return;
    const y = (j) => {
      j.key === "Escape" && P(null);
    }, S = (j) => {
      j.target.closest('[data-menu="chart-create"]') || P(null);
    }, D = (j) => {
      j.target.closest('[data-menu="chart-create"]') || P(null);
    }, R = () => P(null);
    return document.addEventListener("keydown", y), document.addEventListener("click", S), document.addEventListener("touchstart", D), window.addEventListener("scroll", R, !0), () => {
      document.removeEventListener("keydown", y), document.removeEventListener("click", S), document.removeEventListener("touchstart", D), window.removeEventListener("scroll", R, !0);
    };
  }, [J]);
  const O = se(() => ({
    props: t,
    t: (y, S) => pt(t.translations, y, S),
    viewMode: a,
    setViewMode: d,
    hoveredTaskId: f,
    setHoveredTaskId: b,
    selectedTaskId: x,
    setSelectedTaskId: E,
    tooltip: I,
    setTooltip: B,
    popupState: W,
    setPopupState: m,
    dragState: v,
    setDragState: T,
    resizeState: c,
    setResizeState: F,
    connectState: z,
    setConnectState: M,
    visibleTypes: ze,
    setVisibleTypes: We,
    toggleVisibility: Se,
    collapsedGroups: Ee,
    setCollapsedGroups: $e,
    toggleGroup: Oe,
    collapsedProjects: De,
    setCollapsedProjects: Pe,
    toggleProject: Ne,
    pendingConnection: u,
    setPendingConnection: h,
    depModalType: w,
    setDepModalType: $,
    depModalLag: N,
    setDepModalLag: K,
    depCreating: g,
    setDepCreating: q,
    deletingDepId: A,
    setDeletingDepId: ne,
    chartMenu: J,
    setChartMenu: P,
    newActionOpen: oe,
    setNewActionOpen: Ge,
    activePinboardTask: fe,
    setActivePinboardTask: Ke,
    tasks: V.tasks,
    timeline: V.timeline,
    displayRows: V.displayRows,
    taskRowIndex: V.taskRowIndex || /* @__PURE__ */ new Map(),
    arrows: V.arrows,
    criticalIds: V.criticalIds,
    delayedIds: V.delayedIds,
    relatedIds: V.relatedIds,
    ...U,
    newActionRef: Ue,
    screenXToDate: (y) => {
      const S = U.rightBodyRef.current;
      if (!S) return /* @__PURE__ */ new Date();
      const D = S.getBoundingClientRect(), R = y - D.left + S.scrollLeft;
      return ae(V.timeline.start, Math.max(0, Math.floor(R / V.timeline.dayWidth)));
    },
    screenYToProjectId: (y) => {
      if (!t.groupByProject) return;
      const S = U.leftBodyRef.current;
      if (!S) return;
      const D = S.getBoundingClientRect(), R = y - D.top + S.scrollTop, j = Math.max(0, Math.floor(R / 50));
      for (let L = Math.min(j, V.displayRows.length - 1); L >= 0; L--) {
        const C = V.displayRows[L];
        if (C.kind === "projectHeader") return C.projectId;
        if (C.kind === "task" && C.task.projectId) return C.task.projectId;
        if (C.kind === "group" && C.projectId) return C.projectId;
      }
    },
    handleChartMouseDown: we,
    handleChartTouchStart: k,
    openChartMenu: X,
    handleBarMouseDown: je,
    handleBarTouchStart: Ye,
    handleResizeMouseDown: Xe,
    handleResizeTouchStart: Ce,
    handleConnectDotMouseDown: Re,
    handleConnectDotTouchStart: me,
    handleCreateDependency: qe
  }), [
    t,
    a,
    f,
    x,
    I,
    W,
    v,
    c,
    z,
    ze,
    Ee,
    De,
    u,
    w,
    N,
    g,
    A,
    J,
    oe,
    fe,
    V,
    U,
    Se,
    Oe,
    Ne,
    we,
    k,
    X,
    je,
    Ye,
    Xe,
    Ce,
    Re,
    me,
    qe
  ]);
  return t.loading ? /* @__PURE__ */ r("div", { role: "status", "aria-live": "polite", style: { padding: 48, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: e.textSecondary }, children: /* @__PURE__ */ r(ut, { size: 32, style: { animation: "zg-spin 1.5s linear infinite", color: e.group } }) }) : /* @__PURE__ */ r(Lt, { value: O, children: /* @__PURE__ */ p(
    "div",
    {
      className: "zg-root",
      style: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
        background: "var(--zg-surface)",
        borderRadius: 12,
        boxShadow: "var(--zg-shadow-panel)",
        overflow: "hidden",
        height: "calc(100vh - 48px)",
        minHeight: 600,
        border: `1px solid ${e.borderLight}`,
        opacity: fe ? 0.6 : 1,
        transition: "opacity 0.3s ease",
        pointerEvents: fe ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ r(Nt, {}),
        /* @__PURE__ */ p("div", { style: { display: "flex", flex: 1, overflow: "hidden", position: "relative", background: e.surfaceAlt }, children: [
          /* @__PURE__ */ r(Qt, {}),
          /* @__PURE__ */ r(nn, {})
        ] }),
        /* @__PURE__ */ r(dn, {})
      ]
    }
  ) });
}
const pn = [
  { label: "Yellow", value: "#FEF08A" },
  { label: "Green", value: "#BBF7D0" },
  { label: "Blue", value: "#BFDBFE" },
  { label: "Pink", value: "#FBCFE8" },
  { label: "Purple", value: "#E9D5FF" },
  { label: "Orange", value: "#FED7AA" },
  { label: "White", value: "#FFFFFF" }
], ht = {
  FS: "Finish → Start (FS)",
  SS: "Start → Start (SS)",
  FF: "Finish → Finish (FF)",
  SF: "Start → Finish (SF)"
};
function xn({
  isOpen: t,
  onClose: s,
  availableMilestones: o = [],
  initialDate: n,
  translations: i,
  onSaveNote: l
}) {
  const a = (g, q) => i ? typeof i == "function" ? i(g, q) : i[g] || q : q, [d, f] = G(""), [b, x] = G(""), [E, I] = G("#FEF08A"), [B, W] = G(""), [m, v] = G(""), [T, c] = G("FS"), [F, z] = G(!1), [M, u] = G([]), [h, w] = G(""), $ = xe(null);
  ve(() => {
    t && (f(""), x(""), I("#FEF08A"), W(n ?? (/* @__PURE__ */ new Date()).toISOString().split("T")[0]), v(""), c("FS"), u([]), w(""));
  }, [t, n]);
  const N = [
    ...o.map((g) => ({ id: g.id, name: g.name, type: "MILESTONE" }))
  ], K = async () => {
    if (!d.trim() && !b.trim()) {
      w(a("noteModal.errorEmpty", "Please provide a title or content for the note."));
      return;
    }
    w("");
    try {
      z(!0), await l({
        title: d || a("noteModal.untitled", "Untitled"),
        description: b,
        color: E,
        date: B ? `${B}T00:00:00` : (/* @__PURE__ */ new Date()).toISOString(),
        predecessorId: m,
        dependencyType: T,
        files: M
      }), s();
    } catch (g) {
      console.error(g), w(a("noteModal.errorSave", "Error creating note."));
    } finally {
      z(!1);
    }
  };
  return t ? /* @__PURE__ */ r("div", { style: { position: "fixed", inset: 0, background: e.overlaySoft, backdropFilter: "blur(2px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 16 }, onClick: s, children: /* @__PURE__ */ p("div", { onClick: (g) => g.stopPropagation(), style: {
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
        onClick: s,
        style: { position: "absolute", top: 10, right: 10, width: 24, height: 24, borderRadius: "50%", background: e.groupSoftStrong, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14, color: e.inkMedium },
        onMouseEnter: (g) => g.currentTarget.style.background = e.groupBorderWeak,
        onMouseLeave: (g) => g.currentTarget.style.background = e.groupSoftStrong,
        children: "✕"
      }
    ),
    /* @__PURE__ */ p("div", { style: { padding: "28px 24px 20px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }, children: [
      h && /* @__PURE__ */ r("div", { style: { background: e.todaySoft, color: e.dangerText, padding: "8px 12px", borderRadius: 6, fontSize: 12, marginBottom: 12, border: `1px solid ${e.todayMid}` }, children: h }),
      /* @__PURE__ */ r(
        "input",
        {
          type: "text",
          value: d,
          onChange: (g) => f(g.target.value),
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
          value: b,
          onChange: (g) => x(g.target.value),
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
            ref: $,
            type: "file",
            multiple: !0,
            onChange: (g) => {
              const q = g.target.files ? Array.from(g.target.files) : [];
              q.length > 0 && u((A) => [...A, ...q]), $.current && ($.current.value = "");
            },
            style: { display: "none" }
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            onClick: () => $.current?.click(),
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
            onMouseEnter: (g) => g.currentTarget.style.background = e.groupSoftStrong,
            onMouseLeave: (g) => g.currentTarget.style.background = e.groupSoft,
            children: [
              /* @__PURE__ */ r(At, { size: 13 }),
              a("noteModal.attachFiles", "Attach files")
            ]
          }
        ),
        M.length > 0 && /* @__PURE__ */ r("div", { style: { marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }, children: M.map((g, q) => /* @__PURE__ */ p("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 8px",
          borderRadius: 4,
          background: e.surfaceFrost,
          fontSize: 11,
          color: e.inkMedium
        }, children: [
          /* @__PURE__ */ r(He, { size: 10, style: { flexShrink: 0 } }),
          /* @__PURE__ */ r("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: g.name }),
          /* @__PURE__ */ p("span", { style: { fontSize: 9, color: e.inkSoft4, flexShrink: 0 }, children: [
            (g.size / 1024).toFixed(0),
            "KB"
          ] }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => u((A) => A.filter((ne, J) => J !== q)),
              style: { background: "none", border: "none", cursor: "pointer", padding: 2, display: "flex", color: e.dangerText },
              title: a("noteModal.removeFile", "Remove"),
              children: /* @__PURE__ */ r(gt, { size: 12 })
            }
          )
        ] }, `file-${q}`)) })
      ] }),
      /* @__PURE__ */ p("div", { style: { marginTop: 16, paddingTop: 12, borderTop: `1px solid ${e.groupSoftStrong}`, display: "flex", alignItems: "center", justifyItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
        /* @__PURE__ */ r(
          "input",
          {
            type: "date",
            value: B,
            onChange: (g) => W(g.target.value),
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
        /* @__PURE__ */ r("div", { style: { display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }, children: pn.map((g) => /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: () => I(g.value),
            style: {
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: E === g.value ? `2px solid ${e.group}` : `1.5px solid ${e.groupSoftStrong}`,
              backgroundColor: g.value,
              cursor: "pointer",
              padding: 0,
              transform: E === g.value ? "scale(1.15)" : "scale(1)",
              transition: "all 0.15s",
              boxShadow: E === g.value ? e.shadowSmall : "none"
            },
            title: g.label
          },
          g.value
        )) })
      ] }),
      N.length > 0 && /* @__PURE__ */ p("div", { style: { marginTop: 12, paddingTop: 12, borderTop: `1px solid ${e.groupSoftStrong}` }, children: [
        /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }, children: [
          /* @__PURE__ */ r(Ft, { size: 14, style: { color: e.inkSoft3 } }),
          /* @__PURE__ */ r("span", { style: { fontSize: 11, color: e.inkSoft3, fontWeight: 600 }, children: a("noteModal.dependency", "Dependency") })
        ] }),
        /* @__PURE__ */ p(
          "select",
          {
            value: m,
            onChange: (g) => v(g.target.value),
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
              o.length > 0 && /* @__PURE__ */ r("optgroup", { label: a("noteModal.milestones", "Milestones"), children: o.map((g) => /* @__PURE__ */ r("option", { value: g.id, children: g.name }, g.id)) })
            ]
          }
        ),
        m && /* @__PURE__ */ r(
          "select",
          {
            value: T,
            onChange: (g) => c(g.target.value),
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
            children: Object.keys(ht).map((g) => /* @__PURE__ */ r("option", { value: g, children: ht[g] }, g))
          }
        )
      ] }),
      /* @__PURE__ */ p("div", { style: { display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 16, marginTop: 12, borderTop: `1px solid ${e.groupSoftStrong}` }, children: [
        /* @__PURE__ */ r(
          "button",
          {
            onClick: s,
            style: { padding: "8px 16px", fontSize: 13, color: e.inkMedium, background: e.surfaceFrost, border: `1px solid ${e.groupSoftStrong}`, borderRadius: 8, cursor: "pointer" },
            children: a("noteModal.cancel", "Cancel")
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            onClick: K,
            disabled: F,
            style: { padding: "8px 20px", fontSize: 13, color: e.white, background: e.group, border: "none", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, opacity: F ? 0.5 : 1 },
            children: [
              F && /* @__PURE__ */ r(ut, { size: 16, style: { animation: "zg-spin 1s linear infinite" } }),
              a("noteModal.create", "Create Note")
            ]
          }
        )
      ] })
    ] })
  ] }) }) : null;
}
export {
  xn as NoteModal,
  bn as ProjectGantt,
  cn as enUS,
  yn as ptBR
};
