import * as React from 'react';
import { withDefaultProps } from '../../typeUtils';

const defaultProps = {
  color: 'red'
};

type DefaultProps = typeof defaultProps;

type IProps = {
  color?: string;
  name?: string;
  age: number;
} & DefaultProps;

export const Button: React.SFC<IProps> = ({ color, children }) => (
  <button style={{ color }}>
    {color.split('')}
    {children}
  </button>
);

export const ButtonWithDefaultProps = withDefaultProps(defaultProps, Button);

export class TestButton extends React.Component {
  public render() {
    return (
      <div>
        <ButtonWithDefaultProps age={18} />
      </div>
    );
  }
}
