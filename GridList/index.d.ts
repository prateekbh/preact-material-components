import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

declare interface IGridListProps extends JSX.HTMLAttributes {
  'tile-gutter-1'?: boolean;
  'header-caption'?: boolean;
  'twoline-caption'?: boolean;
  'with-icon-align'?: 'start' | 'end';
  'tile-aspect'?: '1x1' | '16x9' | '2x3' | '3x2' | '4x3' | '3x4';
}
export default class GridList extends MaterialComponent<IGridListProps, {}> {
  static Tiles: typeof Tiles;
  static Tile: typeof Tile;
  static PrimaryTile: typeof PrimaryTile;
  static PrimaryContentTile: typeof PrimaryContentTile;
  static SecondaryTile: typeof SecondaryTile;
  static TitleTile: typeof TitleTile;
  static SupportTextTile: typeof SupportTextTile;
  static IconTile: typeof IconTile;

  public validationValuesByKey: {
    'with-icon-align': ['start', 'end'];
    'tile-aspect': ['1x1', '16x9', '2x3', '3x2', '4x3', '3x4'];
  };

  isValidValue(validationValues: string[], testValue: string): boolean;

  mapClassName(propKey: string, props: IGridListProps): string;
}

declare class Tiles extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class Tile extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class PrimaryTile extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class PrimaryContentTile extends MaterialComponent<
  JSX.HTMLAttributes,
  {}
> {}
declare class SecondaryTile extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class TitleTile extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class SupportTextTile extends MaterialComponent<
  JSX.HTMLAttributes,
  {}
> {}
declare class IconTile extends MaterialComponent<JSX.HTMLAttributes, {}> {}
