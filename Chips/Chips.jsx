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
    return <Icon {...props}>{children}</Icon>;
  }
}

class ChipCheckmark extends Icon {
  constructor() {
    super();
    this.componentName = 'chip__checkmark';
  }
  materialDom(props) {
    return (
      <div>
        <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
          <path
            class="mdc-chip__checkmark-path"
            fill="none"
            stroke="black"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          />
        </svg>
      </div>
    );
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
chips.Checkmark = ChipCheckmark;
export default chips;
