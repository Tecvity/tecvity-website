# Tecvity Main Website

## Building locally
```
git clone https://github.com/Tecvity/tecvity.github.io
cd tecvity.github.io
npm install
npm run start
```

## Deployment
The website is now deployed on Netlify, all you need is to push the changes to repo and it will be deployed automatically, no need to run `gh-pages` command anymore. Blog app is now deployed at `blog.tecvity.co` and the main website is deployed at `tecvity.co`
`gh-pages` and running React app on Github is really error prone, there are 404 not found and routing issues which does not exist at Netlify at all, so its better to deploy it on Netlify

### Deployment (Deprecated)
The website is on branch `ealtugk` whereas the github pages is being served from `gh-pages` branch. To deploy the website, you should have `gh-pages` package installed globally. If not, run `npm install -g gh-pages` to install it. 

Then run `echo tecvity.co > ./build/CNAME && gh-pages -d build` else the CNAME will get overwritten and the website will not be served from `tecvity.co`