import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';

export interface ISliderProps extends JSX.HTMLAttributes {
  disabled?: boolean,
  min?: number,
  max?: number,
  step?: number
}

export default class Slider extends MaterialComponent<ISliderProps, {}> {
  private _onChange(): void;
  private _onInput(): void;

  componentDidMount(): void;
  componentWillUnmount(): void;
  setValue(props: ISliderProps): void;
  materialDom(props: ISliderProps): VNode;
}