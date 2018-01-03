import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import List from '../List';
import { MDCFoundation, MDCComponent } from '../MaterialComponentsWeb';

export default class Drawer {
  static DrawerItem: typeof DrawerItem;
  static TemporaryDrawer: typeof TemporaryDrawer;
  static TemporaryDrawerHeader: typeof TemporaryDrawerHeader;
  static TemporaryDrawerContent: typeof TemporaryDrawerContent;
  static PermanentDrawer: typeof PermanentDrawer;
  static PermanentDrawerHeader: typeof PermanentDrawerHeader;
  static PermanentDrawerContent: typeof PermanentDrawerContent;
  static PersistentDrawer: typeof PersistentDrawer;
  static PersistentDrawerHeader: typeof PersistentDrawerHeader;
  static PersistentDrawerContent: typeof PersistentDrawerContent;
}

declare interface IDrawerProps extends JSX.HTMLAttributes {
  onOpen?: (e: Event) => void;
  onClose?: (e: Event) => void;
}
declare class TemporaryDrawer extends MaterialComponent<IDrawerProps, {}> {
  MDComponent: MDCTemporaryDrawer;
}
declare class TemporaryDrawerHeader extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class TemporaryDrawerContent<PropsType = {}, StateType = {}> extends MaterialComponent<PropsType & JSX.HTMLAttributes, StateType & {}> {}

declare interface IPermanentDrawerProps extends JSX.HTMLAttributes {
  spacer?: boolean;
}
declare class PermanentDrawer extends MaterialComponent<IPermanentDrawerProps, {}> {}
declare class PermanentDrawerHeader extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class PermanentDrawerContent extends TemporaryDrawerContent<JSX.HTMLAttributes, {}> {}

declare class PersistentDrawer extends MaterialComponent<IDrawerProps, {}> {
  MDComponent: MDCPersistentDrawer;
}
declare class PersistentDrawerHeader extends MaterialComponent<JSX.HTMLAttributes, {}> {}
declare class PersistentDrawerContent extends TemporaryDrawerContent<JSX.HTMLAttributes, {}> {}

declare interface IDrawerItemProps extends JSX.HTMLAttributes {
  selected?: boolean;
}
declare class DrawerItem extends List.LinkItem<IDrawerItemProps> {}

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