# Changelog

## 24 Jan 2018
- Updated to mdc 0.29.0.
- All types of drawers now share same DrawerHeader, DrawerContent.
```
<Drawer.TemporaryDrawer>
  <Drawer.DrawerHeader>Hello Header</Drawer.DrawerHeader>
  <Drawer.DrawerContent>
    <Drawer.DrawerItem>Item1</Drawer.DrawerItem>
    <Drawer.DrawerItem selected={true}>Item2</Drawer.DrawerItem>
  </Drawer.DrawerContent>
</Drawer.TemporaryDrawer>
```
- ListItemIcon has renamed props, `start-detail` => `graphic` and `end-detail` => `meta`.
- Button has `primary`/ `secondary` props to button.