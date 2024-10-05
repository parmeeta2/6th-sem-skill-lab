describe('Testing', () => {
       it('List Users', () => {
           cy.request({
               method: 'GET',
               url: "https://reqres.in/api/users"
           }).then(response => {
               expect(response.status).to.eq(200);
           });
       });
   
       it('Single User', () => {
           cy.request({
               method: 'GET',
               url: "https://reqres.in/api/users/2"
           }).then(response => {
               expect(response.status).to.eq(200);
           });
       });
   
       it('Single User Not Found', () => {
           cy.request({
               method: 'GET',
               url: "https://reqres.in/api/users/23",
               failOnStatusCode: false
           }).then(response => {
               expect(response.status).to.eq(404);
           });
       });
   
       it('List Resource', () => {
           cy.request({
               method: 'GET',
               url: "https://reqres.in/api/unknown"
           }).then(response => {
               expect(response.status).to.eq(200);
           });
       });
   
       it('Single Resource', () => {
           cy.request({
               method: 'GET',
               url: "https://reqres.in/api/unknown/2"
           }).then(response => {
               expect(response.status).to.eq(200);
           });
       });
   
       it('Create User', () => {
           cy.request({
               method: 'POST',
               url: "https://reqres.in/api/users",
               body: {
                   "name": "morpheus",
                   "job": "leader"
               }
           }).then(response => {
               expect(response.status).to.eq(201);
           });
       });
   
       it('Update User PUT', () => {
           cy.request({
               method: 'PUT',
               url: "https://reqres.in/api/users/2",
               body: {
                   "name": "morpheus",
                   "job": "zion resident"
               }
           }).then(response => {
               expect(response.status).to.eq(200);
           });
       });
   
       it('Register Successful', () => {
           cy.request({
               method: 'POST',
               url: "https://reqres.in/api/register",
               body: {
                   "email": "eve.holt@reqres.in",
                   "password": "pistol"
               }
           }).then(response => {
               expect(response.status).to.eq(200);
           });
       });
   
       it('Register Unsuccessful', () => {
           cy.request({
               method: 'POST',
               url: "https://reqres.in/api/register",
               body: {
                   "email": "sydney@fife"
               },
               failOnStatusCode: false
           }).then(response => {
               expect(response.status).to.eq(400);
           });
       });
   
       it('Login Successful', () => {
           cy.request({
               method: 'POST',
               url: "https://reqres.in/api/login",
               body: {
                   "email": "eve.holt@reqres.in",
                   "password": "cityslicka"
               }
           }).then(response => {
               expect(response.status).to.eq(200);
           });
       });
   
       it('Login Unsuccessful', () => {
           cy.request({
               method: 'POST',
               url: "https://reqres.in/api/login",
               body: {
                   "email": "peter@klaven"
               },
               failOnStatusCode: false
           }).then(response => {
               expect(response.status).to.eq(400);
           });
       });
   
       it('Delayed Response', () => {
           cy.request({
               method: 'POST',
               url: "https://reqres.in/api/users?delay=3"
           }).then(response => {
               expect(response.status).to.eq(201);
           });
       });
   });
   