export interface Contact {
    firstname: string;
    lastname: string;
    phone: string;
}

export function IsContactValid(contact: Contact): boolean {
    return !!contact.firstname && contact.firstname.length && contact.firstname.length < 256 &&
           !!contact.lastname && contact.lastname.length && contact.lastname.length < 256 &&
           !!contact.phone && contact.phone.length && /^[+][1-9][\d][\s][\d]{2}[\s][\d]{6,}$/.test(contact.phone);
}