const pics = [
    'url("https://media1.giphy.com/media/ddGFVs4FW7Xx6deIpa/giphy.gif?cid=790b7611454cd7a6b1378014c954f8421cff5b96ebbe6795&rid=giphy.gif&ct=s")',
    'url("https://media3.giphy.com/media/8aCmhoqhcqZtl0hi6P/giphy.gif?cid=790b761121d8f9cbf936a7ffd86bc66f6a416096726ec4e9&rid=giphy.gif&ct=s")',
    'url("https://media4.giphy.com/media/w6aUz51mADi620FbOO/giphy.gif?cid=790b7611debbcf04e71df503738cffa3b09ff6f1ff7ee006&rid=giphy.gif&ct=s")',
    'url("https://media0.giphy.com/media/qnh4dfTcqKReQxx3UR/giphy.gif?cid=790b76118e455a94c0910ed98cfdff48859c2bab6008b3eb&rid=giphy.gif&ct=s")',
    'url("https://media3.giphy.com/media/Tgg0jXMRGgXWDuIKrC/giphy.gif?cid=790b7611922e4d248d536e888334a437390af0c9837856ec&rid=giphy.gif&ct=s")',

];

const pic = document.querySelector('section');


function showImage(){
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img;
}

setInterval(showImage,1000);