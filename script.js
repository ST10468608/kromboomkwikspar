sole.log("javascript linked successfully!");

//====Tabs====
const tab =
document.querySelectorAll(".tab-button");
const contents =
document.querySelectorAll("tab-content");

tabButtons.forEach(btn => {
    btn.addEventListener("click",()=> {
        tabs.forEach(t =>
       t.classList.remove("active"));    
        contents.forEach(c =>
            c.classlist.remove("active"));
        
        btn.classList.add("active");

document.getElementById(btn.dataset.tab) .classList.add ("active");
        }); 
    });
    
    // === Accordion Animation ===
    const acc =
    Document.querySelectorAll (".accordion")

    acc.forEach (a =>{
        a.addEventListener("click",() =>{
            a.classList.toggle ("active");

            const panel= a.nextElementSibling;
            if (panel.style.maxHeight) {
               panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight =
                panel.scrollHeight + "px"
            }
        });
    });

    // ===Modal on form Submit ===
    const Form =
    document.getElementById ("contactForm");
    const modal =
    document.getElementById ("successModal");
    const closeBtn =
    document.querySelector (".close");

    Form.addEventListener("submit", (e) =>{
        e.preventDefault(); // Prevent page reload
        modal.style.display = "flex";
        form .reset();
    });

    closeBtn .onclick = () =>
        modal.style.display = "none";

    window.onclick = (e) => {
        if (e.target === modal)
            modal.style.display = "none";
    };

        // deactivate all tabs

    tabButtons.forEach(btn=>
        btn.classList.remove("active"));
        tabContents.forEach(tab =>
            tab.classList.remove("active"));
       
       //====activated the clicked tab

       button.classList.add("active") ;
    document.getElementById(button.dataset.tab
  ).classList.add("active");


//====Accordion====
const accordions =
document.querySelectorAll(".accordion");
accordions.forEach(acc =>{
    acc.addEventListener("click",function()
{
    this.classlist.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display==="block"? "none" :
    "block";
})
})
//====Modal (after form submission)====

const form =
document.getElementById("contactform");
const Modal =
Document.getElementById("successModal");
const closeBtn=
document.querySelector(".close");

form.addEventListener("submit",(e)=>{
    e.preventDefault(); //prevent page reload
    //show Modal
    Modal.style.display = "flex";
    form.reset (); //clear form
});

closeBtn.onclick = ()=>
    Modal.style.display = "none";
window.onclick = (e)=> {
    if (e.target === modal)
        Modal.style.display = "none";
};

var location = [
    {name:"Kroomboom kwikspar",coords:[-33.9249,18.4241]},
    {name:"Steers",coords:[-33.93,18.42]},
    {name:"Tashreeqas Restuarant",coords:[-33.92,18.43]},
];
location.forEach (function(loc){
    L.marker(loc.coords)
    .addTo(map)
    .bindPopup(loc,name);
});

var shopIcon = L.icon({
    iconUrl: 'shop.png',
    iconSize: [40,40]
});

L.marker ([-33.9249,18.4241],{icon:
    shopIcon
}).addTo(map) 

map.locate({setView:true,maxZoom: 16});

function onLocationFound(e){
    L.marker (e.latling).addTo(map)
    .bindPopup("You are here");
}
map.on('locationfound',onLocationFound);

var street = 
L.tileLayer ('https://{s}.tile.openstreetap.org/{z}/{y}.png');
var satellite =
L.tileLayer ('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png');

var baseMaps = {
    "street": street,
    "satellite": satellite
};
L.control.layers(baseMaps).addTo (map);
street.addTo (map)

const elements =
document.querySelectorAll('.hidden')

const observer = new
IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
