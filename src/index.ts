import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoOnetrust.web.ts
// and on native platforms to ExpoOnetrust.ts
import ExpoOnetrustModule from './ExpoOnetrustModule';
import ExpoOnetrustView from './ExpoOnetrustView';
import { ChangeEventPayload, ExpoOnetrustViewProps } from './ExpoOnetrust.types';

// Get the native constant value.
export const PI = ExpoOnetrustModule.PI;

export function hello(): string {
  return ExpoOnetrustModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoOnetrustModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoOnetrustModule ?? NativeModulesProxy.ExpoOnetrust);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoOnetrustView, ExpoOnetrustViewProps, ChangeEventPayload };
