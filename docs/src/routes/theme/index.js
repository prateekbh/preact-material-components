// Dependencies
import { h, Component } from "preact";

// Material Components
import Button from "preact-material-components/Button";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Styles
import style from "./style";

// Class
export default class ThemePage extends Component {
  render() {
    return (
      <div className={style["page-theme"]}>
        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          preact-material-components brings{" "}
          <span className="strong">mdc-theme</span> as is, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Changing colors</div>
        <div className="mdc-typography--body">
          With preact-material-components you can either choose to use the
          bundled <span className="strong">.css </span>
          files or the <span className="strong">.scss</span> files. Both have
          their different ways to handle theming.
          <div>
            With the css files you can either override the colors and
            backgrounds with a more specificity css rule or you can alter the
            css variables defined on the
            <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme#css-custom-properties">
              &nbsp;original documentation page.
            </a>
          </div>
          <div>
            Whereas with the scss files you can directly go an while importing
            the scss of the individual components, you can declare your scss
            variabled as shown
            <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme#sass-mixins-variables-and-functions">
              &nbsp;here.
            </a>
          </div>
        </div>

        <div className="mdc-typography--display1">Demo </div>

        <div className="mdc-typography--title">Unstyled </div>
        <Button ripple raised>
          Flat button with ripple
        </Button>

        <div className="mdc-typography--title">
          Overridden with css property
        </div>
        <Button ripple raised className={style["css-prop-override"]}>
          Flat button with ripple
        </Button>

        <div className="mdc-typography--title">
          Overridden with css variable
        </div>
        <Button ripple raised className={style["css-var-override"]}>
          Flat button with ripple
        </Button>

        <div className="mdc-typography--display1">Theme colors as Text </div>
        <div className={style.parentbox}>
          <div className={style.box}>
            <div
              className={
                style.cell + " mdc-typography--body mdc-theme--primary"
              }
            >
              Primary
            </div>
            <div
              className={
                style.cell + " mdc-typography--body mdc-theme--primary-light"
              }
            >
              Primary Light
            </div>
            <div
              className={
                style.cell + " mdc-typography--body mdc-theme--primary-dark"
              }
            >
              Primary Dark
            </div>
          </div>
          <div className={style.box}>
            <div
              className={
                style.cell + " mdc-typography--body mdc-theme--secondary"
              }
            >
              Secondary
            </div>
            <div
              className={
                style.cell + " mdc-typography--body mdc-theme--secondary-light"
              }
            >
              Secondary Light
            </div>
            <div
              className={
                style.cell + " mdc-typography--body mdc-theme--secondary-dark"
              }
            >
              Secondary Dark
            </div>
          </div>
        </div>

        <div className="mdc-typography--display1">
          Theme colors as Background{" "}
        </div>
        <div className={style.parentbox}>
          <div className={style.box}>
            <div
              className={
                style.cell +
                " mdc-typography--body mdc-theme--text-primary-on-primary mdc-theme--primary-bg"
              }
            >
              Primary
            </div>
            <div
              className={
                style.cell +
                " mdc-typography--body mdc-theme--text-primary-on-primary mdc-theme--primary-light-bg"
              }
            >
              Primary Light
            </div>
            <div
              className={
                style.cell +
                " mdc-typography--body mdc-theme--text-primary-on-primary mdc-theme--primary-dark-bg"
              }
            >
              Primary Dark
            </div>
            <div
              className={
                style.cell +
                " mdc-typography--body mdc-theme--text-primary-on-background mdc-theme--background"
              }
            >
              Background
            </div>
          </div>
          <div className={style.box}>
            <div
              className={
                style.cell +
                " mdc-typography--body mdc-theme--text-primary-on-secondary mdc-theme--secondary-bg"
              }
            >
              Secondary
            </div>
            <div
              className={
                style.cell +
                " mdc-typography--body mdc-theme--text-primary-on-secondary mdc-theme--secondary-light-bg"
              }
            >
              Secondary Light
            </div>
            <div
              className={
                style.cell +
                " mdc-typography--body mdc-theme--text-primary-on-secondary mdc-theme--secondary-dark-bg"
              }
            >
              Secondary Dark
            </div>
            <div
              className={
                style.cell +
                " mdc-typography--body mdc-theme--text-primary-on-background mdc-theme--background"
              }
            >
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    );
  }
}
