// Dependencies
import {h, Component} from 'preact';

// Material Components
import Icon from '../../../../esm/Icon';

import '../../../../Icon/style.css';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import SampleCodeBlock from '../../components/sample-code-block';

// Samples
import linktag from './linktag.txt';
import sample from './sample.txt';

// Class
export default class IconPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Icon',
        props: []
      }
    ];
  }
  render() {
    return (
      <div>
        <ComponentTable data={this.propsTable} />

        <SampleCodeBlock header="Sample code">{sample}</SampleCodeBlock>

        <div className="mdc-typography--display1">Demo </div>
        <div>
          <Icon>menu</Icon>
        </div>
        <div>
          <Icon>favorite_border</Icon>
        </div>

        <div className="mdc-typography--title">Note </div>
        <div className="mdc-typography--caption">
          <div>
            In order to use these you will need to import respective font icons{' '}
          </div>
          <div>
            <CodeBlock>
              <code class="lang-html">{linktag}</code>
            </CodeBlock>
          </div>
        </div>
      </div>
    );
  }
}
