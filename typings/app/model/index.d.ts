// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNovelType from '../../../app/model/novelType';

declare module 'egg' {
  interface IModel {
    NovelType: ReturnType<typeof ExportNovelType>;
  }
}
