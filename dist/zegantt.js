import t, { createContext as qe, useContext as Ze, useRef as me, useCallback as U, useEffect as Ce, useState as P, useMemo as re } from "react";
import { Flag as xe, Clock as be, MessageCircle as Qe, Plus as et, ChevronDown as Ne, ChevronRight as je, Paperclip as Be, AlertTriangle as tt, Eye as rt, Edit2 as ot, Trash2 as nt, Loader2 as at } from "lucide-react";
const Pe = qe(void 0);
function st({ children: r, value: g }) {
  return /* @__PURE__ */ t.createElement(Pe.Provider, { value: g }, r);
}
function Ee() {
  const r = Ze(Pe);
  if (!r)
    throw new Error("useGanttContext must be used within a GanttProvider");
  return r;
}
const _ = {
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
  surface: _.white,
  // #FFFFFF
  surfaceAlt: "#F7FAF8",
  // subtle alternating row
  headerBg: "#F2F5F3",
  // soft green-tinted header
  textTitle: _.dark_green,
  // #1A3C30
  textPrimary: _.dark_gray,
  // #4F4F4F
  textSecondary: _.gray,
  // #7B7B7B
  textMuted: _.light_gray,
  // #D9D9D9
  group: _.dark_green,
  // #1A3C30
  groupLight: _.water_green,
  // #A0D8A8 (bar border)
  milestone: _.dark_green,
  // #1A3C30
  milestoneRing: _.light_green,
  // #A0D8A8
  event: _.orange,
  // yellow translucent
  note: _.yellow,
  // #FFBB1C
  border: _.light_gray,
  // #D9D9D9
  borderLight: "#ECECEC",
  weekendBg: "#F4F6F5",
  today: _.red,
  // #FF0000
  todayBg: "#FF000008",
  // today column tint
  arrow: _.gray,
  // #7B7B7B
  arrowHover: _.dark_green
  // #1A3C30
}, Y = 50, ye = 32, it = ye * 2, lt = 460, Z = 26, $e = 28, Ye = 120, dt = 40, ct = 3.5, ee = [
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
], We = {
  step: "Etapas",
  milestone: "Marcos",
  event: "Eventos",
  note: "Notas"
};
function pt() {
  const {
    props: r,
    t: g,
    viewMode: i,
    setViewMode: L,
    visibleTypes: f,
    setVisibleTypes: x,
    newActionOpen: k,
    setNewActionOpen: S,
    newActionRef: w
  } = Ee(), { projectName: R, onAddNewStage: $, onAddMilestone: v, onAddEvent: E, onAddNote: c } = r, m = (d) => {
    x((s) => {
      const l = new Set(s);
      return l.has(d) ? l.delete(d) : l.add(d), l;
    });
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "flex items-center justify-between px-6 py-5",
      style: { borderBottom: `1px solid ${e.border}`, background: `linear-gradient(180deg, ${e.headerBg} 0%, ${e.surface} 100%)` }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-bold uppercase tracking-widest", style: { color: e.textTitle } }, g("planning.gantt", "PLANEJAMENTO DA OBRA")), /* @__PURE__ */ React.createElement("div", { className: "h-[2.5px] w-16 mt-1.5 rounded-full", style: { background: `linear-gradient(90deg, ${e.group}, ${e.milestoneRing})` } })), R && /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "text-xs font-medium px-3 py-1 rounded-full",
        style: { color: e.textSecondary, background: e.surface, border: `1px solid ${e.border}` }
      },
      R
    )),
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex p-1 rounded-lg", style: { background: "rgba(122,122,122,0.07)", border: `1px solid ${e.borderLight}` } }, ["month", "year"].map((d) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: d,
        onClick: () => L(d),
        className: "px-5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200",
        style: i === d ? { background: e.surface, color: e.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { color: e.textSecondary }
      },
      d === "month" ? g("charts.gantt.month", "Mês") : g("charts.gantt.year", "Ano")
    ))), /* @__PURE__ */ React.createElement("div", { className: "flex p-1 rounded-lg gap-0.5", style: { background: "rgba(122,122,122,0.07)", border: `1px solid ${e.borderLight}` } }, [
      { type: "step", label: "Etapas", icon: /* @__PURE__ */ React.createElement("div", { className: "w-2.5 h-2.5 rounded-sm", style: { background: ee[0].bar, border: `1px solid ${ee[0].barBorder}` } }) },
      { type: "milestone", label: "Marcos", icon: /* @__PURE__ */ React.createElement(xe, { size: 11, style: { color: e.milestone } }) },
      { type: "event", label: "Eventos", icon: /* @__PURE__ */ React.createElement(be, { size: 11, style: { color: e.event } }) },
      { type: "note", label: "Notas", icon: /* @__PURE__ */ React.createElement(Qe, { size: 11, style: { color: e.note } }) }
    ].map((d) => {
      const s = f.has(d.type);
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: d.type,
          onClick: () => m(d.type),
          className: "flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-md transition-all duration-200",
          style: s ? { background: e.surface, color: e.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { color: e.textMuted, opacity: 0.5 }
        },
        d.icon,
        /* @__PURE__ */ React.createElement("span", null, d.label)
      );
    })), $ && /* @__PURE__ */ React.createElement("div", { ref: w, style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => S((d) => !d),
        className: "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        style: { background: `linear-gradient(135deg, ${e.group}, ${e.group}dd)` }
      },
      /* @__PURE__ */ React.createElement(et, { size: 16 }),
      /* @__PURE__ */ React.createElement("span", null, g("charts.gantt.newAction", "Nova Ação")),
      /* @__PURE__ */ React.createElement(Ne, { size: 14, style: { opacity: 0.7, transform: k ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
    ), k && /* @__PURE__ */ React.createElement(
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
        onClick: (d) => d.stopPropagation()
      },
      [
        {
          label: "Etapa",
          icon: /* @__PURE__ */ React.createElement("div", { style: { width: 14, height: 14, borderRadius: 3, background: ee[0].bar, border: `1.5px solid ${ee[0].barBorder}`, flexShrink: 0 } }),
          action: () => {
            $(), S(!1);
          }
        },
        {
          label: "Marco",
          icon: /* @__PURE__ */ React.createElement("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${e.milestoneRing}30`, border: `1.5px solid ${e.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(xe, { size: 11, style: { color: e.milestone } })),
          action: () => {
            v?.(), S(!1);
          }
        },
        {
          label: "Evento",
          icon: /* @__PURE__ */ React.createElement("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${e.event}18`, border: `1.5px solid ${e.event}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(be, { size: 11, style: { color: e.event } })),
          action: () => {
            E?.(), S(!1);
          }
        },
        {
          label: "Nota",
          icon: /* @__PURE__ */ React.createElement("div", { style: { width: 16, height: 20, background: e.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } })),
          action: () => {
            c?.(), S(!1);
          }
        }
      ].map((d) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: d.label,
          onClick: d.action,
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
          }
        },
        d.icon,
        d.label
      ))
    )))
  );
}
const Xe = 864e5, K = (r, g) => new Date(r.getTime() + g * Xe), de = (r, g) => Math.round((g.getTime() - r.getTime()) / Xe), ze = (r) => new Date(r.getFullYear(), r.getMonth(), 1), Me = (r) => new Date(r.getFullYear(), r.getMonth() + 1, 0), Q = (r) => `${String(r.getDate()).padStart(2, "0")}/${String(r.getMonth() + 1).padStart(2, "0")}/${r.getFullYear()}`, Fe = {
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
function ut() {
  const {
    props: r,
    t: g,
    displayRows: i,
    leftBodyRef: L,
    handleLeftScroll: f,
    toggleProject: x,
    toggleGroup: k,
    hoveredTaskId: S,
    setHoveredTaskId: w,
    selectedTaskId: R,
    setSelectedTaskId: $,
    delayedIds: v,
    criticalIds: E,
    relatedIds: c
  } = Ee(), m = 540, d = (s) => ({
    id: s.id,
    name: s.name,
    start: s.start,
    end: s.end,
    type: s.originalType === "step" ? "task" : "milestone",
    progress: s.progress
  });
  return /* @__PURE__ */ React.createElement("div", { style: { width: lt, flexShrink: 0, borderRight: `1px solid ${e.border}` } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "flex items-center px-4",
      style: { height: it, background: e.headerBg, borderBottom: `1px solid ${e.border}` }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex-1 text-[11px] font-bold uppercase tracking-wider", style: { color: e.textSecondary } }, g("charts.gantt.stepName", "NOME DA ETAPA")),
    /* @__PURE__ */ React.createElement("div", { className: "w-[80px] text-[11px] font-bold uppercase tracking-wider text-center", style: { color: e.textSecondary } }, g("charts.gantt.start", "INÍCIO")),
    /* @__PURE__ */ React.createElement("div", { className: "w-[80px] text-[11px] font-bold uppercase tracking-wider text-center", style: { color: e.textSecondary } }, g("charts.gantt.end", "FIM"))
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: L,
      onScroll: f,
      className: "overflow-y-auto overflow-x-hidden",
      style: { maxHeight: m, scrollbarWidth: "none" }
    },
    i.map((s) => {
      if (s.kind === "projectHeader")
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            key: `ph-${s.projectId}`,
            className: "flex items-center px-4 cursor-pointer select-none",
            style: { height: Y, borderBottom: `1.5px solid ${e.group}44`, background: `${e.group}0E` },
            onClick: () => x(s.projectId)
          },
          /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 flex-1 min-w-0" }, s.collapsed ? /* @__PURE__ */ React.createElement(je, { size: 15, style: { color: e.group, flexShrink: 0 } }) : /* @__PURE__ */ React.createElement(Ne, { size: 15, style: { color: e.group, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { className: "text-[12px] font-bold uppercase tracking-widest truncate", style: { color: e.group } }, s.projectTitle))
        );
      if (s.kind === "group") {
        const W = s.projectId ? `${s.projectId}-${s.groupType}` : s.groupType;
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            key: `g-${W}`,
            className: "flex items-center px-4 cursor-pointer select-none",
            style: { height: Y, borderBottom: `1px solid ${e.border}`, background: e.headerBg },
            onClick: () => k(W)
          },
          /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 flex-1 min-w-0" }, s.collapsed ? /* @__PURE__ */ React.createElement(je, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ React.createElement(Ne, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider", style: { color: e.textTitle } }, s.label), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] font-semibold px-1.5 py-0.5 rounded-full", style: { background: "rgba(0,0,0,0.06)", color: e.textSecondary } }, s.count))
        );
      }
      const l = s.task, p = R === l.id, u = S === l.id, I = l.originalType !== "step", o = v.has(l.id), b = E.has(l.id), N = R !== null && l.id !== R && !c.has(l.id), B = R !== null && c.has(l.id), j = o ? "#FFF5F5" : p ? e.groupLight : B ? `${e.groupLight}99` : u ? e.pageBg : e.surface;
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: l.id,
          className: "flex items-center px-4 cursor-pointer transition-colors duration-150",
          style: {
            height: Y,
            borderBottom: `1px solid ${e.borderLight}`,
            background: j,
            borderLeft: p ? `3px solid ${e.group}` : B ? `3px solid ${e.group}66` : b ? `3px solid ${e.today}` : void 0,
            opacity: N ? 0.3 : 1,
            transition: "opacity 0.18s, background 0.15s"
          },
          onClick: () => $((W) => W === l.id ? null : l.id),
          onDoubleClick: () => r.onTaskClick?.(d(l)),
          onMouseEnter: () => w(l.id),
          onMouseLeave: () => w(null)
        },
        /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex items-center gap-2 min-w-0 pr-2" }, l.originalType === "step" && /* @__PURE__ */ React.createElement("div", { className: "flex-shrink-0 rounded", style: { width: 14, height: 14, background: ee[l.colorIdx ?? 0].bar, border: `1.5px solid ${ee[l.colorIdx ?? 0].barBorder}` } }), l.originalType === "milestone" && /* @__PURE__ */ React.createElement("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 22, height: 22, background: `${e.milestoneRing}30`, border: `1.5px solid ${e.milestoneRing}` } }, /* @__PURE__ */ React.createElement(xe, { size: 11, style: { color: e.milestone } })), l.originalType === "event" && /* @__PURE__ */ React.createElement("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 22, height: 22, background: `${e.event}18`, border: `1.5px solid ${e.event}55` } }, /* @__PURE__ */ React.createElement(be, { size: 11, style: { color: e.event } })), l.originalType === "note" && /* @__PURE__ */ React.createElement("div", { className: "flex-shrink-0", style: { width: 16, height: 20, background: l.noteColor || e.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } })), /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex flex-col min-w-0" }, /* @__PURE__ */ React.createElement(
          "span",
          {
            className: "text-[13px] truncate font-medium leading-tight",
            style: { color: p ? e.group : o ? e.today : e.textPrimary }
          },
          l.name
        ), l.originalType === "note" && l.noteProjectTitle && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] truncate", style: { color: e.textSecondary, marginTop: 1 } }, l.noteProjectTitle)), l.originalType === "note" && (l.filesCount || 0) > 0 && /* @__PURE__ */ React.createElement("span", { className: "flex-shrink-0 flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full", style: { color: e.textSecondary, background: e.headerBg, border: `1px solid ${e.borderLight}` } }, /* @__PURE__ */ React.createElement(Be, { size: 9 }), l.filesCount), o && /* @__PURE__ */ React.createElement(tt, { size: 12, className: "flex-shrink-0", style: { color: e.today } })),
        /* @__PURE__ */ React.createElement("div", { className: "w-[80px] text-[11px] font-medium text-center tabular-nums", style: { color: o ? e.today : e.textMuted } }, Q(l.start)),
        /* @__PURE__ */ React.createElement("div", { className: "w-[80px] text-[11px] font-medium text-center tabular-nums", style: { color: o ? e.today : e.textMuted } }, I ? "—" : Q(l.end))
      );
    })
  ));
}
function gt(r, g) {
  const i = g === "day" ? dt : ct, L = (m, d) => {
    const s = [], l = (/* @__PURE__ */ new Date()).toDateString();
    let p = -1;
    for (let u = 0; u < d; u++) {
      const I = K(m, u), o = I.toDateString() === l;
      o && (p = u), s.push({
        date: I,
        isToday: o,
        isWeekend: I.getDay() === 0 || I.getDay() === 6
      });
    }
    return { daysArr: s, todayIndex: p };
  };
  if (r.length === 0) {
    const m = /* @__PURE__ */ new Date(), d = ze(m), s = Me(m), l = de(d, s) + 1, { daysArr: p, todayIndex: u } = L(d, l);
    return {
      start: d,
      end: s,
      totalDays: l,
      dayWidth: i,
      totalWidth: l * i,
      months: [{ date: d, label: `${Fe[d.getMonth()]} DE ${d.getFullYear()}`, startDay: 0, days: l, width: l * i }],
      years: [{ label: d.getFullYear().toString(), width: l * i }],
      days: p,
      todayIndex: u
    };
  }
  let f = new Date(r[0].start), x = new Date(r[0].end);
  r.forEach((m) => {
    m.start < f && (f = new Date(m.start)), m.end > x && (x = new Date(m.end));
  });
  const k = ze(K(f, -14)), S = Me(K(x, 14)), w = de(k, S) + 1, R = [];
  let $ = new Date(k);
  for (; $ <= S; ) {
    const m = Me($), d = m > S ? S : m, s = de(k, $), l = de($, d) + 1;
    R.push({
      date: new Date($),
      label: `${Fe[$.getMonth()]} DE ${$.getFullYear()}`,
      startDay: s,
      days: l,
      width: l * i
    }), $ = new Date($.getFullYear(), $.getMonth() + 1, 1);
  }
  const { daysArr: v, todayIndex: E } = L(k, w), c = [];
  if (g === "month") {
    let m = "", d = 0;
    for (const s of R) {
      const l = s.date.getFullYear().toString();
      l !== m ? (m && c.push({ label: m, width: d * i }), m = l, d = s.days) : d += s.days;
    }
    m && c.push({ label: m, width: d * i });
  }
  return { start: k, end: S, totalDays: w, dayWidth: i, totalWidth: w * i, months: R, years: c, days: v, todayIndex: E };
}
function oe(r, g) {
  return de(g.start, r) * g.dayWidth;
}
function ft({
  task: r,
  x: g,
  y: i,
  w: L,
  progW: f,
  isHov: x,
  isDrag: k,
  isResize: S,
  isCritical: w,
  isDelayed: R,
  isConnectTarget: $,
  showDots: v,
  isBarDimmed: E,
  isBarHighlighted: c,
  commonEvents: m,
  handleResizeMouseDown: d,
  handleConnectDotMouseDown: s
}) {
  const { timeline: l, viewMode: p } = Ee();
  if (r.originalType === "step") {
    const u = ee[r.colorIdx ?? 0], I = i + (Y - Z) / 2, o = !!(r.previsionStart && r.previsionEnd), b = o ? oe(r.previsionStart, l) : 0, N = o ? Math.max(oe(r.previsionEnd, l) - b, p === "month" ? l.dayWidth : 6) : 0, B = I + Z + 3;
    return /* @__PURE__ */ t.createElement(t.Fragment, { key: r.id }, o && /* @__PURE__ */ t.createElement(
      "div",
      {
        title: `Previsto: ${Q(r.previsionStart)} → ${Q(r.previsionEnd)}`,
        style: {
          position: "absolute",
          left: b,
          top: B,
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
    ), /* @__PURE__ */ t.createElement(
      "div",
      {
        "data-task-id": r.id,
        ...m,
        style: {
          position: "absolute",
          left: g,
          top: I,
          width: L,
          height: Z,
          borderRadius: Z / 2,
          background: R ? "linear-gradient(135deg, #fdd, #fee)" : u.bar,
          border: w ? `2px solid ${e.today}` : R ? `1.5px solid ${e.today}88` : `1.5px solid ${u.barBorder}`,
          cursor: k || S ? "grabbing" : "grab",
          zIndex: x || $ ? 20 : 10,
          boxShadow: $ ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : w ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : c && !x ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : x ? `0 3px 12px ${u.progress}22` : "none",
          transform: x ? "scaleY(1.06)" : "scaleY(1)",
          opacity: E ? 0.15 : 1,
          transition: k || S ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          overflow: "visible"
        }
      },
      /* @__PURE__ */ t.createElement("div", { style: { position: "absolute", left: 0, top: 0, width: L, height: "100%", borderRadius: Z / 2, overflow: "hidden", pointerEvents: "none" } }, /* @__PURE__ */ t.createElement("div", { style: {
        position: "absolute",
        left: 0,
        top: 0,
        width: f,
        height: "100%",
        background: R ? `linear-gradient(90deg, ${e.today}cc, ${e.today}88)` : `linear-gradient(90deg, ${u.progress}, ${u.progress}cc)`,
        borderRadius: `${Z / 2}px 0 0 ${Z / 2}px`,
        transition: k || S ? "none" : "width 0.3s"
      } }), L > 50 && /* @__PURE__ */ t.createElement("span", { style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.05em",
        color: r.progress > 50 ? "#fff" : R ? e.today : u.progress,
        zIndex: 1,
        pointerEvents: "none"
      } }, Math.round(r.progress), "%")),
      /* @__PURE__ */ t.createElement("div", { onMouseDown: (j) => d(j, r, "left"), style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${Z / 2}px 0 0 ${Z / 2}px` } }),
      /* @__PURE__ */ t.createElement("div", { onMouseDown: (j) => d(j, r, "right"), style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${Z / 2}px ${Z / 2}px 0` } }),
      v && /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("div", { "data-task-id": r.id, onMouseDown: (j) => s(j, r, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }), /* @__PURE__ */ t.createElement("div", { "data-task-id": r.id, onMouseDown: (j) => s(j, r, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }))
    ));
  }
  if (r.originalType === "milestone") {
    const u = i + (Y - $e) / 2;
    return /* @__PURE__ */ t.createElement(
      "div",
      {
        "data-task-id": r.id,
        ...m,
        style: {
          position: "absolute",
          left: g - 6,
          top: u,
          height: $e,
          minWidth: Ye,
          borderRadius: $e / 2,
          background: w ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #e8f5ee, #f0f8f4)",
          border: $ ? `2px solid ${e.group}` : w ? `2px solid ${e.today}` : `1.5px solid ${e.milestoneRing}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
          paddingLeft: 4,
          paddingRight: 12,
          cursor: k ? "grabbing" : "grab",
          zIndex: x || $ ? 20 : 10,
          boxShadow: $ ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : w ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : c && !x ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : x ? `0 3px 12px ${e.milestone}22` : "0 1px 3px rgba(0,0,0,0.06)",
          opacity: E ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: x ? "translateY(-1px)" : "none",
          whiteSpace: "nowrap",
          overflow: "visible"
        }
      },
      /* @__PURE__ */ t.createElement("div", { style: { width: 20, height: 20, borderRadius: "50%", background: w ? e.today : e.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ t.createElement(xe, { size: 11, color: "#fff", strokeWidth: 2.5 })),
      /* @__PURE__ */ t.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: w ? e.today : e.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 } }, r.name),
      r.progress >= 100 && /* @__PURE__ */ t.createElement("span", { style: { fontSize: 9, fontWeight: 700, color: "#fff", background: e.milestoneRing, borderRadius: 6, padding: "1px 5px" } }, "✓"),
      v && /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("div", { "data-task-id": r.id, onMouseDown: (I) => s(I, r, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }), /* @__PURE__ */ t.createElement("div", { "data-task-id": r.id, onMouseDown: (I) => s(I, r, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }))
    );
  }
  if (r.originalType === "event") {
    const I = i + (Y - 22) / 2;
    return /* @__PURE__ */ t.createElement(
      "div",
      {
        "data-task-id": r.id,
        ...m,
        style: {
          position: "absolute",
          left: g - 22 / 2,
          top: I,
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: w ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #fff7ed, #ffedd5)",
          border: $ ? `2px solid ${e.group}` : w ? `2px solid ${e.today}` : `1.5px solid ${e.event}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: k ? "grabbing" : "grab",
          zIndex: x || $ ? 20 : 10,
          boxShadow: $ ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : w ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : c && !x ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : x ? `0 3px 12px ${e.event}33` : "0 1px 3px rgba(0,0,0,0.06)",
          opacity: E ? 0.15 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: x ? "scale(1.15)" : "none",
          overflow: "visible"
        }
      },
      /* @__PURE__ */ t.createElement("div", { style: { width: 14, height: 14, borderRadius: "50%", background: w ? e.today : e.event, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ t.createElement(be, { size: 8, color: "#fff", strokeWidth: 3 })),
      r.progress >= 100 && /* @__PURE__ */ t.createElement("div", { style: { position: "absolute", top: -5, right: -12, background: e.event, color: "#fff", fontSize: 8, fontWeight: 700, padding: "1px 4px", borderRadius: 4 } }, "✓"),
      /* @__PURE__ */ t.createElement("div", { style: {
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
        color: w ? e.today : e.event,
        whiteSpace: "nowrap",
        pointerEvents: "none",
        opacity: x ? 1 : 0,
        transition: "opacity 0.15s"
      } }, r.name),
      v && /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("div", { "data-task-id": r.id, onMouseDown: (o) => s(o, r, "left"), style: { position: "absolute", left: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }), /* @__PURE__ */ t.createElement("div", { "data-task-id": r.id, onMouseDown: (o) => s(o, r, "right"), style: { position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }))
    );
  }
  if (r.originalType === "note") {
    const o = i + (Y - 44) / 2, b = r.noteColor || e.note;
    return /* @__PURE__ */ t.createElement(
      "div",
      {
        "data-task-id": r.id,
        ...m,
        style: {
          position: "absolute",
          left: g - 36 / 2,
          top: o,
          width: 36,
          height: 44,
          background: b,
          borderRadius: 2,
          cursor: k ? "grabbing" : "grab",
          zIndex: x || $ ? 20 : 10,
          boxShadow: $ ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : c && !x ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : x ? "3px 4px 12px rgba(0,0,0,0.2)" : "1px 2px 5px rgba(0,0,0,0.15)",
          opacity: E ? 0.2 : 1,
          transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
          transform: x ? "rotate(-2deg) scale(1.05)" : "none",
          overflow: "visible",
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(0,0,0,0.04)"
        }
      },
      /* @__PURE__ */ t.createElement("div", { style: { position: "absolute", top: -5, left: "50%", transform: "translateX(-50%)", width: 18, height: 6, background: "rgba(255,255,255,0.6)", borderRadius: 1, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" } }),
      /* @__PURE__ */ t.createElement("div", { style: { padding: "6px 4px 2px", flex: 1, overflow: "hidden" } }, /* @__PURE__ */ t.createElement("div", { style: { width: "80%", height: 2, background: "rgba(0,0,0,0.1)", borderRadius: 1, marginBottom: 3 } }), /* @__PURE__ */ t.createElement("div", { style: { width: "60%", height: 2, background: "rgba(0,0,0,0.1)", borderRadius: 1, marginBottom: 3 } }), /* @__PURE__ */ t.createElement("div", { style: { width: "90%", height: 2, background: "rgba(0,0,0,0.1)", borderRadius: 1 } })),
      (r.filesCount || 0) > 0 && /* @__PURE__ */ t.createElement("div", { style: { position: "absolute", bottom: -5, right: -5, background: e.headerBg, color: e.textSecondary, borderRadius: "50%", border: `1px solid ${e.borderLight}`, width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", zIndex: 2 } }, /* @__PURE__ */ t.createElement(Be, { size: 8 })),
      /* @__PURE__ */ t.createElement("div", { style: {
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
        opacity: x ? 1 : 0,
        transition: "opacity 0.15s",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
      } }, r.name),
      v && /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("div", { "data-task-id": r.id, onMouseDown: (N) => s(N, r, "left"), style: { position: "absolute", left: -10, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }), /* @__PURE__ */ t.createElement("div", { "data-task-id": r.id, onMouseDown: (N) => s(N, r, "right"), style: { position: "absolute", right: -10, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, borderRadius: "50%", background: e.group, border: "2.5px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "crosshair", zIndex: 30 } }))
    );
  }
  return null;
}
function mt() {
  const {
    arrows: r,
    hoveredTaskId: g,
    selectedTaskId: i,
    relatedIds: L
  } = Ee();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, r.map((f, x) => {
    const k = g === f.predId || g === f.succId, S = !i || f.predId === i || f.succId === i || L.has(f.predId) || L.has(f.succId), w = i !== null && S, R = k ? e.arrowHover : w ? e.group : e.arrow;
    return /* @__PURE__ */ React.createElement("g", { key: x, style: { opacity: S ? w ? 1 : void 0 : 0.08, transition: "opacity 0.18s" } }, /* @__PURE__ */ React.createElement(
      "path",
      {
        d: f.path,
        fill: "none",
        stroke: R,
        strokeWidth: w ? 2.5 : k ? 2 : 1.5,
        style: { transition: "stroke 0.2s, stroke-width 0.2s" }
      }
    ), /* @__PURE__ */ React.createElement(
      "polygon",
      {
        points: `${f.headX},${f.headY} ${f.headX - 6},${f.headY - 4} ${f.headX - 6},${f.headY + 4}`,
        fill: R,
        style: { transition: "fill 0.2s" }
      }
    ));
  }));
}
const Le = (r) => ({
  id: r.id,
  name: r.name,
  start: r.start,
  end: r.end,
  type: r.originalType === "step" ? "task" : r.originalType,
  progress: r.progress
}), he = (r, g) => {
  switch (r) {
    case "step":
      return /* @__PURE__ */ t.createElement("div", { style: { width: 12, height: 12, borderRadius: 2, background: ee[g ?? 0].bar, border: `1.5px solid ${ee[g ?? 0].barBorder}`, flexShrink: 0 } });
    case "milestone":
      return /* @__PURE__ */ t.createElement("div", { style: { width: 16, height: 16, borderRadius: "50%", background: e.milestone, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ t.createElement(xe, { size: 8, color: "#fff" }));
    case "event":
      return /* @__PURE__ */ t.createElement("div", { style: { width: 16, height: 16, borderRadius: "50%", background: e.event, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ t.createElement(be, { size: 8, color: "#fff" }));
    case "note":
      return /* @__PURE__ */ t.createElement("div", { style: { width: 12, height: 14, background: e.note, borderRadius: 2, boxShadow: "1px 1px 2px rgba(0,0,0,0.1)", flexShrink: 0 } });
    default:
      return null;
  }
};
function ht() {
  const {
    props: r,
    viewMode: g,
    timeline: i,
    displayRows: L,
    dragState: f,
    resizeState: x,
    connectState: k,
    pendingConnection: S,
    setPendingConnection: w,
    depModalType: R,
    setDepModalType: $,
    depModalLag: v,
    setDepModalLag: E,
    depCreating: c,
    deletingDepId: m,
    setDeletingDepId: d,
    chartMenu: s,
    setChartMenu: l,
    rightBodyRef: p,
    timeHeaderRef: u,
    handleChartMouseDown: I,
    handleChartWheel: o,
    openChartMenu: b,
    hoveredTaskId: N,
    setHoveredTaskId: B,
    selectedTaskId: j,
    setSelectedTaskId: W,
    tooltip: T,
    setTooltip: G,
    popupState: O,
    setPopupState: X,
    criticalIds: ne,
    delayedIds: ce,
    relatedIds: pe,
    handleBarMouseDown: ue,
    handleResizeMouseDown: ve,
    handleConnectDotMouseDown: ge,
    handleCreateDependency: we
  } = Ee(), {
    translations: ae,
    onViewStage: fe,
    onEditStage: ke,
    onDeleteStage: C,
    onDeleteDependency: F,
    onAddNewStage: Se,
    onAddMilestone: Re,
    onAddEvent: Ie,
    onAddNote: Te
  } = r, V = (h, n) => ae ? typeof ae == "function" ? ae(h, n) : ae[h] || n : n, ie = (h, n) => Math.round((n.getTime() - h.getTime()) / 864e5) + 1, te = Math.max(L.length * Y, 400), le = () => X({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      className: "flex-1 w-full bg-[#FAFAFA] flex flex-col relative overflow-hidden",
      style: { borderLeft: `1px solid ${e.borderLight}` }
    },
    /* @__PURE__ */ t.createElement(
      "div",
      {
        ref: u,
        style: {
          height: ye * 2,
          background: e.headerBg,
          borderBottom: `1px solid ${e.borderLight}`,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
        },
        onWheel: o
      },
      /* @__PURE__ */ t.createElement("div", { style: { width: i.totalWidth, height: "100%", position: "relative" } }, /* @__PURE__ */ t.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: ye, display: "flex" } }, g === "day" && i.months.map((h, n) => /* @__PURE__ */ t.createElement("div", { key: n, style: { width: h.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 } }, /* @__PURE__ */ t.createElement("span", { style: { fontSize: 13, fontWeight: 700, color: e.textTitle, letterSpacing: "0.02em" } }, h.label))), g === "month" && i.years?.map((h, n) => /* @__PURE__ */ t.createElement("div", { key: n, style: { width: h.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, paddingLeft: 12, display: "flex", alignItems: "flex-end", paddingBottom: 6 } }, /* @__PURE__ */ t.createElement("span", { style: { fontSize: 13, fontWeight: 700, color: e.textTitle, letterSpacing: "0.02em" } }, h.label)))), /* @__PURE__ */ t.createElement("div", { style: { position: "absolute", top: ye, left: 0, right: 0, height: ye, display: "flex" } }, g === "day" && i.days.map((h, n) => {
        const a = h.isToday;
        return /* @__PURE__ */ t.createElement("div", { key: n, style: { width: i.dayWidth, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ t.createElement("span", { style: { fontSize: 11, fontWeight: a ? 800 : 500, color: a ? e.today : e.textSecondary, letterSpacing: "-0.03em" } }, h.date.getDate().toString().padStart(2, "0")));
      }), g === "month" && i.months.map((h, n) => /* @__PURE__ */ t.createElement("div", { key: n, style: { width: h.width, position: "relative", height: "100%", borderRight: `1px solid ${e.borderLight}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ t.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: e.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em" } }, h.label.substring(0, 3))))))
    ),
    /* @__PURE__ */ t.createElement(
      "div",
      {
        ref: p,
        className: "flex-1 overflow-auto bg-white gantt-scroll",
        onMouseDown: I,
        onWheel: o,
        onContextMenu: b,
        style: { position: "relative" }
      },
      /* @__PURE__ */ t.createElement("div", { style: { width: i.totalWidth, height: te, position: "relative" } }, /* @__PURE__ */ t.createElement("svg", { width: i.totalWidth, height: te, style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" } }, /* @__PURE__ */ t.createElement("defs", null, /* @__PURE__ */ t.createElement("pattern", { id: "gantt-y-lines", x: "0", y: "0", width: i.dayWidth, height: Y, patternUnits: "userSpaceOnUse" }, /* @__PURE__ */ t.createElement("line", { x1: i.dayWidth, y1: "0", x2: i.dayWidth, y2: Y, stroke: e.border, strokeWidth: "1", strokeDasharray: "4 4", opacity: "0.4" })), /* @__PURE__ */ t.createElement("pattern", { id: "gantt-x-lines", x: "0", y: "0", width: i.dayWidth, height: Y, patternUnits: "userSpaceOnUse" }, /* @__PURE__ */ t.createElement("line", { x1: "0", y1: Y, x2: i.dayWidth, y2: Y, stroke: e.borderLight, strokeWidth: "1" }))), /* @__PURE__ */ t.createElement("rect", { width: "100%", height: "100%", fill: "url(#gantt-x-lines)" }), /* @__PURE__ */ t.createElement("rect", { width: "100%", height: "100%", fill: "url(#gantt-y-lines)" }), g === "day" && i.days.map((h, n) => h.isWeekend ? /* @__PURE__ */ t.createElement("rect", { key: `we-${n}`, x: n * i.dayWidth, y: 0, width: i.dayWidth, height: te, fill: e.weekendBg, opacity: 0.6 }) : null), g === "month" && i.days.map((h, n) => h.isWeekend ? /* @__PURE__ */ t.createElement("rect", { key: `wem-${n}`, x: n * i.dayWidth, y: 0, width: i.dayWidth, height: te, fill: e.weekendBg, opacity: 0.3 }) : null), i.todayIndex >= 0 && /* @__PURE__ */ t.createElement("g", null, /* @__PURE__ */ t.createElement("rect", { x: i.todayIndex * i.dayWidth, y: 0, width: i.dayWidth, height: te, fill: e.todayBg }), /* @__PURE__ */ t.createElement("line", { x1: (i.todayIndex + 0.5) * i.dayWidth, y1: 0, x2: (i.todayIndex + 0.5) * i.dayWidth, y2: te, stroke: e.today, strokeWidth: 2, strokeDasharray: "4 4", opacity: 0.3 }))), L.map((h, n) => h.kind === "group" || h.kind === "projectHeader" ? /* @__PURE__ */ t.createElement("div", { key: `bg-${n}`, style: {
        position: "absolute",
        left: 0,
        top: n * Y,
        width: "100%",
        height: Y,
        background: h.kind === "projectHeader" ? e.headerBg : `${e.groupLight}15`,
        borderBottom: `1px solid ${e.borderLight}`,
        pointerEvents: "none"
      } }) : null), /* @__PURE__ */ t.createElement("div", { style: { position: "absolute", inset: 0 } }, L.map((h, n) => {
        if (h.kind !== "task") return null;
        const a = h.task, y = f?.task.id === a.id, M = x?.task.id === a.id, A = y || M && x.edge === "left" ? K(a.start, y ? f.offsetDays : x.offsetDays) : a.start, D = y || M && x.edge === "right" ? K(a.end, y ? f.offsetDays : x.offsetDays) : a.end, z = a.originalType !== "step";
        let se = oe(A, i), H = 0, q = 0;
        z || (H = Math.max(oe(D, i) - se, i.dayWidth), q = H * (a.progress / 100));
        const Ae = N === a.id, De = j === a.id, Oe = ce.has(a.id), _e = ne.has(a.id), Ge = !!j && !De && !pe.has(a.id), He = De || !!j && pe.has(a.id), Ue = k?.hoverTargetId === a.id, Ve = Ae || De, Je = n * Y, Ke = {
          onMouseEnter: (J) => {
            B(a.id), !f && !x && G({ task: a, x: J.clientX, y: J.clientY });
          },
          onMouseMove: (J) => {
            N === a.id && !f && !x && G({ task: a, x: J.clientX, y: J.clientY });
          },
          onMouseLeave: () => {
            B(null), G(null);
          },
          onClick: (J) => {
            J.stopPropagation(), W(a.id), J.detail === 2 && fe?.(Le(a)), X(!O.isOpen || O.task?.id !== a.id ? {
              isOpen: !0,
              position: { x: J.clientX, y: J.clientY },
              task: a
            } : { isOpen: !1, position: { x: 0, y: 0 }, task: null });
          },
          onMouseDown: (J) => ue(J, a)
        };
        return /* @__PURE__ */ t.createElement(
          ft,
          {
            key: a.id,
            task: a,
            x: se,
            y: Je,
            w: H,
            progW: q,
            isHov: Ae,
            isDrag: y,
            isResize: M,
            isCritical: _e,
            isDelayed: Oe,
            isConnectTarget: Ue,
            showDots: Ve,
            isBarDimmed: Ge,
            isBarHighlighted: He,
            commonEvents: Ke,
            handleResizeMouseDown: ve,
            handleConnectDotMouseDown: ge
          }
        );
      }), /* @__PURE__ */ t.createElement("svg", { width: i.totalWidth, height: te, style: { position: "absolute", inset: 0, pointerEvents: "none" } }, /* @__PURE__ */ t.createElement(mt, null)), T && !f && /* @__PURE__ */ t.createElement("div", { style: { position: "fixed", left: T.x + 16, top: T.y - 10, zIndex: 9999, pointerEvents: "none" } }, /* @__PURE__ */ t.createElement(
        "div",
        {
          className: "rounded-xl px-4 py-3 min-w-[220px] max-w-[340px] backdrop-blur-sm",
          style: { background: `${e.surface}f5`, border: `1px solid ${e.borderLight}`, boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)" }
        },
        /* @__PURE__ */ t.createElement("div", { className: "flex items-center gap-2 mb-1.5" }, he(T.task.originalType, T.task.colorIdx), /* @__PURE__ */ t.createElement("span", { className: "text-xs font-bold truncate", style: { color: e.textTitle } }, T.task.name)),
        /* @__PURE__ */ t.createElement("div", { className: "flex flex-col gap-1 text-[11px]", style: { color: e.textSecondary } }, T.task.originalType === "step" ? /* @__PURE__ */ t.createElement(t.Fragment, null, T.task.previsionStart && T.task.previsionEnd && /* @__PURE__ */ t.createElement("div", { style: { background: `${e.headerBg}`, borderRadius: 6, padding: "4px 6px", marginBottom: 2 } }, /* @__PURE__ */ t.createElement("div", { className: "flex items-center gap-1 mb-1" }, /* @__PURE__ */ t.createElement("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${e.textSecondary}44`, border: `1.5px solid ${e.textSecondary}66` } }), /* @__PURE__ */ t.createElement("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: e.textSecondary } }, "Previsto")), /* @__PURE__ */ t.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ t.createElement("span", null, "Início:"), /* @__PURE__ */ t.createElement("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary } }, Q(T.task.previsionStart))), /* @__PURE__ */ t.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ t.createElement("span", null, "Fim:"), /* @__PURE__ */ t.createElement("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary } }, Q(T.task.previsionEnd))), /* @__PURE__ */ t.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ t.createElement("span", null, "Duração:"), /* @__PURE__ */ t.createElement("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary } }, ie(T.task.previsionStart, T.task.previsionEnd), "d"))), /* @__PURE__ */ t.createElement("div", { style: { background: T.task.hasActualDates ? `${e.groupLight}22` : "transparent", borderRadius: 6, padding: "4px 6px" } }, /* @__PURE__ */ t.createElement("div", { className: "flex items-center gap-1 mb-1" }, /* @__PURE__ */ t.createElement("div", { style: { width: 20, height: 4, borderRadius: 2, background: ee[T.task.colorIdx ?? 0].progress } }), /* @__PURE__ */ t.createElement("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: T.task.hasActualDates ? e.group : e.textSecondary } }, T.task.hasActualDates ? "Real" : "Previsto (em uso)")), /* @__PURE__ */ t.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ t.createElement("span", null, "Início:"), /* @__PURE__ */ t.createElement("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary } }, Q(T.task.start))), /* @__PURE__ */ t.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ t.createElement("span", null, "Fim:"), /* @__PURE__ */ t.createElement("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary } }, Q(T.task.end))), /* @__PURE__ */ t.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ t.createElement("span", null, "Duração:"), /* @__PURE__ */ t.createElement("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary } }, ie(T.task.start, T.task.end), "d"))), /* @__PURE__ */ t.createElement("div", { className: "flex justify-between gap-4 pt-1 mt-1", style: { borderTop: `1px solid ${e.borderLight}` } }, /* @__PURE__ */ t.createElement("span", null, V("charts.gantt.progress", "Progresso"), ":"), /* @__PURE__ */ t.createElement("span", { className: "font-bold", style: { color: e.group } }, Math.round(T.task.progress), "%"))) : T.task.originalType === "note" ? /* @__PURE__ */ t.createElement(t.Fragment, null, T.task.noteProjectTitle && /* @__PURE__ */ t.createElement("div", { className: "flex items-center gap-1.5 mb-1" }, /* @__PURE__ */ t.createElement("div", { style: { width: 8, height: 8, borderRadius: 2, background: T.task.noteColor || e.note, flexShrink: 0 } }), /* @__PURE__ */ t.createElement("span", { className: "text-[11px] font-semibold truncate", style: { color: e.textPrimary } }, T.task.noteProjectTitle)), /* @__PURE__ */ t.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ t.createElement("span", null, "Data:"), /* @__PURE__ */ t.createElement("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary } }, Q(T.task.start))), (T.task.filesCount || 0) > 0 && /* @__PURE__ */ t.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ t.createElement("span", null, "Anexos:"), /* @__PURE__ */ t.createElement("span", { className: "font-semibold flex items-center gap-1", style: { color: e.textPrimary } }, /* @__PURE__ */ t.createElement(Be, { size: 10 }), T.task.filesCount))) : /* @__PURE__ */ t.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ t.createElement("span", null, V("charts.gantt.start", "Início"), ":"), /* @__PURE__ */ t.createElement("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary } }, Q(T.task.start))))
      ))))
    ),
    O.task && O.isOpen && (() => {
      const h = O.task, n = (r.dependencies || []).filter((D) => D.predecessorId === h.id || D.successorId === h.id), a = { FS: "Início após Fim", SS: "Inícios simultâneos", FF: "Fins simultâneos", SF: "Fim após Início" }, y = n.length > 0 ? 300 : 220, M = Math.min(O.position.x, window.innerWidth - y - 16), A = O.position.y + 8;
      return /* @__PURE__ */ t.createElement(
        "div",
        {
          "data-popup": "gantt-action",
          style: { position: "fixed", left: M, top: A, zIndex: 9999, background: "#fff", borderRadius: 4, boxShadow: "0 12px 40px rgba(0,0,0,0.14), 0 3px 10px rgba(0,0,0,0.07)", border: `1.5px solid ${e.borderLight}`, width: y, overflow: "hidden" },
          onMouseDown: (D) => D.stopPropagation()
        },
        /* @__PURE__ */ t.createElement("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${e.borderLight}` } }, /* @__PURE__ */ t.createElement("p", { style: { fontSize: 13, fontWeight: 700, color: e.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: h.name }, h.name)),
        /* @__PURE__ */ t.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" } }, /* @__PURE__ */ t.createElement("button", { onClick: () => {
          fe?.(Le(h)), le();
        }, className: "gantt-popup-btn" }, /* @__PURE__ */ t.createElement(rt, { size: 15 }), " ", /* @__PURE__ */ t.createElement("span", null, V("projects.stepAction.viewDetails", "Ver detalhes"))), /* @__PURE__ */ t.createElement("button", { onClick: () => {
          ke?.(Le(h)), le();
        }, className: "gantt-popup-btn" }, /* @__PURE__ */ t.createElement(ot, { size: 15 }), " ", /* @__PURE__ */ t.createElement("span", null, V("projects.stepAction.edit", "Editar"))), /* @__PURE__ */ t.createElement("button", { onClick: () => {
          C?.(h.id), le();
        }, className: "gantt-popup-btn text-red-500 hover:bg-red-50" }, /* @__PURE__ */ t.createElement(nt, { size: 15 }), " ", /* @__PURE__ */ t.createElement("span", null, V("projects.stepAction.delete", "Excluir")))),
        n.length > 0 && /* @__PURE__ */ t.createElement("div", { style: { borderTop: `1px solid ${e.borderLight}`, padding: "10px 14px 12px" } }, /* @__PURE__ */ t.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 } }, "Relações (", n.length, ")"), /* @__PURE__ */ t.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 5 } }, n.map((D) => {
          const z = D.predecessorId === h.id, se = z ? D.successorName : D.predecessorName, H = m === D.id;
          return /* @__PURE__ */ t.createElement("div", { key: D.id, style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderRadius: 8, background: "#f8fafb", border: `1px solid ${e.borderLight}` } }, /* @__PURE__ */ t.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ t.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: e.group, marginBottom: 2 } }, /* @__PURE__ */ t.createElement("span", { style: { background: `${e.group}15`, borderRadius: 4, padding: "1px 5px" } }, D.type), " ", /* @__PURE__ */ t.createElement("span", { style: { color: e.textSecondary, fontWeight: 500 } }, z ? "→ " : "← "), /* @__PURE__ */ t.createElement("span", { style: { color: e.textMuted, fontWeight: 400, fontSize: 9 } }, a[D.type] ?? D.type)), /* @__PURE__ */ t.createElement("div", { style: { fontSize: 11, color: e.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: se }, se)), F && /* @__PURE__ */ t.createElement(
            "button",
            {
              disabled: !!H,
              onClick: async () => {
                d(D.id);
                try {
                  await F(D.id);
                } finally {
                  d(null);
                }
              },
              style: { flexShrink: 0, padding: "4px 6px", borderRadius: 6, border: "none", background: H ? "#fee2e2" : "transparent", cursor: H ? "wait" : "pointer", color: "#ef4444", fontSize: 14, opacity: H ? 0.5 : 1, transition: "background 0.12s" }
            },
            H ? "⟳" : "🗑"
          ));
        })))
      );
    })(),
    s && /* @__PURE__ */ t.createElement(
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
        onClick: (h) => h.stopPropagation()
      },
      /* @__PURE__ */ t.createElement("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${e.borderLight}`, background: e.headerBg } }, /* @__PURE__ */ t.createElement("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" } }, "Adicionar em ", Q(s.date))),
      /* @__PURE__ */ t.createElement("div", { style: { padding: "5px 5px" } }, [
        { label: "Etapa", icon: he("step", 0), action: () => {
          Se?.(s.date, s.projectId), l(null);
        } },
        { label: "Marco", icon: he("milestone"), action: () => {
          Re?.(s.date, s.projectId), l(null);
        } },
        { label: "Evento", icon: he("event"), action: () => {
          Ie?.(s.date, s.projectId), l(null);
        } },
        { label: "Nota", icon: he("note"), action: () => {
          Te?.(s.date, s.projectId), l(null);
        } }
      ].map((h) => /* @__PURE__ */ t.createElement(
        "button",
        {
          key: h.label,
          onClick: h.action,
          className: "gantt-popup-btn",
          style: { display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 500, color: e.textPrimary, textAlign: "left", transition: "background 0.12s" }
        },
        h.icon,
        " ",
        h.label
      )))
    ),
    k && /* @__PURE__ */ t.createElement("svg", { style: { position: "fixed", inset: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 99999 } }, /* @__PURE__ */ t.createElement("defs", null, /* @__PURE__ */ t.createElement("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto" }, /* @__PURE__ */ t.createElement("path", { d: "M0,0 L0,6 L6,3 z", fill: e.group }))), /* @__PURE__ */ t.createElement("line", { x1: k.fromScreenX, y1: k.fromScreenY, x2: k.currentScreenX, y2: k.currentScreenY, stroke: e.group, strokeWidth: 2.5, strokeDasharray: "8 5", markerEnd: "url(#connect-arrow)", opacity: 0.85, style: { animation: "gantt-dash 0.5s linear infinite" } }), /* @__PURE__ */ t.createElement("style", null, "@keyframes gantt-dash { to { stroke-dashoffset: -13; } }")),
    S && /* @__PURE__ */ t.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99998 }, onClick: () => w(null) }, /* @__PURE__ */ t.createElement("div", { style: { background: "#fff", borderRadius: 20, padding: "32px 36px", width: 420, boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 6px 24px rgba(0,0,0,0.08)" }, onClick: (h) => h.stopPropagation() }, /* @__PURE__ */ t.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ t.createElement("h3", { style: { fontSize: 18, fontWeight: 700, color: e.textTitle, marginBottom: 4 } }, "Tipo de Relação"), /* @__PURE__ */ t.createElement("p", { style: { fontSize: 13, color: e.textSecondary } }, "Escolha como as duas tarefas se relacionam")), /* @__PURE__ */ t.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 } }, [
      { type: "FS", label: "Início após Fim", desc: "B começa quando A termina" },
      { type: "SS", label: "Inícios simultâneos", desc: "A e B começam juntos" },
      { type: "FF", label: "Fins simultâneos", desc: "A e B terminam juntos" },
      { type: "SF", label: "Fim após Início", desc: "B termina quando A começa" }
    ].map((h) => /* @__PURE__ */ t.createElement("button", { key: h.type, onClick: () => $(h.type), style: { border: R === h.type ? `2px solid ${e.group}` : `1.5px solid ${e.borderLight}`, borderRadius: 12, padding: "12px 14px", textAlign: "left", cursor: "pointer", background: R === h.type ? `${e.group}0d` : "#fafafa" } }, /* @__PURE__ */ t.createElement("div", { style: { fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: e.group, marginBottom: 4, background: R === h.type ? `${e.group}20` : `${e.group}0d`, borderRadius: 6, padding: "2px 6px", display: "inline-block" } }, h.type), /* @__PURE__ */ t.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 2 } }, h.label), /* @__PURE__ */ t.createElement("div", { style: { fontSize: 11, color: e.textSecondary } }, h.desc)))), /* @__PURE__ */ t.createElement("div", { style: { marginBottom: 24 } }, /* @__PURE__ */ t.createElement("label", { style: { display: "block", fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 6 } }, "Atraso (Lag) em dias"), /* @__PURE__ */ t.createElement("input", { type: "number", value: v, onChange: (h) => E(parseInt(h.target.value) || 0), style: { width: "100%", padding: "10px 12px", border: `1.5px solid ${e.borderLight}`, borderRadius: 8, fontSize: 14 } })), /* @__PURE__ */ t.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12 } }, /* @__PURE__ */ t.createElement("button", { onClick: () => w(null), style: { padding: "10px 16px", borderRadius: 8, border: `1px solid ${e.borderLight}`, background: "#fff", cursor: "pointer", fontWeight: 600 } }, "Cancelar"), /* @__PURE__ */ t.createElement("button", { onClick: we, disabled: c, style: { padding: "10px 16px", borderRadius: 8, border: "none", background: e.group, color: "#fff", cursor: c ? "wait" : "pointer", fontWeight: 600 } }, c ? "Salvando..." : "Criar Dependência"))))
  );
}
function yt(r) {
  const g = me(null), i = me(null), L = me(null), f = me(!1), x = U(() => {
    if (f.current) return;
    f.current = !0;
    const E = i.current;
    E && g.current && (g.current.scrollTop = E.scrollTop), E && L.current && (L.current.scrollLeft = E.scrollLeft), f.current = !1;
  }, []), k = U(() => {
    f.current || (f.current = !0, g.current && i.current && (i.current.scrollTop = g.current.scrollTop), f.current = !1);
  }, []), S = me(!1);
  Ce(() => {
    if (S.current || !r.totalWidth) return;
    const E = i.current;
    if (!E) return;
    const c = oe(/* @__PURE__ */ new Date(), r);
    if (c >= 0 && c <= r.totalWidth) {
      const m = c - E.clientWidth / 2;
      E.scrollLeft = Math.max(0, m), L.current && (L.current.scrollLeft = E.scrollLeft), S.current = !0;
    }
  }, [r]);
  const [w, R] = P(null), $ = U((E, c) => {
    if (c || E.button === 2) return;
    const m = i.current;
    m && (E.preventDefault(), R({ startX: E.clientX, startY: E.clientY, scrollLeft: m.scrollLeft, scrollTop: m.scrollTop }));
  }, []);
  Ce(() => {
    if (!w) return;
    const E = (m) => {
      const d = i.current;
      if (!d) return;
      const s = m.clientX - w.startX, l = m.clientY - w.startY;
      d.scrollLeft = w.scrollLeft - s, d.scrollTop = w.scrollTop - l, g.current && (g.current.scrollTop = d.scrollTop), L.current && (L.current.scrollLeft = d.scrollLeft);
    }, c = () => R(null);
    return document.addEventListener("mousemove", E), document.addEventListener("mouseup", c), () => {
      document.removeEventListener("mousemove", E), document.removeEventListener("mouseup", c);
    };
  }, [w]);
  const v = U((E) => {
    const c = i.current;
    if (c)
      if (E.preventDefault(), E.shiftKey || Math.abs(E.deltaX) > Math.abs(E.deltaY)) {
        const m = E.shiftKey ? E.deltaY : E.deltaX;
        c.scrollLeft += m, L.current && (L.current.scrollLeft = c.scrollLeft);
      } else
        c.scrollTop += E.deltaY, g.current && (g.current.scrollTop = c.scrollTop);
  }, []);
  return {
    leftBodyRef: g,
    rightBodyRef: i,
    timeHeaderRef: L,
    handleRightScroll: x,
    handleLeftScroll: k,
    handleChartMouseDown: $,
    handleChartWheel: v,
    panState: w,
    setPanState: R
  };
}
function xt(r, g, i, L) {
  const f = /* @__PURE__ */ new Map();
  return r.forEach((x) => f.set(x.id, x)), g.map((x) => {
    const k = f.get(x.predecessorId), S = f.get(x.successorId);
    if (!k || !S) return null;
    const w = L.get(k.id), R = L.get(S.id);
    if (w == null || R == null) return null;
    const $ = k.originalType !== "step", v = S.originalType !== "step", E = $ ? oe(k.start, i) + Ye : oe(k.end, i), c = w * Y + Y / 2, m = v ? oe(S.start, i) - 10 : oe(S.start, i), d = R * Y + Y / 2, s = 14, l = Math.max(E + s, m - s), p = c === d ? `M${E},${c} L${m - 6},${d}` : `M${E},${c} L${l},${c} L${l},${d} L${m - 6},${d}`;
    return { predId: k.id, succId: S.id, path: p, headX: m - 6, headY: d };
  }).filter(Boolean);
}
function bt(r, g) {
  if (r.length === 0 || g.length === 0) return /* @__PURE__ */ new Set();
  const i = /* @__PURE__ */ new Map();
  r.forEach((p) => i.set(p.id, p));
  const L = new Set(r.map((p) => p.id)), f = g.filter((p) => L.has(p.predecessorId) && L.has(p.successorId));
  if (f.length === 0) return /* @__PURE__ */ new Set();
  const x = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  f.forEach((p) => {
    x.has(p.predecessorId) || x.set(p.predecessorId, []), x.get(p.predecessorId).push(p.successorId), k.has(p.successorId) || k.set(p.successorId, []), k.get(p.successorId).push(p.predecessorId);
  });
  const S = (p) => Math.max(1, de(p.start, p.end)), w = /* @__PURE__ */ new Set(), R = [];
  function $(p) {
    w.has(p) || (w.add(p), (x.get(p) || []).forEach($), R.unshift(p));
  }
  r.forEach((p) => $(p.id));
  const v = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
  for (const p of R) {
    const u = i.get(p), I = k.get(p) || [];
    let o = 0;
    for (const N of I) o = Math.max(o, E.get(N) || 0);
    const b = I.length > 0 ? o : 0;
    v.set(p, b), E.set(p, b + S(u));
  }
  let c = 0;
  E.forEach((p) => {
    p > c && (c = p);
  });
  const m = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
  for (let p = R.length - 1; p >= 0; p--) {
    const u = R[p], I = i.get(u), o = x.get(u) || [];
    let b = c;
    for (const N of o) b = Math.min(b, m.get(N) ?? c);
    d.set(u, o.length > 0 ? b : c), m.set(u, (d.get(u) || 0) - S(I));
  }
  const s = /* @__PURE__ */ new Set();
  f.forEach((p) => {
    s.add(p.predecessorId), s.add(p.successorId);
  });
  const l = /* @__PURE__ */ new Set();
  for (const p of R) {
    if (!s.has(p)) continue;
    const u = (m.get(p) || 0) - (v.get(p) || 0);
    Math.abs(u) < 0.5 && l.add(p);
  }
  return l;
}
function Et({
  steps: r,
  milestones: g,
  events: i,
  notes: L,
  dependencies: f,
  viewMode: x,
  groupByProject: k,
  visibleTypes: S,
  collapsedGroups: w,
  collapsedProjects: R,
  selectedTaskId: $
}) {
  const v = re(() => {
    const u = [];
    let I = 0;
    return r.forEach((o) => {
      const b = !!(o.startDate && o.finishDate), N = o.startDate || o.previsionStartDate, B = o.finishDate || o.previsionFinishDate;
      if (!N || !B) return;
      const j = new Date(N), W = new Date(B);
      if (isNaN(j.getTime()) || isNaN(W.getTime())) return;
      W <= j && W.setDate(W.getDate() + 1);
      let T, G;
      if (o.previsionStartDate && o.previsionFinishDate) {
        const X = new Date(o.previsionStartDate), ne = new Date(o.previsionFinishDate);
        !isNaN(X.getTime()) && !isNaN(ne.getTime()) && (T = X, G = ne <= X ? K(X, 1) : ne);
      }
      const O = f?.filter((X) => X.successorId === o.id).map((X) => X.predecessorId) || [];
      u.push({
        id: o.id,
        name: o.name,
        start: j,
        end: W,
        progress: o.conclusionPercent ? Number(o.conclusionPercent) * 100 : 0,
        originalType: "step",
        deps: O,
        colorIdx: I % ee.length,
        previsionStart: T,
        previsionEnd: G,
        hasActualDates: b,
        projectId: o.projectId || void 0,
        projectTitle: o.projectTitle || void 0
      }), I++;
    }), g?.forEach((o) => {
      if (!o.date) return;
      const b = new Date(o.date);
      if (isNaN(b.getTime())) return;
      const N = f?.filter((B) => B.successorId === o.id).map((B) => B.predecessorId) || [];
      u.push({
        id: o.id,
        name: o.name,
        start: b,
        end: b,
        progress: o.finished ? 100 : 0,
        originalType: "milestone",
        deps: N,
        projectId: o.projectId || void 0,
        projectTitle: o.projectTitle || void 0
      });
    }), i?.forEach((o) => {
      if (!o.date) return;
      const b = new Date(o.date);
      if (isNaN(b.getTime())) return;
      const N = f?.filter((B) => B.successorId === o.id).map((B) => B.predecessorId) || [];
      u.push({
        id: o.id,
        name: o.title,
        start: b,
        end: b,
        progress: o.finished ? 100 : 0,
        originalType: "event",
        deps: N,
        projectId: o.projectId || void 0,
        projectTitle: o.projectTitle || void 0
      });
    }), L?.forEach((o) => {
      if (!o.date) return;
      const b = new Date(o.date);
      isNaN(b.getTime()) || u.push({
        id: o.id,
        name: o.title || "Nota",
        start: b,
        end: b,
        progress: 0,
        originalType: "note",
        deps: [],
        noteCount: 1,
        noteColor: o.color || e.note,
        filesCount: o.filesCount || 0,
        noteProjectTitle: o.projectTitle || void 0,
        projectId: o.projectId || void 0,
        projectTitle: o.projectTitle || void 0
      });
    }), u;
  }, [r, g, i, L, f]), E = re(() => gt(v, x), [v, x]), c = re(() => {
    const u = [], I = ["step", "milestone", "event", "note"];
    if (k) {
      const o = /* @__PURE__ */ new Map();
      v.forEach((b) => {
        b.projectId && !o.has(b.projectId) && o.set(b.projectId, b.projectTitle || b.projectId);
      });
      for (const [b, N] of Array.from(o.entries())) {
        const B = R.has(b);
        if (u.push({ kind: "projectHeader", projectId: b, projectTitle: N, collapsed: B }), !B) {
          const j = v.filter((W) => W.projectId === b);
          for (const W of I) {
            if (!S.has(W)) continue;
            const T = j.filter((X) => X.originalType === W);
            if (T.length === 0) continue;
            const G = `${b}-${W}`, O = w.has(G);
            u.push({ kind: "group", groupType: W, label: We[W], count: T.length, collapsed: O, projectId: b }), O || T.forEach((X) => u.push({ kind: "task", task: X }));
          }
        }
      }
    } else
      for (const o of I) {
        if (!S.has(o)) continue;
        const b = v.filter((B) => B.originalType === o);
        if (b.length === 0) continue;
        const N = w.has(o);
        u.push({ kind: "group", groupType: o, label: We[o], count: b.length, collapsed: N }), N || b.forEach((B) => u.push({ kind: "task", task: B }));
      }
    return u;
  }, [v, S, w, R, k]), m = re(() => {
    const u = /* @__PURE__ */ new Map();
    return c.forEach((I, o) => {
      I.kind === "task" && u.set(I.task.id, o);
    }), u;
  }, [c]), d = re(
    () => xt(v, f || [], E, m),
    [v, f, E, m]
  ), s = re(() => bt(v, f || []), [v, f]), l = re(() => {
    const u = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Date();
    return v.forEach((o) => {
      o.originalType === "step" && o.end < I && o.progress < 100 && u.add(o.id);
    }), u;
  }, [v]), p = re(() => {
    if (!$ || !f?.length) return /* @__PURE__ */ new Set();
    const u = /* @__PURE__ */ new Set(), I = [$];
    for (; I.length; ) {
      const o = I.shift();
      for (const b of f)
        b.predecessorId === o && !u.has(b.successorId) && (u.add(b.successorId), I.push(b.successorId)), b.successorId === o && !u.has(b.predecessorId) && (u.add(b.predecessorId), I.push(b.predecessorId));
    }
    return u;
  }, [$, f]);
  return {
    tasks: v,
    timeline: E,
    displayRows: c,
    taskRowIndex: m,
    arrows: d,
    criticalIds: s,
    delayedIds: l,
    relatedIds: p
  };
}
function kt(r) {
  const [g, i] = P("day"), [L, f] = P(null), [x, k] = P(null), [S, w] = P(null), [R, $] = P({
    isOpen: !1,
    position: { x: 0, y: 0 },
    task: null
  }), [v, E] = P(null), [c, m] = P(null), [d, s] = P(null), [l, p] = P(null), [u, I] = P("FS"), [o, b] = P(0), [N, B] = P(!1), [j, W] = P(null), [T, G] = P(null), [O, X] = P(!1), ne = t.useRef(null), [ce, pe] = P(/* @__PURE__ */ new Set(["step", "milestone", "event", "note"])), [ue, ve] = P(/* @__PURE__ */ new Set()), [ge, we] = P(/* @__PURE__ */ new Set()), ae = U((n) => {
    pe((a) => {
      const y = new Set(a);
      return y.has(n) ? y.delete(n) : y.add(n), y;
    });
  }, []), fe = U((n) => {
    ve((a) => {
      const y = new Set(a);
      return y.has(n) ? y.delete(n) : y.add(n), y;
    });
  }, []), ke = U((n) => {
    we((a) => {
      const y = new Set(a);
      return y.has(n) ? y.delete(n) : y.add(n), y;
    });
  }, []), C = Et({
    steps: r.steps,
    milestones: r.milestones,
    events: r.events,
    notes: r.notes,
    dependencies: r.dependencies,
    viewMode: g,
    visibleTypes: ce,
    collapsedGroups: ue,
    collapsedProjects: ge,
    groupByProject: r.groupByProject,
    selectedTaskId: x || null
  }), F = yt(C.timeline), Se = U((n, a) => {
    n.preventDefault(), n.stopPropagation(), E({ task: a, startMouseX: n.clientX, originalStart: new Date(a.start), originalEnd: new Date(a.end), offsetDays: 0 });
  }, []), Re = U((n, a, y) => {
    n.preventDefault(), n.stopPropagation(), m({ task: a, edge: y, startMouseX: n.clientX, originalStart: new Date(a.start), originalEnd: new Date(a.end), offsetDays: 0 });
  }, []), Ie = U((n, a, y) => {
    n.preventDefault(), n.stopPropagation(), s({ fromTaskId: a.id, fromEdge: y, fromScreenX: n.clientX, fromScreenY: n.clientY, currentScreenX: n.clientX, currentScreenY: n.clientY, hoverTargetId: null });
  }, []), Te = U(async () => {
    if (!l || !r.onCreateDependency) return;
    const n = new Map(C.tasks.map((z) => [z.id, z])), a = n.get(l.fromTaskId), y = n.get(l.toTaskId);
    if (!a || !y) return;
    const M = (z) => z.originalType === "step" ? "STEP" : "MILESTONE", A = l.fromEdge === "right" ? a : y, D = l.fromEdge === "right" ? y : a;
    B(!0);
    try {
      await r.onCreateDependency({ predecessorId: A.id, predecessorType: M(A), successorId: D.id, successorType: M(D), type: u, lag: o }), p(null);
    } finally {
      B(!1);
    }
  }, [l, C.tasks, r.onCreateDependency, u, o]);
  t.useEffect(() => {
    if (!v) return;
    const n = (y) => {
      const M = y.clientX - v.startMouseX, A = Math.round(M / C.timeline.dayWidth);
      A !== v.offsetDays && E((D) => D ? { ...D, offsetDays: A } : null);
    }, a = () => {
      v.offsetDays !== 0 && r.onTaskChange && r.onTaskChange({
        id: v.task.id,
        name: v.task.name,
        start: K(v.originalStart, v.offsetDays),
        end: K(v.originalEnd, v.offsetDays),
        type: v.task.originalType === "step" ? "task" : "milestone",
        progress: v.task.progress
      }), E(null);
    };
    return document.addEventListener("mousemove", n), document.addEventListener("mouseup", a), () => {
      document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", a);
    };
  }, [v, C.timeline.dayWidth, r.onTaskChange]), t.useEffect(() => {
    if (!c) return;
    const n = (y) => {
      const M = y.clientX - c.startMouseX, A = Math.round(M / C.timeline.dayWidth);
      A !== c.offsetDays && m((D) => D ? { ...D, offsetDays: A } : null);
    }, a = () => {
      if (c.offsetDays !== 0 && r.onTaskChange) {
        const y = c.edge === "left" ? K(c.originalStart, c.offsetDays) : c.originalStart, M = c.edge === "right" ? K(c.originalEnd, c.offsetDays) : c.originalEnd;
        M > y && r.onTaskChange({ id: c.task.id, name: c.task.name, start: y, end: M, type: "task", progress: c.task.progress });
      }
      m(null);
    };
    return document.addEventListener("mousemove", n), document.addEventListener("mouseup", a), () => {
      document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", a);
    };
  }, [c, C.timeline.dayWidth, r.onTaskChange]), t.useEffect(() => {
    if (!d) return;
    const n = (y) => {
      let M = null;
      for (const A of document.elementsFromPoint(y.clientX, y.clientY)) {
        const D = A.dataset?.taskId;
        if (D && D !== d.fromTaskId) {
          M = D;
          break;
        }
      }
      s((A) => A ? { ...A, currentScreenX: y.clientX, currentScreenY: y.clientY, hoverTargetId: M } : null);
    }, a = (y) => {
      let M = null;
      for (const A of document.elementsFromPoint(y.clientX, y.clientY)) {
        const D = A.dataset?.taskId;
        if (D && D !== d.fromTaskId) {
          M = D;
          break;
        }
      }
      M && r.onCreateDependency && (p({ fromTaskId: d.fromTaskId, fromEdge: d.fromEdge, toTaskId: M }), I("FS"), b(0)), s(null);
    };
    return document.addEventListener("mousemove", n), document.addEventListener("mouseup", a), () => {
      document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", a);
    };
  }, [d?.fromTaskId, d?.fromEdge, r.onCreateDependency]);
  const [V, ie] = P(null), te = U((n) => {
    if (c || v || n.button === 2) return;
    const a = F.rightBodyRef.current;
    a && (n.preventDefault(), ie({ startX: n.clientX, startY: n.clientY, scrollLeft: a.scrollLeft, scrollTop: a.scrollTop }));
  }, [c, v, F.rightBodyRef]);
  t.useEffect(() => {
    if (!V) return;
    const n = (y) => {
      const M = F.rightBodyRef.current;
      M && (M.scrollLeft = V.scrollLeft - (y.clientX - V.startX), M.scrollTop = V.scrollTop - (y.clientY - V.startY), F.leftBodyRef.current && (F.leftBodyRef.current.scrollTop = M.scrollTop), F.timeHeaderRef.current && (F.timeHeaderRef.current.scrollLeft = M.scrollLeft));
    }, a = () => ie(null);
    return document.addEventListener("mousemove", n), document.addEventListener("mouseup", a), () => {
      document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", a);
    };
  }, [V, F.rightBodyRef, F.leftBodyRef, F.timeHeaderRef]);
  const le = U((n) => {
    n.preventDefault(), n.stopPropagation();
    const a = (M) => {
      const A = F.rightBodyRef.current;
      if (!A) return /* @__PURE__ */ new Date();
      const D = A.getBoundingClientRect(), z = M - D.left + A.scrollLeft;
      return K(C.timeline.start, Math.max(0, Math.floor(z / C.timeline.dayWidth)));
    }, y = (M) => {
      if (!r.groupByProject) return;
      const A = F.leftBodyRef.current;
      if (!A) return;
      const D = A.getBoundingClientRect(), z = M - D.top + A.scrollTop, se = Math.max(0, Math.floor(z / 50));
      for (let H = Math.min(se, C.displayRows.length - 1); H >= 0; H--) {
        const q = C.displayRows[H];
        if (q.kind === "projectHeader") return q.projectId;
        if (q.kind === "task" && q.task.projectId) return q.task.projectId;
        if (q.kind === "group" && q.projectId) return q.projectId;
      }
    };
    G({ x: n.clientX, y: n.clientY, date: a(n.clientX), projectId: y(n.clientY) }), ie(null);
  }, [C.timeline, C.displayRows, r.groupByProject, F.rightBodyRef, F.leftBodyRef]);
  t.useEffect(() => {
    if (!T) return;
    const n = (M) => {
      M.key === "Escape" && G(null);
    }, a = (M) => {
      M.target.closest('[data-menu="chart-create"]') || G(null);
    }, y = () => G(null);
    return document.addEventListener("keydown", n), document.addEventListener("click", a), window.addEventListener("scroll", y, !0), () => {
      document.removeEventListener("keydown", n), document.removeEventListener("click", a), window.removeEventListener("scroll", y, !0);
    };
  }, [T]);
  const h = re(() => ({
    props: r,
    t: (n, a) => r.translations ? typeof r.translations == "function" ? r.translations(n, a) : r.translations[n] || a || "" : a || "",
    viewMode: g,
    setViewMode: i,
    hoveredTaskId: L,
    setHoveredTaskId: f,
    selectedTaskId: x,
    setSelectedTaskId: k,
    tooltip: S,
    setTooltip: w,
    popupState: R,
    setPopupState: $,
    dragState: v,
    setDragState: E,
    resizeState: c,
    setResizeState: m,
    connectState: d,
    setConnectState: s,
    visibleTypes: ce,
    setVisibleTypes: pe,
    toggleVisibility: ae,
    collapsedGroups: ue,
    setCollapsedGroups: ve,
    toggleGroup: fe,
    collapsedProjects: ge,
    setCollapsedProjects: we,
    toggleProject: ke,
    pendingConnection: l,
    setPendingConnection: p,
    depModalType: u,
    setDepModalType: I,
    depModalLag: o,
    setDepModalLag: b,
    depCreating: N,
    setDepCreating: B,
    deletingDepId: j,
    setDeletingDepId: W,
    chartMenu: T,
    setChartMenu: G,
    newActionOpen: O,
    setNewActionOpen: X,
    tasks: C.tasks,
    timeline: C.timeline,
    displayRows: C.displayRows,
    taskRowIndex: C.taskRowIndex || /* @__PURE__ */ new Map(),
    arrows: C.arrows,
    criticalIds: C.criticalIds,
    delayedIds: C.delayedIds,
    relatedIds: C.relatedIds,
    ...F,
    newActionRef: ne,
    screenXToDate: (n) => {
      const a = F.rightBodyRef.current;
      if (!a) return /* @__PURE__ */ new Date();
      const y = a.getBoundingClientRect(), M = n - y.left + a.scrollLeft;
      return K(C.timeline.start, Math.max(0, Math.floor(M / C.timeline.dayWidth)));
    },
    screenYToProjectId: (n) => {
      if (!r.groupByProject) return;
      const a = F.leftBodyRef.current;
      if (!a) return;
      const y = a.getBoundingClientRect(), M = n - y.top + a.scrollTop, A = Math.max(0, Math.floor(M / 50));
      for (let D = Math.min(A, C.displayRows.length - 1); D >= 0; D--) {
        const z = C.displayRows[D];
        if (z.kind === "projectHeader") return z.projectId;
        if (z.kind === "task" && z.task.projectId) return z.task.projectId;
        if (z.kind === "group" && z.projectId) return z.projectId;
      }
    },
    handleChartMouseDown: te,
    openChartMenu: le,
    handleBarMouseDown: Se,
    handleResizeMouseDown: Re,
    handleConnectDotMouseDown: Ie,
    handleCreateDependency: Te
  }), [
    r,
    g,
    L,
    x,
    S,
    R,
    v,
    c,
    d,
    ce,
    ue,
    ge,
    l,
    u,
    o,
    N,
    j,
    T,
    O,
    C,
    F,
    ae,
    fe,
    ke,
    te,
    le,
    Se,
    Re,
    Ie,
    Te
  ]);
  return r.loading ? /* @__PURE__ */ t.createElement("div", { style: { padding: 48, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: e.textSecondary } }, /* @__PURE__ */ t.createElement(at, { size: 32, style: { animation: "spin 1.5s linear infinite", color: e.group } })) : /* @__PURE__ */ t.createElement(st, { value: h }, /* @__PURE__ */ t.createElement(
    "div",
    {
      className: "w-full flex flex-col mx-auto bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden",
      style: { height: "calc(100vh - 48px)", minHeight: 600, border: `1px solid ${e.borderLight}` }
    },
    /* @__PURE__ */ t.createElement(pt, null),
    /* @__PURE__ */ t.createElement("div", { className: "flex flex-1 overflow-hidden relative", style: { background: e.surfaceAlt } }, /* @__PURE__ */ t.createElement(ut, null), /* @__PURE__ */ t.createElement(ht, null))
  ));
}
export {
  kt as ProjectGantt
};
