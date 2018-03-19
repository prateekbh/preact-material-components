// Dependencies
import {h, Component} from 'preact';

// Material Components
import TextField from '../../../../TextField';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Samples
import sample from './sample.txt';
import defaultSample from './default-sample.txt';
import controlledSample from './controlled-sample.txt';
import denseSample from './dense-sample.txt';
import disabledSample from './disabled-sample.txt';
import helpTextSample from './help-text-sample.txt';
import passwordSample from './password-sample.txt';
import persistentHelpTextSample from './persistent-help-text-sample.txt';
import textareaSample from './textarea-sample.txt';

// Class
export default class TextFieldPage extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.propsTable = [
      {
        component: 'TextField',
        props: [
          {
            name: 'fullwidth',
            description: 'Makes the textfield full width.'
          },
          {
            name: 'textarea',
            description: 'Toggles between TextArea and TextField.'
          },
          {
            name: 'type',
            description: "Type of HTML textfield (defaults to 'text')",
            value: 'text, password, date, time, etc.'
          },
          {
            name: 'dense',
            description: 'Use a dense font'
          },
          {
            name: 'box',
            description:
              'Enclose label and input in a transparent rectangular fill'
          },
          {
            name: 'disabled',
            description: 'Disables the input'
          },
          {
            name: 'helperText',
            description:
              'Include an help text that is useful for providing supplemental information to users, as well for validation messages',
            value: 'help text'
          },
          {
            name: 'helperTextPersistent',
            description: 'Makes the help text always visible'
          },
          {
            name: 'helperTextValidationMsg',
            description:
              'Provide styles for using the help text as a validation message'
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
          This component encapsulates{' '}
          <span className="strong">mdc-text-field</span>. You can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-text-field">
            {' '}
            here
          </a>.
        </div>
        <div className="mdc-typography--display1">Demo</div>
        <div className="mdc-typography--title">Default</div>
        <TextField
          label="Your name"
          onKeyUp={e => {
            this.setState({
              name: e.target.value
            });
          }}
        />{' '}
        Hi - {this.state.name}
        <CodeBlock>
          <code class="lang-html">{defaultSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Textarea</div>
        <TextField textarea={true} label="Textarea tag" />
        <CodeBlock>
          <code class="lang-html">{textareaSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Password</div>
        <TextField type="password" label="Enter a password" />
        <CodeBlock>
          <code class="lang-html">{passwordSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">With help text</div>
        <TextField label="Help text" helperText="This is the helptext" />
        <CodeBlock>
          <code class="lang-html">{helpTextSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">With persistent help text</div>
        <TextField
          label="Persistent help text"
          helperText="This is the helptext"
          helperTextPersistent
        />
        <CodeBlock>
          <code class="lang-html">{persistentHelpTextSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Dense</div>
        <TextField label="Dense" dense />
        <CodeBlock>
          <code class="lang-html">{denseSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Disabled</div>
        <TextField label="Disabled" disabled />
        <CodeBlock>
          <code class="lang-html">{disabledSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Controlled</div>
        <TextField
          label="State"
          value={this.state.value}
          onInput={e => this.setState({value: e.target.value})}
        />
        State: {this.state.value}
        <CodeBlock>
          <code class="lang-html">{controlledSample}</code>
        </CodeBlock>
      </div>
    );
  }
}
