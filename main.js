$(document).ready(function () {
  $('#terminal').terminal(function (command, term) {
    switch (command) {
      case "help":
        term.echo(help, { typing: true, delay: 30});
        break;
      case "contact":
        term.echo(contact, { typing: true, delay: 30 });
        break;
      case "aboutme":
        term.echo(aboutme, { typing: true, delay: 10 });
        break;
      case "resume":
        term.echo($('<object data="MilesJorgensenResume.pdf" class="pdf">'))
        break;
      case "projects":
        term.echo(projects, { typing: true, delay: 30 });
        break;
      case "Self Driving Car":
      case "self driving car":
      case "selfdrivingcar":
        term.echo($('<img src="SDC-demo.gif">'));
        term.echo(selfDrivingCar, { typing: true, delay: 10, keepwords: true  });
        break;
      case "Markov Text":
      case "markov text":
      case "markovtext":
        term.echo(markovText, { typing: true, delay: 5, keepwords: true  });
        break;
      case "colorid":
      case "ColorID":
      case "colorID":
        term.echo(colorID, { typing: true, delay: 10, keepwords: true  })
        break;
      case "retrowave":
      case "Retrowave":
        term.echo($('<img src="retrowave.gif">'))
        term.echo(retrowave, { typing: true, delay: 10, keepwords: true  })
        break;
    }
  }, {
      prompt: "[[;#ec03fc;]➜   ]",
      checkArity: false,
      height: window.innerHeight,
      greetings:
        "     _       __     __                          __\n" +
        "    | |     / /__  / /________  ____ ___  ___  / /     \tHello! I'm Miles, welcome to my personal website!\n" +
        "    | | /| / / _ // / ___/ __ |/ __ `__ // _ // /      \tEnter 'help' for a list of commands.\n" +
        "    | |/ |/ /  __/ / /__/ /_/ / / / // /  __//_/  \n" +
        "    |__/|__/|___/_/|___/|____/_/ /_//_/|___ (_)        \tI made this website using the [[!;#ec03fc;;;https://terminal.jcubic.pl/]jQuery Terminal Library]\n\n\n",
    });
});

help =
  "Commands: \n" +
  "\taboutme\n" +
  "\tcontact\n" +
  "\tprojects\n" +
  "\tresume\n" +
  "\tclear\n" +
  "\thelp";

aboutme =
  "My name is [[b;#ec03fc;none]Miles Jorgensen] and I graduated from [[b;#fcdb03;none]CSULB] with a BS in Aerospace Engineering. \n" +
  "I started pursuing a growing interest in the software industry a few years ago when I began learning how to code in [[b;#ec03fc;none]Python] \n" +
  "from online courses. I decided to make the jump into a new field and gained valuable experience as a Software QA and Automation Engineer. \n" +
  "This opened the door for my new career path where I went on to learn other object oriented programming languages like [[b;#ec03fc;none]Java] \n" +
  "and [[b;#ec03fc;none]Javascript] through work experience and personal projects. I am currently seeking positions in a company that offers career \n" +
  "growth in the software industry and a role that can challenge me to learn and develop new skills."

contact =
  "\t[[b;#ec03fc;]Miles Jorgensen]\n" +
  "\t[[!;#ec03fc;;;https://www.linkedin.com/in/milesjorg/]LinkedIn]\n" +
  "\t[[!;#ec03fc;;;https://github.com/milesjorg]GitHub]\n" +
  "\t[[!;#ec03fc;;;milesbjorgensen@gmail.com]Email]";

projects =
  "Enter one following as a command to get more information:\n" +
  "\tSelf Driving Car\n" +
  "\tColorID\n" +
  "\tRetrowave\n" +
  "\tMarkov Text";

selfDrivingCar =
  "[[b;#ec03fc;none]Self-Driving Car -] [[bi;#ec03fc;none]Machine Learning Project] \n" +
  "Created a webapp game where a car is controlled to weave through traffic. Implemented a [[b;#ec03fc;]neural network] \n" +
  "to control the car and learn how to drive it. The network is visualized next to the game where the inputs, \n" +
  "outputs, and hidden layer show the activity of the best performing car. The amount of traffic and characteristics \n" +
  "of the car can be controlled from inputs given by the user to see how the behavior changes with the given input \n" +
  "values. Users can save the 'brain' of the highest performing car of the generation and use that as a starting point \n" +
  "for the next generation which are mutated versions of that 'brain'. Try it yourself [[!;#ec03fc;;;https://self-driving-car-vanillajs.netlify.app/]here]";

colorID =
  "[[b;#ec03fc;none]ColorID -] [[bi;#ec03fc;none]Javascript Color Picker] \n" +
  "Created a color picker made available as a webapp where users can easily drag and drop image files into the \n" +
  "dropzone. There are two tools the user can use: a magnifying glass to get a closer look at their image, and \n" +
  "a form that stores the RGB and hexadecimal values of the pixel that was clicked on. The webapp uses a canvas \n" +
  "element to present the image and magnify it. The whole website was made with [[b;#ec03fc;]vanilla JS] with some [[b;#ec03fc;]CSS3] styling. \n" +
  "Try it yourself [[!;#ec03fc;;;https://colorid.netlify.app/]here]";


markovText =
  "[[b;#ec03fc;none]Markov Text Generator -] [[bi;#ec03fc;none]Markov Chains and Webscraping] \n" +
  "Implemented Markov chains to generate 'prose' using the Markovify library. Text was provided by the Project Gutenberg \n" +
  "library from ntlk.corpus package. In addition, I implemented webscraping with the Beautiful Soup library to take \n" +
  "song lyrics from the top ten songs section of [[!;#ec03fc;;;https://genius.com/]genius.com] \n" +
  "Here are some sample quotes made from Walt Whitman's 'Leaves in the Grass' and the top songs from genius.com:\n" +
  "Can you tell which quotes came from which text?\n\n" +
  "\tAre you faithful to all, He and the bells of the earth, it is eternal, \n\tThe law of heroes and the thousand island paradises of the body, if not more.\n\n" +
  "\tAnd all or my words itch at the lawyer plead for my city, \n\tWhere speculations on their old Thames, I only to face!\n\n" +
  "\tNotti Like what? \n\tThey mans got the deal that it feels? \n\t41 K but I want the what? \n\tYeah yeah yo Oh tell me we ain't playing no defense Like what?";

retrowave =
  "[[b;#ec03fc;none]Retrowave CSS Animation -] [[bi;#ec03fc;none]Vanilla HTML + CSS] \n" +
  "Used pure CSS to animate a page in the style of 1980s retrowave. Utilized techniques such as [[b;#ec03fc;none]perspective] and \n" +
  "[[b;#ec03fc;none]perspective-origin] to give the illusions for the vertical lines to appear closer at the bottom and further away \n" +
  "at the top. Used the [[b;#ec03fc;none]@keyframes] rule to animate the lines in the sun and on the grid to give the illusion of movement. \n" +
  "I submitted this project as a part of [[b;#ec03fc;none]Hacktoberfest 2023] where it was accepted an merged to their [[!;#ec03fc;;;https://github.com/zero-to-mastery/Animation-Nation]community repository]! \n" +
  "[[!;#ec03fc;;;https://milesjorg-retrowave.netlify.app/]Click here] to check out the full web page! There's a fullscreen button in the top right (or just press spacebar) if \n" +
  "you want to throw on a cool screen saver!"