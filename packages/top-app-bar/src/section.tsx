import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ITopAppBarSectionProps {
  'align-start'?: boolean;
  'align-end'?: boolean;
}

export interface ITopAppBarSectionState {}

export class TopAppBarSection extends MaterialComponent<
  ITopAppBarSectionProps,
  ITopAppBarSectionState
> {
  protected componentName = 'top-app-bar__section';
  protected mdcProps = ['align-start', 'align-end'];

  protected materialDom(props) {
    return <section {...props}>{props.children}</section>;
  }
}
