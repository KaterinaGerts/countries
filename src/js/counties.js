fetch(`https://restcountries.eu/rest/v2/all`).then((responce) => {
  console.log(responce);
  responce = responce.json();
  console.log(responce);
  return responce;
}).then((data) => {
  console.log(data);
  let countries = JSON.stringify(data);
  //console.log(countries);
})