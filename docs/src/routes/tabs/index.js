// Dependencies
import {h, Component} from 'preact';

// Material Components
import Tabs from '../../../../Tabs';
import Icon from '../../../../Icon';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Samples
import sample from './sample.txt';
import defaultSample from './default-sample.txt';
import iconTabsSample from './icon-tabs-sample.txt';
import textTabsSample from './text-tabs-sample.txt';
import scrollableSample from './scrollable-sample.txt';

// Class
export default class TabsPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Tabs',
        props: [
          {
            name: 'icon-tab-bar',
            description: 'Makes the tab bar accomodate icons.'
          },
          {
            name: 'icons-with-text',
            description: 'Makes the tab bar accomodate icons and label.'
          },
          {
            name: 'activeTabIndex',
            description:
              'Sets the bottom bar of active tab, also please use `active` prop on tab.'
          }
        ]
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
        component: 'TabBarScroller',
        props: [
          {
            name: 'activeTabIndex',
            description:
              'Sets the bottom bar of active tab, also please use `active` prop on tab.'
          }
        ]
      },
      {
        component: 'TabBarScrollerTabs',
        props: [
          {
            name: 'icon-tab-bar',
            description: 'Makes the tab bar accomodate icons.'
          },
          {
            name: 'icons-with-text',
            description: 'Makes the tab bar accomodate icons and label.'
          }
        ]
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
          This component encapsulates <span className="strong">mdc-tabs</span>,
          you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-tabs">
            {' '}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Default </div>
        <Tabs className="demo-tabs">
          <Tabs.Tab>Tab1</Tabs.Tab>
          <Tabs.Tab>Tab2</Tabs.Tab>
          <Tabs.Tab>Tab3</Tabs.Tab>
        </Tabs>
        <CodeBlock>
          <code class="lang-js">{defaultSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Icons tabs bar </div>
        <Tabs className="demo-tabs" icon-tab-bar={true}>
          <Tabs.Tab>
            <Icon>favorite</Icon>
          </Tabs.Tab>
          <Tabs.Tab>
            <Icon>done</Icon>
          </Tabs.Tab>
          <Tabs.Tab>
            <Icon>info</Icon>
          </Tabs.Tab>
        </Tabs>
        <CodeBlock>
          <code class="lang-js">{iconTabsSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Icons with text tabs bar </div>
        <Tabs className="demo-tabs" icons-with-text={true}>
          <Tabs.Tab>
            <Icon>favorite</Icon>
            <Tabs.TabIconLabel>Heart</Tabs.TabIconLabel>
          </Tabs.Tab>
          <Tabs.Tab active={true}>
            <Icon>done</Icon>
            <Tabs.TabIconLabel>Done</Tabs.TabIconLabel>
          </Tabs.Tab>
          <Tabs.Tab>
            <Icon>info</Icon>
            <Tabs.TabIconLabel>Info</Tabs.TabIconLabel>
          </Tabs.Tab>
        </Tabs>
        <CodeBlock>
          <code class="lang-js">{textTabsSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Scrollable tabs </div>
        <Tabs.TabBarScroller>
          <Tabs.TabBarScrollerTabs>
            <Tabs.Tab>tab1</Tabs.Tab>
            <Tabs.Tab active={true}>tab2</Tabs.Tab>
            <Tabs.Tab>tab3</Tabs.Tab>
            <Tabs.Tab>tab4</Tabs.Tab>
            <Tabs.Tab>tab5</Tabs.Tab>
            <Tabs.Tab>tab6</Tabs.Tab>
            <Tabs.Tab>tab7</Tabs.Tab>
            <Tabs.Tab>tab7</Tabs.Tab>
            <Tabs.Tab>tab9</Tabs.Tab>
            <Tabs.Tab>tab10</Tabs.Tab>
            <Tabs.Tab>tab11</Tabs.Tab>
          </Tabs.TabBarScrollerTabs>
        </Tabs.TabBarScroller>
        <CodeBlock>
          <code class="lang-js">{scrollableSample}</code>
        </CodeBlock>
      </div>
    );
  }
}
