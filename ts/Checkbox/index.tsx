import {MDCCheckbox} from '@material/checkbox/';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface ICheckboxProps {
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: JSX.GenericEventHandler;
  checked?: boolean;
}

export interface ICheckboxState {}

export class Checkbox extends MaterialComponent<
  ICheckboxProps,
  ICheckboxState
> {
  public MDComponent?: MDCCheckbox;
  protected componentName = 'checkbox';
  protected mdcProps = ['disabled'];
  protected mdcNotifyProps = ['checked', 'indeterminate', 'disabled'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCCheckbox(this.control);
    }
    this.afterComponentDidMount();
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  protected materialDom(allprops) {
    return (
      <div ref={this.setControlRef}>
        <input
          type="checkbox"
          className="mdc-checkbox__native-control"
          {...allprops}
        />
        <div className="mdc-checkbox__background">
          <svg
            version="1.1"
            className="mdc-checkbox__checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark-path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
      </div>
    );
  }
}

export default Checkbox;
