export class FormControl {

    constructor(formState = null) {
        this.formState = formState;
        this.statusChanges;
        this.valueChanges;
    }
    setValue(value, emitEvent = true) {
        if ( emitEvent ) {

        }
    }

}
