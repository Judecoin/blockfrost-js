import { BlockFrostAPI } from '../../src';

export default [
  {
    command: (SDK: BlockFrostAPI) => SDK.assets(),
    response: expect.arrayContaining([
      expect.objectContaining({
        asset: expect.any(String),
        quantity: expect.any(String),
      }),
    ]),
  },
] as const;