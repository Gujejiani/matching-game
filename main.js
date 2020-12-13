var cardsArray = [
    {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
  ];

  var game = document.getElementById('game-board');
var gameGrid =cardsArray.concat(cardsArray)

gameGrid.sort(function(){
    return 0.5 - Math.random()
})

  var grid = document.createElement('section')
  grid.classList.add('grid')
  game.appendChild(grid)

  for(var i=0; i< gameGrid.length; i++){
      var card = document.createElement('div')


      card.classList.add('card')

      card.setAttribute('data-name', gameGrid[i].name)
     //front side
      var front = document.createElement('vid');
      front.classList.add('front')

      //back side
      var back = document.createElement('div');
      back.classList.add('back');
      back.style.backgroundImage=`url(${gameGrid[i].img})`

      grid.appendChild(card)
      card.appendChild(front);
      card.appendChild(back)
  }
var firstGuess=''
var secondGuess= ''
var count =0;
var previosTarget= null
var delay = 1200;
  
var match = function() {
    var selected = document.querySelectorAll('.selected');

    for (i = 0; i < selected.length; i++) {
      selected[i].classList.add('match');
    }
  };

var resetGuesses = function(){
    firstGuess='';
    secondGuess='';
    count=0;
    previosTarget=null
    var selected = document.querySelectorAll('.selected')
    for (i = 0; i < selected.length; i++) {
        selected[i].classList.remove('selected');
      }
}

  grid.addEventListener('click', function(event){
     
    var target = event.target;
    if(target.nodeName ==="SECTION" || target===previosTarget|| target.parentNode.classList.contains('match')){
        return {}
    }
    if(count < 2){
        count++;
        if(count ===1){
            firstGuess= target.parentNode.dataset.name;
            target.parentNode.classList.add('selected')
        }else{
            secondGuess=target.parentNode.dataset.name
            target.parentNode.classList.add('selected')
        }

        if(firstGuess !=='' && secondGuess !==''){
         
            if(firstGuess===secondGuess){
                
             setTimeout(match, delay)
                setTimeout(resetGuesses, delay);
            }else{
              setTimeout(resetGuesses, delay)
            }
        }
        previosTarget =target
    }
    
  })