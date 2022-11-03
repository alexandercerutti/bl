import BufferList = require('./BufferList');


export type BufferListAcceptedTypes =
  | Buffer
  | BufferList
  | Uint8Array
  | BufferListAcceptedTypes[]
  | string
  | number;
