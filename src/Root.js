// import typescriptLogo from "./typescript.svg";
import { Component, xml, useState } from "@odoo/owl";
import { MyComponent } from "./components/MyComponent";
import { DropDown } from "./components/DropDown";
import { AutoCompleteInput } from "./components/AutoCompleteInput";

const ROOT_TEMPLATE = xml/*xml*/ `
<main class="h-full pb-14 bg-faded-green" t-name="App">
    <!--Nav-->
    <div class="w-full container mx-auto p-6">
        <div class="w-full flex items-center justify-between">
            <a class="flex items-center text-reddish-brown no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                <img class="h-8 mx-auto lg:mr-0" src="owl.svg"/>
                OWL 2 - Vite - Tailwind App Starter Project
            </a>
            <div class="flex w-1/2 justify-end content-center">
                <a class="inline-block text-center h-10 p-2 md:h-auto md:p-4" href="https://github.com/Coding-Dodo/OWL2-JavaScript-Project-Starter">
                    <img class="w-2/6 mx-auto lg:mr-0" src="github-logo.svg"/>
                </a>
            </div>
        </div>
    </div>
    <!--Main-->
    <div class="container pt-3 md:pt-5 px-6 mx-auto flex h-screen flex-wrap flex-col md:flex-row">
        <!--Left Col-->
        <div class="flex flex-col w-full xl:w-2/5 min-h-full lg:items-start">
            <h1 class="my-4 text-2xl md:text-4xl text-gray-700 font-bold leading-tight text-center md:text-left slide-in-bottom-h1" t-on-click.prevent="update">
                Starter Template Components
            </h1>
            <div class="block py-6 h-1/6 fit-content">
                <h2 class="mb-4 text-base text-gray-700 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                    Dropdown Component
                </h2>
                <DropDown 
                  buttonText="'OWL Dropdown'" 
                  menuItems="state.menuItems" 
                  dropdownLeft="true" 
                  value="state.selectedMenu"
                  onSelectMenuItem.bind="onSelectMenuItem"
                  >
                </DropDown>
            </div>
            <div class="block py-6 fit-content">
                <h2 class="my-4 text-base text-gray-700 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                    Autocomplete Search Component
                </h2>
                <AutoCompleteInput 
                    data="state.searchData" 
                    value="state.selectedTechnology"
                    onOptionChosen.bind="onOptionChosen"
                    inputClass="'border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:shadow-outline w-full'"
                    placeHolder="'Type something...'"
                />
            </div>
        </div>
        <!--Right Col-->
        <div class="w-full xl:w-3/5 bg-storefront-colour bg-no-repeat bg-contain">
            <h1 class="my-4 text-2xl md:text-4xl text-gray-700 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                OWL State
            </h1>
            <div class="mx-auto">
                <pre class="bg-gray-100 bg-opacity-80 border-gray-900 border-2 text-xs w-1/2 rounded-md py-7 px-5 font-medium font-mono">
state.selectedMenu: <t t-esc="toJsonString(state.selectedMenu)"/>
state.selectedTechnology: <t t-esc="toJsonString(state.selectedTechnology)"/>
                </pre>
            </div>
        </div>
        <!--Footer-->
        <div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a class="text-gray-500 no-underline hover:no-underline" href="https://codingdodo.com">Coding Dodo - <t t-esc="fullYear"></t></a>
        </div>
    </div>
</main>
`;

export class Root extends Component {
  static template = ROOT_TEMPLATE;
  static components = { MyComponent, DropDown, AutoCompleteInput };
  state = useState({
    menuItems: [
      {
        id: "item-1",
        name: "OWL",
      },
      {
        id: "item-2",
        name: "Rollup.js",
      },
      {
        id: "item-3",
        name: "TailwindCSS",
      },
    ],
    selectedMenu: undefined,
    searchData: [
      { id: 1, name: "Rollup.js" },
      { id: 2, name: "Webpack" },
      { id: 3, name: "TailwindCSS" },
      { id: 4, name: "Bootstrap" },
      { id: 5, name: "Bulma" },
      { id: 6, name: "Snowpack" },
      { id: 7, name: "Astro" },
      { id: 8, name: "Vue" },
      { id: 9, name: "React" },
    ],
    selectedTechnology: undefined,
  });

  onSelectMenuItem(menuItem) {
    this.state.selectedMenu = menuItem;
  }

  onOptionChosen(selectedTechnology) {
    this.state.selectedTechnology = selectedTechnology;
  }

  toJsonString(obj) {
    return JSON.stringify(obj, undefined, 4);
  }

  get fullYear() {
    return new Date().getFullYear();
  }
}
