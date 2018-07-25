import {MDCIconButtonToggle} from '@material/icon-button';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Icon from '../Icon';

export interface IIconButtonProps {
  'data-toggle-on'?: string;
  'data-toggle-off'?: string;
}

export interface IIconButtonState {}

/**
 * TODO: Are these up-to-date?
 * @prop data-toggle-on-content="favorite"
 * @prop data-toggle-on-label="Remove from favorites"
 * @prop data-toggle-off-content="favorite_border"
 * @prop data-toggle-off-label="Add to favorites"
 */
export class IconButton extends MaterialComponent<
  IIconButtonProps,
  IIconButtonState
> {
  public static readonly Icon = Icon;

  protected componentName = 'icon-button';
  protected mdcProps = [];

  protected MDComponent: MDCIconButtonToggle;

  protected onChange(e: any) {} // TODO: Implement this method

  public componentDidMount() {
    this.MDComponent = new MDCIconButtonToggle(this.control);
    this.MDComponent.listen('MDCIconButtonToggle:change', this.onChange);
  }

  public componentWillUnmount() {
    this.MDComponent.unlisten('MDCIconButtonToggle:change', this.onChange);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }

  protected materialDom(props) {
    return (
      <button className="material-icons" ref={this.setControlRef} {...props}>
        {this.props.children}
      </button>
    );
  }
}

export default IconButton;
