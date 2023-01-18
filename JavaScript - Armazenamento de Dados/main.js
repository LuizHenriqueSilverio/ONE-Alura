import { handleNovoItem } from './components/js/criaTarefa.js'
import { carregaTarefa } from './components/js/carregaTarefa.js'

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);

carregaTarefa();
