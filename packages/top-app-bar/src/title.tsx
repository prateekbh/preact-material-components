import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ITopAppBarTitleProps {}

export interface ITopAppBarTitleState {}

export class TopAppBarTitle extends MaterialComponent<
  ITopAppBarTitleProps,
  ITopAppBarTitleState
> {
  protected componentName = 'top-app-bar__title';
  protected mdcProps = [];

  protected materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}
