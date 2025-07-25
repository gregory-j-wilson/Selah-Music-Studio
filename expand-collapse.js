$(function() //this executes the conrtained script after all the other scripts on the page have been included. https://www.w3schools.com/jquery/event_ready.asp
{
  //set listener
  $('.more').on('click tap', function() //listens for all elements with the class 'more' to be clicked or tapped
  {
    var _this = $(this); //set $this to the local variable _this to save time on DOM lookup; 'var' makes it local

    if(_this.text() == 'MORE') //show; looks at the text inside <span class="more"></span>
    {
      _this.siblings('.complete').show(); //sets all sibling elements with the class 'complete' to be shown (display:inline)
      _this.text('LESS'); //changes text inside <span class="more"></span>
    }
    else //hide
    {
      _this.siblings('.complete').hide()
      _this.text('MORE');
    }
  });

  //initialize state
  $('.complete').hide(); //hides all elements with the class 'complete'
  $('.more').show(); //shows all elements with the class 'more'
});
