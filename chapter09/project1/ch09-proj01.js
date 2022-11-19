window.onload = function(){



const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399','River-655','Waterfall-941','Wave-2737'];


console.log(2)
for(let file of files){
    let img = document.createElement('img');
    img.src='images/'+file+ '.jpg';
    img.addEventListener('click',(e)=>{
        document.querySelector('#vidPlayer source').setAttribute('src', `videos/${file}.mp4`);
        console.log(document.querySelector('#vidPlayer source').getAttribute('src'));

        
        document.querySelector('#vidPlayer').load();
        document.querySelector('#vidPlayer').pause();
    })

     document.querySelector('aside').appendChild(img);
}

}