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
    { id: 1, image: "../../src/assets/images/car-carousel/carprice/1-5lakh/maruti-alto.jpg", name: "Maruti Alto K10", price: "Rs3.99 - 5.96 Lakh*", btnText: "Get On-Road Price" },
    { id: 2, image: "../../src/assets/images/car-carousel/carprice/1-5lakh/maruti-celerio.jpg", name: "Maruti Celerio", price: "Rs4.99 - 7.04 Lakh*", btnText: "Get On-Road Price" },
    { id: 3, image: "../../src/assets/images/car-carousel/carprice/1-5lakh/renault-kwid.jpg", name: "Renault Kwid", price: "Rs4.70 - 6.45 Lakh*", btnText: "Get On-Road Price" },
    { id: 4, image: "../../src/assets/images/car-carousel/carprice/1-5lakh/maruti-s-presson.jpg", name: "Maruti S Presso", price: "Rs4.26 - 6.12 Lakh*", btnText: "Get On-Road Price" },
    { id: 5, image: "../../src/assets/images/car-carousel/carprice/5-10lakh/maruti-swift.jpg", name: "Maruti Swift", price: "Rs6.49 - 9.60 Lakh*", btnText: "Get On-Road Price" },
    { id: 6, image: "../../src/assets/images/car-carousel/carprice/5-10lakh/tata-nexon.jpg", name: "Tata Nexon", price: "Rs8 - 15.80 Lakh*", btnText: "Get On-Road Price" },
    { id: 7, image: "../../src/assets/images/car-carousel/carprice/5-10lakh/tata-punch.jpg", name: "Tata Punch", price: "Rs6.13 - 10.20 Lakh*", btnText: "Get On-Road Price" },
    { id: 8, image: "../../src/assets/images/car-carousel/carprice/5-10lakh/xuv-3xo.jpg", name: "Mahindrea XUV 3XO", price: "Rs7.49 - 15.49 Lakh*", btnText: "Get On-Road Price" },
    { id: 9, image: "../../src/assets/images/car-carousel/carprice/10-15lakh/hyundai-creta.jpg", name: "Hyundai Creta", price: "Rs11 - 20.15 Lakh*", btnText: "Get On-Road Price" },
    { id: 10, image: "../../src/assets/images/car-carousel/carprice/10-15lakh/mahindra-scorpio.jpg", name: "Mahindra Scropio", price: "Rs13.62 - 17.42 Lakh*", btnText: "Get On-Road Price" },
    { id: 11, image: "../../src/assets/images/car-carousel/carprice/10-15lakh/mahindra-thar.jpg", name: "Mahindra Thar", price: "Rs11.35 - 17.60 Lakh*", btnText: "Get On-Road Price" },
    { id: 12, image: "../../src/assets/images/car-carousel/carprice/10-15lakh/tata-punch.jpg", name: "Tata Punch", price: "Rs 6.13 - 10.20 Lakh*", btnText: "Get On-Road Price" },
    { id: 13, image: "../../src/assets/images/car-carousel/carprice/15-20lakh/hyundai-creta.jpg", name: "Hyundai Creta", price: "Rs11 - 20.15 Lakh*", btnText: "Get On-Road Price" },
    { id: 14, image: "../../src/assets/images/car-carousel/carprice/15-20lakh/tata-punch.jpg", name: "Tata Punch", price: "Rs8 - 15.80 Lakh*", btnText: "Get On-Road Price" },
    { id: 15, image: "../../src/assets/images/car-carousel/carprice/15-20lakh/mahindra-scorpio.jpg", name: "Mahindra Scorpio", price: "Rs13.62 - 17.42 Lakh*", btnText: "Get On-Road Price" },
    { id: 16, image: "../../src/assets/images/car-carousel/carprice/15-20lakh/mahindra-thar.jpg", name: "Mahindra Thar", price: "Rs11.35 - 17.60 Lakh*", btnText: "Get On-Road Price" },
    { id: 17, image: "../../src/assets/images/car-carousel/carprice/20-35lakh/toyota-fortuner.jpg", name: "Toyota Fortuner", price: "Rs33.43 - 51.44 Lakh*", btnText: "Get On-Road Price" },
    { id: 18, image: "../../src/assets/images/car-carousel/carprice/20-35lakh/xuv-700.jpg", name: "XUV 700", price: "Rs13.99 - 26.04 Lakh*", btnText: "Get On-Road Price" },
    { id: 19, image: "../../src/assets/images/car-carousel/carprice/20-35lakh/toyota-innova-crista.jpg", name: "Toyota Innova Crista", price: "Rs19.99 - 26.55 Lakh*", btnText: "Get On-Road Price" },
    { id: 20, image: "../../src/assets/images/car-carousel/carprice/20-35lakh/hyundai-creta.jpg", name: "Hyundai Creta", price: "Rs11 - 20.15 Lakh*", btnText: "Get On-Road Price" },
    { id: 21, image: "../../src/assets/images/car-carousel/carprice/35-50lakh/toyota-fortuner.jpg", name: "Toyota Fortuner", price: "Rs33.43 - 51.44 Lakh*", btnText: "Get On-Road Price" },
    { id: 22, image: "../../src/assets/images/car-carousel/carprice/35-50lakh/toyota-hilux.jpg", name: "Toyota Hilux", price: "Rs30.40 - 37.90 Lakh*", btnText: "Get On-Road Price" },
    { id: 23, image: "../../src/assets/images/car-carousel/carprice/35-50lakh/toyota-camry.jpg", name: "Toyota Camry", price: "Rs46.17 Lakh*", btnText: "Get On-Road Price" },
    { id: 24, image: "../../src/assets/images/car-carousel/carprice/35-50lakh/bmw-x1.jpg", name: "BMW X1", price: "Rs49.50 - 52.50 Lakh*", btnText: "Get On-Road Price" },
    { id: 25, image: "../../src/assets/images/car-carousel/carprice/50lakh-1crore/landrover-defender.jpg", name: "Land Rover Defender", price: "Rs97 Lakh - 2.85 Cr*", btnText: "Get On-Road Price" },
    { id: 26, image: "../../src/assets/images/car-carousel/carprice/50lakh-1crore/mercedes-benz-cla.jpg", name: "Mercedes-Benz Cla", price: "Rs51.75 - 58.15 Lakh*", btnText: "Get On-Road Price" },
    { id: 27, image: "../../src/assets/images/car-carousel/carprice/50lakh-1crore/toyota-fortuner.jpg", name: "Toyota Fortuner", price: "Rs33.43 - 51.44 Lakh*", btnText: "Get On-Road Price" },
    { id: 28, image: "../../src/assets/images/car-carousel/carprice/50lakh-1crore/bmw-x1.jpg", name: "BMW X1", price: "Rs49.50 - 52.50 Lakh*", btnText: "Get On-Road Price" },
    { id: 29, image: "../../src/assets/images/car-carousel/carprice/above-1crore/landrover-defender.jpg", name: "Land Rover Defender", price: "Rs97 Lakh - 2.85 Cr*", btnText: "Get On-Road Price" },
    { id: 30, image: "../../src/assets/images/car-carousel/carprice/above-1crore/rangerover-landrover.jpg", name: "Rangerover Landrover", price: "Rs2.36 - 2.60 Cr*", btnText: "Get On-Road Price" },
    { id: 31, image: "../../src/assets/images/car-carousel/carprice/above-1crore/toyota-landcruiser.jpg", name: "Toyota LandCruiser 3000", price: "Rs2.10 Cr*", btnText: "Get On-Road Price" },
    { id: 32, image: "../../src/assets/images/car-carousel/carprice/above-1crore/lamborghini-urus.jpg", name: "Lamborghini Urus", price: "Rs4.18 - 4.22 Cr*", btnText: "Get On-Road Price" },
    { id: 33, image: "../../src/assets/images/car-carousel/carprice/latest-car/maruti-ignis.jpg", name: "Maruti Ignis", price: "Rs4.18 - 4.22 Cr*", btnText: "Get On-Road Price" },
    { id: 34, image: "../../src/assets/images/car-carousel/carprice/latest-car/bmw-5series.jpg", name: "BMW 5Series", price: "Rs4.18 - 4.22 Cr*", btnText: "Get On-Road Price" },
    { id: 35, image: "../../src/assets/images/car-carousel/carprice/latest-car/mini-cooper-s.jpg", name: "Mini Cooper S", price: "Rs4.18 - 4.22 Cr*", btnText: "Get On-Road Price" },
    { id: 36, image: "../../src/assets/images/car-carousel/carprice/latest-car/mini-countryman.jpg", name: "Mini Countryman Electric", price: "Rs4.18 - 4.22 Cr*", btnText: "Get On-Road Price" },
    { id: 37, image: "../../src/assets/images/car-carousel/carprice/newly-launched/car-service-history.jpg", name: "Car Service History", price: "Rs299",olderPrice:"Rs500",discount:"40% OFF", btnText: "Get On-Road Price" },
    { id: 38, image: "../../src/assets/images/car-carousel/carprice/newly-launched/rto-record-service.jpg", name: "RTO Records Service", price: "Rs199",olderPrice:"Rs299",discount:"33% OFF", btnText: "Get On-Road Price" },
    { id: 39, image: "../../src/assets/images/car-carousel/carprice/newly-launched/connect-cars.jpeg", name: "CarDekho Connected Cars (OBD) Sub..", price: "Rs1,800",olderPrice:"Rs2000",discount:"10%OFF", btnText: "Get On-Road Price" },
    { id: 40, image: "../../src/assets/images/car-carousel/carprice/newly-launched/challan-check.jpg", name: "Challan Check", price: "", btnText: "Get On-Road Price" },
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
    { id: 1, name: "Maruti", logo: "../../src/assets/images/newCars/logos/Current/maruti.jpg" },
    { id: 2, name: "Tata", logo: "../../src/assets/images/newCars/logos/Current/tata.jpg" },
    { id: 3, name: "Kia", logo: "../../src/assets/images/newCars/logos/Current/kia.jpg" },
    { id: 4, name: "Toyota", logo: "../../src/assets/images/newCars/logos/Current/toyota.jpg" },
    { id: 5, name: "Hyundai", logo: "../../src/assets/images/newCars/logos/Current/hyundai.jpg" },
    { id: 6, name: "Mahindra", logo: "../../src/assets/images/newCars/logos/Current/mahindra.jpg" },
    { id: 7, name: "Honda", logo: "../../src/assets/images/newCars/logos/Current/honda.jpg" },
    { id: 8, name: "MG", logo: "../../src/assets/images/newCars/logos/Current/mg.jpg" },
    { id: 9, name: "Skoda", logo: "../../src/assets/images/newCars/logos/Current/skoda.jpg" },
    { id: 10, name: "Jeep", logo: "../../src/assets/images/newCars/logos/Current/jeep.jpg" },
    { id: 11, name: "Renault", logo: "../../src/assets/images/newCars/logos/Current/renault.jpg" },
    { id: 12, name: "Nissan", logo: "../../src/assets/images/newCars/logos/Current/nissan.jpg" },
    { id: 13, name: "Volkswagen", logo: "../../src/assets/images/newCars/logos/Current/volkswagen.jpg" },
    { id: 14, name: "Citroen", logo: "../../src/assets/images/newCars/logos/Current/citroen.jpg" },
    { id: 15, name: "Aston Martin", logo: "../../src/assets/images/newCars/logos/Current/aston-martin.jpg" },
    { id: 16, name: "Audi", logo: "../../src/assets/images/newCars/logos/Current/audi.jpg" },
    { id: 17, name: "Bajaj", logo: "../../src/assets/images/newCars/logos/Current/bajaj.jpg" },
    { id: 18, name: "Bentley", logo: "../../src/assets/images/newCars/logos/Current/bentley.jpg" },
    { id: 19, name: "BMW", logo: "../../src/assets/images/newCars/logos/Current/bmw.jpg" },
    { id: 20, name: "BYD", logo: "../../src/assets/images/newCars/logos/Current/byd.jpg" },
    { id: 21, name: "Ferrari", logo: "../../src/assets/images/newCars/logos/Current/ferrari.jpg" },
    { id: 22, name: "Force", logo: "../../src/assets/images/newCars/logos/Current/force.jpg" },
    { id: 23, name: "Isuzu", logo: "../../src/assets/images/newCars/logos/Current/isuzu.jpg" },
    { id: 24, name: "Jaguar", logo: "../../src/assets/images/newCars/logos/Current/jaguar.jpg" },
    { id: 25, name: "Haval", logo: "../../src/assets/images/newCars/logos/Upcoming/haval.jpg" },
    { id: 26, name: "Koeinigsegg", logo: "../../src/assets/images/newCars/logos/Upcoming/koenigsegg.jpg" },
    { id: 27, name: "Mahindra BE", logo: "../../src/assets/images/newCars/logos/Upcoming/mahindra-be.jpg" },
    { id: 28, name: "Mahindra XUV", logo: "../../src/assets/images/newCars/logos/Upcoming/mahindra-xuv.jpg" },
    { id: 29, name: "Mean Metal", logo: "../../src/assets/images/newCars/logos/Upcoming/mean-metal.jpg" },
    { id: 30, name: "Vayve Mobility", logo: "../../src/assets/images/newCars/logos/Upcoming/vayve-mobility.jpg" },
    { id: 31, name: "Vinfast", logo: "../../src/assets/images/newCars/logos/Upcoming/vinfast.jpg" },
    { id: 32, name: "Xiaomi", logo: "../../src/assets/images/newCars/logos/Upcoming/xiaomi.jpg" },
    { id: 33, name: "Ashok-Leylond", logo: "../../src/assets/images/newCars/logos/Expired/ashok-leylond.jpg" },
    { id: 34, name: "Austin", logo: "../../src/assets/images/newCars/logos/Expired/austin.jpg" },
    { id: 35, name: "Cadillac", logo: "../../src/assets/images/newCars/logos/Expired/cadillac.jpg" },
    { id: 36, name: "Caterham", logo: "../../src/assets/images/newCars/logos/Expired/caterham.jpg" },
    { id: 37, name: "Chevrolet", logo: "../../src/assets/images/newCars/logos/Expired/chevrolet.jpg" },
    { id: 38, name: "Chrysler", logo: "../../src/assets/images/newCars/logos/Expired/chrysler.jpg" },
    { id: 39, name: "Conquest", logo: "../../src/assets/images/newCars/logos/Expired/conquest.jpg" },
    { id: 40, name: "Daewoo", logo: "../../src/assets/images/newCars/logos/Expired/daewoo.jpg" },
    { id: 41, name: "Datsun", logo: "../../src/assets/images/newCars/logos/Expired/datsun.jpg" },
    { id: 42, name: "DC", logo: "../../src/assets/images/newCars/logos/Expired/dc.jpg" },
    { id: 43, name: "Dodge", logo: "../../src/assets/images/newCars/logos/Expired/dodge.jpg" },
    { id: 44, name: "Fiat", logo: "../../src/assets/images/newCars/logos/Expired/fiat.jpg" },
    { id: 45, name: "Hummer", logo: "../../src/assets/images/newCars/logos/Expired/hummer.jpg" },
    { id: 46, name: "Icml", logo: "../../src/assets/images/newCars/logos/Expired/icml.jpg" },
    { id: 47, name: "Infiniti", logo: "../../src/assets/images/newCars/logos/Expired/infiniti.jpg" },
    { id: 48, name: "Mahindra-Ssangyong", logo: "../../src/assets/images/newCars/logos/Expired/mahindra-ssangyong.jpg" },
    { id: 49, name: "Maybach", logo: "../../src/assets/images/newCars/logos/Expired/maybach.jpg" },
    { id: 50, name: "Mazda", logo: "../../src/assets/images/newCars/logos/Expired/mazda.jpg" },
    { id: 51, name: "Morris", logo: "../../src/assets/images/newCars/logos/Expired/morris.jpg" },
    { id: 52, name: "Reva", logo: "../../src/assets/images/newCars/logos/Expired/reva.jpg" },
]



export { carLogos, carBudget, carTypes, carsByPrice }