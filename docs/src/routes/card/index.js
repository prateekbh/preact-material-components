// Dependencies
import { h, Component } from "preact";

// Material Components
import Card from "preact-material-components/Card";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Style
import "./style";

// Samples
import sample from "./sample.txt";

// Class
export default class CardPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Card",
        props: []
      },
      {
        component: "Card.Primary",
        props: []
      },
      {
        component: "Card.SupportingText",
        props: []
      },
      {
        component: "Card.Actions",
        props: [
          {
            name: "vertical",
            description: "This arranges the actions vertically"
          }
        ]
      },
      {
        component: "Card.Action",
        props: []
      },
      {
        component: "Card.Media",
        props: []
      },
      {
        component: "Card.MediaItem",
        props: [
          {
            name: "x",
            value: "1dot5, 2, 3",
            description: "Changes the size of the image"
          }
        ]
      },
      {
        component: "Card.Title",
        props: [
          {
            name: "large",
            description: "This enlarges the title size"
          }
        ]
      },
      {
        component: "Card.Subtitle",
        props: []
      },
      {
        component: "Card.HorizontalBlock",
        props: []
      }
    ];
  }
  render() {
    return (
      <div className="page-card">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code</div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">mdc-card</span>,
          you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-card">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo</div>
        <Card>
          <Card.Primary>
            <Card.Title>Hi</Card.Title>
            <Card.Subtitle>Let me subtitle</Card.Subtitle>
          </Card.Primary>
          <Card.Media className="card-media" />
          <Card.Actions>
            <Card.Action>OKAY</Card.Action>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Primary>
            <Card.Title>Hi</Card.Title>
            <Card.Subtitle>Let me subtitle</Card.Subtitle>
          </Card.Primary>
          <Card.SupportingText>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </Card.SupportingText>
          <Card.Actions>
            <Card.Action>OKAY</Card.Action>
          </Card.Actions>
        </Card>
        <Card>
          <Card.HorizontalBlock>
            <Card.Primary>
              <Card.Title large>Hi</Card.Title>
              <Card.Subtitle>Let me subtitle</Card.Subtitle>
            </Card.Primary>
            <Card.MediaItem src="favicon.png" x="1dot5" />
          </Card.HorizontalBlock>
          <Card.Actions>
            <Card.Action>OKAY</Card.Action>
          </Card.Actions>
        </Card>
      </div>
    );
  }
}
