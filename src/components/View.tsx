import React, { ReactNode } from 'react';

const View = ({
  children = undefined as undefined | ReactNode,
}): JSX.Element => {
  return <>{children}</>;
};
export default View;
