# ExpressJS on Plesk

# Step 1 - Create HTTP Basic Credentials on Github

a. Create New [Personal Access Token](https://github.com/settings/tokens/new)

b. Select all ```repo``` and ```workflow``` for Scopes.

# Step 2 - Add Github Repo to Plesk

a. [Log into Rootpal](https://web-wamp.rootpal.com/)

b. [Add Repository](https://web-wamp.rootpal.com/modules/git/index.php/domain/repositories)

c. Add HTTP Basic Credentials

d. Set Deployment settings **Server Path** to ```/httpdocs```

# Step 3 - Enable NodeJS

a. [Review Your Deployment Dashboard](https://web-wamp.rootpal.com:8443/modules/git/index.php/domain/repositories/)

# Step 4 - Change the Document & Application Root

a. [Go to Hosting Settings](https://web-wamp.rootpal.com/smb/web/settings/id/) and

b. [Enable NodeJS](https://web-wamp.rootpal.com/modules/nodejs/index.php/domain/index)


# Resources

* [NodeJS Plesk Website Management Support](https://docs.plesk.com/en-US/obsidian/administrator-guide/website-management/nodejs-support.76652/) ([Archive](https://archive.ph/lh2po))
* [NodeJS Plesk Administration](https://docs.plesk.com/en-US/obsidian/administrator-guide/plesk-administration/using-nodejs.76658/) ([Archive](https://archive.ph/v1nAG))
* [How to Host NodeJS on Onyx](https://www.plesk.com/blog/product-technology/node-js-plesk-onyx/) ([Archive](https://archive.ph/uYIzZ))
* [How to Host ExpressJS on Onyx](https://github.com/plesk/node-express)
* [Improve NodeJS App Performance with Clustering](https://blog.appsignal.com/2021/02/03/improving-node-application-performance-with-clustering.html)