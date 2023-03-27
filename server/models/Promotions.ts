import DatabaseClient from "../db/client";
import { Promotion } from "../types/promotions";

export class PromotionsService {
  databaseClient: DatabaseClient;

  constructor() {
    this.databaseClient.connect()
  }

  insert(promotion: Promotion): void {
    /**
     *  Should save the promotion in the database
     *  
     */

  }

  update(promotion: Promotion) {
    /**
     * 
     *  Should update the promotion on the database
     */
  }

  delete(promotionName: Promotion) {

    /**
     *  Should delete the promotion
     *  
     */
  }
  getPomotion(promotionName: string) {

  }

}