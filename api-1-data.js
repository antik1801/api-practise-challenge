const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };


  console.log(person);
  document.getElementById('person-name-1').innerText=`
  ${person.result[0].name.common}
  `
  document.getElementById('age-1').innerText=`
  ${person.result[0].age}
  `
  document.getElementById('address-1').innerText =`
  ${person.result[0].address.street}  Hosue no- ${person.result[0].address.house}
  `
  document.getElementById('person-name-2').innerText=`
  ${person.result[1].name.common}
  `
  document.getElementById('age-2').innerText=`
  ${person.result[1].age}
  `
  document.getElementById('address-2').innerText =`
  ${person.result[1].address.street}  Hosue no- ${person.result[0].address.house}
  `