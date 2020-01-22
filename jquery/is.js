<ul>
  <li><strong>list</strong> item 1 - one strong tag</li>
  <li><strong>list</strong> item <strong>2</strong> -
    two <span>strong tags</span></li>
  <li>list item 3</li>
  <li>list item 4</li>
  <li>list item 5</li>
</ul>

$( "li" ).click(function() {
  var li = $( this ),
    isWithTwo = li.is(function() {
      return $( "strong", this ).length === 2;// i think it will be the return the true if the length is 2 or return false 
    });
  if ( isWithTwo ) { if it is true it will convert it to green
    li.css( "background-color", "green" );
  } else {
    li.css( "background-color", "red" );
  }
});
