function authenticate(token){
 const authToken = '#'+ Date.now() + token;
 console.log('This is authentication' + authToken);
}
