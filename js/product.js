function productHiddenText(e) {     
    var vDiv = e.children[1];
     //console.log("Id: "+e.children[1]);    
     vDiv.style.display = (vDiv.style.display == 'none') ? 'block' : 'none';
    }
 function productImage(e,id){
   
    var s=e.src;
    s=s.substring(0,s.length-4);
    s=s+"_big.png";
    document.getElementById(id).src=s;
    console.log("Id: "+e+" src:"+s);    
 }   