import { jsx as o, jsxs as c, Fragment as ce } from "react/jsx-runtime";
import * as Xe from "react";
import { createContext as Mt, useContext as Tt, useMemo as oe, useCallback as J, useRef as ge, useEffect as fe, useState as _ } from "react";
import { Flag as Ce, Clock as Re, MessageCircle as Et, Plus as Ke, ChevronDown as qe, ChevronRight as tt, Paperclip as Ve, AlertTriangle as Dt, Eye as zt, Edit2 as Ct, Trash2 as Rt, Calendar as At, X as ht, Loader2 as ut, Upload as Ft, Link2 as Lt } from "lucide-react";
import { flushSync as Wt } from "react-dom";
const gt = Mt(void 0);
function $t({ children: e, value: s }) {
  return /* @__PURE__ */ o(gt.Provider, { value: s, children: e });
}
function ve() {
  const e = Tt(gt);
  if (!e)
    throw new Error("useGanttContext must be used within a GanttProvider");
  return e;
}
const ie = {
  dark_gray: "#4F4F4F",
  gray: "#7B7B7B",
  light_gray: "#D9D9D9",
  dark_green: "#1A3C30",
  water_green: "#7ab7a3",
  light_green: "#A0D8A8",
  orange: "#CD6200",
  red: "#FF0000"
}, t = {
  pageBg: "var(--zg-page-bg, #F8FAFB)",
  surface: "var(--zg-surface, #FFFFFF)",
  surfaceAlt: "var(--zg-surface-alt, #F7FAF8)",
  headerBg: "var(--zg-header-bg, #F2F5F3)",
  textTitle: "var(--zg-primary-color, #1A3C30)",
  textPrimary: ie.dark_gray,
  // #4F4F4F
  textSecondary: ie.gray,
  // #7B7B7B
  textMuted: ie.light_gray,
  // #D9D9D9
  group: ie.dark_green,
  // #1A3C30
  groupLight: ie.water_green,
  // #A0D8A8 (bar border)
  milestone: ie.dark_green,
  // #1A3C30
  milestoneRing: ie.light_green,
  // #A0D8A8
  event: ie.orange,
  // yellow translucent
  note: "var(--zg-note-color, #FFBB1C)",
  border: "var(--zg-border, #D9D9D9)",
  borderLight: "var(--zg-border-light, #ECECEC)",
  weekendBg: "#F4F6F5",
  today: ie.red,
  // #FF0000
  todayBg: "#FF000008",
  // today column tint
  arrow: ie.gray,
  // #7B7B7B
  arrowHover: ie.dark_green
  // #1A3C30
}, Z = 50, ze = 32, Bt = ze * 2, Pt = 460, se = 26, ye = 28, Je = 120, Ot = 40, Nt = 3.5, ae = [
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
], nt = {
  step: "Steps",
  milestone: "Milestones",
  event: "Events",
  note: "Notes"
};
function jt() {
  const {
    props: e,
    t: s,
    viewMode: r,
    setViewMode: n,
    visibleTypes: i,
    setVisibleTypes: l,
    newActionOpen: a,
    setNewActionOpen: d,
    newActionRef: y
  } = ve(), { projectName: b, onAddNewStage: S, onAddMilestone: k, onAddEvent: I, onAddNote: E } = e, F = (g) => {
    l((C) => {
      const D = new Set(C);
      return D.has(g) ? D.delete(g) : D.add(g), D;
    });
  };
  return /* @__PURE__ */ c(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 24px",
        borderBottom: `1px solid ${t.border}`,
        background: `linear-gradient(180deg, ${t.headerBg} 0%, ${t.surface} 100%)`
      },
      children: [
        /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
          /* @__PURE__ */ c("div", { children: [
            /* @__PURE__ */ o("h3", { style: { margin: 0, fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: t.textTitle }, children: s("planning.gantt", "Project Planning") }),
            /* @__PURE__ */ o("div", { style: { height: 2.5, width: 64, marginTop: 6, borderRadius: 9999, background: `linear-gradient(90deg, ${t.group}, ${t.milestoneRing})` } })
          ] }),
          b && /* @__PURE__ */ o(
            "span",
            {
              style: {
                fontSize: 12,
                fontWeight: 500,
                padding: "4px 12px",
                borderRadius: 9999,
                color: t.textSecondary,
                background: t.surface,
                border: `1px solid ${t.border}`
              },
              children: b
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ o("div", { style: { display: "flex", padding: 4, borderRadius: 8, background: "rgba(122,122,122,0.07)", border: `1px solid ${t.borderLight}` }, children: ["day", "month"].map((g) => /* @__PURE__ */ o(
            "button",
            {
              onClick: () => n(g),
              style: {
                padding: "6px 20px",
                fontSize: 12,
                fontWeight: 600,
                borderRadius: 6,
                transition: "all 0.2s",
                border: "none",
                cursor: "pointer",
                ...r === g ? { background: t.surface, color: t.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { background: "transparent", color: t.textSecondary }
              },
              children: g === "day" ? s("charts.gantt.month", "Month") : s("charts.gantt.year", "Year")
            },
            g
          )) }),
          /* @__PURE__ */ o("div", { style: { display: "flex", padding: 4, borderRadius: 8, gap: 2, background: "rgba(122,122,122,0.07)", border: `1px solid ${t.borderLight}` }, children: [
            { type: "step", label: s("gantt.filter.steps", "Steps"), icon: /* @__PURE__ */ o("div", { style: { width: 10, height: 10, borderRadius: 2, background: ae[0].bar, border: `1px solid ${ae[0].barBorder}` } }) },
            { type: "milestone", label: s("gantt.filter.milestones", "Milestones"), icon: /* @__PURE__ */ o(Ce, { size: 11, style: { color: t.milestone } }) },
            { type: "event", label: s("gantt.filter.events", "Events"), icon: /* @__PURE__ */ o(Re, { size: 11, style: { color: t.event } }) },
            { type: "note", label: s("gantt.filter.notes", "Notes"), icon: /* @__PURE__ */ o(Et, { size: 11, style: { color: t.note } }) }
          ].map((g) => {
            const C = i.has(g.type);
            return /* @__PURE__ */ c(
              "button",
              {
                onClick: () => F(g.type),
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
                  ...C ? { background: t.surface, color: t.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { background: "transparent", color: t.textMuted, opacity: 0.5 }
                },
                children: [
                  g.icon,
                  /* @__PURE__ */ o("span", { children: g.label })
                ]
              },
              g.type
            );
          }) }),
          S && /* @__PURE__ */ c("div", { ref: y, style: { position: "relative" }, children: [
            /* @__PURE__ */ c(
              "button",
              {
                onClick: () => d((g) => !g),
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  background: `linear-gradient(135deg, ${t.group}, ${t.group}dd)`,
                  transition: "all 0.2s"
                },
                children: [
                  /* @__PURE__ */ o(Ke, { size: 16 }),
                  /* @__PURE__ */ o("span", { children: s("charts.gantt.newAction", "New Action") }),
                  /* @__PURE__ */ o(qe, { size: 14, style: { opacity: 0.7, transform: a ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
                ]
              }
            ),
            a && /* @__PURE__ */ o(
              "div",
              {
                style: {
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  right: 0,
                  zIndex: 99999,
                  background: "#fff",
                  borderRadius: 10,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.15), 0 3px 10px rgba(0,0,0,0.08)",
                  border: `1.5px solid ${t.borderLight}`,
                  width: 200,
                  overflow: "hidden",
                  padding: "5px 5px"
                },
                onClick: (g) => g.stopPropagation(),
                children: [
                  {
                    label: s("gantt.newAction.step", "Step"),
                    icon: /* @__PURE__ */ o("div", { style: { width: 14, height: 14, borderRadius: 3, background: ae[0].bar, border: `1.5px solid ${ae[0].barBorder}`, flexShrink: 0 } }),
                    action: () => {
                      S(), d(!1);
                    }
                  },
                  {
                    label: s("gantt.newAction.milestone", "Milestone"),
                    icon: /* @__PURE__ */ o("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.milestoneRing}30`, border: `1.5px solid ${t.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(Ce, { size: 11, style: { color: t.milestone } }) }),
                    action: () => {
                      k?.(), d(!1);
                    }
                  },
                  {
                    label: s("gantt.newAction.event", "Event"),
                    icon: /* @__PURE__ */ o("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.event}18`, border: `1.5px solid ${t.event}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(Re, { size: 11, style: { color: t.event } }) }),
                    action: () => {
                      I?.(), d(!1);
                    }
                  },
                  {
                    label: s("gantt.newAction.note", "Note"),
                    icon: /* @__PURE__ */ o("div", { style: { width: 16, height: 20, background: t.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ o("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } }) }),
                    action: () => {
                      E?.(), d(!1);
                    }
                  }
                ].map((g) => /* @__PURE__ */ c(
                  "button",
                  {
                    onClick: g.action,
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
                      color: t.textPrimary,
                      textAlign: "left",
                      transition: "background 0.12s"
                    },
                    onMouseEnter: (C) => {
                      C.currentTarget.style.background = t.headerBg;
                    },
                    onMouseLeave: (C) => {
                      C.currentTarget.style.background = "transparent";
                    },
                    children: [
                      g.icon,
                      g.label
                    ]
                  },
                  g.label
                ))
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function be(e, s, r) {
  let n = r.initialDeps ?? [], i, l = !0;
  function a() {
    var d, y, b;
    let S;
    r.key && ((d = r.debug) != null && d.call(r)) && (S = Date.now());
    const k = e();
    if (!(k.length !== n.length || k.some((F, g) => n[g] !== F)))
      return i;
    n = k;
    let E;
    if (r.key && ((y = r.debug) != null && y.call(r)) && (E = Date.now()), i = s(...k), r.key && ((b = r.debug) != null && b.call(r))) {
      const F = Math.round((Date.now() - S) * 100) / 100, g = Math.round((Date.now() - E) * 100) / 100, C = g / 16, D = (h, W) => {
        for (h = String(h); h.length < W; )
          h = " " + h;
        return h;
      };
      console.info(
        `%c⏱ ${D(g, 5)} /${D(F, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * C, 120)
        )}deg 100% 31%);`,
        r?.key
      );
    }
    return r?.onChange && !(l && r.skipInitialOnChange) && r.onChange(i), l = !1, i;
  }
  return a.updateDeps = (d) => {
    n = d;
  }, a;
}
function ot(e, s) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Yt = (e, s) => Math.abs(e - s) < 1.01, _t = (e, s, r) => {
  let n;
  return function(...i) {
    e.clearTimeout(n), n = e.setTimeout(() => s.apply(this, i), r);
  };
}, rt = (e) => {
  const { offsetWidth: s, offsetHeight: r } = e;
  return { width: s, height: r };
}, Xt = (e) => e, Vt = (e) => {
  const s = Math.max(e.startIndex - e.overscan, 0), r = Math.min(e.endIndex + e.overscan, e.count - 1), n = [];
  for (let i = s; i <= r; i++)
    n.push(i);
  return n;
}, Ht = (e, s) => {
  const r = e.scrollElement;
  if (!r)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const i = (a) => {
    const { width: d, height: y } = a;
    s({ width: Math.round(d), height: Math.round(y) });
  };
  if (i(rt(r)), !n.ResizeObserver)
    return () => {
    };
  const l = new n.ResizeObserver((a) => {
    const d = () => {
      const y = a[0];
      if (y?.borderBoxSize) {
        const b = y.borderBoxSize[0];
        if (b) {
          i({ width: b.inlineSize, height: b.blockSize });
          return;
        }
      }
      i(rt(r));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(d) : d();
  });
  return l.observe(r, { box: "border-box" }), () => {
    l.unobserve(r);
  };
}, it = {
  passive: !0
}, st = typeof window > "u" ? !0 : "onscrollend" in window, Ut = (e, s) => {
  const r = e.scrollElement;
  if (!r)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  let i = 0;
  const l = e.options.useScrollendEvent && st ? () => {
  } : _t(
    n,
    () => {
      s(i, !1);
    },
    e.options.isScrollingResetDelay
  ), a = (S) => () => {
    const { horizontal: k, isRtl: I } = e.options;
    i = k ? r.scrollLeft * (I && -1 || 1) : r.scrollTop, l(), s(i, S);
  }, d = a(!0), y = a(!1);
  r.addEventListener("scroll", d, it);
  const b = e.options.useScrollendEvent && st;
  return b && r.addEventListener("scrollend", y, it), () => {
    r.removeEventListener("scroll", d), b && r.removeEventListener("scrollend", y);
  };
}, Gt = (e, s, r) => {
  if (s?.borderBoxSize) {
    const n = s.borderBoxSize[0];
    if (n)
      return Math.round(
        n[r.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[r.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Kt = (e, {
  adjustments: s = 0,
  behavior: r
}, n) => {
  var i, l;
  const a = e + s;
  (l = (i = n.scrollElement) == null ? void 0 : i.scrollTo) == null || l.call(i, {
    [n.options.horizontal ? "left" : "top"]: a,
    behavior: r
  });
};
class qt {
  constructor(s) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var r, n, i;
      return ((i = (n = (r = this.targetWindow) == null ? void 0 : r.performance) == null ? void 0 : n.now) == null ? void 0 : i.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let r = null;
      const n = () => r || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : r = new this.targetWindow.ResizeObserver((i) => {
        i.forEach((l) => {
          const a = () => {
            const d = l.target, y = this.indexFromElement(d);
            if (!d.isConnected) {
              this.observer.unobserve(d);
              return;
            }
            this.shouldMeasureDuringScroll(y) && this.resizeItem(
              y,
              this.options.measureElement(d, l, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
        });
      }));
      return {
        disconnect: () => {
          var i;
          (i = n()) == null || i.disconnect(), r = null;
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
    })(), this.range = null, this.setOptions = (r) => {
      Object.entries(r).forEach(([n, i]) => {
        typeof i > "u" && delete r[n];
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
        rangeExtractor: Vt,
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
        ...r
      };
    }, this.notify = (r) => {
      var n, i;
      (i = (n = this.options).onChange) == null || i.call(n, this, r);
    }, this.maybeNotify = be(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (r) => {
        this.notify(r);
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
      this.unsubs.filter(Boolean).forEach((r) => r()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var r;
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((r = this.scrollElement) == null ? void 0 : r.window) ?? null, this.elementsCache.forEach((i) => {
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
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (r, n) => {
      const i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
      for (let a = n - 1; a >= 0; a--) {
        const d = r[a];
        if (i.has(d.lane))
          continue;
        const y = l.get(
          d.lane
        );
        if (y == null || d.end > y.end ? l.set(d.lane, d) : d.end < y.end && i.set(d.lane, !0), i.size === this.options.lanes)
          break;
      }
      return l.size === this.options.lanes ? Array.from(l.values()).sort((a, d) => a.end === d.end ? a.index - d.index : a.end - d.end)[0] : void 0;
    }, this.getMeasurementOptions = be(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (r, n, i, l, a, d) => (this.prevLanes !== void 0 && this.prevLanes !== d && (this.lanesChangedFlag = !0), this.prevLanes = d, this.pendingMeasuredCacheIndexes = [], {
        count: r,
        paddingStart: n,
        scrollMargin: i,
        getItemKey: l,
        enabled: a,
        lanes: d
      }),
      {
        key: !1
      }
    ), this.getMeasurements = be(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: r, paddingStart: n, scrollMargin: i, getItemKey: l, enabled: a, lanes: d }, y) => {
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > r)
          for (const I of this.laneAssignments.keys())
            I >= r && this.laneAssignments.delete(I);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((I) => {
          this.itemSizeCache.set(I.key, I.size);
        }));
        const b = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === r && (this.lanesSettling = !1);
        const S = this.measurementsCache.slice(0, b), k = new Array(d).fill(
          void 0
        );
        for (let I = 0; I < b; I++) {
          const E = S[I];
          E && (k[E.lane] = I);
        }
        for (let I = b; I < r; I++) {
          const E = l(I), F = this.laneAssignments.get(I);
          let g, C;
          if (F !== void 0 && this.options.lanes > 1) {
            g = F;
            const R = k[g], z = R !== void 0 ? S[R] : void 0;
            C = z ? z.end + this.options.gap : n + i;
          } else {
            const R = this.options.lanes === 1 ? S[I - 1] : this.getFurthestMeasurement(S, I);
            C = R ? R.end + this.options.gap : n + i, g = R ? R.lane : I % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(I, g);
          }
          const D = y.get(E), h = typeof D == "number" ? D : this.options.estimateSize(I), W = C + h;
          S[I] = {
            index: I,
            start: C,
            size: h,
            end: W,
            key: E,
            lane: g
          }, k[g] = I;
        }
        return this.measurementsCache = S, S;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = be(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (r, n, i, l) => this.range = r.length > 0 && n > 0 ? Jt({
        measurements: r,
        outerSize: n,
        scrollOffset: i,
        lanes: l
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = be(
      () => {
        let r = null, n = null;
        const i = this.calculateRange();
        return i && (r = i.startIndex, n = i.endIndex), this.maybeNotify.updateDeps([this.isScrolling, r, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          r,
          n
        ];
      },
      (r, n, i, l, a) => l === null || a === null ? [] : r({
        startIndex: l,
        endIndex: a,
        overscan: n,
        count: i
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (r) => {
      const n = this.options.indexAttribute, i = r.getAttribute(n);
      return i ? parseInt(i, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (r) => {
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
        return r >= a && r <= d;
      }
      return !0;
    }, this.measureElement = (r) => {
      if (!r) {
        this.elementsCache.forEach((a, d) => {
          a.isConnected || (this.observer.unobserve(a), this.elementsCache.delete(d));
        });
        return;
      }
      const n = this.indexFromElement(r), i = this.options.getItemKey(n), l = this.elementsCache.get(i);
      l !== r && (l && this.observer.unobserve(l), this.observer.observe(r), this.elementsCache.set(i, r)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(r, void 0, this));
    }, this.resizeItem = (r, n) => {
      var i;
      const l = this.measurementsCache[r];
      if (!l) return;
      const a = this.itemSizeCache.get(l.key) ?? l.size, d = n - a;
      d !== 0 && (((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(l, d, this) : l.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", d), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += d,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(l.index), this.itemSizeCache = new Map(this.itemSizeCache.set(l.key, n)), this.notify(!1));
    }, this.getVirtualItems = be(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (r, n) => {
        const i = [];
        for (let l = 0, a = r.length; l < a; l++) {
          const d = r[l], y = n[d];
          i.push(y);
        }
        return i;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (r) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return ot(
          n[ft(
            0,
            n.length - 1,
            (i) => ot(n[i]).start,
            r
          )]
        );
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const r = this.scrollElement.document.documentElement;
        return this.options.horizontal ? r.scrollWidth - this.scrollElement.innerWidth : r.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getOffsetForAlignment = (r, n, i = 0) => {
      if (!this.scrollElement) return 0;
      const l = this.getSize(), a = this.getScrollOffset();
      n === "auto" && (n = r >= a + l ? "end" : "start"), n === "center" ? r += (i - l) / 2 : n === "end" && (r -= l);
      const d = this.getMaxScrollOffset();
      return Math.max(Math.min(d, r), 0);
    }, this.getOffsetForIndex = (r, n = "auto") => {
      r = Math.max(0, Math.min(r, this.options.count - 1));
      const i = this.getSize(), l = this.getScrollOffset(), a = this.measurementsCache[r];
      if (!a) return;
      if (n === "auto")
        if (a.end >= l + i - this.options.scrollPaddingEnd)
          n = "end";
        else if (a.start <= l + this.options.scrollPaddingStart)
          n = "start";
        else
          return [l, n];
      if (n === "end" && r === this.options.count - 1)
        return [this.getMaxScrollOffset(), n];
      const d = n === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(d, n, a.size),
        n
      ];
    }, this.scrollToOffset = (r, { align: n = "start", behavior: i = "auto" } = {}) => {
      const l = this.getOffsetForAlignment(r, n), a = this.now();
      this.scrollState = {
        index: null,
        align: n,
        behavior: i,
        startedAt: a,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: i }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (r, {
      align: n = "auto",
      behavior: i = "auto"
    } = {}) => {
      r = Math.max(0, Math.min(r, this.options.count - 1));
      const l = this.getOffsetForIndex(r, n);
      if (!l)
        return;
      const [a, d] = l, y = this.now();
      this.scrollState = {
        index: r,
        align: d,
        behavior: i,
        startedAt: y,
        lastTargetOffset: a,
        stableFrames: 0
      }, this._scrollToOffset(a, { adjustments: void 0, behavior: i }), this.scheduleScrollReconcile();
    }, this.scrollBy = (r, { behavior: n = "auto" } = {}) => {
      const i = this.getScrollOffset() + r, l = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: n,
        startedAt: l,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: n }), this.scheduleScrollReconcile();
    }, this.getTotalSize = () => {
      var r;
      const n = this.getMeasurements();
      let i;
      if (n.length === 0)
        i = this.options.paddingStart;
      else if (this.options.lanes === 1)
        i = ((r = n[n.length - 1]) == null ? void 0 : r.end) ?? 0;
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
    }, this._scrollToOffset = (r, {
      adjustments: n,
      behavior: i
    }) => {
      this.options.scrollToFn(r, { behavior: i, adjustments: n }, this);
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
    if (!a && Yt(i, this.getScrollOffset())) {
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
const ft = (e, s, r, n) => {
  for (; e <= s; ) {
    const i = (e + s) / 2 | 0, l = r(i);
    if (l < n)
      e = i + 1;
    else if (l > n)
      s = i - 1;
    else
      return i;
  }
  return e > 0 ? e - 1 : 0;
};
function Jt({
  measurements: e,
  outerSize: s,
  scrollOffset: r,
  lanes: n
}) {
  const i = e.length - 1, l = (y) => e[y].start;
  if (e.length <= n)
    return {
      startIndex: 0,
      endIndex: i
    };
  let a = ft(
    0,
    i,
    l,
    r
  ), d = a;
  if (n === 1)
    for (; d < i && e[d].end < r + s; )
      d++;
  else if (n > 1) {
    const y = Array(n).fill(0);
    for (; d < i && y.some((S) => S < r + s); ) {
      const S = e[d];
      y[S.lane] = S.end, d++;
    }
    const b = Array(n).fill(r + s);
    for (; a >= 0 && b.some((S) => S >= r); ) {
      const S = e[a];
      b[S.lane] = S.start, a--;
    }
    a = Math.max(0, a - a % n), d = Math.min(i, d + (n - 1 - d % n));
  }
  return { startIndex: a, endIndex: d };
}
const at = typeof document < "u" ? Xe.useLayoutEffect : Xe.useEffect;
function Qt({
  useFlushSync: e = !0,
  ...s
}) {
  const r = Xe.useReducer(() => ({}), {})[1], n = {
    ...s,
    onChange: (l, a) => {
      var d;
      e && a ? Wt(r) : r(), (d = s.onChange) == null || d.call(s, l, a);
    }
  }, [i] = Xe.useState(
    () => new qt(n)
  );
  return i.setOptions(n), at(() => i._didMount(), []), at(() => i._willUpdate()), i;
}
function Qe(e) {
  return Qt({
    observeElementRect: Ht,
    observeElementOffset: Ut,
    scrollToFn: Kt,
    ...e
  });
}
const mt = 864e5, re = (e, s) => new Date(e.getTime() + s * mt), xe = (e, s) => Math.round((s.getTime() - e.getTime()) / mt), lt = (e) => new Date(e.getFullYear(), e.getMonth(), 1), Ge = (e) => new Date(e.getFullYear(), e.getMonth() + 1, 0), yt = (e) => {
  if (!e) return "en-US";
  try {
    return new Intl.DateTimeFormat(e).resolvedOptions().locale;
  } catch {
    return "en-US";
  }
}, te = (e, s = "en-US") => new Intl.DateTimeFormat(yt(s), {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
}).format(e), dt = (e, s = "en") => new Intl.DateTimeFormat(yt(s), { month: "long" }).format(e).toUpperCase();
function Zt() {
  const {
    props: e,
    t: s,
    displayRows: r,
    leftBodyRef: n,
    handleLeftScroll: i,
    toggleProject: l,
    toggleGroup: a,
    hoveredTaskId: d,
    setHoveredTaskId: y,
    selectedTaskId: b,
    setSelectedTaskId: S,
    delayedIds: k,
    criticalIds: I,
    relatedIds: E,
    setActivePinboardTask: F
  } = ve(), g = (z) => ({
    id: z.id,
    name: z.name,
    start: z.start,
    end: z.end,
    type: z.originalType === "step" ? "task" : "milestone",
    progress: z.progress
  }), C = Qe({
    count: r.length,
    getScrollElement: () => n.current,
    estimateSize: () => Z,
    overscan: 12
  }), D = C.getVirtualItems(), h = Math.max(C.getTotalSize(), 400) + 80, W = oe(
    () => r.filter((z) => z.kind === "task").map((z) => z.task.id),
    [r]
  ), R = J((z, x) => {
    const p = W.indexOf(z);
    if (p < 0) return;
    const M = Math.min(Math.max(0, p + x), W.length - 1), $ = W[M];
    $ && S($);
  }, [W, S]);
  return /* @__PURE__ */ c("div", { style: { width: Pt, flexShrink: 0, borderRight: `1px solid ${t.border}`, display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ c(
      "div",
      {
        style: {
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          height: Bt,
          background: t.headerBg,
          borderBottom: `1px solid ${t.border}`
        },
        children: [
          /* @__PURE__ */ o("div", { style: { flex: 1, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: t.textSecondary }, children: s("charts.gantt.stepName", "STEP NAME") }),
          /* @__PURE__ */ o("div", { style: { width: 80, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", color: t.textSecondary }, children: s("charts.gantt.start", "START") }),
          /* @__PURE__ */ o("div", { style: { width: 80, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", color: t.textSecondary }, children: s("charts.gantt.end", "END") })
        ]
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        ref: n,
        onScroll: i,
        className: "zg-no-scrollbar",
        style: { overflowY: "auto", overflowX: "hidden", flex: 1 },
        role: "grid",
        "aria-rowcount": r.length,
        children: /* @__PURE__ */ o("div", { style: { height: h, position: "relative" }, children: D.map((z) => {
          const x = r[z.index];
          if (!x) return null;
          const p = {
            position: "absolute",
            top: z.start,
            left: 0,
            width: "100%",
            height: Z
          };
          if (x.kind === "projectHeader")
            return /* @__PURE__ */ o(
              "div",
              {
                style: {
                  ...p,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  borderBottom: `1.5px solid ${t.group}44`,
                  background: `${t.group}0E`
                },
                onClick: () => l(x.projectId),
                onKeyDown: (j) => {
                  (j.key === "Enter" || j.key === " ") && (j.preventDefault(), l(x.projectId));
                },
                role: "button",
                tabIndex: 0,
                "aria-label": `Toggle project ${x.projectTitle}`,
                "aria-expanded": !x.collapsed,
                children: /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  x.collapsed ? /* @__PURE__ */ o(tt, { size: 15, style: { color: t.group, flexShrink: 0 } }) : /* @__PURE__ */ o(qe, { size: 15, style: { color: t.group, flexShrink: 0 } }),
                  /* @__PURE__ */ o("span", { style: {
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: t.group,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }, children: x.projectTitle })
                ] })
              },
              `ph-${x.projectId}`
            );
          if (x.kind === "group") {
            const j = x.projectId ? `${x.projectId}-${x.groupType}` : x.groupType;
            return /* @__PURE__ */ o(
              "div",
              {
                style: {
                  ...p,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  borderBottom: `1px solid ${t.border}`,
                  background: t.headerBg
                },
                onClick: () => a(j),
                onKeyDown: (Q) => {
                  (Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), a(j));
                },
                role: "button",
                tabIndex: 0,
                "aria-label": `Toggle group ${x.label}`,
                "aria-expanded": !x.collapsed,
                children: /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  x.collapsed ? /* @__PURE__ */ o(tt, { size: 14, style: { color: t.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ o(qe, { size: 14, style: { color: t.textSecondary, flexShrink: 0 } }),
                  /* @__PURE__ */ o("span", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: t.textTitle }, children: s(`gantt.group.${x.groupType}`, x.label) }),
                  /* @__PURE__ */ o("span", { style: { fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 9999, background: "rgba(0,0,0,0.06)", color: t.textSecondary }, children: x.count })
                ] })
              },
              `g-${j}`
            );
          }
          const M = x.task, $ = b === M.id, N = d === M.id, X = M.originalType !== "step", m = k.has(M.id), U = I.has(M.id), L = b !== null && M.id !== b && !E.has(M.id), ee = b !== null && E.has(M.id), G = m ? "#FFF5F5" : $ ? t.groupLight : ee ? `${t.groupLight}99` : N ? t.pageBg : t.surface;
          return /* @__PURE__ */ c(
            "div",
            {
              style: {
                ...p,
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                cursor: "pointer",
                transition: "opacity 0.18s, background 0.15s",
                borderBottom: `1px solid ${t.borderLight}`,
                background: G,
                borderLeft: $ ? `3px solid ${t.group}` : ee ? `3px solid ${t.group}66` : U ? `3px solid ${t.today}` : void 0,
                opacity: L ? 0.3 : 1
              },
              onClick: () => S((j) => j === M.id ? null : M.id),
              onDoubleClick: () => e.onTaskClick?.(g(M)),
              onMouseEnter: () => y(M.id),
              onMouseLeave: () => y(null),
              onKeyDown: (j) => {
                if (j.key === "Enter") {
                  j.preventDefault(), e.onTaskClick?.(g(M));
                  return;
                }
                if (j.key === " ") {
                  j.preventDefault(), S((Q) => Q === M.id ? null : M.id);
                  return;
                }
                if (j.key === "ArrowDown") {
                  j.preventDefault(), R(M.id, 1);
                  return;
                }
                j.key === "ArrowUp" && (j.preventDefault(), R(M.id, -1));
              },
              role: "button",
              tabIndex: 0,
              "aria-selected": $,
              "aria-label": `Task ${M.name}`,
              children: [
                /* @__PURE__ */ c("div", { style: { flex: 1, display: "flex", alignItems: "center", gap: 8, minWidth: 0, paddingRight: 8 }, children: [
                  M.originalType === "step" && /* @__PURE__ */ o("div", { style: { flexShrink: 0, borderRadius: 4, width: 14, height: 14, background: ae[M.colorIdx ?? 0].bar, border: `1.5px solid ${ae[M.colorIdx ?? 0].barBorder}` } }),
                  M.originalType === "milestone" && /* @__PURE__ */ o("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: `${t.milestoneRing}30`, border: `1.5px solid ${t.milestoneRing}` }, children: /* @__PURE__ */ o(Ce, { size: 11, style: { color: t.milestone } }) }),
                  M.originalType === "event" && /* @__PURE__ */ o("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: `${t.event}18`, border: `1.5px solid ${t.event}55` }, children: /* @__PURE__ */ o(Re, { size: 11, style: { color: t.event } }) }),
                  /* @__PURE__ */ o("div", { style: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }, children: /* @__PURE__ */ o(
                    "span",
                    {
                      style: {
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.25,
                        color: $ ? t.group : m ? t.today : t.textPrimary,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: M.name
                    }
                  ) }),
                  (M.attachedNotes?.length || 0) > 0 && /* @__PURE__ */ c(
                    "button",
                    {
                      className: "zg-note-badge-btn",
                      "aria-label": `Open ${M.attachedNotes?.length} linked notes`,
                      style: {
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 11,
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: 6,
                        color: "#1A3C30",
                        background: "#FACC15",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        transition: "transform 0.12s ease"
                      },
                      onClick: (j) => {
                        j.stopPropagation(), F(M);
                      },
                      children: [
                        /* @__PURE__ */ o(Ve, { size: 12 }),
                        M.attachedNotes?.length
                      ]
                    }
                  ),
                  m && /* @__PURE__ */ o(Dt, { size: 12, style: { flexShrink: 0, color: t.today } })
                ] }),
                /* @__PURE__ */ o("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: m ? t.today : t.textMuted }, children: te(M.start, e.locale) }),
                /* @__PURE__ */ o("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: m ? t.today : t.textMuted }, children: X ? "—" : te(M.end, e.locale) })
              ]
            },
            M.id
          );
        }) })
      }
    )
  ] });
}
function en(e, s, r = "en") {
  const n = s === "day" ? Ot : Nt, i = (g, C) => {
    const D = [], h = (/* @__PURE__ */ new Date()).toDateString();
    let W = -1;
    for (let R = 0; R < C; R++) {
      const z = re(g, R), x = z.toDateString() === h;
      x && (W = R), D.push({
        date: z,
        isToday: x,
        isWeekend: z.getDay() === 0 || z.getDay() === 6
      });
    }
    return { daysArr: D, todayIndex: W };
  };
  if (e.length === 0) {
    const g = /* @__PURE__ */ new Date(), C = lt(g), D = Ge(g), h = xe(C, D) + 1, { daysArr: W, todayIndex: R } = i(C, h);
    return {
      start: C,
      end: D,
      totalDays: h,
      dayWidth: n,
      totalWidth: h * n,
      months: [{ date: C, label: `${dt(C, r)} ${C.getFullYear()}`, startDay: 0, days: h, width: h * n }],
      years: [{ label: C.getFullYear().toString(), width: h * n }],
      days: W,
      todayIndex: R
    };
  }
  let l = new Date(e[0].start), a = new Date(e[0].end);
  e.forEach((g) => {
    g.start < l && (l = new Date(g.start)), g.end > a && (a = new Date(g.end));
  });
  const d = lt(re(l, -14)), y = Ge(re(a, 14)), b = xe(d, y) + 1, S = [];
  let k = new Date(d);
  for (; k <= y; ) {
    const g = Ge(k), C = g > y ? y : g, D = xe(d, k), h = xe(k, C) + 1;
    S.push({
      date: new Date(k),
      label: `${dt(k, r)} ${k.getFullYear()}`,
      startDay: D,
      days: h,
      width: h * n
    }), k = new Date(k.getFullYear(), k.getMonth() + 1, 1);
  }
  const { daysArr: I, todayIndex: E } = i(d, b), F = [];
  if (s === "month") {
    let g = "", C = 0;
    for (const D of S) {
      const h = D.date.getFullYear().toString();
      h !== g ? (g && F.push({ label: g, width: C * n }), g = h, C = D.days) : C += D.days;
    }
    g && F.push({ label: g, width: C * n });
  }
  return { start: d, end: y, totalDays: b, dayWidth: n, totalWidth: b * n, months: S, years: F, days: I, todayIndex: E };
}
function pe(e, s) {
  return xe(s.start, e) * s.dayWidth;
}
function tn({
  task: e,
  x: s,
  y: r,
  w: n,
  progW: i,
  isHov: l,
  isDrag: a,
  isResize: d,
  isCritical: y,
  isDelayed: b,
  isConnectTarget: S,
  showDots: k,
  isBarDimmed: I,
  isBarHighlighted: E,
  commonEvents: F,
  handleResizeMouseDown: g,
  handleResizeTouchStart: C,
  handleConnectDotMouseDown: D,
  handleConnectDotTouchStart: h
}) {
  const { timeline: W, viewMode: R, props: z } = ve();
  if (e.originalType === "step") {
    const x = ae[e.colorIdx ?? 0], p = r + (Z - se) / 2, M = !!(e.previsionStart && e.previsionEnd), $ = M ? pe(e.previsionStart, W) : 0, N = M ? Math.max(pe(e.previsionEnd, W) - $, R === "month" ? W.dayWidth : 6) : 0, X = p + se + 3;
    return /* @__PURE__ */ c(ce, { children: [
      M && /* @__PURE__ */ o(
        "div",
        {
          title: `Previsto: ${te(e.previsionStart, z.locale)} → ${te(e.previsionEnd, z.locale)}`,
          style: {
            position: "absolute",
            left: $,
            top: X,
            width: N,
            height: 5,
            borderRadius: 3,
            background: `${x.progress}33`,
            border: `1.5px solid ${x.progress}66`,
            boxShadow: `inset 0 0 0 1px ${x.progress}22`,
            pointerEvents: "none",
            zIndex: 5
          }
        }
      ),
      /* @__PURE__ */ c(
        "div",
        {
          "data-task-id": e.id,
          ...F,
          role: "button",
          tabIndex: 0,
          "aria-label": `Task bar ${e.name}`,
          style: {
            position: "absolute",
            left: s,
            top: p,
            width: n,
            height: se,
            borderRadius: se / 2,
            background: b ? "linear-gradient(135deg, #fdd, #fee)" : x.bar,
            border: y ? `2px solid ${t.today}` : b ? `1.5px solid ${t.today}88` : `1.5px solid ${x.barBorder}`,
            cursor: a || d ? "grabbing" : "grab",
            zIndex: l || S ? 20 : 10,
            boxShadow: S ? `0 0 0 2px ${t.group}, 0 4px 16px ${t.group}33` : y ? `0 0 0 1px ${t.today}44, 0 3px 12px ${t.today}22` : E && !l ? `0 0 0 2px ${t.group}99, 0 3px 14px ${t.group}33` : l ? `0 3px 12px ${x.progress}22` : "none",
            transform: l ? "scaleY(1.06)" : "scaleY(1)",
            opacity: I ? 0.15 : 1,
            transition: a || d ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
            overflow: "visible"
          },
          children: [
            /* @__PURE__ */ c("div", { style: { position: "absolute", left: 0, top: 0, width: n, height: "100%", borderRadius: se / 2, overflow: "hidden", pointerEvents: "none" }, children: [
              /* @__PURE__ */ o("div", { style: {
                position: "absolute",
                left: 0,
                top: 0,
                width: i,
                height: "100%",
                background: b ? `linear-gradient(90deg, ${t.today}cc, ${t.today}88)` : `linear-gradient(90deg, ${x.progress}, ${x.progress}cc)`,
                borderRadius: `${se / 2}px 0 0 ${se / 2}px`,
                transition: a || d ? "none" : "width 0.3s"
              } }),
              n > 50 && /* @__PURE__ */ c("span", { style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: e.progress > 50 ? "#fff" : b ? t.today : x.progress,
                zIndex: 1,
                pointerEvents: "none"
              }, children: [
                Math.round(e.progress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ o("div", { onMouseDown: (m) => g(m, e, "left"), onTouchStart: (m) => C(m, e, "left"), style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${se / 2}px 0 0 ${se / 2}px` } }),
            /* @__PURE__ */ o("div", { onMouseDown: (m) => g(m, e, "right"), onTouchStart: (m) => C(m, e, "right"), style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${se / 2}px ${se / 2}px 0` } }),
            k && /* @__PURE__ */ c(ce, { children: [
              /* @__PURE__ */ o("div", { "data-task-id": e.id, onMouseDown: (m) => D(m, e, "left"), onTouchStart: (m) => h(m, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: t.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
              /* @__PURE__ */ o("div", { "data-task-id": e.id, onMouseDown: (m) => D(m, e, "right"), onTouchStart: (m) => h(m, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: t.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
            ] })
          ]
        }
      )
    ] });
  }
  if (e.originalType === "milestone") {
    const x = r + (Z - ye) / 2;
    return /* @__PURE__ */ c(
      "div",
      {
        "data-task-id": e.id,
        ...F,
        role: "button",
        tabIndex: 0,
        "aria-label": `Milestone ${e.name}`,
        style: {
          position: "absolute",
          left: s - 6,
          top: x,
          height: ye,
          minWidth: Je,
          borderRadius: ye / 2,
          background: y ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #e8f5ee, #f0f8f4)",
          border: S ? `2px solid ${t.group}` : y ? `2px solid ${t.today}` : `1.5px solid ${t.milestoneRing}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: a ? "grabbing" : "grab",
          zIndex: l || S ? 20 : 10,
          boxShadow: S ? `0 0 0 2px ${t.group}, 0 4px 16px ${t.group}33` : y ? `0 0 0 1px ${t.today}44, 0 3px 12px ${t.today}22` : E && !l ? `0 0 0 2px ${t.group}99, 0 3px 14px ${t.group}33` : l ? `0 3px 12px ${t.milestone}22` : "0 1px 3px rgba(0,0,0,0.06)",
          opacity: I ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: l ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ o("div", { style: { width: 20, height: 20, borderRadius: "50%", background: y ? t.today : t.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(Ce, { size: 11, color: "#fff", strokeWidth: 2.5 }) }),
          /* @__PURE__ */ o("span", { style: { fontSize: 11, fontWeight: 600, color: y ? t.today : t.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: e.name }),
          e.progress >= 100 && /* @__PURE__ */ o("span", { style: { fontSize: 9, fontWeight: 700, color: "#fff", background: t.milestoneRing, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          k && /* @__PURE__ */ c(ce, { children: [
            /* @__PURE__ */ o("div", { "data-task-id": e.id, onMouseDown: (p) => D(p, e, "left"), onTouchStart: (p) => h(p, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: t.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ o("div", { "data-task-id": e.id, onMouseDown: (p) => D(p, e, "right"), onTouchStart: (p) => h(p, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: t.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (e.originalType === "event") {
    const x = r + (Z - ye) / 2;
    return /* @__PURE__ */ c(
      "div",
      {
        "data-task-id": e.id,
        ...F,
        role: "button",
        tabIndex: 0,
        "aria-label": `Event ${e.name}`,
        style: {
          position: "absolute",
          left: s - 6,
          top: x,
          height: ye,
          minWidth: Je,
          borderRadius: ye / 2,
          background: y ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #fff7ed, #ffedd5)",
          border: S ? `2px solid ${t.group}` : y ? `2px solid ${t.today}` : `1.5px solid ${t.event}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: a ? "grabbing" : "grab",
          zIndex: l || S ? 20 : 10,
          boxShadow: S ? `0 0 0 2px ${t.group}, 0 4px 16px ${t.group}33` : y ? `0 0 0 1px ${t.today}44, 0 3px 12px ${t.today}22` : E && !l ? `0 0 0 2px ${t.group}99, 0 3px 14px ${t.group}33` : l ? `0 3px 12px ${t.event}33` : "0 1px 3px rgba(0,0,0,0.06)",
          opacity: I ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: l ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ o("div", { style: { width: 20, height: 20, borderRadius: "50%", background: y ? t.today : t.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(Re, { size: 11, color: "#fff", strokeWidth: 2.5 }) }),
          /* @__PURE__ */ o("span", { style: { fontSize: 11, fontWeight: 600, color: y ? t.today : t.event, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: e.name }),
          e.progress >= 100 && /* @__PURE__ */ o("span", { style: { fontSize: 9, fontWeight: 700, color: "#fff", background: t.event, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          k && /* @__PURE__ */ c(ce, { children: [
            /* @__PURE__ */ o("div", { "data-task-id": e.id, onMouseDown: (p) => D(p, e, "left"), onTouchStart: (p) => h(p, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: t.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ o("div", { "data-task-id": e.id, onMouseDown: (p) => D(p, e, "right"), onTouchStart: (p) => h(p, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: t.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (e.originalType === "note") {
    const p = r + 4, M = e.noteColor || "#FEF08A", $ = e.filesCount || 0;
    return /* @__PURE__ */ c(
      "div",
      {
        "data-task-id": e.id,
        ...F,
        role: "button",
        tabIndex: 0,
        "aria-label": `Note ${e.name}`,
        style: {
          position: "absolute",
          left: s,
          top: p,
          width: 148,
          minHeight: 72,
          background: M,
          borderRadius: 3,
          cursor: a ? "grabbing" : "grab",
          zIndex: l || S ? 20 : 10,
          boxShadow: S ? `0 0 0 2px ${t.group}, 4px 6px 16px rgba(0,0,0,0.22)` : E && !l ? `0 0 0 2px ${t.group}99, 3px 4px 14px rgba(0,0,0,0.18)` : l ? "4px 6px 18px rgba(0,0,0,0.22)" : "2px 3px 8px rgba(0,0,0,0.13)",
          opacity: I ? 0.2 : 1,
          transition: a ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: l ? "rotate(-1.5deg) scale(1.03) translateY(-2px)" : "rotate(0deg)",
          border: "1px solid rgba(0,0,0,0.06)",
          padding: "12px 10px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          userSelect: "none"
        },
        children: [
          /* @__PURE__ */ o("div", { style: {
            position: "absolute",
            top: -6,
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 11,
            background: "rgba(255,255,255,0.55)",
            borderRadius: 2,
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)"
          } }),
          /* @__PURE__ */ o("span", { style: {
            fontSize: 13,
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: "1.3",
            wordBreak: "break-word",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }, children: e.name }),
          e.projectTitle && /* @__PURE__ */ o("span", { style: {
            fontSize: 10,
            fontWeight: 400,
            color: "rgba(0,0,0,0.55)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: e.projectTitle }),
          /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 2 }, children: [
            /* @__PURE__ */ o("span", { style: { fontSize: 9, fontWeight: 500, color: "rgba(0,0,0,0.45)" }, children: te(e.start, z.locale) }),
            $ > 0 && /* @__PURE__ */ c("span", { style: {
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 9,
              color: "rgba(0,0,0,0.45)"
            }, children: [
              /* @__PURE__ */ o(Ve, { size: 8 }),
              " ",
              $
            ] })
          ] }),
          k && /* @__PURE__ */ c(ce, { children: [
            /* @__PURE__ */ o("div", { "data-task-id": e.id, onMouseDown: (N) => D(N, e, "left"), onTouchStart: (N) => h(N, e, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: t.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ o("div", { "data-task-id": e.id, onMouseDown: (N) => D(N, e, "right"), onTouchStart: (N) => h(N, e, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: t.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  return null;
}
function nn({ arrows: e }) {
  const {
    arrows: s,
    hoveredTaskId: r,
    selectedTaskId: n,
    relatedIds: i
  } = ve();
  return /* @__PURE__ */ o(ce, { children: (e || s).map((a, d) => {
    const y = r === a.predId || r === a.succId, b = !n || a.predId === n || a.succId === n || i.has(a.predId) || i.has(a.succId), S = n !== null && b, k = y ? t.arrowHover : S ? t.group : t.arrow;
    return /* @__PURE__ */ c("g", { style: { opacity: b ? S ? 1 : void 0 : 0.08, transition: "opacity 0.18s" }, children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: a.path,
          fill: "none",
          stroke: k,
          strokeWidth: S ? 2.5 : y ? 2 : 1.5,
          style: { transition: "stroke 0.2s, stroke-width 0.2s" }
        }
      ),
      /* @__PURE__ */ o(
        "polygon",
        {
          points: `${a.headX},${a.headY} ${a.headX - 6},${a.headY - 4} ${a.headX - 6},${a.headY + 4}`,
          fill: k,
          style: { transition: "fill 0.2s" }
        }
      )
    ] }, d);
  }) });
}
const _e = (e) => ({
  id: e.id,
  name: e.name,
  start: e.start,
  end: e.end,
  type: e.originalType === "step" ? "task" : e.originalType,
  progress: e.progress
}), De = (e, s) => {
  switch (e) {
    case "step":
      return /* @__PURE__ */ o("div", { style: { width: 12, height: 12, borderRadius: 2, background: ae[s ?? 0].bar, border: `1.5px solid ${ae[s ?? 0].barBorder}`, flexShrink: 0 } });
    case "milestone":
      return /* @__PURE__ */ o("div", { style: { width: 16, height: 16, borderRadius: "50%", background: t.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(Ce, { size: 8, color: "#fff" }) });
    case "event":
      return /* @__PURE__ */ o("div", { style: { width: 16, height: 16, borderRadius: "50%", background: t.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(Re, { size: 8, color: "#fff" }) });
    case "note":
      return /* @__PURE__ */ o("div", { style: { width: 12, height: 14, background: t.note, borderRadius: 2, boxShadow: "1px 1px 2px rgba(0,0,0,0.1)", flexShrink: 0 } });
    default:
      return null;
  }
};
function on() {
  const {
    props: e,
    t: s,
    viewMode: r,
    timeline: n,
    displayRows: i,
    dragState: l,
    resizeState: a,
    connectState: d,
    pendingConnection: y,
    setPendingConnection: b,
    depModalType: S,
    setDepModalType: k,
    depModalLag: I,
    setDepModalLag: E,
    depCreating: F,
    deletingDepId: g,
    setDeletingDepId: C,
    chartMenu: D,
    setChartMenu: h,
    rightBodyRef: W,
    timeHeaderRef: R,
    handleChartMouseDown: z,
    handleChartTouchStart: x,
    handleChartWheel: p,
    openChartMenu: M,
    handleRightScroll: $,
    hoveredTaskId: N,
    setHoveredTaskId: X,
    selectedTaskId: m,
    setSelectedTaskId: U,
    tooltip: L,
    setTooltip: ee,
    popupState: G,
    setPopupState: j,
    arrows: Q,
    criticalIds: Ae,
    delayedIds: we,
    relatedIds: Se,
    handleBarMouseDown: ke,
    handleBarTouchStart: Fe,
    handleResizeMouseDown: Le,
    handleResizeTouchStart: We,
    handleConnectDotMouseDown: $e,
    handleConnectDotTouchStart: Y,
    handleCreateDependency: V
  } = ve(), {
    onViewStage: me,
    onEditStage: Be,
    onDeleteStage: Pe,
    onDeleteDependency: Ie,
    onAddNewStage: Oe,
    onAddMilestone: Ne,
    onAddEvent: je,
    onAddNote: ne
  } = e, he = (u, w) => Math.round((w.getTime() - u.getTime()) / 864e5) + 1, Me = Qe({
    count: i.length,
    getScrollElement: () => W.current,
    estimateSize: () => Z,
    overscan: 12
  }), ue = Me.getVirtualItems(), Te = Qe({
    horizontal: !0,
    count: n.days.length,
    getScrollElement: () => W.current,
    estimateSize: () => n.dayWidth,
    overscan: 10
  }).getVirtualItems(), v = Math.max(Me.getTotalSize(), 400) + 80, T = oe(() => {
    const u = /* @__PURE__ */ new Set();
    for (const w of ue) {
      const f = i[w.index];
      f?.kind === "task" && u.add(f.task.id);
    }
    return u;
  }, [ue, i]), A = oe(
    () => Q.filter((u) => T.has(u.predId) || T.has(u.succId)),
    [Q, T]
  ), B = () => j({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  return /* @__PURE__ */ c("div", { style: { flex: 1, width: "100%", background: "var(--zg-surface-alt)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", borderLeft: `1px solid ${t.borderLight}` }, children: [
    /* @__PURE__ */ o(
      "div",
      {
        ref: R,
        style: {
          boxSizing: "border-box",
          height: ze * 2,
          background: t.headerBg,
          borderBottom: `1px solid ${t.borderLight}`,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
        },
        onWheel: p,
        children: /* @__PURE__ */ c("div", { style: { width: n.totalWidth, height: "100%", position: "relative" }, children: [
          /* @__PURE__ */ c("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: ze, display: "flex" }, children: [
            r === "day" && n.months.map((u, w) => /* @__PURE__ */ o("div", { style: { width: u.width, position: "relative", height: "100%", borderRight: `1px solid ${t.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ o("span", { style: { fontSize: 13, fontWeight: 700, color: t.textTitle, letterSpacing: "0.02em" }, children: u.label }) }, w)),
            r === "month" && n.years?.map((u, w) => /* @__PURE__ */ o("div", { style: { width: u.width, position: "relative", height: "100%", borderRight: `1px solid ${t.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ o("span", { style: { fontSize: 13, fontWeight: 700, color: t.textTitle, letterSpacing: "0.02em" }, children: u.label }) }, w))
          ] }),
          /* @__PURE__ */ c("div", { style: { position: "absolute", top: ze, left: 0, right: 0, height: ze, display: "flex" }, children: [
            r === "day" && /* @__PURE__ */ o("div", { style: { width: n.totalWidth, height: "100%", position: "relative" }, children: Te.map((u) => {
              const w = n.days[u.index];
              if (!w) return null;
              const f = w.isToday;
              return /* @__PURE__ */ o(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: u.start,
                    width: u.size,
                    height: "100%",
                    borderRight: `1px solid ${t.borderLight}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: /* @__PURE__ */ o("span", { style: { fontSize: 11, fontWeight: f ? 800 : 500, color: f ? t.today : t.textSecondary, letterSpacing: "-0.03em" }, children: w.date.getDate().toString().padStart(2, "0") })
                },
                `day-${u.index}`
              );
            }) }),
            r === "month" && n.months.map((u, w) => /* @__PURE__ */ o("div", { style: { width: u.width, position: "relative", height: "100%", borderRight: `1px solid ${t.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ o("span", { style: { fontSize: 11, fontWeight: 600, color: t.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em" }, children: u.label.substring(0, 3) }) }, w))
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        ref: W,
        className: "zg-no-scrollbar",
        style: { flex: 1, overflow: "auto", background: "var(--zg-surface)", position: "relative" },
        onScroll: $,
        onMouseDown: z,
        onTouchStart: x,
        onWheel: p,
        onContextMenu: M,
        children: /* @__PURE__ */ c("div", { style: { width: n.totalWidth, height: v, position: "relative" }, children: [
          /* @__PURE__ */ c("svg", { width: n.totalWidth, height: v, style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" }, children: [
            /* @__PURE__ */ c("defs", { children: [
              /* @__PURE__ */ o("pattern", { id: "gantt-y-lines", x: "0", y: "0", width: n.dayWidth, height: Z, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ o("line", { x1: n.dayWidth, y1: "0", x2: n.dayWidth, y2: Z, stroke: t.border, strokeWidth: "1", strokeDasharray: "4 4", opacity: "0.4" }) }),
              /* @__PURE__ */ o("pattern", { id: "gantt-x-lines", x: "0", y: "0", width: n.dayWidth, height: Z, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ o("line", { x1: "0", y1: Z, x2: n.dayWidth, y2: Z, stroke: t.borderLight, strokeWidth: "1" }) })
            ] }),
            /* @__PURE__ */ o("rect", { width: "100%", height: "100%", fill: "url(#gantt-x-lines)" }),
            /* @__PURE__ */ o("rect", { width: "100%", height: "100%", fill: "url(#gantt-y-lines)" }),
            r === "day" && Te.map((u) => n.days[u.index]?.isWeekend ? /* @__PURE__ */ o("rect", { x: u.start, y: 0, width: u.size, height: v, fill: t.weekendBg, opacity: 0.6 }, `we-${u.index}`) : null),
            r === "month" && Te.map((u) => n.days[u.index]?.isWeekend ? /* @__PURE__ */ o("rect", { x: u.start, y: 0, width: u.size, height: v, fill: t.weekendBg, opacity: 0.3 }, `wem-${u.index}`) : null),
            n.todayIndex >= 0 && /* @__PURE__ */ c("g", { children: [
              /* @__PURE__ */ o("rect", { x: n.todayIndex * n.dayWidth, y: 0, width: n.dayWidth, height: v, fill: t.todayBg }),
              /* @__PURE__ */ o("line", { x1: (n.todayIndex + 0.5) * n.dayWidth, y1: 0, x2: (n.todayIndex + 0.5) * n.dayWidth, y2: v, stroke: t.today, strokeWidth: 2, strokeDasharray: "4 4", opacity: 0.3 })
            ] })
          ] }),
          ue.map((u) => {
            const w = i[u.index];
            return w && (w.kind === "group" || w.kind === "projectHeader") ? /* @__PURE__ */ o("div", { style: {
              boxSizing: "border-box",
              position: "absolute",
              left: 0,
              top: u.start,
              width: "100%",
              height: Z,
              background: w.kind === "projectHeader" ? t.headerBg : `${t.groupLight}15`,
              borderBottom: `1px solid ${t.borderLight}`,
              pointerEvents: "none"
            } }, `bg-${u.index}`) : null;
          }),
          /* @__PURE__ */ c("div", { style: { position: "absolute", inset: 0 }, children: [
            ue.map((u) => {
              const w = i[u.index];
              if (!w || w.kind !== "task") return null;
              const f = w.task, P = l?.task.id === f.id, O = a?.task.id === f.id, H = P || O && a.edge === "left" ? re(f.start, P ? l.offsetDays : a.offsetDays) : f.start, q = P || O && a.edge === "right" ? re(f.end, P ? l.offsetDays : a.offsetDays) : f.end, Ye = f.originalType !== "step";
              let Ee = pe(H, n), le = 0, Ze = 0;
              Ye || (le = Math.max(pe(q, n) - Ee, n.dayWidth), Ze = le * (f.progress / 100));
              const et = N === f.id, Ue = m === f.id, bt = we.has(f.id), xt = Ae.has(f.id), vt = !!m && !Ue && !Se.has(f.id), wt = Ue || !!m && Se.has(f.id), St = d?.hoverTargetId === f.id, kt = et || Ue, It = u.start;
              return /* @__PURE__ */ o(
                tn,
                {
                  task: f,
                  x: Ee,
                  y: It,
                  w: le,
                  progW: Ze,
                  isHov: et,
                  isDrag: P,
                  isResize: O,
                  isCritical: xt,
                  isDelayed: bt,
                  isConnectTarget: St,
                  showDots: kt,
                  isBarDimmed: vt,
                  isBarHighlighted: wt,
                  commonEvents: {
                    onMouseEnter: (K) => {
                      X(f.id), !l && !a && ee({ task: f, x: K.clientX, y: K.clientY });
                    },
                    onMouseMove: (K) => {
                      N === f.id && !l && !a && ee({ task: f, x: K.clientX, y: K.clientY });
                    },
                    onMouseLeave: () => {
                      X(null), ee(null);
                    },
                    onClick: (K) => {
                      K.stopPropagation(), U(f.id), K.detail === 2 && me?.(_e(f)), j(!G.isOpen || G.task?.id !== f.id ? {
                        isOpen: !0,
                        position: { x: K.clientX, y: K.clientY },
                        task: f
                      } : { isOpen: !1, position: { x: 0, y: 0 }, task: null });
                    },
                    onMouseDown: (K) => ke(K, f),
                    onTouchStart: (K) => Fe(K, f),
                    onKeyDown: (K) => {
                      if (K.key === "Enter") {
                        K.preventDefault(), me?.(_e(f));
                        return;
                      }
                      K.key === " " && (K.preventDefault(), U(f.id));
                    }
                  },
                  handleResizeMouseDown: Le,
                  handleResizeTouchStart: We,
                  handleConnectDotMouseDown: $e,
                  handleConnectDotTouchStart: Y
                },
                f.id
              );
            }),
            /* @__PURE__ */ o("svg", { width: n.totalWidth, height: v, style: { position: "absolute", inset: 0, pointerEvents: "none" }, children: /* @__PURE__ */ o(nn, { arrows: A }) }),
            L && !l && /* @__PURE__ */ o("div", { style: { position: "fixed", left: L.x + 16, top: L.y - 10, zIndex: 9999, pointerEvents: "none" }, children: /* @__PURE__ */ c(
              "div",
              {
                style: {
                  borderRadius: 12,
                  padding: "12px 16px",
                  minWidth: 220,
                  maxWidth: 340,
                  background: `${t.surface}f5`,
                  border: `1px solid ${t.borderLight}`,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)"
                },
                children: [
                  /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }, children: [
                    De(L.task.originalType, L.task.colorIdx),
                    /* @__PURE__ */ o("span", { style: { fontSize: 12, fontWeight: 700, color: t.textTitle, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: L.task.name })
                  ] }),
                  /* @__PURE__ */ o("div", { style: { display: "flex", flexDirection: "column", gap: 4, fontSize: 11, color: t.textSecondary }, children: L.task.originalType === "step" ? /* @__PURE__ */ c(ce, { children: [
                    L.task.previsionStart && L.task.previsionEnd && /* @__PURE__ */ c("div", { style: { background: `${t.headerBg}`, borderRadius: 6, padding: "4px 6px", marginBottom: 2 }, children: [
                      /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }, children: [
                        /* @__PURE__ */ o("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${t.textSecondary}44`, border: `1.5px solid ${t.textSecondary}66` } }),
                        /* @__PURE__ */ o("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: t.textSecondary }, children: s("gantt.tooltip.planned", "Planned") })
                      ] }),
                      /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ c("span", { children: [
                          s("gantt.tooltip.start", "Start"),
                          ":"
                        ] }),
                        /* @__PURE__ */ o("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: t.textPrimary }, children: te(L.task.previsionStart, e.locale) })
                      ] }),
                      /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ c("span", { children: [
                          s("gantt.tooltip.end", "End"),
                          ":"
                        ] }),
                        /* @__PURE__ */ o("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: t.textPrimary }, children: te(L.task.previsionEnd, e.locale) })
                      ] }),
                      /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ c("span", { children: [
                          s("gantt.tooltip.duration", "Duration"),
                          ":"
                        ] }),
                        /* @__PURE__ */ c("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: t.textPrimary }, children: [
                          he(L.task.previsionStart, L.task.previsionEnd),
                          "d"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ c("div", { style: { background: L.task.hasActualDates ? `${t.groupLight}22` : "transparent", borderRadius: 6, padding: "4px 6px" }, children: [
                      /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }, children: [
                        /* @__PURE__ */ o("div", { style: { width: 20, height: 4, borderRadius: 2, background: ae[L.task.colorIdx ?? 0].progress } }),
                        /* @__PURE__ */ o("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: L.task.hasActualDates ? t.group : t.textSecondary }, children: L.task.hasActualDates ? s("gantt.tooltip.actual", "Actual") : s("gantt.tooltip.plannedInUse", "Planned (in use)") })
                      ] }),
                      /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ c("span", { children: [
                          s("gantt.tooltip.start", "Start"),
                          ":"
                        ] }),
                        /* @__PURE__ */ o("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: t.textPrimary }, children: te(L.task.start, e.locale) })
                      ] }),
                      /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ c("span", { children: [
                          s("gantt.tooltip.end", "End"),
                          ":"
                        ] }),
                        /* @__PURE__ */ o("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: t.textPrimary }, children: te(L.task.end, e.locale) })
                      ] }),
                      /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ c("span", { children: [
                          s("gantt.tooltip.duration", "Duration"),
                          ":"
                        ] }),
                        /* @__PURE__ */ c("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: t.textPrimary }, children: [
                          he(L.task.start, L.task.end),
                          "d"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "space-between", gap: 16, paddingTop: 4, marginTop: 4, borderTop: `1px solid ${t.borderLight}` }, children: [
                      /* @__PURE__ */ c("span", { children: [
                        s("charts.gantt.progress", "Progress"),
                        ":"
                      ] }),
                      /* @__PURE__ */ c("span", { style: { fontWeight: 700, color: t.group }, children: [
                        Math.round(L.task.progress),
                        "%"
                      ] })
                    ] })
                  ] }) : L.task.originalType === "note" ? /* @__PURE__ */ c(ce, { children: [
                    L.task.noteProjectTitle && /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }, children: [
                      /* @__PURE__ */ o("div", { style: { width: 8, height: 8, borderRadius: 2, background: L.task.noteColor || t.note, flexShrink: 0 } }),
                      /* @__PURE__ */ o("span", { style: { fontSize: 11, fontWeight: 600, color: t.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: L.task.noteProjectTitle })
                    ] }),
                    /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                      /* @__PURE__ */ c("span", { children: [
                        s("gantt.tooltip.date", "Date"),
                        ":"
                      ] }),
                      /* @__PURE__ */ o("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: t.textPrimary }, children: te(L.task.start, e.locale) })
                    ] }),
                    (L.task.filesCount || 0) > 0 && /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                      /* @__PURE__ */ c("span", { children: [
                        s("gantt.tooltip.attachments", "Attachments"),
                        ":"
                      ] }),
                      /* @__PURE__ */ c("span", { style: { fontWeight: 600, display: "flex", alignItems: "center", gap: 4, color: t.textPrimary }, children: [
                        /* @__PURE__ */ o(Ve, { size: 10 }),
                        L.task.filesCount
                      ] })
                    ] })
                  ] }) : /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                    /* @__PURE__ */ c("span", { children: [
                      s("charts.gantt.start", "Start"),
                      ":"
                    ] }),
                    /* @__PURE__ */ o("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: t.textPrimary }, children: te(L.task.start, e.locale) })
                  ] }) })
                ]
              }
            ) })
          ] })
        ] })
      }
    ),
    G.task && G.isOpen && (() => {
      const u = G.task, w = (e.dependencies || []).filter((q) => q.predecessorId === u.id || q.successorId === u.id), f = { FS: s("gantt.depType.fs", "Finish to Start"), SS: s("gantt.depType.ss", "Start to Start"), FF: s("gantt.depType.ff", "Finish to Finish"), SF: s("gantt.depType.sf", "Start to Finish") }, P = w.length > 0 ? 300 : 220, O = Math.min(G.position.x, window.innerWidth - P - 16), H = G.position.y + 8;
      return /* @__PURE__ */ c(
        "div",
        {
          "data-popup": "gantt-action",
          style: { position: "fixed", left: O, top: H, zIndex: 9999, background: "var(--zg-surface)", borderRadius: 4, boxShadow: "var(--zg-shadow-popover)", border: `1.5px solid ${t.borderLight}`, width: P, overflow: "hidden" },
          onMouseDown: (q) => q.stopPropagation(),
          children: [
            /* @__PURE__ */ o("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${t.borderLight}` }, children: /* @__PURE__ */ o("p", { style: { fontSize: 13, fontWeight: 700, color: t.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: u.name, children: u.name }) }),
            /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" }, children: [
              /* @__PURE__ */ c("button", { onClick: () => {
                me?.(_e(u)), B();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: t.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ o(zt, { size: 15 }),
                " ",
                /* @__PURE__ */ o("span", { style: { flex: 1, textAlign: "left" }, children: s("gantt.popup.viewDetails", "View details") })
              ] }),
              /* @__PURE__ */ c("button", { onClick: () => {
                Be?.(_e(u)), B();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: t.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ o(Ct, { size: 15 }),
                " ",
                /* @__PURE__ */ o("span", { style: { flex: 1, textAlign: "left" }, children: s("gantt.popup.edit", "Edit") })
              ] }),
              /* @__PURE__ */ c("button", { onClick: () => {
                Pe?.(u.id), B();
              }, className: "zg-popup-btn zg-popup-btn-danger", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: "#ef4444", textAlign: "left" }, children: [
                /* @__PURE__ */ o(Rt, { size: 15 }),
                " ",
                /* @__PURE__ */ o("span", { style: { flex: 1, textAlign: "left" }, children: s("gantt.popup.delete", "Delete") })
              ] })
            ] }),
            w.length > 0 && /* @__PURE__ */ c("div", { style: { borderTop: `1px solid ${t.borderLight}`, padding: "10px 14px 12px" }, children: [
              /* @__PURE__ */ c("div", { style: { fontSize: 10, fontWeight: 700, color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }, children: [
                s("gantt.popup.relations", "Relations"),
                " (",
                w.length,
                ")"
              ] }),
              /* @__PURE__ */ o("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: w.map((q) => {
                const Ye = q.predecessorId === u.id, Ee = Ye ? q.successorName : q.predecessorName, le = g === q.id;
                return /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderRadius: 8, background: "var(--zg-surface-alt)", border: `1px solid ${t.borderLight}` }, children: [
                  /* @__PURE__ */ c("div", { style: { flex: 1, minWidth: 0 }, children: [
                    /* @__PURE__ */ c("div", { style: { fontSize: 10, fontWeight: 700, color: t.group, marginBottom: 2 }, children: [
                      /* @__PURE__ */ o("span", { style: { background: `${t.group}15`, borderRadius: 4, padding: "1px 5px" }, children: q.type }),
                      " ",
                      /* @__PURE__ */ o("span", { style: { color: t.textSecondary, fontWeight: 500 }, children: Ye ? "→ " : "← " }),
                      /* @__PURE__ */ o("span", { style: { color: t.textMuted, fontWeight: 400, fontSize: 9 }, children: f[q.type] ?? q.type })
                    ] }),
                    /* @__PURE__ */ o("div", { style: { fontSize: 11, color: t.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: Ee, children: Ee })
                  ] }),
                  Ie && /* @__PURE__ */ o(
                    "button",
                    {
                      disabled: !!le,
                      onClick: async () => {
                        C(q.id);
                        try {
                          await Ie(q.id);
                        } finally {
                          C(null);
                        }
                      },
                      style: { flexShrink: 0, padding: "4px 6px", borderRadius: 6, border: "none", background: le ? "#fee2e2" : "transparent", cursor: le ? "wait" : "pointer", color: "#ef4444", fontSize: 14, opacity: le ? 0.5 : 1, transition: "background 0.12s" },
                      children: le ? "⟳" : "🗑"
                    }
                  )
                ] }, q.id);
              }) })
            ] })
          ]
        }
      );
    })(),
    D && /* @__PURE__ */ c(
      "div",
      {
        "data-menu": "chart-create",
        style: {
          position: "fixed",
          left: Math.min(D.x, window.innerWidth - 220),
          top: Math.min(D.y, window.innerHeight - 220),
          zIndex: 99999,
          background: "var(--zg-surface)",
          borderRadius: 10,
          boxShadow: "var(--zg-shadow-popover)",
          border: `1.5px solid ${t.borderLight}`,
          width: 200,
          overflow: "hidden"
        },
        onClick: (u) => u.stopPropagation(),
        children: [
          /* @__PURE__ */ o("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${t.borderLight}`, background: t.headerBg }, children: /* @__PURE__ */ c("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" }, children: [
            s("gantt.chart.addOn", "Add on"),
            " ",
            te(D.date, e.locale)
          ] }) }),
          /* @__PURE__ */ o("div", { style: { padding: "5px 5px" }, children: [
            { label: s("gantt.newAction.step", "Step"), icon: De("step", 0), action: () => {
              Oe?.(D.date, D.projectId), h(null);
            } },
            { label: s("gantt.newAction.milestone", "Milestone"), icon: De("milestone"), action: () => {
              Ne?.(D.date, D.projectId), h(null);
            } },
            { label: s("gantt.newAction.event", "Event"), icon: De("event"), action: () => {
              je?.(D.date, D.projectId), h(null);
            } },
            { label: s("gantt.newAction.note", "Note"), icon: De("note"), action: () => {
              ne?.(D.date, D.projectId), h(null);
            } }
          ].map((u) => /* @__PURE__ */ c(
            "button",
            {
              onClick: u.action,
              className: "zg-popup-btn",
              style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: t.textPrimary, textAlign: "left", transition: "background 0.12s" },
              children: [
                u.icon,
                " ",
                u.label
              ]
            },
            u.label
          )) })
        ]
      }
    ),
    d && /* @__PURE__ */ c("svg", { style: { position: "fixed", inset: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 99999 }, children: [
      /* @__PURE__ */ o("defs", { children: /* @__PURE__ */ o("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ o("path", { d: "M0,0 L0,6 L6,3 z", fill: t.group }) }) }),
      /* @__PURE__ */ o("line", { x1: d.fromScreenX, y1: d.fromScreenY, x2: d.currentScreenX, y2: d.currentScreenY, stroke: t.group, strokeWidth: 2.5, strokeDasharray: "8 5", markerEnd: "url(#connect-arrow)", opacity: 0.85, style: { animation: "zg-dash 0.5s linear infinite" } })
    ] }),
    y && /* @__PURE__ */ o("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99998 }, onClick: () => b(null), children: /* @__PURE__ */ c("div", { style: { background: "var(--zg-surface)", borderRadius: 20, padding: "32px 36px", width: 420, boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 6px 24px rgba(0,0,0,0.08)" }, onClick: (u) => u.stopPropagation(), children: [
      /* @__PURE__ */ c("div", { style: { marginBottom: 20 }, children: [
        /* @__PURE__ */ o("h3", { style: { fontSize: 18, fontWeight: 700, color: t.textTitle, marginBottom: 4 }, children: s("gantt.depModal.title", "Relation Type") }),
        /* @__PURE__ */ o("p", { style: { fontSize: 13, color: t.textSecondary }, children: s("gantt.depModal.subtitle", "Choose how the two tasks relate") })
      ] }),
      /* @__PURE__ */ o("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }, children: [
        { type: "FS", label: s("gantt.depModal.fs", "Finish to Start"), desc: s("gantt.depModal.fsDesc", "B starts when A finishes") },
        { type: "SS", label: s("gantt.depModal.ss", "Start to Start"), desc: s("gantt.depModal.ssDesc", "A and B start together") },
        { type: "FF", label: s("gantt.depModal.ff", "Finish to Finish"), desc: s("gantt.depModal.ffDesc", "A and B finish together") },
        { type: "SF", label: s("gantt.depModal.sf", "Start to Finish"), desc: s("gantt.depModal.sfDesc", "B finishes when A starts") }
      ].map((u) => /* @__PURE__ */ c("button", { onClick: () => k(u.type), style: { border: S === u.type ? `2px solid ${t.group}` : `1.5px solid ${t.borderLight}`, borderRadius: 12, padding: "12px 14px", textAlign: "left", cursor: "pointer", background: S === u.type ? `${t.group}0d` : "var(--zg-surface-alt)" }, children: [
        /* @__PURE__ */ o("div", { style: { fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: t.group, marginBottom: 4, background: S === u.type ? `${t.group}20` : `${t.group}0d`, borderRadius: 6, padding: "2px 6px", display: "inline-block" }, children: u.type }),
        /* @__PURE__ */ o("div", { style: { fontSize: 13, fontWeight: 600, color: t.textTitle, marginBottom: 2 }, children: u.label }),
        /* @__PURE__ */ o("div", { style: { fontSize: 11, color: t.textSecondary }, children: u.desc })
      ] }, u.type)) }),
      /* @__PURE__ */ c("div", { style: { marginBottom: 24 }, children: [
        /* @__PURE__ */ o("label", { style: { display: "block", fontSize: 13, fontWeight: 600, color: t.textTitle, marginBottom: 6 }, children: s("gantt.depModal.lagLabel", "Lag (days)") }),
        /* @__PURE__ */ o("input", { type: "number", value: I, onChange: (u) => E(parseInt(u.target.value) || 0), style: { width: "100%", padding: "10px 12px", border: `1.5px solid ${t.borderLight}`, borderRadius: 8, fontSize: 14 } })
      ] }),
      /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12 }, children: [
        /* @__PURE__ */ o("button", { onClick: () => b(null), style: { padding: "10px 16px", borderRadius: 8, border: `1px solid ${t.borderLight}`, background: "var(--zg-surface)", cursor: "pointer", fontWeight: 600 }, children: s("gantt.depModal.cancel", "Cancel") }),
        /* @__PURE__ */ o("button", { onClick: V, disabled: F, style: { padding: "10px 16px", borderRadius: 8, border: "none", background: t.group, color: "#fff", cursor: F ? "wait" : "pointer", fontWeight: 600 }, children: F ? s("gantt.depModal.saving", "Saving...") : s("gantt.depModal.create", "Create Dependency") })
      ] })
    ] }) })
  ] });
}
function rn(e) {
  const s = ge(null), r = ge(null), n = ge(null), i = ge(!1), l = J(() => {
    if (i.current) return;
    i.current = !0;
    const b = r.current;
    b && s.current && (s.current.scrollTop = b.scrollTop), b && n.current && (n.current.scrollLeft = b.scrollLeft), i.current = !1;
  }, []), a = J(() => {
    i.current || (i.current = !0, s.current && r.current && (r.current.scrollTop = s.current.scrollTop), i.current = !1);
  }, []), d = ge(!1);
  fe(() => {
    if (d.current || !e.totalWidth) return;
    const b = r.current;
    if (!b) return;
    const S = pe(/* @__PURE__ */ new Date(), e);
    if (S >= 0 && S <= e.totalWidth) {
      const k = S - b.clientWidth / 2;
      b.scrollLeft = Math.max(0, k), n.current && (n.current.scrollLeft = b.scrollLeft), d.current = !0;
    }
  }, [e]);
  const y = J((b) => {
    const S = r.current;
    if (S)
      if (b.preventDefault(), b.shiftKey || Math.abs(b.deltaX) > Math.abs(b.deltaY)) {
        const k = b.shiftKey ? b.deltaY : b.deltaX;
        S.scrollLeft += k, n.current && (n.current.scrollLeft = S.scrollLeft);
      } else
        S.scrollTop += b.deltaY, s.current && (s.current.scrollTop = S.scrollTop);
  }, []);
  return {
    leftBodyRef: s,
    rightBodyRef: r,
    timeHeaderRef: n,
    handleRightScroll: l,
    handleLeftScroll: a,
    handleChartWheel: y
  };
}
function sn(e, s, r, n) {
  const i = /* @__PURE__ */ new Map();
  return e.forEach((l) => i.set(l.id, l)), s.map((l) => {
    const a = i.get(l.predecessorId), d = i.get(l.successorId);
    if (!a || !d) return null;
    const y = n.get(a.id), b = n.get(d.id);
    if (y == null || b == null) return null;
    const S = a.originalType !== "step", k = d.originalType !== "step", I = S ? pe(a.start, r) + Je : pe(a.end, r), E = y * Z + Z / 2, F = k ? pe(d.start, r) - 10 : pe(d.start, r), g = b * Z + Z / 2, C = 14, D = Math.max(I + C, F - C), h = E === g ? `M${I},${E} L${F - 6},${g}` : `M${I},${E} L${D},${E} L${D},${g} L${F - 6},${g}`;
    return { predId: a.id, succId: d.id, path: h, headX: F - 6, headY: g };
  }).filter(Boolean);
}
function an(e, s, r) {
  if (s === r) return !0;
  const n = /* @__PURE__ */ new Map();
  for (const d of e) {
    const y = n.get(d.predecessorId) || [];
    y.push(d.successorId), n.set(d.predecessorId, y);
  }
  const i = n.get(s) || [];
  i.push(r), n.set(s, i);
  const l = [r], a = /* @__PURE__ */ new Set();
  for (; l.length > 0; ) {
    const d = l.pop();
    if (d === s) return !0;
    if (a.has(d)) continue;
    a.add(d);
    const y = n.get(d) || [];
    for (const b of y)
      a.has(b) || l.push(b);
  }
  return !1;
}
function ln(e, s) {
  if (e.length === 0 || s.length === 0) return /* @__PURE__ */ new Set();
  const r = /* @__PURE__ */ new Map();
  e.forEach((h) => r.set(h.id, h));
  const n = new Set(e.map((h) => h.id)), i = s.filter((h) => n.has(h.predecessorId) && n.has(h.successorId));
  if (i.length === 0) return /* @__PURE__ */ new Set();
  const l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  i.forEach((h) => {
    l.has(h.predecessorId) || l.set(h.predecessorId, []), l.get(h.predecessorId).push(h.successorId), a.has(h.successorId) || a.set(h.successorId, []), a.get(h.successorId).push(h.predecessorId);
  });
  const d = (h) => Math.max(1, xe(h.start, h.end)), y = /* @__PURE__ */ new Set(), b = [];
  function S(h) {
    y.has(h) || (y.add(h), (l.get(h) || []).forEach(S), b.unshift(h));
  }
  e.forEach((h) => S(h.id));
  const k = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map();
  for (const h of b) {
    const W = r.get(h), R = a.get(h) || [];
    let z = 0;
    for (const p of R) z = Math.max(z, I.get(p) || 0);
    const x = R.length > 0 ? z : 0;
    k.set(h, x), I.set(h, x + d(W));
  }
  let E = 0;
  I.forEach((h) => {
    h > E && (E = h);
  });
  const F = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
  for (let h = b.length - 1; h >= 0; h--) {
    const W = b[h], R = r.get(W), z = l.get(W) || [];
    let x = E;
    for (const p of z) x = Math.min(x, F.get(p) ?? E);
    g.set(W, z.length > 0 ? x : E), F.set(W, (g.get(W) || 0) - d(R));
  }
  const C = /* @__PURE__ */ new Set();
  i.forEach((h) => {
    C.add(h.predecessorId), C.add(h.successorId);
  });
  const D = /* @__PURE__ */ new Set();
  for (const h of b) {
    if (!C.has(h)) continue;
    const W = (F.get(h) || 0) - (k.get(h) || 0);
    Math.abs(W) < 0.5 && D.add(h);
  }
  return D;
}
function dn({
  steps: e,
  milestones: s,
  events: r,
  notes: n,
  dependencies: i,
  viewMode: l,
  locale: a,
  groupByProject: d,
  visibleTypes: y,
  collapsedGroups: b,
  collapsedProjects: S,
  selectedTaskId: k
}) {
  const I = oe(() => {
    const R = [], z = /* @__PURE__ */ new Map();
    n?.forEach((p) => {
      let M = p.targetId || p.predecessorId;
      if (!M && i) {
        const N = i.find((X) => X.successorId === p.id);
        N && (M = N.predecessorId);
      }
      if (!M) return;
      const $ = z.get(M) || [];
      z.set(M, [...$, p]);
    });
    let x = 0;
    return e.forEach((p) => {
      const M = !!(p.startDate && p.finishDate), $ = p.startDate || p.previsionStartDate, N = p.finishDate || p.previsionFinishDate;
      if (!$ || !N) return;
      const X = new Date($), m = new Date(N);
      if (isNaN(X.getTime()) || isNaN(m.getTime())) return;
      m <= X && m.setDate(m.getDate() + 1);
      let U, L;
      if (p.previsionStartDate && p.previsionFinishDate) {
        const j = new Date(p.previsionStartDate), Q = new Date(p.previsionFinishDate);
        !isNaN(j.getTime()) && !isNaN(Q.getTime()) && (U = j, L = Q <= j ? re(j, 1) : Q);
      }
      const ee = i?.filter((j) => j.successorId === p.id).map((j) => j.predecessorId) || [], G = p.conclusionPercent != null ? Number(p.conclusionPercent) : 0;
      R.push({
        id: p.id,
        name: p.name,
        start: X,
        end: m,
        progress: G > 1 ? Math.min(G, 100) : G * 100,
        originalType: "step",
        deps: ee,
        colorIdx: x % ae.length,
        previsionStart: U,
        previsionEnd: L,
        hasActualDates: M,
        projectId: p.projectId || void 0,
        projectTitle: p.projectTitle || void 0,
        attachedNotes: z.get(p.id)
      }), x++;
    }), s?.forEach((p) => {
      if (!p.date) return;
      const M = new Date(p.date);
      if (isNaN(M.getTime())) return;
      const $ = i?.filter((N) => N.successorId === p.id).map((N) => N.predecessorId) || [];
      R.push({
        id: p.id,
        name: p.name,
        start: M,
        end: M,
        progress: p.finished ? 100 : 0,
        originalType: "milestone",
        deps: $,
        projectId: p.projectId || void 0,
        projectTitle: p.projectTitle || void 0,
        attachedNotes: z.get(p.id)
      });
    }), r?.forEach((p) => {
      if (!p.date) return;
      const M = new Date(p.date);
      if (isNaN(M.getTime())) return;
      const $ = i?.filter((N) => N.successorId === p.id).map((N) => N.predecessorId) || [];
      R.push({
        id: p.id,
        name: p.title,
        start: M,
        end: M,
        progress: p.finished ? 100 : 0,
        originalType: "event",
        deps: $,
        projectId: p.projectId || void 0,
        projectTitle: p.projectTitle || void 0,
        attachedNotes: z.get(p.id)
      });
    }), R;
  }, [e, s, r, n, i]), E = oe(() => en(I, l, a), [I, l, a]), F = oe(() => {
    const R = [], z = ["step", "milestone", "event"];
    if (d) {
      const x = /* @__PURE__ */ new Map();
      I.forEach((p) => {
        p.projectId && !x.has(p.projectId) && x.set(p.projectId, p.projectTitle || p.projectId);
      });
      for (const [p, M] of Array.from(x.entries())) {
        const $ = S.has(p);
        if (R.push({ kind: "projectHeader", projectId: p, projectTitle: M, collapsed: $ }), !$) {
          const N = I.filter((X) => X.projectId === p);
          for (const X of z) {
            if (!y.has(X)) continue;
            const m = N.filter((ee) => ee.originalType === X);
            if (m.length === 0) continue;
            const U = `${p}-${X}`, L = b.has(U);
            R.push({ kind: "group", groupType: X, label: nt[X], count: m.length, collapsed: L, projectId: p }), L || m.forEach((ee) => R.push({ kind: "task", task: ee }));
          }
        }
      }
    } else
      for (const x of z) {
        if (!y.has(x)) continue;
        const p = I.filter(($) => $.originalType === x);
        if (p.length === 0) continue;
        const M = b.has(x);
        R.push({ kind: "group", groupType: x, label: nt[x], count: p.length, collapsed: M }), M || p.forEach(($) => R.push({ kind: "task", task: $ }));
      }
    return R;
  }, [I, y, b, S, d]), g = oe(() => {
    const R = /* @__PURE__ */ new Map();
    return F.forEach((z, x) => {
      z.kind === "task" && R.set(z.task.id, x);
    }), R;
  }, [F]), C = oe(
    () => sn(I, i || [], E, g),
    [I, i, E, g]
  ), D = oe(() => ln(I, i || []), [I, i]), h = oe(() => {
    const R = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Date();
    return I.forEach((x) => {
      x.originalType === "step" && x.end < z && x.progress < 100 && R.add(x.id);
    }), R;
  }, [I]), W = oe(() => {
    if (!k || !i?.length) return /* @__PURE__ */ new Set();
    const R = /* @__PURE__ */ new Set(), z = [k];
    for (; z.length; ) {
      const x = z.shift();
      for (const p of i)
        p.predecessorId === x && !R.has(p.successorId) && (R.add(p.successorId), z.push(p.successorId)), p.successorId === x && !R.has(p.predecessorId) && (R.add(p.predecessorId), z.push(p.predecessorId));
    }
    return R;
  }, [k, i]);
  return {
    tasks: I,
    timeline: E,
    displayRows: F,
    taskRowIndex: g,
    arrows: C,
    criticalIds: D,
    delayedIds: h,
    relatedIds: W
  };
}
function cn() {
  const { props: e, activePinboardTask: s, setActivePinboardTask: r, t: n } = ve(), i = !!s, l = () => r(null);
  return /* @__PURE__ */ c(ce, { children: [
    i && /* @__PURE__ */ o(
      "div",
      {
        onClick: l,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.2)",
          zIndex: 99,
          backdropFilter: "blur(2px)",
          transition: "opacity 0.3s ease"
        }
      }
    ),
    /* @__PURE__ */ c("div", { style: {
      position: "fixed",
      top: 0,
      right: i ? 0 : -450,
      width: 400,
      height: "100vh",
      backgroundColor: "var(--zg-surface, #FFFFFF)",
      boxShadow: "-4px 0 24px rgba(0,0,0,0.1)",
      borderLeft: "1px solid var(--zg-border, #D9D9D9)",
      transition: "right 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      display: "flex",
      flexDirection: "column",
      zIndex: 100
    }, children: [
      /* @__PURE__ */ c("div", { style: {
        padding: "20px 24px",
        backgroundColor: t.headerBg,
        borderBottom: `1px solid ${t.borderLight}`,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }, children: [
        /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
          /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ o("span", { style: {
              fontSize: 10,
              fontWeight: 700,
              backgroundColor: t.milestoneRing,
              color: t.group,
              padding: "2px 6px",
              borderRadius: 4,
              letterSpacing: "0.5px"
            }, children: s?.originalType?.toUpperCase() || "" }),
            /* @__PURE__ */ c("span", { style: { fontSize: 12, color: t.textSecondary, display: "flex", alignItems: "center", gap: 4 }, children: [
              /* @__PURE__ */ o(At, { size: 12 }),
              s && te(s.start, e.locale),
              s?.originalType === "step" && ` - ${te(s.end, e.locale)}`
            ] })
          ] }),
          /* @__PURE__ */ o(
            "button",
            {
              onClick: l,
              style: { background: "transparent", border: "none", cursor: "pointer", padding: 4, borderRadius: 4 },
              children: /* @__PURE__ */ o(ht, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ o("h2", { style: { margin: 0, fontSize: 18, fontWeight: 700, color: t.textTitle }, children: s?.name || "" }),
        /* @__PURE__ */ o("p", { style: { margin: 0, fontSize: 13, color: t.textSecondary }, children: n("pinboard.description", "Quadro de anotações e arquivos vinculados a esta etapa.") })
      ] }),
      /* @__PURE__ */ c("div", { style: {
        flex: 1,
        overflowY: "auto",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        backgroundColor: "#FAFAFB"
      }, children: [
        s?.attachedNotes?.map((a, d) => /* @__PURE__ */ c(
          "div",
          {
            style: {
              background: a.color || t.note,
              padding: "16px",
              borderRadius: "2px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transform: `rotate(${d % 2 === 0 ? "-1deg" : "1deg"})`,
              position: "relative"
            },
            children: [
              /* @__PURE__ */ o("div", { style: {
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "40px",
                height: "12px",
                background: "rgba(255,255,255,0.3)",
                borderRadius: "0 0 4px 4px"
              } }),
              /* @__PURE__ */ o("h3", { style: { margin: "0 0 8px 0", fontSize: 14, fontWeight: 700, color: "rgba(0,0,0,0.7)" }, children: a.title }),
              /* @__PURE__ */ o("p", { style: { margin: 0, fontSize: 13, color: "rgba(0,0,0,0.6)", lineHeight: 1.4 }, children: a.description || "" }),
              a.author && /* @__PURE__ */ c("div", { style: { marginTop: 12, fontSize: 11, fontWeight: 600, color: "rgba(0,0,0,0.4)", textAlign: "right" }, children: [
                "— ",
                a.author
              ] })
            ]
          },
          a.id
        )),
        (!s?.attachedNotes || s.attachedNotes.length === 0) && /* @__PURE__ */ c("div", { style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: t.textMuted,
          textAlign: "center",
          gap: 12,
          opacity: 0.6
        }, children: [
          /* @__PURE__ */ o("div", { style: { width: 60, height: 60, borderRadius: "50%", background: t.headerBg, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ o(Ke, { size: 32 }) }),
          /* @__PURE__ */ o("p", { style: { margin: 0, fontSize: 14 }, children: n("pinboard.empty", "Nenhuma nota vinculada") })
        ] })
      ] }),
      /* @__PURE__ */ o("div", { style: { padding: "16px 24px", backgroundColor: "var(--zg-surface, #FFFFFF)", borderTop: `1px solid ${t.borderLight}` }, children: /* @__PURE__ */ c("button", { style: {
        width: "100%",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: t.group,
        color: "white",
        border: "none",
        borderRadius: 8,
        fontSize: 14,
        fontWeight: 600,
        cursor: "pointer"
      }, children: [
        /* @__PURE__ */ o(Ke, { size: 18 }),
        " ",
        n("pinboard.newBtn", "Nova Nota nesta Etapa")
      ] }) })
    ] })
  ] });
}
const bn = {
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
}, pn = {
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
function ct(e, s, r) {
  const n = pn[s] || r || s;
  return e ? typeof e == "function" ? e(s, n) || n : e[s] || n : n;
}
const de = (e) => {
  const s = e.touches[0] || e.changedTouches[0];
  return s ? { clientX: s.clientX, clientY: s.clientY } : { clientX: 0, clientY: 0 };
};
function xn(e) {
  const [s, r] = _("day"), [n, i] = _(null), [l, a] = _(null), [d, y] = _(null), [b, S] = _({
    isOpen: !1,
    position: { x: 0, y: 0 },
    task: null
  }), [k, I] = _(null), [E, F] = _(null), [g, C] = _(null), [D, h] = _(null), [W, R] = _("FS"), [z, x] = _(0), [p, M] = _(!1), [$, N] = _(null), [X, m] = _(null), [U, L] = _(!1), ee = ge(null), [G, j] = _(null), [Q, Ae] = _(/* @__PURE__ */ new Set(["step", "milestone", "event", "note"])), [we, Se] = _(/* @__PURE__ */ new Set()), [ke, Fe] = _(/* @__PURE__ */ new Set()), Le = J((v) => {
    Ae((T) => {
      const A = new Set(T);
      return A.has(v) ? A.delete(v) : A.add(v), A;
    });
  }, []), We = J((v) => {
    Se((T) => {
      const A = new Set(T);
      return A.has(v) ? A.delete(v) : A.add(v), A;
    });
  }, []), $e = J((v) => {
    Fe((T) => {
      const A = new Set(T);
      return A.has(v) ? A.delete(v) : A.add(v), A;
    });
  }, []), Y = dn({
    steps: e.steps,
    milestones: e.milestones,
    events: e.events,
    notes: e.notes,
    dependencies: e.dependencies,
    viewMode: s,
    locale: e.locale,
    visibleTypes: Q,
    collapsedGroups: we,
    collapsedProjects: ke,
    groupByProject: e.groupByProject,
    selectedTaskId: l || null
  }), V = rn(Y.timeline), me = J((v, T) => {
    v.preventDefault(), v.stopPropagation(), I({ task: T, startMouseX: v.clientX, originalStart: new Date(T.start), originalEnd: new Date(T.end), offsetDays: 0 });
  }, []), Be = J((v, T) => {
    v.preventDefault(), v.stopPropagation();
    const A = de(v);
    I({ task: T, startMouseX: A.clientX, originalStart: new Date(T.start), originalEnd: new Date(T.end), offsetDays: 0 });
  }, []), Pe = J((v, T, A) => {
    v.preventDefault(), v.stopPropagation(), F({ task: T, edge: A, startMouseX: v.clientX, originalStart: new Date(T.start), originalEnd: new Date(T.end), offsetDays: 0 });
  }, []), Ie = J((v, T, A) => {
    v.preventDefault(), v.stopPropagation();
    const B = de(v);
    F({ task: T, edge: A, startMouseX: B.clientX, originalStart: new Date(T.start), originalEnd: new Date(T.end), offsetDays: 0 });
  }, []), Oe = J((v, T, A) => {
    v.preventDefault(), v.stopPropagation(), C({ fromTaskId: T.id, fromEdge: A, fromScreenX: v.clientX, fromScreenY: v.clientY, currentScreenX: v.clientX, currentScreenY: v.clientY, hoverTargetId: null });
  }, []), Ne = J((v, T, A) => {
    v.preventDefault(), v.stopPropagation();
    const B = de(v);
    C({
      fromTaskId: T.id,
      fromEdge: A,
      fromScreenX: B.clientX,
      fromScreenY: B.clientY,
      currentScreenX: B.clientX,
      currentScreenY: B.clientY,
      hoverTargetId: null
    });
  }, []), je = J(async () => {
    if (!D || !e.onCreateDependency) return;
    const v = new Map(Y.tasks.map((f) => [f.id, f])), T = v.get(D.fromTaskId), A = v.get(D.toTaskId);
    if (!T || !A) return;
    const B = (f) => f.originalType === "step" ? "STEP" : "MILESTONE", u = D.fromEdge === "right" ? T : A, w = D.fromEdge === "right" ? A : T;
    if (an(e.dependencies || [], u.id, w.id)) {
      const f = ct(
        e.translations,
        "gantt.error.circularDependency",
        "Circular dependency is not allowed."
      );
      e.onDependencyError?.({
        code: "CYCLIC_DEPENDENCY",
        message: f,
        predecessorId: u.id,
        successorId: w.id
      }), e.onDependencyError || window.alert(f), h(null);
      return;
    }
    M(!0);
    try {
      await e.onCreateDependency({ predecessorId: u.id, predecessorType: B(u), successorId: w.id, successorType: B(w), type: W, lag: z }), h(null);
    } finally {
      M(!1);
    }
  }, [D, Y.tasks, e, W, z]);
  fe(() => {
    if (!k) return;
    const v = { passive: !1 }, T = (w) => {
      const f = w.clientX - k.startMouseX, P = Math.round(f / Y.timeline.dayWidth);
      P !== k.offsetDays && I((O) => O ? { ...O, offsetDays: P } : null);
    }, A = (w) => {
      w.cancelable && w.preventDefault();
      const P = de(w).clientX - k.startMouseX, O = Math.round(P / Y.timeline.dayWidth);
      O !== k.offsetDays && I((H) => H ? { ...H, offsetDays: O } : null);
    }, B = () => {
      k.offsetDays !== 0 && e.onTaskChange && e.onTaskChange({
        id: k.task.id,
        name: k.task.name,
        start: re(k.originalStart, k.offsetDays),
        end: re(k.originalEnd, k.offsetDays),
        type: k.task.originalType === "step" ? "task" : "milestone",
        progress: k.task.progress
      }), I(null);
    }, u = () => B();
    return document.addEventListener("mousemove", T), document.addEventListener("mouseup", B), document.addEventListener("touchmove", A, v), document.addEventListener("touchend", u), () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", B), document.removeEventListener("touchmove", A), document.removeEventListener("touchend", u);
    };
  }, [k, Y.timeline.dayWidth, e.onTaskChange]), fe(() => {
    if (!E) return;
    const v = { passive: !1 }, T = (w) => {
      const f = w.clientX - E.startMouseX, P = Math.round(f / Y.timeline.dayWidth);
      P !== E.offsetDays && F((O) => O ? { ...O, offsetDays: P } : null);
    }, A = (w) => {
      w.cancelable && w.preventDefault();
      const P = de(w).clientX - E.startMouseX, O = Math.round(P / Y.timeline.dayWidth);
      O !== E.offsetDays && F((H) => H ? { ...H, offsetDays: O } : null);
    }, B = () => {
      if (E.offsetDays !== 0 && e.onTaskChange) {
        const w = E.edge === "left" ? re(E.originalStart, E.offsetDays) : E.originalStart, f = E.edge === "right" ? re(E.originalEnd, E.offsetDays) : E.originalEnd;
        f > w && e.onTaskChange({ id: E.task.id, name: E.task.name, start: w, end: f, type: "task", progress: E.task.progress });
      }
      F(null);
    }, u = () => B();
    return document.addEventListener("mousemove", T), document.addEventListener("mouseup", B), document.addEventListener("touchmove", A, v), document.addEventListener("touchend", u), () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", B), document.removeEventListener("touchmove", A), document.removeEventListener("touchend", u);
    };
  }, [E, Y.timeline.dayWidth, e.onTaskChange]), fe(() => {
    if (!g) return;
    const v = { passive: !1 }, T = (w) => {
      let f = null;
      for (const P of document.elementsFromPoint(w.clientX, w.clientY)) {
        const O = P.dataset?.taskId;
        if (O && O !== g.fromTaskId) {
          f = O;
          break;
        }
      }
      C((P) => P ? { ...P, currentScreenX: w.clientX, currentScreenY: w.clientY, hoverTargetId: f } : null);
    }, A = (w) => {
      w.cancelable && w.preventDefault();
      const f = de(w);
      let P = null;
      for (const O of document.elementsFromPoint(f.clientX, f.clientY)) {
        const H = O.dataset?.taskId;
        if (H && H !== g.fromTaskId) {
          P = H;
          break;
        }
      }
      C((O) => O ? { ...O, currentScreenX: f.clientX, currentScreenY: f.clientY, hoverTargetId: P } : null);
    }, B = (w) => {
      let f = null;
      for (const P of document.elementsFromPoint(w.clientX, w.clientY)) {
        const O = P.dataset?.taskId;
        if (O && O !== g.fromTaskId) {
          f = O;
          break;
        }
      }
      f && e.onCreateDependency && (h({ fromTaskId: g.fromTaskId, fromEdge: g.fromEdge, toTaskId: f }), R("FS"), x(0)), C(null);
    }, u = (w) => {
      const f = de(w);
      let P = null;
      for (const O of document.elementsFromPoint(f.clientX, f.clientY)) {
        const H = O.dataset?.taskId;
        if (H && H !== g.fromTaskId) {
          P = H;
          break;
        }
      }
      P && e.onCreateDependency && (h({ fromTaskId: g.fromTaskId, fromEdge: g.fromEdge, toTaskId: P }), R("FS"), x(0)), C(null);
    };
    return document.addEventListener("mousemove", T), document.addEventListener("mouseup", B), document.addEventListener("touchmove", A, v), document.addEventListener("touchend", u), () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", B), document.removeEventListener("touchmove", A), document.removeEventListener("touchend", u);
    };
  }, [g?.fromTaskId, g?.fromEdge, e.onCreateDependency]);
  const [ne, he] = _(null), Me = J((v) => {
    if (E || k || v.button === 2) return;
    const T = V.rightBodyRef.current;
    T && (v.preventDefault(), he({ startX: v.clientX, startY: v.clientY, scrollLeft: T.scrollLeft, scrollTop: T.scrollTop }));
  }, [E, k, V.rightBodyRef]), ue = J((v) => {
    if (E || k || g) return;
    const T = V.rightBodyRef.current;
    if (!T) return;
    const A = de(v);
    he({ startX: A.clientX, startY: A.clientY, scrollLeft: T.scrollLeft, scrollTop: T.scrollTop });
  }, [E, k, g, V.rightBodyRef]);
  fe(() => {
    if (!ne) return;
    const v = { passive: !1 }, T = (w) => {
      const f = V.rightBodyRef.current;
      f && (f.scrollLeft = ne.scrollLeft - (w.clientX - ne.startX), f.scrollTop = ne.scrollTop - (w.clientY - ne.startY), V.leftBodyRef.current && (V.leftBodyRef.current.scrollTop = f.scrollTop), V.timeHeaderRef.current && (V.timeHeaderRef.current.scrollLeft = f.scrollLeft));
    }, A = (w) => {
      w.cancelable && w.preventDefault();
      const f = V.rightBodyRef.current;
      if (!f) return;
      const P = de(w);
      f.scrollLeft = ne.scrollLeft - (P.clientX - ne.startX), f.scrollTop = ne.scrollTop - (P.clientY - ne.startY), V.leftBodyRef.current && (V.leftBodyRef.current.scrollTop = f.scrollTop), V.timeHeaderRef.current && (V.timeHeaderRef.current.scrollLeft = f.scrollLeft);
    }, B = () => he(null), u = () => he(null);
    return document.addEventListener("mousemove", T), document.addEventListener("mouseup", B), document.addEventListener("touchmove", A, v), document.addEventListener("touchend", u), () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", B), document.removeEventListener("touchmove", A), document.removeEventListener("touchend", u);
    };
  }, [ne, V.rightBodyRef, V.leftBodyRef, V.timeHeaderRef]);
  const He = J((v) => {
    v.preventDefault(), v.stopPropagation();
    const T = (B) => {
      const u = V.rightBodyRef.current;
      if (!u) return /* @__PURE__ */ new Date();
      const w = u.getBoundingClientRect(), f = B - w.left + u.scrollLeft;
      return re(Y.timeline.start, Math.max(0, Math.floor(f / Y.timeline.dayWidth)));
    }, A = (B) => {
      if (!e.groupByProject) return;
      const u = V.leftBodyRef.current;
      if (!u) return;
      const w = u.getBoundingClientRect(), f = B - w.top + u.scrollTop, P = Math.max(0, Math.floor(f / 50));
      for (let O = Math.min(P, Y.displayRows.length - 1); O >= 0; O--) {
        const H = Y.displayRows[O];
        if (H.kind === "projectHeader") return H.projectId;
        if (H.kind === "task" && H.task.projectId) return H.task.projectId;
        if (H.kind === "group" && H.projectId) return H.projectId;
      }
    };
    m({ x: v.clientX, y: v.clientY, date: T(v.clientX), projectId: A(v.clientY) }), he(null);
  }, [Y.timeline, Y.displayRows, e.groupByProject, V.rightBodyRef, V.leftBodyRef]);
  fe(() => {
    if (!X) return;
    const v = (u) => {
      u.key === "Escape" && m(null);
    }, T = (u) => {
      u.target.closest('[data-menu="chart-create"]') || m(null);
    }, A = (u) => {
      u.target.closest('[data-menu="chart-create"]') || m(null);
    }, B = () => m(null);
    return document.addEventListener("keydown", v), document.addEventListener("click", T), document.addEventListener("touchstart", A), window.addEventListener("scroll", B, !0), () => {
      document.removeEventListener("keydown", v), document.removeEventListener("click", T), document.removeEventListener("touchstart", A), window.removeEventListener("scroll", B, !0);
    };
  }, [X]);
  const Te = oe(() => ({
    props: e,
    t: (v, T) => ct(e.translations, v, T),
    viewMode: s,
    setViewMode: r,
    hoveredTaskId: n,
    setHoveredTaskId: i,
    selectedTaskId: l,
    setSelectedTaskId: a,
    tooltip: d,
    setTooltip: y,
    popupState: b,
    setPopupState: S,
    dragState: k,
    setDragState: I,
    resizeState: E,
    setResizeState: F,
    connectState: g,
    setConnectState: C,
    visibleTypes: Q,
    setVisibleTypes: Ae,
    toggleVisibility: Le,
    collapsedGroups: we,
    setCollapsedGroups: Se,
    toggleGroup: We,
    collapsedProjects: ke,
    setCollapsedProjects: Fe,
    toggleProject: $e,
    pendingConnection: D,
    setPendingConnection: h,
    depModalType: W,
    setDepModalType: R,
    depModalLag: z,
    setDepModalLag: x,
    depCreating: p,
    setDepCreating: M,
    deletingDepId: $,
    setDeletingDepId: N,
    chartMenu: X,
    setChartMenu: m,
    newActionOpen: U,
    setNewActionOpen: L,
    activePinboardTask: G,
    setActivePinboardTask: j,
    tasks: Y.tasks,
    timeline: Y.timeline,
    displayRows: Y.displayRows,
    taskRowIndex: Y.taskRowIndex || /* @__PURE__ */ new Map(),
    arrows: Y.arrows,
    criticalIds: Y.criticalIds,
    delayedIds: Y.delayedIds,
    relatedIds: Y.relatedIds,
    ...V,
    newActionRef: ee,
    screenXToDate: (v) => {
      const T = V.rightBodyRef.current;
      if (!T) return /* @__PURE__ */ new Date();
      const A = T.getBoundingClientRect(), B = v - A.left + T.scrollLeft;
      return re(Y.timeline.start, Math.max(0, Math.floor(B / Y.timeline.dayWidth)));
    },
    screenYToProjectId: (v) => {
      if (!e.groupByProject) return;
      const T = V.leftBodyRef.current;
      if (!T) return;
      const A = T.getBoundingClientRect(), B = v - A.top + T.scrollTop, u = Math.max(0, Math.floor(B / 50));
      for (let w = Math.min(u, Y.displayRows.length - 1); w >= 0; w--) {
        const f = Y.displayRows[w];
        if (f.kind === "projectHeader") return f.projectId;
        if (f.kind === "task" && f.task.projectId) return f.task.projectId;
        if (f.kind === "group" && f.projectId) return f.projectId;
      }
    },
    handleChartMouseDown: Me,
    handleChartTouchStart: ue,
    openChartMenu: He,
    handleBarMouseDown: me,
    handleBarTouchStart: Be,
    handleResizeMouseDown: Pe,
    handleResizeTouchStart: Ie,
    handleConnectDotMouseDown: Oe,
    handleConnectDotTouchStart: Ne,
    handleCreateDependency: je
  }), [
    e,
    s,
    n,
    l,
    d,
    b,
    k,
    E,
    g,
    Q,
    we,
    ke,
    D,
    W,
    z,
    p,
    $,
    X,
    U,
    G,
    Y,
    V,
    Le,
    We,
    $e,
    Me,
    ue,
    He,
    me,
    Be,
    Pe,
    Ie,
    Oe,
    Ne,
    je
  ]);
  return e.loading ? /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", style: { padding: 48, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: t.textSecondary }, children: /* @__PURE__ */ o(ut, { size: 32, style: { animation: "zg-spin 1.5s linear infinite", color: t.group } }) }) : /* @__PURE__ */ o($t, { value: Te, children: /* @__PURE__ */ c(
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
        border: `1px solid ${t.borderLight}`,
        opacity: G ? 0.6 : 1,
        transition: "opacity 0.3s ease",
        pointerEvents: G ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ o(jt, {}),
        /* @__PURE__ */ c("div", { style: { display: "flex", flex: 1, overflow: "hidden", position: "relative", background: t.surfaceAlt }, children: [
          /* @__PURE__ */ o(Zt, {}),
          /* @__PURE__ */ o(on, {})
        ] }),
        /* @__PURE__ */ o(cn, {})
      ]
    }
  ) });
}
const hn = [
  { label: "Yellow", value: "#FEF08A" },
  { label: "Green", value: "#BBF7D0" },
  { label: "Blue", value: "#BFDBFE" },
  { label: "Pink", value: "#FBCFE8" },
  { label: "Purple", value: "#E9D5FF" },
  { label: "Orange", value: "#FED7AA" },
  { label: "White", value: "#FFFFFF" }
], pt = {
  FS: "Finish → Start (FS)",
  SS: "Start → Start (SS)",
  FF: "Finish → Finish (FF)",
  SF: "Start → Finish (SF)"
};
function vn({
  isOpen: e,
  onClose: s,
  availableMilestones: r = [],
  initialDate: n,
  translations: i,
  onSaveNote: l
}) {
  const a = (m, U) => i ? typeof i == "function" ? i(m, U) : i[m] || U : U, [d, y] = _(""), [b, S] = _(""), [k, I] = _("#FEF08A"), [E, F] = _(""), [g, C] = _(""), [D, h] = _("FS"), [W, R] = _(!1), [z, x] = _([]), [p, M] = _(""), $ = ge(null);
  fe(() => {
    e && (y(""), S(""), I("#FEF08A"), F(n ?? (/* @__PURE__ */ new Date()).toISOString().split("T")[0]), C(""), h("FS"), x([]), M(""));
  }, [e, n]);
  const N = [
    ...r.map((m) => ({ id: m.id, name: m.name, type: "MILESTONE" }))
  ], X = async () => {
    if (!d.trim() && !b.trim()) {
      M(a("noteModal.errorEmpty", "Please provide a title or content for the note."));
      return;
    }
    M("");
    try {
      R(!0), await l({
        title: d || a("noteModal.untitled", "Untitled"),
        description: b,
        color: k,
        date: E ? `${E}T00:00:00` : (/* @__PURE__ */ new Date()).toISOString(),
        predecessorId: g,
        dependencyType: D,
        files: z
      }), s();
    } catch (m) {
      console.error(m), M(a("noteModal.errorSave", "Error creating note."));
    } finally {
      R(!1);
    }
  };
  return e ? /* @__PURE__ */ o("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.2)", backdropFilter: "blur(2px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 16 }, onClick: s, children: /* @__PURE__ */ c("div", { onClick: (m) => m.stopPropagation(), style: {
    width: 400,
    maxHeight: "90vh",
    background: k || "#FFFACD",
    borderRadius: 4,
    boxShadow: "4px 6px 20px rgba(0,0,0,0.18), 1px 1px 4px rgba(0,0,0,0.08)",
    transform: "rotate(-1deg)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Inter', sans-serif",
    overflow: "hidden",
    transition: "background 0.3s"
  }, children: [
    /* @__PURE__ */ o("div", { style: { position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)", width: 64, height: 16, background: "rgba(255,255,255,0.55)", borderRadius: 2, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" } }),
    /* @__PURE__ */ o(
      "button",
      {
        onClick: s,
        style: { position: "absolute", top: 10, right: 10, width: 24, height: 24, borderRadius: "50%", background: "rgba(0,0,0,0.08)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14, color: "#3a3a3a" },
        onMouseEnter: (m) => m.currentTarget.style.background = "rgba(0,0,0,0.15)",
        onMouseLeave: (m) => m.currentTarget.style.background = "rgba(0,0,0,0.08)",
        children: "✕"
      }
    ),
    /* @__PURE__ */ c("div", { style: { padding: "28px 24px 20px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }, children: [
      p && /* @__PURE__ */ o("div", { style: { background: "rgba(255,0,0,0.1)", color: "#d32f2f", padding: "8px 12px", borderRadius: 6, fontSize: 12, marginBottom: 12, border: "1px solid rgba(255,0,0,0.2)" }, children: p }),
      /* @__PURE__ */ o(
        "input",
        {
          type: "text",
          value: d,
          onChange: (m) => y(m.target.value),
          placeholder: a("noteModal.titlePlaceholder", "Note title..."),
          style: {
            width: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            fontSize: 20,
            fontWeight: 800,
            color: "#2a2a2a",
            lineHeight: "1.3",
            padding: 0,
            margin: 0,
            marginBottom: 14,
            fontFamily: "inherit"
          }
        }
      ),
      /* @__PURE__ */ o("div", { style: { width: "100%", height: 1, background: "rgba(0,0,0,0.08)", marginBottom: 14 } }),
      /* @__PURE__ */ o(
        "textarea",
        {
          value: b,
          onChange: (m) => S(m.target.value),
          rows: 6,
          placeholder: a("noteModal.contentPlaceholder", "Write your note here..."),
          style: {
            width: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            fontSize: 14,
            color: "#3a3a3a",
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
      /* @__PURE__ */ c("div", { style: { marginTop: 14, paddingTop: 10, borderTop: "1px solid rgba(0,0,0,0.08)" }, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: $,
            type: "file",
            multiple: !0,
            onChange: (m) => {
              const U = m.target.files ? Array.from(m.target.files) : [];
              U.length > 0 && x((L) => [...L, ...U]), $.current && ($.current.value = "");
            },
            style: { display: "none" }
          }
        ),
        /* @__PURE__ */ c(
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
              background: "rgba(0,0,0,0.05)",
              border: "1px dashed rgba(0,0,0,0.15)",
              cursor: "pointer",
              fontSize: 12,
              color: "#3a3a3a",
              fontWeight: 500,
              transition: "background 0.15s",
              width: "100%",
              justifyContent: "center"
            },
            onMouseEnter: (m) => m.currentTarget.style.background = "rgba(0,0,0,0.08)",
            onMouseLeave: (m) => m.currentTarget.style.background = "rgba(0,0,0,0.05)",
            children: [
              /* @__PURE__ */ o(Ft, { size: 13 }),
              a("noteModal.attachFiles", "Attach files")
            ]
          }
        ),
        z.length > 0 && /* @__PURE__ */ o("div", { style: { marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }, children: z.map((m, U) => /* @__PURE__ */ c("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 8px",
          borderRadius: 4,
          background: "rgba(255,255,255,0.5)",
          fontSize: 11,
          color: "#3a3a3a"
        }, children: [
          /* @__PURE__ */ o(Ve, { size: 10, style: { flexShrink: 0 } }),
          /* @__PURE__ */ o("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: m.name }),
          /* @__PURE__ */ c("span", { style: { fontSize: 9, color: "rgba(58,58,58,0.4)", flexShrink: 0 }, children: [
            (m.size / 1024).toFixed(0),
            "KB"
          ] }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: () => x((L) => L.filter((ee, G) => G !== U)),
              style: { background: "none", border: "none", cursor: "pointer", padding: 2, display: "flex", color: "#ef4444" },
              title: a("noteModal.removeFile", "Remove"),
              children: /* @__PURE__ */ o(ht, { size: 12 })
            }
          )
        ] }, `file-${U}`)) })
      ] }),
      /* @__PURE__ */ c("div", { style: { marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
        /* @__PURE__ */ o(
          "input",
          {
            type: "date",
            value: E,
            onChange: (m) => F(m.target.value),
            style: {
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: 12,
              color: "rgba(58,58,58,0.5)",
              fontWeight: 500,
              fontFamily: "inherit",
              padding: 0,
              cursor: "pointer",
              width: "auto"
            }
          }
        ),
        /* @__PURE__ */ o("div", { style: { display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }, children: hn.map((m) => /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            onClick: () => I(m.value),
            style: {
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: k === m.value ? "2px solid #1A3C30" : "1.5px solid rgba(0,0,0,0.12)",
              backgroundColor: m.value,
              cursor: "pointer",
              padding: 0,
              transform: k === m.value ? "scale(1.15)" : "scale(1)",
              transition: "all 0.15s",
              boxShadow: k === m.value ? "0 1px 4px rgba(0,0,0,0.15)" : "none"
            },
            title: m.label
          },
          m.value
        )) })
      ] }),
      N.length > 0 && /* @__PURE__ */ c("div", { style: { marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(0,0,0,0.08)" }, children: [
        /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }, children: [
          /* @__PURE__ */ o(Lt, { size: 14, style: { color: "rgba(58,58,58,0.5)" } }),
          /* @__PURE__ */ o("span", { style: { fontSize: 11, color: "rgba(58,58,58,0.5)", fontWeight: 600 }, children: a("noteModal.dependency", "Dependency") })
        ] }),
        /* @__PURE__ */ c(
          "select",
          {
            value: g,
            onChange: (m) => C(m.target.value),
            style: {
              width: "100%",
              background: "rgba(255,255,255,0.3)",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 6,
              fontSize: 12,
              color: "#3a3a3a",
              padding: "6px 8px",
              outline: "none",
              fontFamily: "inherit",
              cursor: "pointer"
            },
            children: [
              /* @__PURE__ */ o("option", { value: "", children: a("noteModal.none", "None") }),
              r.length > 0 && /* @__PURE__ */ o("optgroup", { label: a("noteModal.milestones", "Milestones"), children: r.map((m) => /* @__PURE__ */ o("option", { value: m.id, children: m.name }, m.id)) })
            ]
          }
        ),
        g && /* @__PURE__ */ o(
          "select",
          {
            value: D,
            onChange: (m) => h(m.target.value),
            style: {
              width: "100%",
              background: "rgba(255,255,255,0.3)",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 6,
              fontSize: 12,
              color: "#3a3a3a",
              padding: "6px 8px",
              outline: "none",
              fontFamily: "inherit",
              cursor: "pointer",
              marginTop: 6
            },
            children: Object.keys(pt).map((m) => /* @__PURE__ */ o("option", { value: m, children: pt[m] }, m))
          }
        )
      ] }),
      /* @__PURE__ */ c("div", { style: { display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 16, marginTop: 12, borderTop: "1px solid rgba(0,0,0,0.08)" }, children: [
        /* @__PURE__ */ o(
          "button",
          {
            onClick: s,
            style: { padding: "8px 16px", fontSize: 13, color: "#3a3a3a", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 8, cursor: "pointer" },
            children: a("noteModal.cancel", "Cancel")
          }
        ),
        /* @__PURE__ */ c(
          "button",
          {
            onClick: X,
            disabled: W,
            style: { padding: "8px 20px", fontSize: 13, color: "#fff", background: "#1A3C30", border: "none", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, opacity: W ? 0.5 : 1 },
            children: [
              W && /* @__PURE__ */ o(ut, { size: 16, style: { animation: "zg-spin 1s linear infinite" } }),
              a("noteModal.create", "Create Note")
            ]
          }
        )
      ] })
    ] })
  ] }) }) : null;
}
export {
  vn as NoteModal,
  xn as ProjectGantt,
  pn as enUS,
  bn as ptBR
};
