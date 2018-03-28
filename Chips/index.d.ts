import {MDCFoundation, MDCComponent, MDCRipple} from '../MaterialComponentsWeb';
import MaterialComponent from '../MaterialComponent';
import Icon from '../Icon';

declare interface IChipProps extends JSX.HTMLAttributes {
  children?: ChipText[];
  choice?: boolean;
  filter?: boolean;
}

declare class Chip extends MaterialComponent<IChipProps, {}> {
  MDComponent: MDCChip;
}

declare interface IChipIconProps extends JSX.HTMLAttributes {
  leading?: boolean;
  trailing?: boolean;
}

declare class ChipIcon extends Icon<IChipIconProps, {}> {}

declare class ChipText extends MaterialComponent<{}, {}> {}

declare class ChipCheckmark extends MaterialComponent<{}, {}> {}

declare interface IChipSetProps extends JSX.HTMLAttributes {
  children?: Chip[];
}

export default class ChipSet extends MaterialComponent<IChipSetProps, {}> {
  static Chip: typeof Chip;
  static Icon: typeof ChipIcon;
  static Text: typeof ChipText;
  static Checkmark: typeof ChipCheckmark;
  MDComponent: MDCChipSet;
}

declare class MDCChipFoundation extends MDCFoundation<MDCChip> {}

declare class MDCChip extends MDCComponent<MDCChipFoundation> {
  readonly ripple: MDCRipple;
}

declare class MDCChipSetFoundation extends MDCFoundation<MDCChipSet> {}

declare class MDCChipSet extends MDCComponent<MDCChipSetFoundation> {}
