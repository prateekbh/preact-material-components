import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';
import {MDCTemporaryDrawer} from '@material/drawer/temporary';
import {MDCPersistentDrawer} from '@material/drawer/persistent';
import List from '../List';

/**
 * Default props for drawers
 */
const defaultProps = {
  open: false
};

class TemporaryDrawer extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'drawer--temporary';
    this._open = this._open.bind(this);
    this._close = this._close.bind(this);
  }
  _open(e) {
    if (this.props.onOpen) {
      this.props.onOpen(e);
    }
  }
  _close(e) {
    if (this.props.onClose) {
      this.props.onClose(e);
    }
  }
  componentDidMount() {
    this.MDComponent = MDCTemporaryDrawer.attachTo(this.control);
    this.MDComponent.listen('MDCTemporaryDrawer:open', this._open);
    this.MDComponent.listen('MDCTemporaryDrawer:close', this._close);
    toggleDrawer(defaultProps, this.props, this.MDComponent);
  }
  componentWillUnmount() {
    this.MDComponent.unlisten('MDCTemporaryDrawer:close', this._close);
    this.MDComponent.unlisten('MDCTemporaryDrawer:open', this._open);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  componentWillUpdate(nextProps) {
    toggleDrawer(this.props, nextProps, this.MDComponent);
  }
  materialDom(props) {
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

/**
 * @prop spacer = false
 */
class PermanentDrawer extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'drawer--permanent';
  }
  materialDom(props) {
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

class PersistentDrawer extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'drawer--persistent';
    this._open = this._open.bind(this);
    this._close = this._close.bind(this);
  }
  _open(e) {
    if (this.props.onOpen) {
      this.props.onOpen(e);
    }
  }
  _close(e) {
    if (this.props.onClose) {
      this.props.onClose(e);
    }
  }
  componentDidMount() {
    this.MDComponent = MDCPersistentDrawer.attachTo(this.control);
    this.MDComponent.listen('MDCPersistentDrawer:open', this._open);
    this.MDComponent.listen('MDCPersistentDrawer:close', this._close);
    toggleDrawer(defaultProps, this.props, this.MDComponent);
  }
  componentWillUnmount() {
    this.MDComponent.unlisten('MDCPersistentDrawer:close', this._close);
    this.MDComponent.unlisten('MDCPersistentDrawer:open', this._open);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  componentWillUpdate(nextProps) {
    toggleDrawer(this.props, nextProps, this.MDComponent);
  }
  materialDom(props) {
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

class DrawerHeader extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'drawer__header';
  }
  materialDom(props) {
    return (
      <header ref={this.setControlRef} {...props}>
        <div className="mdc-drawer__header-content">{props.children}</div>
      </header>
    );
  }
}

class DrawerContent extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'drawer__content';
  }
  materialDom(props) {
    return (
      <nav className="mdc-list" ref={this.setControlRef} {...props}>
        {props.children}
      </nav>
    );
  }
}

/**
 * @prop selected = false
 */
class DrawerItem extends List.LinkItem {
  constructor() {
    super();
  }
  materialDom(props) {
    const returnedNode = super.materialDom(props);
    /* Logic to add selected class */
    if (props.selected) {
      returnedNode.attributes['className'] = 'mdc-list-item--activated';
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

let Drawer = {};

Drawer.DrawerItem = DrawerItem;
Drawer.TemporaryDrawer = TemporaryDrawer;
Drawer.DrawerHeader = DrawerHeader;
Drawer.DrawerContent = DrawerContent;
Drawer.PermanentDrawer = PermanentDrawer;
Drawer.PersistentDrawer = PersistentDrawer;

export default Drawer;
