import { jsx as t, jsxs as s, Fragment as ie } from "react/jsx-runtime";
import { createContext as Ze, useContext as Qe, useRef as ue, useCallback as V, useEffect as le, useState as Y, useMemo as re } from "react";
import { Flag as we, Clock as ke, MessageCircle as et, Plus as tt, ChevronDown as Ce, ChevronRight as ze, Paperclip as je, AlertTriangle as ot, Eye as rt, Edit2 as nt, Trash2 as it, Loader2 as st } from "lucide-react";
const Xe = Ze(void 0);
function at({ children: o, value: g }) {
  return /* @__PURE__ */ t(Xe.Provider, { value: g, children: o });
}
function Se() {
  const o = Qe(Xe);
  if (!o)
    throw new Error("useGanttContext must be used within a GanttProvider");
  return o;
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
}, X = 50, ve = 32, dt = ve * 2, lt = 460, Q = 26, Ne = 28, Oe = 120, ct = 40, pt = 3.5, te = [
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
], Fe = {
  step: "Etapas",
  milestone: "Marcos",
  event: "Eventos",
  note: "Notas"
};
function ut() {
  const {
    props: o,
    t: g,
    viewMode: d,
    setViewMode: N,
    visibleTypes: f,
    setVisibleTypes: b,
    newActionOpen: I,
    setNewActionOpen: T,
    newActionRef: S
  } = Se(), { projectName: D, onAddNewStage: E, onAddMilestone: k, onAddEvent: w, onAddNote: p } = o, x = (c) => {
    b((a) => {
      const l = new Set(a);
      return l.has(c) ? l.delete(c) : l.add(c), l;
    });
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: "flex items-center justify-between px-6 py-5",
      style: { borderBottom: `1px solid ${e.border}`, background: `linear-gradient(180deg, ${e.headerBg} 0%, ${e.surface} 100%)` },
      children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ t("h3", { className: "text-sm font-bold uppercase tracking-widest", style: { color: e.textTitle }, children: g("planning.gantt", "PLANEJAMENTO DA OBRA") }),
            /* @__PURE__ */ t("div", { className: "h-[2.5px] w-16 mt-1.5 rounded-full", style: { background: `linear-gradient(90deg, ${e.group}, ${e.milestoneRing})` } })
          ] }),
          D && /* @__PURE__ */ t(
            "span",
            {
              className: "text-xs font-medium px-3 py-1 rounded-full",
              style: { color: e.textSecondary, background: e.surface, border: `1px solid ${e.border}` },
              children: D
            }
          )
        ] }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ t("div", { className: "flex p-1 rounded-lg", style: { background: "rgba(122,122,122,0.07)", border: `1px solid ${e.borderLight}` }, children: ["month", "year"].map((c) => /* @__PURE__ */ t(
            "button",
            {
              onClick: () => N(c),
              className: "px-5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200",
              style: d === c ? { background: e.surface, color: e.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { color: e.textSecondary },
              children: c === "month" ? g("charts.gantt.month", "Mês") : g("charts.gantt.year", "Ano")
            },
            c
          )) }),
          /* @__PURE__ */ t("div", { className: "flex p-1 rounded-lg gap-0.5", style: { background: "rgba(122,122,122,0.07)", border: `1px solid ${e.borderLight}` }, children: [
            { type: "step", label: "Etapas", icon: /* @__PURE__ */ t("div", { className: "w-2.5 h-2.5 rounded-sm", style: { background: te[0].bar, border: `1px solid ${te[0].barBorder}` } }) },
            { type: "milestone", label: "Marcos", icon: /* @__PURE__ */ t(we, { size: 11, style: { color: e.milestone } }) },
            { type: "event", label: "Eventos", icon: /* @__PURE__ */ t(ke, { size: 11, style: { color: e.event } }) },
            { type: "note", label: "Notas", icon: /* @__PURE__ */ t(et, { size: 11, style: { color: e.note } }) }
          ].map((c) => {
            const a = f.has(c.type);
            return /* @__PURE__ */ s(
              "button",
              {
                onClick: () => x(c.type),
                className: "flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-md transition-all duration-200",
                style: a ? { background: e.surface, color: e.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { color: e.textMuted, opacity: 0.5 },
                children: [
                  c.icon,
                  /* @__PURE__ */ t("span", { children: c.label })
                ]
              },
              c.type
            );
          }) }),
          E && /* @__PURE__ */ s("div", { ref: S, style: { position: "relative" }, children: [
            /* @__PURE__ */ s(
              "button",
              {
                onClick: () => T((c) => !c),
                className: "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
                style: { background: `linear-gradient(135deg, ${e.group}, ${e.group}dd)` },
                children: [
                  /* @__PURE__ */ t(tt, { size: 16 }),
                  /* @__PURE__ */ t("span", { children: g("charts.gantt.newAction", "Nova Ação") }),
                  /* @__PURE__ */ t(Ce, { size: 14, style: { opacity: 0.7, transform: I ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
                ]
              }
            ),
            I && /* @__PURE__ */ t(
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
                    label: "Etapa",
                    icon: /* @__PURE__ */ t("div", { style: { width: 14, height: 14, borderRadius: 3, background: te[0].bar, border: `1.5px solid ${te[0].barBorder}`, flexShrink: 0 } }),
                    action: () => {
                      E(), T(!1);
                    }
                  },
                  {
                    label: "Marco",
                    icon: /* @__PURE__ */ t("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${e.milestoneRing}30`, border: `1.5px solid ${e.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(we, { size: 11, style: { color: e.milestone } }) }),
                    action: () => {
                      k?.(), T(!1);
                    }
                  },
                  {
                    label: "Evento",
                    icon: /* @__PURE__ */ t("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${e.event}18`, border: `1.5px solid ${e.event}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(ke, { size: 11, style: { color: e.event } }) }),
                    action: () => {
                      w?.(), T(!1);
                    }
                  },
                  {
                    label: "Nota",
                    icon: /* @__PURE__ */ t("div", { style: { width: 16, height: 20, background: e.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ t("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } }) }),
                    action: () => {
                      p?.(), T(!1);
                    }
                  }
                ].map((c) => /* @__PURE__ */ s(
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
                    onMouseEnter: (a) => {
                      a.currentTarget.style.background = e.headerBg;
                    },
                    onMouseLeave: (a) => {
                      a.currentTarget.style.background = "transparent";
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
const _e = 864e5, q = (o, g) => new Date(o.getTime() + g * _e), he = (o, g) => Math.round((g.getTime() - o.getTime()) / _e), Pe = (o) => new Date(o.getFullYear(), o.getMonth(), 1), Be = (o) => new Date(o.getFullYear(), o.getMonth() + 1, 0), ee = (o) => `${String(o.getDate()).padStart(2, "0")}/${String(o.getMonth() + 1).padStart(2, "0")}/${o.getFullYear()}`, Ye = {
  0: "JANEIRO",
  1: "FEVEREIRO",
  2: "MARÇO",
  3: "ABRIL",
  4: "MAIO",
  5: "JUNHO",
  6: "JULHO",
  7: "AGOSTO",
  8: "SETEMBRO",
  9: "OUTUBRO",
  10: "NOVEMBRO",
  11: "DEZEMBRO"
};
function ht() {
  const {
    props: o,
    t: g,
    displayRows: d,
    leftBodyRef: N,
    handleLeftScroll: f,
    toggleProject: b,
    toggleGroup: I,
    hoveredTaskId: T,
    setHoveredTaskId: S,
    selectedTaskId: D,
    setSelectedTaskId: E,
    delayedIds: k,
    criticalIds: w,
    relatedIds: p
  } = Se(), x = 540, c = (a) => ({
    id: a.id,
    name: a.name,
    start: a.start,
    end: a.end,
    type: a.originalType === "step" ? "task" : "milestone",
    progress: a.progress
  });
  return /* @__PURE__ */ s("div", { style: { width: lt, flexShrink: 0, borderRight: `1px solid ${e.border}` }, children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: "flex items-center px-4",
        style: { height: dt, background: e.headerBg, borderBottom: `1px solid ${e.border}` },
        children: [
          /* @__PURE__ */ t("div", { className: "flex-1 text-[11px] font-bold uppercase tracking-wider", style: { color: e.textSecondary }, children: g("charts.gantt.stepName", "NOME DA ETAPA") }),
          /* @__PURE__ */ t("div", { className: "w-[80px] text-[11px] font-bold uppercase tracking-wider text-center", style: { color: e.textSecondary }, children: g("charts.gantt.start", "INÍCIO") }),
          /* @__PURE__ */ t("div", { className: "w-[80px] text-[11px] font-bold uppercase tracking-wider text-center", style: { color: e.textSecondary }, children: g("charts.gantt.end", "FIM") })
        ]
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        ref: N,
        onScroll: f,
        className: "overflow-y-auto overflow-x-hidden",
        style: { maxHeight: x, scrollbarWidth: "none" },
        children: d.map((a) => {
          if (a.kind === "projectHeader")
            return /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center px-4 cursor-pointer select-none",
                style: { height: X, borderBottom: `1.5px solid ${e.group}44`, background: `${e.group}0E` },
                onClick: () => b(a.projectId),
                children: /* @__PURE__ */ s("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                  a.collapsed ? /* @__PURE__ */ t(ze, { size: 15, style: { color: e.group, flexShrink: 0 } }) : /* @__PURE__ */ t(Ce, { size: 15, style: { color: e.group, flexShrink: 0 } }),
                  /* @__PURE__ */ t("span", { className: "text-[12px] font-bold uppercase tracking-widest truncate", style: { color: e.group }, children: a.projectTitle })
                ] })
              },
              `ph-${a.projectId}`
            );
          if (a.kind === "group") {
            const z = a.projectId ? `${a.projectId}-${a.groupType}` : a.groupType;
            return /* @__PURE__ */ t(
              "div",
              {
                className: "flex items-center px-4 cursor-pointer select-none",
                style: { height: X, borderBottom: `1px solid ${e.border}`, background: e.headerBg },
                onClick: () => I(z),
                children: /* @__PURE__ */ s("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                  a.collapsed ? /* @__PURE__ */ t(ze, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ t(Ce, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }),
                  /* @__PURE__ */ t("span", { className: "text-[11px] font-bold uppercase tracking-wider", style: { color: e.textTitle }, children: a.label }),
                  /* @__PURE__ */ t("span", { className: "text-[10px] font-semibold px-1.5 py-0.5 rounded-full", style: { background: "rgba(0,0,0,0.06)", color: e.textSecondary }, children: a.count })
                ] })
              },
              `g-${z}`
            );
          }
          const l = a.task, u = D === l.id, h = T === l.id, $ = l.originalType !== "step", r = k.has(l.id), v = w.has(l.id), B = D !== null && l.id !== D && !p.has(l.id), A = D !== null && p.has(l.id), W = r ? "#FFF5F5" : u ? e.groupLight : A ? `${e.groupLight}99` : h ? e.pageBg : e.surface;
          return /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center px-4 cursor-pointer transition-colors duration-150",
              style: {
                height: X,
                borderBottom: `1px solid ${e.borderLight}`,
                background: W,
                borderLeft: u ? `3px solid ${e.group}` : A ? `3px solid ${e.group}66` : v ? `3px solid ${e.today}` : void 0,
                opacity: B ? 0.3 : 1,
                transition: "opacity 0.18s, background 0.15s"
              },
              onClick: () => E((z) => z === l.id ? null : l.id),
              onDoubleClick: () => o.onTaskClick?.(c(l)),
              onMouseEnter: () => S(l.id),
              onMouseLeave: () => S(null),
              children: [
                /* @__PURE__ */ s("div", { className: "flex-1 flex items-center gap-2 min-w-0 pr-2", children: [
                  l.originalType === "step" && /* @__PURE__ */ t("div", { className: "flex-shrink-0 rounded", style: { width: 14, height: 14, background: te[l.colorIdx ?? 0].bar, border: `1.5px solid ${te[l.colorIdx ?? 0].barBorder}` } }),
                  l.originalType === "milestone" && /* @__PURE__ */ t("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 22, height: 22, background: `${e.milestoneRing}30`, border: `1.5px solid ${e.milestoneRing}` }, children: /* @__PURE__ */ t(we, { size: 11, style: { color: e.milestone } }) }),
                  l.originalType === "event" && /* @__PURE__ */ t("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 22, height: 22, background: `${e.event}18`, border: `1.5px solid ${e.event}55` }, children: /* @__PURE__ */ t(ke, { size: 11, style: { color: e.event } }) }),
                  l.originalType === "note" && /* @__PURE__ */ t("div", { className: "flex-shrink-0", style: { width: 16, height: 20, background: l.noteColor || e.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible" }, children: /* @__PURE__ */ t("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } }) }),
                  /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col min-w-0", children: [
                    /* @__PURE__ */ t(
                      "span",
                      {
                        className: "text-[13px] truncate font-medium leading-tight",
                        style: { color: u ? e.group : r ? e.today : e.textPrimary },
                        children: l.name
                      }
                    ),
                    l.originalType === "note" && l.noteProjectTitle && /* @__PURE__ */ t("span", { className: "text-[10px] truncate", style: { color: e.textSecondary, marginTop: 1 }, children: l.noteProjectTitle })
                  ] }),
                  l.originalType === "note" && (l.filesCount || 0) > 0 && /* @__PURE__ */ s("span", { className: "flex-shrink-0 flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full", style: { color: e.textSecondary, background: e.headerBg, border: `1px solid ${e.borderLight}` }, children: [
                    /* @__PURE__ */ t(je, { size: 9 }),
                    l.filesCount
                  ] }),
                  r && /* @__PURE__ */ t(ot, { size: 12, className: "flex-shrink-0", style: { color: e.today } })
                ] }),
                /* @__PURE__ */ t("div", { className: "w-[80px] text-[11px] font-medium text-center tabular-nums", style: { color: r ? e.today : e.textMuted }, children: ee(l.start) }),
                /* @__PURE__ */ t("div", { className: "w-[80px] text-[11px] font-medium text-center tabular-nums", style: { color: r ? e.today : e.textMuted }, children: $ ? "—" : ee(l.end) })
              ]
            },
            l.id
          );
        })
      }
    )
  ] });
}
function gt(o, g) {
  const d = g === "day" ? ct : pt, N = (x, c) => {
    const a = [], l = (/* @__PURE__ */ new Date()).toDateString();
    let u = -1;
    for (let h = 0; h < c; h++) {
      const $ = q(x, h), r = $.toDateString() === l;
      r && (u = h), a.push({
        date: $,
        isToday: r,
        isWeekend: $.getDay() === 0 || $.getDay() === 6
      });
    }
    return { daysArr: a, todayIndex: u };
  };
  if (o.length === 0) {
    const x = /* @__PURE__ */ new Date(), c = Pe(x), a = Be(x), l = he(c, a) + 1, { daysArr: u, todayIndex: h } = N(c, l);
    return {
      start: c,
      end: a,
      totalDays: l,
      dayWidth: d,
      totalWidth: l * d,
      months: [{ date: c, label: `${Ye[c.getMonth()]} DE ${c.getFullYear()}`, startDay: 0, days: l, width: l * d }],
      years: [{ label: c.getFullYear().toString(), width: l * d }],
      days: u,
      todayIndex: h
    };
  }
  let f = new Date(o[0].start), b = new Date(o[0].end);
  o.forEach((x) => {
    x.start < f && (f = new Date(x.start)), x.end > b && (b = new Date(x.end));
  });
  const I = Pe(q(f, -14)), T = Be(q(b, 14)), S = he(I, T) + 1, D = [];
  let E = new Date(I);
  for (; E <= T; ) {
    const x = Be(E), c = x > T ? T : x, a = he(I, E), l = he(E, c) + 1;
    D.push({
      date: new Date(E),
      label: `${Ye[E.getMonth()]} DE ${E.getFullYear()}`,
      startDay: a,
      days: l,
      width: l * d
    }), E = new Date(E.getFullYear(), E.getMonth() + 1, 1);
  }
  const { daysArr: k, todayIndex: w } = N(I, S), p = [];
  if (g === "month") {
    let x = "", c = 0;
    for (const a of D) {
      const l = a.date.getFullYear().toString();
      l !== x ? (x && p.push({ label: x, width: c * d }), x = l, c = a.days) : c += a.days;
    }
    x && p.push({ label: x, width: c * d });
  }
  return { start: I, end: T, totalDays: S, dayWidth: d, totalWidth: S * d, months: D, years: p, days: k, todayIndex: w };
}
function ne(o, g) {
  return he(g.start, o) * g.dayWidth;
}
function ft({
  task: o,
  x: g,
  y: d,
  w: N,
  progW: f,
  isHov: b,
  isDrag: I,
  isResize: T,
  isCritical: S,
  isDelayed: D,
  isConnectTarget: E,
  showDots: k,
  isBarDimmed: w,
  isBarHighlighted: p,
  commonEvents: x,
  handleResizeMouseDown: c,
  handleConnectDotMouseDown: a
}) {
  const { timeline: l, viewMode: u } = Se();
  if (o.originalType === "step") {
    const h = te[o.colorIdx ?? 0], $ = d + (X - Q) / 2, r = !!(o.previsionStart && o.previsionEnd), v = r ? ne(o.previsionStart, l) : 0, B = r ? Math.max(ne(o.previsionEnd, l) - v, u === "month" ? l.dayWidth : 6) : 0, A = $ + Q + 3;
    return /* @__PURE__ */ s(ie, { children: [
      r && /* @__PURE__ */ t(
        "div",
        {
          title: `Previsto: ${ee(o.previsionStart)} → ${ee(o.previsionEnd)}`,
          style: {
            position: "absolute",
            left: v,
            top: A,
            width: B,
            height: 5,
            borderRadius: 3,
            background: `${h.progress}33`,
            border: `1.5px solid ${h.progress}66`,
            boxShadow: `inset 0 0 0 1px ${h.progress}22`,
            pointerEvents: "none",
            zIndex: 5
          }
        }
      ),
      /* @__PURE__ */ s(
        "div",
        {
          "data-task-id": o.id,
          ...x,
          style: {
            position: "absolute",
            left: g,
            top: $,
            width: N,
            height: Q,
            borderRadius: Q / 2,
            background: D ? "linear-gradient(135deg, #fdd, #fee)" : h.bar,
            border: S ? `2px solid ${e.today}` : D ? `1.5px solid ${e.today}88` : `1.5px solid ${h.barBorder}`,
            cursor: I || T ? "grabbing" : "grab",
            zIndex: b || E ? 20 : 10,
            boxShadow: E ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : S ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : p && !b ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : b ? `0 3px 12px ${h.progress}22` : "none",
            transform: b ? "scaleY(1.06)" : "scaleY(1)",
            opacity: w ? 0.15 : 1,
            transition: I || T ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
            overflow: "visible"
          },
          children: [
            /* @__PURE__ */ s("div", { style: { position: "absolute", left: 0, top: 0, width: N, height: "100%", borderRadius: Q / 2, overflow: "hidden", pointerEvents: "none" }, children: [
              /* @__PURE__ */ t("div", { style: {
                position: "absolute",
                left: 0,
                top: 0,
                width: f,
                height: "100%",
                background: D ? `linear-gradient(90deg, ${e.today}cc, ${e.today}88)` : `linear-gradient(90deg, ${h.progress}, ${h.progress}cc)`,
                borderRadius: `${Q / 2}px 0 0 ${Q / 2}px`,
                transition: I || T ? "none" : "width 0.3s"
              } }),
              N > 50 && /* @__PURE__ */ s("span", { style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: o.progress > 50 ? "#fff" : D ? e.today : h.progress,
                zIndex: 1,
                pointerEvents: "none"
              }, children: [
                Math.round(o.progress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { onMouseDown: (W) => c(W, o, "left"), style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${Q / 2}px 0 0 ${Q / 2}px` } }),
            /* @__PURE__ */ t("div", { onMouseDown: (W) => c(W, o, "right"), style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${Q / 2}px ${Q / 2}px 0` } }),
            k && /* @__PURE__ */ s(ie, { children: [
              /* @__PURE__ */ t("div", { "data-task-id": o.id, onMouseDown: (W) => a(W, o, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
              /* @__PURE__ */ t("div", { "data-task-id": o.id, onMouseDown: (W) => a(W, o, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
            ] })
          ]
        }
      )
    ] });
  }
  if (o.originalType === "milestone") {
    const h = d + (X - Ne) / 2;
    return /* @__PURE__ */ s(
      "div",
      {
        "data-task-id": o.id,
        ...x,
        style: {
          position: "absolute",
          left: g - 6,
          top: h,
          height: Ne,
          minWidth: Oe,
          borderRadius: Ne / 2,
          background: S ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #e8f5ee, #f0f8f4)",
          border: E ? `2px solid ${e.group}` : S ? `2px solid ${e.today}` : `1.5px solid ${e.milestoneRing}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: I ? "grabbing" : "grab",
          zIndex: b || E ? 20 : 10,
          boxShadow: E ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : S ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : p && !b ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : b ? `0 3px 12px ${e.milestone}22` : "0 1px 3px rgba(0,0,0,0.06)",
          opacity: w ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: b ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ t("div", { style: { width: 20, height: 20, borderRadius: "50%", background: S ? e.today : e.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(we, { size: 11, color: "#fff", strokeWidth: 2.5 }) }),
          /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: S ? e.today : e.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: o.name }),
          o.progress >= 100 && /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 700, color: "#fff", background: e.milestoneRing, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
          k && /* @__PURE__ */ s(ie, { children: [
            /* @__PURE__ */ t("div", { "data-task-id": o.id, onMouseDown: ($) => a($, o, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ t("div", { "data-task-id": o.id, onMouseDown: ($) => a($, o, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (o.originalType === "event") {
    const $ = d + (X - 22) / 2;
    return /* @__PURE__ */ s(
      "div",
      {
        "data-task-id": o.id,
        ...x,
        style: {
          position: "absolute",
          left: g - 22 / 2,
          top: $,
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: S ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #fff7ed, #ffedd5)",
          border: E ? `2px solid ${e.group}` : S ? `2px solid ${e.today}` : `1.5px solid ${e.event}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: I ? "grabbing" : "grab",
          zIndex: b || E ? 20 : 10,
          boxShadow: E ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : S ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : p && !b ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : b ? `0 3px 12px ${e.event}33` : "0 1px 3px rgba(0,0,0,0.06)",
          opacity: w ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: b ? "scale(1.15)" : "none",
          overflow: "visible"
        },
        children: [
          /* @__PURE__ */ t("div", { style: { width: 14, height: 14, borderRadius: "50%", background: S ? e.today : e.event, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ t(ke, { size: 8, color: "#fff", strokeWidth: 3 }) }),
          o.progress >= 100 && /* @__PURE__ */ t("div", { style: { position: "absolute", top: -5, right: -12, background: e.event, color: "#fff", fontSize: 8, fontWeight: 700, padding: "1px 4px", borderRadius: 4 }, children: "✓" }),
          /* @__PURE__ */ t("div", { style: {
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: 4,
            background: "rgba(255,255,255,0.9)",
            padding: "2px 6px",
            borderRadius: 4,
            border: `1px solid ${e.borderLight}`,
            fontSize: 9,
            fontWeight: 600,
            color: S ? e.today : e.event,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            opacity: b ? 1 : 0,
            transition: "opacity 0.15s"
          }, children: o.name }),
          k && /* @__PURE__ */ s(ie, { children: [
            /* @__PURE__ */ t("div", { "data-task-id": o.id, onMouseDown: (r) => a(r, o, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ t("div", { "data-task-id": o.id, onMouseDown: (r) => a(r, o, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  if (o.originalType === "note") {
    const r = d + (X - 44) / 2, v = o.noteColor || e.note;
    return /* @__PURE__ */ s(
      "div",
      {
        "data-task-id": o.id,
        ...x,
        style: {
          position: "absolute",
          left: g - 36 / 2,
          top: r,
          width: 36,
          height: 44,
          background: v,
          borderRadius: 2,
          cursor: I ? "grabbing" : "grab",
          zIndex: b || E ? 20 : 10,
          boxShadow: E ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : p && !b ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : b ? "3px 4px 12px rgba(0,0,0,0.2)" : "1px 2px 5px rgba(0,0,0,0.15)",
          opacity: w ? 0.2 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: b ? "rotate(-2deg) scale(1.05)" : "none",
          overflow: "visible",
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(0,0,0,0.04)"
        },
        children: [
          /* @__PURE__ */ t("div", { style: { position: "absolute", top: -5, left: "50%", transform: "translateX(-50%)", width: 18, height: 6, background: "rgba(255,255,255,0.6)", borderRadius: 1, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" } }),
          /* @__PURE__ */ s("div", { style: { padding: "6px 4px 2px", flex: 1, overflow: "hidden" }, children: [
            /* @__PURE__ */ t("div", { style: { width: "80%", height: 2, background: "rgba(0,0,0,0.1)", borderRadius: 1, marginBottom: 3 } }),
            /* @__PURE__ */ t("div", { style: { width: "60%", height: 2, background: "rgba(0,0,0,0.1)", borderRadius: 1, marginBottom: 3 } }),
            /* @__PURE__ */ t("div", { style: { width: "90%", height: 2, background: "rgba(0,0,0,0.1)", borderRadius: 1 } })
          ] }),
          (o.filesCount || 0) > 0 && /* @__PURE__ */ t("div", { style: { position: "absolute", bottom: -5, right: -5, background: e.headerBg, color: e.textSecondary, borderRadius: "50%", border: `1px solid ${e.borderLight}`, width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", zIndex: 2 }, children: /* @__PURE__ */ t(je, { size: 8 }) }),
          /* @__PURE__ */ t("div", { style: {
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: 6,
            background: "rgba(255,255,255,0.95)",
            padding: "3px 8px",
            borderRadius: 4,
            border: `1px solid ${e.borderLight}`,
            fontSize: 10,
            fontWeight: 500,
            color: e.textPrimary,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            opacity: b ? 1 : 0,
            transition: "opacity 0.15s",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
          }, children: o.name }),
          k && /* @__PURE__ */ s(ie, { children: [
            /* @__PURE__ */ t("div", { "data-task-id": o.id, onMouseDown: (B) => a(B, o, "left"), style: { position: "absolute", left: -10, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }),
            /* @__PURE__ */ t("div", { "data-task-id": o.id, onMouseDown: (B) => a(B, o, "right"), style: { position: "absolute", right: -10, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } })
          ] })
        ]
      }
    );
  }
  return null;
}
function xt() {
  const {
    arrows: o,
    hoveredTaskId: g,
    selectedTaskId: d,
    relatedIds: N
  } = Se();
  return /* @__PURE__ */ t(ie, { children: o.map((f, b) => {
    const I = g === f.predId || g === f.succId, T = !d || f.predId === d || f.succId === d || N.has(f.predId) || N.has(f.succId), S = d !== null && T, D = I ? e.arrowHover : S ? e.group : e.arrow;
    return /* @__PURE__ */ s("g", { style: { opacity: T ? S ? 1 : void 0 : 0.08, transition: "opacity 0.18s" }, children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: f.path,
          fill: "none",
          stroke: D,
          strokeWidth: S ? 2.5 : I ? 2 : 1.5,
          style: { transition: "stroke 0.2s, stroke-width 0.2s" }
        }
      ),
      /* @__PURE__ */ t(
        "polygon",
        {
          points: `${f.headX},${f.headY} ${f.headX - 6},${f.headY - 4} ${f.headX - 6},${f.headY + 4}`,
          fill: D,
          style: { transition: "fill 0.2s" }
        }
      )
    ] }, b);
  }) });
}
const Ae = (o) => ({
  id: o.id,
  name: o.name,
  start: o.start,
  end: o.end,
  type: o.originalType === "step" ? "task" : o.originalType,
  progress: o.progress
}), be = (o, g) => {
  switch (o) {
    case "step":
      return /* @__PURE__ */ t("div", { style: { width: 12, height: 12, borderRadius: 2, background: te[g ?? 0].bar, border: `1.5px solid ${te[g ?? 0].barBorder}`, flexShrink: 0 } });
    case "milestone":
      return /* @__PURE__ */ t("div", { style: { width: 16, height: 16, borderRadius: "50%", background: e.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(we, { size: 8, color: "#fff" }) });
    case "event":
      return /* @__PURE__ */ t("div", { style: { width: 16, height: 16, borderRadius: "50%", background: e.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ t(ke, { size: 8, color: "#fff" }) });
    case "note":
      return /* @__PURE__ */ t("div", { style: { width: 12, height: 14, background: e.note, borderRadius: 2, boxShadow: "1px 1px 2px rgba(0,0,0,0.1)", flexShrink: 0 } });
    default:
      return null;
  }
};
function yt() {
  const {
    props: o,
    viewMode: g,
    timeline: d,
    displayRows: N,
    dragState: f,
    resizeState: b,
    connectState: I,
    pendingConnection: T,
    setPendingConnection: S,
    depModalType: D,
    setDepModalType: E,
    depModalLag: k,
    setDepModalLag: w,
    depCreating: p,
    deletingDepId: x,
    setDeletingDepId: c,
    chartMenu: a,
    setChartMenu: l,
    rightBodyRef: u,
    timeHeaderRef: h,
    handleChartMouseDown: $,
    handleChartWheel: r,
    openChartMenu: v,
    hoveredTaskId: B,
    setHoveredTaskId: A,
    selectedTaskId: W,
    setSelectedTaskId: z,
    tooltip: R,
    setTooltip: H,
    popupState: _,
    setPopupState: O,
    criticalIds: se,
    delayedIds: ge,
    relatedIds: fe,
    handleBarMouseDown: xe,
    handleResizeMouseDown: Ie,
    handleConnectDotMouseDown: ye,
    handleCreateDependency: Te
  } = Se(), {
    translations: ae,
    onViewStage: me,
    onEditStage: De,
    onDeleteStage: j,
    onDeleteDependency: P,
    onAddNewStage: $e,
    onAddMilestone: Re,
    onAddEvent: Me,
    onAddNote: Ee
  } = o, J = (y, n) => ae ? typeof ae == "function" ? ae(y, n) : ae[y] || n : n, ce = (y, n) => Math.round((n.getTime() - y.getTime()) / 864e5) + 1, oe = Math.max(N.length * X, 400), pe = () => O({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  return /* @__PURE__ */ s(
    "div",
    {
      className: "flex-1 w-full bg-[#FAFAFA] flex flex-col relative overflow-hidden",
      style: { borderLeft: `1px solid ${e.borderLight}` },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            ref: h,
            style: {
              height: ve * 2,
              background: e.headerBg,
              borderBottom: `1px solid ${e.borderLight}`,
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
              boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
            },
            onWheel: r,
            children: /* @__PURE__ */ s("div", { style: { width: d.totalWidth, height: "100%", position: "relative" }, children: [
              /* @__PURE__ */ s("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: ve, display: "flex" }, children: [
                g === "day" && d.months.map((y, n) => /* @__PURE__ */ t("div", { style: { width: y.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 700, color: e.textTitle, letterSpacing: "0.02em" }, children: y.label }) }, n)),
                g === "month" && d.years?.map((y, n) => /* @__PURE__ */ t("div", { style: { width: y.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 }, children: /* @__PURE__ */ t("span", { style: { fontSize: 13, fontWeight: 700, color: e.textTitle, letterSpacing: "0.02em" }, children: y.label }) }, n))
              ] }),
              /* @__PURE__ */ s("div", { style: { position: "absolute", top: ve, left: 0, right: 0, height: ve, display: "flex" }, children: [
                g === "day" && d.days.map((y, n) => {
                  const i = y.isToday;
                  return /* @__PURE__ */ t("div", { style: { width: d.dayWidth, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: i ? 800 : 500, color: i ? e.today : e.textSecondary, letterSpacing: "-0.03em" }, children: y.date.getDate().toString().padStart(2, "0") }) }, n);
                }),
                g === "month" && d.months.map((y, n) => /* @__PURE__ */ t("div", { style: { width: y.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ t("span", { style: { fontSize: 11, fontWeight: 600, color: e.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em" }, children: y.label.substring(0, 3) }) }, n))
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            ref: u,
            className: "flex-1 overflow-auto bg-white gantt-scroll",
            onMouseDown: $,
            onWheel: r,
            onContextMenu: v,
            style: { position: "relative" },
            children: /* @__PURE__ */ s("div", { style: { width: d.totalWidth, height: oe, position: "relative" }, children: [
              /* @__PURE__ */ s("svg", { width: d.totalWidth, height: oe, style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" }, children: [
                /* @__PURE__ */ s("defs", { children: [
                  /* @__PURE__ */ t("pattern", { id: "gantt-y-lines", x: "0", y: "0", width: d.dayWidth, height: X, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ t("line", { x1: d.dayWidth, y1: "0", x2: d.dayWidth, y2: X, stroke: e.border, strokeWidth: "1", strokeDasharray: "4 4", opacity: "0.4" }) }),
                  /* @__PURE__ */ t("pattern", { id: "gantt-x-lines", x: "0", y: "0", width: d.dayWidth, height: X, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ t("line", { x1: "0", y1: X, x2: d.dayWidth, y2: X, stroke: e.borderLight, strokeWidth: "1" }) })
                ] }),
                /* @__PURE__ */ t("rect", { width: "100%", height: "100%", fill: "url(#gantt-x-lines)" }),
                /* @__PURE__ */ t("rect", { width: "100%", height: "100%", fill: "url(#gantt-y-lines)" }),
                g === "day" && d.days.map((y, n) => y.isWeekend ? /* @__PURE__ */ t("rect", { x: n * d.dayWidth, y: 0, width: d.dayWidth, height: oe, fill: e.weekendBg, opacity: 0.6 }, `we-${n}`) : null),
                g === "month" && d.days.map((y, n) => y.isWeekend ? /* @__PURE__ */ t("rect", { x: n * d.dayWidth, y: 0, width: d.dayWidth, height: oe, fill: e.weekendBg, opacity: 0.3 }, `wem-${n}`) : null),
                d.todayIndex >= 0 && /* @__PURE__ */ s("g", { children: [
                  /* @__PURE__ */ t("rect", { x: d.todayIndex * d.dayWidth, y: 0, width: d.dayWidth, height: oe, fill: e.todayBg }),
                  /* @__PURE__ */ t("line", { x1: (d.todayIndex + 0.5) * d.dayWidth, y1: 0, x2: (d.todayIndex + 0.5) * d.dayWidth, y2: oe, stroke: e.today, strokeWidth: 2, strokeDasharray: "4 4", opacity: 0.3 })
                ] })
              ] }),
              N.map((y, n) => y.kind === "group" || y.kind === "projectHeader" ? /* @__PURE__ */ t("div", { style: {
                position: "absolute",
                left: 0,
                top: n * X,
                width: "100%",
                height: X,
                background: y.kind === "projectHeader" ? e.headerBg : `${e.groupLight}15`,
                borderBottom: `1px solid ${e.borderLight}`,
                pointerEvents: "none"
              } }, `bg-${n}`) : null),
              /* @__PURE__ */ s("div", { style: { position: "absolute", inset: 0 }, children: [
                N.map((y, n) => {
                  if (y.kind !== "task") return null;
                  const i = y.task, m = f?.task.id === i.id, L = b?.task.id === i.id, C = m || L && b.edge === "left" ? q(i.start, m ? f.offsetDays : b.offsetDays) : i.start, M = m || L && b.edge === "right" ? q(i.end, m ? f.offsetDays : b.offsetDays) : i.end, F = i.originalType !== "step";
                  let de = ne(C, d), U = 0, Z = 0;
                  F || (U = Math.max(ne(M, d) - de, d.dayWidth), Z = U * (i.progress / 100));
                  const We = B === i.id, Le = W === i.id, Ge = ge.has(i.id), He = se.has(i.id), Ue = !!W && !Le && !fe.has(i.id), Ve = Le || !!W && fe.has(i.id), Je = I?.hoverTargetId === i.id, Ke = We || Le, qe = n * X;
                  return /* @__PURE__ */ t(
                    ft,
                    {
                      task: i,
                      x: de,
                      y: qe,
                      w: U,
                      progW: Z,
                      isHov: We,
                      isDrag: m,
                      isResize: L,
                      isCritical: He,
                      isDelayed: Ge,
                      isConnectTarget: Je,
                      showDots: Ke,
                      isBarDimmed: Ue,
                      isBarHighlighted: Ve,
                      commonEvents: {
                        onMouseEnter: (K) => {
                          A(i.id), !f && !b && H({ task: i, x: K.clientX, y: K.clientY });
                        },
                        onMouseMove: (K) => {
                          B === i.id && !f && !b && H({ task: i, x: K.clientX, y: K.clientY });
                        },
                        onMouseLeave: () => {
                          A(null), H(null);
                        },
                        onClick: (K) => {
                          K.stopPropagation(), z(i.id), K.detail === 2 && me?.(Ae(i)), O(!_.isOpen || _.task?.id !== i.id ? {
                            isOpen: !0,
                            position: { x: K.clientX, y: K.clientY },
                            task: i
                          } : { isOpen: !1, position: { x: 0, y: 0 }, task: null });
                        },
                        onMouseDown: (K) => xe(K, i)
                      },
                      handleResizeMouseDown: Ie,
                      handleConnectDotMouseDown: ye
                    },
                    i.id
                  );
                }),
                /* @__PURE__ */ t("svg", { width: d.totalWidth, height: oe, style: { position: "absolute", inset: 0, pointerEvents: "none" }, children: /* @__PURE__ */ t(xt, {}) }),
                R && !f && /* @__PURE__ */ t("div", { style: { position: "fixed", left: R.x + 16, top: R.y - 10, zIndex: 9999, pointerEvents: "none" }, children: /* @__PURE__ */ s(
                  "div",
                  {
                    className: "rounded-xl px-4 py-3 min-w-[220px] max-w-[340px] backdrop-blur-sm",
                    style: { background: `${e.surface}f5`, border: `1px solid ${e.borderLight}`, boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)" },
                    children: [
                      /* @__PURE__ */ s("div", { className: "flex items-center gap-2 mb-1.5", children: [
                        be(R.task.originalType, R.task.colorIdx),
                        /* @__PURE__ */ t("span", { className: "text-xs font-bold truncate", style: { color: e.textTitle }, children: R.task.name })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "flex flex-col gap-1 text-[11px]", style: { color: e.textSecondary }, children: R.task.originalType === "step" ? /* @__PURE__ */ s(ie, { children: [
                        R.task.previsionStart && R.task.previsionEnd && /* @__PURE__ */ s("div", { style: { background: `${e.headerBg}`, borderRadius: 6, padding: "4px 6px", marginBottom: 2 }, children: [
                          /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mb-1", children: [
                            /* @__PURE__ */ t("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${e.textSecondary}44`, border: `1.5px solid ${e.textSecondary}66` } }),
                            /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: e.textSecondary }, children: "Previsto" })
                          ] }),
                          /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                            /* @__PURE__ */ t("span", { children: "Início:" }),
                            /* @__PURE__ */ t("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: ee(R.task.previsionStart) })
                          ] }),
                          /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                            /* @__PURE__ */ t("span", { children: "Fim:" }),
                            /* @__PURE__ */ t("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: ee(R.task.previsionEnd) })
                          ] }),
                          /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                            /* @__PURE__ */ t("span", { children: "Duração:" }),
                            /* @__PURE__ */ s("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: [
                              ce(R.task.previsionStart, R.task.previsionEnd),
                              "d"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ s("div", { style: { background: R.task.hasActualDates ? `${e.groupLight}22` : "transparent", borderRadius: 6, padding: "4px 6px" }, children: [
                          /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mb-1", children: [
                            /* @__PURE__ */ t("div", { style: { width: 20, height: 4, borderRadius: 2, background: te[R.task.colorIdx ?? 0].progress } }),
                            /* @__PURE__ */ t("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: R.task.hasActualDates ? e.group : e.textSecondary }, children: R.task.hasActualDates ? "Real" : "Previsto (em uso)" })
                          ] }),
                          /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                            /* @__PURE__ */ t("span", { children: "Início:" }),
                            /* @__PURE__ */ t("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: ee(R.task.start) })
                          ] }),
                          /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                            /* @__PURE__ */ t("span", { children: "Fim:" }),
                            /* @__PURE__ */ t("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: ee(R.task.end) })
                          ] }),
                          /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                            /* @__PURE__ */ t("span", { children: "Duração:" }),
                            /* @__PURE__ */ s("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: [
                              ce(R.task.start, R.task.end),
                              "d"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ s("div", { className: "flex justify-between gap-4 pt-1 mt-1", style: { borderTop: `1px solid ${e.borderLight}` }, children: [
                          /* @__PURE__ */ s("span", { children: [
                            J("charts.gantt.progress", "Progresso"),
                            ":"
                          ] }),
                          /* @__PURE__ */ s("span", { className: "font-bold", style: { color: e.group }, children: [
                            Math.round(R.task.progress),
                            "%"
                          ] })
                        ] })
                      ] }) : R.task.originalType === "note" ? /* @__PURE__ */ s(ie, { children: [
                        R.task.noteProjectTitle && /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 mb-1", children: [
                          /* @__PURE__ */ t("div", { style: { width: 8, height: 8, borderRadius: 2, background: R.task.noteColor || e.note, flexShrink: 0 } }),
                          /* @__PURE__ */ t("span", { className: "text-[11px] font-semibold truncate", style: { color: e.textPrimary }, children: R.task.noteProjectTitle })
                        ] }),
                        /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                          /* @__PURE__ */ t("span", { children: "Data:" }),
                          /* @__PURE__ */ t("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: ee(R.task.start) })
                        ] }),
                        (R.task.filesCount || 0) > 0 && /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                          /* @__PURE__ */ t("span", { children: "Anexos:" }),
                          /* @__PURE__ */ s("span", { className: "font-semibold flex items-center gap-1", style: { color: e.textPrimary }, children: [
                            /* @__PURE__ */ t(je, { size: 10 }),
                            R.task.filesCount
                          ] })
                        ] })
                      ] }) : /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                        /* @__PURE__ */ s("span", { children: [
                          J("charts.gantt.start", "Início"),
                          ":"
                        ] }),
                        /* @__PURE__ */ t("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: ee(R.task.start) })
                      ] }) })
                    ]
                  }
                ) })
              ] })
            ] })
          }
        ),
        _.task && _.isOpen && (() => {
          const y = _.task, n = (o.dependencies || []).filter((M) => M.predecessorId === y.id || M.successorId === y.id), i = { FS: "Início após Fim", SS: "Inícios simultâneos", FF: "Fins simultâneos", SF: "Fim após Início" }, m = n.length > 0 ? 300 : 220, L = Math.min(_.position.x, window.innerWidth - m - 16), C = _.position.y + 8;
          return /* @__PURE__ */ s(
            "div",
            {
              "data-popup": "gantt-action",
              style: { position: "fixed", left: L, top: C, zIndex: 9999, background: "#fff", borderRadius: 4, boxShadow: "0 12px 40px rgba(0,0,0,0.14), 0 3px 10px rgba(0,0,0,0.07)", border: `1.5px solid ${e.borderLight}`, width: m, overflow: "hidden" },
              onMouseDown: (M) => M.stopPropagation(),
              children: [
                /* @__PURE__ */ t("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${e.borderLight}` }, children: /* @__PURE__ */ t("p", { style: { fontSize: 13, fontWeight: 700, color: e.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: y.name, children: y.name }) }),
                /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" }, children: [
                  /* @__PURE__ */ s("button", { onClick: () => {
                    me?.(Ae(y)), pe();
                  }, className: "gantt-popup-btn", children: [
                    /* @__PURE__ */ t(rt, { size: 15 }),
                    " ",
                    /* @__PURE__ */ t("span", { children: J("projects.stepAction.viewDetails", "Ver detalhes") })
                  ] }),
                  /* @__PURE__ */ s("button", { onClick: () => {
                    De?.(Ae(y)), pe();
                  }, className: "gantt-popup-btn", children: [
                    /* @__PURE__ */ t(nt, { size: 15 }),
                    " ",
                    /* @__PURE__ */ t("span", { children: J("projects.stepAction.edit", "Editar") })
                  ] }),
                  /* @__PURE__ */ s("button", { onClick: () => {
                    j?.(y.id), pe();
                  }, className: "gantt-popup-btn text-red-500 hover:bg-red-50", children: [
                    /* @__PURE__ */ t(it, { size: 15 }),
                    " ",
                    /* @__PURE__ */ t("span", { children: J("projects.stepAction.delete", "Excluir") })
                  ] })
                ] }),
                n.length > 0 && /* @__PURE__ */ s("div", { style: { borderTop: `1px solid ${e.borderLight}`, padding: "10px 14px 12px" }, children: [
                  /* @__PURE__ */ s("div", { style: { fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }, children: [
                    "Relações (",
                    n.length,
                    ")"
                  ] }),
                  /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: n.map((M) => {
                    const F = M.predecessorId === y.id, de = F ? M.successorName : M.predecessorName, U = x === M.id;
                    return /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderRadius: 8, background: "#f8fafb", border: `1px solid ${e.borderLight}` }, children: [
                      /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0 }, children: [
                        /* @__PURE__ */ s("div", { style: { fontSize: 10, fontWeight: 700, color: e.group, marginBottom: 2 }, children: [
                          /* @__PURE__ */ t("span", { style: { background: `${e.group}15`, borderRadius: 4, padding: "1px 5px" }, children: M.type }),
                          " ",
                          /* @__PURE__ */ t("span", { style: { color: e.textSecondary, fontWeight: 500 }, children: F ? "→ " : "← " }),
                          /* @__PURE__ */ t("span", { style: { color: e.textMuted, fontWeight: 400, fontSize: 9 }, children: i[M.type] ?? M.type })
                        ] }),
                        /* @__PURE__ */ t("div", { style: { fontSize: 11, color: e.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: de, children: de })
                      ] }),
                      P && /* @__PURE__ */ t(
                        "button",
                        {
                          disabled: !!U,
                          onClick: async () => {
                            c(M.id);
                            try {
                              await P(M.id);
                            } finally {
                              c(null);
                            }
                          },
                          style: { flexShrink: 0, padding: "4px 6px", borderRadius: 6, border: "none", background: U ? "#fee2e2" : "transparent", cursor: U ? "wait" : "pointer", color: "#ef4444", fontSize: 14, opacity: U ? 0.5 : 1, transition: "background 0.12s" },
                          children: U ? "⟳" : "🗑"
                        }
                      )
                    ] }, M.id);
                  }) })
                ] })
              ]
            }
          );
        })(),
        a && /* @__PURE__ */ s(
          "div",
          {
            "data-menu": "chart-create",
            style: {
              position: "fixed",
              left: Math.min(a.x, window.innerWidth - 220),
              top: Math.min(a.y, window.innerHeight - 220),
              zIndex: 99999,
              background: "#fff",
              borderRadius: 10,
              boxShadow: "0 12px 40px rgba(0,0,0,0.15), 0 3px 10px rgba(0,0,0,0.08)",
              border: `1.5px solid ${e.borderLight}`,
              width: 200,
              overflow: "hidden"
            },
            onClick: (y) => y.stopPropagation(),
            children: [
              /* @__PURE__ */ t("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${e.borderLight}`, background: e.headerBg }, children: /* @__PURE__ */ s("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" }, children: [
                "Adicionar em ",
                ee(a.date)
              ] }) }),
              /* @__PURE__ */ t("div", { style: { padding: "5px 5px" }, children: [
                { label: "Etapa", icon: be("step", 0), action: () => {
                  $e?.(a.date, a.projectId), l(null);
                } },
                { label: "Marco", icon: be("milestone"), action: () => {
                  Re?.(a.date, a.projectId), l(null);
                } },
                { label: "Evento", icon: be("event"), action: () => {
                  Me?.(a.date, a.projectId), l(null);
                } },
                { label: "Nota", icon: be("note"), action: () => {
                  Ee?.(a.date, a.projectId), l(null);
                } }
              ].map((y) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: y.action,
                  className: "gantt-popup-btn",
                  style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.textPrimary, textAlign: "left", transition: "background 0.12s" },
                  children: [
                    y.icon,
                    " ",
                    y.label
                  ]
                },
                y.label
              )) })
            ]
          }
        ),
        I && /* @__PURE__ */ s("svg", { style: { position: "fixed", inset: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 99999 }, children: [
          /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ t("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ t("path", { d: "M0,0 L0,6 L6,3 z", fill: e.group }) }) }),
          /* @__PURE__ */ t("line", { x1: I.fromScreenX, y1: I.fromScreenY, x2: I.currentScreenX, y2: I.currentScreenY, stroke: e.group, strokeWidth: 2.5, strokeDasharray: "8 5", markerEnd: "url(#connect-arrow)", opacity: 0.85, style: { animation: "gantt-dash 0.5s linear infinite" } }),
          /* @__PURE__ */ t("style", { children: "@keyframes gantt-dash { to { stroke-dashoffset: -13; } }" })
        ] }),
        T && /* @__PURE__ */ t("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99998 }, onClick: () => S(null), children: /* @__PURE__ */ s("div", { style: { background: "#fff", borderRadius: 20, padding: "32px 36px", width: 420, boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 6px 24px rgba(0,0,0,0.08)" }, onClick: (y) => y.stopPropagation(), children: [
          /* @__PURE__ */ s("div", { style: { marginBottom: 20 }, children: [
            /* @__PURE__ */ t("h3", { style: { fontSize: 18, fontWeight: 700, color: e.textTitle, marginBottom: 4 }, children: "Tipo de Relação" }),
            /* @__PURE__ */ t("p", { style: { fontSize: 13, color: e.textSecondary }, children: "Escolha como as duas tarefas se relacionam" })
          ] }),
          /* @__PURE__ */ t("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }, children: [
            { type: "FS", label: "Início após Fim", desc: "B começa quando A termina" },
            { type: "SS", label: "Inícios simultâneos", desc: "A e B começam juntos" },
            { type: "FF", label: "Fins simultâneos", desc: "A e B terminam juntos" },
            { type: "SF", label: "Fim após Início", desc: "B termina quando A começa" }
          ].map((y) => /* @__PURE__ */ s("button", { onClick: () => E(y.type), style: { border: D === y.type ? `2px solid ${e.group}` : `1.5px solid ${e.borderLight}`, borderRadius: 12, padding: "12px 14px", textAlign: "left", cursor: "pointer", background: D === y.type ? `${e.group}0d` : "#fafafa" }, children: [
            /* @__PURE__ */ t("div", { style: { fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: e.group, marginBottom: 4, background: D === y.type ? `${e.group}20` : `${e.group}0d`, borderRadius: 6, padding: "2px 6px", display: "inline-block" }, children: y.type }),
            /* @__PURE__ */ t("div", { style: { fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 2 }, children: y.label }),
            /* @__PURE__ */ t("div", { style: { fontSize: 11, color: e.textSecondary }, children: y.desc })
          ] }, y.type)) }),
          /* @__PURE__ */ s("div", { style: { marginBottom: 24 }, children: [
            /* @__PURE__ */ t("label", { style: { display: "block", fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 6 }, children: "Atraso (Lag) em dias" }),
            /* @__PURE__ */ t("input", { type: "number", value: k, onChange: (y) => w(parseInt(y.target.value) || 0), style: { width: "100%", padding: "10px 12px", border: `1.5px solid ${e.borderLight}`, borderRadius: 8, fontSize: 14 } })
          ] }),
          /* @__PURE__ */ s("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12 }, children: [
            /* @__PURE__ */ t("button", { onClick: () => S(null), style: { padding: "10px 16px", borderRadius: 8, border: `1px solid ${e.borderLight}`, background: "#fff", cursor: "pointer", fontWeight: 600 }, children: "Cancelar" }),
            /* @__PURE__ */ t("button", { onClick: Te, disabled: p, style: { padding: "10px 16px", borderRadius: 8, border: "none", background: e.group, color: "#fff", cursor: p ? "wait" : "pointer", fontWeight: 600 }, children: p ? "Salvando..." : "Criar Dependência" })
          ] })
        ] }) })
      ]
    }
  );
}
function mt(o) {
  const g = ue(null), d = ue(null), N = ue(null), f = ue(!1), b = V(() => {
    if (f.current) return;
    f.current = !0;
    const w = d.current;
    w && g.current && (g.current.scrollTop = w.scrollTop), w && N.current && (N.current.scrollLeft = w.scrollLeft), f.current = !1;
  }, []), I = V(() => {
    f.current || (f.current = !0, g.current && d.current && (d.current.scrollTop = g.current.scrollTop), f.current = !1);
  }, []), T = ue(!1);
  le(() => {
    if (T.current || !o.totalWidth) return;
    const w = d.current;
    if (!w) return;
    const p = ne(/* @__PURE__ */ new Date(), o);
    if (p >= 0 && p <= o.totalWidth) {
      const x = p - w.clientWidth / 2;
      w.scrollLeft = Math.max(0, x), N.current && (N.current.scrollLeft = w.scrollLeft), T.current = !0;
    }
  }, [o]);
  const [S, D] = Y(null), E = V((w, p) => {
    if (p || w.button === 2) return;
    const x = d.current;
    x && (w.preventDefault(), D({ startX: w.clientX, startY: w.clientY, scrollLeft: x.scrollLeft, scrollTop: x.scrollTop }));
  }, []);
  le(() => {
    if (!S) return;
    const w = (x) => {
      const c = d.current;
      if (!c) return;
      const a = x.clientX - S.startX, l = x.clientY - S.startY;
      c.scrollLeft = S.scrollLeft - a, c.scrollTop = S.scrollTop - l, g.current && (g.current.scrollTop = c.scrollTop), N.current && (N.current.scrollLeft = c.scrollLeft);
    }, p = () => D(null);
    return document.addEventListener("mousemove", w), document.addEventListener("mouseup", p), () => {
      document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", p);
    };
  }, [S]);
  const k = V((w) => {
    const p = d.current;
    if (p)
      if (w.preventDefault(), w.shiftKey || Math.abs(w.deltaX) > Math.abs(w.deltaY)) {
        const x = w.shiftKey ? w.deltaY : w.deltaX;
        p.scrollLeft += x, N.current && (N.current.scrollLeft = p.scrollLeft);
      } else
        p.scrollTop += w.deltaY, g.current && (g.current.scrollTop = p.scrollTop);
  }, []);
  return {
    leftBodyRef: g,
    rightBodyRef: d,
    timeHeaderRef: N,
    handleRightScroll: b,
    handleLeftScroll: I,
    handleChartMouseDown: E,
    handleChartWheel: k,
    panState: S,
    setPanState: D
  };
}
function bt(o, g, d, N) {
  const f = /* @__PURE__ */ new Map();
  return o.forEach((b) => f.set(b.id, b)), g.map((b) => {
    const I = f.get(b.predecessorId), T = f.get(b.successorId);
    if (!I || !T) return null;
    const S = N.get(I.id), D = N.get(T.id);
    if (S == null || D == null) return null;
    const E = I.originalType !== "step", k = T.originalType !== "step", w = E ? ne(I.start, d) + Oe : ne(I.end, d), p = S * X + X / 2, x = k ? ne(T.start, d) - 10 : ne(T.start, d), c = D * X + X / 2, a = 14, l = Math.max(w + a, x - a), u = p === c ? `M${w},${p} L${x - 6},${c}` : `M${w},${p} L${l},${p} L${l},${c} L${x - 6},${c}`;
    return { predId: I.id, succId: T.id, path: u, headX: x - 6, headY: c };
  }).filter(Boolean);
}
function vt(o, g) {
  if (o.length === 0 || g.length === 0) return /* @__PURE__ */ new Set();
  const d = /* @__PURE__ */ new Map();
  o.forEach((u) => d.set(u.id, u));
  const N = new Set(o.map((u) => u.id)), f = g.filter((u) => N.has(u.predecessorId) && N.has(u.successorId));
  if (f.length === 0) return /* @__PURE__ */ new Set();
  const b = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map();
  f.forEach((u) => {
    b.has(u.predecessorId) || b.set(u.predecessorId, []), b.get(u.predecessorId).push(u.successorId), I.has(u.successorId) || I.set(u.successorId, []), I.get(u.successorId).push(u.predecessorId);
  });
  const T = (u) => Math.max(1, he(u.start, u.end)), S = /* @__PURE__ */ new Set(), D = [];
  function E(u) {
    S.has(u) || (S.add(u), (b.get(u) || []).forEach(E), D.unshift(u));
  }
  o.forEach((u) => E(u.id));
  const k = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (const u of D) {
    const h = d.get(u), $ = I.get(u) || [];
    let r = 0;
    for (const B of $) r = Math.max(r, w.get(B) || 0);
    const v = $.length > 0 ? r : 0;
    k.set(u, v), w.set(u, v + T(h));
  }
  let p = 0;
  w.forEach((u) => {
    u > p && (p = u);
  });
  const x = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  for (let u = D.length - 1; u >= 0; u--) {
    const h = D[u], $ = d.get(h), r = b.get(h) || [];
    let v = p;
    for (const B of r) v = Math.min(v, x.get(B) ?? p);
    c.set(h, r.length > 0 ? v : p), x.set(h, (c.get(h) || 0) - T($));
  }
  const a = /* @__PURE__ */ new Set();
  f.forEach((u) => {
    a.add(u.predecessorId), a.add(u.successorId);
  });
  const l = /* @__PURE__ */ new Set();
  for (const u of D) {
    if (!a.has(u)) continue;
    const h = (x.get(u) || 0) - (k.get(u) || 0);
    Math.abs(h) < 0.5 && l.add(u);
  }
  return l;
}
function wt({
  steps: o,
  milestones: g,
  events: d,
  notes: N,
  dependencies: f,
  viewMode: b,
  groupByProject: I,
  visibleTypes: T,
  collapsedGroups: S,
  collapsedProjects: D,
  selectedTaskId: E
}) {
  const k = re(() => {
    const h = [];
    let $ = 0;
    return o.forEach((r) => {
      const v = !!(r.startDate && r.finishDate), B = r.startDate || r.previsionStartDate, A = r.finishDate || r.previsionFinishDate;
      if (!B || !A) return;
      const W = new Date(B), z = new Date(A);
      if (isNaN(W.getTime()) || isNaN(z.getTime())) return;
      z <= W && z.setDate(z.getDate() + 1);
      let R, H;
      if (r.previsionStartDate && r.previsionFinishDate) {
        const O = new Date(r.previsionStartDate), se = new Date(r.previsionFinishDate);
        !isNaN(O.getTime()) && !isNaN(se.getTime()) && (R = O, H = se <= O ? q(O, 1) : se);
      }
      const _ = f?.filter((O) => O.successorId === r.id).map((O) => O.predecessorId) || [];
      h.push({
        id: r.id,
        name: r.name,
        start: W,
        end: z,
        progress: r.conclusionPercent ? Number(r.conclusionPercent) * 100 : 0,
        originalType: "step",
        deps: _,
        colorIdx: $ % te.length,
        previsionStart: R,
        previsionEnd: H,
        hasActualDates: v,
        projectId: r.projectId || void 0,
        projectTitle: r.projectTitle || void 0
      }), $++;
    }), g?.forEach((r) => {
      if (!r.date) return;
      const v = new Date(r.date);
      if (isNaN(v.getTime())) return;
      const B = f?.filter((A) => A.successorId === r.id).map((A) => A.predecessorId) || [];
      h.push({
        id: r.id,
        name: r.name,
        start: v,
        end: v,
        progress: r.finished ? 100 : 0,
        originalType: "milestone",
        deps: B,
        projectId: r.projectId || void 0,
        projectTitle: r.projectTitle || void 0
      });
    }), d?.forEach((r) => {
      if (!r.date) return;
      const v = new Date(r.date);
      if (isNaN(v.getTime())) return;
      const B = f?.filter((A) => A.successorId === r.id).map((A) => A.predecessorId) || [];
      h.push({
        id: r.id,
        name: r.title,
        start: v,
        end: v,
        progress: r.finished ? 100 : 0,
        originalType: "event",
        deps: B,
        projectId: r.projectId || void 0,
        projectTitle: r.projectTitle || void 0
      });
    }), N?.forEach((r) => {
      if (!r.date) return;
      const v = new Date(r.date);
      isNaN(v.getTime()) || h.push({
        id: r.id,
        name: r.title || "Nota",
        start: v,
        end: v,
        progress: 0,
        originalType: "note",
        deps: [],
        noteCount: 1,
        noteColor: r.color || e.note,
        filesCount: r.filesCount || 0,
        noteProjectTitle: r.projectTitle || void 0,
        projectId: r.projectId || void 0,
        projectTitle: r.projectTitle || void 0
      });
    }), h;
  }, [o, g, d, N, f]), w = re(() => gt(k, b), [k, b]), p = re(() => {
    const h = [], $ = ["step", "milestone", "event", "note"];
    if (I) {
      const r = /* @__PURE__ */ new Map();
      k.forEach((v) => {
        v.projectId && !r.has(v.projectId) && r.set(v.projectId, v.projectTitle || v.projectId);
      });
      for (const [v, B] of Array.from(r.entries())) {
        const A = D.has(v);
        if (h.push({ kind: "projectHeader", projectId: v, projectTitle: B, collapsed: A }), !A) {
          const W = k.filter((z) => z.projectId === v);
          for (const z of $) {
            if (!T.has(z)) continue;
            const R = W.filter((O) => O.originalType === z);
            if (R.length === 0) continue;
            const H = `${v}-${z}`, _ = S.has(H);
            h.push({ kind: "group", groupType: z, label: Fe[z], count: R.length, collapsed: _, projectId: v }), _ || R.forEach((O) => h.push({ kind: "task", task: O }));
          }
        }
      }
    } else
      for (const r of $) {
        if (!T.has(r)) continue;
        const v = k.filter((A) => A.originalType === r);
        if (v.length === 0) continue;
        const B = S.has(r);
        h.push({ kind: "group", groupType: r, label: Fe[r], count: v.length, collapsed: B }), B || v.forEach((A) => h.push({ kind: "task", task: A }));
      }
    return h;
  }, [k, T, S, D, I]), x = re(() => {
    const h = /* @__PURE__ */ new Map();
    return p.forEach(($, r) => {
      $.kind === "task" && h.set($.task.id, r);
    }), h;
  }, [p]), c = re(
    () => bt(k, f || [], w, x),
    [k, f, w, x]
  ), a = re(() => vt(k, f || []), [k, f]), l = re(() => {
    const h = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Date();
    return k.forEach((r) => {
      r.originalType === "step" && r.end < $ && r.progress < 100 && h.add(r.id);
    }), h;
  }, [k]), u = re(() => {
    if (!E || !f?.length) return /* @__PURE__ */ new Set();
    const h = /* @__PURE__ */ new Set(), $ = [E];
    for (; $.length; ) {
      const r = $.shift();
      for (const v of f)
        v.predecessorId === r && !h.has(v.successorId) && (h.add(v.successorId), $.push(v.successorId)), v.successorId === r && !h.has(v.predecessorId) && (h.add(v.predecessorId), $.push(v.predecessorId));
    }
    return h;
  }, [E, f]);
  return {
    tasks: k,
    timeline: w,
    displayRows: p,
    taskRowIndex: x,
    arrows: c,
    criticalIds: a,
    delayedIds: l,
    relatedIds: u
  };
}
function Dt(o) {
  const [g, d] = Y("day"), [N, f] = Y(null), [b, I] = Y(null), [T, S] = Y(null), [D, E] = Y({
    isOpen: !1,
    position: { x: 0, y: 0 },
    task: null
  }), [k, w] = Y(null), [p, x] = Y(null), [c, a] = Y(null), [l, u] = Y(null), [h, $] = Y("FS"), [r, v] = Y(0), [B, A] = Y(!1), [W, z] = Y(null), [R, H] = Y(null), [_, O] = Y(!1), se = ue(null), [ge, fe] = Y(/* @__PURE__ */ new Set(["step", "milestone", "event", "note"])), [xe, Ie] = Y(/* @__PURE__ */ new Set()), [ye, Te] = Y(/* @__PURE__ */ new Set()), ae = V((n) => {
    fe((i) => {
      const m = new Set(i);
      return m.has(n) ? m.delete(n) : m.add(n), m;
    });
  }, []), me = V((n) => {
    Ie((i) => {
      const m = new Set(i);
      return m.has(n) ? m.delete(n) : m.add(n), m;
    });
  }, []), De = V((n) => {
    Te((i) => {
      const m = new Set(i);
      return m.has(n) ? m.delete(n) : m.add(n), m;
    });
  }, []), j = wt({
    steps: o.steps,
    milestones: o.milestones,
    events: o.events,
    notes: o.notes,
    dependencies: o.dependencies,
    viewMode: g,
    visibleTypes: ge,
    collapsedGroups: xe,
    collapsedProjects: ye,
    groupByProject: o.groupByProject,
    selectedTaskId: b || null
  }), P = mt(j.timeline), $e = V((n, i) => {
    n.preventDefault(), n.stopPropagation(), w({ task: i, startMouseX: n.clientX, originalStart: new Date(i.start), originalEnd: new Date(i.end), offsetDays: 0 });
  }, []), Re = V((n, i, m) => {
    n.preventDefault(), n.stopPropagation(), x({ task: i, edge: m, startMouseX: n.clientX, originalStart: new Date(i.start), originalEnd: new Date(i.end), offsetDays: 0 });
  }, []), Me = V((n, i, m) => {
    n.preventDefault(), n.stopPropagation(), a({ fromTaskId: i.id, fromEdge: m, fromScreenX: n.clientX, fromScreenY: n.clientY, currentScreenX: n.clientX, currentScreenY: n.clientY, hoverTargetId: null });
  }, []), Ee = V(async () => {
    if (!l || !o.onCreateDependency) return;
    const n = new Map(j.tasks.map((F) => [F.id, F])), i = n.get(l.fromTaskId), m = n.get(l.toTaskId);
    if (!i || !m) return;
    const L = (F) => F.originalType === "step" ? "STEP" : "MILESTONE", C = l.fromEdge === "right" ? i : m, M = l.fromEdge === "right" ? m : i;
    A(!0);
    try {
      await o.onCreateDependency({ predecessorId: C.id, predecessorType: L(C), successorId: M.id, successorType: L(M), type: h, lag: r }), u(null);
    } finally {
      A(!1);
    }
  }, [l, j.tasks, o.onCreateDependency, h, r]);
  le(() => {
    if (!k) return;
    const n = (m) => {
      const L = m.clientX - k.startMouseX, C = Math.round(L / j.timeline.dayWidth);
      C !== k.offsetDays && w((M) => M ? { ...M, offsetDays: C } : null);
    }, i = () => {
      k.offsetDays !== 0 && o.onTaskChange && o.onTaskChange({
        id: k.task.id,
        name: k.task.name,
        start: q(k.originalStart, k.offsetDays),
        end: q(k.originalEnd, k.offsetDays),
        type: k.task.originalType === "step" ? "task" : "milestone",
        progress: k.task.progress
      }), w(null);
    };
    return document.addEventListener("mousemove", n), document.addEventListener("mouseup", i), () => {
      document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", i);
    };
  }, [k, j.timeline.dayWidth, o.onTaskChange]), le(() => {
    if (!p) return;
    const n = (m) => {
      const L = m.clientX - p.startMouseX, C = Math.round(L / j.timeline.dayWidth);
      C !== p.offsetDays && x((M) => M ? { ...M, offsetDays: C } : null);
    }, i = () => {
      if (p.offsetDays !== 0 && o.onTaskChange) {
        const m = p.edge === "left" ? q(p.originalStart, p.offsetDays) : p.originalStart, L = p.edge === "right" ? q(p.originalEnd, p.offsetDays) : p.originalEnd;
        L > m && o.onTaskChange({ id: p.task.id, name: p.task.name, start: m, end: L, type: "task", progress: p.task.progress });
      }
      x(null);
    };
    return document.addEventListener("mousemove", n), document.addEventListener("mouseup", i), () => {
      document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", i);
    };
  }, [p, j.timeline.dayWidth, o.onTaskChange]), le(() => {
    if (!c) return;
    const n = (m) => {
      let L = null;
      for (const C of document.elementsFromPoint(m.clientX, m.clientY)) {
        const M = C.dataset?.taskId;
        if (M && M !== c.fromTaskId) {
          L = M;
          break;
        }
      }
      a((C) => C ? { ...C, currentScreenX: m.clientX, currentScreenY: m.clientY, hoverTargetId: L } : null);
    }, i = (m) => {
      let L = null;
      for (const C of document.elementsFromPoint(m.clientX, m.clientY)) {
        const M = C.dataset?.taskId;
        if (M && M !== c.fromTaskId) {
          L = M;
          break;
        }
      }
      L && o.onCreateDependency && (u({ fromTaskId: c.fromTaskId, fromEdge: c.fromEdge, toTaskId: L }), $("FS"), v(0)), a(null);
    };
    return document.addEventListener("mousemove", n), document.addEventListener("mouseup", i), () => {
      document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", i);
    };
  }, [c?.fromTaskId, c?.fromEdge, o.onCreateDependency]);
  const [J, ce] = Y(null), oe = V((n) => {
    if (p || k || n.button === 2) return;
    const i = P.rightBodyRef.current;
    i && (n.preventDefault(), ce({ startX: n.clientX, startY: n.clientY, scrollLeft: i.scrollLeft, scrollTop: i.scrollTop }));
  }, [p, k, P.rightBodyRef]);
  le(() => {
    if (!J) return;
    const n = (m) => {
      const L = P.rightBodyRef.current;
      L && (L.scrollLeft = J.scrollLeft - (m.clientX - J.startX), L.scrollTop = J.scrollTop - (m.clientY - J.startY), P.leftBodyRef.current && (P.leftBodyRef.current.scrollTop = L.scrollTop), P.timeHeaderRef.current && (P.timeHeaderRef.current.scrollLeft = L.scrollLeft));
    }, i = () => ce(null);
    return document.addEventListener("mousemove", n), document.addEventListener("mouseup", i), () => {
      document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", i);
    };
  }, [J, P.rightBodyRef, P.leftBodyRef, P.timeHeaderRef]);
  const pe = V((n) => {
    n.preventDefault(), n.stopPropagation();
    const i = (L) => {
      const C = P.rightBodyRef.current;
      if (!C) return /* @__PURE__ */ new Date();
      const M = C.getBoundingClientRect(), F = L - M.left + C.scrollLeft;
      return q(j.timeline.start, Math.max(0, Math.floor(F / j.timeline.dayWidth)));
    }, m = (L) => {
      if (!o.groupByProject) return;
      const C = P.leftBodyRef.current;
      if (!C) return;
      const M = C.getBoundingClientRect(), F = L - M.top + C.scrollTop, de = Math.max(0, Math.floor(F / 50));
      for (let U = Math.min(de, j.displayRows.length - 1); U >= 0; U--) {
        const Z = j.displayRows[U];
        if (Z.kind === "projectHeader") return Z.projectId;
        if (Z.kind === "task" && Z.task.projectId) return Z.task.projectId;
        if (Z.kind === "group" && Z.projectId) return Z.projectId;
      }
    };
    H({ x: n.clientX, y: n.clientY, date: i(n.clientX), projectId: m(n.clientY) }), ce(null);
  }, [j.timeline, j.displayRows, o.groupByProject, P.rightBodyRef, P.leftBodyRef]);
  le(() => {
    if (!R) return;
    const n = (L) => {
      L.key === "Escape" && H(null);
    }, i = (L) => {
      L.target.closest('[data-menu="chart-create"]') || H(null);
    }, m = () => H(null);
    return document.addEventListener("keydown", n), document.addEventListener("click", i), window.addEventListener("scroll", m, !0), () => {
      document.removeEventListener("keydown", n), document.removeEventListener("click", i), window.removeEventListener("scroll", m, !0);
    };
  }, [R]);
  const y = re(() => ({
    props: o,
    t: (n, i) => o.translations ? typeof o.translations == "function" ? o.translations(n, i) : o.translations[n] || i || "" : i || "",
    viewMode: g,
    setViewMode: d,
    hoveredTaskId: N,
    setHoveredTaskId: f,
    selectedTaskId: b,
    setSelectedTaskId: I,
    tooltip: T,
    setTooltip: S,
    popupState: D,
    setPopupState: E,
    dragState: k,
    setDragState: w,
    resizeState: p,
    setResizeState: x,
    connectState: c,
    setConnectState: a,
    visibleTypes: ge,
    setVisibleTypes: fe,
    toggleVisibility: ae,
    collapsedGroups: xe,
    setCollapsedGroups: Ie,
    toggleGroup: me,
    collapsedProjects: ye,
    setCollapsedProjects: Te,
    toggleProject: De,
    pendingConnection: l,
    setPendingConnection: u,
    depModalType: h,
    setDepModalType: $,
    depModalLag: r,
    setDepModalLag: v,
    depCreating: B,
    setDepCreating: A,
    deletingDepId: W,
    setDeletingDepId: z,
    chartMenu: R,
    setChartMenu: H,
    newActionOpen: _,
    setNewActionOpen: O,
    tasks: j.tasks,
    timeline: j.timeline,
    displayRows: j.displayRows,
    taskRowIndex: j.taskRowIndex || /* @__PURE__ */ new Map(),
    arrows: j.arrows,
    criticalIds: j.criticalIds,
    delayedIds: j.delayedIds,
    relatedIds: j.relatedIds,
    ...P,
    newActionRef: se,
    screenXToDate: (n) => {
      const i = P.rightBodyRef.current;
      if (!i) return /* @__PURE__ */ new Date();
      const m = i.getBoundingClientRect(), L = n - m.left + i.scrollLeft;
      return q(j.timeline.start, Math.max(0, Math.floor(L / j.timeline.dayWidth)));
    },
    screenYToProjectId: (n) => {
      if (!o.groupByProject) return;
      const i = P.leftBodyRef.current;
      if (!i) return;
      const m = i.getBoundingClientRect(), L = n - m.top + i.scrollTop, C = Math.max(0, Math.floor(L / 50));
      for (let M = Math.min(C, j.displayRows.length - 1); M >= 0; M--) {
        const F = j.displayRows[M];
        if (F.kind === "projectHeader") return F.projectId;
        if (F.kind === "task" && F.task.projectId) return F.task.projectId;
        if (F.kind === "group" && F.projectId) return F.projectId;
      }
    },
    handleChartMouseDown: oe,
    openChartMenu: pe,
    handleBarMouseDown: $e,
    handleResizeMouseDown: Re,
    handleConnectDotMouseDown: Me,
    handleCreateDependency: Ee
  }), [
    o,
    g,
    N,
    b,
    T,
    D,
    k,
    p,
    c,
    ge,
    xe,
    ye,
    l,
    h,
    r,
    B,
    W,
    R,
    _,
    j,
    P,
    ae,
    me,
    De,
    oe,
    pe,
    $e,
    Re,
    Me,
    Ee
  ]);
  return o.loading ? /* @__PURE__ */ t("div", { style: { padding: 48, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: e.textSecondary }, children: /* @__PURE__ */ t(st, { size: 32, style: { animation: "spin 1.5s linear infinite", color: e.group } }) }) : /* @__PURE__ */ t(at, { value: y, children: /* @__PURE__ */ s(
    "div",
    {
      className: "w-full flex flex-col mx-auto bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden",
      style: { height: "calc(100vh - 48px)", minHeight: 600, border: `1px solid ${e.borderLight}` },
      children: [
        /* @__PURE__ */ t(ut, {}),
        /* @__PURE__ */ s("div", { className: "flex flex-1 overflow-hidden relative", style: { background: e.surfaceAlt }, children: [
          /* @__PURE__ */ t(ht, {}),
          /* @__PURE__ */ t(yt, {})
        ] })
      ]
    }
  ) });
}
export {
  Dt as ProjectGantt
};
