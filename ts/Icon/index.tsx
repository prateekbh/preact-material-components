import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface IIconProps {}

export interface IIconState {}

/**
 * @prop disabled = false
 */
export class Icon<PropsType = {}, StateType = {}> extends MaterialComponent<
  IIconProps & PropsType,
  IIconState & StateType
> {
  protected componentName = 'icon';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    const classes = ['material-icons'];
    // CardActionIcon sends className
    if (props.className) {
      classes.push(props.className);
    }
    return (
      <i {...props} className={classes.join(' ')}>
        {props.children}
      </i>
    );
  }
}

export default Icon;
