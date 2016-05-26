# qrjs

Generate QR codes from the command line. Output is either base64 or an html snippet.

You can also save the output straight to an image file.

# Install

```
npm install --global qr-js
```

# Use

```
qrjs --help
```

Output to command line:

```
qrjs http://github.com
```

Output html snippet to command line:

```
qrjs http://github.com --html
```

Output to file (.gif):

```
qrjs http://github.com -o fileName
```
