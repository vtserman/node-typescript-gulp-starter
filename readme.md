### Node + TypeScript + Gulp + NodeInspector starter template

#### Prerequisites
> **Note:** The project has dependencies that require **Node 4.x.x and NPM 3.x.x**

#### Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
```bash
# Install Typings CLI utility.
npm install typings --global
# Install Gulp
npm install gulp --global
# Install the project's dependencies
npm install
```
#### Development workflow
- `npm run watch` watches for changes in TypeScript files in `./src` directory and automatically compile changes into `./dist/`.
- `npm run serve` runs the application using `nodemon dist/main.js`, which restarts the server each time the compiled files change.
- `npm run start` run both `npm run watch` and `npm run serve` concurrently
