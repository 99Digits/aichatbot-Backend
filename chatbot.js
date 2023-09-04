const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] ,forceNER: true});

// Train the chatbot
manager.addDocument('en', 'hello', 'greetings.hello');
manager.addDocument('en', 'what is 99 digits', 'what is 99 digits');


// 
manager.addDocument('en', 'who are you', 'who.are you');
manager.addDocument('en', 'who is the ceo of 99digits', 'who.is ceo');
manager.addDocument('en', 'who is the  owner of 99 digits', 'who.is owner');
manager.addDocument('en', 'how many developers', 'how many.developer');
manager.addDocument('en', 'give me link of 99 digits', 'give me.link');
manager.addDocument('en', 'give me breaf about the company ', 'give me.breaf');
manager.addDocument('en', 'ok thank you','thank.you');
manager.addDocument('en', 'give me location of 99 Digits','location of.99digits');
manager.addDocument('en', 'who is yadu','who.yadu');
manager.addDocument('en', 'who is sanju','who.sanju');
manager.addDocument('en', 'how many years does 99digits have', 'how many years.99digits have')




// answers

manager.addAnswer('en', 'greetings.hello', 'Hello! How can I assist you?');
manager.addAnswer('en', 'what is 99 digits', '99Digits has built its reputation upon customer satisfaction, collaboration, innovation, value for money and reliable, safe delivery of its products and services. This has led to repeat business and the creation of long lasting trusting relationships with our clients. 99Digits  is a board-managed professional company, committed to creating enduring value for the nation and the shareholder. It has a rich organisational culture rooted in its core values of respect for people and belief in empowerment. Its philosophy of all-round value creation is backed by strong corporate governance policies and systems.');
manager.addAnswer('en', 'who.are you', 'hey Iam personal Ai Chat Assistant from 99Digits');
manager.addAnswer('en', 'who.is ceo', 'the ceo of 99Digits is Reshma B');
manager.addAnswer('en', 'who.is ceo', 'the ceo of 99Digits is Reshma B');
manager.addAnswer('en', 'who.is owner', 'The owner and director of 99digits is RAJEEV R');

manager.addAnswer('en', 'how many.developer', 'There are 40+ Developers woking in 99 Digits');
manager.addAnswer('en', 'give me.link', 'Sure you can visite here https://99digits.com/');
manager.addAnswer('en', 'give me.breaf', 'We are an AI-integrated leading IT Services, Consulting, Digital Marketing, and Branding Solutions company committed to empowering businesses to thrive in the ever-evolving digital landscape. Leveraging our cutting-edge technologies and innovative AI-driven strategies, we enable our clients to surpass their goals and maintain a competitive edge. With our AI-integrated approach, we offer a seamless and intelligent solution that optimizes business performance and ensures sustained success in the digital era');
manager.addAnswer('en', 'ok.thank you','you are welcome Happy to Help any time');
manager.addAnswer('en', 'location of.99digits','sure you can Navigate this Location\nhttps://www.google.com/maps/place/99+Digits/@8.5280772,76.9392462,19.08z/\ndata=!4m6!3m5!1s0xac3e9f0c60aec34d:0x4d6fc7217205d2c5!8m2!\n3d8.5279774!4d76.939125!16s%2Fg%2F11sdnnjswk?entry=ttu');
manager.addAnswer('en', 'who.yadu','yadu is one of the MERN stack Fullstack Developer in 99 Digits who have mastered in Javascript,TypeScript,MongoDB,and NOdejs');
manager.addAnswer('en', 'who.sanju','sanju is one of the Flutter Developer in 99 Digits');
manager.addAnswer('en','how many years.99digits have','99 Digits have 10+ Year of Expreance');




// Train more intents and answers here
(async() => {
    await manager.train();
    manager.save();
    const response = await manager.process('en', 'I should go now');
    console.log(response);
})();
module.exports = {
  process: async (locale, utterance) => {
    const response = await manager.process(locale, utterance);
    return {
      answer: response.answer || "I'm sorry, I don't understand.",
      // Other properties in the response if needed
    };
  },
};
