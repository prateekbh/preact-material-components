import {h} from 'preact';
import {BaseDrawer, IBaseDrawerProps} from './base';

export * from './base';
export * from './content';
export * from './header';
export * from './item';

function coords(e: TouchEvent): IPoint {
  const touch = (e.touches && e.touches[0]) || e;
  return {x: touch.pageX, y: touch.pageY};
}

interface IDrawerProps extends IBaseDrawerProps {
  closeDrawer?: () => void;
  onFirstOpen?: () => void;
}

interface IPoint {
  x: number;
  y: number;
}

interface ISwipeDown extends IPoint {
  drawerLeft: number;
  time: number;
}

export class Drawer extends BaseDrawer<IDrawerProps> {
  protected static LISTENER_OPTS: AddEventListenerOptions = {passive: true};
  protected static EXTRA_CLASS = 'pmc-drawer';

  private swipeDown?: ISwipeDown | null;
  private swipePrev?: IPoint | null;
  private swipeStart?: IPoint | null;
  private overflow?: string | null;
  private timer?: number;

  public constructor(props: IDrawerProps) {
    super(props);

    this.setState({open: props.open});
  }

  public componentDidMount() {
    addEventListener('touchstart', this.swipeTouchStart, {passive: false});
    addEventListener('touchmove', this.swipeTouchMove, Drawer.LISTENER_OPTS);
    addEventListener('touchend', this.swipeTouchEnd, Drawer.LISTENER_OPTS);
    // addEventListener('click', this.handleClick);
    super.componentDidMount();
  }

  public componentDidUpdate(prevProps: IDrawerProps, prevState) {
    const {onFirstOpen, open} = this.props;
    if (onFirstOpen && open && !prevProps.open) {
      onFirstOpen();
    }

    super.componentDidUpdate(prevProps, prevState);
  }

  public componentWillUnmount() {
    removeEventListener('touchstart', this.swipeTouchStart);
    removeEventListener('touchmove', this.swipeTouchMove);
    removeEventListener('touchend', this.swipeTouchEnd);
    // removeEventListener('click', this.handleClick);
    super.componentWillUnmount();
  }

  public render(props) {
    props.class = props.class
      ? `${Drawer.EXTRA_CLASS} ${props.class}`
      : Drawer.EXTRA_CLASS;
    return super.render(props);
  }

  /* protected handleLinkClick = e => {
    let {target} = e;
    do {
      if (String(target.nodeName).toLowerCase() === 'a') {
        return setTimeout(this.props.closeDrawer, 30);
      }
      target = target.parentNode;
    } while (target);
  }; */

  protected swipeTouchStart = e => {
    if (this.base) {
      console.log('ts');
      const pt: Partial<ISwipeDown> & IPoint = coords(e);
      let inInput = false;
      let target = (e.touches && e.touches[0].target) || e.target;

      do {
        if (String(target.nodeName).match(/^(input|textarea)$/i)) {
          inInput = true;
          break;
        }
        target = target.parentNode;
      } while (target);
      if (!this.swipeDown && pt.x < window.innerWidth / 4 && !inInput) {
        pt.time = Date.now();
        pt.drawerLeft = this.base.lastElementChild!!.getBoundingClientRect().left;
        this.swipeDown = pt as ISwipeDown;
        // prevent scrolling if swiping from left edge
        if (pt.x < 10) {
          e.preventDefault();
          e.stopPropagation();
          this.setState({open: true});
          return false;
        }
      } else {
        this.swipeDown = this.swipeStart = this.swipePrev = null;
      }
    }
  };

  protected swipeTouchMove = e => {
    if (this.base && this.swipeDown) {
      console.log('tm');
      const pt = coords(e);
      if (!this.swipeStart) {
        if (Math.abs(pt.y - this.swipeDown.y) >= 10) {
          this.swipeDown = this.swipeStart = this.swipePrev = null;
        } else if (pt.x - this.swipeDown.x >= 5) {
          // @NOTE this intentionally only supports swipe-open for now
          this.swipeStart = pt;
          const scroller: HTMLElement =
            (document.scrollingElement as HTMLElement) ||
            document.documentElement;
          this.overflow = scroller.style.overflow;
          scroller.style.overflow = 'hidden';
        }
        return;
      }
      const delta = Math.max(
        this.swipeDown.drawerLeft,
        Math.min(0, this.swipeDown.drawerLeft + pt.x - this.swipeStart.x)
      );
      const style = (this.base.lastElementChild!! as HTMLElement).style;
      style.transform = `translateX(${delta}px)`;
      style.transition = 'none';
      clearTimeout(this.timer);
      this.swipePrev = pt;
      // e.preventDefault();
      e.stopPropagation();
      return false;
    }
  };

  protected swipeTouchEnd = e => {
    if (this.base) {
      console.log('te');
      let pt: Partial<ISwipeDown> & IPoint = coords(e);
      if (this.swipePrev && !pt.x && pt.x !== 0) {
        pt = this.swipePrev;
        this.swipePrev = null;
      }
      if (this.swipeDown && this.swipeStart) {
        console.log('te > i');
        const scroller: HTMLElement =
          (document.scrollingElement as HTMLElement) ||
          document.documentElement;
        scroller.style.overflow = this.overflow ? this.overflow : null;

        let open = !!this.props.open;
        const prev = this.swipePrev || this.swipeStart;
        const total = pt.x - prev.x;
        const delta = pt.x - this.swipeStart.x;
        const velocity = delta / (Date.now() - this.swipeDown.time);
        if ((delta > 150 && total > 0) || velocity > 0.2) {
          open = false;
        } else if ((delta < -100 && total < 0) || velocity < -0.2) {
          open = true;
        }
        console.log(`delta: ${delta}, total: ${total}, velocity: ${velocity}`);
        const style = (this.base.lastElementChild!! as HTMLElement).style;
        style.transform = null;
        style.transition = 'transform 200ms ease';
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          style.transition = '';
        }, 200);
        console.log(`open: ${open}`);
        this.setState({open});
        e.stopPropagation();
        return false;
      }
      this.swipeDown = this.swipeStart = this.swipePrev = null;
    }
  };
}
