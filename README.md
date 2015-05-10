# Simple Node thing to create d3 depency graph 

It's designed to be used in the terminal, and currently supports `es6` and
`amd` syntax.

## Installation

It's work in progress, so for now you have to clone the project yourself and
run `npm install`.

## Usage

Something like this.

```bash
node gertrude.js -f es6 /path/to/dir/ >> graph.html
```

There's a folder with some files used for testing. If you want to make graph on
those, try one of these:

```bash
node gertrude.js -f es6 test/es6/ >> graph-es6.html

node gertrude.js -f amd test/amd/ >> graph-amd.html
```

## License

MIT I guess. There's really not that much code.

## Contributions

Sure. I guess next step supporting `cmd`, writing tests, and hardening the code
(it's basically a mockup at this point).


