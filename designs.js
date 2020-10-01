"use strict";

$('#sizePicker').submit( event => {
    event.preventDefault();
    let width = $('#inputWidth').val();
    let height = $('#inputHeight').val();
    $('#pixelCanvas').html(''); //clear
    makeGrid(height, width);
    addColor();
});

function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
      $('#pixelCanvas').append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
       $('tr').append('<td></td>');
    };
};

function addColor() {
  $('td').click( event => {
      let color = $('#colorPicker').val();
      $(event.currentTarget).css("background-color", color)
  });
};


