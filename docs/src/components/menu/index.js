// Dependencies
import {h, Component} from 'preact';
import {route} from 'preact-router';

// Material Components
import Drawer from '../../../../esm/Drawer';
import List from '../../../../esm/List';
import Typography from '../../../../esm/Typography';

import '../../../../Drawer/style.css';
import '../../../../List/style.css';
import '../../../../Typography/style.css';

const json = require('../../../../package.json');

// Class
export default class Menu extends Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _routeFromLink(node) {
    // only valid elements
    if (!node || !node.getAttribute) return;

    let href = node.getAttribute('href'),
      target = node.getAttribute('target');

    // ignore links with targets and non-path URLs
    if (!href || !href.match(/^\//g) || (target && !target.match(/^_?self$/i)))
      return;

    // attempt to route, if no match simply cede control to browser
    this.props.onSelect && this.props.onSelect(href);
    return route(href);
  }

  _handleLinkClick(e) {
    // eslint-disable-next-line eqeqeq
    if (e.button === 0) {
      this._routeFromLink(e.currentTarget || e.target || this);
      return this._prevent(e);
    }
  }

  _prevent(e) {
    if (e) {
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      if (e.stopPropagation) e.stopPropagation();
      e.preventDefault();
    }
    return false;
  }

  _onClick(e) {
    this.close();
    this._handleLinkClick(e);
  }

  close() {
    this.drawer.MDComponent.open = false;
  }

  open() {
    this.drawer.MDComponent.open = true;
  }

  render({items}) {
    return (
      <Drawer modal ref={drawer => (this.drawer = drawer)}>
        <Drawer.DrawerHeader>
          <div>
            <Typography headline5>Components</Typography>
          </div>
          <Typography caption>
            @ (v
            {json['version']})
          </Typography>
        </Drawer.DrawerHeader>
        <Drawer.DrawerContent>
          {items.map(({icon, link, text}, index) => (
            <Drawer.DrawerItem
              selected={index === 0}
              href={link}
              onClick={this._onClick}>
              <List.ItemGraphic>{icon || 'code'}</List.ItemGraphic>
              {text}
            </Drawer.DrawerItem>
          ))}
        </Drawer.DrawerContent>
      </Drawer>
    );
  }
}
