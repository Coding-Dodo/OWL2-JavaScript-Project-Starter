import {
  Component,
  useState,
  xml,
  useExternalListener,
  useRef,
} from "@odoo/owl";

const DROPDOWN_TEMPLATE = xml/*xml*/ `
<div t-ref="DropDown" class="relative inline-block text-left">
  <div>
    <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true" t-on-click.prevent="toggleDropDown">
      <t t-if="props.value">
        <t t-esc="props.value.name"/>
      </t>
      <t t-else="">
        <t t-esc="props.buttonText"/>
      </t>
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div t-attf-class="{{state.open ? 'opacity-100 z-50' : 'opacity-0'}} transition-opacity {{ props.dropdownLeft ? 'origin-top-left left-0' : 'origin-top-right right-0' }} absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <t t-foreach="props.menuItems" t-as="menuItem" t-key="menuItem.id">
        <t t-slot="menu-item">
          <a 
            t-on-click="() => this.onClickMenuItem(menuItem)" 
            t-attf-href="{{menuItem.target ? menuItem.target : '#'}}" 
            t-attf-class="hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm {{ props.value and props.value.id == menuItem.id ? 'bg-gray-100 text-gray-900': ''}}" 
            role="menuitem" 
            tabindex="-1" 
            t-att-id="menuItem.id"
          >
            <t t-esc="menuItem.name"/>
          </a>
        </t>
      </t>
    </div>
  </div>
</div>
`;

export class DropDown extends Component {
  static template = DROPDOWN_TEMPLATE;
  static props = {
    buttonText: { type: String },
    menuItems: {
      type: Array,
      element: {
        type: Object,
        id: String,
        target: { type: String, optional: true },
        name: String,
      },
    },
    onSelectMenuItem: { type: Function, optional: true },
    value: {
      type: Object,
      optional: true,
    },
    dropdownLeft: { type: Boolean, optional: true },
    slots: {},
  };
  state = useState({ open: false });
  dropdownContainerRef = useRef("DropDown");

  setup() {
    useExternalListener(window, "click", this.closeDropDown);
  }

  closeDropDown(event) {
    if (!this.dropdownContainerRef.el?.contains(event.target)) {
      this.state.open = false;
    }
  }

  toggleDropDown() {
    this.state.open = !this.state.open;
  }

  onClickMenuItem(menuItem) {
    this.props.onSelectMenuItem(menuItem);
    this.state.open = false;
  }
}
