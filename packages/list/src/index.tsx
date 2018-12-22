import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IListProps {
  dense?: boolean;
  'two-line'?: boolean;
  'avatar-list'?: boolean; // TODO: Add to docs / remove from here
}

export interface IListState {}

export class List extends MaterialComponent<IListProps, IListState> {
  protected componentName = 'list';
  protected mdcProps = ['dense', 'two-line', 'avatar-list'];

  protected materialDom(props) {
    if (props.interactive) {
      return (
        <nav ref={this.setControlRef} {...props}>
          {props.children}
        </nav>
      );
    }

    return (
      <ul {...props} ref={this.setControlRef}>
        {props.children}
      </ul>
    );
  }
}
