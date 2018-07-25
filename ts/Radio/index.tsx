import {MDCRadio} from '@material/radio/';
import {h} from 'preact';
import {
  MDCComponent,
  MDCFoundation,
  MDCRipple
} from '../../MaterialComponentsWeb';
import MaterialComponent from '../MaterialComponent';

declare class MDCRadioFoundation extends MDCFoundation<MDCRadio> {
  public isChecked(): boolean;
  public setChecked(checked: boolean): void;
  public isDisabled(): boolean;
  public setDisabled(disabled: boolean): void;
  public getValue(): string | null | undefined;
  public setValue(value: string | null | undefined): void;
}
declare class MDCRadio extends MDCComponent<MDCRadioFoundation> {
  public checked: boolean;
  public disabled: boolean;
  public value: string | null | undefined;
  public ripple: MDCRipple;
}

export interface IRadioProps {}

export interface IRadioState {}

/**
 * @prop mini = false
 * @prop plain = false
 */
export class Radio extends MaterialComponent<IRadioProps, IRadioState> {
  public static readonly defaultProps = {
    checked: false
  };
  protected componentName = 'radio';
  protected mdcProps = [];
  protected MDComponent: MDCRadio;

  public componentDidMount() {
    this.MDComponent = new MDCRadio(this.control);
    toggleRadio(Radio.defaultProps, this.props, this.MDComponent);
  }

  public componentWillUnmount() {
    if (this.MDComponent.destroy) {
      this.MDComponent.destroy();
    }
  }

  public componentWillUpdate(nextProps) {
    toggleRadio(this.props, nextProps, this.MDComponent);
  }

  protected materialDom(allprops) {
    const {className, ...props} = allprops;
    return (
      <div className={className} ref={this.setControlRef}>
        <input className="mdc-radio__native-control" type="radio" {...props} />
        <div className="mdc-radio__background">
          <div className="mdc-radio__outer-circle" />
          <div className="mdc-radio__inner-circle" />
        </div>
      </div>
    );
  }
}

/*
 * Function to add declarative checked to radio
 */
function toggleRadio(oldprops, newprops, radio) {
  if (
    'checked' in oldprops &&
    'checked' in newprops &&
    oldprops.checked !== newprops.checked
  ) {
    radio.checked = newprops.checked;
  }
}

export default Radio;
