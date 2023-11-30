function handleSubmit(event) {
  const userInput = document.getElementById('user-input');
  const chatBoxBody = document.getElementById('chatbox-body');
  const msg = userInput.value.trim();
  const isBot = true;

  displayMsg(msg, !isBot);
  /* setTimeout was used to stimulate real life delay response */
  setTimeout(() => botResponse(msg), 500);
  chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
  userInput.value = '';
  event.preventDefault();
}

function botResponse(userMsg) {
  const chatBoxBody = document.getElementById('chatbox-body');
  const isBot = true;
  let botMsg = '';

  if (
    userMsg.toLowerCase().includes('jamie') &&
    userMsg.split(' ').length === 1
  ) {
    botMsg = 'Can I help you?';
  } else if (userMsg.endsWith('?')) {
    if (userMsg === userMsg.toUpperCase()) {
      botMsg = 'Please give me some time to resolve the issue.';
    } else {
      botMsg = 'Yes';
    }
  } else if (userMsg === userMsg.toUpperCase() || userMsg.endsWith('!')) {
    botMsg = 'Please remain calm.';
  } else {
    botMsg = "Sorry, I don't understand.";
  }

  displayMsg(botMsg, isBot);
  chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
}

function displayMsg(msg, isBot) {
  const chatBoxBody = document.getElementById('chatbox-body');
  const msgElement = document.createElement('div');
  const nameElement = document.createElement('small');
  const boxElement = document.createElement('div');
  const timeElement = document.createElement('small');

  nameElement.classList.add('msg-name');
  boxElement.classList.add('msg-box');
  timeElement.classList.add('msg-time');

  if (isBot) {
    nameElement.textContent = 'Jamie';
    msgElement.classList.add('msg', 'receiver');
  } else {
    nameElement.textContent = 'You';
    msgElement.classList.add('msg', 'sender');
  }

  boxElement.textContent = msg;
  timeElement.textContent = new Date().toLocaleString();

  msgElement.appendChild(nameElement);
  msgElement.appendChild(boxElement);
  msgElement.appendChild(timeElement);
  chatBoxBody.appendChild(msgElement);
}
