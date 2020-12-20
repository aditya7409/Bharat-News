var science = document.getElementById('sci');
science.addEventListener('click', handleClick);

window.addEventListener('load',handleNationalClick);

function handleClick() {
  var url='https://gnews.io/api/v4/top-headlines?country=in&lang=en&topic=science&token=68fe2262d4d0739a731f0be64e9ecc1d';
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        var arr=data.articles;
        let output='<div class=card-colums>';
        arr.forEach(element => {
            var text=element.content;
            if(text!=null){
            var trimmedtext=(text.substring(0,200));
            // console.log(trimmedtext);
            output+=`<div class="card">
            <img src="${element.image}" style="width:334px; height:200px" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="">${trimmedtext}</p>
              <a href="${element.url}" target="_blank" class="btn btn-primary">Read More</a>
            </div>
          </div>
            `;
        }
        });
        output+='</div>'
        document.getElementById('results').innerHTML=output;
    });
}

var national=document.getElementById('nat');

national.addEventListener('click',handleNationalClick);

function handleNationalClick(){
  var url='https://gnews.io/api/v4/top-headlines?country=in&lang=hi&token=68fe2262d4d0739a731f0be64e9ecc1d';
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        var arr=data.articles;
        let output='<div class=card-colums>';
        arr.forEach(element => {
            var text=element.content;
            if(text!=null){
            var trimmedtext=(text.substring(0,200));
            // console.log(trimmedtext);
            output+=`<div class="card">
            <img src="${element.image}" style="width:334px; height:200px" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="">${trimmedtext}</p>
              <a href="${element.url}" target="_blank" class="btn btn-primary">Read More</a>
            </div>
          </div>
            `;
        }
        });
        output+='</div>'
        document.getElementById('results').innerHTML=output;
    });
}

var tech=document.getElementById('tech');

tech.addEventListener('click',handleTechClick);

function handleTechClick(){
  var url='https://gnews.io/api/v4/top-headlines?country=in&lang=en&topic=technology&token=68fe2262d4d0739a731f0be64e9ecc1d';
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      // console.log(data);
        var arr=data.articles;
        let output='<div class=card-colums>';
        arr.forEach(element => {
            var text=element.content;
            if(text!=null){
            var trimmedtext=(text.substring(0,200));
            // console.log(trimmedtext);
            output+=`<div class="card">
            <img src="${element.image}" style="width:334px; height:200px" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="">${trimmedtext}</p>
              <a href="${element.url}" target="_blank" class="btn btn-primary">Read More</a>
            </div>
          </div>
            `;
        }
        });
        output+='</div>'
        document.getElementById('results').innerHTML=output;
    });
}

var sports=document.getElementById('sports');

sports.addEventListener('click',handlesportsClick);

function handlesportsClick(){
  var url='https://gnews.io/api/v4/top-headlines?country=in&lang=en&topic=sports&token=68fe2262d4d0739a731f0be64e9ecc1d';
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      console.log(data);
        var arr=data.articles;
        let output='<div class=card-colums>';
        arr.forEach(element => {
            var text=element.content;
            if(text!=null){
            var trimmedtext=(text.substring(0,200));
            // console.log(trimmedtext);
            output+=`<div class="card">
            <img src="${element.image}" style="width:325px; height:200px" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="">${trimmedtext}</p>
              <a href="${element.url}" target="_blank" class="btn btn-primary">Read More</a>
            </div>
          </div>
            `;
        }
        });
        output+='</div>'
        document.getElementById('results').innerHTML=output;
    });
}