function toggleCollapsible(collapsibles) {
    collapsibles.forEach((item) =>
       item.addEventListener("click", function () {
         this.classList.toggle("collapsible0--expanded");
       })
    );
   }
   
  
  const collapsibles = [...document.getElementsByClassName("collapsible0")];
  toggleCollapsible(collapsibles);