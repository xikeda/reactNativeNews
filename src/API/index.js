import axios from 'axios'

const urls = {
    cbc: "https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=cc1ea0b08c4e4887af35e9fce8d5d88d",
    nhl: "https://newsapi.org/v2/top-headlines?sources=nhl-news&apiKey=cc1ea0b08c4e4887af35e9fce8d5d88d"
}

export const getNHLNews =  () => {
    return axios({
        method: 'GET',
        url: urls.nhl
    })
    .then(res => res.data)
}

export const getCbcNews = () => {
    return axios({
        method: "GET",
        url: urls.cbc
    })
    .then(res => res.data)
}

export const getSearchNews = (params) => {
    return axios({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${params}&from=2018-02-15&to=2018-02-15&sortBy=popularity&apiKey=cc1ea0b08c4e4887af35e9fce8d5d88d`
    })
    .then(res => res.data)
}
