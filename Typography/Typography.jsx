import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';

/**
 * @prop mini = false
 * @prop plain = false
 */
export default class Typography extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'typography';
    this._mdcProps = [
      'headline1',
      'headline2',
      'headline3',
      'headline4',
      'headline5',
      'headline6',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'button',
      'caption',
      'overline'
    ];
  }
  materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef}>
        {props.children}
      </span>
    );
  }
}
