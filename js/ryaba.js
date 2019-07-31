const dataURL = "https://api.myjson.com/bins/jcmhn";
var finalStory = "";

function handleButton() {
    let inputs = {
        var1 : $("input[name=var1]")[0].value,
        var2 : $("input[name=var2]")[0].value,
        var3 : $("input[name=var3]")[0].value,
        var4 : $("input[name=var4]")[0].value,
        var5 : $("input[name=var5]")[0].value,
        var6 : $("input[name=var6]")[0].value,
        speach : $("input[name=speech]")[0].value
    }

    let storyToShow = finalStory;
    
    for (key in inputs) {
        reg = new RegExp("{" + key + "}", "g");
        storyToShow = storyToShow.replace(reg, inputs[key]);
    }

    $(".output").html(storyToShow);
}

function handleData(data) {
    
    let story = data["text"];
    
    for(i = 0; i < story.length; i++) {

        finalStory += story[i] + "<br>";
    }

    $(".output").html(finalStory);
}




function init() {
    $.getJSON(dataURL, handleData);
    $(".btn").click(handleButton);
}

$(document).ready(init);
