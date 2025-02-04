
# Collaborative Development Setup for Camping 🏕️

## What is this? 
A guide to set up a fun, collaborative development environment when your team wants to code together in the same local network (like when camping! 🌲).

## The Big Picture
Imagine everyone's laptop as a small island, and we're building bridges between them:
- Each developer has their own laptop (island)
- One computer acts as the main hub (the big island)
- Everyone can see what others are working on
- Local versions of our websites work just like the real ones

## What You'll Need
- Laptops (one per developer)
- One computer to be the hub
- A network switch or router
- Basic Linux knowledge
- Coffee ☕ (optional but recommended)

# Step 1: Setting Up the Hub Computer 🏠
## this should be done by authorised person and should be ready to go before starting the setup.

## Step 1. Install the basic stuff:
```bash
sudo apt update
sudo apt install bind9 nginx avahi-daemon
```
Set up local domains:
```bash
# Edit /etc/hosts
127.0.0.1 dev-hub.test
127.0.0.1 cosmical-me.test
127.0.0.1 csmcl-space.test
```

## Step 2. Setting Up Developer Laptops 💻

### Step 2.1 Install required tools:
```bash
sudo apt update
sudo apt install avahi-daemon avahi-utils nginx
```
```bash
# Replace YOUR_NAME with your name
sudo hostnamectl set-hostname dev-YOUR_NAME
```

## Step 3: Making Everyone Visible 👀

On each laptop, run:
```bash
# Tell others you're online
avahi-publish-service "Dev-$USER" _http._tcp 80 "I'm coding here!"
```

## Step 4: Setting Up Local Websites 🌐

Create local versions of websites:
cosmical-me.test → mirrors cosmical.me
csmcl-space.test → mirrors csmcl.space

Add to /etc/hosts:
```bash
192.168.1.100  dev-hub.test
192.168.1.101  cosmical-me.test
192.168.1.102  csmcl-space.test
```
Step 5: Collaboration Tools 🤝
Install VS Code with Live Share:
```bash
#CopyInsert in Terminal
sudo snap install code --classic
#Install local chat:
```
```bash
#CopyInsert in Terminal
sudo apt install matrix-synapse
Cool Things You Can Do Now 🚀
#See Who's Online:
```
```bash
#CopyInsert in Terminal
avahi-browse -at | grep Dev-
Visit Someone's Website:
```
```bash
#CopyInsert in Terminal
curl http://dev-friend.test
```

# Share Your Screen:
# Using VS Code Live Share
```bash
code --install-extension MS-vsliveshare.vsliveshare
```
## Troubleshooting 🔧
### Can't See Other Developers?
Check if you're on the same network
Make sure avahi-daemon is running:
```bash
#CopyInsert in Terminal
sudo systemctl status avahi-daemon
```
### Websites Not Loading?
Check your /etc/hosts file
Verify nginx is running:
```bash
# CopyInsert in Terminal
sudo systemctl status nginx
```
### Tips and Tricks 💡
Use ping dev-hub.test to check connectivity
Share files through the hub
Use the local chat for quick messages
Keep your coffee warm ☕
Need Help? 🆘

## Check the logs:
```bash
# CopyInsert in Terminal
tail -f /var/log/syslog
```
### Ask in the local chat
Wave to your colleague (they're probably right there!)
Remember: The goal is to have fun while coding together! Don't stress too much about perfect setups - as long as everyone can see each other's work, we're good to go! 🎉
 
## Fun Stuff for Happy Coding 🎮

### Developer Status Board 📋
Share your status with others:
```bash
# Announce your coffee status
avahi-publish-service "Dev-$USER-Coffee" _status._tcp 80 "Need refill! ☕"

# Share what you're working on
avahi-publish-service "Dev-$USER-Project" _http._tcp 80 "Building awesome features 🚀"

# Show when you're in deep focus mode
avahi-publish-service "Dev-$USER-Mode" _status._tcp 80 "In the zone! 🎯"
```

## Code Radio Station 🎵
Share music while coding:

```bash
# Start your coding playlist server
avahi-publish-service "Dev-$USER-Radio" _http._tcp 8000 "Today's coding beats 🎵"

# See who's sharing music
avahi-browse -at | grep Radio
```
## Team Status Dashboard 🖥️
Quick commands to see what's happening:

```bash
# Who needs coffee?
avahi-browse -at | grep Coffee

# Who's working on what?
avahi-browse -at | grep Project

# Who's in focus mode?
avahi-browse -at | grep Mode
```

### Find the coding DJs
```bash
# Who's sharing music?
avahi-browse -at | grep Radio
```

### Fun Team Commands 🎲
```bash
# Announce lunch break
avahi-publish-service "Dev-$USER-Food" _status._tcp 80 "Pizza time! 🍕"

# Call for code review
avahi-publish-service "Dev-$USER-Review" _status._tcp 80 "Need fresh eyes 👀"

# Celebrate a win
avahi-publish-service "Dev-$USER-Win" _status._tcp 80 "Just fixed that bug! 🎉"
```
## Remember: A happy developer is a productive developer! Keep the vibes positive and the coffee flowing! ☕️