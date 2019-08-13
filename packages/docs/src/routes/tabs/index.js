// Dependencies
import {h, Component} from 'preact';

// Material Components
import {TabBar, Tab, TabIcon, TabLabel} from '@preact-material-components/tabs';

import '@preact-material-components/tabs/sass';

import style from './style.scss';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Samples
import sample from './sample.txt';
import iconsSample from './sample.txt';

// Class
export default class TabsPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Tab Bar',
        props: []
      },
      {
        component: 'Tab',
        props: [
          {
            name: 'active',
            description: 'Sets the tab active along with `activeTabIndex` prop.'
          }
        ]
      },
      {
        component: 'TabLabel',
        props: []
      },
      {
        component: 'TabIcon',
        props: []
      }
    ];
  }
  render() {
    return (
      <div>
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{' '}
          <span className="strong">mdc-tab-bar</span>, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab-bar">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className={`mdc-typography--title ${style.section}`}>Default.</div>
        <TabBar>
          <Tab active>
            <TabLabel>Tab1</TabLabel>
          </Tab>
          <Tab>
            <TabLabel>Tab2</TabLabel>
          </Tab>
          <Tab>
            <TabLabel>Tab3</TabLabel>
          </Tab>
        </TabBar>

        <div className={`mdc-typography--title ${style.section}`}>Icons.</div>
        <TabBar>
          <Tab active>
            <TabIcon>access_time</TabIcon>
            <TabLabel>Time</TabLabel>
          </Tab>
          <Tab>
            <TabIcon>near_me</TabIcon>
            <TabLabel>Nearby</TabLabel>
          </Tab>
          <Tab>
            <TabIcon>favorite</TabIcon>
            <TabLabel>Favorites</TabLabel>
          </Tab>
        </TabBar>
        <CodeBlock>
          <code class="lang-js">{iconsSample}</code>
        </CodeBlock>

        <div className={`mdc-typography--title ${style.section}`}>
          Scroller.
        </div>
        <TabBar>
          <Tab active>
            <TabLabel>Tab One</TabLabel>
          </Tab>
          <Tab>
            <TabLabel>Tab Two</TabLabel>
          </Tab>
          <Tab>
            <TabLabel>Tab Three</TabLabel>
          </Tab>
          <Tab>
            <TabLabel>Tab Four</TabLabel>
          </Tab>
          <Tab>
            <TabLabel>Tab Five</TabLabel>
          </Tab>
          <Tab>
            <TabLabel>Tab Six</TabLabel>
          </Tab>
          <Tab>
            <TabLabel>Tab Seven</TabLabel>
          </Tab>
          <Tab>
            <TabLabel>Tab Eight</TabLabel>
          </Tab>
          <Tab>
            <TabLabel>Tab Nine</TabLabel>
          </Tab>
        </TabBar>
      </div>
    );
  }
}
