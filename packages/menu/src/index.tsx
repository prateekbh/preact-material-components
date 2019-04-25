import {MDCMenu} from '@material/menu';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export * from './anchor';
export * from './divider';
export * from './item';

export interface IMenuProps {
  open?: boolean;
  onSelect?: (e: Event) => void;
  onCancel?: (e: Event) => void;
  onMenuClosed?: (e: Event) => void;
}

export interface IMenuState {}

export class Menu extends MaterialComponent<IMenuProps, IMenuState> {
  public MDComponent?: MDCMenu;

  protected componentName = 'menu';
  protected mdcProps = ['open'];
  protected mdcNotifyProps = ['open'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCMenu(this.control);
      this.MDComponent.listen('MDCMenu:selected', this.onSelect);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCMenu:selected', this.onSelect);
      this.MDComponent.destroy();
    }
  }

  protected onSelect = e => {
    const {item, index} = e.detail;
    this.proxyEventHandler('onSelect', e, {item, index});
  };

  protected materialDom(props) {
    return (
      <div
        class="mdc-menu-surface"
        tabIndex="-1"
        {...props}
        ref={this.setControlRef}>
        <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
          {props.children}
        </ul>
      </div>
    );
  }
}
