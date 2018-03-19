import {h} from 'preact';
import Icon from '../Icon';
import MaterialComponent from '../MaterialComponent';
import {MDCChip, MDCChipSet} from '@material/chips';

class ChipSet extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'chip-set';
    this._mdcProps = ['choice', 'filter'];
  }

  componentDidMount() {
    this.MDComponent = new MDCChipSet(this.control);
  }

  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }

  materialDom(allprops) {
    const {children, ...props} = allprops;

    return (
      <div {...props} ref={this.setControlRef}>
        {children}
      </div>
    );
  }
}

class Chip extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'chip';
  }

  componentDidMount() {
    this.MDComponent = new MDCChip(this.control);
  }

  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }

  materialDom(allprops) {
    const {children, ...props} = allprops;

    return (
      <div {...props} ref={this.setControlRef}>
        {children}
      </div>
    );
  }
}

class ChipIcon extends Icon {
  constructor() {
    super();
    this.componentName = 'chip__icon';
    this._mdcProps = ['leading', 'trailing'];
  }

  materialDom(allprops) {
    const {children, ...props} = allprops;

    return <i {...props}>{children}</i>;
  }
}

class ChipText extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'chip__text';
  }

  materialDom(allprops) {
    const {children, ...props} = allprops;

    return <div {...props}>{children}</div>;
  }
}

const chips = ChipSet;

chips.Chip = Chip;
chips.Icon = ChipIcon;
chips.Text = ChipText;

export default chips;
