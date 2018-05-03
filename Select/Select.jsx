import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';
import {MDCSelect} from '@material/select/';
import List from '../List';
import Menu from '../Menu';
class Select extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'select';
    this._mdcProps = ['disabled', 'box'];
    this._changed = this._changed.bind(this);
  }
  _changed(e) {
    e = e || {};
    e.selectedIndex = e.selectedIndex || this.MDComponent.selectedIndex;
    e.selectedOptions = e.selectedOptions || this.MDComponent.selectedOptions;
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  componentDidMount() {
    this.MDComponent = new MDCSelect(this.base);
    this.MDComponent.listen('MDCSelect:change', this._changed);
    this.updateSelection();
  }
  componentWillUnmount() {
    this.MDComponent.unlisten('MDCSelect:change', this._changed);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  updateSelection() {
    if ('selectedIndex' in this.props) {
      const selectedIndex =
        typeof this.props.selectedIndex === 'number'
          ? this.props.selectedIndex
          : 0;

      this.MDComponent.selectedIndex = selectedIndex;
    }

    const selectedIndex = this.MDComponent.selectedIndex;
    if (selectedIndex === 0) {
      this._labelRef.classList.remove('mdc-floating-label--float-above');
    } else {
      this._labelRef.classList.add('mdc-floating-label--float-above');
    }
  }
  componentDidUpdate() {
    this.updateSelection();
  }
  materialDom(props) {
    return (
      <div {...props}>
        <select class="mdc-select__native-control">
          {props.hintText && <option value="" disabled selected />}
          {props.children}
        </select>
        {props.hintText && (
          <div
            class="mdc-floating-label"
            ref={ref => {
              this._labelRef = ref;
            }}>
            {props.hintText}
          </div>
        )}
        <div class="mdc-line-ripple" />
      </div>
    );
  }
}

class SelectOption extends List.Item {
  materialDom(props) {
    return <option {...props}>{props.children}</option>;
  }
}

Select.Item = SelectOption;

export default Select;
