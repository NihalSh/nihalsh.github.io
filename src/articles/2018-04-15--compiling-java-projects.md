---
path: "/blog/compiling-java-projects"
date: "2018-04-15"
title: "Compiling Java Projects"
---

Most of the modern project development happens in an integrated development environment (IDE). While seasoned developers do need the extra features offered by an IDE, it usually affects a beginner trying to learn the language. In this article, we will have a brief overview of the process of building a basic project using the terminal. Source code URL is provided in the reference section.

### Project Structure
The project structure of our sample application is given below. This project follows the package naming conventions, which uses reversed Internet domain name followed by the project name. For more information on the naming conventions check out the link provided in the reference section.
```
└── src
    └── main
        └── xyz
            └── nihalshriwastawa
                └── compiling_java_projects
                    └── Main.java
```

### Compilation
To execute the command the working directory is set as the project root folder. For the command to work `javac` binary should be available in your `PATH` variable. In the reference section, there is a link to help you with that just in case you face issues.

```console
$ javac -d out --source-path src/main src/main/xyz/nihalshriwastawa/compiling_java_projects/Main.java
```
This command has four parts to it (`$` is not part of the command).
- `javac`: Compiler which is run to generate the class files
- `-d out`: Specifies where to place the generated class files
- `--source-path src/main`: Specifies where to find input source files
- `src/main/xyz/nihalshriwastawa/compiling_java_projects/Main.java`: Path to the entry file, that is the file which contains `main` method

The command creates a folder named `out` in the project root which contains all the class files which were generated. Now the project directory looks as shown below.
```
.
├── out
│   └── xyz
│       └── nihalshriwastawa
│           └── compiling_java_projects
│               └── Main.class
└── src
    └── main
        └── xyz
            └── nihalshriwastawa
                └── compiling_java_projects
                    └── Main.java
```

### Execution
To execute the program we need to provide the classpath and fully qualified class name of the entry class as seen below.

```console
$ java --class-path out xyz.nihalshriwastawa.compiling_java_projects.Main
Hurray, Our build worked!
```
This command has three parts to it.
- `java`: Invokes the JVM (Java Virtual Machine) to start executing the program
- `--class-path out`: Path of directories to search for the class files
- `xyz.nihalshriwastawa.compiling_java_projects.Main`: Name of the class we want to execute

On successful execution of the command, the program prints `Hurray, Our build worked!`.

### Pitfalls and their Solution
The common problems with this approach are:
- The compilation step will only generate the class for the file specified in the command AND the custom classes referenced in it
- There are a vast array of external libraries, which will need a further manual setup to work with this approach
- Distributing the project (`jar` command can be used for that)

We can still shun the use of an IDE if we desperately want to, not that we should though. There are plenty of build tools which handle the common scenarios. Two popular choices are `Gradle` and `Maven`. These build tools handle the common requirements with provisions for further extensions. They can also be used to run tasks other than compilation, like testing and code analysis.

##### References:
[Java: Naming a Package](https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html) \
[PATH variable](https://www.java.com/en/download/help/path.xml) \
[Example Project Source Code](https://github.com/NihalSh/nihalsh.github.io/tree/master/src/examples/2018-04-15--compiling-java-projects)