import MaterialComponent from '../MaterialComponent';
import { VNode } from 'preact';
import { MDCFoundation, MDCComponent } from '../MaterialComponentsWeb';

declare interface ISliderProps extends HTMLAttributes {
  disabled?: boolean;
  discrete?: boolean;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onInput?: (value: number) => void;
  onChange?: (value: number) => void;
}

export default class Slider extends MaterialComponent<ISliderProps, {}> {
  MDComponent: MDCSlider;
  setValue(props: ISliderProps): void;
}

declare class MDCSliderFoundation extends MDCFoundation<MDCSlider> {
  setupTrackMarker(): void;
  layout(): void;
  getValue(): number;
  setValue(value: number): void;
  getMax(): number;
  setMax(max: number): void;
  getMin(): number;
  setMin(min: number): void;
  getStep(): number;
  setStep(step: number): void;
  isDisabled(): boolean;
  setDisabled(disabled): void;
}
declare class MDCSlider extends MDCComponent<MDCSliderFoundation> {
  value: number;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  layout(): void;
  stepUp(amount?: number): void;
  stepDown(amount?: number): void;
}

interface DOMAttributes {
  // Image Events
  onLoad?:JSX.GenericEventHandler;

  // Clipboard Events
  onCopy?:JSX.ClipboardEventHandler;
  onCut?:JSX.ClipboardEventHandler;
  onPaste?:JSX.ClipboardEventHandler;

  // Composition Events
  onCompositionEnd?:JSX.CompositionEventHandler;
  onCompositionStart?:JSX.CompositionEventHandler;
  onCompositionUpdate?:JSX.CompositionEventHandler;

  // Focus Events
  onFocus?:JSX.FocusEventHandler;
  onBlur?:JSX.FocusEventHandler;

  // Form Events
  onSearch?:JSX.GenericEventHandler;
  onSubmit?:JSX.GenericEventHandler;

  // Keyboard Events
  onKeyDown?:JSX.KeyboardEventHandler;
  onKeyPress?:JSX.KeyboardEventHandler;
  onKeyUp?:JSX.KeyboardEventHandler;

  // Media Events
  onAbort?:JSX.GenericEventHandler;
  onCanPlay?:JSX.GenericEventHandler;
  onCanPlayThrough?:JSX.GenericEventHandler;
  onDurationChange?:JSX.GenericEventHandler;
  onEmptied?:JSX.GenericEventHandler;
  onEncrypted?:JSX.GenericEventHandler;
  onEnded?:JSX.GenericEventHandler;
  onLoadedData?:JSX.GenericEventHandler;
  onLoadedMetadata?:JSX.GenericEventHandler;
  onLoadStart?:JSX.GenericEventHandler;
  onPause?:JSX.GenericEventHandler;
  onPlay?:JSX.GenericEventHandler;
  onPlaying?:JSX.GenericEventHandler;
  onProgress?:JSX.GenericEventHandler;
  onRateChange?:JSX.GenericEventHandler;
  onSeeked?:JSX.GenericEventHandler;
  onSeeking?:JSX.GenericEventHandler;
  onStalled?:JSX.GenericEventHandler;
  onSuspend?:JSX.GenericEventHandler;
  onTimeUpdate?:JSX.GenericEventHandler;
  onVolumeChange?:JSX.GenericEventHandler;
  onWaiting?:JSX.GenericEventHandler;

  // MouseEvents
  onClick?:JSX.MouseEventHandler;
  onContextMenu?:JSX.MouseEventHandler;
  onDblClick?: JSX.MouseEventHandler;
  onDrag?:JSX.DragEventHandler;
  onDragEnd?:JSX.DragEventHandler;
  onDragEnter?:JSX.DragEventHandler;
  onDragExit?:JSX.DragEventHandler;
  onDragLeave?:JSX.DragEventHandler;
  onDragOver?:JSX.DragEventHandler;
  onDragStart?:JSX.DragEventHandler;
  onDrop?:JSX.DragEventHandler;
  onMouseDown?:JSX.MouseEventHandler;
  onMouseEnter?:JSX.MouseEventHandler;
  onMouseLeave?:JSX.MouseEventHandler;
  onMouseMove?:JSX.MouseEventHandler;
  onMouseOut?:JSX.MouseEventHandler;
  onMouseOver?:JSX.MouseEventHandler;
  onMouseUp?:JSX.MouseEventHandler;

  // Selection Events
  onSelect?:JSX.GenericEventHandler;

  // Touch Events
  onTouchCancel?:JSX.TouchEventHandler;
  onTouchEnd?:JSX.TouchEventHandler;
  onTouchMove?:JSX.TouchEventHandler;
  onTouchStart?:JSX.TouchEventHandler;

  // UI Events
  onScroll?:JSX.UIEventHandler;

  // Wheel Events
  onWheel?:JSX.WheelEventHandler;

  // Animation Events
  onAnimationStart?:JSX.AnimationEventHandler;
  onAnimationEnd?:JSX.AnimationEventHandler;
  onAnimationIteration?:JSX.AnimationEventHandler;

  // Transition Events
  onTransitionEnd?:JSX.TransitionEventHandler;
}

interface HTMLAttributes extends preact.PreactHTMLAttributes, DOMAttributes {
  // Standard HTML Attributes
  accept?:string;
  acceptCharset?:string;
  accessKey?:string;
  action?:string;
  allowFullScreen?:boolean;
  allowTransparency?:boolean;
  alt?:string;
  async?:boolean;
  autocomplete?:string;
  autofocus?:boolean;
  autoPlay?:boolean;
  capture?:boolean;
  cellPadding?:number | string;
  cellSpacing?:number | string;
  charSet?:string;
  challenge?:string;
  checked?:boolean;
  class?:string | { [key:string]: boolean };
  className?:string | { [key:string]: boolean };
  cols?:number;
  colSpan?:number;
  content?:string;
  contentEditable?:boolean;
  contextMenu?:string;
  controls?:boolean;
  coords?:string;
  crossOrigin?:string;
  data?:string;
  dateTime?:string;
  default?:boolean;
  defer?:boolean;
  dir?:string;
  disabled?:boolean;
  download?:any;
  draggable?:boolean;
  encType?:string;
  form?:string;
  formAction?:string;
  formEncType?:string;
  formMethod?:string;
  formNoValidate?:boolean;
  formTarget?:string;
  frameBorder?:number | string;
  headers?:string;
  height?:number | string;
  hidden?:boolean;
  high?:number;
  href?:string;
  hrefLang?:string;
  for?:string;
  httpEquiv?:string;
  icon?:string;
  id?:string;
  inputMode?:string;
  integrity?:string;
  is?:string;
  keyParams?:string;
  keyType?:string;
  kind?:string;
  label?:string;
  lang?:string;
  list?:string;
  loop?:boolean;
  low?:number;
  manifest?:string;
  marginHeight?:number;
  marginWidth?:number;
  max?:number | string;
  maxLength?:number;
  media?:string;
  mediaGroup?:string;
  method?:string;
  min?:number | string;
  minLength?:number;
  multiple?:boolean;
  muted?:boolean;
  name?:string;
  noValidate?:boolean;
  open?:boolean;
  optimum?:number;
  pattern?:string;
  placeholder?:string;
  poster?:string;
  preload?:string;
  radioGroup?:string;
  readOnly?:boolean;
  rel?:string;
  required?:boolean;
  role?:string;
  rows?:number;
  rowSpan?:number;
  sandbox?:string;
  scope?:string;
  scoped?:boolean;
  scrolling?:string;
  seamless?:boolean;
  selected?:boolean;
  shape?:string;
  size?:number;
  sizes?:string;
  slot?:string;
  span?:number;
  spellCheck?:boolean;
  src?:string;
  srcset?:string;
  srcDoc?:string;
  srcLang?:string;
  srcSet?:string;
  start?:number;
  step?:number | string;
  style?:any;
  summary?:string;
  tabIndex?:number;
  target?:string;
  title?:string;
  type?:string;
  useMap?:string;
  width?:number | string;
  wmode?:string;
  wrap?:string;

  // RDFa Attributes
  about?:string;
  datatype?:string;
  inlist?:any;
  prefix?:string;
  property?:string;
  resource?:string;
  typeof?:string;
  vocab?:string;
}