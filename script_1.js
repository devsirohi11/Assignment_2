const companyContainer = document.querySelector('.logos');
 
const getCompanyData = function (company) {
    const request = new XMLHttpRequest();
  
    request.open( 'GET', `https://autocomplete.clearbit.com/v1/companies/suggest?query=:${company}`);
  request.send();
 
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);               //use this to study the data you want to use.
                              
   //const companyName = Object.values(data.name);
   //const companyURL = Object.values(data.domain);
    const html = `
  <article class="company">
 <img class="company__img" src= "${data.logo}">
 <div>
   <p><span>Name : </span>${data.name}</p>
   <p><span>Domain : </span>${data.domain}</p>
 </div>
</article>`;
 
    companyContainer.insertAdjacentHTML('beforeend', html);
    //companyContainer.style.opacity = 1;
  });
}
 
function getInputValue(){
    // Selecting the input element and get its value 
     inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
    alert(inputVal);
    getCompanyData(inputVal);
    getCompanyData('google');
}
// Sample companies whose details we want to display.
getCompanyData('google');
getCompanyData('facebook');
getCompanyData('nike');
getCompanyData('tata'); 
