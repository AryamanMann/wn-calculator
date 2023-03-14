// Get the input fields and result field
const subsInput = document.getElementById("subs");
const chapterWordCountInput = document.getElementById("word-count");
const privilegeCoinsInput = document.getElementById("priv-coins");
const totalEarningsField = document.getElementById("total-earned");
const messageField = document.getElementById("message");
const helpBtn = document.getElementById("help-btn");
const helpText = document.getElementById("help-text");

// Clear the input fields and result field after a reload
window.onload = function () {
    subsInput.value = "";
    chapterWordCountInput.value = "";
    privilegeCoinsInput.value = "";
    totalEarningsField.value = "";
    messageField.textContent = "";
}

helpBtn.addEventListener("mouseenter", function () {
    helpText.classList.add("show");
});

helpBtn.addEventListener("mouseleave", function () {
    helpText.classList.remove("show");
});


function calculateTotalEarnings() {
    // Get the input values
    const subsSoFar = Number(subsInput.value);
    const chapterWordCount = Number(chapterWordCountInput.value);
    const privilegeCoins = Number(privilegeCoinsInput.value);


    // Check if chapter word count is between 1001 and 2800
    if (chapterWordCount < 1001 || chapterWordCount > 2800) {
        // Show the message and reset the word count
        var message = document.getElementById('word-count-message');
        message.innerHTML = 'Word count should be between 1001 and 2800';
        message.classList.add('show');
        setTimeout(function () {
            message.classList.remove('show');
        }, 1500);
        return;
    }

    // Coin price
    let coinPrice;

    if (chapterWordCount >= 1001 && chapterWordCount <= 1200) {
        coinPrice = 10;
    } else if (chapterWordCount >= 1201 && chapterWordCount <= 1400) {
        coinPrice = 12;
    } else if (chapterWordCount >= 1401 && chapterWordCount <= 1600) {
        coinPrice = 13;
    } else if (chapterWordCount >= 1601 && chapterWordCount <= 1800) {
        coinPrice = 15;
    } else if (chapterWordCount >= 1801 && chapterWordCount <= 2000) {
        coinPrice = 16;
    } else if (chapterWordCount >= 2001 && chapterWordCount <= 2200) {
        coinPrice = 18;
    } else if (chapterWordCount >= 2201 && chapterWordCount <= 2400) {
        coinPrice = 20;
    } else if (chapterWordCount >= 2401 && chapterWordCount <= 2600) {
        coinPrice = 21;
    } else if (chapterWordCount >= 2601 && chapterWordCount <= 2800) {
        coinPrice = 23;
    }

    // Calculate the earnings
    const subscriptionCoins = subsSoFar * coinPrice;
    const totalEarnings = (subscriptionCoins + privilegeCoins) * 0.02 * 0.28;

    // Display the total earnings
    const totalEarningsField = document.getElementById("total-earned");
    totalEarningsField.value = totalEarnings.toFixed(2);

    // Display a message based on the earnings
    const messageField = document.getElementById("message");

    async function fetchMotivationalQuote() {
        try {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();
            const randomIndex = Math.floor(Math.random() * data.length);
            const quote = data[randomIndex].text;
            messageField.textContent = quote;
        } catch (error) {
            console.log(error);
            messageField.textContent = "Error fetching motivational quote.";
        }
    }

    fetchMotivationalQuote()
}





