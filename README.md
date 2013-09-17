WXVerify
========

The basic verify module of WEIXIN.

Refer to: [http://mp.weixin.qq.com/wiki/index.php?title=%E6%B6%88%E6%81%AF%E6%8E%A5%E5%8F%A3%E6%8C%87%E5%8D%97#.E7.BD.91.E5.9D.80.E6.8E.A5.E5.85.A5](http://mp.weixin.qq.com/wiki/index.php?title=%E6%B6%88%E6%81%AF%E6%8E%A5%E5%8F%A3%E6%8C%87%E5%8D%97#.E7.BD.91.E5.9D.80.E6.8E.A5.E5.85.A5)

How To
------

Use it as a package:

    $ npm install wxverify

And if you're using `express` you can pass the `req` param:

    var wxv = require("wxverify");
	var result = wxv.verifyExpress(req, "YOUR_TOKEN");

If the verify is succeed, it will return a string that you should echo to web. And if wrong, it will return false.

