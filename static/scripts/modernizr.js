/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-webplossless_webp_lossless-setclasses !*/
!(function (e, A, n) {
  function o(e, A) {
    return typeof e === A;
  }
  function s() {
    var e, A, n, s, a, t, r;
    for (var f in l)
      if (l.hasOwnProperty(f)) {
        if (
          ((e = []),
          (A = l[f]),
          A.name &&
            (e.push(A.name.toLowerCase()),
            A.options && A.options.aliases && A.options.aliases.length))
        )
          for (n = 0; n < A.options.aliases.length; n++)
            e.push(A.options.aliases[n].toLowerCase());
        for (s = o(A.fn, "function") ? A.fn() : A.fn, a = 0; a < e.length; a++)
          (t = e[a]),
            (r = t.split(".")),
            1 === r.length
              ? (Modernizr[r[0]] = s)
              : (!Modernizr[r[0]] ||
                  Modernizr[r[0]] instanceof Boolean ||
                  (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
                (Modernizr[r[0]][r[1]] = s)),
            i.push((s ? "" : "no-") + r.join("-"));
      }
  }
  function a(e) {
    var A = u.className,
      n = Modernizr._config.classPrefix || "";
    if ((c && (A = A.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      A = A.replace(o, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((A += " " + n + e.join(" " + n)),
      c ? (u.className.baseVal = A) : (u.className = A));
  }
  function t(e, A) {
    if ("object" == typeof e) for (var n in e) f(e, n) && t(n, e[n]);
    else {
      e = e.toLowerCase();
      var o = e.split("."),
        s = Modernizr[o[0]];
      if ((2 == o.length && (s = s[o[1]]), "undefined" != typeof s))
        return Modernizr;
      (A = "function" == typeof A ? A() : A),
        1 == o.length
          ? (Modernizr[o[0]] = A)
          : (!Modernizr[o[0]] ||
              Modernizr[o[0]] instanceof Boolean ||
              (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])),
            (Modernizr[o[0]][o[1]] = A)),
        a([(A && 0 != A ? "" : "no-") + o.join("-")]),
        Modernizr._trigger(e, A);
    }
    return Modernizr;
  }
  var i = [],
    l = [],
    r = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, A) {
        var n = this;
        setTimeout(function () {
          A(n[e]);
        }, 0);
      },
      addTest: function (e, A, n) {
        l.push({ name: e, fn: A, options: n });
      },
      addAsyncTest: function (e) {
        l.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = r), (Modernizr = new Modernizr());
  var f,
    u = A.documentElement,
    c = "svg" === u.nodeName.toLowerCase();
  !(function () {
    var e = {}.hasOwnProperty;
    f =
      o(e, "undefined") || o(e.call, "undefined")
        ? function (e, A) {
            return A in e && o(e.constructor.prototype[A], "undefined");
          }
        : function (A, n) {
            return e.call(A, n);
          };
  })(),
    (r._l = {}),
    (r.on = function (e, A) {
      this._l[e] || (this._l[e] = []),
        this._l[e].push(A),
        Modernizr.hasOwnProperty(e) &&
          setTimeout(function () {
            Modernizr._trigger(e, Modernizr[e]);
          }, 0);
    }),
    (r._trigger = function (e, A) {
      if (this._l[e]) {
        var n = this._l[e];
        setTimeout(function () {
          var e, o;
          for (e = 0; e < n.length; e++) (o = n[e])(A);
        }, 0),
          delete this._l[e];
      }
    }),
    Modernizr._q.push(function () {
      r.addTest = t;
    }),
    Modernizr.addAsyncTest(function () {
      var e = new Image();
      (e.onerror = function () {
        t("webplossless", !1, { aliases: ["webp-lossless"] });
      }),
        (e.onload = function () {
          t("webplossless", 1 == e.width, { aliases: ["webp-lossless"] });
        }),
        (e.src =
          "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=");
    }),
    Modernizr.addAsyncTest(function () {
      function e(e, A, n) {
        function o(A) {
          var o = A && "load" === A.type ? 1 == s.width : !1,
            a = "webp" === e;
          t(e, a && o ? new Boolean(o) : o), n && n(A);
        }
        var s = new Image();
        (s.onerror = o), (s.onload = o), (s.src = A);
      }
      var A = [
          {
            uri:
              "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
            name: "webp",
          },
          {
            uri:
              "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
            name: "webp.alpha",
          },
          {
            uri:
              "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
            name: "webp.animation",
          },
          {
            uri:
              "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
            name: "webp.lossless",
          },
        ],
        n = A.shift();
      e(n.name, n.uri, function (n) {
        if (n && "load" === n.type)
          for (var o = 0; o < A.length; o++) e(A[o].name, A[o].uri);
      });
    }),
    s(),
    a(i),
    delete r.addTest,
    delete r.addAsyncTest;
  for (var p = 0; p < Modernizr._q.length; p++) Modernizr._q[p]();
  e.Modernizr = Modernizr;
})(window, document);
