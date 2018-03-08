import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';

/**
 * @prop dense = false
 * @prop two-line = false
 * @prop interactive = false
 */
class List extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'list';
    this._mdcProps = ['dense', 'two-line'];
  }
  materialDom(props) {
    if (props.interactive) {
      return (
        <nav ref={this.setControlRef} {...props}>
          {props.children}
        </nav>
      );
    }

    return (
      <ul {...props} ref={this.setControlRef}>
        {props.children}
      </ul>
    );
  }
}

class ListItem extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'list-item';
  }
  materialDom(props) {
    return (
      <li role="option" {...props} ref={this.setControlRef}>
        {props.children}
      </li>
    );
  }
}

class LinkItem extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'list-item';
  }
  componentDidMount() {
    super.attachRipple();
  }
  materialDom(props) {
    return (
      <a role="option" {...props} ref={this.setControlRef}>
        {props.children}
      </a>
    );
  }
}

/**
 * @prop graphic = true
 * @prop meta = false
 */
class ListItemIcon extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'mdc-list-item__icon';
  }
  getProxyClassName(props) {
    let classNames = [];

    // default behavior
    props['graphic'] = props['graphic'] || true;

    // setting class names mutually exclusive
    if (props['meta']) {
      classNames.push('mdc-list-item__meta');
    } else if (props['graphic']) {
      classNames.push('mdc-list-item__graphic');
    }
    return classNames.join(' ');
  }
  materialDom(props) {
    const className = 'material-icons ' + this.getProxyClassName(props);
    return (
      <i
        className={className}
        aria-hidden="true"
        {...props}
        ref={this.setControlRef}>
        {props.children}
      </i>
    );
  }
}

/**
 * @prop graphic = true
 * @prop meta = false
 */
class ListItemAvatar extends ListItemIcon {
  constructor() {
    super();
    this.componentName = 'mdc-list-item__avatar';
  }
  materialDom(props) {
    return (
      <img
        {...props}
        className={super.getProxyClassName(props)}
        {...props}
        ref={this.setControlRef}
        width={props.width || '56'}
        height={props.height || '56'}
        alt={props.alt || ''}
      />
    );
  }
}

class ListDivider extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "list-divider";
    this._mdcProps = ['inset'];
  }
  materialDom(props) {
    return <li role="separator" {...props} ref={this.setControlRef} />;
  }
}

class ListTextContainer extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'list-item__text';
  }
  materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef}>
        {props.children}
      </span>
    );
  }
}

class ListPrimaryText extends ListTextContainer {
  constructor() {
    super();
    this.componentName = 'list-item__text__primary';
  }
}

class ListSecondaryText extends ListTextContainer {
  constructor() {
    super();
    this.componentName = 'list-item__secondary-text';
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
