import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IImageListImageProps {
  src: string; // TODO: add to docs
}

export interface IImageListImageState {}

export class ImageListImage extends MaterialComponent<
  IImageListImageProps,
  IImageListImageState
> {
  protected componentName = 'image-list__image';
  protected mdcProps = [];

  protected materialDom(allprops) {
    const {src, ...props} = allprops;
    return (
      <img src={src} {...props} ref={this.setControlRef}>
        {props.children}
      </img>
    );
  }
}
