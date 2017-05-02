function getUserDataInput() {
    let submit = $('#submitBtn');

    let equip = {};
    let disable = true;

    let cb = $('#cBox');

    createCompanyFieldSet();
    let compFS = $('#companyFs');

    cb.on('click', () => {
        compFS.toggle();
    });

    function createCompanyFieldSet() {
        let compFS = $('#companyInfo')
            .attr({id: "companyFs"})
            .append($('<legend>').text('Company Information'))
            .css('display', 'none');

        let companyInput = $('<input>')
            .attr({id: "companyNumber", type: "text"});
        let companyInputLabel = $('<label>')
            .text('Company Number:');

        $('#companyInfo').append(compFS
            .append(companyInputLabel)
            .append(companyInput));
    }

    let inputFields = [$('#username'), $('#email'), $('#password'), $('#repPassword')];
    lostOfFocus(inputFields);

    inputFields.forEach(x => equip[x.attr('id')] = false);

        function lostOfFocus(elements) {
        elements.forEach((element) => {
            element.on({
                'input': () => {
                    let elem = element.val();
                    let elemRegex = /[a-zA-Z]+/g; //default value

                    switch (element.attr('id')) {
                        case 'username':
                            elemRegex = /^[a-zA-Z0-9]{3,10}$/g;
                            break;
                        case 'email':
                            elemRegex = /^([\w]+@[\w]+\.[a-z]+)$/g;
                            break;
                        case 'password':
                        case 'repPassword':
                            elemRegex = /^[a-zA-Z0-9]{3,10}$/g;
                            break;
                    }
                    //console.log("*" + element.attr('id') + "*");
                    //console.log(elemRegex);

                    check(elem, elemRegex, element);
                }
            });
        });

        function check(string, regex, el) {
            if (inputFields[2].val() != inputFields[3].val() &&
                inputFields[2].val() != '' && inputFields[3].val() != '' ) {
                equip[inputFields[2].attr('id')] = false;
                equip[inputFields[3].attr('id')] = false;
                inputFields[2].css('background-color', 'rgb(255, 100, 25)');
                inputFields[3].css('background-color', 'rgb(255, 100, 25) ');
            } else {
                equip[inputFields[2].attr('id')] = true;
                equip[inputFields[3].attr('id')] = true;
                inputFields[2].css('background-color', '');
                inputFields[3].css('background-color', '');
            }

            if (!string.match(regex) && string != '') {
                el.css('border', '3px solid red');
                equip[el.attr('id')] = false;
            } else {
                el.css('border', '');
                equip[el.attr('id')] = true;
            }
            //console.log(equip);

            //check for empty fields and matching regex
           /* inputFields.forEach( x => x.val() != '' ?
             Object.keys(equip).forEach((key) => {equip[key] ? submit.attr("disabled", false) : submit.attr("disabled", true);})
             : console.log(''));*/


            if (inputFields[0].val() != '' &&
                inputFields[1].val() != '' &&
                inputFields[2].val() != '' &&
                inputFields[3].val() != '') {
                if (equip["username"] && equip["email"] && equip["password"] && equip["repPassword"]) {
                    submit.attr("disabled", false);
                } else {
                    submit.attr("disabled", true);
                }
            }

        }
    };

    let result = $('#result');
    submit.click(() => {
        //result.empty();
        console.clear();
        //inputFields.forEach(x => result.append($('<p>').text(`${x.attr('id')} = '${x.val()}'`)));
        inputFields.forEach(x => console.log(`${x.attr('id')} = '${x.val()}'`));
        //fields that are not required
        if(cb.is(':checked') && $('#companyNumber').val() != '') {
            //result.append($('<p>').text(`${$('#companyNumber').attr('id')} = '${$('#companyNumber').val()}'`));
            console.log(`${$('#companyNumber').attr('id')} = '${$('#companyNumber').val()}'`);
        }
    });

}


