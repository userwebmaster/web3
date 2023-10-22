function toggleCollapsible(collapsibles) {
    collapsibles.forEach((item) =>
       item.addEventListener("click", function () {
         this.classList.toggle("collapsible--expanded");
       })
    );
   }
   
  
  const collapsibles = [...document.getElementsByClassName("collapsible")];
  toggleCollapsible(collapsibles);