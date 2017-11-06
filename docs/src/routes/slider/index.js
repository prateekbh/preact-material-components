// Dependencies
import { h, Component } from "preact";

// Material Components
import Slider from "preact-material-components/Slider";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";
import EventsTable from "../../components/events-table";

// Samples
import sample from "./sample.txt";

// Class
export default class SliderPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Slider",
        props: [
          {
            name: "disabled",
            description: "Tells if the slider is disabled."
          },
          {
            name: "min",
            value: "number",
            description: "Tells minimum value of the slider."
          },
          {
            name: "max",
            value: "number",
            description: "Tells maximum value of the slider."
          },
          {
            name: "step",
            value: "number",
            description: "Tells step/jump of the slider."
          },
          {
            name: "value",
            value: "number",
            description: "Tells current value of the slider."
          },
          {
            name: "discrete",
            description: "Tells if the slider is discrete."
          }
        ]
      }
    ];
    this.eventsTable = [
      {
        name: "onInput",
        description:
          "Fired when a user is dragging the slider or changing the value using the arrow keys."
      },
      {
        name: "onChange",
        description:
          "Fired when a user stops dragging the slider or changes the value using the arrow keys.."
      }
    ];
  }
  render() {
    return (
      <div className="page-slider">
        <ComponentTable data={this.propsTable} />
        <EventsTable data={this.eventsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">
            mdc-slider
          </span>, you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Regular </div>
        <div className="slider-container">
          <Slider />
        </div>
        <div className="mdc-typography--title">Disabled </div>
        <div className="slider-container">
          <Slider disabled={true} />
        </div>
        <div className="mdc-typography--title">Step 2, Max 20, Value 10 </div>
        <div className="slider-container">
          <Slider step={2} value={10} max={20} />
        </div>
        <div className="mdc-typography--title">Discrete </div>
        <div className="slider-container">
          <Slider step={2} value={10} max={20} discrete />
        </div>
      </div>
    );
  }
}
