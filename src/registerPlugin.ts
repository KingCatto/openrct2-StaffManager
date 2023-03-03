// <reference path="../lib/openrct2.d.ts" />

import main from './main';

registerPlugin({
  name: 'Dallas Hirestaff Test',
  version: '0.0.1', // Your plugin version
  authors: ['DallasP'],
  type: 'local',
  licence: "GPL-3.0",
  minApiVersion: 56,
  targetApiVersion: 56,
  main,
});
