const fetchData = function (surname) {
    Person.find({ lastName: surname }, function (err, people) {
        console.log(people)
    })
}


const fetchDatum = async function (surname) {
    let data = await Person.find({lastName: surname})
    console.log(data)
}

/************************************************************************ */
//1 yes
class ApiManager {

    constructor(stocksAPI, renderer) {
        this.stocksAPI = stocksAPI
        this.renderer = renderer
    }

    async fetchStockData(ticker) {
        let stockData = await $.get(`${this.stocksAPI}/${ticker}`)
        this.renderer.render(stockData)
    }
} 

/************************************************************************ */
//2 no
const getData = async function () {
    let data = await $.get('/data')
    return data
}

const result = getData()

/************************************************************************ */
//3 no
const getArticles = async function(){
    let articles = await $.get('/articles')
    return articles
}

const innocentFunc = function(){
    let articles = getArticles()
    render(articles)
}

innocentFunc()

/************************************************************************ */
//4 no
const nbaFetcher = async function () {
    let nbaData = await request('/nbaAPI')
    console.log(nbaData)
}

nbaFetcher()

/************************************************************************ */
//5 no
const requestBankInfo = async function(){
    let info = await $.get('/bankAPI')
    return info
}

let bankInfo = await requestBankInfo()

/************************************************************************ */
//6 fine but it will slow down your code
const loadAllUserData = async function (user) {
    let twitterData = await $.get('/twitter/' + user.name)
    let facebookData = await $.get('/facebook/' + user.name)
    let linkedinData = await $.get('/linkedin/' + user.name)

    render({
        twitter: twitterData,
        fb: facebookData,
        li: linkedinData
    })
}

/************************************************************************ */
//7 yes
const loadBook = async function (title) {
    let bookISBN = await $.get('/titleAPI/' + title)
    let bookData = await $.get('/bookApi/' + bookISBN)

    render(bookData)
}

loadBook()