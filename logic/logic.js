const Chat = require('../schema/ChatSchema');
const botManager = require('../chatbot'); // Adjust the path

exports.chatdata = async (req, res) => {
  const { chatinput } = req.body;

  try {
    const chat = new Chat({
      chatinput: chatinput.utterance,
      // You can include other properties like timestamp if needed
    });

     await chat.save();
    

    // Process the user's message with the chatbot
    const response = await botManager.process('en', chatinput.utterance);

    // You can save the bot's response in the database if needed
    const chatResponse = new Chat({ message: response.answer });
    await chatResponse.save();
    // console.log(chatinput);
    // console.log(response);

    res.status(200).json({ chatinput: response.answer });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ chatinput: "error" });
  }
};

exports.Allchats=async(req,res)=>{
  try{
    const allchats=await  Chat.find()
    if(allchats){
      return res.status(200).json(allchats)
    }
    else{
      return res.status(401).json("not found")
    }

  }
  catch(err){
    return res.status(500).json(err)
  }
}

exports.Clearchat=async(req,res)=>{
  try{
        const data=await Chat.deleteMany({})
        return res.status(200).json(data)
        

  }
  catch(err){
    return res.status(500).json(err)
  }
}