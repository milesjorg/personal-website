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
      case "other":
        this.echo("check out some other projects!", { typing: true, delay: 30 })
    }
  },
  {
    prompt: "[[;#df64ed;]➜   ]",
    checkArity: false,
    greetings:
    "     _       __     __                          __\n"+
    "    | |     / /__  / /________  ____ ___  ___  / /     \tHello! I'm Miles, welcome to my personal website!\n"+
    "    | | /| / / _ // / ___/ __ |/ __ `__ // _ // /      \tEnter 'help' for a list of commands!\n"+
    "    | |/ |/ /  __/ / /__/ /_/ / / / // /  __//_/  \n"+
    "    |__/|__/|___/_/|___/|____/_/ /_//_/|___ (_)        \tI made this website using the jQuery Terminal Library: https://terminal.jcubic.pl/\n"
                                                    
  });

// function linkProjects() {
//   this.echo();
// }

greeting = "hi there"
// $("body").terminal({
//     greet: function() {
//         this.echo(greeting);
//     }
// });
// function greet() {
//     this.echo(greeting);
// }


help = 
"\tCommands: \n" +
"\t aboutme\n" +
"\t contact\n" +
"\t projects\n" +
"\t resume\n" +
"\t clear\n" +
"\t help\n" 

aboutme =
  "Graduate from [[b;#fcdb03;none]CSULB] with a BS in Aerospace Engineering. Pursued a growing interest in \n" +
  "the software industry where I currently hold a role as a QA Automation Engineer. Self-\n" +
  "taught in [[b;#ec03fc;none]Python], [[b;#ec03fc;none]Java], [[b;#ec03fc;none]Javascript], and [[b;#ec03fc;none]C#] programming languages with experience working in a team-based, \n" +
  "Agile environment and utilizing Jira software. Seeking positions that offer opportunities \n" +
  "for growth as a software developer at a company that makes a positive impact on the world.\n";

contact = 
"\t[[!;;;;https://www.linkedin.com/in/milesjorg/]LinkedIn]\n" +
"\t[[!;;;;https://github.com/milesjorg]GitHub]\n" +
"\tE-mail: mbjorgensen96@gmail.com\n"