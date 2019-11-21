context('Monitoreo de Activaciones app-mobile', () => {
    let token
    before(() => {
        cy.seed()
        cy.viewport(1280, 720);
    })

    beforeEach(() => {
        cy.goto('/monitoreo');
        cy.server();
        cy.route('GET', '**api/modules/mobileApp/pacienteApp**').as('busqueda');
    });


    it('buscar paciente por documento y verificar que no existe', () => {
        cy.plexText('name="buscador"', '52081206');
        cy.wait('@busqueda').then((xhr) => {
            expect(xhr.status).to.be.eq(200);
        });
        cy.contains(' No hay resultados que coincidan con los filtros de búsqueda');
    });

    it('buscar paciente por documento que exista y verificar que devuelva datos', () => {
        cy.plexText('name="buscador"', '11222333');
        cy.wait('@busqueda').then((xhr) => {
            expect(xhr.status).to.be.eq(200);
            //expect(xhr.response.body).to.have.length(1);
            //expect(xhr.response.body).to.have.property('documento', '11222333');
        });
        cy.get('tbody').find('td').contains('11222333');
        cy.get('tbody').find('td').contains('PRUEBA');
        cy.get('tbody').find('td').contains('16/04/1973');
        cy.get('tbody').find('td').contains('Femenino');
    });

    it('buscar paciente por documento que exista, seleccionarlo del listado y verificar que cargue sus datos en el panel lateral', () => {
        cy.plexText('name="buscador"', '11222333');
        cy.wait('@busqueda').then((xhr) => {
            expect(xhr.status).to.be.eq(200);
            //expect(xhr.response.body).to.have.length(1);
            //expect(xhr.response.body[0]).to.have.property('documento', '11222333')
        });
        cy.get('tbody').find('td').contains('11222333');
        cy.get('tbody').find('tr').first().click();
        cy.get('plex-layout-sidebar').should('contain', '11222333');
        cy.get('plex-layout-sidebar').should('contain', 'PRUEBA');
        cy.get('plex-layout-sidebar').should('contain', 'MONITOREO');
        cy.get('plex-layout-sidebar').should('contain', 'Femenino');
        cy.get('plex-layout-sidebar').should('contain', 'Android 7.0');
        cy.get('plex-layout-sidebar').should('contain', 'No hay mensajes en el historial');
    });

    it('buscar paciente por documento que exista, seleccionarlo del listado y verificar que cargue sus datos en el panel lateral', () => {
        cy.plexText('name="buscador"', '11222333');
        cy.wait('@busqueda').then((xhr) => {
            expect(xhr.status).to.be.eq(200);
            //expect(xhr.response.body).to.have.length(1);
            //expect(xhr.response.body[0]).to.have.property('documento', '11222333')
        });
        cy.get('tbody').find('td').contains('11222333');
        cy.get('plex-layout-main').get('tbody').find('tr').first().click();
        cy.get('plex-layout-sidebar').should('contain', '11222333');
        cy.get('plex-layout-sidebar').should('contain', 'PRUEBA');
        cy.get('plex-layout-sidebar').should('contain', 'MONITOREO');
        cy.get('plex-layout-sidebar').should('contain', 'Femenino');
        cy.get('plex-layout-sidebar').should('contain', 'Android 7.0');
        cy.get('plex-layout-sidebar').should('contain', 'No hay mensajes en el historial');
        cy.get('plex-layout-main').get('tbody').find('tr').first().click();
        cy.get('plex-layout-sidebar').should('contain', 'Aún no se ha seleccionado ningún paciente');
    });

    it('buscar paciente por documento que exista, seleccionarlo del listado y verificar que cargue su historial ', () => {
        cy.plexText('name="buscador"', '22333444');
        cy.wait('@busqueda').then((xhr) => {
            expect(xhr.status).to.be.eq(200);
            //expect(xhr.response.body).to.have.length(1);
            //expect(xhr.response.body[0]).to.have.property('documento', '11222333')
        });
        cy.get('tbody').find('td').contains('22333444');
        cy.get('tbody').find('tr').first().click();
        cy.get('plex-layout-sidebar').should('contain', '22333444');
        cy.get('plex-layout-sidebar').should('contain', 'PRUEBA2');
        cy.get('plex-layout-sidebar').should('contain', 'MONITOREO');
        cy.get('plex-layout-sidebar').should('contain', 'Femenino');
        cy.get('plex-layout-sidebar').should('contain', 'Android 7.0');
        cy.get('plex-layout-sidebar').find('td').contains('prueba2@monitoreo.com');
        cy.get('plex-layout-sidebar').find('td').contains('error');
    });







})