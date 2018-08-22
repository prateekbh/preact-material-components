import autobind from 'autobind-decorator';
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
  public static readonly Icon = FabIcon;

  protected componentName = 'fab';
  protected mdcProps = ['mini', 'exited'];
  protected themeProps = ['primary', 'secondary'];

  @autobind
  protected materialDom(allprops) {
    const {ref, ...props} = allprops;
    const classNames: string[] = [];
    this.themeProps.forEach(themeProp => {
      if (themeProp in props && props[themeProp] !== false) {
        classNames.push(generateThemeClass(themeProp));
      }
    });

    return (
      <button
        ref={this.getSharedRefSetter(ref)}
        {...props}
        className={classNames.join(' ')}>
        {props.children}
      </button>
    );
  }
}

export default Fab;
