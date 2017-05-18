import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCTemporaryDrawer } from "@material/drawer/temporary";
import { MDCPersistentDrawer } from "@material/drawer/persistent";
import List from "../List";

class TemporaryDrawer extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "temporary-drawer";
  }
  componentDidMount() {
    this.MDComponent = MDCTemporaryDrawer.attachTo(this.control);
    this.MDComponent.listen("MDCTemporaryDrawer:open", () => {
      if (this.props.onOpen) {
        this.props.onOpen();
      }
    });

    this.MDComponent.listen("MDCTemporaryDrawer:close", () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    });
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
        <nav className="mdc-temporary-drawer__drawer">
          {props.children}
        </nav>
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
        {props.spacer &&
          <div className="mdc-permanent-drawer__toolbar-spacer" />}
        <div className="mdc-permanent-drawer__content">
          <nav className="mdc-list">
            {props.children}
          </nav>
        </div>
      </nav>
    );
  }
}

class PersistentDrawer extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "persistent-drawer";
  }
  componentDidMount() {
    this.MDComponent = MDCPersistentDrawer.attachTo(this.control);
    this.MDComponent.listen("MDCPersistentDrawer:open", () => {
      if (this.props.onOpen) {
        this.props.onOpen();
      }
    });

    this.MDComponent.listen("MDCPersistentDrawer:close", () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    });
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
    this.componentName = "mdc-persistent-drawer__content";
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

let Drawer = {};

Drawer.DrawerItem = DrawerItem;
Drawer.TemporaryDrawerHeader = TemporaryDrawerHeader;
Drawer.TemporaryDrawerContent = TemporaryDrawerContent;
Drawer.TemporaryDrawer = TemporaryDrawer;
Drawer.PermanentDrawer = PermanentDrawer;
Drawer.PermanentDrawer = PersistentDrawer;
Drawer.PersistentDrawer = PersistentDrawer;
Drawer.PersistentDrawerHeader = PersistentDrawerHeader;
Drawer.PersistentDrawerContent = PersistentDrawerContent;

export default Drawer;
