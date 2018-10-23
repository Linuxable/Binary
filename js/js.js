//Atomatisch herhalen
function reload(){
  document.location.reload();
}
//setInterval(reload, 1000);
//Omzetter code
function OnConvert(){
  var txt=document.calcform.txt.value;
  //del = document.calcform.del.value;
  var e=document.calcform.del;
  var del=e.options[e.selectedIndex].value;
  var len = txt.length;
  if( len==0 ) return;
  bin='';
  for(i=0; i<len; i++){
    a = txt.charCodeAt(i);
    b = a.toString(2);
    if( b.length<8 ) b='0'+b;
    if( b.length<8 ) b='0'+b;
    if( b.length<8 ) b='0'+b;
    bin += b;
    if( i<len-1) bin+=del;
  }
  document.calcform.bin.value = bin;
}
function OnSelect(){
  document.calcform.bin.select();
}
//Animatie
var getTag = document.getElementById('titel');

function getTxt(){
	var woord = ["BINARY NUMBERS"];
	var chooseOne = Math.floor(Math.random() * woord.length);
	var breakDown = woord[chooseOne].split('');
	for(i=0; i<breakDown.length; i++){
		var injectSpans = document.createElement('span');
		var injectLetters = document.createTextNode(breakDown[i]);

		injectSpans.appendChild(injectLetters);
		getTag.appendChild(injectSpans);
	}
}
getTxt();

function randomColor(){
	var keyFrameAnim = document.createElement('style');
	keyFrameAnim.type = 'text/css';

	var browserPrefix = ['webkit', 'moz', 'o', 'ms'];
	var colorCount = getTag.children.length;

	for(k=0; k<browserPrefix.length; k++){
		var tagParts1 = ['#titel span{', '-'+browserPrefix[k]+'-animation-duration:6s;-'+browserPrefix[k]+'-animation-timing-function:ease;-'+browserPrefix[k]+'-animation-iteration-count:infinite;', '}'];
		var partsTogether1;
		if(k == 0){
			partsTogether1 = tagParts1[0]+''+tagParts1[1];
		}
		else if(k == (browserPrefix.length-1)){
			partsTogether1 = tagParts1[1]+''+tagParts1[2];
		}
		else{
			partsTogether1 = tagParts1[1];
		}
		var injectCSS = document.createTextNode(partsTogether1);
		keyFrameAnim.appendChild(injectCSS);
	}

	for(i=0; i<colorCount; i++){
		for(j=0; j<browserPrefix.length; j++){
			var tagParts2 = ['#titel span:nth-child('+(i+1)+'){', '-'+browserPrefix[j]+'-animation-name:anim'+(i+1)+';', '}'];
			var partsTogether2;
			if(j == 0){
				partsTogether2 = tagParts2[0]+''+tagParts2[1];
			}
			else if(j == (browserPrefix.length-1)){
				partsTogether2 = tagParts2[1]+''+tagParts2[2];
			}
			else{
				partsTogether2 = tagParts2[1];
			}
			var injectCSS = document.createTextNode(partsTogether2);
			keyFrameAnim.appendChild(injectCSS);
		}
	}

	for(l=0; l<colorCount; l++){
		for(j=0; j<browserPrefix.length; j++){
			var allColors = ['00ff00', '00e600', '00cc00', '00b300','009900','008000','006600','004d00','003300','001a00'];
			var randomColor = [];
			for(r=0; r<6; r++){
				var newColor = Math.floor(Math.random() * allColors.length);
				var getFromArray = allColors.splice(newColor,1);
				randomColor.push(getFromArray);
			}

			var injectCSS = document.createTextNode('@-'+browserPrefix[j]+'-keyframes anim'+(l+1)+'{0%{color:#'+randomColor[0]+';}16.6%{color:#'+randomColor[1]+';}33.2%{color:#'+randomColor[2]+';}49.8%{color:#'+randomColor[3]+';}66.4%{color:#'+randomColor[4]+';}83.1%{color:#'+randomColor[5]+';}100%{color:#'+randomColor[0]+';}}');
			keyFrameAnim.appendChild(injectCSS);
		}
	}
	document.getElementsByTagName('head')[0].appendChild(keyFrameAnim);
}
randomColor();
