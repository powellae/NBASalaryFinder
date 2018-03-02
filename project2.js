var teamXML;
var filePath = "/class/softdev/powellae/Project2/";

function getXML(document) {
	teamXML = document;
	//lookup();
}

function lookup(teamName){
	console.log("called");
	$("#content").empty();	
	//var teamName = $('#team').val().toUpperCase();
	var year = $('#year').val();
	var k = 1;
	console.log(teamName);
	console.log(year);
	var totalSalary = 0;
	
	$("#content").append("<br> <br> <br> <br> <table class='TableID' id='TableID' cellpadding='200' cellspacing='200'>");
	$("#content").append("<thead> <tr> <th>#</th> <th>Player</th> <th>Salary</th> </tr> </thead>");
	$(teamXML).find("FIELD5").each(function(){
			//console.log($(this).text());
			//var line = $(this).text();
			//$("#content").append(line+"<br>");
			var yr = $(this).parent().find("FIELD3").text();
			
			if($(this).text() == teamName && yr == year) {
				//console.log(teamName+":"+$(this).parent().find("FIELD1").text());
				var name = $(this).parent().find("FIELD1").text();
				var salary = $(this).parent().find("FIELD2").text();
				totalSalary += parseInt(salary);
				
				$("#content").append("<tbody> <tr class = 'row-"+k+"'> <td>" + k + "</td> <td class = 'name-col'>" + name + "</td> <td class = 'salary'> $" + salary + "<td> </tr> </tbody>");
				k = k + 1;
			}

			});
	$("#content").append("</table>");
	
	var table = document.getElementsByClassName("name-col");
	console.log(totalSalary);
	table.onclick = function() {
		var display = table.text();
		alert(display);
		console.log(display);
	};
}

function buildMenu(){
		var menuItems = "";
		$(teamXML).find("FIELD5").each(function(){
			var title = $(this).find("FIELD5").text();
			menuItems += "<li><a href=#>"+title+"</a></li>";
		});
		console.log(menuItems);
		$(".dropdown-menu li a").click(function(){
			console.log("pick!"+$(this).text());
			$(this).parents(".btn-group").find('.selection').text($(this).text());
			lookup($(this).text());
		});
}

$(document).ready(function () {
	$.ajax({
		url: filePath+"project2.xml",
		dataType: 'xml',
		success: getXML,
		
		error: function(){alert("Error: Something Went Terribly Wrong");}
	});
})

function setup(){
	if(window.XMLHttpRequest) {
		//code for modern browsers
		xmlhttp = new XMLHttpRequest();
	} else {
		//code for old IE browsers
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
	}
}


/*function lookup(){
	console.log("called");
	$("#content").empty();	
	var teamName = $('#team').val().toUpperCase();
	console.log(teamName);
	
	var players_found = 0;
	var stats = {};
	$.when($.ajax({
		url: "project2.xml",
		dataType: "xml",
		success: function parseXml(xml){
			$(xml).find("FIELD4").each(function(){
				if($(this) == teamName) {
					stats["Name"] = $(this).parent().find("FIELD1").text();
				}
			});
		}
	})).then(function(){
		for(var stat in stats){
			$("#content").append("<p class = player> "+stat+" <span> "+stat[stat]+"</span></p>");
		}
	});
}*/

/*
$(document).ready(function(){
	$.ajax({
		url: "project2.xml",
		dataType: "xml",
		success: getXML,
		error: function(){alert("Error: something went wrong.");}
	});
}) */