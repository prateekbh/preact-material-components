import {MDCTabBar} from '@material/tab-bar';
import {MaterialComponent} from '@preact-material-components/base';
import {h} from 'preact';

export interface ITabBarProps {
  focusOnActivate?: boolean;
  useAutomaticActivation?: boolean;
  activateTab?: number;
  scrollIntoView?: number;

  onActivated?(e: {detail: {index: number}}): void;
}

export interface ITabBarState {}

export class TabBar extends MaterialComponent<ITabBarProps, ITabBarState> {
  public MDComponent?: MDCTabBar;

  protected componentName = 'tab-bar';
  protected mdcProps = [];
  protected mdcNotifyProps = ['focusOnActivate', 'useAutomaticActivation'];
  protected mdcCallProps = ['activateTab', 'scrollIntoView'];

  public componentDidMount() {
    super.componentDidMount();

    this.MDComponent = new MDCTabBar(this.control!!);
    this.MDComponent.listen('onActivated', this.onActivated);

    this.afterComponentDidMount();
  }

  public componentWillUnmount() {
    super.componentWillUnmount();

    this.MDComponent!!.destroy();
  }

  protected onActivated = e => {
    this.proxyEventHandler('onActivated', e);
  };

  protected materialDom() {
    const {children, ...props} = this.props;
    return (
      <div role="tablist" ref={this.setControlRef} {...props}>
        <div class="mdc-tab-scroller">
          <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export * from './tab';
