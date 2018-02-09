import { h } from "preact";
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

  materialDom(props) {
    return <div>{props.children}</div>;
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

  materialDom(props) {
    return <div>{props.children}</div>;
  }
}

class ChipText extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "chip__text";
  }

  materialDom(props) {
    return <div>{props.children}</div>;
  }
}

const chips = ChipSet;

chips.Chip = Chip;
chips.Text = ChipText;

export default chips;
