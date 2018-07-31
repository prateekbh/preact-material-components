import {MDCIconButtonToggle} from '@material/icon-button';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Icon from '../Icon';

export interface IIconButtonProps {
  'data-toggle-on'?: string;
  'data-toggle-off'?: string;
}

export interface IIconButtonState {}

export class IconButton extends MaterialComponent<
  IIconButtonProps,
  IIconButtonState
> {
  public static readonly Icon = Icon;

  protected componentName = 'icon-button';
  protected mdcProps = [];

  protected MDComponent: MDCIconButtonToggle;

  public componentDidMount() {
    super.componentDidMount();
    this.MDComponent = new MDCIconButtonToggle(this.control);
    this.MDComponent.listen('MDCIconButtonToggle:change', this.onChange);
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    this.MDComponent.unlisten('MDCIconButtonToggle:change', this.onChange);
    if (this.MDComponent.destroy) {
      this.MDComponent.destroy();
    }
  }

  @autobind
  protected onChange(e: any) {} // TODO: Implement this method

  @autobind
  protected materialDom(props) {
    return (
      <button className="material-icons" ref={this.setControlRef} {...props}>
        {this.props.children}
      </button>
    );
  }
}

export default IconButton;
