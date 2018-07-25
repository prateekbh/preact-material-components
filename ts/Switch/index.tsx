import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface ISwitchProps extends JSX.HTMLAttributes {
  disabled?: boolean;
}

export interface ISwitchState {}

export class Switch extends MaterialComponent<ISwitchProps, ISwitchState> {
  protected componentName = 'switch';
  protected mdcProps = ['disabled'];

  protected materialDom(allprops) {
    const {className, ...props} = allprops;
    return (
      <div className={className}>
        <input
          type="checkbox"
          className="mdc-switch__native-control"
          {...props}
        />
        <div className="mdc-switch__background">
          <div className="mdc-switch__knob" />
        </div>
      </div>
    );
  }
}

export default Switch;
