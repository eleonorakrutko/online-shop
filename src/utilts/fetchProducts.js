const data = {
    "products": [
      {
        "id": 1,
        "name": "Холодильник",
        "category": "Техника",
        "description": "Холодильник - описание",
        "img": "https://damsovet.net/wp-content/uploads/2019/08/portativnyj-953x953.jpg",
        "price": 375
      },
      {
        "id": 2,
        "name": "Телевизор",
        "category": "Техника",
        "description": "Телевизор - описание",
        "img": "https://i.ebayimg.com/images/g/etsAAOSw9nZfYa5a/s-l1600.jpg",
        "price": 520
      },
      {
        "id": 3,
        "name": "Микроволновая печь",
        "category": "Техника",
        "description": "Микроволновая печь - описание",
        "img": "https://storage.googleapis.com/live-cds-product-images/original/372503815/372503815-1038998.jpg",
        "price": 130
      },
      {
        "id": 4,
        "name": "Велосипед",
        "category": "Спорт",
        "description": "Велосипед - описание",
        "img": "https://proweb.by/wp-content/uploads/2020/04/s120463420.jpg",
        "price": 850
      },
      {
        "id": 5,
        "name": "Шахматы",
        "category": "Спорт",
        "description": "Шахматы - описание",
        "img": "https://pict.belvedor.com/4/5b/45bc0ac92da26ec12132fbfb164209df.jpg",
        "price": 50
      },
      {
        "id": 6,
        "name": "Душевая кабина",
        "category": "Сантехника",
        "description": "Душевая кабина - описание",
        "img": "https://petraholding.ru/d/ng-1903l_1.jpg",
        "price": 560
      }
    ]
};

export const fetchProducts = (time = 1000) => new Promise((res) => {
    setTimeout(() => {
        res(data)
    }, time)
});
