import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ITabProps {
  active?: boolean;
}

export interface ITabState {}

export class Tab extends MaterialComponent<ITabProps, ITabState> {
  protected componentName = 'tab';
  protected mdcProps = ['active'];
  protected mdcNotifyProps = ['active'];

  protected materialDom(props) {
    return (
      <button class="mdc-tab" role="tab" aria-selected="true" {...props}>
        <span class="mdc-tab__content">{props.children}</span>
        <span
          class={`mdc-tab-indicator ${
            props.active ? 'mdc-tab-indicator--active' : ''
          }`}>
          <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
        </span>
        <span class="mdc-tab__ripple" />
      </button>
    );
  }
}
