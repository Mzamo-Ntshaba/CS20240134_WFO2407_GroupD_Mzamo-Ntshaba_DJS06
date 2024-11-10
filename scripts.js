// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//forEach Basics:
//log each name and each province separately
names.forEach(name => console.log(name)); //logs each name 
provinces.forEach(province => console.log(province)); //logs each province

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
}); //logs names with matching provinces in the format "Name (Province)"

//Uppercase Transformation: 
const uppercaseProvinces = provinces.map(province => province.toUpperCase())
console.log(uppercaseProvinces); //logs Provinces in uppercase

//Name Lengths:
const nameLength = names.map(name => name.length)
console.log(nameLength) //logs the length of each name

//Sorting Provinces Alphabetically using "Sort" 
const sortedProvinces = provinces.sort()
console.log(sortedProvinces) //logs provinces in alphabetical order

//filtering to remove provinces containing "Cape" 
const removeCapeProvinces = provinces.filter(province => !province.includes("Cape"))
console.log(removeCapeProvinces.length) //logs the count for provinces without the word "Cape"

//Get all names that constain letter 'S'
const S_name = names.map((name) => {
    return name.split('').some((char) => char === 'S');
});
console.log(S_name) //logs boolean array- displays true for name containing 's' else false

//Object mapping Jan-Hendrik has ' ' - fix also make sure it is an object 
const nameAndProvinceObject = names.reduce((object,name,index) =>{
  object[name] = provinces[index];
  return object;
}, {});
console.log(nameAndProvinceObject); //logs an object mapping names to their respective provinces

//Advanced exercises

console.log(
  products.map((productName) => productName.product),            //LOG TO MAP PRODUCT NAME WITH ACTUAL PROJECTS
  
  products.filter((product) => product.product.length <= 5),     //USE FILTER TO GET ALL THE PRODUCTS <5
  
  products.filter((product) => !(product.price === '' || product.price === " "))
  .reduce((sum, product) => sum + parseInt(product.price), 0),                     //PRICE MANIPULATION
  
  products.reduce((concatNames, product) => concatNames + product.product, ''),    //CONCATENATE NAMES WITH PRODUCT
 
  products
  .filter((product) => !(product.price === '' || product.price === ' '))
  .map((product) => parseInt(product.price))
  .reduce((result, price) => {
  result.Highest = Math.max(result.Highest || 0, price);
  result.Lowest = Math.min(result.Lowest || price, price);                       //EXTREMES IN PRICES
  return result;
  }, { Highest: undefined, Lowest: undefined }),
  
  products.reduce((result, product) => {
    const updatedProduct = Object.fromEntries(
      Object.entries(product).map(([key, value]) => {
        if (key === 'product') return ['name', value];               ///OBJECT TRANSORMATION
        if (key === 'price') return ['cost', value]
        return [key, value];
      })
    );
    result.push(updatedProduct);
    return result;
  }, [])
  );



  






