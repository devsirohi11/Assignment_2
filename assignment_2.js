const companyContainer = document.querySelector('.logos');
 
const getCompanyData = function (company) {
    const request = new XMLHttpRequest();
  
    request.open( 'GET', `https://autocomplete.clearbit.com/v1/companies/suggest?query=:${company}`);
  request.send();
 
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);           
                              
   
    const html = `
  <article class="company">
 <img class="company__img" src= "${data.logo}">
 <div>
   <p><span>Name : </span>${data.name}</p>
   <p><span>Domain : </span>${data.domain}</p>
 </div>
</article>`;
 
    companyContainer.insertAdjacentHTML('beforeend', html);
    
  });
}
 
getCompanyData('google');
getCompanyData('facebook');
getCompanyData('nike');
getCompanyData('twitter'); 
