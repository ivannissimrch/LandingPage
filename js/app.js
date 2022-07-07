
/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll('section');
const parentUl = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * 
*/

/** removeClass function fix the
    *isued of having multiple class active 
    *at the same Time  */
function removeClass(){
   for(let i = 0; i < allSections.length; i++){
      allSections[i].classList.remove('your-active-class');
   }
}
/**removeclass function end */



//Build NavBar 
for(let i = 0;  i < allSections.length; i++){       
 const currentSection = allSections[i];
 const dataNavnumber = currentSection.dataset.nav;
 const lis = document.createElement('li');
 const liItem = document.createElement('a');
 liItem.href="#section"+ (i + 1); 
 liItem.innerHTML = dataNavnumber;   
 liItem.classList.add('menu__link');
 parentUl.append(lis);
 lis.appendChild(liItem);}
//Build NAvBar end.

//select active section  start (for section and corresponding navbar item).
const allNavItems = document.querySelectorAll('a'); 
window.addEventListener('scroll', function (){ 
   /*/first remove active class from all elements. removeClass function fix the
    *isued of having multiple class active 
    *at the same Time **/
   removeClass(); 

   let sectionNavRef = ''; // we need this variable to access current section to nav link.   
   //add active class to current section  on viewport.
   allSections.forEach(section =>  {             
   const sectionDimentions =  section.getBoundingClientRect();          
    if (sectionDimentions.top <= 60 && sectionDimentions.bottom >= 100) {            
       sectionNavRef = section.dataset.nav;             
       section.classList.add('your-active-class');            
    }      
   });      
 
  //access the navbar link that matches the currentsection on viewport and add active class.
  allNavItems.forEach( currentLink => {      
   if(sectionNavRef.match(currentLink.innerText)){
      currentLink.classList.add('active-nav-item');
   }
   else{
      currentLink.classList.remove('active-nav-item');
   }
  });  

});
//select active section end.

//scroll on click event start.
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
//scroll on click event end.


