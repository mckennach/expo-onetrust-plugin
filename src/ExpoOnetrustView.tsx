import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoOnetrustViewProps } from './ExpoOnetrust.types';

const NativeView: React.ComponentType<ExpoOnetrustViewProps> =
  requireNativeViewManager('ExpoOnetrust');

export default function ExpoOnetrustView(props: ExpoOnetrustViewProps) {
  return <NativeView {...props} />;
}
