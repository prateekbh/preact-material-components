import {h} from 'preact';
import {BasicSelect} from './basic-select';
export * from './enhanced-option';

export class EnhancedSelect extends BasicSelect {
  protected onChange = e => {
    const {value, index} = e.detail;
    if (this.MDComponent) {
      // @ts-ignore
      const selText = this.MDComponent.selectedText_.innerText;
      this.setState(
        {
          selectedValue: selText
        },
        () => {
          this.proxyEventHandler('onSelect', e, {index, value});
        }
      );
    }
  };

  protected materialDom(allprops) {
    const {label, outlined, name, ...props} = allprops;
    // noinspection RequiredAttributes
    return (
      <div ref={this.setControlRef} {...props}>
        <input type="hidden" name={name || 'enhanced-select'} />
        <i class="mdc-select__dropdown-icon" />
        <div class="mdc-select__selected-text">{this.state.selectedValue}</div>
        <div class="mdc-select__menu mdc-menu mdc-menu-surface">
          <ul class="mdc-list">
            <li class="mdc-list-item" data-value="" />
            {props.children}
          </ul>
        </div>
        {this.getDecorator({outlined, label})}
        {!outlined && label && (
          <label class="mdc-floating-label">{label}</label>
        )}
      </div>
    );
  }
}
