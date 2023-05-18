const giphCard = {
    "type": "AdaptiveCard",
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.2",
    "body": [
        {
            "type": "Input.Text",
            "id": "giphIn",
            "placeholder": "Get a GIPH"
        }
    ],
    "actions": [
        {
            "type": "Action.Submit",
            "title": "Submit",
            "data": {
                "id": "submitGif"
            }
        },
        {
            "type": "Action.Submit",
            "title": "Delete",
            "style": "destructive",
            "data": {
                "id": "delete"
            }
        }
    ]
};


//********************************************************************************************************* */
// Card 1 sent to aquire Git Details 
    // User Name
    // Private Token
    // Number of repo's



const gitRepoCountCard = {
    "type": "AdaptiveCard",
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.2",
    "actions": [
        {
            "type": "Action.Submit",
            "title": "Submit",
            "style": "positive",
            "data": {
                "cardActiontype": "repoCountSubmit",
                "cardType" : "repoCount"

            }
        },
        {
            "type": "Action.Submit",
            "title": "Close Card",
            "style": "positive",
            "data": {
                "cardActiontype": "deleteCard",
                "cardType" : "closeCard"

            }
        }
    ],
    "body": [
        {
            "type": "Input.ChoiceSet",
            "choices": [
                {
                    "title": "1",
                    "value": "1"
                },
                {
                    "title": "2",
                    "value": "2"
                },
                {
                    "title": "3",
                    "value": "3"
                }
            ],
            "id": "numberOfRepos",
            "placeholder": "Number of Repositeries"
        }
    ]
}
//Dynamic Card fucntion 
async function dynamicCard(repoCount){
    const newDynamicCard = {
        type: "AdaptiveCard",
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
        version: "1.2",
        body: [
            {
                "type": "Input.Text",
                "placeholder": "Git User Name",
                "id": "userId"
            },
            {
                "type": "Input.Text",
                "placeholder": "Git Personal Token",
                "id": "gitToken"
            },
            {
                "type": "Input.Text",
                "placeholder": "Git Owner",
                "id": "ownerId"
            },
        ]        
    };
    for( let i = 0; i<parseInt(repoCount);i++){
        newDynamicCard.body.push({
            type: "Input.Text",
            id: `repoName_${i + 1}`,
            placeholder: `Repository ${i + 1} `
        })
    }
    newDynamicCard.actions = [
        {
            type: "Action.Submit",
            title: "Submit",
            style: "positive",
            data: {
                'cardActionType': 'gitDetailsSubmit',
                'cardType' : 'gitDetails',
                'numOfRepoRequested' :repoCount
            }
        },
        {
            "type": "Action.Submit",
            "title": "Close Card",
            "style": "positive",
            "data": {
                "cardActiontype": "deleteCard",
                "cardType" : "closeCard"

            }
        }
    ];
    return newDynamicCard;
};

const apiSelectionCard = {
    "type": "AdaptiveCard",
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.2",
    "body": [
        {
            "type": "Input.ChoiceSet",
            "choices": [
                {
                    "title": "List Branches",
                    "value": "listBranches"
                },
                {
                    "title": "Create Branches",
                    "value": "createBranches"
                },
                {
                    "title": "Delete Branches",
                    "value": "deleteBranches"
                }
            ],
            "id": "apiAction",
            "placeholder": "Choose the action to be performed"
        }
    ],
    "actions": [
        {
            "type": "Action.Submit",
            "title": "Submit",
            "style": "positive",
            "data": {
                "cardType": "apiActions"
            }
        },
        {
            "type": "Action.Submit",
            "title": "Close Card",
            "style": "positive",
            "data": {
                "cardActiontype": "deleteCard",
                "cardType" : "closeCard"

            }
        }
    ]
}

module.exports = {giphCard, gitRepoCountCard, dynamicCard, apiSelectionCard};
  