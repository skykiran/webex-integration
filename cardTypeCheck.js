//Imports!!!
const gitDetailsCall = require('./acard');
const gitApicheckCall = require('./gitApiCheck');
const apiCallFucntion = require('./gitApiCall');
const storeGitDetails = require('./mongdb');

//Switch Case to Check the Card Type and Call appropriate function!!
//cardData has the same value as cardContent in Index.js i.e trigger.attachmentAction.

async function cardTypeCheck(bot, cardData){
    switch(cardData.inputs.cardType)
    {
        case 'repoCount':                       // Case 1 : Pass the dynamic card.
            passDynamicCard(bot, cardData);
        break;
        case 'gitDetails':                      // Case 2 : Store the details enterd by the User.
            await apiCallFucntion.checkRepoPermission(bot, cardData);
            // await storeGitDetails.saveDataToMongoDB(bot, cardData);  // and call the function that checks the permission for the user
            break;
        case 'closeCard':                       // Case 3 : Delete The Card (In case user doesn't want to see the card)
            bot.censor(cardData.messageId);
        break;
        case 'apiActions':
            gitApicheckCall.gitApiCheck(bot, cardData);
        break;
    }
    
}






//Passing the Dynamic card from acard.js to bot 
// Here Card1 collects the number of repos data from the user!!!!!*
async function passDynamicCard(bot,git_Details_Card1){
    const outCard = await gitDetailsCall.dynamicCard(git_Details_Card1.inputs.numberOfRepos);
    bot.sendCard(outCard);
};

module.exports = {passDynamicCard, cardTypeCheck};