// Dependencies
import {h, Component} from 'preact';

// Material Components
import LinearProgress from '../../../../LinearProgress';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Samples
import sample from './sample.txt';
import indeterminateSample from './indeterminate-sample.txt';
import reversedSample from './reversed-sample.txt';
import progressSample from './progress-sample.txt';

// Class
export default class LinearProgressPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'LinearProgress',
        props: [
          {
            name: 'indeterminate',
            description: 'Tells if the progress bar is running forever.'
          },
          {
            name: 'reversed',
            description: 'Tells if the progress bar direction is reversed.'
          },
          {
            name: 'progress',
            description: 'Sets the current progress of the progress bar.'
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
          <span className="strong">mdc-linear-progress</span>, you can refer to
          its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress">
            {' '}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Indeterminate </div>
        <LinearProgress indeterminate={true} />
        <CodeBlock>
          <code class="lang-html">{indeterminateSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Reversed </div>
        <LinearProgress reversed={true} indeterminate={true} />
        <CodeBlock>
          <code class="lang-html">{reversedSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Progress </div>
        <LinearProgress progress={0.8} accent={true} />
        <CodeBlock>
          <code class="lang-html">{progressSample}</code>
        </CodeBlock>
      </div>
    );
  }
}
