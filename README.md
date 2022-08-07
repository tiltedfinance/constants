## TiltedFinance Constants
This repository contains all the constants and types needed to run the TiltedFinance infrastructure  

To install it simply run

```
npm install --save @tiltedfinance/constants
```

### Environment constants Example

```ts
import {getTiltedFinanceEnvironment, TiltedFinanceEnvironmentType} from '@tiltedfinance/constants';

// Get the DEV environment constants
const env = getTiltedFinanceEnvironment(TiltedFinanceEnvironmentType.DEV);

// Print the TILT token address
console.log(env.tiltChain.tiltTokenAddress);
```

You can inspect the `TiltedFinanceEnvironment` interface in [https://github.com/tiltedfinance/constants/blob/master/src/types.d.ts](https://github.com/tiltedfinance/constants/blob/master/src/types.d.ts)
