// Dependencies
import { h, Component } from "preact";

// Class
export default class EventsTable extends Component {
  render() {
    return (
      <div>
        <div className="mdc-typography--display1">Custom events</div>
        <ul>
          {this.props.data.map(event => {
            return (
              <li>
                <div className="mdc-typography--headline">{event.name}</div>
                <div className="mdc-typography--body2">{event.description}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
