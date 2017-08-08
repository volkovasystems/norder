
const assert = require( "assert" );
const norder = require( "./norder.js" );

assert.equal( norder( {
	"apple": 0,
	"cherry": 1,
	"orange": 2
} ), true, "should be equal to true" );

assert.equal( norder( {
	"apple": 0,
	"cherry": 1,
	"orange": 5
} ), false, "should be equal to false" );

assert.equal( norder( {
	"apple": 0,
	"cherry": 1,
	"orange": 3
} ), false, "should be equal to false" );

assert.equal( norder( {
	"apple": 0,
	"cherry": 1,
	"orange": 1
} ), false, "should be equal to false" );

console.log( "ok" );
