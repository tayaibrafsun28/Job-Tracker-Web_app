let interviewList = []
let rejectedList = []

let totalCount = document.getElementById('total-count');

let interviewCount = document.getElementById('interview-count');

let rejectedCount = document.getElementById('rejected-count');

const jobCards = document.getElementById('jobs-cards');

function calculateCards() {
    totalCount.innerText = jobCards.children.length

    interviewCount.innerHTML = interviewList.length

    rejectedCount.innerHTML = rejectedList.length
}

calculateCards()

// Toggling Function


function toggleStyle(id) {
    const allToggleBtn = document.getElementById('all-toggle-btn');
    const interviewToggleBtn = document.getElementById('interview-toggle-btn');
    const rejectedTogglebtn = document.getElementById('rejected-toggle-btn');

    allToggleBtn.classList.remove('btn-primary');
    interviewToggleBtn.classList.remove('btn-primary');
    rejectedTogglebtn.classList.remove('btn-primary');

    

}