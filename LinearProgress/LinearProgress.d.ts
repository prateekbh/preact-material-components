import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface ILinearProgressProps extends JSX.HTMLAttributes {
  indeterminate?: boolean,
  reversed?: boolean,
  accent?: boolean
}
export default class LinearProgress extends MaterialComponent<ILinearProgressProps, {}> {
  componentDidMount(): void;
  componentWillUnmount(): void;
  materialDom(props: ILinearProgressProps): VNode;
}