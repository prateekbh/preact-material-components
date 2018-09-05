import {bind} from 'bind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Icon from '../Icon';

function notEmptyString(val: string) {
  return val !== '';
}

// TODO: Lacks documentation
export interface IGridListTilesProps {}

export interface IGridListTilesState {}

export class GridListTiles extends MaterialComponent<
  IGridListTilesProps,
  IGridListTilesState
> {
  protected componentName = 'grid-list__tiles';
  protected mdcProps = [];

  @bind
  protected materialDom(props) {
    return <ul {...props}>{props.children}</ul>;
  }
}

// TODO: Lacks documentation
export interface IGridListTileProps {}

export interface IGridListTileState {}

export class GridListTile extends MaterialComponent<
  IGridListTileProps,
  IGridListTileState
> {
  protected componentName = 'grid-tile';
  protected mdcProps = [];

  @bind
  protected materialDom(props) {
    return <li {...props}>{props.children}</li>;
  }
}

// TODO: Lacks documentation
export interface IGridListPrimaryTileProps {}

export interface IGridListPrimaryTileState {}

export class GridListPrimaryTile extends MaterialComponent<
  IGridListPrimaryTileProps,
  IGridListPrimaryTileState
> {
  protected componentName = 'grid-tile__primary';
  protected mdcProps = [];

  @bind
  protected materialDom(props) {
    return <div {...props}>{props.children}</div>;
  }
}

// TODO: Lacks documentation
export interface IGridListPrimaryContentTileProps {
  src: string;
}

export interface IGridListPrimaryContentTileState {}

export class GridListPrimaryContentTile extends MaterialComponent<
  IGridListPrimaryContentTileProps,
  IGridListPrimaryContentTileState
> {
  protected componentName = 'grid-tile__primary-content';
  protected mdcProps = [];

  @bind
  protected materialDom(allprops) {
    const {src, ...props} = allprops;
    return <img src={src} {...props} />;
  }
}

// TODO: Lacks documentation
export interface IGridListSecondaryTileProps {}

export interface IGridListSecondaryTileState {}

export class GridListSecondaryTile extends MaterialComponent<
  IGridListSecondaryTileProps,
  IGridListSecondaryTileState
> {
  protected componentName = 'grid-tile__secondary';
  protected mdcProps = [];

  @bind
  protected materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

// TODO: Lacks documentation
export interface IGridListTitleTileProps {}

export interface IGridListTitleTileState {}

export class GridListTitleTile extends MaterialComponent<
  IGridListTitleTileProps,
  IGridListTitleTileState
> {
  protected componentName = 'grid-tile__title';
  protected mdcProps = [];

  @bind
  protected materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

// TODO: Lacks documentation
export interface IGridListSupportTextTileProps {}

export interface IGridListSupportTextTileState {}

export class GridListSupportTextTile extends MaterialComponent<
  IGridListSupportTextTileProps,
  IGridListSupportTextTileState
> {
  protected componentName = 'grid-tile__support-text';
  protected mdcProps = [];

  @bind
  protected materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

class GridListIconTile extends Icon {
  protected componentName = 'grid-tile__icon';
}

export interface IGridListProps {
  'tile-gutter-1'?: boolean;
  'header-caption'?: boolean;
  'twoline-caption'?: boolean;
  'with-icon-align'?: 'start' | 'end';
  'tile-aspect'?: '1x1' | '16x9' | '2x3' | '3x2' | '4x3' | '3x4';
}

export interface IGridListState {}

export class GridList extends MaterialComponent<
  IGridListProps,
  IGridListState
> {
  protected static validationValuesByKey = {
    'tile-aspect': ['1x1', '16x9', '2x3', '3x2', '4x3', '3x4'],
    'with-icon-align': ['start', 'end']
  };

  protected componentName = 'grid-list';
  protected mdcProps = ['header-caption', 'twoline-caption', 'tile-gutter-1'];

  protected isValidValue(validationValues, testValue) {
    return (
      validationValues &&
      validationValues.findIndex(val => val === testValue) >= 0
    );
  }

  protected mapClassName(propKey, props) {
    const propValue = props[propKey];
    const validationValues = GridList.validationValuesByKey[propKey];

    return this.isValidValue(validationValues, propValue)
      ? `mdc-${this.componentName}--${propKey}-${propValue}`
      : '';
  }

  protected materialDom(props) {
    const className = Object.keys(GridList.validationValuesByKey)
      .map(key => {
        return this.mapClassName(key, props);
      })
      .filter(notEmptyString)
      .join(' ');

    return (
      <div {...props} className={className}>
        {props.children}
      </div>
    );
  }
}

export default class extends GridList {
  public static readonly Tiles = GridListTiles;
  public static readonly Tile = GridListTile;
  public static readonly PrimaryTile = GridListPrimaryTile;
  public static readonly PrimaryContentTile = GridListPrimaryContentTile;
  public static readonly SecondaryTile = GridListSecondaryTile;
  public static readonly TitleTile = GridListTitleTile;
  public static readonly SupportTextTile = GridListSupportTextTile;
  public static readonly IconTile = GridListIconTile;
}
