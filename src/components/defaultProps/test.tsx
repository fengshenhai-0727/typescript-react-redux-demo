import * as React from 'react';

// import { StatefulCounterWithDefault } from "./index2";

import { StatefulCounter } from './index3';

export class TestCount extends React.Component {
  public render() {
    return (
      <div>
        <StatefulCounter color="red" label="11" />
      </div>
    );
  }
}
