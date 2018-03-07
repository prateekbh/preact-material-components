# Changelog

## 1.3.7

* Fix className bug in SSR
* Added CardActionIcons
* Added Puppeteer visual diff tests

## 1.3.6

* Updated to mdc 0.31.0
* New Component: `Chips, Line Ripple`.
* Cards Layout components have been removed e.g. `Primary, SupportingText, Action, Title, SubTitle, HorizontalBlock, MediaItem`.
* Tabs now support `activeTabIndex` as a top level prop.
* Fab now supports `Primary/secondary` as theming props.

## 1.3.5

* Updated to mdc 0.29.0.
* All types of drawers now share same DrawerHeader, DrawerContent.

```
<Drawer.TemporaryDrawer>
  <Drawer.DrawerHeader>Hello Header</Drawer.DrawerHeader>
  <Drawer.DrawerContent>
    <Drawer.DrawerItem>Item1</Drawer.DrawerItem>
    <Drawer.DrawerItem selected={true}>Item2</Drawer.DrawerItem>
  </Drawer.DrawerContent>
</Drawer.TemporaryDrawer>
```

* ListItemIcon has renamed props, `start-detail` => `graphic` and `end-detail` => `meta`.
* Button has `primary`/ `secondary` props for setting the theme color.

---

**P.S.** For all styling props be sure to add mdc.theme.css/ mdc.theme.min.css
