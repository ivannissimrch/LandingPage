
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

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
   let activeSection = ''; 
   allSections.forEach(section =>  {
    const sectionTop = section.offsetTop;
    const sectionHeigth = section.clientHeight;
      if (this.scrollY >= sectionTop) {            
       activeSection = section.dataset.nav;      
      section.classList.add('your-active-class');           
    }   
    else{
      section.classList.remove('you-active-class');
    }      
    
   });

  allNavItems.forEach( currentLink => {  
   if(activeSection.match(currentLink.innerText)){
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


