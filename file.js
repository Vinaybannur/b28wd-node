const fs = require('fs');//inbuilt pakage => file system(ex: c drive or d drive in our laptop)
fs.readFile("./welcome.txt","utf-8",(err,data)=>{
     console.log(data);
});

const quote = "If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes😊!!."
const niceQuote = "\nMake everyday little less ordinarily."
fs.appendFile("./quote.txt",niceQuote,(err)=>{
        console.log("Completed Writing!!");
     });
    

// fs.writeFile("./quote.txt",quote,(err)=>{
//     console.log("Completed Writing!!");
// });
// =============================================================================
// const quote2 ="live more, worry less😉";
// function createQuote (noOfFiles,quote){
//     for(let i=1; i<=noOfFiles; i++){
//         fs.writeFile(`./backup/text-${i}.txt`,quote,(err)=>{
//             console.log("Completed Writing!!",i);
//         });
//     }
// }
// const [ , ,files]=process.argv;
// createQuote(files,quote2);
// =============================================================================

// To delete the files
fs.unlink("./welcome.txt",err=>{
    console.log("deleted successfully!!!")
})

// ===============================================================================
// to read files
fs.readdir("./backup",(err,files)=>{
    if(err){
        console.log(err);
    }
    console.log(files);
})