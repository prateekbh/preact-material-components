import { MDCFoundation, MDCComponent, MDCRipple } from '../MaterialComponentsWeb';
import MaterialComponent from '../MaterialComponent';

declare interface IChipProps extends JSX.HTMLAttributes {
  children?: ChipText[];
}

declare class Chip extends MaterialComponent<IChipProps, {}> {
  MDComponent: MDCChip;
}

declare class ChipText extends MaterialComponent<{}, {}> {
}

declare interface IChipSetProps extends JSX.HTMLAttributes {
  children?: Chip[];
}

export default class ChipSet extends MaterialComponent<IChipSetProps, {}> {
  static Chip: typeof Chip;
  static Text: typeof ChipText;

  MDComponent: MDCChipSet;
}

declare class MDCChipFoundation extends MDCFoundation<MDCChip> {
}

declare class MDCChip extends MDCComponent<MDCChipFoundation> {
  readonly ripple: MDCRipple;
}

declare class MDCChipSetFoundation extends MDCFoundation<MDCChipSet> {
}

declare class MDCChipSet extends MDCComponent<MDCChipSetFoundation> {
}