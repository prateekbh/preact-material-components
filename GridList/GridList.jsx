import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import Icon from "../Icon";

/**
 * @prop tile-gutter {1|4} - Number of px for the padding/spacing between items.
 * @prop header-caption {boolean} - position <GridList.Tile.Secondary> at top
 * @prop twoline-caption {boolean} - add spacing to <GridList.Tile.Secondary> for <GridList.Tile.SupportText>
 * @prop icon-align {"start"|"end"} - position <GridList.Tile.Icon> at beginning or end of <GridList.Tile.Secondary>
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
      "icon-align",
      "tile-aspect-ratio"
    ];
  }
  materialDom(props) {
    // TODO: validate that the only values are "start" or "end"
    let className = props["icon-align"]
      ? `mdc-grid-list--with-icon-align-${props["icon-align"]}`
      : "";

    // TODO: validate that the only values are "1x1", "16x9", "2x3", "3x2", "4x3", or "3x4"
    if (props["tile-aspect-ratio"]) {
      className += ` mdc-grid-list--tile-aspect-${props["tile-aspect-ratio"]}`;
    }

    // TODO: validate that the only value is "1"
    if (props["tile-gutter"]) {
      className += ` mdc-grid-list--tile-gutter-${props["tile-gutter"]}`;
    }

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
    return (
      <div>
        <img {...props} />
      </div>
    );
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
