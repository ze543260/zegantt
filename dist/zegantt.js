import e, { useState as $, useRef as $e, useMemo as de, useCallback as z, useEffect as pe } from "react";
import { Loader2 as Gt, Plus as Je, Flag as ye, Clock as be, MessageCircle as Tt, ChevronDown as Ke, ChevronRight as Et, Paperclip as qe, AlertTriangle as vt, Eye as Vt, Edit2 as Jt, Trash2 as Kt } from "lucide-react";
const F = {
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
  surface: F.white,
  // subtle alternating row
  headerBg: "#F2F5F3",
  // soft green-tinted header
  textTitle: F.dark_green,
  // #1A3C30
  textPrimary: F.dark_gray,
  // #4F4F4F
  textSecondary: F.gray,
  // #7B7B7B
  textMuted: F.light_gray,
  // #D9D9D9
  group: F.dark_green,
  // #1A3C30
  groupLight: F.water_green,
  // #A0D8A8 (bar border)
  milestone: F.dark_green,
  // #1A3C30
  milestoneRing: F.light_green,
  // #A0D8A8
  event: F.orange,
  // yellow translucent
  note: F.yellow,
  // #FFBB1C
  border: F.light_gray,
  // #D9D9D9
  borderLight: "#ECECEC",
  weekendBg: "#F4F6F5",
  today: F.red,
  // #FF0000
  todayBg: "#FF000008",
  // today column tint
  arrow: F.gray,
  // #7B7B7B
  arrowHover: F.dark_green
  // #1A3C30
}, S = 50, Qe = 32, qt = Qe * 2, Zt = 460, K = 26, De = 28, et = 120, Qt = 90, er = 44, tr = 40, rr = 3.5, H = [
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
], kt = {
  step: "Etapas",
  milestone: "Marcos",
  event: "Eventos",
  note: "Notas"
}, $t = 864e5, P = (u, I) => new Date(u.getTime() + I * $t), ue = (u, I) => Math.round((I.getTime() - u.getTime()) / $t), wt = (u) => u.getDay() === 0 || u.getDay() === 6, St = (u) => new Date(u.getFullYear(), u.getMonth(), 1), Ze = (u) => new Date(u.getFullYear(), u.getMonth() + 1, 0), J = (u) => `${String(u.getDate()).padStart(2, "0")}/${String(u.getMonth() + 1).padStart(2, "0")}/${u.getFullYear()}`, It = {
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
function or(u, I) {
  const v = I === "month" ? tr : rr;
  if (u.length === 0) {
    const M = /* @__PURE__ */ new Date(), w = St(M), X = Ze(M), L = ue(w, X) + 1;
    return {
      start: w,
      end: X,
      totalDays: L,
      dayWidth: v,
      totalWidth: L * v,
      months: [{ date: w, label: `${It[w.getMonth()]} DE ${w.getFullYear()}`, startDay: 0, days: L }]
    };
  }
  let Y = new Date(u[0].start), x = new Date(u[0].end);
  u.forEach((M) => {
    M.start < Y && (Y = new Date(M.start)), M.end > x && (x = new Date(M.end));
  });
  const D = St(P(Y, -14)), k = Ze(P(x, 14)), N = ue(D, k) + 1, O = [];
  let h = new Date(D);
  for (; h <= k; ) {
    const M = Ze(h), w = M > k ? k : M, X = ue(D, h), L = ue(h, w) + 1;
    O.push({
      date: new Date(h),
      label: `${It[h.getMonth()]} DE ${h.getFullYear()}`,
      startDay: X,
      days: L
    }), h = new Date(h.getFullYear(), h.getMonth() + 1, 1);
  }
  return { start: D, end: k, totalDays: N, dayWidth: v, totalWidth: N * v, months: O };
}
function G(u, I) {
  return ue(I.start, u) * I.dayWidth;
}
function nr(u, I, v, Y) {
  const x = /* @__PURE__ */ new Map();
  return u.forEach((D) => x.set(D.id, D)), I.map((D) => {
    const k = x.get(D.predecessorId), N = x.get(D.successorId);
    if (!k || !N) return null;
    const O = Y.get(k.id), h = Y.get(N.id);
    if (O == null || h == null) return null;
    const M = k.originalType !== "step", w = N.originalType !== "step", X = M ? G(k.start, v) + et : G(k.end, v), L = O * S + S / 2, q = w ? G(N.start, v) - 10 : G(N.start, v), j = h * S + S / 2, oe = 14, se = Math.max(X + oe, q - oe), i = L === j ? `M${X},${L} L${q - 6},${j}` : `M${X},${L} L${se},${L} L${se},${j} L${q - 6},${j}`;
    return { predId: k.id, succId: N.id, path: i, headX: q - 6, headY: j };
  }).filter(Boolean);
}
function ar(u, I) {
  if (u.length === 0 || I.length === 0) return /* @__PURE__ */ new Set();
  const v = /* @__PURE__ */ new Map();
  u.forEach((i) => v.set(i.id, i));
  const Y = new Set(u.map((i) => i.id)), x = I.filter((i) => Y.has(i.predecessorId) && Y.has(i.successorId));
  if (x.length === 0) return /* @__PURE__ */ new Set();
  const D = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  x.forEach((i) => {
    D.has(i.predecessorId) || D.set(i.predecessorId, []), D.get(i.predecessorId).push(i.successorId), k.has(i.successorId) || k.set(i.successorId, []), k.get(i.successorId).push(i.predecessorId);
  });
  const N = (i) => Math.max(1, ue(i.start, i.end)), O = /* @__PURE__ */ new Set(), h = [];
  function M(i) {
    O.has(i) || (O.add(i), (D.get(i) || []).forEach(M), h.unshift(i));
  }
  u.forEach((i) => M(i.id));
  const w = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
  for (const i of h) {
    const V = v.get(i), m = k.get(i) || [];
    let _ = 0;
    for (const ie of m) _ = Math.max(_, X.get(ie) || 0);
    const le = m.length > 0 ? _ : 0;
    w.set(i, le), X.set(i, le + N(V));
  }
  let L = 0;
  X.forEach((i) => {
    i > L && (L = i);
  });
  const q = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
  for (let i = h.length - 1; i >= 0; i--) {
    const V = h[i], m = v.get(V), _ = D.get(V) || [];
    let le = L;
    for (const ie of _) le = Math.min(le, q.get(ie) ?? L);
    j.set(V, _.length > 0 ? le : L), q.set(V, (j.get(V) || 0) - N(m));
  }
  const oe = /* @__PURE__ */ new Set();
  x.forEach((i) => {
    oe.add(i.predecessorId), oe.add(i.successorId);
  });
  const se = /* @__PURE__ */ new Set();
  for (const i of h) {
    if (!oe.has(i)) continue;
    const V = (q.get(i) || 0) - (w.get(i) || 0);
    Math.abs(V) < 0.5 && se.add(i);
  }
  return se;
}
function cr({
  steps: u,
  milestones: I,
  events: v,
  notes: Y,
  dependencies: x,
  loading: D,
  projectName: k,
  translations: N,
  groupByProject: O,
  onTaskChange: h,
  onTaskClick: M,
  onAddNewStage: w,
  onViewStage: X,
  onEditStage: L,
  onDeleteStage: q,
  onCreateDependency: j,
  onDeleteDependency: oe,
  onAddMilestone: se,
  onAddEvent: i,
  onAddNote: V
}) {
  const m = (r, n) => typeof N == "function" ? N(r, n) : N && typeof N == "object" ? N[r] || n || r : n || r, [_, le] = $("month"), [ie, Me] = $(null), [A, Dt] = $(null), [g, tt] = $(null), [ge, rt] = $({ isOpen: !1, position: { x: 0, y: 0 }, task: null }), [y, Pe] = $(null), [f, Ye] = $(null), [Le, Nt] = $(
    /* @__PURE__ */ new Set(["step", "milestone", "event", "note"])
  ), [Oe, Mt] = $(/* @__PURE__ */ new Set()), [ot, Lt] = $(/* @__PURE__ */ new Set()), [U, Xe] = $(null), [me, Re] = $(null), [Ne, nt] = $("FS"), [_e, at] = $(0), [Ee, st] = $(!1), [Rt, lt] = $(null), [C, ce] = $(null), [Ce, ve] = $(!1), it = $e(null), Z = $e(null), ne = $e(null), ae = $e(null), W = de(() => {
    const r = [];
    let n = 0;
    return u.forEach((o) => {
      const a = !!(o.startDate && o.finishDate), d = o.startDate || o.previsionStartDate, l = o.finishDate || o.previsionFinishDate;
      if (!d || !l) return;
      const s = new Date(d), p = new Date(l);
      if (isNaN(s.getTime()) || isNaN(p.getTime())) return;
      p <= s && p.setDate(p.getDate() + 1);
      let T, R;
      if (o.previsionStartDate && o.previsionFinishDate) {
        const B = new Date(o.previsionStartDate), ee = new Date(o.previsionFinishDate);
        !isNaN(B.getTime()) && !isNaN(ee.getTime()) && (T = B, R = ee <= B ? P(B, 1) : ee);
      }
      const E = x?.filter((B) => B.successorId === o.id).map((B) => B.predecessorId) || [];
      r.push({
        id: o.id,
        name: o.name,
        start: s,
        end: p,
        progress: o.conclusionPercent ? Number(o.conclusionPercent) * 100 : 0,
        originalType: "step",
        deps: E,
        colorIdx: n % H.length,
        previsionStart: T,
        previsionEnd: R,
        hasActualDates: a,
        projectId: o.projectId || void 0,
        projectTitle: o.projectTitle || void 0
      }), n++;
    }), I?.forEach((o) => {
      if (!o.date) return;
      const a = new Date(o.date);
      if (isNaN(a.getTime())) return;
      const d = x?.filter((l) => l.successorId === o.id).map((l) => l.predecessorId) || [];
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
    }), v?.forEach((o) => {
      if (!o.date) return;
      const a = new Date(o.date);
      if (isNaN(a.getTime())) return;
      const d = x?.filter((l) => l.successorId === o.id).map((l) => l.predecessorId) || [];
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
    }), Y?.forEach((o) => {
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
  }, [u, I, v, Y, x]), c = de(() => or(W, _), [W, _]), Q = de(() => {
    const r = [], n = ["step", "milestone", "event", "note"];
    if (O) {
      const o = /* @__PURE__ */ new Map();
      W.forEach((a) => {
        a.projectId && !o.has(a.projectId) && o.set(a.projectId, a.projectTitle || a.projectId);
      });
      for (const [a, d] of Array.from(o.entries())) {
        const l = ot.has(a);
        if (r.push({ kind: "projectHeader", projectId: a, projectTitle: d, collapsed: l }), !l) {
          const s = W.filter((p) => p.projectId === a);
          for (const p of n) {
            if (!Le.has(p)) continue;
            const T = s.filter((B) => B.originalType === p);
            if (T.length === 0) continue;
            const R = `${a}-${p}`, E = Oe.has(R);
            r.push({ kind: "group", groupType: p, label: kt[p], count: T.length, collapsed: E, projectId: a }), E || T.forEach((B) => r.push({ kind: "task", task: B }));
          }
        }
      }
    } else
      for (const o of n) {
        if (!Le.has(o)) continue;
        const a = W.filter((l) => l.originalType === o);
        if (a.length === 0) continue;
        const d = Oe.has(o);
        r.push({ kind: "group", groupType: o, label: kt[o], count: a.length, collapsed: d }), d || a.forEach((l) => r.push({ kind: "task", task: l }));
      }
    return r;
  }, [W, Le, Oe, ot, O]), ct = de(() => {
    const r = /* @__PURE__ */ new Map();
    return Q.forEach((n, o) => {
      n.kind === "task" && r.set(n.task.id, o);
    }), r;
  }, [Q]), Ct = de(
    () => nr(W, x || [], c, ct),
    [W, x, c, ct]
  ), He = de(() => ar(W, x || []), [W, x]), Ue = de(() => {
    const r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Date();
    return W.forEach((o) => {
      o.originalType === "step" && o.end < n && o.progress < 100 && r.add(o.id);
    }), r;
  }, [W]), ke = de(() => {
    if (!A || !x?.length) return /* @__PURE__ */ new Set();
    const r = /* @__PURE__ */ new Set(), n = [A];
    for (; n.length; ) {
      const o = n.shift();
      for (const a of x)
        a.predecessorId === o && !r.has(a.successorId) && (r.add(a.successorId), n.push(a.successorId)), a.successorId === o && !r.has(a.predecessorId) && (r.add(a.predecessorId), n.push(a.predecessorId));
    }
    return r;
  }, [A, x]), we = $e(!1), Bt = z(() => {
    if (we.current) return;
    we.current = !0;
    const r = ne.current;
    r && Z.current && (Z.current.scrollTop = r.scrollTop), r && ae.current && (ae.current.scrollLeft = r.scrollLeft), we.current = !1;
  }, []), Wt = z(() => {
    we.current || (we.current = !0, Z.current && ne.current && (ne.current.scrollTop = Z.current.scrollTop), we.current = !1);
  }, []), dt = $e(!1);
  pe(() => {
    if (dt.current || !c.totalWidth) return;
    const r = ne.current;
    if (!r) return;
    const n = G(/* @__PURE__ */ new Date(), c);
    if (n >= 0 && n <= c.totalWidth) {
      const o = n - r.clientWidth / 2;
      r.scrollLeft = Math.max(0, o), ae.current && (ae.current.scrollLeft = r.scrollLeft), dt.current = !0;
    }
  }, [c]);
  const [fe, Ge] = $(null), zt = z((r) => {
    if (f || y || r.button === 2) return;
    const n = ne.current;
    n && (r.preventDefault(), Ge({ startX: r.clientX, startY: r.clientY, scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }));
  }, [f, y]);
  pe(() => {
    if (!fe) return;
    const r = (o) => {
      const a = ne.current;
      if (!a) return;
      const d = o.clientX - fe.startX, l = o.clientY - fe.startY;
      a.scrollLeft = fe.scrollLeft - d, a.scrollTop = fe.scrollTop - l, Z.current && (Z.current.scrollTop = a.scrollTop), ae.current && (ae.current.scrollLeft = a.scrollLeft);
    }, n = () => Ge(null);
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", n), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", n);
    };
  }, [fe]);
  const jt = z((r) => {
    const n = ne.current;
    if (n)
      if (r.preventDefault(), r.shiftKey || Math.abs(r.deltaX) > Math.abs(r.deltaY)) {
        const o = r.shiftKey ? r.deltaY : r.deltaX;
        n.scrollLeft += o, ae.current && (ae.current.scrollLeft = n.scrollLeft);
      } else
        n.scrollTop += r.deltaY, Z.current && (Z.current.scrollTop = n.scrollTop);
  }, []), pt = z((r) => {
    const n = ne.current;
    if (!n) return /* @__PURE__ */ new Date();
    const o = n.getBoundingClientRect(), a = r - o.left + n.scrollLeft, d = Math.max(0, Math.floor(a / c.dayWidth));
    return P(c.start, d);
  }, [c]), ut = z((r) => {
    if (!O) return;
    const n = Z.current;
    if (!n) return;
    const o = n.getBoundingClientRect(), a = r - o.top + n.scrollTop, d = Math.max(0, Math.floor(a / S));
    for (let l = Math.min(d, Q.length - 1); l >= 0; l--) {
      const s = Q[l];
      if (s.kind === "projectHeader") return s.projectId;
      if (s.kind === "task" && s.task.projectId) return s.task.projectId;
      if (s.kind === "group" && s.projectId) return s.projectId;
    }
  }, [O, Q]), gt = z((r) => {
    r.preventDefault(), r.stopPropagation();
    const n = ut(r.clientY);
    ce({ x: r.clientX, y: r.clientY, date: pt(r.clientX), projectId: n }), Ge(null);
  }, [pt, ut]);
  pe(() => {
    if (!C) return;
    const r = (a) => {
      a.key === "Escape" && ce(null);
    }, n = (a) => {
      a.target.closest('[data-menu="chart-create"]') || ce(null);
    }, o = () => ce(null);
    return document.addEventListener("keydown", r), document.addEventListener("click", n), window.addEventListener("scroll", o, !0), () => {
      document.removeEventListener("keydown", r), document.removeEventListener("click", n), window.removeEventListener("scroll", o, !0);
    };
  }, [C]), pe(() => {
    if (!Ce) return;
    const r = (n) => {
      it.current?.contains(n.target) || ve(!1);
    };
    return document.addEventListener("click", r), () => document.removeEventListener("click", r);
  }, [Ce]);
  const At = z((r, n) => {
    r.preventDefault(), r.stopPropagation(), Pe({
      task: n,
      startMouseX: r.clientX,
      originalStart: new Date(n.start),
      originalEnd: new Date(n.end),
      offsetDays: 0
    });
  }, []);
  pe(() => {
    if (!y) return;
    const r = (o) => {
      const a = o.clientX - y.startMouseX, d = Math.round(a / c.dayWidth);
      d !== y.offsetDays && Pe((l) => l ? { ...l, offsetDays: d } : null);
    }, n = () => {
      y.offsetDays !== 0 && h && h({
        id: y.task.id,
        name: y.task.name,
        start: P(y.originalStart, y.offsetDays),
        end: P(y.originalEnd, y.offsetDays),
        type: y.task.originalType === "step" ? "task" : "milestone",
        progress: y.task.progress
      }), Pe(null);
    };
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", n), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", n);
    };
  }, [y, c.dayWidth, h]);
  const mt = z((r, n, o) => {
    r.preventDefault(), r.stopPropagation(), Ye({
      task: n,
      edge: o,
      startMouseX: r.clientX,
      originalStart: new Date(n.start),
      originalEnd: new Date(n.end),
      offsetDays: 0
    });
  }, []);
  pe(() => {
    if (!f) return;
    const r = (o) => {
      const a = o.clientX - f.startMouseX, d = Math.round(a / c.dayWidth);
      d !== f.offsetDays && Ye((l) => l ? { ...l, offsetDays: d } : null);
    }, n = () => {
      if (f.offsetDays !== 0 && h) {
        const o = f.edge === "left" ? P(f.originalStart, f.offsetDays) : f.originalStart, a = f.edge === "right" ? P(f.originalEnd, f.offsetDays) : f.originalEnd;
        a > o && h({
          id: f.task.id,
          name: f.task.name,
          start: o,
          end: a,
          type: "task",
          progress: f.task.progress
        });
      }
      Ye(null);
    };
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", n), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", n);
    };
  }, [f, c.dayWidth, h]);
  const Be = z((r, n, o) => {
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
  pe(() => {
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
      d && j && (Re({ fromTaskId: U.fromTaskId, fromEdge: U.fromEdge, toTaskId: d }), nt("FS"), at(0)), Xe(null);
    };
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", n), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", n);
    };
  }, [U?.fromTaskId, U?.fromEdge, j]);
  const Ft = z(async () => {
    if (!me || !j) return;
    const r = new Map(W.map((s) => [s.id, s])), n = r.get(me.fromTaskId), o = r.get(me.toTaskId);
    if (!n || !o) return;
    const a = (s) => s.originalType === "step" ? "STEP" : "MILESTONE", d = me.fromEdge === "right" ? n : o, l = me.fromEdge === "right" ? o : n;
    st(!0);
    try {
      await j({
        predecessorId: d.id,
        predecessorType: a(d),
        successorId: l.id,
        successorType: a(l),
        type: Ne,
        lag: _e
      }), Re(null);
    } finally {
      st(!1);
    }
  }, [me, W, j, Ne, _e]), Pt = z((r) => {
    Mt((n) => {
      const o = new Set(n);
      return o.has(r) ? o.delete(r) : o.add(r), o;
    });
  }, []), Yt = z((r) => {
    Lt((n) => {
      const o = new Set(n);
      return o.has(r) ? o.delete(r) : o.add(r), o;
    });
  }, []), Ot = z((r) => {
    Nt((n) => {
      const o = new Set(n);
      return o.has(r) ? o.delete(r) : o.add(r), o;
    });
  }, []), Ve = (r) => ({
    id: r.id,
    name: r.name,
    start: r.start,
    end: r.end,
    type: r.originalType === "step" ? "task" : "milestone",
    progress: r.progress
  }), Xt = z((r, n) => {
    rt({ isOpen: !0, position: { x: r.clientX, y: r.clientY }, task: n });
  }, []), ft = z((r) => {
    M?.(Ve(r));
  }, [M]), Se = () => {
    rt({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  };
  pe(() => {
    if (!ge.isOpen) return;
    const r = (a) => {
      a.key === "Escape" && Se();
    }, n = (a) => {
      a.target.closest('[data-popup="gantt-action"]') || Se();
    }, o = () => Se();
    return document.addEventListener("keydown", r), document.addEventListener("mousedown", n), window.addEventListener("scroll", o, !0), () => {
      document.removeEventListener("keydown", r), document.removeEventListener("mousedown", n), window.removeEventListener("scroll", o, !0);
    };
  }, [ge.isOpen]);
  const xt = (r) => y?.task.id === r.id ? P(y.originalStart, y.offsetDays) : f?.task.id === r.id && f.edge === "left" ? P(f.originalStart, f.offsetDays) : r.start, ht = (r) => y?.task.id === r.id ? P(y.originalEnd, y.offsetDays) : f?.task.id === r.id && f.edge === "right" ? P(f.originalEnd, f.offsetDays) : r.end;
  if (D)
    return /* @__PURE__ */ e.createElement("div", { className: "h-64 flex items-center justify-center rounded-xl", style: { background: t.surface, border: `1px solid ${t.border}`, boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)" } }, /* @__PURE__ */ e.createElement(Gt, { className: "animate-spin", size: 28, style: { color: t.group } }));
  if (!u?.length)
    return /* @__PURE__ */ e.createElement("div", { className: "text-center p-10 rounded-xl flex flex-col items-center gap-4", style: { background: t.surface, border: `1px solid ${t.border}`, color: t.textSecondary, boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)" } }, /* @__PURE__ */ e.createElement("span", null, m("charts.gantt.noStepsFound")), w && /* @__PURE__ */ e.createElement(
      "button",
      {
        onClick: () => w(),
        className: "flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90",
        style: { background: t.group }
      },
      /* @__PURE__ */ e.createElement(Je, { size: 16 }),
      m("charts.gantt.createFirstStep", "Criar primeira etapa")
    ));
  if (!W.length)
    return /* @__PURE__ */ e.createElement("div", { className: "text-center p-10 rounded-xl flex flex-col items-center gap-4", style: { background: t.surface, border: `1px solid ${t.border}`, color: t.textSecondary, boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)" } }, /* @__PURE__ */ e.createElement("span", null, m("charts.gantt.noStepsWithDates")), w && /* @__PURE__ */ e.createElement(
      "button",
      {
        onClick: () => w(),
        className: "flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90",
        style: { background: t.group }
      },
      /* @__PURE__ */ e.createElement(Je, { size: 16 }),
      m("charts.gantt.createFirstStep", "Criar primeira etapa")
    ));
  const Ie = G(/* @__PURE__ */ new Date(), c), _t = Ie >= 0 && Ie <= c.totalWidth, xe = Q.length * S, yt = 540;
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
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h3", { className: "text-sm font-bold uppercase tracking-widest", style: { color: t.textTitle } }, m("planning.gantt", "PLANEJAMENTO DA OBRA")), /* @__PURE__ */ e.createElement("div", { className: "h-[2.5px] w-16 mt-1.5 rounded-full", style: { background: `linear-gradient(90deg, ${t.group}, ${t.milestoneRing})` } })), k && /* @__PURE__ */ e.createElement(
        "span",
        {
          className: "text-xs font-medium px-3 py-1 rounded-full",
          style: { color: t.textSecondary, background: t.surface, border: `1px solid ${t.border}` }
        },
        k
      )),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ e.createElement("div", { className: "flex p-1 rounded-lg", style: { background: "rgba(122,122,122,0.07)", border: `1px solid ${t.borderLight}` } }, ["month", "year"].map((r) => /* @__PURE__ */ e.createElement(
        "button",
        {
          key: r,
          onClick: () => le(r),
          className: "px-5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200",
          style: _ === r ? { background: t.surface, color: t.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { color: t.textSecondary }
        },
        r === "month" ? m("charts.gantt.month", "Mês") : m("charts.gantt.year", "Ano")
      ))), /* @__PURE__ */ e.createElement("div", { className: "flex p-1 rounded-lg gap-0.5", style: { background: "rgba(122,122,122,0.07)", border: `1px solid ${t.borderLight}` } }, [
        { type: "step", label: "Etapas", icon: /* @__PURE__ */ e.createElement("div", { className: "w-2.5 h-2.5 rounded-sm", style: { background: H[0].bar, border: `1px solid ${H[0].barBorder}` } }) },
        { type: "milestone", label: "Marcos", icon: /* @__PURE__ */ e.createElement(ye, { size: 11, style: { color: t.milestone } }) },
        { type: "event", label: "Eventos", icon: /* @__PURE__ */ e.createElement(be, { size: 11, style: { color: t.event } }) },
        { type: "note", label: "Notas", icon: /* @__PURE__ */ e.createElement(Tt, { size: 11, style: { color: t.note } }) }
      ].map((r) => {
        const n = Le.has(r.type);
        return /* @__PURE__ */ e.createElement(
          "button",
          {
            key: r.type,
            onClick: () => Ot(r.type),
            className: "flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-md transition-all duration-200",
            style: n ? { background: t.surface, color: t.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { color: t.textMuted, opacity: 0.5 }
          },
          r.icon,
          /* @__PURE__ */ e.createElement("span", null, r.label)
        );
      })), w && /* @__PURE__ */ e.createElement("div", { ref: it, style: { position: "relative" } }, /* @__PURE__ */ e.createElement(
        "button",
        {
          onClick: () => ve((r) => !r),
          className: "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
          style: { background: `linear-gradient(135deg, ${t.group}, ${t.group}dd)` }
        },
        /* @__PURE__ */ e.createElement(Je, { size: 16 }),
        /* @__PURE__ */ e.createElement("span", null, m("charts.gantt.newAction", "Nova Ação")),
        /* @__PURE__ */ e.createElement(Ke, { size: 14, style: { opacity: 0.7, transform: Ce ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
      ), Ce && /* @__PURE__ */ e.createElement(
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
              w?.(), ve(!1);
            }
          },
          {
            label: "Marco",
            icon: /* @__PURE__ */ e.createElement("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.milestoneRing}30`, border: `1.5px solid ${t.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ e.createElement(ye, { size: 11, style: { color: t.milestone } })),
            action: () => {
              se?.(), ve(!1);
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
              V?.(), ve(!1);
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
    /* @__PURE__ */ e.createElement("div", { className: "flex" }, /* @__PURE__ */ e.createElement("div", { style: { width: Zt, flexShrink: 0, borderRight: `1px solid ${t.border}` } }, /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "flex items-center px-4",
        style: { height: qt, background: t.headerBg, borderBottom: `1px solid ${t.border}` }
      },
      /* @__PURE__ */ e.createElement("div", { className: "flex-1 text-[11px] font-bold uppercase tracking-wider", style: { color: t.textSecondary } }, m("charts.gantt.stepName", "NOME DA ETAPA")),
      /* @__PURE__ */ e.createElement("div", { className: "w-[80px] text-[11px] font-bold uppercase tracking-wider text-center", style: { color: t.textSecondary } }, m("charts.gantt.start", "INÍCIO")),
      /* @__PURE__ */ e.createElement("div", { className: "w-[80px] text-[11px] font-bold uppercase tracking-wider text-center", style: { color: t.textSecondary } }, m("charts.gantt.end", "FIM"))
    ), /* @__PURE__ */ e.createElement(
      "div",
      {
        ref: Z,
        onScroll: Wt,
        className: "overflow-y-auto overflow-x-hidden",
        style: { maxHeight: yt, scrollbarWidth: "none" }
      },
      Q.map((r) => {
        if (r.kind === "projectHeader")
          return /* @__PURE__ */ e.createElement(
            "div",
            {
              key: `ph-${r.projectId}`,
              className: "flex items-center px-4 cursor-pointer select-none",
              style: { height: S, borderBottom: `1.5px solid ${t.group}44`, background: `${t.group}0E` },
              onClick: () => Yt(r.projectId)
            },
            /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2 flex-1 min-w-0" }, r.collapsed ? /* @__PURE__ */ e.createElement(Et, { size: 15, style: { color: t.group, flexShrink: 0 } }) : /* @__PURE__ */ e.createElement(Ke, { size: 15, style: { color: t.group, flexShrink: 0 } }), /* @__PURE__ */ e.createElement("span", { className: "text-[12px] font-bold uppercase tracking-widest truncate", style: { color: t.group } }, r.projectTitle))
          );
        if (r.kind === "group") {
          const E = r.projectId ? `${r.projectId}-${r.groupType}` : r.groupType;
          return /* @__PURE__ */ e.createElement(
            "div",
            {
              key: `g-${E}`,
              className: "flex items-center px-4 cursor-pointer select-none",
              style: { height: S, borderBottom: `1px solid ${t.border}`, background: t.headerBg },
              onClick: () => Pt(E)
            },
            /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2 flex-1 min-w-0" }, r.collapsed ? /* @__PURE__ */ e.createElement(Et, { size: 14, style: { color: t.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ e.createElement(Ke, { size: 14, style: { color: t.textSecondary, flexShrink: 0 } }), /* @__PURE__ */ e.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider", style: { color: t.textTitle } }, r.label), /* @__PURE__ */ e.createElement("span", { className: "text-[10px] font-semibold px-1.5 py-0.5 rounded-full", style: { background: "rgba(0,0,0,0.06)", color: t.textSecondary } }, r.count))
          );
        }
        const n = r.task, o = A === n.id, a = ie === n.id, d = n.originalType !== "step", l = Ue.has(n.id), s = He.has(n.id), p = A !== null && n.id !== A && !ke.has(n.id), T = A !== null && ke.has(n.id), R = l ? "#FFF5F5" : o ? t.groupLight : T ? `${t.groupLight}99` : a ? t.pageBg : t.surface;
        return /* @__PURE__ */ e.createElement(
          "div",
          {
            key: n.id,
            className: "flex items-center px-4 cursor-pointer transition-colors duration-150",
            style: {
              height: S,
              borderBottom: `1px solid ${t.borderLight}`,
              background: R,
              borderLeft: o ? `3px solid ${t.group}` : T ? `3px solid ${t.group}66` : s ? `3px solid ${t.today}` : void 0,
              opacity: p ? 0.3 : 1,
              transition: "opacity 0.18s, background 0.15s"
            },
            onClick: () => Dt((E) => E === n.id ? null : n.id),
            onDoubleClick: () => ft(n),
            onMouseEnter: () => Me(n.id),
            onMouseLeave: () => Me(null)
          },
          /* @__PURE__ */ e.createElement("div", { className: "flex-1 flex items-center gap-2 min-w-0 pr-2" }, n.originalType === "step" && /* @__PURE__ */ e.createElement("div", { className: "flex-shrink-0 rounded", style: { width: 14, height: 14, background: H[n.colorIdx ?? 0].bar, border: `1.5px solid ${H[n.colorIdx ?? 0].barBorder}` } }), n.originalType === "milestone" && /* @__PURE__ */ e.createElement("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 22, height: 22, background: `${t.milestoneRing}30`, border: `1.5px solid ${t.milestoneRing}` } }, /* @__PURE__ */ e.createElement(ye, { size: 11, style: { color: t.milestone } })), n.originalType === "event" && /* @__PURE__ */ e.createElement("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 22, height: 22, background: `${t.event}18`, border: `1.5px solid ${t.event}55` } }, /* @__PURE__ */ e.createElement(be, { size: 11, style: { color: t.event } })), n.originalType === "note" && /* @__PURE__ */ e.createElement("div", { className: "flex-shrink-0", style: { width: 16, height: 20, background: n.noteColor || t.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible" } }, /* @__PURE__ */ e.createElement("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } })), /* @__PURE__ */ e.createElement("div", { className: "flex-1 flex flex-col min-w-0" }, /* @__PURE__ */ e.createElement(
            "span",
            {
              className: "text-[13px] truncate font-medium leading-tight",
              style: { color: o ? t.group : l ? t.today : t.textPrimary }
            },
            n.name
          ), n.originalType === "note" && n.noteProjectTitle && /* @__PURE__ */ e.createElement("span", { className: "text-[10px] truncate", style: { color: t.textSecondary, marginTop: 1 } }, n.noteProjectTitle)), n.originalType === "note" && (n.filesCount || 0) > 0 && /* @__PURE__ */ e.createElement("span", { className: "flex-shrink-0 flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full", style: { color: t.textSecondary, background: t.headerBg, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement(qe, { size: 9 }), n.filesCount), l && /* @__PURE__ */ e.createElement(vt, { size: 12, className: "flex-shrink-0", style: { color: t.today } })),
          /* @__PURE__ */ e.createElement("div", { className: "w-[80px] text-[11px] font-medium text-center tabular-nums", style: { color: l ? t.today : t.textMuted } }, J(xt(n))),
          /* @__PURE__ */ e.createElement("div", { className: "w-[80px] text-[11px] font-medium text-center tabular-nums", style: { color: l ? t.today : t.textMuted } }, d ? "—" : J(ht(n)))
        );
      })
    )), /* @__PURE__ */ e.createElement("div", { className: "flex-1 flex flex-col overflow-hidden" }, /* @__PURE__ */ e.createElement(
      "div",
      {
        ref: ae,
        className: "overflow-hidden flex-shrink-0",
        style: { borderBottom: `1px solid ${t.border}` }
      },
      /* @__PURE__ */ e.createElement("div", { style: { width: c.totalWidth } }, /* @__PURE__ */ e.createElement("div", { className: "flex", style: { height: Qe, background: t.headerBg } }, c.months.map((r, n) => /* @__PURE__ */ e.createElement(
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
      ))), /* @__PURE__ */ e.createElement("div", { className: "flex", style: { height: Qe, background: t.surface } }, Array.from({ length: c.totalDays }, (r, n) => {
        const o = P(c.start, n), a = o.getDate(), d = wt(o), l = o.toDateString() === (/* @__PURE__ */ new Date()).toDateString();
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
          _ === "month" ? a : ""
        );
      })))
    ), /* @__PURE__ */ e.createElement(
      "div",
      {
        ref: ne,
        onScroll: Bt,
        onMouseDown: zt,
        onDoubleClick: gt,
        onContextMenu: gt,
        onWheel: jt,
        className: "flex-1 overflow-auto",
        style: {
          maxHeight: yt,
          scrollbarWidth: "thin",
          scrollbarColor: `${t.border} transparent`,
          cursor: fe ? "grabbing" : "grab"
        }
      },
      /* @__PURE__ */ e.createElement("div", { style: { width: c.totalWidth, height: xe, position: "relative" } }, /* @__PURE__ */ e.createElement(
        "svg",
        {
          width: c.totalWidth,
          height: xe,
          style: { position: "absolute", inset: 0, pointerEvents: "none" }
        },
        Q.map((r, n) => r.kind === "projectHeader" ? /* @__PURE__ */ e.createElement("rect", { key: `rpb${n}`, x: 0, y: n * S, width: c.totalWidth, height: S, fill: `${t.group}0E` }) : r.kind === "group" ? /* @__PURE__ */ e.createElement("rect", { key: `rb${n}`, x: 0, y: n * S, width: c.totalWidth, height: S, fill: t.headerBg }) : null),
        Array.from({ length: c.totalDays }, (r, n) => {
          const o = P(c.start, n);
          return wt(o) ? /* @__PURE__ */ e.createElement("rect", { key: `we${n}`, x: n * c.dayWidth, y: 0, width: c.dayWidth, height: xe, fill: "rgba(0,0,0,0.025)" }) : null;
        }),
        _ === "month" ? Array.from({ length: c.totalDays }, (r, n) => {
          const a = P(c.start, n).getDate() === 1;
          return /* @__PURE__ */ e.createElement(
            "line",
            {
              key: `vl${n}`,
              x1: n * c.dayWidth,
              y1: 0,
              x2: n * c.dayWidth,
              y2: xe,
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
            y2: xe,
            stroke: t.border,
            strokeWidth: 1
          }
        )),
        Q.map((r, n) => /* @__PURE__ */ e.createElement(
          "line",
          {
            key: `hl${n}`,
            x1: 0,
            y1: (n + 1) * S,
            x2: c.totalWidth,
            y2: (n + 1) * S,
            stroke: t.borderLight,
            strokeWidth: 0.5
          }
        )),
        _t && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("line", { x1: Ie, y1: 0, x2: Ie, y2: xe, stroke: t.today, strokeWidth: 2, strokeDasharray: "6 3", opacity: 0.6 }), /* @__PURE__ */ e.createElement("rect", { x: Ie - 22, y: 0, width: 44, height: 18, rx: 9, fill: t.today }), /* @__PURE__ */ e.createElement("text", { x: Ie, y: 13, textAnchor: "middle", fill: "#fff", fontSize: 9, fontWeight: 700, fontFamily: "Inter, sans-serif" }, "HOJE"))
      ), Q.map((r, n) => {
        if (r.kind === "group" || r.kind === "projectHeader")
          return null;
        const o = r.task, a = xt(o), d = ht(o), l = G(a, c), s = n * S, p = ie === o.id, T = y?.task.id === o.id, R = f?.task.id === o.id, E = He.has(o.id), B = Ue.has(o.id), ee = U?.hoverTargetId === o.id, bt = (p || ee) && !!j, We = A !== null && o.id !== A && !ke.has(o.id), ze = A !== null && (o.id === A || ke.has(o.id)), je = {
          onMouseDown: (b) => At(b, o),
          onClick: (b) => Xt(b, o),
          onDoubleClick: () => ft(o),
          onMouseEnter: () => Me(o.id),
          onMouseLeave: () => {
            Me(null), tt(null);
          },
          onMouseMove: (b) => {
            !y && !f && tt({ task: o, x: b.clientX, y: b.clientY });
          }
        };
        if (o.originalType === "step") {
          const b = H[o.colorIdx ?? 0], te = Math.max(G(d, c) - l, _ === "month" ? c.dayWidth : 6), re = te * (o.progress / 100), Ae = s + (S - K) / 2, Te = !!(o.previsionStart && o.previsionEnd), Fe = Te ? G(o.previsionStart, c) : 0, Ht = Te ? Math.max(G(o.previsionEnd, c) - Fe, _ === "month" ? c.dayWidth : 6) : 0, Ut = Ae + K + 3;
          return /* @__PURE__ */ e.createElement(e.Fragment, { key: o.id }, Te && /* @__PURE__ */ e.createElement(
            "div",
            {
              title: `Previsto: ${J(o.previsionStart)} → ${J(o.previsionEnd)}`,
              style: {
                position: "absolute",
                left: Fe,
                top: Ut,
                width: Ht,
                height: 5,
                borderRadius: 3,
                background: `${b.progress}33`,
                border: `1.5px solid ${b.progress}66`,
                boxShadow: `inset 0 0 0 1px ${b.progress}22`,
                pointerEvents: "none",
                zIndex: 5
              }
            }
          ), /* @__PURE__ */ e.createElement(
            "div",
            {
              key: o.id,
              "data-task-id": o.id,
              ...je,
              style: {
                position: "absolute",
                left: l,
                top: Ae,
                width: te,
                height: K,
                borderRadius: K / 2,
                background: B ? "linear-gradient(135deg, #fdd, #fee)" : b.bar,
                border: E ? `2px solid ${t.today}` : B ? `1.5px solid ${t.today}88` : `1.5px solid ${b.barBorder}`,
                cursor: T || R ? "grabbing" : "grab",
                zIndex: p || ee ? 20 : 10,
                boxShadow: ee ? `0 0 0 2px ${t.group}, 0 4px 16px ${t.group}33` : E ? `0 0 0 1px ${t.today}44, 0 3px 12px ${t.today}22` : ze && !p ? `0 0 0 2px ${t.group}99, 0 3px 14px ${t.group}33` : p ? `0 3px 12px ${b.progress}22` : "none",
                transform: p ? "scaleY(1.06)" : "scaleY(1)",
                opacity: We ? 0.15 : 1,
                transition: T || R ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                overflow: "visible"
              }
            },
            /* @__PURE__ */ e.createElement("div", { style: {
              position: "absolute",
              left: 0,
              top: 0,
              width: te,
              height: "100%",
              borderRadius: K / 2,
              overflow: "hidden",
              pointerEvents: "none"
            } }, /* @__PURE__ */ e.createElement("div", { style: {
              position: "absolute",
              left: 0,
              top: 0,
              width: re,
              height: "100%",
              background: B ? `linear-gradient(90deg, ${t.today}cc, ${t.today}88)` : `linear-gradient(90deg, ${b.progress}, ${b.progress}cc)`,
              borderRadius: `${K / 2}px 0 0 ${K / 2}px`,
              transition: T || R ? "none" : "width 0.3s"
            } }), te > 50 && /* @__PURE__ */ e.createElement("span", { style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: o.progress > 50 ? "#fff" : B ? t.today : b.progress,
              zIndex: 1,
              pointerEvents: "none"
            } }, Math.round(o.progress), "%")),
            /* @__PURE__ */ e.createElement(
              "div",
              {
                onMouseDown: (he) => mt(he, o, "left"),
                style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${K / 2}px 0 0 ${K / 2}px` }
              }
            ),
            /* @__PURE__ */ e.createElement(
              "div",
              {
                onMouseDown: (he) => mt(he, o, "right"),
                style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${K / 2}px ${K / 2}px 0` }
              }
            ),
            bt && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
              "div",
              {
                "data-task-id": o.id,
                onMouseDown: (he) => Be(he, o, "left"),
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
                onMouseDown: (he) => Be(he, o, "right"),
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
          const b = G(a, c), te = s + (S - De) / 2;
          return /* @__PURE__ */ e.createElement(
            "div",
            {
              key: o.id,
              "data-task-id": o.id,
              ...je,
              style: {
                position: "absolute",
                left: b - 6,
                top: te,
                height: De,
                minWidth: et,
                borderRadius: De / 2,
                background: E ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #e8f5ee, #f0f8f4)",
                border: ee ? `2px solid ${t.group}` : E ? `2px solid ${t.today}` : `1.5px solid ${t.milestoneRing}`,
                display: "flex",
                alignItems: "center",
                gap: 6,
                paddingLeft: 4,
                paddingRight: 12,
                cursor: T ? "grabbing" : "grab",
                zIndex: p || ee ? 20 : 10,
                boxShadow: ee ? `0 0 0 2px ${t.group}, 0 4px 16px ${t.group}33` : E ? `0 0 0 1px ${t.today}44, 0 3px 12px ${t.today}22` : ze && !p ? `0 0 0 2px ${t.group}99, 0 3px 14px ${t.group}33` : p ? `0 3px 12px ${t.milestone}22` : "0 1px 3px rgba(0,0,0,0.06)",
                opacity: We ? 0.15 : 1,
                transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                transform: p ? "translateY(-1px)" : "none",
                whiteSpace: "nowrap",
                overflow: "visible"
              }
            },
            /* @__PURE__ */ e.createElement("div", { style: {
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: E ? t.today : t.milestone,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            } }, /* @__PURE__ */ e.createElement(ye, { size: 11, color: "#fff", strokeWidth: 2.5 })),
            /* @__PURE__ */ e.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: E ? t.today : t.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 } }, o.name),
            o.progress >= 100 && /* @__PURE__ */ e.createElement("span", { style: { fontSize: 9, fontWeight: 700, color: "#fff", background: t.milestoneRing, borderRadius: 6, padding: "1px 5px" } }, "✓"),
            bt && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
              "div",
              {
                "data-task-id": o.id,
                onMouseDown: (re) => Be(re, o, "left"),
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
                onMouseDown: (re) => Be(re, o, "right"),
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
          const b = G(a, c), te = s + (S - De) / 2;
          return /* @__PURE__ */ e.createElement(
            "div",
            {
              key: o.id,
              ...je,
              style: {
                position: "absolute",
                left: b - 6,
                top: te,
                height: De,
                minWidth: et,
                borderRadius: De / 2,
                background: "linear-gradient(135deg, #fef3e2, #fef8f0)",
                border: `1.5px solid ${t.event}66`,
                display: "flex",
                alignItems: "center",
                gap: 6,
                paddingLeft: 4,
                paddingRight: 12,
                cursor: T ? "grabbing" : "grab",
                zIndex: p ? 20 : 10,
                boxShadow: ze && !p ? `0 0 0 2px ${t.group}99, 0 3px 14px ${t.group}33` : p ? `0 3px 12px ${t.event}22` : "0 1px 3px rgba(0,0,0,0.06)",
                opacity: We ? 0.15 : 1,
                transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                transform: p ? "translateY(-1px)" : "none",
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
          const b = G(a, c), te = o.noteColor || t.note, re = "#2a2a2a", Ae = (o.filesCount || 0) > 0, Te = er + 10, Fe = s + (S - Te) / 2;
          return /* @__PURE__ */ e.createElement(
            "div",
            {
              key: o.id,
              ...je,
              style: {
                position: "absolute",
                left: b - 4,
                top: Fe,
                width: Qt,
                height: Te,
                borderRadius: 3,
                background: te,
                boxShadow: ze && !p ? `0 0 0 2px ${t.group}99, 2px 4px 12px rgba(0,0,0,0.18)` : p ? "3px 4px 14px rgba(0,0,0,0.2), inset 0 -1px 0 rgba(0,0,0,0.06)" : "1px 2px 5px rgba(0,0,0,0.13), inset 0 -1px 0 rgba(0,0,0,0.04)",
                cursor: T ? "grabbing" : "grab",
                zIndex: p ? 20 : 10,
                opacity: We ? 0.15 : 1,
                transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                transform: p ? "translateY(-2px) rotate(-0.8deg)" : "none",
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
              color: re,
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
              color: re,
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
            } }, /* @__PURE__ */ e.createElement("span", { style: { fontSize: 8, color: re, opacity: 0.55, fontWeight: 500 } }, J(a)), Ae && /* @__PURE__ */ e.createElement("span", { style: {
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 8,
              color: re,
              opacity: 0.6,
              fontWeight: 600,
              background: "rgba(0,0,0,0.06)",
              borderRadius: 3,
              padding: "1px 3px"
            } }, /* @__PURE__ */ e.createElement(qe, { size: 7 }), o.filesCount))
          );
        }
        return null;
      }), /* @__PURE__ */ e.createElement(
        "svg",
        {
          width: c.totalWidth,
          height: xe,
          style: { position: "absolute", inset: 0, pointerEvents: "none" }
        },
        Ct.map((r, n) => {
          const o = ie === r.predId || ie === r.succId, a = !A || r.predId === A || r.succId === A || ke.has(r.predId) || ke.has(r.succId), d = A !== null && a, l = o ? t.arrowHover : d ? t.group : t.arrow;
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
      ), g && !y && /* @__PURE__ */ e.createElement("div", { style: { position: "fixed", left: g.x + 16, top: g.y - 10, zIndex: 9999, pointerEvents: "none" } }, /* @__PURE__ */ e.createElement(
        "div",
        {
          className: "rounded-xl px-4 py-3 min-w-[220px] max-w-[340px] backdrop-blur-sm",
          style: { background: `${t.surface}f5`, border: `1px solid ${t.borderLight}`, boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)" }
        },
        /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2 mb-1.5" }, sr(g.task.originalType, g.task.colorIdx), /* @__PURE__ */ e.createElement("span", { className: "text-xs font-bold truncate", style: { color: t.textTitle } }, g.task.name)),
        /* @__PURE__ */ e.createElement("div", { className: "flex flex-col gap-1 text-[11px]", style: { color: t.textSecondary } }, g.task.originalType === "step" ? /* @__PURE__ */ e.createElement(e.Fragment, null, g.task.previsionStart && g.task.previsionEnd && /* @__PURE__ */ e.createElement("div", { style: { background: `${t.headerBg}`, borderRadius: 6, padding: "4px 6px", marginBottom: 2 } }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1 mb-1" }, /* @__PURE__ */ e.createElement("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${t.textSecondary}44`, border: `1.5px solid ${t.textSecondary}66` } }), /* @__PURE__ */ e.createElement("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: t.textSecondary } }, "Previsto")), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Início:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, J(g.task.previsionStart))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Fim:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, J(g.task.previsionEnd))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Duração:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, ue(g.task.previsionStart, g.task.previsionEnd), "d"))), /* @__PURE__ */ e.createElement("div", { style: { background: g.task.hasActualDates ? `${t.groupLight}22` : "transparent", borderRadius: 6, padding: "4px 6px" } }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1 mb-1" }, /* @__PURE__ */ e.createElement("div", { style: { width: 20, height: 4, borderRadius: 2, background: H[g.task.colorIdx ?? 0].progress } }), /* @__PURE__ */ e.createElement("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: g.task.hasActualDates ? t.group : t.textSecondary } }, g.task.hasActualDates ? "Real" : "Previsto (em uso)")), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Início:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, J(g.task.start))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Fim:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, J(g.task.end))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Duração:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, ue(g.task.start, g.task.end), "d"))), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4 pt-1 mt-1", style: { borderTop: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("span", null, m("charts.gantt.progress", "Progresso"), ":"), /* @__PURE__ */ e.createElement("span", { className: "font-bold", style: { color: t.group } }, Math.round(g.task.progress), "%"))) : g.task.originalType === "note" ? /* @__PURE__ */ e.createElement(e.Fragment, null, g.task.noteProjectTitle && /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 mb-1" }, /* @__PURE__ */ e.createElement("div", { style: { width: 8, height: 8, borderRadius: 2, background: g.task.noteColor || t.note, flexShrink: 0 } }), /* @__PURE__ */ e.createElement("span", { className: "text-[11px] font-semibold truncate", style: { color: t.textPrimary } }, g.task.noteProjectTitle)), /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Data:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, J(g.task.start))), (g.task.filesCount || 0) > 0 && /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, "Anexos:"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold flex items-center gap-1", style: { color: t.textPrimary } }, /* @__PURE__ */ e.createElement(qe, { size: 10 }), g.task.filesCount))) : /* @__PURE__ */ e.createElement("div", { className: "flex justify-between gap-4" }, /* @__PURE__ */ e.createElement("span", null, m("charts.gantt.start", "Início"), ":"), /* @__PURE__ */ e.createElement("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary } }, J(g.task.start))))
      )))
    ))),
    /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "flex flex-wrap items-center gap-2.5 px-6 py-3.5",
        style: { borderTop: `1px solid ${t.border}`, background: t.headerBg }
      },
      /* @__PURE__ */ e.createElement("span", { className: "text-[10px] font-bold uppercase tracking-widest mr-1", style: { color: t.textSecondary } }, m("charts.gantt.legend", "Legenda")),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("div", { className: "flex gap-0.5" }, H.slice(0, 5).map((r, n) => /* @__PURE__ */ e.createElement("div", { key: n, className: "w-2 h-3 rounded-sm", style: { background: r.bar, border: `1px solid ${r.barBorder}` } }))), /* @__PURE__ */ e.createElement("span", null, m("charts.gantt.taskLabel", "Etapas"))),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center justify-center rounded-full", style: { width: 14, height: 14, background: t.milestone } }, /* @__PURE__ */ e.createElement(ye, { size: 8, color: "#fff" })), /* @__PURE__ */ e.createElement("span", null, m("charts.gantt.milestoneLabel", "Marco (Entrega)"))),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center justify-center rounded-full", style: { width: 14, height: 14, background: t.event } }, /* @__PURE__ */ e.createElement(be, { size: 8, color: "#fff" })), /* @__PURE__ */ e.createElement("span", null, m("charts.gantt.eventLabel", "Evento Pontual"))),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("div", { style: { width: 12, height: 14, background: t.note, borderRadius: 2, boxShadow: "1px 1px 2px rgba(0,0,0,0.1)" } }), /* @__PURE__ */ e.createElement("span", null, m("charts.gantt.noteLabel", "Nota"))),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("svg", { width: "18", height: "10", viewBox: "0 0 18 10" }, /* @__PURE__ */ e.createElement("path", { d: "M0,5 L10,5", stroke: t.arrow, strokeWidth: "1.5" }), /* @__PURE__ */ e.createElement("polygon", { points: "10,5 14,2.5 14,7.5", fill: t.arrow })), /* @__PURE__ */ e.createElement("span", null, m("charts.gantt.dependencyLabel", "Dependência"))),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("div", { className: "w-0.5 h-3.5 rounded-full", style: { background: t.today } }), /* @__PURE__ */ e.createElement("span", null, m("charts.gantt.todayLabel", "Hoje"))),
      /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` } }, /* @__PURE__ */ e.createElement("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${t.textSecondary}44`, border: `1.5px solid ${t.textSecondary}66` } }), /* @__PURE__ */ e.createElement("span", null, m("charts.gantt.baselineLabel", "Previsto"))),
      He.size > 0 && /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.today, background: t.surface, border: `1px solid ${t.today}44` } }, /* @__PURE__ */ e.createElement("div", { className: "w-3 h-2.5 rounded-sm", style: { border: `2px solid ${t.today}`, background: "transparent" } }), /* @__PURE__ */ e.createElement("span", null, "Caminho Crítico")),
      Ue.size > 0 && /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.today, background: "#FFF5F5", border: `1px solid ${t.today}44` } }, /* @__PURE__ */ e.createElement(vt, { size: 11 }), /* @__PURE__ */ e.createElement("span", null, "Atrasado"))
    )
  ), ge.task && ge.isOpen && (() => {
    const r = ge.task, n = (x || []).filter(
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
            X?.(Ve(r)), Se();
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
        /* @__PURE__ */ e.createElement(Vt, { size: 15 }),
        /* @__PURE__ */ e.createElement("span", null, m("projects.stepAction.viewDetails", "Ver detalhes"))
      ), /* @__PURE__ */ e.createElement(
        "button",
        {
          onClick: () => {
            L?.(Ve(r)), Se();
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
        /* @__PURE__ */ e.createElement(Jt, { size: 15 }),
        /* @__PURE__ */ e.createElement("span", null, m("projects.stepAction.edit", "Editar"))
      ), /* @__PURE__ */ e.createElement(
        "button",
        {
          onClick: () => {
            q?.(r.id), Se();
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
        /* @__PURE__ */ e.createElement(Kt, { size: 15 }),
        /* @__PURE__ */ e.createElement("span", null, m("projects.stepAction.delete", "Excluir"))
      )),
      n.length > 0 && /* @__PURE__ */ e.createElement("div", { style: { borderTop: `1px solid ${t.borderLight}`, padding: "10px 14px 12px" } }, /* @__PURE__ */ e.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 } }, "Relações (", n.length, ")"), /* @__PURE__ */ e.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 5 } }, n.map((s) => {
        const p = s.predecessorId === r.id, T = p ? s.successorName : s.predecessorName, R = Rt === s.id;
        return /* @__PURE__ */ e.createElement("div", { key: s.id, style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 8px",
          borderRadius: 8,
          background: "#f8fafb",
          border: `1px solid ${t.borderLight}`
        } }, /* @__PURE__ */ e.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ e.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: t.group, marginBottom: 2 } }, /* @__PURE__ */ e.createElement("span", { style: { background: `${t.group}15`, borderRadius: 4, padding: "1px 5px" } }, s.type), " ", /* @__PURE__ */ e.createElement("span", { style: { color: t.textSecondary, fontWeight: 500 } }, p ? "→ " : "← "), /* @__PURE__ */ e.createElement("span", { style: { color: t.textMuted, fontWeight: 400, fontSize: 9 } }, o[s.type] ?? s.type)), /* @__PURE__ */ e.createElement(
          "div",
          {
            style: { fontSize: 11, color: t.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
            title: T
          },
          T || (p ? s.successorId : s.predecessorId)
        ), s.lag > 0 && /* @__PURE__ */ e.createElement("div", { style: { fontSize: 9, color: t.textMuted, marginTop: 1 } }, "Lag: ", s.lag, "d")), oe && /* @__PURE__ */ e.createElement(
          "button",
          {
            disabled: !!R,
            onClick: async () => {
              lt(s.id);
              try {
                await oe(s.id);
              } finally {
                lt(null);
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
            onMouseEnter: (E) => {
              R || (E.currentTarget.style.background = "#fef2f2");
            },
            onMouseLeave: (E) => {
              R || (E.currentTarget.style.background = "transparent");
            },
            title: "Excluir relação"
          },
          R ? "⟳" : "🗑"
        ));
      }))),
      typeof window < "u" && null
    );
  })(), C && /* @__PURE__ */ e.createElement(
    "div",
    {
      "data-menu": "chart-create",
      style: {
        position: "fixed",
        left: Math.min(C.x, window.innerWidth - 220),
        top: Math.min(C.y, window.innerHeight - 220),
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
    /* @__PURE__ */ e.createElement("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${t.borderLight}`, background: t.headerBg } }, /* @__PURE__ */ e.createElement("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" } }, "Adicionar em ", J(C.date)), C.projectId && O && /* @__PURE__ */ e.createElement("p", { style: { margin: "2px 0 0", fontSize: 9, color: t.textSecondary, opacity: 0.75, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, W.find((r) => r.projectId === C.projectId)?.projectTitle || C.projectId)),
    /* @__PURE__ */ e.createElement("div", { style: { padding: "5px 5px" } }, [
      {
        label: "Etapa",
        icon: /* @__PURE__ */ e.createElement("div", { style: { width: 14, height: 14, borderRadius: 3, background: H[0].bar, border: `1.5px solid ${H[0].barBorder}`, flexShrink: 0 } }),
        action: () => {
          w?.(C.date, C.projectId), ce(null);
        }
      },
      {
        label: "Marco",
        icon: /* @__PURE__ */ e.createElement("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.milestoneRing}30`, border: `1.5px solid ${t.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ e.createElement(ye, { size: 11, style: { color: t.milestone } })),
        action: () => {
          se?.(C.date, C.projectId), ce(null);
        }
      },
      {
        label: "Evento",
        icon: /* @__PURE__ */ e.createElement("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.event}18`, border: `1.5px solid ${t.event}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ e.createElement(be, { size: 11, style: { color: t.event } })),
        action: () => {
          i?.(C.date, C.projectId), ce(null);
        }
      },
      {
        label: "Nota",
        icon: /* @__PURE__ */ e.createElement("div", { style: { width: 16, height: 20, background: t.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible", flexShrink: 0 } }, /* @__PURE__ */ e.createElement("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } })),
        action: () => {
          V?.(C.date, C.projectId), ce(null);
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
  ), me && /* @__PURE__ */ e.createElement(
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
          onClick: () => nt(r.type),
          style: {
            border: Ne === r.type ? `2px solid ${t.group}` : `1.5px solid ${t.borderLight}`,
            borderRadius: 12,
            padding: "12px 14px",
            textAlign: "left",
            cursor: "pointer",
            background: Ne === r.type ? `${t.group}0d` : "#fafafa",
            transition: "all 0.15s"
          }
        },
        /* @__PURE__ */ e.createElement("div", { style: {
          fontSize: 11,
          fontFamily: "monospace",
          fontWeight: 700,
          color: t.group,
          marginBottom: 4,
          background: Ne === r.type ? `${t.group}20` : `${t.group}0d`,
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
          value: _e,
          onChange: (r) => at(parseInt(r.target.value) || 0),
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
          onClick: Ft,
          disabled: Ee,
          style: {
            flex: 2,
            padding: "10px 0",
            borderRadius: 10,
            border: "none",
            background: Ee ? `${t.group}88` : `linear-gradient(135deg, ${t.group}, ${t.group}cc)`,
            fontSize: 14,
            fontWeight: 700,
            color: "#fff",
            cursor: Ee ? "wait" : "pointer",
            boxShadow: Ee ? "none" : `0 4px 16px ${t.group}33`,
            transition: "all 0.15s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8
          }
        },
        Ee && /* @__PURE__ */ e.createElement("span", { style: { fontSize: 12 } }, "⟳"),
        Ee ? "Criando..." : "Criar Relação"
      ))
    )
  ));
}
function sr(u, I) {
  const v = (Y, x) => /* @__PURE__ */ e.createElement("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 18, height: 18, background: Y } }, x);
  switch (u) {
    case "step":
      return /* @__PURE__ */ e.createElement("div", { className: "w-3 h-3 rounded flex-shrink-0", style: { background: H[I ?? 0].bar, border: `1.5px solid ${H[I ?? 0].barBorder}` } });
    case "milestone":
      return v(t.milestone, /* @__PURE__ */ e.createElement(ye, { size: 10, color: "#fff" }));
    case "event":
      return v(t.event, /* @__PURE__ */ e.createElement(be, { size: 10, color: "#fff" }));
    case "note":
      return v(t.note, /* @__PURE__ */ e.createElement(Tt, { size: 10, color: "#fff" }));
  }
}
export {
  cr as ProjectGantt
};
