import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';

/**
 * @prop disabled = false
 */
export default class Icon extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'icon';
  }
  materialDom(props) {
    let classes = ['material-icons'];
    // CardActionIcon sends className
    props.className && classes.push(props.className);
    return (
      <i {...props} className={classes.join(' ')}>
        {props.children}
      </i>
    );
  }
}
