/* add your code here */

let photos = JSON.parse(content);
let constructStyle = function (color) { // return style="background-color: #332625; color: white; " add color white if luminance < 70
   
    let styleString = `style="background-color: ${color.hex};` + (color.luminance < 70 ? ` color: white; "` : `"`);
    //styleString = `style="background-color: ${color.hex};"`
    return styleString;
}

let constructColor = function (color) {
    return `<span ${constructStyle(color)}>${color.name}</span>`;
}
let outputColors = function (colors) {
    for (let color of colors) {
        document.write(constructColor(color));
    }

}
let outputCard = function (photo) {
    document.write(`
    <article>
    <img src="images/${photo.filename}" alt="${photo.title}">
    <div class="caption">
       <h2>${photo.title}</h2>
       <p>${photo.location.city}, ${photo.location.country}</p>
       <h3>Colors</h3>
       `);

    outputColors(photo.colors);




    document.write(`</div>
    </article>`);


}




document.write('<main><section>');

for (let photo of photos) {
    
    outputCard(photo);
}

document.write('</section></main>');