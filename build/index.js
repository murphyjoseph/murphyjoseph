var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react");

// app/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(null);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache")), defaultCache = createEmotionCache();
function createEmotionCache() {
  return (0, import_cache.default)({ key: "cha" });
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, { value: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, { value: chunks.styles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react12 = require("react"), import_react13 = require("@emotion/react"), import_react14 = require("@chakra-ui/react"), import_react15 = require("@remix-run/react");

// app/components/Navigation/NavigationMain.tsx
var import_react4 = require("@chakra-ui/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), NavigationMain = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Box, { as: "nav", position: "sticky", top: "0", left: "0", zIndex: "1", background: "white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Box, { background: "whiteAlpha.300", padding: 3, boxShadow: "base", mb: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Heading, { textAlign: "center", fontSize: "lg", children: "Joseph Murphy" }, void 0, !1, {
  fileName: "app/components/Navigation/NavigationMain.tsx",
  lineNumber: 8,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/Navigation/NavigationMain.tsx",
  lineNumber: 7,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Navigation/NavigationMain.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this);

// app/pages/PageHome/SectionAboutUs.tsx
var import_react6 = require("@chakra-ui/react");

// app/pages/PageHome/SectionAboutUsCard.tsx
var import_react5 = require("@chakra-ui/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), SectionAboutUsCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  linkLinkedIn,
  linkGithub
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Card, { maxW: "xs", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.CardBody, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_react5.Image,
      {
        src: imageSrc,
        alt: imageAlt,
        borderRadius: "lg"
      },
      void 0,
      !1,
      {
        fileName: "app/pages/PageHome/SectionAboutUsCard.tsx",
        lineNumber: 24,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Stack, { mt: "6", spacing: "3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Heading, { size: "md", children: title }, void 0, !1, {
        fileName: "app/pages/PageHome/SectionAboutUsCard.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Text, { children: description }, void 0, !1, {
        fileName: "app/pages/PageHome/SectionAboutUsCard.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/pages/PageHome/SectionAboutUsCard.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/pages/PageHome/SectionAboutUsCard.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.CardFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.ButtonGroup, { spacing: "2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Link, { href: linkGithub, children: "Github" }, void 0, !1, {
      fileName: "app/pages/PageHome/SectionAboutUsCard.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.Link, { href: linkLinkedIn, children: "LinkedIn" }, void 0, !1, {
      fileName: "app/pages/PageHome/SectionAboutUsCard.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/pages/PageHome/SectionAboutUsCard.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/pages/PageHome/SectionAboutUsCard.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/pages/PageHome/SectionAboutUsCard.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this);

// app/pages/PageHome/SectionAboutUs.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), SectionAboutUs = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Box, { margin: "0 auto", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Heading, { textAlign: "center", mb: 2, children: "Meet the Team" }, void 0, !1, {
    fileName: "app/pages/PageHome/SectionAboutUs.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Text, { maxW: "lg", mb: 4, mr: "auto", ml: "auto", children: "an oil painting of a mitochondria who is also a software engineer" }, void 0, !1, {
    fileName: "app/pages/PageHome/SectionAboutUs.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.SimpleGrid, { templateColumns: "repeat(auto-fill, minmax(200px, 1fr))", spacing: 2, alignItems: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SectionAboutUsCard, { imageSrc: "/armswideopen.png", imageAlt: "person1", title: "person1", description: "i hate rust", linkGithub: "", linkLinkedIn: "" }, void 0, !1, {
      fileName: "app/pages/PageHome/SectionAboutUs.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SectionAboutUsCard, { imageSrc: "/armswideopen.png", imageAlt: "person2", title: "person2", description: "i love java", linkGithub: "", linkLinkedIn: "" }, void 0, !1, {
      fileName: "app/pages/PageHome/SectionAboutUs.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SectionAboutUsCard, { imageSrc: "/armswideopen.png", imageAlt: "person3", title: "person3", description: "i am cool", linkGithub: "", linkLinkedIn: "" }, void 0, !1, {
      fileName: "app/pages/PageHome/SectionAboutUs.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SectionAboutUsCard, { imageSrc: "/armswideopen.png", imageAlt: "person4", title: "person4", description: "i dont know", linkGithub: "", linkLinkedIn: "" }, void 0, !1, {
      fileName: "app/pages/PageHome/SectionAboutUs.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SectionAboutUsCard, { imageSrc: "/armswideopen.png", imageAlt: "person5", title: "person5", description: "i want taco", linkGithub: "", linkLinkedIn: "" }, void 0, !1, {
      fileName: "app/pages/PageHome/SectionAboutUs.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/pages/PageHome/SectionAboutUs.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/pages/PageHome/SectionAboutUs.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this);

// app/pages/PageHome/SectionHero.tsx
var import_react7 = require("@chakra-ui/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), SectionHero = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  import_react7.Box,
  {
    height: "100vh",
    width: "100%",
    position: "relative",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react7.Box,
        {
          background: "linear-gradient(to bottom, #ff9999, #cc0000)",
          height: "50vh",
          width: "80%"
        },
        void 0,
        !1,
        {
          fileName: "app/pages/PageHome/SectionHero.tsx",
          lineNumber: 11,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react7.Image,
        {
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          alt: "serious banner",
          height: "300px",
          src: "/armswideopen.png",
          position: "absolute",
          bottom: "0",
          transform: "translateX(50%, -50%)"
        },
        void 0,
        !1,
        {
          fileName: "app/pages/PageHome/SectionHero.tsx",
          lineNumber: 18,
          columnNumber: 7
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/pages/PageHome/SectionHero.tsx",
    lineNumber: 6,
    columnNumber: 5
  },
  this
);

// app/pages/PageHome/SectionMission.tsx
var import_react8 = require("@chakra-ui/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), SectionMission = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Box, { maxW: "lg", margin: "0 auto", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Heading, { textAlign: "center", mb: 4, children: "Our Mission" }, void 0, !1, {
    fileName: "app/pages/PageHome/SectionMission.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Text, { children: "To elevate through innovation and community support. We aim to provide events in the Milwaukee community that help foster technical innovation and provide broad support to those wanting to get into software development or technology related entrepreneurial endeavors." }, void 0, !1, {
    fileName: "app/pages/PageHome/SectionMission.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/pages/PageHome/SectionMission.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this);

// app/patterns/Spacer/SpacerSection.tsx
var import_react9 = require("@chakra-ui/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), SpacerSection = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Box, { marginTop: 16, marginBottom: 16, children }, void 0, !1, {
  fileName: "app/patterns/Spacer/SpacerSection.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this);

// app/pages/PageHome/SectionSponsors.tsx
var import_react10 = require("@chakra-ui/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), SectionSponsors = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Box, { maxW: "lg", margin: "0 auto", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Heading, { textAlign: "center", mb: 4, children: "Sponsors" }, void 0, !1, {
    fileName: "app/pages/PageHome/SectionSponsors.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.SimpleGrid, { templateColumns: "repeat(auto-fill, minmax(150px, 1fr))", spacing: 2, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Avatar, { size: "2xl", src: "/armswideopen.png" }, void 0, !1, {
      fileName: "app/pages/PageHome/SectionSponsors.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Avatar, { size: "2xl", src: "/armswideopen.png" }, void 0, !1, {
      fileName: "app/pages/PageHome/SectionSponsors.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Avatar, { size: "2xl", src: "/armswideopen.png" }, void 0, !1, {
      fileName: "app/pages/PageHome/SectionSponsors.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/pages/PageHome/SectionSponsors.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/pages/PageHome/SectionSponsors.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this);

// app/pages/PageHome/PageHome.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), PageHome = () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(NavigationMain, {}, void 0, !1, {
    fileName: "app/pages/PageHome/PageHome.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SectionHero, {}, void 0, !1, {
    fileName: "app/pages/PageHome/PageHome.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SpacerSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SectionMission, {}, void 0, !1, {
    fileName: "app/pages/PageHome/PageHome.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/pages/PageHome/PageHome.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SpacerSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SectionAboutUs, {}, void 0, !1, {
    fileName: "app/pages/PageHome/PageHome.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/pages/PageHome/PageHome.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SpacerSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SectionSponsors, {}, void 0, !1, {
    fileName: "app/pages/PageHome/PageHome.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/pages/PageHome/PageHome.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/pages/PageHome/PageHome.tsx",
  lineNumber: 11,
  columnNumber: 5
}, this);

// app/theme/mitobyte-theme.ts
var import_react11 = require("@chakra-ui/react"), mitobyteTheme = (0, import_react11.extendTheme)({
  colors: {
    brand: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2d3748",
      800: "#1a202c",
      900: "#171923"
    }
  },
  fonts: {
    body: "arial, sans-serif",
    heading: "Helvetica, serif",
    mono: "Menlo, monospace"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem"
  }
});

// app/root.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }
], Document = (0, import_react13.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverStyleData = (0, import_react12.useContext)(ServerStyleContext), clientStyleData = (0, import_react12.useContext)(ClientStyleContext);
    return (0, import_react12.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData?.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        serverStyleData?.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 65,
            columnNumber: 13
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("body", { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this);
  }
);
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.ChakraProvider, { theme: mitobyteTheme, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(PageHome, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 86,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-JKYY5RGP.js", imports: ["/build/_shared/chunk-YSIU33EP.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-ETPVOW6L.js", "/build/_shared/chunk-K2JPJ6DS.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VHRZH6E2.js", imports: ["/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "1935e91b", hmr: { runtime: "/build/_shared/chunk-K2JPJ6DS.js", timestamp: 1706977987556 }, url: "/build/manifest-1935E91B.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
