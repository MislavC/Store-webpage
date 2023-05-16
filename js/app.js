/**
 * Project 1 - Hat Shop 
 * ISTE-340-800
 * Mislav Čuljak
 */
/**import js classes to the app.js */
import { HatView } from './view/HatView.js';
import { HatController } from './controller/HatController.js';
import { HatModel } from './model/HatModel.js';

import { FormView } from './view/FormView.js';
import { FormController } from './controller/FormController.js';
import { FormModel } from './model/FormModel.js';




class App {
    constructor() {

        const url = window.location.href;           /**  e.g. http://localhost:5500/form.html */
        let site = null;
        if (url.match(/[a-z]+.html/) !== null){
        site = url.match(/[a-z]+.html/)[0];
        } /** match returns an array of matches */

        switch (site) {
            case 'index.html':
                new HatController(new HatModel(), new HatView());
                break;
            case 'form.html':
                new FormController(new FormModel(), new FormView());
                break;
        }

    }
}
const app = new App();

