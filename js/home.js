let interviewList = []
let rejectedList = []

let totalCount = document.getElementById('total-count');

let interviewCount = document.getElementById('interview-count');

let rejectedCount = document.getElementById('rejected-count');

const jobCards = document.getElementById('job-cards');

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


    allToggleBtn.classList.add('btn-secondary');
    interviewToggleBtn.classList.add('btn-secondary');
    rejectedTogglebtn.classList.add('btn-secondary');
    

    const selectedBtn = document.getElementById(id)

    selectedBtn.classList.remove('btn-secondary')
    selectedBtn.classList.add('btn-primary')

    if (id == 'interview-toggle-btn') {
        jobCards.classList.add('hidden')
        filteredSection.classList.remove('hidden')
    }

    
    else if (id == 'rejected-toggle-btn') {
        jobCards.classList.add('hidden')
        filteredSection.classList.remove('hidden')
    }

    else if (id == 'all-toggle-btn') {
        jobCards.classList.remove('hidden')
        filteredSection.classList.add('hidden')
    }
}

// Event delegation 

// When we are clicking Interview btn of the jobCards section event delegation happening

jobCards.addEventListener('click', function(event){

    // Checking if interview btn was clicked

    if(event.target.classList.contains('interview-btn')){
        
    // Findning parent node of interview btn

    const parentNode = event.target.parentNode.parentNode

    // data fetch from parent node

    const companyName = parentNode.querySelector('.company-name').innerText

    const jobRole = parentNode.querySelector('.job-role').innerText

    const duty = parentNode.querySelector('.duty').innerText

    const statusBadge = parentNode.querySelector('.status-badge').innerText

    const jobDescription = parentNode.querySelector('.job-description').innerText


    // Changing status badge

    parentNode.querySelector('.status-badge').innerText = 'INTERVIEW'

    // Creating object for dynamic card data

    const cardInfo = {
        companyName,
        jobRole,
        duty,
        statusBadge: 'INTERVIEW',
        jobDescription
    }

    // find job in interview list

    const interviewJob = interviewList.find(item => item.companyName == cardInfo.companyName)


    if(!interviewJob){
        interviewList.push(cardInfo)
    }

    calculateCards()

    renderInterview()

    }

    // Checking if interview btn was clicked

    else if(event.target.classList.contains('rejected-btn')){
        
    // Findning parent node of interview btn

    const parentNode = event.target.parentNode.parentNode

    // data fetch from parent node

    const companyName = parentNode.querySelector('.company-name').innerText

    const jobRole = parentNode.querySelector('.job-role').innerText

    const duty = parentNode.querySelector('.duty').innerText

    const statusBadge = parentNode.querySelector('.status-badge').innerText

    const jobDescription = parentNode.querySelector('.job-description').innerText


    // Changing status badge

    parentNode.querySelector('.status-badge').innerText = 'REJECTED'

    // Creating object for dynamic card data

    const cardInfo = {
        companyName,
        jobRole,
        duty,
        statusBadge: 'REJECTED',
        jobDescription
    }

    // find job in interview list

    const rejectedJob = rejectedList.find(item => item.companyName == cardInfo.companyName)


    if(!rejectedJob){
        rejectedList.push(cardInfo)
    }

    calculateCards()

    renderRejected()

    }

})




const filteredSection = document.getElementById('filtered-section')

//  Rendering Interview Part


function renderInterview(){
    filteredSection.innerHTML = ''

    for(let items of interviewList){
        let div = document.createElement('div')

        div.className = 'card bg-white rounded-xl p-7 space-y-3'
        div.innerHTML = `
        
        <div class="flex justify-between items-center">
                    <div>
                        <h1 class="company-name text-color1 text-lg font-semibold">${items.companyName}</h1>
                        <p class="job-role text-base text-color2">${items.jobRole}</p>
                    </div>
                    <div class="w-8 h-8 rounded-full border border-[#F1F2F4] flex justify-center">
                        <button class="delete cursor-pointer">
                            <i class="fa-regular fa-trash-can" style="color: rgb(100, 116, 139);"></i>
                        </button>
                    </div>

                </div>

                <p class="duty text-sm text-color2">${items.duty}
                </p>

                <div class="status-badge max-w-[142px] text-center px-4 py-1 rounded-md text-color1 bg-secondary">
                    ${items.statusBadge}
                </div>

                <p class="job-description text-sm text-color3">${items.jobDescription}
                </p>

                <div class="flex gap-3">
                    <button
                        class=" interview-btn px-4 py-0.5 rounded-md text-green-500 border border-green-500 cursor-pointer">INTERVIEW
                    </button>
                    <button
                        class="rejected-btn px-4 py-0.5 rounded-md text-red-500 border border-red-500 cursor-pointer">REJECTED
                    </button>
                </div>

        `
        // Append selected interview to interview section

        filteredSection.appendChild(div)
    }

}

//  Rendering Interview Part


function renderRejected(){
    filteredSection.innerHTML = ''

    for(let items of rejectedList){
        let div = document.createElement('div')

        div.className = 'card bg-white rounded-xl p-7 space-y-3'
        div.innerHTML = `
        
        <div class="flex justify-between items-center">
                    <div>
                        <h1 class="company-name text-color1 text-lg font-semibold">${items.companyName}</h1>
                        <p class="job-role text-base text-color2">${items.jobRole}</p>
                    </div>
                    <div class="w-8 h-8 rounded-full border border-[#F1F2F4] flex justify-center">
                        <button class="delete cursor-pointer">
                            <i class="fa-regular fa-trash-can" style="color: rgb(100, 116, 139);"></i>
                        </button>
                    </div>

                </div>

                <p class="duty text-sm text-color2">${items.duty}
                </p>

                <div class="status-badge max-w-[142px] text-center px-4 py-1 rounded-md text-color1 bg-secondary">
                    ${items.statusBadge}
                </div>

                <p class="job-description text-sm text-color3">${items.jobDescription}
                </p>

                <div class="flex gap-3">
                    <button
                        class=" interview-btn px-4 py-0.5 rounded-md text-green-500 border border-green-500 cursor-pointer">INTERVIEW
                    </button>
                    <button
                        class="rejected-btn px-4 py-0.5 rounded-md text-red-500 border border-red-500 cursor-pointer">REJECTED
                    </button>
                </div>

        `
        // Append selected interview to interview section

        filteredSection.appendChild(div)
    }

}