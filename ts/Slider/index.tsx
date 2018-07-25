import {MDCSlider} from '@material/slider';
import {h} from 'preact';
import {MDCComponent, MDCFoundation} from '../../MaterialComponentsWeb';
import MaterialComponent from '../MaterialComponent';
import {Omit} from '../types';

declare class MDCSliderFoundation extends MDCFoundation<MDCSlider> {
  public setupTrackMarker(): void;
  public layout(): void;
  public getValue(): number;
  public setValue(value: number): void;
  public getMax(): number;
  public setMax(max: number): void;
  public getMin(): number;
  public setMin(min: number): void;
  public getStep(): number;
  public setStep(step: number): void;
  public isDisabled(): boolean;
  public setDisabled(disabled): void;
}

declare class MDCSlider extends MDCComponent<MDCSliderFoundation> {
  public value: number;
  public min: number;
  public max: number;
  public step: number;
  public disabled: boolean;
  public layout(): void;
  public stepUp(amount?: number): void;
  public stepDown(amount?: number): void;
}

export interface ISliderProps
  extends Omit<
      JSX.HTMLAttributes,
      'value' | 'min' | 'max' | 'step' | 'onInput' | 'onChange'
    > {
  discrete?: boolean;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onInput?: (e: Event) => void;
  onChange?: (e: Event) => void;
}

export interface ISliderState {}

/**
 * @prop disabled = false
 */
export class Slider extends MaterialComponent<ISliderProps, ISliderState> {
  protected componentName = 'slider';
  protected mdcProps = ['discrete'];
  protected MDComponent: MDCSlider;

  public componentDidMount() {
    this.MDComponent = new MDCSlider(this.base);
    this.MDComponent.listen('MDCSlider:change', this.onChange);
    this.MDComponent.listen('MDCSlider:input', this.onInput);
    this.setValue(this.props.value); // set initial value programatically because of error if min is greater than initial max
  }

  public componentWillUnmount() {
    this.MDComponent.unlisten('MDCSlider:change', this.onChange);
    this.MDComponent.unlisten('MDCSlider:input', this.onInput);
    if (this.MDComponent.destroy) {
      this.MDComponent.destroy();
    }
  }

  public getValue() {
    return this.MDComponent.value;
  }

  public setValue(value: number) {
    const {disabled = false, min = 0, max = 100, step} = this.props;
    if (this.MDComponent) {
      if (min > this.MDComponent.max) {
        this.MDComponent.max = max;
        this.MDComponent.min = min;
      } else {
        this.MDComponent.min = min;
        this.MDComponent.max = max;
      }

      this.MDComponent.value = value;
      this.MDComponent.disabled = disabled;
      this.MDComponent.step = step;
    }
  }

  protected onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  protected onInput(e) {
    if (this.props.onInput) {
      this.props.onInput(e);
    }
  }

  protected materialDom(allprops) {
    const {tabindex = 0, ...props} = allprops;

    this.setValue(allprops);
    return (
      <div
        tabindex={tabindex}
        role="slider"
        aria-label="Select Value"
        {...props}>
        <div class="mdc-slider__track-container">
          <div class="mdc-slider__track" />
        </div>
        <div class="mdc-slider__thumb-container">
          {props.discrete && (
            <div class="mdc-slider__pin">
              <span class="mdc-slider__pin-value-marker" />
            </div>
          )}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875" />
          </svg>
          <div class="mdc-slider__focus-ring" />
        </div>
      </div>
    );
  }
}

export default Slider;
