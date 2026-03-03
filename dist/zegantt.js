import Wt, { forwardRef as zt, createElement as pt, useState as W, useRef as Be, useMemo as be, useCallback as q, useEffect as ve } from "react";
var et = { exports: {} }, Oe = {};
var Rt;
function sr() {
  if (Rt) return Oe;
  Rt = 1;
  var d = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.fragment");
  function y(T, x, g) {
    var w = null;
    if (g !== void 0 && (w = "" + g), x.key !== void 0 && (w = "" + x.key), "key" in x) {
      g = {};
      for (var $ in x)
        $ !== "key" && (g[$] = x[$]);
    } else g = x;
    return x = g.ref, {
      $$typeof: d,
      type: T,
      key: w,
      ref: x !== void 0 ? x : null,
      props: g
    };
  }
  return Oe.Fragment = m, Oe.jsx = y, Oe.jsxs = y, Oe;
}
var Ye = {};
var Dt;
function nr() {
  return Dt || (Dt = 1, process.env.NODE_ENV !== "production" && (function() {
    function d(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === b ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case ee:
          return "Fragment";
        case c:
          return "Profiler";
        case ie:
          return "StrictMode";
        case ae:
          return "Suspense";
        case le:
          return "SuspenseList";
        case tt:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case Y:
            return "Portal";
          case v:
            return n.displayName || "Context";
          case Z:
            return (n._context.displayName || "Context") + ".Consumer";
          case U:
            var f = n.render;
            return n = n.displayName, n || (n = f.displayName || f.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case Re:
            return f = n.displayName || null, f !== null ? f : d(n.type) || "Memo";
          case A:
            f = n._payload, n = n._init;
            try {
              return d(n(f));
            } catch {
            }
        }
      return null;
    }
    function m(n) {
      return "" + n;
    }
    function y(n) {
      try {
        m(n);
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var I = f.error, L = typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return I.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), m(n);
      }
    }
    function T(n) {
      if (n === ee) return "<>";
      if (typeof n == "object" && n !== null && n.$$typeof === A)
        return "<...>";
      try {
        var f = d(n);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function x() {
      var n = De.A;
      return n === null ? null : n.getOwner();
    }
    function g() {
      return Error("react-stack-top-frame");
    }
    function w(n) {
      if (de.call(n, "key")) {
        var f = Object.getOwnPropertyDescriptor(n, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return n.key !== void 0;
    }
    function $(n, f) {
      function I() {
        Ne || (Ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(n, "key", {
        get: I,
        configurable: !0
      });
    }
    function z() {
      var n = d(this.type);
      return j[n] || (j[n] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), n = this.props.ref, n !== void 0 ? n : null;
    }
    function k(n, f, I, L, B, we) {
      var E = I.ref;
      return n = {
        $$typeof: Q,
        type: n,
        key: f,
        props: I,
        _owner: L
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(n, "ref", {
        enumerable: !1,
        get: z
      }) : Object.defineProperty(n, "ref", { enumerable: !1, value: null }), n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(n, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(n, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(n, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: we
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    }
    function R(n, f, I, L, B, we) {
      var E = f.children;
      if (E !== void 0)
        if (L)
          if (Xe(E)) {
            for (L = 0; L < E.length; L++)
              D(E[L]);
            Object.freeze && Object.freeze(E);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else D(E);
      if (de.call(f, "key")) {
        E = d(n);
        var se = Object.keys(f).filter(function(Ue) {
          return Ue !== "key";
        });
        L = 0 < se.length ? "{key: someKey, " + se.join(": ..., ") + ": ...}" : "{key: someKey}", He[E + L] || (se = 0 < se.length ? "{" + se.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          E,
          se,
          E
        ), He[E + L] = !0);
      }
      if (E = null, I !== void 0 && (y(I), E = "" + I), w(f) && (y(f.key), E = "" + f.key), "key" in f) {
        I = {};
        for (var he in f)
          he !== "key" && (I[he] = f[he]);
      } else I = f;
      return E && $(
        I,
        typeof n == "function" ? n.displayName || n.name || "Unknown" : n
      ), k(
        n,
        E,
        I,
        x(),
        B,
        we
      );
    }
    function D(n) {
      O(n) ? n._store && (n._store.validated = 1) : typeof n == "object" && n !== null && n.$$typeof === A && (n._payload.status === "fulfilled" ? O(n._payload.value) && n._payload.value._store && (n._payload.value._store.validated = 1) : n._store && (n._store.validated = 1));
    }
    function O(n) {
      return typeof n == "object" && n !== null && n.$$typeof === Q;
    }
    var N = Wt, Q = /* @__PURE__ */ Symbol.for("react.transitional.element"), Y = /* @__PURE__ */ Symbol.for("react.portal"), ee = /* @__PURE__ */ Symbol.for("react.fragment"), ie = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), v = /* @__PURE__ */ Symbol.for("react.context"), U = /* @__PURE__ */ Symbol.for("react.forward_ref"), ae = /* @__PURE__ */ Symbol.for("react.suspense"), le = /* @__PURE__ */ Symbol.for("react.suspense_list"), Re = /* @__PURE__ */ Symbol.for("react.memo"), A = /* @__PURE__ */ Symbol.for("react.lazy"), tt = /* @__PURE__ */ Symbol.for("react.activity"), b = /* @__PURE__ */ Symbol.for("react.client.reference"), De = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, Xe = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    N = {
      react_stack_bottom_frame: function(n) {
        return n();
      }
    };
    var Ne, j = {}, Me = N.react_stack_bottom_frame.bind(
      N,
      g
    )(), ke = S(T(g)), He = {};
    Ye.Fragment = ee, Ye.jsx = function(n, f, I) {
      var L = 1e4 > De.recentlyCreatedOwnerStacks++;
      return R(
        n,
        f,
        I,
        !1,
        L ? Error("react-stack-top-frame") : Me,
        L ? S(T(n)) : ke
      );
    }, Ye.jsxs = function(n, f, I) {
      var L = 1e4 > De.recentlyCreatedOwnerStacks++;
      return R(
        n,
        f,
        I,
        !0,
        L ? Error("react-stack-top-frame") : Me,
        L ? S(T(n)) : ke
      );
    };
  })()), Ye;
}
var Nt;
function ir() {
  return Nt || (Nt = 1, process.env.NODE_ENV === "production" ? et.exports = sr() : et.exports = nr()), et.exports;
}
var e = ir();
const ar = (d) => d.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Bt = (...d) => d.filter((m, y, T) => !!m && m.trim() !== "" && T.indexOf(m) === y).join(" ").trim();
var lr = {
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
const dr = zt(
  ({
    color: d = "currentColor",
    size: m = 24,
    strokeWidth: y = 2,
    absoluteStrokeWidth: T,
    className: x = "",
    children: g,
    iconNode: w,
    ...$
  }, z) => pt(
    "svg",
    {
      ref: z,
      ...lr,
      width: m,
      height: m,
      stroke: d,
      strokeWidth: T ? Number(y) * 24 / Number(m) : y,
      className: Bt("lucide", x),
      ...$
    },
    [
      ...w.map(([k, R]) => pt(k, R)),
      ...Array.isArray(g) ? g : [g]
    ]
  )
);
const oe = (d, m) => {
  const y = zt(
    ({ className: T, ...x }, g) => pt(dr, {
      ref: g,
      iconNode: m,
      className: Bt(`lucide-${ar(d)}`, T),
      ...x
    })
  );
  return y.displayName = `${d}`, y;
};
const cr = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], at = oe("ChevronDown", cr);
const pr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Mt = oe("ChevronRight", pr);
const ur = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], $e = oe("Clock", ur);
const xr = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], fr = oe("Eye", xr);
const hr = [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
], Ie = oe("Flag", hr);
const gr = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], mr = oe("LoaderCircle", gr);
const yr = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], Ft = oe("MessageCircle", yr);
const br = [
  ["path", { d: "M13.234 20.252 21 12.3", key: "1cbrk9" }],
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",
      key: "1pkts6"
    }
  ]
], lt = oe("Paperclip", br);
const vr = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], jr = oe("Pen", vr);
const kr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], dt = oe("Plus", kr);
const wr = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], Sr = oe("Trash2", wr);
const Er = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Lt = oe("TriangleAlert", Er), G = {
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
  surface: G.white,
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
}, C = 50, ut = 32, Tr = ut * 2, $r = 460, ne = 26, Fe = 28, xt = 120, Ir = 90, Rr = 44, Dr = 40, Nr = 3.5, K = [
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
], _t = {
  step: "Etapas",
  milestone: "Marcos",
  event: "Eventos",
  note: "Notas"
}, Ot = 864e5, J = (d, m) => new Date(d.getTime() + m * Ot), je = (d, m) => Math.round((m.getTime() - d.getTime()) / Ot), Ct = (d) => d.getDay() === 0 || d.getDay() === 6, At = (d) => new Date(d.getFullYear(), d.getMonth(), 1), ct = (d) => new Date(d.getFullYear(), d.getMonth() + 1, 0), re = (d) => `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`, Pt = {
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
function Mr(d, m) {
  const y = m === "month" ? Dr : Nr;
  if (d.length === 0) {
    const R = /* @__PURE__ */ new Date(), D = At(R), O = ct(R), N = je(D, O) + 1;
    return {
      start: D,
      end: O,
      totalDays: N,
      dayWidth: y,
      totalWidth: N * y,
      months: [{ date: D, label: `${Pt[D.getMonth()]} DE ${D.getFullYear()}`, startDay: 0, days: N }]
    };
  }
  let T = new Date(d[0].start), x = new Date(d[0].end);
  d.forEach((R) => {
    R.start < T && (T = new Date(R.start)), R.end > x && (x = new Date(R.end));
  });
  const g = At(J(T, -14)), w = ct(J(x, 14)), $ = je(g, w) + 1, z = [];
  let k = new Date(g);
  for (; k <= w; ) {
    const R = ct(k), D = R > w ? w : R, O = je(g, k), N = je(k, D) + 1;
    z.push({
      date: new Date(k),
      label: `${Pt[k.getMonth()]} DE ${k.getFullYear()}`,
      startDay: O,
      days: N
    }), k = new Date(k.getFullYear(), k.getMonth() + 1, 1);
  }
  return { start: g, end: w, totalDays: $, dayWidth: y, totalWidth: $ * y, months: z };
}
function te(d, m) {
  return je(m.start, d) * m.dayWidth;
}
function Lr(d, m, y, T) {
  const x = /* @__PURE__ */ new Map();
  return d.forEach((g) => x.set(g.id, g)), m.map((g) => {
    const w = x.get(g.predecessorId), $ = x.get(g.successorId);
    if (!w || !$) return null;
    const z = T.get(w.id), k = T.get($.id);
    if (z == null || k == null) return null;
    const R = w.originalType !== "step", D = $.originalType !== "step", O = R ? te(w.start, y) + xt : te(w.end, y), N = z * C + C / 2, Q = D ? te($.start, y) - 10 : te($.start, y), Y = k * C + C / 2, ee = 14, ie = Math.max(O + ee, Q - ee), c = N === Y ? `M${O},${N} L${Q - 6},${Y}` : `M${O},${N} L${ie},${N} L${ie},${Y} L${Q - 6},${Y}`;
    return { predId: w.id, succId: $.id, path: c, headX: Q - 6, headY: Y };
  }).filter(Boolean);
}
function _r(d, m) {
  if (d.length === 0 || m.length === 0) return /* @__PURE__ */ new Set();
  const y = /* @__PURE__ */ new Map();
  d.forEach((c) => y.set(c.id, c));
  const T = new Set(d.map((c) => c.id)), x = m.filter((c) => T.has(c.predecessorId) && T.has(c.successorId));
  if (x.length === 0) return /* @__PURE__ */ new Set();
  const g = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  x.forEach((c) => {
    g.has(c.predecessorId) || g.set(c.predecessorId, []), g.get(c.predecessorId).push(c.successorId), w.has(c.successorId) || w.set(c.successorId, []), w.get(c.successorId).push(c.predecessorId);
  });
  const $ = (c) => Math.max(1, je(c.start, c.end)), z = /* @__PURE__ */ new Set(), k = [];
  function R(c) {
    z.has(c) || (z.add(c), (g.get(c) || []).forEach(R), k.unshift(c));
  }
  d.forEach((c) => R(c.id));
  const D = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
  for (const c of k) {
    const Z = y.get(c), v = w.get(c) || [];
    let U = 0;
    for (const le of v) U = Math.max(U, O.get(le) || 0);
    const ae = v.length > 0 ? U : 0;
    D.set(c, ae), O.set(c, ae + $(Z));
  }
  let N = 0;
  O.forEach((c) => {
    c > N && (N = c);
  });
  const Q = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map();
  for (let c = k.length - 1; c >= 0; c--) {
    const Z = k[c], v = y.get(Z), U = g.get(Z) || [];
    let ae = N;
    for (const le of U) ae = Math.min(ae, Q.get(le) ?? N);
    Y.set(Z, U.length > 0 ? ae : N), Q.set(Z, (Y.get(Z) || 0) - $(v));
  }
  const ee = /* @__PURE__ */ new Set();
  x.forEach((c) => {
    ee.add(c.predecessorId), ee.add(c.successorId);
  });
  const ie = /* @__PURE__ */ new Set();
  for (const c of k) {
    if (!ee.has(c)) continue;
    const Z = (Q.get(c) || 0) - (D.get(c) || 0);
    Math.abs(Z) < 0.5 && ie.add(c);
  }
  return ie;
}
function Pr({
  steps: d,
  milestones: m,
  events: y,
  notes: T,
  dependencies: x,
  loading: g,
  projectName: w,
  translations: $,
  groupByProject: z,
  onTaskChange: k,
  onTaskClick: R,
  onAddNewStage: D,
  onViewStage: O,
  onEditStage: N,
  onDeleteStage: Q,
  onCreateDependency: Y,
  onDeleteDependency: ee,
  onAddMilestone: ie,
  onAddEvent: c,
  onAddNote: Z
}) {
  const v = (r, s) => typeof $ == "function" ? $(r, s) : $ && typeof $ == "object" ? $[r] || s || r : s || r, [U, ae] = W("month"), [le, Re] = W(null), [A, tt] = W(null), [b, De] = W(null), [de, Xe] = W({ isOpen: !1, position: { x: 0, y: 0 }, task: null }), [S, Ne] = W(null), [j, Me] = W(null), [ke, He] = W(
    /* @__PURE__ */ new Set(["step", "milestone", "event", "note"])
  ), [n, f] = W(/* @__PURE__ */ new Set()), [I, L] = W(/* @__PURE__ */ new Set()), [B, we] = W(null), [E, se] = W(null), [he, Ue] = W("FS"), [rt, ft] = W(0), [Le, ht] = W(!1), [Yt, gt] = W(null), [X, ye] = W(null), [Ve, _e] = W(!1), mt = Be(null), ce = Be(null), ge = Be(null), me = Be(null), V = be(() => {
    const r = [];
    let s = 0;
    return d.forEach((o) => {
      const i = !!(o.startDate && o.finishDate), u = o.startDate || o.previsionStartDate, l = o.finishDate || o.previsionFinishDate;
      if (!u || !l) return;
      const a = new Date(u), h = new Date(l);
      if (isNaN(a.getTime()) || isNaN(h.getTime())) return;
      h <= a && h.setDate(h.getDate() + 1);
      let P, F;
      if (o.previsionStartDate && o.previsionFinishDate) {
        const H = new Date(o.previsionStartDate), ue = new Date(o.previsionFinishDate);
        !isNaN(H.getTime()) && !isNaN(ue.getTime()) && (P = H, F = ue <= H ? J(H, 1) : ue);
      }
      const _ = x?.filter((H) => H.successorId === o.id).map((H) => H.predecessorId) || [];
      r.push({
        id: o.id,
        name: o.name,
        start: a,
        end: h,
        progress: o.conclusionPercent ? Number(o.conclusionPercent) * 100 : 0,
        originalType: "step",
        deps: _,
        colorIdx: s % K.length,
        previsionStart: P,
        previsionEnd: F,
        hasActualDates: i,
        projectId: o.projectId || void 0,
        projectTitle: o.projectTitle || void 0
      }), s++;
    }), m?.forEach((o) => {
      if (!o.date) return;
      const i = new Date(o.date);
      if (isNaN(i.getTime())) return;
      const u = x?.filter((l) => l.successorId === o.id).map((l) => l.predecessorId) || [];
      r.push({
        id: o.id,
        name: o.name,
        start: i,
        end: i,
        progress: o.finished ? 100 : 0,
        originalType: "milestone",
        deps: u,
        projectId: o.projectId || void 0,
        projectTitle: o.projectTitle || void 0
      });
    }), y?.forEach((o) => {
      if (!o.date) return;
      const i = new Date(o.date);
      if (isNaN(i.getTime())) return;
      const u = x?.filter((l) => l.successorId === o.id).map((l) => l.predecessorId) || [];
      r.push({
        id: o.id,
        name: o.title,
        start: i,
        end: i,
        progress: o.finished ? 100 : 0,
        originalType: "event",
        deps: u,
        projectId: o.projectId || void 0,
        projectTitle: o.projectTitle || void 0
      });
    }), T?.forEach((o) => {
      if (!o.date) return;
      const i = new Date(o.date);
      isNaN(i.getTime()) || r.push({
        id: o.id,
        name: o.title || "Nota",
        start: i,
        end: i,
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
  }, [d, m, y, T, x]), p = be(() => Mr(V, U), [V, U]), pe = be(() => {
    const r = [], s = ["step", "milestone", "event", "note"];
    if (z) {
      const o = /* @__PURE__ */ new Map();
      V.forEach((i) => {
        i.projectId && !o.has(i.projectId) && o.set(i.projectId, i.projectTitle || i.projectId);
      });
      for (const [i, u] of Array.from(o.entries())) {
        const l = I.has(i);
        if (r.push({ kind: "projectHeader", projectId: i, projectTitle: u, collapsed: l }), !l) {
          const a = V.filter((h) => h.projectId === i);
          for (const h of s) {
            if (!ke.has(h)) continue;
            const P = a.filter((H) => H.originalType === h);
            if (P.length === 0) continue;
            const F = `${i}-${h}`, _ = n.has(F);
            r.push({ kind: "group", groupType: h, label: _t[h], count: P.length, collapsed: _, projectId: i }), _ || P.forEach((H) => r.push({ kind: "task", task: H }));
          }
        }
      }
    } else
      for (const o of s) {
        if (!ke.has(o)) continue;
        const i = V.filter((l) => l.originalType === o);
        if (i.length === 0) continue;
        const u = n.has(o);
        r.push({ kind: "group", groupType: o, label: _t[o], count: i.length, collapsed: u }), u || i.forEach((l) => r.push({ kind: "task", task: l }));
      }
    return r;
  }, [V, ke, n, I, z]), yt = be(() => {
    const r = /* @__PURE__ */ new Map();
    return pe.forEach((s, o) => {
      s.kind === "task" && r.set(s.task.id, o);
    }), r;
  }, [pe]), Xt = be(
    () => Lr(V, x || [], p, yt),
    [V, x, p, yt]
  ), ot = be(() => _r(V, x || []), [V, x]), st = be(() => {
    const r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Date();
    return V.forEach((o) => {
      o.originalType === "step" && o.end < s && o.progress < 100 && r.add(o.id);
    }), r;
  }, [V]), Ce = be(() => {
    if (!A || !x?.length) return /* @__PURE__ */ new Set();
    const r = /* @__PURE__ */ new Set(), s = [A];
    for (; s.length; ) {
      const o = s.shift();
      for (const i of x)
        i.predecessorId === o && !r.has(i.successorId) && (r.add(i.successorId), s.push(i.successorId)), i.successorId === o && !r.has(i.predecessorId) && (r.add(i.predecessorId), s.push(i.predecessorId));
    }
    return r;
  }, [A, x]), Ae = Be(!1), Ht = q(() => {
    if (Ae.current) return;
    Ae.current = !0;
    const r = ge.current;
    r && ce.current && (ce.current.scrollTop = r.scrollTop), r && me.current && (me.current.scrollLeft = r.scrollLeft), Ae.current = !1;
  }, []), Ut = q(() => {
    Ae.current || (Ae.current = !0, ce.current && ge.current && (ge.current.scrollTop = ce.current.scrollTop), Ae.current = !1);
  }, []), bt = Be(!1);
  ve(() => {
    if (bt.current || !p.totalWidth) return;
    const r = ge.current;
    if (!r) return;
    const s = te(/* @__PURE__ */ new Date(), p);
    if (s >= 0 && s <= p.totalWidth) {
      const o = s - r.clientWidth / 2;
      r.scrollLeft = Math.max(0, o), me.current && (me.current.scrollLeft = r.scrollLeft), bt.current = !0;
    }
  }, [p]);
  const [Se, nt] = W(null), Vt = q((r) => {
    if (j || S || r.button === 2) return;
    const s = ge.current;
    s && (r.preventDefault(), nt({ startX: r.clientX, startY: r.clientY, scrollLeft: s.scrollLeft, scrollTop: s.scrollTop }));
  }, [j, S]);
  ve(() => {
    if (!Se) return;
    const r = (o) => {
      const i = ge.current;
      if (!i) return;
      const u = o.clientX - Se.startX, l = o.clientY - Se.startY;
      i.scrollLeft = Se.scrollLeft - u, i.scrollTop = Se.scrollTop - l, ce.current && (ce.current.scrollTop = i.scrollTop), me.current && (me.current.scrollLeft = i.scrollLeft);
    }, s = () => nt(null);
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", s), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", s);
    };
  }, [Se]);
  const qt = q((r) => {
    const s = ge.current;
    if (s)
      if (r.preventDefault(), r.shiftKey || Math.abs(r.deltaX) > Math.abs(r.deltaY)) {
        const o = r.shiftKey ? r.deltaY : r.deltaX;
        s.scrollLeft += o, me.current && (me.current.scrollLeft = s.scrollLeft);
      } else
        s.scrollTop += r.deltaY, ce.current && (ce.current.scrollTop = s.scrollTop);
  }, []), vt = q((r) => {
    const s = ge.current;
    if (!s) return /* @__PURE__ */ new Date();
    const o = s.getBoundingClientRect(), i = r - o.left + s.scrollLeft, u = Math.max(0, Math.floor(i / p.dayWidth));
    return J(p.start, u);
  }, [p]), jt = q((r) => {
    if (!z) return;
    const s = ce.current;
    if (!s) return;
    const o = s.getBoundingClientRect(), i = r - o.top + s.scrollTop, u = Math.max(0, Math.floor(i / C));
    for (let l = Math.min(u, pe.length - 1); l >= 0; l--) {
      const a = pe[l];
      if (a.kind === "projectHeader") return a.projectId;
      if (a.kind === "task" && a.task.projectId) return a.task.projectId;
      if (a.kind === "group" && a.projectId) return a.projectId;
    }
  }, [z, pe]), kt = q((r) => {
    r.preventDefault(), r.stopPropagation();
    const s = jt(r.clientY);
    ye({ x: r.clientX, y: r.clientY, date: vt(r.clientX), projectId: s }), nt(null);
  }, [vt, jt]);
  ve(() => {
    if (!X) return;
    const r = (i) => {
      i.key === "Escape" && ye(null);
    }, s = (i) => {
      i.target.closest('[data-menu="chart-create"]') || ye(null);
    }, o = () => ye(null);
    return document.addEventListener("keydown", r), document.addEventListener("click", s), window.addEventListener("scroll", o, !0), () => {
      document.removeEventListener("keydown", r), document.removeEventListener("click", s), window.removeEventListener("scroll", o, !0);
    };
  }, [X]), ve(() => {
    if (!Ve) return;
    const r = (s) => {
      mt.current?.contains(s.target) || _e(!1);
    };
    return document.addEventListener("click", r), () => document.removeEventListener("click", r);
  }, [Ve]);
  const Gt = q((r, s) => {
    r.preventDefault(), r.stopPropagation(), Ne({
      task: s,
      startMouseX: r.clientX,
      originalStart: new Date(s.start),
      originalEnd: new Date(s.end),
      offsetDays: 0
    });
  }, []);
  ve(() => {
    if (!S) return;
    const r = (o) => {
      const i = o.clientX - S.startMouseX, u = Math.round(i / p.dayWidth);
      u !== S.offsetDays && Ne((l) => l ? { ...l, offsetDays: u } : null);
    }, s = () => {
      S.offsetDays !== 0 && k && k({
        id: S.task.id,
        name: S.task.name,
        start: J(S.originalStart, S.offsetDays),
        end: J(S.originalEnd, S.offsetDays),
        type: S.task.originalType === "step" ? "task" : "milestone",
        progress: S.task.progress
      }), Ne(null);
    };
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", s), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", s);
    };
  }, [S, p.dayWidth, k]);
  const wt = q((r, s, o) => {
    r.preventDefault(), r.stopPropagation(), Me({
      task: s,
      edge: o,
      startMouseX: r.clientX,
      originalStart: new Date(s.start),
      originalEnd: new Date(s.end),
      offsetDays: 0
    });
  }, []);
  ve(() => {
    if (!j) return;
    const r = (o) => {
      const i = o.clientX - j.startMouseX, u = Math.round(i / p.dayWidth);
      u !== j.offsetDays && Me((l) => l ? { ...l, offsetDays: u } : null);
    }, s = () => {
      if (j.offsetDays !== 0 && k) {
        const o = j.edge === "left" ? J(j.originalStart, j.offsetDays) : j.originalStart, i = j.edge === "right" ? J(j.originalEnd, j.offsetDays) : j.originalEnd;
        i > o && k({
          id: j.task.id,
          name: j.task.name,
          start: o,
          end: i,
          type: "task",
          progress: j.task.progress
        });
      }
      Me(null);
    };
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", s), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", s);
    };
  }, [j, p.dayWidth, k]);
  const qe = q((r, s, o) => {
    r.preventDefault(), r.stopPropagation(), we({
      fromTaskId: s.id,
      fromEdge: o,
      fromScreenX: r.clientX,
      fromScreenY: r.clientY,
      currentScreenX: r.clientX,
      currentScreenY: r.clientY,
      hoverTargetId: null
    });
  }, []);
  ve(() => {
    if (!B) return;
    const r = (o) => {
      const i = document.elementsFromPoint(o.clientX, o.clientY);
      let u = null;
      for (const l of i) {
        const a = l.dataset?.taskId;
        if (a && a !== B.fromTaskId) {
          u = a;
          break;
        }
      }
      we((l) => l ? { ...l, currentScreenX: o.clientX, currentScreenY: o.clientY, hoverTargetId: u } : null);
    }, s = (o) => {
      const i = document.elementsFromPoint(o.clientX, o.clientY);
      let u = null;
      for (const l of i) {
        const a = l.dataset?.taskId;
        if (a && a !== B.fromTaskId) {
          u = a;
          break;
        }
      }
      u && Y && (se({ fromTaskId: B.fromTaskId, fromEdge: B.fromEdge, toTaskId: u }), Ue("FS"), ft(0)), we(null);
    };
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", s), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", s);
    };
  }, [B?.fromTaskId, B?.fromEdge, Y]);
  const Jt = q(async () => {
    if (!E || !Y) return;
    const r = new Map(V.map((a) => [a.id, a])), s = r.get(E.fromTaskId), o = r.get(E.toTaskId);
    if (!s || !o) return;
    const i = (a) => a.originalType === "step" ? "STEP" : "MILESTONE", u = E.fromEdge === "right" ? s : o, l = E.fromEdge === "right" ? o : s;
    ht(!0);
    try {
      await Y({
        predecessorId: u.id,
        predecessorType: i(u),
        successorId: l.id,
        successorType: i(l),
        type: he,
        lag: rt
      }), se(null);
    } finally {
      ht(!1);
    }
  }, [E, V, Y, he, rt]), Zt = q((r) => {
    f((s) => {
      const o = new Set(s);
      return o.has(r) ? o.delete(r) : o.add(r), o;
    });
  }, []), Kt = q((r) => {
    L((s) => {
      const o = new Set(s);
      return o.has(r) ? o.delete(r) : o.add(r), o;
    });
  }, []), Qt = q((r) => {
    He((s) => {
      const o = new Set(s);
      return o.has(r) ? o.delete(r) : o.add(r), o;
    });
  }, []), it = (r) => ({
    id: r.id,
    name: r.name,
    start: r.start,
    end: r.end,
    type: r.originalType === "step" ? "task" : "milestone",
    progress: r.progress
  }), er = q((r, s) => {
    Xe({ isOpen: !0, position: { x: r.clientX, y: r.clientY }, task: s });
  }, []), St = q((r) => {
    R?.(it(r));
  }, [R]), Pe = () => {
    Xe({ isOpen: !1, position: { x: 0, y: 0 }, task: null });
  };
  ve(() => {
    if (!de.isOpen) return;
    const r = (i) => {
      i.key === "Escape" && Pe();
    }, s = (i) => {
      i.target.closest('[data-popup="gantt-action"]') || Pe();
    }, o = () => Pe();
    return document.addEventListener("keydown", r), document.addEventListener("mousedown", s), window.addEventListener("scroll", o, !0), () => {
      document.removeEventListener("keydown", r), document.removeEventListener("mousedown", s), window.removeEventListener("scroll", o, !0);
    };
  }, [de.isOpen]);
  const Et = (r) => S?.task.id === r.id ? J(S.originalStart, S.offsetDays) : j?.task.id === r.id && j.edge === "left" ? J(j.originalStart, j.offsetDays) : r.start, Tt = (r) => S?.task.id === r.id ? J(S.originalEnd, S.offsetDays) : j?.task.id === r.id && j.edge === "right" ? J(j.originalEnd, j.offsetDays) : r.end;
  if (g)
    return /* @__PURE__ */ e.jsx("div", { className: "h-64 flex items-center justify-center rounded-xl", style: { background: t.surface, border: `1px solid ${t.border}`, boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)" }, children: /* @__PURE__ */ e.jsx(mr, { className: "animate-spin", size: 28, style: { color: t.group } }) });
  if (!d?.length)
    return /* @__PURE__ */ e.jsxs("div", { className: "text-center p-10 rounded-xl flex flex-col items-center gap-4", style: { background: t.surface, border: `1px solid ${t.border}`, color: t.textSecondary, boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)" }, children: [
      /* @__PURE__ */ e.jsx("span", { children: v("charts.gantt.noStepsFound") }),
      D && /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => D(),
          className: "flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90",
          style: { background: t.group },
          children: [
            /* @__PURE__ */ e.jsx(dt, { size: 16 }),
            v("charts.gantt.createFirstStep", "Criar primeira etapa")
          ]
        }
      )
    ] });
  if (!V.length)
    return /* @__PURE__ */ e.jsxs("div", { className: "text-center p-10 rounded-xl flex flex-col items-center gap-4", style: { background: t.surface, border: `1px solid ${t.border}`, color: t.textSecondary, boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)" }, children: [
      /* @__PURE__ */ e.jsx("span", { children: v("charts.gantt.noStepsWithDates") }),
      D && /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => D(),
          className: "flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90",
          style: { background: t.group },
          children: [
            /* @__PURE__ */ e.jsx(dt, { size: 16 }),
            v("charts.gantt.createFirstStep", "Criar primeira etapa")
          ]
        }
      )
    ] });
  const We = te(/* @__PURE__ */ new Date(), p), tr = We >= 0 && We <= p.totalWidth, Ee = pe.length * C, $t = 540;
  return /* @__PURE__ */ e.jsxs("div", { style: { fontFamily: "'Inter', sans-serif" }, children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "rounded-xl overflow-hidden",
        style: {
          background: t.surface,
          border: `1px solid ${t.border}`,
          boxShadow: "0 2px 16px 0 rgb(0 0 0 / 0.06), 0 0 0 1px rgb(0 0 0 / 0.02)"
        },
        children: [
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: "flex items-center justify-between px-6 py-5",
              style: { borderBottom: `1px solid ${t.border}`, background: `linear-gradient(180deg, ${t.headerBg} 0%, ${t.surface} 100%)` },
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-bold uppercase tracking-widest", style: { color: t.textTitle }, children: v("planning.gantt", "PLANEJAMENTO DA OBRA") }),
                    /* @__PURE__ */ e.jsx("div", { className: "h-[2.5px] w-16 mt-1.5 rounded-full", style: { background: `linear-gradient(90deg, ${t.group}, ${t.milestoneRing})` } })
                  ] }),
                  w && /* @__PURE__ */ e.jsx(
                    "span",
                    {
                      className: "text-xs font-medium px-3 py-1 rounded-full",
                      style: { color: t.textSecondary, background: t.surface, border: `1px solid ${t.border}` },
                      children: w
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "flex p-1 rounded-lg", style: { background: "rgba(122,122,122,0.07)", border: `1px solid ${t.borderLight}` }, children: ["month", "year"].map((r) => /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => ae(r),
                      className: "px-5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200",
                      style: U === r ? { background: t.surface, color: t.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { color: t.textSecondary },
                      children: r === "month" ? v("charts.gantt.month", "Mês") : v("charts.gantt.year", "Ano")
                    },
                    r
                  )) }),
                  /* @__PURE__ */ e.jsx("div", { className: "flex p-1 rounded-lg gap-0.5", style: { background: "rgba(122,122,122,0.07)", border: `1px solid ${t.borderLight}` }, children: [
                    { type: "step", label: "Etapas", icon: /* @__PURE__ */ e.jsx("div", { className: "w-2.5 h-2.5 rounded-sm", style: { background: K[0].bar, border: `1px solid ${K[0].barBorder}` } }) },
                    { type: "milestone", label: "Marcos", icon: /* @__PURE__ */ e.jsx(Ie, { size: 11, style: { color: t.milestone } }) },
                    { type: "event", label: "Eventos", icon: /* @__PURE__ */ e.jsx($e, { size: 11, style: { color: t.event } }) },
                    { type: "note", label: "Notas", icon: /* @__PURE__ */ e.jsx(Ft, { size: 11, style: { color: t.note } }) }
                  ].map((r) => {
                    const s = ke.has(r.type);
                    return /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        onClick: () => Qt(r.type),
                        className: "flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-md transition-all duration-200",
                        style: s ? { background: t.surface, color: t.group, boxShadow: "0 1px 3px rgb(0 0 0 / 0.08)" } : { color: t.textMuted, opacity: 0.5 },
                        children: [
                          r.icon,
                          /* @__PURE__ */ e.jsx("span", { children: r.label })
                        ]
                      },
                      r.type
                    );
                  }) }),
                  D && /* @__PURE__ */ e.jsxs("div", { ref: mt, style: { position: "relative" }, children: [
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        onClick: () => _e((r) => !r),
                        className: "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
                        style: { background: `linear-gradient(135deg, ${t.group}, ${t.group}dd)` },
                        children: [
                          /* @__PURE__ */ e.jsx(dt, { size: 16 }),
                          /* @__PURE__ */ e.jsx("span", { children: v("charts.gantt.newAction", "Nova Ação") }),
                          /* @__PURE__ */ e.jsx(at, { size: 14, style: { opacity: 0.7, transform: Ve ? "rotate(180deg)" : "none", transition: "transform 0.18s" } })
                        ]
                      }
                    ),
                    Ve && /* @__PURE__ */ e.jsx(
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
                        onClick: (r) => r.stopPropagation(),
                        children: [
                          {
                            label: "Etapa",
                            icon: /* @__PURE__ */ e.jsx("div", { style: { width: 14, height: 14, borderRadius: 3, background: K[0].bar, border: `1.5px solid ${K[0].barBorder}`, flexShrink: 0 } }),
                            action: () => {
                              D?.(), _e(!1);
                            }
                          },
                          {
                            label: "Marco",
                            icon: /* @__PURE__ */ e.jsx("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.milestoneRing}30`, border: `1.5px solid ${t.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ e.jsx(Ie, { size: 11, style: { color: t.milestone } }) }),
                            action: () => {
                              ie?.(), _e(!1);
                            }
                          },
                          {
                            label: "Evento",
                            icon: /* @__PURE__ */ e.jsx("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.event}18`, border: `1.5px solid ${t.event}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ e.jsx($e, { size: 11, style: { color: t.event } }) }),
                            action: () => {
                              c?.(), _e(!1);
                            }
                          },
                          {
                            label: "Nota",
                            icon: /* @__PURE__ */ e.jsx("div", { style: { width: 16, height: 20, background: t.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ e.jsx("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } }) }),
                            action: () => {
                              Z?.(), _e(!1);
                            }
                          }
                        ].map((r) => /* @__PURE__ */ e.jsxs(
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
                              color: t.textPrimary,
                              textAlign: "left",
                              transition: "background 0.12s"
                            },
                            onMouseEnter: (s) => {
                              s.currentTarget.style.background = t.headerBg;
                            },
                            onMouseLeave: (s) => {
                              s.currentTarget.style.background = "transparent";
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
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ e.jsxs("div", { style: { width: $r, flexShrink: 0, borderRight: `1px solid ${t.border}` }, children: [
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "flex items-center px-4",
                  style: { height: Tr, background: t.headerBg, borderBottom: `1px solid ${t.border}` },
                  children: [
                    /* @__PURE__ */ e.jsx("div", { className: "flex-1 text-[11px] font-bold uppercase tracking-wider", style: { color: t.textSecondary }, children: v("charts.gantt.stepName", "NOME DA ETAPA") }),
                    /* @__PURE__ */ e.jsx("div", { className: "w-[80px] text-[11px] font-bold uppercase tracking-wider text-center", style: { color: t.textSecondary }, children: v("charts.gantt.start", "INÍCIO") }),
                    /* @__PURE__ */ e.jsx("div", { className: "w-[80px] text-[11px] font-bold uppercase tracking-wider text-center", style: { color: t.textSecondary }, children: v("charts.gantt.end", "FIM") })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  ref: ce,
                  onScroll: Ut,
                  className: "overflow-y-auto overflow-x-hidden",
                  style: { maxHeight: $t, scrollbarWidth: "none" },
                  children: pe.map((r) => {
                    if (r.kind === "projectHeader")
                      return /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          className: "flex items-center px-4 cursor-pointer select-none",
                          style: { height: C, borderBottom: `1.5px solid ${t.group}44`, background: `${t.group}0E` },
                          onClick: () => Kt(r.projectId),
                          children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                            r.collapsed ? /* @__PURE__ */ e.jsx(Mt, { size: 15, style: { color: t.group, flexShrink: 0 } }) : /* @__PURE__ */ e.jsx(at, { size: 15, style: { color: t.group, flexShrink: 0 } }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[12px] font-bold uppercase tracking-widest truncate", style: { color: t.group }, children: r.projectTitle })
                          ] })
                        },
                        `ph-${r.projectId}`
                      );
                    if (r.kind === "group") {
                      const _ = r.projectId ? `${r.projectId}-${r.groupType}` : r.groupType;
                      return /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          className: "flex items-center px-4 cursor-pointer select-none",
                          style: { height: C, borderBottom: `1px solid ${t.border}`, background: t.headerBg },
                          onClick: () => Zt(_),
                          children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                            r.collapsed ? /* @__PURE__ */ e.jsx(Mt, { size: 14, style: { color: t.textSecondary, flexShrink: 0 } }) : /* @__PURE__ */ e.jsx(at, { size: 14, style: { color: t.textSecondary, flexShrink: 0 } }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[11px] font-bold uppercase tracking-wider", style: { color: t.textTitle }, children: r.label }),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-semibold px-1.5 py-0.5 rounded-full", style: { background: "rgba(0,0,0,0.06)", color: t.textSecondary }, children: r.count })
                          ] })
                        },
                        `g-${_}`
                      );
                    }
                    const s = r.task, o = A === s.id, i = le === s.id, u = s.originalType !== "step", l = st.has(s.id), a = ot.has(s.id), h = A !== null && s.id !== A && !Ce.has(s.id), P = A !== null && Ce.has(s.id), F = l ? "#FFF5F5" : o ? t.groupLight : P ? `${t.groupLight}99` : i ? t.pageBg : t.surface;
                    return /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "flex items-center px-4 cursor-pointer transition-colors duration-150",
                        style: {
                          height: C,
                          borderBottom: `1px solid ${t.borderLight}`,
                          background: F,
                          borderLeft: o ? `3px solid ${t.group}` : P ? `3px solid ${t.group}66` : a ? `3px solid ${t.today}` : void 0,
                          opacity: h ? 0.3 : 1,
                          transition: "opacity 0.18s, background 0.15s"
                        },
                        onClick: () => tt((_) => _ === s.id ? null : s.id),
                        onDoubleClick: () => St(s),
                        onMouseEnter: () => Re(s.id),
                        onMouseLeave: () => Re(null),
                        children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex items-center gap-2 min-w-0 pr-2", children: [
                            s.originalType === "step" && /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 rounded", style: { width: 14, height: 14, background: K[s.colorIdx ?? 0].bar, border: `1.5px solid ${K[s.colorIdx ?? 0].barBorder}` } }),
                            s.originalType === "milestone" && /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 22, height: 22, background: `${t.milestoneRing}30`, border: `1.5px solid ${t.milestoneRing}` }, children: /* @__PURE__ */ e.jsx(Ie, { size: 11, style: { color: t.milestone } }) }),
                            s.originalType === "event" && /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 22, height: 22, background: `${t.event}18`, border: `1.5px solid ${t.event}55` }, children: /* @__PURE__ */ e.jsx($e, { size: 11, style: { color: t.event } }) }),
                            s.originalType === "note" && /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0", style: { width: 16, height: 20, background: s.noteColor || t.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible" }, children: /* @__PURE__ */ e.jsx("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } }) }),
                            /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
                              /* @__PURE__ */ e.jsx(
                                "span",
                                {
                                  className: "text-[13px] truncate font-medium leading-tight",
                                  style: { color: o ? t.group : l ? t.today : t.textPrimary },
                                  children: s.name
                                }
                              ),
                              s.originalType === "note" && s.noteProjectTitle && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] truncate", style: { color: t.textSecondary, marginTop: 1 }, children: s.noteProjectTitle })
                            ] }),
                            s.originalType === "note" && (s.filesCount || 0) > 0 && /* @__PURE__ */ e.jsxs("span", { className: "flex-shrink-0 flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full", style: { color: t.textSecondary, background: t.headerBg, border: `1px solid ${t.borderLight}` }, children: [
                              /* @__PURE__ */ e.jsx(lt, { size: 9 }),
                              s.filesCount
                            ] }),
                            l && /* @__PURE__ */ e.jsx(Lt, { size: 12, className: "flex-shrink-0", style: { color: t.today } })
                          ] }),
                          /* @__PURE__ */ e.jsx("div", { className: "w-[80px] text-[11px] font-medium text-center tabular-nums", style: { color: l ? t.today : t.textMuted }, children: re(Et(s)) }),
                          /* @__PURE__ */ e.jsx("div", { className: "w-[80px] text-[11px] font-medium text-center tabular-nums", style: { color: l ? t.today : t.textMuted }, children: u ? "—" : re(Tt(s)) })
                        ]
                      },
                      s.id
                    );
                  })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  ref: me,
                  className: "overflow-hidden flex-shrink-0",
                  style: { borderBottom: `1px solid ${t.border}` },
                  children: /* @__PURE__ */ e.jsxs("div", { style: { width: p.totalWidth }, children: [
                    /* @__PURE__ */ e.jsx("div", { className: "flex", style: { height: ut, background: t.headerBg }, children: p.months.map((r, s) => /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "flex items-center justify-center text-[10px] font-bold uppercase tracking-wider select-none",
                        style: {
                          width: r.days * p.dayWidth,
                          color: t.textTitle,
                          borderRight: `1px solid ${t.border}`,
                          letterSpacing: "0.1em"
                        },
                        children: r.label
                      },
                      s
                    )) }),
                    /* @__PURE__ */ e.jsx("div", { className: "flex", style: { height: ut, background: t.surface }, children: Array.from({ length: p.totalDays }, (r, s) => {
                      const o = J(p.start, s), i = o.getDate(), u = Ct(o), l = o.toDateString() === (/* @__PURE__ */ new Date()).toDateString();
                      return /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          className: "flex items-center justify-center text-[9px] select-none",
                          style: {
                            width: p.dayWidth,
                            color: l ? t.today : u ? t.textMuted : t.textSecondary,
                            fontWeight: l ? 800 : i === 1 ? 700 : 500,
                            background: l ? t.todayBg : u ? t.weekendBg : void 0,
                            borderRight: i === 1 ? `1px solid ${t.border}` : void 0,
                            borderRadius: l ? 4 : void 0
                          },
                          children: U === "month" ? i : ""
                        },
                        s
                      );
                    }) })
                  ] })
                }
              ),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  ref: ge,
                  onScroll: Ht,
                  onMouseDown: Vt,
                  onDoubleClick: kt,
                  onContextMenu: kt,
                  onWheel: qt,
                  className: "flex-1 overflow-auto",
                  style: {
                    maxHeight: $t,
                    scrollbarWidth: "thin",
                    scrollbarColor: `${t.border} transparent`,
                    cursor: Se ? "grabbing" : "grab"
                  },
                  children: /* @__PURE__ */ e.jsxs("div", { style: { width: p.totalWidth, height: Ee, position: "relative" }, children: [
                    /* @__PURE__ */ e.jsxs(
                      "svg",
                      {
                        width: p.totalWidth,
                        height: Ee,
                        style: { position: "absolute", inset: 0, pointerEvents: "none" },
                        children: [
                          pe.map((r, s) => r.kind === "projectHeader" ? /* @__PURE__ */ e.jsx("rect", { x: 0, y: s * C, width: p.totalWidth, height: C, fill: `${t.group}0E` }, `rpb${s}`) : r.kind === "group" ? /* @__PURE__ */ e.jsx("rect", { x: 0, y: s * C, width: p.totalWidth, height: C, fill: t.headerBg }, `rb${s}`) : null),
                          Array.from({ length: p.totalDays }, (r, s) => {
                            const o = J(p.start, s);
                            return Ct(o) ? /* @__PURE__ */ e.jsx("rect", { x: s * p.dayWidth, y: 0, width: p.dayWidth, height: Ee, fill: "rgba(0,0,0,0.025)" }, `we${s}`) : null;
                          }),
                          U === "month" ? Array.from({ length: p.totalDays }, (r, s) => {
                            const i = J(p.start, s).getDate() === 1;
                            return /* @__PURE__ */ e.jsx(
                              "line",
                              {
                                x1: s * p.dayWidth,
                                y1: 0,
                                x2: s * p.dayWidth,
                                y2: Ee,
                                stroke: i ? t.border : t.borderLight,
                                strokeWidth: i ? 1 : 0.5
                              },
                              `vl${s}`
                            );
                          }) : p.months.map((r, s) => /* @__PURE__ */ e.jsx(
                            "line",
                            {
                              x1: r.startDay * p.dayWidth,
                              y1: 0,
                              x2: r.startDay * p.dayWidth,
                              y2: Ee,
                              stroke: t.border,
                              strokeWidth: 1
                            },
                            `ml${s}`
                          )),
                          pe.map((r, s) => /* @__PURE__ */ e.jsx(
                            "line",
                            {
                              x1: 0,
                              y1: (s + 1) * C,
                              x2: p.totalWidth,
                              y2: (s + 1) * C,
                              stroke: t.borderLight,
                              strokeWidth: 0.5
                            },
                            `hl${s}`
                          )),
                          tr && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                            /* @__PURE__ */ e.jsx("line", { x1: We, y1: 0, x2: We, y2: Ee, stroke: t.today, strokeWidth: 2, strokeDasharray: "6 3", opacity: 0.6 }),
                            /* @__PURE__ */ e.jsx("rect", { x: We - 22, y: 0, width: 44, height: 18, rx: 9, fill: t.today }),
                            /* @__PURE__ */ e.jsx("text", { x: We, y: 13, textAnchor: "middle", fill: "#fff", fontSize: 9, fontWeight: 700, fontFamily: "Inter, sans-serif", children: "HOJE" })
                          ] })
                        ]
                      }
                    ),
                    pe.map((r, s) => {
                      if (r.kind === "group" || r.kind === "projectHeader")
                        return null;
                      const o = r.task, i = Et(o), u = Tt(o), l = te(i, p), a = s * C, h = le === o.id, P = S?.task.id === o.id, F = j?.task.id === o.id, _ = ot.has(o.id), H = st.has(o.id), ue = B?.hoverTargetId === o.id, It = (h || ue) && !!Y, Ge = A !== null && o.id !== A && !Ce.has(o.id), Je = A !== null && (o.id === A || Ce.has(o.id)), Ze = {
                        onMouseDown: (M) => Gt(M, o),
                        onClick: (M) => er(M, o),
                        onDoubleClick: () => St(o),
                        onMouseEnter: () => Re(o.id),
                        onMouseLeave: () => {
                          Re(null), De(null);
                        },
                        onMouseMove: (M) => {
                          !S && !j && De({ task: o, x: M.clientX, y: M.clientY });
                        }
                      };
                      if (o.originalType === "step") {
                        const M = K[o.colorIdx ?? 0], xe = Math.max(te(u, p) - l, U === "month" ? p.dayWidth : 6), fe = xe * (o.progress / 100), Ke = a + (C - ne) / 2, ze = !!(o.previsionStart && o.previsionEnd), Qe = ze ? te(o.previsionStart, p) : 0, rr = ze ? Math.max(te(o.previsionEnd, p) - Qe, U === "month" ? p.dayWidth : 6) : 0, or = Ke + ne + 3;
                        return /* @__PURE__ */ e.jsxs(Wt.Fragment, { children: [
                          ze && /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              title: `Previsto: ${re(o.previsionStart)} → ${re(o.previsionEnd)}`,
                              style: {
                                position: "absolute",
                                left: Qe,
                                top: or,
                                width: rr,
                                height: 5,
                                borderRadius: 3,
                                background: `${M.progress}33`,
                                border: `1.5px solid ${M.progress}66`,
                                boxShadow: `inset 0 0 0 1px ${M.progress}22`,
                                pointerEvents: "none",
                                zIndex: 5
                              }
                            }
                          ),
                          /* @__PURE__ */ e.jsxs(
                            "div",
                            {
                              "data-task-id": o.id,
                              ...Ze,
                              style: {
                                position: "absolute",
                                left: l,
                                top: Ke,
                                width: xe,
                                height: ne,
                                borderRadius: ne / 2,
                                background: H ? "linear-gradient(135deg, #fdd, #fee)" : M.bar,
                                border: _ ? `2px solid ${t.today}` : H ? `1.5px solid ${t.today}88` : `1.5px solid ${M.barBorder}`,
                                cursor: P || F ? "grabbing" : "grab",
                                zIndex: h || ue ? 20 : 10,
                                boxShadow: ue ? `0 0 0 2px ${t.group}, 0 4px 16px ${t.group}33` : _ ? `0 0 0 1px ${t.today}44, 0 3px 12px ${t.today}22` : Je && !h ? `0 0 0 2px ${t.group}99, 0 3px 14px ${t.group}33` : h ? `0 3px 12px ${M.progress}22` : "none",
                                transform: h ? "scaleY(1.06)" : "scaleY(1)",
                                opacity: Ge ? 0.15 : 1,
                                transition: P || F ? "none" : "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                                overflow: "visible"
                              },
                              children: [
                                /* @__PURE__ */ e.jsxs("div", { style: {
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  width: xe,
                                  height: "100%",
                                  borderRadius: ne / 2,
                                  overflow: "hidden",
                                  pointerEvents: "none"
                                }, children: [
                                  /* @__PURE__ */ e.jsx("div", { style: {
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: fe,
                                    height: "100%",
                                    background: H ? `linear-gradient(90deg, ${t.today}cc, ${t.today}88)` : `linear-gradient(90deg, ${M.progress}, ${M.progress}cc)`,
                                    borderRadius: `${ne / 2}px 0 0 ${ne / 2}px`,
                                    transition: P || F ? "none" : "width 0.3s"
                                  } }),
                                  xe > 50 && /* @__PURE__ */ e.jsxs("span", { style: {
                                    position: "absolute",
                                    inset: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 10,
                                    fontWeight: 700,
                                    letterSpacing: "0.05em",
                                    color: o.progress > 50 ? "#fff" : H ? t.today : M.progress,
                                    zIndex: 1,
                                    pointerEvents: "none"
                                  }, children: [
                                    Math.round(o.progress),
                                    "%"
                                  ] })
                                ] }),
                                /* @__PURE__ */ e.jsx(
                                  "div",
                                  {
                                    onMouseDown: (Te) => wt(Te, o, "left"),
                                    style: { position: "absolute", left: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `${ne / 2}px 0 0 ${ne / 2}px` }
                                  }
                                ),
                                /* @__PURE__ */ e.jsx(
                                  "div",
                                  {
                                    onMouseDown: (Te) => wt(Te, o, "right"),
                                    style: { position: "absolute", right: 0, top: 0, width: 8, height: "100%", cursor: "col-resize", zIndex: 2, borderRadius: `0 ${ne / 2}px ${ne / 2}px 0` }
                                  }
                                ),
                                It && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                                  /* @__PURE__ */ e.jsx(
                                    "div",
                                    {
                                      "data-task-id": o.id,
                                      onMouseDown: (Te) => qe(Te, o, "left"),
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
                                  ),
                                  /* @__PURE__ */ e.jsx(
                                    "div",
                                    {
                                      "data-task-id": o.id,
                                      onMouseDown: (Te) => qe(Te, o, "right"),
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
                                  )
                                ] })
                              ]
                            },
                            o.id
                          )
                        ] }, o.id);
                      }
                      if (o.originalType === "milestone") {
                        const M = te(i, p), xe = a + (C - Fe) / 2;
                        return /* @__PURE__ */ e.jsxs(
                          "div",
                          {
                            "data-task-id": o.id,
                            ...Ze,
                            style: {
                              position: "absolute",
                              left: M - 6,
                              top: xe,
                              height: Fe,
                              minWidth: xt,
                              borderRadius: Fe / 2,
                              background: _ ? "linear-gradient(135deg, #fee, #fff5f5)" : "linear-gradient(135deg, #e8f5ee, #f0f8f4)",
                              border: ue ? `2px solid ${t.group}` : _ ? `2px solid ${t.today}` : `1.5px solid ${t.milestoneRing}`,
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              paddingLeft: 4,
                              paddingRight: 12,
                              cursor: P ? "grabbing" : "grab",
                              zIndex: h || ue ? 20 : 10,
                              boxShadow: ue ? `0 0 0 2px ${t.group}, 0 4px 16px ${t.group}33` : _ ? `0 0 0 1px ${t.today}44, 0 3px 12px ${t.today}22` : Je && !h ? `0 0 0 2px ${t.group}99, 0 3px 14px ${t.group}33` : h ? `0 3px 12px ${t.milestone}22` : "0 1px 3px rgba(0,0,0,0.06)",
                              opacity: Ge ? 0.15 : 1,
                              transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                              transform: h ? "translateY(-1px)" : "none",
                              whiteSpace: "nowrap",
                              overflow: "visible"
                            },
                            children: [
                              /* @__PURE__ */ e.jsx("div", { style: {
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                background: _ ? t.today : t.milestone,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0
                              }, children: /* @__PURE__ */ e.jsx(Ie, { size: 11, color: "#fff", strokeWidth: 2.5 }) }),
                              /* @__PURE__ */ e.jsx("span", { style: { fontSize: 11, fontWeight: 600, color: _ ? t.today : t.milestone, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: o.name }),
                              o.progress >= 100 && /* @__PURE__ */ e.jsx("span", { style: { fontSize: 9, fontWeight: 700, color: "#fff", background: t.milestoneRing, borderRadius: 6, padding: "1px 5px" }, children: "✓" }),
                              It && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                                /* @__PURE__ */ e.jsx(
                                  "div",
                                  {
                                    "data-task-id": o.id,
                                    onMouseDown: (fe) => qe(fe, o, "left"),
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
                                ),
                                /* @__PURE__ */ e.jsx(
                                  "div",
                                  {
                                    "data-task-id": o.id,
                                    onMouseDown: (fe) => qe(fe, o, "right"),
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
                                )
                              ] })
                            ]
                          },
                          o.id
                        );
                      }
                      if (o.originalType === "event") {
                        const M = te(i, p), xe = a + (C - Fe) / 2;
                        return /* @__PURE__ */ e.jsxs(
                          "div",
                          {
                            ...Ze,
                            style: {
                              position: "absolute",
                              left: M - 6,
                              top: xe,
                              height: Fe,
                              minWidth: xt,
                              borderRadius: Fe / 2,
                              background: "linear-gradient(135deg, #fef3e2, #fef8f0)",
                              border: `1.5px solid ${t.event}66`,
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              paddingLeft: 4,
                              paddingRight: 12,
                              cursor: P ? "grabbing" : "grab",
                              zIndex: h ? 20 : 10,
                              boxShadow: Je && !h ? `0 0 0 2px ${t.group}99, 0 3px 14px ${t.group}33` : h ? `0 3px 12px ${t.event}22` : "0 1px 3px rgba(0,0,0,0.06)",
                              opacity: Ge ? 0.15 : 1,
                              transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                              transform: h ? "translateY(-1px)" : "none",
                              whiteSpace: "nowrap"
                            },
                            children: [
                              /* @__PURE__ */ e.jsx("div", { style: {
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                background: t.event,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0
                              }, children: /* @__PURE__ */ e.jsx($e, { size: 11, color: "#fff", strokeWidth: 2.5 }) }),
                              /* @__PURE__ */ e.jsx("span", { style: { fontSize: 11, fontWeight: 600, color: t.event, overflow: "hidden", textOverflow: "ellipsis", maxWidth: 130 }, children: o.name })
                            ]
                          },
                          o.id
                        );
                      }
                      if (o.originalType === "note") {
                        const M = te(i, p), xe = o.noteColor || t.note, fe = "#2a2a2a", Ke = (o.filesCount || 0) > 0, ze = Rr + 10, Qe = a + (C - ze) / 2;
                        return /* @__PURE__ */ e.jsxs(
                          "div",
                          {
                            ...Ze,
                            style: {
                              position: "absolute",
                              left: M - 4,
                              top: Qe,
                              width: Ir,
                              height: ze,
                              borderRadius: 3,
                              background: xe,
                              boxShadow: Je && !h ? `0 0 0 2px ${t.group}99, 2px 4px 12px rgba(0,0,0,0.18)` : h ? "3px 4px 14px rgba(0,0,0,0.2), inset 0 -1px 0 rgba(0,0,0,0.06)" : "1px 2px 5px rgba(0,0,0,0.13), inset 0 -1px 0 rgba(0,0,0,0.04)",
                              cursor: P ? "grabbing" : "grab",
                              zIndex: h ? 20 : 10,
                              opacity: Ge ? 0.15 : 1,
                              transition: "box-shadow 0.2s, transform 0.15s, opacity 0.18s",
                              transform: h ? "translateY(-2px) rotate(-0.8deg)" : "none",
                              display: "flex",
                              flexDirection: "column",
                              padding: "6px 8px 5px",
                              overflow: "hidden"
                            },
                            children: [
                              /* @__PURE__ */ e.jsx("div", { style: {
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
                              /* @__PURE__ */ e.jsx("span", { style: {
                                fontSize: 10,
                                fontWeight: 700,
                                color: fe,
                                lineHeight: "13px",
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                textOverflow: "ellipsis",
                                wordBreak: "break-word",
                                flex: 1
                              }, children: o.name }),
                              o.noteProjectTitle && /* @__PURE__ */ e.jsx("span", { style: {
                                fontSize: 7.5,
                                fontWeight: 600,
                                color: fe,
                                opacity: 0.65,
                                marginTop: 2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                              }, children: o.noteProjectTitle }),
                              /* @__PURE__ */ e.jsxs("div", { style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: 3,
                                gap: 4
                              }, children: [
                                /* @__PURE__ */ e.jsx("span", { style: { fontSize: 8, color: fe, opacity: 0.55, fontWeight: 500 }, children: re(i) }),
                                Ke && /* @__PURE__ */ e.jsxs("span", { style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                  fontSize: 8,
                                  color: fe,
                                  opacity: 0.6,
                                  fontWeight: 600,
                                  background: "rgba(0,0,0,0.06)",
                                  borderRadius: 3,
                                  padding: "1px 3px"
                                }, children: [
                                  /* @__PURE__ */ e.jsx(lt, { size: 7 }),
                                  o.filesCount
                                ] })
                              ] })
                            ]
                          },
                          o.id
                        );
                      }
                      return null;
                    }),
                    /* @__PURE__ */ e.jsx(
                      "svg",
                      {
                        width: p.totalWidth,
                        height: Ee,
                        style: { position: "absolute", inset: 0, pointerEvents: "none" },
                        children: Xt.map((r, s) => {
                          const o = le === r.predId || le === r.succId, i = !A || r.predId === A || r.succId === A || Ce.has(r.predId) || Ce.has(r.succId), u = A !== null && i, l = o ? t.arrowHover : u ? t.group : t.arrow;
                          return /* @__PURE__ */ e.jsxs("g", { style: { opacity: i ? u ? 1 : void 0 : 0.08, transition: "opacity 0.18s" }, children: [
                            /* @__PURE__ */ e.jsx(
                              "path",
                              {
                                d: r.path,
                                fill: "none",
                                stroke: l,
                                strokeWidth: u ? 2.5 : o ? 2 : 1.5,
                                style: { transition: "stroke 0.2s, stroke-width 0.2s" }
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "polygon",
                              {
                                points: `${r.headX},${r.headY} ${r.headX - 6},${r.headY - 4} ${r.headX - 6},${r.headY + 4}`,
                                fill: l,
                                style: { transition: "fill 0.2s" }
                              }
                            )
                          ] }, s);
                        })
                      }
                    ),
                    b && !S && /* @__PURE__ */ e.jsx("div", { style: { position: "fixed", left: b.x + 16, top: b.y - 10, zIndex: 9999, pointerEvents: "none" }, children: /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "rounded-xl px-4 py-3 min-w-[220px] max-w-[340px] backdrop-blur-sm",
                        style: { background: `${t.surface}f5`, border: `1px solid ${t.borderLight}`, boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)" },
                        children: [
                          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
                            Cr(b.task.originalType, b.task.colorIdx),
                            /* @__PURE__ */ e.jsx("span", { className: "text-xs font-bold truncate", style: { color: t.textTitle }, children: b.task.name })
                          ] }),
                          /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-1 text-[11px]", style: { color: t.textSecondary }, children: b.task.originalType === "step" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                            b.task.previsionStart && b.task.previsionEnd && /* @__PURE__ */ e.jsxs("div", { style: { background: `${t.headerBg}`, borderRadius: 6, padding: "4px 6px", marginBottom: 2 }, children: [
                              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 mb-1", children: [
                                /* @__PURE__ */ e.jsx("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${t.textSecondary}44`, border: `1.5px solid ${t.textSecondary}66` } }),
                                /* @__PURE__ */ e.jsx("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: t.textSecondary }, children: "Previsto" })
                              ] }),
                              /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-4", children: [
                                /* @__PURE__ */ e.jsx("span", { children: "Início:" }),
                                /* @__PURE__ */ e.jsx("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary }, children: re(b.task.previsionStart) })
                              ] }),
                              /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-4", children: [
                                /* @__PURE__ */ e.jsx("span", { children: "Fim:" }),
                                /* @__PURE__ */ e.jsx("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary }, children: re(b.task.previsionEnd) })
                              ] }),
                              /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-4", children: [
                                /* @__PURE__ */ e.jsx("span", { children: "Duração:" }),
                                /* @__PURE__ */ e.jsxs("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary }, children: [
                                  je(b.task.previsionStart, b.task.previsionEnd),
                                  "d"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ e.jsxs("div", { style: { background: b.task.hasActualDates ? `${t.groupLight}22` : "transparent", borderRadius: 6, padding: "4px 6px" }, children: [
                              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 mb-1", children: [
                                /* @__PURE__ */ e.jsx("div", { style: { width: 20, height: 4, borderRadius: 2, background: K[b.task.colorIdx ?? 0].progress } }),
                                /* @__PURE__ */ e.jsx("span", { style: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: b.task.hasActualDates ? t.group : t.textSecondary }, children: b.task.hasActualDates ? "Real" : "Previsto (em uso)" })
                              ] }),
                              /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-4", children: [
                                /* @__PURE__ */ e.jsx("span", { children: "Início:" }),
                                /* @__PURE__ */ e.jsx("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary }, children: re(b.task.start) })
                              ] }),
                              /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-4", children: [
                                /* @__PURE__ */ e.jsx("span", { children: "Fim:" }),
                                /* @__PURE__ */ e.jsx("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary }, children: re(b.task.end) })
                              ] }),
                              /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-4", children: [
                                /* @__PURE__ */ e.jsx("span", { children: "Duração:" }),
                                /* @__PURE__ */ e.jsxs("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary }, children: [
                                  je(b.task.start, b.task.end),
                                  "d"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-4 pt-1 mt-1", style: { borderTop: `1px solid ${t.borderLight}` }, children: [
                              /* @__PURE__ */ e.jsxs("span", { children: [
                                v("charts.gantt.progress", "Progresso"),
                                ":"
                              ] }),
                              /* @__PURE__ */ e.jsxs("span", { className: "font-bold", style: { color: t.group }, children: [
                                Math.round(b.task.progress),
                                "%"
                              ] })
                            ] })
                          ] }) : b.task.originalType === "note" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                            b.task.noteProjectTitle && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 mb-1", children: [
                              /* @__PURE__ */ e.jsx("div", { style: { width: 8, height: 8, borderRadius: 2, background: b.task.noteColor || t.note, flexShrink: 0 } }),
                              /* @__PURE__ */ e.jsx("span", { className: "text-[11px] font-semibold truncate", style: { color: t.textPrimary }, children: b.task.noteProjectTitle })
                            ] }),
                            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-4", children: [
                              /* @__PURE__ */ e.jsx("span", { children: "Data:" }),
                              /* @__PURE__ */ e.jsx("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary }, children: re(b.task.start) })
                            ] }),
                            (b.task.filesCount || 0) > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-4", children: [
                              /* @__PURE__ */ e.jsx("span", { children: "Anexos:" }),
                              /* @__PURE__ */ e.jsxs("span", { className: "font-semibold flex items-center gap-1", style: { color: t.textPrimary }, children: [
                                /* @__PURE__ */ e.jsx(lt, { size: 10 }),
                                b.task.filesCount
                              ] })
                            ] })
                          ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-4", children: [
                            /* @__PURE__ */ e.jsxs("span", { children: [
                              v("charts.gantt.start", "Início"),
                              ":"
                            ] }),
                            /* @__PURE__ */ e.jsx("span", { className: "font-semibold tabular-nums", style: { color: t.textPrimary }, children: re(b.task.start) })
                          ] }) })
                        ]
                      }
                    ) })
                  ] })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: "flex flex-wrap items-center gap-2.5 px-6 py-3.5",
              style: { borderTop: `1px solid ${t.border}`, background: t.headerBg },
              children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest mr-1", style: { color: t.textSecondary }, children: v("charts.gantt.legend", "Legenda") }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "flex gap-0.5", children: K.slice(0, 5).map((r, s) => /* @__PURE__ */ e.jsx("div", { className: "w-2 h-3 rounded-sm", style: { background: r.bar, border: `1px solid ${r.barBorder}` } }, s)) }),
                  /* @__PURE__ */ e.jsx("span", { children: v("charts.gantt.taskLabel", "Etapas") })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center rounded-full", style: { width: 14, height: 14, background: t.milestone }, children: /* @__PURE__ */ e.jsx(Ie, { size: 8, color: "#fff" }) }),
                  /* @__PURE__ */ e.jsx("span", { children: v("charts.gantt.milestoneLabel", "Marco (Entrega)") })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center rounded-full", style: { width: 14, height: 14, background: t.event }, children: /* @__PURE__ */ e.jsx($e, { size: 8, color: "#fff" }) }),
                  /* @__PURE__ */ e.jsx("span", { children: v("charts.gantt.eventLabel", "Evento Pontual") })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` }, children: [
                  /* @__PURE__ */ e.jsx("div", { style: { width: 12, height: 14, background: t.note, borderRadius: 2, boxShadow: "1px 1px 2px rgba(0,0,0,0.1)" } }),
                  /* @__PURE__ */ e.jsx("span", { children: v("charts.gantt.noteLabel", "Nota") })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` }, children: [
                  /* @__PURE__ */ e.jsxs("svg", { width: "18", height: "10", viewBox: "0 0 18 10", children: [
                    /* @__PURE__ */ e.jsx("path", { d: "M0,5 L10,5", stroke: t.arrow, strokeWidth: "1.5" }),
                    /* @__PURE__ */ e.jsx("polygon", { points: "10,5 14,2.5 14,7.5", fill: t.arrow })
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { children: v("charts.gantt.dependencyLabel", "Dependência") })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "w-0.5 h-3.5 rounded-full", style: { background: t.today } }),
                  /* @__PURE__ */ e.jsx("span", { children: v("charts.gantt.todayLabel", "Hoje") })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.textPrimary, background: t.surface, border: `1px solid ${t.borderLight}` }, children: [
                  /* @__PURE__ */ e.jsx("div", { style: { width: 20, height: 4, borderRadius: 2, background: `${t.textSecondary}44`, border: `1.5px solid ${t.textSecondary}66` } }),
                  /* @__PURE__ */ e.jsx("span", { children: v("charts.gantt.baselineLabel", "Previsto") })
                ] }),
                ot.size > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.today, background: t.surface, border: `1px solid ${t.today}44` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "w-3 h-2.5 rounded-sm", style: { border: `2px solid ${t.today}`, background: "transparent" } }),
                  /* @__PURE__ */ e.jsx("span", { children: "Caminho Crítico" })
                ] }),
                st.size > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full", style: { color: t.today, background: "#FFF5F5", border: `1px solid ${t.today}44` }, children: [
                  /* @__PURE__ */ e.jsx(Lt, { size: 11 }),
                  /* @__PURE__ */ e.jsx("span", { children: "Atrasado" })
                ] })
              ]
            }
          )
        ]
      }
    ),
    de.task && de.isOpen && (() => {
      const r = de.task, s = (x || []).filter(
        (a) => a.predecessorId === r.id || a.successorId === r.id
      ), o = {
        FS: "Início após Fim",
        SS: "Inícios simultâneos",
        FF: "Fins simultâneos",
        SF: "Fim após Início"
      }, i = s.length > 0 ? 300 : 220, u = Math.min(de.position.x, window.innerWidth - i - 16), l = de.position.y + 8;
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          "data-popup": "gantt-action",
          style: {
            position: "fixed",
            left: u,
            top: l,
            zIndex: 9999,
            background: "#fff",
            borderRadius: 4,
            boxShadow: "0 12px 40px rgba(0,0,0,0.14), 0 3px 10px rgba(0,0,0,0.07)",
            border: `1.5px solid ${t.borderLight}`,
            width: i,
            overflow: "hidden"
          },
          onMouseDown: (a) => a.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsx("div", { style: { padding: "12px 14px 10px", borderBottom: `1px solid ${t.borderLight}` }, children: /* @__PURE__ */ e.jsx(
              "p",
              {
                style: { fontSize: 13, fontWeight: 700, color: t.group, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
                title: r.name,
                children: r.name
              }
            ) }),
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 2, padding: "8px 6px" }, children: [
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => {
                    O?.(it(r)), Pe();
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
                  onMouseEnter: (a) => {
                    a.currentTarget.style.background = t.groupLight;
                  },
                  onMouseLeave: (a) => {
                    a.currentTarget.style.background = "transparent";
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(fr, { size: 15 }),
                    /* @__PURE__ */ e.jsx("span", { children: v("projects.stepAction.viewDetails", "Ver detalhes") })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => {
                    N?.(it(r)), Pe();
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
                  onMouseEnter: (a) => {
                    a.currentTarget.style.background = t.groupLight;
                  },
                  onMouseLeave: (a) => {
                    a.currentTarget.style.background = "transparent";
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(jr, { size: 15 }),
                    /* @__PURE__ */ e.jsx("span", { children: v("projects.stepAction.edit", "Editar") })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => {
                    Q?.(r.id), Pe();
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
                    /* @__PURE__ */ e.jsx(Sr, { size: 15 }),
                    /* @__PURE__ */ e.jsx("span", { children: v("projects.stepAction.delete", "Excluir") })
                  ]
                }
              )
            ] }),
            s.length > 0 && /* @__PURE__ */ e.jsxs("div", { style: { borderTop: `1px solid ${t.borderLight}`, padding: "10px 14px 12px" }, children: [
              /* @__PURE__ */ e.jsxs("div", { style: { fontSize: 10, fontWeight: 700, color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }, children: [
                "Relações (",
                s.length,
                ")"
              ] }),
              /* @__PURE__ */ e.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 5 }, children: s.map((a) => {
                const h = a.predecessorId === r.id, P = h ? a.successorName : a.predecessorName, F = Yt === a.id;
                return /* @__PURE__ */ e.jsxs("div", { style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 8px",
                  borderRadius: 8,
                  background: "#f8fafb",
                  border: `1px solid ${t.borderLight}`
                }, children: [
                  /* @__PURE__ */ e.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
                    /* @__PURE__ */ e.jsxs("div", { style: { fontSize: 10, fontWeight: 700, color: t.group, marginBottom: 2 }, children: [
                      /* @__PURE__ */ e.jsx("span", { style: { background: `${t.group}15`, borderRadius: 4, padding: "1px 5px" }, children: a.type }),
                      " ",
                      /* @__PURE__ */ e.jsx("span", { style: { color: t.textSecondary, fontWeight: 500 }, children: h ? "→ " : "← " }),
                      /* @__PURE__ */ e.jsx("span", { style: { color: t.textMuted, fontWeight: 400, fontSize: 9 }, children: o[a.type] ?? a.type })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        style: { fontSize: 11, color: t.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
                        title: P,
                        children: P || (h ? a.successorId : a.predecessorId)
                      }
                    ),
                    a.lag > 0 && /* @__PURE__ */ e.jsxs("div", { style: { fontSize: 9, color: t.textMuted, marginTop: 1 }, children: [
                      "Lag: ",
                      a.lag,
                      "d"
                    ] })
                  ] }),
                  ee && /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      disabled: !!F,
                      onClick: async () => {
                        gt(a.id);
                        try {
                          await ee(a.id);
                        } finally {
                          gt(null);
                        }
                      },
                      style: {
                        flexShrink: 0,
                        padding: "4px 6px",
                        borderRadius: 6,
                        border: "none",
                        background: F ? "#fee2e2" : "transparent",
                        cursor: F ? "wait" : "pointer",
                        color: "#ef4444",
                        fontSize: 14,
                        opacity: F ? 0.5 : 1,
                        transition: "background 0.12s"
                      },
                      onMouseEnter: (_) => {
                        F || (_.currentTarget.style.background = "#fef2f2");
                      },
                      onMouseLeave: (_) => {
                        F || (_.currentTarget.style.background = "transparent");
                      },
                      title: "Excluir relação",
                      children: F ? "⟳" : "🗑"
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
    X && /* @__PURE__ */ e.jsxs(
      "div",
      {
        "data-menu": "chart-create",
        style: {
          position: "fixed",
          left: Math.min(X.x, window.innerWidth - 220),
          top: Math.min(X.y, window.innerHeight - 220),
          zIndex: 99999,
          background: "#fff",
          borderRadius: 10,
          boxShadow: "0 12px 40px rgba(0,0,0,0.15), 0 3px 10px rgba(0,0,0,0.08)",
          border: `1.5px solid ${t.borderLight}`,
          width: 200,
          overflow: "hidden"
        },
        onClick: (r) => r.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsxs("div", { style: { padding: "9px 13px 8px", borderBottom: `1px solid ${t.borderLight}`, background: t.headerBg }, children: [
            /* @__PURE__ */ e.jsxs("p", { style: { margin: 0, fontSize: 10, fontWeight: 700, color: t.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em" }, children: [
              "Adicionar em ",
              re(X.date)
            ] }),
            X.projectId && z && /* @__PURE__ */ e.jsx("p", { style: { margin: "2px 0 0", fontSize: 9, color: t.textSecondary, opacity: 0.75, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: V.find((r) => r.projectId === X.projectId)?.projectTitle || X.projectId })
          ] }),
          /* @__PURE__ */ e.jsx("div", { style: { padding: "5px 5px" }, children: [
            {
              label: "Etapa",
              icon: /* @__PURE__ */ e.jsx("div", { style: { width: 14, height: 14, borderRadius: 3, background: K[0].bar, border: `1.5px solid ${K[0].barBorder}`, flexShrink: 0 } }),
              action: () => {
                D?.(X.date, X.projectId), ye(null);
              }
            },
            {
              label: "Marco",
              icon: /* @__PURE__ */ e.jsx("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.milestoneRing}30`, border: `1.5px solid ${t.milestoneRing}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ e.jsx(Ie, { size: 11, style: { color: t.milestone } }) }),
              action: () => {
                ie?.(X.date, X.projectId), ye(null);
              }
            },
            {
              label: "Evento",
              icon: /* @__PURE__ */ e.jsx("div", { style: { width: 22, height: 22, borderRadius: "50%", background: `${t.event}18`, border: `1.5px solid ${t.event}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ e.jsx($e, { size: 11, style: { color: t.event } }) }),
              action: () => {
                c?.(X.date, X.projectId), ye(null);
              }
            },
            {
              label: "Nota",
              icon: /* @__PURE__ */ e.jsx("div", { style: { width: 16, height: 20, background: t.note, borderRadius: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.14)", position: "relative", overflow: "visible", flexShrink: 0 }, children: /* @__PURE__ */ e.jsx("div", { style: { position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 10, height: 4, background: "rgba(255,255,255,0.55)", borderRadius: 1 } }) }),
              action: () => {
                Z?.(X.date, X.projectId), ye(null);
              }
            }
          ].map((r) => /* @__PURE__ */ e.jsxs(
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
                color: t.textPrimary,
                opacity: 1,
                textAlign: "left",
                transition: "background 0.12s"
              },
              onMouseEnter: (s) => {
                s.currentTarget.style.background = t.headerBg;
              },
              onMouseLeave: (s) => {
                s.currentTarget.style.background = "transparent";
              },
              children: [
                r.icon,
                r.label
              ]
            },
            r.label
          )) })
        ]
      }
    ),
    B && /* @__PURE__ */ e.jsxs(
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
          /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("marker", { id: "connect-arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ e.jsx("path", { d: "M0,0 L0,6 L6,3 z", fill: t.group }) }) }),
          /* @__PURE__ */ e.jsx(
            "line",
            {
              x1: B.fromScreenX,
              y1: B.fromScreenY,
              x2: B.currentScreenX,
              y2: B.currentScreenY,
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
          /* @__PURE__ */ e.jsx("style", { children: "@keyframes gantt-dash { to { stroke-dashoffset: -13; } }" })
        ]
      }
    ),
    E && /* @__PURE__ */ e.jsx(
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
        onClick: () => se(null),
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              background: "#fff",
              borderRadius: 20,
              padding: "32px 36px",
              width: 420,
              boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 6px 24px rgba(0,0,0,0.08)"
            },
            onClick: (r) => r.stopPropagation(),
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: 20 }, children: [
                /* @__PURE__ */ e.jsx("h3", { style: { fontSize: 18, fontWeight: 700, color: t.textTitle, marginBottom: 4 }, children: "Tipo de Relação" }),
                /* @__PURE__ */ e.jsx("p", { style: { fontSize: 13, color: t.textSecondary }, children: "Escolha como as duas tarefas se relacionam" })
              ] }),
              /* @__PURE__ */ e.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }, children: [
                { type: "FS", label: "Início após Fim", desc: "B começa quando A termina", icon: "A ──► B" },
                { type: "SS", label: "Inícios simultâneos", desc: "A e B começam juntos", icon: "A═╗ B" },
                { type: "FF", label: "Fins simultâneos", desc: "A e B terminam juntos", icon: "A ╚═B" },
                { type: "SF", label: "Fim após Início", desc: "B termina quando A começa", icon: "B ──► A end" }
              ].map((r) => /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => Ue(r.type),
                  style: {
                    border: he === r.type ? `2px solid ${t.group}` : `1.5px solid ${t.borderLight}`,
                    borderRadius: 12,
                    padding: "12px 14px",
                    textAlign: "left",
                    cursor: "pointer",
                    background: he === r.type ? `${t.group}0d` : "#fafafa",
                    transition: "all 0.15s"
                  },
                  children: [
                    /* @__PURE__ */ e.jsx("div", { style: {
                      fontSize: 11,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      color: t.group,
                      marginBottom: 4,
                      background: he === r.type ? `${t.group}20` : `${t.group}0d`,
                      borderRadius: 6,
                      padding: "2px 6px",
                      display: "inline-block"
                    }, children: r.type }),
                    /* @__PURE__ */ e.jsx("div", { style: { fontSize: 13, fontWeight: 600, color: t.textTitle, marginBottom: 2 }, children: r.label }),
                    /* @__PURE__ */ e.jsx("div", { style: { fontSize: 11, color: t.textSecondary }, children: r.desc })
                  ]
                },
                r.type
              )) }),
              /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: 24 }, children: [
                /* @__PURE__ */ e.jsx("label", { style: { fontSize: 12, fontWeight: 600, color: t.textTitle, display: "block", marginBottom: 6 }, children: "Lag (dias de folga)" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    value: rt,
                    onChange: (r) => ft(parseInt(r.target.value) || 0),
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
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: 10 }, children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: () => se(null),
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
                    },
                    children: "Cancelar"
                  }
                ),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    onClick: Jt,
                    disabled: Le,
                    style: {
                      flex: 2,
                      padding: "10px 0",
                      borderRadius: 10,
                      border: "none",
                      background: Le ? `${t.group}88` : `linear-gradient(135deg, ${t.group}, ${t.group}cc)`,
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#fff",
                      cursor: Le ? "wait" : "pointer",
                      boxShadow: Le ? "none" : `0 4px 16px ${t.group}33`,
                      transition: "all 0.15s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8
                    },
                    children: [
                      Le && /* @__PURE__ */ e.jsx("span", { style: { fontSize: 12 }, children: "⟳" }),
                      Le ? "Criando..." : "Criar Relação"
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
function Cr(d, m) {
  const y = (T, x) => /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 flex items-center justify-center rounded-full", style: { width: 18, height: 18, background: T }, children: x });
  switch (d) {
    case "step":
      return /* @__PURE__ */ e.jsx("div", { className: "w-3 h-3 rounded flex-shrink-0", style: { background: K[m ?? 0].bar, border: `1.5px solid ${K[m ?? 0].barBorder}` } });
    case "milestone":
      return y(t.milestone, /* @__PURE__ */ e.jsx(Ie, { size: 10, color: "#fff" }));
    case "event":
      return y(t.event, /* @__PURE__ */ e.jsx($e, { size: 10, color: "#fff" }));
    case "note":
      return y(t.note, /* @__PURE__ */ e.jsx(Ft, { size: 10, color: "#fff" }));
  }
}
export {
  Pr as ProjectGantt
};
