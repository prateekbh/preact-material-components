import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ITopAppBarIconProps {
  navigation?: boolean; // TODO: Add to docs / remove from here
}

export interface ITopAppBarIconState {}

export class TopAppBarIcon extends MaterialComponent<
  ITopAppBarIconProps,
  ITopAppBarIconState
> {
  protected componentName = 'top-app-bar__icon';
  protected mdcProps = [];

  protected materialDom(props) {
    const className = props.navigation
      ? 'material-icons mdc-top-app-bar__navigation-icon'
      : 'material-icons';
    return (
      <a className={className} {...props}>
        {props.children}
      </a>
    );
  }
}
