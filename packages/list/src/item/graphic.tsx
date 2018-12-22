import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {Icon} from '@preact-material/icon';
import {h} from 'preact';

export interface IListItemGraphicProps {}

export interface IListItemGraphicState {}

export class ListItemGraphic extends MaterialComponent<
  IListItemGraphicProps,
  IListItemGraphicState
> {
  protected componentName = 'list-item__graphic';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef} role="presentation">
        <Icon aria-hidden="true">{props.children}</Icon>
      </span>
    );
  }
}
