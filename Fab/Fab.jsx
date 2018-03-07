import Icon from '../Icon/';
import MaterialComponent from '../MaterialComponent';
import generateThemeClass from '../themeUtils/generateThemeClass';
import {h} from 'preact';

/**
 * @prop mini = false
 * @prop exited = false
 */
class Fab extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'fab';
    this._mdcProps = ['mini', 'exited'];
    this.themeProps = ['primary', 'secondary'];
  }
  componentDidMount() {
    super.attachRipple();
  }
  materialDom(props) {
    let classNames = [];
    this.themeProps.forEach(themeProp => {
      if (themeProp in props && props[themeProp] !== false)
        classNames.push(generateThemeClass(themeProp));
    });
    let classNameString = classNames.join(' ');

    return (
      <button ref={this.setControlRef} {...props} className={classNameString}>
        {props.children}
      </button>
    );
  }
}

class FabIcon extends Icon {
  constructor() {
    super();
    this.componentName = 'fab__icon';
  }
}

Fab.Icon = FabIcon;
export default Fab;
