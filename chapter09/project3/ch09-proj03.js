/* add your code here */

 window.onload= () => {
    let users = JSON.parse(userContent);
    let stocks = JSON.parse(stockContent);
    document.querySelector('.Details').style.display='none';
    let generateUserList=function(users){
    for(let user of users){
        let li =document.createElement('li'); //name, surname syntax
        li.innerText=user.user.firstname+', '+user.user.lastname;
        li.dataset.id=user.id;
        document.querySelector('.UserList ul').appendChild(li);
    }
    }
    generateUserList(users);     
    let currentUserID=0;  
    document.querySelector('.UserList').addEventListener('click',(E) => {
        if(E.target.nodeName=='LI'){
            
            //let E=e;
            document.querySelector('.Details').style.removeProperty('display'); 
            document.querySelector('.StockDetails').style.display='none';
            currentUserID=E.target.dataset.id;
            
            let user = users.find((user) => user.id==currentUserID);
            console.log(user);
            // var old_element = document.getElementById("btn");
            // var new_element = old_element.cloneNode(true);
            // old_element.parentNode.replaceChild(new_element, old_element);
            let oldDel= document.getElementById('btnDelete');
            let newDel= oldDel.cloneNode(true);
            oldDel.parentNode.replaceChild(newDel,oldDel);
            //removing old event listeners on buttons
            let oldSav= document.getElementById('btnSave');
            let newSav= oldSav.cloneNode(true);
            oldSav.parentNode.replaceChild(newSav,oldSav);
            
            document.getElementById('btnSave').addEventListener('click',(e) => {
                e.preventDefault();
                document.querySelector('.Details').style.display='none';
                    
                    console.log(user);
                    // firstname":"Jacquette",
                    // "lastname":"Marion",
                    // "email":"jmarion0@nyu.edu",
                    // "address":"207 Ryan Avenue",
                    // "city":"Lubbock",
                    // "state":"Texas",
                    // "zip":"79491"
                    user.user.firstname=document.getElementById('firstname').value;
                    user.user.lastname=document.getElementById('lastname').value;
                    user.user.address=document.getElementById('address').value;
                    user.user.city=document.getElementById('city').value;
                    user.user.email=document.getElementById('email').value;
                    E.target.innerText=user.user.firstname+', '+user.user.lastname;
            
            })
            document.getElementById('btnDelete').addEventListener('click',(e) => {
                e.preventDefault();
                document.querySelector('.Details').style.display='none';
                
                for(let i=0;i<users.length;i++){
                    if(users[i].id==currentUserID){
                        users.splice(i,1);
                        break;
                    }
                }
                
                document.querySelector('.UserList ul').innerHTML='';
                generateUserList(users);   
             
            
            })
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
                    document.getElementById('logo').src=`logos/${stock.symbol}.svg`
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