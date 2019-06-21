// Dependencies
import {h, Component} from 'preact';

// Material Components
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarIcon,
  TopAppBarTitle
} from '@preact-material-components/top-app-bar';

import '@preact-material-components/top-app-bar/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import EventsTable from '../../components/events-table';

// Samples
import sample from './sample.txt';

// CSS
import './style.scss';

// Class
export default class TopAppBarPage extends Component {
  state = {
    onNavReceived: false
  };
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'TopAppBar',
        props: []
      },
      {
        component: 'TopAppBar.Row',
        props: []
      },
      {
        component: 'TopAppBar.Section',
        props: [
          {
            name: 'align-start',
            description: 'Aligns the section to start of the toolbar row'
          },
          {
            name: 'align-end',
            description: 'Aligns the section to end of the toolbar row'
          }
        ]
      },
      {
        component: 'TopAppBar.Icon',
        props: []
      },
      {
        component: 'TopAppBar.Title',
        props: []
      }
    ];
    this.eventsTable = [
      {
        name: 'onNav',
        description: 'Emits when the navigation icon is clicked.'
      }
    ];
  }
  render() {
    return (
      <div className="page-topappbar">
        <ComponentTable data={this.propsTable} />
        <EventsTable data={this.eventsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{' '}
          <span className="strong">mdc-toolbar</span>, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-toolbar">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Default </div>
        <TopAppBar
          class="top-app-bar-demo"
          onNav={e => {
            this.setState({
              onNavReceived: true
            });
          }}>
          <TopAppBarRow>
            <TopAppBarSection align-start>
              <TopAppBarIcon navigation>menu</TopAppBarIcon>
              <TopAppBarTitle>My App</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align-end>
              <TopAppBarIcon>more_vert</TopAppBarIcon>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <div>onNav received: {this.state.onNavReceived.toString()}</div>
      </div>
    );
  }
}
