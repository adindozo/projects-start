document.addEventListener("DOMContentLoaded", function () {
   document.getElementById('loader').style.display = 'inline-block';
   const url = "https://www.randyconnolly.com/funwebdev/3rd/api/colors/sample-colors.php";
   fetch(url).then(res => res.json()).then((data) => {
      console.log(data);
      
      
      for (let color of data) {
         document.getElementById('loader').style.display = 'none';
         console.log(data)
         let article = document.createElement('article');
         let divActions = document.createElement('div');
         let h3 = document.createElement('h3');
         let button = document.createElement('button');
         let section = document.createElement('section');
         let divPreview = document.createElement('div');

         divPreview.className = 'preview';
         divActions.className = 'actions';
         article.className = "scheme-group";
         section.className = 'scheme';

         button.dataset.id=color.id;
         button.innerText='View';
         divActions.appendChild(button);
         for (let scheme of color.scheme) {
            let div = document.createElement('div');
            div.className = 'color-box';
            div.style.backgroundColor = scheme.web;
            divPreview.appendChild(div);
         }
         section.appendChild(divPreview);
         section.appendChild(divActions);
         h3.innerText=color.title;
         article.appendChild(h3);
         article.appendChild(section);
         document.querySelector('main').appendChild(article);
      }
   })

});




