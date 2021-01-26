let form = document.querySelector('#memeForm');
let photoInput = document.querySelector('input[name="imageURL"]');
let topTextInput = document.querySelector('input[name="topText"]');
let bottomTextInput = document.querySelector('input[name="bottomText"]');
let results = document.querySelector('#memeResults');

form.addEventListener('submit', function(e) {
	e.preventDefault();
    let newMeme = makeMeme(photoInput.value, topTextInput.value, bottomTextInput.value);
    results.appendChild(newMeme);
    let newRemoveButton = document.createElement('button');
    newRemoveButton.innerText = 'Remove';
    newRemoveButton.classList.add('remove');
    newMeme.appendChild(newRemoveButton);
    photoInput.value="";
    topTextInput.value="";
    bottomTextInput.value="";
});

results.addEventListener('click', function(e) {
    if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
});

function makeMeme(photo, topText, bottomText) {
    let meme = document.createElement('div');
    meme.classList.add('memeDiv');
    let memeImage = document.createElement('img');
    meme.appendChild(memeImage);
    memeImage.classList.add('image');
    memeImage.src = photo;
    let memeTopText = document.createElement('div');
    meme.appendChild(memeTopText);
    memeTopText.innerText = topText;
    memeTopText.classList.add('textTop');
    let memeBottomText = document.createElement('div');
    meme.appendChild(memeBottomText);
    memeBottomText.innerText = bottomText;
	memeBottomText.classList.add('textBottom');
	return meme;
}


