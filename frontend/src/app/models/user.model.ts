import { BaseModel } from './base.model';

export class User extends BaseModel {

    static fields: string[] = [
        'id',
        'password',
        'firstName',
        'lastName',
        'email',
        'registerDate'
    ];

    id: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    registerDate: string;

    constructor(obj?: any) {
        super();
        this.init(User.fields, obj);
    }

    static initArray(array: any[]) {
        let arrayInstances = [];
        if(array && array.length > 0) {
            array.forEach(e => arrayInstances.push(new User(e)));
        }
        return arrayInstances;
    }

    validate(): boolean | string[] {
        let valid: string[] = [];

        if(!this.id && !this.password) {
            valid.push('password');
        }
        if(!this.firstName) {
            valid.push('firstName');
        }
        if(!this.lastName) {
            valid.push('lastName');
        }
        if(!this.email) {
            valid.push('email');
        }

        if(valid.length > 0) {
            return valid;
        } else {
            return true;
        }
    }
}