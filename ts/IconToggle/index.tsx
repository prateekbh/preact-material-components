import {MDCIconToggle} from '@material/icon-toggle/';
import {bind} from 'bind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

interface IconToggleData {
  label?: string;
  content?: string;
  cssClass?: string;
}

export interface IIconToggleProps {
  'data-toggle-on'?: IconToggleData; // TODO: wrong docs?
  'data-toggle-off'?: IconToggleData; // TODO: wrong docs?
  disabled?: boolean;
}

export interface IIconToggleState {}

export class IconToggle extends MaterialComponent<
  IIconToggleProps,
  IIconToggleState
> {
  public MDComponent?: MDCIconToggle;
  protected componentName = 'icon-toggle';
  protected mdcProps = ['disabled'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCIconToggle(this.control);
      this.MDComponent.listen('MDCIconToggle:change', this.onChange);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCIconToggle:change', this.onChange);
      this.MDComponent.destroy();
    }
  }

  @bind
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
