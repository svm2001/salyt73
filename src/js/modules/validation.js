let inputs = document.querySelectorAll('input[data-rules]');

for (let input of inputs) {
    input.addEventListener ('blur',  function() {
        let rules = this.dataset.rules;
        let value = this.value;
        let check;

        switch (rules) {
            case 'tel':
                check =  /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/.test(value);
                break;

            case 'email':
                break;

            case 'text':
                break;
        }

        if (check) {
            this.classList.remove('invalid');
            this.classList.add('valid');

        } else {
            this.classList.remove('valid');
            this.classList.add('invalid');
        }

    })}
