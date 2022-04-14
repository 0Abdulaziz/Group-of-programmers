let accordions;
const accordionWrapper = document.querySelector('.accordion-wrapper');

const contentData = [
   {
      id: 1,
      titel: 'Abdulaziz.Azimov',
      content: 'Web Standart N23',
      tel:'+998-95-953-98-81'+' '+'+998-95-073-01-43',
   },
   {
      id: 2,
      titel: 'Ubaydullo Abdullajanov',
      content: 'Web Dizayner(boshlanmadi hali)',
      tel:'+998-95-073-01-43'
   },
   {
      id: 3,
      titel: 'Xayrullayev Xalilulloh',
      content: 'Grafik dizayner botcamp N12',
      tel:'+998-95-055-00-53'
   },
   {
      id: 4,
      titel: 'Usmanov Abdumannab',
      content: 'Web Standart N22',
      tel:'+998-99-300-23-07'
   },
   {
      id: 5,
      titel: 'Muhammad Usmon',
      content: 'Motion Graphics N7',
      tel:'+998-95-032-00-52'
   },
   {
      id: 6,
      titel: 'Bobur Abdukaakharov',
      content: 'Web Dizayner(boshlanmadi hali)',
      tel:'+998-94-953-38-53'
   },
   {
      id: 7,
      titel: 'Mansur Eshbotaev',
      content: 'Web Dasturlash',
      tel:'+998-99-277-32-30'
   },
   {
      id: 8,
      titel: 'Rakhmanov Azizillo',
      content: 'Faundation N53',
      tel:'+998-95-054-15-25'
   },
   {
      id: 9,
      titel: 'Normatov Abdurasul',
      content: 'Flutter',
      tel:'+998-94-953-93-50'
   },
   {
      id: 10,
      titel: 'Sobirov Abdumalik',
      content: 'Java',
      tel:'+998-95-190-80-92'
   },
   {
      id: 11,
      titel: 'Salimboyev Rustam',
      content: 'Go',
      tel:'+998-94-603-40-47'
   },
   {
      id: 12,
      titel: 'Umarov Abdulaziz',
      content: 'Motion Graphics(boshlanmadi hali)',
      tel:'+998-95-190-80-92'
   },
   {
      id: 13,
      titel: 'Kodirov Fahriddin',
      content: 'Foundation N50',
      tel:'+998-95-054-15-25'
   }

];

const createTemplete = item => {
   return `
      <div class="accordion-item">
         <div class="accordion-item-title">${item.titel}</div>
         <div class="accordion-item-content">${item.content}</div>
         <div class="accordion-item-content">${item.tel}</div>
      </div>
   
   `
}

const fillHtmlList =  ()=>{
   contentData.forEach(item =>{
      accordionWrapper.innerHTML += createTemplete(item);
   })
   accordions = document.querySelectorAll('.accordion-item');
};
fillHtmlList();

if(accordions){
   for(let item of accordions){
      item.addEventListener('click', function(){
         if(this.classList.contains('active')){
            this.classList.remove('active');
         }else{
            for(let element of accordions){
               element.classList.remove('active');
            }
            this.classList.add('active');
         }
      })
   }
}