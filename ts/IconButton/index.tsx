import {MDCIconButtonToggle} from '@material/icon-button';
import {bind} from 'bind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Icon from '../Icon';

export {Icon as IconButtonIcon} from '../Icon';

export interface IIconButtonProps {
  'data-toggle-on-content'?: boolean;
  'data-toggle-off-content'?: boolean;
  'data-toggle-on-label'?: boolean;
  'data-toggle-off-label'?: boolean;
  disabled?: boolean;
}

export interface IIconButtonState {}

export class IconButton extends MaterialComponent<
  IIconButtonProps,
  IIconButtonState
> {
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

  @bind
  protected onChange(e: Event) {} // TODO: Implement this method

  protected materialDom(props) {
    return (
      <button className="material-icons" ref={this.setControlRef} {...props}>
        {this.props.children}
      </button>
    );
  }
}

export default class extends IconButton {
  public static readonly Icon = Icon;
}
