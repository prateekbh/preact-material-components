import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';

class ImageList extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'image-list';
    this._mdcProps = ['masonry'];
  }
  materialDom(props) {
    return (
      <ul {...props} ref={this.setControlRef}>
        {props.children}
      </ul>
    );
  }
}

class ImageListItem extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'image-list__item';
  }
  materialDom(props) {
    return (
      <li {...props} ref={this.setControlRef}>
        {props.children}
      </li>
    );
  }
}

class ImageListImage extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'image-list__image';
  }
  materialDom(props) {
    return (
      <img {...props} ref={this.setControlRef}>
        {props.children}
      </img>
    );
  }
}

class ImageListSupporting extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'image-list__supporting';
  }
}

class ImageListLabel extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'image-list__label';
  }
  materialDom(props) {
    return (
      <span {...props} ref={this.setControlRef}>
        {props.children}
      </span>
    );
  }
}

ImageList.ListItem = ImageListItem
ImageList.ListImage = ImageListImage
ImageList.ListSupporting = ImageListSupporting
Image.ListLabel = ImageListLabel

export default ImageList;
