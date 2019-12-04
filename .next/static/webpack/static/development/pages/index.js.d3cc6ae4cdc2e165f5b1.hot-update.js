webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/layout */ "./component/layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "D:\\Django\\Nextjs\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

 // const PostLink = props => (
//     <li>
//       <Link href="/p/[id]" as={`/p/${props.id}`}>
//         <a>{props.id}</a>
//       </Link>
//     </li>
//   );
//   export default function Blog() {
//     return (
//       <Layout>
//         <h1>My Blog</h1>
//         <ul>
//           <PostLink id="hello-nextjs" />
//           <PostLink id="learn-nextjs" />
//           <PostLink id="deploy-nextjs" />
//         </ul>
//       </Layout>
//     );
//   }



function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, post.title)));
};

function Blog() {
  return __jsx(_component_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-357181001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "My Blog"), __jsx("ul", {
    className: "jsx-357181001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, getPosts().map(function (post) {
    return __jsx(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "357181001",
    __self: this
  }, "h1.jsx-357181001,a.jsx-357181001{font-family:'Arial';}ul.jsx-357181001{padding:0;}li.jsx-357181001{list-style:none;margin:5px 0;}a.jsx-357181001{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-357181001:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEamFuZ29cXE5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEb0IsQUFJaUMsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxJQVJmLFNBU0EscUJBSWEsV0FDYiIsImZpbGUiOiJEOlxcRGphbmdvXFxOZXh0anNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50L2xheW91dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxyXG4vLyAgICAgPGxpPlxyXG4vLyAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwcm9wcy5pZH1gfT5cclxuLy8gICAgICAgICA8YT57cHJvcHMuaWR9PC9hPlxyXG4vLyAgICAgICA8L0xpbms+XHJcbi8vICAgICA8L2xpPlxyXG4vLyAgICk7XHJcbiAgXHJcbi8vICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG4vLyAgICAgICAgIDx1bD5cclxuLy8gICAgICAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIC8+XHJcbi8vICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJsZWFybi1uZXh0anNcIiAvPlxyXG4vLyAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiZGVwbG95LW5leHRqc1wiIC8+XHJcbi8vICAgICAgICAgPC91bD5cclxuLy8gICAgICAgPC9MYXlvdXQ+XHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJyB9LFxyXG4gICAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXHJcbiAgICAgIHsgaWQ6ICdkZXBsb3ktbmV4dGpzJywgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnIH1cclxuICAgIF07XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XHJcbiAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgaDEsXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcclxuICB9O1xyXG59O1xyXG5cclxuIl19 */\n/*@ sourceURL=D:\\\\Django\\\\Nextjs\\\\pages\\\\index.js */"));
}
Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            shows: data.map(function (entry) {
              return entry.show;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

/***/ })

})
//# sourceMappingURL=index.js.d3cc6ae4cdc2e165f5b1.hot-update.js.map