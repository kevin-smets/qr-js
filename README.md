# qrqr

Generate QR codes from the command line. Output is either base64 or an html snippet.

You can also save the output straight to an image file.

# Install

```
npm install --global qrqr
```

# Use

```
qrqr --help
```

Output to command line:

```
qrqr http://github.com
```

Output html snippet to command line:

```
qrqr http://github.com --html
```

Output to file (.gif):

```
qrqr http://github.com -o fileName
```
