import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import { LinkItem } from '../List/List';

export interface IDrawerProps extends JSX.HTMLAttributes {
  onOpen?: () => void;
  onClose?: () => void;
}
export class TemporaryDrawer extends MaterialComponent<ITemporaryDrawerProps, {}> {}
export class TemporaryDrawerHeader extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class TemporaryDrawerContent<PropsType = {}, StateType = {}> extends MaterialComponent<PropsType & JSX.HTMLAttributes, StateType & {}> {}

export interface IPermanentDrawerProps extends JSX.HTMLAttributes {
  spacer?: boolean;
}
export class PermanentDrawer extends MaterialComponent<IPermanentDrawerProps, {}> {}
export class PermanentDrawerHeader extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class PermanentDrawerContent extends TemporaryDrawerContent<JSX.HTMLAttributes, {}> {}

export class PersistentDrawer extends MaterialComponent<IDrawerProps, {}> {}
export class PersistentDrawerHeader extends MaterialComponent<JSX.HTMLAttributes, {}> {}
export class PersistentDrawerContent extends TemporaryDrawerContent<JSX.HTMLAttributes, {}> {}

export interface IDrawerItemProps extends JSX.HTMLAttributes {
  selected?: boolean;
}
export class DrawerItem extends LinkItem<IDrawerItemProps> {}