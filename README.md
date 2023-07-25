# Tecvity Main Website

This is tecvity's main website deployed on Github pages, it is built with React so `gh-pages` package is used to deploy it

## Deployment
The website is on branch `ealtugk` whereas the github pages is being served from `gh-pages` branch. To deploy the website, you should have `gh-pages` package installed globally. If not, run `npm install -g gh-pages` to install it. 

Then run `echo tecvity.co > ./build/CNAME && gh-pages -d build` else the CNAME will get overwritten and the website will not be served from `tecvity.co`