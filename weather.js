const search =document.getElementById('button');
var count=0;

const city=document.getElementById('city');
search.addEventListener('click',function(){
    const insert=document.createElement('div');
    insert.classList.add('center');
    insert.setAttribute('id',''+count);
    document.body.appendChild(insert);
    let connectionRequest = new XMLHttpRequest();
    if(count>0){
    let hide1=document.getElementById(count-1);
    hide1.classList.add("hide");
    }
    connectionRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=56c1a645188a4a0db1f67142364d973e')
    connectionRequest.onload=function()
    {
        if (connectionRequest.status >= 200 && connectionRequest.status < 400) {
            let Data = JSON.parse(connectionRequest.responseText);
            let data=Data.main;

            draw(Data,count,insert);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    }
    connectionRequest.send();
    count++;
});
function draw(data,count,insert) {

    let htmlData='';
    htmlData+="<p>Temperature="+data.main.temp+"</p>";
    let data1=data.weather
    htmlData+="<p>Sky="+data1[0].main+"</p>";
    htmlData+="<p>Description="+data1[0].description+"</p>";
    htmlData+="<p>Wind Speed="+data.wind.speed+"</p>";
    htmlData+="<p>Country="+data.sys.country+"</p>";
    insert.insertAdjacentHTML("beforeend", htmlData);

}