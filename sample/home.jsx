import { h, Component } from "preact";
import {
  Button,
  Fab,
  Icon,
  IconToggle,
  Switch,
  Snackbar,
  Checkbox,
  Radio,
  Textfield,
  Card,
  Select,
  Elevation,
  Dialog,
  LinearProgress,
  List,
  Drawer,
  Toolbar,
  LayoutGrid,
  Menu,
  Tabs,
  Slider
} from "../";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      chosenOption: 2
    };
  }
  render() {
    const toggleOnIcon = {
      content: "favorite",
      label: "Remove From Favorites"
    };
    const toggleOffIcon = {
      content: "favorite_border",
      label: "Add to Favorites"
    };
    return (
      <div>
        <Toolbar>
          <Toolbar.Row>
            <Toolbar.Section align-start={true}>
              <Toolbar.Icon
                onClick={() => {
                  this.drawer.MDComponent.open = true;
                }}
              >
                menu
              </Toolbar.Icon>
              <Toolbar.Title>Hi</Toolbar.Title>
            </Toolbar.Section>
          </Toolbar.Row>
        </Toolbar>

        <Drawer.TemporaryDrawer
          ref={drawer => {
            this.drawer = drawer;
          }}
          onOpen={() => {
            console.log("open");
          }}
          onClose={() => {
            console.log("Close");
          }}
        >
          <Drawer.TemporaryDrawerHeader>
            Hello Header
          </Drawer.TemporaryDrawerHeader>
          <Drawer.DrawerItem>Item1</Drawer.DrawerItem>
          <Drawer.DrawerItem selected={true}>Item2</Drawer.DrawerItem>
        </Drawer.TemporaryDrawer>

        <Button
          raised={true}
          accent={true}
          ripple={true}
          onClick={e => {
            this.drawer.MDComponent.open = true;
          }}
        >
          hi
        </Button>

        <Button
          raised={true}
          accent={true}
          ripple={true}
          onClick={e => {
            console.log(this.dlg.MDComponent);
            this.dlg.MDComponent.show();
          }}
        >
          Open Dialog
        </Button>

        <div>
          <Fab mini={true} ripple={true}>
            <Icon>share</Icon>
          </Fab>
          <Switch />
        </div>

        <div>
          <IconToggle
            role="button"
            tabindex="0"
            aria-pressed="false"
            aria-label="Add to favorites"
            data-toggle-on={toggleOnIcon}
            data-toggle-off={toggleOffIcon}
          >
            favorite_border
          </IconToggle>
        </div>

        <Snackbar
          ref={bar => {
            this.bar = bar;
          }}
        />

        <div>
          <div className="mdc-form-field">
            <Checkbox
              ref={inp => {
                this.inp = inp;
              }}
            />
            <Checkbox
              disabled={true}
              ref={inp => {
                this.inp = inp;
              }}
            />
          </div>
        </div>

        <div className="mdc-form-field">
          <Radio id="rd" ref={radio => (this.radio = radio)} />{" "}
          <label for="rd">Radio Box</label>
        </div>

        <Textfield label="hello" fullwidth required />

        <LayoutGrid>
          <LayoutGrid.Cell cols={6} tabletCols={8} phoneCols={12}>
            <Card>
              <Card.Primary>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle>Subtitle</Card.Subtitle>
              </Card.Primary>
              <Card.SupportingText>
                This card is displayed within a layout grid.
              </Card.SupportingText>
              <Card.Actions>
                <Card.Action>Action</Card.Action>
              </Card.Actions>
            </Card>
          </LayoutGrid.Cell>
        </LayoutGrid>

        <Elevation z="9">hi</Elevation>

        <Dialog
          ref={dlg => {
            this.dlg = dlg;
          }}
        >
          <Dialog.Header>Hello Dialog</Dialog.Header>
          <Dialog.Body>What is this Dialog stuff??</Dialog.Body>
          <Dialog.Footer>
            <Dialog.FooterButton>No</Dialog.FooterButton>
            <Dialog.FooterButton accept={true}>Yes</Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>

        <LinearProgress indeterminate={true} accent={true} />

        <Select
          hintText="Select an option"
          ref={presel => {
            this.presel = presel;
          }}
          selectedIndex={this.state.chosenOption}
          onChange={e => {
            this.setState({
              chosenOption: e.selectedIndex
            });
          }}
        >
          <Select.Item>opt1</Select.Item>
          <Select.Item>opt2</Select.Item>
          <Select.Item>opt3</Select.Item>
          <Select.Item>opt4</Select.Item>
        </Select>
        <div>
          <Tabs indicator-accent={true}>
            <Tabs.Tab>tab1</Tabs.Tab>
            <Tabs.Tab active={true}>tab2</Tabs.Tab>
            <Tabs.Tab>tab3</Tabs.Tab>
          </Tabs>
        </div>
        <div style="margin: 32px 0">
          <Tabs.TabBarScroller>
            <Tabs scroller={true}>
              <Tabs.Tab>tab1</Tabs.Tab>
              <Tabs.Tab active={true}>tab2</Tabs.Tab>
              <Tabs.Tab>tab3</Tabs.Tab>
              <Tabs.Tab>tab4</Tabs.Tab>
              <Tabs.Tab>tab5</Tabs.Tab>
              <Tabs.Tab>tab6</Tabs.Tab>
              <Tabs.Tab>tab7</Tabs.Tab>
              <Tabs.Tab>tab7</Tabs.Tab>
              <Tabs.Tab>tab9</Tabs.Tab>
              <Tabs.Tab>tab10</Tabs.Tab>
              <Tabs.Tab>tab11</Tabs.Tab>
            </Tabs>
          </Tabs.TabBarScroller>
        </div>
        <div>
          <Select basic={true}>
            <option value="" default selected>
              Pick a food
            </option>
            <option value="grains">Bread, Cereal, Rice, and Pasta</option>
            <option value="vegetables">Vegetables</option>
            <optgroup label="Fruits">
              <option value="apple">Apple</option>
              <option value="oranges">Orange</option>
              <option value="banana">Banana</option>
            </optgroup>
            <option value="dairy">Milk, Yogurt, and Cheese</option>
            <option value="meat">
              Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
            </option>
            <option value="fats">Fats, Oils, and Sweets</option>
          </Select>
        </div>

        <List>
          <List.Item>Item1</List.Item>
          <List.Item>Item2</List.Item>
          <List.Item>Item3</List.Item>
        </List>

        <hr />

        <List interactive={true}>
          <List.LinkItem ripple={true} href="#">
            <List.ItemIcon>menu</List.ItemIcon>
            Item1
          </List.LinkItem>
          <List.LinkItem ripple={true} href="#">
            <List.ItemAvatar
              src="https://material-components-web.appspot.com/images/animal1.svg"
              height="25"
              width="25"
            />
            Item2
          </List.LinkItem>
          <List.Divider />
          <List.LinkItem ripple={true} href="#">
            Item3
          </List.LinkItem>
        </List>
        <Menu.Anchor>
          <Button
            onClick={e => {
              this.menu.MDComponent.open = true;
            }}
          >
            Click for menu
          </Button>
          <Menu
            ref={menu => {
              this.menu = menu;
            }}
          >
            <Menu.Item>Hello1</Menu.Item>
            <Menu.Item>Hello2</Menu.Item>
            <Menu.Item>Hello3</Menu.Item>
          </Menu>
        </Menu.Anchor>

        <Slider
          disabled={false}
          min={0}
          max={100}
          value={1}
          onChange={v => console.log("change:", v)}
          onInput={v => console.log("input:", v)}
        />
      </div>
    );
  }
}
