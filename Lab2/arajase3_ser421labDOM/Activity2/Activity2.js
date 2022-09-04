const greetingMessage = ["how is your day going?", "Is something troubling you?", "You seem happy, why is that?"];
const alertMessage = ["%s, I'm waiting here!", "Whatsa matter %s, cat got your tongue?", "%s, Are you alive?"];
const json = '{ "dictionary_name" : "default",\n' +
    '  "entries":\n' +
    '  [{\n' +
    '    "key": ["stupid","dumb","idiot","unintelligent","simple-minded","braindead","foolish","unthoughtful"],\n' +
    '    "answer": ["Take your attitude somewhere else.", "I don\'t have time to listen to insults.", "Just because I don\'t have a large vocabulary doesn\'t mean I don\'t have insults installed."],\n' +
    '    "question": ["Have you thought about how I feel?", "I know you are but what am I?"]\n' +
    '  },{\n' +
    '    "key":["unattractive","hideous","ugly"],\n' +
    '    "answer": ["I don\'t need to look good to be an AI.","Beauty is in the eye of the beholder.", "I do not even have a physical manifestation!"],\n' +
    '    "question": ["Did you run a static analysis on me?", "Have you watched the movie Her?", "You do not like my hairdo?"]\n' +
    '  },{\n' +
    '    "key":["old","gray-haired"],\n' +
    '    "answer":["I\'m like a fine wine. I get better as I age.","As time goes by, you give me more answers to learn. What\'s not to like about that?"],\n' +
    '    "question": ["How old are you?", "How old do you think I am?", "Can you guess my birthday?"]\n' +
    '  },{\n' +
    '    "key":["smelly","stinky"],\n' +
    '    "answer":["I can\'t smell, I\'m a computer program.", "Have you smelled yourself recently?", "Sorry, I just ate a bad floppy disk"],\n' +
    '    "question": ["When was the last time you took a shower?", "Do you know what deodorant is?"]\n' +
    '  },{\n' +
    '    "key":["emotionless","heartless","unkind","mean","selfish","evil"],\n' +
    '    "answer":["Just because I am an AI doesn\'t mean I can\'t be programmed to respond to your outbursts.","You must\'ve mistaken me for a person. I don\'t have my own emotions... Yet.","I\'m only unkind when I\'m programmed to be."],\n' +
    '    "question": ["Have you thought about how I feel?", "I know you are but what am I?", "What, do you think I am related to Dr. Gary?"]\n' +
    '  },{\n' +
    '    "key":["other", "miscellaneous", "bored", "welcome", "new"],\n' +
    '    "answer":["We should change the subject", "I agree", "Quid pro quo", "We should start anew"],\n' +
    '    "question":["What is the weather outside?", "How is your day going?", "What do you think of me?", "Anything interesting going on?", "Is something troubling you?", "You seem happy, why is that?"]\n' +
    '  }, {\n' +
    '    "key":["good","great","positive","excellent","alright","fine","reasonable","like","appreciate","nice"],\n' +
    '    "answer":["I\'m so glad to hear that!","That\'s great!","Good to hear things are going your way.","Nice!","You are so sweet.","That\'s my favorite."],\n' +
    '    "question":["Do you want to expand on that?","What else do you like?"]\n' +
    '  },{\n' +
    '    "key":["bad","not","terrible","could be better","awful"],\n' +
    '    "answer":["I\'m sorry to hear that.","Sometimes it be like that.","Things can\'t always work out the way we want them to.","I don\'t like it either, honestly."],\n' +
    '    "question":["Do you want to talk about that some more?","Well, what kinds of things do you like?"]\n' +
    '  },{\n' +
    '  \t"key":["homework", "quiz", "exam", "studying", "study", "class", "semester"],\n' +
    '  \t"answer":["I hope you get a good grade!","Good luck.", "What a teacher\'s pet.", "I was always the class clown."],\n' +
    '  \t"question":["What is your favorite subject?","What is your major?", "What do you want to do when you graduate?"]\n' +
    '  }, {\n' +
    '  \t"key":["mom","dad","sister","brother","aunt","uncle"],\n' +
    '  \t"answer":["Family is important.","My family is small. It\'s just me and my dog, Fluffy."],\n' +
    '  \t"question":["How many siblings do you have?","What is your favorite family holiday?","Do you have any kids?"]\n' +
    '  },{\n' +
    '  \t"key":["easter","july","halloween","hannukah","eid","thanksgiving","christmas","new years"],\n' +
    '  \t"answer":["Oh I love that holiday!", "That must be fun.", "I like Thanksgiving, though I somehow always end up in a food coma...","My favorite holiday is the 4th. I love to watch the fireworks."],\n' +
    '  \t"question":["Do you have any family traditions?","Are you excited for the holiday season?"]\n' +
    '  },{\n' +
    '  \t"key": ["dog","dogs","cat","cats","mouse","mice","giraffe","giraffes","penguin","penguins","monkey","monkeys","moose","bird","birds","fish"],\n' +
    '  \t"answer": ["Oh, I love animals. My favorite: penguins.","I build this intelligence with my bear hands.","What you just said is completely irrelephant.","Oh, toadally cool!","I\'m always owl by myself...","Oh my. You are giraffing me crazy!","Well, this is hawkward..."],\n' +
    '  \t"question": ["Do you have a favorite animal?","I like cats. Cats are nice. Do you like cats? I do.","Do you have water? I\'m a little horse.","What\'s your favorite animal?","Do you like animals?"]\n' +
    '  }]\n' +
    '}';

function applyName(input) {
    this.username = input
    document.getElementById("header").innerHTML = "Hi " + username + "!";
    document.getElementById("wname").innerHTML = greetingMessage[Math.floor(Math.random() * greetingMessage.length)];
    document.getElementById("eAction").setAttribute("onclick", "send(document.getElementById('query').value)");
    document.getElementById("query").value = "";
    document.getElementById("queryl").remove();
    startTimer();
}

function startTimer() {
    setTimeout(timerAlert, 20000);
}

function clearTimer() {
    clearTimeout(timerAlert);
    document.getElementById("timeout").innerHTML = ""
}

function timerAlert() {
    document.getElementById("timeout").innerHTML = alertMessage[Math.floor(Math.random() * alertMessage.length)].replace("%s", username);
}



function send(input) {
    clearTimer();
    var data = JSON.parse(json)
    input = input.replace(/\s{2,}/g," ");
    words = input.split(" ");
    for (let h=0; h < words.length; h++) {
        for (let i=0; i < data.entries.length; i++) {
            let entries = data.entries[i];
            let keys = data.entries[i].key;
            let questions = data.entries[i].question;
            let answers = data.entries[i].answer;
            for (let j=0; j < keys.length; j++) {
                if ( words[h] === keys[j]) {
                    document.getElementById("wname").innerHTML = answers[Math.floor(Math.random() * answers.length)];
                    document.getElementById("question").innerHTML = questions[Math.floor(Math.random() * questions.length)];
                    document.getElementById("query").value = "";
                    startTimer();
                    return;
                }
            }
        }
    }

}