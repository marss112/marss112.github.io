
var imgName="";
var kind="";
var product_view = "./img/" + kind + "/view_product/" + imgName + ".png";
function productHiddenText(e) {
   var vDiv = e.children[1];
   //console.log("Id: "+e.children[1]);    
   vDiv.style.display = (vDiv.style.display == 'none') ? 'block' : 'none';
}
function singleProductImage(e, id) {

   var s = e.src;
   s = s.substring(0, s.length - 4);
   s = s + "_big.png";
   document.getElementById(id).src = s;
   console.log("Id: " + e + " src:" + s);
}



function productLoad(e, kind, imgName) {

   var price = "";
   var titleName = "home/I'm a product"
   var btnSmallProductNamePath = "./img/" + kind + "/small_product/";
   var btnSmallProductName = ["", ""];
   btnSmallProductName[0] = imgName;
   var tmp = imgName.substring(0, imgName.length - 2);
   /**
    * 如果編碼大於10，就判斷原本數字前一個是不是英文，如果不是英文，則擷取後面一位字元
    */
   btnSmallProductName[1] = tmp + "-2";
   this.imgName=imgName;
   this.kind=kind;

   if (kind == "women") {

      if (imgName == "product1-1") {
         price = "NT19.99"

      }
      else if (imgName == "product2-1") {
         price = "NT120.00"
      }
      else {
         imgName = "product2-1";
      }
   }
   else if (kind == "men") {
      if (imgName == "product1-1") {
         price = "NT19.99"
      }
      else if (imgName == "product2-1") {
         price = "NT120.00"
      }
      else {
         imgName = "product2-1";
      }
   }
   else if (kind == "accessories") {
      if (imgName == "product1-1"){

      }
      else{
         imgName = "product2-1";
      }
      
   } 
   else if (kind == "sales") {
      if (imgName == "product1-1"){

      }
      else{
         imgName = "product2-1";
      }
      
   }
   var product_view = "./img/" + kind + "/view_product/" + imgName + ".png";
   this.product_view=product_view;
   if (kind == "men" || kind == "women") {
     
      if (titleName.length > 0) {
         document.getElementById("productTitleName1-1").innerText = titleName;
      }
      document.getElementById("productImg1-1").setAttribute("src", product_view);
     // magnify("productImg1-1", 3);
      if (price.length > 0) {
         document.getElementById("productPrice1-1").innerText = price;
      }
      document.getElementById("btnSmallProduct1-1").setAttribute("src", btnSmallProductNamePath + btnSmallProductName[0] + ".png");
      document.getElementById("btnSmallProduct1-2").setAttribute("src", btnSmallProductNamePath + btnSmallProductName[1] + ".png");
      console.log(btnSmallProductNamePath + btnSmallProductName[1] + ".png");
   }
   else if (kind == "accessories" ||kind=="sale") { 
     

      if (titleName.length > 0) {
         document.getElementById("productTitleName2-1").innerText = titleName;
      }
      document.getElementById("productImg2-1").setAttribute("src", product_view);
      //magnify("productImg2-1", 3);
      if (price.length > 0) {
         document.getElementById("productPrice2-1").innerText = price;
      }
     
      document.getElementById("btnSmallProduct2-1").setAttribute("src", btnSmallProductNamePath + btnSmallProductName[0] + ".png");
      document.getElementById("btnSmallProduct2-2").setAttribute("src", btnSmallProductNamePath + btnSmallProductName[1] + ".png");
   }
  /* if(IsPC()) {
      magnify("productImg1-1", 3);
      magnify("productImg2-1", 3);
      //magnify("printed_chiffion_dress", 3);
   }*/
}
function onClickBtnSmallProduct(e){
   var tmp = imgName.substring(0, imgName.length - 2);
   tmp=tmp.substring(7, imgName.length - 2);

   var product_viewRootPath = "./img/" + kind + "/view_product/product" ;
   var productPath=[product_viewRootPath+tmp + "-1.png",product_viewRootPath+tmp + "-2.png"];
   console.log("S:"+productPath[0]);
   if(e.id=="btnSmallProduct1-1"){
      document.getElementById("productImg1-1").setAttribute("src", productPath[0]);
   }
   else if (e.id=="btnSmallProduct1-2"){
      document.getElementById("productImg1-1").setAttribute("src", productPath[1]);
   }
   else if (e.id=="btnSmallProduct2-1"){
      document.getElementById("productImg2-1").setAttribute("src", productPath[0]);
   }
   else if (e.id=="btnSmallProduct2-2"){
      document.getElementById("productImg2-1").setAttribute("src", productPath[1]);
   }

}
