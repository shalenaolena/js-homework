

  

  let arr = [{"itemId":"item0","itemName":"Мурчик","itemCategory":"Cats","itemPrice":"100","itemImg":"img/cat1.jpg","itemDescription":"Гарний котик! Дуже-дуже!"},{"itemId":"item1","itemName":"Мадонна","itemCategory":"Cats","itemPrice":"100","itemImg":"img/cat2.jpg","itemDescription":"Просто шикарна кішечка!"},{"itemId":"item2","itemName":"Сіренький","itemCategory":"Cats","itemPrice":"100","itemImg":"img/cat3.jpg","itemDescription":"Малий та хороший котик."},{"itemId":"item3","itemName":"Панібудьласка","itemCategory":"Cats","itemPrice":"100","itemImg":"img/cat4.jpg","itemDescription":"Дуже великий та злий котик. Але фотогінічний!"},{"itemId":"item4","itemName":"Сонько","itemCategory":"Cats","itemPrice":"100","itemImg":"img/cat5.jpg","itemDescription":"Якщо ви в цьому світі щось розумієте, то підете зара трошки поспати!"},{"itemId":"item5","itemName":"Білий","itemCategory":"Dogs","itemPrice":"100","itemImg":"img/dog1.jpg","itemDescription":"Гарний песик!"},{"itemId":"item6","itemName":"Барбосик","itemCategory":"Dogs","itemPrice":"100","itemImg":"img/dog2.jpg","itemDescription":"Теленький та гарненький!"},{"itemId":"item7","itemName":"Елизавета","itemCategory":"Dogs","itemPrice":"100","itemImg":"img/dog3.jpg","itemDescription":"Шанована пані з вухами!"},{"itemId":"item8","itemName":"Рекс","itemCategory":"Dogs","itemPrice":"100","itemImg":"img/dog4.jpg","itemDescription":"Стрибало! Дуже гарно стрибає через паркани."},{"itemId":"item9","itemName":"Сонько","itemCategory":"Dogs","itemPrice":"100","itemImg":"img/dog5.jpg","itemDescription":"Любе поспати."},{"itemId":"item10","itemName":"Недовіряка","itemCategory":"Dogs","itemPrice":"100","itemImg":"img/dog6.jpg","itemDescription":"Перевіряє усе та усіх!"},{"itemId":"item11","itemName":"Гусь білий","itemCategory":"Birds","itemPrice":"100","itemImg":"img/goose1.jpg","itemDescription":"Одни білий, другий сірий. Бабусям брати комплект веселих гусей!"},{"itemId":"item12","itemName":"Гусь сірий","itemCategory":"Birds","itemPrice":"100","itemImg":"img/goose2.jpg","itemDescription":"Одни сірий, другий білий. Бабусям - брати комплект! "},{"itemId":"item13","itemName":"Синичка вусата","itemCategory":"Birds","itemPrice":"100","itemImg":"img/tit1.jpg","itemDescription":"Чаку Норісу на заздрість!"},{"itemId":"item14","itemName":"Бугай","itemCategory":"Birds","itemPrice":"100","itemImg":"img/bittern1.jpg","itemDescription":"Веде таємниче життя в очереті..."},{"itemId":"item15","itemName":"Хохуля","itemCategory":"Other","itemPrice":"50","itemImg":"img/galemys1.jpg","itemDescription":"Дуже таємнича істота..."},{"itemId":"item16","itemName":"Пупоня","itemCategory":"Cats","itemPrice":"100","itemImg":"img/cat6.jpg","itemDescription":"Його вираз, коли бачить помилки"},{"itemId":"item17","itemName":"Test","itemCategory":"Other","itemPrice":"Test","itemImg":"img/tit1.jpg","itemDescription":"11111"}];
  
  arr.sort(function(a, b) {
    return parseFloat(a["itemPrice"]) + parseFloat(b["itemPrice"]);
});
    
    console.log(arr);
  