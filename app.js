const wrapper = document.querySelector(".sliderWrapper") 
const menuItem = document.querySelectorAll(".menuItem")

 const product =[
   {
    id:1,
    title:"Puma",
    price: 300,
    colors : [
        {
            code: "white",
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
    title:"Nike",
    price: 190,
    colors : [
        {
            code: "white",
            img: "./img/My project (1).png",
        },
        {
            code:"yellow",
            img: "./img/My_project(1).png",
        },
    ],
},

{
    id:3,
    title:"Canvas",
    price: 370,
    colors : [
        {
            code: "black",
            img: "./img/My project (2).png",
        },
        {
            code:"gold",
            img:"./img/My_project(2).png",
        },
    ],
},



{
    id:4,
    title:"Adidas",
    price: 330,
    colors : [
        {
            code: "red",
            img: "./img/My project (3).png",
        },
        {
            code:"black",
            img:"./img/My_projectd(3).png",
        }, 
    ],
},

{
    id:5,
    title:"Air force",
    price: 800,
    colors : [
        {
            code: "purple",
            img: "./img/My project (4).png",
        },
        {
            code:"light blue",
            img:"./img/My_project(4).png",
        },
    ],
},

{
    id:6,
    title:"Jordan",
    price: 320,
    colors : [
        {
            code: "red",
            img: "./img/My project (5).png",
        },
        {
            code:"green",
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
       choosenProduct = product[index];


       //change text of currentProduct
       currentProductTitle.textContent = choosenProduct.title;
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
});

currentProductSizes.forEach((size,index) => {
    size.addEventListener("click",() =>{
        currentProductSizes.forEach(size =>{
            size.style.backgroundColor= "white";
            size.style.color = "black";
        })
        size.style.backgroundColor= "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
});
close.addEventListener("click",()=>{
    payment.style.display="none";
});