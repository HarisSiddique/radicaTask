fixScale = function(doc) {

	var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}
	var myArray = [];
	var arrayMax = 40;
	var limit = arrayMax + 1;
 function Generate()
{
	
	for (var i = 0; i < arrayMax; i++)
		{
		  myArray.push(Math.floor(Math.random()*limit));
		}
	document.frm.result.value = myArry;
}
function mySort()
{
	myArry.sort(function(a, b){return a-b});
	document.frm.result.value = myArry;
}

};
