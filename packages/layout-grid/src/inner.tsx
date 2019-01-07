import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ILayoutGridInnerProps {}

export interface ILayoutGridInnerState {}

export class LayoutGridInner extends MaterialComponent<
  ILayoutGridInnerProps,
  ILayoutGridInnerState
> {
  protected componentName = 'layout-grid__inner';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <div ref={this.setControlRef} {...props}>
        {props.children}
      </div>
    );
  }
}
