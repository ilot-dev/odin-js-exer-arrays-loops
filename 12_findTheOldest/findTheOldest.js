const findTheOldest = function(people) {
    people.map((person) => {
        if ('yearOfDeath' in person) {
            person['age'] = person.yearOfDeath - person.yearOfBirth;
        }
        else {
            let currentYear = new Date().getFullYear();
            person['age'] = currentYear - person.yearOfBirth;
        }
    });

    let currentOldestAge = 0;
    let oldestPerson;
    for (person of people){
        if (person.age > currentOldestAge) {
            currentOldestAge = person.age
            oldestPerson = person;
        }
    }
    return oldestPerson;
    
};

// Do not edit below this line
module.exports = findTheOldest;
