// step 1:  Load the api
const loadData = async (searchText) =>{
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`
    try{
    const response = await fetch(url);
    const data = await response.json();
    displayData(data[0]);
    }
    catch(Error){
        console.log(Error);
    }
}

const displayData = (data) =>{
    console.log(data);
    const array = data.meaning;
    // const synonyms = array.map(element=> element.synonyms);
    // const mean = array.map(element => element.definitions)
    console.log(array);
    // console.log(synonyms);
    // const ul = document.getElementById('unordered_lists')
    // for (const datas of array) {
    //     const listItems = document.createElement('li');
    //     listItems.innerHTML = `${datas.definitions[0].definition}`
    //     ul.appendChild(listItems);
    // }
    const parent = document.getElementById('main-content');
    parent.innerText = ``;
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="d-flex justify-content-between">
                <h1>${data.word}</h1>
                <i class="fa-regular fa-circle-play" id="play-btn" style="font-size: xx-large; cursor: pointer;"></i>
            </div>
            <p style="color: blueviolet;">${data.phonetics[1].text}</p>
            <div class="d-flex mb-3">
                <p id="partsOfSpeech" style="font-weight: bold;">${data.meanings[0].partOfSpeech}</p>
            </div>
            <h3>Meaning</h3>
            <ul id="unordered_lists">
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
            <p id="partsOfSpeech" style="font-weight: bold;">Synonyms: <span id="synonyms" style="color: violet;" class="mx-5"> ${synonyms}</span></p>
            <div>
                <p class="mb-5">Verb</p>
            </div>
            <h3>Meaning</h3>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
            <p>source: <span id="source" class="mx-5">${data.sourceUrls
            }</span> </p>
    `
    parent.appendChild(div);
}

document.getElementById('word-search').addEventListener('keyup',(e)=>{
    loadData(e.target.value);
})
const liGenerator = data =>{

}

loadData('hello');