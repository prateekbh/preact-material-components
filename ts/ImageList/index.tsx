import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface IImageListAspectContainerProps {}

export interface IImageListAspectContainerState {}

export class ImageListAspectContainer extends MaterialComponent<
  IImageListAspectContainerProps,
  IImageListAspectContainerState
> {
  protected componentName = 'image-list__image-aspect-container';
  protected mdcProps = [];

  @autobind
  protected materialDom() {
    return <div>{this.props.children}</div>;
  }
}

export interface IImageListItemProps {}

export interface IImageListItemState {}

export class ImageListItem extends MaterialComponent<
  IImageListItemProps,
  IImageListItemState
> {
  protected componentName = 'image-list__item';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    return (
      <li {...props} ref={this.setControlRef}>
        {props.children}
      </li>
    );
  }
}

export interface IImageListImageProps {
  src: string;
}

export interface IImageListImageState {}

export class ImageListImage extends MaterialComponent<
  IImageListImageProps,
  IImageListImageState
> {
  protected componentName = 'image-list__image';
  protected mdcProps = [];

  @autobind
  protected materialDom() {
    const {src, ...props} = this.props;
    return (
      <img src={src} {...props} ref={this.setControlRef}>
        {props.children}
      </img>
    );
  }
}

export interface IImageListSupportingProps {}

export interface IImageListSupportingState {}

export class ImageListSupporting extends MaterialComponent<
  IImageListSupportingProps,
  IImageListSupportingState
> {
  protected componentName = 'image-list__supporting';
  protected mdcProps = [];

  @autobind
  protected materialDom() {
    return <div>{this.props.children}</div>;
  }
}

export interface IImageListLabelProps {}

export interface IImageListLabelState {}

export class ImageListLabel extends MaterialComponent<
  IImageListLabelProps,
  IImageListLabelState
> {
  protected componentName = 'image-list__label';
  protected mdcProps = [];

  @autobind
  protected materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef}>
        {props.children}
      </span>
    );
  }
}

export interface IImageListProps extends JSX.HTMLAttributes {
  masonry?: string;
  'with-text-protection'?: string;
}

export interface IImageListState {}

export class ImageList extends MaterialComponent<
  IImageListProps,
  IImageListState
> {
  public static readonly Item = ImageListItem;
  public static readonly AspectContainer = ImageListAspectContainer;
  public static readonly Image = ImageListImage;
  public static readonly Supporting = ImageListSupporting;
  public static readonly Label = ImageListLabel;

  protected componentName = 'image-list';
  protected mdcProps = ['masonry', 'with-text-protection'];

  @autobind
  protected materialDom(props) {
    return (
      <ul {...props} ref={this.setControlRef}>
        {props.children}
      </ul>
    );
  }
}

export default ImageList;
