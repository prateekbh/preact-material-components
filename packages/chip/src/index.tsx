import {MDCChipSet} from '@material/chips';
import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';
import {ChipCheckmark} from './checkmark';
import {ChipIcon} from './icon';
import {ChipText} from './text';

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
