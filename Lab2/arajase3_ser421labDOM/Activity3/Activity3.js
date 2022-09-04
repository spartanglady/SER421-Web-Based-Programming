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

var user = {
    name: "",
    response: []
}

var data = JSON.parse(json)
function applyName(input) {
    checkLocalStorage(input)
    document.getElementById("header").innerHTML = "Hi " + this.user.name + "!";
    var resp = "Eliza: " + greetingMessage[Math.floor(Math.random() * greetingMessage.length)];
    this.user.response.push(resp);
    document.getElementById("wname").innerHTML = printAnswers(this.user.response);
    document.getElementById("eAction").setAttribute("onclick", "send(document.getElementById('query').value)");
    document.getElementById("query").value = "";
    startTimer();
    pushToLocalStore();
}

//R3. Add a special "/clear" operation so that it clears the state of the application for <name>, then returns the app to the start form
function clearName() {
    window.localStorage.removeItem(this.user.name)
    document.getElementById("wname").innerHTML = "What's your name?"
    document.getElementById("header").innerHTML = "Hi There!"
    document.getElementById("question").innerHTML = ""
    document.getElementById("clear").setAttribute("hidden", "hidden")
    document.getElementById("eAction").setAttribute("onclick", "applyName(document.getElementById('query').value)");
}

function checkLocalStorage(input) {
    if (window.localStorage.getItem(input) != null) {
        this.user.name = input;
        this.user.response = JSON.parse(window.localStorage.getItem(input)).response;
        document.getElementById("clear").removeAttribute("hidden");
        document.getElementById("search").removeAttribute("hidden");
    } else {
        this.user.name = input;
        this.user.response = [];
    }
}

//R2.  Make your Eliza program stateful by saving the responses it gives to <name>. If the browser closes and restarts, and you
// come back to Eliza, and enter the same <name> as a prior respondent, then you should be able to restore to the prior conversation.
function pushToLocalStore() {
    window.localStorage.setItem(this.user.name, JSON.stringify(user));
}

function startTimer() {
    setTimeout(timerAlert, 20000);
}

function clearTimer() {
    clearTimeout(timerAlert);
    document.getElementById("timeout").innerHTML = ""
}

function timerAlert() {
    document.getElementById("timeout").innerHTML = "";
}



function send(input) {
    clearTimer();
    this.user.response.push(this.user.name + ": " + input);

    if (this.user.response.length > 0) {
        document.getElementById("search").removeAttribute("hidden");
    }

    input = input.replace(/\s{2,}/g," ");
    words = input.split(" ");
    for (let h=0; h < words.length; h++) {
        for (let i=0; i < this.data.entries.length; i++) {
            let entries = this.data.entries[i];
            let keys = this.data.entries[i].key;
            let questions = this.data.entries[i].question;
            if (typeof this.data.entries[i].answered === "undefined") {
                //Activity 2, R3 asks you to randomize responses based on a keyword. Extend this functionality so that not only is it random,
                // but ensure no response is repeated until all responses are given at least once. (Keep in mind that a “response” is comprised of both
                // an answer and a question, so both have to be tracked independently).
                this.data.entries[i].answered = []
            }
            for (let j=0; j < keys.length; j++) {
                if ( words[h] === keys[j]) {
                    checkAnswers(i)
                    let rand = Math.floor(Math.random() * this.data.entries[i].answer.length)
                    let resp =  this.data.entries[i].answer[rand];
                    this.data.entries[i].answer.splice(rand, 1);
                    console.log(this.data.entries[i].answer.length)
                    this.data.entries[i].answered.push(resp) // R1. Make it so Eliza displays a running dialogue of the entire conversation.
                    this.user.response.push("Eliza: " +resp);
                    document.getElementById("wname").innerHTML = printAnswers(this.user.response)
                    document.getElementById("question").innerHTML = questions[Math.floor(Math.random() * questions.length)];
                    document.getElementById("query").value = "";
                    startTimer();
                    pushToLocalStore();
                    return resp;
                }
            }
        }
    }
}

function checkAnswers(i) {
    if (this.data.entries[i].answer.length === 0) {
        console.log("lol")
        this.data.entries[i].answer = this.data.entries[i].answered;
        this.data.entries[i].answered = [];
    }
}


function printAnswers(input) {
    let stringData = "";
    for (let i=0; i < input.length; i++) {
        stringData += input[i] + "<br>";
    }
    return stringData;
}

//Add a special /search key operation that searches the conversation for the most recent user input containing key, and copies
// that entire previous input into the one-line user input area.
function searchName(input) {
    for (let i=0; i < this.user.response.length; i++) {
        if (this.user.response[i].includes(input)) {
            document.getElementById('query').value = this.user.response[i].replace(this.user.name + ": ", "");
            return
        }
    }
}