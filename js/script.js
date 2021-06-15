
// Creare un oggetto che descriva uno studente, 
// con le seguenti proprietà: nome, cognome e età. 
// Stampare a schermo attraverso un ciclo for-in tutte 
// le proprietà dell’oggetto.

var student = {
    name: "Filippo",
    surname: "Rossi",
    age: 25,
}

for (var key in student) {
    document.getElementsByClassName("studente")[0].innerHTML += "<li>" + key + ": " + student [key] + "</li>";
}

// Creare un array di oggetti di studenti. 
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  
// Ricordatevi, è un array, quindi? for.

var school = {
    studenti: [],
}

var studente1 = {
    nome: "Lara",
    cognome: "Verdi",
}

school.studenti.push(studente1);

var studente2 = {
    nome: "Massimo",
    cognome: "Gialli",
}

school.studenti.push(studente2);

var studente3 = {
    nome: "Francesco",
    cognome: "Bianchi",
}

school.studenti.push(studente3);

console.log(school);

for (var i = 0; i < school.studenti.length; i++){
    for (var k in school.studenti[i]) {
        console.log(k, school.studenti[i] [k]);
        document.getElementsByClassName("studenti")[0].innerHTML += "<li>" + k + ": " + school.studenti[i] [k] + "</li>";
    }
}

// Dare la possibilità all’utente, attraverso 3 prompt() - 
// uno per ciascuna proprietà - di aggiungere UN SOLO oggetto studente
// inserendo nell’ordine: nome, cognome e età.

var newStudent = {};

newStudent.nome = prompt("Inserisci il tuo nome");
newStudent.cognome = prompt("Inserisci il tuo cognome");
newStudent.età = prompt("Inserisci la tua età");

console.log(newStudent);

for (var y in newStudent) {
    document.getElementsByClassName("studenti2")[0].innerHTML += "<li>" + y + ": " + newStudent [y] + "</li>";
}






