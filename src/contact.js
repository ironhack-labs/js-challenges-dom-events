class Contact {
    static allContacts = [];
    constructor(contactObj) {
        this.name = contactObj.name;
        this.pictureUrl = contactObj.pictureUrl;
        this.popularity = contactObj.popularity.toFixed(2); // round popularity to 2 decimals
        this.wonOscar = contactObj.wonOscar;
        Contact.allContacts.push(this);        
    }
}
