let playerWins = 0;
let computerWins = 0;

function playGame(userChoice) {
    const choices = ["剪刀", "石頭", "布"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result;
    if (userChoice === computerChoice) {
        result = "平手！";
        document.getElementById("gameResult").className = "draw";
        playSound("draw.mp3");
    } else if (
        (userChoice === "剪刀" && computerChoice === "布") ||
        (userChoice === "石頭" && computerChoice === "剪刀") ||
        (userChoice === "布" && computerChoice === "石頭")
    ) {
        result = "你贏了！";
        playerWins++;
        document.getElementById("gameResult").className = "win";
        playSound("win.mp3");
    } else {
        result = "你輸了！";
        computerWins++;
        document.getElementById("gameResult").className = "lose";
        playSound("lose.mp3");
    }

    document.getElementById("userChoice").innerText = "你的選擇: " + userChoice;
    document.getElementById("computerChoice").innerText = "電腦的選擇: " + computerChoice;
    document.getElementById("gameResult").innerText = "結果: " + result;
    document.getElementById("score").innerText = `玩家勝利: ${playerWins} 次，電腦勝利: ${computerWins} 次`;

    if (playerWins === 3 || computerWins === 3) {
        const winner = playerWins === 3 ? "玩家" : "電腦";
        Swal.fire({
            title: `${winner}獲勝！`,
            text: "遊戲將重新開始",
            icon: winner === "玩家" ? "success" : "error"
        });
        resetGame();
    }
}

function hoverEffect(button, mode) {
    if (mode === "hover") {
        button.style.backgroundColor = "#FF6347";
        button.style.color = "#fff";
    } else {
        button.style.backgroundColor = "#4CAF50";
        button.style.color = "#fff";
    }
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    document.getElementById("score").innerText = "玩家勝利: 0 次，電腦勝利: 0 次";
    document.getElementById("userChoice").innerText = "你的選擇: ";
    document.getElementById("computerChoice").innerText = "電腦的選擇: ";
    document.getElementById("gameResult").innerText = "結果: ";
    document.getElementById("gameResult").className = "";
}

function playSound(filename) {
    const audio = new Audio(filename);
    audio.play();
}
