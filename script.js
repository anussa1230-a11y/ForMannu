/* =========================================
   RELATIONSHIP CARDS
========================================= */

function showRelationship(type) {

    const result = document.getElementById("relationshipResult");

    let message = "";

    if (type === "a movie") {

        message = `
            🎬 If our relationship were a movie...
            <br><br>
            it would be a romantic comedy where
            the girl is always late and the boy
            somehow keeps waiting for her.
            <br><br>
            <strong>Rating: 10/10. Would watch again.</strong>
        `;

    }

    if (type === "a food") {

        message = `
            🍝 If our relationship were a food...
            <br><br>
            it would be comfort food —
            warm, familiar, slightly chaotic,
            and something I could never get tired of.
            <br><br>
            <strong>Basically: my favourite.</strong>
        `;

    }

    if (type === "a place") {

        message = `
            🌙 If our relationship were a place...
            <br><br>
            it would be somewhere quiet,
            somewhere I could stay for hours,
            somewhere that feels like home.
            <br><br>
            <strong>Anywhere, as long as you're there.</strong>
        `;

    }

    if (type === "a song") {

        message = `
            🎵 If our relationship were a song...
            <br><br>
            you already know the answer.
            <br><br>
            <strong>Daylight. ☀️</strong>
            <br><br>
            Even though you don't listen to Taylor Swift.
            Too late. It's ours now.
        `;

    }

    result.innerHTML = message;

}


/* =========================================
   INSIDE JOKES
========================================= */

function insideJoke(number) {

    const result = document.getElementById("jokeResult");

    const jokes = {

        1: `
            "I'm almost there."
            <br><br>
            Translation:
            <strong>She has probably just started getting ready.</strong>
            😂
        `,

        2: `
            "You choose."
            <br><br>
            Translation:
            <strong>
                Mannu has somehow been given the
                responsibility of deciding what Anussa wants.
            </strong>
        `,

        3: `
            Forehead kisses.
            <br><br>
            Scientifically proven to make Anussa
            forget whatever she was complaining about.
            ♡
        `,

        4: `
            "One more thing..."
            <br><br>
            The sentence that has never once
            meant one thing.
            😭
        `

    };

    result.innerHTML = jokes[number];

}


/* =========================================
   SECRET FILES
========================================= */

function openSecret(number) {

    const box = document.getElementById("secretBox");
    const content = document.getElementById("secretContent");

    let message = "";

    if (number === 1) {

        message = `
            <span>SECRET FILE 01</span>

            <h3>
                The Real Reason
            </h3>

            <p>
                I could list a hundred reasons
                why I love you...
            </p>

            <p>
                but honestly?
            </p>

            <p>
                I love you because you're you.
            </p>

            <p>
                And somehow,
                you're exactly the person
                I want beside me.
            </p>
        `;

    }

    if (number === 2) {

        message = `
            <span>SECRET FILE 02</span>

            <h3>
                Classified Confession
            </h3>

            <p>
                Sometimes I look at you
                and have this tiny moment of:
            </p>

            <p>
                "Wait..."
            </p>

            <p>
                <strong>
                    "That's actually my boyfriend."
                </strong>
            </p>

            <p>
                And yes, I still get a little
                excited about that.
                ♡
            </p>
        `;

    }

    if (number === 3) {

        message = `
            <span>SECRET FILE 03</span>

            <h3>
                The Most Important File
            </h3>

            <p>
                Mannu,
            </p>

            <p>
                If you ever wonder whether
                I really love you...
            </p>

            <p>
                please come back to this page.
            </p>

            <p>
                Because the answer will always be:
            </p>

            <h3>
                yes. ♡
            </h3>

            <p>
                Very, very much.
            </p>
        `;

    }

    content.innerHTML = message;

    box.classList.add("show");

    box.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function closeSecret() {

    document
        .getElementById("secretBox")
        .classList.remove("show");

}


/* =========================================
   FINAL QUESTION
========================================= */

function yesAnswer() {

    const answer =
        document.getElementById("finalAnswer");

    answer.innerHTML = `
        <p>
            I knew it. 😌
        </p>

        <p>
            Good.
            Because you're stuck with me now. ♡
        </p>
    `;

    createHearts();

}


function obviouslyAnswer() {

    const answer =
        document.getElementById("finalAnswer");

    answer.innerHTML = `
        <p>
            Correct answer. 😌
        </p>

        <p>
            Come here. ♡
        </p>
    `;

    createHearts();

}


/* =========================================
   HEART ANIMATION
========================================= */

function createHearts() {

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("span");

        heart.innerHTML = "♡";

        heart.classList.add("burst-heart");

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDelay =
            Math.random() * 0.5 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 2500);

    }

}