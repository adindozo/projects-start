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
                let rect = document.createElement('div');
                rect.className='box';
                rect.style.height=feature.lowerRight[1]-feature.upperLeft[1]+'px';
                rect.style.width=feature.lowerRight[0]-feature.upperLeft[0]+'px';
                rect.style.position='absolute';
                rect.style.left=feature.upperLeft[0]+'px';
                rect.style.top=feature.upperLeft[1]+'px';
                rect.addEventListener('mouseover',() => {
                    document.getElementById('description').textContent=feature.description;
                })
                rect.addEventListener('mouseout',() => {
                    document.getElementById('description').textContent=null;
                })

                document.querySelector('figure').appendChild(rect);
            }
        }
    })
}
let arr=[1,2,3];
let arr2=[2,3];
console.log(arr)

console.log(arr2)
arr.push(arr2);

console.log(typeof arr)
console.log(arr)