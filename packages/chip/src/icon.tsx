import {Icon} from '@preact-material-components/icon';
import {h} from 'preact';

export interface IChipIconProps {
  leading?: boolean;
  trailing?: boolean;
  'leading-hidden'?: boolean;
}

export interface IChipIconState {}

export class ChipIcon extends Icon<IChipIconProps, IChipIconState> {
  protected componentName = 'chip__icon';
  protected mdcProps = ['leading', 'trailing', 'leading-hidden'];

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
