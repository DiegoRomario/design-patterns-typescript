import { Component } from '@angular/core';
import { requestDelivery } from "./structural-patterns/flyweight/client";
import { DeliveryFactory } from "./structural-patterns/flyweight/flyweight-factory";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {

    const factory = new DeliveryFactory();

    requestDelivery(factory, 'Joey', '315', 'Bowery', 'Manhattan', 'New York');
    requestDelivery(factory, 'Travis', '10', 'Bowery', 'Manhattan', 'New York');
    requestDelivery(factory, 'Mark', '27', 'Sunset Blvd', 'Hollywood', 'Los Angeles');
    requestDelivery(factory, 'Lisa', '42', 'Hollywood Blvd', 'Hollywood', 'Los Angeles');
    requestDelivery(factory, 'Tom', '18', 'Sunset Blvd', 'Hollywood', 'Los Angeles');
    requestDelivery(factory, 'Sophia', '88', 'Rodeo Dr', 'San Francisco', 'California');
    requestDelivery(factory, 'David', '7', 'Mission St', 'San Francisco', 'California');
    console.log(factory.getAddress());

    /* Output: 
      New Address - Delivery for Joey | At Bowery, Manhattan, New York | Number: 315
      Shared Address - Delivery for Travis | At Bowery, Manhattan, New York | Number: 10
      New Address - Delivery for Mark | At Sunset Blvd, Hollywood, Los Angeles | Number: 27
      New Address - Delivery for Lisa | At Hollywood Blvd, Hollywood, Los Angeles | Number: 42
      Shared Address - Delivery for Tom | At Sunset Blvd, Hollywood, Los Angeles | Number: 18
      New Address - Delivery for Sophia | At Rodeo Dr, San Francisco, California | Number: 88
      New Address - Delivery for David | At Mission St, San Francisco, California | Number: 7 */

  }
}
