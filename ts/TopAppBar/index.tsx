import {MDCTopAppBar} from '@material/top-app-bar';
import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';

export interface IRowProps {}

export interface IRowState {}

export class TopAppBarRow extends MaterialComponent<IRowProps, IRowState> {
  protected componentName = 'top-app-bar__row';
  protected mdcProps = [];

  protected materialDom() {
    return <div />;
  }
}

export interface ISectionProps extends JSX.HTMLAttributes {
  'align-start'?: boolean;
  'align-end'?: boolean;
}

export interface ISectionState {}

/**
 * @prop align-end = false
 * @prop align-start = false
 * @prop shrink-to-fit = false TODO: Is this sill there?
 */
export class TopAppBarSection extends MaterialComponent<ISectionProps, ISectionState> {
  protected componentName = 'top-app-bar__section';
  protected mdcProps = ['align-start', 'align-end'];

  protected materialDom(props) {
    return <section {...props}>{props.children}</section>;
  }
}

export interface IIconProps extends JSX.HTMLAttributes {
  navigation?: boolean;
}

export interface IIconState {}

/**
 * @prop menu = false TODO: Is this sill there?
 */
export class TopAppBarIcon extends MaterialComponent<IIconProps, IIconState> {
  protected componentName = 'top-app-bar__icon';
  protected mdcProps = [];

  protected materialDom(props) {
    const className = props.navigation
      ? 'material-icons mdc-top-app-bar__navigation-icon'
      : 'material-icons';
    return (
      <a className={className} {...props}>
        {props.children}
      </a>
    );
  }
}

export interface ITitleProps {}

export interface ITitleState {}

/**
 * @prop title = '' TODO: Is this sill there?
 */
export class TopAppBarTitle extends MaterialComponent<
  ITitleProps,
  ITitleState
> {
  protected componentName = 'top-app-bar__title';
  protected mdcProps = [];

  protected materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

export interface ITopAppBarProps extends JSX.HTMLAttributes {
  short?: boolean;
  'short-collapsed'?: boolean;
  fixed?: boolean;
  prominent?: boolean;
  onNav: (e: any /* TODO: Determine correct type */) => void;
}

export interface ITopAppBarState {}

export class TopAppBar extends MaterialComponent<
  ITopAppBarProps,
  ITopAppBarState
> {
  public static readonly Section = TopAppBarSection;
  public static readonly Icon = TopAppBarIcon;
  public static readonly Title = TopAppBarTitle;
  public static readonly Row = TopAppBarRow;

  protected componentName = 'top-app-bar';
  protected mdcProps = ['short', 'short-collapsed', 'fixed', 'prominent'];

  protected MDComponent?: MDCTopAppBar;

  public componentDidMount() {
    this.MDComponent = new MDCTopAppBar(this.control);
    this.MDComponent.listen('MDCTopAppBar:nav', this.onNav);
  }

  public componentWillUnmount() {
    this.MDComponent.unlisten('MDCTopAppBar:nav', this.onNav);
    this.MDComponent.destroy();
  }

  protected onNav(e) {
    if (this.props.onNav) {
      this.props.onNav(e);
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

export default TopAppBar;
