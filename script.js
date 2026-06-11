const messageButton = document.querySelector("#messageButton");
const message = document.querySelector("#message");

messageButton.addEventListener("click", () => {
  message.textContent = "你好！项目文件已经准备好了。";
});
