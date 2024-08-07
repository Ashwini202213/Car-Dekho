const carTypes = [

    { id: 1, value: "Hatchback" },
    { id: 2, value: "Sedan" },
    { id: 3, value: "SUV" },
    { id: 4, value: "MUV" },
    { id: 5, value: "Luxury" },
    { id: 6, value: "Super Luxury" },
    { id: 7, value: "Convetible" },
    { id: 8, value: "Hybrid" },
    { id: 9, value: "Coupe" },
    { id: 10, value: "Pickup Truck" },
    { id: 12, value: "Minivan" },
    { id: 13, value: "Wagon" },
]
const carsByPrice = [
    { id: 1, image: "../../src/assets/images/newCars/carouselCar/maruti-alto.jpg", name: "Maruti Alto K10",price:"Rs3.99 - 5.96 Lakh*" },
    { id: 2, image: "../../src/assets/images/newCars/carouselCar/maruti-celerio.jpg", name: "Maruti Celerio",price:"Rs4.99 - 7.04 Lakh*" },
    { id: 3, image: "../../src/assets/images/newCars/carouselCar/renault-kwid.jpg", name: "Renault Kwid",price:"Rs4.70 - 6.45 Lakh*" },
    { id: 4, image: "../../src/assets/images/newCars/carouselCar/maruti-s-presson.jpg", name: "Maruti S Presso",price:"Rs4.26 - 6.12 Lakh*" },
    // {id:5, image:"../../src/assets/images/newCars/carouselCar/bajaj-qute.jpg",name:"dfd",price:"dfdf"}
]


const carBudget = [
    { id: 1, budget: "1-5Lakh" },
    { id: 2, budget: "5-10Lakh" },
    { id: 3, budget: "10-15Lakh" },
    { id: 4, budget: "15-20Lakh" },
    { id: 5, budget: "20-35Lakh" },
    { id: 6, budget: "35-50Lakh" },
    { id: 7, budget: "50Lakh - 1Crore" },
    { id: 8, budget: "Above 1Crore" }
]


const carLogos = [
    { id: 1, name: "Maruti", logo: "../../src/assets/images/newCars/logos/current/maruti.jpg" },
    { id: 2, name: "Tata", logo: "../../src/assets/images/newCars/logos/current/tata.jpg" },
    { id: 3, name: "Kia", logo: "../../src/assets/images/newCars/logos/current/kia.jpg" },
    { id: 4, name: "Toyota", logo: "../../src/assets/images/newCars/logos/current/toyota.jpg" },
    { id: 5, name: "Hyundai", logo: "../../src/assets/images/newCars/logos/current/hyundai.jpg" },
    { id: 6, name: "Mahindra", logo: "../../src/assets/images/newCars/logos/current/mahindra.jpg" },
    { id: 7, name: "Honda", logo: "../../src/assets/images/newCars/logos/current/honda.jpg" },
    { id: 8, name: "MG", logo: "../../src/assets/images/newCars/logos/current/mg.jpg" },
    { id: 9, name: "Skoda", logo: "../../src/assets/images/newCars/logos/current/skoda.jpg" },
    { id: 10, name: "Jeep", logo: "../../src/assets/images/newCars/logos/current/jeep.jpg" },
    { id: 11, name: "Renault", logo: "../../src/assets/images/newCars/logos/current/renault.jpg" },
    { id: 12, name: "Nissan", logo: "../../src/assets/images/newCars/logos/current/nissan.jpg" },
    { id: 13, name: "Volkswagen", logo: "../../src/assets/images/newCars/logos/current/volkswagen.jpg" },
    { id: 14, name: "Citroen", logo: "../../src/assets/images/newCars/logos/current/citroen.jpg" },
    { id: 15, name: "Aston Martin", logo: "../../src/assets/images/newCars/logos/current/aston-martin.jpg" },
    { id: 16, name: "Audi", logo: "../../src/assets/images/newCars/logos/current/audi.jpg" },
    { id: 17, name: "Bajaj", logo: "../../src/assets/images/newCars/logos/current/bajaj.jpg" },
    { id: 18, name: "Bentley", logo: "../../src/assets/images/newCars/logos/current/bentley.jpg" },
    { id: 19, name: "BMW", logo: "../../src/assets/images/newCars/logos/current/bmw.jpg" },
    { id: 20, name: "BYD", logo: "../../src/assets/images/newCars/logos/current/byd.jpg" },
    { id: 21, name: "Ferrari", logo: "../../src/assets/images/newCars/logos/current/ferrari.jpg" },
    { id: 22, name: "Force", logo: "../../src/assets/images/newCars/logos/current/force.jpg" },
    { id: 23, name: "Isuzu", logo: "../../src/assets/images/newCars/logos/current/isuzu.jpg" },
    { id: 24, name: "Jaguar", logo: "../../src/assets/images/newCars/logos/current/jaguar.jpg" },
    { id: 25, name: "Haval", logo: "../../src/assets/images/newCars/logos/cpcoming/haval.jpg" },
    { id: 26, name: "Koeinigsegg", logo: "../../src/assets/images/newCars/logos/cpcoming/koenigsegg.jpg" },
    { id: 27, name: "Mahindra BE", logo: "../../src/assets/images/newCars/logos/cpcoming/mahindra-be.jpg" },
    { id: 28, name: "Mahindra XUV", logo: "../../src/assets/images/newCars/logos/cpcoming/mahindra-xuv.jpg" },
    { id: 29, name: "Mean Metal", logo: "../../src/assets/images/newCars/logos/cpcoming/mean-metal.jpg" },
    { id: 30, name: "Vayve Mobility", logo: "../../src/assets/images/newCars/logos/cpcoming/vayve-mobility.jpg" },
    { id: 31, name: "Vinfast", logo: "../../src/assets/images/newCars/logos/cpcoming/vinfast.jpg" },
    { id: 32, name: "Xiaomi", logo: "../../src/assets/images/newCars/logos/cpcoming/xiaomi.jpg" },
    { id: 33, name: "Ashok-Leylond", logo: "../../src/assets/images/newCars/logos/cxpired/ashok-leylond.jpg" },
    { id: 34, name: "Austin", logo: "../../src/assets/images/newCars/logos/cxpired/austin.jpg" },
    { id: 35, name: "Cadillac", logo: "../../src/assets/images/newCars/logos/cxpired/cadillac.jpg" },
    { id: 36, name: "Caterham", logo: "../../src/assets/images/newCars/logos/cxpired/caterham.jpg" },
    { id: 37, name: "Chevrolet", logo: "../../src/assets/images/newCars/logos/cxpired/chevrolet.jpg" },
    { id: 38, name: "Chrysler", logo: "../../src/assets/images/newCars/logos/cxpired/chrysler.jpg" },
    { id: 39, name: "Conquest", logo: "../../src/assets/images/newCars/logos/cxpired/conquest.jpg" },
    { id: 40, name: "Daewoo", logo: "../../src/assets/images/newCars/logos/cxpired/daewoo.jpg" },
    { id: 41, name: "Datsun", logo: "../../src/assets/images/newCars/logos/cxpired/datsun.jpg" },
    { id: 42, name: "DC", logo: "../../src/assets/images/newCars/logos/cxpired/dc.jpg" },
    { id: 43, name: "Dodge", logo: "../../src/assets/images/newCars/logos/cxpired/dodge.jpg" },
    { id: 44, name: "Fiat", logo: "../../src/assets/images/newCars/logos/cxpired/fiat.jpg" },
    { id: 45, name: "Hummer", logo: "../../src/assets/images/newCars/logos/cxpired/hummer.jpg" },
    { id: 46, name: "Icml", logo: "../../src/assets/images/newCars/logos/cxpired/icml.jpg" },
    { id: 47, name: "Infiniti", logo: "../../src/assets/images/newCars/logos/cxpired/infiniti.jpg" },
    { id: 48, name: "Mahindra-Ssangyong", logo: "../../src/assets/images/newCars/logos/cxpired/mahindra-ssangyong.jpg" },
    { id: 49, name: "Maybach", logo: "../../src/assets/images/newCars/logos/cxpired/maybach.jpg" },
    { id: 50, name: "Mazda", logo: "../../src/assets/images/newCars/logos/cxpired/mazda.jpg" },
    { id: 51, name: "Morris", logo: "../../src/assets/images/newCars/logos/cxpired/morris.jpg" },
    { id: 52, name: "Reva", logo: "../../src/assets/images/newCars/logos/cxpired/reva.jpg" },
]



export { carLogos, carBudget, carTypes, carsByPrice }