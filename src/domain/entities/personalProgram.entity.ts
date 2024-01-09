export class PersonalProgramEntity {
    constructor(
        public code: string,
        public name: string,
        public status: string,
        public type: string,
        public expirationDate: string,
        public month: string,
        ){
        
    }
}