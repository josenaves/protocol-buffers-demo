var pb = require('protobufjs');
var builder = pb.loadProtoFile("./tile.proto");

Tile = builder.build('Tile');

sampleTileObj = {url: "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/10/387/160", img: "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…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"};
myTile = new Tile(sampleTileObj);
tilePB = Tile.encode(myTile);
tilePBHexa = Tile.encode(myTile).toString('hex');
tileJson = JSON.stringify(sampleTileObj, null, 2);

console.log('Tile JSON:\n' + tileJson);
console.log('Tile Protocol Buffer:\n' + tilePB);

sizeJson = tileJson.length;
console.log("Size of json message: " + sizeJson);

sizePB = tilePB.toBuffer().length;
console.log("Size of pb message (binary): " + sizePB);

difference = (1 - (sizePB / sizeJson)) * 100;
console.log("Difference " + difference  + "%");

//console.log("Size of pb message (hexa string): " + tilePBHexa.length);