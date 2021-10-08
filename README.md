# REACT-MICRO-APP-LOADER
It is a react component, mainly used to load the other micro react apps and webcomponents using maifest files, solve the problems of cross-team collaboration and reduce the build dependecy .
## Goals
To compose multiple independently delivered front-end applications into a whole, and to decompose front-end applications into some smaller and simpler applications that can be "independently developed", "independently tested" and "independently deployed", while still appearing to users as cohesive individual products.

## Getting Started
### To a react app
> <Loader url='http://localhost:5000/manifest.json'  appdata= {{"count":count}} namespace='headerApp' selector='headercontainer'/>
>***appdata*** contains data you want to pass to your micro app as object.

