import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';
import {MDCTopAppBar} from '@material/top-app-bar';
class TopAppBar extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'top-app-bar';
    this._mdcProps = ['short', 'short-collapsed'];
    this._onNav = this._onNav.bind(this);
  }
  _onNav(e) {
    if (this.props.onNav) {
      this.props.onNav(e);
    }
  }
  componentDidMount() {
    this.MDComponent = new MDCTopAppBar(this.control);
    this.MDComponent.listen('MDCTopAppBar:nav', this._onNav);
  }
  componentWillUnmount() {
    this.MDComponent.unlisten('MDCTopAppBar:nav', this._onNav);
    this.MDComponent.destroy();
  }
  materialDom(props) {
    return (
      <header ref={this.setControlRef} {...props}>
        {props.children}
      </header>
    );
  }
}

class TopAppBarRow extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'top-app-bar__row';
  }
}

/**
 * @prop align-end = false
 * @prop align-start = false
 * @prop shrink-to-fit = false
 */
class TopAppBarSection extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'top-app-bar__section';
    this._mdcProps = ['align-start', 'align-end'];
  }
  materialDom(props) {
    return <section {...props}>{props.children}</section>;
  }
}

/**
 * @prop menu = false
 */
class TopAppBarIcon extends MaterialComponent {
  constructor(props) {
    super();
    this.componentName = 'top-app-bar__icon';
  }
  materialDom(props) {
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

/**
 * @prop title = "
 */
class TopAppBarTitle extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'top-app-bar__title';
  }
  materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

TopAppBar.Section = TopAppBarSection;
TopAppBar.Icon = TopAppBarIcon;
TopAppBar.Title = TopAppBarTitle;
TopAppBar.Row = TopAppBarRow;

export default TopAppBar;
