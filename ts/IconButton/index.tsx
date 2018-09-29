import {MDCIconButtonToggle} from '@material/icon-button';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface IIconButtonProps {
  disabled?: boolean;
}

export interface IIconButtonState {}

export interface IIconProps {
  on?: boolean;
  element?: boolean;
}

export interface IIconState {}

export class Icon extends MaterialComponent<IIconProps, IIconState> {
  protected componentName = 'icon-button__icon';
  protected mdcProps = ['on'];
  protected materialDom(props) {
    const IconElement = props.element || 'i';
    return (
      <IconElement class="material-icons" {...props}>
        {props.children}
      </IconElement>
    );
  }
}

export class IconButton extends MaterialComponent<
  IIconButtonProps,
  IIconButtonState
> {
  public MDComponent?: MDCIconButtonToggle;

  protected componentName = 'icon-button';
  protected mdcProps = [];

  public componentDidMount() {
    super.componentDidMount();
    this.MDComponent = new MDCIconButtonToggle(this.control);
  }
  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  protected materialDom(props) {
    return (
      <button ref={this.setControlRef} {...props}>
        {this.props.children}
      </button>
    );
  }
}

export default class extends IconButton {
  public static readonly Icon = Icon;
}
