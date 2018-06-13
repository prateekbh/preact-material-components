import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';
import {MDCIconButtonToggle} from '@material/icon-button';
/**
 *  @prop dense = false
 *  @prop raised = false
 */
class IconButton extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'button';
  }
  componentDidMount() {
    this.MDComponent = new MDCIconButtonToggle(this.control);
    this.MDComponent.listen('MDCIconButtonToggle:change', this._onChange);
  }
  componentWillUnmount() {
    this.MDComponent.unlisten('MDCIconButtonToggle:change', this._onChange);
    this.MDComponent.destroy && this.MDComponent.destroy();
  }
  materialDom(props) {
    return (
      <button ref={this.setControlRef} {...props}>
        {this.props.children}
      </button>
    );
  }
}

export default IconButton;
