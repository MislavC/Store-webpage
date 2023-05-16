/**
 * Project 1 - Hat Shop 
 * ISTE-340-800
 * Mislav Čuljak
 */


/**
 * Represents the View. View holds refences to all GUI elements user interacts with.
 * The View exposes methods to interact with the view elements. 
 */
export class FormView {

    /**
     * constructor that takes from form.html
     */
    constructor() {
        this.inputs = null;
        this.form = document.querySelector('#form-hat-name');
    }

    /**
     * Creates form inputs based on the injected JS object with data.
     * 
     * @param {Object} dataObject - JS object containing input data for this form
     * @returns {undefined} information that was choosen
     */
    createInputs(dataObject) {
        for (let property in dataObject) {
            this.form.querySelector('fieldset').insertAdjacentHTML('beforeend',
                `<p>${property}
                        <input name='${property}' 
                               value='${dataObject[property]}' 
                               type='text' size='30'/>
                     </p>`);
        }
        this.inputs = this.form.querySelectorAll('input[type=text]');
    }





}

