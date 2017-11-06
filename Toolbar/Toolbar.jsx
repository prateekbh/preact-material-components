import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCToolbar } from "@material/toolbar";
/**
 * @prop fixed = false
 * @prop fixed-lastrow-only = false
 * @prop waterfall = false
 * @prop flexible = false
 * @prop flexible-default-behavior = false
 */
class Toolbar extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "toolbar";
    this._mdcProps = [
      "fixed",
      "fixed-lastrow-only",
      "waterfall",
      "flexible",
      "flexible-default-behavior"
    ];
    this._onChange = this._onChange.bind(this);
  }
  _onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  componentDidMount() {
    this.MDComponent = new MDCToolbar(this.control);
    this.MDComponent.listen("MDCToolbar:change", this._onChange);
  }
  componentWillUnmount() {
    this.MDComponent.unlisten("MDCToolbar:change", this._onChange);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  materialDom(props) {
    return (
      <header
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        {props.children}
      </header>
    );
  }
}

class ToolbarRow extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "toolbar__row";
  }
}

/**
 * @prop align-end = false
 * @prop align-start = false
 * @prop shrink-to-fit = false
 */
class ToolbarSection extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "toolbar__section";
    this._mdcProps = ["align-start", "align-end", "shrink-to-fit"];
  }
  materialDom(props) {
    return <section {...props}>{props.children}</section>;
  }
}

/**
 * @prop menu = false
 */
class ToolbarIcon extends MaterialComponent {
  constructor(props) {
    super();
    this.componentName = "toolbar__icon";
    if (props.menu) {
      this.componentName = "toolbar__menu-icon";
    }
  }
  materialDom(props) {
    return (
      <a className="material-icons" {...props}>
        {props.children || "menu"}
      </a>
    );
  }
}

/**
 * @prop title = ''
 */
class ToolbarTitle extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "toolbar__title";
  }
  materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

Toolbar.Section = ToolbarSection;
Toolbar.Icon = ToolbarIcon;
Toolbar.Title = ToolbarTitle;
Toolbar.Row = ToolbarRow;

export default Toolbar;
