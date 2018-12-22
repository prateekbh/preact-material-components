import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IImageListSupportingProps {}

export interface IImageListSupportingState {}

export class ImageListSupporting extends MaterialComponent<
  IImageListSupportingProps,
  IImageListSupportingState
> {
  protected componentName = 'image-list__supporting';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}
