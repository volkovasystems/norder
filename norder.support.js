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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcmRlci5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImNyb3VudCIsInJlcXVpcmUiLCJmYWx6ZSIsImtvdW50IiwibWF4ZWxtIiwidmFsdSIsIndpY2hldnIiLCJub3JkZXIiLCJvcmRlciIsIm1heGltdW0iLCJFcnJvciIsInNvbWUiLCJpbmRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksT0FBT0osUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSyxVQUFVTCxRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTU0sU0FBUyxTQUFTQSxNQUFULENBQWlCQyxLQUFqQixFQUF3QkMsT0FBeEIsRUFBaUM7QUFDL0M7Ozs7Ozs7OztBQVNBLEtBQUlQLE1BQU9NLEtBQVAsS0FBa0IsUUFBT0EsS0FBUCx1REFBT0EsS0FBUCxNQUFnQixRQUF0QyxFQUFnRDtBQUMvQyxTQUFPLEtBQVA7QUFDQTs7QUFFREMsV0FBVUgsUUFBU0csT0FBVCxFQUFrQk4sTUFBT0ssS0FBUCxDQUFsQixDQUFWOztBQUVBLEtBQUksT0FBT0MsT0FBUCxJQUFrQixRQUF0QixFQUFnQztBQUMvQixRQUFNLElBQUlDLEtBQUosQ0FBVyxpQkFBWCxDQUFOO0FBQ0E7O0FBRURGLFNBQVFILEtBQU1HLEtBQU4sQ0FBUjs7QUFFQTs7Ozs7O0FBTUEsS0FBSUosT0FBUUksS0FBUixLQUFtQkMsT0FBdkIsRUFBZ0M7QUFDL0IsU0FBTyxLQUFQO0FBQ0E7O0FBRUQsS0FBSUQsTUFBTUcsSUFBTixDQUFZLFVBQUVDLEtBQUYsVUFBZVosT0FBUVEsS0FBUixFQUFlSSxLQUFmLElBQXlCLENBQXhDLEVBQVosQ0FBSixFQUErRDtBQUM5RCxTQUFPLEtBQVA7QUFDQTs7QUFFRCxRQUFPLElBQVA7QUFDQSxDQXJDRDs7QUF1Q0FDLE9BQU9DLE9BQVAsR0FBaUJQLE1BQWpCIiwiZmlsZSI6Im5vcmRlci5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJub3JkZXJcIixcblx0XHRcdFwicGF0aFwiOiBcIm5vcmRlci9ub3JkZXIuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm5vcmRlci5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJub3JkZXJcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL25vcmRlci5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcIm5vcmRlci10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENoZWNrIHBvaW50LW9yZGVyIG9wdGlvbiB2YWx1ZXMuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImNyb3VudFwiOiBcImNyb3VudFwiLFxuXHRcdFx0XCJmYWx6ZVwiOiBcImZhbHplXCIsXG5cdFx0XHRcImtvdW50XCI6IFwia291bnRcIixcblx0XHRcdFwibWF4ZWxtXCI6IFwibWF4ZWxtXCIsXG5cdFx0XHRcInZhbHVcIjogXCJ2YWx1XCIsXG5cdFx0XHRcIndpY2hldnJcIjogXCJ3aWNoZXZyXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY3JvdW50ID0gcmVxdWlyZSggXCJjcm91bnRcIiApO1xuY29uc3QgZmFsemUgPSByZXF1aXJlKCBcImZhbHplXCIgKTtcbmNvbnN0IGtvdW50ID0gcmVxdWlyZSggXCJrb3VudFwiICk7XG5jb25zdCBtYXhlbG0gPSByZXF1aXJlKCBcIm1heGVsbVwiICk7XG5jb25zdCB2YWx1ID0gcmVxdWlyZSggXCJ2YWx1XCIgKTtcbmNvbnN0IHdpY2hldnIgPSByZXF1aXJlKCBcIndpY2hldnJcIiApO1xuXG5jb25zdCBub3JkZXIgPSBmdW5jdGlvbiBub3JkZXIoIG9yZGVyLCBtYXhpbXVtICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwib3JkZXI6cmVxdWlyZWRcIjogXCJvYmplY3RcIixcblx0XHRcdFx0XCJtYXhpbXVtXCI6IFwibnVtYmVyXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6ZSggb3JkZXIgKSB8fCB0eXBlb2Ygb3JkZXIgIT0gXCJvYmplY3RcIiApe1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdG1heGltdW0gPSB3aWNoZXZyKCBtYXhpbXVtLCBrb3VudCggb3JkZXIgKSApO1xuXG5cdGlmKCB0eXBlb2YgbWF4aW11bSAhPSBcIm51bWJlclwiICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbWF4aW11bVwiICk7XG5cdH1cblxuXHRvcmRlciA9IHZhbHUoIG9yZGVyICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRPcmRlciB1c2VzIHplcm8tYmFzZWQgaW5kZXggc28gdGhlIG1heGltdW0gaW5kZXggc2hvdWxkXG5cdFx0XHRcdG5vdCBiZSBlcXVhbCB0byB0aGUgbWF4aW11bSBsZW5ndGguXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlmKCBtYXhlbG0oIG9yZGVyICkgPj0gbWF4aW11bSApe1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmKCBvcmRlci5zb21lKCAoIGluZGV4ICkgPT4gKCBjcm91bnQoIG9yZGVyLCBpbmRleCApID4gMSApICkgKXtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm9yZGVyO1xuIl19
//# sourceMappingURL=norder.support.js.map
