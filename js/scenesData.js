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
      { "text": "Checkpoint 2 (Project beginning)", "next": "29" }, 
      { "text": "Checkpoint 3 (Model choice)", "next": "42" }, 
      { "text": "Checkpoint 4 (Server deploy)", "next": "63" }, 
      { "text": "Checkpoint 5 (Report completed)", "next": "78" }, 
    ]
  },

  "node3": {
    "text": "Oh...     You hacked the terminal?\n",
    "artId": "blinking",
    "choices": [
      { "text": "Ammm... no?", "next": "3" },
    ]
  },

  "3": {
    "text": "Hmmmm...\n",
    "artId": "not_buying",
    "nextId": "node4",
    "timeout": 500,
  },

  "node4": {
    "text": "...   Really?...\n",
    "artId": "question",
    "choices": [
      { "text": "...", "next": "node7" },
      { "text": "I swear it!", "next": "node7" },
      { "text": "Ok I hacked it", "next": "node6" },
    ]
  },

  "node6": {
    "text": "I knew it! Jokes on us I guess. Will have to up the security.\n",
    "artId": "not_buying",
    "choices": [
      { "text": "Get rekt losers.", "next": "7" },
      { "text": "Who are you?", "next": "node7" },
    ]
  },

  
  "7": {
    "text": "Watch it buddy...\n",
    "artId": "not_buying",
    "nextId": "node7",
    "timeout": 1000,
  },

  "node7": {
    "text": "Ok then. Hi! We are team Sinji Delfini. We are second year Data Science masters students at Faculty of Computer Science and Informatics in Ljubljana.\n",
    "artId": "smiling",
    "choices": [
      { "text": "Hi! Nice to meet you", "next": "node9" },
      { "text": "Wierd flex...", "next": "node8" },
    ]
  },

  "node8": {
    "artId": "wander",
    "text": "Yes... it actualy is a flex...\n",
    "choices": [
      { "text": "k", "next": "node9" },
    ]
  },

  "node9": {
    "text": "Anyway being a DS student ain't all sunshine and rainbows you know.\n",
    "artId": "blinking",
    "choices": [
      { "text": "You are being too dramatic", "next": "10" },
      { "text": "You don't say...", "next": "10" },
    ]
  },

  "10": {
    "text": "Yeah! You dont belive us?\n",
    "artId": "question",
    "choices": [
      { "text": "No I don't", "next": "11" },
      { "text": "Nobody does", "next": "11" },
      { "text": "You guys are a bunch of pu*****", "next": "11" },
    ]
  },

  "11": {
    "text": "Ha... I'd like to see you try!\n",
    "artId": "blinking",
    "choices": [
      { "text": "Bring it on.", "next": "12" },
    ]
  },

  "12": {
    "text": "Welcome to the 'Your casual Data Science work'\n",
    "artId": "smiling",
    "choices": [
      { "text": "Continue...", "next": "14" },
      { "text": "Checpoint screen...", "next": "13" },
    ]
  },

  "13": {
    "text": "Ha! Chickening out are we?\n",
    "artId": "smiling",
    "choices": [
      { "text": "Pff", "next": "node2" },
    ]
  },

  "14": {
    "text": "Imagine this for a second... You start the first year semester\n",
    "artId": "blinking",
    "nextId": "15",
    "timeout": 1500,
  },

  "15": {
    "text": "Fresh off the summer break...\n",
    "artId": "blinking",
    "nextId": "16",
    "timeout": 1000,
  },

  "16": {
    "text": "BAM! Principles of Uncertainty! Do you even know what uncertainty is?\n",
    "artId": "zoomed",
    "choices": [
      { "text": "Yes", "next": "17" },
      { "text": "Ughh...", "next": "17" },
    ]
  },

  "17": {
    "text": "Hmm ok.. So what is the number one rule of uncertainty?\n",
    "artId": "question",
    "choices": [
      { "text": "It in uncertain?", "next": "18" },
      { "text": "You should use proper techniques for it", "next": "19" },
      { "text": "It should be quantified", "next": "20" },
    ]
  },

  "18": {
    "text": "What? What kind of answer is that. Erik would kill you! Off with you!\n",
    "artId": "not_buying",
    "choices": [
      { "text": "Try again...", "next": "node2" },
    ]
  },

  "19": {
    "text": "Ammm. That's a very iffy answer man. Try to do better. I'll let you pass. For now...\n",
    "artId": "blinking",
    "choices": [
      { "text": "Harder than it looks... Thanks", "next": "20" },
      { "text": "F*** you...", "next": "20" },
    ]
  },

  "20": {
    "text": "Uncertainty should be quantified. ALWAYS!!! Remember that!\n",
    "artId": "blinking",
    "choices": [
      { "text": "Ok boss", "next": "21" },
    ]
  },
  
  "21": {
    "text": "Anyway...\n",
    "artId": "smiling",
    "nextId": "22",
    "timeout": 800,
  },

  "22": {
    "text": "First hour of Principles of Uncertainty and you are already thinking... I messed up with this...\n",
    "artId": "blinking",
    "nextId": "23",
    "timeout": 2000,
  },

  "23": {
    "text": "Here comes the second subject...\n",
    "artId": "not_buying",
    "nextId": "24",
    "timeout": 1300,
  },

  "24": {
    "text": "INTRODUCTION TO DATA SCIENCE!          ... or IDS for short\n",
    "artId": "not_buying",
    "choices": [
      { "text": "Doesn't seem scary to me", "next": "25" },
    ]
  },

  "25": {
    "text": "Yeah actually a pretty chill subject. Still annoying tho. You get to do a project just like that. Haven't learned s*** by now and you are expected to do a project?\nWell it was in teams but still...",
    "artId": "blinking",
    "choices": [
      { "text": "It can't be that bad", "next": "26" },
      { "text": "Seems like DS students like to cry a lot", "next": "26" },
    ]
  },

  "26": {
    "text": "Ok smartass lets see you do it! \n",
    "artId": "not_buying",
    "choices": [
      { "text": "Wait wha...", "next": "27" },
    ]
  },

"27": {
    "text": "Hello dear new DS recruit!\n",
    "artId": "smiling",
    "nextId": "28",
    "timeout": 1200,
  },

"28": {
    "text": "Thank you for participating in this project! Are you ready to begin?\n",
    "artId": "wander",
    "nextId": "29.1",
    "timeout": 2500,
  },

"29.1": {
    "text": "No answer? I'll take that as a yes! GREAT!\n",
    "artId": "wander",
    "nextId": "29",
    "timeout": 1500,
  },

  
  "29": {
    "text": "Welcome to the IDS project. Ready to start?\n",
    "artId": "smiling",
    "choices": [
      { "text": "This is gonna be easy", "next": "30" },
      { "text": "Stop wasting my time", "next": "30" },
      { "text": "Checkpoint screen...", "next": "13" },
    ]
  },
  
  "30": {
    "text": "Ha. This is gonna be fun. First off how should I call you?\n",
    "artId": "wander",
    "choices": [
      { "text": "My name is...", "next": "31" },
    ]
  },
  
  "31": {
    "text": "...\n",
    "artId": "wander",
    "nextId": "32",
    "timeout": 1000,
  },
  
  "32": {
    "text": "Stingy\n",
    "artId": "smiling",
    "nextId": "32.1",
    "timeout": 800,
  },
  
  "32.1": {
    "text": "Yes. I'll call you Stingy. You seem like it.\n",
    "artId": "smiling",
    "choices": [
      { "text": "Whatever", "next": "34" },
      { "text": "Amm rude?", "next": "33" },
    ]
  },

  
  "33": {
    "text": "Who's crying now?\n",
    "artId": "question",
    "nextId": "34",
    "timeout": 1200,
  },

    
  "34": {
    "text": "Here is the situation Stingy. The professor has given you a task...\n",
    "artId": "blinking",
    "choices": [
      { "text": "That's a stupid name...", "next": "35" },
      { "text": "Go on.", "next": "35" },
    ]
  },
    
"35": {
    "text": "Your job is to predict the probability of student dropout based on historical university data. Make sure that your answers are explainable. Erik won't pass you otherwise.\n",
    "artId": "blinking",
    "choices": [
        { "text": "Easy. Throw it into a neural network.", "next": "bad_nn" },
        { "text": "What data do we have?", "next": "data_inspect_good" },
        { "text": "This sounds ethically question...", "next": "ethics_branch" }
    ]
},

  
"bad_nn": {
    "text": "Ah yes. The sacred solution. Neural networks fix everything.\n",
    "artId": "not_buying",
    "nextId": "bad_nn_2",
    "timeout": 2000,
  },

"bad_nn_2": {
  "text": "You train a massive model. 12 layers. 4 hours training time.\nAccuracy: 52%.\n",
  "artId": "not_buying",
  "choices": [
    { "text": "That... seems bad.", "next": "bad_nn_3" },
  ]
},

"bad_nn_3": {
    "text": "No sh** Sherlock. Thats because it IS BAD Stingy!\n",
    "artId": "blinking",
    "nextId": "bad_nn_4",
    "timeout": 1500,
  },

"bad_nn_4": {
  "text": "Congratulations. You discovered overfitting. And failed the DS program in the process\n",
  "artId": "smiling",
  "choices": [
    { "text": "Let's restart.", "next": "node2" },
  ]
},




"ethics_branch": {
  "text": "My friend. You are a Data Scientist. You get 200k per year. You have no morals\n",
  "artId": "not_buying",
  "choices": [
    { "text": "Fair enough I guess...", "next": "ethics_branch_2" }
  ]
},

"ethics_branch_2": {
  "text": "What do we do?\n",
  "artId": "question",
  "choices": [
        { "text": "Easy. Throw data into a neural network.", "next": "bad_nn" },
        { "text": "What data do we have?", "next": "data_inspect_good" },
  ]
},

"data_inspect_good": {
  "text": "Correct instinct. Always inspect the data first.\nProfessor nods slightly.\n",
  "artId": "smiling",
  "choices": [
    { "text": "Show me the dataset.", "next": "37" }
  ]
},

"37": {
  "text": "We have:\n- Grades\n- Attendance\n- Previous education\n- 40% missing values\n",
  "artId": "smiling",
  "choices": [
    { "text": "Ignore missing values.", "next": "41" },
    { "text": "Impute them properly.", "next": "42" },
    { "text": "This dataset is trash.", "next": "43" },
  ]
},

"41": {
  "text": "Model crashes. Then works. Then lies to you.\n",
  "artId": "not_buying",
  "choices": [
    { "text": "So... imputation then?", "next": "42" },
  ]
},

"42": {
  "text": "Good. You quantify uncertainty in missing data. Erik would be proud. Maybe there is more to you than it seems Stingy.\nLets say that the data is good now. What are we doing next?",
  "artId": "smiling",
  "choices": [
    { "text": "MODELS!", "next": "46" },
    { "text": "More data cleanup!", "next": "47" },
    { "text": "Checkpoint screen...", "next": "13" },
  ]
},

"43": {
  "text": "Real world data is always trash.\nWelcome to Data Science my friend.\n",
  "artId": "not_buying",
  "choices": [
    { "text": "Fine. Let's clean it.", "next": "44" },
  ]
},

"44": {
  "text": "And how do you intend on cleaning the data?\n",
  "artId": "wander",
  "choices": [
    { "text": "Just drop the NaN values", "next": "41" },
    { "text": "Amm... Uncertainty?", "next": "45" },
  ]
},

"45": {
    "text": "Hmm that might have been an obvious answer.\n",
    "artId": "not_buying",
    "nextId": "42",
    "timeout": 1000,
  },


"46": {
  "text": "So what models are we using?.\n",
  "artId": "wander",
  "choices": [
    { "text": "Something simple or.. maybe not... This is harder than I thaught", "next": "48.1" },
    { "text": "Wait a second. Aren't there supposed to be teams?", "next": "50" },
  ]
},


"47": {
    
    "text": "Professor is in shock. PERFECT STINGY!\n But in all fairnes data can never be too clean. So lets continue with modeling shall we?\n",
    "artId": "zoomed",
    "nextId": "46",
    "timeout": 3000,
  },

"48.1": {
  "text": "You need some help. Maybe join a team?\n",
  "artId": "wander",
  "choices": [
    { "text": "Nah. I+ll solo it", "next": "48.2" },
    { "text": "Yes let's do it!", "next": "49" },
  ]
},


"48.2": {
    "text": "Ok suit yourself\n",
    "artId": "not_buying",
    "nextId": "48",
    "timeout": 1000,
  },

"48": {
  "text": "You are in for a wild ride Stingy hahaha. So what model?\n",
  "artId": "smiling",
  "choices": [
    { "text": "Logistic Regression", "next": "log_reg" },
    { "text": "Random Forest", "next": "random_forest" },
    { "text": "Gradient Boosting", "next": "gradient_boosting" },
  ]
},

"50": {
  "text": "Are you sure you want a teammate?\n",
  "artId": "question",
  "choices": [
    { "text": "Of course!", "next": "51" },
    { "text": "On second thought...", "next": "49" },
  ]
},

"51": {
  "text": "Suit yourself. Since you took your sweet time to remember to form a team only a few classmates are left.\nWho do you pick?\n",
  "artId": "wander",
  "choices": [
    { "text": "Žan 1", "next": "52" },
    { "text": "Matej", "next": "53" },
    { "text": "Vid", "next": "54" },
    { "text": "Žan 2", "next": "55" },
    { "text": "Wait there are two guys named Žan?", "next": "zan" },
  ]
},


"zan": {
    "text": "Yes... Beat it Stingy...\n",
    "artId": "not_buying",
    "nextId": "zan_51",
    "timeout": 1000,
  },

  
"zan_51": {
  "text": "So... Who do you pick?\n",
  "artId": "wander",
  "choices": [
    { "text": "Žan 1", "next": "52" },
    { "text": "Matej", "next": "53" },
    { "text": "Vid", "next": "54" },
    { "text": "Žan 2", "next": "55" },
  ]
},


"55": {
  "text": "Žan is a great guy. He loves mountainbikes and making the best reports in class.\n",
  "artId": "smiling",
  "choices": [
    { "text": "Bingo!", "next": "55.2" },
  ]
},

"55.2": {
"artId": "smiling",
  "text": "Well sadly for you just as you lock in your answer for the team. You get a message from him saying\n'Hey Stingy, I just broke both of my arms on the bike... so yeah..'.",
  "choices": [
    { "text": "OMG! I hope he gets better. I'll just have to do this alone then.", "next": "48" },
    { "text": "What a clown man. How does one break BOTH arms?!?!?", "next": "48" },
    { "text": "Can I change theams please?", "next": "swap_team" },
  ]
},


"54": {
    "artId": "smiling",
  "text": "This guy seems great! Knows his stuff and is friendy. He speaks funny tho since he is from Ptuj.\n",
  "choices": [
    { "text": "Oh.. ok", "next": "54.2" },
  ]
},


"54.2": {
    "artId": "blinking",
  "text": "'Ammm      \nSingy?'",
    "nextId": "54.3",
    "timeout": 800,
},

"54.3": {
    "artId": "not_buying",
  "text": "'My girlfriend just came back home from the exchange program. So I will be going home and won't be of much help. This won't be a problem right?'",
    "choices": [
        { "text": "A? What the actual f***.", "next": "54.4" },
        { "text": "Whatever I'll do this alone.", "next": "49" },
        { "text": "Can I change teams please?", "next": "swap_team" },
    ]
},


"54.4": {
    "artId": "smiling",
  "text": "I know right. Well tough luck i guess...",
    "nextId": "48",
    "timeout": 1200,
},

"53": {
    "artId": "wander",
  "text": "Good choice. I mean he did his bachelors in Glasgow. He has to be a good partner right?\n",
  "choices": [
    { "text": "Wait in Glasgow? Nice!", "next": "53.2" },
  ]
},

"53.2": {
    "artId": "smiling",
    "text": "WRONG!\n",
    "nextId": "53.3",
    "timeout": 800,
  },

"53.3": {
    "artId": "smiling",
  "text": "All this guy does is flame people on LOL and not give a single f*** about it... So basically you are alone...\n",
  "choices": [
    { "text": "Just great...", "next": "48" },
    { "text": "Can I change teams please?", "next": "swap_team" },
  ]
},


"52": {
    "artId": "not_buying",
    "text": "Hmm.. Honestly... Bad choice\n",
    "nextId": "52.2",
    "timeout": 1000,
  },

"swap_team": {
    "artId": "not_buying",
    "text": "Ok I'll let it slide. But people won't like you if you do this to them. So...\n",
    "nextId": "51",
    "timeout": 2000,
  },

"52.2": {
    "artId": "not_buying",
  "text": "All this guy is good for is spotting you on the bench and eating all of the protein bars in the vending machine.\n",
  "choices": [
    { "text": "But he seemed like a nice guy...", "next": "52.3" },
    { "text": "Amm can I swap please?", "next": "swap_team" },
  ]
},


"52.3": {
    "artId": "smiling",
  "text": "Well that's too bad for you. All he does is go to the gym and go to sleep at 22PM. You are alone on this.\n",
  "choices": [
    { "text": "Ahh whatever lets model some data!", "next": "48" },
  ]
},

"49": {
    "artId": "blinking",
    "text": "Sometimes working alone is better yes. Although...\n",
    "nextId": "48",
    "timeout": 1500,
  },


"log_reg": {
    "artId": "smiling",
    "text": "Simple. Interpretable. Solid.\nAccuracy: 71%.\nProfessor smiles slightly.\n",
    "choices": [
        { "text": "Ship it!", "next": "50.server" },
    ]
},

"random_forest": {
    "artId": "blinking",
  "text": "Better performance.\nAccuracy: 78%.\nInterpretability: meh.\n",
  "choices": [
    { "text": "Explain it somehow.", "next": "random_forest.1" },
  ]
},

"random_forest.1": {
     "artId": "question",
  "text": "And how exactly do you plan to do that? You know Erik did his Phd. in explainable AI?\n",
  "choices": [
    { "text": "I'll use PCA", "next": "pca" },
    { "text": "t-SNE and we are done", "next": "tsne" },
    { "text": "Amm... Shapley values maybe?", "next": "random_forest.2" },
  ]
},

"random_forest.2": {
     "artId": "smiling",
  "text": "HAHAHA. Ok buddy don't make me laugh now. Nobody knows how to use those. Lets just stick with Logistic regression ok?\n",
  "choices": [
    { "text": "Whatever... Logistic regression it is...", "next": "log_reg" },
  ]
},

"pca": {
    "artId": "not_buying",
    "text": "...  Did you just say PCA?\n",
    "nextId": "random_forest_fail_2",
    "timeout": 1000,
  },

"tsne": {
    "artId": "wander",
    "text": "Well... The visualisation now sure is nice but...\n",
    "nextId": "random_forest_fail_2",
    "timeout": 2000,
  },

"random_forest_fail_2": {
    "artId": "not_buying",
  "text": "Are you stupid? FAILED!!! Better luck next year loser.\n",
  "choices": [
    { "text": "Wait one year and try again", "next": "node2" },
  ]
},

"gradient_boosting": {
    "artId": "not_buying",
  "text": "You squeeze every last percent.\nAccuracy: 81%.\nNow explain 300 trees to Erik. I'll wait..\n",
  "choices": [
    { "text": "This was a mistake. Let's use something else...", "next": "48_fail" },
  ]
},

"48_fail": {
    "artId": "blinking",
  "text": "It's 50/50 now Stingy...\n",
  "choices": [
    { "text": "Logistic Regression", "next": "log_reg" },
    { "text": "Random Forest", "next": "random_forest" },
  ]
},

"50.server": {
    "artId": "blinking",
    "text": "Deploying to Uni servers...\n",
    "nextId": "60",
    "timeout": 1300,
  },

"60": {
    "artId": "not_buying",
  "text": "ModuleNotFoundError.\nDifferent Python version.\nDifferent library versions.\nClassic. What now?\n",
  "choices": [
    { "text": "Create requirements.txt and containerize with Docker.", "next": "62" },
    { "text": "It worked locally. That should be enough.", "next": "61" }
  ]
},


"61": {
    "artId": "smiling",
    "text": "Nice try... I don't think the professor is going to buy that. Lets dockerize it.\n",
    "choices": [
        { "text": "Seems like a lot of work.", "next": "62" },
    ]
  },

"62": {
    "artId": "wander",
  "text": "You think you can do that? What is the flag for detaching the docker to run in the background?\n",
  "choices": [
    { "text": "-d", "next": "63" },
    { "text": "-b", "next": "docker_fail" },
    { "text": "-s", "next": "docker_fail" },
    { "text": "Why do I need to know that?", "next": "docker_fail_1" }
  ]
},
"62.2": {
    "artId": "wander",
  "text": "What is the flag for detaching the docker to run in the background?\n",
  "choices": [
    { "text": "-d", "next": "63" },
    { "text": "-b", "next": "docker_fail" },
    { "text": "-s", "next": "docker_fail" },
  ]
},


"docker_fail_1": {
    "artId": "smiling",
    "text": "Because you are a Data scientist? I don't know ask the professor... Anyway\n",
    "nextId": "62.2",
    "timeout": 2000,
  },

"docker_fail": {
    "artId": "not_buying",
    "text": "It is -d. That stands for detach. You failed. Unfair? Maybe, but ask Matej. He had to know it too.\n",
    "choices": [
        { "text": "Retry", "next": "node2" },
    ]
  },


"63": {
    "artId": "smiling",
  "text": "Thats right! Ok the model deployment is successfull. The f1 score is looking good.\n",
  "choices": [
    { "text": "See that was easy. We are done", "next": "64" },
    { "text": "Nice! what next?", "next": "65" },
    { "text": "Didn't even break a sweat.", "next": "64" },
    { "text": "Checkpoint screen...", "next": "13" },
  ]
},

"64": {
    "artId": "question",
    "text": "Easy there cowboy\n",
    "nextId": "65",
    "timeout": 1200,
  },

  
"65": {
    "artId": "blinking",
  "text": "It's report time! What is your model good for if you can't sell it right? I bet you are gratefull for that simple Logistic regression model now.\n",
  "choices": [
    { "text": "Lets get this over with", "next": "66" },
    { "text": "Whatever I could make Random forest work...", "next": "66" },
  ]
},

  
"66": {
     "artId": "blinking",
  "text": "Ok lets do this now. What will you use for the report?\n",
  "choices": [
    { "text": "Word", "next": "67" },
    { "text": "Google documents", "next": "67" },
    { "text": "LaTeX", "next": "68" },
  ]
},
  
"67": {
     "artId": "not_buying",
  "text": "What are you a child Stingy??? Real men use LateX\n",
  "choices": [
    { "text": "Ugh...", "next": "68" },
  ]
},
  
"68": {
    "artId": "blinking",
  "text": "So... LaTeX\n",
    "nextId": "69",
    "timeout": 1000,
},
  
"69": {
    "artId": "blinking",
  "text": "You open Overleaf and start editing the template the professor gave you. Progress is good and having no teammates that would get in your way is great.\n",
    "nextId": "70",
    "timeout": 4000,
},
  
"70": {
    "artId": "wander",
  "text": "You are almost finished. But before you throw everything into ChatGPT for the final 'polish' we need a plot. What should we use for the plots?\n",
  "choices": [
    { "text": "matplotlib", "next": "71" },
    { "text": "ggplot", "next": "72" },
    { "text": "chart.js", "next": "73" },
  ]
},
  
"71": {
    "artId": "not_buying",
  "text": "I mean at least use seaborn with it. So you make it look like ggplot...\n",
  "choices": [
    { "text": "pip install seaborn", "next": "74" },
    { "text": "Swap to ggplot", "next": "72" },
  ]
},
  
"72": {
    "artId": "smiling",
  "text": "Perfect choice! ggplot is the best!\n",
    "nextId": "74",
    "timeout": 1300,
},
  
"73": {
    "artId": "question",
  "text": "What are you a web developer? I almost puked just saying that library name. Back to general masters you go\n",
  "choices": [
    { "text": "Restart semester", "next": "node2" },
  ]
},
  
"74": {
    "artId": "smiling",
  "text": "Plots are done and the LLM spat out the corrected text. Just quantify the uncertainty and you are finished.\n",
  "choices": [
    { "text": "Seems easy enough", "next": "75" },
  ]
},
  
"75": {
    "artId": "not_buying",
  "text": "Oh reeeealy???\n",
    "nextId": "76",
    "timeout": 1300,
},
  
"76": {
    "artId": "question",
  "text": "Now how do we do that exactly Stingy?\n",
  "choices": [
    { "text": "Train/test split", "next": "tt" },
    { "text": "MCMC", "next": "mcmc" },
    { "text": "Cross validation", "next": "77" },
    { "text": "MSE", "next": "mse" },
  ]
},
  
"tt": {
    "artId": "not_buying",
  "text": "Oh comon. We are not in kindergarden anymore! This is too basic for DS program. You came far but uncertainty is holy here. Sadly you fail.\n",
  "choices": [
    { "text": "Try again next year", "next": "node2" },
  ]
},

  
"mcmc": {
    "artId": "not_buying",
  "text": "You think you are clever huh?\n",
    "nextId": "mcmc.1",
    "timeout": 1300,
},

"mcmc.1": {
    "artId": "zoomed",
  "text": "Do you even know what MCMC is? No you dont. Bayesian statistics is way out of your league for now. And maybe forever if I think about it. Failed\n",
  "choices": [
    { "text": "Try again next year", "next": "node2" },
  ]
},

"mse": {
    "artId": "blinking",
  "text": "MSE?\n",
    "nextId": "mse.1",
    "timeout": 1000,
},

"mse.1": {
    
    "artId": "wander",
  "text": "And what exactly are you gonna do with MSE?\n",
    "nextId": "mse.2",
    "timeout": 1800,
},

"mse.2": {
    
    "artId": "not_buying",
  "text": "MSE is not a f****** way to quantify uncertainty, it is a LOSS FUNCTION! Ah whatever. I'm not even gonna bother. Just give up on DS.\n",
  "choices": [
    { "text": "Restart", "next": "node2" },
  ]
},


"77": {
    "artId": "smiling",
  "text": "Exactly!\n",
    "nextId": "78",
    "timeout": 1000,
},

  
"78": {
    "artId": "smiling",
  "text": "Report is done. Plots are polished and we are ready for the project defense!\n",
  "choices": [
    { "text": "Wait there is a defense?", "next": "79" },
    { "text": "Checkpoint screen...", "next": "13" },
  ]
},


"79": {
    "artId": "smiling",
  "text": "Hahahahahaha\n",
    "nextId": "80",
    "timeout": 900,
},

"80": {
    "artId": "blinking",
  "text": "Ofcourse there is a defense! So on you present all of the findings. And Erik asks you a question:\n",
    "nextId": "81",
    "timeout": 3000,
},


"81": {
    "artId": "wander",
    "text": "'Considering that the data was taken in different years could you say that it is time related and...'\n",
    "choices": [
        { "text": "And?", "next": "82" },
    ]
},

"82": {
    "artId": "blinking",
  "text": "...\n",
    "nextId": "83",
    "timeout": 1000,
},

"83": {
    "artId": "not_buying",
  "text": "Whatever lets not even bother. No matter what you answer it won't be good enough.\n",
  "choices": [
    { "text": "Seems unfair", "next": "84" },
    { "text": "Comon. Let me at least try.", "next": "84" },
  ]
},

"84": {
    "artId": "smiling",
  "text": "Congratulations! You pass. Just barely. Welcome to Data Science... second semester. Now get ready for MLDS...\n",
  "choices": [
    { "text": "Just great...", "next": "85" },
  ]
},

"85": {
    "artId": "smiling",
  "text": "Thanks for playing all the way through! We hope you had fun!\n",
    "nextId": "86",
    "timeout": 3000,
},

"86": {
    "artId": "smiling",
  "text": "Team SINJI DELFINI\n",
  "choices": [
    { "text": "Back to the begining", "next": "node2" },
  ]
},
  

};

const ArtData = {
"blinking": {
"lines": [
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ############        ############                         ",
"                        ################    ################                       ",
"                         ############        ############                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
]
},
"zoomed": {
"lines": [
[
"                                                                                 ",
"                                                                                 ",
"                                                                                 ",
"                                                                                 ",
"                                                                                 ",
"                                                                                 ",
"                          #######                  #######                       ",
"                        ##       ##              ##       ##                     ",
"                       #           #            #           #                    ",
"                       #           #            #           #                    ",
"                       #           #            #           #                    ",
"                       #           #            #           #                    ",
"                       #           #            #           #                    ",
"                        ##       ##              ##       ##                     ",
"                          #######                  #######                       ",
"                                                                                 ",
"                                                                                 ",
"                                                                                 ",
"                                                                                ",
"                                                                                "
],
[
"                                                                               ",
"                                                                               ",
"                                                                               ",
"                                                                               ",
"                                                                               ",
"                                                                               ",
"                        #######                  #######                       ",
"                      ##       ##              ##       ##                     ",
"                     #           #            #           #                    ",
"                     #           #            #           #                    ",
"                     #           #            #           #                    ",
"                     #           #            #           #                    ",
"                     #           #            #           #                    ",
"                      ##       ##              ##       ##                     ",
"                        #######                  #######                       ",
"                                                                               ",
"                                                                               ",
"                                                                               ",
"                                                                              ",
"                                                                                "
],
]
},
"not_buying": {
"lines": [
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                       ##########              ##########                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                       ##########              ##########                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                       ##########              ##########                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                       ##########              ##########                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                       ##########              ##########                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                       ##########              ##########                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
]
},
"question": {
"lines": [
[
"                                                                                ",
"                        ________                                                ",
"                       /        \\                                              ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                       ##########              ##########                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                        ________                                                ",
"                       /        \\                                              ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                       ##########              ##########                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                        ________                                                ",
"                       /        \\                                              ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                       ##########              ##########                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                        ________                                                ",
"                       /        \\                                              ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                       ##########              ##########                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                        ________                                                ",
"                       /        \\                                              ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                       ##########              ##########                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],

]
},
"wander": {
"lines": [
[
"                                                                                ",
"                        ________                                                ",
"                       /        \\                                              ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                        ________                                                ",
"                       /        \\                                              ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                        ________                                                ",
"                       /        \\                                              ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                        ________                                                ",
"                       /        \\                                              ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                        ________                                                ",
"                       /        \\                                              ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                      #          #            #          #                      ",
"                       ##      ##              ##      ##                       ",
"                         ######                  ######                         ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],

]
},
"smiling": {
"lines": [
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                         ######                  ######                         ",
"                       ##      ##              ##      ##                       ",
"                      #          #            #          #                      ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
],
]
},
}
;