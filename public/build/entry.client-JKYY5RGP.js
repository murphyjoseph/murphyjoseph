import {
  CacheProvider,
  ClientStyleContext,
  createCache
} from "/build/_shared/chunk-YSIU33EP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-ETPVOW6L.js";
import {
  createHotContext
} from "/build/_shared/chunk-K2JPJ6DS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/entry.client.tsx
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// app/createEmotionCache.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/createEmotionCache.ts"
  );
  import.meta.hot.lastModified = "1703817291066.716";
}
var defaultCache = createEmotionCache();
function createEmotionCache() {
  return createCache({ key: "cha" });
}

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/entry.client.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1703817291068.1038";
}
function ClientCacheProvider({
  children
}) {
  _s();
  const [cache, setCache] = (0, import_react.useState)(defaultCache);
  function reset() {
    setCache(createEmotionCache());
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientStyleContext.Provider, { value: {
    reset
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheProvider, { value: cache, children }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s(ClientCacheProvider, "tcIOn6Sd77WzbBr/Pv1kFwXQ8Ls=");
_c = ClientCacheProvider;
(0, import_react_dom.hydrate)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientCacheProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
  fileName: "app/entry.client.tsx",
  lineNumber: 46,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/entry.client.tsx",
  lineNumber: 45,
  columnNumber: 9
}, this), document);
var _c;
$RefreshReg$(_c, "ClientCacheProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
//# sourceMappingURL=/build/entry.client-JKYY5RGP.js.map
