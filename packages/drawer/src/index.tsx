import {MDCDrawer} from '@material/drawer';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';
export interface IDrawerProps {
  onOpen?: (e: Event) => void;
  onClose?: (e: Event) => void;
  enableGestureSupport: boolean;
  swipeAcceptWidth: number;
}
export interface IDrawerProps extends JSX.HTMLAttributes {
  onAccept?: JSX.GenericEventHandler;
  onCancel?: JSX.GenericEventHandler;
  dismissible?: boolean;
  modal?: boolean;
}

enum SLIDER_STATES {
  REST,
  SWIPE_START,
  SWIPING,
  SWIPE_TO_BE_COMPLETED
}

export interface IDrawerState {
  sliderState: SLIDER_STATES;
  touchPositionX: number;
  touchPositionY: number;
  swipeDistance: number;
}

const DRAWER_WIDTH = 255;

const CLOSED_STATE = {
  sliderState: SLIDER_STATES.REST,
  swipeDistance: -1 * DRAWER_WIDTH,
  touchPositionX: 0,
  touchPositionY: 0
};

export class Drawer extends MaterialComponent<IDrawerProps, IDrawerState> {
  public MDComponent?: MDCDrawer;

  public state = {...CLOSED_STATE};

  protected componentName = 'drawer-container';
  protected mdcProps = [];
  protected mdcNotifyProps = ['open'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control && (this.props.modal || this.props.dismissible)) {
      console.log(this.control);
      this.MDComponent = new MDCDrawer(this.control);
      this.MDComponent.listen('MDCDrawer:opened', this.onOpen);
      this.MDComponent.listen('MDCDrawer:closed', this.onClose);
      if (this.props.enableGestureSupport) {
        this.attachGlobalListeners();
      }
    }
  }

  public componentWillUnmount() {
    if (this.control && this.MDComponent) {
      this.detachGlobalListeners();
    }
  }

  protected onOpen = e => {
    this.setState({
      ...CLOSED_STATE,
      swipeDistance: 0
    });

    this.proxyEventHandler('onOpen', e);
  };

  protected onClose = e => {
    this.setState({
      ...CLOSED_STATE
    });
    this.proxyEventHandler('onClose', e);
  };

  protected materialDom(props) {
    const classes = ['mdc-drawer'];
    // cant use mdcProps cuz classes need to be on the inner child and not on root level
    if (props.modal) {
      classes.push('mdc-drawer--modal');
    } else if (props.dismissible) {
      classes.push('mdc-drawer--dismissible');
    }
    // I dont know what will be the type of this.
    const styleObject: any = {};
    if (this.state.sliderState !== SLIDER_STATES.REST) {
      styleObject.display = 'flex';
      styleObject.transform = `translateX(${this.state.swipeDistance}px)`;
    }

    if (this.state.sliderState === SLIDER_STATES.SWIPE_TO_BE_COMPLETED) {
      styleObject['transition-duration'] = '300ms';
    }

    return (
      <div>
        <aside
          class={classes.join(' ')}
          ref={this.setControlRef}
          {...props}
          style={styleObject}>
          {props.children}
        </aside>
        {props.modal && <div class="mdc-drawer-scrim" />}
      </div>
    );
  }

  private handleTouchStart = e => {
    const {touches} = e;
    const {clientX, clientY} = touches ? touches[0] : e;
    if (!this.MDComponent) {
      return;
    }

    if (
      clientX > (this.props.swipeAcceptWidth || 40) &&
      this.MDComponent.open === false
    ) {
      return;
    }

    this.setState({
      sliderState: SLIDER_STATES.SWIPE_START,
      touchPositionX: clientX,
      touchPositionY: clientY
    });
  };

  private handleTouchEnd = e => {
    if (!this.MDComponent) {
      return;
    }

    if (this.state.sliderState === SLIDER_STATES.SWIPING) {
      this.setState(
        {
          sliderState: SLIDER_STATES.SWIPE_TO_BE_COMPLETED,
          swipeDistance: this.MDComponent.open ? -256 : 0
        },
        () => {
          if (this.MDComponent && this.MDComponent.open) {
            this.MDComponent.open = false;
          } else if (this.MDComponent && !this.MDComponent.open) {
            this.MDComponent.open = true;
          }
        }
      );
    } else if (this.state.sliderState === SLIDER_STATES.SWIPE_START) {
      this.setState({...CLOSED_STATE});
    }
  };

  private handleTouchMove = e => {
    if (this.state.sliderState === SLIDER_STATES.REST || !this.MDComponent) {
      return;
    }
    const {touches} = e;
    const startPosition = this.MDComponent.open ? 0 : -256;
    const {clientX} = touches ? touches[0] : e;
    const deltaX = clientX - this.state.touchPositionX;
    if (Math.abs(deltaX) < DRAWER_WIDTH) {
      this.setState({
        sliderState: SLIDER_STATES.SWIPING,
        swipeDistance: startPosition + deltaX
      });
    }
  };

  private attachGlobalListeners = () => {
    window.addEventListener('touchstart', this.handleTouchStart, {
      passive: false
    });

    window.addEventListener('touchend', this.handleTouchEnd, {
      passive: false
    });

    window.addEventListener('touchmove', this.handleTouchMove, {
      passive: false
    });

    window.addEventListener('mousedown', this.handleTouchStart, {
      passive: false
    });

    window.addEventListener('mouseup', this.handleTouchEnd, {
      passive: false
    });

    window.addEventListener('mousemove', this.handleTouchMove, {
      passive: false
    });
  };

  private detachGlobalListeners = () => {
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchend', this.handleTouchEnd);
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('mousedown', this.handleTouchStart);
    window.removeEventListener('mouseup', this.handleTouchEnd);
    window.removeEventListener('mousemove', this.handleTouchMove);
  };
}
