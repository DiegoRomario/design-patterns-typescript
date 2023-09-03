import { Component } from '@angular/core';
import {
  OracleProviderFactory,
  SQLProviderFactory,
} from './creational-patterns/factory-method/concrete-creators';
import { ClientDBProvider } from './creational-patterns/factory-method/client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    // Usage
    const sqlFactory = new SQLProviderFactory();
    const oracleFactory = new OracleProviderFactory();

    const sqlClientDBProvider = new ClientDBProvider(sqlFactory);
    sqlClientDBProvider.connect();
    sqlClientDBProvider.execQuery('SELECT * FROM CLIENT');

    const oracleClientDBProvider = new ClientDBProvider(oracleFactory);
    oracleClientDBProvider.connect();
    oracleClientDBProvider.execQuery('SELECT * FROM CLIENT');
  }
}
