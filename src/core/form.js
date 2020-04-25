export class Form {
    constructor(container, controls) {
        this.container = container;
        this.controls = controls;
    }

    value() {
        const value = {};
        Object.keys(this.controls).forEach(control => {
            value[control] = this.form[control].value
        });
        return value;
    }
}