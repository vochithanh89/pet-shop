(function () {
    const products = [
        {
            id: 1,
            name: 'Onesie dog pj',
            price: 27,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam.',
            thunail: '../../assets/images/products/1.jpg',
            images: [
                '../../assets/images/products/1.jpg',
                '../../assets/images/products/1_2.jpg',
                '../../assets/images/products/1_3.jpg',
                '../../assets/images/products/1_4.jpg',
            ],
            categoryId: 1,
        },
        {
            id: 2,
            name: 'Warm raincoat',
            price: 58,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam.',
            thunail: '../../assets/images/products/1.jpg',
            images: [
                '../../assets/images/products/2.jpg',
                '../../assets/images/products/2_2.jpg',
                '../../assets/images/products/2_3.jpg',
            ],
            categoryId: 1,
        },
        {
            id: 3,
            name: 'Dog jersey',
            price: 100,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam.',
            thunail: '../../assets/images/products/3.jpg',
            images: [
                '../../assets/images/products/3.jpg',
                '../../assets/images/products/3_2.jpg',
                '../../assets/images/products/3_3.jpg',
            ],
            categoryId: 1,
        },
        {
            id: 4,
            name: 'Dog pj',
            price: 27,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam.',
            thunail: '../../assets/images/products/4.jpg',
            images: [
                '../../assets/images/products/4.jpg',
                '../../assets/images/products/4_2.jpg',
                '../../assets/images/products/4_3.jpg',
            ],
            categoryId: 1,
        },
        {
            id: 5,
            name: 'Mouse bell',
            price: 58,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam.',
            thunail: '../../assets/images/products/5.jpg',
            images: [
                '../../assets/images/products/5.jpg',
                '../../assets/images/products/5_2.jpg',
                '../../assets/images/products/5_3.jpg',
            ],
            categoryId: 2,
        },
        {
            id: 6,
            name: 'Toy scratcher',
            price: 48,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam.',
            thunail: '../../assets/images/products/6.jpg',
            images: [
                '../../assets/images/products/6.jpg',
                '../../assets/images/products/6_2.jpg',
                '../../assets/images/products/6_3.jpg',
            ],
            categoryId: 2,
        },
        {
            id: 7,
            name: 'Cat play house',
            price: 200,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam.',
            thunail: '../../assets/images/products/7.jpg',
            images: [
                '../../assets/images/products/7.jpg',
                '../../assets/images/products/7_2.jpg',
                '../../assets/images/products/7_3.jpg',
            ],
            categoryId: 2,
        },
        {
            id: 8,
            name: 'Monthly crate',
            price: 89,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam.',
            thunail: '../../assets/images/products/8.jpg',
            images: [
                '../../assets/images/products/8.jpg',
                '../../assets/images/products/8_2.jpg',
                '../../assets/images/products/8_3.jpg',
            ],
            categoryId: 3,
        },
        {
            id: 9,
            name: 'Toy ball shaped',
            price: 25,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam.',
            thunail: '../../assets/images/products/9.jpg',
            images: [
                '../../assets/images/products/9.jpg',
                '../../assets/images/products/9_2.jpg',
                '../../assets/images/products/9_3.jpg',
            ],
            categoryId: 4,
        },
        {
            id: 10,
            name: 'Chew toy',
            price: 28,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam.',
            thunail: '../../assets/images/products/10.jpg',
            images: [
                '../../assets/images/products/10.jpg',
                '../../assets/images/products/10_2.jpg',
                '../../assets/images/products/10_3.jpg',
            ],
            categoryId: 4,
        },
    ];
    
    const categories = [
        {
            id: 1,
            name: 'Dogs',
            description: ''
        }, {
            id: 2,
            name: 'Cats',
            description: ''
        },
        {
            id: 3,
            name: 'Clothes',
            description: ''
        },
        {
            id: 4,
            name: 'Toys',
            description: ''
        },
    ];

    const roles = [
        {
            id: 1,
            name: 'Admin',
        },
        {
            id: 2,
            name: 'Content manager',
        },
        {
            id: 3,
            name: 'Customer',
        },
    ];

    const users = [
        {
            id: 1,
            name: 'thanh',
            password: '123456',
            roleId: 1,
        },
    ];

    const isProductsInLS = !!localStorage.getItem('products');
    const isCategoriesInLS = !!localStorage.getItem('categories');
    const isRolesInLS = !!localStorage.getItem('roles');
    const isUsersInLS = !!localStorage.getItem('users');

    if (!isProductsInLS) {
        localStorage.setItem('products', JSON.stringify(products));
    }

    if (!isCategoriesInLS) {
        localStorage.setItem('categories', JSON.stringify(categories));
    }

    if (!isRolesInLS) {
        localStorage.setItem('roles', JSON.stringify(roles));
    }

    if (!isUsersInLS) {
        localStorage.setItem('users', JSON.stringify(users));
    }


})();