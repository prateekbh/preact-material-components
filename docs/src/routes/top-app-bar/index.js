// Dependencies
import {h, Component} from 'preact';

// Material Components
import TopAppBar from '../../../../esm/TopAppBar';
import '../../../../TopAppBar/style.css';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import EventsTable from '../../components/events-table';
import OrgDoc from '../../components/original-documentation';

// Samples
import sample from './sample.txt';

// CSS
import './style.scss';

// Class
export default class TopAppBarPage extends Component {
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

        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <OrgDoc>mdc-toolbar</OrgDoc>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Default </div>
        <TopAppBar>
          <TopAppBar.Row>
            <TopAppBar.Section align-start>
              <TopAppBar.Icon navigation>menu</TopAppBar.Icon>
              <TopAppBar.Title>My App</TopAppBar.Title>
            </TopAppBar.Section>
            <TopAppBar.Section align-end>
              <TopAppBar.Icon>more_vert</TopAppBar.Icon>
            </TopAppBar.Section>
          </TopAppBar.Row>
        </TopAppBar>
      </div>
    );
  }
}
