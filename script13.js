    function fizzBuzz(start, end) {
            var result = [];
            for (var i = start; i <= end; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    result.push('FizzBuzz');
                } else if (i % 3 === 0) {
                    result.push('Fizz');
                } else if (i % 5 === 0) {
                    result.push('Buzz');
                } else {
                    result.push(i.toString());
                }
            }
            return result;
        }

        function generateFizzBuzz() {
            var start = parseInt(document.getElementById('start').value);
            var end = parseInt(document.getElementById('end').value);

            if (isNaN(start) || isNaN(end) || start >= end) {
                alert('Please enter valid starting and ending numbers.');
                return;
            }

            var outputDiv = document.getElementById('output');
            outputDiv.innerHTML = ''; // Clear previous output

            var fizzBuzzArray = fizzBuzz(start, end);
            fizzBuzzArray.forEach(function(item) {
                var paragraph = document.createElement('p');
                paragraph.textContent = item;
                outputDiv.appendChild(paragraph);
            });
        }