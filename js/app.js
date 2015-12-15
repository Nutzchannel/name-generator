function genSur() {
    surnames = [];
    var pickIt = Math.floor(Math.random() * surnames.length);
    return surnames[pickIt];
}

function genMale(final) {
    maleNames = [];
    surname = genSur();
    var pickIt = Math.floor(Math.random() * maleNames.length);
    if (final) {
        document.getElementById('result').innerHTML = maleNames[pickIt] + " " + surname + " <small>&#9794;</small>";
    } else {
        return maleNames[pickIt] + " " + surname + " (male)";
    }
}

function genFemale(final) {
    femaleNames = [];
    surname = genSur();
    var pickIt = Math.floor(Math.random() * femaleNames.length);
    if (final) {
        document.getElementById('result').innerHTML = femaleNames[pickIt] + " " + surname + " <small>&#9792;</small>";
    } else {
        return femaleNames[pickIt] + " " + surname + " (female)";
    }
}

function doesntMatter() {
    var newGen = Math.floor((Math.random() * 2) + 1);
    if (newGen === 1) {
        genMale(true);
    } else if (newGen === 2) {
        genFemale(true);
    } else {
        document.getElementById("result").innerHTML = "Sorry, something went wrong. <a href='https://github.com/Nutzchannel/name-generator/issues/new'>yell at me</a>";
    }
}
