import * as React from 'react';
export interface StatefulCounterWithDefaultProps {
  label: string;
  initialCount?: number;
  color?: string;
}
interface DefaultProps {
  readonly initialCount: number;
  readonly color: string;
}
interface State {
  readonly count: number;
}
export const StatefulCounterWithDefault: React.ComponentClass<
  StatefulCounterWithDefaultProps
> = class extends React.Component<
  StatefulCounterWithDefaultProps & DefaultProps
> {
  public static defaultProps: DefaultProps = {
    color: 'red',
    initialCount: 0,
  };
  public readonly state: State = {
    count: this.props.initialCount,
  };
  public handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  public render() {
    const { handleIncrement } = this;
    const { label, color } = this.props;
    const { count } = this.state;
    return (
      <div>
        {color.split('')}
        <span>
          {label}: {count}{' '}
        </span>
        <button type="button" onClick={handleIncrement}>
          {`Increment`}
        </button>
      </div>
    );
  }
};