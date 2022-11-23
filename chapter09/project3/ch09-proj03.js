/* add your code here */

 window.onload= () => {
    let users = JSON.parse(userContent);
    let stocks = JSON.parse(stockContent);
    document.querySelector('.Details').style.display='none';
  
    for(let user of users){
        let li =document.createElement('li'); //name, surname syntax
        li.innerText=user.user.firstname+', '+user.user.lastname;
        li.dataset.id=user.id;
        document.querySelector('.UserList ul').appendChild(li);
    }
    document.querySelector('.UserList').addEventListener('click',(e) => {
        if(e.target.nodeName=='LI'){
           
            document.querySelector('.Details').style.removeProperty('display'); 
            document.querySelector('.StockDetails').style.display='none';
            let user = users.find((user) => user.id==e.target.dataset.id);
            document.getElementById('firstname').value=user.user.firstname;
            document.getElementById('lastname').value=user.user.lastname;
            document.getElementById('address').value=user.user.address;
            document.getElementById('city').value=user.user.city;
            document.getElementById('email').value=user.user.email;
            document.getElementById('listPortfolio').innerHTML='';
            for(let stock of user.portfolio){
                let symbol = document.createElement('h3');
                let shares = document.createElement('h3');
                let action = document.createElement('button');
                action.innerHTML='VIEW';
                action.addEventListener('click',() => {
                    let stockinfo = stocks.find(s => s.symbol==stock.symbol);
                    document.getElementById('stockName').innerText=stockinfo.name;
                    document.getElementById('stockSector').innerText=stockinfo.sector;
                    document.getElementById('stockIndustry').innerText=stockinfo.subIndustry;
                    document.getElementById('stockAddress').innerText=stockinfo.address;
                    document.querySelector('.StockDetails').style.removeProperty('display'); 
                })
                symbol.innerText=stock.symbol;
                shares.innerText=stock.owned;
                document.getElementById('listPortfolio').appendChild(symbol);
                document.getElementById('listPortfolio').appendChild(shares);
                document.getElementById('listPortfolio').appendChild(action);

            }
        }
    })
 }