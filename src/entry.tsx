import * as React from "react";
import { render } from "react-dom";
// App wrapped with redux Provider, store, etc.

import { App } from "./App";

render(<App />, document.getElementById("app"));

// import { createRoot } from "react-dom/client";
// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App />);
