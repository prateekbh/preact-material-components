import {MDCRadio} from '@material/radio';
import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IRadioProps {
  checked?: boolean;
  disabled?: boolean;
}

export interface IRadioState {}

export class Radio extends MaterialComponent<IRadioProps, IRadioState> {
  public MDComponent?: MDCRadio;
  protected componentName = 'radio';
  protected mdcProps = ['disabled'];
  protected mdcNotifyProps = ['checked'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
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
