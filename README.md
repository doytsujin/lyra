# Lyra

Lyra is an interactive environment that enables custom visualization design without writing any code. Graphical “marks” can be bound to data fields using property drop zones; dynamically positioned using connectors; and directly moved, rotated, and resized using handles. Lyra also provides a data pipeline interface for iterative visual specification of data transformations and layout algorithms. Lyra is more expressive than interactive systems like Tableau, allowing designers to create custom visualizations comparable to hand-coded visualizations built with D3 or Processing. These visualizations can then be easily published and reused on the Web.

This is the working branch for Lyra 2; a deployed version of [Lyra 1 is available online](http://idl.cs.washington.edu/projects/lyra/). For more information, check out the [Lyra wiki](https://github.com/uwdata/lyra/wiki).

## Local Development

### Installation

To work on Lyra locally, you must have [Node](https://nodejs.org/) installed on your computer. Download this repository with Git, then (from the command prompt or terminal) check out the `lyra2` development branch with the command

```sh
git checkout lyra2
```

Once you are on the lyra2 branch, run

```sh
npm install
```

to install the project's code dependencies.

To build the application itself, execute the build command:

```sh
npm run build
```

Lyra is now ready to run. Start a local webserver in the project directory. Example web server commands:

```sh
# If you have Python installed,
python -m SimpleHTTPServer 8001

# PHP
php -S 127.0.0.1:8001

# Node "serve" package
npm install -g serve # only needs to be run once
serve . -p 8001
```

Lyra can now be loaded in your web browser at http://localhost:8001
