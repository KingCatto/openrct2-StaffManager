// <reference path="../lib/openrct2.d.ts" />

import main from './main';

registerPlugin({
  name: 'Staff Manager',
  version: '0.0.3', // Your plugin version
  authors: ['DallasP'],
  type: 'local',
  licence: "MIT",
  minApiVersion: 56,
  targetApiVersion: 56,
  main,
});
