const helloWorldCard = require("./adaptiveCards/helloworldCommand.json");
const { MessageBuilder } = require("@microsoft/teamsfx");

class HelloWorldCommandHandler {
  triggerPatterns = "anonymeet";

  async handleCommandReceived(context, message) {
    // verify the command arguments which are received from the client if needed.
    console.log(`Bot received message: ${message.text}`);

    // do something to process your command and return message activity as the response

    // render your adaptive card for reply message
    const cardData = {
      title: "Your Hello World Bot is Running",
      body: "Congratulations! Your hello world bot is running. Click the documentation below to learn more about Bots and the Teams Toolkit.",
    };

    return MessageBuilder.attachAdaptiveCard(helloWorldCard, cardData);
  }
}

module.exports = {
  HelloWorldCommandHandler,
};
