# gcni

## Information

<table>
<tr>
<td>Package</td>
<td>gcni</td>
</tr>
<tr>
<td>Description</td>
<td>clones and installs</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

![give it to me](https://raw.github.com/davidgruebl/gcni/master/img/gimme.gif)

## Install

```
npm i -g gcni
```
## Examples

```
$ gimme dereke/peace
$ gimme https://github.com/dereke/peace
$ gimme git@github.com:dereke/peace.git
// clones the repo to /peace and installs all dependencies

$ gimme dereke/peace somefolder
$ gimme https://github.com/dereke/peace somefolder
$ gimme git@github.com:dereke/peace.git somefolder
// clones the repo to /<somefolder> and installs all dependencies
```

## LICENSE

(MIT License)

Copyright (c) 2015 David Thomas Grübl <me@dtg.sexy>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.