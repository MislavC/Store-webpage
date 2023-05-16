/**
 * Project 1 - Hat Shop 
 * ISTE-340-800
 * Mislav Čuljak
 */

export class FormController {
    /**
     * 
     * @param {String} model 
     * @param {String} view 
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.createInputs(this.model.getInputData());

        /** register one event handler for all input 'change' events */
        this.view.inputs.forEach((input) => {
            input.addEventListener('change', this.handleInputChange);
        });

        /** register form submit handler */
        this.view.form.addEventListener('submit', this.handleFormSubmit);

    }

    /**
     * 
     * @param {*} event handles the change of the input when there is an event in model
     */
    handleInputChange = (event) => {
        /** update model */
        let input = event.target;
        this.model[input.name] = input.value;
    }

    handleFormSubmit = (event) => {
        /** prevent the default action of a form (prevent submitting it) */
        event.preventDefault();
        this.model.persist();
    }


}