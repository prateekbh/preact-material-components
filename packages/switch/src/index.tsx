import {MDCSwitch} from '@material/switch';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ISwitchProps extends JSX.HTMLAttributes {
  disabled?: boolean;
  checked?: boolean;
}

export interface ISwitchState {}

export class Switch extends MaterialComponent<ISwitchProps, ISwitchState> {
  public MDComponent?: MDCSwitch;
  protected componentName = 'switch';
  protected mdcProps = ['disabled', 'checked'];

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
              {...props}
            />
          </div>
        </div>
      </div>
    );
  }
}
