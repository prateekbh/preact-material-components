// Dependencies
import { h, Component } from "preact";
import Router from "preact-router";

// Material Components
import Formfield from "preact-material-components/Formfield";
import LayoutGrid from "preact-material-components/LayoutGrid";
import Switch from "preact-material-components/Switch";
import Toolbar from "preact-material-components/Toolbar";

// Routes
import ButtonPage from "../../routes/button";
import CardPage from "../../routes/card";
import CheckboxPage from "../../routes/checkbox";
import DialogPage from "../../routes/dialog";
import DrawerPage from "../../routes/drawer";
import ElevationPage from "../../routes/elevation";
import FabPage from "../../routes/fab";
import FormFieldPage from "../../routes/form-field";
import GridListPage from "../../routes/grid-list";
import HomePage from "../../routes/home";
import IconPage from "../../routes/icon";
import IconTogglePage from "../../routes/icon-toggle";
import LayoutGridPage from "../../routes/layout-grid";
import LinearProgressPage from "../../routes/linear-progress";
import ListPage from "../../routes/list";
import MenuPage from "../../routes/menu";
import RadioPage from "../../routes/radio";
import SelectPage from "../../routes/select";
import SliderPage from "../../routes/slider";
import SnackbarPage from "../../routes/snackbar";
import SwitchPage from "../../routes/switch";
import TabsPage from "../../routes/tabs";
import TextfieldPage from "../../routes/textfield";
import ThemePage from "../../routes/theme";
import ToolbarPage from "../../routes/toolbar";

// Components
import Menu from "../menu";

// Styles
import "preact-material-components/style.css";
import "./style";

// Class
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: false
    };
    this.menuItems = [
      {
        text: "Home",
        icon: "home",
        link: "/",
        component: HomePage
      },
      {
        text: "Button",
        link: "/component/button",
        component: ButtonPage
      },
      {
        text: "Card",
        link: "/component/card",
        component: CardPage
      },
      {
        text: "Checkbox",
        link: "/component/checkbox",
        component: CheckboxPage
      },
      {
        text: "Dialog",
        link: "/component/dialog",
        component: DialogPage
      },
      {
        text: "Drawer",
        link: "/component/drawer",
        component: DrawerPage
      },
      {
        text: "Elevation",
        link: "/component/elevation",
        component: ElevationPage
      },
      {
        text: "Fab",
        link: "/component/fab",
        component: FabPage
      },
      {
        text: "Formfield",
        link: "/component/form-field",
        component: FormFieldPage
      },
      {
        text: "GridList",
        link: "/component/grid-list",
        component: GridListPage
      },
      {
        text: "Icon",
        link: "/component/icon",
        component: IconPage
      },
      {
        text: "IconToggle",
        link: "/component/icon-toggle",
        component: IconTogglePage
      },
      {
        text: "LayoutGrid",
        link: "/component/layout-grid",
        component: LayoutGridPage
      },
      {
        text: "LinearProgress",
        link: "/component/linear-progress",
        component: LinearProgressPage
      },
      {
        text: "List",
        link: "/component/list",
        component: ListPage
      },
      {
        text: "Menu",
        link: "/component/menu",
        component: MenuPage
      },
      {
        text: "Radio",
        link: "/component/radio",
        component: RadioPage
      },
      {
        text: "Select",
        link: "/component/select",
        component: SelectPage
      },
      {
        text: "Slider",
        link: "/component/slider",
        component: SliderPage
      },
      {
        text: "Snackbar",
        link: "/component/snackbar",
        component: SnackbarPage
      },
      {
        text: "Switch",
        link: "/component/switch",
        component: SwitchPage
      },
      {
        text: "Tabs",
        link: "/component/tabs",
        component: TabsPage
      },
      {
        text: "Textfield",
        link: "/component/textfield",
        component: TextfieldPage
      },
      {
        text: "Theme",
        link: "/component/theme",
        component: ThemePage
      },
      {
        text: "Toolbar",
        link: "/component/toolbar",
        component: ToolbarPage
      }
    ];
    this._handleRoute = this._handleRoute.bind(this);
  }

  closeDrawer() {
    this.menu.close();
  }

  toggleDarkMode() {
    this.setState({
      darkMode: !this.state.darkMode
    });
    if (this.state.darkMode) {
      document.body.classList.add("mdc-theme--dark");
    } else {
      document.body.classList.remove("mdc-theme--dark");
    }
  }

  _handleRoute(e) {
    this.setState({
      toolbarTitle:
        e.url === "/"
          ? null
          : (this.menuItems.find(item => item.link === e.url) || {}).text
    });
  }

  render() {
    return (
      <div className="home mdc-typography">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <div className={this.state.toolbarTitle ? "hero collapsed" : "hero"}>
          <Toolbar className="mdc-theme--dark">
            <Toolbar.Row>
              <Toolbar.Section align-start={true}>
                <Toolbar.Icon
                  menu={true}
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.menu.open();
                  }}
                >
                  menu
                </Toolbar.Icon>
                <Toolbar.Title>{this.state.toolbarTitle}</Toolbar.Title>
              </Toolbar.Section>
              <Toolbar.Section align-end={true}>
                <Formfield className="field-darkmode">
                  Dark Mode
                  <Switch
                    className="switch-darkmode"
                    onChange={() => {
                      this.toggleDarkMode();
                    }}
                  />
                </Formfield>
              </Toolbar.Section>
            </Toolbar.Row>
          </Toolbar>
          <svg
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMid"
          >
            <g>
              <title>background</title>
              <rect
                fill="none"
                id="canvas_background"
                height="202"
                width="202"
                y="-1"
                x="-1"
              />
            </g>
            <g>
              <title>Layer 1</title>
              <path
                stroke="#673ab8"
                id="svg_19"
                fill="#673ab8"
                d="m100,6.87844l83.36915,46.56078l0,93.12156l-83.36915,46.56078l-83.36914,-46.56078l0,-93.12156l83.36914,-46.56078z"
              />
              <g id="svg_34">
                <g stroke="null" id="svg_5">
                  <circle
                    stroke="null"
                    id="svg_1"
                    r="56.999668"
                    cy="99.999997"
                    cx="99.333339"
                    class="st0"
                  />
                  <path
                    stroke="null"
                    id="svg_2"
                    d="m59.433574,60.100231l79.799535,0l0,79.799535l-79.799535,0l0,-79.799535z"
                    class="st1"
                  />
                  <path
                    stroke="null"
                    id="svg_3"
                    d="m139.233109,60.100231l-39.899768,79.799535l-39.899768,-79.799535l79.799535,0z"
                    class="st2"
                  />
                  <path
                    stroke="null"
                    id="svg_4"
                    d="m42.333671,43.000329l113.999336,0l0,113.999336l-113.999336,0l0,-113.999336z"
                    class="st3"
                  />
                </g>
                <ellipse
                  ry="1.999985"
                  rx="1.999985"
                  id="svg_25"
                  cy="93.333385"
                  cx="99.333336"
                  stroke-width="null"
                  stroke="null"
                  fill="#673ab8"
                />
              </g>
              <g stroke="null" id="svg_36">
                <ellipse
                  stroke="#673ab8"
                  transform="matrix(0.17321515449627276,0.17321515449627273,-0.17321515449627273,0.17321515449627276,63.46362017579341,27.139604895916065) "
                  ry="20.957719"
                  rx="75.190925"
                  id="svg_32"
                  cy="89.457308"
                  cx="296.539126"
                  fill-opacity="null"
                  stroke-width="5"
                  fill="none"
                />
                <ellipse
                  stroke="#673ab8"
                  transform="matrix(0.17321515449627276,-0.17321515449627273,0.17321515449627273,0.17321515449627276,28.182048694186207,62.16614021567621) "
                  ry="20.957719"
                  rx="75.190925"
                  id="svg_35"
                  cy="297.275314"
                  cx="113.492909"
                  fill-opacity="null"
                  stroke-width="5"
                  fill="none"
                />
              </g>
            </g>
          </svg>
          <div className="mdc-typography--display2 name">
            preact-material-components
          </div>
        </div>
        <Menu items={this.menuItems} ref={menu => (this.menu = menu)} />
        <LayoutGrid className="content">
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              <Router onChange={this._handleRoute}>
                {this.menuItems.map(({ component: Element, link }) => (
                  <Element path={link} />
                ))}
                <HomePage default />
              </Router>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}
