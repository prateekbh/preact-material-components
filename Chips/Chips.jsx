import { h } from "preact";
import Icon from "../Icon/";
import MaterialComponent from "../MaterialComponent";
import { MDCChip, MDCChipSet } from "@material/chips";

class ChipSet extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "chip-set";
  }

  componentDidMount() {
    this.MDComponent = new MDCChipSet(this.base);
  }

  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }

  materialDom(allprops) {
    const { className, ...props } = allprops;

    return <div className={className}>{props.children}</div>;
  }
}

class Chip extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "chip";
  }

  componentDidMount() {
    this.MDComponent = new MDCChip(this.base);
  }

  componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  }

  materialDom(allprops) {
    const { className, ...props } = allprops;

    return <div className={className}>{props.children}</div>;
  }
}

class ChipIcon extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "chip__icon";
    this._mdcProps = ["leading", "trailing"];
  }

  materialDom(allprops) {
    const { className, ...props } = allprops;

    return <i className={className}>{props.children}</i>;
  }
}

class ChipIcon extends Icon {
  constructor() {
    super();
    this.componentName = "chip__icon";
    this._mdcProps = ["leading", "trailing"];
  }
}

class ChipText extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "chip__text";
  }

  materialDom(allprops) {
    const { className, ...props } = allprops;

    return <div className={className}>{props.children}</div>;
  }
}

const chips = ChipSet;

chips.Chip = Chip;
chips.Icon = ChipIcon;
chips.Text = ChipText;

export default chips;
