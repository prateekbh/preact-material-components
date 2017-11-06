import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCRadio } from "@material/radio/";

/*
 * Default props for check box
 */
const defaultProps = {
  checked: false
};

/**
 * @prop mini = false
 * @prop plain = false
 */
export default class Radio extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "radio";
  }
  componentDidMount() {
    this.MDComponent = MDCRadio.attachTo(this.control);
    toggleRadio(defaultProps, this.props, this.MDComponent);
  }
  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  componentWillUpdate(nextProps) {
    toggleRadio(this.props, nextProps, this.MDComponent);
  }
  materialDom(allprops) {
    const { className, ...props } = allprops;
    return (
      <div
        className={className}
        ref={control => {
          this.control = control;
        }}
      >
        <input className="mdc-radio__native-control" type="radio" {...props} />
        <div className="mdc-radio__background">
          <div className="mdc-radio__outer-circle" />
          <div className="mdc-radio__inner-circle" />
        </div>
      </div>
    );
  }
}

/*
 * Function to add declarative checked to radio
 */
function toggleRadio(oldprops, newprops, radio) {
  if (
    "checked" in oldprops &&
    "checked" in newprops &&
    oldprops.checked !== newprops.checked
  ) {
    radio.checked = newprops.checked;
  }
}
