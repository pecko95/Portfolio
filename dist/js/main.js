"use strict";var glide=new Glide(".glide",{type:"carousel",startAt:0,perView:1,autoplay:5e3,hoverpause:!1});glide.mount(),function(){emailjs.init("user_UhBArauY2MWSdZZhQpUeI")}();var submitBtn=document.querySelector("#submitBtn"),mailError=document.querySelector("#mail--error");document.getElementById("contact-form").addEventListener("submit",function(a){a.preventDefault();var b=document.querySelector("#name_input"),c=document.querySelector("#email_input"),d=document.querySelector("#subject_input"),e=document.querySelector("#message_input"),f={user_name:this.user_name.value,user_email:this.user_email.value,mail_subject:this.mail_subject.value,text:this.text.value};b.value&&c.value&&d.value&&e.value?emailjs.send("contact_service","contact_form",f).then(function(){submitBtn.innerHTML="Message Sent! <i class=\"material-icons\">check_circle_outline</i>"}).catch(function(){submitBtn.innerHTML="Something went wrong... <i class=\"material-icons\">error_outline</i>"}):(mailError.textContent="Please fill out all fields before clicking send.",setTimeout(function(){mailError.textContent=""},3e3))});var mouseScroll=document.querySelector("#mouse__scroll"),seconds=0;document.addEventListener("DOMContentLoaded",showScroll);function showScroll(){setInterval(function(){seconds++,10<=seconds&&(mouseScroll.classList.add("display__mouse--scroll"),setTimeout(function(){mouseScroll.classList.add("active__mouse--scroll")},50))},1e3)}document.addEventListener("scroll",hideScroll);var skills=document.querySelector("#skills"),skillsYPos=skills.getBoundingClientRect().y-250,glideSection=document.querySelector(".glide"),glideYPos=glideSection.getBoundingClientRect().y-250,contact=document.querySelector("#contact"),contactYPos=contact.getBoundingClientRect().y;function hideScroll(){seconds=0,console.log(window.pageYOffset),mouseScroll.classList.contains("active__mouse--scroll")&&(mouseScroll.classList.remove("active__mouse--scroll"),setTimeout(function(){mouseScroll.classList.remove("display__mouse--scroll")},1e3)),(window.pageYOffset>=skillsYPos||400<=window.pageYOffset)&&skills.classList.add("skills--active"),(window.pageYOffset>=glideYPos||700<=window.pageYOffset)&&glideSection.classList.add("glide--active"),1400<=window.pageYOffset&&(contact.classList.add("contact--active"),console.log("contact"))}var quote=document.querySelector("#quote"),container=document.querySelector("#container"),nav=document.querySelector("#nav__links");quote.addEventListener("animationend",displayElements);function displayElements(){nav.classList.add("display__nav"),document.body.style.overflow="unset",setTimeout(function(){container.classList.add("active__container"),nav.classList.add("active__nav")},50)}var projectsLink=document.querySelectorAll(".projects");projectsLink.forEach(function(a){return a.addEventListener("click",function(a){window.scroll({top:900,left:0,behavior:"smooth"}),a.preventDefault()})});var contactLink=document.querySelectorAll(".contacts");contactLink.forEach(function(a){return a.addEventListener("click",function(a){window.scroll({top:1500,left:0,behavior:"smooth"}),a.preventDefault()})});var aboutLink=document.querySelector(".about");aboutLink.addEventListener("click",function(a){window.scroll({top:0,left:0,behavior:"smooth"}),a.preventDefault()});