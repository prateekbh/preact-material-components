// Dependencies
import {h, Component} from 'preact';

// Material Components
import TabBar from '../../../../TabBar';
import Icon from '../../../../Icon';
import style from './style';

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
          </a>.
        </div>

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
