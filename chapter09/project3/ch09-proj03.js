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
    document.querySelector('.UserList').addEventListener((e) => {
        if(e.target.nodeName=='LI'){
            
            document.querySelector('.Details').style.removeProperty('display'); 
        }
    })
 }