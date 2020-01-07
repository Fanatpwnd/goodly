

function hitPopup(popup_id) { 
	$.get("./index.php?r=popup/hit", {"popup_id" : popup_id}); 
} 

function isVisiblePopup(popup_id) {
    var res = 0;
    jQuery.ajax({
        url: './index.php?r=popup/visible',
        data: {'popup_id': popup_id},
        success: function (result) {
            res = result;
        },
        async: false
    });
    return res;
}

$(document).ready(function() { 
        if (isVisiblePopup(popup_id) == 0) return 0;

        var html = ' \
        <div class="overlay"> \
        <div class="popup js-popup"> \
            <div class="popup-wrap"> \
                <div class="popup-wrap-body">Content</div> \
                <div class="popup-wrap-footer"><button class="js-close-popup close-popup">Закрыть попап</button></div> \
            </div> \
        </div> \
        </div> \
        ';

        $('body').append(html);

		$(".close-popup").click(function() { 
			$(".overlay").fadeOut(300); 
			hitPopup(popup_id); 
        }); 
        
		setTimeout(() => { 
			$(".overlay").fadeIn(300); 
		}, 100); 
}); 