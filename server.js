'use strict';

const EXPRESS = require('express');
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;
const requestProxy = require('express-request-proxy');

APP.use(EXPRESS.static('public'));

APP.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

app.get('/github/*', proxyGitHub);

function proxyGitHub(req, res, next){
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}

app.get('*', (request, response) => {
  response.sendFile('index.html', { root: './public'})
})

APP.listen(PORT, function(){
  console.log(`Express server currently running on port ${PORT}`);
});
