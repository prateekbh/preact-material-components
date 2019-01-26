import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';
import {SoftMerge} from '@preact-material-components/base/lib/types';

export interface IListItemLinkProps {
  activated?: boolean;
}

export interface IListItemLinkState {}

export class ListItemLink<
  PropTypes = {},
  StateTypes = {}
> extends MaterialComponent<
  SoftMerge<PropTypes & IListItemLinkProps, JSX.HTMLAttributes>,
  StateTypes & IListItemLinkState
> {
  protected componentName = 'list-item';
  protected mdcProps = ['activated'];

  protected materialDom(props) {
    return (
      <a role="option" {...props} ref={this.setControlRef}>
        {props.children}
      </a>
    );
  }
}
