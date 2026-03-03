import { jsx as o, jsxs as s, Fragment as Ce } from "react/jsx-runtime";
import Qt, { forwardRef as Mt, createElement as rt, useState as C, useRef as Ne, useMemo as ue, useCallback as F, useEffect as he } from "react";
const er = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Lt = (...u) => u.filter((x, m, T) => !!x && x.trim() !== "" && T.indexOf(x) === m).join(" ").trim();
var tr = {
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
const rr = Mt(
  ({
    color: u = "currentColor",
    size: x = 24,
    strokeWidth: m = 2,
    absoluteStrokeWidth: T,
    className: g = "",
    children: k,
    iconNode: S,
    ...D
  }, W) => rt(
    "svg",
    {
      ref: W,
      ...tr,
      width: x,
      height: x,
      stroke: u,
      strokeWidth: T ? Number(m) * 24 / Number(x) : m,
      className: Lt("lucide", g),
      ...D
    },
    [
      ...S.map(([b, E]) => rt(b, E)),
      ...Array.isArray(k) ? k : [k]
    ]
  )
);
const J = (u, x) => {
  const m = Mt(
    ({ className: T, ...g }, k) => rt(rr, {
      ref: k,
      iconNode: x,
      className: Lt(`lucide-${er(u)}`, T),
      ...g
    })
  );
  return m.displayName = `${u}`, m;
};
const or = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ze = J("ChevronDown", or);
const nr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], $t = J("ChevronRight", nr);
const sr = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], ve = J("Clock", sr);
const ir = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ar = J("Eye", ir);
const lr = [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
], ke = J("Flag", lr);
const dr = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], cr = J("LoaderCircle", dr);
const pr = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], Ct = J("MessageCircle", pr);
const ur = [
  ["path", { d: "M13.234 20.252 21 12.3", key: "1cbrk9" }],
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",
      key: "1pkts6"
    }
  ]
], Qe = J("Paperclip", ur);
const hr = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], gr = J("Pen", hr);
const fr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], et = J("Plus", fr);
const xr = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], yr = J("Trash2", xr);
const mr = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], It = J("TriangleAlert", mr), Y = {
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
  surface: Y.white,
  // subtle alternating row
  headerBg: "#F2F5F3",
  // soft green-tinted header
  textTitle: Y.dark_green,
  // #1A3C30
  textPrimary: Y.dark_gray,
  // #4F4F4F
  textSecondary: Y.gray,
  // #7B7B7B
  textMuted: Y.light_gray,
  // #D9D9D9
  group: Y.dark_green,
  // #1A3C30
  groupLight: Y.water_green,
  // #A0D8A8 (bar border)
  milestone: Y.dark_green,
  // #1A3C30
  milestoneRing: Y.light_green,
  // #A0D8A8
  event: Y.orange,
  // yellow translucent
  note: Y.yellow,
  // #FFBB1C
  border: Y.light_gray,
  // #D9D9D9
  borderLight: "#ECECEC",
  weekendBg: "#F4F6F5",
  today: Y.red,
  // #FF0000
  todayBg: "#FF000008",
  // today column tint
  arrow: Y.gray,
  // #7B7B7B
  arrowHover: Y.dark_green
  // #1A3C30
}, M = 50, ot = 32, br = ot * 2, vr = 460, Z = 26, Me = 28, nt = 120, kr = 90, wr = 44, Sr = 40, $r = 3.5, U = [
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
], Tt = {
  step: "Etapas",
  milestone: "Marcos",
  event: "Eventos",
  note: "Notas"
}, Rt = 864e5, O = (u, x) => new Date(u.getTime() + x * Rt), ge = (u, x) => Math.round((x.getTime() - u.getTime()) / Rt), Dt = (u) => u.getDay() === 0 || u.getDay() === 6, Et = (u) => new Date(u.getFullYear(), u.getMonth(), 1), tt = (u) => new Date(u.getFullYear(), u.getMonth() + 1, 0), K = (u) => `${String(u.getDate()).padStart(2, "0")}/${String(u.getMonth() + 1).padStart(2, "0")}/${u.getFullYear()}`, Nt = {
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
function Ir(u, x) {
  const m = x === "month" ? Sr : $r;
  if (u.length === 0) {
    const E = /* @__PURE__ */ new Date(), N = Et(E), X = tt(E), R = ge(N, X) + 1;
    return {
      start: N,
      end: X,
      totalDays: R,
      dayWidth: m,
      totalWidth: R * m,
      months: [{ date: N, label: `${Nt[N.getMonth()]} DE ${N.getFullYear()}`, startDay: 0, days: R }]
    };
  }
  let T = new Date(u[0].start), g = new Date(u[0].end);
  u.forEach((E) => {
    E.start < T && (T = new Date(E.start)), E.end > g && (g = new Date(E.end));
  });
  const k = Et(O(T, -14)), S = tt(O(g, 14)), D = ge(k, S) + 1, W = [];
  let b = new Date(k);
  for (; b <= S; ) {
    const E = tt(b), N = E > S ? S : E, X = ge(k, b), R = ge(b, N) + 1;
    W.push({
      date: new Date(b),
      label: `${Nt[b.getMonth()]} DE ${b.getFullYear()}`,
      startDay: X,
      days: R
    }), b = new Date(b.getFullYear(), b.getMonth() + 1, 1);
  }
  return { start: k, end: S, totalDays: D, dayWidth: m, totalWidth: D * m, months: W };
}
function G(u, x) {
  return ge(x.start, u) * x.dayWidth;
}
function Tr(u, x, m, T) {
  const g = /* @__PURE__ */ new Map();
  return u.forEach((k) => g.set(k.id, k)), x.map((k) => {
    const S = g.get(k.predecessorId), D = g.get(k.successorId);
    if (!S || !D) return null;
    const W = T.get(S.id), b = T.get(D.id);
    if (W == null || b == null) return null;
    const E = S.originalType !== "step", N = D.originalType !== "step", X = E ? G(S.start, m) + nt : G(S.end, m), R = W * M + M / 2, Q = N ? G(D.start, m) - 10 : G(D.start, m), P = b * M + M / 2, se = 14, le = Math.max(X + se, Q - se), d = R === P ? `M${X},${R} L${Q - 6},${P}` : `M${X},${R} L${le},${R} L${le},${P} L${Q - 6},${P}`;
    return { predId: S.id, succId: D.id, path: d, headX: Q - 6, headY: P };
  }).filter(Boolean);
}
function Dr(u, x) {
  if (u.length === 0 || x.length === 0) return /* @__PURE__ */ new Set();
  const m = /* @__PURE__ */ new Map();
  u.forEach((d) => m.set(d.id, d));
  const T = new Set(u.map((d) => d.id)), g = x.filter((d) => T.has(d.predecessorId) && T.has(d.successorId));
  if (g.length === 0) return /* @__PURE__ */ new Set();
  const k = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
  g.forEach((d) => {
    k.has(d.predecessorId) || k.set(d.predecessorId, []), k.get(d.predecessorId).push(d.successorId), S.has(d.successorId) || S.set(d.successorId, []), S.get(d.successorId).push(d.predecessorId);
  });
  const D = (d) => Math.max(1, ge(d.start, d.end)), W = /* @__PURE__ */ new Set(), b = [];
  function E(d) {
    W.has(d) || (W.add(d), (k.get(d) || []).forEach(E), b.unshift(d));
  }
  u.forEach((d) => E(d.id));
  const N = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
  for (const d of b) {
    const q = m.get(d), y = S.get(d) || [];
    let H = 0;
    for (const ce of y) H = Math.max(H, X.get(ce) || 0);
    const de = y.length > 0 ? H : 0;
    N.set(d, de), X.set(d, de + D(q));
  }
  let R = 0;
  X.forEach((d) => {
    d > R && (R = d);
  });
  const Q = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
  for (let d = b.length - 1; d >= 0; d--) {
    const q = b[d], y = m.get(q), H = k.get(q) || [];
    let de = R;
    for (const ce of H) de = Math.min(de, Q.get(ce) ?? R);
    P.set(q, H.length > 0 ? de : R), Q.set(q, (P.get(q) || 0) - D(y));
  }
  const se = /* @__PURE__ */ new Set();
  g.forEach((d) => {
    se.add(d.predecessorId), se.add(d.successorId);
  });
  const le = /* @__PURE__ */ new Set();
  for (const d of b) {
    if (!se.has(d)) continue;
    const q = (Q.get(d) || 0) - (N.get(d) || 0);
    Math.abs(q) < 0.5 && le.add(d);
  }
  return le;
}
function Lr({
  steps: u,
  milestones: x,
  events: m,
  notes: T,
  dependencies: g,
  loading: k,
  projectName: S,
  translations: D,
  groupByProject: W,
  onTaskChange: b,
  onTaskClick: E,
  onAddNewStage: N,
  onViewStage: X,
  onEditStage: R,
  onDeleteStage: Q,
  onCreateDependency: P,
  onDeleteDependency: se,
  onAddMilestone: le,
  onAddEvent: d,
  onAddNote: q
}) {
  const y = (t, n) => typeof D == "function" ? D(t, n) : D && typeof D == "object" ? D[t] || n || t : n || t, [H, de] = C("month"), [ce, Re] = C(null), [_, jt] = C(null), [f, st] = C(null), [fe, it] = C({ isOpen: !1, position: { x: 0, y: 0 }, task: null }), [w, Oe] = C(null), [v, Xe] = C(null), [je, zt] = C(
    /* @__PURE__ */ new Set(["step", "milestone", "event", "note"])
  ), [He, Bt] = C(/* @__PURE__ */ new Set()), [at, Wt] = C(/* @__PURE__ */ new Set()), [V, Ue] = C(null), [xe, ze] = C(null), [Le, lt] = C("FS"), [Ve, dt] = C(0), [we, ct] = C(!1), [At, pt] = C(null), [z, pe] = C(null), [Be, Se] = C(!1), ut = Ne(null), ee = Ne(null), ie = Ne(null), ae = Ne(null), A = ue(() => {
    const t = [];
    let n = 0;
    return u.forEach((r) => {
      const i = !!(r.startDate && r.finishDate), p = r.startDate || r.previsionStartDate, l = r.finishDate || r.previsionFinishDate;
      if (!p || !l) return;
      const a = new Date(p), h = new Date(l);
      if (isNaN(a.getTime()) || isNaN(h.getTime())) return;
      h <= a && h.setDate(h.getDate() + 1);
      let L, j;
      if (r.previsionStartDate && r.previsionFinishDate) {
        const B = new Date(r.previsionStartDate), re = new Date(r.previsionFinishDate);
        !isNaN(B.getTime()) && !isNaN(re.getTime()) && (L = B, j = re <= B ? O(B, 1) : re);
      }
      const I = g?.filter((B) => B.successorId === r.id).map((B) => B.predecessorId) || [];
      t.push({
        id: r.id,
        name: r.name,
        start: a,
        end: h,
        progress: r.conclusionPercent ? Number(r.conclusionPercent) * 100 : 0,
        originalType: "step",
        deps: I,
        colorIdx: n % U.length,
        previsionStart: L,
        previsionEnd: j,
        hasActualDates: i,
        projectId: r.projectId || void 0,
        projectTitle: r.projectTitle || void 0
      }), n++;
    }), x?.forEach((r) => {
      if (!r.date) return;
      const i = new Date(r.date);
      if (isNaN(i.getTime())) return;
      const p = g?.filter((l) => l.successorId === r.id).map((l) => l.predecessorId) || [];
      t.push({
        id: r.id,
        name: r.name,
        start: i,
        end: i,
        progress: r.finished ? 100 : 0,
        originalType: "milestone",
        deps: p,
        projectId: r.projectId || void 0,
        projectTitle: r.projectTitle || void 0
      });
    }), m?.forEach((r) => {
      if (!r.date) return;
      const i = new Date(r.date);
      if (isNaN(i.getTime())) return;
      const p = g?.filter((l) => l.successorId === r.id).map((l) => l.predecessorId) || [];
      t.push({
        id: r.id,
        name: r.title,
        start: i,
        end: i,
        progress: r.finished ? 100 : 0,
        originalType: "event",
        deps: p,
        projectId: r.projectId || void 0,
        projectTitle: r.projectTitle || void 0
      });
    }), T?.forEach((r) => {
      if (!r.date) return;
      const i = new Date(r.date);
      isNaN(i.getTime()) || t.push({
        id: r.id,
        name: r.title || "Nota",
        start: i,
        end: i,
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
    }), t;
  }, [u, x, m, T, g]), c = ue(() => Ir(A, H), [A, H]), te = ue(() => {
    const t = [], n = ["step", "milestone", "event", "note"];
    if (W) {
      const r = /* @__PURE__ */ new Map();
      A.forEach((i) => {
        i.projectId && !r.has(i.projectId) && r.set(i.projectId, i.projectTitle || i.projectId);
      });
      for (const [i, p] of Array.from(r.entries())) {
        const l = at.has(i);
        if (t.push({ kind: "projectHeader", projectId: i, projectTitle: p, collapsed: l }), !l) {
          const a = A.filter((h) => h.projectId === i);
          for (const h of n) {
            if (!je.has(h)) continue;
            const L = a.filter((B) => B.originalType === h);
            if (L.length === 0) continue;
            const j = `${i}-${h}`, I = He.has(j);
            t.push({ kind: "group", groupType: h, label: Tt[h], count: L.length, collapsed: I, projectId: i }), I || L.forEach((B) => t.push({ kind: "task", task: B }));
          }
        }
      }
    } else
      for (const r of n) {
        if (!je.has(r)) continue;
        const i = A.filter((l) => l.originalType === r);
        if (i.length === 0) continue;
        const p = He.has(r);
        t.push({ kind: "group", groupType: r, label: Tt[r], count: i.length, collapsed: p }), p || i.forEach((l) => t.push({ kind: "task", task: l }));
      }
    return t;
  }, [A, je, He, at, W]), ht = ue(() => {
    const t = /* @__PURE__ */ new Map();
    return te.forEach((n, r) => {
      n.kind === "task" && t.set(n.task.id, r);
    }), t;
  }, [te]), Ft = ue(
    () => Tr(A, g || [], c, ht),
    [A, g, c, ht]
  ), Ge = ue(() => Dr(A, g || []), [A, g]), qe = ue(() => {
    const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Date();
    return A.forEach((r) => {
      r.originalType === "step" && r.end < n && r.progress < 100 && t.add(r.id);
    }), t;
  }, [A]), $e = ue(() => {
    if (!_ || !g?.length) return /* @__PURE__ */ new Set();
    const t = /* @__PURE__ */ new Set(), n = [_];
    for (; n.length; ) {
      const r = n.shift();
      for (const i of g)
        i.predecessorId === r && !t.has(i.successorId) && (t.add(i.successorId), n.push(i.successorId)), i.successorId === r && !t.has(i.predecessorId) && (t.add(i.predecessorId), n.push(i.predecessorId));
    }
    return t;
  }, [_, g]), Ie = Ne(!1), Pt = F(() => {
    if (Ie.current) return;
    Ie.current = !0;
    const t = ie.current;
    t && ee.current && (ee.current.scrollTop = t.scrollTop), t && ae.current && (ae.current.scrollLeft = t.scrollLeft), Ie.current = !1;
  }, []), _t = F(() => {
    Ie.current || (Ie.current = !0, ee.current && ie.current && (ie.current.scrollTop = ee.current.scrollTop), Ie.current = !1);
  }, []), gt = Ne(!1);
  he(() => {
    if (gt.current || !c.totalWidth) return;
    const t = ie.current;
    if (!t) return;
    const n = G(/* @__PURE__ */ new Date(), c);
    if (n >= 0 && n <= c.totalWidth) {
      const r = n - t.clientWidth / 2;
      t.scrollLeft = Math.max(0, r), ae.current && (ae.current.scrollLeft = t.scrollLeft), gt.current = !0;
    }
  }, [c]);
  const [ye, Ke] = C(null), Yt = F((t) => {
    if (v || w || t.button === 2) return;
    const n = ie.current;
    n && (t.preventDefault(), Ke({ startX: t.clientX, startY: t.clientY, scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }));
  }, [v, w]);
  he(() => {
    if (!ye) return;
    const t = (r) => {
      const i = ie.current;
      if (!i) return;
      const p = r.clientX - ye.startX, l = r.clientY - ye.startY;
      i.scrollLeft = ye.scrollLeft - p, i.scrollTop = ye.scrollTop - l, ee.current && (ee.current.scrollTop = i.scrollTop), ae.current && (ae.current.scrollLeft = i.scrollLeft);
    }, n = () => Ke(null);
    return document.addEventListener("mousemove", t), document.addEventListener("mouseup", n), () => {
      document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n);
    };
  }, [ye]);
  const Ot = F((t) => {
    const n = ie.current;
    if (n)
      if (t.preventDefault(), t.shiftKey || Math.abs(t.deltaX) > Math.abs(t.deltaY)) {
        const r = t.shiftKey ? t.deltaY : t.deltaX;
        n.scrollLeft += r, ae.current && (ae.current.scrollLeft = n.scrollLeft);
      } else
        n.scrollTop += t.deltaY, ee.current && (ee.current.scrollTop = n.scrollTop);
  }, []), ft = F((t) => {
    const n = ie.current;
    if (!n) return /* @__PURE__ */ new Date();
    const r = n.getBoundingClientRect(), i = t - r.left + n.scrollLeft, p = Math.max(0, Math.floor(i / c.dayWidth));
    return O(c.start, p);
  }, [c]), xt = F((t) => {
    if (!W) return;
    const n = ee.current;
    if (!n) return;
    const r = n.getBoundingClientRect(), i = t - r.top + n.scrollTop, p = Math.max(0, Math.floor(i / M));
    for (let l = Math.min(p, te.length - 1); l >= 0; l--) {
      const a = te[l];
      if (a.kind === "projectHeader") return a.projectId;
      if (a.kind === "task" && a.task.projectId) return a.task.projectId;
      if (a.kind === "group" && a.projectId) return a.projectId;
    }
  }, [W, te]), yt = F((t) => {
    t.preventDefault(), t.stopPropagation();
    const n = xt(t.clientY);
    pe({ x: t.clientX, y: t.clientY, date: ft(t.clientX), projectId: n }), Ke(null);
  }, [ft, xt]);
  he(() => {
    if (!z) return;
    const t = (i) => {
      i.key === "Escape" && pe(null);
    }, n = (i) => {
      i.target.closest('[data-menu="chart-create"]') || pe(null);
    }, r = () => pe(null);
    return document.addEventListener("keydown", t), document.addEventListener("click", n), window.addEventListener("scroll", r, !0), () => {
      document.removeEventListener("keydown", t), document.removeEventListener("click", n), window.removeEventListener("scroll", r, !0);
    };
  }, [z]), he(() => {
    if (!Be) return;
    const t = (n) => {
      ut.current?.contains(n.target) || Se(!1);
    };
    return document.addEventListener("click", t), () => document.removeEventListener("click", t);
  }, [Be]);
  const Xt = F((t, n) => {
    t.preventDefault(), t.stopPropagation(), Oe({
      task: n,
      startMouseX: t.clientX,
      originalStart: new Date(n.start),
      originalEnd: new Date(n.end),
      offsetDays: 0
    });
  }, []);
  he(() => {
    if (!w) return;
    const t = (r) => {
      const i = r.clientX - w.startMouseX, p = Math.round(i / c.dayWidth);
      p !== w.offsetDays && Oe((l) => l ? { ...l, offsetDays: p } : null);
    }, n = () => {
      w.offsetDays !== 0 && b && b({
        id: w.task.id,
        name: w.task.name,
        start: O(w.originalStart, w.offsetDays),
        end: O(w.originalEnd, w.offsetDays),
        type: w.task.originalType === "step" ? "task" : "milestone",
        progress: w.task.progress
      }), Oe(null);
    };
    return document.addEventListener("mousemove", t), document.addEventListener("mouseup", n), () => {
      document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n);
    };
  }, [w, c.dayWidth, b]);
  const mt = F((t, n, r) => {
    t.preventDefault(), t.stopPropagation(), Xe({
      task: n,
      edge: r,
      startMouseX: t.clientX,
      originalStart: new Date(n.start),
      originalEnd: new Date(n.end),
      offsetDays: 0
    });
  }, []);
  he(() => {
    if (!v) return;
    const t = (r) => {
      const i = r.clientX - v.startMouseX, p = Math.round(i / c.dayWidth);
      p !== v.offsetDays && Xe((l) => l ? { ...l, offsetDays: p } : null);
    }, n = () => {
      if (v.offsetDays !== 0 && b) {
        const r = v.edge === "left" ? O(v.originalStart, v.offsetDays) : v.originalStart, i = v.edge === "right" ? O(v.originalEnd, v.offsetDays) : v.originalEnd;
        i > r && b({
          id: v.task.id,
          name: v.task.name,
          start: r,
          end: i,
          type: "task",
          progress: v.task.progress
        });
      }
      Xe(null);
    };
    return document.addEventListener("mousemove", t), document.addEventListener("mouseup", n), () => {
      document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n);
    };
  }, [v, c.dayWidth, b]);
  const We = F((t, n, r) => {
    t.preventDefault(), t.stopPropagation(), Ue({
      fromTaskId: n.id,
      fromEdge: r,
      fromScreenX: t.clientX,
      fromScreenY: t.clientY,
      currentScreenX: t.clientX,
      currentScreenY: t.clientY,
      hoverTargetId: null
    });
  }, []);
  he(() => {
    if (!V) return;
    const t = (r) => {
      const i = document.elementsFromPoint(r.clientX, r.clientY);
      let p = null;
      for (const l of i) {
        const a = l.dataset?.taskId;
        if (a && a !== V.fromTaskId) {
          p = a;
          break;
        }
      }
      Ue((l) => l ? { ...l, currentScreenX: r.clientX, currentScreenY: r.clientY, hoverTargetId: p } : null);
    }, n = (r) => {
      const i = document.elementsFromPoint(r.clientX, r.clientY);
      let p = null;
      for (const l of i) {
        const a = l.dataset?.taskId;
        if (a && a !== V.fromTaskId) {
          p = a;
          break;
        }
      }
      p && P && (ze({ fromTaskId: V.fromTaskId, fromEdge: V.fromEdge, toTaskId: p }), lt("FS"), dt(0)), Ue(null);
    };
    return document.addEventListener("mousemove", t), document.addEventListener("mouseup", n), () => {
      document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n);
    };
  }, [V?.fromTaskId, V?.fromEdge, P]);
  const Ht = F(async () => {
    if (!xe || !P) return;
    const t = new Map(A.map((a) => [a.id, a])), n = t.get(xe.fromTaskId), r = t.get(xe.toTaskId);
    if (!n || !r) return;
    const i = (a) => a.originalType === "step" ? "STEP" : "MILESTONE", p = xe.fromEdge === "right" ? n : r, l = xe.fromEdge === "right" ? r : n;
    ct(!0);
    try {
      await P({
        predecessorId: p.id,
        predecessorType: i(p),
        successorId: l.id,
        successorType: i(l),
        type: Le,
        lag: Ve
      }), ze(null);
    } finally {
      ct(!1);
    }
  }, [xe, A, P, Le, Ve]), Ut = F((t) => {
    Bt((n) => {
      const r = new Set(n);
      return r.has(t) ? r.delete(t) : r.add(t), r;
    });
  }, []), Vt = F((t) => {
    Wt((n) => {
      const r = new Set(n);
      return r.has(t) ? r.delete(t) : r.add(t), r;
    });
  }, []), Gt = F((t) => {
    zt((n) => {
      const r = new Set(n);
      return r.has(t) ? r.delete(t) : r.add(t), r;
    });
  }, []), Je = (t) => ({
    id: t.id,
    name: t.name,
    start: t.start,
    end: t.end,
    type: t.originalType === "step" ? "task" : "milestone",
    progress: t.progress
  }), qt = F((t, n) => {
    it({ isOpen: !0, position: { x: t.clientX, y: t.clientY }, task: n });
  }, []), bt = F((t) => {
    E?.(Je(t));
  }, [E]), Te = () => {
    it({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  };
  he(() => {
    if (!fe.isOpen) return;
    const t = (i) => {
      i.key === "Escape" && Te();
    }, n = (i) => {
      i.target.closest('[data-popup="gantt-action"]') || Te();
    }, r = () => Te();
    return document.addEventListener("keydown", t), document.addEventListener("mousedown", n), window.addEventListener("scroll", r, !0), () => {
      document.removeEventListener("keydown", t), document.removeEventListener("mousedown", n), window.removeEventListener("scroll", r, !0);
    };
  }, [fe.isOpen]);
  const vt = (t) => w?.task.id === t.id ? O(w.originalStart, w.offsetDays) : v?.task.id === t.id && v.edge === "left" ? O(v.originalStart, v.offsetDays) : t.start, kt = (t) => w?.task.id === t.id ? O(w.originalEnd, w.offsetDays) : v?.task.id === t.id && v.edge === "right" ? O(v.originalEnd, v.offsetDays) : t.end;
  if (k)
    return /* @__PURE__ */ o("div", { className: "h-64 flex items-center justify-center rounded-xl", style: { background: e.surface, border: `1px solid ${e.border}`, boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)" }, children: /* @__PURE__ */ o(cr, { className: "animate-spin", size: 28, style: { color: e.group } }) });
  if (!u?.length)
    return /* @__PURE__ */ s("div", { className: "text-center p-10 rounded-xl flex flex-col items-center gap-4", style: { background: e.surface, border: `1px solid ${e.border}`, color: e.textSecondary, boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)" }, children: [
      /* @__PURE__ */ o("span", { children: y("charts.gantt.noStepsFound") }),
      N && /* @__PURE__ */ s(
        "button",
        {
          onClick: () => N(),
          className: "flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90",
          style: { background: e.group },
          children: [
            /* @__PURE__ */ o(et, { size: 16 }),
            y("charts.gantt.createFirstStep", "Criar primeira etapa")
          ]
        }
      )
    ] });
  if (!A.length)
    return /* @__PURE__ */ s("div", { className: "text-center p-10 rounded-xl flex flex-col items-center gap-4", style: { background: e.surface, border: `1px solid ${e.border}`, color: e.textSecondary, boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)" }, children: [
      /* @__PURE__ */ o("span", { children: y("charts.gantt.noStepsWithDates") }),
      N && /* @__PURE__ */ s(
        "button",
        {
          onClick: () => N(),
          className: "flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90",
          style: { background: e.group },
          children: [
            /* @__PURE__ */ o(et, { size: 16 }),
            y("charts.gantt.createFirstStep", "Criar primeira etapa")
          ]
        }
      )
    ] });
  const De = G(/* @__PURE__ */ new Date(), c), Kt = De >= 0 && De <= c.totalWidth, me = te.length * M, wt = 540;
  return /* @__PURE__ */ s("div", { style: { fontFamily: "'Inter', sans-serif" }, children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: "rounded-xl overflow-hidden",
        style: {
          background: e.surface,
          border: `1px solid ${e.border}`,
          boxShadow: "0 2px 16px 0 rgb(0 0 0 / 0.06), 0 0 0 1px rgb(0 0 0 / 0.02)"
        },
        children: [
          /* @__PURE__ */ s(
            "div",
            {
              className: "flex items-center justify-between px-6 py-5",
              style: { borderBottom: `1px solid ${e.border}`, background: `linear-gradient(180deg, ${e.headerBg} 0%, ${e.surface} 100%)` },
              children: [
                /* @__PURE__ */ s("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ s("div", { children: [
                    /* @__PURE__ */ o("h3", { className: "text-sm font-bold uppercase tracking-widest", style: { color: e.textTitle }, children: y("planning.gantt", "PLANEJAMENTO DA OBRA") }),
                    /* @__PURE__ */ o("div", { className: "h-[2.5px] w-16 mt-1.5 rounded-full", style: { background: `linear-gradient(90deg, ${e.group}, ${e.milestoneRing})` } })
                  ] }),
                  S && /* @__PURE__ */ o(
                    "span",
                    {
                      className: "text-xs font-medium px-3 py-1 rounded-full",
                      style: { color: e.textSecondary, background: e.surface, border: `1px solid ${e.border}` },
                      children: S
                    }
                  )
                ] }),
                /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ o("div", { className: "flex p-1 rounded-lg", style: { background: "rgba(122,122,122,0.07)", border: `1px solid ${e.borderLight}` }, children: ["month", "year"].map((t) => /* @__PURE__ */ o(
                    "button",
                    {
                      onClick: () => de(t),
                      className: "px-5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200",
                      style: H === t ? { background: e.surface, color: e.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { color: e.textSecondary },
                      children: t === "month" ? y("charts.gantt.month", "Mês") : y("charts.gantt.year", "Ano")
                    },
                    t
                  )) }),
                  /* @__PURE__ */ o("div", { className: "flex p-1 rounded-lg gap-0.5", style: { background: "rgba(122,122,122,0.07)", border: `1px solid ${e.borderLight}` }, children: [
                    { type: "step", label: "Etapas", icon: /* @__PURE__ */ o("div", { className: "w-2.5 h-2.5 rounded-sm", style: { background: U[0].bar, border: `1px solid ${U[0].barBorder}` } }) },
                    { type: "milestone", label: "Marcos", icon: /* @__PURE__ */ o(ke, { size: 11, style: { color: e.milestone } }) },
                    { type: "event", label: "Eventos", icon: /* @__PURE__ */ o(ve, { size: 11, style: { color: e.event } }) },
                    { type: "note", label: "Notas", icon: /* @__PURE__ */ o(Ct, { size: 11, style: { color: e.note } }) }
                  ].map((t) => {
                    const n = je.has(t.type);
                    return /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => Gt(t.type),
                        className: "flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-md transition-all duration-200",
                        style: n ? { background: e.surface, color: e.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { color: e.textMuted, opacity: 0.5 },
                        children: [
                          t.icon,
                          /* @__PURE__ */ o("span", { children: t.label })
                        ]
                      },
                      t.type
                    );
                  }) }),
                  N && /* @__PURE__ */ s("div", { ref: ut, style: { position: "relative" }, children: [
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => Se((t) => !t),
                        className: "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
                        style: { background: `linear-gradient(135deg, ${e.group}, ${e.group}dd)` },
                        children: [
                          /* @__PURE__ */ o(et, { size: 16 }),
                          /* @__PURE__ */ o("span", { children: y("charts.gantt.newAction", "Nova Ação") }),
                          /* @__PURE__ */ o(Ze, { size: 14, style: { opacity: 0.7, transform: Be ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
                        ]
                      }
                    ),
                    Be && /* @__PURE__ */ o(
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
                        onClick: (t) => t.stopPropagation(),
                        children: [
                          {
                            label: "Etapa",
                            icon: /* @__PURE__ */ o("div", { style: { width: 14, height: 14, borderRadius: 3, background: U[0].bar, border: `1.5px solid ${U[0].barBorder}`, flexShrink: 0 } }),
                            action: () => {
                              N?.(), Se(!1);
                            }
                          },
                          {
                            label: "Marco",
                            icon: /* @__PURE__ */ o("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${e.milestoneRing}30`, border: `1.5px solid ${e.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(ke, { size: 11, style: { color: e.milestone } }) }),
                            action: () => {
                              le?.(), Se(!1);
                            }
                          },
                          {
                            label: "Evento",
                            icon: /* @__PURE__ */ o("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${e.event}18`, border: `1.5px solid ${e.event}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(ve, { size: 11, style: { color: e.event } }) }),
                            action: () => {
                              d?.(), Se(!1);
                            }
                          },
                          {
                            label: "Nota",
                            icon: /* @__PURE__ */ o("div", { style: { width: 16, height: 20, background: e.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ o("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } }) }),
                            action: () => {
                              q?.(), Se(!1);
                            }
                          }
                        ].map((t) => /* @__PURE__ */ s(
                          "button",
                          {
                            onClick: t.action,
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
                            onMouseEnter: (n) => {
                              n.currentTarget.style.background = e.headerBg;
                            },
                            onMouseLeave: (n) => {
                              n.currentTarget.style.background = "transparent";
                            },
                            children: [
                              t.icon,
                              t.label
                            ]
                          },
                          t.label
                        ))
                      }
                    )
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: "flex", children: [
            /* @__PURE__ */ s("div", { style: { width: vr, flexShrink: 0, borderRight: `1px solid ${e.border}` }, children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "flex items-center px-4",
                  style: { height: br, background: e.headerBg, borderBottom: `1px solid ${e.border}` },
                  children: [
                    /* @__PURE__ */ o("div", { className: "flex-1 text-[11px] font-bold uppercase tracking-wider", style: { color: e.textSecondary }, children: y("charts.gantt.stepName", "NOME DA ETAPA") }),
                    /* @__PURE__ */ o("div", { className: "w-[80px] text-[11px] font-bold uppercase tracking-wider text-center", style: { color: e.textSecondary }, children: y("charts.gantt.start", "INÍCIO") }),
                    /* @__PURE__ */ o("div", { className: "w-[80px] text-[11px] font-bold uppercase tracking-wider text-center", style: { color: e.textSecondary }, children: y("charts.gantt.end", "FIM") })
                  ]
                }
              ),
              /* @__PURE__ */ o(
                "div",
                {
                  ref: ee,
                  onScroll: _t,
                  className: "overflow-y-auto overflow-x-hidden",
                  style: { maxHeight: wt, scrollbarWidth: "none" },
                  children: te.map((t) => {
                    if (t.kind === "projectHeader")
                      return /* @__PURE__ */ o(
                        "div",
                        {
                          className: "flex items-center px-4 cursor-pointer select-none",
                          style: { height: M, borderBottom: `1.5px solid ${e.group}44`, background: `${e.group}0E` },
                          onClick: () => Vt(t.projectId),
                          children: /* @__PURE__ */ s("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                            t.collapsed ? /* @__PURE__ */ o($t, { size: 15, style: { color: e.group, flexShrink: 0 } }) : /* @__PURE__ */ o(Ze, { size: 15, style: { color: e.group, flexShrink: 0 } }),
                            /* @__PURE__ */ o("span", { className: "text-[12px] font-bold uppercase tracking-widest truncate", style: { color: e.group }, children: t.projectTitle })
                          ] })
                        },
                        `ph-${t.projectId}`
                      );
                    if (t.kind === "group") {
                      const I = t.projectId ? `${t.projectId}-${t.groupType}` : t.groupType;
                      return /* @__PURE__ */ o(
                        "div",
                        {
                          className: "flex items-center px-4 cursor-pointer select-none",
                          style: { height: M, borderBottom: `1px solid ${e.border}`, background: e.headerBg },
                          onClick: () => Ut(I),
                          children: /* @__PURE__ */ s("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                            t.collapsed ? /* @__PURE__ */ o($t, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ o(Ze, { size: 14, style: { color: e.textSecondary, flexShrink: 0 } }),
                            /* @__PURE__ */ o("span", { className: "text-[11px] font-bold uppercase tracking-wider", style: { color: e.textTitle }, children: t.label }),
                            /* @__PURE__ */ o("span", { className: "text-[10px] font-semibold px-1.5 py-0.5 rounded-full", style: { background: "rgba(0,0,0,0.06)", color: e.textSecondary }, children: t.count })
                          ] })
                        },
                        `g-${I}`
                      );
                    }
                    const n = t.task, r = _ === n.id, i = ce === n.id, p = n.originalType !== "step", l = qe.has(n.id), a = Ge.has(n.id), h = _ !== null && n.id !== _ && !$e.has(n.id), L = _ !== null && $e.has(n.id), j = l ? "#FFF5F5" : r ? e.groupLight : L ? `${e.groupLight}99` : i ? e.pageBg : e.surface;
                    return /* @__PURE__ */ s(
                      "div",
                      {
                        className: "flex items-center px-4 cursor-pointer transition-colors duration-150",
                        style: {
                          height: M,
                          borderBottom: `1px solid ${e.borderLight}`,
                          background: j,
                          borderLeft: r ? `3px solid ${e.group}` : L ? `3px solid ${e.group}66` : a ? `3px solid ${e.today}` : void 0,
                          opacity: h ? 0.3 : 1,
                          transition: "opacity 0.18s, background 0.15s"
                        },
                        onClick: () => jt((I) => I === n.id ? null : n.id),
                        onDoubleClick: () => bt(n),
                        onMouseEnter: () => Re(n.id),
                        onMouseLeave: () => Re(null),
                        children: [
                          /* @__PURE__ */ s("div", { className: "flex-1 flex items-center gap-2 min-w-0 pr-2", children: [
                            n.originalType === "step" && /* @__PURE__ */ o("div", { className: "flex-shrink-0 rounded", style: { width: 14, height: 14, background: U[n.colorIdx ?? 0].bar, border: `1.5px solid ${U[n.colorIdx ?? 0].barBorder}` } }),
                            n.originalType === "milestone" && /* @__PURE__ */ o("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 22, height: 22, background: `${e.milestoneRing}30`, border: `1.5px solid ${e.milestoneRing}` }, children: /* @__PURE__ */ o(ke, { size: 11, style: { color: e.milestone } }) }),
                            n.originalType === "event" && /* @__PURE__ */ o("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 22, height: 22, background: `${e.event}18`, border: `1.5px solid ${e.event}55` }, children: /* @__PURE__ */ o(ve, { size: 11, style: { color: e.event } }) }),
                            n.originalType === "note" && /* @__PURE__ */ o("div", { className: "flex-shrink-0", style: { width: 16, height: 20, background: n.noteColor || e.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible" }, children: /* @__PURE__ */ o("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } }) }),
                            /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col min-w-0", children: [
                              /* @__PURE__ */ o(
                                "span",
                                {
                                  className: "text-[13px] truncate font-medium leading-tight",
                                  style: { color: r ? e.group : l ? e.today : e.textPrimary },
                                  children: n.name
                                }
                              ),
                              n.originalType === "note" && n.noteProjectTitle && /* @__PURE__ */ o("span", { className: "text-[10px] truncate", style: { color: e.textSecondary, marginTop: 1 }, children: n.noteProjectTitle })
                            ] }),
                            n.originalType === "note" && (n.filesCount || 0) > 0 && /* @__PURE__ */ s("span", { className: "flex-shrink-0 flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full", style: { color: e.textSecondary, background: e.headerBg, border: `1px solid ${e.borderLight}` }, children: [
                              /* @__PURE__ */ o(Qe, { size: 9 }),
                              n.filesCount
                            ] }),
                            l && /* @__PURE__ */ o(It, { size: 12, className: "flex-shrink-0", style: { color: e.today } })
                          ] }),
                          /* @__PURE__ */ o("div", { className: "w-[80px] text-[11px] font-medium text-center tabular-nums", style: { color: l ? e.today : e.textMuted }, children: K(vt(n)) }),
                          /* @__PURE__ */ o("div", { className: "w-[80px] text-[11px] font-medium text-center tabular-nums", style: { color: l ? e.today : e.textMuted }, children: p ? "—" : K(kt(n)) })
                        ]
                      },
                      n.id
                    );
                  })
                }
              )
            ] }),
            /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
              /* @__PURE__ */ o(
                "div",
                {
                  ref: ae,
                  className: "overflow-hidden flex-shrink-0",
                  style: { borderBottom: `1px solid ${e.border}` },
                  children: /* @__PURE__ */ s("div", { style: { width: c.totalWidth }, children: [
                    /* @__PURE__ */ o("div", { className: "flex", style: { height: ot, background: e.headerBg }, children: c.months.map((t, n) => /* @__PURE__ */ o(
                      "div",
                      {
                        className: "flex items-center justify-center text-[10px] font-bold uppercase tracking-wider select-none",
                        style: {
                          width: t.days * c.dayWidth,
                          color: e.textTitle,
                          borderRight: `1px solid ${e.border}`,
                          letterSpacing: "0.1em"
                        },
                        children: t.label
                      },
                      n
                    )) }),
                    /* @__PURE__ */ o("div", { className: "flex", style: { height: ot, background: e.surface }, children: Array.from({ length: c.totalDays }, (t, n) => {
                      const r = O(c.start, n), i = r.getDate(), p = Dt(r), l = r.toDateString() === (/* @__PURE__ */ new Date()).toDateString();
                      return /* @__PURE__ */ o(
                        "div",
                        {
                          className: "flex items-center justify-center text-[9px] select-none",
                          style: {
                            width: c.dayWidth,
                            color: l ? e.today : p ? e.textMuted : e.textSecondary,
                            fontWeight: l ? 800 : i === 1 ? 700 : 500,
                            background: l ? e.todayBg : p ? e.weekendBg : void 0,
                            borderRight: i === 1 ? `1px solid ${e.border}` : void 0,
                            borderRadius: l ? 4 : void 0
                          },
                          children: H === "month" ? i : ""
                        },
                        n
                      );
                    }) })
                  ] })
                }
              ),
              /* @__PURE__ */ o(
                "div",
                {
                  ref: ie,
                  onScroll: Pt,
                  onMouseDown: Yt,
                  onDoubleClick: yt,
                  onContextMenu: yt,
                  onWheel: Ot,
                  className: "flex-1 overflow-auto",
                  style: {
                    maxHeight: wt,
                    scrollbarWidth: "thin",
                    scrollbarColor: `${e.border} transparent`,
                    cursor: ye ? "grabbing" : "grab"
                  },
                  children: /* @__PURE__ */ s("div", { style: { width: c.totalWidth, height: me, position: "relative" }, children: [
                    /* @__PURE__ */ s(
                      "svg",
                      {
                        width: c.totalWidth,
                        height: me,
                        style: { position: "absolute", inset: 0, pointerEvents: "none" },
                        children: [
                          te.map((t, n) => t.kind === "projectHeader" ? /* @__PURE__ */ o("rect", { x: 0, y: n * M, width: c.totalWidth, height: M, fill: `${e.group}0E` }, `rpb${n}`) : t.kind === "group" ? /* @__PURE__ */ o("rect", { x: 0, y: n * M, width: c.totalWidth, height: M, fill: e.headerBg }, `rb${n}`) : null),
                          Array.from({ length: c.totalDays }, (t, n) => {
                            const r = O(c.start, n);
                            return Dt(r) ? /* @__PURE__ */ o("rect", { x: n * c.dayWidth, y: 0, width: c.dayWidth, height: me, fill: "rgba(0,0,0,0.025)" }, `we${n}`) : null;
                          }),
                          H === "month" ? Array.from({ length: c.totalDays }, (t, n) => {
                            const i = O(c.start, n).getDate() === 1;
                            return /* @__PURE__ */ o(
                              "line",
                              {
                                x1: n * c.dayWidth,
                                y1: 0,
                                x2: n * c.dayWidth,
                                y2: me,
                                stroke: i ? e.border : e.borderLight,
                                strokeWidth: i ? 1 : 0.5
                              },
                              `vl${n}`
                            );
                          }) : c.months.map((t, n) => /* @__PURE__ */ o(
                            "line",
                            {
                              x1: t.startDay * c.dayWidth,
                              y1: 0,
                              x2: t.startDay * c.dayWidth,
                              y2: me,
                              stroke: e.border,
                              strokeWidth: 1
                            },
                            `ml${n}`
                          )),
                          te.map((t, n) => /* @__PURE__ */ o(
                            "line",
                            {
                              x1: 0,
                              y1: (n + 1) * M,
                              x2: c.totalWidth,
                              y2: (n + 1) * M,
                              stroke: e.borderLight,
                              strokeWidth: 0.5
                            },
                            `hl${n}`
                          )),
                          Kt && /* @__PURE__ */ s(Ce, { children: [
                            /* @__PURE__ */ o("line", { x1: De, y1: 0, x2: De, y2: me, stroke: e.today, strokeWidth: 2, strokeDasharray: "6 3", opacity: 0.6 }),
                            /* @__PURE__ */ o("rect", { x: De - 22, y: 0, width: 44, height: 18, rx: 9, fill: e.today }),
                            /* @__PURE__ */ o("text", { x: De, y: 13, textAnchor: "middle", fill: "#fff", fontSize: 9, fontWeight: 700, fontFamily: "Inter, sans-serif", children: "HOJE" })
                          ] })
                        ]
                      }
                    ),
                    te.map((t, n) => {
                      if (t.kind === "group" || t.kind === "projectHeader")
                        return null;
                      const r = t.task, i = vt(r), p = kt(r), l = G(i, c), a = n * M, h = ce === r.id, L = w?.task.id === r.id, j = v?.task.id === r.id, I = Ge.has(r.id), B = qe.has(r.id), re = V?.hoverTargetId === r.id, St = (h || re) && !!P, Ae = _ !== null && r.id !== _ && !$e.has(r.id), Fe = _ !== null && (r.id === _ || $e.has(r.id)), Pe = {
                        onMouseDown: ($) => Xt($, r),
                        onClick: ($) => qt($, r),
                        onDoubleClick: () => bt(r),
                        onMouseEnter: () => Re(r.id),
                        onMouseLeave: () => {
                          Re(null), st(null);
                        },
                        onMouseMove: ($) => {
                          !w && !v && st({ task: r, x: $.clientX, y: $.clientY });
                        }
                      };
                      if (r.originalType === "step") {
                        const $ = U[r.colorIdx ?? 0], oe = Math.max(G(p, c) - l, H === "month" ? c.dayWidth : 6), ne = oe * (r.progress / 100), _e = a + (M - Z) / 2, Ee = !!(r.previsionStart && r.previsionEnd), Ye = Ee ? G(r.previsionStart, c) : 0, Jt = Ee ? Math.max(G(r.previsionEnd, c) - Ye, H === "month" ? c.dayWidth : 6) : 0, Zt = _e + Z + 3;
                        return /* @__PURE__ */ s(Qt.Fragment, { children: [
                          Ee && /* @__PURE__ */ o(
                            "div",
                            {
                              title: `Previsto: ${K(r.previsionStart)} → ${K(r.previsionEnd)}`,
                              style: {
                                position: "absolute",
                                left: Ye,
                                top: Zt,
                                width: Jt,
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
                          /* @__PURE__ */ s(
                            "div",
                            {
                              "data-task-id": r.id,
                              ...Pe,
                              style: {
                                position: "absolute",
                                left: l,
                                top: _e,
                                width: oe,
                                height: Z,
                                borderRadius: Z / 2,
                                background: B ? "linear-gradient(135deg, #fdd, #fee)" : $.bar,
                                border: I ? `2px solid ${e.today}` : B ? `1.5px solid ${e.today}88` : `1.5px solid ${$.barBorder}`,
                                cursor: L || j ? "grabbing" : "grab",
                                zIndex: h || re ? 20 : 10,
                                boxShadow: re ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : I ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : Fe && !h ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : h ? `0 3px 12px ${$.progress}22` : "none",
                                transform: h ? "scaleY(1.06)" : "scaleY(1)",
                                opacity: Ae ? 0.15 : 1,
                                transition: L || j ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                                overflow: "visible"
                              },
                              children: [
                                /* @__PURE__ */ s("div", { style: {
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  width: oe,
                                  height: "100%",
                                  borderRadius: Z / 2,
                                  overflow: "hidden",
                                  pointerEvents: "none"
                                }, children: [
                                  /* @__PURE__ */ o("div", { style: {
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: ne,
                                    height: "100%",
                                    background: B ? `linear-gradient(90deg, ${e.today}cc, ${e.today}88)` : `linear-gradient(90deg, ${$.progress}, ${$.progress}cc)`,
                                    borderRadius: `${Z / 2}px 0 0 ${Z / 2}px`,
                                    transition: L || j ? "none" : "width 0.3s"
                                  } }),
                                  oe > 50 && /* @__PURE__ */ s("span", { style: {
                                    position: "absolute",
                                    inset: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 10,
                                    fontWeight: 700,
                                    letterSpacing: "0.05em",
                                    color: r.progress > 50 ? "#fff" : B ? e.today : $.progress,
                                    zIndex: 1,
                                    pointerEvents: "none"
                                  }, children: [
                                    Math.round(r.progress),
                                    "%"
                                  ] })
                                ] }),
                                /* @__PURE__ */ o(
                                  "div",
                                  {
                                    onMouseDown: (be) => mt(be, r, "left"),
                                    style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${Z / 2}px 0 0 ${Z / 2}px` }
                                  }
                                ),
                                /* @__PURE__ */ o(
                                  "div",
                                  {
                                    onMouseDown: (be) => mt(be, r, "right"),
                                    style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${Z / 2}px ${Z / 2}px 0` }
                                  }
                                ),
                                St && /* @__PURE__ */ s(Ce, { children: [
                                  /* @__PURE__ */ o(
                                    "div",
                                    {
                                      "data-task-id": r.id,
                                      onMouseDown: (be) => We(be, r, "left"),
                                      style: {
                                        position: "absolute",
                                        left: -7,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        width: 14,
                                        height: 14,
                                        borderRadius: "50%",
                                        background: e.group,
                                        border: "2.5px solid #fff",
                                        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                                        cursor: "crosshair",
                                        zIndex: 30,
                                        transition: "transform 0.1s"
                                      }
                                    }
                                  ),
                                  /* @__PURE__ */ o(
                                    "div",
                                    {
                                      "data-task-id": r.id,
                                      onMouseDown: (be) => We(be, r, "right"),
                                      style: {
                                        position: "absolute",
                                        right: -7,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        width: 14,
                                        height: 14,
                                        borderRadius: "50%",
                                        background: e.group,
                                        border: "2.5px solid #fff",
                                        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                                        cursor: "crosshair",
                                        zIndex: 30,
                                        transition: "transform 0.1s"
                                      }
                                    }
                                  )
                                ] })
                              ]
                            },
                            r.id
                          )
                        ] }, r.id);
                      }
                      if (r.originalType === "milestone") {
                        const $ = G(i, c), oe = a + (M - Me) / 2;
                        return /* @__PURE__ */ s(
                          "div",
                          {
                            "data-task-id": r.id,
                            ...Pe,
                            style: {
                              position: "absolute",
                              left: $ - 6,
                              top: oe,
                              height: Me,
                              minWidth: nt,
                              borderRadius: Me / 2,
                              background: I ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #e8f5ee, #f0f8f4)",
                              border: re ? `2px solid ${e.group}` : I ? `2px solid ${e.today}` : `1.5px solid ${e.milestoneRing}`,
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              paddingLeft: 4,
                              paddingRight: 12,
                              cursor: L ? "grabbing" : "grab",
                              zIndex: h || re ? 20 : 10,
                              boxShadow: re ? `0 0 0 2px ${e.group}, 0 4px 16px ${e.group}33` : I ? `0 0 0 1px ${e.today}44, 0 3px 12px ${e.today}22` : Fe && !h ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : h ? `0 3px 12px ${e.milestone}22` : "0 1px 3px rgba(0,0,0,0.06)",
                              opacity: Ae ? 0.15 : 1,
                              transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                              transform: h ? "translateY(-1px)" : "none",
                              whiteSpace: "nowrap",
                              overflow: "visible"
                            },
                            children: [
                              /* @__PURE__ */ o("div", { style: {
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                background: I ? e.today : e.milestone,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0
                              }, children: /* @__PURE__ */ o(ke, { size: 11, color: "#fff", strokeWidth: 2.5 }) }),
                              /* @__PURE__ */ o("span", { style: { fontSize: 11, fontWeight: 600, color: I ? e.today : e.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: r.name }),
                              r.progress >= 100 && /* @__PURE__ */ o("span", { style: { fontSize: 9, fontWeight: 700, color: "#fff", background: e.milestoneRing, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
                              St && /* @__PURE__ */ s(Ce, { children: [
                                /* @__PURE__ */ o(
                                  "div",
                                  {
                                    "data-task-id": r.id,
                                    onMouseDown: (ne) => We(ne, r, "left"),
                                    style: {
                                      position: "absolute",
                                      left: -7,
                                      top: "50%",
                                      transform: "translateY(-50%)",
                                      width: 14,
                                      height: 14,
                                      borderRadius: "50%",
                                      background: e.group,
                                      border: "2.5px solid #fff",
                                      boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                                      cursor: "crosshair",
                                      zIndex: 30
                                    }
                                  }
                                ),
                                /* @__PURE__ */ o(
                                  "div",
                                  {
                                    "data-task-id": r.id,
                                    onMouseDown: (ne) => We(ne, r, "right"),
                                    style: {
                                      position: "absolute",
                                      right: -7,
                                      top: "50%",
                                      transform: "translateY(-50%)",
                                      width: 14,
                                      height: 14,
                                      borderRadius: "50%",
                                      background: e.group,
                                      border: "2.5px solid #fff",
                                      boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                                      cursor: "crosshair",
                                      zIndex: 30
                                    }
                                  }
                                )
                              ] })
                            ]
                          },
                          r.id
                        );
                      }
                      if (r.originalType === "event") {
                        const $ = G(i, c), oe = a + (M - Me) / 2;
                        return /* @__PURE__ */ s(
                          "div",
                          {
                            ...Pe,
                            style: {
                              position: "absolute",
                              left: $ - 6,
                              top: oe,
                              height: Me,
                              minWidth: nt,
                              borderRadius: Me / 2,
                              background: "linear-gradient(135deg, #fef3e2, #fef8f0)",
                              border: `1.5px solid ${e.event}66`,
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              paddingLeft: 4,
                              paddingRight: 12,
                              cursor: L ? "grabbing" : "grab",
                              zIndex: h ? 20 : 10,
                              boxShadow: Fe && !h ? `0 0 0 2px ${e.group}99, 0 3px 14px ${e.group}33` : h ? `0 3px 12px ${e.event}22` : "0 1px 3px rgba(0,0,0,0.06)",
                              opacity: Ae ? 0.15 : 1,
                              transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                              transform: h ? "translateY(-1px)" : "none",
                              whiteSpace: "nowrap"
                            },
                            children: [
                              /* @__PURE__ */ o("div", { style: {
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                background: e.event,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0
                              }, children: /* @__PURE__ */ o(ve, { size: 11, color: "#fff", strokeWidth: 2.5 }) }),
                              /* @__PURE__ */ o("span", { style: { fontSize: 11, fontWeight: 600, color: e.event, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: r.name })
                            ]
                          },
                          r.id
                        );
                      }
                      if (r.originalType === "note") {
                        const $ = G(i, c), oe = r.noteColor || e.note, ne = "#2a2a2a", _e = (r.filesCount || 0) > 0, Ee = wr + 10, Ye = a + (M - Ee) / 2;
                        return /* @__PURE__ */ s(
                          "div",
                          {
                            ...Pe,
                            style: {
                              position: "absolute",
                              left: $ - 4,
                              top: Ye,
                              width: kr,
                              height: Ee,
                              borderRadius: 3,
                              background: oe,
                              boxShadow: Fe && !h ? `0 0 0 2px ${e.group}99, 2px 4px 12px rgba(0,0,0,0.18)` : h ? "3px 4px 14px rgba(0,0,0,0.2), inset 0 -1px 0 rgba(0,0,0,0.06)" : "1px 2px 5px rgba(0,0,0,0.13), inset 0 -1px 0 rgba(0,0,0,0.04)",
                              cursor: L ? "grabbing" : "grab",
                              zIndex: h ? 20 : 10,
                              opacity: Ae ? 0.15 : 1,
                              transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                              transform: h ? "translateY(-2px) rotate(-0.8deg)" : "none",
                              display: "flex",
                              flexDirection: "column",
                              padding: "6px 8px 5px",
                              overflow: "hidden"
                            },
                            children: [
                              /* @__PURE__ */ o("div", { style: {
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
                              /* @__PURE__ */ o("span", { style: {
                                fontSize: 10,
                                fontWeight: 700,
                                color: ne,
                                lineHeight: "13px",
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                textOverflow: "ellipsis",
                                wordBreak: "break-word",
                                flex: 1
                              }, children: r.name }),
                              r.noteProjectTitle && /* @__PURE__ */ o("span", { style: {
                                fontSize: 7.5,
                                fontWeight: 600,
                                color: ne,
                                opacity: 0.65,
                                marginTop: 2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                              }, children: r.noteProjectTitle }),
                              /* @__PURE__ */ s("div", { style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: 3,
                                gap: 4
                              }, children: [
                                /* @__PURE__ */ o("span", { style: { fontSize: 8, color: ne, opacity: 0.55, fontWeight: 500 }, children: K(i) }),
                                _e && /* @__PURE__ */ s("span", { style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                  fontSize: 8,
                                  color: ne,
                                  opacity: 0.6,
                                  fontWeight: 600,
                                  background: "rgba(0,0,0,0.06)",
                                  borderRadius: 3,
                                  padding: "1px 3px"
                                }, children: [
                                  /* @__PURE__ */ o(Qe, { size: 7 }),
                                  r.filesCount
                                ] })
                              ] })
                            ]
                          },
                          r.id
                        );
                      }
                      return null;
                    }),
                    /* @__PURE__ */ o(
                      "svg",
                      {
                        width: c.totalWidth,
                        height: me,
                        style: { position: "absolute", inset: 0, pointerEvents: "none" },
                        children: Ft.map((t, n) => {
                          const r = ce === t.predId || ce === t.succId, i = !_ || t.predId === _ || t.succId === _ || $e.has(t.predId) || $e.has(t.succId), p = _ !== null && i, l = r ? e.arrowHover : p ? e.group : e.arrow;
                          return /* @__PURE__ */ s("g", { style: { opacity: i ? p ? 1 : void 0 : 0.08, transition: "opacity 0.18s" }, children: [
                            /* @__PURE__ */ o(
                              "path",
                              {
                                d: t.path,
                                fill: "none",
                                stroke: l,
                                strokeWidth: p ? 2.5 : r ? 2 : 1.5,
                                style: { transition: "stroke 0.2s, stroke-width 0.2s" }
                              }
                            ),
                            /* @__PURE__ */ o(
                              "polygon",
                              {
                                points: `${t.headX},${t.headY} ${t.headX - 6},${t.headY - 4} ${t.headX - 6},${t.headY + 4}`,
                                fill: l,
                                style: { transition: "fill 0.2s" }
                              }
                            )
                          ] }, n);
                        })
                      }
                    ),
                    f && !w && /* @__PURE__ */ o("div", { style: { position: "fixed", left: f.x + 16, top: f.y - 10, zIndex: 9999, pointerEvents: "none" }, children: /* @__PURE__ */ s(
                      "div",
                      {
                        className: "rounded-xl px-4 py-3 min-w-[220px] max-w-[340px] backdrop-blur-sm",
                        style: { background: `${e.surface}f5`, border: `1px solid ${e.borderLight}`, boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)" },
                        children: [
                          /* @__PURE__ */ s("div", { className: "flex items-center gap-2 mb-1.5", children: [
                            Er(f.task.originalType, f.task.colorIdx),
                            /* @__PURE__ */ o("span", { className: "text-xs font-bold truncate", style: { color: e.textTitle }, children: f.task.name })
                          ] }),
                          /* @__PURE__ */ o("div", { className: "flex flex-col gap-1 text-[11px]", style: { color: e.textSecondary }, children: f.task.originalType === "step" ? /* @__PURE__ */ s(Ce, { children: [
                            f.task.previsionStart && f.task.previsionEnd && /* @__PURE__ */ s("div", { style: { background: `${e.headerBg}`, borderRadius: 6, padding: "4px 6px", marginBottom: 2 }, children: [
                              /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mb-1", children: [
                                /* @__PURE__ */ o("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${e.textSecondary}44`, border: `1.5px solid ${e.textSecondary}66` } }),
                                /* @__PURE__ */ o("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: e.textSecondary }, children: "Previsto" })
                              ] }),
                              /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                                /* @__PURE__ */ o("span", { children: "Início:" }),
                                /* @__PURE__ */ o("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: K(f.task.previsionStart) })
                              ] }),
                              /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                                /* @__PURE__ */ o("span", { children: "Fim:" }),
                                /* @__PURE__ */ o("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: K(f.task.previsionEnd) })
                              ] }),
                              /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                                /* @__PURE__ */ o("span", { children: "Duração:" }),
                                /* @__PURE__ */ s("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: [
                                  ge(f.task.previsionStart, f.task.previsionEnd),
                                  "d"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ s("div", { style: { background: f.task.hasActualDates ? `${e.groupLight}22` : "transparent", borderRadius: 6, padding: "4px 6px" }, children: [
                              /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mb-1", children: [
                                /* @__PURE__ */ o("div", { style: { width: 20, height: 4, borderRadius: 2, background: U[f.task.colorIdx ?? 0].progress } }),
                                /* @__PURE__ */ o("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: f.task.hasActualDates ? e.group : e.textSecondary }, children: f.task.hasActualDates ? "Real" : "Previsto (em uso)" })
                              ] }),
                              /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                                /* @__PURE__ */ o("span", { children: "Início:" }),
                                /* @__PURE__ */ o("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: K(f.task.start) })
                              ] }),
                              /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                                /* @__PURE__ */ o("span", { children: "Fim:" }),
                                /* @__PURE__ */ o("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: K(f.task.end) })
                              ] }),
                              /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                                /* @__PURE__ */ o("span", { children: "Duração:" }),
                                /* @__PURE__ */ s("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: [
                                  ge(f.task.start, f.task.end),
                                  "d"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ s("div", { className: "flex justify-between gap-4 pt-1 mt-1", style: { borderTop: `1px solid ${e.borderLight}` }, children: [
                              /* @__PURE__ */ s("span", { children: [
                                y("charts.gantt.progress", "Progresso"),
                                ":"
                              ] }),
                              /* @__PURE__ */ s("span", { className: "font-bold", style: { color: e.group }, children: [
                                Math.round(f.task.progress),
                                "%"
                              ] })
                            ] })
                          ] }) : f.task.originalType === "note" ? /* @__PURE__ */ s(Ce, { children: [
                            f.task.noteProjectTitle && /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 mb-1", children: [
                              /* @__PURE__ */ o("div", { style: { width: 8, height: 8, borderRadius: 2, background: f.task.noteColor || e.note, flexShrink: 0 } }),
                              /* @__PURE__ */ o("span", { className: "text-[11px] font-semibold truncate", style: { color: e.textPrimary }, children: f.task.noteProjectTitle })
                            ] }),
                            /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                              /* @__PURE__ */ o("span", { children: "Data:" }),
                              /* @__PURE__ */ o("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: K(f.task.start) })
                            ] }),
                            (f.task.filesCount || 0) > 0 && /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                              /* @__PURE__ */ o("span", { children: "Anexos:" }),
                              /* @__PURE__ */ s("span", { className: "font-semibold flex items-center gap-1", style: { color: e.textPrimary }, children: [
                                /* @__PURE__ */ o(Qe, { size: 10 }),
                                f.task.filesCount
                              ] })
                            ] })
                          ] }) : /* @__PURE__ */ s("div", { className: "flex justify-between gap-4", children: [
                            /* @__PURE__ */ s("span", { children: [
                              y("charts.gantt.start", "Início"),
                              ":"
                            ] }),
                            /* @__PURE__ */ o("span", { className: "font-semibold tabular-nums", style: { color: e.textPrimary }, children: K(f.task.start) })
                          ] }) })
                        ]
                      }
                    ) })
                  ] })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s(
            "div",
            {
              className: "flex flex-wrap items-center gap-2.5 px-6 py-3.5",
              style: { borderTop: `1px solid ${e.border}`, background: e.headerBg },
              children: [
                /* @__PURE__ */ o("span", { className: "text-[10px] font-bold uppercase tracking-widest mr-1", style: { color: e.textSecondary }, children: y("charts.gantt.legend", "Legenda") }),
                /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: e.textPrimary, background: e.surface, border: `1px solid ${e.borderLight}` }, children: [
                  /* @__PURE__ */ o("div", { className: "flex gap-0.5", children: U.slice(0, 5).map((t, n) => /* @__PURE__ */ o("div", { className: "w-2 h-3 rounded-sm", style: { background: t.bar, border: `1px solid ${t.barBorder}` } }, n)) }),
                  /* @__PURE__ */ o("span", { children: y("charts.gantt.taskLabel", "Etapas") })
                ] }),
                /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: e.textPrimary, background: e.surface, border: `1px solid ${e.borderLight}` }, children: [
                  /* @__PURE__ */ o("div", { className: "flex items-center justify-center rounded-full", style: { width: 14, height: 14, background: e.milestone }, children: /* @__PURE__ */ o(ke, { size: 8, color: "#fff" }) }),
                  /* @__PURE__ */ o("span", { children: y("charts.gantt.milestoneLabel", "Marco (Entrega)") })
                ] }),
                /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: e.textPrimary, background: e.surface, border: `1px solid ${e.borderLight}` }, children: [
                  /* @__PURE__ */ o("div", { className: "flex items-center justify-center rounded-full", style: { width: 14, height: 14, background: e.event }, children: /* @__PURE__ */ o(ve, { size: 8, color: "#fff" }) }),
                  /* @__PURE__ */ o("span", { children: y("charts.gantt.eventLabel", "Evento Pontual") })
                ] }),
                /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: e.textPrimary, background: e.surface, border: `1px solid ${e.borderLight}` }, children: [
                  /* @__PURE__ */ o("div", { style: { width: 12, height: 14, background: e.note, borderRadius: 2, boxShadow: "1px 1px 2px rgba(0,0,0,0.1)" } }),
                  /* @__PURE__ */ o("span", { children: y("charts.gantt.noteLabel", "Nota") })
                ] }),
                /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: e.textPrimary, background: e.surface, border: `1px solid ${e.borderLight}` }, children: [
                  /* @__PURE__ */ s("svg", { width: "18", height: "10", viewBox: "0 0 18 10", children: [
                    /* @__PURE__ */ o("path", { d: "M0,5 L10,5", stroke: e.arrow, strokeWidth: "1.5" }),
                    /* @__PURE__ */ o("polygon", { points: "10,5 14,2.5 14,7.5", fill: e.arrow })
                  ] }),
                  /* @__PURE__ */ o("span", { children: y("charts.gantt.dependencyLabel", "Dependência") })
                ] }),
                /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: e.textPrimary, background: e.surface, border: `1px solid ${e.borderLight}` }, children: [
                  /* @__PURE__ */ o("div", { className: "w-0.5 h-3.5 rounded-full", style: { background: e.today } }),
                  /* @__PURE__ */ o("span", { children: y("charts.gantt.todayLabel", "Hoje") })
                ] }),
                /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: e.textPrimary, background: e.surface, border: `1px solid ${e.borderLight}` }, children: [
                  /* @__PURE__ */ o("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${e.textSecondary}44`, border: `1.5px solid ${e.textSecondary}66` } }),
                  /* @__PURE__ */ o("span", { children: y("charts.gantt.baselineLabel", "Previsto") })
                ] }),
                Ge.size > 0 && /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: e.today, background: e.surface, border: `1px solid ${e.today}44` }, children: [
                  /* @__PURE__ */ o("div", { className: "w-3 h-2.5 rounded-sm", style: { border: `2px solid ${e.today}`, background: "transparent" } }),
                  /* @__PURE__ */ o("span", { children: "Caminho Crítico" })
                ] }),
                qe.size > 0 && /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: e.today, background: "#FFF5F5", border: `1px solid ${e.today}44` }, children: [
                  /* @__PURE__ */ o(It, { size: 11 }),
                  /* @__PURE__ */ o("span", { children: "Atrasado" })
                ] })
              ]
            }
          )
        ]
      }
    ),
    fe.task && fe.isOpen && (() => {
      const t = fe.task, n = (g || []).filter(
        (a) => a.predecessorId === t.id || a.successorId === t.id
      ), r = {
        FS: "Início após Fim",
        SS: "Inícios simultâneos",
        FF: "Fins simultâneos",
        SF: "Fim após Início"
      }, i = n.length > 0 ? 300 : 220, p = Math.min(fe.position.x, window.innerWidth - i - 16), l = fe.position.y + 8;
      return /* @__PURE__ */ s(
        "div",
        {
          "data-popup": "gantt-action",
          style: {
            position: "fixed",
            left: p,
            top: l,
            zIndex: 9999,
            background: "#fff",
            borderRadius: 4,
            boxShadow: "0 12px 40px rgba(0,0,0,0.14), 0 3px 10px rgba(0,0,0,0.07)",
            border: `1.5px solid ${e.borderLight}`,
            width: i,
            overflow: "hidden"
          },
          onMouseDown: (a) => a.stopPropagation(),
          children: [
            /* @__PURE__ */ o("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${e.borderLight}` }, children: /* @__PURE__ */ o(
              "p",
              {
                style: { fontSize: 13, fontWeight: 700, color: e.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
                title: t.name,
                children: t.name
              }
            ) }),
            /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" }, children: [
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    X?.(Je(t)), Te();
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
                    color: e.textPrimary,
                    transition: "background 0.12s"
                  },
                  onMouseEnter: (a) => {
                    a.currentTarget.style.background = e.groupLight;
                  },
                  onMouseLeave: (a) => {
                    a.currentTarget.style.background = "transparent";
                  },
                  children: [
                    /* @__PURE__ */ o(ar, { size: 15 }),
                    /* @__PURE__ */ o("span", { children: y("projects.stepAction.viewDetails", "Ver detalhes") })
                  ]
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    R?.(Je(t)), Te();
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
                    color: e.textPrimary,
                    transition: "background 0.12s"
                  },
                  onMouseEnter: (a) => {
                    a.currentTarget.style.background = e.groupLight;
                  },
                  onMouseLeave: (a) => {
                    a.currentTarget.style.background = "transparent";
                  },
                  children: [
                    /* @__PURE__ */ o(gr, { size: 15 }),
                    /* @__PURE__ */ o("span", { children: y("projects.stepAction.edit", "Editar") })
                  ]
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    Q?.(t.id), Te();
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
                  onMouseEnter: (a) => {
                    a.currentTarget.style.background = "#fef2f2";
                  },
                  onMouseLeave: (a) => {
                    a.currentTarget.style.background = "transparent";
                  },
                  children: [
                    /* @__PURE__ */ o(yr, { size: 15 }),
                    /* @__PURE__ */ o("span", { children: y("projects.stepAction.delete", "Excluir") })
                  ]
                }
              )
            ] }),
            n.length > 0 && /* @__PURE__ */ s("div", { style: { borderTop: `1px solid ${e.borderLight}`, padding: "10px 14px 12px" }, children: [
              /* @__PURE__ */ s("div", { style: { fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }, children: [
                "Relações (",
                n.length,
                ")"
              ] }),
              /* @__PURE__ */ o("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: n.map((a) => {
                const h = a.predecessorId === t.id, L = h ? a.successorName : a.predecessorName, j = At === a.id;
                return /* @__PURE__ */ s("div", { style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 8px",
                  borderRadius: 8,
                  background: "#f8fafb",
                  border: `1px solid ${e.borderLight}`
                }, children: [
                  /* @__PURE__ */ s("div", { style: { flex: 1, minWidth: 0 }, children: [
                    /* @__PURE__ */ s("div", { style: { fontSize: 10, fontWeight: 700, color: e.group, marginBottom: 2 }, children: [
                      /* @__PURE__ */ o("span", { style: { background: `${e.group}15`, borderRadius: 4, padding: "1px 5px" }, children: a.type }),
                      " ",
                      /* @__PURE__ */ o("span", { style: { color: e.textSecondary, fontWeight: 500 }, children: h ? "→ " : "← " }),
                      /* @__PURE__ */ o("span", { style: { color: e.textMuted, fontWeight: 400, fontSize: 9 }, children: r[a.type] ?? a.type })
                    ] }),
                    /* @__PURE__ */ o(
                      "div",
                      {
                        style: { fontSize: 11, color: e.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
                        title: L,
                        children: L || (h ? a.successorId : a.predecessorId)
                      }
                    ),
                    a.lag > 0 && /* @__PURE__ */ s("div", { style: { fontSize: 9, color: e.textMuted, marginTop: 1 }, children: [
                      "Lag: ",
                      a.lag,
                      "d"
                    ] })
                  ] }),
                  se && /* @__PURE__ */ o(
                    "button",
                    {
                      disabled: !!j,
                      onClick: async () => {
                        pt(a.id);
                        try {
                          await se(a.id);
                        } finally {
                          pt(null);
                        }
                      },
                      style: {
                        flexShrink: 0,
                        padding: "4px 6px",
                        borderRadius: 6,
                        border: "none",
                        background: j ? "#fee2e2" : "transparent",
                        cursor: j ? "wait" : "pointer",
                        color: "#ef4444",
                        fontSize: 14,
                        opacity: j ? 0.5 : 1,
                        transition: "background 0.12s"
                      },
                      onMouseEnter: (I) => {
                        j || (I.currentTarget.style.background = "#fef2f2");
                      },
                      onMouseLeave: (I) => {
                        j || (I.currentTarget.style.background = "transparent");
                      },
                      title: "Excluir relação",
                      children: j ? "⟳" : "🗑"
                    }
                  )
                ] }, a.id);
              }) })
            ] }),
            typeof window < "u" && null
          ]
        }
      );
    })(),
    z && /* @__PURE__ */ s(
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
          border: `1.5px solid ${e.borderLight}`,
          width: 200,
          overflow: "hidden"
        },
        onClick: (t) => t.stopPropagation(),
        children: [
          /* @__PURE__ */ s("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${e.borderLight}`, background: e.headerBg }, children: [
            /* @__PURE__ */ s("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: e.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" }, children: [
              "Adicionar em ",
              K(z.date)
            ] }),
            z.projectId && W && /* @__PURE__ */ o("p", { style: { margin: "2px 0 0", fontSize: 9, color: e.textSecondary, opacity: 0.75, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: A.find((t) => t.projectId === z.projectId)?.projectTitle || z.projectId })
          ] }),
          /* @__PURE__ */ o("div", { style: { padding: "5px 5px" }, children: [
            {
              label: "Etapa",
              icon: /* @__PURE__ */ o("div", { style: { width: 14, height: 14, borderRadius: 3, background: U[0].bar, border: `1.5px solid ${U[0].barBorder}`, flexShrink: 0 } }),
              action: () => {
                N?.(z.date, z.projectId), pe(null);
              }
            },
            {
              label: "Marco",
              icon: /* @__PURE__ */ o("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${e.milestoneRing}30`, border: `1.5px solid ${e.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(ke, { size: 11, style: { color: e.milestone } }) }),
              action: () => {
                le?.(z.date, z.projectId), pe(null);
              }
            },
            {
              label: "Evento",
              icon: /* @__PURE__ */ o("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${e.event}18`, border: `1.5px solid ${e.event}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(ve, { size: 11, style: { color: e.event } }) }),
              action: () => {
                d?.(z.date, z.projectId), pe(null);
              }
            },
            {
              label: "Nota",
              icon: /* @__PURE__ */ o("div", { style: { width: 16, height: 20, background: e.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ o("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } }) }),
              action: () => {
                q?.(z.date, z.projectId), pe(null);
              }
            }
          ].map((t) => /* @__PURE__ */ s(
            "button",
            {
              onClick: t.action,
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
                opacity: 1,
                textAlign: "left",
                transition: "background 0.12s"
              },
              onMouseEnter: (n) => {
                n.currentTarget.style.background = e.headerBg;
              },
              onMouseLeave: (n) => {
                n.currentTarget.style.background = "transparent";
              },
              children: [
                t.icon,
                t.label
              ]
            },
            t.label
          )) })
        ]
      }
    ),
    V && /* @__PURE__ */ s(
      "svg",
      {
        style: {
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 99999
        },
        children: [
          /* @__PURE__ */ o("defs", { children: /* @__PURE__ */ o("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ o("path", { d: "M0,0 L0,6 L6,3 z", fill: e.group }) }) }),
          /* @__PURE__ */ o(
            "line",
            {
              x1: V.fromScreenX,
              y1: V.fromScreenY,
              x2: V.currentScreenX,
              y2: V.currentScreenY,
              stroke: e.group,
              strokeWidth: 2.5,
              strokeDasharray: "8 5",
              markerEnd: "url(#connect-arrow)",
              opacity: 0.85,
              style: {
                animation: "gantt-dash 0.5s linear infinite"
              }
            }
          ),
          /* @__PURE__ */ o("style", { children: "@keyframes gantt-dash { to { stroke-dashoffset: -13; } }" })
        ]
      }
    ),
    xe && /* @__PURE__ */ o(
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
        onClick: () => ze(null),
        children: /* @__PURE__ */ s(
          "div",
          {
            style: {
              background: "#fff",
              borderRadius: 20,
              padding: "32px 36px",
              width: 420,
              boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 6px 24px rgba(0,0,0,0.08)"
            },
            onClick: (t) => t.stopPropagation(),
            children: [
              /* @__PURE__ */ s("div", { style: { marginBottom: 20 }, children: [
                /* @__PURE__ */ o("h3", { style: { fontSize: 18, fontWeight: 700, color: e.textTitle, marginBottom: 4 }, children: "Tipo de Relação" }),
                /* @__PURE__ */ o("p", { style: { fontSize: 13, color: e.textSecondary }, children: "Escolha como as duas tarefas se relacionam" })
              ] }),
              /* @__PURE__ */ o("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }, children: [
                { type: "FS", label: "Início após Fim", desc: "B começa quando A termina", icon: "A ──► B" },
                { type: "SS", label: "Inícios simultâneos", desc: "A e B começam juntos", icon: "A═╗ B" },
                { type: "FF", label: "Fins simultâneos", desc: "A e B terminam juntos", icon: "A ╚═B" },
                { type: "SF", label: "Fim após Início", desc: "B termina quando A começa", icon: "B ──► A end" }
              ].map((t) => /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => lt(t.type),
                  style: {
                    border: Le === t.type ? `2px solid ${e.group}` : `1.5px solid ${e.borderLight}`,
                    borderRadius: 12,
                    padding: "12px 14px",
                    textAlign: "left",
                    cursor: "pointer",
                    background: Le === t.type ? `${e.group}0d` : "#fafafa",
                    transition: "all 0.15s"
                  },
                  children: [
                    /* @__PURE__ */ o("div", { style: {
                      fontSize: 11,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      color: e.group,
                      marginBottom: 4,
                      background: Le === t.type ? `${e.group}20` : `${e.group}0d`,
                      borderRadius: 6,
                      padding: "2px 6px",
                      display: "inline-block"
                    }, children: t.type }),
                    /* @__PURE__ */ o("div", { style: { fontSize: 13, fontWeight: 600, color: e.textTitle, marginBottom: 2 }, children: t.label }),
                    /* @__PURE__ */ o("div", { style: { fontSize: 11, color: e.textSecondary }, children: t.desc })
                  ]
                },
                t.type
              )) }),
              /* @__PURE__ */ s("div", { style: { marginBottom: 24 }, children: [
                /* @__PURE__ */ o("label", { style: { fontSize: 12, fontWeight: 600, color: e.textTitle, display: "block", marginBottom: 6 }, children: "Lag (dias de folga)" }),
                /* @__PURE__ */ o(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    value: Ve,
                    onChange: (t) => dt(parseInt(t.target.value) || 0),
                    style: {
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: 8,
                      border: `1.5px solid ${e.borderLight}`,
                      fontSize: 14,
                      color: e.textPrimary,
                      outline: "none",
                      boxSizing: "border-box"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ s("div", { style: { display: "flex", gap: 10 }, children: [
                /* @__PURE__ */ o(
                  "button",
                  {
                    onClick: () => ze(null),
                    style: {
                      flex: 1,
                      padding: "10px 0",
                      borderRadius: 10,
                      border: `1.5px solid ${e.borderLight}`,
                      background: "#fff",
                      fontSize: 14,
                      fontWeight: 600,
                      color: e.textSecondary,
                      cursor: "pointer",
                      transition: "all 0.15s"
                    },
                    children: "Cancelar"
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: Ht,
                    disabled: we,
                    style: {
                      flex: 2,
                      padding: "10px 0",
                      borderRadius: 10,
                      border: "none",
                      background: we ? `${e.group}88` : `linear-gradient(135deg, ${e.group}, ${e.group}cc)`,
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#fff",
                      cursor: we ? "wait" : "pointer",
                      boxShadow: we ? "none" : `0 4px 16px ${e.group}33`,
                      transition: "all 0.15s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8
                    },
                    children: [
                      we && /* @__PURE__ */ o("span", { style: { fontSize: 12 }, children: "⟳" }),
                      we ? "Criando..." : "Criar Relação"
                    ]
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function Er(u, x) {
  const m = (T, g) => /* @__PURE__ */ o("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 18, height: 18, background: T }, children: g });
  switch (u) {
    case "step":
      return /* @__PURE__ */ o("div", { className: "w-3 h-3 rounded flex-shrink-0", style: { background: U[x ?? 0].bar, border: `1.5px solid ${U[x ?? 0].barBorder}` } });
    case "milestone":
      return m(e.milestone, /* @__PURE__ */ o(ke, { size: 10, color: "#fff" }));
    case "event":
      return m(e.event, /* @__PURE__ */ o(ve, { size: 10, color: "#fff" }));
    case "note":
      return m(e.note, /* @__PURE__ */ o(Ct, { size: 10, color: "#fff" }));
  }
}
export {
  Lr as ProjectGantt
};
