import {LightningElement} from 'lwc';
import getRoommates from '@salesforce/apex/RoommateController.getRoommates';
export default class List extends LightningElement {
    error;
    records;

    connectedCallback() {
        getRoommates()
        .then(result=>{
            this.records=result;
            this.error=undefined;
            console.log(result);
        })
        .catch(error=>{
            this.records=undefined;
            this.error=error;
        })
    }
}