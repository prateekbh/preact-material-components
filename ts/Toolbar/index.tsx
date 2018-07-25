import {MDCToolbar} from '@material/toolbar';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface IRowProps {}

export interface IRowState {}

class ToolbarRow extends MaterialComponent<IRowProps, IRowState> {
  protected componentName = 'toolbar__row';
  protected mdcProps = [];

  protected materialDom() {
    return <div />;
  }
}

export interface ISectionProps extends JSX.HTMLAttributes {
  'align-start'?: boolean;
  'align-end'?: boolean;
  'shrink-to-fit'?: boolean;
}

export interface ISectionState {}

/**
 * @prop align-end = false
 * @prop align-start = false
 * @prop shrink-to-fit = false
 */
class ToolbarSection extends MaterialComponent<ISectionProps, ISectionState> {
  protected componentName = 'toolbar__section';
  protected mdcProps = ['align-start', 'align-end', 'shrink-to-fit'];

  protected materialDom(props) {
    return <section {...props}>{props.children}</section>;
  }
}
export interface IIconProps extends JSX.HTMLAttributes {
  menu?: boolean;
}

export interface IIconState {}

/**
 * @prop menu = false
 */
class ToolbarIcon extends MaterialComponent<IIconProps, IIconState> {
  protected componentName = 'toolbar__icon';
  protected mdcProps = [];

  constructor(props) {
    super();
    if (props.menu) {
      this.componentName = 'toolbar__menu-icon';
    }
  }

  protected materialDom(props) {
    return (
      <a className="material-icons" {...props}>
        {props.children || 'menu'}
      </a>
    );
  }
}

export interface ITitleProps extends JSX.HTMLAttributes {
  title?: string;
}

export interface ITitleState {}

/**
 * @prop title = ''
 */
class ToolbarTitle extends MaterialComponent<ITitleProps, IToolbarState> {
  protected componentName = 'toolbar__title';
  protected mdcProps = [];

  protected materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

export interface IToolbarProps extends JSX.HTMLAttributes {
  fixed?: boolean;
  'fixed-lastrow-only'?: boolean;
  waterfall?: boolean;
  flexible?: boolean;
  'flexible-default-behavior'?: boolean;
}

export interface IToolbarState {}

/**
 * @prop fixed = false
 * @prop fixed-lastrow-only = false
 * @prop waterfall = false
 * @prop flexible = false
 * @prop flexible-default-behavior = false
 */
export class Toolbar extends MaterialComponent<IToolbarProps, IToolbarState> {
  public static readonly Section = ToolbarSection;
  public static readonly Icon = ToolbarIcon;
  public static readonly Title = ToolbarTitle;
  public static readonly Row = ToolbarRow;

  protected componentName = 'toolbar';
  protected mdcProps = [
    'fixed',
    'fixed-lastrow-only',
    'waterfall',
    'flexible',
    'flexible-default-behavior'
  ];
  protected MDComponent: MDCToolbar;

  public componentDidMount() {
    this.MDComponent = new MDCToolbar(this.control);
    this.MDComponent.listen('MDCToolbar:change', this.onChange);
  }

  public componentWillUnmount() {
    this.MDComponent.unlisten('MDCToolbar:change', this.onChange);
    if (this.MDComponent.destroy) {
      this.MDComponent.destroy();
    }
  }

  protected onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  protected materialDom(props) {
    return (
      <header ref={this.setControlRef} {...props}>
        {props.children}
      </header>
    );
  }
}

export default Toolbar;
