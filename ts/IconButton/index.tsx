import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {MDCIconButtonToggle} from '@material/icon-button';

export interface IIconButtonProps {
  disabled?: boolean;
}

export interface IIconButtonState {}

export interface IButtonProps {
  on?: boolean;
  element?: boolean;
}

export interface IButtonState {}

class Button extends MaterialComponent<IButtonProps, IButtonState> {
  protected componentName = 'icon-button__icon';
  protected mdcProps = ['on'];
  protected materialDom(props) {
    const ButtonElement = props.element || 'i';
    return (
      <ButtonElement class="material-icons" {...props}>
        {props.children}
      </ButtonElement>
    );
  }
}

class IconButton extends MaterialComponent<IIconButtonProps, IIconButtonState> {
  public static readonly Icon = Button;

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

export default IconButton;
