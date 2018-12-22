import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IDrawerHeaderProps {}

export interface IDrawerHeaderState {}

export class DrawerHeader extends MaterialComponent<
  IDrawerHeaderProps,
  IDrawerHeaderState
> {
  protected componentName = 'drawer__header';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <header ref={this.setControlRef} {...props}>
        <div className="mdc-drawer__header-content">{props.children}</div>
      </header>
    );
  }
}
