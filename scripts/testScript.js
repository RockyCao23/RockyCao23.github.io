const body = document.body;
const thunderbots = document.querySelector(".thunderbotsIcon");
const projectCatalogue = document.querySelector("#projectCatalogue");

window.scrollTo(0, 0);

function hover(element) {
  element.setAttribute('src', 'images/boxCarOpenSticker.png');
  element.classList.remove("boxCarClosed");
  element.classList.add("boxCarOpen");
}

function unhover(element) {
  element.setAttribute('src', 'images/boxCarSticker.png');
  element.classList.add("boxCarClosed");
  element.classList.remove("boxCarOpen");

}

function viewProject(element){
  var project = (document.getElementById(element.id + "Project")).parentElement.parentElement;

  console.log(project);
  projectCatalogue.style["opacity"] = 0;
  projectCatalogue.style["transition"] = "0.5s";
  project.classList.remove("hidden")
  project.style["opacity"] = "100";
  project.style["transition"] = "2s";
  window.scrollTo({ top: 0, behavior: 'smooth' });

  setTimeout(function(){
    window.scrollTo({top: 0});
    body.classList.add("removeScrollY");
    body.classList.remove("removeScrollX");
    projectCatalogue.classList.remove("grid");
    projectCatalogue.classList.add("hidden");
  }, 500);

}

function returnToCatalogue(element){

  var project = element;

  projectCatalogue.style["opacity"] = 100;
  projectCatalogue.style["transition"] = "2s";
  project.style["opacity"] = 0;
  project.style["transition"] = "0.5s";
  window.scrollTo({left: 0, behaviour: 'smooth'});
  projectCatalogue.classList.remove("hidden");
  projectCatalogue.classList.add("grid");


  setTimeout(function(){
    window.scrollTo({left: 0});
    body.classList.add("removeScrollX");
    body.classList.remove("removeScrollY");
    project.classList.add("hidden");
  }, 500);


}
/*
function showcase(){

if(projectPage.classList.contains("noDisplay")){

  
  projectPage.classList.remove("hide");
  projectPage.classList.remove("noDisplay");
  projectPage.classList.add("show");

  projectsContainer.classList.add("gridDisplay");
  projectsContainer.classList.remove("noDisplay");
  projectsContainer.classList.add("hide");
  projectsContainer.classList.remove("show");

  
}else{
  projectPage.classList.add("hide");
  projectPage.classList.remove("show");
  projectPage.classList.add("nodisplay");

  projectsContainer.classList.add("show");
  projectsContainer.classList.remove("hide");
  projectsContainer.classList.add("noDisplay");
  projectsContainer.classList.remove("gridDisplay");
}
console.log(projectPage);

}
*/
//thunderbots.addEventListener('click', showcase);

