import {MDCLineRipple} from '@material/line-ripple';
import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {h} from 'preact';

export interface ILineRippleProps {}

export interface ILineRippleState {}

export class LineRipple extends MaterialComponent<
  ILineRippleProps,
  ILineRippleState
> {
  public MDComponent?: MDCLineRipple;
  protected componentName = 'line-ripple';
  protected mdcProps = [];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCLineRipple(this.control);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  protected materialDom(props) {
    return <div {...props} ref={this.setControlRef} />;
  }
}
