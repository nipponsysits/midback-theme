export type CatalogGroup = {
  label: string;
  items: { id: string; label: string }[];
};

export const catalog: CatalogGroup[] = [
  {
    label: 'Foundations',
    items: [
      { id: 'colors', label: 'Color' },
      { id: 'typography', label: 'Typography' },
      { id: 'icons', label: 'Icons' },
    ],
  },
  {
    label: 'Actions',
    items: [
      { id: 'buttons', label: 'Buttons' },
      { id: 'button-groups', label: 'Button groups' },
      { id: 'dropdowns', label: 'Dropdowns' },
    ],
  },
  {
    label: 'Forms',
    items: [
      { id: 'forms', label: 'Form fields' },
      { id: 'selects', label: 'Selects & tags' },
      { id: 'checks', label: 'Checks & radios' },
      { id: 'toggles', label: 'Toggles' },
      { id: 'steppers', label: 'Steppers' },
      { id: 'editor', label: 'Editor' },
      { id: 'upload', label: 'File upload' },
    ],
  },
  {
    label: 'Feedback',
    items: [
      { id: 'alerts', label: 'Alerts' },
      { id: 'badges', label: 'Labels & badges' },
      { id: 'progress', label: 'Progress' },
      { id: 'preloader', label: 'Material preloader' },
      { id: 'tooltips', label: 'Tooltips' },
      { id: 'popovers', label: 'Popovers' },
      { id: 'exception', label: 'Exception dialog' },
    ],
  },
  {
    label: 'Navigation',
    items: [
      { id: 'navbar', label: 'Navbar' },
      { id: 'navigator', label: 'App navigator' },
      { id: 'tabs', label: 'Tabs & pills' },
      { id: 'breadcrumbs', label: 'Breadcrumbs' },
      { id: 'pagination', label: 'Pagination & pager' },
    ],
  },
  {
    label: 'Data display',
    items: [
      { id: 'tables', label: 'Tables' },
      { id: 'lists', label: 'Lists' },
      { id: 'sorting', label: 'Drag & drop' },
      { id: 'stats', label: 'Stats' },
      { id: 'charts', label: 'Charts' },
      { id: 'timeline', label: 'Timeline' },
      { id: 'calendar', label: 'Calendar' },
      { id: 'media', label: 'Media list' },
    ],
  },
  {
    label: 'Surfaces',
    items: [
      { id: 'panels', label: 'Panels & wells' },
      { id: 'thumbnails', label: 'Thumbnails' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'jumbotron', label: 'Jumbotron' },
      { id: 'carousel', label: 'Carousel' },
      { id: 'accordion', label: 'Accordion' },
      { id: 'modal', label: 'Modal' },
      { id: 'footer', label: 'Footer' },
    ],
  },
];

export const componentCount = catalog.reduce((total, group) => total + group.items.length, 0);
