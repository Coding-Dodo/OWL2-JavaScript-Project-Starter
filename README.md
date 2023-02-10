# OWL 2 Javascript Project Starter

This repo is an example on how to start a real project with the Odoo OWL framework in version 2.


[![Deploy on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Coding-Dodo/OWL2-JavaScript-Project-Starter)

## Features

- [OWL](https://github.com/odoo/owl) v2.0.5
- Javascript
- Vite
- TailwindCSS

## Installation

[This repo is a "template repository". It means you can quickly create repositories based on this one, without it being a fork.](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#about-repository-templates)

Otherwise, you may clone it:

```bash
git clone https://github.com/Coding-Dodo/OWL2-JavaScript-Project-Starter.git
```

Install dependencies:

```bash
pnpm i
```

Dev with HMR:

```bash
pnpm dev
```

Production build

```bash
pnpm build
```

Preview Production build

```bash
pnpm preview
```

Run tests

```bash
pnpm test
```

## Components

It is expected to create components in one file, following this convention:

```js
import { Component, useState, tags } from "@odoo/owl";

const APP_TEMPLATE = tags.xml/*xml*/ `
<div t-name="App" class="" t-on-click="update">
  Hello <t t-esc="state.text"/>
</div>
`;

export class App extends Component {
  static template = APP_TEMPLATE;
  state = useState({ text: "Owl" });
  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
}
```

## See also

If your are searching for OWL version 1 project starter with Tailwind and PostCSS:

[https://github.com/Coding-Dodo/OWL-JavaScript-Tailwind-Project-Starter](https://github.com/Coding-Dodo/OWL-JavaScript-Tailwind-Project-Starter)