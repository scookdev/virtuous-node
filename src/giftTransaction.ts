import { IGiftTransaction } from './types/GiftTransaction';
import { Entity } from './entity';

export class GiftTransaction {
  public async createGiftTransaction(giftTransaction: IGiftTransaction) {
    try {
      const path = 'api/v2/Gift/Transaction';
      const entity = new Entity();

      await entity.createEntity<IGiftTransaction>(path, giftTransaction);
    } catch (error: any) {
      throw new Error(`Error creating gift transaction ${giftTransaction}: ${error}`);
    }
  }

  public async createGiftTransactionBatch(giftTransactions: IGiftTransaction[]) {
    try {
      const path = 'api/v2/Gift/Transactions';
      const entity = new Entity();

      await entity.createEntity<IGiftTransaction[]>(path, giftTransactions);
    } catch (error: any) {
      throw new Error(`Error creating gift transaction batch ${giftTransactions}: ${error}`);
    }
  }
}
