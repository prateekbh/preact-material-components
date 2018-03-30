import {h} from 'preact';
import MaterialComponent from '../MaterialComponent';

class ImageList extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'image-list';
    this._mdcProps = ['masonry', 'with-text-protection'];
  }
  materialDom(props) {
    return (
      <ul {...props} ref={this.setControlRef}>
        {props.children}
      </ul>
    );
  }
}

class ImageListAspectContainer extends MaterialComponent {
  constructor() {
    super();
    this.componentName = 'image-list__image-aspect-container';
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

ImageList.Item = ImageListItem;
ImageList.AspectContainer = ImageListAspectContainer;
ImageList.Image = ImageListImage;
ImageList.Supporting = ImageListSupporting;
ImageList.Label = ImageListLabel;

export default ImageList;
