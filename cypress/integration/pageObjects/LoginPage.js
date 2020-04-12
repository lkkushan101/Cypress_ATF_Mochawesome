class LoginPage {      
	 typeUserName(usrName) 
	 {     cy.get('body > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type="text"]').type(usrName)  
		.should('have.value', usrName);   
		
	 } 
	 
 
	  typePassword(password)
	  {  cy.get('body > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=password]').type(password)  
	  .should('have.value', password)   
	  }      
	  clickLogin()
	  {    cy.get('body > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=submit]:nth-child(1)').click()   }    
	  } 
 
 
export default LoginPage; 