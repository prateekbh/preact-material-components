import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IImageListLabelProps {}

export interface IImageListLabelState {}

export class ImageListLabel extends MaterialComponent<
  IImageListLabelProps,
  IImageListLabelState
> {
  protected componentName = 'image-list__label';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef}>
        {props.children}
      </span>
    );
  }
}
