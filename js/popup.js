

function hitPopup(popup_id) { 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', popup_site+'/index.php?r=popup/hit&popup_id='+popup_id, false);
    xhr.send();
} 

function getPopup(popup_id) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', popup_site+'/index.php?r=popup/getpopup&popup_id='+popup_id, false);
    xhr.send();

    var result = '';
    if (xhr.status == 200) {
        result = JSON.parse(xhr.responseText); 
    }
    return result;
}

document.addEventListener('DOMContentLoaded', function(){
        popup = getPopup(popup_id); 
        if (popup.visible != 1) return 0;

        var html = ' \
        <div class="overlay"> \
        <div class="popup js-popup"> \
            <div class="popup-wrap"> \
                <div class="popup-wrap-body">'+popup.content+'</div> \
                <div class="popup-wrap-footer"><button class="js-close-popup close-popup">Закрыть попап</button></div> \
            </div> \
        </div> \
        </div> \
        ';

        document.getElementsByTagName('body')[0].innerHTML += html;

		document.getElementsByClassName("close-popup")[0].onclick = function() { 
			document.getElementsByClassName("overlay")[0].style.display = 'none'; 
			hitPopup(popup_id); 
        }; 
        
		setTimeout(() => { 
            document.getElementsByClassName("overlay")[0].style.display = 'block';
		}, 100); 
}); 