import {MDCRadio} from '@material/radio/';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {IMDRef} from '../Base/types';

export interface IRadioProps {
  checked?: boolean;
  disabled?: boolean;
  ref?: IMDRef<MDCRadio>;
}

export interface IRadioState {}

export class Radio extends MaterialComponent<IRadioProps, IRadioState> {
  protected componentName = 'radio';
  protected mdcProps = ['disabled'];
  protected MDComponent?: MDCRadio;

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCRadio(this.control);
      toggleRadio(
        {
          checked: false
        },
        this.props,
        this.MDComponent
      );
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  public componentWillUpdate(nextProps) {
    toggleRadio(this.props, nextProps, this.MDComponent);
  }

  @autobind
  protected materialDom(allprops) {
    const {className, ref, ...props} = allprops;
    return (
      <div className={className} ref={this.getSharedRefSetter(ref)}>
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
