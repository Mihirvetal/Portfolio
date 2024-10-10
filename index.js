const cont = document.querySelector(".container");

const careers = ['Frontend Developer','Software Developer']

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



document.getElementById('resumelink').addEventListener('click', function(event) {
    // event.preventDefault(); // Prevent the default action

    // Open the resume in a new tab
    window.open(this.href, '_blank');

    // Download the resume
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1XJMwJHQ2QOErOvm6l7hSE8coOps2O0mS/view?usp=sharing';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});