function doSomething(x) {
    modal = document.getElementById('modal-content');
    if (x == 1) {
        modal.innerHTML = `<b class="heading">Hot Or Cold</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/Hot-and-Cold.gif'>
            </img>
        </div>
        <div class="desc">
            My latest game, designed during the lockdown. After learning the basics of Unity, and getting
            the hang of it, I decided to create a complete game from scratch. This was the result.
            Hot Or Cold features extremely simple controls, and many characters and obstacle types. 
            The game consists of over 30 C# Scripts, and all in game components are designed by me.
            All assets are drawn using Piskel. Sounds were generated using Bfxr. 

            <br>
            <br>
            Download the apk<a class='goodstyle' href='images/hoc.apk' download="hoc.apk"> <b>here</b></a>
        </div>
        `;
    } else if (x == 2) {
        modal.innerHTML = `
        <b class="heading">Shoot!</b>
        <div style='display:flex; flex-direction:row'>
        <div class="image-wrapper"  >
            <img class="modal-image2" src='images/Shoot.gif'>
            </img>
        </div>
        <div class="desc1">
            Shoot! was my first attempt at creating an Android game. Since I am familiar with Flutter,
            I learnt Flame, a physics engine for Flutter. This game is designed using Flame, and features
            minimalistic graphics and high performance. 


            <br>
            <br>
            Download the apk<a class='goodstyle' href='images/shoot.apk' download="shoot.apk"> <b>here</b></a>
        </div>
        </div>
        `;
    } else if (x == 3) {
        modal.innerHTML = `<b class="heading">Not Golf</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/golf.gif'>
            </img>
        </div>
        <div class="desc">
            This was my second browser based game designed using p5js and matterjs. Not Golf uses a simple angle and power system
            for projectile motion of the ball. You can tweak values of gravity and bounciness of the ball to adjust to your playstyle.
            <br>
            <br>
            View the code <a class="goodstyle" href="https://github.com/vtg2000/NotGolf"><b>here</b></a> or play the game <a class="goodstyle" href="https://vtg2000.github.io/NotGolf"><b>here</b></a>.
        </div>
        `;
    } else if (x == 4) {
        modal.innerHTML = `<b class="heading">2dCricket</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/cricket.gif'>
            </img>
        </div>
        <div class="desc">
            One of the first games that I made. I have been a huge cricket fan since childhood
            and have always wanted to create a simple 2d cricket game.
            This was inspired by Daniel Schiffman's 'Angry birds' video. Made using matter.js as
            the physics engine and p5js for rendering and animations.
            <br>
            <br>
            The game features randomised fielding positions, ball lines and speeds. You can play
            the classic mode or a quick game.

            <br>
            <br>
            View the code <a class="goodstyle" href="https://github.com/vtg2000/2dCricket"><b>here</b></a> or play the game <a class="goodstyle" href="https://vtg2000.github.io/2dCricket"><b>here</b></a>.
        </div>
        `;
    } else if (x == 5) {
        modal.innerHTML = `<b class="heading">Morse It</b>
        <div style='display:flex; flex-direction:row'>
        <div class="image-wrapper"  >
            <img class="modal-image2" src='images/Morse-It.gif'>
            </img>
        </div>
        <div class="desc1">
            Morse It is a morse code generator and simulator application. It converts the input text to morse code.
            This code can be realised via 3 different senses, i.e hearing, vision and touch. Morse It uses device hardware
            such as Flashlight, speakers and vibrators to output the morse code. 


            <br>
            <br>
            Download the apk<a class='goodstyle' href='images/morse.apk' download="morse.apk"> <b>here</b></a>
        </div>
        </div>
        `;
    } else if (x == 6) {
        modal.innerHTML = `<b class="heading">Honesty</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/honesty.gif'>
            </img>
        </div>
        <div class="desc">
            Honesty is a Chatbot cum PWA, furnishes users with all the government sponsored policies, schemes and loans. This project was the Winner of Smart India Hackathon 2019, for Problem code: AK5 (ChatBot for EGovernance.
            The application uses flask backend, Mongodb database, Dialogflow for chatbot and calling, Textlocal for offline SMS. The features of this application include :
            <ul>
            <li>

            Dialogflow model used to pre-process user queries
            </li><li>
                doc2vec model to find out similar policies, based on the entities found in the given query
                </li><li>
                PWA, which is cross-platform and can be accessed at ease
                </li><li>
                Dynamic scraper and parser to fetch latest policies and schemes
                </li><li>
                Multi-language (Hindi for now) support, to entertain queries from any rural person
                </li><li>
                Offline SMS (TextLocal) and calling service (Dialogflow) to fetch any necessary detail
            </li>
            </ul>
            <br>
            View the code <a class="goodstyle" href="https://github.com/vtg2000/Honesty"><b>here</b></a>.
        </div>
        `;
    } else if (x == 7) {
        modal.innerHTML = `<b class="heading">BulliesEye</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/bullies.png'>
            </img>
        </div>
        <div class="desc">
            BulliesEye is a collection of multiple systems - an online admin dashboard, a couple of chrome extensions, a Telegram bot, and a Twitter scraper.
            All these are designed to detect and prevent Cyberbullying. This project was submitted as a part of SIH 2020 Internal hackathon, where it secured 3rd place out of 50+ teams.
            Features include : 
            <br>
            <br>
            <ul>
            <li>

            Twitter crawler to crawl tweets by topic or username.
            </li><li>
                A 1D CNN LSTM model to classify tweets into classes like “insult”, “identity_hate”, “racist”.
                </li><li>
                Chrome extension to detect cyberbullying on the webpage and hide it from the users.
                </li><li>
                The extension also censors NSFW images
                </li><li>
                Another chrome extension prevents users from sending explicit messages on Whatsapp Web.
                </li><li>
                Admin dashboard and automatic report generation to punish bullies.
            </li>
            </ul>
            <br>
    
        </div>
        `;
    } else if (x == 8) {
        modal.innerHTML = `<b class="heading">Quiz</b>
        <div style='display:flex; flex-direction:row'>
        <div class="image-wrapper"  >
            <img class="modal-image2" src='images/Quiz.gif'>
            </img>
        </div>
        <div class="desc1">
            This is a simple infinite quiz application designed using Flutter. The questions are fetched from
            a Trivia API, which has over 8000 question from different categories. The Quiz features over 10 different 
            categories, and 3 different themes to select from.


            <br>
            <br>
            Download the apk<a class='goodstyle' href='images/quiz.apk' download="quiz.apk"> <b>here</b></a>
        </div>
        </div>
        `;
    } else if (x == 9) {
        modal.innerHTML = `<b class="heading">WhatsAnalyser</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/whatsapp.png'>
            </img>
            
        </div>
        <div class="desc">
            WhatsAnalyser is a python script to analyse and find out statistics about whatsapp conversations. 
            WhatsAnalyser uses pandas, numpy and matplotlib. The statistics include : 
            <br>
            <br>
            <ul>
            <li>

            Total messages sent per person
            </li><li>
            Number of times the conversation by initialised by each person
                </li><li>
                Total days and the dates chatted 
                </li><li>
                Wordcloud of the chats
                </li><li>
                Most frequent messages - Catchphrases of each person
                </li><li>
                Average reply times of each person
            </li>
            <li>
            Most frequent messaging times - Number of messages sent at each hour per day
            </li>
            </ul>
            <br>
            <div class="image-wrapper">
        <img class="modal-image" src='images/whats.png'></img>
        </div>
        </div>
        `;
    } else if (x == 10) {
        modal.innerHTML = `<b class="heading">VTG Bot</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/vtg.png'>
            </img>
            
        </div>
        <div class="desc">
            VTG Bot is a chatbot that has been trained on my Whatsapp conversations to talk and interact like me. 
            The bot uses nltk, word embeddings, Tfidf and cosine similarity to match the input message to the closest reply that I might give. 
            Further modifications to the bot include adding a sequence model RNN, to generate new responses as per the user input.
            The training data is my Whatsapp conversations, which have been exported as text files. This contains over 100,000 lines of inputs and responses.
            <br>
            <br>
            
            <br>
            
        </div>
        `;
    } else if (x == 11) {
        modal.innerHTML = `<b class="heading">Push Me Up</b>
        <div style='display:flex; flex-direction:row'>
        <div class="image-wrapper"  >
            <img class="modal-image2" src='images/Push-Me-Up.gif'>
            </img>
        </div>
        <div class="desc1">
            A push up counter application to aid in your workout. Push Me Up uses the device proximity sensor
            to detect body movements, and whether pushups have been completed properly or not. Accordingly, the app increments
            the counter. You can also set goals and view your lifetime pushups count.


            <br>
            <br>
            Download the apk<a class='goodstyle' href='images/pushup.apk' download="pushup.apk"> <b>here</b></a>
        </div>
        </div>
        `;
    } else if (x == 12) {
        modal.innerHTML = `<b class="heading">Truck It Easy</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/truck.gif'>
            </img>
        </div>
        <div class="desc">
            Truck It Easy is a mockup web application for booking trucks to transport goods over long distances. 
            The website featues a PHP backend, and PostgreSQL database system. Using Google Maps API, users can select initial 
            location as well as destination, the goods to transport, and the truck. The application features an automatic fare calculation system, 
            a truck recommendation system, as well as Payment using Credit cards which can be added on the website.

            <br>
            <br>
            View the code <a class="goodstyle" href="https://github.com/vtg2000/Truck-It-Easy"><b>here</b></a> or view the front page <a class="goodstyle" href="https://vtg2000.github.io/Truck-It-Easy/html/index.html"><b>here</b></a>.
        </div>
        `;
    } else if (x == 13) {
        modal.innerHTML = `<b class="heading">NewsBuster</b>
        <div style='display:flex; flex-direction:row'>
        <div class="image-wrapper"  >
            <img class="modal-image2" src='images/newsbuster.gif'>
            </img>
        </div>
        <div class="desc1">
            NewsBuster is a Web app powered by a Fake news classifier pretrained on LIAR: A Benchmark Datset for Fake News Detection.
            The app features a webpage, as well as a Facebook bot for fake news detection. This was submitted as a part of Enroot-Mumbai hackathon. The features include :
            <br>
            <br>
            <li>

            Scraper and parser that dynamically scrapes latest news from various news providers.
            </li><li>
                Fake news classifier, which checks the authenticity of scraped news articles.
                </li><li>
                Text Summarizer, made using nltk to generate a short summary of the news article.
                </li><li>
                Facebook messenger integration, so that users can get the latest authentic news right on their cellphone.
                </li>

            <br>
            <br>
                View the code <a class="goodstyle" href="https://github.com/vtg2000/NewsBuster"><b>here</b></a>.
        </div>
        </div>
        `;
    } else if (x == 14) {
        modal.innerHTML = `<b class="heading">Roll a Cube</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/Roll-a-Cube.gif'>
            </img>
        </div>
        <div class="desc">
            Roll a Cube is a modification to Unity's Roll a ball tutorial. It was made by me while learning Unity during the lockdown.
            The gameplay includes controlling a cube to collect points, powerups, while avoiding meteors and bullets. The game features 4 different powerups, 
            and explosive effects and music.

            <br>
            <br>
            Download the apk<a class='goodstyle' href='images/roll.apk' download="roll.apk"> <b>here</b></a>
        </div>
        `;
    } else if (x == 15) {
        modal.innerHTML = `<b class="heading">WheresThat</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/WheresThat.gif'>
            </img>
        </div>
        <div class="desc">
            WheresThat is a conceptual web model for implementing pathfinding algorithms and visualizing their real life use cases. 
            This was designed using p5js and was submitted as a part of DotSlash hackathon held in Surat, Gujarat.
            <ul>
            <li>

            Seprate Admin and Client Side.
            </li><li>
                Shortest path found using A* search algorithm.
                </li><li>
Custom Map feed option for admins.                </li><li>
Users can enter their stops of interest, and the application comes up with an optimized path.
</li>
                
            </ul>
            <br>
            View the code <a class="goodstyle" href="https://github.com/vtg2000/WheresThat"><b>here</b></a>.
        </div>
        `;
    } else if (x == 16) {
        modal.innerHTML = `<b class="heading">Emcure for U</b>
        <div style='display:flex; flex-direction:row'>
        <div class="image-wrapper"  >
            <img class="modal-image2" src='images/Emcure-for-U.gif'>
            </img>
        </div>
        <div class="desc1">
            Emcure for U is a post customising app, created by me in Flutter. This app was created for Proventus - Pharma Advertising Agency as a freelancing project. 
            It is being used by over 550 users all over India to make posts and raise awareness about COVID-19. 
            Features include :
            <br>
            <br>
            <ul>
            <li>

            Image selector
            </li><li>
                Image editor for cropping and resizing the image
                </li><li>
                Add your own name and qualification
              </li><li>
Export image to gallery for quick sharing
</li>
                
            </ul>

            <br>
            <br>
            
        </div>
        </div>
        `;
    } else if (x == 17) {
        modal.innerHTML = `<b class="heading">Wump5</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/wumpus.gif'>
            </img>
        </div>
        <div class="desc">
            Wump5 is a simulation of the Wumpus World problem in AI, designed using p5.js.
            The webpage features a minigame where you guide the Agent to get the gold, while avoiding the Wumpus. The simulation shows the agent percepts
            at each step and actions can be taken accordingly. It also features a simple animation, wherein the agent avoids all obstacles to get the gold automatically.
            
            <br>
            <br>
            View the code <a class="goodstyle" href="https://github.com/vtg2000/Wump5"><b>here</b></a> or visit the page <a class="goodstyle" href="https://vtg2000.github.io/Wump5"><b>here</b></a>.
        </div>
        `;
    } else if (x == 18) {
        modal.innerHTML = `<b class="heading">Birthday App</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/birthday.jpeg'>
            </img>
        </div>
        <div class="desc">
           We are running out of ways to wish someone on their birthday. So as a software developer, I felt this was a unique and fun way to wish my friends. 
           This is a simple Flutter application, which is basically a photo gallery of images with captions. The themes can be changed, and the app also includes a few easter eggs!
            <br>
            <br>
        </div>
        `;
    } else if (x == 19) {
        modal.innerHTML = `<b class="heading">Java Calculator</b>
        <div style='display:flex; flex-direction:row'>
        <div class="image-wrapper"  >
            <img class="modal-image2" src='images/calc.png'>
            </img>
        </div>
        <div class="desc1">
            One of the first projects of my development career. This is a Java Applet which is a fully functional calculator, with features of scientific calculators such as trigonometric angles, factorial, etc. The applet is connected to a MySQL database,
            to store equation history and memory recall.
            <br>
            <br>
            
        </div>
        </div>
        `;
    } else if (x == 20) {
        modal.innerHTML = `<b class="heading">Tworlds</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/tworlds.gif'>
            </img>
        </div>
        <div class="desc">
           A game of two worlds, light and dark, and a player with the power to travel between these worlds.
            <br><br>
           A puzzle/platformer game where you take control of the player and use their powers to reach the portals at the end of each levels. Can you reach the end?
            <br><br>
            This project was created in Godot as part of the itch.io United Game Jam in under 48 hours.
           <br>
            <br>
            View the code <a class="goodstyle" href="https://github.com/vtg2000/Tworlds"><b>here</b></a> or download the game <a class="goodstyle" href="https://vtg2000.itch.io/tworlds"><b>here</b></a>.
        </div>
        `;
    } else if (x == 21) {
        modal.innerHTML = `<b class="heading">Rock Paper Shooter</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/rps.gif'>
            </img>
        </div>
        <div class="desc">
           A game of rock paper scissors, with a twist!

        There's a rebellion on our hands! We need your help in defending the realm.
        <br>
        <br>
            This project was created in p5.js and matterjs as part of the itch.io Weekly Game Jam - Week 154.
        <br>
            <br>
            View the code <a class="goodstyle" href="https://github.com/vtg2000/rock-paper-shooter"><b>here</b></a> or play the game <a class="goodstyle" href="https://vtg2000.itch.io/rock-paper-shooter"><b>here</b></a>.
        </div>
        `;
    } else if (x == 22) {
        modal.innerHTML = `<b class="heading">Shape detector</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/sfd2.png'>
            </img>
        </div>
        <div class="desc">
        A Python open-cv implementation to find out different shapes in images. Uses 2 methods - 
        <li>

            Canny edge detection
            </li><li>
                Thresholding and contour approximation
        <br>
        <br>
            This project was created as part of DSIP Mini-project.
        <br>
        <br>
        </div>
        `;
    }

}