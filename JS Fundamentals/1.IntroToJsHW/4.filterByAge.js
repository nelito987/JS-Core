/**
 * Created by Neli on 25.5.2017 г..
 */
function hi(minAgeValue, nameA, ageA, nameB, ageB) {
    let personA = {name: nameA, age: Number(ageA)};
    let personB = {name: nameB, age: Number(ageB)};

    let minAge = Number(minAgeValue);
    if (Number(ageA) >= minAge)
        console.log(personA);

    if (Number(ageB) >= minAge)
        console.log(personB);
}
hi(12, 'Ivan', 15, 'Asen', 9);