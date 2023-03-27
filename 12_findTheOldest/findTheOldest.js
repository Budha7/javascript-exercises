const findTheOldest = function (people) {
    const getAge = ({ yearOfBirth, yearOfDeath }) => {
    if(yearOfDeath != null) {
       return  yearOfDeath - yearOfBirth
    }else{
        yearOfDeath = new Date().getFullYear();

       return yearOfDeath - yearOfBirth
    }
    };
        let accumAge = getAge(people[0]);
        return people.reduce((accum, curr) => {
            const currAge = getAge(curr);
            if (currAge > accumAge) {
                accumAge = currAge;
                return curr;
            }
            return accum;
        });

};

// Do not edit below this line
module.exports = findTheOldest;
