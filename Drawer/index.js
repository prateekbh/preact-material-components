var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCTemporaryDrawer } from "@material/drawer/temporary";
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
    return h(
      "aside",
      _extends(
        {
          className: "mdc-typography",
          ref: control => {
            this.control = control;
          }
        },
        props
      ),
      h("nav", { className: "mdc-temporary-drawer__drawer" }, props.children)
    );
  }
}

class TemporaryDrawerHeader extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "temporary-drawer__header";
  }
  materialDom(props) {
    return h(
      "header",
      _extends(
        {
          ref: control => {
            this.control = control;
          }
        },
        props
      ),
      h(
        "div",
        { className: "mdc-temporary-drawer__header-content" },
        props.children
      )
    );
  }
}

class TemporaryDrawerContent extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "temporary-drawer__content";
  }
  materialDom(props) {
    return h(
      "nav",
      _extends(
        {
          className: "mdc-list",
          ref: control => {
            this.control = control;
          }
        },
        props
      ),
      props.children
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
    return h(
      "nav",
      _extends({ className: "mdc-typography" }, props),
      props.spacer &&
        h("div", { className: "mdc-permanent-drawer__toolbar-spacer" }),
      h(
        "div",
        { className: "mdc-permanent-drawer__content" },
        h("nav", { className: "mdc-list" }, props.children)
      )
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

export default Drawer;
