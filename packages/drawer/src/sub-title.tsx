import {h} from 'preact';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';

export interface IDrawerSubTitleProps {
  activated?: boolean;
}

export interface IDrawerSubTitleState {}

export class DrawerSubTitle extends MaterialComponent<
  IDrawerSubTitleProps,
  IDrawerSubTitleState
> {
  protected componentName = 'mdc-drawer__title';
  protected mdcProps = [];

  protected materialDom(props) {
    return <h3>{props.children}</h3>;
  }
}
