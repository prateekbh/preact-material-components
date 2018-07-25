import {h} from 'preact';
import MaterialComponent from '../ts/MaterialComponent';
import {MDCIconButtonToggle} from '@material/icon-button';
/**
 *  @prop data-toggle-on-content="favorite"
 *  @prop data-toggle-on-label="Remove from favorites"
 *  @prop data-toggle-off-content="favorite_border"
 *  @prop data-toggle-off-label="Add to favorites"
 */
class IconButton extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'icon-button';
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
      <button className="material-icons" ref={this.setControlRef} {...props}>
        {this.props.children}
      </button>
    );
  }
}

export default IconButton;
