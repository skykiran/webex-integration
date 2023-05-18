framework.hears(
    "mood",
    (bot, trigger) => {
      if (trigger.person.emails[0] == "sbattame@cisco.com"){
        console.log("someone requested a GIPH");
        const card = require("./acard");
        bot.sendCard(card.mcard);
        framework.on('attachmentAction', (bot, trigger) => {
          if (trigger.attachmentAction.type.id == 'delete'){
            bot.censor(trigger.attachmentAction.messageId);
  
          }
          else{
            const request = require('request');
            const apiKey = '5MFbKVApUGWvLdL3UlvCXIuu1x1YtrFB';
            const query = encodeURIComponent(trigger.attachmentAction.inputs.mood);
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}`;
  
            request.get(url, (error, response, body) => {
              if (error) {
              console.error(error);
              return;
              }
            const data = JSON.parse(body).data;
            const gifUrl = data.images.original.url;
            var outGiph = {
              text: `Giph requested by ${trigger.person.displayName}`,
              file:gifUrl,
            };
            console.log(attachmentAction.id);
            console.log(trigger.attachmentAction.messageId);
            bot.reply(trigger.attachmentAction,outGiph);
  
        });          
  
          };
        
      },)
      } 
      else{
        console.log("not autherized2")
        bot.say(` ${trigger.person.displayName} is not autherized to use this funtion!!`);
      };
      console.log(trigger.attachmentAction);
    },
    "**mood**: (get a GIPH for you mood) ",
    0
  )




  console.log("someone requested a GIPH");
      const card = require("./acard");
      console.log(card.test)
      console.log(card.mcard);
      bot.sendCard(card.mcard);
      framework.on('attachmentAction', (bot, trigger) => {
        // const mood_input = trigger.attachmentAction.inputs.mood;
        const request = require('request');
        // console.log(request);
        const apiKey = '5MFbKVApUGWvLdL3UlvCXIuu1x1YtrFB';
        const query = encodeURIComponent(trigger.attachmentAction.inputs.mood);
        // console.log(query);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}`;
        // console.log(url);



        request.get(url, (error, response, body) => {
          if (error) {
          console.error(error);
          return;
          }
        const data = JSON.parse(body).data;
        const gifUrl = data.images.original.url;
        console.log(gifUrl);
        var outGiph = {
          text: `Giph requested by ${trigger.person.displayName}`,
          file:gifUrl,
        };
        console.log(trigger.attachmentAction);
        bot.reply(trigger.attachmentAction,outGiph);

        // // Function giphApi gets the required giph from GIPHY api.
// function giphApi(giphThis) {
//     const request = require('request');
//     //Mention Your giphy api key in apiKey
//     const apiKey = '5MFbKVApUGWvLdL3UlvCXIuu1x1YtrFB';
//     const query = encodeURIComponent(giphThis);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}`;
//     // const apiResponse = await fetch(url);
//     // const data = await apiResponse.json();
//     // const gifUrl = data.images.url;
//     // console.log(`giphApi`,gifUrl);
//     // return(gifUrl);
//     request.get(url, (error, response, body) => {
//         if (error) {
//             console.error(error);
//             return;
//         }
//         const data = JSON.parse(body).data;
//         const gifUrl = data.images.original.url;
//         console.log(`giphApi`,gifUrl);
//         return(gifUrl);
//     });


// };
// module.exports = {giphApi};


  // const apiCall = require('./giphApi'); // Expoerting the giphAPi model and accessing the functions 
  // switch(trigger.attachmentAction.inputs.id )
  // {

  //   // case 1 to get a GIPH
  //   case 'submitGif':
  //     const outUrl = await apiCall.giphApi(trigger.attachmentAction.inputs.giphIn);
  //     console.log(`index`, outUrl +executingAt());
  //     bot.say({ text: 'Here is your file!', file: outUrl });
  //   break;
  //   // case 3 If the user chooe to delete the card
  //   case 'delete':
  //     bot.censor(trigger.attachmentAction.messageId);
  //     console.log('This Message was deleted!!'+executingAt());
  //     // An alternative can be mentioned in default if no case matches(It is Optional)
  //   break;
  //   default:
  //     bot.say("Unable To Process your Request, Please Try again..");
  //   };
