function downloadfile(url,downloaded){
    //we are dwnloading a file here
    //lets assume it takes 3 seconds
    //we use settimeout to generate fake delay
    console.log("downloading file:",url);
    setTimeout(function(){
        let filepath="C:\\Downloads\\"+url.split("/").pop();
        console.log("file was downloaded to",filepath);
        downloaded(filepath);/*this callback fun indicates that downloadfile fun
                               has ended and it can now move on to resize file fun */
    },3000)
}
function resizefile(filepath,resized)
{//we are resizing the file which takes 2 secs
//we again use fake delay
console.log("we are resizing",filepath);
setTimeout(function(){
    let newpath=filepath.split(".")[0]+"-resized."+filepath.split(".")[1];
    resized(newpath);/* this call back function indicates resizefile function has ended and 
                      the program can now move on to the downloadfile func*/

},3000)

}
function uploadfile(diskpath,upload)
{
//takes 3 sec
setTimeout(function(){
    let uploadedpath="http://scl/uploads"+diskpath.split("\\").pop();
    console.log("we uploaded to",uploadedpath);
    upload(uploadedpath);
},3000)
}
//here in the following line function is the callback funcn downloaded that accepts an arg file path cuz it's there in line 9 
downloadfile("http://google.com/logo.png",function(downloadedpath){
resizefile(downloadedpath,function(resizedpath){
    uploadfile(resizedpath,function(uploadedurl){
        console.log("uploaded successfully to:",uploadedurl);
    })
    })
})


   
