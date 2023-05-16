/**
 * Project 1 - Hat Shop 
 * ISTE-340-800
 * Mislav Čuljak
 */

export class HatController {
    /**
     * Creates an object representing the hat controller.
     * 
     * @param {type} model - The model the controller interacts with.
     * @param {type} view - The view the controller interatcs with.
     * @returns {HatController} The object representing the hat controller.
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;

        /** 1. render all selects */
        let properties = this.model.getProperties();
        this.view.renderSelects(properties);

        /** 2. populate the first select */
        let firstSelectID = properties[0];
        this.view.addOptions(firstSelectID, this.model.getOptions(firstSelectID));

        /** 3. register one event handler for all select 'change' events */
        this.view.selects.forEach((select) => {
            select.addEventListener('change', this.handleSelectChange);
        });

        /** 4. register from submit */
        this.view.hatForm.addEventListener('submit', this.handleFormSubmit);




    }

    /**
     * 
     * @param {*} event 
     */
    handleSelectChange = (event) => {
        let select = event.target;

        /*
         *1. UPDATE MODEL ------------------------------------------------------
         *Once the current model property is update, the other model properties
         *that are defined after the current property, they need to be reset to 
         *"undefined".
         */
        this.model[select.id] = select.value;
        this.model.resetNextProperties(select.id);
        console.log(this.model);

        /** 
         *2. UPDATE VIEW (selectsDiv + hatDiv -------------------------------    
         *2.1 Update the selectsDiv - reset next selects & load new options into
         *the next select only if the current selected option is different than 
         * '-- Select the ... --', which index is 0
         */
        this.view.resetNextSiblings(select.id);
        let nextSelect = select.nextElementSibling;
        if (select.selectedIndex > 0 && nextSelect) {
            this.view.addOptions(nextSelect.id, this.model.getOptions(nextSelect.id));
        }

        /* 2.2. Update the hatDiv */
        this.view.renderHat();
    }

    handleFormSubmit = (event) => {
        /** prevent the default action of a form (prevent submitting it) */
        this.model.persist();
    }


}

