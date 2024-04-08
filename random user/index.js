users=[
    {
      id:1,
      name:"messaoudene mohamed",
      age:21,
      number_phone:"32356677355",
      email:"mohamed@gmail.com",
      password:"aaaaaaa",
      address:"sidi_naamane",
      url:"https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id:2,
        name:"berkane rachide",
        age:29,
        number_phone:"32300087-77355",
        email:"rachid@gmail.com",
        password:"aadddddd",
        address:"saida",
        url:"https://randomuser.me/api/portraits/men/47.jpg"
      },
      {
        id:3,
        name:"aliboucetta abdo",
        age:33,
        number_phone:"958022940-98955",
        email:"boucetta@gmail.com",
        password:"aAbdo",
        address:"skikda",
        url:"https://randomuser.me/api/portraits/men/7.jpg"
      },
      {
        id:4,
        name:"souelem mohamed",
        age:43,
        number_phone:"30003982007355",
        email:"souelem@gmail.com",
        password:"mojhfkfl",
        address:"tyaret",
        url:"https://randomuser.me/api/portraits/men/44.jpg"
      },
      {
        id:5,
        name:"zaki belkhiri",
        age:12,
        number_phone:"38007300286492",
        email:"zaki@gmail.com",
        password:"8749Hdkfskf",
        address:"omaria",
        url:"https://randomuser.me/api/portraits/men/18.jpg"
      },
      {
        id:6,
        name:"bentaher toufik",
        age:18,
        number_phone:"322-7789355",
        email:"toufik@gmail.com",
        password:"GGhjGGGk",
        address:"dgelfa",
        url:"https://randomuser.me/api/portraits/men/81.jpg"
      },
      {
        id:7,
        name:"boumedian khachache",
        age:40,
        number_phone:"77788799999999",
        email:"boumedian@gmail.com",
        password:"KKjjjKLLjkl",
        address:"frenda",
        url:"https://randomuser.me/api/portraits/men/88.jpg"
      },
      {
        id:8,
        name:"sidali khalil cherfi",
        age:34,
        number_phone:"5678945432255",
        email:"sidali@gmail.com",
        password:"kfjldsfsssss",
        address:"media",
        url:"https://randomuser.me/api/portraits/men/54.jpg"
      },
      {
        id:9,
        name:"abdelkarim messaoud",
        age:24,
        number_phone:"6-7778885",
        email:"abdelkarim@gmail.com",
        password:"dddddddddddGk",
        address:"mendass",
        url:"https://randomuser.me/api/portraits/men/51.jpg"
      }
    ];
    const image = document.querySelector(".big .container img");
    const p = document.querySelector(".big .container p");
    const info = document.querySelector(".big .container h2");
    const random_user = document.querySelector("#click");
    let buttons = document.querySelectorAll(".icons button");
    let current = 0;
    window.addEventListener('DOMContentLoaded', display_theRandomUser);
    buttons.forEach(button => {
        button.addEventListener("click",function(e){
            toNormal();
            button.style.color = "brown";
            if(button.id=="name"){
                p.innerHTML="my name is :";
                info.innerHTML=users[current].name;
            }else if(button.id=="phone"){
                p.innerHTML="my phone number is : ";
                info.innerHTML=users[current].number_phone;
            }else if(button.id=="email"){
                p.innerHTML="my email is :   ";
                info.innerHTML=users[current].email;
            } else if(button.id=="address"){
                p.innerHTML="my address is :";
                info.innerHTML=users[current].address;
            }else if(button.id=="age"){
                p.innerHTML="my age is :";
                info.innerHTML=users[current].age;
            }else if(button.id=="password"){
                p.innerHTML="my password is :";
                info.innerHTML=users[current].password;
            }
        })
        
    });
  random_user.addEventListener("click",display_theRandomUser)
  function display_theRandomUser(){
    let user = get_random_user();
    toNormal();
     image.src=user.url;
     p.innerHTML="my name is :";
     info.innerHTML=user.name;
     current=user.id-1;
 }
 function get_random_user(){
    return (users[Math.floor(Math.random()*8)])
 }
 function toNormal(){
    buttons.forEach(supp => {
        supp.style.color="rgb(11, 34, 134)";
    })
 }

