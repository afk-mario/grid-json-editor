const spec = [
  {
    name: 'id',
    label: 'Id',
    type: 'text',
    value: '',
  },
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    value: 0,
    hide: true,
  },
  {
    name: 'x',
    label: 'X',
    type: 'number',
    value: 0,
    min: 0,
    max: 32,
    step: 1,
  },
  {
    name: 'y',
    label: 'Y',
    type: 'number',
    value: 0,
    min: 0,
    max: 32,
    step: 1,
  },
  {
    name: 'w',
    label: 'Width',
    type: 'number',
    value: 1,
    step: 1,
    min: 1,
    max: 32,
  },
  {
    name: 'h',
    label: 'Height',
    type: 'number',
    value: 1,
    step: 1,
    min: 1,
    max: 32,
  },
  {
    name: 'hidden',
    label: 'Hidden',
    type: 'checkbox',
    value: false,
  },
  {
    name: 'button',
    label: 'Button',
    type: 'checkbox',
    value: false,
  },
  {
    name: 'btnScreenID',
    label: 'Button Screen Id',
    type: 'text',
    value: '',
  },
  {
    name: 'btnTargetId',
    label: 'Button Target Id',
    type: 'text',
    value: '',
  },
  {
    name: 'linePoints',
    label: 'Line Points',
    type: 'text',
    value: '[]',
    hide: false,
  },
];

export default spec;
