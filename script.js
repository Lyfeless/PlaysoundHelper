$(document).ready(function() {

    let module = `<div class="module">
        <div class="remove"><img id="xICON" src="https://static.thenounproject.com/png/114046-200.png" width="50px" height="auto"></div>

        <div class="moduleItems">
            <div class="title"><p style="margin: 0;">Sound Item</p></div>
            <div class="sliders">
                <ul>
                    <li>
                        <label for="volume">Volume</label><br>
                        <input type="range" min="1" max="100" value="100" class="slider" name="volume">
                        <output name="volume", class="sliderOutput">100</output>
                    </li>
                    <li>
                        <label for="pitch">Pitch</label><br>
                        <input type="range" min=".01" max="2" value="1" class="slider" name="pitch" step=.01>
                        <output name="pitch", class="sliderOutput">1</output>
                    </li>
                </ul>
            </div>

            <div class=dropdowns>
                <ul>
                    <li>
                        <select class="dropdown">
                            <option value="blank"></option>
                            <option value="test1">Test 1</option>
                            <option value="test2">Test 2</option>
                            <option value="test3">Test 3</option>
                            <option value="test4">Test 4</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </div>`

    

    $(document).on("click", ".module", function(){
        $(".module").addClass("collapse");

        $(this).removeClass("collapse");

    });

    $(".slider").on("input",function(){
        $(this).next(".sliderOutput").val($(this).val());
    });

    $(document).on("change", "select", function(){
        list = $(this).parent().parent();

        $(this).parent().nextAll().remove();

        $(list).append("<li><select class=\"dropdown\"></select></li>");
        addOption($(list).find(".dropdown").last(), "blank", "");
        addOption($(list).find(".dropdown").last(), "text1", "Text 1");
        addOption($(list).find(".dropdown").last(), "text2", "Text 2");
        addOption($(list).find(".dropdown").last(), "text3", "Text 3");
        addOption($(list).find(".dropdown").last(), "text4", "Text 4");

        var title = "minecraft:";

        $(this).closest("ul").find("li").each(function(){
            title += $(this).find("option:selected").text() + "/";
        });

        $(this).closest(".module").find(".title").text(title);
    });

    function addOption(dropdown, value, text)
    {
        $(dropdown).append("<option value=\"" + value + "\">" + text + "</option>");
    }

    $(".plus svg").click(function(){
        length = $(".module").length

        $(this).parent().parent();

        $(".module").addClass("collapse");

        $(".module:nth-child(" + length + ")").after(module)
    })

    $(document).on("click", ".remove", function(){
        if($(".module").length > 1)
        {
            $(this).parent().remove();
        }
    })
});