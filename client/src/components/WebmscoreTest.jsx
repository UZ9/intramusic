
import WebMscore from "webmscore";
WebMscore.ready.then(async () => {
    const filedata = fetch

    const score = await WebMscore.load("mscz", msczdata);

    score.savePdf().then(s => {
    })
});

export default function WebmscoreTest(props) {}
