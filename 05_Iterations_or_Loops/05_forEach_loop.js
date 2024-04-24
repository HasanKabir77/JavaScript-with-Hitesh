const coding = ["js", "ruby", "java", "python", "cpp"] 

// coding.forEach( function (item)
// {
//     console.log(item);
// })

// Arrow Function Used
coding.forEach( (item) =>
{
    // console.log(item);
});

// function printMe(item)
// {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) =>
// {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        langName: "Javascript",
        langFileName: ".js"
    },
    {
        langName: "Java",
        langFileName: ".java"
    },
    {
        langName: "Python",
        langFileName: ".py"
    }
]

myCoding.forEach( (item) =>
{
    console.log(item.langName, item.langFileName);
})