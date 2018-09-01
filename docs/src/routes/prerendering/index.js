// Dependencies
import {h, Component} from 'preact';

// Material Components
import Typography from '../../../../Typography';

// Components
import CodeBlock from '../../components/code-block';

// Samples

// Class
export default class PrerenderingPage extends Component {
  render() {
    return (
      <div>
        <div className="mdc-typography--body">
          <Typography headline3 tag={'h3'}>
            How to do Prerendering?
          </Typography>
        </div>
      </div>
    );
  }
}
