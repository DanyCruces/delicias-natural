"use strict";$(document).ready(function(){$(".box").click(function(a){$("section").addClass("filter-backdrop")}),$(".modal.fade").click(function(){$("section").removeClass("filter-backdrop")}),$(".button-box ul li").click(function(){console.log(this)}),Barba.Pjax.start(),Barba.Prefetch.init();var a=Barba.BaseTransition.extend({start:function(){Promise.all([this.newContainerLoading,this.fadeOut()]).then(this.fadeIn.bind(this))},fadeOut:function(){return $(this.oldContainer).animate({opacity:0}).promise()},fadeIn:function(){var a=this,t=$(this.newContainer);$(this.oldContainer).hide(),t.css({visibility:"visible",opacity:0}),t.animate({opacity:1},400,function(){a.done()})}});Barba.Pjax.getTransition=function(){return a};var t="3860040881",i="3860040881.a12c878.26faa4846d984563a59c9b23aa846447";$.getJSON({url:"https://api.instagram.com/v1/users/"+t+"/media/recent/?access_token="+i,type:"GET",crossDomain:!0,dataType:"jsonp",success:function(a){var t=(a.data[0].images.standard_resolution.url,a.data);t.forEach(function(a,t,i){var n=a.images.standard_resolution.url;$("section").append("<img src="+n+">"),console.log(n)})}})});