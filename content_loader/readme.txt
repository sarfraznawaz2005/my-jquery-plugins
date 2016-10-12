Intro:
---------------------

Plugin to load ajax content while showing loading message.

Example Usage:
---------------------

$('.someClass').contentloader({
    "type": "post",
    "url": "request url",
    "data": [],
    "output": "p",
    "loadtext": "Loading..."
    "css": {}
});


Options:
---------------------

url: url to send request to.
type: type of ajax requests: GET or POST. Default is GET.
data: any data to pass
output : inside element where ajax response will be placed. If none, main selector will be used.
loadtext : Loading text to be displayed. Default "Loading..."
css : Optional Object containing CSS properties for ajax loading overlay

Note: url to send requests to should be passed either by "url" option or by element by
using data-url="url here" for element whose content comes through ajax. Priority is given to
option passed. The "url" is only required thing for the plugin.
