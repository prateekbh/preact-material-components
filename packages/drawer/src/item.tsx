import {ListItemLink} from '@preact-material/list/lib/item/link';
import {h} from 'preact';

export interface IDrawerItemProps {
  selected?: boolean;
}

export interface IDrawerItemState {}

export class DrawerItem extends ListItemLink<
  IDrawerItemProps,
  IDrawerItemState
> {
  protected materialDom(props) {
    const returnedNode = super.materialDom(props);
    /* Logic to add selected class */
    if (props.selected) {
      returnedNode.attributes.className = 'mdc-list-item--activated';
    }
    return returnedNode;
  }
}
