import Icon from '../Icon/index';
import MaterialComponent from '../Base/MaterialComponent';
import generateThemeClass from '../themeUtils/generateThemeClass';
import {h} from 'preact';

export class FabIcon extends Icon {
  protected componentName = 'fab__icon';
}

export interface IFabProps extends JSX.HTMLAttributes {
  mini?: boolean;
  exited?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export interface IFabState {}

/**
 * @prop mini = false
 * @prop exited = false
 */
export class Fab extends MaterialComponent<IFabProps, IFabState> {
  protected componentName = 'fab';
  protected mdcProps = ['mini', 'exited'];
  protected themeProps = ['primary', 'secondary'];

  public componentDidMount() {
    super.attachRipple();
  }

  protected materialDom(props) {
    const classNames = [];
    this.themeProps.forEach(themeProp => {
      if (themeProp in props && props[themeProp] !== false) {
        classNames.push(generateThemeClass(themeProp));
      }
    });

    return (
      <button ref={this.setControlRef} {...props} className={classNames.join(' ')}>
        {props.children}
      </button>
    );
  }

  public static readonly Icon = FabIcon;
}

export default Fab;
