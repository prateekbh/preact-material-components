import {MDCToolbar} from '@material/toolbar';
import {bind} from 'bind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface IToolbarRowProps {}

export interface IToolbarRowState {}

export class ToolbarRow extends MaterialComponent<
  IToolbarRowProps,
  IToolbarRowState
> {
  protected componentName = 'toolbar__row';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}

export interface IToolbarSectionProps {
  'align-start'?: boolean;
  'align-end'?: boolean;
  'shrink-to-fit'?: boolean;
}

export interface IToolbarSectionState {}

export class ToolbarSection extends MaterialComponent<
  IToolbarSectionProps,
  IToolbarSectionState
> {
  protected componentName = 'toolbar__section';
  protected mdcProps = ['align-start', 'align-end', 'shrink-to-fit'];

  protected materialDom(props) {
    return <section {...props}>{props.children}</section>;
  }
}

export interface IToolbarIconProps {
  menu?: boolean;
}

export interface IToolbarIconState {}

export class ToolbarIcon extends MaterialComponent<
  IToolbarIconProps,
  IToolbarIconState
> {
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

export interface IToolbarTitleProps {
  title?: string; // TODO: Add to docs / remove from here
}

export interface IToolbarTitleState {}

export class ToolbarTitle extends MaterialComponent<
  IToolbarTitleProps,
  IToolbarTitleState
> {
  protected componentName = 'toolbar__title';
  protected mdcProps = [];

  protected materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

export interface IToolbarProps {
  fixed?: boolean;
  'fixed-lastrow-only'?: boolean;
  waterfall?: boolean;
  flexible?: boolean;
  'flexible-default-behavior'?: boolean;
}

export interface IToolbarState {}

export class Toolbar extends MaterialComponent<IToolbarProps, IToolbarState> {
  public MDComponent?: MDCToolbar;

  protected componentName = 'toolbar';
  protected mdcProps = [
    'fixed',
    'fixed-lastrow-only',
    'waterfall',
    'flexible',
    'flexible-default-behavior'
  ];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCToolbar(this.control);
      this.MDComponent.listen('MDCToolbar:change', this.onChange);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCToolbar:change', this.onChange);
      this.MDComponent.destroy();
    }
  }

  @bind
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

export default class extends Toolbar {
  public static readonly Section = ToolbarSection;
  public static readonly Icon = ToolbarIcon;
  public static readonly Title = ToolbarTitle;
  public static readonly Row = ToolbarRow;
}
