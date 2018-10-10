import {MDCDrawer} from '@material/drawer';
import {bind} from 'bind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {ListLinkItem} from '../List';

export interface IDrawerProps {
  onOpen?: (e: Event) => void;
  onClose?: (e: Event) => void;
}

export interface IDrawerHeaderProps {}

export interface IDrawerHeaderState {}

export class DrawerHeader extends MaterialComponent<
  IDrawerHeaderProps,
  IDrawerHeaderState
> {
  protected componentName = 'drawer__header';
  protected mdcProps = [];

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

  protected materialDom(props) {
    return (
      <div class="mdc-drawer__content">
        <nav className="mdc-list" ref={this.setControlRef} {...props}>
          {props.children}
        </nav>
      </div>
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
  protected materialDom(props) {
    const returnedNode = super.materialDom(props);
    /* Logic to add selected class */
    if (props.selected) {
      returnedNode.attributes.className = 'mdc-list-item--activated';
    }
    return returnedNode;
  }
}

export interface IDrawerProps extends JSX.HTMLAttributes {
  onAccept?: JSX.GenericEventHandler;
  onCancel?: JSX.GenericEventHandler;
  dismissible?: boolean;
  modal?: boolean;
}

export interface IDrawerState {}

export class Drawer extends MaterialComponent<IDrawerProps, IDrawerState> {
  public static readonly DrawerContent = DrawerContent;
  public static readonly DrawerHeader = DrawerHeader;
  public static readonly DrawerItem = DrawerItem;
  public MDComponent?: MDCDrawer;

  protected componentName = 'drawer-container';
  protected mdcProps = [];
  protected mdcNotifyProps = ['open'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control && (this.props.modal || this.props.dismissible)) {
      this.MDComponent = new MDCDrawer(this.control);
      this.MDComponent.listen('MDCDrawer:opened', this.onOpen);
      this.MDComponent.listen('MDCDrawer:closed', this.onClose);
    }
  }

  @bind
  protected onOpen(e) {
    if (this.props.onOpen) {
      this.props.onOpen(e);
    }
  }

  @bind
  protected onClose(e) {
    if (this.props.onClose) {
      this.props.onClose(e);
    }
  }

  protected materialDom(props) {
    const classes = ['mdc-drawer'];
    // cant use mdcProps cuz classes need to be on the inner child and not on root level
    if (props.modal) {
      classes.push('mdc-drawer--modal');
    } else if (props.dismissible) {
      classes.push('mdc-drawer--dismissible');
    }
    return (
      <div>
        <aside class={classes.join(' ')} ref={this.setControlRef} {...props}>
          {props.children}
        </aside>
        {props.modal && <div class="mdc-drawer-scrim" />}
      </div>
    );
  }
}

export default class extends Drawer {
  public static readonly DrawerContent = DrawerContent;
  public static readonly DrawerHeader = DrawerHeader;
  public static readonly DrawerItem = DrawerItem;
}
