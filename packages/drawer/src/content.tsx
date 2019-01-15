import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IDrawerContentProps {}

export interface IDrawerContentState {}

export class DrawerContent<
  PropsType = {},
  StateType = {}
> extends MaterialComponent<
  PropsType & IDrawerContentProps,
  StateType & IDrawerContentState
> {
  protected componentName = 'drawer__content';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <div class="mdc-drawer__content">
        <nav className="mdc-list" ref={this.setControlRef} {...props}>
          {props.children}
        </nav>
      </div>
    );
  }
}
