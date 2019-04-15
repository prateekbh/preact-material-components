import {MDCIconButtonToggle} from '@material/icon-button';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {ComponentProp} from '@preact-material-components/base/lib/types';
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
    if (this.control) {
      this.MDComponent = new MDCIconButtonToggle(this.control);
      this.MDComponent.listen('MDCIconButtonToggle:change', this.onChange);
    }
  }
  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
      this.MDComponent.unlisten('MDCIconButtonToggle:change', this.onChange);
    }
  }

  protected onChange = e => {
    const {isOn} = e.detail;
    this.proxyEventHandler('onChange', e, {isOn});
  };

  protected materialDom(props) {
    return (
      <button ref={this.setControlRef} {...props}>
        {this.props.children}
      </button>
    );
  }
}
