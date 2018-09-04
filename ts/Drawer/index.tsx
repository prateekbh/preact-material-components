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

export interface ITemporaryDrawerProps extends IDrawerProps {}

export interface ITemporaryDrawerState extends IDrawerState {}

export class TemporaryDrawer extends MaterialComponent<
  ITemporaryDrawerProps,
  ITemporaryDrawerState
> {
  protected componentName = 'drawer--temporary';
  protected mdcProps = [];
  protected MDComponent?: MDCTemporaryDrawer;
  protected mdcNotifyProps = ['open'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCTemporaryDrawer(this.control);
      this.MDComponent.listen('MDCTemporaryDrawer:open', this.open);
      this.MDComponent.listen('MDCTemporaryDrawer:close', this.close);
    }
    this.afterComponentDidMount();
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCTemporaryDrawer:close', this.close);
      this.MDComponent.unlisten('MDCTemporaryDrawer:open', this.open);
      this.MDComponent.destroy();
    }
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

export interface IPermanentDrawerProps extends IDrawerProps {
  spacer?: boolean;
}

export interface IPermanentDrawerState extends IDrawerState {}

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

export interface IPersistentDrawerProps extends IDrawerProps {
  spacer?: boolean;
}

export interface IPersistentDrawerState extends IDrawerState {}

export class PersistentDrawer extends MaterialComponent<
  IPersistentDrawerProps,
  IPersistentDrawerState
> {
  protected componentName = 'drawer--persistent';
  protected mdcProps = [];
  protected MDComponent?: MDCPersistentDrawer;
  protected mdcNotifyProps = ['open'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCPersistentDrawer(this.control);
      this.MDComponent.listen('MDCPersistentDrawer:open', this.open);
      this.MDComponent.listen('MDCPersistentDrawer:close', this.close);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCPersistentDrawer:close', this.close);
      this.MDComponent.unlisten('MDCPersistentDrawer:open', this.open);
      this.MDComponent.destroy();
    }
    this.afterComponentDidMount();
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

export class Drawer {
  public static readonly DrawerContent = DrawerContent;
  public static readonly DrawerHeader = DrawerHeader;
  public static readonly DrawerItem = DrawerItem;
  public static readonly PermanentDrawer = PermanentDrawer;
  public static readonly PersistentDrawer = PersistentDrawer;
  public static readonly TemporaryDrawer = TemporaryDrawer;
}

export default Drawer;
