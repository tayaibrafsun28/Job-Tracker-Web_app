let interviewList = []
let rejectedList = []
let currentStatus = 'all-toggle-btn'

let totalCount = document.getElementById('total-count');

let interviewCount = document.getElementById('interview-count');

let rejectedCount = document.getElementById('rejected-count');

const jobCards = document.getElementById('job-cards');

const jobsSection = document.getElementById('jobs-section');

let perPageCount = document.getElementById('per-page-count')

function calculateCards() {
    totalCount.innerText = jobCards.children.length

    interviewCount.innerText = interviewList.length

    rejectedCount.innerText = rejectedList.length

 updatePerPageCount();
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
    
    currentStatus = id;
    updatePerPageCount();

    const selectedBtn = document.getElementById(id)

    currentStatus = id

    selectedBtn.classList.remove('btn-secondary')
    selectedBtn.classList.add('btn-primary')

    if (id == 'interview-toggle-btn') {
        jobCards.classList.add('hidden')
        filteredSection.classList.remove('hidden')

        
        renderInterview()
    }

    
    else if (id == 'rejected-toggle-btn') {
        jobCards.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        renderRejected()
    }

    else if (id == 'all-toggle-btn') {
        jobCards.classList.remove('hidden')
        filteredSection.classList.add('hidden')
        
    }


    
}

// Event delegation 

// When we are clicking Interview btn of the jobsSection section event delegation happening

jobsSection.addEventListener('click', function(event){


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


    // Removing the rejected job from list when interview btn is clicked

  rejectedList = rejectedList.filter(item =>
    item.companyName !== cardInfo.companyName);

    if (currentStatus == 'rejected-toggle-btn') {
        renderRejected()
    }
    
    calculateCards()

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

    // find job in rejected list

    const rejectedJob = rejectedList.find(item => item.companyName == cardInfo.companyName)

    // If not found push the job in list

    if(!rejectedJob){
        rejectedList.push(cardInfo)
    }


    // Removing the interview job from list when rejected btn is clicked

    interviewList = interviewList.filter(item =>
    item.companyName !== cardInfo.companyName);


    if (currentStatus == 'interview-toggle-btn') {
        renderInterview()
    }

    calculateCards()


    }

    else if (event.target.closest('.delete')) {

    const parentNode = event.target.closest('.card');

    const companyName = parentNode.querySelector('.company-name').innerText;

    interviewList = interviewList.filter(item =>
        item.companyName !== companyName
    );

    rejectedList = rejectedList.filter(item =>
        item.companyName !== companyName
    );

    parentNode.remove();

    calculateCards();

    renderInterview();
    renderRejected();
}


})




const filteredSection = document.getElementById('filtered-section')

//  Rendering Interview Part


function renderInterview(){
    filteredSection.innerHTML = ''

    // Showing no available jobs

    if (interviewList.length === 0) {
        filteredSection.innerHTML = `
            <div class="bg-white px-5 md:px-20 py-15 md:py-50 flex flex-col justify-center items-center gap-2">
                <img src="../resources/jobs.png" alt="">
                <h2 class="text-base md:text-2xl font-semibold text-color1">
                    No jobs available
                </h2>
                <h2 class="text-xs md:text-md font-semibold text-color2 text-center">
                    Check back soon for new job opportunities
                </h2>
            </div>
        `;
        return; // The return is stoping the function. Otherwise, JavaScript would continue and try to run the for loop.
    }

    for(let interviewItems of interviewList){
        let div = document.createElement('div')

        div.className = 'card bg-white rounded-xl p-7 space-y-3'
        div.innerHTML = `
        
        <div class="flex justify-between items-center">
                    <div>
                        <h1 class="company-name text-color1 text-lg font-semibold">${interviewItems.companyName}</h1>
                        <p class="job-role text-base text-color2">${interviewItems.jobRole}</p>
                    </div>
                    <div class="w-8 h-8 rounded-full border border-[#F1F2F4] flex justify-center">
                        <button class="delete cursor-pointer">
                            <i class="fa-regular fa-trash-can" style="color: rgb(100, 116, 139);"></i>
                        </button>
                    </div>

                </div>

                <p class="duty text-sm text-color2">${interviewItems.duty}
                </p>

                <div class="status-badge max-w-35.5 text-center px-4 py-1 rounded-md text-color1 bg-secondary">
                    ${interviewItems.statusBadge}
                </div>

                <p class="job-description text-sm text-color3">${interviewItems.jobDescription}
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

//  Rendering Rejected Part


function renderRejected(){
    filteredSection.innerHTML = ''

    // Showing no available jobs

        if (rejectedList.length === 0) {
        filteredSection.innerHTML = `
            <div class="bg-white px-5 md:px-20 py-15 md:py-50 flex flex-col justify-center items-center gap-2">
                <img src="../resources/jobs.png" alt="">
                <h2 class="text-base md:text-2xl font-semibold text-color1">
                    No jobs available
                </h2>
                <h2 class="text-xs md:text-md font-semibold text-color2 text-center">
                    Check back soon for new job opportunities
                </h2>
            </div>
        `;
        return; // The return is stoping the function. Otherwise, JavaScript would continue and try to run the for loop.
    }


    for(let rejectedItems of rejectedList){
        let div = document.createElement('div')

        div.className = 'card bg-white rounded-xl p-7 space-y-3'
        div.innerHTML = `
        
        <div class="flex justify-between items-center">
                    <div>
                        <h1 class="company-name text-color1 text-lg font-semibold">${rejectedItems.companyName}</h1>
                        <p class="job-role text-base text-color2">${rejectedItems.jobRole}</p>
                    </div>
                    <div class="w-8 h-8 rounded-full border border-[#F1F2F4] flex justify-center">
                        <button class="delete cursor-pointer">
                            <i class="fa-regular fa-trash-can" style="color: rgb(100, 116, 139);"></i>
                        </button>
                    </div>

                </div>

                <p class="duty text-sm text-color2">${rejectedItems.duty}
                </p>

                <div class="status-badge max-w-35.5 text-center px-4 py-1 rounded-md text-color1 bg-secondary">
                    ${rejectedItems.statusBadge}
                </div>

                <p class="job-description text-sm text-color3">${rejectedItems.jobDescription}
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

// Rendering per page count part

function updatePerPageCount() {

    if (currentStatus === 'all-toggle-btn') {
        perPageCount.innerText = `${jobCards.children.length} Jobs Available`;
    }

    else if (currentStatus === 'interview-toggle-btn') {
        perPageCount.innerText = `${interviewList.length} of ${jobCards.children.length} jobs`;
    }

    else if (currentStatus === 'rejected-toggle-btn') {
        perPageCount.innerText = `${rejectedList.length} of ${jobCards.children.length} jobs`;
    }
}