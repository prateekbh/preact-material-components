import MaterialComponent from '../MaterialComponent';
import {h} from 'preact';
import {MDCLineRipple} from '@material/line-ripple';
import {MDCComponent, MDCFoundation} from '../../MaterialComponentsWeb';

declare class MDCLineRippleFoundation extends MDCFoundation<MDCLineRipple> {
  public activate(): void;
  public deactivate(): void;
  public setRippleCenter(xCoordinate: number): void;
  public handleTransitionEnd(e: Event): void;
}

declare class MDCLineRipple extends MDCComponent<MDCLineRippleFoundation> {
  public activate(): void;
  public deactivate(): void;
  public setRippleCenter(xCoordinate: number): void;
}

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

  protected materialDom(props) {
    return <div {...props} ref={this.setControlRef} />;
  }
}

export default LineRipple;
