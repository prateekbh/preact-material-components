import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Icon from '../Icon';
import generateThemeClass from '../themeUtils/generateThemeClass';

export class FabIcon extends Icon {
  protected componentName = 'fab__icon';
}

export interface IFabProps {
  ripple?: boolean;
  mini?: boolean;
  exited?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export interface IFabState {}

export class Fab extends MaterialComponent<IFabProps, IFabState> {
  protected componentName = 'fab';
  protected mdcProps = ['mini', 'exited'];
  protected themeProps = ['primary', 'secondary'];

  protected materialDom(props) {
    const classNames: string[] = [];
    this.themeProps.forEach(themeProp => {
      if (themeProp in props && props[themeProp] !== false) {
        classNames.push(generateThemeClass(themeProp));
      }
    });

    return (
      <button
        ref={this.setControlRef}
        {...props}
        className={classNames.join(' ')}>
        {props.children}
      </button>
    );
  }
}

export default class extends Fab {
  public static readonly Icon = FabIcon;
}
