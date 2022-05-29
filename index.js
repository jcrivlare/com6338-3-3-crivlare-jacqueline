var questionsArr = [
    {
        question: 'Michael holds a yearly award ceremony for his employees called "The Dundies".',
        answer: true
    } ,

    {
        question: 'Jim introduces "Flonkerton" as a Dunder Mifflin Olympic Sport.',
        answer: true 
    } ,

    {
        question: 'Ryan starts a fire making spaghettios in the microwave that almost burns down the office.',
        answer: false
    } ,

    {
        question: 'Phyllis marries a man named Bob Vance, of Vance Plumbling and Heating.',
        answer: false 
    } ,

    {
        question: 'Michael creates an online dating profile and his username is "Little Kid Lover".',
        answer: true
    } ,

    {
        question: 'Michael takes Jan on a vacation to Italy.',
        answer: false
    } ,

    {
        question: 'Michael once promised a class of elementary school kids he would pay for their college tuitions.',
        answer: true
    }
]


function runQuiz() {
    var answersArr = [7];
    for(let i = 0; i < questionsArr.length; i++) {
        answersArr[i] = confirm(questionsArr[i].question);
    }

    var counter = 0;
    
    for (let i = 0; i < questionsArr.length; i++) {
        if (answersArr[i] === questionsArr[i].answer) {
            counter++
        }
    }
    
    let message = 'Your score is ' + Math.round((counter / questionsArr.length) * 100) + '%';
    alert(message);
}



