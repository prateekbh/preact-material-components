import {
  MaterialComponent,
  MaterialComponentProps
} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export * from './aspect-container';
export * from './image';
export * from './item';
export * from './label';
export * from './supporting';

export interface IImageListProps {
  masonry?: boolean;
  'with-text-protection'?: boolean;
}

export interface IImageListState {}

export class ImageList extends MaterialComponent<
  IImageListProps,
  IImageListState
> {
  protected componentName = 'image-list';
  protected mdcProps = ['masonry', 'with-text-protection'];

  protected materialDom(props: MaterialComponentProps<IImageListProps>) {
    return (
      <ul {...props} ref={this.setControlRef}>
        {props.children}
      </ul>
    );
  }
}
