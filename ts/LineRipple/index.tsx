import {MDCLineRipple} from '@material/line-ripple';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import autobind from 'autobind-decorator';

export interface ILineRippleProps {}

export interface ILineRippleState {}

export class LineRipple extends MaterialComponent<
  ILineRippleProps,
  ILineRippleState
> {
  protected componentName = 'line-ripple';
  protected mdcProps = [];
  protected MDComponent: MDCLineRipple;

  public componentDidMount() {
    this.MDComponent = new MDCLineRipple(this.control);
  }

  @autobind
  protected materialDom(props) {
    return <div {...props} ref={this.setControlRef} />;
  }
}

export default LineRipple;
