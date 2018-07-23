import * as React from 'react';

interface StatefulCounterProps {
  label: string;
  color?: string;
}
interface State {
  readonly count: number;
}
const DefaultProps = {
  color: 'red',
};
type DefaultProps = typeof DefaultProps;

type Props = StatefulCounterProps & DefaultProps;

export class StatefulCounter extends React.Component<Props, State> {
  public readonly state: State = {
    count: 0,
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
}
