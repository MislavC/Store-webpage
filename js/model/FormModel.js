/**
 * Project 1 - Hat Shop 
 * ISTE-340-800
 * Mislav Čuljak
 */

export class FormModel {
    /**
     * constructor
     */
    constructor() {
        this.address = "";
        this.init();
    }

    /**
     * Initializes this object properties. New properties are added based on the
     * data loaded from  localStorage.
     * 
     * @returns {undefined}
     */
    init() {
        let hat = JSON.parse(localStorage.getItem('hat'));
        for (let property in hat) {
            this[property] = hat[property];
        }
    }

    /**
     * Converts this object to a data object for the view. We could have also 
     * returned Object.entries(this), but in this case, we would be dealing 
     * with an array of arrays.
     * 
     * @returns {Object} a simple data object with inputs for the form view 
     */
    getInputData() {
        /** 1. stringify this object to get rid of this object methods */
        let inputsString = JSON.stringify(this);
        /**  2. return as plain JS data object */
        return JSON.parse(inputsString);
    }

    /**
     * Stores hat data accross browser sessions. Window.localStorage is used 
     * to store the model as a JSON string under the key 'hat'.
     * 
     * @returns {undefined}
     */
    persist() {
        localStorage.setItem('hat', JSON.stringify(this));
    }
}


