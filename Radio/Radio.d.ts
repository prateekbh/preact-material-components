import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export default class Radio extends MaterialComponent<JSX.HTMLAttributes, {}> {
  componentDidMount(): void;
  componentWillUnmount(): void;
  materialDom(props: JSX.HTMLAttributes): VNode;
}