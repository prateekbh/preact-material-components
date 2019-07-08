import {MDCSlider} from '@material/slider';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ISliderProps {
  disabled?: boolean;
  discrete?: boolean;
  value?: number;
  min?: number;
  max?: number;
  step?: number;

  onInput?: JSX.GenericEventHandler;
  onChange?: JSX.GenericEventHandler;
}

export interface ISliderState {}

export class Slider extends MaterialComponent<ISliderProps, ISliderState> {
  public MDComponent?: MDCSlider;
  protected componentName = 'slider';
  protected mdcProps = ['discrete', 'display-markers'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCSlider(this.control);
      this.MDComponent.listen('MDCSlider:change', this.onChange);
      this.MDComponent.listen('MDCSlider:input', this.onInput);
    }
    this.setValue(this.props.value); // set initial value programatically because of error if min is greater than initial max
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCSlider:change', this.onChange);
      this.MDComponent.unlisten('MDCSlider:input', this.onInput);
      this.MDComponent.destroy();
    }
  }

  public getValue() {
    if (this.MDComponent) {
      return this.MDComponent.value;
    }
  }

  public setValue(value?: number) {
    const {disabled = false, min = 0, max = 100, step} = this.props;
    if (this.MDComponent) {
      if (min > this.MDComponent.max) {
        this.MDComponent.max = max;
        this.MDComponent.min = min;
      } else {
        this.MDComponent.min = min;
        this.MDComponent.max = max;
      }

      if (value) {
        this.MDComponent.value = value;
      }
      this.MDComponent.disabled = disabled;
      if (step) {
        this.MDComponent.step = step;
      }
    }
  }

  protected onChange = e => {
    const {value} = e.detail;
    if (!isNaN(value)) {
      this.proxyEventHandler('onChange', e, {value});
    }
  };

  protected onInput = e => {
    const {value} = e.detail;
    if (!isNaN(value)) {
      this.proxyEventHandler('onInput', e, {value});
    }
  };

  protected materialDom(allprops) {
    const {tabindex: tabIndex = 0, ...props} = allprops;

    this.setValue(allprops);
    return (
      <div
        tabIndex={tabIndex}
        role="slider"
        aria-label="Select Value"
        ref={this.setControlRef}
        {...props}>
        <div class="mdc-slider__track-container">
          <div class="mdc-slider__track" />
          {props.discrete && <div class="mdc-slider__track-marker-container" />}
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
