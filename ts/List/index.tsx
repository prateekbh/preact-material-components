import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Icon from '../Icon';

export interface IListItemProps {}

export interface IListItemState {}

export class ListItem<
  PropTypes = {},
  StateTypes = {}
> extends MaterialComponent<
  IListItemProps & PropTypes,
  IListItemState & StateTypes
> {
  protected componentName = 'list-item';
  protected mdcProps: string[] = [];

  protected materialDom(props) {
    return (
      <li role="option" {...props} ref={this.setControlRef}>
        {props.children}
      </li>
    );
  }
}

export class ListLinkItem<
  PropTypes = {},
  StateTypes = {}
> extends MaterialComponent<PropTypes, StateTypes> {
  protected componentName = 'list-item';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <a role="option" {...props} ref={this.setControlRef}>
        {props.children}
      </a>
    );
  }
}

export interface IListItemGraphicProps {}

export interface IListItemGraphicState {}

export class ListItemGraphic extends MaterialComponent<
  IListItemGraphicProps,
  IListItemGraphicState
> {
  protected componentName = 'list-item__graphic';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef} role="presentation">
        <Icon aria-hidden="true">{props.children}</Icon>
      </span>
    );
  }
}

export class ListItemMeta extends ListItemGraphic {
  protected componentName = 'list-item__meta';
}

export interface IListDividerProps {
  inset?: boolean;
}

export interface IListDividerState {}

export class ListDivider extends MaterialComponent<
  IListDividerProps,
  IListDividerState
> {
  protected componentName = 'list-divider';
  protected mdcProps = ['inset'];

  protected materialDom(props) {
    return <li role="separator" {...props} ref={this.setControlRef} />;
  }
}

export interface IListTextContainerProps {}

export interface IListTextContainerState {}

export class ListTextContainer extends MaterialComponent<
  IListTextContainerProps,
  IListTextContainerState
> {
  protected componentName = 'list-item__text';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef}>
        {props.children}
      </span>
    );
  }
}

export class ListPrimaryText extends ListTextContainer {
  protected componentName = 'list-item__primary-text';
}

export class ListSecondaryText extends ListTextContainer {
  protected componentName = 'list-item__secondary-text';
}

export interface IListGroupProps {}

export interface IListGroupState {}

export class ListGroup extends MaterialComponent<
  IListGroupProps,
  IListGroupState
> {
  protected componentName = 'list-group';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}

export interface IListGroupHeaderProps {}

export interface IListGroupHeaderState {}

export class ListGroupHeader extends MaterialComponent<
  IListGroupHeaderProps,
  IListGroupHeaderState
> {
  protected componentName = 'list-group__subheader';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <h3 {...props} ref={this.setControlRef}>
        {props.children}
      </h3>
    );
  }
}

export interface IListProps {
  dense?: boolean;
  'two-line'?: boolean;
  'avatar-list'?: boolean; // TODO: Add to docs / remove from here
}

export interface IListState {}

export class List extends MaterialComponent<IListProps, IListState> {
  protected componentName = 'list';
  protected mdcProps = ['dense', 'two-line', 'avatar-list'];

  protected materialDom(props) {
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

export default class extends List {
  public static readonly Item = ListItem;
  public static readonly LinkItem = ListLinkItem;
  public static readonly ItemGraphic = ListItemGraphic;
  public static readonly ItemMeta = ListItemMeta;
  public static readonly Divider = ListDivider;
  public static readonly TextContainer = ListTextContainer;
  public static readonly PrimaryText = ListPrimaryText;
  public static readonly SecondaryText = ListSecondaryText;
  public static readonly Group = ListGroup;
  public static readonly GroupHeader = ListGroupHeader;
}
