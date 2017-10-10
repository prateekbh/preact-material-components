import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCTemporaryDrawer } from "@material/drawer/temporary";
import { MDCPersistentDrawer } from "@material/drawer/persistent";
import List from "../List";

/*
 * Default props for drawers
 */
const defaultProps = {
  open: false
};

class TemporaryDrawer extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "temporary-drawer";
    this._open = this._open.bind(this);
    this._close = this._close.bind(this);
  }
  _open() {
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  }
  _close() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
  componentDidMount() {
    this.MDComponent = MDCTemporaryDrawer.attachTo(this.control);
    this.MDComponent.listen("MDCTemporaryDrawer:open", this._open);
    this.MDComponent.listen("MDCTemporaryDrawer:close", this._close);
    toggleDrawer(defaultProps, this.props, this.MDComponent);
  }
  componentWillUnmount() {
    this.MDComponent.unlisten("MDCTemporaryDrawer:close", this._close);
    this.MDComponent.unlisten("MDCTemporaryDrawer:open", this._open);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  componentWillUpdate(nextProps) {
    toggleDrawer(this.props, nextProps, this.MDComponent);
  }
  materialDom(props) {
    return (
      <aside
        className="mdc-typography"
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        <nav className="mdc-temporary-drawer__drawer">{props.children}</nav>
      </aside>
    );
  }
}

class TemporaryDrawerHeader extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "temporary-drawer__header";
  }
  materialDom(props) {
    return (
      <header
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        <div className="mdc-temporary-drawer__header-content">
          {props.children}
        </div>
      </header>
    );
  }
}

class TemporaryDrawerContent extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "temporary-drawer__content";
  }
  materialDom(props) {
    return (
      <nav
        className="mdc-list"
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        {props.children}
      </nav>
    );
  }
}

/**
 * @prop spacer = false
 */
class PermanentDrawer extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "permanent-drawer";
  }
  materialDom(props) {
    return (
      <nav className="mdc-typography" {...props}>
        {props.spacer && (
          <div className="mdc-permanent-drawer__toolbar-spacer" />
        )}
        <div className="mdc-permanent-drawer__content">
          <nav className="mdc-list">{props.children}</nav>
        </div>
      </nav>
    );
  }
}

class PermanentDrawerHeader extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "permanent-drawer__header";
  }
  materialDom(props) {
    return (
      <header
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        <div className="mdc-permanent-drawer__header-content">
          {props.children}
        </div>
      </header>
    );
  }
}

class PermanentDrawerContent extends TemporaryDrawerContent {
  constructor() {
    super();
    this.componentName = "permanent-drawer__content";
  }
}

class PersistentDrawer extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "persistent-drawer";
    this._open = this._open.bind(this);
    this._close = this._close.bind(this);
  }
  _open() {
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  }
  _close() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
  componentDidMount() {
    this.MDComponent = MDCPersistentDrawer.attachTo(this.control);
    this.MDComponent.listen("MDCPersistentDrawer:open", this._open);
    this.MDComponent.listen("MDCPersistentDrawer:close", this._close);
    toggleDrawer(defaultProps, this.props, this.MDComponent);
  }
  componentWillUnmount() {
    this.MDComponent.unlisten("MDCPersistentDrawer:close", this._close);
    this.MDComponent.unlisten("MDCPersistentDrawer:open", this._open);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  componentWillUpdate(nextProps) {
    toggleDrawer(this.props, nextProps, this.MDComponent);
  }
  materialDom(props) {
    return (
      <aside
        className="mdc-typography"
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        <nav className="mdc-persistent-drawer__drawer" />
      </aside>
    );
  }
}

class PersistentDrawerHeader extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "persistent-drawer__header";
  }
  materialDom(props) {
    return (
      <header
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        <div className="mdc-persistent-drawer__header-content">
          {props.children}
        </div>
      </header>
    );
  }
}

class PersistentDrawerContent extends TemporaryDrawerContent {
  constructor() {
    super();
    this.componentName = "persistent-drawer__content";
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
      returnedNode.attributes["className"] =
        "mdc-temporary-drawer--selected mdc-permanent-drawer--selected";
    }
    return returnedNode;
  }
}

/*
 * Function to add declarative opening/closing to drawer
 */
function toggleDrawer(oldprops, newprops, drawer) {
  if (
    "open" in oldprops &&
    "open" in newprops &&
    oldprops.open !== newprops.open
  ) {
    drawer.open = newprops.open;
  }
}

let Drawer = {};

Drawer.DrawerItem = DrawerItem;
Drawer.TemporaryDrawer = TemporaryDrawer;
Drawer.TemporaryDrawerHeader = TemporaryDrawerHeader;
Drawer.TemporaryDrawerContent = TemporaryDrawerContent;
Drawer.PermanentDrawer = PermanentDrawer;
Drawer.PermanentDrawerHeader = PermanentDrawerHeader;
Drawer.PermanentDrawerContent = PermanentDrawerContent;
Drawer.PersistentDrawer = PersistentDrawer;
Drawer.PersistentDrawerHeader = PersistentDrawerHeader;
Drawer.PersistentDrawerContent = PersistentDrawerContent;

export default Drawer;
