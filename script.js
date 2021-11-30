var number;
var screenValue;
var operator;
var reset;
var commaPressed;
var equalToPressed;

function resetCalculator()
{
    number = "x";
    screenValue = "";
    operator;
    reset = false;
    commaPressed = false;
    equalToPressed = false;
}

document.addEventListener('DOMContentLoaded', function() 
{
    resetCalculator();

    document.querySelectorAll('button').forEach(function(button)
    {
        button.onclick = function()
        {
            // Check if a number is pressed
            if (button.dataset.number != undefined)
            {
                // Check if it's the first number pressed
                if (number == "x")
                {
                    number = button.dataset.number
                    equalToPressed = false;
                }
                else
                {
                    // Check if the comma is pressed, and if a comma is allowed
                    if (button.dataset.number != '.' || (button.dataset.number == '.' && commaPressed == false))
                    {
                        number = number + button.dataset.number
                    }
                }
                // Check if the equal button has been pressed before this buttom
                if (equalToPressed)
                {
                    number = button.dataset.number
                    screenValue = number;
                    equalToPressed = false;
                }
                else
                {
                    // Check if the comma is pressed, and if a comma is allowed
                    if (button.dataset.number != '.' || (button.dataset.number == '.' && commaPressed == false))
                    {
                        screenValue += button.dataset.number;
                    }
                    // If the comma is pressed and allowed, keep track of it
                    if (button.dataset.number == ".")
                    {
                        commaPressed = true
                    }
                }
                // Update the value on the screen
                document.querySelector('h1').innerHTML = screenValue;
            }
            else
            {
                // Check if an operator has been pressed
                if (button.dataset.operator != undefined && number != "x")
                {
                    equalToPressed = false;
                    commaPressed = false;
                    screenValue = screenValue + button.dataset.operator;

                    // Update the value on the screen
                    document.querySelector('h1').innerHTML = screenValue;

                    number = "x"
                }
                // Check if the equal to button has been pressed
                else if (button.dataset.equals != undefined && number != "x")
                {
                    equalToPressed = true;
                    screenValue = eval(screenValue)

                    // Update the value on the screen
                    document.querySelector('h1').innerHTML = screenValue;
                }
            }
        }
    });

    // Check if the reset button has been pressed
    document.querySelector('#reset').onclick = function() 
    {
        resetCalculator();
        document.querySelector('h1').innerHTML = ""
    }
});
