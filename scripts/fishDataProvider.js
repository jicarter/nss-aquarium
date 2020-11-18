const fishCollection = [
    {
        image: '../images/Bart.jpg',
        name: 'Bart' ,
        species: 'Dolphin',
        length: '12',
        location: 'Bermuda Triangle',
        food: 'Crustaceans'

    }
    ,
    {
        image: '../images/sam.jpg',
        name: 'Sam',
        species: 'Great White Shark',
        length: '20',
        location: 'Bermuda Triangle',
        food: 'Tourists'
    }
    ,
    {
        image:'../images/jimbo.jpg',
        name: 'Jimbo',
        species: 'Blue Whale',
        length: '50',
        location: 'Bermuda Triangle',
        food: 'Plankton'
    }
]

export function useFish() {
    return fishCollection.slice()
}