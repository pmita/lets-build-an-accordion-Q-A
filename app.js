

/*------Global Variables----------*/
const allQandAs = [...document.querySelectorAll('.item')];

/*-----------Event Listeners---------*/
allQandAs.forEach( (question, index)=>{
    const collapseButton = question.querySelector('.question-btn');
    
    collapseButton.addEventListener('click', ()=>{
        allQandAs.forEach( item=>{
            if(item != question){
                item.classList.remove('show-text');
            }
        });


        question.classList.toggle('show-text');
    });
});