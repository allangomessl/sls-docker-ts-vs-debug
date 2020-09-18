import { Temporal } from 'proposal-temporal'

const startupTime = Temporal.now.time()

export const hello = async (event: any) => {
  return {
    statusCode: 200,
    body: `I was changed [${startupTime}]`,
  };
};
