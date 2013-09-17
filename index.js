/**
 * Created with JetBrains WebStorm.
 * User: XadillaX
 * Date: 13-9-17
 * Time: 下午11:16
 * 微信对接验证函数。
 */
var crypto = require('crypto');

/**
 * Express框架的验证，只需传入req和token即可。
 * @param req
 * @param token
 * @returns {*}
 */
exports.verifyExpress = function(req, token) {
    if(req.query.signature === undefined || req.query.timestamp === undefined ||
        req.query.nonce === undefined || req.query.echostr === undefined)
    {
        return false;
    }

    /**
     * 获取参数
     * @type {string}
     */
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;

    /**
     * 从小到大排序
     * @type {Array}
     */
    var strArr = [ token, timestamp, nonce ];
    strArr.sort();
    var newsignature = strArr[0] + strArr[1] + strArr[2];

    /**
     * SHA1 加密
     * @type {*}
     */
    var sha1 = crypto.createHash('sha1');
    sha1.update(newsignature);
    newsignature = sha1.digest("hex");

    if(newsignature === req.query.signature) {
        return req.query.echostr;
    }

    return false;
};
