(window["webpackJsonp"] = window["webpackJsonp"] || [])
.push([
	["projects"], {
		8583: function(t, e, r) {
			"use strict";
			r("ea7b")
		},
		acca: function(t, e, r) {
			"use strict";
			r.r(e);
			r("7f7f");
			var n = function() {
					var t = this,
						e = t._self._c;
					return e("div", {
						staticStyle: {
							width: "100%"
						}
					}, [e("h2", {
						staticStyle: {
							"margin-bottom": "24px"
						}
					}, [t._v(t._s(t.$t("projectList")))]), e("Collapse", {
						attrs: {
							accordion: "",
							simple: ""
						}
					}, t._l(t.mergedProjects, (function(r) {
						return e("Panel", {
							key: r.id,
							staticClass: "project-panel"
						}, [e("div", {
							staticStyle: {
								position: "absolute",
								width: "100%",
								height: "100%",
								top: "0",
								display: "flex",
								"justify-content": "start",
								"align-items": "center"
							}
						}, [e("div", {
							staticStyle: {
								position: "absolute",
								width: "100%",
								height: "100%",
								color: "white",
								"background-position": "center center",
								"background-size": "cover",
								filter: "blur(10px) brightness(0.5)"
							},
							style: {
								backgroundImage: "url(".concat(r.thumbnail, ")")
							}
						}), e("p", {
							staticStyle: {
								color: "white",
								"z-index": "6",
								"font-size": "36px",
								"font-weight": "700",
								"margin-left": "48px"
							}
						}, [t._v("\n          " + t._s(r.name) + "\n        ")])]), e("div", {
							staticStyle: {
								padding: "12px"
							},
							attrs: {
								slot: "content"
							},
							slot: "content"
						}, [e(r.markdown, {
							tag: "component",
							staticClass: "markdown-body"
						})], 1)])
					})), 1)], 1)
				},
				o = [];
			r("8e6e"), r("ac6a"), r("456d");

			function i(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
				return n
			}

			function c(t) {
				if (Array.isArray(t)) return i(t)
			}

			function a(t) {
				if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
			}

			function s(t, e) {
				if (t) {
					if ("string" === typeof t) return i(t, e);
					var r = Object.prototype.toString.call(t)
						.slice(8, -1);
					return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(t, e) : void 0
				}
			}

			function l() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}

			function u(t) {
				return c(t) || a(t) || s(t) || l()
			}
			var p = r("ade3"),
				f = r("2f62");
			r("e4cb");

			function b(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e)
							.enumerable
					}))), r.push.apply(r, n)
				}
				return r
			}

			function d(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? b(Object(r), !0)
						.forEach((function(e) {
							Object(p["a"])(t, e, r[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : b(Object(r))
						.forEach((function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
						}))
				}
				return t
			}
			var y = {
					computed: d(d({}, Object(f["b"])(["projects", "previousProjects"])), {}, {
						mergedProjects: function() {
							return [].concat(u(this.projects), u(this.previousProjects))
						}
					})
				},
				m = y,
				g = (r("8583"), r("2877")),
				j = Object(g["a"])(m, n, o, !1, null, null, null);
			e["default"] = j.exports
		},
		e4cb: function(t, e, r) {},
		ea7b: function(t, e, r) {}
	}
]);
//# sourceMappingURL=projects.f89c10d3.js.map
