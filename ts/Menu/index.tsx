import {MDCMenu} from '@material/menu';
import {bind} from 'bind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import List, {ListItem} from '../List';

export interface IMenuAnchorProps {}

export interface IMenuAnchorState {}

export class MenuAnchor extends MaterialComponent<
  IMenuAnchorProps,
  IMenuAnchorState
> {
  protected componentName = 'menu-anchor';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}

export class MenuItem extends ListItem {}

export interface IMenuProps {
  open?: boolean;
  'open-from-top-left'?: boolean; // TODO: Add to docs / remove from here
  'open-from-top-right'?: boolean; // TODO: Add to docs / remove from here
  'open-from-bottom-left'?: boolean; // TODO: Add to docs / remove from here
  'open-from-bottom-right'?: boolean; // TODO: Add to docs / remove from here

  onSelect?: (e: Event) => void;
  onCancel?: (e: Event) => void;
  onMenuClosed?: (e: Event) => void;
}

export interface IMenuState {}

export class Menu extends MaterialComponent<IMenuProps, IMenuState> {
  public static readonly defaultProps = {
    open: false
  };
  protected componentName = 'menu';
  protected mdcProps = [
    'open',
    'open-from-top-left',
    'open-from-top-right',
    'open-from-bottom-left',
    'open-from-bottom-right'
  ];
  protected MDComponent?: MDCMenu;
  protected mdcNotifyProps = ['open'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCMenu(this.control);
      this.MDComponent.listen('MDCMenu:selected', this.select);
      this.MDComponent.listen('MDCMenu:cancel', this.cancel);
    }
    this.afterComponentDidMount();
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCMenu:selected', this.select);
      this.MDComponent.unlisten('MDCMenu:cancel', this.cancel);
      this.MDComponent.destroy();
    }
  }

  @bind
  protected select(e) {
    if (this.props.onSelect) {
      this.props.onSelect(e);
    }
    this.menuClosed(e);
  }

  @bind
  protected cancel(e) {
    if (this.props.onCancel) {
      this.props.onCancel(e);
    }
    this.menuClosed(e);
  }

  @bind
  protected menuClosed(e) {
    if (this.props.onMenuClosed) {
      this.props.onMenuClosed(e);
    }
  }

  protected materialDom(props) {
    return (
      <div tabIndex="-1" {...props} ref={this.setControlRef}>
        <List className="mdc-menu__items" role="menu" aria-hidden="true">
          {props.children}
        </List>
      </div>
    );
  }
}

export default class extends Menu {
  public static readonly Anchor = MenuAnchor;
  public static readonly Item = MenuItem;
}
