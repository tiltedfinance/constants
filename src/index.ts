import _devConstants from "./devConstants";
import _prodConstants from "./prodConstants";
import { TiltedFinanceEnvironment } from "./types";

import type * as contracts from './typechain-types';
export { contracts };

export enum TiltedFinanceEnvironmentType {
  DEV,
  PROD
};

export const getTiltedFinanceEnvironment = (_type: TiltedFinanceEnvironmentType): TiltedFinanceEnvironment => {
  switch (_type) {
    case TiltedFinanceEnvironmentType.DEV:
      return _devConstants;
    case TiltedFinanceEnvironmentType.PROD:
      return _prodConstants;
  }
}
