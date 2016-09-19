/**
 * Created by xuqiying on 16/9/11.
 */
$(function(){
    // 系统登出按钮
    $("#header").find("button").click(function(){
        $("#window").slideToggle(400);
    });

    // jquery-ui拖拽-源dom设置拖拽属性
    $(".draggable").draggable({
        helper:"clone",
        cursor: "move",
        revert: "true"
    });

    // jquery-ui拖拽-目标dom设置拖拽属性
    $("#screen").find("[id^='part']").droppable({
        //activeClass: "ui-state-hover",
        //hoverClass: "ui-state-active",
        drop:function(event,ui){
            // 清空当前容器
            $(this).children().remove();

            // 克隆到容器中
            var source = ui.draggable.clone();
            $(source).find(".edit").css("display","none");
            $(source).find(".heading").css({"width":"100%","height":"16%","background":"#444","color":"#fff","position":"absolute","top":"0"});
            $(source).find(".part").css({"width":"100%","height":"84%","position":"absolute","top":"16%"});
            $(source).css({"width":"100%","padding":"0","height":"100%","position":"relative"});
            $(source).find(".block").css("border","#fff");
            $(this).append(source);

            // 将容器的id放入隐藏域
            $(this).find("#target_name").attr("value", $(this).attr("id")); // 如:part_1_1
            
            // 修改name属性(SpringMVC里面BigScreenModel.List<BigScreenHandlebarsVo>.target_name接收需要name="vos[i].target_name")
            var target_name = "vos[" + $(this).attr("value") + "].target_name";
            var chart_path = "vos[" + $(this).attr("value") + "].chart_path";
            $(this).find("#chart_path").attr("name", chart_path);
            $(this).find("#target_name").attr("name", target_name);
        }
    });

    // 图表新增
    $("#chart_add").click(function() {
        alert("图表新增");
    });

    // 图表编辑
    $(".chart_edit").click(function() {
        var id = $(this).attr("value");
        alert(id);
    });

    // 图表删除
    $(".chart_delete").click(function() {
        if(!confirm("确定删除该条记录吗？")){
            return false;
        }
        var id = $(this).attr("value");
        alert(id);
    });
})