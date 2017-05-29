console.log('app started!');

var text_block = document.getElementById('text_block');
var text = text_block.textContent;
var leng = text_block.textContent.length;
text_block.textContent = '';
var i = 0;
var text_output = '';

var img_block = document.getElementById('img_block');
img_block.rotation = 0;

var activity = function(){
	if(text[i]){
	text_output = text[leng-1-i] + text_output;
	}else text_output = ' ' + text_output;
	i++;
	text_block.textContent = text_output.slice(0, leng);
	
	if(i>leng+15){
		i=0;
		text_block.textContent = '';
		text_output = '';
	}
	
	img_block.rotation++;
	img_block.style.transform='rotate('+img_block.rotation+'deg)';
}

window.setInterval(activity, 50);