import LoginPage from '../pageObjects/LoginPage'; 
import HomePage from '../pageObjects/HomePage'; 
var data = require('../data/data.json'); 
describe('My First Test Script - Guru 99 Login', function() 
{   
  it('Visits the Page and Login', function() 
   {  
     const loginPage = new LoginPage();  
     const homePage = new HomePage();     
     cy.visit(data.url);
	 loginPage.typeUserName(data.userName);     
     loginPage.typePassword(data.password);  
     loginPage.clickLogin();  
     homePage.verifyUserName(data.userName);      
     }) 
   }) 