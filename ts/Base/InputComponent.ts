import MDCComponent from '@material/base/component';
import MDCFoundation from '@material/base/foundation';
import autobind from 'autobind-decorator';
import MaterialComponent from './MaterialComponent';

export abstract class InputComponent<
  M extends MDCComponent<any, F>,
  F extends MDCFoundation<any> & {getValue(): string},
  PropType,
  StateType
> extends MaterialComponent<PropType, StateType> {
  protected inputRef?: HTMLInputElement;
  protected MDComponent?: M;

  @autobind
  public getMDComponent(): M | undefined {
    return this.MDComponent;
  }

  /**
   * Warning: Experimental
   */
  public get input(): HTMLInputElement | undefined {
    return this.inputRef;
  }

  public get value(): string | undefined {
    if (this.MDComponent) {
      return this.MDComponent.getDefaultFoundation().getValue();
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
