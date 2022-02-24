(function($,window){
    console.log($);

    var krispy = {
        init: function(){
            this.header();
            this.section1();
            this.section2Left();
            this.section2Center();
            this.section2Right();
            this.section3();
            this.footer();
        },
        header: function(){
            
        $('.main-nav').on({
            mouseenter: function(){
                $('.sub-menu').stop().slideUp(0);
                $('.sub-menu').stop().slideDown(300);
            }
        });

        $('#header').on({
            mouseleave: function(){
                $('.sub-menu').stop().slideUp(600);
            }
        });
           
        },
        section1: function(){  
            var cnt=0;
            var setId = null;

            /* 메인슬라이드 함수 */
            function mainSlide(){
                $('.slide').stop().animate({top:-550*cnt,},600,function(){
                    if(cnt>10){cnt=0}
                    if(cnt<0){cnt=10}
                    $('.slide').stop().animate({top:-550*cnt,},0);

                    /* 슬라이드 애니메이션 추가 */
                    $('.slide-contents').eq(cnt+1).addClass('addMove');
                   
                });

                pageEvent();
                
            }

            

            function nextCount(){
                cnt++;
                mainSlide();
            }

            function autoTimer(){
                setId=setInterval(nextCount,5000);
            }
            autoTimer();

         /* 페이지버튼 이벤트 */   
            function pageEvent(){
                $('.btn').children().attr('src','./img/img_mainvis_off.png');
                $('.btn').eq(cnt-1==11?0:cnt-1).children().attr('src','./img/img_mainvis_on.png');

                $('.btn-on').children().attr('src','./img/img_mainvis_off.png');
                $('.btn-on').eq(cnt==11?0:cnt).children().attr('src','./img/img_mainvis_on.png');

            }

            $('.btn').each(function(index){
                $(this).on({
                    click:function(e){
                        e.preventDefault();
                        cnt= index+1;
                        mainSlide();
                        stopFn();
                        playFn();
                    }
                });
            });

/////////////////////////////////////////////////////////////////////////////
            /* 자동실행, 정지 이벤트 */

            function stopFn(){
                $('.play-btn').children().attr('src','./img/img_mainvis_play_off.png');
                $('.stop-btn').children().attr('src','./img/img_mainvis_stop_on.png');
                clearInterval(setId);
        
            }

            function playFn(){
                $('.stop-btn').children().attr('src','./img/img_mainvis_stop_off.png');
                $('.play-btn').children().attr('src','./img/img_mainvis_play_on.png');
                autoTimer();
            }

            
            

            $('.play-btn').on({
                click:function(e){
                    e.preventDefault();
                    playFn();
                    
                }
            });

            $('.stop-btn').on({
                click:function(e){
                    e.preventDefault();
                    stopFn();
                }
            });

        },
        section2Left: function(){
            /* section2-left 페이지버튼 */
            
            $('.page-btn').on({
                click: function(e){
                    e.preventDefault();
                    $('.bottom, .page-btn, .page-btn-first').addClass('addGreen');
                }
            });

            $('.page-btn-first').on({
                click: function(e){
                    e.preventDefault();
                    $('.bottom, .page-btn, .page-btn-first').removeClass('addGreen');
                }
            });

        
        },
        section2Center :function(){
            var cnt=0;
            function mainSlide(){
                $('.slideScreen').stop().animate({top:-110*cnt},0);
                pageEvent();
            }
            
            function pageEvent(){
                $('.pg-btn').removeClass('addColor');
                $('.pg-btn').eq(cnt>5?0:cnt).addClass('addColor');
            }
            
            
            $('.pg-btn').each(function(index){
                $(this).on({
                    click:function(e){
                        e.preventDefault();
                        cnt=index;
                        mainSlide();
                    }
                });
            });
            
        },
        section2Right :function(){
            var cnt=0;
            function mainSlide(){
                $('.slide-view').stop().animate({top:-90*cnt},0);
                pageEvent();
            }
            
            function pageEvent(){
                $('.page-button').removeClass('addBtn');
                $('.page-button').eq(cnt>4?0:cnt).addClass('addBtn');
            }
            
            
            $('.page-button').each(function(index){
                $(this).on({
                    click:function(e){
                        e.preventDefault();
                        cnt=index;
                        mainSlide();
                    }
                });
            });
        },
        section3: function(){

        },
        footer: function(){

            $('.world-btn').on({
                click : function(e){
                    e.preventDefault();
                    $('#section4').stop().slideDown(300).addClass('addSlidedown');
                }
            });

            $('.close-btn').on({
                click : function(e){
                    e.preventDefault();
                    $('#section4').stop().slideUp(300).removeClass('addSlidedown');
                }
            });
        },
        
    }

    krispy.init();
})(jQuery,window);