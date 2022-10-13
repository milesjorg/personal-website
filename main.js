$("body").terminal(
  function (command) {
    switch (command) {
      case "help":
        this.echo(help, { typing: true, delay: 20 });
        break;
      case "contact":
        this.echo(contact, { typing: true, delay: 20 });
        break;
      case "aboutme":
        this.echo(aboutme, { typing: true, delay: 20 });
        break;
      case "resume":
        this.echo($('<img src="resume.jpg">'));
        break;
      case "projects":
        this.echo(projects, { typing: true, delay: 20 });
        break;
      case "Self Driving Car":
      case "self driving car":
        this.echo($('<img src="SDC-demo.gif">'));
        this.echo(selfDrivingCar, { typing: true, delay: 10 });
        break;
      case "Markov Text":
      case "markov text":
        this.echo(markovText, { typing: true, delay: 10 });
        break;
    }
  },
  {
    prompt: "[[;#df64ed;]➜   ]",
    checkArity: false,
    greetings:
      "     _       __     __                          __\n" +
      "    | |     / /__  / /________  ____ ___  ___  / /     \tHello! I'm Miles, welcome to my personal website!\n" +
      "    | | /| / / _ // / ___/ __ |/ __ `__ // _ // /      \tEnter 'help' for a list of commands.\n" +
      "    | |/ |/ /  __/ / /__/ /_/ / / / // /  __//_/  \n" +
      "    |__/|__/|___/_/|___/|____/_/ /_//_/|___ (_)        \tI made this website using the [[!;;;;https://terminal.jcubic.pl/]jQuery Terminal Library]\n\n\n",
  }
);

help =
  "\tCommands: \n" +
  "\t aboutme\n" +
  "\t contact\n" +
  "\t projects\n" +
  "\t resume\n" +
  "\t clear\n" +
  "\t help\n";

aboutme =

  "\tMy name is [[b;#ec03fc;none]Miles Jorgensen] and I graduated from [[b;#fcdb03;none]CSULB] with a BS in Aerospace Engineering. I started pursuing a growing interest\n" +
  "\tin the software industry a few years ago when I began learning how to code in [[b;#ec03fc;none]Python] from online courses. I decided to make the \n" +
  "\tjump into a new field and gained valuable experience as a Software QA Automation Engineer. This opened the door for my new career\n" +
  "\tpath where I went on to learn other object oriented programming languages like [[b;#ec03fc;none]Java], [[b;#ec03fc;none]Javascript], and [[b;#ec03fc;none]C#] through work experience \n" +
  "\tand personal projects. I am now ready to make the next jump in my career and I am excited to learn, grow, and develop new skills\n" +
  "\tat a company that offers a role for growth as a [[b;#ec03fc;none]software developer].";

contact =
  "\t\t[[b;;]Miles Jorgensen]\n" +
  "\t\t[[!;;;;https://www.linkedin.com/in/milesjorg/]LinkedIn]\n" +
  "\t\t[[!;;;;https://github.com/milesjorg]GitHub]\n" +
  "\t\tmbjorgensen96@gmail.com\n";

projects =
  "\tEnter one following as a command to get more information:\n" +
  "\t\tSelf Driving Car\n" +
  "\t\tMarkov Text\n";

selfDrivingCar =
  "\t\t[[b;#df64ed;none]Self Driving Car -] [[bi;#df64ed;none]Machine Learning Project] \n" +
  "\tCreated a simple webpage game where a car is controlled to weave through traffic. Implemented a machine learning \n" +
  "\tneural network to control the car and learn how to drive it. The network is visualized next to the game where\n" +
  "\tthe inputs, outputs, and hidden layers show the activity of the best performing car. The amount of traffic and\n" +
  "\tcharacteristics of the car can be controlled from inputs given by the user to see how the behavior changes with\n" +
  "\tthe given input values. Users can save the 'brain' of the highest performing car of the generation and use that\n" +
  "\tas a starting point for the next generation which are mutated versions of that 'brain'. Try it yourself [[!;;;;https://milesjorg.netlify.app/self-driving-car/self-driving-car.html]here]\n";

markovText =
  "\t\t[[b;#df64ed;none]Markov Text Generator -] [[bi;#df64ed;none]Markov Chains and Webscraping] \n" +
  "\tImplemented Markov chains to generate 'prose' using the Markovify library. Text was provided the Project Gutenberg \n" +
  "\tlibrary from ntlk.corpus package. In addition, I implemented webscraping with the Bueatiful Soup library to take \n" +
  "\tsong lyrics from the top ten songs section of https://genius.com/\n" +
  "\tHere are some sample quotes made from Walt Whitmans 'Leaves in the Grass' and the top songs from genius.com:\n" +
  "\tCan you tell which quotes came from which text?\n\n" +
  "\t\tAre you faithful to all, He and the bells of the earth, it is eternal, \n\t\tThe law of heroes and the thousand island paradises of the body, if not more.\n\n" +
  "\t\tAnd all or my words itch at the lawyer plead for my city, \n\t\tWhere speculations on their old Thames, I only to face!\n\n" +
  "\t\tNotti Like what? \n\t\tThey mans got the deal that it feels? \n\t\t41 K but I want the what? \n\t\tYeah yeah yo Oh tell me we ain't playing no defense Like what?";
