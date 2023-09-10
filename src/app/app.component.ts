import { Component } from '@angular/core';
import { UserSessionManager } from './creational-patterns/singleton/singleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    // Usage example
    const sessionManager = UserSessionManager.getInstance();

    const user1SessionToken = sessionManager.createUserSession('user1');
    const user2SessionToken = sessionManager.createUserSession('user2');

    console.log(sessionManager.getUserData(user1SessionToken)); // { userId: 'user1', sessionToken: 'session_token_xxx' }
    console.log(sessionManager.getUserData(user2SessionToken)); // { userId: 'user2', sessionToken: 'session_token_xxx' }

    sessionManager.endUserSession(user1SessionToken);
    console.log(sessionManager.getUserData(user1SessionToken)); // undefined (session ended)

    const sessionManager2 = UserSessionManager.getInstance();
    console.log(sessionManager === sessionManager2); // Output: true (both instances are the same)
  }
}
