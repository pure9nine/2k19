# Installation instructions

We'll be using GatsbyJS for the Front-end and Wordpress for the back-end. You'll need to make sure your Wordpress local server is running each time you want to view the front-end locally.

### Installing Wordpress
I recommend using [Local](https://local.getflywheel.com/) for your local Wordpress server, it allows 1-click import / export and is very user friendly from a configuration standpoint. 

###Installing Gatsby - [Official install docs](https://www.gatsbyjs.org/docs/)

Make sure you have a Wordpress installation setup first (See above)

1 - Install Gatsby CLI tool

    npm install --global gatsby-cli

2 - Clone this repo onto your machine (If you're using the terminal use this command, otherwise just use Sourcetree like usual)

    git clone https://github.com/pure9nine/2k19.git

3 - `cd` into the directory that you cloned the repo into and run this command which will install all the node dependencies (It might take a little while)

    npm i

That should install everything you need for the front-end. Assuming there are no errors during installation, and your local Wordpress server is running, run `gatsby develop` which will build the front-end and you'll be able to view it at [http://localhost:8000](http://localhost:8000)

You need to run `gatsby develop` every time you want to view the front-end and/or every time you add content to the local Wordpress back-end. Once this is live I'll automate the build process so that it detects changes in the WP back-end and builds automatically

###-- Notes

#### Changing local Wordpress URL
If you decide not to use Local and want to use something you're more familiar with (Mamp, Valet, etc.) you'll probably need to change the API url that Gatsby pulls from. To do that, just open `gatsby-config.js` in your Gatsby / front-end repo, find `baseUrl: 'p9react.local',` and change `p9react.local` to whatever your local Wordpress URL is.
