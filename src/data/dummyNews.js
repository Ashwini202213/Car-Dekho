
const dummyNews = [
    {
      title: 'Renault Cars Get Savings Of Up To Rs 48,000 This July',
      description: 'Renault is offering an optional rural discount of Rs 4,000 on all cars, but it cannot be combined with the corporate discount',
      authername: 'S',
      name: 'Shreyash',
      date: 'Jul 08, 2024',
      category: 'Renault Kwid',
      imageUrl: '../../src/assets/images/NewsAndReviews/GeneralNew3.jpg'
    },
    {
      title: 'These Were The Most Sought-after Car Brands Of June 2024',
      description: 'Maruti Suzuki remained the top-selling brand, while Toyota recorded the highest month-on-month (MoM) and year-on-year (YoY) growth in June 2024',
      authername: 'S',
      name: 'Shreyash',
      date: 'Jul 06, 2024',
      category: 'Maruti Suzuki', 
      imageUrl: '../../src/assets/images/NewsAndReviews/car1.jpg'
    },
    {
      title: 'Car News That Mattered This Week (July 1-5): Maruti Brezza Urbano Edition Launched, 2024 Nissan X-Trail New Teaser Out, Fresh Spy Shots Of Upcoming Cars And More',
      description: 'The Mahindra Scorpio N’s feature suite has been upgraded with three new features too',
      authername: 'd',
      name: 'Dipan',
      date: 'Jul 06, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/car2.jpg'
    },
    {
      title: 'Grab Discounts Of Up To Rs 2 Lakh On Some Hyundai Cars This July',
      description: 'Published On Jul 07, 2024 10:01 AM By Yashika for Hyundai Grand i10 Nios',
      authername: 'y',
      name: 'Yashika',
      date: 'Jul 07, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/OfferStories.jpg'
    },
    {
      title: 'New Renault Duster Scores 3 Stars In Euro NCAP Crash Tests',
      description: 'It has scored 28.1/40 and 41.6/49 in adult occupant protection and child occupant protection, respectively',
      authername: 's',
      name: 'Dipan',
      date: 'Jul 16, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/GeneralNewP-2-2.jpg'
    },
    {
      title: 'Tata Curvv And Curvv EV To Debut On This Date',
      description: 'The Tata Curvv and Curvv EV will be unveiled on July 19, while the prices for the EV version will be announced first on August 7, 2024',
      authername: 'a',
      name: 'Shreyash',
      date: 'Jul 16, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/GeneralNew2.jpg'
    },
    {
      title: 'Facelifted Skoda Kushaq And Skoda Slavia India Launch Timeline Confirmed',
      description: 'The 2026 Slavia and Kushaq will only undergo design and feature updates inside and out, while likely using the same powertrain options as their current versions',
      authername: 's',
      name: 'Shreyash',
      date: 'Jul 16, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/GeneralNewP-2-7.jpg'
    },
    {
      title: '10 Things The Mahindra Thar 5-Door Is Expected To Get Over The Force Gurkha 5-door',
      description: 'The Mahindra Thar 5-door will also be more powerful than the 5-door Force Gurkha',
      authername: 'd',
      name: 'Dipan',
      date: 'Jul 16, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/GeneralNewP-2-8.jpg'
    },
    {
      title: '2024 MG Experience Drive: Driving the Hector Through The Scenic Himachal Pradesh Covering Jibhi And Narkanda',
      description: 'A memorable drive through some of the most challenging yet beautiful roads of our country in the Hector SUV',
      authername: 'y',
      name: 'Yashein',
      date: 'Jul 16, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/FeatureP-2.jpg'
    },
    {
      title: 'Renault Cars Get Savings Of Up To Rs 48,000 This July',
      description: 'Renault is offering an optional rural discount of Rs 4,000 on all cars, but it cannot be combined with the corporate discount',
      authername: 'S',
      name: 'Shreyash',
      date: 'Jul 09, 2024',
      category: 'Renault Kwid',
      imageUrl: '../../src/assets/images/NewsAndReviews/ElectricCarP-2.jpg'
    },
    {
      title: 'These Were The Most Sought-after Car Brands Of June 2024',
      description: 'Maruti Suzuki remained the top-selling brand, while Toyota recorded the highest month-on-month (MoM) and year-on-year (YoY) growth in June 2024',
      authername: 'S',
      name: 'Shreyash',
      date: 'Jul 05, 2024',
      category: 'Maruti Suzuki', 
      imageUrl: '../../src/assets/images/NewsAndReviews/GeneralNewP-2-4.jpg'
    },
    {
      title: 'Car News That Mattered This Week (July 1-5): Maruti Brezza Urbano Edition Launched, 2024 Nissan X-Trail New Teaser Out, Fresh Spy Shots Of Upcoming Cars And More',
      description: 'The Mahindra Scorpio N’s feature suite has been upgraded with three new features too',
      authername: 'd',
      name: 'Dipan',
      date: 'Jul 02, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/ElectricCarP-2-3.jpg'
    },
    {
      title: 'Grab Discounts Of Up To Rs 2 Lakh On Some Hyundai Cars This July',
      description: 'Published On Jul 07, 2024 10:01 AM By Yashika for Hyundai Grand i10 Nios',
      authername: 'y',
      name: 'Yashika',
      date: 'Jul 10, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/SpiedTeasersP-2-2.jpg'
    },
    {
      title: 'New Renault Duster Scores 3 Stars In Euro NCAP Crash Tests',
      description: 'It has scored 28.1/40 and 41.6/49 in adult occupant protection and child occupant protection, respectively',
      authername: 's',
      name: 'Dipan',
      date: 'Jul 12, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/ElectricCarP-2-2.jpg'
    },
    {
      title: 'Tata Curvv And Curvv EV To Debut On This Date',
      description: 'The Tata Curvv and Curvv EV will be unveiled on July 19, while the prices for the EV version will be announced first on August 7, 2024',
      authername: 'a',
      name: 'Shreyash',
      date: 'Jul 1, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/SpiedTeasersP-2-3.jpg'
    },
    {
      title: 'Facelifted Skoda Kushaq And Skoda Slavia India Launch Timeline Confirmed',
      description: 'The 2026 Slavia and Kushaq will only undergo design and feature updates inside and out, while likely using the same powertrain options as their current versions',
      authername: 's',
      name: 'Shreyash',
      date: 'Jul 3, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/SpiedTeasers.jpg'
    },
    {
      title: '10 Things The Mahindra Thar 5-Door Is Expected To Get Over The Force Gurkha 5-door',
      description: 'The Mahindra Thar 5-door will also be more powerful than the 5-door Force Gurkha',
      authername: 'd',
      name: 'Dipan',
      date: 'Jul 05, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/GeneralNewP-2-8.jpg'
    },
    {
      title: '2024 MG Experience Drive: Driving the Hector Through The Scenic Himachal Pradesh Covering Jibhi And Narkanda',
      description: 'A memorable drive through some of the most challenging yet beautiful roads of our country in the Hector SUV',
      authername: 'y',
      name: 'Yashein',
      date: 'Jul 06, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/SpiedTeasersP-2-3.jpg'
    },



    {
      title: 'Renault Cars Get Savings Of Up To Rs 48,000 This July',
      description: 'Renault is offering an optional rural discount of Rs 4,000 on all cars, but it cannot be combined with the corporate discount',
      authername: 'S',
      name: 'Shreyash',
      date: 'Jul 09, 2024',
      category: 'Renault Kwid',
      imageUrl: '../../src/assets/images/NewsAndReviews/1.jpg'
    },
    {
      title: 'These Were The Most Sought-after Car Brands Of June 2024',
      description: 'Maruti Suzuki remained the top-selling brand, while Toyota recorded the highest month-on-month (MoM) and year-on-year (YoY) growth in June 2024',
      authername: 'S',
      name: 'Shreyash',
      date: 'Jul 05, 2024',
      category: 'Maruti Suzuki', 
      imageUrl: '../../src/assets/images/NewsAndReviews/2.jpg'
    },
    {
      title: 'Car News That Mattered This Week (July 1-5): Maruti Brezza Urbano Edition Launched, 2024 Nissan X-Trail New Teaser Out, Fresh Spy Shots Of Upcoming Cars And More',
      description: 'The Mahindra Scorpio N’s feature suite has been upgraded with three new features too',
      authername: 'd',
      name: 'Dipan',
      date: 'Jul 02, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/3.jpg'
    },
    {
      title: 'Grab Discounts Of Up To Rs 2 Lakh On Some Hyundai Cars This July',
      description: 'Published On Jul 07, 2024 10:01 AM By Yashika for Hyundai Grand i10 Nios',
      authername: 'y',
      name: 'Yashika',
      date: 'Jul 10, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/4.jpg'
    },
    {
      title: 'New Renault Duster Scores 3 Stars In Euro NCAP Crash Tests',
      description: 'It has scored 28.1/40 and 41.6/49 in adult occupant protection and child occupant protection, respectively',
      authername: 's',
      name: 'Dipan',
      date: 'Jul 12, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/5.jpg'
    },
    {
      title: 'Tata Curvv And Curvv EV To Debut On This Date',
      description: 'The Tata Curvv and Curvv EV will be unveiled on July 19, while the prices for the EV version will be announced first on August 7, 2024',
      authername: 'a',
      name: 'Shreyash',
      date: 'Jul 11, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/6.jpg'
    },
    {
      title: 'Facelifted Skoda Kushaq And Skoda Slavia India Launch Timeline Confirmed',
      description: 'The 2026 Slavia and Kushaq will only undergo design and feature updates inside and out, while likely using the same powertrain options as their current versions',
      authername: 's',
      name: 'Shreyash',
      date: 'Jul 19, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/7.jpg'
    },
    {
      title: '10 Things The Mahindra Thar 5-Door Is Expected To Get Over The Force Gurkha 5-door',
      description: 'The Mahindra Thar 5-door will also be more powerful than the 5-door Force Gurkha',
      authername: 'd',
      name: 'Dipan',
      date: 'Jul 15, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/8.jpg'
    },
    {
      title: '2024 MG Experience Drive: Driving the Hector Through The Scenic Himachal Pradesh Covering Jibhi And Narkanda',
      description: 'A memorable drive through some of the most challenging yet beautiful roads of our country in the Hector SUV',
      authername: 'y',
      name: 'Yashein',
      date: 'Jul 02, 2024',
      category: 'Sports Cars',
      imageUrl: '../../src/assets/images/NewsAndReviews/9.jpg'
    },
  
    // Add more dummy news items...
  ];

  export default dummyNews;
  
  