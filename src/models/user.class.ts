export class User {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    customUserId?: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.email = obj ? obj.email : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.customUserId = obj ? obj.customUserId : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            customUserId: this.customUserId
        }
    }
}