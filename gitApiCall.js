// let gitUserData = require('./gitApi')
const storeGitDetails = require('./mongdb');
const apiactionCard = require('./acard');
// Function that checks for the permission status

async function checkRepoPermission(bot, cardData) {
  const username = cardData.inputs.userId;
  const userToken = cardData.inputs.gitToken;
  const repo = cardData.inputs.repoName_1;
  const owner = cardData.inputs.ownerId;
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/collaborators/${username}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    if (response.status == '204'){
      await(storeGitDetails.saveDataToMongoDB(bot, cardData));
      bot.sendcard(apiactionCard.apiSelectionCard)
    }
    else {
      bot.say("Enterd User is not a collaborator for the mention repos")
    }
  //  console.log(response);    
  } catch (error) {
    console.log("Error occurred while checking collaborator permission:", error);
  }
}
async function listBarnches(bot, cardData){
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/branches`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    console.log("listBranches",response);
    if (response.status == '200'){
      
    }
    else {
      bot.say("Unable to provess the request")
    }
  //  console.log(response);    
  } catch (error) {
    console.log("Error occurred while listing", error);
  }
}


module.exports = {checkRepoPermission};