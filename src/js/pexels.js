import getAxiosFetch from './fetch/axiosFetch.js';
import pexelsFetch from './fetch/clientFetch.js';
import classicFetch from './fetch/classicFetch.js';
import  createGallery from './createGallery.js'
import refs from "./refs.js";

const { searchForm} = refs;

const KEY = '563492ad6f917000010000012a63e8694b4e4c41bc9f975aff2ed4f4';
const perPage = '10';
const BASE_URL = 'https://api.pexels.com/';
const query = 'flower';  

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let query = e.target.elements.search.value.toLowerCase();
  let queryParams = `v1/search?query=${query}&per_page=${perPage}`;
  // getAxiosFetch(BASE_URL + queryParams, KEY, createGallery, searchForm);
  // pexelsFetch(KEY, query, perPage,createGallery, searchForm);
  classicFetch(KEY, BASE_URL + queryParams, createGallery, searchForm);
})
