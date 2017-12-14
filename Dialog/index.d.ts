import MaterialComponent from '../MaterialComponent';
import { VNode, PreactHTMLAttributes } from 'preact';
import Button from '../Button';
import { MDCFoundation, MDCComponent } from '../MaterialComponentsWeb';

declare interface IDialogProps extends JSX.HTMLAttributes {
  onAccept?: () => void;
  onCancel?: () => void;
}
export default class Dialog extends MaterialComponent<IDialogProps, {}> {
  static Header: typeof Header;
  static Body: typeof Body;
  static Footer: typeof Footer;
  static FooterButton: typeof FooterButton;

  MDComponent: MDCDialog;
}

declare class Header extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare interface IBodyProps extends JSX.HTMLAttributes {
  scrollable?: boolean;
}
declare class Body extends MaterialComponent<IBodyProps, {}> {}

declare class Footer extends MaterialComponent<JSX.HTMLAttributes, {}> {}

declare interface IFooterButtonProps extends HTMLAttributesWithoutAccept {
  accept?: boolean;
  cancel?: boolean;
}
declare class FooterButton extends Button<IFooterButtonProps, {}> {}

declare class MDCDialogFoundation extends MDCFoundation<MDCDialog> {
  open(): void;
  close(): void;
  isOpen(): boolean;
  accept(shouldNotify: boolean): void;
  cancel(shouldNotify: boolean): void;
}

declare class MDCDialog extends MDCComponent<MDCDialogFoundation> {
  open(): boolean;
  show(): void;
  close(): void;
}

/**
 * `IFooterButtonProps` conflicts with `JSX.HTMLAttributes` as
 * `IFooterButtonProps` has the property `accept` which is also defined in
 * `JSX.HTMLAttributes`. To allow for the other type of `accept` it has been
 * removed in `HTMLAttributesWithoutAccept`.
 */
interface HTMLAttributesWithoutAccept extends PreactHTMLAttributes, JSX.DOMAttributes {
  // Standard HTML Attributes
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
  value?:string | string[];
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