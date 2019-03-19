import {MDCChipSet} from '@material/chips';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';
import {ChipCheckmark} from './checkmark';
import {ChipIcon} from './icon';
import {ChipText} from './text';

export * from './icon';
export * from './text';
export * from './checkmark';

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

export interface IChipSetProps {
  children?: Chip[];
  choice?: boolean;
  filter?: boolean;
  input?: boolean;
  onSelectionChange?: (
    e: Event,
    obj: {
      MDComponent: MDCChipSet;
      selectedChipIds: string[];
    }
  ) => void;
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
      this.MDComponent.listen('MDCChip:interaction', this.handleInteraction);
    }
  }

  public componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      if (this.MDComponent && this.control) {
        this.MDComponent.destroy();
        this.MDComponent = new MDCChipSet(this.control);
      }
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  public handleInteraction = (e: Event) => {
    // @ts-ignore
    const {selectedChipIds} = this.MDComponent;
    // This event name clearly communicates that anything already selected will not be conveyed upfront.
    this.proxyEventHandler('onSelectionChange', e, {
      selectedChipIds
    });
  };

  protected materialDom(allprops) {
    const {children, ...props} = allprops;

    return (
      <div {...props} ref={this.setControlRef}>
        {children}
      </div>
    );
  }
}
