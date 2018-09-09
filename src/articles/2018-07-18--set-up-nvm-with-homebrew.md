---
path: "/blog/set-up-nvm-with-homebrew"
date: "2018-07-18"
title: "Set up nvm with Homebrew"
---

`nvm` stands for Node Version Manager. It helps to manage multiple version of Node.js on the same system. `nvm` does not officially supported `Homebrew`, which is a package management system for Apple's macOS. Let's see how we can set up `nvm` on macOS using `Homebrew`.

### Setup

```sh
$ brew install nvm
$ mkdir ~/.nvm
$ echo 'export NVM_DIR="$HOME/.nvm"' >> .bash_profile
$ echo '. "/usr/local/opt/nvm/nvm.sh' >> .bash_profile
```