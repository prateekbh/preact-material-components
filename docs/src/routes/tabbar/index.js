// Dependencies
import {h, Component} from 'preact';

// Material Components
import TabBar from '../../../../esm/TabBar';

import '../../../../Tab/style.css';
import '../../../../TabScroller/style.css';
import '../../../../TabIndicator/style.css';
import '../../../../TabBar/style.css';

import style from './style';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import SampleCodeBlock from '../../components/sample-code-block';
import OrgDoc from '../../components/original-documentation';

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

        <SampleCodeBlock>{sample}</SampleCodeBlock>

        <OrgDoc link="tabs/tab-bar">mdc-tab-bar</OrgDoc>

        <div className="mdc-typography--display1">Demo </div>
        <div className={`mdc-typography--title ${style.section}`}>Default.</div>
        <TabBar>
          <TabBar.Tab active>
            <TabBar.TabLabel>Tab1</TabBar.TabLabel>
          </TabBar.Tab>
          <TabBar.Tab>
            <TabBar.TabLabel>Tab2</TabBar.TabLabel>
          </TabBar.Tab>
          <TabBar.Tab>
            <TabBar.TabLabel>Tab3</TabBar.TabLabel>
          </TabBar.Tab>
        </TabBar>

        <div className={`mdc-typography--title ${style.section}`}>Icons.</div>
        <TabBar>
          <TabBar.Tab active>
            <TabBar.TabIcon>access_time</TabBar.TabIcon>
            <TabBar.TabLabel>Time</TabBar.TabLabel>
          </TabBar.Tab>
          <TabBar.Tab>
            <TabBar.TabIcon>near_me</TabBar.TabIcon>
            <TabBar.TabLabel>Nearby</TabBar.TabLabel>
          </TabBar.Tab>
          <TabBar.Tab>
            <TabBar.TabIcon>favorite</TabBar.TabIcon>
            <TabBar.TabLabel>Favorites</TabBar.TabLabel>
          </TabBar.Tab>
        </TabBar>
        <CodeBlock>
          <code class="lang-js">{iconsSample}</code>
        </CodeBlock>

        <div className={`mdc-typography--title ${style.section}`}>
          Scroller.
        </div>
        <TabBar>
          <TabBar.Tab active>
            <TabBar.TabLabel>Tab One</TabBar.TabLabel>
          </TabBar.Tab>
          <TabBar.Tab>
            <TabBar.TabLabel>Tab Two</TabBar.TabLabel>
          </TabBar.Tab>
          <TabBar.Tab>
            <TabBar.TabLabel>Tab Three</TabBar.TabLabel>
          </TabBar.Tab>
          <TabBar.Tab>
            <TabBar.TabLabel>Tab Four</TabBar.TabLabel>
          </TabBar.Tab>
          <TabBar.Tab>
            <TabBar.TabLabel>Tab Five</TabBar.TabLabel>
          </TabBar.Tab>
          <TabBar.Tab>
            <TabBar.TabLabel>Tab Six</TabBar.TabLabel>
          </TabBar.Tab>
          <TabBar.Tab>
            <TabBar.TabLabel>Tab Seven</TabBar.TabLabel>
          </TabBar.Tab>
          <TabBar.Tab>
            <TabBar.TabLabel>Tab Eight</TabBar.TabLabel>
          </TabBar.Tab>
          <TabBar.Tab>
            <TabBar.TabLabel>Tab Nine</TabBar.TabLabel>
          </TabBar.Tab>
        </TabBar>
      </div>
    );
  }
}
