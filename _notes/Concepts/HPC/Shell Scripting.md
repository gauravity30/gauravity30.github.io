---
title: Shell Scripting
publish: true
category: Concepts/HPC
render_with_liquid: false
---

# Shell Scripting 
*Created on:* 2025-02-02  
*Tags:* #ShellScripting
*Course:* [[HPC]]

---
## Definition

- A shell-script is a file containing a series of commands that are executed by the shell.
- Shell: The command interpreter in Linux
- Use Cases: Automating repetitive task, system monitoring, batch processing, etc.
- Different kinds of Linux shells: Bash, sh, Zsh, Dash, etc.

## Creation and Running Shell Scripts

- Creation of a *.sh* file in any text editor.
- Add the Shebang (*#!/bin/bash*) -> Type of shell used.
- Make the file executable using *chmod*.
- Run the script by running the executable *./fileName.sh*

## Variables and Input/Output

- Declare the variable and use it with $. Example
```
name='Picther'
echo "My name is $name"
```

- Listing all the environment variables: *env*
- Set the environment variables: *export var=value*
- Within script there is no difference in locally declaring a variable and exporting an environment variable.
- Locally declared variable is available only for the current shell session only, but not for child processes. While environment variables are available for child processes.
```sh
!/bin/bash
name1="Rakesh"
export name2="Mahesh"

bash child.sh
```

```sh
!/bin/bash
echo "This is child.sh"
echo $name1 ==> Empty Output
echo $name2 ==> Mahesh
```

- Unsetting the environment variables - *unset*
- Modify the variables - *export PATH=/path/to/binary:$PATH*
- User input using - *read variable1 variable2 variable3* 

## Conditional Statements

- Generic Syntax
```sh
if [condition]; then
	Statement1
elif [condition]; then
	Statement2
else
	Statement
fi
```

- Checking file existence
```sh
!/bin/bash
if [-f "file1"]; then
	echo "File exists."
else
	echo "File doesn't exists."
fi
```

- Comparison Operators
	- '>' : *-gt*
	- '<' : *-lt*
	- '>=' : *-ge*
	- '<=' : *-le*

## Loops

- For loop
```sh
!/bin/bash
for i in 1 2 3 4 5; do
	echo "Number: $i"
done
```
- While loop

```sh
!/bin/bash
count=1
while [$count -le 5];
do
	echo "Count: $count"
	count=$((count+1))
done 
```

## Functions

```sh
!/bin/bash
add() {
	echo "This is a function."
	sum = $(($1 + $2))
	return #sum 
}

add 5 10
echo "The sum is $?"
```

- The keyword *$?* gives the output of the last executed command.

