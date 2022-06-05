/**
 *
 * @module myapp
 */
/** @namespace Namespace for SYSCHECK classes and functions*/

var SYSCHECK = SYSCHECK || {};

SYSCHECK.Person = class {

constructor(name, age) {

        this.name = name;
        this.age = age;
    }
    get Name() {
        return this.name;
    }
    get Age() {return this.age;}
    get fullInfo() {
        return "My name is " + this.name + "And I am " + this.age;

    }
}

SYSCHECK.dropbox = {
    drop_actions: () => {
        console.log("this function called")
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll('.file-droppable').forEach(function (droppable) {
                var originalText = droppable.querySelector('div').innerHTML;
                var input = droppable.querySelector('input');
                var fileChanged = function () {
                    var files = input.files;
                    if (files.length) {
                        droppable.querySelector('span').style.display = 'block';
                        droppable.querySelector('div').innerHTML = '';
                        for (var i = 0; i < files.length; i++) {
                            droppable.querySelector('div').innerHTML += files[i].name + '<br>';
                        }
                        droppable.classList.add('filled');
                    } else {
                        droppable.querySelector('div').innerHTML = originalText;
                        droppable.classList.remove('filled');
                        droppable.querySelector('span').style.display = 'none';
                    }
                };
                input.addEventListener('change', fileChanged);
                fileChanged(input);
                droppable.querySelector('span').addEventListener('click', function () {
                    input.value = '';
                    fileChanged(input);
                });
            });
        });
    },
}


SYSCHECK.dropbox = {
    drop_actions: () => {
        console.log("this function called")
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll('.file-droppable').forEach(function (droppable) {
                var originalText = droppable.querySelector('div').innerHTML;
                var input = droppable.querySelector('input');
                var fileChanged = function () {
                    var files = input.files;
                    if (files.length) {
                        droppable.querySelector('span').style.display = 'block';
                        droppable.querySelector('div').innerHTML = '';
                        for (var i = 0; i < files.length; i++) {
                            droppable.querySelector('div').innerHTML += files[i].name + '<br>';
                        }
                        droppable.classList.add('filled');
                    } else {
                        droppable.querySelector('div').innerHTML = originalText;
                        droppable.classList.remove('filled');
                        droppable.querySelector('span').style.display = 'none';
                    }
                };
                input.addEventListener('change', fileChanged);
                fileChanged(input);
                droppable.querySelector('span').addEventListener('click', function () {
                    input.value = '';
                    fileChanged(input);
                });
            });
        });
    },
}

const person = new SYSCHECK.Person("Ma veasna", 23);
SYSCHECK.dropbox.drop_actions();

console.log(person.fullInfo);
console.log(person.Age);
console.log(person.Name);
