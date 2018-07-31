import {Component, h} from 'preact';

import {MDCDialog} from '@material/dialog';
import {MDCTemporaryDrawer} from '@material/drawer';
import Button, {ButtonIcon} from '../ts/Button';
import Card, {CardActionIcon, CardActionIcons} from '../ts/Card';
import Checkbox from '../ts/Checkbox';
import ChipSet, {Chip, ChipIcon, ChipText} from '../ts/Chips';
import Dialog, {
  DialogBody,
  DialogFooter,
  DialogFooterButton,
  DialogHeader
} from '../ts/Dialog';
import {
  DrawerContent,
  DrawerHeader,
  DrawerItem,
  TemporaryDrawer
} from '../ts/Drawer';
import Elevation from '../ts/Elevation';
import Fab, {FabIcon} from '../ts/Fab';
import Icon from '../ts/Icon';
import IconToggle from '../ts/IconToggle';
import LayoutGrid, {LayoutGridCell} from '../ts/LayoutGrid';
import LinearProgress from '../ts/LinearProgress';
import List, {
  ListDivider,
  ListItem,
  ListItemGraphic,
  ListLinkItem
} from '../ts/List';
import Menu, {MenuAnchor, MenuItem} from '../ts/Menu';
import Radio from '../ts/Radio';
import Select, {SelectOption} from '../ts/Select';
import Slider from '../ts/Slider';
import Snackbar from '../ts/Snackbar';
import Switch from '../ts/Switch';
import Tabs, {Tab, TabBarScroller, TabBarScrollerTabs} from '../ts/Tabs';
import TextField from '../ts/TextField';
import Toolbar, {
  ToolbarIcon,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle
} from '../ts/Toolbar';

export default class Home extends Component<{}, {}> {
  public state = {
    activeTabIndex: 1,
    checkIt: false,
    chosenOption: -1,
    drawerOpen: false,
    fabExited: false,
    menuOpened: false,
    progress: 0.2
  };

  protected drawer?: Element & {MDComponent: MDCTemporaryDrawer};
  protected bar: Element;
  protected dlg: Element & {MDComponent: MDCDialog};
  protected radio: Element;
  protected inp: Element;

  public render({}, state) {
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
          <ToolbarRow>
            <ToolbarSection align-start>
              <ToolbarIcon
                onClick={() => {
                  this.setState({
                    drawerOpen: !this.state.drawerOpen
                  });
                }}>
                menu
              </ToolbarIcon>
              <ToolbarTitle>Hi</ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>

        <TemporaryDrawer
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
          <DrawerHeader>Hello Header</DrawerHeader>
          <DrawerContent>
            <DrawerItem>Item1</DrawerItem>
            <DrawerItem selected>Item2</DrawerItem>
          </DrawerContent>
        </TemporaryDrawer>

        <Button
          primary
          raised
          ripple
          onClick={() => {
            this.drawer.MDComponent.open = true;
          }}>
          hi
        </Button>

        <Button
          secondary
          raised
          ripple
          onClick={() => {
            this.dlg.MDComponent.show();
          }}>
          <ButtonIcon>favorite_border</ButtonIcon>
          Open Dialog
        </Button>

        <div>
          <Fab
            className="test"
            primary
            mini
            onClick={() => {
              this.setState({
                fabExited: true
              });
            }}>
            <FabIcon>share</FabIcon>
          </Fab>
          <Fab exited={this.state.fabExited} ripple>
            <FabIcon>share</FabIcon>
          </Fab>
          <Switch />
        </div>

        <div>
          <IconToggle
            role="button"
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
              checked={this.state.checkIt}
              onChange={e => {
                console.log('changed', e);
              }}
              ref={inp => {
                this.inp = inp;
              }}
            />
            <Checkbox
              disabled
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
            checked
            ref={radio => (this.radio = radio)}
          />{' '}
          <label for="rd1">Radio Box2</label>
        </div>

        <div className="mdc-form-field">
          <Radio
            id="rd2"
            name="rbox"
            checked
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
          <LayoutGridCell cols={12} tabletCols={8} phoneCols={4}>
            <Card>
              <div>Card header</div>
              <CardActionIcons>
                <CardActionIcon>favorite</CardActionIcon>
              </CardActionIcons>
            </Card>
          </LayoutGridCell>
        </LayoutGrid>

        <Elevation z={9}>hi</Elevation>

        <Dialog
          ref={dlg => {
            this.dlg = dlg;
          }}>
          <DialogHeader>Hello Dialog</DialogHeader>
          <DialogBody>What is this Dialog stuff??</DialogBody>
          <DialogFooter>
            <DialogFooterButton>No</DialogFooterButton>
            <DialogFooterButton accept>Yes</DialogFooterButton>
          </DialogFooter>
        </Dialog>

        <Button
          onClick={() => {
            this.setState({
              progress: 0.5
            });
          }}>
          Set half progress
        </Button>
        <LinearProgress progress={this.state.progress} secondary />

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
            <SelectOption>Bread, Cereal, Rice, and Pasta</SelectOption>
            <SelectOption disabled>Vegetables</SelectOption>
            <SelectOption>Fruit</SelectOption>
            <SelectOption>Milk, Yogurt, and Cheese</SelectOption>
            <SelectOption>
              Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
            </SelectOption>
            <SelectOption>Fats, Oils, and Sweets</SelectOption>
          </Select>
        </div>
        <div>
          <Select hintText="Pick a Food Group">
            <SelectOption>Bread, Cereal, Rice, and Pasta</SelectOption>
            <SelectOption disabled>Vegetables</SelectOption>
            <SelectOption>Fruit</SelectOption>
            <SelectOption selected>Milk, Yogurt, and Cheese</SelectOption>
            <SelectOption>
              Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
            </SelectOption>
            <SelectOption>Fats, Oils, and Sweets</SelectOption>
          </Select>
        </div>

        <div>
          <Tabs activeTabIndex={this.state.activeTabIndex}>
            <Tab>tab1</Tab>
            <Tab>tab2</Tab>
            <Tab>tab3</Tab>
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
          <TabBarScroller>
            <TabBarScrollerTabs>
              <Tab>tab1</Tab>
              <Tab active>tab2</Tab>
              <Tab>tab3</Tab>
              <Tab>tab4</Tab>
              <Tab>tab5</Tab>
              <Tab>tab6</Tab>
              <Tab>tab7</Tab>
              <Tab>tab7</Tab>
              <Tab>tab9</Tab>
              <Tab>tab10</Tab>
              <Tab>tab11</Tab>
            </TabBarScrollerTabs>
          </TabBarScroller>
        </div>
        <div>
          <Select>
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
          <ListItem>Item1</ListItem>
          <ListItem>Item2</ListItem>
          <ListItem>Item3</ListItem>
        </List>

        <hr />

        <List ripple>
          <ListLinkItem ripple href="#">
            <ListItemGraphic>menu</ListItemGraphic>
            Item1
          </ListLinkItem>
          <ListLinkItem ripple href="#">
            <img
              src="https://material-components-web.appspot.com/images/animal1.svg"
              height="25"
              width="25"
            />
            Item2
          </ListLinkItem>
          <ListDivider />
          <ListLinkItem ripple href="#">
            Item3
          </ListLinkItem>
        </List>
        <MenuAnchor>
          <Button
            onClick={() => {
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
            <MenuItem>Hello1</MenuItem>
            <MenuItem>Hello2</MenuItem>
            <MenuItem>Hello3</MenuItem>
          </Menu>
        </MenuAnchor>

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
          <ChipSet>
            <Chip>
              <ChipText>Chip One</ChipText>
            </Chip>
            <Chip>
              <ChipText>Chip Two</ChipText>
            </Chip>
            <Chip>
              <ChipText>Chip Three</ChipText>
            </Chip>
            <Chip>
              <ChipText>Chip Four</ChipText>
            </Chip>
          </ChipSet>
        </div>
        <div>
          <ChipSet>
            <ChipIcon leading className="material-icons">
              face
            </ChipIcon>
            <ChipText>Jane Smith</ChipText>
            <ChipIcon
              trailing
              className="material-icons"
              role="button"
              title="More options">
              more_vert
            </ChipIcon>
          </ChipSet>
          <Chip>
            <ChipIcon leading className="material-icons">
              face
            </ChipIcon>
            <ChipText>John Doe</ChipText>
            <ChipIcon
              trailing
              className="material-icons"
              role="button"
              title="More options">
              more_vert
            </ChipIcon>
          </Chip>
        </div>
      </div>
    );
  }
}
