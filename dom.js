console.log(document.querySelector(".todo"));
document.querySelector(".todo").innerText = "life is short,have desert first"

const repQuote = document.querySelector(".todo");
repQuote.innerText = "life is short use it well";



const allTools = document.querySelectorAll(".todo");
console.log(allTools);
// allTools[0].innerText = "vigneshkalithas";
// allTools[1].innerText = "vigneshkalithas";

for(let todo of allTools){
    todo.innerText = "kalithas ramasamy";
    // console.log(tool);
}

// create
const beauty =document.createElement("h2");
beauty.innerText = "Dont let ,inds convince you that your are too big";
document.body.append(beauty);


const favs=["Badmiton","Chess","Movies","Cricket","Travelling"];

const favList = document.createElement("ul");
for(let fav of favs){
    // console.log(fav);
const favItem = document.createElement("li");


favItem.innerText= fav;
favList.append(favItem);
}
document.body.append(favList);


const userInput = document.querySelector(".username");
userInput.setAttribute("placeholder","Enter your name");


// const imageURL = "https://3.bp.blogspot.com/-rHGW-Pj086E/XJqrXq3DJlI/AAAAAAAABB0/kRGUxP_OqkUmicF3bW129ubAa0myCJs9ACKgBGAs/w5120-h2160-c/sunset-horizon-scenery-landscape-art-uhdpaper.com-4K-178.jpg";
// const  landscape = document.createElement("img");
// landscape.setAttribute("src",imageURL);
// landscape.setAttribute("class","landscape-bg");
// document.body.append(landscape);

// const imageLink = "https://pickyourtrail.com/blog/wp-content/uploads/2019/09/beautiful-landscapes-201920.jpg";
// const  landscape1 = document.createElement("img");
// landscape1.setAttribute("src",imageLink);
// landscape1.setAttribute("class","landscape-bg");
// document.body.append(landscape1);




const images = ["https://cdna.artstation.com/p/assets/images/images/019/241/598/large/sabbir-ahmed-01.jpg?1562648853","https://wallpapersmug.com/large/264583/anime-outdoor-friends-autumn.jpg","https://cutewallpaper.org/21/cc-wallpaper/Adobe-Illustrator-CC-Tutorial-How-to-design-Flat-landscape-Wallpaper.jpg","https://wallpapersmug.com/large/87fb8b/fantasy-lake-landscape-forest-art.jpg","https://c4.wallpaperflare.com/wallpaper/1004/185/182/landscape-illustration-wallpaper-preview.jpg"];
for(let image of images){

const imgAll = document.createElement("img");



imgAll.setAttribute("src",image);

 imgAll.setAttribute("class","img-sec")

// const favImag = document.createElement("img");

// favImag.innerText= image;

// imgAll.append(favImag);

document.body.append(imgAll);
}




const germ = "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png";
const  flags = document.createElement("img");
flags.setAttribute("src",germ);
flags.setAttribute("class","german");
 document.body.append(flags);


const letter = document.createElement("h2");
letter.innerText = "Germany";
document.body.append(letter);



const other = document.createElement("h4");
other.innerText = "Population : 83,783,942";
document.body.append(other);



const regi = document.createElement("h4");
regi.innerText = "Region : Europe";
document.body.append(regi);


const capi = document.createElement("h4");
capi.innerText = "Capital : Berlin";
document.body.append(capi);