const loadData = async () =>{
    const url = `https://api.adviceslip.com/advice`;
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.slip);
}
const displayData = data =>{
    const q_id = document.getElementById('quote-number').innerText
    if(data.id != q_id){ 
        document.getElementById('quote-number').innerText =`
        ${data.id}
        `
        document.getElementById('full-quote').innerText=`
        ${data.advice}
        `
    }
    else{
        loadData();
    }
  
  
}
const generate_quote = () =>{
    loadData();
}








loadData();