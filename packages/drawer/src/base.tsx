import {MDCDrawer} from '@material/drawer';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {bind} from 'bind-decorator';
import {h} from 'preact';

export interface IBaseDrawerProps {
  onAccept?: JSX.GenericEventHandler;
  onCancel?: JSX.GenericEventHandler;
  dismissible?: boolean;
  modal?: boolean;
  open?: boolean;

  onOpen?: (e: Event) => void;
  onClose?: (e: Event) => void;
}

export interface IBaseDrawerState {
  open?: boolean;
}

export class BaseDrawer<P = {}> extends MaterialComponent<
  IBaseDrawerProps & P,
  IBaseDrawerState
> {
  public MDComponent?: MDCDrawer;

  protected componentName = 'drawer-container';
  protected mdcProps = [];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control && (this.props.modal || this.props.dismissible)) {
      this.MDComponent = new MDCDrawer(this.control);
      this.MDComponent.listen('MDCDrawer:opened', this.onOpen);
      this.MDComponent.listen('MDCDrawer:closed', this.onClose);
      this.MDComponent.open = !!this.state.open;
    }
  }

  public componentDidUpdate(
    prevProps: IBaseDrawerProps,
    prevState: IBaseDrawerState
  ) {
    console.log('Start update');
    if (this.MDComponent) {
      console.log(
        `Update status: props.open: ${!!this.props.open}, state.open: ${!!this
          .state
          .open}, prevProps.open: ${!!prevProps.open}, prevState.open: ${!!prevState.open}`
      );
      if (prevProps.open !== this.props.open) {
        this.setState({open: this.props.open});
        this.MDComponent.open = !!this.props.open;
      } else if (prevState.open !== this.state.open) {
        console.log(`Update: open: ${!!this.state.open}`);
        this.MDComponent.open = !!this.state.open;
      }
    }
  }

  public render(props) {
    if (props.hasOwnProperty('open')) {
      delete props.open;
    }
    return super.render(props);
  }

  @bind
  protected onOpen(e) {
    if (this.props.onOpen) {
      this.props.onOpen(e);
    }
  }

  @bind
  protected onClose(e) {
    if (this.props.onClose) {
      this.props.onClose(e);
    }
  }

  protected materialDom(props) {
    const classes = ['mdc-drawer'];

    // cant use mdcProps cuz classes need to be on the inner child and not on root level
    if (props.modal) {
      classes.push('mdc-drawer--modal');
    } else if (props.dismissible) {
      classes.push('mdc-drawer--dismissible');
    }

    return (
      <div>
        <aside class={classes.join(' ')} ref={this.setControlRef} {...props}>
          {props.children}
        </aside>
        {props.modal && <div class="mdc-drawer-scrim" />}
      </div>
    );
  }
}
