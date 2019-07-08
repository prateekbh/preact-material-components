import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {MDCFormField} from '@material/form-field';
import {h} from 'preact';

export interface IFormFieldProps {
  'align-end'?: boolean;
  input?: any;
}

export interface IFormFieldState {}

export class FormField extends MaterialComponent<
  IFormFieldProps,
  IFormFieldState
> {
  protected componentName = 'form-field';
  protected mdcProps = ['align-end'];

  public componentDidMount() {
    if (this.control) {
      this.MDComponent = new MDCFormField(this.control);
    }
  }

  public componentDidUpdate(props) {
    if (props.input !== this.props.input) {
      this.MDComponent.input = this.props.input;
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  protected materialDom(props) {
    return (
      <div {...props} ref={this.setControlRef}>
        {this.props.children}
      </div>
    );
  }
}
