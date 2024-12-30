homeScore = 0
guestScore = 0
homeScoreDisplay = document.getElementById("home-score")
guestScoreDisplay = document.getElementById("guest-score")

function addOneHome() {
    homeScore += 1
    homeScoreDisplay.textContent = homeScore    
}

function addTwoHome() {
    homeScore += 2
    homeScoreDisplay.textContent = homeScore    
}

function addThreeHome() {
    homeScore += 3
    homeScoreDisplay.textContent = homeScore
}

function addOneGuest() {
    guestScore += 1
    guestScoreDisplay.textContent = guestScore        
}

function addTwoGuest() {
    guestScore += 2
    guestScoreDisplay.textContent = guestScore            
}

function addThreeGuest() {
    guestScore += 3
    guestScoreDisplay.textContent = guestScore        
    
}
