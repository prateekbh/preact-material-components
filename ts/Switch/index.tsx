import {MDCSwitch} from '@material/switch';
import {MDCSwitchFoundation} from '@material/switch/foundation';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import InputComponent from '../Base/InputComponent';

export interface ISwitchProps extends JSX.HTMLAttributes {
  disabled?: boolean;
}

export interface ISwitchState {}

export class Switch extends InputComponent<
  MDCSwitch,
  MDCSwitchFoundation,
  ISwitchProps,
  ISwitchState
> {
  protected componentName = 'switch';
  protected mdcProps = ['disabled'];
  protected MDComponent?: MDCSwitch;

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCSwitch(this.control);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  @autobind
  protected materialDom(allprops) {
    const {className, ...props} = allprops;
    return (
      <div className={className} ref={this.setControlRef}>
        <div class="mdc-switch__track" />
        <div class="mdc-switch__thumb-underlay">
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              ref={this.setInputRef}
              {...props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Switch;
