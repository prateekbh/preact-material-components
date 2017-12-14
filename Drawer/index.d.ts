import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import List from '../List';
import { MDCFoundation, MDCComponent } from '../MaterialComponentsWeb';

export default class Drawer {
  DrawerItem: typeof DrawerItem;
  TemporaryDrawer: typeof TemporaryDrawer;
  TemporaryDrawerHeader: typeof TemporaryDrawerHeader;
  TemporaryDrawerContent: typeof TemporaryDrawerContent;
  PermanentDrawer: typeof PermanentDrawer;
  PermanentDrawerHeader: typeof PermanentDrawerHeader;
  PermanentDrawerContent: typeof PermanentDrawerContent;
  PersistentDrawer: typeof PersistentDrawer;
  PersistentDrawerHeader: typeof PersistentDrawerHeader;
  PersistentDrawerContent: typeof PersistentDrawerContent;
}

declare interface IDrawerProps {
  onOpen?: () => void;
  onClose?: () => void;
}
declare class TemporaryDrawer extends MaterialComponent<IDrawerProps & JSX.HTMLAttributes, {}> {
  MDComponent: MDCTemporaryDrawer;
}
declare class TemporaryDrawerHeader extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class TemporaryDrawerContent<PropsType = {}, StateType = {}> extends MaterialComponent<PropsType & JSX.HTMLAttributes, StateType & {}> {}

declare interface IPermanentDrawerProps {
  spacer?: boolean;
}
declare class PermanentDrawer extends MaterialComponent<IPermanentDrawerProps & JSX.HTMLAttributes, {}> {}
declare class PermanentDrawerHeader extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class PermanentDrawerContent extends TemporaryDrawerContent<JSX.HTMLAttributes, {}> {}

declare class PersistentDrawer extends MaterialComponent<IDrawerProps, {}> {
  MDComponent: MDCPersistentDrawer;
}
declare class PersistentDrawerHeader extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class PersistentDrawerContent extends TemporaryDrawerContent<JSX.HTMLAttributes, {}> {}

declare interface IDrawerItemProps {
  selected?: boolean;
}
declare class DrawerItem extends List.LinkItem<IDrawerItemProps & JSX.HTMLAttributes> {}

declare class MDCSlidableDrawerFoundation<A> extends MDCFoundation<A> {
  open(): void;
  close(): void;
  isOpen(): boolean;
}

declare class MDCTemporaryDrawerFoundation extends MDCSlidableDrawerFoundation<MDCTemporaryDrawer> {}
declare class MDCTemporaryDrawer extends MDCComponent<MDCTemporaryDrawerFoundation> {
  open: boolean;
  drawer: Element;
}

declare class MDCPersistentDrawerFoundation extends MDCSlidableDrawerFoundation<MDCPersistentDrawer> {}
declare class MDCPersistentDrawer extends MDCComponent<MDCPersistentDrawerFoundation> {
  open: boolean;
  drawer: Element;
}