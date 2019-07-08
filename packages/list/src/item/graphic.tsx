import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {Icon} from '@preact-material-components/icon';
import {h} from 'preact';

export interface IListItemGraphicProps {
  selected?: boolean;
}
export interface IListItemGraphicState {}

export class ListItemGraphic extends MaterialComponent<
  IListItemGraphicProps,
  IListItemGraphicState
> {
  protected componentName = 'list-item__graphic';
  protected mdcProps = ['selected'];

  protected materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef} role="presentation">
        <Icon aria-hidden="true">{props.children}</Icon>
      </span>
    );
  }
}
