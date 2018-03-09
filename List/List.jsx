import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';
import Icon from '../Icon';

/**
 * @prop dense = false
 * @prop two-line = false
 * @prop interactive = false
 */
class List extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'list';
    this._mdcProps = ['dense', 'two-line', 'avatar-list'];
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

class ListItemGraphic extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'list-item__graphic';
  }
  materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef} role="presentation">
        <Icon aria-hidden="true">{props.children}</Icon>
      </span>
    );
  }
}

class ListItemMeta extends ListItemGraphic {
  constructor() {
    super();
    this.componentName = 'list-item__meta';
  }
}

class ListDivider extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'list-divider';
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

class ListGroup extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'list-group';
  }
}

class ListGroupHeader extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'list-group__subheader';
  }
  materialDom(props) {
    return (
      <h3 {...props} ref={this.setControlRef}>
        {props.children}
      </h3>
    );
  }
}

List.Item = ListItem;
List.LinkItem = LinkItem;
List.ItemGraphic = ListItemGraphic;
List.ItemMeta = ListItemMeta;
List.Divider = ListDivider;
List.TextContainer = ListTextContainer;
List.PrimaryText = ListPrimaryText;
List.SecondaryText = ListSecondaryText;
List.Group = ListGroup;
List.GroupHeader = ListGroupHeader;

export default List;
