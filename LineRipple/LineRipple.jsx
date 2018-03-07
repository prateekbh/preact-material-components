import MaterialComponent from '../MaterialComponent';
import {h} from 'preact';
import {MDCLineRipple} from '@material/line-ripple';

class LineRipple extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'line-ripple';
  }
  componentDidMount() {
    this.MDComponent = new MDCLineRipple(this.control);
  }
  materialDom(props) {
    return <div {...props} ref={this.setControlRef} />;
  }
}

export default LineRipple;
