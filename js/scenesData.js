const ScenesData = {

  "node1": {
    "text": "You receive your first dataset: 'Predict cat happiness based on nap length.'\n",
    "artId": "cat_dataset",
    "choices": [
      { "text": "Explore data in pandas", "next": "node2" },
      { "text": "Watch one more TikTok", "next": "node1_fail" },
      { "text": "Call your mentor for advice", "next": "node2" }
    ]
  },
  "node2": {
    "text": "You start exploring the data. One column is 'Mood_Level' but half the values are '???'.\n",
    "artId": "missing_values",
    "choices": [
      { "text": "Drop missing values immediately", "next": "node3_fail" },
      { "text": "Ask quirky classmate Alice for help", "next": "node3" },
      { "text": "Fill missing values with random numbers", "next": "node3_fail" }
    ]
  },
  "node3": {
    "text": "Alice suggests visualizing naps vs mood.\n",
    "artId": "scatter_plot",
    "choices": [
      { "text": "Make a scatter plot", "next": "node4" },
      { "text": "Ignore Alice and nap yourself", "next": "node3_fail" },
      { "text": "Plot but use comic sans font", "next": "node4" }
    ]
  },
  "node4": {
    "text": "You notice nap length sometimes negative (cats dreaming?).\n",
    "artId": "negative_naps",
    "choices": [
      { "text": "Remove negative values", "next": "node5" },
      { "text": "Pretend negative naps are cool", "next": "node4_fail" },
      { "text": "Ask Bob, the conspiracy theorist coder", "next": "node5" }
    ]
  },
  "node5": {
    "text": "Feature engineering time. You consider adding 'Cuddle_Score' = naps × pets petted.\n",
    "artId": "cuddle_score",
    "choices": [
      { "text": "Add Cuddle_Score", "next": "node6" },
      { "text": "Ignore it and watch cat memes", "next": "node5_fail" },
      { "text": "Make a feature for pizza theft instead", "next": "node6" }
    ]
  },
  "node6": {
    "text": "Time to train a model. Alice suggests linear regression. Bob suggests neural nets for one data point.\n",
    "artId": "modeling_room",
    "choices": [
      { "text": "Use linear regression", "next": "node7" },
      { "text": "Try Bob's neural net anyway", "next": "node6_fail" },
      { "text": "Ask the cat for intuition", "next": "node7" }
    ]
  },
  "node7": {
    "text": "Model predicts happiness poorly. Cats stare judgmentally.\n",
    "artId": "evaluation_room",
    "choices": [
      { "text": "Tune hyperparameters", "next": "node8" },
      { "text": "Cry into your pizza", "next": "node7_fail" },
      { "text": "Ask Carol, the debugging wizard", "next": "node8" }
    ]
  },
  "node8": {
    "text": "Model now works. Time to make a report.\n",
    "artId": "report_desk",
    "choices": [
      { "text": "Make a shiny dashboard", "next": "node9" },
      { "text": "Just email a screenshot", "next": "node8_fail" },
      { "text": "Write a poem instead", "next": "node9" }
    ]
  },
  "node9": {
    "text": "Your report impresses peers. Someone challenges your feature.\n",
    "artId": "peer_review",
    "choices": [
      { "text": "Defend Cuddle_Score passionately", "next": "node10" },
      { "text": "Laugh nervously and nod", "next": "node9_fail" },
      { "text": "Suggest a dance-off", "next": "node10" }
    ]
  },
  "node10": {
    "text": "Hackathon ends. You win 'Most Likely to Be Adopted by Cats.'\n",
    "artId": "winning_moment",
    "choices": [
      { "text": "Celebrate with pizza and cats", "next": "end" },
      { "text": "Frame your dataset", "next": "end" },
      { "text": "Take a nap, as any good data scientist should", "next": "end" }
    ]
  }
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

  "missing_values": {
    "lines": [
    [
      " ____________________________",
      "|   M O O D   L E V E L      |",
      "|----------------------------|",
      "| 0 | Happy                  ? |",
      "| 1 | ???                     |",
      "| 2 | Grumpy                  |",
      "| 3 | ???                     |",
      "| 4 | Ecstatic                 |",
      "|____________________________|",
      "|       (\\_._/)               |",
      "|       ( o o )               |",
      "|       (> ^ <)               |",
      "|    Data is confusing cats   |",
      "|    or cats are confusing me |",
      "|____________________________|"
    ],
]
  },

  "scatter_plot": {
    "lines": [
    [
      " ____________________________",
      "|      Mood vs Nap           |",
      "|                            |",
      "|    *                       |",
      "|       *     *              |",
      "|  *           *             |",
      "|      *                     |",
      "|           *    *           |",
      "|   *                        |",
      "|       *         *          |",
      "|                            |",
      "|   X: Nap Hours             |",
      "|   Y: Mood Level            |",
      "|____________________________|"
    ],
]
  },

  "negative_naps": {
    "lines": [
    [
      " ____________________________",
      "|   NAP LENGTH ANOMALY       |",
      "|----------------------------|",
      "| -2 | ?                      |",
      "| -1 | ???                    |",
      "|  0 | Meh                    |",
      "|  2 | Happy                   |",
      "|  4 | Ecstatic                |",
      "|____________________________|",
      "|   (\\_._/)                  |",
      "|   ( o o )                  |",
      "|   (> ^ <)                  |",
      "| Cats dream backwards?       |",
      "|____________________________|"
    ],
]
  },

  "cuddle_score": {
    "lines": [
    [
      " ____________________________",
      "| FEATURE ENGINEERING LAB     |",
      "|----------------------------|",
      "| Nap Hours x Pets Petted =  |",
      "|       CUDDLE_SCORE          |",
      "|                            |",
      "|    (\\_._/)                  |",
      "|    ( o o )                  |",
      "|    (> ^ <)                  |",
      "| Cats supervising your math |",
      "|____________________________|"
    ],
]
  },

  "modeling_room": {
    "lines": [
    [
      " ____________________________",
      "|      MODELING ROOM          |",
      "|----------------------------|",
      "|  Alice: Linear regression  |",
      "|  Bob: Neural net on 1 row  |",
      "|                            |",
      "|     (\\_._/)                 |",
      "|     ( o o )                 |",
      "|     (> ^ <)                 |",
      "|   Which algorithm will you?|",
      "|____________________________|"
    ],
]
  },

  "evaluation_room": {
    "lines": [
    [
      " ____________________________",
      "|      EVALUATION ROOM        |",
      "|----------------------------|",
      "|   Actual vs Predicted       |",
      "|   ^     *                  |",
      "|  | *    *                  |",
      "|  |  *                      |",
      "|  |       *                 |",
      "|   ------------------------|",
      "|  Cats glare in binary       |",
      "|  (\\_._/)                    |",
      "|  ( o o )                    |",
      "|  (> ^ <)                    |",
      "|____________________________|"
    ],
]
  },

  "report_desk": {
    "lines": [
    [
      " ____________________________",
      "|      REPORT DESK           |",
      "|----------------------------|",
      "|   Dashboard loading...     |",
      "|   ███░░░░░                 |",
      "|                            |",
      "|    (\\_._/)                  |",
      "|    ( o o )                  |",
      "|    (> ^ <)                  |",
      "|  Cats judge your visuals    |",
      "|____________________________|"
    ],
    [
      " ____________________________",
      "|      REPORT DESK           |",
      "|----------------------------|",
      "|   Dashboard loading...     |",
      "|   ████░░░                  |",
      "|                            |",
      "|   (\\_._/)                   |",
      "|    ( o o )                  |",
      "|    (> ^ <)                  |",
      "|  Cats judge your visuals    |",
      "|____________________________|"
    ],
    [
      " ____________________________",
      "|      REPORT DESK           |",
      "|----------------------------|",
      "|   Dashboard loading...     |",
      "|   ██████                   |",
      "|                            |",
      "|    (\\_._/)                  |",
      "|    ( o o )                  |",
      "|    (> ^ <)                  |",
      "|  Cats judge your visuals    |",
      "|____________________________|"
    ],
]
  },

  "peer_review": {
    "lines": [
    [
      " ____________________________",
      "|      PEER REVIEW           |",
      "|----------------------------|",
      "|  \"Cuddle_Score is bogus!\"  |",
      "|  \"Nonsense!\"               |",
      "|                            |",
      "|   (\\_._/)  (\\_._/)         |",
      "|   ( o o )  ( o o )         |",
      "|   (> ^ <)  (> ^ <)         |",
      "|  Two cats watching you      |",
      "|____________________________|"
    ],
]
  },

  "winning_moment": {
    "lines": [
    [
      " ____________________________",
      "|      WINNING MOMENT        |",
      "|----------------------------|",
      "|    Trophy: Cat Lover        |",
      "|                            |",
      "|    (\\_._/) (\\_._/) (\\_._/) |",
      "|    ( o o ) ( o o ) ( o o ) |",
      "|    (> ^ <) (> ^ <) (> ^ <) |",
      "|                            |",
      "|  Cats cheer your victory    |",
      "|  Pizza in paw, data saved   |",
      "|____________________________|"
    ],
]
  }

};