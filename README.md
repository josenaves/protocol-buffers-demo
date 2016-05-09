# protocol-buffers-demo

Two small scripts that show how Protocol Buffer can help you to decrease the size of your messages that involve *images*

## What are protocol buffers?

Protocol buffers are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler. You define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages.

More info here: [Google Protocol Buffers](https://developers.google.com/protocol-buffers/)

## What Protocol Buffer implementation for Javascript to use?

I chose to use [protobuf.js](https://github.com/dcodeIO/protobuf.js)

## How to run the scripts

First, clone this project. Second, go to the project folder and type:

```
npm i
```

Now, you can run both tile.js and wo.js

```
node tile.js
node wo.js
```
