import {MDCChipSet} from '@material/chips';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {IMDRef} from '../Base/types';
import Icon from '../Icon';

export interface IChipProps {
  children?: Array<ChipText | ChipIcon | ChipCheckmark>;
  selected?: boolean; // TODO: Add to docs / remove from here
}

export interface IChipState {}

export class Chip extends MaterialComponent<IChipProps, IChipState> {
  protected componentName = 'chip';
  protected mdcProps = ['selected'];

  @autobind
  protected materialDom(allprops) {
    const {children, ref, ...props} = allprops;

    return (
      <div {...props} ref={this.getSharedRefSetter(ref)}>
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

  @autobind
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

  @autobind
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

  @autobind
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
  ref?: IMDRef<MDCChipSet>;
}

export interface IChipSetState {}

export class ChipSet extends MaterialComponent<IChipSetProps, IChipSetState> {
  public static readonly Chip = Chip;
  public static readonly Icon = ChipIcon;
  public static readonly Text = ChipText;
  public static readonly Checkmark = ChipCheckmark;

  protected componentName = 'chip-set';
  protected mdcProps = ['choice', 'filter', 'input'];
  protected MDComponent?: MDCChipSet;

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

  @autobind
  protected materialDom(allprops) {
    const {children, ref, ...props} = allprops;

    return (
      <div {...props} ref={this.getSharedRefSetter(ref)}>
        {children}
      </div>
    );
  }
}

export default ChipSet;
