import refs from "./refs.js";
import searchItemTemplate from "../template/countrySearchItem.hbs";
import modalitemTemplate from "../template/modalCountryItem.hbs";
import arr from "../db/countries.json";

const { searchForm, searchResults, searchList, modal, modalContent } = refs;

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
 
  let search = e.target.elements.search.value.toLowerCase();
  console.log(search); 

  const country = arr.filter(elem => elem.name.toLowerCase().includes(search))


  let items = searchItemTemplate(country);
  console.log(items);
  searchResults.insertAdjacentHTML('afterbegin', items);
  console.log([...searchResults.children]);
  [...searchResults.children].forEach(elem => {
    elem.addEventListener('click', (e) => {
      console.log(e.target.textContent.trim());

      let search = e.target.textContent.trim();
      let country = arr.filter(elem => elem.name === search)
      console.log(country);

      let items = modalitemTemplate(country);
      console.log(items);
      modalContent.insertAdjacentHTML('afterbegin', items);
      modal.classList.remove('is-hidden')
    })
  })
})

window.addEventListener('DOMContentLoaded', (e) => {
  // вызвать шаблон кантрис листтемплейт, передать массив arr,
  // созранить в переменную items, полученную разметку из переменной items внутрь countriesList
  // преобразовать countriesList в массив и повесить на каждый элемент слушатель по клику 
  // по textContent элемента делать фильтр массива, отфильтрованный массив передавать шаблону modalItemTemplate для отрисовки в модальном окне
  // задеплоить ссылку на гитхаб пейджес
})
