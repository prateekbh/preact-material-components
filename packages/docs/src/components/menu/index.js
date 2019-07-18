// Dependencies
import {h, Component} from 'preact';
import {route} from 'preact-router';

// Material Components
import {Drawer} from '@preact-material-components/drawer';
import {DrawerHeader} from '@preact-material-components/drawer/lib/header';
import {DrawerContent} from '@preact-material-components/drawer/lib/content';
import {DrawerItem} from '@preact-material-components/drawer/lib/item';
import {ListItemGraphic} from '@preact-material-components/list/lib/item/graphic';
import {Typography} from '@preact-material-components/typography';

import '@preact-material-components/typography/sass';
import '@preact-material-components/list/sass';
import '@preact-material-components/drawer/sass';

import json from '../../../package.json';

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
      <Drawer
        modal
        ref={drawer => (this.drawer = drawer)}
        enableGestureSupport
        onSwipeStart={() => {
          document.body.style.overflow = 'hidden';
        }}
        onSwipeEnd={() => {
          document.body.style.overflow = 'auto';
        }}>
        <DrawerHeader>
          <div>
            <Typography headline5>Components</Typography>
          </div>
          <Typography caption>
            @ (v
            {json['version']})
          </Typography>
        </DrawerHeader>
        <DrawerContent>
          {items.map(({icon, link, text}) => (
            <DrawerItem
              activated={
                typeof window !== 'undefined'
                  ? link === window.location.pathname
                  : false
              }
              href={link}
              onClick={this._onClick}>
              <ListItemGraphic>{icon || 'code'}</ListItemGraphic>
              {text}
            </DrawerItem>
          ))}
        </DrawerContent>
      </Drawer>
    );
  }
}
