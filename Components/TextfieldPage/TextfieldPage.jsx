import {h, Component} from 'preact';
import Textfield from 'preact-material-components/Textfield';
import ComponentTable from '../ComponentTable.jsx';
import './TextfieldPage.css';
import CodeBlock from '../CodeBlock.jsx';
import sample from './sample.txt';
export default class TextfieldPage extends Component {
  constructor(){
    super();
    this.propsTable = [
      {
        component: 'Textfield',
        props: [
          {
            name: 'fullwidth',
            description: 'Makes the textfield full width.'
          },
          {
            name: 'multiline',
            description: 'Toggles between TextArea and TextField.'
          },
          {
            name: 'type',
            description: 'Type of HTML textfield (defaults to \'text\')',
            value: 'text, password, date, time, etc.'
          }
        ]
      }
    ];
  }
  render(){
    return (
      <div className="page-textfield">
        <ComponentTable data={this.propsTable}/>

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">
            {sample}
          </code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">mdc-textfield</span>. You can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield"> here</a>.
        </div>

        <div className="mdc-typography--display1">Demo</div>
        <div className="mdc-typography--body">Default</div>
        <Textfield label="Your name" onKeyUp={e=>{
            this.setState({
              name: e.target.value
            });
          }}/> Hi - {this.state.name}

        <div className="mdc-typography--body">Multiline</div>
        <Textfield multiline={true} label="Textarea tag"/>

        <div className="mdc-typography--body">Password</div>
        <Textfield type="password" label="Enter a password"/>
      </div>
    );
  }
}
