import {MDCIconButtonToggle} from '@material/icon-button';
import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {ComponentProp} from '@preact-material/base/lib/types';
import {h} from 'preact';

export interface IIconButtonIconProps {
  on?: boolean;
  element?: ComponentProp<any>;
}

export interface IIconButtonIconState {}

export class IconButtonIcon extends MaterialComponent<
  IIconButtonIconProps,
  IIconButtonIconState
> {
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

export interface IIconButtonProps {
  disabled?: boolean;
}

export interface IIconButtonState {}

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
