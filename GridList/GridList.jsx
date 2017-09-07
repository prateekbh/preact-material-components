import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop cellHeight	{number} - Number of px for one cell height. You can set 'auto' if you want to let the children determine the height.
 * @prop cols {number} - Number of columns.
 * @prop padding {1|4} - Number of px for the padding/spacing between items.
 * @prop style {object} - Override the inline styles of the root element
 */
class GridList extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-list";
    this._propsDict = {
      cols: "cols",
      padding: "padding",
      cellHeight: "cellHeight",
      secondaryActionIconAlign: "secondaryActionIconAlign",
      aspectRatio: "aspectRatio",
      twoLineCaptions: "twoLineCaptions"
    };
  }
  createClassName(props) {
    const baseClass = "mdc-grid-list";
    const classes = [];

    if (
      props[this._propsDict.padding] &&
      props[this._propsDict.padding] === 1
    ) {
      classes.push("mdc-grid-list--tile-gutter-1");
    }

    if (props[this._propsDict.secondaryActionIconAlign]) {
      classes.push(
        "mdc-grid-list--with-icon-align-" +
          props[this._propsDict.secondaryActionIconAlign]
      );
    }

    if (props[this._propsDict.aspectRatio]) {
      classes.push(
        "mdc-grid-list--tile-aspect-" + props[this._propsDict.aspectRatio]
      );
    }

    if (props[this._propsDict.twoLineCaptions]) {
      classes.push("mdc-grid-list--twoline-caption");
    }

    return classes.join(" ");
  }
  materialDom(props) {
    const cols = props.cols || 2;
    const tileWidthPct = Math.floor(100 / cols) + "%";

    return (
      <span>
        <style
          dangerouslySetInnerHTML={{
            __html: `
        .mdc-grid-list__tiles {
          --mdc-grid-list-tile-width: ${tileWidthPct};
        }
        .mdc-grid-list__tiles > .mdc-grid-tile > * img {
          width: 100%;
        }
      `
          }}
        />
        <div
          className={this.createClassName(props)}
          ref={control => {
            this.control = control;
          }}
          {...props}
        >
          <ul class="mdc-grid-list__tiles">{props.children}</ul>
        </div>
      </span>
    );
  }
}

/**
 * @prop actionIcon	{Node} - An IconButton element to be used as secondary action target (primary action target is the tile itself).
 * @prop actionPosition {'left'|'right'} - Position of secondary action IconButton.
 * @prop children	{Node} - Theoretically you can pass any node as children, but the main use case is to pass an img, in whichcase GridTile takes care of making the image "cover" available space (similar to background-size: cover or to object-fit:cover).
 * @prop cols	{number} - Width of the tile in number of grid cells.
 * @prop containerElement	{string|node} - Either a string used as tag name for the tile root element, or a ReactElement. This is useful when you have, for example, a custom implementation of a navigation link (that knows about your routes) and you want to use it as the primary tile action. In case you pass a ReactElement, please ensure that it passes all props, accepts styles overrides and render it's children.
 * @prop rows	{number} - Height of the tile in number of grid cells.
 * @prop style {object} - Override the inline-styles of the root element.
 * @prop subtitle	{Node} - String or element serving as subtitle (support text).
 * @prop subtitleStyle {object} - Override the inline-styles of the subtitle element.
 * @prop title {Node} - Title to be displayed on tile.
 * @prop titleBackground {string} - 'rgba(0, 0, 0, 0.4)'	Style used for title bar background. Useful for setting custom gradients for example
 * @prop titlePosition {'top'|'bottom'} - Position of the title bar (container of title, subtitle and action icon).
 * @prop titleStyle {object} - Override the inline-styles of the title element.
 */
class GridListTile extends MaterialComponent {
  constructor() {
    super();
    this.componentName = "grid-list-tile";
    this._propsDict = {
      actionIcon: "actionIcon",
      actionPosition: "actionPosition",
      children: "children",
      cols: "cols",
      containerElement: "containerElement",
      rows: "rows",
      subtitle: "subtitle",
      subtitleStyle: "subtitleStyle",
      title: "title",
      titleBackground: "titleBackground",
      titlePosition: "titlePosition",
      titleStyle: "titleStyle",
      actionHandler: "actionHandler"
    };
  }
  createClassName(props) {
    const baseClass = "mdc-grid-list-tile--";
    const classes = [];

    if (props[this._propsDict.cols]) {
      classes.push(baseClass + "span-" + props[this._propsDict.cols]);
    }

    return classes.join(" ");
  }
  materialDom(props) {
    const actionHandler = props.actionHandler || function() {};
    const action = props.actionIcon ? (
      <i class="mdc-grid-tile__icon material-icons" onClick={actionHandler}>
        {props.actionIcon}
      </i>
    ) : (
      ""
    );
    return (
      <li
        className="mdc-grid-tile"
        ref={control => {
          this.control = control;
        }}
        {...props}
      >
        <div class="mdc-grid-tile__primary">
          <div class="mdc-grid-tile__primary-content">{props.children}</div>
        </div>
        {props.title ? (
          <span class="mdc-grid-tile__secondary">
            {action}
            <span class="mdc-grid-tile__title">{props.title}</span>
            {props.subtitle ? (
              <span class="mdc-grid-tile__support-text">{props.subtitle}</span>
            ) : (
              ""
            )}
          </span>
        ) : (
          ""
        )}
      </li>
    );
  }
  render() {
    const element = super.render();
    // remove the extra attributes used for customising this element - keep the DOM clean
    Object.keys(this._propsDict).forEach(
      key => delete element.attributes[this._propsDict[key]]
    );
    return element;
  }
}

GridList.Tile = GridListTile;

export default GridList;
