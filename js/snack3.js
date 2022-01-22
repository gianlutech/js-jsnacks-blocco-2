console.log('js ok')
/* 
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

const fakeInvites = [];
const firstName = ['Mattia', 'Filippo', 'Andrea', 'Raffaele', 'Marta'];
const lastName = ['Stievano', 'Di Bella', 'Antonelli', 'De Lucia'];

while (fakeInvites.lenght < 3) {
    const randNumber1 = Math.floor(Math.random() * firstName.length);
    const randNumber2 = Math.floor(Math.random() * lastName.length);

    const name1 = firstName[randNumber1];
    const lastName1 = lastName[randNumber2];

    const fakePerson = `${name1} ${lastName1}`;

    console.log('fake:', fakePerson);

    if (!fakeInvites.includes(fakePerson)) {
        fakeInvites.push(fakePerson);
    }
}
console.log(fakeInvites);