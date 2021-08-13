var a = document.getElementById('loader-fect');
var b = document.getElementById('test');
var c = document.getElementById('loading');
var d = document.getElementById('matter-ques-1');
var e = document.getElementById('matter-ques-2');
var f = document.getElementById('matter-ques-3');
var g = document.getElementById('matter-ques-4');
var h = document.getElementById('matter-ques-5');
function easy(){
	document.getElementById('easy').style.display="none";
	document.getElementById('normal').style.display="none";
	document.getElementById('hard').style.display="none";
	c.style.display="block";
	$("#loading").fadeOut(900);
	setTimeout(()=>{c.style.display="none"}, 900);
	document.getElementById('test').innerHTML="Easy";
	setTimeout(()=>{a.style.display="none"}, 4000);
	$("#test").fadeOut(4000);
	setTimeout(()=>{b.style.display="none"},4000);
	setTimeout(()=>{document.getElementById('matter').style.display="block"}, 4000);
	d.innerHTML="QUES.1: Who is the Prime Minister of India?";
	e.innerHTML="QUES.2: What is Capital of India";
	f.innerHTML="QUES.3: Where is Mt.Everest located?";
	g.innerHTML="QUES.4: Full form of CSS.";
	h.innerHTML="QUES.5: My Favourite cartoon?";
}
function normal(){
	document.getElementById('easy').style.display="none";
	document.getElementById('normal').style.display="none";
	document.getElementById('hard').style.display="none";
	c.style.display="block";
	$("#loading").fadeOut(900);
	setTimeout(()=>{c.style.display="none"}, 900);
	document.getElementById('test').innerHTML="Normal";
	setTimeout(()=>{a.style.display="none"}, 4000);
	$("#test").fadeOut(4000);
	setTimeout(()=>{b.style.display="none"},4000);
	setTimeout(()=>{document.getElementById('matter').style.display="block"}, 4000);
	d.innerHTML="QUES.1: Who is the President of India?";
	e.innerHTML="QUES.2: What is Capital of Pakistan?";
	f.innerHTML="QUES.3: Where is Mt.Fuji located?";
	g.innerHTML="QUES.4: Full form of PHP.";
	h.innerHTML="QUES.5: My Favourite actor?";
}
function hard(){
	document.getElementById('easy').style.display="none";
	document.getElementById('normal').style.display="none";
	document.getElementById('hard').style.display="none";
	c.style.display="block";
	$("#loading").fadeOut(900);
	setTimeout(()=>{c.style.display="none"}, 900);
	document.getElementById('test').innerHTML="Hard";
	setTimeout(()=>{a.style.display="none"}, 4000);
	$("#test").fadeOut(4000);
	setTimeout(()=>{b.style.display="none"},4000);
	setTimeout(()=>{document.getElementById('matter').style.display="block"}, 4000);
	d.innerHTML="QUES.1: Who is the Owner of Zomato?";
	e.innerHTML="QUES.2: Will you ever invest in Share market?";
	f.innerHTML="QUES.3: Where is Stanford located?";
	g.innerHTML="QUES.4: Full form of SQL.";
	h.innerHTML="QUES.5: My Favourite singer?";
}

function done(){
	var t = document.getElementById('matter-ans-1').value;
	 var q = t.toLowerCase();
	 var r = document.getElementById('matter-ans-2').value;
	 var ti = r.toLowerCase();
	 var s = document.getElementById('matter-ans-3').value;
	 var iv = s.toLowerCase();
	 var u = document.getElementById('matter-ans-4').value;
	 var dd = u.toLowerCase();
	 var v = document.getElementById('matter-ans-5').value;
	 var ae = v.toLowerCase();
	 var pp,oo,ii,uu,tw;
	 pp=0;oo=0;ii=0;uu=0;tw=0;
	 if(q=="narendra modi"||q=="ram nath kovind"||q=="deepinder goyal"){
	 	pp=1;
	 }

	 if (ti=="delhi"||ti=="islamabad"||ti=="yes"){
	 	oo=1;
	 }
	 if(iv=="japan"||iv=="nepal"||iv=="california"||iv=="ca"){
	 	ii=1;
	 }
	 if(dd=="cascading style sheet"||d=="hypertext preprocessor"||d=="structured query language"){
	 	uu=1;
	 	
	 }
	 if(ae=="shinchan"||ae=="dominic toretto"||ae=="karan aujla"){
	 	tw=1;
	 	
	 }
	 var ss = document.getElementById('view');
	 var total = parseInt(pp)+parseInt(oo)+parseInt(ii)+parseInt(uu)+parseInt(tw);
	 var ne = total/5;
	 var per = ne*100;
	 if(ne=="0"){
	 	ss.innerHTML="Go shit!";
	 	const music = new Audio('gethelp.mp3');
	 	setTimeout(()=>{music.play();},2100);
	 }
	 if(ne==".2"){
	 		ss.innerHTML="Very bad!";
	 }
	 if(ne==".4"){
	 		ss.innerHTML="Bsad!";
	 }
	 if(ne==".6"){
	 		ss.innerHTML="OKKKKKK!";
	 }
	 if(ne==".8"){
	 		ss.innerHTML="Very good!";
	 }
	 if(ne=="1"){
	 		ss.innerHTML="Very Gooooooooooood!";
	 		document.getElementById('immg').style.display="block";
	 		const music1 = new Audio('iam.mp3');
	 	setTimeout(()=>{music1.play();},2100);
	 }
	 document.getElementById('rel-percen').innerHTML=per+"%";
	 document.getElementById('sjio').style.opacity=".3";
	 setTimeout(()=>{c.style.display="block"}, 500);
	 setTimeout(()=>{document.getElementById('matter').style.display="none"}, 500);
	 setTimeout(()=>{c.style.display="none"}, 2000);
	 setTimeout(()=>{document.getElementById('sjio').style.opacity="1";}, 2000);
	 setTimeout(()=>{document.getElementById('sjio').style.background="white	";}, 2000);
	 setTimeout(()=>{document.getElementById('result').style.display="block"},2000);
}
