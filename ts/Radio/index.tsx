import {MDCRadio} from '@material/radio/';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface IRadioProps {
  checked?: boolean;
  disabled?: boolean;
}

export interface IRadioState {}

export class Radio extends MaterialComponent<IRadioProps, IRadioState> {
  protected componentName = 'radio';
  protected mdcProps = ['disabled'];
  protected MDComponent?: MDCRadio;
  protected mdcNotifyProps = ['checked'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control && !MaterialComponent.isPrerendering) {
      this.MDComponent = new MDCRadio(this.control);
    }
    this.afterComponentDidMount();
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  @autobind
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

export default Radio;
