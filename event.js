
// =======================================================================================login=====================================
let point=document.querySelector(".point");
let home= document.querySelector(".outhome");
let login = document.querySelector(".outlogin");
let explor=document.querySelector(".outexplor");
let message= document.querySelector(".outmessage");
let reel= document.querySelector(".outreel");
let create = document.querySelector(".outcreate");
let profile = document.querySelector(".outprofile");


let altr=document.querySelector(".alter");
let user=document.getElementById("user");
let pass=document.querySelector("#pass");
let fname=document.querySelector("#fnm");
let lname=document.querySelector("#lnm");
let uname=document.querySelector("#unm");
let pname=document.querySelector("#pnm");
let p2name=document.querySelector("#pnm2");
let euser=document.querySelector("#fusr");
let npass=document.querySelector("#fpuss");
let npass2=document.querySelector("#fpuss2");


let signbtn =document.querySelector(".bswh");
let backbtn =document.querySelector(".backdf");
let forgot =document.querySelector(".forgut");
let backbtn2 =document.querySelector(".boek");


let loginform =document.querySelector(".fist");
let signform =document.querySelector(".sexnd");
let forgotform =document.querySelector(".throd");


//___________________________________________________________click all btn clr chng____________________________

let allbo = document.querySelectorAll(".allbo");
allbo.forEach(btton => {
    btton.addEventListener("mousedown",function(){
        btton.style.opacity=".7"
    })
    btton.addEventListener("mouseup",function(){
        btton.style.opacity=""
    })
   
});
//____________________________________________________________________data____________________________________________
let x1x=[
    "anshu",//__________________________________________________0____________________username_____
    "zzz",//_____________________________________________1____________________________password_____ 
    "change me",//_______________________________________________2____________________________firstname_________
    "",//______________________________________________3_____________________________last name________
    

]
//___________________________________________________________________________login page_________________________________________
loginform.addEventListener("submit",function(event){
event.preventDefault();


if(user.value==x1x[0]&&pass.value!==x1x[1]){
    altr.style.top="1.5rem";
    altr.innerText="Password is wrong";
    user.style.borderBottom="";
    pass.style.borderBottom="2px solid red";
    setTimeout(()=>{ altr.style.top="";},2000);
    pass.value="";
}
if(user.value!==x1x[0]&&pass.value==x1x[1]){
    altr.style.top="1.5rem";
    altr.innerText="Username is wrong";
    user.style.borderBottom="2px solid red";
    pass.style.borderBottom="";
    setTimeout(()=>{ altr.style.top="";},2000);
    user.value="";
}
if(user.value!==x1x[0]&&pass.value!==x1x[1]){
    altr.style.top="1.5rem";
    altr.innerText="Both password and username is wrong";
    user.style.borderBottom="2px solid red";
    pass.style.borderBottom="2px solid red";
    setTimeout(()=>{ altr.style.top="";},2000); 
}
if(user.value==x1x[0]&&pass.value==x1x[1]){
    login.style.display="none";
   point.style.display = "block";
   user.style.borderBottom="";
   pass.style.borderBottom="";
   user.value="";
    pass.value="";
    ini();
       home.style.display = "flex"
   }
});


signbtn.addEventListener("click",function(){
    signform.style.display="flex"
    loginform.style.display="none";
    user.style.borderBottom="";
    pass.style.borderBottom="";
    user.value="";
     pass.value="";    
});
forgot.addEventListener("click",function(){
    forgotform.style.display="flex"
    loginform.style.display="none";
    user.style.borderBottom="";
    pass.style.borderBottom="";
    user.value="";
     pass.value="";
     });
//_____________________________________________________________________________sign in page__________________________________________


signform.addEventListener("submit",function(event){
    event.preventDefault();

    
         if(pname.value!==p2name.value){
            altr.style.top="1.5rem";
            altr.innerText="Password not match";
            pname.style.borderBottom="2px solid red";
            p2name.style.borderBottom="2px solid red";
            setTimeout(()=>{ altr.style.top="";},2000);
            pname.value=""; 
            p2name.value=""; 
         }else{
            pname.style.borderBottom="";
            p2name.style.borderBottom="";
         }
         if(pname.value==""){
            altr.style.top="1.5rem";
            altr.innerText="Password is empty";
            pname.style.borderBottom="2px solid red";
            setTimeout(()=>{ altr.style.top="";},2000);
            pname.value="";
         }else{
            pname.style.borderBottom="";
         }
         if(/^[a-zA-Z]+$/.test(uname.value[0])!==true){
            altr.style.top="1.5rem";
            altr.innerText="first letter of username must be alphabet";
            uname.style.borderBottom="2px solid red";
            setTimeout(()=>{ altr.style.top="";},2000);
            uname.value="";
          }else{
            uname.style.borderBottom="";
          }
         if((/^[a-zA-Z]+$/.test(fname.value)!==true)&& (/^[a-zA-Z]+$/.test(lname.value)!==true) ){
            altr.style.top="1.5rem";
            altr.innerText="Name must be alphabet";
            fname.style.borderBottom="2px solid red";
            lname.style.borderBottom="2px solid red";
            setTimeout(()=>{ altr.style.top="";},2000);
            fname.value="";
            lname.value="";
         }else{
            fname.style.borderBottom="";
            lname.style.borderBottom=""; 
         }
        if((/^[a-zA-Z]+$/.test(fname.value)==true) && (/^[a-zA-Z]+$/.test(lname.value)!==true)){
            altr.style.top="1.5rem";
            altr.innerText="Last name must be alphabet";
            fname.style.borderBottom="";
            lname.style.borderBottom="2px solid red";
            setTimeout(()=>{ altr.style.top="";},2000);
            lname.value="";
         }else{
            lname.style.borderBottom="";
         }
         if((/^[a-zA-Z]+$/.test(fname.value)!==true) && (/^[a-zA-Z]+$/.test(lname.value)==true)){
            altr.style.top="1.5rem";
            altr.innerText="First name must be alphabet";
            fname.style.borderBottom="2px solid red";
            lname.style.borderBottom="";
            setTimeout(()=>{ altr.style.top="";},2000);
            fname.value="";
         }else{
            fname.style.borderBottom="";
         }
         if((/^[a-zA-Z]+$/.test(fname.value)==true) && (/^[a-zA-Z]+$/.test(lname.value)==true)&&(pname.value!=="")&&(pname.value==p2name.value)&&(/^[a-zA-Z]+$/.test(uname.value[0])==true)){

            x1x[0]=uname.value;
            x1x[1]=pname.value;
            x1x[2]=fname.value;
            x1x[3]=lname.value;
            fname.value="";
            lname.value="";
            uname.value="";
            pname.value="";
            p2name.value="";
            uname.style.borderBottom="";
            pname.style.borderBottom="";
            p2name.style.borderBottom="";
            fname.style.borderBottom="";
            lname.style.borderBottom="";
            signform.style.display="none"
            loginform.style.display="flex";
            login.style.display="none";
            ini();
       home.style.display = "flex"
            point.style.display = "block";
            fnname();
         }
         
});
backbtn.addEventListener("click",function(){
    
    signform.style.display=""
    loginform.style.display="";
    fname.value="";
    lname.value="";
    uname.value="";
    pname.value="";
    p2name.value="";
    uname.style.borderBottom="";
    pname.style.borderBottom="";
    p2name.style.borderBottom="";
    fname.style.borderBottom="";
    lname.style.borderBottom="";});
//_____________________________________________________forgot page______________________
forgotform.addEventListener("submit",function(event){
    event.preventDefault();

   
    if(npass.value!==npass2.value){
        altr.style.top="1.5rem";
        altr.innerText="Password is not same";
        npass2.style.borderBottom="2px solid red";
        setTimeout(()=>{ altr.style.top="";},2000);
        npass2.value="";
    }else{
        npass2.style.borderBottom="";
    }
    if(npass.value==""){
        altr.style.top="1.5rem";
        altr.innerText="Password is empty";
        npass.style.borderBottom="2px solid red";
        setTimeout(()=>{ altr.style.top="";},2000);
        npass.value="";
    }else{
        npass.style.borderBottom="";
    }
    if(euser.value!==x1x[0]){
        altr.style.top="1.5rem";
        altr.innerText="User not exist";
        euser.style.borderBottom="2px solid red";
        setTimeout(()=>{ altr.style.top="";},2000);
        euser.value="";
    }else{
        euser.style.borderBottom="";
    }
    if((npass.value==npass2.value)&& (npass.value!=="")&&(euser.value==x1x[0])){
        altr.style.top="1.5rem";
        altr.innerText="Password changed";
        x1x[1]=npass.value;
        setTimeout(()=>{ altr.style.top="";},2000);
        setTimeout(()=>{ 
            euser.value="";
            npass.value="";
            npass2.value="";
            euser.style.borderBottom="";
            npass.style.borderBottom="";
            npass2.style.borderBottom="";
            loginform.style.display=""
            forgotform.style.display=""
        },1000);
    }

});

backbtn2.addEventListener("click",function(){
    loginform.style.display=""
    forgotform.style.display=""
    fnname();
});
//_______________________________________________follow___________________________
let postfn =function(){
    let swch = 0;
    let ml = function () {
        if (swch == 1) {
            this.children[0].style.transition = "0.1s";
            this.style.transition = "0.1s";
            this.style.border = ""
            this.style.backgroundColor = "";
            this.children[0].style.color = "";
            this.children[0].innerText = "Follow";
            swch = swch - 1;
        }
        else {
            this.children[0].style.transition = "0.1s";
            this.style.transition = "0.1s";
            this.style.border = "none"
            this.style.backgroundColor = "#0CAFFF";
            this.children[0].style.color = "white";
            this.children[0].innerText = "Following";
            swch = swch + 1;
        }
    }
    
    let follow = document.querySelectorAll(".follow");
    follow.forEach(go => {
        go.addEventListener('click', ml);
    });
    
    //___________________________________________________like________________________
    
    let rlk = 1;
    let lk = function () {
        if (rlk == 1) {
            this.parentElement.nextElementSibling.children[0].innerText=rlk
            this.children[0].style.fill = "red"
            this.children[1].style.fill = "red"
            rlk = rlk - 1;
        }
        else {
            this.parentElement.nextElementSibling.children[0].innerText=rlk
            this.children[0].style.fill = "none"
            this.children[1].style.fill = "black"
            rlk = rlk + 1;
        }
    }
    
    
  
    let like = document.querySelectorAll(".like");
    like.forEach(go => {
        go.addEventListener('click', lk);
    });
    //_________________________________________________________comment on
    
    let ok = function () {
        this.nextElementSibling.style.display = "flex";
    
    }
    let comment = document.querySelectorAll(".ccnt");
    comment.forEach(go => {
        go.addEventListener('click', ok);
    });
    //--------------------------------------------------------reply on
    let onk = function () {
        this.parentElement.parentElement.nextElementSibling.style.display = "flex";
    }
    let commuent = document.querySelectorAll(".view");
    commuent.forEach(go => {
        go.addEventListener('click', onk);
    });
    //-------------------------------------------------------grey like
    let glk = 0;
    let fk = function () {
    
        glk++;
        this.nextElementSibling.innerText = glk;
        this.src = "img/likeg.svg"
    }
    let glike = document.querySelectorAll(".glike");
    glike.forEach(go => {
        go.addEventListener('click', fk);
    });
}
postfn();
//__________________________________________________________________ search scroll up down

let o0 = 9999;
let scro = function () {
    if (o0 < window.pageYOffset) {
        toplogo.style.transition = ".4s";
        toplogo.style.top = "-5rem"
        inppt.style.transition = ".4s";
        inppt.style.top = "-5rem"
        zero.style.bottom = "-3rem"


    }
    else {
        toplogo.style.transition = ".3s";
        toplogo.style.top = ""
        zero.style.transition = ".3s";
        zero.style.bottom = ""
        inppt.style.transition = ".3s";
        inppt.style.top = ""
    }
    o0 = window.pageYOffset;
}
let inppt = document.querySelector(".inppt");
let toplogo = document.querySelector(".toplogo");
let zero = document.querySelector(".zero");
document.addEventListener("scroll", scro);

//____________________________________________________________________load all photo__________________
let a = 1;
load = document.querySelector(".load")
load.addEventListener("click", function () {

    if (a == 1) {
        for (let i = 0; i < 52; i++) {
            let epik = document.querySelector(".epik");
            let newi = document.createElement("div");
            epik.appendChild(newi);
            newi.setAttribute("class", "bux")
            newi.innerHTML = document.querySelector(".buxi").innerHTML;
            newi.children[0].src = "s_img/sa" + i + ".jpg"
        }
        reset();
        a = a + 1;

        this.innerText = "Image loded"
    }
    else {

        //  let allline = document.querySelector(".epik").childElementCount;
        // for (let i = 2; i <allline; i++) {
        //     document.querySelectorAll(".bux")[i].remove(document.querySelector(".bux"))

        //      console.log(i)
        //  }
        a = 0;
    }
})
//___________________________________________________reels_______________________________________

let reelstart =function(){
     
    for (let i = 0; i < 24; i++) {
        let inrel = document.querySelector(".outreel");
        let newii = document.createElement("div");
        inrel.appendChild(newii);
        newii.setAttribute("class", "inrel")
        newii.innerHTML = document.querySelector(".relo").innerHTML;
        newii.children[0].children[0].src = "s_vid/sn" + i + ".mp4"
    }
  }
  let reelstop = function(){
    for(let i=0 ; i<10;i++){
        for(let i=0;i<reel.childElementCount;i++)
        {reel.removeChild(reel.children[0])}}
  }
// //_______________________________________________________________________autoplay rerls on screen video_____________________________
let autoplay=function(){
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= -300 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight+300 ) &&
          rect.right <= (window.innerWidth )
        );
      }
      
      let vidrels=document.querySelectorAll(".vidrel")
       function handleAutoplay() {
        vidrels.forEach(vid => {
        
          if (isElementInViewport(vid)) {
            //   vid.play();
            }else{
              vid.pause();
            }
            // vid.muted = !vid.muted;
          });
      
       }
      window.addEventListener('scroll', handleAutoplay);
      
      handleAutoplay();
}

let mutee = function(){
    let vidrels=document.querySelectorAll(".vidrel")
for (let i = 0; i < vidrels.length; i++) {
        
    vidrels[i].addEventListener("click", function () {
        vidrels.forEach(video => {
            video.muted = !video.muted;
        })
    });
}  
}

// ___________________________________________________________________________upload video and image______________

let nn = function (x) {
    let y = ""
    if (x.target.files[0].type == "video/mp4") {
        y = ".buxv"
    } else {
        y = ".buxi"
    }
    let epik = document.querySelector(".epik");
    let newi = document.createElement("div");
    epik.appendChild(newi);
    newi.setAttribute("class", "bux")
    newi.setAttribute("class", "bux")

    newi.innerHTML = document.querySelector(y).innerHTML;
    newi.children[0].src = URL.createObjectURL(put.files[0]);
    reset();
}

put = document.querySelector("#inimg")
put.addEventListener("change", nn);


//______________________________________________________________________explore video play pause____________________
// let fjk=function(){
//     if(this.paused){
//     this.play();
//     }else{this.pause();
//     }
//     }
//     epik = document.querySelector(".epik");
//     for(let i=0;i<epik.childElementCount;i++){
//        epik.children[i].children[0].addEventListener("dblclick",fjk);
//     }

//____________________________________________________________________reset all function__________________
let reset = function () {
    //________________________________________________________________________________delete pic______________________
    document.querySelectorAll(".cott").forEach(cut => {

        cut.addEventListener("click", function () {
            this.parentElement.parentElement.remove(this.parentElement.parentElement);
        });
    })


    //__________________________________________________________________mute un mute video__ view more btn____________________________________________
    const videos = document.querySelectorAll('video');

    let imgss = document.querySelectorAll(".gee");
    for (let i = 0; i < imgss.length; i++) {

        imgss[i].addEventListener("click", function () {

            if (this.nextElementSibling.style.display == "flex") {
                this.nextElementSibling.style.display = "none"
            } else {
                this.nextElementSibling.style.display = "flex"
            }
            // videos.forEach(video => {
            //     video.muted = !video.muted;
            // })

        });
    }
    //______________________________________________________________________show more options in photo______and save pic_________   
    let allmur = document.querySelectorAll(".mur")
    allmur.forEach(mur => {
        mur.addEventListener("mouseenter", function () {
            this.nextElementSibling.style.display = "flex"
        });
        mur.nextElementSibling.addEventListener("mouseleave", function () {

            this.style.display = ""

        });
        mur.nextElementSibling.addEventListener("click", function () {

            setTimeout(() => {this.style.display = ""}, 300);

        });
    });


    //______________________________________________________________make as profile pic_________________

    let addprofile = document.querySelectorAll(".addpicc")
    addprofile.forEach(place => {
        place.addEventListener("click", function () {
            document.querySelectorAll(".mypic").forEach(place => {
                place.src = this.parentElement.parentElement.previousElementSibling.src

            })


        })
    })

    //________________________________________________save to profile__________________________________
saveeb=document.querySelectorAll(".favv")
saveeb.forEach(place=>{

    place.addEventListener("click",function(){
        this.innerText="Saved"

        let mmm = document.querySelector(".mmm");
    let newi = document.createElement("div");
    mmm.appendChild(newi);
    newi.setAttribute("class", "aaa")
    newi.innerHTML = document.querySelector(".aaa").innerHTML;
    newi.children[0].src=this.parentElement.parentElement.previousElementSibling.src
    });
});
}
//_____________________________________________________uplode pic__of_login________________ pg_and__profile photo__________________________________________________
let adprf = document.querySelector("#wdh")
adprf.addEventListener("change",function(){
    document.querySelectorAll(".mypic").forEach(place => {
        place.src =  URL.createObjectURL(adprf.files[0]);

    })
   
})
let adrf = document.querySelector("#rg4")
adrf.addEventListener("change",function(){
    this.previousElementSibling.children[1].src= URL.createObjectURL(adrf.files[0]);
    this.previousElementSibling.children[1].style.display="block"
 this.nextElementSibling.innerText="Photo changed"
 this.nextElementSibling.style.color="rgb(0,205,205)"
    document.querySelectorAll(".mypic").forEach(place => {
        place.src =  URL.createObjectURL(adrf.files[0]);
    })
   
})
//___________________________________________________username___________________________________
let fnname =function(){
    usarname=document.querySelector(".usrnm");
usarname.innerText=x1x[0]
myyname=document.querySelector(".hi3");
myyname.innerText=x1x[2]
};
fnname();

//__________________________________________________________________________________________________
reset();
//_________________________________________________________create_____and uplode post__________________________________________
let cutt=document.querySelector(".crous");
cutt.addEventListener("click",function(){
    create.style.display="none"
    clrchg();
});
let ah=1;
 let nnm = function (x) {

let wrng=document.querySelector(".wrng")
let srcpost=URL.createObjectURL(pumt.files[0])
if(srcpost){
    ini();
    home.style.display = "flex"
    create.style.display="none"
wrng.innerText="Post Selected"
setTimeout(() => {wrng.innerHTML="&nbsp;"},4000);
}
   let y = ""
    if (x.target.files[0].type == "video/mp4") {
        y = ".hidvid"
    } else {
        y = ".hidimg"
    }
    let mypic = document.querySelector(".mypic");
    let homet = document.querySelector(".home");
    let newi = document.createElement("div");
    homet.appendChild(newi);
    newi.setAttribute("class", "post")

    newi.innerHTML = document.querySelector(".post").innerHTML;
     newi.children[1].innerHTML = document.querySelector(y).innerHTML;
     newi.children[0].children[0].children[0].children[0].children[0].setAttribute("class","mypic me")
     newi.children[0].children[0].children[0].children[0].children[0].src=mypic.src
     newi.children[0].children[0].children[1].innerText= x1x[0]; 
     newi.children[3].children[0].children[0].innerText= x1x[0]; 
     newi.children[1].children[0].src = URL.createObjectURL(pumt.files[0]);


     let xxx = document.querySelector(".xxx");
    let newi2 = document.createElement("div");
    xxx.appendChild(newi2);
    newi2.setAttribute("class", "yyy")
    newi2.innerHTML = document.querySelector(".yyy").innerHTML;
    newi2.children[0].src = URL.createObjectURL(pumt.files[0]);

    let ptcount = document.querySelector(".mypst");
    ptcount.innerText=ah+" Post"
    ah=ah+1;
    postfn();
   }


 pumt = document.querySelector("#jhgh")
 pumt.addEventListener("change", nnm);


//______________________________________________________index color change________new tab switch_____________________________________-
let ht0 = document.querySelector(".htab");
let mt0 = document.querySelector(".mtab");
let mt1 = document.querySelector(".msgmob");
let rt0 = document.querySelector(".rtab");
let ct0 = document.querySelector(".ctab");
let et0 = document.querySelector(".etab");
let ep0 = document.querySelector(".ep");
let nt0 = document.querySelector(".ntab");
let lt0 = document.querySelector(".ltab");
let mot0 = document.querySelector(".motab");
let mot1 = document.querySelector(".moremob");

let prt0 = document.querySelector(".ptab");

let clrchg = function() {
    ht0.children[0].children[0].style.fill="none"
    mt0.children[0].children[0].style.fill=""
    mt0.children[0].children[1].style.fill=""
    mt1.children[0].children[0].style.fill=""
    mt1.children[0].children[1].style.fill=""
    rt0.children[0].children[0].style.fill=""
    ct0.children[0].children[0].style.fill=""
    ct0.children[0].children[1].style.stroke=""
    ct0.children[0].children[2].style.stroke=""
    ct0.children[0].children[1].style.strokeWidth=""
    ct0.children[0].children[2].style.strokeWidth=""
    et0.children[0].style.fill=""
    et0.children[0].children[0].style.strokeWidth=""
    ep0.style.fill=""
    ep0.children[0].style.strokeWidth=""
    nt0.children[0].children[1].style.fill=""
    ht0.children[1].style.color="rgb(0,0,0)"
    mt0.children[1].style.color=""
    rt0.children[1].style.color=""
    ct0.children[1].style.color=""
    et0.children[1].style.color=""
    nt0.children[1].style.color=""
    mot0.children[1].style.color=""
    lt0.children[1].style.color=""
    prt0.children[1].style.color=""

    pust.style.color="black"
        pust.children[0].style.fill="black"
        saved.style.color=""
        saved.children[0].style.fill=""
        tagged.style.color=""
        tagged.children[0].style.fill=""
    postpg.style.display=""
    savepg.style.display=""
    tagpg.style.display=""
    pust.style.borderTop="1px solid black"
        saved.style.borderTop=""
        tagged.style.borderTop=""
}

let ini = function () {
    home.style.display = "none";
    explor.style.display = "none";
    message.style.display = "none";
    profile.style.display = "none";
    reel.style.display = "none";
    login.style.display = "none";
   
    reelstop();
}


 ht0.addEventListener("click", function () {
    ini();
       home.style.display = "flex"
        clrchg();
       ht0.children[0].children[0].style.fill="black"
       ht0.children[0].style.width="22"
    setTimeout(() => {
        ht0.children[0].style.width=""
    },100);
    ht0.children[1].style.color="rgb(0,200,200)"
    ht0.children[1].style.color="1.1rem"
 });
 mt1.addEventListener("click", function () {
    ini();
    message.style.display = "flex"
    clrchg();
    mt0.children[0].children[0].style.fill="black"
    mt0.children[0].children[1].style.fill="white"
    mt1.children[0].children[0].style.fill="black"
    mt1.children[0].children[1].style.fill="white"
    mt1.children[0].style.width="22"
    setTimeout(() => {
        mt1.children[0].style.width=""
    },100);
    mt0.children[1].style.color="rgb(0,200,200)"
});
mt0.addEventListener("click", function () {
    ini();
    message.style.display = "flex"
    clrchg();
    mt1.children[0].children[0].style.fill="black"
    mt1.children[0].children[1].style.fill="white"
    mt0.children[0].children[0].style.fill="black"
    mt0.children[0].children[1].style.fill="white"
    mt0.children[0].style.width="22"
    setTimeout(() => {
        mt0.children[0].style.width=""
    },100);
    mt0.children[1].style.color="rgb(0,200,200)"
});
rt0.addEventListener("click", function () {
    ini();
    reel.style.display = "flex";
    clrchg();
    rt0.children[0].children[0].style.fill="black"
    rt0.children[0].style.width="22"
    setTimeout(() => {
        rt0.children[0].style.width=""
    },100);
    rt0.children[1].style.color="rgb(0,200,200)"
    reelstart();
    autoplay();
    mutee();
});
ct0.addEventListener("click", function () {
    create.style.display = "flex";
    clrchg();
    ct0.children[0].children[0].style.fill="black"
    ct0.children[0].children[1].style.stroke="white"
    ct0.children[0].children[1].style.strokeWidth ="2"
    ct0.children[0].children[2].style.stroke="white"
    ct0.children[0].children[2].style.strokeWidth="2"
    ct0.children[0].style.width="22"
    ct0.children[1].style.color="rgb(0,200,200)"
    setTimeout(() => {
        ct0.children[0].style.width=""
    },100);
    
});
et0.addEventListener("click", function () {
    ini();
    explor.style.display = "block"
    clrchg();
    et0.children[0].style.fill="black"
     et0.children[0].children[0].style.strokeWidth="1"
     ep0.style.fill="black"
    ep0.children[0].style.strokeWidth="1"
    et0.children[0].style.width="22"
    et0.children[1].style.color="rgb(0,200,200)"
    setTimeout(() => {
        et0.children[0].style.width=""
    },100);
});
ep0.addEventListener("click", function () {
    ini();
    explor.style.display = "block"
    clrchg();
    et0.children[0].style.fill="black"
     et0.children[0].children[0].style.strokeWidth="1"
    ep0.style.fill="black"
    ep0.children[0].style.strokeWidth="1"
    ep0.style.width="22"
    et0.children[1].style.color="rgb(0,200,200)"
    setTimeout(() => {
        ep0.style.width=""
    },100);
});
nt0.addEventListener("click", function () {
    // ini();
    // notif.style.display = "block"
    clrchg();
    nt0.children[0].children[1].style.fill="black"
    nt0.children[0].style.width="22"
    nt0.children[1].style.color="rgb(0,200,200)"
    setTimeout(() => {
        nt0.children[0].style.width=""
    },100);
});
mot0.addEventListener("click", function () {
    // ini();
    // notif.style.display = "block"
    clrchg();
    mot0.children[0].style.width="22"
    mot0.children[1].style.color="rgb(0,200,200)"
    setTimeout(() => {
        mot0.children[0].style.width=""
    },100);
});

mot1.addEventListener("click", function () {
    // ini();
    // notif.style.display = "block"
    clrchg();
    mot1.children[0].style.width="22"
    mot1.children[0].style.height="22"
    setTimeout(() => {
        mot1.children[0].style.width=""
        mot1.children[0].style.height=""
    },100);
});

lt0.addEventListener("click", function () {
    point.style.display="none"
    login.style.display = "flex"
    lt0.children[0].style.width="22"
    lt0.children[1].style.color="rgb(0,200,200)"
    clrchg();
    setTimeout(() => {
        lt0.children[0].style.width=""
    },100);
});
prt0.addEventListener("click", function () {
    ini();
    profile.style.display = "flex"
    clrchg();
    prt0.children[0].style.width="1.5rem"
    prt0.children[0].style.height="1.5rem"
    prt0.children[1].style.color="rgb(0,200,200)"
    setTimeout(() => {
        prt0.children[0].style.width=""
        prt0.children[0].style.height=""
    },50);
});

//________________________________________________________________post switch____________________________________________________

    let pust=document.querySelector(".puust")
    let saved=document.querySelector(".saved")
    let tagged=document.querySelector(".tagge")
    let postpg=document.querySelector(".xxx")
    let savepg=document.querySelector(".mmm")
    let tagpg=document.querySelector(".vvv")
    
    pust.addEventListener("click",function(){
        pust.style.color="black"
        pust.children[0].style.fill="black"
        saved.style.color=""
        saved.children[0].style.fill=""
        tagged.style.color=""
        tagged.children[0].style.fill=""
    postpg.style.display=""
    savepg.style.display=""
    tagpg.style.display=""
    pust.style.borderTop="1px solid black"
        saved.style.borderTop=""
        tagged.style.borderTop=""
    });
    
    saved.addEventListener("click",function(){
        pust.style.color="grey"
        pust.children[0].style.fill="none"
        saved.style.color="black"
        saved.children[0].style.fill="black"
        tagged.style.color=""
        tagged.children[0].style.fill=""
        postpg.style.display="none"
        savepg.style.display="flex"
        tagpg.style.display="none"
        pust.style.borderTop="none"
        saved.style.borderTop="1px solid black"
        tagged.style.borderTop="none"
        });
    
        tagged.addEventListener("click",function(){
            pust.style.color="grey"
        pust.children[0].style.fill="none"
        saved.style.color=""
        saved.children[0].style.fill=""
        tagged.style.color="black"
        tagged.children[0].style.fill="black"
            postpg.style.display="none"
            tagpg.style.display="flex"
            savepg.style.display="none"
            pust.style.borderTop="none"
            saved.style.borderTop="none"
            tagged.style.borderTop="1px solid black"
            });

//_____________________________________________________________________edit profile___________________________
let gb=document.querySelector(".inprofile2")
let g1=document.querySelector("#adnm")
let g2=document.querySelector("#adusn")
let g3=document.querySelector("#adbio")
let g4=document.querySelector(".okeybn")
let bioox=document.querySelector(".hi4")
let edt=document.querySelector(".edtprf")
edt.addEventListener("click",function(){
    gb.style.display="flex";
});
g4.addEventListener("click",function(){
    if(g1.value!==""){
        x1x[2]=g1.value;  
    }
    if(g2.value!==""){
        x1x[0]=g2.value;  
    }
    fnname();
    if(g3.value!==""){
bioox.innerText=g3.value;
    }
    gb.style.display="none";
});


// let form = document.querySelector("for")
// form.addEventListener("submit",function(event){
//     event.preventDefault();
  

    
// })
// let injj = document.querySelector("input")
// injj.addEventListener("click",function(){
//     console.log(this)

//     console.log(injj.value)
// })
//___________________________________________________________________________________click out box_______
// .addEventListener("click", function (x) {
// if (!this.contains(x.target)) {
//     console.log("hd")
//     this.style.display = "none";
// }else{
//     console.log(this)
//}}

