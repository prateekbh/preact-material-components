import {MDCTopAppBar} from '@material/top-app-bar';
import {bind} from 'bind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface ITopAppBarRowProps {}

export interface ITopAppBarRowState {}

export class TopAppBarRow extends MaterialComponent<
  ITopAppBarRowProps,
  ITopAppBarRowState
> {
  protected componentName = 'top-app-bar__row';
  protected mdcProps = [];

  protected materialDom(props) {
    return <div {...props}>{this.props.children}</div>;
  }
}

export interface ITopAppBarSectionProps {
  'align-start'?: boolean;
  'align-end'?: boolean;
}

export interface ITopAppBarSectionState {}

export class TopAppBarSection extends MaterialComponent<
  ITopAppBarSectionProps,
  ITopAppBarSectionState
> {
  protected componentName = 'top-app-bar__section';
  protected mdcProps = ['align-start', 'align-end'];

  protected materialDom(props) {
    return <section {...props}>{props.children}</section>;
  }
}

export interface ITopAppBarIconProps {
  navigation?: boolean; // TODO: Add to docs / remove from here
}

export interface ITopAppBarIconState {}

export class TopAppBarIcon extends MaterialComponent<
  ITopAppBarIconProps,
  ITopAppBarIconState
> {
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

export interface ITopAppBarTitleProps {}

export interface ITopAppBarTitleState {}

export class TopAppBarTitle extends MaterialComponent<
  ITopAppBarTitleProps,
  ITopAppBarTitleState
> {
  protected componentName = 'top-app-bar__title';
  protected mdcProps = [];

  protected materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

export interface ITopAppBarProps {
  short?: boolean; // TODO: Add to docs / remove from here
  'short-collapsed'?: boolean; // TODO: Add to docs / remove from here
  fixed?: boolean; // TODO: Add to docs / remove from here
  prominent?: boolean; // TODO: Add to docs / remove from here
  onNav: JSX.GenericEventHandler; // TODO: Add to docs / remove from here
}

export interface ITopAppBarState {}

export class TopAppBar extends MaterialComponent<
  ITopAppBarProps,
  ITopAppBarState
> {
  public MDComponent?: MDCTopAppBar;

  protected componentName = 'top-app-bar';
  protected mdcProps = ['short', 'short-collapsed', 'fixed', 'prominent'];

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      const comp = new MDCTopAppBar(this.control);
      comp.listen('MDCTopAppBar:nav', this.onNav);
      this.MDComponent = comp;
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.unlisten('MDCTopAppBar:nav', this.onNav);
      this.MDComponent.destroy();
    }
  }

  @bind
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

export default class extends TopAppBar {
  public static readonly Section = TopAppBarSection;
  public static readonly Icon = TopAppBarIcon;
  public static readonly Title = TopAppBarTitle;
  public static readonly Row = TopAppBarRow;
}
