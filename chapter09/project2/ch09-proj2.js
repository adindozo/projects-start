/* add your code here */
window.onload=() => {
    let paintings = JSON.parse(content);
    console.log(paintings);
    for(let painting of paintings){
        let img = document.createElement('img');
        img.src='images/small/'+painting.id+'.jpg';
        img.dataset.id=painting.id;
        let li = document.createElement('li');
        li.appendChild(img);
        document.querySelector('ul').appendChild(li);
    }
    document.querySelector('ul').addEventListener('click',(e) => {
        if(e.target.nodeName=='IMG'){
            document.querySelector('figure').innerHTML='';
            let img = document.createElement('img');
            img.src='images/large/'+e.target.dataset.id+'.jpg';
            document.querySelector('figure').appendChild(img);
            document.querySelector('h2').innerHTML=paintings.find(element => element.id==e.target.dataset.id).title;
            document.querySelector('h3').innerHTML=paintings.find(element => element.id==e.target.dataset.id).artist;
            let features = paintings.find(element => element.id==e.target.dataset.id).features;
            for(let feature of features){
                //todo generate rects, step 5
            }
        }
    })
}