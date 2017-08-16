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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcmRlci5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImNyb3VudCIsInJlcXVpcmUiLCJmYWx6ZSIsImtvdW50IiwibWF4ZWxtIiwidmFsdSIsIndpY2hldnIiLCJub3JkZXIiLCJvcmRlciIsIm1heGltdW0iLCJFcnJvciIsInNvbWUiLCJpbmRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksT0FBT0osUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSyxVQUFVTCxRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTU0sU0FBUyxTQUFTQSxNQUFULENBQWlCQyxLQUFqQixFQUF3QkMsT0FBeEIsRUFBaUM7QUFDL0M7Ozs7Ozs7OztBQVNBLEtBQUlQLE1BQU9NLEtBQVAsS0FBa0IsUUFBT0EsS0FBUCx1REFBT0EsS0FBUCxNQUFnQixRQUF0QyxFQUFnRDtBQUMvQyxTQUFPLEtBQVA7QUFDQTs7QUFFREMsV0FBVUgsUUFBU0csT0FBVCxFQUFrQk4sTUFBT0ssS0FBUCxDQUFsQixDQUFWOztBQUVBLEtBQUksT0FBT0MsT0FBUCxJQUFrQixRQUF0QixFQUFnQztBQUMvQixRQUFNLElBQUlDLEtBQUosQ0FBVyxpQkFBWCxDQUFOO0FBQ0E7O0FBRURGLFNBQVFILEtBQU1HLEtBQU4sQ0FBUjs7QUFFQTs7Ozs7O0FBTUEsS0FBSUosT0FBUUksS0FBUixLQUFtQkMsT0FBdkIsRUFBZ0M7QUFDL0IsU0FBTyxLQUFQO0FBQ0E7O0FBRUQsS0FBSUQsTUFBTUcsSUFBTixDQUFZLFVBQUVDLEtBQUYsVUFBZVosT0FBUVEsS0FBUixFQUFlSSxLQUFmLElBQXlCLENBQXhDLEVBQVosQ0FBSixFQUErRDtBQUM5RCxTQUFPLEtBQVA7QUFDQTs7QUFFRCxRQUFPLElBQVA7QUFDQSxDQXJDRDs7QUF1Q0FDLE9BQU9DLE9BQVAsR0FBaUJQLE1BQWpCIiwiZmlsZSI6Im5vcmRlci5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcIm5vcmRlclwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJub3JkZXIvbm9yZGVyLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcIm5vcmRlci5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm5vcmRlclwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9ub3JkZXIuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcIm5vcmRlci10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdENoZWNrIHBvaW50LW9yZGVyIG9wdGlvbiB2YWx1ZXMuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJjcm91bnRcIjogXCJjcm91bnRcIixcclxuXHRcdFx0XCJmYWx6ZVwiOiBcImZhbHplXCIsXHJcblx0XHRcdFwia291bnRcIjogXCJrb3VudFwiLFxyXG5cdFx0XHRcIm1heGVsbVwiOiBcIm1heGVsbVwiLFxyXG5cdFx0XHRcInZhbHVcIjogXCJ2YWx1XCIsXHJcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgY3JvdW50ID0gcmVxdWlyZSggXCJjcm91bnRcIiApO1xyXG5jb25zdCBmYWx6ZSA9IHJlcXVpcmUoIFwiZmFsemVcIiApO1xyXG5jb25zdCBrb3VudCA9IHJlcXVpcmUoIFwia291bnRcIiApO1xyXG5jb25zdCBtYXhlbG0gPSByZXF1aXJlKCBcIm1heGVsbVwiICk7XHJcbmNvbnN0IHZhbHUgPSByZXF1aXJlKCBcInZhbHVcIiApO1xyXG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcclxuXHJcbmNvbnN0IG5vcmRlciA9IGZ1bmN0aW9uIG5vcmRlciggb3JkZXIsIG1heGltdW0gKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm9yZGVyOnJlcXVpcmVkXCI6IFwib2JqZWN0XCIsXHJcblx0XHRcdFx0XCJtYXhpbXVtXCI6IFwibnVtYmVyXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsemUoIG9yZGVyICkgfHwgdHlwZW9mIG9yZGVyICE9IFwib2JqZWN0XCIgKXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdG1heGltdW0gPSB3aWNoZXZyKCBtYXhpbXVtLCBrb3VudCggb3JkZXIgKSApO1xyXG5cclxuXHRpZiggdHlwZW9mIG1heGltdW0gIT0gXCJudW1iZXJcIiApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbWF4aW11bVwiICk7XHJcblx0fVxyXG5cclxuXHRvcmRlciA9IHZhbHUoIG9yZGVyICk7XHJcblxyXG5cdC8qO1xyXG5cdFx0QG5vdGU6XHJcblx0XHRcdE9yZGVyIHVzZXMgemVyby1iYXNlZCBpbmRleCBzbyB0aGUgbWF4aW11bSBpbmRleCBzaG91bGRcclxuXHRcdFx0XHRub3QgYmUgZXF1YWwgdG8gdGhlIG1heGltdW0gbGVuZ3RoLlxyXG5cdFx0QGVuZC1ub3RlXHJcblx0Ki9cclxuXHRpZiggbWF4ZWxtKCBvcmRlciApID49IG1heGltdW0gKXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlmKCBvcmRlci5zb21lKCAoIGluZGV4ICkgPT4gKCBjcm91bnQoIG9yZGVyLCBpbmRleCApID4gMSApICkgKXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBub3JkZXI7XHJcbiJdfQ==
//# sourceMappingURL=norder.support.js.map
