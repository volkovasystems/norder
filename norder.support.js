"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "norder",
              			"path": "norder/norder.js",
              			"file": "norder.js",
              			"module": "norder",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/norder.git",
              			"test": "norder-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Check point-order option values.
              	@end-module-documentation
              
              	@include:
              		{
              			"crount": "crount",
              			"falze": "falze",
              			"kount": "kount",
              			"maxelm": "maxelm",
              			"valu": "valu",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var crount = require("crount");
var falze = require("falze");
var kount = require("kount");
var maxelm = require("maxelm");
var valu = require("valu");
var wichevr = require("wichevr");

var norder = function norder(order, maximum) {
	/*;
                                              	@meta-configuration:
                                              		{
                                              			"order:required": "object",
                                              			"maximum": "number"
                                              		}
                                              	@end-meta-configuration
                                              */

	if (falze(order) || (typeof order === "undefined" ? "undefined" : (0, _typeof3.default)(order)) != "object") {
		return false;
	}

	maximum = wichevr(maximum, kount(order));

	if (typeof maximum != "number") {
		throw new Error("invalid maximum");
	}

	order = valu(order);

	/*;
                      	@note:
                      		Order uses zero-based index so the maximum index should
                      			not be equal to the maximum length.
                      	@end-note
                      */
	if (maxelm(order) >= maximum) {
		return false;
	}

	if (order.some(function (index) {return crount(order, index) > 1;})) {
		return false;
	}

	return true;
};

module.exports = norder;

//# sourceMappingURL=norder.support.js.map