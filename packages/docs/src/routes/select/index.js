// Dependencies
import {h, Component} from 'preact';

// Material Components
import {
  BasicSelect as Select,
  BasicOption,
  EnhancedSelect,
  EnhancedOption
} from '@preact-material-components/select';

import '@preact-material-components/select/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import EventsTable from '../../components/events-table';

// Samples
import sample from './sample.txt';

// Class
export default class SelectPage extends Component {
  state = {
    selectedEnhancedValue: null,
    selectedBasicValue: null
  };
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
            name: 'box',
            description: 'Makes the select with `box` appearence.'
          },
          {
            name: 'outlined',
            description: 'Makes the select with `outlined` appearence.'
          },
          {
            name: 'selectedIndex',
            value: 'number',
            description: 'The option to be set as selected.'
          },
          {
            name: 'label',
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
        component: 'BasicOption',
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
          This component encapsulates <span className="strong">mdc-select</span>
          , you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-select">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Normal </div>
        <Select label="Select">
          <BasicOption>Option 1</BasicOption>
          <BasicOption>Option 2</BasicOption>
          <BasicOption>Option 3</BasicOption>
          <BasicOption>Option 4</BasicOption>
        </Select>

        <div className="mdc-typography--title">Preselected </div>
        <Select label="Select" selectedIndex={2}>
          <BasicOption>Option 1</BasicOption>
          <BasicOption>Option 2</BasicOption>
          <BasicOption>Option 3</BasicOption>
          <BasicOption>Option 4</BasicOption>
        </Select>

        <div className="mdc-typography--title">Disabled </div>
        <Select label="Select" disabled={true}>
          <BasicOption>Option 1</BasicOption>
          <BasicOption>Option 2</BasicOption>
          <BasicOption>Option 3</BasicOption>
          <BasicOption>Option 4</BasicOption>
        </Select>

        <div className="mdc-typography--title">
          Outlined option: {this.state.selectedBasicValue}
        </div>
        <Select
          label="Select"
          outlined
          onSelect={(e, {value}) => {
            this.setState({
              selectedBasicValue: value
            });
          }}>
          <BasicOption>Option 1</BasicOption>
          <BasicOption disabled>Option 2</BasicOption>
          <BasicOption selected>Option 3</BasicOption>
          <BasicOption>Option 4</BasicOption>
        </Select>

        <div className="mdc-typography--title">
          Box option: {this.state.selectedEnhancedValue}
        </div>
        <EnhancedSelect
          label="Select"
          onSelect={(e, {value}) => {
            this.setState({
              selectedEnhancedValue: value
            });
          }}>
          <EnhancedOption value="item1">Option 1</EnhancedOption>
          <EnhancedOption value="item2" disabled>
            Option 2
          </EnhancedOption>
          <EnhancedOption value="item3" selected>
            Option 3
          </EnhancedOption>
          <EnhancedOption value="item4">Option 4</EnhancedOption>
        </EnhancedSelect>
      </div>
    );
  }
}
