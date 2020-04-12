class HomePage { 
 
 
  verifyUserName(userName) 
  {      cy.get('body > table > tbody > tr > td > table > tbody > tr.heading3 > td').contains(userName);   
  }    
  
 } 
 
 
export default HomePage; 