import {ListItemLink} from '@preact-material-components/list';
import {h} from 'preact';

export interface IDrawerItemProps {
  activated?: boolean;
}

export interface IDrawerItemState {}

export class DrawerItem extends ListItemLink<
  IDrawerItemProps,
  IDrawerItemState
> {
  protected materialDom(props) {
    const returnedNode = super.materialDom(props);
    /* Logic to add activated class */
    if (props.activated) {
      // @ts-ignore
      (returnedNode.attributes || returnedNode.props).className =
        'mdc-list-item--activated';
    }
    return returnedNode;
  }
}
