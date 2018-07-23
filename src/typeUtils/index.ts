
// type DProps = {
//   name:string;
// }

// type TestProps = {
//   name?: string;
//   age?: number;
//   sex: string;
// } & DProps

// type KeyOfTestProps = keyof TestProps

// type KeyOfProps = keyof DProps

// type TestExclude = Exclude<KeyOfTestProps,KeyOfProps>

// type TestPick = Pick<TestProps,TestExclude> // RequiredProps

// type TestRequired = Required<TestPick>

// type TestPropsCon = Partial<DProps> 

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export const withDefaultProps = <
  P extends object,
  DP extends Partial<P> 
>(
  defaultProps: DP,
  Cmp: React.ComponentType<P>
) => {
  type Props = Omit<P, keyof DP>;

  type NewProps = Partial<DP> & Props;

  Cmp.defaultProps = defaultProps;

  return Cmp as React.ComponentType<NewProps>;
};
