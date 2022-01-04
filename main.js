var cardarray=[
    {'name':'em11' ,'img':'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/woozy-1553631153.jpg?crop=0.352xw:0.626xh;0.325xw,0.187xh&resize=480:*', },
    {'name':'em2'  ,'img':'https://cdn.theatlantic.com/thumbor/CFen_FoUQUuz6dU5KRTwDRitH_4=/312x304:3688x3680/500x500/media/img/mt/2017/08/shutterstock_668917297/original.jpg', },
    {'name':'em3'  ,'img':'https://thumbs.dreamstime.com/b/untitled-happy-nerd-emoji-140301372.jpg',  },
    {'name':'em44' ,'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5UVRRSZyaDPkNDdSgdNhItW8yw0wmtrGE75602gS1SEnRfBmE&usqp=CAU', },
    {'name':'em55' ,'img':'https://i.pinimg.com/236x/d5/46/53/d54653b0f7b10d0f46f8b0a2cb1e2615.jpg', },
    {'name':'em6'  ,'img':'https://4.bp.blogspot.com/-ETVOCcGE5Wg/WJn9XUpnmYI/AAAAAAAAT98/MhucLHREH88aog0j3876qw783zHMT5pAwCLcB/s1600/rose-in-mouth-emoji.png',  },
    {'name':'em7'  ,'img':'https://icdn5.digitaltrends.com/image/digitaltrends/android-q-new-emojis-yawning-2-486x486.jpg',  },
    {'name':'em8'  ,'img':'https://www.emojirequest.com/images/SalutingEmoji.jpg',  },
    {'name':'em9'  ,'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFP0m87MNNLu-Xk3SFvaWwhw7kxKczOmFGCkMDIfTuJVw-rMVn&usqp=CAU',  },
    {'name':'em10' ,'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmlx7SGcxZBtkib10nVf2AzhHDPLUjvyhRV09s-xxFY7GED8fO&usqp=CAU', },
    {'name':'em11' ,'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfiVyW-wpk_8HimQZzPj8FboNrBGDiWqN5ZvpkNkgQJFc9nlni&usqp=CAU', },
    {'name':'em12' ,'img':'https://i.pinimg.com/236x/84/84/75/848475c3a66d01b9529a5d18d5d0099e.jpg', },
 ];
var gameGrid=cardarray.concat(cardarray);
gameGrid.sort(function()
{
    return 0.5-Math.random();
});
var game=document.getElementById('game-board');

var grid=document.createElement('section');
grid.setAttribute('class','grid');
game.appendChild(grid);

for(var i=0;i<gameGrid.length;i++)
{
    var card=document.createElement('div');
    card.classList.add('card');
    card.dataset.name=gameGrid[i].name;

    var front=document.createElement('div');
    front.classList.add('front');

    var back=document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage=`url(${gameGrid[i].img})`;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
}

var count=0;
var fg='';
var sg='';
var pcount=null;
var delay=1200;

var match=function(){
    var selected=document.querySelectorAll('.selected');
    for (var i=0; i<selected.length;i++)
    {
        selected[i].classList.add('match');
    }
}

var resetg=function()
{
    fg='';
    sg='';
    count=0;
    pcount=null;
    var selected=document.querySelectorAll('.selected');
    for(i=0;i<selected.length;i++)
    {
        selected[i].classList.remove('selected');
    }

}
grid.addEventListener('click',function(event)
{
    var clicked=event.target;
    if(clicked.nodeName==='section' || clicked===pcount || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected'))
    {
        return;
    }
    if(count<2)
    {
        count++;
        if(count===1)
        {
        fg=clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add('selected');
        }
        else
        {
            sg=clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        if(fg !=='' && sg !=='')
        {
            if(fg===sg)
            {
                setTimeout(match,delay);
                
                setTimeout(resetg,delay);
            }
            else
            {
                setTimeout(resetg,delay);
            }
        }
        pcount=clicked();
    }
   
});






