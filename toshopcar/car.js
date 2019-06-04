function Car(){}

//获取购物车商品
Car.prototype.getCar = function(){
  //没有数据默认返回一个空数组
  return  JSON.parse( localStorage.getItem('cartlist') ) || [];
}

//添加商品到购物车
Car.prototype.addToCar = function(product){
  var cartlist = this.getCar();
  //1.判断是否有相同商品
  if(this.hasGoods(product.id)){
    for(var i=0; i<cartlist.length; i++){
      if(cartlist[i].id == product.id){
       //有：数量加一
       cartlist[i].number += 1
      }
    }
  }else{
     //2、没有：直接加入
     cartlist.push(product);
  }

  //要在存入本地存储(要转化字符串进行存储)
  localStorage.setItem('cartlist',JSON.stringify(cartlist));
}

//判断购物车是否有相同商品
Car.prototype.hasGoods = function(id){
  var cartlist = this.getCar();
  //判断id是否相同，
  for(var i=0; i<cartlist.length; i++){
    if(cartlist[i].id == id){
      return true;
    }
  }

  return false;
}


//获取购物车商品的总价格
Car.prototype.getTotalPrice = function(){
  var totalPrice = 0; //默认0元
  var cartlist = this.getCar();
  for(var i=0; i<cartlist.length; i++){
    totalPrice +=  parseFloat( cartlist[i].price )* parseInt( cartlist[i].number )
  }

  return totalPrice;
}

//获取购物车商品的总数量
Car.prototype.getTotalNumber = function(){
  var totalNumber = 0; 
  var cartlist = this.getCar();
  for(var i=0; i<cartlist.length; i++){
    totalNumber +=  parseInt( cartlist[i].number )
  }

  return totalNumber;
}




//删除购物车指定的商品
Car.prototype.delGoods = function(id){
  var cartlist = this.getCar();
  for(var i=0; i<cartlist.length; i++){
    if(cartlist[i].id == id){
      //删除当前商品
      cartlist.splice(i,1);
      //需要在存入本地存储
      localStorage.setItem( 'cartlist',JSON.stringify(cartlist) )
      return true;
    }
  }


  return false;
}