#!/bin/sh
promptName() {
	read -p 'Project name: ' NAME
}

cloneStater() {
	git clone https://github.com/mantis-stack/mantis-starter.git $NAME && cd $NAME
}

setupGit() {
	rm -rfv .git

	read -p 'Do you want to set up a remote Git repository? (Y/n) ' -n 1 -r
	echo
	if [[ ! $REPLY =~ ^[Yy]$ ]]
	then
		return 0
	fi

	read -p 'Enter the remote upstream repository: ' REPO
	echo "$REPO"

	git init && git remote add origin $REPO && git remote -v
}

installDependencies() {
	npm install && bower install
}

promptName
cloneStater
setupGit
installDependencies

printf '\n\033[32mCompleted!\033[0m\n'
