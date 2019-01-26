import {MDCDrawer} from '@material/drawer';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {bind} from 'bind-decorator';
import {h} from 'preact';

export interface IDrawerProps {
  onOpen?: (e: Event) => void;
  onClose?: (e: Event) => void;
}

export interface IDrawerProps extends JSX.HTMLAttributes {
  onAccept?: JSX.GenericEventHandler;
  onCancel?: JSX.GenericEventHandler;
  dismissible?: boolean;
  modal?: boolean;
}

export interface IDrawerState {}

export class Drawer extends MaterialComponent<IDrawerProps, IDrawerState> {
  public MDComponent?: MDCDrawer;

  protected componentName = 'drawer-container';
  protected mdcProps = [];
  protected mdcNotifyProps = ['open'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control && (this.props.modal || this.props.dismissible)) {
      this.MDComponent = new MDCDrawer(this.control);
      this.MDComponent.listen('MDCDrawer:opened', this.onOpen);
      this.MDComponent.listen('MDCDrawer:closed', this.onClose);
    }
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
