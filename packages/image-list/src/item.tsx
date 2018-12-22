import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IImageListItemProps {}

export interface IImageListItemState {}

export class ImageListItem extends MaterialComponent<
  IImageListItemProps,
  IImageListItemState
> {
  protected componentName = 'image-list__item';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <li {...props} ref={this.setControlRef}>
        {props.children}
      </li>
    );
  }
}
