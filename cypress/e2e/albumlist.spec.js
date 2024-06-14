describe('Album List and View Operations', () => {
  beforeEach(() => {
    // Reset the database before each test
    cy.request('POST', 'http://localhost:8080/api/test/reset');
  });

  it('should display a list of albums', () => {
    cy.request('POST', 'http://localhost:8080/api/albums', { title: 'Test Album 1', artist: 'Artist' });
    cy.request('POST', 'http://localhost:8080/api/albums', { title: 'Test Album 2', artist: 'Artist' });

    cy.visit('/albums');

    cy.contains('Test Album 1');
    cy.contains('Artist');
    cy.contains('Test Album 2');
    cy.contains('Artist');
  });

  it('should navigate to an album detail page', () => {
    cy.request('POST', 'http://localhost:8080/api/albums', { title: 'Test Album 1', artist: 'Artist' });

    cy.visit('/albums');
    cy.contains('Test Album 1').click();

    cy.url().should('include', '/albums');
    cy.contains('Test Album 1');
    cy.contains('Artist');
  });
});
