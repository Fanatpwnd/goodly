var popup_css = " \
<style> \
.overlay {  \
	display: none;   \
	position: fixed;   \
	z-index: 1;   \
	left: 0;  \
	top: 0;  \
	width: 100%;  \
	height: 100%;   \
	overflow: auto;   \
	background-color: rgba(255,255,255,0.4);  \
}  \
 \
.popup {  \
    opacity: 0; \
 \
	width: 70%;  \
	min-width: 300px;  \
	max-width: 1000px;  \
	height: 40%;  \
	min-height: 300px;  \
 \
	background-color: #fefefe;  \
	margin: 15% auto;  \
	padding: 20px;  \
	border: 1px solid #888;  \
 \
	background-color: white;  \
    border: 1px solid black;  \
}  \
 \
.popup-wrap {  \
	display: flex;  \
	flex-direction: column;  \
	height: 100%;  \
}  \
 \
.popup-wrap-body {  \
	display: flex;  \
	align-items: center;  \
	justify-content: center;  \
	height: 100%;  \
}  \
 \
.popup-wrap-footer {  \
	height: 30%;  \
	display: flex;  \
	align-items: center;  \
	justify-content: center;  \
}  \
 \
.close-popup {  \
	width: 200px;  \
	color: white;  \
	background-color: green;  \
} \
</style> \
";

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

//https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css
function unfade(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
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

        document.getElementsByTagName('body')[0].innerHTML += popup_css;
        document.getElementsByTagName('body')[0].innerHTML += html;

		document.getElementsByClassName("close-popup")[0].onclick = function() { 
			document.getElementsByClassName("overlay")[0].style.display = 'none'; 
			hitPopup(popup_id); 
        }; 
        
		setTimeout(() => { 
            document.getElementsByClassName("overlay")[0].style.display = 'block';
            unfade(document.getElementsByClassName("popup")[0]);
		}, 100); 
}); 