$(document).ready(function(){
    function initDisplay(){
      let slide_scrollWidth = $("#slide")[0].scrollWidth;
      let customScrollbar_width = $("#sliderScroll_outer")[0].scrollWidth;
      let percent = slide_scrollWidth/customScrollbar_width
      $("#sliderScroll").css({"width":percent+"%", "left":0})
      $("#slide")[0].scrollTo(0,0)
    }
  
    // On page load
    initDisplay()
  
    // Useful for mobile orientation change
    window.onresize = initDisplay
  
    $("#sliderScroll").draggable({ 
      containment: "#sliderScroll_outer",
      scroll: false,
      drag: function(e){
  
        let parentOffset = $(e.target).parent().offset().left
        let offset = $(e.target).offset().left
        let scrollableWidth = $(e.target).parent().width() - $(e.target).width()
        let sliderPercent = (offset-parentOffset)/scrollableWidth
        //console.log(sliderPercent)
  
        let imageSliderWidth = $("#slide")[0].scrollWidth - $("#slide").width()
  
        //console.log(imageSliderWidth)
  
        $("#slide")[0].scrollTo(sliderPercent*imageSliderWidth,0)
      }
    });
  });  