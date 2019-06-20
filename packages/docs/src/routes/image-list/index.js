// Dependencies
import {h, Component} from 'preact';

// Material Components
import {
  ImageList,
  ImageListItem,
  ImageListAspectContainer,
  ImageListImage,
  ImageListSupporting,
  ImageListLabel
} from '@preact-material-components/image-list';
import '@preact-material-components/image-list/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Styles
import './style.scss';

// Samples
import sample from './sample.txt';
import {Typography} from '@preact-material-components/typography';

const stdImages = [
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
const masonryImages = [
  'images/photos/3x2/1.jpg',
  'images/photos/3x2/2.jpg',
  'images/photos/2x3/1.jpg',
  'images/photos/3x2/3.jpg',
  'images/photos/3x2/4.jpg',
  'images/photos/3x2/5.jpg',
  'images/photos/3x2/6.jpg',
  'images/photos/3x2/7.jpg',
  'images/photos/2x3/2.jpg',
  'images/photos/3x2/8.jpg',
  'images/photos/3x2/9.jpg',
  'images/photos/3x2/10.jpg',
  'images/photos/2x3/3.jpg',
  'images/photos/3x2/11.jpg',
  'images/photos/3x2/12.jpg'
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

        <Typography tag="h3" headline="3">
          Sample code
        </Typography>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <Typography tag="h3" headline="3">
          Original documentation
        </Typography>
        <Typography tag="p" body>
          This component encapsulates{' '}
          <span className="strong">mdc-image-list</span>, you can refer to its
          documentation{' '}
          <a href="https://material.io/develop/web/components/image-lists/">
            here
          </a>
          .
        </Typography>

        <Typography tag="h3" headline="3">
          Demo
        </Typography>
        <Typography tag="h4" headline="4">
          Normal
        </Typography>
        <ImageList with-text-protection class="std-img-list">
          {stdImages.map(image => (
            <ImageListItem>
              <ImageListAspectContainer>
                <ImageListImage
                  src={`https://material-components-web.appspot.com/${image}`}
                />
              </ImageListAspectContainer>
              <ImageListSupporting>
                <ImageListLabel>Text Label</ImageListLabel>
              </ImageListSupporting>
            </ImageListItem>
          ))}
        </ImageList>
        <Typography tag="h5" headline="5">
          Code
        </Typography>
        <CodeBlock>
          <Typography tag="h6" headline="6">
            JS
          </Typography>
          <code className="lang-html">
            {'<ImageList with-text-protection class="std-img-list">\n' +
              '  {stdImages.map(image => (\n' +
              '    <ImageListItem>\n' +
              '      <ImageListAspectContainer>\n' +
              '        <ImageListImage\n' +
              '          src={`https://material-components-web.appspot.com/${image}`}\n' +
              '        />\n' +
              '      </ImageListAspectContainer>\n' +
              '      <ImageListSupporting>\n' +
              '        <ImageListLabel>Text Label</ImageListLabel>\n' +
              '      </ImageListSupporting>\n' +
              '    </ImageListItem>\n' +
              '  ))}\n' +
              '</ImageList>'}
          </code>
          <Typography tag="h6" headline="6">
            SCSS
          </Typography>
          <code className="lang-scss">
            {'.std-img-list {\n' +
              '  @include mdc-image-list-standard-columns(3);\n' +
              '\n' +
              '  .mdc-image-list__image-aspect-container {\n' +
              '    padding-bottom: 66.66667%;\n' +
              '  }\n' +
              '\n' +
              '  .mdc-image-list__image {\n' +
              '    border-radius: 1rem;\n' +
              '  }\n' +
              '\n' +
              '  .mdc-image-list__supporting {\n' +
              '    border-radius: 0 0 1rem 1rem;\n' +
              '  }\n' +
              '}'}
          </code>
        </CodeBlock>
        <Typography tag="h4" headline="4">
          Masonry
        </Typography>
        <ImageList masonry class="masonry-img-list">
          {masonryImages.map(image => (
            <ImageListItem>
              <ImageListImage
                src={`https://material-components-web.appspot.com/${image}`}
              />
              <ImageListSupporting>
                <ImageListLabel>Text Label</ImageListLabel>
              </ImageListSupporting>
            </ImageListItem>
          ))}
        </ImageList>
        <Typography tag="h5" headline="5">
          Code
        </Typography>
        <CodeBlock>
          <Typography tag="h6" headline="6">
            JS
          </Typography>
          <code className="lang-html">
            {'<ImageList masonry class="masonry-img-list">\n' +
              '  {masonryImages.map(image => (\n' +
              '    <ImageListItem>\n' +
              '      <ImageListImage\n' +
              '        src={`https://material-components-web.appspot.com/${image}`}\n' +
              '      />\n' +
              '      <ImageListSupporting>\n' +
              '        <ImageListLabel>Text Label</ImageListLabel>\n' +
              '      </ImageListSupporting>\n' +
              '    </ImageListItem>\n' +
              '  ))}\n' +
              '</ImageList>'}
          </code>
          <Typography tag="h6" headline="6">
            SCSS
          </Typography>
          <code className="lang-scss">
            {'.masonry-img-list {\n' +
              '  @include mdc-image-list-masonry-columns(4);\n' +
              '}'}
          </code>
        </CodeBlock>
      </div>
    );
  }
}
