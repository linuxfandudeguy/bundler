# bundler

Node.js project made to bundle multiple JavaScript files in one with automatically injected polyfills.

In order to start working with `bundler`, run the following command:

```bash
git clone https://github.com/linuxfandudeguy/bundler.git
```

then modify the `src/index.js` file to specify what files you want to combine.

`file1.js` and `file2.js` are placeholder files, modify them to whatever you want.

To build, run:

```bash
npm run build
```
To build with minification run:

```bash
npm run build:min
```
Both of these commands will create a bundle.js filewith the polyfills.
