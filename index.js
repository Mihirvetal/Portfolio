const cont = document.querySelector(".container");

const careers = ['Frontend Developer','Software Developer', 'FullStack Developer']

let careerindx=0;
let charidx=1;

updateText()
function updateText(){
    cont.innerHTML=`<h1>${careers[careerindx].slice(0,charidx)}</h1>`
    charidx++;
    if(charidx===careers[careerindx].length+1)
    {
        careerindx++;
        charidx=1;
    }
    if(careerindx==careers.length)
    careerindx=0;
    setTimeout(updateText, 300);
}



function downloadResume() {
    setTimeout(() => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1XJMwJHQ2QOErOvm6l7hSE8coOps2O0mS';
        link.download = 'resume.pdf';  // Rename the file if needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 1000);  // Delay the download to allow the new tab to open first
}

