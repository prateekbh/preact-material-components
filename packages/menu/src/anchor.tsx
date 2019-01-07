import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IMenuAnchorProps {}

export interface IMenuAnchorState {}

export class MenuAnchor extends MaterialComponent<
  IMenuAnchorProps,
  IMenuAnchorState
> {
  protected componentName = 'menu-surface--anchor';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}
