import * as React from 'react';
import * as Progress from '@breatheHR/react-progress';

export default function Page() {
  return (
    <Progress.Root value={20}>
      <Progress.Indicator>Progress</Progress.Indicator>
    </Progress.Root>
  );
}
