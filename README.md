# sendkey

It sends keys to OS X apps.

```sh
sendkey 36  # Hit enter
sendkey -a 'Visual Studio Code'  36 # Activate Visual Studio Code and hit enter
```

You can also use it from node:

```js
const sendkey = require('sendkey')

// send enter to Emacs
sendkey(36, {application: 'Emacs'})
```

## How it works
Applescript.