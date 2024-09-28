const btn1=document.getElementById("btn");
const audioIcon=document.getElementById("ques-logo");


btn1.addEventListener("click",getAns);

audioIcon.addEventListener("click",play1);


async function getAns(){
  
    let meaning="Sorry, no ans found!";
    let audioFile;
    var word=document.getElementById("word").value ;
    if (word==""){
        //if the word is empty then display the error message
        meaning="Please enter a word!"
        display("",meaning);
        return;

    }
    const api= await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word);
    let data=await  api.json();


    

    console.log(data[0]["phonetics"][0]["audio"]);

    
    

    if (data['title']){
        console.log("No word found")

    }

    else{
        audioFile=data[0]['phonetics'][0]['audio'];
        meaning=data[0]['meanings'][0]["definitions"][0]['definition'];
        console.log(data[0]['meanings'][0]["definitions"][0]['definition']);
    }
    

    

    audio1(audioFile);
     display(word+":-",meaning);
     
}

var speaker=document.getElementById("ques-logo");

async function display(word1,data){
    speaker.style.display="block";
    var ans=document.getElementById("ans");
    var wordd=document.getElementById("ques");
    wordd.innerHTML=word1;
    ans.innerHTML=data;
}


var aud=document.getElementById("myAudio");
 function audio1(data){
    
    
    
   
    aud.innerHTML="<source src='"+data+"'type='audio/mpeg'>";

    aud.load();
    

    
}



function play1(){
    
    
    
    aud.play();

}
