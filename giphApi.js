// // Function giphApi gets the required giph from GIPHY api.

async function giphApi(giphThis) {
    const apiKey = '5MFbKVApUGWvLdL3UlvCXIuu1x1YtrFB';
    const query = encodeURIComponent(giphThis);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const gifUrl = data.data.images.original.url;
      console.log(`giphApi`, gifUrl);
      return gifUrl;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

//  async function gitBranches (user, Token, repos){

//  }




  // async function gitPulls(gitThis){
  //   // Octokit.js
  //   // https://github.com/octokit/core.js#readme
  //   const octokit = new Octokit({
  //     auth: 'YOUR-TOKEN'
  //   })

  //   await octokit.request('GET /repos/{owner}/{repo}/pulls', {
  //     owner: 'OWNER',
  //     repo: 'REPO',
  //     headers: {  
  //       'X-GitHub-Api-Version': '2022-11-28'
  //     }
  //   })
  //   try {
  //     console.log(`API-Getting Details${gitThis}`);
  //     const gitResponse = await fetch("https://api.github.com/users/"+gitThis);
  //     const gitData = await gitResponse.json();
  //     return gitData;
  //   }
  //   catch (error){
  //   console.log("Unable to retrive data");
  // };
  // };



  
  module.exports = {giphApi};
  