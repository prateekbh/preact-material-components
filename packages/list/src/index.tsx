import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {MDCList} from '@material/list';
import {h} from 'preact';

export * from './divider';
export * from './group';
export * from './item';
export * from './text';
export * from './text/primary';
export * from './text/secondary';

export interface IListProps {
  dense?: boolean;
  'two-line'?: boolean;
  'avatar-list'?: boolean;
  onAction?: JSX.GenericEventHandler;
}
export interface IListState {}

export class List extends MaterialComponent<IListProps, IListState> {
  protected componentName = 'list';
  protected mdcProps = ['dense', 'two-line', 'avatar-list'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCList(this.control);
      this.MDComponent.listen('MDCList:action', this.onAction);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCList:action', this.onAction);
      this.MDComponent.destroy();
    }
  }

  protected onAction = e => {
    const {index} = e.detail;
    this.proxyEventHandler('onAction', e, {index});
  };

  protected materialDom(props) {
    if (props.interactive) {
      return (
        <nav ref={this.setControlRef} {...props}>
          {props.children}
        </nav>
      );
    }

    return (
      <ul {...props} ref={this.setControlRef}>
        {props.children}
      </ul>
    );
  }
}
