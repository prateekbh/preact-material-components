import {MDCMenu} from '@material/menu';
import {h} from 'preact';
import List, {ListItem, IListItemProps, IListItemState} from '../List';
import {MDCComponent, MDCFoundation} from '../../MaterialComponentsWeb';
import MaterialComponent from '../MaterialComponent';

declare class MDCMenuFoundation extends MDCFoundation<MDCMenu> {
  public open(options?: {focusIndex?: number}): void;
  public close(evt?: Event): void;
}

declare class MDCMenu extends MDCComponent<MDCMenuFoundation> {
  public open: boolean;
  public items: Element[];
  public show(options?: {focusIndex?: number}): void;
  public hide(): void;
}

export interface IMenuAnchorProps {}

export interface IMenuAnchorState {}

export class MenuAnchor extends MaterialComponent<
  IMenuAnchorProps,
  IMenuAnchorState
> {
  protected componentName = 'menu-anchor';
  protected mdcProps = [];

  protected materialDom() {
    return <div />;
  }
}

export interface IMenuItemProps extends IListItemProps {}

export interface IMenuItemState extends IListItemState {}

export class MenuItem extends ListItem {}

export interface IMenuProps extends JSX.HTMLAttributes {
  open?: boolean;
  'open-from-top-left'?: boolean;
  'open-from-top-right'?: boolean;
  'open-from-bottom-left'?: boolean;
  'open-from-bottom-right'?: boolean;
  onSelect?: (e: Event) => void;
  onCancel?: (e: Event) => void;
  onMenuClosed?: (e: Event) => void;
}

export interface IMenuState {}

/**
 * @prop open = false
 */
export class Menu extends MaterialComponent<IMenuProps, IMenuState> {
  public static readonly defaultProps = {
    open: false
  };

  public static readonly Anchor = MenuAnchor;
  public static readonly Item = MenuItem;

  protected componentName = 'menu';
  protected mdcProps = [
    'open',
    'open-from-top-left',
    'open-from-top-right',
    'open-from-bottom-left',
    'open-from-bottom-right'
  ];
  protected MDComponent: MDCMenu;

  public componentDidMount() {
    this.MDComponent = new MDCMenu(this.control);
    this.MDComponent.listen('MDCMenu:selected', this.select);
    this.MDComponent.listen('MDCMenu:cancel', this.cancel);
    toggleMenu(Menu.defaultProps, this.props, this.MDComponent);
  }

  public componentWillUnmount() {
    this.MDComponent.unlisten('MDCMenu:selected', this.select);
    this.MDComponent.unlisten('MDCMenu:cancel', this.cancel);
    if (this.MDComponent.destroy) {
      this.MDComponent.destroy();
    }
  }

  public componentWillUpdate(nextProps) {
    toggleMenu(this.props, nextProps, this.MDComponent);
  }

  protected select(e) {
    if (this.props.onSelect) {
      this.props.onSelect(e);
    }
    this.menuClosed(e);
  }

  protected cancel(e) {
    if (this.props.onCancel) {
      this.props.onCancel(e);
    }
    this.menuClosed(e);
  }

  protected menuClosed(e) {
    if (this.props.onMenuClosed) {
      this.props.onMenuClosed(e);
    }
  }

  protected materialDom(props) {
    return (
      <div tabindex="-1" {...props} ref={this.setControlRef}>
        <List className="mdc-menu__items" role="menu" aria-hidden="true">
          {props.children}
        </List>
      </div>
    );
  }
}

/*
 * Function to add declarative opening/closing to drawer
 */
function toggleMenu(oldprops, newprops, menu) {
  if (
    'open' in oldprops &&
    'open' in newprops &&
    oldprops.open !== newprops.open
  ) {
    menu.open = newprops.open;
  }
}

export default Menu;
