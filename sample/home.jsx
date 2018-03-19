import {
  Button,
  Card,
  Checkbox,
  Chips,
  Dialog,
  Drawer,
  Elevation,
  Fab,
  GridList,
  Icon,
  IconToggle,
  LayoutGrid,
  LinearProgress,
  List,
  Menu,
  Radio,
  Select,
  Slider,
  Snackbar,
  Switch,
  Tabs,
  TextField,
  Toolbar
} from '../';
import {Component, h} from 'preact';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      chosenOption: -1,
      fabExited: false,
      drawerOpen: false,
      menuOpened: false,
      progress: 0.2,
      activeTabIndex: 1
    };
  }
  render({}, state) {
    const toggleOnIcon = {
      content: 'favorite',
      label: 'Remove From Favorites'
    };
    const toggleOffIcon = {
      content: 'favorite_border',
      label: 'Add to Favorites'
    };
    return (
      <div>
        <Toolbar>
          <Toolbar.Row>
            <Toolbar.Section align-start={true}>
              <Toolbar.Icon
                onClick={() => {
                  this.setState({
                    drawerOpen: !this.state.drawerOpen
                  });
                }}>
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
          open={this.state.drawerOpen}
          onOpen={() => {
            console.log('open');
          }}
          onClose={() => {
            this.setState({
              drawerOpen: false
            });
            console.log('Closed');
          }}>
          <Drawer.DrawerHeader>Hello Header</Drawer.DrawerHeader>
          <Drawer.DrawerContent>
            <Drawer.DrawerItem>Item1</Drawer.DrawerItem>
            <Drawer.DrawerItem selected={true}>Item2</Drawer.DrawerItem>
          </Drawer.DrawerContent>
        </Drawer.TemporaryDrawer>

        <Button
          primary
          raised
          ripple
          onClick={e => {
            this.drawer.MDComponent.open = true;
          }}>
          hi
        </Button>

        <Button
          secondary
          raised
          ripple
          onClick={e => {
            console.log(this.dlg.MDComponent);
            this.dlg.MDComponent.show();
          }}>
          <Button.Icon>favorite_border</Button.Icon>
          Open Dialog
        </Button>

        <div>
          <Fab
            className="test"
            primary
            mini={true}
            onClick={() => {
              this.setState({
                fabExited: true
              });
            }}>
            <Fab.Icon>share</Fab.Icon>
          </Fab>
          <Fab exited={this.state.fabExited} ripple={true}>
            <Fab.Icon>share</Fab.Icon>
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
            data-toggle-off={toggleOffIcon}>
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
            <Button
              onClick={() => {
                this.setState({
                  checkIt: true
                });
              }}>
              Check
            </Button>
            <Checkbox
              checked={this.state.checkIt || false}
              onChange={e => {
                console.log('changed', e);
              }}
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
          <Radio id="rd" ref={radio => (this.radio = radio)} />{' '}
          <label for="rd">Radio Box</label>
        </div>

        <div className="mdc-form-field">
          <Radio
            id="rd1"
            name="rbox"
            checked={true}
            ref={radio => (this.radio = radio)}
          />{' '}
          <label for="rd1">Radio Box2</label>
        </div>

        <div className="mdc-form-field">
          <Radio
            id="rd2"
            name="rbox"
            checked={true}
            ref={radio => (this.radio = radio)}
          />{' '}
          <label for="rd2">Radio Box3</label>
        </div>

        <div>
          <TextField label="trailing" trailingIcon="check" />
        </div>

        <div>
          <TextField label="leading" leadingIcon="check" />
        </div>

        <div>
          <TextField label="plain" />
        </div>

        <div>
          <TextField label="textarea" textarea />
        </div>

        <div>
          <TextField label="fullwidth" fullwidth />
        </div>

        <div>
          <TextField
            label="helperText"
            helperText="helper text"
            helperTextPersistent
            helperTextValidationMsg
            required
          />
        </div>

        <div>
          <Icon className="some-class">check</Icon>
        </div>

        <LayoutGrid>
          <LayoutGrid.Cell cols={6} tabletCols={8} phoneCols={12}>
            <Card>
              <div>Card header</div>
              <Card.ActionIcons>
                <Card.ActionIcon>favorite</Card.ActionIcon>
              </Card.ActionIcons>
            </Card>
          </LayoutGrid.Cell>
        </LayoutGrid>

        <Elevation z="9">hi</Elevation>

        <Dialog
          ref={dlg => {
            this.dlg = dlg;
          }}>
          <Dialog.Header>Hello Dialog</Dialog.Header>
          <Dialog.Body>What is this Dialog stuff??</Dialog.Body>
          <Dialog.Footer>
            <Dialog.FooterButton>No</Dialog.FooterButton>
            <Dialog.FooterButton accept={true}>Yes</Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>

        <Button
          onClick={() => {
            this.setState({
              progress: 0.5
            });
          }}>
          Set half progress
        </Button>
        <LinearProgress progress={this.state.progress} accent={true} />

        <Button raised onClick={() => this.setState({chosenOption: -1})}>
          Clear Select
        </Button>
        <div>Selected index: {state.chosenOption}</div>
        <div>
          <Select
            hintText="Pick a Food Group"
            selectedIndex={state.chosenOption}
            onChange={e => {
              console.log(e.selectedIndex);
              this.setState({
                chosenOption: e.selectedIndex
              });
            }}>
            <Select.Item>Bread, Cereal, Rice, and Pasta</Select.Item>
            <Select.Item disabled>Vegetables</Select.Item>
            <Select.Item>Fruit</Select.Item>
            <Select.Item>Milk, Yogurt, and Cheese</Select.Item>
            <Select.Item>
              Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
            </Select.Item>
            <Select.Item>Fats, Oils, and Sweets</Select.Item>
          </Select>
        </div>
        <div>
          <Select hintText="Pick a Food Group">
            <Select.Item>Bread, Cereal, Rice, and Pasta</Select.Item>
            <Select.Item disabled>Vegetables</Select.Item>
            <Select.Item>Fruit</Select.Item>
            <Select.Item selected>Milk, Yogurt, and Cheese</Select.Item>
            <Select.Item>
              Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
            </Select.Item>
            <Select.Item>Fats, Oils, and Sweets</Select.Item>
          </Select>
        </div>

        <div>
          <Tabs
            activeTabIndex={this.state.activeTabIndex}
            indicator-accent={true}>
            <Tabs.Tab>tab1</Tabs.Tab>
            <Tabs.Tab>tab2</Tabs.Tab>
            <Tabs.Tab>tab3</Tabs.Tab>
          </Tabs>
          <Button
            onClick={() => {
              this.setState({
                activeTabIndex: this.state.activeTabIndex + 1
              });
            }}>
            Increase index
          </Button>
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
              this.setState({
                menuOpened: true
              });
            }}>
            Click for menu
          </Button>
          <Menu
            open={this.state.menuOpened}
            onMenuClosed={() => {
              this.setState({
                menuOpened: false
              });
            }}>
            <Menu.Item>Hello1</Menu.Item>
            <Menu.Item>Hello2</Menu.Item>
            <Menu.Item>Hello3</Menu.Item>
          </Menu>
        </Menu.Anchor>

        <Slider
          discrete
          disabled={false}
          min={0}
          max={100}
          value={1}
          onChange={v => console.log('change:', v)}
          onInput={v => console.log('input:', v)}
        />

        <div>
          <Chips>
            <Chips.Chip>
              <Chips.Text>Chip One</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Chip Two</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Chip Three</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Chip Four</Chips.Text>
            </Chips.Chip>
          </Chips>
        </div>
        <div>
          <Chips.Chip>
            <Chips.Icon leading className="material-icons">
              face
            </Chips.Icon>
            <Chips.Text>Jane Smith</Chips.Text>
            <Chips.Icon
              trailing
              className="material-icons"
              tabindex="0"
              role="button"
              title="More options">
              more_vert
            </Chips.Icon>
          </Chips.Chip>
          <Chips.Chip>
            <Chips.Icon leading className="material-icons">
              face
            </Chips.Icon>
            <Chips.Text>John Doe</Chips.Text>
            <Chips.Icon
              trailing
              className="material-icons"
              tabindex="0"
              role="button"
              title="More options">
              more_vert
            </Chips.Icon>
          </Chips.Chip>
        </div>
      </div>
    );
  }
}
