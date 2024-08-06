import { Link } from "react-router-dom";
// import Arrow from "../components/Common/Arrow";
// import Button from "../components/Common/Button";
// import CarServiceHistory from "../pages/Car services/carServiceHistory";
// import '../pages/CarServices/carServices.css';

export const newlyLauchedCars = [{
    id: 1,
    className: 'carSize',
    name: 'car service history',
    price: '₹299',
    image: '../../src/assets/images/carService/carServiceHistory.jpg',
    offer: '₹500 40% off',
    // component: <Button name='Get report' className='btn' arrow={<Arrow />} />
    link: <Link to='/carServiceHistory'>Get reports</Link>
},
{
    id: 2,
    className: 'carSize',
    name: 'RTO car service',
    price: '₹199',
    image: '../../src/assets/images/carService/RTORecordService.jpg',
    offer: '₹299 33% off',
    // component: <Button name='Get report' className='btn' arrow={<Arrow />} />
    link: <Link to='/carServiceHistory'>Get reports</Link>

},
{
    id: 3,
    className: 'carSize',
    name: 'CarDekho Connected cars(OBD)',
    price: '₹1800',
    image: '../../src/assets/images/carService/carServiceHistory.jpg',
    offer: '₹2000 10% off',
    // component: <Button name='Get report' className='btn' arrow={<Arrow />} />
    link: <Link to='/carServiceHistory'>Get reports</Link>

}]

export const reviewCard = [
    {
        id: 1,
        name: 'Yadvinder Singh',
        detail: ' wrote a review on 15 May',
        review: 'V gud and quick to know abt ur pending challans'
    },
    {
        id: 2,
        name: 'Yusuf Ali',
        detail: ' wrote a review on 02 Mar',
        review: 'Very good is per chalane bhugtan Bhi To Hona chahie Ek option Aana chahie'
    }, {
        id: 3,
        name: 'Rajiv Seth',
        detail: ' wrote a review on 19 Jan',
        review: 'Thanks for the detailed information. Its nice to note that all challans are prior to my owing this vehicle.'
    }
]

export const listData = [
    {
        id: 1,
        image: "../../src/assets/images/carService/service.svg",
        head: '1. Select your service',
        content: 'Choose the specific service you need for your car.'
    },
    {
        id: 2,
        image: "../../src/assets/images/carService/carDetails.svg",
        head: '2. Enter your car details',
        content: 'Provide the necessary information about your car, such as registration number, make, model and year.'
    },
    {
        id: 3,
        image: "../../src/assets/images/carService/bookService.svg",
        head: '3. Book your service',
        content: 'Schedule an appointment for the selected service.'
    },
    {
        id: 4,
        image: "../../src/assets/images/carService/payOnline.svg",
        head: '4. Pay online and enjoy the service',
        content: 'Make the payment online and enjoy the convenience of the service being provided to your car.'
    }
]