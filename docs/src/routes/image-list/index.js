// Dependencies
import {h, Component} from 'preact';

// Material Components
import ImageList from '../../../../ImageList';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Styles
import './style.scss';

// Samples
import sample from './sample.txt';

// Class
export default class ImageListPage extends Component {
  constructor() {
    super();
    this.state = {
      fabShowing: true
    };
    this.propsTable = [
      {
        component: 'ImageList',
        props: [
          {
            name: 'masonry',
            description: 'Makes the image list masonry.'
          },
          {
            name: 'with-text-protection',
            description:
              'Indicates that supporting content should be positioned in a scrim overlaying each image.'
          }
        ]
      },
      {
        component: 'Item',
        props: []
      },
      {
        component: 'AspectContainer',
        props: []
      },
      {
        component: 'Image',
        props: []
      },
      {
        component: 'Supporting',
        props: []
      },
      {
        component: 'Label',
        props: []
      }
    ];
  }
  render() {
    return (
      <div className="page-image-list">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{' '}
          <span className="strong">mdc-image-list</span>, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-image-list">
            {' '}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Normal </div>
        <ImageList mdc-image-list--with-text-protection>
          <ImageList.Item>
            <ImageList.AspectContainer>
              <ImageList.Image src="https://material-components-web.appspot.com/images/photos/3x2/1.jpg" />
              <ImageList.Supporting>
                <ImageList.Label>Text Label</ImageList.Label>
              </ImageList.Supporting>
            </ImageList.AspectContainer>
          </ImageList.Item>
          <ImageList.Item>
            <ImageList.AspectContainer>
              <ImageList.Image src="https://material-components-web.appspot.com/images/photos/3x2/6.jpg" />
              <ImageList.Supporting>
                <ImageList.Label>Text Label</ImageList.Label>
              </ImageList.Supporting>
            </ImageList.AspectContainer>
          </ImageList.Item>
          <ImageList.Item>
            <ImageList.AspectContainer>
              <ImageList.Image src="https://material-components-web.appspot.com/images/photos/3x2/2.jpg" />
              <ImageList.Supporting>
                <ImageList.Label>Text Label</ImageList.Label>
              </ImageList.Supporting>
            </ImageList.AspectContainer>
          </ImageList.Item>
          <ImageList.Item>
            <ImageList.AspectContainer>
              <ImageList.Image src="https://material-components-web.appspot.com/images/photos/3x2/3.jpg" />
              <ImageList.Supporting>
                <ImageList.Label>Text Label</ImageList.Label>
              </ImageList.Supporting>
            </ImageList.AspectContainer>
          </ImageList.Item>
          <ImageList.Item>
            <ImageList.AspectContainer>
              <ImageList.Image src="https://material-components-web.appspot.com/images/photos/3x2/4.jpg" />
              <ImageList.Supporting>
                <ImageList.Label>Text Label</ImageList.Label>
              </ImageList.Supporting>
            </ImageList.AspectContainer>
          </ImageList.Item>
          <ImageList.Item>
            <ImageList.AspectContainer>
              <ImageList.Image src="https://material-components-web.appspot.com/images/photos/3x2/5.jpg" />
              <ImageList.Supporting>
                <ImageList.Label>Text Label</ImageList.Label>
              </ImageList.Supporting>
            </ImageList.AspectContainer>
          </ImageList.Item>
        </ImageList>
      </div>
    );
  }
}
