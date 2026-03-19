declare global {
  namespace Cypress {
    interface Chainable {
      login(institucionKey: string, tipoUsuario: number): Chainable<void>;
    }
  }
}

export {};