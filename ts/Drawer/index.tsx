import {MDCPersistentDrawer} from '@material/drawer/persistent';
import {MDCTemporaryDrawer} from '@material/drawer/temporary';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {ListLinkItem} from '../List';

export interface IDrawerProps {
  onOpen?: (e: Event) => void;
  onClose?: (e: Event) => void;
}

export interface IDrawerState {}

/**
 * Default props for drawers
 */
const defaultProps = {
  open: false
};

export class TemporaryDrawer extends MaterialComponent<
  IDrawerProps,
  IDrawerState
> {
  protected componentName = 'drawer--temporary';
  protected mdcProps = [];
  protected MDComponent?: MDCTemporaryDrawer;

  public componentDidMount() {
    if (this.control) {
      this.MDComponent = new MDCTemporaryDrawer(this.control);
      this.MDComponent.listen('MDCTemporaryDrawer:open', this.open);
      this.MDComponent.listen('MDCTemporaryDrawer:close', this.close);
      toggleDrawer(defaultProps, this.props, this.MDComponent);
    }
  }

  public componentWillUnmount() {
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCTemporaryDrawer:close', this.close);
      this.MDComponent.unlisten('MDCTemporaryDrawer:open', this.open);
      this.MDComponent.destroy();
    }
  }

  public componentWillUpdate(nextProps) {
    toggleDrawer(this.props, nextProps, this.MDComponent);
  }

  @autobind
  protected open(e) {
    if (this.props.onOpen) {
      this.props.onOpen(e);
    }
  }

  @autobind
  protected close(e) {
    if (this.props.onClose) {
      this.props.onClose(e);
    }
  }

  @autobind
  protected materialDom(props) {
    return (
      <aside
        className="mdc-typography mdc-drawer"
        ref={this.setControlRef}
        {...props}>
        <nav className="mdc-drawer__drawer">{props.children}</nav>
      </aside>
    );
  }
}

export interface IPermanentDrawerProps {
  spacer?: boolean;
}

export interface IPermanentDrawerState {}

/**
 * @prop spacer = false
 */
export class PermanentDrawer extends MaterialComponent<
  IPermanentDrawerProps,
  IPermanentDrawerState
> {
  protected componentName = 'drawer--permanent';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    return (
      <nav className="mdc-typography mdc-drawer" {...props}>
        {props.spacer && <div className="mdc-drawer__toolbar-spacer" />}
        <div className="mdc-drawer__content">
          <nav className="mdc-list">{props.children}</nav>
        </div>
      </nav>
    );
  }
}

export interface IPersistentDrawerProps extends IDrawerProps {}

export interface IPersistentDrawerState extends IDrawerState {}

export class PersistentDrawer extends MaterialComponent<
  IPersistentDrawerProps,
  IPersistentDrawerState
> {
  protected componentName = 'drawer--persistent';
  protected mdcProps = [];
  protected MDComponent?: MDCPersistentDrawer;

  public componentDidMount() {
    if (this.control) {
      this.MDComponent = new MDCPersistentDrawer(this.control);
      this.MDComponent.listen('MDCPersistentDrawer:open', this.open);
      this.MDComponent.listen('MDCPersistentDrawer:close', this.close);
      toggleDrawer(defaultProps, this.props, this.MDComponent);
    }
  }

  public componentWillUnmount() {
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCPersistentDrawer:close', this.close);
      this.MDComponent.unlisten('MDCPersistentDrawer:open', this.open);
      this.MDComponent.destroy();
    }
  }

  public componentWillUpdate(nextProps) {
    toggleDrawer(this.props, nextProps, this.MDComponent);
  }

  @autobind
  protected open(e) {
    if (this.props.onOpen) {
      this.props.onOpen(e);
    }
  }

  @autobind
  protected close(e) {
    if (this.props.onClose) {
      this.props.onClose(e);
    }
  }

  @autobind
  protected materialDom(props) {
    return (
      <aside
        className="mdc-typography mdc-drawer"
        ref={this.setControlRef}
        {...props}>
        <nav className="mdc-drawer__drawer">{props.children}</nav>
      </aside>
    );
  }
}

export interface IDrawerHeaderProps {}

export interface IDrawerHeaderState {}

export class DrawerHeader extends MaterialComponent<
  IDrawerHeaderProps,
  IDrawerHeaderState
> {
  protected componentName = 'drawer__header';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    return (
      <header ref={this.setControlRef} {...props}>
        <div className="mdc-drawer__header-content">{props.children}</div>
      </header>
    );
  }
}

export interface IDrawerContentProps {}

export interface IDrawerContentState {}

export class DrawerContent<
  PropsType = {},
  StateType = {}
> extends MaterialComponent<
  PropsType & IDrawerContentProps,
  StateType & IDrawerContentState
> {
  protected componentName = 'drawer__content';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    return (
      <nav className="mdc-list" ref={this.setControlRef} {...props}>
        {props.children}
      </nav>
    );
  }
}

export interface IDrawerItemProps {
  selected?: boolean;
}

export interface IDrawerItemState {}

/**
 * @prop selected = false
 */
export class DrawerItem extends ListLinkItem<
  IDrawerItemProps,
  IDrawerItemState
> {
  @autobind
  protected materialDom(props) {
    const returnedNode = super.materialDom(props);
    /* Logic to add selected class */
    if (props.selected) {
      returnedNode.attributes.className = 'mdc-list-item--activated';
    }
    return returnedNode;
  }
}

/**
 * Function to add declarative opening/closing to drawer
 */
function toggleDrawer(oldprops, newprops, drawer) {
  if (
    'open' in oldprops &&
    'open' in newprops &&
    oldprops.open !== newprops.open
  ) {
    drawer.open = newprops.open;
  }
}

export const Drawer = {
  DrawerContent,
  DrawerHeader,
  DrawerItem,
  PermanentDrawer,
  PersistentDrawer,
  TemporaryDrawer
};

export default Drawer;
