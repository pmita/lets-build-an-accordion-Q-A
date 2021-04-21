

/*
    Quick project that goes a bit more in depth of query selectors and how to 
    utilize them to find elements within section of your html. Please note that this
    project can also be done by traversing through the dom. Objective of this project are:
    #Allow the user to hide/show the answers to our questions
    #Check if other accordions are open
        #If use is toggling more than one accordion at a time, then close the rest
    #Update the UI accordingly

    Remember to always apply clean code principles in every project you are making! Here are
    some basic rules to have at the back of your mind:
    #Leave commects whenever your code is doing something complicated
    #Try giving your variables usefull names. Best if their name describes what they correspond to
    #Re-factor your code once you get something done. Chances are you can make better
*/


/*------Global Variables----------*/
const allQandAs = [...document.querySelectorAll('.item')];

/*-----------Event Listeners---------*/
allQandAs.forEach( question =>{
    const collapseButton = question.querySelector('.question-btn');
    //Add click event to each button within the article
    collapseButton.addEventListener('click', ()=>{
        //Check if other accordions are open
        allQandAs.forEach( item=>{
            if(item != question){
                item.classList.remove('show-text');
            }
        });

        //Toggle the answer paragraph
        question.classList.toggle('show-text');
    });
});