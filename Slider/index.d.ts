import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import { MDCFoundation, MDCComponent } from '../MaterialComponentsWeb';
import { Omit } from '../libs';

declare interface ISliderProps extends Omit<JSX.HTMLAttributes, 'value' | 'disabled' | 'min' | 'max' | 'step' | 'onInput' | 'onChange'> {
  disabled?: boolean;
  discrete?: boolean;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onInput?: (value: number) => void;
  onChange?: (value: number) => void;
}

export default class Slider extends MaterialComponent<ISliderProps, {}> {
  MDComponent: MDCSlider;
  setValue(props: ISliderProps): void;
}

declare class MDCSliderFoundation extends MDCFoundation<MDCSlider> {
  setupTrackMarker(): void;
  layout(): void;
  getValue(): number;
  setValue(value: number): void;
  getMax(): number;
  setMax(max: number): void;
  getMin(): number;
  setMin(min: number): void;
  getStep(): number;
  setStep(step: number): void;
  isDisabled(): boolean;
  setDisabled(disabled): void;
}
declare class MDCSlider extends MDCComponent<MDCSliderFoundation> {
  value: number;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  layout(): void;
  stepUp(amount?: number): void;
  stepDown(amount?: number): void;
}
