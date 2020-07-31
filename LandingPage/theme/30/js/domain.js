var domain001 = "116qp444";
var domain002 = "116qp555";
var domain003 = "116qp666";

var domain01 = "https://www."+ domain001+ ".com/#/?shareName=" + domain001 + ".com";
var domain02 = "https://www."+ domain002+ ".com/#/?shareName=" + domain002 + ".com";
var domain03 = "https://www."+ domain003 +".com/#/?shareName="+ domain003 +".com";

document.writeln("<ul>");

document.writeln("<li>");
document.writeln("<div class='grayBox'><span><b id='num1'>36</b>ms</span>");
document.writeln("<p><a target='_blank' href='" +  domain01 +"'>www.<span>"+ domain001 +"</span>.com</a></p>");
document.writeln("</div>");
document.writeln("<a target='_blank' href='"+ domain01 +"'>点击进入</a></li>");

document.writeln("<li>");
document.writeln("<div class='grayBox'><span><b id='num2'>36</b>ms</span>");
document.writeln("<p><a target='_blank' href='" +  domain02 +"'>www.<span>"+ domain002 +"</span>.com</a></p>");
document.writeln("</div>");
document.writeln("<a target='_blank' href='"+ domain02 +"'>点击进入</a></li>");

document.writeln("<li>");
document.writeln("<div class='grayBox'><span><b id='num3'>36</b>ms</span>");
document.writeln("<p><a target='_blank' href='" +  domain03 +"'>www.<span>"+ domain003 +"</span>.com</a></p>");
document.writeln("</div>");
document.writeln("<a target='_blank' href='"+ domain03 +"'>点击进入</a></li>");

document.writeln("</ul>");