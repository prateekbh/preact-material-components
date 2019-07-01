import {MDCDrawer} from '@material/drawer';
import {MaterialComponent} from '@preact-material-components/base';
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

const CLOSED_STATE = {
  sliderState: SLIDER_STATES.REST,
  swipeDistance: -256,
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
      this.MDComponent = new MDCDrawer(this.control);
      this.MDComponent.listen('MDCDrawer:opened', this.onOpen);
      this.MDComponent.listen('MDCDrawer:closed', this.onClose);
      if (this.props.enableGestureSupport) {
        this.attachGlobalListeners_();
      }
    }
  }

  protected onOpen = e => {
    this.setState({...CLOSED_STATE});
    this.proxyEventHandler('onOpen', e);
  };

  protected onClose = e => {
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

  private handleTouchStart_ = e => {
    const {touches, target} = e;
    const {clientX, clientY} = touches[0];
    console.log(e.target);
    if (clientX > (this.props.swipeAcceptWidth || 40)) {
      return;
    }

    this.setState({
      sliderState: SLIDER_STATES.SWIPE_START,
      touchPositionX: clientX,
      touchPositionY: clientY
    });
  };

  private handleTouchEnd_ = e => {
    if (this.state.sliderState === SLIDER_STATES.SWIPING) {
      this.setState(
        {
          sliderState: SLIDER_STATES.SWIPE_TO_BE_COMPLETED,
          swipeDistance: 0
        },
        () => {
          if (this.MDComponent) {
            this.MDComponent.open = true;
          }
        }
      );
    } else if (this.state.sliderState === SLIDER_STATES.SWIPE_START) {
      this.setState({...CLOSED_STATE});
    }
  };

  private handleTouchMove_ = e => {
    const {touches} = e;
    if (touches.length === 0 || this.state.sliderState === SLIDER_STATES.REST) {
      return;
    }

    const {clientX, clientY} = touches[0];
    const deltaX = clientX - this.state.touchPositionX;
    console.log({deltaX});
    this.setState({
      sliderState: SLIDER_STATES.SWIPING,
      swipeDistance: -256 + deltaX
    });
  };

  private attachGlobalListeners_ = () => {
    window.addEventListener('touchstart', this.handleTouchStart_, {
      passive: false
    });

    window.addEventListener('touchend', this.handleTouchEnd_, {
      passive: false
    });

    window.addEventListener('touchmove', this.handleTouchMove_, {
      passive: false
    });
  };
}
