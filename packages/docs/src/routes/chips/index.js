// Dependencies
import {h, Component} from 'preact';

// Material Components
import {Chip, ChipSet} from '@preact-material-components/chip';
import {ChipText} from '@preact-material-components/chip/lib/text';
import {ChipIcon} from '@preact-material-components/chip/lib/icon';
import {ChipCheckmark} from '@preact-material-components/chip/lib/checkmark';

import '@preact-material-components/chip/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

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
        component: 'Chip',
        props: []
      },
      {
        component: 'ChipIcon',
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
        component: 'ChipText',
        props: []
      }
    ];
  }
  render() {
    return (
      <div className="page-chips">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">mdc-chips</span>,
          you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Demo</div>
        <div>
          <ChipSet>
            <Chip>
              <ChipText>Chip One</ChipText>
            </Chip>
            <Chip>
              <ChipText>Chip Two</ChipText>
            </Chip>
            <Chip>
              <ChipText>Chip Three</ChipText>
            </Chip>
            <Chip>
              <ChipText>Chip Four</ChipText>
            </Chip>
          </ChipSet>
          <CodeBlock>
            <code class="lang-html">{sample}</code>
          </CodeBlock>
        </div>

        <div className="mdc-typography--display1">Input Chips</div>
        <div>
          <ChipSet input>
            <Chip>
              <ChipIcon className="material-icons" leading>
                face
              </ChipIcon>
              <ChipText>Jane Smith</ChipText>
              <ChipIcon
                className="material-icons"
                trailing
                tabindex="0"
                role="button"
                title="More options">
                more_vert
              </ChipIcon>
            </Chip>
            <Chip>
              <ChipIcon className="material-icons" leading>
                face
              </ChipIcon>
              <ChipText>John Doe</ChipText>
              <ChipIcon
                className="material-icons"
                trailing
                tabindex="0"
                role="button"
                title="More options">
                more_vert
              </ChipIcon>
            </Chip>
          </ChipSet>
          <CodeBlock>
            <code class="lang-html">{entrySample}</code>
          </CodeBlock>
        </div>

        <div className="mdc-typography--display1">Choice Chips</div>
        <section>
          <ChipSet choice>
            <Chip>
              <ChipText>Extra Small</ChipText>
            </Chip>
            <Chip>
              <ChipText>Small</ChipText>
            </Chip>
            <Chip>
              <ChipText>Medium</ChipText>
            </Chip>
            <Chip>
              <ChipText>Large</ChipText>
            </Chip>
            <Chip>
              <ChipText>Extra Large</ChipText>
            </Chip>
          </ChipSet>
          <CodeBlock>
            <code class="lang-html">{choiceSample}</code>
          </CodeBlock>
        </section>

        <div className="mdc-typography--display1">Filter Chips</div>
        <section>
          <ChipSet filter>
            <Chip>
              <ChipCheckmark />
              <ChipText>Tops</ChipText>
            </Chip>
            <Chip>
              <ChipCheckmark />
              <ChipText>Bottoms</ChipText>
            </Chip>
            <Chip>
              <ChipCheckmark />
              <ChipText>Shoes</ChipText>
            </Chip>
            <Chip>
              <ChipCheckmark />
              <ChipIcon leading>favorite</ChipIcon>
              <ChipText>Home</ChipText>
            </Chip>
            <Chip>
              <ChipCheckmark />
              <ChipText>Accessories</ChipText>
            </Chip>
          </ChipSet>
          <CodeBlock>
            <code class="lang-html">{filterSample}</code>
          </CodeBlock>
        </section>

        <div className="mdc-typography--display1">Action Chips</div>
        <div>
          <ChipSet>
            <Chip>
              <ChipIcon className="material-icons" leading>
                wb_sunny
              </ChipIcon>
              <ChipText>Turn on lights</ChipText>
            </Chip>
            <Chip>
              <ChipIcon className="material-icons" leading>
                bookmark
              </ChipIcon>
              <ChipText>Bookmark</ChipText>
            </Chip>
            <Chip>
              <ChipIcon className="material-icons" leading>
                alarm
              </ChipIcon>
              <ChipText>Set alarm</ChipText>
            </Chip>
            <Chip>
              <ChipIcon className="material-icons" leading>
                directions
              </ChipIcon>
              <ChipText>Get directions</ChipText>
            </Chip>
          </ChipSet>
          <CodeBlock>
            <code class="lang-html">{actionSample}</code>
          </CodeBlock>
        </div>
      </div>
    );
  }
}
