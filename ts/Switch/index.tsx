import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {MDCSwitch} from '@material/switch';

export interface ISwitchProps extends JSX.HTMLAttributes {
  disabled?: boolean;
}

export interface ISwitchState {}

export class Switch extends MaterialComponent<ISwitchProps, ISwitchState> {
  protected componentName = 'switch';
  protected mdcProps = ['disabled'];

  @autobind
  protected materialDom(allprops) {
    const {className, ...props} = allprops;
    return (
      <div className={className}>
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          <div class="mdc-switch__thumb">
              <input type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch" {...props}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Switch;
