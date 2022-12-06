// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth from '../../../app/middleware/Auth';
import ExportLog from '../../../app/middleware/log';

declare module 'egg' {
  interface IMiddleware {
    auth: typeof ExportAuth;
    log: typeof ExportLog;
  }
}
