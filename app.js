const wrapper = document.querySelector(".sliderWrapper") 
const menuItem = document.querySelectorAll(".menuItem")

 const product =[
   {
    id:1,
    title:"Puma",
    price: 300,
    colors : [
        {
            code: "black",
            img: "./img/My project.png",
        },
        {
            code:"darkblue",
            img:"./img/My_project.png",
        },
    ],
},
{
    id:2,
    title:"Air force",
    price: 190,
    colors : [
        {
            code: "black",
            img: "./img/My project(1).png",
        },
        {
            code:"darkblue",
            img:"./img/My_project(1).png",
        },
    ],
},

{
    id:3,
    title:"Adidas",
    price: 250,
    colors : [
        {
            code: "black",
            img: "./img/My project(2).png",
        },
        {
            code:"darkblue",
            img:"./img/My_project(3).png",
        },
    ],
},



{
    id:4,
    title:"Nike",
    price: 800,
    colors : [
        {
            code: "black",
            img: "./img/My project(3).png",
        },
        {
            code:"darkblue",
            img:"./img/My_project(3).png",
        },
    ],
},

{
    id:5,
    title:"Jordan",
    price: 350,
    colors : [
        {
            code: "black",
            img: "./img/My project(4).png",
        },
        {
            code:"darkblue",
            img:"./img/My_project(4).png",
        },
    ],
},

{
    id:6,
    title:"Redchief",
    price: 450,
    colors : [
        {
            code: "black",
            img: "./img/My project(5).png",
        },
        {
            code:"darkblue",
            img:"./img/My_project(5).png",
        },
    ],
},



];



let choosenProduct = product[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItem.forEach((item,index) => {
    item.addEventListener("click" , ()=>{
        //change the current slide 
       wrapper.style.transform = `translate(${-83 * index}vw)`;

    

       //change the choosen product
       choosenProduct = products[index];


       //change text of currentProduct
       currentProductTitle.textContent = choosenProduct.Title;
       currentProductPrice.textContent = "$" + choosenProduct.price;
       currentProductImg.src = choosenProduct.colors[0].img 
 


       //assigning new colors
       currentProductColors.forEach((color,index) =>{
        color.style.backgroundColor = choosenProduct.colors[index].code;
        } );
        });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click" , () =>{
        currentProductImg.src = choosenProduct.colors[index].img
    }
        )
})