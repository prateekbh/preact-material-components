import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop dense = false
 * @prop two-line = false
 * @prop interactive = false
 */
class List extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "list";
    this._mdcProps = ["dense", "two-line"];
  }
  materialDom(props) {
    if (props.interactive) {
      return (
        <nav ref={control => (this.control = control)} {...props}>
          {props.children}
        </nav>
      );
    }

    return (
      <ul {...props} ref={control => (this.control = control)}>
        {props.children}
      </ul>
    );
  }
}

class ListItem extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "list-item";
  }
  materialDom(props) {
    return (
      <li role="option" {...props} ref={control => (this.control = control)}>
        {props.children}
      </li>
    );
  }
}

class LinkItem extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "list-item";
  }
  componentDidMount() {
    super.attachRipple();
  }
  materialDom(props) {
    return (
      <a role="option" {...props} ref={control => (this.control = control)}>
        {props.children}
      </a>
    );
  }
}

/**
 * @prop start-detail = true
 * @prop end-detail = false
 */
class ListItemIcon extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "mdc-list-item__icon";
  }
  getProxyClassName(props) {
    let classNames = [];

    // default behavior
    props["start-detail"] = props["start-detail"] || true;

    // setting class names mutually exclusive
    if (props["end-detail"]) {
      classNames.push("mdc-list-item__end-detail");
    } else if (props["start-detail"]) {
      classNames.push("mdc-list-item__start-detail");
    }
    return classNames.join(" ");
  }
  materialDom(props) {
    const className = "material-icons " + this.getProxyClassName(props);
    return (
      <i
        className={className}
        aria-hidden="true"
        {...props}
        ref={control => (this.control = control)}
      >
        {props.children}
      </i>
    );
  }
}

/**
 * @prop start-detail = true
 * @prop end-detail = false
 */
class ListItemAvatar extends ListItemIcon {
  constructor() {
    super();
    this.componentName = "mdc-list-item__avatar";
  }
  materialDom(props) {
    return (
      <img
        {...props}
        className={super.getProxyClassName(props)}
        {...props}
        ref={control => (this.control = control)}
        width={props.width || "56"}
        height={props.height || "56"}
        alt={props.alt || ""}
      />
    );
  }
}

class ListDivider extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "list-divider";
    this._mdcProps = ["inset"];
  }
  materialDom(props) {
    return (
      <li
        role="separator"
        {...props}
        ref={control => (this.control = control)}
      />
    );
  }
}

class ListTextContainer extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "list-item__text";
  }
  materialDom(props) {
    return (
      <span {...props} ref={control => (this.control = control)}>
        {props.children}
      </span>
    );
  }
}

class ListPrimaryText extends ListTextContainer {
  constructor() {
    super();
    this.componentName = "list-item__text__primary";
  }
}

class ListSecondaryText extends ListTextContainer {
  constructor() {
    super();
    this.componentName = "list-item__text__secondary";
  }
}

List.Item = ListItem;
List.LinkItem = LinkItem;
List.ItemIcon = ListItemIcon;
List.ItemAvatar = ListItemAvatar;
List.Divider = ListDivider;
List.TextContainer = ListTextContainer;
List.PrimaryText = ListPrimaryText;
List.SecondaryText = ListSecondaryText;

export default List;
