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
          : -1;

      this.MDComponent.selectedIndex = selectedIndex;
    }

    const selectedIndex = this.MDComponent.selectedIndex;
    if (selectedIndex === -1) {
      this._labelRef.classList.remove('mdc-select__label--float-above');
    } else {
      this._labelRef.classList.add('mdc-select__label--float-above');
    }
  }
  componentDidUpdate() {
    this.updateSelection();
  }
  materialDom(props) {
    return (
      <div role="listbox" {...props}>
        <div class="mdc-select__surface" tabindex="0">
          <div
            class="mdc-select__label"
            ref={ref => {
              this._labelRef = ref;
            }}>
            {props.hintText}
          </div>
          <div class="mdc-select__selected-text" />
          <div class="mdc-select__bottom-line" />
        </div>
        <Menu className="mdc-select__menu">{props.children}</Menu>
      </div>
    );
  }
}

class SelectOption extends List.Item {
  materialDom(props) {
    const disabled = 'disabled' in props && !!props['disabled'];
    const selected = 'selected' in props && !!props['selected'];

    const baseProps = {
      tabindex: disabled ? '-1' : '0'
    };
    if (disabled) {
      baseProps['aria-disabled'] = 'true';
    }
    if (selected) {
      baseProps['aria-selected'] = 'true';
    }

    props = Object.assign(baseProps, props);
    if ('disabled' in props) {
      delete props['disabled'];
    }
    if ('selected' in props) {
      delete props['selected'];
    }

    return super.materialDom(props);
  }
}

Select.Item = SelectOption;

export default Select;
