import { IGiftTransaction } from './types/GiftTransaction';
import { Entity } from './entity';
import { AxiosError } from 'axios';

export class GiftTransaction {
  public async createGiftTransaction(giftTransaction: IGiftTransaction): Promise<IGiftTransaction> {
    try {
      const path = 'api/v2/Gift/Transaction';
      const entity = new Entity();

      const gift = await entity.createEntity<IGiftTransaction>(path, giftTransaction);
      return gift;
    } catch (error: any) {
      console.error(`Error creating gift transaction ${giftTransaction}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async createGiftTransactionBatch(giftTransactions: IGiftTransaction[]) {
    try {
      const path = 'api/v2/Gift/Transactions';
      const entity = new Entity();

      await entity.createEntity<IGiftTransaction[]>(path, giftTransactions);
    } catch (error: any) {
      console.error(`Error creating gift transaction batch ${giftTransactions}: ${error}`);
      throw new AxiosError(error);
    }
  }
}
