import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';
import {MDCMenu} from '@material/menu';
import List from '../List';

/*
 * Default props for menu
 */
const defaultProps = {
  open: false
};

/**
 * @prop open = false
 */
class Menu extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'menu';
    this._mdcProps = [
      'open',
      'open-from-top-left',
      'open-from-top-right',
      'open-from-bottom-left',
      'open-from-bottom-right'
    ];
    this._select = this._select.bind(this);
    this._cancel = this._cancel.bind(this);
  }
  componentDidMount() {
    this.MDComponent = new MDCMenu(this.control);
    this.MDComponent.listen('MDCMenu:selected', this._select);
    this.MDComponent.listen('MDCMenu:cancel', this._cancel);
    toggleMenu(defaultProps, this.props, this.MDComponent);
  }
  componentWillUnmount() {
    this.MDComponent.unlisten('MDCMenu:selected', this._select);
    this.MDComponent.unlisten('MDCMenu:cancel', this._cancel);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  _select(e) {
    if (this.props.onSelect) {
      this.props.onSelect(e);
    }
    this._menuClosed();
  }
  _cancel(e) {
    if (this.props.onCancel) {
      this.props.onCancel(e);
    }
    this._menuClosed();
  }
  _menuClosed(e) {
    if (this.props.onMenuClosed) {
      this.props.onMenuClosed(e);
    }
  }
  componentWillUpdate(nextProps) {
    toggleMenu(this.props, nextProps, this.MDComponent);
  }
  materialDom(props) {
    return (
      <div tabindex="-1" {...props} ref={this.setControlRef}>
        <List className="mdc-menu__items" role="menu" aria-hidden="true">
          {props.children}
        </List>
      </div>
    );
  }
}

class MenuAnchor extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'menu-anchor';
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

Menu.Anchor = MenuAnchor;
Menu.Item = List.Item;
export default Menu;
