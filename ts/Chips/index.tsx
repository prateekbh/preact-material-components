import {MDCChipSet} from '@material/chips';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import Icon from '../Icon';

export interface IChipProps {
  children?: Array<ChipText | ChipIcon | ChipCheckmark>;
  selected?: boolean; // TODO: Add to docs / remove from here
}

export interface IChipState {}

export class Chip extends MaterialComponent<IChipProps, IChipState> {
  protected componentName = 'chip';
  protected mdcProps = ['selected'];

  protected materialDom(allprops) {
    const {children, ...props} = allprops;

    return (
      <div {...props} ref={this.setControlRef}>
        {children}
      </div>
    );
  }
}

export interface IChipIconProps {
  leading?: boolean;
  trailing?: boolean;
}

export interface IChipIconState {}

export class ChipIcon extends Icon<IChipIconProps, IChipIconState> {
  protected componentName = 'chip__icon';
  protected mdcProps = ['leading', 'trailing'];

  protected materialDom(allprops) {
    const {children, ...props} = allprops;
    const otherprops: {[prop: string]: any} = {};
    if (props.trailing) {
      otherprops.tabindex = 0;
      otherprops.role = 'button';
    }
    return (
      <Icon {...props} {...otherprops}>
        {children}
      </Icon>
    );
  }
}

export class ChipCheckmark extends Icon {
  protected componentName = 'chip__checkmark';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <div {...props}>
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

export interface IChipTextProps {}

export interface IChipTextState {}

export class ChipText extends MaterialComponent<
  IChipTextProps,
  IChipTextState
> {
  protected componentName = 'chip__text';
  protected mdcProps = [];

  protected materialDom(allprops) {
    const {children, ...props} = allprops;

    return <div {...props}>{children}</div>;
  }
}

export interface IChipSetProps {
  children?: Chip[];
  choice?: boolean;
  filter?: boolean;
  input?: boolean;
}

export interface IChipSetState {}

export class ChipSet extends MaterialComponent<IChipSetProps, IChipSetState> {
  public MDComponent?: MDCChipSet;

  protected componentName = 'chip-set';
  protected mdcProps = ['choice', 'filter', 'input'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCChipSet(this.control);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  protected materialDom(allprops) {
    const {children, ...props} = allprops;

    return (
      <div {...props} ref={this.setControlRef}>
        {children}
      </div>
    );
  }
}

export default class extends ChipSet {
  public static readonly Chip = Chip;
  public static readonly Icon = ChipIcon;
  public static readonly Text = ChipText;
  public static readonly Checkmark = ChipCheckmark;
}
