// Dependencies
import { h, Component } from "preact";

// Material Components
import Slider from "preact-material-components/Slider";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

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
            description: "tells if the slider is disabled"
          },
          {
            name: "min",
            value: "number",
            description: "tells minimum value of the slider"
          },
          {
            name: "max",
            value: "number",
            description: "tells maximum value of the slider"
          },
          {
            name: "step",
            value: "number",
            description: "tells step/jump of the slider"
          },
          {
            name: "value",
            value: "number",
            description: "tells current value of the slider"
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-slider">
        <ComponentTable data={this.propsTable} />

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
      </div>
    );
  }
}
