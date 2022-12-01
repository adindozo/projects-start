document.addEventListener("DOMContentLoaded", function () {
   document.getElementById('loader').style.display = 'inline-block';
   const url = "https://www.randyconnolly.com/funwebdev/3rd/api/colors/sample-colors.php";

   fetch(url).then(res => res.json()).then((data) => {


      document.querySelector('main').addEventListener('click', (e) => {
         if (e.target.nodeName == 'BUTTON') {
            let colorObject = data.find((color) => {
               return color.id == e.target.dataset.id;
            })
            let h2 = document.createElement('h2');
            h2.innerText = colorObject.title;
            let aside=document.querySelector('aside');
            aside.innerHTML='';
            aside.appendChild(h2);
            let fieldset = document.createElement('fieldset');
            colorObject.scheme.forEach(scheme => {
               let detailBox = document.createElement('div');
               let colorRow = document.createElement('div');
               
               
               let hex = document.createElement('span');
               let rgb = document.createElement('span');
               let label = document.createElement('label');

              
               detailBox.style.backgroundColor = scheme.web;
               hex.innerText=scheme.web;
               rgb.innerText=`rgb(${scheme.color.red},${scheme.color.green},${scheme.color.blue})`
               detailBox.className = 'detailBox';
               colorRow.className = 'colorRow';
               label.innerText=scheme.name;
               colorRow.appendChild(detailBox);
               colorRow.appendChild(hex);
               colorRow.appendChild(rgb);
               colorRow.appendChild(label);
               fieldset.appendChild(colorRow);
               aside.appendChild(fieldset);
            });

         }

      })
      for (let color of data) {
         document.getElementById('loader').style.display = 'none';

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

         button.dataset.id = color.id;
         button.innerText = 'View';
         divActions.appendChild(button);
         for (let scheme of color.scheme) {
            let div = document.createElement('div');
            div.className = 'color-box';
            div.style.backgroundColor = scheme.web;
            divPreview.appendChild(div);
         }
         section.appendChild(divPreview);
         section.appendChild(divActions);
         h3.innerText = color.title;
         article.appendChild(h3);
         article.appendChild(section);
         document.querySelector('main').appendChild(article);
      }
   })

});




