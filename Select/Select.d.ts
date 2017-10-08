import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface ISelectProps extends JSX.HTMLAttributes {
  disabled?: boolean
}

export default class Select extends MaterialComponent<ISelectProps, {}> {
  componentDidMount(): void;
  componentWillUnmount(): void;
  updateSelection(): void;
  componentDidUpdate(): void;
  materialDom(props: ISelectProps): VNode;
}