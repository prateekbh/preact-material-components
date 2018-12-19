// Dependencies
import {h, Component} from 'preact';

import './style';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import EventsTable from '../../components/events-table';
import OrgDoc from '../../components/original-documentation';

// Styles
import './style';

// Samples
import sample from './sample.txt';

// Class
export default class DrawerPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Drawer.Drawer',
        props: [
          {
            name: 'dismissible',
            description: 'Builds a dismissible drawer.'
          },
          {
            name: 'modal',
            description: 'Builds a modal based drawer.'
          }
        ]
      },
      {
        component: 'Drawer.DrawerHeader',
        props: []
      },
      {
        component: 'Drawer.DrawerContent',
        props: []
      },
      {
        component: 'Drawer.DrawerItem',
        props: [
          {
            name: 'selected',
            description: 'Tells if the drawer item is selected.'
          }
        ]
      }
    ];
    this.eventsTable = [
      {
        name: 'onOpen',
        description: 'Fired when the drawer is opened.'
      },
      {
        name: 'onClose',
        description: 'Fired when the drawer is closed.'
      }
    ];
    this.state = {
      drawerOpened: false
    };
  }
  render() {
    return (
      <div>
        <ComponentTable data={this.propsTable} />
        <EventsTable data={this.eventsTable} />

        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <OrgDoc>mdc-drawer</OrgDoc>

      </div>
    );
  }
}
