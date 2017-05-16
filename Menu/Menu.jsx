import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSimpleMenu } from "@material/menu";
import List from "../List";

/**
 * @prop open = false
 */
class Menu extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "simple-menu";
    this._mdcProps = [
      "open",
      "open-from-top-left",
      "open-from-top-right",
      "open-from-bottom-left",
      "open-from-bottom-right"
    ];
  }
  componentDidMount() {
    this.MDComponent = new MDCSimpleMenu(this.control);
  }
  materialDom(props) {
    return (
      <div tabindex="-1" {...props} ref={control => (this.control = control)}>
        <ul
          class="mdc-simple-menu__items mdc-list"
          role="menu"
          aria-hidden="true"
        >
          {props.children}
        </ul>
      </div>
    );
  }
}

class MenuAnchor extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "menu-anchor";
  }
}

Menu.Anchor = MenuAnchor;
Menu.Item = List.Item;
export default Menu;
