import css from "./css/styles.css";
import normalize from "./css/modern-normalize.css";
import refs from "./js/refs.js";
import arr from "./db/countries.json";
console.log('ARR', arr);
import searchItemTemplate from "./template/countrySearchItem.hbs";
import modalitemTemplate from "./template/modalCountryItem.hbs";
import modalCss from "./css/modal.css";
//console.log(refs.searchForm);
const { searchForm, searchResults, searchList, modal, modalContent } = refs;

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //console.log(e.target);
  // console.dir(e.target);
  // console.log(e.target.elements.search.value);
  let search = e.target.elements.search.value.toLowerCase();
  console.log(search);

  const country = arr.filter(elem => elem.name.toLowerCase().includes(search))
  console.log(country);

  let items = searchItemTemplate(country);
  console.log(items);
  searchResults.insertAdjacentHTML('afterbegin', items);

  // Заголовок по клику на каждый найденный элемент

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
window.addEventListener('keydown', (e) => {
  console.log(e.code);
  if (e.code === 'Escape') {
    modal.classList.add('is-hidden') 
  }
} )
modal.addEventListener('click', (e) => {
  console.log(e.target.id);
  if (e.target.id === 'modal') {
    modal.classList.add('is-hidden')
    modalContent.innerHTML = '';
  }
})

window.addEventListener('DOMContentLoaded', (e) => {
  // вызвать шаблон кантрис листтемплейт, передать массив arr,
  // созранить в переменную items, полученную разметку из переменной items внутрь countriesList
  // преобразовать countriesList в массив и повесить на каждый элемент слушатель по клику 
  // по textContent элемента делать фильтр массива, отфильтрованный массив передавать шаблону modalItemTemplate для отрисовки в модальном окне
  // задеплоить ссылку на гитхаб пейджес
})