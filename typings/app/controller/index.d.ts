// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase from '../../../app/controller/base';
import ExportHome from '../../../app/controller/home';
import ExportNovelTypeController from '../../../app/controller/novelTypeController';

declare module 'egg' {
  interface IController {
    base: ExportBase;
    home: ExportHome;
    novelTypeController: ExportNovelTypeController;
  }
}
