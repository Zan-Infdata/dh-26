const ScenesData = {

  "node1": {
    "text": "Use the arrow keys to move betweet the answers and 'Enter' to select the answer. On mobile you can just press the answer\n",
    "choices": [
      { "text": "Proceed", "next": "node2" },
    ]
  },

  "node2": {
    "text": "Where do you want to start?\n",
    "choices": [
      { "text": "Beginning", "next": "node3" },
      { "text": "Checkpoint 1 (Start of the quest)", "next": "12" }, 
      //TODO
    ]
  },

  "node3": {
    "text": "Oh...     You hacked the terminal?\n",
    "choices": [
      { "text": "Ammm... no?", "next": "node4" },
    ]
  },

  "node4": {
    "text": "...   Really?...\n",
    "choices": [
      { "text": "...", "next": "node7" },
      { "text": "I swear it!", "next": "node7" },
      { "text": "Ok I hacked it", "next": "node6" },
    ]
  },

  "node6": {
    "text": "I knew it! Jokes on us I guess. Will have to up the security\n",
    "choices": [
      { "text": "Get rekt losers.", "next": "node7" },
      { "text": "Who are you?", "next": "node7" },
    ]
  },

  "node7": {
    "text": "Ok then. Hi! We are team Sinji Delfini. We are second year Data Science masters students at Faculty of Computer Science and Informatics in Ljubljana.\n",
    "choices": [
      { "text": "Hi! Nice to meet you", "next": "node9" },
      { "text": "Wierd flex...", "next": "node8" },
    ]
  },

  "node8": {
    "text": "Yes... it actualy is a flex...\n",
    "choices": [
      { "text": "k", "next": "node9" },
    ]
  },

  "node9": {
    "text": "Anyway being a DS student ain't all sunshine and rainbows you know.\n",
    "choices": [
      { "text": "You are being too dramatic", "next": "10" },
      { "text": "You don't say...", "next": "10" },
    ]
  },

  "10": {
    "text": "Yeah! You dont belive us?\n",
    "choices": [
      { "text": "No I don't", "next": "11" },
      { "text": "Nobody does", "next": "11" },
      { "text": "You guys are a bunch of pu*****", "next": "11" },
    ]
  },

  "11": {
    "text": "Ha... I'd like to see you try!\n",
    "choices": [
      { "text": "Bring it on.", "next": "12" },
    ]
  },

  "12": {
    "text": "Welcome to the 'Your casual Data Science work'\n",
    "choices": [
      { "text": "Continue...", "next": "14" },
      { "text": "Checpoint screen...", "next": "13" },
    ]
  },

  "13": {
    "text": "Ha! Chickening out are we?\n",
    "choices": [
      { "text": "Pff", "next": "node2" },
    ]
  },

  "7": {
    "text": "\n",
    "choices": [
      { "text": "", "next": "" },
    ]
  },

  "7": {
    "text": "\n",
    "artId" : "",
    "choices": [
      { "text": "", "next": "" },
    ]
  },

};

const ArtData = {

  "cat_dataset": {
    "lines": [
        [
        " ____________________________",
        "|                            |",
        "|   ________________         |",
        "|  |                |        |",
        "|  |  DATASET:      |        |",
        "|  |  Cat Nap.csv   |        |",
        "|  |________________|        |",
        "|                            |",
        "|       (\\_._/)               |",
        "|       ( o o )               |",
        "|       (> ^ <)               |",
        "|                            |",
        "|  You stare at your screen   |",
        "|  hoping cats talk in code   |",
        "|____________________________|"
        ],
        [
        " ____________________________",
        "|                            |",
        "|   ________________         |",
        "|  |                |        |",
        "|  |  DATASET:      |        |",
        "|  |  Cat Nap.csv   |        |",
        "|  |________________|        |",
        "|                            |",
        "|      (\\_._/)                |",
        "|       ( o o )               |",
        "|       (> ^ <)               |",
        "|                            |",
        "|  You stare at your screen   |",
        "|  hoping cats talk in code   |",
        "|____________________________|"
        ],
        [
        " ____________________________",
        "|                            |",
        "|   ________________         |",
        "|  |                |        |",
        "|  |  DATASET:      |        |",
        "|  |  Cat Nap.csv   |        |",
        "|  |________________|        |",
        "|                            |",
        "|       (\\_._/)               |",
        "|       ( o o )               |",
        "|       (> ^ <)               |",
        "|                            |",
        "|  You stare at your screen   |",
        "|  hoping cats talk in code   |",
        "|____________________________|"
        ],
        [
        " ____________________________",
        "|                            |",
        "|   ________________         |",
        "|  |                |        |",
        "|  |  DATASET:      |        |",
        "|  |  Cat Nap.csv   |        |",
        "|  |________________|        |",
        "|                            |",
        "|        (\\_._/)              |",
        "|       ( o o )               |",
        "|       (> ^ <)               |",
        "|                            |",
        "|  You stare at your screen   |",
        "|  hoping cats talk in code   |",
        "|____________________________|"
        ],
    ]
  },


};