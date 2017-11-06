// Dependencies
import { h, Component } from "preact";

// Class
export default class ComponentTable extends Component {
  render() {
    return (
      <div>
        <div className="mdc-typography--display1">
          Components and their props
        </div>
        <ul>
          {this.props.data.map(component => {
            return (
              <li>
                <div className="mdc-typography--headline">
                  {component.component}
                </div>
                <ul>
                  {component.props &&
                    component.props.map(prop => {
                      return (
                        <li>
                          <div>
                            <div>
                              <span className="mdc-typography--title">
                                {prop.name}{" "}
                              </span>
                              <span className="mdc-typography--body2">
                                {prop.value || "true/false"}
                              </span>
                            </div>
                            <div className="mdc-typography--caption">
                              {prop.description}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  {component.props.length === 0 && (
                    <li>
                      <div className="mdc-typography--caption">
                        no specific props
                      </div>
                    </li>
                  )}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
