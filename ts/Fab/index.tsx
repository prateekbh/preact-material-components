import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Icon from '../Icon/index';

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
  public static readonly Icon = FabIcon;

  protected componentName = 'fab';
  protected mdcProps = ['mini', 'exited'];

  @autobind
  protected materialDom(props) {

    return (
      <button
        ref={this.setControlRef}
        {...props}>
        {props.children}
      </button>
    );
  }
}

export default Fab;
