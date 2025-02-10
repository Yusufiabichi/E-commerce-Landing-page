import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigCar1, bigCar2, bigCar3, customer1, customer2, shoe4, shoe5, shoe6, 
    shoe7, car4, car5, car6, car7, thumbnailCar1, thumbnailCar2, thumbnailCar3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
    { href: "#Login/Explore", label: "Login/Explore" },
];

// export const shoes = [
//     {
//         thumbnail: thumbnailShoe1,
//         bigShoe: bigShoe1,
//     },
//     {
//         thumbnail: thumbnailShoe2,
//         bigShoe: bigShoe2,
//     },
//     {
//         thumbnail: thumbnailShoe3,
//         bigShoe: bigShoe3,
//     },
// ];

export const cars = [
    {
        thumbnail: thumbnailCar1,
        bigCar: bigCar1,
    },
    {
        thumbnail: thumbnailCar2,
        bigCar: bigCar2,
    },
    {
        thumbnail: thumbnailCar3,
        bigCar: bigCar3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Cars Available' },
    { value: '10k+', label: 'Customers Satisfied' },
];

export const products = [
    {
        imgURL: car4,
        name: "BMW 3 Seiries",
        price: "N 200.20",
    },
    {
        imgURL: car5,
        name: "Marcedes Benz GLK",
        price: "$21,000.20",
    },
    {
        imgURL: car6,
        name: "Audi Y17 New",
        price: "$220.20",
    },
    {
        imgURL: car7,
        name: "BMW S7 Brand new",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Fast and Secure shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "BMW X Series", link: "/" },
            { name: "Marcedes Benz", link: "/" },
            { name: "Audi S seiries", link: "/" },
            { name: "Toyota Hilux Brands", link: "/" },
            { name: "Lexus brands", link: "/" },
            { name: "Tesla and others", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/#home" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@mangamotors.com", link: "mailto:yusufiadesigns@gmail.com" },
            { name: "+2347068538000", link: "tel:+2347068538000" },
        ],
    },
];

// [
//     {
//         post: {
//             "message": "post title",
//             "likes": 2,
//             "comments": [
//                 { "comments-message": "users comments" },
//                 { "likes": 5 }
//             ]
//         }
//     }
// ]

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];