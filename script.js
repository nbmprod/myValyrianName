function makeValyrianMale(name, surname){
 
    let valName = name;
    let valSurname = surname;
    
    //NAME 
    
    if (name.includes('aa')) valName = valName.replace('aa','a');
    
    if (name.includes('Aa')) valName = valName.replace('Aa','A');
    
    if (name.includes('a')) valName = valName.replace('a','ae');
    
    if (name.includes('A')) valName = valName.replace('A','Ae');
    
    
    if (name.endsWith('a') ||
        name.endsWith('e') ||
        name.endsWith('o') ||
        name.endsWith('i') ||
        name.endsWith('u')) valName = valName.concat('mon');  
     
    else if (name.endsWith('r')) valName = valName.concat('ys');
    
    else if (name.endsWith('s')) valName = valName.concat('ys');
    
    else if (name.endsWith('m')) valName = valName.concat('ar');
    
    else if (name.endsWith('d')) valName = valName.concat('ar'); 
    
    else valName = valName.concat('or');
     
    
    //SURNAME
    
    if (surname.includes('a')) valSurname = valSurname.replace('a','ae');
    
    if (surname.includes('A')) valSurname = valSurname.replace('A','Ae');
    
    if (surname.endsWith('a') ||
          surname.endsWith('e') ||
        surname.endsWith('o') ||
        surname.endsWith('i') ||
        surname.endsWith('u')) valSurname = valSurname.concat('reon');
    
    else if (surname.endsWith('y')) valSurname = valSurname.concat('sys');
    
    else if (surname.endsWith('r')) valSurname = valSurname.concat('eon');
    
    else if (surname.endsWith('m')) valSurname = valSurname.concat('eon');
    
    else valSurname = valSurname.concat('ys');
    
    return valName + ' ' + valSurname
    
   
  }

function formatString(str) {
  return str
    .replace(/(\B)[^ ]*/g, match => (match.toLowerCase()))
    .replace(/^[^ ]/g, match => (match.toUpperCase()));
}
  
  const pageComponent = document.querySelector('.page');  
  const nameForm = document.querySelector('.publish__form');
  const userName = document.querySelector('.publish__input_name');
  const userSurname = document.querySelector('.publish__input_surname');
  const finalName = document.querySelector('.publish__yourname');
  const publishButton = document.querySelector('.publish__button');
  const publishButtonOriginalText = publishButton.textContent;
  const againButton = document.querySelector('.publish__again');
  const aboutComponent = document.querySelector('.about');
  const aboutCloser = document.querySelector('.about__closer-container');
  const aboutButton = document.querySelector('.footer__item_button');
  


  nameForm.onsubmit = function(evt) {
    evt.preventDefault();
    if (userName.value.length != 0 &&
        userName.value.length != undefined &&
        userName.value.length != null &&
        userSurname.value.length != 0 &&
        userSurname.value.length != undefined &&
        userSurname.value.length != null) {
      finalName.textContent = makeValyrianMale(
        formatString(userName.value), formatString(userSurname.value)
        );
      finalName.classList.add('publish__yourname_fadein');
      againButton.classList.add('publish__again_fadein');
      userName.setAttribute('disabled','');
      userSurname.setAttribute('disabled','');
    } else {
      publishButton.textContent = 'Fill the fields';
      setTimeout(() => {
        publishButton.textContent = publishButtonOriginalText
      }, 1000);
    }
  }

  againButton.onclick = function(){
    document.location.reload(true)
  }

  aboutButton.onclick = function(){
    aboutComponent.classList.add('about_on');
    aboutComponent.classList.remove('about');
    pageComponent.classList.add('page_fadein');
  }

  aboutCloser.onclick = function(){
    aboutComponent.classList.remove('about_on');
    aboutComponent.classList.add('about');
    pageComponent.classList.remove('page_fadein');
  }


