import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import Icon from "../Icon";

const notEmptyString = val => val !== "";

/**
 * @prop tile-gutter-1 {boolean} - use 1px gutter (default is 4px)
 * @prop header-caption {boolean} - position <GridList.SecondaryTile> at top
 * @prop twoline-caption {boolean} - add spacing to <GridList.SecondaryTile> for <GridList.SupportTextTile>
 * @prop with-icon-align {"start"|"end"} - position <GridList.IconTile> at beginning or end of <GridList.SecondaryTile>
 * @prop aspect-ratio {"1x1"|"16x9"|"2x3"|"3x2"|"4x3"|"3x4"} - aspect ratio for <GridList.PrimaryTile>
 */
class GridList extends MaterialComponent {
  get validationValuesByKey() {
    return {
      "with-icon-align": ["start", "end"],
      "tile-aspect": ["1x1", "16x9", "2x3", "3x2", "4x3", "3x4"]
    };
  }

  isValidValue(validationValues, testValue) {
    return (
      validationValues &&
      validationValues.findIndex(val => val === testValue) >= 0
    );
  }

  constructor() {
    super();
    this.componentName = "grid-list";
    this._mdcProps = ["header-caption", "twoline-caption", "tile-gutter-1"];
  }
  mapClassName(propKey, props) {
    const propValue = props[propKey];
    const validationValues = this.validationValuesByKey[propKey];

    return this.isValidValue(validationValues, propValue)
      ? `mdc-${this.componentName}--${propKey}-${propValue}`
      : "";
  }
  materialDom(props) {
    const className = Object.keys(this.validationValuesByKey)
      .map(key => {
        return this.mapClassName(key, props);
      })
      .filter(notEmptyString)
      .join(" ");

    return (
      <div {...props} className={className}>
        {props.children}
      </div>
    );
  }
}

class GridListTiles extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-list__tiles";
  }
  materialDom(props) {
    return <ul {...props}>{props.children}</ul>;
  }
}

class GridListTile extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-tile";
  }
  materialDom(props) {
    return <li {...props}>{props.children}</li>;
  }
}

class GridListPrimaryTile extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-tile__primary";
  }
  materialDom(props) {
    return <div {...props}>{props.children}</div>;
  }
}

class GridListPrimaryContentTile extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-tile__primary-content";
  }
  materialDom(props) {
    return <img {...props} />;
  }
}

class GridListSecondaryTile extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-tile__secondary";
  }
  materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

class GridListTitleTile extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-tile__title";
  }
  materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

class GridListSupportTextTile extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-tile__support-text";
  }
  materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

class GridListIconTile extends Icon {
  constructor() {
    super();
    this.componentName = "grid-tile__icon";
  }
}

GridList.Tiles = GridListTiles;
GridList.Tile = GridListTile;
GridList.PrimaryTile = GridListPrimaryTile;
GridList.PrimaryContentTile = GridListPrimaryContentTile;
GridList.SecondaryTile = GridListSecondaryTile;
GridList.TitleTile = GridListTitleTile;
GridList.SupportTextTile = GridListSupportTextTile;
GridList.IconTile = GridListIconTile;

export default GridList;
