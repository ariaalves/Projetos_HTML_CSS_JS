let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-inp');

searchBtn.addEventListener('click',()=>{
    let countryName=countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/translation/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data[0]);
            // console.log(data[0].capital[0]);
            // console.log(data[0].flags.svg);
            // console.log(data[0].name.common);
            // console.log(data[0].continents[0]);
            // console.log(Object.keys(data[0].currencies)[0]);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(
            //     Object.values(data[0].languages).toString().split(',').join(',')
            // );

            result.innerHTML=`
                <img src='${data[0].flags.svg}'class='flag-img'>
                <h2>${data[0].name.common}</h2>
                <div class='wrapper'>
                    <div class='data-wrapper'>
                        <h4>Capital:</h4>
                        <span> ${data[0].capital[0]}</span>
                    </div>   
                    
                    <div class='wrapper'>
                    <div class='data-wrapper'>
                        <h4>Continente:</h4>
                        <span> ${data[0].continents[0]}</span>
                    </div>  
                    
                    <div class='wrapper'>
                    <div class='data-wrapper'>
                        <h4>População:</h4>
                        <span> ${data[0].population}</span>
                    </div>  
                    
                    <div class='wrapper'>
                    <div class='data-wrapper'>
                        <h4>Moeda:</h4>
                        <span> ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
                    </div>  

                    <div class='wrapper'>
                    <div class='data-wrapper'>
                        <h4>Idiomas:</h4>
                        <span> ${Object.values(data[0].languages).toString().split(',').join(',')}</span>
                    </div>  
                </div>
            `

        }).catch(()=>{
            if(countryName.length==0){
                result.innerHTML=`<h3>O campo de pesquisa não pode ficar vazio</h3>`
            }else{
                result.innerHTML=`<h3>Por favor, insira um nome de país válido`
            }
        })
})

function sendEmail(){
    Email.send({
        SecureToken: '081933a5-5160-4441-95e8-4ce95bdb8799',
        To: 'anastacianunes25@gmail.com',
        From: document.getElementById('email').value,
        Subject : "Novo Contato",
        Body : "Nome: " + document.getElementById('name').value
            + '<br> E-mail: ' + document.getElementById('email').value
            +'<br> Telefone: ' + document.getElementById('phone').value
            +'<br> Assunto: ' + document.getElementById('message').value
    }).then(
      message => alert(message)
    );
}