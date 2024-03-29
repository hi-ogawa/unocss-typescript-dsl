import "virtual:uno.css";
import "@unocss/reset/tailwind.css";

import { tinyassert } from "@hiogawa/utils";
import { createRoot } from "react-dom/client";
import { App } from "./app";

function main() {
  const el = document.querySelector("#root");
  tinyassert(el);
  const root = createRoot(el);
  root.render(<App />);
}

main();
