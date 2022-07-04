
//Global variables
const allSections = document.querySelectorAll('section');
const parentUl = document.querySelector('#navbar__list');

//create navbar items
for(let i = 0;  i < allSections.length; i++){       
 const currentSection = allSections[i];
 const dataNavnumber = currentSection.dataset.nav;
 const lis = document.createElement('li');
 const liItem = document.createElement('a');
 liItem.href="#section"+ (i + 1);
 liItem.innerHTML = dataNavnumber; 
 liItem.classList.add('menu__link');
 parentUl.append(lis);
 lis.append(liItem);}
//Create Nav Bar Items.



//select active section
const allNavItems = document.querySelectorAll('a');
window.addEventListener('scroll', function (){  
   let sectionNavRef = '';    
   allSections.forEach(section =>  {
   const sectionDimentions =  section.getBoundingClientRect();          
    if (sectionDimentions.top <= 60 && sectionDimentions.bottom >= 100) {            
       sectionNavRef = section.dataset.nav;      
       section.classList.add('your-active-class');           
    }   
    else{
      section.classList.remove('you-active-class');
    }    
    
   });

  allNavItems.forEach( currentLink => {  
   if(sectionNavRef.match(currentLink.innerText)){
      currentLink.classList.add('active-nav-item');
   }
   else{
      currentLink.classList.remove('active-nav-item');
   }
  });  

});
//select active section



//scroll on click event
const linkArray = document.querySelectorAll('a');  
   linkArray.forEach(function (LinkSelected) {
   LinkSelected.addEventListener('click',function(e){
   e.preventDefault();
    const currentLink = document.querySelector(this.getAttribute('href')); 
    currentLink.scrollIntoView({     
      behavior : 'smooth',        
    });      
   });
});   

//scroll on click eventfun


