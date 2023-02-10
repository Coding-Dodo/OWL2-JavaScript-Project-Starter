import { Component, useState, xml } from "@odoo/owl";

const MY_COMPONENT_TEMPLATE = xml/*xml*/ `
<span class="" t-on-click="updateState">
  Hello <t t-esc="state.text"/>
</span>
`;

export class MyComponent extends Component {
  static template = MY_COMPONENT_TEMPLATE;
  state = useState({ text: "Owl" });

  updateState() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
}
