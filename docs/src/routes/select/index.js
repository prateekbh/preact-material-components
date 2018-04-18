// Dependencies
import {h, Component} from 'preact';

// Material Components
import Select from '../../../../Select';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import EventsTable from '../../components/events-table';

// Samples
import sample from './sample.txt';

// Class
export default class SelectPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Select',
        props: [
          {
            name: 'disabled',
            description: 'Makes the select box disabled.'
          },
          {
            name: 'basic',
            description: 'Makes the select box CSS only.'
          },
          {
            name: 'selectedIndex',
            value: 'number',
            description: 'The option to be set as selected.'
          },
          {
            name: 'hintText',
            value: 'string',
            description:
              'Helpful text to display when no selection has been made. ("selectedIndex" must be -1 for the hintText to show)'
          },
          {
            name: 'onChange',
            value: 'function',
            description:
              'Function that returns an event with an updated "selectedIndex" property anytime the selection changes.'
          }
        ]
      },
      {
        component: 'Select.Item',
        props: [
          {
            name: 'disabled',
            description: 'Disables the option.'
          },
          {
            name: 'selected',
            description:
              'Set the option as selected. Mostly the same as "selectedIndex", but it allows selection of multiple options.'
          }
        ]
      }
    ];
    this.eventsTable = [
      {
        name: 'onChange',
        description: 'Fired when the selection changes on Select box'
      }
    ];
  }
  render() {
    return (
      <div className="page-select">
        <ComponentTable data={this.propsTable} />
        <EventsTable data={this.eventsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">mdc-select</span>,
          you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-select">
            {' '}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Normal </div>
        <Select hintText="Select">
          <Select.Item>Option 1</Select.Item>
          <Select.Item>Option 2</Select.Item>
          <Select.Item>Option 3</Select.Item>
          <Select.Item>Option 4</Select.Item>
        </Select>

        <div className="mdc-typography--title">Preselected </div>
        <Select hintText="Select" selectedIndex={2}>
          <Select.Item>Option 1</Select.Item>
          <Select.Item>Option 2</Select.Item>
          <Select.Item>Option 3</Select.Item>
          <Select.Item>Option 4</Select.Item>
        </Select>

        <div className="mdc-typography--title">Disabled </div>
        <Select hintText="Select" disabled={true}>
          <Select.Item>Option 1</Select.Item>
          <Select.Item>Option 2</Select.Item>
          <Select.Item>Option 3</Select.Item>
          <Select.Item>Option 4</Select.Item>
        </Select>

        <div className="mdc-typography--title">Box option </div>
        <Select hintText="Select" box>
          <Select.Item>Option 1</Select.Item>
          <Select.Item disabled>Option 2</Select.Item>
          <Select.Item selected>Option 3</Select.Item>
          <Select.Item>Option 4</Select.Item>
        </Select>

        <div className="mdc-typography--display1">Note </div>
        <div className="mdc-typography--body">
          <div>
            If you are using this component individually, DO NOT FORGET to
            import
            <i> 'preact-material-components/Menu/style.css'</i> and
            <i> 'preact-material-components/List/style.css'</i>
          </div>
        </div>
      </div>
    );
  }
}
