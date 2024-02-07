/// ------------------------------------  Arrenge city and state ------------------------

function arrangeCity(input) {

  let newarray = [];

  for (const state in input) {
    const cities = input[state];
    for (const city of cities) {
      newarray.push({ city, state });
    }
  }

  return newarray;
}

const input = {
  Maharashtra: [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Thane",
    "Nashik",
    "Kalyan-Dombivali",
    "Vasai-Virar",
  ],
  Delhi: ["Delhi"],
  Karnataka: ["Bengaluru"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Telangana: ["Hyderabad"],
  TamilNadu : ["Chennai"],
  WestBengal: ["Kolkata", "Siliguri"],
  Rajasthan: ["Jaipur"],
  UttarPradesh: ["Lucknow", "Kanpur", "Firozabad", "Agra", "Meerut"],
  Bihar: ["Patna"],
  MadhyaPradesh: ["Indore", "Bhopal"],
  AndhraPradesh: ["Visakhapatnam"],
  Punjab: ["Ludhiana", "Patiala"],
  Haryana: ["Faridabad"],
};

console.log(arrangeCity(input));