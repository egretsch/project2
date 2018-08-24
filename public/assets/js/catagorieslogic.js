


  let politicsSearch = request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?=politics&api-key=6086b5c73aa24707a614e2ff573a60f9",
   }, function(err, response, body) {
   body = JSON.parse(body);
     console.log(body);
   });

   document.getElementById("politics").onclick = function() {
       politicsSearch()};