// Dependencies
import {h, Component} from 'preact';

// Material Components
import ImageList from '../../../../esm/ImageList';

import '../../../../ImageList/style.css';

// Components
import ComponentTable from '../../components/component-table';
import SampleCodeBlock from '../../components/sample-code-block';
import OrgDoc from '../../components/original-documentation';

// Styles
import './style.scss';

// Samples
import sample from './sample.txt';

const images = [
  'images/photos/3x2/1.jpg',
  'images/photos/3x2/2.jpg',
  'images/photos/3x2/3.jpg',
  'images/photos/3x2/4.jpg',
  'images/photos/3x2/5.jpg',
  'images/photos/3x2/6.jpg',
  'images/photos/3x2/7.jpg',
  'images/photos/3x2/8.jpg',
  'images/photos/3x2/9.jpg',
  'images/photos/3x2/10.jpg',
  'images/photos/3x2/11.jpg',
  'images/photos/3x2/12.jpg',
  'images/photos/3x2/13.jpg',
  'images/photos/3x2/14.jpg',
  'images/photos/3x2/15.jpg'
];

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

        <SampleCodeBlock>{sample}</SampleCodeBlock>

        <OrgDoc link="image-lists">mdc-image-list</OrgDoc>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Normal </div>
        <ImageList with-text-protection>
          {images.map(image => (
            <ImageList.Item>
              <ImageList.AspectContainer>
                <ImageList.Image
                  src={`https://material-components-web.appspot.com/${image}`}
                />
              </ImageList.AspectContainer>
              <ImageList.Supporting>
                <ImageList.Label>Text Label</ImageList.Label>
              </ImageList.Supporting>
            </ImageList.Item>
          ))}
        </ImageList>
      </div>
    );
  }
}
