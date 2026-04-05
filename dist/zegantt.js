import { jsx as t, jsxs as o, Fragment as ce } from "react/jsx-runtime";
import { createContext as ot, useContext as rt, useRef as he, useCallback as Z, useEffect as ue, useMemo as le, useState as Y } from "react";
import { Flag as Te, Clock as De, MessageCircle as it, Plus as je, ChevronDown as Pe, ChevronRight as Ye, Paperclip as $e, AlertTriangle as at, Eye as st, Edit2 as dt, Trash2 as lt, Calendar as ct, X as Ge, Loader2 as Ve, Upload as pt, Link2 as gt } from "lucide-react";
const Ue = ot(void 0);
function ht({ children: n, value: p }) {
  return /* @__PURE__ */ t(Ue.Provider, { value: p, children: n });
}
function me() {
  const n = rt(Ue);
  if (!n)
    throw new Error("useGanttContext must be used within a GanttProvider");
  return n;
}
const U = {
  white: "#FFFFFF",
  dark_gray: "#4F4F4F",
  gray: "#7B7B7B",
  light_gray: "#D9D9D9",
  dark_green: "#1A3C30",
  water_green: "#7ab7a3",
  light_green: "#A0D8A8",
  orange: "#CD6200",
  yellow: "#FFBB1C",
  red: "#FF0000"
}, e = {
  pageBg: "#F8FAFB",
  surface: U.white,
  // #FFFFFF
  surfaceAlt: "#F7FAF8",
  // subtle alternating row
  headerBg: "#F2F5F3",
  // soft green-tinted header
  textTitle: U.dark_green,
  // #1A3C30
  textPrimary: U.dark_gray,
  // #4F4F4F
  textSecondary: U.gray,
  // #7B7B7B
  textMuted: U.light_gray,
  // #D9D9D9
  group: U.dark_green,
  // #1A3C30
  groupLight: U.water_green,
  // #A0D8A8 (bar border)
  milestone: U.dark_green,
  // #1A3C30
  milestoneRing: U.light_green,
  // #A0D8A8
  event: U.orange,
  // yellow translucent
  note: U.yellow,
  // #FFBB1C
  border: U.light_gray,
  // #D9D9D9
  borderLight: "#ECECEC",
  weekendBg: "#F4F6F5",
  today: U.red,
  // #FF0000
  todayBg: "#FF000008",
  // today column tint
  arrow: U.gray,
  // #7B7B7B
  arrowHover: U.dark_green
  // #1A3C30
}, G = 50, Ie = 32, ut = Ie * 2, ft = 460, ie = 26, xe = 28, Ne = 120, yt = 40, xt = 3.5, ae = [
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
], Oe = {
  step: "Steps",
  milestone: "Milestones",
  event: "Events",
  note: "Notes"
};
function bt() {
  const {
    props: n,
    t: p,
    viewMode: l,
    setViewMode: I,
    visibleTypes: h,
    setVisibleTypes: u,
    newActionOpen: x,
    setNewActionOpen: M,
    newActionRef: D
  } = me(), { projectName: f, onAddNewStage: R, onAddMilestone: m, onAddEvent: A, onAddNote: w } = n, B = (c) => {
    u((s) => {
      const g = new Set(s);
      return g.has(c) ? g.delete(c) : g.add(c), g;
    });
  };
  return /* @__PURE__ */ o(
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
        /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ t("h3", { style: { margin: 0, fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: e.textTitle }, children: p("planning.gantt", "Project Planning") }),
            /* @__PURE__ */ t("div", { style: { height: 2.5, width: 64, marginTop: 6, borderRadius: 9999, background: `linear-gradient(90deg, ${e.group}, ${e.milestoneRing})` } })
          ] }),
          f && /* @__PURE__ */ t(
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
              children: f
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ t("div", { style: { display: "flex", padding: 4, borderRadius: 8, background: "rgba(122,122,122,0.07)", border: `1px solid ${e.borderLight}` }, children: ["day", "month"].map((c) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => I(c),
              style: {
                padding: "6px 20px",
                fontSize: 12,
                fontWeight: 600,
                borderRadius: 6,
                transition: "all 0.2s",
                border: "none",
                cursor: "pointer",
                ...l === c ? { background: e.surface, color: e.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { background: "transparent", color: e.textSecondary }
              },
              children: c === "day" ? p("charts.gantt.month", "Month") : p("charts.gantt.year", "Year")
            },
            c
          )) }),
          /* @__PURE__ */ t("div", { style: { display: "flex", padding: 4, borderRadius: 8, gap: 2, background: "rgba(122,122,122,0.07)", border: `1px solid ${e.borderLight}` }, children: [
            { type: "step", label: p("gantt.filter.steps", "Steps"), icon: /* @__PURE__ */ t("div", { style: { width: 10, height: 10, borderRadius: 2, background: ae[0].bar, border: `1px solid ${ae[0].barBorder}` } }) },
            { type: "milestone", label: p("gantt.filter.milestones", "Milestones"), icon: /* @__PURE__ */ t(Te, { size: 11, style: { color: e.milestone } }) },
            { type: "event", label: p("gantt.filter.events", "Events"), icon: /* @__PURE__ */ t(De, { size: 11, style: { color: e.event } }) },
            { type: "note", label: p("gantt.filter.notes", "Notes"), icon: /* @__PURE__ */ t(it, { size: 11, style: { color: e.note } }) }
          ].map((c) => {
            const s = h.has(c.type);
            return /* @__PURE__ */ o(
              "button",
              {
                onClick: () => B(c.type),
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
                  ...s ? { background: e.surface, color: e.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { background: "transparent", color: e.textMuted, opacity: 0.5 }
                },
                children: [
                  c.icon,
                  /* @__PURE__ */ t("span", { children: c.label })
                ]
              },
              c.type
            );
          }) }),
          R && /* @__PURE__ */ o("div", { ref: D, style: { position: "relative" }, children: [
            /* @__PURE__ */ o(
              "button",
              {
                onClick: () => M((c) => !c),
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
                  background: `linear-gradient(135deg, ${e.group}, ${e.group}dd)`,
                  transition: "all 0.2s"
                },
                children: [
                  /* @__PURE__ */ t(je, { size: 16 }),
                  /* @__PURE__ */ t("span", { children: p("charts.gantt.newAction", "New Action") }),
                  /* @__PURE__ */ t(Pe, { size: 14, style: { opacity: 0.7, transform: x ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
                ]
              }
            ),
            x && /* @__PURE__ */ t(
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
                  border: `1.5px solid ${e.borderLight}`,
                  width: 200,
                  overflow: "hidden",
                  padding: "5px 5px"
                },
                onClick: (c) => c.stopPropagation(),
                children: [
                  {
                    label: p("gantt.newAction.step", "Step"),
                    icon: /* @__PURE__ */ t("div", { style: { width: 14, height: 14, borderRadius: 3, background: ae[0].bar, border: `1.5px solid ${ae[0].barBorder}`, flexShrink: 0 } }),
                    action: () => {
                      R(), M(!1);
                    }
                  },
                  {
                    label: p("gantt.newAction.milestone", "Milestone"),
                    icon: /* @__PURE__ */ t("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${e.milestoneRing}30`, border: `1.5px solid ${e.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(Te, { size: 11, style: { color: e.milestone } }) }),
                    action: () => {
                      m?.(), M(!1);
                    }
                  },
                  {
                    label: p("gantt.newAction.event", "Event"),
                    icon: /* @__PURE__ */ t("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${e.event}18`, border: `1.5px solid ${e.event}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(De, { size: 11, style: { color: e.event } }) }),
                    action: () => {
                      A?.(), M(!1);
                    }
                  },
                  {
                    label: p("gantt.newAction.note", "Note"),
                    icon: /* @__PURE__ */ t("div", { style: { width: 16, height: 20, background: e.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ t("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } }) }),
                    action: () => {
                      w?.(), M(!1);
                    }
                  }
                ].map((c) => /* @__PURE__ */ o(
                  "button",
                  {
                    onClick: c.action,
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
                    onMouseEnter: (s) => {
                      s.currentTarget.style.background = e.headerBg;
                    },
                    onMouseLeave: (s) => {
                      s.currentTarget.style.background = "transparent";
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
const qe = 864e5, ee = (n, p) => new Date(n.getTime() + p * qe), be = (n, p) => Math.round((p.getTime() - n.getTime()) / qe), Xe = (n) => new Date(n.getFullYear(), n.getMonth(), 1), Be = (n) => new Date(n.getFullYear(), n.getMonth() + 1, 0), q = (n) => `${String(n.getDate()).padStart(2, "0")}/${String(n.getMonth() + 1).padStart(2, "0")}/${n.getFullYear()}`, _e = (n, p = "en") => new Intl.DateTimeFormat(p, { month: "long" }).format(n).toUpperCase();
function mt() {
  const {
    props: n,
    t: p,
    displayRows: l,
    leftBodyRef: I,
    handleLeftScroll: h,
    toggleProject: u,
    toggleGroup: x,
    hoveredTaskId: M,
    setHoveredTaskId: D,
    selectedTaskId: f,
    setSelectedTaskId: R,
    delayedIds: m,
    criticalIds: A,
    relatedIds: w,
    setActivePinboardTask: B
  } = me(), c = (s) => ({
    id: s.id,
    name: s.name,
    start: s.start,
    end: s.end,
    type: s.originalType === "step" ? "task" : "milestone",
    progress: s.progress
  });
  return /* @__PURE__ */ o("div", { style: { width: ft, flexShrink: 0, borderRight: `1px solid ${e.border}`, display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ o(
      "div",
      {
        style: {
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          height: ut,
          background: e.headerBg,
          borderBottom: `1px solid ${e.border}`
        },
        children: [
          /* @__PURE__ */ t("div", { style: { flex: 1, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: e.textSecondary }, children: p("charts.gantt.stepName", "STEP NAME") }),
          /* @__PURE__ */ t("div", { style: { width: 80, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", color: e.textSecondary }, children: p("charts.gantt.start", "START") }),
          /* @__PURE__ */ t("div", { style: { width: 80, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", color: e.textSecondary }, children: p("charts.gantt.end", "END") })
        ]
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        ref: I,
        onScroll: h,
        className: "zg-no-scrollbar",
        style: { overflowY: "auto", overflowX: "hidden", flex: 1 },
        children: /* @__PURE__ */ t("div", { style: { height: Math.max(l.length * G, 400) + 80, position: "relative" }, children: l.map((s) => {
          if (s.kind === "projectHeader")
            return /* @__PURE__ */ t(
              "div",
              {
                style: {
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  height: G,
                  borderBottom: `1.5px solid ${e.group}44`,
                  background: `${e.group}0E`
                },
                onClick: () => u(s.projectId),
                children: /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  s.collapsed ? /* @__PURE__ */ t(Ye, { size: 15, style: { color: e.group, flexShrink: 0 } }) : /* @__PURE__ */ t(Pe, { size: 15, style: { color: e.group, flexShrink: 0 } }),
                  /* @__PURE__ */ t("span", { style: {
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: e.group,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }, children: s.projectTitle })
                ] })
              },
              `ph-${s.projectId}`
            );
          if (s.kind === "group") {
            const L = s.projectId ? `${s.projectId}-${s.groupType}` : s.groupType;
            return /* @__PURE__ */ t(
              "div",
              {
                style: {
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  height: G,
                  borderBottom: `1px solid ${e.border}`,
                  background: e.headerBg
                },
                onClick: () => x(L),
                children: /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  s.collapsed ? /* @__PURE__ */ t(Ye, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ t(Pe, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }),
                  /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: e.textTitle }, children: p(`gantt.group.${s.groupType}`, s.label) }),
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 9999, background: "rgba(0,0,0,0.06)", color: e.textSecondary }, children: s.count })
                ] })
              },
              `g-${L}`
            );
          }
          const g = s.task, d = f === g.id, C = M === g.id, v = g.originalType !== "step", k = m.has(g.id), T = A.has(g.id), a = f !== null && g.id !== f && !w.has(g.id), $ = f !== null && w.has(g.id), W = k ? "#FFF5F5" : d ? e.groupLight : $ ? `${e.groupLight}99` : C ? e.pageBg : e.surface;
          return /* @__PURE__ */ o(
            "div",
            {
              style: {
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                cursor: "pointer",
                transition: "opacity 0.18s, background 0.15s",
                height: G,
                borderBottom: `1px solid ${e.borderLight}`,
                background: W,
                borderLeft: d ? `3px solid ${e.group}` : $ ? `3px solid ${e.group}66` : T ? `3px solid ${e.today}` : void 0,
                opacity: a ? 0.3 : 1
              },
              onClick: () => R((L) => L === g.id ? null : g.id),
              onDoubleClick: () => n.onTaskClick?.(c(g)),
              onMouseEnter: () => D(g.id),
              onMouseLeave: () => D(null),
              children: [
                /* @__PURE__ */ o("div", { style: { flex: 1, display: "flex", alignItems: "center", gap: 8, minWidth: 0, paddingRight: 8 }, children: [
                  g.originalType === "step" && /* @__PURE__ */ t("div", { style: { flexShrink: 0, borderRadius: 4, width: 14, height: 14, background: ae[g.colorIdx ?? 0].bar, border: `1.5px solid ${ae[g.colorIdx ?? 0].barBorder}` } }),
                  g.originalType === "milestone" && /* @__PURE__ */ t("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: `${e.milestoneRing}30`, border: `1.5px solid ${e.milestoneRing}` }, children: /* @__PURE__ */ t(Te, { size: 11, style: { color: e.milestone } }) }),
                  g.originalType === "event" && /* @__PURE__ */ t("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: `${e.event}18`, border: `1.5px solid ${e.event}55` }, children: /* @__PURE__ */ t(De, { size: 11, style: { color: e.event } }) }),
                  /* @__PURE__ */ t("div", { style: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }, children: /* @__PURE__ */ t(
                    "span",
                    {
                      style: {
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.25,
                        color: d ? e.group : k ? e.today : e.textPrimary,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: g.name
                    }
                  ) }),
                  (g.attachedNotes?.length || 0) > 0 && /* @__PURE__ */ o(
                    "button",
                    {
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
                        transition: "transform 0.1s ease"
                      },
                      onClick: (L) => {
                        L.stopPropagation(), B(g);
                      },
                      onMouseEnter: (L) => L.currentTarget.style.transform = "scale(1.05)",
                      onMouseLeave: (L) => L.currentTarget.style.transform = "scale(1)",
                      children: [
                        /* @__PURE__ */ t($e, { size: 12 }),
                        g.attachedNotes?.length
                      ]
                    }
                  ),
                  k && /* @__PURE__ */ t(at, { size: 12, style: { flexShrink: 0, color: e.today } })
                ] }),
                /* @__PURE__ */ t("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: k ? e.today : e.textMuted }, children: q(g.start) }),
                /* @__PURE__ */ t("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: k ? e.today : e.textMuted }, children: v ? "—" : q(g.end) })
              ]
            },
            g.id
          );
        }) })
      }
    )
  ] });
}
function vt(n, p, l = "en") {
  const I = p === "day" ? yt : xt, h = (c, s) => {
    const g = [], d = (/* @__PURE__ */ new Date()).toDateString();
    let C = -1;
    for (let v = 0; v < s; v++) {
      const k = ee(c, v), T = k.toDateString() === d;
      T && (C = v), g.push({
        date: k,
        isToday: T,
        isWeekend: k.getDay() === 0 || k.getDay() === 6
      });
    }
    return { daysArr: g, todayIndex: C };
  };
  if (n.length === 0) {
    const c = /* @__PURE__ */ new Date(), s = Xe(c), g = Be(c), d = be(s, g) + 1, { daysArr: C, todayIndex: v } = h(s, d);
    return {
      start: s,
      end: g,
      totalDays: d,
      dayWidth: I,
      totalWidth: d * I,
      months: [{ date: s, label: `${_e(s, l)} ${s.getFullYear()}`, startDay: 0, days: d, width: d * I }],
      years: [{ label: s.getFullYear().toString(), width: d * I }],
      days: C,
      todayIndex: v
    };
  }
  let u = new Date(n[0].start), x = new Date(n[0].end);
  n.forEach((c) => {
    c.start < u && (u = new Date(c.start)), c.end > x && (x = new Date(c.end));
  });
  const M = Xe(ee(u, -14)), D = Be(ee(x, 14)), f = be(M, D) + 1, R = [];
  let m = new Date(M);
  for (; m <= D; ) {
    const c = Be(m), s = c > D ? D : c, g = be(M, m), d = be(m, s) + 1;
    R.push({
      date: new Date(m),
      label: `${_e(m, l)} ${m.getFullYear()}`,
      startDay: g,
      days: d,
      width: d * I
    }), m = new Date(m.getFullYear(), m.getMonth() + 1, 1);
  }
  const { daysArr: A, todayIndex: w } = h(M, f), B = [];
  if (p === "month") {
    let c = "", s = 0;
    for (const g of R) {
      const d = g.date.getFullYear().toString();
      d !== c ? (c && B.push({ label: c, width: s * I }), c = d, s = g.days) : s += g.days;
    }
    c && B.push({ label: c, width: s * I });
  }
  return { start: M, end: D, totalDays: f, dayWidth: I, totalWidth: f * I, months: R, years: B, days: A, todayIndex: w };
}
function pe(n, p) {
  return be(p.start, n) * p.dayWidth;
}
function wt({
  task: n,
  x: p,
  y: l,
  w: I,
  progW: h,
  isHov: u,
  isDrag: x,
  isResize: M,
  isCritical: D,
  isDelayed: f,
  isConnectTarget: R,
  showDots: m,
  isBarDimmed: A,
  isBarHighlighted: w,
  commonEvents: B,
  handleResizeMouseDown: c,
  handleConnectDotMouseDown: s
}) {
  const { timeline: g, viewMode: d } = me();
  if (n.originalType === "step") {
    const C = ae[n.colorIdx ?? 0], v = l + (G - ie) / 2, k = !!(n.previsionStart && n.previsionEnd), T = k ? pe(n.previsionStart, g) : 0, a = k ? Math.max(pe(n.previsionEnd, g) - T, d === "month" ? g.dayWidth : 6) : 0, $ = v + ie + 3;
    return /* @__PURE__ */ o(ce, { children: [
      k && /* @__PURE__ */ t(
        "div",
        {
          title: `Previsto: ${q(n.previsionStart)} → ${q(n.previsionEnd)}`,
          style: {
            position: "absolute",
            left: T,
            top: $,
            width: a,
            height: 5,
            borderRadius: 3,
            background: `${C.progress}33`,
            border: `1.5px solid ${C.progress}66`,
            boxShadow: `inset 0 0 0 1px ${C.progress}22`,
            pointerEvents: "none",
            zIndex: 5
          }
        }
      ),
      /* @__PURE__ */ o(
        "div",
        {
          "data-task-id": n.id,
          ...B,
          style: {
            position: "absolute",
            left: p,
            top: v,
            width: I,
            height: ie,
            borderRadius: ie / 2,
            background: f ? "linear-gradient(135deg, #fdd, #fee)" : C.bar,
            border: D ? `2px solid ${e.today}` : f ? `1.5px solid ${e.today}88` : `1.5px solid ${C.barBorder}`,
            cursor: x || M ? "grabbing" : "grab",
            zIndex: u || R ? 20 : 10,
            boxShadow: R ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : D ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : w && !u ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : u ? `0 3px 12px ${C.progress}22` : "none",
            transform: u ? "scaleY(1.06)" : "scaleY(1)",
            opacity: A ? 0.15 : 1,
            transition: x || M ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
            overflow: "visible"
          },
          children: [
            /* @__PURE__ */ o("div", { style: { position: "absolute", left: 0, top: 0, width: I, height: "100%", borderRadius: ie / 2, overflow: "hidden", pointerEvents: "none" }, children: [
              /* @__PURE__ */ t("div", { style: {
                position: "absolute",
                left: 0,
                top: 0,
                width: h,
                height: "100%",
                background: f ? `linear-gradient(90deg, ${e.today}cc, ${e.today}88)` : `linear-gradient(90deg, ${C.progress}, ${C.progress}cc)`,
                borderRadius: `${ie / 2}px 0 0 ${ie / 2}px`,
                transition: x || M ? "none" : "width 0.3s"
              } }),
              I > 50 && /* @__PURE__ */ o("span", { style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: n.progress > 50 ? "#fff" : f ? e.today : C.progress,
                zIndex: 1,
                pointerEvents: "none"
              }, children: [
                Math.round(n.progress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { onMouseDown: (W) => c(W, n, "left"), style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${ie / 2}px 0 0 ${ie / 2}px` } }),
            /* @__PURE__ */ t("div", { onMouseDown: (W) => c(W, n, "right"), style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${ie / 2}px ${ie / 2}px 0` } }),
            m && /* @__PURE__ */ o(ce, { children: [
              /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (W) => s(W, n, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
              /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (W) => s(W, n, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
            ] })
          ]
        }
      )
    ] });
  }
  if (n.originalType === "milestone") {
    const C = l + (G - xe) / 2;
    return /* @__PURE__ */ o(
      "div",
      {
        "data-task-id": n.id,
        ...B,
        style: {
          position: "absolute",
          left: p - 6,
          top: C,
          height: xe,
          minWidth: Ne,
          borderRadius: xe / 2,
          background: D ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #e8f5ee, #f0f8f4)",
          border: R ? `2px solid ${e.group}` : D ? `2px solid ${e.today}` : `1.5px solid ${e.milestoneRing}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: x ? "grabbing" : "grab",
          zIndex: u || R ? 20 : 10,
          boxShadow: R ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : D ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : w && !u ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : u ? `0 3px 12px ${e.milestone}22` : "0 1px 3px rgba(0,0,0,0.06)",
          opacity: A ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: u ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ t("div", { style: { width: 20, height: 20, borderRadius: "50%", background: D ? e.today : e.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(Te, { size: 11, color: "#fff", strokeWidth: 2.5 }) }),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: D ? e.today : e.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: n.name }),
          n.progress >= 100 && /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 700, color: "#fff", background: e.milestoneRing, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          m && /* @__PURE__ */ o(ce, { children: [
            /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (v) => s(v, n, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (v) => s(v, n, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (n.originalType === "event") {
    const C = l + (G - xe) / 2;
    return /* @__PURE__ */ o(
      "div",
      {
        "data-task-id": n.id,
        ...B,
        style: {
          position: "absolute",
          left: p - 6,
          top: C,
          height: xe,
          minWidth: Ne,
          borderRadius: xe / 2,
          background: D ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #fff7ed, #ffedd5)",
          border: R ? `2px solid ${e.group}` : D ? `2px solid ${e.today}` : `1.5px solid ${e.event}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: x ? "grabbing" : "grab",
          zIndex: u || R ? 20 : 10,
          boxShadow: R ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : D ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : w && !u ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : u ? `0 3px 12px ${e.event}33` : "0 1px 3px rgba(0,0,0,0.06)",
          opacity: A ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: u ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ t("div", { style: { width: 20, height: 20, borderRadius: "50%", background: D ? e.today : e.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(De, { size: 11, color: "#fff", strokeWidth: 2.5 }) }),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: D ? e.today : e.event, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: n.name }),
          n.progress >= 100 && /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 700, color: "#fff", background: e.event, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          m && /* @__PURE__ */ o(ce, { children: [
            /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (v) => s(v, n, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (v) => s(v, n, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (n.originalType === "note") {
    const v = l + 4, k = n.noteColor || "#FEF08A", T = n.filesCount || 0;
    return /* @__PURE__ */ o(
      "div",
      {
        "data-task-id": n.id,
        ...B,
        style: {
          position: "absolute",
          left: p,
          top: v,
          width: 148,
          minHeight: 72,
          background: k,
          borderRadius: 3,
          cursor: x ? "grabbing" : "grab",
          zIndex: u || R ? 20 : 10,
          boxShadow: R ? `0 0 0 2px ${e.group}, 4px 6px 16px rgba(0,0,0,0.22)` : w && !u ? `0 0 0 2px ${e.group}99, 3px 4px 14px rgba(0,0,0,0.18)` : u ? "4px 6px 18px rgba(0,0,0,0.22)" : "2px 3px 8px rgba(0,0,0,0.13)",
          opacity: A ? 0.2 : 1,
          transition: x ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: u ? "rotate(-1.5deg) scale(1.03) translateY(-2px)" : "rotate(0deg)",
          border: "1px solid rgba(0,0,0,0.06)",
          padding: "12px 10px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          userSelect: "none"
        },
        children: [
          /* @__PURE__ */ t("div", { style: {
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
          /* @__PURE__ */ t("span", { style: {
            fontSize: 13,
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: "1.3",
            wordBreak: "break-word",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }, children: n.name }),
          n.projectTitle && /* @__PURE__ */ t("span", { style: {
            fontSize: 10,
            fontWeight: 400,
            color: "rgba(0,0,0,0.55)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: n.projectTitle }),
          /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 2 }, children: [
            /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 500, color: "rgba(0,0,0,0.45)" }, children: q(n.start) }),
            T > 0 && /* @__PURE__ */ o("span", { style: {
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 9,
              color: "rgba(0,0,0,0.45)"
            }, children: [
              /* @__PURE__ */ t($e, { size: 8 }),
              " ",
              T
            ] })
          ] }),
          m && /* @__PURE__ */ o(ce, { children: [
            /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (a) => s(a, n, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (a) => s(a, n, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  return null;
}
function St() {
  const {
    arrows: n,
    hoveredTaskId: p,
    selectedTaskId: l,
    relatedIds: I
  } = me();
  return /* @__PURE__ */ t(ce, { children: n.map((h, u) => {
    const x = p === h.predId || p === h.succId, M = !l || h.predId === l || h.succId === l || I.has(h.predId) || I.has(h.succId), D = l !== null && M, f = x ? e.arrowHover : D ? e.group : e.arrow;
    return /* @__PURE__ */ o("g", { style: { opacity: M ? D ? 1 : void 0 : 0.08, transition: "opacity 0.18s" }, children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: h.path,
          fill: "none",
          stroke: f,
          strokeWidth: D ? 2.5 : x ? 2 : 1.5,
          style: { transition: "stroke 0.2s, stroke-width 0.2s" }
        }
      ),
      /* @__PURE__ */ t(
        "polygon",
        {
          points: `${h.headX},${h.headY} ${h.headX - 6},${h.headY - 4} ${h.headX - 6},${h.headY + 4}`,
          fill: f,
          style: { transition: "fill 0.2s" }
        }
      )
    ] }, u);
  }) });
}
const Le = (n) => ({
  id: n.id,
  name: n.name,
  start: n.start,
  end: n.end,
  type: n.originalType === "step" ? "task" : n.originalType,
  progress: n.progress
}), ke = (n, p) => {
  switch (n) {
    case "step":
      return /* @__PURE__ */ t("div", { style: { width: 12, height: 12, borderRadius: 2, background: ae[p ?? 0].bar, border: `1.5px solid ${ae[p ?? 0].barBorder}`, flexShrink: 0 } });
    case "milestone":
      return /* @__PURE__ */ t("div", { style: { width: 16, height: 16, borderRadius: "50%", background: e.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(Te, { size: 8, color: "#fff" }) });
    case "event":
      return /* @__PURE__ */ t("div", { style: { width: 16, height: 16, borderRadius: "50%", background: e.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(De, { size: 8, color: "#fff" }) });
    case "note":
      return /* @__PURE__ */ t("div", { style: { width: 12, height: 14, background: e.note, borderRadius: 2, boxShadow: "1px 1px 2px rgba(0,0,0,0.1)", flexShrink: 0 } });
    default:
      return null;
  }
};
function kt() {
  const {
    props: n,
    viewMode: p,
    timeline: l,
    displayRows: I,
    dragState: h,
    resizeState: u,
    connectState: x,
    pendingConnection: M,
    setPendingConnection: D,
    depModalType: f,
    setDepModalType: R,
    depModalLag: m,
    setDepModalLag: A,
    depCreating: w,
    deletingDepId: B,
    setDeletingDepId: c,
    chartMenu: s,
    setChartMenu: g,
    rightBodyRef: d,
    timeHeaderRef: C,
    handleChartMouseDown: v,
    handleChartWheel: k,
    openChartMenu: T,
    handleRightScroll: a,
    hoveredTaskId: $,
    setHoveredTaskId: W,
    selectedTaskId: L,
    setSelectedTaskId: X,
    tooltip: r,
    setTooltip: _,
    popupState: V,
    setPopupState: te,
    criticalIds: K,
    delayedIds: J,
    relatedIds: se,
    handleBarMouseDown: Me,
    handleResizeMouseDown: ve,
    handleConnectDotMouseDown: Re,
    handleCreateDependency: we
  } = me(), {
    translations: ge,
    onViewStage: Se,
    onEditStage: Ce,
    onDeleteStage: Fe,
    onDeleteDependency: P,
    onAddNewStage: H,
    onAddMilestone: ze,
    onAddEvent: Ae,
    onAddNote: Ee
  } = n, F = (b, j) => ge ? typeof ge == "function" ? ge(b, j) : ge[b] || j : j, de = (b, j) => Math.round((j.getTime() - b.getTime()) / 864e5) + 1, ne = Math.max(I.length * G, 400) + 80, fe = () => te({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  return /* @__PURE__ */ o("div", { style: { flex: 1, width: "100%", background: "#FAFAFA", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", borderLeft: `1px solid ${e.borderLight}` }, children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: C,
        style: {
          boxSizing: "border-box",
          height: Ie * 2,
          background: e.headerBg,
          borderBottom: `1px solid ${e.borderLight}`,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
        },
        onWheel: k,
        children: /* @__PURE__ */ o("div", { style: { width: l.totalWidth, height: "100%", position: "relative" }, children: [
          /* @__PURE__ */ o("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: Ie, display: "flex" }, children: [
            p === "day" && l.months.map((b, j) => /* @__PURE__ */ t("div", { style: { width: b.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 700, color: e.textTitle, letterSpacing: "0.02em" }, children: b.label }) }, j)),
            p === "month" && l.years?.map((b, j) => /* @__PURE__ */ t("div", { style: { width: b.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 700, color: e.textTitle, letterSpacing: "0.02em" }, children: b.label }) }, j))
          ] }),
          /* @__PURE__ */ o("div", { style: { position: "absolute", top: Ie, left: 0, right: 0, height: Ie, display: "flex" }, children: [
            p === "day" && l.days.map((b, j) => {
              const i = b.isToday;
              return /* @__PURE__ */ t("div", { style: { width: l.dayWidth, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: i ? 800 : 500, color: i ? e.today : e.textSecondary, letterSpacing: "-0.03em" }, children: b.date.getDate().toString().padStart(2, "0") }) }, j);
            }),
            p === "month" && l.months.map((b, j) => /* @__PURE__ */ t("div", { style: { width: b.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: e.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em" }, children: b.label.substring(0, 3) }) }, j))
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        ref: d,
        className: "zg-no-scrollbar",
        style: { flex: 1, overflow: "auto", background: "#fff", position: "relative" },
        onScroll: a,
        onMouseDown: v,
        onWheel: k,
        onContextMenu: T,
        children: /* @__PURE__ */ o("div", { style: { width: l.totalWidth, height: ne, position: "relative" }, children: [
          /* @__PURE__ */ o("svg", { width: l.totalWidth, height: ne, style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" }, children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("pattern", { id: "gantt-y-lines", x: "0", y: "0", width: l.dayWidth, height: G, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ t("line", { x1: l.dayWidth, y1: "0", x2: l.dayWidth, y2: G, stroke: e.border, strokeWidth: "1", strokeDasharray: "4 4", opacity: "0.4" }) }),
              /* @__PURE__ */ t("pattern", { id: "gantt-x-lines", x: "0", y: "0", width: l.dayWidth, height: G, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ t("line", { x1: "0", y1: G, x2: l.dayWidth, y2: G, stroke: e.borderLight, strokeWidth: "1" }) })
            ] }),
            /* @__PURE__ */ t("rect", { width: "100%", height: "100%", fill: "url(#gantt-x-lines)" }),
            /* @__PURE__ */ t("rect", { width: "100%", height: "100%", fill: "url(#gantt-y-lines)" }),
            p === "day" && l.days.map((b, j) => b.isWeekend ? /* @__PURE__ */ t("rect", { x: j * l.dayWidth, y: 0, width: l.dayWidth, height: ne, fill: e.weekendBg, opacity: 0.6 }, `we-${j}`) : null),
            p === "month" && l.days.map((b, j) => b.isWeekend ? /* @__PURE__ */ t("rect", { x: j * l.dayWidth, y: 0, width: l.dayWidth, height: ne, fill: e.weekendBg, opacity: 0.3 }, `wem-${j}`) : null),
            l.todayIndex >= 0 && /* @__PURE__ */ o("g", { children: [
              /* @__PURE__ */ t("rect", { x: l.todayIndex * l.dayWidth, y: 0, width: l.dayWidth, height: ne, fill: e.todayBg }),
              /* @__PURE__ */ t("line", { x1: (l.todayIndex + 0.5) * l.dayWidth, y1: 0, x2: (l.todayIndex + 0.5) * l.dayWidth, y2: ne, stroke: e.today, strokeWidth: 2, strokeDasharray: "4 4", opacity: 0.3 })
            ] })
          ] }),
          I.map((b, j) => b.kind === "group" || b.kind === "projectHeader" ? /* @__PURE__ */ t("div", { style: {
            boxSizing: "border-box",
            position: "absolute",
            left: 0,
            top: j * G,
            width: "100%",
            height: G,
            background: b.kind === "projectHeader" ? e.headerBg : `${e.groupLight}15`,
            borderBottom: `1px solid ${e.borderLight}`,
            pointerEvents: "none"
          } }, `bg-${j}`) : null),
          /* @__PURE__ */ o("div", { style: { position: "absolute", inset: 0 }, children: [
            I.map((b, j) => {
              if (b.kind !== "task") return null;
              const i = b.task, y = h?.task.id === i.id, S = u?.task.id === i.id, E = y || S && u.edge === "left" ? ee(i.start, y ? h.offsetDays : u.offsetDays) : i.start, z = y || S && u.edge === "right" ? ee(i.end, y ? h.offsetDays : u.offsetDays) : i.end, N = i.originalType !== "step";
              let O = pe(E, l), oe = 0, ye = 0;
              N || (oe = Math.max(pe(z, l) - O, l.dayWidth), ye = oe * (i.progress / 100));
              const re = $ === i.id, We = L === i.id, Ke = J.has(i.id), Je = K.has(i.id), Qe = !!L && !We && !se.has(i.id), Ze = We || !!L && se.has(i.id), et = x?.hoverTargetId === i.id, tt = re || We, nt = j * G;
              return /* @__PURE__ */ t(
                wt,
                {
                  task: i,
                  x: O,
                  y: nt,
                  w: oe,
                  progW: ye,
                  isHov: re,
                  isDrag: y,
                  isResize: S,
                  isCritical: Je,
                  isDelayed: Ke,
                  isConnectTarget: et,
                  showDots: tt,
                  isBarDimmed: Qe,
                  isBarHighlighted: Ze,
                  commonEvents: {
                    onMouseEnter: (Q) => {
                      W(i.id), !h && !u && _({ task: i, x: Q.clientX, y: Q.clientY });
                    },
                    onMouseMove: (Q) => {
                      $ === i.id && !h && !u && _({ task: i, x: Q.clientX, y: Q.clientY });
                    },
                    onMouseLeave: () => {
                      W(null), _(null);
                    },
                    onClick: (Q) => {
                      Q.stopPropagation(), X(i.id), Q.detail === 2 && Se?.(Le(i)), te(!V.isOpen || V.task?.id !== i.id ? {
                        isOpen: !0,
                        position: { x: Q.clientX, y: Q.clientY },
                        task: i
                      } : { isOpen: !1, position: { x: 0, y: 0 }, task: null });
                    },
                    onMouseDown: (Q) => Me(Q, i)
                  },
                  handleResizeMouseDown: ve,
                  handleConnectDotMouseDown: Re
                },
                i.id
              );
            }),
            /* @__PURE__ */ t("svg", { width: l.totalWidth, height: ne, style: { position: "absolute", inset: 0, pointerEvents: "none" }, children: /* @__PURE__ */ t(St, {}) }),
            r && !h && /* @__PURE__ */ t("div", { style: { position: "fixed", left: r.x + 16, top: r.y - 10, zIndex: 9999, pointerEvents: "none" }, children: /* @__PURE__ */ o(
              "div",
              {
                style: {
                  borderRadius: 12,
                  padding: "12px 16px",
                  minWidth: 220,
                  maxWidth: 340,
                  background: `${e.surface}f5`,
                  border: `1px solid ${e.borderLight}`,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)"
                },
                children: [
                  /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }, children: [
                    ke(r.task.originalType, r.task.colorIdx),
                    /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 700, color: e.textTitle, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: r.task.name })
                  ] }),
                  /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: 4, fontSize: 11, color: e.textSecondary }, children: r.task.originalType === "step" ? /* @__PURE__ */ o(ce, { children: [
                    r.task.previsionStart && r.task.previsionEnd && /* @__PURE__ */ o("div", { style: { background: `${e.headerBg}`, borderRadius: 6, padding: "4px 6px", marginBottom: 2 }, children: [
                      /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }, children: [
                        /* @__PURE__ */ t("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${e.textSecondary}44`, border: `1.5px solid ${e.textSecondary}66` } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: e.textSecondary }, children: F("gantt.tooltip.planned", "Planned") })
                      ] }),
                      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ o("span", { children: [
                          F("gantt.tooltip.start", "Start"),
                          ":"
                        ] }),
                        /* @__PURE__ */ t("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: q(r.task.previsionStart) })
                      ] }),
                      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ o("span", { children: [
                          F("gantt.tooltip.end", "End"),
                          ":"
                        ] }),
                        /* @__PURE__ */ t("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: q(r.task.previsionEnd) })
                      ] }),
                      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ o("span", { children: [
                          F("gantt.tooltip.duration", "Duration"),
                          ":"
                        ] }),
                        /* @__PURE__ */ o("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: [
                          de(r.task.previsionStart, r.task.previsionEnd),
                          "d"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ o("div", { style: { background: r.task.hasActualDates ? `${e.groupLight}22` : "transparent", borderRadius: 6, padding: "4px 6px" }, children: [
                      /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }, children: [
                        /* @__PURE__ */ t("div", { style: { width: 20, height: 4, borderRadius: 2, background: ae[r.task.colorIdx ?? 0].progress } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: r.task.hasActualDates ? e.group : e.textSecondary }, children: r.task.hasActualDates ? F("gantt.tooltip.actual", "Actual") : F("gantt.tooltip.plannedInUse", "Planned (in use)") })
                      ] }),
                      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ o("span", { children: [
                          F("gantt.tooltip.start", "Start"),
                          ":"
                        ] }),
                        /* @__PURE__ */ t("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: q(r.task.start) })
                      ] }),
                      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ o("span", { children: [
                          F("gantt.tooltip.end", "End"),
                          ":"
                        ] }),
                        /* @__PURE__ */ t("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: q(r.task.end) })
                      ] }),
                      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ o("span", { children: [
                          F("gantt.tooltip.duration", "Duration"),
                          ":"
                        ] }),
                        /* @__PURE__ */ o("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: [
                          de(r.task.start, r.task.end),
                          "d"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16, paddingTop: 4, marginTop: 4, borderTop: `1px solid ${e.borderLight}` }, children: [
                      /* @__PURE__ */ o("span", { children: [
                        F("charts.gantt.progress", "Progress"),
                        ":"
                      ] }),
                      /* @__PURE__ */ o("span", { style: { fontWeight: 700, color: e.group }, children: [
                        Math.round(r.task.progress),
                        "%"
                      ] })
                    ] })
                  ] }) : r.task.originalType === "note" ? /* @__PURE__ */ o(ce, { children: [
                    r.task.noteProjectTitle && /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }, children: [
                      /* @__PURE__ */ t("div", { style: { width: 8, height: 8, borderRadius: 2, background: r.task.noteColor || e.note, flexShrink: 0 } }),
                      /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: e.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: r.task.noteProjectTitle })
                    ] }),
                    /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                      /* @__PURE__ */ o("span", { children: [
                        F("gantt.tooltip.date", "Date"),
                        ":"
                      ] }),
                      /* @__PURE__ */ t("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: q(r.task.start) })
                    ] }),
                    (r.task.filesCount || 0) > 0 && /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                      /* @__PURE__ */ o("span", { children: [
                        F("gantt.tooltip.attachments", "Attachments"),
                        ":"
                      ] }),
                      /* @__PURE__ */ o("span", { style: { fontWeight: 600, display: "flex", alignItems: "center", gap: 4, color: e.textPrimary }, children: [
                        /* @__PURE__ */ t($e, { size: 10 }),
                        r.task.filesCount
                      ] })
                    ] })
                  ] }) : /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                    /* @__PURE__ */ o("span", { children: [
                      F("charts.gantt.start", "Start"),
                      ":"
                    ] }),
                    /* @__PURE__ */ t("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: q(r.task.start) })
                  ] }) })
                ]
              }
            ) })
          ] })
        ] })
      }
    ),
    V.task && V.isOpen && (() => {
      const b = V.task, j = (n.dependencies || []).filter((z) => z.predecessorId === b.id || z.successorId === b.id), i = { FS: F("gantt.depType.fs", "Finish to Start"), SS: F("gantt.depType.ss", "Start to Start"), FF: F("gantt.depType.ff", "Finish to Finish"), SF: F("gantt.depType.sf", "Start to Finish") }, y = j.length > 0 ? 300 : 220, S = Math.min(V.position.x, window.innerWidth - y - 16), E = V.position.y + 8;
      return /* @__PURE__ */ o(
        "div",
        {
          "data-popup": "gantt-action",
          style: { position: "fixed", left: S, top: E, zIndex: 9999, background: "#fff", borderRadius: 4, boxShadow: "0 12px 40px rgba(0,0,0,0.14), 0 3px 10px rgba(0,0,0,0.07)", border: `1.5px solid ${e.borderLight}`, width: y, overflow: "hidden" },
          onMouseDown: (z) => z.stopPropagation(),
          children: [
            /* @__PURE__ */ t("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${e.borderLight}` }, children: /* @__PURE__ */ t("p", { style: { fontSize: 13, fontWeight: 700, color: e.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: b.name, children: b.name }) }),
            /* @__PURE__ */ o("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" }, children: [
              /* @__PURE__ */ o("button", { onClick: () => {
                Se?.(Le(b)), fe();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ t(st, { size: 15 }),
                " ",
                /* @__PURE__ */ t("span", { style: { flex: 1, textAlign: "left" }, children: F("gantt.popup.viewDetails", "View details") })
              ] }),
              /* @__PURE__ */ o("button", { onClick: () => {
                Ce?.(Le(b)), fe();
              }, className: "zg-popup-btn", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.textPrimary, textAlign: "left" }, children: [
                /* @__PURE__ */ t(dt, { size: 15 }),
                " ",
                /* @__PURE__ */ t("span", { style: { flex: 1, textAlign: "left" }, children: F("gantt.popup.edit", "Edit") })
              ] }),
              /* @__PURE__ */ o("button", { onClick: () => {
                Fe?.(b.id), fe();
              }, className: "zg-popup-btn zg-popup-btn-danger", style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: "#ef4444", textAlign: "left" }, children: [
                /* @__PURE__ */ t(lt, { size: 15 }),
                " ",
                /* @__PURE__ */ t("span", { style: { flex: 1, textAlign: "left" }, children: F("gantt.popup.delete", "Delete") })
              ] })
            ] }),
            j.length > 0 && /* @__PURE__ */ o("div", { style: { borderTop: `1px solid ${e.borderLight}`, padding: "10px 14px 12px" }, children: [
              /* @__PURE__ */ o("div", { style: { fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }, children: [
                F("gantt.popup.relations", "Relations"),
                " (",
                j.length,
                ")"
              ] }),
              /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: j.map((z) => {
                const N = z.predecessorId === b.id, O = N ? z.successorName : z.predecessorName, oe = B === z.id;
                return /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderRadius: 8, background: "#f8fafb", border: `1px solid ${e.borderLight}` }, children: [
                  /* @__PURE__ */ o("div", { style: { flex: 1, minWidth: 0 }, children: [
                    /* @__PURE__ */ o("div", { style: { fontSize: 10, fontWeight: 700, color: e.group, marginBottom: 2 }, children: [
                      /* @__PURE__ */ t("span", { style: { background: `${e.group}15`, borderRadius: 4, padding: "1px 5px" }, children: z.type }),
                      " ",
                      /* @__PURE__ */ t("span", { style: { color: e.textSecondary, fontWeight: 500 }, children: N ? "→ " : "← " }),
                      /* @__PURE__ */ t("span", { style: { color: e.textMuted, fontWeight: 400, fontSize: 9 }, children: i[z.type] ?? z.type })
                    ] }),
                    /* @__PURE__ */ t("div", { style: { fontSize: 11, color: e.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: O, children: O })
                  ] }),
                  P && /* @__PURE__ */ t(
                    "button",
                    {
                      disabled: !!oe,
                      onClick: async () => {
                        c(z.id);
                        try {
                          await P(z.id);
                        } finally {
                          c(null);
                        }
                      },
                      style: { flexShrink: 0, padding: "4px 6px", borderRadius: 6, border: "none", background: oe ? "#fee2e2" : "transparent", cursor: oe ? "wait" : "pointer", color: "#ef4444", fontSize: 14, opacity: oe ? 0.5 : 1, transition: "background 0.12s" },
                      children: oe ? "⟳" : "🗑"
                    }
                  )
                ] }, z.id);
              }) })
            ] })
          ]
        }
      );
    })(),
    s && /* @__PURE__ */ o(
      "div",
      {
        "data-menu": "chart-create",
        style: {
          position: "fixed",
          left: Math.min(s.x, window.innerWidth - 220),
          top: Math.min(s.y, window.innerHeight - 220),
          zIndex: 99999,
          background: "#fff",
          borderRadius: 10,
          boxShadow: "0 12px 40px rgba(0,0,0,0.15), 0 3px 10px rgba(0,0,0,0.08)",
          border: `1.5px solid ${e.borderLight}`,
          width: 200,
          overflow: "hidden"
        },
        onClick: (b) => b.stopPropagation(),
        children: [
          /* @__PURE__ */ t("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${e.borderLight}`, background: e.headerBg }, children: /* @__PURE__ */ o("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" }, children: [
            F("gantt.chart.addOn", "Add on"),
            " ",
            q(s.date)
          ] }) }),
          /* @__PURE__ */ t("div", { style: { padding: "5px 5px" }, children: [
            { label: F("gantt.newAction.step", "Step"), icon: ke("step", 0), action: () => {
              H?.(s.date, s.projectId), g(null);
            } },
            { label: F("gantt.newAction.milestone", "Milestone"), icon: ke("milestone"), action: () => {
              ze?.(s.date, s.projectId), g(null);
            } },
            { label: F("gantt.newAction.event", "Event"), icon: ke("event"), action: () => {
              Ae?.(s.date, s.projectId), g(null);
            } },
            { label: F("gantt.newAction.note", "Note"), icon: ke("note"), action: () => {
              Ee?.(s.date, s.projectId), g(null);
            } }
          ].map((b) => /* @__PURE__ */ o(
            "button",
            {
              onClick: b.action,
              className: "zg-popup-btn",
              style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.textPrimary, textAlign: "left", transition: "background 0.12s" },
              children: [
                b.icon,
                " ",
                b.label
              ]
            },
            b.label
          )) })
        ]
      }
    ),
    x && /* @__PURE__ */ o("svg", { style: { position: "fixed", inset: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 99999 }, children: [
      /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ t("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ t("path", { d: "M0,0 L0,6 L6,3 z", fill: e.group }) }) }),
      /* @__PURE__ */ t("line", { x1: x.fromScreenX, y1: x.fromScreenY, x2: x.currentScreenX, y2: x.currentScreenY, stroke: e.group, strokeWidth: 2.5, strokeDasharray: "8 5", markerEnd: "url(#connect-arrow)", opacity: 0.85, style: { animation: "zg-dash 0.5s linear infinite" } })
    ] }),
    M && /* @__PURE__ */ t("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99998 }, onClick: () => D(null), children: /* @__PURE__ */ o("div", { style: { background: "#fff", borderRadius: 20, padding: "32px 36px", width: 420, boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 6px 24px rgba(0,0,0,0.08)" }, onClick: (b) => b.stopPropagation(), children: [
      /* @__PURE__ */ o("div", { style: { marginBottom: 20 }, children: [
        /* @__PURE__ */ t("h3", { style: { fontSize: 18, fontWeight: 700, color: e.textTitle, marginBottom: 4 }, children: F("gantt.depModal.title", "Relation Type") }),
        /* @__PURE__ */ t("p", { style: { fontSize: 13, color: e.textSecondary }, children: F("gantt.depModal.subtitle", "Choose how the two tasks relate") })
      ] }),
      /* @__PURE__ */ t("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }, children: [
        { type: "FS", label: F("gantt.depModal.fs", "Finish to Start"), desc: F("gantt.depModal.fsDesc", "B starts when A finishes") },
        { type: "SS", label: F("gantt.depModal.ss", "Start to Start"), desc: F("gantt.depModal.ssDesc", "A and B start together") },
        { type: "FF", label: F("gantt.depModal.ff", "Finish to Finish"), desc: F("gantt.depModal.ffDesc", "A and B finish together") },
        { type: "SF", label: F("gantt.depModal.sf", "Start to Finish"), desc: F("gantt.depModal.sfDesc", "B finishes when A starts") }
      ].map((b) => /* @__PURE__ */ o("button", { onClick: () => R(b.type), style: { border: f === b.type ? `2px solid ${e.group}` : `1.5px solid ${e.borderLight}`, borderRadius: 12, padding: "12px 14px", textAlign: "left", cursor: "pointer", background: f === b.type ? `${e.group}0d` : "#fafafa" }, children: [
        /* @__PURE__ */ t("div", { style: { fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: e.group, marginBottom: 4, background: f === b.type ? `${e.group}20` : `${e.group}0d`, borderRadius: 6, padding: "2px 6px", display: "inline-block" }, children: b.type }),
        /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 2 }, children: b.label }),
        /* @__PURE__ */ t("div", { style: { fontSize: 11, color: e.textSecondary }, children: b.desc })
      ] }, b.type)) }),
      /* @__PURE__ */ o("div", { style: { marginBottom: 24 }, children: [
        /* @__PURE__ */ t("label", { style: { display: "block", fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 6 }, children: F("gantt.depModal.lagLabel", "Lag (days)") }),
        /* @__PURE__ */ t("input", { type: "number", value: m, onChange: (b) => A(parseInt(b.target.value) || 0), style: { width: "100%", padding: "10px 12px", border: `1.5px solid ${e.borderLight}`, borderRadius: 8, fontSize: 14 } })
      ] }),
      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12 }, children: [
        /* @__PURE__ */ t("button", { onClick: () => D(null), style: { padding: "10px 16px", borderRadius: 8, border: `1px solid ${e.borderLight}`, background: "#fff", cursor: "pointer", fontWeight: 600 }, children: F("gantt.depModal.cancel", "Cancel") }),
        /* @__PURE__ */ t("button", { onClick: we, disabled: w, style: { padding: "10px 16px", borderRadius: 8, border: "none", background: e.group, color: "#fff", cursor: w ? "wait" : "pointer", fontWeight: 600 }, children: w ? F("gantt.depModal.saving", "Saving...") : F("gantt.depModal.create", "Create Dependency") })
      ] })
    ] }) })
  ] });
}
function It(n) {
  const p = he(null), l = he(null), I = he(null), h = he(!1), u = Z(() => {
    if (h.current) return;
    h.current = !0;
    const f = l.current;
    f && p.current && (p.current.scrollTop = f.scrollTop), f && I.current && (I.current.scrollLeft = f.scrollLeft), h.current = !1;
  }, []), x = Z(() => {
    h.current || (h.current = !0, p.current && l.current && (l.current.scrollTop = p.current.scrollTop), h.current = !1);
  }, []), M = he(!1);
  ue(() => {
    if (M.current || !n.totalWidth) return;
    const f = l.current;
    if (!f) return;
    const R = pe(/* @__PURE__ */ new Date(), n);
    if (R >= 0 && R <= n.totalWidth) {
      const m = R - f.clientWidth / 2;
      f.scrollLeft = Math.max(0, m), I.current && (I.current.scrollLeft = f.scrollLeft), M.current = !0;
    }
  }, [n]);
  const D = Z((f) => {
    const R = l.current;
    if (R)
      if (f.preventDefault(), f.shiftKey || Math.abs(f.deltaX) > Math.abs(f.deltaY)) {
        const m = f.shiftKey ? f.deltaY : f.deltaX;
        R.scrollLeft += m, I.current && (I.current.scrollLeft = R.scrollLeft);
      } else
        R.scrollTop += f.deltaY, p.current && (p.current.scrollTop = R.scrollTop);
  }, []);
  return {
    leftBodyRef: p,
    rightBodyRef: l,
    timeHeaderRef: I,
    handleRightScroll: u,
    handleLeftScroll: x,
    handleChartWheel: D
  };
}
function Tt(n, p, l, I) {
  const h = /* @__PURE__ */ new Map();
  return n.forEach((u) => h.set(u.id, u)), p.map((u) => {
    const x = h.get(u.predecessorId), M = h.get(u.successorId);
    if (!x || !M) return null;
    const D = I.get(x.id), f = I.get(M.id);
    if (D == null || f == null) return null;
    const R = x.originalType !== "step", m = M.originalType !== "step", A = R ? pe(x.start, l) + Ne : pe(x.end, l), w = D * G + G / 2, B = m ? pe(M.start, l) - 10 : pe(M.start, l), c = f * G + G / 2, s = 14, g = Math.max(A + s, B - s), d = w === c ? `M${A},${w} L${B - 6},${c}` : `M${A},${w} L${g},${w} L${g},${c} L${B - 6},${c}`;
    return { predId: x.id, succId: M.id, path: d, headX: B - 6, headY: c };
  }).filter(Boolean);
}
function Dt(n, p) {
  if (n.length === 0 || p.length === 0) return /* @__PURE__ */ new Set();
  const l = /* @__PURE__ */ new Map();
  n.forEach((d) => l.set(d.id, d));
  const I = new Set(n.map((d) => d.id)), h = p.filter((d) => I.has(d.predecessorId) && I.has(d.successorId));
  if (h.length === 0) return /* @__PURE__ */ new Set();
  const u = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map();
  h.forEach((d) => {
    u.has(d.predecessorId) || u.set(d.predecessorId, []), u.get(d.predecessorId).push(d.successorId), x.has(d.successorId) || x.set(d.successorId, []), x.get(d.successorId).push(d.predecessorId);
  });
  const M = (d) => Math.max(1, be(d.start, d.end)), D = /* @__PURE__ */ new Set(), f = [];
  function R(d) {
    D.has(d) || (D.add(d), (u.get(d) || []).forEach(R), f.unshift(d));
  }
  n.forEach((d) => R(d.id));
  const m = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
  for (const d of f) {
    const C = l.get(d), v = x.get(d) || [];
    let k = 0;
    for (const a of v) k = Math.max(k, A.get(a) || 0);
    const T = v.length > 0 ? k : 0;
    m.set(d, T), A.set(d, T + M(C));
  }
  let w = 0;
  A.forEach((d) => {
    d > w && (w = d);
  });
  const B = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  for (let d = f.length - 1; d >= 0; d--) {
    const C = f[d], v = l.get(C), k = u.get(C) || [];
    let T = w;
    for (const a of k) T = Math.min(T, B.get(a) ?? w);
    c.set(C, k.length > 0 ? T : w), B.set(C, (c.get(C) || 0) - M(v));
  }
  const s = /* @__PURE__ */ new Set();
  h.forEach((d) => {
    s.add(d.predecessorId), s.add(d.successorId);
  });
  const g = /* @__PURE__ */ new Set();
  for (const d of f) {
    if (!s.has(d)) continue;
    const C = (B.get(d) || 0) - (m.get(d) || 0);
    Math.abs(C) < 0.5 && g.add(d);
  }
  return g;
}
function Mt({
  steps: n,
  milestones: p,
  events: l,
  notes: I,
  dependencies: h,
  viewMode: u,
  locale: x,
  groupByProject: M,
  visibleTypes: D,
  collapsedGroups: f,
  collapsedProjects: R,
  selectedTaskId: m
}) {
  const A = le(() => {
    const v = [], k = /* @__PURE__ */ new Map();
    I?.forEach((a) => {
      let $ = a.targetId || a.predecessorId;
      if (!$ && h) {
        const L = h.find((X) => X.successorId === a.id);
        L && ($ = L.predecessorId);
      }
      if (!$) return;
      const W = k.get($) || [];
      k.set($, [...W, a]);
    });
    let T = 0;
    return n.forEach((a) => {
      const $ = !!(a.startDate && a.finishDate), W = a.startDate || a.previsionStartDate, L = a.finishDate || a.previsionFinishDate;
      if (!W || !L) return;
      const X = new Date(W), r = new Date(L);
      if (isNaN(X.getTime()) || isNaN(r.getTime())) return;
      r <= X && r.setDate(r.getDate() + 1);
      let _, V;
      if (a.previsionStartDate && a.previsionFinishDate) {
        const J = new Date(a.previsionStartDate), se = new Date(a.previsionFinishDate);
        !isNaN(J.getTime()) && !isNaN(se.getTime()) && (_ = J, V = se <= J ? ee(J, 1) : se);
      }
      const te = h?.filter((J) => J.successorId === a.id).map((J) => J.predecessorId) || [], K = a.conclusionPercent != null ? Number(a.conclusionPercent) : 0;
      v.push({
        id: a.id,
        name: a.name,
        start: X,
        end: r,
        progress: K > 1 ? Math.min(K, 100) : K * 100,
        originalType: "step",
        deps: te,
        colorIdx: T % ae.length,
        previsionStart: _,
        previsionEnd: V,
        hasActualDates: $,
        projectId: a.projectId || void 0,
        projectTitle: a.projectTitle || void 0,
        attachedNotes: k.get(a.id)
      }), T++;
    }), p?.forEach((a) => {
      if (!a.date) return;
      const $ = new Date(a.date);
      if (isNaN($.getTime())) return;
      const W = h?.filter((L) => L.successorId === a.id).map((L) => L.predecessorId) || [];
      v.push({
        id: a.id,
        name: a.name,
        start: $,
        end: $,
        progress: a.finished ? 100 : 0,
        originalType: "milestone",
        deps: W,
        projectId: a.projectId || void 0,
        projectTitle: a.projectTitle || void 0,
        attachedNotes: k.get(a.id)
      });
    }), l?.forEach((a) => {
      if (!a.date) return;
      const $ = new Date(a.date);
      if (isNaN($.getTime())) return;
      const W = h?.filter((L) => L.successorId === a.id).map((L) => L.predecessorId) || [];
      v.push({
        id: a.id,
        name: a.title,
        start: $,
        end: $,
        progress: a.finished ? 100 : 0,
        originalType: "event",
        deps: W,
        projectId: a.projectId || void 0,
        projectTitle: a.projectTitle || void 0,
        attachedNotes: k.get(a.id)
      });
    }), v;
  }, [n, p, l, I, h]), w = le(() => vt(A, u, x), [A, u, x]), B = le(() => {
    const v = [], k = ["step", "milestone", "event"];
    if (M) {
      const T = /* @__PURE__ */ new Map();
      A.forEach((a) => {
        a.projectId && !T.has(a.projectId) && T.set(a.projectId, a.projectTitle || a.projectId);
      });
      for (const [a, $] of Array.from(T.entries())) {
        const W = R.has(a);
        if (v.push({ kind: "projectHeader", projectId: a, projectTitle: $, collapsed: W }), !W) {
          const L = A.filter((X) => X.projectId === a);
          for (const X of k) {
            if (!D.has(X)) continue;
            const r = L.filter((te) => te.originalType === X);
            if (r.length === 0) continue;
            const _ = `${a}-${X}`, V = f.has(_);
            v.push({ kind: "group", groupType: X, label: Oe[X], count: r.length, collapsed: V, projectId: a }), V || r.forEach((te) => v.push({ kind: "task", task: te }));
          }
        }
      }
    } else
      for (const T of k) {
        if (!D.has(T)) continue;
        const a = A.filter((W) => W.originalType === T);
        if (a.length === 0) continue;
        const $ = f.has(T);
        v.push({ kind: "group", groupType: T, label: Oe[T], count: a.length, collapsed: $ }), $ || a.forEach((W) => v.push({ kind: "task", task: W }));
      }
    return v;
  }, [A, D, f, R, M]), c = le(() => {
    const v = /* @__PURE__ */ new Map();
    return B.forEach((k, T) => {
      k.kind === "task" && v.set(k.task.id, T);
    }), v;
  }, [B]), s = le(
    () => Tt(A, h || [], w, c),
    [A, h, w, c]
  ), g = le(() => Dt(A, h || []), [A, h]), d = le(() => {
    const v = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Date();
    return A.forEach((T) => {
      T.originalType === "step" && T.end < k && T.progress < 100 && v.add(T.id);
    }), v;
  }, [A]), C = le(() => {
    if (!m || !h?.length) return /* @__PURE__ */ new Set();
    const v = /* @__PURE__ */ new Set(), k = [m];
    for (; k.length; ) {
      const T = k.shift();
      for (const a of h)
        a.predecessorId === T && !v.has(a.successorId) && (v.add(a.successorId), k.push(a.successorId)), a.successorId === T && !v.has(a.predecessorId) && (v.add(a.predecessorId), k.push(a.predecessorId));
    }
    return v;
  }, [m, h]);
  return {
    tasks: A,
    timeline: w,
    displayRows: B,
    taskRowIndex: c,
    arrows: s,
    criticalIds: g,
    delayedIds: d,
    relatedIds: C
  };
}
function Rt() {
  const { activePinboardTask: n, setActivePinboardTask: p, t: l } = me(), I = !!n, h = () => p(null);
  return /* @__PURE__ */ o(ce, { children: [
    I && /* @__PURE__ */ t(
      "div",
      {
        onClick: h,
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
    /* @__PURE__ */ o("div", { style: {
      position: "fixed",
      top: 0,
      right: I ? 0 : -450,
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
      /* @__PURE__ */ o("div", { style: {
        padding: "20px 24px",
        backgroundColor: e.headerBg,
        borderBottom: `1px solid ${e.borderLight}`,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }, children: [
        /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
          /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ t("span", { style: {
              fontSize: 10,
              fontWeight: 700,
              backgroundColor: e.milestoneRing,
              color: e.group,
              padding: "2px 6px",
              borderRadius: 4,
              letterSpacing: "0.5px"
            }, children: n?.originalType?.toUpperCase() || "" }),
            /* @__PURE__ */ o("span", { style: { fontSize: 12, color: e.textSecondary, display: "flex", alignItems: "center", gap: 4 }, children: [
              /* @__PURE__ */ t(ct, { size: 12 }),
              n && q(n.start),
              n?.originalType === "step" && ` - ${q(n.end)}`
            ] })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: h,
              style: { background: "transparent", border: "none", cursor: "pointer", padding: 4, borderRadius: 4 },
              children: /* @__PURE__ */ t(Ge, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ t("h2", { style: { margin: 0, fontSize: 18, fontWeight: 700, color: e.textTitle }, children: n?.name || "" }),
        /* @__PURE__ */ t("p", { style: { margin: 0, fontSize: 13, color: e.textSecondary }, children: l("pinboard.description", "Quadro de anotações e arquivos vinculados a esta etapa.") })
      ] }),
      /* @__PURE__ */ o("div", { style: {
        flex: 1,
        overflowY: "auto",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        backgroundColor: "#FAFAFB"
      }, children: [
        n?.attachedNotes?.map((u, x) => /* @__PURE__ */ o(
          "div",
          {
            style: {
              background: u.color || e.note,
              padding: "16px",
              borderRadius: "2px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transform: `rotate(${x % 2 === 0 ? "-1deg" : "1deg"})`,
              position: "relative"
            },
            children: [
              /* @__PURE__ */ t("div", { style: {
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "40px",
                height: "12px",
                background: "rgba(255,255,255,0.3)",
                borderRadius: "0 0 4px 4px"
              } }),
              /* @__PURE__ */ t("h3", { style: { margin: "0 0 8px 0", fontSize: 14, fontWeight: 700, color: "rgba(0,0,0,0.7)" }, children: u.title }),
              /* @__PURE__ */ t("p", { style: { margin: 0, fontSize: 13, color: "rgba(0,0,0,0.6)", lineHeight: 1.4 }, children: u.description || "" }),
              u.author && /* @__PURE__ */ o("div", { style: { marginTop: 12, fontSize: 11, fontWeight: 600, color: "rgba(0,0,0,0.4)", textAlign: "right" }, children: [
                "— ",
                u.author
              ] })
            ]
          },
          u.id
        )),
        (!n?.attachedNotes || n.attachedNotes.length === 0) && /* @__PURE__ */ o("div", { style: {
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
          /* @__PURE__ */ t("div", { style: { width: 60, height: 60, borderRadius: "50%", background: e.headerBg, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ t(je, { size: 32 }) }),
          /* @__PURE__ */ t("p", { style: { margin: 0, fontSize: 14 }, children: l("pinboard.empty", "Nenhuma nota vinculada") })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { style: { padding: "16px 24px", backgroundColor: "var(--zg-surface, #FFFFFF)", borderTop: `1px solid ${e.borderLight}` }, children: /* @__PURE__ */ o("button", { style: {
        width: "100%",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: e.group,
        color: "white",
        border: "none",
        borderRadius: 8,
        fontSize: 14,
        fontWeight: 600,
        cursor: "pointer"
      }, children: [
        /* @__PURE__ */ t(je, { size: 18 }),
        " ",
        l("pinboard.newBtn", "Nova Nota nesta Etapa")
      ] }) })
    ] })
  ] });
}
function $t(n) {
  const [p, l] = Y("day"), [I, h] = Y(null), [u, x] = Y(null), [M, D] = Y(null), [f, R] = Y({
    isOpen: !1,
    position: { x: 0, y: 0 },
    task: null
  }), [m, A] = Y(null), [w, B] = Y(null), [c, s] = Y(null), [g, d] = Y(null), [C, v] = Y("FS"), [k, T] = Y(0), [a, $] = Y(!1), [W, L] = Y(null), [X, r] = Y(null), [_, V] = Y(!1), te = he(null), [K, J] = Y(null), [se, Me] = Y(/* @__PURE__ */ new Set(["step", "milestone", "event", "note"])), [ve, Re] = Y(/* @__PURE__ */ new Set()), [we, ge] = Y(/* @__PURE__ */ new Set()), Se = Z((i) => {
    Me((y) => {
      const S = new Set(y);
      return S.has(i) ? S.delete(i) : S.add(i), S;
    });
  }, []), Ce = Z((i) => {
    Re((y) => {
      const S = new Set(y);
      return S.has(i) ? S.delete(i) : S.add(i), S;
    });
  }, []), Fe = Z((i) => {
    ge((y) => {
      const S = new Set(y);
      return S.has(i) ? S.delete(i) : S.add(i), S;
    });
  }, []), P = Mt({
    steps: n.steps,
    milestones: n.milestones,
    events: n.events,
    notes: n.notes,
    dependencies: n.dependencies,
    viewMode: p,
    locale: n.locale,
    visibleTypes: se,
    collapsedGroups: ve,
    collapsedProjects: we,
    groupByProject: n.groupByProject,
    selectedTaskId: u || null
  }), H = It(P.timeline), ze = Z((i, y) => {
    i.preventDefault(), i.stopPropagation(), A({ task: y, startMouseX: i.clientX, originalStart: new Date(y.start), originalEnd: new Date(y.end), offsetDays: 0 });
  }, []), Ae = Z((i, y, S) => {
    i.preventDefault(), i.stopPropagation(), B({ task: y, edge: S, startMouseX: i.clientX, originalStart: new Date(y.start), originalEnd: new Date(y.end), offsetDays: 0 });
  }, []), Ee = Z((i, y, S) => {
    i.preventDefault(), i.stopPropagation(), s({ fromTaskId: y.id, fromEdge: S, fromScreenX: i.clientX, fromScreenY: i.clientY, currentScreenX: i.clientX, currentScreenY: i.clientY, hoverTargetId: null });
  }, []), F = Z(async () => {
    if (!g || !n.onCreateDependency) return;
    const i = new Map(P.tasks.map((O) => [O.id, O])), y = i.get(g.fromTaskId), S = i.get(g.toTaskId);
    if (!y || !S) return;
    const E = (O) => O.originalType === "step" ? "STEP" : "MILESTONE", z = g.fromEdge === "right" ? y : S, N = g.fromEdge === "right" ? S : y;
    $(!0);
    try {
      await n.onCreateDependency({ predecessorId: z.id, predecessorType: E(z), successorId: N.id, successorType: E(N), type: C, lag: k }), d(null);
    } finally {
      $(!1);
    }
  }, [g, P.tasks, n.onCreateDependency, C, k]);
  ue(() => {
    if (!m) return;
    const i = (S) => {
      const E = S.clientX - m.startMouseX, z = Math.round(E / P.timeline.dayWidth);
      z !== m.offsetDays && A((N) => N ? { ...N, offsetDays: z } : null);
    }, y = () => {
      m.offsetDays !== 0 && n.onTaskChange && n.onTaskChange({
        id: m.task.id,
        name: m.task.name,
        start: ee(m.originalStart, m.offsetDays),
        end: ee(m.originalEnd, m.offsetDays),
        type: m.task.originalType === "step" ? "task" : "milestone",
        progress: m.task.progress
      }), A(null);
    };
    return document.addEventListener("mousemove", i), document.addEventListener("mouseup", y), () => {
      document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", y);
    };
  }, [m, P.timeline.dayWidth, n.onTaskChange]), ue(() => {
    if (!w) return;
    const i = (S) => {
      const E = S.clientX - w.startMouseX, z = Math.round(E / P.timeline.dayWidth);
      z !== w.offsetDays && B((N) => N ? { ...N, offsetDays: z } : null);
    }, y = () => {
      if (w.offsetDays !== 0 && n.onTaskChange) {
        const S = w.edge === "left" ? ee(w.originalStart, w.offsetDays) : w.originalStart, E = w.edge === "right" ? ee(w.originalEnd, w.offsetDays) : w.originalEnd;
        E > S && n.onTaskChange({ id: w.task.id, name: w.task.name, start: S, end: E, type: "task", progress: w.task.progress });
      }
      B(null);
    };
    return document.addEventListener("mousemove", i), document.addEventListener("mouseup", y), () => {
      document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", y);
    };
  }, [w, P.timeline.dayWidth, n.onTaskChange]), ue(() => {
    if (!c) return;
    const i = (S) => {
      let E = null;
      for (const z of document.elementsFromPoint(S.clientX, S.clientY)) {
        const N = z.dataset?.taskId;
        if (N && N !== c.fromTaskId) {
          E = N;
          break;
        }
      }
      s((z) => z ? { ...z, currentScreenX: S.clientX, currentScreenY: S.clientY, hoverTargetId: E } : null);
    }, y = (S) => {
      let E = null;
      for (const z of document.elementsFromPoint(S.clientX, S.clientY)) {
        const N = z.dataset?.taskId;
        if (N && N !== c.fromTaskId) {
          E = N;
          break;
        }
      }
      E && n.onCreateDependency && (d({ fromTaskId: c.fromTaskId, fromEdge: c.fromEdge, toTaskId: E }), v("FS"), T(0)), s(null);
    };
    return document.addEventListener("mousemove", i), document.addEventListener("mouseup", y), () => {
      document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", y);
    };
  }, [c?.fromTaskId, c?.fromEdge, n.onCreateDependency]);
  const [de, ne] = Y(null), fe = Z((i) => {
    if (w || m || i.button === 2) return;
    const y = H.rightBodyRef.current;
    y && (i.preventDefault(), ne({ startX: i.clientX, startY: i.clientY, scrollLeft: y.scrollLeft, scrollTop: y.scrollTop }));
  }, [w, m, H.rightBodyRef]);
  ue(() => {
    if (!de) return;
    const i = (S) => {
      const E = H.rightBodyRef.current;
      E && (E.scrollLeft = de.scrollLeft - (S.clientX - de.startX), E.scrollTop = de.scrollTop - (S.clientY - de.startY), H.leftBodyRef.current && (H.leftBodyRef.current.scrollTop = E.scrollTop), H.timeHeaderRef.current && (H.timeHeaderRef.current.scrollLeft = E.scrollLeft));
    }, y = () => ne(null);
    return document.addEventListener("mousemove", i), document.addEventListener("mouseup", y), () => {
      document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", y);
    };
  }, [de, H.rightBodyRef, H.leftBodyRef, H.timeHeaderRef]);
  const b = Z((i) => {
    i.preventDefault(), i.stopPropagation();
    const y = (E) => {
      const z = H.rightBodyRef.current;
      if (!z) return /* @__PURE__ */ new Date();
      const N = z.getBoundingClientRect(), O = E - N.left + z.scrollLeft;
      return ee(P.timeline.start, Math.max(0, Math.floor(O / P.timeline.dayWidth)));
    }, S = (E) => {
      if (!n.groupByProject) return;
      const z = H.leftBodyRef.current;
      if (!z) return;
      const N = z.getBoundingClientRect(), O = E - N.top + z.scrollTop, oe = Math.max(0, Math.floor(O / 50));
      for (let ye = Math.min(oe, P.displayRows.length - 1); ye >= 0; ye--) {
        const re = P.displayRows[ye];
        if (re.kind === "projectHeader") return re.projectId;
        if (re.kind === "task" && re.task.projectId) return re.task.projectId;
        if (re.kind === "group" && re.projectId) return re.projectId;
      }
    };
    r({ x: i.clientX, y: i.clientY, date: y(i.clientX), projectId: S(i.clientY) }), ne(null);
  }, [P.timeline, P.displayRows, n.groupByProject, H.rightBodyRef, H.leftBodyRef]);
  ue(() => {
    if (!X) return;
    const i = (E) => {
      E.key === "Escape" && r(null);
    }, y = (E) => {
      E.target.closest('[data-menu="chart-create"]') || r(null);
    }, S = () => r(null);
    return document.addEventListener("keydown", i), document.addEventListener("click", y), window.addEventListener("scroll", S, !0), () => {
      document.removeEventListener("keydown", i), document.removeEventListener("click", y), window.removeEventListener("scroll", S, !0);
    };
  }, [X]);
  const j = le(() => ({
    props: n,
    t: (i, y) => n.translations ? typeof n.translations == "function" ? n.translations(i, y) : n.translations[i] || y || "" : y || "",
    viewMode: p,
    setViewMode: l,
    hoveredTaskId: I,
    setHoveredTaskId: h,
    selectedTaskId: u,
    setSelectedTaskId: x,
    tooltip: M,
    setTooltip: D,
    popupState: f,
    setPopupState: R,
    dragState: m,
    setDragState: A,
    resizeState: w,
    setResizeState: B,
    connectState: c,
    setConnectState: s,
    visibleTypes: se,
    setVisibleTypes: Me,
    toggleVisibility: Se,
    collapsedGroups: ve,
    setCollapsedGroups: Re,
    toggleGroup: Ce,
    collapsedProjects: we,
    setCollapsedProjects: ge,
    toggleProject: Fe,
    pendingConnection: g,
    setPendingConnection: d,
    depModalType: C,
    setDepModalType: v,
    depModalLag: k,
    setDepModalLag: T,
    depCreating: a,
    setDepCreating: $,
    deletingDepId: W,
    setDeletingDepId: L,
    chartMenu: X,
    setChartMenu: r,
    newActionOpen: _,
    setNewActionOpen: V,
    activePinboardTask: K,
    setActivePinboardTask: J,
    tasks: P.tasks,
    timeline: P.timeline,
    displayRows: P.displayRows,
    taskRowIndex: P.taskRowIndex || /* @__PURE__ */ new Map(),
    arrows: P.arrows,
    criticalIds: P.criticalIds,
    delayedIds: P.delayedIds,
    relatedIds: P.relatedIds,
    ...H,
    newActionRef: te,
    screenXToDate: (i) => {
      const y = H.rightBodyRef.current;
      if (!y) return /* @__PURE__ */ new Date();
      const S = y.getBoundingClientRect(), E = i - S.left + y.scrollLeft;
      return ee(P.timeline.start, Math.max(0, Math.floor(E / P.timeline.dayWidth)));
    },
    screenYToProjectId: (i) => {
      if (!n.groupByProject) return;
      const y = H.leftBodyRef.current;
      if (!y) return;
      const S = y.getBoundingClientRect(), E = i - S.top + y.scrollTop, z = Math.max(0, Math.floor(E / 50));
      for (let N = Math.min(z, P.displayRows.length - 1); N >= 0; N--) {
        const O = P.displayRows[N];
        if (O.kind === "projectHeader") return O.projectId;
        if (O.kind === "task" && O.task.projectId) return O.task.projectId;
        if (O.kind === "group" && O.projectId) return O.projectId;
      }
    },
    handleChartMouseDown: fe,
    openChartMenu: b,
    handleBarMouseDown: ze,
    handleResizeMouseDown: Ae,
    handleConnectDotMouseDown: Ee,
    handleCreateDependency: F
  }), [
    n,
    p,
    I,
    u,
    M,
    f,
    m,
    w,
    c,
    se,
    ve,
    we,
    g,
    C,
    k,
    a,
    W,
    X,
    _,
    K,
    P,
    H,
    Se,
    Ce,
    Fe,
    fe,
    b,
    ze,
    Ae,
    Ee,
    F
  ]);
  return n.loading ? /* @__PURE__ */ t("div", { style: { padding: 48, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: e.textSecondary }, children: /* @__PURE__ */ t(Ve, { size: 32, style: { animation: "zg-spin 1.5s linear infinite", color: e.group } }) }) : /* @__PURE__ */ t(ht, { value: j, children: /* @__PURE__ */ o(
    "div",
    {
      style: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 8px 30px rgb(0,0,0,0.06)",
        overflow: "hidden",
        height: "calc(100vh - 48px)",
        minHeight: 600,
        border: `1px solid ${e.borderLight}`,
        opacity: K ? 0.6 : 1,
        transition: "opacity 0.3s ease",
        pointerEvents: K ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ t(bt, {}),
        /* @__PURE__ */ o("div", { style: { display: "flex", flex: 1, overflow: "hidden", position: "relative", background: e.surfaceAlt }, children: [
          /* @__PURE__ */ t(mt, {}),
          /* @__PURE__ */ t(kt, {})
        ] }),
        /* @__PURE__ */ t(Rt, {})
      ]
    }
  ) });
}
const Ct = [
  { label: "Yellow", value: "#FEF08A" },
  { label: "Green", value: "#BBF7D0" },
  { label: "Blue", value: "#BFDBFE" },
  { label: "Pink", value: "#FBCFE8" },
  { label: "Purple", value: "#E9D5FF" },
  { label: "Orange", value: "#FED7AA" },
  { label: "White", value: "#FFFFFF" }
], He = {
  FS: "Finish → Start (FS)",
  SS: "Start → Start (SS)",
  FF: "Finish → Finish (FF)",
  SF: "Start → Finish (SF)"
};
function Wt({
  isOpen: n,
  onClose: p,
  availableMilestones: l = [],
  initialDate: I,
  translations: h,
  onSaveNote: u
}) {
  const x = (r, _) => h ? typeof h == "function" ? h(r, _) : h[r] || _ : _, [M, D] = Y(""), [f, R] = Y(""), [m, A] = Y("#FEF08A"), [w, B] = Y(""), [c, s] = Y(""), [g, d] = Y("FS"), [C, v] = Y(!1), [k, T] = Y([]), [a, $] = Y(""), W = he(null);
  ue(() => {
    n && (D(""), R(""), A("#FEF08A"), B(I ?? (/* @__PURE__ */ new Date()).toISOString().split("T")[0]), s(""), d("FS"), T([]), $(""));
  }, [n, I]);
  const L = [
    ...l.map((r) => ({ id: r.id, name: r.name, type: "MILESTONE" }))
  ], X = async () => {
    if (!M.trim() && !f.trim()) {
      $(x("noteModal.errorEmpty", "Please provide a title or content for the note."));
      return;
    }
    $("");
    try {
      v(!0), await u({
        title: M || x("noteModal.untitled", "Untitled"),
        description: f,
        color: m,
        date: w ? `${w}T00:00:00` : (/* @__PURE__ */ new Date()).toISOString(),
        predecessorId: c,
        dependencyType: g,
        files: k
      }), p();
    } catch (r) {
      console.error(r), $(x("noteModal.errorSave", "Error creating note."));
    } finally {
      v(!1);
    }
  };
  return n ? /* @__PURE__ */ t("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.2)", backdropFilter: "blur(2px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 16 }, onClick: p, children: /* @__PURE__ */ o("div", { onClick: (r) => r.stopPropagation(), style: {
    width: 400,
    maxHeight: "90vh",
    background: m || "#FFFACD",
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
    /* @__PURE__ */ t("div", { style: { position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)", width: 64, height: 16, background: "rgba(255,255,255,0.55)", borderRadius: 2, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" } }),
    /* @__PURE__ */ t(
      "button",
      {
        onClick: p,
        style: { position: "absolute", top: 10, right: 10, width: 24, height: 24, borderRadius: "50%", background: "rgba(0,0,0,0.08)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14, color: "#3a3a3a" },
        onMouseEnter: (r) => r.currentTarget.style.background = "rgba(0,0,0,0.15)",
        onMouseLeave: (r) => r.currentTarget.style.background = "rgba(0,0,0,0.08)",
        children: "✕"
      }
    ),
    /* @__PURE__ */ o("div", { style: { padding: "28px 24px 20px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }, children: [
      a && /* @__PURE__ */ t("div", { style: { background: "rgba(255,0,0,0.1)", color: "#d32f2f", padding: "8px 12px", borderRadius: 6, fontSize: 12, marginBottom: 12, border: "1px solid rgba(255,0,0,0.2)" }, children: a }),
      /* @__PURE__ */ t(
        "input",
        {
          type: "text",
          value: M,
          onChange: (r) => D(r.target.value),
          placeholder: x("noteModal.titlePlaceholder", "Note title..."),
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
      /* @__PURE__ */ t("div", { style: { width: "100%", height: 1, background: "rgba(0,0,0,0.08)", marginBottom: 14 } }),
      /* @__PURE__ */ t(
        "textarea",
        {
          value: f,
          onChange: (r) => R(r.target.value),
          rows: 6,
          placeholder: x("noteModal.contentPlaceholder", "Write your note here..."),
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
      /* @__PURE__ */ o("div", { style: { marginTop: 14, paddingTop: 10, borderTop: "1px solid rgba(0,0,0,0.08)" }, children: [
        /* @__PURE__ */ t(
          "input",
          {
            ref: W,
            type: "file",
            multiple: !0,
            onChange: (r) => {
              const _ = r.target.files ? Array.from(r.target.files) : [];
              _.length > 0 && T((V) => [...V, ..._]), W.current && (W.current.value = "");
            },
            style: { display: "none" }
          }
        ),
        /* @__PURE__ */ o(
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
            onMouseEnter: (r) => r.currentTarget.style.background = "rgba(0,0,0,0.08)",
            onMouseLeave: (r) => r.currentTarget.style.background = "rgba(0,0,0,0.05)",
            children: [
              /* @__PURE__ */ t(pt, { size: 13 }),
              x("noteModal.attachFiles", "Attach files")
            ]
          }
        ),
        k.length > 0 && /* @__PURE__ */ t("div", { style: { marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }, children: k.map((r, _) => /* @__PURE__ */ o("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 8px",
          borderRadius: 4,
          background: "rgba(255,255,255,0.5)",
          fontSize: 11,
          color: "#3a3a3a"
        }, children: [
          /* @__PURE__ */ t($e, { size: 10, style: { flexShrink: 0 } }),
          /* @__PURE__ */ t("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: r.name }),
          /* @__PURE__ */ o("span", { style: { fontSize: 9, color: "rgba(58,58,58,0.4)", flexShrink: 0 }, children: [
            (r.size / 1024).toFixed(0),
            "KB"
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => T((V) => V.filter((te, K) => K !== _)),
              style: { background: "none", border: "none", cursor: "pointer", padding: 2, display: "flex", color: "#ef4444" },
              title: x("noteModal.removeFile", "Remove"),
              children: /* @__PURE__ */ t(Ge, { size: 12 })
            }
          )
        ] }, `file-${_}`)) })
      ] }),
      /* @__PURE__ */ o("div", { style: { marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "date",
            value: w,
            onChange: (r) => B(r.target.value),
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
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }, children: Ct.map((r) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => A(r.value),
            style: {
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: m === r.value ? "2px solid #1A3C30" : "1.5px solid rgba(0,0,0,0.12)",
              backgroundColor: r.value,
              cursor: "pointer",
              padding: 0,
              transform: m === r.value ? "scale(1.15)" : "scale(1)",
              transition: "all 0.15s",
              boxShadow: m === r.value ? "0 1px 4px rgba(0,0,0,0.15)" : "none"
            },
            title: r.label
          },
          r.value
        )) })
      ] }),
      L.length > 0 && /* @__PURE__ */ o("div", { style: { marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(0,0,0,0.08)" }, children: [
        /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }, children: [
          /* @__PURE__ */ t(gt, { size: 14, style: { color: "rgba(58,58,58,0.5)" } }),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "rgba(58,58,58,0.5)", fontWeight: 600 }, children: x("noteModal.dependency", "Dependency") })
        ] }),
        /* @__PURE__ */ o(
          "select",
          {
            value: c,
            onChange: (r) => s(r.target.value),
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
              /* @__PURE__ */ t("option", { value: "", children: x("noteModal.none", "None") }),
              l.length > 0 && /* @__PURE__ */ t("optgroup", { label: x("noteModal.milestones", "Milestones"), children: l.map((r) => /* @__PURE__ */ t("option", { value: r.id, children: r.name }, r.id)) })
            ]
          }
        ),
        c && /* @__PURE__ */ t(
          "select",
          {
            value: g,
            onChange: (r) => d(r.target.value),
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
            children: Object.keys(He).map((r) => /* @__PURE__ */ t("option", { value: r, children: He[r] }, r))
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 16, marginTop: 12, borderTop: "1px solid rgba(0,0,0,0.08)" }, children: [
        /* @__PURE__ */ t(
          "button",
          {
            onClick: p,
            style: { padding: "8px 16px", fontSize: 13, color: "#3a3a3a", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 8, cursor: "pointer" },
            children: x("noteModal.cancel", "Cancel")
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            onClick: X,
            disabled: C,
            style: { padding: "8px 20px", fontSize: 13, color: "#fff", background: "#1A3C30", border: "none", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, opacity: C ? 0.5 : 1 },
            children: [
              C && /* @__PURE__ */ t(Ve, { size: 16, style: { animation: "zg-spin 1s linear infinite" } }),
              x("noteModal.create", "Create Note")
            ]
          }
        )
      ] })
    ] })
  ] }) }) : null;
}
const Bt = {
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
};
export {
  Wt as NoteModal,
  $t as ProjectGantt,
  Bt as ptBR
};
