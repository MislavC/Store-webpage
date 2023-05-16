/**
 * Project 1 - Hat Shop 
 * ISTE-340-800
 * Mislav Čuljak
 */

import { selectData } from '../store/selectData.js';

export class HatModel {
    /** external source */
    static store = selectData;
    /**
     * Creates an object representing the hat model.
     * 
     * @param {String} material - The material of the hat.
     * @param {String} type - The type of the hat.
     * @param {String} gender - The gender of the hat.
     * @returns {HatModel} The object representing the hat model.
     */
    constructor() {
        this.material = "undefined";
        this.type = "undefined";
        this.gender = "undefined";
    }

    /**
     * Returns an array of this object's properties names.
     * The returned array is used by View to dynamically render the selects. 
     * For each Model property, a select is being rendered in View.
     * 
     * @returns {Array} array of property names (strings)
     */
    getProperties() {
        return Object.keys(this);
    }

    /**
     * Gets the data from the external resource to be used as select options.
     * 
     * @param {String} selectID - select ID
     * @returns {Array} array of select's options (strings)
     */
    getOptions(selectID) {
        /** 1. extract the data from the external resource (HatModel.store). */
        let options; /**  a JS object */
        switch (selectID) {
            case 'material':
                options = Object.keys(HatModel.store);
                /**  ["cotton", "polyester"] */
                break;
            case 'type':
                options = Object.keys(HatModel.store[this.material]);
                /** ["traveller", "trucker"]} OR ["bucker", "trucker] */
                break;
            case 'gender':
                options = Object.keys(HatModel.store[this.material][this.type]);
                /** ["female", "male"]} OR ["female", "male] */
                break;
        }

        /** 2. return select options */
        return options;
    }


    /**
     * Resets this object's properties to "undefined". Not all properties are
     * going to be reset, only those that are listed after the property defined 
     * by this method parameter. 
     * 
     * @param {String} property  resets next property
     */
    resetNextProperties(property) {
        let properties = Object.keys(this);
        let index = properties.indexOf(property);
        while (++index < properties.length) {
            this[properties[index]] = "undefined";
        }
    }

    /**
     * adds to local storage
     * @returns {undefined}
     */
    persist() {
        localStorage.setItem('hat', JSON.stringify(this));
    }


}