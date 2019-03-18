// Dependencies
import {h, Component} from 'preact';

// Material Components
import {
  Chip,
  ChipSet,
  ChipIcon,
  ChipText,
  ChipCheckmark
} from '@preact-material-components/chip';

import {Button} from '@preact-material-components/button';
import '@preact-material-components/button/sass';
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
  state = {
    filterChips: [1, 2, 3, 4],
    selectedFilterChips: [],
    selectedChoiceChips: [],
    chips: [1, 2, 3, 4]
  };

  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Chips',
        props: [
          {
            name: 'id',
            description: 'Prop to recognize the chip.'
          },
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
  addChip = () => {
    this.setState(state => {
      return state.chips.push(state.chips.length + 1);
    });
  };

  setSelectedFilterChips = (e, opts) => {
    this.setSelectedChips('selectedFilterChips', opts.selectedChipIds);
  };

  setSelectedChoiceChips = (e, opts) => {
    this.setSelectedChips('selectedChoiceChips', opts.selectedChipIds);
  };

  setSelectedChips(chipCategory, selectedChips) {
    const state = {};
    state[chipCategory] = selectedChips;
    this.setState(state);
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
          <ChipSet handleSelect={this.setNormalChoiceChips}>
            {this.state.chips.map(chip => (
              <Chip>
                <ChipText>Chip {chip}</ChipText>
              </Chip>
            ))}
          </ChipSet>
          <Button onClick={this.addChip}>Add a chip</Button>
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
              <ChipIcon className="material-icons" trailing title="close">
                close
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
                title="More options">
                close
              </ChipIcon>
            </Chip>
          </ChipSet>
          <CodeBlock>
            <code class="lang-html">{entrySample}</code>
          </CodeBlock>
        </div>

        <div className="mdc-typography--display1">Choice Chips</div>
        <section>
          <ChipSet choice handleSelect={this.setSelectedChoiceChips}>
            <Chip id="xsmall">
              <ChipText>Extra Small</ChipText>
            </Chip>
            <Chip id="small">
              <ChipText>Small</ChipText>
            </Chip>
            <Chip id="medium">
              <ChipText>Medium</ChipText>
            </Chip>
            <Chip id="large">
              <ChipText>Large</ChipText>
            </Chip>
            <Chip id="xlarge">
              <ChipText>Extra Large</ChipText>
            </Chip>
          </ChipSet>
          <Button onClick={this.addChip}>Add a chip</Button>
          <div>Selected chip: {this.state.selectedChoiceChips.join(',')}</div>
          <CodeBlock>
            <code class="lang-html">{choiceSample}</code>
          </CodeBlock>
        </section>

        <div className="mdc-typography--display1">Filter Chips</div>
        <section>
          <ChipSet filter handleSelect={this.setSelectedFilterChips}>
            {this.state.filterChips.map((chip, index) => (
              <Chip id={`chip${chip}`} selected={index === 1}>
                <ChipCheckmark />
                <ChipText>Chip {chip}</ChipText>
                <ChipIcon className="material-icons" trailing title="close">
                  close
                </ChipIcon>
              </Chip>
            ))}
          </ChipSet>
          <Button onClick={this.addChip}>Add a chip</Button>
          <div>Selected chips: {this.state.selectedFilterChips.join(',')}</div>
          <CodeBlock>
            <code class="lang-html">{filterSample}</code>
          </CodeBlock>
        </section>
      </div>
    );
  }
}
