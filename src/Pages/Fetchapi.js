const url = 'https://api.github.com/users/shrutikapoor08/repos';

fetch(url)
  .then(response => response.json())
  .then(repos => {
    const reposList = repos.map(repo => repo.name);
    console.log(reposList);
  })
.catch(err => console.log(err))
const params = {
    id: 123
  }
  const response = await fetch('url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });
 const Data = await response.json();
  
 export default Data;
 
 