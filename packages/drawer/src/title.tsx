import {h} from 'preact';
import {MaterialComponent} from '@preact-material-components/base';

export interface IDrawerTitleProps {
  activated?: boolean;
}

export interface IDrawerTitleState {}

export class DrawerTitle extends MaterialComponent<
  IDrawerTitleProps,
  IDrawerTitleState
> {
  protected componentName = 'mdc-drawer__title';
  protected mdcProps = [];

  protected materialDom(props) {
    return <h3>{props.children}</h3>;
  }
}
