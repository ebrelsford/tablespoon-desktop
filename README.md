tablespoon-desktop
------------------

An [electron](https://github.com/atom/electron)-based desktop client for 
[tablespoon](https://github.com/ajam/tablespoon).

Currently [ractive](http://www.ractivejs.org/) is used for templating and data
binding, based largely on Max Ogden's [Monu](https://github.com/maxogden/monu/).


Building
========

This is still a work in progress. Some node packages will need to be recompiled
natively to work within electron. For example, using `node-sqlite3` on Linux 
required the following:

    node-gyp rebuild --target=0.26.1 --arch=x64 --target_platform=linux --dist-url=https://atom.io/download/atom-shell --module_name=node_sqlite3 --module_path=../lib/binding/node-v43-linux-x64

Otherwise you should be able to do the following to get going:

    npm install
    npm start


TODO
====

 * Build binaries for Mac, Windows, Linux
 * Drag and drop files including CSVs
 * Styling
 * Maps for geographic data 
 * Notebook-style saving of queries
