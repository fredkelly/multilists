# jquery.multilists.plugin.js
This plugin applies the technique found [here](http://www.alistapart.com/articles/multicolumnlists) to display lists in columns. You can read my original (dated) blog post about it [here](http://blog.fredkelly.net/post/multi-column-lists-using-jquery).

## Usage
Just add the following call to your `document.ready` call:
```javascript
$(document).ready(function() {
  $('#mylist').multilists({ cols: 3 });
});
```

## Notes
This is very rough & ready - please fork/fix where you can :)