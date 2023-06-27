
const Questions = [
    [
        {question: "I feel most energetic and focused:"}, 
        {answer1: "In the morning"},
        {answer2: "Late at night"},
        {answer3: "During the afternoon and early evening"},
        {answer4: "any time of the day"}
    ], 
    [
        {question: "When I walk, I tend to do it:"}, 
        {answer1: "fairly fast, with long steps"},
        {answer2: "less fast, head up, looking the world in the face"},
        {answer3: "very slowly"},
        {answer4: "fairly fast, with small step"}
    ],
    [
        {question: "When I speak to people, I tend to:"}, 
        {answer1: "Stand with my arms folded"},
        {answer2: "Have one or both of  my hands on my hips"},
        {answer3: "Play with your ear or hair, touch your chin, or smooth your hair"},
        {answer4: "Have your hands clasped"} 
    ],
    [
        {question: "When I am relaxed, i usually sit with: "}, 
        {answer1: "My knees bent, with your legs neatly side by side"},
        {answer2: "My legs crossed"},
        {answer3: "Your legs stretched out or straight"},
        {answer4: "One leg curled under you"} 
    ],
    [
        {question: "When I find something really funny, I usually give:"}, 
        {answer1: "A big, appreciative laugh"},
        {answer2: "A quiet chuckle"},
        {answer3: "A laugh, but not a loud one"},
        {answer4: "A sheepish smile"} 
    ],
    [
        {question: "When I enter a party or social gathering, I tend to: "}, 
        {answer1: "Do nothing"},
        {answer2: "Make a loud entrance, so that everyone notices you"},
        {answer3: "Make a quiet entrance, looking around for someone you know"},
        {answer4: "Make the quietest entrance, trying to stay unnoticed"} 
    ],
    [
        {question: "If I'm focused on a task and I'm interrupted, I'm likely to:"}, 
        {answer1: "Welcome the break"},
        {answer2: "Feel extremely irritated"},
        {answer3: "Vary between these two extremes"},
        {answer4: "eat"} 
    ],
    [
        {question: "My favorite color is: "}, 
        {answer1: "red"},
        {answer2: "black"},
        {answer3: "green"},
        {answer4: "yellow"} 
    ],
    [
        {question: "Before I fall asleep, I'm usually lying:"}, 
        {answer1: "Stretched out on my back"},
        {answer2: "On my side, slightly curled"},
        {answer3: "With my head under the covers"},
        {answer4: "Stretched out face down on your stomach"}
    ],
    [
        {question: "When i dream, i often: "}, 
        {answer1: "Falling"},
        {answer2: "Fighting"},
        {answer3: "Flying"},
        {answer4: "Searching for something or somebody"} 
    ]
]


const question_container = document.getElementById('question')
const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
const answer3 = document.getElementById('answer3')
const answer4 = document.getElementById('answer4')
const answers = document.querySelectorAll('h2')
const result = document.getElementById('result')

let counter = 0

function startGame() {

    if(counter === Questions.length) {
        result.classList.add('show')
        endGame()
    } 


    question_container.innerText = Questions[counter][0].question


    answer1.innerText = Questions[counter][1].answer1
    answer2.innerText = Questions[counter][2].answer2
    answer3.innerText = Questions[counter][3].answer3
    answer4.innerText = Questions[counter][4].answer4

    
}

answers.forEach(answer => {
    answer.addEventListener('click', e => {
        counter++
        startGame()
    })
})
let totalPoints = 0

answers.forEach(answer => {
    answer.addEventListener('click', e => {
        let point = e.target.dataset.point

        if(point === "1") {
            totalPoints = totalPoints + 1
        } else if (point === "2") {
            totalPoints = totalPoints + 2
        } else if (point === "3") {
            totalPoints = totalPoints + 3
        } else if (point === "4") {
            totalPoints = totalPoints + 4
        }

        console.log(totalPoints)
    })
})

function endGame() {
    const total_score = document.getElementById('total-score')
    const summary = document.getElementById('summary')

    let summaries = ""

    if(totalPoints > 4 && totalPoints <= 13) {
        summaries ="People think you are shy, nervous, and indecisive, someone who needs looking after, who always wants someone else to make the decisions &who doesn't want to get involved with anyone or anything! They see you as a worrier who always sees problems that don't exist. Some people think you're boring. Only those who know you well know that you aren't."
    } else if (totalPoints > 13 && totalPoints <= 23){
        summaries ="Your friends see you as painstaking and fussy. They see you as very cautious, extremely careful, a slow and steady plodder. It would really surprise them if you ever did something impulsively or on the spur of the moment, expecting you to examine everything carefully from every angle and then, usually decide against it. They think this reaction is caused partly by your careful nature."
    } else if (totalPoints > 23 && totalPoints <= 31) {
        summaries = "Others see you as sensible, cautious, careful & practical. They see you as clever, gifted, or talented, but modest. Not a person who makes friends too quickly or easily, but someone who's extremely loyal to friends you do make and who expects the same loyalty in return. Those who really get to know you realize it takes a lot to shake your trust in your friends, but equally that it takes you a long time to get over if that trust is ever broken."
    } else if (totalPoints > 31) {
        summaries = "Others see you as fresh, lively, charming, amusing, practical, and always interesting; someone who's constantly in the center of attention, but sufficiently well-balanced not to let it go to their head. They also see you as kind, considerate, and understanding; someone who'll always cheer them up and help them out."
    }

    total_score.innerText = `Your total score is ${totalPoints}`
    summary.innerText = summaries
    
}

endGame()

startGame()