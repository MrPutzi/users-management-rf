export class user {
    constructor(
        public name: string,
        public email: string,
        public id?: number,
        public lastLogin?: Date,
        public password = ''
    ) { }

    public toString(){
        return this.name + " " + this.email + " "
    }
}
