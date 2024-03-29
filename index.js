// //  getting data into pur cosole from webpage
 
//  const PORT=8000
//  const axios=require('axios')
//  const express=require('express')
//  const cheerio=require('cheerio')


//  const app=express();
// const url='https://www.theguardian.com/uk'
// axios(url)
// .then(response=>{
//     const html=response.data
//     // console.log(html)

//     // cherrio loads specific content within the webpage
//     const $=cheerio.load(html)
//     // array to store results
//     const articles=[]
//     // search for all element with class fc-item__title within, html.each(function()=>{text})
//     $('.fc-item__title',html).each(function(){
//          const title= $(this).text();
//         const url=  $(this).find('a').attr('href')

//         // create array to show title and a
//         articles.push({
//             title,
//             url
//         })
//     })
//     console.log(articles)
// }).catch(err=>console.log(err))


//  app.listen(PORT,()=>{
//      console.log(`server running on port ${PORT}`)
//  })



//  getting data into pur cosole from webpage
 
const PORT=8000
const axios=require('axios')
const express=require('express')
const cheerio=require('cheerio')


const app=express();
const cors=require('cors')
app.use(cors())


const url='https://www.theguardian.com/uk'
 
// this is http request method
// app.METHOD(PATH,HANDLER)  here path is the path to which data is to be shown and handler is the function to be performed


// app.get('/',function(req,res){
// res.json('vaibhav')
// })

app.get('/results',(req,res)=>{

    axios(url)
    .then(response=>{
       const html=response.data
       // console.log(html)
    
       // cherrio loads specific content within the webpage
       const $=cheerio.load(html)
       // array to store results
       const articles=[]
       // search for all element with class fc-item__title within, html.each(function()=>{text})
       $('.fc-item__title',html).each(function(){
            const title= $(this).text();
           const url=  $(this).find('a').attr('href')
    
           // create array to show title and a
           articles.push({
               title,
               url
           })
       })
    //    console.log(articles)
    res.json(articles)
    }).catch(err=>console.log(err))
    
    
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})