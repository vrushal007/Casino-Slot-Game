// Older way of fakeDownload Function

// function fakeDownload(done) {
//     setTimeout(function() {
//         let downloadedData = 'Some downloaded data'
//         done(downloadedData)
//     }, 1000)
// }
// fakeDownload(function(data) {
//     console.log("We downloaded a file which has data ->")
//     console.log(data)
// })

//ES6 Promises
function fakeDownloadPromises(correct) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let downloadedData = 'Some downloaded data'
            console.log("downloading is completed...")
            if (correct)
                resolve(downloadedData)
            else
                reject(new Error("data could not download"))
        }, 1000)
    })
}
let download = fakeDownloadPromises(true)
download.then().catch(function(err) {
    console.log(err)
})
setTimeout(function() {
    download.then(function(data) {
        console.info("The data that was downloaded -> ")
        console.info(data)
    })
}, 3000)