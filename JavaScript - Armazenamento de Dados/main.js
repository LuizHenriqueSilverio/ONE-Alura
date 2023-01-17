import { handleNovoItem } from './components/js/criaTarefa.js'

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);
