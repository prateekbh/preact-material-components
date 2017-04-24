import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCRadio } from "@material/radio/";

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
  }
  materialDom(allprops) {
    const { className, ...props } = allprops;
    return (
      <div
        className={className + ""}
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
