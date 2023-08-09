const messages = [];

function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value.trim();

  if (message !== '') {
    messages.push(message);
    input.value = '';
    renderMessages();
  }
}

function renderMessages() {
  const container = document.getElementById('message-container');
  container.innerHTML = '';

  messages.forEach((message) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    const senderElement = document.createElement('div');
    senderElement.classList.add('sender');
    senderElement.textContent = 'John';

    const textElement = document.createElement('div');
    textElement.classList.add('text');
    textElement.textContent = message;

    messageElement.appendChild(senderElement);
    messageElement.appendChild(textElement);

    container.appendChild(messageElement);
  });

  container.scrollTop = container.scrollHeight;
}