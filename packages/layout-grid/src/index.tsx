import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ILayoutGridProps {}

export interface ILayoutGridState {}

export class LayoutGrid extends MaterialComponent<
  ILayoutGridProps,
  ILayoutGridState
> {
  protected componentName = 'layout-grid';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <div ref={this.setControlRef} {...props}>
        {props.children}
      </div>
    );
  }
}
