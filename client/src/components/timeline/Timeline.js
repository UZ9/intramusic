import musicalScaleColors from "musical-scale-colors";
import * as pixi from "pixi.js";

function timeline() {
    const colors = {
        blackKey: 0x000000,
        whiteKey: 0xffffff,
        blackGridBg: 0x1e1e1e,
        whiteGridBg: 0x282828,
    };

    let opt = {
        width: 1800,
        height: 400,
        pianoKeyWidth: 125,
        noteColor: musicalScaleColors.dDJameson,
        gridLineColor: 0x4d4d4d,
        blackGridBgColor: colors.blackGridBg,
        whiteGridBgColor: colors.whiteGridBg,
        bpm: 120,
        activateKeys: true,
        antialias: true,
        zoom: 8,
        resolution: 4,
        tickAmount: 9,
        time: 0,
        noteFormat: "String",
        noteData: [],
    };

    let lastTime,
        noteContainer,
        barWidth,
        gridLineWidth,
        gridLineSpacing,
        playing = false,
        stage = new pixi.Container(),
        rollContainer = new pixi.Container(),
        gridlineContainers = {
            main: new pixi.Container(),
        },
        renderer = new pixi.Renderer(opt.width, opt.height, {
            antialias: opt.antialias,
            autoResize: true,
        });

    renderer.resize(opt.width, opt.height);

    function createRhythmMark(time) {
        console.log("Adding at " + time);

        let offset = getFirstVerticalGridLineX(
            noteContainer ? noteContainer.x : transportTimeToX(opt.time)
        );

        var square = new pixi.Graphics();
        square.beginFill(0x00ff00);
        square.drawRect(0, 0, 2, 16);
        square.endFill();
        square.x = offset + time * 12;
        square.y = 100;
        square.interactive = true;
        square.dragging = false;
        square.pivot.x = 1;
        square.pivot.y = 1;

        gridlineContainers.vertical.addChild(square);

        square.on("mousedown", function (e) {
            square.x = e.data.global.x;
            // square.y = e.data.global.y;
            square.dragging = true;
        });

        square.on("mousemove", function (e) {
            if (square.dragging) {
                square.x = e.data.global.x;
                // square.y = e.data.global.y;
            }
        });

        square.on("mouseup", function (e) {
            square.x = e.data.global.x;
            square.dragging = false;
        });

        square.on("mouseupoutside", function (e) {
            square.x = e.data.global.x;
            square.dragging = false;
        });
    }

    function transportTimeToX(transportTime, isNote) {
        if (transportTime === undefined) return 0;

        return (transportTime / (opt.bpm / 60)) * barWidth;
    }

    function getFirstVerticalGridLineX(transportX) {
        let x = transportX;

        while (x + gridLineSpacing < opt.pianoKeyWidth) {
            x += gridLineSpacing;
        }

        return x;
    }

    function drawGridlines(type) {
        let i;

        if (!type || type === "vertical") {
            let offset = getFirstVerticalGridLineX(
                noteContainer ? noteContainer.x : transportTimeToX(opt.time)
            );

            gridlineContainers.main.removeChild(gridlineContainers.vertical);
            gridlineContainers.vertical = new pixi.Container();

            //opt.zoom * opt.resolution *
            for (i = 0; i < (opt.tickAmount + 1) * 20; i++) {
                let line = new pixi.Graphics()
                    .beginFill(opt.gridLineColor)
                    .drawRect(
                        0,
                        0,
                        gridLineWidth,
                        i % 10 === 0 ? opt.height / 20 : opt.height / 50
                    )
                    .endFill();

                if (i % 5 === 0) {
                    // createRhythmMark(i);
                }

                line.x = offset + i * 12;
                line.y = 60;

                if (i % 10 === 0) {
                    let text = new pixi.Text("00:00:" + i, {
                        fontFamily: "Inter",
                        fontSize: 16,
                        fill: 0x6d6d6d,
                        align: "center",
                    });

                    text.anchor.set(0.5, 0);
                    text.position.set(line.x, 20);

                    gridlineContainers.vertical.addChild(text);
                } else {
                    line.y = line.y + 12;
                }

                gridlineContainers.vertical.addChild(line);
            }

            gridlineContainers.main.addChild(gridlineContainers.vertical);
        }

        rollContainer.addChild(gridlineContainers.main);
    }

    function updateLoop(frameTime) {
        if (!lastTime) {
            lastTime = frameTime;
        }

        console.log("Render");

        lastTime = frameTime;

        renderer.render(stage);

        playing ? requestAnimationFrame(updateLoop) : (lastTime = null);
    }

    function calculate() {
        barWidth = (opt.width - opt.pianoKeyWidth) / opt.zoom;
        gridLineWidth = barWidth / 100;
        gridLineSpacing = barWidth / opt.resolution;
    }

    (function init() {
        stage.addChild(rollContainer);
        calculate();
        drawGridlines();
        renderer.backgroundColor = opt.blackGridBgColor;
        renderer.render(stage);

        playing = true;
        requestAnimationFrame(updateLoop);
    })();

    let pianoRollAPI = {
        playback: {
            toggle(time) {
                playing
                    ? pianoRollAPI.playback.pause()
                    : pianoRollAPI.playback.play(time);
            },

            play(time) {
                if (!playing) {
                    if (time) {
                        pianoRollAPI.playback.seek(time);
                    }

                    playing = true;
                    // requestAnimationFrame(animate);
                }
            },

            pause() {
                playing = false;
            },

            seek(time) {
                opt.time = time;

                noteContainer.x = transportTimeToX(time);
                drawGridlines("vertical");
                rollContainer.addChild(
                    rollContainer.removeChild(noteContainer)
                );
                renderer.render(stage);
            },

            addRhythmMark(time) {
                createRhythmMark(time)
            },
        },

        

        set bpm(bpm) {
            opt.bpm = bpm;
            calculate();
        },

        set zoom(zoom) {
            opt.zoom = zoom;
            calculate();
            drawGridlines();
            renderer.render(stage);
        },

        set resolution(resolution) {
            opt.resolution = resolution;
            calculate();
            drawGridlines("vertical");
            rollContainer.addChild(rollContainer.removeChild(noteContainer));
            renderer.render(stage);
        },

        set noteData(noteData) {
            opt.noteData = noteData;
            calculate();
            drawGridlines("horizontal");
            renderer.render(stage);
        },

        get playing() {
            return playing;
        },

        get view() {
            return renderer.view;
        },
    };

    return pianoRollAPI;
}

export default timeline;
