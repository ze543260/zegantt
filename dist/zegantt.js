import { jsx as t, jsxs as o, Fragment as de } from "react/jsx-runtime";
import { createContext as et, useContext as tt, useRef as pe, useCallback as J, useEffect as ge, useMemo as ae, useState as P } from "react";
import { Flag as Se, Clock as ke, MessageCircle as nt, Plus as ot, ChevronDown as Be, ChevronRight as Pe, Paperclip as Fe, AlertTriangle as rt, Eye as it, Edit2 as at, Trash2 as st, Loader2 as _e, Upload as dt, X as lt, Link2 as ct } from "lucide-react";
const He = et(void 0);
function pt({ children: n, value: c }) {
  return /* @__PURE__ */ t(He.Provider, { value: c, children: n });
}
function Ie() {
  const n = tt(He);
  if (!n)
    throw new Error("useGanttContext must be used within a GanttProvider");
  return n;
}
const G = {
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
  surface: G.white,
  // #FFFFFF
  surfaceAlt: "#F7FAF8",
  // subtle alternating row
  headerBg: "#F2F5F3",
  // soft green-tinted header
  textTitle: G.dark_green,
  // #1A3C30
  textPrimary: G.dark_gray,
  // #4F4F4F
  textSecondary: G.gray,
  // #7B7B7B
  textMuted: G.light_gray,
  // #D9D9D9
  group: G.dark_green,
  // #1A3C30
  groupLight: G.water_green,
  // #A0D8A8 (bar border)
  milestone: G.dark_green,
  // #1A3C30
  milestoneRing: G.light_green,
  // #A0D8A8
  event: G.orange,
  // yellow translucent
  note: G.yellow,
  // #FFBB1C
  border: G.light_gray,
  // #D9D9D9
  borderLight: "#ECECEC",
  weekendBg: "#F4F6F5",
  today: G.red,
  // #FF0000
  todayBg: "#FF000008",
  // today column tint
  arrow: G.gray,
  // #7B7B7B
  arrowHover: G.dark_green
  // #1A3C30
}, _ = 50, we = 32, gt = we * 2, ht = 460, ne = 26, fe = 28, Le = 120, ut = 40, ft = 3.5, oe = [
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
], Ne = {
  step: "Steps",
  milestone: "Milestones",
  event: "Events",
  note: "Notes"
};
function yt() {
  const {
    props: n,
    t: c,
    viewMode: p,
    setViewMode: T,
    visibleTypes: h,
    setVisibleTypes: w,
    newActionOpen: x,
    setNewActionOpen: C,
    newActionRef: M
  } = Ie(), { projectName: f, onAddNewStage: E, onAddMilestone: b, onAddEvent: F, onAddNote: S } = n, B = (r) => {
    w((i) => {
      const I = new Set(i);
      return I.has(r) ? I.delete(r) : I.add(r), I;
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
            /* @__PURE__ */ t("h3", { style: { margin: 0, fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: e.textTitle }, children: c("planning.gantt", "Project Planning") }),
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
          /* @__PURE__ */ t("div", { style: { display: "flex", padding: 4, borderRadius: 8, background: "rgba(122,122,122,0.07)", border: `1px solid ${e.borderLight}` }, children: ["day", "month"].map((r) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => T(r),
              style: {
                padding: "6px 20px",
                fontSize: 12,
                fontWeight: 600,
                borderRadius: 6,
                transition: "all 0.2s",
                border: "none",
                cursor: "pointer",
                ...p === r ? { background: e.surface, color: e.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { background: "transparent", color: e.textSecondary }
              },
              children: r === "day" ? c("charts.gantt.month", "Month") : c("charts.gantt.year", "Year")
            },
            r
          )) }),
          /* @__PURE__ */ t("div", { style: { display: "flex", padding: 4, borderRadius: 8, gap: 2, background: "rgba(122,122,122,0.07)", border: `1px solid ${e.borderLight}` }, children: [
            { type: "step", label: c("gantt.filter.steps", "Steps"), icon: /* @__PURE__ */ t("div", { style: { width: 10, height: 10, borderRadius: 2, background: oe[0].bar, border: `1px solid ${oe[0].barBorder}` } }) },
            { type: "milestone", label: c("gantt.filter.milestones", "Milestones"), icon: /* @__PURE__ */ t(Se, { size: 11, style: { color: e.milestone } }) },
            { type: "event", label: c("gantt.filter.events", "Events"), icon: /* @__PURE__ */ t(ke, { size: 11, style: { color: e.event } }) },
            { type: "note", label: c("gantt.filter.notes", "Notes"), icon: /* @__PURE__ */ t(nt, { size: 11, style: { color: e.note } }) }
          ].map((r) => {
            const i = h.has(r.type);
            return /* @__PURE__ */ o(
              "button",
              {
                onClick: () => B(r.type),
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
                  ...i ? { background: e.surface, color: e.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { background: "transparent", color: e.textMuted, opacity: 0.5 }
                },
                children: [
                  r.icon,
                  /* @__PURE__ */ t("span", { children: r.label })
                ]
              },
              r.type
            );
          }) }),
          E && /* @__PURE__ */ o("div", { ref: M, style: { position: "relative" }, children: [
            /* @__PURE__ */ o(
              "button",
              {
                onClick: () => C((r) => !r),
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
                  /* @__PURE__ */ t(ot, { size: 16 }),
                  /* @__PURE__ */ t("span", { children: c("charts.gantt.newAction", "New Action") }),
                  /* @__PURE__ */ t(Be, { size: 14, style: { opacity: 0.7, transform: x ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
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
                onClick: (r) => r.stopPropagation(),
                children: [
                  {
                    label: c("gantt.newAction.step", "Step"),
                    icon: /* @__PURE__ */ t("div", { style: { width: 14, height: 14, borderRadius: 3, background: oe[0].bar, border: `1.5px solid ${oe[0].barBorder}`, flexShrink: 0 } }),
                    action: () => {
                      E(), C(!1);
                    }
                  },
                  {
                    label: c("gantt.newAction.milestone", "Milestone"),
                    icon: /* @__PURE__ */ t("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${e.milestoneRing}30`, border: `1.5px solid ${e.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(Se, { size: 11, style: { color: e.milestone } }) }),
                    action: () => {
                      b?.(), C(!1);
                    }
                  },
                  {
                    label: c("gantt.newAction.event", "Event"),
                    icon: /* @__PURE__ */ t("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${e.event}18`, border: `1.5px solid ${e.event}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(ke, { size: 11, style: { color: e.event } }) }),
                    action: () => {
                      F?.(), C(!1);
                    }
                  },
                  {
                    label: c("gantt.newAction.note", "Note"),
                    icon: /* @__PURE__ */ t("div", { style: { width: 16, height: 20, background: e.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ t("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } }) }),
                    action: () => {
                      S?.(), C(!1);
                    }
                  }
                ].map((r) => /* @__PURE__ */ o(
                  "button",
                  {
                    onClick: r.action,
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
                    onMouseEnter: (i) => {
                      i.currentTarget.style.background = e.headerBg;
                    },
                    onMouseLeave: (i) => {
                      i.currentTarget.style.background = "transparent";
                    },
                    children: [
                      r.icon,
                      r.label
                    ]
                  },
                  r.label
                ))
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Ge = 864e5, Z = (n, c) => new Date(n.getTime() + c * Ge), ye = (n, c) => Math.round((c.getTime() - n.getTime()) / Ge), Ye = (n) => new Date(n.getFullYear(), n.getMonth(), 1), We = (n) => new Date(n.getFullYear(), n.getMonth() + 1, 0), Q = (n) => `${String(n.getDate()).padStart(2, "0")}/${String(n.getMonth() + 1).padStart(2, "0")}/${n.getFullYear()}`, Oe = (n, c = "en") => new Intl.DateTimeFormat(c, { month: "long" }).format(n).toUpperCase();
function xt() {
  const {
    props: n,
    t: c,
    displayRows: p,
    leftBodyRef: T,
    handleLeftScroll: h,
    toggleProject: w,
    toggleGroup: x,
    hoveredTaskId: C,
    setHoveredTaskId: M,
    selectedTaskId: f,
    setSelectedTaskId: E,
    delayedIds: b,
    criticalIds: F,
    relatedIds: S
  } = Ie(), B = (r) => ({
    id: r.id,
    name: r.name,
    start: r.start,
    end: r.end,
    type: r.originalType === "step" ? "task" : "milestone",
    progress: r.progress
  });
  return /* @__PURE__ */ o("div", { style: { width: ht, flexShrink: 0, borderRight: `1px solid ${e.border}` }, children: [
    /* @__PURE__ */ o(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          height: gt,
          background: e.headerBg,
          borderBottom: `1px solid ${e.border}`
        },
        children: [
          /* @__PURE__ */ t("div", { style: { flex: 1, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: e.textSecondary }, children: c("charts.gantt.stepName", "STEP NAME") }),
          /* @__PURE__ */ t("div", { style: { width: 80, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", color: e.textSecondary }, children: c("charts.gantt.start", "START") }),
          /* @__PURE__ */ t("div", { style: { width: 80, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", color: e.textSecondary }, children: c("charts.gantt.end", "END") })
        ]
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        ref: T,
        onScroll: h,
        className: "zg-no-scrollbar",
        style: { overflowY: "auto", overflowX: "hidden", flex: 1 },
        children: p.map((r) => {
          if (r.kind === "projectHeader")
            return /* @__PURE__ */ t(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  height: _,
                  borderBottom: `1.5px solid ${e.group}44`,
                  background: `${e.group}0E`
                },
                onClick: () => w(r.projectId),
                children: /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  r.collapsed ? /* @__PURE__ */ t(Pe, { size: 15, style: { color: e.group, flexShrink: 0 } }) : /* @__PURE__ */ t(Be, { size: 15, style: { color: e.group, flexShrink: 0 } }),
                  /* @__PURE__ */ t("span", { style: {
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: e.group,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }, children: r.projectTitle })
                ] })
              },
              `ph-${r.projectId}`
            );
          if (r.kind === "group") {
            const A = r.projectId ? `${r.projectId}-${r.groupType}` : r.groupType;
            return /* @__PURE__ */ t(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  cursor: "pointer",
                  userSelect: "none",
                  height: _,
                  borderBottom: `1px solid ${e.border}`,
                  background: e.headerBg
                },
                onClick: () => x(A),
                children: /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }, children: [
                  r.collapsed ? /* @__PURE__ */ t(Pe, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ t(Be, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }),
                  /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: e.textTitle }, children: c(`gantt.group.${r.groupType}`, r.label) }),
                  /* @__PURE__ */ t("span", { style: { fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 9999, background: "rgba(0,0,0,0.06)", color: e.textSecondary }, children: r.count })
                ] })
              },
              `g-${A}`
            );
          }
          const i = r.task, I = f === i.id, l = C === i.id, $ = i.originalType !== "step", u = b.has(i.id), D = F.has(i.id), s = f !== null && i.id !== f && !S.has(i.id), y = f !== null && S.has(i.id), N = u ? "#FFF5F5" : I ? e.groupLight : y ? `${e.groupLight}99` : l ? e.pageBg : e.surface;
          return /* @__PURE__ */ o(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                cursor: "pointer",
                transition: "opacity 0.18s, background 0.15s",
                height: _,
                borderBottom: `1px solid ${e.borderLight}`,
                background: N,
                borderLeft: I ? `3px solid ${e.group}` : y ? `3px solid ${e.group}66` : D ? `3px solid ${e.today}` : void 0,
                opacity: s ? 0.3 : 1
              },
              onClick: () => E((A) => A === i.id ? null : i.id),
              onDoubleClick: () => n.onTaskClick?.(B(i)),
              onMouseEnter: () => M(i.id),
              onMouseLeave: () => M(null),
              children: [
                /* @__PURE__ */ o("div", { style: { flex: 1, display: "flex", alignItems: "center", gap: 8, minWidth: 0, paddingRight: 8 }, children: [
                  i.originalType === "step" && /* @__PURE__ */ t("div", { style: { flexShrink: 0, borderRadius: 4, width: 14, height: 14, background: oe[i.colorIdx ?? 0].bar, border: `1.5px solid ${oe[i.colorIdx ?? 0].barBorder}` } }),
                  i.originalType === "milestone" && /* @__PURE__ */ t("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: `${e.milestoneRing}30`, border: `1.5px solid ${e.milestoneRing}` }, children: /* @__PURE__ */ t(Se, { size: 11, style: { color: e.milestone } }) }),
                  i.originalType === "event" && /* @__PURE__ */ t("div", { style: { flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: 22, height: 22, background: `${e.event}18`, border: `1.5px solid ${e.event}55` }, children: /* @__PURE__ */ t(ke, { size: 11, style: { color: e.event } }) }),
                  i.originalType === "note" && /* @__PURE__ */ t("div", { style: { flexShrink: 0, width: 16, height: 20, background: i.noteColor || e.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible" }, children: /* @__PURE__ */ t("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } }) }),
                  /* @__PURE__ */ o("div", { style: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }, children: [
                    /* @__PURE__ */ t(
                      "span",
                      {
                        style: {
                          fontSize: 13,
                          fontWeight: 500,
                          lineHeight: 1.25,
                          color: I ? e.group : u ? e.today : e.textPrimary,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        children: i.name
                      }
                    ),
                    i.originalType === "note" && i.noteProjectTitle && /* @__PURE__ */ t("span", { style: {
                      fontSize: 10,
                      color: e.textSecondary,
                      marginTop: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    }, children: i.noteProjectTitle })
                  ] }),
                  i.originalType === "note" && (i.filesCount || 0) > 0 && /* @__PURE__ */ o("span", { style: {
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    fontSize: 10,
                    padding: "2px 6px",
                    borderRadius: 9999,
                    color: e.textSecondary,
                    background: e.headerBg,
                    border: `1px solid ${e.borderLight}`
                  }, children: [
                    /* @__PURE__ */ t(Fe, { size: 9 }),
                    i.filesCount
                  ] }),
                  u && /* @__PURE__ */ t(rt, { size: 12, style: { flexShrink: 0, color: e.today } })
                ] }),
                /* @__PURE__ */ t("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: u ? e.today : e.textMuted }, children: Q(i.start) }),
                /* @__PURE__ */ t("div", { style: { width: 80, fontSize: 11, fontWeight: 500, textAlign: "center", fontVariantNumeric: "tabular-nums", color: u ? e.today : e.textMuted }, children: $ ? "—" : Q(i.end) })
              ]
            },
            i.id
          );
        })
      }
    )
  ] });
}
function bt(n, c, p = "en") {
  const T = c === "day" ? ut : ft, h = (r, i) => {
    const I = [], l = (/* @__PURE__ */ new Date()).toDateString();
    let $ = -1;
    for (let u = 0; u < i; u++) {
      const D = Z(r, u), s = D.toDateString() === l;
      s && ($ = u), I.push({
        date: D,
        isToday: s,
        isWeekend: D.getDay() === 0 || D.getDay() === 6
      });
    }
    return { daysArr: I, todayIndex: $ };
  };
  if (n.length === 0) {
    const r = /* @__PURE__ */ new Date(), i = Ye(r), I = We(r), l = ye(i, I) + 1, { daysArr: $, todayIndex: u } = h(i, l);
    return {
      start: i,
      end: I,
      totalDays: l,
      dayWidth: T,
      totalWidth: l * T,
      months: [{ date: i, label: `${Oe(i, p)} ${i.getFullYear()}`, startDay: 0, days: l, width: l * T }],
      years: [{ label: i.getFullYear().toString(), width: l * T }],
      days: $,
      todayIndex: u
    };
  }
  let w = new Date(n[0].start), x = new Date(n[0].end);
  n.forEach((r) => {
    r.start < w && (w = new Date(r.start)), r.end > x && (x = new Date(r.end));
  });
  const C = Ye(Z(w, -14)), M = We(Z(x, 14)), f = ye(C, M) + 1, E = [];
  let b = new Date(C);
  for (; b <= M; ) {
    const r = We(b), i = r > M ? M : r, I = ye(C, b), l = ye(b, i) + 1;
    E.push({
      date: new Date(b),
      label: `${Oe(b, p)} ${b.getFullYear()}`,
      startDay: I,
      days: l,
      width: l * T
    }), b = new Date(b.getFullYear(), b.getMonth() + 1, 1);
  }
  const { daysArr: F, todayIndex: S } = h(C, f), B = [];
  if (c === "month") {
    let r = "", i = 0;
    for (const I of E) {
      const l = I.date.getFullYear().toString();
      l !== r ? (r && B.push({ label: r, width: i * T }), r = l, i = I.days) : i += I.days;
    }
    r && B.push({ label: r, width: i * T });
  }
  return { start: C, end: M, totalDays: f, dayWidth: T, totalWidth: f * T, months: E, years: B, days: F, todayIndex: S };
}
function se(n, c) {
  return ye(c.start, n) * c.dayWidth;
}
function mt({
  task: n,
  x: c,
  y: p,
  w: T,
  progW: h,
  isHov: w,
  isDrag: x,
  isResize: C,
  isCritical: M,
  isDelayed: f,
  isConnectTarget: E,
  showDots: b,
  isBarDimmed: F,
  isBarHighlighted: S,
  commonEvents: B,
  handleResizeMouseDown: r,
  handleConnectDotMouseDown: i
}) {
  const { timeline: I, viewMode: l } = Ie();
  if (n.originalType === "step") {
    const $ = oe[n.colorIdx ?? 0], u = p + (_ - ne) / 2, D = !!(n.previsionStart && n.previsionEnd), s = D ? se(n.previsionStart, I) : 0, y = D ? Math.max(se(n.previsionEnd, I) - s, l === "month" ? I.dayWidth : 6) : 0, N = u + ne + 3;
    return /* @__PURE__ */ o(de, { children: [
      D && /* @__PURE__ */ t(
        "div",
        {
          title: `Previsto: ${Q(n.previsionStart)} → ${Q(n.previsionEnd)}`,
          style: {
            position: "absolute",
            left: s,
            top: N,
            width: y,
            height: 5,
            borderRadius: 3,
            background: `${$.progress}33`,
            border: `1.5px solid ${$.progress}66`,
            boxShadow: `inset 0 0 0 1px ${$.progress}22`,
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
            left: c,
            top: u,
            width: T,
            height: ne,
            borderRadius: ne / 2,
            background: f ? "linear-gradient(135deg, #fdd, #fee)" : $.bar,
            border: M ? `2px solid ${e.today}` : f ? `1.5px solid ${e.today}88` : `1.5px solid ${$.barBorder}`,
            cursor: x || C ? "grabbing" : "grab",
            zIndex: w || E ? 20 : 10,
            boxShadow: E ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : M ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : S && !w ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : w ? `0 3px 12px ${$.progress}22` : "none",
            transform: w ? "scaleY(1.06)" : "scaleY(1)",
            opacity: F ? 0.15 : 1,
            transition: x || C ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
            overflow: "visible"
          },
          children: [
            /* @__PURE__ */ o("div", { style: { position: "absolute", left: 0, top: 0, width: T, height: "100%", borderRadius: ne / 2, overflow: "hidden", pointerEvents: "none" }, children: [
              /* @__PURE__ */ t("div", { style: {
                position: "absolute",
                left: 0,
                top: 0,
                width: h,
                height: "100%",
                background: f ? `linear-gradient(90deg, ${e.today}cc, ${e.today}88)` : `linear-gradient(90deg, ${$.progress}, ${$.progress}cc)`,
                borderRadius: `${ne / 2}px 0 0 ${ne / 2}px`,
                transition: x || C ? "none" : "width 0.3s"
              } }),
              T > 50 && /* @__PURE__ */ o("span", { style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: n.progress > 50 ? "#fff" : f ? e.today : $.progress,
                zIndex: 1,
                pointerEvents: "none"
              }, children: [
                Math.round(n.progress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { onMouseDown: (A) => r(A, n, "left"), style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${ne / 2}px 0 0 ${ne / 2}px` } }),
            /* @__PURE__ */ t("div", { onMouseDown: (A) => r(A, n, "right"), style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${ne / 2}px ${ne / 2}px 0` } }),
            b && /* @__PURE__ */ o(de, { children: [
              /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (A) => i(A, n, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
              /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (A) => i(A, n, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
            ] })
          ]
        }
      )
    ] });
  }
  if (n.originalType === "milestone") {
    const $ = p + (_ - fe) / 2;
    return /* @__PURE__ */ o(
      "div",
      {
        "data-task-id": n.id,
        ...B,
        style: {
          position: "absolute",
          left: c - 6,
          top: $,
          height: fe,
          minWidth: Le,
          borderRadius: fe / 2,
          background: M ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #e8f5ee, #f0f8f4)",
          border: E ? `2px solid ${e.group}` : M ? `2px solid ${e.today}` : `1.5px solid ${e.milestoneRing}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: x ? "grabbing" : "grab",
          zIndex: w || E ? 20 : 10,
          boxShadow: E ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : M ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : S && !w ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : w ? `0 3px 12px ${e.milestone}22` : "0 1px 3px rgba(0,0,0,0.06)",
          opacity: F ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: w ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ t("div", { style: { width: 20, height: 20, borderRadius: "50%", background: M ? e.today : e.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(Se, { size: 11, color: "#fff", strokeWidth: 2.5 }) }),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: M ? e.today : e.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: n.name }),
          n.progress >= 100 && /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 700, color: "#fff", background: e.milestoneRing, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          b && /* @__PURE__ */ o(de, { children: [
            /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (u) => i(u, n, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (u) => i(u, n, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (n.originalType === "event") {
    const $ = p + (_ - fe) / 2;
    return /* @__PURE__ */ o(
      "div",
      {
        "data-task-id": n.id,
        ...B,
        style: {
          position: "absolute",
          left: c - 6,
          top: $,
          height: fe,
          minWidth: Le,
          borderRadius: fe / 2,
          background: M ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #fff7ed, #ffedd5)",
          border: E ? `2px solid ${e.group}` : M ? `2px solid ${e.today}` : `1.5px solid ${e.event}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: x ? "grabbing" : "grab",
          zIndex: w || E ? 20 : 10,
          boxShadow: E ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : M ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : S && !w ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : w ? `0 3px 12px ${e.event}33` : "0 1px 3px rgba(0,0,0,0.06)",
          opacity: F ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: w ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ t("div", { style: { width: 20, height: 20, borderRadius: "50%", background: M ? e.today : e.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(ke, { size: 11, color: "#fff", strokeWidth: 2.5 }) }),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: M ? e.today : e.event, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: n.name }),
          n.progress >= 100 && /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 700, color: "#fff", background: e.event, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          b && /* @__PURE__ */ o(de, { children: [
            /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (u) => i(u, n, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (u) => i(u, n, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (n.originalType === "note") {
    const u = p + 4, D = n.noteColor || "#FEF08A", s = n.filesCount || 0;
    return /* @__PURE__ */ o(
      "div",
      {
        "data-task-id": n.id,
        ...B,
        style: {
          position: "absolute",
          left: c,
          top: u,
          width: 148,
          minHeight: 72,
          background: D,
          borderRadius: 3,
          cursor: x ? "grabbing" : "grab",
          zIndex: w || E ? 20 : 10,
          boxShadow: E ? `0 0 0 2px ${e.group}, 4px 6px 16px rgba(0,0,0,0.22)` : S && !w ? `0 0 0 2px ${e.group}99, 3px 4px 14px rgba(0,0,0,0.18)` : w ? "4px 6px 18px rgba(0,0,0,0.22)" : "2px 3px 8px rgba(0,0,0,0.13)",
          opacity: F ? 0.2 : 1,
          transition: x ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: w ? "rotate(-1.5deg) scale(1.03) translateY(-2px)" : "rotate(0deg)",
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
            /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 500, color: "rgba(0,0,0,0.45)" }, children: Q(n.start) }),
            s > 0 && /* @__PURE__ */ o("span", { style: {
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 9,
              color: "rgba(0,0,0,0.45)"
            }, children: [
              /* @__PURE__ */ t(Fe, { size: 8 }),
              " ",
              s
            ] })
          ] }),
          b && /* @__PURE__ */ o(de, { children: [
            /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (y) => i(y, n, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ t("div", { "data-task-id": n.id, onMouseDown: (y) => i(y, n, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  return null;
}
function vt() {
  const {
    arrows: n,
    hoveredTaskId: c,
    selectedTaskId: p,
    relatedIds: T
  } = Ie();
  return /* @__PURE__ */ t(de, { children: n.map((h, w) => {
    const x = c === h.predId || c === h.succId, C = !p || h.predId === p || h.succId === p || T.has(h.predId) || T.has(h.succId), M = p !== null && C, f = x ? e.arrowHover : M ? e.group : e.arrow;
    return /* @__PURE__ */ o("g", { style: { opacity: C ? M ? 1 : void 0 : 0.08, transition: "opacity 0.18s" }, children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: h.path,
          fill: "none",
          stroke: f,
          strokeWidth: M ? 2.5 : x ? 2 : 1.5,
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
    ] }, w);
  }) });
}
const ze = (n) => ({
  id: n.id,
  name: n.name,
  start: n.start,
  end: n.end,
  type: n.originalType === "step" ? "task" : n.originalType,
  progress: n.progress
}), ve = (n, c) => {
  switch (n) {
    case "step":
      return /* @__PURE__ */ t("div", { style: { width: 12, height: 12, borderRadius: 2, background: oe[c ?? 0].bar, border: `1.5px solid ${oe[c ?? 0].barBorder}`, flexShrink: 0 } });
    case "milestone":
      return /* @__PURE__ */ t("div", { style: { width: 16, height: 16, borderRadius: "50%", background: e.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(Se, { size: 8, color: "#fff" }) });
    case "event":
      return /* @__PURE__ */ t("div", { style: { width: 16, height: 16, borderRadius: "50%", background: e.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(ke, { size: 8, color: "#fff" }) });
    case "note":
      return /* @__PURE__ */ t("div", { style: { width: 12, height: 14, background: e.note, borderRadius: 2, boxShadow: "1px 1px 2px rgba(0,0,0,0.1)", flexShrink: 0 } });
    default:
      return null;
  }
};
function wt() {
  const {
    props: n,
    viewMode: c,
    timeline: p,
    displayRows: T,
    dragState: h,
    resizeState: w,
    connectState: x,
    pendingConnection: C,
    setPendingConnection: M,
    depModalType: f,
    setDepModalType: E,
    depModalLag: b,
    setDepModalLag: F,
    depCreating: S,
    deletingDepId: B,
    setDeletingDepId: r,
    chartMenu: i,
    setChartMenu: I,
    rightBodyRef: l,
    timeHeaderRef: $,
    handleChartMouseDown: u,
    handleChartWheel: D,
    openChartMenu: s,
    hoveredTaskId: y,
    setHoveredTaskId: N,
    selectedTaskId: A,
    setSelectedTaskId: ee,
    tooltip: k,
    setTooltip: g,
    popupState: Y,
    setPopupState: V,
    criticalIds: q,
    delayedIds: H,
    relatedIds: ie,
    handleBarMouseDown: xe,
    handleResizeMouseDown: Te,
    handleConnectDotMouseDown: be,
    handleCreateDependency: Me
  } = Ie(), {
    translations: le,
    onViewStage: me,
    onEditStage: De,
    onDeleteStage: j,
    onDeleteDependency: X,
    onAddNewStage: Re,
    onAddMilestone: Ce,
    onAddEvent: Ee,
    onAddNote: $e
  } = n, R = (m, a) => le ? typeof le == "function" ? le(m, a) : le[m] || a : a, he = (m, a) => Math.round((a.getTime() - m.getTime()) / 864e5) + 1, re = Math.max(T.length * _, 400) + 80, ue = () => V({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  return /* @__PURE__ */ o("div", { style: { flex: 1, width: "100%", background: "#FAFAFA", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", borderLeft: `1px solid ${e.borderLight}` }, children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: $,
        style: {
          height: we * 2,
          background: e.headerBg,
          borderBottom: `1px solid ${e.borderLight}`,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
        },
        onWheel: D,
        children: /* @__PURE__ */ o("div", { style: { width: p.totalWidth, height: "100%", position: "relative" }, children: [
          /* @__PURE__ */ o("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: we, display: "flex" }, children: [
            c === "day" && p.months.map((m, a) => /* @__PURE__ */ t("div", { style: { width: m.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 700, color: e.textTitle, letterSpacing: "0.02em" }, children: m.label }) }, a)),
            c === "month" && p.years?.map((m, a) => /* @__PURE__ */ t("div", { style: { width: m.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 700, color: e.textTitle, letterSpacing: "0.02em" }, children: m.label }) }, a))
          ] }),
          /* @__PURE__ */ o("div", { style: { position: "absolute", top: we, left: 0, right: 0, height: we, display: "flex" }, children: [
            c === "day" && p.days.map((m, a) => {
              const d = m.isToday;
              return /* @__PURE__ */ t("div", { style: { width: p.dayWidth, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: d ? 800 : 500, color: d ? e.today : e.textSecondary, letterSpacing: "-0.03em" }, children: m.date.getDate().toString().padStart(2, "0") }) }, a);
            }),
            c === "month" && p.months.map((m, a) => /* @__PURE__ */ t("div", { style: { width: m.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: e.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em" }, children: m.label.substring(0, 3) }) }, a))
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        ref: l,
        className: "zg-no-scrollbar",
        style: { flex: 1, overflow: "auto", background: "#fff", position: "relative" },
        onMouseDown: u,
        onWheel: D,
        onContextMenu: s,
        children: /* @__PURE__ */ o("div", { style: { width: p.totalWidth, height: re, position: "relative" }, children: [
          /* @__PURE__ */ o("svg", { width: p.totalWidth, height: re, style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" }, children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("pattern", { id: "gantt-y-lines", x: "0", y: "0", width: p.dayWidth, height: _, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ t("line", { x1: p.dayWidth, y1: "0", x2: p.dayWidth, y2: _, stroke: e.border, strokeWidth: "1", strokeDasharray: "4 4", opacity: "0.4" }) }),
              /* @__PURE__ */ t("pattern", { id: "gantt-x-lines", x: "0", y: "0", width: p.dayWidth, height: _, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ t("line", { x1: "0", y1: _, x2: p.dayWidth, y2: _, stroke: e.borderLight, strokeWidth: "1" }) })
            ] }),
            /* @__PURE__ */ t("rect", { width: "100%", height: "100%", fill: "url(#gantt-x-lines)" }),
            /* @__PURE__ */ t("rect", { width: "100%", height: "100%", fill: "url(#gantt-y-lines)" }),
            c === "day" && p.days.map((m, a) => m.isWeekend ? /* @__PURE__ */ t("rect", { x: a * p.dayWidth, y: 0, width: p.dayWidth, height: re, fill: e.weekendBg, opacity: 0.6 }, `we-${a}`) : null),
            c === "month" && p.days.map((m, a) => m.isWeekend ? /* @__PURE__ */ t("rect", { x: a * p.dayWidth, y: 0, width: p.dayWidth, height: re, fill: e.weekendBg, opacity: 0.3 }, `wem-${a}`) : null),
            p.todayIndex >= 0 && /* @__PURE__ */ o("g", { children: [
              /* @__PURE__ */ t("rect", { x: p.todayIndex * p.dayWidth, y: 0, width: p.dayWidth, height: re, fill: e.todayBg }),
              /* @__PURE__ */ t("line", { x1: (p.todayIndex + 0.5) * p.dayWidth, y1: 0, x2: (p.todayIndex + 0.5) * p.dayWidth, y2: re, stroke: e.today, strokeWidth: 2, strokeDasharray: "4 4", opacity: 0.3 })
            ] })
          ] }),
          T.map((m, a) => m.kind === "group" || m.kind === "projectHeader" ? /* @__PURE__ */ t("div", { style: {
            position: "absolute",
            left: 0,
            top: a * _,
            width: "100%",
            height: _,
            background: m.kind === "projectHeader" ? e.headerBg : `${e.groupLight}15`,
            borderBottom: `1px solid ${e.borderLight}`,
            pointerEvents: "none"
          } }, `bg-${a}`) : null),
          /* @__PURE__ */ o("div", { style: { position: "absolute", inset: 0 }, children: [
            T.map((m, a) => {
              if (m.kind !== "task") return null;
              const d = m.task, v = h?.task.id === d.id, z = w?.task.id === d.id, L = v || z && w.edge === "left" ? Z(d.start, v ? h.offsetDays : w.offsetDays) : d.start, W = v || z && w.edge === "right" ? Z(d.end, v ? h.offsetDays : w.offsetDays) : d.end, O = d.originalType !== "step";
              let ce = se(L, p), U = 0, te = 0;
              O || (U = Math.max(se(W, p) - ce, p.dayWidth), te = U * (d.progress / 100));
              const je = y === d.id, Ae = A === d.id, Ve = H.has(d.id), Ue = q.has(d.id), qe = !!A && !Ae && !ie.has(d.id), Ke = Ae || !!A && ie.has(d.id), Je = x?.hoverTargetId === d.id, Qe = je || Ae, Ze = a * _;
              return /* @__PURE__ */ t(
                mt,
                {
                  task: d,
                  x: ce,
                  y: Ze,
                  w: U,
                  progW: te,
                  isHov: je,
                  isDrag: v,
                  isResize: z,
                  isCritical: Ue,
                  isDelayed: Ve,
                  isConnectTarget: Je,
                  showDots: Qe,
                  isBarDimmed: qe,
                  isBarHighlighted: Ke,
                  commonEvents: {
                    onMouseEnter: (K) => {
                      N(d.id), !h && !w && g({ task: d, x: K.clientX, y: K.clientY });
                    },
                    onMouseMove: (K) => {
                      y === d.id && !h && !w && g({ task: d, x: K.clientX, y: K.clientY });
                    },
                    onMouseLeave: () => {
                      N(null), g(null);
                    },
                    onClick: (K) => {
                      K.stopPropagation(), ee(d.id), K.detail === 2 && me?.(ze(d)), V(!Y.isOpen || Y.task?.id !== d.id ? {
                        isOpen: !0,
                        position: { x: K.clientX, y: K.clientY },
                        task: d
                      } : { isOpen: !1, position: { x: 0, y: 0 }, task: null });
                    },
                    onMouseDown: (K) => xe(K, d)
                  },
                  handleResizeMouseDown: Te,
                  handleConnectDotMouseDown: be
                },
                d.id
              );
            }),
            /* @__PURE__ */ t("svg", { width: p.totalWidth, height: re, style: { position: "absolute", inset: 0, pointerEvents: "none" }, children: /* @__PURE__ */ t(vt, {}) }),
            k && !h && /* @__PURE__ */ t("div", { style: { position: "fixed", left: k.x + 16, top: k.y - 10, zIndex: 9999, pointerEvents: "none" }, children: /* @__PURE__ */ o(
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
                    ve(k.task.originalType, k.task.colorIdx),
                    /* @__PURE__ */ t("span", { style: { fontSize: 12, fontWeight: 700, color: e.textTitle, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: k.task.name })
                  ] }),
                  /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: 4, fontSize: 11, color: e.textSecondary }, children: k.task.originalType === "step" ? /* @__PURE__ */ o(de, { children: [
                    k.task.previsionStart && k.task.previsionEnd && /* @__PURE__ */ o("div", { style: { background: `${e.headerBg}`, borderRadius: 6, padding: "4px 6px", marginBottom: 2 }, children: [
                      /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }, children: [
                        /* @__PURE__ */ t("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${e.textSecondary}44`, border: `1.5px solid ${e.textSecondary}66` } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: e.textSecondary }, children: R("gantt.tooltip.planned", "Planned") })
                      ] }),
                      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ o("span", { children: [
                          R("gantt.tooltip.start", "Start"),
                          ":"
                        ] }),
                        /* @__PURE__ */ t("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: Q(k.task.previsionStart) })
                      ] }),
                      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ o("span", { children: [
                          R("gantt.tooltip.end", "End"),
                          ":"
                        ] }),
                        /* @__PURE__ */ t("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: Q(k.task.previsionEnd) })
                      ] }),
                      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ o("span", { children: [
                          R("gantt.tooltip.duration", "Duration"),
                          ":"
                        ] }),
                        /* @__PURE__ */ o("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: [
                          he(k.task.previsionStart, k.task.previsionEnd),
                          "d"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ o("div", { style: { background: k.task.hasActualDates ? `${e.groupLight}22` : "transparent", borderRadius: 6, padding: "4px 6px" }, children: [
                      /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }, children: [
                        /* @__PURE__ */ t("div", { style: { width: 20, height: 4, borderRadius: 2, background: oe[k.task.colorIdx ?? 0].progress } }),
                        /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: k.task.hasActualDates ? e.group : e.textSecondary }, children: k.task.hasActualDates ? R("gantt.tooltip.actual", "Actual") : R("gantt.tooltip.plannedInUse", "Planned (in use)") })
                      ] }),
                      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ o("span", { children: [
                          R("gantt.tooltip.start", "Start"),
                          ":"
                        ] }),
                        /* @__PURE__ */ t("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: Q(k.task.start) })
                      ] }),
                      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ o("span", { children: [
                          R("gantt.tooltip.end", "End"),
                          ":"
                        ] }),
                        /* @__PURE__ */ t("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: Q(k.task.end) })
                      ] }),
                      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                        /* @__PURE__ */ o("span", { children: [
                          R("gantt.tooltip.duration", "Duration"),
                          ":"
                        ] }),
                        /* @__PURE__ */ o("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: [
                          he(k.task.start, k.task.end),
                          "d"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16, paddingTop: 4, marginTop: 4, borderTop: `1px solid ${e.borderLight}` }, children: [
                      /* @__PURE__ */ o("span", { children: [
                        R("charts.gantt.progress", "Progress"),
                        ":"
                      ] }),
                      /* @__PURE__ */ o("span", { style: { fontWeight: 700, color: e.group }, children: [
                        Math.round(k.task.progress),
                        "%"
                      ] })
                    ] })
                  ] }) : k.task.originalType === "note" ? /* @__PURE__ */ o(de, { children: [
                    k.task.noteProjectTitle && /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }, children: [
                      /* @__PURE__ */ t("div", { style: { width: 8, height: 8, borderRadius: 2, background: k.task.noteColor || e.note, flexShrink: 0 } }),
                      /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: e.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: k.task.noteProjectTitle })
                    ] }),
                    /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                      /* @__PURE__ */ o("span", { children: [
                        R("gantt.tooltip.date", "Date"),
                        ":"
                      ] }),
                      /* @__PURE__ */ t("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: Q(k.task.start) })
                    ] }),
                    (k.task.filesCount || 0) > 0 && /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                      /* @__PURE__ */ o("span", { children: [
                        R("gantt.tooltip.attachments", "Attachments"),
                        ":"
                      ] }),
                      /* @__PURE__ */ o("span", { style: { fontWeight: 600, display: "flex", alignItems: "center", gap: 4, color: e.textPrimary }, children: [
                        /* @__PURE__ */ t(Fe, { size: 10 }),
                        k.task.filesCount
                      ] })
                    ] })
                  ] }) : /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
                    /* @__PURE__ */ o("span", { children: [
                      R("charts.gantt.start", "Start"),
                      ":"
                    ] }),
                    /* @__PURE__ */ t("span", { style: { fontWeight: 600, fontVariantNumeric: "tabular-nums", color: e.textPrimary }, children: Q(k.task.start) })
                  ] }) })
                ]
              }
            ) })
          ] })
        ] })
      }
    ),
    Y.task && Y.isOpen && (() => {
      const m = Y.task, a = (n.dependencies || []).filter((W) => W.predecessorId === m.id || W.successorId === m.id), d = { FS: R("gantt.depType.fs", "Finish to Start"), SS: R("gantt.depType.ss", "Start to Start"), FF: R("gantt.depType.ff", "Finish to Finish"), SF: R("gantt.depType.sf", "Start to Finish") }, v = a.length > 0 ? 300 : 220, z = Math.min(Y.position.x, window.innerWidth - v - 16), L = Y.position.y + 8;
      return /* @__PURE__ */ o(
        "div",
        {
          "data-popup": "gantt-action",
          style: { position: "fixed", left: z, top: L, zIndex: 9999, background: "#fff", borderRadius: 4, boxShadow: "0 12px 40px rgba(0,0,0,0.14), 0 3px 10px rgba(0,0,0,0.07)", border: `1.5px solid ${e.borderLight}`, width: v, overflow: "hidden" },
          onMouseDown: (W) => W.stopPropagation(),
          children: [
            /* @__PURE__ */ t("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${e.borderLight}` }, children: /* @__PURE__ */ t("p", { style: { fontSize: 13, fontWeight: 700, color: e.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: m.name, children: m.name }) }),
            /* @__PURE__ */ o("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" }, children: [
              /* @__PURE__ */ o("button", { onClick: () => {
                me?.(ze(m)), ue();
              }, className: "zg-popup-btn", children: [
                /* @__PURE__ */ t(it, { size: 15 }),
                " ",
                /* @__PURE__ */ t("span", { children: R("gantt.popup.viewDetails", "View details") })
              ] }),
              /* @__PURE__ */ o("button", { onClick: () => {
                De?.(ze(m)), ue();
              }, className: "zg-popup-btn", children: [
                /* @__PURE__ */ t(at, { size: 15 }),
                " ",
                /* @__PURE__ */ t("span", { children: R("gantt.popup.edit", "Edit") })
              ] }),
              /* @__PURE__ */ o("button", { onClick: () => {
                j?.(m.id), ue();
              }, className: "zg-popup-btn zg-popup-btn-danger", children: [
                /* @__PURE__ */ t(st, { size: 15 }),
                " ",
                /* @__PURE__ */ t("span", { children: R("gantt.popup.delete", "Delete") })
              ] })
            ] }),
            a.length > 0 && /* @__PURE__ */ o("div", { style: { borderTop: `1px solid ${e.borderLight}`, padding: "10px 14px 12px" }, children: [
              /* @__PURE__ */ o("div", { style: { fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }, children: [
                R("gantt.popup.relations", "Relations"),
                " (",
                a.length,
                ")"
              ] }),
              /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: a.map((W) => {
                const O = W.predecessorId === m.id, ce = O ? W.successorName : W.predecessorName, U = B === W.id;
                return /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderRadius: 8, background: "#f8fafb", border: `1px solid ${e.borderLight}` }, children: [
                  /* @__PURE__ */ o("div", { style: { flex: 1, minWidth: 0 }, children: [
                    /* @__PURE__ */ o("div", { style: { fontSize: 10, fontWeight: 700, color: e.group, marginBottom: 2 }, children: [
                      /* @__PURE__ */ t("span", { style: { background: `${e.group}15`, borderRadius: 4, padding: "1px 5px" }, children: W.type }),
                      " ",
                      /* @__PURE__ */ t("span", { style: { color: e.textSecondary, fontWeight: 500 }, children: O ? "→ " : "← " }),
                      /* @__PURE__ */ t("span", { style: { color: e.textMuted, fontWeight: 400, fontSize: 9 }, children: d[W.type] ?? W.type })
                    ] }),
                    /* @__PURE__ */ t("div", { style: { fontSize: 11, color: e.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: ce, children: ce })
                  ] }),
                  X && /* @__PURE__ */ t(
                    "button",
                    {
                      disabled: !!U,
                      onClick: async () => {
                        r(W.id);
                        try {
                          await X(W.id);
                        } finally {
                          r(null);
                        }
                      },
                      style: { flexShrink: 0, padding: "4px 6px", borderRadius: 6, border: "none", background: U ? "#fee2e2" : "transparent", cursor: U ? "wait" : "pointer", color: "#ef4444", fontSize: 14, opacity: U ? 0.5 : 1, transition: "background 0.12s" },
                      children: U ? "⟳" : "🗑"
                    }
                  )
                ] }, W.id);
              }) })
            ] })
          ]
        }
      );
    })(),
    i && /* @__PURE__ */ o(
      "div",
      {
        "data-menu": "chart-create",
        style: {
          position: "fixed",
          left: Math.min(i.x, window.innerWidth - 220),
          top: Math.min(i.y, window.innerHeight - 220),
          zIndex: 99999,
          background: "#fff",
          borderRadius: 10,
          boxShadow: "0 12px 40px rgba(0,0,0,0.15), 0 3px 10px rgba(0,0,0,0.08)",
          border: `1.5px solid ${e.borderLight}`,
          width: 200,
          overflow: "hidden"
        },
        onClick: (m) => m.stopPropagation(),
        children: [
          /* @__PURE__ */ t("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${e.borderLight}`, background: e.headerBg }, children: /* @__PURE__ */ o("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" }, children: [
            R("gantt.chart.addOn", "Add on"),
            " ",
            Q(i.date)
          ] }) }),
          /* @__PURE__ */ t("div", { style: { padding: "5px 5px" }, children: [
            { label: R("gantt.newAction.step", "Step"), icon: ve("step", 0), action: () => {
              Re?.(i.date, i.projectId), I(null);
            } },
            { label: R("gantt.newAction.milestone", "Milestone"), icon: ve("milestone"), action: () => {
              Ce?.(i.date, i.projectId), I(null);
            } },
            { label: R("gantt.newAction.event", "Event"), icon: ve("event"), action: () => {
              Ee?.(i.date, i.projectId), I(null);
            } },
            { label: R("gantt.newAction.note", "Note"), icon: ve("note"), action: () => {
              $e?.(i.date, i.projectId), I(null);
            } }
          ].map((m) => /* @__PURE__ */ o(
            "button",
            {
              onClick: m.action,
              className: "zg-popup-btn",
              style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.textPrimary, textAlign: "left", transition: "background 0.12s" },
              children: [
                m.icon,
                " ",
                m.label
              ]
            },
            m.label
          )) })
        ]
      }
    ),
    x && /* @__PURE__ */ o("svg", { style: { position: "fixed", inset: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 99999 }, children: [
      /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ t("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ t("path", { d: "M0,0 L0,6 L6,3 z", fill: e.group }) }) }),
      /* @__PURE__ */ t("line", { x1: x.fromScreenX, y1: x.fromScreenY, x2: x.currentScreenX, y2: x.currentScreenY, stroke: e.group, strokeWidth: 2.5, strokeDasharray: "8 5", markerEnd: "url(#connect-arrow)", opacity: 0.85, style: { animation: "zg-dash 0.5s linear infinite" } })
    ] }),
    C && /* @__PURE__ */ t("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99998 }, onClick: () => M(null), children: /* @__PURE__ */ o("div", { style: { background: "#fff", borderRadius: 20, padding: "32px 36px", width: 420, boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 6px 24px rgba(0,0,0,0.08)" }, onClick: (m) => m.stopPropagation(), children: [
      /* @__PURE__ */ o("div", { style: { marginBottom: 20 }, children: [
        /* @__PURE__ */ t("h3", { style: { fontSize: 18, fontWeight: 700, color: e.textTitle, marginBottom: 4 }, children: R("gantt.depModal.title", "Relation Type") }),
        /* @__PURE__ */ t("p", { style: { fontSize: 13, color: e.textSecondary }, children: R("gantt.depModal.subtitle", "Choose how the two tasks relate") })
      ] }),
      /* @__PURE__ */ t("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }, children: [
        { type: "FS", label: R("gantt.depModal.fs", "Finish to Start"), desc: R("gantt.depModal.fsDesc", "B starts when A finishes") },
        { type: "SS", label: R("gantt.depModal.ss", "Start to Start"), desc: R("gantt.depModal.ssDesc", "A and B start together") },
        { type: "FF", label: R("gantt.depModal.ff", "Finish to Finish"), desc: R("gantt.depModal.ffDesc", "A and B finish together") },
        { type: "SF", label: R("gantt.depModal.sf", "Start to Finish"), desc: R("gantt.depModal.sfDesc", "B finishes when A starts") }
      ].map((m) => /* @__PURE__ */ o("button", { onClick: () => E(m.type), style: { border: f === m.type ? `2px solid ${e.group}` : `1.5px solid ${e.borderLight}`, borderRadius: 12, padding: "12px 14px", textAlign: "left", cursor: "pointer", background: f === m.type ? `${e.group}0d` : "#fafafa" }, children: [
        /* @__PURE__ */ t("div", { style: { fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: e.group, marginBottom: 4, background: f === m.type ? `${e.group}20` : `${e.group}0d`, borderRadius: 6, padding: "2px 6px", display: "inline-block" }, children: m.type }),
        /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 2 }, children: m.label }),
        /* @__PURE__ */ t("div", { style: { fontSize: 11, color: e.textSecondary }, children: m.desc })
      ] }, m.type)) }),
      /* @__PURE__ */ o("div", { style: { marginBottom: 24 }, children: [
        /* @__PURE__ */ t("label", { style: { display: "block", fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 6 }, children: R("gantt.depModal.lagLabel", "Lag (days)") }),
        /* @__PURE__ */ t("input", { type: "number", value: b, onChange: (m) => F(parseInt(m.target.value) || 0), style: { width: "100%", padding: "10px 12px", border: `1.5px solid ${e.borderLight}`, borderRadius: 8, fontSize: 14 } })
      ] }),
      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12 }, children: [
        /* @__PURE__ */ t("button", { onClick: () => M(null), style: { padding: "10px 16px", borderRadius: 8, border: `1px solid ${e.borderLight}`, background: "#fff", cursor: "pointer", fontWeight: 600 }, children: R("gantt.depModal.cancel", "Cancel") }),
        /* @__PURE__ */ t("button", { onClick: Me, disabled: S, style: { padding: "10px 16px", borderRadius: 8, border: "none", background: e.group, color: "#fff", cursor: S ? "wait" : "pointer", fontWeight: 600 }, children: S ? R("gantt.depModal.saving", "Saving...") : R("gantt.depModal.create", "Create Dependency") })
      ] })
    ] }) })
  ] });
}
function St(n) {
  const c = pe(null), p = pe(null), T = pe(null), h = pe(!1), w = J(() => {
    if (h.current) return;
    h.current = !0;
    const f = p.current;
    f && c.current && (c.current.scrollTop = f.scrollTop), f && T.current && (T.current.scrollLeft = f.scrollLeft), h.current = !1;
  }, []), x = J(() => {
    h.current || (h.current = !0, c.current && p.current && (p.current.scrollTop = c.current.scrollTop), h.current = !1);
  }, []), C = pe(!1);
  ge(() => {
    if (C.current || !n.totalWidth) return;
    const f = p.current;
    if (!f) return;
    const E = se(/* @__PURE__ */ new Date(), n);
    if (E >= 0 && E <= n.totalWidth) {
      const b = E - f.clientWidth / 2;
      f.scrollLeft = Math.max(0, b), T.current && (T.current.scrollLeft = f.scrollLeft), C.current = !0;
    }
  }, [n]);
  const M = J((f) => {
    const E = p.current;
    if (E)
      if (f.preventDefault(), f.shiftKey || Math.abs(f.deltaX) > Math.abs(f.deltaY)) {
        const b = f.shiftKey ? f.deltaY : f.deltaX;
        E.scrollLeft += b, T.current && (T.current.scrollLeft = E.scrollLeft);
      } else
        E.scrollTop += f.deltaY, c.current && (c.current.scrollTop = E.scrollTop);
  }, []);
  return {
    leftBodyRef: c,
    rightBodyRef: p,
    timeHeaderRef: T,
    handleRightScroll: w,
    handleLeftScroll: x,
    handleChartWheel: M
  };
}
function kt(n, c, p, T) {
  const h = /* @__PURE__ */ new Map();
  return n.forEach((w) => h.set(w.id, w)), c.map((w) => {
    const x = h.get(w.predecessorId), C = h.get(w.successorId);
    if (!x || !C) return null;
    const M = T.get(x.id), f = T.get(C.id);
    if (M == null || f == null) return null;
    const E = x.originalType !== "step", b = C.originalType !== "step", F = E ? se(x.start, p) + Le : se(x.end, p), S = M * _ + _ / 2, B = b ? se(C.start, p) - 10 : se(C.start, p), r = f * _ + _ / 2, i = 14, I = Math.max(F + i, B - i), l = S === r ? `M${F},${S} L${B - 6},${r}` : `M${F},${S} L${I},${S} L${I},${r} L${B - 6},${r}`;
    return { predId: x.id, succId: C.id, path: l, headX: B - 6, headY: r };
  }).filter(Boolean);
}
function It(n, c) {
  if (n.length === 0 || c.length === 0) return /* @__PURE__ */ new Set();
  const p = /* @__PURE__ */ new Map();
  n.forEach((l) => p.set(l.id, l));
  const T = new Set(n.map((l) => l.id)), h = c.filter((l) => T.has(l.predecessorId) && T.has(l.successorId));
  if (h.length === 0) return /* @__PURE__ */ new Set();
  const w = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map();
  h.forEach((l) => {
    w.has(l.predecessorId) || w.set(l.predecessorId, []), w.get(l.predecessorId).push(l.successorId), x.has(l.successorId) || x.set(l.successorId, []), x.get(l.successorId).push(l.predecessorId);
  });
  const C = (l) => Math.max(1, ye(l.start, l.end)), M = /* @__PURE__ */ new Set(), f = [];
  function E(l) {
    M.has(l) || (M.add(l), (w.get(l) || []).forEach(E), f.unshift(l));
  }
  n.forEach((l) => E(l.id));
  const b = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
  for (const l of f) {
    const $ = p.get(l), u = x.get(l) || [];
    let D = 0;
    for (const y of u) D = Math.max(D, F.get(y) || 0);
    const s = u.length > 0 ? D : 0;
    b.set(l, s), F.set(l, s + C($));
  }
  let S = 0;
  F.forEach((l) => {
    l > S && (S = l);
  });
  const B = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (let l = f.length - 1; l >= 0; l--) {
    const $ = f[l], u = p.get($), D = w.get($) || [];
    let s = S;
    for (const y of D) s = Math.min(s, B.get(y) ?? S);
    r.set($, D.length > 0 ? s : S), B.set($, (r.get($) || 0) - C(u));
  }
  const i = /* @__PURE__ */ new Set();
  h.forEach((l) => {
    i.add(l.predecessorId), i.add(l.successorId);
  });
  const I = /* @__PURE__ */ new Set();
  for (const l of f) {
    if (!i.has(l)) continue;
    const $ = (B.get(l) || 0) - (b.get(l) || 0);
    Math.abs($) < 0.5 && I.add(l);
  }
  return I;
}
function Tt({
  steps: n,
  milestones: c,
  events: p,
  notes: T,
  dependencies: h,
  viewMode: w,
  locale: x,
  groupByProject: C,
  visibleTypes: M,
  collapsedGroups: f,
  collapsedProjects: E,
  selectedTaskId: b
}) {
  const F = ae(() => {
    const u = [];
    let D = 0;
    return n.forEach((s) => {
      const y = !!(s.startDate && s.finishDate), N = s.startDate || s.previsionStartDate, A = s.finishDate || s.previsionFinishDate;
      if (!N || !A) return;
      const ee = new Date(N), k = new Date(A);
      if (isNaN(ee.getTime()) || isNaN(k.getTime())) return;
      k <= ee && k.setDate(k.getDate() + 1);
      let g, Y;
      if (s.previsionStartDate && s.previsionFinishDate) {
        const H = new Date(s.previsionStartDate), ie = new Date(s.previsionFinishDate);
        !isNaN(H.getTime()) && !isNaN(ie.getTime()) && (g = H, Y = ie <= H ? Z(H, 1) : ie);
      }
      const V = h?.filter((H) => H.successorId === s.id).map((H) => H.predecessorId) || [], q = s.conclusionPercent != null ? Number(s.conclusionPercent) : 0;
      u.push({
        id: s.id,
        name: s.name,
        start: ee,
        end: k,
        progress: q > 1 ? Math.min(q, 100) : q * 100,
        originalType: "step",
        deps: V,
        colorIdx: D % oe.length,
        previsionStart: g,
        previsionEnd: Y,
        hasActualDates: y,
        projectId: s.projectId || void 0,
        projectTitle: s.projectTitle || void 0
      }), D++;
    }), c?.forEach((s) => {
      if (!s.date) return;
      const y = new Date(s.date);
      if (isNaN(y.getTime())) return;
      const N = h?.filter((A) => A.successorId === s.id).map((A) => A.predecessorId) || [];
      u.push({
        id: s.id,
        name: s.name,
        start: y,
        end: y,
        progress: s.finished ? 100 : 0,
        originalType: "milestone",
        deps: N,
        projectId: s.projectId || void 0,
        projectTitle: s.projectTitle || void 0
      });
    }), p?.forEach((s) => {
      if (!s.date) return;
      const y = new Date(s.date);
      if (isNaN(y.getTime())) return;
      const N = h?.filter((A) => A.successorId === s.id).map((A) => A.predecessorId) || [];
      u.push({
        id: s.id,
        name: s.title,
        start: y,
        end: y,
        progress: s.finished ? 100 : 0,
        originalType: "event",
        deps: N,
        projectId: s.projectId || void 0,
        projectTitle: s.projectTitle || void 0
      });
    }), T?.forEach((s) => {
      if (!s.date) return;
      const y = new Date(s.date);
      isNaN(y.getTime()) || u.push({
        id: s.id,
        name: s.title || "Note",
        start: y,
        end: y,
        progress: 0,
        originalType: "note",
        deps: [],
        noteCount: 1,
        noteColor: s.color || e.note,
        filesCount: s.filesCount || 0,
        noteProjectTitle: s.projectTitle || void 0,
        projectId: s.projectId || void 0,
        projectTitle: s.projectTitle || void 0
      });
    }), u;
  }, [n, c, p, T, h]), S = ae(() => bt(F, w, x), [F, w, x]), B = ae(() => {
    const u = [], D = ["step", "milestone", "event", "note"];
    if (C) {
      const s = /* @__PURE__ */ new Map();
      F.forEach((y) => {
        y.projectId && !s.has(y.projectId) && s.set(y.projectId, y.projectTitle || y.projectId);
      });
      for (const [y, N] of Array.from(s.entries())) {
        const A = E.has(y);
        if (u.push({ kind: "projectHeader", projectId: y, projectTitle: N, collapsed: A }), !A) {
          const ee = F.filter((k) => k.projectId === y);
          for (const k of D) {
            if (!M.has(k)) continue;
            const g = ee.filter((q) => q.originalType === k);
            if (g.length === 0) continue;
            const Y = `${y}-${k}`, V = f.has(Y);
            u.push({ kind: "group", groupType: k, label: Ne[k], count: g.length, collapsed: V, projectId: y }), V || g.forEach((q) => u.push({ kind: "task", task: q }));
          }
        }
      }
    } else
      for (const s of D) {
        if (!M.has(s)) continue;
        const y = F.filter((A) => A.originalType === s);
        if (y.length === 0) continue;
        const N = f.has(s);
        u.push({ kind: "group", groupType: s, label: Ne[s], count: y.length, collapsed: N }), N || y.forEach((A) => u.push({ kind: "task", task: A }));
      }
    return u;
  }, [F, M, f, E, C]), r = ae(() => {
    const u = /* @__PURE__ */ new Map();
    return B.forEach((D, s) => {
      D.kind === "task" && u.set(D.task.id, s);
    }), u;
  }, [B]), i = ae(
    () => kt(F, h || [], S, r),
    [F, h, S, r]
  ), I = ae(() => It(F, h || []), [F, h]), l = ae(() => {
    const u = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Date();
    return F.forEach((s) => {
      s.originalType === "step" && s.end < D && s.progress < 100 && u.add(s.id);
    }), u;
  }, [F]), $ = ae(() => {
    if (!b || !h?.length) return /* @__PURE__ */ new Set();
    const u = /* @__PURE__ */ new Set(), D = [b];
    for (; D.length; ) {
      const s = D.shift();
      for (const y of h)
        y.predecessorId === s && !u.has(y.successorId) && (u.add(y.successorId), D.push(y.successorId)), y.successorId === s && !u.has(y.predecessorId) && (u.add(y.predecessorId), D.push(y.predecessorId));
    }
    return u;
  }, [b, h]);
  return {
    tasks: F,
    timeline: S,
    displayRows: B,
    taskRowIndex: r,
    arrows: i,
    criticalIds: I,
    delayedIds: l,
    relatedIds: $
  };
}
function $t(n) {
  const [c, p] = P("day"), [T, h] = P(null), [w, x] = P(null), [C, M] = P(null), [f, E] = P({
    isOpen: !1,
    position: { x: 0, y: 0 },
    task: null
  }), [b, F] = P(null), [S, B] = P(null), [r, i] = P(null), [I, l] = P(null), [$, u] = P("FS"), [D, s] = P(0), [y, N] = P(!1), [A, ee] = P(null), [k, g] = P(null), [Y, V] = P(!1), q = pe(null), [H, ie] = P(/* @__PURE__ */ new Set(["step", "milestone", "event", "note"])), [xe, Te] = P(/* @__PURE__ */ new Set()), [be, Me] = P(/* @__PURE__ */ new Set()), le = J((a) => {
    ie((d) => {
      const v = new Set(d);
      return v.has(a) ? v.delete(a) : v.add(a), v;
    });
  }, []), me = J((a) => {
    Te((d) => {
      const v = new Set(d);
      return v.has(a) ? v.delete(a) : v.add(a), v;
    });
  }, []), De = J((a) => {
    Me((d) => {
      const v = new Set(d);
      return v.has(a) ? v.delete(a) : v.add(a), v;
    });
  }, []), j = Tt({
    steps: n.steps,
    milestones: n.milestones,
    events: n.events,
    notes: n.notes,
    dependencies: n.dependencies,
    viewMode: c,
    locale: n.locale,
    visibleTypes: H,
    collapsedGroups: xe,
    collapsedProjects: be,
    groupByProject: n.groupByProject,
    selectedTaskId: w || null
  }), X = St(j.timeline), Re = J((a, d) => {
    a.preventDefault(), a.stopPropagation(), F({ task: d, startMouseX: a.clientX, originalStart: new Date(d.start), originalEnd: new Date(d.end), offsetDays: 0 });
  }, []), Ce = J((a, d, v) => {
    a.preventDefault(), a.stopPropagation(), B({ task: d, edge: v, startMouseX: a.clientX, originalStart: new Date(d.start), originalEnd: new Date(d.end), offsetDays: 0 });
  }, []), Ee = J((a, d, v) => {
    a.preventDefault(), a.stopPropagation(), i({ fromTaskId: d.id, fromEdge: v, fromScreenX: a.clientX, fromScreenY: a.clientY, currentScreenX: a.clientX, currentScreenY: a.clientY, hoverTargetId: null });
  }, []), $e = J(async () => {
    if (!I || !n.onCreateDependency) return;
    const a = new Map(j.tasks.map((O) => [O.id, O])), d = a.get(I.fromTaskId), v = a.get(I.toTaskId);
    if (!d || !v) return;
    const z = (O) => O.originalType === "step" ? "STEP" : "MILESTONE", L = I.fromEdge === "right" ? d : v, W = I.fromEdge === "right" ? v : d;
    N(!0);
    try {
      await n.onCreateDependency({ predecessorId: L.id, predecessorType: z(L), successorId: W.id, successorType: z(W), type: $, lag: D }), l(null);
    } finally {
      N(!1);
    }
  }, [I, j.tasks, n.onCreateDependency, $, D]);
  ge(() => {
    if (!b) return;
    const a = (v) => {
      const z = v.clientX - b.startMouseX, L = Math.round(z / j.timeline.dayWidth);
      L !== b.offsetDays && F((W) => W ? { ...W, offsetDays: L } : null);
    }, d = () => {
      b.offsetDays !== 0 && n.onTaskChange && n.onTaskChange({
        id: b.task.id,
        name: b.task.name,
        start: Z(b.originalStart, b.offsetDays),
        end: Z(b.originalEnd, b.offsetDays),
        type: b.task.originalType === "step" ? "task" : "milestone",
        progress: b.task.progress
      }), F(null);
    };
    return document.addEventListener("mousemove", a), document.addEventListener("mouseup", d), () => {
      document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", d);
    };
  }, [b, j.timeline.dayWidth, n.onTaskChange]), ge(() => {
    if (!S) return;
    const a = (v) => {
      const z = v.clientX - S.startMouseX, L = Math.round(z / j.timeline.dayWidth);
      L !== S.offsetDays && B((W) => W ? { ...W, offsetDays: L } : null);
    }, d = () => {
      if (S.offsetDays !== 0 && n.onTaskChange) {
        const v = S.edge === "left" ? Z(S.originalStart, S.offsetDays) : S.originalStart, z = S.edge === "right" ? Z(S.originalEnd, S.offsetDays) : S.originalEnd;
        z > v && n.onTaskChange({ id: S.task.id, name: S.task.name, start: v, end: z, type: "task", progress: S.task.progress });
      }
      B(null);
    };
    return document.addEventListener("mousemove", a), document.addEventListener("mouseup", d), () => {
      document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", d);
    };
  }, [S, j.timeline.dayWidth, n.onTaskChange]), ge(() => {
    if (!r) return;
    const a = (v) => {
      let z = null;
      for (const L of document.elementsFromPoint(v.clientX, v.clientY)) {
        const W = L.dataset?.taskId;
        if (W && W !== r.fromTaskId) {
          z = W;
          break;
        }
      }
      i((L) => L ? { ...L, currentScreenX: v.clientX, currentScreenY: v.clientY, hoverTargetId: z } : null);
    }, d = (v) => {
      let z = null;
      for (const L of document.elementsFromPoint(v.clientX, v.clientY)) {
        const W = L.dataset?.taskId;
        if (W && W !== r.fromTaskId) {
          z = W;
          break;
        }
      }
      z && n.onCreateDependency && (l({ fromTaskId: r.fromTaskId, fromEdge: r.fromEdge, toTaskId: z }), u("FS"), s(0)), i(null);
    };
    return document.addEventListener("mousemove", a), document.addEventListener("mouseup", d), () => {
      document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", d);
    };
  }, [r?.fromTaskId, r?.fromEdge, n.onCreateDependency]);
  const [R, he] = P(null), re = J((a) => {
    if (S || b || a.button === 2) return;
    const d = X.rightBodyRef.current;
    d && (a.preventDefault(), he({ startX: a.clientX, startY: a.clientY, scrollLeft: d.scrollLeft, scrollTop: d.scrollTop }));
  }, [S, b, X.rightBodyRef]);
  ge(() => {
    if (!R) return;
    const a = (v) => {
      const z = X.rightBodyRef.current;
      z && (z.scrollLeft = R.scrollLeft - (v.clientX - R.startX), z.scrollTop = R.scrollTop - (v.clientY - R.startY), X.leftBodyRef.current && (X.leftBodyRef.current.scrollTop = z.scrollTop), X.timeHeaderRef.current && (X.timeHeaderRef.current.scrollLeft = z.scrollLeft));
    }, d = () => he(null);
    return document.addEventListener("mousemove", a), document.addEventListener("mouseup", d), () => {
      document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", d);
    };
  }, [R, X.rightBodyRef, X.leftBodyRef, X.timeHeaderRef]);
  const ue = J((a) => {
    a.preventDefault(), a.stopPropagation();
    const d = (z) => {
      const L = X.rightBodyRef.current;
      if (!L) return /* @__PURE__ */ new Date();
      const W = L.getBoundingClientRect(), O = z - W.left + L.scrollLeft;
      return Z(j.timeline.start, Math.max(0, Math.floor(O / j.timeline.dayWidth)));
    }, v = (z) => {
      if (!n.groupByProject) return;
      const L = X.leftBodyRef.current;
      if (!L) return;
      const W = L.getBoundingClientRect(), O = z - W.top + L.scrollTop, ce = Math.max(0, Math.floor(O / 50));
      for (let U = Math.min(ce, j.displayRows.length - 1); U >= 0; U--) {
        const te = j.displayRows[U];
        if (te.kind === "projectHeader") return te.projectId;
        if (te.kind === "task" && te.task.projectId) return te.task.projectId;
        if (te.kind === "group" && te.projectId) return te.projectId;
      }
    };
    g({ x: a.clientX, y: a.clientY, date: d(a.clientX), projectId: v(a.clientY) }), he(null);
  }, [j.timeline, j.displayRows, n.groupByProject, X.rightBodyRef, X.leftBodyRef]);
  ge(() => {
    if (!k) return;
    const a = (z) => {
      z.key === "Escape" && g(null);
    }, d = (z) => {
      z.target.closest('[data-menu="chart-create"]') || g(null);
    }, v = () => g(null);
    return document.addEventListener("keydown", a), document.addEventListener("click", d), window.addEventListener("scroll", v, !0), () => {
      document.removeEventListener("keydown", a), document.removeEventListener("click", d), window.removeEventListener("scroll", v, !0);
    };
  }, [k]);
  const m = ae(() => ({
    props: n,
    t: (a, d) => n.translations ? typeof n.translations == "function" ? n.translations(a, d) : n.translations[a] || d || "" : d || "",
    viewMode: c,
    setViewMode: p,
    hoveredTaskId: T,
    setHoveredTaskId: h,
    selectedTaskId: w,
    setSelectedTaskId: x,
    tooltip: C,
    setTooltip: M,
    popupState: f,
    setPopupState: E,
    dragState: b,
    setDragState: F,
    resizeState: S,
    setResizeState: B,
    connectState: r,
    setConnectState: i,
    visibleTypes: H,
    setVisibleTypes: ie,
    toggleVisibility: le,
    collapsedGroups: xe,
    setCollapsedGroups: Te,
    toggleGroup: me,
    collapsedProjects: be,
    setCollapsedProjects: Me,
    toggleProject: De,
    pendingConnection: I,
    setPendingConnection: l,
    depModalType: $,
    setDepModalType: u,
    depModalLag: D,
    setDepModalLag: s,
    depCreating: y,
    setDepCreating: N,
    deletingDepId: A,
    setDeletingDepId: ee,
    chartMenu: k,
    setChartMenu: g,
    newActionOpen: Y,
    setNewActionOpen: V,
    tasks: j.tasks,
    timeline: j.timeline,
    displayRows: j.displayRows,
    taskRowIndex: j.taskRowIndex || /* @__PURE__ */ new Map(),
    arrows: j.arrows,
    criticalIds: j.criticalIds,
    delayedIds: j.delayedIds,
    relatedIds: j.relatedIds,
    ...X,
    newActionRef: q,
    screenXToDate: (a) => {
      const d = X.rightBodyRef.current;
      if (!d) return /* @__PURE__ */ new Date();
      const v = d.getBoundingClientRect(), z = a - v.left + d.scrollLeft;
      return Z(j.timeline.start, Math.max(0, Math.floor(z / j.timeline.dayWidth)));
    },
    screenYToProjectId: (a) => {
      if (!n.groupByProject) return;
      const d = X.leftBodyRef.current;
      if (!d) return;
      const v = d.getBoundingClientRect(), z = a - v.top + d.scrollTop, L = Math.max(0, Math.floor(z / 50));
      for (let W = Math.min(L, j.displayRows.length - 1); W >= 0; W--) {
        const O = j.displayRows[W];
        if (O.kind === "projectHeader") return O.projectId;
        if (O.kind === "task" && O.task.projectId) return O.task.projectId;
        if (O.kind === "group" && O.projectId) return O.projectId;
      }
    },
    handleChartMouseDown: re,
    openChartMenu: ue,
    handleBarMouseDown: Re,
    handleResizeMouseDown: Ce,
    handleConnectDotMouseDown: Ee,
    handleCreateDependency: $e
  }), [
    n,
    c,
    T,
    w,
    C,
    f,
    b,
    S,
    r,
    H,
    xe,
    be,
    I,
    $,
    D,
    y,
    A,
    k,
    Y,
    j,
    X,
    le,
    me,
    De,
    re,
    ue,
    Re,
    Ce,
    Ee,
    $e
  ]);
  return n.loading ? /* @__PURE__ */ t("div", { style: { padding: 48, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: e.textSecondary }, children: /* @__PURE__ */ t(_e, { size: 32, style: { animation: "zg-spin 1.5s linear infinite", color: e.group } }) }) : /* @__PURE__ */ t(pt, { value: m, children: /* @__PURE__ */ o(
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
        border: `1px solid ${e.borderLight}`
      },
      children: [
        /* @__PURE__ */ t(yt, {}),
        /* @__PURE__ */ o("div", { style: { display: "flex", flex: 1, overflow: "hidden", position: "relative", background: e.surfaceAlt }, children: [
          /* @__PURE__ */ t(xt, {}),
          /* @__PURE__ */ t(wt, {})
        ] })
      ]
    }
  ) });
}
const Mt = [
  { label: "Yellow", value: "#FEF08A" },
  { label: "Green", value: "#BBF7D0" },
  { label: "Blue", value: "#BFDBFE" },
  { label: "Pink", value: "#FBCFE8" },
  { label: "Purple", value: "#E9D5FF" },
  { label: "Orange", value: "#FED7AA" },
  { label: "White", value: "#FFFFFF" }
], Xe = {
  FS: "Finish → Start (FS)",
  SS: "Start → Start (SS)",
  FF: "Finish → Finish (FF)",
  SF: "Start → Finish (SF)"
};
function Ft({
  isOpen: n,
  onClose: c,
  availableMilestones: p = [],
  initialDate: T,
  translations: h,
  onSaveNote: w
}) {
  const x = (g, Y) => h ? typeof h == "function" ? h(g, Y) : h[g] || Y : Y, [C, M] = P(""), [f, E] = P(""), [b, F] = P("#FEF08A"), [S, B] = P(""), [r, i] = P(""), [I, l] = P("FS"), [$, u] = P(!1), [D, s] = P([]), [y, N] = P(""), A = pe(null);
  ge(() => {
    n && (M(""), E(""), F("#FEF08A"), B(T ?? (/* @__PURE__ */ new Date()).toISOString().split("T")[0]), i(""), l("FS"), s([]), N(""));
  }, [n, T]);
  const ee = [
    ...p.map((g) => ({ id: g.id, name: g.name, type: "MILESTONE" }))
  ], k = async () => {
    if (!C.trim() && !f.trim()) {
      N(x("noteModal.errorEmpty", "Please provide a title or content for the note."));
      return;
    }
    N("");
    try {
      u(!0), await w({
        title: C || x("noteModal.untitled", "Untitled"),
        description: f,
        color: b,
        date: S ? `${S}T00:00:00` : (/* @__PURE__ */ new Date()).toISOString(),
        predecessorId: r,
        dependencyType: I,
        files: D
      }), c();
    } catch (g) {
      console.error(g), N(x("noteModal.errorSave", "Error creating note."));
    } finally {
      u(!1);
    }
  };
  return n ? /* @__PURE__ */ t("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.2)", backdropFilter: "blur(2px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 16 }, onClick: c, children: /* @__PURE__ */ o("div", { onClick: (g) => g.stopPropagation(), style: {
    width: 400,
    maxHeight: "90vh",
    background: b || "#FFFACD",
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
        onClick: c,
        style: { position: "absolute", top: 10, right: 10, width: 24, height: 24, borderRadius: "50%", background: "rgba(0,0,0,0.08)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14, color: "#3a3a3a" },
        onMouseEnter: (g) => g.currentTarget.style.background = "rgba(0,0,0,0.15)",
        onMouseLeave: (g) => g.currentTarget.style.background = "rgba(0,0,0,0.08)",
        children: "✕"
      }
    ),
    /* @__PURE__ */ o("div", { style: { padding: "28px 24px 20px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }, children: [
      y && /* @__PURE__ */ t("div", { style: { background: "rgba(255,0,0,0.1)", color: "#d32f2f", padding: "8px 12px", borderRadius: 6, fontSize: 12, marginBottom: 12, border: "1px solid rgba(255,0,0,0.2)" }, children: y }),
      /* @__PURE__ */ t(
        "input",
        {
          type: "text",
          value: C,
          onChange: (g) => M(g.target.value),
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
          onChange: (g) => E(g.target.value),
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
            ref: A,
            type: "file",
            multiple: !0,
            onChange: (g) => {
              const Y = g.target.files ? Array.from(g.target.files) : [];
              Y.length > 0 && s((V) => [...V, ...Y]), A.current && (A.current.value = "");
            },
            style: { display: "none" }
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            onClick: () => A.current?.click(),
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
            onMouseEnter: (g) => g.currentTarget.style.background = "rgba(0,0,0,0.08)",
            onMouseLeave: (g) => g.currentTarget.style.background = "rgba(0,0,0,0.05)",
            children: [
              /* @__PURE__ */ t(dt, { size: 13 }),
              x("noteModal.attachFiles", "Attach files")
            ]
          }
        ),
        D.length > 0 && /* @__PURE__ */ t("div", { style: { marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }, children: D.map((g, Y) => /* @__PURE__ */ o("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 8px",
          borderRadius: 4,
          background: "rgba(255,255,255,0.5)",
          fontSize: 11,
          color: "#3a3a3a"
        }, children: [
          /* @__PURE__ */ t(Fe, { size: 10, style: { flexShrink: 0 } }),
          /* @__PURE__ */ t("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: g.name }),
          /* @__PURE__ */ o("span", { style: { fontSize: 9, color: "rgba(58,58,58,0.4)", flexShrink: 0 }, children: [
            (g.size / 1024).toFixed(0),
            "KB"
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => s((V) => V.filter((q, H) => H !== Y)),
              style: { background: "none", border: "none", cursor: "pointer", padding: 2, display: "flex", color: "#ef4444" },
              title: x("noteModal.removeFile", "Remove"),
              children: /* @__PURE__ */ t(lt, { size: 12 })
            }
          )
        ] }, `file-${Y}`)) })
      ] }),
      /* @__PURE__ */ o("div", { style: { marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "date",
            value: S,
            onChange: (g) => B(g.target.value),
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
        /* @__PURE__ */ t("div", { style: { display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }, children: Mt.map((g) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => F(g.value),
            style: {
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: b === g.value ? "2px solid #1A3C30" : "1.5px solid rgba(0,0,0,0.12)",
              backgroundColor: g.value,
              cursor: "pointer",
              padding: 0,
              transform: b === g.value ? "scale(1.15)" : "scale(1)",
              transition: "all 0.15s",
              boxShadow: b === g.value ? "0 1px 4px rgba(0,0,0,0.15)" : "none"
            },
            title: g.label
          },
          g.value
        )) })
      ] }),
      ee.length > 0 && /* @__PURE__ */ o("div", { style: { marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(0,0,0,0.08)" }, children: [
        /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }, children: [
          /* @__PURE__ */ t(ct, { size: 14, style: { color: "rgba(58,58,58,0.5)" } }),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, color: "rgba(58,58,58,0.5)", fontWeight: 600 }, children: x("noteModal.dependency", "Dependency") })
        ] }),
        /* @__PURE__ */ o(
          "select",
          {
            value: r,
            onChange: (g) => i(g.target.value),
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
              p.length > 0 && /* @__PURE__ */ t("optgroup", { label: x("noteModal.milestones", "Milestones"), children: p.map((g) => /* @__PURE__ */ t("option", { value: g.id, children: g.name }, g.id)) })
            ]
          }
        ),
        r && /* @__PURE__ */ t(
          "select",
          {
            value: I,
            onChange: (g) => l(g.target.value),
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
            children: Object.keys(Xe).map((g) => /* @__PURE__ */ t("option", { value: g, children: Xe[g] }, g))
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { style: { display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 16, marginTop: 12, borderTop: "1px solid rgba(0,0,0,0.08)" }, children: [
        /* @__PURE__ */ t(
          "button",
          {
            onClick: c,
            style: { padding: "8px 16px", fontSize: 13, color: "#3a3a3a", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 8, cursor: "pointer" },
            children: x("noteModal.cancel", "Cancel")
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            onClick: k,
            disabled: $,
            style: { padding: "8px 20px", fontSize: 13, color: "#fff", background: "#1A3C30", border: "none", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, opacity: $ ? 0.5 : 1 },
            children: [
              $ && /* @__PURE__ */ t(_e, { size: 16, style: { animation: "zg-spin 1s linear infinite" } }),
              x("noteModal.create", "Create Note")
            ]
          }
        )
      ] })
    ] })
  ] }) }) : null;
}
const At = {
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
  Ft as NoteModal,
  $t as ProjectGantt,
  At as ptBR
};
