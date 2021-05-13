if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


// object-fit for ie11
function ibg(){
  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
  }
}
ibg();



// burger menu
const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__burger-menu');
burger.addEventListener('click', function(){
  burgerMenu.classList.toggle('visually-hidden');
})
document.addEventListener('click', function(e){
  if ((e.target.className != 'header__burger-menu') && (e.target.className != 'header__burger') && (e.target.className != 'burger')) {
    burgerMenu.classList.add('visually-hidden');
  };
});
function checkWindowChange(e) {
  if (e.matches) {
    burgerMenu.classList.add('visually-hidden');
  }
}
mediaQuery = window.matchMedia("(min-width: 960px)");
mediaQuery.addListener(checkWindowChange);
checkWindowChange(mediaQuery);



// header lists
const listArrows = document.querySelectorAll('.header__list-arrow');
const lists = document.querySelectorAll('.header__list');
listArrows.forEach(function(arrow){
  arrow.addEventListener('click', function(){
    const dataList = arrow.dataset.list;
    lists.forEach(function(list){
      if (list.dataset.list == dataList) {
        list.classList.toggle('visually-hidden');
        arrow.classList.toggle('list-active');
      }
      else {
        list.classList.add('visually-hidden');
      }
    });
  });
});

document.onclick = function(e){
  if (!e.target.parentNode.hasAttribute("data-list") && !e.target.hasAttribute("data-list")) {
    lists.forEach(function(list){
      list.classList.add('visually-hidden');
      try {
        document.querySelector('.list-active').classList.remove('list-active');
      }
      catch (e) {}
    });
  };
};


//popup forms
const replyButtons = document.querySelectorAll('.reply-button');
const replyForm = document.querySelector('.reply-form')
const replyClose = document.querySelector('.reply-close')
const requestButtons = document.querySelectorAll('.request-button');
const requestForm = document.querySelector('.request-form')
const requestClose = document.querySelector('.request-close')
const requestLink = document.querySelector('.request-link')

function replyFormShow() {
  replyForm.classList.remove('visually-hidden');
  document.querySelector('body').classList.add('body-lock');
}
function requestFormShow() {
  requestForm.classList.remove('visually-hidden');
  document.querySelector('body').classList.add('body-lock');
}

replyButtons.forEach(function(button){
  button.addEventListener('click', replyFormShow);
});
replyClose.addEventListener('click', function(){
  replyForm.classList.add('visually-hidden');
  document.querySelector('body').classList.remove('body-lock');
});

try{
  requestButtons.forEach(function(button){
    button.addEventListener('click', requestFormShow);
  });
  requestClose.addEventListener('click', function(){
    requestForm.classList.add('visually-hidden');
    document.querySelector('body').classList.remove('body-lock');
  })
}
catch (e){}

try {
  requestLink.addEventListener('click', requestFormShow);
}
catch (e){}



// //weight list
try{
  const weightInput = document.querySelector('.weight');
  const weightList = document.querySelector('.calculator__weight-list');
  const weightListItems = document.querySelectorAll('.calculator__weight-list-item');
  weightInput.addEventListener('click', function(){
    weightList.style.display = "flex";
  });

  weightListItems.forEach(function(item){
    item.addEventListener('mousedown', function(){
      weightInput.value = item.innerHTML;
      weightList.style.display = "none";
    });
  });
  weightInput.addEventListener('blur', function(){
    weightList.style.display = "none";
  });
}
catch (e){}




// //price adaptive height
function heightAdapt(){
  try{
    const panelWrapper = document.querySelector('.price__panel-wrapper');
    const activePrice = document.querySelector('.price__panel-block_active');
    panelWrapper.style.height = activePrice.clientHeight + 'px';
  }
  catch (e) {}
}
heightAdapt();
window.addEventListener('resize', heightAdapt);




// //price tabs
try{
  const tabs = document.querySelectorAll('.price__toolbar-item');

  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      const dataTab = tab.dataset.tab;
      const prevBlock = document.querySelector('.price__panel-block_active');
      const newBlock = document.querySelector('.price__panel-block[data-tab="' + dataTab + '"]');
      const prevTab = document.querySelector('.price__toolbar-item_selected');
      const newTab = document.querySelector('.price__toolbar-item[data-tab="' + dataTab + '"]');
      prevBlock.classList.add('visually-hidden');
      prevBlock.classList.remove('price__panel-block_active');
      newBlock.classList.remove('visually-hidden');
      newBlock.classList.add('price__panel-block_active');
      heightAdapt();
      prevTab.classList.remove('price__toolbar-item_selected');
      newTab.classList.add('price__toolbar-item_selected');
      
    });
  });
}
catch (e) {}

