const locationCollection = [
    {
        image: '../images/pond.jpg',
        name: 'The Pond',
        url: 'https://www.takemefishing.org/freshwater-fishing/types-of-freshwater-fishing/pond-fishing/#:~:text=Pond%20fishing%20is%20an%20entertaining,sunfish%2C%20catfish%20or%20largemouth%20bass.',
        description: 'This pond holds some of the most unique fish. I encourage everyone to check their local ponds to see what fish are hiding right under your nose!!'
    }
]

export function useLocation() {
    return locationCollection.slice()
}