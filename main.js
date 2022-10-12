$("body").terminal(
  function (command) {
    switch (command) {
      case "help":
        this.echo(help, { typing: true, delay: 30 });
        break;
      case "contact":
        this.echo(contact, { typing: true, delay: 30 });
        break;
      case "aboutme":
        this.echo(aboutme, { typing: true, delay: 30 });
        break;
      case "resume":
        this.echo($('<img src="resume.jpg">'));
        break;
      case "projects":
        this.echo(projects, { typing: true, delay: 30 });
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
  "\tGraduate from [[b;#fcdb03;none]CSULB] with a BS in Aerospace Engineering. Pursued a growing interest in the software \n" +
  "\tindustry where I obtained experience as a Software QA Automation Engineer. Self-taught in [[b;#ec03fc;none]Python], \n" +
  "\t[[b;#ec03fc;none]Java], [[b;#ec03fc;none]Javascript], and [[b;#ec03fc;none]C#] programming languages with experience working in a team-based, Agile\n" +
  "\tenvironment and utilizing the Jira software suite. Seeking positions that offer opportunities for \n" +
  "\tgrowth as a [[b;#ec03fc;none]software developer] at a company that aligns with my interests.\n";

contact =
  "\t\t[[b;#df64ed;]Miles Jorgensen]\n" +
  "\t\t[[!;;;;https://www.linkedin.com/in/milesjorg/]LinkedIn]\n" +
  "\t\t[[!;;;;https://github.com/milesjorg]GitHub]\n" +
  "\t\tmbjorgensen96@gmail.com\n";

projects = 
"\t\t[[b;#df64ed;none]Self Driving Car -] [[bi;#df64ed;none]Machine Learning Project] \n" +
"\tCreated a webpage game where a car is controlled to weave through traffic. Implemented a machine learning \n" +
"\tneural network to control the car and learn how to drive it. The network is visualized next to the game where\n" +
"\tthe inputs, outputs, and hidden layers show the activity of the best performing car. The amount of traffic and\n" +
"\tcharacteristics of the car can be controlled from inputs given by the user to see how the behavior changes with\n" +
"\tthe given input values. Users can save the 'brain' of the highest performing car of the generation and use that\n" +
"\tas a starting point for the next generation which are mutated versions of that 'brain'. Try it yourself [[!;;;;https://milesjorg.netlify.app/self-driving-car/self-driving-car.html]here]\n" +
"\t";
