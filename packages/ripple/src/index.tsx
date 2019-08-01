import {AnyComponent, h} from 'preact';
import {
  MaterialComponent,
  MaterialComponentProps
} from '@preact-material-components/base/lib/MaterialComponent';
import {MDCRipple} from '@material/ripple/component';

export interface IRippleProps {
  enabled?: boolean;
  tag?: AnyComponent | string;
}

export interface IRippleState {}

export class Ripple extends MaterialComponent<IRippleProps, IRippleState> {
  public MDComponent?: MDCRipple;

  protected componentName = 'ripple';
  protected mdcProps = [];

  public componentDidMount() {
    super.componentDidMount();
    this.MDComponent = new MDCRipple(this.control!!);
  }

  public componentWillUnmount(): void {
    this.MDComponent!!.destroy();
  }

  protected materialDom(allprops: MaterialComponentProps<IRippleProps>) {
    const {tag, enabled, ...props} = allprops;
    const Tag = tag ? tag : 'div';

    const surfaceClass = 'mdc-ripple-surface';
    props.class = props.class ? `${props.class} ${surfaceClass}` : surfaceClass;

    return (
      <Tag {...props} ref={this.setControlRef}>
        {props.children}
      </Tag>
    );
  }
}
