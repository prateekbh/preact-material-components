import {MDCTabBar} from '@material/tab-bar';
import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ITabBarProps {
  activeTabIndex?: number; // TODO: Fix type in docs
}

export interface ITabBarState {}

export class TabBar extends MaterialComponent<ITabBarProps, ITabBarState> {
  public MDComponent?: MDCTabBar;

  protected componentName = 'tab-bar';
  protected mdcProps = [];
  protected mdcNotifyProps = ['activeTabIndex'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCTabBar(this.control);
    }
    this.afterComponentDidMount();
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  protected materialDom(props) {
    return (
      <div class="mdc-tab-bar" role="tablist" ref={this.setControlRef}>
        <div class="mdc-tab-scroller">
          <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">{props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
