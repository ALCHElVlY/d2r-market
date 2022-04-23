// External imports
import { createTransform } from 'redux-persist';

export const GenerateRandomKey = (length = 36) => {
  // Declare all characters
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.?@';

  // Loop through the characters and add them to the key
  let str = '';
  for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Return the random generated key
  return str;
}

const CustomTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    // convert mySet to an Array.
    return { ...inboundState, prevState: [inboundState] };
  },
  // transform state being rehydrated
  (outboundState, key) => {
    // convert mySet back to a Set.
    return { ...outboundState, prevState: new Set(outboundState) };
  },
  // define which reducers this transform gets called for.
  { whitelist: ['auth'] }
);

export default CustomTransform;