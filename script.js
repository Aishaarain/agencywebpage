

let searchBtn= document.querySelector("#search-btn");
let searchBar=document.querySelector(".search-bar-container");
let formBtn= document.querySelector("#login-btn");
let loginForm=document.querySelector(".login-form-container");
let formClose=document.querySelector("#form-close");
let menu= document.querySelector('#menu-bar');
let navbar= document.querySelector('.navbar');
let videoBtn= document.querySelectorAll('.vid-btn');
let preView=document.querySelector('.products-preview');
let popup= preView.querySelectorAll('.popup');

window.onscroll=()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
navbar.classList.remove('active');
loginForm.classList.remove('active');

}
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    });
searchBtn.addEventListener('click',()=>{
searchBtn.classList.toggle('fa-times');
searchBar.classList.toggle('active');

});
formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
    });
    formClose.addEventListener('click',()=>{
        loginForm.classList.remove('active');
        });

        // formClose.addEventListener('click',()=>{
        //     popup.classList.remove('active');
        //     });
        
videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
       document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    }
    );
});

document.querySelectorAll('.box .content').forEach(content=>{
    content.onclick=()=>{
        preView.style.display='flex'
        let name=content.getAttribute('data-name');
        popup.forEach(popup=>{
           let target= popup.getAttribute('data-target');
           if(name == target){
            popup.classList.add('active');
           }
        });
    };
});
popup.forEach(btn =>{
    btn.querySelector('.btn').onclick = () =>{
      btn.classList.remove('active');
      preView.style.display = 'none';
    };
  });
  popup.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      preView.style.display = 'none';
    };
  });
  function myFunction1() {
    var popup1 = document.getElementById("myPopup");
    popup1.classList.toggle("show");
  }
