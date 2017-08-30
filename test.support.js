"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "norder",
              			"path": "norder/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/norder.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"norder": "norder"
              		}
              	@end-include
              */

var assert = require("should");



//: @client:
var norder = require("./norder.support.js");
//: @end-client







//: @client:

describe("norder", function () {

	describe("`norder( { 'apple': 0, 'cherry': 1, 'orange': 2 } )`", function () {
		it("should be equal to true", function () {

			assert.equal(norder({
				"apple": 0,
				"cherry": 1,
				"orange": 2 }),
			true);

		});
	});

	describe("`norder( { 'apple': 0, 'cherry': 1, 'orange': 5 } )`", function () {
		it("should be equal to false", function () {

			assert.equal(norder({
				"apple": 0,
				"cherry": 1,
				"orange": 5 }),
			false);

		});
	});

	describe("`norder( { 'apple': 0, 'cherry': 1, 'orange': 3 } )`", function () {
		it("should be equal to false", function () {

			assert.equal(norder({
				"apple": 0,
				"cherry": 1,
				"orange": 3 }),
			false);

		});
	});

	describe("`norder( { 'apple': 0, 'cherry': 1, 'orange': 1 } )`", function () {
		it("should be equal to false", function () {

			assert.equal(norder({
				"apple": 0,
				"cherry": 1,
				"orange": 1 }),
			false);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibm9yZGVyIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLHFCQUFULENBQWY7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCQSxVQUFVLHNEQUFWLEVBQWtFLFlBQU87QUFDeEVDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUTtBQUNyQixhQUFTLENBRFk7QUFFckIsY0FBVSxDQUZXO0FBR3JCLGNBQVUsQ0FIVyxFQUFSLENBQWQ7QUFJSyxPQUpMOztBQU1BLEdBUkQ7QUFTQSxFQVZEOztBQVlBQyxVQUFVLHNEQUFWLEVBQWtFLFlBQU87QUFDeEVDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUTtBQUNyQixhQUFTLENBRFk7QUFFckIsY0FBVSxDQUZXO0FBR3JCLGNBQVUsQ0FIVyxFQUFSLENBQWQ7QUFJSyxRQUpMOztBQU1BLEdBUkQ7QUFTQSxFQVZEOztBQVlBQyxVQUFVLHNEQUFWLEVBQWtFLFlBQU87QUFDeEVDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUTtBQUNyQixhQUFTLENBRFk7QUFFckIsY0FBVSxDQUZXO0FBR3JCLGNBQVUsQ0FIVyxFQUFSLENBQWQ7QUFJSyxRQUpMOztBQU1BLEdBUkQ7QUFTQSxFQVZEOztBQVlBQyxVQUFVLHNEQUFWLEVBQWtFLFlBQU87QUFDeEVDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUTtBQUNyQixhQUFTLENBRFk7QUFFckIsY0FBVSxDQUZXO0FBR3JCLGNBQVUsQ0FIVyxFQUFSLENBQWQ7QUFJSyxRQUpMOztBQU1BLEdBUkQ7QUFTQSxFQVZEOztBQVlBLENBbEREOztBQW9EQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm5vcmRlclwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibm9yZGVyL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9ub3JkZXIuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcIm5vcmRlclwiOiBcIm5vcmRlclwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3Qgbm9yZGVyID0gcmVxdWlyZSggXCIuL25vcmRlci5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwibm9yZGVyXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYG5vcmRlciggeyAnYXBwbGUnOiAwLCAnY2hlcnJ5JzogMSwgJ29yYW5nZSc6IDIgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggbm9yZGVyKCB7XG5cdFx0XHRcdFwiYXBwbGVcIjogMCxcblx0XHRcdFx0XCJjaGVycnlcIjogMSxcblx0XHRcdFx0XCJvcmFuZ2VcIjogMlxuXHRcdFx0fSApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbm9yZGVyKCB7ICdhcHBsZSc6IDAsICdjaGVycnknOiAxLCAnb3JhbmdlJzogNSB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggbm9yZGVyKCB7XG5cdFx0XHRcdFwiYXBwbGVcIjogMCxcblx0XHRcdFx0XCJjaGVycnlcIjogMSxcblx0XHRcdFx0XCJvcmFuZ2VcIjogNVxuXHRcdFx0fSApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG5vcmRlciggeyAnYXBwbGUnOiAwLCAnY2hlcnJ5JzogMSwgJ29yYW5nZSc6IDMgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIG5vcmRlcigge1xuXHRcdFx0XHRcImFwcGxlXCI6IDAsXG5cdFx0XHRcdFwiY2hlcnJ5XCI6IDEsXG5cdFx0XHRcdFwib3JhbmdlXCI6IDNcblx0XHRcdH0gKSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBub3JkZXIoIHsgJ2FwcGxlJzogMCwgJ2NoZXJyeSc6IDEsICdvcmFuZ2UnOiAxIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBub3JkZXIoIHtcblx0XHRcdFx0XCJhcHBsZVwiOiAwLFxuXHRcdFx0XHRcImNoZXJyeVwiOiAxLFxuXHRcdFx0XHRcIm9yYW5nZVwiOiAxXG5cdFx0XHR9ICksIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
