import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface IGridListProps extends JSX.HTMLAttributes {
  'tile-gutter-1'?: boolean;
  'header-caption'?: boolean;
  'twoline-caption'?: boolean;
  'with-icon-align': "start"|"end";
  'aspect-ratio': "1x1"|"16x9"|"2x3"|"3x2"|"4x3"|"3x4";
}
export default class GridList extends MaterialComponent<IGridListProps, {}> {
  public validationValuesByKey: {
    "with-icon-align": ["start", "end"],
    "tile-aspect": ["1x1", "16x9", "2x3", "3x2", "4x3", "3x4"]
  };

  isValidValue(validationValues: string[], testValue: string): boolean;

  mapClassName(propKey: string, props: IGridListProps): string;
}

export class Tiles extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class Tile extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class PrimaryTile extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class PrimaryContentTile extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class SecondaryTile extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class TitleTile extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class SupportTextTile extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class IconTile extends MaterialComponent<JSX.HTMLAttributes, {}> {}