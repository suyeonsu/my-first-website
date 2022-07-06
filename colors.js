var Links = {
  setColor:function(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length) {
      alist[i].style.color = color;
      i++;
    }
  }
}
var Body = {
  setColor:function(color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function(color) {
    document.querySelector('body').style.backgroundColor = color;
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
