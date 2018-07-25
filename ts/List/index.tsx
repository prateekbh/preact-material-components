import {h} from 'preact';
import Icon from '../../Icon/index';
import MaterialComponent from '../MaterialComponent';

export interface IListItemProps {}

export interface IListItemState {}

export class ListItem extends MaterialComponent<
  IListItemProps,
  IListItemState
> {
  protected componentName = 'list-item';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <li role="option" {...props} ref={this.setControlRef}>
        {props.children}
      </li>
    );
  }
}

export class LinkItem<
  PropTypes = {},
  StateTypes = {}
> extends MaterialComponent<PropTypes, StateTypes> {
  protected componentName = 'list-item';
  protected mdcProps = [];

  public componentDidMount() {
    super.attachRipple();
  }

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
  protected componentName = 'list-item__text__primary';
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

  protected materialDom() {
    return <div />;
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
  'avatar-list'?: boolean;
}

export interface IListState {}

/**
 * @prop dense = false
 * @prop two-line = false
 * @prop interactive = false
 */
export class List extends MaterialComponent<IListProps, IListState> {
  public static readonly Item = ListItem;
  public static readonly LinkItem = LinkItem;
  public static readonly ItemGraphic = ListItemGraphic;
  public static readonly ItemMeta = ListItemMeta;
  public static readonly Divider = ListDivider;
  public static readonly TextContainer = ListTextContainer;
  public static readonly PrimaryText = ListPrimaryText;
  public static readonly SecondaryText = ListSecondaryText;
  public static readonly Group = ListGroup;
  public static readonly GroupHeader = ListGroupHeader;
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

export default List;
