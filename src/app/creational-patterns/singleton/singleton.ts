interface UserData {
  userId: string;
  sessionToken: string;
}

export class UserSessionManager {
  private static instance: UserSessionManager | null = null; // Singleton instance
  private sessions: Map<string, UserData> = new Map();

  private constructor() { } // Private constructor to prevent instantiation from outside

  /* Method that represents the Singleton pattern
     If an instance doesn't exist, it creates one;
     otherwise, it returns the existing instance. */
  static getInstance(): UserSessionManager {
    return this.instance ?? (this.instance = new UserSessionManager());
  }

  createUserSession(userId: string): string {
    const sessionToken = this.generateSessionToken();
    const userData: UserData = { userId, sessionToken };
    this.sessions.set(sessionToken, userData);
    return sessionToken;
  }

  getUserData(sessionToken: string): UserData | undefined {
    return this.sessions.get(sessionToken);
  }

  endUserSession(sessionToken: string): void {
    this.sessions.delete(sessionToken);
  }

  private generateSessionToken(): string {
    return 'session_token_' + Math.random().toString().slice(2, 12);
  }
}
