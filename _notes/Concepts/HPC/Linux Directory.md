---
title: Linux Directory
publish: true
category: Concepts/HPC
render_with_liquid: false
---

# Linux Directory 
*Created on:* 2025-01-27  
*Tags:* #Linux #Directory
*Course:* [[HPC]]

---
## Linux Commands

1. Check the user - *whoami*
2. Know about the OS - *uname* 
3. Detailed info of the OS - *uname -a*
4. Know details about CPU - *lscpu*
5. Memory space information (not human readable)- *free*
6. Memory space information (human readable) - *free -h*
7. Current working directory - *pwd*
8. Content of the working directory - *ls*
9. Content of directory with details along with hidden files - *ls -la*
10.  Change directory - *cd*
	-  No parameters for *cd* command, then it goes to home. 
	- *cd -* will take to the last current directory
	- *cd ..* will move to the parent directory 
11. Make Directory - *mkdir DirectoryName*
12. Delete an empty directory - *rmdir*
13. Rename a directory - *mv OldName NewName*
14. Move a directory - *mv source destination*
15. Create an empty file - *touch fileName*
16. Create a new file and add data
	1. Use CLI or GUI based editor
	2. CLI - *vim fileName*
	3. GUI - *gedit fileName*
17. Delete a file - *rm fileName*
18. Delete a directory and its contains - *rm -r DirectoryName* (r represents recursive).
19. Prints the content of files - *cat fileName*
20. Copy contents of a file to another file and overwrite - *cat src > dst*
21. Copy contents of a file to another file and append - *cat src >> dst*
22. Copy a file from source to destination - *cp src dst*
23. Copy a directory - *cp -r src dst*


Note:  Hidden files in Linux start with a dot.


## File Permissions and Ownership Commands

- File permissions are defined for three categories of users
	- Owner (user): The person who owns the file.
	- Group: A group of users who share access to the file.
	- Others: Everyone else.
- Permissions are divided into three types:
	- Read (r)
	- Write (w)
	- Execute (x)
- File permission structure: The permission structure is usually displayed in a 10-character format.
	- Example: - rwx r-x r--
	- The first character shows the type - for a regular file and d for a directory.
	- The next three characters represent the permissions associated with owner.
	- The next three characters represent the permissions associated with the group.
	- The last three characters represent the permissions associated with others.
- To change the permission of a file - *chmod u/g/a +/- r/w/x* 
	- u/g/o/a --> User/Group/Others/All
	- +/- --> Adds/Removes permission
	- r/w/x --> Read/Write/Execute
- Numeric (Octal) Notation for setting permission
	- Read/Write/Execute --> 4/2/1
	- Example *chmod 755 file.txt*. Here the 775 corresponds to rwx r-x r-x 
- Change owner of a file - *chown owner: group file*

