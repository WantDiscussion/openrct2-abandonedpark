var bushesAndShrubsIndex = [];
var deadTrees89Index = [];
var deadTrees67Index = [];
var kT89Index = [];
var kT67Index = [];
var sBWaFIndex = []; //smallBreakableWallsandFloorsIndex
var lBWaFIndex = []; //largeBreakableWallsandFloorsIndex

//Probability Scale
var globalProbScale = 1;
var ageGrassProbScale = 1;
var growShrubProbScale = 1;
var breakTrackProbScale = 1;
var killGrassProbScale = 1;
var killTreeProbScale = 1;
var trashPathProbScale = 1;
var destroyStructProbScale = 1;
var fadePaintProbScale = 1;

var maxDPT = 3;
var iterations = 1;

const bushAndShrubIdents = ['rct2.ww.1x1atree', 'rct2.tjb4', 'rct2.tjb2', 'rct2.tjb3', 'rct2.tbr', 'rct2.tjb1', 'rct2.tsh4', 'rct2.tsh3', 'rct2.tsh5', 'rct2.tsh0', 'rct2.tsh1'];
const deadTrees89Idents = ['rct2.tdt2', 'rct2.tdt1'];
const deadTrees67Idents = ['rct2.tdt3'];
const killableTreesC8C9Iden = ['rct2.tcy', 'rct2.tm1', 'rct2.tm0', 'rct2.tghc2', 'rct2.tcj', 'rct2.tas', 'rct2.tww', 'rct2.tf1', 'rct2.tf2', 'rct2.tpm', 'rct2.tropt1', 'rct2.tt.shwdfrst', 'rct2.ww.jachtree', 'rct2.ww.jappintr', 'rct2.ww.japsnotr', 'rct2.tjt4', 'rct2.tjt6', 'rct2.tsp1', 'rct2.tot2', 'rct2.tjt5', 'rct2.tm3', 'rct2.tt.yewtreex'];
const killableTreesC6C7Iden = ['rct2.tmbj', 'rct2.tmg', 'rct2.tce', 'rct2.ts0', 'rct2.ts2', 'rct2.tot4'];

const breakableSmallWallsIden = ['rct2.tt.artdec20', 'rct2.tt.artdec17', 'rct2.tt.artdec15', 'rct2.tt.artdec16', 'rct2.tt.artdec01', 'rct2.tt.artdec19', 'rct2.tt.artdec10', 'rct2.tt.artdec09', 'rct2.tt.artdec03', 'rct2.tt.artdec21', 'rct2.tt.artdec23', 'rct2.tt.artdec22', 'rct2.tt.artdec24', 'rct2.tt.artdec05', 'rct2.tt.artdec04', 'rct2.ww.sbwplm08', 'rct2.ww.sbwplm07', 'rct2.ww.sbwplm06', 'rct2.ww.rmud03', 'rct2.ww.rmud01', 'rct2.ww.rmud02', 'rct2.cwbcrv32', 'rct2.cwfcrv32', 'rct2.tt.psntwl02', 'rct2.tt.psntwl03', 'rct2.tt.psntwl05', 'rct2.tt.psntwl06', 'rct2.tt.psntwl07', 'rct2.tt.psntwl04', 'rct2.tt.psntwl13', 'rct2.tt.psntwl12', 'rct2.tt.psntwl09', 'rct2.tt.psntwl11', 'rct2.tt.psntwl10', 'rct2.ww.wdrab11', 'rct2.ww.wdrab12', 'rct2.ww.wdrab10', 'rct2.ww.wgeorg07', 'rct2.ww.wgeorg08', 'rct2.ww.wgeorg09', 'rct2.ww.rgeorg08', 'rct2.ww.wgeorg10', 'rct2.ww.wgeorg11', 'rct2.ww.wgeorg12', 'rct2.tt.hrbwal01', 'rct2.tt.hrbwal02', 'rct2.tt.hrbwal04', 'rct2.tt.hrbwal05', 'rct2.tt.hrbwal03', 'rct2.tt.hrbwal06', 'rct2.ww.roofig01', 'rct2.ww.roofig04', 'rct2.ww.roofig06', 'rct2.ww.roofig03', 'rct2.ww.roofig02', 'rct2.tt.indwal14', 'rct2.tt.indwal15', 'rct2.tt.indwal02', 'rct2.tt.indwal04', 'rct2.tt.indwal03', 'rct2.tt.indwal01', 'rct2.tt.indwal13', 'rct2.tt.indwal07', 'rct2.tt.indwal08', 'rct2.tt.indwal11', 'rct2.tt.indwal10', 'rct2.tt.indwal09', 'rct2.tt.indwal12', 'rct2.tt.indwal30', 'rct2.tt.indwal31', 'rct2.tt.indwal18', 'rct2.tt.indwal19', 'rct2.tt.indwal16', 'rct2.tt.indwal32', 'rct2.tt.indwal17', 'rct2.ww.wkreml01', 'rct2.ww.wkreml02', 'rct2.ww.wkreml03', 'rct2.ww.wkreml04', 'rct2.ww.wkreml05', 'rct2.ww.wkreml06', 'rct2.ww.rlog03', 'rct2.ww.rlog04', 'rct2.ww.wmayan25', 'rct2.ww.wmayan26', 'rct2.ww.wmayan23', 'rct2.ww.wmayan24', 'rct2.ww.wmayan07', 'rct2.ww.wmayan03', 'rct2.ww.wmayan06', 'rct2.ww.wmayan11', 'rct2.ww.wmayan20', 'rct2.ww.wmayan08', 'rct2.ww.wmayan10', 'rct2.ww.wmayan01', 'rct2.ww.wmayan09', 'rct2.ww.wmayan04', 'rct2.ww.wmayan05', 'rct2.ww.wcuzco02', 'rct2.ww.wcuzco13', 'rct2.ww.wcuzco04', 'rct2.ww.wcuzco06', 'rct2.ww.wcuzco08', 'rct2.ww.wcuzco10', 'rct2.ww.wcuzco12', 'rct2.ww.wcuzco14', 'rct2.ww.wcuzco15', 'rct2.ww.wcuzco28', 'rct2.ww.wcuzco16', 'rct2.ww.wcuzco18', 'rct2.ww.wcuzco23', 'rct2.ww.wcuzco24', 'rct2.ww.wcuzco22', 'rct2.ww.wcuzco21', 'rct2.ww.wcuzco09', 'rct2.ww.wcuzco01', 'rct2.ww.wcuzco11', 'rct2.ww.wcuzco17', 'rct2.ww.wcuzco27', 'rct2.ww.wcuzco03', 'rct2.ww.wcuzco05', 'rct2.ww.wcuzco07', 'rct2.tt.oldnyk01', 'rct2.tt.oldnyk02', 'rct2.tt.oldnyk34', 'rct2.tt.oldnyk33', 'rct2.tt.oldnyk31', 'rct2.tt.oldnyk19', 'rct2.tt.oldnyk18', 'rct2.tt.oldnyk03', 'rct2.tt.oldnyk17', 'rct2.tt.oldnyk15', 'rct2.tt.oldnyk16', 'rct2.tt.oldnyk04', 'rct2.tt.oldnyk13', 'rct2.tt.oldnyk11', 'rct2.tt.futsky38', 'rct2.tt.futsky44', 'rct2.tt.futsky41', 'rct2.tt.futsky40', 'rct2.tt.futsky47', 'rct2.tt.futsky48', 'rct2.tt.jailxx21', 'rct2.tt.jailxx20', 'rct2.tt.jailxx05', 'rct2.tt.jailxx06', 'rct2.tt.jailxx01', 'rct2.tt.jailxx02', 'rct2.tt.jailxx03', 'rct2.tt.jailxx04', 'rct2.tt.jailxx07', 'rct2.tt.futsky07', 'rct2.tt.futsky08', 'rct2.tt.futsky09', 'rct2.tt.futsky12', 'rct2.tt.futsky21', 'rct2.stldw2', 'rct2.stldw', 'rct2.ww.sbskys02', 'rct2.ww.sbskys01', 'rct2.ww.waztec26', 'rct2.ww.waztec11', 'rct2.ww.waztec12', 'rct2.ww.waztec27', 'rct2.ww.waztec09', 'rct2.ww.waztec13', 'rct2.ww.waztec10', 'rct2.ww.waztec08', 'rct2.ww.waztec22', 'rct2.ww.waztec07', 'rct2.ww.waztec06', 'rct2.ww.waztec05', 'rct2.ww.waztec04', 'rct2.ww.waztec03', 'rct2.ww.waztec25', 'rct2.ww.waztec24', 'rct2.ww.waztec23', 'rct2.ww.waztec14', 'rct2.ww.wtudor13', 'rct2.ww.wtudor14', 'rct2.ww.wtudor15', 'rct2.ww.wtudor16', 'rct2.ww.wtudor17', 'rct2.ww.wtudor18', 'rct2.ww.wtudor12', 'rct2.sktdw2', 'rct2.sktdw'];

const breakableLargeWallsIden = ['rct2.tt.oldnyk30', 'rct2.tt.oldnyk29', 'rct2.tt.oldnyk28', 'rct2.tt.oldnyk27', 'rct2.tt.oldnyk22', 'rct2.tt.oldnyk23', 'rct2.tt.oldnyk21', 'rct2.ww.1x2azt02', 'rct2.ww.1x2azt01'];

const breakableSmallRoofsIden = ['rct2.tt.artdec28', 'rct2.ww.sbwplm03', 'rct2.ww.sbwplm05', 'rct2.ww.sbwplm04', 'rct2.tntroof1', 'rct2.ww.rcorr02', 'rct2.ww.rcorr03', 'rct2.ww.rcorr11', 'rct2.ww.rcorr10', 'rct2.ww.rcorr09', 'rct2.ww.rcorr01', 'rct2.ww.rcorr08', 'rct2.ww.rcorr07', 'rct2.ww.rcorr05', 'rct2.ww.rcorr04', 'rct2.corroof', 'rct2.brcrrf1', 'rct2.brcrrf2', 'rct2.tt.psntwl31', 'rct2.tt.psntwl15', 'rct2.tt.psntwl16', 'rct2.tt.psntwl14', 'rct2.tt.psntwl17', 'rct2.tt.psntwl01', 'rct2.tt.psntwl29', 'rct2.tt.psntwl21', 'rct2.tt.psntwl20', 'rct2.tt.psntwl30', 'rct2.ww.rdrab11', 'rct2.ww.rdrab12', 'rct2.ww.rdrab13', 'rct2.ww.rdrab14', 'rct2.ww.rgeorg11', 'rct2.ww.rgeorg09', 'rct2.ww.rgeorg10', 'rct2.ww.rgeorg01', 'rct2.ww.rgeorg02', 'rct2.ww.rgeorg03', 'rct2.ww.rgeorg04', 'rct2.ww.rgeorg05', 'rct2.ww.rgeorg06', 'rct2.ww.rgeorg07', 'rct2.ww.rgeorg12', 'rct2.georoof2', 'rct2.georoof1', 'rct2.tt.hevrof01', 'rct2.tt.hevrof04', 'rct2.tt.hevrof02', 'rct2.tt.hevrof03', 'rct2.ww.roofice6', 'rct2.ww.roofice4', 'rct2.ww.roofice5', 'rct2.ww.roofice2', 'rct2.ww.roofice1', 'rct2.ww.roofice3', 'rct2.igroof', 'rct2.tt.indwal06', 'rct2.tt.indwal05', 'rct2.tt.indwal26', 'rct2.tt.indwal24', 'rct2.tt.indwal23', 'rct2.tt.indwal28', 'rct2.tt.indwal29', 'rct2.tt.indwal21', 'rct2.tt.indwal27', 'rct2.tt.indwal20', 'rct2.tt.indwal25', 'rct2.tt.indwal22', 'rct2.ww.rshogi3', 'rct2.ww.rshogi1', 'rct2.ww.rshogi2', 'rct2.ww.rkreml04', 'rct2.ww.rkreml05', 'rct2.ww.rlog02', 'rct2.ww.rlog05', 'rct2.ww.rlog01', 'rct2.ww.wmayan02', 'rct2.ww.wmayan22', 'rct2.ww.wmayan21', 'rct2.ww.rmarble2', 'rct2.ww.rmarble4', 'rct2.ww.rmarble3', 'rct2.ww.rmarble1', 'rct2.ww.rmud05', 'rct2.ww.wropecor', 'rct2.ww.wnauti02', 'rct2.ww.wnauti03', 'rct2.ww.wnauti04', 'rct2.ww.wnauti05', 'rct2.ww.wnauti01', 'rct2.ww.wropeswa', 'rct2.tt.oldnyk35', 'rct2.tt.oldnyk05', 'rct2.tt.futsky54', 'rct2.tt.jailxx07', 'rct2.ww.rbrick02', 'rct2.ww.rbrick04', 'rct2.ww.rbrick03', 'rct2.ww.rbrick01', 'rct2.ww.rbrick08', 'rct2.ww.rbrick05', 'rct2.ww.rbrick07', 'rct2.roof6', 'rct2.roof4', 'rct2.roof5', 'rct2.roof13', 'rct2.roof10', 'rct2.pirroof2', 'rct2.roof7', 'rct2.roof11', 'rct2.roof1', 'rct2.romroof1', 'rct2.roof12', 'rct2.pirroof1', 'rct2.pagroof1', 'rct2.minroof1', 'rct2.jngroof1', 'rct2.roof8', 'rct2.roof9', 'rct2.roof14', 'rct2.spcroof1', 'rct2.sumrf', 'rct2.roof2', 'rct2.roof3', 'rct2.tt.futsky34', 'rct2.tt.futsky14', 'rct2.tt.futsky13', 'rct2.ww.sbskys14', 'rct2.ww.sbskys16', 'rct2.ww.sbskys18', 'rct2.ww.sbskys17', 'rct2.ww.sbskys15', 'rct2.ww.sbskys11', 'rct2.ww.sbskys13', 'rct2.ww.waztec16', 'rct2.ww.waztec17', 'rct2.ww.waztec18', 'rct2.ww.waztec19', 'rct2.ww.waztec02', 'rct2.ww.waztec01', 'rct2.ww.waztec15', 'rct2.ww.rtudor01', 'rct2.ww.rtudor02', 'rct2.ww.rtudor03', 'rct2.ww.rwdaub03', 'rct2.ww.rwdaub02', 'rct2.ww.rwdaub01', 'official.xxbbbr01', 'rct2.brbase', 'rct2.brbase3', 'rct2.brbase2', 'rct2.sktbase', 'rct2.sktbaset', 'rct2.chbbase', 'rct2.corroof2', 'rct2.cwbcrv33', 'rct2.cwfcrv33', 'rct2.ww.tjblock3', 'rct2.ww.tjblock1', 'rct2.ww.tjblock2', 'rct2.stbase', 'rct2.stlbaset', 'rct2.terb', 'rct2.wdbase'];

const breakableLargeRoofsIden = ['rct2.ww.bamborf2', 'rct2.ww.bamborf1', 'rct2.ww.bamborf3', 'rct2.tt.psntwl27', 'rct2.tt.psntwl28', 'rct2.tt.psntwl26', 'rct2.tt.oldnyk24', 'rct2.tt.oldnyk32', 'rct2.tt.oldnyk25', 'rct2.tt.oldnyk20', 'rct2.ww.mbskyr01', 'rct2.ww.rtudor05', 'rct2.ww.rtudor06'];

var prob = function (percent) {
    return (context.getRandom(0, 10000) < percent * 100 * globalProbScale);
}

var decadeAgeTiles = function () {
    for (var y = 0; y < map.size.y; y++) {
        for (var x = 0; x < map.size.x; x++) {
            var tile = map.getTile(x, y);
            //console.log(x+ ","+ y);
            // Iterate every element on the tile
            var tileOwned = true;
            for (var i = 0; i < tile.numElements; i++) {
                var element = tile.getElement(i);
                if (element.type == 'surface') {
                    if (element.ownership & 32) {
                        if (element.surfaceStyle == 0) {

                            if (prob(100 * ageGrassProbScale)) {
                                if (element.grassLength < 6) {
                                    element.grassLength = context.getRandom(element.grassLength + 1, 7);
                                } else {
                                    element.grassLength = 5
                                }
                            }
                            if (prob(30 * growShrubProbScale)) {
                                var sceneryAddArgs = {
                                    x: tile.x * 32,
                                    y: tile.y * 32,
                                    z: element.baseZ,
                                    direction: context.getRandom(0, 4),
                                    quadrant: context.getRandom(0, 4),
                                    object: bushesAndShrubsIndex[context.getRandom(0, bushesAndShrubsIndex.length)],
                                    primaryColour: 0,
                                    secondaryColour: 0
                                };
                                context.queryAction("smallsceneryplace", sceneryAddArgs, function (queryResult) {
                                    if (queryResult.error == 0)
                                        context.executeAction("smallsceneryplace", sceneryAddArgs, function () {});
                                });
                            }
                            if (prob(50 * killGrassProbScale)) {
                                element.surfaceStyle = 6;
                            }
                        } else if (element.surfaceStyle == 6) {
                            if (prob(30 * growShrubProbScale)) {
                                var sceneryAddArgs = {
                                    x: tile.x * 32,
                                    y: tile.y * 32,
                                    z: element.baseZ,
                                    direction: context.getRandom(0, 4),
                                    quadrant: context.getRandom(0, 4),
                                    object: bushesAndShrubsIndex[context.getRandom(0, bushesAndShrubsIndex.length)],
                                    primaryColour: 0,
                                    secondaryColour: 0
                                };
                                context.queryAction("smallsceneryplace", sceneryAddArgs, function (queryResult) {
                                    if (queryResult.error == 0)
                                        context.executeAction("smallsceneryplace", sceneryAddArgs, function () {});
                                });
                            }
                        }

                    } else if (element.ownership & 16) {}
                    else {
                        tileOwned = false;
                    }
                    break; //surface found go to next element type
                }
            }

            if (!tileOwned) {
                continue; //tile not applicable go to next tile
            }
            for (var i = 0; i < tile.numElements; i++) {
                var element = tile.getElement(i);
                //destroy Tracks
                if (element.type == 'track') {
                    if (element.sequence == 0) {
                        var currentRide = map.getRide(element.ride);
                        if (currentRide.classification == 'ride') {
                            if (currentRide.object.carsPerFlatRide == 255) {
                                if (prob(40 * breakTrackProbScale)) {
                                    var trackremoveargs = {
                                        trackType: element.trackType,
                                        sequence: element.sequence,
                                        x: tile.x * 32,
                                        y: tile.y * 32,
                                        z: element.baseZ,
                                        direction: element.direction
                                    };

                                    context.queryAction("trackremove", trackremoveargs, function (queryResult) {
                                        if (queryResult.error == 0) {
                                            context.executeAction("trackremove", trackremoveargs, function () {});
                                            i--; //element removed decrement index
                                        }
                                    });
                                }
                            } else {
                                currentRide.lifecycleFlags |= (1 << 7);

                            }

                        }
                    }
                }

                if (element.type == 'footpath') {
                    if (prob(50 * trashPathProbScale)) {
                        element.isAdditionBroken = true;
                    }
                }

                //console.log("here");
                if (element.type == 'small_scenery') {
                    if (element.age < 128) {
                        element.age = context.getRandom(element.age + 10, 128);
                    }
                    if (prob(30 * killTreeProbScale)) {
                        if (deadTrees89Index.length > 0 && kT89Index.length > 0) {
                            if (kT89Index.indexOf(element.object) != -1) {
                                element.object = deadTrees89Index[context.getRandom(0, deadTrees89Index.length)];
                            }
                        }
                        if (deadTrees67Index.length > 0 && kT67Index.length > 0) {
                            if (kT67Index.indexOf(element.object) != -1) {
                                element.object = deadTrees67Index[context.getRandom(0, deadTrees67Index.length)];
                            }
                        }
                    }

                }

            }

            for (var d = 0; d < maxDPT; d++) {
                var tallestScenery = -1;
                var surfaceIndex = -1;
                for (var i = 0; i < tile.numElements; i++) {
                    var element = tile.getElement(i);

                    if (element.type == 'surface') {
                        surfaceIndex = i;
                    } else if (element.type == 'footpath' || element.type == 'wall') {
                        if (tallestScenery == -1) {
                            tallestScenery = i;
                        } else if (element.clearanceHeight > tile.getElement(tallestScenery).clearanceHeight) {
                            tallestScenery = i;
                        }
                    } else if (element.type == 'small_scenery') {
                        if (sBWaFIndex.length > 0) {
                            if (sBWaFIndex.indexOf(element.object) != -1) {
                                if (tallestScenery == -1) {
                                    tallestScenery = i;
                                } else if (element.clearanceHeight > tile.getElement(tallestScenery).clearanceHeight) {
                                    tallestScenery = i;
                                }
                            }
                        }
                    } else if (element.type == 'large_scenery') {
                        if (lBWaFIndex.length > 0) {
                            if (lBWaFIndex.indexOf(element.object) != -1) {
                                if (tallestScenery == -1) {
                                    tallestScenery = i;
                                } else if (element.clearanceHeight > tile.getElement(tallestScenery).clearanceHeight) {
                                    tallestScenery = i;
                                }
                            }
                        }
                    }
                }

                if (tallestScenery != -1) {
                    tallestElement = tile.getElement(tallestScenery);
                    if (surfaceIndex != -1) {
                        if (tallestElement.baseZ >= tile.getElement(surfaceIndex).baseZ) {
                            if (prob(25 * destroyStructProbScale)) {
                                if (tallestElement.type == 'small_scenery') {
                                    var ssrArgs = {
                                        x: tile.x * 32,
                                        y: tile.y * 32,
                                        z: tallestElement.baseZ,
                                        direction: tallestElement.direction,
                                        quadrant: tallestElement.quadrant,
                                        object: tallestElement.object
                                    };
                                    context.queryAction("smallsceneryremove", ssrArgs, function (queryResult) {
                                        if (queryResult.error == 0)
                                            context.executeAction("smallsceneryremove", ssrArgs, function () {});
                                    });
                                } else if (tallestElement.type == 'large_scenery') {
                                    var lsrArgs = {
                                        x: tile.x * 32,
                                        y: tile.y * 32,
                                        z: tallestElement.baseZ,
                                        direction: tallestElement.direction,
                                        tileIndex: tallestElement.sequence
                                    };
                                    context.queryAction("largesceneryremove", lsrArgs, function (queryResult) {
                                        if (queryResult.error == 0)
                                            context.executeAction("largesceneryremove", lsrArgs, function () {});
                                    });
                                } else if (tallestElement.type == 'wall') {
                                    var wrArgs = {
                                        x: tile.x * 32,
                                        y: tile.y * 32,
                                        z: tallestElement.baseZ,
                                        direction: tallestElement.direction
                                    };
                                    context.queryAction("wallremove", wrArgs, function (queryResult) {
                                        if (queryResult.error == 0)
                                            context.executeAction("wallremove", wrArgs, function () {});
                                    });
                                } else if (tallestElement.type == 'footpath') {
                                    var fprArgs = {
                                        x: tile.x * 32,
                                        y: tile.y * 32,
                                        z: tallestElement.baseZ,
                                    };
                                    context.queryAction("footpathremove", fprArgs, function (queryResult) {
                                        if (queryResult.error == 0)
                                            context.executeAction("footpathremove", fprArgs, function () {});
                                    });
                                }

                            } else {
                                break;
                            }
                        } else {
                            break;
                        }
                    }
                } else {
                    break;
                }
            }
        }

    }
}

var hardCloseAllRides = function () {
    var ride = 0;
    var ridesFound = 0;
    var currentRide;
    while (ridesFound < map.numRides) {
        if (currentRide = map.getRide(ride)) {
            //console.log(currentRide.name);
            currentRide.lifecycleFlags &= ~(1 << 7);
            var rideargs = {
                ride: currentRide.id,
                status: 0
            };
            context.executeAction("ridesetstatus", rideargs, function () {});
            context.executeAction("ridesetstatus", rideargs, function () {});

            ridesFound++;
        }
        ride++;
    }
}

var ageAllRides = function () {
    var ride = 0;
    var ridesFound = 0;
    var currentRide;
    while (ridesFound < map.numRides) {
        if (currentRide = map.getRide(ride)) {
            currentRide.buildDate -= 120;
            ridesFound++;
        }
        ride++;
    }
}

var removeAllPeeps = function () {
    var peeps = map.getAllEntities("peep");
    if (peeps.length > 0) {
        for (var i = 0; i < peeps.length; i++)
            peeps[i].remove();
        //map.getAllEntities("peep")[0].remove();
    }
}

var getSceneryIndex = function () {
    var smallsceneryobjects = context.getAllObjects('small_scenery');
    var largesceneryobjects = context.getAllObjects('large_scenery');

    bushesAndShrubsIndex = [];
    kT89Index = [];
    kT67Index = [];
    sBWaFIndex = [];
    lBWaFIndex = [];
    deadTrees89Index = [];
    deadTrees67Index = [];

    for (var i = 0; i < smallsceneryobjects.length; i++) {
        //console.log(smallsceneryobjects[i].name);
        if (bushAndShrubIdents.indexOf(smallsceneryobjects[i].identifier) >= 0) {
            bushesAndShrubsIndex.push(smallsceneryobjects[i].index);
        } else if (killableTreesC8C9Iden.indexOf(smallsceneryobjects[i].identifier) >= 0) {
            kT89Index.push(smallsceneryobjects[i].index);
        } else if (killableTreesC6C7Iden.indexOf(smallsceneryobjects[i].identifier) >= 0) {
            kT67Index.push(smallsceneryobjects[i].index);
        } else if (breakableSmallWallsIden.indexOf(smallsceneryobjects[i].identifier) >= 0) {
            sBWaFIndex.push(smallsceneryobjects[i].index);
        } else if (breakableSmallRoofsIden.indexOf(smallsceneryobjects[i].identifier) >= 0) {
            sBWaFIndex.push(smallsceneryobjects[i].index);
        } else if (deadTrees89Idents.indexOf(smallsceneryobjects[i].identifier) >= 0) {
            deadTrees89Index.push(smallsceneryobjects[i].index);
        } else if (deadTrees67Idents.indexOf(smallsceneryobjects[i].identifier) >= 0) {
            deadTrees67Index.push(smallsceneryobjects[i].index);
        }

    }

    for (var i = 0; i < largesceneryobjects.length; i++) {
        if (breakableLargeWallsIden.indexOf(largesceneryobjects[i].identifier) >= 0) {
            lBWaFIndex.push(largesceneryobjects[i].index);
        }
        if (breakableLargeRoofsIden.indexOf(largesceneryobjects[i].identifier) >= 0) {
            lBWaFIndex.push(largesceneryobjects[i].index);
        }
    }
    //console.log(bushesAndShrubsIndex[0]);
}

//Currently not working
var fadePaint = function () {
    var ride = 0;
    var ridesFound = 0;
    var currentRide;
    while (ridesFound < map.numRides) {
        if (currentRide = map.getRide(ride)) {
            currentRide.colourSchemes[0].main = 1;
            currentRide.colourSchemes[0].additional = 24;
            currentRide.colourSchemes[0].supports = 22;
            ridesFound++;
        }
        ride++;
    }
}

var main = function () {
    // Add a menu item under the map icon on the top toolbar
    ui.registerMenuItem("Abandon Park", function () {
        var defaultMoneyMode = park.getFlag("noMoney");
        park.setFlag("noMoney", true);
        hardCloseAllRides();
        fadePaint();
        removeAllPeeps();
        getSceneryIndex();
        for (var iter = 0; iter < iterations; iter++) {
            ageAllRides();
            decadeAgeTiles();
        }
        park.setFlag("noMoney", defaultMoneyMode);
    });
};

registerPlugin({
    name: 'Abandon Park',
    version: '1.0',
    authors: ['WantDiscussion'],
    type: 'remote',
    licence: 'GPL-3.0',
    main: main
});
