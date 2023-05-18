gitData = require('./cardTypeCheck')
const apiChoiceCard = require('./acard');
const { MongoClient } = require('mongodb');

async function saveDataToMongoDB (bot, cardData) {
  
  const gitUserId = cardData.inputs.userId;
  const gitToken = cardData.inputs.gitToken;
  const ownerId = cardData.inputs.ownerId;
  const repoArray = [];
    for (let i = 0; i < cardData.inputs.numOfRepoRequested; i++) {
      let repName = `repoName_${i + 1}`;
      pushRepoName = cardData.inputs[repName];
      repoArray.push(cardData.inputs[repName]);
    }
  const uri = 'mongodb+srv://barplate:test123@cluster0.y74xbom.mongodb.net/'; //uri from mongodb ATLAS
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
  try {

    await client.connect();
    const database = client.db('gitDetails');
    const collection = database.collection('userEntries');
    const result = await collection.insertOne({gitUserId,gitToken,ownerId,repoArray});
    console.log("saved to database!!", result);
    bot.sendCard(apiChoiceCard.apiSelectionCard);
  }
    catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
module.exports = {saveDataToMongoDB};