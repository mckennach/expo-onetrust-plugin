import * as React from 'react';

import { ExpoOnetrustViewProps } from './ExpoOnetrust.types';

export default function ExpoOnetrustView(props: ExpoOnetrustViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
