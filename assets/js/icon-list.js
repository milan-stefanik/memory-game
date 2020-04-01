async function getData() {
  //await the response of the fetch call
  let response = await 
  fetch("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-1/css/all.css");
    //proceed once the first promise is resolved.
    let data = await response.text() // this is probably a sync function, you don't need await here
    //proceed only when the second promise is resolved
    return data;
}

 async function main() {
   const dataset = await getData();
   var count = (dataset.match(/:before/g) || []).length;
   let lastPosition = dataset.indexOf(":before",0);
   let iconArray = [];
   for (let iconIndex = 1; iconIndex <= count; iconIndex++) { 
    iconArray.push(dataset.substring(dataset.lastIndexOf(".fa-",dataset.indexOf(":before",lastPosition)) + 1,dataset.indexOf(":before",lastPosition)));
    lastPosition = dataset.indexOf(":before",lastPosition + 1);
   }
   console.log(iconArray);
   return document.getElementById("test").innerHTML = '<i class="fa fab fad fal far fas ' + iconArray[Math.floor(Math.random() * iconArray.length)] + '"></i>'; 
}

main();









