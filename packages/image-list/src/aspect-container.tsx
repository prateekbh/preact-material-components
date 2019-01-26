import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IImageListAspectContainerProps {}

export interface IImageListAspectContainerState {}

export class ImageListAspectContainer extends MaterialComponent<
  IImageListAspectContainerProps,
  IImageListAspectContainerState
> {
  protected componentName = 'image-list__image-aspect-container';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}
