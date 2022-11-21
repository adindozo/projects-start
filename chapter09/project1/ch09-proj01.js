window.onload = function(){



const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399','River-655','Waterfall-941','Wave-2737'];



document.querySelector('button[data-skip="5"]').addEventListener('click',()=>{
    document.querySelector('#vidPlayer').currentTime+=parseInt(document.querySelector('button[data-skip="5"]').dataset.skip);
    console.log(document.querySelector('button[data-skip="5"]').dataset.skip)
})

document.querySelector('button[data-skip="-5"]').addEventListener('click',()=>{
    document.querySelector('#vidPlayer').currentTime+=parseInt(document.querySelector('button[data-skip="-5"]').dataset.skip);
})


for(let file of files){
    let img = document.createElement('img');
    img.src='images/'+file+ '.jpg';
    img.addEventListener('click',(e)=>{
        document.querySelector('#vidPlayer source').setAttribute('src', `videos/${file}.mp4`);
        

        
        document.querySelector('#vidPlayer').load();
        if(document.querySelector('#play').dataset.paused=='0'){
           
            document.querySelector('#play').dataset.paused='1';
            document.querySelector('#play').innerHTML='⯈';
            document.querySelector('#vidPlayer').pause();
           
            
        } 
   
    })

     document.querySelector('aside').appendChild(img);
}

document.querySelector('#stop').addEventListener('click',()=>{
    document.querySelector('#vidPlayer').pause();
    document.querySelector('#vidPlayer').currentTime=0;
    if(document.querySelector('#play').dataset.paused=='0'){
           
        document.querySelector('#play').dataset.paused='1';
        document.querySelector('#play').innerHTML='⯈';
        document.querySelector('#vidPlayer').pause();
       
        
    } 

})
//⏸
document.querySelector('#play').addEventListener('click',()=>{
    if(document.querySelector('#play').dataset.paused=='1'){
        document.querySelector('#play').innerHTML='⏸';
        document.querySelector('#play').dataset.paused='0';
        document.querySelector('#vidPlayer').play();
        
    console.log(document.querySelector('#play').dataset.paused)

        
    } else {
    document.querySelector('#play').dataset.paused='1';
    document.querySelector('#play').innerHTML='⯈';
    document.querySelector('#vidPlayer').pause();
   
    
    }
    
})


}