import {MDCIconToggle} from '@material/icon-toggle/';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

interface IconToggleData {
  label?: string;
  content?: string;
  cssClass?: string;
}

export interface IIconToggleProps {
  'data-toggle-on'?: IconToggleData;
  'data-toggle-off'?: IconToggleData;
}

export interface IIconToggleState {}

/**
 * @prop disabled = false
 */
export class IconToggle extends MaterialComponent<
  IIconToggleProps,
  IIconToggleState
> {
  protected componentName = 'icon-toggle';
  protected mdcProps = [];
  protected MDComponent: MDCIconToggle;

  public componentDidMount() {
    this.MDComponent = new MDCIconToggle(this.control);
    this.MDComponent.listen('MDCIconToggle:change', this.onChange);
  }

  public componentWillUnmount() {
    this.MDComponent.unlisten('MDCIconToggle:change', this.onChange);
    if (this.MDComponent.destroy) {
      this.MDComponent.destroy();
    }
  }

  protected onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  protected materialDom(props) {
    if (props['data-toggle-on']) {
      props['data-toggle-on'] = JSON.stringify(props['data-toggle-on']);
    }
    if (props['data-toggle-off']) {
      props['data-toggle-off'] = JSON.stringify(props['data-toggle-off']);
    }
    return (
      <i {...props} className="material-icons" ref={this.setControlRef}>
        {props.children}
      </i>
    );
  }
}

export default IconToggle;
