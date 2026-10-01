// 1. 记分变量与游戏状态
let humanScore = 0;
let computerScore = 0;
let isGameOver = false;

// 2. 获取电脑出招
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// 3. 单局判定并更新界面
function playRound(playerSelection) {
  if (isGameOver) return; // 游戏结束则不再响应点击

  const computerSelection = getComputerChoice();
  const roundResultEl = document.getElementById("round-result");
  const playerScoreEl = document.getElementById("player-score");
  const computerScoreEl = document.getElementById("computer-score");
  const finalWinnerEl = document.getElementById("final-winner");

  let message = "";

  if (playerSelection === computerSelection) {
    message = `🤝 平局！双方都出了 ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    message = `🎉 你赢了本轮！${playerSelection} 克制 ${computerSelection}`;
  } else {
    computerScore++;
    message = `💥 电脑赢了本轮！${computerSelection} 克制 ${playerSelection}`;
  }

  // 动态更新 DOM 内容
  roundResultEl.textContent = message;
  playerScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;

  // 胜负判定（先拿 5 分者获胜）
  if (humanScore === 5 || computerScore === 5) {
    isGameOver = true;
    if (humanScore === 5) {
      finalWinnerEl.textContent = "🏆 恭喜！你率先拿满 5 分，赢得了最终胜利！";
      finalWinnerEl.style.color = "#10b981";
    } else {
      finalWinnerEl.textContent = "💻 遗憾！电脑率先拿满 5 分，获得了最终胜利！";
      finalWinnerEl.style.color = "#ef4444";
    }
  }
}

// 4. 为 3 个按钮绑定点击事件监听器
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));