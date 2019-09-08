import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';
import {MDCTab} from '@material/tab/component';

export interface ITabProps {}

export interface ITabState {}

export class Tab extends MaterialComponent<ITabProps, ITabState> {
  public MDComponent?: MDCTab;

  protected componentName = 'tab';
  protected mdcProps = [];
  protected mdcNotifyProps = [];

  protected materialDom() {
    const {children, ...props} = this.props;

    return (
      <button class="mdc-tab" role="tab" {...props}>
        <span class="mdc-tab__content">{children}</span>
        <span class="mdc-tab-indicator">
          <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
        </span>
        <span class="mdc-tab__ripple" />
      </button>
    );
  }
}

export * from './icon';
export * from './label';
