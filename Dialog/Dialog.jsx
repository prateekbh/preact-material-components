import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCDialog } from "@material/dialog/";
import Button from "../Button";
/**
 */
class Dialog extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "dialog";
    this._onAccept = this._onAccept.bind(this);
    this._onCancel = this._onCancel.bind(this);
  }
  componentDidMount() {
    this.MDComponent = new MDCDialog(this.control);
    this.MDComponent.listen("MDCDialog:accept", this._onAccept);
    this.MDComponent.listen("MDCDialog:cancel", this._onCancel);
  }
  componentWillUnmount() {
    this.MDComponent.unlisten("MDCDialog:accept", this._onAccept);
    this.MDComponent.unlisten("MDCDialog:cancel", this._onCancel);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  _onAccept(e) {
    if (this.props.onAccept) {
      this.props.onAccept(e);
    }
  }
  _onCancel(e) {
    if (this.props.onCancel) {
      this.props.onCancel(e);
    }
  }
  materialDom(props) {
    return (
      <aside
        role="alertdialog"
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        <div className="mdc-dialog__surface">{props.children}</div>
        <div className="mdc-dialog__backdrop" />
      </aside>
    );
  }
}

class DialogHeader extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "dialog__header";
  }
  materialDom(props) {
    return (
      <header {...props}>
        <h2 className="mdc-dialog__header__title">{props.children}</h2>
      </header>
    );
  }
}

/**
 * @prop scrollable = false
 */
class DialogBody extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "dialog__body";
    this._mdcProps = ["scrollable"];
  }
  materialDom(props) {
    return <section {...props}>{props.children}</section>;
  }
}

class DialogFooter extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "dialog__footer";
  }
  materialDom(props) {
    return <footer {...props}>{props.children}</footer>;
  }
}

/**
 * @prop cancel = false
 * @prop accept = false
 */
class DialogFooterButton extends Button {
  constructor() {
    super();
    this.componentName = "dialog__footer__button";
    this._mdcProps = ["cancel", "accept"];
  }
  materialDom(props) {
    return (
      <button
        {...props}
        className="mdc-button"
        ref={control => {
          this.control = control;
        }}
      >
        {props.children}
      </button>
    );
  }
}

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.FooterButton = DialogFooterButton;

export default Dialog;
