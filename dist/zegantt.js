import e, { forwardRef as Dt, createElement as et, useState as L, useRef as De, useMemo as pe, useCallback as A, useEffect as ue } from "react";
const Jt = (p) => p.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Nt = (...p) => p.filter((f, h, $) => !!f && f.trim() !== "" && $.indexOf(f) === h).join(" ").trim();
var Zt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Qt = Dt(
  ({
    color: p = "currentColor",
    size: f = 24,
    strokeWidth: h = 2,
    absoluteStrokeWidth: $,
    className: m = "",
    children: E,
    iconNode: v,
    ...I
  }, j) => et(
    "svg",
    {
      ref: j,
      ...Zt,
      width: f,
      height: f,
      stroke: p,
      strokeWidth: $ ? Number(h) * 24 / Number(f) : h,
      className: Nt("lucide", m),
      ...I
    },
    [
      ...v.map(([y, T]) => et(y, T)),
      ...Array.isArray(E) ? E : [E]
    ]
  )
);
const K = (p, f) => {
  const h = Dt(
    ({ className: $, ...m }, E) => et(Qt, {
      ref: E,
      iconNode: f,
      className: Nt(`lucide-${Jt(p)}`, $),
      ...m
    })
  );
  return h.displayName = `${p}`, h;
};
const er = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ke = K("ChevronDown", er);
const tr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], vt = K("ChevronRight", tr);
const rr = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], be = K("Clock", rr);
const or = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], nr = K("Eye", or);
const ar = [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
], Ee = K("Flag", ar);
const sr = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], lr = K("LoaderCircle", sr);
const ir = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], Mt = K("MessageCircle", ir);
const cr = [
  ["path", { d: "M13.234 20.252 21 12.3", key: "1cbrk9" }],
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",
      key: "1pkts6"
    }
  ]
], Je = K("Paperclip", cr);
const dr = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], pr = K("Pen", dr);
const ur = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Ze = K("Plus", ur);
const mr = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], gr = K("Trash2", mr);
const fr = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], wt = K("TriangleAlert", fr), _ = {
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
}, t = {
  pageBg: "#F8FAFB",
  surface: _.white,
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
}, N = 50, tt = 32, xr = tt * 2, hr = 460, J = 26, Ne = 28, rt = 120, yr = 90, br = 44, Er = 40, kr = 3.5, H = [
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
], St = {
  step: "Etapas",
  milestone: "Marcos",
  event: "Eventos",
  note: "Notas"
}, Lt = 864e5, Y = (p, f) => new Date(p.getTime() + f * Lt), me = (p, f) => Math.round((f.getTime() - p.getTime()) / Lt), $t = (p) => p.getDay() === 0 || p.getDay() === 6, It = (p) => new Date(p.getFullYear(), p.getMonth(), 1), Qe = (p) => new Date(p.getFullYear(), p.getMonth() + 1, 0), q = (p) => `${String(p.getDate()).padStart(2, "0")}/${String(p.getMonth() + 1).padStart(2, "0")}/${p.getFullYear()}`, Tt = {
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
function vr(p, f) {
  const h = f === "month" ? Er : kr;
  if (p.length === 0) {
    const T = /* @__PURE__ */ new Date(), D = It(T), O = Qe(T), C = me(D, O) + 1;
    return {
      start: D,
      end: O,
      totalDays: C,
      dayWidth: h,
      totalWidth: C * h,
      months: [{ date: D, label: `${Tt[D.getMonth()]} DE ${D.getFullYear()}`, startDay: 0, days: C }]
    };
  }
  let $ = new Date(p[0].start), m = new Date(p[0].end);
  p.forEach((T) => {
    T.start < $ && ($ = new Date(T.start)), T.end > m && (m = new Date(T.end));
  });
  const E = It(Y($, -14)), v = Qe(Y(m, 14)), I = me(E, v) + 1, j = [];
  let y = new Date(E);
  for (; y <= v; ) {
    const T = Qe(y), D = T > v ? v : T, O = me(E, y), C = me(y, D) + 1;
    j.push({
      date: new Date(y),
      label: `${Tt[y.getMonth()]} DE ${y.getFullYear()}`,
      startDay: O,
      days: C
    }), y = new Date(y.getFullYear(), y.getMonth() + 1, 1);
  }
  return { start: E, end: v, totalDays: I, dayWidth: h, totalWidth: I * h, months: j };
}
function V(p, f) {
  return me(f.start, p) * f.dayWidth;
}
function wr(p, f, h, $) {
  const m = /* @__PURE__ */ new Map();
  return p.forEach((E) => m.set(E.id, E)), f.map((E) => {
    const v = m.get(E.predecessorId), I = m.get(E.successorId);
    if (!v || !I) return null;
    const j = $.get(v.id), y = $.get(I.id);
    if (j == null || y == null) return null;
    const T = v.originalType !== "step", D = I.originalType !== "step", O = T ? V(v.start, h) + rt : V(v.end, h), C = j * N + N / 2, Z = D ? V(I.start, h) - 10 : V(I.start, h), F = y * N + N / 2, ne = 14, le = Math.max(O + ne, Z - ne), i = C === F ? `M${O},${C} L${Z - 6},${F}` : `M${O},${C} L${le},${C} L${le},${F} L${Z - 6},${F}`;
    return { predId: v.id, succId: I.id, path: i, headX: Z - 6, headY: F };
  }).filter(Boolean);
}
function Sr(p, f) {
  if (p.length === 0 || f.length === 0) return /* @__PURE__ */ new Set();
  const h = /* @__PURE__ */ new Map();
  p.forEach((i) => h.set(i.id, i));
  const $ = new Set(p.map((i) => i.id)), m = f.filter((i) => $.has(i.predecessorId) && $.has(i.successorId));
  if (m.length === 0) return /* @__PURE__ */ new Set();
  const E = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  m.forEach((i) => {
    E.has(i.predecessorId) || E.set(i.predecessorId, []), E.get(i.predecessorId).push(i.successorId), v.has(i.successorId) || v.set(i.successorId, []), v.get(i.successorId).push(i.predecessorId);
  });
  const I = (i) => Math.max(1, me(i.start, i.end)), j = /* @__PURE__ */ new Set(), y = [];
  function T(i) {
    j.has(i) || (j.add(i), (E.get(i) || []).forEach(T), y.unshift(i));
  }
  p.forEach((i) => T(i.id));
  const D = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
  for (const i of y) {
    const G = h.get(i), x = v.get(i) || [];
    let X = 0;
    for (const ce of x) X = Math.max(X, O.get(ce) || 0);
    const ie = x.length > 0 ? X : 0;
    D.set(i, ie), O.set(i, ie + I(G));
  }
  let C = 0;
  O.forEach((i) => {
    i > C && (C = i);
  });
  const Z = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
  for (let i = y.length - 1; i >= 0; i--) {
    const G = y[i], x = h.get(G), X = E.get(G) || [];
    let ie = C;
    for (const ce of X) ie = Math.min(ie, Z.get(ce) ?? C);
    F.set(G, X.length > 0 ? ie : C), Z.set(G, (F.get(G) || 0) - I(x));
  }
  const ne = /* @__PURE__ */ new Set();
  m.forEach((i) => {
    ne.add(i.predecessorId), ne.add(i.successorId);
  });
  const le = /* @__PURE__ */ new Set();
  for (const i of y) {
    if (!ne.has(i)) continue;
    const G = (Z.get(i) || 0) - (D.get(i) || 0);
    Math.abs(G) < 0.5 && le.add(i);
  }
  return le;
}
function Tr({
  steps: p,
  milestones: f,
  events: h,
  notes: $,
  dependencies: m,
  loading: E,
  projectName: v,
  translations: I,
  groupByProject: j,
  onTaskChange: y,
  onTaskClick: T,
  onAddNewStage: D,
  onViewStage: O,
  onEditStage: C,
  onDeleteStage: Z,
  onCreateDependency: F,
  onDeleteDependency: ne,
  onAddMilestone: le,
  onAddEvent: i,
  onAddNote: G
}) {
  const x = (r, n) => typeof I == "function" ? I(r, n) : I && typeof I == "object" ? I[r] || n || r : n || r, [X, ie] = L("month"), [ce, Le] = L(null), [P, Ct] = L(null), [g, ot] = L(null), [ge, nt] = L({ isOpen: !1, position: { x: 0, y: 0 }, task: null }), [k, _e] = L(null), [b, Ye] = L(null), [Ce, Rt] = L(
    /* @__PURE__ */ new Set(["step", "milestone", "event", "note"])
  ), [Oe, zt] = L(/* @__PURE__ */ new Set()), [at, Bt] = L(/* @__PURE__ */ new Set()), [U, Xe] = L(null), [fe, Re] = L(null), [Me, st] = L("FS"), [He, lt] = L(0), [ke, it] = L(!1), [jt, ct] = L(null), [z, de] = L(null), [ze, ve] = L(!1), dt = De(null), Q = De(null), ae = De(null), se = De(null), W = pe(() => {
    const r = [];
    let n = 0;
    return p.forEach((o) => {
      const a = !!(o.startDate && o.finishDate), d = o.startDate || o.previsionStartDate, l = o.finishDate || o.previsionFinishDate;
      if (!d || !l) return;
      const s = new Date(d), u = new Date(l);
      if (isNaN(s.getTime()) || isNaN(u.getTime())) return;
      u <= s && u.setDate(u.getDate() + 1);
      let M, R;
      if (o.previsionStartDate && o.previsionFinishDate) {
        const B = new Date(o.previsionStartDate), te = new Date(o.previsionFinishDate);
        !isNaN(B.getTime()) && !isNaN(te.getTime()) && (M = B, R = te <= B ? Y(B, 1) : te);
      }
      const S = m?.filter((B) => B.successorId === o.id).map((B) => B.predecessorId) || [];
      r.push({
        id: o.id,
        name: o.name,
        start: s,
        end: u,
        progress: o.conclusionPercent ? Number(o.conclusionPercent) * 100 : 0,
        originalType: "step",
        deps: S,
        colorIdx: n % H.length,
        previsionStart: M,
        previsionEnd: R,
        hasActualDates: a,
        projectId: o.projectId || void 0,
        projectTitle: o.projectTitle || void 0
      }), n++;
    }), f?.forEach((o) => {
      if (!o.date) return;
      const a = new Date(o.date);
      if (isNaN(a.getTime())) return;
      const d = m?.filter((l) => l.successorId === o.id).map((l) => l.predecessorId) || [];
      r.push({
        id: o.id,
        name: o.name,
        start: a,
        end: a,
        progress: o.finished ? 100 : 0,
        originalType: "milestone",
        deps: d,
        projectId: o.projectId || void 0,
        projectTitle: o.projectTitle || void 0
      });
    }), h?.forEach((o) => {
      if (!o.date) return;
      const a = new Date(o.date);
      if (isNaN(a.getTime())) return;
      const d = m?.filter((l) => l.successorId === o.id).map((l) => l.predecessorId) || [];
      r.push({
        id: o.id,
        name: o.title,
        start: a,
        end: a,
        progress: o.finished ? 100 : 0,
        originalType: "event",
        deps: d,
        projectId: o.projectId || void 0,
        projectTitle: o.projectTitle || void 0
      });
    }), $?.forEach((o) => {
      if (!o.date) return;
      const a = new Date(o.date);
      isNaN(a.getTime()) || r.push({
        id: o.id,
        name: o.title || "Nota",
        start: a,
        end: a,
        progress: 0,
        originalType: "note",
        deps: [],
        noteCount: 1,
        noteColor: o.color || t.note,
        filesCount: o.filesCount || 0,
        noteProjectTitle: o.projectTitle || void 0,
        projectId: o.projectId || void 0,
        projectTitle: o.projectTitle || void 0
      });
    }), r;
  }, [p, f, h, $, m]), c = pe(() => vr(W, X), [W, X]), ee = pe(() => {
    const r = [], n = ["step", "milestone", "event", "note"];
    if (j) {
      const o = /* @__PURE__ */ new Map();
      W.forEach((a) => {
        a.projectId && !o.has(a.projectId) && o.set(a.projectId, a.projectTitle || a.projectId);
      });
      for (const [a, d] of Array.from(o.entries())) {
        const l = at.has(a);
        if (r.push({ kind: "projectHeader", projectId: a, projectTitle: d, collapsed: l }), !l) {
          const s = W.filter((u) => u.projectId === a);
          for (const u of n) {
            if (!Ce.has(u)) continue;
            const M = s.filter((B) => B.originalType === u);
            if (M.length === 0) continue;
            const R = `${a}-${u}`, S = Oe.has(R);
            r.push({ kind: "group", groupType: u, label: St[u], count: M.length, collapsed: S, projectId: a }), S || M.forEach((B) => r.push({ kind: "task", task: B }));
          }
        }
      }
    } else
      for (const o of n) {
        if (!Ce.has(o)) continue;
        const a = W.filter((l) => l.originalType === o);
        if (a.length === 0) continue;
        const d = Oe.has(o);
        r.push({ kind: "group", groupType: o, label: St[o], count: a.length, collapsed: d }), d || a.forEach((l) => r.push({ kind: "task", task: l }));
      }
    return r;
  }, [W, Ce, Oe, at, j]), pt = pe(() => {
    const r = /* @__PURE__ */ new Map();
    return ee.forEach((n, o) => {
      n.kind === "task" && r.set(n.task.id, o);
    }), r;
  }, [ee]), Wt = pe(
    () => wr(W, m || [], c, pt),
    [W, m, c, pt]
  ), Ue = pe(() => Sr(W, m || []), [W, m]), Ve = pe(() => {
    const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Date();
    return W.forEach((o) => {
      o.originalType === "step" && o.end < n && o.progress < 100 && r.add(o.id);
    }), r;
  }, [W]), we = pe(() => {
    if (!P || !m?.length) return /* @__PURE__ */ new Set();
    const r = /* @__PURE__ */ new Set(), n = [P];
    for (; n.length; ) {
      const o = n.shift();
      for (const a of m)
        a.predecessorId === o && !r.has(a.successorId) && (r.add(a.successorId), n.push(a.successorId)), a.successorId === o && !r.has(a.predecessorId) && (r.add(a.predecessorId), n.push(a.predecessorId));
    }
    return r;
  }, [P, m]), Se = De(!1), At = A(() => {
    if (Se.current) return;
    Se.current = !0;
    const r = ae.current;
    r && Q.current && (Q.current.scrollTop = r.scrollTop), r && se.current && (se.current.scrollLeft = r.scrollLeft), Se.current = !1;
  }, []), Ft = A(() => {
    Se.current || (Se.current = !0, Q.current && ae.current && (ae.current.scrollTop = Q.current.scrollTop), Se.current = !1);
  }, []), ut = De(!1);
  ue(() => {
    if (ut.current || !c.totalWidth) return;
    const r = ae.current;
    if (!r) return;
    const n = V(/* @__PURE__ */ new Date(), c);
    if (n >= 0 && n <= c.totalWidth) {
      const o = n - r.clientWidth / 2;
      r.scrollLeft = Math.max(0, o), se.current && (se.current.scrollLeft = r.scrollLeft), ut.current = !0;
    }
  }, [c]);
  const [xe, Ge] = L(null), Pt = A((r) => {
    if (b || k || r.button === 2) return;
    const n = ae.current;
    n && (r.preventDefault(), Ge({ startX: r.clientX, startY: r.clientY, scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }));
  }, [b, k]);
  ue(() => {
    if (!xe) return;
    const r = (o) => {
      const a = ae.current;
      if (!a) return;
      const d = o.clientX - xe.startX, l = o.clientY - xe.startY;
      a.scrollLeft = xe.scrollLeft - d, a.scrollTop = xe.scrollTop - l, Q.current && (Q.current.scrollTop = a.scrollTop), se.current && (se.current.scrollLeft = a.scrollLeft);
    }, n = () => Ge(null);
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", n), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", n);
    };
  }, [xe]);
  const _t = A((r) => {
    const n = ae.current;
    if (n)
      if (r.preventDefault(), r.shiftKey || Math.abs(r.deltaX) > Math.abs(r.deltaY)) {
        const o = r.shiftKey ? r.deltaY : r.deltaX;
        n.scrollLeft += o, se.current && (se.current.scrollLeft = n.scrollLeft);
      } else
        n.scrollTop += r.deltaY, Q.current && (Q.current.scrollTop = n.scrollTop);
  }, []), mt = A((r) => {
    const n = ae.current;
    if (!n) return /* @__PURE__ */ new Date();
    const o = n.getBoundingClientRect(), a = r - o.left + n.scrollLeft, d = Math.max(0, Math.floor(a / c.dayWidth));
    return Y(c.start, d);
  }, [c]), gt = A((r) => {
    if (!j) return;
    const n = Q.current;
    if (!n) return;
    const o = n.getBoundingClientRect(), a = r - o.top + n.scrollTop, d = Math.max(0, Math.floor(a / N));
    for (let l = Math.min(d, ee.length - 1); l >= 0; l--) {
      const s = ee[l];
      if (s.kind === "projectHeader") return s.projectId;
      if (s.kind === "task" && s.task.projectId) return s.task.projectId;
      if (s.kind === "group" && s.projectId) return s.projectId;
    }
  }, [j, ee]), ft = A((r) => {
    r.preventDefault(), r.stopPropagation();
    const n = gt(r.clientY);
    de({ x: r.clientX, y: r.clientY, date: mt(r.clientX), projectId: n }), Ge(null);
  }, [mt, gt]);
  ue(() => {
    if (!z) return;
    const r = (a) => {
      a.key === "Escape" && de(null);
    }, n = (a) => {
      a.target.closest('[data-menu="chart-create"]') || de(null);
    }, o = () => de(null);
    return document.addEventListener("keydown", r), document.addEventListener("click", n), window.addEventListener("scroll", o, !0), () => {
      document.removeEventListener("keydown", r), document.removeEventListener("click", n), window.removeEventListener("scroll", o, !0);
    };
  }, [z]), ue(() => {
    if (!ze) return;
    const r = (n) => {
      dt.current?.contains(n.target) || ve(!1);
    };
    return document.addEventListener("click", r), () => document.removeEventListener("click", r);
  }, [ze]);
  const Yt = A((r, n) => {
    r.preventDefault(), r.stopPropagation(), _e({
      task: n,
      startMouseX: r.clientX,
      originalStart: new Date(n.start),
      originalEnd: new Date(n.end),
      offsetDays: 0
    });
  }, []);
  ue(() => {
    if (!k) return;
    const r = (o) => {
      const a = o.clientX - k.startMouseX, d = Math.round(a / c.dayWidth);
      d !== k.offsetDays && _e((l) => l ? { ...l, offsetDays: d } : null);
    }, n = () => {
      k.offsetDays !== 0 && y && y({
        id: k.task.id,
        name: k.task.name,
        start: Y(k.originalStart, k.offsetDays),
        end: Y(k.originalEnd, k.offsetDays),
        type: k.task.originalType === "step" ? "task" : "milestone",
        progress: k.task.progress
      }), _e(null);
    };
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", n), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", n);
    };
  }, [k, c.dayWidth, y]);
  const xt = A((r, n, o) => {
    r.preventDefault(), r.stopPropagation(), Ye({
      task: n,
      edge: o,
      startMouseX: r.clientX,
      originalStart: new Date(n.start),
      originalEnd: new Date(n.end),
      offsetDays: 0
    });
  }, []);
  ue(() => {
    if (!b) return;
    const r = (o) => {
      const a = o.clientX - b.startMouseX, d = Math.round(a / c.dayWidth);
      d !== b.offsetDays && Ye((l) => l ? { ...l, offsetDays: d } : null);
    }, n = () => {
      if (b.offsetDays !== 0 && y) {
        const o = b.edge === "left" ? Y(b.originalStart, b.offsetDays) : b.originalStart, a = b.edge === "right" ? Y(b.originalEnd, b.offsetDays) : b.originalEnd;
        a > o && y({
          id: b.task.id,
          name: b.task.name,
          start: o,
          end: a,
          type: "task",
          progress: b.task.progress
        });
      }
      Ye(null);
    };
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", n), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", n);
    };
  }, [b, c.dayWidth, y]);
  const Be = A((r, n, o) => {
    r.preventDefault(), r.stopPropagation(), Xe({
      fromTaskId: n.id,
      fromEdge: o,
      fromScreenX: r.clientX,
      fromScreenY: r.clientY,
      currentScreenX: r.clientX,
      currentScreenY: r.clientY,
      hoverTargetId: null
    });
  }, []);
  ue(() => {
    if (!U) return;
    const r = (o) => {
      const a = document.elementsFromPoint(o.clientX, o.clientY);
      let d = null;
      for (const l of a) {
        const s = l.dataset?.taskId;
        if (s && s !== U.fromTaskId) {
          d = s;
          break;
        }
      }
      Xe((l) => l ? { ...l, currentScreenX: o.clientX, currentScreenY: o.clientY, hoverTargetId: d } : null);
    }, n = (o) => {
      const a = document.elementsFromPoint(o.clientX, o.clientY);
      let d = null;
      for (const l of a) {
        const s = l.dataset?.taskId;
        if (s && s !== U.fromTaskId) {
          d = s;
          break;
        }
      }
      d && F && (Re({ fromTaskId: U.fromTaskId, fromEdge: U.fromEdge, toTaskId: d }), st("FS"), lt(0)), Xe(null);
    };
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", n), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", n);
    };
  }, [U?.fromTaskId, U?.fromEdge, F]);
  const Ot = A(async () => {
    if (!fe || !F) return;
    const r = new Map(W.map((s) => [s.id, s])), n = r.get(fe.fromTaskId), o = r.get(fe.toTaskId);
    if (!n || !o) return;
    const a = (s) => s.originalType === "step" ? "STEP" : "MILESTONE", d = fe.fromEdge === "right" ? n : o, l = fe.fromEdge === "right" ? o : n;
    it(!0);
    try {
      await F({
        predecessorId: d.id,
        predecessorType: a(d),
        successorId: l.id,
        successorType: a(l),
        type: Me,
        lag: He
      }), Re(null);
    } finally {
      it(!1);
    }
  }, [fe, W, F, Me, He]), Xt = A((r) => {
    zt((n) => {
      const o = new Set(n);
      return o.has(r) ? o.delete(r) : o.add(r), o;
    });
  }, []), Ht = A((r) => {
    Bt((n) => {
      const o = new Set(n);
      return o.has(r) ? o.delete(r) : o.add(r), o;
    });
  }, []), Ut = A((r) => {
    Rt((n) => {
      const o = new Set(n);
      return o.has(r) ? o.delete(r) : o.add(r), o;
    });
  }, []), qe = (r) => ({
    id: r.id,
    name: r.name,
    start: r.start,
    end: r.end,
    type: r.originalType === "step" ? "task" : "milestone",
    progress: r.progress
  }), Vt = A((r, n) => {
    nt({ isOpen: !0, position: { x: r.clientX, y: r.clientY }, task: n });
  }, []), ht = A((r) => {
    T?.(qe(r));
  }, [T]), $e = () => {
    nt({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  };
  ue(() => {
    if (!ge.isOpen) return;
    const r = (a) => {
      a.key === "Escape" && $e();
    }, n = (a) => {
      a.target.closest('[data-popup="gantt-action"]') || $e();
    }, o = () => $e();
    return document.addEventListener("keydown", r), document.addEventListener("mousedown", n), window.addEventListener("scroll", o, !0), () => {
      document.removeEventListener("keydown", r), document.removeEventListener("mousedown", n), window.removeEventListener("scroll", o, !0);
    };
  }, [ge.isOpen]);
  const yt = (r) => k?.task.id === r.id ? Y(k.originalStart, k.offsetDays) : b?.task.id === r.id && b.edge === "left" ? Y(b.originalStart, b.offsetDays) : r.start, bt = (r) => k?.task.id === r.id ? Y(k.originalEnd, k.offsetDays) : b?.task.id === r.id && b.edge === "right" ? Y(b.originalEnd, b.offsetDays) : r.end;
  if (E)
    return /* @__PURE__ */ e.createElement("div", { className: "h-64 flex items-center justify-center rounded-xl", style: { background: t.surface, border: `1px solid ${t.border}`, boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)" } }, /* @__PURE__ */ e.createElement(lr, { className: "animate-spin", size: 28, style: { color: t.group } }));
  if (!p?.length)
    return /* @__PURE__ */ e.createElement("div", { className: "text-center p-10 rounded-xl flex flex-col items-center gap-4", style: { background: t.surface, border: `1px solid ${t.border}`, color: t.textSecondary, boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)" } }, /* @__PURE__ */ e.createElement("span", null, x("charts.gantt.noStepsFound")), D && /* @__PURE__ */ e.createElement(
      "button",
      {
        onClick: () => D(),
        className: "flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90",
        style: { background: t.group }
      },
      /* @__PURE__ */ e.createElement(Ze, { size: 16 }),
      x("charts.gantt.createFirstStep", "Criar primeira etapa")
    ));
  if (!W.length)
    return /* @__PURE__ */ e.createElement("div", { className: "text-center p-10 rounded-xl flex flex-col items-center gap-4", style: { background: t.surface, border: `1px solid ${t.border}`, color: t.textSecondary, boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)" } }, /* @__PURE__ */ e.createElement("span", null, x("charts.gantt.noStepsWithDates")), D && /* @__PURE__ */ e.createElement(
      "button",
      {
        onClick: () => D(),
        className: "flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90",
        style: { background: t.group }
      },
      /* @__PURE__ */ e.createElement(Ze, { size: 16 }),
      x("charts.gantt.createFirstStep", "Criar primeira etapa")
    ));
  const Ie = V(/* @__PURE__ */ new Date(), c), Gt = Ie >= 0 && Ie <= c.totalWidth, he = ee.length * N, Et = 540;
  return /* @__PURE__ */ e.createElement("div", { style: { fontFamily: "'Inter', sans-serif" } }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "rounded-xl overflow-hidden",
      style: {
        background: t.surface,
        border: `1px solid ${t.border}`,
        boxShadow: "0 2px 16px 0 rgb(0 0 0 / 0.06), 0 0 0 1px rgb(0 0 0 / 0.02)"
      }
    },
    /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "flex items-center justify-between px-6 py-5",
        style: { borderBottom: `1px solid ${t.border}`, background: `linear-gradient(180deg, ${t.headerBg} 0%, ${t.surface} 100%)` }
      },
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h3", { className: "text-sm font-bold uppercase tracking-widest", style: { color: t.textTitle } }, x("planning.gantt", "PLANEJAMENTO DA OBRA")), /* @__PURE__ */ e.createElement("div", { className: "h-[2.5px] w-16 mt-1.5 rounded-full", style: { background: `linear-gradient(90deg, ${t.group}, ${t.milestoneRing})` } })), v && /* @__PURE__ */ e.createElement(
        "span",
        {
          className: "text-xs font-medium px-3 py-1 rounded-full",
          style: { color: t.textSecondary, background: t.surface, border: `1px solid ${t.border}` }
        },
        v
      )),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ e.createElement("div", { className: "flex p-1 rounded-lg", style: { background: "rgba(122,122,122,0.07)", border: `1px solid ${t.borderLight}` } }, ["month", "year"].map((r) => /* @__PURE__ */ e.createElement(
        "button",
        {
          key: r,
          onClick: () => ie(r),
          className: "px-5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200",
          style: X === r ? { background: t.surface, color: t.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { color: t.textSecondary }
        },
        r === "month" ? x("charts.gantt.month", "Mês") : x("charts.gantt.year", "Ano")
      ))), /* @__PURE__ */ e.createElement("div", { className: "flex p-1 rounded-lg gap-0.5", style: { background: "rgba(122,122,122,0.07)", border: `1px solid ${t.borderLight}` } }, [
        { type: "step", label: "Etapas", icon: /* @__PURE__ */ e.createElement("div", { className: "w-2.5 h-2.5 rounded-sm", style: { background: H[0].bar, border: `1px solid ${H[0].barBorder}` } }) },
        { type: "milestone", label: "Marcos", icon: /* @__PURE__ */ e.createElement(Ee, { size: 11, style: { color: t.milestone } }) },
        { type: "event", label: "Eventos", icon: /* @__PURE__ */ e.createElement(be, { size: 11, style: { color: t.event } }) },
        { type: "note", label: "Notas", icon: /* @__PURE__ */ e.createElement(Mt, { size: 11, style: { color: t.note } }) }
      ].map((r) => {
        const n = Ce.has(r.type);
        return /* @__PURE__ */ e.createElement(
          "button",
          {
            key: r.type,
            onClick: () => Ut(r.type),
            className: "flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-md transition-all duration-200",
            style: n ? { background: t.surface, color: t.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { color: t.textMuted, opacity: 0.5 }
          },
          r.icon,
          /* @__PURE__ */ e.createElement("span", null, r.label)
        );
      })), D && /* @__PURE__ */ e.createElement("div", { ref: dt, style: { position: "relative" } }, /* @__PURE__ */ e.createElement(
        "button",
        {
          onClick: () => ve((r) => !r),
          className: "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
          style: { background: `linear-gradient(135deg, ${t.group}, ${t.group}dd)` }
        },
        /* @__PURE__ */ e.createElement(Ze, { size: 16 }),
        /* @__PURE__ */ e.createElement("span", null, x("charts.gantt.newAction", "Nova Ação")),
        /* @__PURE__ */ e.createElement(Ke, { size: 14, style: { opacity: 0.7, transform: ze ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
      ), ze && /* @__PURE__ */ e.createElement(
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
          onClick: (r) => r.stopPropagation()
        },
        [
          {
            label: "Etapa",
            icon: /* @__PURE__ */ e.createElement("div", { style: { width: 14, height: 14, borderRadius: 3, background: H[0].bar, border: `1.5px solid ${H[0].barBorder}`, flexShrink: 0 } }),
            action: () => {
              D?.(), ve(!1);
            }
          },
          {
            label: "Marco",
            icon: /* @__PURE__ */ e.createElement("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.milestoneRing}30`, border: `1.5px solid ${t.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ e.createElement(Ee, { size: 11, style: { color: t.milestone } })),
            action: () => {
              le?.(), ve(!1);
            }
          },
          {
            label: "Evento",
            icon: /* @__PURE__ */ e.createElement("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.event}18`, border: `1.5px solid ${t.event}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ e.createElement(be, { size: 11, style: { color: t.event } })),
            action: () => {
              i?.(), ve(!1);
            }
          },
          {
            label: "Nota",
            icon: /* @__PURE__ */ e.createElement("div", { style: { width: 16, height: 20, background: t.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible", flexShrink: 0 } }, /* @__PURE__ */ e.createElement("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } })),
            action: () => {
              G?.(), ve(!1);
            }
          }
        ].map((r) => /* @__PURE__ */ e.createElement(
          "button",
          {
            key: r.label,
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
              color: t.textPrimary,
              textAlign: "left",
              transition: "background 0.12s"
            },
            onMouseEnter: (n) => {
              n.currentTarget.style.background = t.headerBg;
            },
            onMouseLeave: (n) => {
              n.currentTarget.style.background = "transparent";
            }
          },
          r.icon,
          r.label
        ))
      )))
    ),
    /* @__PURE__ */ e.createElement("div", { className: "flex" }, /* @__PURE__ */ e.createElement("div", { style: { width: hr, flexShrink: 0, borderRight: `1px solid ${t.border}` } }, /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "flex items-center px-4",
        style: { height: xr, background: t.headerBg, borderBottom: `1px solid ${t.border}` }
      },
      /* @__PURE__ */ e.createElement("div", { className: "flex-1 text-[11px] font-bold uppercase tracking-wider", style: { color: t.textSecondary } }, x("charts.gantt.stepName", "NOME DA ETAPA")),
      /* @__PURE__ */ e.createElement("div", { className: "w-[80px] text-[11px] font-bold uppercase tracking-wider text-center", style: { color: t.textSecondary } }, x("charts.gantt.start", "INÍCIO")),
      /* @__PURE__ */ e.createElement("div", { className: "w-[80px] text-[11px] font-bold uppercase tracking-wider text-center", style: { color: t.textSecondary } }, x("charts.gantt.end", "FIM"))
    ), /* @__PURE__ */ e.createElement(
      "div",
      {
        ref: Q,
        onScroll: Ft,
        className: "overflow-y-auto overflow-x-hidden",
        style: { maxHeight: Et, scrollbarWidth: "none" }
      },
      ee.map((r) => {
        if (r.kind === "projectHeader")
          return /* @__PURE__ */ e.createElement(
            "div",
            {
              key: `ph-${r.projectId}`,
              className: "flex items-center px-4 cursor-pointer select-none",
              style: { height: N, borderBottom: `1.5px solid ${t.group}44`, background: `${t.group}0E` },
              onClick: () => Ht(r.projectId)
            },
            /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2 flex-1 min-w-0" }, r.collapsed ? /* @__PURE__ */ e.createElement(vt, { size: 15, style: { color: t.group, flexShrink: 0 } }) : /* @__PURE__ */ e.createElement(Ke, { size: 15, style: { color: t.group, flexShrink: 0 } }), /* @__PURE__ */ e.createElement("span", { className: "text-[12px] font-bold uppercase tracking-widest truncate", style: { color: t.group } }, r.projectTitle))
          );
        if (r.kind === "group") {
          const S = r.projectId ? `${r.projectId}-${r.groupType}` : r.groupType;
          return /* @__PURE__ */ e.createElement(
            "div",
            {
              key: `g-${S}`,
              className: "flex items-center px-4 cursor-pointer select-none",
              style: { height: N, borderBottom: `1px solid ${t.border}`, background: t.headerBg },
              onClick: () => Xt(S)
            },
            /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2 flex-1 min-w-0" }, r.collapsed ? /* @__PURE__ */ e.createElement(vt, { size: 14, style: { color: t.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ e.createElement(Ke, { size: 14, style: { color: t.textSecondary, flexShrink: 0 } }), /* @__PURE__ */ e.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider", style: { color: t.textTitle } }, r.label), /* @__PURE__ */ e.createElement("span", { className: "text-[10px] font-semibold px-1.5 py-0.5 rounded-full", style: { background: "rgba(0,0,0,0.06)", color: t.textSecondary } }, r.count))
          );
        }
        const n = r.task, o = P === n.id, a = ce === n.id, d = n.originalType !== "step", l = Ve.has(n.id), s = Ue.has(n.id), u = P !== null && n.id !== P && !we.has(n.id), M = P !== null && we.has(n.id), R = l ? "#FFF5F5" : o ? t.groupLight : M ? `${t.groupLight}99` : a ? t.pageBg : t.surface;
        return /* @__PURE__ */ e.createElement(
          "div",
          {
            key: n.id,
            className: "flex items-center px-4 cursor-pointer transition-colors duration-150",
            style: {
              height: N,
              borderBottom: `1px solid ${t.borderLight}`,
              background: R,
              borderLeft: o ? `3px solid ${t.group}` : M ? `3px solid ${t.group}66` : s ? `3px solid ${t.today}` : void 0,
              opacity: u ? 0.3 : 1,
              transition: "opacity 0.18s, background 0.15s"
            },
            onClick: () => Ct((S) => S === n.id ? null : n.id),
            onDoubleClick: () => ht(n),
            onMouseEnter: () => Le(n.id),
            onMouseLeave: () => Le(null)
          },
          /* @__PURE__ */ e.createElement("div", { className: "flex-1 flex items-center gap-2 min-w-0 pr-2" }, n.originalType === "step" && /* @__PURE__ */ e.createElement("div", { className: "flex-shrink-0 rounded", style: { width: 14, height: 14, background: H[n.colorIdx ?? 0].bar, border: `1.5px solid ${H[n.colorIdx ?? 0].barBorder}` } }), n.originalType === "milestone" && /* @__PURE__ */ e.createElement("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 22, height: 22, background: `${t.milestoneRing}30`, border: `1.5px solid ${t.milestoneRing}` } }, /* @__PURE__ */ e.createElement(Ee, { size: 11, style: { color: t.milestone } })), n.originalType === "event" && /* @__PURE__ */ e.createElement("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 22, height: 22, background: `${t.event}18`, border: `1.5px solid ${t.event}55` } }, /* @__PURE__ */ e.createElement(be, { size: 11, style: { color: t.event } })), n.originalType === "note" && /* @__PURE__ */ e.createElement("div", { className: "flex-shrink-0", style: { width: 16, height: 20, background: n.noteColor || t.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible" } }, /* @__PURE__ */ e.createElement("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } })), /* @__PURE__ */ e.createElement("div", { className: "flex-1 flex flex-col min-w-0" }, /* @__PURE__ */ e.createElement(
            "span",
            {
              className: "text-[13px] truncate font-medium leading-tight",
              style: { color: o ? t.group : l ? t.today : t.textPrimary }
            },
            n.name
          ), n.originalType === "note" && n.noteProjectTitle && /* @__PURE__ */ e.createElement("span", { className: "text-[10px] truncate", style: { color: t.textSecondary, marginTop: 1 } }, n.noteProjectTitle)), n.originalType === "note" && (n.filesCount || 0) > 0 && /* @__PURE__ */ e.createElement("span", { className: "flex-shrink-0 flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full", style: { color: t.textSecondary, background: t.headerBg, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement(Je, { size: 9 }), n.filesCount), l && /* @__PURE__ */ e.createElement(wt, { size: 12, className: "flex-shrink-0", style: { color: t.today } })),
          /* @__PURE__ */ e.createElement("div", { className: "w-[80px] text-[11px] font-medium text-center tabular-nums", style: { color: l ? t.today : t.textMuted } }, q(yt(n))),
          /* @__PURE__ */ e.createElement("div", { className: "w-[80px] text-[11px] font-medium text-center tabular-nums", style: { color: l ? t.today : t.textMuted } }, d ? "—" : q(bt(n)))
        );
      })
    )), /* @__PURE__ */ e.createElement("div", { className: "flex-1 flex flex-col overflow-hidden" }, /* @__PURE__ */ e.createElement(
      "div",
      {
        ref: se,
        className: "overflow-hidden flex-shrink-0",
        style: { borderBottom: `1px solid ${t.border}` }
      },
      /* @__PURE__ */ e.createElement("div", { style: { width: c.totalWidth } }, /* @__PURE__ */ e.createElement("div", { className: "flex", style: { height: tt, background: t.headerBg } }, c.months.map((r, n) => /* @__PURE__ */ e.createElement(
        "div",
        {
          key: n,
          className: "flex items-center justify-center text-[10px] font-bold uppercase tracking-wider select-none",
          style: {
            width: r.days * c.dayWidth,
            color: t.textTitle,
            borderRight: `1px solid ${t.border}`,
            letterSpacing: "0.1em"
          }
        },
        r.label
      ))), /* @__PURE__ */ e.createElement("div", { className: "flex", style: { height: tt, background: t.surface } }, Array.from({ length: c.totalDays }, (r, n) => {
        const o = Y(c.start, n), a = o.getDate(), d = $t(o), l = o.toDateString() === (/* @__PURE__ */ new Date()).toDateString();
        return /* @__PURE__ */ e.createElement(
          "div",
          {
            key: n,
            className: "flex items-center justify-center text-[9px] select-none",
            style: {
              width: c.dayWidth,
              color: l ? t.today : d ? t.textMuted : t.textSecondary,
              fontWeight: l ? 800 : a === 1 ? 700 : 500,
              background: l ? t.todayBg : d ? t.weekendBg : void 0,
              borderRight: a === 1 ? `1px solid ${t.border}` : void 0,
              borderRadius: l ? 4 : void 0
            }
          },
          X === "month" ? a : ""
        );
      })))
    ), /* @__PURE__ */ e.createElement(
      "div",
      {
        ref: ae,
        onScroll: At,
        onMouseDown: Pt,
        onDoubleClick: ft,
        onContextMenu: ft,
        onWheel: _t,
        className: "flex-1 overflow-auto",
        style: {
          maxHeight: Et,
          scrollbarWidth: "thin",
          scrollbarColor: `${t.border} transparent`,
          cursor: xe ? "grabbing" : "grab"
        }
      },
      /* @__PURE__ */ e.createElement("div", { style: { width: c.totalWidth, height: he, position: "relative" } }, /* @__PURE__ */ e.createElement(
        "svg",
        {
          width: c.totalWidth,
          height: he,
          style: { position: "absolute", inset: 0, pointerEvents: "none" }
        },
        ee.map((r, n) => r.kind === "projectHeader" ? /* @__PURE__ */ e.createElement("rect", { key: `rpb${n}`, x: 0, y: n * N, width: c.totalWidth, height: N, fill: `${t.group}0E` }) : r.kind === "group" ? /* @__PURE__ */ e.createElement("rect", { key: `rb${n}`, x: 0, y: n * N, width: c.totalWidth, height: N, fill: t.headerBg }) : null),
        Array.from({ length: c.totalDays }, (r, n) => {
          const o = Y(c.start, n);
          return $t(o) ? /* @__PURE__ */ e.createElement("rect", { key: `we${n}`, x: n * c.dayWidth, y: 0, width: c.dayWidth, height: he, fill: "rgba(0,0,0,0.025)" }) : null;
        }),
        X === "month" ? Array.from({ length: c.totalDays }, (r, n) => {
          const a = Y(c.start, n).getDate() === 1;
          return /* @__PURE__ */ e.createElement(
            "line",
            {
              key: `vl${n}`,
              x1: n * c.dayWidth,
              y1: 0,
              x2: n * c.dayWidth,
              y2: he,
              stroke: a ? t.border : t.borderLight,
              strokeWidth: a ? 1 : 0.5
            }
          );
        }) : c.months.map((r, n) => /* @__PURE__ */ e.createElement(
          "line",
          {
            key: `ml${n}`,
            x1: r.startDay * c.dayWidth,
            y1: 0,
            x2: r.startDay * c.dayWidth,
            y2: he,
            stroke: t.border,
            strokeWidth: 1
          }
        )),
        ee.map((r, n) => /* @__PURE__ */ e.createElement(
          "line",
          {
            key: `hl${n}`,
            x1: 0,
            y1: (n + 1) * N,
            x2: c.totalWidth,
            y2: (n + 1) * N,
            stroke: t.borderLight,
            strokeWidth: 0.5
          }
        )),
        Gt && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("line", { x1: Ie, y1: 0, x2: Ie, y2: he, stroke: t.today, strokeWidth: 2, strokeDasharray: "6 3", opacity: 0.6 }), /* @__PURE__ */ e.createElement("rect", { x: Ie - 22, y: 0, width: 44, height: 18, rx: 9, fill: t.today }), /* @__PURE__ */ e.createElement("text", { x: Ie, y: 13, textAnchor: "middle", fill: "#fff", fontSize: 9, fontWeight: 700, fontFamily: "Inter, sans-serif" }, "HOJE"))
      ), ee.map((r, n) => {
        if (r.kind === "group" || r.kind === "projectHeader")
          return null;
        const o = r.task, a = yt(o), d = bt(o), l = V(a, c), s = n * N, u = ce === o.id, M = k?.task.id === o.id, R = b?.task.id === o.id, S = Ue.has(o.id), B = Ve.has(o.id), te = U?.hoverTargetId === o.id, kt = (u || te) && !!F, je = P !== null && o.id !== P && !we.has(o.id), We = P !== null && (o.id === P || we.has(o.id)), Ae = {
          onMouseDown: (w) => Yt(w, o),
          onClick: (w) => Vt(w, o),
          onDoubleClick: () => ht(o),
          onMouseEnter: () => Le(o.id),
          onMouseLeave: () => {
            Le(null), ot(null);
          },
          onMouseMove: (w) => {
            !k && !b && ot({ task: o, x: w.clientX, y: w.clientY });
          }
        };
        if (o.originalType === "step") {
          const w = H[o.colorIdx ?? 0], re = Math.max(V(d, c) - l, X === "month" ? c.dayWidth : 6), oe = re * (o.progress / 100), Fe = s + (N - J) / 2, Te = !!(o.previsionStart && o.previsionEnd), Pe = Te ? V(o.previsionStart, c) : 0, qt = Te ? Math.max(V(o.previsionEnd, c) - Pe, X === "month" ? c.dayWidth : 6) : 0, Kt = Fe + J + 3;
          return /* @__PURE__ */ e.createElement(e.Fragment, { key: o.id }, Te && /* @__PURE__ */ e.createElement(
            "div",
            {
              title: `Previsto: ${q(o.previsionStart)} → ${q(o.previsionEnd)}`,
              style: {
                position: "absolute",
                left: Pe,
                top: Kt,
                width: qt,
                height: 5,
                borderRadius: 3,
                background: `${w.progress}33`,
                border: `1.5px solid ${w.progress}66`,
                boxShadow: `inset 0 0 0 1px ${w.progress}22`,
                pointerEvents: "none",
                zIndex: 5
              }
            }
          ), /* @__PURE__ */ e.createElement(
            "div",
            {
              key: o.id,
              "data-task-id": o.id,
              ...Ae,
              style: {
                position: "absolute",
                left: l,
                top: Fe,
                width: re,
                height: J,
                borderRadius: J / 2,
                background: B ? "linear-gradient(135deg, #fdd, #fee)" : w.bar,
                border: S ? `2px solid ${t.today}` : B ? `1.5px solid ${t.today}88` : `1.5px solid ${w.barBorder}`,
                cursor: M || R ? "grabbing" : "grab",
                zIndex: u || te ? 20 : 10,
                boxShadow: te ? `0 0 0 2px ${t.group}, 0 4px 16px ${t.group}33` : S ? `0 0 0 1px ${t.today}44, 0 3px 12px ${t.today}22` : We && !u ? `0 0 0 2px ${t.group}99, 0 3px 14px ${t.group}33` : u ? `0 3px 12px ${w.progress}22` : "none",
                transform: u ? "scaleY(1.06)" : "scaleY(1)",
                opacity: je ? 0.15 : 1,
                transition: M || R ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                overflow: "visible"
              }
            },
            /* @__PURE__ */ e.createElement("div", { style: {
              position: "absolute",
              left: 0,
              top: 0,
              width: re,
              height: "100%",
              borderRadius: J / 2,
              overflow: "hidden",
              pointerEvents: "none"
            } }, /* @__PURE__ */ e.createElement("div", { style: {
              position: "absolute",
              left: 0,
              top: 0,
              width: oe,
              height: "100%",
              background: B ? `linear-gradient(90deg, ${t.today}cc, ${t.today}88)` : `linear-gradient(90deg, ${w.progress}, ${w.progress}cc)`,
              borderRadius: `${J / 2}px 0 0 ${J / 2}px`,
              transition: M || R ? "none" : "width 0.3s"
            } }), re > 50 && /* @__PURE__ */ e.createElement("span", { style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: o.progress > 50 ? "#fff" : B ? t.today : w.progress,
              zIndex: 1,
              pointerEvents: "none"
            } }, Math.round(o.progress), "%")),
            /* @__PURE__ */ e.createElement(
              "div",
              {
                onMouseDown: (ye) => xt(ye, o, "left"),
                style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${J / 2}px 0 0 ${J / 2}px` }
              }
            ),
            /* @__PURE__ */ e.createElement(
              "div",
              {
                onMouseDown: (ye) => xt(ye, o, "right"),
                style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${J / 2}px ${J / 2}px 0` }
              }
            ),
            kt && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
              "div",
              {
                "data-task-id": o.id,
                onMouseDown: (ye) => Be(ye, o, "left"),
                style: {
                  position: "absolute",
                  left: -7,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: t.group,
                  border: "2.5px solid #fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                  cursor: "crosshair",
                  zIndex: 30,
                  transition: "transform 0.1s"
                }
              }
            ), /* @__PURE__ */ e.createElement(
              "div",
              {
                "data-task-id": o.id,
                onMouseDown: (ye) => Be(ye, o, "right"),
                style: {
                  position: "absolute",
                  right: -7,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: t.group,
                  border: "2.5px solid #fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                  cursor: "crosshair",
                  zIndex: 30,
                  transition: "transform 0.1s"
                }
              }
            ))
          ));
        }
        if (o.originalType === "milestone") {
          const w = V(a, c), re = s + (N - Ne) / 2;
          return /* @__PURE__ */ e.createElement(
            "div",
            {
              key: o.id,
              "data-task-id": o.id,
              ...Ae,
              style: {
                position: "absolute",
                left: w - 6,
                top: re,
                height: Ne,
                minWidth: rt,
                borderRadius: Ne / 2,
                background: S ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #e8f5ee, #f0f8f4)",
                border: te ? `2px solid ${t.group}` : S ? `2px solid ${t.today}` : `1.5px solid ${t.milestoneRing}`,
                display: "flex",
                alignItems: "center",
                gap: 6,
                paddingLeft: 4,
                paddingRight: 12,
                cursor: M ? "grabbing" : "grab",
                zIndex: u || te ? 20 : 10,
                boxShadow: te ? `0 0 0 2px ${t.group}, 0 4px 16px ${t.group}33` : S ? `0 0 0 1px ${t.today}44, 0 3px 12px ${t.today}22` : We && !u ? `0 0 0 2px ${t.group}99, 0 3px 14px ${t.group}33` : u ? `0 3px 12px ${t.milestone}22` : "0 1px 3px rgba(0,0,0,0.06)",
                opacity: je ? 0.15 : 1,
                transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                transform: u ? "translateY(-1px)" : "none",
                whiteSpace: "nowrap",
                overflow: "visible"
              }
            },
            /* @__PURE__ */ e.createElement("div", { style: {
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: S ? t.today : t.milestone,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            } }, /* @__PURE__ */ e.createElement(Ee, { size: 11, color: "#fff", strokeWidth: 2.5 })),
            /* @__PURE__ */ e.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: S ? t.today : t.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 } }, o.name),
            o.progress >= 100 && /* @__PURE__ */ e.createElement("span", { style: { fontSize: 9, fontWeight: 700, color: "#fff", background: t.milestoneRing, borderRadius: 6, padding: "1px 5px" } }, "✓"),
            kt && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
              "div",
              {
                "data-task-id": o.id,
                onMouseDown: (oe) => Be(oe, o, "left"),
                style: {
                  position: "absolute",
                  left: -7,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: t.group,
                  border: "2.5px solid #fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                  cursor: "crosshair",
                  zIndex: 30
                }
              }
            ), /* @__PURE__ */ e.createElement(
              "div",
              {
                "data-task-id": o.id,
                onMouseDown: (oe) => Be(oe, o, "right"),
                style: {
                  position: "absolute",
                  right: -7,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: t.group,
                  border: "2.5px solid #fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                  cursor: "crosshair",
                  zIndex: 30
                }
              }
            ))
          );
        }
        if (o.originalType === "event") {
          const w = V(a, c), re = s + (N - Ne) / 2;
          return /* @__PURE__ */ e.createElement(
            "div",
            {
              key: o.id,
              ...Ae,
              style: {
                position: "absolute",
                left: w - 6,
                top: re,
                height: Ne,
                minWidth: rt,
                borderRadius: Ne / 2,
                background: "linear-gradient(135deg, #fef3e2, #fef8f0)",
                border: `1.5px solid ${t.event}66`,
                display: "flex",
                alignItems: "center",
                gap: 6,
                paddingLeft: 4,
                paddingRight: 12,
                cursor: M ? "grabbing" : "grab",
                zIndex: u ? 20 : 10,
                boxShadow: We && !u ? `0 0 0 2px ${t.group}99, 0 3px 14px ${t.group}33` : u ? `0 3px 12px ${t.event}22` : "0 1px 3px rgba(0,0,0,0.06)",
                opacity: je ? 0.15 : 1,
                transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                transform: u ? "translateY(-1px)" : "none",
                whiteSpace: "nowrap"
              }
            },
            /* @__PURE__ */ e.createElement("div", { style: {
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: t.event,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            } }, /* @__PURE__ */ e.createElement(be, { size: 11, color: "#fff", strokeWidth: 2.5 })),
            /* @__PURE__ */ e.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: t.event, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 } }, o.name)
          );
        }
        if (o.originalType === "note") {
          const w = V(a, c), re = o.noteColor || t.note, oe = "#2a2a2a", Fe = (o.filesCount || 0) > 0, Te = br + 10, Pe = s + (N - Te) / 2;
          return /* @__PURE__ */ e.createElement(
            "div",
            {
              key: o.id,
              ...Ae,
              style: {
                position: "absolute",
                left: w - 4,
                top: Pe,
                width: yr,
                height: Te,
                borderRadius: 3,
                background: re,
                boxShadow: We && !u ? `0 0 0 2px ${t.group}99, 2px 4px 12px rgba(0,0,0,0.18)` : u ? "3px 4px 14px rgba(0,0,0,0.2), inset 0 -1px 0 rgba(0,0,0,0.06)" : "1px 2px 5px rgba(0,0,0,0.13), inset 0 -1px 0 rgba(0,0,0,0.04)",
                cursor: M ? "grabbing" : "grab",
                zIndex: u ? 20 : 10,
                opacity: je ? 0.15 : 1,
                transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                transform: u ? "translateY(-2px) rotate(-0.8deg)" : "none",
                display: "flex",
                flexDirection: "column",
                padding: "6px 8px 5px",
                overflow: "hidden"
              }
            },
            /* @__PURE__ */ e.createElement("div", { style: {
              position: "absolute",
              top: -3,
              left: "50%",
              transform: "translateX(-50%)",
              width: 28,
              height: 8,
              background: "rgba(255,255,255,0.55)",
              borderRadius: 1,
              boxShadow: "0 1px 2px rgba(0,0,0,0.06)"
            } }),
            /* @__PURE__ */ e.createElement("span", { style: {
              fontSize: 10,
              fontWeight: 700,
              color: oe,
              lineHeight: "13px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
              wordBreak: "break-word",
              flex: 1
            } }, o.name),
            o.noteProjectTitle && /* @__PURE__ */ e.createElement("span", { style: {
              fontSize: 7.5,
              fontWeight: 600,
              color: oe,
              opacity: 0.65,
              marginTop: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            } }, o.noteProjectTitle),
            /* @__PURE__ */ e.createElement("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 3,
              gap: 4
            } }, /* @__PURE__ */ e.createElement("span", { style: { fontSize: 8, color: oe, opacity: 0.55, fontWeight: 500 } }, q(a)), Fe && /* @__PURE__ */ e.createElement("span", { style: {
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 8,
              color: oe,
              opacity: 0.6,
              fontWeight: 600,
              background: "rgba(0,0,0,0.06)",
              borderRadius: 3,
              padding: "1px 3px"
            } }, /* @__PURE__ */ e.createElement(Je, { size: 7 }), o.filesCount))
          );
        }
        return null;
      }), /* @__PURE__ */ e.createElement(
        "svg",
        {
          width: c.totalWidth,
          height: he,
          style: { position: "absolute", inset: 0, pointerEvents: "none" }
        },
        Wt.map((r, n) => {
          const o = ce === r.predId || ce === r.succId, a = !P || r.predId === P || r.succId === P || we.has(r.predId) || we.has(r.succId), d = P !== null && a, l = o ? t.arrowHover : d ? t.group : t.arrow;
          return /* @__PURE__ */ e.createElement("g", { key: n, style: { opacity: a ? d ? 1 : void 0 : 0.08, transition: "opacity 0.18s" } }, /* @__PURE__ */ e.createElement(
            "path",
            {
              d: r.path,
              fill: "none",
              stroke: l,
              strokeWidth: d ? 2.5 : o ? 2 : 1.5,
              style: { transition: "stroke 0.2s, stroke-width 0.2s" }
            }
          ), /* @__PURE__ */ e.createElement(
            "polygon",
            {
              points: `${r.headX},${r.headY} ${r.headX - 6},${r.headY - 4} ${r.headX - 6},${r.headY + 4}`,
              fill: l,
              style: { transition: "fill 0.2s" }
            }
          ));
        })
      ), g && !k && /* @__PURE__ */ e.createElement("div", { style: { position: "fixed", left: g.x + 16, top: g.y - 10, zIndex: 9999, pointerEvents: "none" } }, /* @__PURE__ */ e.createElement(
        "div",
        {
          className: "rounded-xl px-4 py-3 min-w-[220px] max-w-[340px] backdrop-blur-sm",
          style: { background: `${t.surface}f5`, border: `1px solid ${t.borderLight}`, boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)" }
        },
        /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2 mb-1.5" }, $r(g.task.originalType, g.task.colorIdx), /* @__PURE__ */ e.createElement("span", { className: "text-xs font-bold truncate", style: { color: t.textTitle } }, g.task.name)),
        /* @__PURE__ */ e.createElement("div", { className: "flex flex-col gap-1 text-[11px]", style: { color: t.textSecondary } }, g.task.originalType === "step" ? /* @__PURE__ */ e.createElement(e.Fragment, null, g.task.previsionStart && g.task.previsionEnd && /* @__PURE__ */ e.createElement("div", { style: { background: `${t.headerBg}`, borderRadius: 6, padding: "4px 6px", marginBottom: 2 } }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1 mb-1" }, /* @__PURE__ */ e.createElement("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${t.textSecondary}44`, border: `1.5px solid ${t.textSecondary}66` } }), /* @__PURE__ */ e.createElement("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: t.textSecondary } }, "Previsto")), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Início:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, q(g.task.previsionStart))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Fim:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, q(g.task.previsionEnd))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Duração:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, me(g.task.previsionStart, g.task.previsionEnd), "d"))), /* @__PURE__ */ e.createElement("div", { style: { background: g.task.hasActualDates ? `${t.groupLight}22` : "transparent", borderRadius: 6, padding: "4px 6px" } }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1 mb-1" }, /* @__PURE__ */ e.createElement("div", { style: { width: 20, height: 4, borderRadius: 2, background: H[g.task.colorIdx ?? 0].progress } }), /* @__PURE__ */ e.createElement("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: g.task.hasActualDates ? t.group : t.textSecondary } }, g.task.hasActualDates ? "Real" : "Previsto (em uso)")), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Início:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, q(g.task.start))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Fim:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, q(g.task.end))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Duração:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, me(g.task.start, g.task.end), "d"))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4 pt-1 mt-1", style: { borderTop: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("span", null, x("charts.gantt.progress", "Progresso"), ":"), /* @__PURE__ */ e.createElement("span", { className: "font-bold", style: { color: t.group } }, Math.round(g.task.progress), "%"))) : g.task.originalType === "note" ? /* @__PURE__ */ e.createElement(e.Fragment, null, g.task.noteProjectTitle && /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 mb-1" }, /* @__PURE__ */ e.createElement("div", { style: { width: 8, height: 8, borderRadius: 2, background: g.task.noteColor || t.note, flexShrink: 0 } }), /* @__PURE__ */ e.createElement("span", { className: "text-[11px] font-semibold truncate", style: { color: t.textPrimary } }, g.task.noteProjectTitle)), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Data:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, q(g.task.start))), (g.task.filesCount || 0) > 0 && /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Anexos:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold flex items-center gap-1", style: { color: t.textPrimary } }, /* @__PURE__ */ e.createElement(Je, { size: 10 }), g.task.filesCount))) : /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, x("charts.gantt.start", "Início"), ":"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, q(g.task.start))))
      )))
    ))),
    /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "flex flex-wrap items-center gap-2.5 px-6 py-3.5",
        style: { borderTop: `1px solid ${t.border}`, background: t.headerBg }
      },
      /* @__PURE__ */ e.createElement("span", { className: "text-[10px] font-bold uppercase tracking-widest mr-1", style: { color: t.textSecondary } }, x("charts.gantt.legend", "Legenda")),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("div", { className: "flex gap-0.5" }, H.slice(0, 5).map((r, n) => /* @__PURE__ */ e.createElement("div", { key: n, className: "w-2 h-3 rounded-sm", style: { background: r.bar, border: `1px solid ${r.barBorder}` } }))), /* @__PURE__ */ e.createElement("span", null, x("charts.gantt.taskLabel", "Etapas"))),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center justify-center rounded-full", style: { width: 14, height: 14, background: t.milestone } }, /* @__PURE__ */ e.createElement(Ee, { size: 8, color: "#fff" })), /* @__PURE__ */ e.createElement("span", null, x("charts.gantt.milestoneLabel", "Marco (Entrega)"))),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center justify-center rounded-full", style: { width: 14, height: 14, background: t.event } }, /* @__PURE__ */ e.createElement(be, { size: 8, color: "#fff" })), /* @__PURE__ */ e.createElement("span", null, x("charts.gantt.eventLabel", "Evento Pontual"))),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("div", { style: { width: 12, height: 14, background: t.note, borderRadius: 2, boxShadow: "1px 1px 2px rgba(0,0,0,0.1)" } }), /* @__PURE__ */ e.createElement("span", null, x("charts.gantt.noteLabel", "Nota"))),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("svg", { width: "18", height: "10", viewBox: "0 0 18 10" }, /* @__PURE__ */ e.createElement("path", { d: "M0,5 L10,5", stroke: t.arrow, strokeWidth: "1.5" }), /* @__PURE__ */ e.createElement("polygon", { points: "10,5 14,2.5 14,7.5", fill: t.arrow })), /* @__PURE__ */ e.createElement("span", null, x("charts.gantt.dependencyLabel", "Dependência"))),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("div", { className: "w-0.5 h-3.5 rounded-full", style: { background: t.today } }), /* @__PURE__ */ e.createElement("span", null, x("charts.gantt.todayLabel", "Hoje"))),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${t.textSecondary}44`, border: `1.5px solid ${t.textSecondary}66` } }), /* @__PURE__ */ e.createElement("span", null, x("charts.gantt.baselineLabel", "Previsto"))),
      Ue.size > 0 && /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.today, background: t.surface, border: `1px solid ${t.today}44` } }, /* @__PURE__ */ e.createElement("div", { className: "w-3 h-2.5 rounded-sm", style: { border: `2px solid ${t.today}`, background: "transparent" } }), /* @__PURE__ */ e.createElement("span", null, "Caminho Crítico")),
      Ve.size > 0 && /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.today, background: "#FFF5F5", border: `1px solid ${t.today}44` } }, /* @__PURE__ */ e.createElement(wt, { size: 11 }), /* @__PURE__ */ e.createElement("span", null, "Atrasado"))
    )
  ), ge.task && ge.isOpen && (() => {
    const r = ge.task, n = (m || []).filter(
      (s) => s.predecessorId === r.id || s.successorId === r.id
    ), o = {
      FS: "Início após Fim",
      SS: "Inícios simultâneos",
      FF: "Fins simultâneos",
      SF: "Fim após Início"
    }, a = n.length > 0 ? 300 : 220, d = Math.min(ge.position.x, window.innerWidth - a - 16), l = ge.position.y + 8;
    return /* @__PURE__ */ e.createElement(
      "div",
      {
        "data-popup": "gantt-action",
        style: {
          position: "fixed",
          left: d,
          top: l,
          zIndex: 9999,
          background: "#fff",
          borderRadius: 4,
          boxShadow: "0 12px 40px rgba(0,0,0,0.14), 0 3px 10px rgba(0,0,0,0.07)",
          border: `1.5px solid ${t.borderLight}`,
          width: a,
          overflow: "hidden"
        },
        onMouseDown: (s) => s.stopPropagation()
      },
      /* @__PURE__ */ e.createElement("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement(
        "p",
        {
          style: { fontSize: 13, fontWeight: 700, color: t.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
          title: r.name
        },
        r.name
      )),
      /* @__PURE__ */ e.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" } }, /* @__PURE__ */ e.createElement(
        "button",
        {
          onClick: () => {
            O?.(qe(r)), $e();
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 10px",
            borderRadius: 8,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            textAlign: "left",
            width: "100%",
            fontSize: 13,
            fontWeight: 500,
            color: t.textPrimary,
            transition: "background 0.12s"
          },
          onMouseEnter: (s) => {
            s.currentTarget.style.background = t.groupLight;
          },
          onMouseLeave: (s) => {
            s.currentTarget.style.background = "transparent";
          }
        },
        /* @__PURE__ */ e.createElement(nr, { size: 15 }),
        /* @__PURE__ */ e.createElement("span", null, x("projects.stepAction.viewDetails", "Ver detalhes"))
      ), /* @__PURE__ */ e.createElement(
        "button",
        {
          onClick: () => {
            C?.(qe(r)), $e();
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 10px",
            borderRadius: 8,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            textAlign: "left",
            width: "100%",
            fontSize: 13,
            fontWeight: 500,
            color: t.textPrimary,
            transition: "background 0.12s"
          },
          onMouseEnter: (s) => {
            s.currentTarget.style.background = t.groupLight;
          },
          onMouseLeave: (s) => {
            s.currentTarget.style.background = "transparent";
          }
        },
        /* @__PURE__ */ e.createElement(pr, { size: 15 }),
        /* @__PURE__ */ e.createElement("span", null, x("projects.stepAction.edit", "Editar"))
      ), /* @__PURE__ */ e.createElement(
        "button",
        {
          onClick: () => {
            Z?.(r.id), $e();
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 10px",
            borderRadius: 8,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            textAlign: "left",
            width: "100%",
            fontSize: 13,
            fontWeight: 500,
            color: "#ef4444",
            transition: "background 0.12s"
          },
          onMouseEnter: (s) => {
            s.currentTarget.style.background = "#fef2f2";
          },
          onMouseLeave: (s) => {
            s.currentTarget.style.background = "transparent";
          }
        },
        /* @__PURE__ */ e.createElement(gr, { size: 15 }),
        /* @__PURE__ */ e.createElement("span", null, x("projects.stepAction.delete", "Excluir"))
      )),
      n.length > 0 && /* @__PURE__ */ e.createElement("div", { style: { borderTop: `1px solid ${t.borderLight}`, padding: "10px 14px 12px" } }, /* @__PURE__ */ e.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 } }, "Relações (", n.length, ")"), /* @__PURE__ */ e.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 5 } }, n.map((s) => {
        const u = s.predecessorId === r.id, M = u ? s.successorName : s.predecessorName, R = jt === s.id;
        return /* @__PURE__ */ e.createElement("div", { key: s.id, style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 8px",
          borderRadius: 8,
          background: "#f8fafb",
          border: `1px solid ${t.borderLight}`
        } }, /* @__PURE__ */ e.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ e.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: t.group, marginBottom: 2 } }, /* @__PURE__ */ e.createElement("span", { style: { background: `${t.group}15`, borderRadius: 4, padding: "1px 5px" } }, s.type), " ", /* @__PURE__ */ e.createElement("span", { style: { color: t.textSecondary, fontWeight: 500 } }, u ? "→ " : "← "), /* @__PURE__ */ e.createElement("span", { style: { color: t.textMuted, fontWeight: 400, fontSize: 9 } }, o[s.type] ?? s.type)), /* @__PURE__ */ e.createElement(
          "div",
          {
            style: { fontSize: 11, color: t.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
            title: M
          },
          M || (u ? s.successorId : s.predecessorId)
        ), s.lag > 0 && /* @__PURE__ */ e.createElement("div", { style: { fontSize: 9, color: t.textMuted, marginTop: 1 } }, "Lag: ", s.lag, "d")), ne && /* @__PURE__ */ e.createElement(
          "button",
          {
            disabled: !!R,
            onClick: async () => {
              ct(s.id);
              try {
                await ne(s.id);
              } finally {
                ct(null);
              }
            },
            style: {
              flexShrink: 0,
              padding: "4px 6px",
              borderRadius: 6,
              border: "none",
              background: R ? "#fee2e2" : "transparent",
              cursor: R ? "wait" : "pointer",
              color: "#ef4444",
              fontSize: 14,
              opacity: R ? 0.5 : 1,
              transition: "background 0.12s"
            },
            onMouseEnter: (S) => {
              R || (S.currentTarget.style.background = "#fef2f2");
            },
            onMouseLeave: (S) => {
              R || (S.currentTarget.style.background = "transparent");
            },
            title: "Excluir relação"
          },
          R ? "⟳" : "🗑"
        ));
      }))),
      typeof window < "u" && null
    );
  })(), z && /* @__PURE__ */ e.createElement(
    "div",
    {
      "data-menu": "chart-create",
      style: {
        position: "fixed",
        left: Math.min(z.x, window.innerWidth - 220),
        top: Math.min(z.y, window.innerHeight - 220),
        zIndex: 99999,
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 12px 40px rgba(0,0,0,0.15), 0 3px 10px rgba(0,0,0,0.08)",
        border: `1.5px solid ${t.borderLight}`,
        width: 200,
        overflow: "hidden"
      },
      onClick: (r) => r.stopPropagation()
    },
    /* @__PURE__ */ e.createElement("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${t.borderLight}`, background: t.headerBg } }, /* @__PURE__ */ e.createElement("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" } }, "Adicionar em ", q(z.date)), z.projectId && j && /* @__PURE__ */ e.createElement("p", { style: { margin: "2px 0 0", fontSize: 9, color: t.textSecondary, opacity: 0.75, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, W.find((r) => r.projectId === z.projectId)?.projectTitle || z.projectId)),
    /* @__PURE__ */ e.createElement("div", { style: { padding: "5px 5px" } }, [
      {
        label: "Etapa",
        icon: /* @__PURE__ */ e.createElement("div", { style: { width: 14, height: 14, borderRadius: 3, background: H[0].bar, border: `1.5px solid ${H[0].barBorder}`, flexShrink: 0 } }),
        action: () => {
          D?.(z.date, z.projectId), de(null);
        }
      },
      {
        label: "Marco",
        icon: /* @__PURE__ */ e.createElement("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.milestoneRing}30`, border: `1.5px solid ${t.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ e.createElement(Ee, { size: 11, style: { color: t.milestone } })),
        action: () => {
          le?.(z.date, z.projectId), de(null);
        }
      },
      {
        label: "Evento",
        icon: /* @__PURE__ */ e.createElement("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.event}18`, border: `1.5px solid ${t.event}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ e.createElement(be, { size: 11, style: { color: t.event } })),
        action: () => {
          i?.(z.date, z.projectId), de(null);
        }
      },
      {
        label: "Nota",
        icon: /* @__PURE__ */ e.createElement("div", { style: { width: 16, height: 20, background: t.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible", flexShrink: 0 } }, /* @__PURE__ */ e.createElement("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } })),
        action: () => {
          G?.(z.date, z.projectId), de(null);
        }
      }
    ].map((r) => /* @__PURE__ */ e.createElement(
      "button",
      {
        key: r.label,
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
          color: t.textPrimary,
          opacity: 1,
          textAlign: "left",
          transition: "background 0.12s"
        },
        onMouseEnter: (n) => {
          n.currentTarget.style.background = t.headerBg;
        },
        onMouseLeave: (n) => {
          n.currentTarget.style.background = "transparent";
        }
      },
      r.icon,
      r.label
    )))
  ), U && /* @__PURE__ */ e.createElement(
    "svg",
    {
      style: {
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 99999
      }
    },
    /* @__PURE__ */ e.createElement("defs", null, /* @__PURE__ */ e.createElement("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto" }, /* @__PURE__ */ e.createElement("path", { d: "M0,0 L0,6 L6,3 z", fill: t.group }))),
    /* @__PURE__ */ e.createElement(
      "line",
      {
        x1: U.fromScreenX,
        y1: U.fromScreenY,
        x2: U.currentScreenX,
        y2: U.currentScreenY,
        stroke: t.group,
        strokeWidth: 2.5,
        strokeDasharray: "8 5",
        markerEnd: "url(#connect-arrow)",
        opacity: 0.85,
        style: {
          animation: "gantt-dash 0.5s linear infinite"
        }
      }
    ),
    /* @__PURE__ */ e.createElement("style", null, "@keyframes gantt-dash { to { stroke-dashoffset: -13; } }")
  ), fe && /* @__PURE__ */ e.createElement(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99998
      },
      onClick: () => Re(null)
    },
    /* @__PURE__ */ e.createElement(
      "div",
      {
        style: {
          background: "#fff",
          borderRadius: 20,
          padding: "32px 36px",
          width: 420,
          boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 6px 24px rgba(0,0,0,0.08)"
        },
        onClick: (r) => r.stopPropagation()
      },
      /* @__PURE__ */ e.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ e.createElement("h3", { style: { fontSize: 18, fontWeight: 700, color: t.textTitle, marginBottom: 4 } }, "Tipo de Relação"), /* @__PURE__ */ e.createElement("p", { style: { fontSize: 13, color: t.textSecondary } }, "Escolha como as duas tarefas se relacionam")),
      /* @__PURE__ */ e.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 } }, [
        { type: "FS", label: "Início após Fim", desc: "B começa quando A termina", icon: "A ──► B" },
        { type: "SS", label: "Inícios simultâneos", desc: "A e B começam juntos", icon: "A═╗ B" },
        { type: "FF", label: "Fins simultâneos", desc: "A e B terminam juntos", icon: "A ╚═B" },
        { type: "SF", label: "Fim após Início", desc: "B termina quando A começa", icon: "B ──► A end" }
      ].map((r) => /* @__PURE__ */ e.createElement(
        "button",
        {
          key: r.type,
          onClick: () => st(r.type),
          style: {
            border: Me === r.type ? `2px solid ${t.group}` : `1.5px solid ${t.borderLight}`,
            borderRadius: 12,
            padding: "12px 14px",
            textAlign: "left",
            cursor: "pointer",
            background: Me === r.type ? `${t.group}0d` : "#fafafa",
            transition: "all 0.15s"
          }
        },
        /* @__PURE__ */ e.createElement("div", { style: {
          fontSize: 11,
          fontFamily: "monospace",
          fontWeight: 700,
          color: t.group,
          marginBottom: 4,
          background: Me === r.type ? `${t.group}20` : `${t.group}0d`,
          borderRadius: 6,
          padding: "2px 6px",
          display: "inline-block"
        } }, r.type),
        /* @__PURE__ */ e.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: t.textTitle, marginBottom: 2 } }, r.label),
        /* @__PURE__ */ e.createElement("div", { style: { fontSize: 11, color: t.textSecondary } }, r.desc)
      ))),
      /* @__PURE__ */ e.createElement("div", { style: { marginBottom: 24 } }, /* @__PURE__ */ e.createElement("label", { style: { fontSize: 12, fontWeight: 600, color: t.textTitle, display: "block", marginBottom: 6 } }, "Lag (dias de folga)"), /* @__PURE__ */ e.createElement(
        "input",
        {
          type: "number",
          min: 0,
          value: He,
          onChange: (r) => lt(parseInt(r.target.value) || 0),
          style: {
            width: "100%",
            padding: "8px 12px",
            borderRadius: 8,
            border: `1.5px solid ${t.borderLight}`,
            fontSize: 14,
            color: t.textPrimary,
            outline: "none",
            boxSizing: "border-box"
          }
        }
      )),
      /* @__PURE__ */ e.createElement("div", { style: { display: "flex", gap: 10 } }, /* @__PURE__ */ e.createElement(
        "button",
        {
          onClick: () => Re(null),
          style: {
            flex: 1,
            padding: "10px 0",
            borderRadius: 10,
            border: `1.5px solid ${t.borderLight}`,
            background: "#fff",
            fontSize: 14,
            fontWeight: 600,
            color: t.textSecondary,
            cursor: "pointer",
            transition: "all 0.15s"
          }
        },
        "Cancelar"
      ), /* @__PURE__ */ e.createElement(
        "button",
        {
          onClick: Ot,
          disabled: ke,
          style: {
            flex: 2,
            padding: "10px 0",
            borderRadius: 10,
            border: "none",
            background: ke ? `${t.group}88` : `linear-gradient(135deg, ${t.group}, ${t.group}cc)`,
            fontSize: 14,
            fontWeight: 700,
            color: "#fff",
            cursor: ke ? "wait" : "pointer",
            boxShadow: ke ? "none" : `0 4px 16px ${t.group}33`,
            transition: "all 0.15s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8
          }
        },
        ke && /* @__PURE__ */ e.createElement("span", { style: { fontSize: 12 } }, "⟳"),
        ke ? "Criando..." : "Criar Relação"
      ))
    )
  ));
}
function $r(p, f) {
  const h = ($, m) => /* @__PURE__ */ e.createElement("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 18, height: 18, background: $ } }, m);
  switch (p) {
    case "step":
      return /* @__PURE__ */ e.createElement("div", { className: "w-3 h-3 rounded flex-shrink-0", style: { background: H[f ?? 0].bar, border: `1.5px solid ${H[f ?? 0].barBorder}` } });
    case "milestone":
      return h(t.milestone, /* @__PURE__ */ e.createElement(Ee, { size: 10, color: "#fff" }));
    case "event":
      return h(t.event, /* @__PURE__ */ e.createElement(be, { size: 10, color: "#fff" }));
    case "note":
      return h(t.note, /* @__PURE__ */ e.createElement(Mt, { size: 10, color: "#fff" }));
  }
}
export {
  Tr as ProjectGantt
};
