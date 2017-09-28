import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface IToolbarProps {
  fixed?: boolean,
  'fixed-lastrow-only'?: boolean,
  waterfall?: boolean,
  flexible?: boolean,
  'flexible-default-behavior'?: boolean
}
export class Toolbar extends MaterialComponent<IToolbarProps, {}> {
  private _onChange(e: Event): void;
  componentDidMount(): void;
  componentWillUnmount(): void;
  materialDom(props: IToolbarProps): VNode;
}

export class ToolbarRow extends MaterialComponent<{}, {}> {}

export interface IToolbarSectionProps {
  'align-start'?: boolean,
  'align-end'?: boolean,
  'shrink-to-fit'?: boolean
}
export class ToolbarSection extends MaterialComponent<IToolbarSectionProps, {}> {
  materialDom(props: IToolbarSectionProps): VNode;
}

export interface IToolbarIconProps {
  menu?: boolean
}
export class ToolbarIcon extends MaterialComponent<IToolbarIconProps, {}> {
  materialDom(props: IToolbarIconProps): VNode;
}

export interface IToolbarTitleProps {
  title?: string
}
export class ToolbarTitle extends MaterialComponent<IToolbarTitleProps, {}> {
  materialDom(props: IToolbarTitleProps): VNode;
}