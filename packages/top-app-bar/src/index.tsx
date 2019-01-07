import {MDCTopAppBar} from '@material/top-app-bar';
import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {bind} from 'bind-decorator';
import {h} from 'preact';

export interface ITopAppBarProps {
  short?: boolean; // TODO: Add to docs / remove from here
  'short-collapsed'?: boolean; // TODO: Add to docs / remove from here
  fixed?: boolean; // TODO: Add to docs / remove from here
  prominent?: boolean; // TODO: Add to docs / remove from here
  onNav: JSX.GenericEventHandler; // TODO: Add to docs / remove from here
}

export interface ITopAppBarState {}

export class TopAppBar extends MaterialComponent<
  ITopAppBarProps,
  ITopAppBarState
> {
  public MDComponent?: MDCTopAppBar;

  protected componentName = 'top-app-bar';
  protected mdcProps = ['short', 'short-collapsed', 'fixed', 'prominent'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      const comp = new MDCTopAppBar(this.control);
      comp.listen('MDCTopAppBar:nav', this.onNav);
      this.MDComponent = comp;
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCTopAppBar:nav', this.onNav);
      this.MDComponent.destroy();
    }
  }

  @bind
  protected onNav(e) {
    if (this.props.onNav) {
      this.props.onNav(e);
    }
  }

  protected materialDom(props) {
    return (
      <header ref={this.setControlRef} {...props}>
        {props.children}
      </header>
    );
  }
}
