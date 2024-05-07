const bootstrap = document.querySelector('.boot');
const style = document.querySelector('.style');
const body = document.querySelector('body');
const divs = document.querySelectorAll('div');
const h1 = document.querySelectorAll('h1');
const h4 = document.querySelector('h4');
const a = document.querySelectorAll('a');
const section = document.querySelector('section');

bootstrap.addEventListener("click", ()=>{

   // body

   body.removeAttribute("class");

   // divs

   for( let i = 1 ; i < 6 ; i++){

      divs[i].removeAttribute("class");
      

   }

   // h1
   
   for( let i = 0 ; i < 5 ; i++){

      h1[i].removeAttribute("class");
      

   }


   // a

   for( let i = 0 ; i < 4 ; i++){

      a[i].removeAttribute("class");
      

   }

   // h4

   h4.removeAttribute("class");
   
   // section

   section.removeAttribute("class");


});

style.addEventListener("click", ()=>{


   // body

   body.removeAttribute("class");

   // divs

   for( let i = 1 ; i < 6 ; i++){

      divs[i].removeAttribute("class");
      
         if( i = 1){

            divs[i].classList.add("container");

         }
         else{

            divs[i].classList.add("list");

         }

   }

   // h1
   
   
   for( let i = 0 ; i < 5 ; i++){

      h1[i].removeAttribute("class");

         if( i == 0){

            h1[i].classList.add("title_section");

         }

         else{

            h1[i].classList.add("trabajo");

         }
      
      

   }


   // a

   for( let i = 0 ; i < 4 ; i++){

      a[i].removeAttribute("class");
      a[i].classList.add("enlace");

   }

   // h4

   h4.removeAttribute("class");
   h4.classList.add("subtitle_section");
   
   // section

   section.removeAttribute("class");

});