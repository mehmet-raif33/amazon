const data = [
    {
        productName: 'Nike Pro Shoes',
        productImgUrl: 'https://replikayakkabi.com/wp-content/uploads/2020/11/okyanus.butik_20200607_2-1024x1024.png',
        productPrice: 312,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Gucci shirt',
        productImgUrl: 'https://cdna.lystit.com/200/250/tr/photos/mrporter/0999419c/gucci-Blue-Panelled-Cotton-jersey-And-Logo-jacquard-Silk-blend-Polo-Shirt.jpeg',
        productPrice: 149,
        buyer: 'David Bechingem',
        from: 'USA'
    },
    {
        productName: 'Prada Pants',
        productImgUrl: 'https://img-morhipo.mncdn.com/mnresize/1200/1645/productimages/2110047232888/[img][5][2][900x1234].jpg?1641',
        productPrice: 50,
        buyer: 'David Bechingem',
        from: 'France'
    },
    {
        productName: 'Channel Jeans',
        productImgUrl: 'https://media.karousell.com/media/photos/products/2022/2/13/vintage_chanel_denim_pants_pre_1644752783_6585356d',
        productPrice: 65,
        buyer: 'David Bechingem',
        from: 'Belgium'
    },
    {
        productName: 'Adidas Bracelet',
        productImgUrl: 'https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1653327015/702869_J8410_8163_001_100_0000_Light.jpg',
        productPrice: 15,
        buyer: 'David Bechingem',
        from: 'Syria'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://media.dior.com/couture/ecommerce/media/catalog/product/l/Q/1655808313_244G52LN320_X0849_E01_GHC.jpg?imwidth=800',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Nike Pro Shoes',
        productImgUrl: 'https://replikayakkabi.com/wp-content/uploads/2020/11/okyanus.butik_20200607_2-1024x1024.png',
        productPrice: 312,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Gucci shirt',
        productImgUrl: 'https://cdna.lystit.com/200/250/tr/photos/mrporter/0999419c/gucci-Blue-Panelled-Cotton-jersey-And-Logo-jacquard-Silk-blend-Polo-Shirt.jpeg',
        productPrice: 149,
        buyer: 'David Bechingem',
        from: 'USA'
    },
    {
        productName: 'Prada Pants',
        productImgUrl: 'https://img-morhipo.mncdn.com/mnresize/1200/1645/productimages/2110047232888/[img][5][2][900x1234].jpg?1641',
        productPrice: 50,
        buyer: 'David Bechingem',
        from: 'France'
    },
    {
        productName: 'Channel Jeans',
        productImgUrl: 'https://media.karousell.com/media/photos/products/2022/2/13/vintage_chanel_denim_pants_pre_1644752783_6585356d',
        productPrice: 65,
        buyer: 'David Bechingem',
        from: 'Belgium'
    },
    {
        productName: 'Adidas Bracelet',
        productImgUrl: 'https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1653327015/702869_J8410_8163_001_100_0000_Light.jpg',
        productPrice: 15,
        buyer: 'David Bechingem',
        from: 'Syria'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://media.dior.com/couture/ecommerce/media/catalog/product/l/Q/1655808313_244G52LN320_X0849_E01_GHC.jpg?imwidth=800',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    },
    {
        productName: 'Dior Cardigan',
        productImgUrl: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
        productPrice: 129,
        buyer: 'David Bechingem',
        from: 'England'
    }
]

export default data;