function getLocation() {
    var options = {
        enableHighAccuracy : true,
        maximumAge : 1000
    }
    if (navigator.geolocation) {
        //浏览器支持geolocation
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    } else {
        //浏览器不支持geolocation
        alert('您的浏览器不支持地理位置定位');
    }
}

//成功时
function onSuccess(position) {
    //返回用户位置
    //经度
    var longitude = position.coords.longitude;
    //纬度
    var latitude = position.coords.latitude;
    alert('当前地址的经纬度：经度' + longitude + '，纬度' + latitude);
    //根据经纬度获取地理位置，不太准确，获取城市区域还是可以的
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(longitude, latitude);
    var gc = new BMap.Geocoder();
    gc.getLocation(point, function(rs) {
        var addComp = rs.addressComponents;
        alert(addComp.province + ", " + addComp.city + ", "+ addComp.district + ", " + addComp.street + ", "+ addComp.streetNumber);
    });
    // 这里后面可以写你的后续操作了
    // postData(longitude, latitude);
}
//失败时
function onError(error) {
    switch (error.code) {
        case 1:
            alert("位置服务被拒绝");
            break;
        case 2:
            alert("暂时获取不到位置信息");
            break;
        case 3:
            alert("获取信息超时");
            break;
        case 4:
            alert("未知错误");
            break;
    }
    // 这里后面可以写你的后续操作了
    //经度
    var longitude = 23.1823780000;
    //纬度
    var latitude = 113.4233310000;
    // postData(longitude, latitude);
}

module.exports=getLocation;