import {MDCIconButtonToggle} from '@material/icon-button';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Icon from '../Icon';

export interface IIconButtonProps {
  'data-toggle-on-content'?: boolean;
  'data-toggle-off-content'?: boolean;
  'data-toggle-on-label'?: boolean;
  'data-toggle-off-label'?: boolean;
}

export interface IIconButtonState {}

export class IconButton extends MaterialComponent<
  IIconButtonProps,
  IIconButtonState
> {
  public static readonly Icon = Icon;

  protected componentName = 'icon-button';
  protected mdcProps = [];

  protected MDComponent?: MDCIconButtonToggle;

  public componentDidMount() {
    super.componentDidMount();
    this.MDComponent = new MDCIconButtonToggle(this.control);
    this.MDComponent.listen('MDCIconButtonToggle:change', this.onChange);
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCIconButtonToggle:change', this.onChange);
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
