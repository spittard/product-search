import React, {
    createContext,
    useState
} from 'react'

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [test, setTest] = useState('hi');
    const [products, setProducts] = useState([{
            "fields": {
                "directors": ["Joseph Gordon-Levitt"],
                "release_date": "2013-01-18T00:00:00Z",
                "rating": 7.4,
                "genres": ["Comedy", "Drama"],
                "image_url": "https://m.media-amazon.com/images/M/MV5BMTQxNTc3NDM2MF5BMl5BanBnXkFtZTcwNzQ5NTQ3OQ@@._V1_SX400_.jpg",
                "plot": "A New Jersey guy dedicated to his family, friends, and church, develops unrealistic expectations from watching porn and works to find happiness and intimacy with his potential true love.",
                "title": "Don Jon",
                "rank": 1,
                "running_time_secs": 5400,
                "actors": ["Joseph Gordon-Levitt", "Scarlett Johansson", "Julianne Moore"],
                "year": 2013
            },
            "id": "tt2229499",
            "type": "add"
        },
        {
            "fields": {
                "directors": ["Ron Howard"],
                "release_date": "2013-09-02T00:00:00Z",
                "rating": 8.3,
                "genres": ["Action", "Biography", "Drama", "Sport"],
                "image_url": "https://m.media-amazon.com/images/M/MV5BMTQyMDE0MTY0OV5BMl5BanBnXkFtZTcwMjI2OTI0OQ@@._V1_SX400_.jpg",
                "plot": "A re-creation of the merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
                "title": "Rush",
                "rank": 2,
                "running_time_secs": 7380,
                "actors": ["Daniel Brühl", "Chris Hemsworth", "Olivia Wilde"],
                "year": 2013
            },
            "id": "tt1979320",
            "type": "add"
        },
        {
            "fields": {
                "directors": ["Denis Villeneuve"],
                "release_date": "2013-08-30T00:00:00Z",
                "rating": 8.2,
                "genres": ["Crime", "Drama", "Thriller"],
                "image_url": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX400_.jpg",
                "plot": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts. But just how far will this desperate father go to protect his family?",
                "title": "Prisoners",
                "rank": 3,
                "running_time_secs": 9180,
                "actors": ["Hugh Jackman", "Jake Gyllenhaal", "Viola Davis"],
                "year": 2013
            },
            "id": "tt1392214",
            "type": "add"
        },
        {
            "fields": {
                "directors": ["Francis Lawrence"],
                "release_date": "2013-11-11T00:00:00Z",
                "genres": ["Action", "Adventure", "Sci-Fi", "Thriller"],
                "image_url": "https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_SX400_.jpg",
                "plot": "Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem.",
                "title": "The Hunger Games: Catching Fire",
                "rank": 4,
                "running_time_secs": 8760,
                "actors": ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth"],
                "year": 2013
            },
            "id": "tt1951264",
            "type": "add"
        }
    ]);

    return ( <ProductContext.Provider value = {
        [products, setProducts]
        // ,
        // [test, setTest]
    } > {
        props.children
    } </ProductContext.Provider>)
}