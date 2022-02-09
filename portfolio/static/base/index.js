email=document.getElementById("contact-heading")
skill=document.getElementById("skill")
about=document.getElementById("about")
work=document.getElementById("works")
contact=document.getElementById("contacts")
skill_sec=document.getElementById("skills")
work_sec=document.getElementById("work")
about_sec=document.getElementById("aboutme")
contact_sec=document.getElementById("contact")
skill.addEventListener("click",()=>skill_sec.scrollIntoView())
about.addEventListener("click",()=>about_sec.scrollIntoView({block:"end"}))
work.addEventListener("click",()=>work_sec.scrollIntoView({block:"start"}))
contact.addEventListener("click",()=>contact_sec.scrollIntoView())

i=0
function red(r){
    email.style.color="red";
}
function white(r){
    email.style.color="white";
}
function animate(){
    if(i%2==0){
        red();
    }
    else{
        white();
    }
    i++;
    if(i==4)i=0;
}

setInterval(animate,300)