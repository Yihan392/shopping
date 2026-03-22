// app.js
App({
  onLaunch() {

    var goods=wx.getStorageSync('goods');
    if(!goods){
      goods=this.loadGoods();
    }
    wx.setStorageSync('goods', goods);


    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  loadGoods:function (e) {
    var goods=new Array();
    var good=new Object();
    good.id="0";
    good.pic='https://img.alicdn.com/imgextra/i3/6000000004245/O1CN01IUdtb51hEFxRDHfJj_!!6000000004245-0-at.jpg_430x430q90.jpg';
    good.name='洽洽焦糖味瓜子坚果炒货500g*1袋过年休闲零食囤货年货葵花籽恰恰';
    good.price='47.80';
    good.type='supermarket';
    goods[0]=good;

    var good1=new Object();
    good1.id="1";
    good1.pic='https://img.alicdn.com/imgextra/i2/880734502/O1CN018urw0h1j7xp3Y6doG_!!0-item_pic.jpg_430x430q90.jpg';
    good1.name='【满400减290】三只松鼠夏威夷果160g孕妇零食休闲食品坚果特产';
    good1.price='38.90';
    good1.type='supermarket';
    goods[1]=good1;
    
    var good2=new Object();
    good2.id="2";
    good2.pic='https://img.alicdn.com/imgextra/i3/628189716/O1CN01O0KzYn2LdyuPhjwBP-628189716.jpg_430x430q90.jpg';
    good2.name='满减【百草味-开心果100g】坚果干果孕妇休闲零食原色无漂白袋装';
    good2.price='38.70';
    good2.type='supermarket';
    goods[2]=good2;

    return goods;
    
  },

  globalData: {
    userInfo: null
  }
})
