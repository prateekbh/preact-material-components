import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import Icon from "../Icon";

const VALIDATION_VALUES_BY_KEY = {
  "with-icon-align": ["start", "end"],
  "tile-gutter": [1],
  "tile-aspect-ratio": ["1x1", "16x9", "2x3", "3x2", "4x3", "3x4"]
};

const isValidValue = (validationValues, testValue) => {
  return (
    validationValues &&
    validationValues.findIndex(val => val === testValue) >= 0
  );
};

const notEmptyString = val => val !== "";

/**
 * @prop tile-gutter {1|4} - Number of px for the padding/spacing between items.
 * @prop header-caption {boolean} - position <GridList.Tile.Secondary> at top
 * @prop twoline-caption {boolean} - add spacing to <GridList.Tile.Secondary> for <GridList.Tile.SupportText>
 * @prop with-icon-align {"start"|"end"} - position <GridList.Tile.Icon> at beginning or end of <GridList.Tile.Secondary>
 * @prop tile-aspect-ratio {"1x1"|"16x9"|"2x3"|"3x2"|"4x3"|"3x4"} - aspect ratio for <GridList.Tile.Primary>
 */
class GridList extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-list";
    this._mdcProps = [
      "header-caption",
      "twoline-caption",
      "tile-gutter",
      "with-icon-align",
      "tile-aspect-ratio"
    ];
  }
  mapClassName(propKey, props) {
    const propValue = props[propKey];
    const validationValues = VALIDATION_VALUES_BY_KEY[propKey];

    return isValidValue(validationValues, propValue)
      ? `mdc-${this.componentName}--${propKey}-${propValue}`
      : "";
  }
  materialDom(props) {
    const className = Object.keys(VALIDATION_VALUES_BY_KEY)
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

class GridListTilePrimary extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-tile__primary";
  }
  materialDom(props) {
    return <div {...props}>{props.children}</div>;
  }
}

class GridListTilePrimaryContent extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-tile__primary-content";
  }
  materialDom(props) {
    return <img {...props} />;
  }
}

class GridListTileSecondary extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-tile__secondary";
  }
  materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

class GridListTileTitle extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-tile__title";
  }
  materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

class GridListTileSupportText extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-tile__support-text";
  }
  materialDom(props) {
    return <span {...props}>{props.children}</span>;
  }
}

class GridListTileIcon extends Icon {
  constructor() {
    super();
    this.componentName = "grid-tile__icon";
  }
}

GridList.Tiles = GridListTiles;
GridList.Tile = GridListTile;
GridList.Tile.Primary = GridListTilePrimary;
GridList.Tile.Primary.Content = GridListTilePrimaryContent;
GridList.Tile.Secondary = GridListTileSecondary;
GridList.Tile.Title = GridListTileTitle;
GridList.Tile.SupportText = GridListTileSupportText;
GridList.Tile.Icon = GridListTileIcon;

export default GridList;
