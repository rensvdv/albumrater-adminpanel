describe('Add Album Form', () => {
  beforeEach(() => {
    cy.visit('/admin');
  });

  it('should create an album with the standard form and show success message', () => {
    cy.get('input[data-cy=album-title]').type('New Album');
    cy.get('input[data-cy=album-artist]').type('New Artist');
    cy.get('form[data-cy=add-album-form]').submit();

    cy.contains('Album Aangemaakt').should('be.visible');
  });


  it('should show an error message on form submission failure', () => {
    cy.intercept('POST', 'http://localhost:8080/api/albums', {
      statusCode: 500,
      body: { message: 'Internal Server Error' },
    }).as('createAlbum');

    cy.get('input[data-cy=album-title]').type('Error Album');
    cy.get('input[data-cy=album-artist]').type('Error Artist');
    cy.get('form[data-cy=add-album-form]').submit();

    cy.wait('@createAlbum');

    cy.contains('Er is iets mis gegaan').should('be.visible');
  });
});
