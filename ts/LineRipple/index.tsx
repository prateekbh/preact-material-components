import {MDCLineRipple} from '@material/line-ripple';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface ILineRippleProps {}

export interface ILineRippleState {}

export class LineRipple extends MaterialComponent<
  ILineRippleProps,
  ILineRippleState
> {
  protected componentName = 'line-ripple';
  protected mdcProps = [];
  protected MDComponent?: MDCLineRipple;

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

  @autobind
  protected materialDom(props) {
    return <div {...props} ref={this.setControlRef} />;
  }
}

export default LineRipple;
