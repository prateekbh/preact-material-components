import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface IMenuProps extends JSX.HTMLAttributes {
  open?: boolean,
  'open-from-top-left'?: boolean,
  'open-from-top-right'?: boolean,
  'open-from-bottom-left'?: boolean,
  'open-from-bottom-right'?: boolean
}

export default class Menu extends MaterialComponent<IMenuProps, {}> {
  componentDidMount(): void;
  componentWillUnmount(): void;
  materialDom(props: IMenuProps): VNode;
}

export class Anchor extends MaterialComponent<JSX.HTMLAttributes, {}> {}