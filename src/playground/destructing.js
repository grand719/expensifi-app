//OBJECT DESTRUCTURING

// const person = {
//     name: 'Lukasz',
//     age: 20,
//     location: {
//         city: 'warsaw',
//         temp: 20
//     }
// };

// const {name, age, location} = person

// const {city, temp} = person.location

// console.log(`${name} fsdbaklfb ${age} dsadasda ${city} ${temp}`)

//ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'new your'] = address;
console.log(`  ${state}`)