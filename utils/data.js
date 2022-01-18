import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            name: 'Yemi Adio',
            email: 'adioyemi@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Papa Jazz',
            email: 'papajazz@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'DIOR AND SACAI Sweatshirt',
            slug: 'dior-and-sacai-sweatshirt',
            category: 'Shirts',
            image: '/images/sacai.jfif',
            price: 25,
            brand: 'Dior',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Popular summer shirt',
        },
        {
            name: 'Crest Vintage Bag',
            slug: 'crest-vintage-bag',
            category: 'Bag',
            image: '/images/cross-bag.jfif',
            price: 72,
            brand: 'Gucci',
            rating: 4.7,
            numReviews: 20,
            countInStock: 40,
            description: 'Popular vintage shirt',
        },
        {
            name: 'Hoodie',
            slug: 'hoodie',
            category: 'Shirts',
            image: '/images/hoodie.jfif',
            price: 55,
            brand: 'Puma',
            rating: 3.5,
            numReviews: 30,
            countInStock: 9,
            description: 'Winter hoodie',
        },
        {
            name: 'DIOR AND SACAI Chelsea Boot',
            slug: 'dior-and-sacai-chelsea-boot',
            category: 'Shoe',
            image: '/images/shoe.jfif',
            price: 588,
            brand: 'Dior',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Popular summer shirt',
        },
        {
            name: 'DIOR AND KENNY SCHARF Cardigan',
            slug: 'dior-and-kenny-scharf-cardigan',
            category: 'Cardigan',
            image: '/images/spring.jfif',
            price: 25,
            brand: 'Dior',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Popular summer shirt',
        },
        {
            name: 'B27 Low-Top Sneaker',
            slug: 'b27-low-top-sneaker',
            category: 'Shoe',
            image: '/images/snikkers.jfif',
            price: 25,
            brand: 'Dior',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Popular summer shirt',
        },
    ],
};
export default data;