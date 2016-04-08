# ExpressJS 4.0 for Openshift

Boilerplate template for creating an ExpressJS 4.0 web server on Openshift. This is perfect for managers or developers who want to host a small-scale app (< 10k requests a day) and not pay a single dime.  Yes, free!

### STEPS

1. Create an [Openshift](http://openshift.com) account.
-  Add an [application](https://openshift.redhat.com/app/console/application_types)
-  Select [NodeJS latest](https://openshift.redhat.com/app/console/application_type/quickstart!243) with "no scaling"
-  Clone your site to your local computer
-  Copy over these files and re-upload


### What is ```sslforfree.js```?

If you want your site to be HTTPS-ready and you don't want to pay for it, you can use this template with [SSL for Free](https://www.sslforfree.com/). All you need to do is:


- Upload the JWT tokens (produced by [SSL for Free](https://www.sslforfree.com/)) to ```~/app-root/data/.well-known/acme-challenge```
- Modify ```start.js``` to point to ``sslforfree.js`` instead of ```app.js```
- Restart your Openshift server



