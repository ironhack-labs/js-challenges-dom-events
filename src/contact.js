class Contact {
    static allContacts = [];
    constructor(randomContact) {
        this.name = randomContact.name;
        this.pictureUrl = randomContact.pictureUrl;
        this.popularity = randomContact.popularity.toFixed(2); // round popularity to 2 decimals
        this.wonOscar = randomContact.wonOscar;
        Contact.allContacts.push(this);
    }
}






console.log(newContact);
console.log(Contact.allContacts);


