var Links = {
  setColor:function(color) {
    $('a').css('color', color);
  }
}
var Body = {
  setColor:function(color) {
    $('body').css('color', color);
  },
  setBackgroundColor:function(color) {
    $('body').css('backgroundColor', color);
  }
}
function darklightHandler(self) {
  if(self.value === 'dark') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('powderblue')
    self.value = 'light'
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('blue')
    self.value = 'dark'
  }
}
