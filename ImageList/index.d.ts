import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

declare interface IImageListProps extends JSX.HTMLAttributes {
  masonry?: string;
  'with-text-protection'?: string;
}

export default class ImageList extends MaterialComponent<IImageListProps, {}> {
  static Item: typeof ImageListItem;
  static Image: typeof ImageListImage;
  static Supporting: typeof ImageListSupporting;
  static Label: typeof ImageListLabel;
  static Aspectcontainer: typeof ImageListAspectcontainer;
}

export class ImageListAspectcontainer extends MaterialComponent<
  JSX.HTMLAttributes,
  {}
> {}
export class ImageListLabel extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class ImageListSupporting extends MaterialComponent<
  JSX.HTMLAttributes,
  {}
> {}
export class ImageListImage extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class ImageListItem extends MaterialComponent<JSX.HTMLAttributes, {}> {}
