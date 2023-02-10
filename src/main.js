import "./index.css";
import { App } from "@odoo/owl";
import { Root } from "./Root";

const app = new App(Root, { dev: true });
app.mount(document.getElementById("app"), {});
