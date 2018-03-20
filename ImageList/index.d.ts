import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

declare interface IImageListProps extends JSX.HTMLAttributes {
  masonry?: string;
}

export default class ImageList extends MaterialComponent<IImageListProps, {}> {
  static ListItem: typeof ImageListItem;
  static ListImage: typeof ImageListImage;
  static ListSupporting: typeof ImageListSupporting;
  static ListLabel: typeof ImageListLabel;
}

export class ImageListLabel extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class ImageListSupporting extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class ImageListImage extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class ImageListItem extends MaterialComponent<JSX.HTMLAttributes, {}> {}
