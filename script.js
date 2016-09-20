$(document).ready(function(){
  var $carrousel = $('#carrousel'),
    $img = $('#carrousel img'),
    indexImg = $img.length - 1,
    i = 0,
    $currentImg = $img.eq(i);

$img.css('display', 'none');
$currentImg.css('display', 'block');
$carrousel.append('<div class="controls"> <span class="prev"><img src="http://iconshow.me/media/images/ui/ios7-icons/png/32/chevron-left.png" alt="" /></span> <span class="next"><img src="http://iconshow.me/media/images/ui/ios7-icons/png/32/chevron-right.png" alt="" /></span> </div>');

$('.next').click(function(){
    i++;
    if( i <= indexImg ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = indexImg;
    }
});

$('.prev').click(function(){
    i--;
    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }
});

function slideImg(){
    setTimeout(function(){
        if(i < indexImg){
        i++;
    }
    else{
        i = 0;
    }
    $img.css('display', 'none');
    $currentImg = $img.eq(i);
    $currentImg.css('display', 'block');
    slideImg();
  }, 3000);
}
slideImg();
});
