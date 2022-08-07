import $ from 'jquery';

const searchfield = $('#searchfield');
const companyName=$('#companyName');
const logo=$('#logo');
const companyURL=$('#companyURL');



 searchfield.after(function(e){
    getData(this.value);
}); 

function getData(name){
    fetch ('https://autocomplete.clearbit.com/v1/companies/suggest?query=:' + name
    ).then(function(response){
        return response.json();
    }).then(function(myJson){
        console.log('myJson: ' , myJson);
        render (myJson[0]);
    }) 
}


function render(data){
    companyName.text(data.name);
    companyURL.text(data.domain);
    companyLogo.attr('src',data.logo);
}