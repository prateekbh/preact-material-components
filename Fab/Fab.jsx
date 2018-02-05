import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import Icon from "../Icon/";
import generateThemeClass from "../themeUtils/generateThemeClass";

/**
 * @prop mini = false
 * @prop exited = false
 */
class Fab extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "fab";
    this._mdcProps = ["mini", "exited"];
    this.themeProps = ["primary", "secondary"];
  }
  componentDidMount() {
    super.attachRipple();
  }
  materialDom(props) {
    let className = props.class || props.className || "";
    this.themeProps.forEach(themeProp => {
      if (themeProp in props && props[themeProp] !== false)
        className += generateThemeClass(themeProp) + " ";
    });
    return (
      <button
        ref={control => (this.control = control)}
        {...props}
        class={className}
      >
        {props.children}
      </button>
    );
  }
}

class FabIcon extends Icon {
  constructor() {
    super();
    this.componentName = "fab__icon";
  }
}

Fab.Icon = FabIcon;
export default Fab;
