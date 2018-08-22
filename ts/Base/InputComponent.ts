import MDCComponent from '@material/base/component';
import autobind from 'autobind-decorator';
import MaterialComponent from './MaterialComponent';

export abstract class InputComponent<
  M extends MDCComponent<any, any> & {value: string},
  PropType,
  StateType
> extends MaterialComponent<PropType, StateType> {
  protected inputRef?: HTMLInputElement;
  protected MDComponent?: M;

  @autobind
  public getMDComponent(): M | undefined {
    return this.MDComponent;
  }

  public get input(): HTMLInputElement | undefined {
    return this.inputRef;
  }

  public get value(): string | undefined {
    if (this.MDComponent && this.MDComponent.value) {
      return this.MDComponent.value;
    } else if (this.inputRef) {
      return this.inputRef.value;
    }
    return;
  }

  @autobind
  protected setInputRef(ref?: HTMLInputElement) {
    this.inputRef = ref;
  }
}

export default InputComponent;
