// Dependencies
import {h, Component} from 'preact';

// Material Components
import Chips from '../../../../esm/Chips';

import '../../../../Chips/style.css';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import OrgDoc from '../../components/original-documentation';

// Samples
import sample from './sample.txt';
import filterSample from './filter-chips.txt';
import choiceSample from './choice-chips.txt';
import actionSample from './action-chips.txt';
import entrySample from './entry-chips.txt';

// Class
export default class ButtonPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Chips',
        props: [
          {
            name: 'choice',
            description: 'Makes chips selectable'
          },
          {
            name: 'filter',
            description: 'Makes chips multi-selectable'
          },
          {
            name: 'input',
            description: 'Build input chips'
          }
        ]
      },
      {
        component: 'Chips.Chip',
        props: []
      },
      {
        component: 'Chips.Icon',
        props: [
          {
            name: 'leading',
            description: "Optional. Indicates that it's a leading icon"
          },
          {
            name: 'trailing',
            description: "Optional. Indicates that it's a trailing icon"
          }
        ]
      },
      {
        component: 'Chips.Text',
        props: []
      }
    ];
  }
  render() {
    return (
      <div className="page-chips">
        <ComponentTable data={this.propsTable} />

        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <OrgDoc>mdc-chips</OrgDoc>

        <div className="mdc-typography--display1">Demo</div>
        <div>
          <Chips>
            <Chips.Chip>
              <Chips.Text>Chip One</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Chip Two</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Chip Three</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Chip Four</Chips.Text>
            </Chips.Chip>
          </Chips>
          <CodeBlock>
            <code class="lang-html">{sample}</code>
          </CodeBlock>
        </div>

        <div className="mdc-typography--display1">Input Chips</div>
        <div>
          <Chips input>
            <Chips.Chip>
              <Chips.Icon className="material-icons" leading>
                face
              </Chips.Icon>
              <Chips.Text>Jane Smith</Chips.Text>
              <Chips.Icon
                className="material-icons"
                trailing
                tabindex="0"
                role="button"
                title="More options">
                more_vert
              </Chips.Icon>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Icon className="material-icons" leading>
                face
              </Chips.Icon>
              <Chips.Text>John Doe</Chips.Text>
              <Chips.Icon
                className="material-icons"
                trailing
                tabindex="0"
                role="button"
                title="More options">
                more_vert
              </Chips.Icon>
            </Chips.Chip>
          </Chips>
          <CodeBlock>
            <code class="lang-html">{entrySample}</code>
          </CodeBlock>
        </div>

        <div className="mdc-typography--display1">Choice Chips</div>
        <section>
          <Chips choice>
            <Chips.Chip>
              <Chips.Text>Extra Small</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Small</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Medium</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Large</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Extra Large</Chips.Text>
            </Chips.Chip>
          </Chips>
          <CodeBlock>
            <code class="lang-html">{choiceSample}</code>
          </CodeBlock>
        </section>

        <div className="mdc-typography--display1">Filter Chips</div>
        <section>
          <Chips filter>
            <Chips.Chip>
              <Chips.Checkmark />
              <Chips.Text>Tops</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Checkmark />
              <Chips.Text>Bottoms</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Checkmark />
              <Chips.Text>Shoes</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Checkmark />
              <Chips.Icon leading>favorite</Chips.Icon>
              <Chips.Text>Home</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Checkmark />
              <Chips.Text>Accessories</Chips.Text>
            </Chips.Chip>
          </Chips>
          <CodeBlock>
            <code class="lang-html">{filterSample}</code>
          </CodeBlock>
        </section>

        <div className="mdc-typography--display1">Action Chips</div>
        <div>
          <Chips>
            <Chips.Chip>
              <Chips.Icon className="material-icons" leading>
                wb_sunny
              </Chips.Icon>
              <Chips.Text>Turn on lights</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Icon className="material-icons" leading>
                bookmark
              </Chips.Icon>
              <Chips.Text>Bookmark</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Icon className="material-icons" leading>
                alarm
              </Chips.Icon>
              <Chips.Text>Set alarm</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Icon className="material-icons" leading>
                directions
              </Chips.Icon>
              <Chips.Text>Get directions</Chips.Text>
            </Chips.Chip>
          </Chips>
          <CodeBlock>
            <code class="lang-html">{actionSample}</code>
          </CodeBlock>
        </div>
      </div>
    );
  }
}
