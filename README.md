# Dice Roll 
### Dice Roll is a simple application for rolling dice for dice games. This app
becomes very handy when one is missing their the dice of their game. You don't 
have to reply on the actualy physical dice once you have this app. You can 
check out the app [here](https://ladeyekun.github.io/dice-roll)

## How to create the app
This app is developed using ```HTML```, ```Javascript``` and ```CSS```. The 
steps below show how to create this app.

### 1. Creating the HTML structure
Create an ```index.html``` file with the elements or container where 
the dice face will be inserted, and a button to roll the dice. 
For the dice face, font awesome was used. Here is the snippet 
for the dice face.

```html
    <span class="dice-one">
        <i class="fa-solid fa-dice-one"></i>
    </span>
```

### 2. Style the elements
Add ```assets/css/style.css``` file to styles to the elements 
and define the width and height of the container, font-size 
of the font awesome representing the dice face. More 
importantly, add the animation effect when rolling the 
dice. Here is a snippet of rolling effect used for this app

```css
.roll {
    animation: roll 1s linear infinite;
}

@keyframes roll {
    from {
        transform: rotateX(0deg) rotateY(0deg);
    }
    to {
        transform: rotateX(1440deg) rotateY(1440deg);
    }
}
```

### 3. Add Javascript file
Add ```assets/js/app.js``` file to implement the interaction of users 
with the elements on the app. Add an event listener to roll the 
dice when the button is clicked. When the button is clicked, a 
random number is selected between 1 and 6, and the font awesome 
html code is generated based on the number. A ```setTimeout``` 
function was used to add and remove the ```roll``` class 
thereby creating a rolling effecting before revealing the 
number on the dice.

```javascript
    function getFontAwesomeElement(dice) {
        let output = '';
        output += `<i class="fa-solid fa-dice-${getDiceFont(dice)}"></i>`;

        return output;
    }

    listen('click', rollBtn, () => {
        dice1Obj.classList.add('roll');
        dice2Obj.classList.add('roll');
        setTimeout(() => {
            dice1Obj.classList.remove('roll');
            dice2Obj.classList.remove('roll');
            roll();
        }, 2000);
        roll();
    });    
```

## Download the project

To download, install and use the Dice Roll app, follow these step-by-step 
instructions:

1. Clone the GitHub repository: Start by cloning the GitHub repository 
to your local machine using the command:

```jsx

git clone https://github.com/ladeyekun/dice-roll.git
```

2. Open the ```index.html``` on a web browser of your choice.

## Contact

Feel free to reach out to me on my email: lateef.adeyekun@gmail.com

## License

[![License](https://img.shields.io/static/v1?label=Licence&message=MIT&color=blue)](https://opensource.org/license/MIT)