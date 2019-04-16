# author-postinstall
Lightweight npm postinstall message to credit the author of a program

## Installation

```
npm install --save author-postinstall
```

And in your `package.json` add: 

```json
{
  ...
  "scripts": {
    "postinstall": "author-credit-postinstall"
  },
  "credit": {
    "author": {
      "name":"Andrew Fisher",
      "url": "https://example.url/",
      },
    "company":{
      "name": "for EXAMPLE COMPANY",
      "url": "https://example.url/",
    },
    "customMessage": "CUSTOM MESSAGE EXAMPLE",
  }
  ...
}
```

## Disabling this message
In some places (e.g. CI) you may want to disable this output. You can do this by setting the environment variable `DISABLE_AUTHOR_POST_INSTALL=true`.

It will not be shown if npm's log level is set to silent (`--silent`), warn (`--quiet`), or error (`--loglevel error`).


