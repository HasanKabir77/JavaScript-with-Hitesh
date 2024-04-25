// const coding = ["js", "ruby", "java", "python", "cpp"] 

// const values = coding.forEach( (item) =>
// {
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 5
// })


// let newNums = []
// myNums.forEach( (num) => 
// {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const booksArray = 
[
    {title: 'Book One', genre: 'Fiction', Edition: 2000, Publish: 1997},
    {title: 'Book Two', genre: 'Non-Fiction', Edition: 2001, Publish: 1987},
    {title: 'Book Three', genre: 'History', Edition: 2010, Publish: 1997},
    {title: 'Book Four', genre: 'Novel', Edition: 2008, Publish: 1988},
    {title: 'Book Five', genre: 'Science', Edition: 2005, Publish: 2000},
    {title: 'Book Six', genre: 'Novel', Edition: 1997, Publish: 1977},
    {title: 'Book Seven', genre: 'Fiction', Edition: 2013, Publish: 2009},
    {title: 'Book Eight', genre: 'History', Edition: 2016, Publish: 2002},
    {title: 'Book Nine', genre: 'History', Edition: 2017, Publish: 2004},
    {title: 'Book Ten', genre: 'Science', Edition: 2002, Publish: 1985}
]

let userBooks = booksArray.filter( (bk)=> bk.genre === 'Science')
 userBooks = booksArray.filter( (bk)=> {
    return bk.Edition >=2000 && bk.genre === 'History'
})
// console.log(userBooks);

// let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNum = myNum.map( (num) => {
//     return num + 10
// })

const newNum = myNums
                    .map( (num) => num *10)
                    .map( (num) => num +1)
                    .filter((num) => num >=40)
                    
console.log(newNum);