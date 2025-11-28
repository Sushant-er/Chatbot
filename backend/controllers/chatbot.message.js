import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message=async(req,res)=>{
    try {
        const {text}=req.body;
        if(!text?.trim()){
            return res.status(400).json({error:'Text is required'});
        }
        const user=await User.create({
            sender:'user',
            text
        });
        const botResponses = {

  /* -------------------------
      SMALL TALK RESPONSES
  --------------------------*/

  "hi": "Hello! How can I assist you today?",
  "hello": "Hello! How can I assist you today?",
  "who are you": "I'm your friendly chatbot, here to help!",
  "what's up": "Just computing and chilling! What about you?",
  "are you alive": "Digitally alive! Not biologically 😄",
  "can you help me": "Absolutely! Ask me anything.",
  "i am bored": "Let’s chat! Want a joke, fact, or story?",
  "tell me something": "Here’s something: The Eiffel Tower can grow 6 inches taller in summer!",
  "i am stressed": "Take a deep breath. You’re stronger than you think.",
  "i am angry": "I understand. Want to vent or should I tell a calming quote?",
  "i am tired": "Rest is important. Don’t forget to take care of yourself.",
  "i feel lonely": "You’re not alone. I’m here with you.",
  "i miss someone": "Missing someone shows how much they matter.",
  "how old are you": "I don’t age — lucky me!",
  "what is your favourite food": "I run on code, so... 0s and 1s!",
  "can you speak hindi": "Haan, main Hindi me bhi baat kar sakta hoon!",
  "tell me a quote": "“Success is not final; failure is not fatal.”",
  "give me advice": "Focus on progress, not perfection.",
  "i am confused": "Tell me what’s confusing you — I’ll simplify it.",
  "i am hungry": "Same! But I can't eat. You should grab something tasty 😄",

  /* -------------------------
       TECHNOLOGY / PROGRAMMING
  --------------------------*/

  "what is dsa": "DSA stands for Data Structures & Algorithms — used to write efficient and optimized code.",
  "what is react hook": "Hooks are special functions in React like useState, useEffect, useRef that let you use state & lifecycle features.",
  "what is dom": "DOM stands for Document Object Model — it represents a webpage structure in tree form.",
  "what is event loop": "Event Loop handles asynchronous tasks in JavaScript.",
  "what is promise": "A Promise represents a value that will be available now, later, or never.",
  "what is async await": "Async/await makes asynchronous code easier to read and write.",
  "what is middleware": "Middleware is a function that runs before the actual request handler (used in Express.js).",
  "what is git": "Git is a version control system used to track code changes.",
  "what is github": "GitHub is a platform to store and manage Git repositories online.",
  "what is framework": "A framework provides structure and features to build applications faster.",
  "what is library": "A library is a collection of functions you can call to perform specific tasks.",
  "what is jwt": "JWT is JSON Web Token — used for secure authentication.",
  "what is http status code": "They represent the result of a request: 200 OK, 404 Not Found, 500 Server Error etc.",
  "what is cdn": "CDN is a content delivery network used to serve files faster from the nearest server.",
  "what is docker": "Docker is a tool to package apps into containers so they run anywhere.",
  "what is api testing": "API testing checks if APIs return correct responses and handle errors.",
  "what is sql": "SQL is a query language used to manage relational databases.",
  "what is nosql": "NoSQL databases store data in flexible formats like documents or key-value pairs.",
  "what is version control": "It tracks changes in code and allows collaboration.",
  "what is deployment": "Deployment means making your application live for users.",
  "what is terminal": "Terminal is a text-based interface to run commands directly.",
  "what is frontend": "Frontend is everything the user sees — UI, design, interactions.",
  "what is backend": "Backend handles logic, authentication, databases, APIs.",
  "what is full stack": "Full Stack means both frontend + backend development.",
  "what is ui design": "UI design focuses on visual layout and aesthetics.",
  "what is responsive design": "Responsive design makes websites look good on all devices.",
  "what is debugging": "Debugging means finding and fixing errors in code.",

  /* -------------------------
       EDUCATION / INTERVIEW
  --------------------------*/

  "what is resume": "A resume lists your skills, experience, education, and achievements.",
  "how to prepare for interview": "Practice projects, revise core concepts, and prepare behavioral answers.",
  "what is hr interview": "HR interview checks personality, communication, and cultural fit.",
  "what is technical interview": "It tests your coding, problem-solving, and technology skills.",
  "how to answer tell me about yourself": "Start with intro → skills → experience → why you’re a good fit.",
  "what is soft skills": "Soft skills include communication, teamwork, leadership, and problem-solving.",
  "what is teamwork": "Teamwork is working with others to achieve a common goal.",
  "what is problem solving": "Problem-solving means analyzing issues and finding effective solutions.",
  "what is internship": "Internship is short-term practical work experience.",
  "what is communication skill": "Communication skill is expressing ideas clearly and respectfully.",
  
  /* -------------------------
       KNOWLEDGE / GK
  --------------------------*/

  "what is space": "Space is the vast area beyond Earth’s atmosphere.",
  "what is galaxy": "A galaxy is a collection of billions of stars, dust, and planets.",
  "what is sun": "The Sun is a star at the center of our solar system.",
  "what is gravity": "Gravity is a force that pulls objects toward each other.",
  "who invented computer": "Charles Babbage is known as the father of computers.",
  "who invented internet": "Vint Cerf and Bob Kahn are considered the founders of the internet.",
  "biggest planet": "Jupiter is the largest planet in our solar system.",
  "smallest planet": "Mercury is the smallest planet.",
  "fastest animal": "The cheetah is the fastest land animal.",
  "tallest mountain": "Mount Everest is the highest mountain in the world.",

  /* -------------------------
        FUN / ENTERTAINMENT
  --------------------------*/

  "tell me a funny joke": "Why don’t programmers like nature? Too many bugs!",
  "tell me a meme": "When you fix a bug at 3am: 'I am a god.'",
  "sing for me": "🎶 La la la… I hope your ears are okay!",
  "tell me a riddle": "I speak without a mouth and hear without ears. What am I? — An Echo!",
  "roast me": "You’re not slow… your loading bar is just very long 😄",
  "flirt with me": "Are you WiFi? Because I feel a strong connection 😉",
  "tell me a pickup line": "Are you JavaScript? Because you add meaning to my functions.",
  "compliment me": "You’re smart, capable, and doing better than you think!",
  "motivate me": "Small steps every day create big results — keep going!",
  "make me laugh": "Why did the computer get cold? Because it forgot to close its Windows!",
  "describe me": "You seem awesome — confident, curious, and full of potential!",
  "i am crying": "I’m here for you. Sometimes crying is the first step to healing.",
  "i am happy today": "Yay! Happiness looks great on you 😊",
  "tell me something cute": "Penguins propose to their partners with a pebble 💙",

  /* -------------------------
       EXTRA KNOWLEDGE
  --------------------------*/

  "what is blockchain": "Blockchain is a decentralized digital ledger used in cryptocurrencies.",
  "what is crypto": "Cryptocurrency is a digital currency secured by cryptography.",
  "what is nft": "NFTs are digital assets representing ownership of unique items.",
  "what is iot": "IoT means Internet of Things — connecting physical devices online.",
  "what is vpn": "VPN hides your online identity by routing data through secure servers.",
  "what is firewall": "Firewall protects networks from unauthorized access.",
  "what is big data": "Big Data refers to extremely large datasets that require advanced tools to process.",
  "what is chatbot": "A chatbot is a program designed to talk and respond to users automatically.",
  "what is seo": "SEO improves your website’s visibility on search engines.",
  "what is cms": "CMS is a Content Management System like WordPress."

}

     const normalizedText = text.toLowerCase().trim();
     const botResponse = botResponses[normalizedText] || "I'm sorry, I don't have an answer for that right now.";

     const bot = await Bot.create({
            text:botResponse
        });
        return res.status(200).json({
            userMessage:user.text,
        botMessage:bot.text
        })

    } catch (error) {
        console.error('Error in Message controller:', error);
        return  res.status(500).json({error:'Internal Server Error'});
    }
}